---
sidebar: auto
---
# Architecture et design
<Badge type="tip" text="Rédigé le 24/03/2024" />

## Importance des concepts de sécurité en entreprise (Objectif 2.1)

L'objectif 2.1 de l'examen Security+ est d'expliquer l'importance des concepts de sécurité dans un environnement d'entreprise. 

### Gestion de configuration :
1. Utilisation d'outils et de processus pour surveiller et gérer les configurations des systèmes, des logiciels et des appareils.
2. Utilisation de diagrammes et de configurations de référence pour comparer et maintenir les configurations conformes aux normes de sécurité.

### Protection des données :
1. Utilisation d'outils de prévention de perte de données (DLP) pour surveiller et prévenir le déplacement de données sensibles en dehors de l'organisation.
2. Utilisation de techniques telles que le chiffrement et le masquage pour protéger les données en transit et au repos.

### Souveraineté des données :
1. Considération géographiques sur l'emplacement des données et les juridictions réglementaires associées.
2. Importance accrue dans le cloud computing en raison de la répartition géographique des centres de données.

### Résilience du site :
Mise en place de sites de secours (chauds, tièdes, froids) pour garantir la continuité des activités en cas de sinistre.

La différence entre les sites :
1. ***Chauds*** : prêts à l'emploi
2. ***Tièdes*** : partiellement préparés
3. ***Froids*** : nécessitant une configuration complète

### Outils de déception et de perturbation :
1. Utilisation de leurres (honey pots, honey nets, honey files) pour attirer les attaquants et détecter les activités malveillantes.
2. Les leurres sont des systèmes ou des fichiers spécialement conçus pour alerter sur les tentatives d'attaque, sans données réellement sensibles.

En comprenant et en appliquant ces concepts, les entreprises peuvent renforcer leur posture de sécurité et protéger leurs actifs critiques contre les menaces internes et externes.

## Concepts de virtualisation et de cloud computing (Objectif 2.2)

L'objectif 2.2 de l'examen Security+ couvre les concepts de virtualisation et de cloud computing.

### Virtualisation :
La virtualisation permet d'exécuter de nombreux systèmes d'exploitation invités sur une seule plate-forme matérielle en utilisant un hyperviseur.

L'hyperviseur isole les systèmes d'exploitation invités les uns des autres et sert d'intermédiaire entre ces systèmes et le matériel physique.

La virtualisation permet l'évolutivité et l'efficacité des ressources informatiques, formant ainsi la base de la technologie cloud.

### Cloud Computing :
1. ***Cloud public*** : Les services cloud sont disponibles pour n'importe qui via un fournisseur de services cloud. Le modèle multi-locataire permet à plusieurs clients de partager le même matériel physique tout en isolant leurs systèmes d'exploitation.
2. ***Cloud privé*** : Tous les services cloud sont dédiés à un seul client et sont généralement hébergés dans des centres de données propriétaires.
3. ***Cloud hybride*** : Combine des ressources à la fois publiques et privées, permettant le transfert de charges de travail entre les environnements cloud.

### Modèles de service :
1. ***Infrastructure en tant que service*** (IaaS) : Fournit les composants de base de l'informatique (serveurs virtuels, stockage, réseau), donnant au client une flexibilité maximale pour créer ses propres services cloud.
2. ***Logiciel en tant que service*** (SaaS) : Fournit des applications entièrement développées que les utilisateurs peuvent accéder via Internet, le fournisseur gérant toute l'infrastructure.
3. ***Plateforme en tant que service*** (PaaS) : Permet aux développeurs d'écrire du code et de le fournir à un fournisseur de services cloud pour exécution. Cela inclut le modèle de calcul sans serveur (Function as a Service).

### Infrastructure comme code (IaC) :
Écriture de code pour créer et gérer l'infrastructure informatique au lieu de configurer manuellement les serveurs et les réseaux.

Favorise la réutilisation du code et facilite le déploiement rapide et cohérent des ressources.

En intégrant ces concepts, les organisations peuvent tirer parti des avantages du cloud computing tout en mettant en œuvre des mesures de sécurité adéquates pour protéger leurs données et leurs systèmes contre les menaces potentielles.

