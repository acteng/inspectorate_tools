import{b as q,t as z}from"./index.Dmc4uC9p.js";import{y as B}from"./scheduler.BJ06nkRu.js";function E(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function F(n,f){n.d(1),f.delete(n.key)}function G(n,f){q(n,1,1,()=>{f.delete(n.key)})}function H(n,f,k,x,A,g,h,_,p,b,w,j){let i=n.length,d=g.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const l=[],a=new Map,y=new Map,M=[];for(c=d;c--;){const e=j(A,g,c),s=k(e);let t=h.get(s);t?x&&M.push(()=>t.p(e,f)):(t=b(s,e),t.c()),a.set(s,l[c]=t),s in u&&y.set(s,Math.abs(c-u[s]))}const v=new Set,S=new Set;function m(e){z(e,1),e.m(_,w),h.set(e.key,e),w=e.first,d--}for(;i&&d;){const e=l[d-1],s=n[i-1],t=e.key,o=s.key;e===s?(w=e.first,i--,d--):a.has(o)?!h.has(t)||v.has(t)?m(e):S.has(o)?i--:y.get(t)>y.get(o)?(S.add(t),m(e)):(v.add(o),i--):(p(s,h),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,h)}for(;d;)m(l[d-1]);return B(M),l}export{F as d,E as e,G as o,H as u};
