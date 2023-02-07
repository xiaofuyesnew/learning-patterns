---
title: '观察者模式'
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
}`,
  `import React from "react";
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
);`
]

</script>

<!-- 
Observer Pattern
Use observables to notify subscribers when an event occurs
-->

<article-title
  title="观察者模式"
  sub="当一个事件发生时使用可观察对象通知观察者"
/>

---

<!-- With the **observer pattern**, we can subscribe certain objects, the **observers**, to another object, called the **observable**. Whenever an event occurs, the observable notifies all its observers! -->

使用 **观察者模式** ，我们可以将某些对象（ **观察者** ）订阅到另外一些称之为 **可观察对象** 。每当事件发生时，可观察对象都会通知它的所有观察者！

---

<!-- An observable object usually contains 3 important parts: -->

一个可观察对象通常包含4个重要部分（译者注：原文这里写的是3个部分）：

<!-- - `observers` : an array of observers that will get notified whenever a specific event occurs
- `subscribe()` : a method in order to add observers to the observers list
- `unsubscribe()` : a method in order to remove observers from the observers list
- `notify()` : a method to notify all observers whenever a specific event occurs -->

- `observers` ：一个观察者的数组，每当特定事件发生时都会收到通知
- `subscribe()` ：一个将观察者添加到观察者列表的方法
- `unsubscribe()` ：一个从观察者列表中删除观察者的方法
- `notify()` ：一个在特定事件发生时通知所有观察者的方法

---

<!-- Perfect, let’s create an observable! An easy way of creating one, is by using an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). -->

很好，让我们来创建一个可观察对象！其中一种简单的创建方式是使用 [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 。

```JavaScript
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
```

<!-- Awesome! We can now add observers to the list of observers with the subscribe method, remove the observers with the unsubscribe method, and notify all subscribes with the notify method. -->

好极了！我们现在可以使用 subscribe 方法将观察者添加到观察者列表中，使用 unsubscribe 方法移除观察者，并使用 notify 方法通知所有订阅者。

<!-- Let’s build something with this observable. We have a very basic app that only consists of two components: a `Button`, and a `Switch`. -->

让我们用这个可观察对象构建一些东西。我们要创建一个十分基础的应用，它只包含两个组件：一个 `Button` 和一个 `Switch`。

```JavaScript
export default function App() {
  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
    </div>
  );
}
```

<!-- We want to keep track of the **user interaction** with the application. Whenever a user either clicks the button or toggles the switch, we want to log this event with the timestamp. Besides logging it, we also want to create a toast notification that shows up whenever an event occurs! -->

我们想要持续跟踪用户与应用产生的 **交互** 。每当用户点击按钮或切换开关时，我们都希望使用时间戳记录此事件。除了记录，我们还想创建一个弹窗通知，在事件发生时显示！

<!-- Essentially, what we want to do is the following: -->

本质上，我们想要做的是：

<bili-bili
  video="//player.bilibili.com/player.html?aid=514859680&bvid=BV1Vg411D7bT&cid=811924586&page=1"
/>

<!-- Whenever the user invokes the `handleClick` or `handleToggle` function, the functions invoke the `notify` method on the observer. The `notify` method notifies all subscribers with the data that was passed by the `handleClick` or `handleToggle` function! -->

每当用户调用 `handleClick` 或 `handleToggle` 函数时，这些函数都会调用观察者的 `notify` 方法。`notify` 方法将 `handleClick` 或 `handleToggle` 函数传递的数据通知给所有订阅者！

<!-- First, let's create the `logger` and `toastify` functions. These functions will eventually receive `data` from the `notify` method. -->

首先，让我们创建 `logger` 和 `toastify` 函数。这些函数最终会从 `notify` 方法接收数据。

```JavaScript
import { ToastContainer, toast } from "react-toastify";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

