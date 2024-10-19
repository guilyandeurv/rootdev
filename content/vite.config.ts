import { join } from 'node:path'
import { defineConfig } from 'vite'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig(() => {
  return {
    plugins: [ 
      GitChangelog({ 
        // Fill in your repository URL here
        repoURL: () => 'https://github.com/nolebase/integrations', 
      }), 
      GitChangelogMarkdownSection(), 
    ]
    // other vite configurations...
  }
})