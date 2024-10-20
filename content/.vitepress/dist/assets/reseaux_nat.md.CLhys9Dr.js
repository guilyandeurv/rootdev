import{_ as n,c as r,j as s,a as i,G as a,an as o,B as u,o as d}from"./chunks/framework.ys1W0Hiz.js";const h=JSON.parse('{"title":"Le NAT et le PAT","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"reseaux/nat.md","filePath":"reseaux/nat.md","lastUpdated":1729429463000}'),l={name:"reseaux/nat.md"};function p(c,e,m,P,q,A){const t=u("Badge");return d(),r("div",null,[e[0]||(e[0]=s("h1",{id:"le-nat-et-le-pat",tabindex:"-1"},[i("Le NAT et le PAT "),s("a",{class:"header-anchor",href:"#le-nat-et-le-pat","aria-label":'Permalink to "Le NAT et le PAT"'},"​")],-1)),a(t,{type:"tip",text:"Rédigé le 17/03/2024"}),a(t,{type:"warning",text:"En cours de rédaction"}),e[1]||(e[1]=o('<h2 id="introduction-au-nat-et-au-pat" tabindex="-1">Introduction au NAT et au PAT <a class="header-anchor" href="#introduction-au-nat-et-au-pat" aria-label="Permalink to &quot;Introduction au NAT et au PAT&quot;">​</a></h2><p>Le NAT (Network Address Translation) et le PAT (Port Address Translation) sont des techniques fondamentales utilisées dans les réseaux informatiques pour permettre à plusieurs dispositifs de partager une seule adresse IP publique. Ces méthodes sont essentielles pour gérer la pénurie d&#39;adresses IPv4 et pour sécuriser les réseaux en masquant les adresses IP internes.</p><h2 id="network-address-translation-nat" tabindex="-1">Network Address Translation (NAT) <a class="header-anchor" href="#network-address-translation-nat" aria-label="Permalink to &quot;Network Address Translation (NAT)&quot;">​</a></h2><p>Le NAT est une méthode de traduction des adresses IP dans les paquets de données lorsqu&#39;ils passent d&#39;un réseau local (LAN) à un réseau étendu (WAN) tel qu&#39;Internet. Le NAT modifie les en-têtes IP des paquets en remplaçant l&#39;adresse IP source par une adresse IP publique unique et en conservant l&#39;adresse IP de destination. Cela permet à plusieurs dispositifs sur un réseau local d&#39;accéder à Internet en utilisant une seule adresse IP publique.</p><h3 id="types-de-nat" tabindex="-1">Types de NAT <a class="header-anchor" href="#types-de-nat" aria-label="Permalink to &quot;Types de NAT&quot;">​</a></h3><ol><li><strong>NAT statique</strong> : associe une adresse IP privée à une adresse IP publique de manière permanente.</li><li><strong>NAT dynamique</strong> : attribue dynamiquement une adresse IP publique à un dispositif lorsque celui-ci établit une connexion sortante.</li><li><strong>NAT de surcharge (ou NAT PAT)</strong> : également connu sous le nom de Port Address Translation (PAT), cette méthode utilise une seule adresse IP publique avec différents numéros de port pour traduire les adresses IP privées.</li></ol><h2 id="port-address-translation-pat" tabindex="-1">Port Address Translation (PAT) <a class="header-anchor" href="#port-address-translation-pat" aria-label="Permalink to &quot;Port Address Translation (PAT)&quot;">​</a></h2><p>Le PAT est une extension du NAT qui utilise des numéros de port pour différencier les connexions sortantes des multiples dispositifs partageant une seule adresse IP publique. Chaque paquet sortant est modifié pour inclure à la fois l&#39;adresse IP privée et un numéro de port unique qui permet de déterminer à quel dispositif il doit être renvoyé à l&#39;intérieur du réseau local.</p><h3 id="fonctionnement-du-pat" tabindex="-1">Fonctionnement du PAT <a class="header-anchor" href="#fonctionnement-du-pat" aria-label="Permalink to &quot;Fonctionnement du PAT&quot;">​</a></h3><p>Lorsqu&#39;un paquet sortant atteint le routeur avec une adresse IP privée, le routeur modifie l&#39;adresse source en remplaçant l&#39;adresse IP privée par l&#39;adresse IP publique du routeur et en assignant un numéro de port unique. Lorsque la réponse est reçue du périphérique distant, le routeur utilise le numéro de port pour identifier le dispositif interne auquel renvoyer la réponse.</p><h2 id="avantages-du-nat-et-du-pat" tabindex="-1">Avantages du NAT et du PAT <a class="header-anchor" href="#avantages-du-nat-et-du-pat" aria-label="Permalink to &quot;Avantages du NAT et du PAT&quot;">​</a></h2><ul><li><strong>Conservation des adresses IPv4</strong> : Permet à de nombreux dispositifs d&#39;accéder à Internet en utilisant une seule adresse IP publique.</li><li><strong>Sécurité</strong> : Masque les adresses IP internes, renforçant ainsi la sécurité du réseau.</li><li><strong>Gestion des connexions</strong> : Permet de gérer efficacement les connexions entrantes et sortantes en associant les adresses IP et les numéros de port.</li></ul>',12))])}const f=n(l,[["render",p]]);export{h as __pageData,f as default};
