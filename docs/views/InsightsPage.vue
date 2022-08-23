<template>
  <article-title title="观点" sub="关于工程设计和性能的启发性观点。选自社区博客和推文。" />
</template>

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'

const insightsList = [
  {
    name: 'Sarah Drasner',
    workWith: 'Vue.js and Angular',
    avatar: '/images/dalao/Z1OKbdz.jpg',
    link: 'https://twitter.com/sarah_edo/status/863107060698927106',
    // insight: 'A simple way to be a better engineer, enjoy perf benefits, and move faster, is to not over-engineer your code. So many times I see projects suffer is from over-engineering. Really. That\'s usually the root cause. We need to stop assuming that complexity is tied to intelligence. Smart people keep things as simple as is legible.',
    insight: '成为一名更好的工程师、享受性能优势并更快行动的简单方法是不要过度设计您的代码。很多时候我都看到项目遭受过度设计的影响。真的。这通常是根本原因。我们需要杜绝假设复杂性与智能相关。聪明人总会让事情变得简单易懂。'
  },
  {
    name: 'Dan Abramov',
    workWith: 'React',
    avatar: '/images/dalao/14G903.jpg',
    link: 'https://overreacted.io/goodbye-clean-code/#:~:text=If%20you%20find,let%20it%20go.',
    // insight: 'If you find pride in your craft, it is tempting to pursue cleanliness in code. Do it for a while. But don't stop there. Don't be a clean code zealot. Clean code is not a goal. It's an attempt to make some sense out of the immense complexity of systems we're dealing with. Let clean code guide you. Then let it go.',
    insight: '如果您对自己的手艺感到自豪，那么追求代码的简洁性是很有诱惑力的。做一段时间。但不要止步于此。不要成为一个干净的代码狂热者。干净的代码不是目标。这是试图从我们正在处理的系统的庞大复杂性中找出一些意义。让干净的代码引导你。然后让它随风而去。'
  },
  {
    name: 'Jake Archibald',
    workWith: 'Google Chrome',
    avatar: '/images/dalao/Z6q7jo.jpg',
    link: 'https://jakearchibald.com/2017/netflix-and-react/#:~:text=If%20your%20first%20interaction%20is%20visual%2C%20such%20as%20reading%20an%20article%20or%20looking%20at%20an%20image%2C%20serve%20HTML%20for%20those%20things.%20Most%20frameworks%20now%20offer%20some%20sort%20of%20server%2Drendering%20feature%20%E2%80%93%20just%20ensure%20you%27re%20not%20serving%20up%20a%20load%20of%20buttons%20that%20don%27t%20work%20while%20the%20client%2Dside%20JS%20is%20loading.',
    // insight: 'If your first interaction is visual, such as reading an article or looking at an image, serve HTML for those things. Most frameworks now offer some sort of server-rendering feature – just ensure you're not serving up a load of buttons that don't work while the client-side JS is loading. You can lazily-load and execute code for discrete interactions, loading them in the order the user is most-likely to need them.',
    insight: '如果您的初次交互是可见的，例如阅读文章或查看图像，则使用 HTML 来承载这些内容。大多数框架现在都提供服务端渲染的功能——只要确保客户端 JS 正在加载时没有呈现大量不起作用的按钮。您可以延迟加载和执行零散交互的代码，按照用户最有可能需要它们的顺序加载它们。'
  },
  {
    name: 'Surma',
    workWith: 'Google Chrome',
    avatar: '/images/dalao/1uABL.jpg',
    link: 'https://surma.dev/things/less-snakeoil/index.html#:~:text=Almost%20every%20performance,not%20the%20computer.',
    // insight: 'Code should be written for humans (including your future self), not the computer. Almost every performance optimization is a trade-off between speed and something else. In most cases, you give up readability, expressiveness and/or idiomaticism. These meta-values won't show up in your measurements, but that doesn't mean that they can be ignored.',
    insight: '代码应该为人类（包括未来的你自己）而不是为计算机编写。几乎每一个性能优化都是在速度和其他东西之间进行权衡。在大多数情况下，你放弃了可读性、表达性和/或惯用语。这些基本价值不会出现在你的评价标准中，但这并不意味着他们能被忽视。'
  },
  {
    name: 'Ashley Watkins',
    workWith: 'Meta',
    avatar: '/images/dalao/ZQ4vwO.jpg',
    link: 'https://engineering.fb.com/2020/05/08/web/facebook-redesign/#:~:text=Throughout%20the%20process,thing%20by%20default.',
    // insight: 'Engineer experience should be in service of user experience. The end goal of our development is all about the people using our website. As we think about the UX challenges on our site, we can adapt the experience to guide engineers to do the right thing by default. We should deliver only the resources we need, and we should strive to have them arrive right before we need them.',
    insight: '工程师的经验应该为用户体验服务。我们开发的终极目标是关注那些使用我们网站的人。我们考虑网站上的用户体验挑战时，我们可以调整经验来引导工程师自然而然地去做正确的事情。我们应该只提供我们需要的资源，并应该努力让它们在需要之前达成。'
  },
  {
    name: 'Addy Osmani',
    workWith: 'Google Chrome',
    avatar: '/images/dalao/IjS1w.jpg',
    link: 'https://twitter.com/addyosmani/status/1084299572816429056',
    // insight: 'Keep code simple. Make it easy to read and maintain by others. Design patterns are great, but use them when it’s clear they add value. Break everything down into simple ideas. Keep code clear, concise and to the point. Your team will appreciate the clarity this can add.',
    insight: '让代码保持简单。使其易于他人阅读和维护。设计模式很棒，但是当它们明显增加价值时使用。把一切都分解成简单的想法。保持代码清晰、简洁和重点突出。团队将赞赏这可以增加的清晰度。'
  },
  {
    name: 'Shubhie Panicker',
    workWith: 'Google Chrome',
    avatar: '/images/dalao/Z1xyx7B.jpg',
    link: 'https://twitter.com/shubhie/status/1435347448554082307',
    // insight: 'One thing that is lost in the current SPA debate: definition of "modern SPA". Old school SPA: loads the entire app, before any rendering or interactivity. Modern SPA: SSR (or serve static pages) for fast rendering (FCP), min route level code splitting for faster interactivity.',
    insight: '当前对 SPA 的辩论中，往往缺失了一个环节：“现代 SPA” 的定义。老派的 SPA：在任何渲染或交互之前加载整个应用。现代 SPA：SSR（或提供静态页面）用于快速渲染 (FCP)，最小路由级别代码拆分以实现更快的交互性。'
  },
  {
    name: 'Sebastian Marbage',
    workWith: 'React and Vercel',
    avatar: '/images/dalao/18TVJP.jpg',
    link: 'https://twitter.com/sebmarkbage/status/1156981610434056192',
    // insight: 'My philosophy on abstractions (like React components): If your abstraction works in 9 out of 10 cases. That's a good abstraction. If it's insufficient in one of those cases, then copy/paste (i.e. decompose into its pieces) and tweak it for that case. Don't change the abstraction.',
    insight: '我对抽象的哲学（如 React 组件）：如果你的抽象在 10 个案例中有 9 个有效。那是好的抽象。如果在其中一种情况下还不够，那么复制/粘贴（即分解成小的片段）并针对这种情况进行调整。不要改变抽象。'
  }
]

</script>

<style lang="scss" scoped>

</style>