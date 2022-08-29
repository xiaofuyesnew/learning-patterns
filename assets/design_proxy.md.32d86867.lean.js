import{A as l}from"./chunks/ArticleTitle.5d839822.js";import{B as e}from"./chunks/BiliBili.6c47bce3.js";import{C as p}from"./chunks/CodePreview.9728cf65.js";import{o as r,c,b as s,d as o,e as n}from"./app.4c314623.js";const t=n("",12),D=n("",4),y=n("",6),F=n("",8),A=n("",6),m=JSON.parse('{"title":"\u4EE3\u7406\u6A21\u5F0F","description":"","frontmatter":{"title":"\u4EE3\u7406\u6A21\u5F0F","editLink":true},"headers":[{"level":3,"title":"\u53CD\u5C04","slug":"\u53CD\u5C04"},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"design/proxy.md"}'),C={name:"design/proxy.md"},b=Object.assign(C,{setup(i){const a=[`const person = {
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
personProxy.age = 43;`,`const person = {
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
personProxy.name = "";`,`const person = {
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
personProxy.name = "Jane Doe";`];return(d,g)=>(r(),c("div",null,[s("p",null,[o(l,{title:"\u4EE3\u7406\u6A21\u5F0F",sub:"\u62E6\u622A\u548C\u63A7\u5236\u76EE\u6807\u5BF9\u8C61\u7684\u4EA4\u4E92"})]),t,s("p",null,[o(e,{video:"//player.bilibili.com/player.html?aid=899825058&bvid=BV1AN4y1c7Dt&cid=811202023&page=1"})]),D,s("p",null,[o(p,{code:a[0],preview:"https://codesandbox.io/embed/cocky-bird-rkgyo?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),y,s("p",null,[o(p,{code:a[1],preview:"https://codesandbox.io/embed/focused-rubin-dgk2v?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),F,s("p",null,[o(p,{code:a[2],preview:"https://codesandbox.io/embed/gallant-violet-o1hjx?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),A]))}});export{m as __pageData,b as default};
