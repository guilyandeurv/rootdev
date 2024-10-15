---
sidebar: auto
---

# Introduction au langage C

## Hello World !

En **C**, on utilise la fonction `printf()` pour afficher du texte à l'écran. Tout ce qui se trouve entre les guillemets "" sera affiché. Le caractère \n permet de faire un retour à la ligne.

```C
#include <stdio.h>

int main()
{
    printf("Hello World !\n");
    return 0;
}
```
`#include <stdio.h>` : Cette ligne importe le fichier `stdio.h` qui contient les fonctions de base de la bibliothèque standard de C.

`main()` : la fonction principale de l'application. Elle est appelée lorsque l'exécutable est lancé.

## Opérateurs mathématiques

|Opérateur|Syntaxe|Exemple|
|-|-|-|
|Addition|`+`|1 + 1 = 2|
|Soustraction|`-`|2 - 1 = 1|
|Multiplication|`*`|2 * 2 = 4|
|Division|`/`|10 / 2 = 5|
|Modulo|`%`|10 % 2 = 0|
|Exposant|`**`|5 ** 2 = 25 (5²)|

Exemple, calcul du volume d'une sphère :

La formule étant (4π/3) × rayon³, on va procéder de telle manière :

```C
#include <stdio.h>
#include <math.h>

int main() {
    float rayon = 10.0;
    float volume = (4.0 * M_PI / 3.0) * pow(rayon, 3);
    printf("Le volume de la sphère est : %.2f\n", volume);
    return 0;
}
```

L'import du module `math.h` permet d'obtenir une valeur précise de pi.
Le symbole `*` permet de multiplier. Le symbole pour la division est la barre oblique `/`. La fonction `pow()` permet de calculer la puissance.

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
|Les deux conditions doivent être vraies pour que la déclaration soit vraie|`&&`|
|Une seule condition de la déclaration doit être vraie|`||`|
|Si une condition est l'opposé d'un argument|`!`|

## Types de variable


### Types entiers

`char` : caractère (8 bits)

`short` : entier court (16 bits)

`int` : entier (16 ou 32 bits, selon la plateforme)

`long` : entier long (32 bits)

`long long` : entier très long (64 bits)

### Types flottants

`float` : nombre flottant (32 bits)

`double` : nombre flottant double précision (64 bits)

`long double` : nombre flottant très grande précision (80 ou 128 bits, selon la plateforme)

### Types booléens

`_Bool` : booléen (1 bit)

### Types de pointeurs

