---
sidebar: auto
---
# Menaces, attaques, et vulnérabilités
<Badge type="tip" text="Rédigé le 24/03/2024" />

## Ingénierie sociale (Objectif 1.1)

### Techniques d'ingénierie sociale distante

1. ***Phishing*** :
        Envoi d'emails trompeurs pour inciter les destinataires à divulguer des informations sensibles ou à effectuer certaines actions.

2. ***SMShing*** :
        Similaire au phishing mais utilisant des messages texte au lieu d'emails.

3. ***Vishing*** :
        Phishing vocal, où les attaquants utilisent des appels téléphoniques pour tromper les victimes afin d'obtenir des informations sensibles.

4. ***Spear Phishing*** :
        Attaques de phishing ciblées sur des individus ou des groupes spécifiques, en exploitant des connaissances internes.

5. ***Whaling*** :
        Cibler des personnalités ou des cadres de haut niveau pour des attaques de phishing.

6. ***Vol d'identifiants*** :
        Obtention d'identifiants, de mots de passe ou d'autres informations d'identification par des moyens trompeurs.

7. ***Arnaques aux factures*** :
        Envoi de fausses factures pour tromper des individus ou des organisations afin de les inciter à effectuer des paiements.

8. ***Spam*** :
        Emails commerciaux non sollicités, souvent à des fins de marketing.

9. ***SPIM*** (Spam via Messagerie Instantanée) :
        Messages indésirables envoyés via des plateformes de messagerie instantanée.

### Techniques d'ingénierie sociale physique :

1. ***Épier par-dessus l'épaule*** :
        Observer l'écran d'ordinateur ou les activités de quelqu'un de près.

2. ***Plongée dans les Poubelles*** :
        Recherche à travers les matériaux jetés, tels que les documents papier, pour recueillir des informations sensibles.

3. ***Suivi*** :
        Obtenir un accès physique non autorisé à un bâtiment en suivant de près une personne autorisée.

### Principes Exploités dans les Attaques d'Ingénierie Sociale :

1. Autorité
2. Intimidation
3. Consensus
4. Rareté
5. Familiarité
6. Confiance
7. Urgence

Comprendre ces techniques et principes est crucial pour mettre en œuvre des mesures de sécurité efficaces afin de réduire les risques associés aux attaques d'ingénierie sociale.

## Malwares (Objectif 1.2)

Les malwares sont des logiciels malveillants qui peuvent affecter nos organisations en exploitant des vulnérabilités ou en incitant un utilisateur à installer du code malveillant.

1. ***Virus*** : Se propagent d'un système à un autre lorsque l'utilisateur effectue une action.
2. ***Ransomware*** : Chiffre tous les fichiers d'un système et demande une rançon en cryptomonnaie pour fournir la clé de déchiffrement.
3. ***Vers*** (Worms) : Se propagent d'un système à l'autre sans nécessiter d'action de l'utilisateur.
4. ***Chevaux de Troie*** (Trojan horses) : Se font passer pour des applications légitimes mais exécutent des activités malveillantes en arrière-plan.
5. ***Bombes logiques*** (Logic bombs) : Intégrées à d'autres logiciels, elles déclenchent une action malveillante lorsque certaines conditions sont remplies.
6. ***Logiciels espions*** (Spyware) : Visent à espionner les activités de l'utilisateur, comme les enregistreurs de frappe ou les chevaux de Troie à accès distant.
7. ***Botnets*** : Collection de systèmes compromis contrôlés par un attaquant pour obtenir un avantage.

### Attaques de mots de passe :

Les mots de passe sont vulnérables à différentes attaques :

1. ***Attaques par devinettes*** (Brute force) : Tentatives de deviner toutes les combinaisons possibles de mots de passe.
2. ***Attaques par dictionnaire*** : Utilisation de mots de passe courants contre des comptes connus.
3. ***Attaques par tableaux arc-en-ciel*** (Rainbow table) : Pré-calcul des hashs pour des mots de passe courants et vérification de ces hashs dans les fichiers de mots de passe.

### Attaques physiques :

1. Utilisation de câbles malveillants ou de périphériques USB pour infecter les systèmes.
2. Clonage de cartes via des skimmers placés sur des lecteurs de carte.

### Attaques par intelligence artificielle adverse :

Altération des données d'entraînement des algorithmes d'apprentissage automatique ou attaques directes contre ces algorithmes.

