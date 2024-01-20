"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[7402],{6444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(5893),r=n(1151),i=n(4866),s=n(5162);const l={title:"Real World Example",description:"A tutorial for using Guidepup and Playwright to automate VoiceOver for accessibility testing"},o="Real World Example",u={id:"example",title:"Real World Example",description:"A tutorial for using Guidepup and Playwright to automate VoiceOver for accessibility testing",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/docs/example",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/example.md",tags:[],version:"current",frontMatter:{title:"Real World Example",description:"A tutorial for using Guidepup and Playwright to automate VoiceOver for accessibility testing"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Virtual Screen Reader",permalink:"/docs/virtual"}},c={},d=[{value:"Contents",id:"contents",level:2},{value:"Environment Setup",id:"environment",level:2},{value:"Installation",id:"installation",level:2},{value:"Create Playwright Config File",id:"playwright",level:2},{value:"Create Test File",id:"test",level:2},{value:"Run Test",id:"run",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"real-world-example",children:"Real World Example"}),"\n",(0,a.jsx)(t.p,{children:"Let's take a look at a more complete example of how you might use Guidepup."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," this example assumes you are using MacOS, but everything covered in this example can also be applied to NVDA on Windows via the ",(0,a.jsx)(t.code,{children:"nvda"})," object and swapping Safari WebKit for a browser supported by Windows such as Chromium or Firefox."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Here we're making use of the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@guidepup/playwright",children:"@guidepup/playwright"})," module to integrate Guidepup into an automated ",(0,a.jsx)(t.a,{href:"https://playwright.dev/",children:"Playwright"})," test to assert the VoiceOver flow behaves as we expect. This modules handles the starting and stopping VoiceOver for you between tests so you can focus on writing your tests straight away. It also provides a ",(0,a.jsx)(t.code,{children:"voiceOverTest"})," export - a convenience wrapper for the Playwright ",(0,a.jsx)(t.code,{children:"test"})," method which provides a ",(0,a.jsx)(t.code,{children:"voiceOver"})," instance for you alongside the ",(0,a.jsx)(t.code,{children:"page"})," object."]}),"\n",(0,a.jsxs)(t.p,{children:["The test will check that you can navigate to the first heading on the ",(0,a.jsx)(t.a,{href:"https://github.com/guidepup/guidepup#guidepup",children:"GitHub README.md for Guidepup"})," with the following steps:"]}),"\n",(0,a.jsx)(t.h2,{id:"contents",children:"Contents"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"./example#environment",children:"Environment Setup"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"./example#installation",children:"Installation"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"./example#playwright",children:"Create Playwright Config File"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"./example#test",children:"Create Test File"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"./example#run",children:"Run Test"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"environment",children:"Environment Setup"}),"\n",(0,a.jsxs)(t.p,{children:["Setup your environment for screen reader automation with ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@guidepup/setup",children:(0,a.jsx)(t.code,{children:"@guidepup/setup"})}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx @guidepup/setup\n"})}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"Install the Guidepup Playwright module to your project as well as the necessary Playwright dependencies:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"pm-flavor",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],children:[(0,a.jsx)(s.Z,{value:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Install dependencies.\nyarn add @guidepup/playwright @playwright/test\n\n# Install WebKit browser for Playwright.\nnpx playwright install webkit\n"})})}),(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Install dependencies.\nnpm install @guidepup/playwright @playwright/test\n\n# Install WebKit browser for Playwright.\nnpx playwright install webkit\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"playwright",children:"Create Playwright Config File"}),"\n",(0,a.jsxs)(t.p,{children:["To tell Playwright how we want to run our tests we create a ",(0,a.jsx)(t.code,{children:"playwright.config.js"})," (or ",(0,a.jsx)(t.code,{children:"playwright.config.ts"})," for TypeScript) file for our configuration:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,a.jsx)(s.Z,{value:"ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { screenReaderConfig } from "@guidepup/playwright";\nimport { devices, PlaywrightTestConfig } from "@playwright/test";\n\nconst config: PlaywrightTestConfig = {\n  ...screenReaderConfig,\n  reportSlowTests: null,\n  timeout: 3 * 60 * 1000,\n  retries: 2,\n  projects: [\n    {\n      name: "webkit",\n      use: { ...devices["Desktop Safari"], headless: false },\n    },\n  ],\n};\n\nexport default config;\n'})})}),(0,a.jsx)(s.Z,{value:"js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const { screenReaderConfig } = require("@guidepup/playwright");\nconst { devices } = require("@playwright/test");\n\nconst config = {\n  ...screenReaderConfig,\n  reportSlowTests: null,\n  timeout: 3 * 60 * 1000,\n  retries: 2,\n  projects: [\n    {\n      name: "webkit",\n      use: { ...devices["Desktop Safari"], headless: false },\n    },\n  ],\n};\n\nmodule.exports = config;\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"For this example we are using the recommended configuration from the Guidepup Playwright package which ensures we only run the tests with one worker as VoiceOver can only act on one browser instance at a time."}),"\n",(0,a.jsx)(t.p,{children:"In addition to recommended configuration, we also set a long timeout and disable slow test warnings as automating VoiceOver is slightly slower than Playwright expects if simply automating the browser."}),"\n",(0,a.jsx)(t.p,{children:"We also setup some retry configuration, and let Playwright know that we want to test against WebKit in headed mode with video recording switched on."}),"\n",(0,a.jsx)(t.h2,{id:"test",children:"Create Test File"}),"\n",(0,a.jsxs)(t.p,{children:["Create a ",(0,a.jsx)(t.code,{children:"voiceOver.spec.js"})," (or ",(0,a.jsx)(t.code,{children:"voiceOver.spec.ts"})," for TypeScript) to define your screen reader code:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,a.jsx)(s.Z,{value:"ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { voiceOverTest as test } from "@guidepup/playwright";\nimport { expect } from "@playwright/test";\n\ntest.describe("Playwright VoiceOver", () => {\n  test("I can navigate the Guidepup Github page", async ({\n    page,\n    voiceOver,\n  }) => {\n    // Navigate to Guidepup GitHub page\n    await page.goto("https://github.com/guidepup/guidepup", {\n      waitUntil: "load",\n    });\n\n    // Wait for page to be ready\n    await expect(page.locator(\'header[role="banner"]\')).toBeVisible();\n    await voiceOver.interact();\n\n    // Interact with the page\n    await voiceOver.navigateToWebContent();\n\n    // Move across the page menu to the Guidepup heading using VoiceOver\n    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {\n      await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);\n    }\n\n    // Assert that the spoken phrases are as expected\n    expect(JSON.stringify(await voiceOver.spokenPhraseLog())).toMatchSnapshot();\n  });\n});\n'})})}),(0,a.jsx)(s.Z,{value:"js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const { voiceOverTest as test } = require("@guidepup/playwright");\nconst { expect } = require("@playwright/test");\n\ntest.describe("Playwright VoiceOver", () => {\n  test("I can navigate the Guidepup Github page", async ({\n    page,\n    voiceOver,\n  }) => {\n    // Navigate to Guidepup GitHub page\n    await page.goto("https://github.com/guidepup/guidepup", {\n      waitUntil: "load",\n    });\n\n    // Wait for page to be ready\n    await expect(page.locator(\'header[role="banner"]\')).toBeVisible();\n    await voiceOver.interact();\n\n    // Interact with the page\n    await voiceOver.navigateToWebContent();\n\n    // Move across the page menu to the Guidepup heading using VoiceOver\n    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {\n      await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);\n    }\n\n    // Assert that the spoken phrases are as expected\n    expect(JSON.stringify(await voiceOver.spokenPhraseLog())).toMatchSnapshot();\n  });\n});\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"run",children:"Run Test"}),"\n",(0,a.jsx)(t.p,{children:"Now run your code to see an automated screen reader test."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx playwright test\n"})}),"\n",(0,a.jsx)(t.p,{children:"You should observe something similar to below:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Gif of Playwright controlled Safari browser being driven with VoiceOver. Announcements read: heading level 2, Latest commit, heading level 2, Git stats, You are currently on a heading level 2., heading level 2, Files, You are currently on a heading level 2., heading level 2, link, README.md, heading level 1, Guidepup",src:n(7546).Z+"",width:"1920",height:"1080"})}),"\n",(0,a.jsx)(t.p,{children:"With a terminal output of:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"Running 1 test using 1 worker\n\xb7\n\n  1 passed (20s)\nDone in 32.56s.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(512);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7294),r=n(512),i=n(2466),s=n(6550),l=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=g({queryString:n,groupId:r}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=u??v;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(5893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=v(e);return(0,w.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,w.jsx)(x,{...e,...t}),(0,w.jsx)(b,{...e,...t})]})}function j(e){const t=(0,m.Z)();return(0,w.jsx)(y,{...e,children:d(e.children)},String(t))}},7546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playwright-voiceover-7318ff17a8d49f9a219ce9f80b170c23.gif"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(7294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);