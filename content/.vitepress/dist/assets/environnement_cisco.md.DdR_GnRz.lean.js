import{_ as e,c as t,j as a,a as l,G as n,an as h,B as p,o as r}from"./chunks/framework.ys1W0Hiz.js";const C=JSON.parse(`{"title":"L'environnement Cisco","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"environnement/cisco.md","filePath":"environnement/cisco.md","lastUpdated":1729429463000}`),k={name:"environnement/cisco.md"};function o(d,s,c,g,u,F){const i=p("Badge");return r(),t("div",null,[s[0]||(s[0]=a("h1",{id:"l-environnement-cisco",tabindex:"-1"},[l("L'environnement Cisco "),a("a",{class:"header-anchor",href:"#l-environnement-cisco","aria-label":`Permalink to "L'environnement Cisco"`},"​")],-1)),n(i,{type:"tip",text:"Rédigé le 17/03/2024"}),n(i,{type:"warning",text:"En cours de rédaction"}),s[1]||(s[1]=h(`<p>Avant de commencer la configuration, il faut avoir un accès console à l&#39;appareil Cisco. On peut utiliser un câble console et un programme de terminal tel que <em>PuTTY</em> ou <em>Tera Term</em> pour se connecter à l&#39;appareil. Une fois connecté, il faut s&#39;identifier avec un nom d&#39;utilisateur et un mot de passe si la configuration de sécurité l&#39;exige.</p><h2 id="commandes-de-base" tabindex="-1">Commandes de base <a class="header-anchor" href="#commandes-de-base" aria-label="Permalink to &quot;Commandes de base&quot;">​</a></h2><h3 id="acces-au-mode-configuration" tabindex="-1">Accès au mode configuration : <a class="header-anchor" href="#acces-au-mode-configuration" aria-label="Permalink to &quot;Accès au mode configuration :&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">enable</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # en fonctionne également</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminal</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # conf term fonctionne également</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch(config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)# </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mode configuration activé</span></span></code></pre></div><h3 id="visualisation-des-configuration" tabindex="-1">Visualisation des configuration : <a class="header-anchor" href="#visualisation-des-configuration" aria-label="Permalink to &quot;Visualisation des configuration :&quot;">​</a></h3><ol><li>La configuration en cours d&#39;exécution :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running-config</span></span></code></pre></div><ol start="2"><li>La configuration par défaut (chargée au démarrage) :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> startup-config</span></span></code></pre></div><ol start="3"><li>La configuration des interfaces :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interfaces</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><ol start="4"><li>La configuration des VLAN :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span></span></code></pre></div><ol start="5"><li>La table ARP :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arp</span></span></code></pre></div><h3 id="configuration-de-base" tabindex="-1">Configuration de base : <a class="header-anchor" href="#configuration-de-base" aria-label="Permalink to &quot;Configuration de base :&quot;">​</a></h3><ol><li>Attribuer un nom d&#39;hôte :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [nom]</span></span></code></pre></div><ol start="2"><li>Spécifier un mot de passe pour le mode administrateur :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mdp] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Visible en clair dans la visualisation de la configuration</span></span></code></pre></div><ol start="3"><li>Chiffrer le mot de passe administrateur :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> secret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mdp] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Hash visible dans la visualisation de la configuration</span></span></code></pre></div><ol start="4"><li>Sauvegarder la configuration en cours :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running-config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> startup-config</span></span></code></pre></div><ol start="5"><li>Exporter la configuration en TFTP :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running-config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ou remplacer running-config par startup-config : it works too</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 10.10.0.2 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Adresse IP du serveur TFTP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Destination</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [nom_du_fichier] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nom à donner au fichier</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Writing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running-config....!!</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Enregistrement en cours</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[OK - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bytes]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1120</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bytes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copied</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.004</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> secs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (560 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bytes/sec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ol start="6"><li>Importer la configuration en TFTP :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tftp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running-config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # ou startup-config : au choix</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 10.10.0.2 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Adresse IP du serveur TFTP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [nom_du_fichier]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Destination</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [running-config]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> running-config </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ou startup-config</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Accessing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tftp://10.10.0.2:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[OK - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bytes]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1120</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bytes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copied</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.004</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> secs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (560 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bytes/sec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ol start="7"><li>Indiquer l&#39;emplacement du switch :</li></ol><p>Il n’y a aucune commande précise permettant à Cisco IOS de définir l’emplacement. Néanmoins, on peut utiliser la commande banner motd global configuration pour définir les informations d&#39;emplacement.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> banner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> motd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [emplacement]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#exemple : banner motd c Toulouse site de Jean-Jaurès, Occitanie, FR</span></span></code></pre></div><ol start="8"><li>Configurer la date &amp; l&#39;heure :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 16:58:30</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2024</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # les mois sont en anglais</span></span></code></pre></div><h2 id="configuration-d-un-switch" tabindex="-1">Configuration d&#39;un switch <a class="header-anchor" href="#configuration-d-un-switch" aria-label="Permalink to &quot;Configuration d&#39;un switch&quot;">​</a></h2><h3 id="configuration-d-un-vlan" tabindex="-1">Configuration d&#39;un VLAN : <a class="header-anchor" href="#configuration-d-un-vlan" aria-label="Permalink to &quot;Configuration d&#39;un VLAN :&quot;">​</a></h3><p>On n&#39;affecte pas une adresse IP à un switch, mais à un VLAN : celui-ci sera donc considéré comme une interface.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Création du VLAN 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # accès au vlan 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255.255.255.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # indique l&#39;adresse IP du VLAN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [nom] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># défini le nom du VLAN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shutdown</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # défini l&#39;interface comme n&#39;étant pas désactivée</span></span></code></pre></div><h3 id="configuration-d-un-port" tabindex="-1">Configuration d&#39;un port : <a class="header-anchor" href="#configuration-d-un-port" aria-label="Permalink to &quot;Configuration d&#39;un port :&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastEthernet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0/1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # le 1 étant le n° du port que l&#39;on souhaite configurer </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> swhicthport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> access</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # défini que le port n&#39;appartiendra qu&#39;à 1 seul VLAN (pas de tag)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switchport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> access</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vlan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # affectation du port au VLAN 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shutdown</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # défini le port comme n&#39;étant pas désactivé</span></span></code></pre></div><h3 id="configuration-d-un-port-tague-appartenant-donc-a-plusieurs-vlans" tabindex="-1">Configuration d&#39;un port tagué (appartenant donc à plusieurs VLANs) : <a class="header-anchor" href="#configuration-d-un-port-tague-appartenant-donc-a-plusieurs-vlans" aria-label="Permalink to &quot;Configuration d&#39;un port tagué (appartenant donc à plusieurs VLANs) :&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastEthernet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0/48</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switchport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> trunk</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # défini le port comme appartenant à plusieurs VLANs (port trunk)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Inutile sur les switchs Cisco 2950 car ils ne supportent que ce type d&#39;encapsulation :</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switchport</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> trunk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> encapsulation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dot1q</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # les trames seront taguées suivant la norme 802.1q. Le port concerné véhiculera donc les trames de n&#39;importe quel VLAN.</span></span></code></pre></div><h2 id="configuration-d-un-routeur" tabindex="-1">Configuration d&#39;un routeur <a class="header-anchor" href="#configuration-d-un-routeur" aria-label="Permalink to &quot;Configuration d&#39;un routeur&quot;">​</a></h2><h3 id="configurer-le-nom-de-domaine" tabindex="-1">Configurer le nom de domaine : <a class="header-anchor" href="#configurer-le-nom-de-domaine" aria-label="Permalink to &quot;Configurer le nom de domaine :&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> domain-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [domaine] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exemple : ip domain-name rootdev.fr</span></span></code></pre></div><h3 id="configurer-une-interface" tabindex="-1">Configurer une interface : <a class="header-anchor" href="#configurer-une-interface" aria-label="Permalink to &quot;Configurer une interface :&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastEthernet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0/0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # sélectionne la première interface, fastEthernet 0/1 pour la 2nd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.100.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255.255.255.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Configuration de l&#39;adresse IP de l&#39;interface</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.100.254</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Configuration de la passerelle</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shutdown</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Définie l&#39;interface comme étant active</span></span></code></pre></div><h3 id="configuration-du-routage-statique" tabindex="-1">Configuration du routage statique : <a class="header-anchor" href="#configuration-du-routage-statique" aria-label="Permalink to &quot;Configuration du routage statique :&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255.255.255.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s0/0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.0.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # le réseau 192.168.0.0 est connecté depuis le port Serial au réseau 192.168.1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switch#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255.255.255.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s0/1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # lé réseau 192.168.1.0 est connecté depuis le port Serial au réseau 192.168.0.0</span></span></code></pre></div><h2 id="terminologie" tabindex="-1">Terminologie <a class="header-anchor" href="#terminologie" aria-label="Permalink to &quot;Terminologie&quot;">​</a></h2><ol><li><strong>Spinning Tree</strong> : Le but de cette configuration est, dans le cas qu’un câble soit déconnecté pour n‘importe quelle raison, que la liaison entre les switchs ne soient pas coupées et que les informations circulent par un autre chemin. Le principe de ce protocole est de vérifier qu’aucune boucle n’est créée dans le réseau, car elles sont fatales pour celui-ci.</li></ol><div class="danger custom-block"><p class="custom-block-title">Risque fatal pour le réseau ⚠️</p><p>Mal configuré, il y a un <strong>risque de “tempête de broadcast”</strong>, ce qui signifie qu’une trame de type ARP tourne en boucle entre les switchs et les sature. Ce qui empêche le bon fonctionnement du réseau, car les switchs seront occupés à s’occuper de cette trame qui sera envoyée en boucle.</p><p>Il faut donc paramétrer le Spinning Tree avant de procéder à la connexion des liens.</p></div><ol start="2"><li><strong>Port trucking</strong> : Le but de cette configuration est de rentre deux ports comme un : le débit sera donc doublé entre les deux switchs.</li></ol><div class="danger custom-block"><p class="custom-block-title">Risque fatal pour le réseau ⚠️</p><p>Mal configuré, il y a un <strong>risque de “tempête de broadcast”</strong>, ce qui signifie qu’une trame de type ARP tourne en boucle entre les switchs et les sature. Ce qui empêche le bon fonctionnement du réseau, car les switchs seront occupés à s’occuper de cette trame qui sera envoyée en boucle.</p><p>Il faut donc paramétrer le Port Trucking avant de procéder à la connexion des liens.</p></div><ol start="3"><li><strong>Port Mirroring</strong> : Le but de cette configuration est de visualiser le traffic en direction et en provenance d&#39;Internet. Cette fonctionnalité va copier les paquets transitant par le switch vers un port de destination. L&#39;intérêt ici serait de connecter un poste équipé de <em>Wireshark</em> par exemple pour visualiser celui-ci.</li></ol><hr><br><div class="info custom-block"><p class="custom-block-title">Sources</p><p>Ce cours s&#39;inspire des documentations Cisco suivantes :</p><p>Switch : <a href="https://www.cisco.com/c/fr_ca/support/docs/switches/catalyst-6000-series-switches/10581-6.html" target="_blank" rel="noreferrer">https://www.cisco.com/c/fr_ca/support/docs/switches/catalyst-6000-series-switches/10581-6.html</a></p><p>Routeur : <a href="https://www.cisco.com/c/fr_ca/support/docs/cloud-systems-management/configuration-professional/111999-basic-router-config-ccp-00.html" target="_blank" rel="noreferrer">https://www.cisco.com/c/fr_ca/support/docs/cloud-systems-management/configuration-professional/111999-basic-router-config-ccp-00.html</a></p></div>`,57))])}const m=e(k,[["render",o]]);export{C as __pageData,m as default};
