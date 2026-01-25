---
sidebar: auto
date: 2026-01-25
---

# 📶 Maitriser le réseau & les firewalls
<ais />

## 📖 Qu'est-ce qu'une interface réseau ?

Une interface réseau est le point de contact entre une machine et un réseau pour l'échange de données. Il existe deux types : **physiques** et **virtuelles**.

### 🏋️ Les interfaces réseau physiques

Les interfaces physiques sont des composants matériels comme les cartes Ethernet ou Wi-Fi, permettant la connexion à un réseau physique :

- **Carte Ethernet** : Nommée `eth0` ou `enp0s3`, utilisée pour les connexions filaires via câble RJ45. Les noms varient selon la distribution Linux.
- **Carte Wi-Fi** : Gère les connexions sans fil (`wlan0`).
- **Carte réseau pour fibre optique** : Pour les connexions haut débit via fibre optique, avec module SFP.

Ces interfaces convertissent les signaux numériques pour la communication réseau.

### 🖥️ Les interfaces réseau virtuelles

Créées par le système pour gérer des connexions spécifiques :

- **Interface de bouclage (`lo`)** : Pour la communication interne via `127.0.0.1` *(localhost)*.
- **Interface liée à une machine virtuelle** : Pour les VM (VirtualBox, VMware), avec des noms comme `vnet0`.
- **Interface réseau pour conteneurs** : Pour Docker/Kubernetes, comme `veth0`, reliée à un pont réseau.

Les interfaces virtuelles sont essentielles pour les environnements virtualisés et conteneurisés modernes.

## 🔗 Lien interface-IP

Une **adresse IP** est l'identifiant unique d'un appareil sur un réseau, fonctionnant comme une "adresse postale" numérique.

Deux versions existent :

- **IPv4** : Format `192.168.1.1`
- **IPv6** : Format `fe80::1`

L'adresse IP est l'**identité** d'une interface sur le réseau. Sans elle, pas de communication possible.

1. **Émission** : Les paquets partent via une interface avec IP assignée
2. **Réception** : Les réponses reviennent à cette même IP
3. **Adressage multiple** :
    - IP locale (`192.168.1.10`)
    - IP globale (publique/NAT)

## 🕵️‍♂️ Identifier les interfaces

Les commandes `ip` et `ping` gèrent les paramètres réseau.

**📟 Liste des interfaces** :

```bash
ip link show
```

Cette commande montre toutes les interfaces :

1. Interface `lo` (bouclage)
2. Interface `ens5` (physique)
3. Interface `docker0` (Docker)
4. Interface pont réseau (conteneurs)

Les interfaces marquées "`DOWN`" sont inactives et inutilisables.

📟 **Voir les IP** :

```bash
ip addr show
```

Points clés :

- Les IPs apparaissent sous `inet`
- L'interface réseau est physique et active (`state UP`).
- Une adresse IPv4 dynamique est attribuée (`172.31.9.5/20`) par un serveur DHCP et porte un masque de sous-réseau  `/20`, comme indiqué par le champ `scope global dynamic`.
- Une adresse IPv6 est également présente (`fe80::ee:a9ff:febf:4311/64`), utilisée pour la communication au niveau du lien local.

📟 **Test avec `ping`** :

`ping` vérifie la connectivité en envoyant des paquets ICMP pour tester si une adresse est joignable.

> 📖 ***Qu'est-ce qu'une passerelle locale ?*** 
> 
> Une **passerelle locale** (ou **passerelle par défaut**) est un équipement réseau qui permet à une machine de communiquer avec d'autres réseaux, notamment Internet. Il s'agit généralement du **routeur** d'un réseau. 

- **Rôle** : Elle fait office d'intermédiaire, recevant les paquets de la machine pour les transmettre vers leur destination, qu'elle soit sur le réseau local ou externe. 
- **Adresse** : Elle possède une adresse IP locale unique. Une passerelle bien configurée est indispensable pour accéder aux ressources externes d'un réseau local, comme Internet.

