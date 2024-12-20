---
sidebar: auto
date: 2024-12-20
---

# Analyse SOC : Les agents BEATS, sysmon
<ESDInfo />

## Beats

<img src="./img/beats.png" width="150" height="150">

***Beats*** est un ensemble de *transmetteur de log* (log shippers, log forwarder) open source installé en tant qu'agent sur les éléments d'une infrastructure afin de collecter des logs ou des métriques :
* Filebeat
* Metricbeat
* Packetbeat
* Heartbeat
* Winlogbeat

### Filebeat

Peut être installé sur de nombreux systèmes d'exploitation, il est utilisé pour **collecter et envoyer des fichiers de logs**.
Il inclut également des modules pour des applications spécifiques telles que : Apache, MySQL, Docker, MariaDB, Percona, Kafka.

### Metricbeat

Collecte et reporte de nombreuses **métriques systèmes**, celui-ci est paramétrable au travers de modules comme metricsets.

### Packetbeat

C'est un analyseur de **paquet réseau** permettant de surveiller différentes performances telles que la latence, les temps de réponse, les erreurs, les temps d'accès utilisateurs...

### Heartbeat

C'est un **moniteur de services**, via ICMP, TCP et HTTP, permettant de contrôler si un service est en fonction ou pas.

### Winlogbeat

Cet agent est **spécifique pour Windows**, il collecte les logsdu journal d'événements Windows. Il comprend un module prenant en charges les événements de l'outil de Microsoft Sysinternals, Sysmon.

La configuration des agents beats se font au travers d'un fichier de configuration YAML :

* Sélection des logs souhaités :
```YAML
winlogbeat.event_logs:
- name: Security
ignore_older : 30m
event_id: 4231, 4401-4405
- name: Microsoft-Windows-sysmon/operational
ignore_older: 30m
```

* Personnalisation des logs envoyés :
```YAML
tags: ["Server1", "Win2016", "Production"]
```

Cela permettra d'ajouter des mots clés au logs dans le but de pouvoir les utiliser dans l'outil de SIEM.

* Les informations du serveur de collecte :
```YAML
output.logstach:
# The Logstash hosts
hosts: ["logstash_srv:5045"]
```

## Sysmon

L'outil ***Sysmon*** permet de *générer des logs supplémentaires* dans un environnement Windows, ces indicateurs peuvent apporter des informations précises dans le cas d'une activité malveillante sur un système :
* Création de processus
* Chargement de DLL
* Connexion réseau
* Modification de fichier
* ...

### Installation de sysmon

`sysmon -accepteula -i -h md5,sha256`
* `-accepteula` : on accepte automatiquement les termes de licence de logiciels Microsoft
* `-i` : instruction pour installer sysmon
* `-h md5,sha256` : On spécifie qu'on va utiliser dans le processus d'installation le Hash md5 et sha256 pour créer et surveiller les logs

L'instruction `-h` n'est pas obligatoire, d'ailleurs sans elle, on aura le hash md5, SHA256 et IMPHASH dans les logs sysmon.

Sysmon se configure au travers d'un fichier XML, ce fichier contient les règles permettant la capture ou non d'événements.

Mettre à jour le fichier de configuration sysmon : `sysmon -c /path to xml file/`

Il y a 29 catégories de filtrs d'événements générées par sysmon, ci-dessous quelques exemples :
* ProcessCreate
* FileCreateTime
* NetworkConnect
* CreateRemoteThread
* RegistryEvent
* DNSQuery

Les règles de filtrages d'événements sont basées sur des conditions telles que :
* Is
* Contains
* Excludes
* Begin with
* Less than

Sur le lien ci-joint, [un exemple de configuration de sysmon](https://github.com/SwiftOnSecurity/sysmon-config/blob/master/sysmonconfig-export.xml).

