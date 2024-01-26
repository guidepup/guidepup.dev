"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[9671],{7876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(5893),a=t(1151),s=t(4866),i=t(5162);const l={title:"Getting Started",description:"Getting started with Guidepup for screen reader automation in accessibility testing"},o="Getting Started",u={id:"intro",title:"Getting Started",description:"Getting started with Guidepup for screen reader automation in accessibility testing",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/intro.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"Getting started with Guidepup for screen reader automation in accessibility testing"},sidebar:"docs",next:{title:"Real World Example",permalink:"/docs/example"}},c={},d=[{value:"Contents",id:"contents",level:2},{value:"Environment Setup",id:"environment",level:2},{value:"Installation",id:"installation",level:2},{value:"First Screen Reader Code",id:"first",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.p,{children:"Guidepup is a screen reader driver for test automation."}),"\n",(0,r.jsx)(n.p,{children:"It aims to provide a reliable set of APIs to automate your screen reader a11y workflows through JavaScript. Specifically to accommodate the needs of a11y testing and alleviate the overhead of manual testing with real screen readers."}),"\n",(0,r.jsx)(n.h2,{id:"contents",children:"Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./intro#environment",children:"Environment Setup"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./intro#installation",children:"Installation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./intro#first",children:"First Screen Reader Code"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"environment",children:"Environment Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Setup your environment for screen reader automation with ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@guidepup/setup",children:(0,r.jsx)(n.code,{children:"@guidepup/setup"})}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @guidepup/setup\n"})}),"\n",(0,r.jsx)(n.p,{children:"For some operating systems, enabling automation of screen readers is tightly controlled. This CLI handles the setup for your OS."}),"\n",(0,r.jsxs)(n.p,{children:["For further information checkout this ",(0,r.jsx)(n.a,{href:"./guides/automated-environment-setup",children:"guide to set up your environment"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Install Guidepup to your project:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"pm-flavor",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],children:[(0,r.jsx)(i.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @guidepup/guidepup\n"})})}),(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @guidepup/guidepup\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"first",children:"First Screen Reader Code"}),"\n",(0,r.jsx)(n.p,{children:"Let's automate a screen reader!"}),"\n",(0,r.jsxs)(n.p,{children:["Create ",(0,r.jsx)(n.code,{children:"example.js"})," (or ",(0,r.jsx)(n.code,{children:"example.ts"})," for TypeScript) to define your screen reader code."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,r.jsxs)(i.Z,{value:"ts",children:[(0,r.jsx)(n.p,{children:"If you're using MacOS:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { voiceOver } from "@guidepup/guidepup";\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move to the next item.\n  await voiceOver.next();\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),(0,r.jsx)(n.p,{children:"Or if you're using Windows:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { nvda } from "@guidepup/guidepup";\n\n(async () => {\n  // Start NVDA.\n  await nvda.start();\n\n  // Move to the next item.\n  await nvda.next();\n\n  // Stop NVDA.\n  await nvda.stop();\n})();\n'})})]}),(0,r.jsxs)(i.Z,{value:"js",children:[(0,r.jsx)(n.p,{children:"If you're using MacOS:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { voiceOver } = require("@guidepup/guidepup");\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move to the next item.\n  await voiceOver.next();\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),(0,r.jsx)(n.p,{children:"Or if you're using Windows:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { nvda } = require("@guidepup/guidepup");\n\n(async () => {\n  // Start NVDA.\n  await nvda.start();\n\n  // Move to the next item.\n  await nvda.next();\n\n  // Stop NVDA.\n  await nvda.stop();\n})();\n'})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Now run your code to see an automated screen reader!"}),"\n",(0,r.jsxs)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,r.jsx)(i.Z,{value:"ts",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx ts-node example.ts\n"})})}),(0,r.jsx)(i.Z,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node example.js\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),a=t(512),s=t(2466),i=t(6550),l=t(469),o=t(1980),u=t(7392),c=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=v({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(b,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(7294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);