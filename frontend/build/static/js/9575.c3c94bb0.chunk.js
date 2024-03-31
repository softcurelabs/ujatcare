"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9575],{33716:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(47313),a=t(63849),i=t(31616),o=t(51449),s=t(8354),c=t(18012),l=t(24511),u=t(46417);const d=e=>{let{noticeHighlights:n}=e;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.Z,{className:"bg-warning text-dark",children:(0,u.jsxs)(o.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title text-dark mb-3",children:"Bulletin Board"}),(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"table table-borderless table-hover table-nowrap table-centered m-0",children:[(0,u.jsx)("thead",{className:"text-dark",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Title"}),(0,u.jsx)("th",{children:"Published On "})]})}),(0,u.jsx)("tbody",{children:(n.data||[]).map((e=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:(0,u.jsx)("h5",{className:"m-0 fw-normal text-dark",children:e.title})}),(0,u.jsx)("td",{className:"text-dark",children:e.schedule_date})]},"notice"+e.id)))})]})})]})})})};var f=t(56352),p=t(52850),g=t(58467);const h=()=>{const{t:e}=(0,l.$)(),n=(0,f.I0)();let{notices:t,user:h,userCustomer:m}=(0,f.v9)((e=>({notices:e.Notice.notices,user:e.Auth.user,userCustomer:e.CustomerAuth.user})));return m&&(h=m),(0,r.useEffect)((()=>{n((0,p.FP)(1))}),[]),(0,u.jsxs)(u.Fragment,{children:[h&&(h.user_role.includes("admin")||h.user_role.includes("staff"))&&(0,u.jsx)(g.Fg,{to:"/dashboard-2"}),(0,u.jsx)(a.Z,{children:(0,u.jsx)(i.Z,{children:(0,u.jsx)("div",{className:"page-title-box",children:(0,u.jsx)("h4",{className:"page-title",children:"Dashboard"})})})}),(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(i.Z,{xl:6,children:(0,u.jsx)(o.Z,{className:"widget-rounded-circle",children:(0,u.jsx)(o.Z.Body,{children:(0,u.jsx)(s.Z,{menuItems:(0,c.pz)()})})})}),(0,u.jsx)(i.Z,{xl:6,children:t&&(0,u.jsx)(d,{noticeHighlights:t})})]})]})}},62396:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(72884),a=t.n(r),i=t(46988),o=t(47313),s=t(64016),c=t(59498);const l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)};var u=t(6280),d=t(75879),f=t(46417);const p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function g(e,n){const t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=p[e];return t+parseInt((0,i.Z)(n,r[0]),10)+parseInt((0,i.Z)(n,r[1]),10)}const h={[s.Wj]:"collapse",[s.Ix]:"collapsing",[s.d0]:"collapsing",[s.cn]:"collapse show"},m=o.forwardRef(((e,n)=>{let{onEnter:t,onEntering:r,onEntered:i,onExit:s,onExiting:p,className:m,children:y,dimension:b="height",in:v=!1,timeout:x=300,mountOnEnter:j=!1,unmountOnExit:w=!1,appear:O=!1,getDimensionValue:E=g,...N}=e;const Z="function"===typeof b?b():b,k=(0,o.useMemo)((()=>l((e=>{e.style[Z]="0"}),t)),[Z,t]),C=(0,o.useMemo)((()=>l((e=>{const n="scroll".concat(Z[0].toUpperCase()).concat(Z.slice(1));e.style[Z]="".concat(e[n],"px")}),r)),[Z,r]),I=(0,o.useMemo)((()=>l((e=>{e.style[Z]=null}),i)),[Z,i]),S=(0,o.useMemo)((()=>l((e=>{e.style[Z]="".concat(E(Z,e),"px"),(0,u.Z)(e)}),s)),[s,E,Z]),A=(0,o.useMemo)((()=>l((e=>{e.style[Z]=null}),p)),[Z,p]);return(0,f.jsx)(d.Z,{ref:n,addEndListener:c.Z,...N,"aria-expanded":N.role?v:null,onEnter:k,onEntering:C,onEntered:I,onExit:S,onExiting:A,childRef:y.ref,in:v,timeout:x,mountOnEnter:j,unmountOnExit:w,appear:O,children:(e,n)=>o.cloneElement(y,{...n,className:a()(m,y.props.className,h[e],"width"===Z&&"collapse-horizontal")})})}))},24511:(e,n,t)=>{t.d(n,{$:()=>g});var r=t(70885),a=t(4942),i=t(47313),o=t(10412);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),s.apply(void 0,n))}function u(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e,n){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,a=(0,i.useContext)(o.OO)||{},s=a.i18n,c=a.defaultNS,d=t||s||(0,o.nI)();if(d&&!d.reportNamespaces&&(d.reportNamespaces=new o.zv),!d){l("You will need to pass in an i18next instance by using initReactI18next");var g=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[g,{},!1];return h.t=g,h.i18n={},h.ready=!1,h}d.options.react&&void 0!==d.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=f(f(f({},(0,o.JP)()),d.options.react),n),y=m.useSuspense,b=m.keyPrefix,v=e||c||d.options&&d.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],d.reportNamespaces.addUsedNamespaces&&d.reportNamespaces.addUsedNamespaces(v);var x=(d.isInitialized||d.initializedStoreOnce)&&v.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!o(r,e)||a&&!o(i,e)))}(e,n,t):(l("i18n.languages were undefined or empty",n.languages),!0)}(e,d,m)}));function j(){return d.getFixedT(null,"fallback"===m.nsMode?v:v[0],b)}var w=(0,i.useState)(j),O=(0,r.Z)(w,2),E=O[0],N=O[1],Z=v.join(),k=p(Z),C=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=m.bindI18n,n=m.bindI18nStore;function t(){C.current&&N(j)}return C.current=!0,x||y||u(d,v,(function(){C.current&&N(j)})),x&&k&&k!==Z&&C.current&&N(j),e&&d&&d.on(e,t),n&&d&&d.store.on(n,t),function(){C.current=!1,e&&d&&e.split(" ").forEach((function(e){return d.off(e,t)})),n&&d&&n.split(" ").forEach((function(e){return d.store.off(e,t)}))}}),[d,Z]);var I=(0,i.useRef)(!0);(0,i.useEffect)((function(){C.current&&!I.current&&N(j),I.current=!1}),[d,b]);var S=[E,d,x];if(S.t=E,S.i18n=d,S.ready=x,x)return S;if(!x&&!y)return S;throw new Promise((function(e){u(d,v,(function(){e()}))}))}},30907:(e,n,t)=>{function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:()=>r})},70885:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(40181);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i,o,s=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw a}}return s}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(30907);function a(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}}]);