"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[1151],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),g=r,f=c["".concat(s,".").concat(g)]||c[g]||o[g]||l;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},630:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},s="Billing rates",m={unversionedId:"platform/Billing/billing-rates",id:"platform/Billing/billing-rates",title:"Billing rates",description:"Grid charges based on consumption of compute.",source:"@site/docs/platform/1_Billing/billing-rates.md",sourceDirName:"platform/1_Billing",slug:"/platform/Billing/billing-rates",permalink:"/platform/Billing/billing-rates",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/1_Billing/billing-rates.md",tags:[],version:"current",lastUpdatedAt:1655923842,formattedLastUpdatedAt:"6/22/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Payments and credits",permalink:"/platform/Billing/billing-and-credits"},next:{title:"Keeping track of costs",permalink:"/platform/Billing/monitoring-costs"}},d=[{value:"List pricing",id:"list-pricing",children:[],level:2},{value:"Interruptible pricing",id:"interruptible-pricing",children:[],level:2},{value:"Individual Tier hourly rates",id:"individual-tier-hourly-rates",children:[],level:2},{value:"Machine specs",id:"machine-specs",children:[{value:"P2 instance types",id:"p2-instance-types",children:[],level:3},{value:"P3 instance types",id:"p3-instance-types",children:[],level:3},{value:"G4 instance types",id:"g4-instance-types",children:[],level:3},{value:"G3 instance types",id:"g3-instance-types",children:[],level:3},{value:"T2 instance types",id:"t2-instance-types",children:[],level:3}],level:2}],o={toc:d};function c(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"billing-rates"},"Billing rates"),(0,l.kt)("p",null,"Grid charges based on consumption of compute."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Costs are ",(0,l.kt)("strong",{parentName:"p"},"estimates")," until Runs have completed or Sessions are paused, then Grid reports the final costs."))),(0,l.kt)("p",null,"This page describes community tier pricing; refer to plans ",(0,l.kt)("a",{parentName:"p",href:"https://www.grid.ai/pricing/"},"here"),"."),(0,l.kt)("h2",{id:"list-pricing"},"List pricing"),(0,l.kt)("p",null,"If you need to run jobs for a long time and they cannot be interrupted, then use on-demand runs (this is the default option). This will use the list pricing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"grid run main.py\n")),(0,l.kt)("h2",{id:"interruptible-pricing"},"Interruptible pricing"),(0,l.kt)("p",null,"If your jobs (Sessions or Runs) can be interrupted and you want to save money, enable ",(0,l.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/interruptible-machines#interruptible-machines"},"Spot Instances"),". There is no uptime guarantee when using spot instances, so a job is terminated when the cloud provider needs the machine."),(0,l.kt)("p",null,"To start a run using spot instances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"grid run --use_spot main.py\n")),(0,l.kt)("p",null,"To start a session using spot instances use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"grid session create --use_spot\n")),(0,l.kt)("h2",{id:"individual-tier-hourly-rates"},"Individual Tier hourly rates"),(0,l.kt)("p",null,"Below you will find prices by machine type ",(0,l.kt)("em",{parentName:"p"},"per hour")," when running on Grid cloud ","(","Built on top of AWS",")","."),(0,l.kt)("p",null,"_","*","_","Prices will vary slightly."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Accelerators"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Machine specs"),(0,l.kt)("th",{parentName:"tr",align:"left"},"List  price ","(","p/h",")"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Interruptible  price ","(","p/h",")"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2xCPU ","(","2 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/"},"t2.medium")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.05"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2xCPU ","(","4 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/"},"t2.large")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.10"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4xCPU ","(","4 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/"},"t2.xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.19"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"8xCPU ","(","4 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/blogs/aws/new-t2-xlarge-and-t2-2xlarge-instances/"},"t2.2xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.39"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.55"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xM60 ","(","8 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g3/"},"g3s.xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.79"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.2xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.79"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xK80 ","(","12 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p2/"},"p2.xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.94"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.28")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xM60 ","(","8 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g3/"},"g3.4xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $1.20"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.36")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.4xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $1.26"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.8xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $2.28"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.69")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2xM60 ","(","8 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g3/"},"g3.8xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $2.39"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.72")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xV100 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p3/"},"p3.2xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $3.21"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $0.96")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.12xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $4.11"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $2.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.16xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $4.57"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $1.37")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4xM60 ","(","8 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g3/"},"g3.16xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $4.79"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $1.44")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"8xK80 ","(","12 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p2/"},"p2.8xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $7.56"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $2.27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"8xT4 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/g4/"},"g4dn.metal")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $8.22"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $2.46")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4xV100 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p3/"},"p3.8xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $12.85"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $3.86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"16xK80 ","(","12 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p2/"},"p2.16xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $15.12"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $4.54")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"8xV100 ","(","16 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p3/"},"p3.16xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $25.70"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $7.71")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"8xV100 ","(","32 GB",")"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/p3/"},"p3dn.24xlarge")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $32.77"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~ $11.11")))),(0,l.kt)("h2",{id:"machine-specs"},"Machine specs"),(0,l.kt)("p",null,"If you're curious about the machine specs, see below."),(0,l.kt)("h3",{id:"p2-instance-types"},"P2 instance types"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1276).Z})),(0,l.kt)("h3",{id:"p3-instance-types"},"P3 instance types"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8715).Z})),(0,l.kt)("h3",{id:"g4-instance-types"},"G4 instance types"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4267).Z})),(0,l.kt)("h3",{id:"g3-instance-types"},"G3 instance types"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2604).Z})),(0,l.kt)("h3",{id:"t2-instance-types"},"T2 instance types"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8494).Z})),(0,l.kt)("p",null,"Please note: Costs seen in the various screens in product are an estimation"))}c.isMDXComponent=!0},2604:function(t,e,a){e.Z=a.p+"assets/images/g3-instance-types-e8e9ddd68568c5f9f58405d91336a564.png"},4267:function(t,e,a){e.Z=a.p+"assets/images/g4-instance-types-d6cac84f9618975af837cf4cc04ca766.png"},1276:function(t,e,a){e.Z=a.p+"assets/images/p2-instance-types-cf9521ee0ca91865c0874775d764a31f.png"},8715:function(t,e,a){e.Z=a.p+"assets/images/p3-instance-types-1654f53316f50456a0e69579c8a2a278.png"},8494:function(t,e,a){e.Z=a.p+"assets/images/t2-instance-types-de281e9988ab740bdd59d1491a2d1d38.png"}}]);