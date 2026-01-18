---
sidebar: auto
date: 2026-01-18
---

# 👨‍💻 Scripting
<ais />

## 🏗️ Structure de base d'un script Bash

### Le “shebang”

Un script Bash est un fichier texte contenant des commandes exécutées séquentiellement. La première ligne, le **shebang** (`#!`), indique l'interpréteur à utiliser. Pour un script Bash :

```bash
#!/bin/bash
```

- **Fonctionnement** : Le `#!` est suivi du chemin de l'interpréteur (`/bin/bash`). Cette syntaxe existe aussi pour d'autres langages :

```python
#!/usr/bin/python3
```

Avec le shebang, le script peut être exécuté directement après l'avoir rendu exécutable.

### 🔫 Exécuter un script Bash

Pour exécuter un script, il faut d'abord le rendre exécutable :

```bash
chmod +x mon_script.sh
```

Deux méthodes d'exécution :

- **Via Bash** : `bash mon_script.sh`
- **Directement** : `./mon_script.sh`

La première méthode utilise Bash directement, la seconde utilise l'interpréteur défini dans le shebang.

## 🔲 Les bases en Bash

### 💬 Les commentaires

Comme dans tout langage de programmation, il est possible d'ajouter des commentaires pour expliquer le code. En Bash, les commentaires commencent par le symbole `#` :

```bash
# Ceci est un commentaire en Bash
```

### 👾 Déclarer une variable

En Bash, une variable se déclare en utilisant le signe `=` sans espace autour du signe égal. Par exemple, on définit la variable `my_variable` de la façon suivante :

```bash
my_variable="hello"
```

Pour accéder à la valeur d’une variable, il convient de la précéder du symbole `$` 

```bash
echo $my_variable
```

Sans le symbole `$`, Bash ne fait pas le lien entre le nom de la variable `my_variable` et la valeur qu’elle contient (`hello`).

::: info 🔍 **Les variables en Bash**

Les variables Bash sont dynamiquement typées, ce qui signifie qu’elles ne nécessitent pas de déclaration de type spécifique. Il est alors souvent nécessaire d'utiliser une syntaxe particulière :

- **Chaînes de caractères** : par exemple, `greeting="Hello, world!"`
- **Nombres** : pour effectuer des calculs avec des variables numériques, on utilise généralement la double parenthèse `((expression))`, ce qui indique au shell que le contenu à l'intérieur est une expression arithmétique. En l’absence de cette syntaxe, Bash interpréterait les variables comme des chaînes de caractères, ce qui empêcherait les calculs arithmétiques.
:::

### ⛓️ Chaînes de caractères et guillemets

En Bash, pour affecter une phrase contenant des espaces à une variable, il est important d’utiliser des guillemets. Sinon, l'interpréteur considère chaque mot séparé par un espace comme une commande distincte.

Cette syntaxe est bonne :
```bash
phrase="Plusieurs mots entre guillemets"
```

Cette syntaxe ne l'est pas :
```bash
phrase=Plusieurs mots sans guillemets
echo $phrase
> mots: command not found
```

### 👩‍🏫 Les différents types de guillemets en Bash

Il existe trois types de guillemets en Bash : 

- Guillemets simples `'`: Tout ce qui est placé entre guillemets simples est interprété littéralement, sans évaluation des variables.

```bash
echo 'le contenu de ma variable est $my_variable' # Affiche littéralement : le contenu de ma variable est $my_variable
```

- Guillemets doubles `"` : Ils permettent d’évaluer les variables ou les expressions à l'intérieur de la chaîne.

```bash
echo "le contenu de ma variable est $my_variable" # Affiche : le contenu de ma variable est hello world
```

