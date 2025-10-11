<template>
  <div class="esd-info" :class="{ 'dark': isDark }">
    <div class="esd-content">
      <img 
        :src="isDark 
          ? '/img/france-competence-dark.png'
          : '/img/france-competence.png'" 
        alt="Logo France Compétences" 
        class="esd-logo"
      />
      <div class="esd-text">
        <p>Ces cours préparent au</p>
        <h3>Titre Professionnel "Administrateur d’infrastructures sécurisées " - RNCP37680</h3>
        <p class="certification-info">Reconnu par France Compétences</p>
      </div>
    </div>
    <div class="shine-effect"></div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<style scoped>
.esd-info {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(100, 108, 255, 0.15);
}

.esd-info:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 25px rgba(100, 108, 255, 0.25);
}

.esd-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.esd-logo {
  width: 250px;
  height: auto;
  border-radius: 4px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 8px rgba(100, 108, 255, 0.2));
}

.esd-info:hover .esd-logo {
  transform: scale(1.02);
  filter: drop-shadow(0 4px 12px rgba(100, 108, 255, 0.3));
}

.esd-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.esd-text p {
  margin: 0;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.esd-text h3 {
  margin: 0;
  font-size: 1.2em;
  color: var(--vp-c-brand);
  font-weight: 600;
  text-shadow: 0 0 15px rgba(100, 108, 255, 0.2);
}

.certification-info {
  font-style: italic;
  margin-top: 0.25rem !important;
}

/* Effet de reflet */
.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(100, 108, 255, 0.4),
    transparent
  );
  transform: skewX(-25deg);
  animation: shine 3s infinite;
  z-index: 1;
}

@keyframes shine {
  0% {
    left: -100%;
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    left: 200%;
    opacity: 1;
  }
}

/* Ajustements pour le thème sombre */
.esd-info.dark {
  background-color: var(--vp-c-default-soft);
  border: 1px solid rgba(144, 164, 183, 1);
  box-shadow: 0 4px 20px rgba(100, 108, 255, 0.2);
}

.esd-info.dark:hover {
  box-shadow: 0 4px 30px rgba(100, 108, 255, 0.3);
}

.esd-info.dark .esd-logo {
  filter: drop-shadow(0 2px 8px rgba(100, 108, 255, 0.3));
}

.esd-info.dark:hover .esd-logo {
  filter: drop-shadow(0 4px 12px rgba(100, 108, 255, 0.4));
}

.esd-info.dark .shine-effect {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
}

@media (max-width: 768px) {
  .esd-content {
    flex-direction: column;
    text-align: center;
  }
  
  .esd-logo {
    width: 140px;
  }
}
</style> 