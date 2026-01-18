<script setup>
import { ref } from 'vue'

// Données structurées pour les modules de cours
const modules = ref([
  {
    title: "🏛️ Gouvernance & gestion (GRC)",
    description: "Le cadre organisationnel, juridique et normatif de la sécurité.",
    topics: [
      { title: "Normes Internationales", link: "/cybersecurite/gouv/normes", intro: "Vue d'ensemble des standards ISO et règlements." },
      { title: "Norme ISO 27001", link: "/cybersecurite/gouv/iso27001", intro: "Implémentation et certification d'un SMSI." },
      { title: "ITIL & bonnes Pratiques", link: "/cybersecurite/gouv/itil", intro: "Gestion des services IT sécurisés." },
      { title: "PCA / PRA", link: "/cybersecurite/gouv/pca-pra", intro: "Stratégies de continuité et reprise d'activité." }
    ]
  },
  {
    title: "🛡️ Cyberdéfense (Blue Team)",
    description: "Protéger les infrastructures, durcir les systèmes et organiser la réponse.",
    topics: [
      { title: "La cybersécurité en France", link: "/cybersecurite/cyberdefense/cyber-france", intro: "Acteurs (ANSSI), lois et écosystème national." },
      { title: "Audit d'un SI", link: "/cybersecurite/cyberdefense/audit", intro: "Méthodologie pour évaluer la conformité." },
      { title: "Durcissement Windows", link: "/cybersecurite/cyberdefense/durcissement", intro: "Réduire la surface d'attaque des OS Microsoft." },
      { title: "Architecture SOC", link: "/cybersecurite/cyberdefense/soc", intro: "Organisation d'un Security Operation Center." }
    ]
  },
  {
    title: "⚠️ Détection & investigation",
    description: "Repérer les menaces dans les logs et analyser les traces numériques.",
    topics: [
      { title: "Règles SNORT", link: "/cybersecurite/cyberdefense/detection/snort", intro: "Écriture de signatures pour IDS/IPS." },
      { title: "Journaux Windows", link: "/cybersecurite/cyberdefense/detection/event-windows", intro: "Maîtriser l'Event Viewer et les Event IDs critiques." },
      { title: "Investigation PowerShell", link: "/cybersecurite/cyberdefense/detection/powershell", intro: "Détecter les scripts malveillants et l'obfuscation." },
      { title: "Techniques de Persistance", link: "/cybersecurite/cyberdefense/detection/persistence", intro: "Comment les attaquants s'installent durablement." }
    ]
  },
  {
    title: "🧩 Maîtriser Splunk (SIEM)",
    description: "Cours complet sur l'outil leader d'analyse de logs.",
    topics: [
      { title: "Architecture Splunk", link: "/cybersecurite/cyberdefense/splunk/intro", intro: "Indexers, Forwarders et Search Heads." },
      { title: "Langage SPL", link: "/cybersecurite/cyberdefense/splunk/transformation", intro: "Commandes de recherche, stats et visualisation." },
      { title: "Tableaux de Bord", link: "/cybersecurite/cyberdefense/splunk/dashboard", intro: "Création de dashboards décisionnels." },
      { title: "Alerting", link: "/cybersecurite/cyberdefense/splunk/alertes", intro: "Configurer des déclencheurs automatiques." }
    ]
  },
  {
    title: "🌐 Attaques Web & Pentest",
    description: "Comprendre les vulnérabilités OWASP pour mieux les parer.",
    topics: [
      { title: "Injections SQL", link: "/cybersecurite/web/sql-inject", intro: "Manipulation de bases de données." },
      { title: "Cross-Site Scripting (XSS)", link: "/cybersecurite/web/xss", intro: "Exécution de scripts malveillants côté client." },
      { title: "Inclusion de Fichiers (LFI/RFI)", link: "/cybersecurite/web/file-inclusion", intro: "Lecture de fichiers sensibles sur le serveur." },
      { title: "SSRF & IDOR", link: "/cybersecurite/web/ssrf", intro: "Attaques sur la logique métier et le backend." }
    ]
  },
  {
    title: "🔧 Outils & réseaux",
    description: "L'arsenal technique et les protocoles fondamentaux.",
    topics: [
      { title: "Nmap", link: "/cybersecurite/outils/nmap", intro: "Cartographie réseau et scan de ports." },
      { title: "Burp Suite", link: "/cybersecurite/outils/burpsuite", intro: "Proxy d'interception pour l'audit Web." },
      { title: "Metasploit", link: "/cybersecurite/outils/metasploit", intro: "Framework d'exploitation modulaire." },
      { title: "Wireshark", link: "/cybersecurite/outils/wireshark", intro: "Analyse de paquets et inspection réseau." }
    ]
  }
])
</script>

