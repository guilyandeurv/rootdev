import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "RootDev",
  description: "I'm going to write some resources here for the few things I need to learn",
  themeConfig: {
    lastUpdated: 'Dernière mise à jour',
    logo: "/logo.png",
    siteTitle: "RootDev",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Udemy', link: 'https://www.udemy.com/' },
      { text: 'TryHackMe', link: 'https://tryhackme.com/' },
      { text: 'SkillsForAll', link: 'https://skillsforall.com/' },
      {
        text: "Contenu",
        items: [
         { text: "Menu", link: "/markdown-examples" },
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
            ]}
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
          { text: 'CompTia Security+ SYO-601', link: '/certification/securityplus' },
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
