---
sidebar: auto
date: 2024-12-19
---

# Analyse SOC : Indicateur Windows
<ESDInfo />

## Processus Windows & événement 4688

L'**événement 4688** activé dans les stratégies d'audit Windows permet de lire les arguements de ligne de commande pour tout processus créé avec succès. Il se montre utile pour une recherche de techniques de persistances.

### Liste des identifiants Windows à surveiller

|ID|Description|
|-|-|
|1100|Arrêt du journal d'audit|
|1102|Effacement du journal d'audit|
|4648|Essai d'une authentification via un processus|
|4657|Base de registre modifiée|
|4700|Activation d'une tâche planifiée|
|4720|Création d'un groupe d'utilisateur|
|4731|Création d'un groupe local de sécurité|
|4798|Enumération des groupes de sécurité par un utilisateur|
|5142|Création d'un partage réseau|

Des listes, il en existe plusieurs, mais l'idéal restera toujours d'adapter la collecte au contexte de l'organisation.

[Liste de Tony Phipps : complète sur les IDs à surveiller](https://github.com/TonyPhipps/SIEM/blob/master/Notable-Event-IDs.md)

## Lolbas

Les lolbas sont une famille composée de binaires signés donc jugés légitimes et présent nativement sur un OS (lolbin). Il peut être judicieux de surveiller les Lolbas :

- ***bitsadmin.exe*** : Gestion des transferts de fichiers (fonction lolbas : télécharger et exécuter des binaires)
- ***mshta.exe*** : Ouverture de fichier HTML App compilé (fonction lolbas : exécuter des commandes système psh ou vbs)
- ***hh.exe*** : Ouverture de fichier d'aide compilé au format chm (fonction lolbas : similaire à HTA)

::: details Liste non exhaustive
|Processus|Description|
|-|-|
|***bash.exe***|Permet, via WSL, d'utiliser un terminal Linux sur une machine Windows|
|***desk.cpl***|Librairie de fonctions permettant de gérer le panneau de configuration Windows (souvent utilisé avec ***rundll32.exe***)|
|***ilasm.exe***|Permet de compiler du code C# (fontion lolbas : générer des exécutables ou des dll)|
|***rundll32.exe***|Permet d'exécuter des DLL (fonction lolbas : exécution de DLL malicieuse)|
|***curl.exe***|Outil de requêtage web (fonction lolbas : télécharger des exécutables ou du code malicieux)|
|***cmd.exe***|Invite de commande Windows|
|***cscript***|Version de Windows Script Host qui permet l'exécution de script depuis l'invite de commande|
|***csvde.exe*** / ***ldifde.exe***|Peut être utilisé pour extraire des informations Active Directory dans des fichiers CSV|
|***dsquery.exe***|Utilisé pour extraire une grande variété d'informations d'Active Directory|
|***dsget.exe*** / ***nltest.exe***|Utilisé pour déterminer le contrôleur de domaine et son adresse IP pour la session d'ouverture de session locale|
|***fsinfo.exe***|Utilisé pour obtenir la liste des lecteurs connectés|
|***ipconfig.exe***|Obtenir la configuration IP et DNS|
|***makecab.exe***|Sert à empaqueter des fichiers existants dans un fichier .cab|
|***net***|Il existe de nombreuses commandes net - comme `net localgroup administrators` pour savoir qui fait partie du groupe admin local|
|***netsh advfirewall***|Utilisé pour voir et / ou changer la configuration locale du firewall|
|***netstat.exe***|Permet d'obtenir la liste des ports d'écoute|
|***ntdsutil.exe***|Outil d'administration Active Directory, notamment utilisé par les attaquants pour la reconnaissance de l'AD et les données de configuration|
|***ping.exe***|Test la connectivité à l'aide de l'ICMP. Peut servir d'outil d'exfiltration|
|***psexec.exe***|Outil Sysinternals utilisé pour exécuter des commandes à distance sur un système Windows, ce qu'il fait en installant temporairement le service sur la cible. Il doit y avoir un événement **5145** ou **7045**|
|***reg.exe***|Interroge, exporte et / ou modifie le registre Windows|
|***sc.exe***|Outil de requête et de configuration du service de ligne de commande|
|***schtasks.exe***|Utilisé pour crééer, supprimer, interroger, modifier, exécuter et terminer des tâches planifiées sur un système local ou distant. Peut être enregistré par l'ID **106** dans le journal Microsoft /  Windows / TaskScheduler / Operational et un événement 200 lors de son exécution|
|***shutdown.exe***|Utilisé pour arrêter ou redémarrer un système|
|***systeminfo.exe***|Fournit un inventaire détaillé d'un système|
|***tasklist.exe***|Utilisé pour voir uels processus sont en cours d'exécution|
|***tree.exe***|Produit un diagramme de la structure des répertoires du système de fichiers|
|***ver.exe***|Récupère la version actuelle de Windows|
|***vssadmin.exe***|Outil d'administration du service de surveillance des volumes. Les adversaires utilisent cet outil pour créer, désactiver et / ou supprimer les clichés instantanés de volume. Lorsqu'un cliché instantané est créé, l'ID d'événement **8222** est publié dans le journal de sécurité|
|***wevtutil.exe***|Utilisé pour récupérer des informations sur les journaux d'événements, exécuter des requêtes et effacer les journaux|
|***wmic.exe***|Permet de faire des requêtes sur un système et permet également d'interagir avec des systèmes distants|
:::

## Autres surveillances à mettre en place

* ***Extensions des fichiers*** : Il peut être intéressant de surveiller les extensions de fichier car certains ransomware utilisent parfois des extensions particulières. 
* ***Office et commande*** : Les exécutables Offices utilisent rarement des commandes "shell" derrière des commutateurs (ex : application.exe -c commande)
