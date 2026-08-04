---
sidebar: auto
date: 2025-12-28
redac: true
---

# <RdIcon name="milestone" /> Introduction à Rust

Rust est un langage de programmation système moderne conçu avec un accent sur les performances, la sécurité mémoire et la concurrence. Il permet aux développeurs de créer des logiciels fiables et efficaces, des systèmes d'exploitation aux applications web.

## <RdIcon name="sparkles" /> Hello World !

Le *"Hello World!"* est un programme simple qui affiche Hello World! sur l'écran.

En Rust, nous utilisons la macro `println!()` pour imprimer la sortie sur la console. Le texte à imprimer est placé entre guillemets doubles et entouré de parenthèses.

Regardons le programme "Hello World!" en Rust :

```rust
fn main() {
    println!("Hello World!");
}
```

## <RdIcon name="message-square" /> Commentaires

Les commentaires sont des lignes dans le code qui sont ignorées par le compilateur. Ils sont utilisés pour expliquer le code et le rendre plus lisible. En Rust, les commentaires commencent par deux barres obliques `//`.

Il existe deux types de commentaires en Rust :

* Commentaires sur une seule ligne : Ces commentaires commencent par `//` et se poursuivent jusqu'à la fin de la ligne.
* Commentaires sur plusieurs lignes : Ces commentaires commencent par `/*` et se terminent par `*/`. Ils peuvent s'étendre sur plusieurs lignes.

Voici un exemple de commentaires sur une seule ligne :

```rust
fn main() {
    // Un commentaire sur une seule ligne
    println!("Hello, world!"); // Un commentaire précédé par une ligne de code
}
```

Voici un exemple de commentaires sur plusieurs lignes :

```rust
fn main() {
    /*
    Commentaire sur plusieurs lignes.
    Pratique notamment pour ne pas exécuter une partie du code.
    */
    println!("Hello, world!");
}
```

## <RdIcon name="list-tree" /> Structure de base

En Rust, chaque programme exécutable commence par la fonction `main`. Cette fonction est le point d'entrée du programme, et c'est là que l'exécution commence. La fonction `main` est définie à l'aide du mot-clé `fn` suivi de `main` et d'une paire de parenthèses `()`. Le code à exécuter est placé entre des accolades `{}`.

Voici une décomposition simple d'un programme Rust de base :

```rust
fn main() { // Fonction Main 
    println!("Hello, Coddy!"); // Code à l'intérieur de la fonction
}
```

> Note importante : En Rust, chaque instruction doit se terminer par un point-virgule `;`. Le point-virgule est obligatoire et indique à Rust que l'on atteint la fin d'une instruction. Oublier d'ajouter un point-virgule ***entraînera une erreur de compilation***. Cependant, il faut noter que les blocs de code entourés d'accolades `{}` *(comme les déclarations de fonctions)* n'ont pas besoin de points-virgules.

## <RdIcon name="box" /> Variables

### 0️⃣ Nombres

Les variables sont des conteneurs qui contiennent des valeurs de données. Elles sont utilisées pour stocker, manipuler et afficher des informations dans un programme.

En bref, une variable est comme une unité de mémoire à laquelle on peut accéder en tapant le nom de celle-ci. 

Chaque variable a un nom unique et une valeur qui peut être de différents types. Rust possède divers types de données intégrés qui définissent le type de valeur qu'une variable peut contenir.

Pour initialiser une variable, on utilise le format suivant :

```rust
let variableName: variable_type = valeur;
```

En Rust, les nombres sont généralement représentés à l'aide de deux principaux types de données : `i32` et `f64`.

`i32` est utilisé pour stocker des nombres entiers sans aucun point décimal. Par exemple :

```rust
let age: i32 = 30;
let temperature: i32 = -5;
let count: i32 = 100;
```

`f64` est utilisé pour stocker des nombres avec un point décimal. Par exemple :

```rust
let price: f64 = 99.99;
let pi: f64 = 3.14159;
let fraction: f64 = 0.5;
```

