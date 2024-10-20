import{_ as e,c as i,j as n,a as p,G as t,an as l,B as r,o}from"./chunks/framework.ys1W0Hiz.js";const C=JSON.parse('{"title":"Protocole SMB","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"cybersecurite/reseaux/smb.md","filePath":"cybersecurite/reseaux/smb.md","lastUpdated":1729429463000}'),c={name:"cybersecurite/reseaux/smb.md"};function h(d,s,u,k,m,g){const a=r("Badge");return o(),i("div",null,[s[0]||(s[0]=n("h1",{id:"protocole-smb",tabindex:"-1"},[p("Protocole SMB "),n("a",{class:"header-anchor",href:"#protocole-smb","aria-label":'Permalink to "Protocole SMB"'},"​")],-1)),t(a,{type:"tip",text:"Rédigé le 17/04/2024"}),s[1]||(s[1]=l(`<h2 id="introduction-a-smb" tabindex="-1">Introduction à SMB <a class="header-anchor" href="#introduction-a-smb" aria-label="Permalink to &quot;Introduction à SMB&quot;">​</a></h2><p>SMB (<em><strong>S</strong></em>erver <em><strong>M</strong></em>essage <em><strong>B</strong></em>lock Protocol) est un protocole de communication client-serveur utilisé pour partager l&#39;accès à des fichiers, des imprimantes, des ports série et d&#39;autres ressources sur un réseau. Il facilite l&#39;échange de messages entre les systèmes client et serveur pour permettre diverses fonctionnalités de partage de ressources réseau.</p><h3 id="fonctionnement-de-smb" tabindex="-1">Fonctionnement de SMB <a class="header-anchor" href="#fonctionnement-de-smb" aria-label="Permalink to &quot;Fonctionnement de SMB&quot;">​</a></h3><ul><li><strong>Établissement de la connexion</strong>: SMB fonctionne comme un protocole de réponse-demande, ce qui signifie qu&#39;il implique plusieurs échanges de messages entre le client et le serveur pour établir une connexion. Les clients initient des connexions vers les serveurs en utilisant TCP/IP, NetBEUI* ou IPX/SPX.</li></ul><details class="details custom-block"><summary>NetBEUI</summary><p>NetBEUI est un protocole réseau non-routable de réseau local. En 2005, il est surtout utilisé sur des ordinateurs utilisant d&#39;anciennes versions de Microsoft Windows.</p><p>Netbeui est le protocole propriétaire de Microsoft et représente une évolution de Netbios. NetBIOS n&#39;est pas un protocole en soi. C&#39;est une interface logicielle, et un mode de nommage. Il sous-tend tous les réseaux de type Microsoft jusqu&#39;à Windows 2000.</p><p><a href="https://fr.wikipedia.org/wiki/NetBEUI" target="_blank" rel="noreferrer">https://fr.wikipedia.org/wiki/NetBEUI</a></p></details><ul><li><strong>Envoi de commandes</strong> : Une fois la connexion établie, les clients peuvent envoyer des commandes (SMB) au serveur. Ces commandes permettent aux clients d&#39;accéder à des ressources partagées telles que des fichiers, d&#39;ouvrir des fichiers, de lire et d&#39;écrire des données, et d&#39;effectuer d&#39;autres opérations de système de fichiers. Importamment, toutes ces actions sont exécutées via le réseau.</li></ul><h3 id="implementation" tabindex="-1">Implémentation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implémentation&quot;">​</a></h3><ul><li><p><strong>Microsoft Windows</strong> : La prise en charge de SMB est intégrée dans les systèmes d&#39;exploitation Microsoft Windows depuis Windows 95. Les systèmes Windows peuvent fonctionner à la fois comme clients et serveurs SMB.</p></li><li><p><strong>Samba</strong> : Samba est une implémentation open source de la suite de protocoles SMB pour les systèmes basés sur Unix. Il fournit des capacités de serveur, permettant aux systèmes Unix d&#39;offrir des services de partage de fichiers SMB aux clients Windows. Samba est largement utilisé dans des environnements réseau hétérogènes où coexistent des systèmes Windows et Unix.</p></li></ul><p>En exploitant SMB, les organisations peuvent partager efficacement des ressources sur leur infrastructure réseau, améliorant la collaboration et la productivité entre les utilisateurs.</p><h2 id="enumeration" tabindex="-1">Énumération <a class="header-anchor" href="#enumeration" aria-label="Permalink to &quot;Énumération&quot;">​</a></h2><p>L&#39;énumération est le processus de collecte d&#39;informations sur une cible afin de trouver des vecteurs d&#39;attaque potentiels et d&#39;aider à l&#39;exploitation.</p><p>Ce processus est essentiel pour la réussite d&#39;une attaque, car perdre du temps avec des exploits qui ne fonctionnent pas ou qui peuvent faire planter le système peut être une perte d&#39;énergie. L&#39;énumération peut être utilisée pour collecter des noms d&#39;utilisateur, des mots de passe, des informations réseau, des noms d&#39;hôtes, des données d&#39;application, des services, ou toute autre information qui peut être précieuse pour un attaquant.</p><h3 id="smb" tabindex="-1">SMB <a class="header-anchor" href="#smb" aria-label="Permalink to &quot;SMB&quot;">​</a></h3><p>Typiquement, il existe des lecteurs partagés SMB sur un serveur auxquels les utilisateurs peuvent se connecter et utiliser pour visualiser ou transférer des fichiers. SMB peut souvent être un excellent point de départ pour un attaquant cherchant à découvrir des informations sensibles - il est surprenant de constater ce qui est parfois inclus sur ces partages.</p><h3 id="balayage-de-ports" tabindex="-1">Balayage de ports <a class="header-anchor" href="#balayage-de-ports" aria-label="Permalink to &quot;Balayage de ports&quot;">​</a></h3><p>La première étape de l&#39;énumération consiste à effectuer un balayage de ports, afin de découvrir autant d&#39;informations que possible sur les services, les applications, la structure et le système d&#39;exploitation de la machine cible.</p><p>Si l&#39;utilisateur n&#39;a pas encore examiné le balayage de ports, il est recommandé de consulter la salle de discussion Nmap ici.</p><h3 id="enum4linux" tabindex="-1">Enum4Linux <a class="header-anchor" href="#enum4linux" aria-label="Permalink to &quot;Enum4Linux&quot;">​</a></h3><p><em><strong>Enum4linux</strong></em> est un outil utilisé pour énumérer les partages SMB sur les systèmes Windows et Linux. Il agit essentiellement comme un wrapper autour des outils du package Samba et permet d&#39;extraire rapidement des informations de la cible concernant SMB. Il est installé par défaut sur Parrot et Kali, cependant, si l&#39;utilisateur doit l&#39;installer, il peut le faire depuis le GitHub officiel.</p><p>La syntaxe d&#39;Enum4Linux est simple : &quot;enum4linux [options] ip&quot;</p><h4 id="tag-fonction" tabindex="-1">TAG FONCTION <a class="header-anchor" href="#tag-fonction" aria-label="Permalink to &quot;TAG FONCTION&quot;">​</a></h4><p>-U obtenir la liste des utilisateurs -M obtenir la liste des machines -N obtenir le vidage de la liste des noms (différent de -U et -M) -S obtenir la liste des partages -P obtenir des informations sur la politique de mot de passe -G obtenir la liste des groupes et des membres</p><p>-a tout ce qui précède (énumération de base complète)</p><p>Depuis la chambre <a href="https://tryhackme.com/r/room/networkservices" target="_blank" rel="noreferrer">Network Services</a> de <em><strong>TryHackMe</strong></em>, on test sur une machine virtuelle le scan avec Nmap &amp; Enum4Linux :</p><details class="details custom-block"><summary>Scan Nmap</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌──(rootdev㉿kali)-[~]</span></span>
<span class="line"><span>└─$ nmap -p- -v 10.10.151.252</span></span>
<span class="line"><span>Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-17 22:29 CEST</span></span>
<span class="line"><span>Initiating Ping Scan at 22:29</span></span>
<span class="line"><span>Scanning 10.10.151.252 [2 ports]</span></span>
<span class="line"><span>Completed Ping Scan at 22:29, 0.06s elapsed (1 total hosts)</span></span>
<span class="line"><span>Initiating Parallel DNS resolution of 1 host. at 22:29</span></span>
<span class="line"><span>Completed Parallel DNS resolution of 1 host. at 22:29, 0.00s elapsed</span></span>
<span class="line"><span>Initiating Connect Scan at 22:29</span></span>
<span class="line"><span>Scanning 10.10.151.252 [65535 ports]</span></span>
<span class="line"><span>Discovered open port 139/tcp on 10.10.151.252    // Ports sur lequel tourne SMB</span></span>
<span class="line"><span>Discovered open port 22/tcp on 10.10.151.252     </span></span>
<span class="line"><span>Discovered open port 445/tcp on 10.10.151.252    // Ports sur lequel tourne SMB</span></span>
<span class="line"><span>Connect Scan Timing: About 14.98% done; ETC: 22:33 (0:02:56 remaining)</span></span>
<span class="line"><span>Connect Scan Timing: About 36.38% done; ETC: 22:32 (0:01:47 remaining)</span></span>
<span class="line"><span>Connect Scan Timing: About 56.34% done; ETC: 22:33 (0:01:31 remaining)</span></span>
<span class="line"><span>Connect Scan Timing: About 66.65% done; ETC: 22:33 (0:01:16 remaining)</span></span>
<span class="line"><span>Connect Scan Timing: About 81.54% done; ETC: 22:33 (0:00:41 remaining)</span></span>
<span class="line"><span>Completed Connect Scan at 22:33, 205.97s elapsed (65535 total ports)</span></span>
<span class="line"><span>Nmap scan report for 10.10.151.252</span></span>
<span class="line"><span>Host is up (0.072s latency).</span></span>
<span class="line"><span>Not shown: 65532 closed tcp ports (conn-refused)</span></span>
<span class="line"><span>PORT    STATE SERVICE</span></span>
<span class="line"><span>22/tcp  open  ssh</span></span>
<span class="line"><span>139/tcp open  netbios-ssn       // Ports sur lequel tourne SMB</span></span>
<span class="line"><span>445/tcp open  microsoft-ds      // Ports sur lequel tourne SMB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Read data files from: /usr/bin/../share/nmap</span></span>
<span class="line"><span>Nmap done: 1 IP address (1 host up) scanned in 206.09 seconds</span></span></code></pre></div></details><details class="details custom-block"><summary>Scan Enum4Linux</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌──(rootdev㉿kali)-[~]</span></span>
<span class="line"><span>└─$ enum4linux -a 10.10.151.252</span></span>
<span class="line"><span>Starting enum4linux v0.9.1 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Wed Apr 17 22:30:14 2024</span></span>
<span class="line"><span></span></span>
<span class="line"><span> =========================================( Target Information )=========================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Target ........... 10.10.151.252</span></span>
<span class="line"><span>RID Range ........ 500-550,1000-1050</span></span>
<span class="line"><span>Username ......... &#39;&#39;</span></span>
<span class="line"><span>Password ......... &#39;&#39;</span></span>
<span class="line"><span>Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> ===========================( Enumerating Workgroup/Domain on 10.10.151.252 )===========================</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Got domain/workgroup name: WORKGROUP</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> ===============================( Nbtstat Information for 10.10.151.252 )===============================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Looking up status of 10.10.151.252</span></span>
<span class="line"><span>	POLOSMB         &lt;00&gt; -         B &lt;ACTIVE&gt;  Workstation Service</span></span>
<span class="line"><span>	POLOSMB         &lt;03&gt; -         B &lt;ACTIVE&gt;  Messenger Service</span></span>
<span class="line"><span>	POLOSMB         &lt;20&gt; -         B &lt;ACTIVE&gt;  File Server Service</span></span>
<span class="line"><span>	..__MSBROWSE__. &lt;01&gt; - &lt;GROUP&gt; B &lt;ACTIVE&gt;  Master Browser</span></span>
<span class="line"><span>	WORKGROUP       &lt;00&gt; - &lt;GROUP&gt; B &lt;ACTIVE&gt;  Domain/Workgroup Name</span></span>
<span class="line"><span>	WORKGROUP       &lt;1d&gt; -         B &lt;ACTIVE&gt;  Master Browser</span></span>
<span class="line"><span>	WORKGROUP       &lt;1e&gt; - &lt;GROUP&gt; B &lt;ACTIVE&gt;  Browser Service Elections</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	MAC Address = 00-00-00-00-00-00</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ===================================( Session Check on 10.10.151.252 )===================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Server 10.10.151.252 allows sessions using username &#39;&#39;, password &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> ================================( Getting domain SID for 10.10.151.252 )================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Domain Name: WORKGROUP</span></span>
<span class="line"><span>Domain Sid: (NULL SID)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Can&#39;t determine if host is part of domain or part of a workgroup</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> ==================================( OS information on 10.10.151.252 )==================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[E] Can&#39;t get OS info with smbclient</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Got OS info for 10.10.151.252 from srvinfo: </span></span>
<span class="line"><span>	POLOSMB        Wk Sv PrQ Unx NT SNT polosmb server (Samba, Ubuntu)</span></span>
<span class="line"><span>	platform_id     :	500</span></span>
<span class="line"><span>	os version      :	6.1</span></span>
<span class="line"><span>	server type     :	0x809a03</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> =======================================( Users on 10.10.151.252 )=======================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Use of uninitialized value $users in print at ./enum4linux.pl line 972.</span></span>
<span class="line"><span>Use of uninitialized value $users in pattern match (m//) at ./enum4linux.pl line 975.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Use of uninitialized value $users in print at ./enum4linux.pl line 986.</span></span>
<span class="line"><span>Use of uninitialized value $users in pattern match (m//) at ./enum4linux.pl line 988.</span></span>
<span class="line"><span></span></span>
<span class="line"><span> =================================( Share Enumeration on 10.10.151.252 )=================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Sharename       Type      Comment</span></span>
<span class="line"><span>	---------       ----      -------</span></span>
<span class="line"><span>	netlogon        Disk      Network Logon Service</span></span>
<span class="line"><span>	profiles        Disk      Users profiles</span></span>
<span class="line"><span>	print$          Disk      Printer Drivers</span></span>
<span class="line"><span>	IPC$            IPC       IPC Service (polosmb server (Samba, Ubuntu))</span></span>
<span class="line"><span>Reconnecting with SMB1 for workgroup listing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Server               Comment</span></span>
<span class="line"><span>	---------            -------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Workgroup            Master</span></span>
<span class="line"><span>	---------            -------</span></span>
<span class="line"><span>	WORKGROUP            POLOSMB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Attempting to map shares on 10.10.151.252</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[E] Can&#39;t understand response:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tree connect failed: NT_STATUS_BAD_NETWORK_NAME</span></span>
<span class="line"><span>//10.10.151.252/netlogon	Mapping: N/A Listing: N/A Writing: N/A</span></span>
<span class="line"><span>//10.10.151.252/profiles	Mapping: OK Listing: OK Writing: N/A</span></span>
<span class="line"><span>//10.10.151.252/print$	Mapping: DENIED Listing: N/A Writing: N/A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[E] Can&#39;t understand response:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NT_STATUS_OBJECT_NAME_NOT_FOUND listing \\*</span></span>
<span class="line"><span>//10.10.151.252/IPC$	Mapping: N/A Listing: N/A Writing: N/A</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ===========================( Password Policy Information for 10.10.151.252 )===========================</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Attaching to 10.10.151.252 using a NULL share</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Trying protocol 139/SMB...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Found domain(s):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	[+] POLOSMB</span></span>
<span class="line"><span>	[+] Builtin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Password Info for Domain: POLOSMB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	[+] Minimum password length: 5</span></span>
<span class="line"><span>	[+] Password history length: None</span></span>
<span class="line"><span>	[+] Maximum password age: 37 days 6 hours 21 minutes </span></span>
<span class="line"><span>	[+] Password Complexity Flags: 000000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		[+] Domain Refuse Password Change: 0</span></span>
<span class="line"><span>		[+] Domain Password Store Cleartext: 0</span></span>
<span class="line"><span>		[+] Domain Password Lockout Admins: 0</span></span>
<span class="line"><span>		[+] Domain Password No Clear Change: 0</span></span>
<span class="line"><span>		[+] Domain Password No Anon Change: 0</span></span>
<span class="line"><span>		[+] Domain Password Complex: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	[+] Minimum password age: None</span></span>
<span class="line"><span>	[+] Reset Account Lockout Counter: 30 minutes </span></span>
<span class="line"><span>	[+] Locked Account Duration: 30 minutes </span></span>
<span class="line"><span>	[+] Account Lockout Threshold: None</span></span>
<span class="line"><span>	[+] Forced Log off Time: 37 days 6 hours 21 minutes </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Retieved partial password policy with rpcclient:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Password Complexity: Disabled</span></span>
<span class="line"><span>Minimum Password Length: 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ==================( Users on 10.10.151.252 via RID cycling (RIDS: 500-550,1000-1050) )==================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Enumerating users using SID S-1-5-32 and logon username &#39;&#39;, password &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S-1-5-32-544 BUILTIN\\Administrators (Local Group)</span></span>
<span class="line"><span>S-1-5-32-545 BUILTIN\\Users (Local Group)</span></span>
<span class="line"><span>S-1-5-32-546 BUILTIN\\Guests (Local Group)</span></span>
<span class="line"><span>S-1-5-32-547 BUILTIN\\Power Users (Local Group)</span></span>
<span class="line"><span>S-1-5-32-548 BUILTIN\\Account Operators (Local Group)</span></span>
<span class="line"><span>S-1-5-32-549 BUILTIN\\Server Operators (Local Group)</span></span>
<span class="line"><span>S-1-5-32-550 BUILTIN\\Print Operators (Local Group)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Enumerating users using SID S-1-5-21-434125608-3964652802-3194254534 and logon username &#39;&#39;, password &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S-1-5-21-434125608-3964652802-3194254534-501 POLOSMB\\nobody (Local User)</span></span>
<span class="line"><span>S-1-5-21-434125608-3964652802-3194254534-513 POLOSMB\\None (Domain Group)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[+] Enumerating users using SID S-1-22-1 and logon username &#39;&#39;, password &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S-1-22-1-1000 Unix User\\cactus (Local User)</span></span></code></pre></div></details><p>Dans le scan Nmap, on s&#39;aperçoit que le service SMB tourne grâce aux <em><strong>ports 139 &amp; 445</strong></em>. Sur celui de Enum4Linux, on prend connaissance de plusieurs choses :</p><ul><li>Le nom de la machine est <strong>POLOSMB</strong></li><li>Le domaine ou workgroup est <strong>WORKGROUP</strong></li><li>Version 6.1</li><li>Les stratégies de sécurité des mots de passe [...]</li></ul><h2 id="types-d-exploits-smb" tabindex="-1">Types d&#39;exploits SMB <a class="header-anchor" href="#types-d-exploits-smb" aria-label="Permalink to &quot;Types d&#39;exploits SMB&quot;">​</a></h2><p>Bien qu&#39;il existe des vulnérabilités telles que <a href="https://www.cvedetails.com/cve/CVE-2017-7494/" target="_blank" rel="noreferrer">CVE-2017-7494</a> qui peuvent permettre l&#39;exécution de code à distance en exploitant SMB, on est plus susceptible de rencontrer une situation où le meilleur moyen d&#39;accéder à un système est dû à des erreurs de configuration dans le système. Dans ce cas, on peut exploiter l&#39;accès anonyme aux partages SMB - une erreur de configuration courante qui peut nous permettre de recueillir des informations menant à un shell.</p><h3 id="decomposition-de-la-methode" tabindex="-1">Décomposition de la méthode <a class="header-anchor" href="#decomposition-de-la-methode" aria-label="Permalink to &quot;Décomposition de la méthode&quot;">​</a></h3><p>Ainsi, à partir de l&#39;étape d&#39;énumération, on a :</p><ul><li>L&#39;emplacement du partage SMB</li><li>Le nom d&#39;un partage SMB intéressant</li><li>SMBClient</li><li>Étant donné que l&#39;on essaye d&#39;accéder à un partage SMB, on a besoin d&#39;un client pour accéder aux ressources sur les serveurs. On utilisera SMBClient car il fait partie de la suite samba par défaut.</li><li>On peut accéder au partage SMB à distance en utilisant la syntaxe :</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">smbclient</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //[IP]/[SHARE]</span></span></code></pre></div><h4 id="tag-fonction-1" tabindex="-1">TAG FONCTION <a class="header-anchor" href="#tag-fonction-1" aria-label="Permalink to &quot;TAG FONCTION&quot;">​</a></h4><p><code>-U [nom]</code> : pour spécifier l&#39;utilisateur</p><p><code>-p [port]</code> : pour spécifier le port</p><p>Exemple : <code>smbclient //10.10.151.252/profiles -U Anonymous -p 139</code></p><p>Dans les cas où ces serveurs sont (très) peu sécurisés, le compte Anonymous permet une connexion sans mot de passe. On peut ensuite grâce à lui avoir un aperçu :</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">┌──(rootdev㉿kali</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)-[~]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smbclient</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //10.10.151.252/profiles</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Anonymous</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 139</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Password</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [WORKGROUP</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nonymous]: // aucune entrée</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Try</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;help&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> possible</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commands.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">smb:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                   D</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  ..</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                  D</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 12:49:56</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                             DH</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      807</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .sudo_as_admin_successful</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .bash_logout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      220</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .viminfo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                            H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      947</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Working_From_Home_Information.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   N</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      358</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                               DH</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .bashrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                             H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     3771</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .gnupg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                             DH</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Tue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 13:08:23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		12316808</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blocks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1024.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7583716</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blocks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">smb:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\&gt;</span></span></code></pre></div><hr><br><div class="info custom-block"><p class="custom-block-title">Sources</p><p>Ce cours s&#39;inspire (et utilise les images) de TryHackMe.com de la chambre &quot;<em>Network Services</em>&quot; : <a href="https://tryhackme.com/r/room/networkservices" target="_blank" rel="noreferrer">https://tryhackme.com/r/room/networkservices</a></p></div>`,43))])}const B=e(c,[["render",h]]);export{C as __pageData,B as default};
