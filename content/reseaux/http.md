---
sidebar: auto
---
# L'HyperText Transfer Protocol (HTTP)
<Badge type="tip" text="Rédigé le 16/03/2024" />
<Badge type="warning" text="En cours de rédaction" />

## HTTP & HTTPS

HTTP est le protocol utilisé n'importe quand lorsque l'on visite un site web. L'HTTP est pourvu de plusieurs règles utilisées pour communiquer avec les serveurs web pour la transmission des données des pages (l'HTML, les images, etc...)
HTTPS est la version sécurisée de l'HTTP. Les données sont chiffrées de façon à ce que personne ne puisse visionner celles que vous recevez & envoyez. Il donne également l'assurance de communiquer avec le bon serveur web et non pas une usurpation.

## Les requêtes & réponses

Lorsque l'on visite un site web, le navigateur doit faire une requête au serveur web pour pouvoir télécharger l'HTML, les images, etc...
Avant cela, on doit dire au navigateur où et comment accéder à ces ressources : c'est là que l'URL entre en jeu.

### L'URL : son devoir

L'URL est l'instruction au navigateur sur la façon d'accéder aux ressources sur Internet. Le schéma ci-dessous explique cela :

![Schéma URL](./img/url.png)

* **Scheme** : Il indique quel protocole utiliser pour accéder à la ressource telle que HTTP, HTTPS, FTP...
* **User** : Certains services nécessitent une authentification pour se connecter, cette indication est inscrite dans l'URL
* **Host** : Le nom de domaine ou l'adresse IP du serveur auquel vous souhaitez accéder.
* **Port** : Le port utilisé, généralement 80 pour HTTP et 443 pour HTTPS, mais il peut être hébergé sur n'importe quel port entre 1 et 65535.
* **Path** : Le nom du fichier ou l'emplacement de la ressource à laquelle on souhaite accéder.
* **Query String** : Des bits supplémentaires d'informations qui peuvent être envoyés au chemin demandé. Par exemple, /blog?id=1 dirait au blog le chemin que l'on souhaite recevoir, ici l'article de blog avec l'ID 1.
* **Fragment** : Il s'agit d'une référence à un emplacement sur la page effectivement demandée. Celui-ci est couramment utilisé pour les pages à contenu long et peut avoir une certaine partie de la page directement liée à elle, de sorte qu'il est visible pour l'utilisateur dès qu'il accède à la page.