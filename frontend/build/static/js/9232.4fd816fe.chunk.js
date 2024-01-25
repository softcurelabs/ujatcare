"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9232],{92231:(e,s,a)=>{a.d(s,{Z:()=>g});var l=a(47313),t=a(45110),r=a(72884),n=a.n(r),i=a(2135),c=a(46417);const o=e=>{let{tableProps:s,sizePerPageList:a}=e;const[t,r]=(0,l.useState)(s.pageCount),[o,d]=(0,l.useState)(s.state.pageIndex);(0,l.useEffect)((()=>{r(s.pageCount),d(s.state.pageIndex)}),[s.pageCount,s.state.pageIndex]);const m=(0,l.useCallback)(((e,s)=>e.filter((e=>e<=t))),[t]),g=(0,l.useCallback)(((e,s)=>s<7?m([1,2,3,4,5,6],s):e%5>=0&&e>4&&e+2<s?[1,e-1,e,e+1,s]:e%5>=0&&e>4&&e+2>=s?[1,s-3,s-2,s-1,s]:[1,2,3,4,5,s]),[m]),x=e=>{if(e===o+1)return;const a=g(e,t);u(m(a,t)),s.gotoPage(e-1)};(0,l.useEffect)((()=>{const e=g(null,t);u(e)}),[t,g]);const[p,u]=(0,l.useState)(g(null,t)),h=o+1;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[a.length>0&&(0,c.jsxs)("div",{className:"d-inline-block me-3",children:[(0,c.jsx)("label",{className:"me-1",children:"Display :"}),(0,c.jsx)("select",{value:s.state.pageSize,onChange:e=>{s.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(a||[]).map(((e,s)=>(0,c.jsx)("option",{value:e.value,children:e.text},s)))})]}),(0,c.jsxs)("span",{className:"me-3",children:["Page"," ",(0,c.jsxs)("strong",{children:[o+1," of ",s.pageOptions.length]})," "]}),(0,c.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,c.jsx)("label",{className:"form-label",children:"Go to page : "}),(0,c.jsx)("input",{type:"number",value:o+1,min:"1",onChange:e=>{const a=e.target.value?Number(e.target.value)-1:0;s.gotoPage(a),d(s.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,c.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,c.jsx)("li",{className:n()("page-item","paginate_button","previous",{disabled:1===h}),onClick:()=>{1!==h&&x(h-1)},children:(0,c.jsx)(i.rU,{to:"#",className:"page-link",children:(0,c.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(p||[]).map(((e,s,a)=>a[s-1]+1<e?(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,c.jsx)(i.rU,{to:"#",className:"page-link",children:"..."})}),(0,c.jsx)("li",{className:n()("page-item","d-none","d-xl-inline-block",{active:h===e}),onClick:s=>x(e),children:(0,c.jsx)(i.rU,{to:"#",className:"page-link",children:e})})]},e):(0,c.jsx)("li",{className:n()("page-item","d-none","d-xl-inline-block",{active:h===e}),onClick:s=>x(e),children:(0,c.jsx)(i.rU,{to:"#",className:"page-link",children:e})},e))),(0,c.jsx)("li",{className:n()("page-item","paginate_button","next",{disabled:h===s.pageCount}),onClick:()=>{h!==s.pageCount&&x(h+1)},children:(0,c.jsx)(i.rU,{to:"#",className:"page-link",children:(0,c.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})},d=e=>{let{preGlobalFilteredRows:s,globalFilter:a,setGlobalFilter:r,searchBoxClass:i}=e;const o=s.length,[d,m]=(0,l.useState)(a),g=(0,t.useAsyncDebounce)((e=>{r(e||void 0)}),200);return(0,c.jsx)("div",{className:n()(i),children:(0,c.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,c.jsx)("input",{type:"search",value:d||"",onChange:e=>{m(e.target.value),g(e.target.value)},placeholder:"".concat(o," records..."),className:"form-control w-auto ms-1"})]})})},m=(0,l.forwardRef)(((e,s)=>{let{indeterminate:a,...t}=e;const r=(0,l.useRef)(),n=s||r;return(0,l.useEffect)((()=>{n.current.indeterminate=a}),[n,a]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"form-check",children:[(0,c.jsx)("input",{type:"checkbox",className:"form-check-input",ref:n,...t}),(0,c.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),g=e=>{const s=e.isSearchable||!1,a=e.isSortable||!1,l=e.pagination||!1,r=e.isSelectable||!1,i=e.isExpandable||!1,g=e.sizePerPageList||[];let x={};s&&(x.useGlobalFilter=t.useGlobalFilter),a&&(x.useSortBy=t.useSortBy),i&&(x.useExpanded=t.useExpanded),l&&(x.usePagination=t.usePagination),r&&(x.useRowSelect=t.useRowSelect);const p=(0,t.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},x.hasOwnProperty("useGlobalFilter")&&x.useGlobalFilter,x.hasOwnProperty("useSortBy")&&x.useSortBy,x.hasOwnProperty("useExpanded")&&x.useExpanded,x.hasOwnProperty("usePagination")&&x.usePagination,x.hasOwnProperty("useRowSelect")&&x.useRowSelect,(e=>{r&&e.visibleColumns.push((e=>[{id:"selection",Header:e=>{let{getToggleAllPageRowsSelectedProps:s}=e;return(0,c.jsx)("div",{children:(0,c.jsx)(m,{...s()})})},Cell:e=>{let{row:s}=e;return(0,c.jsx)("div",{children:(0,c.jsx)(m,{...s.getToggleRowSelectedProps()})})}},...e])),i&&e.visibleColumns.push((e=>[{id:"expander",Header:e=>{let{getToggleAllRowsExpandedProps:s,isAllRowsExpanded:a}=e;return(0,c.jsx)("span",{...s(),children:a?"-":"+"})},Cell:e=>{let{row:s}=e;return s.canExpand?(0,c.jsx)("span",{...s.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*s.depth,"rem")}}),children:s.isExpanded?"-":"+"}):null}},...e]))}));let u=l?p.page:p.rows;return(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(d,{preGlobalFilteredRows:p.preGlobalFilteredRows,globalFilter:p.state.globalFilter,setGlobalFilter:p.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{...p.getTableProps(),className:n()("table table-centered react-table",e.tableClass),children:[(0,c.jsx)("thead",{className:e.theadClass,children:(p.headerGroups||[]).map((e=>(0,c.jsx)("tr",{...e.getHeaderGroupProps(),children:(e.headers||[]).map((e=>(0,c.jsx)("th",{...e.getHeaderProps(e.sort&&e.getSortByToggleProps()),className:n()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")})))})))}),(0,c.jsx)("tbody",{...p.getTableBodyProps(),children:(u||[]).map(((e,s)=>(p.prepareRow(e),(0,c.jsx)("tr",{...e.getRowProps(),children:(e.cells||[]).map((e=>(0,c.jsx)("td",{...e.getCellProps([{className:e.column.className}]),children:e.render("Cell")})))}))))})]})}),l&&(0,c.jsx)(o,{tableProps:p,sizePerPageList:g})]})}},29232:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});a(47313);var l=a(2135),t=a(63849),r=a(31616),n=a(65832),i=a(93298),c=a(72884),o=a.n(c),d=a(51450),m=a(92231),g=a(38033),x=a(46417);const p=[{Header:"Owner Name",accessor:"name",sort:!0,Cell:e=>{let{row:s}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"table-user",children:[(0,x.jsx)("img",{src:s.original.image,alt:"",className:"me-2 rounded-circle"}),(0,x.jsx)(l.rU,{to:"#",className:"text-body fw-semibold",children:s.original.name})]})})}},{Header:"Store Name",accessor:"store",sort:!0},{Header:"Ratings",accessor:"ratings",sort:!0,Cell:e=>{let{row:s}=e;const a=s.original.ratings>=3&&s.original.ratings<=5?"text-warning":"text-danger";return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("i",{className:o()("mdi","mdi-star",a)})," ",s.original.ratings]})}},{Header:"Products",accessor:"products",sort:!0},{Header:"Wallet Balance",accessor:"balance",sort:!0},{Header:"Created Date",accessor:"created_on",sort:!0},{Header:"Revenue",accessor:"revenue",sort:!0},{Header:"Action",accessor:"action",sort:!1,Cell:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.rU,{to:"#",className:"action-icon",children:[" ",(0,x.jsx)("i",{className:"mdi mdi-square-edit-outline"})]}),(0,x.jsxs)(l.rU,{to:"#",className:"action-icon",children:[" ",(0,x.jsx)("i",{className:"mdi mdi-delete"})]})]})}],u=[{text:"10",value:10},{text:"25",value:25},{text:"All",value:g.gx.length}],h=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{breadCrumbItems:[{label:"Ecommerce",path:"/apps/ecommerce/sellers"},{label:"Sellers",path:"/apps/ecommerce/sellers",active:!0}],title:"Sellers"}),(0,x.jsx)(t.Z,{children:(0,x.jsx)(r.Z,{children:(0,x.jsx)(n.Z,{children:(0,x.jsxs)(n.Z.Body,{children:[(0,x.jsxs)(t.Z,{children:[(0,x.jsx)(r.Z,{sm:4,children:(0,x.jsxs)(i.Z,{variant:"danger",className:"mb-2",children:[(0,x.jsx)("i",{className:"mdi mdi-plus-circle me-2"})," Add Seller"]})}),(0,x.jsx)(r.Z,{sm:8,children:(0,x.jsxs)("div",{className:"text-sm-end",children:[(0,x.jsx)(i.Z,{variant:"success",className:"mb-2 me-1",children:(0,x.jsx)("i",{className:"mdi mdi-cog-outline"})}),(0,x.jsx)(i.Z,{variant:"light",className:"mb-2 me-1",children:"Import"}),(0,x.jsx)(i.Z,{variant:"light",className:"mb-2 me-1",children:"Export"})]})})]}),(0,x.jsx)(m.Z,{columns:p,data:g.gx,pageSize:10,sizePerPageList:u,isSortable:!0,pagination:!0,isSelectable:!0,isSearchable:!0,theadClass:"table-light",searchBoxClass:"mt-2 mb-3"})]})})})})]})}}]);