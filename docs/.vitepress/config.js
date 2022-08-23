export default {
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/learning-patterns/logo.svg'
    }]
  ],
  base: '/learning-patterns/',
  title: 'Patterns',
  description: 'Learn JavaScript design and performance patterns for building more powerful web applications.',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaofuyesnew/learning-patterns' },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="icon" data-v-398c9053=""><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>',
        link: 'https://discord.gg/pF5b4WtA'
      }
    ],
    editLink: {
      pattern: 'https://github.com/xiaofuyesnew/learning-patterns/tree/main/docs/:path',
      text: '在 GitHub 上编辑本页'
    },
    nav: [
      {
        text: '开始阅读', items: [
          {
            text: '阅读译文',
            link: '/contents'
          }, {
            text: '阅读原文',
            link: 'https://www.patterns.dev/posts/'
          }
        ]
      },
      { text: '关于', link: '/about' },
    ],
    footer: {
      message: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;display:inline;" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>',
      copyright: 'Copyright © 2022-present Allen Wong'
    },
    sidebar: [
      {
        text: '设计模式',
        collapsible: true,
        items: [
          {
            text: '概述',
            link: '/design/introduction'
          },
          {
            text: '单例模式',
            link: '/design/singleton'
          },
          {
            text: '代理模式',
            link: '/design/proxy'
          },
          {
            text: '提供者模式',
            link: '/design/provider'
          },
          {
            text: '原型模式',
            link: '/design/prototype'
          },
          {
            text: '容器/展示模式',
            link: '/design/container_presentational'
          },
          {
            text: '观察者模式',
            link: '/design/observer'
          },
          {
            text: '模块模式',
            link: '/design/module'
          },
          {
            text: '混入模式',
            link: '/design/mixin'
          },
          {
            text: '中介者/中间件模式',
            link: '/design/mediator_middleware'
          },
          {
            text: '高阶组件模式',
            link: '/design/hoc'
          },
          {
            text: '渲染属性模式',
            link: '/design/render_props'
          },
          {
            text: '钩子模式',
            link: '/design/hooks'
          },
          {
            text: '享元模式',
            link: '/design/flyweight'
          },
          {
            text: '工厂模式',
            link: '/design/factory'
          },
          {
            text: '复合模式',
            link: '/design/compound'
          },
          {
            text: '命令模式',
            link: '/design/command'
          },
          {
            text: 'JavaScript 设计模式',
            link: '/design/js_design_patterns'
          },
        ]
      },
      {
        text: '渲染模式',
        collapsible: true,
        items: [
          {
            text: '概述',
            link: '/rendering/introduction'
          },
          {
            text: 'React.js 概述',
            link: '/rendering/react'
          },
          {
            text: 'Next.js 概述',
            link: '/rendering/next'
          },
          {
            text: '客户端渲染',
            link: '/rendering/client'
          },
          {
            text: '服务端渲染',
            link: '/rendering/server'
          },
          {
            text: '静态渲染',
            link: '/rendering/static'
          },
          {
            text: '增量静态生成',
            link: '/rendering/issg'
          },
          {
            text: '渐进式注水',
            link: '/rendering/progressive_hydration'
          },
          {
            text: '流式服务端渲染',
            link: '/rendering/sssr'
          },
          {
            text: 'React 服务端组件',
            link: '/rendering/react_server_components'
          },
          {
            text: '选择性注水',
            link: '/rendering/selective_hydration'
          },
          {
            text: '孤岛架构',
            link: '/rendering/islands_architecture'
          },
        ]
      },
      {
        text: '性能模式',
        collapsible: true,
        items: [
          {
            text: '优化加载顺序',
            link: '/performance/optimize_loading_sequence'
          },
          {
            text: '静态导入',
            link: '/performance/static_import'
          },
          {
            text: '动态导入',
            link: '/performance/dynamic_import'
          },
          {
            text: '可见时导入',
            link: '/performance/import_on_visibility'
          },
          {
            text: '可交互时导入',
            link: '/performance/import_on_interaction'
          },
          {
            text: '基于路由拆分',
            link: '/performance/route_based_splitting'
          },
          {
            text: '打包拆分',
            link: '/performance/bundle_splitting'
          },
          {
            text: 'PRPL 模式',
            link: '/performance/prpl'
          },
          {
            text: 'Tree Shaking',
            link: '/performance/tree_shaking'
          },
          {
            text: '预加载',
            link: '/performance/preload'
          },
          {
            text: '预获取',
            link: '/performance/prefetch'
          },
          {
            text: '优化加载第三方库',
            link: '/performance/optimize_loading_third_parties'
          },
          {
            text: '虚拟列表',
            link: '/performance/list_virtualization'
          },
          {
            text: '压缩 JavaScript',
            link: '/performance/compressing_javascript'
          }
        ]
      }
    ]
  }
}