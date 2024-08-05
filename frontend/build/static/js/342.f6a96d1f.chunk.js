"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[342],{68984:(e,t,a)=>{a.d(t,{Z:()=>m,z:()=>o});var n=a(9950),r=a(9449),s=a(44414);const o=e=>{let{defaultValues:t,resolver:a,children:o,onSubmit:l,formClass:i}=e;const c=(0,r.mN)({defaultValues:t,resolver:a}),{handleSubmit:d,register:u,control:m,formState:{errors:f}}=c;return(0,s.jsx)("form",{onSubmit:d(l),className:i,noValidate:!0,children:Array.isArray(o)?o.map((e=>e.props&&e.props.name?n.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:f,control:m}}):e)):o})};var l=a(75623),i=a(64055),c=a(48738),d=a.n(c);const u=e=>{let{name:t,placeholder:a,refCallback:r,errors:o,control:c,register:u,className:m}=e;const[f,p]=(0,n.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.A,{className:"mb-0",children:[(0,s.jsx)(i.A.Control,{type:f?"text":"password",placeholder:a,name:t,id:t,as:"input",ref:e=>{r&&r(e)},className:m,isInvalid:!(!o||!o[t]),...u?u(t):{},autoComplete:t}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":f}),"data-password":f?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{p(!f)}})})]})})},m=e=>{let{label:t,type:a,name:n,placeholder:r,register:o,errors:l,control:c,className:d,labelClassName:m,containerClass:f,refCallback:p,children:h,rows:b,prefix:x,...g}=e;const y="textarea"===a?"textarea":"select"===a?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===a?(0,s.jsx)("input",{type:a,name:n,id:n,...o?o(n):{},...g,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A.Group,{className:f,children:[t?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(i.A.Label,{className:m,children:t})," ",h," "]}):null,(0,s.jsx)(u,{name:n,placeholder:r,refCallback:p,errors:l,register:o,className:d}),l&&l[n]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",className:"d-block",children:l[n].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===a||"radio"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A.Group,{className:f,children:[(0,s.jsx)(i.A.Check,{type:a,label:t,name:n,id:n,ref:e=>{p&&p(e)},className:d,isInvalid:!(!l||!l[n]),...o?o(n):{},...g}),l&&l[n]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",children:l[n].message}):null]})}):(0,s.jsxs)(i.A.Group,{className:f,children:[t?(0,s.jsx)(i.A.Label,{className:m,children:t}):null,x?(0,s.jsx)("span",{className:"input-group-text",id:n,children:x}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(i.A.Control,{type:a,placeholder:r,name:n,id:n,as:y,ref:e=>{p&&p(e)},className:d,isInvalid:!(!l||!l[n]),...o?o(n):{},rows:b,...g,autoComplete:n,children:h||null}),l&&l[n]?(0,s.jsx)(i.A.Control.Feedback,{type:"invalid",children:l[n].message}):null]})})})})}},48789:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(9950),r=a(45358),s=a(86781),o=a(68459),l=a(471),i=a(42074),c=a(90197),d=a(44414);const u=e=>{let{helpText:t,bottomLinks:a,children:u,isCombineForm:m}=e;return(0,n.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,d.jsx)(r.A,{children:(0,d.jsx)(s.A,{className:"justify-content-center",children:(0,d.jsxs)(o.A,{md:8,lg:6,xl:m?9:5,children:[(0,d.jsx)(l.A,{className:"bg-pattern",children:(0,d.jsxs)(l.A.Body,{className:"p-4",children:[(0,d.jsxs)("div",{className:"text-center w-100 m-auto",children:[(0,d.jsxs)("div",{className:"auth-brand",children:[(0,d.jsx)(i.N_,{to:"/",className:"logo logo-dark text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:c,alt:"",height:"100"})})}),(0,d.jsx)(i.N_,{to:"/",className:"logo logo-light text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:c,alt:"",height:"22"})})})]}),(0,d.jsx)("p",{className:"text-muted mb-4 mt-3",children:t})]}),u]})}),a]})})})})})}},30342:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});a(9950);var n=a(42074),r=a(86781),s=a(68459),o=a(97937),l=a(70030),i=a(60666),c=a(26473),d=(a(48738),a(68984)),u=a(48789),m=a(44414);const f=()=>{const{t:e}=(0,l.B)();return(0,m.jsx)(r.A,{className:"mt-3",children:(0,m.jsx)(s.A,{className:"text-center",children:(0,m.jsxs)("p",{className:"text-white-50",children:[e("Already have account?")," ",(0,m.jsx)(n.N_,{to:"/auth/login",className:"text-white ms-1",children:(0,m.jsx)("b",{children:e("Sign In")})})]})})})},p=()=>{const{t:e}=(0,l.B)(),t=(0,c.t)(i.Ik().shape({fullname:i.Yj().required(e("Please enter Fullname")),email:i.Yj().required("Please enter Email").email("Please enter valid Email"),password:i.Yj().required(e("Please enter Password"))}));return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(u.A,{helpText:e("Don't have an account? Create your account, it takes less than a minute"),bottomLinks:(0,m.jsx)(f,{}),children:(0,m.jsxs)(d.z,{onSubmit:e=>{},resolver:t,defaultValues:{},children:[(0,m.jsx)(d.Z,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,m.jsx)(d.Z,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,m.jsx)(d.Z,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,m.jsx)(d.Z,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"mb-3"}),(0,m.jsx)("div",{className:"text-center d-grid",children:(0,m.jsx)(o.A,{variant:"success",type:"submit",children:e("Sign Up")})})]})})})}},82111:(e,t,a)=>{a.d(t,{Am:()=>o,Ay:()=>i});var n=a(9950),r=a(44414);const s=["as","disabled"];function o(e){let{tagName:t,disabled:a,href:n,target:r,rel:s,role:o,onClick:l,tabIndex:i=0,type:c}=e;t||(t=null!=n||null!=r||null!=s?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:a},d];const u=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==l||l(e)};return"a"===t&&(n||(n="#"),a&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:a?void 0:i,href:n,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const l=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,l=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);const[i,{tagName:c}]=o(Object.assign({tagName:a,disabled:n},l));return(0,r.jsx)(c,Object.assign({},l,i,{ref:t}))}));l.displayName="Button";const i=l},97937:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(48738),r=a.n(n),s=a(9950),o=a(82111),l=a(44089),i=a(44414);const c=s.forwardRef(((e,t)=>{let{as:a,bsPrefix:n,variant:s="primary",size:c,active:d=!1,disabled:u=!1,className:m,...f}=e;const p=(0,l.oU)(n,"btn"),[h,{tagName:b}]=(0,o.Am)({tagName:a,disabled:u,...f}),x=b;return(0,i.jsx)(x,{...h,...f,ref:t,disabled:u,className:r()(m,p,d&&"active",s&&"".concat(p,"-").concat(s),c&&"".concat(p,"-").concat(c),f.href&&u&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,t,a)=>{a.d(t,{Tj:()=>r,jJ:()=>s,mf:()=>o});var n=a(9950);function r(e,t){let a=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,a++):e))}function s(e,t){let a=0;n.Children.forEach(e,(e=>{n.isValidElement(e)&&t(e,a++)}))}function o(e,t){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===t))}},64055:(e,t,a)=>{a.d(t,{A:()=>V});var n=a(48738),r=a.n(n),s=a(11942),o=a.n(s),l=a(9950),i=a(44414);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef(((e,t)=>{let{as:a="div",className:n,type:s="valid",tooltip:o=!1,...l}=e;return(0,i.jsx)(a,{...l,ref:t,className:r()(n,"".concat(s,"-").concat(o?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=a(14531),f=a(99288),p=a(44089);const h=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,htmlFor:s,...o}=e;const{controlId:c}=(0,l.useContext)(f.A);return a=(0,p.oU)(a,"form-check-label"),(0,i.jsx)("label",{...o,ref:t,htmlFor:s||c,className:r()(n,a)})}));h.displayName="FormCheckLabel";const b=h;var x=a(22890);const g=l.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,bsSwitchPrefix:s,inline:o=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:j,feedbackType:v,className:N,style:w,title:A="",type:k="checkbox",label:C,children:I,as:F="input",...O}=e;n=(0,p.oU)(n,"form-check"),s=(0,p.oU)(s,"form-switch");const{controlId:P}=(0,l.useContext)(f.A),S=(0,l.useMemo)((()=>({controlId:a||P})),[P,a]),R=!I&&null!=C&&!1!==C||(0,x.mf)(I,b),T=(0,i.jsx)(m.A,{...O,type:"switch"===k?"checkbox":k,ref:t,isValid:h,isInvalid:g,disabled:d,as:F});return(0,i.jsx)(f.A.Provider,{value:S,children:(0,i.jsx)("div",{style:w,className:r()(N,R&&n,o&&"".concat(n,"-inline"),c&&"".concat(n,"-reverse"),"switch"===k&&s),children:I||(0,i.jsxs)(i.Fragment,{children:[T,R&&(0,i.jsx)(b,{title:A,children:C}),j&&(0,i.jsx)(u,{type:v,tooltip:y,children:j})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:m.A,Label:b});a(2241);const j=l.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:s,htmlSize:o,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:h,readOnly:b,as:x="input",...g}=e;const{controlId:y}=(0,l.useContext)(f.A);return a=(0,p.oU)(a,"form-control"),(0,i.jsx)(x,{...g,type:n,size:o,ref:t,readOnly:b,id:c||y,className:r()(d,h?"".concat(a,"-plaintext"):a,s&&"".concat(a,"-").concat(s),"color"===n&&"".concat(a,"-color"),u&&"is-valid",m&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:u}),N=l.forwardRef(((e,t)=>{let{className:a,bsPrefix:n,as:s="div",...o}=e;return n=(0,p.oU)(n,"form-floating"),(0,i.jsx)(s,{ref:t,className:r()(a,n),...o})}));N.displayName="FormFloating";const w=N;var A=a(584),k=a(90729);const C=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,id:s,...o}=e;const{controlId:c}=(0,l.useContext)(f.A);return a=(0,p.oU)(a,"form-range"),(0,i.jsx)("input",{...o,type:"range",ref:t,className:r()(n,a),id:s||c})}));C.displayName="FormRange";const I=C,F=l.forwardRef(((e,t)=>{let{bsPrefix:a,size:n,htmlSize:s,className:o,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:h}=(0,l.useContext)(f.A);return a=(0,p.oU)(a,"form-select"),(0,i.jsx)("select",{...m,size:s,ref:t,className:r()(o,a,n&&"".concat(a,"-").concat(n),c&&"is-valid",d&&"is-invalid"),id:u||h})}));F.displayName="FormSelect";const O=F,P=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:s="small",muted:o,...l}=e;return a=(0,p.oU)(a,"form-text"),(0,i.jsx)(s,{...l,ref:t,className:r()(n,a,o&&"text-muted")})}));P.displayName="FormText";const S=P,R=l.forwardRef(((e,t)=>(0,i.jsx)(y,{...e,ref:t,type:"switch"})));R.displayName="Switch";const T=Object.assign(R,{Input:y.Input,Label:y.Label}),L=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,children:s,controlId:o,label:l,...c}=e;return a=(0,p.oU)(a,"form-floating"),(0,i.jsxs)(A.A,{ref:t,className:r()(n,a),controlId:o,...c,children:[s,(0,i.jsx)("label",{htmlFor:o,children:l})]})}));L.displayName="FloatingLabel";const E=L,U={_ref:o().any,validated:o().bool,as:o().elementType},z=l.forwardRef(((e,t)=>{let{className:a,validated:n,as:s="form",...o}=e;return(0,i.jsx)(s,{...o,ref:t,className:r()(a,n&&"was-validated")})}));z.displayName="Form",z.propTypes=U;const V=Object.assign(z,{Group:A.A,Control:v,Floating:w,Check:y,Switch:T,Label:k.A,Text:S,Range:I,Select:O,FloatingLabel:E})},14531:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(48738),r=a.n(n),s=a(9950),o=a(99288),l=a(44089),i=a(44414);const c=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:f="input",...p}=e;const{controlId:h}=(0,s.useContext)(o.A);return n=(0,l.oU)(n,"form-check-input"),(0,i.jsx)(f,{...p,ref:t,type:d,id:a||h,className:r()(c,n,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(9950),r=a(99288),s=a(44414);const o=n.forwardRef(((e,t)=>{let{controlId:a,as:o="div",...l}=e;const i=(0,n.useMemo)((()=>({controlId:a})),[a]);return(0,s.jsx)(r.A.Provider,{value:i,children:(0,s.jsx)(o,{...l,ref:t})})}));o.displayName="FormGroup";const l=o},75623:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(48738),r=a.n(n),s=a(9950),o=a(44089),l=a(14531),i=a(54947),c=a(44414);const d=s.forwardRef(((e,t)=>{let{className:a,bsPrefix:n,as:s="span",...l}=e;return n=(0,o.oU)(n,"input-group-text"),(0,c.jsx)(s,{ref:t,className:r()(a,n),...l})}));d.displayName="InputGroupText";const u=d,m=s.forwardRef(((e,t)=>{let{bsPrefix:a,size:n,hasValidation:l,className:d,as:u="div",...m}=e;a=(0,o.oU)(a,"input-group");const f=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(i.A.Provider,{value:f,children:(0,c.jsx)(u,{ref:t,...m,className:r()(d,a,n&&"".concat(a,"-").concat(n),l&&"has-validation")})})}));m.displayName="InputGroup";const f=Object.assign(m,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.A,{type:"checkbox",...e})})})},70030:(e,t,a)=>{a.d(t,{B:()=>p});var n=a(80296),r=a(64467),s=a(9950),o=a(6955);function l(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var i={};function c(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&i[t[0]]||("string"===typeof t[0]&&(i[t[0]]=new Date),l.apply(void 0,t))}function d(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,r.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e,t){var a=(0,s.useRef)();return(0,s.useEffect)((function(){a.current=t?a.current:e}),[e,t]),a.current};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,r=(0,s.useContext)(o.gJ)||{},l=r.i18n,i=r.defaultNS,u=a||l||(0,o.TO)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new o.hz),!u){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[p,{},!1];return h.t=p,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=m(m(m({},(0,o.rV)()),u.options.react),t),x=b.useSuspense,g=b.keyPrefix,y=e||i||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var j=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,n){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],r=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var o=function(e,a){var n=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===n||2===n};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(n,e)||r&&!o(s,e)))}(e,t,a):(c("i18n.languages were undefined or empty",t.languages),!0)}(e,u,b)}));function v(){return u.getFixedT(null,"fallback"===b.nsMode?y:y[0],g)}var N=(0,s.useState)(v),w=(0,n.A)(N,2),A=w[0],k=w[1],C=y.join(),I=f(C),F=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function a(){F.current&&k(v)}return F.current=!0,j||x||d(u,y,(function(){F.current&&k(v)})),j&&I&&I!==C&&F.current&&k(v),e&&u&&u.on(e,a),t&&u&&u.store.on(t,a),function(){F.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,a)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,a)}))}}),[u,C]);var O=(0,s.useRef)(!0);(0,s.useEffect)((function(){F.current&&!O.current&&k(v),O.current=!1}),[u,g]);var P=[A,u,j];if(P.t=A,P.i18n=u,P.ready=j,j)return P;if(!j&&!x)return P;throw new Promise((function(e){d(u,y,(function(){e()}))}))}},43145:(e,t,a)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,{A:()=>n})},80296:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(27800);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,s,o,l=[],i=!0,c=!1;try{if(s=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(n=s.call(a)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){c=!0,r=e}finally{try{if(!i&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw r}}return l}}(e,t)||(0,n.A)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(43145);function r(e,t){if(e){if("string"===typeof e)return(0,n.A)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,n.A)(e,t):void 0}}}}]);