## Concepts de développement, déploiement et automatisation sécurisés des applications (Objectif 2.3)

L'objectif 2.3 de l'examen Security+ couvre les concepts de développement, de déploiement et d'automatisation sécurisés des applications.

### Environnements de développement :
Les développeurs travaillent dans des environnements de développement dédiés et isolés pour créer du code.

Le code passe ensuite par différents environnements, notamment le test, la mise en scène et la production, pour être évalué, configuré et finalement utilisé.

### Techniques de programmation sécurisé :
Les développeurs doivent utiliser des techniques de programmation sécurisées pour créer un code robuste et sûr.

La réutilisation du code et l'utilisation de bibliothèques partagées réduisent la duplication et encouragent l'efficacité.

La normalisation des bases de données et l'utilisation de procédures stockées et de requêtes paramétrées réduisent les vulnérabilités telles que les injections SQL.

Les développeurs doivent également gérer la mémoire de manière efficace pour éviter les attaques de dépassement de tampon.

### Sécurité des applications web :
Les développeurs doivent suivre les normes et la documentation d'organismes comme l'OWASP pour éviter les vulnérabilités courantes dans les applications web.

L'OWASP publie une liste des 10 principales vulnérabilités dans les applications web, offrant ainsi un guide pour atténuer les risques.

### Contrôle de version :
Les techniques de contrôle de version, comme l'utilisation de dépôts de code, permettent de gérer efficacement les modifications apportées par plusieurs développeurs à un même code source.

### Automatisation et scripting :
L'automatisation des tâches répétitives, comme la configuration système, améliore l'efficacité des équipes informatiques.

Les outils d'automatisation comme la surveillance continue, l'intégration et le déploiement continus permettent une gestion cohérente et efficace des systèmes.

### Scalabilité et élasticité :

***Définition*** : *La scalabilité est un terme particulièrement utilisé dans l'univers du web. Il s'agit de la faculté d'un produit, d'un logiciel ou d'une application à s'adapter aux fluctuations de la demande et du marché, tout en conservant ses fonctionnalités de base*

La scalabilité implique la conception de systèmes capables de s'adapter à une demande croissante en ajoutant des ressources supplémentaires.

L'élasticité va plus loin en permettant au système de réduire ses ressources lorsque la demande diminue, offrant une utilisation optimale des ressources, notamment dans les environnements cloud.

En intégrant ces concepts de développement, de déploiement et d'automatisation sécurisés, les organisations peuvent créer et gérer des applications robustes et sûres, tout en optimisant l'efficacité de leurs opérations informatiques.

## Concepts de conception d'authentification et d'autorisation (Objectif 2.4)

L'objectif 2.4 de l'examen Security+ couvre les concepts de conception d'authentification et d'autorisation.

### Triple A : Authentification, Autorisation et Traçabilité (Authentication, Authorization, Accounting/Auditing) :
1. L'authentification consiste à vérifier l'identité d'un utilisateur, souvent par l'intermédiaire d'un mot de passe, d'un code PIN ou de questions de sécurité.
2. L'autorisation détermine ensuite ce que l'utilisateur est autorisé à faire une fois son identité confirmée.
3. La traçabilité consiste à suivre et enregistrer les actions effectuées par l'utilisateur pour une analyse ultérieure.

### Méthodes d'authentification :
1. ***Quelque chose que vous savez*** : Les mots de passe et les réponses aux questions de sécurité sont des exemples de cela, où l'utilisateur fournit des informations mémorisées.
2. ***Quelque chose que vous avez*** : Les dispositifs comme les smartphones, les jetons ou les cartes à puce constituent une preuve d'identité.
3. ***Quelque chose que vous êtes*** : Les techniques biométriques, telles que la reconnaissance d'empreintes digitales, rétiniennes ou faciales, utilisent les caractéristiques du corps pour l'authentification.

### Authentification multifacteur (MFA) :
L'authentification multifacteur combine deux ou plusieurs méthodes d'authentification pour renforcer la sécurité.
Par exemple, combiner un mot de passe avec une empreinte digitale ou une carte à puce fournit une authentification forte.

