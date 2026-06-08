(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return j},NormalizeError:function(){return v},PageNotFoundError:function(){return x},SP:function(){return h},ST:function(){return y},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>i.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,y=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class v extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class j extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},955,(e,t,r)=>{var n={229:function(e){var t,r,n,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var l=[],c=!1,u=-1;function f(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=i(f);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}},o=!0;try{n[e](r,r.exports,a),o=!1}finally{o&&delete s[e]}return r.exports}a.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=a(229)},461,(e,t,r)=>{"use strict";var n,s;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(s=e.g.process)?void 0:s.env)?e.g.process:e.r(955)},1705,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},7325,(e,t,r)=>{"use strict";var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function x(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var b=j.prototype=new x;b.constructor=j,y(b,v.prototype),b.isPureReactComponent=!0;var _=Array.isArray,w=Object.prototype.hasOwnProperty,N={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var s,a={},o=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,s)&&!S.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===a[s]&&(a[s]=l[s]);return{$$typeof:n,type:e,key:o,ref:i,props:a,_owner:N.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function C(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function O(e,t,r){if(null==e)return e;var a=[],o=0;return!function e(t,r,a,o,i){var l,c,u,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var d=!1;if(null===t)d=!0;else switch(f){case"string":case"number":d=!0;break;case"object":switch(t.$$typeof){case n:case s:d=!0}}if(d)return i=i(d=t),t=""===o?"."+C(d,0):o,_(i)?(a="",null!=t&&(a=t.replace(E,"$&/")+"/"),e(i,r,a,"",function(e){return e})):null!=i&&(P(i)&&(l=i,c=a+(!i.key||d&&d.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+t,i={$$typeof:n,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}),r.push(i)),1;if(d=0,o=""===o?".":o+":",_(t))for(var p=0;p<t.length;p++){var h=o+C(f=t[p],p);d+=e(f,r,a,h,i)}else if("function"==typeof(h=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=m&&u[m]||u["@@iterator"])?u:null))for(t=h.call(t),p=0;!(f=t.next()).done;)h=o+C(f=f.value,p++),d+=e(f,r,a,h,i);else if("object"===f)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return d}(e,a,"","",function(e){return t.call(r,e,o++)}),a}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},M={transition:null};function L(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:O,forEach:function(e,t,r){O(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=a,r.Profiler=i,r.PureComponent=j,r.StrictMode=o,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:M,ReactCurrentOwner:N},r.act=L,r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=y({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=N.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!S.hasOwnProperty(c)&&(s[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:s,_owner:i}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},r.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},r.unstable_act=L,r.useCallback=function(e,t){return T.current.useCallback(e,t)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,t){return T.current.useEffect(e,t)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return T.current.useMemo(e,t)},r.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return T.current.useTransition()},r.version="18.3.1"},1788,(e,t,r)=>{"use strict";t.exports=e.r(7325)},1884,(e,t,r)=>{"use strict";var n=e.r(1788),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:a,_owner:i.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},1398,(e,t,r)=>{"use strict";t.exports=e.r(1884)},2456,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var s={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(s,o,i):s[o]=e[o]}return s.default=e,r&&r.set(e,s),s}},3584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(1705)._(e.r(1788)).default.createContext({})},4470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},1914,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return l}});let n=e.r(1788),s=e.r(9604),a="function"==typeof IntersectionObserver,o=new Map,i=[];function l({rootRef:e,rootMargin:t,disabled:r}){let c=r||!a,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(c||u)return;let r=d.current;if(r&&r.tagName)return function(e,t,r){let{id:n,observer:s,elements:a}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let s=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:s},i.push(r),o.set(r,t),t}(r);return a.set(e,t),s.observe(e),function(){if(a.delete(e),s.unobserve(e),0===a.size){s.disconnect(),o.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(r,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,s.requestIdleCallback)(()=>f(!0));return()=>(0,s.cancelIdleCallback)(e)}},[c,t,e,u,d.current]),[p,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},4471,(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return n}}),e.r(90),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},3230,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return s}});let n=e.r(1788);function s(e,t){let r=(0,n.useRef)(null),s=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(r.current=a(e,n)),t&&(s.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},8735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},9149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return N},useLinkStatus:function(){return w}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let a=e.r(2456),o=e.r(1398),i=a._(e.r(1788)),l=e.r(472),c=e.r(1112),u=e.r(8169),f=e.r(9129),d=e.r(4862),p=e.r(5479),m=e.r(1914),h=e.r(4471),y=e.r(4113),g=e.r(3230);e.r(8735);let v=new Set;function x(e,t,r,n){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let s=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(s))return;v.add(s)}e.prefetch(t,r,n).catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let b=i.default.forwardRef(function(e,t){let r,n,{href:s,as:a,children:u,prefetch:v=null,passHref:b,replace:_,shallow:w,scroll:N,locale:S,onClick:k,onNavigate:P,onMouseEnter:E,onTouchStart:C,legacyBehavior:O=!1,transitionTypes:R,...T}=e;r=u,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let M=i.default.useContext(p.RouterContext),L=!1!==v,{href:I,as:$}=i.default.useMemo(()=>{if(!M){let e=j(s);return{href:e,as:a?j(a):e}}let[e,t]=(0,l.resolveHref)(M,s,!0);return{href:e,as:a?(0,l.resolveHref)(M,a):t||e}},[M,s,a]),D=i.default.useRef(I),U=i.default.useRef($);O&&(n=i.default.Children.only(r));let A=O?n&&"object"==typeof n&&n.ref:t,[B,F,W]=(0,m.useIntersection)({rootMargin:"200px"}),G=i.default.useCallback(e=>{(U.current!==$||D.current!==I)&&(W(),U.current=$,D.current=I),B(e)},[$,I,W,B]),V=(0,g.useMergedRef)(G,A);i.default.useEffect(()=>{!M||F&&L&&x(M,I,$,{locale:S})},[$,I,F,S,L,M?.locale,M]);let H={ref:V,onClick(e){O||"function"!=typeof k||k(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),!M||e.defaultPrevented||function(e,t,r,n,s,a,o,i,l){let u,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(r)){s&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let e=o??!0;"beforePopState"in t?t[s?"replace":"push"](r,n,{shallow:a,locale:i,scroll:e}):t[s?"replace":"push"](n||r,{scroll:e})})()}}(e,M,I,$,_,w,N,S,P)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&x(M,I,$,{locale:S,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){O||"function"!=typeof C||C(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&x(M,I,$,{locale:S,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)($))H.href=$;else if(!O||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:M?.locale;H.href=M?.isLocaleDomain&&(0,h.getDomainLocale)($,e,M?.locales,M?.domainLocales)||(0,y.addBasePath)((0,d.addLocale)($,e,M?.defaultLocale))}return O?i.default.cloneElement(n,H):(0,o.jsx)("a",{...T,...H,children:r})}),_=(0,i.createContext)({pending:!1}),w=()=>(0,i.useContext)(_),N=b;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1158,(e,t,r)=>{t.exports=e.r(9149)},2644,e=>{"use strict";var t=e.i(1398),r=e.i(1158);let n=[],s={};n.push({title:"Scene Viewer",techStack:"Vulkan, GLFW, GLSL",path:"/projects/scene-viewer"}),s["Scene Viewer"]=(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,t.jsxs)("p",{children:["Built as a part of CMU's ",(0,t.jsx)(r.default,{href:"https://graphics.cs.cmu.edu/courses/15-472-s26/",target:"_blank",children:(0,t.jsx)("span",{className:"text-[var(--accent)] selection",children:"15-472 Real-Time Graphics"})})," course and controlled via the command line. "]}),(0,t.jsxs)("div",{className:"list grid grid-cols-[1.5rem_1fr]",children:[(0,t.jsx)("p",{className:"bullet",children:"1."}),(0,t.jsx)("p",{className:"list-entry",children:"Set up Vulkan boilerplate."}),(0,t.jsx)("p",{className:"bullet",children:"2."}),(0,t.jsxs)("p",{children:["Implemented rendering pipeline for ",(0,t.jsx)(r.default,{href:"https://github.com/15-472/s72",target:"_blank",children:(0,t.jsx)("span",{className:"text-[var(--accent)] selection",children:".s72 scenes"})}),", ",(0,t.jsx)("span",{className:"emphasis",children:"CPU-side frustrum culling"}),", and simple ",(0,t.jsx)("span",{className:"emphasis",children:"animation player"}),"; exposure and tonemapping control via CLI flags."]}),(0,t.jsx)("p",{className:"bullet",children:"3."}),(0,t.jsxs)("p",{children:["Handled ",(0,t.jsx)("span",{className:"emphasis",children:"normal maps"})," and ",(0,t.jsx)("span",{className:"emphasis",children:"Lambertian"}),", ",(0,t.jsx)("span",{className:"emphasis",children:"Mirror"}),", ",(0,t.jsx)("span",{className:"emphasis",children:"Environment"}),", and ",(0,t.jsx)("span",{className:"emphasis",children:"PBR"})," materials and implemented environment lighting."]})]}),(0,t.jsx)("video",{src:"/assets/videos/materials-normals.mp4",className:"embedded-video",controls:!0}),(0,t.jsx)("video",{src:"/assets/videos/pbr-material.mp4",className:"embedded-video",controls:!0}),(0,t.jsxs)("div",{className:"list grid grid-cols-[1.5rem_1fr]",children:[(0,t.jsx)("p",{className:"bullet",children:"4."}),(0,t.jsxs)("p",{children:["Created utility program using ",(0,t.jsx)("span",{className:"emphasis",children:"compute shaders"})," to precompute mips for environment lighting on Lambertian and PBR materials via direct integration and ",(0,t.jsx)(r.default,{href:"https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf#page=5",target:"_blank",children:(0,t.jsx)("span",{className:"text-[var(--accent)] selection",children:"GGX split-sum approximatation (Karis 2012)"})}),", respectively."]}),(0,t.jsx)("p",{className:"bullet",children:"5."}),(0,t.jsxs)("p",{children:["Handled ",(0,t.jsx)("span",{className:"emphasis",children:"directional"}),", ",(0,t.jsx)("span",{className:"emphasis",children:"sphere"}),", and ",(0,t.jsx)("span",{className:"emphasis",children:"spot lights"})," using the ",(0,t.jsx)(r.default,{href:"https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf#page=15",target:"_blank",children:(0,t.jsx)("span",{className:"text-[var(--accent)] selection",children:"representative point method (Karis 2012)"})}),", and implemented per-frame ",(0,t.jsx)("span",{className:"emphasis",children:"shadow maps"})," for spot lights."]})]}),(0,t.jsx)("video",{src:"/assets/videos/light-parameters.mp4",className:"embedded-video",controls:!0}),(0,t.jsx)("video",{src:"/assets/videos/spot-shadows.mp4",className:"embedded-video",controls:!0}),(0,t.jsxs)("div",{className:"list grid grid-cols-[1.5rem_1fr]",children:[(0,t.jsx)("p",{className:"bullet",children:"6."}),(0,t.jsxs)("p",{children:["Implemented and optimized ",(0,t.jsx)("span",{className:"emphasis",children:"GPU procedural terrain generation"})," with Marching Cubes via ",(0,t.jsx)("span",{className:"emphasis",children:"two-pass method"})," (counting then computing vertices); grouped voxels into ",(0,t.jsx)("span",{className:"emphasis",children:"chunks"})," yielding ",(0,t.jsx)("span",{className:"emphasis",children:"more efficient CPU-side culling"}),"."]}),(0,t.jsx)("p",{className:"bullet",children:"7."}),(0,t.jsxs)("p",{children:["Achieved ",(0,t.jsx)("span",{className:"emphasis",children:"~1000x more voxels"})," (before exhausting 6GB VRAM) over naively allocating worst-case memory and a ",(0,t.jsx)("span",{className:"emphasis",children:"factor of N^3 fewer frustrum culling tests"}),"."]})]}),(0,t.jsx)("video",{src:"/assets/videos/terrain-cull.mp4",className:"embedded-video",controls:!0})]})}),n.push({title:"IP Camera System",techStack:"Go, Postgres, FFmpeg, React",path:"/projects/ip-camera"}),s["IP Camera System"]=(0,t.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,t.jsx)("p",{className:"w-full",children:"System Architecture"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`           
Browser ─→ Backend ─┬─→ Postgres
                    │
                    ├─→ Redis
                    │
                    ├─→ Camera Manager (Go) 
                    │   └─ Stream Worker (per camera)
                    │
                    ├─→ Detection Manager (Python) 
                    │   └─ Detection Worker (per camera)
                    │
                    ├─→ Recording Manager (Go) 
                    │   └─ Record Worker 
                    │
                    ╰─→ Cleanup Worker (global)

`})}),(0,t.jsx)("p",{className:"w-full",children:"Video Ingestion"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`                      
Camera RTSP Stream ─→ Stream Worker (1 per camera)
                                  │
                                  │ tee muxer
         ╭────────────────────────┴──────╮
         │ via RTSP                      │
         ↓                               │
Feed into MediaMTX                       │
                                         │
                 ╭───────────────────────┤ 
                 │ Segment Metadata      │ Segment File
                 ↓                       ↓
             Named Pipe              Save to Disk
                 │
                 │          stream/
                 ↓          └─ <camera_uuid>
              Backend          └─ 2006-01-02_15-05-04.ts
                 │
                 │                       
                 ↓                       
              Postgres         

`})}),(0,t.jsx)("p",{className:"w-full",children:"Camera Lifecycle"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`
Browser       Backend        Postgres    Camera Manager      Redis       Workers

   │             │              │              │               │            │
   │ Update Cam  │              │              │               │            │
   ├────────────→│              │              │               │            │
   │             │ Update Row   │              │               │            │
   │             ├─────────────→│              │               │            │
   │             │ Notify       │              │               │            │
   │             ├────────────────────────────→│               │            │
   │             │              │              │ Cancel        │            │
   │             │              │              ├───────────────────────────→│
   │             │              │              │ Start New     │            │
   │             │              │              │ And Monitor   │            │
   │             │              │              ├───────────────────────────→│
   │             │              │              │ Status Update │            │
   │             │              │              ├──────────────→│            │
   │ Get Cam     │              │              │               │            │
   ├────────────→│              │              │               │            │
   │             │ Query Info   │              │               │            │
   │             │←─────────────┤              │               │            │
   │             │ Query Status │              │               │            │
   │             │←────────────────────────────────────────────┤            │
   │ Reponse     │              │              │               │            │
   │←────────────┤              │              │               │            │
   │             │              │              │               │            │
   
`})}),(0,t.jsx)("p",{className:"w-full",children:"Viewing Last 24 hours"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`
                  Request Snapshot 

                   <camera_uuid>

                         │
                         ↓
                      Backend 
                         │
                         ↓
                Create Snapshot UUID
                         │
                         ↓
                   Query Postgres 
                         │
                         ↓
                  Segment Metadata
                         │
                         ↓
                 Hardlink segments

stream/                            snapshot/
└─ <camera_uuid>                   └─ <uuid>
   └─ segment1.ts    (Hardlink)      └─ segment1.ts
   └─ segment2.ts    ─────────→      └─ segment2.ts
   └─ segment3.ts                    └─ segment3.ts
   ...                               ...
      
                         │
                         ↓
               Generate playlist.m3u8
                         │
                         ↓
                   Serve Snapshot
                         │
                         ↓
               Snapshot session ends
                   or TTL expires
                         │
                         ↓
             Delete Snapshot Directory
                  (and hardlinks)
   
`})}),(0,t.jsx)("p",{className:"w-full",children:"Saving a Clip"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`
                    Request Clip 

                   <snapshot_uuid>
                   <start_time>
                   <end_time> 
 
                         │
                         ↓
                      Backend
                         │
                         ↓
                  Create Clip UUID
                         │
                         ↓
                Range Query Postgres
                         │
                         ↓
                  Segment Metadata
                         │
                         ↓
                 Hardlink segments

snapshot/                          clip/
└─ <snapshot_uuid>                 └─ <uuid>
   └─ segment1.ts    (Hardlink)       └─ segment1.ts
   └─ segment2.ts    ─────────→       └─ segment2.ts
   └─ segment3.ts                     └─ segment3.ts
   ...                                ...

                         │
                         ↓
                Generate concat.txt
 
                 file segment1.ts
                 file segment2.ts
                 ...
                 file segmentN.ts
 
                         │
                         ↓
                       FFmpeg
                         │
                         ↓
                  Save Generated 
                   Clip to Disk
                         │
                         ↓
               Delete Clip Directory
                  (and hardlinks)

`})}),(0,t.jsx)("p",{className:"w-full",children:"Maintaining 24 Hour Buffer"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`
            Query Postgres
           
      WHERE end_time < NOW() - 24h

                   │
                   ↓
            Expired Segments
                   │
      ╭────────────┴────────────╮
      │                         │
      ↓                         ↓
Delete expired       Remove metadata rows
 from stream/         

`})}),(0,t.jsx)("p",{className:"w-full",children:"Detection and Alerts"}),(0,t.jsx)("div",{className:"diagram w-full h-fit flex justify-center mt-1 mb-2",children:(0,t.jsx)("pre",{children:`
   Detection Worker
   ─ Samples Frames from MediaMTX
   ─ OpenCV Inference
                  │
                  ♦ Detection Event
                  ↓
               Backend
                  │
          ╭───────┴─────────────╮
          │                     │
          ↓                     ↓
  Record Worker             Log Event
  ─ RTSP from MediaMTX          │
  ─ Write to Disk               ↓
                             Postgres

`})})]}),e.s(["descriptions",0,s,"projects",0,n])},4889,e=>{"use strict";var t=e.i(1398),r=e.i(1788);e.s(["Title",0,function({text:e,className:n=""}){let[s,a]=(0,r.useState)(!1),o=(0,r.useRef)([]);return(0,t.jsx)("div",{className:"bg-[var(--bg)] w-full flex justify-start",children:(0,t.jsxs)("div",{id:"border",className:`${n}`,children:[(0,t.jsx)("div",{id:"spacer"}),(0,t.jsx)("div",{className:`flex justify-start w-fit ${s?"rainbow":""}`,onMouseEnter:()=>{let e=setTimeout(()=>a(!0),200);o.current.push(e)},onMouseLeave:()=>{o.current.forEach(clearTimeout),o.current=[]},children:e.split("").map((r,n)=>(0,t.jsx)("span",{style:{animationDelay:`${90*n}ms`},className:"daydream rainbow-text",onAnimationEnd:()=>{n===e.length-1&&a(!1)},children:r},n))})]})})}])},523,e=>{"use strict";var t=e.i(1398),r=e.i(2644),n=e.i(1788),s=e.i(4889);let a=["    ","  - "," -- ","<-- "],o=["<-- ","<-  ","<   ","    "].reverse();function i(){let[e,r]=(0,n.useState)(0),[s,i]=(0,n.useState)(!1),[l,c]=(0,n.useState)("forward"),[u,f]=(0,n.useState)(!1),d=(e,t,r,n,s=!1)=>{for(let a=t;a<e;a++){let t=s?e-a-1:a;setTimeout(()=>{n(t)},a*r)}};return(0,n.useEffect)(()=>{let t=e===a.length-1,n=0===e;(i(!t&&!n),!t||u||s)?n&&u&&!s&&(c("forward"),d(a.length,0,30,r)):(c("backward"),d(o.length,0,30,r,!0))},[e,u,s]),(0,t.jsxs)("button",{id:"back",onClick:()=>window.location.href="/",className:"flex w-fit h-fit justify-center whitespace-prewrap",children:[(0,t.jsx)("span",{className:`arrow inline-block w-5 ${u?"text-[var(--accent)]":"text-[var(--text)]"}`,children:"forward"===l?a[e]:o[e]}),(0,t.jsx)("span",{className:"text selection",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:"Back"})]})}function l({title:e="Title",techStack:r="Tech Stack",description:a="Description"}){return(0,n.useEffect)(()=>{document.title=e},[]),(0,t.jsxs)("section",{id:"content",children:[(0,t.jsx)("section",{id:"header",className:"z-10 bg-[var(--bg)] sticky top-0"}),(0,t.jsxs)("section",{id:"body",children:[(0,t.jsxs)("div",{className:"z-20 w-full h-fit sticky top-[3rem]",children:[(0,t.jsx)("div",{className:"bg-[var(--bg)] h-[3rem] w-[calc(100%+1.25rem)] flex items-end justify-start",style:{marginLeft:"-.625rem"},children:(0,t.jsx)(i,{})}),(0,t.jsx)(s.Title,{text:e,className:"text-lg mx-3 pt-3"})]}),(0,t.jsx)("div",{className:"w-full h-fit",children:(0,t.jsxs)("div",{className:"subtitle mx-3",children:[(0,t.jsx)("div",{id:"spacer"}),(0,t.jsx)("div",{children:r})]})}),(0,t.jsx)("div",{className:"project",children:a})]}),(0,t.jsx)("section",{id:"footer"})]})}e.s(["__N_SSG",0,!0,"default",0,function({project:e}){return e?(0,t.jsx)(l,{title:e.title,techStack:e.techStack,description:r.descriptions[e.title]}):null}],523)},1989,(e,t,r)=>{let n="/projects/[slug]";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(523)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},8761,e=>{e.v(t=>Promise.all(["static/chunks/143re0x3xqmov.js"].map(t=>e.l(t))).then(()=>t(3594)))},8805,e=>{e.v(t=>Promise.all(["static/chunks/0txjufvf6ju__.js"].map(t=>e.l(t))).then(()=>t(9466)))}]);