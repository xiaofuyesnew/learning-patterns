import{A as p}from"./chunks/ArticleTitle.5d839822.js";import{B as t}from"./chunks/BiliBili.6c47bce3.js";import{C as e}from"./chunks/CodePreview.9728cf65.js";import{o as r,c,b as s,d as n,e as o,g as a}from"./app.4c314623.js";const F=o("",13),y=o("",10),D=s("hr",null,null,-1),i=s("p",null,[a("Although we can use the observer pattern in many ways, it can be very useful when working with "),s("strong",null,"asynchronous, event-based data"),a(". Maybe you want certain components to get notified whenever certain data has finished downloading, or whenever users sent new messages to a message board and all other members should get notified.")],-1),A=s("h2",{id:"case-study",tabindex:"-1"},[a("Case study "),s("a",{class:"header-anchor",href:"#case-study","aria-hidden":"true"},"#")],-1),C=s("p",null,"A popular library that uses the observable pattern is RxJS.",-1),d=s("blockquote",null,[s("p",null,[s("em",null,[s("strong",null,'"ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events. - RxJS"')])])],-1),h=s("p",null,"With RxJS, we can create observables and subscribe to certain events! Let\u2019s look at an example that\u2019s covered in their documentation, which logs whether a user was dragging in the document or not.",-1),u=o("",7),T=JSON.parse('{"title":"\u89C2\u5BDF\u8005\u6A21\u5F0F","description":"","frontmatter":{"title":"\u89C2\u5BDF\u8005\u6A21\u5F0F","editLink":true},"headers":[{"level":2,"title":"Case study","slug":"case-study"},{"level":2,"title":"Pros","slug":"pros"},{"level":2,"title":"Cons","slug":"cons"},{"level":2,"title":"References","slug":"references"}],"relativePath":"design/observer.md"}'),b={name:"design/observer.md"},E=Object.assign(b,{setup(g){const l=[`import React from "react";
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
);`];return(v,f)=>(r(),c("div",null,[s("p",null,[n(p,{title:"\u89C2\u5BDF\u8005\u6A21\u5F0F",sub:"\u5F53\u4E00\u4E2A\u4E8B\u4EF6\u53D1\u751F\u65F6\u4F7F\u7528\u53EF\u89C2\u5BDF\u5BF9\u8C61\u901A\u77E5\u89C2\u5BDF\u8005"})]),F,s("p",null,[n(t,{video:"//player.bilibili.com/player.html?aid=514859680&bvid=BV1Vg411D7bT&cid=811924586&page=1"})]),y,s("p",null,[n(e,{code:l[0],preview:"https://codesandbox.io/embed/quizzical-sinoussi-md8k5?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),D,i,A,C,d,h,s("p",null,[n(e,{code:l[1],preview:"https://codesandbox.io/embed/stoic-turing-kqq9z?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),u]))}});export{T as __pageData,E as default};
