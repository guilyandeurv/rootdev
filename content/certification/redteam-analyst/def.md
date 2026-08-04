---
sidebar: auto
date: 2024-12-06
---

# <RdIcon name="book-type" /> Red Teaming : définitions
::: tip Utilisation
Utilisez la barre de recherche en haut de cette page, ou bien utilisez le raccourci clavier `CTRL` + `F` pour rechercher la définition voulue.
:::

::: info Emulation de l'adversaire
L'émulation de l'adversaire consiste à imiter quelqu'un ou quelque chose d'autre. Basée sur le renseignement sur les menaces. La simulation de l'adversaire consiste à faire croire qu'une attaque réelle est en train de se produire alors qu'il n'y a pas d'adversaire réel.
:::

::: info Menace persistante avancée [APT]
Une menace persistante avancée est un acteur furtif, généralement un État-nation ou un groupe parrainé par un État, qui obtient un accès non autorisé à un réseau informatique et reste indétecté pendant une période prolongée.
:::

::: info Exploit
Il s'agit du code réel par lequel un attaquant peut tirer parti d'une faille particulière.
:::

::: info Vulnérabilité
La faille existant dans un logiciel ou un matériel particulier peut être appelée vulnérabilité. Elle peut également être considérée comme le maillon faible qui permet à un pirate de compromettre le système.
:::

::: info Zone démilitarisée (DMZ)
Il s'agit d'un réseau (physique ou logique) utilisé pour connecter des hôtes qui fournissent une interface à un réseau externe non fiable. Les systèmes les plus vulnérables aux attaques sont ceux qui fournissent des services aux utilisateurs en dehors du réseau local, tels que les serveurs de courrier électronique, les serveurs Web et les serveurs de noms de domaine (DNS), qui sont présents à l'intérieur d'une zone démilitarisée.
L'objectif ultime d'une DMZ est de permettre l'accès à des ressources provenant de réseaux non fiables tout en préservant la sécurité du réseau privé. 
:::

::: info Zones militarisées (réseau MZ)
Zone bénéficiant d'une sécurité maximale et constituant l'un des segments les plus sûrs de l'environnement. Elle contient des informations critiques sur l'organisation, etc.
Toutes les opérations de l'organisation sont gérées à partir du réseau militarisé.
:::

::: info Tactiques, techniques et procédures (TTP)
Les TTP expliquent comment les acteurs de la menace orchestrent et gèrent les cyberattaques. Elles expliquent les méthodes associées à un acteur ou à un groupe d'acteurs de la menace.
- Une « tactique » est la description la plus détaillée du comportement d'un acteur de la menace.
- Les « techniques » donnent une description plus détaillée du comportement dans le contexte d'une tactique.
- Les « procédures » sont une description encore plus détaillée dans le contexte d'une technique.
:::

::: info Listener
Le Listener attend une connexion entrante de la machine cible. Ecouter signifie ouvrir un port et attendre une connexion de la machine cible.
- Des outils comme netcat sont l'un des meilleurs exemples disponibles pour les plateformes Windows et Linux. 
:::

::: info Exploitation
L'exploitation est une phase à réaliser après l'identification correcte d'une vulnérabilité.  Un service fonctionnant sur un système, une application web, un logiciel sont les cibles principales de l'exploitation. Une mauvaise identification de la vulnérabilité, accompagnée de divers problèmes d'incompatibilité, risque de faire planter le service ou le logiciel vulnérable/cible. C'est pourquoi la cible doit être intensément énumérée avant d'entrer dans cette phase. En principe, dans cette phase, l'attaquant pénètre dans le système cible après avoir profité de la vulnérabilité existante dans le produit. L'accès peut être physique ou à distance. Si l'exploit réussit, le code réel de la charge utile s'exécute. 
:::

::: info Les singles
Il s'agit de charges utiles autonomes chargées d'effectuer une tâche spécifique, à savoir la création d'un utilisateur, ou un shell bind.
- Exemple : payload/windows/adduser
:::

::: info Stagers
Ce type de charge utile est utilisé pour télécharger une charge utile importante sur la machine cible à partir de la machine de l'attaquant. Il crée une connexion réseau entre la machine de l'attaquant et la machine compromise.
- Exemple : payload/windows/shell/bind_tcp
:::

::: info Stages
- Il s'agit de la charge utile volumineuse téléchargée par les stadiers et exécutée ensuite.
- Elles sont chargées d'exécuter des tâches complexes telles que Remote Desktop, meterpreter, etc.
  - Exemple : payload/windows/shell/bind_tcp
:::

::: info Shells
Les shells sont des interfaces non graphiques avec le système. On peut interagir et gérer l'environnement du système par le biais d'un shell. Ils sont utilisés à des fins d'administration et sont parfois décrits comme étant plus fructueux que l'interface graphique.
- Exemples :
  - Dans Windows :
    - Invite de commande
    - Power Shell
  - Sous Linux :
    - shell Bash
    - shell sh
:::

::: info Reverse Shells
Ici, la machine cible se connecte à la machine de l'attaquant. Toutes les communications passent par des ports TCP spécifiques. L'attaquant doit avoir un listener actif sur sa machine.
:::

::: info Shells de liaison
Ici, la machine de l'attaquant se connecte au système de la victime. L'attaquant ouvre un port TCP sur la machine victime et héberge un shell. Cela signifie que toute personne se connectant à la machine cible et à un port spécifique se verra présenter un shell. Ce shell peut alors être utilisé pour propager la compromission.
:::

