// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './all.scss'
import './badge.scss'
import './button.scss'
import './colors.scss'
import './doc-blocks.scss'
import './doc.scss'
import './home-links.scss'
import './home.scss'
import './icon.scss'
import './picture.scss'
// Lien sur page d'accueil pour les annonces
import { Announcement } from '@theojs/lumen'
// Lien sur le técô
import { DocAsideLogo } from '@theojs/lumen'
import { Aside_Data } from '../data/AsideData'
// Partager la page
import { ShareButton } from '@theojs/lumen'
// Enhanced readabilities
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
// Highlight targeted headings
import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Ajoute un lien sur la page d'accueil pour les annonces
      'home-hero-info-before': () => h(Announcement),
      // Liens sur le técô
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'aside-outline-before': () =>
        h(ShareButton, {
          buttonIcon: 'fas fa-share-alt', // Logo share
          buttonText: ' Partager cette page', // Texte sur le bouton
          copiedIcon: 'fas fa-thumbs-up', // Logo une fois cliqué
          copiedText: 'Lien copié !', // Texte après copie
         }),
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      // A highlight targeted headings
      'layout-top': () => [ 
        h(NolebaseHighlightTargetedHeading), 
      ],
    })
  },
  enhanceApp({ app, router, siteData }) {
    
  }
} satisfies Theme
