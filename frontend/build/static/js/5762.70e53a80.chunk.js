"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[5762],{7250:(e,s,a)=>{a.d(s,{Z:()=>u});var t=a(47313),r=a(22102),l=a(63849),n=a(31616),c=a(65832),o=a(2135),i=a(42874),d=a(12007),m=a(46417);const u=e=>{let{helpText:s,bottomLinks:a,children:u,isCombineForm:h}=e;return(0,t.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg","authentication-bg-pattern"),()=>{document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern")})),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"account-pages mt-5 mb-5",children:(0,m.jsx)(r.Z,{children:(0,m.jsx)(l.Z,{className:"justify-content-center",children:(0,m.jsxs)(n.Z,{md:8,lg:6,xl:h?9:4,children:[(0,m.jsx)(c.Z,{className:"bg-pattern",children:(0,m.jsxs)(c.Z.Body,{className:"p-4",children:[(0,m.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,m.jsxs)("div",{className:"auth-brand",children:[(0,m.jsx)(o.rU,{to:"/",className:"logo logo-dark text-center",children:(0,m.jsx)("span",{className:"logo-lg",children:(0,m.jsx)("img",{src:i,alt:"",height:"50"})})}),(0,m.jsx)(o.rU,{to:"/",className:"logo logo-light text-center",children:(0,m.jsx)("span",{className:"logo-lg",children:(0,m.jsx)("img",{src:d,alt:"",height:"22"})})})]}),(0,m.jsx)("p",{className:"text-muted mb-4 mt-3",children:s})]}),u]})}),a]})})})}),(0,m.jsxs)("footer",{className:"footer footer-alt",children:["2015 - ",(new Date).getFullYear()," \xa9 UBold theme by"," ",(0,m.jsx)(o.rU,{to:"#",className:"text-white-50",children:"Coderthemes"})]})]})}},65762:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(47313),r=a(63849),l=a(31616),n=a(6203),c=a(93298),o=a(58467),i=a(2135),d=a(3463),m=a(62563),u=a(24511),h=a(65537),x=a(29797),p=a(52487),b=a(7250),g=a(46417);const j=()=>{const{t:e}=(0,u.$)(),s=(0,h.I0)(),{user:a,userSignUp:j,loading:y,error:N}=(0,h.v9)((e=>({user:e.Auth.user,loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp})));(0,t.useEffect)((()=>{s((0,x.Li)())}),[s]);const w=(0,m.X)(d.Ry().shape({username:d.Z_().required(e("Please enter Username")),loginpassword:d.Z_().required(e("Please enter Password"))})),f=(0,m.X)(d.Ry().shape({password:d.Z_().required(e("Please enter Password")),fullname:d.Z_().required(e("Please enter Fullname")),email:d.Z_().required("Please enter Email").email("Please enter valid Email")}));return(0,g.jsxs)(g.Fragment,{children:[a?(0,g.jsx)(o.Fg,{to:"/"}):null,j?(0,g.jsx)(o.Fg,{to:"/auth/confirm"}):null,(0,g.jsx)(b.Z,{isCombineForm:!0,children:(0,g.jsxs)(r.Z,{children:[(0,g.jsx)(l.Z,{lg:6,children:(0,g.jsxs)("div",{className:"p-sm-3",children:[(0,g.jsx)("h4",{className:"mt-0",children:e("Sign In")}),(0,g.jsx)("p",{className:"text-muted mb-4",children:e("Enter your email address and password to access account.")}),N&&(0,g.jsx)(n.Z,{variant:"danger",className:"my-2",children:N}),(0,g.jsxs)(p.J,{onSubmit:e=>{s((0,x.pH)(e.username,e.loginpassword))},resolver:w,defaultValues:{username:"test",loginpassword:"test"},children:[(0,g.jsx)(p.y,{label:"Username",type:"text",name:"username",placeholder:"Enter your Username",containerClass:"mb-3"}),(0,g.jsx)(p.y,{label:"Password",type:"password",name:"loginpassword",placeholder:"Enter your password",containerClass:"mb-3",children:(0,g.jsx)(i.rU,{to:"/auth/forget-password",className:"text-muted float-end",children:(0,g.jsx)("small",{children:e("Forgot your password?")})})}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(c.Z,{variant:"primary",type:"submit",className:"btn btn-primary btn-sm float-sm-end",disabled:y,children:e("Log In")}),(0,g.jsx)(p.y,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"pt-1"})]})]})]})}),(0,g.jsx)(l.Z,{lg:6,children:(0,g.jsxs)("div",{className:"p-sm-3",children:[(0,g.jsx)("h4",{className:"mt-0",children:e("Free Sign Up")}),(0,g.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute")}),(0,g.jsxs)(p.J,{onSubmit:e=>{s((0,x.EL)(e.fullname,e.email,e.password))},resolver:f,defaultValues:{},children:[(0,g.jsx)(p.y,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,g.jsx)(p.y,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,g.jsx)(p.y,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,g.jsxs)("div",{className:"mb-0",children:[(0,g.jsx)(c.Z,{variant:"success",type:"submit",className:"btn btn-success btn-sm float-sm-end",disabled:y,children:e("Sign Up")}),(0,g.jsx)(p.y,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"pt-1"})]})]})]})})]})})]})}},42874:(e,s,a)=>{e.exports=a.p+"static/media/logo-dark.b8b456a2c25748eb2636.png"},12007:(e,s,a)=>{e.exports=a.p+"static/media/logo-light.b8b456a2c25748eb2636.png"}}]);