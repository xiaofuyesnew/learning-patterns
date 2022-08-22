---
title: '钩子模式'
editLink: ''
---

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = [
  `import React from "react";
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
}`,
  `import React from "react";
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
}`
]

</script>

<article-title title="钩子模式" sub="使用函数在应用中的多个组件之间重用有状态逻辑" />

---

React 16.8 introduced a new feature called Hooks. [Hooks](https://reactjs.org/docs/hooks-intro.html) make it possible to use React state and lifecycle methods, without having to use a ES2015 class component.

Although Hooks are not necessarily a design pattern, Hooks play a very important role in your application design. Many traditional design patterns can be replaced by Hooks.

<!-- ## Class components -->
## Class 组件

Before Hooks were introduced in React, we had to use class components in order to add state and lifecycle methods to components. A typical class component in React can look something like:

```JavaScript
class MyComponent extends React.Component {
  /* Adding state and binding custom methods */
  constructor() {
    super()
    this.state = { ... }

    this.customMethodOne = this.customMethodOne.bind(this)
    this.customMethodTwo = this.customMethodTwo.bind(this)
  }

  /* Lifecycle Methods */
  componentDidMount() { ...}
  componentWillUnmount() { ... }

  /* Custom methods */
  customMethodOne() { ... }
  customMethodTwo() { ... }

  render() { return { ... }}
}
```

A class component can contain a state in its constructor, lifecycle methods such as `componentDidMount` and `componentWillUnmount` to perform side effects based on a component's lifecycle, and custom methods to add extra logic to a class.

Although we can still use class components after the introduction of React Hooks, using class components can have some downsides! Let's look at some of the most common issues when using class components.

<!-- ### Understanding ES2015 classes -->
### 理解 ES2015 的类

Since class components were the only component that could handle state and lifecycle methods before React Hooks, we often ended up having to refactor functional components into a class components, in order to add the extra functionality.

In this example, we have a simple `div` that functions as a button.

```JavaScript
function Button() {
  return <div className="btn">disabled</div>;
}
```

Instead of always displaying `disabled`, we want to change it to `enabled` when the user clicks on the button, and add some extra CSS styling to the button when that happens.

In order to do that, we need to add state to the component in order to know whether the status is `enabled` or `disabled`. This means that we'd have to refactor the functional component entirely, and make it a class component that keeps track of the button's state.

```JavaScript
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
        className={`btn enabled-${enabled}`}
        onClick={() => this.setState({ enabled: !enabled })}
      >
        {btnText}
      </div>
    );
  }
}
```

Finally, our button works the way we want it to!

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/throbbing-currying-2lp9w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

In this example, the component is very small and refactoring wasn't a such a great deal. However, your real-life components probably contain of many more lines of code, which makes refactoring the component a lot more difficult.

Besides having to make sure you don't accidentally change any behavior while refactoring the component, you also need to **understand how ES2015 classes work**. Why do we have to `bind` the custom methods? What does the `constructor` do? Where does the `this` keyword come from? It can be difficult to know how to refactor a component properly without accidentally changing the data flow.

<!-- ### Restructuring -->
### 重组

The common way to share code among several components, is by using the [Higher Order Component](/design/hoc) or [Render Props](/design/render_props) pattern. Although both patterns are valid and a good practice, adding those patterns at a later point in time requires you to restructure your application.

Besides having to restructure your app, which is trickier the bigger your components are, having many wrapping components in order to share code among deeper nested components can lead to something that's best referred to as a ***wrapper hell***. It's not uncommon to open your dev tools and seeing a structure similar to:

```JavaScript
<WrapperOne>
  <WrapperTwo>
    <WrapperThree>
      <WrapperFour>
        <WrapperFive>
          <Component>
            <h1>Finally in the component!</h1>
          </Component>
        </WrapperFive>
      </WrapperFour>
    </WrapperThree>
  </WrapperTwo>
</WrapperOne>
```

The *wrapper hell* can make it difficult to understand how data is flowing through your application, which can make it harder to figure out why unexpected behavior is happening.

<!-- ### Complexity -->
### 复杂度

add more logic to class components, the size of the component increases fast. Logic within that component can get **tangled and unstructured**, which can make it difficult for developers to understand where certain logic is used in the class component. This can make debugging and optimizing performance more difficult.

Lifecycle methods also require quite a lot of duplication in the code. Let's take a look at an example, which uses a `Counter` component and a `Width` component.

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/bold-brown-bzhpw?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

The way the `App` component is structured can be visualized as the following:

![](/images/clasvshoks1.001.png)