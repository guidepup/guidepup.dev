"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[9671],{7876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),s=n(4866),i=n(5162);const l={title:"Getting Started",description:"Getting started with Guidepup for screen reader automation in accessibility testing"},o="Getting Started",u={id:"intro",title:"Getting Started",description:"Getting started with Guidepup for screen reader automation in accessibility testing",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/intro.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"Getting started with Guidepup for screen reader automation in accessibility testing"},sidebar:"docs",next:{title:"Real World Example",permalink:"/docs/example"}},c={},d=[{value:"Contents",id:"contents",level:2},{value:"Environment Setup",id:"environment",level:2},{value:"Installation",id:"installation",level:2},{value:"First Screen Reader Code",id:"first",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.p,{children:"Guidepup is a screen reader driver for test automation."}),"\n",(0,r.jsx)(t.p,{children:"It aims to provide a reliable set of APIs to automate your screen reader a11y workflows through JavaScript. Specifically to accommodate the needs of a11y testing and alleviate the overhead of manual testing with real screen readers."}),"\n",(0,r.jsx)(t.h2,{id:"contents",children:"Contents"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./intro#environment",children:"Environment Setup"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./intro#installation",children:"Installation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./intro#first",children:"First Screen Reader Code"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"environment",children:"Environment Setup"}),"\n",(0,r.jsxs)(t.p,{children:["Setup your environment for screen reader automation with ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@guidepup/setup",children:(0,r.jsx)(t.code,{children:"@guidepup/setup"})}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @guidepup/setup\n"})}),"\n",(0,r.jsx)(t.p,{children:"For some operating systems, enabling automation of screen readers is tightly controlled. This CLI handles the setup for your OS."}),"\n",(0,r.jsxs)(t.p,{children:["For further information checkout this ",(0,r.jsx)(t.a,{href:"./guides/automated-environment-setup",children:"guide to set up your environment"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Install Guidepup to your project:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"pm-flavor",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],children:[(0,r.jsx)(i.Z,{value:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @guidepup/guidepup\n"})})}),(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install @guidepup/guidepup\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"first",children:"First Screen Reader Code"}),"\n",(0,r.jsx)(t.p,{children:"Let's automate a screen reader!"}),"\n",(0,r.jsxs)(t.p,{children:["Create ",(0,r.jsx)(t.code,{children:"example.js"})," (or ",(0,r.jsx)(t.code,{children:"example.ts"})," for TypeScript) to define your screen reader code."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,r.jsxs)(i.Z,{value:"ts",children:[(0,r.jsx)(t.p,{children:"If you're using MacOS:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { voiceOver } from "@guidepup/guidepup";\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move to the next item.\n  await voiceOver.next();\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),(0,r.jsx)(t.p,{children:"Or if you're using Windows:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { nvda } from "@guidepup/guidepup";\n\n(async () => {\n  // Start NVDA.\n  await nvda.start();\n\n  // Move to the next item.\n  await nvda.next();\n\n  // Stop NVDA.\n  await nvda.stop();\n})();\n'})})]}),(0,r.jsxs)(i.Z,{value:"js",children:[(0,r.jsx)(t.p,{children:"If you're using MacOS:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const { voiceOver } = require("@guidepup/guidepup");\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move to the next item.\n  await voiceOver.next();\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),(0,r.jsx)(t.p,{children:"Or if you're using Windows:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const { nvda } = require("@guidepup/guidepup");\n\n(async () => {\n  // Start NVDA.\n  await nvda.start();\n\n  // Move to the next item.\n  await nvda.next();\n\n  // Stop NVDA.\n  await nvda.stop();\n})();\n'})})]})]}),"\n",(0,r.jsx)(t.p,{children:"Now run your code to see an automated screen reader!"}),"\n",(0,r.jsxs)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,r.jsx)(i.Z,{value:"ts",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx ts-node example.ts\n"})})}),(0,r.jsx)(i.Z,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"node example.js\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(512),s=n(2466),i=n(6550),l=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=v({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(b,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(7294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);