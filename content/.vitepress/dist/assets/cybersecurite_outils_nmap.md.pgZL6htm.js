import{_ as a,E as t,c as n,J as e,m as i,a as r,a5 as p,o}from"./chunks/framework.Xu8UMlTK.js";const l="/assets/nmap.ByeyfvaM.png",v=JSON.parse('{"title":"Nmap","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"cybersecurite/outils/nmap.md","filePath":"cybersecurite/outils/nmap.md","lastUpdated":1711299308000}'),h={name:"cybersecurite/outils/nmap.md"},u=i("h1",{id:"nmap",tabindex:"-1"},[r("Nmap "),i("a",{class:"header-anchor",href:"#nmap","aria-label":'Permalink to "Nmap"'},"​")],-1),d=p('<h2 id="introduction-explications" tabindex="-1">Introduction &amp; explications <a class="header-anchor" href="#introduction-explications" aria-label="Permalink to &quot;Introduction &amp; explications&quot;">​</a></h2><img src="'+l+`" width="100" height="100"><p>Supposons que l&#39;on ait reçu une adresse IP (ou plusieurs adresses IP) sur laquelle effectuer un audit de sécurité. Avant de faire quoi que ce soit d’autre, on doit <strong>avoir une idée du « paysage » qui va être attaquer</strong>. Cela signifie que l&#39;on doit <strong>établir quels services fonctionnent sur les cibles</strong>.</p><p>Par exemple, l’un d’eux exécute peut-être un serveur Web et un autre agit en tant que contrôleur de domaine Windows Active Directory. La première étape dans l’établissement de cette « carte » du paysage est ce qu’on appelle le <strong>scanning des ports</strong>. Lorsqu&#39;un ordinateur exécute un service réseau, il ouvre une construction réseau appelée « port » pour recevoir la connexion. <em><strong>Les ports sont nécessaires pour effectuer plusieurs requêtes réseau</strong></em> ou pour disposer de plusieurs services. Lorsque l&#39;on charge plusieurs pages Web à la fois dans un navigateur Web, le programme doit disposer d&#39;un moyen de déterminer quel onglet charge quelle page Web. Cela se fait en établissant des connexions aux serveurs Web distants en utilisant différents ports sur l&#39;ordinateur local. De même, si on souhaite qu&#39;un serveur puisse exécuter plusieurs services (par exemple, on veut peut-être que le serveur Web exécute à la fois les versions HTTP et HTTPS du site), on a alors besoin d&#39;un moyen de diriger le trafic vers le service approprié. Encore une fois, les ports sont la solution à ce problème. Les connexions réseau sont établies entre deux ports : un port ouvert en écoute sur le serveur et un port sélectionné au hasard sur l&#39;ordinateur.</p><p>Chaque ordinateur dispose d&#39;<em><strong>un total de 65 535 ports</strong></em> disponibles. Cependant, bon nombre d&#39;entre eux sont enregistrés comme ports standard. Par exemple, un Webservice HTTP se trouve presque toujours sur le port 80 du serveur. Un service Web HTTPS peut être trouvé sur le port 443. Windows NETBIOS peut être trouvé sur le port 139 et SMB peut être trouvé sur le port 445.</p><h2 id="options-de-nmap" tabindex="-1">Options de Nmap <a class="header-anchor" href="#options-de-nmap" aria-label="Permalink to &quot;Options de Nmap&quot;">​</a></h2><p>Nmap est accessible en tapant <code>nmap</code> dans la ligne de commande du terminal, suivi de certaines des &quot;options&quot; (arguments de commande qui indiquent à un programme de faire différentes choses).</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">┌─[root@parrot]─[~/Desktop]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──╼</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nmap</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Nmap</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7.60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://nmap.org</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nmap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Scan </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Options] {</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specification}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[...] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Beaucoup d&#39;options...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EXAMPLES:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nmap</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scanme.nmap.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nmap</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.0/16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.0/8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nmap</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -iR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Pn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span></span></code></pre></div><hr><br><div class="info custom-block"><p class="custom-block-title">Sources</p><p>Ce cours s&#39;inspire (et utilise les images) de TryHackMe.com de la chambre &quot;<em>Nmap</em>&quot; : <a href="https://tryhackme.com/room/furthernmap" target="_blank" rel="noreferrer">https://tryhackme.com/room/furthernmap</a></p></div>`,11);function k(c,m,g,F,y,C){const s=t("Badge");return o(),n("div",null,[u,e(s,{type:"tip",text:"Rédigé le 24/03/2024"}),e(s,{type:"warning",text:"En cours de rédaction"}),d])}const B=a(h,[["render",k]]);export{v as __pageData,B as default};