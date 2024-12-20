---
sidebar: auto
redac: true
date: 2024-03-24
---
# Nmap

## Introduction & explications

<img src="./img/nmap.png" width="100" height="100">

Supposons que l'on ait reçu une adresse IP (ou plusieurs adresses IP) sur laquelle effectuer un audit de sécurité. Avant de faire quoi que ce soit d’autre, on doit **avoir une idée du « paysage » qui va être attaquer**. Cela signifie que l'on doit **établir quels services fonctionnent sur les cibles**. 

Par exemple, l’un d’eux exécute peut-être un serveur Web et un autre agit en tant que contrôleur de domaine Windows Active Directory. La première étape dans l’établissement de cette « carte » du paysage est ce qu’on appelle le **scanning des ports**. Lorsqu'un ordinateur exécute un service réseau, il ouvre une construction réseau appelée « port » pour recevoir la connexion. ***Les ports sont nécessaires pour effectuer plusieurs requêtes réseau*** ou pour disposer de plusieurs services. Lorsque l'on charge plusieurs pages Web à la fois dans un navigateur Web, le programme doit disposer d'un moyen de déterminer quel onglet charge quelle page Web. Cela se fait en établissant des connexions aux serveurs Web distants en utilisant différents ports sur l'ordinateur local. De même, si on souhaite qu'un serveur puisse exécuter plusieurs services (par exemple, on veut peut-être que le serveur Web exécute à la fois les versions HTTP et HTTPS du site), on a alors besoin d'un moyen de diriger le trafic vers le service approprié. Encore une fois, les ports sont la solution à ce problème. Les connexions réseau sont établies entre deux ports : un port ouvert en écoute sur le serveur et un port sélectionné au hasard sur l'ordinateur.

Chaque ordinateur dispose d'***un total de 65 535 ports*** disponibles. Cependant, bon nombre d'entre eux sont enregistrés comme ports standard. Par exemple, un Webservice HTTP se trouve presque toujours sur le port 80 du serveur. Un service Web HTTPS peut être trouvé sur le port 443. Windows NETBIOS peut être trouvé sur le port 139 et SMB peut être trouvé sur le port 445. 

## Options de Nmap

Nmap est accessible en tapant `nmap` dans la ligne de commande du terminal, suivi de certaines des "options" (arguments de commande qui indiquent à un programme de faire différentes choses).

```shell
┌─[root@parrot]─[~/Desktop]
└──╼ nmap -h
Nmap 7.60 ( https://nmap.org )
Usage: nmap [Scan Type(s)] [Options] {target specification}
[...] # Beaucoup d'options...
EXAMPLES:
  nmap -v -A scanme.nmap.org
  nmap -v -sn 192.168.0.0/16 10.0.0.0/8
  nmap -v -iR 10000 -Pn -p 80
```

## Options principales

* Analyse UDP `-sU`
* Analyse TCP `-sT`
* Détection de l'OS `-o`
* Versions des services executés `-sV`
* Verbose `-v` / amélioré `-vv`
* Enregistrer les résultats dans un format "*normal*" `-oN`
* Mode agressif `-a`
* Analyser un port en particulier `-p 80`
* Analyser une "*fourchette*" de ports `-p 1000-1500`
* Analyser tous les ports `-p`
* Activer un script `--script`

Lors d'une analyse des ports, il y a trop types d'analyse de base :
* TCP Connect Scans `-sT`
* SYN "Half-open" Scans `-sS`
* UDP Scans `-sU`

## Analyse SYN vs TCP vs UDP

L'analyse **TCP** Connect (`-sT`) et l'analyse **SYN** (`-sS`) sont toutes deux des méthodes pour scanner les ports TCP sur une ou plusieurs cibles, mais elles fonctionnent différemment.

### Analyse TCP Connect (`-sT`):

1. Effectue une négociation complète à trois voies avec chaque port cible.
2. Envoie une **requête TCP avec le drapeau SYN** défini.
3. Si le port est ouvert, le serveur répond avec un paquet **TCP contenant les drapeaux SYN/ACK**.
4. Si le port est fermé, le serveur répond avec un paquet **TCP contenant le drapeau RST**.
5. Si le port est filtré par un pare-feu, Nmap **ne reçoit pas de réponse**.

