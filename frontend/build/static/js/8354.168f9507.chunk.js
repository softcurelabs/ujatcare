"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8354],{18012:(e,a,l)=>{l.d(a,{Sh:()=>u,tD:()=>m,B7:()=>c,pz:()=>r,vf:()=>i});const n=[{key:"apps",icon:"grid",label:"Admin",isTitle:!1,children:[{key:"maintanance-report",label:"Maintenance Report",isTitle:!1,url:"/ui/tables/report"},{key:"request",label:"Request",isTitle:!1,url:"/apps/request/list"},{key:"inspect",label:"Inspect",isTitle:!1,url:"/apps/tickets/list"},{key:"rent",label:"Rent",isTitle:!1,url:"/apps/tickets/list"},{key:"maintanance-calander",label:"Calendar",isTitle:!1,url:"/apps/calendar"},{key:"users",label:"Users",isTitle:!1,url:"/ui/tables/basic"},{key:"rent-history",label:"Payment History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"users",label:"Post Notice",isTitle:!1,url:"/ui/forms/notice"}]},{key:"user",icon:"grid",label:"User",isTitle:!1,children:[{key:"rent-payment",label:"Rent Payment",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"rent-history",label:"Rent History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"maintanance-request",label:"Maintanance Request",isTitle:!1,url:"/ui/tables/ticket"},{key:"maintanance-request-history",label:"Maintanance Request History",isTitle:!1,url:"/apps/tickets/list"},{key:"maintanance-inspection",label:"Maintanance Inspections",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"my-account",label:"My Account",isTitle:!1,url:"/my-account"},{key:"maintanance-inspection-history",label:"Bulletin Board",isTitle:!1,url:"/inspection"}]}],t=[{key:"my-account",label:"My Account",isTitle:!1,url:"/my-account"},{key:"rent-payment",label:"Payment Setup",isTitle:!1,url:"/rent-payment"},{key:"rent-history",label:"Rent History",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"maintanance-request",label:"Create Maintanance Request",isTitle:!1,url:"/maintanance/create"},{key:"maintanance-request-history",label:"Maintanance Request History",isTitle:!1,url:"/maintanance"},{key:"maintanance-inspection-history",label:"Bulletin Board",isTitle:!1,url:"/notice-highlight"}],s=[{key:"users",label:"Post a Bulletin",isTitle:!1,url:"/notice/new"},{key:"request",label:"All Maintenance Requests",isTitle:!1,url:"/maintanance-admin"},{key:"application",label:"Applications",isTitle:!1,url:"/applications"},{key:"users",label:"Tenants",isTitle:!1,url:"/resident"},{key:"maintanance-report",label:"Maintenance Report",isTitle:!1,url:"/ui/tables/report"},{key:"users",label:"Staff Users",isTitle:!1,url:"/user"},{key:"rent-history",label:"Payments",isTitle:!1,url:"/apps/ecommerce/orders"},{key:"inspect",label:"Inspections",isTitle:!1,url:"/inspection"},{key:"maintanance-calander",label:"Calendar",isTitle:!1,url:"/apps/calendar"},{key:"inspect",label:"Reports",isTitle:!1,url:"/inspection"},{key:"integrations",label:"Integrations",isTitle:!1,url:"/integration"}],i=()=>n,r=()=>t,c=()=>s,u=(e,a)=>{let l=[];const n=m(e,a.parentKey);return n&&(l.push(n.key),n.parentKey&&(l=[...l,...u(e,n)])),l},m=(e,a)=>{if(e&&a)for(var l=0;l<e.length;l++){if(e[l].key===a)return e[l];var n=m(e[l].children,a);if(n)return n}return null}},8354:(e,a,l)=>{l.d(a,{Z:()=>b});var n=l(47313),t=l(2135),s=l(58467),i=l(62396),r=l(72884),c=l.n(r),u=l(6018),m=l.n(u),o=l(18012),d=l(46417);const y=e=>{let{item:a,linkClassName:l,subMenuClassNames:s,activeMenuItems:r,toggleMenu:u}=e;const[o,k]=(0,n.useState)(r.includes(a.key));(0,n.useEffect)((()=>{k(r.includes(a.key))}),[r,a]);return(0,d.jsxs)("li",{className:c()("menu-item",{"menuitem-active":o}),children:[(0,d.jsxs)(t.rU,{to:"#",onClick:()=>{const e=!o;return k(e),u&&u(a,e),!1},"data-menu-key":a.key,"aria-expanded":o,className:c()("menu-link",l,{"menuitem-active":r.includes(a.key)?"active":""}),children:[a.icon&&(0,d.jsxs)("span",{className:"menu-icon",children:[(0,d.jsx)(m(),{icon:a.icon})," "]}),(0,d.jsxs)("span",{className:"menu-text",children:[" ",a.label," "]}),a.badge?(0,d.jsx)("span",{className:"badge bg-".concat(a.badge.variant," rounded-pill ms-auto"),children:a.badge.text}):(0,d.jsx)("span",{className:"menu-arrow"})]}),(0,d.jsx)(i.Z,{in:o,children:(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:c()(s),children:(a.children||[]).map(((e,a)=>(0,d.jsx)(n.Fragment,{children:e.children?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(y,{item:e,linkClassName:r.includes(e.key)?"active":"",activeMenuItems:r,subMenuClassNames:"sub-menu",toggleMenu:u})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{item:e,className:r.includes(e.key)?"menuitem-active":"",linkClassName:r.includes(e.key)?"active":""})})},a)))})})})]})},p=e=>{let{item:a,className:l,linkClassName:n}=e;return(0,d.jsx)("li",{className:c()("menu-item",l),children:(0,d.jsx)(k,{item:a,className:n})})},k=e=>{let{item:a,className:l}=e;return(0,d.jsxs)(t.rU,{to:a.url,target:a.target,className:c()("side-nav-link-ref menu-link",l),"data-menu-key":a.key,children:[a.icon&&(0,d.jsxs)("span",{className:"menu-icon",children:[(0,d.jsx)(m(),{icon:a.icon})," "]}),(0,d.jsxs)("span",{className:"menu-text",children:[" ",a.label," "]}),a.badge&&(0,d.jsx)("span",{className:"badge bg-".concat(a.badge.variant," "),children:a.badge.text})]})},b=e=>{let{menuItems:a}=e,l=(0,s.TH)();const t=(0,n.useRef)(null),[i,r]=(0,n.useState)([]),u=(e,l)=>{l&&r([e.key,...(0,o.Sh)(a,e)])},m=(0,n.useCallback)((()=>{const e=document.getElementById("main-side-menu");let n=null;if(e){let c=e.getElementsByClassName("side-nav-link-ref");for(let e=0;e<c.length;++e){var t,s,i;if((null===l||void 0===l||null===(t=l.pathname)||void 0===t?void 0:t.replaceAll("",""))===(null===(s=c[e])||void 0===s||null===(i=s.pathname)||void 0===i?void 0:i.replaceAll("",""))){n=c[e];break}}if(n){const e=n.getAttribute("data-menu-key"),l=(0,o.tD)(a,e);l&&r([l.key,...(0,o.Sh)(a,l)])}}}),[l,a]);return(0,n.useEffect)((()=>{m()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:"menu",ref:t,id:"main-side-menu",children:(a||[]).map(((e,a)=>(0,d.jsx)(n.Fragment,{children:e.isTitle?(0,d.jsx)("li",{className:c()("menu-title",{"mt-2":0!==a}),children:e.label}):(0,d.jsx)(d.Fragment,{children:e.children?(0,d.jsx)(y,{item:e,toggleMenu:u,subMenuClassNames:"sub-menu",activeMenuItems:i,linkClassName:"menu-link"}):(0,d.jsx)(p,{item:e,linkClassName:"menu-link",className:i.includes(e.key)?"menuitem-active":""})})},a)))})})}}}]);