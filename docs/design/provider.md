---
title: '提供者模式'
editLink: true
---

<script
  setup
>
import ArticleTitle from '../components/ArticleTitle.vue'
import BiliBili from '../components/BiliBili.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = [
  `import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);`,
  `import React, { useState } from "react";
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
}`,
  `import React, { useState } from "react";
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
}`,
  `import React, { useState, createContext, useContext, useEffect } from "react";
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

ReactDOM.render(<App />, document.getElementById("root"));`
]

</script>

<article-title
  title="提供者模式"
  sub="使数据可用于多个子组件"
/>

---

<!-- In some cases, we want to make available data to many (if not all) components in an application. Although we can pass data to components using `props`, this can be difficult to do if almost all components in your application need access to the value of the props. -->

在某些情况下，我们希望为应用中的许多（如果不是全部）组件提供可用数据。虽然我们可以使用 `props` 将数据传递给组件，但如果应用中的几乎所有组件都需要访问该属性的值，这可能很难做到。

<!-- We often end up with something called prop drilling, which is the case when we pass props far down the component tree. Refactoring the code that relies on the props becomes almost impossible, and knowing where certain data comes from is difficult. -->

我们经常会遇到一种叫做属性穿透的东西，当我们将属性传递到组件树很深的地方时就是这种情况。重构依赖于属性的代码几乎是不可能的，而且很难知道某些数据的来源。

<!-- Let's say that we have one `App` component that contains certain data. Far down the component tree, we have a `ListItem`, `Header` and `Text` component that all need this data. In order to get this data to these components, we'd have to pass it through multiple layers of components. -->

假设我们有一个包含特定数据的 `App` 组件。在组件树的最底层，我们有一个 `ListItem`、`Header` 和 `Text` 组件，它们都需要这些数据。为了将这些数据传递给这些组件，我们必须通过多层组件传递它们。

<bili-bili
  video="//player.bilibili.com/player.html?aid=602330153&bvid=BV1FB4y1577Z&cid=811707894&page=1"
/>

<!-- In our codebase, that would look something like the following: -->

在我们的代码中，它看起来像下面这样：

```JavaScript
function App() {
  const data = { ... }

  return (
    <div>
      <SideBar data={data} />
      <Content data={data} />
    </div>
  )
}

const SideBar = ({ data }) => <List data={data} />
const List = ({ data }) => <ListItem data={data} />
const ListItem = ({ data }) => <span>{data.listItem}</span>

const Content = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
)
const Header = ({ data }) => <div>{data.title}</div>
const Block = ({ data }) => <Text data={data} />
const Text = ({ data }) => <h1>{data.text}</h1>
```

<!-- Passing props down this way can get quite messy. If we want to rename the `data` prop in the future, we'd have to rename it in all components. The bigger your application gets, the trickier prop drilling can be. -->

以这种方式传递属性会变得非常混乱。如果我们将来想重命名 `data` 属性，我们必须在所有组件中重命名它。应用越大，属性穿透就越棘手。

<!-- It would be optimal if we could skip all the layers of components that don't need to use this data. We need to have something that gives the components that need access to the value of `data` direct access to it, without relying on prop drilling. -->

如果我们可以跳过不需要使用这些数据的所有组件层，那将是最佳选择。我们需要一些东西，让需要访问 `data` 值的组件直接访问它，而不依赖于属性穿透。

<!-- This is where the **Provider Pattern** can help us out! With the Provider Pattern, we can make data available to multiple components. Rather than passing that data down each layer through props, we can wrap all components in a `Provider`. A Provider is a higher order component provided to us by the `Context` object. We can create a Context object, using the `createContext` method that React provides for us. -->

这就是 **提供者模式** 可以帮助我们的地方！使用提供者模式，我们可以使数据可用于多个组件。我们可以将所有组件包装在 `Provider` 中，而不是通过属性将数据向下传递到每一层。Provider 是 `Context` 对象提供给我们的高阶组件。我们可以使用 React 为我们提供的 `createContext` 方法创建一个 Context 对象。

