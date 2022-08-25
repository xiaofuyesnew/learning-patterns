---
title: '单例模式'
editLink: true
---

<script
  setup
>
import ArticleTitle from '../components/ArticleTitle.vue'
import BiliBili from '../components/BiliBili.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = [
  `let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };`,
  `import Counter from "../src/counterTest";

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
});`,
  `import Counter from "./counter";

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
}`
]

</script>

<article-title
  title="单例模式"
  sub="在应用中共享同一个全局实例"
/>

---

<!-- Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application. -->

单例是指可以实例化一次，并能全局访问的类。这种单一实例可以在应用中共享，这使单例非常适合管理应用中的全局状态。

<!-- First, let's take a look at what a singleton can look like using an ES2015 class. For this example, we’re going to build a `Counter` class that has: -->

首先，让我们看看使用 ES2015 类来实例化的单例会是什么样子。在这个例子中，我们将构建 `Counter` 类，它具有：

<!-- - a `getInstance` method that returns the value of the instance
- a `getCount` method that returns the current value of the `counter` variable
- an `increment` method that increments the value of `counter` by one
- a `decrement` method that decrements the value of `counter` by one -->

- `getInstance` 方法返回这个实例
- `getCount` 方法返回 `counter` 变量的当前值
- `increment` 方法将 `counter` 增加 1
- `decrement` 方法将 `counter` 减少 1

```JavaScript
let counter = 0;

class Counter {
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
```

<!-- However, this class doesn’t meet the criteria for a Singleton! A Singleton should only be able to get **instantiated once**. Currently, we can create multiple instances of the `Counter` class. -->

然而，这个类不符合单例的标准！一个单例只能被 **实例化一次** 。现在，我们可以多次实例化 `Counter` 类。

```JavaScript
let counter = 0;

class Counter {
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance()); // false
```

<!-- By calling the `new` method twice, we just set `counter1` and `counter2` equal to different instances. The values returned by the `getInstance` method on `counter1` and `counter2` effectively returned references to different instances: they aren't strictly equal! -->

通过两次调用 `new` 方法，我们只是得到了 `counter1` 和 `counter2` 两个不相同的实例。 `counter1` 和 `counter2` 上的 `getInstance` 方法的返回值只是不同的实例引用：它们并不严格相等！

<bili-bili
  video="//player.bilibili.com/player.html?aid=514695213&bvid=BV1Jg411r7K5&cid=810086536&page=1"
/>

<!-- Let’s make sure that only **one** instance of the `Counter` class can be created. -->

让我们确保只能创建 `Counter` 类的 **一个** 实例。

<!-- One way to make sure that only one instance can be created, is by creating a variable called `instance`. In the constructor of `Counter`, we can set `instance` equal to a reference to the instance when a new instance is created. We can prevent new instantiations by checking if the `instance` variable already had a value. If that's the case, an instance already exists. This shouldn't happen: an error should get thrown to let the user know -->

确保只能创建一个实例的其中一种方法就是创建一个称为 `instance` 的变量。在 `Counter` 的构造函数中，我们可以将 `instance` 设置为当新实例创建时对该实例的引用。我们可以通过检查 `instance` 变量是否已经有值来防止新的实例化。如果是这种情况，实例已经存在。这不应该发生：应该抛出一个错误让用户知道。

<!-- // Error: You can only create one instance! -->
```JavaScript
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
// 错误: 只能创建一个实例！
```

<!-- Perfect! We aren't able to create multiple instances anymore. -->

完美！我们再也不能创建多个实例了。

<!-- Let's export the `Counter` instance from the `counter.js` file. But before doing so, we should <span class="pink">freeze</span> the instance as well. The `Object.freeze` method makes sure that consuming code cannot modify the Singleton. Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton. -->

让我们从 `counter.js` 文件中导出 `Counter` 实例。但在此之前，我们也应该 <span class="pink">冻结</span> 该实例。 `Object.freeze` 方法使得代码无法修改单例。无法添加或修改被冻结的实例的属性，这降低了意外覆盖单例属性的风险。

```JavaScript
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
```

---

<!-- Let's take a look at an application that implements the `Counter` example. We have the following files: -->

让我们看一个实现了 `Counter` 的应用示例。我们有以下文件：

<!-- - `counter.js`: contains the `Counter` class, and exports a **`Counter`** **instance** as its default export
- `index.js`: loads the `redButton.js` and `blueButton.js` modules
- `redButton.js`: imports `Counter`, and adds `Counter`'s `increment` method as an event listener to the **red** button, and logs the current value of `counter` by invoking the `getCount` method
- `blueButton.js`: imports `Counter`, and adds `Counter`'s `increment` method as an event listener to the **blue** button, and logs the current value of `counter` by invoking the `getCount` method -->

