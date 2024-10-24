---
sidebar: auto
redac: true
date: 2024-08-18
---
# La gestion des erreurs


## Try & Except

Lorsqu'une erreur se produit, ou également appelée *exception*, Python s'arrête et génère un message d'erreur.
Ces exceptions peuvent être gérées grâce à l'instruction ***Try***.

```python
try:
    print(i)
except:
    print("Une erreur est survenue, la valeur demandée n'existe pas.")
```

Ici, l'exception sera notée car aucune variable "i" n'a été déclarée plus tôt.
On peut également sélectionner "la raison" pour laquelle l'exception est déclarée. <br>
Par exemple, on demande une valeur *int* à l'utilisateur, mais une valeur *str* est entrée, alors on déclare l'exception :

```python
while True:
    try:
        i = int(input("Entrer une valeur"))
        break
    except ValueError: #ValueError vérifie que l'entrée correspond à ce qui est demandé.
        print("Uniquement une valeur INT, réessayez.")
```



## Erreurs dans la déclaration d'une variable

```python
list = range(3)
list2 = range(5)
list(list2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'range' object is not callable
```

Le problème qui survient dans ce code vient du fait que 'range(3)' est assigné dans une variable qui est déjà utilisée par Python pour convertir un objet en liste (la fonction list).

Ainsi, quand on essaie de convertir la liste 'list2', avec la fonction list, l'erreur `TypeError: 'range' object is not callable` apparaît.
En écrasant le mot réservé 'list' par 'range(3)', on écrase la fonction list et quand on veut l'utiliser plus loin dans le script, Python essaie de convertir la liste 'list2' avec l'objet 'range' contenu à l'intérieur de la variable 'list' au lieu d'utiliser la fonction list.

### Noms réservés par Python

```
False               def                 if                  raise
None                del                 import              return
True                elif                in                  try
and                 else                is                  while
as                  except              lambda              with
assert              finally             nonlocal            yield
break               for                 not                 
class               from                or                  
continue            global              pass 
```

À cette liste on peut ajouter toutes les fonctions de base de Python, comme la fonction str, la fonction int, la fonction dict, la fonction print, la fonction list etc...
Il faut faire très ***attention à ne pas écraser des noms réservés*** par Python.

<br>
<hr>

::: info Sources
Ce cours s'inspire de la documentation officielle de Python :

https://docs.python.org/3/library/exceptions.html
:::