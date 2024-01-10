"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[1040],{1368:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=i(5893),c=i(1151);const o={title:"ClickOptions"},s=void 0,l={id:"api/class-click-options",title:"ClickOptions",description:"Extends: [CommandOptions]",source:"@site/docs/api/class-click-options.md",sourceDirName:"api",slug:"/api/class-click-options",permalink:"/docs/api/class-click-options",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-click-options.md",tags:[],version:"current",frontMatter:{title:"ClickOptions"},sidebar:"api",previous:{title:"Guidepup Library",permalink:"/docs/api/class-guidepup"},next:{title:"CommandOptions",permalink:"/docs/api/class-command-options"}},r={},p=[{value:"clickOptions.button",id:"click-options-button",level:2},{value:"clickOptions.clickCount",id:"click-options-click-count",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extends:"})," ",(0,t.jsx)(n.a,{href:"./class-command-options",title:"CommandOptions",children:"CommandOptions"})]}),"\n",(0,t.jsx)(n.p,{children:"Options for click operations."}),"\n",(0,t.jsx)(n.p,{children:"For example, use with the VoiceOver mouse cursor:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { voiceOver } from "@guidepup/guidepup";\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Left-click the mouse.\n  await voiceOver.click();\n\n  // Left-click the mouse using specific options.\n  await voiceOver.click({ button: "left", clickCount: 1 });\n\n  // Double-right-click the mouse.\n  await voiceOver.click({ button: "right", clickCount: 2 });\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Contents:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./class-click-options#click-options-button",children:"clickOptions.button"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./class-click-options#click-options-lick-count",children:"clickOptions.clickCount"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"click-options-button",children:"clickOptions.button"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Optional:"})," Mouse button to click. One of: ",(0,t.jsx)(n.code,{children:'"left"'}),", ",(0,t.jsx)(n.code,{children:'"right"'}),". Defaults to ",(0,t.jsx)(n.code,{children:'"left"'})," if not provided."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"})]}),"\n",(0,t.jsx)(n.h2,{id:"click-options-click-count",children:"clickOptions.clickCount"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Optional:"})," Number of times to click the mouse. One of: ",(0,t.jsx)(n.code,{children:"1"}),", ",(0,t.jsx)(n.code,{children:"2"}),", ",(0,t.jsx)(n.code,{children:"3"}),". Defaults to ",(0,t.jsx)(n.code,{children:"1"})," if not provided."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",title:"number",children:"number"})]})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(7294);const c={},o=t.createContext(c);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);