Lors de la déclaration de variables en Rust, on doit spécifier le type de la variable après le nom de la variable, suivi d'un deux-points. Cela est connu sous le nom de déclaration de type. Une fois qu'une variable est déclarée avec un certain type, elle ne peut contenir que des valeurs de ce type.

### Ⓜ️ Caractère

Un `char` est un caractère **unique** *(Par exemple : 1, 6, %, b, p, ., T, etc.)*.

Le type `char` est un type spécial qui consiste en un seul caractère.

Pour initialiser une valeur char dans une variable, on l'entoure entre guillemets simples :
```rust
let c1: char = 'h';
```

Dans l'exemple ci-dessus, une variable `char` nommée `c1` est initialisée.

### 🏷️ Chaîne de caractères

Un `char` est un caractère **unique** *(Par exemple : 1, 6, %, b, p, ., T, etc.)*.

Le type `String` est un type spécial qui consiste en **plusieurs `chars`**.

Pour initialiser une valeur de chaîne dans une variable, on l'entoure de guillemets doubles :

```rust
let s1 = "C'est une chaîne de caractères.";
```

Dans l'exemple ci-dessus, une variable de chaîne nommée `s1` est initialisée.

Contrairement aux nombres, lors du travail avec des chaînes on doit être plus prudents avec les types. Si on veut déclarer explicitement un type `String`, on doit convertir la chaîne comme ceci :

```rust
let s1: String = "This is a string".to_string();
```

### 🔛 Booléen

Un type booléen n'a que 2 valeurs possibles : `true` ou `false`.

Pour affecter une valeur booléenne à une variable, on utilise le mot-clé `let` suivi du nom de la variable :

```rust
let variable_true: bool = true;
let variable_false: bool = false;
```

Dans l'exemple ci-dessus, deux variables booléennes nommées `variable_true` et `variable_false` sont initialisées avec les valeurs `true` et `false`, respectivement.

Les booléens sont les briques de base pour créer de la logique dans les programmes que l'on écrit. On a un chapitre entier sur la logique et les conditions.

## <RdIcon name="box" /> Variables mutables

En Rust, les variables sont *immuables* par défaut. Cela signifie qu'une fois que l'on assigne une valeur à une variable, on ne peut pas changer cette valeur. Cependant, on peut rendre une variable *mutable* en utilisant le mot-clé `mut` lors de sa déclaration.

Par exemple :

```rust
let x = 5; // x est immuable
let mut y = 10; // y est mutable
```

Dans cet exemple, `x` est immuable, donc on ne peut pas changer sa valeur après son initialisation. D'un autre côté, `y` est mutable, donc on peut changer sa valeur plus tard dans le code :

```rust
y = 20; // Ceci est autorisé car y est mutable
x = 15; // Cela provoquera une erreur car x est immuable
```


::: info Notions avancées
Retrouvez la suite des explications sur la varible [ici](/programmation/rust/fondamentaux/variables)
:::

## <RdIcon name="sigma" /> Opérateurs arithmétiques

Opérateurs sont utilisés pour effectuer des opérations sur des valeurs.

|Opérateur|Opération|Exemple|
|---|---|---|
|+|Addition|3 + 2 = 5|
|-|Soustraction|3 - 2 = 1|
|*|Multiplication|3 * 2 = 6|
|/|Division|4 / 2 = 2|

Voici un exemple d'utilisation :

```rust
let a: i32 = 3;
let b: i32 = 5;
let c: i32 = a + b
// c contient 8
```

Lorsqu'on travaille avec des nombres décimaux en Rust, on utilise le type de données `f64`, qui peut stocker des nombres avec des points décimaux. Les mêmes opérateurs arithmétiques (`+`, `-`, `*`, `/`) fonctionnent avec `f64` de la même manière qu'avec les entiers :

```rust
let x: f64 = 3.3;
let y: f64 = 4.1;
let z: f64 = x + y;
// z contient 7.
```