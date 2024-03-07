"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9477,8109],{20800:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(61378),n=a.n(r),s=(a(72632),a(46417));const i=e=>(0,s.jsx)(s.Fragment,{children:e.showTimeSelectOnly?(0,s.jsx)(n(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:t=>e.onChange(t),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:"hh:mm",className:"is-invalid",minDate:e.minDate,scrollableYearDropdown:!0,scrollableMonthYearDropdown:!0,maxDate:e.maxDate,disabled:e.disabled,monthsShown:e.monthsShown,wrapperClassName:"is-invalid",showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"}):(0,s.jsx)(n(),{name:e.name,timeIntervals:e.tI,selected:e.value,onChange:t=>e.onChange(t),showTimeSelect:e.showTimeSelect,timeFormat:"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat,minDate:e.minDate,disabled:e.disabled,wrapperClassName:"is-invalid",maxDate:e.maxDate,showMonthDropdown:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},20192:(e,t,a)=>{a.d(t,{Z:()=>l});a(47313);var r=a(63849),n=a(31616),s=a(52198),i=a(46417);const l=e=>(0,i.jsx)(r.Z,{children:(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(s.Z,{className:"m-0",children:[(0,i.jsx)(s.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?(0,i.jsx)(s.Z.Item,{active:!0,children:e.label},t):(0,i.jsx)(s.Z.Item,{href:e.path,children:e.label},t)))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})},52487:(e,t,a)=>{a.d(t,{y:()=>u,J:()=>i});var r=a(47313),n=a(75627),s=a(46417);const i=e=>{let{defaultValues:t,resolver:a,children:i,onSubmit:l,formClass:o}=e;const c=(0,n.cI)({defaultValues:t,resolver:a}),{handleSubmit:d,register:m,control:u,formState:{errors:p}}=c;return(0,s.jsx)("form",{onSubmit:d(l),className:o,noValidate:!0,children:Array.isArray(i)?i.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:p,control:u}}):e)):i})};var l=a(38394),o=a(88178),c=a(72884),d=a.n(c);const m=e=>{let{name:t,placeholder:a,refCallback:n,errors:i,control:c,register:m,className:u}=e;const[p,h]=(0,r.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.Z,{className:"mb-0",children:[(0,s.jsx)(o.Z.Control,{type:p?"text":"password",placeholder:a,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:u,isInvalid:!(!i||!i[t]),...m?m(t):{},autoComplete:t}),(0,s.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:()=>{h(!p)}})})]})})},u=e=>{let{label:t,type:a,name:r,placeholder:n,register:i,errors:l,control:c,className:d,labelClassName:u,containerClass:p,refCallback:h,children:f,rows:x,...b}=e;const y="textarea"===a?"textarea":"select"===a?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===a?(0,s.jsx)("input",{type:a,name:r,id:r,...i?i(r):{},...b,className:d}):(0,s.jsx)(s.Fragment,{children:"password"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z.Group,{className:p,children:[t?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(o.Z.Label,{className:u,children:t})," ",f," "]}):null,(0,s.jsx)(m,{name:r,placeholder:n,refCallback:h,errors:l,register:i,className:d}),l&&l[r]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:l[r].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"checkbox"===a||"radio"===a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z.Group,{className:p,children:[(0,s.jsx)(o.Z.Check,{type:a,label:t,name:r,id:r,ref:e=>{h&&h(e)},className:d,isInvalid:!(!l||!l[r]),...i?i(r):{},...b}),l&&l[r]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:l[r].message}):null]})}):(0,s.jsxs)(o.Z.Group,{className:p,children:[t?(0,s.jsx)(o.Z.Label,{className:u,children:t}):null,(0,s.jsx)(o.Z.Control,{type:a,placeholder:n,name:r,id:r,as:y,ref:e=>{h&&h(e)},className:d,isInvalid:!(!l||!l[r]),...i?i(r):{},rows:x,...b,autoComplete:r,children:f||null}),l&&l[r]?(0,s.jsx)(o.Z.Control.Feedback,{type:"invalid",children:l[r].message}):null]})})})})}},79477:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var r=a(47313),n=a(10195),s=a(63849),i=a(31616),l=a(88178),o=a(41709),c=a(93298),d=a(20192),m=a(52487),u=a(20800),p=a(62563),h=a(3463),f=a(24511),x=a(75627),b=a(56352),y=a(58467),g=a(2135),v=a(20253),j=a(33689),w=a(61033),N=a(61875),C=a(46417);const Z=()=>{const{t:e}=(0,f.$)(),t=(0,p.X)(h.Ry().shape({title:h.Z_().required(e("Please select title")).min(10,"Atleast 10 char required")})),[a,d]=(0,r.useState)(!1),[Z,I]=(0,r.useState)(""),[k,S]=(0,r.useState)(""),F=(0,b.I0)(),{flats:O,users:T}=(0,b.v9)((e=>({flats:e.Flat.flats,users:e.User.users}))),_=(0,y.UO)();(0,r.useEffect)((()=>{F((0,v.i)()).then((()=>{F((0,j.k9)(1)).then((()=>{F((0,w.Dp)(_.id)).unwrap().then((e=>{E("id",e.id),E("title",e.title),E("description",e.description),"number"===typeof e.inspection_by&&E("inspection_by",e.inspection_by),E("flat_id",e.flat_id),E("status",e.status.toString()),E("priority",e.priority.toString()),E("notes",e.notes),E("inspection_date",e.inspection_date),A(new Date(e.inspection_date))})).catch((e=>S(e)))}))}))}),[_.id]);const{register:P,handleSubmit:D,setValue:E,setError:R,reset:L,formState:{errors:z}}=(0,x.cI)({defaultValues:{},resolver:t}),M=D((async e=>{d(!0),await F((0,w.JR)(e)).unwrap().then((e=>{e&&!0===e.status&&(I(e.message),window.scrollTo({top:0,behavior:"smooth"})),d(!1)})).catch((e=>{for(var t in e.errors)try{R(t,{message:e.errors[t].toString()})}catch(a){}d(!1)}))})),[V,A]=(0,r.useState)(new Date);return(0,C.jsxs)(C.Fragment,{children:[Z&&(0,C.jsxs)("div",{className:"alert alert-success",children:[Z,(0,C.jsx)(g.rU,{to:"/inspection",children:" Back to Inspection."})]}),k&&(0,C.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:k}),(0,C.jsx)(n.Z,{children:(0,C.jsx)(n.Z.Body,{children:(0,C.jsx)(s.Z,{children:(0,C.jsx)(i.Z,{lg:6,children:(0,C.jsxs)("form",{onSubmit:M,children:[(0,C.jsx)(m.y,{type:"hidden",name:"id"}),(0,C.jsx)(m.y,{label:"Title",type:"text",register:P,name:"title",errors:z,containerClass:"mb-3"},"title"),(0,C.jsx)(m.y,{label:"Description",type:"textarea",register:P,name:"description",errors:z,rows:"3",containerClass:"mb-3"},"description"),(0,C.jsx)(m.y,{type:"hidden",register:P,name:"inspection_date",value:V.toISOString().split("T")[0]},"inspection_date"),(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsx)("label",{className:"form-label",children:"Inspection Date"})," ",(0,C.jsx)("br",{}),(0,C.jsx)(u.Z,{value:V,minDate:new Date,showTimeSelect:!0,dateFormat:"MM-dd-yyyy HH:mm",onChange:e=>{A(e),E("inspection_date",e.toLocaleString("sv-SE"))}})]}),(0,C.jsx)(s.Z,{children:(0,C.jsxs)(l.Z.Group,{className:"mb-3 input-group",children:[(0,C.jsx)(o.Z,{className:"me-2",children:"Priority"}),(0,C.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"priority",label:"Low",value:1,register:P,id:"priorty_low",defaultChecked:!0},"priorty_low"),(0,C.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"priority",label:"Medium",value:2,register:P,id:"priorty_medium"},"priorty_medium"),(0,C.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"priority",label:"High",value:3,register:P,id:"priorty_high"},"priorty_high")]})}),(0,C.jsxs)(s.Z,{children:[(0,C.jsxs)(l.Z.Group,{className:"mb-3 input-group",children:[(0,C.jsx)(o.Z,{className:"me-2",children:"Status"}),(0,C.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"status",label:"Open",value:1,id:"status_open",register:P,defaultChecked:!0},"status_open"),(0,C.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"status",label:"In Progress",value:2,id:"status_progress",register:P},"status_progress"),(0,C.jsx)(m.y,{type:"radio",className:"form-check-inline",name:"status",label:"Close",value:3,id:"status_close",register:P},"status_close")]}),(0,C.jsx)(m.y,{type:"select",label:"Apartment#",name:"flat_id",containerClass:"mb-3 ",register:P,errors:z,children:O.length&&O.map((e=>(0,C.jsx)("optgroup",{label:e.name.toString(),children:e.flats.map((e=>(0,C.jsx)("option",{value:e.id,children:e.name},"flat"+e.id)))},"apartment".concat(e.id))))}),z&&z.flat_id?(0,C.jsx)(l.Z.Control.Feedback,{type:"invalid",children:z.flat_id.message}):null,(0,C.jsx)(m.y,{type:"select",label:"Assign To",name:"inspection_by",containerClass:"mb-3 ",register:P,errors:z,children:T?T.data.length&&T.data.map((e=>(0,C.jsxs)("option",{value:e.user.id.toString(),children:[e.user.name," - ",e.user.role]},"user"+e.user.id))):(0,C.jsx)("option",{})}),z&&z.inspection_by?(0,C.jsx)(l.Z.Control.Feedback,{type:"invalid",children:z.inspection_by.message}):null,(0,C.jsx)(m.y,{label:"Notes",type:"textarea",register:P,name:"notes",errors:z,rows:"3",containerClass:"mb-3"},"notes")]}),a?(0,C.jsx)(N.Z,{}):(0,C.jsx)(c.Z,{variant:"primary",type:"submit",children:"Create"})]})})})})})]})},I=()=>(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)(d.Z,{breadCrumbItems:[{label:"Dashboard",path:"/dashboard-2"},{label:"Maintanance Inspections",path:"/inspection"},{label:"Maintanance Inspection",path:"/inspection/new",active:!0}],title:"Maintanance Inspection"}),(0,C.jsx)(s.Z,{children:(0,C.jsx)(i.Z,{children:(0,C.jsx)(Z,{})})})]})},46682:(e,t,a)=>{a.d(t,{UI:()=>n,XW:()=>s});var r=a(47313);function n(e,t){let a=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,a++):e))}function s(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}},88178:(e,t,a)=>{a.d(t,{Z:()=>z});var r=a(72884),n=a.n(r),s=a(75192),i=a.n(s),l=a(47313),o=a(46417);const c={type:i().string,tooltip:i().bool,as:i().elementType},d=l.forwardRef(((e,t)=>{let{as:a="div",className:r,type:s="valid",tooltip:i=!1,...l}=e;return(0,o.jsx)(a,{...l,ref:t,className:n()(r,"".concat(s,"-").concat(i?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const m=d;var u=a(56084),p=a(5978),h=a(68524);const f=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,htmlFor:s,...i}=e;const{controlId:c}=(0,l.useContext)(p.Z);return a=(0,h.vE)(a,"form-check-label"),(0,o.jsx)("label",{...i,ref:t,htmlFor:s||c,className:n()(r,a)})}));f.displayName="FormCheckLabel";const x=f;var b=a(46682);const y=l.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,bsSwitchPrefix:s,inline:i=!1,reverse:c=!1,disabled:d=!1,isValid:f=!1,isInvalid:y=!1,feedbackTooltip:g=!1,feedback:v,feedbackType:j,className:w,style:N,title:C="",type:Z="checkbox",label:I,children:k,as:S="input",...F}=e;r=(0,h.vE)(r,"form-check"),s=(0,h.vE)(s,"form-switch");const{controlId:O}=(0,l.useContext)(p.Z),T=(0,l.useMemo)((()=>({controlId:a||O})),[O,a]),_=!k&&null!=I&&!1!==I||(0,b.XW)(k,x),P=(0,o.jsx)(u.Z,{...F,type:"switch"===Z?"checkbox":Z,ref:t,isValid:f,isInvalid:y,disabled:d,as:S});return(0,o.jsx)(p.Z.Provider,{value:T,children:(0,o.jsx)("div",{style:N,className:n()(w,_&&r,i&&"".concat(r,"-inline"),c&&"".concat(r,"-reverse"),"switch"===Z&&s),children:k||(0,o.jsxs)(o.Fragment,{children:[P,_&&(0,o.jsx)(x,{title:C,children:I}),v&&(0,o.jsx)(m,{type:j,tooltip:g,children:v})]})})})}));y.displayName="FormCheck";const g=Object.assign(y,{Input:u.Z,Label:x});a(21024);const v=l.forwardRef(((e,t)=>{let{bsPrefix:a,type:r,size:s,htmlSize:i,id:c,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:f,readOnly:x,as:b="input",...y}=e;const{controlId:g}=(0,l.useContext)(p.Z);return a=(0,h.vE)(a,"form-control"),(0,o.jsx)(b,{...y,type:r,size:i,ref:t,readOnly:x,id:c||g,className:n()(d,f?"".concat(a,"-plaintext"):a,s&&"".concat(a,"-").concat(s),"color"===r&&"".concat(a,"-color"),m&&"is-valid",u&&"is-invalid")})}));v.displayName="FormControl";const j=Object.assign(v,{Feedback:m}),w=l.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="div",...i}=e;return r=(0,h.vE)(r,"form-floating"),(0,o.jsx)(s,{ref:t,className:n()(a,r),...i})}));w.displayName="FormFloating";const N=w;var C=a(87021),Z=a(41709);const I=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,id:s,...i}=e;const{controlId:c}=(0,l.useContext)(p.Z);return a=(0,h.vE)(a,"form-range"),(0,o.jsx)("input",{...i,type:"range",ref:t,className:n()(r,a),id:s||c})}));I.displayName="FormRange";const k=I,S=l.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,htmlSize:s,className:i,isValid:c=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:f}=(0,l.useContext)(p.Z);return a=(0,h.vE)(a,"form-select"),(0,o.jsx)("select",{...u,size:s,ref:t,className:n()(i,a,r&&"".concat(a,"-").concat(r),c&&"is-valid",d&&"is-invalid"),id:m||f})}));S.displayName="FormSelect";const F=S,O=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,as:s="small",muted:i,...l}=e;return a=(0,h.vE)(a,"form-text"),(0,o.jsx)(s,{...l,ref:t,className:n()(r,a,i&&"text-muted")})}));O.displayName="FormText";const T=O,_=l.forwardRef(((e,t)=>(0,o.jsx)(g,{...e,ref:t,type:"switch"})));_.displayName="Switch";const P=Object.assign(_,{Input:g.Input,Label:g.Label}),D=l.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,children:s,controlId:i,label:l,...c}=e;return a=(0,h.vE)(a,"form-floating"),(0,o.jsxs)(C.Z,{ref:t,className:n()(r,a),controlId:i,...c,children:[s,(0,o.jsx)("label",{htmlFor:i,children:l})]})}));D.displayName="FloatingLabel";const E=D,R={_ref:i().any,validated:i().bool,as:i().elementType},L=l.forwardRef(((e,t)=>{let{className:a,validated:r,as:s="form",...i}=e;return(0,o.jsx)(s,{...i,ref:t,className:n()(a,r&&"was-validated")})}));L.displayName="Form",L.propTypes=R;const z=Object.assign(L,{Group:C.Z,Control:j,Floating:N,Check:g,Switch:P,Label:Z.Z,Text:T,Range:k,Select:F,FloatingLabel:E})},56084:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(72884),n=a.n(r),s=a(47313),i=a(5978),l=a(68524),o=a(46417);const c=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,className:c,type:d="checkbox",isValid:m=!1,isInvalid:u=!1,as:p="input",...h}=e;const{controlId:f}=(0,s.useContext)(i.Z);return r=(0,l.vE)(r,"form-check-input"),(0,o.jsx)(p,{...h,ref:t,type:d,id:a||f,className:n()(c,r,m&&"is-valid",u&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},87021:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(47313),n=a(5978),s=a(46417);const i=r.forwardRef(((e,t)=>{let{controlId:a,as:i="div",...l}=e;const o=(0,r.useMemo)((()=>({controlId:a})),[a]);return(0,s.jsx)(n.Z.Provider,{value:o,children:(0,s.jsx)(i,{...l,ref:t})})}));i.displayName="FormGroup";const l=i},38394:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(72884),n=a.n(r),s=a(47313),i=a(68524),l=a(56084),o=a(94354),c=a(46417);const d=s.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="span",...l}=e;return r=(0,i.vE)(r,"input-group-text"),(0,c.jsx)(s,{ref:t,className:n()(a,r),...l})}));d.displayName="InputGroupText";const m=d,u=s.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,hasValidation:l,className:d,as:m="div",...u}=e;a=(0,i.vE)(a,"input-group");const p=(0,s.useMemo)((()=>({})),[]);return(0,c.jsx)(o.Z.Provider,{value:p,children:(0,c.jsx)(m,{ref:t,...u,className:n()(d,a,r&&"".concat(a,"-").concat(r),l&&"has-validation")})})}));u.displayName="InputGroup";const p=Object.assign(u,{Text:m,Radio:e=>(0,c.jsx)(m,{children:(0,c.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(m,{children:(0,c.jsx)(l.Z,{type:"checkbox",...e})})})},24511:(e,t,a)=>{a.d(t,{$:()=>h});var r=a(70885),n=a(4942),s=a(47313),i=a(10412);function l(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var o={};function c(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&o[t[0]]||("string"===typeof t[0]&&(o[t[0]]=new Date),l.apply(void 0,t))}function d(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=function(e,t){var a=(0,s.useRef)();return(0,s.useEffect)((function(){a.current=t?a.current:e}),[e,t]),a.current};function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,n=(0,s.useContext)(i.OO)||{},l=n.i18n,o=n.defaultNS,m=a||l||(0,i.nI)();if(m&&!m.reportNamespaces&&(m.reportNamespaces=new i.zv),!m){c("You will need to pass in an i18next instance by using initReactI18next");var h=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[h,{},!1];return f.t=h,f.i18n={},f.ready=!1,f}m.options.react&&void 0!==m.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=u(u(u({},(0,i.JP)()),m.options.react),t),b=x.useSuspense,y=x.keyPrefix,g=e||o||m.options&&m.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],m.reportNamespaces.addUsedNamespaces&&m.reportNamespaces.addUsedNamespaces(g);var v=(m.isInitialized||m.initializedStoreOnce)&&g.every((function(e){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,r){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],n=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,a){var r=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===r||2===r};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(r,e)||n&&!i(s,e)))}(e,t,a):(c("i18n.languages were undefined or empty",t.languages),!0)}(e,m,x)}));function j(){return m.getFixedT(null,"fallback"===x.nsMode?g:g[0],y)}var w=(0,s.useState)(j),N=(0,r.Z)(w,2),C=N[0],Z=N[1],I=g.join(),k=p(I),S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=x.bindI18n,t=x.bindI18nStore;function a(){S.current&&Z(j)}return S.current=!0,v||b||d(m,g,(function(){S.current&&Z(j)})),v&&k&&k!==I&&S.current&&Z(j),e&&m&&m.on(e,a),t&&m&&m.store.on(t,a),function(){S.current=!1,e&&m&&e.split(" ").forEach((function(e){return m.off(e,a)})),t&&m&&t.split(" ").forEach((function(e){return m.store.off(e,a)}))}}),[m,I]);var F=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!F.current&&Z(j),F.current=!1}),[m,y]);var O=[C,m,v];if(O.t=C,O.i18n=m,O.ready=v,v)return O;if(!v&&!b)return O;throw new Promise((function(e){d(m,g,(function(){e()}))}))}},70885:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(40181);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,s,i,l=[],o=!0,c=!1;try{if(s=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(r=s.call(a)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(e){c=!0,n=e}finally{try{if(!o&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(c)throw n}}return l}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);