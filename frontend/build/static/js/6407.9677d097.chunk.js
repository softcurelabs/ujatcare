"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[6407],{95251:(e,s,r)=>{r.d(s,{Z:()=>m});var a=r(47313),t=r(2135),n=r(65832),l=r(63849),i=r(31616),c=r(80614),o=r(46417);const d=e=>{const[s,r]=(0,a.useState)([]),d=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const r=s<0?0:s,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ZP,{...e,onDrop:s=>(s=>{var a=s;e.showPreview&&((s||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:d(e.size)}))),(a=[]).push(...s),r(a)),e.onFileUpload&&e.onFileUpload(a)})(s),children:e=>{let{getRootProps:s,getInputProps:r}=e;return(0,o.jsx)("div",{className:"dropzone",children:(0,o.jsxs)("div",{className:"dz-message needsclick",...s(),children:[(0,o.jsx)("input",{...r()}),(0,o.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,o.jsx)("h4",{children:"Drop Image here or click to upload."}),(0,o.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,o.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((a,c)=>(0,o.jsx)(n.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,o.jsx)("div",{className:"p-2",children:(0,o.jsxs)(l.Z,{className:"align-items-center",children:[a.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:a.name,src:a.preview})}),!a.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("div",{className:"avatar-sm",children:(0,o.jsx)("span",{className:"avatar-title bg-primary rounded",children:a.type.split("/")[0]})})}),(0,o.jsxs)(i.Z,{className:"ps-0",children:[(0,o.jsx)(t.rU,{to:"#",className:"text-muted fw-bold",children:a.name}),(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("strong",{children:a.formattedSize})})]}),(0,o.jsx)(i.Z,{className:"text-end",children:(0,o.jsx)(t.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,o.jsx)("i",{className:"dripicons-cross",onClick:()=>(a=>{const t=[...s];t.splice(a,1),r(t),e.onFileUpload&&e.onFileUpload(t)})(c)})})})]})})},c+"-file")))})]})};d.defaultProps={showPreview:!0};const m=d},36407:(e,s,r)=>{r.r(s),r.d(s,{default:()=>_});var a=r(47313),t=r(75627),n=r(65832),l=r(63849),i=r(31616),c=r(93298),o=r(51450),d=r(52487),m=r(58467),u=r(33689),h=r(1084),p=r(24511),x=r(62563),j=r(3463),g=r(20253),v=r(16752),b=r(53877),f=r(46417);const y=()=>{const e=(0,h.I0)(),{t:s}=(0,p.$)(),[r,o]=(0,a.useState)(""),[y,_]=(0,a.useState)(""),w=(0,x.X)(j.Ry().shape({}));let{flats:N,user:S,customerUser:Z}=(0,h.v9)((e=>({flats:e.Flat.flats,user:e.Auth.user,customerUser:e.CustomerAuth.user})));S||(S=Z);const[k,B]=(0,a.useState)(new Date),[F,U]=(0,a.useState)(!0),C=(0,m.s0)(),{register:P,handleSubmit:R,setValue:z,setError:I,formState:{errors:E}}=(0,t.cI)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,rent_calculation:123,language:"eng",special_instruction:null},resolver:w}),M=R((s=>{e((0,u.yT)(s)).unwrap().then((e=>{e&&!0===e.status&&(o(e.message),window.scrollTo({top:0,behavior:"smooth"}))})).catch((e=>{for(var s in e.errors)try{I(s,{message:e.errors[s].toString()})}catch(r){}}))}));return(0,a.useEffect)((()=>{e((0,g.i)()).unwrap().then((()=>{e((0,u.fB)(S.user_id)).unwrap().then((e=>{z("id",e.user.id),z("unit",e.unit),z("name",e.user.name),z("email",e.user.email),z("phone_number",e.phone_number),e.user.flat&&z("flat_id",e.user.flat.flat_id),z("parking_space",e.parking_space),z("emergency_contact_number",e.emergency_contact_number),z("emergency_contact_name",e.emergency_contact_name),z("income_verification",e.income_verification),z("rent_calculation",e.rent_calculation),z("special_instruction",e.special_instruction),z("relationship",e.relationship),z("movein_date",e.movein_date)})).catch((e=>_(e.message)))}))}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(n.Z,{children:(0,f.jsxs)(n.Z.Body,{children:[r&&(0,f.jsx)("div",{className:"alert alert-success",children:r}),y&&(0,f.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:y}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(i.Z,{lg:6,children:(0,f.jsxs)("form",{onSubmit:M,className:F?"form-readonly":"",children:[(0,f.jsxs)("fieldset",{children:[(0,f.jsx)(d.y,{label:"Name",type:"text",name:"name",containerClass:"mb-3",register:P,errors:E},"name"),(0,f.jsx)(d.y,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",containerClass:"mb-3",register:P,errors:E},"phone_number"),(0,f.jsx)(d.y,{label:"Email",type:"email",name:"email",placeholder:"Email",containerClass:"mb-3",register:P,errors:E,disabled:!0},"email"),(0,f.jsxs)(d.y,{type:"select",label:"Role",name:"role_id",containerClass:"mb-3",register:P,errors:E,children:[(0,f.jsx)("option",{value:"",children:"Select Role"}),(0,f.jsx)("option",{value:"admin",selected:!0,children:"admin"}),(0,f.jsx)("option",{value:"staff",children:"Staff"})]})]}),(0,f.jsx)(c.Z,{onClick:()=>C(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),F?(0,f.jsx)("div",{}):(0,f.jsx)(c.Z,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,f.jsxs)(i.Z,{lg:6,children:[(0,f.jsx)("div",{className:"text-end pb-2",children:F?(0,f.jsx)(c.Z,{variant:"primary",type:"submit",onClick:()=>U(!1),children:"Edit"}):(0,f.jsx)("div",{})}),(0,f.jsx)("div",{children:(0,f.jsx)(b.z,{id:S.user_id})}),(0,f.jsx)("div",{className:"pt-2",children:(0,f.jsx)(v.t,{id:S.user_id})})]})]})]})})})},_=()=>(0,f.jsxs)(a.Fragment,{children:[(0,f.jsx)(o.Z,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,f.jsx)(l.Z,{children:(0,f.jsx)(i.Z,{children:(0,f.jsx)(y,{})})})]})},16752:(e,s,r)=>{r.d(s,{t:()=>h});var a=r(93298),t=r(52487),n=r(1084),l=r(24511),i=r(47313),c=r(62563),o=r(75627),d=r(33689),m=r(3463),u=r(46417);const h=e=>{let{id:s}=e;const r=(0,n.I0)(),{t:h}=(0,l.$)(),[p,x]=(0,i.useState)(""),[j,g]=(0,i.useState)(""),v=(0,c.X)(m.Ry().shape({})),{register:b,handleSubmit:f,setError:y,formState:{errors:_}}=(0,o.cI)({defaultValues:{id:s},resolver:v}),w=f((e=>{r((0,d.H)(e)).unwrap().then((e=>{e&&!0===e.status&&x(e.message)})).catch((e=>{for(var s in e.errors)try{y(s,{message:e.errors[s].toString()})}catch(r){}}))}));return(0,u.jsxs)("form",{onSubmit:w,children:[p&&(0,u.jsx)("div",{className:"alert alert-success",children:p}),j&&(0,u.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:j}),(0,u.jsx)(t.y,{label:"Reset Password",type:"password",name:"password",register:b,placeholder:"password",containerClass:"mb-3",errors:_},"password"),(0,u.jsx)(t.y,{type:"hidden",name:"id",register:b}),(0,u.jsx)(a.Z,{variant:"primary",type:"submit",children:"Reset"})]})}},53877:(e,s,r)=>{r.d(s,{z:()=>j});var a=r(95251),t=r(93298),n=r(52487),l=r(1084),i=r(24511),c=r(47313),o=r(62563),d=r(75627),m=r(33689),u=r(3463),h=r(85592),p=r(61875),x=r(46417);const j=e=>{let{id:s}=e;const r=(0,l.I0)(),{t:j}=(0,i.$)(),[g,v]=(0,c.useState)(""),[b,f]=(0,c.useState)(""),[y,_]=(0,c.useState)(!1),w=(0,o.X)(u.Ry().shape({})),{register:N,handleSubmit:S,setValue:Z,setError:k,control:B,formState:{errors:F}}=(0,d.cI)({defaultValues:{id:s},resolver:w}),U=S((e=>{_(!0),r((0,m.ou)(e)).unwrap().then((e=>{e&&!0===e.status&&(v(e.message),f(""),r((0,h.eF)())),_(!1)})).catch((e=>{f(e.message),v(""),_(!1)}))}));return(0,x.jsxs)("form",{onSubmit:U,children:[g&&(0,x.jsx)("div",{className:"alert alert-success",children:g}),b&&(0,x.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:b}),(0,x.jsxs)("fieldset",{children:[(0,x.jsx)(d.Qr,{render:()=>(0,x.jsx)(a.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),Z("image",e[0])}}),name:"image",control:B}),(0,x.jsx)(n.y,{type:"hidden",name:"id",register:N}),y?(0,x.jsx)(p.Z,{}):(0,x.jsx)(t.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}}}]);