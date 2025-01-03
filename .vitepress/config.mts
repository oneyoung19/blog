import { defineConfig } from 'vitepress'
import navbar from './navbar'
import { withSidebar } from 'vitepress-sidebar'
import getSidebar from './traverseSidebar'

import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  base: '/blog/',
  title: "One Young's Blog",
  description: "One Young's personal tech blog, focusing on Web Frontend development, JavaScript, and related technologies",
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  themeConfig: {
    logo: '/avatar.jpeg',
    siteTitle: 'One Young',
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    // sidebar
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oneyoung19' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/oneyoung19">Andy Yang</a>'
    },
    editLink: {
      pattern: 'https://github.com/oneyoung19/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local'
    }
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
