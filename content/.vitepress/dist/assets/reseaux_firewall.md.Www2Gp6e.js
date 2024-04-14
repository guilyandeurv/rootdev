import{_ as a,D as n,c as i,I as r,l as e,a as t,a5 as o,o as l}from"./chunks/framework.D561hJ3q.js";const u="/assets/ip-header.De9L4m6g.png",d="/assets/tcp-header.DmxPAECI.png",p="/assets/iso-firewall.CQrQkaN1.png",I=JSON.parse('{"title":"Les Firewall","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"reseaux/firewall.md","filePath":"reseaux/firewall.md","lastUpdated":1712093331000}'),c={name:"reseaux/firewall.md"},m=e("h1",{id:"les-firewall",tabindex:"-1"},[t("Les Firewall "),e("a",{class:"header-anchor",href:"#les-firewall","aria-label":'Permalink to "Les Firewall"'},"​")],-1),f=o('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Le Firewall a pour objectif de déterminer quel trafic est autorisé à entrer &amp; sortir du réseau. Il peut être configuré de façon à ce que l&#39;entrée ou la sortie du trafic soit autorisée ou refusée selon les facteurs suivants :</p><ul><li>La provenance du trafic <em>(Le pare-feu a-t-il reçu l’ordre d’accepter/refuser le trafic provenant d’un réseau spécifique ?)</em></li><li>La destination du trafic <em>(Le pare-feu a-t-il reçu l’ordre d’accepter/refuser le trafic destiné à un réseau spécifique ?)</em></li><li>Le port attribué <em>(Le pare-feu a-t-il reçu l’ordre d’accepter/refuser le trafic destiné au port 80 uniquement ?)</em></li><li>Le protocole utilisé <em>(a-t-on demandé au pare-feu d’accepter/refuser le trafic UDP, TCP ou les deux ?)</em></li></ul><p>Les pare-feu répondent à ces questions en analysant tous les paquets transitant sur le réseau.</p><p>Les pare-feu sont de toutes formes et de toutes tailles. Qu’il s’agisse de matériel dédié, que l’on trouve souvent dans les grands réseaux comme les entreprises, qui peuvent gérer une grande quantité de données, de routeurs résidentiels ou de logiciels tels que Snort.</p><p>Ci-dessous, les deux grands catégories de pare-feu :</p><table><thead><tr><th>Catégorie</th><th>Description</th></tr></thead><tbody><tr><td><em><strong>Stateful</strong></em></td><td>Ce type de pare-feu utilise l’intégralité des informations d’une connexion. Plutôt que d’inspecter un paquet individuel, ce pare-feu <strong>détermine le comportement d’un périphérique en fonction de l’ensemble de la connexion</strong>. Il consomme beaucoup de ressources par rapport aux pare-feu sans état suite à une prise de décision dynamique.</td></tr><tr><td><em><strong>Stateless</strong></em></td><td>Ce type de pare-feu utilise un ensemble statique de règles pour <strong>déterminer si les paquets individuels sont acceptables ou non</strong>. Un appareil qui envoie un paquet défectueux ne signifie pas nécessairement que l’ensemble de l’appareil est alors bloqué. Ceux-ci consomment beaucoup moins de ressources, cependant ils se montrent stupides : ces pare-feu ne sont efficaces qu&#39;en fonction des règles qui y sont définies. En revanche, ils se montrent efficaces dans les cas d&#39;attaque de déni de service.</td></tr></tbody></table><p>Avant d&#39;entrer dans les détails des pare-feu, il est utile de se souvenir du <strong>contenu d&#39;un paquet IP</strong> et d&#39;<strong>un segment TCP</strong>. La figure suivante montre les champs qu&#39;il faut s&#39;attendre à trouver dans un en-tête IP. Différents types de pare-feu sont capables d&#39;inspecter différents champs de paquets, cependant, le pare-feu le plus basique devrait être capable d&#39;inspecter au moins les champs suivants :</p><ul><li><em><strong>Protocole</strong></em></li><li><em><strong>Adresse source</strong></em></li><li><em><strong>Adresse de destination</strong></em></li></ul><p><img src="'+u+'" alt="Schéma d&#39;en-tête IP"></p><p>Selon le champ du protocole, les données du datagramme IP peuvent constituer l&#39;une des nombreuses options possibles. Trois protocoles courants sont :</p><ol><li><em><strong>TCP</strong></em></li><li><em><strong>UDP</strong></em></li><li><em><strong>ICMP</strong></em></li></ol><p>Dans le cas de <em><strong>TCP</strong></em> ou <em><strong>UDP</strong></em>, le pare-feu doit au moins être capable de vérifier les en-têtes TCP et UDP pour :</p><ul><li><em>Numéro de port source</em></li><li><em>Numéro de port de destination</em></li></ul><p>L&#39;en-tête TCP est illustré dans la figure ci-dessous. On remarque qu&#39;il existe de nombreux champs que le pare-feu peut ou non analyser, cependant, même le pare-feu le plus limité devrait permettre à l&#39;administrateur du pare-feu de contrôler les numéros de port source et de destination autorisés ou bloqués :</p><p><img src="'+d+'" alt="Schéma d&#39;en-tête TCP"></p><h2 id="types-de-firewall" tabindex="-1">Types de Firewall <a class="header-anchor" href="#types-de-firewall" aria-label="Permalink to &quot;Types de Firewall&quot;">​</a></h2><h3 id="les-differents-types-de-firewall" tabindex="-1">Les différents types de Firewall <a class="header-anchor" href="#les-differents-types-de-firewall" aria-label="Permalink to &quot;Les différents types de Firewall&quot;">​</a></h3><ol><li><em><strong>Pare-feu matériel</strong></em> : Un pare-feu d&#39;appliance est un élément matériel distinct par lequel le trafic réseau doit passer. Les exemples incluent <em>Cisco ASA</em> (Adaptive Security Appliance), <em>WatchGuard Firebox</em> et <em>Netgate</em> <em>pfSense Plus</em>.</li><li><em><strong>Pare-feu logiciel</strong></em> : Il s&#39;agit d&#39;un logiciel fourni avec le système d&#39;exploitation, ou ou que l&#39;on peut installer en tant que service supplémentaire. <em>MS Windows</em> dispose d&#39;un pare-feu intégré, <em>Windows Defender Firewall</em>, qui fonctionne avec les autres services du système d&#39;exploitation et applications utilisateur. Un autre exemple est <em>Linux iptables</em> et <em>firewalld</em>.</li></ol><h3 id="les-differents-objectifs-d-utilisation" tabindex="-1">Les différents objectifs d&#39;utilisation <a class="header-anchor" href="#les-differents-objectifs-d-utilisation" aria-label="Permalink to &quot;Les différents objectifs d&#39;utilisation&quot;">​</a></h3><ol><li><em><strong>Pare-feu personnel</strong></em> : Un pare-feu personnel est conçu pour protéger un seul système ou un petit réseau, par exemple un petit nombre d&#39;appareils et de systèmes sur un réseau domestique. De nombreux points d&#39;accès sans fil conçus pour les maisons disposent d&#39;un pare-feu intégré. Un exemple est <em>Bitdefender BOX</em>, ou encore le pare-feu qui fait partie de nombreux points d&#39;accès sans fil et routeurs domestiques de <em>Linksys</em> et <em>Dlink</em>.</li><li><em><strong>Pare-feu commercial</strong></em> : Un pare-feu commercial protège les réseaux de taille moyenne à grande. Par conséquent, on s&#39;attend à une fiabilité et une puissance de traitement plus élevées, en plus de prendre en charge une bande passante réseau plus élevée.</li></ol><p>La classification la plus cruciale serait basée sur les capacités d’inspection des pare-feu. Il convient de réfléchir aux capacités du pare-feu en termes de couches ISO/OSI illustrées dans la figure ci-dessous. Avant de classer les pare-feu en fonction de leurs capacités, il convient de rappeler que les pare-feu se concentrent sur les couches 3 et 4 et, dans une moindre mesure, sur la couche 2. Les pare-feu de nouvelle génération sont également conçus pour couvrir les couches 5, 6 et 7.</p><p>Plus un pare-feu peut inspecter de couches, plus il devient sophistiqué et plus il a besoin de puissance de traitement.</p><p><img src="'+p+'" alt="Schéma d&#39;inspection"></p><p>En fonction des capacités du pare-feu, nous pouvons répertorier les types de pare-feu suivants :</p><ul><li><em><strong>Pare-feu de filtrage de paquets</strong></em> : Le filtrage de paquets est le type de pare-feu le plus basique. Ce type de pare-feu inspecte le protocole, les adresses IP source et de destination ainsi que les ports source et de destination dans le cas des datagrammes TCP et UDP. Il s&#39;agit d&#39;un pare-feu d&#39;inspection sans état (<em>stateless</em>)</li><li><em><strong>Circuit-Level Gateway</strong></em> (<em>trd bandacale</em> : <em>Passerelle au niveau du circuit</em>) : En plus des fonctionnalités offertes par les pare-feu de filtrage de paquets, les <em>Circuit-Level Gateway</em> peuvent fournir des fonctionnalités supplémentaires, telles que la vérification de la négociation à trois voies TCP par rapport aux règles du pare-feu.</li><li><em><strong>Pare-feu d&#39;inspection avec état</strong></em> : Par rapport aux types précédents, ce type de pare-feu offre une couche de protection supplémentaire car il assure le suivi des sessions TCP établies. Il peut détecter et bloquer tout paquet TCP en dehors d&#39;une session TCP établie.</li><li><em><strong>Pare-feu proxy</strong></em> : Un pare-feu proxy est également appelé <strong>pare-feu d&#39;application</strong> (<em>AF</em>) et <strong>pare-feu d&#39;application Web</strong> (<em>WAF</em>). Il est conçu pour se faire passer pour le client d&#39;origine et faire des demandes en son nom. Ce processus permet au pare-feu proxy d&#39;<em>inspecter le contenu de la charge utile</em> du paquet au lieu de se limiter aux en-têtes du paquet. De manière générale, cela est <strong>utilisé pour les applications Web</strong> et ne fonctionne pas pour tous les protocoles.</li><li><em><strong>Pare -feu de nouvelle génération</strong></em> (NGFW) : NGFW offre la protection par pare-feu la plus élevée. Il peut pratiquement surveiller toutes les couches du réseau, de la couche OSI 2 à la couche OSI 7. Il connaît et contrôle les applications. Les exemples incluent la série <em>Juniper SRX</em> et <em>Cisco Firepower</em>.</li><li><em><strong>Cloud Firewall</strong></em> ou <em><strong>Firewall as a Service</strong></em> (FWaaS) : FWaaS remplace un pare-feu matériel dans un environnement cloud. Ses fonctionnalités peuvent être comparables à celles de NGFW, cependant, il bénéficie de l’évolutivité de l’architecture cloud. Un exemple est <em>Cloudflare Magic Firewall</em>, qui est un pare-feu au niveau du réseau. Un autre exemple est <em>Juniper vSRX</em> : il possède les mêmes fonctionnalités qu&#39;un NGFW mais est déployé dans le cloud. Il convient également de mentionner <em>AWS WAF</em> pour la protection des applications Web et <em>AWS Shield</em> pour la protection DDoS.</li></ul><hr><br>',28),g={class:"info custom-block"},h=e("p",{class:"custom-block-title"},"Sources",-1),q=e("p",null,[t(`Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "`),e("em",null,"Extending your network"),t('" & "'),e("em",null,"Redteam Firewalls"),t('" :')],-1),b=e("a",{href:"https://tryhackme.com/r/room/extendingyournetwork",target:"_blank",rel:"noreferrer"},"https://tryhackme.com/r/room/extendingyournetwork",-1),v=e("a",{href:"https://tryhackme.com/r/room/redteamfirewalls",target:"_blank",rel:"noreferrer"},"https://tryhackme.com/r/room/redteamfirewalls",-1);function x(P,y,_,w,C,S){const s=n("Badge");return l(),i("div",null,[m,r(s,{type:"tip",text:"Rédigé le 02/04/2024"}),r(s,{type:"warning",text:"En cours de rédaction"}),f,e("div",g,[h,q,e("p",null,[b,t(),r(s,{type:"danger",text:"Payant"})]),e("p",null,[v,t(),r(s,{type:"danger",text:"Payant"})])])])}const F=a(c,[["render",x]]);export{I as __pageData,F as default};