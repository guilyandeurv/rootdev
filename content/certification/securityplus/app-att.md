---
sidebar: auto
---
# Attaques d'applications
<Badge type="tip" text="Rédigé le 24/03/2024" />

## Implémentation de protocoles sécurisés (Objectif 3.1)

#### Voix et vidéo :
1. ***Secure Real-Time Transport Protocol*** (SRTP) : Assure la sécurité des communications audio et vidéo.

#### Synchronisation du temps :
1. ***Network Time Protocol*** (NTP) : Maintient la synchronisation temporelle entre les appareils pour une corrélation efficace des journaux.

#### Email :
1. ***Simple Mail Transfer Protocol*** (SMTP) : Transfère les messages entre serveurs de messagerie.
2. ***SMTPS*** (SMTP Secure) : Version sécurisée de SMTP pour des connexions sécurisées.
3. ***Post Office Protocol version 3*** (POP3) : Protocole de récupération des emails pour les utilisateurs finaux.
4. ***POP3 over SSL*** / ***Internet Message Access Protocol*** (IMAP) :  Versions sécurisées de POP3 et IMAP.
5. ***IMAP Secure*** (IMAPS) : Protocole sécurisé pour récupérer des emails.
6. ***Secure Multipurpose Internet Mail Extensions*** (SMIME) : Fournit un chiffrement de bout en bout pour les messages électroniques.

#### Navigateur web :
1. ***Hypertext Transfer Protocol Secure*** (HTTPS) : Version sécurisée du protocole HTTP pour les sites web.

#### Transfert de fichiers :
1. ***File Transfer Protocol Secure*** (FTPS) : Protocole sécurisé pour le transfert de fichiers.
2. ***SSH File Transfer Protocol*** (SFTP) :  Protocole sécurisé de transfert de fichiers via SSH.

#### Services d'annuaire : 
1. ***Lightweight Directory Access Protocol Secure*** (LDAPS) : Version sécurisée de LDAP pour l'accès aux annuaires.

#### Connexions administratives : 
1. ***Secure Shell*** (SSH) : Protocole assurant des connexions administratives sécurisées aux serveurs distants.

#### Réseaux privés virtuels (VPN) : 
1. ***Internet Protocol Secure*** (IPsec) : Protocole assurant l'authentification et la confidentialité des données dans les tunnels VPN.
2. ***Authentication Header*** (AH) : Protocole assurant l'authentification et la confidentialité des données dans les tunnels VPN.
3. ***Encapsulating Security Payload*** (ESP) : Protocole assurant l'authentification et la confidentialité des données dans les tunnels VPN.

#### Résolution de noms de domaine : 
1. ***DNS Security Extensions*** (DNSSEC) : Ajoute une authentification forte aux requêtes DNS pour prévenir les attaques de falsification.

#### Gestion des réseaux : 
1. ***Simple Network Management Protocol version 3*** (SNMPv3) : Version sécurisée de SNMP pour la gestion des équipements réseau.

#### Allocation d'adresses IP : 
1. ***Dynamic Host Configuration Protocol*** (DHCP) : Protocole principal pour l'allocation dynamique des adresses IP sur un réseau local.

Ces protocoles sont essentiels pour garantir la sécurité des communications, des transferts de données et de la gestion des réseaux dans les environnements informatiques. Maîtriser leur utilisation et leur mise en œuvre est crucial pour réussir l'examen Security+.

## Solutions de sécurité pour les hôtes et les applications (Objectif 3.2)

Implémentation de solutions de sécurité pour les hôtes ou les applications.

### Protection des points d'extrémité :

1. Utilisation d'antivirus et d'anti-malwares standards pour protéger les points d'extrémité contre les logiciels malveillants.
2. Solutions de détection et réponse aux incidents sur les points d'extrémité (EDR) pour gérer la mise en quarantaine et la suppression de codes malveillants.
3. Prévention de la perte de données (DLP) pour surveiller et bloquer les tentatives de déplacement de données sensibles en dehors de l'organisation.
4. Pare-feu nouvelle génération (NGFW) pour bloquer les connexions réseau non désirées.

