---
sidebar: auto
date: 2025-12-28
---

# 🗃️ Variables en Rust

## 🆎 Déclaration de type

Une fois qu'une variable est déclarée avec un certain type, elle ne peut contenir que des valeurs de ce type. Par exemple, une variable `i32` ne peut contenir que des valeurs entières, et une variable `String` ne peut contenir que du texte.

Par exemple :

```rust
let age: i32 = 25;  // Ne peut contenir que des nombres entiers
let name: &str = "Alice";  // Ne peut contenir que du texte
```

Cela causerait des erreurs :

```rust
age = "Bob";  // Erreur : impossible de mettre du texte dans une variable i32
name = 30;  // Erreur : impossible de mettre un nombre dans une variable String
```

Ces exemples sont valides :

```rust
age = 26;  // OK : assignation d'un nouvel entier
name = "Jane";  // OK : assignation d'une nouvelle chaîne de texte
```

## 📛 Conventions de nommage

En Rust, il existe plusieurs conventions de nommage que l'on doit suivre pour rendre le code plus lisible et maintenable. Elles sont largement acceptées par la communauté Rust.

Voici quelques conventions de nommage courantes :

* Les variables doivent être nommées en utilisant `snake_case`, ce qui signifie toutes les lettres minuscules avec des underscores entre les mots. Par exemple : `my_variable`, `calculate_total`.
* Éviter les noms trop courts ou cryptiques. Choisir des noms descriptifs qui indiquent clairement l'objectif de la variable.
* Les noms peuvent contenir des lettres, des chiffres et des underscores.
* Les noms doivent commencer par une lettre ou un underscore `_`.
* Les compteurs de base utilisent généralement une seule lettre comme `i`, `j`, bien qu'il vaille la peine de noter que des noms plus descriptifs pourraient être meilleurs lorsque le contexte est plus complexe.

## 🔲 Inférence de type

En Rust, l'inférence de type permet au compilateur de **déduire automatiquement le type d'une variable** en se basant sur sa valeur et son utilisation. Cela signifie que l'on n'a souvent pas besoin de spécifier explicitement le type lors de la déclaration d'une variable, rendant le code plus concis et plus facile à lire.

Par exemple :

```rust
let x = 5;
// Rust comprend que x est un i32

let y = 3.14;
// Rust comprend que y est un f64

let message = "Hello, world!";
// Rust comprend que message est un &str

let is_true = true;
// Rust comprend que is_true est un bool
```

Dans ces exemples, on n'a pas spécifié les types de `x`, `y`, `message` et `is_true`. Le compilateur Rust a automatiquement inféré leurs types en se basant sur les valeurs assignées à celles-ci.

L'inférence de type n'est pas seulement pratique, mais elle aide également à prévenir les erreurs. Le compilateur vérifie comment les variables sont utilisées et s'assure que les types inférés sont cohérents tout au long du code. S'il y a un conflit, le compilateur générera une erreur.

## 🔀 Conversion de type

Le casting de type est le processus de conversion d'une valeur d'un type de données à un autre. En Rust, on utilise le mot-clé `as` pour le casting de type explicite *(également connu sous le nom de conversion de type)*. 

Les conversions de type les plus courantes se font entre les types numériques :

```rust
// Conversion d'i32 vers f64
let number: i32 = 5;
let decimal: f64 = number as f64;
// Devient 5.0
```
```rust
// Conversion de f64 vers i32
let decimal: f64 = 9.7;
let number: i32 = decimal as i32;
// Devient 9 (les décimales sont tronquées)
```