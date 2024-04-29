---
sidebar: auto
---
# Attaques courantes
<Badge type="tip" text="Rédigé le 29/04/2024" />

## Attaques de mots de passe

Les mots de passe sécurisent la grande majorité des systèmes aujourd'hui. Cette approche, éprouvée par le temps, offre une sécurité adéquate pour de nombreux usages, mais présente de nombreux inconvénients.

### Les problèmes des mots de passe

Les attaquants peuvent mener des attaques visant à craquer les mots de passe stockés dans les fichiers système. De nombreuses attaques utilisent cette approche pour voler un grand nombre de comptes utilisateur.

### Méthodes d'authentification sur les systèmes Linux
Les fichiers de mots de passe sur les systèmes Linux contiennent les informations d'identification des utilisateurs. Les fichiers de mots de passe contiennent un hachage de mot de passe, calculé à l'aide d'une fonction à sens unique.

### Utilisation de la fonction de hachage
* Une fonction de hachage est une fonction mathématique qui prend une entrée de longueur variable et la traduit en une sortie de longueur fixe de manière résistante aux collisions.
* La fonction de hachage doit être construite de manière à répondre à plusieurs critères.

### Problème de la collision
Le problème d'anniversaire indique que les collisions deviennent très courantes lorsque l'échantillon devient suffisamment grand. Les algorithmes de hachage doivent être soigneusement conçus pour éviter le problème de l'anniversaire.

## Types d'attaques sur les mots de passe

### Attaque par force brute

#### Définition

L'attaque par force brute est une méthode utilisée par les attaquants pour tenter de deviner un mot de passe en essayant systématiquement toutes les combinaisons possibles jusqu'à ce que le mot de passe correct soit trouvé.

Cette méthode ne repose pas sur des informations spécifiques sur la cible, mais sur la probabilité que le mot de passe soit trouvé par essai et erreur.

#### Fonctionnement

L'attaquant génère une liste de toutes les combinaisons possibles de caractères, souvent en commençant par les plus simples et en augmentant progressivement la complexité.

Cette liste peut inclure des lettres, des chiffres, des caractères spéciaux, ou toute autre caractéristique possible du mot de passe.
Ensuite, l'attaquant teste chaque combinaison de la liste en essayant de se connecter au système cible, que ce soit un compte utilisateur, un réseau, ou toute autre ressource protégée par un mot de passe.

L'attaque se poursuit jusqu'à ce que le mot de passe correct soit trouvé ou jusqu'à ce que toutes les combinaisons possibles aient été épuisées.

#### Limitations et contre-mesures

L'attaque par force brute peut être très inefficace contre les mots de passe longs ou complexes, car elle nécessite un temps considérable pour tester toutes les combinaisons possibles.
Les contre-mesures pour contrer cette attaque incluent l'utilisation de mots de passe longs et complexes, l'activation de mécanismes de verrouillage après un certain nombre de tentatives infructueuses, et l'utilisation de méthodes d'authentification multi-facteurs qui ajoutent une couche de sécurité supplémentaire au-delà du mot de passe seul.

### Attaque par dictionnaire

#### Définition
L'attaque par dictionnaire est une méthode utilisée par les attaquants pour tenter de deviner un mot de passe en utilisant une liste prédéfinie de mots couramment utilisés, de phrases populaires, ou de combinaisons de caractères.

Contrairement à l'attaque par force brute, qui teste toutes les combinaisons possibles de caractères, l'attaque par dictionnaire repose sur des mots préexistants dans une liste.

#### Fonctionnement
L'attaquant utilise une liste de mots préalablement compilée, appelée dictionnaire, contenant des mots couramment utilisés, des expressions populaires, des noms communs, etc.
Ensuite, l'attaquant teste chaque mot de cette liste en essayant de se connecter au système cible, que ce soit un compte utilisateur, un réseau, ou toute autre ressource protégée par un mot de passe.

Si le mot de passe choisi par l'utilisateur est présent dans le dictionnaire, l'attaque réussit.

#### Limitations et contre-mesures
L'attaque par dictionnaire est plus efficace contre les mots de passe faibles ou basés sur des mots courants.
Les contre-mesures pour contrer cette attaque incluent l'utilisation de mots de passe complexes et uniques, l'activation de mécanismes de verrouillage après un certain nombre de tentatives infructueuses, et l'utilisation de méthodes d'authentification multi-facteurs pour renforcer la sécurité.

