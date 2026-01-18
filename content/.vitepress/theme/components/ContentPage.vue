<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const activeCategory = ref('Tout')
const searchQuery = ref('')
const itemsToShow = ref(12)

// --- CONFIGURATION DES COULEURS ---
const categoryConfig = {
  'Certifications': { color: '#ef4444', icon: '🎖️' },
  'Cybersécurité':  { color: '#3b82f6', icon: '🛡️' },
  'Environnement':  { color: '#10b981', icon: '🏗️' },
  'Programmation':  { color: '#f97316', icon: '💻' },
  'Réseaux':        { color: '#8b5cf6', icon: '🔌' },
  'Default':        { color: '#8b949e', icon: '📂' } 
}

const getThemeColor = (cat) => categoryConfig[cat]?.color || categoryConfig['Default'].color

// --- DONNÉES ---
const modules = [
  // ... (Vos données restent identiques à la version précédente) ...
  { title: "CompTIA Security+ SY0-701", category: "Certifications", desc: "Le socle fondamental : Menaces, Architecture, GRC et Opérations.", link: "/certification/securityplus", tags: ["CompTIA", "Fondamentaux"] },
  { title: "Analyste SOC", category: "Certifications", desc: "Défense active : SIEM (Elastic/Splunk), logs Windows et réponse aux incidents.", link: "/certification/analyst-soc", tags: ["Blue Team", "SOC", "ELK"] },
  { title: "CompTIA Pentest+", category: "Certifications", desc: "Méthodologie de test d'intrusion, scan de vulnérabilités et reporting.", link: "/certification/pentestplus", tags: ["Red Team", "CompTIA"] },
  { title: "Red Team Analyst", category: "Certifications", desc: "Simulation d'adversaire, persistance et évasion de défense.", link: "/certification/redteam-analyst/index", tags: ["Red Team", "Advanced"] },
  { title: "Gouvernance (GRC)", category: "Cybersécurité", desc: "Normes ISO 27001, Analyse de risques, ITIL et Plans de Continuité (PCA).", link: "/cybersecurite/gouv/index", tags: ["ISO", "Management"] },
  { title: "Cyberdéfense & Splunk", category: "Cybersécurité", desc: "Architecture SOC, règles Snort, Hardening et maîtrise de Splunk (SPL).", link: "/cybersecurite/cyberdefense/soc", tags: ["Splunk", "Défense"] },
  { title: "Attaques Web", category: "Cybersécurité", desc: "Injections SQL, XSS, SSRF, IDOR et contournement d'authentification.", link: "/cybersecurite/web/discovery", tags: ["OWASP", "Web"] },
  { title: "Malware Dev", category: "Cybersécurité", desc: "Création de logiciels malveillants, obfuscation et Reverse Engineering.", link: "/cybersecurite/malware-dev/index", tags: ["Dev", "Virus"] },
  { title: "Dark Web", category: "Cybersécurité", desc: "Compréhension, accès sécurisé et surveillance des menaces (CTI).", link: "/cybersecurite/darkweb/intro", tags: ["Tor", "Onion"] },
  { title: "Outils de Hacking", category: "Cybersécurité", desc: "Maîtriser l'arsenal : Nmap, Burp Suite, Metasploit et Wireshark.", link: "/cybersecurite/outils/intro", tags: ["Tools", "Kali"] },
  { title: "Linux & Bash", category: "Environnement", desc: "Administration système, ligne de commande et gestion des processus.", link: "/environnement/linux/linux", tags: ["Linux", "SysAdmin"] },
  { title: "Windows Server", category: "Environnement", desc: "Active Directory, GPO, DNS/DHCP et Clustering de basculement.", link: "/environnement/winserv/admin/intro", tags: ["Microsoft", "AD"] },
  { title: "Ansible (Automation)", category: "Environnement", desc: "Infrastructure as Code (IaC), Playbooks, Rôles et Vault.", link: "/environnement/linux/ansible/intro", tags: ["DevOps", "Python"] },
  { title: "PowerShell", category: "Environnement", desc: "Scripting avancé, administration AD et automatisation Windows.", link: "/environnement/winserv/powershell/intro", tags: ["Scripting", "Windows"] },
  { title: "Cisco & Réseau", category: "Environnement", desc: "Configuration d'équipements (IOS) et routage.", link: "/environnement/cisco", tags: ["Network", "Switching"] },
  { title: "Virtualisation", category: "Environnement", desc: "Hyperviseurs, machines virtuelles et conteneurisation.", link: "/environnement/virtualisation", tags: ["VMware", "Docker"] },
  { title: "Python & Outils", category: "Programmation", desc: "Langage polyvalent : Scripting offensif (Scanners, Brute-force) et Web (Django).", link: "/programmation/python/index", tags: ["Scripting", "Security"] },
  { title: "JavaScript", category: "Programmation", desc: "Le langage du Web. Manipulation du DOM et logique client/serveur.", link: "/programmation/javascript/index", tags: ["Web", "Frontend"] },
  { title: "Langage C", category: "Programmation", desc: "Programmation bas niveau, gestion mémoire et compréhension système.", link: "/programmation/c/index", tags: ["Low-level", "Kernel"] },
  { title: "Rust", category: "Programmation", desc: "Performance et sécurité mémoire (Ownership) pour le système moderne.", link: "/programmation/rust/index", tags: ["System", "Safe"] },
  { title: "Ruby", category: "Programmation", desc: "Scripting élégant et orienté objet.", link: "/programmation/ruby/index", tags: ["Scripting", "OOP"] },
  { title: "Fondamentaux Réseau", category: "Réseaux", desc: "Modèles OSI & TCP/IP, topologies LAN/WAN et adressage.", link: "/reseaux/fondamentaux", tags: ["Théorie", "OSI"] },
  { title: "Protocoles Web", category: "Réseaux", desc: "Fonctionnement profond de DNS, HTTP, NAT et des Firewalls.", link: "/reseaux/dns", tags: ["Web", "Flux"] },
  { title: "Cryptographie & VPN", category: "Réseaux", desc: "Chiffrement (Sym/Asym), Hachage, PKI et tunnels IPsec.", link: "/reseaux/crypto/intro", tags: ["Crypto", "Sécurité"] },
  { title: "Durcissement Réseau", category: "Réseaux", desc: "Sécurisation des switchs, architectures cloisonnées et SNMP.", link: "/reseaux/durcissement/intro", tags: ["Hardening", "Infra"] },
  { title: "Dépannage & Wireshark", category: "Réseaux", desc: "Analyse de paquets et méthodologie de résolution d'incidents.", link: "/reseaux/depannage/intro", tags: ["Analyse", "PCAP"] },
  { title: "Sécurité Avancée", category: "Réseaux", desc: "Zero Trust, Proxy, NIDS/NIPS et architectures résilientes.", link: "/reseaux/advanced/architecture", tags: ["Expert", "Architecture"] }
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

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.15;
  mask-image: radial-gradient(circle at center, black 40%, transparent 95%);
}

