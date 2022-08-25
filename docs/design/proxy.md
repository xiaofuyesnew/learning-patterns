---
title: '代理模式'
editLink: true
---

<script
  setup
>
import ArticleTitle from '../components/ArticleTitle.vue'
import BiliBili from '../components/BiliBili.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = [
  `const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(\`The value of \${prop} is \${obj[prop]}\`);
  },
  set: (obj, prop, value) => {
    console.log(\`Changed \${prop} from \${obj[prop]} to \${value}\`);
    obj[prop] = value;
    return true;
  }
});

personProxy.name;
personProxy.age = 43;`,
  `const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(\`Hmm.. this property doesn't seem to exist\`);
    } else {
      console.log(\`The value of \${prop} is \${obj[prop]}\`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(\`Sorry, you can only pass numeric values for age.\`);
    } else if (prop === "name" && value.length < 2) {
      console.log(\`You need to provide a valid name.\`);
    } else {
      console.log(\`Changed \${prop} from \${obj[prop]} to \${value}.\`);
      obj[prop] = value;
    }
    return true;
  }
});

personProxy.nonExistentProperty;
personProxy.age = "44";
personProxy.name = "";`,
  `const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(\`The value of \${prop} is \${Reflect.get(obj, prop)}\`);
  },
  set: (obj, prop, value) => {
    console.log(\`Changed \${prop} from \${obj[prop]} to \${value}\`);
    return Reflect.set(obj, prop, value);
  }
});

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";`
]

</script>

<article-title
  title="代理模式"
  sub="拦截和控制目标对象的交互"
/>

---

<!-- With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value. -->

使用 Proxy 对象，我们可以更好地控制与某些对象的交互。代理对象可以在与对象交互时决定一些行为，例如当我们获取或设置对象的值时。

---

<!-- Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object. -->

一般来讲，代理表示做他人的替身。你将与代表你尝试联系的人的代理人联系，而不是直接与该人联系。在 JavaScript 中也是如此：我们将与 Proxy 对象交互，而非与目标对象交互。

---

<!-- Let's create a `person` object, that represents John Doe. -->

我们创建一个代表 John Doe 的 `person` 对象。

```JavaScript
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};
```

<!-- Instead of interacting with this object directly, we want to interact with a proxy object. In JavaScript, we can easily create a new proxy by creating a new instance of `Proxy`. -->

我们希望与代理对象进行交互，而不是直接与此对象交互。在 JavaScript 中，我们可以通过创建一个新的 `Proxy` 实例来轻松创建代理。

```JavaScript
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

const personProxy = new Proxy(person, {});
```

