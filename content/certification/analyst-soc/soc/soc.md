---
sidebar: auto
date: 2024-12-04
---

# Analyse SOC : Security Operation Center (SOC)
<ESDInfo />

## Définition du SOC

### De quoi s'agit-il ?

Le ***SOC*** (Security Operation Center) est un service d'analyste en cybersécurité qui surveille, détecte, analyse et qualifie et répond aux événements et incidents de sécurité. Le ***SOC*** est aussi un ensemble de technologies et d'équipements permettant la centralisation, le traitement et l'affichage d'incidents de sécurité.

## Avantages & évolution du SOC 

Le ***SOC*** est composé d'une équipe d'experts en cybersécurité chargée de :
* La centralisation de la défense
* L'amélioration de la gestion des menaces
* Du maintien de sa conformité réglementaire
* L'augmentation de la chaîne de valeur pour le S.I.

Avec une centralisation et un processus de traitement des incidents, le SOC permet d'améliorer, automatiser et optimiser une partie de la défense en sécurité informatique, et donc de s'aligner aux besoins de sécurité de l'information des organisations.

::: info Définition de la chaînne de valeur
La chaîne de vlaeur est n système qui décrit comment les copposants et activités au sein d'une organisation fonctionnent ensemble pour créer de la valeur.
:::

Il est également possible de faire qualifier un SOC par l'ANSSI à travers la qualification PDIS (Prestataires de Détection d'Incidents et de Sécurité) afin de pouvoir travailler avec les opérateurs d'importance vitale. [PDIS](https://cyber.gouv.fr/prestataires-de-detection-dincidents-de-securite-pdis)

### Comment sommes-nous arrivés au SOC ?

La sécurité informatique évolue chaque année. La genèse et les protections dites "Endpoint" sont:

1. Les antivirus avec détection par signature
2. Les antivirus "nouvelle génération" avec une vision plutôt holistique et des bases de signatures mises à jour plus rapidement
3. Le ***Security Information and Event Management (SIEM)*** est un outil qui informe les personnes chargées de la sécurité de chaque activités et événements sous la forme de journaux de chaque dispositif implanté sur le système d'information.
4. Les Endpoints avec une vision holistique et adapté à tous les terminaux sur les réseaux
5. Les ***Endpoint Protection Platform (EPP)*** visent à prévenir les menaces tradictionnelles telles que les malwares connus et les menaces avancées telles que fileless, ransomwares et vulnérabilités zero-day.
6. Les Endpoints nouvelles générations avec machine learning et intelligence artificielle
7. Les ***Endpoint Protection and Response (EPR)*** pour une remédiation lors de la phase de pré-infection lors d'une attaque cyber.
8. Le ***Security Orchestration, Automation and Response (SOAR)*** est une pile de solutions logicielles qui permettent à une organisation de collecter des données sur menances provenant de sources multiples et répondre aux événements de bas niveau sans assistance humaine.
9. Le ***Multiple Detection and Response (xDR)*** offre une visibilité sur les données réseaux, clouds, EDR et les applications tout en appliquant des analyses et une automatisation pour détecter, analyser, rechercher et corriger les menaces d'aujourd'hui et de demain.


## Les services intégrés & données collectées

### Les éléments d'un SOC

|Prévention|Détection|Réaction|
|---|---|---|
|Veille vulnérabilités critiques (0 day)|Tests d'intrusion, veille cybercriminelle, contrôles ponctuels, veille cybersquatting|Forensics, réponse active|
|Sensibilisaition|Qualification des alertes de sécurité, contrôles de conformité, collecte, centralisation et analyse des logs|Investigations étendues|
|Gestion des vulnérabilités|Contrôles automatiques, analyse de production|Investigations de base, lutte défensive|