### Détection et prévention des intrusions :
1. Systèmes de détection d'intrusion (IDS) surveillant le trafic entrant pour détecter des activités malveillantes.
2. Systèmes de prévention d'intrusion (IPS) bloquant les connexions potentiellement malveillantes.

### Intégrité du démarrage :
1. Utilisation de l'interface firmware extensible et unifiée (UEFI) pour sécuriser le processus de démarrage des systèmes modernes.

### Sécurité des bases de données :
1. Identification et suppression d'informations sensibles inutiles dans la base de données.
2. Utilisation de techniques comme le hachage et la tokenisation pour transformer les données sensibles en versions non sensibles.

### Sécurité des applications :
1. Validation des entrées pour détecter tout contenu potentiellement malveillant.
2. Gestion des applications via une liste blanche ou une liste noire.
3. Signature de code pour attester de la légitimité de la source du code.
4. Pratiques de codage sécurisé et tests de sécurité, incluant l'analyse statique et dynamique du code.

### Durcissement des systèmes :
1. Suppression des ports ouverts et des services inutiles.
2. Configuration sécurisée du système d'exploitation.
3. Gestion régulière des correctifs de sécurité.

### Sécurité matérielle :
1. Utilisation du module de plateforme sécurisée (TPM) pour gérer les clés de chiffrement et établir une chaîne de confiance matérielle.

Ces solutions sont essentielles pour assurer la sécurité des hôtes et des applications dans un environnement informatique. Il est important de comprendre leur mise en œuvre pour réussir l'examen Security Plus.

## Conception de réseaux sécurisés (Objectif 3.3)
Implémentation de conceptions de réseaux sécurisées

### Équilibrage de charge (Load Balancing)
1. Distribution des tâches sur plusieurs serveurs pour la résilience et la sécurité.
2. Mode actif-actif ou actif-passif pour une disponibilité accrue.

### Segmentation réseau (Network Segmentation)
1. Utilisation de VLAN pour regrouper les systèmes avec des niveaux de sécurité similaires.
2. Utilisation de pare-feu pour séparer l'internet de l'intranet et pour créer une zone démilitarisée (DMZ).

### Réseaux privés virtuels (VPN)
1. Fourniture d'un accès distant sécurisé et connexion des sites distants.
2. Protocoles principaux : IPsec, TLS, HTML 5, et L2TP.

### Contrôle d'accès réseau (Network Access Control - NAC)
1. Authentification des dispositifs avant la connexion au réseau.
2. Vérification de la posture du dispositif pour garantir une configuration sécurisée.

### Sécurité des ports (Port Security)
1. Vérification des adresses MAC des systèmes sur le réseau.
2. Enregistrement de l'adresse MAC sur le port du commutateur pour un accès autorisé.

### Serveurs de saut (Jump Servers)
1. Fournissent un accès sécurisé entre les réseaux pour les administrateurs.

### Serveurs mandataires (Proxy Servers)
1. Négocient les connexions réseau pour les utilisateurs internes.
2. Effectuent un filtrage de contenu pour éviter les activités malveillantes.

### Systèmes de détection et prévention des intrusions (IDS/IPS)
1. Surveillent les activités suspectes sur le réseau.
2. Les IDS alertent les administrateurs tandis que les IPS bloquent le trafic malveillant.

### Pare-feu (Firewalls)
1. Stateless, Stateful, et Next-Generation Firewalls protègent le réseau contre les trafics non autorisés.
2. Pare-feu d'applications web protègent les applications web contre les vulnérabilités.

### Surveillance de l'intégrité des fichiers (File Integrity Monitoring)
1. Surveille les modifications non autorisées des fichiers et alerte les administrateurs.

Ces éléments sont essentiels pour concevoir des réseaux sécurisés et protéger les données et les systèmes contre les menaces. Comprendre leur mise en œuvre est crucial pour réussir l'examen Security+.

## Installation et configuration des paramètres de sécurité sans fil (Objectif 3.4)

