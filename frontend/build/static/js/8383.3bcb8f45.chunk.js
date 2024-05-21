"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8383],{79854:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(9950);function r(e){const n=function(e){const n=(0,o.useRef)(e);return n.current=e,n}(e);(0,o.useEffect)((()=>()=>n.current()),[])}},2498:(e,n,t)=>{t.d(n,{Yc:()=>h});var o=t(76230),r=t(19865),s=t(71008),l=t(9950),i=t(5596);const c=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function a(e){let{onEnter:n,onEntering:t,onEntered:r,onExit:s,onExiting:i,onExited:a,addEndListener:u,children:d}=e,f=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,c);const p=(0,l.useRef)(null),h=(0,o.A)(p,"function"===typeof d?null:d.ref),m=e=>n=>{e&&p.current&&e(p.current,n)},E=(0,l.useCallback)(m(n),[n]),v=(0,l.useCallback)(m(t),[t]),g=(0,l.useCallback)(m(r),[r]),w=(0,l.useCallback)(m(s),[s]),A=(0,l.useCallback)(m(i),[i]),x=(0,l.useCallback)(m(a),[a]),b=(0,l.useCallback)(m(u),[u]);return Object.assign({},f,{nodeRef:p},n&&{onEnter:E},t&&{onEntering:v},r&&{onEntered:g},s&&{onExit:w},i&&{onExiting:A},a&&{onExited:x},u&&{addEndListener:b},{children:"function"===typeof d?(e,n)=>d(e,Object.assign({},n,{ref:h})):(0,l.cloneElement)(d,{ref:h})})}var u=t(44414);const d=["component"];const f=l.forwardRef(((e,n)=>{let{component:t}=e;const o=a(function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,d));return(0,u.jsx)(t,Object.assign({ref:n},o))}));function p(e){let{children:n,in:t,onExited:i,onEntered:c,transition:a}=e;const[u,d]=(0,l.useState)(!t);t&&u&&d(!1);const f=function(e){let{in:n,onTransition:t}=e;const o=(0,l.useRef)(null),i=(0,l.useRef)(!0),c=(0,r.A)(t);return(0,s.A)((()=>{if(!o.current)return;let e=!1;return c({in:n,element:o.current,initial:i.current,isStale:()=>e}),()=>{e=!0}}),[n,c]),(0,s.A)((()=>(i.current=!1,()=>{i.current=!0})),[]),o}({in:!!t,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==c||c(e.element,e.initial):(d(!0),null==i||i(e.element)))}),(n=>{throw e.in||d(!0),n}))}}),p=(0,o.A)(f,n.ref);return u&&!t?null:(0,l.cloneElement)(n,{ref:p})}function h(e,n,t){return e?(0,u.jsx)(f,Object.assign({},t,{component:e})):n?(0,u.jsx)(p,Object.assign({},t,{transition:n})):(0,u.jsx)(i.A,Object.assign({},t))}},5596:(e,n,t)=>{t.d(n,{A:()=>l});var o=t(19865),r=t(76230),s=t(9950);const l=function(e){let{children:n,in:t,onExited:l,mountOnEnter:i,unmountOnExit:c}=e;const a=(0,s.useRef)(null),u=(0,s.useRef)(t),d=(0,o.A)(l);(0,s.useEffect)((()=>{t?u.current=!0:d(a.current)}),[t,d]);const f=(0,r.A)(a,n.ref),p=(0,s.cloneElement)(n,{ref:f});return t?p:c||!u.current&&i?null:p}},23875:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(19815),r=t(87534),s=t(9950),l=t(78452);const i=(e,n)=>r.A?null==e?(n||(0,o.A)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function c(e,n){const t=(0,l.A)(),[o,r]=(0,s.useState)((()=>i(e,null==t?void 0:t.document)));if(!o){const n=i(e);n&&r(n)}return(0,s.useEffect)((()=>{n&&o&&n(o)}),[n,o]),(0,s.useEffect)((()=>{const n=i(e);n!==o&&r(n)}),[e,o]),o}},78452:(e,n,t)=>{t.d(n,{A:()=>l});var o=t(9950),r=t(87534);const s=(0,o.createContext)(r.A?window:void 0);s.Provider;function l(){return(0,o.useContext)(s)}},79058:(e,n,t)=>{function o(e){return"Escape"===e.code||27===e.keyCode}t.d(n,{v:()=>o})},18336:(e,n,t)=>{function o(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,{A:()=>o})},74641:(e,n,t)=>{function o(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}t.d(n,{A:()=>o})},30095:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(48738),r=t.n(o),s=t(9950),l=t(29310),i=t(20529),c=t(27832),a=t(96091),u=t(44414);const d={[l.ns]:"show",[l._K]:"show"},f=s.forwardRef(((e,n)=>{let{className:t,children:o,transitionClasses:l={},onEnter:f,...p}=e;const h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...p},m=(0,s.useCallback)(((e,n)=>{(0,c.A)(e),null==f||f(e,n)}),[f]);return(0,u.jsx)(a.A,{ref:n,addEndListener:i.A,...h,onEnter:m,childRef:o.ref,children:(e,n)=>s.cloneElement(o,{...n,className:r()("fade",t,o.props.className,d[e],l[e])})})}));f.displayName="Fade";const p=f},38383:(e,n,t)=>{t.d(n,{A:()=>J});var o=t(18336),r=t(11942),s=t.n(r),l=t(9950),i=t(22770),c=t(79854);const a=2**31-1;function u(e,n,t){const o=t-Date.now();e.current=o<=a?setTimeout(n,o):setTimeout((()=>u(e,n,t)),a)}function d(){const e=(0,i.A)(),n=(0,l.useRef)();return(0,c.A)((()=>clearTimeout(n.current))),(0,l.useMemo)((()=>{const t=()=>clearTimeout(n.current);return{set:function(o){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(t(),r<=a?n.current=setTimeout(o,r):u(n,o,Date.now()+r))},clear:t,handleRef:n}}),[])}t(2241);var f=t(83529),p=t(76230),h=t(48738),m=t.n(h),E=t(17119),v=t(1134),g=t(1799),w=t(67410),A=t(19815),x=t(19865),b=t(20767),y=t(79058);const O=()=>{};const C=function(e,n){let{disabled:t,clickTrigger:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=n||O;(0,b.A)(e,r,{disabled:t,clickTrigger:o});const s=(0,x.A)((e=>{(0,y.v)(e)&&r(e)}));(0,l.useEffect)((()=>{if(t||null==e)return;const n=(0,A.A)((0,b.j)(e));let o=(n.defaultView||window).event;const r=(0,w.A)(n,"keyup",(e=>{e!==o?s(e):o=void 0}));return()=>{r()}}),[e,t,s])};var j=t(23875),k=t(30849),P=t(2498);const R=l.forwardRef(((e,n)=>{const{flip:t,offset:o,placement:r,containerPadding:s,popperConfig:i={},transition:c,runTransition:a}=e,[u,d]=(0,v.A)(),[f,h]=(0,v.A)(),m=(0,p.A)(d,n),w=(0,j.A)(e.container),A=(0,j.A)(e.target),[x,b]=(0,l.useState)(!e.show),y=(0,g.A)(A,u,(0,k.Ay)({placement:r,enableEvents:!!e.show,containerPadding:s||5,flip:t,offset:o,arrowElement:f,popperConfig:i}));e.show&&x&&b(!1);const O=e.show||!x;if(C(u,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!O)return null;const{onExit:R,onExiting:N,onEnter:T,onEntering:F,onEntered:_}=e;let U=e.children(Object.assign({},y.attributes.popper,{style:y.styles.popper,ref:m}),{popper:y,placement:r,show:!!e.show,arrowProps:Object.assign({},y.attributes.arrow,{style:y.styles.arrow,ref:h})});return U=(0,P.Yc)(c,a,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:U,onExit:R,onExiting:N,onExited:function(){b(!0),e.onExited&&e.onExited(...arguments)},onEnter:T,onEntering:F,onEntered:_}),w?E.createPortal(U,w):null}));R.displayName="Overlay";const N=R;var T=t(71008),F=t(74641),_=t(44089),U=t(44414);const S=l.forwardRef(((e,n)=>{let{className:t,bsPrefix:o,as:r="div",...s}=e;return o=(0,_.oU)(o,"popover-header"),(0,U.jsx)(r,{ref:n,className:m()(t,o),...s})}));S.displayName="PopoverHeader";const D=S,L=l.forwardRef(((e,n)=>{let{className:t,bsPrefix:o,as:r="div",...s}=e;return o=(0,_.oU)(o,"popover-body"),(0,U.jsx)(r,{ref:n,className:m()(t,o),...s})}));L.displayName="PopoverBody";const M=L;var B=t(48432),I=t(13473);const H=l.forwardRef(((e,n)=>{let{bsPrefix:t,placement:o="right",className:r,style:s,children:l,body:i,arrowProps:c,hasDoneInitialMeasure:a,popper:u,show:d,...f}=e;const p=(0,_.oU)(t,"popover"),h=(0,_.Wz)(),[E]=(null==o?void 0:o.split("-"))||[],v=(0,B.G)(E,h);let g=s;return d&&!a&&(g={...s,...(0,I.A)(null==u?void 0:u.strategy)}),(0,U.jsxs)("div",{ref:n,role:"tooltip",style:g,"x-placement":E,className:m()(r,p,E&&"bs-popover-".concat(v)),...f,children:[(0,U.jsx)("div",{className:"popover-arrow",...c}),i?(0,U.jsx)(M,{children:l}):l]})})),G=Object.assign(H,{Header:D,Body:M,POPPER_OFFSET:[0,8]});var z=t(95942);var V=t(30095),W=t(42071);const Y=l.forwardRef(((e,n)=>{let{children:t,transition:o=V.A,popperConfig:r={},rootClose:s=!1,placement:i="top",show:c=!1,...a}=e;const u=(0,l.useRef)({}),[d,f]=(0,l.useState)(null),[h,E]=function(e){const n=(0,l.useRef)(null),t=(0,_.oU)(void 0,"popover"),o=(0,_.oU)(void 0,"tooltip"),r=(0,l.useMemo)((()=>({name:"offset",options:{offset:()=>{if(e)return e;if(n.current){if((0,F.A)(n.current,t))return G.POPPER_OFFSET;if((0,F.A)(n.current,o))return z.A.TOOLTIP_OFFSET}return[0,0]}}})),[e,t,o]);return[n,[r]]}(a.offset),v=(0,p.A)(n,h),g=!0===o?V.A:o||void 0,w=(0,x.A)((e=>{f(e),null==r||null==r.onFirstUpdate||r.onFirstUpdate(e)}));return(0,T.A)((()=>{d&&a.target&&(null==u.current.scheduleUpdate||u.current.scheduleUpdate())}),[d,a.target]),(0,l.useEffect)((()=>{c||f(null)}),[c]),(0,U.jsx)(N,{...a,ref:v,popperConfig:{...r,modifiers:E.concat(r.modifiers||[]),onFirstUpdate:w},transition:g,rootClose:s,placement:i,show:c,children:(e,n)=>{let{arrowProps:s,popper:i,show:c}=n;var a,f;!function(e,n){const{ref:t}=e,{ref:o}=n;e.ref=t.__wrapped||(t.__wrapped=e=>t((0,W.A)(e))),n.ref=o.__wrapped||(o.__wrapped=e=>o((0,W.A)(e)))}(e,s);const p=null==i?void 0:i.placement,h=Object.assign(u.current,{state:null==i?void 0:i.state,scheduleUpdate:null==i?void 0:i.update,placement:p,outOfBoundaries:(null==i||null==(a=i.state)||null==(f=a.modifiersData.hide)?void 0:f.isReferenceHidden)||!1,strategy:r.strategy}),E=!!d;return"function"===typeof t?t({...e,placement:p,show:c,...!o&&c&&{className:"show"},popper:h,arrowProps:s,hasDoneInitialMeasure:E}):l.cloneElement(t,{...e,placement:p,arrowProps:s,popper:h,hasDoneInitialMeasure:E,className:m()(t.props.className,!o&&c&&"show"),style:{...t.props.style,...e.style}})}})}));Y.displayName="Overlay";const K=Y;function q(e,n,t){const[r]=n,s=r.currentTarget,l=r.relatedTarget||r.nativeEvent[t];l&&l===s||(0,o.A)(s,l)||e(...n)}s().oneOf(["click","hover","focus"]);const J=e=>{let{trigger:n=["hover","focus"],overlay:t,children:o,popperConfig:r={},show:s,defaultShow:i=!1,onToggle:c,delay:a,placement:u,flip:h=u&&-1!==u.indexOf("auto"),...m}=e;const E=(0,l.useRef)(null),v=(0,p.A)(E,o.ref),g=d(),w=(0,l.useRef)(""),[A,x]=(0,f.iC)(s,i,c),b=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(a),{onFocus:y,onBlur:O,onClick:C}="function"!==typeof o?l.Children.only(o).props:{},j=(0,l.useCallback)((()=>{g.clear(),w.current="show",b.show?g.set((()=>{"show"===w.current&&x(!0)}),b.show):x(!0)}),[b.show,x,g]),k=(0,l.useCallback)((()=>{g.clear(),w.current="hide",b.hide?g.set((()=>{"hide"===w.current&&x(!1)}),b.hide):x(!1)}),[b.hide,x,g]),P=(0,l.useCallback)((function(){j(),null==y||y(...arguments)}),[j,y]),R=(0,l.useCallback)((function(){k(),null==O||O(...arguments)}),[k,O]),N=(0,l.useCallback)((function(){x(!A),null==C||C(...arguments)}),[C,x,A]),T=(0,l.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];q(j,n,"fromElement")}),[j]),F=(0,l.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];q(k,n,"toElement")}),[k]),_=null==n?[]:[].concat(n),S={ref:e=>{v((0,W.A)(e))}};return-1!==_.indexOf("click")&&(S.onClick=N),-1!==_.indexOf("focus")&&(S.onFocus=P,S.onBlur=R),-1!==_.indexOf("hover")&&(S.onMouseOver=T,S.onMouseOut=F),(0,U.jsxs)(U.Fragment,{children:["function"===typeof o?o(S):(0,l.cloneElement)(o,S),(0,U.jsx)(K,{...m,show:A,onHide:k,flip:h,placement:u,popperConfig:r,target:E.current,children:t})]})}},95942:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(48738),r=t.n(o),s=t(9950),l=t(44089),i=t(48432),c=t(13473),a=t(44414);const u=s.forwardRef(((e,n)=>{let{bsPrefix:t,placement:o="right",className:s,style:u,children:d,arrowProps:f,hasDoneInitialMeasure:p,popper:h,show:m,...E}=e;t=(0,l.oU)(t,"tooltip");const v=(0,l.Wz)(),[g]=(null==o?void 0:o.split("-"))||[],w=(0,i.G)(g,v);let A=u;return m&&!p&&(A={...u,...(0,c.A)(null==h?void 0:h.strategy)}),(0,a.jsxs)("div",{ref:n,style:A,role:"tooltip","x-placement":g,className:r()(s,t,"bs-tooltip-".concat(w)),...E,children:[(0,a.jsx)("div",{className:"tooltip-arrow",...f}),(0,a.jsx)("div",{className:"".concat(t,"-inner"),children:d})]})}));u.displayName="Tooltip";const d=Object.assign(u,{TOOLTIP_OFFSET:[0,6]})},13473:(e,n,t)=>{function o(){return{position:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"absolute",top:"0",left:"0",opacity:"0",pointerEvents:"none"}}t.d(n,{A:()=>o})},48432:(e,n,t)=>{t.d(n,{G:()=>r});var o=t(9950);o.Component;function r(e,n){let t=e;return"left"===e?t=n?"end":"start":"right"===e&&(t=n?"start":"end"),t}}}]);