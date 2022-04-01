"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3821],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5436:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={title:"Failed Jobs",sidebar_label:"Failed Jobs"},s="Failed jobs",u={unversionedId:"features/runs/failed-jobs",id:"features/runs/failed-jobs",title:"Failed Jobs",description:"When your jobs fail it could be for 2 reasons, something failed during build or something failed while running",source:"@site/docs/features/runs/11_failed-jobs.md",sourceDirName:"features/runs",slug:"/features/runs/failed-jobs",permalink:"/features/runs/failed-jobs",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/11_failed-jobs.md",tags:[],version:"current",lastUpdatedAt:1648802247,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:11,frontMatter:{title:"Failed Jobs",sidebar_label:"Failed Jobs"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/features/runs/metrics-charts"},next:{title:"Machines",permalink:"/features/runs/machines"}},c=[{value:"Build failures",id:"build-failures",children:[],level:2},{value:"Script failures",id:"script-failures",children:[],level:2},{value:"Using the CLI to get logs",id:"using-the-cli-to-get-logs",children:[],level:2}],f={toc:c};function p(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failed-jobs"},"Failed jobs"),(0,a.kt)("p",null,"When your jobs fail it could be for 2 reasons, something failed during build or something failed while running"),(0,a.kt)("h2",{id:"build-failures"},"Build failures"),(0,a.kt)("p",null,"To see build failures, visit the build logs tab on the UI."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3125).Z})),(0,a.kt)("p",null,"Failures at this stage can happen because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependencies fail to install"),(0,a.kt)("li",{parentName:"ul"},"An action can fail"),(0,a.kt)("li",{parentName:"ul"},"Something goes wrong when executing your script")),(0,a.kt)("h2",{id:"script-failures"},"Script failures"),(0,a.kt)("p",null,"If the build completes but your script has a failure (ie: bug that causes exception) view the Stdout logs here"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1958).Z})),(0,a.kt)("p",null,"Failures here can happen with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Passing the wrong script arguments"),(0,a.kt)("li",{parentName:"ul"},"Out of memory"),(0,a.kt)("li",{parentName:"ul"},"Issue accessing the data"),(0,a.kt)("li",{parentName:"ul"},"A bug in your script that throws an exception")),(0,a.kt)("h2",{id:"using-the-cli-to-get-logs"},"Using the CLI to get logs"),(0,a.kt)("p",null,"To view logs for an experiment use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"grid logs the-experiment-name\n")))}p.isMDXComponent=!0},3125:function(e,t,r){t.Z=r.p+"assets/images/build_logs-467608fa185f53efc1d83860db637c71.gif"},1958:function(e,t,r){t.Z=r.p+"assets/images/stdout_logs-bc4cf38190719a7a1383598b04557ffa.gif"}}]);