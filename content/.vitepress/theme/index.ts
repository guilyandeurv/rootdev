// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// Jeu d'icônes du site (Lucide + Simple Icons), généré par `icons/build.mjs`.
import '../icons/icons.generated.css'
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
// Focus mode
import FocusMode from '../components/FocusMode.vue'
// Sommaire iconé (remplace le sommaire natif dans le panneau de droite)
import TocOutline from '../components/TocOutline.vue'
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
// Icône du jeu maison, utilisable dans les pages Markdown comme dans le thème
import RdIcon from '../components/RdIcon.vue'
// Bouton de repli de la sidebar, pour centrer le contenu de la page
import SidebarToggle from '../components/SidebarToggle.vue'
// Repli des sections de la page (entre deux titres `##`)
import SectionFold from '../components/SectionFold.vue'
// Page ContentPage
import ContentPage from './components/ContentPage.vue'
// Page Rust
import RustPresentation from './components/RustPresentation.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      // A highlight targeted headings
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading), h(ReadingProgress), h(SidebarToggle), h(SectionFold),
      ],
      // Panneau de droite : infos de page en tête, mode focus en pied, notre
      // sommaire iconé entre les deux (le sommaire natif reste calculé pour
      // le menu déroulant mobile, mais masqué ici — cf. `theme/aside.scss`).
      'aside-top': () => h(PageInfo),
      'aside-outline-before': () => h(TocOutline),
      'aside-outline-after': () => h(FocusMode),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PageInfo', PageInfo)
    app.component('FileTree', FileTree)
    app.component('TreeItem', TreeItem)
    app.component('ESDInfo', ESDInfo)
    app.component('ais', ais)
    app.component('RdIcon', RdIcon)
    app.component('ContentPage', ContentPage)
    app.component('RustPresentation', RustPresentation)
  }
} satisfies Theme
