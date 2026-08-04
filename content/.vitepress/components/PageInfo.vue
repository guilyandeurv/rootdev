<template>
  <div v-if="isReady" class="page-info">
    <div class="page-info-item">
      <RdIcon name="align-left" class="page-info-icon" />
      <span class="word-count">{{ wordCount }} mots</span>
    </div>
    <div class="page-info-item">
      <RdIcon name="clock" class="page-info-icon" />
      <span class="reading-time">{{ readingTime }} min de lecture</span>
    </div>
    <div class="page-info-item">
      <RdIcon name="calendar" class="page-info-icon" />
      <span class="creation-date">Créé le {{ formattedDate }}</span>
    </div>
    <div v-if="formattedUpdate" class="page-info-item">
      <RdIcon name="refresh-cw" class="page-info-icon" />
      <span class="update-date">Mis à jour le {{ formattedUpdate }}</span>
    </div>
    <p v-if="isInProgress" class="page-info-draft">
      <RdIcon name="construction" class="page-info-icon" /> En cours de rédaction
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import RdIcon from './RdIcon.vue'

const { frontmatter, page } = useData()
const route = useRoute()
const isReady = ref(false)
const wordCount = ref(0)

const readingTime = computed(() => Math.max(1, Math.ceil(wordCount.value / 200)))
const isInProgress = computed(() => frontmatter.value.redac === true)
const creationDate = computed(() => frontmatter.value.date || new Date().toISOString().split('T')[0])

const formatDate = (value) =>
  new Date(value).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })

const formattedDate = computed(() => formatDate(creationDate.value))

// `page.lastUpdated` est l'horodatage du dernier commit touchant le fichier
// source, relevé par VitePress à la compilation (`git log -1`). Absent si la
// page n'a jamais été commitée ou si son frontmatter porte `lastUpdated: false`.
const formattedUpdate = computed(() => {
  if (!page.value.lastUpdated) return null

  // Une page jamais retouchée depuis sa création afficherait deux fois la même
  // date : dans une colonne de 224px, la ligne ne dirait rien de plus.
  const updated = formatDate(page.value.lastUpdated)
  return updated === formattedDate.value ? null : updated
})

const countWords = () => {
  if (typeof window !== 'undefined') {
    nextTick(() => {
      const content = document.querySelector('.vp-doc')?.textContent || ''
      wordCount.value = content.trim().split(/\s+/).filter(word => word.length > 0).length
      isReady.value = true
    })
  }
}

watch(() => route.path, () => {
  isReady.value = false
  countWords()
}, { immediate: true })

onMounted(() => {
  countWords()
})
</script>

<!-- L'habillage vit dans `theme/aside.scss`, avec le reste du panneau. -->
