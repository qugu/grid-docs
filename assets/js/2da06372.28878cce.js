"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5741],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={description:"Use your own Dockerfile files when creating experiments in Grid."},s="Running Experiments With a Dockerfile",u={unversionedId:"features/runs/running-experiments-with-a-dockerfile",id:"features/runs/running-experiments-with-a-dockerfile",title:"Running Experiments With a Dockerfile",description:"Use your own Dockerfile files when creating experiments in Grid.",source:"@site/docs/features/runs/running-experiments-with-a-dockerfile.md",sourceDirName:"features/runs",slug:"/features/runs/running-experiments-with-a-dockerfile",permalink:"/features/runs/running-experiments-with-a-dockerfile",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/running-experiments-with-a-dockerfile.md",tags:[],version:"current",lastUpdatedAt:1648786844,formattedLastUpdatedAt:"4/1/2022",frontMatter:{description:"Use your own Dockerfile files when creating experiments in Grid."},sidebar:"tutorialSidebar",previous:{title:"Using YAML",permalink:"/features/runs/yaml-configs/yaml-api"},next:{title:"Multi-node training (Beta)",permalink:"/features/runs/multi-node"}},c=[{value:"Step 0: Create a Dockerfile",id:"step-0-create-a-dockerfile",children:[],level:3},{value:"Step 1: Create a Run",id:"step-1-create-a-run",children:[],level:3},{value:"Step 2: View Build Logs",id:"step-2-view-build-logs",children:[],level:3},{value:"Reuse Docker Images",id:"reuse-docker-images",children:[],level:2},{value:"Testing Your Dockerfile Locally",id:"testing-your-dockerfile-locally",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-experiments-with-a-dockerfile"},"Running Experiments With a Dockerfile"),(0,a.kt)("p",null,"Grid supports the creation of Runs using ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," files. Dockerfiles are a container specification that determines how images are be built. You can find documentation about Dockerfiles ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder"},"here"),". When using this option, the requirements.txt file in the root project directory is ignored unless explicity stated in a RUN command within the Dockerfile."),(0,a.kt)("h3",{id:"step-0-create-a-dockerfile"},"Step 0: Create a Dockerfile"),(0,a.kt)("p",null,"Here's an example repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"}," .\n\u251c\u2500\u2500 Dockerfile\n\u2514\u2500\u2500 run.py      # Script we want to run\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," must be valid in order for it to work. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# base image you want to use\n# make sure to use a CUDA image if running on GPUs\n# FROM nvidia/cuda:XX.X-cudnnX-devel-ubuntuXX.XX\nFROM python:3.9.6-slim\n\n# these two lines are mandatory\nWORKDIR /gridai/project\nCOPY . .\n\n# any RUN commands you'd like to run\n# use this to install dependencies\nRUN pip install pytorch-lightning && \\\n    apt install curl -y\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Two lines are mandatory:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"WORKDIR /gridai/project"))," : determines which WORKDIR to use. Grid expects your executable to be found in this directory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"COPY . .")," :")," copies all your repository files into the image.")),(0,a.kt)("p",{parentName:"div"},"Everything else is up to you."))),(0,a.kt)("h3",{id:"step-1-create-a-run"},"Step 1: Create a Run"),(0,a.kt)("p",null,"You will need to create a run using the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--dockerfile")," where you pass the location of your Dockerfile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ grid run --dockerfile Dockerfile --localdir run.py\n\u2819 Submitting Run divergent-piculet-508 ...\nupload \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100.0%\n\u2826 Making query to Grid\n                    Run submitted!\n                    `grid status` to list all runs\n                    `grid status divergent-piculet-508` to see all experiments for this run\n\n                    ----------------------\n                    Submission summary\n                    ----------------------\n                    script:                  run.py\n                    instance_type:           t2.medium\n                    use_spot:                False\n                    cloud_provider:          aws\n                    cloud_credentials:       cc-grv4f\n                    grid_name:               divergent-piculet-508\n                    datastore_name:          None\n                    datastore_version:       None\n                    datastore_mount_dir:     None\n")),(0,a.kt)("h3",{id:"step-2-view-build-logs"},"Step 2: View Build Logs"),(0,a.kt)("p",null,"Then you are able to follow both build and experiment logs with the CLI or web UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# shows last 10 lines\n# experiment has run successfully\n$ grid logs divergent-piculet-508-exp0 -l 10 --show-build-logs\n\n\u280b Fetching logs ...GraphQL URL: https://staging.grid.ai/graphql\n[build] [2021-06-30T21:55:58.139136+00:00]   Stored in directory: /root/.cache/pip/wheels/2f/a0/d3/4030d9f80e6b3be787f19fc911b8e7aa462986a40ab1e4bb94\n[build] [2021-06-30T21:55:58.142745+00:00] Successfully built future\n[build] [2021-06-30T21:55:58.437950+00:00] Installing collected packages: urllib3, pyasn1, idna, chardet, certifi, six, rsa, requests, pyasn1-modules, oauthlib, multidict, cachetools, yarl, typing-extensions, requests-oauthlib, pyparsing, google-auth, attrs, async-timeout, werkzeug, torch, tensorboard-plugin-wit, protobuf, packaging, numpy, markdown, grpcio, google-auth-oauthlib, fsspec, aiohttp, absl-py, tqdm, torchmetrics, tensorboard, PyYAML, pyDeprecate, future, pytorch-lightning\n[build] [2021-06-30T21:56:17.643380+00:00] Successfully installed PyYAML-5.4.1 absl-py-0.13.0 aiohttp-3.7.4.post0 async-timeout-3.0.1 attrs-21.2.0 cachetools-4.2.2 certifi-2021.5.30 chardet-4.0.0 fsspec-2021.6.1 future-0.18.2 google-auth-1.32.1 google-auth-oauthlib-0.4.4 grpcio-1.38.1 idna-2.10 markdown-3.3.4 multidict-5.1.0 numpy-1.21.0 oauthlib-3.1.1 packaging-20.9 protobuf-3.17.3 pyDeprecate-0.3.0 pyasn1-0.4.8 pyasn1-modules-0.2.8 pyparsing-2.4.7 pytorch-lightning-1.3.7.post0 requests-2.25.1 requests-oauthlib-1.3.0 rsa-4.7.2 six-1.16.0 tensorboard-2.4.1 tensorboard-plugin-wit-1.8.0 torch-1.9.0 torchmetrics-0.4.0 tqdm-4.61.1 typing-extensions-3.10.0.0 urllib3-1.26.6 werkzeug-2.0.1 yarl-1.6.3\n[build] [2021-06-30T21:56:17.643396+00:00] WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv\n[build] [2021-06-30T21:56:18.023729+00:00] INFO[0046] Taking snapshot of full filesystem...\n[build] [2021-06-30T21:57:08.467108+00:00] INFO[0096] Pushing layer 302180240179.dkr.ecr.us-east-1.amazonaws.com/grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32:a0beb2d8d5c91e8e9c636fbf169c1b09e4e4814adab8b4ab36531c8ec69c0bd0 to cache now\n[build] [2021-06-30T21:57:08.467247+00:00] WARN[0096] error uploading layer to cache: getting tag for destination: repository can only contain the runes `abcdefghijklmnopqrstuvwxyz0123456789_-./`: grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32\n[build] [2021-06-30T21:57:08.729481+00:00] INFO[0097] Pushing image to 302180240179.dkr.ecr.us-east-1.amazonaws.com/grid-cloud-staging:e8a29581-0515-43c9-b675-4d69fd192f32\n[build] [2021-06-30T21:58:40.454430+00:00] INFO[0188] Pushed image to 1 destinations\n[experiment] [2021-06-30T22:12:07.252114+00:00] Loop 90\n[experiment] [2021-06-30T22:12:07.252118+00:00] Loop 91\n[experiment] [2021-06-30T22:12:07.252121+00:00] Loop 92\n[experiment] [2021-06-30T22:12:07.252125+00:00] Loop 93\n[experiment] [2021-06-30T22:12:07.252129+00:00] Loop 94\n[experiment] [2021-06-30T22:12:07.252132+00:00] Loop 95\n[experiment] [2021-06-30T22:12:07.252136+00:00] Loop 96\n[experiment] [2021-06-30T22:12:07.252142+00:00] Loop 97\n[experiment] [2021-06-30T22:12:07.252146+00:00] Loop 98\n[experiment] [2021-06-30T22:12:07.252150+00:00] Loop 99\n")),(0,a.kt)("h2",{id:"reuse-docker-images"},"Reuse Docker Images"),(0,a.kt)("p",null,"After creating a Run, Grid will store the image for 1 week. This is especially useful when your Run image has a lot of dependencies and takes a long time to build. You can take full advantage of this by taking the push ref and using it in the FROM statement within your Dockerfile. Be sure to include the mandatory lines as noted below in the example. You can find the push ref with the following syntax."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'grid logs --show-build-logs <run-name>-exp0 | grep "pushing manifest" | head -n 1')),(0,a.kt)("p",null,'For example with a run named "foo" you can extract the image reference with the following code.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'grid logs --show-build-logs foo-exp0 | grep "pushing manifest" | head -n 1')),(0,a.kt)("p",null,"This will result in output similar to the following:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[build] [2022-03-21T18:21:12.800584+00:00] #8 pushing manifest for 302180240179.dkr.ecr.us-east-1.amazonaws.com/prod-2:01fyptkm18naj1mdye64eqws2p@sha256:e142c254d19c8c858bf52b938858d047d13a015998b9bf3f5d2baadce9a187ea")),(0,a.kt)("p",null,"Take the full ECR address as the FROM reference within your Dockerfile. In this example your Dockerfile would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM 302180240179.dkr.ecr.us-east-1.amazonaws.com/prod-2:01fyptkm18naj1mdye64eqws2p@sha256:e142c254d19c8c858bf52b938858d047d13a015998b9bf3f5d2baadce9a187ea\n\n# these two lines are mandatory\nWORKDIR /gridai/project\nCOPY . .\n")),(0,a.kt)("h2",{id:"testing-your-dockerfile-locally"},"Testing Your Dockerfile Locally"),(0,a.kt)("p",null,"It is a good idea to test that your ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," builds locally before sending it to Grid. This may allow you to iterate quickly over a set of configurations that work before submitting experiments."),(0,a.kt)("p",null,"You can do that by building it with Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"docker build --tag test-image .\n")),(0,a.kt)("p",null,"If the image builds, your ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is correctly defined."),(0,a.kt)("p",null,"After building your image, make sure to also test that your script works as expected inside of it. For example, if your script is called ",(0,a.kt)("inlineCode",{parentName:"p"},"model.py")," then you would want to test your new image with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"docker run test-image python model.py\n")),(0,a.kt)("p",null,"Grid will be running a similar process in the backend, so if this works locally in our machine chances are that it will also run successfully on Grid."))}d.isMDXComponent=!0}}]);