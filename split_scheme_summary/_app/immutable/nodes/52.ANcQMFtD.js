import{s as j,a as g,e as O,g as b,c as V,m as E,i as f,n as J,f as u,k as N}from"../chunks/scheduler.BwufR8Ly.js";import{S as P,i as k,c as x,a as c,m as T,t as w,b as S,d as C}from"../chunks/index.BYv68wXE.js";import{C as q,e as A}from"../chunks/ConvertToXlsx._P7_ptqz.js";import{s as D}from"../chunks/data.STHMSbkc.js";/* empty css                                                    */import{T as y}from"../chunks/TextArea.2C2Xc7bA.js";function X(m){let t,p,a,$=`This page is for internal use only. The values below are TSV (tab-separated
  values), copyable into Excel.`,i,s,n,o,_,l,v;return t=new q({}),s=new y({props:{label:"TSV output, just the one row of values",value:m[2]}}),o=new y({props:{label:"TSV output with header",value:`${m[1]}
${m[2]}
`}}),l=new y({props:{label:"JSON mapping",value:JSON.stringify(Object.fromEntries(m[0]),null,"  ")}}),{c(){x(t.$$.fragment),p=g(),a=O("p"),a.textContent=$,i=g(),x(s.$$.fragment),n=g(),x(o.$$.fragment),_=g(),x(l.$$.fragment)},l(e){c(t.$$.fragment,e),p=b(e),a=V(e,"P",{"data-svelte-h":!0}),E(a)!=="svelte-5ssfe3"&&(a.textContent=$),i=b(e),c(s.$$.fragment,e),n=b(e),c(o.$$.fragment,e),_=b(e),c(l.$$.fragment,e)},m(e,r){T(t,e,r),f(e,p,r),f(e,a,r),f(e,i,r),T(s,e,r),f(e,n,r),T(o,e,r),f(e,_,r),T(l,e,r),v=!0},p:J,i(e){v||(w(t.$$.fragment,e),w(s.$$.fragment,e),w(o.$$.fragment,e),w(l.$$.fragment,e),v=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),S(o.$$.fragment,e),S(l.$$.fragment,e),v=!1},d(e){e&&(u(p),u(a),u(i),u(n),u(_)),C(t,e),C(s,e),C(o,e),C(l,e)}}}function d(m,t,p){let a;N(m,D,n=>p(3,a=n));let $=A(a),i=$.map(n=>n[0]).join("	"),s=$.map(n=>`"${n[1]}"`).join("	");return[$,i,s]}class K extends P{constructor(t){super(),k(this,t,d,X,j,{})}}export{K as component};
