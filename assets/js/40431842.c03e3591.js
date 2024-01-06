"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[614],{3905:function(l,t,e){e.d(t,{Zo:function(){return d},kt:function(){return o}});var k=e(7294);function n(l,t,e){return t in l?Object.defineProperty(l,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[t]=e,l}function a(l,t){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(l);t&&(k=k.filter((function(t){return Object.getOwnPropertyDescriptor(l,t).enumerable}))),e.push.apply(e,k)}return e}function u(l){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){n(l,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(l,t,Object.getOwnPropertyDescriptor(e,t))}))}return l}function r(l,t){if(null==l)return{};var e,k,n=function(l,t){if(null==l)return{};var e,k,n={},a=Object.keys(l);for(k=0;k<a.length;k++)e=a[k],t.indexOf(e)>=0||(n[e]=l[e]);return n}(l,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);for(k=0;k<a.length;k++)e=a[k],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(l,e)&&(n[e]=l[e])}return n}var i=k.createContext({}),p=function(l){var t=k.useContext(i),e=t;return l&&(e="function"==typeof l?l(t):u(u({},t),l)),e},d=function(l){var t=p(l.components);return k.createElement(i.Provider,{value:t},l.children)},m={inlineCode:"code",wrapper:function(l){var t=l.children;return k.createElement(k.Fragment,{},t)}},b=k.forwardRef((function(l,t){var e=l.components,n=l.mdxType,a=l.originalType,i=l.parentName,d=r(l,["components","mdxType","originalType","parentName"]),b=p(e),o=n,N=b["".concat(i,".").concat(o)]||b[o]||m[o]||a;return e?k.createElement(N,u(u({ref:t},d),{},{components:e})):k.createElement(N,u({ref:t},d))}));function o(l,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof l||n){var a=e.length,u=new Array(a);u[0]=b;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=l,r.mdxType="string"==typeof l?l:n,u[1]=r;for(var p=2;p<a;p++)u[p]=e[p];return k.createElement.apply(null,u)}return k.createElement.apply(null,e)}b.displayName="MDXCreateElement"},1244:function(l,t,e){e.r(t),e.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return p}});var k=e(3117),n=(e(7294),e(3905));const a={title:"MacOSKeyCodes"},u=void 0,r={unversionedId:"api/class-macos-key-codes",id:"api/class-macos-key-codes",title:"MacOSKeyCodes",description:"Key codes for MacOS.",source:"@site/docs/api/class-macos-key-codes.md",sourceDirName:"api",slug:"/api/class-macos-key-codes",permalink:"/docs/api/class-macos-key-codes",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-macos-key-codes.md",tags:[],version:"current",frontMatter:{title:"MacOSKeyCodes"},sidebar:"api",previous:{title:"MacOSKeyCodeCommand",permalink:"/docs/api/class-macos-key-code-command"},next:{title:"MacOSKeyboardCommand",permalink:"/docs/api/class-macos-keyboard-command"}},i={},p=[],d={toc:p};function m(l){let{components:t,...e}=l;return(0,n.kt)("wrapper",(0,k.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Key codes for MacOS."),(0,n.kt)("p",null,"For example, use when performing a VoiceOver command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";\n\nconst moveToNextKeyCodeCommand = {\n  keyCode: MacOSKeyCodes.ArrowRight,\n  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],\n};\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move to the next item.\n  await voiceOver.perform(moveToNextKeyCodeCommand);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n')),(0,n.kt)("p",null,"List of all key code accessors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Add")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Alt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"AltLeft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"AltRight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ArrowDown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ArrowLeft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ArrowRight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ArrowUp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Backslash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Backspace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Backtick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"CapsLock")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Clear")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Comma")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Command")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"CommandLeft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"CommandRight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Control")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ControlLeft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ControlRight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Dash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Decimal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Delete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Digit9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Divide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Down")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"End")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Enter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Equals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Escape")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F10")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F11")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F12")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F13")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F14")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F15")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F16")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F17")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F18")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F19")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F20")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Fn")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ForwardDelete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ForwardSlash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"FullStop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Help")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Home")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Insert")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyG")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyH")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyJ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyQ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyU")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyV")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyW")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"KeyZ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Left")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"LeftSquareBracket")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"LineFeed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Meta")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Minus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Multiply")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Mute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Option")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"OptionLeft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"OptionRight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"PageDown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"PageUp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Period")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Return")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Right")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"RightSquareBracket")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"SectionSign")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"SemiColon")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Shift")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ShiftLeft")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"ShiftRight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"SingleQuote")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Space")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Spacebar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Subtract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Tab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Up")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"VolumeDown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"VolumeUp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"\xa0")," (space)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,",")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"-")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,";")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"=")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"[")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"\\")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"`")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"A")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"B")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"C")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"D")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"E")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"F")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"G")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"H")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"I")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"J")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"K")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"L")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"M")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"N")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"O")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"P")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Q")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"R")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"S")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"T")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"U")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"W")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"X")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Y")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Z")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"g")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"h")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"i")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"j")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"k")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"l")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"m")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"o")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"p")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"q")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"r")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"s")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"t")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"u")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"v")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"w")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"x")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"y")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"z"))))}m.isMDXComponent=!0}}]);