---
sidebar: auto
date: 2025-10-11
---

# <RdIcon name="vault" /> Vault
<ais />

## <RdIcon name="presentation" /> Présentation

Ansible Vault est une fonctionnalité d'Ansible qui permet de **protéger** les données sensibles en chiffrant les `playbook` contenant des informations confidentielles.

Un `playbook` **chiffré** ne peut être lu qu'avec le mot de passe correct, même par un administrateur.

Pour sécuriser les données sensibles dans les `playbook`, on utilise la commande `ansible-vault` pour chiffrer et déchiffrer les secrets.

Les secrets chiffrés peuvent être stockés en sécurité dans un gestionnaire de code source. Ansible Vault protège les *"données au repos"*, mais une fois déchiffrées, leur protection relève de notre responsabilité.

Le chiffrement s'applique aux variables (déchiffrées à la demande) et aux fichiers (toujours déchiffrés à l'exécution).

## <RdIcon name="file-lock" /> Gestion des données sensibles

Pour créer un nouveau fichier chiffré :

``` bash
ansible-vault create monfichier.yaml
```

On entre le mot de passe **vault** pour chiffrer le fichier :

```
New Vault password:
Confirm New Vault password:
```

Les principales commandes pour gérer les fichiers chiffrés sont :

- `encrypt` : chiffre un fichier existant
- `view` : affiche un fichier chiffré
- `edit` : modifie un fichier chiffré
- `rekey` : change le mot de passe
- `decrypt` : déchiffre un fichier

Pour exécuter les playbooks, on utilise soit `--vault-password-file` soit `ask-vault-pass` pour fournir le mot de passe.