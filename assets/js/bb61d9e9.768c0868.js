/*! For license information please see bb61d9e9.768c0868.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[961471],{360594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const c={id:"test-utils.mockanalyticsapi.getevents",title:"MockAnalyticsApi.getEvents()",description:"API reference for MockAnalyticsApi.getEvents()"},i=void 0,s={unversionedId:"reference/test-utils.mockanalyticsapi.getevents",id:"reference/test-utils.mockanalyticsapi.getevents",title:"MockAnalyticsApi.getEvents()",description:"API reference for MockAnalyticsApi.getEvents()",source:"@site/../docs/reference/test-utils.mockanalyticsapi.getevents.md",sourceDirName:"reference",slug:"/reference/test-utils.mockanalyticsapi.getevents",permalink:"/docs/reference/test-utils.mockanalyticsapi.getevents",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.mockanalyticsapi.getevents.md",tags:[],version:"current",frontMatter:{id:"test-utils.mockanalyticsapi.getevents",title:"MockAnalyticsApi.getEvents()",description:"API reference for MockAnalyticsApi.getEvents()"}},a={},u=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockanalyticsapi",children:(0,n.jsx)(t.code,{children:"MockAnalyticsApi"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.mockanalyticsapi.getevents",children:(0,n.jsx)(t.code,{children:"getEvents"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getEvents(): AnalyticsEvent[];\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.analyticsevent",children:"AnalyticsEvent"}),"[]"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in c=Object(arguments[a]))r.call(c,u)&&(s[u]=c[u]);if(t){i=t(c);for(var l=0;l<i.length;l++)n.call(c,i[l])&&(s[i[l]]=c[i[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,a=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var _=g.prototype=new m;_.constructor=g,n(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,c={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(c[n]=t[n]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:o,type:e,key:i,ref:s,props:c,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return i=i(a=e),e=""===n?"."+x(a,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+x(s=e[u],u);a+=S(s,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=S(s=s.value,t,r,l=n+x(s,u++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function A(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var c=n({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=b.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!k.hasOwnProperty(l)&&(c[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)c.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:o,type:e.type,key:i,ref:s,props:c,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||i:c(e),n.createElement(o.Provider,{value:s},t)}}}]);