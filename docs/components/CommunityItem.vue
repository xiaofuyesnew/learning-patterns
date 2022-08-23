<template>
  <div>
    <div class="item-box">
      <div class="bg"></div>
      <div class="img-box"></div>
    </div>
  </div>
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
.item-box {
  border-radius: .25rem;
  background-color: #fff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .bg {
    width: 100%;
    height: 180px;
    background-color: #000;
    transition: all .3s ease-in-out;
    position: absolute;
  }

  &:hover {
    .bg {
      height: 290px;
    }
  }
}
</style>