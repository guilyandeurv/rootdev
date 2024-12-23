---
sidebar: auto
date: 2024-12-23
---
# Vulnérabilités SSRF 

## Qu'est que ce SSRF ?

Il s'agit d'une falsification de requête côté serveur, c'est une vulnérabilité qui permet à un attaquant de forcer l'application côté serveur à effectuer des requêtes vers un emplacement non prévu.

Dans une attaque SSRF classique, l'attaquant peut forcer le serveur à établir une connexion à des services internes uniquement au sein de l'infrastructure de l'organisation. Dans d'autres cas, il peut être en mesure de forcer le serveur à se connecter à des systèmes externes arbitraires. Cela peut entraîner une fuite de données sensibles, telles que des informations d'identification d'autorisation.

![SSRF schema](./img/server-side%20request%20forgery.svg)

## Quel impact ?

Une attaque SSRF réussie peut souvent entraîner des actions ou un accès non autorisé aux données de la cible. Cela peut se produire dans l'application vulnérable ou sur d'autres systèmes back-end avec lesquels l'application peut communiquer. Dans certaines situations, la vulnérabilité SSRF peut permettre à un attaquant d'exécuter des commandes arbitraires. Un exploit SSRF qui provoque des connexions à des systèmes tiers externes peut entraîner des attaques malveillantes ultérieures. Celles-ci peuvent sembler provenir de l'organisation qui héberge l'application vulnérable.

## Attaques SSRF courantes

Les attaques SSRF exploitent souvent les relations de confiance pour intensifier une attaque à partir de l'application vulnérable et effectuer des actions non autorisées. Ces relation de confiance peuvent exister en relation avec le serveur ou avec d'autres systèmes back-end au sein de la même organisation.

### Attaques SSRF contre le serveur

Lors d'une attaque SSRF contre le serveur, l'attaquant force l'application à envoyer une requête HTTP au serveur qui héberge l'application, via une interface réseau de bouclage. Cela implique généralement de fournir une URL avec un nom d'hôte tel que `127.0.0.1` (une adresse IP réservée qui pointe vers l'adaptateur de bouclage) ou `localhost` (un nom couramment utilisé pour le même adaptateur).

Par exemple, on peut imaginer une application d'achat qui permet de voir si un article est en stock dans un magasin particulier. Pour fournir les informations sur le stock, l'application doit interroger différents API REST back-end. Pour ce faire, elle transmet l'URL au point de terminaison de l'API back-end concerné via une requête HTTP front-end. Lorsqu'un utilisateur consulte l'état du stock d'un article, son navigateur effectue la requête suivante :

```
POST /product/stock HTTP/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 118

stockApi=http://stock.weliketoshop.net:8080/product/stock/check%3FproductId%3D6%26storeId%3D1
```

Cela amène le serveur à effectuer une requête à l'URL spécifiée à récupérer l'état du stock et à le renvoyer à l'utilisateur. Dans cet exemple, un attaquant peut modifier la requête pour spécifier une URL locale du serveur :

```
POST /product/stock HTTP/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 118

stockApi=http://localhost/admin
```

Le serveur récupère le contenu de l'URL `admin` et le renvoie à l'utilisateur. Un attaquant peut accéder à l'URL `admin`, mais la fonctionnalité administrative n'est normalement accessible qu'aux utilisateurs authentifiés. Cela signifie qu'un attaquant ne verra rien d'intéressant. Cependant, si la demande d'URL `admin` provient de la machine locale, les contrôles d'accès normaux sont contournés. L'application accorde un accès complet à la fonctionnalité administrative, car la demande semble provenir d'un emplacement approuvé.

Mais alors, pourquoi les applications se comportent-elles de cette manière et font-elles implicitement confiance aux requêtes provenant de la machine locale ? 
* Le contrôle d'accès peut être implémenté dans un autre composant placé devant le serveur d'application. Lorsqu'une connexion est établie avec le serveur, le serveur est contourné.
* A des fins de récupération après sinistre, l'application peut autoriser l'accès administratif sans connexion à tout utilisateur provenant de la machine locale. Cela permet à un administrateur de récupérer le système s'il perd ses identifiants. Cela suppose que seul un utilisateur entièrement fiable proviendrait directement du serveur.
* L'interface d'administration peut écouter sur un numéro de port différent de celui de l'application principale et peut ne pas être accessible directement par les utilisateurs.

Ces types de relations de confiance, dans lesquelles les requêtes provenant de la machine locale sont traitées différemment des requêtes ordinaires, font souvent de SSRF une vulnérabilité critique.

### Attaques SSRF contre d'autres systèmes back-end

Dans certains cas, le serveur d'application es capable d'intéragir avec des systèmes back-end qui ne sont pas directement accessibles aux utilisateurs. Ces systèmes ont souvent des adresses IP privées et non routables. Les systèmes back-end sont normalement protégés par la topologie du réseau, ils ont donc souvent une posture de sécurité plus faible. Dans de nombreux cas, les systèmes back-end internes contiennent des fonctionnalités sensibles auxquelles une personne capable d'intéragir avec les systèmes peut accéder sans authentification.