### Protocoles cryptographiques
1. ***Wired Equivalent Privacy*** (WEP) : Considéré comme obsolète et non sécurisé.
2. ***Wifi Protected Access*** (WPA) : Protocole initialement sécurisé, mais remplacé par WPA2 et WPA3.
3. ***WPA2*** : Utilise CCMP (Counter Mode Cipher Block Chaining Message Authentication Protocol) avec l'Advanced Encryption Standard (AES).
4. ***WPA3*** : Plus sécurisé que WPA2, utilise SAE (Simultaneous Authentication of Equals) basé sur l'algorithme de Diffie-Hellman.

### Méthodes d'authentification
1. ***Clé pré-partagée*** (PSK) : Facile à mettre en œuvre mais nécessite la reconfiguration des appareils lors du changement de mot de passe.
2. ***Mode entreprise*** : Utilisation des identifiants de l'utilisateur pour l'accès au réseau, avec authentification via le protocole **IEEE 802.1x** et **EAP** (*Extensible Authentication Protocol*).

### Authentification pour utilisateurs inconnus
1. ***Réseau ouvert*** : Permet à quiconque de se connecter sans authentification.
2. ***Portail captif*** : Page web demandant une authentification avant d'accéder au réseau.

### Considérations d'installation
1. ***Environnement physique*** : Étudier l'environnement pour optimiser la disposition des points d'accès sans fil et minimiser les interférences.
2. ***Étude de site*** : Effectuer une étude pour comprendre la propagation des ondes radio et placer les équipements de manière appropriée.
3. ***Analyse wifi*** : Utiliser un analyseur Wifi pour évaluer la couverture réseau et produire une carte de chaleur pour visualiser la force du signal.

Ces paramètres sont cruciaux pour assurer la sécurité des réseaux sans fil et minimiser les risques d'accès non autorisés. Une compréhension approfondie est essentielle pour réussir l'examen Security Plus.

## Implémentation de solutions sobiles sécurisées (Objectif 3.5)

### Méthodes de connexion mobiles
1. ***Réseaux cellulaires et Wifi*** : Connectivité à large bande pour accéder à Internet.
2. ***Bluetooth*** : Pour connecter des casques sans fil, des ordinateurs et d'autres appareils.
3. ***Near-Field Communication*** (NFC) : Pour les paiements sans contact.
4. ***Réseaux infrarouges et câbles USB*** : Partage de données entre appareils mobiles et systèmes.

### Protocoles spécialisés
1. ***Système de positionnement global*** (GPS) : Utilisation de satellites pour localiser les appareils.
2. ***Technologie de radio-identification*** (RFID) : Pour suivre les appareils dans des zones restreintes.

### Gestion des appareils mobiles (MDM)
1. Utilisation de logiciels MDM pour maintenir les appareils mobiles en configuration sécurisée.
2. Gestion des applications installées, filtrage du contenu et conformité aux politiques de sécurité.
3. Possibilité de suppression à distance des appareils et délimitation géographique.

### Sécurité des appareils mobiles
1. Enforcement de politiques de sécurité comme le verrouillage d'écran, les mots de passe et l'encryption des données.
2. Utilisation de modules de sécurité matérielle pour gérer les clés de chiffrement.
3. Mise en œuvre de systèmes d'exploitation sécurisés comme SE Android pour les applications hautement sécurisées.

### Politiques de sécurité mobile
1. Gestion des applications installées et des mises à jour.
2. Limitation de l'utilisation de boutiques d'applications tierces et du jailbreak.
3. Contrôle des fonctionnalités telles que l'appareil photo, les services de messagerie et le réseau.
4. Déploiement selon quatre modèles : appareils détenus par l'entreprise, choix de l'appareil, appareils d'entreprise avec usage personnel et appareils personnels utilisés pour l'entreprise.

En comprenant et en appliquant ces concepts, vous pouvez garantir la sécurité des solutions mobiles dans votre organisation. Ces connaissances sont essentielles pour réussir l'examen Security+.

## Application de solutions de cybersécurité dans le Cloud (Objectif 3.6)

En développant des solutions cloud sécurisées, plusieurs considérations clés doivent être prises en compte :

### Conception de solutions Cloud
1. Utiliser différentes zones de service offertes par le fournisseur pour une haute disponibilité et une résilience accrue.
2. Élaborer des politiques de ressources pour limiter les actions des utilisateurs et réduire l'exposition de l'organisation.

