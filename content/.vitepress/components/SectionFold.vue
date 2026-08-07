<script setup>
/**
 * Repli des sections d'une page Markdown.
 *
 * Chaque `<h2>` reçoit un bouton qui masque tout ce qui le suit jusqu'au `<h2>`
 * suivant. Le `<h1>` est le titre de la page : il n'ouvre pas de section et
 * n'est donc jamais replié — comme le sommaire, qui ne liste que les `<h2>`
 * (cf. `TocOutline.vue`).
 *
 * Le composant ne réorganise pas le DOM rendu par VitePress : il pose une
 * classe sur chacun des blocs de la section plutôt que de les regrouper dans
 * un conteneur. Le Markdown est compilé par Vue en nœuds *statiques*, retirés
 * au démontage en parcourant la fratrie du premier au dernier : déplacer ces
 * nœuds casserait ce parcours et laisserait des blocs orphelins d'une page à
 * l'autre. Une classe, elle, ne change rien à la structure.
 *
 * Le repli se désactive page par page avec `fold: false` dans le frontmatter.
 */
import { onMounted, onUnmounted } from 'vue'
import { getScrollOffset, onContentUpdated, useData } from 'vitepress'

const { frontmatter } = useData()

/* `name="chevron-down"` : repère pour `npm run icons:sync`, qui reconstruit le
   registre en cherchant ce motif dans les sources. Le chevron est posé en HTML
   brut (le bouton vit hors de l'arbre Vue, dans le titre rendu par VitePress) :
   sans ce repère, la synchronisation retirerait l'icône du registre. */
const CHEVRON = 'chevron-down'

const TOGGLE = 'rd-fold-toggle'
const FOLDED = 'rd-folded'
const HIDDEN = 'rd-fold-hidden'
const REVEAL = 'rd-fold-reveal'

/** Conteneur du Markdown compilé : `<template><div>…</div></template>`. */
let root = null

function headings() {
  return root ? [...root.children].filter((el) => el.tagName === 'H2') : []
}

/** Les blocs d'une section : tout ce qui suit le titre jusqu'au `<h2>` suivant. */
function blocksOf(heading) {
  const blocks = []
  for (let el = heading.nextElementSibling; el && el.tagName !== 'H2'; el = el.nextElementSibling) {
    blocks.push(el)
  }
  return blocks
}

const label = (folded) => (folded ? 'Déplier la section' : 'Replier la section')

function setFolded(heading, folded) {
  heading.classList.toggle(FOLDED, folded)

  const button = heading.querySelector(`:scope > .${TOGGLE}`)
  if (button) {
    button.setAttribute('aria-expanded', String(!folded))
    button.setAttribute('aria-label', label(folded))
    button.title = label(folded)
  }

  for (const block of blocksOf(heading)) {
    block.classList.toggle(HIDDEN, folded)
    if (folded) continue

    /* L'animation d'ouverture se rejoue à chaque dépliage : la classe est
       retirée dès qu'elle est finie. */
    block.classList.add(REVEAL)
    block.addEventListener('animationend', () => block.classList.remove(REVEAL), { once: true })
  }
}

function decorate() {
  root = frontmatter.value.fold === false ? null : document.querySelector('.VPDoc .vp-doc > div')
  if (!root) return

  for (const heading of headings()) {
    // Une navigation interne remonte le contenu à neuf, mais `onContentUpdated`
    // peut aussi se déclencher sans que les titres aient changé.
    if (heading.querySelector(`:scope > .${TOGGLE}`)) continue

    const button = document.createElement('button')
    button.type = 'button'
    button.className = TOGGLE
    button.setAttribute('aria-expanded', 'true')
    button.setAttribute('aria-label', label(false))
    button.title = label(false)
    button.innerHTML = `<span class="rd-i rd-i-${CHEVRON}" aria-hidden="true"></span>`
    heading.append(button)
  }
}

// Délégation : les boutons sont créés hors de l'arbre Vue, et le contenu est
// remonté à chaque changement de page.
function onClick(event) {
  const button = event.target instanceof Element ? event.target.closest(`.${TOGGLE}`) : null
  if (!button) return

  const heading = button.parentElement
  setFolded(heading, !heading.classList.contains(FOLDED))
}

/** Le `<h2>` qui ouvre la section contenant `el`. */
function headingOf(el) {
  let node = el
  while (node && node.parentElement !== root) node = node.parentElement
  while (node && node.tagName !== 'H2') node = node.previousElementSibling
  return node
}

/* Une ancre peut viser une section repliée — lien du sommaire, résultat de
   recherche, lien partagé. Le contenu masqué est alors hors d'atteinte du
   navigateur : on rouvre la section, puis on rejoue le défilement. */
function revealHash() {
  if (!root) return

  const id = decodeURIComponent(location.hash.slice(1))
  const target = id ? document.getElementById(id) : null
  if (!target) return

  const heading = target.tagName === 'H2' ? target : headingOf(target)
  if (!heading?.classList.contains(FOLDED)) return

  setFolded(heading, false)
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - getScrollOffset() })
}

onContentUpdated(decorate)

onMounted(() => {
  document.addEventListener('click', onClick)
  window.addEventListener('hashchange', revealHash)
})

onUnmounted(() => {
  document.removeEventListener('click', onClick)
  window.removeEventListener('hashchange', revealHash)
})
</script>

<template>
  <!-- Composant sans rendu : il agit sur le contenu déjà en page. -->
</template>

<!-- L'habillage vit dans `theme/fold.scss`. -->