### Attaques cryptographiques :

1. ***Attaques par collision*** : Deux fichiers ayant la même valeur de hashage.
2. ***Attaques par dégradation*** (Downgrade attack) : Baisse de la sophistication du chiffrement utilisé dans les communications, pouvant rendre le chiffrement plus vulnérable.

## Attaques d'applications (Objectif 1.3)

L'objectif 1.3 de l'examen Security+ consiste à analyser les indicateurs potentiels associés aux attaques d'applications. 

1. ***Cross-Site Scripting*** (XSS) :

    L'attaquant manipule le navigateur web d'un utilisateur pour exécuter du code JavaScript ou un autre langage de script. Les attaques de type persistant ou stocké sont courantes, où le code malveillant est inséré sur un site web et exécuté par les utilisateurs qui y accèdent.

2. ***Injection*** :

    L'attaquant cherche des failles dans les sites web où il peut fournir des entrées, qui sont ensuite insérées dans une commande exécutée sur le système ou un autre serveur. L'attaque par **injection SQL** est la plus courante, où l'attaquant insère du code SQL malveillant pour manipuler la base de données.

3. ***Transversalité de répertoire*** (Directory Traversal) :

    L'attaquant utilise des commandes de navigation de répertoire dans une URL pour accéder à des fichiers sensibles situés en dehors des parties destinées à l'affichage sur le serveur.

4. ***Débordement de tampon*** (Buffer Overflow) :

    L'attaquant injecte plus d'informations que prévu dans un champ d'entrée, provoquant un dépassement de mémoire tampon et permettant potentiellement l'exécution de commandes malveillantes sur le serveur.

### Mitigation des attaques d'applications :

***Validation des Entrées*** :

Assure que les données entrées correspondent au type attendu et ne contiennent pas de caractères malveillants. Par exemple, vérifier que les nombres entrés sont des entiers et qu'ils se situent dans une plage valide.

En utilisant une validation des entrées robuste, de nombreux types d'attaques d'applications peuvent être atténués.

## Attaques réseau (Objectif 1.4)

L'objectif 1.4 de l'examen Security+ consiste à analyser les indicateurs associés aux attaques réseau.

1. ***Attaques sans fil*** :

    1. ***Faux point d'accès*** (Evil Twin) : L'attaquant crée un point d'accès sans fil malveillant avec le même nom qu'un point d'accès légitime, afin de tromper les utilisateurs pour qu'ils se connectent et divulguent leurs informations d'identification.
    2. ***Attaque de désassociation*** (Disassociation) : L'attaquant force un utilisateur à se déconnecter du réseau sans fil, puis capture des informations d'authentification lors de la reconnexion.

2. ***Attaques de l'homme du milieu*** (Man-in-the-Middle / On-Path) :

    L'attaquant se positionne entre l'utilisateur et le serveur légitime, interceptant et manipulant les communications entre les deux parties.

3. ***Attaques au niveau 2*** (Couche liaison de données OSI) :

    1. ***Inondation de tables MAC*** (MAC Flooding) : L'attaquant envoie un grand nombre de requêtes pour enregistrer différentes adresses MAC avec un commutateur réseau, entraînant un débordement de mémoire et permettant des attaques d'écoute clandestine.
    2. ***Empoisonnement ARP*** (ARP Poisoning) : L'attaquant injecte des informations MAC invalides dans un commutateur réseau, trompant les utilisateurs pour qu'ils se connectent à des systèmes malveillants.

4. ***Attaques DNS*** :

    1. ***Détournement de domaine*** (Domain Hijacking) : L'attaquant vole un nom de domaine en piratant un compte chez le service où l'entreprise l'a enregistré, puis redirige le trafic vers son propre site.
    2. ***Empoisonnement DNS*** (DNS Poisoning) : L'attaquant injecte des informations DNS invalides dans un serveur DNS, redirigeant les utilisateurs vers des sites malveillants.

5. ***Attaques par déni de service*** (DoS / DDoS) :

    ***Déni de service distribué*** (DDoS) : L'attaquant inonde la victime de trafic provenant de nombreuses sources différentes, rendant difficile le blocage du trafic et rendant le système incapable de traiter le trafic légitime.

Ces types d'attaques réseau sont essentiels à connaître pour l'examen Security+.

## Acteurs des menaces (Objectif 1.5)