::: info Serveur de messagerie
Un serveur de messagerie (ou serveur de courrier électronique) est un serveur qui traite et distribue le courrier électronique sur un réseau, généralement sur l'internet.Un serveur de messagerie peut recevoir des courriers électroniques d'ordinateurs clients et les transmettre à d'autres serveurs de messagerie. Un serveur de messagerie peut également délivrer des courriels à des ordinateurs clients. Lorsqu'on appuie sur le bouton « Envoyer » sur un programme de messagerie (client de messagerie), celui-ci se connecte à un serveur sur le réseau/Internet appelé serveur SMTP. SMTP est l'acronyme de Simple Mail Transfer Protocol.
Il s'agit d'un protocole utilisé lorsque des courriels sont envoyés de clients à des serveurs et de serveurs à d'autres serveurs. Lorsqu'on télécharge des courriels dans un programme de messagerie, celui-ci se connecte à un serveur sur le réseau, appelé serveur POP3.
:::

::: info Serveur de base de données (ou serveur SQL ENTERPRISE NETWORK)
- Les serveurs de base de données sont utilisés pour stocker et gérer les bases de données qui sont stockées sur le serveur et pour permettre aux utilisateurs autorisés d'accéder aux données.
- Un serveur de base de données est utile pour les organisations qui ont beaucoup de données à traiter régulièrement.
- Il permet également aux utilisateurs et aux applications d'accéder aux données de manière centralisée à travers le réseau.
- Diverses opérations telles que la modification des données, l'ajout et la suppression de données, etc. sont effectuées au moyen de requêtes SQL [Structured Query Language]. 
:::

::: info Bastion-Host (serveur de saut) :
Un hôte bastion est un ordinateur à usage spécial sur un réseau, spécialement conçu et configuré pour résister aux attaques. L'ordinateur héberge généralement une seule application, par exemple un serveur proxy, et tous les autres services sont supprimés ou limités afin de réduire la menace qui pèse sur l'ordinateur.
:::

::: info Serveur d'automatisation 
Les serveurs d'automatisation sont un aspect crucial du processus de développement de logiciels. Ils permettent d'automatiser les parties du développement logiciel liées à la construction, aux tests et au déploiement, facilitant ainsi l'intégration et la livraison continues.
Voici quelques exemples :
  - Serveur Jenkins
  - TeamCity
  - Bamboo
:::

::: info Répertoire actif
Comme son nom l'indique, il s'agit d'un annuaire (ou d'une base de données) qui :
  - gère les ressources de l'organisation telles que (utilisateurs, ordinateurs, partages, etc.)
  - Fournit des règles d'accès qui régissent les relations entre ces ressources.
  - Stocke des informations sur les objets du réseau et les met à la disposition des utilisateurs et des administrateurs.
  - Fournit une gestion centralisée de tous les actifs virtuels de l'organisation.
:::

::: info Forêts/Domaines Active Directory
- La forêt est une instance unique d'Active Directory. Il s'agit essentiellement d'une collection de contrôleurs de domaine qui se font mutuellement confiance.
- Les domaines peuvent être considérés comme des conteneurs dans le cadre d'une forêt.
- Les unités organisationnelles (OU) sont des regroupements logiques d'utilisateurs, d'ordinateurs et d'autres ressources.
- Groupes
  - Ensemble d'utilisateurs ou d'autres groupes
  - Privilégiés, non privilégiés
:::

::: info Objets Active Directory
Les entités physiques qui composent un réseau organisé
- Utilisateurs du domaine :
  - Compte d'utilisateur autorisé à s'authentifier auprès des machines/serveurs du domaine.
- Groupes de domaine (groupes globaux) :
  - Ils peuvent être utilisés pour attribuer des autorisations d'accès aux ressources dans n'importe quel domaine.
- Ordinateurs de domaine :
  - Machines qui sont connectées à un domaine et qui deviennent donc membres d'un domaine.
- Contrôleur de domaine :
  - Serveur centralisé qui répond aux demandes d'authentification de sécurité et gère diverses ressources telles que les ordinateurs, les utilisateurs, les groupes, etc.
ressources comme les ordinateurs, les utilisateurs, les groupes, etc.
- Objets de stratégie de groupe (GPO) :
  - Collection de politiques appliquées à un ensemble d'utilisateurs, de domaines, d'objets de domaine, etc.
- Ticket Granting Ticket (TGT) :
  - Ticket utilisé spécifiquement pour l'authentification
- Ticket Granting Service (TGS) :
  - Ticket utilisé spécifiquement pour l'autorisation
:::

::: info Groupes privilégiés
|Groupes privilégiés|Privilèges|
|-|-|
|Domain Admins (DA)|Disposent d'un accès administratif à toutes les ressources d'un domaine.|
|Enterprise Admins (DA)|Existe uniquement à la racine de la forêt, déjà ajouté aux Admins de domaine de chaque enfant.|
|BUILTIN\Administrators (Local Group)|Administrateur local sur un contrôleur de domaine|
|Server Operators|Ont la capacité d'administrer le serveur de domaine|
|Account Operators|Gèrent tout utilisateur ne faisant pas partie d'un groupe privilégié|
:::

::: info Authentification Kerberos
- Dans l'environnement Active Directory, toutes les requêtes et le processus d'authentification sont effectués par le biais de tickets. Par conséquent, aucun mot de passe n'est utilisé pour accéder au réseau.
- Un ticket est une forme de jeton d'authentification et d'autorisation et peut être classé comme suit :
  - Ticket Granting Ticket (TGT) pour l'authentification
  - Ticket Granting Service (TGS) pour l'autorisation
  - Les tickets (TGT et TGS) sont stockés en mémoire et peuvent être extraits à des fins abusives, car ils représentent les informations d'identification de l'utilisateur.
  - Le TGS peut être utilisé pour accéder à un service spécifique d'un serveur du domaine. 
:::