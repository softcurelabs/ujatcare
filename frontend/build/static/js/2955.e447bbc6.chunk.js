/*! For license information please see 2955.e447bbc6.chunk.js.LICENSE.txt */
(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[2955],{46682:(t,e,n)=>{"use strict";n.d(e,{UI:()=>i,XW:()=>r});var o=n(47313);function i(t,e){let n=0;return o.Children.map(t,(t=>o.isValidElement(t)?e(t,n++):t))}function r(t,e){return o.Children.toArray(t).some((t=>o.isValidElement(t)&&t.type===e))}},88178:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var o=n(72884),i=n.n(o),r=n(75192),a=n.n(r),s=n(47313),c=n(46417);const l={type:a().string,tooltip:a().bool,as:a().elementType},h=s.forwardRef(((t,e)=>{let{as:n="div",className:o,type:r="valid",tooltip:a=!1,...s}=t;return(0,c.jsx)(n,{...s,ref:e,className:i()(o,"".concat(r,"-").concat(a?"tooltip":"feedback"))})}));h.displayName="Feedback",h.propTypes=l;const u=h;var d=n(56084),f=n(5978),p=n(68524);const v=s.forwardRef(((t,e)=>{let{bsPrefix:n,className:o,htmlFor:r,...a}=t;const{controlId:l}=(0,s.useContext)(f.Z);return n=(0,p.vE)(n,"form-check-label"),(0,c.jsx)("label",{...a,ref:e,htmlFor:r||l,className:i()(o,n)})}));v.displayName="FormCheckLabel";const m=v;var _=n(46682);const y=s.forwardRef(((t,e)=>{let{id:n,bsPrefix:o,bsSwitchPrefix:r,inline:a=!1,reverse:l=!1,disabled:h=!1,isValid:v=!1,isInvalid:y=!1,feedbackTooltip:x=!1,feedback:g,feedbackType:w,className:b,style:P,title:E="",type:C="checkbox",label:k,children:N,as:j="input",...D}=t;o=(0,p.vE)(o,"form-check"),r=(0,p.vE)(r,"form-switch");const{controlId:M}=(0,s.useContext)(f.Z),R=(0,s.useMemo)((()=>({controlId:n||M})),[M,n]),T=!N&&null!=k&&!1!==k||(0,_.XW)(N,m),F=(0,c.jsx)(d.Z,{...D,type:"switch"===C?"checkbox":C,ref:e,isValid:v,isInvalid:y,disabled:h,as:j});return(0,c.jsx)(f.Z.Provider,{value:R,children:(0,c.jsx)("div",{style:P,className:i()(b,T&&o,a&&"".concat(o,"-inline"),l&&"".concat(o,"-reverse"),"switch"===C&&r),children:N||(0,c.jsxs)(c.Fragment,{children:[F,T&&(0,c.jsx)(m,{title:E,children:k}),g&&(0,c.jsx)(u,{type:w,tooltip:x,children:g})]})})})}));y.displayName="FormCheck";const x=Object.assign(y,{Input:d.Z,Label:m});n(21024);const g=s.forwardRef(((t,e)=>{let{bsPrefix:n,type:o,size:r,htmlSize:a,id:l,className:h,isValid:u=!1,isInvalid:d=!1,plaintext:v,readOnly:m,as:_="input",...y}=t;const{controlId:x}=(0,s.useContext)(f.Z);return n=(0,p.vE)(n,"form-control"),(0,c.jsx)(_,{...y,type:o,size:a,ref:e,readOnly:m,id:l||x,className:i()(h,v?"".concat(n,"-plaintext"):n,r&&"".concat(n,"-").concat(r),"color"===o&&"".concat(n,"-color"),u&&"is-valid",d&&"is-invalid")})}));g.displayName="FormControl";const w=Object.assign(g,{Feedback:u}),b=s.forwardRef(((t,e)=>{let{className:n,bsPrefix:o,as:r="div",...a}=t;return o=(0,p.vE)(o,"form-floating"),(0,c.jsx)(r,{ref:e,className:i()(n,o),...a})}));b.displayName="FormFloating";const P=b;var E=n(87021),C=n(41709);const k=s.forwardRef(((t,e)=>{let{bsPrefix:n,className:o,id:r,...a}=t;const{controlId:l}=(0,s.useContext)(f.Z);return n=(0,p.vE)(n,"form-range"),(0,c.jsx)("input",{...a,type:"range",ref:e,className:i()(o,n),id:r||l})}));k.displayName="FormRange";const N=k,j=s.forwardRef(((t,e)=>{let{bsPrefix:n,size:o,htmlSize:r,className:a,isValid:l=!1,isInvalid:h=!1,id:u,...d}=t;const{controlId:v}=(0,s.useContext)(f.Z);return n=(0,p.vE)(n,"form-select"),(0,c.jsx)("select",{...d,size:r,ref:e,className:i()(a,n,o&&"".concat(n,"-").concat(o),l&&"is-valid",h&&"is-invalid"),id:u||v})}));j.displayName="FormSelect";const D=j,M=s.forwardRef(((t,e)=>{let{bsPrefix:n,className:o,as:r="small",muted:a,...s}=t;return n=(0,p.vE)(n,"form-text"),(0,c.jsx)(r,{...s,ref:e,className:i()(o,n,a&&"text-muted")})}));M.displayName="FormText";const R=M,T=s.forwardRef(((t,e)=>(0,c.jsx)(x,{...t,ref:e,type:"switch"})));T.displayName="Switch";const F=Object.assign(T,{Input:x.Input,Label:x.Label}),O=s.forwardRef(((t,e)=>{let{bsPrefix:n,className:o,children:r,controlId:a,label:s,...l}=t;return n=(0,p.vE)(n,"form-floating"),(0,c.jsxs)(E.Z,{ref:e,className:i()(o,n),controlId:a,...l,children:[r,(0,c.jsx)("label",{htmlFor:a,children:s})]})}));O.displayName="FloatingLabel";const L=O,I={_ref:a().any,validated:a().bool,as:a().elementType},z=s.forwardRef(((t,e)=>{let{className:n,validated:o,as:r="form",...a}=t;return(0,c.jsx)(r,{...a,ref:e,className:i()(n,o&&"was-validated")})}));z.displayName="Form",z.propTypes=I;const S=Object.assign(z,{Group:E.Z,Control:w,Floating:P,Check:x,Switch:F,Label:C.Z,Text:R,Range:N,Select:D,FloatingLabel:L})},56084:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var o=n(72884),i=n.n(o),r=n(47313),a=n(5978),s=n(68524),c=n(46417);const l=r.forwardRef(((t,e)=>{let{id:n,bsPrefix:o,className:l,type:h="checkbox",isValid:u=!1,isInvalid:d=!1,as:f="input",...p}=t;const{controlId:v}=(0,r.useContext)(a.Z);return o=(0,s.vE)(o,"form-check-input"),(0,c.jsx)(f,{...p,ref:e,type:h,id:n||v,className:i()(l,o,u&&"is-valid",d&&"is-invalid")})}));l.displayName="FormCheckInput";const h=l},87021:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(47313),i=n(5978),r=n(46417);const a=o.forwardRef(((t,e)=>{let{controlId:n,as:a="div",...s}=t;const c=(0,o.useMemo)((()=>({controlId:n})),[n]);return(0,r.jsx)(i.Z.Provider,{value:c,children:(0,r.jsx)(a,{...s,ref:e})})}));a.displayName="FormGroup";const s=a},38394:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var o=n(72884),i=n.n(o),r=n(47313),a=n(68524),s=n(56084),c=n(94354),l=n(46417);const h=r.forwardRef(((t,e)=>{let{className:n,bsPrefix:o,as:r="span",...s}=t;return o=(0,a.vE)(o,"input-group-text"),(0,l.jsx)(r,{ref:e,className:i()(n,o),...s})}));h.displayName="InputGroupText";const u=h,d=r.forwardRef(((t,e)=>{let{bsPrefix:n,size:o,hasValidation:s,className:h,as:u="div",...d}=t;n=(0,a.vE)(n,"input-group");const f=(0,r.useMemo)((()=>({})),[]);return(0,l.jsx)(c.Z.Provider,{value:f,children:(0,l.jsx)(u,{ref:e,...d,className:i()(h,n,o&&"".concat(n,"-").concat(o),s&&"has-validation")})})}));d.displayName="InputGroup";const f=Object.assign(d,{Text:u,Radio:t=>(0,l.jsx)(u,{children:(0,l.jsx)(s.Z,{type:"radio",...t})}),Checkbox:t=>(0,l.jsx)(u,{children:(0,l.jsx)(s.Z,{type:"checkbox",...t})})})},14056:function(t,e,n){var o,i,r,a;t.exports=(o=n(75192),i=n(47313),r=n(83963),a=n(50783),function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),h=o(n(1)),u=n(2),d=o(u),f=o(n(3)),p=o(n(4)),v=function(t){function e(){var t,n,o;r(this,e);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o._sigPad=null,o._excludeOurProps=function(){var t=o.props;return t.canvasProps,t.clearOnResize,i(t,["canvasProps","clearOnResize"])},o.getCanvas=function(){return o._canvas},o.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=o._canvas.width,t.height=o._canvas.height,t.getContext("2d").drawImage(o._canvas,0,0),(0,p.default)(t)},o.getSignaturePad=function(){return o._sigPad},o._checkClearOnResize=function(){o.props.clearOnResize&&o._resizeCanvas()},o._resizeCanvas=function(){var t=o.props.canvasProps||{},e=t.width,n=t.height;if(!e||!n){var i=o._canvas,r=Math.max(window.devicePixelRatio||1,1);e||(i.width=i.offsetWidth*r),n||(i.height=i.offsetHeight*r),i.getContext("2d").scale(r,r),o.clear()}},o.on=function(){return window.addEventListener("resize",o._checkClearOnResize),o._sigPad.on()},o.off=function(){return window.removeEventListener("resize",o._checkClearOnResize),o._sigPad.off()},o.clear=function(){return o._sigPad.clear()},o.isEmpty=function(){return o._sigPad.isEmpty()},o.fromDataURL=function(t,e){return o._sigPad.fromDataURL(t,e)},o.toDataURL=function(t,e){return o._sigPad.toDataURL(t,e)},o.fromData=function(t){return o._sigPad.fromData(t)},o.toData=function(){return o._sigPad.toData()},a(o,n)}return s(e,t),l(e,[{key:"componentDidMount",value:function(){this._sigPad=new f.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return d.default.createElement("canvas",c({ref:function(e){t._canvas=e}},e))}}]),e}(u.Component);v.propTypes={velocityFilterWeight:h.default.number,minWidth:h.default.number,maxWidth:h.default.number,minDistance:h.default.number,dotSize:h.default.oneOfType([h.default.number,h.default.func]),penColor:h.default.string,throttle:h.default.number,onEnd:h.default.func,onBegin:h.default.func,canvasProps:h.default.object,clearOnResize:h.default.bool},v.defaultProps={clearOnResize:!0},e.default=v},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e){t.exports=r},function(t,e){t.exports=a}]))},50783:function(t){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t){var e=t.getContext("2d"),n=t.width,o=t.height,i=e.getImageData(0,0,n,o).data,s=r(!0,n,o,i),c=r(!1,n,o,i),l=a(!0,n,o,i),h=a(!1,n,o,i)-l+1,u=c-s+1,d=e.getImageData(l,s,h,u);return t.width=h,t.height=u,e.clearRect(0,0,h,u),e.putImageData(d,0,0),t}function o(t,e,n,o){return{red:o[4*(n*e+t)],green:o[4*(n*e+t)+1],blue:o[4*(n*e+t)+2],alpha:o[4*(n*e+t)+3]}}function i(t,e,n,i){return o(t,e,n,i).alpha}function r(t,e,n,o){for(var r=t?1:-1,a=t?0:n-1;t?a<n:a>-1;a+=r)for(var s=0;s<e;s++)if(i(s,a,e,o))return a;return null}function a(t,e,n,o){for(var r=t?1:-1,a=t?0:e-1;t?a<e:a>-1;a+=r)for(var s=0;s<n;s++)if(i(a,s,e,o))return a;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}])},83963:(t,e,n)=>{"use strict";function o(t,e,n){this.x=t,this.y=e,this.time=n||(new Date).getTime()}function i(t,e,n,o){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=o}function r(t,e){var n=this,o=e||{};this.velocityFilterWeight=o.velocityFilterWeight||.7,this.minWidth=o.minWidth||.5,this.maxWidth=o.maxWidth||2.5,this.throttle="throttle"in o?o.throttle:16,this.minDistance="minDistance"in o?o.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e,n){var o,i,r,a=null,s=0;n||(n={});var c=function(){s=!1===n.leading?0:Date.now(),a=null,r=t.apply(o,i),a||(o=i=null)};return function(){var l=Date.now();s||!1!==n.leading||(s=l);var h=e-(l-s);return o=this,i=arguments,h<=0||h>e?(a&&(clearTimeout(a),a=null),s=l,r=t.apply(o,i),a||(o=i=null)):a||!1===n.trailing||(a=setTimeout(c,h)),r}}(r.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=o.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=o.penColor||"black",this.backgroundColor=o.backgroundColor||"rgba(0,0,0,0)",this.onBegin=o.onBegin,this.onEnd=o.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===n._canvas&&(t.preventDefault(),n._strokeEnd(t))},this.on()}n.r(e),n.d(e,{default:()=>a}),o.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},o.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},o.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},i.prototype.length=function(){for(var t=0,e=void 0,n=void 0,o=0;o<=10;o+=1){var i=o/10,r=this._point(i,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(i,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){var s=r-e,c=a-n;t+=Math.sqrt(s*s+c*c)}e=r,n=a}return t},i.prototype._point=function(t,e,n,o,i){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+i*t*t*t},r.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=new Image,i=n.ratio||window.devicePixelRatio||1,r=n.width||this._canvas.width/i,a=n.height||this._canvas.height/i;this._reset(),o.src=t,o.onload=function(){e._ctx.drawImage(o,0,0,r,a)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var e;if("image/svg+xml"===t)return this._toSVG();for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return(e=this._canvas).toDataURL.apply(e,[t].concat(o))},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"===typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var e=t.clientX,n=t.clientY,o=this._createPoint(e,n),i=this._data[this._data.length-1],r=i&&i[i.length-1],a=r&&o.distanceTo(r)<this.minDistance;if(!r||!a){var s=this._addPoint(o),c=s.curve,l=s.widths;c&&l&&this._drawCurve(c,l.start,l.end),this._data[this._data.length-1].push({x:o.x,y:o.y,time:o.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var e=this.points.length>2,n=this.points[0];if(!e&&n&&this._drawDot(n),n){var o=this._data[this._data.length-1],i=o[o.length-1];n.equals(i)||o.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"===typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,e,n){var i=this._canvas.getBoundingClientRect();return new o(t-i.left,e-i.top,n||(new Date).getTime())},r.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,o=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,r=new i(e[1],n,o,e[2]),a=this._calculateCurveWidths(r);return e.shift(),{curve:r,widths:a}}return{}},r.prototype._calculateCurveControlPoints=function(t,e,n){var i=t.x-e.x,r=t.y-e.y,a=e.x-n.x,s=e.y-n.y,c=(t.x+e.x)/2,l=(t.y+e.y)/2,h=(e.x+n.x)/2,u=(e.y+n.y)/2,d=Math.sqrt(i*i+r*r),f=Math.sqrt(a*a+s*s),p=f/(d+f),v=h+(c-h)*p,m=u+(l-u)*p,_=e.x-v,y=e.y-m;return{c1:new o(c+_,l+y),c2:new o(h+_,u+y)}},r.prototype._calculateCurveWidths=function(t){var e=t.startPoint,n=t.endPoint,o={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(i);return o.start=this._lastWidth,o.end=r,this._lastVelocity=i,this._lastWidth=r,o},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,e,n){var o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,e,n){var o=this._ctx,i=n-e,r=Math.floor(t.length());o.beginPath();for(var a=0;a<r;a+=1){var s=a/r,c=s*s,l=c*s,h=1-s,u=h*h,d=u*h,f=d*t.startPoint.x;f+=3*u*s*t.control1.x,f+=3*h*c*t.control2.x,f+=l*t.endPoint.x;var p=d*t.startPoint.y;p+=3*u*s*t.control1.y,p+=3*h*c*t.control2.y,p+=l*t.endPoint.y;var v=e+l*i;this._drawPoint(f,p,v)}o.closePath(),o.fill()},r.prototype._drawDot=function(t){var e=this._ctx,n="function"===typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},r.prototype._fromData=function(t,e,n){for(var i=0;i<t.length;i+=1){var r=t[i];if(r.length>1)for(var a=0;a<r.length;a+=1){var s=r[a],c=new o(s.x,s.y,s.time),l=s.color;if(0===a)this.penColor=l,this._reset(),this._addPoint(c);else if(a!==r.length-1){var h=this._addPoint(c),u=h.curve,d=h.widths;u&&d&&e(u,d,l)}}else this._reset(),n(r[0])}},r.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,o=Math.max(window.devicePixelRatio||1,1),i=n.width/o,r=n.height/o,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",n.width),a.setAttributeNS(null,"height",n.height),this._fromData(e,(function(t,e,n){var o=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var i="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);o.setAttribute("d",i),o.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),o.setAttribute("stroke",n),o.setAttribute("fill","none"),o.setAttribute("stroke-linecap","round"),a.appendChild(o)}}),(function(e){var n=document.createElement("circle"),o="function"===typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",o),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),a.appendChild(n)}));var s='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+i+" "+r+'" width="'+i+'" height="'+r+'">',c=a.innerHTML;if(void 0===c){var l=document.createElement("dummy"),h=a.childNodes;l.innerHTML="";for(var u=0;u<h.length;u+=1)l.appendChild(h[u].cloneNode(!0));c=l.innerHTML}return"data:image/svg+xml;base64,"+btoa(s+c+"</svg>")},r.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,(function(t,n){return e._drawCurve(t,n.start,n.end)}),(function(t){return e._drawDot(t)})),this._data=t},r.prototype.toData=function(){return this._data};const a=r}}]);