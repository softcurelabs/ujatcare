"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[1730],{95251:(e,s,a)=>{a.d(s,{Z:()=>p});var l=a(47313),t=a(2135),r=a(65832),o=a(63849),i=a(31616),n=a(80614),d=a(46417);const c=e=>{const[s,a]=(0,l.useState)([]),c=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=s<0?0:s,l=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,l)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][l]};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.ZP,{...e,onDrop:s=>(s=>{var l=s;e.showPreview&&((s||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:c(e.size)}))),(l=[]).push(...s),a(l)),e.onFileUpload&&e.onFileUpload(l)})(s),children:e=>{let{getRootProps:s,getInputProps:a}=e;return(0,d.jsx)("div",{className:"dropzone",children:(0,d.jsxs)("div",{className:"dz-message needsclick",...s(),children:[(0,d.jsx)("input",{...a()}),(0,d.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),(0,d.jsx)("h4",{children:"Drop Image here or click to upload."}),(0,d.jsx)("span",{className:"text-muted font-13"})]})})}}),e.showPreview&&(0,d.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(s||[]).map(((l,n)=>(0,d.jsx)(r.Z,{className:"mt-1 mb-0 shadow-none border",children:(0,d.jsx)("div",{className:"p-2",children:(0,d.jsxs)(o.Z,{className:"align-items-center",children:[l.preview&&(0,d.jsx)(i.Z,{className:"col-auto",children:(0,d.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:l.name,src:l.preview})}),!l.preview&&(0,d.jsx)(i.Z,{className:"col-auto",children:(0,d.jsx)("div",{className:"avatar-sm",children:(0,d.jsx)("span",{className:"avatar-title bg-primary rounded",children:l.type.split("/")[0]})})}),(0,d.jsxs)(i.Z,{className:"ps-0",children:[(0,d.jsx)(t.rU,{to:"#",className:"text-muted fw-bold",children:l.name}),(0,d.jsx)("p",{className:"mb-0",children:(0,d.jsx)("strong",{children:l.formattedSize})})]}),(0,d.jsx)(i.Z,{className:"text-end",children:(0,d.jsx)(t.rU,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:(0,d.jsx)("i",{className:"dripicons-cross",onClick:()=>(l=>{const t=[...s];t.splice(l,1),a(t),e.onFileUpload&&e.onFileUpload(t)})(n)})})})]})})},n+"-file")))})]})};c.defaultProps={showPreview:!0};const p=c},91730:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var l=a(47313),t=a(63849),r=a(31616),o=a(65832),i=a(51450),n=a(95251),d=a(46417);const c=()=>(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(i.Z,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"Form Upload",path:"/forms/upload",active:!0}],title:"Form Upload"}),(0,d.jsx)(t.Z,{children:(0,d.jsx)(r.Z,{children:(0,d.jsx)(o.Z,{children:(0,d.jsxs)(o.Z.Body,{children:[(0,d.jsx)("h4",{className:"header-title mb-3",children:"Dropzone File Upload"}),(0,d.jsx)("p",{className:"text-muted font-13 m-b-30",children:"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."}),(0,d.jsx)(n.Z,{onFileUpload:e=>{console.log("Uploaded files - ",e)}})]})})})})]})}}]);