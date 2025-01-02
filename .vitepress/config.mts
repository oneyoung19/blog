import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "oneyoung19's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oneyoung19' }
    ]
  },
  srcDir: 'docs',
  cleanUrls: true
})
