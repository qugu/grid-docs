"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[8321],{3905:function(t,e,i){i.d(e,{Zo:function(){return p},kt:function(){return d}});var n=i(7294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),g=c(i),d=r,h=g["".concat(u,".").concat(d)]||g[d]||l[d]||o;return i?n.createElement(h,a(a({ref:e},p),{},{components:i})):n.createElement(h,a({ref:e},p))}));function d(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=i.length,a=new Array(o);a[0]=g;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},8123:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],s={description:"GitHub Integration"},u="Integrating with GitHub",c={unversionedId:"platform/github-integration",id:"platform/github-integration",title:"Integrating with GitHub",description:"GitHub Integration",source:"@site/docs/platform/2_github-integration.md",sourceDirName:"platform",slug:"/platform/github-integration",permalink:"/platform/github-integration",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/2_github-integration.md",tags:[],version:"current",lastUpdatedAt:1655923842,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:2,frontMatter:{description:"GitHub Integration"},sidebar:"tutorialSidebar",previous:{title:"Keeping track of costs",permalink:"/platform/Billing/monitoring-costs"},next:{title:"Bring Your Own Cloud (BYOC) Overview",permalink:"/platform/Custom Cloud Credentials/byoc"}},p=[{value:"Signed up with Github",id:"signed-up-with-github",children:[],level:2},{value:"Signed up with Google",id:"signed-up-with-google",children:[],level:2},{value:"Access Private Github Repos",id:"access-private-github-repos",children:[],level:2},{value:"About authorization",id:"about-authorization",children:[],level:2},{value:"About private code",id:"about-private-code",children:[],level:2}],l={toc:p};function g(t){var e=t.components,s=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-with-github"},"Integrating with GitHub"),(0,o.kt)("h2",{id:"signed-up-with-github"},"Signed up with Github"),(0,o.kt)("p",null,"If you signed up to Grid with Github, you'll already be logged into your Github account when an interactive Session starts."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(2730).Z})),(0,o.kt)("h2",{id:"signed-up-with-google"},"Signed up with Google"),(0,o.kt)("p",null,"If you signed up to Grid with Google, you'll have to link a Github account under ",(0,o.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Integrations"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(5500).Z})),(0,o.kt)("h2",{id:"access-private-github-repos"},"Access Private Github Repos"),(0,o.kt)("p",null,"By default you can only access public Github repositories on Grid. To grant access to your private code navigate to Settings ",">"," Integrations ",">"," Grant access. Make sure to grant access to any private repositories you intend to use before using Session"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(8434).Z})),(0,o.kt)("h2",{id:"about-authorization"},"About authorization"),(0,o.kt)("p",null,"When you grant access to private repositories in Github, the organizations that you have granted private access to will appear in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/settings/applications"},"https://github.com/settings/applications")," . When you want to use a script from a private repository in Grid, make sure that the organization shows up in the Applications section of Github settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Settings-&amp;gt;Applications",src:i(6447).Z})),(0,o.kt)("p",null,"Click on the Grid AI organization to see permissions."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(6447).Z})),(0,o.kt)("p",null,"Make sure that Organization access above shows that permissions are granted to the repositories you have(this example is showing xyz). If Organization access is not requested, you will not be able to use scripts from the private repositories."),(0,o.kt)("h2",{id:"about-private-code"},"About private code"),(0,o.kt)("p",null,"Grid does not save your code, look at it or compromise its privacy in any way."),(0,o.kt)("p",null,"When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code."))}g.isMDXComponent=!0},8434:function(t,e,i){e.Z=i.p+"assets/images/grant_github_access-e05c66119234ad4ebd091945039fd2a3.gif"},2730:function(t,e,i){e.Z=i.p+"assets/images/github-login-9203339c2550d033fc5f9d163ae8fbde.png"},6447:function(t,e,i){e.Z=i.p+"assets/images/github-permissions-98aaf93ba67e2479d8f21038b226d62b.png"},5500:function(t,e,i){e.Z=i.p+"assets/images/google-login-b4465f0d288ccaacf2a115659c8f2d4b.png"}}]);