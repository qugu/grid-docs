"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5030],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(f,s(s({ref:e},c),{},{components:r})):a.createElement(f,s({ref:e},c))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9463:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],o={sidebar_position:1.5,title:"Machines",sidebar_label:"Machines"},l="Machines",p={unversionedId:"features/sessions/machines",id:"features/sessions/machines",title:"Machines",description:"Here are the machines you can use to start up sessions. The syntax for this is numberOfAcceleratorsacceleratorTypeavailableMemory. Below is an example utilizing this syntax to create a session on a machine with 8 v100 gpus and 32 GB memory.",source:"@site/docs/features/sessions/machines.md",sourceDirName:"features/sessions",slug:"/features/sessions/machines",permalink:"/features/sessions/machines",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/machines.md",tags:[],version:"current",lastUpdatedAt:1648802247,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5,title:"Machines",sidebar_label:"Machines"},sidebar:"tutorialSidebar",previous:{title:"Attaching Datastores",permalink:"/features/sessions/attaching-datastores"},next:{title:"Jupyter with Sessions",permalink:"/features/sessions/jupyterlab-with-sessions"}},c=[],m={toc:c};function d(t){var e=t.components,r=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machines"},"Machines"),(0,i.kt)("p",null,"Here are the machines you can use to start up sessions. The syntax for this is numberOfAccelerators_acceleratorType_availableMemory. Below is an example utilizing this syntax to create a session on a machine with 8 v100 gpus and 32 GB memory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid session create --instance_type 8_v100_32gb\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Accelerator type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_V100_32gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_V100_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_T4_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"T4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8_K80_12gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"K80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4_V100_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4_T4_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"T4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4_M60_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"M60")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2_M60_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"M60")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_V100_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"V100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_T4_16gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"T4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_K80_12gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"K80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1_M60_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"M60")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2_CPU_8gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2_CPU_4gb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU")))))}d.isMDXComponent=!0}}]);