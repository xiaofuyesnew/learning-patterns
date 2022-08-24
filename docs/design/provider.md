---
title: '提供者模式'
editLink: ''
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

In some cases, we want to make available data to many (if not all) components in an application. Although we can pass data to components using `props`, this can be difficult to do if almost all components in your application need access to the value of the props.

We often end up with something called prop drilling, which is the case when we pass props far down the component tree. Refactoring the code that relies on the props becomes almost impossible, and knowing where certain data comes from is difficult.

Let's say that we have one `App` component that contains certain data. Far down the component tree, we have a `ListItem`, `Header` and `Text` component that all need this data. In order to get this data to these components, we'd have to pass it through multiple layers of components.

<bili-bili
  video="//player.bilibili.com/player.html?aid=602330153&bvid=BV1FB4y1577Z&cid=811707894&page=1"
/>

In our codebase, that would look something like the following:

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

Passing props down this way can get quite messy. If we want to rename the `data` prop in the future, we'd have to rename it in all components. The bigger your application gets, the trickier prop drilling can be.

It would be optimal if we could skip all the layers of components that don't need to use this data. We need to have something that gives the components that need access to the value of `data` direct access to it, without relying on prop drilling.

This is where the **Provider Pattern** can help us out! With the Provider Pattern, we can make data available to multiple components. Rather than passing that data down each layer through props, we can wrap all components in a `Provider`. A Provider is a higher order component provided to us by the `Context` object. We can create a Context object, using the `createContext` method that React provides for us.

The Provider receives a `value` prop, which contains the data that we want to pass down. All components that are wrapped within this provider have access to the value of the `value` prop.

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

We no longer have to manually pass down the `data` prop to each component! So, how can the `ListItem`, `Header` and `Text` component access the value of `data`?

Each component can get access to the `data`, by using the `useContext` hook. This hook receives the context that `data` has a reference with, `DataContext` in this case. The `useContext` hook lets us read and write data to the context object.

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

The components that aren't using the `data` value won't have to deal with `data` at all. We no longer have to worry about passing props down several levels through components that don't need the value of the props, which makes refactoring a lot easier.

<bili-bili
  video="//player.bilibili.com/player.html?aid=429759431&bvid=BV1WG41147SS&cid=811708074&page=1"
/>

---

The Provider pattern is very useful for sharing global data. A common usecase for the provider pattern is sharing a theme UI state with many components.

Say we have a simple app that shows a list.

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/busy-oskar-ifz3w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

We want the user to be able to switch between lightmode and darkmode, by toggling the switch. When the user switches from dark- to lightmode and vice versa, the background color and text color should change! Instead of passing the current theme value down to each component, we can wrap the components in a `ThemeProvider`, and pass the current theme colors to the provider.

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

Since the `Toggle` and `List` components are both wrapped within the `ThemeContext` provider, we have access to the values `theme` and `toggleTheme` that are passed as a `value` to the provider.

Within the `Toggle` component, we can use the `toggleTheme` function to update the theme accordingly.

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

The `List` component itself doesn't care about the current value of the theme. However, the `ListItem` components do! We can use the `theme` context directly within the `ListItem`.

```JavaScript
import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function TextBox() {
  const theme = useContext(ThemeContext);

  return <li style={theme.theme}>...</li>;
}
```

Perfect! We didn't have to pass down any data to components that didn't care about the current value of the theme.

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/quirky-sun-9djpl?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

## Hooks

We can create a hook to provide context to components. Instead of having to import `useContext` and the Context in each component, we can use a hook that returns the context we need.

```JavaScript
function useThemeContext() {
  const theme = useContext(ThemeContext);
  return theme;
}
```

To make sure that it's a valid theme, let's throw an error if useContext(ThemeContext) returns a falsy value.

```JavaScript
function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return theme;
}
```

Instead of wrapping the components directly with the `ThemeContext.Provider` component, we can create a HOC that wraps the component to provide its values. This way, we can separate the context logic from the rendering components, which improves the reusability of the provider.

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

Each component that needs to have access to the `ThemeContext`, can now simply use the `useThemeContext` hook.

```JavaScript
export default function TextBox() {
  const theme = useThemeContext();

  return <li style={theme.theme}>...</li>;
}
```

By creating hooks for the different contexts, it's easy to separate the providers's logic from the components that render the data.

## Case Study

Some libraries provide built-in providers, which values we can use in the consuming components. A good example of this, is [styled-components](https://styled-components.com/docs/advanced).

> ***"No experience with styled-components is needed to understand this example."***

The styled-components library provides a `ThemeProvider` for us. Each styled component will have access to the value of this provider! Instead of creating a context API ourselves, we can use the one that's been provided to us!

Let's use the same List example, and wrap the components in the `ThemeProvider` imported from the `styled-component` library.

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

Instead of passing an inline `style` prop to the `ListItem` component, we'll make it a `styled.li` component. Since it's a styled component, we can access the value of `theme`!

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

Awesome, we can now easily apply styles to all our styled components with the `ThemeProvider`!

<code-preview
  :code="codes[2]"
  preview="https://codesandbox.io/embed/divine-platform-gbuls?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>


## Props

The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it through each component layer.

It reduces the risk of accidentally introducing bugs when refactoring code. Previously, if we later on wanted to rename a prop, we had to rename this prop throughout the entire application where this value was used.

We no longer have to deal with prop-drilling, which could be seen as an anti-pattern. Previously, it could be difficult to understand the dataflow of the application, as it wasn't always clear where certain prop values originated. With the Provider pattern, we no longer have to unnecessarily pass props to component that don't care about this data.

Keeping some sort of global state is made easy with the Provider pattern, as we can give components access to this global state.

## Cons

In some cases, overusing the Provider pattern can result in performance issues. All components that consume the context re-render on each state change.

Let's look at an example. We have a simple counter which value increases every time we click on the `Increment` button in the `Button` component. We also have a `Reset` button in the `Reset` component, which resets the count back to `0`.

When you click on `Increment`, however, you can see that it's not just the count that re-renders. The date in the `Reset` component re-renders as well!

<code-preview
  :code="codes[3]"
  preview="https://codesandbox.io/embed/provider-pattern-2-4ke0w?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

The `Reset` component also re-rendered since it consumed the `useCountContext`. In smaller applications, this won't matter too much. In larger applications, passing a frequently updated value to many components can affect the performance negatively.

To make sure that components aren't consuming providers that contain unnecessary values which may update, you can create several providers for each separate usecase.

<!-- ## References -->
## 参考

- [Context - React](https://reactjs.org/docs/context.html)
- [How To Use React Context Effectively - Kent C. Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
