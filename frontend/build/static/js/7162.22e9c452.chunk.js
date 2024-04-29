"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[7162],{33856:(e,s,a)=>{a.d(s,{l:()=>l});var r=a(44030),t=a(46417);const l=()=>(0,t.jsx)(r.Z,{animation:"border",role:"status",children:(0,t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},20800:(e,s,a)=>{a.d(s,{Z:()=>n});var r=a(61378),t=a.n(r),l=(a(72632),a(46417));const n=e=>(0,l.jsx)(l.Fragment,{children:e.showTimeSelectOnly?(0,l.jsx)(t(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:s=>e.onChange(s),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"is-invalid",minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,l.jsx)(t(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:s=>e.onChange(s),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control",maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},95251:(e,s,a)=>{a.d(s,{Z:()=>d});var r=a(47313),t=a(2135),l=a(51449),n=a(63849),i=a(31616),c=a(80614),o=a(46417);const m=e=>{const[s,a]=(0,r.useState)([]),m=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=s<0?0:s,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ZP,{...e,onDrop:r=>(r=>{var t=r;e.showPreview&&((r||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:m(e.size)}))),(t=s).push(...r),a(t)),e.onFileUpload&&e.onFileUpload(t)})(r),children:s=>{let{getRootProps:a,getInputProps:r}=s;return(0,o.jsx)("div",{className:"dropzone",children:(0,o.jsxs)("div",{className:"dz-message needsclick",...a(),children:[(0,o.jsx)("input",{...r()}),(0,o.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,o.jsx)("h4",{children:e.title?e.title:"Drop Image or Document here or click to upload."}),(0,o.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,o.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((r,c)=>(0,o.jsx)(l.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,o.jsx)("div",{className:"p-2",children:(0,o.jsxs)(n.Z,{className:"align-items-center",children:[r.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:r.name,src:r.preview})}),!r.preview&&(0,o.jsx)(i.Z,{className:"col-auto",children:(0,o.jsx)("div",{className:"avatar-sm",children:(0,o.jsx)("span",{className:"avatar-title bg-primary rounded",children:r.type.split("/")[0]})})}),(0,o.jsxs)(i.Z,{className:"ps-0",children:[(0,o.jsx)(t.rU,{to:"#",className:"text-muted fw-bold",children:r.name}),(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("strong",{children:r.formattedSize})})]}),(0,o.jsx)(i.Z,{className:"text-end",children:(0,o.jsx)(t.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,o.jsx)("i",{className:"dripicons-cross",onClick:()=>(r=>{const t=[...s];t.splice(r,1),a(t),e.onFileUpload&&e.onFileUpload(t)})(c)})})})]})})},c+"-file")))})]})};m.defaultProps={showPreview:!0};const d=m},20192:(e,s,a)=>{a.d(s,{Z:()=>i});a(47313);var r=a(63849),t=a(31616),l=a(52198),n=a(46417);const i=e=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(t.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(l.Z,{className:"m-0",children:[(0,n.jsx)(l.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,s)=>e.active?(0,n.jsx)(l.Z.Item,{active:!0,children:e.label},s):(0,n.jsx)(l.Z.Item,{href:e.path,children:e.label},s)))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,s,a)=>{a.d(s,{y:()=>h,J:()=>n});var r=a(47313),t=a(75627),l=a(46417);const n=e=>{let{defaultValues:s,resolver:a,children:n,onSubmit:i,formClass:c}=e;const o=(0,t.cI)({defaultValues:s,resolver:a}),{handleSubmit:m,register:d,control:h,formState:{errors:x}}=o;return(0,l.jsx)("form",{onSubmit:m(i),className:c,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:d,key:e.props.name,errors:x,control:h}}):e)):n})};var i=a(38394),c=a(88178),o=a(72884),m=a.n(o);const d=e=>{let{name:s,placeholder:a,refCallback:t,errors:n,control:o,register:d,className:h}=e;const[x,p]=(0,r.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.Z,{className:"mb-0",children:[(0,l.jsx)(c.Z.Control,{type:x?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:e=>{t&&t(e)},className:h,isInvalid:!(!n||!n[s]),...d?d(s):{},autoComplete:s}),(0,l.jsx)("div",{className:m()("input-group-text","input-group-password",{"show-password":x}),"data-password":x?"true":"false",children:(0,l.jsx)("span",{className:"password-eye",onClick:()=>{p(!x)}})})]})})},h=e=>{let{label:s,type:a,name:r,placeholder:t,register:n,errors:i,control:o,className:m,labelClassName:h,containerClass:x,refCallback:p,children:u,rows:j,...g}=e;const b="textarea"===a?"textarea":"select"===a?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===a?(0,l.jsx)("input",{type:a,name:r,id:r,...n?n(r):{},...g,className:m}):(0,l.jsx)(l.Fragment,{children:"password"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z.Group,{className:x,children:[s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z.Label,{className:h,children:s})," ",u," "]}):null,(0,l.jsx)(d,{name:r,placeholder:t,refCallback:p,errors:i,register:n,className:m}),i&&i[r]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[r].message}):null]})}):(0,l.jsx)(l.Fragment,{children:"checkbox"===a||"radio"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.Z.Group,{className:x,children:[(0,l.jsx)(c.Z.Check,{type:a,label:s,name:r,id:r,ref:e=>{p&&p(e)},className:m,isInvalid:!(!i||!i[r]),...n?n(r):{},...g}),i&&i[r]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",children:i[r].message}):null]})}):(0,l.jsxs)(c.Z.Group,{className:x,children:[s?(0,l.jsx)(c.Z.Label,{className:h,children:s}):null,(0,l.jsx)(c.Z.Control,{type:a,placeholder:t,name:r,id:r,as:b,ref:e=>{p&&p(e)},className:m,isInvalid:!(!i||!i[r]),...n?n(r):{},rows:j,...g,autoComplete:r,children:u||null}),i&&i[r]?(0,l.jsx)(c.Z.Control.Feedback,{type:"invalid",children:i[r].message}):null]})})})})}},5825:(e,s,a)=>{a.d(s,{d:()=>Z});var r=a(95251),t=a(41709),l=a(93298),n=a(52487),i=a(56352),c=a(24511),o=a(47313),m=a(62563),d=a(75627),h=a(33689),x=a(3463),p=a(85592),u=a(33856),j=a(51449),g=a(63849),b=a(31616),f=a(2135),N=a(32335),y=a(46417);const v=e=>{let{documents:s,type:a,refresh:r}=e;const t=(0,i.I0)();return(0,y.jsx)(y.Fragment,{children:s.map((e=>e.type===a?(0,y.jsx)("div",{children:(0,y.jsx)(j.Z,{className:"mt-1 mb-1 shadow-none border",children:(0,y.jsx)("div",{className:"p-2",children:(0,y.jsxs)(g.Z,{className:"align-items-center",children:[(0,y.jsx)(b.Z,{className:"ps-0 ms-2",children:(0,y.jsx)(f.rU,{to:"".concat(N.Z.BASE_URL,"/").concat(e.document_path),className:"text-muted fw-bold",target:"_blank",children:e.document_name})}),(0,y.jsx)(b.Z,{className:"text-end",children:(0,y.jsx)(f.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,y.jsx)("i",{className:"dripicons-cross",onClick:()=>{t((0,h.Jt)(e.id)).unwrap().then((e=>{r()}))}})})})]})})},e.id+"-file")}):(0,y.jsx)(y.Fragment,{})))})},Z=e=>{let{id:s}=e;const a=(0,i.I0)(),[j,g]=(0,o.useState)([]),{t:b}=(0,c.$)(),[f,N]=(0,o.useState)(""),[Z,_]=(0,o.useState)(""),[w,S]=(0,o.useState)(!1),C=(0,m.X)(x.Ry().shape({}));(0,o.useEffect)((()=>{a((0,h.fB)(s)).unwrap().then((e=>{console.log(e.user),g(e.user.documents)}))}),[]);const k=(0,o.useCallback)((()=>{a((0,h.fB)(s)).unwrap().then((e=>{g(e.user.documents)}))}),[]),{register:F,handleSubmit:D,setValue:I,setError:U,control:B,formState:{errors:E}}=(0,d.cI)({defaultValues:{user_id:s},resolver:C}),T=D((e=>{S(!0),a((0,h.Ap)(e)).unwrap().then((e=>{e&&!0===e.status&&(N(e.message),_(""),a((0,p.eF)())),S(!1)})).catch((e=>{_(e.message),N(""),S(!1)}))}));return(0,y.jsxs)("form",{onSubmit:T,children:[f&&(0,y.jsx)("div",{className:"alert alert-success",children:f}),Z&&(0,y.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:Z}),(0,y.jsxs)("fieldset",{children:[(0,y.jsx)(t.Z,{children:"Licence"}),(0,y.jsx)(v,{documents:j,type:0,refresh:k}),(0,y.jsx)(d.Qr,{render:()=>(0,y.jsx)(r.Z,{maxFiles:2,title:"Drag or upload Licence",onFileUpload:e=>{I("licence",e)}}),name:"licence",control:B}),(0,y.jsx)(t.Z,{children:"Passport"}),(0,y.jsx)(v,{documents:j,type:1,refresh:k}),(0,y.jsx)(d.Qr,{render:()=>(0,y.jsx)(r.Z,{maxFiles:2,title:"Upload passport",onFileUpload:e=>{I("passport",e)}}),name:"passport",control:B}),(0,y.jsx)(t.Z,{children:"Other Documents"}),(0,y.jsx)(v,{documents:j,type:2,refresh:k}),(0,y.jsx)(d.Qr,{render:()=>(0,y.jsx)(r.Z,{maxFiles:2,title:"Drag or click Other documents",onFileUpload:e=>{I("other_document",e)}}),name:"other_document",control:B}),(0,y.jsx)(t.Z,{children:"Document"}),(0,y.jsx)(v,{documents:j,type:3,refresh:k}),(0,y.jsx)(d.Qr,{render:()=>(0,y.jsx)(r.Z,{maxFiles:2,title:"Drag or click documents",onFileUpload:e=>{I("documents",e)}}),name:"documents",control:B}),(0,y.jsx)(n.y,{type:"hidden",name:"user_id",register:F}),w?(0,y.jsx)(u.l,{}):(0,y.jsx)(l.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}},87162:(e,s,a)=>{a.r(s),a.d(s,{default:()=>C});var r=a(47313),t=a(75627),l=a(63849),n=a(31616),i=a(51449),c=a(44709),o=a(88178),m=a(93298),d=a(20192),h=a(52487),x=a(20800),p=a(58467),u=a(33689),j=a(56352),g=a(62563),b=a(3463),f=a(20253),N=a(16752),y=a(53877),v=a(32335),Z=a(33856),_=a(5825),w=a(46417);const S=()=>{const e=(0,j.I0)(),[s,a]=(0,r.useState)(""),[d,S]=(0,r.useState)(""),[C,k]=(0,r.useState)(!1),F=(0,g.X)(b.Ry().shape({})),{flats:D}=(0,j.v9)((e=>({flats:e.Flat.flats}))),[I,U]=(0,r.useState)(new Date),[B,E]=(0,r.useState)(new Date),[T,L]=(0,r.useState)(null),[P,R]=(0,r.useState)(),O=(0,p.s0)(),A=(0,p.UO)(),{register:M,handleSubmit:V,setValue:z,setError:Q,formState:{errors:Y}}=(0,t.cI)({defaultValues:{unit:10,phone_number:"9601277532",parking_space:120,emergency_contact_number:"9601277532",emergency_contact_name:"jasmin",income_verification:230,rent_calculation:123,language:"eng",special_instruction:null},resolver:F}),G=V((s=>{k(!0),e((0,u.yT)(s)).unwrap().then((e=>{e&&!0===e.status&&(a(e.message),window.scrollTo({top:0,behavior:"smooth"})),k(!1)})).catch((e=>{for(var s in e.errors)try{Q(s,{message:e.errors[s].toString()})}catch(a){}k(!1)}))}));return(0,r.useEffect)((()=>{e((0,f.i)()).unwrap().then((()=>{e((0,u.fB)(A.id)).unwrap().then((e=>{R(e),v.Z.BASE_URL&&e.image_path&&L("".concat(v.Z.BASE_URL,"/").concat(e.image_path)),z("id",e.user.id),z("unit",e.unit),z("name",e.user.name),z("email",e.user.email),z("phone_number",e.phone_number),e.user.flat&&z("flat_id",e.user.flat.flat_id),z("parking_space",e.parking_space),z("locker",e.locker),z("emergency_contact_number",e.emergency_contact_number),z("emergency_contact_name",e.emergency_contact_name),z("income_verification",e.income_verification),z("rent_calculation",e.rent_calculation),z("special_instruction",e.special_instruction),z("relationship",e.relationship),z("birth_date",e.birth_date),z("staff_notes",e.staff_notes),z("fob",e.fob),z("movein_date",e.movein_date),U(new Date(e.movein_date)),E(new Date(e.birth_date))})).catch((e=>S(e)))}))}),[]),(0,w.jsxs)(w.Fragment,{children:[s&&(0,w.jsx)("div",{className:"alert alert-success",children:s}),d&&(0,w.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:d}),(0,w.jsxs)(l.Z,{className:"gutters",children:[(0,w.jsx)(n.Z,{lg:3,xl:3,md:12,children:(0,w.jsxs)(i.Z,{children:[" ",(0,w.jsxs)(c.Z,{children:[(0,w.jsxs)("div",{className:"text-center",children:[T&&(0,w.jsx)("img",{src:T,className:"rounded-4",alt:"{}",width:125}),(0,w.jsx)("h5",{className:"text-dark",children:null===P||void 0===P?void 0:P.user.name}),(0,w.jsx)("h6",{className:"text-muted",children:null===P||void 0===P?void 0:P.user.email})]}),(0,w.jsx)(y.z,{id:A.id}),(0,w.jsx)("div",{className:"mt-4",children:P&&(0,w.jsx)(N.t,{email:P.email})}),(0,w.jsx)("div",{className:"mt-2",children:(0,w.jsx)(_.d,{id:A.id})})]})]})}),(0,w.jsx)(n.Z,{lg:9,xl:9,md:12,children:(0,w.jsx)(i.Z,{children:(0,w.jsx)(c.Z,{children:(0,w.jsxs)("form",{onSubmit:G,children:[(0,w.jsxs)(l.Z,{className:"gutters",children:[(0,w.jsx)(n.Z,{xl:12,children:(0,w.jsx)("h5",{className:"text-primary",children:"Personal information"})}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Name",type:"text",name:"name",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:M,errors:Y},"name")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Phone#",type:"text",name:"phone_number",placeholder:"phone_number",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"phone_number")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Email",type:"email",name:"email",placeholder:"Email",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:M,errors:Y,disabled:!0},"email")}),(0,w.jsxs)(n.Z,{xl:6,children:[(0,w.jsx)(h.y,{type:"hidden",register:M,className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"me-2",name:"birth_date"},"birth_date"),(0,w.jsxs)("div",{className:"mb-3",children:[(0,w.jsx)("label",{className:"form-label",children:"Birth Date"})," ",(0,w.jsx)("br",{}),(0,w.jsx)(x.Z,{hideAddon:!0,showTimeSelect:!1,maxDate:new Date,value:B,onChange:e=>{E(e),z("birth_date",e.toLocaleString("sv-SE"))}}),Y&&Y.birth_date?(0,w.jsx)(o.Z.Control.Feedback,{type:"invalid",children:Y.birth_date.message}):null]})]})]}),(0,w.jsxs)(l.Z,{className:"gutters border border-success rounded",children:[(0,w.jsx)(n.Z,{xl:12,children:(0,w.jsx)("h5",{className:"text-primary",children:"Emergency information"})}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Emergency Contact",type:"text",name:"emergency_contact_number",placeholder:"Emergency Contact Number",className:"form-control-sm fs-5",containerClass:"mb-3",register:M,errors:Y},"emergency_contact_number")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Emergency Contact Name",type:"text",name:"emergency_contact_name",placeholder:"Emergency Contact Name",className:"form-control-sm fs-5",containerClass:"mb-3 ",register:M,errors:Y},"emergency_contact_name")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Relationship",type:"text",name:"relationship",placeholder:"relationship",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"relationship")})]}),(0,w.jsxs)(l.Z,{className:"gutters",children:[(0,w.jsx)(n.Z,{xl:12,children:(0,w.jsx)("h5",{className:"text-primary",children:"Tenant information"})}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Unit",type:"text",name:"unit",placeholder:"Unit",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"unit")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{type:"select",label:"Apartment#",name:"flat_id",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y,children:D.length&&D.map((e=>(0,w.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,w.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))})}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Parking Space",type:"text",name:"parking_space",placeholder:"Parking",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:M,errors:Y},"parking_space")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Locker#",type:"text",name:"locker",placeholder:"Locker",className:"form-control-sm fs-5",containerClass:"mb-3",register:M,errors:Y},"locker")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Income Verification",type:"text",name:"income_verification",placeholder:"Contact",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"income_verification")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Rent Calculation",type:"text",name:"rent_calculation",placeholder:"Rent",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"rent_calculation")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Language",type:"text",name:"language",placeholder:"Language",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"language")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"FOB",type:"text",name:"fob",placeholder:"FOB",className:"form-control-sm fs-5 ",containerClass:"mb-3 ",register:M,errors:Y},"fob")}),(0,w.jsxs)(n.Z,{xl:6,children:[(0,w.jsx)(h.y,{type:"hidden",register:M,className:"form-control-sm fs-5 ",containerClass:"mb-3 input-group",labelClassName:"me-2",name:"movein_date"},"movein_date"),(0,w.jsxs)("div",{className:"mb-3",children:[(0,w.jsx)("label",{className:"form-label",children:"Move In Date"})," ",(0,w.jsx)("br",{}),(0,w.jsx)(x.Z,{hideAddon:!0,showTimeSelect:!1,value:I,onChange:e=>{(e=>{e&&U(e)})(e),z("movein_date",e.toLocaleString("sv-SE"))}}),Y&&Y.movein_date?(0,w.jsx)(o.Z.Control.Feedback,{type:"invalid",children:Y.movein_date.message}):null]})]}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Special information",type:"textarea",name:"special_instruction",rows:"5",className:"form-control-sm fs-5 ",containerClass:"mb-3",register:M,errors:Y},"special_instruction")}),(0,w.jsx)(n.Z,{xl:6,children:(0,w.jsx)(h.y,{label:"Staff Note",type:"textarea",name:"staff_notes",rows:"5",className:"form-control-sm fs-5",containerClass:"mb-3",register:M,errors:Y},"staff_notes")})]}),(0,w.jsx)(m.Z,{onClick:()=>O(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),C?(0,w.jsx)(Z.l,{}):(0,w.jsx)(m.Z,{variant:"primary",type:"submit",children:"Submit"})]})})})})]})]})},C=()=>(0,w.jsxs)(r.Fragment,{children:[(0,w.jsx)(d.Z,{breadCrumbItems:[{label:"Tenants",path:"/user"},{label:"My Account",path:"/user",active:!0}],title:"My Account"}),(0,w.jsx)(l.Z,{children:(0,w.jsx)(n.Z,{children:(0,w.jsx)(S,{})})})]})},16752:(e,s,a)=>{a.d(s,{t:()=>x});var r=a(93298),t=a(56352),l=a(24511),n=a(47313),i=a(62563),c=a(75627),o=a(3463),m=a(33856),d=a(85592),h=a(46417);const x=e=>{let{email:s}=e;const a=(0,t.I0)(),{t:x}=(0,l.$)(),[p,u]=(0,n.useState)(""),[j,g]=(0,n.useState)(""),[b,f]=(0,n.useState)(!1),N=(0,i.X)(o.Ry().shape({})),{register:y,handleSubmit:v,setError:Z,formState:{errors:_}}=(0,c.cI)({defaultValues:{},resolver:N}),w=v((()=>{f(!0),a((0,d.j$)(s)).unwrap().then((e=>{e&&!0===e.status&&u(e.message),f(!1)})).catch((e=>{g(e.message),f(!1)}))}));return(0,h.jsxs)("form",{onSubmit:w,children:[p&&(0,h.jsx)("div",{className:"alert alert-success",children:p}),j&&(0,h.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:j}),b?(0,h.jsx)(m.l,{}):(0,h.jsx)(r.Z,{variant:"primary",type:"submit",children:"Reset Password"})]})}},53877:(e,s,a)=>{a.d(s,{z:()=>u});var r=a(95251),t=a(93298),l=a(52487),n=a(56352),i=a(47313),c=a(62563),o=a(75627),m=a(33689),d=a(3463),h=a(85592),x=a(33856),p=a(46417);const u=e=>{let{id:s}=e;const a=(0,n.I0)(),[u,j]=(0,i.useState)(""),[g,b]=(0,i.useState)(""),[f,N]=(0,i.useState)(!1),y=(0,c.X)(d.Ry().shape({})),{register:v,handleSubmit:Z,setValue:_,control:w}=(0,o.cI)({defaultValues:{id:s},resolver:y}),S=Z((e=>{N(!0),a((0,m.ou)(e)).unwrap().then((e=>{e&&!0===e.status&&(j(e.message),b(""),a((0,h.eF)())),N(!1)})).catch((e=>{b(e.message),j(""),N(!1)}))}));return(0,p.jsxs)("form",{onSubmit:S,children:[u&&(0,p.jsx)("div",{className:"alert alert-success",children:u}),g&&(0,p.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:g}),(0,p.jsxs)("fieldset",{className:"mt-4",children:[(0,p.jsx)(o.Qr,{render:()=>(0,p.jsx)(r.Z,{title:"Drag Profile pic or click here to upload",maxFiles:1,onFileUpload:e=>{_("image",e[0])}}),name:"image",control:w}),(0,p.jsx)(l.y,{type:"hidden",name:"id",register:v}),f?(0,p.jsx)(x.l,{}):(0,p.jsx)(t.Z,{type:"submit",className:"waves-effect waves-light me-1",children:"Submit"})]})]})}}}]);