---
sidebar: auto
---
# Scan des vulnérabilités
<Badge type="tip" text="Rédigé le 18/10/2024" />

## Qu'est-ce que la gestion des vulnérabilités ?
### Complexité des systèmes modernes

Les systèmes et applications informatiques modernes sont extrêmement compliqués. Il n'est pas surprenant d'apprendre qu'il existe des millions de lignes de code dans chaque logiciel majeur.

*Exemple : Le noyau Linux, partie centrale du système d'exploitation, contient plus de 24 millions de lignes de code et change à un rythme étonnant.*

### Processus de gestion des vulnérabilités

Compte tenu de la complexité des logiciels modernes, les développeurs commettent des erreurs qui entraînent des vulnérabilités de sécurité. La communauté de la sécurité a un processus bien établi pour gérer ces vulnérabilités :

1. **Identification de la vulnérabilité** : Lorsqu'une entreprise apprend l'existence d'une vulnérabilité, elle analyse le problème.

2. **Développement du correctif** : Une solution (correctif) est développée pour le problème.

3. **Diffusion du correctif** : Le correctif est diffusé via le mécanisme de mise à jour de l'entreprise.

4. **Application du correctif** : Les administrateurs du monde entier appliquent le correctif pour corriger la vulnérabilité.

### Travail des administrateurs

Pour les administrateurs, la gestion des vulnérabilités représente une charge de travail importante. Les entreprises modernes peuvent exécuter plusieurs systèmes d'exploitation différents et des centaines d'applications, ainsi que des composants comme les routeurs, les commutateurs, les appareils IoT, etc.

### Processus mature de gestion des vulnérabilités

Un processus mature inclut :

* La recherche de vulnérabilités.
* L'application de correctifs.
* Le suivi des remédiations.
* La génération de rapports sur les résultats.

### Motivations pour développer un programme de gestion des vulnérabilités

* **Sécuriser les systèmes** : Principal but du programme.

* **Conformité aux politiques de l'entreprise** : Suivi d'un mandat d'entreprise pour gérer les vulnérabilités.

* **Exigences réglementaires** : Conformité à divers règlements de cybersécurité.

#### Exemples de règlements :

1. **PCI DSS** : S'applique à toute personne traitant des informations de carte de crédit.

    * Analyses trimestrielles de vulnérabilités des systèmes et réseaux.

    * Nouvelles analyses après des changements significatifs.

    * Utilisation d'un fournisseur d'analyses approuvé.

    * Remédiation des vulnérabilités et nouvelles analyses jusqu'à l'obtention d'un rapport de santé sans vulnérabilités significatives.

2. **FISMA (USA)** : Pour les agences gouvernementales américaines.

    * Recherche régulière de vulnérabilités dans les systèmes et applications.

    * Analyse des résultats des recherches.

    * Remédiation des vulnérabilités jugées légitimes.

    * Partage des informations sur les vulnérabilités avec d'autres agences gouvernementales.

### Mise en place de la recherche de vulnérabilités

Pour mettre en place une recherche de vulnérabilités, il est recommandé de combiner trois types de tests :

1. **Analyses de vulnérabilités réseau** : Pour détecter les problèmes de sécurité des appareils connectés au réseau.

2. **Analyses d'applications** : Pour tester le code exécuté sur les appareils et détecter des défauts potentiels.

3. **Tests spécialisés pour les applications web** : Pour rechercher des problèmes courants tels que l'injection SQL et le cross-site scripting.

### Interprétation des résultats

Lors de l'interprétation des résultats des recherches de vulnérabilités, il est recommandé de compléter ces recherches par des examens des configurations des systèmes et applications et des journaux pour vérifier les résultats afin d'éviter les faux positifs et autres erreurs.

### Conclusion

Peu importe pourquoi un programme de gestion des vulnérabilités est en cours de développement, les outils et processus de base sont les mêmes. Avant de commencer, il est important de connaître les règles qui s'appliquent à l'organisation pour concevoir un programme conforme aux exigences.

## Identifier les cibles de scan

### Développer les exigences du programme

En démarrant un programme de gestion des vulnérabilités, la première étape consiste à développer des exigences pour ce programme. Il faut réfléchir si le programme est basé sur un désir général d'améliorer la sécurité, une réponse aux exigences réglementaires ou une réaction à la politique de l'entreprise.

### Transformation des exigences en liste de systèmes

Une fois cela fait, l'étape suivante est de transformer ces exigences générales en une liste des systèmes et réseaux spécifiques à scanner. Pour créer cette liste, il est nécessaire de disposer d'un inventaire des actifs fiable.

