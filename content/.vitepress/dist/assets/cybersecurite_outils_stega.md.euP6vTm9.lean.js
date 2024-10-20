import{_ as t,c as n,j as s,a as r,G as a,an as o,B as l,o as h}from"./chunks/framework.ys1W0Hiz.js";const f=JSON.parse('{"title":"Stéganographie","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"cybersecurite/outils/stega.md","filePath":"cybersecurite/outils/stega.md","lastUpdated":1729429463000}'),d={name:"cybersecurite/outils/stega.md"};function p(c,e,g,k,u,m){const i=l("Badge");return h(),n("div",null,[e[0]||(e[0]=s("h1",{id:"steganographie",tabindex:"-1"},[r("Stéganographie "),s("a",{class:"header-anchor",href:"#steganographie","aria-label":'Permalink to "Stéganographie"'},"​")],-1)),a(i,{type:"tip",text:"Rédigé le 13/10/2024"}),a(i,{type:"warning",text:"En cours de rédaction"}),e[1]||(e[1]=o(`<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>La stéganographie est un procédé de dissimulation d&#39;un message au sein de données. Grossomodo : cacher un fichier texte par exemple, dans une image, un fichier audio, etc. Pour cela, on utilise des logiciels de stéganographie tel que steghide. Cependant, ce procédé est populaire, et donc des outils pour extraire les données sont disponibles, d&#39;où l&#39;importance de chiffrer les données.</p><h2 id="fonctionnalites-de-steghide" tabindex="-1">Fonctionnalités de <em>Steghide</em> <a class="header-anchor" href="#fonctionnalites-de-steghide" aria-label="Permalink to &quot;Fonctionnalités de *Steghide*&quot;">​</a></h2><ul><li><strong>Compression des données embarquées</strong> ** : Steghide permet de compresser les données avant de les cacher, ce qui peut réduire l&#39;espace de stockage nécessaire. On peut spécifier le niveau de compression entre 1 (meilleure vitesse) et 9 (meilleure compression).</li><li><strong>Chiffrement des données embarquées</strong> : Les données cachées peuvent être chiffrées à l&#39;aide de divers algorithmes de chiffrement, notamment Rijndael (AES) et Blowfish.</li><li><strong>Vérification de l&#39;intégrité des données</strong> : Steghide intègre une fonction de vérification de l&#39;intégrité des données cachées en utilisant un checksum CRC32. Cela garantit que les données extraites sont intactes et non corrompues.</li><li><strong>Informations sur un fichier</strong> : On peut obtenir des informations sur les fichiers stéganographiques, y compris le format, la capacité et l&#39;algorithme de chiffrement utilisé. Cela se fait en utilisant la commande <code>steghide info filename</code>.</li></ul><h3 id="formats-de-fichiers-supportes" tabindex="-1">Formats de fichiers supportés <a class="header-anchor" href="#formats-de-fichiers-supportes" aria-label="Permalink to &quot;Formats de fichiers supportés&quot;">​</a></h3><p>Steghide supporte les formats de fichiers suivants :</p><h4 id="images" tabindex="-1">Images : <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images :&quot;">​</a></h4><ul><li>JPEG</li><li>GIF</li><li>BMP</li></ul><h4 id="audio" tabindex="-1">Audio : <a class="header-anchor" href="#audio" aria-label="Permalink to &quot;Audio :&quot;">​</a></h4><ul><li>WAV</li><li>AU.</li></ul><p>Ce sont les seuls formats supportés, en revanche, il n&#39;y a pas de restriction sur le ficher à &quot;<em>stéganographier</em>&quot;, par exemple un <code>.exe</code> peut être stéganographié et extrait sans problème d&#39;un fichier <code>.jpeg</code>.</p><h3 id="utilisation-de-steghide" tabindex="-1">Utilisation de Steghide <a class="header-anchor" href="#utilisation-de-steghide" aria-label="Permalink to &quot;Utilisation de Steghide&quot;">​</a></h3><h4 id="cacher-des-donnees" tabindex="-1">Cacher des données : <a class="header-anchor" href="#cacher-des-donnees" aria-label="Permalink to &quot;Cacher des données :&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">steghide</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> embed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename.jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename-with-data.jpg</span></span></code></pre></div><p>Ici, on vient de cacher le fichier <code>data.txt</code> dans le fichier <code>filename.jpg</code>, et on a obtenu le fichier <code>filename-with-data.jpg</code>.</p><p>L&#39;argument <code>-cf</code> désigne le fichier &quot;source&quot; qui sera utilisé pour cacher les données, ici une image. L&#39;argument <code>-ef</code> désigne le fichier &quot;embarqué&quot; qui contiendra les données cachées. L&#39;argument <code>-sf</code> désigne le fichier &quot;source&quot; avec les données cachées.</p><h4 id="extraire-des-donnees" tabindex="-1">Extraire des données : <a class="header-anchor" href="#extraire-des-donnees" aria-label="Permalink to &quot;Extraire des données :&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">steghide</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename-with-data.jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> getdata.txt</span></span></code></pre></div><p>Ici, on vient de extraire les données cachées dans le fichier <code>filename-with-data.jpg</code>, et on a obtenu le fichier <code>getdata.txt</code> grâce à l&#39;argument <code>-xf</code>.</p><p>Cela est l&#39;utilisation la plus simplée de cet outil, il suffit de faire une recherche sur le fichier pour se rendre compte de son contenu. On va donc complexifier un peu les choses.</p><h4 id="compression-et-chiffrement" tabindex="-1">Compression et chiffrement : <a class="header-anchor" href="#compression-et-chiffrement" aria-label="Permalink to &quot;Compression et chiffrement :&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">steghide</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> embed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename.jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename-with-data.jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rijndael-128</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -z</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Entrez</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> la</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phrase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> de</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Réentrez</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> la</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phrase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> de</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">intégration</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> de</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;secret.txt&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dans</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;image.jpg&quot;...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fait</span></span></code></pre></div><p>Ici, on vient de cacher le fichier <code>data.txt</code> dans le fichier <code>filename.jpg</code>, et on a obtenu le fichier <code>filename-with-data.jpg</code>, comme précédemment. Cependant, on a aussi spécifié que l&#39;on souhaite chiffrer les données avec le chiffrement Rijndael-128, également connu sous le nom d&#39;AES, et que l&#39;on souhaite que le fichier final soit compressé à un niveau de 6 (niveau de compression moyen).</p><ul><li>L&#39;argument <strong><code>e rijndael-128</code></strong> : Chiffre avec le chiffrement Rijndael-128, également connu sous le nom d&#39;AES.</li><li>L&#39;argument <strong><code>z 6</code></strong> : Compression avec un niveau 6 (niveau de compression moyen).</li></ul><h4 id="extraction" tabindex="-1">Extraction : <a class="header-anchor" href="#extraction" aria-label="Permalink to &quot;Extraction :&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">steghide</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename-with-data.jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> getdata.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [passphrase]</span></span></code></pre></div><p>L&#39;argument <strong><code>-p [passphrase]</code></strong> permet de spécifier le mot de passe à utiliser pour déchiffrer les données cachées, qui a été défini lors de la première étape.</p><hr><br><div class="info custom-block"><p class="custom-block-title">Sources</p><p>Ce cours s&#39;inspire de connaissances personnelles, des informations complémentaires peuvent être trouvées ici rédigées par <strong>@ria.banerjee005</strong>: <a href="https://medium.com/@ria.banerjee005/steganography-tools-techniques-bba3f95c7148" target="_blank" rel="noreferrer">https://medium.com/@ria.banerjee005/steganography-tools-techniques-bba3f95c7148</a></p></div>`,30))])}const C=t(d,[["render",p]]);export{f as __pageData,C as default};
