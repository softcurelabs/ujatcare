"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8898],{7250:(e,s,t)=>{t.d(s,{Z:()=>m});var a=t(47313),l=t(22102),r=t(63849),n=t(31616),c=t(65832),i=t(2135),d=t(12007),o=t(46417);const m=e=>{let{helpText:s,bottomLinks:t,children:m,isCombineForm:h}=e;return(0,a.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,o.jsx)(l.Z,{children:(0,o.jsx)(r.Z,{className:"justify-content-center",children:(0,o.jsxs)(n.Z,{md:8,lg:6,xl:h?9:5,children:[(0,o.jsx)(c.Z,{className:"bg-pattern",children:(0,o.jsxs)(c.Z.Body,{className:"p-4",children:[(0,o.jsxs)("div",{className:"text-center w-100 m-auto",children:[(0,o.jsxs)("div",{className:"auth-brand",children:[(0,o.jsx)(i.rU,{to:"/",className:"logo logo-dark text-center",children:(0,o.jsx)("span",{className:"logo-lg",children:(0,o.jsx)("img",{src:d,alt:"",height:"100"})})}),(0,o.jsx)(i.rU,{to:"/",className:"logo logo-light text-center",children:(0,o.jsx)("span",{className:"logo-lg",children:(0,o.jsx)("img",{src:d,alt:"",height:"22"})})})]}),(0,o.jsx)("p",{className:"text-muted mb-4 mt-3",children:s})]}),m]})}),t]})})})})})}},8898:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var a=t(47313),l=t(63849),r=t(31616),n=t(93298),c=t(2135),i=t(3463),d=t(62563),o=t(24511),m=t(1084),h=t(52487),x=t(7250),u=t(85592),j=t(46417);const g=()=>{const{t:e}=(0,o.$)();return(0,j.jsx)(l.Z,{className:"mt-3",children:(0,j.jsx)(r.Z,{className:"text-center",children:(0,j.jsxs)("p",{className:"text-white-50",children:[e("Back to")," ",(0,j.jsx)(c.rU,{to:"/auth/login",className:"text-white ms-1",children:(0,j.jsx)("b",{children:e("Log in")})})]})})})},b=()=>{const{t:e}=(0,o.$)(),[s,t]=(0,a.useState)(""),[l,r]=(0,a.useState)(""),c=(0,m.I0)(),b=(0,d.X)(i.Ry().shape({email:i.Z_().email().required(e("Please enter email"))}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(x.Z,{helpText:e("Enter your email address and we'll send you an email with instructions to reset your password."),bottomLinks:(0,j.jsx)(g,{}),children:[s&&(0,j.jsx)("div",{className:"alert alert-success",children:s}),l&&(0,j.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:l}),(0,j.jsxs)(h.J,{onSubmit:e=>{console.log(e),c((0,u.j$)(e.email)).unwrap().then((e=>{e&&!0===e.status&&t(e.message)})).catch((e=>{r(e.message)}))},resolver:b,children:[(0,j.jsx)(h.y,{label:e("Email"),type:"text",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,j.jsx)("div",{className:"d-grid text-center",children:(0,j.jsx)(n.Z,{variant:"primary",type:"submit",children:e("Reset Password")})})]})]})})}}}]);