/*! For license information please see 4d57b9a2.5fb7da31.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[475917],{773433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(824246),r=n(511151);const a={id:"migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries."},i=void 0,s={unversionedId:"tutorials/migrating-away-from-core",id:"tutorials/migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries.",source:"@site/../docs/tutorials/migrating-away-from-core.md",sourceDirName:"tutorials",slug:"/tutorials/migrating-away-from-core",permalink:"/docs/tutorials/migrating-away-from-core",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/migrating-away-from-core.md",tags:[],version:"current",frontMatter:{id:"migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries."},sidebar:"docs",previous:{title:"Package Role Migration",permalink:"/docs/tutorials/package-role-migration"},next:{title:"Configuring Plugin Databases",permalink:"/docs/tutorials/configuring-plugin-databases"}},c={},l=[{value:"Migration",id:"migration",level:2},{value:"Step 1 - Run codemod",id:"step-1---run-codemod",level:3},{value:"Step 2 - Update dependencies",id:"step-2---update-dependencies",level:3},{value:"Step 3 - Manual review",id:"step-3---manual-review",level:3},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Removed <code>IconKey</code> type",id:"removed-iconkey-type",level:3},{value:"Constrained <code>IconComponent</code> type",id:"constrained-iconcomponent-type",level:3}];function u(e){const t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"@backstage/core"})," package has been split into three separate packages,\n",(0,o.jsx)(t.code,{children:"@backstage/core-app-api"}),", ",(0,o.jsx)(t.code,{children:"@backstage/core-plugin-api"}),", and\n",(0,o.jsx)(t.code,{children:"@backstage/core-components"}),". For more information about the reasoning behind\nthis change and the naming of the packages, see the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/4872",children:"original RFC"})," and\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/5825",children:"initial PR"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The main purpose of the split is to make plugins more decoupled from the app,\nand open up for the possibility of combining plugins using many different\nversions of the core libraries. This should significantly reduce the maintenance\nburden on plugin authors, as well as reduce the impact of breaking changes in\nthe core APIs."}),"\n",(0,o.jsx)(t.h2,{id:"migration",children:"Migration"}),"\n",(0,o.jsxs)(t.p,{children:["At a high level the migration is done by simply replacing usages of\n",(0,o.jsx)(t.code,{children:"@backstage/core"})," with one or more of the three new core libraries. There are a\nfew breaking changes in the new packages that are listed below, but for most\nplugins the migration is a simple replacement. In order to make the migration as\nsmooth as possible we provide a collection of tools to automate the majority of\nthe migration effort."]}),"\n",(0,o.jsx)(t.p,{children:"Below is a list of steps that should get most projects completely migrated, the\norder of the steps is a recommendation but not required, so don't worry if you\nneed to go back to previous steps to fix things."}),"\n",(0,o.jsx)(t.h3,{id:"step-1---run-codemod",children:"Step 1 - Run codemod"}),"\n",(0,o.jsxs)(t.p,{children:["The first step is to run\n",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/codemods",children:(0,o.jsx)(t.code,{children:"@backstage/codemods"})}),"\nacross your project. This will automatically convert all module imports in your\nsource code to use one of the three new core packages instead. For example, the\nfollowing change might occur:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"/* highlight-remove-next-line */\nimport { useApi, configApiRef, InfoCard } from '@backstage/core';\n/* highlight-add-start */\nimport { useApi, configApiRef } from '@backstage/core-plugin-api';\nimport { InfoCard } from '@backstage/core-components';\n/* highlight-add-end */\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In a typical app created with ",(0,o.jsx)(t.code,{children:"@backstage/create-app"}),", you would run the\nfollowing:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"npx @backstage/codemods apply core-imports packages plugins\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The last two arguments, ",(0,o.jsx)(t.code,{children:"packages"})," and ",(0,o.jsx)(t.code,{children:"plugins"}),", are the folders that the\ncodemod should be applied to. Add or remove folders as needed for your project."]}),"\n",(0,o.jsxs)(t.p,{children:["The codemod might fail for some files because of the missing ",(0,o.jsx)(t.code,{children:"IconKey"})," type in\nany of the new packages. This is one of the few breaking changes. To fix, remove\nany ",(0,o.jsx)(t.code,{children:"IconKey"})," imports and replace usages of it with the ",(0,o.jsx)(t.code,{children:"string"})," type, see the\nbreaking changes section below for details. Once usages of ",(0,o.jsx)(t.code,{children:"IconKey"})," type have\nbeen removed, you can re-run the codemod for those files."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that while the codemod tries to stick to using the existing formatting in\nyour project, it doesn't always manage to do that. If you're using ",(0,o.jsx)(t.code,{children:"prettier"})," to\nformat the code in your project, it's best to run ",(0,o.jsx)(t.code,{children:"prettier --write"})," on any\nfiles that were changed by the codemod."]}),"\n",(0,o.jsx)(t.h3,{id:"step-2---update-dependencies",children:"Step 2 - Update dependencies"}),"\n",(0,o.jsxs)(t.p,{children:["The next step is to update dependencies in your ",(0,o.jsx)(t.code,{children:"package.json"})," files. Any\npackage that currently depends on ",(0,o.jsx)(t.code,{children:"@backstage/core"})," will need to have it\nreplaced by one or more of the new packages. The app package should have all\nthree packages added to ",(0,o.jsx)(t.code,{children:"dependencies"}),", while for plugins and additional non-app\npackages, the ",(0,o.jsx)(t.code,{children:"@backstage/core-plugin-api"})," and ",(0,o.jsx)(t.code,{children:"@backstage/core-components"}),"\npackages should be added to the set of regular ",(0,o.jsx)(t.code,{children:"dependencies"}),", and\n",(0,o.jsx)(t.code,{children:"@backstage/core-app-api"})," should be added to ",(0,o.jsx)(t.code,{children:"devDependencies"})," for usage in\ntests."]}),"\n",(0,o.jsxs)(t.p,{children:["A tool that can help out with step is the ",(0,o.jsx)(t.code,{children:"plugin:diff"})," command from the\n",(0,o.jsx)(t.code,{children:"@backstage/cli"}),", it will compare your plugin to the base plugin template and\nsuggest changes where the plugin deviates. A quick way to get this step done if\nyou have up-to-date project is to run the following in the project root:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# The --yes flag causes all suggested changes to be accepted automatically\nyarn diff --yes\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you do not have the ",(0,o.jsx)(t.code,{children:"diff"})," command set up in ",(0,o.jsx)(t.code,{children:"package.json"}),", you can also\nmanually execute the following in each plugin folder:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn backstage-cli plugin:diff --yes\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3---manual-review",children:"Step 3 - Manual review"}),"\n",(0,o.jsxs)(t.p,{children:["At this point your app is either completely or very close to being migrated. Run\ntype checks with ",(0,o.jsx)(t.code,{children:"yarn tsc"})," to check if you hit any of the breaking changes\nbelow or if there are any other things to fix. It can also be worthwhile\nsearching for occurrences of ",(0,o.jsx)(t.code,{children:"@backstage/core"})," in the codebase, as that might\nfind usages in for example ",(0,o.jsx)(t.code,{children:"jest"})," mock calls, which aren't handled by the\ncodemod."]}),"\n",(0,o.jsx)(t.p,{children:"As a final step you'll want to boot up the app and take it through any regular\nverification step that you have set up for your project. Don't hesitate to open\na GitHub issue, PR, or reach out on Discord if you hit any snags, or if there\nare any additional steps or hints that you think should be added to this guide!"}),"\n",(0,o.jsx)(t.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,o.jsxs)(t.p,{children:["The following is a list of breaking changes between ",(0,o.jsx)(t.code,{children:"@backstage/core"})," and the\nthree new core packages. Not that this list may not be exhaustive depending on\nwhen you migrate your app, as new releases of the new core packages may bring\nfurther changes."]}),"\n",(0,o.jsxs)(t.h3,{id:"removed-iconkey-type",children:["Removed ",(0,o.jsx)(t.code,{children:"IconKey"})," type"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"IconKey"})," type used to be a string union of all known keys used for the app\nicons available through ",(0,o.jsx)(t.code,{children:"useApp().getSystemIcon(key)"}),". The type has been removed\nsince the set of allowed icon keys is no longer constrained, and there is\ninstead only a guarantee that the app provides a minimum set of icons, but can\nprovide any icons it wants beyond that. Migration is done by simply replacing\nold usages by the ",(0,o.jsx)(t.code,{children:"string"})," type."]}),"\n",(0,o.jsxs)(t.h3,{id:"constrained-iconcomponent-type",children:["Constrained ",(0,o.jsx)(t.code,{children:"IconComponent"})," type"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"IconComponent"})," type used to allow all of the props from the MUI ",(0,o.jsx)(t.code,{children:"SvgIcon"}),".\nThis encouraged some bad patterns in open source plugins such as applying colors\nto the icons, which in turn hurt the ability to replace the icons with custom\nones. The ",(0,o.jsx)(t.code,{children:"IconComponent"})," type, which is now exported from\n",(0,o.jsx)(t.code,{children:"@backstage/core-plugin-api"}),", now only accepts a ",(0,o.jsx)(t.code,{children:"fontSize"})," prop used to set the\nsize of the icon. The type is compatible with the MUI ",(0,o.jsx)(t.code,{children:"SvgIcon"}),", but there may\nbe situations where an icon needs an explicit cast to ",(0,o.jsx)(t.code,{children:"IconComponent"})," in order\nto narrow the type."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(s[l]=a[l]);if(t){i=t(a);for(var u=0;u<i.length;u++)o.call(a,i[u])&&(s[i[u]]=a[i[u]])}}return s}},371426:(e,t,n)=>{n(862525);var o=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;r=a("react.element"),t.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var o=n(862525),r=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;r=d("react.element"),a=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),i=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var j=b.prototype=new m;j.constructor=b,o(j,y.prototype),j.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case a:c=!0}}if(c)return i=i(c=e),e=""===o?"."+S(c,0):o,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=o+S(s=e[l],l);c+=O(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=O(s=s.value,t,n,u=o+S(s,l++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function I(e,t,n){if(null==e)return e;var o=[],r=0;return O(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function P(){var e=E.current;if(null===e)throw Error(h(321));return e}var T={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var a=o({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=v.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:r,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var o=n(667294);const r=o.createContext({});function a(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),o.createElement(r.Provider,{value:s},t)}}}]);