import { defineConfig } from 'vitepress'
import navbar from './navbar'
// import sidebar from './sidebar'
import { withSidebar } from 'vitepress-sidebar'
import getSidebar from './traverseSidebar'

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  title: "Blog",
  description: "oneyoung19's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    // sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oneyoung19' }
    ]
  },
  srcDir: 'docs',
  cleanUrls: true
}

const sidebarList = getSidebar('docs', 1)
console.log(sidebarList)
const sidebarConfig = sidebarList.map(path => {
  return {
    documentRootPath: 'docs',
    scanStartPath: path,
    resolvePath: `/${path}/`,
    useTitleFromFrontmatter: true
  }
})

export default defineConfig(withSidebar(vitepressConfig, sidebarConfig))
