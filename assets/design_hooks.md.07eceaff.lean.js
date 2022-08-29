import{A as l}from"./chunks/ArticleTitle.5d839822.js";import{C as o}from"./chunks/CodePreview.9728cf65.js";import{o as t,c as p,b as s,d as n,e as a}from"./app.4c314623.js";const c="/learning-patterns/images/clasvshoks1.001.png",r="/learning-patterns/images/classicalvshooks2.001.png",i=a("",16),F=a("",10),y=a("",22),D=a("",8),d=a("",9),h=a("",6),u=a("",37),b=JSON.parse('{"title":"\u94A9\u5B50\u6A21\u5F0F","description":"","frontmatter":{"title":"\u94A9\u5B50\u6A21\u5F0F","editLink":""},"headers":[{"level":2,"title":"Class \u7EC4\u4EF6","slug":"class-\u7EC4\u4EF6"},{"level":3,"title":"\u7406\u89E3 ES2015 \u7684\u7C7B","slug":"\u7406\u89E3-es2015-\u7684\u7C7B"},{"level":3,"title":"\u91CD\u7EC4","slug":"\u91CD\u7EC4"},{"level":3,"title":"\u590D\u6742\u5EA6","slug":"\u590D\u6742\u5EA6"},{"level":2,"title":"hooks","slug":"hooks"},{"level":3,"title":"State Hook","slug":"state-hook"},{"level":2,"title":"Effect Hook","slug":"effect-hook"},{"level":2,"title":"Custom Hooks","slug":"custom-hooks"},{"level":2,"title":"Additional Hooks guidance","slug":"additional-hooks-guidance"},{"level":3,"title":"Adding Hooks","slug":"adding-hooks"},{"level":3,"title":"React Hooks vs Classes","slug":"react-hooks-vs-classes"}],"relativePath":"design/hooks.md"}'),C={name:"design/hooks.md"},k=Object.assign(C,{setup(A){const e=[`import React from "react";
import "./styles.css";

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = { enabled: false };
  }

  render() {
    const { enabled } = this.state;
    const btnText = enabled ? "enabled" : "disabled";

    return (
      <div
        className={\`btn enabled-\${enabled}\`}
        onClick={() => this.setState({ enabled: !enabled })}
      >
        {btnText}
      </div>
    );
  }
}`,`import React from "react";
import "./styles.css";

import { Count } from "./Count";
import { Width } from "./Width";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      width: 0
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <div className="App">
        <Count
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <div id="divider" />
        <Width width={this.state.width} />
      </div>
    );
  }
}`,`import React, { useState } from "react";

  export default function Input() {
    const [input, setInput] = useState("");

    return (
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        placeholder="Type something..."
      />
    );
  }`,`import React, { useState, useEffect } from "react";

export default function Input() {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(\`The user typed \${input}\`);
  }, [input]);

  return (
    <input
      onChange={e => setInput(e.target.value)}
      value={input}
      placeholder="Type something..."
    />
  );
}`,`import React from "react";
import useKeyPress from "./useKeyPress";

export default function Input() {
  const [input, setInput] = React.useState("");
  const pressQ = useKeyPress("q");
  const pressW = useKeyPress("w");
  const pressL = useKeyPress("l");

  React.useEffect(() => {
    console.log(\`The user pressed Q!\`);
  }, [pressQ]);

  React.useEffect(() => {
    console.log(\`The user pressed W!\`);
  }, [pressW]);

  React.useEffect(() => {
    console.log(\`The user pressed L!\`);
  }, [pressL]);

  return (
    <input
      onChange={e => setInput(e.target.value)}
      value={input}
      placeholder="Type something..."
    />
  );
}`,`import React, { useState, useEffect } from "react";
import "./styles.css";

import { Count } from "./Count";
import { Width } from "./Width";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  });

  return width;
}

export default function App() {
  const counter = useCounter();
  const width = useWindowWidth();

  return (
    <div className="App">
      <Count
        count={counter.count}
        increment={counter.increment}
        decrement={counter.decrement}
      />
      <div id="divider" />
      <Width width={width} />
    </div>
  );
}`];return(m,g)=>(t(),p("div",null,[s("p",null,[n(l,{title:"\u94A9\u5B50\u6A21\u5F0F",sub:"\u4F7F\u7528\u51FD\u6570\u5728\u5E94\u7528\u4E2D\u7684\u591A\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u91CD\u7528\u6709\u72B6\u6001\u903B\u8F91"})]),i,s("p",null,[n(o,{code:e[0],preview:"https://codesandbox.io/embed/throbbing-currying-2lp9w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),F,s("p",null,[n(o,{code:e[1],preview:"https://codesandbox.io/embed/bold-brown-bzhpw?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),y,s("p",null,[n(o,{code:e[2],preview:"https://codesandbox.io/embed/nervous-hoover-oicu6?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),D,s("p",null,[n(o,{code:e[3],preview:"https://codesandbox.io/embed/blissful-ramanujan-p237n?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),d,s("p",null,[n(o,{code:e[4],preview:"https://codesandbox.io/embed/billowing-pine-xplez?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),h,s("p",null,[n(o,{code:e[5],preview:"https://codesandbox.io/embed/eloquent-bhabha-2w0ll?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),u]))}});export{b as __pageData,k as default};
