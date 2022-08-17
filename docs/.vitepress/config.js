export default {
  base: '/learning-patterns/',
  title: 'Patterns',
  description: 'Learn JavaScript design and performance patterns for building more powerful web applications.',
  themeConfig: {
    nav: [
      { text: '开始学习', link: '/contents' },
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
            text: '介绍',
            link: '/design/introduction'
          }
        ]
      }
    ]
  }
}