* Si l'organisation pratique déjà une bonne gestion des actifs, cet inventaire est peut-être déjà prêt à être intégré dans le programme de gestion des vulnérabilités.

* Les outils de gestion de la configuration de l'organisation peuvent disposer d'un inventaire complet des systèmes et des appareils sur le réseau, mis à jour grâce aux analyses régulières de découverte réseau.

* Si cela n'est pas possible, il peut être nécessaire de se tourner vers une analyse effectuée par la solution de gestion des vulnérabilités.

### Exécution des analyses de découverte des hôtes

Plutôt que de lancer une analyse complète des vulnérabilités, ce qui peut être très long, le système permet probablement de lancer une analyse légère qui recherche simplement les systèmes sur le réseau local.

Exemple avec **Nessus** :

1. Cliquer sur "`host directory`".

2. Donner un nom à l'analyse (par exemple, "*My Internal Network*").

3. Fournir les cibles de l'analyse en utilisant les adresses IP privées des systèmes sur ce réseau (*172.31.0.0/16*).

4. Cliquer sur le bouton "Save".

5. Lancer l'analyse en cliquant sur le bouton "Launch".

### Analyse des résultats

Au fur et à mesure que l'analyse se déroule, une liste des hôtes apparaissant sur le réseau est remplie. Ces hôtes peuvent ensuite être analysés pour des vulnérabilités supplémentaires en utilisant des analyses de vulnérabilités plus avancées.

*Exemple avec ***Qualys*** : Une vue graphique des résultats de la découverte réseau peut être fournie.*

### Priorisation des actifs pour les analyses

Une fois un inventaire des actifs solide en place, il est nécessaire de commencer à prioriser ces actifs pour les analyses. Cela se fait en répondant à trois questions clés sur chaque actif.

1. Importance du système :

    * Impact en cas de violation.

    * Niveau de classification des données stockées, traitées ou transmises par le système.

*Exemple : Un système traitant des informations sensibles aura une priorité plus élevée.*

