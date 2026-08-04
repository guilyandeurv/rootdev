<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Code2,
  Network,
  Server,
  Shield,
  ShieldCheck,
  Terminal
} from 'lucide-vue-next';
import SiteFooter from './SiteFooter.vue';

/* Points d'entrée concrets — des pages précises, à ne pas confondre avec la
   grille des domaines plus bas qui, elle, ouvre des sections entières. */
const quickstarts = [
  {
    icon: ShieldCheck,
    title: 'Introduction à la cybersécurité',
    tag: 'Cybersécurité',
    desc: 'Le vocabulaire, les grandes familles de menaces et les principes défensifs.',
    link: '/cybersecurite/intro'
  },
  {
    icon: Network,
    title: 'Fondamentaux des réseaux',
    tag: 'Réseaux',
    desc: 'Adressage, routage et commutation : les bases avant tout le reste.',
    link: '/reseaux/fondamentaux'
  },
  {
    icon: Server,
    title: 'Premiers pas sous Linux',
    tag: 'Systèmes',
    desc: "Histoire, philosophie et commandes de base de l'écosystème.",
    link: '/environnement/linux/linux'
  },
  {
    icon: Code2,
    title: 'Débuter avec Python',
    tag: 'Programmation',
    desc: "La syntaxe et les structures utiles à l'outillage de sécurité.",
    link: '/programmation/python/intro'
  }
];

const domains = [
  {
    icon: ShieldCheck,
    title: 'Cybersécurité',
    desc: 'Gouvernance, reconnaissance, attaques web, cyberdéfense et SOC.',
    link: '/cybersecurite/'
  },
  {
    icon: Network,
    title: 'Réseaux',
    desc: 'Modèles OSI et TCP/IP, durcissement, cryptographie et VPN.',
    link: '/reseaux/'
  },
  {
    icon: Server,
    title: 'Environnements',
    desc: 'Administration Linux et Windows Server, Ansible, virtualisation.',
    link: '/environnement/'
  },
  {
    icon: Code2,
    title: 'Programmation',
    desc: 'Python, JavaScript, Rust, Ruby et C appliqués à la sécurité.',
    link: '/programmation/'
  },
  {
    icon: Award,
    title: 'Certifications',
    desc: 'Security+, Pentest+, Red Team Analyst et analyste SOC.',
    link: '/certification/'
  },
  {
    icon: Terminal,
    title: 'Outils',
    desc: 'Nmap, Burp Suite, Metasploit, Wireshark et stéganographie.',
    link: '/cybersecurite/outils/intro'
  }
];

const sources = [
  {
    icon: Shield,
    name: 'TryHackMe',
    desc: 'Apprentissage pratique et gamifié',
    href: 'https://tryhackme.com'
  },
  {
    icon: BookOpen,
    name: 'Cisco Skills For All',
    desc: 'Préparation aux certifications',
    href: 'https://skillsforall.com'
  },
  {
    icon: Code2,
    name: 'Udemy',
    desc: "Cours d'experts reconnus",
    href: 'https://udemy.com'
  }
];

</script>

<template>
  <div class="home">
    <!-- Hero : titre centré, puis deux colonnes denses -->
    <section class="hero">
      <div class="shell">

        <div class="hero-grid">
          <!-- Colonne gauche : la mise en avant -->
          <div class="hero-col">
            <div class="col-head">
              <h2 class="col-title">Déployez-le chez vous</h2>
              <p class="col-lead">
                Le site est open source et construit avec VitePress.
              </p>
            </div>

            <div class="promo">
              <div class="terminal">
                <div class="terminal-bar">
                  <span class="terminal-dots" aria-hidden="true">
                    <i></i><i></i><i></i>
                  </span>
                  <span class="terminal-name">bash</span>
                </div>
                <pre class="terminal-body"><code><span class="t-prompt">$</span> <span class="t-cmd">git clone https://github.com/guilyandeurv/rootdev.git</span>
<span class="t-prompt">$</span> <span class="t-cmd">cd rootdev &amp;&amp; npm install</span>
<span class="t-prompt">$</span> <span class="t-cmd">npm run docs:dev</span>

<span class="t-dim">  vitepress</span>

