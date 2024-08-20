var J=Object.defineProperty;var K=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>(K(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,i as P,k as B,w as Q,x as z,y as X,z as Y,A as Z,B as tt,C as H,D as et,E as nt,F as it}from"./scheduler.PInwjcbo.js";const k=typeof window<"u";let st=k?()=>window.performance.now():()=>Date.now(),R=k?t=>requestAnimationFrame(t):w;const g=new Set;function I(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&R(I)}function rt(t){let e;return g.size===0&&R(I),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let C=!1;function lt(){C=!0}function ot(){C=!1}function at(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:at(1,o,m=>e[n[m]].claim_order,a))-1;i[s]=n[_]+1;const f=_+1;n[f]=s,o=Math.max(f,o)}const c=[],l=[];let r=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);r>=s;r--)l.push(e[r]);r--}for(;r>=0;r--)l.push(e[r]);c.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<c.length&&l[s].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[s],_)}}function ft(t,e){t.appendChild(e)}function q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=U("style");return e.textContent="/* empty */",_t(q(t),e),e.sheet}function _t(t,e){return ft(t.head||t,e),e.sheet}function dt(t,e){if(C){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){C&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function Ht(){return L(" ")}function Mt(){return L("")}function kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const mt=["width","height"];function ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&mt.indexOf(i)===-1?t[i]=e[i]:V(t,i,e[i])}function pt(t,e){Object.keys(e).forEach(n=>{yt(t,n,e[n])})}function yt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:V(t,e,n)}function It(t){return/-/.test(t)?pt:ht}function qt(t){return t.dataset.svelteH}function $t(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,o=!1){gt(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const r=t[l];if(e(r)){const s=n(r);return s===void 0?t.splice(l,1):t[l]=s,o||(t.claim_info.last_index=l),r}}for(let l=t.claim_info.last_index-1;l>=0;l--){const r=t[l];if(e(r)){const s=n(r);return s===void 0?t.splice(l,1):t[l]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,r}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function xt(t,e,n,i){return W(t,o=>o.nodeName===e,o=>{const c=[];for(let l=0;l<o.attributes.length;l++){const r=o.attributes[l];n[r.name]||c.push(r.name)}c.forEach(l=>o.removeAttribute(l))},()=>i(e))}function Ft(t,e,n){return xt(t,e,n,U)}function wt(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Ut(t){return wt(t," ")}function Vt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Gt(t,e,n){t.classList.toggle(e,!!n)}function vt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Jt(t,e){const n=[];let i=0;for(const o of e.childNodes)if(o.nodeType===8){const c=o.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(o)):c===`HEAD_${t}_START`&&(i+=1,n.push(o))}else i>0&&n.push(o);return n}function Kt(t,e){return new t(e)}const N=new Map;let A=0;function bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:ut(e),rules:{}};return N.set(t,n),n}function M(t,e,n,i,o,c,l,r=0){const s=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=s){const $=e+(n-e)*c(d);a+=d*100+`%{${l($,1-$)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${bt(_)}_${r}`,m=q(t),{stylesheet:y,rules:u}=N.get(m)||Et(m,t);u[f]||(u[f]=!0,y.insertRule(`@keyframes ${f} ${_}`,y.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${i}ms linear ${o}ms 1 both`,A+=1,f}function Nt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),A-=o,A||At())}function At(){R(()=>{A||(N.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),N.clear())})}let x;function Ct(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function T(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const E=new Set;let p;function Qt(){p={r:0,c:[],p}}function Xt(){p.r||v(p.c),p=p.p}function St(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Yt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),p.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Dt={duration:0};function Zt(t,e,n,i){let c=e(t,n,{direction:"both"}),l=i?0:1,r=null,s=null,a=null,_;function f(){a&&Nt(t,a)}function m(u,h){const d=u.b-l;return h*=Math.abs(d),{a:l,b:u.b,d,duration:h,start:u.start,end:u.start+h,group:u.group}}function y(u){const{delay:h=0,duration:d=300,easing:$=Q,tick:S=w,css:D}=c||Dt,O={start:st()+h,b:u};u||(O.group=p,p.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),r||s?s=O:(D&&(f(),a=M(t,l,u,d,h,$,D)),u&&S(0,1),r=m(O,d),B(()=>T(t,u,"start")),rt(b=>{if(s&&b>s.start&&(r=m(s,d),s=null,T(t,r.b,"start"),D&&(f(),a=M(t,l,r.b,r.duration,0,$,c.css))),r){if(b>=r.end)S(l=r.b,1-l),T(t,r.b,"end"),s||(r.b?f():--r.group.r||v(r.group.c)),r=null;else if(b>=r.start){const G=b-r.start;l=r.a+r.d*$(G/r.duration),S(l,1-l)}}return!!(r||s)}))}return{run(u){P(c)?Ct().then(()=>{c=c({direction:u?"in":"out"}),y(u)}):y(u)},end(){f(),r=s=null}}}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function Ot(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),B(()=>{const c=t.$$.on_mount.map(et).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(B)}function jt(t,e){const n=t.$$;n.fragment!==null&&(Z(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(nt.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,o,c,l=null,r=[-1]){const s=tt;H(t);const a=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:o,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:z(),dirty:r,skip_bound:!1,root:e.target||s.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,m,...y)=>{const u=y.length?y[0]:m;return a.ctx&&o(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&Tt(t,f)),m}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){lt();const f=$t(e.target);a.fragment&&a.fragment.l(f),f.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&St(t.$$.fragment),Ot(t,e.target,e.anchor),ot(),X()}H(s)}class ie{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){jt(this,1),this.$destroy=w}$on(e,n){if(!P(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);export{Zt as A,Gt as B,zt as C,kt as D,It as E,ie as S,$t as a,wt as b,Ft as c,F as d,U as e,Ut as f,Lt as g,dt as h,ne as i,Vt as j,St as k,Yt as l,Jt as m,qt as n,V as o,Wt as p,Mt as q,Xt as r,Ht as s,L as t,Qt as u,Kt as v,te as w,ee as x,Ot as y,jt as z};
