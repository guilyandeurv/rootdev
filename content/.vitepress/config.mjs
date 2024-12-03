import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    '/': {
      label: 'Français',
      lang: 'fr',
      toc: {
        title: 'Sur cette page'
      }
    },
  },
  // Enhanced readabilities : https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/
  vite: {
    css: { preprocessorOptions: { scss: { api: 'modern' } } },
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',  
        '@nolebase/ui',
      ], 
    }, 
  }, 
  lang : 'fr-FR',
  title: "RootDev",
  description: "Ressources personnelles concernant la cybersécurité, le développement et le réseau.",
  themeConfig: {
    logo: "logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      {
        text: "Contenu",
        items: [
         { text: "🔐 Cybersécurité", link: "/cybersecurite/index" },
         { text: "📟 Programmation", link: "/programmation/index" },
         { text: "🎖️ Certifications", link: "/certification/introduction" },
         { text: '🛜 Réseaux', link: '/reseaux/' },
         { text: '🖥️ Environnement', link: '/environnement/linux' },
        ],
      },
    ],

    sidebar: [
      {
        text: '🔐 Cybersécurité',
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
          { text: 'Développement de malware',
              collapsed:true,
              items: [
                { text: 'Introduction', link: '/cybersecurite/malware-dev/index' },
              ]},
          { text: 'Reverse engineering',
              collapsed:true,
              items: [
                { text: 'Introduction', link: '/cybersecurite/reverse-engineering/index' },
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
        text: '📟 Programmation',
        collapsed:true,
        items: [
          { text: '<i class="fa-brands fa-square-js"></i> Javascript',
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
          { text: '<i class="fa-brands fa-python"></i> Python',
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
        text: '🎖️ Certification',
        collapsed:true,
        items: [
          { text: 'Introduction', link: '/certification/introduction' },
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
                    { text: "Pratiques de développement sécurisées", link: 'certification/securityplus/dev/sec-dev'},
                  ]},
              ]},
          { text: 'CompTia Pentest+', link: '/certification/pentestplus' },
          { text: 'Red Team Analyst', link: '/certification/redteam-analyst' },
          { text: 'Analyste SOC',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/certification/analyst-soc'},
              { text: "Security Operation Center (SOC)",
                collapsed:true,
                items: [
                  { text: 'Security Operation Center (SOC)', link: 'certification/analyst-soc/soc'},
                  { text: "Services intégrés & données collectées", link: 'certification/analyst-soc/services-donnees'},
                  { text: "Modèle de gouvernance", link: 'certification/analyst-soc/modele-gouvernance'},
                  { text: "Référentiels ATT&CK / DeTT&CT / Sigma / MISP", link: 'certification/analyst-soc/referentiels'},
              ]},
              { text: "Le métier d'analyste SOC",
                collapsed:true,
                items: [
                  { text: 'Activité quotidienne', link: 'certification/analyst-soc/activite'},
                  { text: "Prérequis et rôle", link: 'certification/analyst-soc/prerequis-role'},
                  { text: "Triage des alertes", link: 'certification/analyst-soc/triage-alertes'},
                  { text: "Révision en état de sécurité", link: 'certification/analyst-soc/revision-securite'},
                  { text: "Identification et rapport", link: 'certification/analyst-soc/id-rapport'},
                  { text: "Threat Hunting", link: 'certification/analyst-soc/threat-hunting'},
              ]},
              { text: "Sources de données à monitorer",
                collapsed:true,
                items: [
                  { text: 'Indicateur Windows', link: 'certification/analyst-soc/indicateur-windows'},
                  { text: "Services web", link: 'certification/analyst-soc/services-web'},
                  { text: "IDS/IPS", link: 'certification/analyst-soc/ids-ips'},
                  { text: "EDR & XDR", link: 'certification/analyst-soc/edr-xdr'},
                  { text: "USB", link: 'certification/analyst-soc/usb'},
                  { text: "DHCP & DNS", link: 'certification/analyst-soc/dhcp-dns'},
                  { text: "Antivirus & EPP", link: 'certification/analyst-soc/antivirus-epp'},
                  { text: "DLP & Whitelist", link: 'certification/analyst-soc/dlp-whitelist'},
                  { text: "Email", link: 'certification/analyst-soc/email'},
              ]},
              { text: "Tour d'horizon SIEM",
                collapsed:true,
                items: [
                  { text: 'Contexte du SIEM', link: 'certification/analyst-soc/contexte-siem'},
                  { text: "Solution existante", link: 'certification/analyst-soc/solutions'},
                  { text: "Principes de fonctionnement", link: 'certification/analyst-soc/principes-siem'},
                  { text: "Objectifs d'un SIEM", link: 'certification/analyst-soc/objectifs-siem'},
                  { text: "Solution de SIEM", link: 'certification/analyst-soc/solutions-siem'},
              ]},
              { text: "Suite Elastic",
                collapsed:true,
                items: [
                  { text: 'Agents BEATS & Sysmon', link: 'certification/analyst-soc/beats-sysmon'},
                  { text: "Découverte Logstash", link: 'certification/analyst-soc/logstash'},
                  { text: "Découverte d'Elasticsearch", link: 'certification/analyst-soc/elasticsearch'},
                  { text: "Découverte Kibana", link: 'certification/analyst-soc/kibana'},
              ]},
              { text: "Logstash (ETL)",
                collapsed:true,
                items: [
                  { text: 'Fonctionnement de Logstash', link: 'certification/analyst-soc/fonctionnement-logstash'},
                  { text: "Fichiers Input & Output", link: 'certification/analyst-soc/input-output'},
                  { text: "filtres Groks & sources externes", link: 'certification/analyst-soc/groks-external'},
              ]},
              { text: "Elasticsearch",
                collapsed:true,
                items: [
                  { text: 'Terminologie', link: 'certification/analyst-soc/terminologie'},
                  { text: "Syntaxe Lucene", link: 'certification/analyst-soc/syntaxe-lucene'},
                  { text: "Alerte avec ElasticAlert & Sigma", link: 'certification/analyst-soc/elasticalert-sigma'},
              ]},
              { text: "Kibana",
                collapsed:true,
                items: [
                  { text: "Recherche d'évènements", link: 'certification/analyst-soc/search-event'},
                  { text: "Visualisation des données", link: 'certification/analyst-soc/visualisation-donnees'},
                  { text: "Ajout de règles de détection & IoC", link: 'certification/analyst-soc/regle-detect'},
                  { text: "Architecture avancée ELK avec HELK", link: 'certification/analyst-soc/elk-helk'},
              ]},
              { text: 'Rapports', link: '/certification/analyst-soc/rapport-attaque'},
              { text: 'Windows Security',
                collapsed:true,
                items: [
                  { text: 'Convention de nommage des OU-GPO', link: 'certification/analyst-soc/ou-gpo'},
                  { text: 'Intégration de machine au domaine', link: 'certification/analyst-soc/'},
                  { text: "Scanério d'attaque des annuaires AD", link: 'certification/analyst-soc/'},
                  { text: "Architecture en tiering", link: 'certification/analyst-soc/'},
                  { text: "Red Forest", link: 'certification/analyst-soc/'},
                  { text: "LAPS", link: 'certification/analyst-soc/'},
                  { text: "Bonnes pratiques", link: 'certification/analyst-soc/'},
                  { text: "Rappels chiffrements", link: 'certification/analyst-soc/'},
                  { text: "Signatures numériques", link: 'certification/analyst-soc/'},
                  { text: "PKI + Anatomie Certificats", link: 'certification/analyst-soc/'},
                  { text: "Cartes à puce + certificats racine", link: 'certification/analyst-soc/'},
                  { text: "NPS", link: 'certification/analyst-soc/'},
                  { text: "DLP + Gouvernance des données", link: 'certification/analyst-soc/'},
                  { text: "Classification + principes DLP", link: 'certification/analyst-soc/'},
                  { text: "Gestion des évènements", link: 'certification/analyst-soc/'},
                  { text: "Sysmon", link: 'certification/analyst-soc/'},
              ]},
            ]
          }
        ]
      },
      {
        text: '🛜 Réseaux',
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
        text: '🖥️ Environnement',
        collapsed:true,
        items: [
          { text: '<i class="fa-brands fa-linux"></i> Linux', link: '/environnement/linux' },
          { text: '<i class="fa-brands fa-microsoft"></i> Active Directory', link: '/environnement/ad' },
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
			prev: "Page précédente",
			next: "Page suivante"
		  },
    footer: {
      message: 'Vous, et uniquement vous, êtes responsable de vos actes.',
      copyright: 'Copyright © 2024 - RootDev.fr par Guilyan - contact@rootdev.fr'
    },
    editLink: {
      pattern: 'https://github.com/guilyandeurv/rootdev-v2/edit/main/docs/:path',
      text: 'Editer cette page'
    },
    lastUpdated: {
      text: 'Mise à jour le ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  }
})
