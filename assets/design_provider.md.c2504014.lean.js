import{A as e}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as p}from"./chunks/BiliBili.f6d1f9d1.js";import{C as l}from"./chunks/CodePreview.8b929ecb.js";import{o as t,c,d as s,e as n,b as o}from"./app.ba39ac68.js";const r=n("",4),F=n("",11),D=o("hr",null,null,-1),y=o("p",null,"提供者模式对于共享全局数据非常有用。提供者模式的一个常见用例是与许多组件共享主题 UI 状态。",-1),C=o("p",null,"假设我们有一个显示列表的简单应用。",-1),i=n("",8),A=n("",19),d=n("",9),u=n("",4),_=JSON.parse('{"title":"提供者模式","description":"","frontmatter":{"title":"提供者模式","editLink":true},"headers":[{"level":2,"title":"钩子","slug":"钩子","link":"#钩子","children":[]},{"level":2,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/provider.md"}'),m={name:"design/provider.md"},B=Object.assign(m,{setup(h){const a=[`import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);`,`import React, { useState } from "react";
import "./styles.css";

import List from "./List";
import Toggle from "./Toggle";

export const themes = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#171717",
    color: "#fff"
  }
};

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={\`App theme-\${theme}\`}>
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        <>
          <Toggle />
          <List />
        </>
      </ThemeContext.Provider>
    </div>
  );
}`,`import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./styles.css";

import List from "./List";
import Toggle from "./Toggle";

export const themes = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#171717",
    color: "#fff"
  }
};

export default function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={\`App theme-\${theme}\`}>
      <ThemeProvider theme={themes[theme]}>
        <>
          <Toggle toggleTheme={toggleTheme} />
          <List />
        </>
      </ThemeProvider>
    </div>
  );
}`,`import React, { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./styles.css";

const CountContext = createContext(null);

function Reset() {
  const { setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(0)}>Reset count</button>
      <div>Last reset: {moment().format("h:mm:ss a")}</div>
    </div>
  );
}

function Button() {
  const { count, setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Current count: {count}</div>
    </div>
  );
}

function useCountContext() {
  const context = useContext(CountContext);
  if (!context)
    throw new Error(
      "useCountContext has to be used within CountContextProvider"
    );
  return context;
}

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <CountContextProvider>
        <Button />
        <Reset />
      </CountContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`];return(g,v)=>(t(),c("div",null,[s(e,{title:"提供者模式",sub:"使数据可用于多个子组件"}),r,s(p,{video:"//player.bilibili.com/player.html?aid=602330153&bvid=BV1FB4y1577Z&cid=811707894&page=1"}),F,s(p,{video:"//player.bilibili.com/player.html?aid=429759431&bvid=BV1WG41147SS&cid=811708074&page=1"}),D,y,C,s(l,{code:a[0],preview:"https://codesandbox.io/embed/busy-oskar-ifz3w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),i,s(l,{code:a[1],preview:"https://codesandbox.io/embed/quirky-sun-9djpl?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),A,s(l,{code:a[2],preview:"https://codesandbox.io/embed/divine-platform-gbuls?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),d,s(l,{code:a[3],preview:"https://codesandbox.io/embed/provider-pattern-2-4ke0w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),u]))}});export{_ as __pageData,B as default};
