---
sidebar: auto
redac: true
date: 2024-12-23
---

# Attaques d'API

## Reconnaissance de l'API

Pour démarrer les tests d'API, il faut d'abord rechercher autant d'informations que possible sur l'API, afin de découvrir sa surface d'attaque. Pour commencer on doit identifier les points de terminaison de l'API. Il s'agit des emplacements où une API reçoit des requêtes concernant une ressource spécifique sur son serveur. Par exemple, on considère la requête `GET` suivante :

```
GET /api/books HTTP/1.1
Host: example.com
```

Le point de terminaison de l'API pour cette requête est `/api/books`. Cela entraîne une interaction avec l'API pour récupérer une liste de livres d'une bibliothèque. Un autre point de termonaison de l'API pourrait être, par exemple, `/api/books/mystery`, qui récupérerait une liste de livres de mystère.

Une fois les points de terminaison identifiés, on doit déterminer comment intéragir avec eux. Cela permet de créer des requêtes HTTP valides pour tester l'API. par exemple, on doit rechercher des informations sur les éléments suivants :

* Les données d'entrée traitées par l'API, y compris les paramètres obligatoires et facultatifs.
* Les types de requêtes acceptées par l'API, y compris les méthodes HTTP et les formats multimédias pris en charge.
* Limites de débit et mécanismes d'authentification.

## Documentation de l'API

Les API sont généralement documentées afin que les développeurs sachent comment les utiliser et les intégrer. La documentation peut être sous forme lisible par l'homme ou par une machine. La documentation lisible par l'homme est conçue pour que les développeurs comprennent comment utiliser l'API. Elle peut inclure des explications détaillées, des exemples et des scénarios d'utilisation. La documentation lisible par machine est conçue pour être traitée par un logiciel afin d'automatiser des tâches telles que l'intégration et la validation d'API. Elle est écrite dans des formats structurés tels que JSON ou XML.

Le documentation de l'API est souvent accessible au public, en particulier si l'API est destinée à être utilisée par des développeurs externes. Si tel est le cas, toujours commencer par analyser celle-ci.

Même si la documentation de l'API n'est pas disponible ouvertement, on peut toujours y accéder en parcourant les applications qui utilisent l'API. Pour ce faire, on peut utiliser Burp Scanner pour explorer l'API. on peut également parcourir les applications manuellement à l'aide du navigateur de Burp. On recherche les points de terminaison qui peuvent faire référence à la documentation de l'API, par exemple :

* `/api`
* `/swagger/index.html`
* `/openapi.json`

Si on identifie un point de terminaison pour une ressource, on doit s'assurer d'examiner le chemin de base. Par exemple, si on identifie le point de terminaison de la ressource `/api/swagger/v1/users/123`, on doit examiner les chemins suivants :

* `/api/swagger/v1`
* `/api/swagger`
* `/api`

On peut également utiliser une liste de chemins courants pour rechercher de la documentation à l'aide d'Intruder.

### Utilisation d'une documentation lisible par machine

On peut utiliser une gamme d'outils automatisés pour analyser toute documentation API lisible par machine que l'on trouve. On peut utiliser Burp Scanner pour analyser et auditer la documentation OpenAPI ou toute autre documentation au format JSON ou YAML. On peut également analyser la documentation OpenAPI à l'aide de l'outil BApp OpenAPI Parser. On peut aussi utiliser un outil spécialisé pour tester les points de terminaison documentés, tels que Postman ou SoapUI.

