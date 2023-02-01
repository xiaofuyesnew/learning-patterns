<template>
  <div class="container">
    <h1>改进 <span class="color">构建</span> web 应用的方式</h1>
    <img class="cover" src="/images/cover.png">
    <p class="description">Patterns.dev 是一本关于设计模式和组件模式的免费书籍，<br>使用原生 JavaScript 和 React 构建强大的 web 应用。</p>
    <div class="btn-box">
      <a href="https://www.patterns.dev/" target="_blank" class="btn">Patterns.dev</a>
      <a href="/learning-patterns/contents" class="btn start"></a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 660px;
  margin: 0 auto;
  padding-top: 50px;
}

.color {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, #ec008c, #0070f3);
}

h1 {
  font-size: 3.2rem;
  text-align: center;
  letter-spacing: -.02rem;
  line-height: 1.125;
  margin-bottom: 30px;

}

.cover {
  width: 240px;
  margin-bottom: 30px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.description {
  font-size: 1.25rem;
  text-align: center;
}

.btn-box {
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;

  .btn {
    width: 140px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(25, 25, 25, 1);
    color: #fff;
    line-height: 1em;
    border-radius: 0.25rem;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: rgba(25, 25, 25, .6);
    }

    &.start {
      position: relative;

      &::before {
        content: '开始阅读';
      }

      &:hover::before {
        content: '卷起来♾️';
      }

    }
  }
}
</style>