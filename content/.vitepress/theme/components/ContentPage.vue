<script setup>
import { computed, ref, watch } from 'vue';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  LibraryBig,
  Network,
  Search,
  Server,
  ShieldCheck
} from 'lucide-vue-next';
import RdIcon from '../../components/RdIcon.vue';
import SiteFooter from './SiteFooter.vue';

/* Une icône par domaine, pour les filtres. La couleur n'est pas portée par la
   catégorie : toutes les cartes réagissent au survol avec la seule couleur de
   marque, comme sur la page d'accueil. */
const categoryIcons = {
  Certifications: Award,
  Cybersécurité: ShieldCheck,
  Environnement: Server,
  Programmation: Code2,
  Réseaux: Network
};

/* Chaque module porte sa propre icône, reprise de celle que la barre latérale
   donne à la même section — la carte et le lien de gauche se répondent. Les
   noms viennent du registre maison (cf. `icons/registry.mjs`). */
const modules = [
  { icon: 'medal', title: 'CompTIA Security+ SY0-701', category: 'Certifications', desc: 'Le socle fondamental : menaces, architecture, GRC et opérations.', link: '/certification/securityplus', tags: ['CompTIA', 'Fondamentaux'] },
  { icon: 'eye', title: 'Analyste SOC', category: 'Certifications', desc: 'Défense active : SIEM (Elastic/Splunk), logs Windows et réponse aux incidents.', link: '/certification/analyst-soc/', tags: ['Blue Team', 'SOC', 'ELK'] },
  { icon: 'target', title: 'CompTIA Pentest+', category: 'Certifications', desc: "Méthodologie de test d'intrusion, scan de vulnérabilités et reporting.", link: '/certification/pentestplus', tags: ['Red Team', 'CompTIA'] },
  { icon: 'skull', title: 'Red Team Analyst', category: 'Certifications', desc: "Simulation d'adversaire, persistance et évasion de défense.", link: '/certification/redteam-analyst/', tags: ['Red Team', 'Avancé'] },
  { icon: 'landmark', title: 'Gouvernance (GRC)', category: 'Cybersécurité', desc: 'Normes ISO 27001, analyse de risques, ITIL et plans de continuité (PCA).', link: '/cybersecurite/gouv/', tags: ['ISO', 'Management'] },
  { icon: 'brand-splunk', title: 'Cyberdéfense & Splunk', category: 'Cybersécurité', desc: 'Architecture SOC, règles Snort, durcissement et maîtrise de Splunk (SPL).', link: '/cybersecurite/cyberdefense/soc', tags: ['Splunk', 'Défense'] },
  { icon: 'globe', title: 'Attaques web', category: 'Cybersécurité', desc: "Injections SQL, XSS, SSRF, IDOR et contournement d'authentification.", link: '/cybersecurite/web/discovery', tags: ['OWASP', 'Web'] },
  { icon: 'bug', title: 'Malware Dev', category: 'Cybersécurité', desc: 'Création de logiciels malveillants, obfuscation et rétro-ingénierie.', link: '/cybersecurite/malware-dev/', tags: ['Dev', 'Reverse'] },
  { icon: 'venetian-mask', title: 'Dark web', category: 'Cybersécurité', desc: 'Compréhension, accès sécurisé et surveillance des menaces (CTI).', link: '/cybersecurite/darkweb/intro', tags: ['Tor', 'Onion'] },
  { icon: 'wrench', title: 'Outils de hacking', category: 'Cybersécurité', desc: "Maîtriser l'arsenal : Nmap, Burp Suite, Metasploit et Wireshark.", link: '/cybersecurite/outils/intro', tags: ['Outils', 'Kali'] },
  { icon: 'brand-linux', title: 'Linux & Bash', category: 'Environnement', desc: 'Administration système, ligne de commande et gestion des processus.', link: '/environnement/linux/linux', tags: ['Linux', 'SysAdmin'] },
  { icon: 'brand-windows', title: 'Windows Server', category: 'Environnement', desc: 'Active Directory, GPO, DNS/DHCP et clustering de basculement.', link: '/environnement/winserv/admin/intro', tags: ['Microsoft', 'AD'] },
  { icon: 'brand-ansible', title: 'Ansible', category: 'Environnement', desc: 'Infrastructure as Code (IaC), playbooks, rôles et Vault.', link: '/environnement/linux/ansible/intro', tags: ['DevOps', 'Automatisation'] },
  { icon: 'brand-powershell', title: 'PowerShell', category: 'Environnement', desc: 'Scripting avancé, administration AD et automatisation Windows.', link: '/environnement/winserv/powershell/intro', tags: ['Scripting', 'Windows'] },
  { icon: 'brand-cisco', title: 'Cisco & réseau', category: 'Environnement', desc: "Configuration d'équipements (IOS) et routage.", link: '/environnement/cisco', tags: ['Réseau', 'Commutation'] },
  { icon: 'brand-vmware', title: 'Virtualisation', category: 'Environnement', desc: 'Hyperviseurs, machines virtuelles et conteneurisation.', link: '/environnement/virtualisation', tags: ['VMware', 'Docker'] },
  { icon: 'brand-python', title: 'Python', category: 'Programmation', desc: 'Scripting offensif (scanners, brute-force) et développement web (Django).', link: '/programmation/python/', tags: ['Scripting', 'Sécurité'] },
  { icon: 'brand-javascript', title: 'JavaScript', category: 'Programmation', desc: 'Le langage du web : manipulation du DOM et logique client/serveur.', link: '/programmation/javascript/', tags: ['Web', 'Frontend'] },
  { icon: 'brand-c', title: 'Langage C', category: 'Programmation', desc: 'Programmation bas niveau, gestion mémoire et compréhension système.', link: '/programmation/c/', tags: ['Bas niveau', 'Kernel'] },
  { icon: 'brand-rust', title: 'Rust', category: 'Programmation', desc: 'Performance et sécurité mémoire (ownership) pour le système moderne.', link: '/programmation/rust/', tags: ['Système', 'Sûreté'] },
  { icon: 'brand-ruby', title: 'Ruby', category: 'Programmation', desc: 'Scripting élégant et orienté objet.', link: '/programmation/ruby/', tags: ['Scripting', 'POO'] },
  { icon: 'compass', title: 'Fondamentaux réseau', category: 'Réseaux', desc: 'Modèles OSI et TCP/IP, topologies LAN/WAN et adressage.', link: '/reseaux/fondamentaux', tags: ['Théorie', 'OSI'] },
  { icon: 'signpost-big', title: 'Protocoles web', category: 'Réseaux', desc: 'Fonctionnement profond de DNS, HTTP, NAT et des pare-feux.', link: '/reseaux/dns', tags: ['Web', 'Flux'] },
  { icon: 'key', title: 'Cryptographie & VPN', category: 'Réseaux', desc: 'Chiffrement symétrique et asymétrique, hachage, PKI et tunnels IPsec.', link: '/reseaux/crypto/intro', tags: ['Crypto', 'PKI'] },
  { icon: 'construction', title: 'Durcissement réseau', category: 'Réseaux', desc: 'Sécurisation des commutateurs, architectures cloisonnées et SNMP.', link: '/reseaux/durcissement/intro', tags: ['Durcissement', 'Infra'] },
  { icon: 'brand-wireshark', title: 'Dépannage & Wireshark', category: 'Réseaux', desc: 'Analyse de paquets et méthodologie de résolution d’incidents.', link: '/reseaux/depannage/intro', tags: ['Analyse', 'PCAP'] },
  { icon: 'shield-plus', title: 'Sécurité avancée', category: 'Réseaux', desc: 'Zero Trust, proxy, NIDS/NIPS et architectures résilientes.', link: '/reseaux/advanced/architecture', tags: ['Expert', 'Architecture'] }
];

