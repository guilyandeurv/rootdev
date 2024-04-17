---
sidebar: auto
---
# Protocole SMB
<Badge type="tip" text="Rédigé le 17/04/2024" />

## Introduction à SMB

SMB (***S***erver ***M***essage ***B***lock Protocol) est un protocole de communication client-serveur utilisé pour partager l'accès à des fichiers, des imprimantes, des ports série et d'autres ressources sur un réseau. Il facilite l'échange de messages entre les systèmes client et serveur pour permettre diverses fonctionnalités de partage de ressources réseau.

### Fonctionnement de SMB

* **Établissement de la connexion**: SMB fonctionne comme un protocole de réponse-demande, ce qui signifie qu'il implique plusieurs échanges de messages entre le client et le serveur pour établir une connexion. Les clients initient des connexions vers les serveurs en utilisant TCP/IP, NetBEUI* ou IPX/SPX.

::: details NetBEUI
NetBEUI est un protocole réseau non-routable de réseau local. En 2005, il est surtout utilisé sur des ordinateurs utilisant d'anciennes versions de Microsoft Windows.

Netbeui est le protocole propriétaire de Microsoft et représente une évolution de Netbios. NetBIOS n'est pas un protocole en soi. C'est une interface logicielle, et un mode de nommage. Il sous-tend tous les réseaux de type Microsoft jusqu'à Windows 2000.

https://fr.wikipedia.org/wiki/NetBEUI
:::

* **Envoi de commandes** : Une fois la connexion établie, les clients peuvent envoyer des commandes (SMB) au serveur. Ces commandes permettent aux clients d'accéder à des ressources partagées telles que des fichiers, d'ouvrir des fichiers, de lire et d'écrire des données, et d'effectuer d'autres opérations de système de fichiers. Importamment, toutes ces actions sont exécutées via le réseau.

### Implémentation
* **Microsoft Windows** : La prise en charge de SMB est intégrée dans les systèmes d'exploitation Microsoft Windows depuis Windows 95. Les systèmes Windows peuvent fonctionner à la fois comme clients et serveurs SMB.

* **Samba** : Samba est une implémentation open source de la suite de protocoles SMB pour les systèmes basés sur Unix. Il fournit des capacités de serveur, permettant aux systèmes Unix d'offrir des services de partage de fichiers SMB aux clients Windows. Samba est largement utilisé dans des environnements réseau hétérogènes où coexistent des systèmes Windows et Unix.

En exploitant SMB, les organisations peuvent partager efficacement des ressources sur leur infrastructure réseau, améliorant la collaboration et la productivité entre les utilisateurs.

## Énumération
L'énumération est le processus de collecte d'informations sur une cible afin de trouver des vecteurs d'attaque potentiels et d'aider à l'exploitation.

Ce processus est essentiel pour la réussite d'une attaque, car perdre du temps avec des exploits qui ne fonctionnent pas ou qui peuvent faire planter le système peut être une perte d'énergie. L'énumération peut être utilisée pour collecter des noms d'utilisateur, des mots de passe, des informations réseau, des noms d'hôtes, des données d'application, des services, ou toute autre information qui peut être précieuse pour un attaquant.

### SMB
Typiquement, il existe des lecteurs partagés SMB sur un serveur auxquels les utilisateurs peuvent se connecter et utiliser pour visualiser ou transférer des fichiers. SMB peut souvent être un excellent point de départ pour un attaquant cherchant à découvrir des informations sensibles - il est surprenant de constater ce qui est parfois inclus sur ces partages.

### Balayage de ports
La première étape de l'énumération consiste à effectuer un balayage de ports, afin de découvrir autant d'informations que possible sur les services, les applications, la structure et le système d'exploitation de la machine cible.

Si l'utilisateur n'a pas encore examiné le balayage de ports, il est recommandé de consulter la salle de discussion Nmap ici.

### Enum4Linux

***Enum4linux*** est un outil utilisé pour énumérer les partages SMB sur les systèmes Windows et Linux. Il agit essentiellement comme un wrapper autour des outils du package Samba et permet d'extraire rapidement des informations de la cible concernant SMB. Il est installé par défaut sur Parrot et Kali, cependant, si l'utilisateur doit l'installer, il peut le faire depuis le GitHub officiel.

La syntaxe d'Enum4Linux est simple : "enum4linux [options] ip"

#### TAG FONCTION

-U obtenir la liste des utilisateurs
-M obtenir la liste des machines
-N obtenir le vidage de la liste des noms (différent de -U et -M)
-S obtenir la liste des partages
-P obtenir des informations sur la politique de mot de passe
-G obtenir la liste des groupes et des membres

-a tout ce qui précède (énumération de base complète)

