<template>
  <div class="container">
    <article-title title="社区模式" sub="关于 React、Angular、Vue 和 TypeScript 模式的社区资源" />
    <div class="list">
      <community-item class="item" v-for="item in communityList" :key="item.text" :item="item" />
    </div>
  </div>
</template>

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'
import CommunityItem from '../components/CommunityItem.vue'

const communityList = [
  {
    // text: 'Vue.js Design Patterns',
    text: 'Vue.js 设计模式',
    icon: '/svg/vue.svg',
    path: 'https://learn-vuejs.github.io/vue-patterns/patterns/'
  },
  {
    // text: 'Advanced React Patterns',
    text: '先进的 React 模式',
    icon: '/svg/react.svg',
    path: 'https://github.com/kentcdodds/advanced-react-patterns/'
  },
  {
    // text: 'Angular Component Patterns',
    text: 'Angular 组件模式',
    icon: '/svg/angular.svg',
    path: 'https://itnext.io/angular-effective-component-patterns-f5f7f08e2072'
  },
  {
    // text: 'TypeScript/React Component Patterns',
    text: 'TypeScript/React 组件模式',
    icon: '/svg/typescript.svg',
    path: 'https://fettblog.eu/typescript-react-component-patterns/'
  },
  {
    // text: 'Web Component Patterns',
    text: 'Web Component 模式',
    icon: '/svg/web_component.svg',
    path: 'https://open-wc.org/guides/developing-components/code-examples/'
  },
  {
    // text: 'Node.js Design Patterns',
    text: 'Node.js 设计模式',
    icon: '/svg/nodejs.svg',
    path: 'https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Edition'
  },
  {
    // text: 'Clean Code JavaScript',
    text: 'JavaScript 简洁之道',
    icon: '/logo.svg',
    path: 'https://github.com/ryanmcdermott/clean-code-javascript'
  },
  {
    // text: 'Clean Code Angular',
    text: 'Angular 简洁之道',
    icon: '/svg/angular.svg',
    path: 'https://github.com/lubkoKuzenko/angular-clean-code'
  },
  {
    // text: 'RxJs Reactive Patterns',
    text: 'RxJs 响应性模式',
    icon: '/svg/rxjs.svg',
    path: 'https://github.com/bitaemi/rxjs-reactive-patterns'
  }
]

</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin: 0 auto;

  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 60px;

    .item {
      width: 30%;
      height: 290px;
      margin-right: 5%;
      margin-bottom: 40px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>