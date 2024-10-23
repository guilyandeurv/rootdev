<template>
  <div class="focus-mode-container">
    <button @click="toggleFocusMode" class="focus-mode-button" :class="{ 'active': isFocusModeActive }">
      <span class="emoji">{{ isFocusModeActive ? '👀' : '🔍' }}</span>
      {{ isFocusModeActive ? 'Désactiver' : 'Activer' }} le mode focus
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isFocusModeActive = ref(false)

const toggleFocusMode = () => {
  isFocusModeActive.value = !isFocusModeActive.value
  document.body.classList.toggle('focus-mode-active', isFocusModeActive.value)
}
</script>

<style>
.focus-mode-container {
  margin-top: 1rem;
}

.focus-mode-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.focus-mode-button:hover {
  background-color: var(--vp-c-bg-mute);
}

.focus-mode-button.active {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.focus-mode-active .VPSidebar,
.focus-mode-active .VPNavBar {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

.focus-mode-active .VPDoc {
  max-width: 100% !important;
}

.focus-mode-active .VPDocAside {
  position: relative;
  z-index: 10;
}

.focus-mode-active .page-info,
.focus-mode-active .VPDocAside .content {
  filter: none !important;
  position: relative;
  z-index: 10;
}

.focus-mode-active .VPDocAside::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vp-c-bg);
  z-index: 5;
}
</style>
