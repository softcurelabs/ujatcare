"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8405],{98405:(e,a,r)=>{r.r(a),r.d(a,{default:()=>S});var s=r(47313),n=r(75627),t=r(65832),l=r(63849),i=r(31616),o=r(88178),d=r(87021),c=r(41709),m=r(93298),u=r(51450),h=r(93633),g=r(1084),x=r(58467),j=r(2135),p=r(33689),v=r(52487),b=r(14056),_=r.n(b),Z=r(62563),y=r(3463),f=r(5191),k=r(46417);const N=()=>{var e;const a=(0,Z.X)(y.Ry().shape({work_requested:y.Z_().required("Please select Work Requested"),tanent_name:y.Z_().required("Please enter tanent name"),phone:y.Z_().required("Please enter phone name"),ok_to_enter:y.Z_().required("Please select ok to enter"),tanent_signature:y.Z_().required().matches(/^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,"Signature must be png")})),[r,u]=(0,s.useState)(""),[b,N]=(0,s.useState)(""),[S,w]=(0,s.useState)();let{user:C,customerUser:D}=(0,g.v9)((e=>({user:e.Auth.user,customerUser:e.CustomerAuth.user})));C||(C=D);const L=(0,n.cI)({defaultValues:{},resolver:a}),{handleSubmit:T,register:q,setError:R,control:F,watch:O,setValue:P,reset:U,formState:{errors:I}}=L,A=(0,g.I0)();let E=(0,s.useRef)(null),M=(0,s.useRef)(null);const[W,G]=(0,s.useState)(new Date),[Y,B]=(0,s.useState)(new Date),[z,V]=(0,s.useState)(new Date);(0,s.useEffect)((()=>{A((0,p.fB)(C.user_id)).unwrap().then((e=>{w(e),A((0,h.JV)(J.id)).unwrap().then((e=>{var a,r;null!==e&&(P("id",e.id),P("tanent_name",null===e||void 0===e?void 0:e.tanent_name),P("work_requested",null===e||void 0===e?void 0:e.work_requested),P("tanent_signature",null===e||void 0===e?void 0:e.tanent_signature),null===(a=E.current)||void 0===a||a.fromDataURL(null===e||void 0===e?void 0:e.tanent_signature),M.current&&M.current.fromDataURL(null===e||void 0===e?void 0:e.service_signature),P("phone",null===e||void 0===e?void 0:e.phone),P("ok_to_enter",null===e||void 0===e?void 0:e.ok_to_enter.toString()),P("action_taken",null===e||void 0===e?void 0:e.action_taken.toString()),P("work_done",null===e||void 0===e?void 0:e.work_done),P("status",null===e||void 0===e?void 0:e.status.toString()),null!==e&&void 0!==e&&e.chargable&&P("chargable",null===e||void 0===e?void 0:e.chargable.toString()),null!==e&&void 0!==e&&e.action_date&&G(new Date(null===e||void 0===e?void 0:e.action_date)),null!==e&&void 0!==e&&e.time_in&&B(new Date("2024-12-12 "+(null===e||void 0===e?void 0:e.time_in))),null!==e&&void 0!==e&&e.time_out&&B(new Date("2024-12-12 "+(null===e||void 0===e?void 0:e.time_out))),M&&(null===(r=M.current)||void 0===r||r.off()))})).catch((e=>N(e)))}))}),[C.user_id]);const Q=T((async e=>{A((0,h.fb)(e)).unwrap().then((e=>{console.log(e),e&&!0===e.status?(u(e.message),N(""),window.scrollTo({top:0,behavior:"smooth"})):N(null===e||void 0===e?void 0:e.message)})).catch((e=>{for(var a in e.errors)try{R(a,{message:e.errors[a].toString()})}catch(r){}}))})),J=(0,x.UO)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(t.Z,{children:(0,k.jsxs)(t.Z.Body,{children:[r&&(0,k.jsxs)("div",{className:"alert alert-success",children:[r,(0,k.jsx)(j.rU,{to:"/maintanance",children:" Back to Maintanance."})]}),b&&(0,k.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:b}),S&&(0,k.jsxs)("form",{onSubmit:Q,children:[(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(i.Z,{lg:4,children:(0,k.jsxs)(o.Z.Group,{className:"mb-3",children:[(0,k.jsx)(o.Z.Label,{className:"me-2",children:"Building"}),(0,k.jsx)(o.Z.Label,{children:S.user.apartment_name}),(0,k.jsx)(v.y,{type:"hidden",name:"user_id",value:C.user_id,register:q}),(0,k.jsx)(v.y,{type:"hidden",name:"id",register:q})]})}),(0,k.jsx)(i.Z,{lg:3,children:(0,k.jsxs)(o.Z.Group,{className:"mb-3 input-group",children:[(0,k.jsx)(o.Z.Label,{htmlFor:"small",className:"me-2",children:"Apt"}),(0,k.jsx)(o.Z.Label,{children:S.user.flat_name}),(0,k.jsx)(v.y,{type:"hidden",name:"flat_id",value:null===(e=S.user.flat)||void 0===e?void 0:e.flat_id,register:q})]})})]}),(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(i.Z,{lg:4,children:(0,k.jsx)(v.y,{label:"Tanent Name",type:"text",register:q,name:"tanent_name",errors:I,className:"form-control-sm ",containerClass:"mb-3 input-group",labelClassName:"me-2",size:2},"tanent_name")}),(0,k.jsx)(i.Z,{lg:3,children:(0,k.jsx)(v.y,{label:"Phone",type:"text",register:q,name:"phone",errors:I,className:"form-control-sm",containerClass:"mb-3 input-group",labelClassName:"me-2",size:2},"phone")}),(0,k.jsx)(i.Z,{lg:5,children:(0,k.jsxs)(o.Z.Group,{className:"mb-3 input-group",children:[(0,k.jsx)(o.Z.Label,{htmlFor:"small",className:"me-2",children:"Ok to Enter"}),(0,k.jsx)(v.y,{type:"radio",className:"form-check-inline",name:"ok_to_enter",label:"Yes",value:"1",register:q}),(0,k.jsx)(v.y,{type:"radio",className:"form-check-inline",name:"ok_to_enter",label:"No",value:"2",register:q})]})})]}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:12,children:(0,k.jsx)(v.y,{type:"textarea",title:"Work Requested",name:"work_requested",placeholder:"Work Requested",className:"mb-3",register:q,errors:I,style:{height:"100px"}})})}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:12,children:(0,k.jsxs)(d.Z,{className:"mb-3",children:[(0,k.jsx)(c.Z,{className:"me-1 ",children:"Signature"}),(0,k.jsx)(n.Qr,{control:F,name:"tanent_signature",render:e=>{let{field:a}=e;return(0,k.jsx)(_(),{ref:E,onEnd:()=>a.onChange((()=>{if(E.current)return E.current.toDataURL()})()),penColor:"green",canvasProps:{width:500,height:50,style:{border:"1px solid green"}}})}}),(0,k.jsx)(v.y,{name:"tanent_signature",register:q,errors:I,className:"is-invalid",type:"hidden"}),I&&I.tanent_signature?(0,k.jsx)(o.Z.Control.Feedback,{type:"invalid",children:I.tanent_signature.message}):null]})})}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:12,children:(0,k.jsxs)(o.Z.Group,{className:"mb-3 input-group",children:[(0,k.jsx)(o.Z.Label,{htmlFor:"small",className:"me-2",children:"Action Taken"}),(0,k.jsx)(v.y,{type:"radio",className:"form-check-inline",name:"action_taken",register:q,value:1,disabled:!0,label:"Work Completed"}),(0,k.jsx)(v.y,{type:"radio",className:"form-check-inline",name:"action_taken",value:2,disabled:!0,register:q,label:"Repaired Temporarily"}),(0,k.jsx)(v.y,{type:"radio",className:"form-check-inline",name:"action_taken",register:q,value:3,disabled:!0,label:"Parts on Order"}),(0,k.jsx)(v.y,{type:"radio",className:"form-check-inline",name:"action_taken",register:q,value:4,disabled:!0,label:"Outside Contractor Called"})]})})}),(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(i.Z,{lg:4,children:(0,k.jsxs)(d.Z,{className:"input-group mb-3 ",children:[(0,k.jsx)(o.Z.Label,{htmlFor:"small",className:"me-2",children:"Date"}),(0,k.jsx)(v.y,{type:"hidden",register:q,name:"action_date",value:W.toISOString().split("T")[0]},"action_date"),(0,k.jsx)(f.Z,{hideAddon:!0,disabled:!0,value:W,showTimeSelect:!1,inputClass:"form-control-sm",dateFormat:"MM-DD-YYYY",onChange:e=>{G(e),P("action_date",e.toLocaleString("sv-SE"))}})]})}),(0,k.jsx)(i.Z,{lg:4,children:(0,k.jsxs)(d.Z,{className:"input-group mb-3 ",children:[(0,k.jsx)(o.Z.Label,{htmlFor:"small",className:"me-2",children:"Time In"}),(0,k.jsx)(v.y,{type:"hidden",register:q,name:"time_in"},"time_in"),(0,k.jsx)(f.Z,{value:Y,disabled:!0,showTimeSelect:!0,showTimeSelectOnly:!0,inputClass:"form-control-sm",onChange:e=>{B(e),P("time_in",Y.toLocaleTimeString("it-IT"))}})]})}),(0,k.jsx)(i.Z,{lg:4,children:(0,k.jsxs)(d.Z,{className:"input-group mb-3 ",children:[(0,k.jsx)(o.Z.Label,{htmlFor:"small",className:"me-2",children:"Time Out"}),(0,k.jsx)(v.y,{type:"hidden",register:q,name:"time_out"},"time_out"),(0,k.jsx)(f.Z,{value:z,disabled:!0,showTimeSelect:!0,showTimeSelectOnly:!0,inputClass:"form-control-sm",onChange:e=>{B(e),P("time_out",z.toLocaleTimeString("it-IT"))}})]})})]}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:12,children:(0,k.jsx)(v.y,{type:"textarea",title:"Work Done",name:"work_done",disabled:!0,placeholder:"Work Done",className:"mb-3",register:q,errors:I,style:{height:"125px"}})})}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:12,children:(0,k.jsxs)(d.Z,{className:"mb-3",children:[(0,k.jsx)(c.Z,{className:"me-1 ",children:"Service Person Signature"}),(0,k.jsx)(n.Qr,{control:F,name:"service_signature",render:e=>{let{field:a}=e;return(0,k.jsx)(_(),{ref:M,onEnd:()=>a.onChange((()=>{if(M.current)return M.current.toDataURL()})()),penColor:"green",canvasProps:{width:500,height:50,style:{border:"1px solid green"}}})}}),(0,k.jsx)(v.y,{name:"service_signature",register:q,errors:I,className:"is-invalid",type:"hidden"})]})})}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:12,children:(0,k.jsxs)(o.Z.Group,{className:"mb-3 input-group",children:[(0,k.jsx)(v.y,{type:"radio",name:"chargable",value:1,register:q,disabled:!0,label:"Chargable to Occupant",className:"form-check-inline"}),(0,k.jsx)(v.y,{type:"radio",name:"chargable",value:2,disabled:!0,register:q,label:"Management",className:"form-check-inline"})]})})}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{lg:3,children:(0,k.jsx)(m.Z,{variant:"primary",type:"submit",children:"Submit"})})})]})]})})})},S=()=>(0,k.jsxs)(s.Fragment,{children:[(0,k.jsx)(u.Z,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-1"},{label:"Maintanance Create",path:"/maintanance/create",active:!0}],title:"Maintanance Request"}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{children:(0,k.jsx)(N,{})})})]})}}]);