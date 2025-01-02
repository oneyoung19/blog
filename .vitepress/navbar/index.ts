export default [
  // 内部链接 以docs为根目录
  { 
    text: '前端基础', 
    items: [
      {
        text: 'Basic',
        items: [
          {
            text: 'HTML',
            link: '/FE/html/'
          }
        ]
      },
      {
        text: 'Feature',
        items: [
          {
            text: 'HTML5',
            link: '/FE/html5/'
          },
          {
            text: 'CSS3',
            link: '/FE/css3/1.start.md'
          },
          {
            text: 'Worker',
            link: '/FE/worker/1.WebWorker.md'
          },
          {
            text: 'PWA',
            link: '/FE/PWA/'
          },
          {
            text: 'Rendering',
            link: '/FE/rendering/1.start.md'
          }
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'BOM', link: '/FE/javascript/BOM/1.start.md' },
          { text: 'DOM', link: '/FE/javascript/DOM/1.start.md' },
          { text: 'ECMAScript', link: '/FE/javascript/ECMAScript/1.start.md' }
        ]
      },
      {
        text: 'JS进阶',
        items: [
          { text: 'ES6', link: '/FE/js-advance/es6/' },
          { text: 'Module', link: '/FE/js-advance/module/1.start.md' }
        ]
      }
    ]
  },
  {
    text: '框架及库',
    items: [
      {
        text: 'Axios',
        items: [
          {
            text: '基础使用',
            link: '/frame/axios/base/1.install.md'
          },
          {
            text: '源码解析',
            link: '/frame/axios/source-code/1.start.md'
          }
        ]
      },
      {
        text: 'Vue2',
        items: [
          {
            text: '基础使用',
            link: '/frame/vue2/base/1.start.md'
          },
          {
            text: 'compiler',
            link: '/frame/vue2/source-code/compiler/'
          },
          {
            text: 'core/global-api',
            link: '/frame/vue2/source-code/core/global-api/'
          },
          {
            text: 'core/instance',
            link: '/frame/vue2/source-code/core/instance/'
          },
          {
            text: 'core/observer',
            link: '/frame/vue2/source-code/core/observer/'
          },
          {
            text: 'core/vdom',
            link: '/frame/vue2/source-code/core/vdom/'
          },
          {
            text: 'v3/reactivity',
            link: '/frame/vue2/v3/reactivity/'
          }
        ]
      },
      {
        text: 'Nuxt',
        items: [
          {
            text: '基础使用',
            link: '/frame/nuxt/base/1.start.md'
          }
        ]
      },
      {
        text: 'Express',
        items: [
          {
            text: '基础使用',
            link: '/frame/express/base/1.start.md'
          },
          {
            text: '源码解析',
            link: '/frame/express/source-code/1.start.md'
          }
        ]
      },
      {
        text: 'Koa',
        items: [
          {
            text: '基础使用',
            link: '/frame/koa/base/1.start.md'
          },
          {
            text: '源码解析',
            link: '/frame/koa/source-code/1.start.md'
          }
        ]
      },
      {
        text: 'CryptoJs',
        items: [
          {
            text: '基础使用',
            link: '/frame/crypto-js/base/1.start.md'
          }
        ]
      }
    ]
  },
  {
    text: '计算机科学',
    items: [
      { text: 'String', link: '/cs/string/1.unicode.md' },
      { text: 'Digit', link: '/cs/digit/1.start.md' },
      // { text: 'TCP/IP', link: '/cs/Tcp/1.start.md' },
      { text: '二进制数据与文件', link: '/cs/binary-file/1.start.md' },
      {
        text: 'HTTP',
        items: [
          {
            text: '通信过程',
            link: '/cs/http/communication.md'
          },
          {
            text: 'URL',
            link: '/cs/http/url.md'
          },
          {
            text: 'FormData',
            link: '/cs/http/formdata.md'
          },
          {
            text: 'XHR/Fetch',
            link: '/cs/http/xhr-fetch.md'
          },
          {
            text: 'CORS',
            link: '/cs/http/cors.md'
          },
          {
            text: 'Cookie',
            link: '/cs/http/cookie.md'
          },
          {
            text: '网络安全',
            link: '/cs/http/security.md'
          },
          {
            text: '文件上传',
            link: '/cs/http/upload.md'
          },
          {
            text: '文件下载',
            link: '/cs/http/download.md'
          }
        ]
      },
      {
        text: 'HTTPS',
        items: [
          {
            text: '数据安全',
            link: '/cs/https/encryption.md'
          },
          {
            text: 'TLS与SSL',
            link: '/cs/https/tls&ssl.md'
          },
          {
            text: '项目配置SSL',
            link: '/cs/https/setup.md'
          }
        ]
      },
      {
        text: '高级',
        items: [
          {
            text: '设计模式',
            link: '/cs/advance/design-pattern/'
          },
          {
            text: '数据结构',
            link: '/cs/advance/data-structures/'
          },
          {
            text: '算法',
            link: '/cs/advance/algorithm/'
          }
        ]
      },
      {
        text: 'IM',
        items: [
          {
            text: 'SSE',
            link: '/cs/im/sse/'
          },
          {
            text: 'Websocket',
            link: '/cs/im/websocket/'
          }
        ]
      }
    ]
  },
  {
    text: '跨平台',
    items: [
      {
        text: 'H5',
        link: '/cross/h5/'
      },
      {
        text: '微信公众号',
        link: '/cross/weChat-public/1.authorization.md'
      }
    ]
  },
  {
    text: '工程化',
    items: [
      {
        text: 'Git',
        link: '/engineer/git/1.start.md'
      },
      {
        text: 'TypeScript',
        link: '/engineer/ts/1.start.md'
      },
      {
        text: 'Package Manager',
        items: [
          {
            text: 'NPM',
            link: '/engineer/pkg-manager/npm/1.start.md'
          },
          {
            text: 'Yarn',
            link: '/engineer/pkg-manager/yarn/1.start.md'
          },
          {
            text: 'PNPM',
            link: '/engineer/pkg-manager/pnpm/1.start.md'
          }
        ]
      },
      {
        text: 'MonoRepo',
        items: [
          {
            text: 'Workspace',
            link: '/engineer/mono-repo/workspace/1.start.md'
          },
          {
            text: 'Lerna',
            link: '/engineer/mono-repo/lerna/1.start.md'
          }
        ]
      },
      {
        text: 'Assist',
        items: [
          {
            text: 'Babel',
            link: '/engineer/babel/1.start.md'
          },
          {
            text: 'Postcss',
            link: '/engineer/postcss/1.start.md'
          },
          {
            text: 'Eslint',
            link: '/engineer/eslint/1.start.md'
          },
          {
            text: 'Prettier',
            link: '/engineer/prettier/1.start.md'
          },
          {
            text: 'Husky',
            link: '/engineer/husky/'
          },
          {
            text: 'CommitLint',
            link: '/engineer/commitlint/'
          },
          {
            text: 'Conventional Changelog',
            link: '/engineer/conventional-changelog/'
          },
          {
            text: 'Standard Version',
            link: '/engineer/standard-version/'
          },
        ]
      },
      {
        text: 'Bundler',
        items: [
          {
            text: 'Gulp',
            link: '/engineer/gulp/1.start.md'
          },
          {
            text: 'Rollup',
            link: '/engineer/rollup/1.introduction.md'
          },
          {
            text: 'Webpack',
            link: '/engineer/webpack/1.start.md'
          },
          {
            text: 'Vite',
            link: '/engineer/vite/'
          }
        ]
      },
      {
        text: 'Misc',
        items: [
          {
            text: 'Debugger & Obfuscator',
            link: '/engineer/misc/obfuscator/'
          }
        ]
      }
    ]
  },
  { 
    text: '后端',
    items: [
      {
        text: 'Standard',
        link: '/BE/standard/'
      },
      {
        text: '认证与授权',
        items: [
          {
            text: 'JWT',
            link: '/BE/authentication/jwt/'
          },
          {
            text: 'OAuth2.0',
            link: '/BE/authentication/oauth2/'
          },
          {
            text: '2FA',
            link: '/BE/authentication/2fa/'
          }
        ]
      },
      {
        text: 'SSR',
        items: [
          {
            text: 'SSR Vue2',
            link: '/BE/ssr/ssr-vue2/'
          },
          {
            text: 'SSG Vue2',
            link: '/BE/ssr/ssg-vue2/'
          }
        ]
      },
      {
        text: 'Node',
        items: [
          {
            text: 'Awesome',
            link: '/BE/node/awesome/'
          },
          {
            text: 'Docs',
            link: '/BE/node/docs/'
          }
        ]
      }
    ]
  },
  {
    text: '数据库',
    items: [
      {
        text: 'SQL',
        link: '/DB/sql/'
      },
      {
        text: 'Mysql',
        link: '/DB/mysql/'
      },
      {
        text: 'Oracle',
        link: '/DB/oracle/'
      },
      {
        text: 'Redis',
        link: '/DB/redis/'
      },
      {
        text: 'Mongodb',
        link: '/DB/mongodb/'
      }
    ]
  },
  {
    text: '部署',
    items: [
      {
        text: 'Linux',
        link: '/deploy/linux/'
      },
      {
        text: 'Shell',
        link: '/deploy/shell/1.start.md'
      },
      {
        text: 'Nginx',
        link: '/deploy/nginx/'
      },
      {
        text: 'Docker',
        link: '/deploy/docker/'
      },
      {
        text: 'CI/CD',
        link: '/deploy/CI-CD/1.start.md'
      },
      {
        text: 'Jenkins',
        link: '/deploy/jenkins/1.start.md'
      }
    ]
  },
  {
    text: '工具',
    items: [
      {
        text: 'GitHub',
        link: '/tool/github/'
      },
      {
        text: 'Chrome',
        link: '/tool/chrome/'
      },
      {
        text: 'Charles',
        link: '/tool/charles/'
      },
      {
        text: 'Verdaccio',
        link: '/tool/verdaccio/'
      },
      {
        text: 'Remote-SSH',
        link: '/tool/remote-ssh/'
      },
      {
        text: 'Localtunnel',
        link: '/tool/localtunnel/'
      },
      {
        text: 'AI工具',
        link: '/tool/AI/'
      }
    ]
  }
]
