"use strict";(self.webpackChunkujatcare=self.webpackChunkujatcare||[]).push([[3131],{90581:(e,t,n)=>{n.r(t),n.d(t,{createBrowserHistory:()=>N,createHashHistory:()=>S,createLocation:()=>b,createMemoryHistory:()=>I,createPath:()=>m,locationsAreEqual:()=>w,parsePath:()=>y});var r=n(87462);function a(e){return"/"===e.charAt(0)}function i(e,t){for(var n=t,r=n+1,a=e.length;r<a;n+=1,r+=1)e[n]=e[r];e.pop()}const o=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],s=e&&a(e),c=t&&a(t),l=s||c;if(e&&a(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var f=0,d=o.length;d>=0;d--){var p=o[d];"."===p?i(o,d):".."===p?(i(o,d),f++):f&&(i(o,d),f--)}if(!l)for(;f--;f)o.unshift("..");!l||""===o[0]||o[0]&&a(o[0])||o.unshift("");var h=o.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};function s(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}const c=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"===typeof t||"object"===typeof n){var r=s(t),a=s(n);return r!==t||a!==n?e(r,a):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1};var l=!0,u="Invariant failed";function f(e,t){if(!e){if(l)throw new Error(u);var n="function"===typeof t?t():t,r=n?"".concat(u,": ").concat(n):u;throw new Error(r)}}function d(e){return"/"===e.charAt(0)?e:"/"+e}function p(e){return"/"===e.charAt(0)?e.substr(1):e}function h(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function v(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function y(e){var t=e||"/",n="",r="",a=t.indexOf("#");-1!==a&&(r=t.substr(a),t=t.substr(0,a));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}function m(e){var t=e.pathname,n=e.search,r=e.hash,a=t||"/";return n&&"?"!==n&&(a+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(a+="#"===r.charAt(0)?r:"#"+r),a}function b(e,t,n,a){var i;"string"===typeof e?(i=y(e)).state=t:(void 0===(i=(0,r.Z)({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),a?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=o(i.pathname,a.pathname)):i.pathname=a.pathname:i.pathname||(i.pathname="/"),i}function w(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&c(e.state,t.state)}function x(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,a){if(null!=e){var i="function"===typeof e?e(t,n):e;"string"===typeof i?"function"===typeof r?r(i,a):a(!0):a(!1!==i)}else a(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(e,t){t(window.confirm(e))}var P="popstate",j="hashchange";function k(){try{return window.history.state||{}}catch(e){return{}}}function N(e){void 0===e&&(e={}),g||f(!1);var t=window.history,n=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),a=!(-1===window.navigator.userAgent.indexOf("Trident")),i=e,o=i.forceRefresh,s=void 0!==o&&o,c=i.getUserConfirmation,l=void 0===c?O:c,u=i.keyLength,p=void 0===u?6:u,y=e.basename?v(d(e.basename)):"";function w(e){var t=e||{},n=t.key,r=t.state,a=window.location,i=a.pathname+a.search+a.hash;return y&&(i=h(i,y)),b(i,r,n)}function N(){return Math.random().toString(36).substr(2,p)}var T=x();function C(e){(0,r.Z)(q,e),q.length=t.length,T.notifyListeners(q.location,q.action)}function E(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||S(w(e.state))}function R(){S(w(k()))}var _=!1;function S(e){if(_)_=!1,C();else{T.confirmTransitionTo(e,"POP",l,(function(t){t?C({action:"POP",location:e}):function(e){var t=q.location,n=I.indexOf(t.key);-1===n&&(n=0);var r=I.indexOf(e.key);-1===r&&(r=0);var a=n-r;a&&(_=!0,F(a))}(e)}))}}var A=w(k()),I=[A.key];function L(e){return y+m(e)}function F(e){t.go(e)}var M=0;function Z(e){1===(M+=e)&&1===e?(window.addEventListener(P,E),a&&window.addEventListener(j,R)):0===M&&(window.removeEventListener(P,E),a&&window.removeEventListener(j,R))}var z=!1;var q={length:t.length,action:"POP",location:A,createHref:L,push:function(e,r){var a="PUSH",i=b(e,r,N(),q.location);T.confirmTransitionTo(i,a,l,(function(e){if(e){var r=L(i),o=i.key,c=i.state;if(n)if(t.pushState({key:o,state:c},null,r),s)window.location.href=r;else{var l=I.indexOf(q.location.key),u=I.slice(0,l+1);u.push(i.key),I=u,C({action:a,location:i})}else window.location.href=r}}))},replace:function(e,r){var a="REPLACE",i=b(e,r,N(),q.location);T.confirmTransitionTo(i,a,l,(function(e){if(e){var r=L(i),o=i.key,c=i.state;if(n)if(t.replaceState({key:o,state:c},null,r),s)window.location.replace(r);else{var l=I.indexOf(q.location.key);-1!==l&&(I[l]=i.key),C({action:a,location:i})}else window.location.replace(r)}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(e){void 0===e&&(e=!1);var t=T.setPrompt(e);return z||(Z(1),z=!0),function(){return z&&(z=!1,Z(-1)),t()}},listen:function(e){var t=T.appendListener(e);return Z(1),function(){Z(-1),t()}}};return q}var T="hashchange",C={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+p(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:p,decodePath:d},slash:{encodePath:d,decodePath:d}};function E(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function R(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function _(e){window.location.replace(E(window.location.href)+"#"+e)}function S(e){void 0===e&&(e={}),g||f(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),a=n.getUserConfirmation,i=void 0===a?O:a,o=n.hashType,s=void 0===o?"slash":o,c=e.basename?v(d(e.basename)):"",l=C[s],u=l.encodePath,p=l.decodePath;function y(){var e=p(R());return c&&(e=h(e,c)),b(e)}var w=x();function P(e){(0,r.Z)(q,e),q.length=t.length,w.notifyListeners(q.location,q.action)}var j=!1,k=null;function N(){var e,t,n=R(),r=u(n);if(n!==r)_(r);else{var a=y(),o=q.location;if(!j&&(t=a,(e=o).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(k===m(a))return;k=null,function(e){if(j)j=!1,P();else{var t="POP";w.confirmTransitionTo(e,t,i,(function(n){n?P({action:t,location:e}):function(e){var t=q.location,n=L.lastIndexOf(m(t));-1===n&&(n=0);var r=L.lastIndexOf(m(e));-1===r&&(r=0);var a=n-r;a&&(j=!0,F(a))}(e)}))}}(a)}}var S=R(),A=u(S);S!==A&&_(A);var I=y(),L=[m(I)];function F(e){t.go(e)}var M=0;function Z(e){1===(M+=e)&&1===e?window.addEventListener(T,N):0===M&&window.removeEventListener(T,N)}var z=!1;var q={length:t.length,action:"POP",location:I,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=E(window.location.href)),n+"#"+u(c+m(e))},push:function(e,t){var n="PUSH",r=b(e,void 0,void 0,q.location);w.confirmTransitionTo(r,n,i,(function(e){if(e){var t=m(r),a=u(c+t);if(R()!==a){k=t,function(e){window.location.hash=e}(a);var i=L.lastIndexOf(m(q.location)),o=L.slice(0,i+1);o.push(t),L=o,P({action:n,location:r})}else P()}}))},replace:function(e,t){var n="REPLACE",r=b(e,void 0,void 0,q.location);w.confirmTransitionTo(r,n,i,(function(e){if(e){var t=m(r),a=u(c+t);R()!==a&&(k=t,_(a));var i=L.indexOf(m(q.location));-1!==i&&(L[i]=t),P({action:n,location:r})}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(e){void 0===e&&(e=!1);var t=w.setPrompt(e);return z||(Z(1),z=!0),function(){return z&&(z=!1,Z(-1)),t()}},listen:function(e){var t=w.appendListener(e);return Z(1),function(){Z(-1),t()}}};return q}function A(e,t,n){return Math.min(Math.max(e,t),n)}function I(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,a=t.initialEntries,i=void 0===a?["/"]:a,o=t.initialIndex,s=void 0===o?0:o,c=t.keyLength,l=void 0===c?6:c,u=x();function f(e){(0,r.Z)(w,e),w.length=w.entries.length,u.notifyListeners(w.location,w.action)}function d(){return Math.random().toString(36).substr(2,l)}var p=A(s,0,i.length-1),h=i.map((function(e){return b(e,void 0,"string"===typeof e?d():e.key||d())})),v=m;function y(e){var t=A(w.index+e,0,w.entries.length-1),r=w.entries[t];u.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var w={length:h.length,action:"POP",location:h[p],index:p,entries:h,createHref:v,push:function(e,t){var r="PUSH",a=b(e,t,d(),w.location);u.confirmTransitionTo(a,r,n,(function(e){if(e){var t=w.index+1,n=w.entries.slice(0);n.length>t?n.splice(t,n.length-t,a):n.push(a),f({action:r,location:a,index:t,entries:n})}}))},replace:function(e,t){var r="REPLACE",a=b(e,t,d(),w.location);u.confirmTransitionTo(a,r,n,(function(e){e&&(w.entries[w.index]=a,f({action:r,location:a}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(e){var t=w.index+e;return t>=0&&t<w.entries.length},block:function(e){return void 0===e&&(e=!1),u.setPrompt(e)},listen:function(e){return u.appendListener(e)}};return w}},43256:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(47313),o=c(i),s=c(n(75192));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentWillMount",value:function(){var e=o.default.Children.map(this.props.children,(function(e){var t=e.props;t.children,t.render;return function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children","render"])}));this.context.wizard.init(e)}},{key:"render",value:function(){var e=(this.props.step||this.context.wizard.step).id,t=o.default.Children.toArray(this.props.children).filter((function(t){return t.props.id===e})),n=r(t,1)[0];return void 0===n?null:n}}]),t}(i.Component);l.propTypes={children:s.default.node.isRequired,step:s.default.shape({id:s.default.string.isRequired})},l.defaultProps={step:null},l.contextTypes={wizard:s.default.object},t.default=l},13378:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(47313),s=u(n(75192)),c=n(90581),l=u(n(18346));function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={step:{id:null},steps:[]},r.history=r.props.history||(0,c.createMemoryHistory)(),r.steps=[],r.pathToStep=function(e){var t=e.replace(r.basename,""),n=r.state.steps.filter((function(e){return e.id===t}));return a(n,1)[0]||r.state.step},r.init=function(e){r.setState({steps:e},(function(){var e=r.pathToStep(r.history.location.pathname);e.id?r.setState({step:e}):r.history.replace(""+r.basename+r.ids[0])}))},r.push=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.nextStep;return r.history.push(""+r.basename+e)},r.replace=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.nextStep;return r.history.replace(""+r.basename+e)},r.next=function(){r.props.onNext?r.props.onNext(r.getChildContext().wizard):r.push()},d(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getChildContext",value:function(){return{wizard:r({go:this.history.go,history:this.history,init:this.init,next:this.next,previous:this.history.goBack,push:this.push,replace:this.replace},this.state)}}},{key:"componentWillMount",value:function(){var e=this;if(this.unlisten=this.history.listen((function(t){var n=t.pathname;return e.setState({step:e.pathToStep(n)})})),this.props.onNext){var t=this.getChildContext().wizard,n=(t.init,f(t,["init"]));this.props.onNext(n)}}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){var e=this.getChildContext().wizard,t=(e.init,f(e,["init"]));return(0,l.default)(this.props,t)}},{key:"basename",get:function(){return this.props.basename+"/"}},{key:"ids",get:function(){return this.state.steps.map((function(e){return e.id}))}},{key:"nextStep",get:function(){return this.ids[this.ids.indexOf(this.state.step.id)+1]}}]),t}(o.Component);p.propTypes={basename:s.default.string,history:s.default.shape({entries:s.default.array,go:s.default.func,goBack:s.default.func,listen:s.default.func,location:s.default.object,push:s.default.func,replace:s.default.func}),onNext:s.default.func},p.defaultProps={basename:"",history:null,onNext:null,render:null},p.childContextTypes={wizard:s.default.object},t.default=p},22405:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(75192)),a=i(n(18346));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(e,t){var n=t.wizard,r=(n.init,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["init"]));return(0,a.default)(e,r)};return t.contextTypes={wizard:r.default.object},t.displayName=e,t}},98641:(e,t,n)=>{t.Rg=t.en=t.h8=void 0;var r=c(n(22405)),a=c(n(13378)),i=c(n(43256)),o=c(n(16111)),s=c(n(87020));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("Step"),u=(0,r.default)("WithWizard");t.h8=l,t.en=a.default,t.Rg=i.default,o.default,s.default},18346:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n=e.render,r=e.children;return n?n(t):"function"===typeof r?r(t):r}},16111:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n(47313)),i=s(n(75192)),o=s(n(3562));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t,n){var i=n.wizard,o=(i.init,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(i,["init"]));return a.default.createElement(e,r({wizard:o},t))};return t.contextTypes={wizard:i.default.object},t.displayName="withWizard("+(e.displayName||e.name)+")",t.WrappedComponent=e,(0,o.default)(t,e)}},87020:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(75192),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default.shape({go:i.default.func.isRequired,history:i.default.object.isRequired,next:i.default.func.isRequired,previous:i.default.func.isRequired,push:i.default.func.isRequired,replace:i.default.func.isRequired,step:i.default.shape({id:i.default.string.isRequired}).isRequired,steps:i.default.arrayOf(i.default.shape({id:i.default.string.isRequired}).isRequired).isRequired})},3562:e=>{var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(l,u,f){if("string"!==typeof u){if(c){var d=s(u);d&&d!==c&&e(l,d,f)}var p=a(u);i&&(p=p.concat(i(u)));for(var h=0;h<p.length;++h){var v=p[h];if(!t[v]&&!n[v]&&(!f||!f[v])){var y=o(u,v);try{r(l,v,y)}catch(m){}}}return l}return l}},46682:(e,t,n)=>{n.d(t,{UI:()=>a,XW:()=>i});var r=n(47313);function a(e,t){let n=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,n++):e))}function i(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}},88178:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(72884),a=n.n(r),i=n(75192),o=n.n(i),s=n(47313),c=n(46417);const l={type:o().string,tooltip:o().bool,as:o().elementType},u=s.forwardRef(((e,t)=>{let{as:n="div",className:r,type:i="valid",tooltip:o=!1,...s}=e;return(0,c.jsx)(n,{...s,ref:t,className:a()(r,"".concat(i,"-").concat(o?"tooltip":"feedback"))})}));u.displayName="Feedback",u.propTypes=l;const f=u;var d=n(56084),p=n(5978),h=n(68524);const v=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,htmlFor:i,...o}=e;const{controlId:l}=(0,s.useContext)(p.Z);return n=(0,h.vE)(n,"form-check-label"),(0,c.jsx)("label",{...o,ref:t,htmlFor:i||l,className:a()(r,n)})}));v.displayName="FormCheckLabel";const y=v;var m=n(46682);const b=s.forwardRef(((e,t)=>{let{id:n,bsPrefix:r,bsSwitchPrefix:i,inline:o=!1,reverse:l=!1,disabled:u=!1,isValid:v=!1,isInvalid:b=!1,feedbackTooltip:w=!1,feedback:x,feedbackType:g,className:O,style:P,title:j="",type:k="checkbox",label:N,children:T,as:C="input",...E}=e;r=(0,h.vE)(r,"form-check"),i=(0,h.vE)(i,"form-switch");const{controlId:R}=(0,s.useContext)(p.Z),_=(0,s.useMemo)((()=>({controlId:n||R})),[R,n]),S=!T&&null!=N&&!1!==N||(0,m.XW)(T,y),A=(0,c.jsx)(d.Z,{...E,type:"switch"===k?"checkbox":k,ref:t,isValid:v,isInvalid:b,disabled:u,as:C});return(0,c.jsx)(p.Z.Provider,{value:_,children:(0,c.jsx)("div",{style:P,className:a()(O,S&&r,o&&"".concat(r,"-inline"),l&&"".concat(r,"-reverse"),"switch"===k&&i),children:T||(0,c.jsxs)(c.Fragment,{children:[A,S&&(0,c.jsx)(y,{title:j,children:N}),x&&(0,c.jsx)(f,{type:g,tooltip:w,children:x})]})})})}));b.displayName="FormCheck";const w=Object.assign(b,{Input:d.Z,Label:y});n(21024);const x=s.forwardRef(((e,t)=>{let{bsPrefix:n,type:r,size:i,htmlSize:o,id:l,className:u,isValid:f=!1,isInvalid:d=!1,plaintext:v,readOnly:y,as:m="input",...b}=e;const{controlId:w}=(0,s.useContext)(p.Z);return n=(0,h.vE)(n,"form-control"),(0,c.jsx)(m,{...b,type:r,size:o,ref:t,readOnly:y,id:l||w,className:a()(u,v?"".concat(n,"-plaintext"):n,i&&"".concat(n,"-").concat(i),"color"===r&&"".concat(n,"-color"),f&&"is-valid",d&&"is-invalid")})}));x.displayName="FormControl";const g=Object.assign(x,{Feedback:f}),O=s.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...o}=e;return r=(0,h.vE)(r,"form-floating"),(0,c.jsx)(i,{ref:t,className:a()(n,r),...o})}));O.displayName="FormFloating";const P=O;var j=n(87021),k=n(41709);const N=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,id:i,...o}=e;const{controlId:l}=(0,s.useContext)(p.Z);return n=(0,h.vE)(n,"form-range"),(0,c.jsx)("input",{...o,type:"range",ref:t,className:a()(r,n),id:i||l})}));N.displayName="FormRange";const T=N,C=s.forwardRef(((e,t)=>{let{bsPrefix:n,size:r,htmlSize:i,className:o,isValid:l=!1,isInvalid:u=!1,id:f,...d}=e;const{controlId:v}=(0,s.useContext)(p.Z);return n=(0,h.vE)(n,"form-select"),(0,c.jsx)("select",{...d,size:i,ref:t,className:a()(o,n,r&&"".concat(n,"-").concat(r),l&&"is-valid",u&&"is-invalid"),id:f||v})}));C.displayName="FormSelect";const E=C,R=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i="small",muted:o,...s}=e;return n=(0,h.vE)(n,"form-text"),(0,c.jsx)(i,{...s,ref:t,className:a()(r,n,o&&"text-muted")})}));R.displayName="FormText";const _=R,S=s.forwardRef(((e,t)=>(0,c.jsx)(w,{...e,ref:t,type:"switch"})));S.displayName="Switch";const A=Object.assign(S,{Input:w.Input,Label:w.Label}),I=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,controlId:o,label:s,...l}=e;return n=(0,h.vE)(n,"form-floating"),(0,c.jsxs)(j.Z,{ref:t,className:a()(r,n),controlId:o,...l,children:[i,(0,c.jsx)("label",{htmlFor:o,children:s})]})}));I.displayName="FloatingLabel";const L=I,F={_ref:o().any,validated:o().bool,as:o().elementType},M=s.forwardRef(((e,t)=>{let{className:n,validated:r,as:i="form",...o}=e;return(0,c.jsx)(i,{...o,ref:t,className:a()(n,r&&"was-validated")})}));M.displayName="Form",M.propTypes=F;const Z=Object.assign(M,{Group:j.Z,Control:g,Floating:P,Check:w,Switch:A,Label:k.Z,Text:_,Range:T,Select:E,FloatingLabel:L})},56084:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(72884),a=n.n(r),i=n(47313),o=n(5978),s=n(68524),c=n(46417);const l=i.forwardRef(((e,t)=>{let{id:n,bsPrefix:r,className:l,type:u="checkbox",isValid:f=!1,isInvalid:d=!1,as:p="input",...h}=e;const{controlId:v}=(0,i.useContext)(o.Z);return r=(0,s.vE)(r,"form-check-input"),(0,c.jsx)(p,{...h,ref:t,type:u,id:n||v,className:a()(l,r,f&&"is-valid",d&&"is-invalid")})}));l.displayName="FormCheckInput";const u=l},87021:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(47313),a=n(5978),i=n(46417);const o=r.forwardRef(((e,t)=>{let{controlId:n,as:o="div",...s}=e;const c=(0,r.useMemo)((()=>({controlId:n})),[n]);return(0,i.jsx)(a.Z.Provider,{value:c,children:(0,i.jsx)(o,{...s,ref:t})})}));o.displayName="FormGroup";const s=o},38394:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(72884),a=n.n(r),i=n(47313),o=n(68524),s=n(56084),c=n(94354),l=n(46417);const u=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="span",...s}=e;return r=(0,o.vE)(r,"input-group-text"),(0,l.jsx)(i,{ref:t,className:a()(n,r),...s})}));u.displayName="InputGroupText";const f=u,d=i.forwardRef(((e,t)=>{let{bsPrefix:n,size:r,hasValidation:s,className:u,as:f="div",...d}=e;n=(0,o.vE)(n,"input-group");const p=(0,i.useMemo)((()=>({})),[]);return(0,l.jsx)(c.Z.Provider,{value:p,children:(0,l.jsx)(f,{ref:t,...d,className:a()(u,n,r&&"".concat(n,"-").concat(r),s&&"has-validation")})})}));d.displayName="InputGroup";const p=Object.assign(d,{Text:f,Radio:e=>(0,l.jsx)(f,{children:(0,l.jsx)(s.Z,{type:"radio",...e})}),Checkbox:e=>(0,l.jsx)(f,{children:(0,l.jsx)(s.Z,{type:"checkbox",...e})})})},71587:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(72884),a=n.n(r),i=n(47313),o=n(68524),s=n(46682),c=n(46417);const l=1e3;function u(e,t,n){const r=(e-t)/(n-t)*100;return Math.round(r*l)/l}function f(e,t){let{min:n,now:r,max:i,label:o,visuallyHidden:s,striped:l,animated:f,className:d,style:p,variant:h,bsPrefix:v,...y}=e;return(0,c.jsx)("div",{ref:t,...y,role:"progressbar",className:a()(d,"".concat(v,"-bar"),{["bg-".concat(h)]:h,["".concat(v,"-bar-animated")]:f,["".concat(v,"-bar-striped")]:f||l}),style:{width:"".concat(u(r,n,i),"%"),...p},"aria-valuenow":r,"aria-valuemin":n,"aria-valuemax":i,children:s?(0,c.jsx)("span",{className:"visually-hidden",children:o}):o})}const d=i.forwardRef(((e,t)=>{let{isChild:n=!1,...r}=e;const l={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...r};if(l.bsPrefix=(0,o.vE)(l.bsPrefix,"progress"),n)return f(l,t);const{min:u,now:d,max:p,label:h,visuallyHidden:v,striped:y,animated:m,bsPrefix:b,variant:w,className:x,children:g,...O}=l;return(0,c.jsx)("div",{ref:t,...O,className:a()(x,b),children:g?(0,s.UI)(g,(e=>(0,i.cloneElement)(e,{isChild:!0}))):f({min:u,now:d,max:p,label:h,visuallyHidden:v,striped:y,animated:m,bsPrefix:b,variant:w},t)})}));d.displayName="ProgressBar";const p=d}}]);