<!-- The Provider receives a `value` prop, which contains the data that we want to pass down. All components that are wrapped within this provider have access to the value of the `value` prop. -->

Provider 接收一个 `value` 属性，其中包含我们要传递的数据。包裹在此 provider 中的所有组件都可以访问 `value` 属性的值。

```JavaScript
const DataContext = React.createContext()

function App() {
  const data = { ... }

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}
```

<!-- We no longer have to manually pass down the `data` prop to each component! So, how can the `ListItem`, `Header` and `Text` component access the value of `data`? -->

我们不再需要手动将 `data` 属性传递给每个组件！那么，`ListItem`、`Header` 和 `Text` 组件如何访问 `data` 的值呢？

<!-- Each component can get access to the `data`, by using the `useContext` hook. This hook receives the context that `data` has a reference with, `DataContext` in this case. The `useContext` hook lets us read and write data to the context object. -->

通过使用 `useContext` 钩子，每个组件都可以访问 `data`。这个钩子接收 `data` 有引用的上下文，在这种情况下是 `DataContext` 。 `useContext` 钩子让我们可以读取和写入数据到上下文对象。

```JavaScript
const DataContext = React.createContext();

function App() {
  const data = { ... }

  return (
    <div>
      <SideBar />
      <Content />
    </div>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>


function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}
```

<!-- The components that aren't using the `data` value won't have to deal with `data` at all. We no longer have to worry about passing props down several levels through components that don't need the value of the props, which makes refactoring a lot easier. -->

不使用 `data` 值的组件根本不需要处理 `data`。我们不再需要担心通过不需要属性值的组件将属性向下传递几层，这使得重构变得更加容易。

<bili-bili
  video="//player.bilibili.com/player.html?aid=429759431&bvid=BV1WG41147SS&cid=811708074&page=1"
/>

---

<!-- The Provider pattern is very useful for sharing global data. A common usecase for the provider pattern is sharing a theme UI state with many components. -->

提供者模式对于共享全局数据非常有用。提供者模式的一个常见用例是与许多组件共享主题 UI 状态。

<!-- Say we have a simple app that shows a list. -->

假设我们有一个显示列表的简单应用。

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/busy-oskar-ifz3w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- We want the user to be able to switch between lightmode and darkmode, by toggling the switch. When the user switches from dark- to lightmode and vice versa, the background color and text color should change! Instead of passing the current theme value down to each component, we can wrap the components in a `ThemeProvider`, and pass the current theme colors to the provider. -->

我们希望用户能够通过切换开关在亮模式和暗模式之间切换。当用户从暗模式切换到亮模式时，反之亦然，背景颜色和文本颜色应该改变！而不是将当前主题值传递给每个组件，我们可以将组件包装在 `ThemeProvider` 中，并将当前主题颜色传递给提供者。

```JavaScript
export const ThemeContext = React.createContext();

const themes = {
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

  const providerValue = {
    theme: themes[theme],
    toggleTheme
  };

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}
```

<!-- Since the `Toggle` and `List` components are both wrapped within the `ThemeContext` provider, we have access to the values `theme` and `toggleTheme` that are passed as a `value` to the provider. -->

由于 `Toggle` 和 `List` 组件都包装在 `ThemeContext` 提供者中，我们可以访问作为 `value` 传递给提供者的值 `theme` 和 `toggleTheme`。

<!-- Within the `Toggle` component, we can use the `toggleTheme` function to update the theme accordingly. -->

在 `Toggle` 组件中，我们可以使用 `toggleTheme` 函数来相应地更新主题。

```JavaScript
import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Toggle() {
  const theme = useContext(ThemeContext);

  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  );
}
```

<!-- The `List` component itself doesn't care about the current value of the theme. However, the `ListItem` components do! We can use the `theme` context directly within the `ListItem`. -->

