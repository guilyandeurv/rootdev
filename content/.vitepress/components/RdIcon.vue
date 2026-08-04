<script setup>
/**
 * Icône du registre maison — même jeu que la barre latérale.
 *
 * Rendue en `mask` CSS : aucun SVG dans le bundle JS, la couleur suit le texte
 * et la taille se règle à la CSS (`font-size`) ou via la prop `size`.
 */
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  /** Taille en pixels ; par défaut l'icône suit la taille du texte. */
  size: { type: [Number, String], default: null }
})

const style = computed(() =>
  props.size ? { fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size } : null
)
</script>

<template>
  <span class="rd-i" :class="`rd-i-${name}`" :style="style" aria-hidden="true" />
</template>
