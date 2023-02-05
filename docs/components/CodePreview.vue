<template>
  <div class="box">
    <div class="code" v-if="code.length">
      <div class="nav" v-if="codeShow && code.length > 0">
        <div class="wrap">
          <div class="nav-item" :class="{ current: index === state.current }" v-for="(file, index) in code" :key="index" @click="changeFile(index)">
            <img class="icon" :src="icons[file.type]">
            <div class="name">{{ file.name }}</div>
          </div>
        </div>
      </div>
      <highlightjs language="javascript" v-if="code.length" :code="code[state.current].content" />
    </div>
    <div class="preview" v-if="preview">
      <iframe class="content" :src="preview" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import js from '../assets/svg/logo.svg'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'

const icons = {
  js,
  html,
  css
}

const state = reactive({
  current: 0
})

defineProps({
  code: {
    // type: Array,
    default: () => []
  },
  codeShow: {
    type: Boolean,
    default: () => true
  },
  preview: {
    type: String,
    required: true
  }
})

const changeFile = (index) => {
  state.current = index
}

</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  max-height: 540px;
  display: flex;
  justify-content: space-between;

  .code {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex: 1;
    // background-color: #22272e;

    .nav {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      height: 30px;
      background-color: #22272e;
      border-bottom: 1px solid #343434;

      &:hover {
        &::-webkit-scrollbar {
          display: auto;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }

      .wrap {
        height: 100%;
        display: inline-flex;
        flex-wrap: nowrap;

        .nav-item {
          font-size: 12px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          justify-content: center;
          // box-sizing: border-box;

          .icon {
            width: 12px;
            margin-right: 10px
          }

          &.current {
            border-bottom: 2px solid #6cc7f6;
          }
        }

      }
    }

    :deep(pre) {
      max-height: 510px;
      width: 100%;
      margin: 0;
      flex: 1;

      .hljs {
        width: 100%;
        height: 100%;
      }
    }
  }

  .preview {
    height: 540px;
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