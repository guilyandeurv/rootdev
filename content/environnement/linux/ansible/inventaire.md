---
sidebar: auto
date: 2025-10-11
---

# <RdIcon name="clipboard-pen" /> Inventaire
<ais />

## <RdIcon name="presentation" /> Présentation

Ansible pilote plusieurs hôtes en parallèle via un fichier d'inventaire. Par défaut, Ansible utilise son propre fichier, mais on peut en spécifier un **différent** avec les **paramètres** en ligne de commande.

L'inventaire est **configurable** et permet l'utilisation simultanée de plusieurs fichiers.

Ce fichier liste les hôtes et groupes d'hôtes pour les commandes et playbooks. Selon les **environnements** et **plugins**, il peut être en format `ini`, `yaml` ou `json`.

## <RdIcon name="list-tree" /> Les types d'inventaires

Ansible propose deux types d'inventaires :

- **L'inventaire statique**
- **L'inventaire dynamique**

L'inventaire dynamique utilise des scripts Python, tandis que l'inventaire statique utilise des fichiers `ini`, `yaml` ou `json`.

Dans ce cours, seul l'inventaire statique sera examiné.

## <RdIcon name="clipboard-pen" /> Les composants d'un fichier d'inventaire

Un fichier d'inventaire contient plusieurs éléments :

- **Hôtes et groupes** : Liste des systèmes et leurs groupes pour définir quels systèmes sont contrôlés. Les systèmes peuvent appartenir à plusieurs groupes, avec des variables héritées de chaque groupe.
- **Variables hôtes** : Variables assignées aux hôtes individuels pour les playbooks.
- **Variables de groupe** : Variables appliquées à tous les hôtes d'un groupe.
- **Groupes de groupes** : Hiérarchie de groupes avec leurs variables associées.
- **Groupes par défaut** : Deux groupes automatiques : `all` (tous les hôtes) et `ungrouped` (hôtes sans groupe spécifique).

## <RdIcon name="clipboard-pen" /> Création d'un fichier d'inventaire

L'inventaire Ansible se trouve par défaut dans `/etc/ansible/hosts`, mais peut être créé ailleurs.

> Voici un exemple d'inventaire `ini` :

``` bash
# structure de l'inventaire en ini
client1.rootdev.fr ansible_host=172.31.x.x # n'est placé explicitement dans aucun groupe donc sera dans le groupe ungrouped

[serveurweb]
serveurweb1.rootdev.fr ansible_host=172.31.x.x # hôte placé  dans le groupe serveurweb

[serveurdatabase]
serveurdatabase1.rootdev.fr ansible_host=172.31.x.x # hôte placé  dans le groupe serveurdatabase

[application:children] # groupe application, parent des groupes serveurweb et serveurdatabase
serveurweb
serveurdatabase

[serveurweb:vars] # variables pour les hôtes appartenant au groupe serveurweb
ansible_user=rootdev
ansible_password=rootdev2025

[all:vars] # variables pour les hôtes appartenant à tous les groupes à moins qu'elles soient surchargées au niveau des groupes ou au niveau des hôtes
ansible_become_pass=rootdev2025
ansible_connection=ssh
```

Ces serveurs sont organisés en groupes avec leurs variables de connexion.

Le même inventaire en YAML :

```yaml
all:
  vars:
    ansible_become_pass: "rootdev2025"
    ansible_connection: ssh
application:
  children:
    serveurweb:
      hosts:
        serveurweb1.rootdev.fr:
          ansible_host: 172.31.x.x
      vars:
        ansible_user: "rootdev"
        ansible_password: "rootdev2025"
    serveurdatabase:
      hosts:
        serveurdatabase1.rootdev.fr:
          ansible_host: 172.31.x.x
```

Les groupes permettent de gérer plusieurs serveurs simultanément dans les playbooks Ansible.

Les groupes peuvent être organisés hiérarchiquement avec le mot-clé `children`. Par exemple, le groupe `application` contient les groupes `serveurweb` et `serveurdatabase`.

Le format YAML, disponible depuis Ansible 2.4, offre une meilleure lisibilité et est recommandé. Les hôtes sont référencés par des alias comme `serveurweb1.rootdev.fr`.

## <RdIcon name="settings-2" /> _Les paramètres `ansible`_

Voici les principaux paramètres Ansible :

- `ansible_connection` : Définit la méthode de connexion au serveur cible (SSH, localhost, etc.)
- `ansible_port` : Spécifie le port SSH (par défaut 22)
- `ansible_user` : Définit l'utilisateur pour les connexions distantes
- `ansible_ssh_pass` : Spécifie le mot de passe SSH pour Linux