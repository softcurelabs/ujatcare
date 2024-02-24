"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[909],{20433:(e,a,t)=>{t.d(a,{Z:()=>o});var s=t(47313),r=t(2135),i=t(72884),l=t.n(i),A=t(46417);const o=e=>{let{tableProps:a,sizePerPageList:t}=e;const[i,o]=(0,s.useState)(a.pageCount),[n,c]=(0,s.useState)(a.state.pageIndex);(0,s.useEffect)((()=>{o(a.pageCount),c(a.state.pageIndex)}),[a.pageCount,a.state.pageIndex]);const d=(0,s.useCallback)(((e,a)=>e.filter((e=>e<=i))),[i]),m=(0,s.useCallback)(((e,a)=>a<7?d([1,2,3,4,5,6],a):e%5>=0&&e>4&&e+2<a?[1,e-1,e,e+1,a]:e%5>=0&&e>4&&e+2>=a?[1,a-3,a-2,a-1,a]:[1,2,3,4,5,a]),[d]),p=e=>{if(e===n)return;const t=m(e,i);u(d(t,i)),a.gotoPage(e)};(0,s.useEffect)((()=>{const e=m(null,i);u(e)}),[i,m]);const[x,u]=(0,s.useState)(m(null,i)),g=n;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[t.length>0&&(0,A.jsxs)("div",{className:"d-inline-block me-3",children:[(0,A.jsx)("label",{className:"me-1",children:"Display :"}),(0,A.jsx)("select",{value:a.state.pageSize,onChange:e=>{a.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(t||[]).map(((e,a)=>(0,A.jsx)("option",{value:e.value,children:e.text},a)))})]}),(0,A.jsxs)("span",{className:"me-3",children:["Page"," ",(0,A.jsxs)("strong",{children:[n," of ",a.pageOptions.length]})," "]}),(0,A.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,A.jsx)("li",{className:l()("page-item","paginate_button","previous",{disabled:1===g}),onClick:()=>{1!==g&&p(g-1)},children:(0,A.jsx)(r.rU,{to:"#",className:"page-link",children:(0,A.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(x||[]).map(((e,a,t)=>t[a-1]+1<e?(0,A.jsxs)(s.Fragment,{children:[(0,A.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,A.jsx)(r.rU,{to:"#",className:"page-link",children:"..."})}),(0,A.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:g===e}),onClick:a=>p(e),children:(0,A.jsx)(r.rU,{to:"#",className:"page-link",children:e})})]},e):(0,A.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:g===e}),onClick:a=>p(e),children:(0,A.jsx)(r.rU,{to:"#",className:"page-link",children:e})},e))),(0,A.jsx)("li",{className:l()("page-item","paginate_button","next",{disabled:g===a.pageCount}),onClick:()=>{g!==a.pageCount&&p(g+1)},children:(0,A.jsx)(r.rU,{to:"#",className:"page-link",children:(0,A.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})}},81244:(e,a,t)=>{t.d(a,{Z:()=>d});var s=t(47313),r=t(45110),i=t(72884),l=t.n(i),A=t(20433),o=t(46417);const n=e=>{let{preGlobalFilteredRows:a,globalFilter:t,setGlobalFilter:i,searchBoxClass:A}=e;const n=a.length,[c,d]=(0,s.useState)(t),m=(0,r.useAsyncDebounce)((e=>{i(e||void 0)}),200);return(0,o.jsx)("div",{className:l()(A),children:(0,o.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,o.jsx)("input",{type:"search",value:c||"",onChange:e=>{d(e.target.value),m(e.target.value)},placeholder:"".concat(n," records..."),className:"form-control w-auto ms-1"})]})})},c=(0,s.forwardRef)(((e,a)=>{let{indeterminate:t,...r}=e;const i=(0,s.useRef)(),l=a||i;return(0,s.useEffect)((()=>{l.current.indeterminate=t}),[l,t]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"form-check",children:[(0,o.jsx)("input",{type:"checkbox",className:"form-check-input",ref:l,...r}),(0,o.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),d=e=>{const a=e.isSearchable||!1,t=e.isSortable||!1,s=e.pagination||!1,i=e.isSelectable||!1,d=e.isExpandable||!1,m=e.sizePerPageList||[];let p={};a&&(p.useGlobalFilter=r.useGlobalFilter),t&&(p.useSortBy=r.useSortBy),d&&(p.useExpanded=r.useExpanded),s&&(p.usePagination=r.usePagination),i&&(p.useRowSelect=r.useRowSelect);const x=(0,r.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},p.hasOwnProperty("useGlobalFilter")&&p.useGlobalFilter,p.hasOwnProperty("useSortBy")&&p.useSortBy,p.hasOwnProperty("useExpanded")&&p.useExpanded,p.hasOwnProperty("usePagination")&&p.usePagination,p.hasOwnProperty("useRowSelect")&&p.useRowSelect,(e=>{i&&e.visibleColumns.push((e=>[{id:"selection",Header:e=>{let{getToggleAllPageRowsSelectedProps:a}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(c,{...a()})})},Cell:e=>{let{row:a}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(c,{...a.getToggleRowSelectedProps()})})}},...e])),d&&e.visibleColumns.push((e=>[{id:"expander",Header:e=>{let{getToggleAllRowsExpandedProps:a,isAllRowsExpanded:t}=e;return(0,o.jsx)("span",{...a(),children:t?"-":"+"})},Cell:e=>{let{row:a}=e;return a.canExpand?(0,o.jsx)("span",{...a.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*a.depth,"rem")}}),children:a.isExpanded?"-":"+"}):null}},...e]))}));let u=s?x.page:x.rows;return(0,o.jsxs)(o.Fragment,{children:[a&&(0,o.jsx)(n,{preGlobalFilteredRows:x.preGlobalFilteredRows,globalFilter:x.state.globalFilter,setGlobalFilter:x.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,o.jsx)("div",{className:"table-responsive",children:(0,o.jsxs)("table",{...x.getTableProps(),className:l()("table table-centered react-table",e.tableClass),children:[(0,o.jsx)("thead",{className:e.theadClass,children:(x.headerGroups||[]).map((e=>(0,o.jsx)("tr",{...e.getHeaderGroupProps(),children:(e.headers||[]).map((e=>(0,o.jsx)("th",{...e.getHeaderProps(e.sort&&e.getSortByToggleProps()),className:l()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")})))})))}),(0,o.jsx)("tbody",{...x.getTableBodyProps(),children:(u||[]).map(((e,a)=>(x.prepareRow(e),(0,o.jsx)("tr",{...e.getRowProps(),children:(e.cells||[]).map((e=>(0,o.jsx)("td",{...e.getCellProps([{className:e.column.className}]),children:e.render("Cell")})))}))))})]})}),s&&(0,o.jsx)(A.Z,{tableProps:x,sizePerPageList:m})]})}},60909:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});t(47313);var s=t(63849),r=t(31616),i=t(51450),l=t(2135),A=t(42610),o=t(65832),n=t(93298),c=t(72884),d=t.n(c),m=t(81244),p=t(46417);const x=[{Header:"ID",accessor:"id",sort:!0,Cell:e=>{let{row:a}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("b",{children:a.original.id})})}},{Header:"Requested By",accessor:"requested_by",sort:!0,Cell:e=>{let{row:a}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(l.rU,{to:"#",className:"text-body",children:[(0,p.jsx)("img",{src:a.original.requested_by.image,alt:"",title:"contact-img",className:"rounded-circle avatar-xs"}),(0,p.jsx)("span",{className:"ms-2",children:a.original.requested_by.name})]})})}},{Header:"Subject",accessor:"subject",sort:!0},{Header:"Assignee",accessor:"assignee",Cell:e=>{let{row:a}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.rU,{to:"#",children:(0,p.jsx)("img",{src:a.original.assignee,alt:"",title:"contact-img",className:"rounded-circle avatar-xs"})})})}},{Header:"Priority",accessor:"priority",sort:!0,Cell:e=>{let{row:a}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("span",{className:d()("badge",{"bg-soft-secondary text-secondary":"Low"===a.original.priority,"bg-soft-warning text-warning":"Medium"===a.original.priority,"bg-soft-danger text-danger":"High"===a.original.priority}),children:a.original.priority})})}},{Header:"Status",accessor:"status",sort:!0,Cell:e=>{let{row:a}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("span",{className:d()("badge",{"bg-success":"Open"===a.original.status,"bg-secondary text-light":"Closed"===a.original.status}),children:a.original.status})})}},{Header:"Created Date",accessor:"created_date",sort:!0},{Header:"Due Date",accessor:"due_date",sort:!0},{Header:"Action",accessor:"action",Cell:()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(A.Z,{className:"btn-group",align:"end",children:[(0,p.jsx)(A.Z.Toggle,{variant:"light",className:"table-action-btn btn-sm",children:(0,p.jsx)("i",{className:"mdi mdi-dots-horizontal"})}),(0,p.jsxs)(A.Z.Menu,{children:[(0,p.jsxs)(A.Z.Item,{children:[(0,p.jsx)("i",{className:"mdi mdi-pencil me-2 text-muted font-18 vertical-middle"}),"Edit Ticket"]}),(0,p.jsxs)(A.Z.Item,{children:[(0,p.jsx)("i",{className:"mdi mdi-check-all me-2 text-muted font-18 vertical-middle"}),"Close"]}),(0,p.jsxs)(A.Z.Item,{children:[(0,p.jsx)("i",{className:"mdi mdi-delete me-2 text-muted font-18 vertical-middle"}),"Remove"]}),(0,p.jsxs)(A.Z.Item,{children:[(0,p.jsx)("i",{className:"mdi mdi-star me-2 text-muted font-18 vertical-middle"}),"Mark as Unread"]})]})]})}),sort:!1}],u=[{text:"10",value:10},{text:"25",value:25},{text:"50",value:50}],g=e=>{let{ticketDetails:a}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(o.Z,{children:(0,p.jsxs)(o.Z.Body,{children:[(0,p.jsxs)(n.Z,{className:"btn-sm btn-blue waves-effect waves-light float-end",children:[(0,p.jsx)("i",{className:"mdi mdi-plus-circle"})," Add Ticket"]}),(0,p.jsx)("h4",{className:"header-title mb-4",children:"Manage Tickets"}),(0,p.jsx)(m.Z,{columns:x,data:a,pageSize:10,sizePerPageList:u,isSortable:!0,pagination:!0,isSearchable:!0,theadClass:"table-light",searchBoxClass:"mt-2 mb-3"})]})})})};var h=t(1377),b=t(83563),Q=t(43518),j=t(96952),H=t(35826),R=t(1642);const k=[{id:"#1256",requested_by:{name:"George A. Llanes",image:R},subject:"Support for theme",assignee:h,priority:"Low",status:"Open",created_date:"2017-04-28",due_date:"2017-04-28"},{id:"#2542",requested_by:{name:"Jose D. Delacruz",image:H},subject:"New submission on your website",assignee:b,priority:"Medium",status:"Closed",created_date:"2008-04-25",due_date:"2008-04-25"},{id:"#320",requested_by:{name:"Phyllis K. Maciel",image:j},subject:"Verify your new email address!",assignee:Q,priority:"High",status:"Open",created_date:"2017-04-20",due_date:"2017-04-25"},{id:"#1254",requested_by:{name:"Margeret V. Ligon",image:Q},subject:"Your application has been received!",assignee:j,priority:"High",status:"Closed",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#1020",requested_by:{name:"Erwin E. Brown",image:b},subject:"A new rating has been received",assignee:H,priority:"Medium",status:"Closed",created_date:"2013-08-11",due_date:"2013-08-30"},{id:"#854",requested_by:{name:"William L. Trent",image:h},subject:"Your Profile has been accepted",assignee:R,priority:"High",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#9501",requested_by:{name:"Amy R. Barnaby",image:R},subject:"Homeworth for your property increased",assignee:h,priority:"Low",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#3652",requested_by:{name:"Jessica T. Phillips",image:H},subject:"Item Support Message sent",assignee:b,priority:"Medium",status:"Closed",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#9852",requested_by:{name:"Debra J. Wilson",image:j},subject:"Your item has been updated!",assignee:Q,priority:"High",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#3652",requested_by:{name:"Luke J. Sain",image:Q},subject:"Your password has been reset",assignee:j,priority:"Low",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#1352",requested_by:{name:"Karen R. Doyle",image:b},subject:"Question regarding your Bootstrap Theme",assignee:H,priority:"High",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#3562",requested_by:{name:"Freddie J. Plourde",image:h},subject:"Security alert for my account",assignee:R,priority:"Low",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#3658",requested_by:{name:"Darrell J. Cook",image:R},subject:"Christopher S. Ahmad",assignee:h,priority:"Medium",status:"Closed",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#2251",requested_by:{name:"Mark C. Diaz",image:H},subject:"Verify your new email address!",assignee:b,priority:"High",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"},{id:"#3654",requested_by:{name:"Robert K. Joseph",image:j},subject:"Support for theme",assignee:Q,priority:"Low",status:"Open",created_date:"2017-01-04",due_date:"21/05/2017"}],y=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{breadCrumbItems:[{label:"Tickets",path:"/apps/tickets/list"},{label:"Ticket List",path:"/apps/tickets/list",active:!0}],title:"Request"}),(0,p.jsx)(s.Z,{children:(0,p.jsx)(r.Z,{children:(0,p.jsx)(g,{ticketDetails:k})})})]})},1642:e=>{e.exports="data:image/jpeg;base64,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"},1377:e=>{e.exports="data:image/jpeg;base64,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"},96952:e=>{e.exports="data:image/jpeg;base64,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"}}]);