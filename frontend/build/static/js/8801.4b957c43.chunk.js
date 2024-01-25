"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[8801],{78880:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(14987);function o(e){void 0===e&&(e=(0,s.Z)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var r=n(46106),a=n(78532),l=n(89190),i=n(47313),c=n(1168),d=n(77901);function u(e){const t=function(e){const t=(0,i.useRef)(e);return t.current=e,t}(e);(0,i.useEffect)((()=>()=>t.current()),[])}var h=n(97238),f=n(29650),m=n(24689),g=n(76350),p=n(86472),v=n(46417);const b=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let E;function Z(e){const t=(0,p.Z)(),n=e||function(e){return E||(E=new m.Z({ownerDocument:null==e?void 0:e.document})),E}(t),s=(0,i.useRef)({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>n.add(s.current),remove:()=>n.remove(s.current),isTopModal:()=>n.isTopModal(s.current),setDialogRef:(0,i.useCallback)((e=>{s.current.dialog=e}),[]),setBackdropRef:(0,i.useCallback)((e=>{s.current.backdrop=e}),[])})}const y=(0,i.forwardRef)(((e,t)=>{let{show:n=!1,role:s="dialog",className:m,style:p,children:E,backdrop:y=!0,keyboard:x=!0,onBackdropClick:w,onEscapeKeyDown:k,transition:C,backdropTransition:R,autoFocus:N=!0,enforceFocus:j=!0,restoreFocus:L=!0,restoreFocusOptions:O,renderDialog:S,renderBackdrop:T=(e=>(0,v.jsx)("div",Object.assign({},e))),manager:B,container:A,onShow:F,onHide:M=(()=>{}),onExit:D,onExited:W,onExiting:H,onEnter:P,onEntering:V,onEntered:I}=e,$=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,b);const K=(0,g.Z)(A),q=Z(B),z=(0,d.Z)(),G=(0,h.Z)(n),[J,Q]=(0,i.useState)(!n),U=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(()=>q),[q]),a.Z&&!G&&n&&(U.current=o()),C||n||J?n&&J&&Q(!1):Q(!0);const X=(0,f.Z)((()=>{if(q.add(),se.current=(0,l.Z)(document,"keydown",te),ne.current=(0,l.Z)(document,"focus",(()=>setTimeout(_)),!0),F&&F(),N){const e=o(document);q.dialog&&e&&!(0,r.Z)(q.dialog,e)&&(U.current=e,q.dialog.focus())}})),Y=(0,f.Z)((()=>{var e;(q.remove(),null==se.current||se.current(),null==ne.current||ne.current(),L)&&(null==(e=U.current)||null==e.focus||e.focus(O),U.current=null)}));(0,i.useEffect)((()=>{n&&K&&X()}),[n,K,X]),(0,i.useEffect)((()=>{J&&Y()}),[J,Y]),u((()=>{Y()}));const _=(0,f.Z)((()=>{if(!j||!z()||!q.isTopModal())return;const e=o();q.dialog&&e&&!(0,r.Z)(q.dialog,e)&&q.dialog.focus()})),ee=(0,f.Z)((e=>{e.target===e.currentTarget&&(null==w||w(e),!0===y&&M())})),te=(0,f.Z)((e=>{x&&27===e.keyCode&&q.isTopModal()&&(null==k||k(e),e.defaultPrevented||M())})),ne=(0,i.useRef)(),se=(0,i.useRef)(),oe=function(){Q(!0),null==W||W(...arguments)},re=C;if(!K||!(n||re&&!J))return null;const ae=Object.assign({role:s,ref:q.setDialogRef,"aria-modal":"dialog"===s||void 0},$,{style:p,className:m,tabIndex:-1});let le=S?S(ae):(0,v.jsx)("div",Object.assign({},ae,{children:i.cloneElement(E,{role:"document"})}));re&&(le=(0,v.jsx)(re,{appear:!0,unmountOnExit:!0,in:!!n,onExit:D,onExiting:H,onExited:oe,onEnter:P,onEntering:V,onEntered:I,children:le}));let ie=null;if(y){const e=R;ie=T({ref:q.setBackdropRef,onClick:ee}),e&&(ie=(0,v.jsx)(e,{appear:!0,in:!!n,children:ie}))}return(0,v.jsx)(v.Fragment,{children:c.createPortal((0,v.jsxs)(v.Fragment,{children:[ie,le]}),K)})}));y.displayName="Modal";const x=Object.assign(y,{Manager:m.Z})},24689:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(46988);const o=(0,n(25197).PB)("modal-open");const r=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]="".concat(parseInt((0,s.Z)(r,n)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(o,""),(0,s.Z)(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(o),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}},76350:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(14987),o=n(78532),r=n(47313),a=n(86472);const l=(e,t)=>{var n;return o.Z?null==e?(t||(0,s.Z)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};function i(e,t){const n=(0,a.Z)(),[s,o]=(0,r.useState)((()=>l(e,null==n?void 0:n.document)));if(!s){const t=l(e);t&&o(t)}return(0,r.useEffect)((()=>{t&&s&&t(s)}),[t,s]),(0,r.useEffect)((()=>{const t=l(e);t!==s&&o(t)}),[e,s]),s}},67742:(e,t,n)=>{function s(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,{Z:()=>s})},86822:(e,t,n)=>{n.d(t,{Z:()=>g});var s=n(47313),o=n(69125),r=n(75192),a=n.n(r),l=n(72884),i=n.n(l),c=n(46417);const d={"aria-label":a().string,onClick:a().func,variant:a().oneOf(["white"])},u=s.forwardRef(((e,t)=>{let{className:n,variant:s,...o}=e;return(0,c.jsx)("button",{ref:t,type:"button",className:i()("btn-close",s&&"btn-close-".concat(s),n),...o})}));u.displayName="CloseButton",u.propTypes=d,u.defaultProps={"aria-label":"Close"};const h=u;var f=n(30321);const m=s.forwardRef(((e,t)=>{let{closeLabel:n,closeVariant:r,closeButton:a,onHide:l,children:i,...d}=e;const u=(0,s.useContext)(f.Z),m=(0,o.Z)((()=>{null==u||u.onHide(),null==l||l()}));return(0,c.jsxs)("div",{ref:t,...d,children:[i,a&&(0,c.jsx)(h,{"aria-label":n,variant:r,onClick:m})]})}));m.defaultProps={closeLabel:"Close",closeButton:!1};const g=m},16381:(e,t,n)=>{n.d(t,{Z:()=>m,t:()=>f});var s=n(67742);var o=n(46988),r=n(15028);function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var l=n(24689);const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",c=".sticky-top",d=".navbar-toggler";class u extends l.Z{adjustAndStore(e,t,n){const s=t.style[e];t.dataset[e]=s,(0,o.Z)(t,{[e]:"".concat(parseFloat((0,o.Z)(t,e))+n,"px")})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],(0,o.Z)(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,o;if(o="modal-open",(n=t).classList?n.classList.add(o):(0,s.Z)(n,o)||("string"===typeof n.className?n.className=n.className+" "+o:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+o)),!e.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";(0,r.Z)(t,i).forEach((t=>this.adjustAndStore(a,t,e.scrollBarWidth))),(0,r.Z)(t,c).forEach((t=>this.adjustAndStore(l,t,-e.scrollBarWidth))),(0,r.Z)(t,d).forEach((t=>this.adjustAndStore(l,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,s;s="modal-open",(n=t).classList?n.classList.remove(s):"string"===typeof n.className?n.className=a(n.className,s):n.setAttribute("class",a(n.className&&n.className.baseVal||"",s));const o=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";(0,r.Z)(t,i).forEach((e=>this.restore(o,e))),(0,r.Z)(t,c).forEach((e=>this.restore(l,e))),(0,r.Z)(t,d).forEach((e=>this.restore(l,e)))}}let h;function f(e){return h||(h=new u(e)),h}const m=u},22868:(e,t,n)=>{n.d(t,{Z:()=>f});var s=n(72884),o=n.n(s),r=n(47313),a=n(64016),l=n(59498),i=n(6280),c=n(75879),d=n(46417);const u={[a.d0]:"show",[a.cn]:"show"},h=r.forwardRef(((e,t)=>{let{className:n,children:s,transitionClasses:a={},...h}=e;const f=(0,r.useCallback)(((e,t)=>{(0,i.Z)(e),null==h.onEnter||h.onEnter(e,t)}),[h]);return(0,d.jsx)(c.Z,{ref:t,addEndListener:l.Z,...h,onEnter:f,childRef:s.ref,children:(e,t)=>r.cloneElement(s,{...t,className:o()("fade",n,s.props.className,u[e],a[e])})})}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade";const f=h},30321:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n(47313).createContext({onHide(){}})}}]);