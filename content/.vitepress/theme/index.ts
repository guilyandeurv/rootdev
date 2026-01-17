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
import '@fortawesome/fontawesome-free/css/all.min.css'
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
// Page ContentPage
import ContentPage from './components/ContentPage.vue'
// Page Rootar.io
import GameRootario from './components/GameRootario.vue'
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
    app.component('ContentPage', ContentPage)
    app.component('GameRootario', GameRootario)
    app.component('RustPresentation', RustPresentation)
  }
} satisfies Theme
