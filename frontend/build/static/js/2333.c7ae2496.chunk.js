"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[2333],{23159:(e,s,t)=>{t.d(s,{Z:()=>l});t(47313);var a=t(72884),r=t.n(a),n=t(46417);const l=e=>{let{title:s,icon:t,stats:a,variant:l}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"text-muted font-15 mb-1 text-truncate",children:s}),(0,n.jsxs)("h4",{children:[(0,n.jsx)("i",{className:r()(t,"text-"+l,"me-1")}),a]})]})}},72333:(e,s,t)=>{t.r(s),t.d(s,{default:()=>W});var a=t(47313),r=t(63849),n=t(31616),l=t(51450),c=t(45393),i=t(75627),d=t(65832),o=t(42610),h=t(93298),x=t(22010),m=t(3463),j=t(62563),u=t(72884),g=t.n(u),b=t(52487),p=t(46417);const N=e=>{let{addTodo:s,height:t}=e;const l=s||!1,[c,u]=(0,a.useState)([{id:1,text:"Design One page theme",done:!1},{id:2,text:"Build a js based app",done:!0},{id:3,text:"Creating component page",done:!0},{id:4,text:"Testing??",done:!0},{id:5,text:"Hehe!! This looks cool!",done:!1},{id:6,text:"Create new version 3.0",done:!1},{id:7,text:"Build an angular app",done:!0},{id:8,text:"Vue Admin & Dashboard",done:!1}]),N=(0,j.X)(m.Ry().shape({newTodo:m.Z_().required("Please enter your task name")})),f=(0,i.cI)({resolver:N}),{handleSubmit:v,register:Z,control:y,formState:{errors:k},reset:w}=f,S=(e,s)=>{const t=(c||[]).map(((t,a)=>s===a?Object.assign(t,{done:!e.done}):t));u(t)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsxs)(o.Z,{className:"float-end",align:"end",children:[(0,p.jsx)(o.Z.Toggle,{as:"a",className:"card-drop cursor-pointer",children:(0,p.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,p.jsxs)(o.Z.Menu,{children:[(0,p.jsx)(o.Z.Item,{children:"Settings"}),(0,p.jsx)(o.Z.Item,{children:"Action"})]})]}),(0,p.jsx)("h4",{className:g()("header-title",l?"mb-3":"mb-2"),children:"Todo"}),(0,p.jsx)("div",{className:"todoapp",children:l?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(n.Z,{children:(0,p.jsxs)("h5",{id:"todo-message",children:[(0,p.jsx)("span",{id:"todo-remaining",children:c.filter((e=>!1===e.done)).length})," ","of ",(0,p.jsx)("span",{id:"todo-total",children:c.length})," ","remaining"]})}),(0,p.jsx)(n.Z,{className:"col-auto",children:(0,p.jsx)(h.Z,{className:"float-end btn-sm",variant:"light",id:"btn-archive",onClick:()=>{u(c.filter((e=>!0!==e.done)))},children:"Archive"})})]}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{children:(0,p.jsx)(x.Z,{style:{maxHeight:t},children:(0,p.jsx)("ul",{className:"list-group list-group-flush todo-list",id:"todo-list",children:(c||[]).map(((e,s)=>(0,p.jsx)("li",{className:"list-group-item border-0 ps-0",children:e.done?(0,p.jsxs)("div",{className:"form-check mb-0",children:[(0,p.jsx)("input",{type:"checkbox",className:"form-check-input todo-done",id:String(e.id),checked:e.done,onChange:()=>S(e,s)}),(0,p.jsx)("label",{className:"form-check-label",htmlFor:String(e.id),children:(0,p.jsx)("s",{children:e.text})})]}):(0,p.jsxs)("div",{className:"form-check mb-0",children:[(0,p.jsx)("input",{type:"checkbox",className:"form-check-input todo-done",id:String(e.id),checked:e.done,onChange:()=>S(e,s)}),(0,p.jsx)("label",{className:"form-check-label",htmlFor:String(e.id),children:e.text})]})},s)))})})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{children:(0,p.jsx)("form",{name:"todo-form",id:"todo-form",onSubmit:v(((e,s)=>{const t={id:c.length+1,text:s.target[0].value,done:!1};u([t,...c]),w()})),className:"mt-3",children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(n.Z,{children:(0,p.jsx)(b.y,{type:"text",name:"newTodo",className:"form-control",placeholder:"Add new todo",register:Z,errors:k,control:y},"newTodo")}),(0,p.jsx)(n.Z,{className:"col-auto",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-primary waves-effect waves-light",children:"Add"})})]})})})})]}):(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{children:(0,p.jsx)(x.Z,{style:{maxHeight:t},children:(0,p.jsx)("ul",{className:"list-group list-group-flush todo-list",id:"todo-list",children:(c||[]).map(((e,s)=>(0,p.jsx)("li",{className:"list-group-item border-0 ps-0",children:e.done?(0,p.jsxs)("div",{className:"form-check mb-0",children:[(0,p.jsx)("input",{type:"checkbox",className:"form-check-input todo-done",id:String(e.id),checked:e.done,onChange:()=>S(e,s)}),(0,p.jsx)("label",{className:"form-check-label",htmlFor:String(e.id),children:(0,p.jsx)("s",{children:e.text})})]}):(0,p.jsxs)("div",{className:"form-check mb-0",children:[(0,p.jsx)("input",{type:"checkbox",className:"form-check-input todo-done",id:String(e.id),checked:e.done,onChange:()=>S(e,s)}),(0,p.jsx)("label",{className:"form-check-label",htmlFor:String(e.id),children:e.text})]})},s)))})})})})})]})})})};var f=t(75192),v=t.n(f),Z=t(1642);const y=e=>{let{userAvatar:s,postedOn:t}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"chat-avatar",children:[(0,p.jsx)("img",{src:s,alt:s}),(0,p.jsx)("i",{children:t})]})})},k=e=>{let{userName:s,text:t}=e;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"conversation-text",children:(0,p.jsxs)("div",{className:"ctext-wrap",children:[(0,p.jsx)("i",{children:s}),(0,p.jsx)("p",{children:t})]})})})},w={placement:"",children:v().object,className:""},S=e=>{let{children:s,placement:t,className:a}=e;return(0,p.jsx)("li",{className:g()("clearfix",{odd:"left"===t},a),children:s})};S.defaultProps=w;const C=e=>{let{onNewMessagesPosted:s}=e;const t=(0,j.X)(m.Ry().shape({newMessage:m.Z_().required("Please enter your messsage")})),a=(0,i.cI)({resolver:t}),{handleSubmit:l,register:c,control:d,formState:{errors:o},reset:h}=a;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("form",{name:"chat-form",id:"chat-form",onSubmit:l((e=>{const t=e.newMessage;s(t),h()})),children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(n.Z,{children:(0,p.jsx)(b.y,{type:"text",name:"newMessage",className:"form-control chat-input",placeholder:"Enter your text",register:c,errors:o,control:d},"newMessage")}),(0,p.jsx)(n.Z,{className:"col-auto",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-danger chat-send waves-effect waves-light",children:"Send"})})]})})})},T=e=>{const[s,t]=(0,a.useState)(e.messages);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsxs)(o.Z,{className:"float-end",align:"end",children:[(0,p.jsx)(o.Z.Toggle,{as:"a",className:"cursor-pointer card-drop p-0 shadow-none",children:(0,p.jsx)("i",{className:"mdi mdi-dots-vertical"})}),(0,p.jsxs)(o.Z.Menu,{children:[(0,p.jsx)(o.Z.Item,{children:"Refresh"}),(0,p.jsx)(o.Z.Item,{children:"Settings"})]})]}),(0,p.jsx)("h4",{className:"header-title mb-3",children:"Chat"}),(0,p.jsxs)("div",{className:"chat-conversation",children:[(0,p.jsx)(x.Z,{style:{maxHeight:"370px",width:"100%"},children:(0,p.jsx)("ul",{className:g()("conversation-list",e.className),children:(s||[]).map(((e,s)=>(0,p.jsxs)(S,{placement:"Dominic"===e.userName?"left":"right",children:[e.userPic&&(0,p.jsx)(y,{userAvatar:e.userPic,postedOn:e.postedOn}),(0,p.jsx)(k,{userName:e.userName,text:e.text})]},s)))})}),(0,p.jsx)(C,{onNewMessagesPosted:e=>{t(s.concat({id:s.length+1,userPic:Z,userName:"Dominic",text:e,postedOn:(new Date).getHours()+":"+(new Date).getMinutes()}))}})]})]})})})};var M=t(812),P=t(95668),F=t(87977);const O=e=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)(M.Z,{placement:"bottom",overlay:(0,p.jsx)(P.Z,{id:e.title,children:"More Info"}),children:(0,p.jsx)("i",{className:"fa fa-info-circle text-muted float-end"})}),(0,p.jsx)("h4",{className:"mt-0 font-16",children:e.title}),(0,p.jsx)("h2",{className:"text-primary my-3 text-center",children:(0,p.jsx)("span",{children:(0,p.jsx)(F.ZP,{duration:1,end:e.stats,...e.counterOptions})})}),(0,p.jsxs)("p",{className:"text-muted mb-0",children:[e.trend.label,": ",e.trend.value," ",(0,p.jsxs)("span",{className:"float-end",children:[(0,p.jsx)("i",{className:g()("me-1","fa",e.trend.icon,"text-"+e.trend.variant)}),e.trend.trendStats]})]})]})})}),D=()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(n.Z,{md:6,xl:3,children:(0,p.jsx)(O,{title:"Income status",stats:"31570",trend:{label:"Total income",value:"$22506",icon:"fa-caret-up",variant:"success",trendStats:"10.25%"},counterOptions:{prefix:"$"}})}),(0,p.jsx)(n.Z,{md:6,xl:3,children:(0,p.jsx)(O,{title:"Sales Status",stats:"683",trend:{label:"Total sales",value:"2398",icon:"fa-caret-down",variant:"danger",trendStats:"7.85%"}})}),(0,p.jsx)(n.Z,{md:6,xl:3,children:(0,p.jsx)(O,{title:"Recent Users",stats:"3.2",trend:{label:"Total users",value:"121 M",icon:"fa-caret-up",variant:"success",trendStats:"3.64%"},counterOptions:{suffix:"M",decimals:1}})}),(0,p.jsx)(n.Z,{md:6,xl:3,children:(0,p.jsx)(O,{title:"Total Revenue",stats:"68541",trend:{label:"Total revenue",value:"$1.2 M",icon:"fa-caret-up",variant:"success",trendStats:"17.48%"},counterOptions:{prefix:"$"}})})]})});var A=t(73778),B=t(23159);const $=()=>{A.ce.color="#8391a2",A.ce.scale.grid.color="#8391a2";return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("div",{className:"float-end d-none d-md-inline-block",children:(0,p.jsxs)("div",{className:"btn-group mb-2",children:[(0,p.jsx)("button",{type:"button",className:"btn btn-xs btn-secondary",children:"Today"}),(0,p.jsx)("button",{type:"button",className:"btn btn-xs btn-light",children:"Weekly"}),(0,p.jsx)("button",{type:"button",className:"btn btn-xs btn-light",children:"Monthly"})]})}),(0,p.jsx)("h4",{className:"header-title",children:"Projections Vs Actuals "}),(0,p.jsxs)(r.Z,{className:"mt-4 text-center",children:[(0,p.jsx)(n.Z,{className:"col-4",children:(0,p.jsx)(B.Z,{title:"Target",icon:"fe-arrow-down",stats:"$3.8k",variant:"danger"})}),(0,p.jsx)(n.Z,{className:"col-4",children:(0,p.jsx)(B.Z,{title:"Last week",icon:"fe-arrow-up",stats:"$1.1k",variant:"success"})}),(0,p.jsx)(n.Z,{className:"col-4",children:(0,p.jsx)(B.Z,{title:"Last Month",icon:"fe-arrow-down",stats:"$25k",variant:"danger"})})]}),(0,p.jsx)("div",{style:{height:"300px"},className:"chartjs-chart",children:(0,p.jsx)(A.$Q,{data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:"#4a81d4",borderColor:"#4a81d4",hoverBackgroundColor:"#4a81d4",hoverBorderColor:"#4a81d4",data:[65,59,80,81,56,89,40,32,65,59,80,81],barPercentage:.7,categoryPercentage:.5},{label:"Dollar Rate",backgroundColor:"#e3eaef",borderColor:"#e3eaef",hoverBackgroundColor:"#e3eaef",hoverBorderColor:"#e3eaef",data:[89,40,32,65,59,80,81,56,89,40,65,59],barPercentage:.7,categoryPercentage:.5}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{stepSize:20},grid:{display:!1,color:"rgba(0,0,0,0.05)"},stacked:!1},x:{stacked:!1,grid:{color:"rgba(0,0,0,0.05)"}}}}})})]})})})},I=()=>{A.ce.color="#8391a2",A.ce.scale.grid.color="#8391a2";return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("div",{className:"float-end d-none d-md-inline-block",children:(0,p.jsxs)("div",{className:"btn-group mb-2",children:[(0,p.jsx)("button",{type:"button",className:"btn btn-xs btn-secondary",children:"Today"}),(0,p.jsx)("button",{type:"button",className:"btn btn-xs btn-light",children:"Weekly"}),(0,p.jsx)("button",{type:"button",className:"btn btn-xs btn-light",children:"Monthly"})]})}),(0,p.jsx)("h4",{className:"header-title",children:"Revenue"}),(0,p.jsxs)(r.Z,{className:"mt-4 text-center",children:[(0,p.jsx)(n.Z,{className:"col-4",children:(0,p.jsx)(B.Z,{title:"Target",icon:"fe-arrow-down",stats:"$7.8k",variant:"danger"})}),(0,p.jsx)(n.Z,{className:"col-4",children:(0,p.jsx)(B.Z,{title:"Last week",icon:"fe-arrow-up",stats:"$1.4k",variant:"success"})}),(0,p.jsx)(n.Z,{className:"col-4",children:(0,p.jsx)(B.Z,{title:"Last Month",icon:"fe-arrow-down",stats:"$15k",variant:"danger"})})]}),(0,p.jsx)("div",{style:{height:"300px"},className:"mt-3 chartjs-chart",children:(0,p.jsx)(A.x1,{data:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:"#1fa083",borderColor:"#1fa083",data:[32,42,42,62,52,75,62],tension:.4,fill:{target:"origin",above:"rgba(31, 160, 131, 0.3)"}},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:"#f1556c",borderDash:[5,5],data:[42,58,66,93,82,105,92],tension:.4}]},options:{bezierCurve:!1,maintainAspectRatio:!1,tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1},legend:{display:!1}},scales:{x:{grid:{color:"rgba(0,0,0,0.05)"}},y:{ticks:{stepSize:20},display:!0,borderDash:[5,5],grid:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}}}})})]})})})};var R=t(312);const H=[{id:1,userPic:R,userName:"Geneva",text:"Hello!",postedOn:"10:00"},{id:2,userPic:Z,userName:"Dominic",text:"Hi, How are you? What about our next meeting?",postedOn:"10:01"},{id:3,userPic:R,userName:"Geneva",text:"Yeah everything is fine",postedOn:"10:02"},{id:4,userPic:Z,userName:"Dominic",text:"Wow that's great!",postedOn:"10:03"},{id:5,userPic:R,userName:"Geneva",text:"Cool!",postedOn:"10:03"}],W=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{breadCrumbItems:[{label:"Dashboards",path:"/dashboard-3"},{label:"Dashboard 3",path:"/dashboard-3",active:!0}],title:"Dashboard 3"}),(0,p.jsx)(D,{}),(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(n.Z,{xl:6,children:(0,p.jsx)(I,{})}),(0,p.jsx)(n.Z,{xl:6,children:(0,p.jsx)($,{})})]}),(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(n.Z,{lg:6,xl:4,children:(0,p.jsx)(c.Z,{})}),(0,p.jsx)(n.Z,{lg:6,xl:4,children:(0,p.jsx)(N,{addTodo:!0,height:"310px"})}),(0,p.jsx)(n.Z,{lg:12,xl:4,children:(0,p.jsx)(T,{messages:H})})]})]})}}]);