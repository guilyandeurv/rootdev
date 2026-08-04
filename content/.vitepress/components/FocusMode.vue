<template>
  <button
    type="button"
    role="switch"
    class="focus-toggle"
    :aria-checked="isFocusModeActive"
    @click="toggleFocusMode"
  >
    <span class="focus-toggle-label">
      <RdIcon name="focus" class="focus-toggle-icon" />
      Mode focus
    </span>
    <span class="focus-toggle-track" aria-hidden="true">
      <span class="focus-toggle-knob" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import RdIcon from './RdIcon.vue'

const isFocusModeActive = ref(false)

const toggleFocusMode = () => {
  isFocusModeActive.value = !isFocusModeActive.value
  document.body.classList.toggle('focus-mode-active', isFocusModeActive.value)
}

// Une page sans sommaire démonte l'aside : sans ce nettoyage, la nav et la
// sidebar resteraient floutées sans plus aucun bouton pour les rétablir.
onUnmounted(() => {
  document.body.classList.remove('focus-mode-active')
})
</script>

<!-- L'habillage vit dans `theme/aside.scss`, avec le reste du panneau. -->
