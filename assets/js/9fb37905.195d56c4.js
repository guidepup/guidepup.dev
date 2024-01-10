"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[4451],{8413:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var d=o(5893),s=o(1151);const i={title:"WindowsKeyCodeCommand"},r=void 0,t={id:"api/class-windows-key-code-command",title:"WindowsKeyCodeCommand",description:"Extends: [KeyCodeCommand]",source:"@site/docs/api/class-windows-key-code-command.md",sourceDirName:"api",slug:"/api/class-windows-key-code-command",permalink:"/docs/api/class-windows-key-code-command",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-windows-key-code-command.md",tags:[],version:"current",frontMatter:{title:"WindowsKeyCodeCommand"},sidebar:"api",previous:{title:"windowsActivate",permalink:"/docs/api/class-windows-activate"},next:{title:"WindowsKeyCodes",permalink:"/docs/api/class-windows-key-codes"}},c={},a=[{value:"windowsKeyCodeCommand.description",id:"key-code-command-description",level:2},{value:"windowsKeyCodeCommand.keyCode",id:"key-code-command-key-code",level:2},{value:"windowsKeyCodeCommand.modifiers",id:"key-code-command-modifiers",level:2},{value:"windowsKeyCodeCommand.representation",id:"key-code-command-representation",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Extends:"})," ",(0,d.jsx)(n.a,{href:"./class-key-code-command",title:"KeyCodeCommand",children:"KeyCodeCommand"})]}),"\n",(0,d.jsx)(n.p,{children:"Object representing a Windows key code command."}),"\n",(0,d.jsx)(n.p,{children:"For example, use when performing a NVDA command:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'import { nvda, WindowsKeyCodes, WindowsModifiers } from "@guidepup/guidepup";\n\nconst reportBatteryStatusKeyCodeCommand = {\n  keyCode: [WindowsKeyCodes.Insert, WindowsKeyCodes.B],\n  modifiers: [WindowsModifiers.Shift],\n  description:\n    "Reports the battery status i.e. whether AC power is in use or the current charge percentage.",\n  representation: "NVDA-Shift-B",\n};\n\n(async () => {\n  // Start NVDA.\n  await nvda.start();\n\n  // Move to the next item.\n  await nvda.perform(moveToNextKeyCodeCommand);\n\n  // Stop NVDA.\n  await nvda.stop();\n})();\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," Guidepup provides a number of utility key codes meaning you shouldn't need to construct your own too often! For example, see ",(0,d.jsx)(n.a,{href:"./class-nvda-key-code-commands",title:"NVDAKeyCodeCommands",children:"NVDAKeyCodeCommands"})," for all NVDA key codes."]}),"\n",(0,d.jsx)(n.p,{children:"The above example is also slightly contrived as we could just use the convenience command getter!"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await nvda.perform(nvda.keyboardCommands.reportBatteryStatus);\n"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"See also:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./class-nvda-key-code-commands",title:"NVDAKeyCodeCommands",children:"NVDAKeyCodeCommands"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Contents:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./class-windows-key-code-command#key-code-command-description",children:"windowsKeyCodeCommand.description"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./class-windows-key-code-command#key-code-command-key-code",children:"windowsKeyCodeCommand.keyCode"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./class-windows-key-code-command#key-code-command-modifiers",children:"windowsKeyCodeCommand.modifiers"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./class-windows-key-code-command#key-code-command-representation",children:"windowsKeyCodeCommand.representation"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"key-code-command-description",children:"windowsKeyCodeCommand.description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Optional:"})," Description of the action the key code performs."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"})]}),"\n",(0,d.jsx)(n.h2,{id:"key-code-command-key-code",children:"windowsKeyCodeCommand.keyCode"}),"\n",(0,d.jsxs)(n.p,{children:["The key code or key codes to send. See ",(0,d.jsx)(n.a,{href:"./class-windows-key-codes",title:"WindowsKeyCodes",children:"WindowsKeyCodes"})," for available key codes."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"object",children:"object"})," | ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"object",children:"object"}),">"]}),"\n",(0,d.jsx)(n.h2,{id:"key-code-command-modifiers",children:"windowsKeyCodeCommand.modifiers"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Optional:"})," List of modifier keys to press while sending the key code(s)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,d.jsx)(n.a,{href:"./class-windows-modifiers",title:"WindowsModifiers",children:"WindowsModifiers"}),">"]}),"\n",(0,d.jsx)(n.h2,{id:"key-code-command-representation",children:"windowsKeyCodeCommand.representation"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Optional:"})," Symbolic representation of the key code(s) and modifier keys this command uses."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string",children:"string"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>t,a:()=>r});var d=o(7294);const s={},i=d.createContext(s);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);