"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9935],{20800:(e,a,t)=>{t.d(a,{Z:()=>d});var s=t(47313),r=t(61378),n=t.n(r),l=t(72884),i=t.n(l),o=(t(72632),t(46417));const c=(0,s.forwardRef)(((e,a)=>(0,o.jsx)("input",{name:e.name,type:"text",className:i()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:()=>{},ref:a}))),m=(0,s.forwardRef)(((e,a)=>(0,o.jsxs)("div",{className:"input-group input-group-sm",ref:a,children:[(0,o.jsx)("input",{type:"text",name:e.name,className:i()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),(0,o.jsx)("span",{className:"input-group-text bg-blue border-blue text-white",children:(0,o.jsx)("i",{className:"mdi mdi-calendar-range"})})]}))),d=e=>{var a,t;const s=!0===(e.hideAddon||!1)?(0,o.jsx)(c,{name:e.name,inputClass:e.inputClass,value:null===(a=e.value)||void 0===a?void 0:a.toDateString()}):(0,o.jsx)(m,{name:e.name,inputClass:e.inputClass,value:null===(t=e.value)||void 0===t?void 0:t.toDateString()});return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n(),{name:e.name,customInput:s,timeIntervals:e.tI,selected:e.value,value:e.value.toDateString(),onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}},95251:(e,a,t)=>{t.d(a,{Z:()=>d});var s=t(47313),r=t(2135),n=t(65832),l=t(63849),i=t(31616),o=t(80614),c=t(46417);const m=e=>{const[a,t]=(0,s.useState)([]),m=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const t=a<0?0:a,s=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,s)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.ZP,{...e,onDrop:a=>(a=>{var s=a;e.showPreview&&((a||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:m(e.size)}))),(s=[]).push(...a),t(s)),e.onFileUpload&&e.onFileUpload(s)})(a),children:e=>{let{getRootProps:a,getInputProps:t}=e;return(0,c.jsx)("div",{className:"dropzone",children:(0,c.jsxs)("div",{className:"dz-message needsclick",...a(),children:[(0,c.jsx)("input",{...t()}),(0,c.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,c.jsx)("h4",{children:"Drop Image here or click to upload."}),(0,c.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,c.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(a||[]).map(((s,o)=>(0,c.jsx)(n.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,c.jsx)("div",{className:"p-2",children:(0,c.jsxs)(l.Z,{className:"align-items-center",children:[s.preview&&(0,c.jsx)(i.Z,{className:"col-auto",children:(0,c.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:s.name,src:s.preview})}),!s.preview&&(0,c.jsx)(i.Z,{className:"col-auto",children:(0,c.jsx)("div",{className:"avatar-sm",children:(0,c.jsx)("span",{className:"avatar-title bg-primary rounded",children:s.type.split("/")[0]})})}),(0,c.jsxs)(i.Z,{className:"ps-0",children:[(0,c.jsx)(r.rU,{to:"#",className:"text-muted fw-bold",children:s.name}),(0,c.jsx)("p",{className:"mb-0",children:(0,c.jsx)("strong",{children:s.formattedSize})})]}),(0,c.jsx)(i.Z,{className:"text-end",children:(0,c.jsx)(r.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,c.jsx)("i",{className:"dripicons-cross",onClick:()=>(s=>{const r=[...a];r.splice(s,1),t(r),e.onFileUpload&&e.onFileUpload(r)})(o)})})})]})})},o+"-file")))})]})};m.defaultProps={showPreview:!0};const d=m},61875:(e,a,t)=>{t.d(a,{Z:()=>r});t(47313);var s=t(46417);const r=()=>(0,s.jsx)("div",{className:"preloader position-absolute",id:"preloader",children:(0,s.jsx)("div",{className:"status",id:"status",children:(0,s.jsx)("div",{className:"spinner"})})})},69935:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var s=t(47313),r=t(75627),n=t(65832),l=t(63849),i=t(31616),o=t(93298),c=t(51450),m=t(52487),d=t(20800),u=t(58467),p=t(33689),h=t(1084),x=t(24511),g=t(62563),j=t(3463),b=t(20253),v=t(16752),y=t(53877),f=t(46417);const _=()=>{const e=(0,h.I0)(),{t:a}=(0,x.$)(),[t,c]=(0,s.useState)(""),[_,w]=(0,s.useState)(""),C=(0,g.X)(j.Ry().shape({}));let{flats:N,user:S,customerUser:Z}=(0,h.v9)((e=>({flats:e.Flat.flats,user:e.Auth.user,customerUser:e.CustomerAuth.user})));S||(S=Z);const[k,F]=(0,s.useState)(new Date),[U,I]=(0,s.useState)(!0),B=(0,u.s0)(),{register:E,handleSubmit:P,setValue:R,setError:D,formState:{errors:M}}=((0,u.UO)(),(0,r.cI)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,rent_calculation:123,language:"eng",special_instruction:null},resolver:C})),z=P((a=>{e((0,p.yT)(a)).unwrap().then((e=>{e&&!0===e.status&&(c(e.message),window.scrollTo({top:0,behavior:"smooth"}))})).catch((e=>{for(var a in e.errors)try{D(a,{message:e.errors[a].toString()})}catch(t){}}))}));return(0,s.useEffect)((()=>{e((0,b.i)()).unwrap().then((()=>{e((0,p.fB)(S.user_id)).unwrap().then((e=>{R("id",e.user.id),R("unit",e.unit),R("name",e.user.name),R("email",e.user.email),R("phone_number",e.phone_number),e.user.flat&&R("flat_id",e.user.flat.flat_id),R("parking_space",e.parking_space),R("emergency_contact_number",e.emergency_contact_number),R("emergency_contact_name",e.emergency_contact_name),R("income_verification",e.income_verification),R("rent_calculation",e.rent_calculation),R("special_instruction",e.special_instruction),R("relationship",e.relationship),R("movein_date",e.movein_date)})).catch((e=>w(e)))}))}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(n.Z,{children:(0,f.jsxs)(n.Z.Body,{children:[t&&(0,f.jsx)("div",{className:"alert alert-success",children:t}),_&&(0,f.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:_}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(i.Z,{lg:6,children:(0,f.jsxs)("form",{onSubmit:z,className:U?"form-readonly":"",children:[(0,f.jsxs)("fieldset",{children:[(0,f.jsx)(m.y,{label:"Emergency Contact",type:"text",name:"emergency_contact_number",placeholder:"Emergency Contact Number",containerClass:"mb-3",register:E,errors:M},"emergency_contact_number"),(0,f.jsx)(m.y,{label:"Emergency Contact Name",type:"text",name:"emergency_contact_name",placeholder:"Emergency Contact Name",containerClass:"mb-3",register:E,errors:M},"emergency_contact_name"),(0,f.jsx)(m.y,{label:"Name",type:"text",name:"name",containerClass:"mb-3",register:E,errors:M},"name"),(0,f.jsx)(m.y,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",containerClass:"mb-3",register:E,errors:M},"phone_number"),(0,f.jsx)(m.y,{label:"Email",type:"email",name:"email",placeholder:"Email",containerClass:"mb-3",register:E,errors:M,disabled:!0},"email"),(0,f.jsx)(m.y,{label:"Unit",type:"text",name:"unit",placeholder:"Unit",containerClass:"mb-3",register:E,errors:M},"unit"),(0,f.jsx)(m.y,{label:"Relationship",type:"text",name:"relationship",placeholder:"relationship",containerClass:"mb-3",register:E,errors:M},"relationship"),(0,f.jsx)(m.y,{type:"select",label:"Apartment#",name:"flat_id",containerClass:"mb-3",register:E,disabled:!0,errors:M,children:N.length&&N.map((e=>(0,f.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,f.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))}),(0,f.jsx)(m.y,{label:"Parking Space",type:"text",name:"parking",placeholder:"Parking",containerClass:"mb-3",register:E,errors:M},"parking"),(0,f.jsx)(m.y,{label:"Income Verification",type:"text",name:"income_verification",placeholder:"Contact",containerClass:"mb-3",register:E,errors:M},"income_verification"),(0,f.jsx)(m.y,{label:"Rent Calculation",type:"text",name:"rent_calculation",placeholder:"Rent",containerClass:"mb-3",register:E,errors:M},"rent_calculation"),(0,f.jsx)(m.y,{label:"Language",type:"text",name:"language",placeholder:"Language",containerClass:"mb-3",register:E,errors:M},"language"),(0,f.jsx)(m.y,{label:"Special information",type:"textarea",name:"special_instruction",rows:"5",containerClass:"mb-3",register:E,errors:M},"special_instruction"),(0,f.jsx)(m.y,{type:"hidden",register:E,name:"movein_date"},"movein_date"),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Move In Date"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(d.Z,{hideAddon:!0,showTimeSelect:!1,value:k,onChange:e=>{(e=>{e&&F(e)})(e),R("movein_date",e.toLocaleString("sv-SE"))}})]})]}),(0,f.jsx)(o.Z,{onClick:()=>B(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),U?(0,f.jsx)("div",{}):(0,f.jsx)(o.Z,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,f.jsxs)(i.Z,{lg:6,children:[(0,f.jsx)("div",{className:"text-end pb-2",children:U?(0,f.jsx)(o.Z,{variant:"primary",type:"submit",onClick:()=>I(!1),children:"Edit"}):(0,f.jsx)("div",{})}),(0,f.jsx)(y.z,{id:S.user_id}),(0,f.jsx)("div",{className:"pt-5",children:(0,f.jsx)(v.t,{id:S.user_id})})]})]})]})})})},w=()=>(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)(c.Z,{breadCrumbItems:[{label:"Users",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,f.jsx)(l.Z,{children:(0,f.jsx)(i.Z,{children:(0,f.jsx)(_,{})})})]})},16752:(e,a,t)=>{t.d(a,{t:()=>p});var s=t(93298),r=t(52487),n=t(1084),l=t(24511),i=t(47313),o=t(62563),c=t(75627),m=t(33689),d=t(3463),u=t(46417);const p=e=>{let{id:a}=e;const t=(0,n.I0)(),{t:p}=(0,l.$)(),[h,x]=(0,i.useState)(""),[g,j]=(0,i.useState)(""),b=(0,o.X)(d.Ry().shape({})),{register:v,handleSubmit:y,setError:f,formState:{errors:_}}=(0,c.cI)({defaultValues:{id:a},resolver:b}),w=y((e=>{t((0,m.H)(e)).unwrap().then((e=>{e&&!0===e.status&&x(e.message)})).catch((e=>{for(var a in e.errors)try{f(a,{message:e.errors[a].toString()})}catch(t){}}))}));return(0,u.jsxs)("form",{onSubmit:w,children:[h&&(0,u.jsx)("div",{className:"alert alert-success",children:h}),g&&(0,u.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,u.jsx)(r.y,{label:"Reset Password",type:"password",name:"password",register:v,placeholder:"password",containerClass:"mb-3",errors:_},"password"),(0,u.jsx)(r.y,{type:"hidden",name:"id",register:v}),(0,u.jsx)(s.Z,{variant:"primary",type:"submit",children:"Reset"})]})}},53877:(e,a,t)=>{t.d(a,{z:()=>g});var s=t(95251),r=t(93298),n=t(52487),l=t(1084),i=t(24511),o=t(47313),c=t(62563),m=t(75627),d=t(33689),u=t(3463),p=t(85592),h=t(61875),x=t(46417);const g=e=>{let{id:a}=e;const t=(0,l.I0)(),{t:g}=(0,i.$)(),[j,b]=(0,o.useState)(""),[v,y]=(0,o.useState)(""),[f,_]=(0,o.useState)(!1),w=(0,c.X)(u.Ry().shape({})),{register:C,handleSubmit:N,setValue:S,setError:Z,control:k,formState:{errors:F}}=(0,m.cI)({defaultValues:{id:a},resolver:w}),U=N((e=>{_(!0),t((0,d.ou)(e)).unwrap().then((e=>{e&&!0===e.status&&(b(e.message),y(""),t((0,p.eF)())),_(!1)})).catch((e=>{y(e.message),b(""),_(!1)}))}));return(0,x.jsxs)("form",{onSubmit:U,children:[j&&(0,x.jsx)("div",{className:"alert alert-success",children:j}),v&&(0,x.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:v}),(0,x.jsxs)("fieldset",{children:[(0,x.jsx)(m.Qr,{render:()=>(0,x.jsx)(s.Z,{maxFiles:1,onFileUpload:e=>{console.log("Uploaded files - ",e),S("image",e[0])}}),name:"image",control:k}),(0,x.jsx)(n.y,{type:"hidden",name:"id",register:C}),f?(0,x.jsx)(h.Z,{}):(0,x.jsx)(r.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}}}]);