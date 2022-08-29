import{A as p}from"./chunks/ArticleTitle.5d839822.js";import{B as s}from"./chunks/BiliBili.6c47bce3.js";import{C as r}from"./chunks/CodePreview.9728cf65.js";import{o as i,c as l,b as e,d as n,e as t,g as o}from"./app.4c314623.js";const c=t("",7),d=t("",4),h=t("",5),m=e("p",null,"Combining these two components together makes it possible to separate handling application logic with the view.",-1),g=t("",5),y=e("p",null,[o("By using the "),e("code",null,"useDogImages"),o(" hook, we still separated the application logic from the view. We're simply using the returned data from the "),e("code",null,"useDogImages"),o(" hook, without modifying that data within the "),e("code",null,"DogImages"),o(" component.")],-1),u=t("",12),b=JSON.parse('{"title":"\u5BB9\u5668/\u5C55\u793A\u6A21\u5F0F","description":"","frontmatter":{"title":"\u5BB9\u5668/\u5C55\u793A\u6A21\u5F0F","editLink":true},"headers":[{"level":2,"title":"Presentational Component","slug":"presentational-component"},{"level":2,"title":"Container Components","slug":"container-components"},{"level":2,"title":"Hooks","slug":"hooks"},{"level":2,"title":"Pros","slug":"pros"},{"level":2,"title":"Cons","slug":"cons"},{"level":2,"title":"References","slug":"references"}],"relativePath":"design/container_presentational.md"}'),f={name:"design/container_presentational.md"},k=Object.assign(f,{setup(F){const a=[`import React from "react";

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
}`];return(D,_)=>(i(),l("div",null,[e("p",null,[n(p,{title:"\u5BB9\u5668/\u5C55\u793A\u6A21\u5F0F",sub:"\u4ECE\u5E94\u7528\u903B\u8F91\u4E2D\u5206\u79BB\u89C6\u56FE\u4EE5\u5F3A\u5236\u5206\u79BB\u5173\u6CE8\u70B9"})]),c,e("p",null,[n(s,{video:"//player.bilibili.com/player.html?aid=814979843&bvid=BV1vG4y1k7Bz&cid=814221752&page=1"})]),d,e("p",null,[n(r,{code:a[0],preview:"https://codesandbox.io/embed/sleepy-murdock-if0ec?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),h,e("p",null,[n(r,{code:a[1],preview:"https://codesandbox.io/embed/sleepy-murdock-if0ec?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),m,e("p",null,[n(s,{video:"//player.bilibili.com/player.html?aid=387384021&bvid=BV1kd4y1d71v&cid=814221815&page=1"})]),g,e("p",null,[n(r,{code:a[2],preview:"https://codesandbox.io/embed/rough-brook-tzp7i?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),y,e("p",null,[n(s,{video:"//player.bilibili.com/player.html?aid=302483064&bvid=BV1xP411L7o7&cid=814221836&page=1"})]),u]))}});export{b as __pageData,k as default};
