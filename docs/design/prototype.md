---
title: '原型模式'
editLink: true
---

<script
  setup
>
import ArticleTitle from '../components/ArticleTitle.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = [
  [
    {
      name: 'index.js',
      type: 'js',
      content: `class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return \`Woof!\`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();`
    }
  ],
  [
    {
      name: 'index.js',
      type: 'js',
      content: `class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Woof!");
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(\`Flying!\`);
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();`
    }
  ],
  [
    {
      name: 'index.js',
      type: 'js',
      content: `const dog = {
  bark() {
    console.log(\`Woof!\`);
  }
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));`
    }
  ]
]
</script>

<!--
Prototype Pattern
Share properties among many objects of the same type
-->

<article-title
  title="原型模式"
  sub="在相同类型的对象之间共享属性"
/>

---

<!-- The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain. -->

原型模式是在许多相同类型的对象之间共享属性的实用方式。原型是 JavaScript 原生的对象，对象可通过原型链访问。

<!-- In our applications, we often have to create many objects of the same type. A useful way of doing this is by creating multiple instances of an ES6 class. -->

在我们的应用中，我们经常需要创建许多相同类型的对象。一个有用的方法是创建 ES6 类的多个实例。

<!-- Let's say we want to create many dogs! In our example, dogs can't do that much: they simply have a name, and they can bark! -->

假设我们要创建许多狗类！在我们的例子中，狗类不需要那么多东西：它们只有一个名字，并且可以叫！

```JavaScript
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");
```

<!-- Notice here how the `constructor` contains a `name` property, and the class itself contains a `bark` property. When using ES6 classes, all properties that are defined on the class itself, `bark` in this case, are automatically added to the `prototype`. -->

请注意这里的 `constructor` 是如何包含 `name` 属性，而类本身包含 `bark` 属性。当使用 ES6 类时，在类本身上定义的所有属性，在本例中为 `bark`，都会自动添加到原型中。

<!-- We can see the `prototype` directly through accessing the `prototype` property on a constructor, or through the `__proto__` property on any *instance* . -->

我们可以通过访问构造函数的 `prototype` 属性或通过任何实例的 `__proto__` 属性直接看到 `prototype`。

```JavaScript
console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
```

<!-- The value of `__proto__` on any instance of the constructor, is a direct reference to the constructor's prototype! Whenever we try to access a property on an object that doesn't exist on the object directly, JavaScript will *go down the prototype chain* to see if the property is available within the prototype chain. -->

任何构造函数实例上的 `__proto__` ，都是对构造函数原型的直接引用！每当我们直接访问对象上不存在的属性时，JavaScript 将 *沿着原型链* 查看该属性是否在原型链中可以被找到。

![Flow](/images/Screen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png)

<!-- The prototype pattern is very powerful when working with objects that should have access to the same properties. Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object. -->

在处理具有相同属性的对象时，原型模式非常强大。我们可以简单地将属性添加到原型中，而不是每次都创建属性的副本，因为所有实例都可以访问原型对象。

<!-- Since all instances have access to the prototype, it's easy to add properties to the prototype even after creating the instances. -->

由于所有实例都可以访问原型，因此即使在创建实例之后也很容易向原型添加属性。

<!-- Say that our dogs shouldn't only be able to bark, but they should also be able to play! We can make this possible by adding a `play` property to the prototype. -->

例如，狗不仅会叫，还应该会玩！我们可以通过在原型中添加 `play` 属性来实现这一点。

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/eloquent-turing-v42kr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- The term **prototype chain** indicates that there could be more than one step. Indeed! So far, we've only seen how we can access properties that are directly available on the first object that `__proto__` has a reference to. However, prototypes themselves also have a `__proto__` object! -->

**原型链** 一词表明可能有不止一个步骤。的确！到目前为止，我们只看到了如何访问引用的第一个对象上的 `__proto__` 直接可用的属性。然而，原型本身也有一个 `__proto__` 对象！

<!-- Let's create another type of dog, a super dog! This dog should inherit everything from a normal `Dog`, but it should also be able to fly. We can create a super dog by extending the `Dog` class and adding a `fly` method. -->

让我们创造另一种狗，超级狗！这只狗应该继承普通 `Dog` 的一切，但它也应该能够飞。我们可以通过继承 `Dog` 类并添加 `fly` 方法来创建超级狗。

```JavaScript
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "Flying!";
  }
}
```

<!-- Let's create a flying dog called `Daisy`, and let her bark and fly! -->

让我们创建一只叫 `Daisy` 的会飞的狗，并让她叫和飞翔吧！

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/hopeful-poitras-vuch6?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- We have access to the `bark` method, as we extended the `Dog` class. The value of `__proto__` on the prototype of `SuperDog` points to the `Dog.prototype` object! -->

我们可以访问 `bark` 方法，因为我们继承了 `Dog` 类。`SuperDog` 原型上的 `__proto__` 值指向 `Dog.prototype` 对象！

![Flow](/images/Screen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png)

<!-- It gets clear why it's called a prototype chain: when we try to access a property that's not directly available on the object, JavaScript recursively walks down all the objects that `__proto__` points to, until it finds the property! -->

很清楚为什么它被称作原型链：当我们尝试访问对象上不直接可用的属性时，JavaScript 会递归地遍历 `__proto__` 指向的所有对象，直到找到该属性！

## Object.create

<!-- The `Object.create` method lets us create a new object, to which we can explicitly pass the value of its prototype. -->

`Object.create` 方法允许我们创建一个新对象，我们可以将其原型的值显式传递给该对象。

```JavaScript
const dog = {
  bark() {
    return `Woof!`;
  }
};

const pet1 = Object.create(dog);
```

<!-- Although `pet1` itself doesn't have any properties, it does have access to properties on its prototype chain! Since we passed the `dog` object as `pet1`'s prototype, we can access the `bark` property. -->

虽然 `pet1` 本身没有任何属性，但它确实可以访问其原型链上的属性！由于我们将 `dog` 对象作为 `pet1` 的原型传递，我们可以访问 `bark` 属性。

<code-preview
  :code="codes[2]"
  preview="https://codesandbox.io/embed/funny-wing-w38zk?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- Perfect! `Object.create` is a simple way to let objects directly inherit properties from other objects, by specifying the newly created object's prototype. The new object can access the new properties by walking down the prototype chain. -->

很好！ `Object.create` 是一种通过指定新创建对象的原型让对象直接从其他对象继承属性的简单方法。新对象可以通过原型链访问新属性。

---

<!-- The prototype pattern allows us to easily let objects access and inherit properties from other objects. Since the prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used. -->

原型模式允许我们轻松地让对象访问和继承其他对象的属性。由于原型链允许我们访问不是直接在对象本身上定义的属性，我们可以避免方法和属性的重复，从而减少内存的使用量。

## 参考

- [Object.create - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [Prototype - ECMA](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.5)

---

原文链接：[Prototype Pattern](https://www.patterns.dev/posts/prototype-pattern/)