- `counter.js` ：包含 `Counter` 类， 并导出一个 **`Counter`** **实例** 作为默认导出
- `index.js` ：加载 `redButton.js` 和 `blueButton.js` 模块
- `redButton.js`: 导入 `Counter` ， 并将 `Counter` 的 `increment` 方法作为事件监听器添加到 **红色** 按钮，并通过调用 `getCount` 方法记录 `counter` 的值
- `blueButton.js`: 导入 `Counter` ， 并将 `Counter` 的 `increment` 方法作为事件监听器添加到 **蓝色** 按钮，并通过调用 `getCount` 方法记录 `counter` 的值

<!-- Both `blueButton.js` and `redButton.js` import the **same instance** from `counter.js`. This instance is imported as **`Counter`** in both files. -->

`blueButton.js` 和 `redButton.js` 都从 `counter.js` 导入 **相同的实例** 。 这个实例在两个文件中都作为 **`Counter`** 导入。

<bili-bili
  video="//player.bilibili.com/player.html?aid=217167501&bvid=BV1Pa41157Cv&cid=810086539&page=1"
/>

<!-- When we invoke the `increment` method in either `redButton.js` or `blueButton.js`, the value of the `counter` property on the `Counter` instance updates in both files. It doesn't matter whether we click on the red or blue button: the same value is shared among all instances. This is why the counter keeps incrementing by one, even though we're invoking the method in different files. -->

<!-- 这里还需要把表述顺一下 -->

当我们在 `redbutton.js` 或 `bluebutton.js` 中调用 `increment` 方法时，两个文件中的 `Counter` 实例的 `counter` 属性值都更新了。不管我们点击红色按钮还是蓝色按钮：在所有实例中都共享了相同的值。这就是为什么计数器一直会递增一的原因——即使我们在不同的文件中调用这个方法。

<!-- ## (Dis)advantages -->
## 优势（劣势）

<!-- Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. However, Singletons are actually considered an **anti-pattern**, and can (or.. *should*) be avoided in JavaScript. -->

将实例化限制为仅一个实例可以节约大量内存空间。我们不必每次都为新实例设置内存，而只需为一个实例设置内存，该实例在整个应用中都可以被调用。但是，单例实际上被认为是一种 **反模式** ，并且可以（或... *应该*）在 JavaScript 中避免使用。

<!-- In many programming languages, such as Java or C++, it's not possible to directly create objects the way we can in JavaScript. In those object-oriented programming languages, we need to create a class, which creates an object. That created object has the value of the instance of the class, just like the value of `instance` in the JavaScript example. -->

在许多编程语言中，例如 Java 或 C++，不能像在 JavaScript 中那样直接创建对象。在那些面向对象的编程语言中，我们需要先创建一个类，它会创建一个对象。该创建的对象具有类实例的值，就像 JavaScript 中的 `实例` 的值一样。

<!-- However, the class implementation shown in the examples above is actually overkill. Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result. Let's cover some of the disadvantages of using Singletons! -->

但是，上面例子中所展示的类的实现实际上是矫枉过正。由于我们可以直接在 JavaScript 中创建对象，因此我们可以简单地使用常规对象来实现完全相同的结果。让我们来介绍一下使用单例的缺点！

<!-- ### Using a regular object -->
### 使用字面量对象

<!-- Let's use the same example as we saw previously. However this time, the `counter` is simply an object containing: -->

让我们使用与之前看到的相同的示例。但这次， `counter` 只是一个包含以下内容的对象：

<!-- - a `count` property
- an `increment` method that increments the value of `count` by one
- a `decrement` method that decrements the value of `count` by one -->

- `count` 属性
- `increment` 方法将 `count` 增加一
- a `decrement` 方法将 `count` 减少一

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/competent-moon-rvzrr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- Since objects are passed by reference, both `redButton.js` and `blueButton.js` are importing a reference to the same `counter` object. Modifying the value of `count` in either of these files will modify the value on the `counter`, which is visible in both files. -->

由于对象是通过引用传递的，`redButton.js` 和 `blueButton.js` 都在导入对同一个 `counter` 对象的引用。修改这些文件中的任何一个中的 `count` 值都会修改 `counter` 上的值，这在两个文件中都是可见的。

<!-- ### Testing -->
### 测试

<!-- Testing code that relies on a Singleton can get tricky. Since we can't create new instances each time, all tests rely on the modification to the global instance of the previous test. The order of the tests matter in this case, and one small modification can lead to an entire test suite failing. After testing, we need to reset the entire instance in order to reset the modifications made by the tests. -->

测试依赖于单例的代码可能会变得很棘手。由于我们不能每次都创建新实例，因此所有测试都依赖于对上一次测试的全局实例的修改。在这种情况下，测试的顺序很重要，一个小的修改可能会导致整个测试流程失败。测试之后，我们还需要重置整个实例以重置测试所做的修改。

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=0&view=preview&previewwindow=tests&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- ### Dependency hiding -->
### 依赖隐藏

