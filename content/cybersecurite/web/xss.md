---
sidebar: auto
---
# Failles XSS 
<Badge type="tip" text="Rédigé le 16/10/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Les différents types de failles XSS

* ***Stored***: Stock un payload dans le serveur
* ***Reflected***: Nécessite l'interaction de l'utilisateur
* ***DOM-based***: S'installe côté client
* ***Self-XSS***: Affecte uniquement l'attaquant
* ***Blind XSS*** : L'attaquant n'a pas la capacité de voir le résultat

### XSS Reflected

Le XSS réfléchi est un type d'attaque qui nécessite une interaction de l'utilisateur pour être exécuté. Par exemple, l'attaquant injecte un code malveillant dans une requête HTTP, qui est ensuite renvoyé à l'utilisateur dans la réponse du serveur. Par exemple, si un site web a une fonction de recherche qui affiche les termes recherchés sans les filtrer correctement, un attaquant pourrait injecter un script malveillant dans l'URL de recherche. Lorsque l'utilisateur clique sur ce lien malveillant, le script s'exécute dans son navigateur. Pour exploiter cette vulnérabilité, l'attaquant doit généralement inciter la victime à cliquer sur un lien spécialement conçu, souvent par le biais de techniques d'ingénierie sociale comme le phishing.

### XSS Stored

Le XSS stocké est considéré comme plus dangereux car le code malveillant est stocké de manière permanente sur le serveur cible, généralement dans une base de données. Chaque fois qu'un utilisateur visite la page affectée, le script malveillant est exécuté dans son navigateur. Un exemple courant est un forum en ligne où les utilisateurs peuvent poster des commentaires. Si le site ne filtre pas correctement les entrées des utilisateurs, un attaquant pourrait poster un commentaire contenant un script malveillant. Ce script serait alors exécuté dans le navigateur de chaque visiteur qui consulte la page du forum. Cette forme de XSS est particulièrement dangereuse car elle peut affecter un grand nombre d'utilisateurs sans nécessiter d'interaction supplémentaire de la part de l'attaquant après l'injection initiale.

### DOM-based

Le Dom Access, ou XSS basé sur le DOM, est une vulnérabilité qui se produit entièrement du côté client. Contrairement aux autres types de XSS, le code malveillant n'est pas envoyé au serveur, mais est exécuté directement dans le navigateur de l'utilisateur en manipulant le Document Object Model (DOM) de la page. Cette attaque exploite les faiblesses dans les scripts côté client qui modifient dynamiquement le contenu de la page. Par exemple, si un script JavaScript prend des données d'un paramètre d'URL et les insère directement dans le DOM sans validation appropriée, un attaquant pourrait manipuler ce paramètre pour injecter du code malveillant. Les vulnérabilités Dom Access sont souvent plus difficiles à détecter car elles ne sont pas visibles dans le code source de la page, mais seulement dans le DOM modifié dynamiquement.

### Self-XSS

Le Self Access est une forme particulière de XSS où le code malveillant injecté n'affecte que l'utilisateur qui l'a introduit. Cette situation se produit généralement dans des contextes où l'utilisateur a un certain contrôle sur le contenu qu'il voit, comme dans une page de profil personnalisable. Par exemple, si un utilisateur peut définir un nom d'affichage personnalisé qui est ensuite affiché sur sa page de profil sans être correctement filtré, il pourrait théoriquement injecter un script qui s'exécuterait chaque fois qu'il visite sa propre page. Bien que le Self Access soit généralement considéré comme moins dangereux que d'autres formes de XSS (puisqu'il n'affecte que l'attaquant lui-même), il peut parfois être exploité pour contourner certaines mesures de sécurité ou pour démontrer l'existence d'une vulnérabilité plus large.

### Blind XSS

Le Blind Access, ou XSS aveugle, est une variante particulièrement insidieuse du XSS où l'attaquant ne voit pas directement le résultat de son injection. Cette situation se produit souvent dans des contextes où l'entrée de l'utilisateur est traitée en arrière-plan ou affichée à d'autres utilisateurs, comme dans un système de messagerie interne ou un panneau d'administration. Par exemple, un attaquant pourrait injecter un script malveillant dans un formulaire de contact. Bien que l'attaquant ne voie pas le résultat, le script pourrait s'exécuter lorsqu'un administrateur consulte les messages reçus. Les attaques de Blind Access sont particulièrement dangereuses car elles peuvent passer inaperçues pendant longtemps, permettant potentiellement à l'attaquant de compromettre des comptes à privilèges élevés. Des outils comme XSS Hunter peuvent être utilisés pour détecter et exploiter ces vulnérabilités en envoyant des notifications à l'attaquant lorsque le payload est exécuté.

## Méthodes de test

Pour tester les vulnérabilités XSS, il est recommandé de suivre les étapes suivantes :