Dans l'exemple précédent, on peut imaginer qu'il existe une interface administrative au niveau de l'URL du back-end `https://192.168.0.68/admin`. Un attaquant peut soumettre la requête suivante pour exploiter la vulnérabilité SSRF et accéder à l'interface administrative :

```
POST /product/stock HTTP/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 118

stockApi=http://192.168.0.68/admin
```

## Contourner les défenses SSRF courantes

Il est fréquent de voir des applications contenant un comportement SSRF associé à des défenses visant à empêcher toute exploitation malveillante. Souvent, ces défenses peuvent être contournées.

### SSRF avec des filtres de saisie sur liste noire

Certaines applications bloquent les entrées contenant des noms d'hôtes tels que `127.0.0.1` et `localhost`, ou des URL sensibles telles que `/admin`. Dans ce cas, on peut contourner le filtre à l'aide des techniques suivantes :

* Utiliser une représentation IP alternative de `127.0.0.1` telle que `2130706433`, `017700000001`, ou `127.1`.
* Enregistrer son propre nom de domaine qui se résout en `127.0.0.1`. On peut utiliser le site [Spoofed BurpCollaborator](https://spoofed.burpcollaborator.net) pour cela.
* Masquez les chaînes bloquées à l'aide de l'encodage d'URL ou de la variation de casse.
* Fournir une URL que l'on contrôle, qui redirige vers l'URL cible. On  peut utiliser différents codes de redirection, ainsi que différents protocoles pour l'URL cible. Par exemple, il a été démontré que le passage d'une URL `http:` à `https:` pendant la redirection permettait de contourner certains filtres anti-SSRF.

### SSRF avec des filtres de saisie sur liste blanche

Certaines applications n'autorisent que les entrées qui correspondent à une liste blanche de valeurs autorisées. Le filtre peut rechercher une correspondance au début de l'entrée ou contenue dans celle-ci. Vous pouvez peut-être contourner ce filtre en exploitant les incohérences dans l'analyse des URL.

La spécification d'URL contient un certain nombre de fonctionnalités qui sont susceptibles d'être négligées lorsque les URL implémentent l'analyse et la validation ad-hoc à l'aide de cette méthode :

* On peut intéfrer des informations d'identification dans une URL avant le nom d'hôte, en utilisant le caractère `@`. 
  
    Par exemple : `https://expected-host:fakepassword@evil-host`
* On peut utiliser le caractère `#` pour indiquer un fragment d'URL. 

    Par exemple : `https://evil-host#expected-host`
* On peut exploiter la hiérarchie de dénomination DNS pour placer les données requises dans un nom DNS complet que l'on contrôle.

    Par exemple : `https://expected-host.evil-host`
* On peut encoder des caractères en URL pour brouiller le code d'analyse d'URL. Cela est particulièrement utile si le code qui implémente le filtre gère les caractères encodés en URL différemment du code qui exécute la requête HHTP principale. On peut également essayer de double encoder les caractères, certains serveurs décodent de manière récursive en URL les entrées qu'ils reçoivent, ce qui peut entraîner d'autres divergences.
* On peut utiliser des combinaisons de ces techniques ensemble.

### Contourner des filtres SSRF via une redirection ouverte

Il est parfois possible de contourner les défenses basées sur des filtres en exploitant une vulnérabilité de redirection ouverte. Dans l'exemple précédent, on imagine que l'URL soumise par l'utilisateur soit strictement validée pour empêcher l'exploitatio malveillante du comportement SSRF. Cependant, l'application dont les URL sont autorisées contient une vulnérabilité de redirection ouverte. A condition que l'API utilisée pour effectuer la requête HTTP back-end prenne en charge les redirections, on peut créer une URL qui satisfait le filtre et génère une requête redirigée vers la cible back-end souhaitée.

Par exemple, l'application contient une vulnérabilité de redirection ouverte dans laquelle l'URL suivante :

`/product/nextProduct?currentProductId=6&path=http://evil-user.net`

renvoie vers :

`http://evil-user.net`

On peut exploiter la vulnérabilité de redirection ouverte pour contourner le filtre d'URL et exploiter la vulnérabilité SSRF comme suit :

```
POST /product/stock HTTP/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 118

stockApi=http://weliketoshop.net/product/nextProduct?currentProductId=6&path=http://192.168.0.68/admin
```

Cet exploit SSRF fonctionne parce que l'application vérifie d'abord que l'URL `stockAPI` fournie se trouve sur un domaine autorisé, ce qui est le cas. L'application demande ensuite l'URL fournie, ce qui déclenche la redirection ouverte. Elle suit la redirection et fait une demande à l'URL interne choisie par l'attaquant. 

## Vulnérabilités SSRF aveugles

Les vulnérabilités SSRF aveugles se produisent si on peut amener une application à émettre une requête HTTP back-end vers une URL fournie, mais la réponse de la requête back-end n'est pas renvoyée dans la réponse front-end de l'application.

Le SSRF aveugle est plus difficile à exploiter, mais conduit pardois à une exécution complète de code à distance sur le serveur ou d'autres composants back-end.

### Quel est l'impact des vulnérabilités SSRF aveugles ?

L'impact de ces vulnérabilités est souvent inférieur à celui des vulnérabilités SSRF entièrement informées en raison de leur nature unidirectionnelle. Elles ne peuvent pas être explotiées de manière triviale pour récupérer des données sensibles à partir de systèmes back-end, bien que dans certaines situations, elles puissent être exploitées pour réaliser une exécution de code à distance.

### Comment trouver et exploiter les vulnérabilités SSRF aveugles

La méthode la plus fiable pour détecter les vulnérabilités SSRF aveugles consiste à utiliser des techniques hors bande (OAST). Cela implique de tenter de déclencher une requête HTTP vers un système externe que l'on contrôle et de surveiller les interactions réseau avec ce système. 

La manière la plus simple et la plus efficace d'utiliser des techniques hors bande consite à utiliser Burp Collaborator. On peut utiliser celui-ci pour générer des noms de domaine uniques, les envoyer dans des charges utiles à l'application et surveiller toute interaction avec ces domaines. Si une requête HTTP entrante est observée en provenance de l'application, elle est alors vulnérable au SSRF.

::: tip Note
Lors des tests de vulnérabilités SSRF, il est courant d'observer une recherche DNS pour le domaine Collaborator fourni, mais aucune requête HTTP ultérieure. Cela se produit généralement parce que l'application a tenté d'effectuer une requête HTTP sur le domaine, ce qui a provoqué la recherche DNS initiale, mais la requête HTTP réelle a été bloquée par le filtrage au niveau du réseau. Il est relativement courant que l'infrastructure autorise le trafic DNS sortant, car cela est nécessaire à de nombreuses fins, mais bloque les connexions HTTP vers des destinations inattendues.
:::

La simple identification d'une faille SSRF aveugle pouvant déclencher des requêtes HTTP hors bande ne constitue pas en soi une voie d'exploitation. Etant donné que l'on ne peut pas afficher la réponse de la requête back-end, le comportement ne peut pas être utilisé pour explorer le contenu des systèmes accessibles par le serveur d'applications. Cependant, il peut toujours être exploité pour rechercher d'autres vulnérabilités sur le serveur lui-même ou sur d'autres systèmes back-end. On peut balayer aveuglément l'espace d'adresses IP interne, en voyant des charges utiles conçues pour détecter des vulnérabilités bien connues. Si ces charges utiles utilisent également des techniques hors bande aveugles, on peut alors découvrir une vulnérabilité critique sur un serveur interne non corrigé.

Une autre façon d'exploiter les vulnérabilités SSRF aveugles consiste à inciter l'application à se connecter à un système sous le contrôle de l'application et à renvoyer des réponses malveillantes au client HTTP qui établit la connexion. Si on parvient à exploiter une vulnérabilité sérieuse côté client dans l'implémentation HTTP du serveur, on peut peut-être exécuter du code à distance au sein de l'infrastructure de l'application.

## Trouver une surface d'attaque cachée pour les vulnérabilités SSRF

De nombreuses vulnérabilités de falsification de requête côté serveur sont faciles à trouver, car le trafic normal de l'application implique des paramètres de requête contenant des URL complètes. D'autres exemples de SSRF sont plus difficiles à localiser.

### URL partielles dans les requêtes

Parfois, une application place uniquement un nom d'hôte ou une partie d'un chemin d'URL dans les paramètres de la requête. La valeur soumise est ensuite incorporée côté serveur dans une URL complète demandée. Si la valeur est facilement reconnue comme un nom d'hôte ou un chemin d'URL, la surface d'attaque potentielle peut être évidente. Cependant, l'exploitation en tant que SSRF complet peut être limitée car on ne contrôle pas l'intégralité de l'URL demandée.

### URL dans les formats de données

Certaines applications transmettent des données dans des formats avec une spécification qui permet l'inclusion d'URL qui pourraient être demandées par l'analyseur de données pour le format. Un exemple évident est le format de données XML, qui a été largement utilisé dans les applications Web pour transmettre des données structurées du client au serveur. Lorsqu'une application accepte des données au format XML et les analyse, elle peut être vulnérable à l'injection XXE. Elle peut également être vulnérable à SSRF via XXE. 

### SSRF via l'en-tête Referer

Certaines applications utilisent des logiciels d'analyse côté serveur pour suivre les visiteurs. Ces logiciels enregistrent souvent l'en-tête Referer dans les requêtes, afin de pouvoir suivre les liens entrants. Souvent, le logiciel d'analyse visite toutes les URL tierces qui apparaissent dans l'en-tête Referer. Cela est généralement fait pour analyser le contenu des sites référents, y compris le texte d'ancrage utilisé dans les liens entrants. Par conséquent, l'en-tête Referer est souvent une surface d'attaque utile pour les vulnérabilités SSRF.

<br>
<hr>

::: info Sources
Ce cours s'inspire (et utilise les images) de PortSwigger.com du cours [*Server-side request forgery (SSRF) attacks*](https://portswigger.net/web-security/learning-paths/ssrf-attacks/ssrf-attacks-what-is-ssrf/ssrf/what-is-ssrf)
:::