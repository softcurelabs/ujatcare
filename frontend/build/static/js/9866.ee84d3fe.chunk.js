"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9866],{41033:(e,s,a)=>{a.d(s,{A:()=>n});a(9950);var r=a(86781),t=a(68459),l=a(81924),i=a(44414);const n=e=>(0,i.jsx)(r.A,{children:(0,i.jsx)(t.A,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("div",{children:(0,i.jsxs)(l.A,{className:"m-0 mb-0",children:[(0,i.jsx)(l.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,s)=>e.active?(0,i.jsx)(l.A.Item,{active:!0,children:e.label},s):(0,i.jsx)(l.A.Item,{href:e.path,children:e.label},s)))]})}),(0,i.jsx)("h4",{className:"page-title",children:e.title})]})})})},68984:(e,s,a)=>{a.d(s,{Z:()=>p,z:()=>i});var r=a(9950),t=a(9449),l=a(44414);const i=e=>{let{defaultValues:s,resolver:a,children:i,onSubmit:n,formClass:c}=e;const o=(0,t.mN)({defaultValues:s,resolver:a}),{handleSubmit:d,register:m,control:p,formState:{errors:u}}=o;return(0,l.jsx)("form",{onSubmit:d(n),className:c,noValidate:!0,children:Array.isArray(i)?i.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:u,control:p}}):e)):i})};var n=a(75623),c=a(64055),o=a(48738),d=a.n(o);const m=e=>{let{name:s,placeholder:a,refCallback:t,errors:i,control:o,register:m,className:p}=e;const[u,h]=(0,r.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(n.A,{className:"mb-0",children:[(0,l.jsx)(c.A.Control,{type:u?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:e=>{t&&t(e)},className:p,isInvalid:!(!i||!i[s]),...m?m(s):{},autoComplete:s}),(0,l.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":u}),"data-password":u?"true":"false",children:(0,l.jsx)("span",{className:"password-eye",onClick:()=>{h(!u)}})})]})})},p=e=>{let{label:s,type:a,name:r,placeholder:t,register:i,errors:n,control:o,className:d,labelClassName:p,containerClass:u,refCallback:h,children:f,rows:x,symbol:j,...b}=e;const N="textarea"===a?"textarea":"select"===a?"select":"input";return(0,l.jsx)(l.Fragment,{children:"hidden"===a?(0,l.jsx)("input",{type:a,name:r,id:r,...i?i(r):{},...b,className:d}):(0,l.jsx)(l.Fragment,{children:"password"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.A.Group,{className:u,children:[s?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.A.Label,{className:p,children:s})," ",f," "]}):null,(0,l.jsx)(m,{name:r,placeholder:t,refCallback:h,errors:n,register:i,className:d}),n&&n[r]?(0,l.jsx)(c.A.Control.Feedback,{type:"invalid",className:"d-block",children:n[r].message}):null]})}):(0,l.jsx)(l.Fragment,{children:"checkbox"===a||"radio"===a?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.A.Group,{className:u,children:[(0,l.jsx)(c.A.Check,{type:a,label:s,name:r,id:r,ref:e=>{h&&h(e)},className:d,isInvalid:!(!n||!n[r]),...i?i(r):{},...b}),n&&n[r]?(0,l.jsx)(c.A.Control.Feedback,{type:"invalid",children:n[r].message}):null]})}):(0,l.jsxs)(c.A.Group,{className:u,children:[s?(0,l.jsx)(c.A.Label,{className:p,children:s}):null,j?(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("span",{className:"input-group-text",id:r,children:j}),(0,l.jsx)(c.A.Control,{type:a,placeholder:t,name:r,id:r,as:N,ref:e=>{h&&h(e)},className:d,isInvalid:!(!n||!n[r]),...i?i(r):{},rows:x,...b,autoComplete:r,children:f||null})]}):(0,l.jsx)(c.A.Control,{type:a,placeholder:t,name:r,id:r,as:N,ref:e=>{h&&h(e)},className:d,isInvalid:!(!n||!n[r]),...i?i(r):{},rows:x,...b,autoComplete:r,children:f||null}),n&&n[r]?(0,l.jsx)(c.A.Control.Feedback,{type:"invalid",children:n[r].message}):null]})})})})}},59866:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var r=a(9950),t=a(9449),l=a(471),i=a(86781),n=a(68459),c=a(97937),o=a(41033),d=a(68984),m=a(28429),p=a(80183),u=a(27081),h=a(26473),f=a(60666),x=a(19443),j=a(44414);const b=()=>{const e=(0,u.wA)(),[s,a]=(0,r.useState)(""),[o,b]=(0,r.useState)(),[N,v]=(0,r.useState)(""),y=(0,h.t)(f.Ik().shape({})),{flats:g}=(0,u.d4)((e=>({flats:e.Flat.flats}))),[A]=(0,r.useState)(!0),w=(0,m.Zp)(),C=(0,m.g)(),{register:k,handleSubmit:F,setValue:I,setError:S,watch:R,formState:{errors:P}}=(0,t.mN)({defaultValues:{},resolver:y}),_=F((s=>{e((0,p.fS)(s)).unwrap().then((e=>{e&&!0===e.status&&a(e.message)})).catch((e=>{for(var s in e.errors)try{S(s,{message:e.errors[s].toString()})}catch(a){}}))}));(0,r.useEffect)((()=>{e((0,x.q)()).unwrap().then((()=>{e((0,p.Tv)(C.id)).unwrap().then((e=>{b(e),I("id",e.user.id),I("email",e.user.email),I("apartment_id",e.user.apartment_id),e.user.flat&&I("flat_id",e.user.flat.flat_id),I("role_id",e.user.role)})).catch((e=>v(e)))}))}),[C.id]);const T=R("apartment_id");let U=[];if(T&&g.length){for(let e=0;e<g.length;e++)if(T==g[e].id){U=g[e].flats;break}o&&o.user.flat&&I("flat_id",o.user.flat.flat_id)}return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(l.A,{children:(0,j.jsxs)(l.A.Body,{children:[s&&(0,j.jsx)("div",{className:"alert alert-success",children:s}),N&&(0,j.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:N}),(0,j.jsx)(i.A,{children:(0,j.jsx)(n.A,{lg:6,children:(0,j.jsxs)("form",{onSubmit:_,className:A?"form-readonly":"",children:[(0,j.jsxs)("fieldset",{children:[(0,j.jsx)(d.Z,{label:"Email",type:"email",register:k,name:"email",placeholder:"Email",containerClass:"mb-3",disabled:!0}),(0,j.jsx)(d.Z,{type:"hidden",name:"role_id",register:k,errors:P,value:"recident"}),(0,j.jsxs)(d.Z,{type:"select",label:"Building#",name:"apartment_id",containerClass:"mb-3",register:k,errors:P,children:[(0,j.jsx)("option",{value:"",children:"Select Building"}),g.length&&g.map((e=>(0,j.jsx)("option",{value:e.id,children:e.name.toString()},"apartment".concat(e.id))))]}),(0,j.jsxs)(d.Z,{type:"select",label:"Suite",name:"flat_id",containerClass:"mb-3",register:k,errors:P,children:[(0,j.jsx)("option",{value:"",children:"Select Flat"}),U.length&&U.map((e=>{let s=!1;return o&&o.user.flat&&o.user.flat.flat_id==e.id&&(s=!0),e.has_occupied?(0,j.jsxs)("option",{value:e.id,disabled:!0,selected:s,children:[e.name,e.has_occupied]},"flat"+e.id):(0,j.jsxs)("option",{value:e.id,selected:s,children:[e.name,e.has_occupied]},"flat"+e.id)}))]})]}),(0,j.jsx)(c.A,{onClick:()=>w(-1),variant:"primary",className:"me-2",type:"submit",children:"Back"}),(0,j.jsx)(c.A,{variant:"primary",type:"submit",children:"Submit"})]})})})]})})})},N=()=>(0,j.jsxs)(r.Fragment,{children:[(0,j.jsx)(o.A,{breadCrumbItems:[{label:"Tenants",path:"/resident"},{label:"Assign Permission",path:"/user",active:!0}],title:"Assign Permission"}),(0,j.jsx)(i.A,{children:(0,j.jsx)(n.A,{children:(0,j.jsx)(b,{})})})]})},97937:(e,s,a)=>{a.d(s,{A:()=>d});var r=a(48738),t=a.n(r),l=a(9950),i=a(82111),n=a(44089),c=a(44414);const o=l.forwardRef(((e,s)=>{let{as:a,bsPrefix:r,variant:l="primary",size:o,active:d=!1,disabled:m=!1,className:p,...u}=e;const h=(0,n.oU)(r,"btn"),[f,{tagName:x}]=(0,i.Am)({tagName:a,disabled:m,...u}),j=x;return(0,c.jsx)(j,{...f,...u,ref:s,disabled:m,className:t()(p,h,d&&"active",l&&"".concat(h,"-").concat(l),o&&"".concat(h,"-").concat(o),u.href&&m&&"disabled")})}));o.displayName="Button";const d=o},22890:(e,s,a)=>{a.d(s,{Tj:()=>t,mf:()=>l});var r=a(9950);function t(e,s){let a=0;return r.Children.map(e,(e=>r.isValidElement(e)?s(e,a++):e))}function l(e,s){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===s))}},64055:(e,s,a)=>{a.d(s,{A:()=>E});var r=a(48738),t=a.n(r),l=a(11942),i=a.n(l),n=a(9950),c=a(44414);const o={type:i().string,tooltip:i().bool,as:i().elementType},d=n.forwardRef(((e,s)=>{let{as:a="div",className:r,type:l="valid",tooltip:i=!1,...n}=e;return(0,c.jsx)(a,{...n,ref:s,className:t()(r,"".concat(l,"-").concat(i?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=o;const m=d;var p=a(14531),u=a(99288),h=a(44089);const f=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,htmlFor:l,...i}=e;const{controlId:o}=(0,n.useContext)(u.A);return a=(0,h.oU)(a,"form-check-label"),(0,c.jsx)("label",{...i,ref:s,htmlFor:l||o,className:t()(r,a)})}));f.displayName="FormCheckLabel";const x=f;var j=a(22890);const b=n.forwardRef(((e,s)=>{let{id:a,bsPrefix:r,bsSwitchPrefix:l,inline:i=!1,reverse:o=!1,disabled:d=!1,isValid:f=!1,isInvalid:b=!1,feedbackTooltip:N=!1,feedback:v,feedbackType:y,className:g,style:A,title:w="",type:C="checkbox",label:k,children:F,as:I="input",...S}=e;r=(0,h.oU)(r,"form-check"),l=(0,h.oU)(l,"form-switch");const{controlId:R}=(0,n.useContext)(u.A),P=(0,n.useMemo)((()=>({controlId:a||R})),[R,a]),_=!F&&null!=k&&!1!==k||(0,j.mf)(F,x),T=(0,c.jsx)(p.A,{...S,type:"switch"===C?"checkbox":C,ref:s,isValid:f,isInvalid:b,disabled:d,as:I});return(0,c.jsx)(u.A.Provider,{value:P,children:(0,c.jsx)("div",{style:A,className:t()(g,_&&r,i&&"".concat(r,"-inline"),o&&"".concat(r,"-reverse"),"switch"===C&&l),children:F||(0,c.jsxs)(c.Fragment,{children:[T,_&&(0,c.jsx)(x,{title:w,children:k}),v&&(0,c.jsx)(m,{type:y,tooltip:N,children:v})]})})})}));b.displayName="FormCheck";const N=Object.assign(b,{Input:p.A,Label:x});a(2241);const v=n.forwardRef(((e,s)=>{let{bsPrefix:a,type:r,size:l,htmlSize:i,id:o,className:d,isValid:m=!1,isInvalid:p=!1,plaintext:f,readOnly:x,as:j="input",...b}=e;const{controlId:N}=(0,n.useContext)(u.A);return a=(0,h.oU)(a,"form-control"),(0,c.jsx)(j,{...b,type:r,size:i,ref:s,readOnly:x,id:o||N,className:t()(d,f?"".concat(a,"-plaintext"):a,l&&"".concat(a,"-").concat(l),"color"===r&&"".concat(a,"-color"),m&&"is-valid",p&&"is-invalid")})}));v.displayName="FormControl";const y=Object.assign(v,{Feedback:m}),g=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="div",...i}=e;return r=(0,h.oU)(r,"form-floating"),(0,c.jsx)(l,{ref:s,className:t()(a,r),...i})}));g.displayName="FormFloating";const A=g;var w=a(584),C=a(90729);const k=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,id:l,...i}=e;const{controlId:o}=(0,n.useContext)(u.A);return a=(0,h.oU)(a,"form-range"),(0,c.jsx)("input",{...i,type:"range",ref:s,className:t()(r,a),id:l||o})}));k.displayName="FormRange";const F=k,I=n.forwardRef(((e,s)=>{let{bsPrefix:a,size:r,htmlSize:l,className:i,isValid:o=!1,isInvalid:d=!1,id:m,...p}=e;const{controlId:f}=(0,n.useContext)(u.A);return a=(0,h.oU)(a,"form-select"),(0,c.jsx)("select",{...p,size:l,ref:s,className:t()(i,a,r&&"".concat(a,"-").concat(r),o&&"is-valid",d&&"is-invalid"),id:m||f})}));I.displayName="FormSelect";const S=I,R=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:l="small",muted:i,...n}=e;return a=(0,h.oU)(a,"form-text"),(0,c.jsx)(l,{...n,ref:s,className:t()(r,a,i&&"text-muted")})}));R.displayName="FormText";const P=R,_=n.forwardRef(((e,s)=>(0,c.jsx)(N,{...e,ref:s,type:"switch"})));_.displayName="Switch";const T=Object.assign(_,{Input:N.Input,Label:N.Label}),U=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,children:l,controlId:i,label:n,...o}=e;return a=(0,h.oU)(a,"form-floating"),(0,c.jsxs)(w.A,{ref:s,className:t()(r,a),controlId:i,...o,children:[l,(0,c.jsx)("label",{htmlFor:i,children:n})]})}));U.displayName="FloatingLabel";const V=U,z={_ref:i().any,validated:i().bool,as:i().elementType},L=n.forwardRef(((e,s)=>{let{className:a,validated:r,as:l="form",...i}=e;return(0,c.jsx)(l,{...i,ref:s,className:t()(a,r&&"was-validated")})}));L.displayName="Form",L.propTypes=z;const E=Object.assign(L,{Group:w.A,Control:y,Floating:A,Check:N,Switch:T,Label:C.A,Text:P,Range:F,Select:S,FloatingLabel:V})},14531:(e,s,a)=>{a.d(s,{A:()=>d});var r=a(48738),t=a.n(r),l=a(9950),i=a(99288),n=a(44089),c=a(44414);const o=l.forwardRef(((e,s)=>{let{id:a,bsPrefix:r,className:o,type:d="checkbox",isValid:m=!1,isInvalid:p=!1,as:u="input",...h}=e;const{controlId:f}=(0,l.useContext)(i.A);return r=(0,n.oU)(r,"form-check-input"),(0,c.jsx)(u,{...h,ref:s,type:d,id:a||f,className:t()(o,r,m&&"is-valid",p&&"is-invalid")})}));o.displayName="FormCheckInput";const d=o},584:(e,s,a)=>{a.d(s,{A:()=>n});var r=a(9950),t=a(99288),l=a(44414);const i=r.forwardRef(((e,s)=>{let{controlId:a,as:i="div",...n}=e;const c=(0,r.useMemo)((()=>({controlId:a})),[a]);return(0,l.jsx)(t.A.Provider,{value:c,children:(0,l.jsx)(i,{...n,ref:s})})}));i.displayName="FormGroup";const n=i},75623:(e,s,a)=>{a.d(s,{A:()=>u});var r=a(48738),t=a.n(r),l=a(9950),i=a(44089),n=a(14531),c=a(54947),o=a(44414);const d=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="span",...n}=e;return r=(0,i.oU)(r,"input-group-text"),(0,o.jsx)(l,{ref:s,className:t()(a,r),...n})}));d.displayName="InputGroupText";const m=d,p=l.forwardRef(((e,s)=>{let{bsPrefix:a,size:r,hasValidation:n,className:d,as:m="div",...p}=e;a=(0,i.oU)(a,"input-group");const u=(0,l.useMemo)((()=>({})),[]);return(0,o.jsx)(c.A.Provider,{value:u,children:(0,o.jsx)(m,{ref:s,...p,className:t()(d,a,r&&"".concat(a,"-").concat(r),n&&"has-validation")})})}));p.displayName="InputGroup";const u=Object.assign(p,{Text:m,Radio:e=>(0,o.jsx)(m,{children:(0,o.jsx)(n.A,{type:"radio",...e})}),Checkbox:e=>(0,o.jsx)(m,{children:(0,o.jsx)(n.A,{type:"checkbox",...e})})})}}]);