<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const activeCategory = ref('Tout')
const searchQuery = ref('')
const itemsToShow = ref(12)

// --- CONFIGURATION DES COULEURS (Restée identique) ---
const categoryConfig = {
  'Certifications': { color: '#ef4444', icon: '🎖️' },   // Rouge
  'Cybersécurité':  { color: '#3b82f6', icon: '🛡️' },   // Bleu
  'Environnement':  { color: '#10b981', icon: '🏗️' },   // Vert
  'Programmation':  { color: '#f97316', icon: '💻' },   // Orange
  'Réseaux':        { color: '#8b5cf6', icon: '🔌' },   // Violet
  'Default':        { color: '#8b949e', icon: '📂' } 
}

const getThemeColor = (cat) => categoryConfig[cat]?.color || categoryConfig['Default'].color

// --- DONNÉES (Identiques) ---
const modules = [
  // --- CERTIFICATIONS ---
  {
    title: "Analyst SOC",
    category: "Certifications",
    desc: "Parcours complet : Elastic, Logstash, SIEM, rapports et analyse d'incidents.",
    link: "/certification/analyst-soc/", 
    tags: ["Blue Team", "SOC"]
  },
  {
    title: "Red Team Analyst",
    category: "Certifications",
    desc: "Simulation d'adversaires : C2, Kerberos, mouvements latéraux.",
    link: "/certification/redteam-analyst/",
    tags: ["Red Team", "AD"]
  },
  {
    title: "Security+",
    category: "Certifications",
    desc: "Concepts fondamentaux : GRC, architecture, menaces et conformité.",
    link: "/certification/securityplus/",
    tags: ["CompTIA", "Basics"]
  },
  {
    title: "Pentest+",
    category: "Certifications",
    desc: "Méthodologies de test d'intrusion et gestion des vulnérabilités.",
    link: "/certification/pentestplus",
    tags: ["Pentest", "CompTIA"]
  },

  // --- CYBERSÉCURITÉ ---
  {
    title: "Cyberdéfense & Splunk",
    category: "Cybersécurité",
    desc: "Stratégies défensives, durcissement et maîtrise de Splunk.",
    link: "/cybersecurite/cyberdefense/splunk/",
    tags: ["Splunk", "Défense"]
  },
  {
    title: "Malware Dev",
    category: "Cybersécurité",
    desc: "Développement de malwares, mécanismes bas niveau et évasion.",
    link: "/cybersecurite/malware-dev/",
    tags: ["Dev", "Malware"]
  },
  {
    title: "Web Hacking",
    category: "Cybersécurité",
    desc: "OWASP Top 10 : XSS, SQLi, SSRF, IDOR et contournements.",
    link: "/cybersecurite/web/discovery",
    tags: ["Web", "Bug Bounty"]
  },
  {
    title: "Outils & Recon",
    category: "Cybersécurité",
    desc: "Nmap, Wireshark, Metasploit, BurpSuite et OSINT.",
    link: "/cybersecurite/outils/intro",
    tags: ["Tools", "Recon"]
  },
  {
    title: "Gouvernance & Normes",
    category: "Cybersécurité",
    desc: "ISO 27001, ITIL, PCA/PRA et conformité.",
    link: "/cybersecurite/gouv/",
    tags: ["GRC", "ISO"]
  },
  {
    title: "Darkweb",
    category: "Cybersécurité",
    desc: "Fonctionnement, accès et surveillance des menaces.",
    link: "/cybersecurite/darkweb/intro",
    tags: ["Tor", "Threat Intel"]
  },

  // --- ENVIRONNEMENT ---
  {
    title: "Linux Administration",
    category: "Environnement",
    desc: "Gestion système, stockage, réseaux et dépannage avancé.",
    link: "/environnement/linux/admin/intro",
    tags: ["Linux", "SysAdmin"]
  },
  {
    title: "Ansible Automation",
    category: "Environnement",
    desc: "Playbooks, rôles, inventaires et automatisation d'infrastructure.",
    link: "/environnement/linux/ansible/intro",
    tags: ["DevOps", "Automation"]
  },
  {
    title: "Windows Server & AD",
    category: "Environnement",
    desc: "Active Directory, GPO, DHCP/DNS et Haute Disponibilité.",
    link: "/environnement/winserv/admin/intro",
    tags: ["Windows", "AD"]
  },
  {
    title: "PowerShell Scripting",
    category: "Environnement",
    desc: "Automatisation de l'administration et gestion des utilisateurs.",
    link: "/environnement/winserv/powershell/intro",
    tags: ["Scripting", "Windows"]
  },

  // --- PROGRAMMATION ---
  {
    title: "Python Security",
    category: "Programmation",
    desc: "Scripting offensif, scanners réseaux et interaction APIs.",
    link: "/programmation/python/",
    tags: ["Python", "Tools"]
  },
  {
    title: "Langage C",
    category: "Programmation",
    desc: "Programmation système, gestion mémoire et pointeurs.",
    link: "/programmation/c/",
    tags: ["Low-level", "Dev"]
  },
  {
    title: "JavaScript",
    category: "Programmation",
    desc: "Fondamentaux JS pour comprendre les attaques client-side.",
    link: "/programmation/javascript/",
    tags: ["Web", "JS"]
  },

  // --- RÉSEAUX ---
  {
    title: "Architecture & OSI",
    category: "Réseaux",
    desc: "Modèle OSI, TCP/IP, DNS, Firewalling et routage.",
    link: "/reseaux/",
    tags: ["CCNA", "NetOps"]
  },
  {
    title: "Réseaux Avancés",
    category: "Réseaux",
    desc: "Zero Trust, Proxy, NIDS/NIPS et architectures sécurisées.",
    link: "/reseaux/advanced/architecture",
    tags: ["Architecture", "Sec"]
  },
  {
    title: "Cryptographie & VPN",
    category: "Réseaux",
    desc: "PKI, IPsec, chiffrements et Hashing.",
    link: "/reseaux/crypto/intro",
    tags: ["Crypto", "VPN"]
  },
  {
    title: "Dépannage & Wireshark",
    category: "Réseaux",
    desc: "Analyse de paquets, diagnostics et résolution de pannes.",
    link: "/reseaux/depannage/intro",
    tags: ["Troubleshoot", "Packet"]
  },
  {
    title: "Durcissement Réseau",
    category: "Réseaux",
    desc: "Sécurisation des équipements, segmentation et SNMP.",
    link: "/reseaux/durcissement/intro",
    tags: ["Hardening", "Sec"]
  }
]

