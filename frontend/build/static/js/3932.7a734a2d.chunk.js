"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3932],{41033:(e,t,n)=>{n.d(t,{A:()=>r});n(9950);var a=n(86781),s=n(68459),c=n(81924),l=n(44414);const r=e=>(0,l.jsx)(a.A,{children:(0,l.jsx)(s.A,{children:(0,l.jsxs)("div",{className:"page-title-box",children:[(0,l.jsx)("div",{children:(0,l.jsxs)(c.A,{className:"m-0 mb-0",children:[(0,l.jsx)(c.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?(0,l.jsx)(c.A.Item,{active:!0,children:e.label},t):(0,l.jsx)(c.A.Item,{href:e.path,children:e.label},t)))]})}),(0,l.jsx)("h4",{className:"page-title",children:e.title})]})})})},63790:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(9950),s=n(42074),c=n(48738),l=n.n(c),r=n(44414);const i=e=>{let{tableProps:t,sizePerPageList:n}=e;const[c,i]=(0,a.useState)(t.pageCount),[o,d]=(0,a.useState)(t.state.pageIndex);(0,a.useEffect)((()=>{i(t.pageCount),d(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);const u=(0,a.useCallback)(((e,t)=>e.filter((e=>e<=c))),[c]),m=(0,a.useCallback)(((e,t)=>t<7?u([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]),[u]),h=e=>{if(e===o)return;const n=m(e,c);p(u(n,c)),t.gotoPage(e)};(0,a.useEffect)((()=>{const e=m(null,c);p(e)}),[c,m]);const[x,p]=(0,a.useState)(m(null,c)),j=o;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,r.jsxs)("div",{className:"d-inline-block me-3",children:[(0,r.jsx)("label",{className:"me-1",children:"Display :"}),(0,r.jsx)("select",{value:t.state.pageSize,onChange:e=>{t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map(((e,t)=>(0,r.jsx)("option",{value:e.value,children:e.text},t)))})]}),(0,r.jsxs)("span",{className:"me-3",children:["Page"," ",(0,r.jsxs)("strong",{children:[o," of ",t.pageOptions.length]})," "]}),(0,r.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,r.jsx)("li",{className:l()("page-item","paginate_button","previous",{disabled:1===j}),onClick:()=>{1!==j&&h(j-1)},children:(0,r.jsx)(s.N_,{to:"#",className:"page-link",children:(0,r.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(x||[]).map(((e,t,n)=>n[t-1]+1<e?(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,r.jsx)(s.N_,{to:"#",className:"page-link",children:"..."})}),(0,r.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:j===e}),onClick:t=>h(e),children:(0,r.jsx)(s.N_,{to:"#",className:"page-link",children:e})})]},e):(0,r.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:j===e}),onClick:t=>h(e),children:(0,r.jsx)(s.N_,{to:"#",className:"page-link",children:e})},e))),(0,r.jsx)("li",{className:l()("page-item","paginate_button","next",{disabled:j===t.pageCount}),onClick:()=>{j!==t.pageCount&&h(j+1)},children:(0,r.jsx)(s.N_,{to:"#",className:"page-link",children:(0,r.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})}},29717:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(9950),s=n(471),c=n(1093),l=n(72530),r=n(86781),i=n(68459),o=n(48738),d=n.n(o),u=n(41033),m=n(27081),h=n(63790),x=n(13059),p=n(44414);const j=e=>{let{maintanance:t}=e;const n=(0,m.wA)(),[r,i]=(0,a.useState)(!1),[o,d]=(0,a.useState)(""),[u,h]=(0,a.useState)("");return(0,a.useEffect)((()=>{n((0,x.tY)(1))}),[r]),(0,p.jsx)(s.A,{children:(0,p.jsxs)(s.A.Body,{children:[o&&(0,p.jsx)("div",{className:"alert alert-success",children:o}),u&&(0,p.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:u}),(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)(c.A,{className:"table table-centered react-table dt-responsive nowrap w-100",children:[(0,p.jsx)("thead",{className:"table-light",children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"ID"}),(0,p.jsx)("th",{children:"Requested By"}),(0,p.jsx)("th",{children:"Work to be done"}),(0,p.jsx)("th",{children:"Assignee"}),(0,p.jsx)("th",{children:"Status"}),(0,p.jsx)("th",{children:"Created At"}),(0,p.jsx)("th",{children:"Resolved At"}),(0,p.jsx)("th",{children:"Actions"})]})}),(0,p.jsx)("tbody",{children:t&&t.data.length>0?t.data.map(((e,t)=>(0,p.jsxs)("tr",{role:"row",children:[(0,p.jsx)("td",{role:"cell",children:e.id}),(0,p.jsx)("td",{role:"cell",children:e.tanent_name}),(0,p.jsx)("td",{role:"cell",children:e.work_requested}),(0,p.jsx)("td",{role:"cell",children:e.repaired_username}),(0,p.jsx)("td",{role:"cell",children:(0,p.jsx)(g,{status:e.status_name})}),(0,p.jsx)("td",{role:"cell",children:e.created_at}),(0,p.jsx)("td",{role:"cell",children:e.action_date}),(0,p.jsx)("td",{role:"cell",children:(0,p.jsx)(a.Fragment,{children:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(l.A,{className:"btn-group",align:"end",children:[(0,p.jsx)(l.A.Toggle,{variant:"light",className:"table-action-btn btn-sm",children:(0,p.jsx)("i",{className:"mdi mdi-dots-horizontal"})}),(0,p.jsxs)(l.A.Menu,{children:[" ",(0,p.jsxs)(l.A.Item,{href:"maintanance-admin/".concat(e.id),children:[(0,p.jsx)("i",{className:"mdi mdi-check-all me-2 text-muted font-18 vertical-middle"}),"Edit Maintanance"]})]})]})})})})]},t))):(0,p.jsx)("p",{children:"No Data Found"})})]})})]})})},g=e=>{let{status:t}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("span",{className:d()("badge",{"bg-success":"Done"===t,"bg-secondary text-light":["In Progress","Pending","On Hold"].includes(t)}),children:t})})},v=()=>{const e=(0,m.wA)(),[t,n]=(0,a.useState)(1),{maintanance:s}=(0,m.d4)((e=>({maintanance:e.Maintanance.maintanance})));return(0,a.useEffect)((()=>{e((0,x.tY)(t))}),[t]),(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(u.A,{breadCrumbItems:[{label:"All Maintenance Requests",path:"/maintanance",active:!0}],title:"All Maintenance Requests"}),(0,p.jsx)(r.A,{children:(0,p.jsx)(i.A,{lg:12,children:s&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{maintanance:s}),(0,p.jsx)(h.A,{tableProps:{pageCount:s.last_page,state:{pageIndex:s.current_page},pageOptions:{length:s.total},gotoPage:e=>{n(e)}},sizePerPageList:[{text:"10",value:10}]})]})})})]})}},76230:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(9950);const s=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const c=function(e,t){return(0,a.useMemo)((()=>function(e,t){const n=s(e),a=s(t);return e=>{n&&n(e),a&&a(e)}}(e,t)),[e,t])}},95624:(e,t,n)=>{n.d(t,{sE:()=>c,y:()=>l});const a="data-rr-ui-",s="rrUi";function c(e){return"".concat(a).concat(e)}function l(e){return"".concat(s).concat(e)}},78452:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(9950),s=n(87534);const c=(0,a.createContext)(s.A?window:void 0);c.Provider;function l(){return(0,a.useContext)(c)}},8996:(e,t,n)=>{n.d(t,{Ay:()=>r});var a=n(87534),s=!1,c=!1;try{var l={get passive(){return s=!0},get once(){return c=s=!0}};a.A&&(window.addEventListener("test",l,l),window.removeEventListener("test",l,!0))}catch(i){}const r=function(e,t,n,a){if(a&&"boolean"!==typeof a&&!c){var l=a.once,r=a.capture,i=n;!c&&l&&(i=n.__once||function e(a){this.removeEventListener(t,e,r),n.call(this,a)},n.__once=i),e.addEventListener(t,i,s?a:r)}e.addEventListener(t,n,a)}},87534:(e,t,n)=>{n.d(t,{A:()=>a});const a=!("undefined"===typeof window||!window.document||!window.document.createElement)},18336:(e,t,n)=>{function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{A:()=>a})},67410:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(8996),s=n(78557);const c=function(e,t,n,c){return(0,a.Ay)(e,t,n,c),function(){(0,s.A)(e,t,n,c)}}},19815:(e,t,n)=>{function a(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>a})},22413:(e,t,n)=>{n.d(t,{A:()=>s});var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function s(e,t){return a(e.querySelectorAll(t))}},78557:(e,t,n)=>{n.d(t,{A:()=>a});const a=function(e,t,n,a){var s=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,n,s),n.__once&&e.removeEventListener(t,n.__once,s)}},54947:(e,t,n)=>{n.d(t,{A:()=>s});const a=n(9950).createContext(null);a.displayName="InputGroupContext";const s=a},1093:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(48738),s=n.n(a),c=n(9950),l=n(44089),r=n(44414);const i=c.forwardRef(((e,t)=>{let{bsPrefix:n,className:a,striped:c,bordered:i,borderless:o,hover:d,size:u,variant:m,responsive:h,...x}=e;const p=(0,l.oU)(n,"table"),j=s()(a,p,m&&"".concat(p,"-").concat(m),u&&"".concat(p,"-").concat(u),c&&"".concat(p,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),i&&"".concat(p,"-bordered"),o&&"".concat(p,"-borderless"),d&&"".concat(p,"-hover")),g=(0,r.jsx)("table",{...x,className:j,ref:t});if(h){let e="".concat(p,"-responsive");return"string"===typeof h&&(e="".concat(e,"-").concat(h)),(0,r.jsx)("div",{className:e,children:g})}return g}))},2241:e=>{var t=function(){};e.exports=t},98587:(e,t,n)=>{function a(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}n.d(t,{A:()=>a})}}]);