import{s as V,e as y,a as c,c as C,b as E,g,m as O,f as j,p as k,i as q,h as $,n as D,k as J}from"../chunks/scheduler.Xtbo5Qzd.js";import{S as N,i as P,c as d,a as h,m as v,t as _,b,d as x}from"../chunks/index.CcW9ATex.js";import{e as A}from"../chunks/da_log.C0o9HNXn.js";import{s as I}from"../chunks/data.cGuJW2Vd.js";/* empty css                                                    */import{T as S}from"../chunks/TextArea.hXOFRqH5.js";import{C as X}from"../chunks/ConvertToXlsx.Bs0t5Y9c.js";function z(o){let e,s,m,r,f=`This page is for internal use only. The values below are TSV (tab-separated
    values), copyable into Excel.`,p,a,w,i,T,l,u;return s=new X({}),a=new S({props:{label:"TSV output, just the one row of values",value:o[2]}}),i=new S({props:{label:"TSV output with header",value:`${o[1]}
${o[2]}
`}}),l=new S({props:{label:"JSON mapping",value:JSON.stringify(Object.fromEntries(o[0]),null,"  ")}}),{c(){e=y("div"),d(s.$$.fragment),m=c(),r=y("p"),r.textContent=f,p=c(),d(a.$$.fragment),w=c(),d(i.$$.fragment),T=c(),d(l.$$.fragment),this.h()},l(t){e=C(t,"DIV",{class:!0});var n=E(e);h(s.$$.fragment,n),m=g(n),r=C(n,"P",{"data-svelte-h":!0}),O(r)!=="svelte-9nq73f"&&(r.textContent=f),p=g(n),h(a.$$.fragment,n),w=g(n),h(i.$$.fragment,n),T=g(n),h(l.$$.fragment,n),n.forEach(j),this.h()},h(){k(e,"class","govuk-width-container")},m(t,n){q(t,e,n),v(s,e,null),$(e,m),$(e,r),$(e,p),v(a,e,null),$(e,w),v(i,e,null),$(e,T),v(l,e,null),u=!0},p:D,i(t){u||(_(s.$$.fragment,t),_(a.$$.fragment,t),_(i.$$.fragment,t),_(l.$$.fragment,t),u=!0)},o(t){b(s.$$.fragment,t),b(a.$$.fragment,t),b(i.$$.fragment,t),b(l.$$.fragment,t),u=!1},d(t){t&&j(e),x(s),x(a),x(i),x(l)}}}function B(o,e,s){let m;J(o,I,a=>s(3,m=a));let r=A(m),f=r.map(a=>a[0]).join("	"),p=r.map(a=>`"${a[1]}"`).join("	");return[r,f,p]}class R extends N{constructor(e){super(),P(this,e,B,z,V,{})}}export{R as component};