const categories = ['Tout', ...new Set(modules.map(m => m.category))]

const filteredModules = computed(() => {
  return modules.filter(item => {
    const matchCategory = activeCategory.value === 'Tout' || item.category === activeCategory.value
    const matchSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                        item.desc.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    return matchCategory && matchSearch
  })
})

const paginatedModules = computed(() => {
  return filteredModules.value.slice(0, itemsToShow.value)
})

function loadMore() { itemsToShow.value += 9 }
function navigate(link) { if(link) window.location.href = link }

</script>

<template>
  <div class="tech-dashboard">
    
    <div class="bg-animation">
      <div class="blob blob-blue"></div>
      <div class="blob blob-purple"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="content-wrapper">
      
      <div class="search-section">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher un module, un outil, un concept..."
          />
        </div>
      </div>

      <div class="tabs-container">
        <button 
          v-for="cat in categories" 
          :key="cat"
          class="tab-btn"
          :class="{ active: activeCategory === cat }"
          :style="activeCategory === cat && cat !== 'Tout' ? { backgroundColor: getThemeColor(cat), borderColor: getThemeColor(cat), color: '#fff' } : {}"
          @click="activeCategory = cat; itemsToShow = 12" 
        >
          {{ cat }}
        </button>
      </div>

      <div class="results-count" v-if="searchQuery">
        {{ filteredModules.length }} résultats trouvés
      </div>

      <TransitionGroup name="list" tag="div" class="grid-layout">
        <div 
          v-for="item in paginatedModules" 
          :key="item.title" 
          class="card"
          :style="{ '--theme-color': getThemeColor(item.category) }"
          @click="navigate(item.link)"
        >
          <div class="card-glow"></div>
          
          <div class="card-top">
            <div class="icon-box">
              {{ categoryConfig[item.category]?.icon || '📂' }}
            </div>
            <div class="category-pill">{{ item.category }}</div>
          </div>
          
          <div class="card-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>

          <div class="card-footer">
            <span v-for="tag in item.tags" :key="tag" class="tech-tag">#{{ tag }}</span>
          </div>
        </div>
      </TransitionGroup>
      
      <div v-if="itemsToShow < filteredModules.length" class="load-more-container">
        <button @click="loadMore" class="load-more-btn">Afficher plus ↓</button>
      </div>

      <div v-if="filteredModules.length === 0" class="empty-state">
        <p>Aucun module trouvé pour "{{ searchQuery }}"</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* --- Structure Globale --- */
.tech-dashboard {
  position: relative;
  min-height: 85vh;
  padding: 40px 20px;
  /* Utilisation de la variable de fond Vitepress (s'adapte light/dark) */
  background-color: var(--vp-c-bg); 
  overflow: hidden;
  font-family: var(--vp-font-family-base, sans-serif);
  color: var(--vp-c-text-1);
  transition: background-color 0.3s;
}

