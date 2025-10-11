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
// Page info
import PageInfo from '../components/PageInfo.vue'
// Reading progress
import Layout from './Layout.vue'
import ReadingProgress from '../components/ReadingProgress.vue'
// FileTree
import FileTree from '../components/FileTree.vue'
// TreeItem
import TreeItem from '../components/TreeItem.vue'
//ESDinfo
import ESDInfo from '../components/ESDInfo.vue'
//AIS
import ais from '../components/ais.vue'


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
        h(NolebaseHighlightTargetedHeading), h(ReadingProgress),
      ],
      // Page info
      'aside-top': () => h(PageInfo),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PageInfo', PageInfo)
    app.component('FileTree', FileTree)
    app.component('TreeItem', TreeItem)
    app.component('ESDInfo', ESDInfo)
    app.component('ais', ais)
  }
} satisfies Theme
