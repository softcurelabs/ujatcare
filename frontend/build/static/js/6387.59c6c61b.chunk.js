"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[6387],{68984:(e,a,t)=>{t.d(a,{Z:()=>m,z:()=>l});var n=t(9950),r=t(9449),s=t(44414);const l=e=>{let{defaultValues:a,resolver:t,children:l,onSubmit:o,formClass:i}=e;const c=(0,r.mN)({defaultValues:a,resolver:t}),{handleSubmit:d,register:u,control:m,formState:{errors:p}}=c;return(0,s.jsx)("form",{onSubmit:d(o),className:i,noValidate:!0,children:Array.isArray(l)?l.map((e=>e.props&&e.props.name?n.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:p,control:m}}):e)):l})};var o=t(75623),i=t(64055),c=t(48738),d=t.n(c);const u=e=>{let{name:a,placeholder:t,refCallback:r,errors:l,control:c,register:u,className:m}=e;const[p,f]=(0,n.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.A,{className:"mb-0",children:[(0,s.jsx)(i.A.Control,{type:p?"text":"password",placeholder:t,name:a,id:a,as:"input",ref:e=>{r&&r(e)},className:m,isInvalid:!(!l||!l[a]),...u?u(a):{},autoComplete:a}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{f(!p)}})})]})})},m=e=>{let{label:a,type:t,name:n,placeholder:r,register:l,errors:o,control:c,className:d,labelClassName:m,containerClass:p,refCallback:f,children:h,rows:b,symbol:x,...g}=e;const y="textarea"===t?"textarea":"select"===t?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===t?(0,s.jsx)("input",{type:t,name:n,id:n,...l?l(n):{},...g,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A.Group,{className:p,children:[a?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(i.A.Label,{className:m,children:a})," ",h," "]}):null,(0,s.jsx)(u,{name:n,placeholder:r,refCallback:f,errors:o,register:l,className:d}),o&&o[n]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",className:"d-block",children:o[n].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===t||"radio"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A.Group,{className:p,children:[(0,s.jsx)(i.A.Check,{type:t,label:a,name:n,id:n,ref:e=>{f&&f(e)},className:d,isInvalid:!(!o||!o[n]),...l?l(n):{},...g}),o&&o[n]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[n].message}):null]})}):(0,s.jsxs)(i.A.Group,{className:p,children:[a?(0,s.jsx)(i.A.Label,{className:m,children:a}):null,x?(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("span",{className:"input-group-text",id:n,children:x}),(0,s.jsx)(i.A.Control,{type:t,placeholder:r,name:n,id:n,as:y,ref:e=>{f&&f(e)},className:d,isInvalid:!(!o||!o[n]),...l?l(n):{},rows:b,...g,autoComplete:n,children:h||null})]}):(0,s.jsx)(i.A.Control,{type:t,placeholder:r,name:n,id:n,as:y,ref:e=>{f&&f(e)},className:d,isInvalid:!(!o||!o[n]),...l?l(n):{},rows:b,...g,autoComplete:n,children:h||null}),o&&o[n]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[n].message}):null]})})})})}},48789:(e,a,t)=>{t.d(a,{A:()=>u});var n=t(9950),r=t(45358),s=t(86781),l=t(68459),o=t(471),i=t(42074),c=t(90197),d=t(44414);const u=e=>{let{helpText:a,bottomLinks:t,children:u,isCombineForm:m}=e;return(0,n.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,d.jsx)(r.A,{children:(0,d.jsx)(s.A,{className:"justify-content-center",children:(0,d.jsxs)(l.A,{md:8,lg:6,xl:m?9:5,children:[(0,d.jsx)(o.A,{className:"bg-pattern",children:(0,d.jsxs)(o.A.Body,{className:"p-4",children:[(0,d.jsxs)("div",{className:"text-center w-100 m-auto",children:[(0,d.jsxs)("div",{className:"auth-brand",children:[(0,d.jsx)(i.N_,{to:"/",className:"logo logo-dark text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:c,alt:"",height:"100"})})}),(0,d.jsx)(i.N_,{to:"/",className:"logo logo-light text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:c,alt:"",height:"22"})})})]}),(0,d.jsx)("p",{className:"text-muted mb-4 mt-3",children:a})]}),u]})}),t]})})})})})}},6387:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});t(9950);var n=t(86781),r=t(68459),s=t(97937),l=t(42074),o=t(60666),i=t(26473),c=t(70030),d=t(68984),u=t(48789),m=t(44414);const p=()=>{const{t:e}=(0,c.B)(),a=(0,i.t)(o.Ik().shape({email:o.Yj().required(e("Please enter Username")),loginpassword:o.Yj().required(e("Please enter Password"))})),t=(0,i.t)(o.Ik().shape({password:o.Yj().required(e("Please enter Password")),fullname:o.Yj().required(e("Please enter Fullname")),email:o.Yj().required("Please enter Email").email("Please enter valid Email")}));return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(u.A,{isCombineForm:!0,children:(0,m.jsxs)(n.A,{children:[(0,m.jsx)(r.A,{lg:6,children:(0,m.jsxs)("div",{className:"p-sm-3",children:[(0,m.jsx)("h4",{className:"mt-0",children:e("Sign In")}),(0,m.jsx)("p",{className:"text-muted mb-4",children:e("Enter your email address and password to access account.")}),(0,m.jsxs)(d.z,{onSubmit:e=>{},resolver:a,defaultValues:{username:"test",loginpassword:"test"},children:[(0,m.jsx)(d.Z,{label:"Username",type:"text",name:"username",placeholder:"Enter your Username",containerClass:"mb-3"}),(0,m.jsx)(d.Z,{label:"Password",type:"password",name:"loginpassword",placeholder:"Enter your password",containerClass:"mb-3",children:(0,m.jsx)(l.N_,{to:"/auth/forget-password",className:"text-muted float-end",children:(0,m.jsx)("small",{children:e("Forgot your password?")})})}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(s.A,{variant:"primary",type:"submit",className:"btn btn-primary btn-sm float-sm-end",children:e("Log In")}),(0,m.jsx)(d.Z,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"pt-1"})]})]})]})}),(0,m.jsx)(r.A,{lg:6,children:(0,m.jsxs)("div",{className:"p-sm-3",children:[(0,m.jsx)("h4",{className:"mt-0",children:e("Free Sign Up")}),(0,m.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute")}),(0,m.jsxs)(d.z,{onSubmit:e=>{},resolver:t,defaultValues:{},children:[(0,m.jsx)(d.Z,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,m.jsx)(d.Z,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,m.jsx)(d.Z,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,m.jsxs)("div",{className:"mb-0",children:[(0,m.jsx)(s.A,{variant:"success",type:"submit",className:"btn btn-success btn-sm float-sm-end",children:e("Sign Up")}),(0,m.jsx)(d.Z,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"pt-1"})]})]})]})})]})})})}},82111:(e,a,t)=>{t.d(a,{Am:()=>l,Ay:()=>i});var n=t(9950),r=t(44414);const s=["as","disabled"];function l(e){let{tagName:a,disabled:t,href:n,target:r,rel:s,role:l,onClick:o,tabIndex:i=0,type:c}=e;a||(a=null!=n||null!=r||null!=s?"a":"button");const d={tagName:a};if("button"===a)return[{type:c||"button",disabled:t},d];const u=e=>{(t||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),t?e.stopPropagation():null==o||o(e)};return"a"===a&&(n||(n="#"),t&&(n=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===a?r:void 0,"aria-disabled":t||void 0,rel:"a"===a?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const o=n.forwardRef(((e,a)=>{let{as:t,disabled:n}=e,o=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);const[i,{tagName:c}]=l(Object.assign({tagName:t,disabled:n},o));return(0,r.jsx)(c,Object.assign({},o,i,{ref:a}))}));o.displayName="Button";const i=o},97937:(e,a,t)=>{t.d(a,{A:()=>d});var n=t(48738),r=t.n(n),s=t(9950),l=t(82111),o=t(44089),i=t(44414);const c=s.forwardRef(((e,a)=>{let{as:t,bsPrefix:n,variant:s="primary",size:c,active:d=!1,disabled:u=!1,className:m,...p}=e;const f=(0,o.oU)(n,"btn"),[h,{tagName:b}]=(0,l.Am)({tagName:t,disabled:u,...p}),x=b;return(0,i.jsx)(x,{...h,...p,ref:a,disabled:u,className:r()(m,f,d&&"active",s&&"".concat(f,"-").concat(s),c&&"".concat(f,"-").concat(c),p.href&&u&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,a,t)=>{t.d(a,{Tj:()=>r,mf:()=>s});var n=t(9950);function r(e,a){let t=0;return n.Children.map(e,(e=>n.isValidElement(e)?a(e,t++):e))}function s(e,a){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===a))}},64055:(e,a,t)=>{t.d(a,{A:()=>V});var n=t(48738),r=t.n(n),s=t(11942),l=t.n(s),o=t(9950),i=t(44414);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=o.forwardRef(((e,a)=>{let{as:t="div",className:n,type:s="valid",tooltip:l=!1,...o}=e;return(0,i.jsx)(t,{...o,ref:a,className:r()(n,"".concat(s,"-").concat(l?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=t(14531),p=t(99288),f=t(44089);const h=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,htmlFor:s,...l}=e;const{controlId:c}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-check-label"),(0,i.jsx)("label",{...l,ref:a,htmlFor:s||c,className:r()(n,t)})}));h.displayName="FormCheckLabel";const b=h;var x=t(22890);const g=o.forwardRef(((e,a)=>{let{id:t,bsPrefix:n,bsSwitchPrefix:s,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:j,feedbackType:v,className:N,style:w,title:A="",type:C="checkbox",label:k,children:I,as:F="input",...O}=e;n=(0,f.oU)(n,"form-check"),s=(0,f.oU)(s,"form-switch");const{controlId:P}=(0,o.useContext)(p.A),S=(0,o.useMemo)((()=>({controlId:t||P})),[P,t]),R=!I&&null!=k&&!1!==k||(0,x.mf)(I,b),E=(0,i.jsx)(m.A,{...O,type:"switch"===C?"checkbox":C,ref:a,isValid:h,isInvalid:g,disabled:d,as:F});return(0,i.jsx)(p.A.Provider,{value:S,children:(0,i.jsx)("div",{style:w,className:r()(N,R&&n,l&&"".concat(n,"-inline"),c&&"".concat(n,"-reverse"),"switch"===C&&s),children:I||(0,i.jsxs)(i.Fragment,{children:[E,R&&(0,i.jsx)(b,{title:A,children:k}),j&&(0,i.jsx)(u,{type:v,tooltip:y,children:j})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:m.A,Label:b});t(2241);const j=o.forwardRef(((e,a)=>{let{bsPrefix:t,type:n,size:s,htmlSize:l,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:h,readOnly:b,as:x="input",...g}=e;const{controlId:y}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-control"),(0,i.jsx)(x,{...g,type:n,size:l,ref:a,readOnly:b,id:c||y,className:r()(d,h?"".concat(t,"-plaintext"):t,s&&"".concat(t,"-").concat(s),"color"===n&&"".concat(t,"-color"),u&&"is-valid",m&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:u}),N=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:n,as:s="div",...l}=e;return n=(0,f.oU)(n,"form-floating"),(0,i.jsx)(s,{ref:a,className:r()(t,n),...l})}));N.displayName="FormFloating";const w=N;var A=t(584),C=t(90729);const k=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,id:s,...l}=e;const{controlId:c}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-range"),(0,i.jsx)("input",{...l,type:"range",ref:a,className:r()(n,t),id:s||c})}));k.displayName="FormRange";const I=k,F=o.forwardRef(((e,a)=>{let{bsPrefix:t,size:n,htmlSize:s,className:l,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:h}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-select"),(0,i.jsx)("select",{...m,size:s,ref:a,className:r()(l,t,n&&"".concat(t,"-").concat(n),c&&"is-valid",d&&"is-invalid"),id:u||h})}));F.displayName="FormSelect";const O=F,P=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,as:s="small",muted:l,...o}=e;return t=(0,f.oU)(t,"form-text"),(0,i.jsx)(s,{...o,ref:a,className:r()(n,t,l&&"text-muted")})}));P.displayName="FormText";const S=P,R=o.forwardRef(((e,a)=>(0,i.jsx)(y,{...e,ref:a,type:"switch"})));R.displayName="Switch";const E=Object.assign(R,{Input:y.Input,Label:y.Label}),L=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:n,children:s,controlId:l,label:o,...c}=e;return t=(0,f.oU)(t,"form-floating"),(0,i.jsxs)(A.A,{ref:a,className:r()(n,t),controlId:l,...c,children:[s,(0,i.jsx)("label",{htmlFor:l,children:o})]})}));L.displayName="FloatingLabel";const T=L,U={_ref:l().any,validated:l().bool,as:l().elementType},z=o.forwardRef(((e,a)=>{let{className:t,validated:n,as:s="form",...l}=e;return(0,i.jsx)(s,{...l,ref:a,className:r()(t,n&&"was-validated")})}));z.displayName="Form",z.propTypes=U;const V=Object.assign(z,{Group:A.A,Control:v,Floating:w,Check:y,Switch:E,Label:C.A,Text:S,Range:I,Select:O,FloatingLabel:T})},14531:(e,a,t)=>{t.d(a,{A:()=>d});var n=t(48738),r=t.n(n),s=t(9950),l=t(99288),o=t(44089),i=t(44414);const c=s.forwardRef(((e,a)=>{let{id:t,bsPrefix:n,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:p="input",...f}=e;const{controlId:h}=(0,s.useContext)(l.A);return n=(0,o.oU)(n,"form-check-input"),(0,i.jsx)(p,{...f,ref:a,type:d,id:t||h,className:r()(c,n,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(9950),r=t(99288),s=t(44414);const l=n.forwardRef(((e,a)=>{let{controlId:t,as:l="div",...o}=e;const i=(0,n.useMemo)((()=>({controlId:t})),[t]);return(0,s.jsx)(r.A.Provider,{value:i,children:(0,s.jsx)(l,{...o,ref:a})})}));l.displayName="FormGroup";const o=l},75623:(e,a,t)=>{t.d(a,{A:()=>p});var n=t(48738),r=t.n(n),s=t(9950),l=t(44089),o=t(14531),i=t(54947),c=t(44414);const d=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:n,as:s="span",...o}=e;return n=(0,l.oU)(n,"input-group-text"),(0,c.jsx)(s,{ref:a,className:r()(t,n),...o})}));d.displayName="InputGroupText";const u=d,m=s.forwardRef(((e,a)=>{let{bsPrefix:t,size:n,hasValidation:o,className:d,as:u="div",...m}=e;t=(0,l.oU)(t,"input-group");const p=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(i.A.Provider,{value:p,children:(0,c.jsx)(u,{ref:a,...m,className:r()(d,t,n&&"".concat(t,"-").concat(n),o&&"has-validation")})})}));m.displayName="InputGroup";const p=Object.assign(m,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(o.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(o.A,{type:"checkbox",...e})})})},70030:(e,a,t)=>{t.d(a,{B:()=>f});var n=t(80296),r=t(64467),s=t(9950),l=t(6955);function o(){if(console&&console.warn){for(var e,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var i={};function c(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];"string"===typeof a[0]&&i[a[0]]||("string"===typeof a[0]&&(i[a[0]]=new Date),o.apply(void 0,a))}function d(e,a,t){e.loadNamespaces(a,(function(){if(e.isInitialized)t();else{e.on("initialized",(function a(){setTimeout((function(){e.off("initialized",a)}),0),t()}))}}))}function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){(0,r.A)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p=function(e,a){var t=(0,s.useRef)();return(0,s.useEffect)((function(){t.current=a?t.current:e}),[e,a]),t.current};function f(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.i18n,r=(0,s.useContext)(l.gJ)||{},o=r.i18n,i=r.defaultNS,u=t||o||(0,l.TO)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new l.hz),!u){c("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[f,{},!1];return h.t=f,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=m(m(m({},(0,l.rV)()),u.options.react),a),x=b.useSuspense,g=b.keyPrefix,y=e||i||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var j=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.languages&&a.languages.length?void 0!==a.options.ignoreJSONStructure?a.hasLoadedNamespace(e,{precheck:function(a,n){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!n(a.isLanguageChangingTo,e))return!1}}):function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.languages[0],r=!!a.options&&a.options.fallbackLng,s=a.languages[a.languages.length-1];if("cimode"===n.toLowerCase())return!0;var l=function(e,t){var n=a.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===n||2===n};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))&&(!!a.hasResourceBundle(n,e)||!(a.services.backendConnector.backend&&(!a.options.resources||a.options.partialBundledLanguages))||!(!l(n,e)||r&&!l(s,e)))}(e,a,t):(c("i18n.languages were undefined or empty",a.languages),!0)}(e,u,b)}));function v(){return u.getFixedT(null,"fallback"===b.nsMode?y:y[0],g)}var N=(0,s.useState)(v),w=(0,n.A)(N,2),A=w[0],C=w[1],k=y.join(),I=p(k),F=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=b.bindI18n,a=b.bindI18nStore;function t(){F.current&&C(v)}return F.current=!0,j||x||d(u,y,(function(){F.current&&C(v)})),j&&I&&I!==k&&F.current&&C(v),e&&u&&u.on(e,t),a&&u&&u.store.on(a,t),function(){F.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),a&&u&&a.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,k]);var O=(0,s.useRef)(!0);(0,s.useEffect)((function(){F.current&&!O.current&&C(v),O.current=!1}),[u,g]);var P=[A,u,j];if(P.t=A,P.i18n=u,P.ready=j,j)return P;if(!j&&!x)return P;throw new Promise((function(e){d(u,y,(function(){e()}))}))}},43145:(e,a,t)=>{function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}t.d(a,{A:()=>n})},80296:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(27800);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,r,s,l,o=[],i=!0,c=!1;try{if(s=(t=t.call(e)).next,0===a){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=s.call(t)).done)&&(o.push(n.value),o.length!==a);i=!0);}catch(e){c=!0,r=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw r}}return o}}(e,a)||(0,n.A)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(43145);function r(e,a){if(e){if("string"===typeof e)return(0,n.A)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n.A)(e,a):void 0}}}}]);