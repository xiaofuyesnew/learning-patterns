<template>
  <div class="slogan">我们为开发者构建惊世之作赋能</div>
  <div class="video">
    <iframe class="iframe" src="//player.bilibili.com/player.html?aid=472235333&bvid=BV1AT411w7Kp&cid=807657223&page=1"
      scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
  </div>
  <div class="wrap">
    <!-- <VPTeamMembers :members="members" /> -->
    <div class="profile">
      <figure class="avatar">
        <img class="avatar-img" src="https://www.github.com/xiaofuyesnew.png" alt="Allen Wong">
      </figure>
      <div class="data">
        <h1 class="name">Allen Wong</h1>
        <p class="affiliation"><span class="title">翻译 &amp; 网站创建者</span></p>
        <div class="links">
          <a class="link" href="https://github.com/xiaofuyesnew" target="_blank" rel="noopener"><svg role="img"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
              </path>
            </svg>
          </a>
          <a class="link" href="https://twitter.com/xiaofuyesnew" target="_blank" rel="noopener"><svg role="img"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="card">
      <img class="qr" src="/images/qrcode.jpg">
      <div class="tips">觉得本站内容有帮助，可以请我喝杯☕，谢谢🙏</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.slogan {
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1em;
}

.video {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 50px;

  .iframe {
    width: 600px;
    height: 420px;
  }
}

.wrap {
  margin: 0 auto;
  max-width: 860px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 128px;

  .profile {
    padding: 48px 32px;
    box-sizing: border-box;
    width: 288px;
    height: 316px;
    background-color: #2f2f2f;
    border-radius: 12px;

    .avatar {
      width: 96px;
      height: 96px;
      position: relative;
      flex-shrink: 0;
      margin: 0 auto;
      border-radius: 50%;
      box-shadow: var(--vp-shadow-3);

      .avatar-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .data {
      padding-top: 24px;
      text-align: center;

      .name {
        letter-spacing: .15px;
        line-height: 28px;
        font-size: 20px;
        margin: 0;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.87);
      }

      .affiliation {
        padding-top: 4px;
        font-size: 16px;
        margin: 0;
        font-weight: 500;
        color: rgba(235, 235, 235, 0.6);
      }

      .links {
        margin: 0 -16px -12px;
        padding: 16px 12px 0;
        height: 56px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          color: rgba(255, 255, 255, .87);
          transition: color .5s;

          svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
          }
        }
      }
    }
  }

}

.card {
  height: 316px;
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .tips {
    font-size: 18px;
  }

  .qr {
    width: 180px;
    border-radius: 50%;
  }

}
</style>