- Apostrophes inversées ```: Utilisées pour exécuter une commande Bash et affecter son résultat à une variable.

```bash
my_variable=`ls -l`
echo $my_variable
```

Ici, `my_variable` contiendra le résultat de la commande `ls -l`.

## 🧮 Opérations mathématiques

En Bash, les opérations mathématiques peuvent être réalisées de différentes manières. Bien que Bash ne soit pas conçu pour des calculs avancés, il permet d’effectuer des opérations simples comme l'addition, la soustraction, la multiplication, la division et l'exponentiation.

### 🌸 Utilisation de `let`

Le mot-clé `let` permet de réaliser des opérations mathématiques simples. Voici quelques exemples d'utilisation :

```bash
let "a = 5 + 3"    # Addition : a = 8
let "b = a * 2"    # Multiplication : b = 16
let "c = b - 4"    # Soustraction : c = 12
let "d = c / 2"    # Division : d = 6
let "e = 3 ** 2"   # Exponentiation : e = 9
```

Avec `let`, il est possible d'omettre les guillemets pour des expressions simples, mais leur utilisation améliore la lisibilité.

### 💠 Utilisation de `((...))`

La syntaxe `((...))` est une autre méthode très courante pour les opérations mathématiques, et elle rend souvent le code plus lisible. Contrairement à `let`, elle ne nécessite pas de guillemets et permet d'utiliser des expressions directement.

```bash
a=$((5 + 3))      # Addition : a = 8
b=$((a * 2))      # Multiplication : b = 16
c=$((b - 4))      # Soustraction : c = 12
d=$((c / 2))      # Division : d = 6
e=$((3 ** 2))     # Exponentiation : e = 9
```

Dans cette syntaxe, les variables à l'intérieur de `((...))` n’ont pas besoin d’être précédées par `$` pour être lues, mais doivent l’être lorsqu’on assigne le résultat.

### ➕ Récapitulatif des opérateurs arithmétiques

|Opération|Symbole|
|---|---|
|Addition|`+`|
|Soustraction|`-`|
|Multiplication|`*`|
|Division|`/`|
|Modulo|`%`|
|Exponentiation|`**`

### 🟰 Exemple pratique : calcul de périmètre et d'aire d'un rectangle

Voici un exemple combinant les méthodes ci-dessus pour calculer le périmètre et l'aire d’un rectangle avec une longueur de 5 et une largeur de 3 :

```bash
longueur=5
largeur=3

perimetre=$((2 * (longueur + largeur)))
aire=$((longueur * largeur))

