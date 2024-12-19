---
sidebar: auto
date: 2024-12-19
---

# Analyse SOC : Hardware : USB, HDD externe, SD...
<ESDInfo />

## USB pour l'exfiltration ou un accès initial

Windows enregistre les événements liés à l'USB par défaut dans le journal des événements Windows. Ils sont enregistrés dans *Système/Sécurité* ou bien Services/Microsoft/Windows dans l'observateur d'événements.

|Source|Déclencheur|ID de l'événement|
|-|-|-|
|DriverFramework-Usermode|Première connexion|10000|
|UserPNP|Installation ou MAJ|20001|
|WPD-ClassInstaller|Installation réussie|24576|

### Evénements Plug and Play

Ils sont générés chaque fois qu'un périphérique est branché. Le suivi de ces événements liés à l'USB est utile à des fins d'audit.

### Evénements d'audit d'accès aux objets

Ils peuvent être utilisés pour surveiller la manipulation d'objets, comme la création, la suppression, ainsi que d'autres modifications. Cela peut petre utile pour surveiller d'éventuelles fuites de données. Ces deux événements peuvent être activés dans la stratégie de sécurité locale ou par l'outil `auditpol` avec la commande ci-dessous dans Powershell :

```powershell
auditpol /set /subcategory:"Plug and Play Events", "Removable Storage", "Handle Manipulation" /success:enable /failure:enable
```
et
```powershell
auditpol /get /subcategory:"Plug and Play Events", "Removable Storage", "Handle Manipulation"
```

