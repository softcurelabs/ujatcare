"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[1636],{91636:(e,r,s)=>{s.r(r),s.d(r,{default:()=>y});var a=s(47313),t=s(75627),l=s(65832),i=s(63849),n=s(31616),c=s(93298),d=s(51450),m=s(52487),o=s(58467),u=s(33689),h=s(1084),p=s(24511),j=s(62563),x=s(3463),f=s(20253),b=s(46417);const g=()=>{const e=(0,h.I0)(),{t:r}=(0,p.$)(),[s,d]=(0,a.useState)(""),[g,y]=(0,a.useState)(""),v=(0,j.X)(x.Ry().shape({})),{flats:S}=(0,h.v9)((e=>({flats:e.Flat.flats}))),[Z,C]=(0,a.useState)(new Date),[k,w]=(0,a.useState)(!0),_=(0,o.s0)(),A=(0,o.UO)(),{register:E,handleSubmit:N,setValue:R,setError:B,formState:{errors:F}}=(0,t.cI)({defaultValues:{},resolver:v}),I=N((r=>{e((0,u.D0)(r)).unwrap().then((e=>{e&&!0===e.status&&d(e.message)})).catch((e=>{for(var r in e.errors)try{B(r,{message:e.errors[r].toString()})}catch(s){}}))}));return(0,a.useEffect)((()=>{e((0,f.i)()).unwrap().then((()=>{e((0,u.fB)(A.id)).unwrap().then((e=>{R("id",e.user.id),R("email",e.user.email),e.user.flat&&R("flat_id",e.user.flat.flat_id),R("role_id",e.user.role)})).catch((e=>y(e)))}))}),[]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(l.Z,{children:(0,b.jsxs)(l.Z.Body,{children:[s&&(0,b.jsx)("div",{className:"alert alert-success",children:s}),g&&(0,b.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,b.jsx)(i.Z,{children:(0,b.jsx)(n.Z,{lg:6,children:(0,b.jsxs)("form",{onSubmit:I,className:k?"form-readonly":"",children:[(0,b.jsxs)("fieldset",{children:[(0,b.jsx)(m.y,{label:"Email",type:"email",register:E,name:"email",placeholder:"Email",containerClass:"mb-3",disabled:!0}),(0,b.jsxs)(m.y,{type:"select",label:"Role",name:"role_id",containerClass:"mb-3",register:E,errors:F,children:[(0,b.jsx)("option",{value:"",children:"Select Role"}),(0,b.jsx)("option",{value:"renter",children:"Renter"}),(0,b.jsx)("option",{value:"admin",children:"Admin"})]}),(0,b.jsx)(m.y,{type:"select",label:"Apartment#",name:"flat_id",containerClass:"mb-3",register:E,errors:F,children:S.length&&S.map((e=>(0,b.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,b.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))})]}),(0,b.jsx)(c.Z,{onClick:()=>_(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),(0,b.jsx)(c.Z,{variant:"primary",type:"submit",children:"Submit"})]})})})]})})})},y=()=>(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)(d.Z,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"Assign Permission",path:"/user",active:!0}],title:"Assign Permission"}),(0,b.jsx)(i.Z,{children:(0,b.jsx)(n.Z,{children:(0,b.jsx)(g,{})})})]})}}]);