### Attaque hybride

#### Définition
L'attaque hybride est une méthode utilisée par les attaquants pour tenter de deviner un mot de passe en combinant les techniques de l'attaque par dictionnaire avec celles de l'attaque par force brute.
Cette approche permet à l'attaquant de tirer parti des avantages des deux méthodes pour maximiser ses chances de succès.

#### Fonctionnement
Dans une attaque hybride, l'attaquant commence généralement par utiliser une liste de mots couramment utilisés, des phrases populaires, des noms communs, etc., comme dans une attaque par dictionnaire.

Si aucun mot de passe approprié n'est trouvé dans le dictionnaire, l'attaquant peut alors basculer vers une attaque par force brute pour tester toutes les combinaisons possibles de caractères, en augmentant progressivement la complexité.

#### Avantages et limitations
L'attaque hybride combine la vitesse de l'attaque par dictionnaire avec la couverture exhaustive de l'attaque par force brute, ce qui peut être efficace pour craquer des mots de passe faibles ou modérément complexes.

Cependant, cette méthode peut être plus lente que l'attaque par dictionnaire seule et plus rapide que l'attaque par force brute seule, en fonction de la taille du dictionnaire et de la complexité des mots de passe ciblés.

#### Contre-mesures
Les contre-mesures pour contrer une attaque hybride sont similaires à celles utilisées contre l'attaque par dictionnaire et l'attaque par force brute.
Il est recommandé d'utiliser des mots de passe longs, complexes et uniques, d'activer des mécanismes de verrouillage après un certain nombre de tentatives infructueuses, et d'opter pour des méthodes d'authentification multi-facteurs pour renforcer la sécurité.


### Attaque par table arc-en-ciel

#### Définition
L'attaque par table arc-en-ciel est une méthode utilisée par les attaquants pour craquer des mots de passe en précalculant et en stockant des hachages de mots de passe dans une table, puis en les comparant avec les hachages des mots de passe cibles.
Cette technique permet de contourner certains des défis associés à l'attaque par force brute en réduisant le temps nécessaire pour deviner un mot de passe.

#### Fonctionnement
Pour créer une table arc-en-ciel, l'attaquant génère une liste de mots de passe et calcule leurs hachages à l'aide d'une fonction de hachage.
Les hachages calculés sont stockés dans une table, souvent sous forme de paires hachage-mot de passe.
Lorsque l'attaquant souhaite craquer un mot de passe cible, il calcule le hachage du mot de passe cible et le compare aux hachages stockés dans la table.
Si une correspondance est trouvée, cela signifie que le mot de passe cible correspond au mot de passe correspondant dans la table.

#### Avantages et limitations
L'attaque par table arc-en-ciel peut être plus rapide que l'attaque par force brute car elle ne nécessite pas de recalculer les hachages pour chaque tentative.
Cependant, la création et le stockage d'une table arc-en-ciel peuvent nécessiter beaucoup de temps et de ressources, en particulier pour les grands ensembles de données.

#### Contre-mesures
Les contre-mesures pour contrer une attaque par table arc-en-ciel incluent l'utilisation de fonctions de hachage robustes et l'ajout de "sel" (une chaîne de caractères aléatoire ajoutée au mot de passe avant le hachage) pour rendre les attaques par tables arc-en-ciel plus difficiles à réaliser.
L'utilisation de mots de passe longs et complexes reste essentielle pour renforcer la sécurité contre ce type d'attaque.

### Conclusion
Les mots de passe sont un mécanisme d'authentification courant mais présentent des failles de sécurité sérieuses s'ils ne sont pas implémentés correctement. Les professionnels de la sécurité doivent veiller à ce que les algorithmes de hachage de mots de passe soient robustes et que les fichiers soient protégés. Lorsque la sécurité est primordiale, les mots de passe ne devraient être qu'un composant d'un système d'authentification multi-facteurs.

## Autres types d'attaques

### Attaques par pulvérisation de mots de passe

