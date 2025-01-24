// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Xgplayer from "./components/Xgplayer.vue"
import Confetti from "./components/Confetti.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import SwitchDarkLayout from "./components/SwitchDarkLayout.vue"

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'

import giscusTalk from 'vitepress-plugin-comment-with-giscus'

import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout: SwitchDarkLayout,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)
    app.component('Xgplayer', Xgplayer)
    app.component('Confetti', Confetti)
    app.component('HomeUnderline', HomeUnderline)
    // app.component('SwitchDarkLayout', SwitchDarkLayout)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }) // 默认
      mediumZoom('.main img') // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    }
    onMounted(() => {
      initZoom()
      
      // 特定浏览器去除渐变效果
      const userAgent = window.navigator.userAgent.toLowerCase()
      if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
        window.document.documentElement.classList.add('browser-safari')
      } else if (userAgent.includes('firefox')) {
        window.document.documentElement.classList.add('browser-firefox')
      }
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )

    const { frontmatter } = useData()
    // https://github.com/T-miracle/vitepress-plugin-comment-with-giscus
    giscusTalk(
      {
        repo: "YoungCollect/starter-vitepress",
        repoId: "R_kgDONu3gXQ",
        category: "Announcements",
        categoryId: "DIC_kwDONu3gXc4CmTaY",
        mapping: "pathname",
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "bottom",
        theme: "preferred_color_scheme",
        lang: "zh-CN",
        loading: "lazy",
        // homePageShowComment: true // 该属性是为了确认设置layout为home时，页面是否显示评论，但vitepress-plugin-comment-with-giscus@1.1.15版本与vitepress@1.5.0版本不兼容
      },
      {
        frontmatter,
        route
      },
      // 开发环境下默认关闭 可以在frontmatter中设置comment来自定义文档控制
      // import.meta.env.DEV ? false : true
    )
  }
} satisfies Theme
