---
sidebar: auto
---
# Renseignements sur les menaces
<Badge type="tip" text="Rédigé le 06/04/2024" />

## L'Importance du renseignement sur les menaces

Le renseignement sur les menaces est un composant essentiel du programme de cybersécurité de toute organisation, lui permettant de rester à jour sur les menaces émergentes en matière de cybersécurité. Défini de manière large, le renseignement sur les menaces consiste en l'ensemble des activités qu'une organisation entreprend pour se tenir informée des changements dans le paysage des menaces en matière de cybersécurité et pour intégrer des informations sur les menaces changeantes dans ses opérations de cybersécurité.

### Intelligence ouverte sur les menaces

Il existe une tonne d'informations disponibles en ligne sur les menaces en matière de cybersécurité. En fait, vous pourriez probablement faire un travail à temps plein de lecture sur la cybersécurité. La plupart d'entre nous n'ont pas le temps de lire toute la journée, mais chaque professionnel de la sécurité devrait prendre le temps de rester à jour dans notre domaine. La collecte d'informations à partir de sources publiques librement accessibles est connue sous le nom d'intelligence ouverte sur les menaces. Certaines des sources les plus courantes d'intelligence ouverte sur les menaces comprennent les sites Web de sécurité, les bases de données de vulnérabilités, les médias d'information générale, les réseaux sociaux, les informations publiées sur le dark web, les centres de partage d'informations publics et privés, les référentiels de fichiers et de code, et les organisations de recherche en sécurité.

### Renseignement sur les menaces propriétaire

Combiner toutes ces sources d'intelligence ouverte sur les menaces peut être très chronophage, et de nombreuses organisations n'ont tout simplement pas le temps d'investir dans la lecture de ces données et leur exploitation pour en extraire des informations critiques. Une industrie entière du renseignement sur les menaces a vu le jour pour soutenir ces entreprises avec des produits de renseignement sur les menaces fermés et propriétaires qui utilisent l'analyse prédictive.

### Critères d'évaluation des sources de renseignement sur les menaces

Avec toutes ces sources d'informations disponibles, il faut prendre le temps d'évaluer à quel point chacune d'entre elles convient à son programme de sécurité. On peut utiliser trois critères importants pour évaluer une source de renseignement sur les menaces :

1. ***Rapidité*** : À quelle vitesse la source de renseignement sur les menaces reflète-t-elle les nouvelles informations sur une nouvelle menace ou son évolution ?
2. ***Exactitude*** : Les informations rapportées par la source de renseignement sur les menaces sont-elles correctes ?
3. ***Fiabilité*** : Les sources de renseignement sur les menaces doivent être fiables, c'est-à-dire qu'elles doivent fournir de manière cohérente des renseignements opportuns et précis d'une manière qui répond aux besoins commerciaux.

## Gestion des informations sur les menaces

Les outils de gestion des informations sur les menaces simplifient le traitement des informations sur les menaces. L'un des éléments les plus importants des données sur les menaces sont les indicateurs de menace. Ce sont des éléments d'information qui permettent de décrire ou d'identifier une menace. Par exemple, les indicateurs de menace peuvent inclure des adresses IP, des signatures de fichiers malveillants, des modèles de communication ou d'autres identifiants que les analystes peuvent utiliser pour identifier un acteur de menace.

### Cadres de partage d'informations sur les menaces

Le partage d'informations sur les menaces est essentiel pour rendre les informations utiles. Plusieurs cadres sont disponibles pour faciliter cette tâche :

* ***Cyber Observable eXpression*** (CybOX) : Fournit un schéma normalisé pour catégoriser les observations de sécurité. CybOX aide à comprendre quelles propriétés on peut utiliser pour décrire les tentatives d'intrusion, les logiciels malveillants et autres événements de sécurité observables lorsque nous essayons de les expliquer à d'autres personnes.

* ***Structured Threat Information eXpression*** (STIX) : Langage normalisé utilisé pour communiquer des informations de sécurité entre les systèmes au sein des organisations. STIX prend les propriétés du cadre CybOX et nous donne un langage que l'on peut utiliser pour décrire ces propriétés de manière structurée.

* ***Trusted Automated eXchange of Indicator Information*** (TAXII) : Ensemble de services qui permettent de partager des informations de sécurité entre les systèmes au sein des organisations. TAXII fournit un cadre technique pour l'échange de messages écrits dans le langage STIX.

