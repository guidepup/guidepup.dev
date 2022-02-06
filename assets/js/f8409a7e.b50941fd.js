"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var r=n(7462),a=n(3366),o=n(7294),l=n(3905),u=n(2389),i=n(9548),s=n(6010),p="tabItem_LplD";function c(e){var t,n,a,l=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,o.useState)(h),O=N[0],T=N[1],x=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=k[m];null!=S&&S!==O&&b.some((function(e){return e.value===S}))&&T(S)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(j(t),T(r),null!=m&&w(m,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:E,onClick:E},a,{className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,u.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}var m=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},v=["components"],f={title:"Getting Started"},b="Getting Started",g={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Guidepup is a screen-reader driver for automation.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/intro.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs"},h=[{value:"Environment Setup",id:"environment",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"First Screen-Reader Code",id:"first",children:[],level:2}],y={toc:h};function k(e){var t=e.components,n=(0,a.Z)(e,v);return(0,l.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Guidepup is a screen-reader driver for automation."),(0,l.kt)("p",null,"It aims to provide a reliable set of APIs to automate your screen-reader a11y workflows through JavaScript. Specifically to accommodate the needs of a11y testing and alleviate the overhead of manual testing with screen-readers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./intro#environment"},"Environment Setup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./intro#installation"},"Installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./intro#first"},"First Screen-Reader Code"))),(0,l.kt)("h2",{id:"environment"},"Environment Setup"),(0,l.kt)("p",null,"Setup your environment for screen-reader automation with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/guidepup/setup"},(0,l.kt)("inlineCode",{parentName:"a"},"@guidepup/setup")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx @guidepup/setup\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install Guidepup to your project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @guidepup/guidepup\n")),(0,l.kt)("h2",{id:"first"},"First Screen-Reader Code"),(0,l.kt)("p",null,"Let's automate VoiceOver for MacOS."),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"example.js")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"example.ts")," for TypeScript) to define your screen-reader code."),(0,l.kt)(d,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(m,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { VoiceOver } from "@guidepup/guidepup";\n\n(async () => {\n  const vo = new VoiceOver();\n  await vo.start();\n  await vo.next();\n  await vo.stop();\n})();\n'))),(0,l.kt)(m,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { VoiceOver } = require("@guidepup/guidepup");\n\n(async () => {\n  const vo = new VoiceOver();\n  await vo.start();\n  await vo.next();\n  await vo.stop();\n})();\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: this example assumes you are using MacOS!")),(0,l.kt)("p",null,"Now run your code to see an automated screen-reader! \ud83d\ude80"),(0,l.kt)(d,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(m,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node example.ts\n"))),(0,l.kt)(m,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node example.js\n")))))}k.isMDXComponent=!0}}]);