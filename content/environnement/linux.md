---
sidebar: auto
---
# Les fondamentaux de Linux
<Badge type="tip" text="Rédigé le 14/03/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Commandes de base

Afficher le répertoire actuel
```shell
pwd
```
Se déplacer dans le répertoire "Desktop"
```shell
cd /Desktop
# Retourner au répertoire précédent
cd ../
```
Afficher le contenu d'un répertoire
```shell
ls
# Afficher les détails avec les permissions
ls -l
# Afficher les fichiers cachés
ls -a
```
Créer un nouveau répertoire
```shell
mkdir nom_du_répertoire
```
Créer un fichier vide ou mettre à jour la date de modification d'un fichier existant
```shell
touch nom_du_fichier
```
Copier un fichier ou un répertoire
```shell
cp nom_du_fichier destination
```
Déplacer ou renommer des fichiers et/ou répertoires
```shell
mv fichier_source fichier_destination
```
Supprimer des fichiers ou répertoires
```shell
rm nom_du_fichier
rm -r nom_du_répertorie # Supprime récursivement
```
Afficher le contenu d'un fichier
```shell
cat nom_du_fichier
```
Entrer dans l'éditeur de fichier
```shell
nano nom_du_fichier
```
Afficher le mode d'emploi d'une commande
```shell
man commande
```
Afficher le nom d'utilisateur sur lequel nous sommes connecté
```shell
whoami
```

### Recherche de fichiers

```shell
┌─[root@parrot]─[~/Desktop]
└──╼ ls
Images  Répertoire1 fichier.txt 
```

Ci-dessus, nous pouvons lire les différents noms des répertoires présents dans *Desktop*. Pour éviter de chercher dans chaque répertoire le fichier *fichier2.txt*, la commande `find` s'offre à nous.

Dans le cas où nous connaissons le nom du fichier :
```shell
┌─[root@parrot]─[~/Desktop]
└──╼ find -name fichier2.txt
./Répertoire1/fichier2.txt
```
Ici, le *fichier2.txt* a été trouvé dans *./Répertoire1/fichier2.txt*.

Dans le cas où nous ne connaissons pas son nom, ou que nous voulons rechercher chaque fichier portant l'extension *.txt*
```shell
┌─[root@parrot]─[~/Desktop]
└──╼ find -name *.txt
./Répertoire1/fichier2.txt
```
Ici, un fichier *fichier2.txt* a été trouvé car il porte l'extension *.txt*.

### Rechercher dans le contenu d'un fichier

Dans le cas des logs de connexion d'un serveur web :
```shell
┌─[root@parrot]─[~/]
└──╼ wc -l access.log
244 access.log
```
On peut lire qu'il y a 244 entrées. Si on cherche une valeur en particulier, cela peut se montrer long avec la commande `cat`. Pour cela, on va utiliser la commande `grep` :
```shell
┌─[root@parrot]─[~/]
└──╼ grep "81.143.211.90" access.log
81.143.211.90 - - [25/Mar/2021:11:17 + 0000] "GET / HTTP/1.1" 200 417 "-" "Mozilla/5.0 (Linux; Android 7.0; Moto G(4))"
```
Ici est affiché le résultat de la commande `grep` en ayant comme paramètre l'adresse IP entrée précédemment.

### Gestion des paquets

```shell
# Installation d'un paquet
sudo apt-get install <nom_du_paquet>
# Mise à jour des paquets
sudo apt-get update
sudo apt-get upgrade
# Recherche d'un paquet
apt-cache search <terme_de_recherche>
# Suppression d'un paquet
sudo apt-get remove <nom_du_paquet>
```

### Gestion des services

```shell
# Redémarrer un service
sudo systemctl restart <nom_du_service>
# Arrêt du service
sudo systemctl stop <nom_du_service>
```

### Gestion des processus
```shell
# Afficher les processus en cours
ps aux
# Fermer un processus en cours
kill [PID] # le PID est vu en faisant la commande ps
# Fermer un processus en effectuant un nettoyage avant
sigterm [PID]
# Fermer un processus sans nettoyage
sigkill [PID]
# Suspendre un processus
sigstop [PID]
```

### Gestion des utilisateurs
```shell
# Ajout d'un utilisateur
sudo adduser <nom_utilisateur>
# Changement de mot de passe d'un utilisateur
sudo passwd <nom_utilisateur>
# Suppression d'un utilisateur
sudo deluser <nom_utilisateur>
```

## Fichiers systèmes
### Structure de répertoires principaux
* /bin: Contient les programmes essentiels du système.
* /etc: Fichiers de configuration système.
* /home: Répertoires des utilisateurs normaux.
* /var: Données variables telles que les journaux et les bases de données.
### Fichiers de configuration importants
* /etc/apt/sources.list: Liste des sources de paquets APT.
* /etc/passwd: Informations sur les comptes d'utilisateurs.
* /etc/group: Informations sur les groupes d'utilisateurs.
* /etc/fstab: Table de montage des systèmes de fichiers.

## Droits d'accès sur les fichiers
### Commandes de gestion des droits
```shell
# Change les permissions d'accès à un fichier ou un répertoire
chmod u+rwx fichier
```
```shell
# Change le propriétaire d'un fichier ou d'un répertoire
chown [options] nouvel_utilisateur:fichier
```
```shell
# Change le groupe d'un fichier ou d'un répertoire
chgrp [options] nouveau_groupe fichier
```

### Structure de permissions

Les permissions sont généralement représentées par une série de caractères qui indiquent le droit de lecture (**r**), d'écriture (**w**) et d'exécution (**x**) pour l'utilisateur, le groupe et les autres utilisateurs :

- **r** : Permission de lecture.
- **w** : Permission d'écriture.
- **x** : Permission d'exécution.

### Exemples pratiques

**Changer les permissions d'un fichier**

Supposons que nous voulons donner la permission de lecture et d'écriture à l'utilisateur, mais seulement la permission de lecture aux autres :
```shell
chmod u+rw,o+r fichier
```

**Changer le propriétaire d'un fichier**

Supposons que nous voulons changer le propriétaire du fichier exemple.txt à l'utilisateur aurelien :
```shell
chown aurelien:exemple.txt
```

**Changer le groupe d'un fichier**

Supposons que nous voulons changer le groupe du fichier exemple.txt au groupe comptabilite :
```shell
chgrp comptabilite exemple.txt
```