.blob {
  position: absolute;
  filter: blur(80px);
  opacity: 0.2;
  border-radius: 50%;
  animation: float 15s infinite alternate ease-in-out;
}

.blob-blue { top: -20%; left: -10%; width: 70vw; height: 70vw; background: #3b82f6; }
.blob-purple { bottom: -20%; right: -10%; width: 60vw; height: 60vw; background: #8b5cf6; animation-delay: -5s; }

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, 40px) scale(1.05); }
}

.content-wrapper { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

/* --- BANNIERE OPEN SOURCE (Styles ajoutés) --- */
.contrib-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(to right, rgba(var(--vp-c-brand-rgb), 0.1), rgba(var(--vp-c-brand-rgb), 0.05));
  border: 1px solid rgba(var(--vp-c-brand-rgb), 0.2);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem; /* Espace avec la barre de recherche */
}

@media (min-width: 768px) {
  .contrib-banner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.contrib-content { display: flex; align-items: center; gap: 1.5rem; flex: 1; }

.contrib-icon {
  display: flex; align-items: center; justify-content: center;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  width: 56px; height: 56px; border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.contrib-text h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.25rem 0; color: var(--vp-c-text-1); }
.contrib-text p { font-size: 0.95rem; margin: 0; color: var(--vp-c-text-2); line-height: 1.4; }
.contrib-text strong { color: var(--vp-c-brand); }

.contrib-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background-color: var(--vp-c-brand); color: var(--vp-c-bg);
  font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 8px;
  text-decoration: none; transition: background-color 0.2s, transform 0.2s;
  white-space: nowrap;
}
.contrib-btn:hover { background-color: var(--vp-c-brand-dark); transform: translateY(-2px); color: var(--vp-c-bg); }
.contrib-btn .arrow { transition: transform 0.2s; }
.contrib-btn:hover .arrow { transform: translateX(4px); }