<!-- When importing another module, `superCounter.js` in this case, it may not be obvious that module is importing a Singleton. In other files, such as `index.js` in this case, we may be importing that module and invoke its methods. This way, we accidentally modify the values in the Singleton. This can lead to unexpected behavior, since multiple instances of the Singleton can be shared throughout the application, which would all get modified as well. -->

导入另一个模块时，在此例子中是 `superCounter.js` ，模块正导入的是一个单例可能并不明显。在其他文件中，在此例子中例如 `index.js` ，我们可能正在导入那个模块并且调用它的方法。因此，我们意外地修改了单例中的值。这可能会导致意外行为，因为可以在整个应用中共享单例的多个实例，这些实例也将同时被改变。

<code-preview
  :code="codes[2]"
  preview="https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- ### Global behavior -->
### 全局行为

<!-- A Singleton instance should be able to get referenced throughout the entire app. Global variables essentially show the same behavior: since global variables are available on the global scope, we can access those variables throughout the application. -->

一个单例实例应该能在整个应用中被引用。全局变量本质上也展现了相同的行为：因为全局变量在全局作用域下可用，我们可以在整个应用中访问这些变量。

<!-- Having global variables is generally considered as a bad design decision. Global scope pollution can end up in accidentally overwriting the value of a global variable, which can lead to a lot of unexpected behavior. -->

存在全局变量通常被认为是糟糕的设计决策。全局范围污染最终可能导致意外覆盖全局变量的值，从而导致许多意外行为。

<!-- In ES2015, creating global variables is fairly uncommon. The new `let` and `const` keyword prevent developers from accidentally polluting the global scope, by keeping variables declared with these two keywords block-scoped. The new `module` system in JavaScript makes creating globally accessible values easier without polluting the global scope, by being able to `export` values from a module, and `import` those values in other files. -->

在 ES2015 中，创建全局变量变得十分罕见。新的 `let` 和 `const` 关键字通过将使用它们声明的变量保持在块级作用域内来防止开发者意外污染全局作用域。JavaScript 中，新的 `module` 系统使创建全局可访问的值更容易，并且不会污染全局作用域，它能从模块中 `export` 值，并 `import` 这些值到其他文件中。

<!-- However, the common usecase for a Singleton is to have some sort of **global state** throughout your application. Having multiple parts of your codebase rely on the same <span class="pink" title="An object which properties can be added, removed, modified, or deleted.">mutable object</span> can lead to unexpected behavior. -->

然而，单例的常见用例是在整个应用中维护某种 **全局状态**。让代码在多处依赖同一个 <span class="pink" title="其属性可被添加、移除、修改或删除的对象">可变对象</span> 可能会导致意外行为。

<!-- Usually, certain parts of the codebase modify the values within global state, whereas others consume that data. The order of execution here is important: we don't want to accidentally consume data first, when there is no data to consume (yet)! Understanding the data flow when using a global state can get very tricky as your application grows, and dozens of components rely on each other. -->

通常，代码中的某些部分会修改全局状态中的值，而其他部分会使用该数据。在这里，执行顺序很重要：我们不想在（还）没有数据可供消费时，贸然地先去消费数据！随着应用的增长以及数量众多的组件相互依赖，使用全局状态时理解数据流可能会变得非常棘手。

<!-- ### State management in React -->
### React 中的状态管理

<!-- In React, we often rely on a global state through state management tools such as **Redux** or **React Context** instead of using Singletons. Although their global state behavior might seem similar to that of a Singleton, these tools provide a **read-only state** rather than the *mutable* state of the Singleton. When using Redux, only pure function *reducers* can update the state, after a component has sent an *action* through a *dispatcher*. -->

在 React 中，我们通常使用 **Redux** 或 **React Context** 等状态管理工具来管理全局状态，而不是使用单例。尽管它们的全局状态行为可能看起来像单例，但这些工具提供了 **只读状态** 而不是单例的 *可变* 状态。使用 Redux 时，只有纯函数 *reducer* 可以在组件通过 *dispatcher* 发送 *action* 后更新状态。

<!-- Although the downsides to having a global state don't magically disappear by using these tools, we can at least make sure that the global state is mutated the way we intend it, since components cannot update the state directly. -->

尽管使用这些工具不会奇迹般地消除全局状态的缺点，但我们至少可以确保全局状态按照我们想要的方式发生变化，因为组件不能直接更新状态。

## 参考

- [Do React Hooks replace Redux - Eric Elliott](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672)
- [Working with Singletons in JavaScript - Vijay Prasanna](https://alligator.io/js/js-singletons/)
- [JavaScript Design Patterns: The Singleton - Samier Saeed](https://www.sitepoint.com/javascript-design-patterns-singleton/)
- [Singleton - Refactoring Guru](https://refactoring.guru/design-patterns/singleton)
