---
sidebar: auto
---
# Opérations et réponses aux incidents
<Badge type="tip" text="Rédigé le 25/03/2024" />

## Utilisation d'outils appropriés pour évaluer la sécurité organisationnelle (Objectif 4.1)

Dans cet objectif, il est essentiel d'être familiarisé avec un large éventail d'outils de sécurité. 

### Reconnaissance et découverte du réseau
1. ***Traceroute***: Identifie le chemin réseau entre deux systèmes.
2. ***Ping***: Teste si un système distant est connecté et opérationnel sur le réseau.
3. ***Hping***: Version personnalisable de Ping permettant de modifier les paquets utilisés dans l'analyse.
4. ***PathPing***: Outil Windows combinant les fonctionnalités de Ping et Traceroute.
5. ***Netstat***: Affiche les connexions réseau actives sur un périphérique.
6. ***nc*** (netcat): Permet d'envoyer et de recevoir du texte brut via une connexion réseau.
7. ***ipconfig*** (Windows) / ***ifconfig*** (Mac et Linux): Affiche et modifie la configuration d'une interface réseau.
8. ***nslookup*** et ***dig***: Effectuent des requêtes DNS.
9. ***ARP***: Effectue des recherches à l'aide du protocole de résolution d'adresses.

### Manipulation de fichiers

Ces commandes sont couramment utilisées sur les systèmes Linux :

1. ***head***: Affiche les premières lignes d'un fichier.
2. ***tail***: Affiche les dernières lignes d'un fichier.
3. ***cat***: Affiche tout le contenu d'un fichier.
4. ***grep***: Recherche du contenu dans un fichier.
5. ***chmod***: Modifie les permissions d'un fichier.
6. ***logger***: Envoie des entrées de journal à un serveur de journaux centralisé.

### Environnements de shell et de script

1. ***SSH***: Accès sécurisé aux systèmes distants (Linux).
2. ***PowerShell***: Environnement de script pour le contrôle administratif des systèmes Windows.
3. ***Python***: Langage de programmation généraliste utilisé pour l'administration système.
4. ***OpenSSL***: Implémentation open-source du protocole TLS.

### Outils de capture et de rejeu de paquets

1. ***tcpdump***: Utilitaire en ligne de commande pour capturer et enregistrer le trafic réseau.
2. ***Wireshark***: Outil graphique offrant des fonctionnalités similaires à tcpdump.
3. ***tcpreplay***: Rejoue le trafic réseau capturé avec tcpdump ou Wireshark.

### Outils forensiques

1. ***dd***: Commande de sauvegarde de disque pour créer des images forensiques de disques durs.
2. ***mem dump***: Sauvegarde le contenu actuel de la mémoire de l'ordinateur.
3. ***WinHex***: Éditeur hexadécimal utile en forensique.
4. ***FTK*** et ***Autopsy***: Suites fournissant des capacités forensiques avancées.

#### En plus de ces catégories d'outils, il est également important de connaître l'utilisation de :

1. ***Cadres d'exploitation***: Pour automatiser les tests de pénétration et autres activités de sécurité.
2. ***Crackeurs de mots de passe***: Pour tenter des attaques de force brute contre les fichiers de mots de passe.
3. ***Outils de désinfection de données***: Pour purger définitivement les informations des supports.

Ces outils sont essentiels pour préparer l'examen Security+ et pour mener à bien les opérations de sécurité dans une organisation.

## Importance des politiques, processus et procédures (Objectif 4.2)

La mise en place d'un plan de réponse aux incidents est essentielle pour toute organisation afin de détecter et de répondre efficacement aux incidents de sécurité. Le processus de réponse aux incidents standard comprend six étapes principales :

#### 1. Préparation

Avant qu'un incident ne se produise, il est crucial de mettre en place les bonnes politiques et procédures, de disposer des ressources nécessaires et de former les personnes pour réagir efficacement en cas d'incident de sécurité.

#### 2. Identification

Lorsqu'un incident de sécurité est détecté par le centre opérationnel de sécurité de l'organisation ou d'autres ressources, l'étape d'identification commence.

#### 3. Containment (Contenir)

La priorité est d'isoler les dommages causés par l'incident de sécurité pour limiter sa propagation. Cela peut impliquer la déconnexion des systèmes du réseau ou d'autres actions pour contenir les dommages.

#### 4. Éradication

Une fois l'incident contenu, l'étape d'éradication vise à annuler les effets de l'incident de sécurité et à supprimer les ressources compromises de nos réseaux.

#### 5. Récupération

