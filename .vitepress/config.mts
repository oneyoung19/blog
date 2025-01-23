import { defineConfig } from 'vitepress'
import navbar from './navbar'
import { withSidebar } from 'vitepress-sidebar'
import getSidebar from './traverseSidebar'

import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import vitepressProtectPlugin from "vitepress-protect-plugin"

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  base: '/blog/',
  title: "OneYoung's Blog",
  description: "OneYoung's personal tech blog, focusing on Web Frontend development, JavaScript, and related technologies",
  head: [
    // ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
    ['link', { rel: 'icon', href: '/blog/avatar.jpeg' }]
  ],
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh-hans'
  //   },
  //   en: {
  //     label: 'English',
  //     lang: 'en',
  //     link: '/en/'
  //   }
  // },
  themeConfig: {
    logo: '/avatar.jpeg',
    siteTitle: 'OneYoung',
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    // sidebar
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oneyoung19' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/oneyoung19/blog/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/oneyoung19">OneYoung</a>'
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
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    config: (md) => {
      // https://github.com/zh-lx/vitepress-demo-plugin
      md.use(vitepressDemoPlugin)
      // https://github.com/yuyinws/vitepress-plugin-group-icons
      md.use(groupIconMdPlugin)
      // Avoids rendering <script> and <style> tags and extract them into to markdown-it env.sfcBlocks.
      // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin(), //代码组图标
      // vitepressProtectPlugin({
      //   disableF12: false, // 禁用F12开发者模式
      //   disableCopy: false, // 禁用文本复制
      //   disableSelect: false, // 禁用文本选择
      // })
    ]
  }
}

// https://github.com/jooy2/vitepress-sidebar
const sidebarList = getSidebar()
const sidebarConfig = sidebarList.map(path => {
  return {
    documentRootPath: 'docs',
    scanStartPath: path,
    resolvePath: `/${path}/`,
    // useFolderLinkFromIndexFile: true,
    useFolderTitleFromIndexFile: true,
    useTitleFromFrontmatter: true,
    // sortMenusByName: true,
    manualSortFileNameByPriority: ['index.md'],
    // sortMenusOrderNumericallyFromTitle: true
    sortMenusOrderNumericallyFromLink: true,
    // TODO: 侧边栏策略 需要优化
    includeFolderIndexFile: true, // 侧边栏显示index.md
  }
})

export default defineConfig(withSidebar(vitepressConfig, sidebarConfig))
