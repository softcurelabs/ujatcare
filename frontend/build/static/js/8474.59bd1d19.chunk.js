"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8474],{18474:(e,s,a)=>{a.r(s),a.d(s,{default:()=>H});var t=a(47313),r=a(16614),i=a(61114),n=a(67894),l=a(56352),c=a(22010),m=a(2135),o=a(72884),d=a.n(o),x=a(46417);const u=e=>{let{chats:s}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("form",{className:"search-bar p-3",children:(0,x.jsxs)("div",{className:"position-relative",children:[(0,x.jsx)("input",{type:"text",className:"form-control",placeholder:"Search..."}),(0,x.jsx)("span",{className:"mdi mdi-magnify"})]})}),(0,x.jsx)("h6",{className:"fw-medium px-3 mt-2 text-uppercase",children:"Group Chats"}),(0,x.jsxs)("div",{className:"p-2",children:[(0,x.jsxs)(m.rU,{to:"#",className:"text-reset notification-item ps-3 mb-2 d-block",children:[(0,x.jsx)("i",{className:"mdi mdi-checkbox-blank-circle-outline me-1 text-success"}),(0,x.jsx)("span",{className:"mb-0 mt-1",children:"App Development"})]}),(0,x.jsxs)(m.rU,{to:"#",className:"text-reset notification-item ps-3 mb-2 d-block",children:[(0,x.jsx)("i",{className:"mdi mdi-checkbox-blank-circle-outline me-1 text-warning"}),(0,x.jsx)("span",{className:"mb-0 mt-1",children:"Office Work"})]}),(0,x.jsxs)(m.rU,{to:"#",className:"text-reset notification-item ps-3 mb-2 d-block",children:[(0,x.jsx)("i",{className:"mdi mdi-checkbox-blank-circle-outline me-1 text-danger"}),(0,x.jsx)("span",{className:"mb-0 mt-1",children:"Personal Group"})]}),(0,x.jsxs)(m.rU,{to:"#",className:"text-reset notification-item ps-3 d-block",children:[(0,x.jsx)("i",{className:"mdi mdi-checkbox-blank-circle-outline me-1"}),(0,x.jsx)("span",{className:"mb-0 mt-1",children:"Freelance"})]})]}),(0,x.jsxs)("h6",{className:"fw-medium px-3 mt-2 text-uppercase",children:["Favourites",(0,x.jsx)(m.rU,{to:"#",className:"font-18 text-danger",children:(0,x.jsx)("i",{className:"float-end mdi mdi-plus-circle"})})]}),(0,x.jsx)("div",{className:"p-2",children:(s.filter((e=>"favourites"===e.group))||[]).map(((e,s)=>(0,x.jsx)(m.rU,{to:"#",className:"text-reset notification-item",children:(0,x.jsxs)("div",{className:"d-flex align-items-start noti-user-item",children:[(0,x.jsxs)("div",{className:"position-relative me-2",children:[(0,x.jsx)("img",{src:e.avatar,className:"rounded-circle avatar-sm",alt:""}),(0,x.jsx)("i",{className:d()("mdi mdi-circle user-status",e.userStatus)})]}),(0,x.jsxs)("div",{className:"overflow-hidden",children:[(0,x.jsx)("h6",{className:"mt-0 mb-1 font-14",children:e.userName}),(0,x.jsx)("div",{className:"font-13 text-muted",children:(0,x.jsx)("p",{className:"mb-0 text-truncate",children:e.message})})]})]})},s)))}),(0,x.jsxs)("h6",{className:"fw-medium px-3 mt-2 text-uppercase",children:["Other Chats",(0,x.jsx)(m.rU,{to:"#",className:"font-18 text-danger",children:(0,x.jsx)("i",{className:"float-end mdi mdi-plus-circle"})})]}),(0,x.jsxs)("div",{className:"p-2 pb-4",children:[(s.filter((e=>"other"===e.group))||[]).map(((e,s)=>(0,x.jsx)(m.rU,{to:"#",className:"text-reset notification-item",children:(0,x.jsxs)("div",{className:"d-flex align-items-start noti-user-item",children:[(0,x.jsxs)("div",{className:"position-relative me-2",children:[(0,x.jsx)("img",{src:e.avatar,className:"rounded-circle avatar-sm",alt:""}),(0,x.jsx)("i",{className:d()("mdi mdi-circle user-status",e.userStatus)})]}),(0,x.jsxs)("div",{className:"overflow-hidden",children:[(0,x.jsx)("h6",{className:"mt-0 mb-1 font-14",children:e.userName}),(0,x.jsx)("div",{className:"font-13 text-muted",children:(0,x.jsx)("p",{className:"mb-0 text-truncate",children:e.message})})]})]})},s))),(0,x.jsx)("div",{className:"text-center mt-3",children:(0,x.jsxs)(m.rU,{to:"#",className:"btn btn-sm btn-white",children:[(0,x.jsx)("i",{className:"mdi mdi-spin mdi-loading me-2"}),"Load more"]})})]})]})};var g=a(71587);const j=e=>{let{tasks:s}=e;const a=s.filter((e=>"working"===e.stage)),t=s.filter((e=>"upcoming"===e.stage));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h6",{className:"fw-medium p-3 m-0 text-uppercase",children:"Working Tasks"}),(0,x.jsx)("div",{className:"px-2",children:(a||[]).map(((e,s)=>(0,x.jsxs)(m.rU,{to:"#",className:"text-reset item-hovered d-block p-2",children:[(0,x.jsxs)("p",{className:"text-muted mb-0",children:[e.task,(0,x.jsxs)("span",{className:"float-end",children:[e.progress,"%"]})]}),(0,x.jsx)(g.Z,{now:e.progress,variant:e.variant,className:"mt-2",style:{height:"4px"}})]},s)))}),(0,x.jsx)("h6",{className:"fw-medium px-3 mb-0 mt-4 text-uppercase",children:"Upcoming Tasks"}),(0,x.jsx)("div",{className:"p-2",children:(t||[]).map(((e,s)=>(0,x.jsxs)(m.rU,{to:"#",className:"text-reset item-hovered d-block p-2",children:[(0,x.jsxs)("p",{className:"text-muted mb-0",children:[e.task,(0,x.jsxs)("span",{className:"float-end",children:[e.progress,"%"]})]}),(0,x.jsx)(g.Z,{now:e.progress,variant:e.variant,className:"mt-2",style:{height:"4px"}})]},s)))}),(0,x.jsx)("div",{className:"p-3 mt-2 d-grid",children:(0,x.jsx)(m.rU,{to:"#",className:"btn btn-success waves-effect waves-light",children:"Create Task"})})]})},A=()=>(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)("h6",{className:"fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light",children:(0,x.jsx)("span",{className:"d-block py-1",children:"Theme Settings"})}),(0,x.jsxs)("div",{className:"p-3",children:[(0,x.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[(0,x.jsx)("strong",{children:"Customize "})," the overall color scheme, sidebar menu, etc."]}),(0,x.jsx)("div",{className:"d-grid mt-4",children:(0,x.jsx)("button",{className:"btn btn-primary",id:"resetBtn",children:"Reset to Default"})})]})]});var h=a(1377),p=a(1642),v=a(35826),f=a(83563),N=a(84915),b=a(312),B=a(72508),y=a(76299),k=a(43518);const w=[{id:1,task:"App Development",progress:75,variant:"success",stage:"working"},{id:2,task:"Database Repair",progress:37,variant:"info",stage:"working"},{id:3,task:"Backup Create",progress:52,variant:"warning",stage:"working"},{id:4,task:"Sales Reporting",progress:12,variant:"danger",stage:"upcoming"},{id:5,task:"Redesign Website",progress:67,variant:"primary",stage:"upcoming"},{id:6,task:"New Admin Design",progress:84,variant:"success",stage:"upcoming"}],I=[{id:1,avatar:h,userName:"Andrew Mackie",message:"It will seem like simplified English.",userStatus:"online",group:"favourites"},{id:2,avatar:p,userName:"Rory Dalyell",message:"To an English person, it will seem like simplified",userStatus:"away",group:"favourites"},{id:3,avatar:v,userName:"Jaxon Dunhill",message:"To achieve this, it would be necessary.",userStatus:"busy",group:"favourites"},{id:4,avatar:f,userName:"Jackson Therry",message:"Everyone realizes why a new common language.",userStatus:"online",group:"other"},{id:5,avatar:N,userName:"Charles Deakin",message:"The languages only differ in their grammar.",userStatus:"away",group:"other"},{id:6,avatar:b,userName:"Ryan Salting",message:"If several languages coalesce the grammar of the resulting.",userStatus:"online",group:"other"},{id:7,avatar:B,userName:"Sean Howse",message:"It will seem like simplified English.",userStatus:"online",group:"other"},{id:8,avatar:y,userName:"Dean Coward",message:"The new common language will be more simple.",userStatus:"busy",group:"other"},{id:9,avatar:k,userName:"Hayley East",message:"One could refuse to pay expensive translators.",userStatus:"away",group:"other"}],H=e=>{const s=(0,l.I0)(),a=(0,t.useRef)(null),[m,o]=(0,t.useState)(a),{isOpenRightSideBar:d}=(0,l.v9)((e=>({isOpenRightSideBar:e.Layout.isOpenRightSideBar}))),g=(0,t.useCallback)((e=>{d&&a&&a.current&&a.current.contains(e.target)}),[a,s,d]);return(0,t.useEffect)((()=>(document.addEventListener("mousedown",g,!1),()=>{document.removeEventListener("mousedown",g,!1)})),[g]),(0,x.jsx)(t.Fragment,{children:(0,x.jsx)(r.Z,{className:"right-bar",show:m,onHide:g,placement:"end",children:(0,x.jsx)("div",{className:"h-100",ref:a,children:(0,x.jsx)(c.Z,{style:{maxHeight:"100%",zIndex:1e4},scrollbarMaxSize:320,children:(0,x.jsxs)(i.Z.Container,{id:"left-tabs-example",defaultActiveKey:"themecustomizer",children:[(0,x.jsxs)(n.Z,{variant:"tabs",className:"nav-bordered nav-justified",children:[(0,x.jsx)(n.Z.Item,{as:"li",children:(0,x.jsx)(n.Z.Link,{eventKey:"chats",className:"py-2 cursor-pointer",children:(0,x.jsx)("i",{className:"mdi mdi-message-text d-block font-22 my-1"})})}),(0,x.jsx)(n.Z.Item,{as:"li",children:(0,x.jsx)(n.Z.Link,{eventKey:"tasks",className:"py-2 cursor-pointer",children:(0,x.jsx)("i",{className:"mdi mdi-format-list-checkbox d-block font-22 my-1"})})}),(0,x.jsx)(n.Z.Item,{as:"li",children:(0,x.jsx)(n.Z.Link,{eventKey:"themecustomizer",className:"py-2 cursor-pointer",children:(0,x.jsx)("i",{className:"mdi mdi-cog-outline d-block font-22 my-1"})})})]}),(0,x.jsxs)(i.Z.Content,{className:"p-0",children:[(0,x.jsx)(i.Z.Pane,{eventKey:"chats",children:(0,x.jsx)(u,{chats:I})}),(0,x.jsx)(i.Z.Pane,{eventKey:"tasks",children:(0,x.jsx)(j,{tasks:w})}),(0,x.jsx)(i.Z.Pane,{eventKey:"themecustomizer",children:(0,x.jsx)(A,{})})]})]})})})})})}},76299:e=>{e.exports="data:image/jpeg;base64,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"}}]);