> 📖 ***Bon à savoir*** 
>
> Pour identifier la passerelle locale d'une machine virtuelle, on utilise la commande : `ip route show default`

## ❓ Comment configurer une interface réseau ?

Pour configurer une interface réseau, on doit **identifier**, **modifier** et **optimiser** ses paramètres pour une connexion réseau efficace.

Une bonne configuration est essentielle pour la connectivité, la sécurité et les performances d'un réseau. Une interface mal configurée peut causer des **problèmes de connexion** et des **failles de sécurité**.

### 📌 Changer une adresse IP temporairement

Pour modifier l'adresse IP d'une interface (exemple : `eth0`) :

> ⚠️ **Attention : Ces modifications sont temporaires et seront perdues au redémarrage.**

📟 **Supprimer l'IP actuelle** :

```bash
sudo ip addr del 192.168.56.101/24 dev eth0
```

**Explication** : Supprime l'adresse IP de l'interface avec `sudo` pour les droits administratifs.

📟 **Ajouter une nouvelle IP** :

```bash
sudo ip addr add 192.168.56.200/24 dev eth0
```

**Explication** : Attribue une nouvelle adresse IP à l'interface.

📟 **Configurer la passerelle** :

```bash
sudo ip route add default via 192.168.56.1
```

**Explication** : Définit la route par défaut pour accéder aux autres réseaux.

📟 **Tester la configuration** :

Un rappel des premières commandes vues, essentielles pour valider la configuration réseau après toute modification sur les interfaces ou adresses IP.

1. **Vérifier l'adresse IP actuelle** : On utilise cette commande pour confirmer que l'adresse IP a bien été appliquée à l'interface cible.
    
    ```bash
    ip addr show ens5
    ```
2. **Tester la connectivité** : On vérifie si l’interface peut communiquer avec d'autres machines, comme la passerelle ou un serveur public.
    
    ```bash
    ping 8.8.8.8
    ```

Ces commandes simples mais puissantes permettent de diagnostiquer rapidement les problèmes ou de valider une configuration réseau. Toujours les garder en tête lors du travail sur les interfaces réseau.

## 📌 Configurer une adresse IP statique de manière permanente

Pour une adresse IP persistante après redémarrage, on la configure de façon permanente via **Netplan** sous Ubuntu.

1. **Modifier le fichier de configuration Netplan :**
    
    On accède au fichier associé à l'interface, avec la commande suivante :
    
    ```bash
    sudo nano /etc/netplan/01-netcfg.yaml
    ```
    
    Cette commande permet de modifier le fichier avec l’éditeur de texte `nano`.
    
2. **Exemple de configuration pour `ens5` :**
    
    Voici comment définir une adresse IP statique, une passerelle et des serveurs DNS :
    
    ```yaml
    network:
      version: 2
      ethernets:
        ens5:
          addresses:
            - 192.168.56.200/24
          gateway4: 192.168.56.1
          nameservers:
            addresses: [8.8.8.8, 8.8.4.4]
    ```
    
    C’est un exemple de contenu pour définir l’interface.
    
3. **Appliquer la configuration :**
    
    On utilise la commande suivante pour valider et activer les changements :
    
    ```bash
    sudo netplan apply
    ```
    
4. **Vérifier la configuration :**
    
    On peut confirmer que l’adresse IP et les paramètres sont correctement appliqués avec :
    
    ```bash
    ip addr show ens5
    ```
    

## Comment évaluer et diagnostiquer les performances réseau ?

Voici les principaux outils pour vérifier et analyser un réseau.

1. **Afficher la table de routage :** Voir l'acheminement du trafic réseau :
    
    ```bash
    ip route show
    ```

- **Subnet** : Réseau ciblé (`default` = route par défaut)
- **Interface** : Interface utilisée pour le trafic
- **Source** (src) : Adresse IP source
- **Route priority** (metric) : Priorité des routes
- **Proto** : Source de la route (`kernel` = auto, `dhcp` = serveur)
- **Scope** : Portée de la route
- **Linkdown** : Interface inactive
- **Gateway** (via) : Passerelle


