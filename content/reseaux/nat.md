---
sidebar: auto
redac: true
date: 2024-03-17
---
# Le NAT et le PAT
<Badge type="tip" text="Rédigé le 17/03/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Introduction au NAT et au PAT

Le NAT (Network Address Translation) et le PAT (Port Address Translation) sont des techniques fondamentales utilisées dans les réseaux informatiques pour permettre à plusieurs dispositifs de partager une seule adresse IP publique. Ces méthodes sont essentielles pour gérer la pénurie d'adresses IPv4 et pour sécuriser les réseaux en masquant les adresses IP internes.

## Network Address Translation (NAT)

Le NAT est une méthode de traduction des adresses IP dans les paquets de données lorsqu'ils passent d'un réseau local (LAN) à un réseau étendu (WAN) tel qu'Internet. Le NAT modifie les en-têtes IP des paquets en remplaçant l'adresse IP source par une adresse IP publique unique et en conservant l'adresse IP de destination. Cela permet à plusieurs dispositifs sur un réseau local d'accéder à Internet en utilisant une seule adresse IP publique.

### Types de NAT

1. **NAT statique** : associe une adresse IP privée à une adresse IP publique de manière permanente.
2. **NAT dynamique** : attribue dynamiquement une adresse IP publique à un dispositif lorsque celui-ci établit une connexion sortante.
3. **NAT de surcharge (ou NAT PAT)** : également connu sous le nom de Port Address Translation (PAT), cette méthode utilise une seule adresse IP publique avec différents numéros de port pour traduire les adresses IP privées.

## Port Address Translation (PAT)

Le PAT est une extension du NAT qui utilise des numéros de port pour différencier les connexions sortantes des multiples dispositifs partageant une seule adresse IP publique. Chaque paquet sortant est modifié pour inclure à la fois l'adresse IP privée et un numéro de port unique qui permet de déterminer à quel dispositif il doit être renvoyé à l'intérieur du réseau local.

### Fonctionnement du PAT

Lorsqu'un paquet sortant atteint le routeur avec une adresse IP privée, le routeur modifie l'adresse source en remplaçant l'adresse IP privée par l'adresse IP publique du routeur et en assignant un numéro de port unique. Lorsque la réponse est reçue du périphérique distant, le routeur utilise le numéro de port pour identifier le dispositif interne auquel renvoyer la réponse.

## Avantages du NAT et du PAT

- **Conservation des adresses IPv4** : Permet à de nombreux dispositifs d'accéder à Internet en utilisant une seule adresse IP publique.
- **Sécurité** : Masque les adresses IP internes, renforçant ainsi la sécurité du réseau.
- **Gestion des connexions** : Permet de gérer efficacement les connexions entrantes et sortantes en associant les adresses IP et les numéros de port.


