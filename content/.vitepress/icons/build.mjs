/**
 * Génère `icons.generated.css` à partir des jeux Iconify installés.
 *
 * Chaque icône devient une variable CSS contenant le SVG en data-URI, appliqué
 * en `mask`. L'icône prend donc la couleur du texte (`currentColor`) et suit sa
 * taille (`1em`) : un seul rendu sert le thème clair, le thème sombre et les
 * états de survol, sans webfont ni requête réseau.
 */

import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import { BRANDS, LUCIDE } from './registry.mjs'

const require = createRequire(import.meta.url)
const HERE = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(HERE, 'icons.generated.css')

/* Le trait de Lucide est à 2 par défaut ; le site dessine ses icônes Vue à
   1.75. On aligne les deux pour que sidebar et cartes aient la même densité. */
const STROKE_WIDTH = '1.75'

function loadSet(pkg) {
  return require(`@iconify-json/${pkg}/icons.json`)
}

/** Résout une icône Iconify en SVG autonome, alias et décalages compris. */
function toSvg(set, name, setName) {
  const alias = set.aliases?.[name]
  const icon = set.icons[name] ?? (alias ? set.icons[alias.parent] : undefined)

  if (!icon) {
    throw new Error(
      `Icône introuvable : "${name}" dans le jeu "${setName}". ` +
        `Vérifiez le nom sur https://icones.js.org/collection/${setName}`
    )
  }

  const width = icon.width ?? set.width ?? 24
  const height = icon.height ?? set.height ?? 24
  const left = icon.left ?? set.left ?? 0
  const top = icon.top ?? set.top ?? 0

  let body = icon.body
  if (setName === 'lucide') {
    body = body.replace(/stroke-width="2"/g, `stroke-width="${STROKE_WIDTH}"`)
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${left} ${top} ${width} ${height}">${body}</svg>`
}

/**
 * Teinte déterministe (0-359°) à partir du nom de l'icône : chaque icône
 * garde toujours la même couleur d'une build à l'autre, sans registre de
 * couleurs à maintenir à la main. `icon.scss` transforme ce degré en
 * `hsl(...)`, avec une saturation/luminosité fixes qui s'adaptent au thème
 * clair/sombre.
 */
function hueForName(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = (Math.imul(hash, 31) + name.charCodeAt(i)) >>> 0
  }
  return hash % 360
}

/** Encodage minimal : seuls les caractères qui cassent une url() CSS. */
function toDataUri(svg) {
  const escaped = svg
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ')

  return `data:image/svg+xml,${escaped}`
}

/**
 * @param {object}   [sets]
 * @param {string[]} [sets.lucideNames] surcharge la liste du registre (utilisé
 *   par `sync.mjs`, qui vient de la réécrire et ne peut pas la relire).
 */
export function buildIconCss({ lucideNames = LUCIDE } = {}) {
  const lucide = loadSet('lucide')
  const simpleIcons = loadSet('simple-icons')

  const rules = []

  for (const name of lucideNames) {
    rules.push([name, toDataUri(toSvg(lucide, name, 'lucide'))])
  }

  for (const [name, id] of Object.entries(BRANDS)) {
    rules.push([name, toDataUri(toSvg(simpleIcons, id, 'simple-icons'))])
  }

  const css = `/* Généré par content/.vitepress/icons/build.mjs — ne pas éditer à la main. */
.rd-i {
  display: inline-block;
  flex: none;
  width: 1em;
  height: 1em;
  vertical-align: -0.145em;
  background-color: currentColor;
  -webkit-mask: var(--rd-i) no-repeat center / 100% 100%;
  mask: var(--rd-i) no-repeat center / 100% 100%;
}

${rules
    .map(([name, uri]) => `.rd-i-${name} { --rd-i: url("${uri}"); --rd-i-hue: ${hueForName(name)}; }`)
    .join('\n')}
`

  /* Réécriture uniquement si le contenu change : évite de réveiller le HMR de
     Vite à chaque démarrage. */
  let current = ''
  try {
    current = readFileSync(OUTPUT, 'utf8')
  } catch {
    /* premier passage */
  }

  if (current !== css) {
    writeFileSync(OUTPUT, css, 'utf8')
  }

  return { path: OUTPUT, count: rules.length }
}

/* Exécution directe : `node content/.vitepress/icons/build.mjs`. */
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const { count } = buildIconCss()
  console.log(`icons: ${count} icônes écrites dans icons.generated.css`)
}
