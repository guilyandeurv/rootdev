---
sidebar: auto
date: 2025-10-11
---

# <RdIcon name="component" /> Les modules et commandes ad hoc
<ais />

## <RdIcon name="presentation" /> Présentation

Les modules sont des unités de code autonomes avec des fonctionnalités spécifiques, utilisées comme **couche fonctionnelle** dans les tâches de playbook.

Ils simplifient l'automatisation en masquant la complexité technique, permettant aux utilisateurs d'être plus productifs.

## <RdIcon name="cog" /> Implémentation

Exemple d'utilisation du module `apt` :

```yaml
- name: Installation d'apache via le module apt
  apt:
    name: apache2
    state: present
```

Les modules s'exécutent aussi en ligne de commande via des commandes `ad hoc`.

> La commande ci-dessous exécute le module ping sur tous les hôtes de l'inventaire :

``` bash
ansible all -i inventaire.yaml -m ping
```

Pour le moment aucun résultat n'est renvoyé car l'inventaire n'existe pas encore.

Les modules reçoivent des arguments et retournent du `JSON`. Ils suivent [le principe d'idempotence](https://docs.ansible.com/ansible/latest/reference_appendices/glossary.html#term-Idempotency) : plusieurs exécutions produisent le **même résultat** sans changement de configuration.

Les modules **personnalisés** nécessitent une documentation accessible via `ansible-doc`.

> Exemple avec le module `apt` :

``` bash
ansible-doc apt
```

Retour à l'écran :

``` bash
APT    (/usr/lib/python3.8/site-packages/ansible/modules/packaging/os/apt.py)

        Manages `apt' packages (such as for Debian/Ubuntu).

  * This module is maintained by The Ansible Core Team
OPTIONS (= is mandatory):

- allow_unauthenticated
        Ignore if packages cannot be authenticated. This is useful for bootstrapping environments that manage
        their own apt-key setup.
        `allow_unauthenticated' is only supported with state: `install'/`present'
        [Default: no]
        type: bool
        version_added: 2.1

- autoclean
        If `yes', cleans the local repository of retrieved package files that can no longer be downloaded.
        [Default: no]
        type: bool
        version_added: 2.4

- autoremove
        If `yes', remove unused dependency packages for all module states except `build-dep'. It can also be
        used as the only option.
        Previous to version 2.4, autoclean was also an alias for autoremove, now it is its own separate
        command. See documentation for further information.
```

Les modules récents font partie des [collections](https://docs.ansible.com/ansible/latest/user_guide/collections_using.html), incluant rôles, modules, plugins et playbooks. La collection [Ansible.Builtin](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html#plugins-in-ansible-builtin) contient les modules de base, avec d'autres disponibles dans la [collection](https://docs.ansible.com/ansible/latest/collections/index.html#list-of-collections).

## <RdIcon name="blocks" /> Modules courants

Voici les principaux modules Ansible :

- **Gestion des paquets (yum/apt)**

Les modules [apt](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/apt_module.html) et [yum](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/yum_module.html) gèrent les paquets sur Debian/Ubuntu et RHEL/CentOS respectivement.

```yaml
- name: Installer apache2
  apt:
    name: apache2
    state: latest
    update_cache: yes
```

- **Services**

Le [module service](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/service_module.html) contrôle les services système :

```yaml
- name: Redémarrer httpd
  service:
    name: httpd
    state: restarted
```

- **Fichiers et répertoires**

Les modules [file](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/file_module.html) et [copy](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/copy_module.html) gèrent les fichiers :

```yaml
- name: Créer un répertoire
  file:
    path: /etc/rootdev
    state: directory
    mode: "0755"
```

```yaml
- name: "Copier le fichier avec le propriétaire et les autorisations"
  copy:
    src: /rootdev-source/test
    dest: /rootdev-destination/test
    owner: rootdev
    group: admin
    mode: "0755"
```

- **Templates**

Le module [template](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/template_module.html) utilise Jinja2 pour générer des fichiers de configuration.

```yaml
- name: "Copiez et modèlez le fichier de configuration Nginx sur les hôtes"
  ansible.builtin.template:
    src: rootdev-templates/nginx.conf.j2
    dest: /etc/nginx/sites-available/default
```

- **Manipulation de texte**

Les modules [lineinfile](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/lineinfile_module.html) et [blockinfile](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/blockinfile_module.html) modifient des fichiers ligne par ligne ou par blocs.

```yaml
- name: "Ajouter une ligne à un fichier s'il n'existe pas"
  lineinfile:
    path: /tmp/rootdev
    line: "Cette ligne doit exister dans le fichier"
    state: present
```

```yaml
- name:
    "Insérer/Mettre à jour la  configuration de eth1 dans /etc/network/interfaces"
    # Il serait peut-être préférable de copier les fichiers dans /etc/network/interfaces.d/
  ansible.builtin.blockinfile:
    path: /etc/network/interfaces
    block: |
      iface eth1 inet static
          address 192.168.10.10
          netmask 255.255.255.0
```

- **Tâches planifiées**

Le [module cron](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/cron_module.html) gère les tâches planifiées.

```yaml
- name: "Exécutez le script de sauvegarde de base de données quotidien à 00h00"
  ansible.builtin.cron:
    name: "Exécutez le script de sauvegarde de base de données quotidien à 00:00"
    minute: "0"
    hour: "0"
    job: "/usr/local/bin/save.sh > /var/log/save.sh.log 2>&1"
```

- **Commandes shell**

Les modules `command` et `shell` exécutent des commandes. On utilisera plutôt les modules spécialisés quand possible.

```yaml
- name: "Exécuter un script dans un shell distant et capturer la sortie dans un fichier"
  ansible.builtin.shell: script.sh >> script.log
```

- **Modules personnalisés**

On peut créer nos propres modules en renvoyant du JSON. Il faut d'abord vérifier qu'un module existant ne répond pas déjà au besoin.

## <RdIcon name="thumbs-up" /> Bonnes pratiques sur les modules Ansible

- **Utilisation des modules spécialisés au lieu de `shell`/`command`** :

On priorise les modules spécialisés aux modules `shell` ou `command`. Les modules spécialisés assurent l'idempotence, intègrent la gestion des erreurs et gèrent automatiquement les dépendances.

> L'idempotence est un principe selon lequel plusieurs exécutions produisent le même résultat sans changement de configuration. En d'autres termes, peu importe combien de fois une opération est exécutée, le résultat final reste identique après la première exécution réussie.

```yaml
- name: "Installation des Dépendances de docker"
  apt:
    name:
      - curl
      - ca-certificates
      - gnupg2
      - lsb-release
    state: latest

```

La méthode ci-dessus doit être préférée par rapport à la définition `loop` de plusieurs tâches distinctes à l'aide du même module.

- **Les modules personnalisés doivent être simples et spécifiques :**

Un module personnalisé doit se concentrer sur une seule problématique avec une **fonctionnalité précise** et **simple**. Pour des fonctionnalités plus complexes, on crée plutôt [une nouvelle collection](https://docs.ansible.com/ansible/latest/dev_guide/developing_modules_in_groups.html#developing-modules-in-groups).

- **Les modules personnalisés doivent avoir des paramètres prévisibles :**

On crée une interface claire avec des arguments bien définis et simples. On utilise des noms de paramètres en minuscules avec des traits de soulignement.

- **Documenter et tester les modules personnalisés :**

Il faut inclure des exemples, documenter les dépendances et les retours. Tester rigoureusement avec des rôles et playbooks avant publication.

## <RdIcon name="terminal" /> Les commandes `ad hoc`

Les commandes `ad hoc` sont des commandes Ansible exécutées **directement** depuis le terminal sur un ou **plusieurs** clients. Elles permettent d'effectuer rapidement des actions **ponctuelles** ou des tests.

Ces commandes en une ligne, sans **playbook**, permettent de vérifier les connexions, gérer fichiers, services et utilisateurs. Bien que puissantes, elles sont limitées à l'exécution d'un seul module à la fois.

**Syntaxe:**

``` bash
$ansible [modele] -i [fichier inventaire] -m [module] -a "[options de module]"
```

- `modele` : Spécifie les **nœuds** ou groupes ciblés
- `module` : Le **module** Ansible à exécuter
- `options de module` : Les **options** du module (facultatif)
- `fichier d'inventaire` : Liste les machines ciblées

> Créer un environnement de travail :

``` bash
mkdir ansible
cd ansible
touch ansible.cfg
```

> Configuration du fichier ansible.cfg :

``` bash
[defaults]
host_key_checking = False
```

Désactiver `host_key_checking` permet d'éviter les demandes de confirmation lors de la connexion aux hôtes.

> Création du fichier d'inventaire :

``` bash
echo "cible1 ansible_host=172.31.x.x ansible_user=rootdev > inventaire
```

On remplace évidemment 172.31.x.x par l'adresse IP privée de la machine cible. L'alias "cible1" permettra d'identifier l'hôte distant.

On teste la connexion avec le module `ping` :

``` bash
ansible all -i inventaire -m ping
```

Résultat attendu :

``` bash
cible1 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    },
    "changed": false,
    "ping": "pong"
```

Cette commande vérifie la communication entre le serveur maître et le client "cible1".

**Le module setup**

Pour obtenir des informations sur le client `cible1`, on utilise le module `setup`.

``` bash
ansible cible1 -i inventaire -m setup
```

Le module `setup` collecte les détails du nœud distant sous forme de variables utilisables dans les actions. Ce module s'exécute automatiquement au début de chaque tâche de `playbook`.

Pour cibler une variable spécifique, on utilise l'option `filter` :

``` bash
ansible cible1 -i inventaire -m setup -a "filter=ansible_virtualization_type"
```

Résultat :

``` bash
cible1 | SUCCESS => {
    "ansible_facts": {
        "ansible_virtualization_type": "docker",
        "discovered_interpreter_python": "/usr/bin/python"
    },
    "changed": false
}
```

> Récupérer la consommation mémoire des hôtes distants avec le module setup. 

``` bash
ansible cible1 -i inventaire -m setup -a "filter=ansible_*_mb"
```

Résultat :

``` bash
cible1 | SUCCESS => {
    "ansible_facts": {
        "ansible_memfree_mb": 11136,
        "ansible_memory_mb": {
            "real": {
                "free": 11136,
                "total": 32011,
                "used": 20875
            }
        }
    }
}
```

> Configurer le contenu du fichier d'inventaire.

```bash
#Configuration de l'inventaire
nano inventaire

#Contenu
cible1 ansible_host=172.31.x.x ansible_user=rootdev ansible_sudo_pass=Password
cible2 ansible_host=172.31.x.x ansible_user=rootdev ansible_sudo_pass=Password
```

> Lancer l'installation du package sur l'hôte cible :

```bash
# Mise à jour des paquets
ansible cible2 -i inventaire -m apt -a "upgrade=yes update_cache=yes" -b

#Installation de Nginx
ansible cible2 -i inventaire -m apt -a "name=nginx state=latest" -b
```

Résultat de l'installation :

```bash
cible2 | CHANGED => {
    "changed": true,
    "changes": {
        "installed": ["nginx"]
    },
    "msg": "",
    "rc": 0
}
```

Installation réussie de `nginx` sur `cible2` en mode privilégié avec `-b`. Le mot de passe sudo est défini dans l'inventaire via `ansible_sudo_pass`.

Pour supprimer Nginx, on exécute la commande suivante :

``` bash
ansible cible2 -i inventaire -m apt -a "name=nginx state=absent" -b
```

Résultat :

``` bash
cible2 | CHANGED => {
    "changed": true,
    "changes": {
        "removed": ["nginx"]
    }
}
```

La valeur `changed: true` confirme que Nginx a été désinstallé avec succès.