"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9329],{19329:(e,r,s)=>{s.r(r),s.d(r,{default:()=>v});var a=s(9950),t=s(56035),l=s(86781),n=s(68459),i=s(97937),m=s(86133),c=s(82612),o=s(26473),d=s(60666),h=s(70030),u=s(9449),j=s(27081),x=s(19443),f=s(80183),b=s(88249),p=s(44414);const g=()=>{const{t:e}=(0,h.B)(),r=(0,o.t)(d.Ik().shape({first_name:d.Yj().required(e("Please select first name")),last_name:d.Yj().required(e("Please select last name")),email:d.Yj().email(e("Please valid Email")).required(e("Please enter email")),role_id:d.Yj().required(e("Please select role"))})),[s,m]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),[A,S]=(0,a.useState)(!1),w=(0,j.wA)(),{flats:y}=(0,j.d4)((e=>({flats:e.Flat.flats})));(0,a.useEffect)((()=>{w((0,x.qx)())}),[]);const{register:_,handleSubmit:C,setError:N,formState:{errors:P}}=(0,u.mN)({defaultValues:{},resolver:r}),k=C((async e=>{S(!0),w((0,f.dH)(e)).unwrap().then((e=>{e&&!0===e.status&&m(e.message),S(!1)})).catch((e=>{for(var r in e.errors)try{N(r,{message:e.errors[r].toString()})}catch(s){}S(!1)}))}));return(0,p.jsxs)(p.Fragment,{children:[s&&(0,p.jsx)("div",{className:"alert alert-success",children:s}),g&&(0,p.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,p.jsx)(t.A,{children:(0,p.jsx)(t.A.Body,{children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(n.A,{lg:6,children:(0,p.jsxs)("form",{onSubmit:k,children:[(0,p.jsx)(c.Z,{label:"First Name",type:"text",register:_,name:"first_name",errors:P,rows:"5",containerClass:"mb-3"},"first_name"),(0,p.jsx)(c.Z,{label:"Last Name",type:"text",register:_,name:"last_name",errors:P,rows:"5",containerClass:"mb-3"},"last_name"),(0,p.jsx)(c.Z,{label:"Phone number",type:"text",register:_,name:"phone_number",errors:P,containerClass:"mb-3"},"phone_number"),(0,p.jsx)(c.Z,{label:"Email",type:"text",register:_,name:"email",errors:P,rows:"5",containerClass:"mb-3"},"email"),(0,p.jsxs)(c.Z,{type:"select",label:"Role",name:"role_id",containerClass:"mb-3",register:_,errors:P,children:[(0,p.jsx)("option",{value:"",children:"Select Role"}),(0,p.jsx)("option",{value:"staff",children:"Staff"}),(0,p.jsx)("option",{value:"maintenance-staff",children:"Maintenance Staff"}),(0,p.jsx)("option",{value:"admin",children:"Admin"})]}),A?(0,p.jsx)(b.m,{}):(0,p.jsx)(i.A,{variant:"primary",type:"submit",children:"Create User"})]})}),(0,p.jsx)(n.A,{lg:6}),(0,p.jsx)(n.A,{lg:3})]})})})]})},v=()=>(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(m.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Users",path:"/user"},{label:"New Staff",path:"/notice/new",active:!0}],title:"New Staff"}),(0,p.jsx)(l.A,{children:(0,p.jsx)(n.A,{children:(0,p.jsx)(g,{})})})]})}}]);