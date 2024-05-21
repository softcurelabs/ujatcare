"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[179],{49172:(e,t,n)=>{n.d(t,{A:()=>c});n(9950);var s=n(90706),r=n(28339),a=n(36404),i=n(79947),l=n(41615),o=n(44414);const c=e=>{let{onDateClick:t,onEventClick:n,onDrop:c,onEventDrop:d,events:u}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{id:"calendar",children:(0,o.jsx)(s.Ay$,{initialView:"dayGridMonth",plugins:[r.Ay,a.Ay,i.A,l.A],handleWindowResize:!0,themeSystem:"bootstrap",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Prev",next:"Next"},headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,selectable:!0,droppable:!0,events:u,dateClick:e=>{t(e)},eventClick:e=>{n(e)},drop:e=>{c(e)},eventDrop:e=>{d(e)}})})})}},49671:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(9950),r=n(86781),a=n(68459),i=n(471),l=n(48738),o=n.n(l),c=n(22510),d=n(44414);const u=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.A,{children:(0,d.jsx)(i.A.Body,{children:(0,d.jsxs)(r.A,{children:[(0,d.jsx)(a.A,{className:"col-6",children:(0,d.jsx)("div",{className:o()("avatar-sm","rounded","bg-"+e.variant),children:(0,d.jsx)("i",{className:o()(e.icon,"avatar-title font-22 text-white")})})}),(0,d.jsx)(a.A,{className:"col-6",children:(0,d.jsxs)("div",{className:"text-end",children:[(0,d.jsx)("h3",{className:"text-dark my-1",children:(0,d.jsx)("span",{children:(0,d.jsx)(c.Ay,{duration:1,end:e.stats,...e.counterOptions})})}),(0,d.jsx)("p",{className:"text-muted mb-1 text-truncate",children:e.description})]})})]})})})});var x=n(13059),h=n(27081);const p=()=>{const[e,t]=(0,s.useState)(null),n=(0,h.wA)();return(0,s.useEffect)((()=>{n((0,x.w5)("test")).unwrap().then((e=>{t(e)}))}),[]),(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsxs)(r.A,{children:[(0,d.jsx)(a.A,{md:6,xl:3,children:(0,d.jsx)(u,{variant:"blue",description:"Pending",stats:e.pending.toString(),icon:"fe-aperture",counterOptions:{prefix:""}})}),(0,d.jsx)(a.A,{md:6,xl:3,children:(0,d.jsx)(u,{variant:"warning",description:"In Progress",stats:e.in_progress.toString(),icon:"fe-compass"})}),(0,d.jsx)(a.A,{md:6,xl:3,children:(0,d.jsx)(u,{variant:"success",description:"Resolved",stats:e.close.toString(),icon:"fe-camera-off"})}),(0,d.jsx)(a.A,{md:6,xl:3,children:(0,d.jsx)(u,{variant:"success",description:"Total",stats:e.total.toString(),icon:"fe-bar-chart-2"})})]})})};var m=n(92180),g=n(50323),j=(n(90706),n(49172)),v=n(75733),f=n(49462);const A=()=>{const e=(0,v.j)(),[t,n]=(0,s.useState)(!1),r=()=>n(!0),[a,i]=(0,s.useState)(!1),[l,o]=(0,s.useState)([]),[c,u]=(0,s.useState)({}),[x,h]=(0,s.useState)({});(0,s.useEffect)((()=>{e((0,f.v6)()).unwrap().then((e=>{o(e)}))}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(j.A,{onDateClick:e=>{h(e),r(),i(!1)},onEventClick:e=>{const t={id:String(e.event.id),title:e.event.title,className:e.event.classNames[0]};u(t),i(!0),r()},onDrop:e=>{const t=e,n=t.draggedEl.title;if(null==n);else{let e={id:String(l.length+1),title:n,start:t?t.dateStr:new Date,className:t.draggedEl.attributes["data-class"].value};const s=[...l];s.push(e),o(s)}},onEventDrop:e=>{const t=[...l],n=t.findIndex((t=>t.id===e.event.id));t[n].title=e.event.title,t[n].className=e.event.classNames,t[n].start=e.event.start,t[n].end=e.event.end,o(t),i(!1)},events:l})})},y=()=>{const[e,t]=(0,s.useState)(new Date);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{children:(0,d.jsx)(a.A,{children:(0,d.jsxs)("div",{className:"page-title-box",children:[(0,d.jsx)("div",{className:"page-title-right"}),(0,d.jsx)("h4",{className:"page-title",children:"Dashboard"})]})})}),(0,d.jsx)(p,{}),(0,d.jsxs)(r.A,{children:[(0,d.jsx)(a.A,{xl:6,children:(0,d.jsx)(i.A,{className:"widget-rounded-circle",children:(0,d.jsx)(i.A.Body,{children:(0,d.jsx)(m.A,{menuItems:(0,g.UC)()})})})}),(0,d.jsx)(a.A,{xl:6,children:(0,d.jsx)(A,{})})]})]})}},72249:(e,t,n)=>{n.d(t,{A:()=>g});var s=n(48738),r=n.n(s),a=n(57420),i=n(9950),l=n(29310),o=n(20529);const c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];e.apply(this,s),t.apply(this,s)}}),null)};var d=n(27832),u=n(96091),x=n(44414);const h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function p(e,t){const n=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],s=h[e];return n+parseInt((0,a.A)(t,s[0]),10)+parseInt((0,a.A)(t,s[1]),10)}const m={[l.kp]:"collapse",[l.ze]:"collapsing",[l.ns]:"collapsing",[l._K]:"collapse show"},g=i.forwardRef(((e,t)=>{let{onEnter:n,onEntering:s,onEntered:a,onExit:l,onExiting:h,className:g,children:j,dimension:v="height",in:f=!1,timeout:A=300,mountOnEnter:y=!1,unmountOnExit:E=!1,appear:w=!1,getDimensionValue:N=p,...b}=e;const k="function"===typeof v?v():v,S=(0,i.useMemo)((()=>c((e=>{e.style[k]="0"}),n)),[k,n]),D=(0,i.useMemo)((()=>c((e=>{const t="scroll".concat(k[0].toUpperCase()).concat(k.slice(1));e.style[k]="".concat(e[t],"px")}),s)),[k,s]),C=(0,i.useMemo)((()=>c((e=>{e.style[k]=null}),a)),[k,a]),M=(0,i.useMemo)((()=>c((e=>{e.style[k]="".concat(N(k,e),"px"),(0,d.A)(e)}),l)),[l,N,k]),I=(0,i.useMemo)((()=>c((e=>{e.style[k]=null}),h)),[k,h]);return(0,x.jsx)(u.A,{ref:t,addEndListener:o.A,...b,"aria-expanded":b.role?f:null,onEnter:S,onEntering:D,onEntered:C,onExit:M,onExiting:I,childRef:j.ref,in:f,timeout:A,mountOnEnter:y,unmountOnExit:E,appear:w,children:(e,t)=>i.cloneElement(j,{...t,className:r()(g,j.props.className,m[e],"width"===k&&"collapse-horizontal")})})}))}}]);