* Tester chaque paramètre et chaque valeur de paramètre.
* Tester les en-têtes et les valeurs d'en-tête.
* Utiliser des outils comme Burp pour trouver des paramètres cachés.
* Utiliser des payloads de test pour voir comment l'application réagit.
* Analyser les fichiers JavaScript pour trouver des vulnérabilités.

### Payloads de test

Les payloads de test sont des codes malveillants qui sont utilisés pour tester les vulnérabilités XSS. Il est recommandé de commencer avec des payloads de test simples et de les rendre de plus en plus complexes pour voir comment l'application réagit, exemple :

* `<script>alert('XSS')</script>` : Ce payload de test simple injecte un script qui affiche une fenêtre d'alerte avec le message "XSS".
* `<img src=x onerror=alert('XSS')>` : Ce payload de test utilise une balise img pour injecter un script qui s'exécute lorsque l'image ne peut pas être chargée.
* `<svg onload=alert('XSS')>` : Ce payload de test utilise une balise svg pour injecter un script qui s'exécute lors du chargement de l'élément.
* `<a href="javascript:alert('XSS')">Click me</a>` : Ce payload de test injecte un lien avec du code JavaScript dans l'attribut href.
* `<body onload=alert('XSS')>` : Ce payload de test injecte du code JavaScript dans l'événement onload de la balise body.

Ces payloads de test de base peuvent être modifiés et combinés de différentes manières pour tester la réaction de l'application face à des entrées malveillantes.

### Évasion de filtres

Les filtres sont des mécanismes de sécurité qui sont utilisés pour empêcher les attaques XSS. Cependant, il est possible d'éviter ces filtres en utilisant des techniques de codage et de masquage :

* Utiliser des caractères Unicode ou des encodages HTML pour masquer les caractères spéciaux comme `<` et `>`.
* Utiliser des balises HTML incomplètes ou malformées pour contourner les filtres qui recherchent des balises complètes.
* Exploiter les différences de traitement entre le côté client (navigateur) et le côté serveur pour passer à travers les filtres.
* Utiliser des événements JavaScript alternatifs qui ne sont pas filtrés, comme `onmouseover`, `onload`, etc.
* Injecter le code malveillant dans des paramètres inattendus, comme les noms de fichiers, les en-têtes HTTP, etc.

En analysant attentivement les réactions de l'application face à différents payloads, les attaquants peuvent souvent trouver des moyens de contourner les filtres mis en place.

### Encodage

L'encodage est une technique qui est utilisée pour convertir les caractères en une forme qui peut être lue par l'application. Il est possible d'utiliser l'encodage pour éviter les filtres et exécuter du code malveillant :

* Encodage HTML : `&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;`
* Encodage URL : `%3Cscript%3Ealert(%27XSS%27)%3C%2Fscript%3E`
* Encodage Unicode : `\u003Cscript\u003Ealert(\u0027XSS\u0027)\u003C\u002Fscript\u003E`
* Encodage mixte : `%3Cscript%3Ealert('XSS')%3C%2Fscript%3E`

En essayant différentes techniques d'encodage, les attaquants peuvent souvent trouver un moyen de contourner les filtres mis en place par l'application.

### Analyse de la réponse

Lorsque l'on teste une vulnérabilité XSS, il est important d'analyser la réponse de l'application pour voir si le code malveillant a été exécuté. Il est possible d'utiliser des outils comme Burp pour analyser la réponse et voir si le code malveillant a été exécuté.

* Présence du payload injecté dans le code HTML de la page
* Exécution de fonctions JavaScript, comme `alert()`, `document.cookie`, etc.
* Modifications du Document Object Model (DOM) de la page
* Envoi de données à un serveur contrôlé par l'attaquant

Les outils comme Burp Suite peuvent être très utiles pour analyser en détail la réponse de l'application et détecter les signes d'une exécution réussie du code malveillant.

### Impact

Les attaques XSS peuvent avoir un impact important sur la sécurité d'une application. Il est possible d'utiliser les attaques XSS pour voler des informations sensibles, comme des cookies ou des informations de connexion. Il est également possible d'utiliser les attaques XSS pour exécuter du code malveillant sur un utilisateur sans que celui-ci ne soit conscient de l'attaque.

* Vol de cookies de session et usurpation d'identité (account takeover)
* Accès à des informations sensibles stockées dans le navigateur de l'utilisateur
* Exécution de commandes malveillantes dans le contexte de l'utilisateur victime
* Redirection vers des sites web malveillants ou d'hameçonnage
* Modifications non autorisées des données de l'utilisateur
* Déni de service en saturant les ressources du serveur

Selon le contexte et la nature de la vulnérabilité XSS, les dommages potentiels peuvent être très importants pour les utilisateurs et l'entreprise propriétaire de l'application web.



::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Introduction to Web Hacking*" :
https://tryhackme.com/module/intro-to-web-hacking
:::