const PAGE_SIZE = 12;

const activeCategory = ref('Tout');
const searchQuery = ref('');
const itemsToShow = ref(PAGE_SIZE);

const categories = [
  { name: 'Tout', icon: LibraryBig, count: modules.length },
  ...[...new Set(modules.map((m) => m.category))].map((name) => ({
    name,
    icon: categoryIcons[name],
    count: modules.filter((m) => m.category === name).length
  }))
];

const filteredModules = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return modules.filter((item) => {
    const matchCategory =
      activeCategory.value === 'Tout' || item.category === activeCategory.value;

    if (!query) return matchCategory;

    const haystack = [item.title, item.desc, item.category, ...item.tags]
      .join(' ')
      .toLowerCase();

    return matchCategory && haystack.includes(query);
  });
});

const paginatedModules = computed(() =>
  filteredModules.value.slice(0, itemsToShow.value)
);

/* Toute nouvelle recherche ou nouveau filtre repart de la première page :
   sinon on hérite du « voir plus » de la sélection précédente. */
watch([searchQuery, activeCategory], () => {
  itemsToShow.value = PAGE_SIZE;
});

function loadMore() {
  itemsToShow.value += 9;
}
</script>

<template>
  <div class="content-page">
    <section class="section">
      <div class="shell">
        <header class="page-head">
          <h1 class="page-title">Tout le contenu</h1>
          <p class="page-lead">
            {{ modules.length }} modules répartis en {{ categories.length - 1 }}
            domaines. Filtrez par thème ou cherchez un outil, une norme, un
            concept.
          </p>
        </header>

        <div class="toolbar">
          <div class="search">
            <Search class="search-icon" :size="16" aria-hidden="true" />
            <input
              v-model="searchQuery"
              type="search"
              class="search-input"
              placeholder="Rechercher un module, un outil, un concept…"
              aria-label="Rechercher un module"
            />
          </div>
          <p class="toolbar-count" aria-live="polite">
            {{ filteredModules.length }}
            {{ filteredModules.length > 1 ? 'modules' : 'module' }}
          </p>
        </div>

        <nav class="filters" aria-label="Filtrer par domaine">
          <button
            v-for="cat in categories"
            :key="cat.name"
            type="button"
            class="filter"
            :class="{ 'filter-active': activeCategory === cat.name }"
            :aria-pressed="activeCategory === cat.name"
            @click="activeCategory = cat.name"
          >
            <component :is="cat.icon" :size="15" :stroke-width="1.75" />
            <span>{{ cat.name }}</span>
            <span class="filter-count">{{ cat.count }}</span>
          </button>
        </nav>

        <TransitionGroup name="grid" tag="div" class="module-grid">
          <a
            v-for="item in paginatedModules"
            :key="item.title"
            :href="item.link"
            class="module-card"
          >
            <span class="card-head">
              <span class="tile" aria-hidden="true">
                <RdIcon :name="item.icon" :size="19" />
              </span>
              <span class="card-cat">{{ item.category }}</span>
              <ArrowRight class="card-cue" :size="15" aria-hidden="true" />
            </span>

            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-desc">{{ item.desc }}</p>

            <span class="card-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </span>
          </a>
        </TransitionGroup>

        <div v-if="itemsToShow < filteredModules.length" class="more">
          <button type="button" class="btn btn-ghost" @click="loadMore">
            <span>Afficher plus</span>
            <span class="more-left">
              +{{ Math.min(9, filteredModules.length - itemsToShow) }}
            </span>
          </button>
        </div>

        <p v-if="filteredModules.length === 0" class="empty">
          Aucun module ne correspond à cette recherche.
        </p>
      </div>
    </section>

    <!-- Appel à contribution : une carte au même filet que les autres, sans
         dégradé ni couleur d'accent. -->
    <section class="section section-bordered">
      <div class="shell">
        <div class="contrib">
          <span class="tile" aria-hidden="true">
            <RdIcon name="brand-github" :size="19" />
          </span>
          <div class="contrib-body">
            <h2 class="contrib-title">Contribuez à ces cours</h2>
            <p class="contrib-desc">
              Le projet est open source : ajoutez un module, corrigez une erreur
              ou proposez une amélioration directement sur GitHub.
            </p>
          </div>
          <a
            class="btn btn-ghost contrib-btn"
            href="https://github.com/guilyandeurv/rootdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Voir le dépôt</span>
            <ArrowUpRight :size="15" />
          </a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
