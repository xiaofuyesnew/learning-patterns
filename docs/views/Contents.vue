<template>
  <div class="container">
    <div class="header">
      <div class="title">模式</div>
      <div class="sub-title">实时了解最新的设计和性能模式。</div>
    </div>
    <div class="features">
      <a href="#design" class="feature feat-1">设计模式</a>
      <a href="#rendering" class="feature feat-2">渲染模式</a>
      <a href="#performance" class="feature feat-3">性能模式</a>
    </div>
    <div class="list">
      <div class="list-title title-1" id="design">设计模式</div>
      <div class="items">
        <list-item class="item item-1" v-for="(item, index) in items[0]" :item="item" :key="index" />
      </div>
      <div class="list-title title-2" id="rendering">渲染模式</div>
      <div class="items">
        <list-item class="item item-2" v-for="(item, index) in items[1]" :item="item" :key="index" />
      </div>
      <div class="list-title title-3" id="performance">性能模式</div>
      <div class="items">
        <list-item class="item item-3" v-for="(item, index) in items[2]" :item="item" :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from '../components/ListItem.vue'
const items = [
  [
    {
      title: '概述',
      sub: '设计模式概述',
      path: '/learning-patterns/design/introduction'
    },
    {
      title: '单例模式',
      sub: '在应用中共享同一个全局实例',
      path: '/learning-patterns/design/singleton'
    },
    {
      title: '代理模式',
      sub: '拦截和控制目标对象的交互',
      path: '/learning-patterns/design/proxy'
    },
    {
      title: '提供者模式',
      sub: '使数据可用于多个子组件',
      path: '/learning-patterns/design/provider'
    },
    {
      title: '原型模式',
      sub: '在相同类型的对象之间共享属性',
      path: '/learning-patterns/design/prototype'
    },
    {
      title: '容器/展示模式',
      sub: '从应用逻辑中分离视图以强制分离关注点',
      path: '/learning-patterns/design/container_presentational'
    },
    {
      title: '观察者模式',
      sub: '当一个事件发生时使用可观察对象通知观察者',
      path: '/learning-patterns/design/observer'
    },
    {
      title: '模块模式',
      sub: '将代码拆分得更小的并可重用',
      path: '/learning-patterns/design/module'
    },
    {
      title: '混入模式',
      sub: '在无继承的情况下向对象或类添加功能',
      path: '/learning-patterns/design/mixin'
    },
    {
      title: '中介者/中间件模式',
      sub: '使用中介者对象处理组件间通信',
      path: '/learning-patterns/design/mediator_middleware'
    },
    {
      title: '高阶组件模式',
      sub: '将可重用逻辑作为属性传递给应用中的组件',
      path: '/learning-patterns/design/hoc'
    },
    {
      title: '渲染属性模式',
      sub: '通过属性将 JSX 元素传递给组件',
      path: '/learning-patterns/design/render_props'
    },
    {
      title: '钩子模式',
      sub: '使用函数在应用中的多个组件之间重用有状态逻辑',
      path: '/learning-patterns/design/hooks'
    },
    {
      title: '享元模式',
      sub: '处理相同对象时重用现有实例',
      path: '/learning-patterns/design/flyweight'
    },
    {
      title: '工厂模式',
      sub: '使用工厂函数创建对象',
      path: '/learning-patterns/design/factory'
    },
    {
      title: '复合模式',
      sub: '创建协同工作的多个组件以完成单一任务',
      path: '/learning-patterns/design/compound'
    },
    {
      title: '命令模式',
      sub: '向管理器发送命令来执行任务的解耦方法',
      path: '/learning-patterns/design/command'
    },
    {
      title: 'JavaScript 设计模式',
      sub: '经典的《JavaScript 设计模式》更新了 ES2015+ 语法',
      path: '/learning-patterns/design/js_design_patterns'
    }
  ],
  [
    {
      title: '概述',
      sub: '渲染模式概述',
      path: '/learning-patterns/rendering/introduction'
    },
    {
      title: 'React.js 概述',
      sub: '用于构建可重用用户界面组件的 UI 库',
      path: '/learning-patterns/rendering/react'
    },
    {
      title: 'Next.js 概述',
      sub: '用于混合 React 应用的 Vercel 公司框架',
      path: '/learning-patterns/rendering/next'
    },
    {
      title: '客户端渲染',
      sub: '在客户端渲染应用程序 UI',
      path: '/learning-patterns/rendering/client'
    },
    {
      title: '服务端渲染',
      sub: '响应用户请求在服务端生成 HTML',
      path: '/learning-patterns/rendering/server'
    },
    {
      title: '静态渲染',
      sub: '在构建站点时生成预渲染的 HTML',
      path: '/learning-patterns/rendering/static'
    },
    {
      title: '增量静态生成',
      sub: '构建站点后更新静态内容',
      path: '/learning-patterns/rendering/issg'
    },
    {
      title: '渐进式注水',
      sub: '延迟加载页面中不太重要的 JavaScript',
      path: '/learning-patterns/rendering/progressive_hydration'
    },
    {
      title: '流式服务端渲染',
      sub: '响应用户请求在服务端生成 HTML',
      path: '/learning-patterns/rendering/sssr'
    },
    {
      title: 'React 服务端组件',
      sub: '得益于 SSR 的服务端组件，渲染成无须打包的中间抽象',
      path: '/learning-patterns/rendering/react_server_components'
    },
    {
      title: '选择性注水',
      sub: '结合流式服务端渲染和注水的新方法',
      path: '/learning-patterns/rendering/selective_hydration'
    },
    {
      title: '孤岛架构',
      sub: '鼓励在服务器渲染的页面中使用小的、集中的交互单元',
      path: '/learning-patterns/rendering/islands_architecture'
    },
  ],
  [
    {
      title: '优化加载顺序',
      sub: '了解如何优化加载顺序以提高应用的可用速度',
      path: '/learning-patterns/performance/optimize_loading_sequence'
    },
    {
      title: '静态导入',
      sub: '导入其他模块导出的代码',
      path: '/learning-patterns/performance/static_import'
    },
    {
      title: '动态导入',
      sub: '按需导入代码',
      path: '/learning-patterns/performance/dynamic_import'
    },
    {
      title: '可见时导入',
      sub: '当非关键组件在视口中可见时导入',
      path: '/learning-patterns/performance/import_on_visibility'
    },
    {
      title: '可交互时导入',
      sub: '当 UI 界面需要时导入非关键组件',
      path: '/learning-patterns/performance/import_on_interaction'
    },
    {
      title: '基于路由拆分',
      sub: '根据当前路由动态加载组件',
      path: '/learning-patterns/performance/route_based_splitting'
    },
    {
      title: '打包拆分',
      sub: '拆分代码为小而可复用的部分',
      path: '/learning-patterns/performance/bundle_splitting'
    },
    {
      title: 'PRPL 模式',
      sub: '通过预缓存、延迟加载和最小化往返优化初始加载',
      path: '/learning-patterns/performance/prpl'
    },
    {
      title: 'Tree Shaking',
      sub: '通过剔除无用代码来减小包大小',
      path: '/learning-patterns/performance/tree_shaking'
    },
    {
      title: '预加载',
      sub: '发现关键资源之前通知浏览器',
      path: '/learning-patterns/performance/preload'
    },
    {
      title: '预获取',
      sub: '获取并缓存可能即将被请求的资源',
      path: '/learning-patterns/performance/prefetch'
    },
    {
      title: '优化加载第三方库',
      sub: '降低第三方库对站点性能的影响',
      path: '/learning-patterns/performance/optimize_loading_third_parties'
    },
    {
      title: '虚拟列表',
      sub: '利用列表虚拟化优化其性能',
      path: '/learning-patterns/performance/list_virtualization'
    },
    {
      title: '压缩 JavaScript',
      sub: '减少通过网络传输所需的时间',
      path: '/learning-patterns/performance/compressing_javascript'
    },
  ]
]
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;

  .header {
    padding: 3rem 0;

    .title {
      font-size: 3.25rem;
      line-height: 1.25;
    }

    .sub-title {
      font-size: 1.25rem;
    }
  }

  .features {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .feature {
      width: 30%;
      height: 100px;
      border-radius: 0.25rem;
      filter: drop-shadow(0 20px 13px rgba(0, 0, 0, .03)) drop-shadow(0 8px 5px rgba(0, 0, 0, .08));
      font-size: 1.25rem;
      padding-bottom: 0;
      color: #fff;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1em;
      transition: all .3s ease-in-out;

      &:hover {
        padding-bottom: 10px;
      }

      &.feat-1 {
        background-image: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
      }

      &.feat-2 {
        background-image: linear-gradient(45deg, #ff6800, #e233ff);
      }

      &.feat-3 {
        background-image: linear-gradient(45deg, #73eca1, #54b6d4);
      }
    }
  }

  .list {
    .list-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      line-height: 1.25;
      font-weight: 700;

      &.title-1 {
        margin-top: 60px;
      }

      &.title-2,
      &.title-3 {
        margin-top: 30px;
      }
    }

    .items {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 30%;
        height: 120px;
        margin-right: 5%;
        margin-bottom: 30px;

        &.item-1 {
          background-image: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        }

        &.item-2 {
          background-image: linear-gradient(45deg, #ff6800, #e233ff);
        }

        &.item-3 {
          background-image: linear-gradient(45deg, #73eca1, #54b6d4);
        }

        &:nth-child(3n) {
          margin-right: 0;
        }
      }

    }
  }
}
</style>