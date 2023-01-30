"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[535],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return l},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const i={title:"WindowsModifiers"},a=void 0,s={unversionedId:"api/class-windows-modifiers",id:"api/class-windows-modifiers",title:"WindowsModifiers",description:"Modifier keys for Windows.",source:"@site/docs/api/class-windows-modifiers.md",sourceDirName:"api",slug:"/api/class-windows-modifiers",permalink:"/docs/api/class-windows-modifiers",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-windows-modifiers.md",tags:[],version:"current",frontMatter:{title:"WindowsModifiers"},sidebar:"api",previous:{title:"WindowsKeystrokeCommand",permalink:"/docs/api/class-windows-keystroke-command"},next:{title:"windowsQuit",permalink:"/docs/api/class-windows-quit"}},c={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modifier keys for Windows."),(0,o.kt)("p",null,"For example, use when performing a NVDA command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { nvda, WindowsKeyCodes, WindowsModifiers } from "@guidepup/guidepup";\n\nconst reportBatteryStatusKeyCodeCommand: {\n  keyCode: [...KeyCodes.Insert, KeyCodes.B];\n  modifiers: [Modifiers.Shift];\n};\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Report battery status.\n  await voiceOver.perform(reportBatteryStatusKeyCodeCommand);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n')),(0,o.kt)("p",null,"List of all modifier accessors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Alt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Shift"))))}l.isMDXComponent=!0}}]);