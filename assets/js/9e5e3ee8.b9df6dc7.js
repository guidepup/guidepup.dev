"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[1535],{6259:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(5893),o=i(1151);const t={title:"WindowsModifiers"},r=void 0,d={id:"api/class-windows-modifiers",title:"WindowsModifiers",description:"Modifier keys for Windows.",source:"@site/docs/api/class-windows-modifiers.md",sourceDirName:"api",slug:"/api/class-windows-modifiers",permalink:"/docs/api/class-windows-modifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-windows-modifiers.md",tags:[],version:"current",frontMatter:{title:"WindowsModifiers"},sidebar:"api",previous:{title:"WindowsKeystrokeCommand",permalink:"/docs/api/class-windows-keystroke-command"},next:{title:"windowsRecord",permalink:"/docs/api/class-windows-record"}},a={},c=[];function p(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Modifier keys for Windows."}),"\n",(0,s.jsx)(n.p,{children:"For example, use when performing a NVDA command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { nvda, WindowsKeyCodes, WindowsModifiers } from "@guidepup/guidepup";\n\nconst reportBatteryStatusKeyCodeCommand: {\n  keyCode: [...KeyCodes.Insert, KeyCodes.B];\n  modifiers: [Modifiers.Shift];\n};\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Report battery status.\n  await voiceOver.perform(reportBatteryStatusKeyCodeCommand);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),"\n",(0,s.jsx)(n.p,{children:"List of all modifier accessors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("kbd",{children:"Alt"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("kbd",{children:"Control"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("kbd",{children:"Shift"}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var s=i(7294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);