`void` : pointeur vide (peut pointer vers n'importe quel type de données)

`char` : pointeur vers un caractère

`int` : pointeur vers un entier

`float` : pointeur vers un nombre flottant

`double` : pointeur vers un nombre flottant double précision

`struct` : pointeur vers une structure

`union` : pointeur vers une union

### Types de structures

`struct` : structure (peut contenir plusieurs variables de types différents)

### Types de unions

`union` : union (peut contenir plusieurs variables de types différents, mais ne peut en contenir qu'une seule à la fois)

### Types de tableaux

`array` : tableau (peut contenir plusieurs variables du même type)

### Types de fonctions

`function` : fonction (peut prendre des arguments et retourner une valeur)

### Types de enums

`enum` : énumération (peut contenir plusieurs valeurs constantes)

## Les variables

En C, les variables sont déclarées avec un type de données spécifique. Voici quelques types de base :

`int` : entiers

`float` : nombres flottants

`double` : nombres flottants double précision

`char` : caractères

Voici un exemple de déclaration et d'utilisation de variables :

```C
#include <stdio.h>

int main() {
    char marque[] = "Yamaha";
    int prix = 5000;
    printf("La marque est %s et le prix est %d\n", marque, prix);
    prix = prix + 5;
    printf("Le nouveau prix est %d\n", prix);
    return 0;
}
```

Ici, nous avons déclaré une variable marque de type `char[]` (tableau de caractères) et une variable prix de type `int`. Nous les avons ensuite affichées avec `printf()`.

Pour concaténer des variables dans un `printf()`, on utilise les spécificateurs de format `%s` pour les chaînes de caractères et `%d` pour les entiers.

## Les tableaux

En **C**, les tableaux sont déclarés avec une taille fixe, tel que sur l'exemple suivant :

```C
#include <stdio.h>

int main() {
    int tableau[5] = {1, 2, 3, 4, 5};
    printf("Le tableau contient les valeurs suivantes : %d, %d, %d, %d, %d\n", tableau[0], tableau[1], tableau[2], tableau[3], tableau[4]);
    return 0;
}
```

Autre exemple, avec une taille variable, et en parcourant les éléments avec une boucle `for` :

```C
#include <stdio.h>

int main() {
    int taille;
    printf("Entrez la taille du tableau : ");
    scanf("%d", &taille); /* On utilise scanf() pour demander à l'utilisateur de saisir une valeur */
    int tableau[taille]; /* On déclare un tableau de taille variable */
    for (int i = 0; i < taille; i++) { /* On parcourt le tableau avec une boucle for */
        printf("Entrez la valeur %d : ", i + 1); /* On demande à l'utilisateur de saisir la valeur du tableau */
        scanf("%d", &tableau[i]); /* On utilise scanf() pour demander à l'utilisateur de saisir une valeur */
    }
    printf("Le tableau contient les valeurs suivantes : "); 
    for (int i = 0; i < taille; i++) { /* On parcourt le tableau avec une boucle for */
        printf("%d, ", tableau[i]); /* On affiche chaque valeur du tableau */
    }
    return 0;
}
```

Ici, nous avons déclaré un tableau de taille variable, et nous avons ensuite demandé à l'utilisateur de saisir la taille du tableau. Avec la boucle `for` on a ensuite parcouru le tableau et on a demandé à l'utilisateur de saisir chaque valeur du tableau, qui sont ensuite affichées une par une.

## Les conditions

Avec le langage C, on utilise les instructions `if`, `else` et `else if` pour implémenter des conditions.

```C
#include <stdio.h>

int main() {
    int portefeuille = 1000;
    int prix = 2000;
    if (portefeuille < prix) {
        printf("Vous n'avez pas assez d'argent\n");
    } else {
        printf("Vous avez assez d'argent\n");
    }
    return 0;
}
```

Ici, **si** l'argent dans mon portefeuille est ***inférieur au prix***, alors je ne peux pas acheter le produit. **Sinon**, je peux acheter le produit.

## Les boucles

En C, on utilise les boucles `for` et `while` pour itérer sur des éléments.

### La boucle `while`

```C
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 10) {
        printf("%d\n", i);
        i = i + 1;
    }
    return 0;
}
```

Ici, `i` est égal à **1**. ***Tant que*** `i` n'est pas égal à **10**, alors, `printf` de `i` et `i + 1`.

### La boucle `for`

Une boucle `for` est utilisée pour itérer sur une séquence telle qu’une liste. 

```C
#include <stdio.h>

int main() {
    int siteweb[] = {"rootdev.fr", "tryhackme.com", "udemy.com"};
    for (int i = 0; i < 3; i++) {
        printf("%s\n", siteweb[i]);
    }
    return 0;
}
```

Ici, `siteweb` est une liste comprenant les valeurs *rootdev.fr*, *tryhackme.fr* et *udemy.fr*. ***Pour chaque*** élément *(site)*, `printf` l'élement.

## Les structures

Les **structures** ou "*Structs*" sont des types de données définis par l'utilisateur qui permettent de regrouper des éléments de données liés de différents types de données en une seule unité. Les **structures** peuvent être utilisées pour stocker des données liées à un objet particulier. Elles aident à organiser de grandes quantités de données connexes de manière à ce qu'elles soient facilement accessibles et manipulables. Chaque élément au sein d'une structure est appelé un "***membre***" ou "***élément***".

Une occurrence courante lorsqu'il travaille avec l'API Windows est que certaines API nécessitent une structure peuplée en entrée, tandis que d'autres prendront une structure déclarée et la rempliront. Voici un exemple de la structure THREADENTRY32, qui décrit une entrée d’une liste des threads qui s’exécutent dans le système lorsqu’une instantané a été prise.

```c
typedef struct tagTHREADENTRY32 {
  DWORD dwSize;       // Membre 1
  DWORD cntUsage;     // Membre 2
  DWORD th32ThreadID;
  DWORD th32OwnerProcessID;
  LONG  tpBasePri;
  LONG  tpDeltaPri;
  DWORD dwFlags;
} THREADENTRY32;
```

### Déclaration d'une structure

Les structures utilisées dans ce cours sont généralement déclarées avec l'utilisation du mot-clé `typedef` pour donner un alias à une structure. Par exemple, la structure ci-dessous est créée avec le nom `_STRUCTURE_NAME` mais `typedef` ajoute deux autres noms, `STRUCTURE_NAME` et `*PSTRUCTURE_NAME`.

```c
typedef struct _STRUCTURE_NAME {
  // éléments de la structure
} STRUCTURE_NAME, *PSTRUCTURE_NAME;
```

L'alias `STRUCTURE_NAME` fait référence au nom de la structure, tandis que `*PSTRUCTURE_NAME` représente un pointeur vers cette structure. Microsoft utilise généralement le préfixe P pour indiquer un type de pointeur.

### Initialisation d'une structure

L'initialisation d'une structure varie en fonction du fait que l'on initialise le type de structure réel ou un pointeur vers la structure. En reprenant l'exemple précédent, initialiser une structure est identique lors de l'utilisation de `_STRUCTURE_NAME` ou `STRUCTURE_NAME`, comme illustré ci-dessous.

```c
STRUCTURE_NAME struct1 = { 0 };  // Le '{ 0 }' est utilisé pour initialiser tous les éléments de struct1 à zéro
// OU
struct _STRUCTURE_NAME struct2 = { 0 };  // Le '{ 0 }' est utilisé pour initialiser tous les éléments de struct2 à zéro
```
Ceci est différent lors de l'initialisation du pointeur de la structure, `PSTRUCTURE_NAME`.

```C
PSTRUCTURE_NAME structpointer = NULL;
```

### Initialisation et accès aux membres des structures

Les membres d'une structure peuvent être initialisés soit directement par la structure, soit indirectement par un pointeur vers la structure. Dans l'exemple ci-dessous, la structure `struct1` a deux membres, `ID` et `Age`, initialisés directement via l'opérateur point `.`.

```C
typedef struct _STRUCTURE_NAME {
  int ID;
  int Age;
} STRUCTURE_NAME, *PSTRUCTURE_NAME;

STRUCTURE_NAME struct1 = { 0 }; // initialiser tous les éléments de struct1 à zéro
struct1.ID = 1470;   // initialiser l'élément ID
struct1.Age = 34;    // initialiser l'élément Age
```

Une autre façon d'initialiser les membres est d'utiliser la syntaxe d'initialisation désignée où l'on peut spécifier quels membres de la structure initialiser :

```C
typedef struct _STRUCTURE_NAME {
  int ID;
  int Age;
} STRUCTURE_NAME, *PSTRUCTURE_NAME;

STRUCTURE_NAME struct1 = { .ID = 1470, .Age = 34}; // initialiser à la fois les éléments ID et Age
```

D'un autre côté, accéder et initialiser une structure via son pointeur se fait via l'opérateur flèche `->` :

```C
typedef struct _STRUCTURE_NAME {
  int ID;
  int Age;
} STRUCTURE_NAME, *PSTRUCTURE_NAME;

STRUCTURE_NAME struct1 = { .ID = 1470, .Age = 34};
PSTRUCTURE_NAME structpointer = &struct1; // structpointer est un pointeur vers la structure 'struct1'
// Mise à jour du membre ID
structpointer->ID = 8765;
printf("Le membre ID de la structure est maintenant : %d \n", structpointer->ID);
```

L'opérateur flèche peut être converti en format point. Par exemple, `structpointer->ID` est équivalent à `(*structpointer).ID.` C'est-à-dire que `structurepointer` est déréférencé puis accédé directement.

## Énumération (***enum***)

### Définition et syntaxe

Un `enum` ou énumération en ***C*** est un type de données défini par l'utilisateur qui consiste en un ensemble de constantes nommées. Pour créer une énumération, on utilise le mot-clé `enum` suivi du nom de l'énumération et d'une liste d'identifiants, chacun représentant une constante nommée, exemple :

```C
enum Jours {
  Lundi,        // 0
  Mardi,        // 1
  Mercredi,     // 2
  Jeudi,        // 3
  Vendredi,     // 4
  Samedi,       // 5
  Dimanche      // 6
};
```

### Valeurs par défaut et valeurs personnalisées

Par défaut, le compilateur attribue des valeurs aux constantes en commençant à **0** et en incrémentant de **1** pour chaque constante suivante. Cependant, on peut également attribuer des valeurs personnalisées aux constantes lors de la déclaration :

```C
enum Jours {
  Lundi = 1,
  Mardi,
  Mercredi = 10,
  Jeudi,
  Vendredi = 20,
  Samedi,
  Dimanche
};
```

Dans cet exemple, Lundi vaut 1, Mardi vaut 2, Mercredi vaut 10, Jeudi vaut 11, Vendredi vaut 20, Samedi vaut 21 et Dimanche vaut 22.

### Utilisation

Les énumérations peuvent être utilisées pour rendre le code plus lisible et maintenable. Voici un exemple de définition d'une variable d'énumération et de son utilisation dans une instruction switch :

```C
#include <stdio.h>

enum Jours {
  Lundi,        // 0
  Mardi,        // 1
  Mercredi,     // 2
  Jeudi,        // 3
  Vendredi,     // 4
  Samedi,       // 5
  Dimanche      // 6
};

int main() {
    enum Jours jour = Vendredi;
    switch (jour) {
        case Lundi:
            printf("Aujourd'hui c'est Lundi !\n");
            break;
        case Mardi:
            printf("Aujourd'hui c'est Mardi !\n");
            break;
        case Mercredi:
            printf("Aujourd'hui c'est Mercredi !\n");
            break;
        case Jeudi:
            printf("Aujourd'hui c'est Jeudi !\n");
            break;
        case Vendredi:
            printf("Aujourd'hui c'est Vendredi !\n");
            break;
        case Samedi:
            printf("Aujourd'hui c'est Samedi !\n");
            break;
        case Dimanche:
            printf("Aujourd'hui c'est Dimanche !\n");
            break;
        default:
            break;
    }
    return 0;
}
```

### Pourquoi utiliser les énumérations ?

Les énumérations sont utiles lorsqu'on veut qu'une variable n'ait que des valeurs spécifiques. Elles sont souvent utilisées pour des constantes comme les jours de la semaine, les mois, les directions ou tout ensemble de valeurs distinctes qui ne changent pas. Les énumérations peuvent également être utilisées dans des instructions `switch-case` pour s'assurer que seules des valeurs valides sont utilisées.

Voici un exemple où des valeurs personnalisées sont attribuées aux éléments d'une énumération :

```C
#include <stdio.h>

enum contenants {
  cont1 = 5,
  cont2 = 7,
  cont3 = 3,
  cont4 = 8
};

int main() {
    enum contenants cont_actuel = cont2;
    printf("La valeur de cont2 est = %d \n", cont_actuel);
    cont_actuel = cont3;
    printf("La valeur de cont3 est = %d \n", cont_actuel);
    cont_actuel = cont1;
    printf("La valeur de cont1 est = %d \n", cont_actuel);
    return 0;
}
```

Ici, la variable `cont_actuel` est déclarée avec le type `enum contenants`. La valeur de `cont_actuel` est initialisée à `cont2` et est ensuite modifiée à `cont3` et enfin à `cont1`.

Les valeurs de cont2, cont3 et cont1 sont affichées, démontrant comment les valeurs personnalisées peuvent être attribuées et récupérées.

### Utilisation des énumérations pour les drapeaux

Les énumérations peuvent également être utilisées pour définir des drapeaux, où chaque constante est une puissance de 2. Cela permet de combiner plusieurs drapeaux à l'aide de l'opérateur binaire `OU` sans se chevaucher :

```C
#include <stdio.h>

enum flagsDesign {
  GRAS = 1,
  ITALIQUE = 2,
  SOULIGNE = 4
};

int main() {
    int monDesign = GRAS | SOULIGNE;
    printf("%d", monDesign); // Sortie : 5
    return 0;
}
```

Dans cet exemple, les drapeaux `GRAS` et `SOULIGNE` sont combinés à l'aide de l'opérateur binaire `OU`, donnant un résultat de `5`.

En utilisant les énumérations, on peut rendre son code plus lisible, maintenable et efficace, notamment lorsqu'on traite avec des ensembles de constantes nommées ou de drapeaux.

## L'union

Dans le langage de programmation **C**, une ***Union*** est un type de données qui permet le stockage de différents types de données au même emplacement mémoire. Les unions offrent un moyen efficace d'utiliser un seul emplacement mémoire à des fins multiples. Bien qu'elles ne soient pas couramment utilisées, on peut les voir dans certaines structures définies par Windows.

### Définition d'une union

Voici comment on définit une union en C :

```C
union ExempleUnion {
   int    VariableEntiere;
   char   VariableCaractere;
   float  VariableFlottante;
};
```

Cette `ExempleUnion` peut stocker des types de données `char`, `int` et `float` au même emplacement mémoire.

### Accès aux membres d'une union

Pour accéder aux membres d'une union en C, on utilise l'opérateur point `.`, de manière similaire à ce qui est utilisé pour les structures.

```C
union ExempleUnion monUnion;
monUnion.VariableEntiere = 10;
printf("%d", monUnion.VariableEntiere);
```

### Caractéristiques importantes des unions

* **Partage de mémoire** : Dans une union, l'affectation d'une nouvelle valeur à n'importe quel membre changera la valeur de tous les autres membres, car ils partagent le même emplacement mémoire pour stocker leurs données.

* **Taille de l'union** : La mémoire allouée pour une union est égale à la taille de son plus grand membre.

* **Utilisation de la mémoire** : Les unions permettent d'économiser de la mémoire lorsqu'on a besoin de stocker différents types de données, mais pas simultanément.

Exemple d'utilisation :

```C
#include <stdio.h>

union ExempleUnion {
   int    VariableEntiere;
   char   VariableCaractere;
   float  VariableFlottante;
};

int main() {
    union ExempleUnion monUnion;

    monUnion.VariableEntiere = 42;
    printf("VariableEntiere : %d\n", monUnion.VariableEntiere);
    VariableEntiere : 42 // [!code ++]
    monUnion.VariableFlottante = 3.14;
    printf("VariableFlottante : %f\n", monUnion.VariableFlottante);
    printf("VariableEntiere (après affectation de VariableFlottante) : %d\n", monUnion.VariableEntiere);
    VariableFlottante : 3.140000 // [!code ++]
    VariableEntiere (après affectation de VariableFlottante) : 1078523331 // [!code ++]
    return 0;
}
```

Dans cet exemple, on peut voir comment l'affectation d'une valeur à `VariableFlottante` modifie également la valeur de `VariableEntiere`, car elles partagent le même emplacement mémoire.

Les unions sont particulièrement utiles lorsqu'on a besoin de stocker différents types de données à différents moments, mais qu'on veut économiser de l'espace mémoire en ne réservant qu'un seul emplacement pour toutes ces données.

## Les opérateurs de décalage

Les opérateurs de décalage permettent de déplacer les bits d'un nombre de bits donné d'un emplacement à un autre. Ils sont utilisés pour effectuer des manipulations de bits sur des variables numériques.

### Les opérateurs de décalage de bits

* **`>>`** : Décalage de bits vers la droite.
* **`<<`** : Décalage de bits vers la gauche.
* **`&`** : Bitwise AND.
* **`|`** : Bitwise OR.
* **`^`** : Bitwise XOR.
* **`~`** : Bitwise NOT.

::: info Sources
Ce cours s'inspire d'Openclassrooms 'Apprendre à programmer en C' :
https://openclassrooms.com/fr/courses/19980-apprenez-a-programmer-en-c
:::