<span class="t-dim">  ➜  Local:</span>   <span class="t-link">http://localhost:5173/</span>
<span class="t-dim">  ➜  press h to show help</span></code></pre>
              </div>

              <div class="promo-body">
                <h3 class="promo-title">Clonez et lancez en local</h3>
                <p class="promo-desc">
                  Trois commandes suffisent pour faire tourner l'ensemble du
                  site sur votre machine, et l'adapter à vos propres notes.
                </p>
                <div class="promo-actions">
                  <a
                    class="btn btn-ghost"
                    href="https://github.com/guilyandeurv/rootdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github fa-fw" aria-hidden="true"></i>
                    <span>Voir le dépôt</span>
                    <ArrowUpRight :size="15" />
                  </a>
                  <a class="btn btn-primary" href="/content">
                    <span>Parcourir</span>
                    <ArrowRight :size="16" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne droite : par où commencer -->
          <div class="hero-col">
            <div class="col-head">
              <h2 class="col-title">Première visite&nbsp;?</h2>
              <p class="col-lead">Quatre pages pour prendre le départ.</p>
            </div>

            <div class="qs-list">
              <a
                v-for="item in quickstarts"
                :key="item.link"
                :href="item.link"
                class="qs-item"
              >
                <span class="tile" aria-hidden="true">
                  <component :is="item.icon" :size="19" :stroke-width="1.75" />
                </span>
                <span class="qs-body">
                  <span class="qs-head">
                    <span class="qs-title">{{ item.title }}</span>
                    <span class="qs-tag">{{ item.tag }}</span>
                  </span>
                  <span class="qs-desc">{{ item.desc }}</span>
                </span>
              </a>
            </div>

            <a class="qs-all" href="/content">
              <span>Voir tout le contenu</span>
              <ArrowRight :size="15" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Domaines -->
    <section class="section section-bordered">
      <div class="shell">
        <header class="section-head">
          <h2 class="section-title">Les domaines couverts</h2>
          <p class="section-lead">
            Six grands ensembles, du fondamental à la mise en pratique.
          </p>
        </header>

        <div class="domain-grid">
          <a
            v-for="domain in domains"
            :key="domain.title"
            :href="domain.link"
            class="domain-card"
          >
            <span class="tile" aria-hidden="true">
              <component :is="domain.icon" :size="19" :stroke-width="1.75" />
            </span>
            <h3 class="domain-title">{{ domain.title }}</h3>
            <p class="domain-desc">{{ domain.desc }}</p>
            <span class="domain-cue" aria-hidden="true">
              <ArrowRight :size="15" />
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Sources -->
    <section class="section section-bordered">
      <div class="shell">
        <header class="section-head">
          <h2 class="section-title">Sources d'inspiration</h2>
          <p class="section-lead">
            Les plateformes qui nourrissent une bonne partie de ces notes.
          </p>
        </header>

        <div class="source-grid">
          <a
            v-for="source in sources"
            :key="source.name"
            :href="source.href"
            target="_blank"
            rel="noopener noreferrer"
            class="source-card"
          >
            <span class="tile" aria-hidden="true">
              <component :is="source.icon" :size="19" :stroke-width="1.75" />
            </span>
            <span class="source-body">
              <span class="source-name">{{ source.name }}</span>
              <span class="source-desc">{{ source.desc }}</span>
            </span>
            <ArrowUpRight class="source-cue" :size="16" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <!-- Pied de page (composant partagé avec les autres pages pleine largeur) -->
    <SiteFooter />
  </div>
</template>

<style scoped>
/* --------------------------------------------------------------------------
   Bases
   --------------------------------------------------------------------------
   La page reste transparente : le fond texturé du site (points + dégradés
   définis dans colors.scss) traverse toutes les sections, ce qui évite
   d'empiler des dégradés concurrents.
   -------------------------------------------------------------------------- */

.home {
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
  padding: 72px 0;
}

/* Un simple filet plutôt qu'un changement de fond entre les sections. */
.section-bordered {
  border-top: 1px solid var(--hairline);
}

.section-head {
  max-width: 620px;
  margin-bottom: 40px;
}

.section-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

