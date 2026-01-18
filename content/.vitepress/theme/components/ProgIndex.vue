<script setup>
import { ref } from 'vue'

const modules = ref([
  {
    title: "🟨 JavaScript (web)",
    description: "Le langage incontournable pour le développement Frontend et Backend.",
    topics: [
      { title: "Présentation générale", link: "/programmation/javascript/index", intro: "Pourquoi choisir JS ? Écosystème et V8." },
      { title: "Introduction & syntaxe", link: "/programmation/javascript/intro", intro: "Premiers scripts et console navigateur." },
      { title: "Les variables", link: "/programmation/javascript/variables", intro: "Types de données, let, const et portée." },
      { title: "Les fonctions", link: "/programmation/javascript/fonction", intro: "Logique modulaire, paramètres et retours." }
    ]
  },
  {
    title: "🐍 Python (general & web)",
    description: "Syntaxe claire pour l'automatisation, la data et le web avec Django.",
    topics: [
      { title: "Présentation Générale", link: "/programmation/python/index", intro: "Philosophie et domaines d'application." },
      { title: "Introduction", link: "/programmation/python/intro", intro: "Installation et premiers pas." },
      { title: "Fonctions d'origine", link: "/programmation/python/fonction-dorigine", intro: "Maîtriser les built-ins (len, print, type...)." },
      { title: "Gestion des Erreurs", link: "/programmation/python/erreurs", intro: "Exceptions (try/except) et debugging." },
      { title: "Framework Django", link: "/programmation/python/django", intro: "Création d'applications web robustes." }
    ]
  },
  {
    title: "🦀 Rust (système)",
    description: "Performance et sécurité mémoire sans Garbage Collector.",
    topics: [
      { title: "Présentation générale", link: "/programmation/rust/index", intro: "Le remplaçant moderne du C++." },
      { title: "Introduction", link: "/programmation/rust/fondamentaux/intro", intro: "Toolchain Cargo et structure de projet." },
      { title: "Variables & mutabilité", link: "/programmation/rust/fondamentaux/variables", intro: "Gestion stricte de la mémoire et typage." }
    ]
  },
  {
    title: "🔵 Langage C (bas niveau)",
    description: "Comprendre le fonctionnement de la machine et de la mémoire.",
    topics: [
      { title: "Présentation générale", link: "/programmation/c/index", intro: "Le pilier de l'informatique moderne." },
      { title: "Introduction", link: "/programmation/c/intro", intro: "Compilation, structure d'un programme et Main." }
    ]
  },
  {
    title: "💎 Ruby (scripting)",
    description: "Un langage conçu pour le bonheur du développeur.",
    topics: [
      { title: "Présentation générale", link: "/programmation/ruby/index", intro: "Objet pur et philosophie Rails." },
      { title: "Introduction", link: "/programmation/ruby/intro", intro: "Syntaxe élégante et IRB." }
    ]
  }
])

// Section séparée pour les outils Python orientés Sécurité
const pythonTools = ref([
  { title: "Énumération Sous-domaines", link: "/programmation/python/outils/enum-sd", intro: "Reconnaissance DNS active." },
  { title: "Énumération Dossiers", link: "/programmation/python/outils/enum-dos", intro: "Fuzzing d'URL et découverte." },
  { title: "Scanner Réseau", link: "/programmation/python/outils/scan-net", intro: "Découverte d'hôtes (ARP/ICMP)." },
  { title: "Scanner de Ports", link: "/programmation/python/outils/scan-por", intro: "Socket programming TCP/UDP." },
  { title: "Téléchargeur de Fichiers", link: "/programmation/python/outils/tel-fic", intro: "Récupération de payloads distants." },
  { title: "Cracker de Chiffrement", link: "/programmation/python/outils/crack", intro: "Bruteforce de hash et ZIP." },
  { title: "Enregistreur de Frappe", link: "/programmation/python/outils/listener", intro: "Keylogger et interception d'input." },
  { title: "SSH Bruteforce", link: "/programmation/python/outils/ssh-bru", intro: "Attaque dictionnaire sur protocole SSH." }
])
</script>

