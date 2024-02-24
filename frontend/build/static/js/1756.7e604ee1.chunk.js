"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[1756],{95251:(e,s,a)=>{a.d(s,{Z:()=>d});var r=a(47313),t=a(2135),n=a(65832),l=a(63849),i=a(31616),c=a(80614),o=a(46417);const m=e=>{const[s,a]=(0,r.useState)([]),m=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=s<0?0:s,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ZP,{...e,onDrop:s=>(s=>{var r=s;e.showPreview&&((s||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:m(e.size)}))),(r=[]).push(...s),a(r)),e.onFileUpload&&e.onFileUpload(r)})(s),children:e=>{let{getRootProps:s,getInputProps:a}=e;return(0,o.jsx)("div",{className:"dropzone",children:(0,o.jsxs)("div",{className:"dz-message needsclick",...s(),children:[(0,o.jsx)("input",{...a()}),(0,o.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,o.jsx)("h4",{children:"Drop Image here or click to upload."}),(0,o.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,o.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((r,c)=>(0,o.jsx)(n.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,o.jsx)("div",{className:"p-2",children:(0,o.jsxs)(l.Z,{className:"align-items-center",children:[r.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:r.name,src:r.preview})}),!r.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("div",{className:"avatar-sm",children:(0,o.jsx)("span",{className:"avatar-title bg-primary rounded",children:r.type.split("/")[0]})})}),(0,o.jsxs)(i.Z,{className:"ps-0",children:[(0,o.jsx)(t.rU,{to:"#",className:"text-muted fw-bold",children:r.name}),(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("strong",{children:r.formattedSize})})]}),(0,o.jsx)(i.Z,{className:"text-end",children:(0,o.jsx)(t.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,o.jsx)("i",{className:"dripicons-cross",onClick:()=>(r=>{const t=[...s];t.splice(r,1),a(t),e.onFileUpload&&e.onFileUpload(t)})(c)})})})]})})},c+"-file")))})]})};m.defaultProps={showPreview:!0};const d=m},21756:(e,s,a)=>{a.r(s),a.d(s,{default:()=>C});var r=a(47313),t=a(75627),n=a(65832),l=a(63849),i=a(31616),c=a(93298),o=a(51450),m=a(52487),d=a(5191),u=a(58467),h=a(33689),p=a(1084),x=a(24511),j=a(62563),g=a(3463),b=a(20253),y=a(16752),v=a(53877),f=a(95251),_=a(41709),N=a(61875),S=a(46417);const w=e=>{let{id:s}=e;(0,p.I0)();const{t:a}=(0,x.$)(),[n,l]=(0,r.useState)(""),[i,o]=(0,r.useState)(""),[d,u]=(0,r.useState)(!1),h=(0,j.X)(g.Ry().shape({})),{register:b,handleSubmit:y,setValue:v,setError:w,control:Z,formState:{errors:C}}=(0,t.cI)({defaultValues:{id:s},resolver:h}),U=y((e=>{}));return(0,S.jsxs)("form",{onSubmit:U,children:[n&&(0,S.jsx)("div",{className:"alert alert-success",children:n}),i&&(0,S.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:i}),(0,S.jsxs)("fieldset",{children:[(0,S.jsx)(_.Z,{children:"Licence"}),(0,S.jsx)(t.Qr,{render:()=>(0,S.jsx)(f.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),v("image",e[0])}}),name:"image",control:Z}),(0,S.jsx)(_.Z,{children:"Passport"}),(0,S.jsx)(t.Qr,{render:()=>(0,S.jsx)(f.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),v("image",e[0])}}),name:"image",control:Z}),(0,S.jsx)(_.Z,{children:"Other Documents"}),(0,S.jsx)(t.Qr,{render:()=>(0,S.jsx)(f.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),v("image",e[0])}}),name:"image",control:Z}),(0,S.jsx)(_.Z,{children:"Document"}),(0,S.jsx)(t.Qr,{render:()=>(0,S.jsx)(f.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),v("image",e[0])}}),name:"image",control:Z}),(0,S.jsx)(m.y,{type:"hidden",name:"id",register:b}),d?(0,S.jsx)(N.Z,{}):(0,S.jsx)(c.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})},Z=()=>{const e=(0,p.I0)(),{t:s}=(0,x.$)(),[a,o]=(0,r.useState)(""),[f,_]=(0,r.useState)(""),N=(0,j.X)(g.Ry().shape({}));let{flats:Z,user:C,customerUser:U}=(0,p.v9)((e=>({flats:e.Flat.flats,user:e.Auth.user,customerUser:e.CustomerAuth.user})));C||(C=U);const[F,k]=(0,r.useState)(new Date),[B,E]=(0,r.useState)(!0),P=(0,u.s0)(),{register:I,handleSubmit:R,setValue:z,setError:M,formState:{errors:V}}=(0,t.cI)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,rent_calculation:123,language:"eng",special_instruction:null},resolver:N}),A=R((s=>{e((0,h.yT)(s)).unwrap().then((e=>{e&&!0===e.status&&(o(e.message),window.scrollTo({top:0,behavior:"smooth"}))})).catch((e=>{for(var s in e.errors)try{M(s,{message:e.errors[s].toString()})}catch(a){}}))}));return(0,r.useEffect)((()=>{e((0,b.i)()).unwrap().then((()=>{e((0,h.fB)(C.user_id)).unwrap().then((e=>{z("id",e.user.id),z("unit",e.unit),z("name",e.user.name),z("email",e.user.email),z("phone_number",e.phone_number),e.user.flat&&z("flat_id",e.user.flat.flat_id),z("parking_space",e.parking_space),z("emergency_contact_number",e.emergency_contact_number),z("emergency_contact_name",e.emergency_contact_name),z("income_verification",e.income_verification),z("rent_calculation",e.rent_calculation),z("special_instruction",e.special_instruction),z("relationship",e.relationship),z("movein_date",e.movein_date)})).catch((e=>_(e.message)))}))}),[]),(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(n.Z,{children:(0,S.jsxs)(n.Z.Body,{children:[a&&(0,S.jsx)("div",{className:"alert alert-success",children:a}),f&&(0,S.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:f}),(0,S.jsxs)(l.Z,{children:[(0,S.jsx)(i.Z,{lg:6,children:(0,S.jsxs)("form",{onSubmit:A,className:B?"form-readonly":"",children:[(0,S.jsxs)("fieldset",{children:[(0,S.jsx)(m.y,{label:"Name",type:"text",name:"name",containerClass:"mb-3",register:I,errors:V},"name"),(0,S.jsx)(m.y,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",containerClass:"mb-3",register:I,errors:V},"phone_number"),(0,S.jsx)(m.y,{label:"Email",type:"email",name:"email",placeholder:"Email",containerClass:"mb-3",register:I,errors:V,disabled:!0},"email"),(0,S.jsx)(m.y,{label:"Unit",type:"text",name:"unit",placeholder:"Unit",containerClass:"mb-3",register:I,errors:V},"unit"),(0,S.jsx)(m.y,{label:"Parking Space",type:"text",name:"parking",placeholder:"Parking",containerClass:"mb-3",register:I,errors:V},"parking"),(0,S.jsx)(m.y,{label:"Language",type:"text",name:"language",placeholder:"Language",containerClass:"mb-3",register:I,errors:V},"language"),(0,S.jsxs)("div",{className:"border border-success rounded",children:[(0,S.jsx)(m.y,{label:"Emergency Contact",type:"text",name:"emergency_contact_number",placeholder:"Emergency Contact Number",containerClass:"mb-3",register:I,errors:V},"emergency_contact_number"),(0,S.jsx)(m.y,{label:"Emergency Contact Name",type:"text",name:"emergency_contact_name",placeholder:"Emergency Contact Name",containerClass:"mb-3",register:I,errors:V},"emergency_contact_name"),(0,S.jsx)(m.y,{label:"Relationship",type:"text",name:"relationship",placeholder:"relationship",containerClass:"mb-3",register:I,errors:V},"relationship")]}),(0,S.jsx)(m.y,{type:"select",label:"Apartment#",name:"flat_id",containerClass:"mb-3",register:I,disabled:!0,errors:V,children:Z.length&&Z.map((e=>(0,S.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,S.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))}),(0,S.jsx)(m.y,{label:"Income Verification",type:"text",name:"income_verification",placeholder:"Contact",containerClass:"mb-3",register:I,errors:V},"income_verification"),(0,S.jsx)(m.y,{label:"Rent Calculation",type:"text",name:"rent_calculation",placeholder:"Rent",containerClass:"mb-3",register:I,errors:V},"rent_calculation"),(0,S.jsx)(m.y,{label:"Special information",type:"textarea",name:"special_instruction",rows:"5",containerClass:"mb-3",register:I,errors:V},"special_instruction"),(0,S.jsx)(m.y,{type:"hidden",register:I,name:"movein_date"},"movein_date"),(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsx)("label",{className:"form-label",children:"Move In Date"})," ",(0,S.jsx)("br",{}),(0,S.jsx)(d.Z,{hideAddon:!0,showTimeSelect:!1,value:F,onChange:e=>{(e=>{e&&k(e)})(e),z("movein_date",e.toLocaleString("sv-SE"))}})]}),(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsx)("label",{className:"form-label",children:"Birth Date"})," ",(0,S.jsx)("br",{}),(0,S.jsx)(d.Z,{hideAddon:!0,showTimeSelect:!1,showTimeSelectOnly:!1,value:F,onChange:e=>{}})]}),C.user_role.includes("admin")&&(0,S.jsx)(m.y,{label:"Staff Note",type:"textarea",name:"staff_notes",rows:"5",containerClass:"mb-3",register:I,errors:V},"staff_notes")]}),(0,S.jsx)(c.Z,{onClick:()=>P(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),B?(0,S.jsx)("div",{}):(0,S.jsx)(c.Z,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,S.jsxs)(i.Z,{lg:6,children:[(0,S.jsx)("div",{className:"text-end pb-2",children:B?(0,S.jsx)(c.Z,{variant:"primary",type:"submit",onClick:()=>E(!1),children:"Edit"}):(0,S.jsx)("div",{})}),(0,S.jsx)("div",{children:(0,S.jsx)(v.z,{id:C.user_id})}),(0,S.jsx)("div",{className:"pt-2",children:(0,S.jsx)(y.t,{id:C.user_id})}),(0,S.jsx)("div",{className:"pt-2",children:(0,S.jsx)(w,{id:C.user_id})})]})]})]})})})},C=()=>(0,S.jsxs)(r.Fragment,{children:[(0,S.jsx)(o.Z,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,S.jsx)(l.Z,{children:(0,S.jsx)(i.Z,{children:(0,S.jsx)(Z,{})})})]})},16752:(e,s,a)=>{a.d(s,{t:()=>h});var r=a(93298),t=a(52487),n=a(1084),l=a(24511),i=a(47313),c=a(62563),o=a(75627),m=a(33689),d=a(3463),u=a(46417);const h=e=>{let{id:s}=e;const a=(0,n.I0)(),{t:h}=(0,l.$)(),[p,x]=(0,i.useState)(""),[j,g]=(0,i.useState)(""),b=(0,c.X)(d.Ry().shape({})),{register:y,handleSubmit:v,setError:f,formState:{errors:_}}=(0,o.cI)({defaultValues:{id:s},resolver:b}),N=v((e=>{a((0,m.H)(e)).unwrap().then((e=>{e&&!0===e.status&&x(e.message)})).catch((e=>{for(var s in e.errors)try{f(s,{message:e.errors[s].toString()})}catch(a){}}))}));return(0,u.jsxs)("form",{onSubmit:N,children:[p&&(0,u.jsx)("div",{className:"alert alert-success",children:p}),j&&(0,u.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:j}),(0,u.jsx)(t.y,{label:"Reset Password",type:"password",name:"password",register:y,placeholder:"password",containerClass:"mb-3",errors:_},"password"),(0,u.jsx)(t.y,{type:"hidden",name:"id",register:y}),(0,u.jsx)(r.Z,{variant:"primary",type:"submit",children:"Reset"})]})}},53877:(e,s,a)=>{a.d(s,{z:()=>j});var r=a(95251),t=a(93298),n=a(52487),l=a(1084),i=a(24511),c=a(47313),o=a(62563),m=a(75627),d=a(33689),u=a(3463),h=a(85592),p=a(61875),x=a(46417);const j=e=>{let{id:s}=e;const a=(0,l.I0)(),{t:j}=(0,i.$)(),[g,b]=(0,c.useState)(""),[y,v]=(0,c.useState)(""),[f,_]=(0,c.useState)(!1),N=(0,o.X)(u.Ry().shape({})),{register:S,handleSubmit:w,setValue:Z,setError:C,control:U,formState:{errors:F}}=(0,m.cI)({defaultValues:{id:s},resolver:N}),k=w((e=>{_(!0),a((0,d.ou)(e)).unwrap().then((e=>{e&&!0===e.status&&(b(e.message),v(""),a((0,h.eF)())),_(!1)})).catch((e=>{v(e.message),b(""),_(!1)}))}));return(0,x.jsxs)("form",{onSubmit:k,children:[g&&(0,x.jsx)("div",{className:"alert alert-success",children:g}),y&&(0,x.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:y}),(0,x.jsxs)("fieldset",{children:[(0,x.jsx)(m.Qr,{render:()=>(0,x.jsx)(r.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),Z("image",e[0])}}),name:"image",control:U}),(0,x.jsx)(n.y,{type:"hidden",name:"id",register:S}),f?(0,x.jsx)(p.Z,{}):(0,x.jsx)(t.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}}}]);