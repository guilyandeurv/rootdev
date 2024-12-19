---
sidebar: auto
date: 2024-12-19
---

# Analyse SOC : IDS/IPS
<ESDInfo />

## L'indispensable du SOC

L'IDS permet d'alerter la **blue team** sur la détection, notamment :
* de Command and Control (C2)
* de scan réseaux, ports
* d'échanges de certificats malveillants

La bonne configuration des alertes et la mise à jour des signatures sont primordiales. 

Le problème qui peut s'imposer à IDS est l'échange de flux chiffrés au sein de l'infrastructure, ce qui demande une configuration de type *split-tunneling* dans l'organisation. 

L'autre problématique est les faux positifs remontés par IDS qui peuvent très rapidement alourdir la tâche de surveillance.