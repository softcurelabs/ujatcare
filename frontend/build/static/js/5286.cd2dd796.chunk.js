"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[5286],{7250:(e,s,t)=>{t.d(s,{Z:()=>m});var a=t(47313),r=t(22102),n=t(63849),l=t(31616),c=t(65832),o=t(2135),i=t(12007),d=t(46417);const m=e=>{let{helpText:s,bottomLinks:t,children:m,isCombineForm:h}=e;return(0,a.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,d.jsx)(r.Z,{children:(0,d.jsx)(n.Z,{className:"justify-content-center",children:(0,d.jsxs)(l.Z,{md:8,lg:6,xl:h?9:5,children:[(0,d.jsx)(c.Z,{className:"bg-pattern",children:(0,d.jsxs)(c.Z.Body,{className:"p-4",children:[(0,d.jsxs)("div",{className:"text-center w-100 m-auto",children:[(0,d.jsxs)("div",{className:"auth-brand",children:[(0,d.jsx)(o.rU,{to:"/",className:"logo logo-dark text-center",children:(0,d.jsx)("h2",{className:"text-muted",children:"North Park Manor Society"})}),(0,d.jsx)(o.rU,{to:"/",className:"logo logo-light text-center",children:(0,d.jsx)("span",{className:"logo-lg",children:(0,d.jsx)("img",{src:i,alt:"",height:"22"})})})]}),(0,d.jsx)("p",{className:"text-muted mb-4 mt-3",children:s})]}),m]})}),t]})})})})})}},85286:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var a=t(47313),r=t(63849),n=t(31616),l=t(93298),c=t(2135),o=t(58467),i=t(3463),d=t(62563),m=t(24511),h=t(1084),x=t(52487),u=t(7250),p=t(85592),j=t(46417);const b=()=>{const{t:e}=(0,m.$)();return(0,j.jsx)(r.Z,{className:"mt-3",children:(0,j.jsx)(n.Z,{className:"text-center",children:(0,j.jsxs)("p",{className:"text-white-50",children:[e("Back to")," ",(0,j.jsx)(c.rU,{to:"/auth/login",className:"text-white ms-1",children:(0,j.jsx)("b",{children:e("Log in")})})]})})})},g=()=>{const{t:e}=(0,m.$)(),[s,t]=(0,a.useState)(""),[r,n]=(0,a.useState)(""),c=(0,h.I0)(),g=(0,o.UO)(),w=(0,d.X)(i.Ry().shape({email:i.Z_().email().required(e("Please enter email")),password:i.Z_().required("Please enter your password.").min(8,"Your password is too short."),password_confirmation:i.Z_().required("Please retype your password.").oneOf([i.iH("password")],"Your passwords do not match.")}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(u.Z,{bottomLinks:(0,j.jsx)(b,{}),children:[s&&(0,j.jsx)("div",{className:"alert alert-success",children:s}),r&&(0,j.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:r}),(0,j.jsxs)(x.J,{onSubmit:e=>{t(""),n(""),c((0,p.cl)(e)).unwrap().then((e=>{e&&!0===e.status&&t(e.message)})).catch((e=>{n(e.message)}))},resolver:w,defaultValues:{token:g.token},children:[(0,j.jsx)(x.y,{label:e("Email"),type:"text",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,j.jsx)(x.y,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter password"),containerClass:"mb-3"}),(0,j.jsx)(x.y,{label:e("Confirm Password"),type:"password",name:"password_confirmation",placeholder:e("Enter confirm password"),containerClass:"mb-3"}),(0,j.jsx)(x.y,{type:"hidden",name:"token"}),(0,j.jsx)("div",{className:"d-grid text-center",children:(0,j.jsx)(l.Z,{variant:"primary",type:"submit",children:e("Reset Password")})})]})]})})}},12007:(e,s,t)=>{e.exports=t.p+"static/media/logo-light.b8b456a2c25748eb2636.png"}}]);