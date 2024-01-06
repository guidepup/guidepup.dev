"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[443],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(v,i(i({ref:t},u),{},{components:a})):r.createElement(v,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6706:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var r=a(3117),n=(a(7294),a(3905));const l={title:"Virtual"},i=void 0,o={unversionedId:"api/class-virtual",id:"api/class-virtual",title:"Virtual",description:"Implements: [ScreenReader]",source:"@site/docs/api/class-virtual.md",sourceDirName:"api",slug:"/api/class-virtual",permalink:"/docs/api/class-virtual",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-virtual.md",tags:[],version:"current",frontMatter:{title:"Virtual"},sidebar:"api",previous:{title:"VirtualCommands",permalink:"/docs/api/class-virtual-commands"},next:{title:"StartOptions",permalink:"/docs/api/class-start-options"}},s={},p=[{value:"virtual.activeNode",id:"virtual-activeNode",level:2},{value:"virtual.commands",id:"virtual-commands",level:2},{value:"virtual.act()",id:"virtual-act",level:2},{value:"virtual.clearItemTextLog()",id:"virtual-clear-item-text-log",level:2},{value:"virtual.clearSpokenPhraseLog()",id:"virtual-clear-spoken-phrase-log",level:2},{value:"virtual.click(options)",id:"virtual-click",level:2},{value:"virtual.default()",id:"virtual-default",level:2},{value:"virtual.detect()",id:"virtual-detect",level:2},{value:"virtual.interact()",id:"virtual-interact",level:2},{value:"virtual.itemText()",id:"virtual-item-text",level:2},{value:"virtual.itemTextLog()",id:"virtual-item-text-log",level:2},{value:"virtual.lastSpokenPhrase()",id:"virtual-last-spoken-phrase",level:2},{value:"virtual.next()",id:"virtual-next",level:2},{value:"virtual.perform(command, options)",id:"virtual-perform",level:2},{value:"virtual.press(key)",id:"virtual-press",level:2},{value:"virtual.previous()",id:"virtual-previous",level:2},{value:"virtual.spokenPhraseLog()",id:"virtual-spoken-phrase-log",level:2},{value:"virtual.start(options)",id:"virtual-start",level:2},{value:"virtual.stop()",id:"virtual-stop",level:2},{value:"virtual.stopInteracting()",id:"virtual-stop-interacting",level:2},{value:"virtual.type(text)",id:"virtual-type",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implements:")," ",(0,n.kt)("a",{parentName:"p",href:"./class-screenreader",title:"ScreenReader"},"ScreenReader")),(0,n.kt)("p",null,"A Virtual Screen Reader instance can be used to launch and control a headless JavaScript screen reader which is compatible with any specification compliant ",(0,n.kt)("a",{parentName:"p",href:"https://dom.spec.whatwg.org/"},"DOM")," implementation, e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom"},"jsdom"),", ",(0,n.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),", or any modern browser."),(0,n.kt)("p",null,"Here's a typical example using a ",(0,n.kt)("a",{parentName:"p",href:"./class-virtual",title:"virtual"},"Virtual")," instance:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\nfunction setupBasicPage() {\n  document.body.innerHTML = `\n  <nav>Nav Text</nav>\n  <section>\n    <h1>Section Heading</h1>\n    <p>Section Text</p>\n    <article>\n      <header>\n        <h1>Article Header Heading</h1>\n        <p>Article Header Text</p>\n      </header>\n      <p>Article Text</p>\n    </article> \n  </section>\n  <footer>Footer</footer>\n  `;\n}\n\ndescribe("Screen Reader Tests", () => {\n  test("should traverse the page announcing the expected roles and content", async () => {\n    // Setup a page using a framework and testing library of your choice\n    setupBasicPage();\n\n    // Start your Virtual Screen Reader instance\n    await virtual.start({ container: document.body });\n\n    // Navigate your environment with the Virtual Screen Reader just as your users would\n    while ((await virtual.lastSpokenPhrase()) !== "end of document") {\n      await virtual.next();\n    }\n\n    // Assert on what your users would really see and hear when using screen readers\n    expect(await virtual.spokenPhraseLog()).toEqual([\n      "document",\n      "navigation",\n      "Nav Text",\n      "end of navigation",\n      "region",\n      "heading, Section Heading, level 1",\n      "Section Text",\n      "article",\n      "banner",\n      "heading, Article Header Heading, level 1",\n      "Article Header Text",\n      "end of banner",\n      "Article Text",\n      "end of article",\n      "end of region",\n      "contentinfo",\n      "Footer",\n      "end of contentinfo",\n      "end of document",\n    ]);\n\n    // Stop your Virtual Screen Reader instance\n    await virtual.stop();\n  });\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contents:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-active-node"},"virtual.activeNode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-commands"},"virtual.commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-act"},"virtual.act()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-clear-item-text-log"},"virtual.clearItemTextLog()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-clear-spoken-phrase-log"},"virtual.clearSpokenPhraseLog()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-click"},"virtual.click()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-default"},"virtual.default()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-detect"},"virtual.detect()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-interact"},"virtual.interact()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-item-text"},"virtual.itemText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-item-text-log"},"virtual.itemTextLog()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-last-spoken-phrase"},"virtual.lastSpokenPhrase()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-next"},"virtual.next()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-perform"},"virtual.perform(command[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-press"},"virtual.press(key)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-previous"},"virtual.previous()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-spoken-phrase-log"},"virtual.spokenPhraseLog()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-start"},"virtual.start([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-stop"},"virtual.stop()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-stop-interacting"},"virtual.stopInteracting()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-type"},"virtual.type(text)"))),(0,n.kt)("h2",{id:"virtual-activeNode"},"virtual.activeNode"),(0,n.kt)("p",null,"Getter for the active node under the Virtual Screen Reader cursor."),(0,n.kt)("p",null,"Note that this is not always the same as the currently focused node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the next element.\n  await virtual.next();\n\n  // Log the currently focused node.\n  console.log(virtual.activeNode);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node",title:"Node"},"Node")," | ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null",title:"null"},"null")),(0,n.kt)("h2",{id:"virtual-commands"},"virtual.commands"),(0,n.kt)("p",null,"Getter for all Virtual Screen Reader commands."),(0,n.kt)("p",null,"Use with the ",(0,n.kt)("inlineCode",{parentName:"p"},"perform")," command to invoke an action:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Perform action to move to the next landmark.\n  await virtual.perform(virtual.commands.moveToNextLandmark);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,"See also:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-perform"},"virtual.perform(command[, options])"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"./class-virtual-commands",title:"VirtualCommands"},"VirtualCommands")),(0,n.kt)("h2",{id:"virtual-act"},"virtual.act()"),(0,n.kt)("p",null,"Perform the default action for the item in the Virtual Screen Reader cursor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the next item.\n  await virtual.next();\n\n  // Perform the default action for the item.\n  await virtual.act();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-clear-item-text-log"},"virtual.clearItemTextLog()"),(0,n.kt)("p",null,"Clear the log of all visited item text for this Virtual Screen Reader instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // ... perform some commands.\n\n  // Clear the item text log.\n  await virtual.clearItemTextLog();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-clear-spoken-phrase-log"},"virtual.clearSpokenPhraseLog()"),(0,n.kt)("p",null,"Clear the log of all spoken phrases for this Virtual Screen Reader instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // ... perform some commands.\n\n  // Clear the spoken phrase log.\n  await virtual.clearSpokenPhraseLog();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-click"},"virtual.click(","[options]",")"),(0,n.kt)("p",null,"Click the mouse."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Left-click the mouse.\n  await virtual.click();\n\n  // Left-click the mouse using specific options.\n  await virtual.click({ button: "left", clickCount: 1 });\n\n  // Double-right-click the mouse.\n  await virtual.click({ button: "right", clickCount: 2 });\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ",(0,n.kt)("a",{parentName:"li",href:"./class-click-options",title:"ClickOptions"},"ClickOptions")," Click options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-default"},"virtual.default()"),(0,n.kt)("p",null,"Detect whether Virtual is the default screen reader for the current OS:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false")," for all OS")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  const isVirtualDefaultScreenReader = await virtual.default();\n\n  console.log(isVirtualDefaultScreenReader);\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"boolean"},"boolean"),">"),(0,n.kt)("h2",{id:"virtual-detect"},"virtual.detect()"),(0,n.kt)("p",null,"Detect whether Virtual is supported for the current OS:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true")," for all OS")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  const isVirtualSupportedScreenReader = await virtual.detect();\n\n  console.log(isVirtualSupportedScreenReader);\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"boolean"},"boolean"),">"),(0,n.kt)("h2",{id:"virtual-interact"},"virtual.interact()"),(0,n.kt)("p",null,"No-op to provide same API across screen readers."),(0,n.kt)("p",null,"The Virtual Screen Reader does not require users to perform an additional command to interact with the item in the Virtual Screen Reader cursor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the next item.\n  await virtual.next();\n\n  // Interact with the item - does nothing with the Virtual Screen Reader.\n  await virtual.interact();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-item-text"},"virtual.itemText()"),(0,n.kt)("p",null,"Get the text of the item in the Virtual Screen Reader cursor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the next item.\n  await virtual.next();\n\n  // Get the text (if any) for the item currently in focus by the Virtual\n  // screen reader cursor.\n  const itemText = await virtual.itemText();\n  console.log(itemText);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string"),"> The item's text."),(0,n.kt)("h2",{id:"virtual-item-text-log"},"virtual.itemTextLog()"),(0,n.kt)("p",null,"Get the log of all visited item text for this Virtual Screen Reader instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move through several items.\n  for (let i = 0; i < 10; i++) {\n    await virtual.next();\n  }\n\n  // Get the text (if any) for all the items visited by the Virtual screen\n  // reader cursor.\n  const itemTextLog = await virtual.itemTextLog();\n  console.log(itemTextLog);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string"),">> The item text log."),(0,n.kt)("h2",{id:"virtual-last-spoken-phrase"},"virtual.lastSpokenPhrase()"),(0,n.kt)("p",null,"Get the last spoken phrase."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the next item.\n  await virtual.next();\n\n  // Get the phrase spoken by Virtual Screen Reader from moving to the next item above.\n  const lastSpokenPhrase = await virtual.lastSpokenPhrase();\n  console.log(lastSpokenPhrase);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string"),"> The last spoken phrase."),(0,n.kt)("h2",{id:"virtual-next"},"virtual.next()"),(0,n.kt)("p",null,"Move the Virtual cursor to the next location."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the next item.\n  await virtual.next();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions")," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-perform"},"virtual.perform(command","[, options]",")"),(0,n.kt)("p",null,"Perform a Virtual Screen Reader command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Perform action to move to the next landmark.\n  await virtual.perform(virtual.commands.moveToNextLandmark);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,"See also:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual#virtual-commands"},"virtual.commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-virtual-commands",title:"VirtualCommands"},"VirtualCommands"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"command")," ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string")," Virtual Screen Reader command to execute. See ",(0,n.kt)("a",{parentName:"li",href:"./class-virtual-commands",title:"VirtualCommands"},"VirtualCommands")," for valid commands."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"object"},"object")," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-press"},"virtual.press(key)"),(0,n.kt)("p",null,"Press a key on the focused item."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},(0,n.kt)("inlineCode",{parentName:"a"},"keyboardEvent.key")),"\nvalue or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"on the MDN key values page"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("kbd",null,"F1")," - ",(0,n.kt)("kbd",null,"F20"),", ",(0,n.kt)("kbd",null,"Digit0")," - ",(0,n.kt)("kbd",null,"Digit9"),", ",(0,n.kt)("kbd",null,"KeyA")," - ",(0,n.kt)("kbd",null,"KeyZ"),", ",(0,n.kt)("kbd",null,"Backquote"),", ",(0,n.kt)("kbd",null,"Minus"),", ",(0,n.kt)("kbd",null,"Equal"),", ",(0,n.kt)("kbd",null,"Backslash"),", ",(0,n.kt)("kbd",null,"Backspace"),", ",(0,n.kt)("kbd",null,"Tab"),",",(0,n.kt)("kbd",null,"Delete"),", ",(0,n.kt)("kbd",null,"Escape"),", ",(0,n.kt)("kbd",null,"ArrowDown"),", ",(0,n.kt)("kbd",null,"End"),", ",(0,n.kt)("kbd",null,"Enter"),", ",(0,n.kt)("kbd",null,"Home"),", ",(0,n.kt)("kbd",null,"Insert"),", ",(0,n.kt)("kbd",null,"PageDown"),", ",(0,n.kt)("kbd",null,"PageUp"),", ",(0,n.kt)("kbd",null,"ArrowRight"),", ",(0,n.kt)("kbd",null,"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("kbd",null,"Shift"),", ",(0,n.kt)("kbd",null,"Control"),", ",(0,n.kt)("kbd",null,"Alt"),", ",(0,n.kt)("kbd",null,"Meta"),", ",(0,n.kt)("kbd",null,"Command"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("kbd",null,"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("kbd",null,"a")," and ",(0,n.kt)("kbd",null,"A")," will generate different respective texts."),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Command+f"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Command+Shift+f"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Open a find text modal.\n  await virtual.press("Command+f");\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key")," ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string")," Name of the key to press or a character to generate, such as ",(0,n.kt)("kbd",null,"ArrowLeft")," or ",(0,n.kt)("kbd",null,"a"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-previous"},"virtual.previous()"),(0,n.kt)("p",null,"Move the Virtual cursor to the previous location."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move to the previous item.\n  await virtual.previous();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-spoken-phrase-log"},"virtual.spokenPhraseLog()"),(0,n.kt)("p",null,"Get the log of all spoken phrases for this Virtual Screen Reader instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Move through several items.\n  for (let i = 0; i < 10; i++) {\n    await virtual.next();\n  }\n\n  // Get the phrase spoken by the Virtual Screen Reader from moving through the\n  // items above.\n  const spokenPhraseLog = await virtual.spokenPhraseLog();\n  console.log(spokenPhraseLog);\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string"),">> The spoken phrase log."),(0,n.kt)("h2",{id:"virtual-start"},"virtual.start(","[options]",")"),(0,n.kt)("p",null,"Turn the Virtual Screen Reader on."),(0,n.kt)("p",null,"This must be called before any other Virtual Screen Reader command can be issued."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader on the entire page.\n  await virtual.start({ container: document.body });\n\n  // ... perform some commands.\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ",(0,n.kt)("a",{parentName:"li",href:"./class-start-options",title:"StartOptions"},"StartOptions")," Start options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-stop"},"virtual.stop()"),(0,n.kt)("p",null,"Turn the Virtual Screen Reader off."),(0,n.kt)("p",null,"Calling this method will clear any item text or spoken phrases collected by the Virtual Screen Reader."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // ... perform some commands.\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-stop-interacting"},"virtual.stopInteracting()"),(0,n.kt)("p",null,"No-op to provide same API across screen readers."),(0,n.kt)("p",null,"The Virtual Screen Reader does not require users to perform an additional command to interact with the item in the Virtual Screen Reader cursor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Interact with the item - does nothing with the Virtual Screen Reader.\n  await virtual.interact();\n\n  // ... perform some commands.\n\n  // Stop interacting with the item - does nothing with Virtual.\n  await virtual.stopInteracting();\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"),(0,n.kt)("h2",{id:"virtual-type"},"virtual.type(text)"),(0,n.kt)("p",null,"Type text into the focused item."),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("kbd",null,"Control")," or ",(0,n.kt)("kbd",null,"ArrowDown"),", use ",(0,n.kt)("a",{parentName:"p",href:"./class-virtual#virtual-press"},(0,n.kt)("inlineCode",{parentName:"a"},"virtual.press(key)")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { virtual } from "@guidepup/virtual-screen-reader";\n\ntest("example test", async () => {\n  // Start the Virtual Screen Reader.\n  await virtual.start({ container: document.body });\n\n  // Type a username and key Enter.\n  await virtual.type("my-username");\n  await virtual.press("Enter");\n\n  // Stop the Virtual Screen Reader.\n  await virtual.stop();\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text")," ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",title:"string"},"string")," Text to type into the focused item.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">"))}c.isMDXComponent=!0}}]);