<!-- The second argument of `Proxy` is an object that represents the *handler*. In the handler object, we can define specific behavior based on the type of interaction. Although there are [many methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that you can add to the Proxy handler, the two most common ones are `get` and `set`: -->

Proxy 的第二个参数是一个代表 *处理器对象* （*handler*）。在处理程序对象中，我们可以根据交互类型定义具体的行为。尽管有[许多方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)能被添加到代理处理器对象中，但最常见的两个是 `get` 和 `set` ：

<!-- - `get`: Gets invoked when trying to **access** a property
- `set`: Gets invoked when trying to **modify** a property -->

- `get`: 尝试 **访问** 属性时调用
- `set`: 尝试 **修改** 属性时调用

<!-- Effectively, what will end up happening is the following: -->

实际上，最终会发生以下情况：

<bili-bili
  video="//player.bilibili.com/player.html?aid=899825058&bvid=BV1AN4y1c7Dt&cid=811202023&page=1"
/>

<!-- Instead of interacting with the `person` object directly, we'll be interacting with the `personProxy`. -->

我们将与 `personProxy` 进行交互，而不是直接与 `person` 对象交互。

<!-- Let's add handlers to the `personProxy` Proxy. When trying to modify a property, thus invoking the **`set`** method on the `Proxy`, we want the proxy to log the previous value and the new value of the property. When trying to access a property, thus invoking the **`get`** method on the `Proxy`, we want the proxy to log a more readable sentence that contains the key and value of the property. -->

让我们向 `personProxy` 代理中添加处理器。当尝试修改属性时，调用 `Proxy` 上的 **`set`** 方法时，我们希望代理打印该属性的旧值和新值。当试图访问一个属性，从而调用代理上的 **`get`** 方法时，我们希望这个代理能打印更易读的内容，其中包含该属性的键和值。

```JavaScript
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  }
});
```

<!-- Perfect! Let's see what happens when we're trying to modify or retrieve a property. -->

完美！让我们看看当我们尝试修改或检索属性时会发生什么。

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/cocky-bird-rkgyo?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- When accessing the `name` property, the Proxy returned a better sounding sentence: `The value of name is John Doe`. -->

当访问 `name` 属性时，Proxy 返回了一个更好听的句子： `The value of name is John Doe` 。

<!-- When modifying the `age` property, the Proxy returned the previous and new value of this property: `Changed age from 42 to 43`. -->

当修改 `age` 属性时，Proxy 返回了此属性的旧值和新值： `Changed age from 42 to 43` 。

---

<!-- A proxy can be useful to add **validation**. A user shouldn't be able to change `person`'s age to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know. -->

代理的一个用途在于可添加 **验证** 。用户不应该能够将 `person` 的年龄更改为字符串值，或者给他们一个空名字。或者如果用户试图访问对象上不存在的属性，我们应该让用户知道。

```JavaScript
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
  }
});
```

<!-- Let's see what happens when we're trying to pass faulty values! -->

让我们看看当我们试图传递错误的值时会发生什么！

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/focused-rubin-dgk2v?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- The proxy made sure that we weren't modifying the `person` object with faulty values, which helps us keep our data pure! -->

代理确保我们没有用错误的值修改 `person` 对象，这有助于我们保持数据的纯净！

---

<!-- ### Reflect -->
### 反射

<!-- JavaScript provides a built-in object called `Reflect`, which makes it easier for us to manipulate the target object when working with proxies. -->

JavaScript 提供了一个名为 `Reflect` 的内置对象，它能让我们在使用代理时更容易操作目标对象。

<!-- Previously, we tried to modify and access properties on the target object within the proxy through directly getting or setting the values with bracket notation. Instead, we can use the `Reflect` object. The methods on the `Reflect` object have the same name as the methods on the `handler` object. -->

以前，我们尝试通过使用方括号表示法直接获取或设置值来修改和访问代理中目标对象的属性。现在，我们可以使用 `Reflect` 对象。`Reflect` 对象上的方法与 `handler` 对象上的方法同名。

<!-- Instead of accessing properties through `obj[prop]` or setting properties through `obj[prop] = value`, we can access or modify properties on the target object through `Reflect.get()` and `Reflect.set()`. The methods receive the same arguments as the methods on the handler object. -->

我们可以通过 `Reflect.get()` 和 `Reflect.set()` 访问或修改目标对象上的属性，而不是通过 `obj[prop]` 访问属性或通过 `obj[prop] = value` 设置属性。这些方法接收的参数与处理器对象上的方法相同。

```JavaScript
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  }
});
```

<!-- Perfect! We can access and modify the properties on the target object easily with the `Reflect` object. -->

完美！我们可以使用 `Reflect` 对象轻松访问和修改目标对象的属性。

<code-preview
  :code="codes[2]"
  preview="https://codesandbox.io/embed/gallant-violet-o1hjx?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

---
<!-- 
Proxies are a powerful way to add control over the behavior of an object. A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging. -->

代理是添加对对象行为的控制的强大方法。代理可以有各种使用方法：它可以验证、格式化、通知或调试。

<!-- Overusing the `Proxy` object or performing heavy operations on each `handler` method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code. -->

过度使用 `Proxy` 对象或对每个 `handler` 方法调用执行繁重的操作很容易对应用程序的性能产生负面影响。最好不要将代理用于性能优先的代码。

---

<!-- ### References -->
### 参考

- [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) - MDN
- [JavaScript Proxy](https://davidwalsh.name/javascript-proxy) - David Walsh
- [Awesome ES2015 Proxy](https://github.com/mikaelbr/awesome-es2015-proxy) - GitHub @mikaelbr
- [Thoughts on ES6 Proxies Performance](http://thecodebarbarian.com/thoughts-on-es6-proxies-performance) - Valeri Karpov