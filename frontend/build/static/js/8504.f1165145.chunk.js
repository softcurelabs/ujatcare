(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8504],{12897:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var n=s(63849),r=s(31616),a=s(20192),i=s(47313),c=s(58467),o=s(51449),l=s(93298),d=s(465),h=s(72884),u=s.n(h);const p={1:"Open",2:"In Progress",3:"Close"},x={1:"Low",2:"Medium",3:"High"};var m=s(61033),j=s(10726),g=s(56352),b=s(46417);const f=e=>{let{row:t}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("b",{children:t.id})})},y=e=>{let{row:t}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("span",{className:u()("badge",{"bg-soft-secondary text-secondary":1===t.priority,"bg-soft-warning text-warning":2===t.priority,"bg-soft-danger text-danger":3===t.priority}),children:x[t.priority.toString()]})})},v=e=>{let{row:t}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("span",{className:u()("badge",{"bg-success":1===t.status,"bg-warning":2===t.status,"bg-secondary text-light":3===t.status}),children:p[t.status.toString()]})})},w=e=>{let{inspection:t,reload:s}=e,n=(0,c.s0)();const[r,a]=(0,i.useState)(!1),[h,u]=(0,i.useState)(0),[p,x]=(0,i.useState)(""),w=(0,g.I0)(),[N,C]=(0,i.useState)("");return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{children:(0,b.jsxs)(o.Z.Body,{children:[p&&(0,b.jsx)("div",{className:"alert alert-success",children:p}),N&&(0,b.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:N}),(0,b.jsxs)(l.Z,{className:"waves-effect waves-light mb-3",onClick:()=>{n("/inspection/new")},children:[(0,b.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add New"]}),(0,b.jsxs)(d.Z,{className:"mb-0 table-striped dt-responsive react-table nowrap w-100",children:[(0,b.jsx)("thead",{className:"table-light",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Id"}),(0,b.jsx)("th",{children:"Flat Number"}),(0,b.jsx)("th",{children:"Subject"}),(0,b.jsx)("th",{children:"Assignee"}),(0,b.jsx)("th",{children:"Priority"}),(0,b.jsx)("th",{children:"Status"}),(0,b.jsx)("th",{children:"Created Date"}),(0,b.jsx)("th",{children:"Completion Date"}),(0,b.jsx)("th",{children:"Action"})]})}),(0,b.jsx)("tbody",{children:t.data.length>0?t.data.map(((e,t)=>(0,b.jsxs)("tr",{className:"",children:[(0,b.jsxs)("td",{children:["#",(0,b.jsx)(f,{row:e})]}),(0,b.jsx)("td",{children:e.flat?e.flat.name:""}),(0,b.jsx)("td",{children:e.title}),(0,b.jsx)("td",{children:e.inspection_by instanceof Number?"":e.inspection_by.name}),(0,b.jsx)("td",{children:(0,b.jsx)(y,{row:e})}),(0,b.jsx)("td",{children:(0,b.jsx)(v,{row:e})}),(0,b.jsx)("td",{children:e.created_at}),(0,b.jsx)("td",{children:e.inspection_date}),(0,b.jsx)("td",{children:(0,b.jsx)(i.Fragment,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{className:"btn-secondary",onClick:()=>{let t="/inspection/".concat(e.id);n(t)},size:"sm",children:"Edit"}),(0,b.jsx)(l.Z,{className:"btn-secondary ms-2",onClick:()=>{u(e.id),a(!0)},size:"sm",children:"Delete"})]})})})]},t))):(0,b.jsx)("p",{children:"No Data Found"})})]}),(0,b.jsx)(j.T,{show:r,targetId:h,submitForm:e=>{w((0,m.fs)(e)).unwrap().then((e=>{e&&!0===e.status&&(x(e.message),a(!1),s())})).catch((e=>{C(e.message),a(!1)}))},handleClose:()=>a(!1)})]})})})};var N=s(20433);const C=()=>{const{inspection:e}=(0,g.v9)((e=>({inspection:e.Inspection.inspection}))),t=(0,g.I0)(),[s,c]=(0,i.useState)(1);(0,i.useEffect)((()=>{t((0,m.mY)(s))}),[s]);const o=(0,i.useCallback)((()=>{t((0,m.mY)(s))}),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.Z,{breadCrumbItems:[{label:"Maintanance Inspection History",path:"/apps/tickets/list",active:!0}],title:"Maintanance Inspection History"}),(0,b.jsx)(n.Z,{children:(0,b.jsx)(r.Z,{children:e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{inspection:e,reload:o}),(0,b.jsx)(N.Z,{tableProps:{pageCount:e.last_page,state:{pageIndex:e.current_page},pageOptions:{length:e.total},gotoPage:e=>{c(e)}},sizePerPageList:[{text:"10",value:10}]})]})})})]})}},86472:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var n=s(47313),r=s(78532);const a=(0,n.createContext)(r.Z?window:void 0);a.Provider;function i(){return(0,n.useContext)(a)}},46106:(e,t,s)=>{"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}s.d(t,{Z:()=>n})},61729:(e,t,s)=>{"use strict";var n=s(79165);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,s,r,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return s.PropTypes=s,s}},75192:(e,t,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},93298:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var n=s(72884),r=s.n(n),a=s(47313),i=s(16184),c=s(68524),o=s(46417);const l=a.forwardRef(((e,t)=>{let{as:s,bsPrefix:n,variant:a="primary",size:l,active:d=!1,disabled:h=!1,className:u,...p}=e;const x=(0,c.vE)(n,"btn"),[m,{tagName:j}]=(0,i.FT)({tagName:s,disabled:h,...p}),g=j;return(0,o.jsx)(g,{...m,...p,ref:t,disabled:h,className:r()(u,x,d&&"active",a&&"".concat(x,"-").concat(a),l&&"".concat(x,"-").concat(l),p.href&&h&&"disabled")})}));l.displayName="Button";const d=l},69125:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var n=s(47313);const r=function(e){const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e}),[e]),t};function a(e){const t=r(e);return(0,n.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}}}]);