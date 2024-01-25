"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3221],{83221:(r,e,a)=>{a.r(e),a.d(e,{default:()=>f});var t=a(47313),o=a(63849),l=a(31616),s=a(51450),d=a(73778),i=a(65832),n=a(46417);const c=()=>{d.ce.color="#8391a2",d.ce.scale.grid.color="#8391a2";return(0,n.jsx)(i.Z,{children:(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("h4",{className:"header-title mb-3",children:"Line Chart"}),(0,n.jsx)("div",{style:{height:"320px"},className:"mt-3 chartjs-chart",children:(0,n.jsx)(d.x1,{data:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:"#1fa083",borderColor:"#1fa083",data:[32,42,42,62,52,75,62],tension:.4,fill:{target:"origin",above:"rgba(31, 160, 131, 0.3)"}},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:"#f1556c",borderDash:[5,5],data:[42,58,66,93,82,105,92],tension:.4}]},options:{bezierCurve:!1,maintainAspectRatio:!1,tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1},legend:{display:!1}},scales:{x:{grid:{color:"rgba(0,0,0,0.05)"}},y:{ticks:{stepSize:20},display:!0,borderDash:[5,5],grid:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}}}})})]})})},h=()=>{d.ce.color="#8391a2",d.ce.scale.grid.color="#8391a2";return(0,n.jsx)(i.Z,{children:(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("h4",{className:"header-title mb-3",children:"Bar Chart"}),(0,n.jsx)("div",{style:{height:"320px"},className:"chartjs-chart",children:(0,n.jsx)(d.$Q,{data:r=>{var e=r.getContext("2d").createLinearGradient(0,500,0,150);return e.addColorStop(0,"#fa5c7c"),e.addColorStop(1,"#727cf5"),{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:e,borderColor:e,hoverBackgroundColor:e,hoverBorderColor:e,data:[65,59,80,81,56,89,40,32,65,59,80,81],barPercentage:.7,categoryPercentage:.5},{label:"Dollar Rate",backgroundColor:"#e3eaef",borderColor:"#e3eaef",hoverBackgroundColor:"#e3eaef",hoverBorderColor:"#e3eaef",data:[89,40,32,65,59,80,81,56,89,40,65,59],barPercentage:.7,categoryPercentage:.5}]}},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#727cf5",titleFontColor:"#fff",bodyFontColor:"#fff",bodyFontSize:14,displayColors:!1}},scales:{y:{grid:{display:!1,color:"rgba(0,0,0,0.05)"},stacked:!1,ticks:{stepSize:20}},x:{stacked:!1,grid:{color:"rgba(0,0,0,0.05)"}}}}})})]})})},x=()=>(0,n.jsx)(i.Z,{children:(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("h4",{className:"header-title mb-3",children:"Donut Chart"}),(0,n.jsx)("div",{className:"mb-5 mt-4 chartjs-chart",style:{height:"320px",maxWidth:"320px"},children:(0,n.jsx)(d.$I,{data:{labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[300,135,48,154],backgroundColor:["#727cf5","#fa5c7c","#0acf97","#ebeff2"],borderColor:"transparent"}]},options:{maintainAspectRatio:!1,cutoutPercentage:60,legend:{display:!0}}})})]})}),b=()=>(0,n.jsx)(i.Z,{children:(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("h4",{className:"header-title mb-3",children:"Radar Chart"}),(0,n.jsx)("div",{className:"mb-5 mt-4 chartjs-chart",style:{height:"320px",maxWidth:"320px"},children:(0,n.jsx)(d.Fk,{data:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Desktops",backgroundColor:"rgba(57,175,209,0.2)",borderColor:"#39afd1",pointBackgroundColor:"#39afd1",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#39afd1",data:[65,59,90,81,56,55,40]},{label:"Tablets",backgroundColor:"rgba(161, 127, 224,0.2)",borderColor:"#a17fe0",pointBackgroundColor:"#a17fe0",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#a17fe0",data:[28,48,40,19,96,27,100]}]},options:{maintainAspectRatio:!1}})})]})}),p=()=>(0,n.jsx)(i.Z,{children:(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("h4",{className:"header-title mb-3",children:"Polar Chart"}),(0,n.jsx)("div",{className:"mb-5 mt-4 chartjs-chart",style:{height:"320px",maxWidth:"100%"},children:(0,n.jsx)(d.xz,{data:{datasets:[{data:[11,16,7,3,14],backgroundColor:["#727cf5","#fa5c7c","#0acf97","#ebeff2","#39afd1"],label:"My dataset"}],labels:["Purple","Red","Green","Grey","Cyan"]},options:{maintainAspectRatio:!1,legend:{display:!0}}})})]})}),g=()=>{const r=(r,e)=>{var a=e.dataset.data[e.dataIndex],t=a.x/100,o=a.y/100;return"rgba("+(t<0&&o<0?250:t<0?150:o<0?50:0)+","+(t<0&&o<0?0:t<0?50:o<0?150:250)+","+(t<0&&o<0?0:t>0&&o>0?250:150)+","+(r?1:.5*a.v/1e3)+")"},e={maintainAspectRatio:!1,aspectRatio:1,plugins:{tooltip:{enabled:!1}},options:{responsive:!0,plugins:{legend:{position:"top"}}},elements:{point:{backgroundColor:r.bind(null,!1),borderColor:r.bind(null,!0),borderWidth:r=>Math.min(Math.max(1,r.datasetIndex+1),8),radius:function(r){var e=r.dataset.data[r.dataIndex];return r.chart.width/24*(Math.abs(e.v)/1e3)}}}};return(0,n.jsx)(i.Z,{children:(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("h4",{className:"header-title mb-3",children:"Bubble Chart"}),(0,n.jsx)("div",{className:"mb-5 mt-4 chartjs-chart",style:{height:"320px",maxWidth:"100%"},children:(0,n.jsx)(d.xj,{data:{labels:["January"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(114, 124, 245, 0.4)",borderColor:"rgba(114, 124, 245, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(114, 124, 245, 1)",pointBackgroundColor:"rgba(114, 124, 245, 0.4)",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(114, 124, 245, 1)",pointHoverBorderColor:"rgba(114, 124, 245, 1)",pointHoverBorderWidth:2,pointRadius:5,pointHitRadius:10,data:[{x:-43.219521604938265,y:68.05984224965707,r:5},{x:-85.34593621399178,y:.27756344307269387,r:26},{x:52.50450102880657,y:-102.80564128943759,r:30},{x:-25.501543209876544,y:-137.02310528120714,r:21},{x:34.80259773662553,y:1.7918381344307193,r:20},{x:87.58359053497944,y:-82.19414437585733,r:16},{x:-12.991898148148152,y:-34.81438614540467,r:3},{x:87.24279835390945,y:-1.9022205075445697,r:11},{x:-7.545653292181072,y:-129.29098079561044,r:5},{x:56.80941358024691,y:-62.81400034293553,r:18},{x:-115.52533436213992,y:51.69538751714677,r:30},{x:-120.52533536213993,y:80.69538751724677,r:10},{x:79.6167695473251,y:68.40384945130313,r:19},{x:-3.597608024691368,y:91.47805212620028,r:16},{x:-11.001800411522623,y:-24.91533779149519,r:11},{x:-88.42914094650206,y:73.39034636488338,r:11},{x:-131.71296296296296,y:-9.438228737997235,r:22}]}]},options:e})})]})})},f=()=>(0,n.jsxs)(t.Fragment,{children:[(0,n.jsx)(s.Z,{breadCrumbItems:[{label:"Charts",path:"/features/charts/chartjs"},{label:"Chartjs Charts",path:"/features/charts/chartjs",active:!0}],title:"Chartjs Charts"}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{xl:6,children:(0,n.jsx)(c,{})}),(0,n.jsx)(l.Z,{xl:6,children:(0,n.jsx)(h,{})})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{xl:6,children:(0,n.jsx)(x,{})}),(0,n.jsx)(l.Z,{xl:6,children:(0,n.jsx)(b,{})})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{xl:6,children:(0,n.jsx)(p,{})}),(0,n.jsx)(l.Z,{xl:6,children:(0,n.jsx)(g,{})})]})]})}}]);