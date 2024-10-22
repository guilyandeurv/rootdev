<template>
  <div v-if="isReady" class="page-info">
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
    <div v-if="isInProgress" class="info-item">
      <span class="emoji">🚧</span>
      <span class="in-progress" title="En cours de rédaction">En cours de rédaction</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, page } = useData()
const isReady = ref(false)

const wordCount = computed(() => {
  const content = document.querySelector('.vp-doc')?.textContent || ''
  return content.trim().split(/\s+/).filter(word => word.length > 0).length
})

const readingTime = computed(() => Math.max(1, Math.ceil(wordCount.value / 200))) // Minimum 1 minute
const isInProgress = computed(() => frontmatter.value.redac === true)
const creationDate = computed(() => frontmatter.value.date || new Date().toISOString().split('T')[0])

const formattedDate = computed(() => {
  const date = new Date(creationDate.value)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
})

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 100) // Augmenté à 100ms pour s'assurer que le contenu est chargé
})
</script>

<style scoped>
.page-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  padding: 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
  box-sizing: border-box;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.emoji {
  font-size: 1.1em;
}

.in-progress {
  color: var(--vp-c-warning);
  font-weight: bold;
}

:root.dark .page-info {
  background-color: var(--vp-c-bg-alt);
}

@media (max-width: 768px) {
  .page-info {
    font-size: 0.8em;
  }
}
</style>