<template>
  <div class="prog-hub-wrapper">
    
    <header class="header-split">
      <div class="header-text">
        <div class="tag-pill">Développement</div>
        <h1>Programmation</h1>
        <p class="lead-text">
          Maîtrisez les langages fondamentaux.<br>
          Du scripting rapide avec <strong>Python</strong> à la rigueur système de <strong>Rust</strong>, 
          en passant par l'incontournable <strong>JavaScript</strong>.
        </p>
        
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">Langages</span>
            <span class="meta-value">5 Majeurs</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <span class="meta-label">Focus</span>
            <span class="meta-value">Web & Sécurité</span>
          </div>
        </div>
      </div>

      <div class="header-logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" 
          alt="Code Logo" 
          style="filter: hue-rotate(190deg);"
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
      <h2 class="section-title">Parcours par Langage</h2>
      <p class="section-subtitle">Les fondations syntaxiques et théoriques.</p>
      
      <div class="modules-grid">
        <div v-for="(module, mIndex) in modules" :key="mIndex" class="module-card">
          <div class="module-header">
            <h3>{{ module.title }}</h3>
            <p>{{ module.description }}</p>
          </div>
          
          <div class="module-links">
            <a v-for="(topic, tIndex) in module.topics" :key="tIndex" :href="topic.link" class="topic-link">
              <span class="topic-title">{{ topic.title }}</span>
              <span class="topic-intro">{{ topic.intro }}</span>
              <span class="topic-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2 class="section-title">🐍 Python : Outils Offensifs</h2>
      <p class="section-subtitle">Application du langage à la cybersécurité (Black Hat Python).</p>
      
      <div class="tools-grid">
        <div class="module-card special-card-full">
          <div class="module-header header-dark">
            <h3>🛠️ Scripting de Sécurité</h3>
            <p>Création d'outils d'attaque et d'analyse réseau "from scratch".</p>
          </div>
          <div class="module-links grid-links">
             <a v-for="(tool, tIndex) in pythonTools" :key="tIndex" :href="tool.link" class="topic-link tool-item">
              <div>
                <span class="topic-title">{{ tool.title }}</span>
                <span class="topic-intro">{{ tool.intro }}</span>
              </div>
              <span class="topic-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* --- LAYOUT GENERAL --- */
.prog-hub-wrapper {
  font-family: var(--vp-font-family-base, sans-serif);
  color: var(--vp-c-text-1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* TYPOGRAPHIE */
h1, h2, h3 { margin: 0; font-weight: 600; color: var(--vp-c-text-1); }
p { line-height: 1.6; margin: 0; color: var(--vp-c-text-2); }

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
.header-text { flex: 1; }
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
}
h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 1rem; letter-spacing: -0.02em; }
.lead-text { font-size: 1.15rem; margin-bottom: 2rem; max-width: 600px; color: var(--vp-c-text-1); }
.meta-row { display: flex; align-items: center; gap: 1.5rem; }
.meta-item { display: flex; flex-direction: column; }
.meta-sep { width: 1px; height: 30px; background: var(--vp-c-divider); }
.meta-label { font-size: 0.75rem; text-transform: uppercase; color: var(--vp-c-text-2); }
.meta-value { font-weight: 600; font-size: 1rem; }
.header-logo img { width: 140px; height: auto; opacity: 0.9; filter: drop-shadow(0 0 30px rgba(0,0,0,0.2)); }

/* --- SECTION COURS --- */
.content-section { margin-bottom: 4rem; }
.section-title { font-size: 1.75rem; margin-bottom: 0.5rem; }
.section-subtitle { margin-bottom: 2rem; font-size: 1.05rem; }

/* GRID SYSTEM */
.modules-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 960px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* CARTE MODULE */
.module-card {
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.module-header {
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.module-header h3 { font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--vp-c-brand); }
.module-header p { font-size: 0.9rem; }

/* LIENS */
.module-links {
  display: flex;
  flex-direction: column;
}
.topic-link {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: background-color 0.2s;
}
.topic-link:last-child { border-bottom: none; }
.topic-link:hover { background-color: var(--vp-c-bg-soft); }

.topic-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}
.topic-intro {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.topic-arrow {
  display: none;
  color: var(--vp-c-brand);
  font-weight: bold;
}

@media (min-width: 640px) {
  .topic-link { flex-direction: row; align-items: center; justify-content: space-between; gap: 1rem; }
  .topic-title { margin-bottom: 0; min-width: 160px; }
  .topic-intro { flex-grow: 1; }
  .topic-arrow { display: block; }
}

/* --- SPECIAL TOOLS SECTION --- */
.tools-grid {
  display: block;
}
.special-card-full {
  border-color: var(--vp-c-brand);
}
.header-dark {
  background: rgba(var(--vp-c-brand-rgb), 0.1); /* Teinte légère de la marque */
}
/* Grille interne pour les outils (2 colonnes dans la grande carte) */
.grid-links {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grid-links {
    grid-template-columns: 1fr 1fr;
  }
  .tool-item:nth-last-child(2) { border-bottom: none; } /* Enlève bordure avant dernier sur desktop */
}
/* Ajustement des bordures en mode grille */
.tool-item {
  border-right: 1px solid var(--vp-c-divider);
}
@media (max-width: 767px) {
  .tool-item { border-right: none; }
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