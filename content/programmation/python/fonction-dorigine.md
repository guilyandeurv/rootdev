---
sidebar: auto
redac: true
date: 2024-08-18
---
# Les fonctions d'origine

Les fonctions "d'origine", familièrement appelées, sont les fonctions disponibles dans Python dès son installation. Plusieurs ont été citées plus haut, elles ont un intérêt dans la conception des programmes, que ce soit pour organiser des listes, vérifier des données, etc.

## La fonction `split()`

Permet de séparer la chaîne de caractère en plusieurs éléments, en opérant la séparation sur un caractère.
Exemple :

```python:line-numbers=1 {4}
chaine = "Thomas, Théo, Ludo, Olivier, Antho"
chaineListe = chaine.split(", ")
print(chaineListe)
["Thomas", "Théo", "Ludo", "Olivier", "Antho"]# [!code ++]
```

Ici, la fonction `split()` a transformé la variable `str` en une liste. Les éléments de cette liste ont été identifiés par chaque séparation ", ", indiqué comme argument dans la fonction.

## La fonction `sort()`

Permet de trier les valeurs de façon croissante.

Exemple :
```python:line-numbers=1 {4,8}
chaine = ["Thomas", "Théo", "Ludo", "Olivier", "Antho"]
print(chaine)
["Thomas", "Théo", "Ludo", "Olivier", "Antho"]# [!code ++]
chaine.sort()
chaineTriee = ", ".join(chaine)
print(chaine)
Antho, Ludo, Olivier, Théo, Thomas# [!code ++]
```

Dans l'exemple ci-dessus, on peut s'apercevoir que les prénoms ont été triés dans l'ordre alphabétique.

## La fonction `join()`
Permet joindre différents éléments d'une liste par une chaîne de caractère. 
Exemple : 

```python:line-numbers=1 {4,8}
chaine = ["Thomas", "Théo", "Ludo", "Olivier", "Antho"]
chaineStr = ", ".join(chaine)
print(chaineStr)
Antho, Ludo, Olivier, Théo, Thomas# [!code ++]
```

Dans l'exemple ci-dessus, on comprend que la liste `chaine` est devenue une `str`, chaque élément de la liste ont été séparés par l'argument précédent la fonction `join()`, ici ", ".

## La fonction `isdigit()`

Renvoie une valeur `True` ou `False` selon l'argument entré dans la fonction si oui ou non il s'agit de nombres.
Exemple :

```python:line-numbers=1 {2}
portefeuille = input("Combien avez-vous dans votre portefeuille ?")
if portefeuille.isdigit() : # La fonction isdigit() vérifie que les valeurs entrées sont des nombres
    print(portefeuille)
else:
    print("La valeur entrée n'est pas conforme.")
```

Dans l'exemple ci-dessus, on demande à l'utilisateur d'entrer une valeur numérique, si celui-ci entre une valeur en `str`, `isdigit(valeur)` renverra `False` et passera à la ligne `else`, sinon, il "printera" la valeur donnée par l'utilisateur.

## La fonction `list()` & `range()`

Permet la création rapide d'une liste de nombre selon une échelle donnée.
La fonction `list` permet elle de créer une liste selon un argument donné, ici la variable `liste`.
Exemple :

```python:line-numbers=1 {4}
liste = range(5, 15)
liste2 = list(liste)
print(liste2)
[5, 6, 7, 8, 9, 10, 11, 12, 13, 14]# [!code ++]
```

On peut également entrer un seul argument dans la fonction `range`, qui débutera alors par 0 jusqu'au nombre donné, exemple : 

`liste = list(range(10)) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

**Attention !** Depuis Python 3, la fonction `range()` ne retourne pas une liste mais un objet de type 'range'.

Si on veut créer une liste de nombres pairs, on peut donner un écart entre chaque nombre :
`liste = range(2, 101, 2)`

Ici ce sera le dernier arguement de la fonction `range()` qui définira l'écart.

## La fonction `random()`

Permet de générer une valeur aléatoire.
Exemple : 

```python:line-numbers=1 {6,7,8,9,10}
import random

for _ in range(5):
    nombre = random.choice(range(1, 7))
    print(nombre)
5# [!code ++]
1# [!code ++]
1# [!code ++]
2# [!code ++]
5# [!code ++]
```

## La fonction `count()`

Permet de compteur le nombre d'un argument choisi.
Exemple : 

```python:line-numbers=1 {6}
lettre_a_chercher = "o"
phrase = "Bonjour tout le monde"

