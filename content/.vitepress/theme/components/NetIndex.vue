<script setup>
import { ref } from 'vue'

const networkModules = ref([
  {
    title: "📕 Fondamentaux & Architecture",
    description: "Les bases théoriques et physiques de la communication numérique.",
    topics: [
      { title: "Introduction Réseaux", link: "/reseaux/fondamentaux", intro: "Concepts de base : IP, MAC, Topologies." },
      { title: "Modèle OSI", link: "/reseaux/osi", intro: "Les 7 couches théoriques standardisées." },
      { title: "Modèle TCP/IP", link: "/reseaux/tcp", intro: "La suite de protocoles d'Internet." },
      { title: "LAN (Local)", link: "/reseaux/lan", intro: "Réseaux locaux, Ethernet et Commutation." },
      { title: "WAN (Wide)", link: "/reseaux/wan", intro: "Réseaux étendus, Routage et FAI." }
    ]
  },
  {
    title: "⚙️ Protocoles & Services",
    description: "Les mécanismes qui font tourner le web et les infrastructures.",
    topics: [
      { title: "DNS", link: "/reseaux/dns", intro: "Résolution de noms de domaine (Domain Name System)." },
      { title: "HTTP/HTTPS", link: "/reseaux/http", intro: "Le protocole du Web et ses versions." },
      { title: "NAT & PAT", link: "/reseaux/nat", intro: "Translation d'adresses et de ports." },
      { title: "Les sites Web", link: "/reseaux/web", intro: "Architecture Client-Serveur et Hébergement." },
      { title: "Les Firewalls", link: "/reseaux/firewall", intro: "Filtrage de paquets et pare-feux stateless/stateful." }
    ]
  },
  {
    title: "🔐 Cryptographie & VPN",
    description: "Sécuriser la confidentialité et l'intégrité des échanges.",
    topics: [
      { title: "Introduction Crypto", link: "/reseaux/crypto/intro", intro: "Histoire et objectifs de la cryptographie." },
      { title: "Chiffrement Symétrique", link: "/reseaux/crypto/symetrique", intro: "Clé unique (AES, DES...)." },
      { title: "Chiffrement Asymétrique", link: "/reseaux/crypto/asymetrique", intro: "Clé publique / Clé privée (RSA)." },
      { title: "PKI & Certificats", link: "/reseaux/crypto/pki", intro: "Infrastructure de gestion des clés et tiers de confiance." },
      { title: "VPN & IPSEC", link: "/reseaux/crypto/ipsec", intro: "Tunnels sécurisés et encapsulation." }
    ]
  },
  {
    title: "🛡️ Durcissement (Hardening)",
    description: "Réduire la surface d'attaque des équipements réseaux.",
    topics: [
      { title: "Architecture Sécurisée", link: "/reseaux/durcissement/architecture", intro: "Segmentation, DMZ et zones de confiance." },
      { title: "Sécurité Commutateurs", link: "/reseaux/durcissement/security-commu", intro: "Port Security, VLAN Hopping et ARP Spoofing." },
      { title: "Sécurité Équipements", link: "/reseaux/durcissement/security-equipements", intro: "Gestion des accès et mises à jour." },
      { title: "SNMP & Management", link: "/reseaux/durcissement/snmp", intro: "Supervision sécurisée (v2 vs v3)." }
    ]
  },
  {
    title: "💎 Sécurité Avancée",
    description: "Stratégies de défense périmétrique et zéro confiance.",
    topics: [
      { title: "Architecture Avancée", link: "/reseaux/advanced/architecture", intro: "Conception résiliente et redondante." },
      { title: "Next-Gen Firewalls", link: "/reseaux/advanced/pare-feu", intro: "Filtrage applicatif (Layer 7) et inspection DPI." },
      { title: "NIDS & NIPS", link: "/reseaux/advanced/nids-nips", intro: "Détection et Prévention d'intrusions réseau." },
      { title: "Proxy / Mandataire", link: "/reseaux/advanced/proxy", intro: "Intermédiation, cache et filtrage web." },
      { title: "Zero Trust", link: "/reseaux/advanced/zero-trust", intro: "Le principe 'Ne jamais faire confiance, toujours vérifier'." }
    ]
  },
  {
    title: "🔧 Dépannage (Troubleshooting)",
    description: "Identifier et résoudre les incidents de connectivité.",
    topics: [
      { title: "Méthodologie", link: "/reseaux/depannage/intro", intro: "Approche descendante ou montante (OSI)." },
      { title: "Wireshark", link: "/reseaux/depannage/wireshark", intro: "Analyse de trames et capture de paquets en temps réel." }
    ]
  }
])
</script>

<template>
  <div class="net-hub-wrapper">
    
    <header class="header-split">
      <div class="header-text">
        <div class="tag-pill">Infrastructure & Flux</div>
        <h1>Réseaux</h1>
        <p class="lead-text">
          Comprendre comment les données transitent à travers le monde.<br>
          Des câbles <strong>LAN</strong> aux tunnels <strong>VPN</strong> chiffrés, en passant par l'analyse de paquets et le <strong>Modèle OSI</strong>.
        </p>
        
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">Protocoles</span>
            <span class="meta-value">TCP/IP & UDP</span>
          </div>
          <div class="meta-sep"></div>
          <div class="meta-item">
            <span class="meta-label">Sécurité</span>
            <span class="meta-value">Flux & Accès</span>
          </div>
        </div>
      </div>

      <div class="header-logo">
        <img 
          src="https://www.pngmart.com/files/7/Network-PNG-Free-Download.png" 
          alt="Network Architecture" 
          style="filter: drop-shadow(0 0 10px rgba(var(--vp-c-brand-rgb), 0.2));"
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
      <h2 class="section-title">Ingénierie Réseau</h2>
      <p class="section-subtitle">Du câblage physique aux protocoles de chiffrement avancés.</p>
      
      <div class="modules-grid">
        <div v-for="(module, mIndex) in networkModules" :key="mIndex" class="module-card">
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
.net-hub-wrapper {
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
.header-logo img { width: 160px; height: auto; opacity: 0.9; }

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