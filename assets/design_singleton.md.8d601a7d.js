import{A as t}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as p}from"./chunks/BiliBili.f6d1f9d1.js";import{C as l}from"./chunks/CodePreview.8b929ecb.js";import{o as c,c as r,d as s,e as a,b as n,g as o}from"./app.ba39ac68.js";const i=a(`<hr><p>单例是指可以实例化一次，并能全局访问的类。这种单一实例可以在应用中共享，这使单例非常适合管理应用中的全局状态。</p><p>首先，让我们看看使用 ES2015 类来实例化的单例会是什么样子。在这个例子中，我们将构建 <code>Counter</code> 类，它具有：</p><ul><li><code>getInstance</code> 方法返回这个实例</li><li><code>getCount</code> 方法返回 <code>counter</code> 变量的当前值</li><li><code>increment</code> 方法将 <code>counter</code> 增加 1</li><li><code>decrement</code> 方法将 <code>counter</code> 减少 1</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getInstance</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getCount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>然而，这个类不符合单例的标准！一个单例只能被 <strong>实例化一次</strong> 。现在，我们可以多次实例化 <code>Counter</code> 类。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getInstance</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getCount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counter1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counter2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(counter1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> counter2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><p>通过两次调用 <code>new</code> 方法，我们只是得到了 <code>counter1</code> 和 <code>counter2</code> 两个不相同的实例。 <code>counter1</code> 和 <code>counter2</code> 上的 <code>getInstance</code> 方法的返回值只是不同的实例引用：它们并不严格相等！</p>`,8),F=a(`<p>让我们确保只能创建 <code>Counter</code> 类的 <strong>一个</strong> 实例。</p><p>确保只能创建一个实例的其中一种方法就是创建一个称为 <code>instance</code> 的变量。在 <code>Counter</code> 的构造函数中，我们可以将 <code>instance</code> 设置为当新实例创建时对该实例的引用。我们可以通过检查 <code>instance</code> 变量是否已经有值来防止新的实例化。如果是这种情况，实例已经存在。这不应该发生：应该抛出一个错误让用户知道。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> instance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">You can only create one instance!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getInstance</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getCount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counter1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counter2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 错误: 只能创建一个实例！</span></span>
<span class="line"></span></code></pre></div><p>完美！我们再也不能创建多个实例了。</p><p>让我们从 <code>counter.js</code> 文件中导出 <code>Counter</code> 实例。但在此之前，我们也应该 <span class="pink">冻结</span> 该实例。 <code>Object.freeze</code> 方法使得代码无法修改单例。无法添加或修改被冻结的实例的属性，这降低了意外覆盖单例属性的风险。</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> instance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">You can only create one instance!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getInstance</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getCount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">decrement</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">counter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> singletonCounter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> singletonCounter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><hr><p>让我们看一个实现了 <code>Counter</code> 的应用示例。我们有以下文件：</p><ul><li><code>counter.js</code> ：包含 <code>Counter</code> 类， 并导出一个 <strong><code>Counter</code></strong> <strong>实例</strong> 作为默认导出</li><li><code>index.js</code> ：加载 <code>redButton.js</code> 和 <code>blueButton.js</code> 模块</li><li><code>redButton.js</code>: 导入 <code>Counter</code> ， 并将 <code>Counter</code> 的 <code>increment</code> 方法作为事件监听器添加到 <strong>红色</strong> 按钮，并通过调用 <code>getCount</code> 方法记录 <code>counter</code> 的值</li><li><code>blueButton.js</code>: 导入 <code>Counter</code> ， 并将 <code>Counter</code> 的 <code>increment</code> 方法作为事件监听器添加到 <strong>蓝色</strong> 按钮，并通过调用 <code>getCount</code> 方法记录 <code>counter</code> 的值</li></ul><p><code>blueButton.js</code> 和 <code>redButton.js</code> 都从 <code>counter.js</code> 导入 <strong>相同的实例</strong> 。 这个实例在两个文件中都作为 <strong><code>Counter</code></strong> 导入。</p>`,10),y=a('<p>当我们在 <code>redbutton.js</code> 或 <code>bluebutton.js</code> 中调用 <code>increment</code> 方法时，两个文件中的 <code>Counter</code> 实例的 <code>counter</code> 属性值都更新了。不管我们点击红色按钮还是蓝色按钮：在所有实例中都共享了相同的值。这就是为什么计数器一直会递增一的原因——即使我们在不同的文件中调用这个方法。</p><h2 id="优势-劣势" tabindex="-1">优势（劣势） <a class="header-anchor" href="#优势-劣势" aria-hidden="true">#</a></h2><p>将实例化限制为仅一个实例可以节约大量内存空间。我们不必每次都为新实例设置内存，而只需为一个实例设置内存，该实例在整个应用中都可以被调用。但是，单例实际上被认为是一种 <strong>反模式</strong> ，并且可以（或... <em>应该</em>）在 JavaScript 中避免使用。</p><p>在许多编程语言中，例如 Java 或 C++，不能像在 JavaScript 中那样直接创建对象。在那些面向对象的编程语言中，我们需要先创建一个类，它会创建一个对象。该创建的对象具有类实例的值，就像 JavaScript 中的 <code>实例</code> 的值一样。</p><p>但是，上面例子中所展示的类的实现实际上是矫枉过正。由于我们可以直接在 JavaScript 中创建对象，因此我们可以简单地使用常规对象来实现完全相同的结果。让我们来介绍一下使用单例的缺点！</p><h3 id="使用字面量对象" tabindex="-1">使用字面量对象 <a class="header-anchor" href="#使用字面量对象" aria-hidden="true">#</a></h3><p>让我们使用与之前看到的相同的示例。但这次， <code>counter</code> 只是一个包含以下内容的对象：</p><ul><li><code>count</code> 属性</li><li><code>increment</code> 方法将 <code>count</code> 增加一</li><li>a <code>decrement</code> 方法将 <code>count</code> 减少一</li></ul>',8),D=a('<p>由于对象是通过引用传递的，<code>redButton.js</code> 和 <code>blueButton.js</code> 都在导入对同一个 <code>counter</code> 对象的引用。修改这些文件中的任何一个中的 <code>count</code> 值都会修改 <code>counter</code> 上的值，这在两个文件中都是可见的。</p><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-hidden="true">#</a></h3><p>测试依赖于单例的代码可能会变得很棘手。由于我们不能每次都创建新实例，因此所有测试都依赖于对上一次测试的全局实例的修改。在这种情况下，测试的顺序很重要，一个小的修改可能会导致整个测试流程失败。测试之后，我们还需要重置整个实例以重置测试所做的修改。</p>',3),C=n("h3",{id:"依赖隐藏",tabindex:"-1"},[o("依赖隐藏 "),n("a",{class:"header-anchor",href:"#依赖隐藏","aria-hidden":"true"},"#")],-1),d=n("p",null,[o("导入另一个模块时，在此例子中是 "),n("code",null,"superCounter.js"),o(" ，模块正导入的是一个单例可能并不明显。在其他文件中，在此例子中例如 "),n("code",null,"index.js"),o(" ，我们可能正在导入那个模块并且调用它的方法。因此，我们意外地修改了单例中的值。这可能会导致意外行为，因为可以在整个应用中共享单例的多个实例，这些实例也将同时被改变。")],-1),A=a('<h3 id="全局行为" tabindex="-1">全局行为 <a class="header-anchor" href="#全局行为" aria-hidden="true">#</a></h3><p>一个单例实例应该能在整个应用中被引用。全局变量本质上也展现了相同的行为：因为全局变量在全局作用域下可用，我们可以在整个应用中访问这些变量。</p><p>存在全局变量通常被认为是糟糕的设计决策。全局范围污染最终可能导致意外覆盖全局变量的值，从而导致许多意外行为。</p><p>在 ES2015 中，创建全局变量变得十分罕见。新的 <code>let</code> 和 <code>const</code> 关键字通过将使用它们声明的变量保持在块级作用域内来防止开发者意外污染全局作用域。JavaScript 中，新的 <code>module</code> 系统使创建全局可访问的值更容易，并且不会污染全局作用域，它能从模块中 <code>export</code> 值，并 <code>import</code> 这些值到其他文件中。</p><p>然而，单例的常见用例是在整个应用中维护某种 <strong>全局状态</strong>。让代码在多处依赖同一个 <span class="pink" title="其属性可被添加、移除、修改或删除的对象">可变对象</span> 可能会导致意外行为。</p><p>通常，代码中的某些部分会修改全局状态中的值，而其他部分会使用该数据。在这里，执行顺序很重要：我们不想在（还）没有数据可供消费时，贸然地先去消费数据！随着应用的增长以及数量众多的组件相互依赖，使用全局状态时理解数据流可能会变得非常棘手。</p><h3 id="react-中的状态管理" tabindex="-1">React 中的状态管理 <a class="header-anchor" href="#react-中的状态管理" aria-hidden="true">#</a></h3><p>在 React 中，我们通常使用 <strong>Redux</strong> 或 <strong>React Context</strong> 等状态管理工具来管理全局状态，而不是使用单例。尽管它们的全局状态行为可能看起来像单例，但这些工具提供了 <strong>只读状态</strong> 而不是单例的 <em>可变</em> 状态。使用 Redux 时，只有纯函数 <em>reducer</em> 可以在组件通过 <em>dispatcher</em> 发送 <em>action</em> 后更新状态。</p><p>尽管使用这些工具不会奇迹般地消除全局状态的缺点，但我们至少可以确保全局状态按照我们想要的方式发生变化，因为组件不能直接更新状态。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672" target="_blank" rel="noreferrer">Do React Hooks replace Redux - Eric Elliott</a></li><li><a href="https://alligator.io/js/js-singletons/" target="_blank" rel="noreferrer">Working with Singletons in JavaScript - Vijay Prasanna</a></li><li><a href="https://www.sitepoint.com/javascript-design-patterns-singleton/" target="_blank" rel="noreferrer">JavaScript Design Patterns: The Singleton - Samier Saeed</a></li><li><a href="https://refactoring.guru/design-patterns/singleton" target="_blank" rel="noreferrer">Singleton - Refactoring Guru</a></li></ul>',11),S=JSON.parse('{"title":"单例模式","description":"","frontmatter":{"title":"单例模式","editLink":true},"headers":[{"level":2,"title":"优势（劣势）","slug":"优势-劣势","link":"#优势-劣势","children":[{"level":3,"title":"使用字面量对象","slug":"使用字面量对象","link":"#使用字面量对象","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":3,"title":"依赖隐藏","slug":"依赖隐藏","link":"#依赖隐藏","children":[]},{"level":3,"title":"全局行为","slug":"全局行为","link":"#全局行为","children":[]},{"level":3,"title":"React 中的状态管理","slug":"react-中的状态管理","link":"#react-中的状态管理","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/singleton.md"}'),u={name:"design/singleton.md"},T=Object.assign(u,{setup(h){const e=[`let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };`,`import Counter from "../src/counterTest";

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
});`,`import Counter from "./counter";

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
}`];return(g,m)=>(c(),r("div",null,[s(t,{title:"单例模式",sub:"在应用中共享同一个全局实例"}),i,s(p,{video:"//player.bilibili.com/player.html?aid=514695213&bvid=BV1Jg411r7K5&cid=810086536&page=1"}),F,s(p,{video:"//player.bilibili.com/player.html?aid=217167501&bvid=BV1Pa41157Cv&cid=810086539&page=1"}),y,s(l,{code:e[0],preview:"https://codesandbox.io/embed/competent-moon-rvzrr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),D,s(l,{code:e[1],preview:"https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=0&view=preview&previewwindow=tests&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),C,d,s(l,{code:e[2],preview:"https://codesandbox.io/embed/sweet-cache-n55vi?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),A]))}});export{S as __pageData,T as default};
