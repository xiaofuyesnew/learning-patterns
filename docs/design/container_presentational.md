---
title: '容器/展示模式'
editLink: true
---

<script
  setup
>
import ArticleTitle from '../components/ArticleTitle.vue'
import BiliBili from '../components/BiliBili.vue'
import CodePreview from '../components/CodePreview.vue'

const codes = []

</script>

<article-title
  title="容器/展示模式"
  sub="从应用逻辑中分离视图以强制分离关注点"
/>

---

<!-- In React, one way to enforce <span class="pink" title="A design principle for separating your codebase into distinct sections, which all have their own concern">separation of concerns</span> is by using the **Container/Presentational pattern**. With this pattern, we can separate the view from the application logic. -->

在 React 中，一种实现 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> 的方式是使用 **容器/展示模式** 。使用这种模式，我们能将视图与逻辑分开。

---

<!-- Let's say we want to create an application that fetches 6 dog images, and renders these images on the screen. -->

假设我们要创建一个应用来获取 6 张狗的图片，并将这些图片渲染在屏幕上。

<!-- Ideally, we want to enforce <span class="pink" title="A design principle for separating your codebase into distinct sections, which all have their own concern">separation of concerns</span> by separating this process into two parts: -->

理想情况下，我们希望通过将此过程分为两部分来实现 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> ：

<!-- 1. **Presentational Components**: Components that care about ***how*** data is shown to the user. In this example, that's the *rendering the list of dog images*. -->
<!-- 2. **Container Components**: Components that care about ***what*** data is shown to the user. In this example, that's *fetching the dog images*. -->

1. **展示组件** ：关注数据 ***如何*** 展示给用户的组件。在此例中，就是 *渲染狗图片的列表* ；
2. **容器组件** ：关注向用户显示 ***什么*** 数据的组件。在此例中，就是 *获取狗的图片* 。

---

<bili-bili
  video="//player.bilibili.com/player.html?aid=814979843&bvid=BV1vG4y1k7Bz&cid=814221752&page=1"
/>

<!-- Fetching the dog images deals with **application logic**, whereas displaying the images only deals with the **view**. -->

获取狗的图片处理的是 **应用逻辑** ，而显示图片只处理 **视图** 。

<!-- ## Presentational Component -->
## 展示组件

<!-- A presentational component receives its data through `props`. Its primary function is to simply **display the data it receives** the way we want them to, including styles, *without modifying* that data. -->

展示组件通过 `props` 接收数据。它的主要功能就是简单地以我们希望的方式 **显示接收到的数据** ，包括样式，而 *不修改* 该数据。

<!-- Let's take a look at the example that displays the dog images. When rendering the dog images, we simply want to map over each dog image that was fetched from the API, and render those images. In order to do so, we can create a functional component that receives the data through `props`, and renders the data it received. -->

让我们看一下显示狗的图片的例子。渲染狗的图片时，我们只想列举从 API 获取的每张狗的图片，然后渲染这些图片。为此，我们可以创建一个功能组件，它通过 `props` 接收数据，并渲染这些接收到的数据。

<code-preview
  :code="codes[0]"
  preview="https://codesandbox.io/embed/sleepy-murdock-if0ec?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- The `DogImages` component is a presentational component. Presentational components are *usually* stateless: they do not contain their own React state, unless they need a state for UI purposes. The data they receive, is not altered by the presentational components themselves. -->

组件 `DogImages` 就是一个展示组件。展示组件 *通常* 是无状态的：它们不包含自己的 React 状态，除非它们出于 UI 目的需要状态。它们接收到的数据，不会被展示组件自身所修改。

<!-- Presentational components receive their data from **container components**. -->

展示组件从 **容器组件** 接收数据。

<!-- ## Container Components -->
## 容器组件

<!-- The primary function of container components is to **pass data** to presentational components, which they *contain*. Container components themselves usually don't render any other components besides the presentational components that care about their data. Since they don't render anything themselves, they usually do not contain any styling either. -->

容器组件的主要功能是 **传递数据** 给它所 *包含* 的展示组件。容器组件除了关注其数据的展示组件之外，并不会渲染任何其他组件。因为容器组件自身不渲染任何东西，它也通常不包含任何样式。

<!-- In our example, we want to pass dog images to the `DogsImages` presentational component. Before being able to do so, we need to fetch the images from an external API. We need to create a **container component** that fetches this data, and passes this data to the presentational component `DogImages` in order to display it on the screen. -->

在我们的示例中，我们希望将狗的图片传递给 `DogsImages` 展示组件。在达成此点之前，需要从外部 API 获取图片。需要创建一个 **容器组件** 来获取此数据，并将这些数据传递给展示组件 `DogsImages` ，以将它显示在屏幕上。

<code-preview
  :code="codes[1]"
  preview="https://codesandbox.io/embed/sleepy-murdock-if0ec?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- Combining these two components together makes it possible to separate handling application logic with the view. -->

将这两种组件组合在一起使用就可以将应用逻辑与视图分开处理。

