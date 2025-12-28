<script setup>
import { ref } from 'vue'

const techSpecs = ref([
  {
    title: "Ownership & Borrowing",
    desc: "Gestion mémoire unique au monde. Le compilateur vérifie la propriété des données, éliminant les erreurs de segmentation.",
    category: "Architecture"
  },
  {
    title: "Sécurité (Memory Safety)",
    desc: "Protection garantie contre les buffer overflows et les accès invalides, sans utiliser de Garbage Collector.",
    category: "Sécurité"
  },
  {
    title: "Interopérabilité C",
    desc: "Peut appeler du code C (et être appelé par lui) sans surcoût de performance (Zero-cost FFI).",
    category: "Intégration"
  },
  {
    title: "Toolchain Cargo",
    desc: "Un seul outil pour tout gérer : dépendances, compilation, tests, documentation et publication.",
    category: "DevOps"
  }
])
</script>

<template>
  <div class="rust-pro-wrapper">
    
    <header class="header-split">
      <div class="header-text">
        <div class="tag-pill">Langage Système</div>
        <h1>Rust</h1>
        <p class="lead-text">
          Le standard industriel pour la performance et la sécurité. <br>
          Conçu pour les infrastructures critiques, la cybersécurité offensive et les systèmes embarqués.
        </p>
        
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">Version Stable</span>
            <span class="meta-value">v1.83+</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <span class="meta-label">Licence</span>
            <span class="meta-value">MIT / Apache 2.0</span>
          </div>
        </div>
      </div>

      <div class="header-logo">
        <img 
          src="https://prev.rust-lang.org/logos/rust-logo-512x512.png" 
          alt="Rust Logo" 
        />
      </div>
    </header>

    <section class="content-section">
      <h2 class="section-title">Domaines d'Application</h2>
      
      <div class="cards-grid">
        <article class="pro-card">
          <div class="card-top">
            <span class="card-icon">🛡️</span>
            <h3>Cybersécurité & Recherche</h3>
          </div>
          <p>
            Privilégié pour le <strong>développement d'outils offensifs</strong> (Red Teaming) et défensifs. 
            Sa gestion mémoire stricte élimine mathématiquement les classes de vulnérabilités les plus courantes (CVEs).
          </p>
          <div class="tags-container">
            <span class="tech-tag">Malware Dev</span>
            <span class="tech-tag">Reverse Engineering</span>
            <span class="tech-tag">Fuzzing</span>
          </div>
        </article>

        <article class="pro-card">
          <div class="card-top">
            <span class="card-icon">⚙️</span>
            <h3>Infrastructure & SysAdmin</h3>
          </div>
          <p>
            Remplace progressivement les outils GNU/Linux historiques et les scripts Python 
            pour les tâches critiques nécessitant <strong>robustesse</strong> et faible empreinte ressources.
          </p>
          <div class="tags-container">
            <span class="tech-tag">CLI Tools</span>
            <span class="tech-tag">Monitoring</span>
            <span class="tech-tag">Virtualisation</span>
          </div>
        </article>

        <article class="pro-card">
          <div class="card-top">
            <span class="card-icon">⚡</span>
            <h3>Performance & Web</h3>
          </div>
          <p>
            Architecture de backends scalables capable de traiter des milliers de requêtes/seconde. 
            Support natif de <strong>WebAssembly</strong> pour le web haute performance.
          </p>
          <div class="tags-container">
            <span class="tech-tag">Microservices</span>
            <span class="tech-tag">Game Engine</span>
            <span class="tech-tag">Wasm</span>
          </div>
        </article>
      </div>
    </section>

    <section class="content-section">
      <h2 class="section-title">Spécifications Techniques</h2>
      <div class="specs-list">
        <div v-for="(spec, index) in techSpecs" :key="index" class="spec-item">
          <div class="spec-col-left">
            <span class="spec-category">{{ spec.category }}</span>
          </div>
          <div class="spec-col-right">
            <h4>{{ spec.title }}</h4>
            <p>{{ spec.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2 class="section-title">Comparatif Technique</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th width="30%">Critère</th>
              <th width="25%" class="highlight-header">Rust 🦀</th>
              <th width="25%">C++</th>
              <th width="20%">Python</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gestion Mémoire</strong></td>
              <td class="highlight-cell">Compile-time (Sûr)</td>
              <td>Manuelle (Risquée)</td>
              <td>Garbage Collector</td>
            </tr>
            <tr>
              <td><strong>Performance</strong></td>
              <td class="highlight-cell">Native / Métal</td>
              <td>Native / Métal</td>
              <td>Interprétée (Lente)</td>
            </tr>
            <tr>
              <td><strong>Erreurs Runtime</strong></td>
              <td class="highlight-cell">Très Rares (Panic)</td>
              <td>Segfaults fréquents</td>
              <td>Exceptions fréquentes</td>
            </tr>
             <tr>
              <td><strong>Déploiement</strong></td>
              <td class="highlight-cell">1 Binaire Statique</td>
              <td>Dépendances (DLL/SO)</td>
              <td>Environnement Virtuel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* --- CONTENEUR PRINCIPAL --- */
.rust-pro-wrapper {
  font-family: var(--vp-font-family-base, sans-serif);
  color: var(--vp-c-text-1);
  max-width: 1200px; /* Large mais pas illimité pour garder la lecture fluide */
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* TYPOGRAPHIE GLOBALE */
h1, h2, h3, h4 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-weight: 600;
}
p {
  line-height: 1.6;
  margin: 0;
  color: var(--vp-c-text-2); /* Fallback */
}

/* --- HEADER --- */
.header-split {
  display: flex;
  flex-direction: column-reverse; /* Logo en haut sur mobile */
  gap: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 3rem;
  align-items: center;
}

@media (min-width: 768px) {
  .header-split {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
}

.header-text {
  flex: 1;
}

.tag-pill {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--vp-c-brand);
  background: rgba(var(--vp-c-brand-rgb), 0.1);
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.lead-text {
  font-size: 1.15rem;
  color: var(--vp-c-text-1); /* Texte clair forcé */
  margin-bottom: 2rem;
  max-width: 600px;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.meta-item {
  display: flex;
  flex-direction: column;
}
.meta-sep {
  width: 1px;
  height: 30px;
  background: var(--vp-c-divider);
}
.meta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
.meta-value {
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.header-logo img {
  width: 160px;
  height: auto;
  opacity: 0.9;
  filter: drop-shadow(0 0 30px rgba(0,0,0,0.2));
}

/* --- SECTIONS COMMUNES --- */
.content-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

/* --- CARDS GRID --- */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 960px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pro-card {
  background-color: var(--vp-c-bg-alt); /* Fond alternatif plus clair */
  border: 1px solid var(--vp-c-divider);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
}

.pro-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.card-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.card-icon {
  font-size: 1.4rem;
}
.pro-card h3 {
  font-size: 1.1rem;
}
.pro-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-1); /* FORCE LE TEXTE CLAIR */
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* Tags dans les cartes */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}
.tech-tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}

/* --- SPECS LIST --- */
.specs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spec-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 6px;
  border-left: 3px solid var(--vp-c-brand);
}
@media (min-width: 768px) {
  .spec-item {
    flex-direction: row;
    align-items: baseline;
    gap: 2rem;
  }
}

.spec-col-left {
  min-width: 180px;
  margin-bottom: 0.5rem;
}
.spec-category {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-brand);
}

.spec-col-right h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-1);
}
.spec-col-right p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

/* --- TABLEAU --- */
.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
.data-table th, .data-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}
.data-table th {
  background-color: var(--vp-c-bg-alt);
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.data-table tr:last-child td {
  border-bottom: none;
}

/* Highlight colonnes */
.highlight-header {
  color: var(--vp-c-brand) !important;
  background-color: rgba(var(--vp-c-brand-rgb), 0.05) !important;
}
.highlight-cell {
  font-weight: 600;
  color: var(--vp-c-text-1);
  background-color: rgba(var(--vp-c-brand-rgb), 0.02);
}
</style>