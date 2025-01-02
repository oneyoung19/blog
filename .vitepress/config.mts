import { defineConfig } from 'vitepress'
import navbar from './navbar'
import { withSidebar } from 'vitepress-sidebar'
import getSidebar from './traverseSidebar'

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
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
  cleanUrls: true
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
