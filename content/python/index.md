---
sidebar: auto
---
# Introduction à Python
<Badge type="tip" text="Rédigé le 02/04/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Hello World !

```python:line-numbers=1
print("Hello World !")
```
On peut contrôler ce qui est affiché à l'écran en utilisant l'instruction  `print()`. Tout ce qui se trouve entre parenthèses `()` sera affiché. Cependant, comme on imprime une chaîne, on doit les mettre entre guillemets `""`.

## Opérateurs mathématiques

|Opérateur|Syntaxe|Exemple|
|-|-|-|
|Addition|`+`|1 + 1 = 2|
|Soustraction|`-`|2 - 1 = 1|
|Multiplication|`*`|2 * 2 = 4|
|Division|`/`|10 / 2 = 5|
|Modulo|`%`|10 % 2 = 0|
|Exposant|`**`|5 ** 2 = 25 (5²)|

## Opérateurs de comparaison

|Opérateur|Syntaxe|
|-|-|
|Plus grand que|`>`|
|Plus petit que|`<`|
|Égal à|`==`|
|Différent de|`!=`|
|Plus grand ou égal à|`>=`|
|Plus petit ou égal à|`<=`|

## Opérateurs booléens

|Opérateur|Syntaxe|
|-|-|
|Les deux conditions doivent être vraies pour que la déclaration soit vraie|`AND`|
|Une seule condition de la déclaration doit être vraie|`OR`|
|Si une condition est l'opposé d'un argument|`NOT`|

## Variables

Les variables permettent de stocker et de mettre à jour des données dans un programme informatique. Il s'agit d'une valeur stockée sous un nom :

```python:line-numbers=1
marque = "Yamaha"
prix = 5000
```
Ici nous avons **délcaré** la variable `marque` sous la valeur `"Yamaha"`, qui est une chaine de caractère (*string*), ainsi que la variabl `prix` sous la valeur `5000`, qui est un entier (*int*).

Les valeurs de celles-ci peuvent être modifiées à tout moment lors du programme, comme l'exemple si dessous :
```python:line-numbers=1 {4}
prix = 5000
prix = prix + 5
print(prix)
5005
```

## Types de données

1. ***Chaîne de caractère*** (String) : utilisée pour les combinaisons de caractères, tels que des lettres ou des symboles.
2. ***Entier*** (Integer) : Nombres entiers
3. ***Float*** : Nombres contenant des points décimaux ou pour des fractions
4. ***Booléen*** : Utilisé pour les données limitées aux options `Vrai` ou `Faux`
5. ***Liste*** : Série de différents types de données stockés dans une collection

![Exemples types](./img/types.png)

## Les instructions

L'utilisation des instructions `if`, `elif` et `else` permettent aux programmes de prendre des décisions.

```python:line-numbers=1
portefeuille = 1000
prix = 2000
if portefeuille < prix :
    print("Vous n'avez pas assez d'argent")
else :
    print("Vous avez assez d'argent")
```

Ici, **si** l'argent dans mon **portefeuille** est **inférieur** au **prix**, alors que je ne peux pas acheter le produit. **Sinon**, je peux acheter le produit.

## Les boucles

En programmation, les boucles permettent aux programmes d’itérer et d’effectuer des actions un certain nombre de fois. Il existe deux types de boucles : `for` et `while`.

### La boucle While

```python:line-numbers=1
i = 1
while i <= 10:
    print(i)
    i = i + 1
```

Ici, `i` est égal à **1**. ***Tant que*** `i` n'est pas égal à **10**, alors, `print` de `i` et `i + 1`.

### La boucle For

Une boucle for est utilisée pour itérer sur une séquence telle qu’une liste. 

```python:line-numbers=1
siteweb = ["rootdev.fr", "tryhackme.com", "udemy.com"]
for site in siteweb:
    print(site)
```

Ici, `siteweb` est une liste comprenant les valeurs *rootdev.fr*, *tryhackme.fr* et *udemy.com*. ***Pour chaque*** élément *(site)*, `print` l'élement.

En Python, on peut également itérer sur une plage de nombres à l’aide de la fonction `range`. Ci-dessous un exemple de code Python qui affichera les nombres de 0 à 4. En programmation, 0 est souvent le nombre de départ.

```python:line-numbers=1
for i in range(5):
    print(i)
```





<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Python basics*" :

https://tryhackme.com/r/room/pythonbasics <Badge type="tip" text="Gratuit" />
:::
