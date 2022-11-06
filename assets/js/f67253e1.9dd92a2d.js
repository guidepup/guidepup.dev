"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[92],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||o;return r?a.createElement(u,l(l({ref:t},c),{},{components:r})):a.createElement(u,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2467:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=r(3117),n=(r(7294),r(3905));const o={title:"ScreenReader"},l=void 0,s={unversionedId:"api/class-screenreader",id:"api/class-screenreader",title:"ScreenReader",description:"Base interface for screen-reader classes.",source:"@site/docs/api/class-screenreader.md",sourceDirName:"api",slug:"/api/class-screenreader",permalink:"/docs/api/class-screenreader",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-screenreader.md",tags:[],version:"current",frontMatter:{title:"ScreenReader"},sidebar:"api",previous:{title:"ScreenReaderMouse",permalink:"/docs/api/class-screenreader-mouse"},next:{title:"VoiceOverCaption",permalink:"/docs/api/class-voiceover-caption"}},i={},p=[{value:"screenReader.act(options)",id:"screenreader-act",level:2},{value:"screenReader.click(options)",id:"screenreader-click",level:2},{value:"ScreenReader.default()",id:"screenreader-default",level:2},{value:"ScreenReader.detect()",id:"screenreader-detect",level:2},{value:"screenReader.interact(options)",id:"screenreader-interact",level:2},{value:"screenReader.itemText(options)",id:"screenreader-item-text",level:2},{value:"screenReader.itemTextLog()",id:"screenreader-item-text-log",level:2},{value:"screenReader.lastSpokenPhrase(options)",id:"screenreader-last-spoken-phrase",level:2},{value:"screenReader.next(options)",id:"screenreader-next",level:2},{value:"screenReader.perform(command, options)",id:"screenreader-perform",level:2},{value:"screenReader.press(key, options)",id:"screenreader-press",level:2},{value:"screenReader.previous(options)",id:"screenreader-previous",level:2},{value:"screenReader.spokenPhraseLog()",id:"screenreader-spoken-phrase-log",level:2},{value:"screenReader.start(options)",id:"screenreader-start",level:2},{value:"screenReader.stop(options)",id:"screenreader-stop",level:2},{value:"screenReader.stopInteracting(options)",id:"screenreader-stop-interacting",level:2},{value:"screenReader.type(text, options)",id:"screenreader-type",level:2},{value:"screenReader.caption",id:"screenreader-caption",level:2},{value:"screenReader.cursor",id:"screenreader-cursor",level:2},{value:"screenReader.keyboard",id:"screenreader-keyboard",level:2},{value:"screenReader.mouse",id:"screenreader-mouse",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Base interface for screen-reader classes."),(0,n.kt)("p",null,"See also:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-voiceover",title:"VoiceOver"},"VoiceOver"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contents:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-act"},"screenReader.act([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-click"},"screenReader.click([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-default"},"ScreenReader.default()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-detect"},"ScreenReader.detect()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-interact"},"screenReader.interact([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-item-text"},"screenReader.itemText([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-item-text-log"},"screenReader.itemTextLog()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-last-spoken-phrase"},"screenReader.lastSpokenPhrase([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-next"},"screenReader.next([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-perform"},"screenReader.perform(command, [options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-press"},"screenReader.press(key, [options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-previous"},"screenReader.previous([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-spoken-phrase-log"},"screenReader.spokenPhraseLog()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-start"},"screenReader.start([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-stop"},"screenReader.stop([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-stop-interacting"},"screenReader.stopInteracting([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-type"},"screenReader.type(text[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-caption"},"screenReader.caption")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-commander"},"screenReader.commander")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-cursor"},"screenReader.cursor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-keyboard"},"screenReader.keyboard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./class-screenreader#screenreader-mouse"},"screenReader.mouse"))),(0,n.kt)("h2",{id:"screenreader-act"},"screenReader.act(","[options]",")"),(0,n.kt)("p",null,"Perform the default action for the item in the screen-reader cursor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-click"},"screenReader.click(","[options]",")"),(0,n.kt)("p",null,"Click the mouse."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-click-options",title:"ClickOptions"},"ClickOptions"),">"," Click options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-default"},"ScreenReader.default()"),(0,n.kt)("p",null,"Detect whether the screen-reader is the default screen-reader for the current OS."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"boolean"},"boolean"),">",">"),(0,n.kt)("h2",{id:"screenreader-detect"},"ScreenReader.detect()"),(0,n.kt)("p",null,"Detect whether the screen-reader is supported for the current OS."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"boolean"},"boolean"),">",">"),(0,n.kt)("h2",{id:"screenreader-interact"},"screenReader.interact(","[options]",")"),(0,n.kt)("p",null,"Interact with the item under the screen-reader cursor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-item-text"},"screenReader.itemText(","[options]",")"),(0,n.kt)("p",null,"Get the text of the item in the screen-reader cursor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The item's text."),(0,n.kt)("h2",{id:"screenreader-item-text-log"},"screenReader.itemTextLog()"),(0,n.kt)("p",null,"Get the log of all visited item text for this screen-reader instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The item text log."),(0,n.kt)("h2",{id:"screenreader-last-spoken-phrase"},"screenReader.lastSpokenPhrase(","[options]",")"),(0,n.kt)("p",null,"Get the last spoken phrase."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The last spoken phrase."),(0,n.kt)("h2",{id:"screenreader-next"},"screenReader.next(","[options]",")"),(0,n.kt)("p",null,"Move the screen-reader cursor to the next location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-perform"},"screenReader.perform(command","[, options]",")"),(0,n.kt)("p",null,"Perform a screen-reader command."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"command")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",title:"any"},"any"),">"," Screen-reader command to execute."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-press"},"screenReader.press(key","[, options]",")"),(0,n.kt)("p",null,"Press a key on the focused item."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},(0,n.kt)("inlineCode",{parentName:"a"},"keyboardEvent.key")),"\nvalue or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"on the MDN key values page"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F20"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective\ntexts."),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+f"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+f"')," are supported as well. When specified with the\nmodifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'await screenReader.press("Control+f");\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-keyboard-options",title:"KeyboardOptions"},"KeyboardOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-previous"},"screenReader.previous(","[options]",")"),(0,n.kt)("p",null,"Move the screen-reader cursor to the previous location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-spoken-phrase-log"},"screenReader.spokenPhraseLog()"),(0,n.kt)("p",null,"Get the log of all spoken phrases for this screen-reader instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," The spoken phrase log."),(0,n.kt)("h2",{id:"screenreader-start"},"screenReader.start(","[options]",")"),(0,n.kt)("p",null,"Turn the screen-reader on."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-stop"},"screenReader.stop(","[options]",")"),(0,n.kt)("p",null,"Turn the screen-reader off."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-stop-interacting"},"screenReader.stopInteracting(","[options]",")"),(0,n.kt)("p",null,"Stop interacting with the current item."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-type"},"screenReader.type(text","[, options]",")"),(0,n.kt)("p",null,"Type text into the focused item."),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,n.kt)("a",{parentName:"p",href:"./class-screenreader#screenreader-press"},(0,n.kt)("inlineCode",{parentName:"a"},"screenReader.press(key[, options])")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'await screenReader.type("my-username");\nawait screenReader.press("Enter");\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Text to type into the focused item."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"./class-command-options",title:"CommandOptions"},"CommandOptions"),">"," Additional options.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ","<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">"),(0,n.kt)("h2",{id:"screenreader-caption"},"screenReader.caption"),(0,n.kt)("p",null,"Screen-reader caption APIs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,n.kt)("a",{parentName:"p",href:"./class-screenreader-caption",title:"ScreenReaderCaption"},"ScreenReaderCaption"),">"),(0,n.kt)("h2",{id:"screenreader-cursor"},"screenReader.cursor"),(0,n.kt)("p",null,"Screen-reader cursor APIs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,n.kt)("a",{parentName:"p",href:"./class-screenreader-cursor",title:"ScreenReaderCursor"},"ScreenReaderCursor"),">"),(0,n.kt)("h2",{id:"screenreader-keyboard"},"screenReader.keyboard"),(0,n.kt)("p",null,"Screen-reader keyboard APIs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,n.kt)("a",{parentName:"p",href:"./class-screenreader-keyboard",title:"ScreenReaderKeyboard"},"ScreenReaderKeyboard"),">"),(0,n.kt)("h2",{id:"screenreader-mouse"},"screenReader.mouse"),(0,n.kt)("p",null,"Screen-reader mouse APIs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ","<",(0,n.kt)("a",{parentName:"p",href:"./class-screenreader-mouse",title:"ScreenReaderMouse"},"ScreenReaderMouse"),">"))}d.isMDXComponent=!0}}]);