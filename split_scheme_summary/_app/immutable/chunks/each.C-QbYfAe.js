import{a as z,t as B}from"./index.B1PmXhrv.js";import{x as C}from"./scheduler.D5Jpr0Om.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,f){n.d(1),f.delete(n.key)}function H(n,f){z(n,1,1,()=>{f.delete(n.key)})}function I(n,f,S,k,A,g,h,_,p,j,w,q){let i=n.length,d=g.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const l=[],a=new Map,m=new Map,M=[];for(c=d;c--;){const e=q(A,g,c),s=S(e);let t=h.get(s);t?k&&M.push(()=>t.p(e,f)):(t=j(s,e),t.c()),a.set(s,l[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const v=new Set,x=new Set;function y(e){B(e,1),e.m(_,w),h.set(e.key,e),w=e.first,d--}for(;i&&d;){const e=l[d-1],s=n[i-1],t=e.key,o=s.key;e===s?(w=e.first,i--,d--):a.has(o)?!h.has(t)||v.has(t)?y(e):x.has(o)?i--:m.get(t)>m.get(o)?(x.add(t),y(e)):(v.add(o),i--):(p(s,h),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,h)}for(;d;)y(l[d-1]);return C(M),l}export{G as d,F as e,H as o,I as u};
