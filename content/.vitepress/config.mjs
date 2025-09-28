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
         { text: '💾 Bases de données', link: '/bdd/index' },
        ],
      },
    ],

    sidebar: [
      {
        text: '🔐 Cybersécurité',
        collapsed:true,
        items: [
          { text: '🔎 Introduction', link: '/cybersecurite/' },
          { text: '📜 Définitions', link: '/cybersecurite/def' },
          { text: '🏛️ Gouvernance',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/cybersecurite/gouv/index' },
              { text: '📰 Normes internationales', link: '/cybersecurite/gouv/normes' },
              { text: '📰 Norme ISO 27001', link: '/cybersecurite/gouv/iso27001' },
              { text: '🧑‍💼 ITIL', link: '/cybersecurite/gouv/itil' },
              { text: '✋ Autres référentiels de sécurité', link: '/cybersecurite/gouv/autres' },
              { text: '📃 PCA/PRA', link: '/cybersecurite/gouv/pca-pra' },
          ]},
          { text: '🎯 Reconnaissance',
            collapsed:true,
            items: [
              { text: '🔍 Reconnaissance passive', link: '/cybersecurite/recon/passive' },
          ]},
          { text: '🛡️ Cyberdéfense',
            collapsed:true,
            items: [
              { text: '🇫🇷 La cybersécurité en France', link: '/cybersecurite/cyberdefense/cyber-france' },
              { text: "🧾 Audit d'un SI", link: '/cybersecurite/cyberdefense/audit' },
              { text: "🦾 Durcissement des infrastructures Windows", link: '/cybersecurite/cyberdefense/durcissement' },
              { text: "🪖 Défense alignée aux attaques", link: '/cybersecurite/cyberdefense/defense' },
              { text: "📐 Architecture et organisation d'un SOC", link: '/cybersecurite/cyberdefense/soc' },
              { text: "⚠️ Détection d'intrusion", link: '/cybersecurite/cyberdefense/detection' },
              { text: '🧩 Splunk',
                    collapsed:true,
                    items: [
                        { text: '🔎 Introduction', link: '/cybersecurite/cyberdefense/splunk/intro' },
                        { text: '⏩ Les forwarders', link: '/cybersecurite/cyberdefense/splunk/forwarders' },
                        { text: "🏠 Les index", link: '/cybersecurite/cyberdefense/splunk/index' },
                        { text: "🔍 Search Head", link: '/cybersecurite/cyberdefense/splunk/search-head' },
                        { text: "*️⃣ Les champs", link: '/cybersecurite/cyberdefense/splunk/champs' },
                        { text: "🆕 Commandes de transformation", link: '/cybersecurite/cyberdefense/splunk/transformation' },
                        { text: "📈 Commandes stats", link: '/cybersecurite/cyberdefense/splunk/stats' },
                        { text: "📊 Tableaux de bord", link: '/cybersecurite/cyberdefense/splunk/dashboard' },
                        { text: "📝 Les rapports", link: '/cybersecurite/cyberdefense/splunk/rapports' },
                        { text: "👁️ Les lookups", link: '/cybersecurite/cyberdefense/splunk/lookups' },
                        { text: "🔂 Pivot", link: '/cybersecurite/cyberdefense/splunk/pivot' },
                        { text: "⚠️ Les alertes", link: '/cybersecurite/cyberdefense/splunk/alertes' },
                        { text: "⬇️ Installation", link: '/cybersecurite/cyberdefense/splunk/install' },
            ]},
          ]},
          { text: '🌑 Dark Web',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/cybersecurite/darkweb/intro' },
              { text: '❔ Ses intérêts', link: '/cybersecurite/darkweb/interet' },
              { text: "▶️ L'utiliser", link: '/cybersecurite/darkweb/utiliser' },
            ]},
          { text: '🦠 Développement de malware',
              collapsed:true,
              items: [
                { text: '🔎 Introduction', link: '/cybersecurite/malware-dev/index' },
              ]},
          { text: '👨‍💻 Reverse engineering',
              collapsed:true,
              items: [
                { text: '🔎 Introduction', link: '/cybersecurite/reverse-engineering/index' },
            ]},
          { text: '🌐 Attaques web',
            collapsed:true,
            items: [
              { text: "🔓 Contournement de l'authentification", link: '/cybersecurite/web/auth-bypass' },
              { text: '⌨️ Injection de commandes', link: '/cybersecurite/web/cmd-inject' },
              { text: '📂 Découverte de contenu', link: '/cybersecurite/web/discovery' },
              { text: '🗄️ Inclusion de fichiers', link: '/cybersecurite/web/file-inclusion' },
              { text: '📛 Vulnérabilités IDOR', link: '/cybersecurite/web/idor' },
              { text: '📛 Vulnérabilités SSRF', link: '/cybersecurite/web/ssrf' },
              { text: '📛 Vulnérabilités XSS', link: '/cybersecurite/web/xss' },
              { text: '📛 Injection SQL', link: '/cybersecurite/web/sql-inject' },
              { text: '📛 Énumération des sous-domaines', link: '/cybersecurite/web/subdomain' },
              { text: "📛 Attaques d'API", link: '/cybersecurite/web/api' },
            ]},
          { text: '🔧 Outils',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/cybersecurite/outils/intro' },
              { text: '📶 Nmap', link: '/cybersecurite/outils/nmap' },
              { text: '🧰 Burp Suite', link: '/cybersecurite/outils/burpsuite' },
              { text: '💠 Metasploit', link: '/cybersecurite/outils/metasploit' },
              { text: '🦈 Wireshark', link: '/cybersecurite/outils/wireshark' },
              { text: '🥷 Stéganographie', link: '/cybersecurite/outils/stega' },
            ]},
            { text: '🌐 Réseaux',
            collapsed:true,
            items: [
              { text: '📂 Protocole FTP', link: '/cybersecurite/reseaux/ftp' },
              { text: '🗄️ Protocole NFS', link: '/cybersecurite/reseaux/nfs' },
              { text: '📨 Protocole SMB', link: '/cybersecurite/reseaux/smb' },
              { text: '📧 Protocole SMTP', link: '/cybersecurite/reseaux/smtp' },
              { text: '🗃️ Protocole Telnet', link: '/cybersecurite/reseaux/telnet' },
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
              { text: '🔎 Introduction', link: '/programmation/javascript/index' },
              { text: '📦 Variables', link: '/programmation/javascript/variables' },
              { text: '🏗️ Fonctions', link: '/programmation/javascript/fonction' },
            ]},
          { text: '💎 Ruby',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/programmation/ruby/index' },
            ]},
          { text: '©️ Langage C',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/programmation/c/index' },
            ]},
          { text: '<i class="fa-brands fa-python"></i> Python',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/programmation/python/index' },
              { text: "🏗️ Fonctions d'origine", link: '/programmation/python/fonction-dorigine' },
              { text: '⚠️ Erreurs', link: '/programmation/python/erreurs' },
              { text: '🌐 Django', link: '/programmation/python/django' },
              { text: '🔧 Outils',
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
          { text: '🔎Introduction', link: '/certification/introduction' },
          { text: '📛 CompTia Security+ SYO-701',
              collapsed: true,
              items: [
                { text: '🔎 Introduction', link: 'certification/securityplus'},
                { text: '🧩 Concepts principaux',
                  collapsed:true,
                  items: [
                    { text: '🦠 Menaces, attaques & vulnérabilités', link: 'certification/securityplus/concepts/tav'},
                    { text: '📐 Architecture et design', link: 'certification/securityplus/concepts/arch-des'},
                    { text: "📲 Attaques d'application", link: 'certification/securityplus/concepts/app-att'},
                    { text: "🧯 Opérations & réponses aux incidents", link: 'certification/securityplus/concepts/oir'},
                    { text: "🏛️ Gouvernance, risques & conformité", link: 'certification/securityplus/concepts/grc'},
                  ]},
                  { text: '🦠 Menaces, attaques & vulnérabiltiés',
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
                  { text: '👩‍💻 Programmation sécurisée',
                  collapsed:true,
                  items: [
                    { text: 'Méthodologie du développement', link: 'certification/securityplus/dev/soft-dev'},
                    { text: 'Développer qualitativement', link: 'certification/securityplus/dev/soft-quali'},
                    { text: "Attaques d'applications", link: 'certification/securityplus/dev/soft-att'},
                    { text: "Pratiques de développement sécurisées", link: 'certification/securityplus/dev/sec-dev'},
                  ]},
              ]},
          { text: '📲 CompTia Pentest+', link: '/certification/pentestplus' },
          { text: '👺 Red Team Analyst',
            collapsed:true,
            items: [
              { text: '🔎 Introduction', link: '/certification/redteam-analyst/index' },
              { text: '📜 Définitions', link: '/certification/redteam-analyst/def' },
          ]},
          { text: '🧑‍💼 Analyste SOC',
            collapsed: true,
            items: [
              { text: '🔎 Introduction', link: '/certification/analyst-soc'},
              { text: "Le métier d'analyste SOC", link: 'certification/analyst-soc/job/activite'},
              { text: "Security Operation Center (SOC)",
                collapsed:true,
                items: [
                  { text: 'Security Operation Center (SOC)', link: 'certification/analyst-soc/soc/soc'},
                  { text: "Services intégrés & données collectées", link: 'certification/analyst-soc/soc/services-donnees'},
                  { text: "Modèle de gouvernance", link: 'certification/analyst-soc/soc/modele-gouvernance'},
                  { text: "Référentiels ATT&CK / DeTT&CT / Sigma / MISP", link: 'certification/analyst-soc/soc/referentiels'},
              ]},
              { text: "Sources de données à monitorer",
                collapsed:true,
                items: [
                  { text: 'Indicateur Windows', link: 'certification/analyst-soc/monitoring/indicateur-windows'},
                  { text: "Services web", link: 'certification/analyst-soc/monitoring/services-web'},
                  { text: "IDS/IPS", link: 'certification/analyst-soc/monitoring/ids-ips'},
                  { text: "EDR & XDR", link: 'certification/analyst-soc/monitoring/edr-xdr'},
                  { text: "USB", link: 'certification/analyst-soc/monitoring/usb'},
                  { text: "DHCP & DNS", link: 'certification/analyst-soc/monitoring/dhcp-dns'},
                  { text: "Antivirus & EPP", link: 'certification/analyst-soc/monitoring/antivirus-epp'},
                  { text: "DLP & Whitelist", link: 'certification/analyst-soc/monitoring/dlp-whitelist'},
                  { text: "Email", link: 'certification/analyst-soc/monitoring/email'},
              ]},
              { text: "Tour d'horizon SIEM", link: 'certification/analyst-soc/siem/index'},
              { text: "Suite Elastic",
                collapsed:true,
                items: [
                  { text: 'Agents BEATS & Sysmon', link: 'certification/analyst-soc/elastic/beats-sysmon'},
                  { text: "Découverte d'ElasticStack", link: 'certification/analyst-soc/elastic/elasticstack'},
              ]},
              { text: "Logstash (ETL)",
                collapsed:true,
                items: [
                  { text: 'Fonctionnement de Logstash', link: 'certification/analyst-soc/logstash/fonctionnement-logstash'},
                  { text: "Filtres Groks & sources externes", link: 'certification/analyst-soc/logstash/groks-external'},
              ]},
              { text: "Elasticsearch", link: 'certification/analyst-soc/elasticsearch/terminologie'},
              { text: "Kibana",
                collapsed:true,
                items: [
                  { text: "Recherche d'évènements", link: 'certification/analyst-soc/kibana/search-event'},
                  { text: "Visualisation des données", link: 'certification/analyst-soc/kibana/visualisation-donnees'},
              ]},
              { text: 'Rapports', link: '/certification/analyst-soc/rapport'},
              { text: 'Windows Security',
                collapsed:true,
                items: [
                  { text: 'Convention de nommage des OU-GPO', link: 'certification/analyst-soc/windows/ou-gpo'},
                  { text: 'Intégration de machine au domaine', link: 'certification/analyst-soc/windows/'},
                  { text: "Scanério d'attaque des annuaires AD", link: 'certification/analyst-soc/windows/'},
                  { text: "Architecture en tiering", link: 'certification/analyst-soc/windows/'},
                  { text: "Red Forest", link: 'certification/analyst-soc/windows/'},
                  { text: "LAPS", link: 'certification/analyst-soc/windows/'},
                  { text: "Bonnes pratiques", link: 'certification/analyst-soc/windows/'},
                  { text: "Rappels chiffrements", link: 'certification/analyst-soc/windows/'},
                  { text: "Signatures numériques", link: 'certification/analyst-soc/windows/'},
                  { text: "PKI + Anatomie Certificats", link: 'certification/analyst-soc/windows/'},
                  { text: "Cartes à puce + certificats racine", link: 'certification/analyst-soc/windows/'},
                  { text: "NPS", link: 'certification/analyst-soc/windows/'},
                  { text: "DLP + Gouvernance des données", link: 'certification/analyst-soc/windows/'},
                  { text: "Classification + principes DLP", link: 'certification/analyst-soc/windows/'},
                  { text: "Gestion des évènements", link: 'certification/analyst-soc/windows/'},
                  { text: "Sysmon", link: 'certification/analyst-soc/windows/'},
              ]},
            ]
          }
        ]
      },
      {
        text: '🛜 Réseaux',
        collapsed:true,
        items: [
          { text: '🔎 Introduction', link: '/reseaux/' },
          { text: '📶 LAN', link: '/reseaux/lan' },
          { text: '🌎 WAN', link: '/reseaux/wan' },
          { text: '🛎️ DNS', link: '/reseaux/dns' },
          { text: '🌐 HTTP', link: '/reseaux/http' },
          { text: '🔀 NAT et PAT', link: '/reseaux/nat' },
          { text: '🧩 Le modèle OSI', link: '/reseaux/osi' },
          { text: '♦️ Le modèle TCP/IP', link: '/reseaux/tcp' },
          { text: '🧱 Les Firewall', link: '/reseaux/firewall' },
          { text: '🕸️ Les sites web', link: '/reseaux/web' },
          { text: '💪 Durcissement des réseaux',
                collapsed:true,
                items: [
                  { text: '🔎 Introduction', link: '/reseaux/durcissement/intro' },
                  { text: '📐 Architecture', link: '/reseaux/durcissement/architecture' },
                  { text: '🔂 Sécurisation des commutateurs', link: '/reseaux/durcissement/security-commu' },
                  { text: '🖥️ Sécurisation des équipements', link: '/reseaux/durcissement/security-equipements' },
                  { text: '🤖 SNMP et autres fonctions', link: '/reseaux/durcissement/snmp' },
                  { text: '🔐 VPN & certificats', link: '/reseaux/durcissement/vpn' },
              ]},
          { text: '💎 Sécurité avancée des réseaux',
                collapsed:true,
                items: [
                  { text: '⛑️ Architecture sécurisée', link: '/reseaux/advanced/architecture' },
                  { text: '🧱 Pare-feu', link: '/reseaux/advanced/pare-feu' },
                  { text: '🤖 NIDS & NIPS', link: '/reseaux/advanced/nids-nips' },
                  { text: '🥽 Proxy / Serveur mandataire', link: '/reseaux/advanced/proxy' },
                  { text: '0️⃣ Zero Trust', link: '/reseaux/advanced/zero-trust' },
              ]},
          { text: '🔐 Cryptographie et VPN',
                collapsed:true,
                items: [
                  { text: '🔎 Introduction', link: '/reseaux/crypto/intro' },
                  { text: '🔢 Chiffrement symétrique', link: '/reseaux/crypto/symetrique' },
                  { text: '🔡 Chiffrement asymétrique', link: '/reseaux/crypto/asymetrique' },
                  { text: '#️⃣ Fonction de hachage', link: '/reseaux/crypto/hash' },
                  { text: '🔑 Public key infrastructure', link: '/reseaux/crypto/pki' },
                  { text: '🔐 VPN', link: '/reseaux/crypto/vpn' },
                  { text: '🛅 VPN - IPSEC', link: '/reseaux/crypto/ipsec' },
              ]},
        ]
      },
      {
        text: '🖥️ Environnement',
        collapsed:true,
        items: [
          { text: '<i class="fa-brands fa-linux"></i> Linux',
                collapsed:true,
                items: [
                  { text: '🔎 Introduction à Linux', link: '/environnement/linux/linux' },
                  { text: '<i class="fa-solid fa-code"></i> Fondamentaux Linux & Bash',
                        collapsed:true,
                        items: [
                          { text: '📔 Histoire et principes clés', link: '/environnement/linux/intro/histoire-principes' },
                          { text: '⌨️ Commandes de base', link: '/environnement/linux/intro/commandes-base' },
                          { text: '⚡ Gestion des programmes', link: '/environnement/linux/intro/gestion-programmes' },
                          { text: '👨‍💻 Scripting', link: '/environnement/linux/intro/scripting' },
                        ]},
                  { text: '<i class="fa-brands fa-linux"></i> Administration des systèmes Linux',
                        collapsed:true,
                        items: [
                          { text: '📶 Maitriser le réseau & les firewalls', link: '/environnement/linux/admin/reseau' },
                          { text: '👌 Gérer les performances', link: '/environnement/linux/admin/performances' },
                          { text: '⛑️ Troubleshooting', link: '/environnement/linux/admin/troubleshoot' },
                          { text: '<i class="fa-solid fa-database"></i> Organiser et partager son stockage', link: '/environnement/linux/admin/stockage' },
                          { text: '<i class="fa-solid fa-ethernet"></i> Service DHCP', link: '/environnement/linux/admin/dhcp' },
                          { text: '#️⃣ Serveur DNS', link: '/environnement/linux/admin/dns' },
                          { text: "👥 Gestion d'annuaire : LDAP & OpenLDAP", link: '/environnement/linux/admin/annuaire' },
                          { text: "💾 Sauvegarde et restauration", link: '/environnement/linux/admin/sauvegarde' },
                        ]},
                  { text: '<i class="fa-solid fa-wand-magic-sparkles"></i> Ansible',
                        collapsed:true,
                        items: [
                          { text: '🔎 Introduction', link: '/environnement/linux/ansible/intro' },
                          { text: '🚀 Les modules et commandes ad hoc', link: '/environnement/linux/ansible/modules' },
                          { text: '📦 Inventaire', link: '/environnement/linux/ansible/inventaire' },
                          { text: '⏯️ Playbook', link: '/environnement/linux/ansible/playbook' },
                          { text: '🔢 Rôles', link: '/environnement/linux/ansible/roles' },
                          { text: '🏦 Vault', link: '/environnement/linux/ansible/vault' },
                        ]},
              ]},
          { text: '<i class="fa-brands fa-microsoft"></i> Windows Server',
                collapsed:true,
                items: [
                  { text: '<i class="fa-brands fa-microsoft"></i> Administration des systèmes Windows',
                        collapsed:true,
                        items: [
                          { text: '🔎 Introduction', link: '/environnement/winserv/admin/intro' },
                          { text: '👥 Active Directory', link: '/environnement/winserv/admin/ad' },
                          { text: '<i class="fa-solid fa-ethernet"></i> Service DHCP', link: '/environnement/winserv/admin/dhcp' },
                          { text: '🌐 Service ISS', link: '/environnement/winserv/admin/iss' },
                          { text: '🆕 Windows Update Service', link: '/environnement/winserv/admin/wu' },
                          { text: '💾 Stockage des données', link: '/environnement/winserv/admin/stockage' },
                        ]},
                  { text: '🆙 Haute disponibilité',
                        collapsed:true,
                        items: [
                          { text: '🔎 Introduction', link: '/environnement/winserv/ha/intro' },
                          { text: '<i class="fa-solid fa-ethernet"></i> Haute disponibilité du DHCP', link: '/environnement/winserv/ha/dhcp' },
                          { text: '📶 Equilibrage de la charge réseau', link: '/environnement/winserv/ha/equilibrage' },
                          { text: '💾 Haute disponibilité des données', link: '/environnement/winserv/ha/stockage' },
                          { text: '🔂 Cluster de basculement', link: '/environnement/winserv/ha/basculement' },
                        ]},
                  { text: '⌨️ Powershell',
                        collapsed:true,
                        items: [
                          { text: '🔎 Introduction', link: '/environnement/winserv/powershell/intro' },
                          { text: '📂 Gestion des fichiers et systèmes de fichiers', link: '/environnement/winserv/powershell/gestion-fichiers' },
                          { text: '👥 Gestion des utilisateurs, groupes et processus', link: '/environnement/winserv/powershell/gestion-utilisateurs' },
                          { text: '🚀 Scripting et automatisation', link: '/environnement/winserv/powershell/scripting' },
                        ]},
              ]},
          { text: '©️ Cisco', link: '/environnement/cisco' },
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
