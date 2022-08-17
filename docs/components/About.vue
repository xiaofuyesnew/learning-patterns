<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        关于
      </template>
      <template #lead>
        The development of VitePress is guided by an international
        team, some of whom have chosen to be featured below.
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
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