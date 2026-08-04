<script setup lang="ts">
/* Pied de page unique du site.
   Il remplace le pied de page natif de VitePress (message + copyright centrés)
   sur les pages « pleine largeur ». Ces pages doivent donc déclarer
   `footer: false` dans leur frontmatter, sinon les deux se superposent. */
import { ArrowUpRight, Mail, ShieldAlert } from 'lucide-vue-next';

/* Trois colonnes plutôt qu'une liste unique, pour séparer clairement le
   contenu, les parcours et le projet lui-même. */
const footerGroups = [
  {
    title: 'Le contenu',
    links: [
      { text: 'Cybersécurité', link: '/cybersecurite/' },
      { text: 'Réseaux', link: '/reseaux/' },
      { text: 'Programmation', link: '/programmation/' },
      { text: 'Environnements', link: '/environnement/' }
    ]
  },
  {
    title: 'Parcours',
    links: [
      { text: 'Certifications', link: '/certification/' },
      { text: 'Tout le contenu', link: '/content' },
      { text: 'Introduction cyber', link: '/cybersecurite/intro' },
      { text: 'Bases des réseaux', link: '/reseaux/fondamentaux' }
    ]
  },
  {
    title: 'Le projet',
    links: [
      {
        text: 'Dépôt GitHub',
        link: 'https://github.com/guilyandeurv/rootdev',
        external: true
      },
      {
        text: 'Contribuer',
        link: 'https://github.com/guilyandeurv/rootdev/pulls',
        external: true
      },
      { text: 'contact@rootdev.fr', link: 'mailto:contact@rootdev.fr' }
    ]
  }
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-shell">
      <div class="footer-main">
        <div class="footer-brand">
          <a class="footer-name" href="/">
            <img class="footer-logo" src="/logo.png" alt="" aria-hidden="true" />
            <span>RootDev</span>
          </a>
          <p class="footer-tagline">
            Notes techniques en accès libre sur la cybersécurité, les réseaux,
            les systèmes et la programmation.
          </p>

          <p class="footer-disclaimer">
            <ShieldAlert :size="15" :stroke-width="1.75" aria-hidden="true" />
            <span>
              Contenu à visée pédagogique. Vous, et uniquement vous, êtes
              responsable de vos actes.
            </span>
          </p>

          <div class="footer-social">
            <a
              class="footer-social-btn"
              href="https://github.com/guilyandeurv/rootdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dépôt GitHub"
              title="Dépôt GitHub"
            >
              <i class="fab fa-github fa-fw" aria-hidden="true"></i>
            </a>
            <a
              class="footer-social-btn"
              href="mailto:contact@rootdev.fr"
              aria-label="Envoyer un courriel"
              title="contact@rootdev.fr"
            >
              <Mail :size="16" :stroke-width="1.75" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav class="footer-cols" aria-label="Plan du site">
          <div
            v-for="group in footerGroups"
            :key="group.title"
            class="footer-col"
          >
            <p class="footer-col-title">{{ group.title }}</p>
            <a
              v-for="item in group.links"
              :key="item.link"
              :href="item.link"
              class="footer-link"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
            >
              <span>{{ item.text }}</span>
              <ArrowUpRight v-if="item.external" :size="13" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <p class="footer-legal">© {{ currentYear }} RootDev.fr — par Guilyan</p>
        <p class="footer-colophon">Tous droits réservés</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Un seul bloc : la marque et les colonnes de liens partagent la même bande,
   et la ligne légale y est rattachée par un filet interne plutôt que par une
   seconde bordure pleine largeur — ce qui donnait l'impression de deux pieds
   de page empilés. */
.site-footer {
  --hairline: var(--vp-c-divider);

  position: relative;
  padding: 64px 0 28px;
  border-top: 1px solid var(--hairline);
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}

.footer-shell {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-main {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1.85fr);
  gap: 48px;
}

.footer-brand {
  max-width: 380px;
}

.footer-name {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 1.05rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

/* Même repère visuel que la barre de navigation. */
.footer-logo {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.footer-tagline {
  margin: 12px 0 0;
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.footer-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 18px 0 0;
  padding: 11px 13px;
  border: 1px solid var(--hairline);
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

.footer-disclaimer svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--vp-c-brand-1);
}

.footer-social {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}

.footer-social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--hairline);
  border-radius: 9px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.footer-social-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.footer-cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer-col-title {
  margin: 0 0 2px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--vp-c-text-1);
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.865rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link svg {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  transition: color 0.2s ease;
}

.footer-link:hover,
.footer-link:hover svg {
  color: var(--vp-c-brand-1);
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 44px;
  padding-top: 20px;
  border-top: 1px solid var(--hairline);
}

.footer-legal,
.footer-colophon {
  margin: 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 940px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-brand {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .site-footer {
    padding-top: 48px;
  }

  .footer-shell {
    padding: 0 20px;
  }

  .footer-cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 24px;
  }

  .footer-bottom {
    margin-top: 32px;
  }
}
</style>
