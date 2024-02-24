"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3965],{10726:(e,s,t)=>{t.d(s,{T:()=>i});var a=t(47939),l=t(93298),n=t(46417);const i=e=>{let{okLabel:s="OK",cancelLabel:t="Cancel",title:i="Confirmation",submitForm:c,show:r,targetId:d,handleClose:o}=e;return(0,n.jsxs)(a.Z,{show:r,onHide:o,children:[(0,n.jsx)(a.Z.Header,{closeButton:!0,children:(0,n.jsx)(a.Z.Title,{children:i})}),(0,n.jsx)(a.Z.Body,{children:"Do you really want to submit?"}),(0,n.jsxs)(a.Z.Footer,{children:[(0,n.jsx)(l.Z,{variant:"secondary",onClick:o,children:t}),(0,n.jsx)(l.Z,{variant:"primary",onClick:()=>c(d),children:s})]})]})}},20433:(e,s,t)=>{t.d(s,{Z:()=>r});var a=t(47313),l=t(2135),n=t(72884),i=t.n(n),c=t(46417);const r=e=>{let{tableProps:s,sizePerPageList:t}=e;const[n,r]=(0,a.useState)(s.pageCount),[d,o]=(0,a.useState)(s.state.pageIndex);(0,a.useEffect)((()=>{r(s.pageCount),o(s.state.pageIndex)}),[s.pageCount,s.state.pageIndex]);const m=(0,a.useCallback)(((e,s)=>e.filter((e=>e<=n))),[n]),h=(0,a.useCallback)(((e,s)=>s<7?m([1,2,3,4,5,6],s):e%5>=0&&e>4&&e+2<s?[1,e-1,e,e+1,s]:e%5>=0&&e>4&&e+2>=s?[1,s-3,s-2,s-1,s]:[1,2,3,4,5,s]),[m]),x=e=>{if(e===d)return;const t=h(e,n);j(m(t,n)),s.gotoPage(e)};(0,a.useEffect)((()=>{const e=h(null,n);j(e)}),[n,h]);const[g,j]=(0,a.useState)(h(null,n)),u=d;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[t.length>0&&(0,c.jsxs)("div",{className:"d-inline-block me-3",children:[(0,c.jsx)("label",{className:"me-1",children:"Display :"}),(0,c.jsx)("select",{value:s.state.pageSize,onChange:e=>{s.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(t||[]).map(((e,s)=>(0,c.jsx)("option",{value:e.value,children:e.text},s)))})]}),(0,c.jsxs)("span",{className:"me-3",children:["Page"," ",(0,c.jsxs)("strong",{children:[d," of ",s.pageOptions.length]})," "]}),(0,c.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,c.jsx)("li",{className:i()("page-item","paginate_button","previous",{disabled:1===u}),onClick:()=>{1!==u&&x(u-1)},children:(0,c.jsx)(l.rU,{to:"#",className:"page-link",children:(0,c.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(g||[]).map(((e,s,t)=>t[s-1]+1<e?(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,c.jsx)(l.rU,{to:"#",className:"page-link",children:"..."})}),(0,c.jsx)("li",{className:i()("page-item","d-none","d-xl-inline-block",{active:u===e}),onClick:s=>x(e),children:(0,c.jsx)(l.rU,{to:"#",className:"page-link",children:e})})]},e):(0,c.jsx)("li",{className:i()("page-item","d-none","d-xl-inline-block",{active:u===e}),onClick:s=>x(e),children:(0,c.jsx)(l.rU,{to:"#",className:"page-link",children:e})},e))),(0,c.jsx)("li",{className:i()("page-item","paginate_button","next",{disabled:u===s.pageCount}),onClick:()=>{u!==s.pageCount&&x(u+1)},children:(0,c.jsx)(l.rU,{to:"#",className:"page-link",children:(0,c.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})}},23965:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var a=t(47313),l=t(65832),n=t(465),i=t(42610),c=t(63849),r=t(31616),d=t(93298),o=t(51450),m=t(58467),h=t(1084),x=t(52850),g=t(20433),j=t(10726),u=t(46417);const p=e=>{let{notices:s}=e;const t=(0,h.I0)(),[c,r]=(0,a.useState)(!1),[d,o]=(0,a.useState)(0),[m,g]=(0,a.useState)(""),[p,b]=(0,a.useState)("");return(0,a.useEffect)((()=>{t((0,x.lC)(1))}),[c]),(0,u.jsx)(l.Z,{children:(0,u.jsxs)(l.Z.Body,{children:[m&&(0,u.jsx)("div",{className:"alert alert-success",children:m}),p&&(0,u.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:p}),(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)(n.Z,{className:"mb-0 table-striped dt-responsive nowrap w-100",children:[(0,u.jsx)("thead",{className:"table-light",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Title"}),(0,u.jsx)("th",{children:"Actions"})]})}),(0,u.jsx)("tbody",{children:s&&s.data.length>0?s.data.map(((e,s)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.schedule_date}),(0,u.jsx)("td",{children:e.title}),(0,u.jsx)("td",{children:(0,u.jsx)(a.Fragment,{children:(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.Z,{className:"btn-group",align:"end",children:[(0,u.jsx)(i.Z.Toggle,{variant:"light",className:"table-action-btn btn-sm",children:(0,u.jsx)("i",{className:"mdi mdi-dots-horizontal"})}),(0,u.jsxs)(i.Z.Menu,{children:[" ",(0,u.jsxs)(i.Z.Item,{href:"notice/".concat(e.id),children:[(0,u.jsx)("i",{className:"mdi mdi-check-all me-2 text-muted font-18 vertical-middle"}),"Edit Notice"]}),(0,u.jsxs)(i.Z.Item,{onClick:()=>{o(e.id),r(!0)},children:[(0,u.jsx)("i",{className:"mdi mdi-delete me-2 text-muted font-18 vertical-middle"}),"Delete Notice"]})]})]})})})})]},s))):(0,u.jsx)("p",{children:"No Data Found"})})]})}),(0,u.jsx)(j.T,{show:c,targetId:d,submitForm:e=>{t((0,x.WM)(e)).unwrap().then((e=>{e&&!0===e.status&&(g(e.message),r(!1))})).catch((e=>{b(e.message),r(!1)}))},handleClose:()=>r(!1)})]})})},b=()=>{const e=(0,h.I0)(),[s,t]=(0,a.useState)(1),{notices:l}=(0,h.v9)((e=>({notices:e.Notice.notices})));let n=(0,m.s0)();return(0,a.useEffect)((()=>{e((0,x.lC)(s))}),[s]),(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(o.Z,{breadCrumbItems:[{label:"Bulletin Board",path:"/notice",active:!0}],title:"Bulletin Board"}),(0,u.jsx)(c.Z,{children:(0,u.jsxs)(r.Z,{lg:12,children:[(0,u.jsxs)(d.Z,{className:"waves-effect waves-light mb-3",onClick:()=>{n("/notice/new")},children:[(0,u.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add New"]}),l&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{notices:l}),(0,u.jsx)(g.Z,{tableProps:{pageCount:l.last_page,state:{pageIndex:l.current_page},pageOptions:{length:l.total},gotoPage:e=>{t(e)}},sizePerPageList:[{text:"10",value:10}]})]})]})})]})}}}]);