---
sidebar: auto
date: 2024-12-07
---

# Analyse SOC : Modèle de gouvernance
<ESDInfo />

## Les métiers du SOC

| |Tâches|Métiers|
|-|-|-|
|Pilotage|Maîtrise d'ouvrage|Responsable opérationnel, RSSI|
|Détection et analyse|Veille, maintenance, administration|Analyste SOC niveau 1 et 2|
|Réaction|Coordination des actions|Hors SOC (ex : CSIRT)|
|Reporting|Reporting|Dépend de l'organisation|


## Le SOC et l'escalade

![Escalade](./img/escalade.png)

Quand l'analyste SOC niveau 1 ne trouve pas de réponse procédurée, il escalade l'incident à un analyste SOC niveau 2, qui lui même peut escalader vers des partenaires externes à un niveau 3 en cas de besoin.

## 3 types de SOC

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

## CERT ? CSIRT ?

Le ***CERT (Computer Emergency Response Team)*** ou ***CSIRT (Computer Security Incident Response Team)*** est un centre d'alerte et de réaction aux attaques informatiques, destiné aux entreprises ou aux administrations, mais dont les informations sont généralement accessibles à tous.

Le CERT est une équipe de réponse à incident accrédité par le ***FIRST (Forum of Incident Response and Security Teams)*** ou le ***TI (Trusted Introducers)*** et qui a eu l'autorisation de la part du ***SEI (Software Engineering Institure)*** d'utiliser le sigle CERT.

Répondre aux incidents de sécurité est sa première mission, mais elle peut également communiquer des bulletins d'alerte et partager les indicateurs de compromission aux autres CERT et publics.

Le CSIRT est la même chose sans les accréditations et la marque déposée.

## Avoir un SOC fonctionnel

Pour qu'un SOC fonctionne, il faut :
* Des formations adaptées
* De la maturité et des métriques (tableau de bord)
* Des procédures, des processus, des playbooks, etc...
* Un alignement aux besoins de sécurité de l'organisation
* Des 3P (Process, People, Product)

Tout comme dans le monde de l'IT en général, il est important pour un SOC d'avoir un bon fil, il faut donc former ses équipes, avoir des tableaux de bord et suivre les indicateurs afin de rester dans une roue vertueuse (roue de Deming*), posséder des processus et également des playbooks, s'aligner aux besoins de l'organisation etc. La sécurité de l'information (RSSI) est généralement en charge de faire ce travail. Il peut modifier, ajouter dans une politique de sécurité avec les grandes règles pour l'utilisation du SOC, voir modifier, ajouter à la PSSI (politique de sécurité de l'information), les exigences pour le SOC.

::: info Définition de la roue de Deming*
La roue de Deming, aussi connue sous le nom de cycle PDCA (Plan-Do-Check-Act), est un modèle itératif de gestion de projet et d'amélioration continue. Elle décrit un processus cyclique en quatre étapes :

* Plan (Planifier) : Cette étape consiste à définir les objectifs, à planifier les actions nécessaires pour les atteindre et à prévoir les ressources nécessaires. Il s'agit de définir clairement ce que l'on veut améliorer et comment on va s'y prendre.

* Do (Faire) : Cette étape consiste à mettre en œuvre le plan, à réaliser les actions planifiées et à collecter les données. Il s'agit de tester le plan et de voir ce qui se passe dans la pratique.

* Check (Vérifier) : Cette étape consiste à analyser les résultats obtenus, à comparer les résultats aux objectifs et à identifier les écarts. Il s'agit d'évaluer l'efficacité du plan et d'identifier les problèmes.

* Act (Agir) : Cette étape consiste à mettre en place les actions correctives nécessaires pour améliorer le processus. Il s'agit de modifier le plan initial si nécessaire et de le réutiliser pour une nouvelle itération.

Le cycle PDCA est itératif, ce qui signifie qu'il est répété plusieurs fois jusqu'à ce que l'objectif souhaité soit atteint. Chaque itération permet d'apprendre, d'améliorer et de se rapprocher progressivement de l'objectif. L'accent est mis sur l'amélioration continue et l'apprentissage par l'expérience.
:::