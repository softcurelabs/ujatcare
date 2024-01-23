"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[3989],{95251:(e,r,a)=>{a.d(r,{Z:()=>d});var s=a(47313),l=a(2135),t=a(65832),n=a(63849),o=a(31616),c=a(80614),i=a(46417);const m=e=>{const[r,a]=(0,s.useState)([]),m=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=r<0?0:r,s=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,s)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.ZP,{...e,onDrop:s=>(s=>{var l=s;e.showPreview&&((s||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:m(e.size)}))),(l=[...r]).push(...s),a(l)),e.onFileUpload&&e.onFileUpload(l)})(s),children:e=>{let{getRootProps:r,getInputProps:a}=e;return(0,i.jsx)("div",{className:"dropzone",children:(0,i.jsxs)("div",{className:"dz-message needsclick",...r(),children:[(0,i.jsx)("input",{...a()}),(0,i.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,i.jsx)("h4",{children:"Drop Image here or click to upload."}),(0,i.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,i.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(r||[]).map(((s,c)=>(0,i.jsx)(t.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,i.jsx)("div",{className:"p-2",children:(0,i.jsxs)(n.Z,{className:"align-items-center",children:[s.preview&&(0,i.jsx)(o.Z,{className:"col-auto",children:(0,i.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:s.name,src:s.preview})}),!s.preview&&(0,i.jsx)(o.Z,{className:"col-auto",children:(0,i.jsx)("div",{className:"avatar-sm",children:(0,i.jsx)("span",{className:"avatar-title bg-primary rounded",children:s.type.split("/")[0]})})}),(0,i.jsxs)(o.Z,{className:"ps-0",children:[(0,i.jsx)(l.rU,{to:"#",className:"text-muted fw-bold",children:s.name}),(0,i.jsx)("p",{className:"mb-0",children:(0,i.jsx)("strong",{children:s.formattedSize})})]}),(0,i.jsx)(o.Z,{className:"text-end",children:(0,i.jsx)(l.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,i.jsx)("i",{className:"dripicons-cross",onClick:()=>(s=>{const l=[...r];l.splice(s,1),a(l),e.onFileUpload&&e.onFileUpload(l)})(c)})})})]})})},c+"-file")))})]})};m.defaultProps={showPreview:!0};const d=m},33989:(e,r,a)=>{a.r(r),a.d(r,{default:()=>b});var s=a(47313),l=a(63849),t=a(31616),n=a(65832),o=a(36),c=a(75627),i=a(3463),m=a(62563),d=a(17395),p=a(51450),h=a(95251),u=a(52487),x=a(46417);const b=()=>{const[e,r]=(0,s.useState)(),a=(0,m.X)(i.Ry().shape({name:i.Z_().required("Please enter Project Name"),reference:i.Z_().required("Please enter Project Name"),summary:i.Z_().required("Please enter Project Name"),price:i.Z_().required("Please enter Project Name"),comment:i.Z_().required("Please enter Project Name"),metatitle:i.Z_().required("Please enter Project Name"),metakeywords:i.Z_().required("Please enter Project Name"),metadescription:i.Z_().required("Please enter Project Name")})),b=(0,c.cI)({resolver:a}),{handleSubmit:j,register:g,control:v,formState:{errors:N}}=b;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Z,{breadCrumbItems:[{label:"Ecommerce",path:"/apps/ecommerce/details"},{label:"Add / Edit Product",path:"/apps/ecommerce/details",active:!0}],title:"Add / Edit Product"}),(0,x.jsxs)("form",{onSubmit:j((()=>{})),children:[(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(t.Z,{lg:6,children:(0,x.jsx)(n.Z,{children:(0,x.jsxs)(n.Z.Body,{children:[(0,x.jsx)("h5",{className:"text-uppercase bg-light p-2 mt-0 mb-3",children:"General"}),(0,x.jsx)(u.y,{name:"name",label:"Product Name",placeholder:"e.g : Apple iMac",containerClass:"mb-3",register:g,errors:N,control:v},"productname"),(0,x.jsx)(u.y,{name:"reference",label:"Reference",placeholder:"e.g : Apple iMac",containerClass:"mb-3",register:g,errors:N,control:v},"reference"),(0,x.jsxs)(o.Z.Group,{className:"mb-3",children:[(0,x.jsx)(o.Z.Label,{children:"Product Description"}),(0,x.jsx)("textarea",{})]}),(0,x.jsx)(u.y,{type:"textarea",rows:"3",name:"summary",label:"Product Summary",placeholder:"Please enter summary",containerClass:"mb-3",register:g,errors:N,control:v},"summary"),(0,x.jsxs)(o.Z.Group,{className:"mb-3",children:[(0,x.jsx)(o.Z.Label,{children:"Categories"}),(0,x.jsx)(d.ZP,{className:"react-select react-select-container",classNamePrefix:"react-select",options:[{label:"Shopping",options:[{value:"SH1",label:"Shopping 1"},{value:"SH2",label:"Shopping 2"},{value:"SH3",label:"Shopping 3"}]},{label:"CRM",options:[{value:"CRM1",label:"Crm 1"},{value:"CRM2",label:"Crm 2"},{value:"CRM3",label:"Crm 3"},{value:"CRM4",label:"Crm 4"}]},{label:"eCommerce",options:[{value:"E1",label:"eCommerce 1"},{value:"E2",label:"eCommerce 2"},{value:"E3",label:"eCommerce 3"},{value:"E4",label:"eCommerce 4"}]}],id:"product-category"})]}),(0,x.jsx)(u.y,{name:"price",label:"Price",placeholder:"Enter amount",containerClass:"mb-3",register:g,errors:N,control:v},"price"),(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)("label",{className:"mb-2",children:"Status"}),(0,x.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,x.jsx)(u.y,{type:"radio",name:"radioInline",label:"Online",value:"option1",containerClass:"me-2",defaultChecked:!0,register:g,errors:N,control:v},"inlineRadio1"),(0,x.jsx)(u.y,{type:"radio",name:"radioInline",label:"Offline",value:"option2",containerClass:"me-2",register:g,errors:N,control:v},"inlineRadio2"),(0,x.jsx)(u.y,{type:"radio",name:"radioInline",label:"Draft",value:"option3",containerClass:"me-2",register:g,errors:N,control:v},"inlineRadio3")]})]}),(0,x.jsx)(u.y,{type:"textarea",rows:"3",name:"comment",label:"Comment",placeholder:"Please enter comment",containerClass:"mb-3",register:g,errors:N,control:v},"comment")]})})}),(0,x.jsxs)(t.Z,{lg:6,children:[(0,x.jsx)(n.Z,{children:(0,x.jsxs)(n.Z.Body,{children:[(0,x.jsx)("h5",{className:"text-uppercase mt-0 mb-3 bg-light p-2",children:"Product Images"}),(0,x.jsx)(h.Z,{})]})}),(0,x.jsx)(n.Z,{children:(0,x.jsxs)(n.Z.Body,{children:[(0,x.jsx)("h5",{className:"text-uppercase mt-0 mb-3 bg-light p-2",children:"Meta Data"}),(0,x.jsx)(u.y,{name:"metatitle",label:"Meta title",placeholder:"Enter title",containerClass:"mb-3",register:g,errors:N,control:v},"metatitle"),(0,x.jsx)(u.y,{name:"metakeywords",label:"Meta Keywords",placeholder:"Enter keywords",containerClass:"mb-3",register:g,errors:N,control:v},"metakeywords"),(0,x.jsx)(u.y,{type:"textarea",rows:"5",name:"metadescription",label:"Meta Description",placeholder:"Please enter description",containerClass:"mb-3",register:g,errors:N,control:v},"metadescription")]})})]})]}),(0,x.jsx)(l.Z,{children:(0,x.jsx)(t.Z,{children:(0,x.jsxs)("div",{className:"text-center mb-3",children:[(0,x.jsx)("button",{type:"button",className:"btn w-sm btn-light waves-effect me-1",children:"Cancel"}),(0,x.jsx)("button",{type:"submit",className:"btn w-sm btn-success waves-effect waves-light me-1",children:"Save"}),(0,x.jsx)("button",{type:"button",className:"btn w-sm btn-danger waves-effect waves-light me-1",children:"Delete"})]})})})]})]})}}}]);