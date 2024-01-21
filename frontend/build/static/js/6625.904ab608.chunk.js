"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[6625],{8587:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var n=a(47313),t=a(63849),l=a(31616),i=a(51450),o=a(65832),r=a(93298),c=a(2135),m=a(72884),d=a.n(m),h=a(47939),x=a(3463),p=a(62563),u=a(52487),j=a(46417);const g=e=>{let{show:s,onHide:a,onSubmit:n}=e;const t=(0,p.X)(x.Ry().shape({name:x.Z_().required("Please enter name"),email:x.Z_().required("Please enter email").email("Please enter valid email"),phone:x.Z_().required("Please enter phone").matches(/^\d{10}$/,"Phone number is not valid"),category:x.Z_().required("Please enter category")}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(h.Z,{show:s,onHide:a,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,j.jsx)(h.Z.Header,{className:"bg-light",onHide:a,closeButton:!0,children:(0,j.jsx)(h.Z.Title,{className:"m-0",children:"Add New Opportunities"})}),(0,j.jsx)(h.Z.Body,{className:"p-4",children:(0,j.jsxs)(u.J,{onSubmit:n,resolver:t,children:[(0,j.jsx)(u.y,{label:"Company Name",type:"text",name:"name",placeholder:"Enter company name",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Email address",type:"email",name:"email",placeholder:"Enter email",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Phone",type:"text",name:"phone",placeholder:"Enter phone number",containerClass:"mb-3"}),(0,j.jsx)(u.y,{label:"Category",type:"text",name:"category",placeholder:"Enter category",containerClass:"mb-3"}),(0,j.jsxs)("div",{className:"text-end",children:[(0,j.jsx)(r.Z,{variant:"success",type:"submit",className:"waves-effect waves-light me-1",children:"Save"}),(0,j.jsx)(r.Z,{variant:"danger",className:"waves-effect waves-light",onClick:a,children:"Continue"})]})]})})]})})},y=e=>{const[s,a]=(0,n.useState)(e.companyInfo),[i,m]=(0,n.useState)(!1),h=()=>m(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{className:"mb-2",children:(0,j.jsx)(o.Z.Body,{children:(0,j.jsxs)(t.Z,{className:"justify-content-between",children:[(0,j.jsx)(l.Z,{className:"col-auto",children:(0,j.jsxs)("form",{className:"d-flex flex-wrap align-items-center",children:[(0,j.jsx)("label",{htmlFor:"inputPassword2",className:"visually-hidden",children:"Search"}),(0,j.jsx)("div",{className:"me-3",children:(0,j.jsx)("input",{type:"search",className:"form-control my-1 my-lg-0",id:"inputPassword2",placeholder:"Search...",onChange:s=>(s=>{if(""===s)a(e.companyInfo);else{var n=e.companyInfo;n=n.filter((e=>e.name.toLowerCase().includes(s)||e.location.toLowerCase().includes(s)||e.category.toLowerCase().includes(s))),a(n)}})(s.target.value)})}),(0,j.jsx)("label",{htmlFor:"status-select",className:"me-2",children:"Sort By"}),(0,j.jsx)("div",{className:"me-sm-3",children:(0,j.jsxs)("select",{className:"form-select my-1 my-lg-0",onChange:s=>(s=>{let n=e.companyInfo;n="All"===s?e.companyInfo:[...e.companyInfo].filter((e=>{var a;return null===(a=e.status)||void 0===a?void 0:a.includes(s)})),a(n)})(s.target.value),children:[(0,j.jsx)("option",{defaultValue:"All",children:"All"}),(0,j.jsx)("option",{value:"Hot",children:"Hot"}),(0,j.jsx)("option",{value:"Cold",children:"Cold"}),(0,j.jsx)("option",{value:"In-progress",children:"In Progress"}),(0,j.jsx)("option",{value:"Lost",children:"Lost"}),(0,j.jsx)("option",{value:"Won",children:"Won"})]})})]})}),(0,j.jsx)(l.Z,{lg:4,children:(0,j.jsxs)("div",{className:"text-lg-end mt-3 mt-lg-0",children:[(0,j.jsx)(r.Z,{variant:"success",className:"waves-effect waves-light me-1",children:(0,j.jsx)("i",{className:"mdi mdi-cog"})}),(0,j.jsxs)(r.Z,{variant:"danger",className:"waves-effect waves-light",onClick:()=>m(!0),children:[(0,j.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add New"]})]})})]})})}),(s||[]).map(((e,s)=>(0,j.jsx)(o.Z,{className:"mb-2",children:(0,j.jsx)(o.Z.Body,{children:(0,j.jsxs)(t.Z,{className:"align-items-center",children:[(0,j.jsx)(l.Z,{sm:4,children:(0,j.jsxs)("div",{className:"d-flex align-items-start",children:[(0,j.jsx)("img",{className:"d-flex align-self-center me-3 rounded-circle",src:e.logo,alt:"",height:"64"}),(0,j.jsxs)("div",{className:"w-100",children:[(0,j.jsx)("h4",{className:"mt-0 mb-2 font-16",children:e.name}),(0,j.jsxs)("p",{className:"mb-1",children:[(0,j.jsx)("b",{children:"Location:"})," ",e.location]}),(0,j.jsxs)("p",{className:"mb-0",children:[(0,j.jsx)("b",{children:"Category:"})," ",e.category]})]})]})}),(0,j.jsxs)(l.Z,{sm:4,children:[(0,j.jsxs)("p",{className:"mb-1 mt-3 mt-sm-0",children:[(0,j.jsx)("i",{className:"mdi mdi-email me-1"})," ",e.email]}),(0,j.jsxs)("p",{className:"mb-0",children:[(0,j.jsx)("i",{className:"mdi mdi-phone-classic me-1"})," ",e.phone]})]}),(0,j.jsx)(l.Z,{sm:2,children:(0,j.jsx)("div",{className:"text-center mt-3 mt-sm-0",children:(0,j.jsx)("div",{className:d()("badge","font-14","p-1",{"bg-soft-info text-info":"Hot"===e.status,"bg-soft-primary text-primary":"Cold"===e.status,"bg-soft-warning text-warning":"In-progress"===e.status,"bg-soft-danger text-danger":"Lost"===e.status,"bg-soft-success text-success":"Won"===e.status}),children:e.status})})}),(0,j.jsx)(l.Z,{sm:2,children:(0,j.jsxs)("div",{className:"text-sm-end",children:[(0,j.jsxs)(c.rU,{to:"#",className:"action-icon",children:[" ",(0,j.jsx)("i",{className:"mdi mdi-square-edit-outline"})]}),(0,j.jsxs)(c.rU,{to:"#",className:"action-icon",children:[" ",(0,j.jsx)("i",{className:"mdi mdi-delete"})]})]})})]})})},s))),(0,j.jsx)("div",{className:"text-center my-4",children:(0,j.jsxs)(c.rU,{to:"#",className:"text-danger",children:[(0,j.jsx)("i",{className:"mdi mdi-spin mdi-loading me-1"})," Load more"," "]})}),(0,j.jsx)(g,{show:i,onHide:h,onSubmit:()=>{h()}})]})};var b=a(58446);const f=()=>(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(o.Z,{dir:"ltr",children:(0,j.jsxs)(o.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title mb-3",children:"Status Charts"}),(0,j.jsx)("div",{className:"text-center",children:(0,j.jsx)(b.Z,{options:{chart:{type:"pie"},dataLabels:{enabled:!1},labels:["Won","Hot","Cold","In-progress","Lost"],legend:{position:"bottom",fontSize:"15px",horizontalAlign:"center"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[28,20,40,30,10],type:"pie",height:300})})]})})});const v=[{id:1,logo:a(83718),name:"Amazon Inc.",location:"Seattle, Washington",category:"Ecommerce",email:"collier@jourrapide.com",phone:"828-216-2190",status:"Hot"},{id:2,logo:a(48537),name:"Apple Inc.",location:"Cupertino, California",category:"Ecommerce",email:"deanes@dayrep.com",phone:"077 6157 4248",status:"Cold"},{id:3,logo:a(98941),name:"Google LLC",location:"Menlo Park, California",category:"Search engine",email:"nnac@hotmai.us",phone:"(216) 76 298 896",status:"In-progress"},{id:4,logo:a(50347),name:"Airbnb Inc.",location:"San Francisco, California",category:"Real Estate",email:"austin@dayrep.com",phone:"(02) 75 150 655",status:"Lost"},{id:5,logo:a(66096),name:"Cisco Systems",location:"San Jose, California",category:"Operating Systems",email:"annette@email.net",phone:"(+15) 73 483 758",status:"Won"}],N=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Z,{breadCrumbItems:[{label:"CRM",path:"/apps/crm/opportunities"},{label:"Opportunities",path:"/apps/crm/opportunities",active:!0}],title:"Opportunities"}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{xl:{span:8,order:1},xs:{span:12,order:2},children:(0,j.jsx)(y,{companyInfo:v})}),(0,j.jsx)(l.Z,{xl:{span:4,order:2},xs:{span:12,order:1},children:(0,j.jsx)(f,{})})]})]})},25197:(e,s,a)=>{a.d(s,{$F:()=>i,PB:()=>l});const n="data-rr-ui-",t="rrUi";function l(e){return"".concat(n).concat(e)}function i(e){return"".concat(t).concat(e)}},86472:(e,s,a)=>{a.d(s,{Z:()=>i});var n=a(47313),t=a(78532);const l=(0,n.createContext)(t.Z?window:void 0);l.Provider;function i(){return(0,n.useContext)(l)}},46106:(e,s,a)=>{function n(e,s){return e.contains?e.contains(s):e.compareDocumentPosition?e===s||!!(16&e.compareDocumentPosition(s)):void 0}a.d(s,{Z:()=>n})},15028:(e,s,a)=>{a.d(s,{Z:()=>t});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function t(e,s){return n(e.querySelectorAll(s))}}}]);