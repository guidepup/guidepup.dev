"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[0],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={title:"MacOSModifiers"},a=void 0,l={unversionedId:"api/class-macos-modifiers",id:"api/class-macos-modifiers",title:"MacOSModifiers",description:"Modifier keys for MacOS.",source:"@site/docs/api/class-macos-modifiers.md",sourceDirName:"api",slug:"/api/class-macos-modifiers",permalink:"/docs/api/class-macos-modifiers",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-macos-modifiers.md",tags:[],version:"current",frontMatter:{title:"MacOSModifiers"},sidebar:"api",previous:{title:"MacOSKeystrokeCommand",permalink:"/docs/api/class-macos-keystroke-command"},next:{title:"macOSQuit",permalink:"/docs/api/class-macos-quit"}},u={},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modifier keys for MacOS."),(0,o.kt)("p",null,"For example, use when performing a VoiceOver command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";\n\nconst moveToNextKeyCodeCommand = {\n  keyCode: MacOSKeyCodes.ArrowRight,\n  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],\n};\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move to the next item.\n  await voiceOver.perform(moveToNextKeyCodeCommand);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n')),(0,o.kt)("p",null,"List of all modifier accessors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Alt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"AltLeft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"AltRight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"CommandLeft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"CommandRight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"ControlLeft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"ControlRight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Meta")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Option")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"OptionLeft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"OptionRight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Shift")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"ShiftLeft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"ShiftRight"))))}s.isMDXComponent=!0}}]);