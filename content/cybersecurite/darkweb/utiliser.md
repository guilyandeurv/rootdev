---
sidebar: auto
---
# Accéder au Dark Web
<Badge type="tip" text="Rédigé le 20/04/2024" />

## TOR

Le développement de Tor représente une étape cruciale dans la protection de la vie privée en ligne. Fondé par des chercheurs du Laboratoire de recherche navale des États-Unis, David Goldschlag, Mike Reed et Paul Syverson, Tor a été conçu pour répondre à l'absence de sécurité sur Internet dans les années 1990 et pour contrer la facilité avec laquelle la surveillance en ligne pouvait être effectuée.

Le concept de base du **routage en oignon** utilisé par Tor est simple mais puissant : plutôt que de suivre un chemin direct de A à B, le trafic Internet **passe par plusieurs nœuds intermédiaires** (C, J, K, etc.) avant d'atteindre sa destination finale, chaque étape du trajet étant chiffrée. Cela rend extrêmement difficile pour le destinataire (B) de remonter jusqu'à l'origine de la demande (A), offrant ainsi un niveau élevé d'anonymat et de confidentialité aux utilisateurs.

Pour que Tor fonctionne, il a besoin d'un réseau décentralisé composé de nombreux serveurs indépendants appelés nœuds, qui coopèrent pour transmettre le trafic de manière sécurisée. En octobre 2002, le code de Tor a été publié en tant que logiciel libre et open source, permettant ainsi à de nouveaux nœuds de rejoindre le réseau. En un an, 13 nœuds Tor étaient déjà actifs.

L'Electronic Frontier Foundation (EFF), une organisation à but non lucratif dédiée à la défense des libertés civiles dans le monde numérique, a reconnu l'importance du réseau Tor dès 2004 et a commencé à financer les travaux de Roger Dingledine et Nick Mathewson. En 2006, ils ont créé The Tor Project, Inc., une organisation à but non lucratif, pour recevoir des financements et poursuivre le développement et la maintenance de Tor.

## Disclaimer

Il est crucial de souligner que l'***anonymat sur le Dark Web n'est pas absolu***, car les forces de l'ordre surveillent activement ses activités et s'efforcent d'identifier les utilisateurs impliqués dans des activités illicites. Les risques associés à la navigation sur le Dark Web sont bien réels, allant des opérations illégales aux contenus explicites.

Pour garantir sa sécurité, il est fortement conseillé de prendre certaines mesures préventives avant de tenter d'accéder à TOR :

1. Être conscient que du contenu offensant ou explicite peut être rencontré et se préparer mentalement à cette éventualité.
2. Reconnaître le risque accru de rencontrer des criminels ou des pirates informatiques cherchant à voler des données ou à compromettre des systèmes. À cet égard, il est crucial de maintenir à jour tous les logiciels, de désactiver les applications vulnérables et de ne pas cliquer sur des liens suspects.
3. Assurer la sécurité de son système d'exploitation en installant les mises à jour et correctifs de sécurité disponibles.
4. Maintenir un logiciel antivirus à jour et fonctionnel pour protéger son appareil contre les logiciels malveillants.
5. L'utilisation d'un VPN avant de naviguer sur le Dark Web est fortement recommandée pour renforcer la confidentialité et la sécurité des données personnelles.

Il est crucial de reconnaître que naviguer sur le Dark Web comporte des risques considérables, tant sur le plan légal que sur le plan de la sécurité informatique. Suivre des protocoles stricts de sécurité, tels que ceux énumérés, est essentiel pour minimiser ces risques.

## Accéder au Dark Web

Depuis Debian, on peut installer Tor avec la commande `torbrowser-launcher `:

```shell
┌──(rootdev㉿kali)-[~/]
└─$ torbrowser-launcher                           
Command 'torbrowser-launcher' not found, but can be installed with:
sudo apt install torbrowser-launcher
Do you want to install it? (N/y)y
sudo apt install torbrowser-launcher
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
```

Le site [darknet-tor](https://darknet-tor.com/meilleurs-sites-onion-deepweb.php) liste plusieurs liens du Dark Web.




<hr>
<br>

::: info Sources
Ce cours s'inspire de Security Blue Team du cours "*Introduction to Dark Web Operations*" :
https://elearning.securityblue.team/home/courses/free-courses/introduction-to-dark-web-operations#description
:::