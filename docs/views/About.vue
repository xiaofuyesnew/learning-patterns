<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        关于
      </template>
      <!-- <template #lead>
        本站内容由以下团队成员提供并创建
      </template> -->
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
    <div class=""></div>
  </VPTeamPage>
</template>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/xiaofuyesnew.png',
    name: 'Allen Wong',
    title: '翻译 & 网站创建者',
    links: [
      { icon: 'github', link: 'https://github.com/xiaofuyesnew' },
      { icon: 'twitter', link: 'https://twitter.com/xiaofuyesnew' }
    ]
  }
]
</script>

<style lang="scss" scoped>
</style>