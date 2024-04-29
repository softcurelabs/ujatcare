"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[1428,531],{33856:(e,a,t)=>{t.d(a,{l:()=>n});var r=t(44030),s=t(46417);const n=()=>(0,s.jsx)(r.Z,{animation:"border",role:"status",children:(0,s.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},20800:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(61378),s=t.n(r),n=(t(72632),t(46417));const i=e=>(0,n.jsx)(n.Fragment,{children:e.showTimeSelectOnly?(0,n.jsx)(s(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"is-invalid",minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,n.jsx)(s(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:a=>e.onChange(a),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",className:"form-control",maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},20192:(e,a,t)=>{t.d(a,{Z:()=>o});t(47313);var r=t(63849),s=t(31616),n=t(52198),i=t(46417);const o=e=>(0,i.jsx)(r.Z,{children:(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(n.Z,{className:"m-0",children:[(0,i.jsx)(n.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,i.jsx)(n.Z.Item,{active:!0,children:e.label},a):(0,i.jsx)(n.Z.Item,{href:e.path,children:e.label},a)))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,a,t)=>{t.d(a,{y:()=>u,J:()=>i});var r=t(47313),s=t(75627),n=t(46417);const i=e=>{let{defaultValues:a,resolver:t,children:i,onSubmit:o,formClass:l}=e;const c=(0,s.cI)({defaultValues:a,resolver:t}),{handleSubmit:d,register:m,control:u,formState:{errors:p}}=c;return(0,n.jsx)("form",{onSubmit:d(o),className:l,noValidate:!0,children:Array.isArray(i)?i.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:p,control:u}}):e)):i})};var o=t(38394),l=t(88178),c=t(72884),d=t.n(c);const m=e=>{let{name:a,placeholder:t,refCallback:s,errors:i,control:c,register:m,className:u}=e;const[p,h]=(0,r.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{className:"mb-0",children:[(0,n.jsx)(l.Z.Control,{type:p?"text":"password",placeholder:t,name:a,id:a,as:"input",ref:e=>{s&&s(e)},className:u,isInvalid:!(!i||!i[a]),...m?m(a):{},autoComplete:a}),(0,n.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,n.jsx)("span",{className:"password-eye",onClick:()=>{h(!p)}})})]})})},u=e=>{let{label:a,type:t,name:r,placeholder:s,register:i,errors:o,control:c,className:d,labelClassName:u,containerClass:p,refCallback:h,children:f,rows:x,...b}=e;const g="textarea"===t?"textarea":"select"===t?"select":"input";return(0,n.jsx)(n.Fragment,{children:"hidden"===t?(0,n.jsx)("input",{type:t,name:r,id:r,...i?i(r):{},...b,className:d}):(0,n.jsx)(n.Fragment,{children:"password"===t?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z.Group,{className:p,children:[a?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(l.Z.Label,{className:u,children:a})," ",f," "]}):null,(0,n.jsx)(m,{name:r,placeholder:s,refCallback:h,errors:o,register:i,className:d}),o&&o[r]?(0,n.jsx)(l.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})}):(0,n.jsx)(n.Fragment,{children:"checkbox"===t||"radio"===t?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z.Group,{className:p,children:[(0,n.jsx)(l.Z.Check,{type:t,label:a,name:r,id:r,ref:e=>{h&&h(e)},className:d,isInvalid:!(!o||!o[r]),...i?i(r):{},...b}),o&&o[r]?(0,n.jsx)(l.Z.Control.Feedback,{type:"invalid",children:o[r].message}):null]})}):(0,n.jsxs)(l.Z.Group,{className:p,children:[a?(0,n.jsx)(l.Z.Label,{className:u,children:a}):null,(0,n.jsx)(l.Z.Control,{type:t,placeholder:s,name:r,id:r,as:g,ref:e=>{h&&h(e)},className:d,isInvalid:!(!o||!o[r]),...i?i(r):{},rows:x,...b,autoComplete:r,children:f||null}),o&&o[r]?(0,n.jsx)(l.Z.Control.Feedback,{type:"invalid",children:o[r].message}):null]})})})})}},31428:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Z});var r=t(47313),s=t(51449),n=t(63849),i=t(31616),o=t(88178),l=t(41709),c=t(93298),d=t(20192),m=t(52487),u=t(20800),p=t(62563),h=t(3463),f=t(24511),x=t(75627),b=t(56352),g=t(2135),y=t(20253),v=t(33689),j=t(61033),N=t(33856),w=t(46417);const C=()=>{const{t:e}=(0,f.$)(),a=(0,p.X)(h.Ry().shape({title:h.Z_().required(e("Please select title")).min(10,"Atleast 10 char required")})),[t,d]=(0,r.useState)(!1),[C,Z]=(0,r.useState)(""),[I,S]=(0,r.useState)(""),k=(0,b.I0)(),{flats:F,users:O}=(0,b.v9)((e=>({flats:e.Flat.flats,users:e.User.users})));(0,r.useEffect)((()=>{k((0,y.i)()),k((0,v.k9)(1))}),[]);const{register:T,handleSubmit:P,setValue:E,reset:R,formState:{errors:D}}=(0,x.cI)({defaultValues:{},resolver:a}),L=P((async e=>{d(!0),await k((0,j.iQ)(e)).unwrap().then((e=>{e&&!0===e.status&&(Z(e.message),window.scrollTo({top:0,behavior:"smooth"})),d(!1)})).catch((e=>{for(var a in e.errors)try{setError(a,{message:e.errors[a].toString()})}catch(t){}d(!1)}))})),[_,z]=(0,r.useState)(new Date);return(0,w.jsxs)(w.Fragment,{children:[C&&(0,w.jsxs)("div",{className:"alert alert-success",children:[C,(0,w.jsx)(g.rU,{to:"/inspection",children:" Back to Inspection."})]}),I&&(0,w.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:I}),(0,w.jsx)(s.Z,{children:(0,w.jsx)(s.Z.Body,{children:(0,w.jsx)(n.Z,{children:(0,w.jsx)(i.Z,{lg:6,children:(0,w.jsxs)("form",{onSubmit:L,children:[(0,w.jsx)(m.y,{label:"Title",type:"text",register:T,name:"title",errors:D,containerClass:"mb-3"},"title"),(0,w.jsx)(m.y,{label:"Description",type:"textarea",register:T,name:"description",errors:D,rows:"3",containerClass:"mb-3"},"description"),(0,w.jsx)(m.y,{type:"hidden",register:T,name:"inspection_date",value:_.toISOString().split("T")[0]},"inspection_date"),(0,w.jsxs)("div",{className:"mb-3",children:[(0,w.jsx)("label",{className:"form-label",children:"Inspection Date"})," ",(0,w.jsx)("br",{}),(0,w.jsx)(u.Z,{value:_,minDate:new Date,showTimeSelect:!0,dateFormat:"MM-dd-yyyy HH:mm",onChange:e=>{z(e),E("inspection_date",e.toLocaleString("sv-SE"))}})]}),(0,w.jsx)(n.Z,{children:(0,w.jsxs)(o.Z.Group,{className:"mb-3 input-group",children:[(0,w.jsx)(l.Z,{className:"me-2",children:"Priority"}),(0,w.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"priority",label:"Low",value:1,checked:!0,register:T,id:"priorty_low"},"priorty_low"),(0,w.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"priority",label:"Medium",value:2,register:T,id:"priorty_medium"},"priorty_medium"),(0,w.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"priority",label:"High",value:3,register:T,id:"priorty_high"},"priorty_high")]})}),(0,w.jsxs)(n.Z,{children:[(0,w.jsxs)(o.Z.Group,{className:"mb-3 input-group",children:[(0,w.jsx)(l.Z,{className:"me-2",children:"Status"}),(0,w.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"status",label:"Open",value:1,checked:!0,id:"status_open",register:T},"status_open"),(0,w.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"status",label:"In Progress",value:2,id:"status_progress",register:T},"status_progress"),(0,w.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"status",label:"Close",value:3,id:"status_close",register:T},"status_close")]}),(0,w.jsx)(m.y,{type:"select",label:"Apartment#",name:"flat_id",containerClass:"mb-3 ",register:T,errors:D,children:F.length&&F.map((e=>(0,w.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,w.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))}),(0,w.jsx)(m.y,{type:"select",label:"Assign To",name:"inspection_by",containerClass:"mb-3 ",register:T,errors:D,children:O?O.data.length&&O.data.map((e=>(0,w.jsxs)("option",{value:e.user.id.toString(),children:[e.user.name," - ",e.user.role]},"user"+e.user.id))):(0,w.jsx)("option",{})}),(0,w.jsx)(m.y,{label:"Notes",type:"textarea",register:T,name:"notes",errors:D,rows:"3",containerClass:"mb-3"},"notes")]}),t?(0,w.jsx)(N.l,{}):(0,w.jsx)(c.Z,{variant:"primary",type:"submit",children:"Create"})]})})})})})]})},Z=()=>(0,w.jsxs)(r.Fragment,{children:[(0,w.jsx)(d.Z,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Maintanance Inspections",path:"/inspection"},{label:"Maintanance Inspection",path:"/inspection/new",active:!0}],title:"Maintanance Inspection"}),(0,w.jsx)(n.Z,{children:(0,w.jsx)(i.Z,{children:(0,w.jsx)(C,{})})})]})},46682:(e,a,t)=>{t.d(a,{UI:()=>s,XW:()=>n});var r=t(47313);function s(e,a){let t=0;return r.Children.map(e,(e=>r.isValidElement(e)?a(e,t++):e))}function n(e,a){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===a))}},88178:(e,a,t)=>{t.d(a,{Z:()=>z});var r=t(72884),s=t.n(r),n=t(75192),i=t.n(n),o=t(47313),l=t(46417);const c={type:i().string,tooltip:i().bool,as:i().elementType},d=o.forwardRef(((e,a)=>{let{as:t="div",className:r,type:n="valid",tooltip:i=!1,...o}=e;return(0,l.jsx)(t,{...o,ref:a,className:s()(r,"".concat(n,"-").concat(i?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const m=d;var u=t(56084),p=t(5978),h=t(68524);const f=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,htmlFor:n,...i}=e;const{controlId:c}=(0,o.useContext)(p.Z);return t=(0,h.vE)(t,"form-check-label"),(0,l.jsx)("label",{...i,ref:a,htmlFor:n||c,className:s()(r,t)})}));f.displayName="FormCheckLabel";const x=f;var b=t(46682);const g=o.forwardRef(((e,a)=>{let{id:t,bsPrefix:r,bsSwitchPrefix:n,inline:i=!1,reverse:c=!1,disabled:d=!1,isValid:f=!1,isInvalid:g=!1,feedbackTooltip:y=!1,feedback:v,feedbackType:j,className:N,style:w,title:C="",type:Z="checkbox",label:I,children:S,as:k="input",...F}=e;r=(0,h.vE)(r,"form-check"),n=(0,h.vE)(n,"form-switch");const{controlId:O}=(0,o.useContext)(p.Z),T=(0,o.useMemo)((()=>({controlId:t||O})),[O,t]),P=!S&&null!=I&&!1!==I||(0,b.XW)(S,x),E=(0,l.jsx)(u.Z,{...F,type:"switch"===Z?"checkbox":Z,ref:a,isValid:f,isInvalid:g,disabled:d,as:k});return(0,l.jsx)(p.Z.Provider,{value:T,children:(0,l.jsx)("div",{style:w,className:s()(N,P&&r,i&&"".concat(r,"-inline"),c&&"".concat(r,"-reverse"),"switch"===Z&&n),children:S||(0,l.jsxs)(l.Fragment,{children:[E,P&&(0,l.jsx)(x,{title:C,children:I}),v&&(0,l.jsx)(m,{type:j,tooltip:y,children:v})]})})})}));g.displayName="FormCheck";const y=Object.assign(g,{Input:u.Z,Label:x});t(21024);const v=o.forwardRef(((e,a)=>{let{bsPrefix:t,type:r,size:n,htmlSize:i,id:c,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:f,readOnly:x,as:b="input",...g}=e;const{controlId:y}=(0,o.useContext)(p.Z);return t=(0,h.vE)(t,"form-control"),(0,l.jsx)(b,{...g,type:r,size:i,ref:a,readOnly:x,id:c||y,className:s()(d,f?"".concat(t,"-plaintext"):t,n&&"".concat(t,"-").concat(n),"color"===r&&"".concat(t,"-color"),m&&"is-valid",u&&"is-invalid")})}));v.displayName="FormControl";const j=Object.assign(v,{Feedback:m}),N=o.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:n="div",...i}=e;return r=(0,h.vE)(r,"form-floating"),(0,l.jsx)(n,{ref:a,className:s()(t,r),...i})}));N.displayName="FormFloating";const w=N;var C=t(87021),Z=t(41709);const I=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,id:n,...i}=e;const{controlId:c}=(0,o.useContext)(p.Z);return t=(0,h.vE)(t,"form-range"),(0,l.jsx)("input",{...i,type:"range",ref:a,className:s()(r,t),id:n||c})}));I.displayName="FormRange";const S=I,k=o.forwardRef(((e,a)=>{let{bsPrefix:t,size:r,htmlSize:n,className:i,isValid:c=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:f}=(0,o.useContext)(p.Z);return t=(0,h.vE)(t,"form-select"),(0,l.jsx)("select",{...u,size:n,ref:a,className:s()(i,t,r&&"".concat(t,"-").concat(r),c&&"is-valid",d&&"is-invalid"),id:m||f})}));k.displayName="FormSelect";const F=k,O=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,as:n="small",muted:i,...o}=e;return t=(0,h.vE)(t,"form-text"),(0,l.jsx)(n,{...o,ref:a,className:s()(r,t,i&&"text-muted")})}));O.displayName="FormText";const T=O,P=o.forwardRef(((e,a)=>(0,l.jsx)(y,{...e,ref:a,type:"switch"})));P.displayName="Switch";const E=Object.assign(P,{Input:y.Input,Label:y.Label}),R=o.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,children:n,controlId:i,label:o,...c}=e;return t=(0,h.vE)(t,"form-floating"),(0,l.jsxs)(C.Z,{ref:a,className:s()(r,t),controlId:i,...c,children:[n,(0,l.jsx)("label",{htmlFor:i,children:o})]})}));R.displayName="FloatingLabel";const D=R,L={_ref:i().any,validated:i().bool,as:i().elementType},_=o.forwardRef(((e,a)=>{let{className:t,validated:r,as:n="form",...i}=e;return(0,l.jsx)(n,{...i,ref:a,className:s()(t,r&&"was-validated")})}));_.displayName="Form",_.propTypes=L;const z=Object.assign(_,{Group:C.Z,Control:j,Floating:w,Check:y,Switch:E,Label:Z.Z,Text:T,Range:S,Select:F,FloatingLabel:D})},56084:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(72884),s=t.n(r),n=t(47313),i=t(5978),o=t(68524),l=t(46417);const c=n.forwardRef(((e,a)=>{let{id:t,bsPrefix:r,className:c,type:d="checkbox",isValid:m=!1,isInvalid:u=!1,as:p="input",...h}=e;const{controlId:f}=(0,n.useContext)(i.Z);return r=(0,o.vE)(r,"form-check-input"),(0,l.jsx)(p,{...h,ref:a,type:d,id:t||f,className:s()(c,r,m&&"is-valid",u&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},87021:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(47313),s=t(5978),n=t(46417);const i=r.forwardRef(((e,a)=>{let{controlId:t,as:i="div",...o}=e;const l=(0,r.useMemo)((()=>({controlId:t})),[t]);return(0,n.jsx)(s.Z.Provider,{value:l,children:(0,n.jsx)(i,{...o,ref:a})})}));i.displayName="FormGroup";const o=i},38394:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(72884),s=t.n(r),n=t(47313),i=t(68524),o=t(56084),l=t(94354),c=t(46417);const d=n.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:n="span",...o}=e;return r=(0,i.vE)(r,"input-group-text"),(0,c.jsx)(n,{ref:a,className:s()(t,r),...o})}));d.displayName="InputGroupText";const m=d,u=n.forwardRef(((e,a)=>{let{bsPrefix:t,size:r,hasValidation:o,className:d,as:m="div",...u}=e;t=(0,i.vE)(t,"input-group");const p=(0,n.useMemo)((()=>({})),[]);return(0,c.jsx)(l.Z.Provider,{value:p,children:(0,c.jsx)(m,{ref:a,...u,className:s()(d,t,r&&"".concat(t,"-").concat(r),o&&"has-validation")})})}));u.displayName="InputGroup";const p=Object.assign(u,{Text:m,Radio:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(m,{children:(0,c.jsx)(o.Z,{type:"checkbox",...e})})})},44030:(e,a,t)=>{t.d(a,{Z:()=>c});var r=t(72884),s=t.n(r),n=t(47313),i=t(68524),o=t(46417);const l=n.forwardRef(((e,a)=>{let{bsPrefix:t,variant:r,animation:n="border",size:l,as:c="div",className:d,...m}=e;t=(0,i.vE)(t,"spinner");const u="".concat(t,"-").concat(n);return(0,o.jsx)(c,{ref:a,...m,className:s()(d,u,l&&"".concat(u,"-").concat(l),r&&"text-".concat(r))})}));l.displayName="Spinner";const c=l},24511:(e,a,t)=>{t.d(a,{$:()=>h});var r=t(70885),s=t(4942),n=t(47313),i=t(10412);function o(){if(console&&console.warn){for(var e,a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var l={};function c(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];"string"===typeof a[0]&&l[a[0]]||("string"===typeof a[0]&&(l[a[0]]=new Date),o.apply(void 0,a))}function d(e,a,t){e.loadNamespaces(a,(function(){if(e.isInitialized)t();else{e.on("initialized",(function a(){setTimeout((function(){e.off("initialized",a)}),0),t()}))}}))}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p=function(e,a){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=a?t.current:e}),[e,a]),t.current};function h(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.i18n,s=(0,n.useContext)(i.OO)||{},o=s.i18n,l=s.defaultNS,m=t||o||(0,i.nI)();if(m&&!m.reportNamespaces&&(m.reportNamespaces=new i.zv),!m){c("You will need to pass in an i18next instance by using initReactI18next");var h=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[h,{},!1];return f.t=h,f.i18n={},f.ready=!1,f}m.options.react&&void 0!==m.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=u(u(u({},(0,i.JP)()),m.options.react),a),b=x.useSuspense,g=x.keyPrefix,y=e||l||m.options&&m.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],m.reportNamespaces.addUsedNamespaces&&m.reportNamespaces.addUsedNamespaces(y);var v=(m.isInitialized||m.initializedStoreOnce)&&y.every((function(e){return function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.languages&&a.languages.length?void 0!==a.options.ignoreJSONStructure?a.hasLoadedNamespace(e,{precheck:function(a,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!r(a.isLanguageChangingTo,e))return!1}}):function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.languages[0],s=!!a.options&&a.options.fallbackLng,n=a.languages[a.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=a.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!i(a.isLanguageChangingTo,e))&&(!!a.hasResourceBundle(r,e)||!(a.services.backendConnector.backend&&(!a.options.resources||a.options.partialBundledLanguages))||!(!i(r,e)||s&&!i(n,e)))}(e,a,t):(c("i18n.languages were undefined or empty",a.languages),!0)}(e,m,x)}));function j(){return m.getFixedT(null,"fallback"===x.nsMode?y:y[0],g)}var N=(0,n.useState)(j),w=(0,r.Z)(N,2),C=w[0],Z=w[1],I=y.join(),S=p(I),k=(0,n.useRef)(!0);(0,n.useEffect)((function(){var e=x.bindI18n,a=x.bindI18nStore;function t(){k.current&&Z(j)}return k.current=!0,v||b||d(m,y,(function(){k.current&&Z(j)})),v&&S&&S!==I&&k.current&&Z(j),e&&m&&m.on(e,t),a&&m&&m.store.on(a,t),function(){k.current=!1,e&&m&&e.split(" ").forEach((function(e){return m.off(e,t)})),a&&m&&a.split(" ").forEach((function(e){return m.store.off(e,t)}))}}),[m,I]);var F=(0,n.useRef)(!0);(0,n.useEffect)((function(){k.current&&!F.current&&Z(j),F.current=!1}),[m,g]);var O=[C,m,v];if(O.t=C,O.i18n=m,O.ready=v,v)return O;if(!v&&!b)return O;throw new Promise((function(e){d(m,y,(function(){e()}))}))}},70885:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(40181);function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,n,i,o=[],l=!0,c=!1;try{if(n=(t=t.call(e)).next,0===a){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=n.call(t)).done)&&(o.push(r.value),o.length!==a);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw s}}return o}}(e,a)||(0,r.Z)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);