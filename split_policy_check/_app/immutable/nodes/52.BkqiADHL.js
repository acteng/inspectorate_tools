import{s as j,a as g,e as O,g as b,c as V,p as E,i as f,n as J,f as u,k as N}from"../chunks/scheduler.mGr_ZlpV.js";import{S as P,i as k,c as x,b as c,m as T,t as w,a as S,d as C}from"../chunks/index.rGMSHTnh.js";import{C as q,e as A}from"../chunks/ConvertToXlsx.WAoMuDgR.js";import{s as D}from"../chunks/data.BIMJO7O_.js";/* empty css                                                    */import{T as y}from"../chunks/TextArea.CQ2iB7w6.js";function X(m){let t,l,a,$=`This page is for internal use only. The values below are TSV (tab-separated
  values), copyable into Excel.`,i,s,n,o,_,p,v;return t=new q({}),s=new y({props:{label:"TSV output, just the one row of values",value:m[2]}}),o=new y({props:{label:"TSV output with header",value:`${m[1]}
${m[2]}
`}}),p=new y({props:{label:"JSON mapping",value:JSON.stringify(Object.fromEntries(m[0]),null,"  ")}}),{c(){x(t.$$.fragment),l=g(),a=O("p"),a.textContent=$,i=g(),x(s.$$.fragment),n=g(),x(o.$$.fragment),_=g(),x(p.$$.fragment)},l(e){c(t.$$.fragment,e),l=b(e),a=V(e,"P",{"data-svelte-h":!0}),E(a)!=="svelte-5ssfe3"&&(a.textContent=$),i=b(e),c(s.$$.fragment,e),n=b(e),c(o.$$.fragment,e),_=b(e),c(p.$$.fragment,e)},m(e,r){T(t,e,r),f(e,l,r),f(e,a,r),f(e,i,r),T(s,e,r),f(e,n,r),T(o,e,r),f(e,_,r),T(p,e,r),v=!0},p:J,i(e){v||(w(t.$$.fragment,e),w(s.$$.fragment,e),w(o.$$.fragment,e),w(p.$$.fragment,e),v=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),S(o.$$.fragment,e),S(p.$$.fragment,e),v=!1},d(e){e&&(u(l),u(a),u(i),u(n),u(_)),C(t,e),C(s,e),C(o,e),C(p,e)}}}function d(m,t,l){let a;N(m,D,n=>l(3,a=n));let $=A(a),i=$.map(n=>n[0]).join("	"),s=$.map(n=>`"${n[1]}"`).join("	");return[$,i,s]}class K extends P{constructor(t){super(),k(this,t,d,X,j,{})}}export{K as component};
