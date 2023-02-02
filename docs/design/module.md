---
title: '模块模式'
editLink: true
---

<script setup>
import ArticleTitle from '../components/ArticleTitle.vue'
import BiliBili from '../components/BiliBili.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = [
  `function add(x, y) {
  return x + y;
}
function multiply(x) {
  return x * 2;
}
function subtract(x, y) {
  return x - y;
}
function square(x) {
  return x * x;
}`,
`export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
`
]
</script>

<article-title title="模块模式" sub="将代码拆分得更小的并可重用" />

---

As your application and codebase grow, it becomes increasingly important to keep your code maintainable and separated. The module pattern allows you to split up your code into smaller, reusable pieces.

Besides being able to split your code into smaller reusable pieces, modules allow you to keep certain values within your file *private*. Declarations within a module are scoped ( *encapsulated* ) to that module , by default. If we don’t explicitly export a certain value, that value is not available outside that module. This reduces the risk of name collisions for values declared in other parts of your codebase, since the values are not available on the global scope.

## ES2015 Modules

ES2015 introduced built-in JavaScript modules. A module is a file containing JavaScript code, with some difference in behavior compared to a normal script.

Let's look at an example of a module called `math.js`, containing mathematical functions.

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/design-patterns10-44n1k?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

We have a `math.js` file containing some simple mathematical logic. We have functions that allow users to add, multiply, subtract, and get the square of values that they pass.

However, we don’t just want to use these functions in the `math.js` file, we want to be able to reference them in the `index.js` file! Currently, an error gets thrown inside the `index.js` file: there are no functions within the `index.js` file called `add`, `subtract`, `multiply` or `square`. We are trying to reference functions that are not available in the `index.js` file.

In order to make the functions from `math.js` available to other files, we first have to export them. In order to export code from a module, we can use the `export` keyword. One way of exporting the functions, is by using named exports: we can simply add the `export` keyword in front of the parts that we want to publicly expose. In this case, we’ll want to add the export keyword in front of every function, since `index.js` should have access to all four functions.

```javascript
export function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
```

We just made the `add`, `multiply`, `subtract`, and `square` functions exportable! However, just exporting the values from a module is not enough to make them publicly available to all files. In order to be able to use the exported values from a module, you have to explicitly import them in the file that needs to reference them.

We have to import the values on top of the `index.js` file, by using the `import` keyword. To let javascript know from which module we want to import these functions, we need to add a `from` value and the relative path to the module.

```javascript
import { add, multiply, subtract, square } from "./math.js";
```

We just imported the four functions from the `math.js` module in the `index.js` file! Let’s try and see if we can use the functions now!

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/holy-cookies-7t2cp?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

---

原文链接：[Module Pattern](https://www.patterns.dev/posts/module-pattern/)