L'organisation restaure et reprend ses opérations normales après avoir éradiqué l'incident.

#### 6. Leçons apprises

Une session d'apprentissage est organisée pour réunir tous les acteurs principaux impliqués dans la réponse à l'incident. Ils examinent l'incident de sécurité et identifient des leçons à tirer pour améliorer la capacité de l'organisation à détecter et à répondre à de futurs incidents.

### Rôles des exercices

Les exercices sont essentiels pour préparer l'équipe de réponse aux incidents aux futurs incidents :

1. ***Exercices de table***: Réunissent les membres de l'équipe pour discuter de leurs rôles dans le processus de réponse aux incidents et peut-être simuler un scénario fourni par un facilitateur.
2. ***Exercices de marche structurée***: Similaires aux exercices de table, mais impliquent une revue plus détaillée des procédures de réponse aux incidents.
3. ***Exercices de simulation***: Créent un incident de sécurité fictif auquel l'équipe répond comme s'il s'agissait d'un incident réel.

### Gestion des parties prenantes

Il est crucial de gérer efficacement les parties prenantes, telles que les employés, les experts en la matière, la direction, les forces de l'ordre et les médias, pour assurer une communication appropriée pendant la réponse à l'incident.

### Alignement avec la continuité des opérations

La réponse aux incidents est étroitement liée aux efforts de planification de la continuité des opérations de l'organisation. L'équipe de réponse aux incidents doit donc également être familière avec le plan de continuité des activités et le plan de reprise après sinistre.

### Gestion des enregistrements

Tous les enregistrements générés pendant la réponse à l'incident doivent être conformes à la politique de conservation de l'organisation, qui décrit pendant combien de temps ces enregistrements seront conservés.

En résumé, comprendre l'importance des politiques, processus et procédures de réponse aux incidents est crucial pour réussir l'examen Security+.

## Utilisation de sources de données appropriées pour soutenir une enquête (Objectif 4.3)

Les intervenants en cas d'incident disposent d'une grande quantité d'informations, notamment les résultats des analyses de vulnérabilités. Ces résultats sont cruciaux pour aider les intervenants à comprendre comment un intrus aurait pu accéder aux systèmes et identifier d'autres systèmes susceptibles d'être vulnérables aux mêmes exploits.

### Rôle des systèmes de gestion des informations et des événements de sécurité (SIEM)

Les SIEM jouent un rôle important dans la facilitation de la réponse aux incidents, car ils servent de points d'agrégation centralisés pour tous les journaux de sécurité et autres informations de l'organisation. Les équipes de réponse aux incidents peuvent utiliser ces systèmes SIEM pour effectuer des analyses de tendances, répondre aux alertes et corréler les événements se produisant sur de nombreux systèmes différents.

### Sources de données clés

1. ***Journaux de sécurité***: Fournis par divers dispositifs tels que les routeurs, les systèmes d'exploitation, les applications, les serveurs Web, les serveurs DNS, etc.
2. ***Surveillance du réseau***: Utilisation de moniteurs de bande passante, de journaux NetFlow et d'analyseurs de protocoles.
3. ***Métadonnées***: Informations de base attachées aux messages électroniques, échanges web, fichiers et communications mobiles.

### Technologies standardisées

Les dispositifs de collecte de données rapportent aux SIEM en utilisant des technologies standardisées comme le protocole **syslog**, offrant ainsi une norme ouverte pour la communication des entrées de journal de sécurité.

### Importance de l'analyse des données

L'analyse et la corrélation des données provenant de différentes sources peuvent fournir des informations cruciales sur l'évolution d'un incident de sécurité. Les métadonnées, en particulier, peuvent révéler des indices importants sur l'origine des fichiers et des communications.


Comprendre l'utilisation des sources de données appropriées pour soutenir une enquête est essentiel pour réussir l'examen Security+. Ces informations permettent aux intervenants en cas d'incident de comprendre la portée et l'impact d'un incident de sécurité et de prendre les mesures nécessaires pour y répondre de manière appropriée.

## Application de techniques d'atténuation ou de contrôles pour sécuriser un environnement (Objectif 4.4)

L'objectif principal de ce sujet est la récupération, la restauration des opérations d'une organisation, non seulement à l'état dans lequel elles étaient avant un incident, mais à un état encore plus sécurisé qui ne soit pas vulnérable au même type d'incident.

### Reconfigurer les solutions de sécurité des points d'extrémité

