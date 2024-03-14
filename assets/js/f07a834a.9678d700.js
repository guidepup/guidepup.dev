"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[1987],{3004:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(5893),t=r(1151);const o={title:"KeystrokeCommand"},c=void 0,a={id:"api/class-keystroke-command",title:"KeystrokeCommand",description:"Extends: [object]",source:"@site/docs/api/class-keystroke-command.md",sourceDirName:"api",slug:"/api/class-keystroke-command",permalink:"/docs/api/class-keystroke-command",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-keystroke-command.md",tags:[],version:"current",frontMatter:{title:"KeystrokeCommand"},sidebar:"api",previous:{title:"KeyboardOptions",permalink:"/docs/api/class-keyboard-options"},next:{title:"macOSActivate",permalink:"/docs/api/class-macos-activate"}},i={},d=[{value:"keystrokeCommand.characters",id:"keystroke-command-characters",level:2},{value:"keystrokeCommand.modifiers",id:"keystroke-command-modifiers",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Extends:"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"object",children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Object representing a keystroke command."}),"\n",(0,n.jsx)(s.p,{children:"For example, use when performing a VoiceOver command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:'import { voiceOver, MacOSModifiers } from "@guidepup/guidepup";\n\nconst poundSymbolKeystrokeCommand = {\n  characters: "3",\n  modifiers: [MacOSModifiers.Alt],\n};\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Send a \'#\' keystroke.\n  await voiceOver.perform(poundSymbolKeystrokeCommand);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," the above is slightly contrived as we could just type a ",(0,n.jsx)(s.code,{children:"#"})," character using:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:'await voiceOver.type("#");\n'})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"See also:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./class-macos-keystroke-command",title:"MacOSKeystrokeCommand",children:"MacOSKeystrokeCommand"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Contents:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./class-keystroke-command#keystroke-command-characters",children:"keystrokeCommand.characters"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./class-keystroke-command#keystroke-command-modifiers",children:"keystrokeCommand.modifiers"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"keystroke-command-characters",children:"keystrokeCommand.characters"}),"\n",(0,n.jsx)(s.p,{children:"The character(s) to send."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.h2,{id:"keystroke-command-modifiers",children:"keystrokeCommand.modifiers"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Optional:"})," List of modifier keys to press while sending the character(s)."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"}),">"]})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,r)=>{r.d(s,{a:()=>c});var n=r(7294);const t={},o=n.createContext(t);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}}}]);