/* --- Recherche --- */
.search-section { margin-bottom: 30px; margin-top: 10px; }
.search-box { position: relative; max-width: 500px; margin: 0 auto; }
.search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--vp-c-text-2); }
.search-box input {
  width: 100%; padding: 14px 14px 14px 48px; border-radius: 12px;
  background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1); font-size: 1rem; transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}
.search-box input:focus {
  border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); outline: none;
}

/* --- Onglets --- */
.tabs-container { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 30px; }
.tab-btn {
  background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2); padding: 8px 18px; border-radius: 20px;
  cursor: pointer; transition: all 0.3s; font-weight: 500;
}
.tab-btn:hover { background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); border-color: var(--vp-c-text-3); }
.tab-btn.active { font-weight: 600; transform: translateY(-1px); }

.results-count { text-align: center; color: var(--vp-c-text-3); font-size: 0.85rem; margin-bottom: 20px; }

/* --- Cartes --- */
.grid-layout { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }

.card {
  --theme-color: var(--vp-c-brand); 
  background: var(--vp-c-bg-soft); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--vp-c-divider); border-radius: 16px; padding: 24px;
  cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex; flex-direction: column; position: relative; overflow: hidden; height: 100%;
}
.card-glow {
  position: absolute; top: 0; right: 0; width: 150px; height: 150px;
  background: radial-gradient(circle at top right, var(--theme-color), transparent 70%);
  opacity: 0; transition: opacity 0.4s; pointer-events: none;
}
.card:hover { transform: translateY(-5px); border-color: var(--theme-color); box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15); }
.card:hover .card-glow { opacity: 0.2; }

.card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.icon-box { font-size: 1.8rem; }
.category-pill {
  font-size: 0.7rem; text-transform: uppercase; font-weight: 700;
  padding: 4px 10px; border-radius: 20px;
  color: var(--theme-color); border: 1px solid var(--theme-color);
  background: rgba(255, 255, 255, 0.05);
}

.card-body h3 { font-size: 1.25rem; font-weight: 700; margin: 0 0 10px 0; color: var(--vp-c-text-1); }
.card-body p { font-size: 0.95rem; color: var(--vp-c-text-2); line-height: 1.6; margin-bottom: 24px; flex-grow: 1; }

.card-footer { display: flex; gap: 8px; flex-wrap: wrap; }
.tech-tag {
  font-size: 0.75rem; color: var(--vp-c-text-2); background: var(--vp-c-bg-alt);
  padding: 3px 10px; border-radius: 6px; font-family: monospace; border: 1px solid transparent;
}
.card:hover .tech-tag { color: var(--theme-color); background: rgba(255, 255, 255, 0.5); border-color: rgba(0,0,0,0.05); }

/* --- Load More --- */
.load-more-container { display: flex; justify-content: center; margin-top: 40px; }
.load-more-btn {
  background: var(--vp-c-bg-alt); color: var(--vp-c-text-1); 
  border: 1px solid var(--vp-c-divider); padding: 10px 24px; border-radius: 20px;
  cursor: pointer; transition: all 0.2s; font-weight: 600;
}
.load-more-btn:hover { background: var(--vp-c-bg-soft); border-color: var(--vp-c-text-2); }
.empty-state { text-align: center; padding: 60px; color: var(--vp-c-text-3); font-style: italic; }

@media (max-width: 640px) { .grid-layout { grid-template-columns: 1fr; } }
.list-enter-active, .list-leave-active { transition: all 0.3s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(10px); }
</style>