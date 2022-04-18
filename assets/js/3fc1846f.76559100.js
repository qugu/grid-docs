"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3101],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1038:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={title:"Creating Datastores",sidebar_label:"Creating Datastores"},l="Create Datastores",c={unversionedId:"features/datastores/Using Datastores/creating-datastores",id:"features/datastores/Using Datastores/creating-datastores",title:"Creating Datastores",description:"Datastores can be created from a local filesystem, HTTP URL, and S3 Bucket.",source:"@site/docs/features/datastores/2_Using Datastores/2_creating-datastores.md",sourceDirName:"features/datastores/2_Using Datastores",slug:"/features/datastores/Using Datastores/creating-datastores",permalink:"/features/datastores/Using Datastores/creating-datastores",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/2_Using Datastores/2_creating-datastores.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Creating Datastores",sidebar_label:"Creating Datastores"},sidebar:"tutorialSidebar",previous:{title:"How to use Datastores",permalink:"/features/datastores/Using Datastores/How-to-use-datastores"},next:{title:"Viewing Datastore Status",permalink:"/features/datastores/Using Datastores/inspecting_status"}},d=[{value:"Uploading Files from a Computer",id:"uploading-files-from-a-computer",children:[{value:"Small datasets",id:"small-datasets",children:[],level:3},{value:"Large datasets (1 GB+)",id:"large-datasets-1-gb",children:[],level:3}],level:2},{value:"Create From a Public S3 Bucket",id:"create-from-a-public-s3-bucket",children:[{value:"Using the UI",id:"using-the-ui",children:[],level:3},{value:"Using the CLI",id:"using-the-cli",children:[],level:3}],level:2},{value:"Create from an HTTP URL",id:"create-from-an-http-url",children:[{value:"Using the UI",id:"using-the-ui-1",children:[],level:3},{value:"From the CLI",id:"from-the-cli",children:[],level:3}],level:2},{value:"Create from a Session",id:"create-from-a-session",children:[{value:"Upload via Interactive Session",id:"upload-via-interactive-session",children:[],level:3},{value:"Screen",id:"screen",children:[],level:3}],level:2},{value:"Create from a Cluster",id:"create-from-a-cluster",children:[{value:"Upload from a cluster",id:"upload-from-a-cluster",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-datastores"},"Create Datastores"),(0,i.kt)("p",null,"Datastores can be created from a local filesystem, HTTP URL, and S3 Bucket. "),(0,i.kt)("h2",{id:"uploading-files-from-a-computer"},"Uploading Files from a Computer"),(0,i.kt)("h3",{id:"small-datasets"},"Small datasets"),(0,i.kt)("p",null,"You can use the UI to create Datastores for datasets smaller than 1GB (files or folder).\nWe have noticed that when the Datastore sizes are 1GB+ you start to hit the browser limit\nfor uploading data. In such situations we advise using the CLI to create Datastores."),(0,i.kt)("p",null,"Select the file or folder and click upload."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(310).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also use the CLI for uploading these datastores!"))),(0,i.kt)("h3",{id:"large-datasets-1-gb"},"Large datasets (1 GB+)"),(0,i.kt)("p",null,"For datasets larger than 1 GB, use the CLI."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have a dataset that is 1Gb+ and poor-average internet connection, we suggest starting an Interactive Session and creating the Datastore from there. Internet speed is much faster in Interactive Sessions, so upload times will be shorter. "))),(0,i.kt)("p",null,"First, install the grid CLI and login:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install lightning-grid --upgrade\ngrid login\n")),(0,i.kt)("p",null,"Next, use the Datastores command to upload any folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create --name imagenet ./imagenet_folder/ \n")),(0,i.kt)("p",null,"This method can work from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A laptop."),(0,i.kt)("li",{parentName:"ul"},"An interactive session."),(0,i.kt)("li",{parentName:"ul"},"Any machine with an internet connection and Grid installed."),(0,i.kt)("li",{parentName:"ul"},"A corporate cluster."),(0,i.kt)("li",{parentName:"ul"},"An academic cluster.")),(0,i.kt)("h1",{id:"creating-datastores-from-an-s3-bucket"},"Creating Datastores from an S3 Bucket"),(0,i.kt)("h2",{id:"create-from-a-public-s3-bucket"},"Create From a Public S3 Bucket"),(0,i.kt)("p",null,"Any public ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3")," bucket can be used to create datastores on\nthe grid public cloud or on a BYOC cluster by using the grid CLI or UI. "),(0,i.kt)("h3",{id:"using-the-ui"},"Using the UI"),(0,i.kt)("p",null,'Click New --\x3e Datastore and choose "URL" as the upload mechanism.\nProvide the S3 bucket URL as the source. '),(0,i.kt)("h3",{id:"using-the-cli"},"Using the CLI"),(0,i.kt)("p",null,"In order to use the CLI to create a datastore from an S3 bucket, we simply need to pass a\nS3 URL in the form ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://<bucket-name>/<any-desired-subpaths>/")," to the\n",(0,i.kt)("a",{parentName:"p",href:"/cli#create"},(0,i.kt)("inlineCode",{parentName:"a"},"grid datastore create"))," command. "),(0,i.kt)("p",null,"For example, to create a datastore from the ",(0,i.kt)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/buckets/ryft-public-sample-data?region=us-east-1&prefix=esRedditJson/&showversions=false"},(0,i.kt)("inlineCode",{parentName:"a"},"ryft-public-sample-data/esRedditJson"),"\nbucket"),"\nwe simply execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create s3://ryft-public-sample-data/esRedditJson/\n")),(0,i.kt)("p",null,"Which will copy the files from the source bucket into the managed Grid Datastore storage\nsystem. "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the above example, you'll see that we omitted the ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," option in the CLI command.\nWhen the ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),' option is omitted, the datastore name is assigned the name of the last\n"directory" making up the source path. So in the case above, the datastore would be named\n',(0,i.kt)("inlineCode",{parentName:"p"},'"esredditjson"')," (the name is converted to all lowercase ASCII non-space characters). "),(0,i.kt)("p",{parentName:"div"},"If we we wanted to use a different name, we can override the implicit naming by passing\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," option / value parameter explicitly. As an example, if we wanted to create a\ndatastore from this bucket named ",(0,i.kt)("inlineCode",{parentName:"p"},'"lightning-train-data"')," we could execute:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create s3://ryft-public-sample-data/esRedditJson/ --name lightning-train-data\n")))),(0,i.kt)("h2",{id:"create-from-an-http-url"},"Create from an HTTP URL"),(0,i.kt)("p",null,"Datastores can be created from a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".tar.gz")," file accessible at an unauthenticated\nHTTP URL. By using an HTTP URL pointing to an archive file as the source of a Grid\nDatastore, the platform will automatically kick off a (server-side) process which\ndownloads the file, extracts the contents, and sets up a datastore file directory\nstructure matching the extracted contents of the archive. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This mechanism of creating a Datastore is the only one which will implicitly process the\nspecified files into a different form / structure than they were originally in. By this,\nwe mean to say that since it's only ever possible to get a single compressed archive file\nfrom a URL, we think it's fair to make the assumption that what you actually want is the\nextracted contents of the archive, not the archive file itself. "),(0,i.kt)("p",{parentName:"div"},"Said another way: if you were to upload a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".tar.gz")," file from your local\ncomputer, or specify an S3 bucket which contained a single archive, we would NOT extract\nthis file since it's assumed that you are able to process the data into the structure you\nactually need before creating the Datastore. If you sent us a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file via these\nmethods, you would get a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file in the Datastore mount path. "))),(0,i.kt)("h3",{id:"using-the-ui-1"},"Using the UI"),(0,i.kt)("p",null,'Click New --\x3e Datastore and choose "URL" as the upload mechanism.\nProvide the HTTP URL as the source. '),(0,i.kt)("h3",{id:"from-the-cli"},"From the CLI"),(0,i.kt)("p",null,"In order to use the CLI to create a datastore from an HTTP URL, we simply need to pass a\nURL which begins with either ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," to the ",(0,i.kt)("a",{parentName:"p",href:"/cli#create"},(0,i.kt)("inlineCode",{parentName:"a"},"grid datastore\ncreate"))," command."),(0,i.kt)("p",null,"For example, to create a datastore from the the MNIST training set at:\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://datastore-public-bucket-access-test-bucket.s3.amazonaws.com/subfolder/trainingSet.tar.gz"),"\nwe simply execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create https://datastore-public-bucket-access-test-bucket.s3.amazonaws.com/subfolder/trainingSet.tar.gz\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the above example, you'll see that we omitted the ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," option in the CLI command.\nWhen the ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," option is omitted, the datastore name is assigned from the last ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),"\ncomponent of the URL (with suffixes stripped). So in the case above, the datastore would be named\n",(0,i.kt)("inlineCode",{parentName:"p"},'"trainingset"')," (the name is converted to all lowercase ASCII non-space characters). "),(0,i.kt)("p",{parentName:"div"},"If we wanted to use a different name, we could override the implicit naming by passing\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," option explicitly. As an example, if we wanted to create a\ndatastore from this bucket named ",(0,i.kt)("inlineCode",{parentName:"p"},'"lightning-train-data"')," we could execute:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create https://datastore-public-bucket-access-test-bucket.s3.amazonaws.com/subfolder/trainingSet.tar.gz --name lightning-train-data\n")))),(0,i.kt)("h2",{id:"create-from-a-session"},"Create from a Session"),(0,i.kt)("h3",{id:"upload-via-interactive-session"},"Upload via Interactive Session"),(0,i.kt)("p",null,"For huge datasets that need processing or a lot of manual work, we recommend this flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launch an ",(0,i.kt)("a",{parentName:"li",href:"/features/sessions/"},"Interactive Session")),(0,i.kt)("li",{parentName:"ul"},"Download the data"),(0,i.kt)("li",{parentName:"ul"},"Process it"),(0,i.kt)("li",{parentName:"ul"},"Upload")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4548).Z})),(0,i.kt)("h3",{id:"screen"},"Screen"),(0,i.kt)("p",null,"When you are in the interactive Session, use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/manual/screen.html"},"terminal multiplexer\n",(0,i.kt)("inlineCode",{parentName:"a"},"Screen"))," to make sure you don't\ninterrupt your upload session if your local machine is shut down or experiences network\ninterruptions. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# start screen (lets you close the tab without killing the process)\nscreen -S some_name\n")),(0,i.kt)("p",null,"now do whatever processing you need:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# download, etc...\ncurl http://a_dataset\nunzip a_dataset\n\n# process\ndo_something\nsomething_else\nbash process.sh\n...\n")),(0,i.kt)("p",null,"When you're done, upload to Grid via the CLI (on the Interactive Session):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create imagenet_folder --name imagenet\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Grid CLI is auto-installed on sessions and you are automatically logged in with your Grid credentials. "))),(0,i.kt)("h2",{id:"create-from-a-cluster"},"Create from a Cluster"),(0,i.kt)("h3",{id:"upload-from-a-cluster"},"Upload from a cluster"),(0,i.kt)("p",null,"Use these instructions to upload from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A corporate cluster."),(0,i.kt)("li",{parentName:"ul"},"An academic cluster.")),(0,i.kt)("p",null,"First, start screen on the jump node (to run jobs in the background)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"screen -S upload\n")),(0,i.kt)("p",null,"If your jump node allows a memory-intensive process, then skip this step. Otherwise,\nrequest an interactive machine. Here's an example using\n",(0,i.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/documentation.html"},"SLURM"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"srun --qos=batch --mem-per-cpu=10000 --ntasks=4 --time=12:00:00 --pty bash\n")),(0,i.kt)("p",null,"Once the job starts, install and log into Grid (get your username and ssh keys from the\n",(0,i.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/settings"},"settings page"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# install\npip install lightning-grid --upgrade\n\n# login\ngrid login --username YOUR_USERNAME --key YOUR_KEY\n")),(0,i.kt)("p",null,"Next, use the Datastores command to upload any folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create ./imagenet_folder/ --name imagenet\n")),(0,i.kt)("p",null,"You can safely close your SSH connection to the cluster (the screen will keep things\nrunning in the background)."))}m.isMDXComponent=!0},310:function(e,t,a){t.Z=a.p+"assets/images/ds_upload-a8d2254f80a929fbffcf18597604a088.gif"},4548:function(e,t,a){t.Z=a.p+"assets/images/upload_datastore_from_session-479a0231868163018c3142ddcaa974ee.gif"}}]);