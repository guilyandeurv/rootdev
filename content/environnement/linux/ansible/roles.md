---
sidebar: auto
date: 2025-10-11
---

# 🔢 Rôles
<ais />

## Présentation

**Les rôles permettent de réutiliser et partager le code Ansible**. Ils structurent les tâches, variables, gestionnaires et autres fichiers de manière organisée, permettant leur réutilisation dans plusieurs projets via quelques lignes de code.

Au début avec Ansible, on écrit des playbooks pour **automatiser** nos tâches. Le code, structuré selon les normes Ansible, peut être partagé via **Ansible Galaxy**.

Les rôles offrent une meilleure organisation que les playbooks seuls, ce qui devient crucial quand les projets se complexifient.

Cette approche permet une organisation logique des projets et favorise la séparation des responsabilités. Elle améliore aussi la collaboration, car les équipes peuvent travailler sur des **rôles** différents simultanément.

## Structure de rôle Ansible

Chaque rôle a son propre répertoire contenant des sous-répertoires spécifiques selon leur fonction. Un rôle nécessite au moins un de ces répertoires standards.

> On crée une structure avec `ansible-galaxy init`, inclus dans Ansible :

``` bash
mkdir roles
cd roles
ansible-galaxy init wordpress
```

Structure créée :

``` bash
wordpress/
├── defaults
│   └── main.yml
├── files
├── handlers
│   └── main.yml
├── meta
│   └── main.yml
├── README.md
├── tasks
│   └── main.yml
├── templates
├── tests
└── vars
    └── main.yml
```

Les répertoires principaux sont :

- **defaults** – Variables par défaut du rôle (priorité basse)
- **files** – Fichiers statiques utilisés par le rôle
- **handlers** – [Gestionnaires](https://docs.ansible.com/ansible/latest/user_guide/playbooks_handlers.html) déclenchés par les tâches
- **meta** - Métadonnées du rôle (dépendances, auteur, licence)
- **tasks** - Liste des tâches à exécuter
- **templates** – Modèles [Jinja2](https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html)
- **vars** – Variables du rôle ([haute priorité](https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html))

Le répertoire optionnel **bibliothèque** peut contenir des modules et plugins personnalisés. Un fichier `README.md` permet de documenter le rôle.

## Création de rôles

La méthode courante est de convertir un playbook en rôle en réorganisant son contenu dans les répertoires appropriés.

Ansible cherche les rôles dans le répertoire du playbook, le dossier `roles` ou via [roles_path](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#default-roles-path) dans `ansible.cfg`. Un chemin personnalisé est aussi possible :

``` yaml
- hosts: all
  roles:
    - role: "/homes/rootdev/chemin-du-role"
```

## Ansible Galaxy

Ansible Galaxy est un référentiel en ligne pour les rôles et collections Ansible. Il permet d'obtenir rapidement des composants développés par la communauté, notamment des **rôles** d'entreprises comme **AWS**, **Azure** et **Heroku**.

La commande `ansible-galaxy`, incluse avec Ansible, permet d'installer des rôles depuis Galaxy ou **SCM git**, de créer ou supprimer des rôles, et d'interagir avec le site Galaxy. Ce projet open-source peut être hébergé en interne.

Pour utiliser un serveur Galaxy interne, on modifie l'adresse dans `ansible.cfg` :

Installation d'un rôle :

``` bash
ansible-galaxy install --roles-path . nomdurole
```

Le rôle est téléchargé dans le répertoire `.ansible` de l'utilisateur pour utilisation dans les playbooks.