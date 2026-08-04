import { defineConfig } from 'vitepress'
import { buildIconCss } from './icons/build.mjs'
import { ic } from './icons/label.mjs'

/* La feuille d'icônes est reconstruite avant le démarrage de Vite : toute
   icône ajoutée au registre est immédiatement disponible. */
buildIconCss()

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
    // Chemin absolu obligatoire : VitePress laisse passer tel quel tout chemin
    // ne commençant pas par « / » (cf. `withBase`), et le navigateur le résout
    // alors relativement à l'URL courante — d'où un 404 dès qu'on quitte la
    // racine (`/cybersecurite/logo.png`, …).
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    // Les libellés passent par `ic()` : une icône Lucide (ou un logo Simple
    // Icons pour les marques) suivie du texte. Cf. `icons/registry.mjs`.
    nav: [
      { text: ic('house', 'Accueil'), link: '/' },
      {
        text: "Contenu",
        items: [
         { text: ic('shield-check', 'Cybersécurité'), link: "/cybersecurite/index" },
         { text: ic('code', 'Programmation'), link: "/programmation/index" },
         { text: ic('award', 'Certifications'), link: "/certification/index" },
         { text: ic('network', 'Réseaux'), link: '/reseaux/index' },
         { text: ic('server', 'Environnement'), link: '/environnement/index' },
         { text: ic('library-big', 'Voir tout'), link: '/content' },
        ],
      },
      {
      items: [
        { text: ic('gamepad-2', 'Jeu rootar.io'), link: '/game' }
      ]
      }
    ],

    sidebar: [
      {
        text: ic('shield-check', 'Cybersécurité'),
        collapsed:true,
        items: [
          { text: ic('book-open-text', 'Introduction'), link: '/cybersecurite/intro' },
          { text: ic('book-a', 'Définitions'), link: '/cybersecurite/def' },
          { text: ic('landmark', 'Gouvernance'),
            collapsed:true,
            items: [
              { text: ic('scale', 'Introduction'), link: '/cybersecurite/gouv/index' },
              { text: ic('book-marked', 'Normes internationales'), link: '/cybersecurite/gouv/normes' },
              { text: ic('badge-check', 'Norme ISO 27001'), link: '/cybersecurite/gouv/iso27001' },
              { text: ic('car-front', 'Norme ISO 21434'), link: '/cybersecurite/gouv/iso21434' },
              { text: ic('workflow', 'ITIL'), link: '/cybersecurite/gouv/itil' },
              { text: ic('library', 'Autres référentiels de sécurité'), link: '/cybersecurite/gouv/autres' },
              { text: ic('life-buoy', 'PCA/PRA'), link: '/cybersecurite/gouv/pca-pra' },
          ]},
          { text: ic('crosshair', 'Reconnaissance'),
            collapsed:true,
            items: [
              { text: ic('binoculars', 'Reconnaissance passive'), link: '/cybersecurite/recon/passive' },
          ]},
          { text: ic('shield', 'Cyberdéfense'),
            collapsed:true,
            items: [
              { text: ic('flag', 'La cybersécurité en France'), link: '/cybersecurite/cyberdefense/cyber-france' },
              { text: ic('clipboard-check', "Audit d'un SI"), link: '/cybersecurite/cyberdefense/audit' },
              { text: ic('hard-hat', 'Durcissement des infrastructures Windows'), link: '/cybersecurite/cyberdefense/durcissement' },
              { text: ic('swords', 'Défense alignée aux attaques'), link: '/cybersecurite/cyberdefense/defense' },
              { text: ic('radar', "Architecture et organisation d'un SOC"), link: '/cybersecurite/cyberdefense/soc' },
              { text: ic('siren', "Détection d'intrusion"),
                    collapsed:true,
                    items: [
                        { text: ic('brand-snort', 'Regle de détection - SNORT'), link: '/cybersecurite/cyberdefense/detection/snort' },
                        { text: ic('scroll-text', "Journaux d'événements Windows"), link: '/cybersecurite/cyberdefense/detection/event-windows' },
                        { text: ic('user-check', 'Comptes et authentification'), link: '/cybersecurite/cyberdefense/detection/users' },
                        { text: ic('search-code', 'Investigation - Powershell'), link: '/cybersecurite/cyberdefense/detection/powershell' },
                        { text: ic('anchor', 'Investigation - Persistence'), link: '/cybersecurite/cyberdefense/detection/persistence' },
                    ]},
              { text: ic('brand-splunk', 'Splunk'),
                    collapsed:true,
                    items: [
                        { text: ic('book-open', 'Introduction'), link: '/cybersecurite/cyberdefense/splunk/intro' },
                        { text: ic('forward', 'Les forwarders'), link: '/cybersecurite/cyberdefense/splunk/forwarders' },
                        { text: ic('database', 'Les index'), link: '/cybersecurite/cyberdefense/splunk/index' },
                        { text: ic('search', 'Search Head'), link: '/cybersecurite/cyberdefense/splunk/search-head' },
                        { text: ic('columns-3', 'Les champs'), link: '/cybersecurite/cyberdefense/splunk/champs' },
                        { text: ic('shuffle', 'Commandes de transformation'), link: '/cybersecurite/cyberdefense/splunk/transformation' },
                        { text: ic('sigma', 'Commandes stats'), link: '/cybersecurite/cyberdefense/splunk/stats' },
                        { text: ic('layout-dashboard', 'Tableaux de bord'), link: '/cybersecurite/cyberdefense/splunk/dashboard' },
                        { text: ic('file-text', 'Les rapports'), link: '/cybersecurite/cyberdefense/splunk/rapports' },
                        { text: ic('table-2', 'Les lookups'), link: '/cybersecurite/cyberdefense/splunk/lookups' },
                        { text: ic('table-properties', 'Pivot'), link: '/cybersecurite/cyberdefense/splunk/pivot' },
                        { text: ic('bell-ring', 'Les alertes'), link: '/cybersecurite/cyberdefense/splunk/alertes' },
                        { text: ic('download', 'Installation'), link: '/cybersecurite/cyberdefense/splunk/install' },
            ]},
          ]},
          { text: ic('venetian-mask', 'Dark Web'),
            collapsed:true,
            items: [
              { text: ic('moon', 'Introduction'), link: '/cybersecurite/darkweb/intro' },
              { text: ic('circle-help', 'Ses intérêts'), link: '/cybersecurite/darkweb/interet' },
              { text: ic('brand-tor', "L'utiliser"), link: '/cybersecurite/darkweb/utiliser' },
            ]},
          { text: ic('bug', 'Développement de malware'),
              collapsed:true,
              items: [
                { text: ic('biohazard', 'Introduction'), link: '/cybersecurite/malware-dev/index' },
              ]},
          { text: ic('microscope', 'Reverse engineering'),
              collapsed:true,
              items: [
                { text: ic('binary', 'Introduction'), link: '/cybersecurite/reverse-engineering/index' },
            ]},
          { text: ic('globe', 'Attaques web'),
            collapsed:true,
            items: [
              { text: ic('lock-open', "Contournement de l'authentification"), link: '/cybersecurite/web/auth-bypass' },
              { text: ic('square-terminal', 'Injection de commandes'), link: '/cybersecurite/web/cmd-inject' },
              { text: ic('folder-search', 'Découverte de contenu'), link: '/cybersecurite/web/discovery' },
              { text: ic('file-input', 'Inclusion de fichiers'), link: '/cybersecurite/web/file-inclusion' },
              { text: ic('file-key', 'Vulnérabilités IDOR'), link: '/cybersecurite/web/idor' },
              { text: ic('server-crash', 'Vulnérabilités SSRF'), link: '/cybersecurite/web/ssrf' },
              { text: ic('code-xml', 'Vulnérabilités XSS'), link: '/cybersecurite/web/xss' },
              { text: ic('database-zap', 'Injection SQL'), link: '/cybersecurite/web/sql-inject' },
              { text: ic('list-tree', 'Énumération des sous-domaines'), link: '/cybersecurite/web/subdomain' },
              { text: ic('webhook', "Attaques d'API"), link: '/cybersecurite/web/api' },
            ]},
          { text: ic('wrench', 'Outils'),
            collapsed:true,
            items: [
              { text: ic('package-open', 'Introduction'), link: '/cybersecurite/outils/intro' },
              { text: ic('scan', 'Nmap'), link: '/cybersecurite/outils/nmap' },
              { text: ic('brand-burpsuite', 'Burp Suite'), link: '/cybersecurite/outils/burpsuite' },
              { text: ic('brand-metasploit', 'Metasploit'), link: '/cybersecurite/outils/metasploit' },
              { text: ic('brand-wireshark', 'Wireshark'), link: '/cybersecurite/outils/wireshark' },
              { text: ic('image-off', 'Stéganographie'), link: '/cybersecurite/outils/stega' },
            ]},
            { text: ic('share-2', 'Réseaux'),
            collapsed:true,
            items: [
              { text: ic('file-up', 'Protocole FTP'), link: '/cybersecurite/reseaux/ftp' },
              { text: ic('hard-drive', 'Protocole NFS'), link: '/cybersecurite/reseaux/nfs' },
              { text: ic('folder-open', 'Protocole SMB'), link: '/cybersecurite/reseaux/smb' },
              { text: ic('mail', 'Protocole SMTP'), link: '/cybersecurite/reseaux/smtp' },
              { text: ic('terminal', 'Protocole Telnet'), link: '/cybersecurite/reseaux/telnet' },
            ]},
        ],
      },
      {
        text: ic('code', 'Programmation'),
        collapsed:true,
        items: [
          { text: ic('brand-javascript', 'Javascript'),
            collapsed:true,
            items: [
              { text: ic('presentation', 'Présentation'), link: '/programmation/javascript/index' },
              { text: ic('play', 'Introduction'), link: '/programmation/javascript/intro' },
              { text: ic('box', 'Variables'), link: '/programmation/javascript/variables' },
              { text: ic('square-function', 'Fonctions'), link: '/programmation/javascript/fonction' },
            ]},
          { text: ic('brand-ruby', 'Ruby'),
            collapsed:true,
            items: [
              { text: ic('gem', 'Présentation'), link: '/programmation/ruby/index' },
              { text: ic('sprout', 'Introduction'), link: '/programmation/ruby/intro' },
            ]},
          { text: ic('brand-rust', 'Rust'),
            collapsed:true,
            items: [
              { text: ic('cog', 'Présentation'), link: '/programmation/rust/index' },
              { text: ic('blocks', 'Fondamentaux'),
                collapsed: true,
                items: [
                  { text: ic('milestone', 'Introduction'), link: '/programmation/rust/fondamentaux/intro'},
                  { text: ic('package', 'Variables'), link: '/programmation/rust/fondamentaux/variables'},
                ]
              }
            ]},
          { text: ic('brand-c', 'Langage C'),
            collapsed:true,
            items: [
              { text: ic('cpu', 'Présentation'), link: '/programmation/c/index' },
              { text: ic('memory-stick', 'Introduction'), link: '/programmation/c/intro' },
            ]},
          { text: ic('brand-python', 'Python'),
            collapsed:true,
            items: [
              { text: ic('feather', 'Présentation'), link: '/programmation/python/index' },
              { text: ic('rocket', 'Introduction'), link: '/programmation/python/intro' },
              { text: ic('parentheses', "Fonctions d'origine"), link: '/programmation/python/fonction-dorigine' },
              { text: ic('triangle-alert', 'Erreurs'), link: '/programmation/python/erreurs' },
              { text: ic('brand-django', 'Django'), link: '/programmation/python/django' },
              { text: ic('toy-brick', 'Outils'),
                collapsed: true,
                items: [
                  { text: ic('git-branch', 'Énumération des sous-domaines'), link: '/programmation/python/outils/enum-sd'},
                  { text: ic('folder-tree', 'Énumération des dossiers'), link: '/programmation/python/outils/enum-dos'},
                  { text: ic('wifi', 'Scanner de réseau'), link: '/programmation/python/outils/scan-net'},
                  { text: ic('door-closed', 'Scanner de ports'), link: '/programmation/python/outils/scan-por'},
                  { text: ic('cloud-download', 'Téléchargeur de fichiers'), link: '/programmation/python/outils/tel-fic'},
                  { text: ic('key-round', 'Cracker de chiffrement'), link: '/programmation/python/outils/crack'},
                  { text: ic('keyboard', 'Enregistreur de frappe'), link: '/programmation/python/outils/listener'},
                  { text: ic('unlock-keyhole', 'SSH Bruteforce'), link: '/programmation/python/outils/ssh-bru'}
                ]
              }
            ]},
        ]
      },
      {
        text: ic('award', 'Certifications'),
        collapsed:true,
        items: [
          { text: ic('graduation-cap', 'Introduction'), link: '/certification/index' },
          { text: ic('medal', 'CompTia Security+ SYO-701'),
              collapsed: true,
              items: [
                { text: ic('signpost', 'Introduction'), link: 'certification/securityplus'},
                { text: ic('puzzle', 'Concepts principaux'),
                  collapsed:true,
                  items: [
                    { text: ic('flame', 'Menaces, attaques & vulnérabilités'), link: 'certification/securityplus/concepts/tav'},
                    { text: ic('drafting-compass', 'Architecture et design'), link: 'certification/securityplus/concepts/arch-des'},
                    { text: ic('smartphone', "Attaques d'application"), link: 'certification/securityplus/concepts/app-att'},
                    { text: ic('ambulance', 'Opérations & réponses aux incidents'), link: 'certification/securityplus/concepts/oir'},
                    { text: ic('gavel', 'Gouvernance, risques & conformité'), link: 'certification/securityplus/concepts/grc'},
                  ]},
                  { text: ic('shield-alert', 'Menaces, attaques & vulnérabiltiés'),
                  collapsed:true,
                  items: [
                    { text: ic('bug-play', 'Malware'), link: 'certification/securityplus/menaces/malware'},
                    { text: ic('brain', "Comprendre l'attaque"), link: 'certification/securityplus/menaces/comprendre'},
                    { text: ic('newspaper', 'Renseignements sur les menaces'), link: 'certification/securityplus/menaces/menaces'},
                    { text: ic('users-round', 'Social Engineering'), link: 'certification/securityplus/menaces/social'},
                    { text: ic('zap', 'Attaques courantes'), link: 'certification/securityplus/menaces/courantes'},
                    { text: ic('shield-x', 'Types de vulnérabilité'), link: 'certification/securityplus/menaces/type-vuln'},
                    { text: ic('scan-search', 'Scan des vulnérabilités'), link: 'certification/securityplus/menaces/scan'},
                    { text: ic('door-open', 'Tests de pénétration'), link: 'certification/securityplus/menaces/penetration'},
                  ]},
                  { text: ic('file-lock-2', 'Programmation sécurisée'),
                  collapsed:true,
                  items: [
                    { text: ic('git-pull-request', 'Méthodologie du développement'), link: 'certification/securityplus/dev/soft-dev'},
                    { text: ic('check-check', 'Développer qualitativement'), link: 'certification/securityplus/dev/soft-quali'},
                    { text: ic('file-warning', "Attaques d'applications"), link: 'certification/securityplus/dev/soft-att'},
                    { text: ic('lock-keyhole', 'Pratiques de développement sécurisées'), link: 'certification/securityplus/dev/sec-dev'},
                  ]},
              ]},
          { text: ic('target', 'CompTia Pentest+'), link: '/certification/pentestplus' },
          { text: ic('skull', 'Red Team Analyst'),
            collapsed:true,
            items: [
              { text: ic('drama', 'Introduction'), link: '/certification/redteam-analyst/index' },
              { text: ic('book-type', 'Définitions'), link: '/certification/redteam-analyst/def' },
          ]},
          { text: ic('eye', 'Analyste SOC'),
            collapsed: true,
            items: [
              { text: ic('book-open-check', 'Introduction'), link: '/certification/analyst-soc'},
              { text: ic('briefcase', "Le métier d'analyste SOC"), link: 'certification/analyst-soc/job/activite'},
              { text: ic('building-2', 'Security Operation Center (SOC)'),
                collapsed:true,
                items: [
                  { text: ic('castle', 'Security Operation Center (SOC)'), link: 'certification/analyst-soc/soc/soc'},
                  { text: ic('database-backup', 'Services intégrés & données collectées'), link: 'certification/analyst-soc/soc/services-donnees'},
                  { text: ic('git-merge', 'Modèle de gouvernance'), link: 'certification/analyst-soc/soc/modele-gouvernance'},
                  { text: ic('bookmark', 'Référentiels ATT&CK / DeTT&CT / Sigma / MISP'), link: 'certification/analyst-soc/soc/referentiels'},
              ]},
              { text: ic('list-checks', 'Sources de données à monitorer'),
                collapsed:true,
                items: [
                  { text: ic('brand-windows', 'Indicateur Windows'), link: 'certification/analyst-soc/monitoring/indicateur-windows'},
                  { text: ic('globe-lock', 'Services web'), link: 'certification/analyst-soc/monitoring/services-web'},
                  { text: ic('shield-ban', 'IDS/IPS'), link: 'certification/analyst-soc/monitoring/ids-ips'},
                  { text: ic('monitor-dot', 'EDR & XDR'), link: 'certification/analyst-soc/monitoring/edr-xdr'},
                  { text: ic('usb', 'USB'), link: 'certification/analyst-soc/monitoring/usb'},
                  { text: ic('route', 'DHCP & DNS'), link: 'certification/analyst-soc/monitoring/dhcp-dns'},
                  { text: ic('shield-half', 'Antivirus & EPP'), link: 'certification/analyst-soc/monitoring/antivirus-epp'},
                  { text: ic('file-lock', 'DLP & Whitelist'), link: 'certification/analyst-soc/monitoring/dlp-whitelist'},
                  { text: ic('mail-warning', 'Email'), link: 'certification/analyst-soc/monitoring/email'},
              ]},
              { text: ic('layers', "Tour d'horizon SIEM"), link: 'certification/analyst-soc/siem/index'},
              { text: ic('brand-elastic', 'Suite Elastic'),
                collapsed:true,
                items: [
                  { text: ic('activity', 'Agents BEATS & Sysmon'), link: 'certification/analyst-soc/elastic/beats-sysmon'},
                  { text: ic('boxes', "Découverte d'ElasticStack"), link: 'certification/analyst-soc/elastic/elasticstack'},
              ]},
              { text: ic('brand-logstash', 'Logstash (ETL)'),
                collapsed:true,
                items: [
                  { text: ic('filter', 'Fonctionnement de Logstash'), link: 'certification/analyst-soc/logstash/fonctionnement-logstash'},
                  { text: ic('regex', 'Filtres Groks & sources externes'), link: 'certification/analyst-soc/logstash/groks-external'},
              ]},
              { text: ic('brand-elasticsearch', 'Elasticsearch'), link: 'certification/analyst-soc/elasticsearch/terminologie'},
              { text: ic('brand-kibana', 'Kibana'),
                collapsed:true,
                items: [
                  { text: ic('file-search', "Recherche d'évènements"), link: 'certification/analyst-soc/kibana/search-event'},
                  { text: ic('chart-line', 'Visualisation des données'), link: 'certification/analyst-soc/kibana/visualisation-donnees'},
              ]},
              { text: ic('file-chart-column', 'Rapports'), link: '/certification/analyst-soc/rapport'},
              { text: ic('monitor-cog', 'Windows Security'),
                collapsed:true,
                items: [
                  { text: ic('folder-cog', 'Convention de nommage des OU-GPO'), link: 'certification/analyst-soc/windows/ou-gpo'},
                  { text: ic('laptop', 'Intégration de machine au domaine'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('bomb', "Scanério d'attaque des annuaires AD"), link: 'certification/analyst-soc/windows/'},
                  { text: ic('layers-2', 'Architecture en tiering'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('trees', 'Red Forest'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('rectangle-ellipsis', 'LAPS'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('thumbs-up', 'Bonnes pratiques'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('lock', 'Rappels chiffrements'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('signature', 'Signatures numériques'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('stamp', 'PKI + Anatomie Certificats'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('credit-card', 'Cartes à puce + certificats racine'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('id-card', 'NPS'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('folder-lock', 'DLP + Gouvernance des données'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('tags', 'Classification + principes DLP'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('calendar-clock', 'Gestion des évènements'), link: 'certification/analyst-soc/windows/'},
                  { text: ic('monitor-play', 'Sysmon'), link: 'certification/analyst-soc/windows/'},
              ]},
            ]
          }
        ]
      },
      {
        text: ic('network', 'Réseaux'),
        collapsed:true,
        items: [
          { text: ic('compass', 'Fondamentaux'), link: '/reseaux/fondamentaux' },
          { text: ic('router', 'LAN'), link: '/reseaux/lan' },
          { text: ic('earth', 'WAN'), link: '/reseaux/wan' },
          { text: ic('signpost-big', 'DNS'), link: '/reseaux/dns' },
          { text: ic('arrow-left-right', 'HTTP'), link: '/reseaux/http' },
          { text: ic('repeat', 'NAT et PAT'), link: '/reseaux/nat' },
          { text: ic('layers-3', 'Le modèle OSI'), link: '/reseaux/osi' },
          { text: ic('cable', 'Le modèle TCP/IP'), link: '/reseaux/tcp' },
          { text: ic('brick-wall', 'Les Firewall'), link: '/reseaux/firewall' },
          { text: ic('panel-top', 'Les sites web'), link: '/reseaux/web' },
          { text: ic('stethoscope', 'Dépannage des réseaux'),
                collapsed:true,
                items: [
                  { text: ic('clipboard-list', 'Introduction'), link: '/reseaux/depannage/intro' },
                  { text: ic('brand-wireshark', 'Wireshark'), link: '/reseaux/depannage/wireshark' },
              ]},
          { text: ic('construction', 'Durcissement des réseaux'),
                collapsed:true,
                items: [
                  { text: ic('ruler', 'Introduction'), link: '/reseaux/durcissement/intro' },
                  { text: ic('waypoints', 'Architecture'), link: '/reseaux/durcissement/architecture' },
                  { text: ic('toggle-right', 'Sécurisation des commutateurs'), link: '/reseaux/durcissement/security-commu' },
                  { text: ic('settings-2', 'Sécurisation des équipements'), link: '/reseaux/durcissement/security-equipements' },
                  { text: ic('radio-tower', 'SNMP et autres fonctions'), link: '/reseaux/durcissement/snmp' },
                  { text: ic('shield-user', 'VPN & certificats'), link: '/reseaux/durcissement/vpn' },
              ]},
          { text: ic('shield-plus', 'Sécurité avancée des réseaux'),
                collapsed:true,
                items: [
                  { text: ic('fingerprint', 'Architecture sécurisée'), link: '/reseaux/advanced/architecture' },
                  { text: ic('flame-kindling', 'Pare-feu'), link: '/reseaux/advanced/pare-feu' },
                  { text: ic('scan-eye', 'NIDS & NIPS'), link: '/reseaux/advanced/nids-nips' },
                  { text: ic('split', 'Proxy / Serveur mandataire'), link: '/reseaux/advanced/proxy' },
                  { text: ic('circle-slash', 'Zero Trust'), link: '/reseaux/advanced/zero-trust' },
              ]},
          { text: ic('key', 'Cryptographie et VPN'),
                collapsed:true,
                items: [
                  { text: ic('book-lock', 'Introduction'), link: '/reseaux/crypto/intro' },
                  { text: ic('square-asterisk', 'Chiffrement symétrique'), link: '/reseaux/crypto/symetrique' },
                  { text: ic('key-square', 'Chiffrement asymétrique'), link: '/reseaux/crypto/asymetrique' },
                  { text: ic('hash', 'Fonction de hachage'), link: '/reseaux/crypto/hash' },
                  { text: ic('file-badge-2', 'Public key infrastructure'), link: '/reseaux/crypto/pki' },
                  { text: ic('link', 'VPN'), link: '/reseaux/crypto/vpn' },
                  { text: ic('spline', 'VPN - IPSEC'), link: '/reseaux/crypto/ipsec' },
              ]},
        ]
      },
      {
        text: ic('server', 'Environnements'),
        collapsed:true,
        items: [
          { text: ic('brand-linux', 'Linux'),
                collapsed:true,
                items: [
                  { text: ic('monitor-check', 'Introduction à Linux'), link: '/environnement/linux/linux' },
                  { text: ic('brand-bash', 'Fondamentaux Linux & Bash'),
                        collapsed:true,
                        items: [
                          { text: ic('history', 'Histoire et principes clés'), link: '/environnement/linux/intro/histoire-principes' },
                          { text: ic('command', 'Commandes de base'), link: '/environnement/linux/intro/commandes-base' },
                          { text: ic('app-window', 'Gestion des programmes'), link: '/environnement/linux/intro/gestion-programmes' },
                          { text: ic('file-code', 'Scripting'), link: '/environnement/linux/intro/scripting' },
                        ]},
                  { text: ic('server-cog', 'Administration des systèmes Linux'),
                        collapsed:true,
                        items: [
                          { text: ic('antenna', 'Maitriser le réseau & les firewalls'), link: '/environnement/linux/admin/reseau' },
                          { text: ic('gauge', 'Gérer les performances'), link: '/environnement/linux/admin/performances' },
                          { text: ic('bandage', 'Troubleshooting'), link: '/environnement/linux/admin/troubleshoot' },
                          { text: ic('hard-drive-download', 'Organiser et partager son stockage'), link: '/environnement/linux/admin/stockage' },
                          { text: ic('ethernet-port', 'Service DHCP'), link: '/environnement/linux/admin/dhcp' },
                          { text: ic('contact', 'Serveur DNS'), link: '/environnement/linux/admin/dns' },
                          { text: ic('users', "Gestion d'annuaire : LDAP & OpenLDAP"), link: '/environnement/linux/admin/annuaire' },
                          { text: ic('save', 'Sauvegarde et restauration'), link: '/environnement/linux/admin/sauvegarde' },
                        ]},
                  { text: ic('brand-ansible', 'Ansible'),
                        collapsed:true,
                        items: [
                          { text: ic('wand-sparkles', 'Introduction'), link: '/environnement/linux/ansible/intro' },
                          { text: ic('component', 'Les modules et commandes ad hoc'), link: '/environnement/linux/ansible/modules' },
                          { text: ic('clipboard-pen', 'Inventaire'), link: '/environnement/linux/ansible/inventaire' },
                          { text: ic('square-play', 'Playbook'), link: '/environnement/linux/ansible/playbook' },
                          { text: ic('user-round-cog', 'Rôles'), link: '/environnement/linux/ansible/roles' },
                          { text: ic('vault', 'Vault'), link: '/environnement/linux/ansible/vault' },
                        ]},
              ]},
          { text: ic('brand-windows', 'Windows Server'),
                collapsed:true,
                items: [
                  { text: ic('panels-top-left', 'Administration des systèmes Windows'),
                        collapsed:true,
                        items: [
                          { text: ic('square-code', 'Introduction'), link: '/environnement/winserv/admin/intro' },
                          { text: ic('folder-git-2', 'Active Directory'), link: '/environnement/winserv/admin/ad' },
                          { text: ic('plug', 'Service DHCP'), link: '/environnement/winserv/admin/dhcp' },
                          { text: ic('cloud', 'Service ISS'), link: '/environnement/winserv/admin/iss' },
                          { text: ic('refresh-cw', 'Windows Update Service'), link: '/environnement/winserv/admin/wu' },
                          { text: ic('archive', 'Stockage des données'), link: '/environnement/winserv/admin/stockage' },
                        ]},
                  { text: ic('copy-plus', 'Haute disponibilité'),
                        collapsed:true,
                        items: [
                          { text: ic('heart-pulse', 'Introduction'), link: '/environnement/winserv/ha/intro' },
                          { text: ic('plug-zap', 'Haute disponibilité du DHCP'), link: '/environnement/winserv/ha/dhcp' },
                          { text: ic('scale-3d', 'Equilibrage de la charge réseau'), link: '/environnement/winserv/ha/equilibrage' },
                          { text: ic('copy', 'Haute disponibilité des données'), link: '/environnement/winserv/ha/stockage' },
                          { text: ic('combine', 'Cluster de basculement'), link: '/environnement/winserv/ha/basculement' },
                        ]},
                  { text: ic('brand-powershell', 'Powershell'),
                        collapsed:true,
                        items: [
                          { text: ic('chevrons-right', 'Introduction'), link: '/environnement/winserv/powershell/intro' },
                          { text: ic('folder-symlink', 'Gestion des fichiers et systèmes de fichiers'), link: '/environnement/winserv/powershell/gestion-fichiers' },
                          { text: ic('user-cog', 'Gestion des utilisateurs, groupes et processus'), link: '/environnement/winserv/powershell/gestion-utilisateurs' },
                          { text: ic('bot', 'Scripting et automatisation'), link: '/environnement/winserv/powershell/scripting' },
                        ]},
              ]},
          { text: ic('brand-cisco', 'Cisco'), link: '/environnement/cisco' },
          { text: ic('brand-vmware', 'Virtualisation'), link: '/environnement/virtualisation' },
        ]
      },
    ],
    // `translations` couvre l'ensemble des libellés du moteur local : le bouton
    // de la barre et le modal. `button.buttonText` a un double emploi — il sert
    // aussi de placeholder au champ du modal et de `title` à son label.
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            displayDetails: 'Afficher les extraits',
            resetButtonTitle: 'Effacer la recherche',
            backButtonTitle: 'Fermer la recherche',
            noResultsText: 'Aucun résultat pour',
            footer: {
              selectText: 'pour ouvrir',
              selectKeyAriaLabel: 'Entrée',
              navigateText: 'pour naviguer',
              navigateUpKeyAriaLabel: 'Flèche haut',
              navigateDownKeyAriaLabel: 'Flèche bas',
              closeText: 'pour fermer',
              closeKeyAriaLabel: 'Échap'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guilyandeurv/rootdev' }
    ],
    docFooter: {
			prev: "Page précédente",
			next: "Page suivante"
		  },
    outline: {
      label: 'Sur cette page'
    },
    footer: {
      message: 'Vous, et uniquement vous, êtes responsable de vos actes.',
      copyright: 'Copyright © 2024 - RootDev.fr par Guilyan - contact@rootdev.fr'
    },
    editLink: {
      pattern: 'https://github.com/guilyandeurv/rootdev/edit/main/content/:path',
      text: 'Editer cette page'
    },
    lastUpdated: {
      text: 'Mis à jour le ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  }
})
