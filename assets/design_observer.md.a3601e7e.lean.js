import{A as e}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as t}from"./chunks/BiliBili.f6d1f9d1.js";import{C as p}from"./chunks/CodePreview.8b929ecb.js";import{o as c,c as r,d as n,e as l,b as s,g as a}from"./app.ba39ac68.js";const F=l("",13),y=l("",9),D=s("hr",null,null,-1),i=s("p",null,[a("尽管我们可以通过多种方式使用观察者模式，但它在处理 "),s("strong",null,"异步的、基于事件的数据"),a(" 时非常有用。也许你希望一些组件在某些数据下载完成时得到通知，或者每当用户向留言板发送新消息时所有其他成员都会收到通知。")],-1),A=s("h2",{id:"案例分析",tabindex:"-1"},[a("案例分析 "),s("a",{class:"header-anchor",href:"#案例分析","aria-hidden":"true"},"#")],-1),C=s("p",null,"使用可观察模式的一个流行库是 RxJS。",-1),d=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,"ReactiveX 将观察者模式与迭代器模式以及使用集合的函数式编程相结合，以满足对管理事件序列需求的理想方式。—— RxJS")])])],-1),u=s("p",null,"使用 RxJS，我们可以创建可观察对象并订阅某些事件！让我们看一下其文档中包含的示例，该示例记录了用户是否在页面中进行拖动。",-1),g=l("",9),T=JSON.parse('{"title":"观察者模式","description":"","frontmatter":{"title":"观察者模式","editLink":true},"headers":[{"level":2,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/observer.md"}'),f={name:"design/observer.md"},k=Object.assign(f,{setup(b){const o=[`import React from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import observable from "./Observable";

function handleClick() {
  observable.notify("User clicked button!");
}

function handleToggle() {
  observable.notify("User toggled switch!");
}

function logger(data) {
  console.log(\`\${Date.now()} \${data}\`);
}

function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div className="App">
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
      <ToastContainer />
    </div>
  );
}`,`import React from "react";
import ReactDOM from "react-dom";
import { fromEvent, merge } from "rxjs";
import { sample, mapTo } from "rxjs/operators";

import "./styles.css";

merge(
  fromEvent(document, "mousedown").pipe(mapTo(false)),
  fromEvent(document, "mousemove").pipe(mapTo(true))
)
  .pipe(sample(fromEvent(document, "mouseup")))
  .subscribe(isDragging => {
    console.log("Were you dragging?", isDragging);
  });

ReactDOM.render(
  <div className="App">Click or drag anywhere and check the console!</div>,
  document.getElementById("root")
);`];return(h,m)=>(c(),r("div",null,[n(e,{title:"观察者模式",sub:"当一个事件发生时使用可观察对象通知观察者"}),F,n(t,{video:"//player.bilibili.com/player.html?aid=514859680&bvid=BV1Vg411D7bT&cid=811924586&page=1"}),y,n(p,{code:o[0],preview:"https://codesandbox.io/embed/quizzical-sinoussi-md8k5?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),D,i,A,C,d,u,n(p,{code:o[1],preview:"https://codesandbox.io/embed/stoic-turing-kqq9z?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),g]))}});export{T as __pageData,k as default};
