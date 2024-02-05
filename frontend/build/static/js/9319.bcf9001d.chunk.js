"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[9319],{21369:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(47313);const o=e=>e&&"function"!==typeof e?n=>{e.current=n}:e;const s=function(e,n){return(0,r.useMemo)((()=>function(e,n){const t=o(e),r=o(n);return e=>{t&&t(e),r&&r(e)}}(e,n)),[e,n])}},76350:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(14987),o=t(78532),s=t(47313),c=t(86472);const l=(e,n)=>{var t;return o.Z?null==e?(n||(0,r.Z)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null):null};function a(e,n){const t=(0,c.Z)(),[r,o]=(0,s.useState)((()=>l(e,null==t?void 0:t.document)));if(!r){const n=l(e);n&&o(n)}return(0,s.useEffect)((()=>{n&&r&&n(r)}),[n,r]),(0,s.useEffect)((()=>{const n=l(e);n!==r&&o(n)}),[e,r]),r}},67742:(e,n,t)=>{function r(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}t.d(n,{Z:()=>r})},812:(e,n,t)=>{t.d(n,{Z:()=>U});var r=t(46106),o=t(47313);var s=t(52904),c=Math.pow(2,31)-1;function l(e,n,t){var r=t-Date.now();e.current=r<=c?setTimeout(n,r):setTimeout((function(){return l(e,n,t)}),c)}function a(){var e=function(){var e=(0,o.useRef)(!0),n=(0,o.useRef)((function(){return e.current}));return(0,o.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),n=(0,o.useRef)();return(0,s.Z)((function(){return clearTimeout(n.current)})),(0,o.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=c?n.current=setTimeout(r,o):l(n,r,Date.now()+o))},clear:t}}),[])}t(21024);var i=t(66227),u=t(57323),f=t(72884),p=t.n(f),d=t(1168),h=t(6994),v=t(21369),w=t(80049),m=t(89190),g=t(14987),y=t(29650),E=t(94965);const Z=()=>{};const b=function(e,n){let{disabled:t,clickTrigger:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=n||Z;(0,E.Z)(e,s,{disabled:t,clickTrigger:r});const c=(0,y.Z)((e=>{27===e.keyCode&&s(e)}));(0,o.useEffect)((()=>{if(t||null==e)return;const n=(0,g.Z)((0,E.f)(e));let r=(n.defaultView||window).event;const o=(0,m.Z)(n,"keyup",(e=>{e!==r?c(e):r=void 0}));return()=>{o()}}),[e,t,c])};var x=t(76350),C=t(14395),P=t(46417);const k=o.forwardRef(((e,n)=>{const{flip:t,offset:r,placement:s,containerPadding:c,popperConfig:l={},transition:a}=e,[i,u]=(0,h.Z)(),[f,p]=(0,h.Z)(),m=(0,v.Z)(u,n),g=(0,x.Z)(e.container),y=(0,x.Z)(e.target),[E,Z]=(0,o.useState)(!e.show),k=(0,w.Z)(y,i,(0,C.ZP)({placement:s,enableEvents:!!e.show,containerPadding:c||5,flip:t,offset:r,arrowElement:f,popperConfig:l}));e.show?E&&Z(!1):e.transition||E||Z(!0);const O=function(){Z(!0),e.onExited&&e.onExited(...arguments)},j=e.show||a&&!E;if(b(i,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!j)return null;let N=e.children(Object.assign({},k.attributes.popper,{style:k.styles.popper,ref:m}),{popper:k,placement:s,show:!!e.show,arrowProps:Object.assign({},k.attributes.arrow,{style:k.styles.arrow,ref:p})});if(a){const{onExit:n,onExiting:t,onEnter:r,onEntering:o,onEntered:s}=e;N=(0,P.jsx)(a,{in:e.show,appear:!0,onExit:n,onExiting:t,onExited:O,onEnter:r,onEntering:o,onEntered:s,children:N})}return g?d.createPortal(N,g):null}));k.displayName="Overlay";const O=k;var j=t(67742),N=t(68524),R=t(28864);const T=(0,R.Z)("popover-header"),_=(0,R.Z)("popover-body");var S=t(94494);const F=o.forwardRef(((e,n)=>{let{bsPrefix:t,placement:r,className:o,style:s,children:c,body:l,arrowProps:a,popper:i,show:u,...f}=e;const d=(0,N.vE)(t,"popover"),h=(0,N.SC)(),[v]=(null==r?void 0:r.split("-"))||[],w=(0,S.z)(v,h);return(0,P.jsxs)("div",{ref:n,role:"tooltip",style:s,"x-placement":v,className:p()(o,d,v&&"bs-popover-".concat(w)),...f,children:[(0,P.jsx)("div",{className:"popover-arrow",...a}),l?(0,P.jsx)(_,{children:c}):c]})}));F.defaultProps={placement:"right"};const M=Object.assign(F,{Header:T,Body:_,POPPER_OFFSET:[0,8]});var B=t(22868),D=t(27200);const H={transition:B.Z,rootClose:!1,show:!1,placement:"top"};const z=o.forwardRef(((e,n)=>{let{children:t,transition:r,popperConfig:s={},...c}=e;const l=(0,o.useRef)({}),[a,i]=function(){const e=(0,o.useRef)(null),n=(0,N.vE)(void 0,"popover"),t=(0,o.useMemo)((()=>({name:"offset",options:{offset:()=>e.current&&(0,j.Z)(e.current,n)?M.POPPER_OFFSET:[0,0]}})),[n]);return[e,[t]]}(),f=(0,u.Z)(n,a),d=!0===r?B.Z:r||void 0;return(0,P.jsx)(O,{...c,ref:f,popperConfig:{...s,modifiers:i.concat(s.modifiers||[])},transition:d,children:(e,n)=>{let{arrowProps:s,placement:c,popper:a,show:i}=n;var u,f;!function(e,n){const{ref:t}=e,{ref:r}=n;e.ref=t.__wrapped||(t.__wrapped=e=>t((0,D.Z)(e))),n.ref=r.__wrapped||(r.__wrapped=e=>r((0,D.Z)(e)))}(e,s);const d=Object.assign(l.current,{state:null==a?void 0:a.state,scheduleUpdate:null==a?void 0:a.update,placement:c,outOfBoundaries:(null==a||null==(u=a.state)||null==(f=u.modifiersData.hide)?void 0:f.isReferenceHidden)||!1});return"function"===typeof t?t({...e,placement:c,show:i,...!r&&i&&{className:"show"},popper:d,arrowProps:s}):o.cloneElement(t,{...e,placement:c,arrowProps:s,popper:d,className:p()(t.props.className,!r&&i&&"show"),style:{...t.props.style,...e.style}})}})}));z.displayName="Overlay",z.defaultProps=H;const A=z;function L(e,n,t){const[o]=n,s=o.currentTarget,c=o.relatedTarget||o.nativeEvent[t];c&&c===s||(0,r.Z)(s,c)||e(...n)}function V(e){let{trigger:n,overlay:t,children:r,popperConfig:s={},show:c,defaultShow:l=!1,onToggle:f,delay:p,placement:d,flip:h=d&&-1!==d.indexOf("auto"),...v}=e;const w=(0,o.useRef)(null),m=(0,u.Z)(w,r.ref),g=a(),y=(0,o.useRef)(""),[E,Z]=(0,i.$c)(c,l,f),b=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(p),{onFocus:x,onBlur:C,onClick:k}="function"!==typeof r?o.Children.only(r).props:{},O=(0,o.useCallback)((()=>{g.clear(),y.current="show",b.show?g.set((()=>{"show"===y.current&&Z(!0)}),b.show):Z(!0)}),[b.show,Z,g]),j=(0,o.useCallback)((()=>{g.clear(),y.current="hide",b.hide?g.set((()=>{"hide"===y.current&&Z(!1)}),b.hide):Z(!1)}),[b.hide,Z,g]),N=(0,o.useCallback)((function(){O(),null==x||x(...arguments)}),[O,x]),R=(0,o.useCallback)((function(){j(),null==C||C(...arguments)}),[j,C]),T=(0,o.useCallback)((function(){Z(!E),null==k||k(...arguments)}),[k,Z,E]),_=(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];L(O,n,"fromElement")}),[O]),S=(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];L(j,n,"toElement")}),[j]),F=null==n?[]:[].concat(n),M={ref:e=>{m((0,D.Z)(e))}};return-1!==F.indexOf("click")&&(M.onClick=T),-1!==F.indexOf("focus")&&(M.onFocus=N,M.onBlur=R),-1!==F.indexOf("hover")&&(M.onMouseOver=_,M.onMouseOut=S),(0,P.jsxs)(P.Fragment,{children:["function"===typeof r?r(M):(0,o.cloneElement)(r,M),(0,P.jsx)(A,{...v,show:E,onHide:j,flip:h,placement:d,popperConfig:s,target:w.current,children:t})]})}V.defaultProps={defaultShow:!1,trigger:["hover","focus"]};const U=V},95668:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(72884),o=t.n(r),s=t(47313),c=t(68524),l=t(94494),a=t(46417);const i=s.forwardRef(((e,n)=>{let{bsPrefix:t,placement:r,className:s,style:i,children:u,arrowProps:f,popper:p,show:d,...h}=e;t=(0,c.vE)(t,"tooltip");const v=(0,c.SC)(),[w]=(null==r?void 0:r.split("-"))||[],m=(0,l.z)(w,v);return(0,a.jsxs)("div",{ref:n,style:i,role:"tooltip","x-placement":w,className:o()(s,t,"bs-tooltip-".concat(m)),...h,children:[(0,a.jsx)("div",{className:"tooltip-arrow",...f}),(0,a.jsx)("div",{className:"".concat(t,"-inner"),children:u})]})}));i.defaultProps={placement:"right"},i.displayName="Tooltip";const u=i},94494:(e,n,t)=>{t.d(n,{z:()=>o});var r=t(47313);r.Component;function o(e,n){let t=e;return"left"===e?t=n?"end":"start":"right"===e&&(t=n?"start":"end"),t}},52904:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(47313);function o(e){var n=function(e){var n=(0,r.useRef)(e);return n.current=e,n}(e);(0,r.useEffect)((function(){return function(){return n.current()}}),[])}}}]);