2. Niveau de risque :

    * Probabilité d'une attaque réussie.

    * Exposition réseau (accessible depuis l'internet public ? Derrière un pare-feu ?).

*Exemple : Un serveur web accessible publiquement est plus susceptible d'être attaqué qu'un serveur interne.*

3. Criticité du système :

    * Importance pour les opérations.

    * Impact sur les opérations commerciales si le système n'est pas disponible.

*Exemple : Un système critique pour les opérations commerciales sera priorisé par rapport à un système non critique.*

### Scan de tous les systèmes

De nombreuses organisations adoptent l'approche de scanner régulièrement tous les systèmes, appareils et applications dans leur environnement. Cela est acceptable mais n'élimine pas le besoin de réaliser un inventaire des actifs et d'identifier la criticité des différentes ressources.

Exemple : Même en scannant tout, il est nécessaire de prioriser les efforts de remédiation.

## Configuration du Scan
### Créer un nouveau scan

Nous venons de réaliser un simple scan de vulnérabilité, mais explorons maintenant le processus de configuration d'un scan en détail.

1. Nouveau scan :

    * Cliquer sur le bouton "New Scan".

    * Choisir parmi une série de modèles préconfigurés (ou sélectionner "advanced scan" pour choisir ses propres paramètres de scan).

*Exemple : Configurer un scan appelé "Mike's Scan".*

2. Paramètres de base :

    * Nommer le scan.

    * Décrire le scan (optionnel).

    * **Boîte de cibles** : Configurer la portée du scan en entrant les noms, adresses IP ou plages de réseaux.

*Exemple : Scanner tous les systèmes dans le réseau 172.30.0.0/24.*

3. Fichier de cibles :

    * Télécharger un fichier de cibles si l'organisation dispose d'un outil de gestion des actifs séparé.

### Organiser le programme de scan

* Fréquence de scan : Organiser les scans en fonction de la fréquence souhaitée (quotidienne, hebdomadaire, etc.).

* Exemples :

    * Scanner les systèmes traitant des informations confidentielles, sensibles et très sensibles séparément.

    * Configurer le scan pour qu'il s'exécute du lundi au vendredi à une heure spécifique.

### Notifications

* Destinataires des rapports : Configurer les destinataires des rapports de scan par e-mail une fois le scan terminé.

### Paramètres techniques

1. Découverte des hôtes :

    * Configurer les types de pings réseau.

    * Gérer les appareils comme les imprimantes et les systèmes Netware.

2. Scannage des ports :

    * Configurer les ports spécifiques à scanner.

    * Définir les protocoles à utiliser pour la détection des ports ouverts.

Par défaut, Nessus inclut tous les ports couramment utilisés, mais il est possible de configurer des ports personnalisés.

3. Sensibilité du scan :

    * Niveau de sensibilité : Configurer le niveau de sensibilité du scan pour équilibrer le risque de fausses alertes et de vulnérabilités manquées.

*Exemple : Utiliser "normal accuracy" par défaut, ou configurer pour montrer ou éviter les fausses alertes.*

4. Paramètres avancés :

    * **Safe checks** : Activer pour éviter de perturber les systèmes.

    * **Performance du scan** : Ralentir le scan en cas de congestion réseau, définir des délais spécifiques et des contrôles pour limiter le taux de scan.

### Plugins

Nessus utilise des plugins pour effectuer des vérifications de vulnérabilités. Chaque plugin est conçu pour vérifier une vulnérabilité spécifique, et ils sont organisés par type de systèmes affectés.

## Perspective du Scan
### Différents types de scans de vulnérabilités

Tous les scans de vulnérabilités ne sont pas identiques. Bien qu'ils puissent tester les mêmes systèmes avec les mêmes outils, ports et services, d'autres facteurs peuvent influencer les résultats des scans. Parlons de la perspective du scan.

### Importance de la localisation du scanner

La localisation du scanner sur le réseau par rapport aux systèmes scannés est cruciale :

1. Scanner dans la DMZ :

    * Accès non restreint au serveur web.

    * Pas besoin de passer par le pare-feu.

2. Scanner dans le réseau interne :

    * Le trafic du scanner doit passer par le pare-feu.

    * Le pare-feu peut bloquer les connexions non autorisées et filtrer le trafic suspect.

3. Scanner sur internet :

    * Le trafic doit passer par le pare-feu avec des règles plus strictes pour le trafic entrant.

    * Moins de vulnérabilités détectées en raison des règles de pare-feu plus strictes.

### Quelle perspective est correcte ?

Chaque perspective est correcte et offre une vue différente :

* **Scanner dans la DMZ** : Offre une vue claire des vulnérabilités du système cible.

* **Scanner sur internet** : Offre la perspective d'un attaquant externe, aidant à prioriser les efforts de remédiation.

### Impact des pare-feu et systèmes de prévention des intrusions

* Les paramètres du pare-feu influencent les scans de vulnérabilités en modifiant la segmentation des systèmes et services visibles.

* Les systèmes de prévention des intrusions (IPS) actifs sur le réseau affectent également les résultats des scans.

### Scans basés sur le serveur et scans basés sur l'agent

1. Scans basés sur le serveur :

    * Le scanner de vulnérabilités se connecte à un système via le réseau et le sonde pour détecter les vulnérabilités.

2. Scans basés sur l'agent :

    * Un agent de sécurité est installé sur chaque serveur, sonde la configuration du serveur et vérifie les vulnérabilités.

    * Les agents rapportent les faiblesses découvertes au système central de gestion des vulnérabilités.

    * Certaines organisations évitent cette méthode pour ne pas augmenter la complexité de leur environnement.

### Scans basés sur les identifiants

Une alternative aux scans basés sur l'agent est le scan basé sur les identifiants :

1. Configurer les scans basés sur les identifiants dans Nessus :

    * Choisir l'onglet "credentials" dans les paramètres du scan.

    * Configurer les identifiants SSH ou Windows.

    * Remplir le nom d'utilisateur, le mot de passe ou la clé privée associée.

*Bonnes pratiques* : Ne pas fournir de compte administratif au scanner, mais plutôt un compte avec un accès en lecture seule à la configuration du système.

## Security Content Automation Protocol (***SCAP***)
### Introduction

Le monde de la gestion des vulnérabilités est rempli de jargon, rendant parfois les choses confuses. Les termes "vulnérabilité des applications web", "problème d'injection SQL" et "défaut de validation des entrées" peuvent tous désigner la même chose. De plus, les vulnérabilités peuvent être qualifiées de "sévères", "critiques" ou "urgentes", ajoutant à l'ambiguïté. Cette confusion peut empêcher l'automatisation des activités de gestion des vulnérabilités, comme si les systèmes ne parlaient pas la même langue.

### Le rôle du SCAP

Le **Security Content Automation Protocol** (***SCAP***) intervient ici. C'est un effort dirigé par le National Institute for Standards and Technology (NIST) pour créer un langage et un format cohérents pour discuter des problèmes de sécurité. Les systèmes conformes aux standards SCAP peuvent partager des informations de manière cohérente pour décrire les environnements, les vulnérabilités et les étapes de remédiation.

### Les composants du SCAP

Voici un aperçu des composants du SCAP :

1. Common Vulnerability Scoring System (CVSS) :

    * Utilisé dans toute la communauté de la sécurité pour évaluer la gravité des vulnérabilités de sécurité.

    * Les scores CVSS sont présents dans la plupart des produits de scan de vulnérabilités et dans les rapports de scan.

2. Common Configuration Enumeration (CCE) :

    * Offre un langage cohérent pour partager les configurations de système.

3. Common Platform Enumeration (CPE) :

    * Standardise les noms et les versions des produits.

4. Common Vulnerabilities and Exposures (CVE) :

    * Fournit un langage pour décrire les vulnérabilités.

5. Extensible Configuration Checklist Description Format (XCCDF) :

    * Fournit un langage pour créer et partager des listes de contrôle et les résultats de traitement des listes de contrôle de sécurité.

6. Open Vulnerability and Assessment Language (OVAL) :

    * Décrit les procédures de test de manière programmatique.

### Détail sur le CVSS

Parmi ces composants, le **Common Vulnerability Scoring System** (***CVSS***) est particulièrement utilisé car il offre une méthode cohérente pour évaluer la gravité des vulnérabilités de sécurité.

## CVSS (*Common Vulnerability Scoring System*)
### Introduction

Le **Common Vulnerability Scoring System** (***CVSS***) attribue un score à chaque vulnérabilité sur une échelle de 10 points. Ce score de base est déterminé en évaluant huit métriques différentes et en combinant les résultats.

### Métriques du CVSS

1. Vecteur d'attaque (Attack Vector) :

    * Type d'accès requis par un attaquant pour exploiter une vulnérabilité.

    * Valeurs possibles :

        * **Physical**: L'attaquant doit toucher ou manipuler physiquement le système cible.

        * **Local**: L'attaquant doit avoir un accès physique ou logique à la console du système.

        * **Adjacent Network**: L'attaquant doit avoir accès au réseau local du système.

        * **Network**: La vulnérabilité est exploitable à distance.

2. Complexité de l'attaque (Attack Complexity) :

    * Difficulté d'exploitation d'une vulnérabilité.

    * Valeurs possibles :

        * **High**: Conditions spécialisées et travail difficile requis.

        * **Low**: Facile à exploiter.

3. Privilèges requis (Privileges Required) :

    * Niveau d'accès utilisateur nécessaire pour exploiter la vulnérabilité.

    * Valeurs possibles :

        * **High**: L'attaque nécessite des privilèges administratifs.

        * **Low**: L'attaque nécessite l'utilisation d'un compte utilisateur de base.

        * **None**: L'attaque peut être exploitée sans aucun accès préalable au système.

4. Interaction utilisateur (User Interaction) :

    * Niveau d'interaction humaine nécessaire.

    * Valeurs possibles :

        * **Required**: L'attaquant doit inciter un utilisateur autorisé à effectuer une action.

        * **None**: L'attaquant peut réaliser l'attaque seul.

### Impact des vulnérabilités

Les trois éléments de la **triade CIA** (***Confidentialité, Intégrité, Disponibilité***) sont utilisés pour mesurer l'impact d'une vulnérabilité :

1. Confidentialité (Confidentiality) :

    * Valeurs possibles :

        * **None**: Aucun impact sur la confidentialité.

        * **Partial**: Accès à une partie des informations.

        * **High**: Toutes les informations du système sont compromises.

2. Intégrité (Integrity) :

    * Valeurs possibles :

        * **None**: Aucun impact sur l'intégrité.

        * **Low**: Modification possible de certaines informations.

        * **High**: Toutes les informations peuvent être modifiées à volonté.

3. Disponibilité (Availability) :

    * Valeurs possibles :

        * **None**: Aucun impact sur la disponibilité.

        * **Low**: Dégradation des performances.

        * **High**: Arrêt complet du système cible.

### Portée (Scope) :

Capturer si une vulnérabilité peut affecter des composants autres que le composant vulnérable :

* **Changed**: La vulnérabilité peut affecter des ressources au-delà de son périmètre initial.

* **Unchanged**: L'exploit ne peut affecter que les ressources gérées par la même autorité de sécurité.

## Analyse des rapports de scan
### Rôle de l'analyste en cybersécurité

En tant qu'analyste en cybersécurité, une grande partie du temps est consacrée à l'analyse des rapports de scans de vulnérabilités. Les responsabilités incluent :

* Tri des résultats des scans

* Présentation de l'information à divers publics :

    * **Ingénieurs, développeurs et administrateurs systèmes** : Fournir les détails techniques nécessaires pour corriger les problèmes.

    * **Leaders d'entreprise** : Expliquer les tendances et les évaluations des risques élevés.

    * **Gestion de la sécurité** : Présenter une vue d'ensemble de la gestion des risques de l'organisation.

### Facteurs clés lors de l'interprétation des rapports

Cinq facteurs principaux à considérer :

1. Gravité de la vulnérabilité :

    * Évaluer la sévérité.

2. Criticité des systèmes affectés :

    * Importance des systèmes touchés.

3. Sensibilité des informations impliquées :

    * Niveau de sensibilité des données concernées.

4. Difficulté de remédiation :

    * Complexité de la correction de la vulnérabilité.

5. Exposition du système :

    * Niveau d'exposition du système vulnérable.

### Validation des vulnérabilités

Avant de demander la remédiation, il est crucial de valider la vulnérabilité. Cela implique :

* Vérification de l'existence de la vulnérabilité :

    * Les scanners de vulnérabilités peuvent générer des faux positifs pour diverses raisons.

    * Vérifier que la signature utilisée par le scanner est bien définie.

    * Vérifier que le scanner peut détecter les contrôles de sécurité présents.

* Revue des détails du rapport de scan :

    * Analyser les entrées et sorties fournies par le scanner.

    * Comprendre pourquoi le scanner a signalé une vulnérabilité.

*Exemple : Un rapport de scan montrant une vulnérabilité critique dans la version du noyau Linux Ubuntu sur un hôte réseau avec un score CVSS de 10.0. Vérifier les alertes et confirmer que le système exécute une version affectée.*

### Détection des faux positifs et des exceptions

* **Faux positifs** : Parfois, les faux positifs sont faciles à identifier. Par exemple, un rapport indiquant qu'un serveur Windows manque un patch Mac est probablement un faux positif.

* **Exceptions** : Certaines vulnérabilités peuvent être reconnues par l'organisation, avec des contrôles compensatoires en place ou une acceptation du risque.

### Conséquences de la validation incorrecte

* Détecter les faux positifs et les exceptions est crucial avant d'escalader les vulnérabilités pour remédiation.

* Risque de perdre en crédibilité si les rapports de vulnérabilités sont mal validés.

### Types de résultats des rapports de vulnérabilités

Il existe quatre résultats possibles pour tout rapport de vulnérabilité :

1. **True Positive** : La vulnérabilité existe réellement.

2. **False Positive** : La vulnérabilité n'existe pas réellement.

3. **True Negative** : Pas de vulnérabilité et pas de détection.

4. **False Negative** : La vulnérabilité existe mais n'a pas été détectée.

## Correlation des Résultats de Scan
### Validation et élimination des faux positifs

En plus de valider les résultats des scans pour éliminer les faux positifs et enlever les exceptions documentées, il est essentiel de corréler les rapports de scan avec d'autres informations disponibles à partir de diverses sources.

### Sources d'informations à consulter

1. **Standards de l'industrie, meilleures pratiques et obligations de conformité** :

    * Ces standards fournissent des directives spécifiques sur les types de vulnérabilités nécessitant une remédiation urgente.

*Exemple : PCI DSS : Pour démontrer la conformité, un scan ne doit contenir aucune vulnérabilité de haut niveau dans les composants de l'environnement des données de carte. Pour être conforme, aucun de ces composants ne doit contenir une vulnérabilité avec un score CVSS égal ou supérieur à 4.0.*

2. **Informations techniques internes** :

    * Systèmes de gestion de configuration, référentiels de journaux et autres sources de données peuvent aider à détecter et éliminer les faux positifs.

3. **Corrélation des informations des scans** :

    * Surveiller les tendances historiques dans les scans.

    * Identifier les problèmes sous-jacents si les mêmes types de vulnérabilités continuent d'apparaître.

*Exemple : Si de nouvelles applications web présentent régulièrement des vulnérabilités de type cross-site scripting, il peut être nécessaire de former les développeurs ou de créer des bibliothèques standard de validation des entrées.*

### Conclusion

Corréler les résultats des scans avec d'autres informations permet de mieux gérer les vulnérabilités et d'adresser les causes sous-jacentes, réduisant ainsi le besoin de remédiation ultérieure.

<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::