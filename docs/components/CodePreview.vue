<template>
  <div class="box">
    <div class="code" v-if="code">
      <hljs language="js" :code="code" />
    </div>
    <div class="preview">
      <iframe class="content" :src="preview" />
    </div>
  </div>
</template>

<script setup>
import 'highlight.js/styles/github-dark-dimmed.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin/dist/highlightjs-vue.esm.min.js'
const hljs = hljsVuePlugin.component

defineProps({
  code: {
    type: String,
    default: () => ''
  },
  preview: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: space-between;

  .code {
    width: 50%;
    display: flex;
    flex: 1;

    :deep(pre) {
      height: 100%;
      width: 100%;
      margin: 0;

      .hljs {
        width: 100%;
        height: 100%;
      }
    }
  }

  .preview {
    height: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;

    .content {
      width: calc(100% + 26px);
      height: calc(100% + 4px);
      position: absolute;
      top: -2px;
      right: -2px;
    }
  }
}
</style>