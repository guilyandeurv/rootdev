---
sidebar: auto
redac: true
date: 2024-03-17
---
# La reconnaissance passive

La reconnaissance passive est le premier acte d'un test d'intrusion. Il permet d'en apprendre davantage sur la cible en terme de connaissances publiques.
Cette étape à pour intérêt de récupérer quelconque information qui pourrait se montrer utile dans l'intrusion plus tard.

## Quelles informations sont utiles à récupérer ?

1. L'adresse ou les adresses IP de la cible

Selon la cible, plusieurs adresses IP pourraient être collectées. Une grande entreprise possède généralement plusieurs sites dans le monde. Il y a le siège social, mais aussi supposons des usines, des agences, etc... Toutes ces informations sont bonnes à prendre, dont notamment les informations réseaux.

2. Les adresses mail/numéros des employés

Ces informations se montrent utiles lors d'une attaque d'ingénierie sociale par exemple.

3. Les technologies utilisées par la cible

Combien de réseau possède la cible ? Quels systèmes d'exploitation et en quelles versions utilise-t-elle ? Quels logiciels sont utilisés dans l'entreprise et en quelles versions ? Comment le site web a été construit ?

## Récupérer des adresses IP et physiques

Quoi de plus commun que le ping pour récupérer une adresse IP d'un site web ?
```shell
ping https://eugene-montel.mon-ent-occitanie.fr/
Envoi d’une requête 'ping' sur entmip-prod-new.nfrance.com [80.247.224.232] avec 32 octets de données # Adresse IP du serveur web
```

Il se peut que dans de nombreux cas le ping ne réponde pas, il semble simplement que la cible bloque les sondes PING.

### NSLookup

Utilisation :

```shell
┌─[✗]─[root@parrot]─[~/Desktop]
└──╼ $nslookup https://eugene-montel.mon-ent-occitanie.fr
Server:		192.168.23.2 # Adresse IP locale du routeur où la commande a été lancée -> pas la cible
Address:	192.168.23.2#53 # Same

Non-authoritative answer:
https://eugene-montel.mon-ent-occitanie.fr	canonical name = www.mon-ent-occitanie.fr.
www.mon-ent-occitanie.fr	canonical name = entmip-prod-new.nfrance.com.
Name:	entmip-prod-new.nfrance.com
Address: 80.247.238.68
Name:	entmip-prod-new.nfrance.com
Address: 80.247.238.67
Name:	entmip-prod-new.nfrance.com
Address: 80.247.224.231
Name:	entmip-prod-new.nfrance.com
Address: 80.247.224.232 # Adresse pingée
```

### WHOIS Tool

