"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[175],{59395:(e,t,n)=>{n.d(t,{kZ:()=>w});var r=n(28630),o=n(10318),i=n(21032),a=n(39200);var s=n(97315),f=n(64188),c=n(12076),u=n(34390),d=n(74996);function p(e,t,n){void 0===n&&(n=!1);var p=(0,a.Re)(t),l=(0,a.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=(0,d.NM)(t.width)/e.offsetWidth||1,r=(0,d.NM)(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),v=(0,c.Z)(t),h=(0,r.Z)(e,l,n),m={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(p||!p&&!n)&&(("body"!==(0,s.Z)(t)||(0,u.Z)(v))&&(m=function(e){return e!==(0,i.Z)(e)&&(0,a.Re)(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:(0,o.Z)(e);var t}(t)),(0,a.Re)(t)?((Z=(0,r.Z)(t,!0)).x+=t.clientLeft,Z.y+=t.clientTop):v&&(Z.x=(0,f.Z)(v))),{x:h.left+m.scrollLeft-Z.x,y:h.top+m.scrollTop-Z.y,width:h.width,height:h.height}}var l=n(36676),v=n(88710),h=n(79470),m=n(79737);function Z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function g(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var y={placement:"bottom",modifiers:[],strategy:"absolute"};function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function w(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?y:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},y,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,c={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:(0,a.kK)(e)?(0,v.Z)(e):e.contextElement?(0,v.Z)(e.contextElement):[],popper:(0,v.Z)(t)};var d=function(e){var t=Z(e);return m.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=d.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:c,options:r}),f=function(){};s.push(a||f)}})),c.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(b(t,n)){o.rects={reference:p(t,(0,h.Z)(n),"fixed"===o.options.strategy),popper:(0,l.Z)(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,u=void 0===s?{}:s,d=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:d,instance:c})||o)}else o.reset=!1,r=-1}}},update:g((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),f=!0}};if(!b(e,t))return c;function u(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}},76818:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(39200);function o(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},28630:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(39200),o=n(74996),i=n(21032),a=n(68376);function s(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var s=e.getBoundingClientRect(),f=1,c=1;t&&(0,r.Re)(e)&&(f=e.offsetWidth>0&&(0,o.NM)(s.width)/e.offsetWidth||1,c=e.offsetHeight>0&&(0,o.NM)(s.height)/e.offsetHeight||1);var u=((0,r.kK)(e)?(0,i.Z)(e):window).visualViewport,d=!(0,a.Z)()&&n,p=(s.left+(d&&u?u.offsetLeft:0))/f,l=(s.top+(d&&u?u.offsetTop:0))/c,v=s.width/f,h=s.height/c;return{width:v,height:h,top:l,right:p+v,bottom:l+h,left:p,x:p,y:l}}},5724:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(21032);function o(e){return(0,r.Z)(e).getComputedStyle(e)}},12076:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(39200);function o(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},36676:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(28630);function o(e){var t=(0,r.Z)(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}},97315:(e,t,n)=>{function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:()=>r})},79470:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(21032),o=n(97315),i=n(5724),a=n(39200);function s(e){return["table","td","th"].indexOf((0,o.Z)(e))>=0}var f=n(72295),c=n(44010);function u(e){return(0,a.Re)(e)&&"fixed"!==(0,i.Z)(e).position?e.offsetParent:null}function d(e){for(var t=(0,r.Z)(e),n=u(e);n&&s(n)&&"static"===(0,i.Z)(n).position;)n=u(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?t:n||function(e){var t=/firefox/i.test((0,c.Z)());if(/Trident/i.test((0,c.Z)())&&(0,a.Re)(e)&&"fixed"===(0,i.Z)(e).position)return null;var n=(0,f.Z)(e);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}},72295:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(97315),o=n(12076),i=n(39200);function a(e){return"html"===(0,r.Z)(e)?e:e.assignedSlot||e.parentNode||((0,i.Zq)(e)?e.host:null)||(0,o.Z)(e)}},21032:(e,t,n)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:()=>r})},10318:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(21032);function o(e){var t=(0,r.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},64188:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(28630),o=n(12076),i=n(10318);function a(e){return(0,r.Z)((0,o.Z)(e)).left+(0,i.Z)(e).scrollLeft}},39200:(e,t,n)=>{n.d(t,{Re:()=>i,Zq:()=>a,kK:()=>o});var r=n(21032);function o(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!==typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},68376:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(44010);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},34390:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(5724);function o(e){var t=(0,r.Z)(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},88710:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(72295),o=n(34390),i=n(97315),a=n(39200);function s(e){return["html","body","#document"].indexOf((0,i.Z)(e))>=0?e.ownerDocument.body:(0,a.Re)(e)&&(0,o.Z)(e)?e:s((0,r.Z)(e))}var f=n(21032);function c(e,t){var n;void 0===t&&(t=[]);var i=s(e),a=i===(null==(n=e.ownerDocument)?void 0:n.body),u=(0,f.Z)(i),d=a?[u].concat(u.visualViewport||[],(0,o.Z)(i)?i:[]):i,p=t.concat(d);return a?p:p.concat(c((0,r.Z)(d)))}},79737:(e,t,n)=>{n.d(t,{BL:()=>c,Ct:()=>m,F2:()=>i,I:()=>o,Pj:()=>p,YP:()=>v,bw:()=>h,d7:()=>s,k5:()=>l,mv:()=>f,t$:()=>a,ut:()=>u,we:()=>r,xs:()=>Z,zV:()=>d});var r="top",o="bottom",i="right",a="left",s="auto",f=[r,o,i,a],c="start",u="end",d="clippingParents",p="viewport",l="popper",v="reference",h=f.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),m=[].concat(f,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),Z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},74506:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(51878),o=n(36676),i=n(76818),a=n(79470),s=n(73509),f=n(93629),c=n(3500),u=n(40338),d=n(79737);const p={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,p=e.options,l=n.elements.arrow,v=n.modifiersData.popperOffsets,h=(0,r.Z)(n.placement),m=(0,s.Z)(h),Z=[d.t$,d.F2].indexOf(h)>=0?"height":"width";if(l&&v){var g=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,c.Z)("number"!==typeof e?e:(0,u.Z)(e,d.mv))}(p.padding,n),y=(0,o.Z)(l),b="y"===m?d.we:d.t$,w="y"===m?d.I:d.F2,x=n.rects.reference[Z]+n.rects.reference[m]-v[m]-n.rects.popper[Z],O=v[m]-n.rects.reference[m],k=(0,a.Z)(l),j=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0,D=x/2-O/2,E=g[b],L=j-y[Z]-g[w],R=j/2-y[Z]/2+D,A=(0,f.u)(E,R,L),M=m;n.modifiersData[i]=((t={})[M]=A,t.centerOffset=A-R,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&(0,i.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},74450:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(79737),o=n(79470),i=n(21032),a=n(12076),s=n(5724),f=n(51878),c=n(40058),u=n(74996),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};function p(e){var t,n=e.popper,f=e.popperRect,c=e.placement,p=e.variation,l=e.offsets,v=e.position,h=e.gpuAcceleration,m=e.adaptive,Z=e.roundOffsets,g=e.isFixed,y=l.x,b=void 0===y?0:y,w=l.y,x=void 0===w?0:w,O="function"===typeof Z?Z({x:b,y:x}):{x:b,y:x};b=O.x,x=O.y;var k=l.hasOwnProperty("x"),j=l.hasOwnProperty("y"),D=r.t$,E=r.we,L=window;if(m){var R=(0,o.Z)(n),A="clientHeight",M="clientWidth";if(R===(0,i.Z)(n)&&(R=(0,a.Z)(n),"static"!==(0,s.Z)(R).position&&"absolute"===v&&(A="scrollHeight",M="scrollWidth")),c===r.we||(c===r.t$||c===r.F2)&&p===r.ut)E=r.I,x-=(g&&R===L&&L.visualViewport?L.visualViewport.height:R[A])-f.height,x*=h?1:-1;if(c===r.t$||(c===r.we||c===r.I)&&p===r.ut)D=r.F2,b-=(g&&R===L&&L.visualViewport?L.visualViewport.width:R[M])-f.width,b*=h?1:-1}var F,P=Object.assign({position:v},m&&d),V=!0===Z?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:(0,u.NM)(n*o)/o||0,y:(0,u.NM)(r*o)/o||0}}({x:b,y:x},(0,i.Z)(n)):{x:b,y:x};return b=V.x,x=V.y,h?Object.assign({},P,((F={})[E]=j?"0":"",F[D]=k?"0":"",F.transform=(L.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",F)):Object.assign({},P,((t={})[E]=j?x+"px":"",t[D]=k?b+"px":"",t.transform="",t))}const l={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,d={placement:(0,f.Z)(t.placement),variation:(0,c.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,p(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,p(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},87851:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(21032),o={passive:!0};const i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,a=i.scroll,s=void 0===a||a,f=i.resize,c=void 0===f||f,u=(0,r.Z)(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach((function(e){e.addEventListener("scroll",n.update,o)})),c&&u.addEventListener("resize",n.update,o),function(){s&&d.forEach((function(e){e.removeEventListener("scroll",n.update,o)})),c&&u.removeEventListener("resize",n.update,o)}},data:{}}},27205:(e,t,n)=>{n.d(t,{Z:()=>d});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(e){return e.replace(/left|right|bottom|top/g,(function(e){return r[e]}))}var i=n(51878),a={start:"end",end:"start"};function s(e){return e.replace(/start|end/g,(function(e){return a[e]}))}var f=n(56887),c=n(40058),u=n(79737);const d={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,d=void 0===a||a,p=n.altAxis,l=void 0===p||p,v=n.fallbackPlacements,h=n.padding,m=n.boundary,Z=n.rootBoundary,g=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,x=t.options.placement,O=(0,i.Z)(x),k=v||(O===x||!b?[o(x)]:function(e){if((0,i.Z)(e)===u.d7)return[];var t=o(e);return[s(e),t,s(t)]}(x)),j=[x].concat(k).reduce((function(e,n){return e.concat((0,i.Z)(n)===u.d7?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,d=n.flipVariations,p=n.allowedAutoPlacements,l=void 0===p?u.Ct:p,v=(0,c.Z)(r),h=v?d?u.bw:u.bw.filter((function(e){return(0,c.Z)(e)===v})):u.mv,m=h.filter((function(e){return l.indexOf(e)>=0}));0===m.length&&(m=h);var Z=m.reduce((function(t,n){return t[n]=(0,f.Z)(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[(0,i.Z)(n)],t}),{});return Object.keys(Z).sort((function(e,t){return Z[e]-Z[t]}))}(t,{placement:n,boundary:m,rootBoundary:Z,padding:h,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),D=t.rects.reference,E=t.rects.popper,L=new Map,R=!0,A=j[0],M=0;M<j.length;M++){var F=j[M],P=(0,i.Z)(F),V=(0,c.Z)(F)===u.BL,B=[u.we,u.I].indexOf(P)>=0,W=B?"width":"height",H=(0,f.Z)(t,{placement:F,boundary:m,rootBoundary:Z,altBoundary:g,padding:h}),I=B?V?u.F2:u.t$:V?u.I:u.we;D[W]>E[W]&&(I=o(I));var q=o(I),C=[];if(d&&C.push(H[P]<=0),l&&C.push(H[I]<=0,H[q]<=0),C.every((function(e){return e}))){A=F,R=!1;break}L.set(F,C)}if(R)for(var T=function(e){var t=j.find((function(t){var n=L.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},N=b?3:1;N>0;N--){if("break"===T(N))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},3547:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(79737),o=n(56887);function i(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function a(e){return[r.we,r.F2,r.I,r.t$].some((function(t){return e[t]>=0}))}const s={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,f=t.modifiersData.preventOverflow,c=(0,o.Z)(t,{elementContext:"reference"}),u=(0,o.Z)(t,{altBoundary:!0}),d=i(c,r),p=i(u,s,f),l=a(d),v=a(p);t.modifiersData[n]={referenceClippingOffsets:d,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}}},58222:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(51878),o=n(79737);const i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,s=void 0===a?[0,0]:a,f=o.Ct.reduce((function(e,n){return e[n]=function(e,t,n){var i=(0,r.Z)(e),a=[o.t$,o.we].indexOf(i)>=0?-1:1,s="function"===typeof n?n(Object.assign({},t,{placement:e})):n,f=s[0],c=s[1];return f=f||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:f}:{x:f,y:c}}(n,t.rects,s),e}),{}),c=f[t.placement],u=c.x,d=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=f}}},88825:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9996);const o={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,r.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},44114:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(79737),o=n(51878),i=n(73509);var a=n(93629),s=n(36676),f=n(79470),c=n(56887),u=n(40058),d=n(45030),p=n(74996);const l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,l=e.name,v=n.mainAxis,h=void 0===v||v,m=n.altAxis,Z=void 0!==m&&m,g=n.boundary,y=n.rootBoundary,b=n.altBoundary,w=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,j=void 0===k?0:k,D=(0,c.Z)(t,{boundary:g,rootBoundary:y,padding:w,altBoundary:b}),E=(0,o.Z)(t.placement),L=(0,u.Z)(t.placement),R=!L,A=(0,i.Z)(E),M="x"===A?"y":"x",F=t.modifiersData.popperOffsets,P=t.rects.reference,V=t.rects.popper,B="function"===typeof j?j(Object.assign({},t.rects,{placement:t.placement})):j,W="number"===typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(F){if(h){var q,C="y"===A?r.we:r.t$,T="y"===A?r.I:r.F2,N="y"===A?"height":"width",$=F[A],S=$+D[C],K=$-D[T],z=O?-V[N]/2:0,_=L===r.BL?P[N]:V[N],U=L===r.BL?-V[N]:-P[N],Y=t.elements.arrow,X=O&&Y?(0,s.Z)(Y):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,d.Z)(),J=G[C],Q=G[T],ee=(0,a.u)(0,P[N],X[N]),te=R?P[N]/2-z-ee-J-W.mainAxis:_-ee-J-W.mainAxis,ne=R?-P[N]/2+z+ee+Q+W.mainAxis:U+ee+Q+W.mainAxis,re=t.elements.arrow&&(0,f.Z)(t.elements.arrow),oe=re?"y"===A?re.clientTop||0:re.clientLeft||0:0,ie=null!=(q=null==H?void 0:H[A])?q:0,ae=$+te-ie-oe,se=$+ne-ie,fe=(0,a.u)(O?(0,p.VV)(S,ae):S,$,O?(0,p.Fp)(K,se):K);F[A]=fe,I[A]=fe-$}if(Z){var ce,ue="x"===A?r.we:r.t$,de="x"===A?r.I:r.F2,pe=F[M],le="y"===M?"height":"width",ve=pe+D[ue],he=pe-D[de],me=-1!==[r.we,r.t$].indexOf(E),Ze=null!=(ce=null==H?void 0:H[M])?ce:0,ge=me?ve:pe-P[le]-V[le]-Ze+W.altAxis,ye=me?pe+P[le]+V[le]-Ze-W.altAxis:he,be=O&&me?(0,a.q)(ge,pe,ye):(0,a.u)(O?ge:ve,pe,O?ye:he);F[M]=be,I[M]=be-pe}t.modifiersData[l]=I}},requiresIfExists:["offset"]}},9996:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(51878),o=n(40058),i=n(73509),a=n(79737);function s(e){var t,n=e.reference,s=e.element,f=e.placement,c=f?(0,r.Z)(f):null,u=f?(0,o.Z)(f):null,d=n.x+n.width/2-s.width/2,p=n.y+n.height/2-s.height/2;switch(c){case a.we:t={x:d,y:n.y-s.height};break;case a.I:t={x:d,y:n.y+n.height};break;case a.F2:t={x:n.x+n.width,y:p};break;case a.t$:t={x:n.x-s.width,y:p};break;default:t={x:n.x,y:n.y}}var l=c?(0,i.Z)(c):null;if(null!=l){var v="y"===l?"height":"width";switch(u){case a.BL:t[l]=t[l]-(n[v]/2-s[v]/2);break;case a.ut:t[l]=t[l]+(n[v]/2-s[v]/2)}}return t}},56887:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(79737),o=n(21032),i=n(12076),a=n(64188),s=n(68376);var f=n(5724),c=n(10318),u=n(74996);var d=n(88710),p=n(79470),l=n(39200),v=n(28630),h=n(72295),m=n(76818),Z=n(97315);function g(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function y(e,t,n){return t===r.Pj?g(function(e,t){var n=(0,o.Z)(e),r=(0,i.Z)(e),f=n.visualViewport,c=r.clientWidth,u=r.clientHeight,d=0,p=0;if(f){c=f.width,u=f.height;var l=(0,s.Z)();(l||!l&&"fixed"===t)&&(d=f.offsetLeft,p=f.offsetTop)}return{width:c,height:u,x:d+(0,a.Z)(e),y:p}}(e,n)):(0,l.kK)(t)?function(e,t){var n=(0,v.Z)(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):g(function(e){var t,n=(0,i.Z)(e),r=(0,c.Z)(e),o=null==(t=e.ownerDocument)?void 0:t.body,s=(0,u.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),d=(0,u.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-r.scrollLeft+(0,a.Z)(e),l=-r.scrollTop;return"rtl"===(0,f.Z)(o||n).direction&&(p+=(0,u.Fp)(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:d,x:p,y:l}}((0,i.Z)(e)))}function b(e,t,n,r){var o="clippingParents"===t?function(e){var t=(0,d.Z)((0,h.Z)(e)),n=["absolute","fixed"].indexOf((0,f.Z)(e).position)>=0&&(0,l.Re)(e)?(0,p.Z)(e):e;return(0,l.kK)(n)?t.filter((function(e){return(0,l.kK)(e)&&(0,m.Z)(e,n)&&"body"!==(0,Z.Z)(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=y(e,n,r);return t.top=(0,u.Fp)(o.top,t.top),t.right=(0,u.VV)(o.right,t.right),t.bottom=(0,u.VV)(o.bottom,t.bottom),t.left=(0,u.Fp)(o.left,t.left),t}),y(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}var w=n(9996),x=n(3500),O=n(40338);function k(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,s=n.strategy,f=void 0===s?e.strategy:s,c=n.boundary,u=void 0===c?r.zV:c,d=n.rootBoundary,p=void 0===d?r.Pj:d,h=n.elementContext,m=void 0===h?r.k5:h,Z=n.altBoundary,y=void 0!==Z&&Z,k=n.padding,j=void 0===k?0:k,D=(0,x.Z)("number"!==typeof j?j:(0,O.Z)(j,r.mv)),E=m===r.k5?r.YP:r.k5,L=e.rects.popper,R=e.elements[y?E:m],A=b((0,l.kK)(R)?R:R.contextElement||(0,i.Z)(e.elements.popper),u,p,f),M=(0,v.Z)(e.elements.reference),F=(0,w.Z)({reference:M,element:L,strategy:"absolute",placement:a}),P=g(Object.assign({},L,F)),V=m===r.k5?P:M,B={top:A.top-V.top+D.top,bottom:V.bottom-A.bottom+D.bottom,left:A.left-V.left+D.left,right:V.right-A.right+D.right},W=e.modifiersData.offset;if(m===r.k5&&W){var H=W[a];Object.keys(B).forEach((function(e){var t=[r.F2,r.I].indexOf(e)>=0?1:-1,n=[r.we,r.I].indexOf(e)>=0?"y":"x";B[e]+=H[n]*t}))}return B}},40338:(e,t,n)=>{function r(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}n.d(t,{Z:()=>r})},51878:(e,t,n)=>{function r(e){return e.split("-")[0]}n.d(t,{Z:()=>r})},45030:(e,t,n)=>{function r(){return{top:0,right:0,bottom:0,left:0}}n.d(t,{Z:()=>r})},73509:(e,t,n)=>{function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}n.d(t,{Z:()=>r})},40058:(e,t,n)=>{function r(e){return e.split("-")[1]}n.d(t,{Z:()=>r})},74996:(e,t,n)=>{n.d(t,{Fp:()=>r,NM:()=>i,VV:()=>o});var r=Math.max,o=Math.min,i=Math.round},3500:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(45030);function o(e){return Object.assign({},(0,r.Z)(),e)}},44010:(e,t,n)=>{function r(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}n.d(t,{Z:()=>r})},93629:(e,t,n)=>{n.d(t,{q:()=>i,u:()=>o});var r=n(74996);function o(e,t,n){return(0,r.Fp)(e,(0,r.VV)(t,n))}function i(e,t,n){var r=o(e,t,n);return r>n?n:r}}}]);