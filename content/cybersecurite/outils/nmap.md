---
sidebar: auto
---
# Nmap
<Badge type="tip" text="Rédigé le 24/03/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Introduction & explications

<img src="./img/nmap.png" width="100" height="100">

Supposons que l'on ait reçu une adresse IP (ou plusieurs adresses IP) sur laquelle effectuer un audit de sécurité. Avant de faire quoi que ce soit d’autre, on doit **avoir une idée du « paysage » qui va être attaquer**. Cela signifie que l'on doit **établir quels services fonctionnent sur les cibles**. 

Par exemple, l’un d’eux exécute peut-être un serveur Web et un autre agit en tant que contrôleur de domaine Windows Active Directory. La première étape dans l’établissement de cette « carte » du paysage est ce qu’on appelle le **scanning des ports**. Lorsqu'un ordinateur exécute un service réseau, il ouvre une construction réseau appelée « port » pour recevoir la connexion. ***Les ports sont nécessaires pour effectuer plusieurs requêtes réseau*** ou pour disposer de plusieurs services. Lorsque l'on charge plusieurs pages Web à la fois dans un navigateur Web, le programme doit disposer d'un moyen de déterminer quel onglet charge quelle page Web. Cela se fait en établissant des connexions aux serveurs Web distants en utilisant différents ports sur l'ordinateur local. De même, si on souhaite qu'un serveur puisse exécuter plusieurs services (par exemple, on veut peut-être que le serveur Web exécute à la fois les versions HTTP et HTTPS du site), on a alors besoin d'un moyen de diriger le trafic vers le service approprié. Encore une fois, les ports sont la solution à ce problème. Les connexions réseau sont établies entre deux ports : un port ouvert en écoute sur le serveur et un port sélectionné au hasard sur l'ordinateur.

Chaque ordinateur dispose d'***un total de 65 535 ports*** disponibles. Cependant, bon nombre d'entre eux sont enregistrés comme ports standard. Par exemple, un Webservice HTTP se trouve presque toujours sur le port 80 du serveur. Un service Web HTTPS peut être trouvé sur le port 443. Windows NETBIOS peut être trouvé sur le port 139 et SMB peut être trouvé sur le port 445. 

## Options de Nmap

Nmap est accessible en tapant `nmap` dans la ligne de commande du terminal, suivi de certaines des "options" (arguments de commande qui indiquent à un programme de faire différentes choses).

```shell
┌─[root@parrot]─[~/Desktop]
└──╼ nmap -h
Nmap 7.60 ( https://nmap.org )
Usage: nmap [Scan Type(s)] [Options] {target specification}
[...] # Beaucoup d'options...
EXAMPLES:
  nmap -v -A scanme.nmap.org
  nmap -v -sn 192.168.0.0/16 10.0.0.0/8
  nmap -v -iR 10000 -Pn -p 80
```

<hr>
<br>

::: info Sources
Ce cours s'inspire (et utilise les images) de TryHackMe.com de la chambre "*Nmap*" :
https://tryhackme.com/r/module/nmap
:::

