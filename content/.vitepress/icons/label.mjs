/**
 * Fabrique les libellés icônés de la barre latérale et de la navigation.
 *
 * VitePress rend `text` via `v-html` : on y injecte donc un `<span>` masqué
 * qui porte l'icône, suivi du libellé. L'icône est décorative — le lecteur
 * d'écran ne lit que le texte.
 */

import { ICON_NAMES } from './registry.mjs'

/**
 * @param {string} name  nom court du registre (ex. `radar`, `brand-python`)
 * @param {string} text  libellé affiché
 */
export function ic(name, text) {
  if (!ICON_NAMES.has(name)) {
    throw new Error(
      `Icône "${name}" absente du registre (content/.vitepress/icons/registry.mjs). ` +
        `Ajoutez-la puis relancez \`npm run icons:sync\`.`
    )
  }

  return `<span class="rd-i rd-i-${name} rd-i-label" aria-hidden="true"></span>${escapeHtml(text)}`
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
