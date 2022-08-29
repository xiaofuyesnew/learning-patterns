import{A as c}from"./chunks/ArticleTitle.5d839822.js";import{B as p}from"./chunks/BiliBili.6c47bce3.js";import{C as l}from"./chunks/CodePreview.9728cf65.js";import{o as t,c as r,b as s,d as n,e as a,g as o}from"./app.4c314623.js";const F=a("",8),D=a("",10),y=a("",8),i=a("",3),C=s("h3",{id:"\u4F9D\u8D56\u9690\u85CF",tabindex:"-1"},[o("\u4F9D\u8D56\u9690\u85CF "),s("a",{class:"header-anchor",href:"#\u4F9D\u8D56\u9690\u85CF","aria-hidden":"true"},"#")],-1),d=s("p",null,[o("\u5BFC\u5165\u53E6\u4E00\u4E2A\u6A21\u5757\u65F6\uFF0C\u5728\u6B64\u4F8B\u5B50\u4E2D\u662F "),s("code",null,"superCounter.js"),o(" \uFF0C\u6A21\u5757\u6B63\u5BFC\u5165\u7684\u662F\u4E00\u4E2A\u5355\u4F8B\u53EF\u80FD\u5E76\u4E0D\u660E\u663E\u3002\u5728\u5176\u4ED6\u6587\u4EF6\u4E2D\uFF0C\u5728\u6B64\u4F8B\u5B50\u4E2D\u4F8B\u5982 "),s("code",null,"index.js"),o(" \uFF0C\u6211\u4EEC\u53EF\u80FD\u6B63\u5728\u5BFC\u5165\u90A3\u4E2A\u6A21\u5757\u5E76\u4E14\u8C03\u7528\u5B83\u7684\u65B9\u6CD5\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u610F\u5916\u5730\u4FEE\u6539\u4E86\u5355\u4F8B\u4E2D\u7684\u503C\u3002\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u610F\u5916\u884C\u4E3A\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u5171\u4EAB\u5355\u4F8B\u7684\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u8FD9\u4E9B\u5B9E\u4F8B\u4E5F\u5C06\u540C\u65F6\u88AB\u6539\u53D8\u3002")],-1),A=a("",11),f=JSON.parse('{"title":"\u5355\u4F8B\u6A21\u5F0F","description":"","frontmatter":{"title":"\u5355\u4F8B\u6A21\u5F0F","editLink":true},"headers":[{"level":2,"title":"\u4F18\u52BF\uFF08\u52A3\u52BF\uFF09","slug":"\u4F18\u52BF\uFF08\u52A3\u52BF\uFF09"},{"level":3,"title":"\u4F7F\u7528\u5B57\u9762\u91CF\u5BF9\u8C61","slug":"\u4F7F\u7528\u5B57\u9762\u91CF\u5BF9\u8C61"},{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"},{"level":3,"title":"\u4F9D\u8D56\u9690\u85CF","slug":"\u4F9D\u8D56\u9690\u85CF"},{"level":3,"title":"\u5168\u5C40\u884C\u4E3A","slug":"\u5168\u5C40\u884C\u4E3A"},{"level":3,"title":"React \u4E2D\u7684\u72B6\u6001\u7BA1\u7406","slug":"react-\u4E2D\u7684\u72B6\u6001\u7BA1\u7406"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"design/singleton.md"}'),u={name:"design/singleton.md"},T=Object.assign(u,{setup(g){const e=[`let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };`,`import Counter from "../src/counterTest";

test("incrementing 1 time should be 1", () => {
  Counter.increment();
  expect(Counter.getCount()).toBe(1);
});

test("incrementing 3 extra times should be 4", () => {
  Counter.increment();
  Counter.increment();
  Counter.increment();
  expect(Counter.getCount()).toBe(4);
});

test("decrementing 1  times should be 3", () => {
  Counter.decrement();
  expect(Counter.getCount()).toBe(3);
});`,`import Counter from "./counter";

export default class SuperCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    Counter.increment();
    return (this.count += 100);
  }

  decrement() {
    Counter.decrement();
    return (this.count -= 100);
  }
}`];return(h,_)=>(t(),r("div",null,[s("p",null,[n(c,{title:"\u5355\u4F8B\u6A21\u5F0F",sub:"\u5728\u5E94\u7528\u4E2D\u5171\u4EAB\u540C\u4E00\u4E2A\u5168\u5C40\u5B9E\u4F8B"})]),F,s("p",null,[n(p,{video:"//player.bilibili.com/player.html?aid=514695213&bvid=BV1Jg411r7K5&cid=810086536&page=1"})]),D,s("p",null,[n(p,{video:"//player.bilibili.com/player.html?aid=217167501&bvid=BV1Pa41157Cv&cid=810086539&page=1"})]),y,s("p",null,[n(l,{code:e[0],preview:"https://codesandbox.io/embed/competent-moon-rvzrr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),i,s("p",null,[n(l,{code:e[1],preview:"https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=0&view=preview&previewwindow=tests&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),C,d,s("p",null,[n(l,{code:e[2],preview:"https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),A]))}});export{f as __pageData,T as default};
