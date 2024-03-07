"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3676],{52487:(e,s,a)=>{a.d(s,{y:()=>p,J:()=>n});var t=a(47313),r=a(75627),l=a(46417);const n=e=>{let{defaultValues:s,resolver:a,children:n,onSubmit:o,formClass:c}=e;const i=(0,r.cI)({defaultValues:s,resolver:a}),{handleSubmit:d,register:m,control:p,formState:{errors:u}}=i;return(0,l.jsx)("form",{onSubmit:d(o),className:c,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?t.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:u,control:p}}):e)):n})};var o=a(38394),c=a(88178),i=a(72884),d=a.n(i);const m=e=>{let{name:s,placeholder:a,refCallback:r,errors:n,control:i,register:m,className:p}=e;const[u,x]=(0,t.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Z,{className:"mb-0",children:[(0,l.jsx)(c.Z.Control,{type:u?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:e=>{r&&r(e)},className:p,isInvalid:!(!n||!n[s]),...m?m(s):{},autoComplete:s}),(0,l.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":u}),"data-password":u?"true":"false",children:(0,l.jsx)("span",{className:"password-eye",onClick:()=>{x(!u)}})})]})})},p=e=>{let{label:s,type:a,name:t,placeholder:r,register:n,errors:o,control:i,className:d,labelClassName:p,containerClass:u,refCallback:x,children:h,rows:b,...f}=e;const j="textarea"===a?"textarea":"select"===a?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===a?(0,l.jsx)("input",{type:a,name:t,id:t,...n?n(t):{},...f,className:d}):(0,l.jsx)(l.Fragment,{children:"password"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z.Group,{className:u,children:[s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z.Label,{className:p,children:s})," ",h," "]}):null,(0,l.jsx)(m,{name:t,placeholder:r,refCallback:x,errors:o,register:n,className:d}),o&&o[t]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[t].message}):null]})}):(0,l.jsx)(l.Fragment,{children:"checkbox"===a||"radio"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z.Group,{className:u,children:[(0,l.jsx)(c.Z.Check,{type:a,label:s,name:t,id:t,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[t]),...n?n(t):{},...f}),o&&o[t]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",children:o[t].message}):null]})}):(0,l.jsxs)(c.Z.Group,{className:u,children:[s?(0,l.jsx)(c.Z.Label,{className:p,children:s}):null,(0,l.jsx)(c.Z.Control,{type:a,placeholder:r,name:t,id:t,as:j,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[t]),...n?n(t):{},rows:b,...f,autoComplete:t,children:h||null}),o&&o[t]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",children:o[t].message}):null]})})})})}},7250:(e,s,a)=>{a.d(s,{Z:()=>m});var t=a(47313),r=a(22102),l=a(63849),n=a(31616),o=a(10195),c=a(2135),i=a(12007),d=a(46417);const m=e=>{let{helpText:s,bottomLinks:a,children:m,isCombineForm:p}=e;return(0,t.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,d.jsx)(r.Z,{children:(0,d.jsx)(l.Z,{className:"justify-content-center",children:(0,d.jsxs)(n.Z,{md:8,lg:6,xl:p?9:5,children:[(0,d.jsx)(o.Z,{className:"bg-pattern",children:(0,d.jsxs)(o.Z.Body,{className:"p-4",children:[(0,d.jsxs)("div",{className:"text-center w-100 m-auto",children:[(0,d.jsxs)("div",{className:"auth-brand",children:[(0,d.jsx)(c.rU,{to:"/",className:"logo logo-dark text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:i,alt:"",height:"100"})})}),(0,d.jsx)(c.rU,{to:"/",className:"logo logo-light text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:i,alt:"",height:"22"})})})]}),(0,d.jsx)("p",{className:"text-muted mb-4 mt-3",children:s})]}),m]})}),a]})})})})})}},65762:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});a(47313);var t=a(63849),r=a(31616),l=a(93298),n=a(2135),o=a(3463),c=a(62563),i=a(24511),d=a(52487),m=a(7250),p=a(46417);const u=()=>{const{t:e}=(0,i.$)(),s=(0,c.X)(o.Ry().shape({email:o.Z_().required(e("Please enter Username")),loginpassword:o.Z_().required(e("Please enter Password"))})),a=(0,c.X)(o.Ry().shape({password:o.Z_().required(e("Please enter Password")),fullname:o.Z_().required(e("Please enter Fullname")),email:o.Z_().required("Please enter Email").email("Please enter valid Email")}));return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(m.Z,{isCombineForm:!0,children:(0,p.jsxs)(t.Z,{children:[(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsxs)("div",{className:"p-sm-3",children:[(0,p.jsx)("h4",{className:"mt-0",children:e("Sign In")}),(0,p.jsx)("p",{className:"text-muted mb-4",children:e("Enter your email address and password to access account.")}),(0,p.jsxs)(d.J,{onSubmit:e=>{},resolver:s,defaultValues:{username:"test",loginpassword:"test"},children:[(0,p.jsx)(d.y,{label:"Username",type:"text",name:"username",placeholder:"Enter your Username",containerClass:"mb-3"}),(0,p.jsx)(d.y,{label:"Password",type:"password",name:"loginpassword",placeholder:"Enter your password",containerClass:"mb-3",children:(0,p.jsx)(n.rU,{to:"/auth/forget-password",className:"text-muted float-end",children:(0,p.jsx)("small",{children:e("Forgot your password?")})})}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)(l.Z,{variant:"primary",type:"submit",className:"btn btn-primary btn-sm float-sm-end",children:e("Log In")}),(0,p.jsx)(d.y,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"pt-1"})]})]})]})}),(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsxs)("div",{className:"p-sm-3",children:[(0,p.jsx)("h4",{className:"mt-0",children:e("Free Sign Up")}),(0,p.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute")}),(0,p.jsxs)(d.J,{onSubmit:e=>{},resolver:a,defaultValues:{},children:[(0,p.jsx)(d.y,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,p.jsx)(d.y,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,p.jsx)(d.y,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,p.jsxs)("div",{className:"mb-0",children:[(0,p.jsx)(l.Z,{variant:"success",type:"submit",className:"btn btn-success btn-sm float-sm-end",children:e("Sign Up")}),(0,p.jsx)(d.y,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"pt-1"})]})]})]})})]})})})}},16184:(e,s,a)=>{a.d(s,{FT:()=>n,ZP:()=>c});var t=a(47313),r=a(46417);const l=["as","disabled"];function n(e){let{tagName:s,disabled:a,href:t,target:r,rel:l,role:n,onClick:o,tabIndex:c=0,type:i}=e;s||(s=null!=t||null!=r||null!=l?"a":"button");const d={tagName:s};if("button"===s)return[{type:i||"button",disabled:a},d];const m=e=>{(a||"a"===s&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return"a"===s&&(t||(t="#"),a&&(t=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:a?void 0:c,href:t,target:"a"===s?r:void 0,"aria-disabled":a||void 0,rel:"a"===s?l:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const o=t.forwardRef(((e,s)=>{let{as:a,disabled:t}=e,o=function(e,s){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);const[c,{tagName:i}]=n(Object.assign({tagName:a,disabled:t},o));return(0,r.jsx)(i,Object.assign({},o,c,{ref:s}))}));o.displayName="Button";const c=o},46682:(e,s,a)=>{a.d(s,{UI:()=>r,XW:()=>l});var t=a(47313);function r(e,s){let a=0;return t.Children.map(e,(e=>t.isValidElement(e)?s(e,a++):e))}function l(e,s){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===s))}},88178:(e,s,a)=>{a.d(s,{Z:()=>z});var t=a(72884),r=a.n(t),l=a(75192),n=a.n(l),o=a(47313),c=a(46417);const i={type:n().string,tooltip:n().bool,as:n().elementType},d=o.forwardRef(((e,s)=>{let{as:a="div",className:t,type:l="valid",tooltip:n=!1,...o}=e;return(0,c.jsx)(a,{...o,ref:s,className:r()(t,"".concat(l,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const m=d;var p=a(56084),u=a(5978),x=a(68524);const h=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,htmlFor:l,...n}=e;const{controlId:i}=(0,o.useContext)(u.Z);return a=(0,x.vE)(a,"form-check-label"),(0,c.jsx)("label",{...n,ref:s,htmlFor:l||i,className:r()(t,a)})}));h.displayName="FormCheckLabel";const b=h;var f=a(46682);const j=o.forwardRef(((e,s)=>{let{id:a,bsPrefix:t,bsSwitchPrefix:l,inline:n=!1,reverse:i=!1,disabled:d=!1,isValid:h=!1,isInvalid:j=!1,feedbackTooltip:y=!1,feedback:N,feedbackType:v,className:g,style:w,title:Z="",type:C="checkbox",label:k,children:F,as:I="input",...P}=e;t=(0,x.vE)(t,"form-check"),l=(0,x.vE)(l,"form-switch");const{controlId:E}=(0,o.useContext)(u.Z),R=(0,o.useMemo)((()=>({controlId:a||E})),[E,a]),S=!F&&null!=k&&!1!==k||(0,f.XW)(F,b),L=(0,c.jsx)(p.Z,{...P,type:"switch"===C?"checkbox":C,ref:s,isValid:h,isInvalid:j,disabled:d,as:I});return(0,c.jsx)(u.Z.Provider,{value:R,children:(0,c.jsx)("div",{style:w,className:r()(g,S&&t,n&&"".concat(t,"-inline"),i&&"".concat(t,"-reverse"),"switch"===C&&l),children:F||(0,c.jsxs)(c.Fragment,{children:[L,S&&(0,c.jsx)(b,{title:Z,children:k}),N&&(0,c.jsx)(m,{type:v,tooltip:y,children:N})]})})})}));j.displayName="FormCheck";const y=Object.assign(j,{Input:p.Z,Label:b});a(21024);const N=o.forwardRef(((e,s)=>{let{bsPrefix:a,type:t,size:l,htmlSize:n,id:i,className:d,isValid:m=!1,isInvalid:p=!1,plaintext:h,readOnly:b,as:f="input",...j}=e;const{controlId:y}=(0,o.useContext)(u.Z);return a=(0,x.vE)(a,"form-control"),(0,c.jsx)(f,{...j,type:t,size:n,ref:s,readOnly:b,id:i||y,className:r()(d,h?"".concat(a,"-plaintext"):a,l&&"".concat(a,"-").concat(l),"color"===t&&"".concat(a,"-color"),m&&"is-valid",p&&"is-invalid")})}));N.displayName="FormControl";const v=Object.assign(N,{Feedback:m}),g=o.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l="div",...n}=e;return t=(0,x.vE)(t,"form-floating"),(0,c.jsx)(l,{ref:s,className:r()(a,t),...n})}));g.displayName="FormFloating";const w=g;var Z=a(87021),C=a(41709);const k=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,id:l,...n}=e;const{controlId:i}=(0,o.useContext)(u.Z);return a=(0,x.vE)(a,"form-range"),(0,c.jsx)("input",{...n,type:"range",ref:s,className:r()(t,a),id:l||i})}));k.displayName="FormRange";const F=k,I=o.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,htmlSize:l,className:n,isValid:i=!1,isInvalid:d=!1,id:m,...p}=e;const{controlId:h}=(0,o.useContext)(u.Z);return a=(0,x.vE)(a,"form-select"),(0,c.jsx)("select",{...p,size:l,ref:s,className:r()(n,a,t&&"".concat(a,"-").concat(t),i&&"is-valid",d&&"is-invalid"),id:m||h})}));I.displayName="FormSelect";const P=I,E=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,as:l="small",muted:n,...o}=e;return a=(0,x.vE)(a,"form-text"),(0,c.jsx)(l,{...o,ref:s,className:r()(t,a,n&&"text-muted")})}));E.displayName="FormText";const R=E,S=o.forwardRef(((e,s)=>(0,c.jsx)(y,{...e,ref:s,type:"switch"})));S.displayName="Switch";const L=Object.assign(S,{Input:y.Input,Label:y.Label}),T=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,children:l,controlId:n,label:o,...i}=e;return a=(0,x.vE)(a,"form-floating"),(0,c.jsxs)(Z.Z,{ref:s,className:r()(t,a),controlId:n,...i,children:[l,(0,c.jsx)("label",{htmlFor:n,children:o})]})}));T.displayName="FloatingLabel";const V=T,O={_ref:n().any,validated:n().bool,as:n().elementType},U=o.forwardRef(((e,s)=>{let{className:a,validated:t,as:l="form",...n}=e;return(0,c.jsx)(l,{...n,ref:s,className:r()(a,t&&"was-validated")})}));U.displayName="Form",U.propTypes=O;const z=Object.assign(U,{Group:Z.Z,Control:v,Floating:w,Check:y,Switch:L,Label:C.Z,Text:R,Range:F,Select:P,FloatingLabel:V})},56084:(e,s,a)=>{a.d(s,{Z:()=>d});var t=a(72884),r=a.n(t),l=a(47313),n=a(5978),o=a(68524),c=a(46417);const i=l.forwardRef(((e,s)=>{let{id:a,bsPrefix:t,className:i,type:d="checkbox",isValid:m=!1,isInvalid:p=!1,as:u="input",...x}=e;const{controlId:h}=(0,l.useContext)(n.Z);return t=(0,o.vE)(t,"form-check-input"),(0,c.jsx)(u,{...x,ref:s,type:d,id:a||h,className:r()(i,t,m&&"is-valid",p&&"is-invalid")})}));i.displayName="FormCheckInput";const d=i},87021:(e,s,a)=>{a.d(s,{Z:()=>o});var t=a(47313),r=a(5978),l=a(46417);const n=t.forwardRef(((e,s)=>{let{controlId:a,as:n="div",...o}=e;const c=(0,t.useMemo)((()=>({controlId:a})),[a]);return(0,l.jsx)(r.Z.Provider,{value:c,children:(0,l.jsx)(n,{...o,ref:s})})}));n.displayName="FormGroup";const o=n},38394:(e,s,a)=>{a.d(s,{Z:()=>u});var t=a(72884),r=a.n(t),l=a(47313),n=a(68524),o=a(56084),c=a(94354),i=a(46417);const d=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l="span",...o}=e;return t=(0,n.vE)(t,"input-group-text"),(0,i.jsx)(l,{ref:s,className:r()(a,t),...o})}));d.displayName="InputGroupText";const m=d,p=l.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,hasValidation:o,className:d,as:m="div",...p}=e;a=(0,n.vE)(a,"input-group");const u=(0,l.useMemo)((()=>({})),[]);return(0,i.jsx)(c.Z.Provider,{value:u,children:(0,i.jsx)(m,{ref:s,...p,className:r()(d,a,t&&"".concat(a,"-").concat(t),o&&"has-validation")})})}));p.displayName="InputGroup";const u=Object.assign(p,{Text:m,Radio:e=>(0,i.jsx)(m,{children:(0,i.jsx)(o.Z,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(m,{children:(0,i.jsx)(o.Z,{type:"checkbox",...e})})})},12007:(e,s,a)=>{e.exports=a.p+"static/media/logo-light.40c8c9ac3fd71757bc0c.png"}}]);