---
sidebar: auto
redac: true
date: 2024-08-09
---
# Introduction à Ruby

## Interactive Ruby
Une première approche de Ruby, la plus simple, consiste à utiliser IRB (Interactive Ruby) dans un terminal :

Sur macOS, ouvrrir un Terminal et taper `irb`
Sur Linux, ouvrrir une console et taper `irb`
Sur Windows, lancer `Interactive Ruby` qui se trouve dans la section Ruby du menu Démarrer > Applications.
IRB permet d’écrire et d’interpréter du Ruby à la volée, sans avoir à enregistrer un fichier et l’exécuter ensuite.

```ruby
3.2.4 :002 > 
```

## Hello World !

```ruby:line-numbers=1 {2}
puts "Hello World !"
Hello World ! # [!code ++]
=> nil# [!code ++]
```

`puts` est l'équivalent en **Ruby** de `Console.WriteLine` en **C#** ou de `print` en **Python**.
`nil` lui est toujours retourné par `puts`, il indique l'absence de valeur.

## Opérateurs mathématiques

|Opérateur|Syntaxe|Exemple|
|-|-|-|
|Addition|`+`|1 + 1 = 2|
|Soustraction|`-`|2 - 1 = 1|
|Multiplication|`*`|2 * 2 = 4|
|Division|`/`|10 / 2 = 5|
|Exposant|`**`|5 ** 2 = 25 (5²)|
|Racine carré|`Math.sqrt()`|Math.sqrt(9) = 3.0|

*Math.* correspond à la même fonction qu'en **Python**, seule différence ici, c'est qu'en **Ruby**, on appelle ça un module.

## Les méthodes (fonction)

Le mot-clé `def` indique le début d'une définition d'une méthode, et se clôture par `end`. 

```ruby:line-numbers=1 {5}
def h
puts "Une fonction appelée méthode parce qu'on ne veut pas faire comme tout le monde..."
end
h
Une fonction appelée méthode parce qu'on ne veut pas faire comme tout le monde...# [!code ++]
```










<hr>
<br>

::: info Sources
Ce cours s'inspire de la documentation de Ruby :

https://www.ruby-lang.org/fr/documentation/quickstart/ <Badge type="tip" text="Gratuit" />
:::