`List` 组件本身并不关心主题的当前值。但是，`ListItem` 组件需要关心！我们可以直接在 `ListItem` 中使用 `theme` 上下文。

```JavaScript
import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function TextBox() {
  const theme = useContext(ThemeContext);

  return <li style={theme.theme}>...</li>;
}
```

<!-- Perfect! We didn't have to pass down any data to components that didn't care about the current value of the theme. -->

完美！我们不必将任何数据传递给不关心主题当前值的组件。

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/quirky-sun-9djpl?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- ## Hooks -->
## 钩子

<!-- We can create a hook to provide context to components. Instead of having to import `useContext` and the Context in each component, we can use a hook that returns the context we need. -->

我们可以创建一个钩子来为组件提供上下文。不必在每个组件中导入 `useContext` 和上下文，我们可以使用一个钩子来返回我们需要的上下文。

```JavaScript
function useThemeContext() {
  const theme = useContext(ThemeContext);
  return theme;
}
```

<!-- To make sure that it's a valid theme, let's throw an error if useContext(ThemeContext) returns a falsy value. -->

为了确保它是一个有效的主题，让我们在 useContext(ThemeContext) 返回一个错误值时抛出一个错误。

```JavaScript
function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return theme;
}
```

<!-- Instead of wrapping the components directly with the `ThemeContext.Provider` component, we can create a HOC that wraps the component to provide its values. This way, we can separate the context logic from the rendering components, which improves the reusability of the provider. -->

我们可以创建一个包装组件以提供其值的高阶组件，而不是直接使用 `ThemeContext.Provider` 组件包装组件。这样，我们可以将上下文逻辑与渲染组件分离，从而提高提供者的可重用性。

```JavaScript
function ThemeProvider({children}) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}
```

<!-- Each component that needs to have access to the `ThemeContext`, can now simply use the `useThemeContext` hook. -->

每个需要访问 `ThemeContext` 的组件现在都可以简单地使用 `useThemeContext` 钩子。

```JavaScript
export default function TextBox() {
  const theme = useThemeContext();

  return <li style={theme.theme}>...</li>;
}
```

<!-- By creating hooks for the different contexts, it's easy to separate the providers's logic from the components that render the data. -->

通过为不同的上下文创建钩子，很容易将提供者的逻辑与呈现数据的组件分开。

<!-- ## Case Study -->
## 案例分析