2. **Analyser le trafic avec tcpdump :** Pour observer les paquets réseau en temps réel :

```bash
sudo tcpdump -i ens5
```

* **Horodatage** : Date/heure de capture
* **Protocole** : Type de paquet (IPv4, etc.)
* **Adresses** : Source et destination
* **Drapeaux** : État du paquet
* **Séquence/ACK** : Progression
* **Fenêtre TCP** : Taille buffer
* **Taille** : Octets de données


3. **Consulter les journaux :**

```bash
sudo journalctl -u systemd-networkd
```

- Démarrage service
- État des interfaces
- Attribution IP
- Messages d'erreur


> ✅ **À retenir :** Ces outils permettent d'observer et diagnostiquer le réseau sans le modifier, via la table de routage (`ip route`), l'analyse du trafic (`tcpdump`) et les journaux système (`journalctl`).

## 🧱 Pare-feu et sécurité réseau

Un pare-feu est un outil de sécurité qui régule le trafic réseau. Linux utilise principalement **iptables** et **nftables** pour protéger contre les menaces.

### 📌 Définition

Un pare-feu filtre le trafic réseau selon des règles définies :

- Il contrôle les connexions entrantes et sortantes
- Il vérifie source, destination et protocoles
- Il bloque les menaces comme les **scans** et **connexions suspectes**

### 🔑 Concepts de base

- **Tables** : groupent les règles par fonction (`filter`, `nat`)
- **Chaînes** : points de contrôle du trafic (`INPUT`, `OUTPUT`)
- **Règles** : définissent le traitement du trafic

## 🏓 Outils principaux

### **📌 `iptables`**

Outil traditionnel basé sur **Netfilter**, avec quatre tables principales :

- **filter** : contrôle d'accès
- **nat** : redirection
- **mangle** : modification
- **raw** : pré-traitement

### **📌 `nftables`**

Version moderne avec :

- Syntaxe simplifiée
- Meilleures performances
- Gestion unifiée


### 💻 Comment configurer des règles simples ?

<hr>

#### 🛠 Configurer un pare-feu avec `iptables`

**Lister les règles actuelles** :

```bash
sudo iptables -L -v
```

**Bloquer tout le trafic entrant** :

```bash
sudo iptables -P INPUT DROP
```

**Autoriser le trafic sortant** :

```bash
sudo iptables -P OUTPUT ACCEPT
```

**Autoriser les connexions SSH (port 22)** :

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

**Sauvegarder les règles** :

```bash
sudo iptables-save > /etc/iptables/rules.v4
```

<hr>

#### 🛠 Configurer un pare-feu avec `nftables`

**Créer une table et une chaîne** :

```bash
sudo nft add table ip filter
sudo nft add chain ip filter input { type filter hook input priority 0; }
```

**Bloquer tout le trafic par défaut** :

```bash
sudo nft add rule ip filter input drop
```

**Autoriser les connexions SSH** :

```bash
sudo nft add rule ip filter input tcp dport 22 accept
```

**Vérifier les règles** :

```bash
sudo nft list ruleset
```

## 🌟 Bonnes pratiques en sécurité réseau

- **Bloquer les ports inutilisés** : Réduire la surface d’attaque en autorisant uniquement les ports nécessaires.
- **Utiliser le principe du moindre privilège** : Par défaut, bloquer tout le trafic et ouvrir uniquement ce qui est requis.
- **Limiter les tentatives de connexion** : Utiliser des outils comme **fail2ban** pour prévenir les attaques par force brute.
- **Journaliser les activités suspectes** : Activer la journalisation des connexions rejetées pour surveiller les activités malveillantes :
    
    ```bash
    sudo iptables -A INPUT -j LOG --log-prefix "Firewall: "
    ```
    