"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[67],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},469:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=t(3117),a=(t(7294),t(3905));const o={title:"ScreenReaderCursor"},s=void 0,i={unversionedId:"api/class-screenreader-cursor",id:"api/class-screenreader-cursor",title:"ScreenReaderCursor",description:"Base interface for screen-reader classes such as [VoiceOverCursor].",source:"@site/docs/api/class-screenreader-cursor.md",sourceDirName:"api",slug:"/api/class-screenreader-cursor",permalink:"/docs/api/class-screenreader-cursor",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-screenreader-cursor.md",tags:[],version:"current",frontMatter:{title:"ScreenReaderCursor"},sidebar:"api",previous:{title:"ScreenReaderCaption",permalink:"/docs/api/class-screenreader-caption"},next:{title:"ScreenReaderKeyboard",permalink:"/docs/api/class-screenreader-keyboard"}},l={},c=[{value:"screenReaderCursor.act(options)",id:"screenreader-cursor-act",level:2},{value:"screenReaderCursor.interact(options)",id:"screenreader-cursor-interact",level:2},{value:"screenReaderCursor.next(options)",id:"screenreader-cursor-next",level:2},{value:"screenReaderCursor.previous(options)",id:"screenreader-cursor-previous",level:2},{value:"screenReaderCursor.stopInteracting(options)",id:"screenreader-cursor-stop-interacting",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Base interface for screen-reader classes such as ",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover-cursor",title:"VoiceOverCursor"},"VoiceOverCursor"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-screenreader-cursor#screenreader-cursor-act"},"screenReaderCursor.act([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-screenreader-cursor#screenreader-cursor-interact"},"screenReaderCursor.interact([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-screenreader-cursor#screenreader-cursor-next"},"screenReaderCursor.next([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-screenreader-cursor#screenreader-cursor-previous"},"screenReaderCursor.previous([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-screenreader-cursor#screenreader-cursor-stop-interacting"},"screenReaderCursor.stopInteracting([options])"))),(0,a.kt)("h2",{id:"screenreader-cursor-act"},"screenReaderCursor.act(","[options]",")"),(0,a.kt)("p",null,"Perform the default action for the item in the screen-reader cursor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"screenreader-cursor-interact"},"screenReaderCursor.interact(","[options]",")"),(0,a.kt)("p",null,"Interact with the item under the screen-reader cursor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"screenreader-cursor-next"},"screenReaderCursor.next(","[options]",")"),(0,a.kt)("p",null,"Move the screen-reader cursor to the next location."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"screenreader-cursor-previous"},"screenReaderCursor.previous(","[options]",")"),(0,a.kt)("p",null,"Move the screen-reader cursor to the previous location."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"screenreader-cursor-stop-interacting"},"screenReaderCursor.stopInteracting(","[options]",")"),(0,a.kt)("p",null,"Stop interacting with the current item."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"))}u.isMDXComponent=!0}}]);