echo "Périmètre : $perimetre"  # Affiche "Périmètre : 16"
echo "Aire : $aire"            # Affiche "Aire : 15"
```

::: info 🔍 **Opérations avec `expr`**

`expr` est un outil plus ancien, mais il reste utile pour des opérations simples et rapides. Notez que chaque opérande doit être séparé par un espace, et l’utilisation de l'anti-slash `\` est nécessaire pour l'opérateur multiplication `*`

```bash
a=$(expr 5 + 3) # Addition : a = 8 
b=$(expr $a \* 2) # Multiplication : b = 16 
c=$(expr $b - 4) # Soustraction : c = 12 
d=$(expr $c / 2) # Division : d = 6 echo $a $b $c $d
```
:::

### 🤵🏻 Conseils de bonnes pratiques

1. **Utiliser `((...))`** pour des calculs simples et rapides, car la syntaxe est plus lisible et compacte. 

2. **Éviter `expr`** dans les nouveaux scripts, car c'est une syntaxe plus ancienne. 

3. **Penser aux espaces dans les expressions** : avec `let` et `expr`, chaque opérateur et opérande doit être séparé par un espace pour éviter les erreurs.

## 🖼️ Tableaux

En Bash, les tableaux (*arrays*) permettent de stocker plusieurs valeurs dans une seule variable, chaque élément étant accessible via un index. Cela s’avère pratique pour manipuler des listes de données.

### 📅 Déclaration d’un tableau

Un tableau est déclaré en assignant des valeurs entre parenthèses, séparées par des espaces :

```bash
my_array=(hello world)
```

Représente concrètement :

|my_array|0|1|
|---|---|---|
|Valeurs|hello|world|


### 📱 Accès aux éléments d’un tableau

Pour accéder à une valeur spécifique du tableau, on utilise la syntaxe `${my_array[index]}`, en gardant à l’esprit que l’indexation commence à `0`.

```bash
echo ${my_array[0]}  # Affiche "hello"
echo ${my_array[1]}  # Affiche "world"
```

### ✔️ Modification des éléments d’un tableau

Pour modifier une valeur à un indice donné, il suffit de réaffecter une nouvelle valeur à cet indice :

```bash
my_array[0]="Hi"
echo ${my_array[0]}  # Affiche "Hi"
```

### 👁️‍🗨️ Affichage de tous les éléments du tableau

Pour afficher tout le contenu du tableau, on utilise `*` ou `@` à la place de l’indice :

```bash
echo ${my_array[@]}  # Affiche "Hi world"
echo ${my_array[*]}  # Affiche "Hi world"
```

### ➕ Ajout d’éléments à un tableau

Pour ajouter de nouveaux éléments, on les assigne à des indices qui ne sont pas encore utilisés. L’indexation des éléments dans un tableau Bash peut être discontinue :

```bash
my_array[2]=or
my_array[3]=hello
my_array[4]=world
echo ${my_array[*]}  # Affiche "Hi world or hello world"
```

À noter que Bash permet des indices non consécutifs, bien qu'il soit préférable de garder des index ordonnés pour faciliter la gestion.

### 🔢 Taille du tableau et index des éléments

Bash fournit des opérations pour obtenir des informations sur le tableau. Pour obtenir tous les indices utilisés dans le tableau, on utilise `${!my_array[*]}` :

```bash
    echo ${!my_array[*]}  # Affiche les indices : 0 1 2 3 4
