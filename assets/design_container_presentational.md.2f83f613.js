import{A as p}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as l}from"./chunks/BiliBili.f6d1f9d1.js";import{C as t}from"./chunks/CodePreview.8b929ecb.js";import{o as r,c,d as s,e as a,b as e,g as o}from"./app.ba39ac68.js";const i=a('<hr><p>在 React 中，一种实现 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> 的方式是使用 <strong>容器/展示模式</strong> 。使用这种模式，我们能将视图与逻辑分开。</p><hr><p>假设我们要创建一个应用来获取 6 张狗的图片，并将这些图片渲染在屏幕上。</p><p>理想情况下，我们希望通过将此过程分为两部分来实现 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> ：</p><ol><li><strong>展示组件</strong> ：关注数据 <em><strong>如何</strong></em> 展示给用户的组件。在此例中，就是 <em>渲染狗图片的列表</em> ；</li><li><strong>容器组件</strong> ：关注向用户显示 <em><strong>什么</strong></em> 数据的组件。在此例中，就是 <em>获取狗的图片</em> 。</li></ol><hr>',7),d=a('<p>获取狗的图片处理的是 <strong>应用逻辑</strong> ，而显示图片只处理 <strong>视图</strong> 。</p><h2 id="展示组件" tabindex="-1">展示组件 <a class="header-anchor" href="#展示组件" aria-hidden="true">#</a></h2><p>展示组件通过 <code>props</code> 接收数据。它的主要功能就是简单地以我们希望的方式 <strong>显示接收到的数据</strong> ，包括样式，而 <em>不修改</em> 该数据。</p><p>让我们看一下显示狗的图片的例子。渲染狗的图片时，我们只想列举从 API 获取的每张狗的图片，然后渲染这些图片。为此，我们可以创建一个功能组件，它通过 <code>props</code> 接收数据，并渲染这些接收到的数据。</p>',4),g=a('<p>组件 <code>DogImages</code> 就是一个展示组件。展示组件 <em>通常</em> 是无状态的：它们不包含自己的 React 状态，除非它们出于 UI 目的需要状态。它们接收到的数据，不会被展示组件自身所修改。</p><p>展示组件从 <strong>容器组件</strong> 接收数据。</p><h2 id="容器组件" tabindex="-1">容器组件 <a class="header-anchor" href="#容器组件" aria-hidden="true">#</a></h2><p>容器组件的主要功能是 <strong>传递数据</strong> 给它所 <em>包含</em> 的展示组件。容器组件除了关注其数据的展示组件之外，并不会渲染任何其他组件。因为容器组件自身不渲染任何东西，它也通常不包含任何样式。</p><p>在我们的示例中，我们希望将狗的图片传递给 <code>DogsImages</code> 展示组件。在达成此点之前，需要从外部 API 获取图片。需要创建一个 <strong>容器组件</strong> 来获取此数据，并将这些数据传递给展示组件 <code>DogsImages</code> ，以将它显示在屏幕上。</p>',5),m=e("p",null,"将这两种组件组合在一起使用就可以将应用逻辑与视图分开处理。",-1),y=a(`<h2 id="钩子" tabindex="-1">钩子 <a class="header-anchor" href="#钩子" aria-hidden="true">#</a></h2><p>在许多情况下，容器/展示模式可以使用 React 钩子代替。钩子的引入使开发人员可以轻松添加有状态性，而无需容器组件来提供该状态。</p><p>可以创建一个自定义钩子来获取图片，并返回狗的数组，而不是在 <code>DogImagesContainer</code> 组件中去实现数据获取的逻辑。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useDogImages</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dogs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setDogs</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://dog.ceo/api/breed/labrador/images/random/6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">({</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">})</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setDogs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dogs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>通过使用这个钩子，就不再需要包装 <code>DogImagesContainer</code> 容器组件来获取数据，并将数据发送到展示组件 <code>DogImages</code> 。相反，可以直接在展示组件 <code>DogImages</code> 中使用这个钩子！</p>`,5),F=e("p",null,[o("通过使用 "),e("code",null,"useDogImages"),o(" 钩子，也能是应用逻辑与视图分开。这样做也只会使用从 "),e("code",null,"useDogImages"),o(" 钩子中获取到的数据，而不会修改 "),e("code",null,"DogImages"),o(" 组件中的数据。")],-1),D=a('<p>钩子可以很容易地分离组件中的逻辑和视图，就像容器/展示模式一样。它节省了将展示组件包装在容器组件中所必须的额外层。</p><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h2><p>使用容器/展示模式有很多好处。</p><p>容器/展示模式鼓励 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> 。展示组件可以是负责 UI 的纯函数，而容器组件负责应用的状态和数据。这使得实现 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> 变得容易。</p><p>展示组件很容易复用，因为它只是显示数据而不更改数据。可以出于不同的目的在整个应用中复用展示组件。</p><p>由于展示组件不会改变应用逻辑，其外观也很容易被不了解代码的人所更改，例如设计师。如果展示组件在应用的多处被复用，那么（对该组件的）更改就可以在整个应用中保持一致。</p><p>测试展示组件很容易，因为它们通常是纯函数。我们知道组件将根据我们传递的数据进行渲染，而无需模拟数据状态。</p><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h2><p>容器/展示模式很容易将应用逻辑与渲染逻辑分开。然而，钩子可以实现同样的效果，而无需使用此模式，也无需将无状态功能组件重构为类组件。请注意，现今，我们不再需要创建类组件来使用状态。</p><p>尽管我们仍然可以使用容器/展示模式，甚至可以跟 React 钩子一起使用，这种模式也容易在较小规模的应用中造成矫枉过正的局面。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank" rel="noreferrer">Presentational and Container Components - Dan Abramov</a></li></ul>',12),I=JSON.parse('{"title":"容器/展示模式","description":"","frontmatter":{"title":"容器/展示模式","editLink":true},"headers":[{"level":2,"title":"展示组件","slug":"展示组件","link":"#展示组件","children":[]},{"level":2,"title":"容器组件","slug":"容器组件","link":"#容器组件","children":[]},{"level":2,"title":"钩子","slug":"钩子","link":"#钩子","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/container_presentational.md"}'),_={name:"design/container_presentational.md"},T=Object.assign(_,{setup(h){const n=[`import React from "react";

export default function DogImages({ dogs }) {
  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}`,`import React from "react";
import DogImages from "./DogImages";

export default class DogImagesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message }) => this.setState({ dogs: message }));
  }

  render() {
    return <DogImages dogs={this.state.dogs} />;
  }
}`,`import React from "react";
import useDogImages from "./useDogImages";

export default function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}`];return(u,A)=>(r(),c("div",null,[s(p,{title:"容器/展示模式",sub:"从应用逻辑中分离视图以强制分离关注点"}),i,s(l,{video:"//player.bilibili.com/player.html?aid=814979843&bvid=BV1vG4y1k7Bz&cid=814221752&page=1"}),d,s(t,{code:n[0],preview:"https://codesandbox.io/embed/sleepy-murdock-if0ec?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),g,s(t,{code:n[1],preview:"https://codesandbox.io/embed/sleepy-murdock-if0ec?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),m,s(l,{video:"//player.bilibili.com/player.html?aid=387384021&bvid=BV1kd4y1d71v&cid=814221815&page=1"}),y,s(t,{code:n[2],preview:"https://codesandbox.io/embed/rough-brook-tzp7i?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),F,s(l,{video:"//player.bilibili.com/player.html?aid=302483064&bvid=BV1xP411L7o7&cid=814221836&page=1"}),D]))}});export{I as __pageData,T as default};
