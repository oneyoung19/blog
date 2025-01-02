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
  cleanUrls: true,
  markdown: {
    config: (md) => {
      // Avoids rendering <script> and <style> tags and extract them into to markdown-it env.sfcBlocks.
      // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc
      // md.renderer.rules.html_block
      // md.use((md, options) => {
      //   md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
      //     const { script, style } = env.sfcBlocks
      //     if (script) {
      //       console.log(script)
      //     }
      //     return self.renderToken(tokens, idx, options)
      //   }
      // }, {
      //   html: true
      // })
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
