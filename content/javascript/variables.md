---
sidebar: auto
---

# Tutoriel sur les Variables en JavaScript <Badge type="warning" text="En cours de rédaction" />

Les variables en JavaScript sont utilisées pour stocker des données. Elles peuvent contenir différents types de valeurs, tels que des nombres, des chaînes de caractères, des booléens, des tableaux et des objets. Dans ce tutoriel, nous allons explorer les bases des variables en JavaScript.

## Déclaration des variables

En JavaScript, il existe trois façons de déclarer une variable : `var`, `let`, et `const`.

- `var` était la seule façon de déclarer des variables avant l'introduction de `let` et `const`. Cependant, il est recommandé d'utiliser `let` ou `const` à la place de `var` pour des raisons de portée.
- `let` est utilisé pour déclarer des variables dont la portée est limitée au bloc dans lequel elles sont définies.
- `const` est utilisé pour déclarer des variables constantes dont la valeur ne peut pas être modifiée une fois qu'elle est attribuée.

## Types de données

Les variables en JavaScript peuvent contenir différents types de données :

- **Number**: pour les nombres.
- **String**: pour les chaînes de caractères.
- **Boolean**: pour les valeurs `true` ou `false`.
- **Array**: pour stocker plusieurs valeurs dans une seule variable.
- **Object**: pour stocker des collections de données.

## Utilisation des variables

Les variables peuvent être utilisées pour stocker des valeurs et effectuer des opérations sur ces valeurs. Voici quelques exemples :

```javascript
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum); // Affiche 30

let message = "Hello";
message += " World!";
console.log(message); // Affiche "Hello World!"