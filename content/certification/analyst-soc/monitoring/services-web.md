---
sidebar: auto
date: 2024-12-19
---

# Analyse SOC : Services Web
<ESDInfo />

## La surveillance Web

Le filtrage de la navigation WEB à l'intérieur d'une organisation est indispensable. Il peut être intéressant de surveiller plusieurs éléments :
* Le ***proxy*** avec les users agents, le nombre de sites visités une fois, les URLs n'ayant pas fait de recherche DNS, les URLs contenant des extensions de fichiers type script (`.ps1`, `.vbs`, etc...), les URLs contenant plusieurs adresses IP
* Le seuil des WAFs (nombre d'alerte)
* Les IoCs
* Des Payloads Web

La difficulté majeure de la surveillance Web aujourd'hui est la confidentialité des données et la bonne utilisation du *split-tunneling*.

En effet, surveiller le trafic Web est nécessaire mais l'organisation doit le faire d'une manière confidentielle, et donc adapter une bonne configuration.

