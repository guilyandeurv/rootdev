---
sidebar: auto
---
# Stéganographie 
<Badge type="tip" text="Rédigé le 13/10/2024" />
<Badge type="warning" text="En cours de rédaction" />

## Introduction

La stéganographie est un procédé de dissimulation d'un message au sein de données. Grossomodo : cacher un fichier texte par exemple, dans une image, un fichier audio, etc. Pour cela, on utilise des logiciels de stéganographie tel que steghide. Cependant, ce procédé est populaire, et donc des outils pour extraire les données sont disponibles, d'où l'importance de chiffrer les données.

## Fonctionnalités de *Steghide*

* **Compression des données embarquées** ** : Steghide permet de compresser les données avant de les cacher, ce qui peut réduire l'espace de stockage nécessaire. On peut spécifier le niveau de compression entre 1 (meilleure vitesse) et 9 (meilleure compression).
* **Chiffrement des données embarquées** : Les données cachées peuvent être chiffrées à l'aide de divers algorithmes de chiffrement, notamment Rijndael (AES) et Blowfish.
* **Vérification de l'intégrité des données** : Steghide intègre une fonction de vérification de l'intégrité des données cachées en utilisant un checksum CRC32. Cela garantit que les données extraites sont intactes et non corrompues.
* **Informations sur un fichier** : On peut obtenir des informations sur les fichiers stéganographiques, y compris le format, la capacité et l'algorithme de chiffrement utilisé. Cela se fait en utilisant la commande `steghide info filename`.

### Formats de fichiers supportés

Steghide supporte les formats de fichiers suivants :

#### Images :
* JPEG
* GIF
* BMP

#### Audio :
* WAV
* AU.

Ce sont les seuls formats supportés, en revanche, il n'y a pas de restriction sur le ficher à "*stéganographier*", par exemple un `.exe` peut être stéganographié et extrait sans problème d'un fichier `.jpeg`.

### Utilisation de Steghide

#### Cacher des données :

```bash
steghide embed -cf filename.jpg -ef data.txt -sf filename-with-data.jpg
```

Ici, on vient de cacher le fichier `data.txt` dans le fichier `filename.jpg`, et on a obtenu le fichier `filename-with-data.jpg`.

L'argument `-cf` désigne le fichier "source" qui sera utilisé pour cacher les données, ici une image.
L'argument `-ef` désigne le fichier "embarqué" qui contiendra les données cachées.
L'argument `-sf` désigne le fichier "source" avec les données cachées.

#### Extraire des données :

```bash
steghide extract -sf filename-with-data.jpg -xf getdata.txt
```

Ici, on vient de extraire les données cachées dans le fichier `filename-with-data.jpg`, et on a obtenu le fichier `getdata.txt` grâce à l'argument `-xf`.

Cela est l'utilisation la plus simplée de cet outil, il suffit de faire une recherche sur le fichier pour se rendre compte de son contenu. On va donc complexifier un peu les choses.

#### Compression et chiffrement :

```bash
steghide embed -cf filename.jpg -ef data.txt -sf filename-with-data.jpg -e rijndael-128 -z 6
Entrez la phrase de passe : 
Réentrez la phrase de passe : 
intégration de "secret.txt" dans "image.jpg"... fait
```

Ici, on vient de cacher le fichier `data.txt` dans le fichier `filename.jpg`, et on a obtenu le fichier `filename-with-data.jpg`, comme précédemment.
Cependant, on a aussi spécifié que l'on souhaite chiffrer les données avec le chiffrement Rijndael-128, également connu sous le nom d'AES, et que l'on souhaite que le fichier final soit compressé à un niveau de 6 (niveau de compression moyen).

* L'argument **`e rijndael-128`** : Chiffre avec le chiffrement Rijndael-128, également connu sous le nom d'AES.
* L'argument **`z 6`** : Compression avec un niveau 6 (niveau de compression moyen).

#### Extraction :

```bash
steghide extract -sf filename-with-data.jpg -xf getdata.txt -p [passphrase]
```

L'argument **`-p [passphrase]`** permet de spécifier le mot de passe à utiliser pour déchiffrer les données cachées, qui a été défini lors de la première étape.   




::: info Sources
Ce cours s'inspire de connaissances personnelles, des informations complémentaires peuvent être trouvées ici rédigées par **@ria.banerjee005**:
https://medium.com/@ria.banerjee005/steganography-tools-techniques-bba3f95c7148 

:::