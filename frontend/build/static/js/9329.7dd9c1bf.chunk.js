"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9329],{19329:(e,s,r)=>{r.r(s),r.d(s,{default:()=>A});var a=r(9950),t=r(471),l=r(86781),i=r(68459),n=r(97937),c=r(86133),m=r(68984),o=r(26473),d=r(60666),j=r(70030),h=r(9449),u=r(27081),x=r(19443),f=r(80183),b=r(88249),p=r(44414);const g=()=>{const{t:e}=(0,j.B)(),s=(0,o.t)(d.Ik().shape({first_name:d.Yj().required(e("Please select first name")),last_name:d.Yj().required(e("Please select last name")),email:d.Yj().required(e("Please select name")).email(e("Please valid Email")),role_id:d.Yj().required(e("Please select role"))})),[r,c]=(0,a.useState)(""),[g,A]=(0,a.useState)(""),[v,S]=(0,a.useState)(!1),w=(0,u.wA)(),{flats:y}=(0,u.d4)((e=>({flats:e.Flat.flats})));(0,a.useEffect)((()=>{w((0,x.qx)())}),[]);const{register:C,handleSubmit:_,setError:N,formState:{errors:k}}=(0,h.mN)({defaultValues:{},resolver:s}),q=_((async e=>{S(!0),w((0,f.dH)(e)).unwrap().then((e=>{e&&!0===e.status&&c(e.message),S(!1)})).catch((e=>{for(var s in e.errors)try{N(s,{message:e.errors[s].toString()})}catch(r){}S(!1)}))}));return(0,p.jsxs)(p.Fragment,{children:[r&&(0,p.jsx)("div",{className:"alert alert-success",children:r}),g&&(0,p.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,p.jsx)(t.A,{children:(0,p.jsx)(t.A.Body,{children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(i.A,{lg:6,children:(0,p.jsxs)("form",{onSubmit:q,children:[(0,p.jsx)(m.Z,{label:"First Name",type:"text",register:C,name:"first_name",errors:k,rows:"5",containerClass:"mb-3"},"first_name"),(0,p.jsx)(m.Z,{label:"Last Name",type:"text",register:C,name:"last_name",errors:k,rows:"5",containerClass:"mb-3"},"last_name"),(0,p.jsx)(m.Z,{label:"Email",type:"text",register:C,name:"email",errors:k,rows:"5",containerClass:"mb-3"},"email"),(0,p.jsxs)(m.Z,{type:"select",label:"Role",name:"role_id",containerClass:"mb-3",register:C,errors:k,children:[(0,p.jsx)("option",{value:"",children:"Select Role"}),(0,p.jsx)("option",{value:"staff",children:"Staff"}),(0,p.jsx)("option",{value:"admin",children:"Admin"})]}),v?(0,p.jsx)(b.m,{}):(0,p.jsx)(n.A,{variant:"primary",type:"submit",children:"Create User"})]})}),(0,p.jsx)(i.A,{lg:6}),(0,p.jsx)(i.A,{lg:3})]})})})]})},A=()=>(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(c.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Users",path:"/user"},{label:"New Staff",path:"/notice/new",active:!0}],title:"New Staff"}),(0,p.jsx)(l.A,{children:(0,p.jsx)(i.A,{children:(0,p.jsx)(g,{})})})]})}}]);