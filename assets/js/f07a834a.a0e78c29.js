"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[1987],{3004:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=r(5893),t=r(1151);const o={title:"KeystrokeCommand"},c=void 0,a={id:"api/class-keystroke-command",title:"KeystrokeCommand",description:"Extends: [object]",source:"@site/docs/api/class-keystroke-command.md",sourceDirName:"api",slug:"/api/class-keystroke-command",permalink:"/docs/api/class-keystroke-command",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-keystroke-command.md",tags:[],version:"current",frontMatter:{title:"KeystrokeCommand"},sidebar:"api",previous:{title:"KeyboardOptions",permalink:"/docs/api/class-keyboard-options"},next:{title:"macOSActivate",permalink:"/docs/api/class-macos-activate"}},i={},d=[{value:"keystrokeCommand.characters",id:"keystroke-command-characters",level:2},{value:"keystrokeCommand.modifiers",id:"keystroke-command-modifiers",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Extends:"})," ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"object",children:"object"})]}),"\n",(0,s.jsx)(n.p,{children:"Object representing a keystroke command."}),"\n",(0,s.jsx)(n.p,{children:"For example, use when performing a VoiceOver command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { voiceOver, MacOSModifiers } from "@guidepup/guidepup";\n\nconst poundSymbolKeystrokeCommand = {\n  characters: "3",\n  modifiers: [MacOSModifiers.Alt],\n};\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Send a \'#\' keystroke.\n  await voiceOver.perform(poundSymbolKeystrokeCommand);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," the above is slightly contrived as we could just type a ",(0,s.jsx)(n.code,{children:"#"})," character using:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'await voiceOver.type("#");\n'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"See also:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./class-macos-keystroke-command",title:"MacOSKeystrokeCommand",children:"MacOSKeystrokeCommand"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Contents:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./class-keystroke-command#keystroke-command-characters",children:"keystrokeCommand.characters"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./class-keystroke-command#keystroke-command-modifiers",children:"keystrokeCommand.modifiers"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keystroke-command-characters",children:"keystrokeCommand.characters"}),"\n",(0,s.jsx)(n.p,{children:"The character(s) to send."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"})]}),"\n",(0,s.jsx)(n.h2,{id:"keystroke-command-modifiers",children:"keystrokeCommand.modifiers"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Optional:"})," List of modifier keys to press while sending the character(s)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"}),">"]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var s=r(7294);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);