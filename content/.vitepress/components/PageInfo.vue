<template>
  <div v-if="isReady" class="page-info" :class="{ 'under-construction': isInProgress }">
    <div class="info-content">
      <div class="info-item">
        <span class="emoji">📝</span>
        <span class="word-count">{{ wordCount }} mots</span>
      </div>
      <div class="info-item">
        <span class="emoji">⏱️</span>
        <span class="reading-time">{{ readingTime }} min de lecture</span>
      </div>
      <div class="info-item">
        <span class="emoji">📅</span>
        <span class="creation-date">Créé le {{ formattedDate }}</span>
      </div>
    </div>
    <div v-if="isInProgress" class="construction-banner">
      <div class="banner-text">
        <span class="emoji">🚧</span> En cours de rédaction
      </div>
    </div>
    <FocusMode />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import FocusMode from './FocusMode.vue'

const { frontmatter, page } = useData()
const isReady = ref(false)

const wordCount = computed(() => {
  const content = document.querySelector('.vp-doc')?.textContent || ''
  return content.trim().split(/\s+/).filter(word => word.length > 0).length
})

const readingTime = computed(() => Math.max(1, Math.ceil(wordCount.value / 200)))
const isInProgress = computed(() => frontmatter.value.redac === true)
const creationDate = computed(() => frontmatter.value.date || new Date().toISOString().split('T')[0])

const formattedDate = computed(() => {
  const date = new Date(creationDate.value)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
})

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 100)
})
</script>

<style scoped>
.page-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  padding: 12px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.info-content {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.emoji {
  font-size: 1.1em;
}

.under-construction {
  border: 2px solid var(--vp-c-warning);
}

.construction-banner {
  padding: 4px 0;
}

.banner-text {
  text-align: center;
  font-weight: bold;
  color: var(--vp-c-warning);
}

:root.dark .page-info {
  background-color: var(--vp-c-bg-alt);
}

:root.dark .banner-text {
  color: var(--vp-c-warning);
}

@media (max-width: 768px) {
  .page-info {
    font-size: 0.8em;
  }
}
</style>