### Analyse SYN (`-sS`):

1. Aussi connue sous le nom d'analyse "***furtive***".
2. **Ne termine pas** la négociation à trois voies.
3. Envoie uniquement un paquet **TCP avec le drapeau SYN**.
4. Si le port est ouvert, le serveur *répond avec un paquet TCP contenant les drapeaux SYN/ACK*, mais ***Nmap envoie alors un paquet RST*** pour éviter une connexion complète.
5. Si le port est fermé, le serveur répond avec un paquet **TCP contenant le drapeau RST**.
6. Si le port est filtré par un pare-feu, Nmap peut ne pas recevoir de réponse, ou bien **le paquet SYN peut être supprimé ou usurpé par un paquet RST**.

Les avantages de l'analyse SYN comprennent sa *rapidité* et sa *furtivité*, ce qui peut *contourner certains systèmes de détection d'intrusion* et *ne pas laisser de traces dans les journaux* des applications écoutant sur les ports ouverts. Cependant, elle nécessite des autorisations sudo sur Linux et peut perturber les services instables.

:::danger Attention
Concernant la discrétion de ce scan, c'était vrai il y a quelques dizaines d'années. Désormais, avec les technologies actuelles, celle-ci n'est plus utilisée pour des scans dit *furtifs*.
:::

### Analyse UDP (`-Su`)

Lorsqu'on analyse les connexions **UDP** avec Nmap (`-sU`), il y a quelques différences fondamentales par rapport à l'analyse des connexions TCP.

Caractéristiques de l'analyse UDP avec Nmap:

* ***Sans état*** (stateless) : Contrairement aux connexions TCP qui suivent un processus de négociation à trois voies, les connexions UDP sont sans état. Cela signifie qu'elles ne nécessitent pas de poignée de main et reposent simplement sur l'envoi de paquets vers un port cible sans attente de confirmation.

* ***Difficulté de reconnaissance*** : L'absence de réponse standardisée pour les ports ouverts rend l'analyse des connexions UDP plus complexe. Nmap utilise différentes méthodes pour déterminer si un port est ouvert, fermé ou filtré.

* ***Identification des ports ouverts*** : Lorsqu'un paquet est envoyé vers un port UDP ouvert, il ne devrait normalement y avoir aucune réponse. Si Nmap ne reçoit pas de réponse, il marque le port comme "`open|filtered`". Si une réponse est reçue, le port est marqué comme "open".

* ***Identification des ports fermés*** : Lorsqu'un paquet est envoyé vers un port UDP fermé, la cible doit normalement répondre avec un paquet ICMP indiquant que le port est inaccessible. Nmap marque alors le port comme fermé.

* ***Lenteur de l'analyse*** : En raison de la nécessité de répéter les tentatives de vérification et de l'absence de réponse standardisée, l'analyse des connexions UDP est beaucoup plus lente que celle des connexions TCP. Il est recommandé d'utiliser l'option `--top-ports` pour limiter le nombre de ports analysés et réduire ainsi le temps d'analyse.

* ***Envoi de paquets vides ou avec charge utile*** : Nmap envoie généralement des requêtes UDP vides lors de l'analyse des ports. Cependant, pour les ports occupés par des services bien connus, il peut envoyer des charges utiles spécifiques au protocole pour obtenir des réponses plus précises.

En résumé, l'analyse des connexions UDP avec Nmap nécessite une approche différente en raison de la nature sans état de UDP et de la complexité de la reconnaissance des ports ouverts.

## Analyses NULL, FIN & Xmas

Les analyses de ports TCP **NULL**, **FIN** et **Xmas** sont moins couramment utilisées que les analyses plus traditionnelles comme les analyses TCP Connect ou SYN. Cependant, elles *offrent une certaine furtivité supplémentaire*, bien que relativement parlant, par rapport aux analyses SYN furtives.

Voici un bref aperçu de chacune de ces analyses :

