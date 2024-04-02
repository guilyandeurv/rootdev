---
sidebar: auto
---
# Les Firewall
<Badge type="tip" text="Rédigé le 02/04/2024" />
<Badge type="warning" text="En cours de rédaction" />

Le Firewall a pour objectif de déterminer quel trafic est autorisé à entrer & sortir du réseau. Il peut être configuré de façon à ce que l'entrée ou la sortie du trafic soit autorisée ou refusée selon les facteurs suivants :
* La provenance du trafic *(Le pare-feu a-t-il reçu l’ordre d’accepter/refuser le trafic provenant d’un réseau spécifique ?)*
* La destination du trafic *(Le pare-feu a-t-il reçu l’ordre d’accepter/refuser le trafic destiné à un réseau spécifique ?)*
* Le port attribué *(Le pare-feu a-t-il reçu l’ordre d’accepter/refuser le trafic destiné au port 80 uniquement ?)*
* Le protocole utilisé *(a-t-on demandé au pare-feu d’accepter/refuser le trafic UDP, TCP ou les deux ?)*

Les pare-feu répondent à ces questions en analysant tous les paquets transitant sur le réseau.

Les pare-feu sont de toutes formes et de toutes tailles. Qu’il s’agisse de matériel dédié, que l’on trouve souvent dans les grands réseaux comme les entreprises, qui peuvent gérer une grande quantité de données, de routeurs résidentiels ou de logiciels tels que Snort.

Ci-dessous, les deux grands catégories de pare-feu :

| Catégorie | Description |
|-|-|
|***Stateful***| Ce type de pare-feu utilise l’intégralité des informations d’une connexion. Plutôt que d’inspecter un paquet individuel, ce pare-feu **détermine le comportement d’un périphérique en fonction de l’ensemble de la connexion**. Il consomme beaucoup de ressources par rapport aux pare-feu sans état suite à une prise de décision dynamique.|
|***Stateless***| Ce type de pare-feu utilise un ensemble statique de règles pour **déterminer si les paquets individuels sont acceptables ou non**. Un appareil qui envoie un paquet défectueux ne signifie pas nécessairement que l’ensemble de l’appareil est alors bloqué. Ceux-ci consomment beaucoup moins de ressources, cependant ils se montrent stupides : ces pare-feu ne sont efficaces qu'en fonction des règles qui y sont définies. En revanche, ils se montrent efficaces dans les cas d'attaque de déni de service.


<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Extending your network*" & "*Redteam Firewalls*" :

https://tryhackme.com/room/introtonetworking  <Badge type="danger" text="Payant" />

https://tryhackme.com/r/room/redteamfirewalls  <Badge type="danger" text="Payant" />
:::