Depuis la chambre [Network Services](https://tryhackme.com/r/room/networkservices) de ***TryHackMe***, on test sur une machine virtuelle le scan avec Nmap & Enum4Linux :

::: details Scan Nmap
```
┌──(rootdev㉿kali)-[~]
└─$ nmap -p- -v 10.10.151.252
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-17 22:29 CEST
Initiating Ping Scan at 22:29
Scanning 10.10.151.252 [2 ports]
Completed Ping Scan at 22:29, 0.06s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 22:29
Completed Parallel DNS resolution of 1 host. at 22:29, 0.00s elapsed
Initiating Connect Scan at 22:29
Scanning 10.10.151.252 [65535 ports]
Discovered open port 139/tcp on 10.10.151.252    // Ports sur lequel tourne SMB
Discovered open port 22/tcp on 10.10.151.252     
Discovered open port 445/tcp on 10.10.151.252    // Ports sur lequel tourne SMB
Connect Scan Timing: About 14.98% done; ETC: 22:33 (0:02:56 remaining)
Connect Scan Timing: About 36.38% done; ETC: 22:32 (0:01:47 remaining)
Connect Scan Timing: About 56.34% done; ETC: 22:33 (0:01:31 remaining)
Connect Scan Timing: About 66.65% done; ETC: 22:33 (0:01:16 remaining)
Connect Scan Timing: About 81.54% done; ETC: 22:33 (0:00:41 remaining)
Completed Connect Scan at 22:33, 205.97s elapsed (65535 total ports)
Nmap scan report for 10.10.151.252
Host is up (0.072s latency).
Not shown: 65532 closed tcp ports (conn-refused)
PORT    STATE SERVICE
22/tcp  open  ssh
139/tcp open  netbios-ssn       // Ports sur lequel tourne SMB
445/tcp open  microsoft-ds      // Ports sur lequel tourne SMB

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 206.09 seconds

```
:::

::: details Scan Enum4Linux
```
┌──(rootdev㉿kali)-[~]
└─$ enum4linux -a 10.10.151.252
Starting enum4linux v0.9.1 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Wed Apr 17 22:30:14 2024

 =========================================( Target Information )=========================================

Target ........... 10.10.151.252
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


 ===========================( Enumerating Workgroup/Domain on 10.10.151.252 )===========================


[+] Got domain/workgroup name: WORKGROUP


 ===============================( Nbtstat Information for 10.10.151.252 )===============================

Looking up status of 10.10.151.252
	POLOSMB         <00> -         B <ACTIVE>  Workstation Service
	POLOSMB         <03> -         B <ACTIVE>  Messenger Service
	POLOSMB         <20> -         B <ACTIVE>  File Server Service
	..__MSBROWSE__. <01> - <GROUP> B <ACTIVE>  Master Browser
	WORKGROUP       <00> - <GROUP> B <ACTIVE>  Domain/Workgroup Name
	WORKGROUP       <1d> -         B <ACTIVE>  Master Browser
	WORKGROUP       <1e> - <GROUP> B <ACTIVE>  Browser Service Elections

	MAC Address = 00-00-00-00-00-00

 ===================================( Session Check on 10.10.151.252 )===================================


[+] Server 10.10.151.252 allows sessions using username '', password ''


 ================================( Getting domain SID for 10.10.151.252 )================================

Domain Name: WORKGROUP
Domain Sid: (NULL SID)

[+] Can't determine if host is part of domain or part of a workgroup


 ==================================( OS information on 10.10.151.252 )==================================


[E] Can't get OS info with smbclient


[+] Got OS info for 10.10.151.252 from srvinfo: 
	POLOSMB        Wk Sv PrQ Unx NT SNT polosmb server (Samba, Ubuntu)
	platform_id     :	500
	os version      :	6.1
	server type     :	0x809a03


 =======================================( Users on 10.10.151.252 )=======================================

Use of uninitialized value $users in print at ./enum4linux.pl line 972.
Use of uninitialized value $users in pattern match (m//) at ./enum4linux.pl line 975.

Use of uninitialized value $users in print at ./enum4linux.pl line 986.
Use of uninitialized value $users in pattern match (m//) at ./enum4linux.pl line 988.

 =================================( Share Enumeration on 10.10.151.252 )=================================


	Sharename       Type      Comment
	---------       ----      -------
	netlogon        Disk      Network Logon Service
	profiles        Disk      Users profiles
	print$          Disk      Printer Drivers
	IPC$            IPC       IPC Service (polosmb server (Samba, Ubuntu))
Reconnecting with SMB1 for workgroup listing.

	Server               Comment
	---------            -------

	Workgroup            Master
	---------            -------
	WORKGROUP            POLOSMB

[+] Attempting to map shares on 10.10.151.252


[E] Can't understand response:

tree connect failed: NT_STATUS_BAD_NETWORK_NAME
//10.10.151.252/netlogon	Mapping: N/A Listing: N/A Writing: N/A
//10.10.151.252/profiles	Mapping: OK Listing: OK Writing: N/A
//10.10.151.252/print$	Mapping: DENIED Listing: N/A Writing: N/A

[E] Can't understand response:

NT_STATUS_OBJECT_NAME_NOT_FOUND listing \*
//10.10.151.252/IPC$	Mapping: N/A Listing: N/A Writing: N/A

 ===========================( Password Policy Information for 10.10.151.252 )===========================



[+] Attaching to 10.10.151.252 using a NULL share

[+] Trying protocol 139/SMB...

[+] Found domain(s):

	[+] POLOSMB
	[+] Builtin

[+] Password Info for Domain: POLOSMB

	[+] Minimum password length: 5
	[+] Password history length: None
	[+] Maximum password age: 37 days 6 hours 21 minutes 
	[+] Password Complexity Flags: 000000

		[+] Domain Refuse Password Change: 0
		[+] Domain Password Store Cleartext: 0
		[+] Domain Password Lockout Admins: 0
		[+] Domain Password No Clear Change: 0
		[+] Domain Password No Anon Change: 0
		[+] Domain Password Complex: 0

	[+] Minimum password age: None
	[+] Reset Account Lockout Counter: 30 minutes 
	[+] Locked Account Duration: 30 minutes 
	[+] Account Lockout Threshold: None
	[+] Forced Log off Time: 37 days 6 hours 21 minutes 



[+] Retieved partial password policy with rpcclient:


Password Complexity: Disabled
Minimum Password Length: 5


  ==================( Users on 10.10.151.252 via RID cycling (RIDS: 500-550,1000-1050) )==================

[+] Enumerating users using SID S-1-5-32 and logon username '', password ''

S-1-5-32-544 BUILTIN\Administrators (Local Group)
S-1-5-32-545 BUILTIN\Users (Local Group)
S-1-5-32-546 BUILTIN\Guests (Local Group)
S-1-5-32-547 BUILTIN\Power Users (Local Group)
S-1-5-32-548 BUILTIN\Account Operators (Local Group)
S-1-5-32-549 BUILTIN\Server Operators (Local Group)
S-1-5-32-550 BUILTIN\Print Operators (Local Group)

[+] Enumerating users using SID S-1-5-21-434125608-3964652802-3194254534 and logon username '', password ''

S-1-5-21-434125608-3964652802-3194254534-501 POLOSMB\nobody (Local User)
S-1-5-21-434125608-3964652802-3194254534-513 POLOSMB\None (Domain Group)

[+] Enumerating users using SID S-1-22-1 and logon username '', password ''

S-1-22-1-1000 Unix User\cactus (Local User)


```
:::

Dans le scan Nmap, on s'aperçoit que le service SMB tourne grâce aux ***ports 139 & 445***.
Sur celui de Enum4Linux, on prend connaissance de plusieurs choses :
* Le nom de la machine est **POLOSMB**
* Le domaine ou workgroup est **WORKGROUP**
* Version 6.1
* Les stratégies de sécurité des mots de passe
[...]

## Types d'exploits SMB
Bien qu'il existe des vulnérabilités telles que [CVE-2017-7494](https://www.cvedetails.com/cve/CVE-2017-7494/) qui peuvent permettre l'exécution de code à distance en exploitant SMB, on est plus susceptible de rencontrer une situation où le meilleur moyen d'accéder à un système est dû à des erreurs de configuration dans le système. Dans ce cas, on peut exploiter l'accès anonyme aux partages SMB - une erreur de configuration courante qui peut nous permettre de recueillir des informations menant à un shell.

### Décomposition de la méthode
Ainsi, à partir de l'étape d'énumération, on a :

* L'emplacement du partage SMB
* Le nom d'un partage SMB intéressant
* SMBClient
* Étant donné que l'on essaye d'accéder à un partage SMB, on a besoin d'un client pour accéder aux ressources sur les serveurs. On utilisera SMBClient car il fait partie de la suite samba par défaut.
* On peut accéder au partage SMB à distance en utilisant la syntaxe :

```shell
smbclient //[IP]/[SHARE]
```

#### TAG FONCTION

`-U [nom]` : pour spécifier l'utilisateur

`-p [port]` : pour spécifier le port

Exemple : `smbclient //10.10.151.252/profiles -U Anonymous -p 139`

Dans les cas où ces serveurs sont (très) peu sécurisés, le compte Anonymous permet une connexion sans mot de passe.
On peut ensuite grâce à lui avoir un aperçu :
```shell
┌──(rootdev㉿kali)-[~]
└─$ smbclient //10.10.151.252/profiles -U Anonymous -p 139
Password for [WORKGROUP\Anonymous]: // aucune entrée
Try "help" to get a list of possible commands.
smb: \> ls
  .                                   D        0  Tue Apr 21 13:08:23 2020
  ..                                  D        0  Tue Apr 21 12:49:56 2020
  .cache                             DH        0  Tue Apr 21 13:08:23 2020
  .profile                            H      807  Tue Apr 21 13:08:23 2020
  .sudo_as_admin_successful           H        0  Tue Apr 21 13:08:23 2020
  .bash_logout                        H      220  Tue Apr 21 13:08:23 2020
  .viminfo                            H      947  Tue Apr 21 13:08:23 2020
  Working_From_Home_Information.txt   N      358  Tue Apr 21 13:08:23 2020
  .ssh                               DH        0  Tue Apr 21 13:08:23 2020
  .bashrc                             H     3771  Tue Apr 21 13:08:23 2020
  .gnupg                             DH        0  Tue Apr 21 13:08:23 2020

		12316808 blocks of size 1024. 7583716 blocks available
smb: \>
```




<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Network Services*" :
https://tryhackme.com/r/room/networkservices
:::