1. ***Analyse NULL*** (`-sN`) :
    * Cette analyse envoie une requête TCP sans aucun indicateur défini.
    * Si le port est fermé, la RFC stipule que l'hôte cible doit répondre par un paquet RST.
    * Si aucun paquet RST n'est reçu en réponse, le port est marqué comme filtered ou open|filtered.

2. ***Analyse FIN*** (`-sF`) :
    * Cette analyse envoie une requête TCP avec seulement le drapeau FIN défini.
    * Encore une fois, si le port est fermé, la cible devrait répondre avec un paquet RST.
    * Si aucun paquet RST n'est reçu en réponse, le port est marqué comme filtered ou open|filtered.

3. ***Analyse Xmas*** (`-sX`) :
    * Cette analyse envoie un paquet TCP mal formé avec les indicateurs PSH, URG et FIN définis.
    * Comme pour les analyses NULL et FIN, elle attend une réponse RST si le port est fermé.
    * Si aucun paquet RST n'est reçu en réponse, le port est marqué comme filtered ou open|filtered.

L'objectif principal de ces analyses est de **contourner les pare-feu qui bloquent les paquets TCP entrants** avec le drapeau SYN activé, en envoyant des requêtes qui ne contiennent pas ce drapeau. Cependant, leur *efficacité peut être limitée par les systèmes de détection d'intrusion modernes*, qui sont de plus en plus capables de détecter et de bloquer ces types d'analyses.

Il est également important de noter que la réponse attendue pour les ports ouverts est similaire à celle des analyses UDP : aucune réponse. Cependant, cela peut également se produire si le port est protégé par un pare-feu, donc ces analyses ne peuvent pas toujours faire la distinction entre un port ouvert et un port protégé.

## Analyse ICMP

Effectuer un balayage de ping est souvent la première étape lors de l'exploration d'un réseau dans le cadre d'un test de pénétration ou d'une évaluation de la sécurité. Cela permet d'identifier les hôtes actifs sur le réseau. 

il faut utiliser l'option `-sn` en conjonction avec des plages d'adresses IP ou une notation CIDR pour spécifier le réseau à analyser. Par exemple :

```shell
nmap -sn 192.168.0.1-254
```

ou

```shell
nmap -sn 192.168.0.0/24
```

