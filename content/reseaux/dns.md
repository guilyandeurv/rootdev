---
sidebar: auto
---
# Le Domain Name System (DNS)
<Badge type="tip" text="Rédigé le 16/03/2024" />

Le DNS permet de communiquer avec les appareils sur Internet sans nous souvenir de nombres complexes. Quand on veut visiter un site web, il n'est pas vraiment pratique de se souvenir de son adresse IP, et c'est là que le DNS peut aider. Donc au lieu de vous souvenir de 104.26.10.110, on se souvient de rootdev.fr à la place.

## Le TLD (Top-Level Domain)

Le TLD est la partie la plus à droite du nom de domaine, pour *rootdev.fr*, le TLD est **.fr**. Il y a deux types de TLD :
* le **gTLD** pour **G**eneric **T**op **L**evel
* le **ccTLD** pour **C**ountry **C**ode **T**op **L**evel **D**omain

Historiquement, le gTLD était dédié à l'identification du type du service, par exemple, **.com** pour commercial, **.org** pour une organisation, **.edu** pour l'éducation ou encore **.gouv** pour le gouvernement.
Le ccTLD lui était dédié à l'identification du pays du service : **.fr** pour la France, **.ca** pour le Canada, etc...

Seulement, suite à une demande trop importante, plusieurs nouveaux gTLD ont vu le jour tel que **.online**, **.blog**...

*Liste complète des TLD : https://data.iana.org/TLD/tlds-alpha-by-domain.txt*

## Le SLD (Second Level Domain)

Le SLD est la partie précédent le TLD : *rootdev*.fr, rootdev est le SLD.
Lorsque l'on enregistre un nom de domaine, celui-ci est limité à 63 caractères, tout comme le TLD peut uniquement contenir des lettres, des chiffres et des traits d'union (-) (Les traits d'union ne peuvent se trouver au début ni à la fin, ni se succéder).

## Le sous-domaine

Le sous-domaine est la partie qui précède le SLD : **admin**.rootdev.fr, admin est le sous-domaine, qui est séparé du nom de domaine par un point (.).
On peut utiliser plusieurs sous-domaines pour créer de plus longs noms, comme par exemple **serveur.france.**rootdev.fr
Tout comme le SLD, celui-ci est limité à 63 caractères et ne peut utiliser que des lettres, des chiffres et des traits d'union.

## Que se passe-t-il lors d'une requête DNS ?

1. Lorsqu'on demande un nom de domaine, l'ordinateur vérifie d'abord son cache local pour voir si la recherche de l'adresse a déjà été faite; sinon, une demande à au serveur DNS récursif sera faite.
2. Le serveur DNS est généralement fourni par le fournisseur d'accès internet, mais celui-ci peut être choisi. Ce serveur dispose lui aussi d'un cache local de noms de domaine recherchés précédemment. Si le résultat est trouvé localement, il est alors envoyé au client (l'ordinateur qui a fait la recherche), cependant, si ce n'est pas le cas, alors un traffic commence à se faire jusqu'à trouver la réponse, en commençant par les serveurs DNS racines d'Internet.
3. Les serveurs racines agissent comme l'épine dorsale DNS d'Internet; leur tâche est de rediriger vers le serveur de domaine de premier niveau correct, en fonction de la demande. Si, par exemple, on demande www.rootdev.fr, le serveur racine reconnaîtra le domaine de premier niveau de .fr et nous référera au bon serveur TLD qui traite des adresses .fr.
4. Le serveur TLD détient des enregistrements pour trouver le serveur faisant autorité pour répondre à la demande DNS. Le serveur faisant autorité est souvent également connu comme serveur de noms pour le domaine.
5. Un serveur DNS faisant autorité est le serveur qui est responsable du stockage des enregistrements DNS pour un nom de domaine particulier et où les mises à jour du nom de domaine DNS seraient effectuées. Selon le type d'enregistrement, l'enregistrement DNS est ensuite renvoyé au serveur DNS récursif, où une copie locale sera mise en cache pour les futures demandes puis relayée au client d'origine qui a fait la demande. Les enregistrements DNS sont tous livrés avec une valeur TTL (Time To Live). Cette valeur est un nombre représenté en secondes que la réponse doit être sauvegardée localement jusqu'à ce que l'on doive la chercher à nouveau. La mise en cache sauvegarde sur le fait d'avoir à faire une demande DNS chaque fois que l'on communique avec un serveur.

<hr>
<br>

::: info Sources
Ce cours s'inspire de TryHackMe.com de la chambre "*DNS in detail*" :
https://tryhackme.com/room/dnsindetail
:::


