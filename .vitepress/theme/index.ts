// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Xgplayer from "./components/Xgplayer.vue"

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'

import giscusTalk from 'vitepress-plugin-comment-with-giscus'

import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)
    app.component('Xgplayer', Xgplayer)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }) // 默认
      mediumZoom('.main img') // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )

    const { frontmatter } = useData()
    // https://github.com/T-miracle/vitepress-plugin-comment-with-giscus
    giscusTalk(
      {
        repo: 'oneyoung19/blog', //仓库
        repoId: 'R_kgDOMG4rmg', //仓库ID
        category: 'Announcements', // 讨论分类
        categoryId: 'DIC_kwDOMG4rms4CltwA', //讨论分类ID
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
      },
      {
        frontmatter,
        route
      },
      // 开发环境下默认关闭 可以在frontmatter中设置comment来自定义文档控制
      import.meta.env.DEV ? false : true
    )
  }
} satisfies Theme
