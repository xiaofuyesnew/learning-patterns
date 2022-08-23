<template>
  <a :href="item.path" target="_blank" class="item">
    <div class="bg"></div>
    <div class="img-box">
      <img class="img" :src="item.icon" :alt="item.text" />
    </div>
    <div class="text">{{item.text}}</div>
  </a>
</template>

<script>
export default {
  name: 'CommunityItem'
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
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  position: relative;
  overflow: hidden;
  border-radius: .25rem;
  overflow: hidden;

  .bg {
    width: 100%;
    height: 180px;
    background-color: #000;
    transition: all .3s ease-in-out;
    position: absolute;
  }

  .img-box {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    .img {
      width: 100%;
      height: 80px;
      transform: scale(1);
      transition: all .3s ease-in-out;
    }
  }

  .text {
    width: 100%;
    height: 110px;
    color: #000;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 20px 10px;
    position: relative;
    z-index: 1;
    transition: all .3s ease-in-out;
    line-height: 1.25;
  }

  &:hover {
    .bg {
      height: 290px;
    }

    .img-box .img {
      transform: scale(1.2);
    }

    .text {
      color: #fff;
    }
  }
}
</style>