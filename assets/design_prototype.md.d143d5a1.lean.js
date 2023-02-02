import{A as l}from"./chunks/ArticleTitle.a6bef2f2.js";import{C as a}from"./chunks/CodePreview.8b929ecb.js";import{o as t,c,d as o,e as p,b as s,g as e}from"./app.ba39ac68.js";const r="/learning-patterns/images/Screen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png",D="/learning-patterns/images/Screen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png",y=p("",13),i=p("",4),F=p("",7),d=s("p",null,[e("完美！ "),s("code",null,"Object.create"),e(" 是一种通过指定新创建对象的原型让对象直接从其他对象继承属性的简单方法。新对象可以通过原型链访问新属性。")],-1),C=s("hr",null,null,-1),A=s("p",null,"原型模式允许我们轻松地让对象访问和继承其他对象的属性。由于原型链允许我们访问不是直接在对象本身上定义的属性，我们可以避免方法和属性的重复，从而减少使用的内存量。",-1),_=s("h2",{id:"参考",tabindex:"-1"},[e("参考 "),s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#")],-1),g=s("ul",null,[s("li",null,[s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create",target:"_blank",rel:"noreferrer"},"Object.create - MDN")]),s("li",null,[s("a",{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.5",target:"_blank",rel:"noreferrer"},"Prototype - ECMA")])],-1),f=JSON.parse('{"title":"原型模式","description":"","frontmatter":{"title":"原型模式","editLink":true},"headers":[{"level":2,"title":"Object.create","slug":"object-create","link":"#object-create","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"design/prototype.md"}'),u={name:"design/prototype.md"},w=Object.assign(u,{setup(h){const n=[`class Dog {
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
