/*! For license information please see 9f89bad9.56a26873.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[467505],{887201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(824246),o=n(511151);const s={id:"extension-types",title:"Frontend System Extension Types",sidebar_label:"Extension Types",description:"Extension types provided by the frontend system and core features"},i=void 0,a={id:"frontend-system/building-plugins/extension-types",title:"Frontend System Extension Types",description:"Extension types provided by the frontend system and core features",source:"@site/../docs/frontend-system/building-plugins/03-extension-types.md",sourceDirName:"frontend-system/building-plugins",slug:"/frontend-system/building-plugins/extension-types",permalink:"/docs/frontend-system/building-plugins/extension-types",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/building-plugins/03-extension-types.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"extension-types",title:"Frontend System Extension Types",sidebar_label:"Extension Types",description:"Extension types provided by the frontend system and core features"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/frontend-system/building-plugins/testing"},next:{title:"Overview",permalink:"/docs/frontend-system/utility-apis/index"}},c={},u=[{value:"Built-in extension types",id:"built-in-extension-types",level:2},{value:"Api - Reference",id:"api---reference",level:3},{value:"Component - Reference",id:"component---reference",level:3},{value:"NavItem - Reference",id:"navitem---reference",level:3},{value:"Page - Reference",id:"page---reference",level:3},{value:"SignInPage - Reference",id:"signinpage---reference",level:3},{value:"Theme - Reference",id:"theme---reference",level:3},{value:"Translation - Reference",id:"translation---reference",level:3},{value:"Core feature extension types",id:"core-feature-extension-types",level:2},{value:"EntityCard - Reference",id:"entitycard---reference",level:3},{value:"EntityContent - Reference",id:"entitycontent---reference",level:3},{value:"SearchResultListItem - Reference",id:"searchresultlistitem---reference",level:3}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h2:"h2",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This section covers many of the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions#extension-creators",children:"extension types"})," available at your disposal when building Backstage frontend plugins."]}),"\n",(0,r.jsx)(t.h2,{id:"built-in-extension-types",children:"Built-in extension types"}),"\n",(0,r.jsx)(t.p,{children:"These are the extension types provided by the Backstage frontend framework itself."}),"\n",(0,r.jsxs)(t.h3,{id:"api---reference",children:["Api - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createapiextension",children:"Reference"})]}),"\n",(0,r.jsxs)(t.p,{children:["An API extension is used to add or override ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/index",children:"Utility API factories"})," in the app. They are commonly used by plugins for both internal and shared APIs. There are also many built-in Api extensions provided by the framework that you are able to override."]}),"\n",(0,r.jsxs)(t.h3,{id:"component---reference",children:["Component - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createcomponentextension",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Components extensions are used to override the component associated with a component reference throughout the app."}),"\n",(0,r.jsxs)(t.h3,{id:"navitem---reference",children:["NavItem - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createnavitemextension",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Navigation item extensions are used to provide menu items that link to different parts of the app. By default nav items are attached to the app nav extension, which by default is rendered as the left sidebar in the app."}),"\n",(0,r.jsxs)(t.h3,{id:"page---reference",children:["Page - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createpageextension",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Page extensions provide content for a particular route in the app. By default pages are attached to the app routes extensions, which renders the root routes."}),"\n",(0,r.jsxs)(t.h3,{id:"signinpage---reference",children:["SignInPage - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createsigninpageextension",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Sign-in page extension have a single purpose - to implement a custom sign-in page. They are always attached to the app root extension and are rendered before the rest of the app until the user is signed in."}),"\n",(0,r.jsxs)(t.h3,{id:"theme---reference",children:["Theme - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createthemeextension",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Theme extensions provide custom themes for the app. They are always attached to the app extension and you can have any number of themes extensions installed in an app at once, letting the user choose which theme to use."}),"\n",(0,r.jsxs)(t.h3,{id:"translation---reference",children:["Translation - ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createtranslationextension",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Translation extension provide custom translation messages for the app. They can be used both to override the default english messages to custom ones, as well as provide translations for additional languages."}),"\n",(0,r.jsx)(t.h2,{id:"core-feature-extension-types",children:"Core feature extension types"}),"\n",(0,r.jsx)(t.p,{children:"These are the extension types provided by the Backstage core feature plugins."}),"\n",(0,r.jsxs)(t.h3,{id:"entitycard---reference",children:["EntityCard - ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-react/api-report-alpha.md",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Creates entity cards to be displayed on the entity pages of the catalog plugin."}),"\n",(0,r.jsxs)(t.h3,{id:"entitycontent---reference",children:["EntityContent - ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-react/api-report-alpha.md",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Creates entity content to be displayed on the entity pages of the catalog plugin."}),"\n",(0,r.jsxs)(t.h3,{id:"searchresultlistitem---reference",children:["SearchResultListItem - ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/search-react/api-report-alpha.md",children:"Reference"})]}),"\n",(0,r.jsx)(t.p,{children:"Creates search result list items for different types of search results, to be displayed in search result lists."})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var v=b.prototype=new x;v.constructor=b,y(v,g.prototype),v.isPureReactComponent=!0;var _=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,s={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!R.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:a,props:s,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,s,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===s?"."+C(c,0):s,_(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),T(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),t.push(i)),1;if(c=0,s=""===s?".":s+":",_(e))for(var u=0;u<e.length;u++){var l=s+C(a=e[u],u);c+=T(a,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=T(a=a.value,t,o,l=s+C(a,u++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)j.call(t,u)&&!R.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:s,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>s});var r=n(667294);const o=r.createContext({});function s(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:s(e),r.createElement(o.Provider,{value:a},t)}}}]);