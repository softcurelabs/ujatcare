"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3343],{41033:(e,a,n)=>{n.d(a,{A:()=>l});n(9950);var o=n(86781),i=n(68459),s=n(81924),m=n(44414);const l=e=>(0,m.jsx)(o.A,{children:(0,m.jsx)(i.A,{children:(0,m.jsxs)("div",{className:"page-title-box",children:[(0,m.jsx)("div",{children:(0,m.jsxs)(s.A,{className:"m-0 mb-0",children:[(0,m.jsx)(s.A.Item,{href:"/",children:"Home"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,m.jsx)(s.A.Item,{active:!0,children:e.label},a):(0,m.jsx)(s.A.Item,{href:e.path,children:e.label},a)))]})}),(0,m.jsx)("h4",{className:"page-title",children:e.title})]})})})},63790:(e,a,n)=>{n.d(a,{A:()=>p});var o=n(9950),i=n(42074),s=n(48738),m=n.n(s),l=n(44414);const p=e=>{let{tableProps:a,sizePerPageList:n}=e;const[s,p]=(0,o.useState)(a.pageCount),[r,c]=(0,o.useState)(a.state.pageIndex);(0,o.useEffect)((()=>{p(a.pageCount),c(a.state.pageIndex)}),[a.pageCount,a.state.pageIndex]);const d=(0,o.useCallback)(((e,a)=>e.filter((e=>e<=s))),[s]),t=(0,o.useCallback)(((e,a)=>a<7?d([1,2,3,4,5,6],a):e%5>=0&&e>4&&e+2<a?[1,e-1,e,e+1,a]:e%5>=0&&e>4&&e+2>=a?[1,a-3,a-2,a-1,a]:[1,2,3,4,5,a]),[d]),g=e=>{if(e===r)return;const n=t(e,s);u(d(n,s)),a.gotoPage(e)};(0,o.useEffect)((()=>{const e=t(null,s);u(e)}),[s,t]);const[h,u]=(0,o.useState)(t(null,s)),y=r;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,l.jsxs)("div",{className:"d-inline-block me-3",children:[(0,l.jsx)("label",{className:"me-1",children:"Display :"}),(0,l.jsx)("select",{value:a.state.pageSize,onChange:e=>{a.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map(((e,a)=>(0,l.jsx)("option",{value:e.value,children:e.text},a)))})]}),(0,l.jsxs)("span",{className:"me-3",children:["Page"," ",(0,l.jsxs)("strong",{children:[r," of ",a.pageOptions.length]})," "]}),(0,l.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,l.jsx)("li",{className:m()("page-item","paginate_button","previous",{disabled:1===y}),onClick:()=>{1!==y&&g(y-1)},children:(0,l.jsx)(i.N_,{to:"#",className:"page-link",children:(0,l.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(h||[]).map(((e,a,n)=>n[a-1]+1<e?(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,l.jsx)(i.N_,{to:"#",className:"page-link",children:"..."})}),(0,l.jsx)("li",{className:m()("page-item","d-none","d-xl-inline-block",{active:y===e}),onClick:a=>g(e),children:(0,l.jsx)(i.N_,{to:"#",className:"page-link",children:e})})]},e):(0,l.jsx)("li",{className:m()("page-item","d-none","d-xl-inline-block",{active:y===e}),onClick:a=>g(e),children:(0,l.jsx)(i.N_,{to:"#",className:"page-link",children:e})},e))),(0,l.jsx)("li",{className:m()("page-item","paginate_button","next",{disabled:y===a.pageCount}),onClick:()=>{y!==a.pageCount&&g(y+1)},children:(0,l.jsx)(i.N_,{to:"#",className:"page-link",children:(0,l.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})}},93343:(e,a,n)=>{n.r(a),n.d(a,{default:()=>w});var o=n(9950),i=n(86781),s=n(68459),m=n(471),l=n(41033),p=n(2043),r=n(48738),c=n.n(r),d=n(63790),t=n(44414);const g=e=>{let{preGlobalFilteredRows:a,globalFilter:n,setGlobalFilter:i,searchBoxClass:s}=e;const m=a.length,[l,r]=(0,o.useState)(n),d=(0,p.useAsyncDebounce)((e=>{i(e||void 0)}),200);return(0,t.jsx)("div",{className:c()(s),children:(0,t.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,t.jsx)("input",{type:"search",value:l||"",onChange:e=>{r(e.target.value),d(e.target.value)},placeholder:"".concat(m," records..."),className:"form-control w-auto ms-1"})]})})},h=(0,o.forwardRef)(((e,a)=>{let{indeterminate:n,...i}=e;const s=(0,o.useRef)(),m=a||s;return(0,o.useEffect)((()=>{m.current.indeterminate=n}),[m,n]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"form-check",children:[(0,t.jsx)("input",{type:"checkbox",className:"form-check-input",ref:m,...i}),(0,t.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),u=e=>{const a=e.isSearchable||!1,n=e.isSortable||!1,o=e.pagination||!1,i=e.isSelectable||!1,s=e.isExpandable||!1,m=e.sizePerPageList||[];let l={};a&&(l.useGlobalFilter=p.useGlobalFilter),n&&(l.useSortBy=p.useSortBy),s&&(l.useExpanded=p.useExpanded),o&&(l.usePagination=p.usePagination),i&&(l.useRowSelect=p.useRowSelect);const r=(0,p.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},l.hasOwnProperty("useGlobalFilter")&&l.useGlobalFilter,l.hasOwnProperty("useSortBy")&&l.useSortBy,l.hasOwnProperty("useExpanded")&&l.useExpanded,l.hasOwnProperty("usePagination")&&l.usePagination,l.hasOwnProperty("useRowSelect")&&l.useRowSelect,(e=>{i&&e.visibleColumns.push((e=>[{id:"selection",Header:e=>{let{getToggleAllPageRowsSelectedProps:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)(h,{...a()})})},Cell:e=>{let{row:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)(h,{...a.getToggleRowSelectedProps()})})}},...e])),s&&e.visibleColumns.push((e=>[{id:"expander",Header:e=>{let{getToggleAllRowsExpandedProps:a,isAllRowsExpanded:n}=e;return(0,t.jsx)("span",{...a(),children:n?"-":"+"})},Cell:e=>{let{row:a}=e;return a.canExpand?(0,t.jsx)("span",{...a.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*a.depth,"rem")}}),children:a.isExpanded?"-":"+"}):null}},...e]))}));let u=o?r.page:r.rows;return(0,t.jsxs)(t.Fragment,{children:[a&&(0,t.jsx)(g,{preGlobalFilteredRows:r.preGlobalFilteredRows,globalFilter:r.state.globalFilter,setGlobalFilter:r.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,t.jsx)("div",{className:"table-responsive",children:(0,t.jsxs)("table",{...r.getTableProps(),className:c()("table table-centered react-table",e.tableClass),children:[(0,t.jsx)("thead",{className:e.theadClass,children:(r.headerGroups||[]).map((e=>(0,t.jsx)("tr",{...e.getHeaderGroupProps(),children:(e.headers||[]).map((e=>(0,t.jsx)("th",{...e.getHeaderProps(e.sort&&e.getSortByToggleProps()),className:c()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")})))})))}),(0,t.jsx)("tbody",{...r.getTableBodyProps(),children:(u||[]).map(((e,a)=>(r.prepareRow(e),(0,t.jsx)("tr",{...e.getRowProps(),children:(e.cells||[]).map((e=>(0,t.jsx)("td",{...e.getCellProps([{className:e.column.className}]),children:e.render("Cell")})))}))))})]})}),o&&(0,t.jsx)(d.A,{tableProps:r,sizePerPageList:m})]})},y=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427"},{id:2,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875"},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461"},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747"},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181"},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038"},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289"},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468"},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324"},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507"},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876"},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262"},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077"},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517"},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841"},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810"},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708"},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761"},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218"},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836"},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879"},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904"},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500"},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917"},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793"},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064"},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409"},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278"},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460"},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814"},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920"},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206"},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815"},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916"},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079"},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078"},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957"},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992"},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032"},{id:41,age:31,name:"Leila",company:"Zensure",phone:"+1 (902) 447-2419"},{id:42,age:24,name:"Madelyn",company:"Egypto",phone:"+1 (881) 538-3081"},{id:43,age:39,name:"Peck",company:"Tellifly",phone:"+1 (803) 452-3922"},{id:44,age:32,name:"Garrett",company:"Aquasure",phone:"+1 (876) 475-2185"},{id:45,age:21,name:"Kramer",company:"Terrago",phone:"+1 (912) 404-2597"},{id:46,age:35,name:"Lane",company:"Anivet",phone:"+1 (911) 495-3587"},{id:47,age:21,name:"Merritt",company:"Inear",phone:"+1 (856) 519-3838"},{id:48,age:25,name:"Margarita",company:"Unq",phone:"+1 (931) 558-3156"},{id:49,age:28,name:"Leigh",company:"Marqet",phone:"+1 (918) 526-2007"},{id:50,age:31,name:"Coleman",company:"Insuresys",phone:"+1 (827) 449-3786"},{id:51,age:31,name:"Alexander",company:"Portico",phone:"+1 (854) 576-2455"},{id:52,age:38,name:"Tanisha",company:"Earthwax",phone:"+1 (994) 494-3496"},{id:53,age:23,name:"Crane",company:"Pushcart",phone:"+1 (924) 497-3347"},{id:54,age:26,name:"Carmella",company:"Acusage",phone:"+1 (898) 575-2585"},{id:55,age:27,name:"Rosalind",company:"Isologica",phone:"+1 (838) 572-2994"},{id:56,age:37,name:"Duran",company:"Gazak",phone:"+1 (991) 446-3820"},{id:57,age:27,name:"Bernard",company:"Zoinage",phone:"+1 (824) 585-2197"},{id:58,age:29,name:"Tate",company:"Endipine",phone:"+1 (896) 448-2084"},{id:59,age:39,name:"Pearlie",company:"Progenex",phone:"+1 (805) 545-2585"},{id:60,age:20,name:"Manning",company:"Handshake",phone:"+1 (917) 405-3406"}],x=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:2,age:23,name:"Long",company:"Magmina",phone:"+1 (813) 583-2089",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032",subRows:[{id:51,age:23,name:"Bruno",company:"Magmina",phone:"+1 (813) 583-2089"}]}],b=[{Header:"ID",accessor:"id",sort:!0},{Header:"Name",accessor:"name",sort:!0},{Header:"Phone Number",accessor:"phone",sort:!1},{Header:"Age",accessor:"age",sort:!0},{Header:"Company",accessor:"company",sort:!1}],j=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:y.length}],w=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{breadCrumbItems:[{label:"Tables",path:"/features/tables/advanced"},{label:"Advanced Tables",path:"/features/tables/advanced",active:!0}],title:"Advanced Tables"}),(0,t.jsx)(i.A,{children:(0,t.jsx)(s.A,{children:(0,t.jsx)(m.A,{children:(0,t.jsxs)(m.A.Body,{children:[(0,t.jsx)("h4",{className:"header-title",children:"Pagination & Sort"}),(0,t.jsx)("p",{className:"text-muted font-14 mb-4",children:"A simple example of table with pagination and column sorting"}),(0,t.jsx)(u,{columns:b,data:y,pageSize:5,sizePerPageList:j,isSortable:!0,pagination:!0})]})})})}),(0,t.jsx)(i.A,{children:(0,t.jsx)(s.A,{children:(0,t.jsx)(m.A,{children:(0,t.jsxs)(m.A.Body,{children:[(0,t.jsx)("h4",{className:"header-title",children:"Search"}),(0,t.jsx)("p",{className:"text-muted font-14 mb-4",children:"A Table allowing search"}),(0,t.jsx)(u,{columns:b,data:y,pageSize:5,sizePerPageList:j,isSortable:!0,pagination:!0,isSearchable:!0})]})})})}),(0,t.jsx)(i.A,{children:(0,t.jsx)(s.A,{children:(0,t.jsx)(m.A,{children:(0,t.jsxs)(m.A.Body,{children:[(0,t.jsx)("h4",{className:"header-title",children:"Multiple Row Selection"}),(0,t.jsx)("p",{className:"text-muted font-14 mb-4",children:"This table allowing selection of multiple rows"}),(0,t.jsx)(u,{columns:b,data:y,pageSize:5,sizePerPageList:j,isSortable:!0,pagination:!0,isSelectable:!0})]})})})}),(0,t.jsx)(i.A,{children:(0,t.jsx)(s.A,{children:(0,t.jsx)(m.A,{children:(0,t.jsxs)(m.A.Body,{children:[(0,t.jsx)("h4",{className:"header-title",children:"Expand Row"}),(0,t.jsx)("p",{className:"text-muted font-14 mb-4",children:"Expand row to see more additional details"}),(0,t.jsx)(u,{columns:b,data:x,pageSize:5,sizePerPageList:j,isSortable:!0,pagination:!0,isExpandable:!0})]})})})})]})}}]);