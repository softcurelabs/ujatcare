"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[7426],{27426:(e,s,l)=>{l.r(s),l.d(s,{default:()=>u});var d=l(47313),i=l(63849),a=l(31616),r=l(65832),c=l(2135),t=l(51450),n=l(95167),m=l(55760),h=l(68846),x=l(46417);const j=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"track-order-list",children:[(0,x.jsxs)("ul",{className:"list-unstyled",children:[(0,x.jsxs)("li",{className:"completed",children:[(0,x.jsx)("h5",{className:"mt-0 mb-1",children:"Order Placed"}),(0,x.jsxs)("p",{className:"text-muted",children:["April 21 2019 ",(0,x.jsx)("small",{className:"text-muted",children:"07:22 AM"})," "]})]}),(0,x.jsxs)("li",{className:"completed",children:[(0,x.jsx)("h5",{className:"mt-0 mb-1",children:"Packed"}),(0,x.jsxs)("p",{className:"text-muted",children:["April 22 2019 ",(0,x.jsx)("small",{className:"text-muted",children:"12:16 AM"})]})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("span",{className:"active-dot dot"}),(0,x.jsx)("h5",{className:"mt-0 mb-1",children:"Shipped"}),(0,x.jsxs)("p",{className:"text-muted",children:["April 22 2019 ",(0,x.jsx)("small",{className:"text-muted",children:"05:16 PM"})]})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("h5",{className:"mt-0 mb-1",children:" Delivered"}),(0,x.jsx)("p",{className:"text-muted",children:"Estimated delivery within 3 days"})]})]}),(0,x.jsx)("div",{className:"text-center mt-4",children:(0,x.jsx)(c.rU,{to:"#",className:"btn btn-primary",children:"Show Details"})})]})}),o=e=>{let{order:s}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table table-bordered table-centered mb-0",children:[(0,x.jsx)("thead",{className:"table-light",children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Product name"}),(0,x.jsx)("th",{children:"Product"}),(0,x.jsx)("th",{children:"Quantity"}),(0,x.jsx)("th",{children:"Price"}),(0,x.jsx)("th",{children:"Total"})]})}),(0,x.jsxs)("tbody",{children:[(s.items||[]).map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"row",children:e.name}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{src:e.image,alt:"",height:"32"})}),(0,x.jsx)("td",{children:e.quantity}),(0,x.jsx)("td",{children:e.price}),(0,x.jsx)("td",{children:e.total})]},s))),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"row",colSpan:4,className:"text-end",children:"Sub Total :"}),(0,x.jsx)("td",{children:(0,x.jsx)("div",{className:"fw-bold",children:s.sub_total})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"row",colSpan:4,className:"text-end",children:"Shipping Charge :"}),(0,x.jsx)("td",{children:s.shipping_charge})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"row",colSpan:4,className:"text-end",children:"Estimated Tax :"}),(0,x.jsx)("td",{children:s.tax})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"row",colSpan:4,className:"text-end",children:"Total :"}),(0,x.jsx)("td",{children:(0,x.jsxs)("div",{className:"fw-bold",children:[" ",s.net_total]})})]})]})]})})})},p=e=>{const s=e.details||{};return(0,x.jsxs)(d.Fragment,{children:[(0,x.jsx)("h5",{className:"font-family-primary fw-semibold",children:s.provider}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"Address:"})," ",s.address]}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"Phone:"})," ",s.phone]}),(0,x.jsxs)("p",{className:"mb-0",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"Mobile:"})," ",s.mobile]})]})},b=e=>{const s=e.details||{};return(0,x.jsx)(d.Fragment,{children:(0,x.jsx)("ul",{className:"list-unstyled mb-0",children:(0,x.jsxs)("li",{children:[(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"Payment Type:"})," ",s.type]}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"Provider:"})," ",s.provider]}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"Valid Date:"})," ",s.valid]}),(0,x.jsxs)("p",{className:"mb-0",children:[(0,x.jsx)("span",{className:"fw-semibold me-2",children:"CVV:"})," xxx"]})]})})})},N=e=>{const s=e.details||{};return(0,x.jsx)(d.Fragment,{children:(0,x.jsxs)("div",{className:"text-center",children:[(0,x.jsx)("i",{className:"mdi mdi-truck-fast h2 text-muted"}),(0,x.jsx)("h5",{children:(0,x.jsx)("b",{children:s.provider})}),(0,x.jsxs)("p",{className:"mb-1",children:[(0,x.jsx)("span",{className:"fw-semibold",children:"Order ID :"})," ",s.order_id]}),(0,x.jsxs)("p",{className:"mb-0",children:[(0,x.jsx)("span",{className:"fw-semibold",children:"Payment Mode :"})," ",s.payment_mode]})]})})},u=()=>{const e={id:"#BM31",tracking_id:"894152012012",order_status:"Packed",items:[{id:1,name:"Polo Navy blue T-shirt",image:n,quantity:1,price:"$39",total:"$39"},{id:2,name:"Red Hoodie for men",image:m,quantity:2,price:"$46",total:"$92"},{id:3,name:"Red Hoodie for men",image:h,quantity:1,price:"$46",total:"$46"}],sub_total:"$177",shipping_charge:"$24",tax:"$12",net_total:"$213",shipping:{provider:"Stanley Jones",address:"3559 Roosevelt Wilson Lane San Bernardino, CA 92405",phone:"(123) 456-7890 ",mobile:"(+01) 12345 67890"},billing:{type:"Credit Card",provider:"Visa ending in 2851",valid:"02/2020"},delivery:{provider:"UPS Delivery",order_id:"#BM31",payment_mode:"COD"}};return(0,x.jsxs)(d.Fragment,{children:[(0,x.jsx)(t.Z,{breadCrumbItems:[{label:"Ecommerce",path:"/apps/ecommerce/order/details"},{label:"Order Detail",path:"/apps/ecommerce/order/details",active:!0}],title:"Order Detail"}),(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(a.Z,{lg:4,children:(0,x.jsx)(r.Z,{children:(0,x.jsxs)(r.Z.Body,{children:[(0,x.jsx)("h4",{className:"header-title mb-3",children:"Track Order"}),(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(a.Z,{lg:6,children:(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)("h5",{className:"mt-0",children:"Order ID:"}),(0,x.jsx)("p",{children:e.id})]})}),(0,x.jsx)(a.Z,{lg:6,children:(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)("h5",{className:"mt-0",children:"Tracking ID:"}),(0,x.jsx)("p",{children:e.tracking_id})]})})]}),(0,x.jsx)(j,{})]})})}),(0,x.jsx)(a.Z,{lg:8,children:(0,x.jsx)(r.Z,{children:(0,x.jsxs)(r.Z.Body,{children:[(0,x.jsxs)("h4",{className:"header-title mb-3",children:["Items from Order ",e.id]}),(0,x.jsx)(o,{order:e})]})})})]}),(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(a.Z,{lg:4,children:(0,x.jsx)(r.Z,{children:(0,x.jsxs)(r.Z.Body,{children:[(0,x.jsx)("h4",{className:"header-title mb-3",children:"Shipping Information"}),(0,x.jsx)(p,{details:e.shipping})]})})}),(0,x.jsx)(a.Z,{lg:4,children:(0,x.jsx)(r.Z,{children:(0,x.jsxs)(r.Z.Body,{children:[(0,x.jsx)("h4",{className:"header-title mb-3",children:"Billing Information"}),(0,x.jsx)(b,{details:e.billing})]})})}),(0,x.jsx)(a.Z,{lg:4,children:(0,x.jsx)(r.Z,{children:(0,x.jsxs)(r.Z.Body,{children:[(0,x.jsx)("h4",{className:"header-title mb-3",children:"Delivery Info"}),(0,x.jsx)(N,{details:e.delivery})]})})})]})]})}},95167:(e,s,l)=>{e.exports=l.p+"static/media/product-1.19ed70821acc671c9279.png"},55760:(e,s,l)=>{e.exports=l.p+"static/media/product-2.fc0c27967f674639fc3d.png"},68846:(e,s,l)=>{e.exports=l.p+"static/media/product-3.1f9654696905d5a7eaad.png"}}]);