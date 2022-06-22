"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3567],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return l}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),l=o,h=m["".concat(c,".").concat(l)]||m[l]||u[l]||s;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function l(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3091:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(7462),o=a(3366),s=(a(7294),a(3905)),r=["components"],i={sidebar_position:1.5,title:"Attaching Data to a Session",sidebar_label:"Attaching Data to a Session"},c=void 0,d={unversionedId:"features/sessions/attaching-datastores",id:"features/sessions/attaching-datastores",title:"Attaching Data to a Session",description:"Attach to a Session",source:"@site/docs/features/sessions/5_attaching-datastores.md",sourceDirName:"features/sessions",slug:"/features/sessions/attaching-datastores",permalink:"/features/sessions/attaching-datastores",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/5_attaching-datastores.md",tags:[],version:"current",lastUpdatedAt:1655923842,formattedLastUpdatedAt:"6/22/2022",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5,title:"Attaching Data to a Session",sidebar_label:"Attaching Data to a Session"},sidebar:"tutorialSidebar",previous:{title:"Pause Sessions",permalink:"/features/sessions/pause"},next:{title:"Machines",permalink:"/features/sessions/machines"}},p=[],u={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Datastore can only be mounted to a Session at Session creation time")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h1",{parentName:"div",id:"attaching-datastores"},"Attaching Datastores"),(0,s.kt)("h2",{parentName:"div",id:"attach-to-a-session"},"Attach to a Session"),(0,s.kt)("p",{parentName:"div"},"This video shows how we mount an ImageNet Datastore to a Session."),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("img",{src:a(8520).Z})),(0,s.kt)("p",{parentName:"div"},"In Sessions datastores are mounted to ",(0,s.kt)("inlineCode",{parentName:"p"},"/datastores"),".\nHowever, since juypyter notebooks use ",(0,s.kt)("inlineCode",{parentName:"p"},"/home/joyvan")," as the default working directory,\nwe provide a symlink from ",(0,s.kt)("inlineCode",{parentName:"p"},"/home/jovyan/datastores")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"/datastore")," so you can access your datastore easily upon opening up a Session."),(0,s.kt)("p",{parentName:"div"},"Once in the Session, view the data with:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd /datastores\nls\n")),(0,s.kt)("p",{parentName:"div"},"To create a session with a datastore in the CLI, you can run the following to attach the latest version of the named datastore:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"grid session create --datastore_name DATASTORE_NAME\n")),(0,s.kt)("h2",{parentName:"div",id:"attach-a-team-datastore-to-a-session"},"Attach a team datastore to a Session"),(0,s.kt)("p",{parentName:"div"},"You can attach a datastore uploaded by a team member to your session."),(0,s.kt)("p",{parentName:"div"},"Check datastores available to your team in the ",(0,s.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/datastores"},"UI"),". Or in the CLI with:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore --global\n")),(0,s.kt)("h1",{parentName:"div",id:"mount-data-without-using-a-datastore"},"Mount Data Without Using a Datastore"),(0,s.kt)("p",{parentName:"div"},"If you'd like to mount data to a Session without using a datastore, you can use the the ",(0,s.kt)("inlineCode",{parentName:"p"},"grid session mount [session_name] [mount_dir]")," command. As a prerequisite you will need to have set up SSH keys for your session,\nssh'd into the session, and don't forget to exit the session. SSH'ing into and exiting the session is a one time operation. Please see this documentation\n",(0,s.kt)("a",{parentName:"p",href:"/features/sessions/how-to-ssh-into-a-session"},"SSH into Session")," for help creating your SSH keys."))))}m.isMDXComponent=!0},8520:function(e,t,a){t.Z=a.p+"assets/images/attach_datastore_to_session-da1d49aff80d8aca91d59014474e758e.gif"}}]);