<!-- Some libraries provide built-in providers, which values we can use in the consuming components. A good example of this, is [styled-components](https://styled-components.com/docs/advanced). -->

一些库提供内置提供程序，我们可以在消费组件中使用这些值。一个很好的例子就是 [样式化组件](https://styled-components.com/docs/advanced)。

<!-- > ***"No experience with styled-components is needed to understand this example."*** -->

> ***“理解这个例子不需要任何风格组件的经验。”***

<!-- The styled-components library provides a `ThemeProvider` for us. Each styled component will have access to the value of this provider! Instead of creating a context API ourselves, we can use the one that's been provided to us! -->

样式化组件库为我们提供了 `ThemeProvider` 。每个样式化的组件都可以访问这个提供者的值！我们可以使用提供给我们的上下文接口，而不是自己创建上下文接口！

<!-- Let's use the same List example, and wrap the components in the `ThemeProvider` imported from the `styled-component` library. -->

让我们使用相同的 List 示例，并将组件包装在从 `styled-component` 库导入的 `ThemeProvider` 中。

```JavaScript
import { ThemeProvider } from "styled-components";

export default function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider theme={themes[theme]}>
        <>
          <Toggle toggleTheme={toggleTheme} />
          <List />
        </>
      </ThemeProvider>
    </div>
  );
}
```

<!-- Instead of passing an inline `style` prop to the `ListItem` component, we'll make it a `styled.li` component. Since it's a styled component, we can access the value of `theme`! -->

我们不会将内联 `style` 属性传递给 `ListItem` 组件，而是将其设为 `styled.li` 组件。由于它是一个样式组件，我们可以访问 `theme` 的值！

```JavaScript
import styled from "styled-components";

export default function ListItem() {
  return (
    <Li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Li>
  );
}

const Li = styled.li`
  ${({ theme }) => `
     background-color: ${theme.backgroundColor};
     color: ${theme.color};
  `}
`;
```

<!-- Awesome, we can now easily apply styles to all our styled components with the `ThemeProvider`! -->

太棒了，我们现在可以使用 `ThemeProvider` 轻松地将样式应用于我们所有样式化的组件！

<code-preview
  :code="codes[2]"
  preview="https://codesandbox.io/embed/divine-platform-gbuls?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- ## Props -->
## 特性

<!-- The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it through each component layer. -->

提供者模式/上下文 API 使得将数据传递给许多组件成为可能，而无需手动通过每个组件层传递数据。

<!-- It reduces the risk of accidentally introducing bugs when refactoring code. Previously, if we later on wanted to rename a prop, we had to rename this prop throughout the entire application where this value was used. -->

它降低了重构代码时意外引入错误的风险。以前，如果我们以后想要重命名一个属性，我们必须在整个使用这个值的应用中重命名这个属性。

<!-- We no longer have to deal with prop-drilling, which could be seen as an anti-pattern. Previously, it could be difficult to understand the dataflow of the application, as it wasn't always clear where certain prop values originated. With the Provider pattern, we no longer have to unnecessarily pass props to component that don't care about this data. -->

我们不再需要处理属性穿透，这可以被视为一种反模式。以前，可能很难理解应用的数据流，因为某些属性值的来源并不总是很清楚。使用提供者模式，我们不再需要将属性不必要地传递给不关心这些数据的组件。

<!-- Keeping some sort of global state is made easy with the Provider pattern, as we can give components access to this global state. -->

使用提供者模式可以很容易地保持某种全局状态，因为我们可以让组件访问这种全局状态。

<!-- ## Cons -->
## 缺点

<!-- In some cases, overusing the Provider pattern can result in performance issues. All components that consume the context re-render on each state change. -->

在某些情况下，过度使用提供者模式会导致性能问题。所有使用上下文的组件都会在每次状态更改时重新渲染。

<!-- Let's look at an example. We have a simple counter which value increases every time we click on the `Increment` button in the `Button` component. We also have a `Reset` button in the `Reset` component, which resets the count back to `0`. -->

让我们看一个例子。我们有一个简单的计数器，每次单击 `Button` 组件中的 `Increment` 按钮时，其值都会增加。我们在 `Reset` 组件中还有一个 `reset` 按钮，它将计数重置回 `0`。

<!-- When you click on `Increment`, however, you can see that it's not just the count that re-renders. The date in the `Reset` component re-renders as well! -->

但是，当您单击 `Increment` 时，您会看到重新渲染的不仅仅是计数。`Reset` 组件中的日期也会重新渲染！

<code-preview
  :code="codes[3]"
  preview="https://codesandbox.io/embed/provider-pattern-2-4ke0w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- The `Reset` component also re-rendered since it consumed the `useCountContext`. In smaller applications, this won't matter too much. In larger applications, passing a frequently updated value to many components can affect the performance negatively. -->

`Reset` 组件也重新渲染，因为它消费了 `useCountContext`。在较小的应用中，这无关紧要。在较大的应用中，将频繁更新的值传递给许多组件可能会对性能产生负面影响。

<!-- To make sure that components aren't consuming providers that contain unnecessary values which may update, you can create several providers for each separate usecase. -->

为了确保组件不使用包含可能更新的不必要值的提供者，您可以为每个单独的用例创建多个提供者。

<!-- ## References -->
## 参考

- [Context - React](https://reactjs.org/docs/context.html)
- [How To Use React Context Effectively - Kent C. Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
