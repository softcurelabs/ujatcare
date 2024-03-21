"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[6110],{20192:(e,r,t)=>{t.d(r,{Z:()=>l});t(47313);var a=t(63849),n=t(31616),s=t(52198),i=t(46417);const l=e=>(0,i.jsx)(a.Z,{children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(s.Z,{className:"m-0",children:[(0,i.jsx)(s.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,r)=>e.active?(0,i.jsx)(s.Z.Item,{active:!0,children:e.label},r):(0,i.jsx)(s.Z.Item,{href:e.path,children:e.label},r)))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,r,t)=>{t.d(r,{y:()=>m,J:()=>i});var a=t(47313),n=t(75627),s=t(46417);const i=e=>{let{defaultValues:r,resolver:t,children:i,onSubmit:l,formClass:o}=e;const c=(0,n.cI)({defaultValues:r,resolver:t}),{handleSubmit:d,register:u,control:m,formState:{errors:f}}=c;return(0,s.jsx)("form",{onSubmit:d(l),className:o,noValidate:!0,children:Array.isArray(i)?i.map((e=>e.props&&e.props.name?a.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:f,control:m}}):e)):i})};var l=t(38394),o=t(88178),c=t(72884),d=t.n(c);const u=e=>{let{name:r,placeholder:t,refCallback:n,errors:i,control:c,register:u,className:m}=e;const[f,p]=(0,a.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.Z,{className:"mb-0",children:[(0,s.jsx)(o.Z.Control,{type:f?"text":"password",placeholder:t,name:r,id:r,as:"input",ref:e=>{n&&n(e)},className:m,isInvalid:!(!i||!i[r]),...u?u(r):{},autoComplete:r}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":f}),"data-password":f?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{p(!f)}})})]})})},m=e=>{let{label:r,type:t,name:a,placeholder:n,register:i,errors:l,control:c,className:d,labelClassName:m,containerClass:f,refCallback:p,children:b,rows:h,...x}=e;const g="textarea"===t?"textarea":"select"===t?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===t?(0,s.jsx)("input",{type:t,name:a,id:a,...i?i(a):{},...x,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z.Group,{className:f,children:[r?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(o.Z.Label,{className:m,children:r})," ",b," "]}):null,(0,s.jsx)(u,{name:a,placeholder:n,refCallback:p,errors:l,register:i,className:d}),l&&l[a]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:l[a].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===t||"radio"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z.Group,{className:f,children:[(0,s.jsx)(o.Z.Check,{type:t,label:r,name:a,id:a,ref:e=>{p&&p(e)},className:d,isInvalid:!(!l||!l[a]),...i?i(a):{},...x}),l&&l[a]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:l[a].message}):null]})}):(0,s.jsxs)(o.Z.Group,{className:f,children:[r?(0,s.jsx)(o.Z.Label,{className:m,children:r}):null,(0,s.jsx)(o.Z.Control,{type:t,placeholder:n,name:a,id:a,as:g,ref:e=>{p&&p(e)},className:d,isInvalid:!(!l||!l[a]),...i?i(a):{},rows:h,...x,autoComplete:a,children:b||null}),l&&l[a]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:l[a].message}):null]})})})})}},66501:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(47313),n=t(10195),s=t(63849),i=t(31616),l=t(93298),o=t(20192),c=t(52487),d=t(62563),u=t(3463),m=t(24511),f=t(75627),p=t(56352),b=t(2135),h=t(46417);const x=()=>{const{t:e}=(0,m.$)(),r=(0,d.X)(u.Ry().shape({title:u.Z_().required(e("Please select title")).min(10,"Atleast 10 char required")})),[t,o]=(0,a.useState)(""),[x,g]=(0,a.useState)(""),{register:y,handleSubmit:v,setValue:j,reset:N,formState:{errors:w}}=((0,p.I0)(),(0,f.cI)({defaultValues:{},resolver:r})),Z=v((async e=>{})),[C,k]=(0,a.useState)(new Date);return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsxs)("div",{className:"alert alert-success",children:[t,(0,h.jsx)(b.rU,{to:"/",children:" Back to Dashboard."})]}),x&&(0,h.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:x}),(0,h.jsx)(n.Z,{children:(0,h.jsx)(n.Z.Body,{children:(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(i.Z,{lg:6,children:(0,h.jsxs)("form",{onSubmit:Z,children:[(0,h.jsx)(c.y,{label:"Bank name",type:"text",register:y,name:"bank_name",errors:w,containerClass:"mb-3"},"bank_name"),(0,h.jsx)(c.y,{label:"Bank number",type:"text",register:y,name:"bank_number",errors:w,containerClass:"mb-3"},"bank_number"),(0,h.jsx)(c.y,{label:"Routing number",type:"text",register:y,name:"routing_number",errors:w,containerClass:"mb-3"},"routing_number"),(0,h.jsx)(c.y,{label:"Account number",type:"text",register:y,name:"account_number",errors:w,containerClass:"mb-3"},"account_number"),(0,h.jsx)(c.y,{label:"IBAN",type:"text",register:y,name:"iban",errors:w,containerClass:"mb-3"},"iban"),(0,h.jsx)(c.y,{label:"SWIFT / BIC",type:"text",register:y,name:"swift",errors:w,containerClass:"mb-3"},"swift"),(0,h.jsx)(l.Z,{variant:"primary",type:"submit",children:"Save Settings"})]})}),(0,h.jsx)(i.Z,{lg:6}),(0,h.jsx)(i.Z,{lg:3})]})})})]})},g=()=>(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(o.Z,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Payment Setup",path:"/notice/new",active:!0}],title:"Payment Setup"}),(0,h.jsx)(s.Z,{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsxs)(l.Z,{className:"waves-effect waves-light mb-3",onClick:()=>{},children:[(0,h.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Make Payment"]}),(0,h.jsx)(x,{})]})})]})},46682:(e,r,t)=>{t.d(r,{UI:()=>n,XW:()=>s});var a=t(47313);function n(e,r){let t=0;return a.Children.map(e,(e=>a.isValidElement(e)?r(e,t++):e))}function s(e,r){return a.Children.toArray(e).some((e=>a.isValidElement(e)&&e.type===r))}},88178:(e,r,t)=>{t.d(r,{Z:()=>V});var a=t(72884),n=t.n(a),s=t(75192),i=t.n(s),l=t(47313),o=t(46417);const c={type:i().string,tooltip:i().bool,as:i().elementType},d=l.forwardRef(((e,r)=>{let{as:t="div",className:a,type:s="valid",tooltip:i=!1,...l}=e;return(0,o.jsx)(t,{...l,ref:r,className:n()(a,"".concat(s,"-").concat(i?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=t(56084),f=t(5978),p=t(68524);const b=l.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,htmlFor:s,...i}=e;const{controlId:c}=(0,l.useContext)(f.Z);return t=(0,p.vE)(t,"form-check-label"),(0,o.jsx)("label",{...i,ref:r,htmlFor:s||c,className:n()(a,t)})}));b.displayName="FormCheckLabel";const h=b;var x=t(46682);const g=l.forwardRef(((e,r)=>{let{id:t,bsPrefix:a,bsSwitchPrefix:s,inline:i=!1,reverse:c=!1,disabled:d=!1,isValid:b=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:v,feedbackType:j,className:N,style:w,title:Z="",type:C="checkbox",label:k,children:I,as:S="input",...F}=e;a=(0,p.vE)(a,"form-check"),s=(0,p.vE)(s,"form-switch");const{controlId:O}=(0,l.useContext)(f.Z),P=(0,l.useMemo)((()=>({controlId:t||O})),[O,t]),R=!I&&null!=k&&!1!==k||(0,x.XW)(I,h),E=(0,o.jsx)(m.Z,{...F,type:"switch"===C?"checkbox":C,ref:r,isValid:b,isInvalid:g,disabled:d,as:S});return(0,o.jsx)(f.Z.Provider,{value:P,children:(0,o.jsx)("div",{style:w,className:n()(N,R&&a,i&&"".concat(a,"-inline"),c&&"".concat(a,"-reverse"),"switch"===C&&s),children:I||(0,o.jsxs)(o.Fragment,{children:[E,R&&(0,o.jsx)(h,{title:Z,children:k}),v&&(0,o.jsx)(u,{type:j,tooltip:y,children:v})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:m.Z,Label:h});t(21024);const v=l.forwardRef(((e,r)=>{let{bsPrefix:t,type:a,size:s,htmlSize:i,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:b,readOnly:h,as:x="input",...g}=e;const{controlId:y}=(0,l.useContext)(f.Z);return t=(0,p.vE)(t,"form-control"),(0,o.jsx)(x,{...g,type:a,size:i,ref:r,readOnly:h,id:c||y,className:n()(d,b?"".concat(t,"-plaintext"):t,s&&"".concat(t,"-").concat(s),"color"===a&&"".concat(t,"-color"),u&&"is-valid",m&&"is-invalid")})}));v.displayName="FormControl";const j=Object.assign(v,{Feedback:u}),N=l.forwardRef(((e,r)=>{let{className:t,bsPrefix:a,as:s="div",...i}=e;return a=(0,p.vE)(a,"form-floating"),(0,o.jsx)(s,{ref:r,className:n()(t,a),...i})}));N.displayName="FormFloating";const w=N;var Z=t(87021),C=t(41709);const k=l.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,id:s,...i}=e;const{controlId:c}=(0,l.useContext)(f.Z);return t=(0,p.vE)(t,"form-range"),(0,o.jsx)("input",{...i,type:"range",ref:r,className:n()(a,t),id:s||c})}));k.displayName="FormRange";const I=k,S=l.forwardRef(((e,r)=>{let{bsPrefix:t,size:a,htmlSize:s,className:i,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:b}=(0,l.useContext)(f.Z);return t=(0,p.vE)(t,"form-select"),(0,o.jsx)("select",{...m,size:s,ref:r,className:n()(i,t,a&&"".concat(t,"-").concat(a),c&&"is-valid",d&&"is-invalid"),id:u||b})}));S.displayName="FormSelect";const F=S,O=l.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,as:s="small",muted:i,...l}=e;return t=(0,p.vE)(t,"form-text"),(0,o.jsx)(s,{...l,ref:r,className:n()(a,t,i&&"text-muted")})}));O.displayName="FormText";const P=O,R=l.forwardRef(((e,r)=>(0,o.jsx)(y,{...e,ref:r,type:"switch"})));R.displayName="Switch";const E=Object.assign(R,{Input:y.Input,Label:y.Label}),T=l.forwardRef(((e,r)=>{let{bsPrefix:t,className:a,children:s,controlId:i,label:l,...c}=e;return t=(0,p.vE)(t,"form-floating"),(0,o.jsxs)(Z.Z,{ref:r,className:n()(a,t),controlId:i,...c,children:[s,(0,o.jsx)("label",{htmlFor:i,children:l})]})}));T.displayName="FloatingLabel";const L=T,A={_ref:i().any,validated:i().bool,as:i().elementType},z=l.forwardRef(((e,r)=>{let{className:t,validated:a,as:s="form",...i}=e;return(0,o.jsx)(s,{...i,ref:r,className:n()(t,a&&"was-validated")})}));z.displayName="Form",z.propTypes=A;const V=Object.assign(z,{Group:Z.Z,Control:j,Floating:w,Check:y,Switch:E,Label:C.Z,Text:P,Range:I,Select:F,FloatingLabel:L})},56084:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(72884),n=t.n(a),s=t(47313),i=t(5978),l=t(68524),o=t(46417);const c=s.forwardRef(((e,r)=>{let{id:t,bsPrefix:a,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:f="input",...p}=e;const{controlId:b}=(0,s.useContext)(i.Z);return a=(0,l.vE)(a,"form-check-input"),(0,o.jsx)(f,{...p,ref:r,type:d,id:t||b,className:n()(c,a,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},87021:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(47313),n=t(5978),s=t(46417);const i=a.forwardRef(((e,r)=>{let{controlId:t,as:i="div",...l}=e;const o=(0,a.useMemo)((()=>({controlId:t})),[t]);return(0,s.jsx)(n.Z.Provider,{value:o,children:(0,s.jsx)(i,{...l,ref:r})})}));i.displayName="FormGroup";const l=i},38394:(e,r,t)=>{t.d(r,{Z:()=>f});var a=t(72884),n=t.n(a),s=t(47313),i=t(68524),l=t(56084),o=t(94354),c=t(46417);const d=s.forwardRef(((e,r)=>{let{className:t,bsPrefix:a,as:s="span",...l}=e;return a=(0,i.vE)(a,"input-group-text"),(0,c.jsx)(s,{ref:r,className:n()(t,a),...l})}));d.displayName="InputGroupText";const u=d,m=s.forwardRef(((e,r)=>{let{bsPrefix:t,size:a,hasValidation:l,className:d,as:u="div",...m}=e;t=(0,i.vE)(t,"input-group");const f=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(o.Z.Provider,{value:f,children:(0,c.jsx)(u,{ref:r,...m,className:n()(d,t,a&&"".concat(t,"-").concat(a),l&&"has-validation")})})}));m.displayName="InputGroup";const f=Object.assign(m,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.Z,{type:"checkbox",...e})})})},24511:(e,r,t)=>{t.d(r,{$:()=>p});var a=t(70885),n=t(4942),s=t(47313),i=t(10412);function l(){if(console&&console.warn){for(var e,r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var o={};function c(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"===typeof r[0]&&o[r[0]]||("string"===typeof r[0]&&(o[r[0]]=new Date),l.apply(void 0,r))}function d(e,r,t){e.loadNamespaces(r,(function(){if(e.isInitialized)t();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),t()}))}}))}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(e,r){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=r?t.current:e}),[e,r]),t.current};function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.i18n,n=(0,s.useContext)(i.OO)||{},l=n.i18n,o=n.defaultNS,u=t||l||(0,i.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new i.zv),!u){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[p,{},!1];return b.t=p,b.i18n={},b.ready=!1,b}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=m(m(m({},(0,i.JP)()),u.options.react),r),x=h.useSuspense,g=h.keyPrefix,y=e||o||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var v=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.languages&&r.languages.length?void 0!==r.options.ignoreJSONStructure?r.hasLoadedNamespace(e,{precheck:function(r,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!a(r.isLanguageChangingTo,e))return!1}}):function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.languages[0],n=!!r.options&&r.options.fallbackLng,s=r.languages[r.languages.length-1];if("cimode"===a.toLowerCase())return!0;var i=function(e,t){var a=r.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===a||2===a};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(a,e)||!(r.services.backendConnector.backend&&(!r.options.resources||r.options.partialBundledLanguages))||!(!i(a,e)||n&&!i(s,e)))}(e,r,t):(c("i18n.languages were undefined or empty",r.languages),!0)}(e,u,h)}));function j(){return u.getFixedT(null,"fallback"===h.nsMode?y:y[0],g)}var N=(0,s.useState)(j),w=(0,a.Z)(N,2),Z=w[0],C=w[1],k=y.join(),I=f(k),S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=h.bindI18n,r=h.bindI18nStore;function t(){S.current&&C(j)}return S.current=!0,v||x||d(u,y,(function(){S.current&&C(j)})),v&&I&&I!==k&&S.current&&C(j),e&&u&&u.on(e,t),r&&u&&u.store.on(r,t),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),r&&u&&r.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,k]);var F=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!F.current&&C(j),F.current=!1}),[u,g]);var O=[Z,u,v];if(O.t=Z,O.i18n=u,O.ready=v,v)return O;if(!v&&!x)return O;throw new Promise((function(e){d(u,y,(function(){e()}))}))}},30907:(e,r,t)=>{function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}t.d(r,{Z:()=>a})},70885:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(40181);function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,s,i,l=[],o=!0,c=!1;try{if(s=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;o=!1}else for(;!(o=(a=s.call(t)).done)&&(l.push(a.value),l.length!==r);o=!0);}catch(e){c=!0,n=e}finally{try{if(!o&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw n}}return l}}(e,r)||(0,a.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(30907);function n(e,r){if(e){if("string"===typeof e)return(0,a.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,a.Z)(e,r):void 0}}}}]);