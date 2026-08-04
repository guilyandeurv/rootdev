<script setup>
/**
 * Sommaire de page ("Sur cette page"), en remplacement du sommaire natif de
 * VitePress.
 *
 * Le composant natif (`VPDocAsideOutline`) affiche le texte des titres via
 * `el.textContent`, qui ignore forcément l'icône posée dans chaque `<h2>`
 * (un `<span>` vide visuellement, sans texte). Impossible d'y raccrocher une
 * icône sans réécrire le rendu des liens : ce composant réimplémente donc le
 * sommaire — lecture des titres, suivi du lien actif au défilement — en
 * ajoutant l'icône de chaque `<h2>` devant son libellé.
 *
 * Le sommaire natif reste utilisé tel quel dans le menu déroulant mobile
 * (`VPLocalNavOutlineDropdown`, hors de ce panneau) : seule la colonne de
 * droite change ici.
 */
import { nextTick, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { getScrollOffset, onContentUpdated } from 'vitepress'
import RdIcon from './RdIcon.vue'

const items = shallowRef([])
const activeLink = ref(null)
const containerRef = ref(null)
const markerTop = ref(0)
const markerOpacity = ref(0)

/* Même filtre que le sommaire natif : une icône a la classe `rd-i-<nom>`,
   `rd-i-label` est réservée aux libellés de la sidebar et n'apparaît jamais
   ici, mais on l'exclut par cohérence avec `icons/label.mjs`. */
function extractIcon(heading) {
  const iconEl = heading.querySelector(':scope > .rd-i')
  if (!iconEl) return null
  const name = [...iconEl.classList].find((c) => c.startsWith('rd-i-') && c !== 'rd-i-label')
  return name ? name.slice('rd-i-'.length) : null
}

// Reprend la logique de `serializeHeader` de VitePress (mêmes classes
// ignorées), en excluant en plus l'icône elle-même.
function extractTitle(heading) {
  let text = ''
  for (const node of heading.childNodes) {
    if (node.nodeType === 1) {
      if (/\b(?:rd-i|VPBadge|header-anchor|footnote-ref|ignore-header)\b/.test(node.className)) continue
      text += node.textContent
    } else if (node.nodeType === 3) {
      text += node.textContent
    }
  }
  return text.trim()
}

/* Le sommaire du site ne couvre que les H2 (réglage `outline` par défaut de
   VitePress, cf. `config.mjs`) : pas besoin de gérer l'imbrication H3. */
function collect() {
  items.value = [...document.querySelectorAll('.VPDoc h2[id]')].map((el) => ({
    element: el,
    icon: extractIcon(el),
    title: extractTitle(el),
    link: '#' + el.id
  }))
}

function getAbsoluteTop(el) {
  let top = 0
  while (el && el !== document.body) {
    top += el.offsetTop
    el = el.offsetParent
  }
  return el ? top : NaN
}

function updateActive() {
  const list = items.value
  if (!list.length) {
    activeLink.value = null
    return
  }

  const scrollY = window.scrollY
  if (scrollY < 1) {
    activeLink.value = null
    return
  }

  const isBottom = Math.abs(scrollY + window.innerHeight - document.body.offsetHeight) < 1
  if (isBottom) {
    activeLink.value = list[list.length - 1].link
    return
  }

  const limit = scrollY + getScrollOffset() + 4
  let current = null
  for (const item of list) {
    if (getAbsoluteTop(item.element) > limit) break
    current = item.link
  }
  activeLink.value = current
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    updateActive()
  })
}

function onClick(event) {
  const id = event.currentTarget.getAttribute('href').slice(1)
  document.getElementById(decodeURIComponent(id))?.focus({ preventScroll: true })
}

watch(activeLink, async () => {
  await nextTick()
  const el = containerRef.value?.querySelector('a.active')
  if (el) {
    // Le curseur (18px) est plus court que la ligne (32px) : on le centre
    // verticalement dessus plutôt que de le caler sur son bord supérieur.
    markerTop.value = el.offsetTop + (el.offsetHeight - 18) / 2
    markerOpacity.value = 1
  } else {
    markerOpacity.value = 0
  }
})

onContentUpdated(() => {
  collect()
  updateActive()
})

onMounted(() => {
  requestAnimationFrame(updateActive)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav v-if="items.length" class="rd-toc" aria-labelledby="rd-toc-label">
    <div id="rd-toc-label" class="rd-toc-title" role="heading" aria-level="2">
      Sur cette page
    </div>
    <div ref="containerRef" class="rd-toc-body">
      <div class="rd-toc-marker" :style="{ top: markerTop + 'px', opacity: markerOpacity }" />
      <ul class="rd-toc-list">
        <li v-for="item in items" :key="item.link">
          <a
            class="rd-toc-link"
            :class="{ active: item.link === activeLink }"
            :href="item.link"
            :title="item.title"
            @click="onClick"
          >
            <RdIcon v-if="item.icon" :name="item.icon" class="rd-toc-icon" />
            <span class="rd-toc-text">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- L'habillage vit dans `theme/aside.scss`, avec le reste du panneau. -->
