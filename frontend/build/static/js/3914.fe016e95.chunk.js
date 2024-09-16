"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3914],{63790:(e,s,t)=>{t.d(s,{A:()=>r});var n=t(9950),a=t(42074),i=t(48738),l=t.n(i),c=t(44414);const r=e=>{let{tableProps:s,sizePerPageList:t}=e;const[i,r]=(0,n.useState)(s.pageCount),[d,o]=(0,n.useState)(s.state.pageIndex);(0,n.useEffect)((()=>{r(s.pageCount),o(s.state.pageIndex)}),[s.pageCount,s.state.pageIndex]);const h=(0,n.useCallback)(((e,s)=>e.filter((e=>e<=i))),[i]),x=(0,n.useCallback)(((e,s)=>s<7?h([1,2,3,4,5,6],s):e%5>=0&&e>4&&e+2<s?[1,e-1,e,e+1,s]:e%5>=0&&e>4&&e+2>=s?[1,s-3,s-2,s-1,s]:[1,2,3,4,5,s]),[h]),g=e=>{if(e===d)return;const t=x(e,i);p(h(t,i)),s.gotoPage(e)};(0,n.useEffect)((()=>{const e=x(null,i);p(e)}),[i,x]);const[m,p]=(0,n.useState)(x(null,i)),j=d;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[t.length>0&&(0,c.jsxs)("div",{className:"d-inline-block me-3",children:[(0,c.jsx)("label",{className:"me-1",children:"Display :"}),(0,c.jsx)("select",{value:s.state.pageSize,onChange:e=>{s.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(t||[]).map(((e,s)=>(0,c.jsx)("option",{value:e.value,children:e.text},s)))})]}),(0,c.jsxs)("span",{className:"me-3",children:["Page"," ",(0,c.jsxs)("strong",{children:[d," of ",s.pageOptions.length]})," "]}),(0,c.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,c.jsx)("li",{className:l()("page-item","paginate_button","previous",{disabled:1===j}),onClick:()=>{1!==j&&g(j-1)},children:(0,c.jsx)(a.N_,{to:"#",className:"page-link",children:(0,c.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(m||[]).map(((e,s,t)=>t[s-1]+1<e?(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,c.jsx)(a.N_,{to:"#",className:"page-link",children:"..."})}),(0,c.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:j===e}),onClick:s=>g(e),children:(0,c.jsx)(a.N_,{to:"#",className:"page-link",children:e})})]},e):(0,c.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:j===e}),onClick:s=>g(e),children:(0,c.jsx)(a.N_,{to:"#",className:"page-link",children:e})},e))),(0,c.jsx)("li",{className:l()("page-item","paginate_button","next",{disabled:j===s.pageCount}),onClick:()=>{j!==s.pageCount&&g(j+1)},children:(0,c.jsx)(a.N_,{to:"#",className:"page-link",children:(0,c.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})}},33914:(e,s,t)=>{t.r(s),t.d(s,{default:()=>w});var n=t(86781),a=t(68459),i=t(86133),l=t(9950),c=t(28429),r=t(471),d=t(97937),o=t(1093),h=t(48738),x=t.n(h);const g={1:"Open",2:"In Progress",3:"Close"},m={1:"Low",2:"Medium",3:"High"};var p=t(49462),j=t(96105),u=t(27081),b=t(44414);const N=e=>{let{row:s}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("b",{children:s.id})})},f=e=>{let{row:s}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("span",{className:x()("badge",{"bg-soft-secondary text-secondary":1===s.priority,"bg-soft-warning text-warning":2===s.priority,"bg-soft-danger text-danger":3===s.priority}),children:m[s.priority.toString()]})})},k=e=>{let{row:s}=e;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("span",{className:x()("badge",{"bg-success":1===s.status,"bg-warning":2===s.status,"bg-secondary text-light":3===s.status}),children:g[s.status.toString()]})})},C=e=>{let{inspection:s,reload:t}=e,n=(0,c.Zp)();const[a,i]=(0,l.useState)(!1),[h,x]=(0,l.useState)(0),[g,m]=(0,l.useState)(""),C=(0,u.wA)(),[v,w]=(0,l.useState)("");return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.A,{children:(0,b.jsxs)(r.A.Body,{children:[g&&(0,b.jsx)("div",{className:"alert alert-success",children:g}),v&&(0,b.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:v}),(0,b.jsxs)(d.A,{className:"waves-effect waves-light mb-3",onClick:()=>{n("/inspection/new")},children:[(0,b.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add New"]}),(0,b.jsxs)(o.A,{className:"mb-0 table-striped dt-responsive react-table nowrap w-100",children:[(0,b.jsx)("thead",{className:"table-light",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Id"}),(0,b.jsx)("th",{children:"Flat Number"}),(0,b.jsx)("th",{children:"Subject"}),(0,b.jsx)("th",{children:"Assignee"}),(0,b.jsx)("th",{children:"Priority"}),(0,b.jsx)("th",{children:"Status"}),(0,b.jsx)("th",{children:"Created Date"}),(0,b.jsx)("th",{children:"Completion Date"}),(0,b.jsx)("th",{children:"Action"})]})}),(0,b.jsx)("tbody",{children:s.data.length>0?s.data.map(((e,s)=>(0,b.jsxs)("tr",{className:"",children:[(0,b.jsxs)("td",{children:["#",(0,b.jsx)(N,{row:e})]}),(0,b.jsx)("td",{children:e.flat?e.flat.name:""}),(0,b.jsx)("td",{children:e.title}),(0,b.jsx)("td",{children:e.inspection_by instanceof Number?"":e.inspection_by.name}),(0,b.jsx)("td",{children:(0,b.jsx)(f,{row:e})}),(0,b.jsx)("td",{children:(0,b.jsx)(k,{row:e})}),(0,b.jsx)("td",{children:e.created_at}),(0,b.jsx)("td",{children:e.inspection_date}),(0,b.jsx)("td",{children:(0,b.jsx)(l.Fragment,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.A,{className:"btn-secondary",onClick:()=>{let s="/inspection/".concat(e.id);n(s)},size:"sm",children:"Edit"}),(0,b.jsx)(d.A,{className:"btn-secondary ms-2",onClick:()=>{x(e.id),i(!0)},size:"sm",children:"Delete"})]})})})]},s))):(0,b.jsx)("p",{children:"No Data Found"})})]}),(0,b.jsx)(j.m,{show:a,targetId:h,submitForm:e=>{C((0,p.WQ)(e)).unwrap().then((e=>{e&&!0===e.status&&(m(e.message),i(!1),t())})).catch((e=>{w(e.message),i(!1)}))},handleClose:()=>i(!1)})]})})})};var v=t(63790);const w=()=>{const{inspection:e}=(0,u.d4)((e=>({inspection:e.Inspection.inspection}))),s=(0,u.wA)(),[t,c]=(0,l.useState)(1);(0,l.useEffect)((()=>{s((0,p.fh)(t))}),[t]);const r=(0,l.useCallback)((()=>{s((0,p.fh)(t))}),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.A,{breadCrumbItems:[{label:"Maintanance Inspection History",path:"/apps/tickets/list",active:!0}],title:"Maintanance Inspection History"}),(0,b.jsx)(n.A,{children:(0,b.jsx)(a.A,{children:e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{inspection:e,reload:r}),(0,b.jsx)(v.A,{tableProps:{pageCount:e.last_page,state:{pageIndex:e.current_page},pageOptions:{length:e.total},gotoPage:e=>{c(e)}},sizePerPageList:[{text:"10",value:10}]})]})})})]})}}}]);