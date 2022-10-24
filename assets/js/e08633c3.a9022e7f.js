"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[292],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(o),d=a,k=m["".concat(p,".").concat(d)]||m[d]||v[d]||n;return o?r.createElement(k,i(i({ref:t},c),{},{components:o})):r.createElement(k,i({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7391:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return s}});var r=o(3117),a=(o(7294),o(3905));const n={title:"VoiceOver"},i=void 0,l={unversionedId:"api/class-voiceover",id:"api/class-voiceover",title:"VoiceOver",description:"Implements: [ScreenReader]",source:"@site/docs/api/class-voiceover.md",sourceDirName:"api",slug:"/api/class-voiceover",permalink:"/docs/api/class-voiceover",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-voiceover.md",tags:[],version:"current",frontMatter:{title:"VoiceOver"},sidebar:"api",previous:{title:"VoiceOverMouse",permalink:"/docs/api/class-voiceover-mouse"}},p={},s=[{value:"voiceOver.act(options)",id:"voiceover-act",level:2},{value:"voiceOver.click(options)",id:"voiceover-click",level:2},{value:"VoiceOver.default()",id:"voiceover-default",level:2},{value:"VoiceOver.detect()",id:"voiceover-detect",level:2},{value:"voiceOver.interact(options)",id:"voiceover-interact",level:2},{value:"voiceOver.itemText(options)",id:"voiceover-item-text",level:2},{value:"voiceOver.itemTextLog()",id:"voiceover-item-text-log",level:2},{value:"voiceOver.lastSpokenPhrase(options)",id:"voiceover-last-spoken-phrase",level:2},{value:"voiceOver.next(options)",id:"voiceover-next",level:2},{value:"voiceOver.perform(command, options)",id:"voiceover-perform",level:2},{value:"voiceOver.press(key, options)",id:"voiceover-press",level:2},{value:"voiceOver.previous(options)",id:"voiceover-previous",level:2},{value:"voiceOver.spokenPhraseLog()",id:"voiceover-spoken-phrase-log",level:2},{value:"voiceOver.start(options)",id:"voiceover-start",level:2},{value:"voiceOver.stop(options)",id:"voiceover-stop",level:2},{value:"voiceOver.stopInteracting(options)",id:"voiceover-stop-interacting",level:2},{value:"voiceOver.type(text, options)",id:"voiceover-type",level:2},{value:"voiceOver.caption",id:"voiceover-caption",level:2},{value:"voiceOver.commander",id:"voiceover-commander",level:2},{value:"voiceOver.cursor",id:"voiceover-cursor",level:2},{value:"voiceOver.keyboard",id:"voiceover-keyboard",level:2},{value:"voiceOver.mouse",id:"voiceover-mouse",level:2}],c={toc:s};function v(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implements:")," ",(0,a.kt)("a",{parentName:"p",href:"./class-screenreader",title:"ScreenReader"},"ScreenReader")),(0,a.kt)("p",null,"A VoiceOver instance can be used to launch and control VoiceOver."),(0,a.kt)("p",null,"Here's a typical example using a ",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover",title:"VoiceOver"},"VoiceOver")," instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { voiceOver } = require("@guidepup/guidepup");\n\n(async () => {\n  await voiceOver.start();\n  await voiceOver.next();\n  await voiceOver.stop();\n})();\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-act"},"voiceOver.act([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-click"},"voiceOver.click([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-default"},"VoiceOver.default()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-detect"},"VoiceOver.detect()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-interact"},"voiceOver.interact([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-item-text"},"voiceOver.itemText([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-item-text-log"},"voiceOver.itemTextLog()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-last-spoken-phrase"},"voiceOver.lastSpokenPhrase([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-next"},"voiceOver.next([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-perform"},"voiceOver.perform(command, [options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-press"},"voiceOver.press(key, [options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-previous"},"voiceOver.previous([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-spoken-phrase-log"},"voiceOver.spokenPhraseLog()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-start"},"voiceOver.start([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-stop"},"voiceOver.stop([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-stop-interacting"},"voiceOver.stopInteracting([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-type"},"voiceOver.type(text[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-caption"},"voiceOver.caption")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-commander"},"voiceOver.commander")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-cursor"},"voiceOver.cursor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-keyboard"},"voiceOver.keyboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./class-voiceover#voiceover-mouse"},"voiceOver.mouse"))),(0,a.kt)("h2",{id:"voiceover-act"},"voiceOver.act(","[options]",")"),(0,a.kt)("p",null,"Perform the default action for the item in the VoiceOver cursor."),(0,a.kt)("p",null,"Equivalent of executing ",(0,a.kt)("inlineCode",{parentName:"p"},"VO-Space bar"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-click"},"voiceOver.click(","[options]",")"),(0,a.kt)("p",null,"Click the mouse."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-click-options",title:"ClickOptions"},"ClickOptions"),">"," Click options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-default"},"VoiceOver.default()"),(0,a.kt)("p",null,"Detect whether VoiceOver is the default screen reader for the current OS."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"boolean"},"boolean"),">",">"),(0,a.kt)("h2",{id:"voiceover-detect"},"VoiceOver.detect()"),(0,a.kt)("p",null,"Detect whether VoiceOver is supported for the current OS."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"boolean"},"boolean"),">",">"),(0,a.kt)("h2",{id:"voiceover-interact"},"voiceOver.interact(","[options]",")"),(0,a.kt)("p",null,"Interact with the item under the VoiceOver cursor."),(0,a.kt)("p",null,"Equivalent of executing ",(0,a.kt)("inlineCode",{parentName:"p"},"VO-Shift-Down Arrow"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-item-text"},"voiceOver.itemText(","[options]",")"),(0,a.kt)("p",null,"Get the text of the item in the VoiceOver cursor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The item's text."),(0,a.kt)("h2",{id:"voiceover-item-text-log"},"voiceOver.itemTextLog()"),(0,a.kt)("p",null,"Get the log of all visited item text for this VoiceOver instance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The item text log."),(0,a.kt)("h2",{id:"voiceover-last-spoken-phrase"},"voiceOver.lastSpokenPhrase(","[options]",")"),(0,a.kt)("p",null,"Get the last spoken phrase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The last spoken phrase."),(0,a.kt)("h2",{id:"voiceover-next"},"voiceOver.next(","[options]",")"),(0,a.kt)("p",null,"Move the VoiceOver cursor to the next location."),(0,a.kt)("p",null,"Equivalent of executing ",(0,a.kt)("inlineCode",{parentName:"p"},"VO-Right Arrow"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-perform"},"voiceOver.perform(command","[, options]",")"),(0,a.kt)("p",null,"Perform a VoiceOver command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"command")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-macos-keyboard-command",title:"MacOSKeyboardCommand"},"MacOSKeyboardCommand")," | ",(0,a.kt)("a",{parentName:"li",href:"./class-voiceover-commander-commands",title:"VoiceOverCommanderCommands"},"VoiceOverCommanderCommands"),">"," VoiceOver keyboard command or commander command to execute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-press"},"voiceOver.press(key","[, options]",")"),(0,a.kt)("p",null,"Press a key on the focused item."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},(0,a.kt)("inlineCode",{parentName:"a"},"keyboardEvent.key")),"\nvalue or a single character to generate the text for. A superset of the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," values can be found\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"on the MDN key values page"),". Examples of the keys are:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"F20"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Digit0")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyA")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Tab"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./class-macos-key-codes",title:"MacOSKeyCodes"},"MacOSKeyCodes")," for the full range of available keys."),(0,a.kt)("p",null,"Following modification shortcuts are also supported: ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Command"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./class-macos-modifiers",title:"MacOSModifiers"},"MacOSModifiers")," for the full range of available modifiers."),(0,a.kt)("p",null,"Holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective\ntexts."),(0,a.kt)("p",null,"Shortcuts such as ",(0,a.kt)("inlineCode",{parentName:"p"},'key: "Control+f"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+f"')," are supported as well. When specified with the\nmodifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'await voiceOver.press("Control+f");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the key to press or a character to generate, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"a"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-keyboard-options",title:"KeyboardOptions"},"KeyboardOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-previous"},"voiceOver.previous(","[options]",")"),(0,a.kt)("p",null,"Move the VoiceOver cursor to the previous location."),(0,a.kt)("p",null,"Equivalent of executing ",(0,a.kt)("inlineCode",{parentName:"p"},"VO-Left Arrow"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-spoken-phrase-log"},"voiceOver.spokenPhraseLog()"),(0,a.kt)("p",null,"Get the log of all spoken phrases for this VoiceOver instance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The spoken phrase log."),(0,a.kt)("h2",{id:"voiceover-start"},"voiceOver.start(","[options]",")"),(0,a.kt)("p",null,"Turn VoiceOver on."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-stop"},"voiceOver.stop(","[options]",")"),(0,a.kt)("p",null,"Turn VoiceOver off."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-stop-interacting"},"voiceOver.stopInteracting(","[options]",")"),(0,a.kt)("p",null,"Stop interacting with the current item."),(0,a.kt)("p",null,"Equivalent of executing ",(0,a.kt)("inlineCode",{parentName:"p"},"VO-Shift-Up Arrow"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-type"},"voiceOver.type(text","[, options]",")"),(0,a.kt)("p",null,"Type text into the focused item."),(0,a.kt)("p",null,"To press a special key, like ",(0,a.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover#voiceover-press"},(0,a.kt)("inlineCode",{parentName:"a"},"voiceOver.press(key[, options])")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'await voiceOver.type("my-username");\nawait voiceOver.press("Enter");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Text to type into the focused item."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,a.kt)("h2",{id:"voiceover-caption"},"voiceOver.caption"),(0,a.kt)("p",null,"VoiceOver caption APIs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover-caption",title:"VoiceOverCaption"},"VoiceOverCaption"),">"),(0,a.kt)("h2",{id:"voiceover-commander"},"voiceOver.commander"),(0,a.kt)("p",null,"VoiceOver commander APIs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover-commander",title:"VoiceOverCommander"},"VoiceOverCommander"),">"),(0,a.kt)("h2",{id:"voiceover-cursor"},"voiceOver.cursor"),(0,a.kt)("p",null,"VoiceOver cursor APIs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover-cursor",title:"VoiceOverCursor"},"VoiceOverCursor"),">"),(0,a.kt)("h2",{id:"voiceover-keyboard"},"voiceOver.keyboard"),(0,a.kt)("p",null,"VoiceOver keyboard APIs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover-keyboard",title:"VoiceOverKeyboard"},"VoiceOverKeyboard"),">"),(0,a.kt)("h2",{id:"voiceover-mouse"},"voiceOver.mouse"),(0,a.kt)("p",null,"VoiceOver mouse APIs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,a.kt)("a",{parentName:"p",href:"./class-voiceover-mouse",title:"VoiceOverMouse"},"VoiceOverMouse"),">"))}v.isMDXComponent=!0}}]);