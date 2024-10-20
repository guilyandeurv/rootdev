import{_ as n,c as t,j as i,a as l,G as a,an as r,B as o,o as p}from"./chunks/framework.ys1W0Hiz.js";const g=JSON.parse(`{"title":"Contournement de l'authentification","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"cybersecurite/web/auth-bypass.md","filePath":"cybersecurite/web/auth-bypass.md","lastUpdated":1729429463000}`),d={name:"cybersecurite/web/auth-bypass.md"};function u(h,s,c,_,k,m){const e=o("Badge");return p(),t("div",null,[s[0]||(s[0]=i("h1",{id:"contournement-de-l-authentification",tabindex:"-1"},[l("Contournement de l'authentification "),i("a",{class:"header-anchor",href:"#contournement-de-l-authentification","aria-label":`Permalink to "Contournement de l'authentification"`},"​")],-1)),a(e,{type:"tip",text:"Rédigé le 27/06/2024"}),a(e,{type:"warning",text:"En cours de rédaction"}),s[1]||(s[1]=r(`<p>Ces failles, connues pour leur criticité, permettent le contournement de l&#39;authentification du client. Cela peut amener à des fuites de données personnelles, et donc leur correction est primordial.</p><h2 id="enumeration-du-nom-d-utilisateur" tabindex="-1">Énumération du nom d&#39;utilisateur <a class="header-anchor" href="#enumeration-du-nom-d-utilisateur" aria-label="Permalink to &quot;Énumération du nom d&#39;utilisateur&quot;">​</a></h2><p>À moins que l&#39;on ait déjà un nom d&#39;utilisateur auquel on souhaite tenter de se connecter, un exercice simple est de créer une liste des noms d&#39;utilisateur valides. Pour cela, il suffit de se rendre sur la page d&#39;inscription du site ciblé, et de vérifier si celui-ci indique lorsque l&#39;on entre un nom d&#39;utilisateur déjà existant, si oui, on note les noms d&#39;utilisateur trouvés.</p><h3 id="utilisation-de-l-outil-ffuf" tabindex="-1">Utilisation de l&#39;outil <em><strong>ffuf</strong></em> <a class="header-anchor" href="#utilisation-de-l-outil-ffuf" aria-label="Permalink to &quot;Utilisation de l&#39;outil ***ffuf***&quot;">​</a></h3><p>On peut utiliser l&#39;existence de ce message d&#39;erreur pour produire une liste de noms d&#39;utilisateur valides déjà inscrits sur le système en utilisant l&#39;outil ffuf. L&#39;outil ffuf utilise une liste de noms d&#39;utilisateur couramment utilisés pour vérifier les correspondances.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">┌─[root@dev]─[~/]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──╼</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffuf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/wordlists/SecLists/Usernames/Names/names.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;username=FUZZ&amp;email=x&amp;password=x&amp;cpassword=x&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Content-Type: application/x-www-form-urlencoded&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://rootdev.fr/signup</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -mr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Le nom d&#39;utilisateur existe déjà.&quot;</span></span></code></pre></div><p>Dans l&#39;exemple ci-dessus, on retrouve les arguments suivants :</p><ul><li><em><strong>-w</strong></em> = emplacement de la wordlist, ici <code>/usr/share/wordlists/SecLists/Usernames/Names/names.txt</code></li><li><em><strong>-X</strong></em> = précise la méthode de requête, <code>GET</code> par défaut, <code>POST</code> dans cet exemple</li><li><em><strong>-d</strong></em> = spécifie les données que l&#39;on va envoyer, correspond au formulaire d&#39;inscription : <ul><li>username : FUZZ correspond (pour ffuf) à l&#39;argument où l&#39;on va utiliser le contenu de notre liste</li><li>email : correspond à l&#39;input de l&#39;adresse mail, rien de sorcier, ici x car on ne le remplit qu&#39;aléatoirement</li><li>password &amp; cpassword : correspondent aux input du mot de passe et de sa confirmation</li></ul></li><li><em><strong>-H</strong></em> = Ajoute des en-têtes supplémentaires à la demande, ici on utilise <code>Content-Type</code> pour que le serveur Web sache que l&#39;on envoie des données de formulaire</li><li><em><strong>-u</strong></em> = Indique l&#39;URL ciblé</li><li><em><strong>-mr</strong></em> = Le texte exact affiché sur la page lorsque l&#39;erreur apparaît</li></ul><p>Après avoir executé la commande, on entre les noms d&#39;utilisateurs trouvés dans un fichier texte.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        /</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;___\\  /&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">___\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           /&#39;___\\       </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       /\\ \\__/ /\\ \\__/  __  __  /\\ \\__/       </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       \\ \\ ,__\\\\ \\ ,__\\/\\ \\/\\ \\ \\ \\ ,__\\      </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \\ \\ \\_/ \\ \\ \\_/\\ \\ \\_\\ \\ \\ \\ \\_/      </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         \\ \\_\\   \\ \\_\\  \\ \\____/  \\ \\_\\       </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          \\/_/    \\/_/   \\/___/    \\/_/       </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       v2.1.0-dev</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Method           : POST</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: URL              : http://rootdev.fr/signup</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Wordlist         : FUZZ: /usr/share/wordlists/seclists/Usernames/Names/names.txt</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Header           : Content-Type: application/x-www-form-urlencoded</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Data             : username=FUZZ&amp;email=x&amp;password=x&amp;cpassword=x</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Follow redirects : false</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Calibration      : false</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Timeout          : 10</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Threads          : 40</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :: Matcher          : Regexp: username already exists</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">________________________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">admin                   [Status: 200, Size: 3720, Words: 992, Lines: 77, Duration: 285ms]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">robert                  [Status: 200, Size: 3720, Words: 992, Lines: 77, Duration: 125ms]</span></span></code></pre></div><h2 id="bruteforce" tabindex="-1">Bruteforce <a class="header-anchor" href="#bruteforce" aria-label="Permalink to &quot;Bruteforce&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">Sources</p><p>Ce cours s&#39;inspire (et utilise les images) de TryHackMe.com de la chambre &quot;<em>Introduction to Web Hacking</em>&quot; : <a href="https://tryhackme.com/module/intro-to-web-hacking" target="_blank" rel="noreferrer">https://tryhackme.com/module/intro-to-web-hacking</a></p></div>`,12))])}const f=n(d,[["render",u]]);export{g as __pageData,f as default};
