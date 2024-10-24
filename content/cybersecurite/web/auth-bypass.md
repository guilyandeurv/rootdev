---
sidebar: auto
redac: true
date: 2024-06-27
---
# Contournement de l'authentification 

Ces failles, connues pour leur criticité, permettent le contournement de l'authentification du client. Cela peut amener à des fuites de données personnelles, et donc leur correction est primordial.

## Énumération du nom d'utilisateur

À moins que l'on ait déjà un nom d'utilisateur auquel on souhaite tenter de se connecter, un exercice simple est de créer une liste des noms d'utilisateur valides.
Pour cela, il suffit de se rendre sur la page d'inscription du site ciblé, et de vérifier si celui-ci indique lorsque l'on entre un nom d'utilisateur déjà existant, si oui, on note les noms d'utilisateur trouvés.

### Utilisation de l'outil ***ffuf***

On peut utiliser l'existence de ce message d'erreur pour produire une liste de noms d'utilisateur valides déjà inscrits sur le système en utilisant l'outil ffuf. L'outil ffuf utilise une liste de noms d'utilisateur couramment utilisés pour vérifier les correspondances.

```bash
┌─[root@dev]─[~/]
└──╼ ffuf -w /usr/share/wordlists/SecLists/Usernames/Names/names.txt -X POST -d "username=FUZZ&email=x&password=x&cpassword=x" -H "Content-Type: application/x-www-form-urlencoded" -u http://rootdev.fr/signup -mr "Le nom d'utilisateur existe déjà."
```

Dans l'exemple ci-dessus, on retrouve les arguments suivants :
* ***-w*** = emplacement de la wordlist, ici `/usr/share/wordlists/SecLists/Usernames/Names/names.txt`
* ***-X*** = précise la méthode de requête, `GET` par défaut, `POST` dans cet exemple
* ***-d*** = spécifie les données que l'on va envoyer, correspond au formulaire d'inscription :
    * username : FUZZ correspond (pour ffuf) à l'argument où l'on va utiliser le contenu de notre liste
    * email : correspond à l'input de l'adresse mail, rien de sorcier, ici x car on ne le remplit qu'aléatoirement
    * password & cpassword : correspondent aux input du mot de passe et de sa confirmation
* ***-H*** = Ajoute des en-têtes supplémentaires à la demande, ici on utilise `Content-Type` pour que le serveur Web sache que l'on envoie des données de formulaire
* ***-u*** = Indique l'URL ciblé
* ***-mr*** = Le texte exact affiché sur la page lorsque l'erreur apparaît

Après avoir executé la commande, on entre les noms d'utilisateurs trouvés dans un fichier texte.

```bash

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : POST
 :: URL              : http://rootdev.fr/signup
 :: Wordlist         : FUZZ: /usr/share/wordlists/seclists/Usernames/Names/names.txt
 :: Header           : Content-Type: application/x-www-form-urlencoded
 :: Data             : username=FUZZ&email=x&password=x&cpassword=x
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Regexp: username already exists
________________________________________________

admin                   [Status: 200, Size: 3720, Words: 992, Lines: 77, Duration: 285ms]
robert                  [Status: 200, Size: 3720, Words: 992, Lines: 77, Duration: 125ms]
```

## Bruteforce



::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Introduction to Web Hacking*" :
https://tryhackme.com/module/intro-to-web-hacking
:::