### Sélection du fournisseur Cloud
1. Évaluer les intégrations disponibles avec les technologies existantes et les capacités d'audit pour maintenir les politiques de sécurité.
2. Considérer les contrôles de sécurité spécifiques au service, tels que la gestion des permissions de stockage, le cryptage des données et la réplication pour la protection des données.

### Utilisation des ressources réseau
1. Créer des réseaux virtuels privés pour segmenter les ressources cloud et fournir une isolation similaire à celle d'un centre de données sur site.
2. Utiliser des groupes de sécurité pour contrôler l'accès aux instances de calcul, agissant comme des règles de pare-feu dans le cloud.

### Surveillance et gestion des ressources Cloud
1. Surveiller et gérer dynamiquement les ressources allouées pour éviter les instances inutilisées et les coûts inutiles.
2. Utiliser des solutions spécifiques au cloud telles que les courtiers d'accès cloud (CASB) pour appliquer les politiques de sécurité et les passerelles web sécurisées pour filtrer les demandes des utilisateurs.

### Évaluation des solutions Cloud
1. Examiner les contrôles de sécurité natifs du fournisseur cloud ainsi que les solutions tierces en fonction des critères de coût et de fonctionnalité.

En comprenant et en appliquant ces concepts, vous pouvez renforcer la posture de sécurité de votre organisation dans le cloud. Ces connaissances sont essentielles pour réussir l'examen Security Plus.

## Mise en œuvre des contrôles de gestion des identités et des comptes (Objectif 3.7)

La gestion des identités constitue l'un des éléments fondamentaux d'un programme de sécurité. Sans la capacité d'identifier et d'authentifier les utilisateurs, il est impossible de prendre des décisions de sécurité éclairées. Les solutions de gestion des identités et des accès (**IAM**) reposent sur les concepts de sujets et d'objets. Les sujets sont les personnes, les systèmes ou les services qui souhaitent accéder à des ressources, tandis que les objets sont les ressources auxquelles ils souhaitent accéder.

Chaque sujet ayant une identité dans le système de gestion des identités et des accès possède plusieurs attributs associés à son identité. Ces attributs peuvent inclure des éléments tels que leur rôle professionnel, leur affiliation à l'organisation, le département dans lequel ils se trouvent, ou d'autres caractéristiques liées à leur identité.

Le fournisseur d'identité, ou IdP, est l'organisation qui fournit cette identité numérique à un utilisateur. Les IdP sont généralement l'employeur d'un individu, son école ou une organisation similaire. Les utilisateurs peuvent prouver leur identité par diverses techniques, telles que l'utilisation de certificats numériques, de jetons de sécurité matériels ou logiciels, de cartes à puce ou de clés SSH.

En mettant en place une solution de gestion des comptes, vous devez être conscient des différents types de comptes qui peuvent exister :
1. Les comptes utilisateur standard et les comptes super-utilisateur avec des privilèges administratifs.
2. Les comptes de service utilisés par les systèmes d'exploitation et les applications pour accéder aux ressources, mais non destinés à une connexion interactive par des personnes.

Vous devez éviter les comptes partagés entre plusieurs personnes, ainsi que les comptes d'invités ou de fournisseurs. Cela viole le principe de responsabilité, car les actions effectuées avec ces comptes ne peuvent pas être attribuées à un individu spécifique.

Dans le cadre de votre programme de gestion des identités et des accès, vous devriez également établir plusieurs politiques de compte, notamment en ce qui concerne les mots de passe :

* Expiration des mots de passe, réutilisation des anciens mots de passe, complexité des mots de passe.

Les systèmes de gestion des identités peuvent également prendre en compte d'autres facteurs tels que l'adresse IP de l'utilisateur, la géolocalisation obtenue à partir des données GPS, ou encore les horaires de connexion pour restreindre l'accès aux systèmes.

Ces politiques vous permettent de créer un environnement solide de gestion des identités et des accès, où vous pouvez verrouiller et désactiver les comptes en cas d'activité suspecte, ainsi que d'effectuer des audits réguliers pour garantir que l'activité des utilisateurs correspond à vos attentes. Ces connaissances sont essentielles pour réussir l'examen Security Plus.

