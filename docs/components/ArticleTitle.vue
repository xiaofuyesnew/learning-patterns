<template>
  <div class="title-wrap">
    <h1 class="title">{{ title }}</h1>
    <div class="sub-title">{{ sub }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Patterns'
  },
  sub: {
    type: String,
    default: 'Patterns'
  }
})
</script>

<style lang="scss" scoped>
.title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, #ec008c, #0070f3);
  font-size: 32px;
  line-height: 1em;
}

.sub-title {
  margin-top: 20px;
}
</style>