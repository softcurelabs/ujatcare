"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[550],{63112:(e,a,s)=>{s.d(a,{A:()=>t});var l=s(72348),r=s.n(l),n=(s(4434),s(44414));const t=e=>(0,n.jsx)(n.Fragment,{children:e.showTimeSelectOnly?(0,n.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"form-control "+e.inputClass,minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,n.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control "+e.inputClass,maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},41033:(e,a,s)=>{s.d(a,{A:()=>i});s(9950);var l=s(86781),r=s(68459),n=s(81924),t=s(44414);const i=e=>(0,t.jsx)(l.A,{children:(0,t.jsx)(r.A,{children:(0,t.jsxs)("div",{className:"page-title-box",children:[(0,t.jsx)("div",{children:(0,t.jsxs)(n.A,{className:"m-0 mb-0",children:[(0,t.jsx)(n.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,t.jsx)(n.A.Item,{active:!0,children:e.label},a):(0,t.jsx)(n.A.Item,{href:e.path,children:e.label},a)))]})}),(0,t.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,a,s)=>{s.d(a,{Z:()=>h,z:()=>t});var l=s(9950),r=s(9449),n=s(44414);const t=e=>{let{defaultValues:a,resolver:s,children:t,onSubmit:i,formClass:o}=e;const d=(0,r.mN)({defaultValues:a,resolver:s}),{handleSubmit:c,register:m,control:h,formState:{errors:u}}=d;return(0,n.jsx)("form",{onSubmit:c(i),className:o,noValidate:!0,children:Array.isArray(t)?t.map((e=>e.props&&e.props.name?l.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:u,control:h}}):e)):t})};var i=s(75623),o=s(64055),d=s(48738),c=s.n(d);const m=e=>{let{name:a,placeholder:s,refCallback:r,errors:t,control:d,register:m,className:h}=e;const[u,p]=(0,l.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.A,{className:"mb-0",children:[(0,n.jsx)(o.A.Control,{type:u?"text":"password",placeholder:s,name:a,id:a,as:"input",ref:e=>{r&&r(e)},className:h,isInvalid:!(!t||!t[a]),...m?m(a):{},autoComplete:a}),(0,n.jsx)("div",{className:c()("input-group-text","input-group-password",{"show-password":u}),"data-password":u?"true":"false",children:(0,n.jsx)("span",{className:"password-eye",onClick:()=>{p(!u)}})})]})})},h=e=>{let{label:a,type:s,name:l,placeholder:r,register:t,errors:i,control:d,className:c,labelClassName:h,containerClass:u,refCallback:p,children:x,rows:j,symbol:g,...b}=e;const v="textarea"===s?"textarea":"select"===s?"select":"input";return(0,n.jsx)(n.Fragment,{children:"hidden"===s?(0,n.jsx)("input",{type:s,name:l,id:l,...t?t(l):{},...b,className:c}):(0,n.jsx)(n.Fragment,{children:"password"===s?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A.Group,{className:u,children:[a?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(o.A.Label,{className:h,children:a})," ",x," "]}):null,(0,n.jsx)(m,{name:l,placeholder:r,refCallback:p,errors:i,register:t,className:c}),i&&i[l]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",className:"d-block",children:i[l].message}):null]})}):(0,n.jsx)(n.Fragment,{children:"checkbox"===s||"radio"===s?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A.Group,{className:u,children:[(0,n.jsx)(o.A.Check,{type:s,label:a,name:l,id:l,ref:e=>{p&&p(e)},className:c,isInvalid:!(!i||!i[l]),...t?t(l):{},...b}),i&&i[l]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",children:i[l].message}):null]})}):(0,n.jsxs)(o.A.Group,{className:u,children:[a?(0,n.jsx)(o.A.Label,{className:h,children:a}):null,g?(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("span",{className:"input-group-text",id:l,children:g}),(0,n.jsx)(o.A.Control,{type:s,placeholder:r,name:l,id:l,as:v,ref:e=>{p&&p(e)},className:c,isInvalid:!(!i||!i[l]),...t?t(l):{},rows:j,...b,autoComplete:l,children:x||null})]}):(0,n.jsx)(o.A.Control,{type:s,placeholder:r,name:l,id:l,as:v,ref:e=>{p&&p(e)},className:c,isInvalid:!(!i||!i[l]),...t?t(l):{},rows:j,...b,autoComplete:l,children:x||null}),i&&i[l]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",children:i[l].message}):null]})})})})}},90550:(e,a,s)=>{s.r(a),s.d(a,{default:()=>C});var l=s(9950),r=s(9449),n=s(471),t=s(86781),i=s(68459),o=s(64055),d=s(584),c=s(90729),m=s(41033),h=s(13059),u=s(27081),p=s(28429),x=s(42074),j=s(80183),g=s(68984),b=s(44051),v=s.n(b),A=s(26473),N=s(60666),f=s(63112),_=s(44414);const w=()=>{var e;const a=(0,A.t)(N.Ik().shape({work_requested:N.Yj().required("Please select Work Requested"),tanent_name:N.Yj().required("Please enter tanent name"),phone:N.Yj().required("Please enter phone name"),ok_to_enter:N.Yj().required("Please select ok to enter"),tanent_signature:N.Yj().required().matches(/^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,"Signature must be png")})),[s,m]=(0,l.useState)(""),[b,w]=(0,l.useState)(""),[C,y]=(0,l.useState)(!1),[k,S]=(0,l.useState)();let{user:D,customerUser:F}=(0,u.d4)((e=>({user:e.Auth.user,customerUser:e.CustomerAuth.user})));D||(D=F);const T=(0,r.mN)({defaultValues:{},resolver:a}),{handleSubmit:Z,register:I,setError:L,control:q,setValue:O,formState:{errors:R}}=T,Y=(0,u.wA)();let M=(0,l.useRef)(null),P=(0,l.useRef)(null);const[G,E]=(0,l.useState)(new Date),[U,W]=(0,l.useState)(new Date),[V,z]=(0,l.useState)(new Date);(0,l.useEffect)((()=>{Y((0,j.Tv)(D.user_id)).unwrap().then((e=>{S(e),Y((0,h.Xs)(H.id)).unwrap().then((e=>{var a;if(null!==e){var s,l;if(O("id",e.id),O("tanent_name",null===e||void 0===e?void 0:e.tanent_name),O("work_requested",null===e||void 0===e?void 0:e.work_requested),O("tanent_signature",null===e||void 0===e?void 0:e.tanent_signature),null===(a=M.current)||void 0===a||a.fromDataURL(null===e||void 0===e?void 0:e.tanent_signature),P.current&&P.current.fromDataURL(null===e||void 0===e?void 0:e.service_signature),O("phone",null===e||void 0===e?void 0:e.phone),O("ok_to_enter",null===e||void 0===e?void 0:e.ok_to_enter.toString()),null!==e&&void 0!==e&&e.action_taken&&O("action_taken",null===e||void 0===e?void 0:e.action_taken.toString()),O("work_done",null===e||void 0===e?void 0:e.work_done),O("status",null===e||void 0===e?void 0:e.status.toString()),null!==e&&void 0!==e&&e.chargable&&O("chargable",null===e||void 0===e?void 0:e.chargable.toString()),null!==e&&void 0!==e&&e.action_date&&E(new Date(null===e||void 0===e?void 0:e.action_date)),null!==e&&void 0!==e&&e.time_in&&W(new Date("2024-12-12 "+(null===e||void 0===e?void 0:e.time_in))),null!==e&&void 0!==e&&e.time_out&&W(new Date("2024-12-12 "+(null===e||void 0===e?void 0:e.time_out))),P)null===(s=P.current)||void 0===s||s.off();if(M)null===(l=M.current)||void 0===l||l.off()}})).catch((e=>w(e)))}))}),[D.user_id]);const B=Z((async e=>{y(!0),Y((0,h.ag)(e)).unwrap().then((e=>{e&&!0===e.status?(m(e.message),w(""),window.scrollTo({top:0,behavior:"smooth"})):w(null===e||void 0===e?void 0:e.message),y(!1)})).catch((e=>{for(var a in e.errors)try{L(a,{message:e.errors[a].toString()})}catch(s){}y(!1)}))})),H=(0,p.g)();return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(n.A,{children:(0,_.jsxs)(n.A.Body,{children:[s&&(0,_.jsxs)("div",{className:"alert alert-success",children:[s,(0,_.jsx)(x.N_,{to:"/maintanance",children:" Back to Maintanance."})]}),b&&(0,_.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:b}),k&&(0,_.jsxs)("form",{onSubmit:B,children:[(0,_.jsxs)(t.A,{children:[(0,_.jsx)(i.A,{lg:4,children:(0,_.jsxs)(o.A.Group,{className:"mb-3",children:[(0,_.jsx)(o.A.Label,{className:"me-2",children:"Building"}),(0,_.jsx)(o.A.Label,{children:k.user.apartment_name}),(0,_.jsx)(g.Z,{type:"hidden",name:"user_id",value:D.user_id,register:I}),(0,_.jsx)(g.Z,{type:"hidden",name:"id",register:I})]})}),(0,_.jsx)(i.A,{lg:3,children:(0,_.jsxs)(o.A.Group,{className:"mb-3 input-group",children:[(0,_.jsx)(o.A.Label,{htmlFor:"small",className:"me-2",children:"Apt"}),(0,_.jsx)(o.A.Label,{children:k.user.flat_name}),(0,_.jsx)(g.Z,{type:"hidden",name:"flat_id",value:null===(e=k.user.flat)||void 0===e?void 0:e.flat_id,register:I})]})})]}),(0,_.jsxs)(t.A,{children:[(0,_.jsx)(i.A,{lg:4,children:(0,_.jsx)(g.Z,{label:"Tanent Name",type:"text",register:I,name:"tanent_name",disabled:!0,errors:R,className:"form-control-sm ",containerClass:"mb-3 input-group",labelClassName:"me-2",size:2},"tanent_name")}),(0,_.jsx)(i.A,{lg:3,children:(0,_.jsx)(g.Z,{label:"Phone",type:"text",register:I,name:"phone",disabled:!0,errors:R,className:"form-control-sm",containerClass:"mb-3 input-group",labelClassName:"me-2",size:2},"phone")}),(0,_.jsx)(i.A,{lg:5,children:(0,_.jsxs)(o.A.Group,{className:"mb-3 input-group",children:[(0,_.jsx)(o.A.Label,{htmlFor:"small",className:"me-2",children:"Ok to Enter"}),(0,_.jsx)(g.Z,{type:"radio",className:"form-check-inline",name:"ok_to_enter",disabled:!0,label:"Yes",value:"1",register:I}),(0,_.jsx)(g.Z,{type:"radio",className:"form-check-inline",name:"ok_to_enter",disabled:!0,label:"No",value:"2",register:I})]})})]}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:12,children:(0,_.jsx)(g.Z,{type:"textarea",title:"Work Requested",name:"work_requested",placeholder:"Work Requested",className:"mb-3",disabled:!0,register:I,errors:R,style:{height:"100px"}})})}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:12,children:(0,_.jsxs)(d.A,{className:"mb-3",children:[(0,_.jsx)(c.A,{className:"me-1 ",children:"Signature"}),(0,_.jsx)(r.xI,{control:q,name:"tanent_signature",render:e=>{let{field:a}=e;return(0,_.jsx)(v(),{ref:M,onEnd:()=>a.onChange((()=>{if(M.current)return M.current.toDataURL()})()),penColor:"green",canvasProps:{width:500,height:50,style:{border:"1px solid green"}}})}}),(0,_.jsx)(g.Z,{name:"tanent_signature",register:I,errors:R,className:"is-invalid",type:"hidden"}),R&&R.tanent_signature?(0,_.jsx)(o.A.Control.Feedback,{type:"invalid",children:R.tanent_signature.message}):null]})})}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:12,children:(0,_.jsxs)(o.A.Group,{className:"mb-3 input-group",children:[(0,_.jsx)(o.A.Label,{htmlFor:"small",className:"me-2",children:"Action Taken"}),(0,_.jsx)(g.Z,{type:"radio",className:"form-check-inline",name:"action_taken",register:I,value:1,disabled:!0,label:"Work Completed"}),(0,_.jsx)(g.Z,{type:"radio",className:"form-check-inline",name:"action_taken",value:2,disabled:!0,register:I,label:"Repaired Temporarily"}),(0,_.jsx)(g.Z,{type:"radio",className:"form-check-inline",name:"action_taken",register:I,value:3,disabled:!0,label:"Parts on Order"}),(0,_.jsx)(g.Z,{type:"radio",className:"form-check-inline",name:"action_taken",register:I,value:4,disabled:!0,label:"Outside Contractor Called"})]})})}),(0,_.jsxs)(t.A,{children:[(0,_.jsx)(i.A,{lg:4,children:(0,_.jsxs)(d.A,{className:"input-group mb-3 ",children:[(0,_.jsx)(o.A.Label,{htmlFor:"small",className:"me-2",children:"Date"}),(0,_.jsx)(g.Z,{type:"hidden",register:I,name:"action_date",value:G.toISOString().split("T")[0]},"action_date"),(0,_.jsx)(f.A,{hideAddon:!0,disabled:!0,value:G,showTimeSelect:!1,inputClass:"form-control-sm",dateFormat:"MM-dd-yyyy",onChange:e=>{E(e),O("action_date",e.toLocaleString("sv-SE"))}})]})}),(0,_.jsx)(i.A,{lg:4,children:(0,_.jsxs)(d.A,{className:"input-group mb-3 ",children:[(0,_.jsx)(o.A.Label,{htmlFor:"small",className:"me-2",children:"Time In"}),(0,_.jsx)(g.Z,{type:"hidden",register:I,name:"time_in"},"time_in"),(0,_.jsx)(f.A,{value:U,disabled:!0,showTimeSelect:!0,showTimeSelectOnly:!0,inputClass:"form-control-sm",onChange:e=>{W(e),O("time_in",U.toLocaleTimeString("it-IT"))}})]})}),(0,_.jsx)(i.A,{lg:4,children:(0,_.jsxs)(d.A,{className:"input-group mb-3 ",children:[(0,_.jsx)(o.A.Label,{htmlFor:"small",className:"me-2",children:"Time Out"}),(0,_.jsx)(g.Z,{type:"hidden",register:I,name:"time_out"},"time_out"),(0,_.jsx)(f.A,{value:V,disabled:!0,showTimeSelect:!0,showTimeSelectOnly:!0,inputClass:"form-control-sm",onChange:e=>{W(e),O("time_out",V.toLocaleTimeString("it-IT"))}})]})})]}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:12,children:(0,_.jsx)(g.Z,{type:"textarea",title:"Work Done",name:"work_done",disabled:!0,placeholder:"Work Done",className:"mb-3",register:I,errors:R,style:{height:"125px"}})})}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:12,children:(0,_.jsxs)(d.A,{className:"mb-3",children:[(0,_.jsx)(c.A,{className:"me-1 ",children:"Service Person Signature"}),(0,_.jsx)(r.xI,{control:q,name:"service_signature",render:e=>{let{field:a}=e;return(0,_.jsx)(v(),{ref:P,onEnd:()=>a.onChange((()=>{if(P.current)return P.current.toDataURL()})()),penColor:"green",canvasProps:{width:500,height:50,style:{border:"1px solid green"}}})}}),(0,_.jsx)(g.Z,{name:"service_signature",register:I,errors:R,className:"is-invalid",type:"hidden"})]})})}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:12,children:(0,_.jsxs)(o.A.Group,{className:"mb-3 input-group",children:[(0,_.jsx)(g.Z,{type:"radio",name:"chargable",value:1,register:I,disabled:!0,label:"Chargable to Occupant",className:"form-check-inline"}),(0,_.jsx)(g.Z,{type:"radio",name:"chargable",value:2,disabled:!0,register:I,label:"Management",className:"form-check-inline"})]})})}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{lg:3})})]})]})})})},C=()=>(0,_.jsxs)(l.Fragment,{children:[(0,_.jsx)(m.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-1"},{label:"Maintanance Create",path:"/maintanance/create",active:!0}],title:"Maintanance Request"}),(0,_.jsx)(t.A,{children:(0,_.jsx)(i.A,{children:(0,_.jsx)(w,{})})})]})}}]);