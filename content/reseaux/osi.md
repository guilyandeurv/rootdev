---
sidebar: auto
---
# Le modèle OSI (Open Systems Interconnection)
<Badge type="tip" text="Rédigé le 24/03/2024" />

OSI est un modèle standardisé qui est utilisé pour démontrer la théorie derrière les réseaux informatiques. En pratique, il s'agit du [modèle TCP/IP](tcp) le plus "compact" sur lequel est basé le réseau du monde réel.

<img src="./img/osi.png" width="400" height="400">

*Image provenant du cours **Openclassrooms** disponible* *[ici](https://openclassrooms.com/fr/courses/6944606-concevez-votre-reseau-tcp-ip/7236472-prenez-du-recul-sur-votre-pratique-grace-au-modele-osi)*

Ce modèle est composé de sept couches :

|n° de couche|OSI|
|---|-|
|7|Application|
|6|Présentation|
|5|Session|
|4|Transport|
|3|Réseau|
|2|Liaison|
|1|Physique|

## La couche 7 : Application

La couche application du modèle OSI fournit essentiellement des options de mise en réseau aux programmes exécutés sur un ordinateur. Il fonctionne presque exclusivement avec des applications, leur fournissant une interface à utiliser pour transmettre des données.

## La couche 6 : Présentation

La couche de présentation traduit les données dans un format standardisé et gère tout chiffrement, compression ou autre transformation des données. Une fois cette opération terminée, les données sont transmises à la couche session.

## La couche 5 : Session

Lorsque la couche session reçoit les données correctement formatées de la couche présentation, elle regarde si elle peut établir une connexion avec l'autre ordinateur sur le réseau. Si elle ne peut pas, elle renvoie une erreur et le processus ne va pas plus loin. Si une session peut être établie, il appartient à la couche session de la maintenir et de coopérer avec la couche session de l'ordinateur distant afin de synchroniser les communications. Lorsque la couche session a réussi à établir une connexion entre l'hôte et l'ordinateur distant, les données sont transmises à la couche 4 : la couche de transport.

## La couche 4 : Transport

La couche transport est une couche très intéressante qui remplit de nombreuses fonctions importantes. Son premier objectif est de choisir le protocole sur lequel les données doivent être transmises. Les deux protocoles les plus courants dans la couche transport sont **TCP** *(**T**ransmission **C**ontrol **P**rotocol)* et **UDP** *(**U**ser **D**atagram **P**rotocol)*. Avec **TCP**, la transmission est basée sur la connexion, ce qui signifie qu'une connexion entre les ordinateurs est établie et maintenue pendant *toute la durée* de la requête. Cela permet une transmission fiable, car la connexion peut être utilisée pour garantir que ***tous les paquets***  arrivent au bon endroit. Une connexion **TCP** permet aux deux ordinateurs de rester en communication constante pour garantir que les données sont envoyées à une vitesse acceptable et que toutes les données perdues sont renvoyées. Avec **UDP**, c’est le contraire; les paquets de données sont essentiellement envoyés à l'ordinateur récepteur - s'il ne peut pas suivre, **c'est son problème**. Cela signifie que **TCP** serait généralement choisi pour les situations où la précision est privilégiée par rapport à la vitesse (par exemple, le transfert de fichiers ou le chargement d'une page Web), et **UDP** serait utilisé dans les situations où la vitesse est plus importante (par exemple, le streaming vidéo).

Une fois le protocole sélectionné, la couche de transport divise ensuite la transmission en petits morceaux (sur **TCP**, on les appelle ***segments***, sur **UDP**, on les appelle ***datagrammes***), ce qui facilite la transmission réussie du message. 

## La couche 3 : Réseau

La couche réseau est chargée de *localiser la destination* de la demande. C'est la couche réseau qui prend l'adresse IP de source et détermine le meilleur itinéraire à emprunter pour la destination. À ce stade, c'est ce que l'on appelle l'adressage logique *(les adresses IP)*. Les adresses logiques sont utilisées pour ***ordonner les réseaux***, les ***catégoriser*** et nous ***permettre de les trier*** correctement. Actuellement, la forme d'adressage logique la plus courante est le format IPV4.

## La couche 2 : Liaison

La couche liaison de données se concentre sur l'*adressage physique de la transmission*. Il reçoit un paquet de la couche réseau (qui inclut l'adresse IP de l'ordinateur distant) et ajoute l'adresse physique (**MAC**) du point de terminaison de réception. Les adresses MAC sont définies par le fabricant et littéralement gravées dans la carte; ils ne peuvent pas être modifiés, bien qu'ils  puissent *être usurpés*. Lorsque des informations sont envoyées sur un réseau, c'est en fait l'adresse physique qui est utilisée pour identifier où exactement envoyer les informations. 

De plus, il incombe également à la couche liaison de données de présenter les données dans un format adapté à la transmission.

La couche liaison de données remplit également une fonction importante lorsqu'elle reçoit des données, car elle **vérifie les informations reçues** pour s'assurer qu'elles n'ont pas été corrompues lors de la transmission, ce qui pourrait bien se produire lorsque les données sont transmises par la couche 1 : la couche physique.

## La couche 1 : Physique

La couche physique va jusqu’au matériel de l’ordinateur. C'est là que les impulsions électriques qui constituent le transfert de données sur un réseau sont envoyées et reçues. C'est le travail de la couche physique de convertir les données binaires de la transmission en signaux et de les transmettre à travers le réseau, ainsi que de recevoir les signaux entrants et de les reconvertir en données binaires.

## L'encapsulation

Au fur et à mesure que les données sont transmises à chaque couche du modèle, davantage d'informations contenant des détails spécifiques à la couche en question sont ajoutées au début de la transmission. À titre d'exemple, l'en-tête ajouté par la couche réseau inclurait des éléments tels que les **adresses IP source et de destination**, et l'en-tête ajouté par la couche transport inclurait des informations spécifiques au **protocole utilisé**. La couche liaison de données ajoute également un élément à la fin de la transmission qui permet de **vérifier que les données n'ont pas été corrompues** lors de la transmission; cela présente également l'avantage supplémentaire d'une sécurité accrue, car les données ne peuvent pas être interceptées et falsifiées sans casser la chaine. L'ensemble de ce processus est appelé ***encapsulation***; le processus par lequel les données peuvent être envoyées d’un ordinateur à un autre.

![Schéma encapsulation](./img/encap.jpeg)

À noter que les données encapsulées reçoivent un nom différent à différentes étapes du processus. Dans les couches 7, 6 et 5, les données sont simplement appelées **données**. Dans la couche transport, les données encapsulées sont appelées **segment** ou **datagramme** (selon que TCP ou UDP a été sélectionné comme protocole de transmission). Au niveau de la couche réseau, les données sont appelées **paquets**. Lorsque le paquet est transmis à la couche liaison de données, il devient une **trame** et, au moment où il est transmis sur un réseau, la trame a été décomposée en **bits**.

Lorsque le message est reçu par le deuxième ordinateur, il inverse le processus : en commençant par la couche physique et en remontant jusqu'à atteindre la couche application, en supprimant les informations ajoutées au fur et à mesure. C'est ce qu'on appelle la ***désencapsulation***. En tant que tel, on peut considérer les couches du modèle OSI comme existant à l’intérieur de chaque ordinateur doté de capacités réseau. Bien que ce ne soit pas aussi clair dans la pratique, les ordinateurs suivent tous le même processus d'*encapsulation* pour envoyer des données et de *désencapsulation* dès leur réception.

Les processus d'*encapsulation* et de *désencapsulation* sont très importants, notamment en raison de leur utilisation pratique, mais aussi parce qu'ils nous fournissent une **méthode standardisée** pour l'envoi de données. Cela signifie que toutes les transmissions **suivront systématiquement la même méthodologie**, permettant à tout appareil compatible réseau d'envoyer une requête à tout autre appareil accessible et d'être sûr qu'elle sera comprise, qu'ils proviennent ou non du même fabricant; utiliser le même système d'exploitation; ou tout autre facteur.

<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Intro to Networking*" :
https://tryhackme.com/room/introtonetworking
:::