* ***Cadre*** ***OpenIOC*** : Il s'agit d'un autre cadre pour décrire et partager des informations sur les menaces de sécurité, développé à l'origine par l'équipe de sécurité **Mandiant de FireEye**. OpenIOC permet de décrire une menace de manière structurée et détaillée, comme illustré dans l'exemple de description d'une menace utilisant le cadre OpenIOC.

### Automatisation de l'échange d'informations sur les menaces

Automatiser l'échange d'informations sur les menaces entre les appareils simplifie le travail des analystes en sécurité et améliore l'efficacité du travail en matière de sécurité. En veillant à ce que les outils de sécurité puissent à la fois générer et consommer des indicateurs de menace dans le même format, on facilite l'intégration et l'analyse des informations sur les menaces.

## Utilisation de la technologie pour le partage des informations sur les menaces

Après avoir appris sur certaines des technologies utilisées pour partager les informations sur les menaces entre les systèmes de leur organisation, ils peuvent réfléchir aux différentes fonctions commerciales qui bénéficieraient de ces informations au sein de leur propre organisation :

1. ***Équipes d'intervention en cas d'incident*** : Elles sont chargées de répondre activement aux incidents de sécurité.

2. ***Équipes de gestion des vulnérabilités*** : Elles doivent identifier les failles potentielles pouvant conduire à des incidents futurs.

3. ***Équipes de gestion des risques*** : Elles doivent comprendre le tableau d'ensemble des risques en matière de cybersécurité.

4. ***Équipes d'ingénierie de sécurité*** : Elles doivent concevoir des contrôles pour lutter contre les menaces émergentes.

5. ***Équipes de détection et de surveillance*** : Telles que les centres opérationnels de sécurité, responsables de la surveillance active de l'environnement de sécurité pour détecter les indicateurs de menace.

Les cadres technologiques pour le renseignement sur les menaces permettent le partage automatisé d'informations entre les outils et systèmes utilisés par chacune de ces fonctions. Cependant, les informations deviennent encore plus puissantes lorsqu'elles sont partagées de manière collaborative entre différentes organisations.

### Centres de partage et d'analyse d'informations

Pour faciliter ce travail, les ***C***entres de ***P***artage et d'***A***nalyse d'***I***nformations (***ISAC***) rassemblent les équipes de cybersécurité de différentes organisations concurrentes pour aider à partager des informations sur la sécurité spécifiques à l'industrie de manière confidentielle. L'objectif des ISAC est de rassembler et de diffuser des renseignements sur les menaces sans compromettre l'anonymat, offrant ainsi un moyen sûr pour les concurrents de coopérer.

Chaque industrie a généralement son propre ISAC, et ces organisations à but non lucratif sont assez rentables. S'ils sont actifs dans le domaine de la cybersécurité, ils devraient rechercher l'ISAC de leur industrie et participer à leurs efforts de partage d'informations.

## Utilisation du renseignement sur les menaces

Le renseignement sur les menaces est utilisé par les professionnels de la sécurité pour mieux comprendre l'environnement dans lequel ils évoluent. En comprenant les motivations et les capacités des adversaires, ces professionnels peuvent mieux protéger leurs organisations contre les attaques. La recherche de menaces consiste à utiliser ce renseignement pour pénétrer dans l'esprit des adversaires.

Pendant la recherche de menaces, il existe deux techniques principales utilisées pour identifier les menaces potentielles :

### Recherche de réputation sur les menaces

Cette approche vise à identifier les acteurs ayant déjà été impliqués dans des activités malveillantes par le passé. En utilisant des informations sur les adresses IP, les adresses e-mail ou les domaines utilisés pour des attaques antérieures, les professionnels peuvent bloquer les tentatives futures de ces sources de se connecter à leur organisation.

### Recherche comportementale sur les menaces

Cette approche vise à repérer les personnes et les systèmes ayant des comportements inhabituels, similaires à ceux des attaquants passés. Même avec de nouvelles adresses IP, des schémas de comportement ressemblant à ceux d'attaquants précédents peuvent être détectés.

### Objectifs

La recherche de réputation et la recherche comportementale permettent d'aborder le problème de la reconnaissance des menaces sous des angles différents et, lorsqu'elles sont combinées, elles forment un programme de recherche de menaces puissant.

