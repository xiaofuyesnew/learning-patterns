import{A as p}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as l}from"./chunks/BiliBili.f6d1f9d1.js";import{C as t}from"./chunks/CodePreview.8b929ecb.js";import{o as r,c,d as s,e as a,b as e,g as o}from"./app.ba39ac68.js";const i=a("",7),d=a("",4),g=a("",5),m=e("p",null,"将这两种组件组合在一起使用就可以将应用逻辑与视图分开处理。",-1),y=a("",5),F=e("p",null,[o("通过使用 "),e("code",null,"useDogImages"),o(" 钩子，也能是应用逻辑与视图分开。这样做也只会使用从 "),e("code",null,"useDogImages"),o(" 钩子中获取到的数据，而不会修改 "),e("code",null,"DogImages"),o(" 组件中的数据。")],-1),D=a("",12),I=JSON.parse('{"title":"容器/展示模式","description":"","frontmatter":{"title":"容器/展示模式","editLink":true},"headers":[{"level":2,"title":"展示组件","slug":"展示组件","link":"#展示组件","children":[]},{"level":2,"title":"容器组件","slug":"容器组件","link":"#容器组件","children":[]},{"level":2,"title":"钩子","slug":"钩子","link":"#钩子","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/container_presentational.md"}'),_={name:"design/container_presentational.md"},T=Object.assign(_,{setup(h){const n=[`import React from "react";

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