[Who.is](https://who.is) est un site web permettant l'affichage des données d'un site, tel que l'adresse IP ou physique. Ici avec l'exemple de *mon-ent-occitanie.fr* :
```shell
domain:                        mon-ent-occitanie.fr # Domaine ciblée
status:                        ACTIVE # Statut : actif ou non
eppstatus:                     active
hold:                          NO
holder-c:                      CTC1052479-FRNIC # FRNIC = association du nommage Internet
admin-c:                       CTC1052480-FRNIC
tech-c:                        S274621-FRNIC
registrar:                     BDL SYSTEMES dba Systonic # Hébergeur
Expiry Date:                   2024-05-03T13:24:55Z # Date d'expiration du nom de domaine
created:                       2019-05-03T13:24:55Z # Date de création du nom de domaine
last-update:                   2023-06-30T22:11:02.975296Z # Dernière màj du nom de domaine
[...]
registrar:                     BDL SYSTEMES dba Systonic # Entitée ayant enregistré le nom de domaine
address:                       Bâtiment Canopée # Adresse physique
address:                       10 rue Thomas Edison  # Adresse physique
address:                       33600 PESSAC # Adresse physique
country:                       FR # Adresse physique
phone:                         +33.557264444 # numéro de téléphone de l'entitée
e-mail:                        
website:                       https://www.systonic.fr/ # site web de l'entitée
anonymous:                     No # Anonyme ou non
registered:                    2013-07-15T00:00:00Z # Date d'enregistrement de l'entitée
[...]
type:                          ORGANIZATION # type d'entitée
contact:                       Region Occitanie DIN SIR # Contact lié au domaine
address:                       Region Occitanie DIN SIR
address:                       22 boulevard du Marechal Juin # Adresse physique du contact
address:                       31406 Toulouse cedex 9 # Adresse physique du contact
country:                       FR # Adresse physique du contact
phone:                         +33.561335050 # N° de tel du contact
e-mail:                        *empty*
```

Cela fonctionne aussi par ligne de commande :

```shell
┌─[✗]─[root@parrot]─[~/Desktop]
└──╼ $whois mon-ent-occitanie.fr
%%
%% This is the AFNIC Whois server.
%%
%% complete date format: YYYY-MM-DDThh:mm:ssZ
%%
%% Rights restricted by copyright.
%% See https://www.afnic.fr/en/domain-names-and-support/everything-there-is-to-know-about-domain-names/find-a-domain-name-or-a-holder-using-whois/
%%
%%

domain:                        mon-ent-occitanie.fr
```

## Outils de recherche de fuites de données

### IntelligenceX (IntelX.io)

Outre le fait qu'il faut poser 2 SMIC pour une license, ce site web permet de connaître les fuites de données en lien avec notre cible, que ce soit par adresse IP, URL, adresse mail...
Une fois l'informatique trouvée sur une potentielle fuite, plus qu'à rechercher les informations sur le World Wide Web.

[IntelligenceX](https://intelx.io/)

### Have i been pwned? 

Ce site recueille toutes les fuites de données par une recherche d'adresse mail.
Supposons qu'une fuite ait pu se produire avec une adresse mail en lien avec notre cible, cela nous fait gagner du temps sur la recherche d'information si l'on a la possibilité de retrouver celle-ci.

[Have i been pwned?](https://haveibeenpwned.com/)

## Connaître les technologies utilisées par un site web

### WhatWeb

Les options proposées par WhatWeb :

```shell
┌─[✗]─[root@parrot]─[~/Desktop]
└──╼ $whatweb

Usage: whatweb [options] <URLs>

  <TARGETs>			            Enter URLs, hostnames, IP addresses, filenames or
  				                IP ranges in CIDR, x.x.x-x, or x.x.x.x-x.x.x.x
  				                format.
  --input-file=FILE, -i		    Read targets from a file.

  --aggression, -a=LEVEL	    Set the aggression level. Default: 1.
  1. Stealthy			        Makes one HTTP request per target and also
  				                follows redirects.
  3. Aggressive			        If a level 1 plugin is matched, additional
  				                requests will be made.
  4. Heavy                      Makes a lot of HTTP requests per target. URLs from all plugins are attempted.

  --list-plugins, -l		    List all plugins.
  --info-plugins, -I=[SEARCH]	List all plugins with detailed information.
				                Optionally search with a keyword.

  --verbose, -v			        Verbose output includes plugin descriptions.

Note: This is the short usage help. For the complete usage help use -h or --help.
```

Comme l'indique la note, ici n'apparaît que les principales options, cependant, en utilisant la commande `whatweb --help`, on peut voir de nombreuses options.

Exemple d'utilsation sur *mon-ent-occitanie.fr* :

```shell
┌─[✗]─[root@parrot]─[~/Desktop]
└──╼ $whatweb mon-ent-occitanie.fr -v
[...]
Detected Plugins:
[ HTML5 ]
	HTML version 5, detected by the doctype declaration 
[ MetaGenerator ]
	This plugin identifies meta generator tags and extracts its 
	value. 

	String       : Skolengo
[ Script ]
	This plugin detects instances of script HTML elements and 
	returns the script language/type. 

	String       : text/javascript
[ Strict-Transport-Security ]
	Strict-Transport-Security is an HTTP header that restricts 
	a web browser from accessing a website without the security 
	of the HTTPS protocol. 

	String       : max-age=15768000; includeSubDomains
[...]
```

On peut lire ici quelques technologies utilisées par le site ciblé, avec une description de ceux-ci grâce à l'option `-v` dans la commande

:::tip Pièce jointe
Pour des questions de confort de lecture, le résultat complet est [récupérable ici](./assets/whatweb-resultats.txt)
:::

## Récupérer des adresses mail & pseudonymes

### theHarvester

Démarrer l'outil :

```shell

```

### Sherlock

L'outil Sherlock scan les sites web en recherchant le nom d'utilisateur.
Il s'utilise de cette manière :

```shell
python3 sherlock.py [username] # -o pour sauvegarder les résultats
```

## Autres outils pertinents

### RedHawk

Un outil à installer via GitHub, qui peut se montrer complet au niveau des options qu'il propose, est RedHawk.
Qui se lance avec la commande php rhawk.php une fois dans le dossier du projet :

```shell
┌─[root@parrot]─[/bin/RED_HAWK]
└──╼ $php rhawk.php 
```

Et ci-dessous les options que cet outil propose :

```shell
     +--------------------------------------------------------------+
      +                  List Of Scans Or Actions                    +
      +--------------------------------------------------------------+

             Scanning Site : https://monsite.fr
      

 [0]  Basic Recon (Site Title, IP Address, CMS, Cloudflare Detection, Robots.txt Scanner) 
 [1]  Whois Lookup 
 [2]  Geo-IP Lookup 
 [3]  Grab Banners 
 [4]  DNS Lookup 
 [5]  Subnet Calculator 
 [6]  NMAP Port Scan 
 [7]  Subdomain Scanner 
 [8]  Reverse IP Lookup & CMS Detection 
 [9]  SQLi Scanner (Finds Links With Parameter And Scans For Error Based SQLi) 
 [10] Bloggers View (Information That Bloggers Might Be Interested In) 
 [11] WordPress Scan (Only If The Target Site Runs On WP) 
 [12] Crawler 
 [13] MX Lookup 
 [A]  Scan For Everything - (The Old Lame Scanner) 
 [F]  Fix (Checks For Required Modules and Installs Missing Ones) 
 [U]  Check For Updates 
 [B]  Scan Another Website (Back To Site Selection) 
 [Q]  Quit! 
```

<hr>
<br>

::: info Sources
Ce cours s'inspire du cours "Complete Ethical Hacking Bootcamp" disponible sur Udemy :

https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/
:::

