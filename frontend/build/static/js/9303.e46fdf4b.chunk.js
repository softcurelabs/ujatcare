"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9303],{41033:(e,s,a)=>{a.d(s,{A:()=>o});a(9950);var t=a(86781),l=a(68459),r=a(81924),n=a(44414);const o=e=>(0,n.jsx)(t.A,{children:(0,n.jsx)(l.A,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{children:(0,n.jsxs)(r.A,{className:"m-0 mb-0",children:[(0,n.jsx)(r.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,s)=>e.active?(0,n.jsx)(r.A.Item,{active:!0,children:e.label},s):(0,n.jsx)(r.A.Item,{href:e.path,children:e.label},s)))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,s,a)=>{a.d(s,{Z:()=>u,z:()=>n});var t=a(9950),l=a(9449),r=a(44414);const n=e=>{let{defaultValues:s,resolver:a,children:n,onSubmit:o,formClass:i}=e;const c=(0,l.mN)({defaultValues:s,resolver:a}),{handleSubmit:d,register:m,control:u,formState:{errors:p}}=c;return(0,r.jsx)("form",{onSubmit:d(o),className:i,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?t.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:p,control:u}}):e)):n})};var o=a(75623),i=a(64055),c=a(48738),d=a.n(c);const m=e=>{let{name:s,placeholder:a,refCallback:l,errors:n,control:c,register:m,className:u}=e;const[p,x]=(0,t.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.A,{className:"mb-0",children:[(0,r.jsx)(i.A.Control,{type:p?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:e=>{l&&l(e)},className:u,isInvalid:!(!n||!n[s]),...m?m(s):{},autoComplete:s}),(0,r.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,r.jsx)("span",{className:"password-eye",onClick:()=>{x(!p)}})})]})})},u=e=>{let{label:s,type:a,name:t,placeholder:l,register:n,errors:o,control:c,className:d,labelClassName:u,containerClass:p,refCallback:x,children:h,rows:f,symbol:b,...v}=e;const N="textarea"===a?"textarea":"select"===a?"select":"input";return(0,r.jsx)(r.Fragment,{children:"hidden"===a?(0,r.jsx)("input",{type:a,name:t,id:t,...n?n(t):{},...v,className:d}):(0,r.jsx)(r.Fragment,{children:"password"===a?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.A.Group,{className:p,children:[s?(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(i.A.Label,{className:u,children:s})," ",h," "]}):null,(0,r.jsx)(m,{name:t,placeholder:l,refCallback:x,errors:o,register:n,className:d}),o&&o[t]?(0,r.jsx)(i.A.Control.Feedback,{type:"invalid",className:"d-block",children:o[t].message}):null]})}):(0,r.jsx)(r.Fragment,{children:"checkbox"===a||"radio"===a?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.A.Group,{className:p,children:[(0,r.jsx)(i.A.Check,{type:a,label:s,name:t,id:t,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[t]),...n?n(t):{},...v}),o&&o[t]?(0,r.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[t].message}):null]})}):(0,r.jsxs)(i.A.Group,{className:p,children:[s?(0,r.jsx)(i.A.Label,{className:u,children:s}):null,b?(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("span",{className:"input-group-text",id:t,children:b}),(0,r.jsx)(i.A.Control,{type:a,placeholder:l,name:t,id:t,as:N,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[t]),...n?n(t):{},rows:f,...v,autoComplete:t,children:h||null})]}):(0,r.jsx)(i.A.Control,{type:a,placeholder:l,name:t,id:t,as:N,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[t]),...n?n(t):{},rows:f,...v,autoComplete:t,children:h||null}),o&&o[t]?(0,r.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[t].message}):null]})})})})}},49172:(e,s,a)=>{a.d(s,{A:()=>c});a(9950);var t=a(90706),l=a(28339),r=a(36404),n=a(79947),o=a(41615),i=a(44414);const c=e=>{let{onDateClick:s,onEventClick:a,onDrop:c,onEventDrop:d,events:m}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{id:"calendar",children:(0,i.jsx)(t.Ay$,{initialView:"dayGridMonth",plugins:[l.Ay,r.Ay,n.A,o.A],handleWindowResize:!0,themeSystem:"bootstrap",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Prev",next:"Next"},headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,selectable:!0,droppable:!0,events:m,dateClick:e=>{s(e)},eventClick:e=>{a(e)},drop:e=>{c(e)},eventDrop:e=>{d(e)}})})})}},99303:(e,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(9950),l=a(86781),r=a(68459),n=a(471),o=(a(90706),a(36404)),i=a(41033),c=a(49172),d=a(9449),m=a(44268),u=a(97937),p=a(60666),x=a(26473),h=a(68984),f=a(44414);const b=e=>{let{isOpen:s,onClose:a,isEditable:n,eventData:o,onRemoveEvent:i,onUpdateEvent:c,onAddEvent:b}=e;const[v]=(0,t.useState)(o),N=(0,x.t)(p.Ik().shape({title:p.Yj().required("Please enter event name"),className:p.Yj().required("Please select category")})),j=(0,d.mN)({defaultValues:{title:v.title,className:v.className?String(v.className):"bg-danger"},resolver:N}),{handleSubmit:y,register:g,control:A,formState:{errors:w}}=j;return(0,f.jsxs)(m.A,{show:s,onHide:a,children:[(0,f.jsx)(m.A.Header,{className:"py-3 px-4 border-bottom-0",closeButton:!0,children:(0,f.jsx)(m.A.Title,{as:"h5",id:"modal-title",children:n?"Edit Event":"Add New Event"})}),(0,f.jsx)(m.A.Body,{className:"px-4 pb-4 pt-0",children:(0,f.jsxs)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:y((e=>{n?c(e):b(e)})),children:[(0,f.jsxs)(l.A,{children:[(0,f.jsx)(r.A,{sm:12,children:(0,f.jsx)(h.Z,{type:"text",label:"Event Name",name:"title",className:"form-control",placeholder:"Insert Event Name",containerClass:"mb-3",register:g,errors:w,control:A},"title")}),(0,f.jsx)(r.A,{sm:12,children:(0,f.jsxs)(h.Z,{type:"select",label:"Category",name:"className",containerClass:"mb-3",register:g,errors:w,control:A,children:[(0,f.jsx)("option",{value:"bg-danger",children:"Danger"}),(0,f.jsx)("option",{value:"bg-success",children:"Success"}),(0,f.jsx)("option",{value:"bg-primary",children:"Primary"}),(0,f.jsx)("option",{value:"bg-info",children:"Info"}),(0,f.jsx)("option",{value:"bg-dark",children:"Dark"}),(0,f.jsx)("option",{value:"bg-warning",children:"Warning"})]},"className")})]}),(0,f.jsxs)(l.A,{className:"mt-2",children:[(0,f.jsx)(r.A,{xs:4,children:n?(0,f.jsx)(u.A,{variant:"danger",onClick:i,children:"Delete"}):null}),(0,f.jsxs)(r.A,{xs:8,className:"text-end",children:[(0,f.jsx)(u.A,{className:"btn btn-light me-1",onClick:a,children:"Close"}),(0,f.jsx)(u.A,{variant:"success",type:"submit",className:"btn btn-success",children:"Save"})]})]})]})})]})};var v=a(49462),N=a(75733);const j=()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{id:"external-events"})}),y=()=>{const[e,s]=(0,t.useState)(!1),a=()=>{s(!1),g({}),w({})},d=()=>s(!0),[m,u]=(0,t.useState)(!1),p=(0,N.j)(),[x,h]=(0,t.useState)([]),[y,g]=(0,t.useState)({}),[A,w]=(0,t.useState)({});(0,t.useEffect)((()=>{let e=document.getElementById("external-events");new o.sx(e,{itemSelector:".external-event"})}),[]);return(0,t.useEffect)((()=>{p((0,v.v6)()).unwrap().then((e=>{h(e)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.A,{breadCrumbItems:[{label:"Apps",path:"/apps/calendar"},{label:"Calendar",path:"/apps/calendar",active:!0}],title:"Calendar"}),(0,f.jsx)(l.A,{children:(0,f.jsx)(r.A,{children:(0,f.jsx)(n.A,{children:(0,f.jsx)(n.A.Body,{children:(0,f.jsxs)(l.A,{children:[(0,f.jsx)(r.A,{lg:3,children:(0,f.jsx)(j,{})}),(0,f.jsx)(r.A,{lg:12,children:(0,f.jsx)(c.A,{onDateClick:e=>{w(e),d(),u(!1)},onEventClick:e=>{const s={id:String(e.event.id),title:e.event.title,className:e.event.classNames[0]};g(s),u(!0),d()},onDrop:e=>{const s=e,a=s.draggedEl.title;if(null==a);else{let e={id:String(x.length+1),title:a,start:s?s.dateStr:new Date,className:s.draggedEl.attributes["data-class"].value};const t=[...x];t.push(e),h(t)}},onEventDrop:e=>{const s=[...x],a=s.findIndex((s=>s.id===e.event.id));s[a].title=e.event.title,s[a].className=e.event.classNames,s[a].start=e.event.start,s[a].end=e.event.end,h(s),u(!1)},events:x})})]})})})})}),e?(0,f.jsx)(b,{isOpen:e,onClose:a,isEditable:m,eventData:y,onUpdateEvent:e=>{const s=[...x],t=s.findIndex((e=>e.id===y.id));s[t].title=e.title,s[t].className=e.className,h(s),a(),u(!1)},onRemoveEvent:()=>{var e=[...x];const s=e.findIndex((e=>e.id===y.id));e.splice(s,1),h(e),a()},onAddEvent:e=>{const s=[...x],t={id:String(s.length+1),title:e.title,start:0!==Object.keys(A).length?A.date:new Date,className:e.className};s.push(t),h(s),a()}}):null]})}},97937:(e,s,a)=>{a.d(s,{A:()=>d});var t=a(48738),l=a.n(t),r=a(9950),n=a(82111),o=a(44089),i=a(44414);const c=r.forwardRef(((e,s)=>{let{as:a,bsPrefix:t,variant:r="primary",size:c,active:d=!1,disabled:m=!1,className:u,...p}=e;const x=(0,o.oU)(t,"btn"),[h,{tagName:f}]=(0,n.Am)({tagName:a,disabled:m,...p}),b=f;return(0,i.jsx)(b,{...h,...p,ref:s,disabled:m,className:l()(u,x,d&&"active",r&&"".concat(x,"-").concat(r),c&&"".concat(x,"-").concat(c),p.href&&m&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,s,a)=>{a.d(s,{Tj:()=>l,mf:()=>r});var t=a(9950);function l(e,s){let a=0;return t.Children.map(e,(e=>t.isValidElement(e)?s(e,a++):e))}function r(e,s){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===s))}},64055:(e,s,a)=>{a.d(s,{A:()=>z});var t=a(48738),l=a.n(t),r=a(11942),n=a.n(r),o=a(9950),i=a(44414);const c={type:n().string,tooltip:n().bool,as:n().elementType},d=o.forwardRef(((e,s)=>{let{as:a="div",className:t,type:r="valid",tooltip:n=!1,...o}=e;return(0,i.jsx)(a,{...o,ref:s,className:l()(t,"".concat(r,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const m=d;var u=a(14531),p=a(99288),x=a(44089);const h=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,htmlFor:r,...n}=e;const{controlId:c}=(0,o.useContext)(p.A);return a=(0,x.oU)(a,"form-check-label"),(0,i.jsx)("label",{...n,ref:s,htmlFor:r||c,className:l()(t,a)})}));h.displayName="FormCheckLabel";const f=h;var b=a(22890);const v=o.forwardRef(((e,s)=>{let{id:a,bsPrefix:t,bsSwitchPrefix:r,inline:n=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:v=!1,feedbackTooltip:N=!1,feedback:j,feedbackType:y,className:g,style:A,title:w="",type:C="checkbox",label:k,children:I,as:F="input",...E}=e;t=(0,x.oU)(t,"form-check"),r=(0,x.oU)(r,"form-switch");const{controlId:R}=(0,o.useContext)(p.A),S=(0,o.useMemo)((()=>({controlId:a||R})),[R,a]),P=!I&&null!=k&&!1!==k||(0,b.mf)(I,f),T=(0,i.jsx)(u.A,{...E,type:"switch"===C?"checkbox":C,ref:s,isValid:h,isInvalid:v,disabled:d,as:F});return(0,i.jsx)(p.A.Provider,{value:S,children:(0,i.jsx)("div",{style:A,className:l()(g,P&&t,n&&"".concat(t,"-inline"),c&&"".concat(t,"-reverse"),"switch"===C&&r),children:I||(0,i.jsxs)(i.Fragment,{children:[T,P&&(0,i.jsx)(f,{title:w,children:k}),j&&(0,i.jsx)(m,{type:y,tooltip:N,children:j})]})})})}));v.displayName="FormCheck";const N=Object.assign(v,{Input:u.A,Label:f});a(2241);const j=o.forwardRef(((e,s)=>{let{bsPrefix:a,type:t,size:r,htmlSize:n,id:c,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:h,readOnly:f,as:b="input",...v}=e;const{controlId:N}=(0,o.useContext)(p.A);return a=(0,x.oU)(a,"form-control"),(0,i.jsx)(b,{...v,type:t,size:n,ref:s,readOnly:f,id:c||N,className:l()(d,h?"".concat(a,"-plaintext"):a,r&&"".concat(a,"-").concat(r),"color"===t&&"".concat(a,"-color"),m&&"is-valid",u&&"is-invalid")})}));j.displayName="FormControl";const y=Object.assign(j,{Feedback:m}),g=o.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:r="div",...n}=e;return t=(0,x.oU)(t,"form-floating"),(0,i.jsx)(r,{ref:s,className:l()(a,t),...n})}));g.displayName="FormFloating";const A=g;var w=a(584),C=a(90729);const k=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,id:r,...n}=e;const{controlId:c}=(0,o.useContext)(p.A);return a=(0,x.oU)(a,"form-range"),(0,i.jsx)("input",{...n,type:"range",ref:s,className:l()(t,a),id:r||c})}));k.displayName="FormRange";const I=k,F=o.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,htmlSize:r,className:n,isValid:c=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:h}=(0,o.useContext)(p.A);return a=(0,x.oU)(a,"form-select"),(0,i.jsx)("select",{...u,size:r,ref:s,className:l()(n,a,t&&"".concat(a,"-").concat(t),c&&"is-valid",d&&"is-invalid"),id:m||h})}));F.displayName="FormSelect";const E=F,R=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,as:r="small",muted:n,...o}=e;return a=(0,x.oU)(a,"form-text"),(0,i.jsx)(r,{...o,ref:s,className:l()(t,a,n&&"text-muted")})}));R.displayName="FormText";const S=R,P=o.forwardRef(((e,s)=>(0,i.jsx)(N,{...e,ref:s,type:"switch"})));P.displayName="Switch";const T=Object.assign(P,{Input:N.Input,Label:N.Label}),D=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,children:r,controlId:n,label:o,...c}=e;return a=(0,x.oU)(a,"form-floating"),(0,i.jsxs)(w.A,{ref:s,className:l()(t,a),controlId:n,...c,children:[r,(0,i.jsx)("label",{htmlFor:n,children:o})]})}));D.displayName="FloatingLabel";const U=D,O={_ref:n().any,validated:n().bool,as:n().elementType},M=o.forwardRef(((e,s)=>{let{className:a,validated:t,as:r="form",...n}=e;return(0,i.jsx)(r,{...n,ref:s,className:l()(a,t&&"was-validated")})}));M.displayName="Form",M.propTypes=O;const z=Object.assign(M,{Group:w.A,Control:y,Floating:A,Check:N,Switch:T,Label:C.A,Text:S,Range:I,Select:E,FloatingLabel:U})},14531:(e,s,a)=>{a.d(s,{A:()=>d});var t=a(48738),l=a.n(t),r=a(9950),n=a(99288),o=a(44089),i=a(44414);const c=r.forwardRef(((e,s)=>{let{id:a,bsPrefix:t,className:c,type:d="checkbox",isValid:m=!1,isInvalid:u=!1,as:p="input",...x}=e;const{controlId:h}=(0,r.useContext)(n.A);return t=(0,o.oU)(t,"form-check-input"),(0,i.jsx)(p,{...x,ref:s,type:d,id:a||h,className:l()(c,t,m&&"is-valid",u&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,s,a)=>{a.d(s,{A:()=>o});var t=a(9950),l=a(99288),r=a(44414);const n=t.forwardRef(((e,s)=>{let{controlId:a,as:n="div",...o}=e;const i=(0,t.useMemo)((()=>({controlId:a})),[a]);return(0,r.jsx)(l.A.Provider,{value:i,children:(0,r.jsx)(n,{...o,ref:s})})}));n.displayName="FormGroup";const o=n},75623:(e,s,a)=>{a.d(s,{A:()=>p});var t=a(48738),l=a.n(t),r=a(9950),n=a(44089),o=a(14531),i=a(54947),c=a(44414);const d=r.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:r="span",...o}=e;return t=(0,n.oU)(t,"input-group-text"),(0,c.jsx)(r,{ref:s,className:l()(a,t),...o})}));d.displayName="InputGroupText";const m=d,u=r.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,hasValidation:o,className:d,as:m="div",...u}=e;a=(0,n.oU)(a,"input-group");const p=(0,r.useMemo)((()=>({})),[]);return(0,c.jsx)(i.A.Provider,{value:p,children:(0,c.jsx)(m,{ref:s,...u,className:l()(d,a,t&&"".concat(a,"-").concat(t),o&&"has-validation")})})}));u.displayName="InputGroup";const p=Object.assign(u,{Text:m,Radio:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.A,{type:"checkbox",...e})})})},44268:(e,s,a)=>{a.d(s,{A:()=>z});var t,l=a(48738),r=a.n(l),n=a(8996),o=a(87534),i=a(19815),c=a(78557);function d(e){if((!t&&0!==t||e)&&o.A){var s=document.createElement("div");s.style.position="absolute",s.style.top="-9999px",s.style.width="50px",s.style.height="50px",s.style.overflow="scroll",document.body.appendChild(s),t=s.offsetWidth-s.clientWidth,document.body.removeChild(s)}return t}var m=a(1134),u=a(19865),p=a(76230),x=a(79854),h=a(89679),f=a(9950),b=a(66762),v=a(70489),N=a(30095),j=a(44089),y=a(44414);const g=f.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l="div",...n}=e;return t=(0,j.oU)(t,"modal-body"),(0,y.jsx)(l,{ref:s,className:r()(a,t),...n})}));g.displayName="ModalBody";const A=g;var w=a(34153);const C=f.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,contentClassName:l,centered:n,size:o,fullscreen:i,children:c,scrollable:d,...m}=e;a=(0,j.oU)(a,"modal");const u="".concat(a,"-dialog"),p="string"===typeof i?"".concat(a,"-fullscreen-").concat(i):"".concat(a,"-fullscreen");return(0,y.jsx)("div",{...m,ref:s,className:r()(u,t,o&&"".concat(a,"-").concat(o),n&&"".concat(u,"-centered"),d&&"".concat(u,"-scrollable"),i&&p),children:(0,y.jsx)("div",{className:r()("".concat(a,"-content"),l),children:c})})}));C.displayName="ModalDialog";const k=C,I=f.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l="div",...n}=e;return t=(0,j.oU)(t,"modal-footer"),(0,y.jsx)(l,{ref:s,className:r()(a,t),...n})}));I.displayName="ModalFooter";const F=I;var E=a(89103);const R=f.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,closeLabel:l="Close",closeButton:n=!1,...o}=e;return a=(0,j.oU)(a,"modal-header"),(0,y.jsx)(E.A,{ref:s,...o,className:r()(t,a),closeLabel:l,closeButton:n})}));R.displayName="ModalHeader";const S=R;const P=(0,a(27611).A)("h4"),T=f.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l=P,...n}=e;return t=(0,j.oU)(t,"modal-title"),(0,y.jsx)(l,{ref:s,className:r()(a,t),...n})}));T.displayName="ModalTitle";const D=T;function U(e){return(0,y.jsx)(N.A,{...e,timeout:null})}function O(e){return(0,y.jsx)(N.A,{...e,timeout:null})}const M=f.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,style:l,dialogClassName:N,contentClassName:g,children:A,dialogAs:C=k,"data-bs-theme":I,"aria-labelledby":F,"aria-describedby":E,"aria-label":R,show:S=!1,animation:P=!0,backdrop:T=!0,keyboard:D=!0,onEscapeKeyDown:M,onShow:z,onHide:L,container:V,autoFocus:B=!0,enforceFocus:G=!0,restoreFocus:H=!0,restoreFocusOptions:W,onEntered:_,onExit:K,onExiting:Z,onEnter:q,onEntering:Y,onExited:$,backdropClassName:J,manager:Q,...X}=e;const[ee,se]=(0,f.useState)({}),[ae,te]=(0,f.useState)(!1),le=(0,f.useRef)(!1),re=(0,f.useRef)(!1),ne=(0,f.useRef)(null),[oe,ie]=(0,m.A)(),ce=(0,p.A)(s,ie),de=(0,u.A)(L),me=(0,j.Wz)();a=(0,j.oU)(a,"modal");const ue=(0,f.useMemo)((()=>({onHide:de})),[de]);function pe(){return Q||(0,v.R)({isRTL:me})}function xe(e){if(!o.A)return;const s=pe().getScrollbarWidth()>0,a=e.scrollHeight>(0,i.A)(e).documentElement.clientHeight;se({paddingRight:s&&!a?d():void 0,paddingLeft:!s&&a?d():void 0})}const he=(0,u.A)((()=>{oe&&xe(oe.dialog)}));(0,x.A)((()=>{(0,c.A)(window,"resize",he),null==ne.current||ne.current()}));const fe=()=>{le.current=!0},be=e=>{le.current&&oe&&e.target===oe.dialog&&(re.current=!0),le.current=!1},ve=()=>{te(!0),ne.current=(0,h.A)(oe.dialog,(()=>{te(!1)}))},Ne=e=>{"static"!==T?re.current||e.target!==e.currentTarget?re.current=!1:null==L||L():(e=>{e.target===e.currentTarget&&ve()})(e)},je=(0,f.useCallback)((e=>(0,y.jsx)("div",{...e,className:r()("".concat(a,"-backdrop"),J,!P&&"show")})),[P,J,a]),ye={...l,...ee};ye.display="block";return(0,y.jsx)(w.A.Provider,{value:ue,children:(0,y.jsx)(b.A,{show:S,ref:ce,backdrop:T,container:V,keyboard:!0,autoFocus:B,enforceFocus:G,restoreFocus:H,restoreFocusOptions:W,onEscapeKeyDown:e=>{D?null==M||M(e):(e.preventDefault(),"static"===T&&ve())},onShow:z,onHide:L,onEnter:(e,s)=>{e&&xe(e),null==q||q(e,s)},onEntering:(e,s)=>{null==Y||Y(e,s),(0,n.Ay)(window,"resize",he)},onEntered:_,onExit:e=>{null==ne.current||ne.current(),null==K||K(e)},onExiting:Z,onExited:e=>{e&&(e.style.display=""),null==$||$(e),(0,c.A)(window,"resize",he)},manager:pe(),transition:P?U:void 0,backdropTransition:P?O:void 0,renderBackdrop:je,renderDialog:e=>(0,y.jsx)("div",{role:"dialog",...e,style:ye,className:r()(t,a,ae&&"".concat(a,"-static"),!P&&"show"),onClick:T?Ne:void 0,onMouseUp:be,"data-bs-theme":I,"aria-label":R,"aria-labelledby":F,"aria-describedby":E,children:(0,y.jsx)(C,{...X,onMouseDown:fe,className:N,contentClassName:g,children:A})})})})}));M.displayName="Modal";const z=Object.assign(M,{Body:A,Header:S,Title:D,Footer:F,Dialog:k,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);