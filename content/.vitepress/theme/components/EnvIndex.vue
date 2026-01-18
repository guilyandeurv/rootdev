<script setup>
import { ref } from 'vue'

const envModules = ref([
  {
    title: "🐧 Linux & Open Source",
    description: "Administration système, du noyau aux services réseaux critiques.",
    topics: [
      { title: "Introduction & Histoire", link: "/environnement/linux/linux", intro: "Philosophie GNU/Linux et distributions." },
      { title: "Ligne de commande (Bash)", link: "/environnement/linux/intro/commandes-base", intro: "Navigation, fichiers et piping." },
      { title: "Réseau & Firewall", link: "/environnement/linux/admin/reseau", intro: "Netfilter, IP routing et sécurisation." },
      { title: "Services (DNS/DHCP)", link: "/environnement/linux/admin/dns", intro: "Infrastructure réseau essentielle." },
      { title: "Annuaire (LDAP)", link: "/environnement/linux/admin/annuaire", intro: "Gestion centralisée des utilisateurs." }
    ]
  },
  {
    title: "🪟 Windows Server",
    description: "Gestion d'infrastructures Microsoft d'entreprise.",
    topics: [
      { title: "Active Directory (AD DS)", link: "/environnement/winserv/admin/ad", intro: "Contrôleurs de domaine, Forêts et GPO." },
      { title: "Services Web (IIS)", link: "/environnement/winserv/admin/iss", intro: "Hébergement web sous Windows." },
      { title: "Windows Update (WSUS)", link: "/environnement/winserv/admin/wu", intro: "Déploiement centralisé des correctifs." },
      { title: "Haute Disponibilité", link: "/environnement/winserv/ha/intro", intro: "Concepts de redondance et SLA." },
      { title: "Cluster de Basculement", link: "/environnement/winserv/ha/basculement", intro: "Failover Clustering pour services critiques." }
    ]
  },
  {
    title: "🪄 Ansible (IaC)",
    description: "Automatisation et gestion de configuration sans agent.",
    topics: [
      { title: "Introduction & Architecture", link: "/environnement/linux/ansible/intro", intro: "Fonctionnement SSH et idempotence." },
      { title: "Inventaires & Modules", link: "/environnement/linux/ansible/inventaire", intro: "Cibler les machines et exécuter des tâches." },
      { title: "Playbooks YAML", link: "/environnement/linux/ansible/playbook", intro: "Orchestration de scénarios complexes." },
      { title: "Rôles & Vault", link: "/environnement/linux/ansible/roles", intro: "Structuration du code et gestion des secrets." }
    ]
  },
  {
    title: "🐚 PowerShell",
    description: "Scripting et administration avancée pour Windows.",
    topics: [
      { title: "Introduction & Cmdlets", link: "/environnement/winserv/powershell/intro", intro: "La puissance du shell objet." },
      { title: "Gestion Fichiers/Système", link: "/environnement/winserv/powershell/gestion-fichiers", intro: "Manipulation du FileSystem." },
      { title: "Administration Utilisateurs", link: "/environnement/winserv/powershell/gestion-utilisateurs", intro: "Automatiser la gestion AD et locale." },
      { title: "Scripting Avancé", link: "/environnement/winserv/powershell/scripting", intro: "Boucles, fonctions et automatisation." }
    ]
  },
  {
    title: "🌐 Réseau & Infrastructure",
    description: "Les couches basses et l'abstraction matérielle.",
    topics: [
      { title: "Cisco (IOS)", link: "/environnement/cisco", intro: "Configuration de routeurs et switchs." },
      { title: "Virtualisation", link: "/environnement/virtualisation", intro: "Hyperviseurs (Type 1/2), VM et Conteneurs." }
    ]
  }
])
</script>

<template>
  <div class="env-hub-wrapper">
    
    <header class="header-split">
      <div class="header-text">
        <div class="tag-pill">Systèmes & Réseaux</div>
        <h1>Environnements</h1>
        <p class="lead-text">
          L'épine dorsale de l'informatique.<br>
          De la maîtrise du terminal <strong>Linux</strong> à l'administration d'un parc <strong>Windows Server</strong>, 
          en passant par l'automatisation <strong>Ansible</strong>.
        </p>
        
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">OS Principaux</span>
            <span class="meta-value">Linux / Windows</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <span class="meta-label">Compétence</span>
            <span class="meta-value">Admin & DevOps</span>
          </div>
        </div>
      </div>

      <div class="header-logo">
        <img 
          src="https://png.pngtree.com/png-vector/20250422/ourmid/pngtree-rack-with-blue-lights-server-png-image_16070135.png" 
          alt="Server Infrastructure" 
          style="opacity: 0.8;"
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
      <h2 class="section-title">Infrastructures & Systèmes</h2>
      <p class="section-subtitle">Administration, script et maintien en condition opérationnelle.</p>
      
      <div class="modules-grid">
        <div v-for="(module, mIndex) in envModules" :key="mIndex" class="module-card">
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

  </div>
</template>

<style scoped>
/* --- LAYOUT GENERAL --- */
.env-hub-wrapper {
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
  margin-bottom: 3rem;
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
  flex-shrink: 0;
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

.contrib-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  white-space: nowrap;
}

.contrib-btn:hover {
  background-color: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  color: var(--vp-c-bg);
}
.contrib-btn .arrow { transition: transform 0.2s; }
.contrib-btn:hover .arrow { transform: translateX(4px); }

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
</style>