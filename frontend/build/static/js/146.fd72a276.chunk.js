"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[146],{20192:(e,t,s)=>{s.d(t,{Z:()=>i});s(47313);var a=s(63849),n=s(31616),r=s(52198),c=s(46417);const i=e=>(0,c.jsx)(a.Z,{children:(0,c.jsx)(n.Z,{children:(0,c.jsxs)("div",{className:"page-title-box",children:[(0,c.jsx)("div",{className:"page-title-right",children:(0,c.jsxs)(r.Z,{className:"m-0",children:[(0,c.jsx)(r.Z.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?(0,c.jsx)(r.Z.Item,{active:!0,children:e.label},t):(0,c.jsx)(r.Z.Item,{href:e.path,children:e.label},t)))]})}),(0,c.jsx)("h4",{className:"page-title",children:e.title})]})})})},36673:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(47313),n=s(4705),r=s(10195),c=s(465),i=s(63849),d=s(31616),l=s(20192),o=s(58467),m=s(46417);const h=[{id:1,firstName:"Mark",lastName:"Otto",userName:"@mdo"},{id:2,firstName:"Jacob",lastName:"Thornton",userName:"@fat"},{id:3,firstName:"Dave",lastName:"G",userName:"@dave"},{id:4,firstName:"Nik",lastName:"N",userName:"@nikn"},{id:5,firstName:"Shreyu",lastName:"Navadiya",userName:"@sn"}],u=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(n.Z,{className:"btn-group",align:"end",children:[(0,m.jsx)(n.Z.Toggle,{variant:"light",className:"table-action-btn btn-sm",children:(0,m.jsx)("i",{className:"mdi mdi-dots-horizontal"})}),(0,m.jsxs)(n.Z.Menu,{children:[(0,m.jsxs)(n.Z.Item,{children:[(0,m.jsx)("i",{className:"mdi mdi-pencil me-2 text-muted font-18 vertical-middle"}),"Maintanance Request"]}),(0,m.jsxs)(n.Z.Item,{children:[(0,m.jsx)("i",{className:"mdi mdi-check-all me-2 text-muted font-18 vertical-middle"}),"Resedent Profile"]}),(0,m.jsxs)(n.Z.Item,{children:[(0,m.jsx)("i",{className:"mdi mdi-delete me-2 text-muted font-18 vertical-middle"}),"Bullitin Bond"]})]})]})}),x=()=>(0,m.jsx)(r.Z,{children:(0,m.jsxs)(r.Z.Body,{children:[(0,m.jsx)("h4",{className:"header-title"}),(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)(c.Z,{className:"mb-0",children:[(0,m.jsx)("thead",{className:"table-light",children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"#"}),(0,m.jsx)("th",{children:"First Name"}),(0,m.jsx)("th",{children:"Last Name"}),(0,m.jsx)("th",{children:"Username"}),(0,m.jsx)("th",{children:"Action"})]})}),(0,m.jsx)("tbody",{children:(h||[]).map(((e,t)=>(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{scope:"row",children:e.id}),(0,m.jsx)("td",{children:e.firstName}),(0,m.jsx)("td",{children:e.lastName}),(0,m.jsx)("td",{children:e.userName}),(0,m.jsx)("td",{children:(0,m.jsx)(u,{})})]},t)))})]})})]})}),j=()=>{(0,o.s0)();return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(l.Z,{breadCrumbItems:[{label:"Tables",path:"/ui/tables/basic"},{label:"Basic Tables",path:"/ui/tables/basic",active:!0}],title:"Users"}),(0,m.jsx)(i.Z,{children:(0,m.jsx)(d.Z,{lg:12,children:(0,m.jsx)(x,{})})})]})}},55506:(e,t,s)=>{s.d(t,{ZP:()=>i});var a=s(78532),n=!1,r=!1;try{var c={get passive(){return n=!0},get once(){return r=n=!0}};a.Z&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(d){}const i=function(e,t,s,a){if(a&&"boolean"!==typeof a&&!r){var c=a.once,i=a.capture,d=s;!r&&c&&(d=s.__once||function e(a){this.removeEventListener(t,e,i),s.call(this,a)},s.__once=d),e.addEventListener(t,d,n?a:i)}e.addEventListener(t,s,a)}},78532:(e,t,s)=>{s.d(t,{Z:()=>a});const a=!("undefined"===typeof window||!window.document||!window.document.createElement)},89190:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(55506),n=s(18755);const r=function(e,t,s,r){return(0,a.ZP)(e,t,s,r),function(){(0,n.Z)(e,t,s,r)}}},14987:(e,t,s)=>{function a(e){return e&&e.ownerDocument||document}s.d(t,{Z:()=>a})},18755:(e,t,s)=>{s.d(t,{Z:()=>a});const a=function(e,t,s,a){var n=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,s,n),s.__once&&e.removeEventListener(t,s.__once,n)}},93298:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(72884),n=s.n(a),r=s(47313),c=s(16184),i=s(68524),d=s(46417);const l=r.forwardRef(((e,t)=>{let{as:s,bsPrefix:a,variant:r="primary",size:l,active:o=!1,disabled:m=!1,className:h,...u}=e;const x=(0,i.vE)(a,"btn"),[j,{tagName:v}]=(0,c.FT)({tagName:s,disabled:m,...u}),f=v;return(0,d.jsx)(f,{...j,...u,ref:t,disabled:m,className:n()(h,x,o&&"active",r&&"".concat(x,"-").concat(r),l&&"".concat(x,"-").concat(l),u.href&&m&&"disabled")})}));l.displayName="Button";const o=l},94354:(e,t,s)=>{s.d(t,{Z:()=>n});const a=s(47313).createContext(null);a.displayName="InputGroupContext";const n=a},465:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(72884),n=s.n(a),r=s(47313),c=s(68524),i=s(46417);const d=r.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,striped:r,bordered:d,borderless:l,hover:o,size:m,variant:h,responsive:u,...x}=e;const j=(0,c.vE)(s,"table"),v=n()(a,j,h&&"".concat(j,"-").concat(h),m&&"".concat(j,"-").concat(m),r&&"".concat(j,"-").concat("string"===typeof r?"striped-".concat(r):"striped"),d&&"".concat(j,"-bordered"),l&&"".concat(j,"-borderless"),o&&"".concat(j,"-hover")),f=(0,i.jsx)("table",{...x,className:v,ref:t});if(u){let e="".concat(j,"-responsive");return"string"===typeof u&&(e="".concat(e,"-").concat(u)),(0,i.jsx)("div",{className:e,children:f})}return f}))},57323:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(47313);const n=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const r=function(e,t){return(0,a.useMemo)((()=>function(e,t){const s=n(e),a=n(t);return e=>{s&&s(e),a&&a(e)}}(e,t)),[e,t])}},21024:e=>{var t=function(){};e.exports=t},63366:(e,t,s)=>{function a(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}s.d(t,{Z:()=>a})}}]);