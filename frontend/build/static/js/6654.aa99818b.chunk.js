"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[6654,5002],{33856:(e,r,a)=>{a.d(r,{l:()=>s});var t=a(44030),n=a(46417);const s=()=>(0,n.jsx)(t.Z,{animation:"border",role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},20192:(e,r,a)=>{a.d(r,{Z:()=>i});a(47313);var t=a(63849),n=a(31616),s=a(52198),l=a(46417);const i=e=>(0,l.jsx)(t.Z,{children:(0,l.jsx)(n.Z,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("div",{className:"page-title-right",children:(0,l.jsxs)(s.Z,{className:"m-0",children:[(0,l.jsx)(s.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,r)=>e.active?(0,l.jsx)(s.Z.Item,{active:!0,children:e.label},r):(0,l.jsx)(s.Z.Item,{href:e.path,children:e.label},r)))]})}),(0,l.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,r,a)=>{a.d(r,{y:()=>f,J:()=>l});var t=a(47313),n=a(75627),s=a(46417);const l=e=>{let{defaultValues:r,resolver:a,children:l,onSubmit:i,formClass:o}=e;const c=(0,n.cI)({defaultValues:r,resolver:a}),{handleSubmit:d,register:u,control:f,formState:{errors:m}}=c;return(0,s.jsx)("form",{onSubmit:d(i),className:o,noValidate:!0,children:Array.isArray(l)?l.map((e=>e.props&&e.props.name?t.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:m,control:f}}):e)):l})};var i=a(38394),o=a(88178),c=a(72884),d=a.n(c);const u=e=>{let{name:r,placeholder:a,refCallback:n,errors:l,control:c,register:u,className:f}=e;const[m,p]=(0,t.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.Z,{className:"mb-0",children:[(0,s.jsx)(o.Z.Control,{type:m?"text":"password",placeholder:a,name:r,id:r,as:"input",ref:e=>{n&&n(e)},className:f,isInvalid:!(!l||!l[r]),...u?u(r):{},autoComplete:r}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":m}),"data-password":m?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{p(!m)}})})]})})},f=e=>{let{label:r,type:a,name:t,placeholder:n,register:l,errors:i,control:c,className:d,labelClassName:f,containerClass:m,refCallback:p,children:h,rows:x,...b}=e;const v="textarea"===a?"textarea":"select"===a?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===a?(0,s.jsx)("input",{type:a,name:t,id:t,...l?l(t):{},...b,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z.Group,{className:m,children:[r?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(o.Z.Label,{className:f,children:r})," ",h," "]}):null,(0,s.jsx)(u,{name:t,placeholder:n,refCallback:p,errors:i,register:l,className:d}),i&&i[t]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[t].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===a||"radio"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z.Group,{className:m,children:[(0,s.jsx)(o.Z.Check,{type:a,label:r,name:t,id:t,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[t]),...l?l(t):{},...b}),i&&i[t]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:i[t].message}):null]})}):(0,s.jsxs)(o.Z.Group,{className:m,children:[r?(0,s.jsx)(o.Z.Label,{className:f,children:r}):null,(0,s.jsx)(o.Z.Control,{type:a,placeholder:n,name:t,id:t,as:v,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[t]),...l?l(t):{},rows:x,...b,autoComplete:t,children:h||null}),i&&i[t]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:i[t].message}):null]})})})})}},6654:(e,r,a)=>{a.r(r),a.d(r,{default:()=>y});var t=a(47313),n=a(51449),s=a(63849),l=a(31616),i=a(93298),o=a(20192),c=a(52487),d=a(62563),u=a(3463),f=a(24511),m=a(75627),p=a(56352),h=a(20253),x=a(33689),b=a(33856),v=a(46417);const g=()=>{const{t:e}=(0,f.$)(),r=(0,d.X)(u.Ry().shape({name:u.Z_().required(e("Please select name")),email:u.Z_().required(e("Please select name")).email(e("Please valid Email")),role_id:u.Z_().required(e("Please select role"))})),[a,o]=(0,t.useState)(""),[g,y]=(0,t.useState)(""),[j,N]=(0,t.useState)(!1),w=(0,p.I0)(),{flats:Z}=(0,p.v9)((e=>({flats:e.Flat.flats})));(0,t.useEffect)((()=>{w((0,h.i)())}),[]);const{register:C,handleSubmit:I,setError:k,formState:{errors:S}}=(0,m.cI)({defaultValues:{},resolver:r}),F=I((async e=>{N(!0),w((0,x.Uy)(e)).unwrap().then((e=>{e&&!0===e.status&&o(e.message),N(!1)})).catch((e=>{for(var r in e.errors)try{k(r,{message:e.errors[r].toString()})}catch(a){}N(!1)}))}));return(0,v.jsxs)(v.Fragment,{children:[a&&(0,v.jsx)("div",{className:"alert alert-success",children:a}),g&&(0,v.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,v.jsx)(n.Z,{children:(0,v.jsx)(n.Z.Body,{children:(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(l.Z,{lg:6,children:(0,v.jsxs)("form",{onSubmit:F,children:[(0,v.jsx)(c.y,{label:"Name",type:"text",register:C,name:"name",errors:S,rows:"5",containerClass:"mb-3"},"name"),(0,v.jsx)(c.y,{label:"Email",type:"text",register:C,name:"email",errors:S,rows:"5",containerClass:"mb-3"},"email"),(0,v.jsxs)(c.y,{type:"select",label:"Role",name:"role_id",containerClass:"mb-3",register:C,errors:S,children:[(0,v.jsx)("option",{value:"",children:"Select Role"}),(0,v.jsx)("option",{value:"staff",children:"Staff"}),(0,v.jsx)("option",{value:"admin",children:"Admin"})]}),j?(0,v.jsx)(b.l,{}):(0,v.jsx)(i.Z,{variant:"primary",type:"submit",children:"Create User"})]})}),(0,v.jsx)(l.Z,{lg:6}),(0,v.jsx)(l.Z,{lg:3})]})})})]})},y=()=>(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)(o.Z,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Users",path:"/user"},{label:"New Staff",path:"/notice/new",active:!0}],title:"New Staff"}),(0,v.jsx)(s.Z,{children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(g,{})})})]})},93298:(e,r,a)=>{a.d(r,{Z:()=>d});var t=a(72884),n=a.n(t),s=a(47313),l=a(16184),i=a(68524),o=a(46417);const c=s.forwardRef(((e,r)=>{let{as:a,bsPrefix:t,variant:s="primary",size:c,active:d=!1,disabled:u=!1,className:f,...m}=e;const p=(0,i.vE)(t,"btn"),[h,{tagName:x}]=(0,l.FT)({tagName:a,disabled:u,...m}),b=x;return(0,o.jsx)(b,{...h,...m,ref:r,disabled:u,className:n()(f,p,d&&"active",s&&"".concat(p,"-").concat(s),c&&"".concat(p,"-").concat(c),m.href&&u&&"disabled")})}));c.displayName="Button";const d=c},46682:(e,r,a)=>{a.d(r,{UI:()=>n,XW:()=>s});var t=a(47313);function n(e,r){let a=0;return t.Children.map(e,(e=>t.isValidElement(e)?r(e,a++):e))}function s(e,r){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===r))}},88178:(e,r,a)=>{a.d(r,{Z:()=>V});var t=a(72884),n=a.n(t),s=a(75192),l=a.n(s),i=a(47313),o=a(46417);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=i.forwardRef(((e,r)=>{let{as:a="div",className:t,type:s="valid",tooltip:l=!1,...i}=e;return(0,o.jsx)(a,{...i,ref:r,className:n()(t,"".concat(s,"-").concat(l?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var f=a(56084),m=a(5978),p=a(68524);const h=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,htmlFor:s,...l}=e;const{controlId:c}=(0,i.useContext)(m.Z);return a=(0,p.vE)(a,"form-check-label"),(0,o.jsx)("label",{...l,ref:r,htmlFor:s||c,className:n()(t,a)})}));h.displayName="FormCheckLabel";const x=h;var b=a(46682);const v=i.forwardRef(((e,r)=>{let{id:a,bsPrefix:t,bsSwitchPrefix:s,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:v=!1,feedbackTooltip:g=!1,feedback:y,feedbackType:j,className:N,style:w,title:Z="",type:C="checkbox",label:I,children:k,as:S="input",...F}=e;t=(0,p.vE)(t,"form-check"),s=(0,p.vE)(s,"form-switch");const{controlId:O}=(0,i.useContext)(m.Z),P=(0,i.useMemo)((()=>({controlId:a||O})),[O,a]),E=!k&&null!=I&&!1!==I||(0,b.XW)(k,x),R=(0,o.jsx)(f.Z,{...F,type:"switch"===C?"checkbox":C,ref:r,isValid:h,isInvalid:v,disabled:d,as:S});return(0,o.jsx)(m.Z.Provider,{value:P,children:(0,o.jsx)("div",{style:w,className:n()(N,E&&t,l&&"".concat(t,"-inline"),c&&"".concat(t,"-reverse"),"switch"===C&&s),children:k||(0,o.jsxs)(o.Fragment,{children:[R,E&&(0,o.jsx)(x,{title:Z,children:I}),y&&(0,o.jsx)(u,{type:j,tooltip:g,children:y})]})})})}));v.displayName="FormCheck";const g=Object.assign(v,{Input:f.Z,Label:x});a(21024);const y=i.forwardRef(((e,r)=>{let{bsPrefix:a,type:t,size:s,htmlSize:l,id:c,className:d,isValid:u=!1,isInvalid:f=!1,plaintext:h,readOnly:x,as:b="input",...v}=e;const{controlId:g}=(0,i.useContext)(m.Z);return a=(0,p.vE)(a,"form-control"),(0,o.jsx)(b,{...v,type:t,size:l,ref:r,readOnly:x,id:c||g,className:n()(d,h?"".concat(a,"-plaintext"):a,s&&"".concat(a,"-").concat(s),"color"===t&&"".concat(a,"-color"),u&&"is-valid",f&&"is-invalid")})}));y.displayName="FormControl";const j=Object.assign(y,{Feedback:u}),N=i.forwardRef(((e,r)=>{let{className:a,bsPrefix:t,as:s="div",...l}=e;return t=(0,p.vE)(t,"form-floating"),(0,o.jsx)(s,{ref:r,className:n()(a,t),...l})}));N.displayName="FormFloating";const w=N;var Z=a(87021),C=a(41709);const I=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,id:s,...l}=e;const{controlId:c}=(0,i.useContext)(m.Z);return a=(0,p.vE)(a,"form-range"),(0,o.jsx)("input",{...l,type:"range",ref:r,className:n()(t,a),id:s||c})}));I.displayName="FormRange";const k=I,S=i.forwardRef(((e,r)=>{let{bsPrefix:a,size:t,htmlSize:s,className:l,isValid:c=!1,isInvalid:d=!1,id:u,...f}=e;const{controlId:h}=(0,i.useContext)(m.Z);return a=(0,p.vE)(a,"form-select"),(0,o.jsx)("select",{...f,size:s,ref:r,className:n()(l,a,t&&"".concat(a,"-").concat(t),c&&"is-valid",d&&"is-invalid"),id:u||h})}));S.displayName="FormSelect";const F=S,O=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,as:s="small",muted:l,...i}=e;return a=(0,p.vE)(a,"form-text"),(0,o.jsx)(s,{...i,ref:r,className:n()(t,a,l&&"text-muted")})}));O.displayName="FormText";const P=O,E=i.forwardRef(((e,r)=>(0,o.jsx)(g,{...e,ref:r,type:"switch"})));E.displayName="Switch";const R=Object.assign(E,{Input:g.Input,Label:g.Label}),L=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,children:s,controlId:l,label:i,...c}=e;return a=(0,p.vE)(a,"form-floating"),(0,o.jsxs)(Z.Z,{ref:r,className:n()(t,a),controlId:l,...c,children:[s,(0,o.jsx)("label",{htmlFor:l,children:i})]})}));L.displayName="FloatingLabel";const T=L,z={_ref:l().any,validated:l().bool,as:l().elementType},A=i.forwardRef(((e,r)=>{let{className:a,validated:t,as:s="form",...l}=e;return(0,o.jsx)(s,{...l,ref:r,className:n()(a,t&&"was-validated")})}));A.displayName="Form",A.propTypes=z;const V=Object.assign(A,{Group:Z.Z,Control:j,Floating:w,Check:g,Switch:R,Label:C.Z,Text:P,Range:k,Select:F,FloatingLabel:T})},56084:(e,r,a)=>{a.d(r,{Z:()=>d});var t=a(72884),n=a.n(t),s=a(47313),l=a(5978),i=a(68524),o=a(46417);const c=s.forwardRef(((e,r)=>{let{id:a,bsPrefix:t,className:c,type:d="checkbox",isValid:u=!1,isInvalid:f=!1,as:m="input",...p}=e;const{controlId:h}=(0,s.useContext)(l.Z);return t=(0,i.vE)(t,"form-check-input"),(0,o.jsx)(m,{...p,ref:r,type:d,id:a||h,className:n()(c,t,u&&"is-valid",f&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},87021:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(47313),n=a(5978),s=a(46417);const l=t.forwardRef(((e,r)=>{let{controlId:a,as:l="div",...i}=e;const o=(0,t.useMemo)((()=>({controlId:a})),[a]);return(0,s.jsx)(n.Z.Provider,{value:o,children:(0,s.jsx)(l,{...i,ref:r})})}));l.displayName="FormGroup";const i=l},38394:(e,r,a)=>{a.d(r,{Z:()=>m});var t=a(72884),n=a.n(t),s=a(47313),l=a(68524),i=a(56084),o=a(94354),c=a(46417);const d=s.forwardRef(((e,r)=>{let{className:a,bsPrefix:t,as:s="span",...i}=e;return t=(0,l.vE)(t,"input-group-text"),(0,c.jsx)(s,{ref:r,className:n()(a,t),...i})}));d.displayName="InputGroupText";const u=d,f=s.forwardRef(((e,r)=>{let{bsPrefix:a,size:t,hasValidation:i,className:d,as:u="div",...f}=e;a=(0,l.vE)(a,"input-group");const m=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(o.Z.Provider,{value:m,children:(0,c.jsx)(u,{ref:r,...f,className:n()(d,a,t&&"".concat(a,"-").concat(t),i&&"has-validation")})})}));f.displayName="InputGroup";const m=Object.assign(f,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(i.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(i.Z,{type:"checkbox",...e})})})},44030:(e,r,a)=>{a.d(r,{Z:()=>c});var t=a(72884),n=a.n(t),s=a(47313),l=a(68524),i=a(46417);const o=s.forwardRef(((e,r)=>{let{bsPrefix:a,variant:t,animation:s="border",size:o,as:c="div",className:d,...u}=e;a=(0,l.vE)(a,"spinner");const f="".concat(a,"-").concat(s);return(0,i.jsx)(c,{ref:r,...u,className:n()(d,f,o&&"".concat(f,"-").concat(o),t&&"text-".concat(t))})}));o.displayName="Spinner";const c=o},24511:(e,r,a)=>{a.d(r,{$:()=>p});var t=a(70885),n=a(4942),s=a(47313),l=a(10412);function i(){if(console&&console.warn){for(var e,r=arguments.length,a=new Array(r),t=0;t<r;t++)a[t]=arguments[t];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var o={};function c(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];"string"===typeof r[0]&&o[r[0]]||("string"===typeof r[0]&&(o[r[0]]=new Date),i.apply(void 0,r))}function d(e,r,a){e.loadNamespaces(r,(function(){if(e.isInitialized)a();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),a()}))}}))}function u(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function f(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?u(Object(a),!0).forEach((function(r){(0,n.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var m=function(e,r){var a=(0,s.useRef)();return(0,s.useEffect)((function(){a.current=r?a.current:e}),[e,r]),a.current};function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.i18n,n=(0,s.useContext)(l.OO)||{},i=n.i18n,o=n.defaultNS,u=a||i||(0,l.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new l.zv),!u){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[p,{},!1];return h.t=p,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=f(f(f({},(0,l.JP)()),u.options.react),r),b=x.useSuspense,v=x.keyPrefix,g=e||o||u.options&&u.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(g);var y=(u.isInitialized||u.initializedStoreOnce)&&g.every((function(e){return function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.languages&&r.languages.length?void 0!==r.options.ignoreJSONStructure?r.hasLoadedNamespace(e,{precheck:function(r,t){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!t(r.isLanguageChangingTo,e))return!1}}):function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.languages[0],n=!!r.options&&r.options.fallbackLng,s=r.languages[r.languages.length-1];if("cimode"===t.toLowerCase())return!0;var l=function(e,a){var t=r.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===t||2===t};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!l(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(t,e)||!(r.services.backendConnector.backend&&(!r.options.resources||r.options.partialBundledLanguages))||!(!l(t,e)||n&&!l(s,e)))}(e,r,a):(c("i18n.languages were undefined or empty",r.languages),!0)}(e,u,x)}));function j(){return u.getFixedT(null,"fallback"===x.nsMode?g:g[0],v)}var N=(0,s.useState)(j),w=(0,t.Z)(N,2),Z=w[0],C=w[1],I=g.join(),k=m(I),S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=x.bindI18n,r=x.bindI18nStore;function a(){S.current&&C(j)}return S.current=!0,y||b||d(u,g,(function(){S.current&&C(j)})),y&&k&&k!==I&&S.current&&C(j),e&&u&&u.on(e,a),r&&u&&u.store.on(r,a),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,a)})),r&&u&&r.split(" ").forEach((function(e){return u.store.off(e,a)}))}}),[u,I]);var F=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!F.current&&C(j),F.current=!1}),[u,v]);var O=[Z,u,y];if(O.t=Z,O.i18n=u,O.ready=y,y)return O;if(!y&&!b)return O;throw new Promise((function(e){d(u,g,(function(){e()}))}))}},30907:(e,r,a)=>{function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}a.d(r,{Z:()=>t})},70885:(e,r,a)=>{a.d(r,{Z:()=>n});var t=a(40181);function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,n,s,l,i=[],o=!0,c=!1;try{if(s=(a=a.call(e)).next,0===r){if(Object(a)!==a)return;o=!1}else for(;!(o=(t=s.call(a)).done)&&(i.push(t.value),i.length!==r);o=!0);}catch(e){c=!0,n=e}finally{try{if(!o&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,r)||(0,t.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,r,a)=>{a.d(r,{Z:()=>n});var t=a(30907);function n(e,r){if(e){if("string"===typeof e)return(0,t.Z)(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,t.Z)(e,r):void 0}}}}]);