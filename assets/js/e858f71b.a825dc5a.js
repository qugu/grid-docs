"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[7404],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6842:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:1.4,title:"Periodic Upload",sidebar_label:"Periodic Upload"},u="Periodic upload",d={unversionedId:"features/datastores/periodic-upload",id:"features/datastores/periodic-upload",title:"Periodic Upload",description:"Upload on a timer",source:"@site/docs/features/datastores/periodic-upload.md",sourceDirName:"features/datastores",slug:"/features/datastores/periodic-upload",permalink:"/features/datastores/periodic-upload",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/periodic-upload.md",tags:[],version:"current",lastUpdatedAt:1648802247,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:1.4,frontMatter:{sidebar_position:1.4,title:"Periodic Upload",sidebar_label:"Periodic Upload"},sidebar:"tutorialSidebar",previous:{title:"Creating Datastores from a Cluster",permalink:"/features/datastores/create-from-a-cluster"},next:{title:"FAQ",permalink:"/features/datastores/datastore-faq"}},l=[{value:"Upload on a timer",id:"upload-on-a-timer",children:[],level:2}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"periodic-upload"},"Periodic upload"),(0,o.kt)("h2",{id:"upload-on-a-timer"},"Upload on a timer"),(0,o.kt)("p",null,"In certain cases, your data might change hourly and you might want to update your datastore. You can configure your crontab to do this automatically."),(0,o.kt)("p",null,"Here's an example that uploads a new version of a datastore every hour:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#write out current crontab\ncrontab -l > mycron\n\n#run datastore upload every hour every day\necho "0 * * * * grid datastore create --source data/path --name dataset" >> mycron    \n\n#install new cron file\ncrontab mycron\nrm mycron\n')))}p.isMDXComponent=!0}}]);