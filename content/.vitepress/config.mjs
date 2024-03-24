import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "RootDev",
  description: "Ressources personnelles concernant la cybersécurité, le développement et le réseau.",
  themeConfig: {
    lastUpdated: 'Dernière mise à jour',
    logo: "/logo.png",
    siteTitle: "RootDev",
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Udemy', link: 'https://www.udemy.com/' },
      { text: 'TryHackMe', link: 'https://tryhackme.com/' },
      { text: 'SkillsForAll', link: 'https://skillsforall.com/' },
      {
        text: "Contenu",
        items: [
         { text: "Cybersécurité", link: "/cybersecurite/index" },
         { text: "Javascript", link: "/javascript/index" },
         { text: "Python", link: "/python/index" },
         { text: "Certifications", link: "/certification/index" },
         { text: 'Réseaux', link: '/reseaux/' },
         { text: 'Environnement', link: '/environnement/linux' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Cybersécurité',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/cybersecurite/' },
          { text: 'Définitions', link: '/cybersecurite/def' },
          { text: 'Normes internationales', link: '/cybersecurite/normes' },
          { text: 'Reconnaissance',
            collapsed:true,
            items: [
              { text: 'Reconnaissance passive', link: '/cybersecurite/recon/passive' },
            ]},
          { text: 'Outils',
            collapsed:true,
            items: [
              { text: 'Nmap', link: '/cybersecurite/outils/nmap' },
            ]},
        ],
      },
      {
        text: 'Javascript',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/javascript/' },
          { text: 'Variables', link: '/javascript/variables' },
          { text: 'Fonctions', link: '/javascript/fonction' },
        ]
      },
      {
        text: 'Python',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/python/' },
        ]
      },
      {
        text: 'Certification',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/certification/' },
          { text: 'CompTia Security+ SYO-701',
              collapsed: true,
              items: [
                { text: 'Introduction', link: 'certification/securityplus'},
                { text: 'Menaces, attaques & vulnérabilités', link: 'certification/securityplus/tav'},
                { text: 'Architecture et design', link: 'certification/securityplus/arch-des'},
                { text: "Attaques d'application", link: 'certification/securityplus/app-att'},
                { text: "Opérations & réponses aux incidents", link: 'certification/securityplus/oir'},
                { text: "Gouvernance, risques & conformité", link: 'certification/securityplus/grc'},
              ]},
          { text: 'CompTia Pentest+', link: '/certification/pentestplus' },
        ]
      },
      {
        text: 'Réseaux',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/reseaux/' },
          { text: 'LAN', link: '/reseaux/lan' },
          { text: 'WAN', link: '/reseaux/wan' },
          { text: 'DNS', link: '/reseaux/dns' },
          { text: 'HTTP', link: '/reseaux/http' },
          { text: 'NAT et PAT', link: '/reseaux/nat' },
          { text: 'Le modèle OSI', link: '/reseaux/osi' },
          { text: 'Le modèle TCP/IP', link: '/reseaux/tcp' },
          { text: 'Les sites web', link: '/reseaux/web' },
        ]
      },
      {
        text: 'Environnement',
        collapsed:true,
        items: [
          { text: 'Linux', link: '/environnement/linux' },
          { text: 'Active Directory', link: '/environnement/ad' },
          { text: 'Cisco', link: '/environnement/cisco' },
        ]
      },
    ],
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guilyandeurv' }
    ],
    docFooter: {
			prev: "Précédent",
			next: "Suivant"
		  },
    footer: {
      message: 'Vous, et uniquement vous, êtes responsable de vos actes.',
      copyright: 'Copyright © 2024 - RootDev.fr par Guilyan'
    }
  }
})