Dans une attaque par pulvérisation de mots de passe, l'attaquant utilise une liste de mots de passe couramment utilisés pour attaquer de nombreux comptes simultanément. Par exemple, une liste de 10 millions de mots de passe couramment utilisés stockée sur GitHub pourrait être utilisée par un attaquant pour tenter de se connecter à autant de comptes que possible. La meilleure défense contre les attaques par pulvérisation de mots de passe est d'incorporer des listes de mots de passe couramment utilisés dans les systèmes de contrôle d'accès et d'empêcher les utilisateurs de choisir un mot de passe qui apparaît sur la liste.

### Attaques de remplissage de crédential

Les attaques de remplissage de crédential sont rendues possibles lorsque les utilisateurs réutilisent le même mot de passe sur plusieurs sites.
Si un attaquant compromet un site de faible sécurité et obtient une liste de noms d'utilisateur et de mots de passe, il peut ensuite essayer d'utiliser ces mêmes combinaisons de nom d'utilisateur et de mot de passe pour se connecter à des sites plus sécurisés, en comptant sur le fait que de nombreux utilisateurs réutilisent les mêmes mots de passe sur plusieurs sites.
La meilleure défense ici est pour les utilisateurs finaux d'éviter de réutiliser les mots de passe.
L'utilisation d'outils de gestion de mots de passe permet la génération et la maintenance faciles de mots de passe forts et uniques pour chaque site visité.

### Contre-mesures grâce aux authentifications multi-facteurs

L'authentification multi-facteurs est une autre défense efficace contre les attaques par pulvérisation de mots de passe et de remplissage de crédentials.

En exigeant un facteur d'authentification supplémentaire au-delà du mot de passe, l'authentification multi-facteurs arrête ces attaques à mi-chemin du processus d'authentification.

## Introduction à l'apprentissage automatique et à l'intelligence artificielle

### Définition de l'apprentissage automatique

L'apprentissage automatique est une discipline technique qui applique les principes de l'informatique et des statistiques pour découvrir les connaissances cachées dans les données que nous accumulons chaque jour.

Les techniques d'apprentissage automatique analysent les données pour découvrir des tendances, catégoriser des enregistrements et nous aider à gérer nos entreprises de manière plus efficace.

### Place de l'apprentissage automatique dans l'intelligence artificielle

L'apprentissage automatique est un sous-ensemble d'un domaine plus large appelé intelligence artificielle (IA).
L'IA est une collection de techniques, y compris l'apprentissage automatique, conçues pour imiter les processus de pensée humaine dans les ordinateurs, du moins dans une certaine mesure.

### Objectifs de l'apprentissage automatique
L'analyse descriptive vise simplement à décrire nos données.
L'analyse prédictive cherche à utiliser nos données existantes pour prédire des événements futurs.
L'analyse prescriptive cherche à optimiser notre comportement en simulant de nombreux scénarios.

### Les défis de l'intelligence artificielle
L'IA devient de plus en plus importante pour nos entreprises, mais les attaquants cherchent de nouvelles façons de la contrecarrer, c'est ce qu'on appelle l'intelligence artificielle adversaire.
Ils peuvent vouloir simplement violer la sécurité de nos algorithmes d'apprentissage automatique pour voler les secrets commerciaux qu'ils contiennent.

### Exemple d'attaque contre l'IA
En 2020, des chercheurs de McAfee ont démontré comment un algorithme d'intelligence artificielle précédemment utilisé par Tesla pour la conduite autonome pouvait être trompé. Ils ont simplement utilisé un morceau de ruban adhésif noir pour prolonger la partie médiane du chiffre trois sur un panneau de limitation de vitesse à 35 miles par heure.

### Conclusion
Alors que les organisations dépendent de plus en plus de l'intelligence artificielle dans leurs processus commerciaux, elles doivent envisager les attaques potentielles contre ces algorithmes et construire des algorithmes robustes qui se défendent contre ces attaques possibles.



<hr>
<br>

::: info Sources
Ce cours s'inspire du cours sur Linkedin eLearning de ***Mike CHAPPLE*** :

https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-1-threats-attacks-and-vulnerabilities?contextUrn=urn%3Ali%3AlyndaLearningPath%3A57bdd64992015ae4c0cb990e&dApp=36524473&leis=LAA&u=98048682
:::