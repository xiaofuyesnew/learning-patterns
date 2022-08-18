<template>
  <div class="container">
    <h1>改进 <span class="color">构建</span> web 应用的方式</h1>
    <img class="cover" src="/cover.png">
    <p class="description">Patterns.dev 是一本关于设计模式和组件模式的免费书籍，用于使用 vanilla JavaScript 和 React 构建强大的 web 应用。</p>
    <div class="btn-box">
      <div class="btn">去 patterns.dev</div>
      <div class="btn">开始阅读 →</div>
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
</style>