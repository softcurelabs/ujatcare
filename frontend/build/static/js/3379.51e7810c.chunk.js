"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3379],{80730:(e,s,t)=>{t.d(s,{A:()=>d});var a=t(9950),r=t(42074),l=t(56035),n=t(86781),i=t(68459),c=t(36275),o=t(44414);const m=e=>{const[s,t]=(0,a.useState)([]),m=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const t=s<0?0:s,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Ay,{...e,onDrop:a=>(a=>{var r=a;e.showPreview&&((a||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:m(e.size)}))),(r=s).push(...a),t(r)),e.onFileUpload&&e.onFileUpload(r)})(a),children:s=>{let{getRootProps:t,getInputProps:a}=s;return(0,o.jsx)("div",{className:"dropzone",children:(0,o.jsxs)("div",{className:"dz-message needsclick",...t(),children:[(0,o.jsx)("input",{...a()}),(0,o.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,o.jsx)("h4",{children:e.title?e.title:"Drop Image or Document here or click to upload."}),(0,o.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,o.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((a,c)=>(0,o.jsx)(l.A,{className:"mt-1 mb-0 shadow-none border",children:(0,o.jsx)("div",{className:"p-2",children:(0,o.jsxs)(n.A,{className:"align-items-center",children:[a.preview&&(0,o.jsx)(i.A,{className:"col-auto",children:(0,o.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:a.name,src:a.preview})}),!a.preview&&(0,o.jsx)(i.A,{className:"col-auto",children:(0,o.jsx)("div",{className:"avatar-sm",children:(0,o.jsx)("span",{className:"avatar-title bg-primary rounded",children:a.type.split("/")[0]})})}),(0,o.jsxs)(i.A,{className:"ps-0",children:[(0,o.jsx)(r.N_,{to:"#",className:"text-muted fw-bold",children:a.name}),(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("strong",{children:a.formattedSize})})]}),(0,o.jsx)(i.A,{className:"text-end",children:(0,o.jsx)(r.N_,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,o.jsx)("i",{className:"dripicons-cross",onClick:()=>(a=>{const r=[...s];r.splice(a,1),t(r),e.onFileUpload&&e.onFileUpload(r)})(c)})})})]})})},c+"-file")))})]})};m.defaultProps={showPreview:!0};const d=m},93379:(e,s,t)=>{t.r(s),t.d(s,{default:()=>w});var a=t(9950),r=t(9449),l=t(56035),n=t(86781),i=t(68459),c=t(97937),o=t(86133),m=t(82612),d=t(28429),u=t(80183),h=t(27081),p=t(70030),x=t(26473),j=t(60666),g=t(19443),f=t(13236),v=t(98972),b=t(32393),_=t(88249),N=t(44414);const A=()=>{const e=(0,h.wA)(),{t:s}=(0,p.B)(),[t,o]=(0,a.useState)(""),[A,w]=(0,a.useState)(""),[y,S]=(0,a.useState)(!1),k=(0,x.t)(j.Ik().shape({}));let{user:B,customerUser:C}=(0,h.d4)((e=>({user:e.Auth.user,customerUser:e.CustomerAuth.user})));B||(B=C);const[F,U]=(0,a.useState)(new Date),[P,R]=(0,a.useState)(!0),E=(0,d.Zp)(),[M,I]=(0,a.useState)(null),{register:Z,handleSubmit:z,setValue:D,setError:L,formState:{errors:V}}=(0,r.mN)({defaultValues:{unit:10,phone_number:"",parking_space:120,emergency_contact_number:"",emergency_contact_name:"",income_verification:230,total_rent:123,language:"eng",special_instruction:null},resolver:k}),T=z((s=>{S(!0),e((0,u.el)(s)).unwrap().then((e=>{e&&!0===e.status&&(o(e.message),window.scrollTo({top:0,behavior:"smooth"})),S(!1)})).catch((e=>{for(var s in e.errors)try{L(s,{message:e.errors[s].toString()})}catch(t){}S(!1)}))}));return(0,a.useEffect)((()=>{e((0,g.qx)()).unwrap().then((()=>{e((0,u.Tv)(B.user_id)).unwrap().then((e=>{b.A.BASE_URL&&e.image_path&&I(`${b.A.BASE_URL}/${e.image_path}`),D("id",e.user.id),D("unit",e.unit),D("first_name",e.user.first_name),D("last_name",e.user.last_name),D("email",e.user.email),D("phone_number",e.phone_number),e.user.flat&&D("flat_id",e.user.flat.flat_id),D("parking_space",e.parking_space),D("emergency_contact_number",e.emergency_contact_number),D("emergency_contact_name",e.emergency_contact_name),D("income_verification",e.income_verification),D("total_rent",e.total_rent),D("special_instruction",e.special_instruction),D("relationship",e.relationship),D("movein_date",e.movein_date)})).catch((e=>w(e.message)))}))}),[]),(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(l.A,{children:(0,N.jsxs)(l.A.Body,{children:[t&&(0,N.jsx)("div",{className:"alert alert-success",children:t}),A&&(0,N.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:A}),(0,N.jsxs)(n.A,{children:[(0,N.jsx)(i.A,{lg:6,children:(0,N.jsxs)("form",{onSubmit:T,className:P?"form-readonly":"",children:[(0,N.jsxs)("fieldset",{children:[(0,N.jsx)(m.Z,{label:"First Name",type:"text",name:"first_name",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:Z,errors:V},"first_name"),(0,N.jsx)(m.Z,{label:"Last Name",type:"text",name:"last_name",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:Z,errors:V},"last_name"),(0,N.jsx)(m.Z,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:Z,errors:V},"phone_number"),(0,N.jsx)(m.Z,{label:"Email",type:"email",name:"email",placeholder:"Email",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:Z,errors:V,disabled:!0},"email"),(0,N.jsxs)(m.Z,{type:"select",label:"Role",name:"role_id",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:Z,errors:V,children:[(0,N.jsx)("option",{value:"",children:"Select Role"}),(0,N.jsx)("option",{value:"admin",selected:!0,children:"Super Admin"}),(0,N.jsx)("option",{value:"staff",children:"Staff"}),(0,N.jsx)("option",{value:"maintenance-staff",children:"Maintanance Staff"})]})]}),(0,N.jsx)(c.A,{onClick:()=>E(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),P?(0,N.jsx)("div",{}):y?(0,N.jsx)(_.m,{}):(0,N.jsx)(c.A,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,N.jsxs)(i.A,{lg:6,children:[(0,N.jsx)("div",{className:"text-center",children:M&&(0,N.jsx)("img",{src:M,className:"rounded-4",alt:"{}",width:125})}),(0,N.jsx)("div",{className:"text-end pb-2",children:P?(0,N.jsx)(c.A,{variant:"primary",type:"submit",onClick:()=>R(!1),children:"Edit"}):(0,N.jsx)("div",{})}),(0,N.jsx)("div",{children:(0,N.jsx)(v.t,{id:B.user_id})}),(0,N.jsx)("div",{className:"pt-2",children:(0,N.jsx)(f.R,{email:B.email})})]})]})]})})})},w=()=>(0,N.jsxs)(a.Fragment,{children:[(0,N.jsx)(o.A,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,N.jsx)(n.A,{children:(0,N.jsx)(i.A,{children:(0,N.jsx)(A,{})})})]})},13236:(e,s,t)=>{t.d(s,{R:()=>h});var a=t(97937),r=t(27081),l=t(70030),n=t(9950),i=t(26473),c=t(9449),o=t(60666),m=t(88249),d=t(91144),u=t(44414);const h=e=>{let{email:s}=e;const t=(0,r.wA)(),{t:h}=(0,l.B)(),[p,x]=(0,n.useState)(""),[j,g]=(0,n.useState)(""),[f,v]=(0,n.useState)(!1),b=(0,i.t)(o.Ik().shape({})),{register:_,handleSubmit:N,setError:A,formState:{errors:w}}=(0,c.mN)({defaultValues:{},resolver:b}),y=N((()=>{v(!0),t((0,d.Nu)(s)).unwrap().then((e=>{e&&!0===e.status&&x(e.message),v(!1)})).catch((e=>{g(e.message),v(!1)}))}));return(0,u.jsxs)("form",{onSubmit:y,children:[p&&(0,u.jsx)("div",{className:"alert alert-success",children:p}),j&&(0,u.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:j}),f?(0,u.jsx)(m.m,{}):(0,u.jsx)(a.A,{variant:"primary",type:"submit",children:"Reset Password"})]})}},98972:(e,s,t)=>{t.d(s,{t:()=>x});var a=t(80730),r=t(97937),l=t(82612),n=t(27081),i=t(9950),c=t(26473),o=t(9449),m=t(80183),d=t(60666),u=t(91144),h=t(88249),p=t(44414);const x=e=>{let{id:s}=e;const t=(0,n.wA)(),[x,j]=(0,i.useState)(""),[g,f]=(0,i.useState)(""),[v,b]=(0,i.useState)(!1),_=(0,c.t)(d.Ik().shape({})),{register:N,handleSubmit:A,setValue:w,control:y}=(0,o.mN)({defaultValues:{id:s},resolver:_}),S=A((e=>{b(!0),t((0,m.X$)(e)).unwrap().then((e=>{e&&!0===e.status&&(j(e.message),f(""),t((0,u.IM)())),b(!1)})).catch((e=>{f(e.message),j(""),b(!1)}))}));return(0,p.jsxs)("form",{onSubmit:S,children:[x&&(0,p.jsx)("div",{className:"alert alert-success",children:x}),g&&(0,p.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,p.jsxs)("fieldset",{className:"mt-4",children:[(0,p.jsx)(o.xI,{render:()=>(0,p.jsx)(a.A,{title:"Drag Profile pic or click here to upload",maxFiles:1,onFileUpload:e=>{w("image",e[0])}}),name:"image",control:y}),(0,p.jsx)(l.Z,{type:"hidden",name:"id",register:N}),v?(0,p.jsx)(h.m,{}):(0,p.jsx)(r.A,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}}}]);