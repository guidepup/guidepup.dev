"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),o=n(4334),i=n(2389),l=n(7392),u=n(7094),p=n(2466),s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,l.l)(f,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,u.U)(),[x,T]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=b[g];null!=e&&e!==x&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==x&&(O(t),T(a),null!=g&&k(g,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={title:"Real World Example"},u="Real World Example",p={unversionedId:"example",id:"example",title:"Real World Example",description:"Let's take a look at a more complete example of how you might use Guidepup.",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/docs/example",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/example.md",tags:[],version:"current",frontMatter:{title:"Real World Example"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Support Matrix",permalink:"/docs/support"}},s={},c=[{value:"Contents",id:"contents",level:2},{value:"Environment Setup",id:"environment",level:2},{value:"Installation",id:"installation",level:2},{value:"Create Playwright Config File (#playwright)",id:"create-playwright-config-file-playwright",level:2},{value:"Create Test File",id:"test",level:2},{value:"Create Expected Log File",id:"expected",level:2},{value:"Run Test",id:"run",level:2}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"real-world-example"},"Real World Example"),(0,r.kt)("p",null,"Let's take a look at a more complete example of how you might use Guidepup."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," this example assumes you are using MacOS!")),(0,r.kt)("p",null,"Here we're making use of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@guidepup/playwright"},"@guidepup/playwright")," module to integrate Guidepup into an automated ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," test to assert the VoiceOver flow behaves as we expect. This modules handles the starting and stopping VoiceOver for you between tests so you can focus on writing your tests straight away. It also provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"voTest")," export - a convenience wrapper for the Playwright ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," method which provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"voiceOver")," instance for you alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," object."),(0,r.kt)("p",null,"The test will check that you can navigate to the first heading on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/guidepup/guidepup#guidepup"},"GitHub README.md for Guidepup")," with the following steps:"),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./example#environment"},"Environment Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./example#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./example#playwright"},"Create Playwright Config File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./example#test"},"Create Test File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./example#expected"},"Create Expected Log File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./example#run"},"Run Test"))),(0,r.kt)("h2",{id:"environment"},"Environment Setup"),(0,r.kt)("p",null,"Setup your environment for screen-reader automation with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/guidepup/setup"},(0,r.kt)("inlineCode",{parentName:"a"},"@guidepup/setup")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @guidepup/setup\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the Guidepup Playwright module to your project as well as the necessary Playwright dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies.\nnpm i @guidepup/playwright @playwright/test\n\n# Install WebKit browser for Playwright.\nnpx playwright install webkit\n")),(0,r.kt)("h2",{id:"create-playwright-config-file-playwright"},"Create Playwright Config File (#playwright)"),(0,r.kt)("p",null,"To tell Playwright how we want to run our tests we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," for TypeScript) file for our configuration."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { voConfig } from "@guidepup/playwright";\nimport { devices, PlaywrightTestConfig } from "@playwright/test";\n\nconst config: PlaywrightTestConfig = {\n  ...voConfig,\n  reportSlowTests: null,\n  timeout: 2 * 60 * 1000,\n  retries: 3,\n  projects: [\n    {\n      name: "webkit",\n      use: { ...devices["Desktop Safari"], headless: false, video: "on" },\n    },\n  ],\n};\n\nexport default config;\n'))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { voConfig } = require("@guidepup/playwright");\nconst { devices } = require("@playwright/test");\n\nconst config = {\n  ...voConfig,\n  reportSlowTests: null,\n  timeout: 2 * 60 * 1000,\n  retries: 3,\n  projects: [\n    {\n      name: "webkit",\n      use: { ...devices["Desktop Safari"], headless: false, video: "on" },\n    },\n  ],\n};\n\nmodule.exports = config;\n')))),(0,r.kt)("p",null,"For this example we are using the recommended configuration from the Guidepup Playwright package which ensures we only run the tests with one worker as VoiceOver can only act on one browser instance at a time."),(0,r.kt)("p",null,"In addition to recommended configuration, we also set a long timeout and disable slow test warnings as automating VoiceOver is slightly slower than Playwright expects if simply automating the browser."),(0,r.kt)("p",null,"We also setup some retry configuration, and let Playwright know that we want to test against WebKit in headed mode with video recording switched on."),(0,r.kt)("h2",{id:"test"},"Create Test File"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"voiceOver.spec.js")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"voiceOver.spec.ts")," for TypeScript) to define your screen-reader code."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { voTest as test } from "@guidepup/playwright";\nimport { expect } from "@playwright/test";\nimport itemTextSnapshot from "./itemTextSnapshot.json";\n\nfunction delay(ms: number) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nasync function waitForWebContentAnnouncement(voiceOver) {\n  for (let i = 0; i < 10; i++) {\n    const itemText = await voiceOver.itemText();\n\n    if (itemText?.includes("web content")) {\n      return;\n    }\n\n    await delay(50);\n  }\n\n  throw new Error("web content could not be found");\n}\n\ntest.describe("Playwright VoiceOver", () => {\n  test("I can navigate the Guidepup Github page", async ({\n    page,\n    voiceOver,\n  }) => {\n    // Navigate to Guidepup GitHub page \ud83c\udf89\n    await page.goto("https://github.com/guidepup/guidepup", {\n      waitUntil: "domcontentloaded",\n    });\n\n    // Wait for page to be ready and interact \ud83d\ude4c\n    await expect(page.locator(\'header[role="banner"]\')).toBeVisible();\n    await waitForWebContentAnnouncement(voiceOver);\n    await voiceOver.interact();\n\n    // Move across the page menu to the Guidepup heading using VoiceOver \ud83d\udd0e\n    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {\n      await voiceOver.perform(voiceOver.keyboard.commands.findNextHeading);\n    }\n\n    // Assert that we\'ve ended up where we expected and what we were told on\n    // the way there is as expected.\n    const itemTextLog = await voiceOver.itemTextLog();\n\n    for (const expectedItem of itemTextSnapshot) {\n      expect(itemTextLog).toContain(expectedItem);\n    }\n  });\n});\n'))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { voTest as test } = require("@guidepup/playwright");\nconst { expect } = require("@playwright/test");\nconst itemTextSnapshot = require("./itemTextSnapshot.json");\n\nfunction delay(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nasync function waitForWebContentAnnouncement(voiceOver) {\n  for (let i = 0; i < 10; i++) {\n    const itemText = await voiceOver.itemText();\n\n    if (itemText?.includes("web content")) {\n      return;\n    }\n\n    await delay(50);\n  }\n\n  throw new Error("web content could not be found");\n}\n\ntest.describe("Playwright VoiceOver", () => {\n  test("I can navigate the Guidepup Github page", async ({\n    page,\n    voiceOver,\n  }) => {\n    // Navigate to Guidepup GitHub page \ud83c\udf89\n    await page.goto("https://github.com/guidepup/guidepup", {\n      waitUntil: "domcontentloaded",\n    });\n\n    // Wait for page to be ready and interact \ud83d\ude4c\n    await expect(page.locator(\'header[role="banner"]\')).toBeVisible();\n    await waitForWebContentAnnouncement(voiceOver);\n    await voiceOver.interact();\n\n    // Move across the page menu to the Guidepup heading using VoiceOver \ud83d\udd0e\n    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {\n      await voiceOver.perform(voiceOver.keyboard.commands.findNextHeading);\n    }\n\n    // Assert that we\'ve ended up where we expected and what we were told on\n    // the way there is as expected.\n    const itemTextLog = await voiceOver.itemTextLog();\n\n    for (const expectedItem of itemTextSnapshot) {\n      expect(itemTextLog).toContain(expectedItem);\n    }\n  });\n});\n')))),(0,r.kt)("h2",{id:"expected"},"Create Expected Log File"),(0,r.kt)("p",null,"In our test file above we reference a ",(0,r.kt)("inlineCode",{parentName:"p"},"itemTextSnapshot.json")," file which contains our expectations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"itemTextLog")," that we retrieve from VoiceOver after navigating to the README.md heading to check the journey was as expected."),(0,r.kt)("p",null,"Create this ",(0,r.kt)("inlineCode",{parentName:"p"},"itemTextSnapshot.json")," file with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "Skip to content link",\n  "guidepup/guidepup heading level 1",\n  "Latest commit heading level 2",\n  "Git stats heading level 2",\n  "Files heading level 2",\n  "README.md heading level 2",\n  "Guidepup heading level 1"\n]\n')),(0,r.kt)("h2",{id:"run"},"Run Test"),(0,r.kt)("p",null,"Now run your code to see an automated screen-reader test \ud83d\ude80"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,r.kt)("p",null,"You should observe something similar to below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gif of Playwright controlled Safari browser being driven with VoiceOver. Announcements read: &quot;heading level 2, Latest commit&quot;, &quot;heading level 2, Git stats&quot;, &quot;You are currently on a heading level 2.&quot;, &quot;heading level 2, Files&quot;, &quot;You are currently on a heading level 2.&quot;, &quot;heading level 2, link, README.md&quot;, &quot;heading level 1, Guidepup&quot;",src:n(7546).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"With a terminal output of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Running 1 test using 1 worker\n\xb7\n\n  1 passed (20s)\nDone in 32.56s.\n")))}m.isMDXComponent=!0},7546:function(e,t,n){t.Z=n.p+"assets/images/playwright-voiceover-7318ff17a8d49f9a219ce9f80b170c23.gif"}}]);