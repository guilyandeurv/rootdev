---
sidebar: auto
---
# Burp Suite 
<Badge type="tip" text="Rédigé le 02/06/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Introduction

BurpSuite est un outil populaire de test de sécurité des applications Web, développé par PortSwigger. Il est largement utilisé par les professionnels de la sécurité pour identifier et exploiter les vulnérabilités dans les applications Web. 

### Fonctionnalités de BurpSuite

* **Proxy HTTP/S** : BurpSuite peut intercepter et modifier les requêtes et réponses HTTP/S entre le navigateur de l'utilisateur et le serveur web. Cela permet aux testeurs de sécurité d'analyser et de manipuler le trafic en temps réel.

* **Scanner de vulnérabilités** : BurpSuite dispose d'un scanner automatisé qui peut identifier des vulnérabilités communes telles que les injections SQL, les failles XSS, les erreurs d'authentification, etc.

* **Intruder** : Cet outil permet de réaliser des attaques automatisées comme le fuzzing ou les attaques par force brute pour tester la robustesse des fonctionnalités de l'application.

* **Repeater** : Permet d'envoyer manuellement des requêtes HTTP personnalisées et de réexaminer les réponses. Ceci est utile pour tester des charges utiles spécifiques et analyser le comportement de l'application.

* **Comparer** : Outil permettant de comparer deux ensembles de données (par exemple, des réponses HTTP) pour identifier les différences, ce qui peut être utile pour trouver des variations de comportement.

* **Decoder** : Outil de décodage et d'encodage pour manipuler divers formats de données encodées ou chiffrées.

* **Sequencer** : Analyse la qualité des jetons ou des numéros de session pour vérifier leur imprévisibilité.

* **Extender** : BurpSuite supporte l'ajout d'extensions pour améliorer ses capacités, écrites en Java, Python, ou Ruby.

* **Collaborator** : Service qui permet de détecter les vulnérabilités comme les injections d'en-têtes HTTP en capturant les interactions hors bande.

### Utilité de BurpSuite

* **Détection des vulnérabilités** : BurpSuite aide à identifier les failles de sécurité dans les applications Web, permettant ainsi aux développeurs de les corriger avant qu'elles ne soient exploitées par des attaquants.

* **Tests de pénétration** : Utilisé pour réaliser des tests de pénétration approfondis, en simulant des attaques réelles pour évaluer la sécurité des applications.
* **Automatisation des tests** : Avec son scanner et ses outils d'intrusion automatisés, BurpSuite permet de gagner du temps en effectuant des tests répétitifs et en identifiant rapidement les failles potentielles.

* **Analyse et manipulation des requêtes** : Permet une analyse détaillée et une manipulation des requêtes et des réponses HTTP, essentielle pour comprendre comment une application Web traite les données.

* **Formation et apprentissage** : Utilisé comme un outil pédagogique pour former les professionnels de la sécurité et les développeurs à comprendre les vulnérabilités et les techniques de test de sécurité.

### Objectifs pouvant être atteints avec BurpSuite

* **Identification des vulnérabilités** : Détection et documentation des failles de sécurité dans les applications Web.

* **Amélioration de la sécurité des applications** : En corrigeant les vulnérabilités découvertes, les développeurs peuvent améliorer la sécurité globale de leurs applications.

* **Conformité aux normes** : Aide les organisations à se conformer aux normes de sécurité telles que OWASP Top Ten, PCI DSS, etc.

* **Prévention des attaques** : En simulant des attaques réelles, BurpSuite permet d'anticiper et de prévenir les menaces potentielles.


<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Burp Suite*" :
https://tryhackme.com/module/learn-burp-suite
:::