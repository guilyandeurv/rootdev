import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RootDev",
  description: "I'm going to write some resources here for the few things I need to learn",
  themeConfig: {
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
        ],
      },
    ],

    sidebar: [
      {
        text: 'Cybersécurité',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/cybersecurite/' }
        ],
      },
      {
        text: 'Javascript',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/javascript/' },
          { text: 'Variables', link: '/javascript/variables' },
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
          { text: 'CompTia Security + SYO-601', link: '/certification/securityplus' },
        ]
      }
    ],
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guilyandeurv' }
    ],
    footer: {
      message: 'Vous, et uniquement vous, êtes responsable de vos actes.',
      copyright: 'Copyright © 2024 - RootDev.fr par Guilyan'
    }
  }
})
