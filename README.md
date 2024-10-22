<img src="/content/public/logo-texte.png" width="100" height="100">

Ressources personnelles concernant la cybersécurité, le développement et le réseau.

<hr>

## [RootDev.fr](https://www.rootdev.fr) <img src="/content/public/logo.png" width="100" height="100">

Se met à jour automatiquement à chaque commit sur la branche `main` via [Kinsta.com](kinsta.com)

Propulsé par [VitePress](https://github.com/vuejs/vitepress).

## Déploiement

Copiez le contenu du projet, puis installez les dépendances :

```bash
npm add -D vitepress
```

Puis lancez la commande :

```bash
npm run docs:dev
```

## Création de la documentation

Pour créer une nouvelle page, créez un fichier dans le dossier `content` selon le thème et ajoutez le nom de la page dans `.vitepress/config.js` afin qu'il soit référencé dans la sidebar.

Une fois la page créée, vous pouvez la modifier à votre convenance selon les règles de [VitePress](https://vitepress.vuejs.org/guide/markdown.html).
