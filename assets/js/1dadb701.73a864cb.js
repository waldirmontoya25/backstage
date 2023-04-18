/*! For license information please see 1dadb701.73a864cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[632187],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,d=u["".concat(l,".").concat(h)]||u[h]||f[h]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});a(827378);var r=a(603905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={},l="Architecting your Catalog",c={unversionedId:"features/software-catalog/architecting-the-catalog",id:"features/software-catalog/architecting-the-catalog",title:"Architecting your Catalog",description:"Overview",source:"@site/../docs/features/software-catalog/architecting-the-catalog.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/architecting-the-catalog",permalink:"/docs/features/software-catalog/architecting-the-catalog",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/architecting-the-catalog.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/features/software-catalog/software-catalog-api"},next:{title:"Overview",permalink:"/docs/features/kubernetes/"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Descriptor Components used to build the Catalog Graph",id:"descriptor-components-used-to-build-the-catalog-graph",level:3},{value:"Use cases out of the box",id:"use-cases-out-of-the-box",level:2},{value:"Tracking Assets",id:"tracking-assets",level:2},{value:"Well-known trackable assets",id:"well-known-trackable-assets",level:3},{value:"Reference models",id:"reference-models",level:2}],f={toc:u};function h(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},f,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecting-your-catalog"},"Architecting your Catalog"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'The Software Catalog in Backstage is intended to capture human mental models using entities and their relationships rather than an exhaustive inventory of all possible things. The focus is on attaching functionality and views centered around these entities. Determining the "edge" where the catalog ends and the external world begins is crucial to ensure that the catalog\'s scope is appropriate.\nThe Backstage software catalog serves as a centralized hub for organizing and discovering software components and services. While it excels at providing a high-level overview of these concepts, it may not be the ideal solution for tracking dynamic relationships between components and services in real-time. You can achieve real time views by attaching appropriate tooling to the nodes in the graph through ',(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/well-known-annotations"},"annotations")," and developing custom front-end ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/plugins/"},"plugins")," that display deployment information and other real-time data.\nIt is worth noting that the Backstage Software Catalog should not be considered the ultimate source of truth, instead, it is advisable to use the Backstage Catalog as a caching mechanism that utilizes a REST API to convey information to the catalog UI and other Backstage plugins. Adopting a GitOps approach is recommended to modify YAML files in Backstage, treating YAML files in repositories as the primary source of truth and using Scaffolder to make changes via the UI and generate a pull request in the repository with the updated changes."),(0,r.kt)("h3",{id:"descriptor-components-used-to-build-the-catalog-graph"},"Descriptor Components used to build the Catalog Graph"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/system-model"},(0,r.kt)("strong",{parentName:"a"},"Entities:"))," An entity refers to a node in the graph that represents a distinct object, concept, or thing. Nodes are the fundamental building blocks of a graph database and are used to represent entities and their properties."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(494421).Z,width:"671",height:"671"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#contents"},(0,r.kt)("strong",{parentName:"a"},"Kinds:")),' These are broad categories used to group related entities. Kinds are used to provide a high-level categorization of entities, such as "service", "database", or "team". Kinds are often used to provide a way to filter entities in the catalog and to provide a high-level overview of the types of entities that are being managed.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations"},(0,r.kt)("strong",{parentName:"a"},"Relations:"))," These are links between different entities in the catalog. Relations express the relationships between different entities, such as dependencies or ownership. Adopters can use relations to help users navigate the catalog and understand the relationships between different entities."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#spec-varies"},(0,r.kt)("strong",{parentName:"a"},"Spec:")),' A specification or "spec" is a schema that outlines the data structure of an entity in the Backstage catalog. It defines the properties, relationships, data types, and constraints for an entity, ensuring consistency and accuracy of data while allowing for easy sharing and consumption of data across components and plugins. Specs are useful when creating or extending entities and can help make data more reusable and interoperable. The spec section is fully customizable, and users can create their own components and plugins to render the information.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/system-model#type"},(0,r.kt)("strong",{parentName:"a"},"Types:")),' These are more specific categories used to classify entities within a given Kind. Types provide a more granular categorization of entities, such as "frontend-service" or "backend-service.". Types are often used to provide additional context and information about an entity and to help users understand the role and function of the entity within the broader system.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/well-known-annotations"},(0,r.kt)("strong",{parentName:"a"},"Annotations:"))," These key-value pairs can be attached to an entity in the catalog. They are typically used to add additional information or metadata to an entity. Annotations are often used to provide information that is used by automated tools or scripts and to provide further context to humans working with the entity or refer plugins to the external world."),(0,r.kt)("h2",{id:"use-cases-out-of-the-box"},"Use cases out of the box"),(0,r.kt)("p",null,"The catalog builds a graph using ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format"},"descriptors")," as nodes and ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations"},"relations")," as edges. Out of the box you get the following use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ownership tracking"),(0,r.kt)("li",{parentName:"ul"},"Inventory"),(0,r.kt)("li",{parentName:"ul"},"Search"),(0,r.kt)("li",{parentName:"ul"},"Lifecycle tracking"),(0,r.kt)("li",{parentName:"ul"},"Tracking of real-time information sources"),(0,r.kt)("li",{parentName:"ul"},"Dependency mapping"),(0,r.kt)("li",{parentName:"ul"},"API exposure")),(0,r.kt)("h2",{id:"tracking-assets"},"Tracking Assets"),(0,r.kt)("p",null,"The recommended approach would be to represent information in catalog-info files, which the users themselves can manage. While automated classification based on repository contents can be helpful, it is recommended to use it only to generate the initial file and then allow humans to maintain it manually. The reason is that automation can sometimes fail, and it is essential to ensure the accuracy and reliability of this metadata. In short, humans should govern this piece of metadata to maintain its integrity."),(0,r.kt)("h3",{id:"well-known-trackable-assets"},"Well-known trackable assets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Services"),(0,r.kt)("li",{parentName:"ul"},"Websites"),(0,r.kt)("li",{parentName:"ul"},"Libraries"),(0,r.kt)("li",{parentName:"ul"},"Data Pipelines"),(0,r.kt)("li",{parentName:"ul"},"Machine Learning Models"),(0,r.kt)("li",{parentName:"ul"},"Third-party software components: It is recommended to have a separate repo for all 3d party catalog-info files."),(0,r.kt)("li",{parentName:"ul"},"Jira installation"),(0,r.kt)("li",{parentName:"ul"},"Pagerduty")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Physical resources: This is probably more useful for longer-lived ones (For example servers)."),(0,r.kt)("li",{parentName:"ul"},"Cloud Infrastructure services")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ownership - users - groups by")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Business units"),(0,r.kt)("li",{parentName:"ul"},"Team"),(0,r.kt)("li",{parentName:"ul"},"Product area")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Naming strategies:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ldap: Internal ldap usernames as entity names. e.g., owner: user:myuser or user: my-team-name.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ownership strategies:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ownership based on teams:"),' The concept of ownership in the system is team-centric; hence, the "owner" field must reference the LDAP name of a squad according to a prescribed set of regulations. While there may be instances where the ownership is attributed to an individual, such deviations might create challenges. In such cases, the user could receive a notification through the web interface, highlighting that this departure is an exception and needs rectification. To ensure adherence to this system, every entity in the model should have a designated owner, preferably a valid team within the LDAP hierarchy.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ownership of features:")," To track the ownership of specific features within your products and their interrelationships, two options are available: introducing a new component ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/system-model/#type"},"type"),', such as "feature," or creating a new ',(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format/#contents"},"Kind"),' altogether. Nonetheless, it is advisable to choose the former approach and introduce a new type, like "feature," is advisable as it is less complicated and poses a lower risk.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LDAP doesn\u2019t reflect the organization structure:")," If Workday or a similar system serves as the source of truth, and LDAP is utilized for user attributes, it is advisable to develop a layer on top of various systems to establish a unified API that the entire organization can query, rather than only Backstage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"APIs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenApi"),(0,r.kt)("li",{parentName:"ul"},"AsyncApi"),(0,r.kt)("li",{parentName:"ul"},"graphQL"),(0,r.kt)("li",{parentName:"ul"},"gRPC")),(0,r.kt)("p",null,"APIs Could list networked services or libraries and it\u2019s particularly useful to identify APIs that form boundaries between systems. There are some considerations to keep in mind:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API versions:")," Major API versions can be treated as distinct APIs, and it is possible to create separate entity instances for each (e.g., metadata.name: my-api-v1 and metadata.name: my-api-v2). However, this approach is not recommended for minor or patch-level variations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Detail:")," It\u2019s not recommended going too granular because the catalog in its current form won't perhaps be a great platform to express it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Relationships between APIs:")," The idea is that you have a service component that exposes an api and then, it's not the api that consumes the other api, it's the component that consumes the other api."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backend for front end API (BFF):"),' The suggestion is to create separate components for the frontend and backend services, with the frontend component having a type of "website" and the backend component having a type of "service". This is because the BFF API is tailored for a specific UI and is not meant to be used by others, making it unnecessary to include in the catalog.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API registry:")," The exploration of all APIs within an organization is a typical use case for an API registry."),(0,r.kt)("h2",{id:"reference-models"},"Reference models"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C4 model:")," For inspiration, you could review the ",(0,r.kt)("a",{parentName:"p",href:"https://c4model.com/"},"C4 model"),", which defines a pattern for visualizing software architecture."))}h.isMDXComponent=!0},494421:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/entity.drawio-428fd7e0a454532e19d0f8e262f6a69a.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,o){for(var i,s,l=n(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))a.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)r.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},541535:(e,t,a)=>{var r=a(862525),n=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,a){this.props=e,this.context=t,this.refs=m,this.updater=a||d}function y(){}function k(e,t,a){this.props=e,this.context=t,this.refs=m,this.updater=a||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=k.prototype=new y;b.constructor=k,r(b,g.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,a){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:n,type:e,key:i,ref:s,props:o,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+A(l,0):r,Array.isArray(i)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),T(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=r+A(s=e[c],c);l+=T(s,t,a,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(s=e.next()).done;)l+=T(s=s.value,t,a,p=r+A(s,c++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,a){if(null==e)return e;var r=[],n=0;return T(e,r,"","",(function(e){return t.call(a,e,n++)})),r}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function C(){var e=S.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,a)=>{a(541535)}}]);