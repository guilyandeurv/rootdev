---
sidebar: auto
redac: true
date: 2024-03-17
---
# L'environnement Cisco
<Badge type="tip" text="Rédigé le 17/03/2024" />
<Badge type="warning" text="En cours de rédaction" />

Avant de commencer la configuration, il faut avoir un accès console à l'appareil Cisco. On peut utiliser un câble console et un programme de terminal tel que *PuTTY* ou *Tera Term* pour se connecter à l'appareil. Une fois connecté, il faut s'identifier avec un nom d'utilisateur et un mot de passe si la configuration de sécurité l'exige.

## Commandes de base

### Accès au mode configuration :
```shell
Switch> enable # en fonctionne également
Switch# configure terminal # conf term fonctionne également
Switch(config)# # mode configuration activé
```

### Visualisation des configuration :

1. La configuration en cours d'exécution :

```shell
Switch# show running-config
```

2. La configuration par défaut (chargée au démarrage) :

```shell
Switch# show startup-config 
```

3. La configuration des interfaces :

```shell
Switch# show interfaces status
```

4. La configuration des VLAN :

```shell
Switch# show vlan
```
5. La table ARP :

```shell
Switch# show arp 
```

### Configuration de base :

1. Attribuer un nom d'hôte :

```shell
Switch# hostname [nom]
```

2. Spécifier un mot de passe pour le mode administrateur :

```shell
Switch# enable password [mdp] #Visible en clair dans la visualisation de la configuration
```

3. Chiffrer le mot de passe administrateur :

```shell
Switch# enable secret [mdp] #Hash visible dans la visualisation de la configuration
```

4. Sauvegarder la configuration en cours :

```shell
Switch# copy running-config startup-config
```

5. Exporter la configuration en TFTP :

```shell
Switch# copy running-config  # Ou remplacer running-config par startup-config : it works too
Address or name of remote host []? 10.10.0.2 # Adresse IP du serveur TFTP
Destination filename [nom_du_fichier] # Nom à donner au fichier
Writing running-config....!! # Enregistrement en cours
[OK - 1120 bytes]
1120 bytes copied in 2.004 secs (560 bytes/sec)
```

6. Importer la configuration en TFTP :

```shell
Switch# copy tftp running-config # ou startup-config : au choix
Address or name of remote host []? 10.10.0.2 # Adresse IP du serveur TFTP
Source filename []? [nom_du_fichier]
Destination filename [running-config]? running-config # Ou startup-config
Accessing tftp://10.10.0.2: !
[OK - 1120 bytes]
1120 bytes copied in 2.004 secs (560 bytes/sec)
```

7. Indiquer l'emplacement du switch :

Il n’y a aucune commande précise permettant à Cisco IOS de définir l’emplacement. Néanmoins, on peut utiliser la commande banner motd global configuration pour définir les informations d'emplacement.

```shell
Switch# banner motd c [emplacement]
#exemple : banner motd c Toulouse site de Jean-Jaurès, Occitanie, FR
```

8. Configurer la date & l'heure :

```shell
Switch# clock set 16:58:30 17 Mar 2024 # les mois sont en anglais
```


## Configuration d'un switch

### Configuration d'un VLAN :

On n'affecte pas une adresse IP à un switch, mais à un VLAN : celui-ci sera donc considéré comme une interface.

```shell
Switch# vlan 2 # Création du VLAN 2
Switch# interface vlan 2 # accès au vlan 2
Switch# ip address 192.168.1.1 255.255.255.0 # indique l'adresse IP du VLAN
Switch# name [nom] # défini le nom du VLAN
Switch# no shutdown # défini l'interface comme n'étant pas désactivée
```

### Configuration d'un port :

```shell
Switch# interface fastEthernet 0/1 # le 1 étant le n° du port que l'on souhaite configurer 
Switch# swhicthport mode access # défini que le port n'appartiendra qu'à 1 seul VLAN (pas de tag)
Switch# switchport access vlan 2 # affectation du port au VLAN 1
Switch# no shutdown # défini le port comme n'étant pas désactivé
```

### Configuration d'un port tagué (appartenant donc à plusieurs VLANs) :

```shell
Switch# interface fastEthernet 0/48
Switch# switchport mode trunk # défini le port comme appartenant à plusieurs VLANs (port trunk)
# Inutile sur les switchs Cisco 2950 car ils ne supportent que ce type d'encapsulation :
Switch# switchport trunk encapsulation dot1q # les trames seront taguées suivant la norme 802.1q. Le port concerné véhiculera donc les trames de n'importe quel VLAN. 
```

## Configuration d'un routeur

### Configurer le nom de domaine :

```shell
Switch# ip domain-name [domaine] # Exemple : ip domain-name rootdev.fr
```

### Configurer une interface :

```shell
Switch# interface fastEthernet 0/0 # sélectionne la première interface, fastEthernet 0/1 pour la 2nd
Switch# ip address 192.168.100.1 255.255.255.0 # Configuration de l'adresse IP de l'interface
Switch# ip route 0.0.0.0 0.0.0.0 192.168.100.254 # Configuration de la passerelle
Switch# no shutdown # Définie l'interface comme étant active
```

### Configuration du routage statique :

```shell
Switch# ip route 192.168.1.0 255.255.255.0 s0/0 192.168.0.0 # le réseau 192.168.0.0 est connecté depuis le port Serial au réseau 192.168.1.0
Switch# ip route 192.168.0.0 255.255.255.0 s0/1 192.168.1.0 # lé réseau 192.168.1.0 est connecté depuis le port Serial au réseau 192.168.0.0
```

## Terminologie

1. **Spinning Tree** : Le but de cette configuration est, dans le cas qu’un câble soit déconnecté pour n‘importe quelle raison, que la liaison entre les switchs ne soient pas coupées et que les informations circulent par un autre chemin. Le principe de ce protocole est de vérifier qu’aucune boucle n’est créée dans le réseau, car elles sont fatales pour celui-ci.

::: danger Risque fatal pour le réseau ⚠️
Mal configuré, il y a un **risque de “tempête de broadcast”**, ce qui signifie qu’une trame de type ARP tourne en boucle entre les switchs et les sature. Ce qui empêche le bon fonctionnement du réseau, car les switchs seront occupés à s’occuper de cette trame qui sera envoyée en boucle.

Il faut donc paramétrer le Spinning Tree avant de procéder à la connexion des liens.
:::

2. **Port trucking** : Le but de cette configuration est de rentre deux ports comme un : le débit sera donc doublé entre les deux switchs.
::: danger Risque fatal pour le réseau ⚠️
Mal configuré, il y a un **risque de “tempête de broadcast”**, ce qui signifie qu’une trame de type ARP tourne en boucle entre les switchs et les sature. Ce qui empêche le bon fonctionnement du réseau, car les switchs seront occupés à s’occuper de cette trame qui sera envoyée en boucle.

Il faut donc paramétrer le Port Trucking avant de procéder à la connexion des liens.
:::

3. **Port Mirroring** : Le but de cette configuration est de visualiser le traffic en direction et en provenance d'Internet. Cette fonctionnalité va copier les paquets transitant par le switch vers un port de destination. L'intérêt ici serait de connecter un poste équipé de *Wireshark* par exemple pour visualiser celui-ci.

<hr>
<br>

::: info Sources
Ce cours s'inspire des documentations Cisco suivantes :

Switch : https://www.cisco.com/c/fr_ca/support/docs/switches/catalyst-6000-series-switches/10581-6.html

Routeur : https://www.cisco.com/c/fr_ca/support/docs/cloud-systems-management/configuration-professional/111999-basic-router-config-ccp-00.html
:::
