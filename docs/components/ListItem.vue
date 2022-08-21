<template>
  <a :href="item.path" class="list-item">
    <div class="title">{{ item.title }}</div>
    <div class="sub-title">{{ item.sub }}</div>
  </a>
</template>

<script setup>

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  filter: drop-shadow(0 20px 13px rgba(0, 0, 0, .03)) drop-shadow(0 8px 5px rgba(0, 0, 0, .08));
  border-radius: 0.25rem;
  padding: 20px 10px;

  .title {
    font-size: 1.25rem;
    color: #fff;
    font-weight: 700;
    opacity: .6;
    transition: all .3s ease-in-out;
    margin-bottom: 10px;
  }

  .sub-title {
    line-height: 1.1;
    font-size: .8rem;
    opacity: .4;
    width: calc(100% - 20px);
    text-align: center;
    transition: all .3s ease-in-out;
  }

  &:hover {

    .title {
      opacity: 1;
    }

    .sub-title {
      opacity: .8;
    }
  }
}
</style>