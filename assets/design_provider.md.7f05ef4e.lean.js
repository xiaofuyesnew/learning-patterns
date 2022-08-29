import{A as e}from"./chunks/ArticleTitle.5d839822.js";import{B as o}from"./chunks/BiliBili.6c47bce3.js";import{C as p}from"./chunks/CodePreview.9728cf65.js";import{o as t,c,b as s,d as n,e as a}from"./app.4c314623.js";const r=a("",4),F=a("",11),D=s("hr",null,null,-1),y=s("p",null,"\u63D0\u4F9B\u8005\u6A21\u5F0F\u5BF9\u4E8E\u5171\u4EAB\u5168\u5C40\u6570\u636E\u975E\u5E38\u6709\u7528\u3002\u63D0\u4F9B\u8005\u6A21\u5F0F\u7684\u4E00\u4E2A\u5E38\u89C1\u7528\u4F8B\u662F\u4E0E\u8BB8\u591A\u7EC4\u4EF6\u5171\u4EAB\u4E3B\u9898 UI \u72B6\u6001\u3002",-1),C=s("p",null,"\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u663E\u793A\u5217\u8868\u7684\u7B80\u5355\u5E94\u7528\u3002",-1),A=a("",8),i=a("",19),d=a("",9),u=a("",4),f=JSON.parse('{"title":"\u63D0\u4F9B\u8005\u6A21\u5F0F","description":"","frontmatter":{"title":"\u63D0\u4F9B\u8005\u6A21\u5F0F","editLink":true},"headers":[{"level":2,"title":"\u94A9\u5B50","slug":"\u94A9\u5B50"},{"level":2,"title":"\u6848\u4F8B\u5206\u6790","slug":"\u6848\u4F8B\u5206\u6790"},{"level":2,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9"},{"level":2,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"design/provider.md"}'),m={name:"design/provider.md"},B=Object.assign(m,{setup(g){const l=[`import React from "react";
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

ReactDOM.render(<App />, document.getElementById("root"));`];return(h,v)=>(t(),c("div",null,[s("p",null,[n(e,{title:"\u63D0\u4F9B\u8005\u6A21\u5F0F",sub:"\u4F7F\u6570\u636E\u53EF\u7528\u4E8E\u591A\u4E2A\u5B50\u7EC4\u4EF6"})]),r,s("p",null,[n(o,{video:"//player.bilibili.com/player.html?aid=602330153&bvid=BV1FB4y1577Z&cid=811707894&page=1"})]),F,s("p",null,[n(o,{video:"//player.bilibili.com/player.html?aid=429759431&bvid=BV1WG41147SS&cid=811708074&page=1"})]),D,y,C,s("p",null,[n(p,{code:l[0],preview:"https://codesandbox.io/embed/busy-oskar-ifz3w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),A,s("p",null,[n(p,{code:l[1],preview:"https://codesandbox.io/embed/quirky-sun-9djpl?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),i,s("p",null,[n(p,{code:l[2],preview:"https://codesandbox.io/embed/divine-platform-gbuls?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),d,s("p",null,[n(p,{code:l[3],preview:"https://codesandbox.io/embed/provider-pattern-2-4ke0w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),u]))}});export{f as __pageData,B as default};