La recherche de menaces est un domaine fascinant qui plonge les professionnels de la sécurité dans le monde obscur des outils et des techniques de piratage. Pour rester à jour, ils utilisent une variété de sources de recherche telles que les sites web des fournisseurs, les flux de vulnérabilités, les conférences sur la cybersécurité, les journaux académiques, les documents RFC, les réseaux sociaux, les flux de menaces, etc. L'utilisation de ces sources diverses aide à maintenir les connaissances à jour dans ce domaine en évolution rapide.

## Utilisation de la modélisation pour identifier et prioriser les menaces

Les organisations sont confrontées à de nombreuses menaces différentes, et il est souvent difficile de suivre toutes ces menaces et d'identifier celles qui présentent le plus grand risque. Les professionnels de la sécurité utilisent des techniques de modélisation des menaces pour identifier et prioriser les menaces et aider à la mise en œuvre de contrôles de sécurité.

Lors de l'identification des menaces potentielles pour une organisation, les professionnels de la sécurité doivent utiliser une approche structurée. Il ne suffit pas de s'asseoir et de commencer à penser à tout ce qui pourrait mal tourner. Il est trop facile de laisser des éléments de côté avec ce type d'approche désordonnée de l'identification des menaces. Au lieu de cela, on mène une visite guidée structurée des menaces potentielles pour les informations et les systèmes.

Ci-dessous, trois façons dont une organisation peut utiliser une approche structurée pour l'identification des menaces :

1. ***Approche axée sur les actifs*** : Dans cette approche, les analystes utilisent l'inventaire des actifs de l'organisation comme base de leur analyse et parcourent actif par actif, identifiant les menaces potentielles pour chaque actif. Par exemple, lorsqu'ils examinent la présence web de l'organisation, ils pourraient identifier la coupure d'un seul câble de fibre optique comme une menace pour la disponibilité continue du site web.

2. ***Approche axée sur les menaces*** : En utilisant cette méthode, l'organisation réfléchit à toutes les menaces possibles, puis réfléchit à la manière dont ces menaces pourraient affecter différents systèmes d'information de l'organisation. Par exemple, ils pourraient lister la menace d'un pirate informatique, puis réfléchir à toutes les façons dont un pirate informatique pourrait essayer de prendre accès à leur réseau. Les menaces pour une organisation peuvent inclure un large éventail de groupes, allant des adversaires connus aux entrepreneurs, partenaires de confiance, et même des employés malveillants.

3. ***Approche axée sur le service*** : Cette approche est la plus couramment utilisée par les fournisseurs de services qui proposent des services sur internet à d'autres organisations. Par exemple, une organisation qui expose une API au public pourrait réfléchir à toutes les interfaces offertes par cette API et aux menaces qui pourraient affecter chaque interface.

L'identification de toutes les menaces auxquelles une organisation est confrontée est la première étape du processus de modélisation des menaces.

## Automatisation de la veille sur les menaces

Dans le domaine de la cybersécurité, l'intelligence sur les menaces joue un rôle crucial, et l'automatisation peut offrir des avantages significatifs.

### Blacklisting automatique des adresses IP malveillantes

L'un des pratiques d'automatisation les plus utiles est le **blacklistage automatique des adresses IP signalées par les services d'intelligence sur les menaces** comme sources d'activité malveillante. Ces services fournissent souvent des flux en temps réel d'adresses IP détectées comme malveillantes sur différents réseaux. Ces flux sont conçus pour une **intégration transparente avec les pare-feu**, les **systèmes de prévention des intrusions**, les **routeurs et autres dispositifs capables de bloquer automatiquement le trafic**. Cependant, les organisations doivent ***approcher avec prudence le déploiement d'outils qui bloquent automatiquement le trafic***. Initialement, elles peuvent opter pour un mode alerte uniquement, permettant aux analystes en cybersécurité d'enquêter manuellement sur le trafic signalé. Une fois la précision du service confirmée, les organisations peuvent passer au blocage automatisé.

### Consolidation automatisée des renseignements sur les menaces

L'automatisation peut également simplifier la consolidation des renseignements sur les menaces provenant de plusieurs sources en un flux d'intelligence unifié. Cela simplifie la gestion des données sur les menaces et améliore la visibilité globale.

### Réponse aux incidents automatisée

