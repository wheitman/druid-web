import{z as lu,a5 as wg,s as sn,p as Et,i as Je,f as Ce,A as Bt,k as Zt,B as et,C as qn,x as qt,e as Lt,c as Dt,b as zt,a6 as ut,H as jt,n as dr,l as ft,u as pt,m as mt,o as gt,a7 as es,a8 as Pi,E as ld,F as Ge,G as Rn,D as Ze,L as as,a3 as Di,a9 as Df,r as uu,a as oi,g as ci,aa as Nf,O as Eg,ab as Uf,v as fs,h as Sa,K as Ag,t as Of,d as Ff,J as Tg}from"../chunks/scheduler.CL2PvYAA.js";import{S as un,i as dn,g as Yn,a as Re,c as Zn,t as Te,h as cc,j as lc,f as Eo,b as vn,d as yn,m as bn,e as xn}from"../chunks/index.BSIW48Q1.js";import{A as Cg,a as ud}from"../chunks/AnimatedDruid.k-j44dip.js";import{w as du,n as An,i as ts,e as Rg,f as hu,h as Ps,j as Bi,o as Pg,m as Ti,s as dd,k as Sr,l as Ig,q as wa,u as hd,r as Lg,t as Dg,v as Ea,g as Kt,a as Ng,c as Ug}from"../chunks/palettes.ncAW91PE.js";import{w as di,b as fd,d as fu}from"../chunks/entry.BLsGeYAN.js";function Og(r){return r[r.length-1]}const Fg=(r,e)=>{const t=du(r),n=(s,a)=>{t.update(o=>{const c=s(o);let l=c;return e&&(l=e({curr:o,next:c})),a==null||a(l),l})};return{...t,update:n,set:s=>{n(()=>s)}}};function kf(r){return new Promise(e=>setTimeout(e,r))}let kg="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Bg=(r=21)=>{let e="",t=r;for(;t--;)e+=kg[Math.random()*64|0];return e};function zg(){return Bg(10)}function Vg(r){return r.reduce((e,t)=>(e[t]=zg(),e),{})}const Bf=()=>typeof window<"u";function Hg(){const r=navigator.userAgentData;return(r==null?void 0:r.platform)??navigator.platform}const zf=r=>Bf()&&r.test(Hg().toLowerCase()),Gg=()=>Bf()&&!!navigator.maxTouchPoints,Wg=()=>zf(/^mac/)&&!Gg(),Xg=()=>zf(/mac|iphone|ipad|ipod/i),qg=()=>Xg()&&!Wg(),Qc="data-melt-scroll-lock";function pd(r,e){if(!r)return;const t=r.style.cssText;return Object.assign(r.style,e),()=>{r.style.cssText=t}}function Yg(r,e,t){if(!r)return;const n=r.style.getPropertyValue(e);return r.style.setProperty(e,t),()=>{n?r.style.setProperty(e,n):r.style.removeProperty(e)}}function Zg(r){const e=r.getBoundingClientRect().left;return Math.round(e)+r.scrollLeft?"paddingLeft":"paddingRight"}function jg(r){const e=document,t=e.defaultView??window,{documentElement:n,body:i}=e;if(i.hasAttribute(Qc))return An;i.setAttribute(Qc,"");const a=t.innerWidth-n.clientWidth,o=()=>Yg(n,"--scrollbar-width",`${a}px`),c=Zg(n),l=t.getComputedStyle(i)[c],u=()=>pd(i,{overflow:"hidden",[c]:`calc(${l} + ${a}px)`}),h=()=>{const{scrollX:p,scrollY:g,visualViewport:b}=t,v=(b==null?void 0:b.offsetLeft)??0,_=(b==null?void 0:b.offsetTop)??0,E=pd(i,{position:"fixed",overflow:"hidden",top:`${-(g-Math.floor(_))}px`,left:`${-(p-Math.floor(v))}px`,right:"0",[c]:`calc(${l} + ${a}px)`});return()=>{E==null||E(),t.scrollTo(p,g)}},f=[o(),qg()?h():u()];return()=>{f.forEach(p=>p==null?void 0:p()),i.removeAttribute(Qc)}}function Hl(r){const e={};return Object.keys(r).forEach(t=>{const n=t,i=r[n];e[n]=du(di(i))}),e}function Kg(r){let e=r.parentElement;for(;ts(e)&&!e.hasAttribute("data-portal");)e=e.parentElement;return e||"body"}function Jg(r,e){return e!==void 0?e:Kg(r)==="body"?document.body:null}async function md(r){const{prop:e,defaultEl:t}=r;if(await Promise.all([kf(1),lu]),e===void 0){t==null||t.focus();return}const n=Rg(e)?e(t):e;if(typeof n=="string"){const i=document.querySelector(n);if(!ts(i))return;i.focus()}else ts(n)&&n.focus()}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Vf=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Ao=Vf.join(","),Hf=typeof Element>"u",hr=Hf?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,To=!Hf&&Element.prototype.getRootNode?function(r){var e;return r==null||(e=r.getRootNode)===null||e===void 0?void 0:e.call(r)}:function(r){return r==null?void 0:r.ownerDocument},Co=function r(e,t){var n;t===void 0&&(t=!0);var i=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"inert"),s=i===""||i==="true",a=s||t&&e&&r(e.parentNode);return a},Qg=function(e){var t,n=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return n===""||n==="true"},Gf=function(e,t,n){if(Co(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(Ao));return t&&hr.call(e,Ao)&&i.unshift(e),i=i.filter(n),i},Wf=function r(e,t,n){for(var i=[],s=Array.from(e);s.length;){var a=s.shift();if(!Co(a,!1))if(a.tagName==="SLOT"){var o=a.assignedElements(),c=o.length?o:a.children,l=r(c,!0,n);n.flatten?i.push.apply(i,l):i.push({scopeParent:a,candidates:l})}else{var u=hr.call(a,Ao);u&&n.filter(a)&&(t||!e.includes(a))&&i.push(a);var h=a.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(a),f=!Co(h,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(h&&f){var p=r(h===!0?a.children:h.children,!0,n);n.flatten?i.push.apply(i,p):i.push({scopeParent:a,candidates:p})}else s.unshift.apply(s,a.children)}}return i},Xf=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},tr=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Qg(e))&&!Xf(e)?0:e.tabIndex},$g=function(e,t){var n=tr(e);return n<0&&t&&!Xf(e)?0:n},e_=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},qf=function(e){return e.tagName==="INPUT"},t_=function(e){return qf(e)&&e.type==="hidden"},n_=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(n){return n.tagName==="SUMMARY"});return t},i_=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},r_=function(e){if(!e.name)return!0;var t=e.form||To(e),n=function(o){return t.querySelectorAll('input[type="radio"][name="'+o+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=n(window.CSS.escape(e.name));else try{i=n(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var s=i_(i,e.form);return!s||s===e},s_=function(e){return qf(e)&&e.type==="radio"},a_=function(e){return s_(e)&&!r_(e)},o_=function(e){var t,n=e&&To(e),i=(t=n)===null||t===void 0?void 0:t.host,s=!1;if(n&&n!==e){var a,o,c;for(s=!!((a=i)!==null&&a!==void 0&&(o=a.ownerDocument)!==null&&o!==void 0&&o.contains(i)||e!=null&&(c=e.ownerDocument)!==null&&c!==void 0&&c.contains(e));!s&&i;){var l,u,h;n=To(i),i=(l=n)===null||l===void 0?void 0:l.host,s=!!((u=i)!==null&&u!==void 0&&(h=u.ownerDocument)!==null&&h!==void 0&&h.contains(i))}}return s},gd=function(e){var t=e.getBoundingClientRect(),n=t.width,i=t.height;return n===0&&i===0},c_=function(e,t){var n=t.displayCheck,i=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=hr.call(e,"details>summary:first-of-type"),a=s?e.parentElement:e;if(hr.call(a,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof i=="function"){for(var o=e;e;){var c=e.parentElement,l=To(e);if(c&&!c.shadowRoot&&i(c)===!0)return gd(e);e.assignedSlot?e=e.assignedSlot:!c&&l!==e.ownerDocument?e=l.host:e=c}e=o}if(o_(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return gd(e);return!1},l_=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var n=0;n<t.children.length;n++){var i=t.children.item(n);if(i.tagName==="LEGEND")return hr.call(t,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}t=t.parentElement}return!1},Ro=function(e,t){return!(t.disabled||Co(t)||t_(t)||c_(t,e)||n_(t)||l_(t))},Gl=function(e,t){return!(a_(t)||tr(t)<0||!Ro(e,t))},u_=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},d_=function r(e){var t=[],n=[];return e.forEach(function(i,s){var a=!!i.scopeParent,o=a?i.scopeParent:i,c=$g(o,a),l=a?r(i.candidates):o;c===0?a?t.push.apply(t,l):t.push(o):n.push({documentOrder:s,tabIndex:c,item:i,isScope:a,content:l})}),n.sort(e_).reduce(function(i,s){return s.isScope?i.push.apply(i,s.content):i.push(s.content),i},[]).concat(t)},h_=function(e,t){t=t||{};var n;return t.getShadowRoot?n=Wf([e],t.includeContainer,{filter:Gl.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:u_}):n=Gf(e,t.includeContainer,Gl.bind(null,t)),d_(n)},f_=function(e,t){t=t||{};var n;return t.getShadowRoot?n=Wf([e],t.includeContainer,{filter:Ro.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):n=Gf(e,t.includeContainer,Ro.bind(null,t)),n},wr=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return hr.call(e,Ao)===!1?!1:Gl(t,e)},p_=Vf.concat("iframe").join(","),$c=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return hr.call(e,p_)===!1?!1:Ro(t,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function _d(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function vd(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_d(Object(t),!0).forEach(function(n){m_(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):_d(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function m_(r,e,t){return e=__(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function g_(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function __(r){var e=g_(r,"string");return typeof e=="symbol"?e:String(e)}var yd={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var i=e.indexOf(t);i===-1||e.splice(i,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},v_=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},y_=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},Is=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},b_=function(e){return Is(e)&&!e.shiftKey},x_=function(e){return Is(e)&&e.shiftKey},bd=function(e){return setTimeout(e,0)},xd=function(e,t){var n=-1;return e.every(function(i,s){return t(i)?(n=s,!1):!0}),n},ps=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return typeof e=="function"?e.apply(void 0,n):e},Aa=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},M_=[],S_=function(e,t){var n=(t==null?void 0:t.document)||document,i=(t==null?void 0:t.trapStack)||M_,s=vd({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:b_,isKeyBackward:x_},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,c=function(I,R,D){return I&&I[R]!==void 0?I[R]:s[D||R]},l=function(I,R){var D=typeof(R==null?void 0:R.composedPath)=="function"?R.composedPath():void 0;return a.containerGroups.findIndex(function(F){var T=F.container,k=F.tabbableNodes;return T.contains(I)||(D==null?void 0:D.includes(T))||k.find(function(B){return B===I})})},u=function(I){var R=s[I];if(typeof R=="function"){for(var D=arguments.length,F=new Array(D>1?D-1:0),T=1;T<D;T++)F[T-1]=arguments[T];R=R.apply(void 0,F)}if(R===!0&&(R=void 0),!R){if(R===void 0||R===!1)return R;throw new Error("`".concat(I,"` was specified but was not a node, or did not return a node"))}var k=R;if(typeof R=="string"&&(k=n.querySelector(R),!k))throw new Error("`".concat(I,"` as selector refers to no known node"));return k},h=function(){var I=u("initialFocus");if(I===!1)return!1;if(I===void 0||!$c(I,s.tabbableOptions))if(l(n.activeElement)>=0)I=n.activeElement;else{var R=a.tabbableGroups[0],D=R&&R.firstTabbableNode;I=D||u("fallbackFocus")}if(!I)throw new Error("Your focus-trap needs to have at least one focusable element");return I},f=function(){if(a.containerGroups=a.containers.map(function(I){var R=h_(I,s.tabbableOptions),D=f_(I,s.tabbableOptions),F=R.length>0?R[0]:void 0,T=R.length>0?R[R.length-1]:void 0,k=D.find(function(K){return wr(K)}),B=D.slice().reverse().find(function(K){return wr(K)}),W=!!R.find(function(K){return tr(K)>0});return{container:I,tabbableNodes:R,focusableNodes:D,posTabIndexesFound:W,firstTabbableNode:F,lastTabbableNode:T,firstDomTabbableNode:k,lastDomTabbableNode:B,nextTabbableNode:function(j){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,Pe=R.indexOf(j);return Pe<0?xe?D.slice(D.indexOf(j)+1).find(function(Z){return wr(Z)}):D.slice(0,D.indexOf(j)).reverse().find(function(Z){return wr(Z)}):R[Pe+(xe?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(I){return I.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(I){return I.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},p=function A(I){var R=I.activeElement;if(R)return R.shadowRoot&&R.shadowRoot.activeElement!==null?A(R.shadowRoot):R},g=function A(I){if(I!==!1&&I!==p(document)){if(!I||!I.focus){A(h());return}I.focus({preventScroll:!!s.preventScroll}),a.mostRecentlyFocusedNode=I,v_(I)&&I.select()}},b=function(I){var R=u("setReturnFocus",I);return R||(R===!1?!1:I)},v=function(I){var R=I.target,D=I.event,F=I.isBackward,T=F===void 0?!1:F;R=R||Aa(D),f();var k=null;if(a.tabbableGroups.length>0){var B=l(R,D),W=B>=0?a.containerGroups[B]:void 0;if(B<0)T?k=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:k=a.tabbableGroups[0].firstTabbableNode;else if(T){var K=xd(a.tabbableGroups,function(le){var se=le.firstTabbableNode;return R===se});if(K<0&&(W.container===R||$c(R,s.tabbableOptions)&&!wr(R,s.tabbableOptions)&&!W.nextTabbableNode(R,!1))&&(K=B),K>=0){var j=K===0?a.tabbableGroups.length-1:K-1,xe=a.tabbableGroups[j];k=tr(R)>=0?xe.lastTabbableNode:xe.lastDomTabbableNode}else Is(D)||(k=W.nextTabbableNode(R,!1))}else{var Pe=xd(a.tabbableGroups,function(le){var se=le.lastTabbableNode;return R===se});if(Pe<0&&(W.container===R||$c(R,s.tabbableOptions)&&!wr(R,s.tabbableOptions)&&!W.nextTabbableNode(R))&&(Pe=B),Pe>=0){var Z=Pe===a.tabbableGroups.length-1?0:Pe+1,$=a.tabbableGroups[Z];k=tr(R)>=0?$.firstTabbableNode:$.firstDomTabbableNode}else Is(D)||(k=W.nextTabbableNode(R))}}else k=u("fallbackFocus");return k},_=function(I){var R=Aa(I);if(!(l(R,I)>=0)){if(ps(s.clickOutsideDeactivates,I)){o.deactivate({returnFocus:s.returnFocusOnDeactivate});return}ps(s.allowOutsideClick,I)||I.preventDefault()}},E=function(I){var R=Aa(I),D=l(R,I)>=0;if(D||R instanceof Document)D&&(a.mostRecentlyFocusedNode=R);else{I.stopImmediatePropagation();var F,T=!0;if(a.mostRecentlyFocusedNode)if(tr(a.mostRecentlyFocusedNode)>0){var k=l(a.mostRecentlyFocusedNode),B=a.containerGroups[k].tabbableNodes;if(B.length>0){var W=B.findIndex(function(K){return K===a.mostRecentlyFocusedNode});W>=0&&(s.isKeyForward(a.recentNavEvent)?W+1<B.length&&(F=B[W+1],T=!1):W-1>=0&&(F=B[W-1],T=!1))}}else a.containerGroups.some(function(K){return K.tabbableNodes.some(function(j){return tr(j)>0})})||(T=!1);else T=!1;T&&(F=v({target:a.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(a.recentNavEvent)})),g(F||a.mostRecentlyFocusedNode||h())}a.recentNavEvent=void 0},M=function(I){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=I;var D=v({event:I,isBackward:R});D&&(Is(I)&&I.preventDefault(),g(D))},d=function(I){if(y_(I)&&ps(s.escapeDeactivates,I)!==!1){I.preventDefault(),o.deactivate();return}(s.isKeyForward(I)||s.isKeyBackward(I))&&M(I,s.isKeyBackward(I))},y=function(I){var R=Aa(I);l(R,I)>=0||ps(s.clickOutsideDeactivates,I)||ps(s.allowOutsideClick,I)||(I.preventDefault(),I.stopImmediatePropagation())},m=function(){if(a.active)return yd.activateTrap(i,o),a.delayInitialFocusTimer=s.delayInitialFocus?bd(function(){g(h())}):g(h()),n.addEventListener("focusin",E,!0),n.addEventListener("mousedown",_,{capture:!0,passive:!1}),n.addEventListener("touchstart",_,{capture:!0,passive:!1}),n.addEventListener("click",y,{capture:!0,passive:!1}),n.addEventListener("keydown",d,{capture:!0,passive:!1}),o},S=function(){if(a.active)return n.removeEventListener("focusin",E,!0),n.removeEventListener("mousedown",_,!0),n.removeEventListener("touchstart",_,!0),n.removeEventListener("click",y,!0),n.removeEventListener("keydown",d,!0),o},C=function(I){var R=I.some(function(D){var F=Array.from(D.removedNodes);return F.some(function(T){return T===a.mostRecentlyFocusedNode})});R&&g(h())},w=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(C):void 0,x=function(){w&&(w.disconnect(),a.active&&!a.paused&&a.containers.map(function(I){w.observe(I,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(I){if(a.active)return this;var R=c(I,"onActivate"),D=c(I,"onPostActivate"),F=c(I,"checkCanFocusTrap");F||f(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=n.activeElement,R==null||R();var T=function(){F&&f(),m(),x(),D==null||D()};return F?(F(a.containers.concat()).then(T,T),this):(T(),this)},deactivate:function(I){if(!a.active)return this;var R=vd({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},I);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,S(),a.active=!1,a.paused=!1,x(),yd.deactivateTrap(i,o);var D=c(R,"onDeactivate"),F=c(R,"onPostDeactivate"),T=c(R,"checkCanReturnFocus"),k=c(R,"returnFocus","returnFocusOnDeactivate");D==null||D();var B=function(){bd(function(){k&&g(b(a.nodeFocusedBeforeActivation)),F==null||F()})};return k&&T?(T(b(a.nodeFocusedBeforeActivation)).then(B,B),this):(B(),this)},pause:function(I){if(a.paused||!a.active)return this;var R=c(I,"onPause"),D=c(I,"onPostPause");return a.paused=!0,R==null||R(),S(),x(),D==null||D(),this},unpause:function(I){if(!a.paused||!a.active)return this;var R=c(I,"onUnpause"),D=c(I,"onPostUnpause");return a.paused=!1,R==null||R(),f(),m(),x(),D==null||D(),this},updateContainerElements:function(I){var R=[].concat(I).filter(Boolean);return a.containers=R.map(function(D){return typeof D=="string"?n.querySelector(D):D}),a.active&&f(),x(),this}},o.updateContainerElements(e),o};function w_(r={}){let e;const{immediate:t,...n}=r,i=di(!1),s=di(!1),a=h=>e==null?void 0:e.activate(h),o=h=>{e==null||e.deactivate(h)},c=()=>{e&&(e.pause(),s.set(!0))},l=()=>{e&&(e.unpause(),s.set(!1))};return{useFocusTrap:h=>(e=S_(h,{...n,onActivate(){var f;i.set(!0),(f=r.onActivate)==null||f.call(r)},onDeactivate(){var f;i.set(!1),(f=r.onDeactivate)==null||f.call(r)}}),t&&a(),{destroy(){o(),e=void 0}}),hasFocus:fd(i),isPaused:fd(s),activate:a,deactivate:o,pause:c,unpause:l}}const Ta=[],E_=(r,e)=>{let t=An;function n(){const s=Ta.indexOf(r);s>=0&&Ta.splice(s,1)}function i(s){t();const{open:a,onClose:o,shouldCloseOnInteractOutside:c,closeOnInteractOutside:l}=s;kf(100).then(()=>{a?Ta.push(r):n()});function u(){return Og(Ta)===r}function h(){u()&&o&&(o(),n())}function f(g){const b=g.target;hu(b)&&b&&u()&&(g.preventDefault(),g.stopPropagation(),g.stopImmediatePropagation())}function p(g){c!=null&&c(g)&&u()&&(g.preventDefault(),g.stopPropagation(),g.stopImmediatePropagation(),h())}t=T_(r,{onInteractOutsideStart:f,onInteractOutside:l?p:void 0,enabled:a}).destroy}return i(e),{update:i,destroy(){n(),t()}}},A_=(r,e="body")=>{let t;if(!ts(e)&&typeof e!="string")return{destroy:An};async function n(s){if(e=s,typeof e=="string"){if(t=document.querySelector(e),t===null&&(await lu(),t=document.querySelector(e)),t===null)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)t=e;else throw new TypeError(`Unknown portal target type: ${e===null?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);r.dataset.portal="",t.appendChild(r),r.hidden=!1}function i(){r.remove()}return n(e),{update:n,destroy:i}},T_=(r,e)=>{let t=An,n=An,i=!1,s=!1,a=!1;function o(u){t(),n();const{onInteractOutside:h,onInteractOutsideStart:f,enabled:p}=u;if(!p)return;function g(_){h&&Md(_,r)&&(f==null||f(_));const E=_.target;hu(E)&&Yf(r,E)&&(s=!0),i=!0}function b(_){h==null||h(_)}const v=C_(r);if(typeof PointerEvent<"u"){const _=E=>{n();const M=d=>{c(d)&&b(d),l()};if(E.pointerType==="touch"){n=Bi(v,"click",M,{capture:!0,once:!0});return}M(E)};t=Ps(Bi(v,"pointerdown",g,!0),Bi(v,"pointerup",_,!0))}else{const _=M=>{a?a=!1:c(M)&&b(M),l()},E=M=>{a=!0,c(M)&&b(M),l()};t=Ps(Bi(v,"mousedown",g,!0),Bi(v,"mouseup",_,!0),Bi(v,"touchstart",g,!0),Bi(v,"touchend",E,!0))}}function c(u){return!!(i&&!s&&Md(u,r))}function l(){i=!1,s=!1}return o(e),{update:o,destroy(){t(),n()}}};function Md(r,e){if("button"in r&&r.button>0)return!1;const t=r.target;if(!hu(t))return!1;const n=t.ownerDocument;return!n||!n.documentElement.contains(t)?!1:e&&!Yf(e,t)}function Yf(r,e){return r===e||r.contains(e)}function C_(r){return(r==null?void 0:r.ownerDocument)??document}const{name:zi}=Ig("dialog"),R_={preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,role:"dialog",defaultOpen:!1,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},P_=["content","title","description"];function I_(r){const e={...R_,...r},t=Hl(Pg(e,"ids")),{preventScroll:n,closeOnEscape:i,closeOnOutsideClick:s,role:a,portal:o,forceVisible:c,openFocus:l,closeFocus:u,onOutsideClick:h}=t,f=du.writable(null),p=Hl({...Vg(P_),...e.ids}),g=e.open??di(e.defaultOpen),b=Fg(g,e==null?void 0:e.onOpenChange),v=fu([b,c],([A,I])=>A||I);let _=An;function E(A){const I=A.currentTarget,R=A.currentTarget;!ts(I)||!ts(R)||(b.set(!0),f.set(R))}function M(){b.set(!1),md({prop:u.get(),defaultEl:f.get()})}const d=Ti(zi("trigger"),{stores:[b],returned:([A])=>({"aria-haspopup":"dialog","aria-expanded":A,type:"button"}),action:A=>({destroy:Ps(wa(A,"click",R=>{E(R)}),wa(A,"keydown",R=>{R.key!==Ea.ENTER&&R.key!==Ea.SPACE||(R.preventDefault(),E(R))}))})}),y=Ti(zi("overlay"),{stores:[v,b],returned:([A,I])=>({hidden:A?void 0:!0,tabindex:-1,style:dd({display:A?void 0:"none"}),"aria-hidden":!0,"data-state":I?"open":"closed"}),action:A=>{let I=An;if(i.get()){const R=hd(A,{handler:()=>{M()}});R&&R.destroy&&(I=R.destroy)}return{destroy(){I()}}}}),m=Ti(zi("content"),{stores:[v,p.content,p.description,p.title,b],returned:([A,I,R,D,F])=>({id:I,role:a.get(),"aria-describedby":R,"aria-labelledby":D,"aria-modal":A?"true":void 0,"data-state":F?"open":"closed",tabindex:-1,hidden:A?void 0:!0,style:dd({display:A?void 0:"none"})}),action:A=>{let I=An,R=An;const D=Ps(Sr([b,s,i],([F,T,k])=>{if(!F)return;const B=w_({immediate:!1,escapeDeactivates:k,clickOutsideDeactivates:T,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:A});I=B.activate,R=B.deactivate;const W=B.useFocusTrap(A);return W&&W.destroy?W.destroy:B.deactivate}),Sr([s,b],([F,T])=>E_(A,{open:T,closeOnInteractOutside:F,onClose(){M()},shouldCloseOnInteractOutside(k){var B;return(B=h.get())==null||B(k),!k.defaultPrevented}}).destroy),Sr([i],([F])=>F?hd(A,{handler:M}).destroy:An),Sr([v],([F])=>{lu().then(()=>{F?I():R()})}));return{destroy:()=>{_(),D()}}}}),S=Ti(zi("portalled"),{stores:o,returned:A=>({"data-portal":Lg(A)}),action:A=>{const I=Sr([o],([R])=>{if(R===null)return An;const D=Jg(A,R);return D===null?An:A_(A,D).destroy});return{destroy(){I()}}}}),C=Ti(zi("title"),{stores:[p.title],returned:([A])=>({id:A})}),w=Ti(zi("description"),{stores:[p.description],returned:([A])=>({id:A})}),x=Ti(zi("close"),{returned:()=>({type:"button"}),action:A=>({destroy:Ps(wa(A,"click",()=>{M()}),wa(A,"keydown",R=>{R.key!==Ea.SPACE&&R.key!==Ea.ENTER||(R.preventDefault(),M())}))})});return Sr([b,n],([A,I])=>{if(Dg){if(I&&A&&(_=jg()),A){const R=document.getElementById(p.content.get());md({prop:l.get(),defaultEl:R})}return()=>{c.get()||_()}}}),{ids:p,elements:{content:m,trigger:d,title:C,description:w,overlay:y,close:x,portalled:S},states:{open:b},options:t}}const L_={orientation:"horizontal",decorative:!1},D_=r=>{const e={...L_,...r},t=Hl(e),{orientation:n,decorative:i}=t;return{elements:{root:Ti("separator",{stores:[n,i],returned:([a,o])=>({role:o?"none":"separator","aria-orientation":a==="vertical"?a:void 0,"aria-hidden":o,"data-orientation":a})})},options:t}};function Zf(r,e){const t={};return e.forEach(n=>{t[n]={[`data-${r}-${n}`]:""}}),n=>t[n]}function jf(){const r=wg();return e=>{const{originalEvent:t}=e.detail,{cancelable:n}=e,i=t.type;r(i,{originalEvent:t,currentTarget:t.currentTarget},{cancelable:n})||e.preventDefault()}}function Kf(r){const e={};for(const t in r){const n=r[t];n!==void 0&&(e[t]=n)}return e}function Jf(r){return function(e,t){if(t===void 0)return;const n=r[e];n&&n.set(t)}}function N_(){return{NAME:"separator",PARTS:["root"]}}function U_(r){const{NAME:e,PARTS:t}=N_(),n=Zf(e,t),i={...D_(Kf(r)),getAttrs:n};return{...i,updateOption:Jf(i.options)}}const O_=r=>({builder:r&4}),Sd=r=>({builder:r[2]});function F_(r){let e,t,n,i=[r[2],r[4]],s={};for(let a=0;a<i.length;a+=1)s=et(s,i[a]);return{c(){e=Lt("div"),this.h()},l(a){e=Dt(a,"DIV",{}),zt(e).forEach(Ce),this.h()},h(){ut(e,s)},m(a,o){Je(a,e,o),r[10](e),t||(n=jt(r[2].action(e)),t=!0)},p(a,o){ut(e,s=Kt(i,[o&4&&a[2],o&16&&a[4]]))},i:dr,o:dr,d(a){a&&Ce(e),r[10](null),t=!1,n()}}}function k_(r){let e;const t=r[9].default,n=ft(t,r,r[8],Sd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&260)&&pt(n,t,i,i[8],e?gt(t,i[8],s,O_):mt(i[8]),Sd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function B_(r){let e,t,n,i;const s=[k_,F_],a=[];function o(c,l){return c[1]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Et()},l(c){t.l(c),n=Et()},m(c,l){a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn(),t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n))},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),a[e].d(c)}}}function z_(r,e,t){let n;const i=["orientation","decorative","asChild","el"];let s=Bt(e,i),a,{$$slots:o={},$$scope:c}=e,{orientation:l="horizontal"}=e,{decorative:u=!0}=e,{asChild:h=!1}=e,{el:f=void 0}=e;const{elements:{root:p},updateOption:g,getAttrs:b}=U_({orientation:l,decorative:u});Zt(r,p,E=>t(7,a=E));const v=b("root");function _(E){qt[E?"unshift":"push"](()=>{f=E,t(0,f)})}return r.$$set=E=>{e=et(et({},e),qn(E)),t(4,s=Bt(e,i)),"orientation"in E&&t(5,l=E.orientation),"decorative"in E&&t(6,u=E.decorative),"asChild"in E&&t(1,h=E.asChild),"el"in E&&t(0,f=E.el),"$$scope"in E&&t(8,c=E.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&g("orientation",l),r.$$.dirty&64&&g("decorative",u),r.$$.dirty&128&&t(2,n=a),r.$$.dirty&4&&Object.assign(n,v)},[f,h,n,p,s,l,u,a,c,o,_]}class V_ extends un{constructor(e){super(),dn(this,e,z_,B_,sn,{orientation:5,decorative:6,asChild:1,el:0})}}function Qf(){return{NAME:"dialog",PARTS:["close","content","description","overlay","portal","title","trigger"]}}function H_(r){const{NAME:e,PARTS:t}=Qf(),n=Zf(e,t),i={...I_({...Kf(r),role:"dialog",forceVisible:!0}),getAttrs:n};return es(e,i),{...i,updateOption:Jf(i.options)}}function vr(){const{NAME:r}=Qf();return Pi(r)}const G_=r=>({ids:r&1}),wd=r=>({ids:r[0]});function W_(r){let e;const t=r[12].default,n=ft(t,r,r[11],wd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&2049)&&pt(n,t,i,i[11],e?gt(t,i[11],s,G_):mt(i[11]),wd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function X_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{preventScroll:a=void 0}=e,{closeOnEscape:o=void 0}=e,{closeOnOutsideClick:c=void 0}=e,{portal:l=void 0}=e,{open:u=void 0}=e,{onOpenChange:h=void 0}=e,{openFocus:f=void 0}=e,{closeFocus:p=void 0}=e,{onOutsideClick:g=void 0}=e;const{states:{open:b},updateOption:v,ids:_}=H_({closeOnEscape:o,preventScroll:a,closeOnOutsideClick:c,portal:l,forceVisible:!0,defaultOpen:u,openFocus:f,closeFocus:p,onOutsideClick:g,onOpenChange:({next:M})=>(u!==M&&(h==null||h(M),t(2,u=M)),M)}),E=fu([_.content,_.description,_.title],([M,d,y])=>({content:M,description:d,title:y}));return Zt(r,E,M=>t(0,n=M)),r.$$set=M=>{"preventScroll"in M&&t(3,a=M.preventScroll),"closeOnEscape"in M&&t(4,o=M.closeOnEscape),"closeOnOutsideClick"in M&&t(5,c=M.closeOnOutsideClick),"portal"in M&&t(6,l=M.portal),"open"in M&&t(2,u=M.open),"onOpenChange"in M&&t(7,h=M.onOpenChange),"openFocus"in M&&t(8,f=M.openFocus),"closeFocus"in M&&t(9,p=M.closeFocus),"onOutsideClick"in M&&t(10,g=M.onOutsideClick),"$$scope"in M&&t(11,s=M.$$scope)},r.$$.update=()=>{r.$$.dirty&4&&u!==void 0&&b.set(u),r.$$.dirty&8&&v("preventScroll",a),r.$$.dirty&16&&v("closeOnEscape",o),r.$$.dirty&32&&v("closeOnOutsideClick",c),r.$$.dirty&64&&v("portal",l),r.$$.dirty&256&&v("openFocus",f),r.$$.dirty&512&&v("closeFocus",p),r.$$.dirty&1024&&v("onOutsideClick",g)},[n,E,u,a,o,c,l,h,f,p,g,s,i]}class q_ extends un{constructor(e){super(),dn(this,e,X_,W_,sn,{preventScroll:3,closeOnEscape:4,closeOnOutsideClick:5,portal:6,open:2,onOpenChange:7,openFocus:8,closeFocus:9,onOutsideClick:10})}}const Y_=r=>({builder:r&8}),Ed=r=>({builder:r[3]}),Z_=r=>({builder:r&8}),Ad=r=>({builder:r[3]});function j_(r){let e=r[1],t,n,i=r[1]&&el(r);return{c(){i&&i.c(),t=Et()},l(s){i&&i.l(s),t=Et()},m(s,a){i&&i.m(s,a),Je(s,t,a),n=!0},p(s,a){s[1]?e?sn(e,s[1])?(i.d(1),i=el(s),e=s[1],i.c(),i.m(t.parentNode,t)):i.p(s,a):(i=el(s),e=s[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=s[1])},i(s){n||(Te(i,s),n=!0)},o(s){Re(i,s),n=!1},d(s){s&&Ce(t),i&&i.d(s)}}}function K_(r){let e;const t=r[9].default,n=ft(t,r,r[8],Ad);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&264)&&pt(n,t,i,i[8],e?gt(t,i[8],s,Z_):mt(i[8]),Ad)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function el(r){let e,t,n,i;const s=r[9].default,a=ft(s,r,r[8],Ed);let o=[r[3],r[5]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt(r[1]),a&&a.c(),this.h()},l(l){e=Dt(l,(r[1]||"null").toUpperCase(),{});var u=zt(e);a&&a.l(u),u.forEach(Ce),this.h()},h(){ld(r[1])(e,c)},m(l,u){Je(l,e,u),a&&a.m(e,null),r[10](e),t=!0,n||(i=jt(r[3].action(e)),n=!0)},p(l,u){a&&a.p&&(!t||u&264)&&pt(a,s,l,l[8],t?gt(s,l[8],u,Y_):mt(l[8]),Ed),ld(l[1])(e,c=Kt(o,[u&8&&l[3],u&32&&l[5]]))},i(l){t||(Te(a,l),t=!0)},o(l){Re(a,l),t=!1},d(l){l&&Ce(e),a&&a.d(l),r[10](null),n=!1,i()}}}function J_(r){let e,t,n,i;const s=[K_,j_],a=[];function o(c,l){return c[2]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Et()},l(c){t.l(c),n=Et()},m(c,l){a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn(),t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n))},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),a[e].d(c)}}}function Q_(r,e,t){let n;const i=["level","asChild","id","el"];let s=Bt(e,i),a,{$$slots:o={},$$scope:c}=e,{level:l="h2"}=e,{asChild:u=!1}=e,{id:h=void 0}=e,{el:f=void 0}=e;const{elements:{title:p},ids:g,getAttrs:b}=vr();Zt(r,p,E=>t(7,a=E));const v=b("title");function _(E){qt[E?"unshift":"push"](()=>{f=E,t(0,f)})}return r.$$set=E=>{e=et(et({},e),qn(E)),t(5,s=Bt(e,i)),"level"in E&&t(1,l=E.level),"asChild"in E&&t(2,u=E.asChild),"id"in E&&t(6,h=E.id),"el"in E&&t(0,f=E.el),"$$scope"in E&&t(8,c=E.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&h&&g.title.set(h),r.$$.dirty&128&&t(3,n=a),r.$$.dirty&8&&Object.assign(n,v)},[f,l,u,n,p,s,h,a,c,o,_]}class $_ extends un{constructor(e){super(),dn(this,e,Q_,J_,sn,{level:1,asChild:2,id:6,el:0})}}const e0=r=>({builder:r&4}),Td=r=>({builder:r[2]}),t0=r=>({builder:r&4}),Cd=r=>({builder:r[2]});function n0(r){let e,t,n,i;const s=r[8].default,a=ft(s,r,r[7],Td);let o=[r[2],{type:"button"},r[5]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt("button"),a&&a.c(),this.h()},l(l){e=Dt(l,"BUTTON",{type:!0});var u=zt(e);a&&a.l(u),u.forEach(Ce),this.h()},h(){ut(e,c)},m(l,u){Je(l,e,u),a&&a.m(e,null),e.autofocus&&e.focus(),r[9](e),t=!0,n||(i=[jt(r[2].action(e)),Ge(e,"m-click",r[4]),Ge(e,"m-keydown",r[4])],n=!0)},p(l,u){a&&a.p&&(!t||u&132)&&pt(a,s,l,l[7],t?gt(s,l[7],u,e0):mt(l[7]),Td),ut(e,c=Kt(o,[u&4&&l[2],{type:"button"},u&32&&l[5]]))},i(l){t||(Te(a,l),t=!0)},o(l){Re(a,l),t=!1},d(l){l&&Ce(e),a&&a.d(l),r[9](null),n=!1,Rn(i)}}}function i0(r){let e;const t=r[8].default,n=ft(t,r,r[7],Cd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&132)&&pt(n,t,i,i[7],e?gt(t,i[7],s,t0):mt(i[7]),Cd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function r0(r){let e,t,n,i;const s=[i0,n0],a=[];function o(c,l){return c[1]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Et()},l(c){t.l(c),n=Et()},m(c,l){a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn(),t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n))},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),a[e].d(c)}}}function s0(r,e,t){let n;const i=["asChild","el"];let s=Bt(e,i),a,{$$slots:o={},$$scope:c}=e,{asChild:l=!1}=e,{el:u=void 0}=e;const{elements:{close:h},getAttrs:f}=vr();Zt(r,h,v=>t(6,a=v));const p=jf(),g=f("close");function b(v){qt[v?"unshift":"push"](()=>{u=v,t(0,u)})}return r.$$set=v=>{e=et(et({},e),qn(v)),t(5,s=Bt(e,i)),"asChild"in v&&t(1,l=v.asChild),"el"in v&&t(0,u=v.el),"$$scope"in v&&t(7,c=v.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,n=a),r.$$.dirty&4&&Object.assign(n,g)},[u,l,n,h,p,s,a,c,o,b]}class a0 extends un{constructor(e){super(),dn(this,e,s0,r0,sn,{asChild:1,el:0})}}const o0=r=>({builder:r&4}),Rd=r=>({builder:r[2]}),c0=r=>({builder:r&4}),Pd=r=>({builder:r[2]});function l0(r){let e,t,n,i;const s=r[7].default,a=ft(s,r,r[6],Rd);let o=[r[2],r[4]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt("div"),a&&a.c(),this.h()},l(l){e=Dt(l,"DIV",{});var u=zt(e);a&&a.l(u),u.forEach(Ce),this.h()},h(){ut(e,c)},m(l,u){Je(l,e,u),a&&a.m(e,null),r[8](e),t=!0,n||(i=jt(r[2].action(e)),n=!0)},p(l,u){a&&a.p&&(!t||u&68)&&pt(a,s,l,l[6],t?gt(s,l[6],u,o0):mt(l[6]),Rd),ut(e,c=Kt(o,[u&4&&l[2],u&16&&l[4]]))},i(l){t||(Te(a,l),t=!0)},o(l){Re(a,l),t=!1},d(l){l&&Ce(e),a&&a.d(l),r[8](null),n=!1,i()}}}function u0(r){let e;const t=r[7].default,n=ft(t,r,r[6],Pd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&68)&&pt(n,t,i,i[6],e?gt(t,i[6],s,c0):mt(i[6]),Pd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function d0(r){let e,t,n,i;const s=[u0,l0],a=[];function o(c,l){return c[1]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Et()},l(c){t.l(c),n=Et()},m(c,l){a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn(),t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n))},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),a[e].d(c)}}}function h0(r,e,t){let n;const i=["asChild","el"];let s=Bt(e,i),a,{$$slots:o={},$$scope:c}=e,{asChild:l=!1}=e,{el:u=void 0}=e;const{elements:{portalled:h},getAttrs:f}=vr();Zt(r,h,b=>t(5,a=b));const p=f("portal");function g(b){qt[b?"unshift":"push"](()=>{u=b,t(0,u)})}return r.$$set=b=>{e=et(et({},e),qn(b)),t(4,s=Bt(e,i)),"asChild"in b&&t(1,l=b.asChild),"el"in b&&t(0,u=b.el),"$$scope"in b&&t(6,c=b.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(2,n=a),r.$$.dirty&4&&Object.assign(n,p)},[u,l,n,h,s,a,c,o,g]}class f0 extends un{constructor(e){super(),dn(this,e,h0,d0,sn,{asChild:1,el:0})}}const p0=r=>({builder:r[0]&256}),Id=r=>({builder:r[8]}),m0=r=>({builder:r[0]&256}),Ld=r=>({builder:r[8]}),g0=r=>({builder:r[0]&256}),Dd=r=>({builder:r[8]}),_0=r=>({builder:r[0]&256}),Nd=r=>({builder:r[8]}),v0=r=>({builder:r[0]&256}),Ud=r=>({builder:r[8]}),y0=r=>({builder:r[0]&256}),Od=r=>({builder:r[8]});function b0(r){let e,t,n,i;const s=r[16].default,a=ft(s,r,r[15],Id);let o=[r[8],r[12]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt("div"),a&&a.c(),this.h()},l(l){e=Dt(l,"DIV",{});var u=zt(e);a&&a.l(u),u.forEach(Ce),this.h()},h(){ut(e,c)},m(l,u){Je(l,e,u),a&&a.m(e,null),r[56](e),t=!0,n||(i=[jt(r[8].action(e)),Ge(e,"pointerdown",r[45]),Ge(e,"pointermove",r[46]),Ge(e,"pointerup",r[47]),Ge(e,"touchcancel",r[48]),Ge(e,"touchend",r[49]),Ge(e,"touchmove",r[50],{passive:!1}),Ge(e,"touchstart",r[51],{passive:!1})],n=!0)},p(l,u){a&&a.p&&(!t||u[0]&33024)&&pt(a,s,l,l[15],t?gt(s,l[15],u,p0):mt(l[15]),Id),ut(e,c=Kt(o,[u[0]&256&&l[8],u[0]&4096&&l[12]]))},i(l){t||(Te(a,l),t=!0)},o(l){Re(a,l),t=!1},d(l){l&&Ce(e),a&&a.d(l),r[56](null),n=!1,Rn(i)}}}function x0(r){let e,t,n,i,s;const a=r[16].default,o=ft(a,r,r[15],Ld);let c=[r[8],r[12]],l={};for(let u=0;u<c.length;u+=1)l=et(l,c[u]);return{c(){e=Lt("div"),o&&o.c(),this.h()},l(u){e=Dt(u,"DIV",{});var h=zt(e);o&&o.l(h),h.forEach(Ce),this.h()},h(){ut(e,l)},m(u,h){Je(u,e,h),o&&o.m(e,null),r[55](e),n=!0,i||(s=[jt(r[8].action(e)),Ge(e,"pointerdown",r[38]),Ge(e,"pointermove",r[39]),Ge(e,"pointerup",r[40]),Ge(e,"touchcancel",r[41]),Ge(e,"touchend",r[42]),Ge(e,"touchmove",r[43],{passive:!1}),Ge(e,"touchstart",r[44],{passive:!1})],i=!0)},p(u,h){r=u,o&&o.p&&(!n||h[0]&33024)&&pt(o,a,r,r[15],n?gt(a,r[15],h,m0):mt(r[15]),Ld),ut(e,l=Kt(c,[h[0]&256&&r[8],h[0]&4096&&r[12]]))},i(u){n||(Te(o,u),t&&t.end(1),n=!0)},o(u){Re(o,u),u&&(t=cc(e,r[5],r[6])),n=!1},d(u){u&&Ce(e),o&&o.d(u),r[55](null),u&&t&&t.end(),i=!1,Rn(s)}}}function M0(r){let e,t,n,i,s;const a=r[16].default,o=ft(a,r,r[15],Dd);let c=[r[8],r[12]],l={};for(let u=0;u<c.length;u+=1)l=et(l,c[u]);return{c(){e=Lt("div"),o&&o.c(),this.h()},l(u){e=Dt(u,"DIV",{});var h=zt(e);o&&o.l(h),h.forEach(Ce),this.h()},h(){ut(e,l)},m(u,h){Je(u,e,h),o&&o.m(e,null),r[54](e),n=!0,i||(s=[jt(r[8].action(e)),Ge(e,"pointerdown",r[31]),Ge(e,"pointermove",r[32]),Ge(e,"pointerup",r[33]),Ge(e,"touchcancel",r[34]),Ge(e,"touchend",r[35]),Ge(e,"touchmove",r[36],{passive:!1}),Ge(e,"touchstart",r[37],{passive:!1})],i=!0)},p(u,h){r=u,o&&o.p&&(!n||h[0]&33024)&&pt(o,a,r,r[15],n?gt(a,r[15],h,g0):mt(r[15]),Dd),ut(e,l=Kt(c,[h[0]&256&&r[8],h[0]&4096&&r[12]]))},i(u){n||(Te(o,u),u&&(t||as(()=>{t=lc(e,r[3],r[4]),t.start()})),n=!0)},o(u){Re(o,u),n=!1},d(u){u&&Ce(e),o&&o.d(u),r[54](null),i=!1,Rn(s)}}}function S0(r){let e,t,n,i,s,a;const o=r[16].default,c=ft(o,r,r[15],Nd);let l=[r[8],r[12]],u={};for(let h=0;h<l.length;h+=1)u=et(u,l[h]);return{c(){e=Lt("div"),c&&c.c(),this.h()},l(h){e=Dt(h,"DIV",{});var f=zt(e);c&&c.l(f),f.forEach(Ce),this.h()},h(){ut(e,u)},m(h,f){Je(h,e,f),c&&c.m(e,null),r[53](e),i=!0,s||(a=[jt(r[8].action(e)),Ge(e,"pointerdown",r[24]),Ge(e,"pointermove",r[25]),Ge(e,"pointerup",r[26]),Ge(e,"touchcancel",r[27]),Ge(e,"touchend",r[28]),Ge(e,"touchmove",r[29],{passive:!1}),Ge(e,"touchstart",r[30],{passive:!1})],s=!0)},p(h,f){r=h,c&&c.p&&(!i||f[0]&33024)&&pt(c,o,r,r[15],i?gt(o,r[15],f,_0):mt(r[15]),Nd),ut(e,u=Kt(l,[f[0]&256&&r[8],f[0]&4096&&r[12]]))},i(h){i||(Te(c,h),h&&as(()=>{i&&(n&&n.end(1),t=lc(e,r[3],r[4]),t.start())}),i=!0)},o(h){Re(c,h),t&&t.invalidate(),h&&(n=cc(e,r[5],r[6])),i=!1},d(h){h&&Ce(e),c&&c.d(h),r[53](null),h&&n&&n.end(),s=!1,Rn(a)}}}function w0(r){let e,t,n,i,s;const a=r[16].default,o=ft(a,r,r[15],Ud);let c=[r[8],r[12]],l={};for(let u=0;u<c.length;u+=1)l=et(l,c[u]);return{c(){e=Lt("div"),o&&o.c(),this.h()},l(u){e=Dt(u,"DIV",{});var h=zt(e);o&&o.l(h),h.forEach(Ce),this.h()},h(){ut(e,l)},m(u,h){Je(u,e,h),o&&o.m(e,null),r[52](e),n=!0,i||(s=[jt(r[8].action(e)),Ge(e,"pointerdown",r[17]),Ge(e,"pointermove",r[18]),Ge(e,"pointerup",r[19]),Ge(e,"touchcancel",r[20]),Ge(e,"touchend",r[21]),Ge(e,"touchmove",r[22],{passive:!1}),Ge(e,"touchstart",r[23],{passive:!1})],i=!0)},p(u,h){r=u,o&&o.p&&(!n||h[0]&33024)&&pt(o,a,r,r[15],n?gt(a,r[15],h,v0):mt(r[15]),Ud),ut(e,l=Kt(c,[h[0]&256&&r[8],h[0]&4096&&r[12]]))},i(u){n||(Te(o,u),u&&as(()=>{n&&(t||(t=Eo(e,r[1],r[2],!0)),t.run(1))}),n=!0)},o(u){Re(o,u),u&&(t||(t=Eo(e,r[1],r[2],!1)),t.run(0)),n=!1},d(u){u&&Ce(e),o&&o.d(u),r[52](null),u&&t&&t.end(),i=!1,Rn(s)}}}function E0(r){let e;const t=r[16].default,n=ft(t,r,r[15],Od);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[0]&33024)&&pt(n,t,i,i[15],e?gt(t,i[15],s,y0):mt(i[15]),Od)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function A0(r){let e,t,n,i;const s=[E0,w0,S0,M0,x0,b0],a=[];function o(c,l){return c[7]&&c[9]?0:c[1]&&c[9]?1:c[3]&&c[5]&&c[9]?2:c[3]&&c[9]?3:c[5]&&c[9]?4:c[9]?5:-1}return~(e=o(r))&&(t=a[e]=s[e](r)),{c(){t&&t.c(),n=Et()},l(c){t&&t.l(c),n=Et()},m(c,l){~e&&a[e].m(c,l),Je(c,n,l),i=!0},p(c,l){let u=e;e=o(c),e===u?~e&&a[e].p(c,l):(t&&(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn()),~e?(t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),~e&&a[e].d(c)}}}function T0(r,e,t){let n;const i=["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","el"];let s=Bt(e,i),a,o,{$$slots:c={},$$scope:l}=e,{transition:u=void 0}=e,{transitionConfig:h=void 0}=e,{inTransition:f=void 0}=e,{inTransitionConfig:p=void 0}=e,{outTransition:g=void 0}=e,{outTransitionConfig:b=void 0}=e,{asChild:v=!1}=e,{id:_=void 0}=e,{el:E=void 0}=e;const{elements:{content:M},states:{open:d},ids:y,getAttrs:m}=vr();Zt(r,M,V=>t(14,a=V)),Zt(r,d,V=>t(9,o=V));const S=m("content");function C(V){Ze.call(this,r,V)}function w(V){Ze.call(this,r,V)}function x(V){Ze.call(this,r,V)}function A(V){Ze.call(this,r,V)}function I(V){Ze.call(this,r,V)}function R(V){Ze.call(this,r,V)}function D(V){Ze.call(this,r,V)}function F(V){Ze.call(this,r,V)}function T(V){Ze.call(this,r,V)}function k(V){Ze.call(this,r,V)}function B(V){Ze.call(this,r,V)}function W(V){Ze.call(this,r,V)}function K(V){Ze.call(this,r,V)}function j(V){Ze.call(this,r,V)}function xe(V){Ze.call(this,r,V)}function Pe(V){Ze.call(this,r,V)}function Z(V){Ze.call(this,r,V)}function $(V){Ze.call(this,r,V)}function le(V){Ze.call(this,r,V)}function se(V){Ze.call(this,r,V)}function Se(V){Ze.call(this,r,V)}function ze(V){Ze.call(this,r,V)}function Ne(V){Ze.call(this,r,V)}function Qe(V){Ze.call(this,r,V)}function N(V){Ze.call(this,r,V)}function oe(V){Ze.call(this,r,V)}function ae(V){Ze.call(this,r,V)}function me(V){Ze.call(this,r,V)}function J(V){Ze.call(this,r,V)}function De(V){Ze.call(this,r,V)}function ge(V){Ze.call(this,r,V)}function be(V){Ze.call(this,r,V)}function O(V){Ze.call(this,r,V)}function P(V){Ze.call(this,r,V)}function X(V){Ze.call(this,r,V)}function re(V){qt[V?"unshift":"push"](()=>{E=V,t(0,E)})}function ie(V){qt[V?"unshift":"push"](()=>{E=V,t(0,E)})}function ne(V){qt[V?"unshift":"push"](()=>{E=V,t(0,E)})}function Ie(V){qt[V?"unshift":"push"](()=>{E=V,t(0,E)})}function fe(V){qt[V?"unshift":"push"](()=>{E=V,t(0,E)})}return r.$$set=V=>{e=et(et({},e),qn(V)),t(12,s=Bt(e,i)),"transition"in V&&t(1,u=V.transition),"transitionConfig"in V&&t(2,h=V.transitionConfig),"inTransition"in V&&t(3,f=V.inTransition),"inTransitionConfig"in V&&t(4,p=V.inTransitionConfig),"outTransition"in V&&t(5,g=V.outTransition),"outTransitionConfig"in V&&t(6,b=V.outTransitionConfig),"asChild"in V&&t(7,v=V.asChild),"id"in V&&t(13,_=V.id),"el"in V&&t(0,E=V.el),"$$scope"in V&&t(15,l=V.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&8192&&_&&y.content.set(_),r.$$.dirty[0]&16384&&t(8,n=a),r.$$.dirty[0]&256&&Object.assign(n,S)},[E,u,h,f,p,g,b,v,n,o,M,d,s,_,a,l,c,C,w,x,A,I,R,D,F,T,k,B,W,K,j,xe,Pe,Z,$,le,se,Se,ze,Ne,Qe,N,oe,ae,me,J,De,ge,be,O,P,X,re,ie,ne,Ie,fe]}class C0 extends un{constructor(e){super(),dn(this,e,T0,A0,sn,{transition:1,transitionConfig:2,inTransition:3,inTransitionConfig:4,outTransition:5,outTransitionConfig:6,asChild:7,id:13,el:0},null,[-1,-1])}}const R0=r=>({builder:r&256}),Fd=r=>({builder:r[8]});function P0(r){let e,t,n,i=[r[8],r[12]],s={};for(let a=0;a<i.length;a+=1)s=et(s,i[a]);return{c(){e=Lt("div"),this.h()},l(a){e=Dt(a,"DIV",{}),zt(e).forEach(Ce),this.h()},h(){ut(e,s)},m(a,o){Je(a,e,o),r[25](e),t||(n=[jt(r[8].action(e)),Ge(e,"mouseup",r[20])],t=!0)},p(a,o){ut(e,s=Kt(i,[o&256&&a[8],o&4096&&a[12]]))},i:dr,o:dr,d(a){a&&Ce(e),r[25](null),t=!1,Rn(n)}}}function I0(r){let e,t,n,i,s,a=[r[8],r[12]],o={};for(let c=0;c<a.length;c+=1)o=et(o,a[c]);return{c(){e=Lt("div"),this.h()},l(c){e=Dt(c,"DIV",{}),zt(e).forEach(Ce),this.h()},h(){ut(e,o)},m(c,l){Je(c,e,l),r[24](e),n=!0,i||(s=[jt(r[8].action(e)),Ge(e,"mouseup",r[19])],i=!0)},p(c,l){r=c,ut(e,o=Kt(a,[l&256&&r[8],l&4096&&r[12]]))},i(c){n||(t&&t.end(1),n=!0)},o(c){c&&(t=cc(e,r[5],r[6])),n=!1},d(c){c&&Ce(e),r[24](null),c&&t&&t.end(),i=!1,Rn(s)}}}function L0(r){let e,t,n,i,s=[r[8],r[12]],a={};for(let o=0;o<s.length;o+=1)a=et(a,s[o]);return{c(){e=Lt("div"),this.h()},l(o){e=Dt(o,"DIV",{}),zt(e).forEach(Ce),this.h()},h(){ut(e,a)},m(o,c){Je(o,e,c),r[23](e),n||(i=[jt(r[8].action(e)),Ge(e,"mouseup",r[18])],n=!0)},p(o,c){r=o,ut(e,a=Kt(s,[c&256&&r[8],c&4096&&r[12]]))},i(o){o&&(t||as(()=>{t=lc(e,r[3],r[4]),t.start()}))},o:dr,d(o){o&&Ce(e),r[23](null),n=!1,Rn(i)}}}function D0(r){let e,t,n,i,s,a,o=[r[8],r[12]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt("div"),this.h()},l(l){e=Dt(l,"DIV",{}),zt(e).forEach(Ce),this.h()},h(){ut(e,c)},m(l,u){Je(l,e,u),r[22](e),i=!0,s||(a=[jt(r[8].action(e)),Ge(e,"mouseup",r[17])],s=!0)},p(l,u){r=l,ut(e,c=Kt(o,[u&256&&r[8],u&4096&&r[12]]))},i(l){i||(l&&as(()=>{i&&(n&&n.end(1),t=lc(e,r[3],r[4]),t.start())}),i=!0)},o(l){t&&t.invalidate(),l&&(n=cc(e,r[5],r[6])),i=!1},d(l){l&&Ce(e),r[22](null),l&&n&&n.end(),s=!1,Rn(a)}}}function N0(r){let e,t,n,i,s,a=[r[8],r[12]],o={};for(let c=0;c<a.length;c+=1)o=et(o,a[c]);return{c(){e=Lt("div"),this.h()},l(c){e=Dt(c,"DIV",{}),zt(e).forEach(Ce),this.h()},h(){ut(e,o)},m(c,l){Je(c,e,l),r[21](e),n=!0,i||(s=[Ge(e,"mouseup",r[16]),jt(r[8].action(e))],i=!0)},p(c,l){r=c,ut(e,o=Kt(a,[l&256&&r[8],l&4096&&r[12]]))},i(c){n||(c&&as(()=>{n&&(t||(t=Eo(e,r[1],r[2],!0)),t.run(1))}),n=!0)},o(c){c&&(t||(t=Eo(e,r[1],r[2],!1)),t.run(0)),n=!1},d(c){c&&Ce(e),r[21](null),c&&t&&t.end(),i=!1,Rn(s)}}}function U0(r){let e;const t=r[15].default,n=ft(t,r,r[14],Fd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16640)&&pt(n,t,i,i[14],e?gt(t,i[14],s,R0):mt(i[14]),Fd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function O0(r){let e,t,n,i;const s=[U0,N0,D0,L0,I0,P0],a=[];function o(c,l){return c[7]&&c[9]?0:c[1]&&c[9]?1:c[3]&&c[5]&&c[9]?2:c[3]&&c[9]?3:c[5]&&c[9]?4:c[9]?5:-1}return~(e=o(r))&&(t=a[e]=s[e](r)),{c(){t&&t.c(),n=Et()},l(c){t&&t.l(c),n=Et()},m(c,l){~e&&a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?~e&&a[e].p(c,l):(t&&(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn()),~e?(t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),~e&&a[e].d(c)}}}function F0(r,e,t){let n;const i=["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","el"];let s=Bt(e,i),a,o,{$$slots:c={},$$scope:l}=e,{transition:u=void 0}=e,{transitionConfig:h=void 0}=e,{inTransition:f=void 0}=e,{inTransitionConfig:p=void 0}=e,{outTransition:g=void 0}=e,{outTransitionConfig:b=void 0}=e,{asChild:v=!1}=e,{el:_=void 0}=e;const{elements:{overlay:E},states:{open:M},getAttrs:d}=vr();Zt(r,E,T=>t(13,a=T)),Zt(r,M,T=>t(9,o=T));const y=d("overlay");function m(T){Ze.call(this,r,T)}function S(T){Ze.call(this,r,T)}function C(T){Ze.call(this,r,T)}function w(T){Ze.call(this,r,T)}function x(T){Ze.call(this,r,T)}function A(T){qt[T?"unshift":"push"](()=>{_=T,t(0,_)})}function I(T){qt[T?"unshift":"push"](()=>{_=T,t(0,_)})}function R(T){qt[T?"unshift":"push"](()=>{_=T,t(0,_)})}function D(T){qt[T?"unshift":"push"](()=>{_=T,t(0,_)})}function F(T){qt[T?"unshift":"push"](()=>{_=T,t(0,_)})}return r.$$set=T=>{e=et(et({},e),qn(T)),t(12,s=Bt(e,i)),"transition"in T&&t(1,u=T.transition),"transitionConfig"in T&&t(2,h=T.transitionConfig),"inTransition"in T&&t(3,f=T.inTransition),"inTransitionConfig"in T&&t(4,p=T.inTransitionConfig),"outTransition"in T&&t(5,g=T.outTransition),"outTransitionConfig"in T&&t(6,b=T.outTransitionConfig),"asChild"in T&&t(7,v=T.asChild),"el"in T&&t(0,_=T.el),"$$scope"in T&&t(14,l=T.$$scope)},r.$$.update=()=>{r.$$.dirty&8192&&t(8,n=a),r.$$.dirty&256&&Object.assign(n,y)},[_,u,h,f,p,g,b,v,n,o,E,M,s,a,l,c,m,S,C,w,x,A,I,R,D,F]}class k0 extends un{constructor(e){super(),dn(this,e,F0,O0,sn,{transition:1,transitionConfig:2,inTransition:3,inTransitionConfig:4,outTransition:5,outTransitionConfig:6,asChild:7,el:0})}}const B0=r=>({builder:r&4}),kd=r=>({builder:r[2]}),z0=r=>({builder:r&4}),Bd=r=>({builder:r[2]});function V0(r){let e,t,n,i;const s=r[8].default,a=ft(s,r,r[7],kd);let o=[r[2],{type:"button"},r[5]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt("button"),a&&a.c(),this.h()},l(l){e=Dt(l,"BUTTON",{type:!0});var u=zt(e);a&&a.l(u),u.forEach(Ce),this.h()},h(){ut(e,c)},m(l,u){Je(l,e,u),a&&a.m(e,null),e.autofocus&&e.focus(),r[9](e),t=!0,n||(i=[jt(r[2].action(e)),Ge(e,"m-click",r[4]),Ge(e,"m-keydown",r[4])],n=!0)},p(l,u){a&&a.p&&(!t||u&132)&&pt(a,s,l,l[7],t?gt(s,l[7],u,B0):mt(l[7]),kd),ut(e,c=Kt(o,[u&4&&l[2],{type:"button"},u&32&&l[5]]))},i(l){t||(Te(a,l),t=!0)},o(l){Re(a,l),t=!1},d(l){l&&Ce(e),a&&a.d(l),r[9](null),n=!1,Rn(i)}}}function H0(r){let e;const t=r[8].default,n=ft(t,r,r[7],Bd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&132)&&pt(n,t,i,i[7],e?gt(t,i[7],s,z0):mt(i[7]),Bd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function G0(r){let e,t,n,i;const s=[H0,V0],a=[];function o(c,l){return c[1]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Et()},l(c){t.l(c),n=Et()},m(c,l){a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn(),t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n))},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),a[e].d(c)}}}function W0(r,e,t){let n;const i=["asChild","el"];let s=Bt(e,i),a,{$$slots:o={},$$scope:c}=e,{asChild:l=!1}=e,{el:u=void 0}=e;const{elements:{trigger:h},getAttrs:f}=vr();Zt(r,h,v=>t(6,a=v));const p=jf(),g=f("trigger");function b(v){qt[v?"unshift":"push"](()=>{u=v,t(0,u)})}return r.$$set=v=>{e=et(et({},e),qn(v)),t(5,s=Bt(e,i)),"asChild"in v&&t(1,l=v.asChild),"el"in v&&t(0,u=v.el),"$$scope"in v&&t(7,c=v.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,n=a),r.$$.dirty&4&&Object.assign(n,g)},[u,l,n,h,p,s,a,c,o,b]}class X0 extends un{constructor(e){super(),dn(this,e,W0,G0,sn,{asChild:1,el:0})}}const q0=r=>({builder:r&4}),zd=r=>({builder:r[2]}),Y0=r=>({builder:r&4}),Vd=r=>({builder:r[2]});function Z0(r){let e,t,n,i;const s=r[8].default,a=ft(s,r,r[7],zd);let o=[r[2],r[4]],c={};for(let l=0;l<o.length;l+=1)c=et(c,o[l]);return{c(){e=Lt("div"),a&&a.c(),this.h()},l(l){e=Dt(l,"DIV",{});var u=zt(e);a&&a.l(u),u.forEach(Ce),this.h()},h(){ut(e,c)},m(l,u){Je(l,e,u),a&&a.m(e,null),r[9](e),t=!0,n||(i=jt(r[2].action(e)),n=!0)},p(l,u){a&&a.p&&(!t||u&132)&&pt(a,s,l,l[7],t?gt(s,l[7],u,q0):mt(l[7]),zd),ut(e,c=Kt(o,[u&4&&l[2],u&16&&l[4]]))},i(l){t||(Te(a,l),t=!0)},o(l){Re(a,l),t=!1},d(l){l&&Ce(e),a&&a.d(l),r[9](null),n=!1,i()}}}function j0(r){let e;const t=r[8].default,n=ft(t,r,r[7],Vd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&132)&&pt(n,t,i,i[7],e?gt(t,i[7],s,Y0):mt(i[7]),Vd)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function K0(r){let e,t,n,i;const s=[j0,Z0],a=[];function o(c,l){return c[1]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Et()},l(c){t.l(c),n=Et()},m(c,l){a[e].m(c,l),Je(c,n,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Yn(),Re(a[u],1,1,()=>{a[u]=null}),Zn(),t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Te(t,1),t.m(n.parentNode,n))},i(c){i||(Te(t),i=!0)},o(c){Re(t),i=!1},d(c){c&&Ce(n),a[e].d(c)}}}function J0(r,e,t){let n;const i=["asChild","id","el"];let s=Bt(e,i),a,{$$slots:o={},$$scope:c}=e,{asChild:l=!1}=e,{id:u=void 0}=e,{el:h=void 0}=e;const{elements:{description:f},ids:p,getAttrs:g}=vr();Zt(r,f,_=>t(6,a=_));const b=g("description");function v(_){qt[_?"unshift":"push"](()=>{h=_,t(0,h)})}return r.$$set=_=>{e=et(et({},e),qn(_)),t(4,s=Bt(e,i)),"asChild"in _&&t(1,l=_.asChild),"id"in _&&t(5,u=_.id),"el"in _&&t(0,h=_.el),"$$scope"in _&&t(7,c=_.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&u&&p.description.set(u),r.$$.dirty&64&&t(2,n=a),r.$$.dirty&4&&Object.assign(n,b)},[h,l,n,f,s,u,a,c,o,v]}class Q0 extends un{constructor(e){super(),dn(this,e,J0,K0,sn,{asChild:1,id:5,el:0})}}const $0=!0,NA=Object.freeze(Object.defineProperty({__proto__:null,prerender:$0},Symbol.toStringTag,{value:"Module"}));var ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $f={exports:{}};(function(r){(function(){function e(d){var y={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(d===!1)return JSON.parse(JSON.stringify(y));var m={};for(var S in y)y.hasOwnProperty(S)&&(m[S]=y[S].defaultValue);return m}function t(){var d=e(!0),y={};for(var m in d)d.hasOwnProperty(m)&&(y[m]=!0);return y}var n={},i={},s={},a=e(!0),o="vanilla",c={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:e(!0),allOn:t()};n.helper={},n.extensions={},n.setOption=function(d,y){return a[d]=y,this},n.getOption=function(d){return a[d]},n.getOptions=function(){return a},n.resetOptions=function(){a=e(!0)},n.setFlavor=function(d){if(!c.hasOwnProperty(d))throw Error(d+" flavor was not found");n.resetOptions();var y=c[d];o=d;for(var m in y)y.hasOwnProperty(m)&&(a[m]=y[m])},n.getFlavor=function(){return o},n.getFlavorOptions=function(d){if(c.hasOwnProperty(d))return c[d]},n.getDefaultOptions=function(d){return e(d)},n.subParser=function(d,y){if(n.helper.isString(d))if(typeof y<"u")i[d]=y;else{if(i.hasOwnProperty(d))return i[d];throw Error("SubParser named "+d+" not registered!")}},n.extension=function(d,y){if(!n.helper.isString(d))throw Error("Extension 'name' must be a string");if(d=n.helper.stdExtName(d),n.helper.isUndefined(y)){if(!s.hasOwnProperty(d))throw Error("Extension named "+d+" is not registered!");return s[d]}else{typeof y=="function"&&(y=y()),n.helper.isArray(y)||(y=[y]);var m=l(y,d);if(m.valid)s[d]=y;else throw Error(m.error)}},n.getAllExtensions=function(){return s},n.removeExtension=function(d){delete s[d]},n.resetExtensions=function(){s={}};function l(d,y){var m=y?"Error in "+y+" extension->":"Error in unnamed extension",S={valid:!0,error:""};n.helper.isArray(d)||(d=[d]);for(var C=0;C<d.length;++C){var w=m+" sub-extension "+C+": ",x=d[C];if(typeof x!="object")return S.valid=!1,S.error=w+"must be an object, but "+typeof x+" given",S;if(!n.helper.isString(x.type))return S.valid=!1,S.error=w+'property "type" must be a string, but '+typeof x.type+" given",S;var A=x.type=x.type.toLowerCase();if(A==="language"&&(A=x.type="lang"),A==="html"&&(A=x.type="output"),A!=="lang"&&A!=="output"&&A!=="listener")return S.valid=!1,S.error=w+"type "+A+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',S;if(A==="listener"){if(n.helper.isUndefined(x.listeners))return S.valid=!1,S.error=w+'. Extensions of type "listener" must have a property called "listeners"',S}else if(n.helper.isUndefined(x.filter)&&n.helper.isUndefined(x.regex))return S.valid=!1,S.error=w+A+' extensions must define either a "regex" property or a "filter" method',S;if(x.listeners){if(typeof x.listeners!="object")return S.valid=!1,S.error=w+'"listeners" property must be an object but '+typeof x.listeners+" given",S;for(var I in x.listeners)if(x.listeners.hasOwnProperty(I)&&typeof x.listeners[I]!="function")return S.valid=!1,S.error=w+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+I+" must be a function but "+typeof x.listeners[I]+" given",S}if(x.filter){if(typeof x.filter!="function")return S.valid=!1,S.error=w+'"filter" must be a function, but '+typeof x.filter+" given",S}else if(x.regex){if(n.helper.isString(x.regex)&&(x.regex=new RegExp(x.regex,"g")),!(x.regex instanceof RegExp))return S.valid=!1,S.error=w+'"regex" property must either be a string or a RegExp object, but '+typeof x.regex+" given",S;if(n.helper.isUndefined(x.replace))return S.valid=!1,S.error=w+'"regex" extensions must implement a replace string or function',S}}return S}n.validateExtension=function(d){var y=l(d,null);return y.valid?!0:(console.warn(y.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(d){return typeof d=="string"||d instanceof String},n.helper.isFunction=function(d){var y={};return d&&y.toString.call(d)==="[object Function]"},n.helper.isArray=function(d){return Array.isArray(d)},n.helper.isUndefined=function(d){return typeof d>"u"},n.helper.forEach=function(d,y){if(n.helper.isUndefined(d))throw new Error("obj param is required");if(n.helper.isUndefined(y))throw new Error("callback param is required");if(!n.helper.isFunction(y))throw new Error("callback param must be a function/closure");if(typeof d.forEach=="function")d.forEach(y);else if(n.helper.isArray(d))for(var m=0;m<d.length;m++)y(d[m],m,d);else if(typeof d=="object")for(var S in d)d.hasOwnProperty(S)&&y(d[S],S,d);else throw new Error("obj does not seem to be an array or an iterable object")},n.helper.stdExtName=function(d){return d.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function u(d,y){var m=y.charCodeAt(0);return"¨E"+m+"E"}n.helper.escapeCharactersCallback=u,n.helper.escapeCharacters=function(d,y,m){var S="(["+y.replace(/([\[\]\\])/g,"\\$1")+"])";m&&(S="\\\\"+S);var C=new RegExp(S,"g");return d=d.replace(C,u),d},n.helper.unescapeHTMLEntities=function(d){return d.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var h=function(d,y,m,S){var C=S||"",w=C.indexOf("g")>-1,x=new RegExp(y+"|"+m,"g"+C.replace(/g/g,"")),A=new RegExp(y,C.replace(/g/g,"")),I=[],R,D,F,T,k;do for(R=0;F=x.exec(d);)if(A.test(F[0]))R++||(D=x.lastIndex,T=D-F[0].length);else if(R&&!--R){k=F.index+F[0].length;var B={left:{start:T,end:D},match:{start:D,end:F.index},right:{start:F.index,end:k},wholeMatch:{start:T,end:k}};if(I.push(B),!w)return I}while(R&&(x.lastIndex=D));return I};n.helper.matchRecursiveRegExp=function(d,y,m,S){for(var C=h(d,y,m,S),w=[],x=0;x<C.length;++x)w.push([d.slice(C[x].wholeMatch.start,C[x].wholeMatch.end),d.slice(C[x].match.start,C[x].match.end),d.slice(C[x].left.start,C[x].left.end),d.slice(C[x].right.start,C[x].right.end)]);return w},n.helper.replaceRecursiveRegExp=function(d,y,m,S,C){if(!n.helper.isFunction(y)){var w=y;y=function(){return w}}var x=h(d,m,S,C),A=d,I=x.length;if(I>0){var R=[];x[0].wholeMatch.start!==0&&R.push(d.slice(0,x[0].wholeMatch.start));for(var D=0;D<I;++D)R.push(y(d.slice(x[D].wholeMatch.start,x[D].wholeMatch.end),d.slice(x[D].match.start,x[D].match.end),d.slice(x[D].left.start,x[D].left.end),d.slice(x[D].right.start,x[D].right.end))),D<I-1&&R.push(d.slice(x[D].wholeMatch.end,x[D+1].wholeMatch.start));x[I-1].wholeMatch.end<d.length&&R.push(d.slice(x[I-1].wholeMatch.end)),A=R.join("")}return A},n.helper.regexIndexOf=function(d,y,m){if(!n.helper.isString(d))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(y instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var S=d.substring(m||0).search(y);return S>=0?S+(m||0):S},n.helper.splitAtIndex=function(d,y){if(!n.helper.isString(d))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[d.substring(0,y),d.substring(y)]},n.helper.encodeEmailAddress=function(d){var y=[function(m){return"&#"+m.charCodeAt(0)+";"},function(m){return"&#x"+m.charCodeAt(0).toString(16)+";"},function(m){return m}];return d=d.replace(/./g,function(m){if(m==="@")m=y[Math.floor(Math.random()*2)](m);else{var S=Math.random();m=S>.9?y[2](m):S>.45?y[1](m):y[0](m)}return m}),d},n.helper.padEnd=function(y,m,S){return m=m>>0,S=String(S||" "),y.length>m?String(y):(m=m-y.length,m>S.length&&(S+=S.repeat(m/S.length)),String(y)+S.slice(0,m))},typeof console>"u"&&(console={warn:function(d){alert(d)},log:function(d){alert(d)},error:function(d){throw d}}),n.helper.regexes={asteriskDashAndColon:/([*_:~])/g},n.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},n.Converter=function(d){var y={},m=[],S=[],C={},w=o,x={parsed:{},raw:"",format:""};A();function A(){d=d||{};for(var T in a)a.hasOwnProperty(T)&&(y[T]=a[T]);if(typeof d=="object")for(var k in d)d.hasOwnProperty(k)&&(y[k]=d[k]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof d+" was passed instead.");y.extensions&&n.helper.forEach(y.extensions,I)}function I(T,k){if(k=k||null,n.helper.isString(T))if(T=n.helper.stdExtName(T),k=T,n.extensions[T]){console.warn("DEPRECATION WARNING: "+T+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),R(n.extensions[T],T);return}else if(!n.helper.isUndefined(s[T]))T=s[T];else throw Error('Extension "'+T+'" could not be loaded. It was either not found or is not a valid extension.');typeof T=="function"&&(T=T()),n.helper.isArray(T)||(T=[T]);var B=l(T,k);if(!B.valid)throw Error(B.error);for(var W=0;W<T.length;++W){switch(T[W].type){case"lang":m.push(T[W]);break;case"output":S.push(T[W]);break}if(T[W].hasOwnProperty("listeners"))for(var K in T[W].listeners)T[W].listeners.hasOwnProperty(K)&&D(K,T[W].listeners[K])}}function R(T,k){typeof T=="function"&&(T=T(new n.Converter)),n.helper.isArray(T)||(T=[T]);var B=l(T,k);if(!B.valid)throw Error(B.error);for(var W=0;W<T.length;++W)switch(T[W].type){case"lang":m.push(T[W]);break;case"output":S.push(T[W]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function D(T,k){if(!n.helper.isString(T))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof T+" given");if(typeof k!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof k+" given");C.hasOwnProperty(T)||(C[T]=[]),C[T].push(k)}function F(T){var k=T.match(/^\s*/)[0].length,B=new RegExp("^\\s{0,"+k+"}","gm");return T.replace(B,"")}this._dispatch=function(k,B,W,K){if(C.hasOwnProperty(k))for(var j=0;j<C[k].length;++j){var xe=C[k][j](k,B,this,W,K);xe&&typeof xe<"u"&&(B=xe)}return B},this.listen=function(T,k){return D(T,k),this},this.makeHtml=function(T){if(!T)return T;var k={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:m,outputModifiers:S,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return T=T.replace(/¨/g,"¨T"),T=T.replace(/\$/g,"¨D"),T=T.replace(/\r\n/g,`
`),T=T.replace(/\r/g,`
`),T=T.replace(/\u00A0/g,"&nbsp;"),y.smartIndentationFix&&(T=F(T)),T=`

`+T+`

`,T=n.subParser("detab")(T,y,k),T=T.replace(/^[ \t]+$/mg,""),n.helper.forEach(m,function(B){T=n.subParser("runExtension")(B,T,y,k)}),T=n.subParser("metadata")(T,y,k),T=n.subParser("hashPreCodeTags")(T,y,k),T=n.subParser("githubCodeBlocks")(T,y,k),T=n.subParser("hashHTMLBlocks")(T,y,k),T=n.subParser("hashCodeTags")(T,y,k),T=n.subParser("stripLinkDefinitions")(T,y,k),T=n.subParser("blockGamut")(T,y,k),T=n.subParser("unhashHTMLSpans")(T,y,k),T=n.subParser("unescapeSpecialChars")(T,y,k),T=T.replace(/¨D/g,"$$"),T=T.replace(/¨T/g,"¨"),T=n.subParser("completeHTMLDocument")(T,y,k),n.helper.forEach(S,function(B){T=n.subParser("runExtension")(B,T,y,k)}),x=k.metadata,T},this.makeMarkdown=this.makeMd=function(T,k){if(T=T.replace(/\r\n/g,`
`),T=T.replace(/\r/g,`
`),T=T.replace(/>[ \t]+</,">¨NBSP;<"),!k)if(window&&window.document)k=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var B=k.createElement("div");B.innerHTML=T;var W={preList:Z(B)};Pe(B);for(var K=B.childNodes,j="",xe=0;xe<K.length;xe++)j+=n.subParser("makeMarkdown.node")(K[xe],W);function Pe($){for(var le=0;le<$.childNodes.length;++le){var se=$.childNodes[le];se.nodeType===3?!/\S/.test(se.nodeValue)&&!/^[ ]+$/.test(se.nodeValue)?($.removeChild(se),--le):(se.nodeValue=se.nodeValue.split(`
`).join(" "),se.nodeValue=se.nodeValue.replace(/(\s)+/g,"$1")):se.nodeType===1&&Pe(se)}}function Z($){for(var le=$.querySelectorAll("pre"),se=[],Se=0;Se<le.length;++Se)if(le[Se].childElementCount===1&&le[Se].firstChild.tagName.toLowerCase()==="code"){var ze=le[Se].firstChild.innerHTML.trim(),Ne=le[Se].firstChild.getAttribute("data-language")||"";if(Ne==="")for(var Qe=le[Se].firstChild.className.split(" "),N=0;N<Qe.length;++N){var oe=Qe[N].match(/^language-(.+)$/);if(oe!==null){Ne=oe[1];break}}ze=n.helper.unescapeHTMLEntities(ze),se.push(ze),le[Se].outerHTML='<precode language="'+Ne+'" precodenum="'+Se.toString()+'"></precode>'}else se.push(le[Se].innerHTML),le[Se].innerHTML="",le[Se].setAttribute("prenum",Se.toString());return se}return j},this.setOption=function(T,k){y[T]=k},this.getOption=function(T){return y[T]},this.getOptions=function(){return y},this.addExtension=function(T,k){k=k||null,I(T,k)},this.useExtension=function(T){I(T)},this.setFlavor=function(T){if(!c.hasOwnProperty(T))throw Error(T+" flavor was not found");var k=c[T];w=T;for(var B in k)k.hasOwnProperty(B)&&(y[B]=k[B])},this.getFlavor=function(){return w},this.removeExtension=function(T){n.helper.isArray(T)||(T=[T]);for(var k=0;k<T.length;++k){for(var B=T[k],W=0;W<m.length;++W)m[W]===B&&m.splice(W,1);for(var K=0;K<S.length;++K)S[K]===B&&S.splice(K,1)}},this.getAllExtensions=function(){return{language:m,output:S}},this.getMetadata=function(T){return T?x.raw:x.parsed},this.getMetadataFormat=function(){return x.format},this._setMetadataPair=function(T,k){x.parsed[T]=k},this._setMetadataFormat=function(T){x.format=T},this._setMetadataRaw=function(T){x.raw=T}},n.subParser("anchors",function(d,y,m){d=m.converter._dispatch("anchors.before",d,y,m);var S=function(C,w,x,A,I,R,D){if(n.helper.isUndefined(D)&&(D=""),x=x.toLowerCase(),C.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)A="";else if(!A)if(x||(x=w.toLowerCase().replace(/ ?\n/g," ")),A="#"+x,!n.helper.isUndefined(m.gUrls[x]))A=m.gUrls[x],n.helper.isUndefined(m.gTitles[x])||(D=m.gTitles[x]);else return C;A=A.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var F='<a href="'+A+'"';return D!==""&&D!==null&&(D=D.replace(/"/g,"&quot;"),D=D.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),F+=' title="'+D+'"'),y.openLinksInNewWindow&&!/^#/.test(A)&&(F+=' rel="noopener noreferrer" target="¨E95Eblank"'),F+=">"+w+"</a>",F};return d=d.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,S),d=d.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,S),d=d.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,S),d=d.replace(/\[([^\[\]]+)]()()()()()/g,S),y.ghMentions&&(d=d.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(C,w,x,A,I){if(x==="\\")return w+A;if(!n.helper.isString(y.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var R=y.ghMentionsLink.replace(/\{u}/g,I),D="";return y.openLinksInNewWindow&&(D=' rel="noopener noreferrer" target="¨E95Eblank"'),w+'<a href="'+R+'"'+D+">"+A+"</a>"})),d=m.converter._dispatch("anchors.after",d,y,m),d});var f=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,p=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,g=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,b=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,v=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,_=function(d){return function(y,m,S,C,w,x,A){S=S.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var I=S,R="",D="",F=m||"",T=A||"";return/^www\./i.test(S)&&(S=S.replace(/^www\./i,"http://www.")),d.excludeTrailingPunctuationFromURLs&&x&&(R=x),d.openLinksInNewWindow&&(D=' rel="noopener noreferrer" target="¨E95Eblank"'),F+'<a href="'+S+'"'+D+">"+I+"</a>"+R+T}},E=function(d,y){return function(m,S,C){var w="mailto:";return S=S||"",C=n.subParser("unescapeSpecialChars")(C,d,y),d.encodeEmails?(w=n.helper.encodeEmailAddress(w+C),C=n.helper.encodeEmailAddress(C)):w=w+C,S+'<a href="'+w+'">'+C+"</a>"}};n.subParser("autoLinks",function(d,y,m){return d=m.converter._dispatch("autoLinks.before",d,y,m),d=d.replace(g,_(y)),d=d.replace(v,E(y,m)),d=m.converter._dispatch("autoLinks.after",d,y,m),d}),n.subParser("simplifiedAutoLinks",function(d,y,m){return y.simplifiedAutoLink&&(d=m.converter._dispatch("simplifiedAutoLinks.before",d,y,m),y.excludeTrailingPunctuationFromURLs?d=d.replace(p,_(y)):d=d.replace(f,_(y)),d=d.replace(b,E(y,m)),d=m.converter._dispatch("simplifiedAutoLinks.after",d,y,m)),d}),n.subParser("blockGamut",function(d,y,m){return d=m.converter._dispatch("blockGamut.before",d,y,m),d=n.subParser("blockQuotes")(d,y,m),d=n.subParser("headers")(d,y,m),d=n.subParser("horizontalRule")(d,y,m),d=n.subParser("lists")(d,y,m),d=n.subParser("codeBlocks")(d,y,m),d=n.subParser("tables")(d,y,m),d=n.subParser("hashHTMLBlocks")(d,y,m),d=n.subParser("paragraphs")(d,y,m),d=m.converter._dispatch("blockGamut.after",d,y,m),d}),n.subParser("blockQuotes",function(d,y,m){d=m.converter._dispatch("blockQuotes.before",d,y,m),d=d+`

`;var S=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return y.splitAdjacentBlockquotes&&(S=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),d=d.replace(S,function(C){return C=C.replace(/^[ \t]*>[ \t]?/gm,""),C=C.replace(/¨0/g,""),C=C.replace(/^[ \t]+$/gm,""),C=n.subParser("githubCodeBlocks")(C,y,m),C=n.subParser("blockGamut")(C,y,m),C=C.replace(/(^|\n)/g,"$1  "),C=C.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(w,x){var A=x;return A=A.replace(/^  /mg,"¨0"),A=A.replace(/¨0/g,""),A}),n.subParser("hashBlock")(`<blockquote>
`+C+`
</blockquote>`,y,m)}),d=m.converter._dispatch("blockQuotes.after",d,y,m),d}),n.subParser("codeBlocks",function(d,y,m){d=m.converter._dispatch("codeBlocks.before",d,y,m),d+="¨0";var S=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return d=d.replace(S,function(C,w,x){var A=w,I=x,R=`
`;return A=n.subParser("outdent")(A,y,m),A=n.subParser("encodeCode")(A,y,m),A=n.subParser("detab")(A,y,m),A=A.replace(/^\n+/g,""),A=A.replace(/\n+$/g,""),y.omitExtraWLInCodeBlocks&&(R=""),A="<pre><code>"+A+R+"</code></pre>",n.subParser("hashBlock")(A,y,m)+I}),d=d.replace(/¨0/,""),d=m.converter._dispatch("codeBlocks.after",d,y,m),d}),n.subParser("codeSpans",function(d,y,m){return d=m.converter._dispatch("codeSpans.before",d,y,m),typeof d>"u"&&(d=""),d=d.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(S,C,w,x){var A=x;return A=A.replace(/^([ \t]*)/g,""),A=A.replace(/[ \t]*$/g,""),A=n.subParser("encodeCode")(A,y,m),A=C+"<code>"+A+"</code>",A=n.subParser("hashHTMLSpans")(A,y,m),A}),d=m.converter._dispatch("codeSpans.after",d,y,m),d}),n.subParser("completeHTMLDocument",function(d,y,m){if(!y.completeHTMLDocument)return d;d=m.converter._dispatch("completeHTMLDocument.before",d,y,m);var S="html",C=`<!DOCTYPE HTML>
`,w="",x=`<meta charset="utf-8">
`,A="",I="";typeof m.metadata.parsed.doctype<"u"&&(C="<!DOCTYPE "+m.metadata.parsed.doctype+`>
`,S=m.metadata.parsed.doctype.toString().toLowerCase(),(S==="html"||S==="html5")&&(x='<meta charset="utf-8">'));for(var R in m.metadata.parsed)if(m.metadata.parsed.hasOwnProperty(R))switch(R.toLowerCase()){case"doctype":break;case"title":w="<title>"+m.metadata.parsed.title+`</title>
`;break;case"charset":S==="html"||S==="html5"?x='<meta charset="'+m.metadata.parsed.charset+`">
`:x='<meta name="charset" content="'+m.metadata.parsed.charset+`">
`;break;case"language":case"lang":A=' lang="'+m.metadata.parsed[R]+'"',I+='<meta name="'+R+'" content="'+m.metadata.parsed[R]+`">
`;break;default:I+='<meta name="'+R+'" content="'+m.metadata.parsed[R]+`">
`}return d=C+"<html"+A+`>
<head>
`+w+x+I+`</head>
<body>
`+d.trim()+`
</body>
</html>`,d=m.converter._dispatch("completeHTMLDocument.after",d,y,m),d}),n.subParser("detab",function(d,y,m){return d=m.converter._dispatch("detab.before",d,y,m),d=d.replace(/\t(?=\t)/g,"    "),d=d.replace(/\t/g,"¨A¨B"),d=d.replace(/¨B(.+?)¨A/g,function(S,C){for(var w=C,x=4-w.length%4,A=0;A<x;A++)w+=" ";return w}),d=d.replace(/¨A/g,"    "),d=d.replace(/¨B/g,""),d=m.converter._dispatch("detab.after",d,y,m),d}),n.subParser("ellipsis",function(d,y,m){return y.ellipsis&&(d=m.converter._dispatch("ellipsis.before",d,y,m),d=d.replace(/\.\.\./g,"…"),d=m.converter._dispatch("ellipsis.after",d,y,m)),d}),n.subParser("emoji",function(d,y,m){if(!y.emoji)return d;d=m.converter._dispatch("emoji.before",d,y,m);var S=/:([\S]+?):/g;return d=d.replace(S,function(C,w){return n.helper.emojis.hasOwnProperty(w)?n.helper.emojis[w]:C}),d=m.converter._dispatch("emoji.after",d,y,m),d}),n.subParser("encodeAmpsAndAngles",function(d,y,m){return d=m.converter._dispatch("encodeAmpsAndAngles.before",d,y,m),d=d.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),d=d.replace(/<(?![a-z\/?$!])/gi,"&lt;"),d=d.replace(/</g,"&lt;"),d=d.replace(/>/g,"&gt;"),d=m.converter._dispatch("encodeAmpsAndAngles.after",d,y,m),d}),n.subParser("encodeBackslashEscapes",function(d,y,m){return d=m.converter._dispatch("encodeBackslashEscapes.before",d,y,m),d=d.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),d=d.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,n.helper.escapeCharactersCallback),d=m.converter._dispatch("encodeBackslashEscapes.after",d,y,m),d}),n.subParser("encodeCode",function(d,y,m){return d=m.converter._dispatch("encodeCode.before",d,y,m),d=d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),d=m.converter._dispatch("encodeCode.after",d,y,m),d}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(d,y,m){d=m.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",d,y,m);var S=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,C=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return d=d.replace(S,function(w){return w.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),d=d.replace(C,function(w){return w.replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),d=m.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",d,y,m),d}),n.subParser("githubCodeBlocks",function(d,y,m){return y.ghCodeBlocks?(d=m.converter._dispatch("githubCodeBlocks.before",d,y,m),d+="¨0",d=d.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(S,C,w,x){var A=y.omitExtraWLInCodeBlocks?"":`
`;return x=n.subParser("encodeCode")(x,y,m),x=n.subParser("detab")(x,y,m),x=x.replace(/^\n+/g,""),x=x.replace(/\n+$/g,""),x="<pre><code"+(w?' class="'+w+" language-"+w+'"':"")+">"+x+A+"</code></pre>",x=n.subParser("hashBlock")(x,y,m),`

¨G`+(m.ghCodeBlocks.push({text:S,codeblock:x})-1)+`G

`}),d=d.replace(/¨0/,""),m.converter._dispatch("githubCodeBlocks.after",d,y,m)):d}),n.subParser("hashBlock",function(d,y,m){return d=m.converter._dispatch("hashBlock.before",d,y,m),d=d.replace(/(^\n+|\n+$)/g,""),d=`

¨K`+(m.gHtmlBlocks.push(d)-1)+`K

`,d=m.converter._dispatch("hashBlock.after",d,y,m),d}),n.subParser("hashCodeTags",function(d,y,m){d=m.converter._dispatch("hashCodeTags.before",d,y,m);var S=function(C,w,x,A){var I=x+n.subParser("encodeCode")(w,y,m)+A;return"¨C"+(m.gHtmlSpans.push(I)-1)+"C"};return d=n.helper.replaceRecursiveRegExp(d,S,"<code\\b[^>]*>","</code>","gim"),d=m.converter._dispatch("hashCodeTags.after",d,y,m),d}),n.subParser("hashElement",function(d,y,m){return function(S,C){var w=C;return w=w.replace(/\n\n/g,`
`),w=w.replace(/^\n/,""),w=w.replace(/\n+$/g,""),w=`

¨K`+(m.gHtmlBlocks.push(w)-1)+`K

`,w}}),n.subParser("hashHTMLBlocks",function(d,y,m){d=m.converter._dispatch("hashHTMLBlocks.before",d,y,m);var S=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],C=function(T,k,B,W){var K=T;return B.search(/\bmarkdown\b/)!==-1&&(K=B+m.converter.makeHtml(k)+W),`

¨K`+(m.gHtmlBlocks.push(K)-1)+`K

`};y.backslashEscapesHTMLTags&&(d=d.replace(/\\<(\/?[^>]+?)>/g,function(T,k){return"&lt;"+k+"&gt;"}));for(var w=0;w<S.length;++w)for(var x,A=new RegExp("^ {0,3}(<"+S[w]+"\\b[^>]*>)","im"),I="<"+S[w]+"\\b[^>]*>",R="</"+S[w]+">";(x=n.helper.regexIndexOf(d,A))!==-1;){var D=n.helper.splitAtIndex(d,x),F=n.helper.replaceRecursiveRegExp(D[1],C,I,R,"im");if(F===D[1])break;d=D[0].concat(F)}return d=d.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(d,y,m)),d=n.helper.replaceRecursiveRegExp(d,function(T){return`

¨K`+(m.gHtmlBlocks.push(T)-1)+`K

`},"^ {0,3}<!--","-->","gm"),d=d.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(d,y,m)),d=m.converter._dispatch("hashHTMLBlocks.after",d,y,m),d}),n.subParser("hashHTMLSpans",function(d,y,m){d=m.converter._dispatch("hashHTMLSpans.before",d,y,m);function S(C){return"¨C"+(m.gHtmlSpans.push(C)-1)+"C"}return d=d.replace(/<[^>]+?\/>/gi,function(C){return S(C)}),d=d.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(C){return S(C)}),d=d.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(C){return S(C)}),d=d.replace(/<[^>]+?>/gi,function(C){return S(C)}),d=m.converter._dispatch("hashHTMLSpans.after",d,y,m),d}),n.subParser("unhashHTMLSpans",function(d,y,m){d=m.converter._dispatch("unhashHTMLSpans.before",d,y,m);for(var S=0;S<m.gHtmlSpans.length;++S){for(var C=m.gHtmlSpans[S],w=0;/¨C(\d+)C/.test(C);){var x=RegExp.$1;if(C=C.replace("¨C"+x+"C",m.gHtmlSpans[x]),w===10){console.error("maximum nesting of 10 spans reached!!!");break}++w}d=d.replace("¨C"+S+"C",C)}return d=m.converter._dispatch("unhashHTMLSpans.after",d,y,m),d}),n.subParser("hashPreCodeTags",function(d,y,m){d=m.converter._dispatch("hashPreCodeTags.before",d,y,m);var S=function(C,w,x,A){var I=x+n.subParser("encodeCode")(w,y,m)+A;return`

¨G`+(m.ghCodeBlocks.push({text:C,codeblock:I})-1)+`G

`};return d=n.helper.replaceRecursiveRegExp(d,S,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),d=m.converter._dispatch("hashPreCodeTags.after",d,y,m),d}),n.subParser("headers",function(d,y,m){d=m.converter._dispatch("headers.before",d,y,m);var S=isNaN(parseInt(y.headerLevelStart))?1:parseInt(y.headerLevelStart),C=y.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,w=y.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;d=d.replace(C,function(I,R){var D=n.subParser("spanGamut")(R,y,m),F=y.noHeaderId?"":' id="'+A(R)+'"',T=S,k="<h"+T+F+">"+D+"</h"+T+">";return n.subParser("hashBlock")(k,y,m)}),d=d.replace(w,function(I,R){var D=n.subParser("spanGamut")(R,y,m),F=y.noHeaderId?"":' id="'+A(R)+'"',T=S+1,k="<h"+T+F+">"+D+"</h"+T+">";return n.subParser("hashBlock")(k,y,m)});var x=y.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;d=d.replace(x,function(I,R,D){var F=D;y.customizedHeaderId&&(F=D.replace(/\s?\{([^{]+?)}\s*$/,""));var T=n.subParser("spanGamut")(F,y,m),k=y.noHeaderId?"":' id="'+A(D)+'"',B=S-1+R.length,W="<h"+B+k+">"+T+"</h"+B+">";return n.subParser("hashBlock")(W,y,m)});function A(I){var R,D;if(y.customizedHeaderId){var F=I.match(/\{([^{]+?)}\s*$/);F&&F[1]&&(I=F[1])}return R=I,n.helper.isString(y.prefixHeaderId)?D=y.prefixHeaderId:y.prefixHeaderId===!0?D="section-":D="",y.rawPrefixHeaderId||(R=D+R),y.ghCompatibleHeaderId?R=R.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():y.rawHeaderId?R=R.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():R=R.replace(/[^\w]/g,"").toLowerCase(),y.rawPrefixHeaderId&&(R=D+R),m.hashLinkCounts[R]?R=R+"-"+m.hashLinkCounts[R]++:m.hashLinkCounts[R]=1,R}return d=m.converter._dispatch("headers.after",d,y,m),d}),n.subParser("horizontalRule",function(d,y,m){d=m.converter._dispatch("horizontalRule.before",d,y,m);var S=n.subParser("hashBlock")("<hr />",y,m);return d=d.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,S),d=d.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,S),d=d.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,S),d=m.converter._dispatch("horizontalRule.after",d,y,m),d}),n.subParser("images",function(d,y,m){d=m.converter._dispatch("images.before",d,y,m);var S=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,C=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,w=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,x=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,A=/!\[([^\[\]]+)]()()()()()/g;function I(D,F,T,k,B,W,K,j){return k=k.replace(/\s/g,""),R(D,F,T,k,B,W,K,j)}function R(D,F,T,k,B,W,K,j){var xe=m.gUrls,Pe=m.gTitles,Z=m.gDimensions;if(T=T.toLowerCase(),j||(j=""),D.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)k="";else if(k===""||k===null)if((T===""||T===null)&&(T=F.toLowerCase().replace(/ ?\n/g," ")),k="#"+T,!n.helper.isUndefined(xe[T]))k=xe[T],n.helper.isUndefined(Pe[T])||(j=Pe[T]),n.helper.isUndefined(Z[T])||(B=Z[T].width,W=Z[T].height);else return D;F=F.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),k=k.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var $='<img src="'+k+'" alt="'+F+'"';return j&&n.helper.isString(j)&&(j=j.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),$+=' title="'+j+'"'),B&&W&&(B=B==="*"?"auto":B,W=W==="*"?"auto":W,$+=' width="'+B+'"',$+=' height="'+W+'"'),$+=" />",$}return d=d.replace(x,R),d=d.replace(w,I),d=d.replace(C,R),d=d.replace(S,R),d=d.replace(A,R),d=m.converter._dispatch("images.after",d,y,m),d}),n.subParser("italicsAndBold",function(d,y,m){d=m.converter._dispatch("italicsAndBold.before",d,y,m);function S(C,w,x){return w+C+x}return y.literalMidWordUnderscores?(d=d.replace(/\b___(\S[\s\S]*?)___\b/g,function(C,w){return S(w,"<strong><em>","</em></strong>")}),d=d.replace(/\b__(\S[\s\S]*?)__\b/g,function(C,w){return S(w,"<strong>","</strong>")}),d=d.replace(/\b_(\S[\s\S]*?)_\b/g,function(C,w){return S(w,"<em>","</em>")})):(d=d.replace(/___(\S[\s\S]*?)___/g,function(C,w){return/\S$/.test(w)?S(w,"<strong><em>","</em></strong>"):C}),d=d.replace(/__(\S[\s\S]*?)__/g,function(C,w){return/\S$/.test(w)?S(w,"<strong>","</strong>"):C}),d=d.replace(/_([^\s_][\s\S]*?)_/g,function(C,w){return/\S$/.test(w)?S(w,"<em>","</em>"):C})),y.literalMidWordAsterisks?(d=d.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(C,w,x){return S(x,w+"<strong><em>","</em></strong>")}),d=d.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(C,w,x){return S(x,w+"<strong>","</strong>")}),d=d.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(C,w,x){return S(x,w+"<em>","</em>")})):(d=d.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(C,w){return/\S$/.test(w)?S(w,"<strong><em>","</em></strong>"):C}),d=d.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(C,w){return/\S$/.test(w)?S(w,"<strong>","</strong>"):C}),d=d.replace(/\*([^\s*][\s\S]*?)\*/g,function(C,w){return/\S$/.test(w)?S(w,"<em>","</em>"):C})),d=m.converter._dispatch("italicsAndBold.after",d,y,m),d}),n.subParser("lists",function(d,y,m){function S(x,A){m.gListLevel++,x=x.replace(/\n{2,}$/,`
`),x+="¨0";var I=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,R=/\n[ \t]*\n(?!¨0)/.test(x);return y.disableForced4SpacesIndentedSublists&&(I=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),x=x.replace(I,function(D,F,T,k,B,W,K){K=K&&K.trim()!=="";var j=n.subParser("outdent")(B,y,m),xe="";return W&&y.tasklists&&(xe=' class="task-list-item" style="list-style-type: none;"',j=j.replace(/^[ \t]*\[(x|X| )?]/m,function(){var Pe='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return K&&(Pe+=" checked"),Pe+=">",Pe})),j=j.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(Pe){return"¨A"+Pe}),F||j.search(/\n{2,}/)>-1?(j=n.subParser("githubCodeBlocks")(j,y,m),j=n.subParser("blockGamut")(j,y,m)):(j=n.subParser("lists")(j,y,m),j=j.replace(/\n$/,""),j=n.subParser("hashHTMLBlocks")(j,y,m),j=j.replace(/\n\n+/g,`

`),R?j=n.subParser("paragraphs")(j,y,m):j=n.subParser("spanGamut")(j,y,m)),j=j.replace("¨A",""),j="<li"+xe+">"+j+`</li>
`,j}),x=x.replace(/¨0/g,""),m.gListLevel--,A&&(x=x.replace(/\s+$/,"")),x}function C(x,A){if(A==="ol"){var I=x.match(/^ *(\d+)\./);if(I&&I[1]!=="1")return' start="'+I[1]+'"'}return""}function w(x,A,I){var R=y.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,D=y.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,F=A==="ul"?R:D,T="";if(x.search(F)!==-1)(function B(W){var K=W.search(F),j=C(x,A);K!==-1?(T+=`

<`+A+j+`>
`+S(W.slice(0,K),!!I)+"</"+A+`>
`,A=A==="ul"?"ol":"ul",F=A==="ul"?R:D,B(W.slice(K))):T+=`

<`+A+j+`>
`+S(W,!!I)+"</"+A+`>
`})(x);else{var k=C(x,A);T=`

<`+A+k+`>
`+S(x,!!I)+"</"+A+`>
`}return T}return d=m.converter._dispatch("lists.before",d,y,m),d+="¨0",m.gListLevel?d=d.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(x,A,I){var R=I.search(/[*+-]/g)>-1?"ul":"ol";return w(A,R,!0)}):d=d.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(x,A,I,R){var D=R.search(/[*+-]/g)>-1?"ul":"ol";return w(I,D,!1)}),d=d.replace(/¨0/,""),d=m.converter._dispatch("lists.after",d,y,m),d}),n.subParser("metadata",function(d,y,m){if(!y.metadata)return d;d=m.converter._dispatch("metadata.before",d,y,m);function S(C){m.metadata.raw=C,C=C.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),C=C.replace(/\n {4}/g," "),C.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(w,x,A){return m.metadata.parsed[x]=A,""})}return d=d.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(C,w,x){return S(x),"¨M"}),d=d.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(C,w,x){return w&&(m.metadata.format=w),S(x),"¨M"}),d=d.replace(/¨M/g,""),d=m.converter._dispatch("metadata.after",d,y,m),d}),n.subParser("outdent",function(d,y,m){return d=m.converter._dispatch("outdent.before",d,y,m),d=d.replace(/^(\t|[ ]{1,4})/gm,"¨0"),d=d.replace(/¨0/g,""),d=m.converter._dispatch("outdent.after",d,y,m),d}),n.subParser("paragraphs",function(d,y,m){d=m.converter._dispatch("paragraphs.before",d,y,m),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,"");for(var S=d.split(/\n{2,}/g),C=[],w=S.length,x=0;x<w;x++){var A=S[x];A.search(/¨(K|G)(\d+)\1/g)>=0?C.push(A):A.search(/\S/)>=0&&(A=n.subParser("spanGamut")(A,y,m),A=A.replace(/^([ \t]*)/g,"<p>"),A+="</p>",C.push(A))}for(w=C.length,x=0;x<w;x++){for(var I="",R=C[x],D=!1;/¨(K|G)(\d+)\1/.test(R);){var F=RegExp.$1,T=RegExp.$2;F==="K"?I=m.gHtmlBlocks[T]:D?I=n.subParser("encodeCode")(m.ghCodeBlocks[T].text,y,m):I=m.ghCodeBlocks[T].codeblock,I=I.replace(/\$/g,"$$$$"),R=R.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,I),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(R)&&(D=!0)}C[x]=R}return d=C.join(`
`),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),m.converter._dispatch("paragraphs.after",d,y,m)}),n.subParser("runExtension",function(d,y,m,S){if(d.filter)y=d.filter(y,S.converter,m);else if(d.regex){var C=d.regex;C instanceof RegExp||(C=new RegExp(C,"g")),y=y.replace(C,d.replace)}return y}),n.subParser("spanGamut",function(d,y,m){return d=m.converter._dispatch("spanGamut.before",d,y,m),d=n.subParser("codeSpans")(d,y,m),d=n.subParser("escapeSpecialCharsWithinTagAttributes")(d,y,m),d=n.subParser("encodeBackslashEscapes")(d,y,m),d=n.subParser("images")(d,y,m),d=n.subParser("anchors")(d,y,m),d=n.subParser("autoLinks")(d,y,m),d=n.subParser("simplifiedAutoLinks")(d,y,m),d=n.subParser("emoji")(d,y,m),d=n.subParser("underline")(d,y,m),d=n.subParser("italicsAndBold")(d,y,m),d=n.subParser("strikethrough")(d,y,m),d=n.subParser("ellipsis")(d,y,m),d=n.subParser("hashHTMLSpans")(d,y,m),d=n.subParser("encodeAmpsAndAngles")(d,y,m),y.simpleLineBreaks?/\n\n¨K/.test(d)||(d=d.replace(/\n+/g,`<br />
`)):d=d.replace(/  +\n/g,`<br />
`),d=m.converter._dispatch("spanGamut.after",d,y,m),d}),n.subParser("strikethrough",function(d,y,m){function S(C){return y.simplifiedAutoLink&&(C=n.subParser("simplifiedAutoLinks")(C,y,m)),"<del>"+C+"</del>"}return y.strikethrough&&(d=m.converter._dispatch("strikethrough.before",d,y,m),d=d.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(C,w){return S(w)}),d=m.converter._dispatch("strikethrough.after",d,y,m)),d}),n.subParser("stripLinkDefinitions",function(d,y,m){var S=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,C=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;d+="¨0";var w=function(x,A,I,R,D,F,T){return A=A.toLowerCase(),d.toLowerCase().split(A).length-1<2?x:(I.match(/^data:.+?\/.+?;base64,/)?m.gUrls[A]=I.replace(/\s/g,""):m.gUrls[A]=n.subParser("encodeAmpsAndAngles")(I,y,m),F?F+T:(T&&(m.gTitles[A]=T.replace(/"|'/g,"&quot;")),y.parseImgDimensions&&R&&D&&(m.gDimensions[A]={width:R,height:D}),""))};return d=d.replace(C,w),d=d.replace(S,w),d=d.replace(/¨0/,""),d}),n.subParser("tables",function(d,y,m){if(!y.tables)return d;var S=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,C=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function w(D){return/^:[ \t]*--*$/.test(D)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(D)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(D)?' style="text-align:center;"':""}function x(D,F){var T="";return D=D.trim(),(y.tablesHeaderId||y.tableHeaderId)&&(T=' id="'+D.replace(/ /g,"_").toLowerCase()+'"'),D=n.subParser("spanGamut")(D,y,m),"<th"+T+F+">"+D+`</th>
`}function A(D,F){var T=n.subParser("spanGamut")(D,y,m);return"<td"+F+">"+T+`</td>
`}function I(D,F){for(var T=`<table>
<thead>
<tr>
`,k=D.length,B=0;B<k;++B)T+=D[B];for(T+=`</tr>
</thead>
<tbody>
`,B=0;B<F.length;++B){T+=`<tr>
`;for(var W=0;W<k;++W)T+=F[B][W];T+=`</tr>
`}return T+=`</tbody>
</table>
`,T}function R(D){var F,T=D.split(`
`);for(F=0;F<T.length;++F)/^ {0,3}\|/.test(T[F])&&(T[F]=T[F].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(T[F])&&(T[F]=T[F].replace(/\|[ \t]*$/,"")),T[F]=n.subParser("codeSpans")(T[F],y,m);var k=T[0].split("|").map(function($){return $.trim()}),B=T[1].split("|").map(function($){return $.trim()}),W=[],K=[],j=[],xe=[];for(T.shift(),T.shift(),F=0;F<T.length;++F)T[F].trim()!==""&&W.push(T[F].split("|").map(function($){return $.trim()}));if(k.length<B.length)return D;for(F=0;F<B.length;++F)j.push(w(B[F]));for(F=0;F<k.length;++F)n.helper.isUndefined(j[F])&&(j[F]=""),K.push(x(k[F],j[F]));for(F=0;F<W.length;++F){for(var Pe=[],Z=0;Z<K.length;++Z)n.helper.isUndefined(W[F][Z]),Pe.push(A(W[F][Z],j[Z]));xe.push(Pe)}return I(K,xe)}return d=m.converter._dispatch("tables.before",d,y,m),d=d.replace(/\\(\|)/g,n.helper.escapeCharactersCallback),d=d.replace(S,R),d=d.replace(C,R),d=m.converter._dispatch("tables.after",d,y,m),d}),n.subParser("underline",function(d,y,m){return y.underline&&(d=m.converter._dispatch("underline.before",d,y,m),y.literalMidWordUnderscores?(d=d.replace(/\b___(\S[\s\S]*?)___\b/g,function(S,C){return"<u>"+C+"</u>"}),d=d.replace(/\b__(\S[\s\S]*?)__\b/g,function(S,C){return"<u>"+C+"</u>"})):(d=d.replace(/___(\S[\s\S]*?)___/g,function(S,C){return/\S$/.test(C)?"<u>"+C+"</u>":S}),d=d.replace(/__(\S[\s\S]*?)__/g,function(S,C){return/\S$/.test(C)?"<u>"+C+"</u>":S})),d=d.replace(/(_)/g,n.helper.escapeCharactersCallback),d=m.converter._dispatch("underline.after",d,y,m)),d}),n.subParser("unescapeSpecialChars",function(d,y,m){return d=m.converter._dispatch("unescapeSpecialChars.before",d,y,m),d=d.replace(/¨E(\d+)E/g,function(S,C){var w=parseInt(C);return String.fromCharCode(w)}),d=m.converter._dispatch("unescapeSpecialChars.after",d,y,m),d}),n.subParser("makeMarkdown.blockquote",function(d,y){var m="";if(d.hasChildNodes())for(var S=d.childNodes,C=S.length,w=0;w<C;++w){var x=n.subParser("makeMarkdown.node")(S[w],y);x!==""&&(m+=x)}return m=m.trim(),m="> "+m.split(`
`).join(`
> `),m}),n.subParser("makeMarkdown.codeBlock",function(d,y){var m=d.getAttribute("language"),S=d.getAttribute("precodenum");return"```"+m+`
`+y.preList[S]+"\n```"}),n.subParser("makeMarkdown.codeSpan",function(d){return"`"+d.innerHTML+"`"}),n.subParser("makeMarkdown.emphasis",function(d,y){var m="";if(d.hasChildNodes()){m+="*";for(var S=d.childNodes,C=S.length,w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y);m+="*"}return m}),n.subParser("makeMarkdown.header",function(d,y,m){var S=new Array(m+1).join("#"),C="";if(d.hasChildNodes()){C=S+" ";for(var w=d.childNodes,x=w.length,A=0;A<x;++A)C+=n.subParser("makeMarkdown.node")(w[A],y)}return C}),n.subParser("makeMarkdown.hr",function(){return"---"}),n.subParser("makeMarkdown.image",function(d){var y="";return d.hasAttribute("src")&&(y+="!["+d.getAttribute("alt")+"](",y+="<"+d.getAttribute("src")+">",d.hasAttribute("width")&&d.hasAttribute("height")&&(y+=" ="+d.getAttribute("width")+"x"+d.getAttribute("height")),d.hasAttribute("title")&&(y+=' "'+d.getAttribute("title")+'"'),y+=")"),y}),n.subParser("makeMarkdown.links",function(d,y){var m="";if(d.hasChildNodes()&&d.hasAttribute("href")){var S=d.childNodes,C=S.length;m="[";for(var w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y);m+="](",m+="<"+d.getAttribute("href")+">",d.hasAttribute("title")&&(m+=' "'+d.getAttribute("title")+'"'),m+=")"}return m}),n.subParser("makeMarkdown.list",function(d,y,m){var S="";if(!d.hasChildNodes())return"";for(var C=d.childNodes,w=C.length,x=d.getAttribute("start")||1,A=0;A<w;++A)if(!(typeof C[A].tagName>"u"||C[A].tagName.toLowerCase()!=="li")){var I="";m==="ol"?I=x.toString()+". ":I="- ",S+=I+n.subParser("makeMarkdown.listItem")(C[A],y),++x}return S+=`
<!-- -->
`,S.trim()}),n.subParser("makeMarkdown.listItem",function(d,y){for(var m="",S=d.childNodes,C=S.length,w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y);return/\n$/.test(m)?m=m.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):m+=`
`,m}),n.subParser("makeMarkdown.node",function(d,y,m){m=m||!1;var S="";if(d.nodeType===3)return n.subParser("makeMarkdown.txt")(d,y);if(d.nodeType===8)return"<!--"+d.data+`-->

`;if(d.nodeType!==1)return"";var C=d.tagName.toLowerCase();switch(C){case"h1":m||(S=n.subParser("makeMarkdown.header")(d,y,1)+`

`);break;case"h2":m||(S=n.subParser("makeMarkdown.header")(d,y,2)+`

`);break;case"h3":m||(S=n.subParser("makeMarkdown.header")(d,y,3)+`

`);break;case"h4":m||(S=n.subParser("makeMarkdown.header")(d,y,4)+`

`);break;case"h5":m||(S=n.subParser("makeMarkdown.header")(d,y,5)+`

`);break;case"h6":m||(S=n.subParser("makeMarkdown.header")(d,y,6)+`

`);break;case"p":m||(S=n.subParser("makeMarkdown.paragraph")(d,y)+`

`);break;case"blockquote":m||(S=n.subParser("makeMarkdown.blockquote")(d,y)+`

`);break;case"hr":m||(S=n.subParser("makeMarkdown.hr")(d,y)+`

`);break;case"ol":m||(S=n.subParser("makeMarkdown.list")(d,y,"ol")+`

`);break;case"ul":m||(S=n.subParser("makeMarkdown.list")(d,y,"ul")+`

`);break;case"precode":m||(S=n.subParser("makeMarkdown.codeBlock")(d,y)+`

`);break;case"pre":m||(S=n.subParser("makeMarkdown.pre")(d,y)+`

`);break;case"table":m||(S=n.subParser("makeMarkdown.table")(d,y)+`

`);break;case"code":S=n.subParser("makeMarkdown.codeSpan")(d,y);break;case"em":case"i":S=n.subParser("makeMarkdown.emphasis")(d,y);break;case"strong":case"b":S=n.subParser("makeMarkdown.strong")(d,y);break;case"del":S=n.subParser("makeMarkdown.strikethrough")(d,y);break;case"a":S=n.subParser("makeMarkdown.links")(d,y);break;case"img":S=n.subParser("makeMarkdown.image")(d,y);break;default:S=d.outerHTML+`

`}return S}),n.subParser("makeMarkdown.paragraph",function(d,y){var m="";if(d.hasChildNodes())for(var S=d.childNodes,C=S.length,w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y);return m=m.trim(),m}),n.subParser("makeMarkdown.pre",function(d,y){var m=d.getAttribute("prenum");return"<pre>"+y.preList[m]+"</pre>"}),n.subParser("makeMarkdown.strikethrough",function(d,y){var m="";if(d.hasChildNodes()){m+="~~";for(var S=d.childNodes,C=S.length,w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y);m+="~~"}return m}),n.subParser("makeMarkdown.strong",function(d,y){var m="";if(d.hasChildNodes()){m+="**";for(var S=d.childNodes,C=S.length,w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y);m+="**"}return m}),n.subParser("makeMarkdown.table",function(d,y){var m="",S=[[],[]],C=d.querySelectorAll("thead>tr>th"),w=d.querySelectorAll("tbody>tr"),x,A;for(x=0;x<C.length;++x){var I=n.subParser("makeMarkdown.tableCell")(C[x],y),R="---";if(C[x].hasAttribute("style")){var D=C[x].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(D){case"text-align:left;":R=":---";break;case"text-align:right;":R="---:";break;case"text-align:center;":R=":---:";break}}S[0][x]=I.trim(),S[1][x]=R}for(x=0;x<w.length;++x){var F=S.push([])-1,T=w[x].getElementsByTagName("td");for(A=0;A<C.length;++A){var k=" ";typeof T[A]<"u"&&(k=n.subParser("makeMarkdown.tableCell")(T[A],y)),S[F].push(k)}}var B=3;for(x=0;x<S.length;++x)for(A=0;A<S[x].length;++A){var W=S[x][A].length;W>B&&(B=W)}for(x=0;x<S.length;++x){for(A=0;A<S[x].length;++A)x===1?S[x][A].slice(-1)===":"?S[x][A]=n.helper.padEnd(S[x][A].slice(-1),B-1,"-")+":":S[x][A]=n.helper.padEnd(S[x][A],B,"-"):S[x][A]=n.helper.padEnd(S[x][A],B);m+="| "+S[x].join(" | ")+` |
`}return m.trim()}),n.subParser("makeMarkdown.tableCell",function(d,y){var m="";if(!d.hasChildNodes())return"";for(var S=d.childNodes,C=S.length,w=0;w<C;++w)m+=n.subParser("makeMarkdown.node")(S[w],y,!0);return m.trim()}),n.subParser("makeMarkdown.txt",function(d){var y=d.nodeValue;return y=y.replace(/ +/g," "),y=y.replace(/¨NBSP;/g," "),y=n.helper.unescapeHTMLEntities(y),y=y.replace(/([*_~|`])/g,"\\$1"),y=y.replace(/^(\s*)>/g,"\\$1>"),y=y.replace(/^#/gm,"\\#"),y=y.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),y=y.replace(/^( {0,3}\d+)\./gm,"$1\\."),y=y.replace(/^( {0,3})([+-])/gm,"$1\\$2"),y=y.replace(/]([\s]*)\(/g,"\\]$1\\("),y=y.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),y});var M=this;r.exports?r.exports=n:M.showdown=n}).call(ev)})($f);var nv=$f.exports;const Hd=tv(nv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="167",iv={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rv={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ep=0,Wl=1,tp=2,sv=3,av=0,pu=1,np=2,zn=3,hi=0,nn=1,Vn=2,li=0,or=1,Xl=2,ql=3,Yl=4,ip=5,Ri=100,rp=101,sp=102,ap=103,op=104,cp=200,lp=201,up=202,dp=203,Po=204,Io=205,hp=206,fp=207,pp=208,mp=209,gp=210,_p=211,vp=212,yp=213,bp=214,xp=0,Mp=1,Sp=2,Vs=3,wp=4,Ep=5,Ap=6,Tp=7,da=0,Cp=1,Rp=2,ui=0,Pp=1,Ip=2,Lp=3,Dp=4,Np=5,Up=6,Op=7,Zl="attached",Fp="detached",dc=300,fi=301,Ii=302,Hs=303,Gs=304,os=306,Ws=1e3,Cn=1001,Xs=1002,kt=1003,mu=1004,ov=1004,qr=1005,cv=1005,It=1006,Ls=1007,lv=1007,Hn=1008,uv=1008,jn=1009,gu=1010,_u=1011,ns=1012,hc=1013,pi=1014,cn=1015,cs=1016,fc=1017,pc=1018,fr=1020,vu=35902,yu=1021,bu=1022,tn=1023,xu=1024,Mu=1025,cr=1026,pr=1027,mc=1028,ha=1029,Su=1030,gc=1031,dv=1032,_c=1033,Ds=33776,Ns=33777,Us=33778,Os=33779,Lo=35840,Do=35841,No=35842,Uo=35843,Oo=36196,Fo=37492,ko=37496,Bo=37808,zo=37809,Vo=37810,Ho=37811,Go=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,Zo=37817,jo=37818,Ko=37819,Jo=37820,Qo=37821,Fs=36492,$o=36494,ec=36495,wu=36283,tc=36284,nc=36285,ic=36286,kp=2200,Bp=2201,zp=2202,qs=2300,rc=2301,So=2302,ir=2400,rr=2401,Ys=2402,vc=2500,Eu=2501,hv=0,fv=1,pv=2,Vp=3200,Hp=3201,mv=3202,gv=3203,Ni=0,Gp=1,ri="",Tn="srgb",gi="srgb-linear",yc="display-p3",fa="display-p3-linear",Zs="linear",ht="srgb",js="rec709",Ks="p3",_v=0,$i=7680,vv=7681,yv=7682,bv=7683,xv=34055,Mv=34056,Sv=5386,wv=512,Ev=513,Av=514,Tv=515,Cv=516,Rv=517,Pv=518,jl=519,Wp=512,Xp=513,qp=514,Au=515,Yp=516,Zp=517,jp=518,Kp=519,Js=35044,Iv=35048,Lv=35040,Dv=35045,Nv=35049,Uv=35041,Ov=35046,Fv=35050,kv=35042,Bv="100",Kl="300 es",Gn=2e3,Qs=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const lr=Math.PI/180,is=180/Math.PI;function Mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Tu(r,e){return(r%e+e)%e}function zv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Vv(r,e,t){return r!==e?(t-r)/(e-r):0}function ks(r,e,t){return(1-t)*r+t*e}function Hv(r,e,t,n){return ks(r,e,1-Math.exp(-t*n))}function Gv(r,e=1){return e-Math.abs(Tu(r,e*2)-e)}function Wv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Xv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Yv(r,e){return r+Math.random()*(e-r)}function Zv(r){return r*(.5-Math.random())}function jv(r){r!==void 0&&(Gd=r);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kv(r){return r*lr}function Jv(r){return r*is}function Qv(r){return(r&r-1)===0&&r!==0}function $v(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ey(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ty(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*f,o*l);break;case"YZY":r.set(c*f,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*f,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*p,o*l);break;case"YXY":r.set(c*p,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function en(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ny={DEG2RAD:lr,RAD2DEG:is,generateUUID:Mn,clamp:St,euclideanModulo:Tu,mapLinear:zv,inverseLerp:Vv,lerp:ks,damp:Hv,pingpong:Gv,smoothstep:Wv,smootherstep:Xv,randInt:qv,randFloat:Yv,randFloatSpread:Zv,seededRandom:jv,degToRad:Kv,radToDeg:Jv,isPowerOfTwo:Qv,ceilPowerOfTwo:$v,floorPowerOfTwo:ey,setQuaternionFromProperEuler:ty,normalize:Ye,denormalize:en};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],b=i[0],v=i[3],_=i[6],E=i[1],M=i[4],d=i[7],y=i[2],m=i[5],S=i[8];return s[0]=a*b+o*E+c*y,s[3]=a*v+o*M+c*m,s[6]=a*_+o*d+c*S,s[1]=l*b+u*E+h*y,s[4]=l*v+u*M+h*m,s[7]=l*_+u*d+h*S,s[2]=f*b+p*E+g*y,s[5]=f*v+p*M+g*m,s[8]=f*_+p*d+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*l-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(u*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new qe;function Jp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const iy={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Yr(r,e){return new iy[r](e)}function $s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qp(){const r=$s("canvas");return r.style.display="block",r}const Wd={};function Qr(r){r in Wd||(Wd[r]=!0,console.warn(r))}function ry(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Xd=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qd=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ms={[gi]:{transfer:Zs,primaries:js,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Tn]:{transfer:ht,primaries:js,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fa]:{transfer:Zs,primaries:Ks,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(qd),fromReference:r=>r.applyMatrix3(Xd)},[yc]:{transfer:ht,primaries:Ks,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(qd),fromReference:r=>r.applyMatrix3(Xd).convertLinearToSRGB()}},sy=new Set([gi,fa]),rt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!sy.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ms[e].toReference,i=ms[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ms[r].primaries},getTransfer:function(r){return r===ri?Zs:ms[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ms[e].luminanceCoefficients)}};function $r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function nl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=$s("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$r(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($r(t[n]/255)*255):t[n]=$r(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ay=0;class sr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(il(i[a].image)):s.push(il(i[a]))}else s=il(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function il(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$p.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;class wt extends _i{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Cn,i=Cn,s=It,a=Hn,o=tn,c=jn,l=wt.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Mn(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=dc;wt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],b=c[2],v=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(g+v)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,d=(p+1)/2,y=(_+1)/2,m=(u+f)/4,S=(h+b)/4,C=(g+v)/4;return M>d&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=m/n,s=S/n):d>y?d<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(d),n=m/i,s=C/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=S/s,i=C/s),this.set(n,i,s,t),this}let E=Math.sqrt((v-g)*(v-g)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(v-g)/E,this.y=(h-b)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class em extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends em{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bc extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cy extends Un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new bc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Cu extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ly extends Un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Cu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==f||l!==p||u!==g){let v=1-o;const _=c*f+l*p+u*g+h*b,E=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const y=Math.sqrt(M),m=Math.atan2(y,_*E);v=Math.sin(v*m)/y,o=Math.sin(o*m)/y}const d=o*E;if(c=c*v+f*d,l=l*v+p*d,u=u*v+g*d,h=h*v+b*d,v===1-o){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),f=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new U,Yd=new ln;class rn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Ra.subVectors(this.max,gs),Ar.subVectors(e.a,gs),Tr.subVectors(e.b,gs),Cr.subVectors(e.c,gs),yi.subVectors(Tr,Ar),bi.subVectors(Cr,Tr),Vi.subVectors(Ar,Cr);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Vi.z,Vi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Vi.z,0,-Vi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Vi.y,Vi.x,0];return!sl(t,Ar,Tr,Cr,Ra)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,Ar,Tr,Cr,Ra))?!1:(Pa.crossVectors(yi,bi),t=[Pa.x,Pa.y,Pa.z],sl(t,Ar,Tr,Cr,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,Ca=new rn,Ar=new U,Tr=new U,Cr=new U,yi=new U,bi=new U,Vi=new U,gs=new U,Ra=new U,Pa=new U,Hi=new U;function sl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Hi.fromArray(r,s);const o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const uy=new rn,_s=new U,al=new U;class Yt{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(al)),this.expandByPoint(_s.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new U,ol=new U,Ia=new U,xi=new U,cl=new U,La=new U,ll=new U;class ls{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ol.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(ol);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=xi.dot(this.direction),c=-xi.dot(Ia),l=xi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const b=1/u;h*=b,f*=b,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ol).addScaledVector(Ia,f),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){cl.subVectors(t,e),La.subVectors(n,e),ll.crossVectors(cl,La);let a=this.direction.dot(ll),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const c=o*this.direction.dot(La.crossVectors(xi,La));if(c<0)return null;const l=o*this.direction.dot(cl.cross(xi));if(l<0||c+l>a)return null;const u=-o*xi.dot(ll);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,a,o,c,l,u,h,f,p,g,b,v){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,f,p,g,b,v)}set(e,t,n,i,s,a,o,c,l,u,h,f,p,g,b,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=b,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,b=l*h;t[0]=f+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,b=l*h;t[0]=f-b*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+b,t[1]=c*h,t[5]=b*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-b*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+b,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,hy)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Mi.crossVectors(n,mn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Mi.crossVectors(n,mn)),Mi.normalize(),Da.crossVectors(mn,Mi),i[0]=Mi.x,i[4]=Da.x,i[8]=mn.x,i[1]=Mi.y,i[5]=Da.y,i[9]=mn.y,i[2]=Mi.z,i[6]=Da.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],b=n[6],v=n[10],_=n[14],E=n[3],M=n[7],d=n[11],y=n[15],m=i[0],S=i[4],C=i[8],w=i[12],x=i[1],A=i[5],I=i[9],R=i[13],D=i[2],F=i[6],T=i[10],k=i[14],B=i[3],W=i[7],K=i[11],j=i[15];return s[0]=a*m+o*x+c*D+l*B,s[4]=a*S+o*A+c*F+l*W,s[8]=a*C+o*I+c*T+l*K,s[12]=a*w+o*R+c*k+l*j,s[1]=u*m+h*x+f*D+p*B,s[5]=u*S+h*A+f*F+p*W,s[9]=u*C+h*I+f*T+p*K,s[13]=u*w+h*R+f*k+p*j,s[2]=g*m+b*x+v*D+_*B,s[6]=g*S+b*A+v*F+_*W,s[10]=g*C+b*I+v*T+_*K,s[14]=g*w+b*R+v*k+_*j,s[3]=E*m+M*x+d*D+y*B,s[7]=E*S+M*A+d*F+y*W,s[11]=E*C+M*I+d*T+y*K,s[15]=E*w+M*R+d*k+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],b=e[7],v=e[11],_=e[15];return g*(+s*c*h-i*l*h-s*o*f+n*l*f+i*o*p-n*c*p)+b*(+t*c*p-t*l*f+s*a*f-i*a*p+i*l*u-s*c*u)+v*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+_*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],b=e[13],v=e[14],_=e[15],E=h*v*l-b*f*l+b*c*p-o*v*p-h*c*_+o*f*_,M=g*f*l-u*v*l-g*c*p+a*v*p+u*c*_-a*f*_,d=u*b*l-g*h*l+g*o*p-a*b*p-u*o*_+a*h*_,y=g*h*c-u*b*c-g*o*f+a*b*f+u*o*v-a*h*v,m=t*E+n*M+i*d+s*y;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/m;return e[0]=E*S,e[1]=(b*f*s-h*v*s-b*i*p+n*v*p+h*i*_-n*f*_)*S,e[2]=(o*v*s-b*c*s+b*i*l-n*v*l-o*i*_+n*c*_)*S,e[3]=(h*c*s-o*f*s-h*i*l+n*f*l+o*i*p-n*c*p)*S,e[4]=M*S,e[5]=(u*v*s-g*f*s+g*i*p-t*v*p-u*i*_+t*f*_)*S,e[6]=(g*c*s-a*v*s-g*i*l+t*v*l+a*i*_-t*c*_)*S,e[7]=(a*f*s-u*c*s+u*i*l-t*f*l-a*i*p+t*c*p)*S,e[8]=d*S,e[9]=(g*h*s-u*b*s-g*n*p+t*b*p+u*n*_-t*h*_)*S,e[10]=(a*b*s-g*o*s+g*n*l-t*b*l-a*n*_+t*o*_)*S,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*p-t*o*p)*S,e[12]=y*S,e[13]=(u*b*i-g*h*i+g*n*f-t*b*f-u*n*v+t*h*v)*S,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*v-t*o*v)*S,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,b=a*u,v=a*h,_=o*h,E=c*l,M=c*u,d=c*h,y=n.x,m=n.y,S=n.z;return i[0]=(1-(b+_))*y,i[1]=(p+d)*y,i[2]=(g-M)*y,i[3]=0,i[4]=(p-d)*m,i[5]=(1-(f+_))*m,i[6]=(v+E)*m,i[7]=0,i[8]=(g+M)*S,i[9]=(v-E)*S,i[10]=(1-(f+b))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Rr.set(i[0],i[1],i[2]).length();const a=Rr.set(i[4],i[5],i[6]).length(),o=Rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const l=1/s,u=1/a,h=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Gn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(o===Gn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qs)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Gn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*l,p=(n+i)*u;let g,b;if(o===Gn)g=(a+s)*h,b=-2*h;else if(o===Qs)g=s*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rr=new U,Ln=new Ue,dy=new U(0,0,0),hy=new U(1,1,1),Mi=new U,Da=new U,mn=new U,Zd=new Ue,jd=new ln;class Sn{constructor(e=0,t=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const Kd=new U,Pr=new ln,ei=new Ue,Na=new U,vs=new U,py=new U,my=new ln,Jd=new U(1,0,0),Qd=new U(0,1,0),$d=new U(0,0,1),eh={type:"added"},gy={type:"removed"},Ir={type:"childadded",child:null},ul={type:"childremoved",child:null};class it extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new U,t=new Sn,n=new ln,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new qe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(vs,Na,this.up):ei.lookAt(Na,vs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),Pr.setFromRotationMatrix(ei),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gy),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new U(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,ti=new U,dl=new U,ni=new U,Lr=new U,Dr=new U,th=new U,hl=new U,fl=new U,pl=new U;class _n{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dn.subVectors(i,t),ti.subVectors(n,t),dl.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(ti),c=Dn.dot(dl),l=ti.dot(ti),u=ti.dot(dl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),ti.subVectors(e,t),Dn.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Lr.subVectors(i,n),Dr.subVectors(s,n),hl.subVectors(e,n);const c=Lr.dot(hl),l=Dr.dot(hl);if(c<=0&&l<=0)return t.copy(n);fl.subVectors(e,i);const u=Lr.dot(fl),h=Dr.dot(fl);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Lr,a);pl.subVectors(e,s);const p=Lr.dot(pl),g=Dr.dot(pl);if(g>=0&&p<=g)return t.copy(s);const b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Dr,o);const v=u*g-p*h;if(v<=0&&h-u>=0&&p-g>=0)return th.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(th,o);const _=1/(v+b+f);return a=b*_,o=f*_,t.copy(n).addScaledVector(Lr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function ml(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Tu(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ml(a,s,e+1/3),this.g=ml(a,s,e),this.b=ml(a,s,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return rt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(St(Wt.r*255,0,255))*65536+Math.round(St(Wt.g*255,0,255))*256+Math.round(St(Wt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Tn){rt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ua);const n=ks(Si.h,Ua.h,t),i=ks(Si.s,Ua.s,t),s=ks(Si.l,Ua.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ve;ve.NAMES=tm;let _y=0;class Jt extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=or,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Io,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ui extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const si=vy();function vy(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function on(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=St(r,-65504,65504),si.floatView[0]=r;const e=si.uint32View[0],t=e>>23&511;return si.baseTable[t]+((e&8388607)>>si.shiftTable[t])}function Cs(r){const e=r>>10;return si.uint32View[0]=si.mantissaTable[si.offsetTable[e]+(r&1023)]+si.exponentTable[e],si.floatView[0]}const yy={toHalfFloat:on,fromHalfFloat:Cs},Pt=new U,Oa=new Q;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),e}}class by extends dt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class xy extends dt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class My extends dt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Sy extends dt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ru extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wy extends dt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Pu extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ey extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Cs(this.array[e*this.itemSize]);return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=on(t),this}getY(e){let t=Cs(this.array[e*this.itemSize+1]);return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=on(t),this}getZ(e){let t=Cs(this.array[e*this.itemSize+2]);return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=on(t),this}getW(e){let t=Cs(this.array[e*this.itemSize+3]);return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=on(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(i),this.array[e+3]=on(s),this}}class Ee extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ay=0;const En=new Ue,gl=new it,Nr=new U,gn=new rn,ys=new rn,Ot=new U;class je extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?Pu:Ru)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(gn.min,ys.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,ys.max),gn.expandByPoint(Ot)):(gn.expandByPoint(ys.min),gn.expandByPoint(ys.max))}gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(Nr.fromBufferAttribute(e,l),Ot.add(Nr)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new U,c[C]=new U;const l=new U,u=new U,h=new U,f=new Q,p=new Q,g=new Q,b=new U,v=new U;function _(C,w,x){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),o[C].add(b),o[w].add(b),o[x].add(b),c[C].add(v),c[w].add(v),c[x].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,w=E.length;C<w;++C){const x=E[C],A=x.start,I=x.count;for(let R=A,D=A+I;R<D;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const M=new U,d=new U,y=new U,m=new U;function S(C){y.fromBufferAttribute(i,C),m.copy(y);const w=o[C];M.copy(w),M.sub(y.multiplyScalar(y.dot(w))).normalize(),d.crossVectors(m,w);const A=d.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,A)}for(let C=0,w=E.length;C<w;++C){const x=E[C],A=x.start,I=x.count;for(let R=A,D=A+I;R<D;R+=3)S(e.getX(R+0)),S(e.getX(R+1)),S(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),b=e.getX(f+1),v=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,v),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,v),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let b=0,v=c.length;b<v;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*u;for(let _=0;_<u;_++)f[g++]=l[p++]}return new dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new Ue,Gi=new ls,Fa=new Yt,ih=new U,Ur=new U,Or=new U,Fr=new U,_l=new U,ka=new U,Ba=new Q,za=new Q,Va=new Q,rh=new U,sh=new U,ah=new U,Ha=new U,Ga=new U;class Tt extends it{constructor(e=new je,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(_l.fromBufferAttribute(h,e),a?ka.addScaledVector(_l,u):ka.addScaledVector(_l.sub(t),u))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Fa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Fa,ih)===null||Gi.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(nh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){const v=f[g],_=a[v.materialIndex],E=Math.max(v.start,p.start),M=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let d=E,y=M;d<y;d+=3){const m=o.getX(d),S=o.getX(d+1),C=o.getX(d+2);i=Wa(this,_,e,n,l,u,h,m,S,C),i&&(i.faceIndex=Math.floor(d/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let v=g,_=b;v<_;v+=3){const E=o.getX(v),M=o.getX(v+1),d=o.getX(v+2);i=Wa(this,a,e,n,l,u,h,E,M,d),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){const v=f[g],_=a[v.materialIndex],E=Math.max(v.start,p.start),M=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let d=E,y=M;d<y;d+=3){const m=d,S=d+1,C=d+2;i=Wa(this,_,e,n,l,u,h,m,S,C),i&&(i.faceIndex=Math.floor(d/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let v=g,_=b;v<_;v+=3){const E=v,M=v+1,d=v+2;i=Wa(this,a,e,n,l,u,h,E,M,d),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function Ty(r,e,t,n,i,s,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===hi,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:r}}function Wa(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Ur),r.getVertexPosition(c,Or),r.getVertexPosition(l,Fr);const u=Ty(r,e,t,n,Ur,Or,Fr,Ha);if(u){i&&(Ba.fromBufferAttribute(i,o),za.fromBufferAttribute(i,c),Va.fromBufferAttribute(i,l),u.uv=_n.getInterpolation(Ha,Ur,Or,Fr,Ba,za,Va,new Q)),s&&(Ba.fromBufferAttribute(s,o),za.fromBufferAttribute(s,c),Va.fromBufferAttribute(s,l),u.uv1=_n.getInterpolation(Ha,Ur,Or,Fr,Ba,za,Va,new Q)),a&&(rh.fromBufferAttribute(a,o),sh.fromBufferAttribute(a,c),ah.fromBufferAttribute(a,l),u.normal=_n.getInterpolation(Ha,Ur,Or,Fr,rh,sh,ah,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};_n.getNormal(Ur,Or,Fr,h.normal),u.face=h}return u}class yr extends je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function g(b,v,_,E,M,d,y,m,S,C,w){const x=d/S,A=y/C,I=d/2,R=y/2,D=m/2,F=S+1,T=C+1;let k=0,B=0;const W=new U;for(let K=0;K<T;K++){const j=K*A-R;for(let xe=0;xe<F;xe++){const Pe=xe*x-I;W[b]=Pe*E,W[v]=j*M,W[_]=D,l.push(W.x,W.y,W.z),W[b]=0,W[v]=0,W[_]=m>0?1:-1,u.push(W.x,W.y,W.z),h.push(xe/S),h.push(1-K/C),k+=1}}for(let K=0;K<C;K++)for(let j=0;j<S;j++){const xe=f+j+F*K,Pe=f+j+F*(K+1),Z=f+(j+1)+F*(K+1),$=f+(j+1)+F*K;c.push(xe,Pe,$),c.push(Pe,Z,$),B+=6}o.addGroup(p,B,w),p+=B,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(r){const e={};for(let t=0;t<r.length;t++){const n=rs(r[t]);for(const i in n)e[i]=n[i]}return e}function Cy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const im={clone:rs,merge:$t};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new U,oh=new Q,ch=new Q;class Ft extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,oh,ch),t.subVectors(ch,oh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kr=-90,Br=1;class rm extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(kr,Br,e,t);i.layers=this.layers,this.add(i);const s=new Ft(kr,Br,e,t);s.layers=this.layers,this.add(s);const a=new Ft(kr,Br,e,t);a.layers=this.layers,this.add(a);const o=new Ft(kr,Br,e,t);o.layers=this.layers,this.add(o);const c=new Ft(kr,Br,e,t);c.layers=this.layers,this.add(c);const l=new Ft(kr,Br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pa extends wt{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sm extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yr(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:li});s.uniforms.tEquirect.value=t;const a=new Tt(i,s),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=It),new rm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const vl=new U,Iy=new U,Ly=new qe;class Ci{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vl.subVectors(n,t).cross(Iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ly.getNormalMatrix(e),i=this.coplanarPoint(vl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Yt,Xa=new U;class ma{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,s=new Ci,a=new Ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],b=i[10],v=i[11],_=i[12],E=i[13],M=i[14],d=i[15];if(n[0].setComponents(c-s,f-l,v-p,d-_).normalize(),n[1].setComponents(c+s,f+l,v+p,d+_).normalize(),n[2].setComponents(c+a,f+u,v+g,d+E).normalize(),n[3].setComponents(c-a,f-u,v-g,d-E).normalize(),n[4].setComponents(c-o,f-h,v-b,d-M).normalize(),t===Gn)n[5].setComponents(c+o,f+h,v+b,d+M).normalize();else if(t===Qs)n[5].setComponents(o,h,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xa.x=i.normal.x>0?e.max.x:e.min.x,Xa.y=i.normal.y>0?e.max.y:e.min.y,Xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function am(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dy(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(r.bindBuffer(l,o),h.count===-1&&f.length===0&&r.bufferSubData(l,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const b=f[p];r.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class us extends je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],b=[],v=[];for(let _=0;_<u;_++){const E=_*f-a;for(let M=0;M<l;M++){const d=M*h-s;g.push(d,-E,0),b.push(0,0,1),v.push(M/o),v.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<o;E++){const M=E+l*_,d=E+l*(_+1),y=E+1+l*(_+1),m=E+1+l*_;p.push(M,d,m),p.push(d,y,m)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(b,3)),this.setAttribute("uv",new Ee(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Db=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Ny,alphahash_pars_fragment:Uy,alphamap_fragment:Oy,alphamap_pars_fragment:Fy,alphatest_fragment:ky,alphatest_pars_fragment:By,aomap_fragment:zy,aomap_pars_fragment:Vy,batching_pars_vertex:Hy,batching_vertex:Gy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:Zy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:Qy,color_fragment:$y,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ab,displacementmap_vertex:ob,emissivemap_fragment:cb,emissivemap_pars_fragment:lb,colorspace_fragment:ub,colorspace_pars_fragment:db,envmap_fragment:hb,envmap_common_pars_fragment:fb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:yb,fog_pars_fragment:bb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:Mb,lights_lambert_fragment:Sb,lights_lambert_pars_fragment:wb,lights_pars_begin:Eb,lights_toon_fragment:Tb,lights_toon_pars_fragment:Cb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Ib,lights_physical_pars_fragment:Lb,lights_fragment_begin:Db,lights_fragment_maps:Nb,lights_fragment_end:Ub,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Bb,map_fragment:zb,map_pars_fragment:Vb,map_particle_fragment:Hb,map_particle_pars_fragment:Gb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:Xb,morphinstance_vertex:qb,morphcolor_vertex:Yb,morphnormal_vertex:Zb,morphtarget_pars_vertex:jb,morphtarget_vertex:Kb,normal_fragment_begin:Jb,normal_fragment_maps:Qb,normal_pars_fragment:$b,normal_pars_vertex:ex,normal_vertex:tx,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:sx,iridescence_pars_fragment:ax,opaque_fragment:ox,packing:cx,premultiplied_alpha_fragment:lx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:hx,roughnessmap_fragment:fx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:gx,shadowmap_vertex:_x,shadowmask_pars_fragment:vx,skinbase_vertex:yx,skinning_pars_vertex:bx,skinning_vertex:xx,skinnormal_vertex:Mx,specularmap_fragment:Sx,specularmap_pars_fragment:wx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Ax,transmission_fragment:Tx,transmission_pars_fragment:Cx,uv_pars_fragment:Rx,uv_pars_vertex:Px,uv_vertex:Ix,worldpos_vertex:Lx,background_vert:Dx,background_frag:Nx,backgroundCube_vert:Ux,backgroundCube_frag:Ox,cube_vert:Fx,cube_frag:kx,depth_vert:Bx,depth_frag:zx,distanceRGBA_vert:Vx,distanceRGBA_frag:Hx,equirect_vert:Gx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:Yx,meshbasic_frag:Zx,meshlambert_vert:jx,meshlambert_frag:Kx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:$x,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:aM,points_vert:oM,points_frag:cM,shadow_vert:lM,shadow_frag:uM,sprite_vert:dM,sprite_frag:hM},pe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Nn={basic:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([pe.lights,pe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Nn.physical={uniforms:$t([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const qa={r:0,b:0,g:0},Xi=new Sn,fM=new Ue;function pM(r,e,t,n,i,s,a){const o=new ve(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function b(E){let M=!1;const d=g(E);d===null?_(o,c):d&&d.isColor&&(_(d,1),M=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(E,M){const d=g(M);d&&(d.isCubeTexture||d.mapping===os)?(u===void 0&&(u=new Tt(new yr(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:rs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,m,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xi.copy(M.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,d.isCubeTexture&&d.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=d,u.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(Xi)),u.material.toneMapped=rt.getTransfer(d.colorSpace)!==ht,(h!==d||f!==d.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=d,f=d.version,p=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):d&&d.isTexture&&(l===void 0&&(l=new Tt(new us(2,2),new On({name:"BackgroundMaterial",uniforms:rs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=d,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(d.colorSpace)!==ht,d.matrixAutoUpdate===!0&&d.updateMatrix(),l.material.uniforms.uvTransform.value.copy(d.matrix),(h!==d||f!==d.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,h=d,f=d.version,p=r.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function _(E,M){E.getRGB(qa,nm(r)),n.buffers.color.setClear(qa.r,qa.g,qa.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,_(o,c)},render:b,addToRenderList:v}}function mM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(x,A,I,R,D){let F=!1;const T=h(R,I,A);s!==T&&(s=T,l(s.object)),F=p(x,R,I,D),F&&g(x,R,I,D),D!==null&&e.update(D,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,d(x,A,I,R),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,A,I){const R=I.wireframe===!0;let D=n[x.id];D===void 0&&(D={},n[x.id]=D);let F=D[A.id];F===void 0&&(F={},D[A.id]=F);let T=F[R];return T===void 0&&(T=f(c()),F[R]=T),T}function f(x){const A=[],I=[],R=[];for(let D=0;D<t;D++)A[D]=0,I[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:R,object:x,attributes:{},index:null}}function p(x,A,I,R){const D=s.attributes,F=A.attributes;let T=0;const k=I.getAttributes();for(const B in k)if(k[B].location>=0){const K=D[B];let j=F[B];if(j===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),K===void 0||K.attribute!==j||j&&K.data!==j.data)return!0;T++}return s.attributesNum!==T||s.index!==R}function g(x,A,I,R){const D={},F=A.attributes;let T=0;const k=I.getAttributes();for(const B in k)if(k[B].location>=0){let K=F[B];K===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const j={};j.attribute=K,K&&K.data&&(j.data=K.data),D[B]=j,T++}s.attributes=D,s.attributesNum=T,s.index=R}function b(){const x=s.newAttributes;for(let A=0,I=x.length;A<I;A++)x[A]=0}function v(x){_(x,0)}function _(x,A){const I=s.newAttributes,R=s.enabledAttributes,D=s.attributeDivisors;I[x]=1,R[x]===0&&(r.enableVertexAttribArray(x),R[x]=1),D[x]!==A&&(r.vertexAttribDivisor(x,A),D[x]=A)}function E(){const x=s.newAttributes,A=s.enabledAttributes;for(let I=0,R=A.length;I<R;I++)A[I]!==x[I]&&(r.disableVertexAttribArray(I),A[I]=0)}function M(x,A,I,R,D,F,T){T===!0?r.vertexAttribIPointer(x,A,I,D,F):r.vertexAttribPointer(x,A,I,R,D,F)}function d(x,A,I,R){b();const D=R.attributes,F=I.getAttributes(),T=A.defaultAttributeValues;for(const k in F){const B=F[k];if(B.location>=0){let W=D[k];if(W===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(W=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(W=x.instanceColor)),W!==void 0){const K=W.normalized,j=W.itemSize,xe=e.get(W);if(xe===void 0)continue;const Pe=xe.buffer,Z=xe.type,$=xe.bytesPerElement,le=Z===r.INT||Z===r.UNSIGNED_INT||W.gpuType===hc;if(W.isInterleavedBufferAttribute){const se=W.data,Se=se.stride,ze=W.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)_(B.location+Ne,se.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)v(B.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Ne=0;Ne<B.locationSize;Ne++)M(B.location+Ne,j/B.locationSize,Z,K,Se*$,(ze+j/B.locationSize*Ne)*$,le)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)_(B.location+se,W.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<B.locationSize;se++)v(B.location+se);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let se=0;se<B.locationSize;se++)M(B.location+se,j/B.locationSize,Z,K,j*$,j/B.locationSize*se*$,le)}}else if(T!==void 0){const K=T[k];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(B.location,K);break;case 3:r.vertexAttrib3fv(B.location,K);break;case 4:r.vertexAttrib4fv(B.location,K);break;default:r.vertexAttrib1fv(B.location,K)}}}}E()}function y(){C();for(const x in n){const A=n[x];for(const I in A){const R=A[I];for(const D in R)u(R[D].object),delete R[D];delete A[I]}delete n[x]}}function m(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const I in A){const R=A[I];for(const D in R)u(R[D].object),delete R[D];delete A[I]}delete n[x.id]}function S(x){for(const A in n){const I=n[A];if(I[x.id]===void 0)continue;const R=I[x.id];for(const D in R)u(R[D].object),delete R[D];delete I[x.id]}}function C(){w(),a=!0,s!==i&&(s=i,l(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:m,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:v,disableUnusedAttributes:E}}function gM(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b];for(let b=0;b<f.length;b++)t.update(g,n,f[b])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _M(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(m){return!(m!==tn&&n.convert(m)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){const S=m===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==jn&&n.convert(m)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&m!==cn&&!S)}function c(m){if(m==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),d=p>0,y=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:d,maxSamples:y}}function vM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ci,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,b=h.clipIntersection,v=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!v)s?u(null):l();else{const E=s?0:n,M=E*4;let d=_.clippingState||null;c.value=d,d=u(g,f,M,p);for(let y=0;y!==M;++y)d[y]=t[y];_.clippingState=d,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const b=h!==null?h.length:0;let v=null;if(b!==0){if(v=c.value,g!==!0||v===null){const _=p+b*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(v===null||v.length<_)&&(v=new Float32Array(_));for(let M=0,d=p;M!==b;++M,d+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(v,d),v[d+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}function yM(r){let e=new WeakMap;function t(a,o){return o===Hs?a.mapping=fi:o===Gs&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hs||o===Gs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new sm(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Sc extends Mc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,lh=[.125,.215,.35,.446,.526,.582],nr=20,yl=new Sc,uh=new ve;let bl=null,xl=0,Ml=0,Sl=!1;const er=(1+Math.sqrt(5))/2,zr=1/er,dh=[new U(-er,zr,0),new U(er,zr,0),new U(-zr,0,er),new U(zr,0,er),new U(0,er,-zr),new U(0,er,zr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,xl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:cs,format:tn,colorSpace:gi,depthBuffer:!1},i=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(s)),this._blurMaterial=xM(s,e,t)}return i}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,i){const o=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(uh),u.toneMapping=ui,u.autoClear=!1;const p=new Ui({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Tt(new yr,p);let b=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,b=!0):(p.color.copy(uh),b=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):E===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const M=this._cubeSize;Ya(i,E*M,_>2?M:0,M,M),u.setRenderTarget(i),b&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fi||e.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ya(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=dh[(i-s-1)%dh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*nr-1),b=s/g,v=isFinite(s)?1+Math.floor(u*b):nr;v>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${nr}`);const _=[];let E=0;for(let S=0;S<nr;++S){const C=S/b,w=Math.exp(-C*C/2);_.push(w),S===0?E+=w:S<v&&(E+=2*w)}for(let S=0;S<_.length;S++)_[S]=_[S]/E;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const d=this._sizeLods[i],y=3*d*(i>M-Zr?i-M+Zr:0),m=4*(this._cubeSize-d);Ya(t,y,m,3*d,2*d),c.setRenderTarget(t),c.render(h,yl)}}function bM(r){const e=[],t=[],n=[];let i=r;const s=r-Zr+1+lh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Zr?c=lh[a-r+Zr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,b=3,v=2,_=1,E=new Float32Array(b*g*p),M=new Float32Array(v*g*p),d=new Float32Array(_*g*p);for(let m=0;m<p;m++){const S=m%3*2/3-1,C=m>2?0:-1,w=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];E.set(w,b*g*m),M.set(f,v*g*m);const x=[m,m,m,m,m,m];d.set(x,_*g*m)}const y=new je;y.setAttribute("position",new dt(E,b)),y.setAttribute("uv",new dt(M,v)),y.setAttribute("faceIndex",new dt(d,_)),e.push(y),i>Zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(r,e,t){const n=new Un(r,e,t);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xM(r,e,t){const n=new Float32Array(nr),i=new U(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function fh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ph(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MM(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Hs||c===Gs,u=c===fi||c===Ii;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Jl(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Jl(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function SM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wM(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const b=f.morphAttributes[g];for(let v=0,_=b.length;v<_;v++)e.remove(b[v])}f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const b=p[g];for(let v=0,_=b.length;v<_;v++)e.update(b[v],r.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let b=0;if(p!==null){const E=p.array;b=p.version;for(let M=0,d=E.length;M<d;M+=3){const y=E[M+0],m=E[M+1],S=E[M+2];f.push(y,m,m,S,S,y)}}else if(g!==void 0){const E=g.array;b=g.version;for(let M=0,d=E.length/3-1;M<d;M+=3){const y=M+0,m=M+1,S=M+2;f.push(y,m,m,S,S,y)}}else return;const v=new(Jp(f)?Pu:Ru)(f,1);v.version=b;const _=s.get(h);_&&e.remove(_),s.set(h,v)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function EM(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){r.drawElements(n,p,s,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let v=0;for(let _=0;_<g;_++)v+=p[_];t.update(v,n,1)}function h(f,p,g,b){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<f.length;_++)l(f[_]/a,p[_],b[_]);else{v.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,b,0,g);let _=0;for(let E=0;E<g;E++)_+=p[E];for(let E=0;E<b.length;E++)t.update(_,n,b[E])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function AM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function TM(r,e,t){const n=new WeakMap,i=new lt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let w=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let d=o.attributes.position.count*M,y=1;d>e.maxTextureSize&&(y=Math.ceil(d/e.maxTextureSize),d=e.maxTextureSize);const m=new Float32Array(d*y*4*h),S=new bc(m,d,y,h);S.type=cn,S.needsUpdate=!0;const C=M*4;for(let x=0;x<h;x++){const A=v[x],I=_[x],R=E[x],D=d*y*4*x;for(let F=0;F<A.count;F++){const T=F*C;p===!0&&(i.fromBufferAttribute(A,F),m[D+T+0]=i.x,m[D+T+1]=i.y,m[D+T+2]=i.z,m[D+T+3]=0),g===!0&&(i.fromBufferAttribute(I,F),m[D+T+4]=i.x,m[D+T+5]=i.y,m[D+T+6]=i.z,m[D+T+7]=0),b===!0&&(i.fromBufferAttribute(R,F),m[D+T+8]=i.x,m[D+T+9]=i.y,m[D+T+10]=i.z,m[D+T+11]=R.itemSize===4?i.w:1)}}f={count:h,texture:S,size:new Q(d,y)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function CM(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Lu extends wt{constructor(e,t,n,i,s,a,o,c,l,u=cr){if(u!==cr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=pi),n===void 0&&u===pr&&(n=fr),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const om=new wt,mh=new Lu(1,1),cm=new bc,lm=new Cu,um=new pa,gh=[],_h=[],vh=new Float32Array(16),yh=new Float32Array(9),bh=new Float32Array(4);function ds(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=gh[i];if(s===void 0&&(s=new Float32Array(i),gh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wc(r,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function RM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function PM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function DM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;bh.set(n),r.uniformMatrix2fv(this.addr,!1,bh),Ut(t,n)}}function NM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;yh.set(n),r.uniformMatrix3fv(this.addr,!1,yh),Ut(t,n)}}function UM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;vh.set(n),r.uniformMatrix4fv(this.addr,!1,vh),Ut(t,n)}}function OM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function zM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function WM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mh.compareFunction=Au,s=mh):s=om,t.setTexture2D(e||s,i)}function XM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lm,i)}function qM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||um,i)}function YM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cm,i)}function ZM(r){switch(r){case 5126:return RM;case 35664:return PM;case 35665:return IM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function jM(r,e){r.uniform1fv(this.addr,e)}function KM(r,e){const t=ds(e,this.size,2);r.uniform2fv(this.addr,t)}function JM(r,e){const t=ds(e,this.size,3);r.uniform3fv(this.addr,t)}function QM(r,e){const t=ds(e,this.size,4);r.uniform4fv(this.addr,t)}function $M(r,e){const t=ds(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function eS(r,e){const t=ds(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tS(r,e){const t=ds(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nS(r,e){r.uniform1iv(this.addr,e)}function iS(r,e){r.uniform2iv(this.addr,e)}function rS(r,e){r.uniform3iv(this.addr,e)}function sS(r,e){r.uniform4iv(this.addr,e)}function aS(r,e){r.uniform1uiv(this.addr,e)}function oS(r,e){r.uniform2uiv(this.addr,e)}function cS(r,e){r.uniform3uiv(this.addr,e)}function lS(r,e){r.uniform4uiv(this.addr,e)}function uS(r,e,t){const n=this.cache,i=e.length,s=wc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||om,s[a])}function dS(r,e,t){const n=this.cache,i=e.length,s=wc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||lm,s[a])}function hS(r,e,t){const n=this.cache,i=e.length,s=wc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||um,s[a])}function fS(r,e,t){const n=this.cache,i=e.length,s=wc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cm,s[a])}function pS(r){switch(r){case 5126:return jM;case 35664:return KM;case 35665:return JM;case 35666:return QM;case 35674:return $M;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return aS;case 36294:return oS;case 36295:return cS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return fS}}class mS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ZM(t.type)}}class gS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pS(t.type)}}class _S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function xh(r,e){r.seq.push(e),r.map[e.id]=e}function vS(r,e,t){const n=r.name,i=n.length;for(wl.lastIndex=0;;){const s=wl.exec(n),a=wl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){xh(t,l===void 0?new mS(o,r,e):new gS(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new _S(o),xh(t,h)),t=h}}}class wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);vS(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Mh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yS=37297;let bS=0;function xS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function MS(r){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(r);let n;switch(e===t?n="":e===Ks&&t===js?n="LinearDisplayP3ToLinearSRGB":e===js&&t===Ks&&(n="LinearSRGBToLinearDisplayP3"),r){case gi:case fa:return[n,"LinearTransferOETF"];case Tn:case yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Sh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+xS(r.getShaderSource(e),a)}else return i}function SS(r,e){const t=MS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wS(r,e){let t;switch(e){case Pp:t="Linear";break;case Ip:t="Reinhard";break;case Lp:t="OptimizedCineon";break;case Dp:t="ACESFilmic";break;case Up:t="AgX";break;case Op:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new U;function ES(){rt.getLuminanceCoefficients(Za);const r=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function TS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Rs(r){return r!==""}function wh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(r){return r.replace(RS,IS)}const PS=new Map;function IS(r,e){let t=Oe[e];if(t===void 0){const n=PS.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(r){return r.replace(LS,DS)}function DS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Th(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===np?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function US(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fi:case Ii:e="ENVMAP_TYPE_CUBE";break;case os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function FS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function kS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function BS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=NS(t),l=US(t),u=OS(t),h=FS(t),f=kS(t),p=AS(t),g=TS(s),b=i.createProgram();let v,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),_.length>0&&(_+=`
`)):(v=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),_=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ui?wS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,SS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Ql(a),a=wh(a,t),a=Eh(a,t),o=Ql(o),o=wh(o,t),o=Eh(o,t),a=Ah(a),o=Ah(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=E+v+a,d=E+_+o,y=Mh(i,i.VERTEX_SHADER,M),m=Mh(i,i.FRAGMENT_SHADER,d);i.attachShader(b,y),i.attachShader(b,m),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function S(A){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(b).trim(),R=i.getShaderInfoLog(y).trim(),D=i.getShaderInfoLog(m).trim();let F=!0,T=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,y,m);else{const k=Sh(i,y,"vertex"),B=Sh(i,m,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+k+`
`+B)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(R===""||D==="")&&(T=!1);T&&(A.diagnostics={runnable:F,programLog:I,vertexShader:{log:R,prefix:v},fragmentShader:{log:D,prefix:_}})}i.deleteShader(y),i.deleteShader(m),C=new wo(i,b),w=CS(i,b)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(b,yS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=m,this}let zS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HS(e),t.set(e,n)),n}}class HS{constructor(e){this.id=zS++,this.code=e,this.usedTimes=0}}function GS(r,e,t,n,i,s,a){const o=new xc,c=new VS,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return l.add(w),w===0?"uv":`uv${w}`}function v(w,x,A,I,R){const D=I.fog,F=R.geometry,T=w.isMeshStandardMaterial?I.environment:null,k=(w.isMeshStandardMaterial?t:e).get(w.envMap||T),B=k&&k.mapping===os?k.image.height:null,W=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,j=K!==void 0?K.length:0;let xe=0;F.morphAttributes.position!==void 0&&(xe=1),F.morphAttributes.normal!==void 0&&(xe=2),F.morphAttributes.color!==void 0&&(xe=3);let Pe,Z,$,le;if(W){const st=Nn[W];Pe=st.vertexShader,Z=st.fragmentShader}else Pe=w.vertexShader,Z=w.fragmentShader,c.update(w),$=c.getVertexShaderID(w),le=c.getFragmentShaderID(w);const se=r.getRenderTarget(),Se=R.isInstancedMesh===!0,ze=R.isBatchedMesh===!0,Ne=!!w.map,Qe=!!w.matcap,N=!!k,oe=!!w.aoMap,ae=!!w.lightMap,me=!!w.bumpMap,J=!!w.normalMap,De=!!w.displacementMap,ge=!!w.emissiveMap,be=!!w.metalnessMap,O=!!w.roughnessMap,P=w.anisotropy>0,X=w.clearcoat>0,re=w.dispersion>0,ie=w.iridescence>0,ne=w.sheen>0,Ie=w.transmission>0,fe=P&&!!w.anisotropyMap,V=X&&!!w.clearcoatMap,Xe=X&&!!w.clearcoatNormalMap,ce=X&&!!w.clearcoatRoughnessMap,ye=ie&&!!w.iridescenceMap,$e=ie&&!!w.iridescenceThicknessMap,He=ne&&!!w.sheenColorMap,Me=ne&&!!w.sheenRoughnessMap,We=!!w.specularMap,Ke=!!w.specularColorMap,_t=!!w.specularIntensityMap,z=Ie&&!!w.transmissionMap,ue=Ie&&!!w.thicknessMap,ee=!!w.gradientMap,te=!!w.alphaMap,he=w.alphaTest>0,ke=!!w.alphaHash,tt=!!w.extensions;let Ct=ui;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ct=r.toneMapping);const Vt={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:Pe,fragmentShader:Z,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ze,batchingColor:ze&&R._colorsTexture!==null,instancing:Se,instancingColor:Se&&R.instanceColor!==null,instancingMorph:Se&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:gi,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:Qe,envMap:N,envMapMode:N&&k.mapping,envMapCubeUVHeight:B,aoMap:oe,lightMap:ae,bumpMap:me,normalMap:J,displacementMap:f&&De,emissiveMap:ge,normalMapObjectSpace:J&&w.normalMapType===Gp,normalMapTangentSpace:J&&w.normalMapType===Ni,metalnessMap:be,roughnessMap:O,anisotropy:P,anisotropyMap:fe,clearcoat:X,clearcoatMap:V,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ce,dispersion:re,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:He,sheenRoughnessMap:Me,specularMap:We,specularColorMap:Ke,specularIntensityMap:_t,transmission:Ie,transmissionMap:z,thicknessMap:ue,gradientMap:ee,opaque:w.transparent===!1&&w.blending===or&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:ke,combine:w.combine,mapUv:Ne&&b(w.map.channel),aoMapUv:oe&&b(w.aoMap.channel),lightMapUv:ae&&b(w.lightMap.channel),bumpMapUv:me&&b(w.bumpMap.channel),normalMapUv:J&&b(w.normalMap.channel),displacementMapUv:De&&b(w.displacementMap.channel),emissiveMapUv:ge&&b(w.emissiveMap.channel),metalnessMapUv:be&&b(w.metalnessMap.channel),roughnessMapUv:O&&b(w.roughnessMap.channel),anisotropyMapUv:fe&&b(w.anisotropyMap.channel),clearcoatMapUv:V&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:He&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&b(w.sheenRoughnessMap.channel),specularMapUv:We&&b(w.specularMap.channel),specularColorMapUv:Ke&&b(w.specularColorMap.channel),specularIntensityMapUv:_t&&b(w.specularIntensityMap.channel),transmissionMapUv:z&&b(w.transmissionMap.channel),thicknessMapUv:ue&&b(w.thicknessMap.channel),alphaMapUv:te&&b(w.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(J||P),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(Ne||te),fog:!!D,useFog:w.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:tt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&w.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function _(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)x.push(A),x.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(E(x,w),M(x,w),x.push(r.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function E(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function M(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),w.push(o.mask)}function d(w){const x=g[w.type];let A;if(x){const I=Nn[x];A=im.clone(I.uniforms)}else A=w.uniforms;return A}function y(w,x){let A;for(let I=0,R=u.length;I<R;I++){const D=u[I];if(D.cacheKey===x){A=D,++A.usedTimes;break}}return A===void 0&&(A=new BS(r,x,w,s),u.push(A)),A}function m(w){if(--w.usedTimes===0){const x=u.indexOf(w);u[x]=u[u.length-1],u.pop(),w.destroy()}}function S(w){c.remove(w)}function C(){c.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:d,acquireProgram:y,releaseProgram:m,releaseShaderCache:S,programs:u,dispose:C}}function WS(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function XS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ch(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,b,v){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:b,group:v},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=b,_.group=v),e++,_}function o(h,f,p,g,b,v){const _=a(h,f,p,g,b,v);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function c(h,f,p,g,b,v){const _=a(h,f,p,g,b,v);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function l(h,f){t.length>1&&t.sort(h||XS),n.length>1&&n.sort(f||Ch),i.length>1&&i.sort(f||Ch)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function qS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Rh,r.set(n,[a])):i>=s.length?(a=new Rh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function YS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ve};break;case"SpotLight":t={position:new U,direction:new U,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function ZS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jS=0;function KS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JS(r){const e=new YS,t=ZS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,s=new Ue,a=new Ue;function o(l){let u=0,h=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,b=0,v=0,_=0,E=0,M=0,d=0,y=0,m=0,S=0;l.sort(KS);for(let w=0,x=l.length;w<x;w++){const A=l[w],I=A.color,R=A.intensity,D=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*R,h+=I.g*R,f+=I.b*R;else if(A.isLightProbe){for(let T=0;T<9;T++)n.probe[T].addScaledVector(A.sh.coefficients[T],R);S++}else if(A.isDirectionalLight){const T=e.get(A);if(T.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,B=t.get(A);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=A.shadow.matrix,E++}n.directional[p]=T,p++}else if(A.isSpotLight){const T=e.get(A);T.position.setFromMatrixPosition(A.matrixWorld),T.color.copy(I).multiplyScalar(R),T.distance=D,T.coneCos=Math.cos(A.angle),T.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),T.decay=A.decay,n.spot[b]=T;const k=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,k.updateMatrices(A),A.castShadow&&m++),n.spotLightMatrix[b]=k.matrix,A.castShadow){const B=t.get(A);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.spotShadow[b]=B,n.spotShadowMap[b]=F,d++}b++}else if(A.isRectAreaLight){const T=e.get(A);T.color.copy(I).multiplyScalar(R),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=T,v++}else if(A.isPointLight){const T=e.get(A);if(T.color.copy(A.color).multiplyScalar(A.intensity),T.distance=A.distance,T.decay=A.decay,A.castShadow){const k=A.shadow,B=t.get(A);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=T,g++}else if(A.isHemisphereLight){const T=e.get(A);T.skyColor.copy(A.color).multiplyScalar(R),T.groundColor.copy(A.groundColor).multiplyScalar(R),n.hemi[_]=T,_++}}v>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==v||C.hemiLength!==_||C.numDirectionalShadows!==E||C.numPointShadows!==M||C.numSpotShadows!==d||C.numSpotMaps!==y||C.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=v,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=d,n.spotShadowMap.length=d,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=d+y-m,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=m,n.numLightProbes=S,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=v,C.hemiLength=_,C.numDirectionalShadows=E,C.numPointShadows=M,C.numSpotShadows=d,C.numSpotMaps=y,C.numLightProbes=S,n.version=jS++)}function c(l,u){let h=0,f=0,p=0,g=0,b=0;const v=u.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){const M=l[_];if(M.isDirectionalLight){const d=n.directional[h];d.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),d.direction.sub(i),d.direction.transformDirection(v),h++}else if(M.isSpotLight){const d=n.spot[p];d.position.setFromMatrixPosition(M.matrixWorld),d.position.applyMatrix4(v),d.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),d.direction.sub(i),d.direction.transformDirection(v),p++}else if(M.isRectAreaLight){const d=n.rectArea[g];d.position.setFromMatrixPosition(M.matrixWorld),d.position.applyMatrix4(v),a.identity(),s.copy(M.matrixWorld),s.premultiply(v),a.extractRotation(s),d.halfWidth.set(M.width*.5,0,0),d.halfHeight.set(0,M.height*.5,0),d.halfWidth.applyMatrix4(a),d.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const d=n.point[f];d.position.setFromMatrixPosition(M.matrixWorld),d.position.applyMatrix4(v),f++}else if(M.isHemisphereLight){const d=n.hemi[b];d.direction.setFromMatrixPosition(M.matrixWorld),d.direction.transformDirection(v),b++}}}return{setup:o,setupView:c,state:n}}function Ph(r){const e=new JS(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function QS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ph(r),e.set(i,[o])):s>=a.length?(o=new Ph(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Du extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nu extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tw(r,e,t){let n=new ma;const i=new Q,s=new Q,a=new lt,o=new Du({depthPacking:Hp}),c=new Nu,l={},u=t.maxTextureSize,h={[hi]:nn,[nn]:hi,[Vn]:Vn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:$S,fragmentShader:ew}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Tt(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let _=this.type;this.render=function(m,S,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||m.length===0)return;const w=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),I=r.state;I.setBlending(li),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const R=_!==zn&&this.type===zn,D=_===zn&&this.type!==zn;for(let F=0,T=m.length;F<T;F++){const k=m[F],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const W=B.getFrameExtents();if(i.multiply(W),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,B.mapSize.y=s.y)),B.map===null||R===!0||D===!0){const j=this.type!==zn?{minFilter:kt,magFilter:kt}:{};B.map!==null&&B.map.dispose(),B.map=new Un(i.x,i.y,j),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const K=B.getViewportCount();for(let j=0;j<K;j++){const xe=B.getViewport(j);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),I.viewport(a),B.updateMatrices(k,j),n=B.getFrustum(),d(S,C,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===zn&&E(B,C),B.needsUpdate=!1}_=this.type,v.needsUpdate=!1,r.setRenderTarget(w,x,A)};function E(m,S){const C=e.update(b);f.defines.VSM_SAMPLES!==m.blurSamples&&(f.defines.VSM_SAMPLES=m.blurSamples,p.defines.VSM_SAMPLES=m.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),m.mapPass===null&&(m.mapPass=new Un(i.x,i.y)),f.uniforms.shadow_pass.value=m.map.texture,f.uniforms.resolution.value=m.mapSize,f.uniforms.radius.value=m.radius,r.setRenderTarget(m.mapPass),r.clear(),r.renderBufferDirect(S,null,C,f,b,null),p.uniforms.shadow_pass.value=m.mapPass.texture,p.uniforms.resolution.value=m.mapSize,p.uniforms.radius.value=m.radius,r.setRenderTarget(m.map),r.clear(),r.renderBufferDirect(S,null,C,p,b,null)}function M(m,S,C,w){let x=null;const A=C.isPointLight===!0?m.customDistanceMaterial:m.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?c:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=x.uuid,R=S.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let F=D[R];F===void 0&&(F=x.clone(),D[R]=F,S.addEventListener("dispose",y)),x=F}if(x.visible=S.visible,x.wireframe=S.wireframe,w===zn?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:h[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=C}return x}function d(m,S,C,w,x){if(m.visible===!1)return;if(m.layers.test(S.layers)&&(m.isMesh||m.isLine||m.isPoints)&&(m.castShadow||m.receiveShadow&&x===zn)&&(!m.frustumCulled||n.intersectsObject(m))){m.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,m.matrixWorld);const R=e.update(m),D=m.material;if(Array.isArray(D)){const F=R.groups;for(let T=0,k=F.length;T<k;T++){const B=F[T],W=D[B.materialIndex];if(W&&W.visible){const K=M(m,W,w,x);m.onBeforeShadow(r,m,S,C,R,K,B),r.renderBufferDirect(C,null,R,K,m,B),m.onAfterShadow(r,m,S,C,R,K,B)}}}else if(D.visible){const F=M(m,D,w,x);m.onBeforeShadow(r,m,S,C,R,F,null),r.renderBufferDirect(C,null,R,F,m,null),m.onAfterShadow(r,m,S,C,R,F,null)}}const I=m.children;for(let R=0,D=I.length;R<D;R++)d(I[R],S,C,w,x)}function y(m){m.target.removeEventListener("dispose",y);for(const C in l){const w=l[C],x=m.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}function nw(r){function e(){let z=!1;const ue=new lt;let ee=null;const te=new lt(0,0,0,0);return{setMask:function(he){ee!==he&&!z&&(r.colorMask(he,he,he,he),ee=he)},setLocked:function(he){z=he},setClear:function(he,ke,tt,Ct,Vt){Vt===!0&&(he*=Ct,ke*=Ct,tt*=Ct),ue.set(he,ke,tt,Ct),te.equals(ue)===!1&&(r.clearColor(he,ke,tt,Ct),te.copy(ue))},reset:function(){z=!1,ee=null,te.set(-1,0,0,0)}}}function t(){let z=!1,ue=null,ee=null,te=null;return{setTest:function(he){he?le(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(he){ue!==he&&!z&&(r.depthMask(he),ue=he)},setFunc:function(he){if(ee!==he){switch(he){case xp:r.depthFunc(r.NEVER);break;case Mp:r.depthFunc(r.ALWAYS);break;case Sp:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case wp:r.depthFunc(r.EQUAL);break;case Ep:r.depthFunc(r.GEQUAL);break;case Ap:r.depthFunc(r.GREATER);break;case Tp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=he}},setLocked:function(he){z=he},setClear:function(he){te!==he&&(r.clearDepth(he),te=he)},reset:function(){z=!1,ue=null,ee=null,te=null}}}function n(){let z=!1,ue=null,ee=null,te=null,he=null,ke=null,tt=null,Ct=null,Vt=null;return{setTest:function(st){z||(st?le(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(st){ue!==st&&!z&&(r.stencilMask(st),ue=st)},setFunc:function(st,Jn,Bn){(ee!==st||te!==Jn||he!==Bn)&&(r.stencilFunc(st,Jn,Bn),ee=st,te=Jn,he=Bn)},setOp:function(st,Jn,Bn){(ke!==st||tt!==Jn||Ct!==Bn)&&(r.stencilOp(st,Jn,Bn),ke=st,tt=Jn,Ct=Bn)},setLocked:function(st){z=st},setClear:function(st){Vt!==st&&(r.clearStencil(st),Vt=st)},reset:function(){z=!1,ue=null,ee=null,te=null,he=null,ke=null,tt=null,Ct=null,Vt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],p=null,g=!1,b=null,v=null,_=null,E=null,M=null,d=null,y=null,m=new ve(0,0,0),S=0,C=!1,w=null,x=null,A=null,I=null,R=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,T=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=T>=1):k.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=T>=2);let B=null,W={};const K=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),xe=new lt().fromArray(K),Pe=new lt().fromArray(j);function Z(z,ue,ee,te){const he=new Uint8Array(4),ke=r.createTexture();r.bindTexture(z,ke),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<ee;tt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ue+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return ke}const $={};$[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(r.DEPTH_TEST),s.setFunc(Vs),me(!1),J(Wl),le(r.CULL_FACE),oe(li);function le(z){l[z]!==!0&&(r.enable(z),l[z]=!0)}function se(z){l[z]!==!1&&(r.disable(z),l[z]=!1)}function Se(z,ue){return u[z]!==ue?(r.bindFramebuffer(z,ue),u[z]=ue,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function ze(z,ue){let ee=f,te=!1;if(z){ee=h.get(ue),ee===void 0&&(ee=[],h.set(ue,ee));const he=z.textures;if(ee.length!==he.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let ke=0,tt=he.length;ke<tt;ke++)ee[ke]=r.COLOR_ATTACHMENT0+ke;ee.length=he.length,te=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,te=!0);te&&r.drawBuffers(ee)}function Ne(z){return p!==z?(r.useProgram(z),p=z,!0):!1}const Qe={[Ri]:r.FUNC_ADD,[rp]:r.FUNC_SUBTRACT,[sp]:r.FUNC_REVERSE_SUBTRACT};Qe[ap]=r.MIN,Qe[op]=r.MAX;const N={[cp]:r.ZERO,[lp]:r.ONE,[up]:r.SRC_COLOR,[Po]:r.SRC_ALPHA,[gp]:r.SRC_ALPHA_SATURATE,[pp]:r.DST_COLOR,[hp]:r.DST_ALPHA,[dp]:r.ONE_MINUS_SRC_COLOR,[Io]:r.ONE_MINUS_SRC_ALPHA,[mp]:r.ONE_MINUS_DST_COLOR,[fp]:r.ONE_MINUS_DST_ALPHA,[_p]:r.CONSTANT_COLOR,[vp]:r.ONE_MINUS_CONSTANT_COLOR,[yp]:r.CONSTANT_ALPHA,[bp]:r.ONE_MINUS_CONSTANT_ALPHA};function oe(z,ue,ee,te,he,ke,tt,Ct,Vt,st){if(z===li){g===!0&&(se(r.BLEND),g=!1);return}if(g===!1&&(le(r.BLEND),g=!0),z!==ip){if(z!==b||st!==C){if((v!==Ri||M!==Ri)&&(r.blendEquation(r.FUNC_ADD),v=Ri,M=Ri),st)switch(z){case or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xl:r.blendFunc(r.ONE,r.ONE);break;case ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ql:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,E=null,d=null,y=null,m.set(0,0,0),S=0,b=z,C=st}return}he=he||ue,ke=ke||ee,tt=tt||te,(ue!==v||he!==M)&&(r.blendEquationSeparate(Qe[ue],Qe[he]),v=ue,M=he),(ee!==_||te!==E||ke!==d||tt!==y)&&(r.blendFuncSeparate(N[ee],N[te],N[ke],N[tt]),_=ee,E=te,d=ke,y=tt),(Ct.equals(m)===!1||Vt!==S)&&(r.blendColor(Ct.r,Ct.g,Ct.b,Vt),m.copy(Ct),S=Vt),b=z,C=!1}function ae(z,ue){z.side===Vn?se(r.CULL_FACE):le(r.CULL_FACE);let ee=z.side===nn;ue&&(ee=!ee),me(ee),z.blending===or&&z.transparent===!1?oe(li):oe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const te=z.stencilWrite;a.setTest(te),te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(z){w!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),w=z)}function J(z){z!==ep?(le(r.CULL_FACE),z!==x&&(z===Wl?r.cullFace(r.BACK):z===tp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),x=z}function De(z){z!==A&&(F&&r.lineWidth(z),A=z)}function ge(z,ue,ee){z?(le(r.POLYGON_OFFSET_FILL),(I!==ue||R!==ee)&&(r.polygonOffset(ue,ee),I=ue,R=ee)):se(r.POLYGON_OFFSET_FILL)}function be(z){z?le(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function O(z){z===void 0&&(z=r.TEXTURE0+D-1),B!==z&&(r.activeTexture(z),B=z)}function P(z,ue,ee){ee===void 0&&(B===null?ee=r.TEXTURE0+D-1:ee=B);let te=W[ee];te===void 0&&(te={type:void 0,texture:void 0},W[ee]=te),(te.type!==z||te.texture!==ue)&&(B!==ee&&(r.activeTexture(ee),B=ee),r.bindTexture(z,ue||$[z]),te.type=z,te.texture=ue)}function X(){const z=W[B];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(z){xe.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),xe.copy(z))}function Me(z){Pe.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Pe.copy(z))}function We(z,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let te=ee.get(z);te===void 0&&(te=r.getUniformBlockIndex(ue,z.name),ee.set(z,te))}function Ke(z,ue){const te=c.get(ue).get(z);o.get(ue)!==te&&(r.uniformBlockBinding(ue,te,z.__bindingPointIndex),o.set(ue,te))}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},B=null,W={},u={},h=new WeakMap,f=[],p=null,g=!1,b=null,v=null,_=null,E=null,M=null,d=null,y=null,m=new ve(0,0,0),S=0,C=!1,w=null,x=null,A=null,I=null,R=null,xe.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:le,disable:se,bindFramebuffer:Se,drawBuffers:ze,useProgram:Ne,setBlending:oe,setMaterial:ae,setFlipSided:me,setCullFace:J,setLineWidth:De,setPolygonOffset:ge,setScissorTest:be,activeTexture:O,bindTexture:P,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:ie,texImage2D:ye,texImage3D:$e,updateUBOMapping:We,uniformBlockBinding:Ke,texStorage2D:Xe,texStorage3D:ce,texSubImage2D:ne,texSubImage3D:Ie,compressedTexSubImage2D:fe,compressedTexSubImage3D:V,scissor:He,viewport:Me,reset:_t}}function iw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function rw(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function sw(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function $l(r,e,t,n){const i=aw(n);switch(t){case yu:return r*e;case xu:return r*e;case Mu:return r*e*2;case mc:return r*e/i.components*i.byteLength;case ha:return r*e/i.components*i.byteLength;case Su:return r*e*2/i.components*i.byteLength;case gc:return r*e*2/i.components*i.byteLength;case bu:return r*e*3/i.components*i.byteLength;case tn:return r*e*4/i.components*i.byteLength;case _c:return r*e*4/i.components*i.byteLength;case Ds:case Ns:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Us:case Os:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Do:case Uo:return Math.max(r,16)*Math.max(e,8)/4;case Lo:case No:return Math.max(r,8)*Math.max(e,8)/2;case Oo:case Fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fs:case $o:case ec:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wu:case tc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aw(r){switch(r){case jn:case gu:return{byteLength:1,components:1};case ns:case _u:case cs:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case pi:case hc:case cn:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const ow={contain:iw,cover:rw,fill:sw,getByteLength:$l};function cw(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,P){return p?new OffscreenCanvas(O,P):$s("canvas")}function b(O,P,X){let re=1;const ie=be(O);if((ie.width>X||ie.height>X)&&(re=X/Math.max(ie.width,ie.height)),re<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ne=Math.floor(re*ie.width),Ie=Math.floor(re*ie.height);h===void 0&&(h=g(ne,Ie));const fe=P?g(ne,Ie):h;return fe.width=ne,fe.height=Ie,fe.getContext("2d").drawImage(O,0,0,ne,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ne+"x"+Ie+")."),fe}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),O;return O}function v(O){return O.generateMipmaps&&O.minFilter!==kt&&O.minFilter!==It}function _(O){r.generateMipmap(O)}function E(O,P,X,re,ie=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ne=P;if(P===r.RED&&(X===r.FLOAT&&(ne=r.R32F),X===r.HALF_FLOAT&&(ne=r.R16F),X===r.UNSIGNED_BYTE&&(ne=r.R8)),P===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ne=r.R8UI),X===r.UNSIGNED_SHORT&&(ne=r.R16UI),X===r.UNSIGNED_INT&&(ne=r.R32UI),X===r.BYTE&&(ne=r.R8I),X===r.SHORT&&(ne=r.R16I),X===r.INT&&(ne=r.R32I)),P===r.RG&&(X===r.FLOAT&&(ne=r.RG32F),X===r.HALF_FLOAT&&(ne=r.RG16F),X===r.UNSIGNED_BYTE&&(ne=r.RG8)),P===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ne=r.RG8UI),X===r.UNSIGNED_SHORT&&(ne=r.RG16UI),X===r.UNSIGNED_INT&&(ne=r.RG32UI),X===r.BYTE&&(ne=r.RG8I),X===r.SHORT&&(ne=r.RG16I),X===r.INT&&(ne=r.RG32I)),P===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),P===r.RGBA){const Ie=ie?Zs:rt.getTransfer(re);X===r.FLOAT&&(ne=r.RGBA32F),X===r.HALF_FLOAT&&(ne=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ne=Ie===ht?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(O,P){let X;return O?P===null||P===pi||P===fr?X=r.DEPTH24_STENCIL8:P===cn?X=r.DEPTH32F_STENCIL8:P===ns&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===pi||P===fr?X=r.DEPTH_COMPONENT24:P===cn?X=r.DEPTH_COMPONENT32F:P===ns&&(X=r.DEPTH_COMPONENT16),X}function d(O,P){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==kt&&O.minFilter!==It?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function y(O){const P=O.target;P.removeEventListener("dispose",y),S(P),P.isVideoTexture&&u.delete(P)}function m(O){const P=O.target;P.removeEventListener("dispose",m),w(P)}function S(O){const P=n.get(O);if(P.__webglInit===void 0)return;const X=O.source,re=f.get(X);if(re){const ie=re[P.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(O),Object.keys(re).length===0&&f.delete(X)}n.remove(O)}function C(O){const P=n.get(O);r.deleteTexture(P.__webglTexture);const X=O.source,re=f.get(X);delete re[P.__cacheKey],a.memory.textures--}function w(O){const P=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(P.__webglFramebuffer[re]))for(let ie=0;ie<P.__webglFramebuffer[re].length;ie++)r.deleteFramebuffer(P.__webglFramebuffer[re][ie]);else r.deleteFramebuffer(P.__webglFramebuffer[re]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[re])}else{if(Array.isArray(P.__webglFramebuffer))for(let re=0;re<P.__webglFramebuffer.length;re++)r.deleteFramebuffer(P.__webglFramebuffer[re]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let re=0;re<P.__webglColorRenderbuffer.length;re++)P.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[re]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const X=O.textures;for(let re=0,ie=X.length;re<ie;re++){const ne=n.get(X[re]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(X[re])}n.remove(O)}let x=0;function A(){x=0}function I(){const O=x;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),x+=1,O}function R(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function D(O,P){const X=n.get(O);if(O.isVideoTexture&&De(O),O.isRenderTargetTexture===!1&&O.version>0&&X.__version!==O.version){const re=O.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(X,O,P);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+P)}function F(O,P){const X=n.get(O);if(O.version>0&&X.__version!==O.version){Pe(X,O,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+P)}function T(O,P){const X=n.get(O);if(O.version>0&&X.__version!==O.version){Pe(X,O,P);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+P)}function k(O,P){const X=n.get(O);if(O.version>0&&X.__version!==O.version){Z(X,O,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+P)}const B={[Ws]:r.REPEAT,[Cn]:r.CLAMP_TO_EDGE,[Xs]:r.MIRRORED_REPEAT},W={[kt]:r.NEAREST,[mu]:r.NEAREST_MIPMAP_NEAREST,[qr]:r.NEAREST_MIPMAP_LINEAR,[It]:r.LINEAR,[Ls]:r.LINEAR_MIPMAP_NEAREST,[Hn]:r.LINEAR_MIPMAP_LINEAR},K={[Wp]:r.NEVER,[Kp]:r.ALWAYS,[Xp]:r.LESS,[Au]:r.LEQUAL,[qp]:r.EQUAL,[jp]:r.GEQUAL,[Yp]:r.GREATER,[Zp]:r.NOTEQUAL};function j(O,P){if(P.type===cn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===It||P.magFilter===Ls||P.magFilter===qr||P.magFilter===Hn||P.minFilter===It||P.minFilter===Ls||P.minFilter===qr||P.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,B[P.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,B[P.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,B[P.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,W[P.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,W[P.minFilter]),P.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,K[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===kt||P.minFilter!==qr&&P.minFilter!==Hn||P.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function xe(O,P){let X=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",y));const re=P.source;let ie=f.get(re);ie===void 0&&(ie={},f.set(re,ie));const ne=R(P);if(ne!==O.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[ne].usedTimes++;const Ie=ie[O.__cacheKey];Ie!==void 0&&(ie[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(P)),O.__cacheKey=ne,O.__webglTexture=ie[ne].texture}return X}function Pe(O,P,X){let re=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(re=r.TEXTURE_3D);const ie=xe(O,P),ne=P.source;t.bindTexture(re,O.__webglTexture,r.TEXTURE0+X);const Ie=n.get(ne);if(ne.version!==Ie.__version||ie===!0){t.activeTexture(r.TEXTURE0+X);const fe=rt.getPrimaries(rt.workingColorSpace),V=P.colorSpace===ri?null:rt.getPrimaries(P.colorSpace),Xe=P.colorSpace===ri||fe===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ce=b(P.image,!1,i.maxTextureSize);ce=ge(P,ce);const ye=s.convert(P.format,P.colorSpace),$e=s.convert(P.type);let He=E(P.internalFormat,ye,$e,P.colorSpace,P.isVideoTexture);j(re,P);let Me;const We=P.mipmaps,Ke=P.isVideoTexture!==!0,_t=Ie.__version===void 0||ie===!0,z=ne.dataReady,ue=d(P,ce);if(P.isDepthTexture)He=M(P.format===pr,P.type),_t&&(Ke?t.texStorage2D(r.TEXTURE_2D,1,He,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,He,ce.width,ce.height,0,ye,$e,null));else if(P.isDataTexture)if(We.length>0){Ke&&_t&&t.texStorage2D(r.TEXTURE_2D,ue,He,We[0].width,We[0].height);for(let ee=0,te=We.length;ee<te;ee++)Me=We[ee],Ke?z&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Me.width,Me.height,ye,$e,Me.data):t.texImage2D(r.TEXTURE_2D,ee,He,Me.width,Me.height,0,ye,$e,Me.data);P.generateMipmaps=!1}else Ke?(_t&&t.texStorage2D(r.TEXTURE_2D,ue,He,ce.width,ce.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,$e,ce.data)):t.texImage2D(r.TEXTURE_2D,0,He,ce.width,ce.height,0,ye,$e,ce.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ke&&_t&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,He,We[0].width,We[0].height,ce.depth);for(let ee=0,te=We.length;ee<te;ee++)if(Me=We[ee],P.format!==tn)if(ye!==null)if(Ke){if(z)if(P.layerUpdates.size>0){const he=$l(Me.width,Me.height,P.format,P.type);for(const ke of P.layerUpdates){const tt=Me.data.subarray(ke*he/Me.data.BYTES_PER_ELEMENT,(ke+1)*he/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,ke,Me.width,Me.height,1,ye,tt,0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Me.width,Me.height,ce.depth,ye,Me.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,He,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Me.width,Me.height,ce.depth,ye,$e,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,He,Me.width,Me.height,ce.depth,0,ye,$e,Me.data)}else{Ke&&_t&&t.texStorage2D(r.TEXTURE_2D,ue,He,We[0].width,We[0].height);for(let ee=0,te=We.length;ee<te;ee++)Me=We[ee],P.format!==tn?ye!==null?Ke?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?z&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Me.width,Me.height,ye,$e,Me.data):t.texImage2D(r.TEXTURE_2D,ee,He,Me.width,Me.height,0,ye,$e,Me.data)}else if(P.isDataArrayTexture)if(Ke){if(_t&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,He,ce.width,ce.height,ce.depth),z)if(P.layerUpdates.size>0){const ee=$l(ce.width,ce.height,P.format,P.type);for(const te of P.layerUpdates){const he=ce.data.subarray(te*ee/ce.data.BYTES_PER_ELEMENT,(te+1)*ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,ye,$e,he)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,$e,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,He,ce.width,ce.height,ce.depth,0,ye,$e,ce.data);else if(P.isData3DTexture)Ke?(_t&&t.texStorage3D(r.TEXTURE_3D,ue,He,ce.width,ce.height,ce.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,$e,ce.data)):t.texImage3D(r.TEXTURE_3D,0,He,ce.width,ce.height,ce.depth,0,ye,$e,ce.data);else if(P.isFramebufferTexture){if(_t)if(Ke)t.texStorage2D(r.TEXTURE_2D,ue,He,ce.width,ce.height);else{let ee=ce.width,te=ce.height;for(let he=0;he<ue;he++)t.texImage2D(r.TEXTURE_2D,he,He,ee,te,0,ye,$e,null),ee>>=1,te>>=1}}else if(We.length>0){if(Ke&&_t){const ee=be(We[0]);t.texStorage2D(r.TEXTURE_2D,ue,He,ee.width,ee.height)}for(let ee=0,te=We.length;ee<te;ee++)Me=We[ee],Ke?z&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ye,$e,Me):t.texImage2D(r.TEXTURE_2D,ee,He,ye,$e,Me);P.generateMipmaps=!1}else if(Ke){if(_t){const ee=be(ce);t.texStorage2D(r.TEXTURE_2D,ue,He,ee.width,ee.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,$e,ce)}else t.texImage2D(r.TEXTURE_2D,0,He,ye,$e,ce);v(P)&&_(re),Ie.__version=ne.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Z(O,P,X){if(P.image.length!==6)return;const re=xe(O,P),ie=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+X);const ne=n.get(ie);if(ie.version!==ne.__version||re===!0){t.activeTexture(r.TEXTURE0+X);const Ie=rt.getPrimaries(rt.workingColorSpace),fe=P.colorSpace===ri?null:rt.getPrimaries(P.colorSpace),V=P.colorSpace===ri||Ie===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const Xe=P.isCompressedTexture||P.image[0].isCompressedTexture,ce=P.image[0]&&P.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!Xe&&!ce?ye[te]=b(P.image[te],!0,i.maxCubemapSize):ye[te]=ce?P.image[te].image:P.image[te],ye[te]=ge(P,ye[te]);const $e=ye[0],He=s.convert(P.format,P.colorSpace),Me=s.convert(P.type),We=E(P.internalFormat,He,Me,P.colorSpace),Ke=P.isVideoTexture!==!0,_t=ne.__version===void 0||re===!0,z=ie.dataReady;let ue=d(P,$e);j(r.TEXTURE_CUBE_MAP,P);let ee;if(Xe){Ke&&_t&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,We,$e.width,$e.height);for(let te=0;te<6;te++){ee=ye[te].mipmaps;for(let he=0;he<ee.length;he++){const ke=ee[he];P.format!==tn?He!==null?Ke?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,He,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,We,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,He,Me,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,We,ke.width,ke.height,0,He,Me,ke.data)}}}else{if(ee=P.mipmaps,Ke&&_t){ee.length>0&&ue++;const te=be(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,We,te.width,te.height)}for(let te=0;te<6;te++)if(ce){Ke?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,He,Me,ye[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,ye[te].width,ye[te].height,0,He,Me,ye[te].data);for(let he=0;he<ee.length;he++){const tt=ee[he].image[te].image;Ke?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,tt.width,tt.height,He,Me,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,We,tt.width,tt.height,0,He,Me,tt.data)}}else{Ke?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Me,ye[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,He,Me,ye[te]);for(let he=0;he<ee.length;he++){const ke=ee[he];Ke?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,He,Me,ke.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,We,He,Me,ke.image[te])}}}v(P)&&_(r.TEXTURE_CUBE_MAP),ne.__version=ie.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function $(O,P,X,re,ie,ne){const Ie=s.convert(X.format,X.colorSpace),fe=s.convert(X.type),V=E(X.internalFormat,Ie,fe,X.colorSpace);if(!n.get(P).__hasExternalTextures){const ce=Math.max(1,P.width>>ne),ye=Math.max(1,P.height>>ne);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,V,ce,ye,P.depth,0,Ie,fe,null):t.texImage2D(ie,ne,V,ce,ye,0,Ie,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),J(P)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ie,n.get(X).__webglTexture,0,me(P)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ie,n.get(X).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(O,P,X){if(r.bindRenderbuffer(r.RENDERBUFFER,O),P.depthBuffer){const re=P.depthTexture,ie=re&&re.isDepthTexture?re.type:null,ne=M(P.stencilBuffer,ie),Ie=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=me(P);J(P)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,ne,P.width,P.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,ne,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ne,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,O)}else{const re=P.textures;for(let ie=0;ie<re.length;ie++){const ne=re[ie],Ie=s.convert(ne.format,ne.colorSpace),fe=s.convert(ne.type),V=E(ne.internalFormat,Ie,fe,ne.colorSpace),Xe=me(P);X&&J(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,V,P.width,P.height):J(P)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,V,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,V,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),D(P.depthTexture,0);const re=n.get(P.depthTexture).__webglTexture,ie=me(P);if(P.depthTexture.format===cr)J(P)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(P.depthTexture.format===pr)J(P)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(O){const P=n.get(O),X=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");se(P.__webglFramebuffer,O)}else if(X){P.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[re]),P.__webglDepthbuffer[re]=r.createRenderbuffer(),le(P.__webglDepthbuffer[re],O,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),le(P.__webglDepthbuffer,O,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(O,P,X){const re=n.get(O);P!==void 0&&$(re.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Se(O)}function Ne(O){const P=O.texture,X=n.get(O),re=n.get(P);O.addEventListener("dispose",m);const ie=O.textures,ne=O.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=P.version,a.memory.textures++),ne){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let V=0;V<P.mipmaps.length;V++)X.__webglFramebuffer[fe][V]=r.createFramebuffer()}else X.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<P.mipmaps.length;fe++)X.__webglFramebuffer[fe]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let fe=0,V=ie.length;fe<V;fe++){const Xe=n.get(ie[fe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),a.memory.textures++)}if(O.samples>0&&J(O)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const V=ie[fe];X.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const Xe=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),ye=E(V.internalFormat,Xe,ce,V.colorSpace,O.isXRRenderTarget===!0),$e=me(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,ye,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),le(X.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),j(r.TEXTURE_CUBE_MAP,P);for(let fe=0;fe<6;fe++)if(P.mipmaps&&P.mipmaps.length>0)for(let V=0;V<P.mipmaps.length;V++)$(X.__webglFramebuffer[fe][V],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,V);else $(X.__webglFramebuffer[fe],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(P)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let fe=0,V=ie.length;fe<V;fe++){const Xe=ie[fe],ce=n.get(Xe);t.bindTexture(r.TEXTURE_2D,ce.__webglTexture),j(r.TEXTURE_2D,Xe),$(X.__webglFramebuffer,O,Xe,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),v(Xe)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(fe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),j(fe,P),P.mipmaps&&P.mipmaps.length>0)for(let V=0;V<P.mipmaps.length;V++)$(X.__webglFramebuffer[V],O,P,r.COLOR_ATTACHMENT0,fe,V);else $(X.__webglFramebuffer,O,P,r.COLOR_ATTACHMENT0,fe,0);v(P)&&_(fe),t.unbindTexture()}O.depthBuffer&&Se(O)}function Qe(O){const P=O.textures;for(let X=0,re=P.length;X<re;X++){const ie=P[X];if(v(ie)){const ne=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ie=n.get(ie).__webglTexture;t.bindTexture(ne,Ie),_(ne),t.unbindTexture()}}}const N=[],oe=[];function ae(O){if(O.samples>0){if(J(O)===!1){const P=O.textures,X=O.width,re=O.height;let ie=r.COLOR_BUFFER_BIT;const ne=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=n.get(O),fe=P.length>1;if(fe)for(let V=0;V<P.length;V++)t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let V=0;V<P.length;V++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[V]);const Xe=n.get(P[V]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,X,re,0,0,X,re,ie,r.NEAREST),c===!0&&(N.length=0,oe.length=0,N.push(r.COLOR_ATTACHMENT0+V),O.depthBuffer&&O.resolveDepthBuffer===!1&&(N.push(ne),oe.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let V=0;V<P.length;V++){t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[V]);const Xe=n.get(P[V]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,Xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const P=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function me(O){return Math.min(i.maxSamples,O.samples)}function J(O){const P=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function De(O){const P=a.render.frame;u.get(O)!==P&&(u.set(O,P),O.update())}function ge(O,P){const X=O.colorSpace,re=O.format,ie=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||X!==gi&&X!==ri&&(rt.getTransfer(X)===ht?(re!==tn||ie!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),P}function be(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=T,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=$,this.useMultisampledRTT=J}function dm(r,e){function t(n,i=ri){let s;const a=rt.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===fc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return r.BYTE;if(n===_u)return r.SHORT;if(n===ns)return r.UNSIGNED_SHORT;if(n===hc)return r.INT;if(n===pi)return r.UNSIGNED_INT;if(n===cn)return r.FLOAT;if(n===cs)return r.HALF_FLOAT;if(n===yu)return r.ALPHA;if(n===bu)return r.RGB;if(n===tn)return r.RGBA;if(n===xu)return r.LUMINANCE;if(n===Mu)return r.LUMINANCE_ALPHA;if(n===cr)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===mc)return r.RED;if(n===ha)return r.RED_INTEGER;if(n===Su)return r.RG;if(n===gc)return r.RG_INTEGER;if(n===_c)return r.RGBA_INTEGER;if(n===Ds||n===Ns||n===Us||n===Os)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===No||n===Uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Fo||n===ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oo||n===Fo)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ko)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===jo||n===Ko||n===Jo||n===Qo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===$o||n===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fs)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===tc||n===nc||n===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class hm extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lw={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,n),_=this._getHandJoint(l,b);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:uw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fw extends _i{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const b=new hw,v=t.getContextAttributes();let _=null,E=null;const M=[],d=[],y=new Q;let m=null;const S=new Ft;S.layers.enable(1),S.viewport=new lt;const C=new Ft;C.layers.enable(2),C.viewport=new lt;const w=[S,C],x=new hm;x.layers.enable(1),x.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let $=M[Z];return $===void 0&&($=new El,M[Z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Z){let $=M[Z];return $===void 0&&($=new El,M[Z]=$),$.getGripSpace()},this.getHand=function(Z){let $=M[Z];return $===void 0&&($=new El,M[Z]=$),$.getHandSpace()};function R(Z){const $=d.indexOf(Z.inputSource);if($===-1)return;const le=M[$];le!==void 0&&(le.update(Z.inputSource,Z.frame,l||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",F);for(let Z=0;Z<M.length;Z++){const $=d[Z];$!==null&&(d[Z]=null,M[Z].disconnect($))}A=null,I=null,b.reset(),e.setRenderTarget(_),p=null,f=null,h=null,i=null,E=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",D),i.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0){const $={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Un(p.framebufferWidth,p.framebufferHeight,{format:tn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,le=null,se=null;v.depth&&(se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?pr:cr,le=v.stencil?fr:pi);const Se={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Se),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Un(f.textureWidth,f.textureHeight,{format:tn,type:jn,depthTexture:new Lu(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function F(Z){for(let $=0;$<Z.removed.length;$++){const le=Z.removed[$],se=d.indexOf(le);se>=0&&(d[se]=null,M[se].disconnect(le))}for(let $=0;$<Z.added.length;$++){const le=Z.added[$];let se=d.indexOf(le);if(se===-1){for(let ze=0;ze<M.length;ze++)if(ze>=d.length){d.push(le),se=ze;break}else if(d[ze]===null){d[ze]=le,se=ze;break}if(se===-1)break}const Se=M[se];Se&&Se.connect(le)}}const T=new U,k=new U;function B(Z,$,le){T.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);const se=T.distanceTo(k),Se=$.projectionMatrix.elements,ze=le.projectionMatrix.elements,Ne=Se[14]/(Se[10]-1),Qe=Se[14]/(Se[10]+1),N=(Se[9]+1)/Se[5],oe=(Se[9]-1)/Se[5],ae=(Se[8]-1)/Se[0],me=(ze[8]+1)/ze[0],J=Ne*ae,De=Ne*me,ge=se/(-ae+me),be=ge*-ae;$.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(be),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const O=Ne+ge,P=Qe+ge,X=J-be,re=De+(se-be),ie=N*Qe/P*O,ne=oe*Qe/P*O;Z.projectionMatrix.makePerspective(X,re,ie,ne,O,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function W(Z,$){$===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices($.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;b.texture!==null&&(Z.near=b.depthNear,Z.far=b.depthFar),x.near=C.near=S.near=Z.near,x.far=C.far=S.far=Z.far,(A!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,I=x.far,S.near=A,S.far=I,C.near=A,C.far=I,S.updateProjectionMatrix(),C.updateProjectionMatrix(),Z.updateProjectionMatrix());const $=Z.parent,le=x.cameras;W(x,$);for(let se=0;se<le.length;se++)W(le[se],$);le.length===2?B(x,S,C):x.projectionMatrix.copy(S.projectionMatrix),K(Z,x,$)};function K(Z,$,le){le===null?Z.matrix.copy($.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply($.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=is*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(x)};let j=null;function xe(Z,$){if(u=$.getViewerPose(l||a),g=$,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let se=!1;le.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let ze=0;ze<le.length;ze++){const Ne=le[ze];let Qe=null;if(p!==null)Qe=p.getViewport(Ne);else{const oe=h.getViewSubImage(f,Ne);Qe=oe.viewport,ze===0&&(e.setRenderTargetTextures(E,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(E))}let N=w[ze];N===void 0&&(N=new Ft,N.layers.enable(ze),N.viewport=new lt,w[ze]=N),N.matrix.fromArray(Ne.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Ne.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ze===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(N)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const ze=h.getDepthInformation(le[0]);ze&&ze.isValid&&ze.texture&&b.init(e,ze,i.renderState)}}for(let le=0;le<M.length;le++){const se=d[le],Se=M[le];se!==null&&Se!==void 0&&Se.update(se,$,l||a)}j&&j(Z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Pe=new am;Pe.setAnimationLoop(xe),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}}const qi=new Sn,pw=new Ue;function mw(r,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,nm(r)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function i(v,_,E,M,d){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(v,_):_.isMeshToonMaterial?(s(v,_),h(v,_)):_.isMeshPhongMaterial?(s(v,_),u(v,_)):_.isMeshStandardMaterial?(s(v,_),f(v,_),_.isMeshPhysicalMaterial&&p(v,_,d)):_.isMeshMatcapMaterial?(s(v,_),g(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),b(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&o(v,_)):_.isPointsMaterial?c(v,_,E,M):_.isSpriteMaterial?l(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===nn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===nn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const E=e.get(_),M=E.envMap,d=E.envMapRotation;M&&(v.envMap.value=M,qi.copy(d),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),v.envMapRotation.value.setFromMatrix4(pw.makeRotationFromEuler(qi)),v.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function o(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function c(v,_,E,M){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*E,v.scale.value=M*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function l(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function u(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function h(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function f(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function p(v,_,E){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===nn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,_){_.matcap&&(v.matcap.value=_.matcap)}function b(v,_){const E=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gw(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const d=M.program;n.uniformBlockBinding(E,d)}function l(E,M){let d=i[E.id];d===void 0&&(g(E),d=u(E),i[E.id]=d,E.addEventListener("dispose",v));const y=M.program;n.updateUBOMapping(E,y);const m=e.render.frame;s[E.id]!==m&&(f(E),s[E.id]=m)}function u(E){const M=h();E.__bindingPointIndex=M;const d=r.createBuffer(),y=E.__size,m=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,d),r.bufferData(r.UNIFORM_BUFFER,y,m),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,d),d}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],d=E.uniforms,y=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let m=0,S=d.length;m<S;m++){const C=Array.isArray(d[m])?d[m]:[d[m]];for(let w=0,x=C.length;w<x;w++){const A=C[w];if(p(A,m,w,y)===!0){const I=A.__offset,R=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let F=0;F<R.length;F++){const T=R[F],k=b(T);typeof T=="number"||typeof T=="boolean"?(A.__data[0]=T,r.bufferSubData(r.UNIFORM_BUFFER,I+D,A.__data)):T.isMatrix3?(A.__data[0]=T.elements[0],A.__data[1]=T.elements[1],A.__data[2]=T.elements[2],A.__data[3]=0,A.__data[4]=T.elements[3],A.__data[5]=T.elements[4],A.__data[6]=T.elements[5],A.__data[7]=0,A.__data[8]=T.elements[6],A.__data[9]=T.elements[7],A.__data[10]=T.elements[8],A.__data[11]=0):(T.toArray(A.__data,D),D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(E,M,d,y){const m=E.value,S=M+"_"+d;if(y[S]===void 0)return typeof m=="number"||typeof m=="boolean"?y[S]=m:y[S]=m.clone(),!0;{const C=y[S];if(typeof m=="number"||typeof m=="boolean"){if(C!==m)return y[S]=m,!0}else if(C.equals(m)===!1)return C.copy(m),!0}return!1}function g(E){const M=E.uniforms;let d=0;const y=16;for(let S=0,C=M.length;S<C;S++){const w=Array.isArray(M[S])?M[S]:[M[S]];for(let x=0,A=w.length;x<A;x++){const I=w[x],R=Array.isArray(I.value)?I.value:[I.value];for(let D=0,F=R.length;D<F;D++){const T=R[D],k=b(T),B=d%y,W=B%k.boundary,K=B+W;d+=W,K!==0&&y-K<k.storage&&(d+=y-K),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=d,d+=k.storage}}}const m=d%y;return m>0&&(d+=y-m),E.__size=d,E.__cache={},this}function b(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function v(E){const M=E.target;M.removeEventListener("dispose",v);const d=a.indexOf(M.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:c,update:l,dispose:_}}class _w{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),g=new Int32Array(4);let b=null,v=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=ui,this.toneMappingExposure=1;const M=this;let d=!1,y=0,m=0,S=null,C=-1,w=null;const x=new lt,A=new lt;let I=null;const R=new ve(0);let D=0,F=t.width,T=t.height,k=1,B=null,W=null;const K=new lt(0,0,F,T),j=new lt(0,0,F,T);let xe=!1;const Pe=new ma;let Z=!1,$=!1;const le=new Ue,se=new U,Se=new lt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Qe(){return S===null?k:1}let N=n;function oe(L,H){return t.getContext(L,H)}try{const L={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){const H="webgl2";if(N=oe(H,L),N===null)throw oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ae,me,J,De,ge,be,O,P,X,re,ie,ne,Ie,fe,V,Xe,ce,ye,$e,He,Me,We,Ke,_t;function z(){ae=new SM(N),ae.init(),We=new dm(N,ae),me=new _M(N,ae,e,We),J=new nw(N),De=new AM(N),ge=new WS,be=new cw(N,ae,J,ge,me,We,De),O=new yM(M),P=new MM(M),X=new Dy(N),Ke=new mM(N,X),re=new wM(N,X,De,Ke),ie=new CM(N,re,X,De),$e=new TM(N,me,be),Xe=new vM(ge),ne=new GS(M,O,P,ae,me,Ke,Xe),Ie=new mw(M,ge),fe=new qS,V=new QS(ae),ye=new pM(M,O,P,J,ie,f,c),ce=new tw(M,ie,me),_t=new gw(N,De,me,J),He=new gM(N,ae,De),Me=new EM(N,ae,De),De.programs=ne.programs,M.capabilities=me,M.extensions=ae,M.properties=ge,M.renderLists=fe,M.shadowMap=ce,M.state=J,M.info=De}z();const ue=new fw(M,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const L=ae.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ae.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(L){L!==void 0&&(k=L,this.setSize(F,T,!1))},this.getSize=function(L){return L.set(F,T)},this.setSize=function(L,H,q=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,T=H,t.width=Math.floor(L*k),t.height=Math.floor(H*k),q===!0&&(t.style.width=L+"px",t.style.height=H+"px"),this.setViewport(0,0,L,H)},this.getDrawingBufferSize=function(L){return L.set(F*k,T*k).floor()},this.setDrawingBufferSize=function(L,H,q){F=L,T=H,k=q,t.width=Math.floor(L*q),t.height=Math.floor(H*q),this.setViewport(0,0,L,H)},this.getCurrentViewport=function(L){return L.copy(x)},this.getViewport=function(L){return L.copy(K)},this.setViewport=function(L,H,q,Y){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,H,q,Y),J.viewport(x.copy(K).multiplyScalar(k).round())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,H,q,Y){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,H,q,Y),J.scissor(A.copy(j).multiplyScalar(k).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(L){J.setScissorTest(xe=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){W=L},this.getClearColor=function(L){return L.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(L=!0,H=!0,q=!0){let Y=0;if(L){let G=!1;if(S!==null){const de=S.texture.format;G=de===_c||de===gc||de===ha}if(G){const de=S.texture.type,_e=de===jn||de===pi||de===ns||de===fr||de===fc||de===pc,we=ye.getClearColor(),Ae=ye.getClearAlpha(),Be=we.r,Ve=we.g,Fe=we.b;_e?(p[0]=Be,p[1]=Ve,p[2]=Fe,p[3]=Ae,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Be,g[1]=Ve,g[2]=Fe,g[3]=Ae,N.clearBufferiv(N.COLOR,0,g))}else Y|=N.COLOR_BUFFER_BIT}H&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),V.dispose(),ge.dispose(),O.dispose(),P.dispose(),ie.dispose(),Ke.dispose(),_t.dispose(),ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Bn),ue.removeEventListener("sessionend",nd),ki.stop()};function ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const L=De.autoReset,H=ce.enabled,q=ce.autoUpdate,Y=ce.needsUpdate,G=ce.type;z(),De.autoReset=L,ce.enabled=H,ce.autoUpdate=q,ce.needsUpdate=Y,ce.type=G}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ke(L){const H=L.target;H.removeEventListener("dispose",ke),tt(H)}function tt(L){Ct(L),ge.remove(L)}function Ct(L){const H=ge.get(L).programs;H!==void 0&&(H.forEach(function(q){ne.releaseProgram(q)}),L.isShaderMaterial&&ne.releaseShaderCache(L))}this.renderBufferDirect=function(L,H,q,Y,G,de){H===null&&(H=ze);const _e=G.isMesh&&G.matrixWorld.determinant()<0,we=bg(L,H,q,Y,G);J.setMaterial(Y,_e);let Ae=q.index,Be=1;if(Y.wireframe===!0){if(Ae=re.getWireframeAttribute(q),Ae===void 0)return;Be=2}const Ve=q.drawRange,Fe=q.attributes.position;let at=Ve.start*Be,bt=(Ve.start+Ve.count)*Be;de!==null&&(at=Math.max(at,de.start*Be),bt=Math.min(bt,(de.start+de.count)*Be)),Ae!==null?(at=Math.max(at,0),bt=Math.min(bt,Ae.count)):Fe!=null&&(at=Math.max(at,0),bt=Math.min(bt,Fe.count));const xt=bt-at;if(xt<0||xt===1/0)return;Ke.setup(G,Y,we,q,Ae);let fn,ot=He;if(Ae!==null&&(fn=X.get(Ae),ot=Me,ot.setIndex(fn)),G.isMesh)Y.wireframe===!0?(J.setLineWidth(Y.wireframeLinewidth*Qe()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(G.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),J.setLineWidth(Le*Qe()),G.isLineSegments?ot.setMode(N.LINES):G.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else G.isPoints?ot.setMode(N.POINTS):G.isSprite&&ot.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Le=G._multiDrawStarts,Ht=G._multiDrawCounts,ct=G._multiDrawCount,Pn=Ae?X.get(Ae).bytesPerElement:1,Mr=ge.get(Y).currentProgram.getUniforms();for(let pn=0;pn<ct;pn++)Mr.setValue(N,"_gl_DrawID",pn),ot.render(Le[pn]/Pn,Ht[pn])}else if(G.isInstancedMesh)ot.renderInstances(at,xt,G.count);else if(q.isInstancedBufferGeometry){const Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ht=Math.min(q.instanceCount,Le);ot.renderInstances(at,xt,Ht)}else ot.render(at,xt)};function Vt(L,H,q){L.transparent===!0&&L.side===Vn&&L.forceSinglePass===!1?(L.side=nn,L.needsUpdate=!0,Ma(L,H,q),L.side=hi,L.needsUpdate=!0,Ma(L,H,q),L.side=Vn):Ma(L,H,q)}this.compile=function(L,H,q=null){q===null&&(q=L),v=V.get(q),v.init(H),E.push(v),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),L!==q&&L.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const Y=new Set;return L.traverse(function(G){const de=G.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const we=de[_e];Vt(we,q,G),Y.add(we)}else Vt(de,q,G),Y.add(de)}),E.pop(),v=null,Y},this.compileAsync=function(L,H,q=null){const Y=this.compile(L,H,q);return new Promise(G=>{function de(){if(Y.forEach(function(_e){ge.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){G(L);return}setTimeout(de,10)}ae.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let st=null;function Jn(L){st&&st(L)}function Bn(){ki.stop()}function nd(){ki.start()}const ki=new am;ki.setAnimationLoop(Jn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(L){st=L,ue.setAnimationLoop(L),L===null?ki.stop():ki.start()},ue.addEventListener("sessionstart",Bn),ue.addEventListener("sessionend",nd),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,H,S),v=V.get(L,E.length),v.init(H),E.push(v),le.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Pe.setFromProjectionMatrix(le),$=this.localClippingEnabled,Z=Xe.init(this.clippingPlanes,$),b=fe.get(L,_.length),b.init(),_.push(b),ue.enabled===!0&&ue.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&Zc(de,H,-1/0,M.sortObjects)}Zc(L,H,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(B,W),Ne=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ne&&ye.addToRenderList(b,L),this.info.render.frame++,Z===!0&&Xe.beginShadows();const q=v.state.shadowsArray;ce.render(q,L,H),Z===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=b.opaque,G=b.transmissive;if(v.setupLights(),H.isArrayCamera){const de=H.cameras;if(G.length>0)for(let _e=0,we=de.length;_e<we;_e++){const Ae=de[_e];rd(Y,G,L,Ae)}Ne&&ye.render(L);for(let _e=0,we=de.length;_e<we;_e++){const Ae=de[_e];id(b,L,Ae,Ae.viewport)}}else G.length>0&&rd(Y,G,L,H),Ne&&ye.render(L),id(b,L,H);S!==null&&(be.updateMultisampleRenderTarget(S),be.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(M,L,H),Ke.resetDefaultState(),C=-1,w=null,E.pop(),E.length>0?(v=E[E.length-1],Z===!0&&Xe.setGlobalState(M.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Zc(L,H,q,Y){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Pe.intersectsSprite(L)){Y&&Se.setFromMatrixPosition(L.matrixWorld).applyMatrix4(le);const _e=ie.update(L),we=L.material;we.visible&&b.push(L,_e,we,q,Se.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Pe.intersectsObject(L))){const _e=ie.update(L),we=L.material;if(Y&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Se.copy(L.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Se.copy(_e.boundingSphere.center)),Se.applyMatrix4(L.matrixWorld).applyMatrix4(le)),Array.isArray(we)){const Ae=_e.groups;for(let Be=0,Ve=Ae.length;Be<Ve;Be++){const Fe=Ae[Be],at=we[Fe.materialIndex];at&&at.visible&&b.push(L,_e,at,q,Se.z,Fe)}}else we.visible&&b.push(L,_e,we,q,Se.z,null)}}const de=L.children;for(let _e=0,we=de.length;_e<we;_e++)Zc(de[_e],H,q,Y)}function id(L,H,q,Y){const G=L.opaque,de=L.transmissive,_e=L.transparent;v.setupLightsView(q),Z===!0&&Xe.setGlobalState(M.clippingPlanes,q),Y&&J.viewport(x.copy(Y)),G.length>0&&xa(G,H,q),de.length>0&&xa(de,H,q),_e.length>0&&xa(_e,H,q),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function rd(L,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Y.id]===void 0&&(v.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?cs:jn,minFilter:Hn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const de=v.state.transmissionRenderTarget[Y.id],_e=Y.viewport||x;de.setSize(_e.z,_e.w);const we=M.getRenderTarget();M.setRenderTarget(de),M.getClearColor(R),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&ye.render(q);const Ae=M.toneMapping;M.toneMapping=ui;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),Z===!0&&Xe.setGlobalState(M.clippingPlanes,Y),xa(L,q,Y),be.updateMultisampleRenderTarget(de),be.updateRenderTargetMipmap(de),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,at=H.length;Fe<at;Fe++){const bt=H[Fe],xt=bt.object,fn=bt.geometry,ot=bt.material,Le=bt.group;if(ot.side===Vn&&xt.layers.test(Y.layers)){const Ht=ot.side;ot.side=nn,ot.needsUpdate=!0,sd(xt,q,Y,fn,ot,Le),ot.side=Ht,ot.needsUpdate=!0,Ve=!0}}Ve===!0&&(be.updateMultisampleRenderTarget(de),be.updateRenderTargetMipmap(de))}M.setRenderTarget(we),M.setClearColor(R,D),Be!==void 0&&(Y.viewport=Be),M.toneMapping=Ae}function xa(L,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,de=L.length;G<de;G++){const _e=L[G],we=_e.object,Ae=_e.geometry,Be=Y===null?_e.material:Y,Ve=_e.group;we.layers.test(q.layers)&&sd(we,H,q,Ae,Be,Ve)}}function sd(L,H,q,Y,G,de){L.onBeforeRender(M,H,q,Y,G,de),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),G.transparent===!0&&G.side===Vn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,M.renderBufferDirect(q,H,Y,G,L,de),G.side=hi,G.needsUpdate=!0,M.renderBufferDirect(q,H,Y,G,L,de),G.side=Vn):M.renderBufferDirect(q,H,Y,G,L,de),L.onAfterRender(M,H,q,Y,G,de)}function Ma(L,H,q){H.isScene!==!0&&(H=ze);const Y=ge.get(L),G=v.state.lights,de=v.state.shadowsArray,_e=G.state.version,we=ne.getParameters(L,G.state,de,H,q),Ae=ne.getProgramCacheKey(we);let Be=Y.programs;Y.environment=L.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(L.isMeshStandardMaterial?P:O).get(L.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&L.envMap===null?H.environmentRotation:L.envMapRotation,Be===void 0&&(L.addEventListener("dispose",ke),Be=new Map,Y.programs=Be);let Ve=Be.get(Ae);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===_e)return od(L,we),Ve}else we.uniforms=ne.getUniforms(L),L.onBeforeCompile(we,M),Ve=ne.acquireProgram(we,Ae),Be.set(Ae,Ve),Y.uniforms=we.uniforms;const Fe=Y.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Fe.clippingPlanes=Xe.uniform),od(L,we),Y.needsLights=Mg(L),Y.lightsStateVersion=_e,Y.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function ad(L){if(L.uniformsList===null){const H=L.currentProgram.getUniforms();L.uniformsList=wo.seqWithValue(H.seq,L.uniforms)}return L.uniformsList}function od(L,H){const q=ge.get(L);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function bg(L,H,q,Y,G){H.isScene!==!0&&(H=ze),be.resetTextureUnits();const de=H.fog,_e=Y.isMeshStandardMaterial?H.environment:null,we=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:gi,Ae=(Y.isMeshStandardMaterial?P:O).get(Y.envMap||_e),Be=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let xt=ui;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(xt=M.toneMapping);const fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=fn!==void 0?fn.length:0,Le=ge.get(Y),Ht=v.state.lights;if(Z===!0&&($===!0||L!==w)){const wn=L===w&&Y.id===C;Xe.setState(Y,L,wn)}let ct=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ht.state.version||Le.outputColorSpace!==we||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Ae||Y.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Xe.numPlanes||Le.numIntersection!==Xe.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==Ve||Le.morphTargets!==Fe||Le.morphNormals!==at||Le.morphColors!==bt||Le.toneMapping!==xt||Le.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,Le.__version=Y.version);let Pn=Le.currentProgram;ct===!0&&(Pn=Ma(Y,H,G));let Mr=!1,pn=!1,jc=!1;const Rt=Pn.getUniforms(),vi=Le.uniforms;if(J.useProgram(Pn.program)&&(Mr=!0,pn=!0,jc=!0),Y.id!==C&&(C=Y.id,pn=!0),Mr||w!==L){Rt.setValue(N,"projectionMatrix",L.projectionMatrix),Rt.setValue(N,"viewMatrix",L.matrixWorldInverse);const wn=Rt.map.cameraPosition;wn!==void 0&&wn.setValue(N,se.setFromMatrixPosition(L.matrixWorld)),me.logarithmicDepthBuffer&&Rt.setValue(N,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(N,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,pn=!0,jc=!0)}if(G.isSkinnedMesh){Rt.setOptional(N,G,"bindMatrix"),Rt.setOptional(N,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Rt.setValue(N,"boneTexture",wn.boneTexture,be))}G.isBatchedMesh&&(Rt.setOptional(N,G,"batchingTexture"),Rt.setValue(N,"batchingTexture",G._matricesTexture,be),Rt.setOptional(N,G,"batchingIdTexture"),Rt.setValue(N,"batchingIdTexture",G._indirectTexture,be),Rt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Rt.setValue(N,"batchingColorTexture",G._colorsTexture,be));const Kc=q.morphAttributes;if((Kc.position!==void 0||Kc.normal!==void 0||Kc.color!==void 0)&&$e.update(G,q,Pn),(pn||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,Rt.setValue(N,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vi.envMap.value=Ae,vi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(vi.envMapIntensity.value=H.environmentIntensity),pn&&(Rt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&xg(vi,jc),de&&Y.fog===!0&&Ie.refreshFogUniforms(vi,de),Ie.refreshMaterialUniforms(vi,Y,k,T,v.state.transmissionRenderTarget[L.id]),wo.upload(N,ad(Le),vi,be)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wo.upload(N,ad(Le),vi,be),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(N,"center",G.center),Rt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(N,"normalMatrix",G.normalMatrix),Rt.setValue(N,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const wn=Y.uniformsGroups;for(let Jc=0,Sg=wn.length;Jc<Sg;Jc++){const cd=wn[Jc];_t.update(cd,Pn),_t.bind(cd,Pn)}}return Pn}function xg(L,H){L.ambientLightColor.needsUpdate=H,L.lightProbe.needsUpdate=H,L.directionalLights.needsUpdate=H,L.directionalLightShadows.needsUpdate=H,L.pointLights.needsUpdate=H,L.pointLightShadows.needsUpdate=H,L.spotLights.needsUpdate=H,L.spotLightShadows.needsUpdate=H,L.rectAreaLights.needsUpdate=H,L.hemisphereLights.needsUpdate=H}function Mg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,H,q){ge.get(L.texture).__webglTexture=H,ge.get(L.depthTexture).__webglTexture=q;const Y=ge.get(L);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,H){const q=ge.get(L);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,q=0){S=L,y=H,m=q;let Y=!0,G=null,de=!1,_e=!1;if(L){const Ae=ge.get(L);Ae.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1):Ae.__webglFramebuffer===void 0?be.setupRenderTarget(L):Ae.__hasExternalTextures&&be.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);const Be=L.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const Ve=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?G=Ve[H][q]:G=Ve[H],de=!0):L.samples>0&&be.useMultisampledRTT(L)===!1?G=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[q]:G=Ve,x.copy(L.viewport),A.copy(L.scissor),I=L.scissorTest}else x.copy(K).multiplyScalar(k).floor(),A.copy(j).multiplyScalar(k).floor(),I=xe;if(J.bindFramebuffer(N.FRAMEBUFFER,G)&&Y&&J.drawBuffers(L,G),J.viewport(x),J.scissor(A),J.setScissorTest(I),de){const Ae=ge.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,q)}else if(_e){const Ae=ge.get(L.texture),Be=H||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,q||0,Be)}C=-1},this.readRenderTargetPixels=function(L,H,q,Y,G,de,_e){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){J.bindFramebuffer(N.FRAMEBUFFER,we);try{const Ae=L.texture,Be=Ae.format,Ve=Ae.type;if(!me.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=L.width-Y&&q>=0&&q<=L.height-G&&N.readPixels(H,q,Y,G,We.convert(Be),We.convert(Ve),de)}finally{const Ae=S!==null?ge.get(S).__webglFramebuffer:null;J.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(L,H,q,Y,G,de,_e){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){J.bindFramebuffer(N.FRAMEBUFFER,we);try{const Ae=L.texture,Be=Ae.format,Ve=Ae.type;if(!me.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=L.width-Y&&q>=0&&q<=L.height-G){const Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(H,q,Y,G,We.convert(Be),We.convert(Ve),0),N.flush();const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await ry(N,at,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de)}finally{N.deleteBuffer(Fe),N.deleteSync(at)}return de}}finally{const Ae=S!==null?ge.get(S).__webglFramebuffer:null;J.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(L,H=null,q=0){L.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,L=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(L.image.width*Y),de=Math.floor(L.image.height*Y),_e=H!==null?H.x:0,we=H!==null?H.y:0;be.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,_e,we,G,de),J.unbindTexture()},this.copyTextureToTexture=function(L,H,q=null,Y=null,G=0){L.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1],H=arguments[2],G=arguments[3]||0,q=null);let de,_e,we,Ae,Be,Ve;q!==null?(de=q.max.x-q.min.x,_e=q.max.y-q.min.y,we=q.min.x,Ae=q.min.y):(de=L.image.width,_e=L.image.height,we=0,Ae=0),Y!==null?(Be=Y.x,Ve=Y.y):(Be=0,Ve=0);const Fe=We.convert(H.format),at=We.convert(H.type);be.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const bt=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),ot=N.getParameter(N.UNPACK_SKIP_ROWS),Le=N.getParameter(N.UNPACK_SKIP_IMAGES),Ht=L.isCompressedTexture?L.mipmaps[G]:L.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,Be,Ve,de,_e,Fe,at,Ht.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,Be,Ve,Ht.width,Ht.height,Fe,Ht.data):N.texSubImage2D(N.TEXTURE_2D,G,Be,Ve,de,_e,Fe,at,Ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),G===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(L,H,q=null,Y=null,G=0){L.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,L=arguments[2],H=arguments[3],G=arguments[4]||0);let de,_e,we,Ae,Be,Ve,Fe,at,bt;const xt=L.isCompressedTexture?L.mipmaps[G]:L.image;q!==null?(de=q.max.x-q.min.x,_e=q.max.y-q.min.y,we=q.max.z-q.min.z,Ae=q.min.x,Be=q.min.y,Ve=q.min.z):(de=xt.width,_e=xt.height,we=xt.depth,Ae=0,Be=0,Ve=0),Y!==null?(Fe=Y.x,at=Y.y,bt=Y.z):(Fe=0,at=0,bt=0);const fn=We.convert(H.format),ot=We.convert(H.type);let Le;if(H.isData3DTexture)be.setTexture3D(H,0),Le=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)be.setTexture2DArray(H,0),Le=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Ht=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pn=N.getParameter(N.UNPACK_SKIP_PIXELS),Mr=N.getParameter(N.UNPACK_SKIP_ROWS),pn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),L.isDataTexture||L.isData3DTexture?N.texSubImage3D(Le,G,Fe,at,bt,de,_e,we,fn,ot,xt.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Le,G,Fe,at,bt,de,_e,we,fn,xt.data):N.texSubImage3D(Le,G,Fe,at,bt,de,_e,we,fn,ot,xt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pn),G===0&&H.generateMipmaps&&N.generateMipmap(Le),J.unbindTexture()},this.initRenderTarget=function(L){ge.get(L).__webglFramebuffer===void 0&&be.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?be.setTextureCube(L,0):L.isData3DTexture?be.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?be.setTexture2DArray(L,0):be.setTexture2D(L,0),J.unbindTexture()},this.resetState=function(){y=0,m=0,S=null,J.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===fa?"display-p3":"srgb"}}class Ec{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new Ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ac{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fm extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new U;class mr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends Jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vr;const bs=new U,Hr=new U,Gr=new U,Wr=new Q,xs=new Q,pm=new Ue,ja=new U,Ms=new U,Ka=new U,Ih=new Q,Al=new Q,Lh=new Q;class mm extends it{constructor(e=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tc(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new mr(n,3,0,!1)),Vr.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ja(ja.set(-.5,-.5,0),Gr,a,Hr,i,s),Ja(Ms.set(.5,-.5,0),Gr,a,Hr,i,s),Ja(Ka.set(.5,.5,0),Gr,a,Hr,i,s),Ih.set(0,0),Al.set(1,0),Lh.set(1,1);let o=e.ray.intersectTriangle(ja,Ms,Ka,!1,bs);if(o===null&&(Ja(Ms.set(-.5,.5,0),Gr,a,Hr,i,s),Al.set(0,1),o=e.ray.intersectTriangle(ja,Ka,Ms,!1,bs),o===null))return;const c=e.ray.origin.distanceTo(bs);c<e.near||c>e.far||t.push({distance:c,point:bs.clone(),uv:_n.getInterpolation(bs,ja,Ms,Ka,Ih,Al,Lh,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ja(r,e,t,n,i,s){Wr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(xs.x=s*Wr.x-i*Wr.y,xs.y=i*Wr.x+s*Wr.y):xs.copy(Wr),r.copy(e),r.x+=xs.x,r.y+=xs.y,r.applyMatrix4(pm)}const Qa=new U,Dh=new U;class gm extends it{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Qa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Qa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Qa.setFromMatrixPosition(e.matrixWorld),Dh.setFromMatrixPosition(this.matrixWorld);const n=Qa.distanceTo(Dh)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Nh=new U,Uh=new lt,Oh=new lt,vw=new U,Fh=new Ue,$a=new U,Tl=new Yt,kh=new Ue,Cl=new ls;class _m extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(i),e.ray.intersectsSphere(Tl)!==!1&&(kh.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Uh.fromBufferAttribute(i.attributes.skinIndex,e),Oh.fromBufferAttribute(i.attributes.skinWeight,e),Nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Oh.getComponent(s);if(a!==0){const o=Uh.getComponent(s);Fh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vw.copy(Nh).applyMatrix4(Fh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ou extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wn extends wt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=kt,u=kt,h,f){super(null,a,o,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bh=new Ue,yw=new Ue;class Cc{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:yw;Bh.multiplyMatrices(o,t[s]),Bh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Cc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wn(t,e,e,tn,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ou),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ss extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xr=new Ue,zh=new Ue,eo=[],Vh=new rn,bw=new Ue,Ss=new Tt,ws=new Yt;class vm extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),Vh.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(Vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),ws.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),e.ray.intersectsSphere(ws)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xr),zh.multiplyMatrices(n,Xr),Ss.matrixWorld=zh,Ss.raycast(e,eo);for(let a=0,o=eo.length;a<o;a++){const c=eo[a];c.instanceId=s,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wn(new Float32Array(i*this.count),i,this.count,mc,cn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function xw(r,e){return r.z-e.z}function Mw(r,e){return e.z-r.z}class Sw{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Ei=new Ue,Rl=new Ue,ww=new Ue,Ew=new ve(1,1,1),Hh=new Ue,Pl=new ma,to=new rn,Yi=new Yt,Es=new U,Gh=new U,Aw=new U,Il=new Sw,Xt=new Tt,no=[];function Tw(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class ym extends Tt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new je,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Wn(t,e,e,tn,cn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Wn(t,e,e,ha,pi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxIndexCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Wn(t,e,e,tn,cn);n.colorSpace=rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:c,normalized:l}=a,u=new o.constructor(n*c),h=new dt(u,c,l);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new dt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const e=this._geometryCount,t=this.boundingBox,n=this._drawInfo;t.makeEmpty();for(let i=0;i<e;i++){if(n[i].active===!1)continue;const s=n[i].geometryIndex;this.getMatrixAt(i,Ei),this.getBoundingBoxAt(s,to).applyMatrix4(Ei),t.union(to)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Ei),this.getBoundingSphereAt(s,Yi).applyMatrix4(Ei),e.union(Yi)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;ww.toArray(i,t*16),n.needsUpdate=!0;const s=this._colorsTexture;return s&&(Ew.toArray(s.image.data,t*4),s.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new rn,sphereInitialized:!1,sphere:new Yt}),this.setGeometryAt(h,e),h}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.vertexCount;for(const p in n.attributes){const g=t.getAttribute(p),b=n.getAttribute(p);Tw(g,b,c);const v=g.itemSize;for(let _=g.count,E=l;_<E;_++){const M=c+_;for(let d=0;d<v;d++)b.setComponent(M,d,0)}b.needsUpdate=!0,b.addUpdateRange(c*v,l*v)}if(i){const p=o.indexStart;for(let g=0;g<a.count;g++)s.setX(p+g,c+a.getX(g));for(let g=a.count,b=o.indexCount;g<b;g++)s.setX(p+g,c);s.needsUpdate=!0,s.addUpdateRange(p,o.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=i?a.count:f.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,o=s.attributes.position,c=this._drawRanges[e];for(let l=c.start,u=c.start+c.count;l<u;l++){let h=l;a&&(h=a.getX(h)),i.expandByPoint(Es.fromBufferAttribute(o,h))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,to),to.getCenter(i.center);const a=s.index,o=s.attributes.position,c=this._drawRanges[e];let l=0;for(let u=c.start,h=c.start+c.count;u<h;u++){let f=u;a&&(f=a.getX(f)),Es.fromBufferAttribute(o,f),l=Math.max(l,i.center.distanceToSquared(Es))}i.radius=Math.sqrt(l),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;Xt.material=this.material,Xt.geometry.index=a.index,Xt.geometry.attributes=a.attributes,Xt.geometry.boundingBox===null&&(Xt.geometry.boundingBox=new rn),Xt.geometry.boundingSphere===null&&(Xt.geometry.boundingSphere=new Yt);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,u=i[l];Xt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Xt.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,Xt.geometry.boundingBox),this.getBoundingSphereAt(l,Xt.geometry.boundingSphere),Xt.raycast(e,no);for(let h=0,f=no.length;h<f;h++){const p=no[h];p.object=this,p.batchId=o,t.push(p)}no.length=0}Xt.material=null,Xt.geometry.index=null,Xt.geometry.attributes={},Xt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data;f&&(Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Pl.setFromProjectionMatrix(Hh,e.coordinateSystem));let b=0;if(this.sortObjects){Rl.copy(this.matrixWorld).invert(),Es.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Rl),Gh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Rl);for(let E=0,M=c.length;E<M;E++)if(c[E].visible&&c[E].active){const d=c[E].geometryIndex;this.getMatrixAt(E,Ei),this.getBoundingSphereAt(d,Yi).applyMatrix4(Ei);let y=!1;if(f&&(y=!Pl.intersectsSphere(Yi)),!y){const m=Aw.subVectors(Yi.center,Es).dot(Gh);Il.push(h[d],m,E)}}const v=Il.list,_=this.customSort;_===null?v.sort(s.transparent?Mw:xw):_.call(this,v,n);for(let E=0,M=v.length;E<M;E++){const d=v[E];l[b]=d.start*o,u[b]=d.count,g[b]=d.index,b++}Il.reset()}else for(let v=0,_=c.length;v<_;v++)if(c[v].visible&&c[v].active){const E=c[v].geometryIndex;let M=!1;if(f&&(this.getMatrixAt(v,Ei),this.getBoundingSphereAt(E,Yi).applyMatrix4(Ei),M=!Pl.intersectsSphere(Yi)),!M){const d=h[E];l[b]=d.start*o,u[b]=d.count,g[b]=v,b++}}p.needsUpdate=!0,this._multiDrawCount=b,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class an extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sc=new U,ac=new U,Wh=new Ue,As=new ls,io=new Yt,Ll=new U,Xh=new U;class Li extends it{constructor(e=new je,t=new an){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sc.fromBufferAttribute(t,i-1),ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sc.distanceTo(ac);e.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Wh.copy(i).invert(),As.copy(e.ray).applyMatrix4(Wh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=p,v=g-1;b<v;b+=l){const _=u.getX(b),E=u.getX(b+1),M=ro(this,e,As,c,_,E);M&&t.push(M)}if(this.isLineLoop){const b=u.getX(g-1),v=u.getX(p),_=ro(this,e,As,c,b,v);_&&t.push(_)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=p,v=g-1;b<v;b+=l){const _=ro(this,e,As,c,b,b+1);_&&t.push(_)}if(this.isLineLoop){const b=ro(this,e,As,c,g-1,p);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ro(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(sc.fromBufferAttribute(a,i),ac.fromBufferAttribute(a,s),t.distanceSqToSegment(sc,ac,Ll,Xh)>n)return;Ll.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ll);if(!(c<e.near||c>e.far))return{distance:c,point:Xh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const qh=new U,Yh=new U;class Kn extends Li{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)qh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qh.distanceTo(Yh);e.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bm extends Li{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fu extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zh=new Ue,eu=new ls,so=new Yt,ao=new U;class xm extends it{constructor(e=new je,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Zh.copy(i).invert(),eu.copy(e.ray).applyMatrix4(Zh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,b=p;g<b;g++){const v=l.getX(g);ao.fromBufferAttribute(h,v),jh(ao,v,c,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,b=p;g<b;g++)ao.fromBufferAttribute(h,g),jh(ao,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jh(r,e,t,n,i,s,a){const o=eu.distanceSqToPoint(r);if(o<t){const c=new U;eu.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Cw extends wt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:It,this.magFilter=s!==void 0?s:It,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Rw extends wt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=kt,this.minFilter=kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Rc extends wt{constructor(e,t,n,i,s,a,o,c,l,u,h,f){super(null,a,o,c,l,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Pw extends Rc{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Cn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iw extends Rc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,fi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Lw extends wt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Q:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],s=[],a=[],o=new U,c=new Ue;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(St(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(St(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pc extends Fn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Q){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mm extends Pc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ku(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,p*=u,i(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const oo=new U,Dl=new ku,Nl=new ku,Ul=new ku;class Sm extends Fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%s]:(oo.subVectors(i[0],i[1]).add(i[0]),l=oo);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(oo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=oo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),b=Math.pow(h.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);b<1e-4&&(b=1),g<1e-4&&(g=b),v<1e-4&&(v=b),Dl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,b,v),Nl.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,b,v),Ul.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,b,v)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Nl.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ul.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Dl.calc(c),Nl.calc(c),Ul.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function Dw(r,e){const t=1-r;return t*t*e}function Nw(r,e){return 2*(1-r)*r*e}function Uw(r,e){return r*r*e}function Bs(r,e,t,n){return Dw(r,e)+Nw(r,t)+Uw(r,n)}function Ow(r,e){const t=1-r;return t*t*t*e}function Fw(r,e){const t=1-r;return 3*t*t*r*e}function kw(r,e){return 3*(1-r)*r*r*e}function Bw(r,e){return r*r*r*e}function zs(r,e,t,n,i){return Ow(r,e)+Fw(r,t)+kw(r,n)+Bw(r,i)}class Bu extends Fn{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,i.x,s.x,a.x,o.x),zs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wm extends Fn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,i.x,s.x,a.x,o.x),zs(e,i.y,s.y,a.y,o.y),zs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zu extends Fn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Em extends Fn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vu extends Fn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,i.x,s.x,a.x),Bs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends Fn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,i.x,s.x,a.x),Bs(e,i.y,s.y,a.y),Bs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Kh(o,c.x,l.x,u.x,h.x),Kh(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}var oc=Object.freeze({__proto__:null,ArcCurve:Mm,CatmullRomCurve3:Sm,CubicBezierCurve:Bu,CubicBezierCurve3:wm,EllipseCurve:Pc,LineCurve:zu,LineCurve3:Em,QuadraticBezierCurve:Vu,QuadraticBezierCurve3:Hu,SplineCurve:Gu});class Am extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new oc[i.type]().fromJSON(i))}return this}}class ea extends Am{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zu(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Vu(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Bu(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new Pc(e,t,n,i,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ga extends je{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=St(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,h=new U,f=new Q,p=new U,g=new U,b=new U;let v=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:v=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,p.x=_*1,p.y=-v,p.z=_*0,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:v=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,p.x=_*1,p.y=-v,p.z=_*0,g.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(g)}for(let E=0;E<=t;E++){const M=n+E*u*i,d=Math.sin(M),y=Math.cos(M);for(let m=0;m<=e.length-1;m++){h.x=e[m].x*d,h.y=e[m].y,h.z=e[m].x*y,a.push(h.x,h.y,h.z),f.x=E/t,f.y=m/(e.length-1),o.push(f.x,f.y);const S=c[3*m+0]*d,C=c[3*m+1],w=c[3*m+0]*y;l.push(S,C,w)}}for(let E=0;E<t;E++)for(let M=0;M<e.length-1;M++){const d=M+E*e.length,y=d,m=d+e.length,S=d+e.length+1,C=d+1;s.push(y,m,C),s.push(S,C,m)}this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.points,e.segments,e.phiStart,e.phiLength)}}class Ic extends ga{constructor(e=1,t=1,n=4,i=8){const s=new ea;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ic(e.radius,e.length,e.capSegments,e.radialSegments)}}class Lc extends je{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new U,u=new Q;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hs extends je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const b=[],v=n/2;let _=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(p,2));function E(){const d=new U,y=new U;let m=0;const S=(t-e)/n;for(let C=0;C<=s;C++){const w=[],x=C/s,A=x*(t-e)+e;for(let I=0;I<=i;I++){const R=I/i,D=R*c+o,F=Math.sin(D),T=Math.cos(D);y.x=A*F,y.y=-x*n+v,y.z=A*T,h.push(y.x,y.y,y.z),d.set(F,S,T).normalize(),f.push(d.x,d.y,d.z),p.push(R,1-x),w.push(g++)}b.push(w)}for(let C=0;C<i;C++)for(let w=0;w<s;w++){const x=b[w][C],A=b[w+1][C],I=b[w+1][C+1],R=b[w][C+1];u.push(x,A,R),u.push(A,I,R),m+=6}l.addGroup(_,m,0),_+=m}function M(d){const y=g,m=new Q,S=new U;let C=0;const w=d===!0?e:t,x=d===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,v*x,0),f.push(0,x,0),p.push(.5,.5),g++;const A=g;for(let I=0;I<=i;I++){const D=I/i*c+o,F=Math.cos(D),T=Math.sin(D);S.x=w*T,S.y=v*x,S.z=w*F,h.push(S.x,S.y,S.z),f.push(0,x,0),m.x=F*.5+.5,m.y=T*.5*x+.5,p.push(m.x,m.y),g++}for(let I=0;I<i;I++){const R=y+I,D=A+I;d===!0?u.push(D,D+1,R):u.push(D+1,D,R),C+=3}l.addGroup(_,C,d===!0?1:2),_+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends hs{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Dc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(s.slice(),3)),this.setAttribute("uv",new Ee(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new U,d=new U,y=new U;for(let m=0;m<t.length;m+=3)p(t[m+0],M),p(t[m+1],d),p(t[m+2],y),c(M,d,y,E)}function c(E,M,d,y){const m=y+1,S=[];for(let C=0;C<=m;C++){S[C]=[];const w=E.clone().lerp(d,C/m),x=M.clone().lerp(d,C/m),A=m-C;for(let I=0;I<=A;I++)I===0&&C===m?S[C][I]=w:S[C][I]=w.clone().lerp(x,I/A)}for(let C=0;C<m;C++)for(let w=0;w<2*(m-C)-1;w++){const x=Math.floor(w/2);w%2===0?(f(S[C][x+1]),f(S[C+1][x]),f(S[C][x])):(f(S[C][x+1]),f(S[C+1][x+1]),f(S[C+1][x]))}}function l(E){const M=new U;for(let d=0;d<s.length;d+=3)M.x=s[d+0],M.y=s[d+1],M.z=s[d+2],M.normalize().multiplyScalar(E),s[d+0]=M.x,s[d+1]=M.y,s[d+2]=M.z}function u(){const E=new U;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const d=v(E)/2/Math.PI+.5,y=_(E)/Math.PI+.5;a.push(d,1-y)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const M=a[E+0],d=a[E+2],y=a[E+4],m=Math.max(M,d,y),S=Math.min(M,d,y);m>.9&&S<.1&&(M<.2&&(a[E+0]+=1),d<.2&&(a[E+2]+=1),y<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function p(E,M){const d=E*3;M.x=e[d+0],M.y=e[d+1],M.z=e[d+2]}function g(){const E=new U,M=new U,d=new U,y=new U,m=new Q,S=new Q,C=new Q;for(let w=0,x=0;w<s.length;w+=9,x+=6){E.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),d.set(s[w+6],s[w+7],s[w+8]),m.set(a[x+0],a[x+1]),S.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),y.copy(E).add(M).add(d).divideScalar(3);const A=v(y);b(m,x+0,E,A),b(S,x+2,M,A),b(C,x+4,d,A)}}function b(E,M,d,y){y<0&&E.x===1&&(a[M]=E.x-1),d.x===0&&d.z===0&&(a[M]=y/2/Math.PI+.5)}function v(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.vertices,e.indices,e.radius,e.details)}}class Nc extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nc(e.radius,e.detail)}}const co=new U,lo=new U,Ol=new U,uo=new _n;class Tm extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(lr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:b,b:v,c:_}=uo;if(b.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),uo.getNormal(Ol),h[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const M=(E+1)%3,d=h[E],y=h[M],m=uo[u[E]],S=uo[u[M]],C=`${d}_${y}`,w=`${y}_${d}`;w in f&&f[w]?(Ol.dot(f[w].normal)<=s&&(p.push(m.x,m.y,m.z),p.push(S.x,S.y,S.z)),f[w]=null):C in f||(f[C]={index0:l[E],index1:l[M],normal:Ol.clone()})}}for(const g in f)if(f[g]){const{index0:b,index1:v}=f[g];co.fromBufferAttribute(o,b),lo.fromBufferAttribute(o,v),p.push(co.x,co.y,co.z),p.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ur extends ea{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ea().fromJSON(i))}return this}}const zw={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Cm(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,f,p;if(n&&(s=Xw(r,e,s,t)),r.length>80*t){o=l=r[0],c=u=r[1];for(let g=t;g<i;g+=t)h=r[g],f=r[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return ta(s,a,t,o,c,p,0),a}};function Cm(r,e,t,n,i){let s,a;if(i===n1(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Jh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Jh(s,r[s],r[s+1],a);return a&&Uc(a,a.next)&&(ia(a),a=a.next),a}function gr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Uc(t,t.next)||vt(t.prev,t,t.next)===0)){if(ia(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ta(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Kw(r,n,i,s);let o=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Hw(r,n,i,s):Vw(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ia(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=Gw(gr(r),e,t),ta(r,e,t,n,i,s,2)):a===2&&Ww(r,e,t,n,i,s):ta(gr(r),e,t,n,i,s,1);break}}}function Vw(r){const e=r.prev,t=r,n=r.next;if(vt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,f=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Kr(i,o,s,c,a,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hw(r,e,t,n){const i=r.prev,s=r,a=r.next;if(vt(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,u=i.y,h=s.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,b=o>c?o>l?o:l:c>l?c:l,v=u>h?u>f?u:f:h>f?h:f,_=tu(p,g,e,t,n),E=tu(b,v,e,t,n);let M=r.prevZ,d=r.nextZ;for(;M&&M.z>=_&&d&&d.z<=E;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=v&&M!==i&&M!==a&&Kr(o,u,c,h,l,f,M.x,M.y)&&vt(M.prev,M,M.next)>=0||(M=M.prevZ,d.x>=p&&d.x<=b&&d.y>=g&&d.y<=v&&d!==i&&d!==a&&Kr(o,u,c,h,l,f,d.x,d.y)&&vt(d.prev,d,d.next)>=0))return!1;d=d.nextZ}for(;M&&M.z>=_;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=v&&M!==i&&M!==a&&Kr(o,u,c,h,l,f,M.x,M.y)&&vt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;d&&d.z<=E;){if(d.x>=p&&d.x<=b&&d.y>=g&&d.y<=v&&d!==i&&d!==a&&Kr(o,u,c,h,l,f,d.x,d.y)&&vt(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function Gw(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Uc(i,s)&&Rm(i,n,n.next,s)&&na(i,s)&&na(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ia(n),ia(n.next),n=r=s),n=n.next}while(n!==r);return gr(n)}function Ww(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$w(a,o)){let c=Pm(a,o);a=gr(a,a.next),c=gr(c,c.next),ta(a,e,t,n,i,s,0),ta(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Xw(r,e,t,n){const i=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=Cm(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Qw(l));for(i.sort(qw),s=0;s<i.length;s++)t=Yw(i[s],t);return t}function qw(r,e){return r.x-e.x}function Yw(r,e){const t=Zw(r,e);if(!t)return e;const n=Pm(t,r);return gr(n,n.next),gr(t,t.next)}function Zw(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Kr(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),na(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&jw(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function jw(r,e){return vt(r.prev,r,e.prev)<0&&vt(e.next,r,r.next)<0}function Kw(r,e,t,n){let i=r;do i.z===0&&(i.z=tu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Jw(i)}function Jw(r){let e,t,n,i,s,a,o,c,l=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(a>1);return r}function tu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Qw(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Kr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function $w(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!e1(r,e)&&(na(r,e)&&na(e,r)&&t1(r,e)&&(vt(r.prev,r,e.prev)||vt(r,e.prev,e))||Uc(r,e)&&vt(r.prev,r,r.next)>0&&vt(e.prev,e,e.next)>0)}function vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Uc(r,e){return r.x===e.x&&r.y===e.y}function Rm(r,e,t,n){const i=fo(vt(r,e,t)),s=fo(vt(r,e,n)),a=fo(vt(t,n,r)),o=fo(vt(t,n,e));return!!(i!==s&&a!==o||i===0&&ho(r,t,e)||s===0&&ho(r,n,e)||a===0&&ho(t,r,n)||o===0&&ho(t,e,n))}function ho(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function fo(r){return r>0?1:r<0?-1:0}function e1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Rm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function na(r,e){return vt(r.prev,r,r.next)<0?vt(r,e,r.next)>=0&&vt(r,r.prev,e)>=0:vt(r,e,r.prev)<0||vt(r,r.next,e)<0}function t1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Pm(r,e){const t=new nu(r.i,r.x,r.y),n=new nu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Jh(r,e,t,n){const i=new nu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ia(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n1(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Xn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Xn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Qh(e),$h(n,e);let a=e.length;t.forEach(Qh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,$h(n,t[c]);const o=zw.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Qh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function $h(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oc extends je{constructor(e=new ur([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:i1;let M,d=!1,y,m,S,C;_&&(M=_.getSpacedPoints(u),d=!0,f=!1,y=_.computeFrenetFrames(u,!1),m=new U,S=new U,C=new U),f||(v=0,p=0,g=0,b=0);const w=o.extractPoints(l);let x=w.shape;const A=w.holes;if(!Xn.isClockWise(x)){x=x.reverse();for(let N=0,oe=A.length;N<oe;N++){const ae=A[N];Xn.isClockWise(ae)&&(A[N]=ae.reverse())}}const R=Xn.triangulateShape(x,A),D=x;for(let N=0,oe=A.length;N<oe;N++){const ae=A[N];x=x.concat(ae)}function F(N,oe,ae){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(oe,ae)}const T=x.length,k=R.length;function B(N,oe,ae){let me,J,De;const ge=N.x-oe.x,be=N.y-oe.y,O=ae.x-N.x,P=ae.y-N.y,X=ge*ge+be*be,re=ge*P-be*O;if(Math.abs(re)>Number.EPSILON){const ie=Math.sqrt(X),ne=Math.sqrt(O*O+P*P),Ie=oe.x-be/ie,fe=oe.y+ge/ie,V=ae.x-P/ne,Xe=ae.y+O/ne,ce=((V-Ie)*P-(Xe-fe)*O)/(ge*P-be*O);me=Ie+ge*ce-N.x,J=fe+be*ce-N.y;const ye=me*me+J*J;if(ye<=2)return new Q(me,J);De=Math.sqrt(ye/2)}else{let ie=!1;ge>Number.EPSILON?O>Number.EPSILON&&(ie=!0):ge<-Number.EPSILON?O<-Number.EPSILON&&(ie=!0):Math.sign(be)===Math.sign(P)&&(ie=!0),ie?(me=-be,J=ge,De=Math.sqrt(X)):(me=ge,J=be,De=Math.sqrt(X/2))}return new Q(me/De,J/De)}const W=[];for(let N=0,oe=D.length,ae=oe-1,me=N+1;N<oe;N++,ae++,me++)ae===oe&&(ae=0),me===oe&&(me=0),W[N]=B(D[N],D[ae],D[me]);const K=[];let j,xe=W.concat();for(let N=0,oe=A.length;N<oe;N++){const ae=A[N];j=[];for(let me=0,J=ae.length,De=J-1,ge=me+1;me<J;me++,De++,ge++)De===J&&(De=0),ge===J&&(ge=0),j[me]=B(ae[me],ae[De],ae[ge]);K.push(j),xe=xe.concat(j)}for(let N=0;N<v;N++){const oe=N/v,ae=p*Math.cos(oe*Math.PI/2),me=g*Math.sin(oe*Math.PI/2)+b;for(let J=0,De=D.length;J<De;J++){const ge=F(D[J],W[J],me);se(ge.x,ge.y,-ae)}for(let J=0,De=A.length;J<De;J++){const ge=A[J];j=K[J];for(let be=0,O=ge.length;be<O;be++){const P=F(ge[be],j[be],me);se(P.x,P.y,-ae)}}}const Pe=g+b;for(let N=0;N<T;N++){const oe=f?F(x[N],xe[N],Pe):x[N];d?(S.copy(y.normals[0]).multiplyScalar(oe.x),m.copy(y.binormals[0]).multiplyScalar(oe.y),C.copy(M[0]).add(S).add(m),se(C.x,C.y,C.z)):se(oe.x,oe.y,0)}for(let N=1;N<=u;N++)for(let oe=0;oe<T;oe++){const ae=f?F(x[oe],xe[oe],Pe):x[oe];d?(S.copy(y.normals[N]).multiplyScalar(ae.x),m.copy(y.binormals[N]).multiplyScalar(ae.y),C.copy(M[N]).add(S).add(m),se(C.x,C.y,C.z)):se(ae.x,ae.y,h/u*N)}for(let N=v-1;N>=0;N--){const oe=N/v,ae=p*Math.cos(oe*Math.PI/2),me=g*Math.sin(oe*Math.PI/2)+b;for(let J=0,De=D.length;J<De;J++){const ge=F(D[J],W[J],me);se(ge.x,ge.y,h+ae)}for(let J=0,De=A.length;J<De;J++){const ge=A[J];j=K[J];for(let be=0,O=ge.length;be<O;be++){const P=F(ge[be],j[be],me);d?se(P.x,P.y+M[u-1].y,M[u-1].x+ae):se(P.x,P.y,h+ae)}}}Z(),$();function Z(){const N=i.length/3;if(f){let oe=0,ae=T*oe;for(let me=0;me<k;me++){const J=R[me];Se(J[2]+ae,J[1]+ae,J[0]+ae)}oe=u+v*2,ae=T*oe;for(let me=0;me<k;me++){const J=R[me];Se(J[0]+ae,J[1]+ae,J[2]+ae)}}else{for(let oe=0;oe<k;oe++){const ae=R[oe];Se(ae[2],ae[1],ae[0])}for(let oe=0;oe<k;oe++){const ae=R[oe];Se(ae[0]+T*u,ae[1]+T*u,ae[2]+T*u)}}n.addGroup(N,i.length/3-N,0)}function $(){const N=i.length/3;let oe=0;le(D,oe),oe+=D.length;for(let ae=0,me=A.length;ae<me;ae++){const J=A[ae];le(J,oe),oe+=J.length}n.addGroup(N,i.length/3-N,1)}function le(N,oe){let ae=N.length;for(;--ae>=0;){const me=ae;let J=ae-1;J<0&&(J=N.length-1);for(let De=0,ge=u+v*2;De<ge;De++){const be=T*De,O=T*(De+1),P=oe+me+be,X=oe+J+be,re=oe+J+O,ie=oe+me+O;ze(P,X,re,ie)}}}function se(N,oe,ae){c.push(N),c.push(oe),c.push(ae)}function Se(N,oe,ae){Ne(N),Ne(oe),Ne(ae);const me=i.length/3,J=E.generateTopUV(n,i,me-3,me-2,me-1);Qe(J[0]),Qe(J[1]),Qe(J[2])}function ze(N,oe,ae,me){Ne(N),Ne(oe),Ne(me),Ne(oe),Ne(ae),Ne(me);const J=i.length/3,De=E.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);Qe(De[0]),Qe(De[1]),Qe(De[3]),Qe(De[1]),Qe(De[2]),Qe(De[3])}function Ne(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function Qe(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return r1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new oc[i.type]().fromJSON(i)),new Oc(n,e.options)}}const i1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Q(s,a),new Q(o,c),new Q(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],b=e[s*3],v=e[s*3+1],_=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Q(a,1-c),new Q(l,1-h),new Q(f,1-g),new Q(b,1-_)]:[new Q(o,1-c),new Q(u,1-h),new Q(p,1-g),new Q(v,1-_)]}};function r1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fc extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fc(e.radius,e.detail)}}class _a extends Oi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _a(e.radius,e.detail)}}class kc extends je{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,p=new U,g=new Q;for(let b=0;b<=i;b++){for(let v=0;v<=n;v++){const _=s+v/n*a;p.x=h*Math.cos(_),p.y=h*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let b=0;b<i;b++){const v=b*(n+1);for(let _=0;_<n;_++){const E=_+v,M=E,d=E+n+1,y=E+n+2,m=E+1;o.push(M,d,m),o.push(d,y,m)}}this.setIndex(o),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bc extends je{constructor(e=new ur([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(a,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Xn.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,_=g.length;v<_;v++){const E=g[v];Xn.isClockWise(E)===!0&&(g[v]=E.reverse())}const b=Xn.triangulateShape(p,g);for(let v=0,_=g.length;v<_;v++){const E=g[v];p=p.concat(E)}for(let v=0,_=p.length;v<_;v++){const E=p[v];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let v=0,_=b.length;v<_;v++){const E=b[v],M=E[0]+h,d=E[1]+h,y=E[2]+h;n.push(M,d,y),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return s1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Bc(n,e.curveSegments)}}function s1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class va extends je{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new U,f=new U,p=[],g=[],b=[],v=[];for(let _=0;_<=n;_++){const E=[],M=_/n;let d=0;_===0&&a===0?d=.5/t:_===n&&c===Math.PI&&(d=-.5/t);for(let y=0;y<=t;y++){const m=y/t;h.x=-e*Math.cos(i+m*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(i+m*s)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),v.push(m+d,1-M),E.push(l++)}u.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const M=u[_][E+1],d=u[_][E],y=u[_+1][E],m=u[_+1][E+1];(_!==0||a>0)&&p.push(M,d,m),(_!==n-1||c<Math.PI)&&p.push(d,y,m)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(b,3)),this.setAttribute("uv",new Ee(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zc extends Oi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zc(e.radius,e.detail)}}class Vc extends je{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new U,h=new U,f=new U;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const b=g/i*s,v=p/n*Math.PI*2;h.x=(e+t*Math.cos(v))*Math.cos(b),h.y=(e+t*Math.cos(v))*Math.sin(b),h.z=t*Math.sin(v),o.push(h.x,h.y,h.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const b=(i+1)*p+g-1,v=(i+1)*(p-1)+g-1,_=(i+1)*(p-1)+g,E=(i+1)*p+g;a.push(b,v,E),a.push(v,_,E)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Hc extends je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],u=[],h=new U,f=new U,p=new U,g=new U,b=new U,v=new U,_=new U;for(let M=0;M<=n;++M){const d=M/n*s*Math.PI*2;E(d,s,a,e,p),E(d+.01,s,a,e,g),v.subVectors(g,p),_.addVectors(g,p),b.crossVectors(v,_),_.crossVectors(b,v),b.normalize(),_.normalize();for(let y=0;y<=i;++y){const m=y/i*Math.PI*2,S=-t*Math.cos(m),C=t*Math.sin(m);h.x=p.x+(S*_.x+C*b.x),h.y=p.y+(S*_.y+C*b.y),h.z=p.z+(S*_.z+C*b.z),c.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),l.push(f.x,f.y,f.z),u.push(M/n),u.push(y/i)}}for(let M=1;M<=n;M++)for(let d=1;d<=i;d++){const y=(i+1)*(M-1)+(d-1),m=(i+1)*M+(d-1),S=(i+1)*M+d,C=(i+1)*(M-1)+d;o.push(y,m,C),o.push(m,S,C)}this.setIndex(o),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(u,2));function E(M,d,y,m,S){const C=Math.cos(M),w=Math.sin(M),x=y/d*M,A=Math.cos(x);S.x=m*(2+A)*.5*C,S.y=m*(2+A)*w*.5,S.z=m*Math.sin(x)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Gc extends je{constructor(e=new Hu(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,c=new U,l=new Q;let u=new U;const h=[],f=[],p=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(p,2));function b(){for(let M=0;M<t;M++)v(M);v(s===!1?t:0),E(),_()}function v(M){u=e.getPointAt(M/t,u);const d=a.normals[M],y=a.binormals[M];for(let m=0;m<=i;m++){const S=m/i*Math.PI*2,C=Math.sin(S),w=-Math.cos(S);c.x=w*d.x+C*y.x,c.y=w*d.y+C*y.y,c.z=w*d.z+C*y.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function _(){for(let M=1;M<=t;M++)for(let d=1;d<=i;d++){const y=(i+1)*(M-1)+(d-1),m=(i+1)*M+(d-1),S=(i+1)*M+d,C=(i+1)*(M-1)+d;g.push(y,m,C),g.push(m,S,C)}}function E(){for(let M=0;M<=t;M++)for(let d=0;d<=i;d++)l.x=M/t,l.y=d/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gc(new oc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Im extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,p=h.count;for(let g=f,b=f+p;g<b;g+=3)for(let v=0;v<3;v++){const _=o.getX(g+v),E=o.getX(g+(v+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),ef(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;i.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),ef(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ef(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var tf=Object.freeze({__proto__:null,BoxGeometry:yr,CapsuleGeometry:Ic,CircleGeometry:Lc,ConeGeometry:Dc,CylinderGeometry:hs,DodecahedronGeometry:Nc,EdgesGeometry:Tm,ExtrudeGeometry:Oc,IcosahedronGeometry:Fc,LatheGeometry:ga,OctahedronGeometry:_a,PlaneGeometry:us,PolyhedronGeometry:Oi,RingGeometry:kc,ShapeGeometry:Bc,SphereGeometry:va,TetrahedronGeometry:zc,TorusGeometry:Vc,TorusKnotGeometry:Hc,TubeGeometry:Gc,WireframeGeometry:Im});class Lm extends Jt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Dm extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wu extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ni,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nm extends Wu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Um extends Jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ni,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Om extends Jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ni,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Fm extends Jt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ni,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class km extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ni,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bm extends Jt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ni,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zm extends an{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ar(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Xu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function a1(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let p=0;p<l.times.length;++p){const g=l.times[p]*i;if(!(g<t||g>=n)){h.push(l.times[p]);for(let b=0;b<u;++b)f.push(l.values[p*u+b])}}h.length!==0&&(l.times=ar(h,l.times.constructor),l.values=ar(f,l.values.constructor),a.push(l))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s}function o1(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(_){return _.name===o.name&&_.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);const g=o.times.length-1;let b;if(s<=o.times[0]){const _=u,E=h-u;b=o.values.slice(_,E)}else if(s>=o.times[g]){const _=g*h+u,E=_+h-u;b=o.values.slice(_,E)}else{const _=o.createInterpolant(),E=u,M=h-u;_.evaluate(s),b=_.resultBuffer.slice(E,M)}c==="quaternion"&&new ln().fromArray(b).normalize().conjugate().toArray(b);const v=l.times.length;for(let _=0;_<v;++_){const E=_*p+f;if(c==="quaternion")ln.multiplyQuaternionsFlat(l.values,E,b,0,l.values,E);else{const M=p-f*2;for(let d=0;d<M;++d)l.values[E+d]-=b[d]}}}return r.blendMode=Eu,r}const c1={convertArray:ar,isTypedArray:Vm,getKeyframeOrder:Hm,sortedArray:iu,flattenJSON:Xu,subclip:a1,makeClipAdditive:o1};class ya{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gm extends ya{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rr:s=e,o=2*t-n;break;case Ys:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rr:a=e,c=2*n-t;break;case Ys:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,v=b*g,_=-f*v+2*f*b-f*g,E=(1+f)*v+(-1.5-2*f)*b+(-.5+f)*g+1,M=(-1-p)*v+(1.5+p)*b+.5*g,d=p*v-p*b;for(let y=0;y!==o;++y)s[y]=_*a[u+y]+E*a[l+y]+M*a[c+y]+d*a[h+y];return s}}class qu extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}}class Wm extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case rc:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Vm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[f+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=rc;class br extends kn{constructor(e,t,n){super(e,t,n)}}br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=qs;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class Yu extends kn{}Yu.prototype.ValueTypeName="color";class ra extends kn{}ra.prototype.ValueTypeName="number";class Xm extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)ln.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ba extends kn{InterpolantFactoryMethodLinear(e){return new Xm(this.times,this.values,this.getValueSize(),e)}}ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends kn{constructor(e,t,n){super(e,t,n)}}xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=qs;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends kn{}sa.prototype.ValueTypeName="vector";class aa{constructor(e="",t=-1,n=[],i=vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(u1(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Hm(c);c=iu(c,1,u),l=iu(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ra(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,b){if(p.length!==0){const v=[],_=[];Xu(p,v,_,g),v.length!==0&&b.push(new h(f,v,_))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)p[f[g].morphTargets[b]]=-1;for(const b in p){const v=[],_=[];for(let E=0;E!==f[g].morphTargets.length;++E){const M=f[g];v.push(M.time),_.push(M.morphTarget===b?1:0)}i.push(new ra(".morphTargetInfluence["+b+"]",v,_))}c=p.length*a}else{const p=".bones["+t[h].name+"]";n(sa,p+".position",f,"pos",i),n(ba,p+".quaternion",f,"rot",i),n(sa,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function l1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ra;case"vector":case"vector2":case"vector3":case"vector4":return sa;case"color":return Yu;case"quaternion":return ba;case"bool":case"boolean":return br;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function u1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=l1(r.type);if(r.times===void 0){const t=[],n=[];Xu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ai={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Zu{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const qm=new Zu;class hn{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class d1 extends Error{constructor(e,t){super(e),this.response=t}}class mi extends hn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:i});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ii[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let b=0;const v=new ReadableStream({start(_){E();function E(){h.read().then(({done:M,value:d})=>{if(M)_.close();else{b+=d.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let m=0,S=u.length;m<S;m++){const C=u[m];C.onProgress&&C.onProgress(y)}_.enqueue(d),E()}},M=>{_.error(M)})}}});return new Response(v)}else throw new d1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ai.add(e,l);const u=ii[e];delete ii[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete ii[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class h1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new mi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=aa.parse(e[n]);t.push(i)}return t}}class f1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new Rc,c=new mi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const p=s.parse(f,!0);a[h]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},l+=1,l===6&&(p.mipmapCount===1&&(o.minFilter=It),o.image=a,o.format=p.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const p=f.mipmaps.length/f.mipmapCount;for(let g=0;g<p;g++){a[g]={mipmaps:[]};for(let b=0;b<f.mipmapCount;b++)a[g].mipmaps.push(f.mipmaps[g*f.mipmapCount+b]),a[g].format=f.format,a[g].width=f.width,a[g].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=It),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class oa extends hn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ai.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=$s("img");function c(){u(),ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class p1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=new pa;s.colorSpace=Tn;const a=new oa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(u){s.images[l]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class m1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Wn,o=new mi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Cn,a.wrapT=l.wrapT!==void 0?l.wrapT:Cn,a.magFilter=l.magFilter!==void 0?l.magFilter:It,a.minFilter=l.minFilter!==void 0?l.minFilter:It,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Hn),l.mipmapCount===1&&(a.minFilter=It),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class g1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=new wt,a=new oa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fi extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ym extends Fi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fl=new Ue,nf=new U,rf=new U;class ju{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _1 extends ju{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zm extends Fi{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new _1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sf=new Ue,Ts=new U,kl=new U;class v1 extends ju{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),kl.copy(n.position),kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kl),n.updateMatrixWorld(),i.makeTranslation(-Ts.x,-Ts.y,-Ts.z),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf)}}class jm extends Fi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new v1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class y1 extends ju{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Km extends Fi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jm extends Fi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qm extends Fi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class $m{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class eg extends Fi{constructor(e=new $m,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Wc extends hn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new mi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Wc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new ve().setHex(a.value);break;case"v2":i.uniforms[s].value=new Q().fromArray(a.value);break;case"v3":i.uniforms[s].value=new U().fromArray(a.value);break;case"v4":i.uniforms[s].value=new lt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new qe().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Ue().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new Q().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Lm,SpriteMaterial:Uu,RawShaderMaterial:Dm,ShaderMaterial:On,PointsMaterial:Fu,MeshPhysicalMaterial:Nm,MeshStandardMaterial:Wu,MeshPhongMaterial:Um,MeshToonMaterial:Om,MeshNormalMaterial:Fm,MeshLambertMaterial:km,MeshDepthMaterial:Du,MeshDistanceMaterial:Nu,MeshBasicMaterial:Ui,MeshMatcapMaterial:Bm,LineDashedMaterial:zm,LineBasicMaterial:an,Material:Jt};return new t[e]}}class ru{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tg extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ng extends hn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new mi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(p,g){if(t[g]!==void 0)return t[g];const v=p.interleavedBuffers[g],_=s(p,v.buffer),E=Yr(v.type,_),M=new Tc(E,v.stride);return M.uuid=v.uuid,t[g]=M,M}function s(p,g){if(n[g]!==void 0)return n[g];const v=p.arrayBuffers[g],_=new Uint32Array(v).buffer;return n[g]=_,_}const a=e.isInstancedBufferGeometry?new tg:new je,o=e.data.index;if(o!==void 0){const p=Yr(o.type,o.array);a.setIndex(new dt(p,1))}const c=e.data.attributes;for(const p in c){const g=c[p];let b;if(g.isInterleavedBufferAttribute){const v=i(e.data,g.data);b=new mr(v,g.itemSize,g.offset,g.normalized)}else{const v=Yr(g.type,g.array),_=g.isInstancedBufferAttribute?ss:dt;b=new _(v,g.itemSize,g.normalized)}g.name!==void 0&&(b.name=g.name),g.usage!==void 0&&b.setUsage(g.usage),a.setAttribute(p,b)}const l=e.data.morphAttributes;if(l)for(const p in l){const g=l[p],b=[];for(let v=0,_=g.length;v<_;v++){const E=g[v];let M;if(E.isInterleavedBufferAttribute){const d=i(e.data,E.data);M=new mr(d,E.itemSize,E.offset,E.normalized)}else{const d=Yr(E.type,E.array);M=new dt(d,E.itemSize,E.normalized)}E.name!==void 0&&(M.name=E.name),b.push(M)}a.morphAttributes[p]=b}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let p=0,g=h.length;p!==g;++p){const b=h[p];a.addGroup(b.start,b.count,b.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const p=new U;f.center!==void 0&&p.fromArray(f.center),a.boundingSphere=new Yt(p,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class b1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?ru.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new mi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?ru.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new mi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,c,o,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),t!==void 0){let h=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new ur().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Cc().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new ng;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in tf?o=tf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Wc;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=aa.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(u)}else return c.data?{data:Yr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Zu(t);s=new oa(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const p=[];for(let g=0,b=f.length;g<b;g++){const v=f[g],_=o(v);_!==null&&(_ instanceof HTMLImageElement?p.push(_):p.push(new Wn(_.data,_.width,_.height)))}i[h.uuid]=new sr(p)}else{const p=o(h.url);i[h.uuid]=new sr(p)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Yr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new oa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h],g=await s(p);g!==null&&(g instanceof HTMLImageElement?u.push(g):u.push(new Wn(g.data,g.width,g.height)))}n[c.uuid]=new sr(u)}else{const u=await s(c.url);n[c.uuid]=new sr(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let u;Array.isArray(l)?(u=new pa,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Wn:u=new wt,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,x1)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],af),u.wrapT=n(o.wrap[1],af)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,of)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,of)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(e,t,n,i,s){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const p=[];for(let g=0,b=f.length;g<b;g++){const v=f[g];n[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),p.push(n[v])}return p}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":a=new fm,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ve(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ac(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ec(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Ft(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Sc(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Jm(e.color,e.intensity);break;case"DirectionalLight":a=new Km(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new jm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Qm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Zm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Ym(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new eg().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=c(e.material),a=new _m(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=c(e.material),a=new Tt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=c(e.material);const f=e.count,p=e.instanceMatrix,g=e.instanceColor;a=new vm(u,h,f),a.instanceMatrix=new ss(new Float32Array(p.array),16),g!==void 0&&(a.instanceColor=new ss(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=c(e.material),a=new ym(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(b=>{const v=new rn;v.min.fromArray(b.boxMin),v.max.fromArray(b.boxMax);const _=new Yt;return _.radius=b.sphereRadius,_.center.fromArray(b.sphereCenter),{boxInitialized:b.boxInitialized,box:v,sphereInitialized:b.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=l(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid));break;case"LOD":a=new gm;break;case"Line":a=new Li(o(e.geometry),c(e.material));break;case"LineLoop":a=new bm(o(e.geometry),c(e.material));break;case"LineSegments":a=new Kn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new xm(o(e.geometry),c(e.material));break;case"Sprite":a=new mm(c(e.material));break;case"Group":a=new jr;break;case"Bone":a=new Ou;break;default:a=new it}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let p=0;p<f.length;p++)a.add(this.parseObject(f[p],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let p=0;p<f.length;p++){const g=f[p];a.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let p=0;p<f.length;p++){const g=f[p],b=a.getObjectByProperty("uuid",g.object);b!==void 0&&a.addLevel(b,g.distance,g.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new it}})}}const x1={UVMapping:dc,CubeReflectionMapping:fi,CubeRefractionMapping:Ii,EquirectangularReflectionMapping:Hs,EquirectangularRefractionMapping:Gs,CubeUVReflectionMapping:os},af={RepeatWrapping:Ws,ClampToEdgeWrapping:Cn,MirroredRepeatWrapping:Xs},of={NearestFilter:kt,NearestMipmapNearestFilter:mu,NearestMipmapLinearFilter:qr,LinearFilter:It,LinearMipmapNearestFilter:Ls,LinearMipmapLinearFilter:Hn};class M1 extends hn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ai.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ai.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ai.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ai.add(e,c),s.manager.itemStart(e)}}let po;class Ku{static getContext(){return po===void 0&&(po=new(window.AudioContext||window.webkitAudioContext)),po}static setContext(e){po=e}}class S1 extends hn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new mi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Ku.getContext().decodeAudioData(l,function(h){t(h)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const cf=new Ue,lf=new Ue,Zi=new Ue;class w1{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ft,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ft,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Zi.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(lr*t.fov*.5)/t.zoom;let o,c;lf.elements[12]=-i,cf.elements[12]=i,o=-a*t.aspect+s,c=a*t.aspect+s,Zi.elements[0]=2*t.near/(c-o),Zi.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Zi),o=-a*t.aspect-s,c=a*t.aspect-s,Zi.elements[0]=2*t.near/(c-o),Zi.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Zi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(lf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(cf)}}class ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uf(){return(typeof performance>"u"?Date:performance).now()}const ji=new U,df=new ln,E1=new U,Ki=new U;class A1 extends it{constructor(){super(),this.type="AudioListener",this.context=Ku.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ig}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ji,df,E1),Ki.set(0,0,-1).applyQuaternion(df),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ji.x,i),t.positionY.linearRampToValueAtTime(ji.y,i),t.positionZ.linearRampToValueAtTime(ji.z,i),t.forwardX.linearRampToValueAtTime(Ki.x,i),t.forwardY.linearRampToValueAtTime(Ki.y,i),t.forwardZ.linearRampToValueAtTime(Ki.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ji.x,ji.y,ji.z),t.setOrientation(Ki.x,Ki.y,Ki.z,n.x,n.y,n.z)}}class rg extends it{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ji=new U,hf=new ln,T1=new U,Qi=new U;class C1 extends rg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ji,hf,T1),Qi.set(0,0,1).applyQuaternion(hf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ji.x,n),t.positionY.linearRampToValueAtTime(Ji.y,n),t.positionZ.linearRampToValueAtTime(Ji.z,n),t.orientationX.linearRampToValueAtTime(Qi.x,n),t.orientationY.linearRampToValueAtTime(Qi.y,n),t.orientationZ.linearRampToValueAtTime(Qi.z,n)}else t.setPosition(Ji.x,Ji.y,Ji.z),t.setOrientation(Qi.x,Qi.y,Qi.z)}}class R1{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class sg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ln.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;ln.multiplyQuaternionsFlat(e,a,e,t,e,n),ln.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ju="\\[\\]\\.:\\/",P1=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",I1="[^"+Ju.replace("\\.","")+"]",L1=/((?:WC+[\/:])*)/.source.replace("WC",Qu),D1=/(WCOD+)?/.source.replace("WCOD",I1),N1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),U1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),O1=new RegExp("^"+L1+D1+N1+U1+"$"),F1=["material","materials","bones","map"];class k1{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P1,"")}static parseTrackName(e){const t=O1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);F1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=k1;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class B1{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Mn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],p=f.uuid;let g=t[p];if(g===void 0){g=c++,t[p]=g,e.push(f);for(let b=0,v=a;b!==v;++b)s[b].push(new nt(f,n[b],i[b]))}else if(g<l){o=e[g];const b=--l,v=e[b];t[v.uuid]=g,e[g]=v,t[p]=b,e[b]=f;for(let _=0,E=a;_!==E;++_){const M=s[_],d=M[b];let y=M[g];M[g]=d,y===void 0&&(y=new nt(f,n[_],i[_])),M[b]=y}}else e[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let p=0,g=i;p!==g;++p){const b=n[p],v=b[h],_=b[u];b[u]=v,b[h]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,p=e[f],g=--a,b=e[g];t[p.uuid]=h,e[h]=p,t[b.uuid]=f,e[f]=b,e.pop();for(let v=0,_=i;v!==_;++v){const E=n[v],M=E[f],d=E[g];E[h]=M,E[f]=d,E.pop()}}else{const f=--a,p=e[f];f>0&&(t[p.uuid]=h),e[h]=p,e.pop();for(let g=0,b=i;g!==b;++g){const v=n[g];v[h]=v[f],v.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(h);for(let f=u,p=c.length;f!==p;++f){const g=c[f];h[f]=new nt(g,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class ag{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:ir,endingEnd:ir};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Bp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Eu:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case vc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===zp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===kp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=rr,i.endingEnd=rr):(e?i.endingStart=this.zeroSlopeAtStart?rr:ir:i.endingStart=Ys,t?i.endingEnd=this.zeroSlopeAtEnd?rr:ir:i.endingEnd=Ys)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const z1=new Float32Array(1);class V1 extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=i[h],p=f.name;let g=u[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const b=t&&t._propertyBindings[h].binding.parsedPath;g=new sg(nt.create(n,p,b),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qu(new Float32Array(2),new Float32Array(2),1,z1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?aa.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=vc),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new ag(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?aa.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class $u{constructor(e){this.value=e}clone(){return new $u(this.value.clone===void 0?this.value:this.value.clone())}}let H1=0;class G1 extends _i{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:H1++}),this.name="",this.usage=Js,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class W1 extends Tc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class X1{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const ff=new Ue;class q1{constructor(e,t,n=0,i=1/0){this.ray=new ls(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(e,t=!0,n=[]){return su(e,this,n,t),n.sort(pf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)su(e[i],this,n,t);return n.sort(pf),n}}function pf(r,e){return r.distance-e.distance}function su(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)su(s[a],e,t,!0)}}class Y1{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Z1{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class ed{constructor(e,t,n,i){ed.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const mf=new Q;class j1{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gf=new U,mo=new U;class K1{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gf.subVectors(e,this.start),mo.subVectors(this.end,this.start);const n=mo.dot(mo);let s=mo.dot(gf)/n;return t&&(s=St(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _f=new U;class J1 extends it{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new je,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,u=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ee(i,3));const s=new an({fog:!1,toneMapped:!1});this.cone=new Kn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_f.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_f),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ai=new U,go=new Ue,Bl=new Ue;class Q1 extends Kn{constructor(e){const t=og(e),n=new je,i=[],s=[],a=new ve(0,0,1),o=new ve(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Ee(i,3)),n.setAttribute("color",new Ee(s,3));const c=new an({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Bl.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(go.multiplyMatrices(Bl,o.matrixWorld),Ai.setFromMatrixPosition(go),i.setXYZ(a,Ai.x,Ai.y,Ai.z),go.multiplyMatrices(Bl,o.parent.matrixWorld),Ai.setFromMatrixPosition(go),i.setXYZ(a+1,Ai.x,Ai.y,Ai.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function og(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,og(r.children[t]));return e}class $1 extends Tt{constructor(e,t,n){const i=new va(t,4,2),s=new Ui({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const eE=new U,vf=new ve,yf=new ve;class tE extends it{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new _a(t);i.rotateY(Math.PI*.5),this.material=new Ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new dt(a,3)),this.add(new Tt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");vf.copy(this.light.color),yf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?vf:yf;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(eE.setFromMatrixPosition(this.light.matrixWorld).negate())}}class nE extends Kn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,p=0,g=-o;f<=t;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const b=f===s?n:i;b.toArray(l,p),p+=3,b.toArray(l,p),p+=3,b.toArray(l,p),p+=3,b.toArray(l,p),p+=3}const u=new je;u.setAttribute("position",new Ee(c,3)),u.setAttribute("color",new Ee(l,3));const h=new an({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iE extends Kn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new ve(s),a=new ve(a);const o=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),p=Math.sin(f)*e,g=Math.cos(f)*e;o.push(0,0,0),o.push(p,0,g);const b=h&1?s:a;c.push(b.r,b.g,b.b),c.push(b.r,b.g,b.b)}for(let h=0;h<n;h++){const f=h&1?s:a,p=e-e/n*h;for(let g=0;g<i;g++){let b=g/i*(Math.PI*2),v=Math.sin(b)*p,_=Math.cos(b)*p;o.push(v,0,_),c.push(f.r,f.g,f.b),b=(g+1)/i*(Math.PI*2),v=Math.sin(b)*p,_=Math.cos(b)*p,o.push(v,0,_),c.push(f.r,f.g,f.b)}}const l=new je;l.setAttribute("position",new Ee(o,3)),l.setAttribute("color",new Ee(c,3));const u=new an({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const bf=new U,_o=new U,xf=new U;class rE extends it{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new je;i.setAttribute("position",new Ee([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new an({fog:!1,toneMapped:!1});this.lightPlane=new Li(i,s),this.add(this.lightPlane),i=new je,i.setAttribute("position",new Ee([0,0,0,0,0,1],3)),this.targetLine=new Li(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),bf.setFromMatrixPosition(this.light.matrixWorld),_o.setFromMatrixPosition(this.light.target.matrixWorld),xf.subVectors(_o,bf),this.lightPlane.lookAt(_o),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_o),this.targetLine.scale.z=xf.length()}}const vo=new U,Mt=new Mc;class sE extends Kn{constructor(e){const t=new je,n=new an({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,b){c(g),c(b)}function c(g){i.push(0,0,0),s.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(i.length/3-1)}t.setAttribute("position",new Ee(i,3)),t.setAttribute("color",new Ee(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new ve(16755200),u=new ve(16711680),h=new ve(43775),f=new ve(16777215),p=new ve(3355443);this.setColors(l,u,h,f,p)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),At("c",t,e,Mt,0,0,-1),At("t",t,e,Mt,0,0,1),At("n1",t,e,Mt,-n,-i,-1),At("n2",t,e,Mt,n,-i,-1),At("n3",t,e,Mt,-n,i,-1),At("n4",t,e,Mt,n,i,-1),At("f1",t,e,Mt,-n,-i,1),At("f2",t,e,Mt,n,-i,1),At("f3",t,e,Mt,-n,i,1),At("f4",t,e,Mt,n,i,1),At("u1",t,e,Mt,n*.7,i*1.1,-1),At("u2",t,e,Mt,-n*.7,i*1.1,-1),At("u3",t,e,Mt,0,i*2,-1),At("cf1",t,e,Mt,-n,0,1),At("cf2",t,e,Mt,n,0,1),At("cf3",t,e,Mt,0,-i,1),At("cf4",t,e,Mt,0,i,1),At("cn1",t,e,Mt,-n,0,-1),At("cn2",t,e,Mt,n,0,-1),At("cn3",t,e,Mt,0,-i,-1),At("cn4",t,e,Mt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function At(r,e,t,n,i,s,a){vo.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,u=o.length;l<u;l++)c.setXYZ(o[l],vo.x,vo.y,vo.z)}}const yo=new rn;class aE extends Kn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new je;s.setIndex(new dt(n,1)),s.setAttribute("position",new dt(i,3)),super(s,new an({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&yo.setFromObject(this.object),yo.isEmpty())return;const t=yo.min,n=yo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class oE extends Kn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new je;s.setIndex(new dt(n,1)),s.setAttribute("position",new Ee(i,3)),super(s,new an({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class cE extends Li{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new je;a.setAttribute("position",new Ee(s,3)),a.computeBoundingSphere(),super(a,new an({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new je;c.setAttribute("position",new Ee(o,3)),c.computeBoundingSphere(),this.add(new Tt(c,new Ui({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Mf=new U;let bo,zl;class lE extends it{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",bo===void 0&&(bo=new je,bo.setAttribute("position",new Ee([0,0,0,0,1,0],3)),zl=new hs(0,.5,1,5,1),zl.translate(0,-.5,0)),this.position.copy(t),this.line=new Li(bo,new an({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt(zl,new Ui({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Mf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Mf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class uE extends Kn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new je;i.setAttribute("position",new Ee(t,3)),i.setAttribute("color",new Ee(n,3));const s=new an({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ve,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dE{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ea,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let M=0,d=_.length;M<d;M++){const y=_[M],m=new ur;m.curves=y.curves,E.push(m)}return E}function n(_,E){const M=E.length;let d=!1;for(let y=M-1,m=0;m<M;y=m++){let S=E[y],C=E[m],w=C.x-S.x,x=C.y-S.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(S=E[m],w=-w,C=E[y],x=-x),_.y<S.y||_.y>C.y)continue;if(_.y===S.y){if(_.x===S.x)return!0}else{const A=x*(_.x-S.x)-w*(_.y-S.y);if(A===0)return!0;if(A<0)continue;d=!d}}else{if(_.y!==S.y)continue;if(C.x<=_.x&&_.x<=S.x||S.x<=_.x&&_.x<=C.x)return!0}}return d}const i=Xn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new ur,c.curves=o.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,b;f[g]=void 0,p[g]=[];for(let _=0,E=s.length;_<E;_++)o=s[_],b=o.getPoints(),a=i(b),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new ur,p:b},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:b[0]});if(!f[0])return t(s);if(f.length>1){let _=!1,E=0;for(let M=0,d=f.length;M<d;M++)h[M]=[];for(let M=0,d=f.length;M<d;M++){const y=p[M];for(let m=0;m<y.length;m++){const S=y[m];let C=!0;for(let w=0;w<f.length;w++)n(S.p,f[w].p)&&(M!==w&&E++,C?(C=!1,h[w].push(S)):_=!0);C&&h[M].push(S)}}E>0&&_===!1&&(p=h)}let v;for(let _=0,E=f.length;_<E;_++){c=f[_].s,l.push(c),v=p[_];for(let M=0,d=v.length;M<d;M++)c.holes.push(v[M].h)}return l}}class hE extends Un{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);const fE=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Dp,AddEquation:Ri,AddOperation:Rp,AdditiveAnimationBlendMode:Eu,AdditiveBlending:Xl,AgXToneMapping:Up,AlphaFormat:yu,AlwaysCompare:Kp,AlwaysDepth:Mp,AlwaysStencilFunc:jl,AmbientLight:Jm,AnimationAction:ag,AnimationClip:aa,AnimationLoader:h1,AnimationMixer:V1,AnimationObjectGroup:B1,AnimationUtils:c1,ArcCurve:Mm,ArrayCamera:hm,ArrowHelper:lE,AttachedBindMode:Zl,Audio:rg,AudioAnalyser:R1,AudioContext:Ku,AudioListener:A1,AudioLoader:S1,AxesHelper:uE,BackSide:nn,BasicDepthPacking:Vp,BasicShadowMap:av,BatchedMesh:ym,Bone:Ou,BooleanKeyframeTrack:br,Box2:j1,Box3:rn,Box3Helper:oE,BoxGeometry:yr,BoxHelper:aE,BufferAttribute:dt,BufferGeometry:je,BufferGeometryLoader:ng,ByteType:gu,Cache:ai,Camera:Mc,CameraHelper:sE,CanvasTexture:Lw,CapsuleGeometry:Ic,CatmullRomCurve3:Sm,CineonToneMapping:Lp,CircleGeometry:Lc,ClampToEdgeWrapping:Cn,Clock:ig,Color:ve,ColorKeyframeTrack:Yu,ColorManagement:rt,CompressedArrayTexture:Pw,CompressedCubeTexture:Iw,CompressedTexture:Rc,CompressedTextureLoader:f1,ConeGeometry:Dc,ConstantAlphaFactor:yp,ConstantColorFactor:_p,CubeCamera:rm,CubeReflectionMapping:fi,CubeRefractionMapping:Ii,CubeTexture:pa,CubeTextureLoader:p1,CubeUVReflectionMapping:os,CubicBezierCurve:Bu,CubicBezierCurve3:wm,CubicInterpolant:Gm,CullFaceBack:Wl,CullFaceFront:tp,CullFaceFrontBack:sv,CullFaceNone:ep,Curve:Fn,CurvePath:Am,CustomBlending:ip,CustomToneMapping:Np,CylinderGeometry:hs,Cylindrical:Z1,Data3DTexture:Cu,DataArrayTexture:bc,DataTexture:Wn,DataTextureLoader:m1,DataUtils:yy,DecrementStencilOp:bv,DecrementWrapStencilOp:Mv,DefaultLoadingManager:qm,DepthFormat:cr,DepthStencilFormat:pr,DepthTexture:Lu,DetachedBindMode:Fp,DirectionalLight:Km,DirectionalLightHelper:rE,DiscreteInterpolant:Wm,DisplayP3ColorSpace:yc,DodecahedronGeometry:Nc,DoubleSide:Vn,DstAlphaFactor:hp,DstColorFactor:pp,DynamicCopyUsage:Fv,DynamicDrawUsage:Iv,DynamicReadUsage:Nv,EdgesGeometry:Tm,EllipseCurve:Pc,EqualCompare:qp,EqualDepth:wp,EqualStencilFunc:Av,EquirectangularReflectionMapping:Hs,EquirectangularRefractionMapping:Gs,Euler:Sn,EventDispatcher:_i,ExtrudeGeometry:Oc,FileLoader:mi,Float16BufferAttribute:Ey,Float32BufferAttribute:Ee,FloatType:cn,Fog:Ac,FogExp2:Ec,FramebufferTexture:Rw,FrontSide:hi,Frustum:ma,GLBufferAttribute:X1,GLSL1:Bv,GLSL3:Kl,GreaterCompare:Yp,GreaterDepth:Ap,GreaterEqualCompare:jp,GreaterEqualDepth:Ep,GreaterEqualStencilFunc:Pv,GreaterStencilFunc:Cv,GridHelper:nE,Group:jr,HalfFloatType:cs,HemisphereLight:Ym,HemisphereLightHelper:tE,IcosahedronGeometry:Fc,ImageBitmapLoader:M1,ImageLoader:oa,ImageUtils:$p,IncrementStencilOp:yv,IncrementWrapStencilOp:xv,InstancedBufferAttribute:ss,InstancedBufferGeometry:tg,InstancedInterleavedBuffer:W1,InstancedMesh:vm,Int16BufferAttribute:Sy,Int32BufferAttribute:wy,Int8BufferAttribute:by,IntType:hc,InterleavedBuffer:Tc,InterleavedBufferAttribute:mr,Interpolant:ya,InterpolateDiscrete:qs,InterpolateLinear:rc,InterpolateSmooth:So,InvertStencilOp:Sv,KeepStencilOp:$i,KeyframeTrack:kn,LOD:gm,LatheGeometry:ga,Layers:xc,LessCompare:Xp,LessDepth:Sp,LessEqualCompare:Au,LessEqualDepth:Vs,LessEqualStencilFunc:Tv,LessStencilFunc:Ev,Light:Fi,LightProbe:eg,Line:Li,Line3:K1,LineBasicMaterial:an,LineCurve:zu,LineCurve3:Em,LineDashedMaterial:zm,LineLoop:bm,LineSegments:Kn,LinearDisplayP3ColorSpace:fa,LinearFilter:It,LinearInterpolant:qu,LinearMipMapLinearFilter:uv,LinearMipMapNearestFilter:lv,LinearMipmapLinearFilter:Hn,LinearMipmapNearestFilter:Ls,LinearSRGBColorSpace:gi,LinearToneMapping:Pp,LinearTransfer:Zs,Loader:hn,LoaderUtils:ru,LoadingManager:Zu,LoopOnce:kp,LoopPingPong:zp,LoopRepeat:Bp,LuminanceAlphaFormat:Mu,LuminanceFormat:xu,MOUSE:iv,Material:Jt,MaterialLoader:Wc,MathUtils:ny,Matrix2:ed,Matrix3:qe,Matrix4:Ue,MaxEquation:op,Mesh:Tt,MeshBasicMaterial:Ui,MeshDepthMaterial:Du,MeshDistanceMaterial:Nu,MeshLambertMaterial:km,MeshMatcapMaterial:Bm,MeshNormalMaterial:Fm,MeshPhongMaterial:Um,MeshPhysicalMaterial:Nm,MeshStandardMaterial:Wu,MeshToonMaterial:Om,MinEquation:ap,MirroredRepeatWrapping:Xs,MixOperation:Cp,MultiplyBlending:Yl,MultiplyOperation:da,NearestFilter:kt,NearestMipMapLinearFilter:cv,NearestMipMapNearestFilter:ov,NearestMipmapLinearFilter:qr,NearestMipmapNearestFilter:mu,NeutralToneMapping:Op,NeverCompare:Wp,NeverDepth:xp,NeverStencilFunc:wv,NoBlending:li,NoColorSpace:ri,NoToneMapping:ui,NormalAnimationBlendMode:vc,NormalBlending:or,NotEqualCompare:Zp,NotEqualDepth:Tp,NotEqualStencilFunc:Rv,NumberKeyframeTrack:ra,Object3D:it,ObjectLoader:b1,ObjectSpaceNormalMap:Gp,OctahedronGeometry:_a,OneFactor:lp,OneMinusConstantAlphaFactor:bp,OneMinusConstantColorFactor:vp,OneMinusDstAlphaFactor:fp,OneMinusDstColorFactor:mp,OneMinusSrcAlphaFactor:Io,OneMinusSrcColorFactor:dp,OrthographicCamera:Sc,P3Primaries:Ks,PCFShadowMap:pu,PCFSoftShadowMap:np,PMREMGenerator:Jl,Path:ea,PerspectiveCamera:Ft,Plane:Ci,PlaneGeometry:us,PlaneHelper:cE,PointLight:jm,PointLightHelper:$1,Points:xm,PointsMaterial:Fu,PolarGridHelper:iE,PolyhedronGeometry:Oi,PositionalAudio:C1,PropertyBinding:nt,PropertyMixer:sg,QuadraticBezierCurve:Vu,QuadraticBezierCurve3:Hu,Quaternion:ln,QuaternionKeyframeTrack:ba,QuaternionLinearInterpolant:Xm,RED_GREEN_RGTC2_Format:nc,RED_RGTC1_Format:wu,REVISION:uc,RGBADepthPacking:Hp,RGBAFormat:tn,RGBAIntegerFormat:_c,RGBA_ASTC_10x10_Format:Ko,RGBA_ASTC_10x5_Format:Yo,RGBA_ASTC_10x6_Format:Zo,RGBA_ASTC_10x8_Format:jo,RGBA_ASTC_12x10_Format:Jo,RGBA_ASTC_12x12_Format:Qo,RGBA_ASTC_4x4_Format:Bo,RGBA_ASTC_5x4_Format:zo,RGBA_ASTC_5x5_Format:Vo,RGBA_ASTC_6x5_Format:Ho,RGBA_ASTC_6x6_Format:Go,RGBA_ASTC_8x5_Format:Wo,RGBA_ASTC_8x6_Format:Xo,RGBA_ASTC_8x8_Format:qo,RGBA_BPTC_Format:Fs,RGBA_ETC2_EAC_Format:ko,RGBA_PVRTC_2BPPV1_Format:Uo,RGBA_PVRTC_4BPPV1_Format:No,RGBA_S3TC_DXT1_Format:Ns,RGBA_S3TC_DXT3_Format:Us,RGBA_S3TC_DXT5_Format:Os,RGBDepthPacking:mv,RGBFormat:bu,RGBIntegerFormat:dv,RGB_BPTC_SIGNED_Format:$o,RGB_BPTC_UNSIGNED_Format:ec,RGB_ETC1_Format:Oo,RGB_ETC2_Format:Fo,RGB_PVRTC_2BPPV1_Format:Do,RGB_PVRTC_4BPPV1_Format:Lo,RGB_S3TC_DXT1_Format:Ds,RGDepthPacking:gv,RGFormat:Su,RGIntegerFormat:gc,RawShaderMaterial:Dm,Ray:ls,Raycaster:q1,Rec709Primaries:js,RectAreaLight:Qm,RedFormat:mc,RedIntegerFormat:ha,ReinhardToneMapping:Ip,RenderTarget:em,RepeatWrapping:Ws,ReplaceStencilOp:vv,ReverseSubtractEquation:sp,RingGeometry:kc,SIGNED_RED_GREEN_RGTC2_Format:ic,SIGNED_RED_RGTC1_Format:tc,SRGBColorSpace:Tn,SRGBTransfer:ht,Scene:fm,ShaderChunk:Oe,ShaderLib:Nn,ShaderMaterial:On,ShadowMaterial:Lm,Shape:ur,ShapeGeometry:Bc,ShapePath:dE,ShapeUtils:Xn,ShortType:_u,Skeleton:Cc,SkeletonHelper:Q1,SkinnedMesh:_m,Source:sr,Sphere:Yt,SphereGeometry:va,Spherical:Y1,SphericalHarmonics3:$m,SplineCurve:Gu,SpotLight:Zm,SpotLightHelper:J1,Sprite:mm,SpriteMaterial:Uu,SrcAlphaFactor:Po,SrcAlphaSaturateFactor:gp,SrcColorFactor:up,StaticCopyUsage:Ov,StaticDrawUsage:Js,StaticReadUsage:Dv,StereoCamera:w1,StreamCopyUsage:kv,StreamDrawUsage:Lv,StreamReadUsage:Uv,StringKeyframeTrack:xr,SubtractEquation:rp,SubtractiveBlending:ql,TOUCH:rv,TangentSpaceNormalMap:Ni,TetrahedronGeometry:zc,Texture:wt,TextureLoader:g1,TextureUtils:ow,TorusGeometry:Vc,TorusKnotGeometry:Hc,Triangle:_n,TriangleFanDrawMode:pv,TriangleStripDrawMode:fv,TrianglesDrawMode:hv,TubeGeometry:Gc,UVMapping:dc,Uint16BufferAttribute:Ru,Uint32BufferAttribute:Pu,Uint8BufferAttribute:xy,Uint8ClampedBufferAttribute:My,Uniform:$u,UniformsGroup:G1,UniformsLib:pe,UniformsUtils:im,UnsignedByteType:jn,UnsignedInt248Type:fr,UnsignedInt5999Type:vu,UnsignedIntType:pi,UnsignedShort4444Type:fc,UnsignedShort5551Type:pc,UnsignedShortType:ns,VSMShadowMap:zn,Vector2:Q,Vector3:U,Vector4:lt,VectorKeyframeTrack:sa,VideoTexture:Cw,WebGL3DRenderTarget:ly,WebGLArrayRenderTarget:cy,WebGLCoordinateSystem:Gn,WebGLCubeRenderTarget:sm,WebGLMultipleRenderTargets:hE,WebGLRenderTarget:Un,WebGLRenderer:_w,WebGLUtils:dm,WebGPUCoordinateSystem:Qs,WireframeGeometry:Im,WrapAroundEnding:Ys,ZeroCurvatureEnding:ir,ZeroFactor:cp,ZeroSlopeEnding:rr,ZeroStencilOp:_v,createCanvasElement:Qp},Symbol.toStringTag,{value:"Module"})),pE=(r,e)=>{const t=fu(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const a=await e(s);a&&(n=a)});Di(()=>{i(),n&&n()})},cg=new Ft(75,0,.1,1e3);cg.position.z=5;cg.lookAt(0,0,0);function lg(r,e){const t=di(r);let n=r;const i=t.subscribe(o=>n=o);return Di(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(o),e==null||e(o,c)},update:o=>{const c=o(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const Xc=()=>{const r=Pi("threlte");if(r===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return r},td=Symbol("threlte-hierarchical-parent-context"),ug=()=>Pi(td),mE=r=>es(td,r),gE=r=>{const e=lg(r);return es(td,e),e};function _E(r){let e;const t=r[7].default,n=ft(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&64)&&pt(n,t,i,i[6],e?gt(t,i[6],s,null):mt(i[6]),null)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}const vE=()=>({onChildMount:Pi("threlte-hierarchical-object-on-mount"),onChildDestroy:Pi("threlte-hierarchical-object-on-destroy")});function yE(r,e,t){var v;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const c=_=>{o==null||o(_)};let{onChildDestroy:l=void 0}=e;const u=_=>{l==null||l(_)},{invalidate:h}=Xc(),f=ug();Zt(r,f,_=>t(5,n=_));let{parent:p=n}=e;const g=vE();a&&((v=g.onChildMount)==null||v.call(g,a),h());const b=lg(a,(_,E)=>{var M,d;E&&((M=g.onChildDestroy)==null||M.call(g,E),h()),_&&((d=g.onChildMount)==null||d.call(g,_),h())});return Di(()=>{var _;a&&((_=g.onChildDestroy)==null||_.call(g,a),h())}),es("threlte-hierarchical-object-on-mount",c),es("threlte-hierarchical-object-on-destroy",u),mE(b),r.$$set=_=>{"object"in _&&t(2,a=_.object),"onChildMount"in _&&t(3,o=_.onChildMount),"onChildDestroy"in _&&t(4,l=_.onChildDestroy),"parent"in _&&t(1,p=_.parent),"$$scope"in _&&t(6,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(1,p=n),r.$$.dirty&4&&b.set(a)},[f,p,a,o,l,n,s,i]}class bE extends un{constructor(e){super(),dn(this,e,yE,_E,sn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function xE(r){let e;const t=r[1].default,n=ft(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&pt(n,t,i,i[4],e?gt(t,i[4],s,null):mt(i[4]),null)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function ME(r){let e,t;return e=new bE({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[xE]},$$scope:{ctx:r}}}),{c(){vn(e.$$.fragment)},l(n){yn(e.$$.fragment,n)},m(n,i){bn(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Te(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){xn(e,n)}}}function SE(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=c=>s.add(c),o=c=>s.remove(c);return r.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[s,n,a,o,i]}class wE extends un{constructor(e){super(),dn(this,e,SE,ME,sn,{object:0})}}const EE=()=>Pi("threlte-internal-context");function AE(r){let e;const t=r[9].default,n=ft(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&pt(n,t,i,i[8],e?gt(t,i[8],s,null):mt(i[8]),null)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}const Sf="threlte-disposable-object-context";function TE(r,e,t){let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:c,removeDisposableObjects:l}=EE();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const p=Pi(Sf);Zt(r,p,v=>t(7,i=v));const g=di(f??i??!0);Zt(r,g,v=>t(6,n=v)),es(Sf,g);let b=n?o(u):[];return c(b),Di(()=>{l(b)}),r.$$set=v=>{"object"in v&&t(2,u=v.object),"dispose"in v&&t(3,f=v.dispose),"$$scope"in v&&t(8,a=v.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&g.set(f??i??!0),r.$$.dirty&116&&u!==h&&(l(b),t(5,b=n?o(u):[]),c(b),t(4,h=u))},[p,g,u,f,h,b,n,i,a,s]}class CE extends un{constructor(e){super(),dn(this,e,TE,AE,sn,{object:2,dispose:3})}}const RE=/^\s*class\s+/,PE=r=>typeof r!="function"?!1:RE.test(r.toString()),IE=r=>Array.isArray(r),wf=(r,e)=>PE(r)?IE(e)?new r(...e):new r:r,LE=r=>"isObject3D"in r,Ef=r=>"dispose"in r,dg=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Vl=Symbol("initialValueBeforeAttach"),DE=()=>{const{invalidate:r}=Xc();let e=!1,t=Vl,n,i,s;const a=(c,l,u)=>{if(o(),!u){const h=c;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:h,key:f}=dg(l,u);t=h[f],h[f]=c,i=h,s=f}e=!0,r()}},o=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Vl&&(i[s]=t,t=Vl,i=void 0,s=void 0),e=!1,r())};return Di(()=>{o()}),{update:a}},NE=r=>r&&r.isCamera,hg=r=>r&&r.isOrthographicCamera,fg=r=>r&&r.isPerspectiveCamera,UE=r=>fg(r)||hg(r),OE=()=>{const{invalidate:r,size:e,camera:t}=Xc();let n,i;Di(()=>{i==null||i()});const s=c=>{n&&(hg(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):fg(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(c,l)=>{if(i==null||i(),l||!UE(c)){n=void 0;return}n=c,i=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!NE(c)||!l||(t.set(c),r())}}},pg=()=>{const r=Df(),e=(n,i)=>{const s=r.$$.callbacks[n];s&&s.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!r.$$.callbacks[n],enumerable:!0}),e},FE=()=>{const r=pg(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,r("create",{ref:t,cleanup:o=>{e.push(o)}})},s=a=>{t=a,n&&i()};return uu(()=>{i(),n=!0}),Di(()=>{e.forEach(a=>a())}),{updateRef:s}},Af=r=>!!(r!=null&&r.addEventListener),kE=()=>{const r=pg(),e=Df(),t=c=>{c!=null&&c.type&&r(c.type,c)},n=(c,l)=>{Af(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},i=(c,l)=>{Af(c)&&l.forEach(u=>{c.addEventListener(u,t)})},s=di(),a=di([]);return pE([s,a],([c,l])=>(i(c,l),()=>n(c,l))),uu(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{s.set(c)}}},BE=r=>{const t=Pi("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(r)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let s=[];return Di(()=>{s.forEach(l=>l())}),{updateRef:l=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,l);h&&s.push(h)})},updateProps:l=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,l)})},pluginsProps:i}},zE=new Set(["$$scope","$$slots","type","args","attach","instance"]),VE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),HE=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Tf=(r,e,t)=>{var n,i,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=r[e])==null?void 0:n.setScalar)=="function"&&!((i=r[e])!=null&&i.isColor)?(a,o,c)=>{a[o].setScalar(c)}:typeof((s=r[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(a,o,c)=>{a[o].set(...c)}:(a,o,c)=>{a[o].set(c)}:(a,o,c)=>{a[o]=c}},GE=()=>{const{invalidate:r}=Xc(),e=new Map,t=new Map,n=(s,a,o,c)=>{if(HE(o)){const h=e.get(a);if(h&&h.instance===s&&h.value===o)return;e.set(a,{instance:s,value:o})}const{key:l,target:u}=dg(s,a);if(o!=null){const h=t.get(a);if(h)h(u,l,o);else{const f=Tf(u,l,o);t.set(a,f),f(u,l,o)}}else Tf(u,l,o)(u,l,o);c.manualCamera||VE.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,a,o)=>{var c;for(const l in a)!zE.has(l)&&!((c=o.pluginsProps)!=null&&c.includes(l))&&n(s,l,a[l],o),r()}}},WE=r=>({ref:r&2}),Cf=r=>({ref:r[1]}),XE=r=>({ref:r&2}),Rf=r=>({ref:r[1]});function Pf(r){let e,t;return e=new CE({props:{object:r[1],dispose:r[0]}}),{c(){vn(e.$$.fragment)},l(n){yn(e.$$.fragment,n)},m(n,i){bn(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(Te(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){xn(e,n)}}}function qE(r){let e;const t=r[10].default,n=ft(t,r,r[11],Cf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&pt(n,t,i,i[11],e?gt(t,i[11],s,WE):mt(i[11]),Cf)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function YE(r){let e,t;return e=new wE({props:{object:r[1],$$slots:{default:[ZE]},$$scope:{ctx:r}}}),{c(){vn(e.$$.fragment)},l(n){yn(e.$$.fragment,n)},m(n,i){bn(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&2050&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Te(e.$$.fragment,n),t=!0)},o(n){Re(e.$$.fragment,n),t=!1},d(n){xn(e,n)}}}function ZE(r){let e;const t=r[10].default,n=ft(t,r,r[11],Rf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&pt(n,t,i,i[11],e?gt(t,i[11],s,XE):mt(i[11]),Rf)},i(i){e||(Te(n,i),e=!0)},o(i){Re(n,i),e=!1},d(i){n&&n.d(i)}}}function jE(r){let e=Ef(r[1]),t,n,i,s,a,o,c=e&&Pf(r);const l=[YE,qE],u=[];function h(f,p){return p&2&&(n=null),n==null&&(n=!!LE(f[1])),n?0:1}return i=h(r,-1),s=u[i]=l[i](r),{c(){c&&c.c(),t=oi(),s.c(),a=Et()},l(f){c&&c.l(f),t=ci(f),s.l(f),a=Et()},m(f,p){c&&c.m(f,p),Je(f,t,p),u[i].m(f,p),Je(f,a,p),o=!0},p(f,[p]){p&2&&(e=Ef(f[1])),e?c?(c.p(f,p),p&2&&Te(c,1)):(c=Pf(f),c.c(),Te(c,1),c.m(t.parentNode,t)):c&&(Yn(),Re(c,1,1,()=>{c=null}),Zn());let g=i;i=h(f,p),i===g?u[i].p(f,p):(Yn(),Re(u[g],1,1,()=>{u[g]=null}),Zn(),s=u[i],s?s.p(f,p):(s=u[i]=l[i](f),s.c()),Te(s,1),s.m(a.parentNode,a))},i(f){o||(Te(c),Te(s),o=!0)},o(f){Re(c),Re(s),o=!1},d(f){f&&(Ce(t),Ce(a)),c&&c.d(f),u[i].d(f)}}}function KE(r,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Bt(e,n),s,{$$slots:a={},$$scope:o}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:p=void 0}=e;const g=ug();Zt(r,g,A=>t(9,s=A));const b=FE();let v=wf(c,l);b.updateRef(v);let _=!1;const E=()=>{if(!_){_=!0;return}t(1,v=wf(c,l)),b.updateRef(v)};let{ref:M=v}=e;const d=gE(v),y=BE({ref:v,props:e}),m=(y==null?void 0:y.pluginsProps)??[],S=GE(),C=OE(),w=DE(),x=kE();return r.$$set=A=>{t(23,e=et(et({},e),qn(A))),t(22,i=Bt(e,n)),"is"in A&&t(4,c=A.is),"args"in A&&t(5,l=A.args),"attach"in A&&t(6,u=A.attach),"manual"in A&&t(7,h=A.manual),"makeDefault"in A&&t(8,f=A.makeDefault),"dispose"in A&&t(0,p=A.dispose),"ref"in A&&t(3,M=A.ref),"$$scope"in A&&t(11,o=A.$$scope)},r.$$.update=()=>{r.$$.dirty&48&&E(),r.$$.dirty&2&&t(3,M=v),r.$$.dirty&2&&d.set(v),S.updateProps(v,i,{manualCamera:h,pluginsProps:m}),r.$$.dirty&130&&C.update(v,h),r.$$.dirty&258&&C.makeDefaultCamera(v,f),r.$$.dirty&578&&w.update(v,s,u),r.$$.dirty&2&&x.updateRef(v),r.$$.dirty&2&&(y==null||y.updateRef(v)),y==null||y.updateProps(e),y==null||y.updateRestProps(i)},e=qn(e),[p,v,g,M,c,l,u,h,f,s,a,o]}class mg extends un{constructor(e){super(),dn(this,e,KE,jE,sn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}}const JE={},QE=(r,e)=>{const t=JE[e]||fE[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...r,props:{...r.props,is:t}}},$E=r=>new Proxy(class{},{construct(e,[t]){const n=t;return new mg(QE(n,r))}});new Proxy(class{},{construct(r,[e]){const t=e;return new mg(t)},get(r,e){return $E(e)}});new U;new U;new U;new Ue;new Ue;new Tt;`${Oe.logdepthbuf_pars_vertex}${Oe.fog_pars_vertex}${Oe.logdepthbuf_vertex}${Oe.fog_vertex}`;`${Oe.tonemapping_fragment}${Oe.colorspace_fragment}`;`${Oe.tonemapping_fragment}${Oe.colorspace_fragment}`;const eA=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,tA=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,nA=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,iA=nA,rA=`
	${eA}
	${tA}
`;`${iA}${rA}${Oe.tonemapping_fragment}${Oe.colorspace_fragment}`;for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);var gg={exports:{}};gg.exports=qc;gg.exports.default=qc;function qc(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=_g(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;var o,c,l,u,h,f,p;if(n&&(s=lA(r,e,s,t)),r.length>80*t){o=l=r[0],c=u=r[1];for(var g=t;g<i;g+=t)h=r[g],f=r[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return ca(s,a,t,o,c,p,0),a}function _g(r,e,t,n,i){var s,a;if(i===cu(r,e,t,n)>0)for(s=e;s<t;s+=n)a=If(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=If(s,r[s],r[s+1],a);return a&&Yc(a,a.next)&&(ua(a),a=a.next),a}function _r(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Yc(t,t.next)||yt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ca(r,e,t,n,i,s,a){if(r){!a&&s&&pA(r,n,i,s);for(var o=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?aA(r,n,i,s):sA(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ua(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=oA(_r(r),e,t),ca(r,e,t,n,i,s,2)):a===2&&cA(r,e,t,n,i,s):ca(_r(r),e,t,n,i,s,1);break}}}}function sA(r){var e=r.prev,t=r,n=r.next;if(yt(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,f=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Jr(i,o,s,c,a,l,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function aA(r,e,t,n){var i=r.prev,s=r,a=r.next;if(yt(i,s,a)>=0)return!1;for(var o=i.x,c=s.x,l=a.x,u=i.y,h=s.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,b=o>c?o>l?o:l:c>l?c:l,v=u>h?u>f?u:f:h>f?h:f,_=au(p,g,e,t,n),E=au(b,v,e,t,n),M=r.prevZ,d=r.nextZ;M&&M.z>=_&&d&&d.z<=E;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=v&&M!==i&&M!==a&&Jr(o,u,c,h,l,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0||(M=M.prevZ,d.x>=p&&d.x<=b&&d.y>=g&&d.y<=v&&d!==i&&d!==a&&Jr(o,u,c,h,l,f,d.x,d.y)&&yt(d.prev,d,d.next)>=0))return!1;d=d.nextZ}for(;M&&M.z>=_;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=v&&M!==i&&M!==a&&Jr(o,u,c,h,l,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;d&&d.z<=E;){if(d.x>=p&&d.x<=b&&d.y>=g&&d.y<=v&&d!==i&&d!==a&&Jr(o,u,c,h,l,f,d.x,d.y)&&yt(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function oA(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Yc(i,s)&&vg(i,n,n.next,s)&&la(i,s)&&la(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ua(n),ua(n.next),n=r=s),n=n.next}while(n!==r);return _r(n)}function cA(r,e,t,n,i,s){var a=r;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&_A(a,o)){var c=yg(a,o);a=_r(a,a.next),c=_r(c,c.next),ca(a,e,t,n,i,s,0),ca(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function lA(r,e,t,n){var i=[],s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=_g(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(gA(l));for(i.sort(uA),s=0;s<i.length;s++)t=dA(i[s],t);return t}function uA(r,e){return r.x-e.x}function dA(r,e){var t=hA(r,e);if(!t)return e;var n=yg(t,r);return _r(n,n.next),_r(t,t.next)}function hA(r,e){var t=e,n=r.x,i=r.y,s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>s&&(s=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var c=a,l=a.x,u=a.y,h=1/0,f;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Jr(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),la(t,r)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&fA(a,t)))&&(a=t,h=f)),t=t.next;while(t!==c);return a}function fA(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function pA(r,e,t,n){var i=r;do i.z===0&&(i.z=au(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,mA(i)}function mA(r){var e,t,n,i,s,a,o,c,l=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(a>1);return r}function au(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function gA(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Jr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function _A(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!vA(r,e)&&(la(r,e)&&la(e,r)&&yA(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||Yc(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Yc(r,e){return r.x===e.x&&r.y===e.y}function vg(r,e,t,n){var i=Mo(yt(r,e,t)),s=Mo(yt(r,e,n)),a=Mo(yt(t,n,r)),o=Mo(yt(t,n,e));return!!(i!==s&&a!==o||i===0&&xo(r,t,e)||s===0&&xo(r,n,e)||a===0&&xo(t,r,n)||o===0&&xo(t,e,n))}function xo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Mo(r){return r>0?1:r<0?-1:0}function vA(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&vg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function la(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function yA(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function yg(r,e){var t=new ou(r.i,r.x,r.y),n=new ou(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function If(r,e,t,n){var i=new ou(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ua(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ou(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}qc.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,a=Math.abs(cu(r,0,s,t));if(i)for(var o=0,c=e.length;o<c;o++){var l=e[o]*t,u=o<c-1?e[o+1]*t:r.length;a-=Math.abs(cu(r,l,u,t))}var h=0;for(o=0;o<n.length;o+=3){var f=n[o]*t,p=n[o+1]*t,g=n[o+2]*t;h+=Math.abs((r[f]-r[g])*(r[p+1]-r[f+1])-(r[f]-r[p])*(r[g+1]-r[f+1]))}return a===0&&h===0?0:Math.abs((h-a)/a)};function cu(r,e,t,n){for(var i=0,s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}qc.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var a=0;a<e;a++)t.vertices.push(r[i][s][a]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new Q;new Q;var Lf;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let o=0;o<i.length;o++){const c=i[o];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let a=[];for(let o=i.length-1;o>=0;o--){const c=i[o];for(;a.length>=2;){const l=a[a.length-1],u=a[a.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))a.pop();else break}a.push(c)}return a.pop(),s.length==1&&a.length==1&&s[0].x==a[0].x&&s[0].y==a[0].y?s:s.concat(a)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(Lf||(Lf={}));function bA(r){let e;return{c(){e=Of("Acknowledgements, license, and more")},l(t){e=Ff(t,"Acknowledgements, license, and more")},m(t,n){Je(t,e,n)},d(t){t&&Ce(e)}}}function xA(r){let e;return{c(){e=Of("About Druid")},l(t){e=Ff(t,"About Druid")},m(t,n){Je(t,e,n)},d(t){t&&Ce(e)}}}function MA(r){let e,t=r[2](`
## Acknowledgements

Druid's magical powers all come from the open source community.

The frontend was built using [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) using Typescript and [Tailwind CSS](https://tailwindcss.com/).

Graphics were made with Blender and Inkscape.

The AI runs on the [ONNX Runtime](https://github.com/microsoft/onnxruntime) and was trained using PyTorch.

Plant descriptions come from Wikipedia. Plant training data comes from the [PlantNet-300K dataset](https://github.com/plantnet/PlantNet-300K).

## License and source code

The license and source code are viewable [on GitHub](https://github.com/wheitman/druid-web).
					`)+"",n;return{c(){e=new Nf(!1),n=Et(),this.h()},l(i){e=Uf(i,!1),n=Et(),this.h()},h(){e.a=n},m(i,s){e.m(t,i,s),Je(i,n,s)},p:dr,d(i){i&&(Ce(n),e.d())}}}function SA(r){let e,t='<span class="material-symbols-outlined">close</span> <span class="sr-only">Close</span>';return{c(){e=Lt("div"),e.innerHTML=t},l(n){e=Dt(n,"DIV",{"data-svelte-h":!0}),Tg(e)!=="svelte-1fx8dir"&&(e.innerHTML=t)},m(n,i){Je(n,e,i)},p:dr,d(n){n&&Ce(e)}}}function wA(r){let e,t,n,i,s,a,o,c;return e=new $_({props:{class:"flex w-full items-center justify-center text-lg font-semibold tracking-tight",$$slots:{default:[xA]},$$scope:{ctx:r}}}),n=new V_({props:{class:"-mx-5 mb-6 mt-5 block h-px bg-slate-200"}}),s=new Q0({props:{class:"text-sm text-foreground-alt",$$slots:{default:[MA]},$$scope:{ctx:r}}}),o=new a0({props:{class:"absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98",$$slots:{default:[SA]},$$scope:{ctx:r}}}),{c(){vn(e.$$.fragment),t=oi(),vn(n.$$.fragment),i=oi(),vn(s.$$.fragment),a=oi(),vn(o.$$.fragment)},l(l){yn(e.$$.fragment,l),t=ci(l),yn(n.$$.fragment,l),i=ci(l),yn(s.$$.fragment,l),a=ci(l),yn(o.$$.fragment,l)},m(l,u){bn(e,l,u),Je(l,t,u),bn(n,l,u),Je(l,i,u),bn(s,l,u),Je(l,a,u),bn(o,l,u),c=!0},p(l,u){const h={};u&32&&(h.$$scope={dirty:u,ctx:l}),e.$set(h);const f={};u&32&&(f.$$scope={dirty:u,ctx:l}),s.$set(f);const p={};u&32&&(p.$$scope={dirty:u,ctx:l}),o.$set(p)},i(l){c||(Te(e.$$.fragment,l),Te(n.$$.fragment,l),Te(s.$$.fragment,l),Te(o.$$.fragment,l),c=!0)},o(l){Re(e.$$.fragment,l),Re(n.$$.fragment,l),Re(s.$$.fragment,l),Re(o.$$.fragment,l),c=!1},d(l){l&&(Ce(t),Ce(i),Ce(a)),xn(e,l),xn(n,l),xn(s,l),xn(o,l)}}}function EA(r){let e,t,n,i;return e=new k0({props:{transition:ud,transitionConfig:{duration:150},class:"fixed inset-0 z-50 bg-black/80"}}),n=new C0({props:{transition:ud,class:"fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-lg borde bg-white p-5 shadow-popover outline-none sm:max-w-[490px] md:w-full",$$slots:{default:[wA]},$$scope:{ctx:r}}}),{c(){vn(e.$$.fragment),t=oi(),vn(n.$$.fragment)},l(s){yn(e.$$.fragment,s),t=ci(s),yn(n.$$.fragment,s)},m(s,a){bn(e,s,a),Je(s,t,a),bn(n,s,a),i=!0},p(s,a){const o={};a&32&&(o.$$scope={dirty:a,ctx:s}),n.$set(o)},i(s){i||(Te(e.$$.fragment,s),Te(n.$$.fragment,s),i=!0)},o(s){Re(e.$$.fragment,s),Re(n.$$.fragment,s),i=!1},d(s){s&&Ce(t),xn(e,s),xn(n,s)}}}function AA(r){let e,t,n,i;return e=new X0({props:{class:`h-12 w-full opacity-50 fixed bottom-20 left-0 mx-auto
		text-center px-[21px] text-sky-600 shadow-mini transition-colors hover:italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98`,$$slots:{default:[bA]},$$scope:{ctx:r}}}),n=new f0({props:{$$slots:{default:[EA]},$$scope:{ctx:r}}}),{c(){vn(e.$$.fragment),t=oi(),vn(n.$$.fragment)},l(s){yn(e.$$.fragment,s),t=ci(s),yn(n.$$.fragment,s)},m(s,a){bn(e,s,a),Je(s,t,a),bn(n,s,a),i=!0},p(s,a){const o={};a&32&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const c={};a&32&&(c.$$scope={dirty:a,ctx:s}),n.$set(c)},i(s){i||(Te(e.$$.fragment,s),Te(n.$$.fragment,s),i=!0)},o(s){Re(e.$$.fragment,s),Re(n.$$.fragment,s),i=!1},d(s){s&&Ce(t),xn(e,s),xn(n,s)}}}function TA(r){let e,t,n,i,s,a,o,c,l,u;return i=new Cg({props:{standalone:!0}}),l=new q_({props:{$$slots:{default:[AA]},$$scope:{ctx:r}}}),{c(){e=Lt("meta"),t=oi(),n=Lt("div"),vn(i.$$.fragment),s=oi(),a=Lt("div"),o=new Nf(!1),c=oi(),vn(l.$$.fragment),this.h()},l(h){const f=Eg("svelte-1dvrf4b",document.head);e=Dt(f,"META",{name:!0,content:!0}),f.forEach(Ce),t=ci(h),n=Dt(h,"DIV",{class:!0,style:!0});var p=zt(n);yn(i.$$.fragment,p),s=ci(p),a=Dt(p,"DIV",{class:!0});var g=zt(a);o=Uf(g,!1),g.forEach(Ce),c=ci(p),yn(l.$$.fragment,p),p.forEach(Ce),this.h()},h(){document.title="Druid",fs(e,"name","description"),fs(e,"content","Plant identification tool that runs on device"),o.a=null,fs(a,"class","p-8"),fs(n,"class","h-[98vh] w-full"),fs(n,"style","")},m(h,f){Sa(document.head,e),Je(h,t,f),Je(h,n,f),bn(i,n,null),Sa(n,s),Sa(n,a),o.m(r[0],a),Sa(n,c),bn(l,n,null),u=!0},p(h,[f]){(!u||f&1)&&o.p(h[0]);const p={};f&32&&(p.$$scope={dirty:f,ctx:h}),l.$set(p)},i(h){u||(Te(i.$$.fragment,h),Te(l.$$.fragment,h),u=!0)},o(h){Re(i.$$.fragment,h),Re(l.$$.fragment,h),u=!1},d(h){h&&(Ce(t),Ce(n)),Ce(e),xn(i),xn(l)}}}function CA(r,e,t){let n,i=di("");Zt(r,i,o=>t(0,n=o)),uu(()=>{Ng.set(Ug.cove),a(`Greetings. I'm **Druid**, your virtual companion to the natural world.
I am well-versed in the arts of [plant identification](/druid-web/plant-analysis) and [soil analysis](/druid-web/soil-analysis).`)});function s(o){var c=new Hd.Converter;return c.makeHtml(o)}function a(o,c=0,l=70){var u=new Hd.Converter;let h=u.makeHtml(o).split(" "),f=h.length,p="",g;for(g=0;g<c&&g<f;g++)p+=h[g]+" ";Ag(i,n=p,n),g<f&&setTimeout(()=>{a(o,c+1,l)},l)}return[n,i,s]}class UA extends un{constructor(e){super(),dn(this,e,CA,TA,sn,{})}}export{UA as component,NA as universal};
