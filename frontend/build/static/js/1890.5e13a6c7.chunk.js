"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[1890,3379],{63112:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(72348),r=a.n(t),l=(a(4434),a(44414));const n=e=>(0,l.jsx)(l.Fragment,{children:e.showTimeSelectOnly?(0,l.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:s=>e.onChange(s),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"form-control",minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,l.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:s=>e.onChange(s),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control",maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},80730:(e,s,a)=>{a.d(s,{A:()=>d});var t=a(9950),r=a(42074),l=a(471),n=a(86781),i=a(68459),o=a(36275),c=a(44414);const m=e=>{const[s,a]=(0,t.useState)([]),m=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=s<0?0:s,t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.Ay,{...e,onDrop:t=>(t=>{var r=t;e.showPreview&&((t||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:m(e.size)}))),(r=s).push(...t),a(r)),e.onFileUpload&&e.onFileUpload(r)})(t),children:s=>{let{getRootProps:a,getInputProps:t}=s;return(0,c.jsx)("div",{className:"dropzone",children:(0,c.jsxs)("div",{className:"dz-message needsclick",...a(),children:[(0,c.jsx)("input",{...t()}),(0,c.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,c.jsx)("h4",{children:e.title?e.title:"Drop Image or Document here or click to upload."}),(0,c.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,c.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((t,o)=>(0,c.jsx)(l.A,{className:"mt-1 mb-0 shadow-none border",children:(0,c.jsx)("div",{className:"p-2",children:(0,c.jsxs)(n.A,{className:"align-items-center",children:[t.preview&&(0,c.jsx)(i.A,{className:"col-auto",children:(0,c.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:t.name,src:t.preview})}),!t.preview&&(0,c.jsx)(i.A,{className:"col-auto",children:(0,c.jsx)("div",{className:"avatar-sm",children:(0,c.jsx)("span",{className:"avatar-title bg-primary rounded",children:t.type.split("/")[0]})})}),(0,c.jsxs)(i.A,{className:"ps-0",children:[(0,c.jsx)(r.N_,{to:"#",className:"text-muted fw-bold",children:t.name}),(0,c.jsx)("p",{className:"mb-0",children:(0,c.jsx)("strong",{children:t.formattedSize})})]}),(0,c.jsx)(i.A,{className:"text-end",children:(0,c.jsx)(r.N_,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,c.jsx)("i",{className:"dripicons-cross",onClick:()=>(t=>{const r=[...s];r.splice(t,1),a(r),e.onFileUpload&&e.onFileUpload(r)})(o)})})})]})})},o+"-file")))})]})};m.defaultProps={showPreview:!0};const d=m},63758:(e,s,a)=>{a.d(s,{j:()=>A});var t=a(80730),r=a(90729),l=a(97937),n=a(68984),i=a(27081),o=a(70030),c=a(9950),m=a(26473),d=a(9449),u=a(80183),x=a(60666),h=a(91144),p=a(88249),b=a(471),j=a(86781),f=a(68459),g=a(42074),_=a(32393),v=a(44414);const N=e=>{let{documents:s,type:a,refresh:t}=e;const r=(0,i.wA)();return(0,v.jsx)(v.Fragment,{children:s.map((e=>e.type===a?(0,v.jsx)("div",{children:(0,v.jsx)(b.A,{className:"mt-1 mb-1 shadow-none border",children:(0,v.jsx)("div",{className:"p-2",children:(0,v.jsxs)(j.A,{className:"align-items-center",children:[(0,v.jsx)(f.A,{className:"ps-0 ms-2",children:(0,v.jsx)(g.N_,{to:"".concat(_.A.BASE_URL,"/").concat(e.document_path),className:"text-muted fw-bold",target:"_blank",children:e.document_name})}),(0,v.jsx)(f.A,{className:"text-end",children:(0,v.jsx)(g.N_,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,v.jsx)("i",{className:"dripicons-cross",onClick:()=>{r((0,u.Zt)(e.id)).unwrap().then((e=>{t()}))}})})})]})})},e.id+"-file")}):(0,v.jsx)(v.Fragment,{})))})},A=e=>{let{id:s}=e;const a=(0,i.wA)(),[b,j]=(0,c.useState)([]),{t:f}=(0,o.B)(),[g,_]=(0,c.useState)(""),[A,y]=(0,c.useState)(""),[w,C]=(0,c.useState)(!1),S=(0,m.t)(x.Ik().shape({}));(0,c.useEffect)((()=>{a((0,u.Tv)(s)).unwrap().then((e=>{console.log(e.user),j(e.user.documents)}))}),[]);const k=(0,c.useCallback)((()=>{a((0,u.Tv)(s)).unwrap().then((e=>{j(e.user.documents)}))}),[]),{register:F,handleSubmit:Z,setValue:D,setError:E,control:I,formState:{errors:B}}=(0,d.mN)({defaultValues:{user_id:s},resolver:S}),T=Z((e=>{C(!0),a((0,u.fp)(e)).unwrap().then((e=>{e&&!0===e.status&&(_(e.message),y(""),a((0,h.IM)())),C(!1)})).catch((e=>{y(e.message),_(""),C(!1)}))}));return(0,v.jsxs)("form",{onSubmit:T,children:[g&&(0,v.jsx)("div",{className:"alert alert-success",children:g}),A&&(0,v.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:A}),(0,v.jsxs)("fieldset",{children:[(0,v.jsx)(r.A,{children:"Licence"}),(0,v.jsx)(N,{documents:b,type:0,refresh:k}),(0,v.jsx)(d.xI,{render:()=>(0,v.jsx)(t.A,{maxFiles:2,title:"Drag or upload Licence",onFileUpload:e=>{D("licence",e)}}),name:"licence",control:I}),(0,v.jsx)(r.A,{children:"Passport"}),(0,v.jsx)(N,{documents:b,type:1,refresh:k}),(0,v.jsx)(d.xI,{render:()=>(0,v.jsx)(t.A,{maxFiles:2,title:"Upload passport",onFileUpload:e=>{D("passport",e)}}),name:"passport",control:I}),(0,v.jsx)(r.A,{children:"Other Documents"}),(0,v.jsx)(N,{documents:b,type:2,refresh:k}),(0,v.jsx)(d.xI,{render:()=>(0,v.jsx)(t.A,{maxFiles:2,title:"Drag or click Other documents",onFileUpload:e=>{D("other_document",e)}}),name:"other_document",control:I}),(0,v.jsx)(r.A,{children:"Document"}),(0,v.jsx)(N,{documents:b,type:3,refresh:k}),(0,v.jsx)(d.xI,{render:()=>(0,v.jsx)(t.A,{maxFiles:2,title:"Drag or click documents",onFileUpload:e=>{D("documents",e)}}),name:"documents",control:I}),(0,v.jsx)(n.Z,{type:"hidden",name:"user_id",register:F}),w?(0,v.jsx)(p.m,{}):(0,v.jsx)(l.A,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}},93379:(e,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(9950),r=a(9449),l=a(471),n=a(86781),i=a(68459),o=a(97937),c=a(86133),m=a(68984),d=a(28429),u=a(80183),x=a(27081),h=a(70030),p=a(26473),b=a(60666),j=a(19443),f=a(13236),g=a(98972),_=a(32393),v=a(88249),N=a(44414);const A=()=>{const e=(0,x.wA)(),{t:s}=(0,h.B)(),[a,c]=(0,t.useState)(""),[A,y]=(0,t.useState)(""),[w,C]=(0,t.useState)(!1),S=(0,p.t)(b.Ik().shape({}));let{user:k,customerUser:F}=(0,x.d4)((e=>({user:e.Auth.user,customerUser:e.CustomerAuth.user})));k||(k=F);const[Z,D]=(0,t.useState)(new Date),[E,I]=(0,t.useState)(!0),B=(0,d.Zp)(),[T,U]=(0,t.useState)(null),{register:P,handleSubmit:R,setValue:M,setError:L,formState:{errors:O}}=(0,r.mN)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,total_rent:123,language:"eng",special_instruction:null},resolver:S}),$=R((s=>{C(!0),e((0,u.el)(s)).unwrap().then((e=>{e&&!0===e.status&&(c(e.message),window.scrollTo({top:0,behavior:"smooth"})),C(!1)})).catch((e=>{for(var s in e.errors)try{L(s,{message:e.errors[s].toString()})}catch(a){}C(!1)}))}));return(0,t.useEffect)((()=>{e((0,j.qx)()).unwrap().then((()=>{e((0,u.Tv)(k.user_id)).unwrap().then((e=>{_.A.BASE_URL&&e.image_path&&U("".concat(_.A.BASE_URL,"/").concat(e.image_path)),M("id",e.user.id),M("unit",e.unit),M("name",e.user.name),M("email",e.user.email),M("phone_number",e.phone_number),e.user.flat&&M("flat_id",e.user.flat.flat_id),M("parking_space",e.parking_space),M("emergency_contact_number",e.emergency_contact_number),M("emergency_contact_name",e.emergency_contact_name),M("income_verification",e.income_verification),M("total_rent",e.total_rent),M("special_instruction",e.special_instruction),M("relationship",e.relationship),M("movein_date",e.movein_date)})).catch((e=>y(e.message)))}))}),[]),(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(l.A,{children:(0,N.jsxs)(l.A.Body,{children:[a&&(0,N.jsx)("div",{className:"alert alert-success",children:a}),A&&(0,N.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:A}),(0,N.jsxs)(n.A,{children:[(0,N.jsx)(i.A,{lg:6,children:(0,N.jsxs)("form",{onSubmit:$,className:E?"form-readonly":"",children:[(0,N.jsxs)("fieldset",{children:[(0,N.jsx)(m.Z,{label:"Name",type:"text",name:"name",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:P,errors:O},"name"),(0,N.jsx)(m.Z,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:P,errors:O},"phone_number"),(0,N.jsx)(m.Z,{label:"Email",type:"email",name:"email",placeholder:"Email",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:P,errors:O,disabled:!0},"email"),(0,N.jsxs)(m.Z,{type:"select",label:"Role",name:"role_id",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:P,errors:O,children:[(0,N.jsx)("option",{value:"",children:"Select Role"}),(0,N.jsx)("option",{value:"admin",selected:!0,children:"Super Admin"}),(0,N.jsx)("option",{value:"staff",children:"Staff"})]})]}),(0,N.jsx)(o.A,{onClick:()=>B(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),E?(0,N.jsx)("div",{}):w?(0,N.jsx)(v.m,{}):(0,N.jsx)(o.A,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,N.jsxs)(i.A,{lg:6,children:[(0,N.jsx)("div",{className:"text-center",children:T&&(0,N.jsx)("img",{src:T,className:"rounded-4",alt:"{}",width:125})}),(0,N.jsx)("div",{className:"text-end pb-2",children:E?(0,N.jsx)(o.A,{variant:"primary",type:"submit",onClick:()=>I(!1),children:"Edit"}):(0,N.jsx)("div",{})}),(0,N.jsx)("div",{children:(0,N.jsx)(g.t,{id:k.user_id})}),(0,N.jsx)("div",{className:"pt-2",children:(0,N.jsx)(f.R,{email:k.email})})]})]})]})})})},y=()=>(0,N.jsxs)(t.Fragment,{children:[(0,N.jsx)(c.A,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,N.jsx)(n.A,{children:(0,N.jsx)(i.A,{children:(0,N.jsx)(A,{})})})]})},11890:(e,s,a)=>{a.r(s),a.d(s,{default:()=>E});var t=a(27081),r=a(9950),l=a(9449),n=a(86781),i=a(68459),o=a(471),c=a(6863),m=a(83045),d=a(80409),u=a(64055),x=a(97937),h=a(86133),p=a(68984),b=a(63112),j=a(28429),f=a(80183),g=a(70030),_=a(26473),v=a(60666),N=a(19443),A=a(13236),y=a(98972),w=a(63758),C=a(32393),S=a(88249),k=a(44414);const F=()=>{const e=(0,t.wA)(),{t:s}=(0,g.B)(),[a,h]=(0,r.useState)(""),[F,Z]=(0,r.useState)(),[D,E]=(0,r.useState)(""),I=(0,_.t)(v.Ik().shape({}));let{flats:B,user:T,customerUser:U}=(0,t.d4)((e=>({flats:e.Flat.flats,user:e.Auth.user,customerUser:e.CustomerAuth.user})));const[P,R]=(0,r.useState)(null);T||(T=U);const[M,L]=(0,r.useState)(new Date),[O,$]=(0,r.useState)(new Date),[K,V]=(0,r.useState)(!0),[z,Y]=(0,r.useState)(!1),q=(0,j.Zp)(),{register:W,handleSubmit:G,setValue:J,setError:X,watch:H,formState:{errors:Q}}=(0,l.mN)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,total_rent:123,language:"eng",special_instruction:null},resolver:I}),ee=H("apartment_id"),se=G((s=>{Y(!0),e((0,f.el)(s)).unwrap().then((e=>{e&&!0===e.status&&(h(e.message),window.scrollTo({top:0,behavior:"smooth"})),Y(!1)})).catch((e=>{for(var s in e.errors)try{X(s,{message:e.errors[s].toString()})}catch(a){}Y(!1)}))}));return(0,r.useEffect)((()=>{e((0,N.qx)()).unwrap().then((()=>{e((0,f.Tv)(T.user_id)).unwrap().then((e=>{Z(e),C.A.BASE_URL&&e.image_path&&R("".concat(C.A.BASE_URL,"/").concat(e.image_path)),J("id",e.user.id),J("unit",e.unit),J("first_name",e.user.first_name),J("last_name",e.user.last_name),J("email",e.user.email),J("phone_number",e.phone_number),e.user.apartment_id&&J("apartment_id",e.user.apartment_id),e.user.flat&&J("flat_id",e.user.flat.flat_id),J("parking_space",e.parking_space),J("locker",e.locker),J("emergency_contact_number",e.emergency_contact_number),J("emergency_contact_name",e.emergency_contact_name),J("income_verification",e.income_verification),J("total_rent",e.total_rent),J("special_instruction",e.special_instruction),J("relationship",e.relationship),J("birth_date",e.birth_date),J("movein_date",e.movein_date),J("emergency_contact_email",e.emergency_contact_email),J("base_rent",e.base_rent),J("utilities",e.utilities),J("maintenance_fees",e.maintenance_fees),J("property_taxes",e.property_taxes),J("rental_insurance",e.rental_insurance),J("parking_fees",e.parking_fees),J("service_fees",e.service_fees),J("administrative_fees",e.administrative_fees),J("storage_fees",e.storage_fees),J("cable_fees",e.cable_fees),J("wifi",e.wifi),J("floor_plan",e.floor_plan),L(new Date(e.movein_date)),$(new Date(e.birth_date))})).catch((e=>E(e.message)))}))}),[]),(0,k.jsxs)(k.Fragment,{children:[a&&(0,k.jsx)("div",{className:"alert alert-success",children:a}),D&&(0,k.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:D}),(0,k.jsxs)(n.A,{className:"gutters",children:[(0,k.jsx)(i.A,{lg:3,xl:3,md:12,children:(0,k.jsxs)(o.A,{children:[" ",F&&(0,k.jsxs)(c.A,{children:[(0,k.jsxs)("div",{className:"text-center",children:[P&&(0,k.jsx)("img",{src:P,className:"rounded-4",alt:"{}",width:125}),(0,k.jsx)("h5",{className:"text-dark",children:null===F||void 0===F?void 0:F.user.name}),(0,k.jsx)("h6",{className:"text-muted",children:null===F||void 0===F?void 0:F.user.email})]}),(0,k.jsx)(y.t,{id:null===F||void 0===F?void 0:F.user.id.toString()}),(0,k.jsx)("div",{className:"mt-4",children:(0,k.jsx)(A.R,{email:null===F||void 0===F?void 0:F.user.email.toString()})}),(0,k.jsx)("div",{className:"mt-2",children:(0,k.jsx)(w.j,{id:null===F||void 0===F?void 0:F.user.id.toString()})})]})]})}),(0,k.jsx)(i.A,{lg:9,xl:9,md:12,children:(0,k.jsx)(o.A,{children:(0,k.jsx)(c.A,{children:(0,k.jsxs)("form",{onSubmit:se,children:[(0,k.jsxs)(m.A,{defaultActiveKey:"profile",id:"fill-tab-example",className:"mb-3",children:[(0,k.jsxs)(d.A,{eventKey:"profile",title:"Profile",children:[(0,k.jsxs)(n.A,{className:"gutters",children:[(0,k.jsx)(i.A,{xl:12,children:(0,k.jsx)("h5",{className:"text-primary",children:"Personal information"})}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"First Name",type:"text",name:"first_name",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:W,errors:Q,disabled:!0},"first_name")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Last Name",type:"text",name:"last_name",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:W,errors:Q,disabled:!0},"last_name")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q},"phone_number")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Email",type:"email",name:"email",placeholder:"Email",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:W,errors:Q,disabled:!0},"email")}),(0,k.jsxs)(i.A,{xl:6,children:[(0,k.jsx)(p.Z,{type:"hidden",register:W,className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"me-2",name:"birth_date"},"birth_date"),(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)("label",{className:"form-label",children:"Birth Date"})," ",(0,k.jsx)("br",{}),(0,k.jsx)(b.A,{hideAddon:!0,showTimeSelect:!1,maxDate:new Date,value:O,disabled:!0,onChange:e=>{$(e),J("birth_date",e.toLocaleString("sv-SE"))}}),Q&&Q.birth_date?(0,k.jsx)(u.A.Control.Feedback,{type:"invalid",children:Q.birth_date.message}):null]})]})]}),(0,k.jsxs)(n.A,{className:"gutters border border-success rounded mb-3",children:[(0,k.jsx)(i.A,{xl:12,children:(0,k.jsx)("h5",{className:"text-primary",children:"Emergency information"})}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Mobile Number",type:"text",name:"emergency_contact_number",placeholder:"Mobile Number",className:"form-control-sm fs-5",containerClass:"mb-3",register:W,errors:Q},"emergency_contact_number")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Emergency Contact Name",type:"text",name:"emergency_contact_name",placeholder:"Emergency Contact Name",className:"form-control-sm fs-5",containerClass:"mb-3 ",register:W,errors:Q},"emergency_contact_name")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Relationship",type:"text",name:"relationship",placeholder:"relationship",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q},"relationship")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Emergency Contact Email",type:"text",name:"emergency_contact_email",placeholder:"Email",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q},"emergency_contact_email")})]})]}),(0,k.jsx)(d.A,{eventKey:"rent",title:"Rents",children:(0,k.jsxs)(n.A,{className:"gutters",children:[(0,k.jsx)(i.A,{xl:12,children:(0,k.jsx)("h5",{className:"text-primary",children:"Tenant information"})}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Floorplan",type:"text",name:"floor_plan",placeholder:"Floorplan",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q,disabled:!0},"floor_plan")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{type:"select",label:"Property",name:"apartment_id",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q,disabled:!0,children:B.length&&B.map((e=>(0,k.jsx)("option",{value:e.id,children:e.name.toString()},"apartment".concat(e.id))))})}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{type:"select",label:"Suite",name:"flat_id",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q,disabled:!0,children:T&&B.length&&B.map((e=>ee==e.id?(0,k.jsx)(k.Fragment,{children:e.flats.map((e=>(0,k.jsx)("option",{value:e.id,disabled:e.has_occupied,children:e.name},"flat"+e.id)))}):(0,k.jsx)(k.Fragment,{})))})}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Parking Space",type:"text",name:"parking_space",placeholder:"Parking",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:W,errors:Q,disabled:!0},"parking_space")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Locker",type:"text",name:"locker",placeholder:"Locker",className:"form-control-sm fs-5",containerClass:"mb-3",register:W,errors:Q,disabled:!0},"locker")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Monthly Income",type:"text",name:"income_verification",placeholder:"Monthly Income",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,prefix:"$",errors:Q,disabled:!0},"income_verification")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Total Rent",type:"text",name:"total_rent",placeholder:"Rent",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"total_rent")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Language",type:"text",name:"language",placeholder:"Language",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q,disabled:!0},"language")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"FOB ID",type:"text",name:"fob",placeholder:"FOB",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:W,errors:Q,disabled:!0},"fob")}),(0,k.jsxs)(i.A,{xl:6,children:[(0,k.jsx)(p.Z,{type:"hidden",register:W,className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"me-2",name:"movein_date"},"movein_date"),(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)("label",{className:"form-label",children:"Move In Date"})," ",(0,k.jsx)("br",{}),(0,k.jsx)(b.A,{hideAddon:!0,showTimeSelect:!1,value:M,disabled:!0,onChange:e=>{(e=>{e&&L(e)})(e),J("movein_date",e.toLocaleString("sv-SE"))}}),Q&&Q.movein_date?(0,k.jsx)(u.A.Control.Feedback,{type:"invalid",children:Q.movein_date.message}):null]})]}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Base Rent",type:"text",name:"base_rent",placeholder:"Base Rent",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"base_rent")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Utilities",type:"text",name:"utilities",placeholder:"Utilities",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"utilities")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Maintenance Fees",type:"text",name:"maintenance_fees",placeholder:"Maintenance Fees",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"maintenance_fees")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Property Taxes",type:"text",name:"property_taxes",placeholder:"Property Taxes",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"property_taxes")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Rental Insurance",type:"text",name:"rental_insurance",placeholder:"Rental Insurance",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"rental_insurance")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Parking Fees",type:"text",name:"parking_fees",placeholder:"Parking Fees",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"parking_fees")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Service Fees",type:"text",name:"service_fees",placeholder:"Service Fees",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"service_fees")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Administrative Fees",type:"text",name:"administrative_fees",placeholder:"Administrative Fees",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"administrative_fees")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Storage Fees",type:"text",name:"storage_fees",placeholder:"Storage Fees",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"storage_fees")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Cable Fees",type:"text",name:"cable_fees",placeholder:"Cable Fees",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"cable_fees")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"WIFI",type:"text",name:"wifi",placeholder:"WIFI",className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"d-block w-100",register:W,errors:Q,prefix:"$",disabled:!0},"wifi")}),(0,k.jsx)(i.A,{xl:6,children:(0,k.jsx)(p.Z,{label:"Special information",type:"textarea",name:"special_instruction",rows:"5",disabled:!0,className:"form-control-sm fs-5 ",containerClass:"mb-3",register:W,errors:Q},"special_instruction")})]})})]}),(0,k.jsx)(x.A,{onClick:()=>q(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),z?(0,k.jsx)(S.m,{}):(0,k.jsx)(x.A,{variant:"primary",type:"submit",children:"Submit"})]})})})})]})]})},Z=()=>(0,k.jsxs)(r.Fragment,{children:[(0,k.jsx)(h.A,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,k.jsx)(n.A,{children:(0,k.jsx)(i.A,{children:(0,k.jsx)(F,{})})})]});var D=a(93379);const E=()=>{let{user:e,userCustomer:s}=(0,t.d4)((e=>({user:e.Auth.user,userCustomer:e.CustomerAuth.user})));return s&&(e=s),(0,k.jsx)(k.Fragment,{children:e&&(e.user_role.includes("recident")?(0,k.jsx)(Z,{}):(0,k.jsx)(D.default,{}))})}},13236:(e,s,a)=>{a.d(s,{R:()=>x});var t=a(97937),r=a(27081),l=a(70030),n=a(9950),i=a(26473),o=a(9449),c=a(60666),m=a(88249),d=a(91144),u=a(44414);const x=e=>{let{email:s}=e;const a=(0,r.wA)(),{t:x}=(0,l.B)(),[h,p]=(0,n.useState)(""),[b,j]=(0,n.useState)(""),[f,g]=(0,n.useState)(!1),_=(0,i.t)(c.Ik().shape({})),{register:v,handleSubmit:N,setError:A,formState:{errors:y}}=(0,o.mN)({defaultValues:{},resolver:_}),w=N((()=>{g(!0),a((0,d.Nu)(s)).unwrap().then((e=>{e&&!0===e.status&&p(e.message),g(!1)})).catch((e=>{j(e.message),g(!1)}))}));return console.log(s),(0,u.jsxs)("form",{onSubmit:w,children:[h&&(0,u.jsx)("div",{className:"alert alert-success",children:h}),b&&(0,u.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:b}),f?(0,u.jsx)(m.m,{}):(0,u.jsx)(t.A,{variant:"primary",type:"submit",children:"Reset Password"})]})}},98972:(e,s,a)=>{a.d(s,{t:()=>p});var t=a(80730),r=a(97937),l=a(68984),n=a(27081),i=a(9950),o=a(26473),c=a(9449),m=a(80183),d=a(60666),u=a(91144),x=a(88249),h=a(44414);const p=e=>{let{id:s}=e;const a=(0,n.wA)(),[p,b]=(0,i.useState)(""),[j,f]=(0,i.useState)(""),[g,_]=(0,i.useState)(!1),v=(0,o.t)(d.Ik().shape({})),{register:N,handleSubmit:A,setValue:y,control:w}=(0,c.mN)({defaultValues:{id:s},resolver:v}),C=A((e=>{_(!0),a((0,m.X$)(e)).unwrap().then((e=>{e&&!0===e.status&&(b(e.message),f(""),a((0,u.IM)())),_(!1)})).catch((e=>{f(e.message),b(""),_(!1)}))}));return(0,h.jsxs)("form",{onSubmit:C,children:[p&&(0,h.jsx)("div",{className:"alert alert-success",children:p}),j&&(0,h.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:j}),(0,h.jsxs)("fieldset",{className:"mt-4",children:[(0,h.jsx)(c.xI,{render:()=>(0,h.jsx)(t.A,{title:"Drag Profile pic or click here to upload",maxFiles:1,onFileUpload:e=>{y("image",e[0])}}),name:"image",control:w}),(0,h.jsx)(l.Z,{type:"hidden",name:"id",register:N}),g?(0,h.jsx)(x.m,{}):(0,h.jsx)(r.A,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}},83045:(e,s,a)=>{a.d(s,{A:()=>b});a(9950);var t=a(83529),r=a(41615),l=a(98361),n=a(76944),i=a(26743),o=a(5221),c=a(53960),m=a(22890),d=a(20262),u=a(44414);function x(e){let s;return(0,m.jJ)(e,(e=>{null==s&&(s=e.props.eventKey)})),s}function h(e){const{title:s,eventKey:a,disabled:t,tabClassName:r,tabAttrs:l,id:o}=e.props;return null==s?null:(0,u.jsx)(i.A,{as:"li",role:"presentation",children:(0,u.jsx)(n.A,{as:"button",type:"button",eventKey:a,disabled:t,id:o,className:r,...l,children:s})})}const p=e=>{const{id:s,onSelect:a,transition:n,mountOnEnter:i=!1,unmountOnExit:p=!1,variant:b="tabs",children:j,activeKey:f=x(j),...g}=(0,t.Zw)(e,{activeKey:"onSelect"});return(0,u.jsxs)(r.A,{id:s,activeKey:f,onSelect:a,transition:(0,d.A)(n),mountOnEnter:i,unmountOnExit:p,children:[(0,u.jsx)(l.A,{id:s,...g,role:"tablist",as:"ul",variant:b,children:(0,m.Tj)(j,h)}),(0,u.jsx)(o.A,{children:(0,m.Tj)(j,(e=>{const s={...e.props};return delete s.title,delete s.disabled,delete s.tabClassName,delete s.tabAttrs,(0,u.jsx)(c.A,{...s})}))})]})};p.displayName="Tabs";const b=p}}]);