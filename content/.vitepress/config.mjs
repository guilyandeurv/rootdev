import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "RootDev",
  description: "Ressources personnelles concernant la cybersécurité, le développement et le réseau.",
  themeConfig: {
    lastUpdated: 'Dernière mise à jour',
    logo: "logo.png",
    siteTitle: "RootDev",
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    nav: [
      { text: 'Accueil', link: '/' },
      {
        text: "Contenu",
        items: [
         { text: "Cybersécurité", link: "/cybersecurite/index" },
         { text: "Programmation", link: "/programmation/index" },
         { text: "Certifications", link: "/certification/introduction" },
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
          { text: 'Norme ISO 27001', link: '/cybersecurite/iso27001' },
          { text: 'Reconnaissance',
            collapsed:true,
            items: [
              { text: 'Reconnaissance passive', link: '/cybersecurite/recon/passive' },
            ]},
          { text: 'Dark Web',
            collapsed:true,
            items: [
              { text: 'Introduction', link: '/cybersecurite/darkweb/intro' },
              { text: 'Ses intérêts', link: '/cybersecurite/darkweb/interet' },
              { text: "L'utiliser", link: '/cybersecurite/darkweb/utiliser' },
            ]},
          { text: 'Attaques web',
            collapsed:true,
            items: [
              { text: "Contournement de l'authentification", link: '/cybersecurite/web/auth-bypass' },
              { text: 'Injection de commandes', link: '/cybersecurite/web/cmd-inject' },
              { text: 'Découverte de contenu', link: '/cybersecurite/web/discovery' },
              { text: 'Inclusion de fichiers', link: '/cybersecurite/web/file-inclusion' },
              { text: 'Vulnérabilités IDOR', link: '/cybersecurite/web/idor' },
              { text: 'Vulnérabilités SSRF', link: '/cybersecurite/web/ssrf' },
              { text: 'Vulnérabilités XSS', link: '/cybersecurite/web/xss' },
              { text: 'Injection SQL', link: '/cybersecurite/web/sql-inject' },
              { text: 'Énumération des sous-domaines', link: '/cybersecurite/web/subdomain' },
            ]},
          { text: 'Outils',
            collapsed:true,
            items: [
              { text: 'Nmap', link: '/cybersecurite/outils/nmap' },
              { text: 'Burp Suite', link: '/cybersecurite/outils/burpsuite' },
              { text: 'Metasploit', link: '/cybersecurite/outils/metasploit' },
              { text: 'Wireshark', link: '/cybersecurite/outils/wireshark' },
              { text: 'Stéganographie', link: '/cybersecurite/outils/stega' },
            ]},
            { text: 'Réseaux',
            collapsed:true,
            items: [
              { text: 'Protocole FTP', link: '/cybersecurite/reseaux/ftp' },
              { text: 'Protocole NFS', link: '/cybersecurite/reseaux/nfs' },
              { text: 'Protocole SMB', link: '/cybersecurite/reseaux/smb' },
              { text: 'Protocole SMTP', link: '/cybersecurite/reseaux/smtp' },
              { text: 'Protocole Telnet', link: '/cybersecurite/reseaux/telnet' },
            ]},
        ],
      },
      {
        text: 'Programmation',
        collapsed:true,
        items: [
          { text: 'Javascript',
            collapsed:true,
            items: [
              { text: 'Introduction', link: '/programmation/javascript/index' },
              { text: 'Variables', link: '/programmation/javascript/variables' },
              { text: 'Fonctions', link: '/programmation/javascript/fonction' },
            ]},
          { text: 'Ruby',
            collapsed:true,
            items: [
              { text: 'Introduction', link: '/programmation/ruby/index' },
            ]},
          { text: 'Langage C',
            collapsed:true,
            items: [
              { text: 'Introduction', link: '/programmation/c/index' },
            ]},
          { text: 'Python',
            collapsed:true,
            items: [
              { text: 'Introduction', link: '/programmation/python/index' },
              { text: "Fonctions d'origine", link: '/programmation/python/fonction-dorigine' },
              { text: 'Erreurs', link: '/programmation/python/erreurs' },
              { text: 'Django', link: '/programmation/python/django' },
              { text: 'Outils',
                collapsed: true,
                items: [
                  { text: 'Énumération des sous-domaines', link: '/programmation/python/outils/enum-sd'},
                  { text: 'Énumération des dossiers', link: '/programmation/python/outils/enum-dos'},
                  { text: 'Scanner de réseau', link: '/programmation/python/outils/scan-net'},
                  { text: 'Scanner de ports', link: '/programmation/python/outils/scan-por'},
                  { text: 'Téléchargeur de fichiers', link: '/programmation/python/outils/tel-fic'},
                  { text: 'Cracker de chiffrement', link: '/programmation/python/outils/crack'},
                  { text: 'Enregistreur de frappe', link: '/programmation/python/outils/listener'},
                  { text: 'SSH Bruteforce', link: '/programmation/python/outils/ssh-bru'}
                ]
              }
            ]},
          
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
                { text: 'Concepts principaux',
                  collapsed:true,
                  items: [
                    { text: 'Menaces, attaques & vulnérabilités', link: 'certification/securityplus/concepts/tav'},
                    { text: 'Architecture et design', link: 'certification/securityplus/concepts/arch-des'},
                    { text: "Attaques d'application", link: 'certification/securityplus/concepts/app-att'},
                    { text: "Opérations & réponses aux incidents", link: 'certification/securityplus/concepts/oir'},
                    { text: "Gouvernance, risques & conformité", link: 'certification/securityplus/concepts/grc'},
                  ]},
                  { text: 'Menaces, attaques & vulnérabiltiés',
                  collapsed:true,
                  items: [
                    { text: 'Malware', link: 'certification/securityplus/menaces/malware'},
                    { text: "Comprendre l'attaque", link: 'certification/securityplus/menaces/comprendre'},
                    { text: "Renseignements sur les menaces", link: 'certification/securityplus/menaces/menaces'},
                    { text: "Social Engineering", link: 'certification/securityplus/menaces/social'},
                    { text: "Attaques courantes", link: 'certification/securityplus/menaces/courantes'},
                    { text: "Types de vulnérabilité", link: 'certification/securityplus/menaces/type-vuln'},
                    { text: "Scan des vulnérabilités", link: 'certification/securityplus/menaces/scan'},
                    { text: "Tests de pénétration", link: 'certification/securityplus/menaces/penetration'},
                  ]},
                  { text: 'Programmation sécurisée',
                  collapsed:true,
                  items: [
                    { text: 'Méthodologie du développement', link: 'certification/securityplus/dev/soft-dev'},
                    { text: 'Développer qualitativement', link: 'certification/securityplus/dev/soft-quali'},
                    { text: "Attaques d'applications", link: 'certification/securityplus/dev/soft-att'},
                    { text: "Pratiques de développement sécurisé", link: 'certification/securityplus/dev/sec-dev'},
                  ]},
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
          { text: 'Les Firewall', link: '/reseaux/firewall' },
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
      copyright: 'Copyright © 2024 - RootDev.fr par Guilyan - contact@rootdev.fr'
    }
  }
})
