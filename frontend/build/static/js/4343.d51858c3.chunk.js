"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[4343],{22890:(e,a,t)=>{t.d(a,{Tj:()=>o,jJ:()=>r,mf:()=>n});var s=t(9950);function o(e,a){let t=0;return s.Children.map(e,(e=>s.isValidElement(e)?a(e,t++):e))}function r(e,a){let t=0;s.Children.forEach(e,(e=>{s.isValidElement(e)&&a(e,t++)}))}function n(e,a){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===a))}},64055:(e,a,t)=>{t.d(a,{A:()=>L});var s=t(48738),o=t.n(s),r=t(11942),n=t.n(r),l=t(9950),c=t(44414);const i={type:n().string,tooltip:n().bool,as:n().elementType},d=l.forwardRef(((e,a)=>{let{as:t="div",className:s,type:r="valid",tooltip:n=!1,...l}=e;return(0,c.jsx)(t,{...l,ref:a,className:o()(s,"".concat(r,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const f=d;var m=t(14531),u=t(99288),p=t(44089);const x=l.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,htmlFor:r,...n}=e;const{controlId:i}=(0,l.useContext)(u.A);return t=(0,p.oU)(t,"form-check-label"),(0,c.jsx)("label",{...n,ref:a,htmlFor:r||i,className:o()(s,t)})}));x.displayName="FormCheckLabel";const b=x;var N=t(22890);const h=l.forwardRef(((e,a)=>{let{id:t,bsPrefix:s,bsSwitchPrefix:r,inline:n=!1,reverse:i=!1,disabled:d=!1,isValid:x=!1,isInvalid:h=!1,feedbackTooltip:y=!1,feedback:v,feedbackType:j,className:g,style:w,title:A="",type:R="checkbox",label:k,children:F,as:C="input",...I}=e;s=(0,p.oU)(s,"form-check"),r=(0,p.oU)(r,"form-switch");const{controlId:P}=(0,l.useContext)(u.A),T=(0,l.useMemo)((()=>({controlId:t||P})),[P,t]),U=!F&&null!=k&&!1!==k||(0,N.mf)(F,b),E=(0,c.jsx)(m.A,{...I,type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:h,disabled:d,as:C});return(0,c.jsx)(u.A.Provider,{value:T,children:(0,c.jsx)("div",{style:w,className:o()(g,U&&s,n&&"".concat(s,"-inline"),i&&"".concat(s,"-reverse"),"switch"===R&&r),children:F||(0,c.jsxs)(c.Fragment,{children:[E,U&&(0,c.jsx)(b,{title:A,children:k}),v&&(0,c.jsx)(f,{type:j,tooltip:y,children:v})]})})})}));h.displayName="FormCheck";const y=Object.assign(h,{Input:m.A,Label:b});t(2241);const v=l.forwardRef(((e,a)=>{let{bsPrefix:t,type:s,size:r,htmlSize:n,id:i,className:d,isValid:f=!1,isInvalid:m=!1,plaintext:x,readOnly:b,as:N="input",...h}=e;const{controlId:y}=(0,l.useContext)(u.A);return t=(0,p.oU)(t,"form-control"),(0,c.jsx)(N,{...h,type:s,size:n,ref:a,readOnly:b,id:i||y,className:o()(d,x?"".concat(t,"-plaintext"):t,r&&"".concat(t,"-").concat(r),"color"===s&&"".concat(t,"-color"),f&&"is-valid",m&&"is-invalid")})}));v.displayName="FormControl";const j=Object.assign(v,{Feedback:f}),g=l.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="div",...n}=e;return s=(0,p.oU)(s,"form-floating"),(0,c.jsx)(r,{ref:a,className:o()(t,s),...n})}));g.displayName="FormFloating";const w=g;var A=t(584),R=t(90729);const k=l.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,id:r,...n}=e;const{controlId:i}=(0,l.useContext)(u.A);return t=(0,p.oU)(t,"form-range"),(0,c.jsx)("input",{...n,type:"range",ref:a,className:o()(s,t),id:r||i})}));k.displayName="FormRange";const F=k,C=l.forwardRef(((e,a)=>{let{bsPrefix:t,size:s,htmlSize:r,className:n,isValid:i=!1,isInvalid:d=!1,id:f,...m}=e;const{controlId:x}=(0,l.useContext)(u.A);return t=(0,p.oU)(t,"form-select"),(0,c.jsx)("select",{...m,size:r,ref:a,className:o()(n,t,s&&"".concat(t,"-").concat(s),i&&"is-valid",d&&"is-invalid"),id:f||x})}));C.displayName="FormSelect";const I=C,P=l.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,as:r="small",muted:n,...l}=e;return t=(0,p.oU)(t,"form-text"),(0,c.jsx)(r,{...l,ref:a,className:o()(s,t,n&&"text-muted")})}));P.displayName="FormText";const T=P,U=l.forwardRef(((e,a)=>(0,c.jsx)(y,{...e,ref:a,type:"switch"})));U.displayName="Switch";const E=Object.assign(U,{Input:y.Input,Label:y.Label}),O=l.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,children:r,controlId:n,label:l,...i}=e;return t=(0,p.oU)(t,"form-floating"),(0,c.jsxs)(A.A,{ref:a,className:o()(s,t),controlId:n,...i,children:[r,(0,c.jsx)("label",{htmlFor:n,children:l})]})}));O.displayName="FloatingLabel";const S=O,z={_ref:n().any,validated:n().bool,as:n().elementType},M=l.forwardRef(((e,a)=>{let{className:t,validated:s,as:r="form",...n}=e;return(0,c.jsx)(r,{...n,ref:a,className:o()(t,s&&"was-validated")})}));M.displayName="Form",M.propTypes=z;const L=Object.assign(M,{Group:A.A,Control:j,Floating:w,Check:y,Switch:E,Label:R.A,Text:T,Range:F,Select:I,FloatingLabel:S})},14531:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(48738),o=t.n(s),r=t(9950),n=t(99288),l=t(44089),c=t(44414);const i=r.forwardRef(((e,a)=>{let{id:t,bsPrefix:s,className:i,type:d="checkbox",isValid:f=!1,isInvalid:m=!1,as:u="input",...p}=e;const{controlId:x}=(0,r.useContext)(n.A);return s=(0,l.oU)(s,"form-check-input"),(0,c.jsx)(u,{...p,ref:a,type:d,id:t||x,className:o()(i,s,f&&"is-valid",m&&"is-invalid")})}));i.displayName="FormCheckInput";const d=i},584:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(9950),o=t(99288),r=t(44414);const n=s.forwardRef(((e,a)=>{let{controlId:t,as:n="div",...l}=e;const c=(0,s.useMemo)((()=>({controlId:t})),[t]);return(0,r.jsx)(o.A.Provider,{value:c,children:(0,r.jsx)(n,{...l,ref:a})})}));n.displayName="FormGroup";const l=n},75623:(e,a,t)=>{t.d(a,{A:()=>u});var s=t(48738),o=t.n(s),r=t(9950),n=t(44089),l=t(14531),c=t(54947),i=t(44414);const d=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:r="span",...l}=e;return s=(0,n.oU)(s,"input-group-text"),(0,i.jsx)(r,{ref:a,className:o()(t,s),...l})}));d.displayName="InputGroupText";const f=d,m=r.forwardRef(((e,a)=>{let{bsPrefix:t,size:s,hasValidation:l,className:d,as:f="div",...m}=e;t=(0,n.oU)(t,"input-group");const u=(0,r.useMemo)((()=>({})),[]);return(0,i.jsx)(c.A.Provider,{value:u,children:(0,i.jsx)(f,{ref:a,...m,className:o()(d,t,s&&"".concat(t,"-").concat(s),l&&"has-validation")})})}));m.displayName="InputGroup";const u=Object.assign(m,{Text:f,Radio:e=>(0,i.jsx)(f,{children:(0,i.jsx)(l.A,{type:"radio",...e})}),Checkbox:e=>(0,i.jsx)(f,{children:(0,i.jsx)(l.A,{type:"checkbox",...e})})})},44268:(e,a,t)=>{t.d(a,{A:()=>L});var s,o=t(48738),r=t.n(o),n=t(8996),l=t(87534),c=t(19815),i=t(78557);function d(e){if((!s&&0!==s||e)&&l.A){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),s=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return s}var f=t(1134),m=t(19865),u=t(76230),p=t(79854),x=t(89679),b=t(9950),N=t(66762),h=t(70489),y=t(30095),v=t(44089),j=t(44414);const g=b.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:o="div",...n}=e;return s=(0,v.oU)(s,"modal-body"),(0,j.jsx)(o,{ref:a,className:r()(t,s),...n})}));g.displayName="ModalBody";const w=g;var A=t(34153);const R=b.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,contentClassName:o,centered:n,size:l,fullscreen:c,children:i,scrollable:d,...f}=e;t=(0,v.oU)(t,"modal");const m="".concat(t,"-dialog"),u="string"===typeof c?"".concat(t,"-fullscreen-").concat(c):"".concat(t,"-fullscreen");return(0,j.jsx)("div",{...f,ref:a,className:r()(m,s,l&&"".concat(t,"-").concat(l),n&&"".concat(m,"-centered"),d&&"".concat(m,"-scrollable"),c&&u),children:(0,j.jsx)("div",{className:r()("".concat(t,"-content"),o),children:i})})}));R.displayName="ModalDialog";const k=R,F=b.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:o="div",...n}=e;return s=(0,v.oU)(s,"modal-footer"),(0,j.jsx)(o,{ref:a,className:r()(t,s),...n})}));F.displayName="ModalFooter";const C=F;var I=t(89103);const P=b.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,closeLabel:o="Close",closeButton:n=!1,...l}=e;return t=(0,v.oU)(t,"modal-header"),(0,j.jsx)(I.A,{ref:a,...l,className:r()(s,t),closeLabel:o,closeButton:n})}));P.displayName="ModalHeader";const T=P;const U=(0,t(27611).A)("h4"),E=b.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:o=U,...n}=e;return s=(0,v.oU)(s,"modal-title"),(0,j.jsx)(o,{ref:a,className:r()(t,s),...n})}));E.displayName="ModalTitle";const O=E;function S(e){return(0,j.jsx)(y.A,{...e,timeout:null})}function z(e){return(0,j.jsx)(y.A,{...e,timeout:null})}const M=b.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,style:o,dialogClassName:y,contentClassName:g,children:w,dialogAs:R=k,"data-bs-theme":F,"aria-labelledby":C,"aria-describedby":I,"aria-label":P,show:T=!1,animation:U=!0,backdrop:E=!0,keyboard:O=!0,onEscapeKeyDown:M,onShow:L,onHide:D,container:V,autoFocus:H=!0,enforceFocus:B=!0,restoreFocus:G=!0,restoreFocusOptions:W,onEntered:_,onExit:K,onExiting:J,onEnter:q,onEntering:Q,onExited:X,backdropClassName:Y,manager:Z,...$}=e;const[ee,ae]=(0,b.useState)({}),[te,se]=(0,b.useState)(!1),oe=(0,b.useRef)(!1),re=(0,b.useRef)(!1),ne=(0,b.useRef)(null),[le,ce]=(0,f.A)(),ie=(0,u.A)(a,ce),de=(0,m.A)(D),fe=(0,v.Wz)();t=(0,v.oU)(t,"modal");const me=(0,b.useMemo)((()=>({onHide:de})),[de]);function ue(){return Z||(0,h.R)({isRTL:fe})}function pe(e){if(!l.A)return;const a=ue().getScrollbarWidth()>0,t=e.scrollHeight>(0,c.A)(e).documentElement.clientHeight;ae({paddingRight:a&&!t?d():void 0,paddingLeft:!a&&t?d():void 0})}const xe=(0,m.A)((()=>{le&&pe(le.dialog)}));(0,p.A)((()=>{(0,i.A)(window,"resize",xe),null==ne.current||ne.current()}));const be=()=>{oe.current=!0},Ne=e=>{oe.current&&le&&e.target===le.dialog&&(re.current=!0),oe.current=!1},he=()=>{se(!0),ne.current=(0,x.A)(le.dialog,(()=>{se(!1)}))},ye=e=>{"static"!==E?re.current||e.target!==e.currentTarget?re.current=!1:null==D||D():(e=>{e.target===e.currentTarget&&he()})(e)},ve=(0,b.useCallback)((e=>(0,j.jsx)("div",{...e,className:r()("".concat(t,"-backdrop"),Y,!U&&"show")})),[U,Y,t]),je={...o,...ee};je.display="block";return(0,j.jsx)(A.A.Provider,{value:me,children:(0,j.jsx)(N.A,{show:T,ref:ie,backdrop:E,container:V,keyboard:!0,autoFocus:H,enforceFocus:B,restoreFocus:G,restoreFocusOptions:W,onEscapeKeyDown:e=>{O?null==M||M(e):(e.preventDefault(),"static"===E&&he())},onShow:L,onHide:D,onEnter:(e,a)=>{e&&pe(e),null==q||q(e,a)},onEntering:(e,a)=>{null==Q||Q(e,a),(0,n.Ay)(window,"resize",xe)},onEntered:_,onExit:e=>{null==ne.current||ne.current(),null==K||K(e)},onExiting:J,onExited:e=>{e&&(e.style.display=""),null==X||X(e),(0,i.A)(window,"resize",xe)},manager:ue(),transition:U?S:void 0,backdropTransition:U?z:void 0,renderBackdrop:ve,renderDialog:e=>(0,j.jsx)("div",{role:"dialog",...e,style:je,className:r()(s,t,te&&"".concat(t,"-static"),!U&&"show"),onClick:E?ye:void 0,onMouseUp:Ne,"data-bs-theme":F,"aria-label":P,"aria-labelledby":C,"aria-describedby":I,children:(0,j.jsx)(R,{...$,onMouseDown:be,className:y,contentClassName:g,children:w})})})})}));M.displayName="Modal";const L=Object.assign(M,{Body:w,Header:T,Title:O,Footer:C,Dialog:k,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},95252:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(48738),o=t.n(s),r=t(9950),n=t(44089),l=t(44414);const c=r.forwardRef(((e,a)=>{let{bsPrefix:t,variant:s,animation:r="border",size:c,as:i="div",className:d,...f}=e;t=(0,n.oU)(t,"spinner");const m="".concat(t,"-").concat(r);return(0,l.jsx)(i,{ref:a,...f,className:o()(d,m,c&&"".concat(m,"-").concat(c),s&&"text-".concat(s))})}));c.displayName="Spinner";const i=c},1093:(e,a,t)=>{t.d(a,{A:()=>c});var s=t(48738),o=t.n(s),r=t(9950),n=t(44089),l=t(44414);const c=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,striped:r,bordered:c,borderless:i,hover:d,size:f,variant:m,responsive:u,...p}=e;const x=(0,n.oU)(t,"table"),b=o()(s,x,m&&"".concat(x,"-").concat(m),f&&"".concat(x,"-").concat(f),r&&"".concat(x,"-").concat("string"===typeof r?"striped-".concat(r):"striped"),c&&"".concat(x,"-bordered"),i&&"".concat(x,"-borderless"),d&&"".concat(x,"-hover")),N=(0,l.jsx)("table",{...p,className:b,ref:a});if(u){let e="".concat(x,"-responsive");return"string"===typeof u&&(e="".concat(e,"-").concat(u)),(0,l.jsx)("div",{className:e,children:N})}return N}))}}]);