<bili-bili
  video="//player.bilibili.com/player.html?aid=387384021&bvid=BV1kd4y1d71v&cid=814221815&page=1"
/>

## 钩子

<!-- In many cases, the Container/Presentational pattern can be replaced with React Hooks. The introduction of Hooks made it easy for developers to add statefulness without needing a container component to provide that state. -->

在许多情况下，容器/展示模式可以使用 React 钩子代替。钩子的引入使开发人员可以轻松添加有状态性，而无需容器组件来提供该状态。

<!-- Instead of having the data fetching logic in the `DogImagesContainer` component, we can create a custom hook that fetches the images, and returns the array of dogs. -->

可以创建一个自定义钩子来获取图片，并返回狗的数组，而不是在 `DogImagesContainer` 组件中去实现数据获取的逻辑。

```JavaScript
export default function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return dogs;
}
```

<!-- By using this hook, we no longer need the wrapping `DogImagesContainer` container component to fetch the data, and send this to the presentational `DogImages` component. Instead, we can use this hook directly in our presentational `DogImages` component! -->

通过使用这个钩子，就不再需要包装 `DogImagesContainer` 容器组件来获取数据，并将数据发送到展示组件 `DogImages` 。相反，可以直接在展示组件 `DogImages` 中使用这个钩子！

<code-preview
  :code="codes[2]"
  preview="https://codesandbox.io/embed/rough-brook-tzp7i?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"
/>

<!-- By using the `useDogImages` hook, we still separated the application logic from the view. We're simply using the returned data from the `useDogImages` hook, without modifying that data within the `DogImages` component. -->

通过使用 `useDogImages` 钩子，也能是应用逻辑与视图分开。这样做也只会使用从 `useDogImages` 钩子中获取到的数据，而不会修改 `DogImages` 组件中的数据。

<bili-bili
  video="//player.bilibili.com/player.html?aid=302483064&bvid=BV1xP411L7o7&cid=814221836&page=1"
/>

<!-- Hooks make it easy to separate logic and view in a component, just like the Container/Presentational pattern. It saves us the extra layer that was necessary in order to wrap the presentational component within the container component. -->

钩子可以很容易地分离组件中的逻辑和视图，就像容器/展示模式一样。它节省了将展示组件包装在容器组件中所必须的额外层。

## 优点

<!-- There are many benefits to using the Container/Presentational pattern. -->

使用容器/展示模式有很多好处。

<!-- The Container/Presentational pattern encourages the <span class="pink" title="A design principle for separating your codebase into distinct sections, which all have their own concern">separation of concerns</span>. Presentational components can be pure functions which are responsible for the UI, whereas container components are responsible for the state and data of the application. This makes it easy to enforce the <span class="pink" title="A design principle for separating your codebase into distinct sections, which all have their own concern">separation of concerns</span>. -->

容器/展示模式鼓励 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> 。展示组件可以是负责 UI 的纯函数，而容器组件负责应用的状态和数据。这使得实现 <span class="pink" title="将代码拆分成不同部分的设计原则，其中每部分代码都有各自的关注点">关注点分离</span> 变得容易。

<!-- Presentational components are easily made reusable, as they simply display data without altering this data. We can reuse the presentational components throughout our application for different purposes. -->

展示组件很容易复用，因为它只是显示数据而不更改数据。可以出于不同的目的在整个应用中复用展示组件。

<!-- Since presentational components don't alter the application logic, the appearance of presentational components can easily be altered by someone without knowledge of the codebase, for example a designer. If the presentational component was reused in many parts of the application, the change can be consistent throughout the app. -->

由于展示组件不会改变应用逻辑，其外观也很容易被不了解代码的人所更改，例如设计师。如果展示组件在应用的多处被复用，那么（对该组件的）更改就可以在整个应用中保持一致。

<!-- Testing presentational components is easy, as they are usually pure functions. We know what the components will render based on which data we pass, without having to mock a data store. -->

测试展示组件很容易，因为它们通常是纯函数。我们知道组件将根据我们传递的数据进行渲染，而无需模拟数据状态。

## 缺点

<!-- The Container/Presentational pattern makes it easy to separate application logic from rendering logic. However, Hooks make it possible to achieve the same result without having to use the Container/Presentational pattern, and without having to rewrite a stateless functional component into a class component.Note that today, we don't need to create class components to use state anymore. -->

容器/展示模式很容易将应用逻辑与渲染逻辑分开。然而，钩子可以实现同样的效果，而无需使用此模式，也无需将无状态功能组件重构为类组件。请注意，现今，我们不再需要创建类组件来使用状态。

<!-- Although we can still use the Container/Presentational pattern, even with React Hooks, this pattern can easily be an overkill in smaller sized application. -->

尽管我们仍然可以使用容器/展示模式，甚至可以跟 React 钩子一起使用，这种模式也容易在较小规模的应用中造成矫枉过正的局面。

<!-- ## References -->
## 参考

- [Presentational and Container Components - Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