L'option `-sn` indique à Nmap de ne pas analyser les ports, se concentrant plutôt sur l'envoi de paquets ICMP Echo Request (ou des requêtes ARP sur un réseau local si Nmap est exécuté avec sudo ou en tant qu'utilisateur root) pour déterminer quels hôtes sont actifs sur le réseau.

En plus des requêtes ICMP, l'option `-sn` peut également inclure l'envoi de paquets TCP SYN au port 443 de chaque hôte, ainsi que des paquets TCP ACK (ou SYN si Nmap n'est pas exécuté en tant que root) au port 80. Ces paquets sont envoyés pour augmenter les chances de détecter des hôtes qui pourraient filtrer les requêtes ICMP mais qui sont toujours accessibles via TCP sur ces ports courants.

Une fois que le balayage est terminé, Nmap affichera une liste des adresses IP qui ont répondu aux requêtes ICMP ou aux requêtes ARP, indiquant ainsi les hôtes actifs sur le réseau. Cela fournit une carte de la structure du réseau, qui peut être utilisée comme point de départ pour des analyses plus poussées.

## Scripts NSE

Le moteur de script Nmap (NSE) offre une polyvalence impressionnante à Nmap, lui permettant d'effectuer une gamme étendue de tâches de reconnaissance et de sécurité. Les scripts NSE sont écrits dans le langage de programmation ***Lua*** et peuvent être utilisés pour effectuer diverses tâches : de la recherche de vulnérabilités à l'automatisation de leurs exploits.

* ***safe*** : Ces scripts sont considérés comme sans risque pour la cible. Ils sont conçus pour recueillir des informations sans perturber ou affecter le fonctionnement normal des systèmes cibles.

* ***intrusive*** : Les scripts de cette catégorie sont plus intrusifs et peuvent potentiellement affecter la cible. Ils peuvent impliquer des activités telles que le balayage de ports, la recherche de vulnérabilités ou d'autres actions qui pourraient être considérées comme des signes d'activité suspecte.

* ***vuln*** : Les scripts de cette catégorie sont axés sur la recherche de vulnérabilités sur les cibles. Ils peuvent identifier les vulnérabilités connues et les exposer pour permettre des actions correctives.

* ***exploit*** : Ces scripts tentent d'exploiter les vulnérabilités identifiées pour obtenir un accès non autorisé ou exécuter des actions malveillantes sur les cibles. Ils sont plus agressifs et doivent être utilisés avec précaution.

* ***auth*** : Les scripts d'authentification tentent de contourner les mécanismes d'authentification des services en cours d'exécution sur les cibles. Cela peut inclure des actions telles que la connexion anonyme à un serveur FTP ou la tentative de connexion avec des informations d'identification par défaut.

* ***brute*** : Ces scripts sont utilisés pour la force brute des informations d'identification des services. Ils tentent de deviner les identifiants en utilisant une approche par essais et erreurs.

* ***discovery*** : Les scripts de découverte sont utilisés pour interroger les services en cours d'exécution sur les cibles afin d'obtenir des informations supplémentaires sur le réseau. Cela peut inclure des actions telles que l'interrogation d'un serveur SNMP pour obtenir des informations sur les périphériques réseau.

Il est important de noter que l'utilisation de certains scripts, en particulier ceux de catégories intrusives, vulnérabilité et exploit, peut avoir un impact sur les systèmes cibles et peut être considérée comme une activité malveillante. Il est donc essentiel de les utiliser avec prudence et de respecter les lois et réglementations en matière de sécurité informatique.

::: tip Lien externe
Davantages d'informations sur les scripts NSE sont disponible [ici](https://nmap.org/book/nse-usage.html).
:::

### Utilisation des scripts NSE avec nmap

Pour activer les scripts NSE lors de l'exécution de scans avec Nmap, l'utilisateur utilise le commutateur `--script`. Ce commutateur permet de spécifier la catégorie de scripts à exécuter. Par exemple, pour exécuter des scripts de détection de vulnérabilités, l'utilisateur utilise `--script=vuln`.

D'autres catégories telles que safe pour les scripts sûrs peuvent également être spécifiées de la même manière.
Exécution de Scripts Spécifiques

Pour exécuter un script spécifique, l'utilisateur utilise la syntaxe `--script=<nom-du-script>`. Par exemple, pour exécuter un script appelé `http-fileupload-exploiter`, l'utilisateur utilise `--script=http-fileupload-exploiter`.
Exécution de Scripts Multiples

Il est possible d'exécuter plusieurs scripts simultanément en les séparant par des virgules après le commutateur `--script`. Par exemple, pour exécuter les scripts `smb-enum-users` et `smb-enum-shares` en même temps, l'utilisateur utilise `--script=smb-enum-users`,`smb-enum-shares`.
Arguments des Scripts

Certains scripts nécessitent des arguments pour fonctionner correctement. L'utilisateur peut fournir ces arguments en utilisant le commutateur `--script-args`. Les arguments sont séparés par des virgules et connectés au script correspondant par des points (`<nom-du-script>.<argument>`).
Exemple d'utilisation d'arguments

Par exemple, le script `http-put` est utilisé pour télécharger des fichiers en utilisant la méthode PUT. Il nécessite deux arguments : l'URL vers laquelle télécharger le fichier et l'emplacement du fichier sur le disque. 

```shell
nmap -p 80 --script http-put --script-args http-put.url='/dav/shell.php',http-put.file='./shell.php'
```

Les scripts Nmap sont accompagnés de menus d'aide intégrés, accessibles en utilisant la commande `nmap --script-help <nom-du-script>`. Bien que ces aides ne soient pas aussi détaillées que la documentation en ligne, elles fournissent des informations utiles sur l'utilisation du script.

En suivant cette approche structurée, les utilisateurs peuvent mieux organiser leurs informations sur l'utilisation des scripts NSE avec Nmap.

### Recherche et installation de scripts dans Nmap

Pour trouver des scripts utilisables avec Nmap, les utilisateurs disposent de deux options complémentaires :

1. ***Page Nmap officielle*** : Cette page répertorie tous les scripts officiels de Nmap. Les utilisateurs peuvent y trouver une liste complète des scripts disponibles avec leurs descriptions et leurs cas d'utilisation.

2. ***Stockage local sur la machine*** : Sous Linux, Nmap stocke ses scripts dans le répertoire ` ` par défaut. C'est là que Nmap recherche les scripts lorsque spécifiés. Pour rechercher les scripts localement, deux méthodes peuvent être utilisées :

    * **Utilisation du fichier `script.db`** : Bien qu'étant un fichier texte formaté et non une base de données réelle, **script.db** contient les noms de fichiers et les catégories pour chaque script disponible. Par exemple, en utilisant la commande `grep "ftp" /usr/share/nmap/scripts/script.db`, les utilisateurs peuvent rechercher des scripts liés au FTP.

    * **Utilisation de la commande `ls`** : En utilisant `ls -l /usr/share/nmap/scripts/*ftp*`, les utilisateurs peuvent obtenir une liste des scripts liés au FTP. L'utilisation d'astérisques (*) de chaque côté du terme de recherche permet une recherche plus flexible.

#### Installation de nouveaux scripts

Si un script recherché est manquant localement, il peut être installé de deux manières :

1. ***Mise à jour via APT*** : La commande `sudo apt update && sudo apt install nmap` résout souvent ce problème en mettant à jour Nmap avec les derniers scripts disponibles.

2. ***Installation manuelle*** : Les utilisateurs peuvent également télécharger manuellement le script depuis le site de Nmap en utilisant `sudo wget -O /usr/share/nmap/scripts/<nom-du-script>.nse https://svn.nmap.org/nmap/scripts/<nom-du-script>.nse`. Ensuite, exécutez `nmap --script-updatedb` pour mettre à jour le fichier **script.db** avec le nouveau script téléchargé.

Il est important de noter que la même commande "**updatedb**" est nécessaire si les utilisateurs créent leurs propres scripts NSE et les ajoutent à Nmap. Cette tâche est gérable avec des connaissances de base en Lua.

## Esquiver les firewall

Contourner les configurations de pare-feu est crucial lors de l'exécution de scans de sécurité avec Nmap. Voici quelques techniques et options de commutation utiles pour contourner les pare-feu courants :

* ***Option `-Pn`*** : Cette option indique à Nmap de ne pas envoyer de requêtes ping à l'hôte avant de l'analyser. Cela permet à Nmap de traiter tous les hôtes cibles comme étant vivants, contournant ainsi le blocage ICMP. Cependant, cela peut entraîner des temps d'analyse plus longs, car Nmap vérifiera chaque port spécifié même si l'hôte est réellement mort.

* ***Requêtes ARP*** : Si vous êtes sur le réseau local, Nmap peut également utiliser les requêtes ARP pour déterminer l'activité de l'hôte. Cela peut contourner le blocage ICMP et fournir une détection précise des hôtes actifs.

* ***Options de fragmentation*** :
        1. L'option `-f` fragmente les paquets en morceaux plus petits, ce qui rend moins probable qu'ils soient détectés par un pare-feu ou un IDS.
        2. L'option `--mtu <number>` permet de spécifier une taille maximale d'unité de transmission pour les paquets envoyés, offrant un contrôle plus précis sur la fragmentation.

* ***Option `--scan-delay <time>ms`*** : Cette option ajoute un délai entre les paquets envoyés. Elle est utile pour éviter les déclencheurs de pare-feu ou d'IDS temporels et peut également stabiliser les scans sur des réseaux instables.

* ***Option `--badsum`*** : Cette option génère une somme de contrôle invalide pour les paquets. Bien qu'une véritable pile TCP/IP abandonnerait un tel paquet, les pare-feu peuvent répondre automatiquement sans vérifier la somme de contrôle. Cette option peut être utilisée pour détecter la présence d'un pare-feu ou d'un IDS.

<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Nmap*" :
https://tryhackme.com/r/module/nmap
:::

