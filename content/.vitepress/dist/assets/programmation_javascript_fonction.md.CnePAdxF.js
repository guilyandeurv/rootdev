import{_ as i,c as a,an as e,o as n}from"./chunks/framework.ys1W0Hiz.js";const c=JSON.parse('{"title":"Tutoriel sur les Fonctions en JavaScript","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"programmation/javascript/fonction.md","filePath":"programmation/javascript/fonction.md","lastUpdated":1729429463000}'),t={name:"programmation/javascript/fonction.md"};function l(p,s,o,r,h,k){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="tutoriel-sur-les-fonctions-en-javascript" tabindex="-1">Tutoriel sur les Fonctions en JavaScript <a class="header-anchor" href="#tutoriel-sur-les-fonctions-en-javascript" aria-label="Permalink to &quot;Tutoriel sur les Fonctions en JavaScript&quot;">​</a></h1><p>Les fonctions sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles permettent d&#39;organiser le code en le divisant en tâches distinctes et en les réutilisant au besoin. Dans ce tutoriel, nous allons explorer les bases des fonctions en JavaScript.</p><h2 id="declaration-des-fonctions" tabindex="-1">Déclaration des Fonctions <a class="header-anchor" href="#declaration-des-fonctions" aria-label="Permalink to &quot;Déclaration des Fonctions&quot;">​</a></h2><p>En JavaScript, il existe deux principales façons de déclarer une fonction : en utilisant la déclaration de fonction <code>function</code> ou en utilisant les expressions de fonction.</p><ul><li><strong>Déclaration de fonction :</strong> Une fonction déclarée de cette manière commence par le mot-clé <code>function</code>, suivi du nom de la fonction et de ses paramètres entre parenthèses, puis du corps de la fonction entre accolades.</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bonjour !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>Expressions de fonction :</strong> Les fonctions peuvent également être affectées à des variables en tant qu&#39;expressions de fonction.</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sayHello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bonjour !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="appel-des-fonctions" tabindex="-1">Appel des fonctions <a class="header-anchor" href="#appel-des-fonctions" aria-label="Permalink to &quot;Appel des fonctions&quot;">​</a></h2><p>Une fois qu&#39;une fonction est déclarée, elle peut être appelée pour exécuter le code à l&#39;intérieur de celle-ci.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Appelle la fonction sayHello et affiche &quot;Bonjour !&quot; dans la console.</span></span></code></pre></div><h2 id="parametres-arguments" tabindex="-1">Paramètres &amp; arguments <a class="header-anchor" href="#parametres-arguments" aria-label="Permalink to &quot;Paramètres &amp; arguments&quot;">​</a></h2><p>Les fonctions peuvent accepter des paramètres, qui sont des variables utilisées pour recevoir des valeurs lors de l&#39;appel de la fonction. Ces valeurs sont appelées des arguments.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bonjour, &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Affiche &quot;Bonjour, Alice !&quot; dans la console.</span></span></code></pre></div><h2 id="valeur-de-retour" tabindex="-1">Valeur de retour <a class="header-anchor" href="#valeur-de-retour" aria-label="Permalink to &quot;Valeur de retour&quot;">​</a></h2><p>Les fonctions peuvent également renvoyer une valeur à partir de l&#39;endroit où elles sont appelées à l&#39;aide du mot-clé return.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Affiche 8 dans la console.</span></span></code></pre></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Les fonctions sont un élément fondamental de JavaScript, permettant de réutiliser efficacement le code et d&#39;organiser la logique de manière modulaire. En comprenant comment déclarer, appeler, et utiliser des fonctions avec des paramètres et des valeurs de retour, vous serez en mesure d&#39;écrire un code JavaScript plus propre et plus efficace.</p>`,19)]))}const u=i(t,[["render",l]]);export{c as __pageData,u as default};