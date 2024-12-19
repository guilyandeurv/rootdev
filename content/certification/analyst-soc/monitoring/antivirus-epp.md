---
sidebar: auto
date: 2024-12-19
---

# Analyse SOC : L'antivirus et EPP
<ESDInfo />

## L'antivirus, l'indispensable

Les remontées d'un antivirus peuvent se montrer intéressantes sur les items suivants :
* détection d'AV, programmes non désirés
* extraction de mot de passe (Mimikatz, base SAM)
* mise à jour non réussie
* plusieurs infections dans un temps très court

## Logs Windows Defender

Liste non exhaustive des logs Windows Defender :

* ***1002*** : scan stoppé
* ***1006*** : malware détecté
* ***1008*** : action sur malware échoué
* ***2001*** : mise à jour des signatures échouée

