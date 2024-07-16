"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[2258],{63112:(e,a,s)=>{s.d(a,{A:()=>n});var r=s(72348),t=s.n(r),l=(s(4434),s(44414));const n=e=>(0,l.jsx)(l.Fragment,{children:e.showTimeSelectOnly?(0,l.jsx)(t(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"form-control "+e.inputClass,minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,l.jsx)(t(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control "+e.inputClass,maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},80730:(e,a,s)=>{s.d(a,{A:()=>m});var r=s(9950),t=s(42074),l=s(471),n=s(86781),o=s(68459),i=s(36275),c=s(44414);const d=e=>{const[a,s]=(0,r.useState)([]),d=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const s=a<0?0:a,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(s))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Ay,{...e,onDrop:r=>(r=>{var t=r;e.showPreview&&((r||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:d(e.size)}))),(t=a).push(...r),s(t)),e.onFileUpload&&e.onFileUpload(t)})(r),children:a=>{let{getRootProps:s,getInputProps:r}=a;return(0,c.jsx)("div",{className:"dropzone",children:(0,c.jsxs)("div",{className:"dz-message needsclick",...s(),children:[(0,c.jsx)("input",{...r()}),(0,c.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,c.jsx)("h4",{children:e.title?e.title:"Drop Image or Document here or click to upload."}),(0,c.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,c.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(a||[]).map(((r,i)=>(0,c.jsx)(l.A,{className:"mt-1 mb-0 shadow-none border",children:(0,c.jsx)("div",{className:"p-2",children:(0,c.jsxs)(n.A,{className:"align-items-center",children:[r.preview&&(0,c.jsx)(o.A,{className:"col-auto",children:(0,c.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:r.name,src:r.preview})}),!r.preview&&(0,c.jsx)(o.A,{className:"col-auto",children:(0,c.jsx)("div",{className:"avatar-sm",children:(0,c.jsx)("span",{className:"avatar-title bg-primary rounded",children:r.type.split("/")[0]})})}),(0,c.jsxs)(o.A,{className:"ps-0",children:[(0,c.jsx)(t.N_,{to:"#",className:"text-muted fw-bold",children:r.name}),(0,c.jsx)("p",{className:"mb-0",children:(0,c.jsx)("strong",{children:r.formattedSize})})]}),(0,c.jsx)(o.A,{className:"text-end",children:(0,c.jsx)(t.N_,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,c.jsx)("i",{className:"dripicons-cross",onClick:()=>(r=>{const t=[...a];t.splice(r,1),s(t),e.onFileUpload&&e.onFileUpload(t)})(i)})})})]})})},i+"-file")))})]})};d.defaultProps={showPreview:!0};const m=d},41033:(e,a,s)=>{s.d(a,{A:()=>o});s(9950);var r=s(86781),t=s(68459),l=s(81924),n=s(44414);const o=e=>(0,n.jsx)(r.A,{children:(0,n.jsx)(t.A,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{children:(0,n.jsxs)(l.A,{className:"m-0 mb-0",children:[(0,n.jsx)(l.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,n.jsx)(l.A.Item,{active:!0,children:e.label},a):(0,n.jsx)(l.A.Item,{href:e.path,children:e.label},a)))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,a,s)=>{s.d(a,{Z:()=>p,z:()=>n});var r=s(9950),t=s(9449),l=s(44414);const n=e=>{let{defaultValues:a,resolver:s,children:n,onSubmit:o,formClass:i}=e;const c=(0,t.mN)({defaultValues:a,resolver:s}),{handleSubmit:d,register:m,control:p,formState:{errors:h}}=c;return(0,l.jsx)("form",{onSubmit:d(o),className:i,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:h,control:p}}):e)):n})};var o=s(75623),i=s(64055),c=s(48738),d=s.n(c);const m=e=>{let{name:a,placeholder:s,refCallback:t,errors:n,control:c,register:m,className:p}=e;const[h,x]=(0,r.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.A,{className:"mb-0",children:[(0,l.jsx)(i.A.Control,{type:h?"text":"password",placeholder:s,name:a,id:a,as:"input",ref:e=>{t&&t(e)},className:p,isInvalid:!(!n||!n[a]),...m?m(a):{},autoComplete:a}),(0,l.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":h}),"data-password":h?"true":"false",children:(0,l.jsx)("span",{className:"password-eye",onClick:()=>{x(!h)}})})]})})},p=e=>{let{label:a,type:s,name:r,placeholder:t,register:n,errors:o,control:c,className:d,labelClassName:p,containerClass:h,refCallback:x,children:u,rows:j,symbol:b,...f}=e;const N="textarea"===s?"textarea":"select"===s?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===s?(0,l.jsx)("input",{type:s,name:r,id:r,...n?n(r):{},...f,className:d}):(0,l.jsx)(l.Fragment,{children:"password"===s?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.A.Group,{className:h,children:[a?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(i.A.Label,{className:p,children:a})," ",u," "]}):null,(0,l.jsx)(m,{name:r,placeholder:t,refCallback:x,errors:o,register:n,className:d}),o&&o[r]?(0,l.jsx)(i.A.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})}):(0,l.jsx)(l.Fragment,{children:"checkbox"===s||"radio"===s?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.A.Group,{className:h,children:[(0,l.jsx)(i.A.Check,{type:s,label:a,name:r,id:r,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[r]),...n?n(r):{},...f}),o&&o[r]?(0,l.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[r].message}):null]})}):(0,l.jsxs)(i.A.Group,{className:h,children:[a?(0,l.jsx)(i.A.Label,{className:p,children:a}):null,b?(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("span",{className:"input-group-text",id:r,children:b}),(0,l.jsx)(i.A.Control,{type:s,placeholder:t,name:r,id:r,as:N,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[r]),...n?n(r):{},rows:j,...f,autoComplete:r,children:u||null})]}):(0,l.jsx)(i.A.Control,{type:s,placeholder:t,name:r,id:r,as:N,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[r]),...n?n(r):{},rows:j,...f,autoComplete:r,children:u||null}),o&&o[r]?(0,l.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[r].message}):null]})})})})}},72258:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var r=s(9950),t=s(9449),l=s(471),n=s(86781),o=s(68459),i=s(97937),c=(s(48738),s(41033)),d=s(68984),m=s(80730),p=s(63112),h=s(28429),x=s(44414);const u=()=>{const e=(0,t.mN)({defaultValues:{name:"Jasmin Mistry",email:"mistry.jasmin@gmail.com",apartment:10,phone:"9898989898",parking:"234",contact:"9847932934",rent:1233,info:"test",language:"eng",verification:"100023"}}),[a,s]=(0,r.useState)(new Date),[c,u]=(0,r.useState)(!0),j=(0,h.Zp)(),{handleSubmit:b,register:f,control:N,formState:{errors:v}}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(l.A,{children:(0,x.jsxs)(l.A.Body,{children:[(0,x.jsx)("h4",{className:"header-title",children:"My Profile"}),(0,x.jsxs)(n.A,{children:[(0,x.jsx)(o.A,{lg:6,children:(0,x.jsx)("form",{onSubmit:b((()=>{})),className:c?"form-readonly":"",children:(0,x.jsxs)("fieldset",{disabled:!!c||void 0,children:[(0,x.jsx)(d.Z,{label:"Emergency Contact",type:"text",name:"contact",placeholder:"Contact",containerClass:"mb-3",register:f,errors:v,control:N},"contact"),(0,x.jsx)(d.Z,{label:"Name",type:"text",name:"name",containerClass:"mb-3",register:f,errors:v,control:N},"text"),(0,x.jsx)(d.Z,{label:"Phone#",type:"text",name:"phone",placeholder:"phone",containerClass:"mb-3",register:f,errors:v,control:N},"phone"),(0,x.jsx)(d.Z,{label:"Email",type:"email",name:"email",placeholder:"Email",containerClass:"mb-3",register:f,errors:v,control:N},"email"),(0,x.jsx)(d.Z,{label:"Relationship",type:"text",name:"relationship",placeholder:"relationship",containerClass:"mb-3",register:f,errors:v,control:N},"relationship"),(0,x.jsx)(d.Z,{label:"Property",type:"text",name:"apartment",placeholder:"Property",containerClass:"mb-3",register:f,errors:v,control:N},"apartment"),(0,x.jsx)(d.Z,{label:"Parking Space",type:"text",name:"parking",placeholder:"Parking",containerClass:"mb-3",register:f,errors:v,control:N},"parking"),(0,x.jsx)(d.Z,{label:"Monthly Income",type:"text",name:"verification",placeholder:"Contact",containerClass:"mb-3",register:f,errors:v,control:N},"verification"),(0,x.jsx)(d.Z,{label:"Rent Calculation",type:"text",name:"rent",placeholder:"Rent",containerClass:"mb-3",register:f,errors:v,control:N},"rent"),(0,x.jsx)(d.Z,{label:"Language",type:"text",name:"language",placeholder:"Language",containerClass:"mb-3",register:f,errors:v,control:N},"language"),(0,x.jsx)(d.Z,{label:"Special information",type:"textarea",name:"info",rows:"5",containerClass:"mb-3",register:f,errors:v,control:N},"info")]})})}),(0,x.jsxs)(o.A,{lg:6,children:[(0,x.jsx)("div",{className:"text-end pb-2",children:c?(0,x.jsx)(i.A,{variant:"primary",type:"submit",onClick:()=>u(!1),children:"Edit"}):(0,x.jsx)("div",{})}),(0,x.jsx)("form",{children:(0,x.jsxs)("fieldset",{disabled:!!c||void 0,className:c?"form-readonly":"",children:[(0,x.jsx)(m.A,{}),(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)("label",{className:"form-label",children:"Move In Date"})," ",(0,x.jsx)("br",{}),(0,x.jsx)(p.A,{hideAddon:!0,value:a,onChange:e=>{(e=>{e&&s(e)})(e)}})]})]})}),(0,x.jsx)("div",{className:"pt-5",children:(0,x.jsxs)("form",{children:[(0,x.jsx)(d.Z,{label:"Reset Password",type:"password",name:"password",placeholder:"password",containerClass:"mb-3",register:f,errors:v,control:N},"password"),(0,x.jsx)(i.A,{variant:"primary",type:"submit",children:"Reset"})]})})]}),(0,x.jsxs)(o.A,{lg:3,children:[(0,x.jsx)(i.A,{onClick:()=>j(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),c?(0,x.jsx)("div",{}):(0,x.jsx)(i.A,{variant:"primary",type:"submit",children:"Submit"})]})]})]})})})},j=()=>(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)(c.A,{breadCrumbItems:[{label:"Forms",path:"/forms/basic"},{label:"My Account",path:"/forms/basic",active:!0}],title:"My Account"}),(0,x.jsx)(n.A,{children:(0,x.jsx)(o.A,{children:(0,x.jsx)(u,{})})})]})},97937:(e,a,s)=>{s.d(a,{A:()=>d});var r=s(48738),t=s.n(r),l=s(9950),n=s(82111),o=s(44089),i=s(44414);const c=l.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:l="primary",size:c,active:d=!1,disabled:m=!1,className:p,...h}=e;const x=(0,o.oU)(r,"btn"),[u,{tagName:j}]=(0,n.Am)({tagName:s,disabled:m,...h}),b=j;return(0,i.jsx)(b,{...u,...h,ref:a,disabled:m,className:t()(p,x,d&&"active",l&&"".concat(x,"-").concat(l),c&&"".concat(x,"-").concat(c),h.href&&m&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,a,s)=>{s.d(a,{Tj:()=>t,mf:()=>l});var r=s(9950);function t(e,a){let s=0;return r.Children.map(e,(e=>r.isValidElement(e)?a(e,s++):e))}function l(e,a){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===a))}},64055:(e,a,s)=>{s.d(a,{A:()=>O});var r=s(48738),t=s.n(r),l=s(11942),n=s.n(l),o=s(9950),i=s(44414);const c={type:n().string,tooltip:n().bool,as:n().elementType},d=o.forwardRef(((e,a)=>{let{as:s="div",className:r,type:l="valid",tooltip:n=!1,...o}=e;return(0,i.jsx)(s,{...o,ref:a,className:t()(r,"".concat(l,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const m=d;var p=s(14531),h=s(99288),x=s(44089);const u=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,htmlFor:l,...n}=e;const{controlId:c}=(0,o.useContext)(h.A);return s=(0,x.oU)(s,"form-check-label"),(0,i.jsx)("label",{...n,ref:a,htmlFor:l||c,className:t()(r,s)})}));u.displayName="FormCheckLabel";const j=u;var b=s(22890);const f=o.forwardRef(((e,a)=>{let{id:s,bsPrefix:r,bsSwitchPrefix:l,inline:n=!1,reverse:c=!1,disabled:d=!1,isValid:u=!1,isInvalid:f=!1,feedbackTooltip:N=!1,feedback:v,feedbackType:g,className:y,style:w,title:A="",type:C="checkbox",label:F,children:k,as:I="input",...S}=e;r=(0,x.oU)(r,"form-check"),l=(0,x.oU)(l,"form-switch");const{controlId:P}=(0,o.useContext)(h.A),R=(0,o.useMemo)((()=>({controlId:s||P})),[P,s]),T=!k&&null!=F&&!1!==F||(0,b.mf)(k,j),U=(0,i.jsx)(p.A,{...S,type:"switch"===C?"checkbox":C,ref:a,isValid:u,isInvalid:f,disabled:d,as:I});return(0,i.jsx)(h.A.Provider,{value:R,children:(0,i.jsx)("div",{style:w,className:t()(y,T&&r,n&&"".concat(r,"-inline"),c&&"".concat(r,"-reverse"),"switch"===C&&l),children:k||(0,i.jsxs)(i.Fragment,{children:[U,T&&(0,i.jsx)(j,{title:A,children:F}),v&&(0,i.jsx)(m,{type:g,tooltip:N,children:v})]})})})}));f.displayName="FormCheck";const N=Object.assign(f,{Input:p.A,Label:j});s(2241);const v=o.forwardRef(((e,a)=>{let{bsPrefix:s,type:r,size:l,htmlSize:n,id:c,className:d,isValid:m=!1,isInvalid:p=!1,plaintext:u,readOnly:j,as:b="input",...f}=e;const{controlId:N}=(0,o.useContext)(h.A);return s=(0,x.oU)(s,"form-control"),(0,i.jsx)(b,{...f,type:r,size:n,ref:a,readOnly:j,id:c||N,className:t()(d,u?"".concat(s,"-plaintext"):s,l&&"".concat(s,"-").concat(l),"color"===r&&"".concat(s,"-color"),m&&"is-valid",p&&"is-invalid")})}));v.displayName="FormControl";const g=Object.assign(v,{Feedback:m}),y=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...n}=e;return r=(0,x.oU)(r,"form-floating"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...n})}));y.displayName="FormFloating";const w=y;var A=s(584),C=s(90729);const F=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,id:l,...n}=e;const{controlId:c}=(0,o.useContext)(h.A);return s=(0,x.oU)(s,"form-range"),(0,i.jsx)("input",{...n,type:"range",ref:a,className:t()(r,s),id:l||c})}));F.displayName="FormRange";const k=F,I=o.forwardRef(((e,a)=>{let{bsPrefix:s,size:r,htmlSize:l,className:n,isValid:c=!1,isInvalid:d=!1,id:m,...p}=e;const{controlId:u}=(0,o.useContext)(h.A);return s=(0,x.oU)(s,"form-select"),(0,i.jsx)("select",{...p,size:l,ref:a,className:t()(n,s,r&&"".concat(s,"-").concat(r),c&&"is-valid",d&&"is-invalid"),id:m||u})}));I.displayName="FormSelect";const S=I,P=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:l="small",muted:n,...o}=e;return s=(0,x.oU)(s,"form-text"),(0,i.jsx)(l,{...o,ref:a,className:t()(r,s,n&&"text-muted")})}));P.displayName="FormText";const R=P,T=o.forwardRef(((e,a)=>(0,i.jsx)(N,{...e,ref:a,type:"switch"})));T.displayName="Switch";const U=Object.assign(T,{Input:N.Input,Label:N.Label}),D=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,children:l,controlId:n,label:o,...c}=e;return s=(0,x.oU)(s,"form-floating"),(0,i.jsxs)(A.A,{ref:a,className:t()(r,s),controlId:n,...c,children:[l,(0,i.jsx)("label",{htmlFor:n,children:o})]})}));D.displayName="FloatingLabel";const M=D,z={_ref:n().any,validated:n().bool,as:n().elementType},Z=o.forwardRef(((e,a)=>{let{className:s,validated:r,as:l="form",...n}=e;return(0,i.jsx)(l,{...n,ref:a,className:t()(s,r&&"was-validated")})}));Z.displayName="Form",Z.propTypes=z;const O=Object.assign(Z,{Group:A.A,Control:g,Floating:w,Check:N,Switch:U,Label:C.A,Text:R,Range:k,Select:S,FloatingLabel:M})},14531:(e,a,s)=>{s.d(a,{A:()=>d});var r=s(48738),t=s.n(r),l=s(9950),n=s(99288),o=s(44089),i=s(44414);const c=l.forwardRef(((e,a)=>{let{id:s,bsPrefix:r,className:c,type:d="checkbox",isValid:m=!1,isInvalid:p=!1,as:h="input",...x}=e;const{controlId:u}=(0,l.useContext)(n.A);return r=(0,o.oU)(r,"form-check-input"),(0,i.jsx)(h,{...x,ref:a,type:d,id:s||u,className:t()(c,r,m&&"is-valid",p&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,a,s)=>{s.d(a,{A:()=>o});var r=s(9950),t=s(99288),l=s(44414);const n=r.forwardRef(((e,a)=>{let{controlId:s,as:n="div",...o}=e;const i=(0,r.useMemo)((()=>({controlId:s})),[s]);return(0,l.jsx)(t.A.Provider,{value:i,children:(0,l.jsx)(n,{...o,ref:a})})}));n.displayName="FormGroup";const o=n},75623:(e,a,s)=>{s.d(a,{A:()=>h});var r=s(48738),t=s.n(r),l=s(9950),n=s(44089),o=s(14531),i=s(54947),c=s(44414);const d=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="span",...o}=e;return r=(0,n.oU)(r,"input-group-text"),(0,c.jsx)(l,{ref:a,className:t()(s,r),...o})}));d.displayName="InputGroupText";const m=d,p=l.forwardRef(((e,a)=>{let{bsPrefix:s,size:r,hasValidation:o,className:d,as:m="div",...p}=e;s=(0,n.oU)(s,"input-group");const h=(0,l.useMemo)((()=>({})),[]);return(0,c.jsx)(i.A.Provider,{value:h,children:(0,c.jsx)(m,{ref:a,...p,className:t()(d,s,r&&"".concat(s,"-").concat(r),o&&"has-validation")})})}));p.displayName="InputGroup";const h=Object.assign(p,{Text:m,Radio:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.A,{type:"checkbox",...e})})})}}]);