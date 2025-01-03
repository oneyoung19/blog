import { defineConfig } from 'vitepress'
import navbar from './navbar'
import { withSidebar } from 'vitepress-sidebar'
import getSidebar from './traverseSidebar'

import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  base: '/blog/',
  title: "Blog",
  description: "oneyoung19's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oneyoung19' }
    ]
  },
  srcDir: 'docs',
  cleanUrls: true,
  markdown: {
    config: (md) => {
      // https://github.com/zh-lx/vitepress-demo-plugin
      md.use(vitepressDemoPlugin)
      // Avoids rendering <script> and <style> tags and extract them into to markdown-it env.sfcBlocks.
      // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc
    }
  }
}

const sidebarList = getSidebar()
const sidebarConfig = sidebarList.map(path => {
  return {
    documentRootPath: 'docs',
    scanStartPath: path,
    resolvePath: `/${path}/`,
    // useFolderLinkFromIndexFile: true,
    useFolderTitleFromIndexFile: true,
    useTitleFromFrontmatter: true,
    includeFolderIndexFile: true, // 侧边栏显示index.md
  }
})

export default defineConfig(withSidebar(vitepressConfig, sidebarConfig))