<template>
  <div class="cyber-hub-wrapper">
    
    <header class="header-split">
      <div class="header-text">
        <div class="tag-pill">Formation complète</div>
        <h1>Cybersécurité</h1>
        <p class="lead-text">
          Un cursus structuré allant de la <strong>gouvernance</strong> aux techniques offensives <strong>Red Team</strong>, 
          en passant par l'analyse forensique et la maîtrise des SIEM.
        </p>
        
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">Modules</span>
            <span class="meta-value">6 Thématiques</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <span class="meta-label">Niveau</span>
            <span class="meta-value">Débutant à avancé</span>
          </div>
        </div>
      </div>

      <div class="header-logo">
        <img 
          src="https://www.pngall.com/wp-content/uploads/4/Cyber-Security-PNG-Transparent-HD-Photo.png" 
          alt="Cyber Logo" 
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
      <h2 class="section-title">Parcours de formation</h2>
      <p class="section-subtitle">Sélectionnez un module pour accéder aux cours détaillés.</p>
      
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
        
        <div class="module-card special-card">
          <div class="module-header">
            <h3>💀 Sujets avancés & recherche</h3>
            <p>Zones d'ombre et ingénierie complexe.</p>
          </div>
          <div class="module-links">
            <a href="/cybersecurite/darkweb/intro" class="topic-link">
              <span class="topic-title">🌑 Dark Web</span>
              <span class="topic-intro">Fonctionnement de Tor et onion routing.</span>
            </a>
            <a href="/cybersecurite/malware-dev/index" class="topic-link">
              <span class="topic-title">🦠 Développement de malwares</span>
              <span class="topic-intro">Création de logiciels malveillants à des fins éducatives.</span>
            </a>
            <a href="/cybersecurite/reverse-engineering/index" class="topic-link">
              <span class="topic-title">👨‍💻 Reverse Engineering</span>
              <span class="topic-intro">Désassemblage et analyse de binaires.</span>
            </a>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* --- LAYOUT GENERAL --- */
.cyber-hub-wrapper {
  font-family: var(--vp-font-family-base, sans-serif);
  color: var(--vp-c-text-1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* TYPOGRAPHIE */
h1, h2, h3 { margin: 0; font-weight: 600; color: var(--vp-c-text-1); }
p { line-height: 1.6; margin: 0; color: var(--vp-c-text-2); }

/* --- HEADER (Identique aux précédents) --- */
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
    grid-template-columns: repeat(2, 1fr); /* 2 Colonnes sur Desktop */
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

/* LIENS INTERNES */
.module-links {
  display: flex;
  flex-direction: column;
}

.topic-link {
  display: flex;
  flex-direction: column; /* Mobile: empilé */
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topic-intro {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.topic-arrow {
  display: none; /* Caché sur mobile pour gagner place */
  color: var(--vp-c-brand);
  font-weight: bold;
}

@media (min-width: 640px) {
  .topic-link { flex-direction: row; align-items: center; justify-content: space-between; gap: 1rem; }
  .topic-title { margin-bottom: 0; min-width: 180px; } /* Largeur fixe pour alignement */
  .topic-intro { flex-grow: 1; }
  .topic-arrow { display: block; }
}

/* Style spécifique pour la carte avancée */
.special-card {
  border-color: var(--vp-c-brand);
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