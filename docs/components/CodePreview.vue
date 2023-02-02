<template>
  <div class="box">
    <div class="code" v-if="code">
      <div class="nav">
        <div></div>
      </div>
      <highlightjs language="javascript" v-if="code" :code="code" />
    </div>
    <div class="preview">
      <iframe class="content" :src="preview" />
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'

const state = reactive({
  current: 0
})

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
    flex-direction: column;
    flex: 1;

    .nav {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      height: 30px;
      background-color: #22272e;
      border-bottom: 1px solid #343434;
    }

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