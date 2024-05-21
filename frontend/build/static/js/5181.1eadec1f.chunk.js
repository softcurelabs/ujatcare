"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[5181,2645],{63647:(e,a,t)=>{t.d(a,{m:()=>n});var s=t(95252),r=t(44414);const n=()=>(0,r.jsx)(s.A,{animation:"border",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},63112:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(72348),r=t.n(s),n=(t(4434),t(44414));const i=e=>(0,n.jsx)(n.Fragment,{children:e.showTimeSelectOnly?(0,n.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"form-control "+e.inputClass,minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,n.jsx)(r(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control "+e.inputClass,maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},41033:(e,a,t)=>{t.d(a,{A:()=>o});t(9950);var s=t(86781),r=t(68459),n=t(81924),i=t(44414);const o=e=>(0,i.jsx)(s.A,{children:(0,i.jsx)(r.A,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{children:(0,i.jsxs)(n.A,{className:"m-0 mb-0",children:[(0,i.jsx)(n.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,i.jsx)(n.A.Item,{active:!0,children:e.label},a):(0,i.jsx)(n.A.Item,{href:e.path,children:e.label},a)))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,a,t)=>{t.d(a,{Z:()=>u,z:()=>i});var s=t(9950),r=t(9449),n=t(44414);const i=e=>{let{defaultValues:a,resolver:t,children:i,onSubmit:o,formClass:l}=e;const c=(0,r.mN)({defaultValues:a,resolver:t}),{handleSubmit:d,register:m,control:u,formState:{errors:p}}=c;return(0,n.jsx)("form",{onSubmit:d(o),className:l,noValidate:!0,children:Array.isArray(i)?i.map((e=>e.props&&e.props.name?s.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:p,control:u}}):e)):i})};var o=t(75623),l=t(64055),c=t(48738),d=t.n(c);const m=e=>{let{name:a,placeholder:t,refCallback:r,errors:i,control:c,register:m,className:u}=e;const[p,f]=(0,s.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A,{className:"mb-0",children:[(0,n.jsx)(l.A.Control,{type:p?"text":"password",placeholder:t,name:a,id:a,as:"input",ref:e=>{r&&r(e)},className:u,isInvalid:!(!i||!i[a]),...m?m(a):{},autoComplete:a}),(0,n.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,n.jsx)("span",{className:"password-eye",onClick:()=>{f(!p)}})})]})})},u=e=>{let{label:a,type:t,name:s,placeholder:r,register:i,errors:o,control:c,className:d,labelClassName:u,containerClass:p,refCallback:f,children:h,rows:x,symbol:b,...g}=e;const y="textarea"===t?"textarea":"select"===t?"select":"input";return(0,n.jsx)(n.Fragment,{children:"hidden"===t?(0,n.jsx)("input",{type:t,name:s,id:s,...i?i(s):{},...g,className:d}):(0,n.jsx)(n.Fragment,{children:"password"===t?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.A.Group,{className:p,children:[a?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(l.A.Label,{className:u,children:a})," ",h," "]}):null,(0,n.jsx)(m,{name:s,placeholder:r,refCallback:f,errors:o,register:i,className:d}),o&&o[s]?(0,n.jsx)(l.A.Control.Feedback,{type:"invalid",className:"d-block",children:o[s].message}):null]})}):(0,n.jsx)(n.Fragment,{children:"checkbox"===t||"radio"===t?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.A.Group,{className:p,children:[(0,n.jsx)(l.A.Check,{type:t,label:a,name:s,id:s,ref:e=>{f&&f(e)},className:d,isInvalid:!(!o||!o[s]),...i?i(s):{},...g}),o&&o[s]?(0,n.jsx)(l.A.Control.Feedback,{type:"invalid",children:o[s].message}):null]})}):(0,n.jsxs)(l.A.Group,{className:p,children:[a?(0,n.jsx)(l.A.Label,{className:u,children:a}):null,b?(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("span",{className:"input-group-text",id:s,children:b}),(0,n.jsx)(l.A.Control,{type:t,placeholder:r,name:s,id:s,as:y,ref:e=>{f&&f(e)},className:d,isInvalid:!(!o||!o[s]),...i?i(s):{},rows:x,...g,autoComplete:s,children:h||null})]}):(0,n.jsx)(l.A.Control,{type:t,placeholder:r,name:s,id:s,as:y,ref:e=>{f&&f(e)},className:d,isInvalid:!(!o||!o[s]),...i?i(s):{},rows:x,...g,autoComplete:s,children:h||null}),o&&o[s]?(0,n.jsx)(l.A.Control.Feedback,{type:"invalid",children:o[s].message}):null]})})})})}},85181:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var s=t(9950),r=t(471),n=t(86781),i=t(68459),o=t(64055),l=t(90729),c=t(97937),d=t(41033),m=t(68984),u=t(63112),p=t(26473),f=t(60666),h=t(70030),x=t(9449),b=t(27081),g=t(42074),y=t(19443),j=t(80183),v=t(49462),N=t(63647),w=t(44414);const A=()=>{const{t:e}=(0,h.B)(),a=(0,p.t)(f.Ik().shape({title:f.Yj().required(e("Please select title")).min(10,"Atleast 10 char required")})),[t,d]=(0,s.useState)(!1),[A,C]=(0,s.useState)(""),[S,k]=(0,s.useState)(""),I=(0,b.wA)(),{flats:F,users:O}=(0,b.d4)((e=>({flats:e.Flat.flats,users:e.User.users})));(0,s.useEffect)((()=>{I((0,y.q)()),I((0,j.mX)(1))}),[]);const{register:T,handleSubmit:P,setValue:D,reset:R,formState:{errors:L}}=(0,x.mN)({defaultValues:{},resolver:a}),_=P((async e=>{d(!0),await I((0,v.WD)(e)).unwrap().then((e=>{e&&!0===e.status&&(C(e.message),window.scrollTo({top:0,behavior:"smooth"})),d(!1)})).catch((e=>{for(var a in e.errors)try{setError(a,{message:e.errors[a].toString()})}catch(t){}d(!1)}))})),[U,z]=(0,s.useState)(new Date);return(0,w.jsxs)(w.Fragment,{children:[A&&(0,w.jsxs)("div",{className:"alert alert-success",children:[A,(0,w.jsx)(g.N_,{to:"/inspection",children:" Back to Inspection."})]}),S&&(0,w.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:S}),(0,w.jsx)(r.A,{children:(0,w.jsx)(r.A.Body,{children:(0,w.jsx)(n.A,{children:(0,w.jsx)(i.A,{lg:6,children:(0,w.jsxs)("form",{onSubmit:_,children:[(0,w.jsx)(m.Z,{label:"Title",type:"text",register:T,name:"title",errors:L,containerClass:"mb-3"},"title"),(0,w.jsx)(m.Z,{label:"Description",type:"textarea",register:T,name:"description",errors:L,rows:"3",containerClass:"mb-3"},"description"),(0,w.jsx)(m.Z,{type:"hidden",register:T,name:"inspection_date",value:U.toISOString().split("T")[0]},"inspection_date"),(0,w.jsxs)("div",{className:"mb-3",children:[(0,w.jsx)("label",{className:"form-label",children:"Inspection Date"})," ",(0,w.jsx)("br",{}),(0,w.jsx)(u.A,{value:U,minDate:new Date,showTimeSelect:!0,dateFormat:"MM-dd-yyyy HH:mm",onChange:e=>{z(e),D("inspection_date",e.toLocaleString("sv-SE"))}})]}),(0,w.jsx)(n.A,{children:(0,w.jsxs)(o.A.Group,{className:"mb-3 input-group",children:[(0,w.jsx)(l.A,{className:"me-2",children:"Priority"}),(0,w.jsx)(m.Z,{type:"radio",className:"form-check-inline",name:"priority",label:"Low",value:1,checked:!0,register:T,id:"priorty_low"},"priorty_low"),(0,w.jsx)(m.Z,{type:"radio",className:"form-check-inline",name:"priority",label:"Medium",value:2,register:T,id:"priorty_medium"},"priorty_medium"),(0,w.jsx)(m.Z,{type:"radio",className:"form-check-inline",name:"priority",label:"High",value:3,register:T,id:"priorty_high"},"priorty_high")]})}),(0,w.jsxs)(n.A,{children:[(0,w.jsxs)(o.A.Group,{className:"mb-3 input-group",children:[(0,w.jsx)(l.A,{className:"me-2",children:"Status"}),(0,w.jsx)(m.Z,{type:"radio",className:"form-check-inline",name:"status",label:"Open",value:1,checked:!0,id:"status_open",register:T},"status_open"),(0,w.jsx)(m.Z,{type:"radio",className:"form-check-inline",name:"status",label:"In Progress",value:2,id:"status_progress",register:T},"status_progress"),(0,w.jsx)(m.Z,{type:"radio",className:"form-check-inline",name:"status",label:"Close",value:3,id:"status_close",register:T},"status_close")]}),(0,w.jsx)(m.Z,{type:"select",label:"Suite#",name:"flat_id",containerClass:"mb-3 ",register:T,errors:L,children:F.length&&F.map((e=>(0,w.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,w.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))}),(0,w.jsx)(m.Z,{type:"select",label:"Assign To",name:"inspection_by",containerClass:"mb-3 ",register:T,errors:L,children:O?O.data.length&&O.data.map((e=>(0,w.jsxs)("option",{value:e.user.id.toString(),children:[e.user.name," - ",e.user.role]},"user"+e.user.id))):(0,w.jsx)("option",{})}),(0,w.jsx)(m.Z,{label:"Notes",type:"textarea",register:T,name:"notes",errors:L,rows:"3",containerClass:"mb-3"},"notes")]}),t?(0,w.jsx)(N.m,{}):(0,w.jsx)(c.A,{variant:"primary",type:"submit",children:"Create"})]})})})})})]})},C=()=>(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)(d.A,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Maintanance Inspections",path:"/inspection"},{label:"Maintanance Inspection",path:"/inspection/new",active:!0}],title:"Maintanance Inspection"}),(0,w.jsx)(n.A,{children:(0,w.jsx)(i.A,{children:(0,w.jsx)(A,{})})})]})},97937:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(48738),r=t.n(s),n=t(9950),i=t(82111),o=t(44089),l=t(44414);const c=n.forwardRef(((e,a)=>{let{as:t,bsPrefix:s,variant:n="primary",size:c,active:d=!1,disabled:m=!1,className:u,...p}=e;const f=(0,o.oU)(s,"btn"),[h,{tagName:x}]=(0,i.Am)({tagName:t,disabled:m,...p}),b=x;return(0,l.jsx)(b,{...h,...p,ref:a,disabled:m,className:r()(u,f,d&&"active",n&&"".concat(f,"-").concat(n),c&&"".concat(f,"-").concat(c),p.href&&m&&"disabled")})}));c.displayName="Button";const d=c},22890:(e,a,t)=>{t.d(a,{Tj:()=>r,mf:()=>n});var s=t(9950);function r(e,a){let t=0;return s.Children.map(e,(e=>s.isValidElement(e)?a(e,t++):e))}function n(e,a){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===a))}},64055:(e,a,t)=>{t.d(a,{A:()=>z});var s=t(48738),r=t.n(s),n=t(11942),i=t.n(n),o=t(9950),l=t(44414);const c={type:i().string,tooltip:i().bool,as:i().elementType},d=o.forwardRef(((e,a)=>{let{as:t="div",className:s,type:n="valid",tooltip:i=!1,...o}=e;return(0,l.jsx)(t,{...o,ref:a,className:r()(s,"".concat(n,"-").concat(i?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const m=d;var u=t(14531),p=t(99288),f=t(44089);const h=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,htmlFor:n,...i}=e;const{controlId:c}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-check-label"),(0,l.jsx)("label",{...i,ref:a,htmlFor:n||c,className:r()(s,t)})}));h.displayName="FormCheckLabel";const x=h;var b=t(22890);const g=o.forwardRef(((e,a)=>{let{id:t,bsPrefix:s,bsSwitchPrefix:n,inline:i=!1,reverse:c=!1,disabled:d=!1,isValid:h=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:j,feedbackType:v,className:N,style:w,title:A="",type:C="checkbox",label:S,children:k,as:I="input",...F}=e;s=(0,f.oU)(s,"form-check"),n=(0,f.oU)(n,"form-switch");const{controlId:O}=(0,o.useContext)(p.A),T=(0,o.useMemo)((()=>({controlId:t||O})),[O,t]),P=!k&&null!=S&&!1!==S||(0,b.mf)(k,x),D=(0,l.jsx)(u.A,{...F,type:"switch"===C?"checkbox":C,ref:a,isValid:h,isInvalid:g,disabled:d,as:I});return(0,l.jsx)(p.A.Provider,{value:T,children:(0,l.jsx)("div",{style:w,className:r()(N,P&&s,i&&"".concat(s,"-inline"),c&&"".concat(s,"-reverse"),"switch"===C&&n),children:k||(0,l.jsxs)(l.Fragment,{children:[D,P&&(0,l.jsx)(x,{title:A,children:S}),j&&(0,l.jsx)(m,{type:v,tooltip:y,children:j})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:u.A,Label:x});t(2241);const j=o.forwardRef(((e,a)=>{let{bsPrefix:t,type:s,size:n,htmlSize:i,id:c,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:h,readOnly:x,as:b="input",...g}=e;const{controlId:y}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-control"),(0,l.jsx)(b,{...g,type:s,size:i,ref:a,readOnly:x,id:c||y,className:r()(d,h?"".concat(t,"-plaintext"):t,n&&"".concat(t,"-").concat(n),"color"===s&&"".concat(t,"-color"),m&&"is-valid",u&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:m}),N=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:n="div",...i}=e;return s=(0,f.oU)(s,"form-floating"),(0,l.jsx)(n,{ref:a,className:r()(t,s),...i})}));N.displayName="FormFloating";const w=N;var A=t(584),C=t(90729);const S=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,id:n,...i}=e;const{controlId:c}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-range"),(0,l.jsx)("input",{...i,type:"range",ref:a,className:r()(s,t),id:n||c})}));S.displayName="FormRange";const k=S,I=o.forwardRef(((e,a)=>{let{bsPrefix:t,size:s,htmlSize:n,className:i,isValid:c=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:h}=(0,o.useContext)(p.A);return t=(0,f.oU)(t,"form-select"),(0,l.jsx)("select",{...u,size:n,ref:a,className:r()(i,t,s&&"".concat(t,"-").concat(s),c&&"is-valid",d&&"is-invalid"),id:m||h})}));I.displayName="FormSelect";const F=I,O=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,as:n="small",muted:i,...o}=e;return t=(0,f.oU)(t,"form-text"),(0,l.jsx)(n,{...o,ref:a,className:r()(s,t,i&&"text-muted")})}));O.displayName="FormText";const T=O,P=o.forwardRef(((e,a)=>(0,l.jsx)(y,{...e,ref:a,type:"switch"})));P.displayName="Switch";const D=Object.assign(P,{Input:y.Input,Label:y.Label}),R=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,children:n,controlId:i,label:o,...c}=e;return t=(0,f.oU)(t,"form-floating"),(0,l.jsxs)(A.A,{ref:a,className:r()(s,t),controlId:i,...c,children:[n,(0,l.jsx)("label",{htmlFor:i,children:o})]})}));R.displayName="FloatingLabel";const L=R,_={_ref:i().any,validated:i().bool,as:i().elementType},U=o.forwardRef(((e,a)=>{let{className:t,validated:s,as:n="form",...i}=e;return(0,l.jsx)(n,{...i,ref:a,className:r()(t,s&&"was-validated")})}));U.displayName="Form",U.propTypes=_;const z=Object.assign(U,{Group:A.A,Control:v,Floating:w,Check:y,Switch:D,Label:C.A,Text:T,Range:k,Select:F,FloatingLabel:L})},14531:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(48738),r=t.n(s),n=t(9950),i=t(99288),o=t(44089),l=t(44414);const c=n.forwardRef(((e,a)=>{let{id:t,bsPrefix:s,className:c,type:d="checkbox",isValid:m=!1,isInvalid:u=!1,as:p="input",...f}=e;const{controlId:h}=(0,n.useContext)(i.A);return s=(0,o.oU)(s,"form-check-input"),(0,l.jsx)(p,{...f,ref:a,type:d,id:t||h,className:r()(c,s,m&&"is-valid",u&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},584:(e,a,t)=>{t.d(a,{A:()=>o});var s=t(9950),r=t(99288),n=t(44414);const i=s.forwardRef(((e,a)=>{let{controlId:t,as:i="div",...o}=e;const l=(0,s.useMemo)((()=>({controlId:t})),[t]);return(0,n.jsx)(r.A.Provider,{value:l,children:(0,n.jsx)(i,{...o,ref:a})})}));i.displayName="FormGroup";const o=i},75623:(e,a,t)=>{t.d(a,{A:()=>p});var s=t(48738),r=t.n(s),n=t(9950),i=t(44089),o=t(14531),l=t(54947),c=t(44414);const d=n.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:n="span",...o}=e;return s=(0,i.oU)(s,"input-group-text"),(0,c.jsx)(n,{ref:a,className:r()(t,s),...o})}));d.displayName="InputGroupText";const m=d,u=n.forwardRef(((e,a)=>{let{bsPrefix:t,size:s,hasValidation:o,className:d,as:m="div",...u}=e;t=(0,i.oU)(t,"input-group");const p=(0,n.useMemo)((()=>({})),[]);return(0,c.jsx)(l.A.Provider,{value:p,children:(0,c.jsx)(m,{ref:a,...u,className:r()(d,t,s&&"".concat(t,"-").concat(s),o&&"has-validation")})})}));u.displayName="InputGroup";const p=Object.assign(u,{Text:m,Radio:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.A,{type:"checkbox",...e})})})},95252:(e,a,t)=>{t.d(a,{A:()=>c});var s=t(48738),r=t.n(s),n=t(9950),i=t(44089),o=t(44414);const l=n.forwardRef(((e,a)=>{let{bsPrefix:t,variant:s,animation:n="border",size:l,as:c="div",className:d,...m}=e;t=(0,i.oU)(t,"spinner");const u="".concat(t,"-").concat(n);return(0,o.jsx)(c,{ref:a,...m,className:r()(d,u,l&&"".concat(u,"-").concat(l),s&&"text-".concat(s))})}));l.displayName="Spinner";const c=l},70030:(e,a,t)=>{t.d(a,{B:()=>f});var s=t(80296),r=t(64467),n=t(9950),i=t(6955);function o(){if(console&&console.warn){for(var e,a=arguments.length,t=new Array(a),s=0;s<a;s++)t[s]=arguments[s];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var l={};function c(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];"string"===typeof a[0]&&l[a[0]]||("string"===typeof a[0]&&(l[a[0]]=new Date),o.apply(void 0,a))}function d(e,a,t){e.loadNamespaces(a,(function(){if(e.isInitialized)t();else{e.on("initialized",(function a(){setTimeout((function(){e.off("initialized",a)}),0),t()}))}}))}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){(0,r.A)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p=function(e,a){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=a?t.current:e}),[e,a]),t.current};function f(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.i18n,r=(0,n.useContext)(i.gJ)||{},o=r.i18n,l=r.defaultNS,m=t||o||(0,i.TO)();if(m&&!m.reportNamespaces&&(m.reportNamespaces=new i.hz),!m){c("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[f,{},!1];return h.t=f,h.i18n={},h.ready=!1,h}m.options.react&&void 0!==m.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=u(u(u({},(0,i.rV)()),m.options.react),a),b=x.useSuspense,g=x.keyPrefix,y=e||l||m.options&&m.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],m.reportNamespaces.addUsedNamespaces&&m.reportNamespaces.addUsedNamespaces(y);var j=(m.isInitialized||m.initializedStoreOnce)&&y.every((function(e){return function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.languages&&a.languages.length?void 0!==a.options.ignoreJSONStructure?a.hasLoadedNamespace(e,{precheck:function(a,s){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!s(a.isLanguageChangingTo,e))return!1}}):function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=a.languages[0],r=!!a.options&&a.options.fallbackLng,n=a.languages[a.languages.length-1];if("cimode"===s.toLowerCase())return!0;var i=function(e,t){var s=a.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===s||2===s};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!i(a.isLanguageChangingTo,e))&&(!!a.hasResourceBundle(s,e)||!(a.services.backendConnector.backend&&(!a.options.resources||a.options.partialBundledLanguages))||!(!i(s,e)||r&&!i(n,e)))}(e,a,t):(c("i18n.languages were undefined or empty",a.languages),!0)}(e,m,x)}));function v(){return m.getFixedT(null,"fallback"===x.nsMode?y:y[0],g)}var N=(0,n.useState)(v),w=(0,s.A)(N,2),A=w[0],C=w[1],S=y.join(),k=p(S),I=(0,n.useRef)(!0);(0,n.useEffect)((function(){var e=x.bindI18n,a=x.bindI18nStore;function t(){I.current&&C(v)}return I.current=!0,j||b||d(m,y,(function(){I.current&&C(v)})),j&&k&&k!==S&&I.current&&C(v),e&&m&&m.on(e,t),a&&m&&m.store.on(a,t),function(){I.current=!1,e&&m&&e.split(" ").forEach((function(e){return m.off(e,t)})),a&&m&&a.split(" ").forEach((function(e){return m.store.off(e,t)}))}}),[m,S]);var F=(0,n.useRef)(!0);(0,n.useEffect)((function(){I.current&&!F.current&&C(v),F.current=!1}),[m,g]);var O=[A,m,j];if(O.t=A,O.i18n=m,O.ready=j,j)return O;if(!j&&!b)return O;throw new Promise((function(e){d(m,y,(function(){e()}))}))}},80296:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(27800);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,r,n,i,o=[],l=!0,c=!1;try{if(n=(t=t.call(e)).next,0===a){if(Object(t)!==t)return;l=!1}else for(;!(l=(s=n.call(t)).done)&&(o.push(s.value),o.length!==a);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw r}}return o}}(e,a)||(0,s.A)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);