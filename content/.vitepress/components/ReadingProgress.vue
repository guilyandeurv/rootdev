<template>
  <div v-if="!isHomePage" class="reading-progress-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    <button v-show="showScrollTop" @click="scrollToTop" class="scroll-top-button" aria-label="Retour en haut de la page">
      <span class="emoji">⬆️</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')

const progress = ref(0)
const showScrollTop = ref(false)

const updateProgress = () => {
  const scrollPosition = window.scrollY
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = (scrollPosition / documentHeight) * 100
  showScrollTop.value = scrollPosition > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  if (!isHomePage.value) {
    window.addEventListener('scroll', updateProgress)
    updateProgress()
  }
})

onUnmounted(() => {
  if (!isHomePage.value) {
    window.removeEventListener('scroll', updateProgress)
  }
})
</script>

<style scoped>
.reading-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 1000;
}

.progress-bar {
  height: 100%;
  background-color: var(--vp-c-brand);
  transition: width 0.2s ease;
}

.scroll-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: 0.7;
  z-index: 1000;
}

.scroll-top-button:hover {
  opacity: 1;
}

.emoji {
  font-size: 1.2em;
}
</style>
