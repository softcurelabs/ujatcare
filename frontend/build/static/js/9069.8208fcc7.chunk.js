"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9069],{63112:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(72348),l=a.n(s),n=(a(4434),a(44414));const r=e=>(0,n.jsx)(n.Fragment,{children:e.showTimeSelectOnly?(0,n.jsx)(l(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:t=>e.onChange(t),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"form-control",minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,n.jsx)(l(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:t=>e.onChange(t),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control",maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},9069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var s=a(9950),l=a(56035),n=a(86781),r=a(68459),i=a(97937),o=a(86133),m=a(82612),h=a(63112),c=a(26473),d=a(60666),u=a(70030),w=a(9449),x=a(58445),j=a(27081),p=a(42074),b=a(88249),S=a(44414);const g=()=>{const{t:e}=(0,u.B)(),t=(0,c.t)(d.Ik().shape({title:d.Yj().required(e("Please select title")).min(10,"Atleast 10 char required")})),[a,o]=(0,s.useState)(""),[g,D]=(0,s.useState)(""),[v,C]=(0,s.useState)(!1),y=(0,j.wA)(),{register:A,handleSubmit:f,setValue:T,reset:N,formState:{errors:F}}=(0,w.mN)({defaultValues:{},resolver:t}),B=f((async e=>{C(!0),await y((0,x._y)(e)).unwrap().then((e=>{e&&!0===e.status&&(o(e.message),N()),C(!1)})).catch((e=>{D(e.message),C(!1)}))})),[I,k]=(0,s.useState)(new Date);return(0,S.jsxs)(S.Fragment,{children:[a&&(0,S.jsxs)("div",{className:"alert alert-success",children:[a,(0,S.jsx)(p.N_,{to:"/notice",children:" Back to Notice."})]}),g&&(0,S.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,S.jsx)(l.A,{children:(0,S.jsx)(l.A.Body,{children:(0,S.jsxs)(n.A,{children:[(0,S.jsx)(r.A,{lg:6,children:(0,S.jsxs)("form",{onSubmit:B,children:[(0,S.jsx)(m.Z,{label:"Title",type:"textarea",register:A,name:"title",errors:F,rows:"5",containerClass:"mb-3"},"title"),(0,S.jsx)(m.Z,{type:"hidden",register:A,name:"schedule_date",value:I.toISOString().split("T")[0]},"schedule_date"),(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsx)("label",{className:"form-label",children:"Schedule Date"})," ",(0,S.jsx)("br",{}),(0,S.jsx)(h.A,{value:I,minDate:new Date,showTimeSelect:!0,dateFormat:"MM-dd-yyyy HH:mm",onChange:e=>{k(e),T("schedule_date",e.toLocaleString("sv-SE"))}})]}),v?(0,S.jsx)(b.m,{}):(0,S.jsx)(i.A,{variant:"primary",type:"submit",children:"Publish"})]})}),(0,S.jsx)(r.A,{lg:6}),(0,S.jsx)(r.A,{lg:3})]})})})]})},D=()=>(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Bulletin Board",path:"/notice"},{label:"Post a Bulletin",path:"/notice/new",active:!0}],title:"Post a Bulletin"}),(0,S.jsx)(n.A,{children:(0,S.jsx)(r.A,{children:(0,S.jsx)(g,{})})})]})}}]);