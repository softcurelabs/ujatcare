"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9531,2645],{63647:(e,t,a)=>{a.d(t,{m:()=>s});var r=a(95252),n=a(44414);const s=()=>(0,n.jsx)(r.A,{animation:"border",role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},68984:(e,t,a)=>{a.d(t,{Z:()=>m,z:()=>o});var r=a(9950),n=a(9449),s=a(44414);const o=e=>{let{defaultValues:t,resolver:a,children:o,onSubmit:l,formClass:i}=e;const c=(0,n.mN)({defaultValues:t,resolver:a}),{handleSubmit:d,register:u,control:m,formState:{errors:p}}=c;return(0,s.jsx)("form",{onSubmit:d(l),className:i,noValidate:!0,children:Array.isArray(o)?o.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:p,control:m}}):e)):o})};var l=a(75623),i=a(64055),c=a(48738),d=a.n(c);const u=e=>{let{name:t,placeholder:a,refCallback:n,errors:o,control:c,register:u,className:m}=e;const[p,f]=(0,r.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.A,{className:"mb-0",children:[(0,s.jsx)(i.A.Control,{type:p?"text":"password",placeholder:a,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:m,isInvalid:!(!o||!o[t]),...u?u(t):{},autoComplete:t}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{f(!p)}})})]})})},m=e=>{let{label:t,type:a,name:r,placeholder:n,register:o,errors:l,control:c,className:d,labelClassName:m,containerClass:p,refCallback:f,children:h,rows:x,symbol:b,...g}=e;const y="textarea"===a?"textarea":"select"===a?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===a?(0,s.jsx)("input",{type:a,name:r,id:r,...o?o(r):{},...g,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A.Group,{className:p,children:[t?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(i.A.Label,{className:m,children:t})," ",h," "]}):null,(0,s.jsx)(u,{name:r,placeholder:n,refCallback:f,errors:l,register:o,className:d}),l&&l[r]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",className:"d-block",children:l[r].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===a||"radio"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A.Group,{className:p,children:[(0,s.jsx)(i.A.Check,{type:a,label:t,name:r,id:r,ref:e=>{f&&f(e)},className:d,isInvalid:!(!l||!l[r]),...o?o(r):{},...g}),l&&l[r]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",children:l[r].message}):null]})}):(0,s.jsxs)(i.A.Group,{className:p,children:[t?(0,s.jsx)(i.A.Label,{className:m,children:t}):null,b?(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("span",{className:"input-group-text",id:r,children:b}),(0,s.jsx)(i.A.Control,{type:a,placeholder:n,name:r,id:r,as:y,ref:e=>{f&&f(e)},className:d,isInvalid:!(!l||!l[r]),...o?o(r):{},rows:x,...g,autoComplete:r,children:h||null})]}):(0,s.jsx)(i.A.Control,{type:a,placeholder:n,name:r,id:r,as:y,ref:e=>{f&&f(e)},className:d,isInvalid:!(!l||!l[r]),...o?o(r):{},rows:x,...g,autoComplete:r,children:h||null}),l&&l[r]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",children:l[r].message}):null]})})})})}},48789:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(9950),n=a(45358),s=a(86781),o=a(68459),l=a(471),i=a(42074),c=a(90197),d=a(44414);const u=e=>{let{helpText:t,bottomLinks:a,children:u,isCombineForm:m}=e;return(0,r.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,d.jsx)(n.A,{children:(0,d.jsx)(s.A,{className:"justify-content-center",children:(0,d.jsxs)(o.A,{md:8,lg:6,xl:m?9:5,children:[(0,d.jsx)(l.A,{className:"bg-pattern",children:(0,d.jsxs)(l.A.Body,{className:"p-4",children:[(0,d.jsxs)("div",{className:"text-center w-100 m-auto",children:[(0,d.jsxs)("div",{className:"auth-brand",children:[(0,d.jsx)(i.N_,{to:"/",className:"logo logo-dark text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:c,alt:"",height:"100"})})}),(0,d.jsx)(i.N_,{to:"/",className:"logo logo-light text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:c,alt:"",height:"22"})})})]}),(0,d.jsx)("p",{className:"text-muted mb-4 mt-3",children:t})]}),u]})}),a]})})})})})}},29531:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(9950),n=a(86781),s=a(68459),o=a(97937),l=a(42074),i=a(28429),c=a(60666),d=a(26473),u=a(70030),m=a(27081),p=a(68984),f=a(48789),h=a(91144),x=a(63647),b=a(44414);const g=()=>{const{t:e}=(0,u.B)();return(0,b.jsx)(n.A,{className:"mt-3",children:(0,b.jsx)(s.A,{className:"text-center",children:(0,b.jsxs)("p",{className:"text-white-50",children:[e("Back to")," ",(0,b.jsx)(l.N_,{to:"/auth/login",className:"text-white ms-1",children:(0,b.jsx)("b",{children:e("Log in")})})]})})})},y=()=>{const{t:e}=(0,u.B)(),[t,a]=(0,r.useState)(""),[n,s]=(0,r.useState)(""),[l,y]=(0,r.useState)(!1),j=(0,m.wA)(),v=(0,i.g)(),N=(0,d.t)(c.Ik().shape({email:c.Yj().email().required(e("Please enter email")),password:c.Yj().required("Please enter your password.").min(8,"Your password is too short."),password_confirmation:c.Yj().required("Please retype your password.").oneOf([c.KR("password")],"Your passwords do not match.")}));return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(f.A,{bottomLinks:(0,b.jsx)(g,{}),children:[t&&(0,b.jsx)("div",{className:"alert alert-success",children:t}),n&&(0,b.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:n}),(0,b.jsxs)(p.z,{onSubmit:e=>{a(""),s(""),y(!0),j((0,h.nI)(e)).unwrap().then((e=>{e&&!0===e.status&&a(e.message),y(!1)})).catch((e=>{s(e.message),y(!1)}))},resolver:N,defaultValues:{token:v.token},children:[(0,b.jsx)(p.Z,{label:e("Email"),type:"text",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,b.jsx)(p.Z,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter password"),containerClass:"mb-3"}),(0,b.jsx)(p.Z,{label:e("Confirm Password"),type:"password",name:"password_confirmation",placeholder:e("Enter confirm password"),containerClass:"mb-3"}),(0,b.jsx)(p.Z,{type:"hidden",name:"token"}),(0,b.jsx)("div",{className:"d-grid text-center",children:l?(0,b.jsx)(x.m,{}):(0,b.jsx)(o.A,{variant:"primary",type:"submit",children:e("Reset Password")})})]})]})})}},82111:(e,t,a)=>{a.d(t,{Am:()=>o,Ay:()=>i});var r=a(9950),n=a(44414);const s=["as","disabled"];function o(e){let{tagName:t,disabled:a,href:r,target:n,rel:s,role:o,onClick:l,tabIndex:i=0,type:c}=e;t||(t=null!=r||null!=n||null!=s?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:a},d];const u=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==l||l(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:a?void 0:i,href:r,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const l=r.forwardRef(((e,t)=>{let{as:a,disabled:r}=e,l=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);const[i,{tagName:c}]=o(Object.assign({tagName:a,disabled:r},l));return(0,n.jsx)(c,Object.assign({},l,i,{ref:t}))}));l.displayName="Button";const i=l},97937:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(48738),n=a.n(r),s=a(9950),o=a(82111),l=a(44089),i=a(44414);const c=s.forwardRef(((e,t)=>{let{as:a,bsPrefix:r,variant:s="primary",size:c,active:d=!1,disabled:u=!1,className:m,...p}=e;const f=(0,l.oU)(r,"btn"),[h,{tagName:x}]=(0,o.Am)({tagName:a,disabled:u,...p}),b=x;return(0,i.jsx)(b,{...h,...p,ref:t,disabled:u,className:n()(m,f,d&&"active",s&&"".concat(f,"-").concat(s),c&&"".concat(f,"-").concat(c),p.href&&u&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,t,a)=>{a.d(t,{Tj:()=>n,mf:()=>s});var r=a(9950);function n(e,t){let a=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,a++):e))}function s(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}},64055:(e,t,a)=>{a.d(t,{A:()=>V});var r=a(48738),n=a.n(r),s=a(11942),o=a.n(s),l=a(9950),i=a(44414);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef(((e,t)=>{let{as:a="div",className:r,type:s="valid",tooltip:o=!1,...l}=e;return(0,i.jsx)(a,{...l,ref:t,className:n()(r,"".concat(s,"-").concat(o?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=a(14531),p=a(99288),f=a(44089);const h=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,htmlFor:s,...o}=e;const{controlId:c}=(0,l.useContext)(p.A);return a=(0,f.oU)(a,"form-check-label"),(0,i.jsx)("label",{...o,ref:t,htmlFor:s||c,className:n()(r,a)})}));h.displayName="FormCheckLabel";const x=h;var b=a(22890);const g=l.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,bsSwitchPrefix:s,inline:o=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:j,feedbackType:v,className:N,style:w,title:A="",type:k="checkbox",label:C,children:I,as:O="input",...F}=e;r=(0,f.oU)(r,"form-check"),s=(0,f.oU)(s,"form-switch");const{controlId:P}=(0,l.useContext)(p.A),S=(0,l.useMemo)((()=>({controlId:a||P})),[P,a]),R=!I&&null!=C&&!1!==C||(0,b.mf)(I,x),L=(0,i.jsx)(m.A,{...F,type:"switch"===k?"checkbox":k,ref:t,isValid:h,isInvalid:g,disabled:d,as:O});return(0,i.jsx)(p.A.Provider,{value:S,children:(0,i.jsx)("div",{style:w,className:n()(N,R&&r,o&&"".concat(r,"-inline"),c&&"".concat(r,"-reverse"),"switch"===k&&s),children:I||(0,i.jsxs)(i.Fragment,{children:[L,R&&(0,i.jsx)(x,{title:A,children:C}),j&&(0,i.jsx)(u,{type:v,tooltip:y,children:j})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:m.A,Label:x});a(2241);const j=l.forwardRef(((e,t)=>{let{bsPrefix:a,type:r,size:s,htmlSize:o,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:h,readOnly:x,as:b="input",...g}=e;const{controlId:y}=(0,l.useContext)(p.A);return a=(0,f.oU)(a,"form-control"),(0,i.jsx)(b,{...g,type:r,size:o,ref:t,readOnly:x,id:c||y,className:n()(d,h?"".concat(a,"-plaintext"):a,s&&"".concat(a,"-").concat(s),"color"===r&&"".concat(a,"-color"),u&&"is-valid",m&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:u}),N=l.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="div",...o}=e;return r=(0,f.oU)(r,"form-floating"),(0,i.jsx)(s,{ref:t,className:n()(a,r),...o})}));N.displayName="FormFloating";const w=N;var A=a(584),k=a(90729);const C=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,id:s,...o}=e;const{controlId:c}=(0,l.useContext)(p.A);return a=(0,f.oU)(a,"form-range"),(0,i.jsx)("input",{...o,type:"range",ref:t,className:n()(r,a),id:s||c})}));C.displayName="FormRange";const I=C,O=l.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,htmlSize:s,className:o,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:h}=(0,l.useContext)(p.A);return a=(0,f.oU)(a,"form-select"),(0,i.jsx)("select",{...m,size:s,ref:t,className:n()(o,a,r&&"".concat(a,"-").concat(r),c&&"is-valid",d&&"is-invalid"),id:u||h})}));O.displayName="FormSelect";const F=O,P=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,as:s="small",muted:o,...l}=e;return a=(0,f.oU)(a,"form-text"),(0,i.jsx)(s,{...l,ref:t,className:n()(r,a,o&&"text-muted")})}));P.displayName="FormText";const S=P,R=l.forwardRef(((e,t)=>(0,i.jsx)(y,{...e,ref:t,type:"switch"})));R.displayName="Switch";const L=Object.assign(R,{Input:y.Input,Label:y.Label}),T=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,children:s,controlId:o,label:l,...c}=e;return a=(0,f.oU)(a,"form-floating"),(0,i.jsxs)(A.A,{ref:t,className:n()(r,a),controlId:o,...c,children:[s,(0,i.jsx)("label",{htmlFor:o,children:l})]})}));T.displayName="FloatingLabel";const z=T,U={_ref:o().any,validated:o().bool,as:o().elementType},E=l.forwardRef(((e,t)=>{let{className:a,validated:r,as:s="form",...o}=e;return(0,i.jsx)(s,{...o,ref:t,className:n()(a,r&&"was-validated")})}));E.displayName="Form",E.propTypes=U;const V=Object.assign(E,{Group:A.A,Control:v,Floating:w,Check:y,Switch:L,Label:k.A,Text:S,Range:I,Select:F,FloatingLabel:z})},14531:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(48738),n=a.n(r),s=a(9950),o=a(99288),l=a(44089),i=a(44414);const c=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:p="input",...f}=e;const{controlId:h}=(0,s.useContext)(o.A);return r=(0,l.oU)(r,"form-check-input"),(0,i.jsx)(p,{...f,ref:t,type:d,id:a||h,className:n()(c,r,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(9950),n=a(99288),s=a(44414);const o=r.forwardRef(((e,t)=>{let{controlId:a,as:o="div",...l}=e;const i=(0,r.useMemo)((()=>({controlId:a})),[a]);return(0,s.jsx)(n.A.Provider,{value:i,children:(0,s.jsx)(o,{...l,ref:t})})}));o.displayName="FormGroup";const l=o},75623:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(48738),n=a.n(r),s=a(9950),o=a(44089),l=a(14531),i=a(54947),c=a(44414);const d=s.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="span",...l}=e;return r=(0,o.oU)(r,"input-group-text"),(0,c.jsx)(s,{ref:t,className:n()(a,r),...l})}));d.displayName="InputGroupText";const u=d,m=s.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,hasValidation:l,className:d,as:u="div",...m}=e;a=(0,o.oU)(a,"input-group");const p=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(i.A.Provider,{value:p,children:(0,c.jsx)(u,{ref:t,...m,className:n()(d,a,r&&"".concat(a,"-").concat(r),l&&"has-validation")})})}));m.displayName="InputGroup";const p=Object.assign(m,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.A,{type:"checkbox",...e})})})},95252:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(48738),n=a.n(r),s=a(9950),o=a(44089),l=a(44414);const i=s.forwardRef(((e,t)=>{let{bsPrefix:a,variant:r,animation:s="border",size:i,as:c="div",className:d,...u}=e;a=(0,o.oU)(a,"spinner");const m="".concat(a,"-").concat(s);return(0,l.jsx)(c,{ref:t,...u,className:n()(d,m,i&&"".concat(m,"-").concat(i),r&&"text-".concat(r))})}));i.displayName="Spinner";const c=i},70030:(e,t,a)=>{a.d(t,{B:()=>f});var r=a(80296),n=a(64467),s=a(9950),o=a(6955);function l(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var i={};function c(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&i[t[0]]||("string"===typeof t[0]&&(i[t[0]]=new Date),l.apply(void 0,t))}function d(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,n.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=function(e,t){var a=(0,s.useRef)();return(0,s.useEffect)((function(){a.current=t?a.current:e}),[e,t]),a.current};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,n=(0,s.useContext)(o.gJ)||{},l=n.i18n,i=n.defaultNS,u=a||l||(0,o.TO)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new o.hz),!u){c("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[f,{},!1];return h.t=f,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=m(m(m({},(0,o.rV)()),u.options.react),t),b=x.useSuspense,g=x.keyPrefix,y=e||i||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var j=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,r){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],n=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,a){var r=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===r||2===r};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(r,e)||n&&!o(s,e)))}(e,t,a):(c("i18n.languages were undefined or empty",t.languages),!0)}(e,u,x)}));function v(){return u.getFixedT(null,"fallback"===x.nsMode?y:y[0],g)}var N=(0,s.useState)(v),w=(0,r.A)(N,2),A=w[0],k=w[1],C=y.join(),I=p(C),O=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=x.bindI18n,t=x.bindI18nStore;function a(){O.current&&k(v)}return O.current=!0,j||b||d(u,y,(function(){O.current&&k(v)})),j&&I&&I!==C&&O.current&&k(v),e&&u&&u.on(e,a),t&&u&&u.store.on(t,a),function(){O.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,a)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,a)}))}}),[u,C]);var F=(0,s.useRef)(!0);(0,s.useEffect)((function(){O.current&&!F.current&&k(v),F.current=!1}),[u,g]);var P=[A,u,j];if(P.t=A,P.i18n=u,P.ready=j,j)return P;if(!j&&!b)return P;throw new Promise((function(e){d(u,y,(function(){e()}))}))}},43145:(e,t,a)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,{A:()=>r})},80296:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(27800);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,s,o,l=[],i=!0,c=!1;try{if(s=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(r=s.call(a)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}(e,t)||(0,r.A)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(43145);function n(e,t){if(e){if("string"===typeof e)return(0,r.A)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,r.A)(e,t):void 0}}}}]);