/* --------------------------------------------------------------------------
   Bases — mêmes jetons que la page d'accueil : un filet, un rayon, aucune
   couleur portée par la donnée. Le fond du site reste visible.
   -------------------------------------------------------------------------- */

.content-page {
  --shell: 1160px;
  --radius: 12px;
  --hairline: var(--vp-c-divider);

  width: 100%;
  color: var(--vp-c-text-1);
}

.shell {
  max-width: var(--shell);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 60px 0 72px;
}

.section-bordered {
  border-top: 1px solid var(--hairline);
}

.tile {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--hairline);
  border-radius: 9px;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.module-card:hover .tile {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* --------------------------------------------------------------------------
   En-tête
   -------------------------------------------------------------------------- */

.page-head {
  max-width: 620px;
  margin-bottom: 32px;
}

.page-title {
  margin: 0;
  font-size: clamp(1.75rem, 4vw, 2.15rem);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--vp-c-text-1);
}

.page-lead {
  margin: 12px 0 0;
  font-size: 0.985rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

/* --------------------------------------------------------------------------
   Recherche et filtres
   -------------------------------------------------------------------------- */

.toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
}

.search {
  position: relative;
  flex: 1;
  min-width: 0;
  max-width: 420px;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 13px;
  color: var(--vp-c-text-3);
  transform: translateY(-50%);
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 14px 0 38px;
  border: 1px solid var(--hairline);
  border-radius: 9px;
  background-color: var(--vp-c-bg);
  font-size: 0.885rem;
  color: var(--vp-c-text-1);
  transition: border-color 0.2s ease;
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
}

