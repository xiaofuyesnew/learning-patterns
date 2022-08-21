<template>
  <iframe class="iframe" :src="video" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"/>
</template>

<script setup>
defineProps({
  video: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.iframe {
  width: 100%;
  height: 480px;
}
</style>