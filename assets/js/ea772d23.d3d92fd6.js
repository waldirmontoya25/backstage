/*! For license information please see ea772d23.d3d92fd6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[727432],{165169:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>f,toc:()=>a});var n=t(824246),o=t(511151);const c={id:"cli-node.lockfile.diff",title:"Lockfile.diff()",description:"API reference for Lockfile.diff()"},i=void 0,f={unversionedId:"reference/cli-node.lockfile.diff",id:"reference/cli-node.lockfile.diff",title:"Lockfile.diff()",description:"API reference for Lockfile.diff()",source:"@site/../docs/reference/cli-node.lockfile.diff.md",sourceDirName:"reference",slug:"/reference/cli-node.lockfile.diff",permalink:"/docs/reference/cli-node.lockfile.diff",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/cli-node.lockfile.diff.md",tags:[],version:"current",frontMatter:{id:"cli-node.lockfile.diff",title:"Lockfile.diff()",description:"API reference for Lockfile.diff()"}},l={},a=[{value:"Parameters",id:"parameters",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/cli-node",children:(0,n.jsx)(r.code,{children:"@backstage/cli-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/cli-node.lockfile",children:(0,n.jsx)(r.code,{children:"Lockfile"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/cli-node.lockfile.diff",children:(0,n.jsx)(r.code,{children:"diff"})})]}),"\n",(0,n.jsx)(r.p,{children:"Diff with another lockfile, returning entries that have been added, changed, and removed compared to the other lockfile."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"diff(otherLockfile: Lockfile): LockfileDiff;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"otherLockfile"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/cli-node.lockfile",children:"Lockfile"})}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/cli-node.lockfilediff",children:"LockfileDiff"})})]})}const s=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,f=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var a in c=Object(arguments[l]))t.call(c,a)&&(f[a]=c[a]);if(r){i=r(c);for(var u=0;u<i.length;u++)n.call(c,i[u])&&(f[i[u]]=c[i[u]])}}return f}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,c={},a=null,u=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(u=r.ref),r)f.call(r,n)&&!l.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:i.current}}r.jsx=a,r.jsxs=a},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,f=60110,l=60112;r.Suspense=60113;var a=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),c=s("react.portal"),r.Fragment=s("react.fragment"),r.StrictMode=s("react.strict_mode"),r.Profiler=s("react.profiler"),i=s("react.provider"),f=s("react.context"),l=s("react.forward_ref"),r.Suspense=s("react.suspense"),a=s("react.memo"),u=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function v(){}function j(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=j.prototype=new v;b.constructor=j,n(b,m.prototype),b.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,c={},i=null,f=null;if(null!=r)for(n in void 0!==r.ref&&(f=r.ref),void 0!==r.key&&(i=""+r.key),r)_.call(r,n)&&!g.hasOwnProperty(n)&&(c[n]=r[n]);var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];c.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===c[n]&&(c[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,i){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var l=!1;if(null===e)l=!0;else switch(f){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return i=i(l=e),e=""===n?"."+S(l,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),C(i,r,t,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),r.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var u=n+S(f=e[a],a);l+=C(f,r,t,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),a=0;!(f=e.next()).done;)l+=C(f=f.value,r,t,u=n+S(f,a++),i);else if("object"===f)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function E(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},r.Component=m,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(p(267,e));var c=n({},e.props),i=e.key,f=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(f=r.ref,l=k.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in r)_.call(r,u)&&!g.hasOwnProperty(u)&&(c[u]=void 0===r[u]&&void 0!==a?a[u]:r[u])}var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];c.children=a}return{$$typeof:o,type:e.type,key:i,ref:f,props:c,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>f,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function f({components:e,children:r,disableParentContext:t}){let f;return f=t?"function"==typeof e?e({}):e||i:c(e),n.createElement(o.Provider,{value:f},r)}}}]);