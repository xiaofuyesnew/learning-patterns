import{A as t}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as p}from"./chunks/BiliBili.f6d1f9d1.js";import{C as l}from"./chunks/CodePreview.8b929ecb.js";import{o as c,c as r,d as s,e as a,b as n,g as o}from"./app.ba39ac68.js";const i=a("",8),F=a("",10),y=a("",8),D=a("",3),C=n("h3",{id:"依赖隐藏",tabindex:"-1"},[o("依赖隐藏 "),n("a",{class:"header-anchor",href:"#依赖隐藏","aria-hidden":"true"},"#")],-1),d=n("p",null,[o("导入另一个模块时，在此例子中是 "),n("code",null,"superCounter.js"),o(" ，模块正导入的是一个单例可能并不明显。在其他文件中，在此例子中例如 "),n("code",null,"index.js"),o(" ，我们可能正在导入那个模块并且调用它的方法。因此，我们意外地修改了单例中的值。这可能会导致意外行为，因为可以在整个应用中共享单例的多个实例，这些实例也将同时被改变。")],-1),A=a("",11),S=JSON.parse('{"title":"单例模式","description":"","frontmatter":{"title":"单例模式","editLink":true},"headers":[{"level":2,"title":"优势（劣势）","slug":"优势-劣势","link":"#优势-劣势","children":[{"level":3,"title":"使用字面量对象","slug":"使用字面量对象","link":"#使用字面量对象","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":3,"title":"依赖隐藏","slug":"依赖隐藏","link":"#依赖隐藏","children":[]},{"level":3,"title":"全局行为","slug":"全局行为","link":"#全局行为","children":[]},{"level":3,"title":"React 中的状态管理","slug":"react-中的状态管理","link":"#react-中的状态管理","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/singleton.md"}'),u={name:"design/singleton.md"},T=Object.assign(u,{setup(h){const e=[`let count = 0;

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
}`];return(g,m)=>(c(),r("div",null,[s(t,{title:"单例模式",sub:"在应用中共享同一个全局实例"}),i,s(p,{video:"//player.bilibili.com/player.html?aid=514695213&bvid=BV1Jg411r7K5&cid=810086536&page=1"}),F,s(p,{video:"//player.bilibili.com/player.html?aid=217167501&bvid=BV1Pa41157Cv&cid=810086539&page=1"}),y,s(l,{code:e[0],preview:"https://codesandbox.io/embed/competent-moon-rvzrr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),D,s(l,{code:e[1],preview:"https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=0&view=preview&previewwindow=tests&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),C,d,s(l,{code:e[2],preview:"https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),A]))}});export{S as __pageData,T as default};
