import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RootDev",
  description: "I'm going to write some resources here for the few things I need to learn",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Udemy', link: 'https://www.udemy.com/' },
      { text: 'TryHackMe', link: 'https://tryhackme.com/' },
      { text: 'SkillsForAll', link: 'https://skillsforall.com/' },
      { text: 'Contenu', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Ressources',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'JavaScript', link: '/javascript' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guilyandeurv' }
    ],
    footer: {
      message: 'Vous, et uniquement vous, êtes responsable de vos actes.',
      copyright: 'Copyright © 2024 - RootDev.fr par Guilyan'
    }
  }
})
