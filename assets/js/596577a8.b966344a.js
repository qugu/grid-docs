"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[573],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,l(l({ref:e},s),{},{components:r})):a.createElement(f,l({ref:e},s))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7527:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Machines",sidebar_label:"Machines"},p="Machines",c={unversionedId:"features/runs/machines",id:"features/runs/machines",title:"Machines",description:"These are the options of available machines. The syntax for this is numberOfAcceleratorsacceleratorTypeavailableMemory. Below is an example utilizing this syntax to create a run on a machine with 8 v100 gpus and 32 GB memory.",source:"@site/docs/features/runs/12_machines.md",sourceDirName:"features/runs",slug:"/features/runs/machines",permalink:"/features/runs/machines",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/12_machines.md",tags:[],version:"current",lastUpdatedAt:1648802247,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:12,frontMatter:{title:"Machines",sidebar_label:"Machines"},sidebar:"tutorialSidebar",previous:{title:"Failed Jobs",permalink:"/features/runs/failed-jobs"},next:{title:"Spot Instances",permalink:"/features/runs/interruptible-machines"}},s=[],m={toc:s};function u(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machines"},"Machines"),(0,i.kt)("p",null,"These are the options of available machines. The syntax for this is numberOfAccelerators_acceleratorType_availableMemory. Below is an example utilizing this syntax to create a run on a machine with 8 v100 gpus and 32 GB memory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --instance_type 8_v100_32gb hello.py --gpus 8\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Accelerator type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_V100_32gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_V100_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_T4_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"T4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_K80_12gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"K80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4_V100_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4_T4_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"T4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4_M60_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"M60")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2_M60_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"M60")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_V100_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_T4_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"T4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_K80_12gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"K80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_M60_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"M60")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2_CPU_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2_CPU_4gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: A credit card needs to be added to use GPU machines")))}u.isMDXComponent=!0}}]);