```

**Nombre d'éléments** : pour obtenir le nombre total d'éléments du tableau, utilisez `${#my_array[*]}` :

```bash
 echo ${#my_array[*]}  # Affiche "5"
```

## ➰ Boucles et conditions

Les boucles et conditions permettent de contrôler le déroulement d'un script en fonction de certaines conditions ou d'exécuter des actions de manière répétée. Elles sont essentielles pour automatiser des tâches et adapter le comportement d'un script en fonction des besoins.

### 💢 Conditions avec `if` / `then` / `else`

Les structures conditionnelles `if`, `then`, `elif`, et `else` permettent d'exécuter du code en fonction d'une condition. 

Exemple de base avec une condition simple :

```bash
prenom="Thomas"
if [ "$prenom" = "Thomas" ]
then
    echo "Salut Thomas !"
fi
```

Pour ajouter une instruction `else`, la syntaxe est la suivante :

```bash
prenom="Jade"
if [ "$prenom" = "Thomas" ]
then
    echo "Salut Thomas !"
else
    echo "Bonjour $prenom !"
fi
```

Pour vérifier plusieurs cas, on enchaîne les conditions avec `elif`:

```bash
prenom="Justine"
if [ "$prenom" = "Thomas" ]
then
    echo "Salut Thomas !"
elif [ "$prenom" = "Justine" ]
then
    echo "Salut Justine !"
else
    echo "Bonjour $prenom !"
fi

```

### 🆚 Principaux opérateurs de comparaison

Les conditions peuvent inclure divers opérateurs :

- **Chaînes de caractères** :
    - `[ "$var1" = "$var2" ]` : égalité
    - `[ "$var1" != "$var2" ]` : inégalité
    - `[ -z "$variable" ]` : chaîne vide
    - `[ -n "$variable" ]` : chaîne non vide
- **Valeurs numériques** :
    - `[ "$var1" -eq "$var2" ]` : égalité (`ne` pour l'inégalité)
    - `[ "$var1" -gt "$var2" ]` : `var1` est supérieur à `var2` (`lt` pour inférieur)
    - `[ "$var1" -ge "$var2" ]` : `var1` est supérieur ou égal (`le` pour inférieur ou égal)

Pour combiner deux conditions, on utilise `&&` *(ET)* lorsque les deux conditions doivent être vérifiées ou `||` *(OU)* si au moins une des deux conditions doit l'être.

```bash
prenom="Justine"
nom="RootDev"
if [ "$prenom" = "Justine" ] && [ "$nom" = "RootDev" ]
then
    echo "Bonjour Justine de RootDev !"
else
    echo "Bonjour $prenom $nom"
fi
```

### ⚪ Boucle while

Les boucles `while`exécutent des instructions tant qu'une condition reste vraie. Exemple :

```bash
i=0
while [ "$i" -lt 10 ]
do
    echo "Itération $i"
    i=$((i + 1))
done

```

### 🔴 Boucle for

Les boucles `for` permettent d'itérer sur une série de valeurs ou une séquence numérique. 

Boucle `for` avec une liste :

```bash
for x in "1ère itération" "2e itération" "3e itération"
do
    echo "$x"
done
```

Pour générer une séquence de nombres, il est possible d'utiliser `seq` :

```bash
for i in $(seq 1 5)
do
    echo "Itération $i"
done
```

Cette commande imprime les valeurs de 1 à 5, permettant de boucler sur une suite d’entiers définie.

## 🧠 Fonctions

Les fonctions en Bash permettent de regrouper du code réutilisable en définissant des blocs d’instructions qui peuvent être appelés à tout moment dans le script. Elles sont particulièrement utiles pour organiser et simplifier le code. Il existe deux façons de définir une fonction : deux syntaxes sont possibles pour déclarer une fonction :

```bash
my_function () {
    echo "Blocs d'instructions de la fonction"
}
```

ou

```bash
function my_function {
    echo "Blocs d'instructions de la fonction"
}
```

### 💬 Utilisation des Arguments

Les arguments passés à une fonction sont accessibles selon leur position avec `$1`, `$2`, etc. Le `$1` représente le premier argument, `$2` le deuxième, et ainsi de suite. Voici un exemple de fonction qui affiche les deux premiers arguments :

```bash
function afficher_arguments {
    echo "Premier argument : $1"
    echo "Second argument : $2"
}
```

### 🤳 Appeler une Fonction

Pour exécuter une fonction, il suffit d'appeler son nom dans le script, suivi éventuellement des arguments à lui passer :

```bash
afficher_arguments "Bonjour" "le monde"
> Premier argument : Bonjour
> Second argument : le monde
```

## 🤸 JQ

`JQ` est un outil en ligne de commande qui permet de manipuler et transformer des données **JSON**. Simple et flexible, il aide les développeurs et analystes à explorer et traiter les données **JSON**.

Utilisant une approche par pipes et filtres, JQ s'intègre facilement avec d'autres outils et offre des fonctionnalités avancées pour la gestion des tableaux, chaînes et opérations arithmétiques.

Pour installer JQ:

```bash
sudo apt update
sudo apt install jq
```

### Les filtres

Les filtres permettent d'accéder aux champs d'un objet JSON. Pour afficher le contenu d'un document, on utilise la commande :

```bash
cat people.json | jq .
```

Le `.` est l'opérateur d'identité qui affiche l'objet tel quel. Exemple de sortie :

```json
[
  {
    "name": "Luke Skywalker",
    "birth_year": "19BBY",
    "eye_color": "blue",
    "gender": "male",
    "height": "172"
  }
]
```

Ce fichier contient un tableau de documents. Pour le traiter, il faut utiliser le filtre `[]` qui permet de parcourir les éléments du tableau.

Le slicing est également possible avec `jq`, comme en Python.

Les filtres sont utilisés pour accéder à un champ spécifique dans un objet

> Pour afficher les 5 premiers documents présents dans le fichier :
>
> `cat people.json | jq .[0:5]`

### La virgule

La `,` permet d'enchaîner plusieurs filtres sur l'entrée standard.

```bash
cat people.json | jq '.[].name, .[].height'
```

Cette commande affiche tous les noms puis toutes les tailles du fichier.

### Le pipe

Le `|` permet de passer la sortie d'une commande vers un autre filtre.

```bash
cat people.json | jq '.[] | .birth_year'
```

### Les constructeurs

`JQ` permet de créer des tableaux ou documents pour stocker les résultats d'une requête, créant ainsi de nouveaux documents sans modifier l'original.

Exemple avec un tableau :

```bash
cat people.json | jq .[] | jq '[.name, .birth_year, .mass, .height]'
```

Exemple avec un document (utilisant `{}`) :

```bash
cat people.json | jq .[] | jq '{name, height, films: .films[]}'
```

Pour les champs de premier niveau, on spécifie simplement leur nom. Pour les tableaux, on définit le nouveau nom et sa valeur, en ajoutant `[]` après le nom du champ.

> Pour construire un document composé des 10 premiers personnages et contenant les champs suivants: {name, birth_year, mass, height, species, details: [homeworld, vehicles, starships]}
> 
> `cat people.json | jq '.[:10] | .[] | {name, birth_year, mass, species: .species[], details: [.homeworld, .vehicles, .starships[]]}'`

### Opérateurs et fonctions intégrées

`JQ` dispose d'opérateurs mathématiques (`addition`, `soustraction`, `multiplication`, `division`) pour manipuler scalaires et documents.

### Addition

L'opérateur + fonctionne différemment selon le type :

- Pour les `nombres` : addition classique

```bash
cat people.json | jq '.[0].id + .[1].id'
```

- Pour les `tableaux` : concaténation

```bash
cat people.json | jq '.[0].species + .[1].species'
```

- Pour les `strings` : concaténation

```bash
cat people.json | jq '.[0].name + .[1].name'
```

- Pour les `documents` : jointure (valeur de droite prioritaire)

```bash
cat people.json | jq '.[] | {name, birth_year, mass} + {name, height}'
```

### Soustraction

Permet de soustraire des nombres ou retirer des éléments d'un tableau.

```bash
cat people.json | jq '.[0].films - ["http://swapi.co/api/films/6/", "http://swapi.co/api/films/7/"]'
```

### Multiplication

Multiplie des nombres ou répète des chaînes.

```bash
cat people.json | jq '.[10].id * 15'
cat people.json | jq '.[0].name * 3'
```

Résultat :

```bash
165
"Luke SkywalkerLuke SkywalkerLuke Skywalker"
```

### Division

Divise des nombres ou découpe des chaînes avec un séparateur.

```bash
cat people.json | jq '.[0].name / "e"'
```

Résultat :

```bash
[
  "Luk",
  " Skywalk",
  "r"
]
```

### Fonction intégrée Group By

La fonction `group_by` regroupe les documents ayant la même clé dans des tableaux distincts.

```bash
cat people.json | jq 'group_by(.eye_color)'
```

Cette commande crée des groupes basés sur l'attribut `eye_color`. Pour compter les occurrences par couleur :

```bash
cat people.json | jq 'group_by(.eye_color)[] | {gender: .[0].eye_color, count: length}'
```

Exemple de sortie :

```bash
{
  "eye_color": "black",
  "count": 10
}
{
  "eye_color": "blue",
  "count": 19
}
{
  "eye_color": "brown",
  "count": 20
}
```

La fonction `length` compte le nombre d'éléments dans chaque groupe. Le `.[0]` permet d'extraire un seul représentant par groupe. Sans le `0`, on obtient des doublons pour chaque couleur.

JQ offre de nombreuses autres fonctions pour manipuler les données JSON, ce qui en fait un outil puissant pour les pipelines ETL *(Extraction, Transformation et Chargement)*.