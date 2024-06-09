// import Vue from 'vue'
import { MediaRecorder } from './plugins/@cbibank/media'
import './plugins/@cbibank/media/styles/index.css'

// 应用级别配置
export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.component('MediaRecorder', MediaRecorder)
  router.beforeEach((to, from, next) => {
    if (typeof _hmt !== "undefined") {
      if (to.path) {
        // 由VuePress生成的每个页面都有自己的预渲染静态HTML，提供了良好的加载性能和seo友好。然而，一旦页面被加载，Vue将接管静态内容并将其转换为完整的单页应用程序(Single-Page Application, SPA)。当用户在站点中导航时，会根据需要获取额外的页面。
        // 所以这里针对单页面应用添加额外的百度统计
        _hmt.push(["_trackPageview", to.fullPath])
      }
    }
    next()
  })
}