export default function App() {
  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
      <ToastContainer />
    </div>
  );
}
```

<!-- Currently, the `logger` and `toastify` functions are unaware of observable: the observable can't notify them yet! In order to make them observers, we’d have to subscribe them, using the `subscribe` method on the observable! -->

至此，`logger` 和 `toastify` 函数还是不可观测的：可观察对象还不能通知他们！为了让他们成为观察者，我们必须订阅他们，使用可观察对象的 `subscribe` 方法！

```JavaScript
import { ToastContainer, toast } from "react-toastify";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
      <ToastContainer />
    </div>
  );
}
```

<!-- Whenever an event occurs, the `logger` and `toastify` functions will get notified. Now we just need to implement the functions that actually notify the observable: the `handleClick` and `handleToggle` functions! These functions should invoke the `notify` method on the observable, and pass the data that the observers should receive. -->

每当事件发生时， `logger` 和 `toastify` 函数都会收到通知。现在我们只需要实现实际通知可观察对象的函数： `handleClick` 和 `handleToggle` 函数！这些函数应该调用可观察对象的 `notify` 方法，并传递观察者接收到的数据。

```JavaScript
import { ToastContainer, toast } from "react-toastify";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  function handleClick() {
    observable.notify("User clicked button!");
  }

  function handleToggle() {
    observable.notify("User toggled switch!");
  }

  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
      <ToastContainer />
    </div>
  );
}
```

<!-- Awesome! We just finished the entire flow: `handleClick` and `handleToggle` invoke the `notify` method on the observer with the data, after which the observer notifies the subscribers: the `logger` and `toastify` functions in this case. -->

很好！我们刚刚完成了整个流程： `handleClick` 和 `handleToggle` 调用带数据的观察者的 `notify` 方法，之后观察者通知订阅者：在本例中为 `logger` 和 `toastify` 函数。

<!-- Whenever a user interacts with either of the components, both the `logger` and the `toastify` functions will get notified with the data that we passed to the `notify` method! -->

每当用户与任何一个组件交互时， `logger` 和 `toastify` 函数都会收到我们传递给 `notify` 方法的数据！

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/quizzical-sinoussi-md8k5?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

---

<!-- Although we can use the observer pattern in many ways, it can be very useful when working with **asynchronous, event-based data**. Maybe you want certain components to get notified whenever certain data has finished downloading, or whenever users sent new messages to a message board and all other members should get notified. -->

尽管我们可以通过多种方式使用观察者模式，但它在处理 **异步的、基于事件的数据** 时非常有用。也许你希望一些组件在某些数据下载完成时得到通知，或者每当用户向留言板发送新消息时所有其他成员都会收到通知。

## 案例分析

<!-- A popular library that uses the observable pattern is RxJS. -->

使用可观察模式的一个流行库是 RxJS。

<!-- > ***"ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events. - RxJS"*** -->

> ***ReactiveX 将观察者模式与迭代器模式以及使用集合的函数式编程相结合，以满足对管理事件序列需求的理想方式。—— RxJS***

<!-- With RxJS, we can create observables and subscribe to certain events! Let’s look at an example that’s covered in their documentation, which logs whether a user was dragging in the document or not. -->

使用 RxJS，我们可以创建可观察对象并订阅某些事件！让我们看一下其文档中包含的示例，该示例记录了用户是否在页面中进行拖动。

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/stoic-turing-kqq9z?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- RxJS has tons of built-in features and examples that work with the observable pattern. -->

RxJS 有大量内置功能和示例，可以与可观察模式一起使用。

## 优点

<!-- Using the observer pattern is a great way to enforce <span class="pink">separation of concerns</span> and the single-responsiblity principle. The observer objects aren’t tightly coupled to the observable object, and can be (de)coupled at any time. The observable object is responsible for monitoring the events, while the observers simply handle the received data. -->

使用观察者模式是实现 <span class="pink">关注点分离</span> 和单一职责原则的好方法。观察者对象与可观察对象没有紧密耦合，可以随时（解除）耦合。可观察对象负责监听事件，而观察者只是处理接收到的数据。

## 缺点

<!-- If an observer becomes too complex, it may cause performance issues when notifying all subscribers. -->

如果观察者变得过于复杂，在通知所有订阅者时可能会导致性能问题。

## 参考

- [RxJS](https://rxjs-dev.firebaseapp.com/)
- [JavaScript Design Patterns: The Observer Pattern](https://www.sitepoint.com/javascript-design-patterns-observer-pattern/)

---

原文链接：[Observer Pattern](https://www.patterns.dev/posts/observer-pattern/)
