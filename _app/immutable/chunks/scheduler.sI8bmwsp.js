function S(){}function P(t,e){for(const n in e)t[n]=e[n];return t}function C(t){return t()}function R(){return Object.create(null)}function T(t){t.forEach(C)}function V(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Y(t){return Object.keys(t).length===0}function q(t,...e){if(t==null){for(const i of e)i(void 0);return S}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Z(t,e,n){t.$$.on_destroy.push(q(e,n))}function $(t,e,n,i){if(t){const c=E(t,e,n,i);return t[0](c)}}function E(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function tt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(e.dirty.length,c.length);for(let s=0;s<l;s+=1)u[s]=e.dirty[s]|c[s];return u}return e.dirty|c}return e.dirty}function et(t,e,n,i,c,u){if(c){const l=E(e,n,i,u);t.p(l,c)}}function nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function it(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ct(t,e,n){return t.set(n),e}let m=!1;function lt(){m=!0}function rt(){m=!1}function B(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function D(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,a=(c>0&&e[n[c]].claim_order<=o?c+1:B(1,c,O=>e[n[O]].claim_order,o))-1;i[r]=n[a]+1;const w=a+1;n[w]=r,c=Math.max(w,c)}const u=[],l=[];let s=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);s>=r;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);u.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<u.length&&l[r].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(l[r],a)}}function I(t,e){if(m){for(D(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function st(t,e,n){m&&!n?I(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function at(){return x(" ")}function ft(){return x("")}function _t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const z=["width","height"];function dt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&z.indexOf(i)===-1?t[i]=e[i]:L(t,i,e[i])}function ht(t){return t.dataset.svelteH}function mt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function pt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,e,n,i,c=!1){F(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function A(t,e,n,i){return N(t,c=>c.nodeName===e,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const s=c.attributes[l];n[s.name]||u.push(s.name)}u.forEach(l=>c.removeAttribute(l))},()=>i(e))}function bt(t,e,n){return A(t,e,n,M)}function yt(t,e,n){return A(t,e,n,H)}function U(t,e){return N(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function gt(t){return U(t," ")}function xt(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e){t.value=e??""}function wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,n){for(let i=0;i<t.options.length;i+=1){const c=t.options[i];if(c.__value===e){c.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Et(t){const e=t.querySelector(":checked");return e&&e.__value}function W(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Nt(t,e){return new t(e)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function At(t){v().$$.on_mount.push(t)}function jt(t){v().$$.after_update.push(t)}function Ot(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const u=W(e,n,{cancelable:i});return c.slice().forEach(l=>{l.call(t,u)}),!u.defaultPrevented}return!0}}function St(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],k=[];let _=[];const y=[],j=Promise.resolve();let g=!1;function G(){g||(g=!0,j.then(K))}function Pt(){return G(),j}function J(t){_.push(t)}function Ct(t){y.push(t)}const b=new Set;let f=0;function K(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,p(e),Q(e.$$)}}catch(e){throw d.length=0,f=0,e}for(p(null),d.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;y.length;)y.pop()();g=!1,b.clear(),p(t)}function Q(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function Tt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{lt as $,ft as A,J as B,kt as C,T as D,St as E,Et as F,H as G,yt as H,mt as I,wt as J,P as K,dt as L,it as M,jt as N,At as O,Nt as P,Pt as Q,R,K as S,V as T,Y as U,Tt as V,h as W,p as X,C as Y,d as Z,G as _,at as a,rt as a0,Ot as a1,pt as b,bt as c,gt as d,M as e,ut as f,ht as g,L as h,st as i,I as j,U as k,Z as l,ct as m,S as n,xt as o,ot as p,k as q,Ct as r,X as s,x as t,$ as u,et as v,nt as w,tt as x,vt as y,_t as z};
