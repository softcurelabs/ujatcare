"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8635],{88635:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var A=a(47313),c=a(58467),l=a(1084),n=a(2135),r=a(42610),o=a(72884),t=a.n(o),i=a(46417);const m=e=>{const s=e.profilePic||null,[a,c]=(0,A.useState)(!1),l=()=>{c(!a)};return(0,i.jsxs)(r.Z,{show:a,onToggle:l,children:[(0,i.jsxs)(r.Z.Toggle,{id:"dropdown-profile",as:"a",onClick:l,className:t()("nav-link nav-user me-0 waves-effect waves-light",{show:a}),children:[(0,i.jsx)("img",{src:s,className:"rounded-circle",alt:""}),(0,i.jsxs)("span",{className:"pro-user-name ms-1",children:[e.username," ",(0,i.jsx)("i",{className:"mdi mdi-chevron-down"})]})]}),(0,i.jsx)(r.Z.Menu,{className:"dropdown-menu dropdown-menu-end profile-dropdown",children:(0,i.jsxs)("div",{onClick:l,children:[(0,i.jsx)("div",{className:"dropdown-header noti-title",children:(0,i.jsx)("h6",{className:"text-overflow m-0",children:"Welcome !"})}),(e.menuItems||[]).map(((s,a)=>(0,i.jsxs)(A.Fragment,{children:[a===e.menuItems.length-1&&(0,i.jsx)("div",{className:"dropdown-divider"}),(0,i.jsxs)(n.rU,{to:s.redirectTo,className:"dropdown-item notify-item",children:[(0,i.jsx)("i",{className:"".concat(s.icon," me-1")}),(0,i.jsx)("span",{children:s.label})]},a+"-profile-menu")]},a)))]})})]})};var d=a(1642),x=a(93298);const u=[{label:"My Account",icon:"fe-user",redirectTo:"/staff-account"},{label:"Logout",icon:"fe-log-out",redirectTo:"/auth/logout"}],h=e=>{let{hideLogo:s,navCssClasses:a}=e;const n=(0,c.s0)(),r=(0,c.TH)();let o=a||"";const t=s?"":"container-fluid";let h,{user:k,customer:f}=(0,l.v9)((e=>({user:e.Auth.user,customer:e.CustomerAuth.user})));f&&(k=f),k&&k.user_role.includes("recident")&&(o="topnav-light");let N=k.username,p="/dashboard-1";k&&k.user_role.includes("recident")?h=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h4",{className:"text-white",children:[" Apt#: ",k.flat]}),(0,i.jsxs)("h4",{className:"text-white",children:["Name: ",N]})]}):(p="/dashboard-2",h=(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("h4",{className:"text-muted",children:["Name: ",N]})}));const D=r.pathname,j="/dashboard-1"===D||"/dashboard-2"===D?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(x.Z,{onClick:()=>n(p),className:"me-3",children:"Back to Dashboard"});return(0,i.jsx)(A.Fragment,{children:(0,i.jsx)("div",{className:"navbar-custom ".concat(o),children:(0,i.jsxs)("div",{className:"topbar ".concat(t),children:[(0,i.jsx)("div",{className:"col-lg-2",children:j}),(0,i.jsx)("div",{className:"topbar-menu mx-auto",children:(0,i.jsx)("div",{className:"text-center",children:h})}),(0,i.jsx)("ul",{className:"topbar-menu d-flex align-items-center",children:(0,i.jsx)("li",{className:"dropdown",children:(0,i.jsx)(m,{profilePic:k.profile_pic?k.profile_pic:d,menuItems:u,username:N,userTitle:"Founder"})})})]})})})}},1642:e=>{e.exports="data:image/jpeg;base64,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"}}]);