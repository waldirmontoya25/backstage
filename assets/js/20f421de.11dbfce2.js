/*! For license information please see 20f421de.11dbfce2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[525299],{130897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin"},a=void 0,s={unversionedId:"plugins/structure-of-a-plugin",id:"plugins/structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin",source:"@site/../docs/plugins/structure-of-a-plugin.md",sourceDirName:"plugins",slug:"/plugins/structure-of-a-plugin",permalink:"/docs/plugins/structure-of-a-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/structure-of-a-plugin.md",tags:[],version:"current",frontMatter:{id:"structure-of-a-plugin",title:"Structure of a Plugin",description:"Details about structure of a plugin"},sidebar:"docs",previous:{title:"Plugin Development",permalink:"/docs/plugins/plugin-development"},next:{title:"Integrate into the Software Catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog"}},u={},l=[{value:"Folder structure",id:"folder-structure",level:2},{value:"Base files",id:"base-files",level:2},{value:"The plugin file",id:"the-plugin-file",level:2},{value:"Components",id:"components",level:2},{value:"Connecting the plugin to the Backstage app",id:"connecting-the-plugin-to-the-backstage-app",level:2},{value:"Talking to the outside world",id:"talking-to-the-outside-world",level:2}];function c(e){const t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",a:"a",ol:"ol",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Nice, you have a new plugin! We'll soon see how we can develop it into doing\ngreat things. But first off, let's look at what we get out of the box."}),"\n",(0,r.jsx)(t.h2,{id:"folder-structure",children:"Folder structure"}),"\n",(0,r.jsx)(t.p,{children:"The new plugin should look something like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"new-plugin/\n    dev/\n        index.ts\n    node_modules/\n    src/\n        components/\n            ExampleComponent/\n                ExampleComponent.test.tsx\n                ExampleComponent.tsx\n                index.ts\n            ExampleFetchComponent/\n                ExampleFetchComponent.test.tsx\n                ExampleFetchComponent.tsx\n                index.ts\n        index.ts\n        plugin.test.ts\n        plugin.ts\n        routes.ts\n        setupTests.ts\n    .eslintrc.js\n    package.json\n    README.md\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You might note a thing or two. Yes, a plugin looks like a mini project on it's\nown with a ",(0,r.jsx)(t.code,{children:"package.json"})," and a ",(0,r.jsx)(t.code,{children:"src"})," folder. And this is because we want\nplugins to be separate packages. This makes it possible to ship plugins on npm\nand it lets you work on a plugin in isolation, without loading all the other\nplugins in a potentially big Backstage app."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"index.ts"})," files are there to let us import from the folder path and not\nspecific files. It's a way to have control over the exports in one file per\nfolder."]}),"\n",(0,r.jsx)(t.h2,{id:"base-files",children:"Base files"}),"\n",(0,r.jsx)(t.p,{children:"You get a readme to populate with info about your plugin and a\npackage.json to declare the plugin dependencies, metadata and scripts."}),"\n",(0,r.jsx)(t.h2,{id:"the-plugin-file",children:"The plugin file"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"src"})," folder we get to the interesting bits. Check out the ",(0,r.jsx)(t.code,{children:"plugin.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import {\n  createPlugin,\n  createRoutableExtension,\n} from '@backstage/core-plugin-api';\n\nimport { rootRouteRef } from './routes';\n\nexport const examplePlugin = createPlugin({\n  id: 'example',\n  routes: {\n    root: rootRouteRef,\n  },\n});\n\nexport const ExamplePage = examplePlugin.provide(\n  createRoutableExtension({\n    name: 'ExamplePage',\n    component: () =>\n      import('./components/ExampleComponent').then(m => m.ExampleComponent),\n    mountPoint: rootRouteRef,\n  }),\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is where the plugin is created and where it creates and exports extensions\nthat can be imported and used the app. See reference docs for\n",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,r.jsx)(t.code,{children:"createPlugin"})})," or introduction to\nthe new ",(0,r.jsx)(t.a,{href:"/docs/plugins/composability",children:"Composability System"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(t.p,{children:"The generated plugin includes two example components to showcase how we\nstructure our plugins. There are usually one or multiple page components and\nnext to them you can split up the UI in as many components as you feel like."}),"\n",(0,r.jsxs)(t.p,{children:["We have the ",(0,r.jsx)(t.code,{children:"ExampleComponent"})," to show an example Backstage page component. The\n",(0,r.jsx)(t.code,{children:"ExampleFetchComponent"})," showcases the common task of making an async request to\na public API and plot the response data in a table using Material-UI components."]}),"\n",(0,r.jsx)(t.p,{children:"You may tweak these components, rename them and/or replace them completely."}),"\n",(0,r.jsx)(t.h2,{id:"connecting-the-plugin-to-the-backstage-app",children:"Connecting the plugin to the Backstage app"}),"\n",(0,r.jsx)(t.p,{children:"There are two things needed for a Backstage app to start making use of a plugin."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add plugin as dependency in ",(0,r.jsx)(t.code,{children:"app/package.json"})]}),"\n",(0,r.jsxs)(t.li,{children:["Import and use one or more plugin extensions, for example in\n",(0,r.jsx)(t.code,{children:"app/src/App.tsx"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Luckily both of these steps happen automatically when you create a plugin with\nthe Backstage CLI."}),"\n",(0,r.jsx)(t.h2,{id:"talking-to-the-outside-world",children:"Talking to the outside world"}),"\n",(0,r.jsxs)(t.p,{children:["If your plugin needs to communicate with services outside the Backstage\nenvironment you will probably face challenges like CORS policies and/or\nbackend-side authorization. To smooth this process out you can use proxy -\neither the one you already have (like Nginx, HAProxy, etc.) or the proxy-backend\nplugin that we provide for the Backstage backend.\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/proxy-backend/README.md",children:"Read more"})]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(s[l]=i[l]);if(t){a=t(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,u=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),s=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=x.prototype=new y;v.constructor=x,r(v,m.prototype),v.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===r?"."+E(u,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),O(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+E(s=e[l],l);u+=O(s,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(s=e.next()).done;)u+=O(s=s.value,t,n,c=r+E(s,l++),a);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=x,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var i=r({},e.props),a=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var p=0;p<c;p++)l[p]=arguments[p+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);