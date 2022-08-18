export default {
  base: '/learning-patterns/',
  title: 'Patterns',
  description: 'Learn JavaScript design and performance patterns for building more powerful web applications.',
  themeConfig: {
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
      message: '本网站及其源码遵循 MIT 协议',
      copyright: 'Copyright © 2022-present Allen Wong'
    },
    sidebar: [
      {
        text: '设计模式',
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
            text: '学习 JavaScript 设计模式',
            link: '/design/js_design_patterns'
          },
        ]
      },
      {
        text: '渲染模式',
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
            text: '服务端渲染',
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
            link: '/rendering/sssr'
          },
          {
            text: '选择性补水',
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
            text: '交互时导入',
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