Dans l'objectif 1.5 de l'examen Security+, il est important de comprendre les différents acteurs des menaces, les vecteurs de menace et les sources de renseignements.

### Acteurs des menaces :
1. ***Menace interne*** : Des individus au sein de l'organisation qui cherchent à compromettre la sécurité des systèmes pour diverses raisons.
2. ***Menace externe*** : Des individus ou entités en dehors de l'organisation qui tentent de s'introduire dans les systèmes pour diverses raisons.
3. ***Script kiddies*** : Des individus peu expérimentés qui utilisent des exploits développés par d'autres pour mener des attaques sans grande sophistication.
4. ***Advanced persistent threat*** (APT) : Des attaquants très déterminés et sophistiqués, souvent soutenus par des États-nations ou des groupes criminels, motivés par des objectifs politiques, militaires ou financiers.
5. ***Hacktivistes*** : Des individus qui utilisent le piratage pour défendre une cause politique ou idéologique.

### Vecteurs de menace :
1. ***Accès direct*** : Accès physique au système.
2. ***Réseau*** : Utilisation des réseaux câblés ou sans fil pour mener des attaques.
3. ***Courrier électronique*** : Utilisation de techniques de phishing et d'ingénierie sociale pour compromettre les utilisateurs.
4. ***Supports amovibles*** : Utilisation de périphériques de stockage amovibles pour introduire des menaces dans les systèmes.
5. ***Fournisseurs*** : Introduction de menaces dans la chaîne d'approvisionnement d'une organisation en corrompant les fournisseurs ou les dispositifs.

### Sources de renseignements sur les menaces :
1. ***Open Source Intelligence*** (OSINT) : Informations accessibles au public.
2. ***Closed Source Intelligence*** : Informations propriétaires achetées auprès de sources privées.
3. ***Bases de données de vulnérabilités*** : Informations sur les failles de sécurité.
4. ***Centres de partage d'informations*** : Plateformes réunissant les secteurs public et privé pour partager des informations sur les menaces.
5. ***Dark Web*** : Forums de piratage et autres sources sur le web sombre.

Il est essentiel pour les équipes de cybersécurité de comprendre les évolutions du paysage des menaces et de recueillir des renseignements sur ceux-ci. Cela afin de concevoir des mesures de sécurité efficaces contre ces menaces en constante évolution.

## Vulnérabilités et risques associés (Objectif 1.6)

Dans l'objectif 1.6 de l'examen Security+, il est crucial de comprendre les préoccupations en matière de sécurité associées à différents types de vulnérabilités, tant sur site que dans le cloud.

### Vulnérabilités courantes :
1. ***Zero-Day Vulnerability*** : Une vulnérabilité nouvellement découverte qui n'a pas encore de correctif disponible, permettant aux attaquants de l'exploiter avant que le fournisseur ne la corrige.
2. ***Configurations faibles*** : Paramètres incorrects ou non sécurisés des systèmes et des logiciels, comme des autorisations ouvertes, des comptes administratifs non sécurisés, des erreurs affichant trop d'informations, ou l'utilisation de chiffrements faibles.
3. ***Gestion de correctifs défectueuse*** : L'absence de gestion efficace des correctifs, laissant les systèmes ouverts aux attaques connues depuis longtemps.
4. ***Plateformes héritées*** : L'utilisation de systèmes anciens non pris en charge par leur fabricant, exposant les organisations à des vulnérabilités connues mais non corrigées.
5. ***Risques tiers*** : Les vulnérabilités introduites par des fournisseurs tiers, notamment les fournisseurs de matériel, de logiciels et de services cloud.

### Impact des vulnérabilités :
1. ***Perte de données*** : Les failles de sécurité peuvent entraîner des violations de données et l'exfiltration de données sensibles.
2. ***Vol d'identité*** : Les attaquants peuvent exploiter les vulnérabilités pour voler des identifiants et commettre des actes de fraude.
3. ***Dommages financiers et réputationnels*** : Les attaques réussies peuvent causer des dommages financiers importants et ternir la réputation de l'organisation.
4. ***Interruption des activités*** : Les attaques entraînant une perte de disponibilité des systèmes peuvent perturber les opérations commerciales.

### Gestion des vulnérabilités :
Il est essentiel de mettre en place un programme solide de gestion des vulnérabilités pour identifier, évaluer et atténuer les vulnérabilités de manière proactive.

