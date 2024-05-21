"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[2231],{41033:(e,r,t)=>{t.d(r,{A:()=>i});t(9950);var a=t(86781),n=t(68459),s=t(81924),l=t(44414);const i=e=>(0,l.jsx)(a.A,{children:(0,l.jsx)(n.A,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("div",{children:(0,l.jsxs)(s.A,{className:"m-0 mb-0",children:[(0,l.jsx)(s.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,r)=>e.active?(0,l.jsx)(s.A.Item,{active:!0,children:e.label},r):(0,l.jsx)(s.A.Item,{href:e.path,children:e.label},r)))]})}),(0,l.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,r,t)=>{t.d(r,{Z:()=>m,z:()=>l});var a=t(9950),n=t(9449),s=t(44414);const l=e=>{let{defaultValues:r,resolver:t,children:l,onSubmit:i,formClass:o}=e;const c=(0,n.mN)({defaultValues:r,resolver:t}),{handleSubmit:d,register:u,control:m,formState:{errors:f}}=c;return(0,s.jsx)("form",{onSubmit:d(i),className:o,noValidate:!0,children:Array.isArray(l)?l.map((e=>e.props&&e.props.name?a.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:f,control:m}}):e)):l})};var i=t(75623),o=t(64055),c=t(48738),d=t.n(c);const u=e=>{let{name:r,placeholder:t,refCallback:n,errors:l,control:c,register:u,className:m}=e;const[f,p]=(0,a.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A,{className:"mb-0",children:[(0,s.jsx)(o.A.Control,{type:f?"text":"password",placeholder:t,name:r,id:r,as:"input",ref:e=>{n&&n(e)},className:m,isInvalid:!(!l||!l[r]),...u?u(r):{},autoComplete:r}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":f}),"data-password":f?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{p(!f)}})})]})})},m=e=>{let{label:r,type:t,name:a,placeholder:n,register:l,errors:i,control:c,className:d,labelClassName:m,containerClass:f,refCallback:p,children:b,rows:h,symbol:x,...g}=e;const y="textarea"===t?"textarea":"select"===t?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===t?(0,s.jsx)("input",{type:t,name:a,id:a,...l?l(a):{},...g,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Group,{className:f,children:[r?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(o.A.Label,{className:m,children:r})," ",b," "]}):null,(0,s.jsx)(u,{name:a,placeholder:n,refCallback:p,errors:i,register:l,className:d}),i&&i[a]?(0,s.jsx)(o.A.Control.Feedback,{type:"invalid",className:"d-block",children:i[a].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===t||"radio"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Group,{className:f,children:[(0,s.jsx)(o.A.Check,{type:t,label:r,name:a,id:a,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[a]),...l?l(a):{},...g}),i&&i[a]?(0,s.jsx)(o.A.Control.Feedback,{type:"invalid",children:i[a].message}):null]})}):(0,s.jsxs)(o.A.Group,{className:f,children:[r?(0,s.jsx)(o.A.Label,{className:m,children:r}):null,x?(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("span",{className:"input-group-text",id:a,children:x}),(0,s.jsx)(o.A.Control,{type:t,placeholder:n,name:a,id:a,as:y,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[a]),...l?l(a):{},rows:h,...g,autoComplete:a,children:b||null})]}):(0,s.jsx)(o.A.Control,{type:t,placeholder:n,name:a,id:a,as:y,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[a]),...l?l(a):{},rows:h,...g,autoComplete:a,children:b||null}),i&&i[a]?(0,s.jsx)(o.A.Control.Feedback,{type:"invalid",children:i[a].message}):null]})})})})}},92231:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(9950),n=t(471),s=t(86781),l=t(68459),i=t(97937),o=t(41033),c=t(68984),d=t(26473),u=t(60666),m=t(70030),f=t(9449),p=t(27081),b=t(42074),h=t(44414);const x=()=>{const{t:e}=(0,m.B)(),r=(0,d.t)(u.Ik().shape({title:u.Yj().required(e("Please select title")).min(10,"Atleast 10 char required")})),[t,o]=(0,a.useState)(""),[x,g]=(0,a.useState)(""),{register:y,handleSubmit:j,setValue:v,reset:N,formState:{errors:A}}=((0,p.wA)(),(0,f.mN)({defaultValues:{},resolver:r})),w=j((async e=>{})),[C,k]=(0,a.useState)(new Date);return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsxs)("div",{className:"alert alert-success",children:[t,(0,h.jsx)(b.N_,{to:"/",children:" Back to Dashboard."})]}),x&&(0,h.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:x}),(0,h.jsx)(n.A,{children:(0,h.jsx)(n.A.Body,{children:(0,h.jsxs)(s.A,{children:[(0,h.jsx)(l.A,{lg:6,children:(0,h.jsxs)("form",{onSubmit:w,children:[(0,h.jsx)(c.Z,{label:"Bank name",type:"text",register:y,name:"bank_name",errors:A,containerClass:"mb-3"},"bank_name"),(0,h.jsx)(c.Z,{label:"Bank number",type:"text",register:y,name:"bank_number",errors:A,containerClass:"mb-3"},"bank_number"),(0,h.jsx)(c.Z,{label:"Routing number",type:"text",register:y,name:"routing_number",errors:A,containerClass:"mb-3"},"routing_number"),(0,h.jsx)(c.Z,{label:"Account number",type:"text",register:y,name:"account_number",errors:A,containerClass:"mb-3"},"account_number"),(0,h.jsx)(c.Z,{label:"IBAN",type:"text",register:y,name:"iban",errors:A,containerClass:"mb-3"},"iban"),(0,h.jsx)(c.Z,{label:"SWIFT / BIC",type:"text",register:y,name:"swift",errors:A,containerClass:"mb-3"},"swift"),(0,h.jsx)(i.A,{variant:"primary",type:"submit",children:"Save Settings"})]})}),(0,h.jsx)(l.A,{lg:6}),(0,h.jsx)(l.A,{lg:3})]})})})]})},g=()=>(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(o.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Payment Setup",path:"/notice/new",active:!0}],title:"Payment Setup"}),(0,h.jsx)(s.A,{children:(0,h.jsxs)(l.A,{children:[(0,h.jsxs)(i.A,{className:"waves-effect waves-light mb-3",onClick:()=>{},children:[(0,h.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Make Payment"]}),(0,h.jsx)(x,{})]})})]})},97937:(e,r,t)=>{t.d(r,{A:()=>d});var a=t(48738),n=t.n(a),s=t(9950),l=t(82111),i=t(44089),o=t(44414);const c=s.forwardRef(((e,r)=>{let{as:t,bsPrefix:a,variant:s="primary",size:c,active:d=!1,disabled:u=!1,className:m,...f}=e;const p=(0,i.oU)(a,"btn"),[b,{tagName:h}]=(0,l.Am)({tagName:t,disabled:u,...f}),x=h;return(0,o.jsx)(x,{...b,...f,ref:r,disabled:u,className:n()(m,p,d&&"active",s&&"".concat(p,"-").concat(s),c&&"".concat(p,"-").concat(c),f.href&&u&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,r,t)=>{t.d(r,{Tj:()=>n,mf:()=>s});var a=t(9950);function n(e,r){let t=0;return a.Children.map(e,(e=>a.isValidElement(e)?r(e,t++):e))}function s(e,r){return a.Children.toArray(e).some((e=>a.isValidElement(e)&&e.type===r))}},64055:(e,r,t)=>{t.d(r,{A:()=>B});var a=t(48738),n=t.n(a),s=t(11942),l=t.n(s),i=t(9950),o=t(44414);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=i.forwardRef(((e,r)=>{let{as:t="div",className:a,type:s="valid",tooltip:l=!1,...i}=e;return(0,o.jsx)(t,{...i,ref:r,className:n()(a,"".concat(s,"-").concat(l?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=t(14531),f=t(99288),p=t(44089);const b=i.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,htmlFor:s,...l}=e;const{controlId:c}=(0,i.useContext)(f.A);return t=(0,p.oU)(t,"form-check-label"),(0,o.jsx)("label",{...l,ref:r,htmlFor:s||c,className:n()(a,t)})}));b.displayName="FormCheckLabel";const h=b;var x=t(22890);const g=i.forwardRef(((e,r)=>{let{id:t,bsPrefix:a,bsSwitchPrefix:s,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:b=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:j,feedbackType:v,className:N,style:A,title:w="",type:C="checkbox",label:k,children:I,as:S="input",...F}=e;a=(0,p.oU)(a,"form-check"),s=(0,p.oU)(s,"form-switch");const{controlId:O}=(0,i.useContext)(f.A),P=(0,i.useMemo)((()=>({controlId:t||O})),[O,t]),R=!I&&null!=k&&!1!==k||(0,x.mf)(I,h),T=(0,o.jsx)(m.A,{...F,type:"switch"===C?"checkbox":C,ref:r,isValid:b,isInvalid:g,disabled:d,as:S});return(0,o.jsx)(f.A.Provider,{value:P,children:(0,o.jsx)("div",{style:A,className:n()(N,R&&a,l&&"".concat(a,"-inline"),c&&"".concat(a,"-reverse"),"switch"===C&&s),children:I||(0,o.jsxs)(o.Fragment,{children:[T,R&&(0,o.jsx)(h,{title:w,children:k}),j&&(0,o.jsx)(u,{type:v,tooltip:y,children:j})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:m.A,Label:h});t(2241);const j=i.forwardRef(((e,r)=>{let{bsPrefix:t,type:a,size:s,htmlSize:l,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:b,readOnly:h,as:x="input",...g}=e;const{controlId:y}=(0,i.useContext)(f.A);return t=(0,p.oU)(t,"form-control"),(0,o.jsx)(x,{...g,type:a,size:l,ref:r,readOnly:h,id:c||y,className:n()(d,b?"".concat(t,"-plaintext"):t,s&&"".concat(t,"-").concat(s),"color"===a&&"".concat(t,"-color"),u&&"is-valid",m&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:u}),N=i.forwardRef(((e,r)=>{let{className:t,bsPrefix:a,as:s="div",...l}=e;return a=(0,p.oU)(a,"form-floating"),(0,o.jsx)(s,{ref:r,className:n()(t,a),...l})}));N.displayName="FormFloating";const A=N;var w=t(584),C=t(90729);const k=i.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,id:s,...l}=e;const{controlId:c}=(0,i.useContext)(f.A);return t=(0,p.oU)(t,"form-range"),(0,o.jsx)("input",{...l,type:"range",ref:r,className:n()(a,t),id:s||c})}));k.displayName="FormRange";const I=k,S=i.forwardRef(((e,r)=>{let{bsPrefix:t,size:a,htmlSize:s,className:l,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:b}=(0,i.useContext)(f.A);return t=(0,p.oU)(t,"form-select"),(0,o.jsx)("select",{...m,size:s,ref:r,className:n()(l,t,a&&"".concat(t,"-").concat(a),c&&"is-valid",d&&"is-invalid"),id:u||b})}));S.displayName="FormSelect";const F=S,O=i.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,as:s="small",muted:l,...i}=e;return t=(0,p.oU)(t,"form-text"),(0,o.jsx)(s,{...i,ref:r,className:n()(a,t,l&&"text-muted")})}));O.displayName="FormText";const P=O,R=i.forwardRef(((e,r)=>(0,o.jsx)(y,{...e,ref:r,type:"switch"})));R.displayName="Switch";const T=Object.assign(R,{Input:y.Input,Label:y.Label}),L=i.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,children:s,controlId:l,label:i,...c}=e;return t=(0,p.oU)(t,"form-floating"),(0,o.jsxs)(w.A,{ref:r,className:n()(a,t),controlId:l,...c,children:[s,(0,o.jsx)("label",{htmlFor:l,children:i})]})}));L.displayName="FloatingLabel";const U=L,z={_ref:l().any,validated:l().bool,as:l().elementType},V=i.forwardRef(((e,r)=>{let{className:t,validated:a,as:s="form",...l}=e;return(0,o.jsx)(s,{...l,ref:r,className:n()(t,a&&"was-validated")})}));V.displayName="Form",V.propTypes=z;const B=Object.assign(V,{Group:w.A,Control:v,Floating:A,Check:y,Switch:T,Label:C.A,Text:P,Range:I,Select:F,FloatingLabel:U})},14531:(e,r,t)=>{t.d(r,{A:()=>d});var a=t(48738),n=t.n(a),s=t(9950),l=t(99288),i=t(44089),o=t(44414);const c=s.forwardRef(((e,r)=>{let{id:t,bsPrefix:a,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:f="input",...p}=e;const{controlId:b}=(0,s.useContext)(l.A);return a=(0,i.oU)(a,"form-check-input"),(0,o.jsx)(f,{...p,ref:r,type:d,id:t||b,className:n()(c,a,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,r,t)=>{t.d(r,{A:()=>i});var a=t(9950),n=t(99288),s=t(44414);const l=a.forwardRef(((e,r)=>{let{controlId:t,as:l="div",...i}=e;const o=(0,a.useMemo)((()=>({controlId:t})),[t]);return(0,s.jsx)(n.A.Provider,{value:o,children:(0,s.jsx)(l,{...i,ref:r})})}));l.displayName="FormGroup";const i=l},75623:(e,r,t)=>{t.d(r,{A:()=>f});var a=t(48738),n=t.n(a),s=t(9950),l=t(44089),i=t(14531),o=t(54947),c=t(44414);const d=s.forwardRef(((e,r)=>{let{className:t,bsPrefix:a,as:s="span",...i}=e;return a=(0,l.oU)(a,"input-group-text"),(0,c.jsx)(s,{ref:r,className:n()(t,a),...i})}));d.displayName="InputGroupText";const u=d,m=s.forwardRef(((e,r)=>{let{bsPrefix:t,size:a,hasValidation:i,className:d,as:u="div",...m}=e;t=(0,l.oU)(t,"input-group");const f=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(o.A.Provider,{value:f,children:(0,c.jsx)(u,{ref:r,...m,className:n()(d,t,a&&"".concat(t,"-").concat(a),i&&"has-validation")})})}));m.displayName="InputGroup";const f=Object.assign(m,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(i.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(i.A,{type:"checkbox",...e})})})},70030:(e,r,t)=>{t.d(r,{B:()=>p});var a=t(80296),n=t(64467),s=t(9950),l=t(6955);function i(){if(console&&console.warn){for(var e,r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var o={};function c(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"===typeof r[0]&&o[r[0]]||("string"===typeof r[0]&&(o[r[0]]=new Date),i.apply(void 0,r))}function d(e,r,t){e.loadNamespaces(r,(function(){if(e.isInitialized)t();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),t()}))}}))}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(e,r){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=r?t.current:e}),[e,r]),t.current};function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.i18n,n=(0,s.useContext)(l.gJ)||{},i=n.i18n,o=n.defaultNS,u=t||i||(0,l.TO)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new l.hz),!u){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[p,{},!1];return b.t=p,b.i18n={},b.ready=!1,b}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=m(m(m({},(0,l.rV)()),u.options.react),r),x=h.useSuspense,g=h.keyPrefix,y=e||o||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var j=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.languages&&r.languages.length?void 0!==r.options.ignoreJSONStructure?r.hasLoadedNamespace(e,{precheck:function(r,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!a(r.isLanguageChangingTo,e))return!1}}):function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.languages[0],n=!!r.options&&r.options.fallbackLng,s=r.languages[r.languages.length-1];if("cimode"===a.toLowerCase())return!0;var l=function(e,t){var a=r.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===a||2===a};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!l(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(a,e)||!(r.services.backendConnector.backend&&(!r.options.resources||r.options.partialBundledLanguages))||!(!l(a,e)||n&&!l(s,e)))}(e,r,t):(c("i18n.languages were undefined or empty",r.languages),!0)}(e,u,h)}));function v(){return u.getFixedT(null,"fallback"===h.nsMode?y:y[0],g)}var N=(0,s.useState)(v),A=(0,a.A)(N,2),w=A[0],C=A[1],k=y.join(),I=f(k),S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=h.bindI18n,r=h.bindI18nStore;function t(){S.current&&C(v)}return S.current=!0,j||x||d(u,y,(function(){S.current&&C(v)})),j&&I&&I!==k&&S.current&&C(v),e&&u&&u.on(e,t),r&&u&&u.store.on(r,t),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),r&&u&&r.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,k]);var F=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!F.current&&C(v),F.current=!1}),[u,g]);var O=[w,u,j];if(O.t=w,O.i18n=u,O.ready=j,j)return O;if(!j&&!x)return O;throw new Promise((function(e){d(u,y,(function(){e()}))}))}},43145:(e,r,t)=>{function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}t.d(r,{A:()=>a})},80296:(e,r,t)=>{t.d(r,{A:()=>n});var a=t(27800);function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,s,l,i=[],o=!0,c=!1;try{if(s=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;o=!1}else for(;!(o=(a=s.call(t)).done)&&(i.push(a.value),i.length!==r);o=!0);}catch(e){c=!0,n=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,r)||(0,a.A)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(e,r,t)=>{t.d(r,{A:()=>n});var a=t(43145);function n(e,r){if(e){if("string"===typeof e)return(0,a.A)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,a.A)(e,r):void 0}}}}]);