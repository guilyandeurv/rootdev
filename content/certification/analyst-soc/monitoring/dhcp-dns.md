---
sidebar: auto
date: 2024-12-19
---

# Analyse SOC : Services communs : DHCP, DNS
<ESDInfo />

## DHCP, l'ami du rogue

Sécuriser le DHCP n'est pas une chose simple, un attaquant peut facilement se faire passer pour un serveur DHCP et ainsi proposer une mauvaise configuration réseau à ses victimes. L'idéal est d'intégrer un service tel que le NAC (*Network Access Control*) et du 802.1X.

## Le NAC

Le ***NAC*** (*Network Access Control*) est une approche de sécurité qui vise à contrôler l'accès des dispositifs réseau à un réseau informatique. Il permet d'assurer que seuls les utilisateurs et dispositifs autorisés puissent accéder aux ressources du réseau, tout en maintenant la conformité aux politiques de sécurité définies.

### Principes clés du NAC :
* ***Authentification*** : Le NAC nécessite que les utilisateurs et les dispositifs s'authentifient avant d'accéder au réseau. Cela peut inclure des méthodes comme l'authentification par mot de passe, les certificats numériques ou l'authentification à deux facteurs.

* ***Évaluation de la conformité*** : Avant de donner accès, le NAC évalue si les dispositifs respectent les politiques de sécurité, par exemple, si le système d'exploitation est à jour, si un antivirus est installé et actif, etc.

* ***Contrôle d'accès*** : En fonction de l'évaluation de conformité, le NAC peut accorder un accès total, un accès limité (par exemple, à des ressources spécifiques) ou refuser complètement l'accès.

* ***Segmentation du réseau*** : Les dispositifs peuvent être placés sur des segments de réseau séparés en fonction de leur niveau de sécurité ou de leur rôle, limitant ainsi l'accès aux ressources sensibles.

* ***Surveillance et réponse*** : Le NAC permet également de surveiller les activités sur le réseau et de répondre aux comportements suspects ou non conformes en ajustant les accès ou en émettant des alertes.

En résumé, le NAC est un outil essentiel pour renforcer la sécurité d'un réseau en s'assurant que seuls les dispositifs conformes et autorisés peuvent y accéder, réduisant ainsi le risque d'intrusion et de compromission.

## Le 802.1X

Le 802.1X est un standard de réseau qui fournit un cadre pour le contrôle d'accès aux réseaux informatiques. Il est principalement utilisé dans les environnements Ethernet et Wi-Fi pour sécuriser l'accès au réseau en authentifiant les dispositifs avant de leur permettre d'accéder à des ressources réseau.

### Principes clés du 802.1X :
* ***Architecture*** : Le 802.1X repose sur un modèle client-serveur composé de trois entités principales :

* ***Supplicant*** : Le dispositif qui souhaite se connecter au réseau (par exemple, un ordinateur ou un smartphone). Il doit fournir des informations d'identification.
* ***Authenticator*** : L'équipement réseau (comme un switch ou un point d'accès sans fil) qui contrôle l'accès au réseau. Il agit comme un intermédiaire entre le supplicant et le serveur d'authentification.
* ***Authentication Server*** : Un serveur (généralement utilisant le protocole RADIUS) qui vérifie les informations d'identification fournies par le supplicant.
* ***Processus d'authentification*** : Lorsqu'un supplicant tente de se connecter, l'authenticator lui demande ses informations d'identification. Ces informations sont ensuite envoyées à l'authentication server pour vérification. Si l'authentification réussit, l'authenticator permet au supplicant d'accéder au réseau ; sinon, l'accès est refusé.

* ***Sécurité*** : Le 802.1X utilise des méthodes d'authentification sécurisées, comme EAP (Extensible Authentication Protocol), pour protéger les informations d'identification pendant le processus de connexion.

* ***Contrôle d'accès dynamique*** : En fonction des résultats de l'authentification, le 802.1X peut appliquer des politiques de contrôle d'accès dynamiques, permettant un accès complet ou restreint aux ressources réseau.

En résumé, le 802.1X est une méthode efficace pour sécuriser l'accès aux réseaux en demandant une authentification préalable, ce qui contribue à protéger les ressources réseau contre les accès non autorisés.

## DNS, une collecte très lourde

Le DNS représente une grande partie du réseau légitime dans une organisation. Il est sollicité en permanence mais peut être central à une cyberattaque.

Les éléments à identifier sont :

* l'âge des domaines afin d'éviter les domaines créés pour une cyberattaque
* de l'hexadécimal dans les FQDN (***F***ully ***Q***ualified ***D***omain ***N***ame)
* long FQDN
* utiliser des blacklists de domaine
* des requêtes TXT, SRV illégitimes
* serveur DNS non autorisé en configuration (8.8.8.8, 8.8.4.4)

Dans un tableau de bord SIEM, il est intéressant de surveiller la quantité de requête DNS sur la base d'une moyenne journalière. En effet, une augmentation du trafic DNS pourrait soulever une suspicion d'exfiltration et donc déclencher une alarme.