L'une des mesures les plus importantes à prendre en réponse à un incident de sécurité est la reconfiguration des solutions de sécurité des points d'extrémité pour éviter qu'un incident similaire ne se reproduise à l'avenir. Cela peut impliquer la mise en place d'une quarantaine où la sécurité des points d'extrémité est testée avant qu'un système ne soit autorisé à rejoindre le réseau. Les dispositifs qui ne répondent pas aux normes de sécurité sont placés sur le réseau de quarantaine, où ils peuvent accéder aux ressources nécessaires pour mettre à jour leur configuration de sécurité, mais ils n'ont pas accès à d'autres ressources du réseau.

### Contrôles des applications et autres changements de configuration

Pendant la phase de récupération, les intervenants en cas d'incident peuvent également apporter d'autres modifications de configuration aux dispositifs de sécurité, telles que la mise à jour des règles de pare-feu, la reconfiguration des politiques de gestion des appareils mobiles, la mise en œuvre de technologies de prévention de la perte de données, la mise à jour ou la révocation de certificats numériques, et la mise en œuvre ou la reconfiguration de solutions de filtrage de contenu limitant les ressources Web accessibles par les utilisateurs.

### Stratégies de sécurité réseau: segmentation, isolation et retrait

1. ***Segmentation***: Divise les réseaux en segments logiques, regroupés par types d'utilisateurs ou de systèmes. Cela permet de contenir la propagation d'une attaque à partir de systèmes compromis sans alerter l'attaquant sur la détection de son activité.
2. ***Isolation***: Déplace les systèmes compromis vers un réseau complètement déconnecté du reste du réseau.
3. ***Retrait***: Déconnecte complètement les systèmes impactés de tout réseau.

### Technologie SOAR (Sécurité, Orchestration, Automatisation et Réponse)

Les plates-formes SOAR utilisent des livres d'exécution et des scénarios pour automatiser les réponses aux incidents de sécurité. Elles sont étroitement intégrées aux solutions de gestion des informations et des événements de sécurité (SIEM), de sorte que lorsqu'un produit SIEM détecte un incident de sécurité potentiel, la solution SOAR peut mettre en œuvre automatiquement une réponse rapide qui protège l'organisation contre une attaque.


Comprendre les techniques d'atténuation et de contrôles pour sécuriser un environnement pendant un incident de sécurité est essentiel pour réussir l'examen Security+. Ces mesures garantissent la restauration des opérations de l'organisation dans un état sécurisé et protègent contre de futures attaques similaires.

## Explication des aspects clés de la cyberforensique (Objectif 4.5)

Les professionnels de la sécurité doivent être familiers avec les normes de documentation pour les preuves collectées lors d'une intervention en cas d'incident. Cela inclut la garantie que les preuves collectées seront admissibles en justice, tout en maintenant une chaîne de garde qui documente le processus utilisé pour collecter les preuves et chaque personne ayant eu contact avec ces preuves depuis leur collecte jusqu'à leur présentation en justice.

### Éléments clés:

#### 1. Chaîne de garde:
* Documenter le processus de collecte des preuves.
* Identifier chaque personne en contact avec les preuves.
#### 2. Chronologie détaillée:
* Séquence d'événements avec horodatage.
* Offset de temps si les horloges système ne sont pas synchronisées.

#### 3. Attributs et étiquetage des preuves:
* Attributs importants pour l'enquête.
* Documentation des entretiens, peut-être via des enregistrements vidéo.

#### 4. Maintien des journaux d'événements:
* Récapituler les actions lors de l'intervention.
* Documenter ce qui s'est passé pendant l'effort d'intervention.

#### 5. Procédure de conservation légale:
* Préservation des enregistrements pouvant être utilisés en justice.

#### 6. Ordre de volatilité:
* Collecte des preuves selon le niveau de volatilité.
* Mémoire volatile (RAM) d'abord, puis fichiers sur disque.

#### 7. Sources de preuves:
* Dispositifs d'extrémité, serveurs, appareils réseau, applications, etc.

#### 8. Accès aux ressources On-Premise et dans le Cloud:
* Accès potentiellement limité chez les fournisseurs de services cloud.
* Comprendre les capacités et les limites des fournisseurs cloud.

#### 9. Préservation de l'intégrité des preuves:
* Utilisation de fonctions de hachage pour démontrer l'intégrité des fichiers.
* Ajout de signatures numériques pour la non-répudiation.

La préservation des preuves est cruciale et les intervenants en cas d'incident sont responsables de garantir l'intégrité des preuves collectées. Les mécanismes tels que le hachage et les signatures numériques sont utilisés pour assurer cette intégrité.

<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::