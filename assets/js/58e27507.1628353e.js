"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[733],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var i=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,p=function(e,t){if(null==e)return{};var a,i,p={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var u=i.createContext({}),c=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=p,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return a?i.createElement(v,n(n({ref:t},l),{},{components:a})):i.createElement(v,n({ref:t},l))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,n=new Array(r);n[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:p,n[1]=o;for(var c=2;c<r;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},770:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=a(7462),p=a(3366),r=(a(7294),a(3905)),n=["components"],o={title:"Guidepup Library"},u="Guidepup Library",c={unversionedId:"api/class-guidepup",id:"api/class-guidepup",title:"Guidepup Library",description:"Guidepup provides a reliable set of APIs to automate screen-readers through JavaScript.",source:"@site/docs/api/class-guidepup.md",sourceDirName:"api",slug:"/api/class-guidepup",permalink:"/docs/api/class-guidepup",editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-guidepup.md",tags:[],version:"current",frontMatter:{title:"Guidepup Library"},sidebar:"api",next:{title:"ClickOptions",permalink:"/docs/api/class-click-options"}},l=[{value:"guidepup.macOSActivate",id:"guidepup-macos-activate",children:[],level:2},{value:"guidepup.MacOSApplications",id:"guidepup-macos-applications",children:[],level:2},{value:"guidepup.MacOSKeyCodes",id:"guidepup-macos-key-codes",children:[],level:2},{value:"guidepup.MacOSModifiers",id:"guidepup-macos-modifiers",children:[],level:2},{value:"guidepup.macOSQuit",id:"guidepup-macos-quit",children:[],level:2},{value:"guidepup.VoiceOverCommanderCommands",id:"guidepup-voiceover-commander-commands",children:[],level:2},{value:"guidepup.voiceOverKeyCodeCommands",id:"guidepup-voiceover-key-code-commands",children:[],level:2},{value:"guidepup.VoiceOver",id:"guidepup-voiceover",children:[],level:2}],s={toc:l};function d(e){var t=e.components,a=(0,p.Z)(e,n);return(0,r.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guidepup-library"},"Guidepup Library"),(0,r.kt)("p",null,"Guidepup provides a reliable set of APIs to automate screen-readers through JavaScript."),(0,r.kt)("p",null,"Current screen-reader support:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","VoiceOver for MacOS"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","NVDA for Windows (WIP)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","VoiceOver on iOS"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Talkback on Android")),(0,r.kt)("p",null,"Here's a typical example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { VoiceOver } = require("@guidepup/guidepup");\n\n(async () => {\n  const vo = new VoiceOver();\n  await vo.start();\n  await vo.next();\n  // other actions...\n  await vo.stop();\n})();\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-macos-activate"},"guidepup.macOSActivate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-macos-applications"},"guidepup.MacOSApplications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-macos-key-codes"},"guidepup.MacOSKeyCodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-macos-modifiers"},"guidepup.MacOSModifiers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-macos-quit"},"guidepup.macOSQuit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-voiceover-commander-commands"},"guidepup.VoiceOverCommanderCommands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-voiceover-key-code-commands"},"guidepup.voiceOverKeyCodeCommands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./class-guidepup#guidepup-voiceover"},"guidepup.VoiceOver"))),(0,r.kt)("h2",{id:"guidepup-macos-activate"},"guidepup.macOSActivate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-macos-activate",title:"macOSActivate"},"macOSActivate"),">"),(0,r.kt)("p",null,"Opens a MacOS application if not already open, and focuses the application."),(0,r.kt)("h2",{id:"guidepup-macos-applications"},"guidepup.MacOSApplications"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-macos-applications",title:"MacOSApplications"},"MacOSApplications"),">"),(0,r.kt)("p",null,"Identifiers for standard applications available on MacOS."),(0,r.kt)("h2",{id:"guidepup-macos-key-codes"},"guidepup.MacOSKeyCodes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-macos-key-codes",title:"MacOSKeyCodes"},"MacOSKeyCodes"),">"),(0,r.kt)("p",null,"Key codes for MacOS."),(0,r.kt)("h2",{id:"guidepup-macos-modifiers"},"guidepup.MacOSModifiers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-macos-modifiers",title:"MacOSModifiers"},"MacOSModifiers"),">"),(0,r.kt)("p",null,"Modifier keys for MacOS."),(0,r.kt)("h2",{id:"guidepup-macos-quit"},"guidepup.macOSQuit"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-macos-quit",title:"macOSQuit"},"macOSQuit"),">"),(0,r.kt)("p",null,"Quits a MacOS application if running."),(0,r.kt)("h2",{id:"guidepup-voiceover-commander-commands"},"guidepup.VoiceOverCommanderCommands"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-voiceover-commander-commands",title:"VoiceOverCommanderCommands"},"VoiceOverCommanderCommands"),">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/guide/voiceover/cpvoukbcmdr/mac"},"VoiceOver Commander")," commands."),(0,r.kt)("h2",{id:"guidepup-voiceover-key-code-commands"},"guidepup.voiceOverKeyCodeCommands"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-voiceover-key-code-commands",title:"VoiceOverKeyCodeCommands"},"voiceOverKeyCodeCommands"),">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apple.com/voiceover/info/guide/_1131.html"},"Key code commands for the VoiceOver screen-reader")," on MacOS."),(0,r.kt)("h2",{id:"guidepup-voiceover"},"guidepup.VoiceOver"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,r.kt)("a",{parentName:"p",href:"./class-voiceover",title:"VoiceOver"},"VoiceOver"),">"),(0,r.kt)("p",null,"This class can be used to launch VoiceOver."))}d.isMDXComponent=!0}}]);