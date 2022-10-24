"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[162],{3905:function(e,r,o){o.d(r,{Zo:function(){return l},kt:function(){return u}});var n=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function m(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=n.createContext({}),p=function(e){var r=n.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):m(m({},r),e)),o},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),u=t,v=d["".concat(i,".").concat(u)]||d[u]||s[u]||a;return o?n.createElement(v,m(m({ref:r},l),{},{components:o})):n.createElement(v,m({ref:r},l))}));function u(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,m=new Array(a);m[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,m[1]=c;for(var p=2;p<a;p++)m[p]=o[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4261:function(e,r,o){o.r(r),o.d(r,{assets:function(){return i},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=o(3117),t=(o(7294),o(3905));const a={title:"VoiceOverCommander"},m=void 0,c={unversionedId:"api/class-voiceover-commander",id:"api/class-voiceover-commander",title:"VoiceOverCommander",description:"- voiceOverCommander.perform(command[, options])",source:"@site/docs/api/class-voiceover-commander.md",sourceDirName:"api",slug:"/api/class-voiceover-commander",permalink:"/docs/api/class-voiceover-commander",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-voiceover-commander.md",tags:[],version:"current",frontMatter:{title:"VoiceOverCommander"},sidebar:"api",previous:{title:"VoiceOverCommanderCommands",permalink:"/docs/api/class-voiceover-commander-commands"},next:{title:"VoiceOverCursor",permalink:"/docs/api/class-voiceover-cursor"}},i={},p=[{value:"voiceOverCommander.perform(command, options)",id:"voiceover-commander-perform",level:2},{value:"voiceOverCommander.commands",id:"voiceover-commander-commands",level:2}],l={toc:p};function s(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,n.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"./class-voiceover-commander#voiceover-commander-perform"},"voiceOverCommander.perform(command[, options])")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"./class-voiceover-commander#voiceover-commander-commands"},"voiceOverCommander.commands"))),(0,t.kt)("h2",{id:"voiceover-commander-perform"},"voiceOverCommander.perform(command","[, options]",")"),(0,t.kt)("p",null,"Perform a VoiceOver commander command."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Parameters:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"command")," ","<",(0,t.kt)("a",{parentName:"li",href:"./class-voiceover-commander-commands",title:"VoiceOverCommanderCommands"},"VoiceOverCommanderCommands"),">"," The lowercase english command for the VoiceOver commander to perform."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Optional:")," ",(0,t.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,t.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,t.kt)("h2",{id:"voiceover-commander-commands"},"voiceOverCommander.commands"),(0,t.kt)("p",null,"VoiceOver commander commands."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,t.kt)("a",{parentName:"p",href:"./class-voiceover-commander-commands",title:"VoiceOverCommanderCommands"},"VoiceOverCommanderCommands"),">"))}s.isMDXComponent=!0}}]);