### Attributs d'authentification :
En plus des facteurs traditionnels, des attributs comme la localisation de l'utilisateur ou son comportement peuvent être utilisés pour enrichir le processus d'authentification.

En utilisant des méthodes d'authentification et d'autorisation appropriées, les organisations peuvent garantir que seules les personnes autorisées ont accès aux ressources et aux données sensibles, renforçant ainsi la sécurité de leur infrastructure.

## Implémentation de la résilience en cybersécurité (Objectif 2.5)

L'objectif 2.5 de l'examen Security+ concerne la mise en œuvre de la résilience en cybersécurité.

### Redondance :
La redondance est essentielle pour renforcer la résilience des systèmes face aux sources potentielles de perturbation.

Il existe quatre façons d'implémenter la redondance :
1. ***Dispersal géographique*** : Répartir les systèmes sur une vaste zone géographique pour éviter les défaillances liées à la localisation.
2. ***Redondance de disque*** : Utilisation de technologies telles que RAID pour répartir les données sur plusieurs disques et éviter les pannes.
3. ***Redondance réseau*** : Utilisation de répartiteurs de charge et de la technique de teaming NIC pour assurer la redondance au niveau du réseau.
4. ***Redondance de puissance*** : Utilisation de sources d'alimentation multiples et de dispositifs tels que les UPS et les générateurs pour garantir l'alimentation continue.

### Protection des données :
La protection des données est une autre forme de résilience, assurée par la réplication des données sur plusieurs emplacements et la réalisation de sauvegardes régulières.

Il existe trois types de sauvegarde : **complète**, **différentielle** et **incrémentielle**, chacune ayant ses propres avantages en termes de capacité de restauration.

### Diversité :
La diversité des technologies, des fournisseurs, de la cryptographie et des contrôles utilisés renforce la résilience d'un environnement.

Avoir des fournisseurs différents dans la chaîne d'approvisionnement réduit le risque de perturbation majeure due à une défaillance chez un seul fournisseur.

En mettant en œuvre ces pratiques de résilience, les organisations peuvent renforcer leur capacité à faire face aux menaces et aux perturbations, garantissant ainsi la continuité des opérations et la sécurité des systèmes informatiques.

## Implications de sécurité des systèmes embarqués et spécialisés (Objectif 2.6)

L'objectif 2.6 de l'examen Security+ consiste à expliquer les implications de sécurité des systèmes embarqués et spécialisés. 

### Systèmes embarqués :
Les systèmes embarqués sont intégrés dans d'autres appareils que nous utilisons au quotidien, tels que les réfrigérateurs, les voitures ou l'équipement industriel.

Ils peuvent être basés sur des technologies telles que les Raspberry Pis, les dispositifs Arduino et les réseaux de portes programmables en champ (FPGA).

Dans un contexte industriel, ils sont souvent désignés sous le nom de **systèmes de contrôle et d'acquisition de données** (***SCADA***) ou de **systèmes de contrôle industriel** (***ICS***).

### Internet des objets (IoT) :
L'utilisation des systèmes embarqués dans la vie quotidienne est souvent associée à l'internet des objets (IoT), comprenant des capteurs, des dispositifs intelligents et des objets connectés.
Bien que ces systèmes rendent nos vies plus faciles et efficaces, ils peuvent également introduire de nouvelles vulnérabilités de sécurité.

### Sécurité des systèmes embarqués :
Pour assurer la sécurité des systèmes embarqués, il est essentiel de maintenir un inventaire précis de tous les appareils embarqués dans l'environnement.
Les contraintes spécifiques des systèmes embarqués, telles que la puissance limitée, la faible puissance de calcul et la connectivité réseau limitée, nécessitent des approches de sécurité adaptées.

### Connectivité des systèmes embarqués :
Étant souvent déployés dans des endroits éloignés, les systèmes embarqués peuvent nécessiter des technologies de communication spéciales, telles que les réseaux cellulaires, les communications radio de bande de base ou les réseaux *ZigBee* et *Z-Wave*.