La réponse aux incidents est un autre domaine où l'automatisation évolue rapidement. Bien que la détection initiale des incidents puisse être automatisée, les enquêtes et les réponses ultérieures reposent souvent sur l'intervention humaine. Cependant, les organisations automatisent de plus en plus certaines parties de leurs processus de réponse aux incidents pour accélérer les enquêtes. Une approche efficace consiste à automatiser l'enrichissement des données sur les incidents, où les détails routiniers d'un incident sont automatiquement enquêtés et ajoutés au rapport sur l'incident. Par exemple, lorsqu'un système de détection d'intrusion signale une attaque potentielle, les flux de travail automatisés peuvent effectuer une reconnaissance sur l'adresse IP source, recueillir des données de géolocalisation, récupérer des informations de journal supplémentaires pour le système ciblé, et même initier des analyses de vulnérabilité pour évaluer la gravité de l'attaque. Ces actions se produisent immédiatement après la détection de l'incident, permettant aux analystes en cybersécurité de se concentrer sur des tâches de niveau supérieur.

### Plateformes SOAR et utilisation de l'IA

Les plateformes SOAR (***S***ecurity ***O***rchestration, ***A***utomation, and ***R***esponse) jouent un rôle central dans l'automatisation des tâches de cybersécurité. En utilisant l'apprentissage automatique et l'intelligence artificielle, les analystes peuvent automatiser la création de signatures de logiciels malveillants, permettant une réponse rapide aux menaces émergentes.

En conclusion, l'automatisation dans le domaine de l'intelligence sur les menaces et de la réponse aux incidents améliore l'efficacité et l'efficience des opérations de cybersécurité, permettant aux organisations de se défendre de manière proactive contre les menaces en constante évolution.

## Chasse aux menaces

Cet aperçu fournit une compréhension complète de l'évolution des stratégies de cybersécurité et de l'émergence de la chasse aux menaces en tant qu'approche proactive pour faire face aux menaces cybernétiques.

### Changement du paysage de la cybersécurité

L'approche traditionnelle consiste à se concentrer uniquement sur la construction de défenses solides n'est plus suffisante. Avec l'émergence d'attaquants sophistiqués, il est désormais reconnu comme irréaliste de prévenir chaque type d'attaque possible. Ce changement de mentalité a conduit à l'acceptation de l'hypothèse de compromission, où les organisations reconnaissent que les attaquants peuvent déjà avoir une présence dans leurs réseaux.

### Introduction de la chasse aux menaces
    
La chasse aux menaces est présentée comme une approche organisée et systématique pour rechercher des indicateurs de compromission sur les réseaux. Elle implique l'utilisation d'une combinaison de techniques de sécurité établies et de nouvelles technologies d'analyse prédictive pour traquer de manière proactive les signes d'activité suspecte.

### Changement de mentalité

La croissance rapide de l'intérêt pour la chasse aux menaces indique que les organisations adoptent de plus en plus cette approche proactive de la cybersécurité.
La chasse aux menaces nécessite un changement de mentalité d'une approche axée sur la défense à une approche axée sur l'offensive. Les chasseurs de menaces doivent penser comme les attaquants pour identifier et atténuer efficacement les menaces potentielles.

### Établissement d'une hypothèse

La chasse aux menaces commence par l'établissement d'une hypothèse sur la manière dont un attaquant pourrait infiltrer les systèmes de l'organisation. Cette hypothèse est informée par le renseignement sur les menaces, les flux de menaces, les avis de vulnérabilité et d'autres sources d'information.

### Identification des indicateurs de compromission (IOC)

Les chasseurs de menaces recherchent des indicateurs de compromission associés à l'hypothèse établie. Ces indicateurs pourraient inclure des fichiers, des processus, des activités de compte, des modèles de trafic réseau, des entrées de journal ou des changements de configuration inhabituels.

### Amélioration des capacités de détection

Les organisations peuvent améliorer leurs capacités de détection en intégrant leurs propres efforts de renseignement sur les menaces avec des produits de renseignement sur les menaces tiers et des données collectées par leurs systèmes de gestion des informations et des événements de sécurité (SIEM).

### Processus de réponse

Lorsque des indicateurs de compromission sont découverts, les organisations passent à leur processus standard de réponse aux incidents. Cela implique d'enquêter sur la manière dont l'attaquant a manœuvré à travers le réseau et d'initier des efforts de confinement, d'éradication et de récupération.

Dans l'ensemble, il faut mettre l'accent sur l'importance d'adopter une approche proactive et agile de la cybersécurité grâce à la chasse aux menaces, en réponse à l'évolution du paysage des menaces.


<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::