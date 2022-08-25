<template>
  <div class="item">
    <div class="dalao-info">
      <img class="avatar" :src="item.avatar" :alt="item.name">
      <div class="text-box">
        <div class="name">{{ item.name }}</div>
        <div class="work">{{ item.workWith }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="insight" v-html="item.insight" />
      <a class="link" target="_blank" :href="item.link"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsightItem'
}
</script>

<script setup>

defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.item {
  background-color: #fff;
  border-radius: .5rem;
  height: 408px;
  padding: 1.5rem;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .dalao-info {
    width: 100%;
    display: flex;
    align-items: center;

    .avatar {
      width: 112px;
      height: 112px;
      border-radius: 50%;
    }

    .text-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;
      padding: 24px 0;

      .name {
        font-size: 1.25rem;
        color: rgb(76, 76, 76);
        margin-bottom: 10px;
      }

      .work {
        font-size: 1rem;
        color: rgb(0 112 244);
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: flex-end;

    .insight {
      font-size: 1rem;
      color: rgb(153 153 153);
      line-height: 1.8;
      padding-top: 10px;
      width: 100%;
    }

    .link {
      width: 100px;
      height: 28px;
      background-color: rgb(0 112 244);
      border-radius: .25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .8rem;
      line-height: 1em;

      &::before {
        content: '读更多';
      }

      &:hover {
        background-color: rgb(100 112 244);
        &::before {
          content: '去膜拜';
        }
      }

    }
  }
}
</style>