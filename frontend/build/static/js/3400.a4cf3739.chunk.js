"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3400,2645],{63647:(e,r,a)=>{a.d(r,{m:()=>s});var t=a(95252),n=a(44414);const s=()=>(0,n.jsx)(t.A,{animation:"border",role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},41033:(e,r,a)=>{a.d(r,{A:()=>i});a(9950);var t=a(86781),n=a(68459),s=a(81924),l=a(44414);const i=e=>(0,l.jsx)(t.A,{children:(0,l.jsx)(n.A,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("div",{children:(0,l.jsxs)(s.A,{className:"m-0 mb-0",children:[(0,l.jsx)(s.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,r)=>e.active?(0,l.jsx)(s.A.Item,{active:!0,children:e.label},r):(0,l.jsx)(s.A.Item,{href:e.path,children:e.label},r)))]})}),(0,l.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,r,a)=>{a.d(r,{Z:()=>m,z:()=>l});var t=a(9950),n=a(9449),s=a(44414);const l=e=>{let{defaultValues:r,resolver:a,children:l,onSubmit:i,formClass:o}=e;const c=(0,n.mN)({defaultValues:r,resolver:a}),{handleSubmit:d,register:u,control:m,formState:{errors:f}}=c;return(0,s.jsx)("form",{onSubmit:d(i),className:o,noValidate:!0,children:Array.isArray(l)?l.map((e=>e.props&&e.props.name?t.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:f,control:m}}):e)):l})};var i=a(75623),o=a(64055),c=a(48738),d=a.n(c);const u=e=>{let{name:r,placeholder:a,refCallback:n,errors:l,control:c,register:u,className:m}=e;const[f,p]=(0,t.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A,{className:"mb-0",children:[(0,s.jsx)(o.A.Control,{type:f?"text":"password",placeholder:a,name:r,id:r,as:"input",ref:e=>{n&&n(e)},className:m,isInvalid:!(!l||!l[r]),...u?u(r):{},autoComplete:r}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":f}),"data-password":f?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{p(!f)}})})]})})},m=e=>{let{label:r,type:a,name:t,placeholder:n,register:l,errors:i,control:c,className:d,labelClassName:m,containerClass:f,refCallback:p,children:h,rows:x,symbol:b,...g}=e;const j="textarea"===a?"textarea":"select"===a?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===a?(0,s.jsx)("input",{type:a,name:t,id:t,...l?l(t):{},...g,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Group,{className:f,children:[r?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(o.A.Label,{className:m,children:r})," ",h," "]}):null,(0,s.jsx)(u,{name:t,placeholder:n,refCallback:p,errors:i,register:l,className:d}),i&&i[t]?(0,s.jsx)(o.A.Control.Feedback,{type:"invalid",className:"d-block",children:i[t].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===a||"radio"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A.Group,{className:f,children:[(0,s.jsx)(o.A.Check,{type:a,label:r,name:t,id:t,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[t]),...l?l(t):{},...g}),i&&i[t]?(0,s.jsx)(o.A.Control.Feedback,{type:"invalid",children:i[t].message}):null]})}):(0,s.jsxs)(o.A.Group,{className:f,children:[r?(0,s.jsx)(o.A.Label,{className:m,children:r}):null,b?(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("span",{className:"input-group-text",id:t,children:b}),(0,s.jsx)(o.A.Control,{type:a,placeholder:n,name:t,id:t,as:j,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[t]),...l?l(t):{},rows:x,...g,autoComplete:t,children:h||null})]}):(0,s.jsx)(o.A.Control,{type:a,placeholder:n,name:t,id:t,as:j,ref:e=>{p&&p(e)},className:d,isInvalid:!(!i||!i[t]),...l?l(t):{},rows:x,...g,autoComplete:t,children:h||null}),i&&i[t]?(0,s.jsx)(o.A.Control.Feedback,{type:"invalid",children:i[t].message}):null]})})})})}},43400:(e,r,a)=>{a.r(r),a.d(r,{default:()=>v});var t=a(9950),n=a(471),s=a(86781),l=a(68459),i=a(97937),o=a(41033),c=a(68984),d=a(26473),u=a(60666),m=a(70030),f=a(9449),p=a(27081),h=a(19443),x=a(80183),b=a(63647),g=a(44414);const j=()=>{const{t:e}=(0,m.B)(),r=(0,d.t)(u.Ik().shape({first_name:u.Yj().required(e("Please select First Name")),last_name:u.Yj().required(e("Please select Last Name")),email:u.Yj().required(e("Please select name")).email(e("Please valid Email")),role_id:u.Yj().required(e("Please select role"))})),[a,o]=(0,t.useState)(""),[j,v]=(0,t.useState)(""),[y,N]=(0,t.useState)(!1),A=(0,p.wA)(),{flats:w}=(0,p.d4)((e=>({flats:e.Flat.flats})));(0,t.useEffect)((()=>{A((0,h.q)())}),[]);const{register:C,handleSubmit:k,setError:I,watch:S,formState:{errors:F}}=(0,f.mN)({defaultValues:{},resolver:r}),P=k((async e=>{N(!0),A((0,x.dH)(e)).unwrap().then((e=>{e&&!0===e.status&&o(e.message),N(!1)})).catch((e=>{for(var r in e.errors)try{I(r,{message:e.errors[r].toString()})}catch(a){}N(!1)}))})),O=S("apartment_id");let R=[];if(O&&w.length)for(let t=0;t<w.length;t++)if(O==w[t].id){R=w[t].flats;break}return(0,g.jsxs)(g.Fragment,{children:[a&&(0,g.jsx)("div",{className:"alert alert-success",children:a}),j&&(0,g.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:j}),(0,g.jsx)(n.A,{children:(0,g.jsx)(n.A.Body,{children:(0,g.jsxs)(s.A,{children:[(0,g.jsx)(l.A,{lg:6,children:(0,g.jsxs)("form",{onSubmit:P,children:[(0,g.jsx)(c.Z,{label:"First Name",type:"text",register:C,name:"first_name",errors:F,rows:"5",containerClass:"mb-3"},"first_name"),(0,g.jsx)(c.Z,{label:"Last Name",type:"text",register:C,name:"last_name",errors:F,rows:"5",containerClass:"mb-3"},"last_name"),(0,g.jsx)(c.Z,{label:"Email",type:"text",register:C,name:"email",errors:F,rows:"5",containerClass:"mb-3"},"email"),(0,g.jsx)(c.Z,{type:"hidden",name:"role_id",register:C,errors:F,value:"recident"}),(0,g.jsxs)(c.Z,{type:"select",label:"Property",name:"apartment_id",containerClass:"mb-3",register:C,errors:F,children:[(0,g.jsx)("option",{value:"",children:"Select Property"}),w.length&&w.map((e=>(0,g.jsx)("option",{value:e.id,children:e.name.toString()},"apartment".concat(e.id))))]}),(0,g.jsxs)(c.Z,{type:"select",label:"Suite",name:"flat_id",containerClass:"mb-3",register:C,errors:F,children:[(0,g.jsx)("option",{value:"",children:"Select Flat"}),R.length&&R.map((e=>e.has_occupied?(0,g.jsxs)("option",{value:e.id,disabled:!0,children:[e.name,e.has_occupied]},"flat"+e.id):(0,g.jsxs)("option",{value:e.id,children:[e.name,e.has_occupied]},"flat"+e.id)))]}),y?(0,g.jsx)(b.m,{}):(0,g.jsx)(i.A,{variant:"primary",type:"submit",children:"Create User"})]})}),(0,g.jsx)(l.A,{lg:6}),(0,g.jsx)(l.A,{lg:3})]})})})]})},v=()=>(0,g.jsxs)(t.Fragment,{children:[(0,g.jsx)(o.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Tenants",path:"/resident"},{label:"Tenant",path:"/notice/new",active:!0}],title:"Tenant"}),(0,g.jsx)(s.A,{children:(0,g.jsx)(l.A,{children:(0,g.jsx)(j,{})})})]})},97937:(e,r,a)=>{a.d(r,{A:()=>d});var t=a(48738),n=a.n(t),s=a(9950),l=a(82111),i=a(44089),o=a(44414);const c=s.forwardRef(((e,r)=>{let{as:a,bsPrefix:t,variant:s="primary",size:c,active:d=!1,disabled:u=!1,className:m,...f}=e;const p=(0,i.oU)(t,"btn"),[h,{tagName:x}]=(0,l.Am)({tagName:a,disabled:u,...f}),b=x;return(0,o.jsx)(b,{...h,...f,ref:r,disabled:u,className:n()(m,p,d&&"active",s&&"".concat(p,"-").concat(s),c&&"".concat(p,"-").concat(c),f.href&&u&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,r,a)=>{a.d(r,{Tj:()=>n,mf:()=>s});var t=a(9950);function n(e,r){let a=0;return t.Children.map(e,(e=>t.isValidElement(e)?r(e,a++):e))}function s(e,r){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===r))}},64055:(e,r,a)=>{a.d(r,{A:()=>_});var t=a(48738),n=a.n(t),s=a(11942),l=a.n(s),i=a(9950),o=a(44414);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=i.forwardRef(((e,r)=>{let{as:a="div",className:t,type:s="valid",tooltip:l=!1,...i}=e;return(0,o.jsx)(a,{...i,ref:r,className:n()(t,"".concat(s,"-").concat(l?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=a(14531),f=a(99288),p=a(44089);const h=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,htmlFor:s,...l}=e;const{controlId:c}=(0,i.useContext)(f.A);return a=(0,p.oU)(a,"form-check-label"),(0,o.jsx)("label",{...l,ref:r,htmlFor:s||c,className:n()(t,a)})}));h.displayName="FormCheckLabel";const x=h;var b=a(22890);const g=i.forwardRef(((e,r)=>{let{id:a,bsPrefix:t,bsSwitchPrefix:s,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:j=!1,feedback:v,feedbackType:y,className:N,style:A,title:w="",type:C="checkbox",label:k,children:I,as:S="input",...F}=e;t=(0,p.oU)(t,"form-check"),s=(0,p.oU)(s,"form-switch");const{controlId:P}=(0,i.useContext)(f.A),O=(0,i.useMemo)((()=>({controlId:a||P})),[P,a]),R=!I&&null!=k&&!1!==k||(0,b.mf)(I,x),T=(0,o.jsx)(m.A,{...F,type:"switch"===C?"checkbox":C,ref:r,isValid:h,isInvalid:g,disabled:d,as:S});return(0,o.jsx)(f.A.Provider,{value:O,children:(0,o.jsx)("div",{style:A,className:n()(N,R&&t,l&&"".concat(t,"-inline"),c&&"".concat(t,"-reverse"),"switch"===C&&s),children:I||(0,o.jsxs)(o.Fragment,{children:[T,R&&(0,o.jsx)(x,{title:w,children:k}),v&&(0,o.jsx)(u,{type:y,tooltip:j,children:v})]})})})}));g.displayName="FormCheck";const j=Object.assign(g,{Input:m.A,Label:x});a(2241);const v=i.forwardRef(((e,r)=>{let{bsPrefix:a,type:t,size:s,htmlSize:l,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:h,readOnly:x,as:b="input",...g}=e;const{controlId:j}=(0,i.useContext)(f.A);return a=(0,p.oU)(a,"form-control"),(0,o.jsx)(b,{...g,type:t,size:l,ref:r,readOnly:x,id:c||j,className:n()(d,h?"".concat(a,"-plaintext"):a,s&&"".concat(a,"-").concat(s),"color"===t&&"".concat(a,"-color"),u&&"is-valid",m&&"is-invalid")})}));v.displayName="FormControl";const y=Object.assign(v,{Feedback:u}),N=i.forwardRef(((e,r)=>{let{className:a,bsPrefix:t,as:s="div",...l}=e;return t=(0,p.oU)(t,"form-floating"),(0,o.jsx)(s,{ref:r,className:n()(a,t),...l})}));N.displayName="FormFloating";const A=N;var w=a(584),C=a(90729);const k=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,id:s,...l}=e;const{controlId:c}=(0,i.useContext)(f.A);return a=(0,p.oU)(a,"form-range"),(0,o.jsx)("input",{...l,type:"range",ref:r,className:n()(t,a),id:s||c})}));k.displayName="FormRange";const I=k,S=i.forwardRef(((e,r)=>{let{bsPrefix:a,size:t,htmlSize:s,className:l,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:h}=(0,i.useContext)(f.A);return a=(0,p.oU)(a,"form-select"),(0,o.jsx)("select",{...m,size:s,ref:r,className:n()(l,a,t&&"".concat(a,"-").concat(t),c&&"is-valid",d&&"is-invalid"),id:u||h})}));S.displayName="FormSelect";const F=S,P=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,as:s="small",muted:l,...i}=e;return a=(0,p.oU)(a,"form-text"),(0,o.jsx)(s,{...i,ref:r,className:n()(t,a,l&&"text-muted")})}));P.displayName="FormText";const O=P,R=i.forwardRef(((e,r)=>(0,o.jsx)(j,{...e,ref:r,type:"switch"})));R.displayName="Switch";const T=Object.assign(R,{Input:j.Input,Label:j.Label}),L=i.forwardRef(((e,r)=>{let{bsPrefix:a,className:t,children:s,controlId:l,label:i,...c}=e;return a=(0,p.oU)(a,"form-floating"),(0,o.jsxs)(w.A,{ref:r,className:n()(t,a),controlId:l,...c,children:[s,(0,o.jsx)("label",{htmlFor:l,children:i})]})}));L.displayName="FloatingLabel";const U=L,z={_ref:l().any,validated:l().bool,as:l().elementType},E=i.forwardRef(((e,r)=>{let{className:a,validated:t,as:s="form",...l}=e;return(0,o.jsx)(s,{...l,ref:r,className:n()(a,t&&"was-validated")})}));E.displayName="Form",E.propTypes=z;const _=Object.assign(E,{Group:w.A,Control:y,Floating:A,Check:j,Switch:T,Label:C.A,Text:O,Range:I,Select:F,FloatingLabel:U})},14531:(e,r,a)=>{a.d(r,{A:()=>d});var t=a(48738),n=a.n(t),s=a(9950),l=a(99288),i=a(44089),o=a(44414);const c=s.forwardRef(((e,r)=>{let{id:a,bsPrefix:t,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:f="input",...p}=e;const{controlId:h}=(0,s.useContext)(l.A);return t=(0,i.oU)(t,"form-check-input"),(0,o.jsx)(f,{...p,ref:r,type:d,id:a||h,className:n()(c,t,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,r,a)=>{a.d(r,{A:()=>i});var t=a(9950),n=a(99288),s=a(44414);const l=t.forwardRef(((e,r)=>{let{controlId:a,as:l="div",...i}=e;const o=(0,t.useMemo)((()=>({controlId:a})),[a]);return(0,s.jsx)(n.A.Provider,{value:o,children:(0,s.jsx)(l,{...i,ref:r})})}));l.displayName="FormGroup";const i=l},75623:(e,r,a)=>{a.d(r,{A:()=>f});var t=a(48738),n=a.n(t),s=a(9950),l=a(44089),i=a(14531),o=a(54947),c=a(44414);const d=s.forwardRef(((e,r)=>{let{className:a,bsPrefix:t,as:s="span",...i}=e;return t=(0,l.oU)(t,"input-group-text"),(0,c.jsx)(s,{ref:r,className:n()(a,t),...i})}));d.displayName="InputGroupText";const u=d,m=s.forwardRef(((e,r)=>{let{bsPrefix:a,size:t,hasValidation:i,className:d,as:u="div",...m}=e;a=(0,l.oU)(a,"input-group");const f=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(o.A.Provider,{value:f,children:(0,c.jsx)(u,{ref:r,...m,className:n()(d,a,t&&"".concat(a,"-").concat(t),i&&"has-validation")})})}));m.displayName="InputGroup";const f=Object.assign(m,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(i.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(i.A,{type:"checkbox",...e})})})},95252:(e,r,a)=>{a.d(r,{A:()=>c});var t=a(48738),n=a.n(t),s=a(9950),l=a(44089),i=a(44414);const o=s.forwardRef(((e,r)=>{let{bsPrefix:a,variant:t,animation:s="border",size:o,as:c="div",className:d,...u}=e;a=(0,l.oU)(a,"spinner");const m="".concat(a,"-").concat(s);return(0,i.jsx)(c,{ref:r,...u,className:n()(d,m,o&&"".concat(m,"-").concat(o),t&&"text-".concat(t))})}));o.displayName="Spinner";const c=o},70030:(e,r,a)=>{a.d(r,{B:()=>p});var t=a(80296),n=a(64467),s=a(9950),l=a(6955);function i(){if(console&&console.warn){for(var e,r=arguments.length,a=new Array(r),t=0;t<r;t++)a[t]=arguments[t];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var o={};function c(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];"string"===typeof r[0]&&o[r[0]]||("string"===typeof r[0]&&(o[r[0]]=new Date),i.apply(void 0,r))}function d(e,r,a){e.loadNamespaces(r,(function(){if(e.isInitialized)a();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),a()}))}}))}function u(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?u(Object(a),!0).forEach((function(r){(0,n.A)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var f=function(e,r){var a=(0,s.useRef)();return(0,s.useEffect)((function(){a.current=r?a.current:e}),[e,r]),a.current};function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.i18n,n=(0,s.useContext)(l.gJ)||{},i=n.i18n,o=n.defaultNS,u=a||i||(0,l.TO)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new l.hz),!u){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[p,{},!1];return h.t=p,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=m(m(m({},(0,l.rV)()),u.options.react),r),b=x.useSuspense,g=x.keyPrefix,j=e||o||u.options&&u.options.defaultNS;j="string"===typeof j?[j]:j||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(j);var v=(u.isInitialized||u.initializedStoreOnce)&&j.every((function(e){return function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.languages&&r.languages.length?void 0!==r.options.ignoreJSONStructure?r.hasLoadedNamespace(e,{precheck:function(r,t){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!t(r.isLanguageChangingTo,e))return!1}}):function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.languages[0],n=!!r.options&&r.options.fallbackLng,s=r.languages[r.languages.length-1];if("cimode"===t.toLowerCase())return!0;var l=function(e,a){var t=r.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===t||2===t};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!l(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(t,e)||!(r.services.backendConnector.backend&&(!r.options.resources||r.options.partialBundledLanguages))||!(!l(t,e)||n&&!l(s,e)))}(e,r,a):(c("i18n.languages were undefined or empty",r.languages),!0)}(e,u,x)}));function y(){return u.getFixedT(null,"fallback"===x.nsMode?j:j[0],g)}var N=(0,s.useState)(y),A=(0,t.A)(N,2),w=A[0],C=A[1],k=j.join(),I=f(k),S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=x.bindI18n,r=x.bindI18nStore;function a(){S.current&&C(y)}return S.current=!0,v||b||d(u,j,(function(){S.current&&C(y)})),v&&I&&I!==k&&S.current&&C(y),e&&u&&u.on(e,a),r&&u&&u.store.on(r,a),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,a)})),r&&u&&r.split(" ").forEach((function(e){return u.store.off(e,a)}))}}),[u,k]);var F=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!F.current&&C(y),F.current=!1}),[u,g]);var P=[w,u,v];if(P.t=w,P.i18n=u,P.ready=v,v)return P;if(!v&&!b)return P;throw new Promise((function(e){d(u,j,(function(){e()}))}))}},43145:(e,r,a)=>{function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}a.d(r,{A:()=>t})},80296:(e,r,a)=>{a.d(r,{A:()=>n});var t=a(27800);function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,n,s,l,i=[],o=!0,c=!1;try{if(s=(a=a.call(e)).next,0===r){if(Object(a)!==a)return;o=!1}else for(;!(o=(t=s.call(a)).done)&&(i.push(t.value),i.length!==r);o=!0);}catch(e){c=!0,n=e}finally{try{if(!o&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,r)||(0,t.A)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(e,r,a)=>{a.d(r,{A:()=>n});var t=a(43145);function n(e,r){if(e){if("string"===typeof e)return(0,t.A)(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,t.A)(e,r):void 0}}}}]);