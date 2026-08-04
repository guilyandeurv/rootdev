---
sidebar: auto
redac: true
date: 2025-12-20
---

# <RdIcon name="gamepad-2" /> Documentation Rootar.io

## <RdIcon name="file-code" /> Structure du projet

Le projet suit une architecture React moderne basée sur Vite.

```bash
├── public/                # Assets statiques (logo.ico, sons)
├── src/
│   ├── assets/            # Images et styles globaux
│   ├── components/
│   │   ├── apps/          # Applications principales (Terminal, Shop, etc.)
│   │   │   └── sub/       # Sous-composants complexes (PortScanner)
│   │   ├── os/            # Composants système (Taskbar, LoginScreen)
│   │   └── ui/            # Éléments d'interface réutilisables (WindowFrame)
│   ├── data/              # Fichiers de configuration et constantes
│   ├── App.jsx            # Cœur de l'OS (State global & Gestionnaire de fenêtres)
│   └── main.jsx           # Point d'entrée React
```

## <RdIcon name="cpu" /> Composants système
`App.jsx` : C'est le noyau (Kernel) de l'application. Il gère l'état global qui ne doit pas être perdu lors de la fermeture d'une fenêtre.

Fonctions Clés :
* `initGame(username)` : Initialise une nouvelle session avec les stats de base.
* `handleHackResult(success, cheatData)` : La fonction la plus critique. Elle traite les gains d'argent, d'XP, la progression dans les niveaux et l'exécution des cheat codes.
* Boucles temporelles (`useEffect`) :
    * Gestion de la température (refroidissement passif).
    * Revenus passifs (Mining GPU).
    * Sauvegarde automatique dans le localStorage.

* `TaskBar.jsx` : Gère l'affichage des ressources système en temps réel.

* Animations : Utilise des `useEffect` pour déclencher des flashs visuels lors du gain d'argent ou d'XP.

* Moniteurs : Affiche les barres de progression pour la Trace, la Chaleur (Heat) et l'XP.

## <RdIcon name="app-window" /> Applications principales

`Terminal.jsx` : L'interface d'interaction principale. Elle gère trois modes : IDLE, SCANNING, et HACKING.

***Mécaniques importantes :***
* **Gestion de l'audio** : Utilise un système de "unlock" au clic pour contourner les restrictions des navigateurs.
* **Mode Hacking** : Compare l'input utilisateur en temps réel avec une suite de mots générée aléatoirement.

`PortScanner.jsx` (Sous-composant de Terminal) : Mini-jeu de synchronisation de fréquences.
* **Physique** : La vitesse de défilement est calculée selon `hardware.network`. Plus le niveau est haut, plus le jeu est lent.
* **Validation** : Vérifie si les 4 ports sont verrouillés sur la cible avant d'autoriser l'injection (hack).

`SignalMasker.jsx` : Simulateur de brouillage de signal avec physique d'inertie.
* **Physique du signal** : Utilise `requestAnimationFrame` pour gérer un déplacement fluide et chaotique du curseur.
* **Lien thermique** : Si `temp > 100`, la zone cible devient plus petite et le "drift" (dérive) s'accentue.

## <RdIcon name="gamepad-2" /> Configuration du jeu (`data/gameConfig.js`)

Ce fichier contient l'équilibrage du jeu. ***Ne modifiez pas la logique des composants, modifiez ces constantes pour ajuster la difficulté.***

|Objet|Description|
|-|-|
|`DIFFICULTY_CONFIG`|Définit le temps, l'XP et l'argent gagné pour chaque niveau de difficulté.|
|`HARDWARE_CATALOG`|Statistiques de chaque pièce (vitesse CPU, puissance Cooling, etc.).|
|`XP_TABLE`|Les seuils d'XP requis pour monter de niveau.|
|`HACK_DICT`|Liste des mots/commandes utilisés pendant le mini-jeu de hack.|

## <RdIcon name="terminal" /> Commandes administrateur (`sudo`)

Accessibles via le Terminal, à des fins de test des composants, fonctionnalités... :

* `sudo money [valeur]` : Injecte des crédits.
* `sudo xp [valeur]` : Ajoute de l'expérience.
* `sudo untrace` : Réinitialise immédiatement la barre de Trace.
* `sudo reset` : Déclenche le protocole de nettoyage complet du profil.

## <RdIcon name="volume-2" /> Système audio

Les sons sont chargés dynamiquement depuis des URLs distantes pour alléger le build.

* Typewriter : Feedback de saisie.
* Auth : Sons de connexion et de réussite système.
* Alerts : Bips d'erreurs et de détection.