Le premier service de **prévention**, regroupant les aspects de veille et de recherche des vulnérabilités critiques connues et recensées. La sensibilisation, plus particulièrement avec le personnel de l'entreprise, car plus de 90% des attaques recensées auprès de grandes sociétés sont dues à un manque de sensibilisation des salariés aux risques et menaces cyber.

En second service, la **détection**, qui regroupe les aspects de test d'intrusion, de contrôles ponctuels au sein du SI et du SOC, de la qualification des alertes de sécurité, de la collecte, centralisation et analyse des logs.

Puis enfin le service de **réaction**, qui regroupe les aspects de l'investigation étendue, de la lutte défensive et de la réponse active. Il est considéré comme étant celui qui intervient à la suite d'un événement de sécurité. On y retrouve l'aspect forensics étant l'enquête post incident, ou l'aspect de réponse active, qui est la rédaction de règles, tests et optimisations de ces dernières, et l'aspect de lutte défensive ou la recherche de solution de défenses perfectionnées et adaptées aux menaces en constantes évolutions.

### Le SIEM, central au SOC

![SIEM](./img/siem.png)

Les ***Security Information and Event Management (SIEM)*** prennent en entrée les événements collectés du SI, les journaux systèmes des équipements : pare-feux, routeurs, serveurs, bases de données, etc... et les centralisent dans une plateforme de gestion de ces événements.

### L'importance d'une analyse des risques

Une analyse des risques en amont du projet permet :
1. Une mise en place du SOC en priorisant les budgets et la défense
2. Créer ses règles SIEM et tableaux de bord en fonction des priorités de l'organisation
3. Ajouter une cohérence et de la communication sur le projet

L'utilisation d'EBIOS Risk Manager peut être intéressante car son approche vise à identifier la partie conformité, hygiène SSI et à la fois les risques de haut niveau numérique. De ce fait, cet outil permet d'avoir un aperçu des point névralgiques de la défense à intégrer dans le SI et permet une aide à la configuration du SOC.

### Les processus

De nombreux processus doivent être définis au sein du SOC, ici limités à ceux liés à la supervision des événements de sécurité :
1. Processus de détection :
    * analyse des alertes détectées par les outils du SOC
    * analyse les informations sur la veille de sécurité SI
    * analyse les sollicitations externes des autres équipes opérationnelles
    * analyse éventuellement les incidents provenants des outils de supervision des réseaux ou des systèmes
2. Processus de qualification :
    - Il s'agit d'un ensemble de tâches attribuées au rôle d'analyste SOC de niveau 2, qui incluent :
        * L'étude des lots d'alertes remontées par les analystes de niveau 1 après tri et priorisation
        * La détermination de la véracité de l'incident de sécurité sous-jacent
        * Prendre la décision de passer à un processus de gestion d'incident en cas d'alerte avérée
        * L'isolation et la description des faux positifs afin de les passer en entrée du processus d'administration du SOC
3. Processus de supervision :
    - La supervision concerne uniquement le périmètre du SI du SOC. il doit être supervisé par les analystes. L'ensemble des processus (détection, qualification, supervision et veille) impliquent des opérations d'administration du SOC. Ce processus d'administration permet l'amélioration continue des performances de détection et de qualification. Une partie des actions d'administration consiste à maintenir et améliorer la disponibilité et la sécurité des équipements du SOC (serveurs, infrastructure de sauvegarde, postes de travail des analystes, réseau du SOC...)
4. Processus de veille :
    - La veille est donc une fonction centrale du SOC pour garder un tempo de défense convenable. Tous les membres du SOC doivent être impliqués dans ce processus.

### Quels équipements ?

Dans la plupart des cas, ces solutions sont en place bien avant la création d'un SOC, et opérées par différents services :
* Anti-malware classique
* Anti-malware de type "bac à sable"
* EDR (Détection et réponse sur les endpoints), EPP, SOAR
* Pare-feu
* PKI
* IDS, IPS
* Scanneurs de vulnérabilités

### Le machine learning

