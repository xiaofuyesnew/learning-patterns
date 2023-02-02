import{A as p}from"./chunks/ArticleTitle.a6bef2f2.js";import{B as l}from"./chunks/BiliBili.f6d1f9d1.js";import{C as a}from"./chunks/CodePreview.8b929ecb.js";import{o as e,c as t,d as s,e as o}from"./app.ba39ac68.js";const r=o("",12),c=o("",4),y=o("",6),D=o("",8),F=o("",6),m=JSON.parse('{"title":"代理模式","description":"","frontmatter":{"title":"代理模式","editLink":true},"headers":[{"level":3,"title":"反射","slug":"反射","link":"#反射","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/proxy.md"}'),A={name:"design/proxy.md"},_=Object.assign(A,{setup(C){const n=[`const person = {
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
personProxy.name = "Jane Doe";`];return(i,d)=>(e(),t("div",null,[s(p,{title:"代理模式",sub:"拦截和控制目标对象的交互"}),r,s(l,{video:"//player.bilibili.com/player.html?aid=899825058&bvid=BV1AN4y1c7Dt&cid=811202023&page=1"}),c,s(a,{code:n[0],preview:"https://codesandbox.io/embed/cocky-bird-rkgyo?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),y,s(a,{code:n[1],preview:"https://codesandbox.io/embed/focused-rubin-dgk2v?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),D,s(a,{code:n[2],preview:"https://codesandbox.io/embed/gallant-violet-o1hjx?expanddevtools=0&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"]),F]))}});export{m as __pageData,_ as default};
