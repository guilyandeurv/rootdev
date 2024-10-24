---
sidebar: auto
date: 2024-02-26
---
# PRINCIPALES DEFINTIONS DE LA CYBERSECURITE 

## L'authentification

L'authentification, c'est la preuve de l'identification de l'utilisateur, selon un facteur d'authentification :

| Facteur       | Description                             |
| :-------------: | :----------------------------------------------------------------------:|
| Mémoriel      | Secret connu par l'user, MDP ou clef privée                             |
| Matériel      | Secret stocké sur un object : clé USB, carte à puce                     |
| Corporel      | Basée sur une information biologique : empreinte digitale, FaceID...    |
| Réactionnel   | Geste unique reproductible par l'user : signature manuscrite            |

On nomme **authentification forte** celle qui fait usage de plusieurs facteurs : mémoriels (mot de passe) & matériel (application de double authentification ou SMS).

Une **authentification simple** serait un usage d'un seul facteur, généralement mémoriel.

## Terminologie du chiffrement

* *<span style="color:#7897ea">Texte en clair</span>* : texte **non chiffré**
* *<span style="color:#7897ea">Texte chiffré</span>* : résultat du **chiffrement** sur un **texte en clair**
* *<span style="color:#7897ea">Chiffrement</span>* : méthode ou algorithme utilisé pour la transformation d'un **texte en clair** en **texte chiffré**
* *<span style="color:#7897ea">Déchiffrement</span>* : méthode ou algorithme utilisé pour la transformation d'un **texte chiffré** en **texte clair**
* *<span style="color:#7897ea">Clé</span>* : secret partagé qui est utilisé pour **chiffrer** le **texte en clair** & également pour **déchiffré** celui-ci
* *<span style="color:#7897ea">Cryptographie</span>* : Ensemble des méthodes permettant le **chiffrement** ainsi que le **déchiffrement** d'un texte, dans le but de le rendre incompréhensible pour quiconque n'ayant pas en possession la **clé**
* *<span style="color:#7897ea">Cryptanalyse</span>* : art de révéler un **texte chiffré** en **texte en clair** sans n'en connaître la **clé**
* *<span style="color:#7897ea">Cryptologie</span>* : science étudiant les communications secrètes, composée de la **cryptographie** et de la **cryptanalyse**
* *<span style="color:#7897ea">Décrypter</span>* : action de retrouver le **texte en clair** correspondant à un **texte chiffré** sans en posséder la **clé**
* *<span style="color:#7897ea">Crypter</span>* : mot sans aucun sens utilisé à tort. ***Crypter*** ≠ ***Chiffrer***. *Idem pour* "***Cryptage***"
* *<span style="color:#7897ea">Coder</span>*, *<span style="color:#7897ea">Décoder</span>* : méthode ou algorithme permettant de modifier la forme d'un message sans élément secret. *Exemple : le Morse*
* *<span style="color:#7897ea">Cryptographie mécanique</span>*  : usage de moyens mécaniques pour **chiffrer** un message, plus utilisé de nos jours
* *<span style="color:#7897ea">Cryptographie mathématique</span>* : usage des mathématiques pour **chiffrer** un message, celle utilisée de nos jours
* *<span style="color:#7897ea">Cryptographie quantique</span>* : **cryptographie** dont les bases reposent sur la *physique quantique*. Toujours en développement, probablement la cryptographie qui remplacera l'actuelle

<br>

::: danger Abus de langage ⚠️
* *Crypter* : mot sans aucun sens utilisé à tort. ***Crypter*** ≠ ***Chiffrer***. *Idem pour* "***Cryptage***"

Selon l'ANSSI, ce terme est incorrect. En effet, il s'agit d'un abus de langage puisque « **crypter** » un fichier reviendrait à le **chiffrer** sans connaître la **clé de chiffrement**, ce qui empêcherait de le **déchiffrer** par la suite.
:::