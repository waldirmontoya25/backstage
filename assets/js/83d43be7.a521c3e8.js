/*! For license information please see 83d43be7.a521c3e8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[371811],{807289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(824246),n=r(511151);const a={id:"plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator",title:"DefaultCatalogCollatorFactory.getCollator()",description:"API reference for DefaultCatalogCollatorFactory.getCollator()"},c=void 0,l={id:"reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator",title:"DefaultCatalogCollatorFactory.getCollator()",description:"API reference for DefaultCatalogCollatorFactory.getCollator()",source:"@site/../docs/reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator",permalink:"/docs/reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator",title:"DefaultCatalogCollatorFactory.getCollator()",description:"API reference for DefaultCatalogCollatorFactory.getCollator()"}},u={},s=[];function i(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-module-catalog",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-catalog"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory",children:(0,o.jsx)(t.code,{children:"DefaultCatalogCollatorFactory"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-module-catalog.defaultcatalogcollatorfactory.getcollator",children:(0,o.jsx)(t.code,{children:"getCollator"})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"getCollator(): Promise<Readable>;\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<Readable>"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},371426:(e,t,r)=>{var o=r(827378),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var o,a={},s=null,i=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,o)&&!u.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:l.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=_.prototype=new b;v.constructor=_,g(v,m.prototype),v.isPureReactComponent=!0;var C=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,o){var n,a={},c=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=o;else if(1<u){for(var s=Array(u),i=0;i<u;i++)s[i]=arguments[i+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:r,type:e,key:c,ref:l,props:a,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,n,a,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case o:u=!0}}if(u)return c=c(u=e),e=""===a?"."+w(u,0):a,C(c)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),$(c,t,n,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(u=0,a=""===a?".":a+":",C(e))for(var s=0;s<e.length;s++){var i=a+w(l=e[s],s);u+=$(l,t,n,i,c)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(l=e.next()).done;)u+=$(l=l.value,t,n,i=a+w(l,s++),c);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,r){if(null==e)return e;var o=[],n=0;return $(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},F={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=n,t.Profiler=c,t.PureComponent=_,t.StrictMode=a,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=g({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)k.call(t,s)&&!S.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=o;else if(1<s){u=Array(s);for(var i=0;i<s;i++)u[i]=arguments[i+2];n.children=u}return{$$typeof:r,type:e.type,key:a,ref:c,props:n,_owner:l}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>l,ah:()=>a});var o=r(667294);const n=o.createContext({});function a(e){const t=o.useContext(n);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function l({components:e,children:t,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:a(e),o.createElement(n.Provider,{value:l},t)}}}]);