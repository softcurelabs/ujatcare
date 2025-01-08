"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[5181],{63112:(e,s,t)=>{t.d(s,{A:()=>n});var a=t(72348),r=t.n(a),i=(t(4434),t(44414));const n=e=>(0,i.jsx)(i.Fragment,{children:e.showTimeSelectOnly?(0,i.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:s=>e.onChange(s),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"form-control",minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,i.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:s=>e.onChange(s),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control",maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},85181:(e,s,t)=>{t.r(s),t.d(s,{default:()=>N});var a=t(9950),r=t(56035),i=t(86781),n=t(68459),l=t(64055),o=t(90729),m=t(97937),c=t(86133),d=t(82612),h=t(63112),p=t(26473),u=t(60666),x=t(70030),j=t(9449),b=t(27081),g=t(42074),w=t(19443),y=t(80183),S=t(49462),f=t(88249),v=t(44414);const C=()=>{const{t:e}=(0,x.B)(),s=(0,p.t)(u.Ik().shape({title:u.Yj().required(e("Please select title")).min(10,"Atleast 10 char required")})),[t,c]=(0,a.useState)(!1),[C,N]=(0,a.useState)(""),[D,A]=(0,a.useState)(""),_=(0,b.wA)(),{flats:k,users:T}=(0,b.d4)((e=>({flats:e.Flat.flats,users:e.User.users})));(0,a.useEffect)((()=>{_((0,w.qx)()),_((0,y.mX)({page:1}))}),[]);const{register:I,handleSubmit:Z,setValue:F,reset:M,formState:{errors:O}}=(0,j.mN)({defaultValues:{},resolver:s}),Y=Z((async e=>{c(!0),await _((0,S.WD)(e)).unwrap().then((e=>{e&&!0===e.status&&(N(e.message),window.scrollTo({top:0,behavior:"smooth"})),c(!1)})).catch((e=>{for(var s in e.errors)try{setError(s,{message:e.errors[s].toString()})}catch(t){}c(!1)}))})),[q,B]=(0,a.useState)(new Date);return(0,v.jsxs)(v.Fragment,{children:[C&&(0,v.jsxs)("div",{className:"alert alert-success",children:[C,(0,v.jsx)(g.N_,{to:"/inspection",children:" Back to Inspection."})]}),D&&(0,v.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:D}),(0,v.jsx)(r.A,{children:(0,v.jsx)(r.A.Body,{children:(0,v.jsx)(i.A,{children:(0,v.jsx)(n.A,{lg:6,children:(0,v.jsxs)("form",{onSubmit:Y,children:[(0,v.jsx)(d.Z,{label:"Title",type:"text",register:I,name:"title",errors:O,containerClass:"mb-3"},"title"),(0,v.jsx)(d.Z,{label:"Description",type:"textarea",register:I,name:"description",errors:O,rows:"3",containerClass:"mb-3"},"description"),(0,v.jsx)(d.Z,{type:"hidden",register:I,name:"inspection_date",value:q.toISOString().split("T")[0]},"inspection_date"),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsx)("label",{className:"form-label",children:"Inspection Date"})," ",(0,v.jsx)("br",{}),(0,v.jsx)(h.A,{value:q,minDate:new Date,showTimeSelect:!0,dateFormat:"MM-dd-yyyy HH:mm",onChange:e=>{B(e),F("inspection_date",e.toLocaleString("sv-SE"))}})]}),(0,v.jsx)(i.A,{children:(0,v.jsxs)(l.A.Group,{className:"mb-3 input-group",children:[(0,v.jsx)(o.A,{className:"me-2",children:"Priority"}),(0,v.jsx)(d.Z,{type:"radio",className:"form-check-inline",name:"priority",label:"Low",value:1,checked:!0,register:I,id:"priorty_low"},"priorty_low"),(0,v.jsx)(d.Z,{type:"radio",className:"form-check-inline",name:"priority",label:"Medium",value:2,register:I,id:"priorty_medium"},"priorty_medium"),(0,v.jsx)(d.Z,{type:"radio",className:"form-check-inline",name:"priority",label:"High",value:3,register:I,id:"priorty_high"},"priorty_high")]})}),(0,v.jsxs)(i.A,{children:[(0,v.jsxs)(l.A.Group,{className:"mb-3 input-group",children:[(0,v.jsx)(o.A,{className:"me-2",children:"Status"}),(0,v.jsx)(d.Z,{type:"radio",className:"form-check-inline",name:"status",label:"Open",value:1,checked:!0,id:"status_open",register:I},"status_open"),(0,v.jsx)(d.Z,{type:"radio",className:"form-check-inline",name:"status",label:"In Progress",value:2,id:"status_progress",register:I},"status_progress"),(0,v.jsx)(d.Z,{type:"radio",className:"form-check-inline",name:"status",label:"Close",value:3,id:"status_close",register:I},"status_close")]}),(0,v.jsx)(d.Z,{type:"select",label:"Suite",name:"flat_id",containerClass:"mb-3 ",register:I,errors:O,children:k.length&&k.map((e=>(0,v.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,v.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},`apartment${e.id}`)))}),(0,v.jsx)(d.Z,{type:"select",label:"Assign To",name:"inspection_by",containerClass:"mb-3 ",register:I,errors:O,children:T?T.data.length&&T.data.map((e=>(0,v.jsxs)("option",{value:e.user.id.toString(),children:[e.user.name," - ",e.user.role]},"user"+e.user.id))):(0,v.jsx)("option",{})}),(0,v.jsx)(d.Z,{label:"Notes",type:"textarea",register:I,name:"notes",errors:O,rows:"3",containerClass:"mb-3"},"notes")]}),t?(0,v.jsx)(f.m,{}):(0,v.jsx)(m.A,{variant:"primary",type:"submit",children:"Create"})]})})})})})]})},N=()=>(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)(c.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Maintanance Inspections",path:"/inspection"},{label:"Maintanance Inspection",path:"/inspection/new",active:!0}],title:"Maintanance Inspection"}),(0,v.jsx)(i.A,{children:(0,v.jsx)(n.A,{children:(0,v.jsx)(C,{})})})]})}}]);