/* --- Background Animé --- */
.bg-animation {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
}

/* Grille plus subtile en thème clair */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.15; /* Très discret */
  mask-image: radial-gradient(circle at center, black 40%, transparent 95%);
}

.blob {
  position: absolute;
  filter: blur(80px);
  opacity: 0.2; /* Opacité réduite pour le mode clair */
  border-radius: 50%;
  animation: float 15s infinite alternate ease-in-out;
}

/* Blobs : On garde les couleurs demandées */
.blob-blue {
  top: -20%; left: -10%;
  width: 70vw; height: 70vw;
  background: #3b82f6; 
}
.blob-purple {
  bottom: -20%; right: -10%;
  width: 60vw; height: 60vw;
  background: #8b5cf6;
  animation-delay: -5s;
}

/* En mode Dark, on peut augmenter légèrement l'opacité via media query si besoin, 
   mais 0.2 passe bien sur les deux thèmes pour un effet "Ambiance" */

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, 40px) scale(1.05); }
}

.content-wrapper { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

/* --- Recherche --- */
.search-section {
  margin-bottom: 30px;
  margin-top: 10px;
}
.search-box { position: relative; max-width: 500px; margin: 0 auto; }

.search-icon { 
  position: absolute; left: 16px; top: 50%; transform: translateY(-50%); 
  color: var(--vp-c-text-2); 
}

.search-box input {
  width: 100%; padding: 14px 14px 14px 48px; 
  border-radius: 12px;
  /* Fond input adapté au thème */
  background: var(--vp-c-bg-alt); 
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}
.search-box input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); 
  outline: none;
}

/* --- Onglets --- */
.tabs-container {
  display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 30px;
}
.tab-btn {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  padding: 8px 18px; border-radius: 20px; cursor: pointer; transition: all 0.3s;
  font-weight: 500;
}
.tab-btn:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-3);
}
.tab-btn.active { font-weight: 600; transform: translateY(-1px); }

.results-count { text-align: center; color: var(--vp-c-text-3); font-size: 0.85rem; margin-bottom: 20px; }

/* --- Cartes --- */
.grid-layout { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }

.card {
  --theme-color: var(--vp-c-brand); /* Fallback */

  /* Adaptation thème : fond semi-transparent */
  background: var(--vp-c-bg-soft); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex; flex-direction: column; position: relative; overflow: hidden; height: 100%;
}

.card-glow {
  position: absolute; top: 0; right: 0; width: 150px; height: 150px;
  background: radial-gradient(circle at top right, var(--theme-color), transparent 70%);
  opacity: 0; transition: opacity 0.4s; pointer-events: none;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--theme-color);
  /* Ombre plus prononcée au survol */
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15); 
}
.card:hover .card-glow { opacity: 0.2; }

.card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.icon-box { font-size: 1.8rem; }

/* Badge de catégorie */
.category-pill {
  font-size: 0.7rem; text-transform: uppercase; font-weight: 700;
  padding: 4px 10px; border-radius: 20px;
  color: var(--theme-color);
  border: 1px solid var(--theme-color);
  background: rgba(255, 255, 255, 0.05); /* Subtile */
}

.card-body h3 { font-size: 1.25rem; font-weight: 700; margin: 0 0 10px 0; color: var(--vp-c-text-1); }
.card-body p { font-size: 0.95rem; color: var(--vp-c-text-2); line-height: 1.6; margin-bottom: 24px; flex-grow: 1; }

.card-footer { display: flex; gap: 8px; flex-wrap: wrap; }
.tech-tag {
  font-size: 0.75rem; 
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  padding: 3px 10px; border-radius: 6px; font-family: monospace;
  border: 1px solid transparent;
}
.card:hover .tech-tag {
    color: var(--theme-color);
    background: rgba(255, 255, 255, 0.5);
    border-color: rgba(0,0,0,0.05);
}

/* --- Load More --- */
.load-more-container { display: flex; justify-content: center; margin-top: 40px; }
.load-more-btn {
  background: var(--vp-c-bg-alt); 
  color: var(--vp-c-text-1); 
  border: 1px solid var(--vp-c-divider);
  padding: 10px 24px; border-radius: 20px; cursor: pointer; transition: all 0.2s;
  font-weight: 600;
}
.load-more-btn:hover { background: var(--vp-c-bg-soft); border-color: var(--vp-c-text-2); }

.empty-state { text-align: center; padding: 60px; color: var(--vp-c-text-3); font-style: italic; }

/* --- Mobile --- */
@media (max-width: 640px) { .grid-layout { grid-template-columns: 1fr; } }

/* --- Transitions --- */
.list-enter-active, .list-leave-active { transition: all 0.3s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(10px); }
</style>