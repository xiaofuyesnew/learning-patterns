<template>
  <article-title title="观点" sub="关于工程设计和性能的启发性观点。选自社区博客和推文。" />
  <div class="list">
    <insight-item class="item" v-for="item in insightsList" :item="item" :key="item.name" />
  </div>
</template>

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'
import InsightItem from '../components/InsightItem.vue';

const insightsList = [
  {
    name: 'Sarah Drasner',
    workWith: 'Vue.js and Angular',
    avatar: '/learning-patterns/images/dalao/Z1OKbdz.jpg',
    link: 'https://twitter.com/sarah_edo/status/863107060698927106',
    // insight: 'A simple way to be a better engineer, enjoy perf benefits, and move faster, is to not over-engineer your code. So many times I see projects suffer is from over-engineering. Really. That\'s usually the root cause. We need to stop assuming that complexity is tied to intelligence. Smart people keep things as simple as is legible.',
    insight: '成为一名更好的工程师、享受性能优势并更快行动的简单方法是不要过度设计您的代码。很多时候我都看到项目遭受过度设计的影响。真的。这通常是根本原因。我们需要杜绝假设复杂性与智能相关。聪明人总会让事情变得简单易懂。'
  },
  {
    name: 'Dan Abramov',
    workWith: 'React',
    avatar: '/learning-patterns/images/dalao/14G903.jpg',
    link: 'https://overreacted.io/goodbye-clean-code/#:~:text=If%20you%20find,let%20it%20go.',
    // insight: 'If you find pride in your craft, it is tempting to pursue cleanliness in code. Do it for a while. But don't stop there. Don't be a clean code zealot. Clean code is not a goal. It's an attempt to make some sense out of the immense complexity of systems we're dealing with. Let clean code guide you. Then let it go.',
    insight: '如果您对自己的手艺感到自豪，那么追求代码的简洁性是很有诱惑力的。做一段时间。但不要止步于此。不要成为一个干净的代码狂热者。干净的代码不是目标。这是试图从我们正在处理的系统的庞大复杂性中找出一些意义。让干净的代码引导你。然后让它随风而去。'
  },
  {
    name: 'Jake Archibald',
    workWith: 'Google Chrome',
    avatar: '/learning-patterns/images/dalao/Z6q7jo.jpg',
    link: 'https://jakearchibald.com/2017/netflix-and-react/#:~:text=If%20your%20first%20interaction%20is%20visual%2C%20such%20as%20reading%20an%20article%20or%20looking%20at%20an%20image%2C%20serve%20HTML%20for%20those%20things.%20Most%20frameworks%20now%20offer%20some%20sort%20of%20server%2Drendering%20feature%20%E2%80%93%20just%20ensure%20you%27re%20not%20serving%20up%20a%20load%20of%20buttons%20that%20don%27t%20work%20while%20the%20client%2Dside%20JS%20is%20loading.',
    // insight: 'If your first interaction is visual, such as reading an article or looking at an image, serve HTML for those things. Most frameworks now offer some sort of server-rendering feature – just ensure you're not serving up a load of buttons that don't work while the client-side JS is loading. You can lazily-load and execute code for discrete interactions, loading them in the order the user is most-likely to need them.',
    insight: '如果您的初次交互是可见的，例如阅读文章或查看图像，则使用 HTML 来承载这些内容。大多数框架现在都提供服务端渲染的功能——只要确保客户端 JS 正在加载时没有呈现大量不起作用的按钮。您可以延迟加载和执行零散交互的代码，按照用户最有可能需要它们的顺序加载它们。'
  },
  {
    name: 'Surma',
    workWith: 'Google Chrome',
    avatar: '/learning-patterns/images/dalao/1uABL.jpg',
    link: 'https://surma.dev/things/less-snakeoil/index.html#:~:text=Almost%20every%20performance,not%20the%20computer.',
    // insight: 'Code should be written for humans (including your future self), not the computer. Almost every performance optimization is a trade-off between speed and something else. In most cases, you give up readability, expressiveness and/or idiomaticism. These meta-values won't show up in your measurements, but that doesn't mean that they can be ignored.',
    insight: '代码应该为人类（包括未来的你自己）而不是为计算机编写。几乎每一个性能优化都是在速度和其他东西之间进行权衡。在大多数情况下，你放弃了可读性、表达性和/或惯用语。这些基本价值不会出现在你的评价标准中，但这并不意味着他们能被忽视。'
  },
  {
    name: 'Ashley Watkins',
    workWith: 'Meta',
    avatar: '/learning-patterns/images/dalao/ZQ4vwO.jpg',
    link: 'https://engineering.fb.com/2020/05/08/web/facebook-redesign/#:~:text=Throughout%20the%20process,thing%20by%20default.',
    // insight: 'Engineer experience should be in service of user experience. The end goal of our development is all about the people using our website. As we think about the UX challenges on our site, we can adapt the experience to guide engineers to do the right thing by default. We should deliver only the resources we need, and we should strive to have them arrive right before we need them.',
    insight: '工程师的经验应该为用户体验服务。我们开发的终极目标是关注那些使用我们网站的人。我们考虑网站上的用户体验挑战时，我们可以调整经验来引导工程师自然而然地去做正确的事情。我们应该只提供我们需要的资源，并应该努力让它们在需要之前达成。'
  },
  {
    name: 'Addy Osmani',
    workWith: 'Google Chrome',
    avatar: '/learning-patterns/images/dalao/IjS1w.jpg',
    link: 'https://twitter.com/addyosmani/status/1084299572816429056',
    // insight: 'Keep code simple. Make it easy to read and maintain by others. Design patterns are great, but use them when it’s clear they add value. Break everything down into simple ideas. Keep code clear, concise and to the point. Your team will appreciate the clarity this can add.',
    insight: '让代码保持简单。使其易于他人阅读和维护。设计模式很棒，但是当它们明显增加价值时使用。把一切都分解成简单的想法。保持代码清晰、简洁和重点突出。团队将赞赏这可以增加的清晰度。'
  },
  {
    name: 'Shubhie Panicker',
    workWith: 'Google Chrome',
    avatar: '/learning-patterns/images/dalao/Z1xyx7B.jpg',
    link: 'https://twitter.com/shubhie/status/1435347448554082307',
    // insight: 'One thing that is lost in the current SPA debate: definition of "modern SPA". Old school SPA: loads the entire app, before any rendering or interactivity. Modern SPA: SSR (or serve static pages) for fast rendering (FCP), min route level code splitting for faster interactivity.',
    insight: '当前对 SPA 的辩论中，往往缺失了一个环节：“现代 SPA” 的定义。老派的 SPA：在任何渲染或交互之前加载整个应用。现代 SPA：SSR（或提供静态页面）用于快速渲染 (FCP)，最小路由级别代码拆分以实现更快的交互性。'
  },
  {
    name: 'Sebastian Marbage',
    workWith: 'React and Vercel',
    avatar: '/learning-patterns/images/dalao/18TVJP.jpg',
    link: 'https://twitter.com/sebmarkbage/status/1156981610434056192',
    // insight: 'My philosophy on abstractions (like React components): If your abstraction works in 9 out of 10 cases. That's a good abstraction. If it's insufficient in one of those cases, then copy/paste (i.e. decompose into its pieces) and tweak it for that case. Don't change the abstraction.',
    insight: '我对抽象的哲学（如 React 组件）：如果你的抽象在 10 个案例中有 9 个有效。那是好的抽象。如果在其中一种情况下还不够，那么复制/粘贴（即分解成小的片段）并针对这种情况进行调整。不要改变抽象。'
  },
  {
    name: 'Callie Riggins',
    workWith: 'Airbnb',
    avatar: '/learning-patterns/images/dalao/1HgsF4.jpg',
    link: 'https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91#:~:text=It%E2%80%99s%20important%20to,moment%20has%20completed.',
    // insight: 'Most sites load a large amount of third-party libraries. It's important to measure and understand the impact these have on a user's initial loading experience. Airbnb prioritizes getting to the point where a user can enter a search term, which requires us to load some JavaScript and “hydrate” our page with React. It might make sense to defer certain tasks until that key moment has completed.',
    insight: '大多数站点会加载大量第三方库。衡量和了解这些对用户初始加载体验的影响非常重要。Airbnb 优先考虑用户可以输入搜索词的位置，这需要我们加载一些 JavaScript 并使用 React “注水”到我们的页面。在这一关键时刻完成之前推迟某些任务可能是有意义的。'
  },
  {
    name: 'Jason Miller',
    workWith: 'Preact',
    avatar: '/learning-patterns/images/dalao/19s1SS.jpg',
    link: 'https://jasonformat.com/islands-architecture/',
    // insight: 'When it comes down to it, shipping an architecture that requires less code to do something is the type of long-term benefit your future self (or coworkers) will thank you for. It's possible — likely, even — that adopting a model like this requires more up-front design thinking. There are far few batteries-included options available for decomposing apps into independently deliverable widgets.',
    insight: '归根结底，交付一个需要更少代码来的架构是未来的你自己（或同事）会感谢你的一种长期收益的做法。有可能——甚至很可能——采用这样的模型需要更多的前期设计思维。很少有自备全套工具库的选项可用于将应用程序分解为可独立交付的小部件。'
  },
  {
    name: 'Lauren Tan',
    workWith: 'React',
    avatar: '/learning-patterns/images/dalao/1wpDkp.jpg',
    link: 'https://twitter.com/sugarpirate_/status/1341131914078511110',
    // insight: 'In "thick" client apps, product code (everything else) takes up the majority of the client bundle size. There's a real opp here to move that into Server Components which can reduce that footprint significantly. As an example, consider the case of deeply wrapped components that ultimately render to a single div. Server Components could help remove that abstraction tax.',
    insight: '在“重”客户端应用程序中，产品代码（和其他所有内容）占据了客户端包大小的大部分。这里有一个真正的机会，可以将其转移到服务器组件中，这可以显着减少占用空间。例如，考虑最终渲染为单个 div 的深度包装组件的情况。服务器组件可以帮助消除这种抽象税。'
  },
  {
    name: 'Ben Hong',
    workWith: 'Vue.js',
    avatar: '/learning-patterns/images/dalao/hHNrq.jpg',
    link: 'https://www.vuemastery.com/courses/component-design-patterns/introduction/#:~:text=In%20other%20words,given%20another%20context.',
    // insight: 'If you feel like you have good reason to believe a best practice or technique is not a good fit for your app, then you should trust your instincts and move forward with your solution. Sometimes a technique or best practice that might work well in many contexts can actually be an anti-pattern given another context.',
    insight: '如果你觉得你有充分的理由相信最佳实践或技术不适合你的应用，那么你应该相信你的直觉并继续你自己的解决方案。有时，在许多情况下可能运行良好的技术或最佳实践实际上可能在另一个给定上下文中的反模式。'
  },
  {
    name: 'Nolan Lawson',
    workWith: 'Salesforce',
    avatar: '/learning-patterns/images/dalao/Z3WClf-283842.png',
    link: 'https://nolanlawson.com/2021/02/23/javascript-performance-beyond-bundle-size/#:~:text=Performance%20is%20a%20multi%2Dfaceted%20thing.%20It%20would%20be%20great%20if%20we%20could%20reduce%20it%20down%20to%20a%20single%20metric%20such%20as%20bundle%20size%2C%20but%20if%20you%20really%20want%20to%20cover%20all%20the%20bases%2C%20there%20are%20a%20lot%20of%20different%20angles%20to%20consider.',
    // insight: 'Performance is a multi-faceted thing. It would be great if we could reduce it down to a single metric such as bundle size, but if you really want to cover all the bases, there are a lot of different angles to consider. These can include runtime CPU costs, power consumption and memory.',
    insight: '性能是一个多方面的东西。如果我们可以将它减少到一个单一的指标，比如捆绑大小，那就太好了，但是如果你真的想涵盖所有的基础，那么有很多不同的角度需要考虑。这些可能包括运行时 CPU 成本、功耗和内存。'
  },
  {
    name: 'Fred K Schott',
    workWith: 'Astro / Snowpack',
    avatar: '/learning-patterns/images/dalao/Z6p1u1.jpg',
    link: 'https://dev.to/fredkschott/5-things-i-learned-while-building-snowpack-to-20-000-stars-b9d#:~:text=When%20you%27re%20working,a%20bit%20messy.',
    // insight: 'When you're working on a new project, you rarely know what code will be important long-term and what code is about to be deleted. I've thrown away enough code in my career to have learned that there's sometimes value in fast, messy coding. When you're starting a new project, it's okay to be a bit messy.',
    insight: '当你在一个新项目上工作时，你很少知道哪些代码会长期重要，哪些代码将被删除。在我的职业生涯中，我已经丢弃了足够多的代码，从而了解到有时快速、混乱的编码是有价值的。当你开始一个新项目时，有点混乱是可以的。'
  },
  {
    name: 'Shane Osbourne',
    workWith: 'DuckDuckGo',
    avatar: '/learning-patterns/images/dalao/Z1vmwo7.png',
    link: 'https://twitter.com/shaneOsbourne/status/1360717747970269193',
    // insight: 'It's not enough to simply 'disable all JavaScript' and pretend that's enough for most sites. In reality we want the best of all worlds. We want to develop in the React/component model (hot reloading etc) -> have it create HTML at build time ~> only load tiny JS when needed.',
    insight: '仅仅“禁用所有 JavaScript”并假装这对大多数网站来说就足够了是不够的。实际上，我们想要世界上最好的。我们想在 React/component 模型中开发（热重载等）-> 让它在构建时创建 HTML ~> 只在需要时加载微小的 JS。'
  },
  {
    name: 'Jean Yang',
    workWith: 'Akita',
    avatar: '/learning-patterns/images/dalao/1I3PJQ.jpg',
    link: 'https://twitter.com/jeanqasaur/status/1455589141299675139',
    // insight: 'The solutions that engineers at (large companies) come up with aren't for the vast majority of software shops: they're often best for big companies that can afford to set a high engineering bar, that can afford large infrastructure teams and ops teams. There's a huge gap between what developer-influencers are writing about, versus the daily reality of most developers.',
    insight: '（大公司）工程师提出的解决方案不适用于绝大多数软件商店：它们通常最适合能够负担得起设置高工程标准的大公司，能够负担得起大型基础设施团队和运营团队。有影响力的开发人员所写的内容与大多数开发人员的日常现实之间存在巨大差距。'
  },
  {
    name: 'Minko Gechev',
    workWith: 'Angular',
    avatar: '/learning-patterns/images/dalao/2nxdjz.jpg',
    link: 'https://twitter.com/mgechev/status/1104950408542281731',
    // insight: 'UI is a composition of components (Angular, React, etc), with composite and leaf components. Similarly, in the file system we have directories and files. Since the component tree and the file system have the same structure we can apply the same algorithms on top of them.',
    insight: 'UI 是组件（Angular、React 等）的组合，具有复合组件和叶子组件。同样，在文件系统中，我们有目录和文件。由于组件树和文件系统具有相同的结构，我们可以在它们之上应用相同的算法。'
  },
  {
    name: 'Kris Baxter',
    workWith: 'Google Search',
    avatar: '/learning-patterns/images/dalao/IuMJt.jpg',
    link: 'https://twitter.com/kristoferbaxter/status/1403716060898004995',
    // insight: 'Front End tech disagreements can many times be summed up as unwillingness to see items from different perspectives. CSS scoping is different for documents versus apps. JS complexity is sometimes necessitated by business requirements. It's never "just" one answer.',
    insight: '前端技术分歧很多时候可以概括为不愿意从不同的角度看待项目。文档和应用的 CSS 作用范围不同。JS 复杂性有时是业务需求所必需的。它永远不会“只是”一个答案。'
  },
  {
    name: 'Malte Ubl',
    workWith: 'Google Search',
    avatar: '/learning-patterns/images/dalao/Z1lhj6V.jpg',
    link: 'https://twitter.com/cramforce/status/1433460720180416522',
    // insight: 'There are nuanced but common trade-offs that make it totally reasonably to be right with both choices (in the SPA vs. MPA debate) depending on the situation. Like any other engineering decision. Write down your goals and non-goals and then analyze the trade-offs of the options and pick the one that seems to achieve more goals with fewer trade-offs.',
    insight: '根据具体情况，存在细微但常见的权衡，这使得两种选择（在 SPA 与 MPA 辩论中）都是完全合理的。写下你的目标和非目标，然后分析选项的取舍，并选择一个似乎以更少的取舍实现更多目标的选项。'
  },
  {
    name: 'Sophie Alpert',
    workWith: 'Humu',
    avatar: '/learning-patterns/images/dalao/KGc9s.jpg',
    link: 'https://sophiebits.com/2020/01/01/fast-maintainable-db-patterns.html#:~:text=Facilitating%20local%20reasoning,a%20large%20organization.',
    // insight: 'Facilite local reasoning. You should be able to worry about each part of your code in isolation, without holding the entire system in your head. In my experience, this is the key to making complex systems scale, especially (but not only) in a large organization.',
    insight: '促进局部推理。您应该能够独立地关注代码的每个部分，而无需将整个系统放在脑海中。以我的经验，这是使复杂系统规模化的关键，尤其是（但不仅）在大型组织中。'
  },
  {
    name: 'Kara Erickson',
    workWith: 'Google Chrome',
    avatar: '/learning-patterns/images/dalao/Z1QH0Bo.jpg',
    link: 'https://www.youtube.com/watch?v=Nl4OwNhh2QI',
    // insight: 'Different app types can lead to different LCP outcomes. SSG (using getStaticProps() to fetch your data and prerender your app at build time), SSR (using getServerSideProps() to fetch your data and prerender your app at request time), CSR (application shell on server, then fetch your data on the client side and re-render) and ISR (which is where you can build your site statically for some subset of pages -- and render the rest of the pages on-demand).',
    insight: '不同的应用类型会导致不同的 <span class="pink" title="LCP (Largest Contentful Paint) 是一个以用户为中心的性能指标，可以测试用户感知到的页面加载速度，因为当页面主要内容可能加载完成的时候，它记录下了这个时间点。 一个快速的LCP，可以让用户感受到这个页面的可用性。">LCP</span> 结果。SSG（使用 getStaticProps() 在构建时获取您的数据并预渲染您的应用程序），SSR（使用 getServerSideProps() 获取您的数据并在请求时预呈现您的应用程序），CSR（服务器上的应用程序外壳，然后在客户端获取您的数据并重新渲染）和 ISR（您可以在其中为某些页面子集静态构建站点——并按需渲染其余页面）。'
  },
  {
    name: '尤雨溪',
    workWith: 'Vue.js',
    avatar: '/learning-patterns/images/dalao/1tEYUY.jpg',
    link: 'https://evrone.com/evan-you-interview#:~:text=It%C2%A0actually%20takes,make%20it%C2%A0better.',
    // insight: 'It takes quite some experience to write boring but easy to understand code. I don't think you should feel unqualified to write software just because you didn't go through rigorous CS training, but I also don't think you should ignore them. I took a pragmatic approach where I did a lot of things the dumb way first, which helps to reveal what I needed to learn to make it better.',
    insight: '写枯燥但易于理解的代码需要相当多的经验。我认为你不应该因为没有经过严格的计算机相关专业培训而觉得自己没有资格编写软件，但我也不认为你应该忽视它们。我采取了一种务实的做法，首先我以愚蠢的方式做了很多事情，这有助于揭示我需要学习什么才能让它变得更好。'
  },
  {
    name: 'Houssein Djirdeh',
    workWith: 'Google Chrome',
    avatar: '/learning-patterns/images/dalao/Z10ABsr.jpg',
    link: 'https://houssein.me/progressive-react#:~:text=It%E2%80%99s%20important%20to,good%20first%20step.',
    // insight: 'It’s important to note that every site and user base is different. Many developers that ship over 300 KB of JavaScript do not have a problem with how well it performs for most of their users, and that’s fine. However, if you happen to be concerned that the performance of your React site could be better for your users, profiling is always a good first step.',
    insight: '需要注意的是，每个站点和用户群都是不同的。许多发布超过 300 KB JavaScript 的开发人员对大多数用户的性能没有问题，这很好。但是，如果您碰巧担心您的 React 站点的性能可能对您的用户更好，那么分析始终是一个很好的第一步。'
  },
  {
    name: 'Rich Harris',
    workWith: 'Svelte',
    avatar: '/learning-patterns/images/dalao/Z2jV8Xo.jpeg',
    link: 'https://twitter.com/Rich_Harris/status/1188160012604133376',
    // insight: 'If we use tools that let us express the same ideas with less code, just like jQuery did, our apps will be more robust. I've spent my career at the intersection of journalism and software, and I've come to believe that writing code has more in common with writing prose than it does with engineering.',
    insight: '如果我们使用能够让我们用更少的代码表达相同想法的工具，就像 jQuery 所做的那样，我们的应用程序将会更加健壮。我的职业生涯是在新闻和软件的交叉领域度过的，我开始相信编写代码与写散文的共同点比与工程的共同点要多。'
  },
  {
    name: 'Justin Fagnani',
    workWith: 'Lit',
    avatar: '/learning-patterns/images/dalao/1mDdRy.jpeg',
    link: 'https://twitter.com/justinfagnani/status/1212889767181840386',
    // insight: 'I've been using Eleventy a lot recently and loving it because it so nicely handles the fully static extreme, while web components handle the dynamic side and trivially integrate with eleventy because they're just HTML elements. It's a really great dev and user experience.',
    insight: '我最近一直在使用 Eleventy 并且喜欢它，因为它可以很好地处理完全静态的极端，而 Web 组件可以处理动态方面并且可以轻松地与 Eleventy 集成，因为它们只是 HTML 元素。这是一个非常棒的开发和用户体验。'
  },
  {
    name: 'Brian Rinaldi',
    workWith: 'LaunchDarkly',
    avatar: '/learning-patterns/images/dalao/ZnDO8L-216712.jpg',
    link: 'https://bejamas.io/blog/understanding-rendering-in-the-jamstack/?utm_source=pocket_mylist#:~:text=Below%20is%20a%20quick%20overview%20of%20different%20types%20of%20rendering%20options%20we%20discussed%20that%20are%20currently%20available%20in%20Jamstack%20applications%20and%20a%20quick%20rule%20of%20thumb%20on%20when%20to%20use%20them',
    // insight: 'Begin with a "static first" philosophy when building a Jamstack site. Use deferred rendering when you have to render a lot of pages. Use SSR judiciously whenever the content cannot be statically rendered. Use edge rendering when you need to modify pages that have already been rendered.',
    insight: '在构建 Jamstack 站点时，从“静态优先”的理念开始。当您必须渲染大量页面时，请使用延迟渲染。每当内容无法静态呈现时，请明智地使用 SSR。当您需要修改已经渲染的页面时，使用边缘渲染。'
  },
  {
    name: 'Henrik Joreteg',
    workWith: 'Software Engineer',
    avatar: '/learning-patterns/images/dalao/Z2ksdoj.jpg',
    link: 'https://joreteg.com/blog/viability-of-js-frameworks-on-mobile',
    // insight: 'How many web developers, to this day, don't test on a phone locally when building apps? This isn't just about small screens, we need to assume that we're building for weaker, slower computers. I think we need to bake mobile into our dev workflow, not just as some final pre-launch check.',
    insight: '时至今日，有多少 Web 开发人员在构建应用程序时不会在本地手机上进行测试？这不仅仅是小屏幕，我们需要假设我们正在为更弱、更慢的计算机构建。我认为我们需要将移动设备纳入我们的开发工作流程，而不仅仅是作为一些最终的发布前检查。'
  },
  {
    name: 'David K Piano',
    workWith: 'Software Engineer',
    avatar: '/learning-patterns/images/dalao/1pyzEo.jpg',
    link: 'https://twitter.com/DavidKPiano/status/1219688136118276098',
    // insight: 'To beginner developers, "anti-pattern" means "never do this" when in reality, it should mean "evaluate if/when you should do this and understand the caveats"',
    insight: '对于初学者开发人员，“反模式”意味着“从不这样做”，而实际上，它应该意味着“评估是否/何时应该这样做并理解警告”'
  },
  {
    name: 'Alex Russell',
    workWith: 'Microsoft Edge',
    avatar: '/learning-patterns/images/dalao/ZJX8Wn.jpg',
    link: 'https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/#:~:text=Performance%20budgets%20keep,investments%20being%20made.',
    // insight: 'Performance budgets keep everyone on the same page. They help to create a culture of shared enthusiasm for improving the lived user experience. Teams with budgets also find it easier to track and graph progress. This helps support executive sponsors who then have meaningful metrics to point to in justifying the investments being made.',
    insight: '性能预算让每个人都在同一个页面上。它们有助于营造一种共享热情的文化，以改善现场用户体验。有预算的团队也发现更容易跟踪和绘制进度图。这有助于支持执行发起人，然后他们可以通过有意义的指标来证明所进行的投资是合理的。'
  },
  {
    name: 'Lee Robinson',
    workWith: 'Next.js and Vercel',
    avatar: '/learning-patterns/images/dalao/2s6j8c.jpg',
    link: 'https://twitter.com/leeerob/status/1353523847937536000',
    // insight: 'As (React) web apps became more complex, new solutions emerged to more easily share logic between components. Redux quickly grew to the most popular state management solution. React Context gave us a first-party solution to share logic between components. This solved UI state for many cases. Eventually we will have `useSelectedContext`.',
    insight: '随着（React）Web 应用程序变得越来越复杂，出现了新的解决方案，可以更轻松地在组件之间共享逻辑。 Redux 迅速成长为最流行的状态管理解决方案。React Context 为我们提供了在组件之间共享逻辑的第一方解决方案。这解决了许多情况下的 UI 状态。最终我们会有`useSelectedContext`。'
  },
  {
    name: 'Kyle Shevlin',
    workWith: 'Software Engineer',
    avatar: '/learning-patterns/images/dalao/ZHuEia.jpg',
    link: 'https://kyleshevlin.com/use-encapsulation',
    // insight: 'I recommend that Components should only consume custom hooks, no primitive hooks. Encapsulate your concerns and convey the context correctly via custom hooks.',
    insight: '我建议组件应该只使用自定义钩子，不要使用原始钩子。封装您的关注点并通过自定义钩子正确传达上下文。'
  },
  {
    name: 'Cher Scarlett',
    workWith: 'Software Engineer',
    avatar: '/learning-patterns/images/dalao/1UFhcr.jpg',
    link: 'https://twitter.com/cherthedev/status/1196863990003044353',
    // insight: 'You should not be using Context as a global state. You should be using a state machine if it's needed, but moving your state DOWN will generally solve any "too many re-render" issues you are having.',
    insight: '您不应该将 Context 用作全局状态。如果需要，您应该使用状态机，但是将您的状态向下移动通常会解决您遇到的任何“重新渲染过多”问题。'
  },
  {
    name: 'Kat Marchan',
    workWith: 'Software Engineer',
    avatar: '/learning-patterns/images/dalao/ZBAPrI-17535.jpg',
    link: 'https://twitter.com/zkat__/status/1426029935509090304',
    // insight: 'Stop treating your code like some precious gem that you're handing down you future generations. They don't give a shit about your abstractions, your DRY, or your brilliant design.Legacy code becomes legacy by doing its job well enough that no one wants to touch it.',
    insight: '停止将您的代码视为将传给后人的珍宝。他们不在乎你的抽象、你的 <span class="pink" title="DRY (Don\'t Repeat Yourself) 原则：尽量不要使用功能重复的代码原则">DRY</span> 或你出色的设计。祖传代码的价值在于能稳定工作而无需触碰的特质。'
  },
  {
    name: 'Tom Dale',
    workWith: 'Ember',
    avatar: '/learning-patterns/images/dalao/1DYgrO-90888.jpg',
    link: 'https://twitter.com/tomdale/status/1170085911809449985',
    // insight: 'Here's my take on UI as pure functions vs. embracing the mutability of the DOM...No one gives a shit. People use what's easy to adopt and makes them feel productive. Everything else is a mythology you build up around your project to make its success seem more profound than that.',
    insight: '这是我对 UI 作为纯函数对比拥抱 DOM 的可变性的看法……没有人在乎。人们使用易于使用的东西并让他们感到高效。其他一切都是您围绕项目建立的神话，以使其成功看起来比这更深刻。'
  }
]

</script>

<style lang="scss" scoped>
.list {
  width: 900px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 50px 0;

  .item {
    width: 48%;
    margin-bottom: 30px;
  }
}
</style>