x = phrase.count(lettre_a_chercher)
print(x)
4# [!code ++]
```

Ici, la fonction `count()` va chercher le nombre de "o" dans la phrase "Bonjour tout le monde", et retourne donc la valeur 4.
Cependant, si on a une phrase contenant des "O" majuscules, ceux-ci ne seront pas comptabilisés, pour cela, on peut rendre minuscule chaque lettre avec la fonction `lower` :
<br>
`x = phrase.lower(phrase.count(lettre_a_chercher))`

## Les fonctions de casse (`lower()`, `upper()`, `title()` & `capitalize()`)

Permet de transformer une chaine de caractère en une autre, en fonction de la casse.
Exemple :
```python:line-numbers=1 {4}
chaine = "Bonjour tout le monde"
chaine = chaine.lower()
print(chaine)
"bonjour tout le monde"# [!code ++]
chaine = chaine.upper()
print(chaine)
"BONJOUR TOUT LE MONDE"# [!code ++]
chaine = chaine.title()
print(chaine)
"Bonjour Tout Le Monde"# [!code ++]
chaine = chaine.capitalize()
print(chaine)
"Bonjour tout le monde"# [!code ++]
```

La fonction `lower()` va transformer la chaine de caractère en minuscules.
La fonction `upper()` va transformer la chaine de caractère en majuscules.
La fonction `title()` va transformer ajouter le premier caractère de chaque mot en majuscule.
La fonction `capitalize()` va transformer la première lettre de chaque phrase en majuscule.

## La fonction `replace()` 

Permet de remplacer une chaine de caractère par une autre.
Exemple :
```python:line-numbers=1 {4}
bon = "bonjour".replace("jour", "soir")
print(bon)
"bonsoir"# [!code ++]
bon = "bonjour, bonjour".replace("jour", "soir")
print(bon)
"bonsoir, bonsoir"# [!code ++]
bon = "bonjour, bonjour".replace("jour", "soir").replace(", ", "")
print(bon)
"bonsoirbonsoir"# [!code ++]
```

La fonction `replace()` va remplacer toutes les occurences de la chaine de caractère que l'on veut remplacer par la chaine de caractère que l'on veut remplacer.

## La fonction `strip()`

La fonction `strip()` permet de supprimer les caractères spécifiés dans une chaine de caractère. Elle commence par analyser la chaine de caractère par le début puis parcourt la chaine de caractère jusqu'à la fin, en supprimant les caractères spécifiés. Elle s'arrête une fois qu'elle ne trouve plus de caractères spécifiés, puis recommence à la fin de la chaine de caractère.

Exemple :
```python:line-numbers=1 {4}
chaine = " Bonjour "
chaine = chaine.strip()
print(chaine)
Bonjour# [!code ++] Retrait des espaces
chaine = " Bonjour "
chaine = chaine.strip(" ujor")
print(chaine)
Bon# [!code ++]
```

Dans l'exemple ci-dessus, le mot `Bonjour` s'est vu retiré les caractères `jour` :
La fonction `strip()` a commencé par le début, et s'est arrêté au `B` car il n'est pas un caractère spécifié.<br>
La fonction `strip()` a repris en commençant par la fin, et s'est arrêté à `n` car il n'est pas un caractère spécifié.<br>
Il nous reste donc `Bon` une fois la fonction `strip()` exécutée.

### Sélectionnr les côtés affectés par la fonction `strip()`

On retrouve également les fonctions `lstrip()` et `rstrip()` qui permettent de supprimer les caractères spécifiés à partir des côtés de la chaine de caractère.

Exemple :
```python:line-numbers=1 {4}
chaine = " Bonjour "
chaine = chaine.lstrip(" ujor")
print(chaine)
Bonjour# [!code ++]
chaine = chaine.rstrip(" ujor")
print(chaine)
Bon# [!code ++]
```

Ici, la fonction `lstrip()` a commencé par le début, et s'est arrêté au `B` car il n'est pas un caractère spécifié. En revanche, la fonction `rstrip()` a repris en commençant par la fin, et a supprimé tous les caractères spécifiés jusqu'à tomber sur un caractère qui n'est pas spécifié, ici le `n`. Il nous reste donc `Bon` une fois la fonction `rstrip()` exécutée.

<br>
<hr>

::: info Sources
Ce cours s'inspire de la documentation officielle de Python :

https://docs.python.org/3/library/functions.html
:::
