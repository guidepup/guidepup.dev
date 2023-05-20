"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[6],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||u;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),u="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),u=n(6010),o=n(2389),i=n(7392),l=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:f,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[O,N]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=k[f];null!=e&&e!==O&&b.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==O&&(E(t),N(r),null!=f&&w(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:I},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905)),u=n(5488),o=n(5162);const i={title:"Environment Setup",description:"Environment setup guidance for automating screen readers for accessibility testing with Guidepup"},l=void 0,s={unversionedId:"guides/automated-environment-setup",id:"guides/automated-environment-setup",title:"Environment Setup",description:"Environment setup guidance for automating screen readers for accessibility testing with Guidepup",source:"@site/docs/guides/automated-environment-setup.md",sourceDirName:"guides",slug:"/guides/automated-environment-setup",permalink:"/docs/guides/automated-environment-setup",draft:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/guides/automated-environment-setup.md",tags:[],version:"current",frontMatter:{title:"Environment Setup",description:"Environment setup guidance for automating screen readers for accessibility testing with Guidepup"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/docs/release"},next:{title:"Manual VoiceOver Setup",permalink:"/docs/guides/manual-voiceover-setup"}},p={},c=[{value:"Automated Setup",id:"automated-setup",level:2},{value:"Recording Setup (MacOS Only)",id:"recording-setup-macos-only",level:2},{value:"GitHub Action",id:"github-action",level:2},{value:"Issues",id:"issues",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"automated-setup"},"Automated Setup"),(0,a.kt)("p",null,"For some operating systems, enabling control of screen readers is tightly controlled."),(0,a.kt)("p",null,"To make environment setup easier ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guidepup/setup"},(0,a.kt)("inlineCode",{parentName:"a"},"@guidepup/setup"))," was created to handle the setup of your OS for you. Run the setup with:"),(0,a.kt)(u.Z,{groupId:"env-flavor",defaultValue:"local",values:[{label:"Local",value:"local"},{label:"CI / CD",value:"ci"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"local",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @guidepup/setup\n"))),(0,a.kt)(o.Z,{value:"ci",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @guidepup/setup --ci\n")))),(0,a.kt)("p",null,"The CLI will first attempt to configure your environment itself, but on systems with tighter security controls such as MacOS with ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/HT204899"},"System Integrity Protection (SIP)"),", it may prompt you for additional inputs so that it can complete setup through UI automation."),(0,a.kt)("h2",{id:"recording-setup-macos-only"},"Recording Setup (MacOS Only)"),(0,a.kt)("p",null,"If you are encountering errors in CI for MacOS you can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"--record")," flag to the command which will output a screen-recording of the setup to a ",(0,a.kt)("inlineCode",{parentName:"p"},"./recordings/")," folder within the current working directory."),(0,a.kt)(u.Z,{groupId:"env-flavor",defaultValue:"local",values:[{label:"Local",value:"local"},{label:"CI / CD",value:"ci"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"local",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @guidepup/setup --record\n"))),(0,a.kt)(o.Z,{value:"ci",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @guidepup/setup --ci --record\n")))),(0,a.kt)("h2",{id:"github-action"},"GitHub Action"),(0,a.kt)("p",null,"Add this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/guidepup-setup"},(0,a.kt)("inlineCode",{parentName:"a"},"guidepup/setup-action"))," step to enable screen reader test automation in GitHub CI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Guidepup Setup\n  uses: guidepup/setup-action\n")),(0,a.kt)("h2",{id:"issues"},"Issues"),(0,a.kt)("p",null,"If you are encountering issues with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guidepup/setup"},(0,a.kt)("inlineCode",{parentName:"a"},"@guidepup/setup"))," then please reach out and raise a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guidepup/setup/issues"},"GitHub issue"),"."))}m.isMDXComponent=!0}}]);