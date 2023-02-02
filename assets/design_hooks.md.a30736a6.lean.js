import{A as o}from"./chunks/ArticleTitle.a6bef2f2.js";import{C as e}from"./chunks/CodePreview.8b929ecb.js";import{o as l,c as t,d as s,e as n}from"./app.ba39ac68.js";const p="/learning-patterns/images/clasvshoks1.001.png",c="/learning-patterns/images/classicalvshooks2.001.png",r=n("",16),i=n("",10),y=n("",22),F=n("",8),D=n("",9),d=n("",6),h=n("",37),v=JSON.parse('{"title":"钩子模式","description":"","frontmatter":{"title":"钩子模式","editLink":""},"headers":[{"level":2,"title":"Class 组件","slug":"class-组件","link":"#class-组件","children":[{"level":3,"title":"理解 ES2015 的类","slug":"理解-es2015-的类","link":"#理解-es2015-的类","children":[]},{"level":3,"title":"重组","slug":"重组","link":"#重组","children":[]},{"level":3,"title":"复杂度","slug":"复杂度","link":"#复杂度","children":[]}]},{"level":2,"title":"hooks","slug":"hooks","link":"#hooks","children":[{"level":3,"title":"State Hook","slug":"state-hook","link":"#state-hook","children":[]}]},{"level":2,"title":"Effect Hook","slug":"effect-hook","link":"#effect-hook","children":[]},{"level":2,"title":"Custom Hooks","slug":"custom-hooks","link":"#custom-hooks","children":[]},{"level":2,"title":"Additional Hooks guidance","slug":"additional-hooks-guidance","link":"#additional-hooks-guidance","children":[{"level":3,"title":"Adding Hooks","slug":"adding-hooks","link":"#adding-hooks","children":[]},{"level":3,"title":"React Hooks vs Classes","slug":"react-hooks-vs-classes","link":"#react-hooks-vs-classes","children":[]}]}],"relativePath":"design/hooks.md"}'),u={name:"design/hooks.md"},k=Object.assign(u,{setup(C){const a=[`import React from "react";
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
}`];return(A,m)=>(l(),t("div",null,[s(o,{title:"钩子模式",sub:"使用函数在应用中的多个组件之间重用有状态逻辑"}),r,s(e,{code:a[0],preview:"https://codesandbox.io/embed/throbbing-currying-2lp9w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),i,s(e,{code:a[1],preview:"https://codesandbox.io/embed/bold-brown-bzhpw?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),y,s(e,{code:a[2],preview:"https://codesandbox.io/embed/nervous-hoover-oicu6?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),F,s(e,{code:a[3],preview:"https://codesandbox.io/embed/blissful-ramanujan-p237n?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),D,s(e,{code:a[4],preview:"https://codesandbox.io/embed/billowing-pine-xplez?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),d,s(e,{code:a[5],preview:"https://codesandbox.io/embed/eloquent-bhabha-2w0ll?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),h]))}});export{v as __pageData,k as default};
