"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[8354],{70112:(e,n,t)=>{t.d(n,{Sh:()=>u,tD:()=>o,B7:()=>c,pz:()=>r,vf:()=>i});const s=[{key:"apps",icon:"grid",label:"Admin",isTitle:!1,children:[{key:"maintanance-report",label:"Maintanance Report",isTitle:!1,url:"/ui/tables/report"},{key:"request",label:"Request",isTitle:!1,url:"/apps/request/list"},{key:"inspect",label:"Inspect",isTitle:!1,url:"/apps/tickets/list"},{key:"rent",label:"Rent",isTitle:!1,url:"/apps/tickets/list"},{key:"maintanance-calander",label:"Calander",isTitle:!1,url:"/apps/calendar"},{key:"users",label:"Users",isTitle:!1,url:"/ui/tables/basic"},{key:"rent-history",label:"Payment History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"users",label:"Post Notice",isTitle:!1,url:"/ui/forms/notice"}]},{key:"user",icon:"grid",label:"User",isTitle:!1,children:[{key:"rent-payment",label:"Rent Payment",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"rent-history",label:"Rent History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"maintanance-request",label:"Maintanance Request",isTitle:!1,url:"/ui/tables/ticket"},{key:"maintanance-request-history",label:"Maintanance Request History",isTitle:!1,url:"/apps/tickets/list"},{key:"maintanance-inspection",label:"Maintanance Inspections",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"my-account",label:"My Account",isTitle:!1,url:"/ui/forms/basic"},{key:"maintanance-inspection-history",label:"Notices",isTitle:!1,url:"/ui/forms/notices"}]}],l=[{key:"rent-payment",label:"Rent Payment",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"rent-history",label:"Rent History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"maintanance-request",label:"Maintanance Request",isTitle:!1,url:"/maintanance/create"},{key:"maintanance-request-history",label:"Maintanance Request History",isTitle:!1,url:"/apps/tickets/list"},{key:"maintanance-inspection",label:"Maintanance Inspections",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"my-account",label:"My Account",isTitle:!1,url:"/ui/forms/basic"},{key:"maintanance-inspection-history",label:"Notices",isTitle:!1,url:"/ui/forms/notices"}],a=[{key:"maintanance-report",label:"Maintanance Report",isTitle:!1,url:"/ui/tables/report"},{key:"request",label:"Request",isTitle:!1,url:"/apps/request/list"},{key:"inspect",label:"Inspect",isTitle:!1,url:"/apps/tickets/list"},{key:"rent",label:"Rent",isTitle:!1,url:"/apps/tickets/list"},{key:"maintanance-calander",label:"Calander",isTitle:!1,url:"/apps/calendar"},{key:"users",label:"Users",isTitle:!1,url:"/ui/tables/basic"},{key:"rent-history",label:"Payment History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"users",label:"Post Notice",isTitle:!1,url:"/ui/forms/notice"}],i=()=>s,r=()=>l,c=()=>a,u=(e,n)=>{let t=[];const s=o(e,n.parentKey);return s&&(t.push(s.key),s.parentKey&&(t=[...t,...u(e,s)])),t},o=(e,n)=>{if(e&&n)for(var t=0;t<e.length;t++){if(e[t].key===n)return e[t];var s=o(e[t].children,n);if(s)return s}return null}},8354:(e,n,t)=>{t.d(n,{Z:()=>b});var s=t(47313),l=t(2135),a=t(58467),i=t(62396),r=t(72884),c=t.n(r),u=t(6018),o=t.n(u),m=t(70112),d=t(46417);const p=e=>{let{item:n,linkClassName:t,subMenuClassNames:a,activeMenuItems:r,toggleMenu:u}=e;const[m,k]=(0,s.useState)(r.includes(n.key));(0,s.useEffect)((()=>{k(r.includes(n.key))}),[r,n]);return(0,d.jsxs)("li",{className:c()("menu-item",{"menuitem-active":m}),children:[(0,d.jsxs)(l.rU,{to:"#",onClick:()=>{const e=!m;return k(e),u&&u(n,e),!1},"data-menu-key":n.key,"aria-expanded":m,className:c()("menu-link",t,{"menuitem-active":r.includes(n.key)?"active":""}),children:[n.icon&&(0,d.jsxs)("span",{className:"menu-icon",children:[(0,d.jsx)(o(),{icon:n.icon})," "]}),(0,d.jsxs)("span",{className:"menu-text",children:[" ",n.label," "]}),n.badge?(0,d.jsx)("span",{className:"badge bg-".concat(n.badge.variant," rounded-pill ms-auto"),children:n.badge.text}):(0,d.jsx)("span",{className:"menu-arrow"})]}),(0,d.jsx)(i.Z,{in:m,children:(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:c()(a),children:(n.children||[]).map(((e,n)=>(0,d.jsx)(s.Fragment,{children:e.children?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{item:e,linkClassName:r.includes(e.key)?"active":"",activeMenuItems:r,subMenuClassNames:"sub-menu",toggleMenu:u})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(y,{item:e,className:r.includes(e.key)?"menuitem-active":"",linkClassName:r.includes(e.key)?"active":""})})},n)))})})})]})},y=e=>{let{item:n,className:t,linkClassName:s}=e;return(0,d.jsx)("li",{className:c()("menu-item",t),children:(0,d.jsx)(k,{item:n,className:s})})},k=e=>{let{item:n,className:t}=e;return(0,d.jsxs)(l.rU,{to:n.url,target:n.target,className:c()("side-nav-link-ref menu-link",t),"data-menu-key":n.key,children:[n.icon&&(0,d.jsxs)("span",{className:"menu-icon",children:[(0,d.jsx)(o(),{icon:n.icon})," "]}),(0,d.jsxs)("span",{className:"menu-text",children:[" ",n.label," "]}),n.badge&&(0,d.jsx)("span",{className:"badge bg-".concat(n.badge.variant," "),children:n.badge.text})]})},b=e=>{let{menuItems:n}=e,t=(0,a.TH)();const l=(0,s.useRef)(null),[i,r]=(0,s.useState)([]),u=(e,t)=>{t&&r([e.key,...(0,m.Sh)(n,e)])},o=(0,s.useCallback)((()=>{const e=document.getElementById("main-side-menu");let s=null;if(e){let c=e.getElementsByClassName("side-nav-link-ref");for(let e=0;e<c.length;++e){var l,a,i;if((null===t||void 0===t||null===(l=t.pathname)||void 0===l?void 0:l.replaceAll("",""))===(null===(a=c[e])||void 0===a||null===(i=a.pathname)||void 0===i?void 0:i.replaceAll("",""))){s=c[e];break}}if(s){const e=s.getAttribute("data-menu-key"),t=(0,m.tD)(n,e);t&&r([t.key,...(0,m.Sh)(n,t)])}}}),[t,n]);return(0,s.useEffect)((()=>{o()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:"menu",ref:l,id:"main-side-menu",children:(n||[]).map(((e,n)=>(0,d.jsx)(s.Fragment,{children:e.isTitle?(0,d.jsx)("li",{className:c()("menu-title",{"mt-2":0!==n}),children:e.label}):(0,d.jsx)(d.Fragment,{children:e.children?(0,d.jsx)(p,{item:e,toggleMenu:u,subMenuClassNames:"sub-menu",activeMenuItems:i,linkClassName:"menu-link"}):(0,d.jsx)(y,{item:e,linkClassName:"menu-link",className:i.includes(e.key)?"menuitem-active":""})})},n)))})})}},62396:(e,n,t)=>{t.d(n,{Z:()=>g});var s=t(72884),l=t.n(s),a=t(46988),i=t(47313),r=t(64016),c=t(59498);const u=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,s=new Array(t),l=0;l<t;l++)s[l]=arguments[l];e.apply(this,s),n.apply(this,s)}}),null)};var o=t(6280),m=t(75879),d=t(46417);const p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function y(e,n){const t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],s=p[e];return t+parseInt((0,a.Z)(n,s[0]),10)+parseInt((0,a.Z)(n,s[1]),10)}const k={[r.Wj]:"collapse",[r.Ix]:"collapsing",[r.d0]:"collapsing",[r.cn]:"collapse show"},b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:y},h=i.forwardRef(((e,n)=>{let{onEnter:t,onEntering:s,onEntered:a,onExit:r,onExiting:p,className:b,children:h,dimension:g="height",getDimensionValue:f=y,...x}=e;const N="function"===typeof g?g():g,T=(0,i.useMemo)((()=>u((e=>{e.style[N]="0"}),t)),[N,t]),v=(0,i.useMemo)((()=>u((e=>{const n="scroll".concat(N[0].toUpperCase()).concat(N.slice(1));e.style[N]="".concat(e[n],"px")}),s)),[N,s]),j=(0,i.useMemo)((()=>u((e=>{e.style[N]=null}),a)),[N,a]),M=(0,i.useMemo)((()=>u((e=>{e.style[N]="".concat(f(N,e),"px"),(0,o.Z)(e)}),r)),[r,f,N]),E=(0,i.useMemo)((()=>u((e=>{e.style[N]=null}),p)),[N,p]);return(0,d.jsx)(m.Z,{ref:n,addEndListener:c.Z,...x,"aria-expanded":x.role?x.in:null,onEnter:T,onEntering:v,onEntered:j,onExit:M,onExiting:E,childRef:h.ref,children:(e,n)=>i.cloneElement(h,{...n,className:l()(b,h.props.className,k[e],"width"===N&&"collapse-horizontal")})})}));h.defaultProps=b;const g=h}}]);