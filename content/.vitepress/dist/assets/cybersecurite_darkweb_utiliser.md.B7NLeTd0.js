import{_ as a,c as t,j as s,a as n,G as r,an as l,B as o,o as d}from"./chunks/framework.ys1W0Hiz.js";const b=JSON.parse('{"title":"Accéder au Dark Web","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"cybersecurite/darkweb/utiliser.md","filePath":"cybersecurite/darkweb/utiliser.md","lastUpdated":1729429463000}'),p={name:"cybersecurite/darkweb/utiliser.md"};function c(u,e,h,k,F,g){const i=o("Badge");return d(),t("div",null,[e[0]||(e[0]=s("h1",{id:"acceder-au-dark-web",tabindex:"-1"},[n("Accéder au Dark Web "),s("a",{class:"header-anchor",href:"#acceder-au-dark-web","aria-label":'Permalink to "Accéder au Dark Web"'},"​")],-1)),r(i,{type:"tip",text:"Rédigé le 20/04/2024"}),e[1]||(e[1]=l(`<h2 id="tor" tabindex="-1">TOR <a class="header-anchor" href="#tor" aria-label="Permalink to &quot;TOR&quot;">​</a></h2><p>Le développement de Tor représente une étape cruciale dans la protection de la vie privée en ligne. Fondé par des chercheurs du Laboratoire de recherche navale des États-Unis, David Goldschlag, Mike Reed et Paul Syverson, Tor a été conçu pour répondre à l&#39;absence de sécurité sur Internet dans les années 1990 et pour contrer la facilité avec laquelle la surveillance en ligne pouvait être effectuée.</p><p>Le concept de base du <strong>routage en oignon</strong> utilisé par Tor est simple mais puissant : plutôt que de suivre un chemin direct de A à B, le trafic Internet <strong>passe par plusieurs nœuds intermédiaires</strong> (C, J, K, etc.) avant d&#39;atteindre sa destination finale, chaque étape du trajet étant chiffrée. Cela rend extrêmement difficile pour le destinataire (B) de remonter jusqu&#39;à l&#39;origine de la demande (A), offrant ainsi un niveau élevé d&#39;anonymat et de confidentialité aux utilisateurs.</p><p>Pour que Tor fonctionne, il a besoin d&#39;un réseau décentralisé composé de nombreux serveurs indépendants appelés nœuds, qui coopèrent pour transmettre le trafic de manière sécurisée. En octobre 2002, le code de Tor a été publié en tant que logiciel libre et open source, permettant ainsi à de nouveaux nœuds de rejoindre le réseau. En un an, 13 nœuds Tor étaient déjà actifs.</p><p>L&#39;Electronic Frontier Foundation (EFF), une organisation à but non lucratif dédiée à la défense des libertés civiles dans le monde numérique, a reconnu l&#39;importance du réseau Tor dès 2004 et a commencé à financer les travaux de Roger Dingledine et Nick Mathewson. En 2006, ils ont créé The Tor Project, Inc., une organisation à but non lucratif, pour recevoir des financements et poursuivre le développement et la maintenance de Tor.</p><h2 id="disclaimer" tabindex="-1">Disclaimer <a class="header-anchor" href="#disclaimer" aria-label="Permalink to &quot;Disclaimer&quot;">​</a></h2><p>Il est crucial de souligner que l&#39;<em><strong>anonymat sur le Dark Web n&#39;est pas absolu</strong></em>, car les forces de l&#39;ordre surveillent activement ses activités et s&#39;efforcent d&#39;identifier les utilisateurs impliqués dans des activités illicites. Les risques associés à la navigation sur le Dark Web sont bien réels, allant des opérations illégales aux contenus explicites.</p><p>Pour garantir sa sécurité, il est fortement conseillé de prendre certaines mesures préventives avant de tenter d&#39;accéder à TOR :</p><ol><li>Être conscient que du contenu offensant ou explicite peut être rencontré et se préparer mentalement à cette éventualité.</li><li>Reconnaître le risque accru de rencontrer des criminels ou des pirates informatiques cherchant à voler des données ou à compromettre des systèmes. À cet égard, il est crucial de maintenir à jour tous les logiciels, de désactiver les applications vulnérables et de ne pas cliquer sur des liens suspects.</li><li>Assurer la sécurité de son système d&#39;exploitation en installant les mises à jour et correctifs de sécurité disponibles.</li><li>Maintenir un logiciel antivirus à jour et fonctionnel pour protéger son appareil contre les logiciels malveillants.</li><li>L&#39;utilisation d&#39;un VPN avant de naviguer sur le Dark Web est fortement recommandée pour renforcer la confidentialité et la sécurité des données personnelles.</li></ol><p>Il est crucial de reconnaître que naviguer sur le Dark Web comporte des risques considérables, tant sur le plan légal que sur le plan de la sécurité informatique. Suivre des protocoles stricts de sécurité, tels que ceux énumérés, est essentiel pour minimiser ces risques.</p><h2 id="acceder-au-dark-web-1" tabindex="-1">Accéder au Dark Web <a class="header-anchor" href="#acceder-au-dark-web-1" aria-label="Permalink to &quot;Accéder au Dark Web&quot;">​</a></h2><p>Depuis Debian, on peut installer Tor avec la commande <code>torbrowser-launcher </code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">┌──(rootdev㉿kali</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)-[~/]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> torbrowser-launcher</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;torbrowser-launcher&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> found,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> but</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> torbrowser-launcher</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Do</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> want</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (N/y)y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> torbrowser-launcher</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Reading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lists...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Done</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Building</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependency</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tree...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Done</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Reading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Done</span></span></code></pre></div><p>Le site <a href="https://darknet-tor.com/meilleurs-sites-onion-deepweb.php" target="_blank" rel="noreferrer">darknet-tor</a> liste plusieurs liens du Dark Web.</p><hr><br><div class="info custom-block"><p class="custom-block-title">Sources</p><p>Ce cours s&#39;inspire de Security Blue Team du cours &quot;<em>Introduction to Dark Web Operations</em>&quot; : <a href="https://elearning.securityblue.team/home/courses/free-courses/introduction-to-dark-web-operations#description" target="_blank" rel="noreferrer">https://elearning.securityblue.team/home/courses/free-courses/introduction-to-dark-web-operations#description</a></p></div>`,17))])}const y=a(p,[["render",c]]);export{b as __pageData,y as default};