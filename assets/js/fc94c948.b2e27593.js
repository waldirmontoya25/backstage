/*! For license information please see fc94c948.b2e27593.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[928122],{504774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(824246),o=r(511151);const i={id:"discovery",title:"Azure DevOps Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in an Azure DevOps organization"},s=void 0,a={unversionedId:"integrations/azure/discovery",id:"integrations/azure/discovery",title:"Azure DevOps Discovery",description:"Automatically discovering catalog entities from repositories in an Azure DevOps organization",source:"@site/../docs/integrations/azure/discovery.md",sourceDirName:"integrations/azure",slug:"/integrations/azure/discovery",permalink:"/docs/integrations/azure/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/azure/discovery.md",tags:[],version:"current",frontMatter:{id:"discovery",title:"Azure DevOps Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in an Azure DevOps organization"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/azure/locations"},next:{title:"Org Data",permalink:"/docs/integrations/azure/org"}},c={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Code Search Feature",id:"code-search-feature",level:3},{value:"Azure Integration",id:"azure-integration",level:3},{value:"Installation",id:"installation",level:2},{value:"Alternative Processor",id:"alternative-processor",level:2}];function u(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",em:"em",ol:"ol"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Azure DevOps integration has a special entity provider for discovering\ncatalog entities within an Azure DevOps. The provider will crawl your Azure\nDevOps organization and register entities matching the configured path. This can\nbe useful as an alternative to static locations or manually adding things to the\ncatalog."}),"\n",(0,t.jsx)(n.p,{children:"This guide explains how to install and configure the Azure DevOps Entity Provider (recommended) or the Azure DevOps Processor."}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"code-search-feature",children:"Code Search Feature"}),"\n",(0,t.jsx)(n.p,{children:"Azure discovery is driven by the Code Search feature in Azure DevOps, this may not be enabled by default. For Azure\nDevOps Services you can confirm this by looking at the installed extensions in your Organization Settings. For Azure\nDevOps Server you'll find this information in your Collection Settings."}),"\n",(0,t.jsxs)(n.p,{children:["If the Code Search extension is not listed then you can install it from the ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search&targetId=f9352dac-ba6e-434e-9241-a848a510ce3f&utm_source=vstsproduct&utm_medium=SearchExtStatus",children:"Visual Studio Marketplace"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"azure-integration",children:"Azure Integration"}),"\n",(0,t.jsxs)(n.p,{children:["Setup ",(0,t.jsx)(n.a,{href:"/docs/integrations/azure/locations",children:"Azure integration"})," with ",(0,t.jsx)(n.code,{children:"host"})," and ",(0,t.jsx)(n.code,{children:"token"}),". Host must be ",(0,t.jsx)(n.code,{children:"dev.azure.com"})," for Cloud users, otherwise set this to your on-premise hostname."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"At your configuration, you add one or more provider configs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    azureDevOps:\n      yourProviderId: # identifies your dataset / provider independent of config changes\n        organization: myorg\n        project: myproject\n        repository: service-* # this will match all repos starting with service-*\n        path: /catalog-info.yaml\n        schedule: # optional; same options as in TaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n      yourSecondProviderId: # identifies your dataset / provider independent of config changes\n        organization: myorg\n        project: '*' # this will match all projects\n        repository: '*' # this will match all repos\n        path: /catalog-info.yaml\n      anotherProviderId: # another identifier\n        organization: myorg\n        project: myproject\n        repository: '*' # this will match all repos\n        path: /src/*/catalog-info.yaml # this will search for files deep inside the /src folder\n      yetAnotherProviderId: # guess, what? Another one :)\n        host: selfhostedazure.yourcompany.com\n        organization: myorg\n        project: myproject\n        branch: development\n"})}),"\n",(0,t.jsx)(n.p,{children:"The parameters available are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"host:"})})," ",(0,t.jsx)(n.em,{children:"(optional)"})," Leave empty for Cloud hosted, otherwise set to your self-hosted instance host."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"organization:"})})," Your Organization slug (or Collection for on-premise users). Required."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"project:"})})," ",(0,t.jsx)(n.em,{children:"(required)"})," Your project slug. Wildcards are supported as shown on the examples above. Using '*' will search all projects. For a project name containing spaces, use both single and double quotes as in ",(0,t.jsx)(n.code,{children:"project: '\"My Project Name\"'"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"repository:"})})," ",(0,t.jsx)(n.em,{children:"(optional)"})," The repository name. Wildcards are supported as show on the examples above. If not set, all repositories will be searched."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"path:"})})," ",(0,t.jsx)(n.em,{children:"(optional)"})," Where to find catalog-info.yaml files. Defaults to /catalog-info.yaml."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"branch:"})})," ",(0,t.jsx)(n.em,{children:"(optional)"})," The branch name to use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"schedule"})})," ",(0,t.jsx)(n.em,{children:"(optional)"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"initialDelay"})})," ",(0,t.jsx)(n.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"scope"})})," ",(0,t.jsx)(n.em,{children:"(optional)"}),":\n",(0,t.jsx)(n.code,{children:"'global'"})," or ",(0,t.jsx)(n.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The path parameter follows the same rules as the search on Azure DevOps web interface. For more details visit the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/devops/project/search/get-started-search?view=azure-devops",children:"official search documentation"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'To use branch parameters, it is necessary that the desired branch be added to the "Searchable branches" list within Azure DevOps Repositories. To do this, follow the instructions below:'}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Access your Azure DevOps and open the repository in which you want to add the branch."}),"\n",(0,t.jsx)(n.li,{children:'Click on "Settings" in the lower-left corner of the screen.'}),"\n",(0,t.jsx)(n.li,{children:'Select the "Options" option in the left navigation bar.'}),"\n",(0,t.jsx)(n.li,{children:'In the "Searchable branches" section, click on the "Add" button to add a new branch.'}),"\n",(0,t.jsx)(n.li,{children:'In the window that appears, enter the name of the branch you want to add and click "Add".'}),"\n",(0,t.jsx)(n.li,{children:'The added branch will now appear in the "Searchable branches" list.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As this provider is not one of the default providers, you will first need to install\nthe Azure catalog plugin:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-azure\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once you've done that, you'll also need to add the segment below to ",(0,t.jsx)(n.code,{children:"packages/backend/src/plugins/catalog.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { AzureDevOpsEntityProvider } from '@backstage/plugin-catalog-backend-module-azure';\n\nconst builder = await CatalogBuilder.create(env);\n/** ... other processors and/or providers ... */\n/* highlight-add-start */\nbuilder.addEntityProvider(\n  AzureDevOpsEntityProvider.fromConfig(env.config, {\n    logger: env.logger,\n    // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n    schedule: env.scheduler.createScheduledTaskRunner({\n      frequency: { minutes: 30 },\n      timeout: { minutes: 3 },\n    }),\n    // optional: alternatively, use schedule\n    scheduler: env.scheduler,\n  }),\n);\n/* highlight-add-end */\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alternative-processor",children:"Alternative Processor"}),"\n",(0,t.jsxs)(n.p,{children:["As an alternative to the entity provider ",(0,t.jsx)(n.code,{children:"AzureDevOpsEntityProvider"}),", you can still use the ",(0,t.jsx)(n.code,{children:"AzureDevopsDiscoveryProcessor"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { AzureDevOpsDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-azure';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-next-line */\n  builder.addProcessor(\n    AzureDevOpsDiscoveryProcessor.fromConfig(env.config, {\n      logger: env.logger,\n    }),\n  );\n\n  // ..\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"catalog:\n  locations:\n    # Scan all repositories for a catalog-info.yaml in the root of the default branch\n    - type: azure-discovery\n      target: https://dev.azure.com/myorg/myproject\n    # Or use a custom pattern for a subset of all repositories with default repository\n    - type: azure-discovery\n      target: https://dev.azure.com/myorg/myproject/_git/service-*\n    # Or use a custom file format and location\n    - type: azure-discovery\n      target: https://dev.azure.com/myorg/myproject/_git/*?path=/src/*/catalog-info.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note the ",(0,t.jsx)(n.code,{children:"azure-discovery"})," type, as this is not a regular ",(0,t.jsx)(n.code,{children:"url"})," processor."]}),"\n",(0,t.jsx)(n.p,{children:"When using a custom pattern, the target is composed of five parts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The base instance URL, ",(0,t.jsx)(n.code,{children:"https://dev.azure.com"})," in this case"]}),"\n",(0,t.jsxs)(n.li,{children:["The organization name which is required, ",(0,t.jsx)(n.code,{children:"myorg"})," in this case"]}),"\n",(0,t.jsxs)(n.li,{children:["The project name which is optional, ",(0,t.jsx)(n.code,{children:"myproject"})," in this case. This defaults to *, which scans all the projects where the token has access to."]}),"\n",(0,t.jsxs)(n.li,{children:["The repository blob to scan, which accepts * wildcard tokens and must be\nadded after ",(0,t.jsx)(n.code,{children:"_git/"}),". This can simply be ",(0,t.jsx)(n.code,{children:"*"})," to scan all repositories in the\nproject."]}),"\n",(0,t.jsxs)(n.li,{children:["The path within each repository to find the catalog YAML file. This will\nusually be ",(0,t.jsx)(n.code,{children:"/catalog-info.yaml"}),", ",(0,t.jsx)(n.code,{children:"/src/*/catalog-info.yaml"})," or a similar\nvariation for catalog files stored in the root directory of each repository."]}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))r.call(i,l)&&(a[l]=i[l]);if(n){s=n(i);for(var u=0;u<s.length;u++)t.call(i,s[u])&&(a[s[u]]=i[s[u]])}}return a}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,u=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}n.jsx=l,n.jsxs=l},541535:(e,n,r)=>{var t=r(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,a=60110,c=60112;n.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),n.Fragment=d("react.fragment"),n.StrictMode=d("react.strict_mode"),n.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),n.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||f}function m(){}function v(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var j=v.prototype=new m;j.constructor=v,t(j,g.prototype),j.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function z(e,n,r){var t,i={},s=null,a=null;if(null!=n)for(t in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)b.call(n,t)&&!w.hasOwnProperty(t)&&(i[t]=n[t]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(t in c=e.defaultProps)void 0===i[t]&&(i[t]=c[t]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function k(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,r,t,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===t?"."+k(c,0):t,Array.isArray(s)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(s,n,r,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),n.push(s)),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+k(a=e[l],l);c+=S(a,n,r,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=S(a=a.value,n,r,u=t+k(a,l++),s);else if("object"===a)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function A(e,n,r){if(null==e)return e;var t=[],o=0;return S(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function D(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function C(){var e=P.current;if(null===e)throw Error(p(321));return e}var E={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:A,forEach:function(e,n,r){A(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return A(e,(function(){n++})),n},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},n.Component=g,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,n.cloneElement=function(e,n,r){if(null==e)throw Error(p(267,e));var i=t({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,c=x.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)b.call(n,u)&&!w.hasOwnProperty(u)&&(i[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:a,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=z,n.createFactory=function(e){var n=z.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:D}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return C().useCallback(e,n)},n.useContext=function(e,n){return C().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return C().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return C().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return C().useLayoutEffect(e,n)},n.useMemo=function(e,n){return C().useMemo(e,n)},n.useReducer=function(e,n,r){return C().useReducer(e,n,r)},n.useRef=function(e){return C().useRef(e)},n.useState=function(e){return C().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>i});var t=r(667294);const o=t.createContext({});function i(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||s:i(e),t.createElement(o.Provider,{value:a},n)}}}]);