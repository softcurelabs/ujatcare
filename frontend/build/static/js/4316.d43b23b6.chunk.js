"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[4316],{78053:(e,s,t)=>{t.d(s,{Z:()=>d});var a=t(47313),r=t(65832),n=t(2135),i=t(24511),l=t(42874),o=t(12007),c=t(46417);const d=e=>{let{helpText:s,bottomLinks:t,children:d,isCombineForm:m}=e;const{t:h}=(0,i.$)();return(0,a.useEffect)((()=>(document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern"),document.body&&document.body.classList.add("auth-fluid-pages","pb-0"),()=>{document.body&&document.body.classList.remove("auth-fluid-pages","pb-0")})),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"auth-fluid",children:[(0,c.jsx)("div",{className:"auth-fluid-form-box",children:(0,c.jsx)("div",{className:"align-items-center d-flex h-100",children:(0,c.jsxs)(r.Z.Body,{children:[(0,c.jsx)("div",{className:"auth-brand text-center text-lg-start",children:(0,c.jsxs)("div",{className:"auth-logo",children:[(0,c.jsx)(n.rU,{to:"/",className:"logo logo-dark text-center outline-none",children:(0,c.jsx)("span",{className:"logo-lg",children:(0,c.jsx)("img",{src:l,alt:"",height:"50"})})}),(0,c.jsx)(n.rU,{to:"/",className:"logo logo-light text-center",children:(0,c.jsx)("span",{className:"logo-lg",children:(0,c.jsx)("img",{src:o,alt:"",height:"50"})})})]})}),d,t]})})}),(0,c.jsx)("div",{className:"auth-fluid-right text-center",children:(0,c.jsxs)("div",{className:"auth-user-testimonial",children:[(0,c.jsx)("h2",{className:"mb-3 text-white",children:h("I love the color!")}),(0,c.jsxs)("p",{className:"lead",children:[(0,c.jsx)("i",{className:"mdi mdi-format-quote-open"})," ",h("I've been using your theme from the previous developer for our web app, once I knew new version is out, I immediately bought with no hesitation. Great themes, good documentation with lots of customization available and sample app that really fit our need.")," ",(0,c.jsx)("i",{className:"mdi mdi-format-quote-close"})]}),(0,c.jsx)("h5",{className:"text-white",children:h("- Fadlisaad (Ubold Admin User)")})]})})]})})}},24316:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var a=t(47313),r=t(6203),n=t(93298),i=t(2135),l=t(58467),o=t(3463),c=t(62563),d=t(24511),m=t(65537),h=t(72884),u=t.n(h),x=t(29797);const g=()=>new URLSearchParams((0,l.TH)().search);t(82831);var b=t(52487),p=t(78053),j=t(46417);const v=()=>{const{t:e}=(0,d.$)();return(0,j.jsx)("footer",{className:"footer footer-alt",children:(0,j.jsxs)("p",{className:"text-muted",children:[e("Don't have an account?")," ",(0,j.jsx)(i.rU,{to:"/auth/register2",className:"text-muted ms-1",children:(0,j.jsx)("b",{children:e("Sign Up")})})]})})},N=()=>(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("ul",{className:"social-list list-inline mt-3 mb-0",children:([{variant:"primary",icon:"facebook"},{variant:"danger",icon:"google"},{variant:"info",icon:"twitter"},{variant:"secondary",icon:"github"}]||[]).map(((e,s)=>(0,j.jsx)("li",{className:"list-inline-item",children:(0,j.jsx)(i.rU,{to:"#",className:u()("social-list-item","border-"+e.variant,"text-"+e.variant),children:(0,j.jsx)("i",{className:u()("mdi","mdi-"+e.icon)})})},s)))})}),f=()=>{const{t:e}=(0,d.$)(),s=(0,m.I0)(),t=g().get("next");(0,a.useEffect)((()=>{s((0,x.Li)())}),[s]);const{loading:h,userLoggedIn:u,user:f,error:y}=(0,m.v9)((e=>({loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}))),w=(0,c.X)(o.Ry().shape({username:o.Z_().required(e("Please enter Username")),password:o.Z_().required(e("Please enter Password"))}));return(0,j.jsxs)(j.Fragment,{children:[u||f?(0,j.jsx)(l.Fg,{to:t||"/"}):null,(0,j.jsxs)(p.Z,{bottomLinks:(0,j.jsx)(v,{}),children:[(0,j.jsx)("h4",{className:"mt-0",children:e("Sign In")}),(0,j.jsx)("p",{className:"text-muted mb-4",children:e("Enter your email address and password to access account.")}),y&&(0,j.jsx)(r.Z,{variant:"danger",className:"my-2",children:y}),(0,j.jsxs)(b.J,{onSubmit:e=>{s((0,x.pH)(e.username,e.password))},resolver:w,defaultValues:{username:"test",password:"test"},children:[(0,j.jsx)(b.y,{label:e("Username"),type:"text",name:"username",placeholder:e("Enter your Username"),containerClass:"mb-3"}),(0,j.jsx)(b.y,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3",children:(0,j.jsx)(i.rU,{to:"/auth/forget-password2",className:"text-muted float-end",children:(0,j.jsx)("small",{children:e("Forgot your password?")})})}),(0,j.jsx)(b.y,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"mb-3"}),(0,j.jsx)("div",{className:"d-grid mb-0 text-center",children:(0,j.jsx)(n.Z,{variant:"primary",type:"submit",disabled:h,children:e("Log In")})}),(0,j.jsxs)("div",{className:"text-center mt-4",children:[(0,j.jsx)("p",{className:"text-muted font-16",children:e("Sign in with")}),(0,j.jsx)(N,{})]})]})]})]})}},42874:(e,s,t)=>{e.exports=t.p+"static/media/logo-dark.b8b456a2c25748eb2636.png"},12007:(e,s,t)=>{e.exports=t.p+"static/media/logo-light.b8b456a2c25748eb2636.png"}}]);