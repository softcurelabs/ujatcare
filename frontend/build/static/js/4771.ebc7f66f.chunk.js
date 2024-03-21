"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[4771],{33856:(e,s,r)=>{r.d(s,{l:()=>l});var a=r(44030),t=r(46417);const l=()=>(0,t.jsx)(a.Z,{animation:"border",role:"status",children:(0,t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},95251:(e,s,r)=>{r.d(s,{Z:()=>m});var a=r(47313),t=r(2135),l=r(10195),n=r(63849),i=r(31616),c=r(80614),o=r(46417);const d=e=>{const[s,r]=(0,a.useState)([]),d=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const r=s<0?0:s,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ZP,{...e,onDrop:a=>(a=>{var t=a;e.showPreview&&((a||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:d(e.size)}))),(t=s).push(...a),r(t)),e.onFileUpload&&e.onFileUpload(t)})(a),children:e=>{let{getRootProps:s,getInputProps:r}=e;return(0,o.jsx)("div",{className:"dropzone",children:(0,o.jsxs)("div",{className:"dz-message needsclick",...s(),children:[(0,o.jsx)("input",{...r()}),(0,o.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,o.jsx)("h4",{children:"Drop Image or Document here or click to upload."}),(0,o.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,o.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((a,c)=>(0,o.jsx)(l.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,o.jsx)("div",{className:"p-2",children:(0,o.jsxs)(n.Z,{className:"align-items-center",children:[a.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:a.name,src:a.preview})}),!a.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("div",{className:"avatar-sm",children:(0,o.jsx)("span",{className:"avatar-title bg-primary rounded",children:a.type.split("/")[0]})})}),(0,o.jsxs)(i.Z,{className:"ps-0",children:[(0,o.jsx)(t.rU,{to:"#",className:"text-muted fw-bold",children:a.name}),(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("strong",{children:a.formattedSize})})]}),(0,o.jsx)(i.Z,{className:"text-end",children:(0,o.jsx)(t.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,o.jsx)("i",{className:"dripicons-cross",onClick:()=>(a=>{const t=[...s];t.splice(a,1),r(t),e.onFileUpload&&e.onFileUpload(t)})(c)})})})]})})},c+"-file")))})]})};d.defaultProps={showPreview:!0};const m=d},20192:(e,s,r)=>{r.d(s,{Z:()=>i});r(47313);var a=r(63849),t=r(31616),l=r(52198),n=r(46417);const i=e=>(0,n.jsx)(a.Z,{children:(0,n.jsx)(t.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(l.Z,{className:"m-0",children:[(0,n.jsx)(l.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,s)=>e.active?(0,n.jsx)(l.Z.Item,{active:!0,children:e.label},s):(0,n.jsx)(l.Z.Item,{href:e.path,children:e.label},s)))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,s,r)=>{r.d(s,{y:()=>u,J:()=>n});var a=r(47313),t=r(75627),l=r(46417);const n=e=>{let{defaultValues:s,resolver:r,children:n,onSubmit:i,formClass:c}=e;const o=(0,t.cI)({defaultValues:s,resolver:r}),{handleSubmit:d,register:m,control:u,formState:{errors:p}}=o;return(0,l.jsx)("form",{onSubmit:d(i),className:c,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?a.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:p,control:u}}):e)):n})};var i=r(38394),c=r(88178),o=r(72884),d=r.n(o);const m=e=>{let{name:s,placeholder:r,refCallback:t,errors:n,control:o,register:m,className:u}=e;const[p,h]=(0,a.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.Z,{className:"mb-0",children:[(0,l.jsx)(c.Z.Control,{type:p?"text":"password",placeholder:r,name:s,id:s,as:"input",ref:e=>{t&&t(e)},className:u,isInvalid:!(!n||!n[s]),...m?m(s):{},autoComplete:s}),(0,l.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,l.jsx)("span",{className:"password-eye",onClick:()=>{h(!p)}})})]})})},u=e=>{let{label:s,type:r,name:a,placeholder:t,register:n,errors:i,control:o,className:d,labelClassName:u,containerClass:p,refCallback:h,children:x,rows:j,...g}=e;const v="textarea"===r?"textarea":"select"===r?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===r?(0,l.jsx)("input",{type:r,name:a,id:a,...n?n(a):{},...g,className:d}):(0,l.jsx)(l.Fragment,{children:"password"===r?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z.Group,{className:p,children:[s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z.Label,{className:u,children:s})," ",x," "]}):null,(0,l.jsx)(m,{name:a,placeholder:t,refCallback:h,errors:i,register:n,className:d}),i&&i[a]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[a].message}):null]})}):(0,l.jsx)(l.Fragment,{children:"checkbox"===r||"radio"===r?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z.Group,{className:p,children:[(0,l.jsx)(c.Z.Check,{type:r,label:s,name:a,id:a,ref:e=>{h&&h(e)},className:d,isInvalid:!(!i||!i[a]),...n?n(a):{},...g}),i&&i[a]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",children:i[a].message}):null]})}):(0,l.jsxs)(c.Z.Group,{className:p,children:[s?(0,l.jsx)(c.Z.Label,{className:u,children:s}):null,(0,l.jsx)(c.Z.Control,{type:r,placeholder:t,name:a,id:a,as:v,ref:e=>{h&&h(e)},className:d,isInvalid:!(!i||!i[a]),...n?n(a):{},rows:j,...g,autoComplete:a,children:x||null}),i&&i[a]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",children:i[a].message}):null]})})})})}},36407:(e,s,r)=>{r.r(s),r.d(s,{default:()=>w});var a=r(47313),t=r(75627),l=r(10195),n=r(63849),i=r(31616),c=r(93298),o=r(20192),d=r(52487),m=r(58467),u=r(33689),p=r(56352),h=r(24511),x=r(62563),j=r(3463),g=r(20253),v=r(16752),b=r(53877),f=r(32335),y=r(33856),N=r(46417);const Z=()=>{const e=(0,p.I0)(),{t:s}=(0,h.$)(),[r,o]=(0,a.useState)(""),[Z,w]=(0,a.useState)(""),[_,S]=(0,a.useState)(!1),C=(0,x.X)(j.Ry().shape({}));let{user:k,customerUser:F}=(0,p.v9)((e=>({user:e.Auth.user,customerUser:e.CustomerAuth.user})));k||(k=F);const[I,U]=(0,a.useState)(new Date),[B,A]=(0,a.useState)(!0),R=(0,m.s0)(),[P,E]=(0,a.useState)(null),{register:z,handleSubmit:M,setValue:V,setError:L,formState:{errors:D}}=(0,t.cI)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,rent_calculation:123,language:"eng",special_instruction:null},resolver:C}),G=M((s=>{S(!0),e((0,u.yT)(s)).unwrap().then((e=>{e&&!0===e.status&&(o(e.message),window.scrollTo({top:0,behavior:"smooth"})),S(!1)})).catch((e=>{for(var s in e.errors)try{L(s,{message:e.errors[s].toString()})}catch(r){}S(!1)}))}));return(0,a.useEffect)((()=>{e((0,g.i)()).unwrap().then((()=>{e((0,u.fB)(k.user_id)).unwrap().then((e=>{f.Z.BASE_URL&&e.image_path&&E("".concat(f.Z.BASE_URL,"/").concat(e.image_path)),V("id",e.user.id),V("unit",e.unit),V("name",e.user.name),V("email",e.user.email),V("phone_number",e.phone_number),e.user.flat&&V("flat_id",e.user.flat.flat_id),V("parking_space",e.parking_space),V("emergency_contact_number",e.emergency_contact_number),V("emergency_contact_name",e.emergency_contact_name),V("income_verification",e.income_verification),V("rent_calculation",e.rent_calculation),V("special_instruction",e.special_instruction),V("relationship",e.relationship),V("movein_date",e.movein_date)})).catch((e=>w(e.message)))}))}),[]),(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(l.Z,{children:(0,N.jsxs)(l.Z.Body,{children:[r&&(0,N.jsx)("div",{className:"alert alert-success",children:r}),Z&&(0,N.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:Z}),(0,N.jsxs)(n.Z,{children:[(0,N.jsx)(i.Z,{lg:6,children:(0,N.jsxs)("form",{onSubmit:G,className:B?"form-readonly":"",children:[(0,N.jsxs)("fieldset",{children:[(0,N.jsx)(d.y,{label:"Name",type:"text",name:"name",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:z,errors:D},"name"),(0,N.jsx)(d.y,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:z,errors:D},"phone_number"),(0,N.jsx)(d.y,{label:"Email",type:"email",name:"email",placeholder:"Email",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:z,errors:D,disabled:!0},"email"),(0,N.jsxs)(d.y,{type:"select",label:"Role",name:"role_id",className:"form-control-sm fs-5",containerClass:"mb-3 input-group",register:z,errors:D,children:[(0,N.jsx)("option",{value:"",children:"Select Role"}),(0,N.jsx)("option",{value:"admin",selected:!0,children:"admin"}),(0,N.jsx)("option",{value:"staff",children:"Staff"})]})]}),(0,N.jsx)(c.Z,{onClick:()=>R(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),B?(0,N.jsx)("div",{}):_?(0,N.jsx)(y.l,{}):(0,N.jsx)(c.Z,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,N.jsxs)(i.Z,{lg:6,children:[(0,N.jsx)("div",{className:"text-center",children:P&&(0,N.jsx)("img",{src:P,className:"rounded-4",alt:"{}",width:125})}),(0,N.jsx)("div",{className:"text-end pb-2",children:B?(0,N.jsx)(c.Z,{variant:"primary",type:"submit",onClick:()=>A(!1),children:"Edit"}):(0,N.jsx)("div",{})}),(0,N.jsx)("div",{children:(0,N.jsx)(b.z,{id:k.user_id})}),(0,N.jsx)("div",{className:"pt-2",children:(0,N.jsx)(v.t,{id:k.user_id})})]})]})]})})})},w=()=>(0,N.jsxs)(a.Fragment,{children:[(0,N.jsx)(o.Z,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,N.jsx)(n.Z,{children:(0,N.jsx)(i.Z,{children:(0,N.jsx)(Z,{})})})]})},16752:(e,s,r)=>{r.d(s,{t:()=>h});var a=r(93298),t=r(52487),l=r(56352),n=r(24511),i=r(47313),c=r(62563),o=r(75627),d=r(33689),m=r(3463),u=r(33856),p=r(46417);const h=e=>{let{id:s}=e;const r=(0,l.I0)(),{t:h}=(0,n.$)(),[x,j]=(0,i.useState)(""),[g,v]=(0,i.useState)(""),[b,f]=(0,i.useState)(!1),y=(0,c.X)(m.Ry().shape({})),{register:N,handleSubmit:Z,setError:w,formState:{errors:_}}=(0,o.cI)({defaultValues:{id:s},resolver:y}),S=Z((e=>{f(!0),r((0,d.H)(e)).unwrap().then((e=>{e&&!0===e.status&&j(e.message),f(!1)})).catch((e=>{for(var s in e.errors)try{w(s,{message:e.errors[s].toString()})}catch(r){}f(!1)}))}));return(0,p.jsxs)("form",{onSubmit:S,children:[x&&(0,p.jsx)("div",{className:"alert alert-success",children:x}),g&&(0,p.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,p.jsx)(t.y,{label:"Reset Password",type:"password",name:"password",register:N,placeholder:"password",containerClass:"mb-3",errors:_},"password"),(0,p.jsx)(t.y,{type:"hidden",name:"id",register:N}),b?(0,p.jsx)(u.l,{}):(0,p.jsx)(a.Z,{variant:"primary",type:"submit",children:"Reset"})]})}},53877:(e,s,r)=>{r.d(s,{z:()=>x});var a=r(95251),t=r(93298),l=r(52487),n=r(56352),i=r(47313),c=r(62563),o=r(75627),d=r(33689),m=r(3463),u=r(85592),p=r(33856),h=r(46417);const x=e=>{let{id:s}=e;const r=(0,n.I0)(),[x,j]=(0,i.useState)(""),[g,v]=(0,i.useState)(""),[b,f]=(0,i.useState)(!1),y=(0,c.X)(m.Ry().shape({})),{register:N,handleSubmit:Z,setValue:w,control:_}=(0,o.cI)({defaultValues:{id:s},resolver:y}),S=Z((e=>{f(!0),r((0,d.ou)(e)).unwrap().then((e=>{e&&!0===e.status&&(j(e.message),v(""),r((0,u.eF)())),f(!1)})).catch((e=>{v(e.message),j(""),f(!1)}))}));return(0,h.jsxs)("form",{onSubmit:S,children:[x&&(0,h.jsx)("div",{className:"alert alert-success",children:x}),g&&(0,h.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,h.jsxs)("fieldset",{children:[(0,h.jsx)(o.Qr,{render:()=>(0,h.jsx)(a.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),w("image",e[0])}}),name:"image",control:_}),(0,h.jsx)(l.y,{type:"hidden",name:"id",register:N}),b?(0,h.jsx)(p.l,{}):(0,h.jsx)(t.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}},30907:(e,s,r)=>{function a(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,a=new Array(s);r<s;r++)a[r]=e[r];return a}r.d(s,{Z:()=>a})},40181:(e,s,r)=>{r.d(s,{Z:()=>t});var a=r(30907);function t(e,s){if(e){if("string"===typeof e)return(0,a.Z)(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,a.Z)(e,s):void 0}}}}]);