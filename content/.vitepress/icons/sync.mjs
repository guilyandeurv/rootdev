/**
 * Reconstruit la liste `LUCIDE` du registre à partir des sources.
 *
 * Le script relit `config.mjs`, le thème et les composants, y collecte les noms
 * d'icônes utilisés (`ic('…')`, `icon: '…'`, `name="…"`), ne garde que ceux qui
 * existent réellement dans Lucide, puis réécrit le registre et la feuille de
 * style. Lancer après avoir ajouté ou renommé une icône :
 *
 *     npm run icons:sync
 */

import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { BRANDS } from './registry.mjs'
import { buildIconCss } from './build.mjs'

const require = createRequire(import.meta.url)
const HERE = dirname(fileURLToPath(import.meta.url))
// `content/` et pas seulement `.vitepress/` : les pages Markdown posent des
// `<RdIcon name="…" />` dans leurs titres, il faut aussi les scanner.
const CONTENT_ROOT = resolve(HERE, '../..')
const REGISTRY = join(HERE, 'registry.mjs')

const SCANNED_EXTENSIONS = ['.mjs', '.js', '.ts', '.vue', '.md']
const IGNORED_DIRS = new Set(['cache', 'dist', 'node_modules', 'icons'])

/* `ic('…')` et `icon: '…'` ne désignent qu'une icône : un nom inconnu est une
   faute de frappe, on s'arrête. `name="…"` est trop courant en Vue pour être
   sûr — on ne garde que ce qui existe vraiment dans Lucide. */
const STRICT = /(?:\bic\(|\bicon:\s*)["']([a-z][a-z0-9-]*)["']/g
const LOOSE = /\bname=["']([a-z][a-z0-9-]*)["']/g

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)

    if (statSync(full).isDirectory()) {
      if (!IGNORED_DIRS.has(entry)) yield* walk(full)
      continue
    }

    if (SCANNED_EXTENSIONS.some((ext) => entry.endsWith(ext))) yield full
  }
}

function collectNames() {
  const strict = new Map()
  const loose = new Set()

  for (const file of walk(CONTENT_ROOT)) {
    const source = readFileSync(file, 'utf8')
    for (const [, name] of source.matchAll(STRICT)) strict.set(name, file)
    for (const [, name] of source.matchAll(LOOSE)) loose.add(name)
  }

  return { strict, loose }
}

const lucide = require('@iconify-json/lucide/icons.json')
const known = new Set([...Object.keys(lucide.icons), ...Object.keys(lucide.aliases ?? {})])
const brands = new Set(Object.keys(BRANDS))

const { strict, loose } = collectNames()

const unknown = [...strict].filter(([name]) => !known.has(name) && !brands.has(name))
if (unknown.length) {
  console.error('Icônes inconnues (ni Lucide, ni logo déclaré) :')
  for (const [name, file] of unknown) console.error(`  - ${name}  (${file})`)
  process.exit(1)
}

const names = [...new Set([...strict.keys(), ...loose])]
  .filter((name) => !brands.has(name) && known.has(name))
  .sort()

const source = readFileSync(REGISTRY, 'utf8')
const block = `export const LUCIDE = [\n${names.map((n) => `  '${n}',`).join('\n')}\n]`
const updated = source.replace(/export const LUCIDE = \[[\s\S]*?\n\]/, block)

if (updated === source && !source.includes(block)) {
  console.error('Bloc LUCIDE introuvable dans registry.mjs.')
  process.exit(1)
}

writeFileSync(REGISTRY, updated, 'utf8')

const { count } = buildIconCss({ lucideNames: names })
console.log(`icons: ${names.length} icônes Lucide + ${brands.size} logos → ${count} règles CSS`)
