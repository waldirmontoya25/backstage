/*! For license information please see 9115d367.bca23f1b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[58623],{196038:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>f});var n=t(824246),o=t(511151);const c={id:"core-components.usesupportconfig",title:"useSupportConfig()",description:"API reference for useSupportConfig()"},u=void 0,s={unversionedId:"reference/core-components.usesupportconfig",id:"reference/core-components.usesupportconfig",title:"useSupportConfig()",description:"API reference for useSupportConfig()",source:"@site/../docs/reference/core-components.usesupportconfig.md",sourceDirName:"reference",slug:"/reference/core-components.usesupportconfig",permalink:"/docs/reference/core-components.usesupportconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.usesupportconfig.md",tags:[],version:"current",frontMatter:{id:"core-components.usesupportconfig",title:"useSupportConfig()",description:"API reference for useSupportConfig()"}},i={},f=[];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,n.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.usesupportconfig",children:(0,n.jsx)(r.code,{children:"useSupportConfig"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function useSupportConfig(): SupportConfig;\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-components.supportconfig",children:"SupportConfig"})})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var f in c=Object(arguments[i]))t.call(c,f)&&(s[f]=c[f]);if(r){u=r(c);for(var a=0;a<u.length;a++)n.call(c,u[a])&&(s[u[a]]=c[u[a]])}}return s}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,c={},f=null,a=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:a,props:c,_owner:u.current}}r.jsx=f,r.jsxs=f},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,s=60110,i=60112;r.Suspense=60113;var f=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),c=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),u=p("react.provider"),s=p("react.context"),i=p("react.forward_ref"),r.Suspense=p("react.suspense"),f=p("react.memo"),a=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var _=v.prototype=new g;_.constructor=v,n(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,c={},u=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,n)&&!S.hasOwnProperty(n)&&(c[n]=r[n]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var f=Array(i),a=0;a<i;a++)f[a]=arguments[a+2];c.children=f}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:u,ref:s,props:c,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return u=u(i=e),e=""===n?"."+w(i,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),x(u,r,t,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(k,"$&/")+"/")+e)),r.push(u)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var a=n+w(s=e[f],f);i+=x(s,r,t,a,u)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),f=0;!(s=e.next()).done;)i+=x(s=s.value,r,t,a=n+w(s,f++),u);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),u=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=b.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in r)j.call(r,a)&&!S.hasOwnProperty(a)&&(c[a]=void 0===r[a]&&void 0!==f?f[a]:r[a])}var a=arguments.length-2;if(1===a)c.children=t;else if(1<a){f=Array(a);for(var p=0;p<a;p++)f[p]=arguments[p+2];c.children=f}return{$$typeof:o,type:e.type,key:u,ref:s,props:c,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:s},r)}}}]);