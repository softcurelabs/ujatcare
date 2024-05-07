"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[5927],{20192:(e,t,s)=>{s.d(t,{Z:()=>o});s(47313);var a=s(63849),n=s(31616),r=s(52198),l=s(46417);const o=e=>(0,l.jsx)(a.Z,{children:(0,l.jsx)(n.Z,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("div",{className:"page-title-right",children:(0,l.jsxs)(r.Z,{className:"m-0",children:[(0,l.jsx)(r.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?(0,l.jsx)(r.Z.Item,{active:!0,children:e.label},t):(0,l.jsx)(r.Z.Item,{href:e.path,children:e.label},t)))]})}),(0,l.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,t,s)=>{s.d(t,{y:()=>u,J:()=>l});var a=s(47313),n=s(75627),r=s(46417);const l=e=>{let{defaultValues:t,resolver:s,children:l,onSubmit:o,formClass:c}=e;const i=(0,n.cI)({defaultValues:t,resolver:s}),{handleSubmit:d,register:m,control:u,formState:{errors:p}}=i;return(0,r.jsx)("form",{onSubmit:d(o),className:c,noValidate:!0,children:Array.isArray(l)?l.map((e=>e.props&&e.props.name?a.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:p,control:u}}):e)):l})};var o=s(38394),c=s(88178),i=s(72884),d=s.n(i);const m=e=>{let{name:t,placeholder:s,refCallback:n,errors:l,control:i,register:m,className:u}=e;const[p,x]=(0,a.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{className:"mb-0",children:[(0,r.jsx)(c.Z.Control,{type:p?"text":"password",placeholder:s,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:u,isInvalid:!(!l||!l[t]),...m?m(t):{},autoComplete:t}),(0,r.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,r.jsx)("span",{className:"password-eye",onClick:()=>{x(!p)}})})]})})},u=e=>{let{label:t,type:s,name:a,placeholder:n,register:l,errors:o,control:i,className:d,labelClassName:u,containerClass:p,refCallback:x,children:f,rows:h,...v}=e;const b="textarea"===s?"textarea":"select"===s?"select":"input";return(0,r.jsx)(r.Fragment,{children:"hidden"===s?(0,r.jsx)("input",{type:s,name:a,id:a,...l?l(a):{},...v,className:d}):(0,r.jsx)(r.Fragment,{children:"password"===s?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z.Group,{className:p,children:[t?(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(c.Z.Label,{className:u,children:t})," ",f," "]}):null,(0,r.jsx)(m,{name:a,placeholder:n,refCallback:x,errors:o,register:l,className:d}),o&&o[a]?(0,r.jsx)(c.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[a].message}):null]})}):(0,r.jsx)(r.Fragment,{children:"checkbox"===s||"radio"===s?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z.Group,{className:p,children:[(0,r.jsx)(c.Z.Check,{type:s,label:t,name:a,id:a,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[a]),...l?l(a):{},...v}),o&&o[a]?(0,r.jsx)(c.Z.Control.Feedback,{type:"invalid",children:o[a].message}):null]})}):(0,r.jsxs)(c.Z.Group,{className:p,children:[t?(0,r.jsx)(c.Z.Label,{className:u,children:t}):null,(0,r.jsx)(c.Z.Control,{type:s,placeholder:n,name:a,id:a,as:b,ref:e=>{x&&x(e)},className:d,isInvalid:!(!o||!o[a]),...l?l(a):{},rows:h,...v,autoComplete:a,children:f||null}),o&&o[a]?(0,r.jsx)(c.Z.Control.Feedback,{type:"invalid",children:o[a].message}):null]})})})})}},1929:(e,t,s)=>{s.d(t,{Z:()=>i});s(47313);var a=s(81485),n=s(18397),r=s(68105),l=s(18405),o=s(16046),c=s(46417);const i=e=>{let{onDateClick:t,onEventClick:s,onDrop:i,onEventDrop:d,events:m}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{id:"calendar",children:(0,c.jsx)(a.ZPm,{initialView:"dayGridMonth",plugins:[n.ZP,r.ZP,l.Z,o.Z],handleWindowResize:!0,themeSystem:"bootstrap",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Prev",next:"Next"},headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,selectable:!0,droppable:!0,events:m,dateClick:e=>{t(e)},eventClick:e=>{s(e)},drop:e=>{i(e)},eventDrop:e=>{d(e)}})})})}},16946:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(47313),n=s(63849),r=s(31616),l=s(51449),o=(s(81485),s(68105)),c=s(20192),i=s(1929),d=s(75627),m=s(47939),u=s(93298),p=s(3463),x=s(62563),f=s(52487),h=s(46417);const v=e=>{let{isOpen:t,onClose:s,isEditable:l,eventData:o,onRemoveEvent:c,onUpdateEvent:i,onAddEvent:v}=e;const[b]=(0,a.useState)(o),N=(0,x.X)(p.Ry().shape({title:p.Z_().required("Please enter event name"),className:p.Z_().required("Please select category")})),j=(0,d.cI)({defaultValues:{title:b.title,className:b.className?String(b.className):"bg-danger"},resolver:N}),{handleSubmit:g,register:y,control:Z,formState:{errors:w}}=j;return(0,h.jsxs)(m.Z,{show:t,onHide:s,children:[(0,h.jsx)(m.Z.Header,{className:"py-3 px-4 border-bottom-0",closeButton:!0,children:(0,h.jsx)(m.Z.Title,{as:"h5",id:"modal-title",children:l?"Edit Event":"Add New Event"})}),(0,h.jsx)(m.Z.Body,{className:"px-4 pb-4 pt-0",children:(0,h.jsxs)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:g((e=>{l?i(e):v(e)})),children:[(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(r.Z,{sm:12,children:(0,h.jsx)(f.y,{type:"text",label:"Event Name",name:"title",className:"form-control",placeholder:"Insert Event Name",containerClass:"mb-3",register:y,errors:w,control:Z},"title")}),(0,h.jsx)(r.Z,{sm:12,children:(0,h.jsxs)(f.y,{type:"select",label:"Category",name:"className",containerClass:"mb-3",register:y,errors:w,control:Z,children:[(0,h.jsx)("option",{value:"bg-danger",children:"Danger"}),(0,h.jsx)("option",{value:"bg-success",children:"Success"}),(0,h.jsx)("option",{value:"bg-primary",children:"Primary"}),(0,h.jsx)("option",{value:"bg-info",children:"Info"}),(0,h.jsx)("option",{value:"bg-dark",children:"Dark"}),(0,h.jsx)("option",{value:"bg-warning",children:"Warning"})]},"className")})]}),(0,h.jsxs)(n.Z,{className:"mt-2",children:[(0,h.jsx)(r.Z,{xs:4,children:l?(0,h.jsx)(u.Z,{variant:"danger",onClick:c,children:"Delete"}):null}),(0,h.jsxs)(r.Z,{xs:8,className:"text-end",children:[(0,h.jsx)(u.Z,{className:"btn btn-light me-1",onClick:s,children:"Close"}),(0,h.jsx)(u.Z,{variant:"success",type:"submit",className:"btn btn-success",children:"Save"})]})]})]})})]})};var b=s(61033),N=s(42691);const j=()=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{id:"external-events"})}),g=()=>{const[e,t]=(0,a.useState)(!1),s=()=>{t(!1),y({}),w({})},d=()=>t(!0),[m,u]=(0,a.useState)(!1),p=(0,N.T)(),[x,f]=(0,a.useState)([]),[g,y]=(0,a.useState)({}),[Z,w]=(0,a.useState)({});(0,a.useEffect)((()=>{let e=document.getElementById("external-events");new o._l(e,{itemSelector:".external-event"})}),[]);return(0,a.useEffect)((()=>{p((0,b.qf)()).unwrap().then((e=>{f(e)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{breadCrumbItems:[{label:"Apps",path:"/apps/calendar"},{label:"Calendar",path:"/apps/calendar",active:!0}],title:"Calendar"}),(0,h.jsx)(n.Z,{children:(0,h.jsx)(r.Z,{children:(0,h.jsx)(l.Z,{children:(0,h.jsx)(l.Z.Body,{children:(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(r.Z,{lg:3,children:(0,h.jsx)(j,{})}),(0,h.jsx)(r.Z,{lg:12,children:(0,h.jsx)(i.Z,{onDateClick:e=>{w(e),d(),u(!1)},onEventClick:e=>{const t={id:String(e.event.id),title:e.event.title,className:e.event.classNames[0]};y(t),u(!0),d()},onDrop:e=>{const t=e,s=t.draggedEl.title;if(null==s);else{let e={id:String(x.length+1),title:s,start:t?t.dateStr:new Date,className:t.draggedEl.attributes["data-class"].value};const a=[...x];a.push(e),f(a)}},onEventDrop:e=>{const t=[...x],s=t.findIndex((t=>t.id===e.event.id));t[s].title=e.event.title,t[s].className=e.event.classNames,t[s].start=e.event.start,t[s].end=e.event.end,f(t),u(!1)},events:x})})]})})})})}),e?(0,h.jsx)(v,{isOpen:e,onClose:s,isEditable:m,eventData:g,onUpdateEvent:e=>{const t=[...x],a=t.findIndex((e=>e.id===g.id));t[a].title=e.title,t[a].className=e.className,f(t),s(),u(!1)},onRemoveEvent:()=>{var e=[...x];const t=e.findIndex((e=>e.id===g.id));e.splice(t,1),f(e),s()},onAddEvent:e=>{const t=[...x],a={id:String(t.length+1),title:e.title,start:0!==Object.keys(Z).length?Z.date:new Date,className:e.className};t.push(a),f(t),s()}}):null]})}},86472:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(47313),n=s(78532);const r=(0,a.createContext)(n.Z?window:void 0);r.Provider;function l(){return(0,a.useContext)(r)}},46106:(e,t,s)=>{function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}s.d(t,{Z:()=>a})},93298:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(72884),n=s.n(a),r=s(47313),l=s(16184),o=s(68524),c=s(46417);const i=r.forwardRef(((e,t)=>{let{as:s,bsPrefix:a,variant:r="primary",size:i,active:d=!1,disabled:m=!1,className:u,...p}=e;const x=(0,o.vE)(a,"btn"),[f,{tagName:h}]=(0,l.FT)({tagName:s,disabled:m,...p}),v=h;return(0,c.jsx)(v,{...f,...p,ref:t,disabled:m,className:n()(u,x,d&&"active",r&&"".concat(x,"-").concat(r),i&&"".concat(x,"-").concat(i),p.href&&m&&"disabled")})}));i.displayName="Button";const d=i},46682:(e,t,s)=>{s.d(t,{UI:()=>n,XW:()=>r});var a=s(47313);function n(e,t){let s=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,s++):e))}function r(e,t){return a.Children.toArray(e).some((e=>a.isValidElement(e)&&e.type===t))}},88178:(e,t,s)=>{s.d(t,{Z:()=>V});var a=s(72884),n=s.n(a),r=s(75192),l=s.n(r),o=s(47313),c=s(46417);const i={type:l().string,tooltip:l().bool,as:l().elementType},d=o.forwardRef(((e,t)=>{let{as:s="div",className:a,type:r="valid",tooltip:l=!1,...o}=e;return(0,c.jsx)(s,{...o,ref:t,className:n()(a,"".concat(r,"-").concat(l?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const m=d;var u=s(56084),p=s(5978),x=s(68524);const f=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,htmlFor:r,...l}=e;const{controlId:i}=(0,o.useContext)(p.Z);return s=(0,x.vE)(s,"form-check-label"),(0,c.jsx)("label",{...l,ref:t,htmlFor:r||i,className:n()(a,s)})}));f.displayName="FormCheckLabel";const h=f;var v=s(46682);const b=o.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,bsSwitchPrefix:r,inline:l=!1,reverse:i=!1,disabled:d=!1,isValid:f=!1,isInvalid:b=!1,feedbackTooltip:N=!1,feedback:j,feedbackType:g,className:y,style:Z,title:w="",type:C="checkbox",label:E,children:k,as:I="input",...F}=e;a=(0,x.vE)(a,"form-check"),r=(0,x.vE)(r,"form-switch");const{controlId:R}=(0,o.useContext)(p.Z),S=(0,o.useMemo)((()=>({controlId:s||R})),[R,s]),P=!k&&null!=E&&!1!==E||(0,v.XW)(k,h),D=(0,c.jsx)(u.Z,{...F,type:"switch"===C?"checkbox":C,ref:t,isValid:f,isInvalid:b,disabled:d,as:I});return(0,c.jsx)(p.Z.Provider,{value:S,children:(0,c.jsx)("div",{style:Z,className:n()(y,P&&a,l&&"".concat(a,"-inline"),i&&"".concat(a,"-reverse"),"switch"===C&&r),children:k||(0,c.jsxs)(c.Fragment,{children:[D,P&&(0,c.jsx)(h,{title:w,children:E}),j&&(0,c.jsx)(m,{type:g,tooltip:N,children:j})]})})})}));b.displayName="FormCheck";const N=Object.assign(b,{Input:u.Z,Label:h});s(21024);const j=o.forwardRef(((e,t)=>{let{bsPrefix:s,type:a,size:r,htmlSize:l,id:i,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:f,readOnly:h,as:v="input",...b}=e;const{controlId:N}=(0,o.useContext)(p.Z);return s=(0,x.vE)(s,"form-control"),(0,c.jsx)(v,{...b,type:a,size:l,ref:t,readOnly:h,id:i||N,className:n()(d,f?"".concat(s,"-plaintext"):s,r&&"".concat(s,"-").concat(r),"color"===a&&"".concat(s,"-color"),m&&"is-valid",u&&"is-invalid")})}));j.displayName="FormControl";const g=Object.assign(j,{Feedback:m}),y=o.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:r="div",...l}=e;return a=(0,x.vE)(a,"form-floating"),(0,c.jsx)(r,{ref:t,className:n()(s,a),...l})}));y.displayName="FormFloating";const Z=y;var w=s(87021),C=s(41709);const E=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,id:r,...l}=e;const{controlId:i}=(0,o.useContext)(p.Z);return s=(0,x.vE)(s,"form-range"),(0,c.jsx)("input",{...l,type:"range",ref:t,className:n()(a,s),id:r||i})}));E.displayName="FormRange";const k=E,I=o.forwardRef(((e,t)=>{let{bsPrefix:s,size:a,htmlSize:r,className:l,isValid:i=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:f}=(0,o.useContext)(p.Z);return s=(0,x.vE)(s,"form-select"),(0,c.jsx)("select",{...u,size:r,ref:t,className:n()(l,s,a&&"".concat(s,"-").concat(a),i&&"is-valid",d&&"is-invalid"),id:m||f})}));I.displayName="FormSelect";const F=I,R=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,as:r="small",muted:l,...o}=e;return s=(0,x.vE)(s,"form-text"),(0,c.jsx)(r,{...o,ref:t,className:n()(a,s,l&&"text-muted")})}));R.displayName="FormText";const S=R,P=o.forwardRef(((e,t)=>(0,c.jsx)(N,{...e,ref:t,type:"switch"})));P.displayName="Switch";const D=Object.assign(P,{Input:N.Input,Label:N.Label}),T=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,children:r,controlId:l,label:o,...i}=e;return s=(0,x.vE)(s,"form-floating"),(0,c.jsxs)(w.Z,{ref:t,className:n()(a,s),controlId:l,...i,children:[r,(0,c.jsx)("label",{htmlFor:l,children:o})]})}));T.displayName="FloatingLabel";const O=T,M={_ref:l().any,validated:l().bool,as:l().elementType},L=o.forwardRef(((e,t)=>{let{className:s,validated:a,as:r="form",...l}=e;return(0,c.jsx)(r,{...l,ref:t,className:n()(s,a&&"was-validated")})}));L.displayName="Form",L.propTypes=M;const V=Object.assign(L,{Group:w.Z,Control:g,Floating:Z,Check:N,Switch:D,Label:C.Z,Text:S,Range:k,Select:F,FloatingLabel:O})},56084:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(72884),n=s.n(a),r=s(47313),l=s(5978),o=s(68524),c=s(46417);const i=r.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,className:i,type:d="checkbox",isValid:m=!1,isInvalid:u=!1,as:p="input",...x}=e;const{controlId:f}=(0,r.useContext)(l.Z);return a=(0,o.vE)(a,"form-check-input"),(0,c.jsx)(p,{...x,ref:t,type:d,id:s||f,className:n()(i,a,m&&"is-valid",u&&"is-invalid")})}));i.displayName="FormCheckInput";const d=i},87021:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(47313),n=s(5978),r=s(46417);const l=a.forwardRef(((e,t)=>{let{controlId:s,as:l="div",...o}=e;const c=(0,a.useMemo)((()=>({controlId:s})),[s]);return(0,r.jsx)(n.Z.Provider,{value:c,children:(0,r.jsx)(l,{...o,ref:t})})}));l.displayName="FormGroup";const o=l},38394:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(72884),n=s.n(a),r=s(47313),l=s(68524),o=s(56084),c=s(94354),i=s(46417);const d=r.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:r="span",...o}=e;return a=(0,l.vE)(a,"input-group-text"),(0,i.jsx)(r,{ref:t,className:n()(s,a),...o})}));d.displayName="InputGroupText";const m=d,u=r.forwardRef(((e,t)=>{let{bsPrefix:s,size:a,hasValidation:o,className:d,as:m="div",...u}=e;s=(0,l.vE)(s,"input-group");const p=(0,r.useMemo)((()=>({})),[]);return(0,i.jsx)(c.Z.Provider,{value:p,children:(0,i.jsx)(m,{ref:t,...u,className:n()(d,s,a&&"".concat(s,"-").concat(a),o&&"has-validation")})})}));u.displayName="InputGroup";const p=Object.assign(u,{Text:m,Radio:e=>(0,i.jsx)(m,{children:(0,i.jsx)(o.Z,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(m,{children:(0,i.jsx)(o.Z,{type:"checkbox",...e})})})},47939:(e,t,s)=>{s.d(t,{Z:()=>L});var a,n=s(72884),r=s.n(n),l=s(55506),o=s(78532),c=s(14987),i=s(18755);function d(e){if((!a&&0!==a||e)&&o.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var m=s(47313);var u=s(69125),p=s(57323),x=s(52904),f=s(27890),h=s(45292),v=s(16381),b=s(22868),N=s(68524),j=s(46417);const g=m.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:n="div",...l}=e;return a=(0,N.vE)(a,"modal-body"),(0,j.jsx)(n,{ref:t,className:r()(s,a),...l})}));g.displayName="ModalBody";const y=g;var Z=s(30321);const w=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,contentClassName:n,centered:l,size:o,fullscreen:c,children:i,scrollable:d,...m}=e;s=(0,N.vE)(s,"modal");const u="".concat(s,"-dialog"),p="string"===typeof c?"".concat(s,"-fullscreen-").concat(c):"".concat(s,"-fullscreen");return(0,j.jsx)("div",{...m,ref:t,className:r()(u,a,o&&"".concat(s,"-").concat(o),l&&"".concat(u,"-centered"),d&&"".concat(u,"-scrollable"),c&&p),children:(0,j.jsx)("div",{className:r()("".concat(s,"-content"),n),children:i})})}));w.displayName="ModalDialog";const C=w,E=m.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:n="div",...l}=e;return a=(0,N.vE)(a,"modal-footer"),(0,j.jsx)(n,{ref:t,className:r()(s,a),...l})}));E.displayName="ModalFooter";const k=E;var I=s(50195);const F=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,closeLabel:n="Close",closeButton:l=!1,...o}=e;return s=(0,N.vE)(s,"modal-header"),(0,j.jsx)(I.Z,{ref:t,...o,className:r()(a,s),closeLabel:n,closeButton:l})}));F.displayName="ModalHeader";const R=F;const S=(0,s(96205).Z)("h4"),P=m.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:n=S,...l}=e;return a=(0,N.vE)(a,"modal-title"),(0,j.jsx)(n,{ref:t,className:r()(s,a),...l})}));P.displayName="ModalTitle";const D=P;function T(e){return(0,j.jsx)(b.Z,{...e,timeout:null})}function O(e){return(0,j.jsx)(b.Z,{...e,timeout:null})}const M=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,style:n,dialogClassName:b,contentClassName:g,children:y,dialogAs:w=C,"data-bs-theme":E,"aria-labelledby":k,"aria-describedby":I,"aria-label":F,show:R=!1,animation:S=!0,backdrop:P=!0,keyboard:D=!0,onEscapeKeyDown:M,onShow:L,onHide:V,container:z,autoFocus:A=!0,enforceFocus:B=!0,restoreFocus:G=!0,restoreFocusOptions:H,onEntered:W,onExit:_,onExiting:U,onEnter:q,onEntering:K,onExited:X,backdropClassName:J,manager:Q,...Y}=e;const[$,ee]=(0,m.useState)({}),[te,se]=(0,m.useState)(!1),ae=(0,m.useRef)(!1),ne=(0,m.useRef)(!1),re=(0,m.useRef)(null),[le,oe]=(0,m.useState)(null),ce=(0,p.Z)(t,oe),ie=(0,u.Z)(V),de=(0,N.SC)();s=(0,N.vE)(s,"modal");const me=(0,m.useMemo)((()=>({onHide:ie})),[ie]);function ue(){return Q||(0,v.t)({isRTL:de})}function pe(e){if(!o.Z)return;const t=ue().getScrollbarWidth()>0,s=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;ee({paddingRight:t&&!s?d():void 0,paddingLeft:!t&&s?d():void 0})}const xe=(0,u.Z)((()=>{le&&pe(le.dialog)}));(0,x.Z)((()=>{(0,i.Z)(window,"resize",xe),null==re.current||re.current()}));const fe=()=>{ae.current=!0},he=e=>{ae.current&&le&&e.target===le.dialog&&(ne.current=!0),ae.current=!1},ve=()=>{se(!0),re.current=(0,f.Z)(le.dialog,(()=>{se(!1)}))},be=e=>{"static"!==P?ne.current||e.target!==e.currentTarget?ne.current=!1:null==V||V():(e=>{e.target===e.currentTarget&&ve()})(e)},Ne=(0,m.useCallback)((e=>(0,j.jsx)("div",{...e,className:r()("".concat(s,"-backdrop"),J,!S&&"show")})),[S,J,s]),je={...n,...$};je.display="block";return(0,j.jsx)(Z.Z.Provider,{value:me,children:(0,j.jsx)(h.Z,{show:R,ref:ce,backdrop:P,container:z,keyboard:!0,autoFocus:A,enforceFocus:B,restoreFocus:G,restoreFocusOptions:H,onEscapeKeyDown:e=>{D?null==M||M(e):(e.preventDefault(),"static"===P&&ve())},onShow:L,onHide:V,onEnter:(e,t)=>{e&&pe(e),null==q||q(e,t)},onEntering:(e,t)=>{null==K||K(e,t),(0,l.ZP)(window,"resize",xe)},onEntered:W,onExit:e=>{null==re.current||re.current(),null==_||_(e)},onExiting:U,onExited:e=>{e&&(e.style.display=""),null==X||X(e),(0,i.Z)(window,"resize",xe)},manager:ue(),transition:S?T:void 0,backdropTransition:S?O:void 0,renderBackdrop:Ne,renderDialog:e=>(0,j.jsx)("div",{role:"dialog",...e,style:je,className:r()(a,s,te&&"".concat(s,"-static"),!S&&"show"),onClick:P?be:void 0,onMouseUp:he,"data-bs-theme":E,"aria-label":F,"aria-labelledby":k,"aria-describedby":I,children:(0,j.jsx)(w,{...Y,onMouseDown:fe,className:b,contentClassName:g,children:y})})})})}));M.displayName="Modal";const L=Object.assign(M,{Body:y,Header:R,Title:D,Footer:k,Dialog:C,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},69125:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(47313);const n=function(e){const t=(0,a.useRef)(e);return(0,a.useEffect)((()=>{t.current=e}),[e]),t};function r(e){const t=n(e);return(0,a.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}},52904:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(47313);function n(e){const t=function(e){const t=(0,a.useRef)(e);return t.current=e,t}(e);(0,a.useEffect)((()=>()=>t.current()),[])}}}]);