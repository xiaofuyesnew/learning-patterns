---
title: '代理模式'
editLink: ''
---

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'
import BiliBili from '../components/BiliBili.vue'
</script>

<article-title title="代理模式" sub="拦截和控制目标对象的交互" />

---

With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.

---

Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object.

---

Let's create a `person` object, that represents John Doe.

```JavaScript
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};
```

Instead of interacting with this object directly, we want to interact with a proxy object. In JavaScript, we can easily create a new proxy by creating a new instance of `Proxy`.

```JavaScript
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

const personProxy = new Proxy(person, {});
```

The second argument of `Proxy` is an object that represents the *handler*. In the handler object, we can define specific behavior based on the type of interaction. Although there are [many methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that you can add to the Proxy handler, the two most common ones are `get` and `set`:

- `get`: Gets invoked when trying to **access** a property
- `set`: Gets invoked when trying to **modify** a property

Effectively, what will end up happening is the following:

<bili-bili
  video="//player.bilibili.com/player.html?aid=899825058&bvid=BV1AN4y1c7Dt&cid=811202023&page=1"
/>

Instead of interacting with the person object directly, we'll be interacting with the personProxy.

Let's add handlers to the personProxy Proxy. When trying to modify a property, thus invoking the set method on the Proxy, we want the proxy to log the previous value and the new value of the property. When trying to access a property, thus invoking the get met
