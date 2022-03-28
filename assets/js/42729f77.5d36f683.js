"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9628],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),g=c(n),d=r,h=g["".concat(u,".").concat(d)]||g[d]||l[d]||o;return n?i.createElement(h,a(a({ref:e},p),{},{components:n})):i.createElement(h,a({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2722:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={description:"GitHub Integration"},u="Integrating with GitHub",c={unversionedId:"platform/github-integration",id:"platform/github-integration",title:"Integrating with GitHub",description:"GitHub Integration",source:"@site/docs/platform/github-integration.md",sourceDirName:"platform",slug:"/platform/github-integration",permalink:"/platform/github-integration",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/github-integration.md",tags:[],version:"current",lastUpdatedAt:1648430695,formattedLastUpdatedAt:"3/28/2022",frontMatter:{description:"GitHub Integration"}},p=[{value:"Signed up with Github",id:"signed-up-with-github",children:[],level:2},{value:"Signed up with Google",id:"signed-up-with-google",children:[],level:2},{value:"Access Private Github Repos",id:"access-private-github-repos",children:[],level:2},{value:"About authorization",id:"about-authorization",children:[],level:2},{value:"About private code",id:"about-private-code",children:[],level:2}],l={toc:p};function g(t){var e=t.components,s=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-with-github"},"Integrating with GitHub"),(0,o.kt)("h2",{id:"signed-up-with-github"},"Signed up with Github"),(0,o.kt)("p",null,"If you signed up to Grid with Github, you'll already be logged into your Github account when an interactive Session starts."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2730).Z})),(0,o.kt)("h2",{id:"signed-up-with-google"},"Signed up with Google"),(0,o.kt)("p",null,"If you signed up to Grid with Google, you'll have to link a Github account under ",(0,o.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Integrations"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5500).Z})),(0,o.kt)("h2",{id:"access-private-github-repos"},"Access Private Github Repos"),(0,o.kt)("p",null,"By default you can only access public Github repositories on Grid. To grant access to your private code navigate to Settings ",">"," Integrations ",">"," Grant access. Make sure to grant access to any private repositories you intend to use before using Session"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8434).Z})),(0,o.kt)("h2",{id:"about-authorization"},"About authorization"),(0,o.kt)("p",null,"When you grant access to private repositories in Github, the organizations that you have granted private access to will appear in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/settings/applications"},"https://github.com/settings/applications")," . When you want to use a script from a private repository in Grid, make sure that the organization shows up in the Applications section of Github settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Settings-&amp;gt;Applications",src:n(6447).Z})),(0,o.kt)("p",null,"Click on the Grid AI organization to see permissions."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6447).Z})),(0,o.kt)("p",null,"Make sure that Organization access above shows that permissions are granted to the repositories you have(this example is showing xyz). If Organization access is not requested, you will not be able to use scripts from the private repositories."),(0,o.kt)("h2",{id:"about-private-code"},"About private code"),(0,o.kt)("p",null,"Grid does not save your code, look at it or compromise its privacy in any way."),(0,o.kt)("p",null,"When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code."))}g.isMDXComponent=!0},8434:function(t,e,n){e.Z=n.p+"assets/images/grant_github_access-e05c66119234ad4ebd091945039fd2a3.gif"},2730:function(t,e,n){e.Z=n.p+"assets/images/github-login-9203339c2550d033fc5f9d163ae8fbde.png"},6447:function(t,e,n){e.Z=n.p+"assets/images/github-permissions-98aaf93ba67e2479d8f21038b226d62b.png"},5500:function(t,e,n){e.Z=n.p+"assets/images/google-login-b4465f0d288ccaacf2a115659c8f2d4b.png"}}]);