Cela implique la mise en œuvre de bonnes pratiques de gestion des correctifs, la surveillance des configurations système, et la gestion des fournisseurs pour réduire les risques associés aux vulnérabilités.

En comprenant ces vulnérabilités et en mettant en œuvre des mesures appropriées pour les gérer, les organisations peuvent réduire les risques liés à la sécurité et protéger efficacement leurs systèmes et leurs données.

## Techniques d'évaluation de la sécurité (Objectif 1.7)

L'objectif 1.7 de l'examen Security+ consiste à résumer les techniques utilisées dans les évaluations de sécurité, qui peuvent être divisées en quatre grandes catégories :

### Balayage de vulnérabilités :
1. ***Ciblage*** : Les balayages de vulnérabilités peuvent cibler les réseaux, les applications ou les applications Web pour identifier les vulnérabilités.
2. ***Types d'accès*** : Les balayages peuvent être effectués avec ou sans privilèges d'accès (scans avec ou sans identification).
3. ***Intrusifs vs. non-intrusifs*** : Les balayages intrusifs peuvent perturber le système, tandis que les balayages non intrusifs limitent les risques de perturbation.

### Chasse aux menaces (Threat Hunting) :
Cette technique suppose qu'un attaquant a déjà accédé au système, puis recherche activement les indicateurs de compromission à travers diverses sources d'informations.

### Analyse des journaux (Log Analysis) :
1. ***Les systèmes SIEM*** (Security Information and Event Management) agrègent et corrélaient les journaux de différents systèmes pour détecter les intrusions ou autres événements de sécurité.
2. ***Les outils SOAR*** (Security Orchestration, Automation, and Response) automatisent les réponses aux événements détectés par un SIEM.

### Gestion des résultats de balayage :
Les résultats des balayages de vulnérabilités sont classés en vrais positifs (vulnérabilités réelles), faux positifs (fausses alertes), vrais négatifs (absence de vulnérabilités) et faux négatifs (vulnérabilités manquées).

Les vulnérabilités sont souvent notées selon leur gravité à l'aide du Common Vulnerability Scoring System (CVSS).

En utilisant ces techniques, les équipes de sécurité peuvent identifier, évaluer et atténuer les risques de sécurité pour protéger efficacement les systèmes et les données de leur organisation.

## Techniques de test de pénétration :

L'objectif 1.8 de l'examen Security+ consiste à expliquer les techniques utilisées dans les tests de pénétration.

### Types de tests :
1. ***Black Box*** : Le testeur n'a pas d'informations internes sur les systèmes cibles, imitant ainsi une attaque réelle.
2. ***Gray Box*** : Le testeur dispose de certaines informations, mais pas de la totalité de l'environnement cible.
3. ***White Box*** : Le testeur dispose de nombreuses informations sur les systèmes cibles, accélérant ainsi le test.

### Règles d'engagement :
Les règles d'engagement doivent être définies avant le test pour déterminer ce que les testeurs sont autorisés à faire et les procédures à suivre en cas de découverte de vulnérabilités.

### Méthodes utilisées :
1. ***Reconnaissance*** : Les testeurs effectuent souvent une reconnaissance pour comprendre la structure de l'organisation et les systèmes existants, utilisant à la fois des méthodes physiques et électroniques.
2. ***Exploitation des vulnérabilités*** : Les testeurs tentent d'exploiter des vulnérabilités réelles sur les systèmes cibles pour accéder au réseau et aux données sensibles.
3. ***Escalade de privilèges*** : Une fois l'accès initial obtenu, les testeurs tentent d'obtenir des privilèges administratifs pour étendre leur contrôle sur le réseau.
4. ***Établissement de persistence*** : Les testeurs mettent en place des moyens de réaccéder aux systèmes même après la fin du test.
5. ***Nettoyage et restauration*** : À la fin du test, les testeurs nettoient et restaurent les systèmes à leur état d'origine.

#### Exercices de cybersécurité :
Les exercices de cybersécurité mettent en scène des équipes de défense (blue team) et d'attaque (red team), ainsi qu'une équipe arbitre (white team) pour simuler des incidents réels.
À la fin de l'exercice, les équipes se réunissent en tant qu'équipe violette (purple team) pour partager les connaissances et les leçons apprises.

En utilisant ces techniques, les équipes de test de pénétration peuvent identifier les vulnérabilités et renforcer la sécurité des systèmes de l'organisation.

<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::