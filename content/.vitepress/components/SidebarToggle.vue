<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useSidebar } from 'vitepress/theme'
import RdIcon from './RdIcon.vue'

const { hasSidebar } = useSidebar()

const isCollapsed = ref(false)

/**
 * Bord droit de la sidebar, mesuré plutôt que calculé.
 *
 * On ne peut pas caler le bouton en CSS sur `--vp-sidebar-width` : le menu
 * « confort de lecture » (plugin Nolebase) réécrit la largeur réelle de
 * `.VPSidebar` en `!important`, à partir de ses propres variables de mise en
 * page, et l'utilisateur peut en changer à chaud. Toute formule figée finit
 * donc par pointer à côté. On lit le bord réel et on le passe à la feuille de
 * style, qui garde un `calc()` en repli tant que la mesure n'a pas eu lieu.
 */
const sidebarRight = ref(null)

let resizeObserver = null
let classObserver = null
let observed = null

const measure = () => {
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return

  const { right } = sidebar.getBoundingClientRect()
  // Sidebar masquée (repliée, ou tiroir fermé sous 960px) : la mesure ne veut
  // plus rien dire, et la position est de toute façon reprise en CSS.
  if (right > 0) sidebarRight.value = right
}

const observe = () => {
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar || !resizeObserver || sidebar === observed) return

  if (observed) {
    resizeObserver.unobserve(observed)
    observed.removeEventListener('transitionend', measure)
  }
  /**
   * `border-box` explicitement, et non le `content-box` par défaut : les
   * modes du confort de lecture déplacent le bord de la sidebar en jouant
   * *à la fois* sur sa largeur et sur son `padding-left`, si bien que la
   * boîte de contenu, elle, ne bouge pas d'un pixel. À 1920px, la sidebar
   * passe de 512px de large (272 de retrait) à 272 (32 de retrait) : deux
   * fois 208px de contenu. En `content-box`, l'observateur ne voyait donc
   * jamais le changement et le bouton restait planté à l'ancien bord.
   */
  resizeObserver.observe(sidebar, { box: 'border-box' })
  // La largeur est animée sur 0,5s en mode « animé » : on reprend la mesure
  // une fois la transition posée, au cas où les trames intermédiaires
  // n'auraient pas suffi.
  sidebar.addEventListener('transitionend', measure)
  observed = sidebar
}

const toggle = () => {
  isCollapsed.value = !isCollapsed.value
  document.body.classList.toggle('sidebar-hidden', isCollapsed.value)
}

onMounted(() => {
  resizeObserver = new ResizeObserver(measure)

  /**
   * Le menu « confort de lecture » applique ses modes en posant une classe
   * sur `<html>`, et ses largeurs réglables en y écrivant des variables CSS.
   * Un changement de mode peut déplacer le bord de la sidebar sans changer
   * aucune de ses dimensions (le retrait absorbe la différence) : le
   * ResizeObserver reste alors muet, d'où ce second guet sur l'attribut.
   */
  classObserver = new MutationObserver(() => requestAnimationFrame(measure))
  classObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'style'],
  })

  observe()
  measure()
  window.addEventListener('resize', measure)
})

// Changement de page : VitePress remonte la sidebar, l'élément observé n'est
// plus le bon.
watch(hasSidebar, async () => {
  await nextTick()
  observe()
  measure()
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  classObserver?.disconnect()
  observed?.removeEventListener('transitionend', measure)
  observed = null
  window.removeEventListener('resize', measure)
  // Une page sans sidebar démonte ce bouton (`v-if`) : sans ce nettoyage, la
  // classe resterait posée sur `body` et une page suivante avec sidebar la
  // trouverait déjà masquée alors que l'icône, elle, serait repartie à zéro.
  document.body.classList.remove('sidebar-hidden')
})
</script>

<template>
  <button
    v-if="hasSidebar"
    type="button"
    class="sidebar-toggle-btn"
    :style="sidebarRight != null ? { '--rd-sidebar-right': `${sidebarRight}px` } : null"
    :aria-label="isCollapsed ? 'Afficher la barre latérale' : 'Centrer le contenu'"
    :title="isCollapsed ? 'Afficher la barre latérale' : 'Centrer le contenu'"
    @click="toggle"
  >
    <RdIcon :name="isCollapsed ? 'panel-left-open' : 'panel-left-close'" />
  </button>
</template>

<!-- L'habillage vit dans `theme/nav.scss`, section « bouton de repli de la sidebar ». -->