En comprenant ces concepts, les professionnels de la cybersécurité peuvent mieux gérer les risques associés aux systèmes embarqués et spécialisés, et garantir la sécurité des environnements informatiques.

## Importance des contrôles de sécurité physique (Objectif 2.7)

Cette explication couvre divers aspects des contrôles de sécurité physique de manière exhaustive.

### Prévention de l'accès non autorisé :
Les techniques comprennent la construction de clôtures et l'utilisation de sas de contrôle d'accès ou de sas de sécurité pour empêcher les attaques de queue de poisson.
Les serrures, y compris les serrures traditionnelles, électroniques et biométriques, sont utilisées pour contrôler l'accès aux installations et protéger le matériel.

### Détection des intrusions :
Les alarmes anti-intrusion traditionnelles et un éclairage fort sont utilisés pour identifier les intrus.
Des gardes ou des sentinelles robotiques peuvent être utilisés pour la surveillance.
Les systèmes de détection des intrusions utilisent divers capteurs tels que les caméras CCTV, les détecteurs de bruit, d'humidité et de température.

### Gestion des visiteurs :
Un journal des visiteurs et des systèmes de badges sont en place pour suivre et gérer les visiteurs autorisés.

### Cages de Faraday :
Utilisées pour empêcher l'écoute électronique en bloquant les signaux électroniques, bien qu'elles perturbent tous les signaux électroniques.

### Zones sécurisées :
Différentes zones à l'intérieur d'une installation, telles que les centres de données, les bureaux exécutifs et les coffres-forts, sont considérées comme sécurisées et nécessitent des mesures de sécurité appropriées.

### Destruction sécurisée des données :
Des techniques telles que la combustion, le déchiquetage, la pulvérisation, la destruction par dissolution et le démagnétisage sont utilisées pour détruire de manière sécurisée les enregistrements physiques et électroniques.

Comprendre ces contrôles de sécurité physique est crucial pour l'examen Security+ et pour mettre en œuvre des mesures de sécurité efficaces dans des scénarios réels.


## Concepts de cryptographie (Objectif 2.8)

L'objectif 2.8 de l'examen Security+ consiste à résumer les bases des concepts cryptographiques. La cryptographie est la pratique qui consiste à utiliser les mathématiques pour obscurcir le sens des informations sensibles pour les personnes non autorisées à les visualiser. 

### Chiffrement et déchiffrement :
La cryptographie comporte deux opérations de base. Le chiffrement utilise une clé pour transformer le texte brut des informations sensibles en texte chiffré. Le déchiffrement prend ce texte chiffré et utilise une clé de déchiffrement pour le retransformer en texte brut.

### Algorithmes de chiffrement :
Il existe deux grandes catégories d'algorithmes de chiffrement : les techniques de chiffrement ***symétrique*** et ***asymétrique***. 

Les ***techniques de chiffrement symétrique*** utilisent la même clé pour chiffrer et déchiffrer les informations, tandis que les ***techniques de chiffrement asymétrique*** utilisent des clés distinctes, une publique et une privée.

### Utilisation de la cryptographie : 
Le chiffrement peut être utilisé pour atteindre divers objectifs de sécurité, notamment la confidentialité, l'intégrité, l'obscurcissement, l'authentification et la non-répudiation.

### Signature numérique : 
La non-répudiation est souvent réalisée grâce à l'utilisation de signatures numériques. Lorsqu'un document est signé numériquement, le message est hashé et ensuite chiffré avec la clé privée du signataire, ce qui permet au destinataire de vérifier l'authenticité du message.

### Stéganographie : 
La stéganographie est une autre utilisation de la cryptographie, où les messages sont cachés à l'intérieur d'autres fichiers, tels que des fichiers audio, vidéo ou image, afin d'échanger des informations secrètes de manière discrète.

### Informatique quantique : 
Enfin, il est important de comprendre les principes de l'informatique quantique et des communications quantiques, même s'ils ne sont pas encore largement utilisés. L'avènement de l'informatique quantique pourrait éventuellement remettre en question les technologies de chiffrement actuelles.

Ces concepts sont fondamentaux pour la compréhension de la cryptographie et sont essentiels à connaître pour réussir l'examen Security+.

<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::