## Mettre en œuvre des solutions d'authentification et d'autorisation (Objectif 3.8)

Protéger les informations d'identification est crucial, et des technologies telles que les coffres-forts de mots de passe, les TPM (Trusted Platform Modules) et les HSM (Hardware Security Modules) aident à protéger les mots de passe et les clés d'accès.

### Technologies d'Authentification et d'Authorisation :

1. ***Authentification unique*** (SSO) : Permet aux utilisateurs de s'authentifier une seule fois et d'accéder à plusieurs systèmes. Kerberos est une solution centralisée à cet effet.
2. ***Protocoles obsolètes*** : Le Protocole d'Authentification par Mot de Passe (PAP) et le Protocole d'Authentification par Poignée de Main (CHAP) doivent être évités en raison de vulnérabilités de sécurité.
3. ***Solutions d'authentification fédérée*** : SAML, OpenID Connect et OAuth permettent l'authentification à travers des organisations et des services.

### Modèles de contrôle d'accès :
1. ***Contrôle d'accès obligatoire*** (MAC) : Applique les exigences de sécurité sans exception en se basant sur des niveaux de sécurité.
2. ***Contrôle d'accès discrétionnaire*** (DAC) : Permet aux propriétaires d'accorder des autorisations à des ressources.
3. ***Contrôle d'accès basé sur les rôles*** (RBAC) : Accorde l'accès en fonction des rôles des utilisateurs.
4. ***Contrôle d'accès basé sur les attributs*** (ABAC) : Considère les attributs des identités des utilisateurs pour l'autorisation.

### Firewalls et contrôle d'accès basé sur les règles : 
Les pare-feu appliquent les politiques de sécurité en utilisant des règles prédéfinies.

### Gestion des accès privilégiés (PAM) : 
Gère et surveille les comptes privilégiés pour renforcer la sécurité.

Comprendre ces concepts et technologies est essentiel pour la préparation à l'examen Security+ et pour la mise en œuvre de solutions d'authentification et d'autorisation robustes dans les organisations.

## Implémentation d'une infrastructure à clé publique (PKI) (Objectif 3.9)

La PKI repose sur la cryptographie asymétrique et permet aux utilisateurs de partager leurs clés publiques de manière sécurisée avec d'autres et de fournir à ces derniers l'assurance que ces clés sont légitimes.

### Mécanismes de partage de clés
1. ***Certificats numériques***: Des fichiers contenant la clé publique d'un utilisateur et signés numériquement par une autorité de certification (CA).
2. ***Autorité de certification*** (CA): Une tierce partie de confiance qui signe les certificats numériques.

### Processus de validation des certificats
1. Validation de la signature numérique: Confirmer l'authenticité de la signature numérique par une CA de confiance.
2. Vérification de la validité du certificat: Vérifier si le certificat n'a pas expiré.
3. Révocation des certificats: Les CA peuvent révoquer des certificats compromis.

### Méthodes de révocation
1. ***Liste de révocation de certificats*** (CRL): Liste des certificats invalides consultée lors de la validation.
2. ***Protocole de statut de certificat en ligne*** (OCSP): Validation en temps réel du statut du certificat.

### Processus de création de certificats
1. ***Demande de signature de certificat*** (CSR): Requête envoyée à une CA pour obtenir un certificat.
2. ***Émission de certificats***: Les CA valident l'identité de l'utilisateur et émettent un certificat.

### Types de certificats
1. Certificats de validation de domaine (DV): Valident le contrôle du domaine.
2. Certificats de validation étendue (EV): Valident l'identité de l'organisation.

### Formats de certificats
1. DER: Format binaire généralement avec les extensions .der, .crt ou .cer.
2. PEM: Format texte ASCII, avec les extensions .pem ou .crt.
3. PFX: Format binaire utilisé par les systèmes Windows, avec les extensions .pfx ou .p12.

### Utilisation de certificats auto-signés

Les organisations peuvent créer leurs propres certificats, mais ils ne sont généralement pas fiables en dehors de l'organisation.


Comprendre les concepts et processus liés à la PKI est essentiel pour réussir l'examen Security+ et pour mettre en œuvre des solutions sécurisées dans les organisations.


<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::