.section-lead {
  margin: 10px 0 0;
  font-size: 0.975rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

/* La tuile d'icône, partagée par les trois familles de cartes. */
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

.qs-item:hover .tile,
.domain-card:hover .tile,
.source-card:hover .tile {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* --------------------------------------------------------------------------
   Hero
   -------------------------------------------------------------------------- */

.hero {
  padding: 68px 0 76px;
}

.hero-head {
  max-width: 720px;
  margin: 0 auto 44px;
  text-align: center;
}

.hero-title {
  margin: 0;
  font-size: clamp(2.1rem, 5vw, 2.9rem);
  font-weight: 650;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--vp-c-text-1);
}

.hero-lead {
  max-width: 640px;
  margin: 18px auto 0;
  font-size: 1.025rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

/* Pas d'`align-items: start` : on laisse les deux colonnes s'étirer à la même
   hauteur. Combiné aux `flex: 1` ci-dessous, cela aligne le bas de la carte de
   gauche sur celui du bouton de droite, quelle que soit la colonne la plus
   longue. */
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 28px;
}

.hero-col {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.col-head {
  margin-bottom: 16px;
}

.col-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.col-lead {
  margin: 6px 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* --------------------------------------------------------------------------
   Carte mise en avant (colonne gauche)
   -------------------------------------------------------------------------- */

.promo {
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  background-color: var(--vp-c-bg);
}

/* Le terminal garde volontairement une teinte sombre dans les deux thèmes :
   c'est ainsi qu'on lit un shell. Sa bordure est celle de la carte. */
.terminal {
  border-bottom: 1px solid var(--hairline);
  background-color: #10151f;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.terminal-dots {
  display: inline-flex;
  gap: 6px;
}

.terminal-dots i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.16);
}

.terminal-name {
  font-family: var(--vp-font-family-mono);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.42);
}

.terminal-body {
  margin: 0;
  padding: 18px;
  overflow-x: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 0.79rem;
  line-height: 1.8;
  color: #c9d3e0;
}

.t-prompt {
  color: #6b8afd;
}

.t-cmd {
  color: #e6ecf5;
}

.t-dim {
  color: #6f7c8f;
}

.t-link {
  color: #5fbf9b;
}

.promo-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
}

.promo-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.promo-desc {
  margin: 8px 0 0;
  font-size: 0.895rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.promo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 20px;
}

/* --------------------------------------------------------------------------
   Boutons
   -------------------------------------------------------------------------- */

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
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.btn-primary {
  background-color: var(--vp-c-brand-3);
  color: #fff;
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-2);
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

/* --------------------------------------------------------------------------
   Points de départ (colonne droite)
   -------------------------------------------------------------------------- */

.qs-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
}

.qs-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 15px 16px;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  background-color: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.qs-item:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.qs-body {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.qs-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.qs-title {
  font-size: 0.93rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.qs-tag {
  padding: 2px 8px;
  border-radius: 999px;
  background-color: var(--vp-c-brand-soft);
  font-size: 0.71rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  white-space: nowrap;
  color: var(--vp-c-brand-1);
}

.qs-desc {
  margin-top: 5px;
  font-size: 0.855rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.qs-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding: 13px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: var(--radius);
  font-size: 0.885rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--vp-c-brand-1);
  transition: background-color 0.2s ease;
}

.qs-all:hover {
  background-color: var(--vp-c-brand-soft);
}

/* --------------------------------------------------------------------------
   Domaines
   -------------------------------------------------------------------------- */

.domain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
}

.domain-card {
  position: relative;
  display: block;
  padding: 22px;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  background-color: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.domain-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.domain-card .tile {
  margin-bottom: 16px;
}

.domain-title {
  margin: 0;
  font-size: 0.985rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.domain-desc {
  margin: 7px 0 0;
  font-size: 0.885rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.domain-cue {
  position: absolute;
  top: 24px;
  right: 20px;
  display: inline-flex;
  color: var(--vp-c-text-3);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.domain-card:hover .domain-cue {
  color: var(--vp-c-brand-1);
  opacity: 1;
  transform: translateX(0);
}

/* --------------------------------------------------------------------------
   Sources
   -------------------------------------------------------------------------- */

.source-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
}

.source-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  background-color: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.source-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.source-body {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 3px;
}

.source-name {
  font-size: 0.93rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.source-desc {
  font-size: 0.845rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.source-cue {
  flex-shrink: 0;
  margin-left: auto;
  color: var(--vp-c-text-3);
  transition: color 0.2s ease;
}

.source-card:hover .source-cue {
  color: var(--vp-c-brand-1);
}

/* --------------------------------------------------------------------------
   Adaptation aux petits écrans
   -------------------------------------------------------------------------- */

@media (max-width: 940px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .shell {
    padding: 0 20px;
  }

  .hero {
    padding: 48px 0 56px;
  }

  .hero-head {
    margin-bottom: 36px;
  }

  .section {
    padding: 56px 0;
  }

  .promo-actions .btn {
    flex: 1 1 auto;
    justify-content: center;
  }

  .domain-grid,
  .source-grid {
    grid-template-columns: 1fr;
  }

  /* Sans survol, la flèche des cartes reste visible en permanence. */
  .domain-cue {
    opacity: 1;
    transform: none;
  }
}
</style>
