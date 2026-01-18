<script setup>
import { ref } from 'vue'

const techSpecs = ref([
  {
    title: "Event Loop & Async",
    desc: "Modèle de concurrence non-bloquant basé sur une boucle d'événements. Idéal pour les I/O intensifs (réseau, fichiers).",
    category: "Architecture"
  },
  {
    title: "Moteur V8 & JIT",
    desc: "Compilation Just-In-Time (JIT) haute performance. Le code est transformé en langage machine à la volée pour une exécution rapide.",
    category: "Performance"
  },
  {
    title: "Universalité (Isomorphic)",
    desc: "Le seul langage s'exécutant nativement dans tous les navigateurs web et sur serveur (via Node.js/Deno/Bun).",
    category: "Portabilité"
  },
  {
    title: "Écosystème npm",
    desc: "Le plus grand registre de paquets logiciels au monde. Une infinité de bibliothèques pour accélérer le développement.",
    category: "DevOps"
  }
])
</script>

<template>
  <div class="js-pro-wrapper">
    
    <header class="header-split">
      <div class="header-text">
        <div class="tag-pill">Le Langage du Web</div>
        <h1>JavaScript</h1>
        <p class="lead-text">
          Le langage de programmation le plus utilisé au monde.<br>
          Indispensable pour le frontend moderne, puissant pour le backend avec <strong>Node.js</strong>, et massivement scalable.
        </p>
        
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">Standard</span>
            <span class="meta-value">ECMAScript (ES2024+)</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <span class="meta-label">Typage</span>
            <span class="meta-value">Dynamique (Faible)</span>
          </div>
        </div>
      </div>

      <div class="header-logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
          alt="JavaScript Logo" 
        />
      </div>
    </header>

    <div class="contrib-banner">
      <div class="contrib-content">
        <div class="contrib-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <div class="contrib-text">
          <h3>Contribuez à ces cours !</h3>
          <p>Ce projet est <strong>Open Source</strong>. Vous pouvez ajouter du contenu, corriger une erreur ou proposer une amélioration directement sur GitHub.</p>
        </div>
      </div>
      <a href="https://github.com/guilyandeurv/rootdev" target="_blank" class="contrib-btn">
        Accéder au dépôt <span class="arrow">→</span>
      </a>
    </div>

    <section class="content-section">
      <h2 class="section-title">Domaines d'Application</h2>
      
      <div class="cards-grid">
        <article class="pro-card">
          <div class="card-top">
            <span class="card-icon">🎨</span>
            <h3>Frontend & UI</h3>
          </div>
          <p>
            Création d'interfaces réactives et d'applications "Single Page" (SPA). 
            Domine le marché via ses frameworks modernes permettant une expérience utilisateur fluide.
          </p>
          <div class="tags-container">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">DOM API</span>
          </div>
        </article>

        <article class="pro-card">
          <div class="card-top">
            <span class="card-icon">🚀</span>
            <h3>Backend & API (Node.js)</h3>
          </div>
          <p>
            Architecture serveur légère et scalable. 
            Permet d'utiliser le <strong>même langage</strong> côté client et serveur, simplifiant le partage de code et la gestion des équipes.
          </p>
          <div class="tags-container">
            <span class="tech-tag">Express/Fastify</span>
            <span class="tech-tag">Serverless</span>
            <span class="tech-tag">GraphQL</span>
          </div>
        </article>

        <article class="pro-card">
          <div class="card-top">
            <span class="card-icon">📱</span>
            <h3>Mobile & Desktop</h3>
          </div>
          <p>
            Développement d'applications natives multi-plateformes à partir d'une base de code web unique. 
            Réduit drastiquement les coûts de développement.
          </p>
          <div class="tags-container">
            <span class="tech-tag">React Native</span>
            <span class="tech-tag">Electron</span>
            <span class="tech-tag">Ionic</span>
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
              <th width="25%" class="highlight-header">JavaScript 🟨</th>
              <th width="25%">TypeScript</th>
              <th width="20%">Python</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Typage</strong></td>
              <td class="highlight-cell">Dynamique (Faible)</td>
              <td>Statique (Fort)</td>
              <td>Dynamique (Fort)</td>
            </tr>
            <tr>
              <td><strong>Exécution</strong></td>
              <td class="highlight-cell">Navigateur + Serveur</td>
              <td>Transpilé vers JS</td>
              <td>Serveur / Local</td>
            </tr>
            <tr>
              <td><strong>Modèle I/O</strong></td>
              <td class="highlight-cell">Non-bloquant (Async)</td>
              <td>Non-bloquant (Async)</td>
              <td>Bloquant (par défaut)</td>
            </tr>
             <tr>
              <td><strong>Courbe d'apprentissage</strong></td>
              <td class="highlight-cell">Rapide (Flexible)</td>
              <td>Moyenne (Rigueur)</td>
              <td>Très Rapide (Lisible)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* --- CONTENEUR PRINCIPAL --- */
.js-pro-wrapper {
  font-family: var(--vp-font-family-base, sans-serif);
  color: var(--vp-c-text-1);
  max-width: 1200px;
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
  color: var(--vp-c-text-2);
}

/* --- HEADER --- */
.header-split {
  display: flex;
  flex-direction: column-reverse;
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
  color: var(--vp-c-brand); /* Jaune JS si configuré dans VitePress, sinon couleur brand */
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
  color: var(--vp-c-text-1);
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
  width: 140px;
  height: auto;
  opacity: 0.9;
  filter: drop-shadow(0 0 30px rgba(0,0,0,0.2));
  border-radius: 12px; /* Petit bonus pour le logo JS qui est carré */
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
  background-color: var(--vp-c-bg-alt);
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
  color: var(--vp-c-text-1);
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

/* --- BANNIERE OPEN SOURCE --- */
.contrib-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(to right, rgba(var(--vp-c-brand-rgb), 0.1), rgba(var(--vp-c-brand-rgb), 0.05));
  border: 1px solid rgba(var(--vp-c-brand-rgb), 0.2);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 3rem; /* Espace avant les cours */
}

@media (min-width: 768px) {
  .contrib-banner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.contrib-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
}

/* Icone GitHub */
.contrib-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  flex-shrink: 0; /* Empêche l'icone de s'écraser */
}

.contrib-text h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: var(--vp-c-text-1);
}
.contrib-text p {
  font-size: 0.95rem;
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}
.contrib-text strong {
  color: var(--vp-c-brand);
}

/* Bouton d'action */
.contrib-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg); /* Texte blanc/noir selon le thème brand */
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  white-space: nowrap;
}

.contrib-btn:hover {
  background-color: var(--vp-c-brand-dark); /* Assombrit au survol */
  transform: translateY(-2px);
  color: var(--vp-c-bg);
}

.contrib-btn .arrow {
  transition: transform 0.2s;
}
.contrib-btn:hover .arrow {
  transform: translateX(4px);
}
</style>