.search-input::-webkit-search-cancel-button {
  cursor: pointer;
}

.toolbar-count {
  margin: 0 0 0 auto;
  font-size: 0.83rem;
  white-space: nowrap;
  color: var(--vp-c-text-3);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.filter {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 34px;
  padding: 0 13px;
  border: 1px solid var(--hairline);
  border-radius: 999px;
  background-color: var(--vp-c-bg);
  font-size: 0.855rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.filter:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}

.filter-active,
.filter-active:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.filter-count {
  font-size: 0.76rem;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
}

.filter-active .filter-count {
  color: inherit;
  opacity: 0.75;
}

/* --------------------------------------------------------------------------
   Grille de modules
   -------------------------------------------------------------------------- */

.module-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 14px;
}

.module-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  background-color: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.module-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 15px;
}

.card-cat {
  font-size: 0.755rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.card-cue {
  margin-left: auto;
  color: var(--vp-c-text-3);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

.module-card:hover .card-cue {
  color: var(--vp-c-brand-1);
  opacity: 1;
  transform: translateX(0);
}

.card-title {
  margin: 0;
  font-size: 0.985rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: var(--vp-c-text-1);
}

.card-desc {
  margin: 7px 0 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 16px;
}

.tag {
  padding: 2px 8px;
  border: 1px solid var(--hairline);
  border-radius: 999px;
  font-size: 0.735rem;
  white-space: nowrap;
  color: var(--vp-c-text-3);
}

/* --------------------------------------------------------------------------
   Pagination et état vide
   -------------------------------------------------------------------------- */

.more {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 9px;
  font-size: 0.885rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.btn-ghost {
  border-color: var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.btn-ghost:hover {
  border-color: var(--vp-c-text-3);
  background-color: var(--vp-c-bg-soft);
}

.more-left {
  font-size: 0.79rem;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
}

.empty {
  margin: 0;
  padding: 48px 0;
  text-align: center;
  font-size: 0.915rem;
  color: var(--vp-c-text-3);
}

/* --------------------------------------------------------------------------
   Contribution
   -------------------------------------------------------------------------- */

.contrib {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  background-color: var(--vp-c-bg);
}

.contrib-body {
  min-width: 0;
}

.contrib-title {
  margin: 0;
  font-size: 0.985rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.contrib-desc {
  margin: 6px 0 0;
  font-size: 0.885rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.contrib-btn {
  margin-left: auto;
}

/* --------------------------------------------------------------------------
   Transitions de la grille
   -------------------------------------------------------------------------- */

.grid-enter-active,
.grid-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.grid-leave-active {
  position: absolute;
}

/* --------------------------------------------------------------------------
   Petits écrans
   -------------------------------------------------------------------------- */

@media (max-width: 640px) {
  .shell {
    padding: 0 20px;
  }

  .section {
    padding: 44px 0 56px;
  }

  .toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .search {
    max-width: none;
  }

  .toolbar-count {
    margin-left: 0;
  }

  .module-grid {
    grid-template-columns: 1fr;
  }

  /* Sans survol, la flèche des cartes reste visible en permanence. */
  .card-cue {
    opacity: 1;
    transform: none;
  }

  .contrib {
    flex-wrap: wrap;
  }

  .contrib-btn {
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
}
</style>
