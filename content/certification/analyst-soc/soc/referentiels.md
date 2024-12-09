---
sidebar: auto
date: 2024-12-07
---

# Analyse SOC : Référentiels ATT&CK, DeTT&CT, Sigma, MISP
<ESDInfo />

## La Cyber Kill Chain

Un terme "**Kill Chain**" est un terme utilisé pour décrire la série d'étapes que doit franchir un attaquant pour réaliser une attaque, il a été introduit par les militaires pour expliquer les étapes utilisées pour attaquer la cible. Plus tard, en 2011, Lockheed Martin a introduit la **Cyber Kill Chain** pour décrire les étapes nécessaires pour réaliser une attaque informatique.

<br>

![Cyber Kill Chain](./img/cyberkillchain.png) 

## Le framework ATT&CK

***MITRE ATT & CK*** est un framework open source qui décrit les techniques et les processus utilisés par les attaquants pour compromettre les systèmes informatiques basées sur des observations de cas réels et de la ***Cyber Threat Intelligence***. Il est utilisé pour identifier les menaces et les vulnérabilités, et pour évaluer la sécurité des systèmes informatiques.

![MITRE ATT&CK](./img/att&ck.png) 

***ATT&CK*** permet de définir un cadre de l'adversaire pour décrire les actions qui pourrait entreprendre pour compromettre et opérer au sein d'un réseau d'entreprise. Le modèle peut être utilisé pour mieux catégoriser et décrire le comportement de l'adversaire après avoir été compromis. Il élargit les connaissances des défenseurs (Blue Team) et aide à prioriser la défense en détaillant les tactiques, techniques et procédures (TTP) utilisées par les cybermenaces pour accéder et exécuter leurs objectifs tout en opérant à l'intérieur d'un réseau.

::: info Définition de la CTI
La ***Threat Intelligence***, ou ***Cyber Threat Intelligence*** est une discipline basée sur des techniques du renseignement, qui a pour but la collecte et l'organisation de toutes les informations liées aux menaces du cyber-espace, afin de dresser un portrait des attaquants ou de mettre en exergue des tendances.
:::

## IoC & TTPs

***IoC*** (Indicators of Compromise) est l'indicateur de compromission, il s'agit d'un artefact observé sur un réseau ou dans un système d'exploitation qui indique, avec un haut niveau de certitude, une intrusion informatique.

***TTPs*** (Tactics, Techniques, Procedures) est un ensemble de techniques et de procédures utilisées par les attaquants pour accomplir leurs objectifs, visant à aider les organisations à identifier les lacunes dans leurs cyberdéfenses.

Des exemples de d'indicateurs de compromission sont :
- des signatures virales
- des adresses IP particulières
- les hash de fichiers malveillants
- des URLs ou des noms de domaines de serveurs de commande et de contrôle

Une fois que les identificateurs ont été identifiés dans un processus de réponse aux incidents et de criminalistique informatique, ils peuvent être utilisés pour la détection précoce des tentatives d'attaque en utilisant des systèmes de détection d'intrusion et des logiciels d'antivirus.

## DeTT&CT

***DeTT & CT*** vise à aider les équipes bleues à utiliser ATT&CK pour évaluer et compraer les journaux, leurs couvertures, la détection et le comportement.

## MISP

La plateforme de partage des menaces ***MISP*** (***M***ulti ***I***nformation ***S***haring ***P***latform) est une logiciel open source qui facilite le partage d'informations sur les menaces, y compris les indicateurs de compromission (IoC).

Voir [MISP](https://www.misp-project.org/).

## Sigma

***Sigma*** est pour les logs, ce que Snort est pour le traffic réseau et YARA est pour les fichiers.
Sigma s'adapte au ATT & CK du MITRE ou la plateforme MISP.

Voir [Sigma](https://sigmahq.github.io/sigma/)
