"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[6781],{63647:(e,s,a)=>{a.d(s,{m:()=>t});var r=a(95252),l=a(44414);const t=()=>(0,l.jsx)(r.A,{animation:"border",role:"status",children:(0,l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},68984:(e,s,a)=>{a.d(s,{Z:()=>h,z:()=>n});var r=a(9950),l=a(9449),t=a(44414);const n=e=>{let{defaultValues:s,resolver:a,children:n,onSubmit:c,formClass:o}=e;const i=(0,l.mN)({defaultValues:s,resolver:a}),{handleSubmit:d,register:m,control:h,formState:{errors:u}}=i;return(0,t.jsx)("form",{onSubmit:d(c),className:o,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:u,control:h}}):e)):n})};var c=a(75623),o=a(64055),i=a(48738),d=a.n(i);const m=e=>{let{name:s,placeholder:a,refCallback:l,errors:n,control:i,register:m,className:h}=e;const[u,x]=(0,r.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.A,{className:"mb-0",children:[(0,t.jsx)(o.A.Control,{type:u?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:e=>{l&&l(e)},className:h,isInvalid:!(!n||!n[s]),...m?m(s):{},autoComplete:s}),(0,t.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":u}),"data-password":u?"true":"false",children:(0,t.jsx)("span",{className:"password-eye",onClick:()=>{x(!u)}})})]})})},h=e=>{let{label:s,type:a,name:r,placeholder:l,register:n,errors:c,control:i,className:d,labelClassName:h,containerClass:u,refCallback:x,children:p,rows:j,symbol:g,...b}=e;const N="textarea"===a?"textarea":"select"===a?"select":"input";return(0,t.jsx)(t.Fragment,{children:"hidden"===a?(0,t.jsx)("input",{type:a,name:r,id:r,...n?n(r):{},...b,className:d}):(0,t.jsx)(t.Fragment,{children:"password"===a?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.A.Group,{className:u,children:[s?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(o.A.Label,{className:h,children:s})," ",p," "]}):null,(0,t.jsx)(m,{name:r,placeholder:l,refCallback:x,errors:c,register:n,className:d}),c&&c[r]?(0,t.jsx)(o.A.Control.Feedback,{type:"invalid",className:"d-block",children:c[r].message}):null]})}):(0,t.jsx)(t.Fragment,{children:"checkbox"===a||"radio"===a?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.A.Group,{className:u,children:[(0,t.jsx)(o.A.Check,{type:a,label:s,name:r,id:r,ref:e=>{x&&x(e)},className:d,isInvalid:!(!c||!c[r]),...n?n(r):{},...b}),c&&c[r]?(0,t.jsx)(o.A.Control.Feedback,{type:"invalid",children:c[r].message}):null]})}):(0,t.jsxs)(o.A.Group,{className:u,children:[s?(0,t.jsx)(o.A.Label,{className:h,children:s}):null,g?(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("span",{className:"input-group-text",id:r,children:g}),(0,t.jsx)(o.A.Control,{type:a,placeholder:l,name:r,id:r,as:N,ref:e=>{x&&x(e)},className:d,isInvalid:!(!c||!c[r]),...n?n(r):{},rows:j,...b,autoComplete:r,children:p||null})]}):(0,t.jsx)(o.A.Control,{type:a,placeholder:l,name:r,id:r,as:N,ref:e=>{x&&x(e)},className:d,isInvalid:!(!c||!c[r]),...n?n(r):{},rows:j,...b,autoComplete:r,children:p||null}),c&&c[r]?(0,t.jsx)(o.A.Control.Feedback,{type:"invalid",children:c[r].message}):null]})})})})}},56781:(e,s,a)=>{a.r(s),a.d(s,{default:()=>C});var r=a(9950),l=a(86781),t=a(68459),n=a(19360),c=a(97937),o=a(42074),i=a(28429),d=a(27081),m=a(60666),h=a(26473),u=a(70030),x=a(68984),p=a(45358),j=a(471),g=a(90197),b=a(44414);const N=e=>{let{bottomLinks:s,children:a,isCombineForm:n}=e;(0,r.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]);let d=(0,i.Zp)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,b.jsx)(p.A,{children:(0,b.jsx)(l.A,{className:"justify-content-center",children:(0,b.jsxs)(t.A,{md:5,lg:5,xl:5,children:[(0,b.jsx)(j.A,{className:"bg-pattern",children:(0,b.jsxs)(j.A.Body,{className:"p-4",children:[(0,b.jsxs)("div",{className:"text-center w-95 m-auto row",children:[(0,b.jsx)("div",{className:"col-lg-3",children:(0,b.jsx)(c.A,{onClick:()=>{d("/application")},className:"btn-sm",children:"Start Application"})}),(0,b.jsx)("div",{className:"auth-brand col-lg-6",children:(0,b.jsx)(o.N_,{to:"/",className:"logo logo-dark text-center",children:(0,b.jsx)("span",{className:"logo-lg",children:(0,b.jsx)("img",{src:g,alt:"",height:"100"})})})}),(0,b.jsx)("div",{className:"col-lg-3",children:(0,b.jsx)(c.A,{onClick:()=>{d("/auth/login")},className:"btn-sm",children:"Staff Login"})})]}),a]})}),s]})})})})})};var f=a(39820),A=a(19443),v=a(63647);const y=()=>{const{t:e}=(0,u.B)();return(0,b.jsx)(l.A,{className:"mt-3",children:(0,b.jsx)(t.A,{className:"text-center",children:(0,b.jsx)("p",{children:(0,b.jsx)(o.N_,{to:"/auth/forget-password",className:"text-white-50 ms-1",children:e("Forgot your password?")})})})})},C=()=>{var e;const{t:s}=(0,u.B)(),a=(0,d.wA)(),{user:o,userLoggedIn:p,loading:j,flats:g,error:C}=(0,d.d4)((e=>({user:e.CustomerAuth.user,loading:e.CustomerAuth.loading,userLoggedIn:e.CustomerAuth.userLoggedIn,error:e.CustomerAuth.error,flats:e.Flat.flats})));(0,r.useEffect)((()=>{a((0,A.q)())}),[]);const w=(0,h.t)(m.Ik().shape({email:m.Yj().required(s("Please enter Email")),password:m.Yj().required(s("Please enter Password"))})),k=(0,i.zy)(),F=(null===k||void 0===k||null===(e=k.search)||void 0===e?void 0:e.slice(6))||"/dashboard-1";return(0,b.jsxs)(b.Fragment,{children:[(p||o)&&(0,b.jsx)(i.C5,{to:F}),(0,b.jsxs)(N,{isCombineForm:!0,bottomLinks:(0,b.jsx)(y,{}),children:[C&&(0,b.jsx)(n.A,{variant:"danger",className:"my-2",children:C}),(0,b.jsxs)(l.A,{children:[(0,b.jsxs)(t.A,{lg:12,children:[(0,b.jsx)("div",{children:(0,b.jsx)("h4",{className:"text-center text-muted",children:g.length&&"".concat(g[0].name," & ").concat(g[1].name)})}),(0,b.jsx)("div",{children:(0,b.jsx)("h5",{className:"text-center text-muted",children:"Tenant Login"})}),(0,b.jsxs)(x.z,{onSubmit:e=>{a((0,f.Uf)(e))},resolver:w,defaultValues:{email:"",password:""},children:[(0,b.jsx)(x.Z,{label:s("Email"),type:"text",name:"email",placeholder:"Enter your Email",containerClass:"mb-3"}),(0,b.jsx)(x.Z,{label:s("Password"),type:"password",name:"password",placeholder:"Enter your password",containerClass:"mb-3"}),(0,b.jsx)("div",{className:"text-center d-grid",children:j?(0,b.jsx)(v.m,{}):(0,b.jsx)(c.A,{variant:"primary",type:"submit",children:s("Log In")})})]})]}),(0,b.jsx)(t.A,{lg:12,children:(0,b.jsxs)("div",{className:"text-center mt-2 d-grid",children:[(0,b.jsxs)("p",{className:"mb-1",children:["Contact Office:"," ",(0,b.jsx)("a",{href:"mailto:office@northparkmanor.org",children:"office@northparkmanor.org"})]}),(0,b.jsxs)("p",{children:["After Hours Maintenance: ",(0,b.jsx)("a",{href:"tel:250 812-0283",children:"250 812-0283"})]})]})})]})]})]})}}}]);