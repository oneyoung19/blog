const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'OneYoung’s Blog',
  description: '个人技术博客',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['meta', { name: 'google', content: 'notranslate' }],
    // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    // [百度统计](https://tongji.baidu.com/) jsgoshu
    ['script', {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b5edcf6b1a12076f348b1de5dd83a662";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    // Microsoft Clarity
    ['script', {},
      `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "o1h2x0tjoo");`
    ]
  ],
  base: '/blog/', // 这是部署到github相关的配置。 静态资源配置的时候直接用绝对路径。如果不是根目录'/'访问的话，需要设置前缀。
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 顶部导航栏
    nav,
    // 侧边栏
    sidebar,
    // 启用页面滚动
    smoothScroll: true
  },

  plugins: [
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       // https://console.leancloud.cn/apps
    //       appId: 'ccIeswuNL6YvgOEPNy8dNUw1-gzGzoHsz',
    //       appKey: 'BzQJId2ohzdvuF2bBkSQ5dvK'
    //     }
    //   }
    // ]
    // https://www.npmjs.com/package/vuepress-plugin-code-copy
    ['vuepress-plugin-code-copy', {
      // align: 'top',
      color: '#3F916A'
    }],
    // [
    //   'vuepress-plugin-comment-plus',
    //   {
	  //     choosen: 'waline',
    //     // options选项中的所有参数，会传给Waline的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       serverURL: 'https://vuepress-waline-vercel.vercel.app',
    //       // TODO:需升级vuepress至2.0+ 然后更新@waline/client
    //       comment: true,
    //       pageview: true
    //     }
    //   }
    // ]
  ]
}
