<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <!-- <template #title>
        关于
      </template> -->
      <!-- <template #lead>
        本站内容由以下团队成员提供并创建
      </template> -->
    </VPTeamPageTitle>
    <div class="slogan">我们为开发者构建惊世之作赋能</div>
    <div class="video">
      <iframe class="iframe" src="//player.bilibili.com/player.html?aid=472235333&bvid=BV1AT411w7Kp&cid=807657223&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
    <div class="wrap">
      <VPTeamMembers :members="members" />
      <div class="card">
        <img class="qr" src="/qrcode.jpg">
        <div class="tips">觉得本站内容有帮助，可以请我喝杯☕，谢谢🙏</div>
      </div>
    </div>
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

.slogan {
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1em;
}

.video {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 50px;

  .iframe {
    width: 600px;
    height: 420px;
  }
}

.wrap {
  margin:0 auto;
  max-width: 860px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  height: 316px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .tips {
    font-size: 18px;
  }

  .qr {
    width: 180px;
    border-radius: 50%;
  }

}
</style>