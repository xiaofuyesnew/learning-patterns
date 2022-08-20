<template>
  <div class="container">
    <div class="header">
      <div class="title">模式</div>
      <div class="sub-title">实时了解最新的设计和性能模式。</div>
    </div>
    <div class="features">
      <a href="#design" class="feature feat-1">设计模式</a>
      <a href="#rendering" class="feature feat-2">渲染模式</a>
      <a href="#performance" class="feature feat-3">性能模式</a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;

  .header {
    padding: 3rem 0;
    .title {
      font-size: 3.25rem;
      line-height: 1.25;
    }

    .sub-title {
      font-size: 1.25rem;
    }
  }

  .features {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .feature {
      width: 30%;
      height: 100px;
      border-radius: 0.25rem;
      filter: drop-shadow(0 20px 13px rgba(0,0,0,.03)) drop-shadow(0 8px 5px rgba(0,0,0,.08));
      font-size: 1.25rem;
      color: #fff;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1em;

      &.feat-1 {
        background-image: linear-gradient( 99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100% );
      }

      &.feat-2 {
        background-image: linear-gradient(45deg, #ff6800, #e233ff);
      }

      &.feat-3 {
        background-image: linear-gradient(45deg, #73eca1, #54b6d4);
      }
    }
  }
}
</style>