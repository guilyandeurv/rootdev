---
sidebar: auto
date: 2024-12-19
---

# <RdIcon name="file-lock" /> Analyse SOC : DLP, whitelist
<ESDInfo />

## <RdIcon name="file-lock" /> DLP pour la traçabilité

DLP (***D***ata ***L***oss ***P***rotection) permet d'ajouter le critère de traçabilité dans une organisation. En effet, la copie d'un fichier sur un appareil autre peut entraîner une alerte de sécurité afin de surveiller la potentielle exfiltration des données.

Il peut être avantageux de surveiller les seuils dans un SIEM.

## <RdIcon name="list-checks" /> Whitelist, blacklist

Heureusement, les whitelists & blacklists permettent de filtrer un maximum les domaines, IP déjà notifiées comme suspectes.

[Projet Github de hslatman](https://github.com/hslatman/awesome-threat-intelligence)