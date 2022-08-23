<template>
  <article-title title="观点" sub="关于工程设计和性能的启发性观点。选自社区博客和推文。" />
</template>

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'

const insightsList = [
  {
    name: 'Sarah Drasner',
    workWith: 'Vue.js and Angular',
    avatar: '',
    link: 'https://twitter.com/sarah_edo/status/863107060698927106',
    // insight: 'A simple way to be a better engineer, enjoy perf benefits, and move faster, is to not over-engineer your code. So many times I see projects suffer is from over-engineering. Really. That\'s usually the root cause. We need to stop assuming that complexity is tied to intelligence. Smart people keep things as simple as is legible.',
    insight: '成为一名更好的工程师、享受性能优势并更快行动的简单方法是不要过度设计您的代码。'
    
  }
]

</script>

<style lang="scss" scoped>

</style>