---
sidebar: auto
---
# PRINCIPES DE SECURITE 
<Badge type="warning" text="En cours de rédaction" />
::: tip Bases de la cybersécurité

On va décrire ici les principaux fondamentaux de la sécurité, notamment les cadres utilisés pour protéger les données et les systèmes.
Les mesures, cadres & protocoles que l'on va découvrir sont utiles au rôle de la "défense en profondeur", qui consiste à utiliser plusieurs couches de sécurité variées pour les systèmes et les données d'une orga, afin qu'elles assurent la redondance de la sécurisation d'une organisation.
:::

##   1 - La triade de la CIA

Il s'agit d'un modèle de la sécurité (comme le modèle OSI pour le réseau) qui est utilisé tout au long de la création d'une politique de sécurité.
Ce modèle est plutôt ancien (98), car il ne commence et/ou ne se termine pas avec la cybersécurité, mais s’applique plutôt à des scénarios tels que le classement, le stockage des enregistrements, etc.

Il est composé de trois sections :
*   La confidentialité
*   L'intégrité
*   La disponibilité

Ce modèle est devenu un standard de l'industrie, car il aide notamment à déterminer la valeur des données, dont notamment l'attention dont elles ont besoin de la part de l'entreprise.

La triade de la CIA est différente d'un modèle traditionnel dans lequel vous avez des sections individuelles ; il s’agit plutôt d’un cycle continu. Même si les trois éléments de la triade de la CIA peuvent sans doute se chevaucher, si un seul élément n’est pas respecté, alors les deux autres deviennent inutiles (semblable au triangle du feu). Si une politique de sécurité ne répond pas à ces trois sections, elle est rarement une politique de sécurité efficace.

### 1 - La confidentialité

Il s'agit de l'élément de protection des données contre tout accès non autorisé et toute utilisation abusive. 
Les organisations auront toujours des données d'une certaine valeur et d'un niveau de sensibilité stockées sur leurs systèmes. Assurer la confidentialité, c'est protéger des parties auxquelles elles ne sont pas destinées.

### 2 - L'intégrité

Il s'agit de la condition dans laquelles les informations restent exactes & cohérentes, outre le cas où des modifs autorisées sont appliquées.
L'intégrité est maintenue lorsque ces informations restent inchangées pendant le stockage, la transmission et l'utilisation n'impliquant pas la modification des infos.
Il faut donc prendre des mesures afin que ces données ne soient pas susceptibles d'être modifiées, bougées etc.. par des personnes non autorisées.

### 3 - La disponibilité

Afin que ces données soient utiles, elles doivent pouvoir être disponibles & accessibles par les utilisateurs dont l'accès leur est autorisé.
La disponibilité est un facteur clé d'une organisation : celles qui proposent des services web par exemple, doivent avoir des accès disponibles à ses utilisateurs en permanence, lorsqu'il ne l'est pas, cela entraîne une atteinte à la réputation de celle-ci et potentiellement une perte financière.

##   2 - Principes de privilèges

Notamment afin de garantir la triade de la CIA, il est essential de correctement définir les différents niveaux d'accès à un système selon les besoins des utilisateurs.
Ces rôles sont accordés selon deux critères :
*   Le rôle/la fonction de l'utilisateur
*   La sensibilité des infos stockées sur les systèmes

Deux concepts clés sont utilisés pour attribuer et gérer les droits d'accès des individus, deux concepts clés sont utilisés : Privileged Identity Management (PIM) et Privileged Access Management (ou PAM en abrégé).

PIM est utilisé pour traduire le rôle d'un utilisateur selon un rôle d'accès sur le système, alors que PAM gère la gestion des privilèges dont dispose le rôle d'accès d'un système.

### Le principe du moindre privilège

Les utilisateurs doivent bénéficier d'uniquement les outils & accès qui leur sont nécessaires.
::: danger Important
JAMAIS donner les droits d'accès identiques à tout le monde. Ceux-ci doivent être correctement administrés.
:::
On ne donne pas la gestion des comptes à l'agent d'entretien, tout comme on ne donne pas la gestion d'un server à la secretaire.

Seulement les accès nécessaire à l'aboutissement des fonctions des utilisateurs.

##   3 - Modelisation des menaces & réponse aux incidents

Il s'agit d'un processus d'examen, d'amélioration & de test des protocoles de sécurité mis en place dans l'infrastructure et services d'une organisation.
Elle consiste à identifier les menaces probables auxquelles une application ou un système peut-être confronté, ainsi que ses vulnérabilités.

Le processus de modélisation des menaces repose sur 4 principes :
*   La préparation
*   L'identification
*   L'atténuation
*   La révision


Cependant, le processus plus complexe du modèle des menaces lui comprend :
*   Le renseignement sur les menaces
*   L'identification des actifs
*   La capacité d'atténuation
*   L'évaluation des risques


Les incidents sont classés selon une évaluation de l'urgence et de l'impact. L'urgence sera déterminée par le type d'attaque rencontrée, l'impact sera déterminé par le système affecté et l'impact sur les opérations commerciales.

  | Impact/Urgence  |   Elevé    |   Moyen  |   Faible |
  |-----------------|------------|----------|----------|
  | Elevé           |      1     |     2    |     3    |
  | Moyen           |      2     |     3    |     4    |
  | Faible          |      2     |     4    |     5    |


::: details Exemples dans le support informatique
Impact élevé & urgence élevée : **P1**

Impact faible & urgence faible : **P5**
:::