Le machine learning permet de détecter, trier et qualifier plus rapidement les alertes. Un humain vérifiera les alertes, les incidents avérés et les faux positifs. L'exemple le plus connu est la détection de spam.

L'algorithme bayésien permet une prise de décision rapide en fonction des probabilités, l'efficacité de ce dernier est dépendant de la qualité des données d'entrainement.

![Machine Learning](./img/machine-learning.png)


### Les outils d'analyse comportementale (UBA)

Il s'agit de solutions distinctes interopérables avec les SIEM actuels, présents dans les solutions SIEM "2.0", et permettent des analyses plus fines. L'objectif est de détection des APT et autres malwares sophistiqués. Ils s'appuient sur des techniques de machine learning en apprenant les usages du SI en régime "normal" et en comparant les comportements avec les usages "anormaux".

*UBA* est un acronyme pour *User and Entity Behavior Analytics*.

### Quelles données collecter ?

* Authentification du matériel réseau
* Transaction DHCP, DNS
* Activité VPN, partage, Proxy, BDD
* Antivirus
* sudo Linux
* Firewall
* Authentification Windows, processus, etc...

Il n'y a pas de liste exhaustive des données à collecter, cela dépend de l'organisation et de ses besoins.

### Les Playbooks

Les playbooks sont des listes de contrôles, étapes et actions à réaliser en cas d'incident afin d'y répondre avec succès, selon les types d'incidents et de menaces spécifiques. Ils aident à établir des processus et des procédures de réponse aux incidents formalisés.

Les Playbooks sont liés généralement à la réponse à incident, mais ils peuvent aussi alimenter les SOARs et donc automatiser un maximum la réponse lors de la détection d'une attaque. Il est important pour les responsables SOC d'alimenter les Playbooks afin de gagner en maturité et répondre le plus vite à des incidents.

## Le modèle de gouvernance du SOC

### Les métiers du SOC

| |Tâches|Métiers|
|-|-|-|
|Pilotage|Maîtrise d'ouvrage|Responsable opérationnel, RSSI|
|Détection et analyse|Veille, maintenance, administration|Analyste SOC niveau 1 et 2|
|Réaction|Coordination des actions|Hors SOC (ex : CSIRT)|
|Reporting|Reporting|Dépend de l'organisation|


### Le SOC et l'escalade

![Escalade](./img/escalade.png)

Quand l'analyste SOC niveau 1 ne trouve pas de réponse procédurée, il escalade l'incident à un analyste SOC niveau 2, qui lui même peut escalader vers des partenaires externes à un niveau 3 en cas de besoin.

### 3 types de SOC

1. Les SOC opérés et internes : 
    * Le SOC est opéré par l'organisation
    * Le SOC est géré par l'organisation
    * Le SOC est administré par l'organisation
2. Les SOC externalisés :
    * Le SOC est opéré par un prestataire
    * Le SOC est géré par un prestataire
    * Le SOC est administré par un prestataire
3. Les SOC hybrides :
    * Le SOC est opéré par l'organisation
    * Le SOC est géré par un prestataire
    * Le SOC est administré par l'organisation

### CERT ? CSIRT ?

Le ***CERT (Computer Emergency Response Team)*** ou ***CSIRT (Computer Security Incident Response Team)*** est un centre d'alerte et de réaction aux attaques informatiques, destiné aux entreprises ou aux administrations, mais dont les informations sont généralement accessibles à tous.

Le CERT est une équipe de réponse à incident accrédité par le ***FIRST (Forum of Incident Response and Security Teams)*** ou le ***TI (Trusted Introducers)*** et qui a eu l'autorisation de la part du ***SEI (Software Engineering Institure)*** d'utiliser le sigle CERT.

Répondre aux incidents de sécurité est sa première mission, mais elle peut également communiquer des bulletins d'alerte et partager les indicateurs de compromission aux autres CERT et publics.

Le CSIRT est la même chose sans les accréditations et la marque déposée.


