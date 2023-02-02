import{A as l}from"./chunks/ArticleTitle.a6bef2f2.js";import{C as a}from"./chunks/CodePreview.8b929ecb.js";import{o as t,c,d as o,e as p,b as s,g as e}from"./app.ba39ac68.js";const r="/learning-patterns/images/Screen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png",D="/learning-patterns/images/Screen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png",y=p(`<hr><p>原型模式是在许多相同类型的对象之间共享属性的实用方式。原型是 JavaScript 原生的对象，对象可以通过原型链访问。</p><p>在我们的应用中，我们经常需要创建许多相同类型的对象。一个有用的方法是创建一个 ES6 类的多个实例。</p><p>假设我们要创建许多狗类！在我们的例子中，狗类不需要那么多东西：它们只是有一个名字，它们可以吠叫！</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bark</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Woof!</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dog1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Dog</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Daisy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dog2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Dog</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dog3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Dog</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Spot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>请注意这里的 <code>constructor</code> 如何包含一个 <code>name</code> 属性，而类本身包含一个 <code>bark</code> 属性。当使用 ES6 类时，在类本身上定义的所有属性，在本例中为 <code>bark</code>，都会自动添加到原型中。</p><p>我们可以通过访问构造函数的 <code>prototype</code> 属性或通过任何实例的 <code>__proto__</code> 属性直接看到 <code>prototype</code>。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Dog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// constructor: ƒ Dog(name, breed) bark: ƒ bark()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(dog1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// constructor: ƒ Dog(name, breed) bark: ƒ bark()</span></span>
<span class="line"></span></code></pre></div><p>任何构造函数实例上的 <code>__proto__</code> 值，都是对构造函数原型的直接引用！每当我们尝试直接访问对象上不存在的属性时，JavaScript 将 <em>沿着原型链</em> 查看该属性是否在原型链中可以被找到。</p><p><img src="`+r+'" alt="Flow"></p><p>在处理应该可以访问相同属性的对象时，原型模式非常强大。我们可以简单地将属性添加到原型中，而不是每次都创建属性的副本，因为所有实例都可以访问原型对象。</p><p>由于所有实例都可以访问原型，因此即使在创建实例之后也很容易向原型添加属性。</p><p>说我们的狗不仅应该会叫，还应该会玩！我们可以通过在原型中添加一个 <code>play</code> 属性来实现这一点。</p>',13),i=p(`<p><strong>原型链</strong> 一词表明可能有不止一个步骤。的确！到目前为止，我们只看到了如何访问 引用的第一个对象上的 <code>__proto__</code> 直接可用的属性。然而，原型本身也有一个 <code>__proto__</code> 对象！</p><p>让我们创造另一种狗，超级狗！这只狗应该继承普通 <code>Dog</code> 的一切，但它也应该能够飞。我们可以通过继承 <code>Dog</code> 类并添加 <code>fly</code> 方法来创建超级狗。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SuperDog</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fly</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Flying!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>让我们创建一只叫 <code>Daisy</code> 的会飞的狗，并让她吠叫和飞翔吧！</p>`,4),F=p('<p>我们可以访问 <code>bark</code> 方法，因为我们继承了 <code>Dog</code> 类。<code>SuperDog</code> 原型上的 <code>__proto__</code> 值指向 <code>Dog.prototype</code> 对象！</p><p><img src="'+D+`" alt="Flow"></p><p>很清楚为什么它被称作原型链：当我们尝试访问对象上不直接可用的属性时，JavaScript 会递归地遍历 <code>__proto__</code> 指向的所有对象，直到找到该属性！</p><h2 id="object-create" tabindex="-1">Object.create <a class="header-anchor" href="#object-create" aria-hidden="true">#</a></h2><p><code>Object.create</code> 方法允许我们创建一个新对象，我们可以将其原型的值显式传递给该对象。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dog </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bark</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Woof!</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pet1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(dog)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>虽然 <code>pet1</code> 本身没有任何属性，但它确实可以访问其原型链上的属性！由于我们将 <code>dog</code> 对象作为 <code>pet1</code> 的原型传递，我们可以访问 <code>bark</code> 属性。</p>`,7),d=s("p",null,[e("完美！ "),s("code",null,"Object.create"),e(" 是一种通过指定新创建对象的原型让对象直接从其他对象继承属性的简单方法。新对象可以通过原型链访问新属性。")],-1),C=s("hr",null,null,-1),A=s("p",null,"原型模式允许我们轻松地让对象访问和继承其他对象的属性。由于原型链允许我们访问不是直接在对象本身上定义的属性，我们可以避免方法和属性的重复，从而减少使用的内存量。",-1),_=s("h2",{id:"参考",tabindex:"-1"},[e("参考 "),s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#")],-1),g=s("ul",null,[s("li",null,[s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create",target:"_blank",rel:"noreferrer"},"Object.create - MDN")]),s("li",null,[s("a",{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.5",target:"_blank",rel:"noreferrer"},"Prototype - ECMA")])],-1),f=JSON.parse('{"title":"原型模式","description":"","frontmatter":{"title":"原型模式","editLink":true},"headers":[{"level":2,"title":"Object.create","slug":"object-create","link":"#object-create","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/prototype.md"}'),u={name:"design/prototype.md"},w=Object.assign(u,{setup(h){const n=[`class Dog {
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

dog1.play();`,`class Dog {
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
dog1.fly();`,`const dog = {
  bark() {
    console.log(\`Woof!\`);
  }
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));`];return(m,b)=>(t(),c("div",null,[o(l,{title:"原型模式",sub:"在相同类型的对象之间共享属性"}),y,o(a,{code:n[0],preview:"https://codesandbox.io/embed/eloquent-turing-v42kr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),i,o(a,{code:n[1],preview:"https://codesandbox.io/embed/hopeful-poitras-vuch6?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),F,o(a,{code:n[2],preview:"https://codesandbox.io/embed/funny-wing-w38zk?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),d,C,A,_,g]))}});export{f as __pageData,w as default};
