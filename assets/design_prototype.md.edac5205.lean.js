import{A as l}from"./chunks/ArticleTitle.5d839822.js";import{C as a}from"./chunks/CodePreview.9728cf65.js";import{o as c,c as t,b as s,d as n,e as p,g as e}from"./app.4c314623.js";const r="/learning-patterns/images/Screen_Shot_2020-12-24_at_1.05.14_PM_k6pumf.png",D="/learning-patterns/images/Screen_Shot_2020-12-24_at_1.09.36_PM_isgkmt.png",y=p("",13),F=p("",4),d=p("",7),i=s("p",null,[e("\u5B8C\u7F8E\uFF01 "),s("code",null,"Object.create"),e(" \u662F\u4E00\u79CD\u901A\u8FC7\u6307\u5B9A\u65B0\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B\u8BA9\u5BF9\u8C61\u76F4\u63A5\u4ECE\u5176\u4ED6\u5BF9\u8C61\u7EE7\u627F\u5C5E\u6027\u7684\u7B80\u5355\u65B9\u6CD5\u3002\u65B0\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7\u539F\u578B\u94FE\u8BBF\u95EE\u65B0\u5C5E\u6027\u3002")],-1),A=s("hr",null,null,-1),C=s("p",null,"\u539F\u578B\u6A21\u5F0F\u5141\u8BB8\u6211\u4EEC\u8F7B\u677E\u5730\u8BA9\u5BF9\u8C61\u8BBF\u95EE\u548C\u7EE7\u627F\u5176\u4ED6\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u7531\u4E8E\u539F\u578B\u94FE\u5141\u8BB8\u6211\u4EEC\u8BBF\u95EE\u4E0D\u662F\u76F4\u63A5\u5728\u5BF9\u8C61\u672C\u8EAB\u4E0A\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u907F\u514D\u65B9\u6CD5\u548C\u5C5E\u6027\u7684\u91CD\u590D\uFF0C\u4ECE\u800C\u51CF\u5C11\u4F7F\u7528\u7684\u5185\u5B58\u91CF\u3002",-1),_=s("h2",{id:"references",tabindex:"-1"},[e("References "),s("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#")],-1),g=s("ul",null,[s("li",null,[s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create",target:"_blank",rel:"noreferrer"},"Object.create - MDN")]),s("li",null,[s("a",{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.5",target:"_blank",rel:"noreferrer"},"Prototype - ECMA")])],-1),k=JSON.parse('{"title":"\u539F\u578B\u6A21\u5F0F","description":"","frontmatter":{"title":"\u539F\u578B\u6A21\u5F0F","editLink":true},"headers":[{"level":2,"title":"Object.create","slug":"object-create"},{"level":2,"title":"References","slug":"references"}],"relativePath":"design/prototype.md"}'),u={name:"design/prototype.md"},w=Object.assign(u,{setup(b){const o=[`class Dog {
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
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));`];return(m,h)=>(c(),t("div",null,[s("p",null,[n(l,{title:"\u539F\u578B\u6A21\u5F0F",sub:"\u5728\u76F8\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\u4E4B\u95F4\u5171\u4EAB\u5C5E\u6027"})]),y,s("p",null,[n(a,{code:o[0],preview:"https://codesandbox.io/embed/eloquent-turing-v42kr?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),F,s("p",null,[n(a,{code:o[1],preview:"https://codesandbox.io/embed/hopeful-poitras-vuch6?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),d,s("p",null,[n(a,{code:o[2],preview:"https://codesandbox.io/embed/funny-wing-w38zk?expanddevtools=1&view=preview&hidenavigation=1&theme=darkcodemirror=1&runonclick=1"},null,8,["code"])]),i,A,C,_,g]))}});export{k as __pageData,w as default};
