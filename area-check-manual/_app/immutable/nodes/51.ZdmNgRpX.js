import{s as y,e as j,a as _,c as C,m as d,g as c,i as $,n as O,f as u,k as V}from"../chunks/scheduler.ScMV3vmV.js";import{S as E,i as J,c as g,a as v,m as b,t as x,b as S,d as T}from"../chunks/index.DbrWxxqn.js";import{e as N}from"../chunks/da_log.Bx8rHlm5.js";import{s as P}from"../chunks/data.CxtjSFk8.js";/* empty css                                                               */import{T as w}from"../chunks/TextArea.DbkWbfhb.js";function h(r){let a,i=`This page is for internal use only. The values below are TSV (tab-separated
  values), copyable into Excel.`,o,t,p,s,n,m,f;return t=new w({props:{label:"TSV output, just the one row of values",value:r[2]}}),s=new w({props:{label:"TSV output with header",value:`${r[1]}
${r[2]}
`}}),m=new w({props:{label:"JSON mapping",value:JSON.stringify(Object.fromEntries(r[0]),null,"  ")}}),{c(){a=j("p"),a.textContent=i,o=_(),g(t.$$.fragment),p=_(),g(s.$$.fragment),n=_(),g(m.$$.fragment)},l(e){a=C(e,"P",{"data-svelte-h":!0}),d(a)!=="svelte-5ssfe3"&&(a.textContent=i),o=c(e),v(t.$$.fragment,e),p=c(e),v(s.$$.fragment,e),n=c(e),v(m.$$.fragment,e)},m(e,l){$(e,a,l),$(e,o,l),b(t,e,l),$(e,p,l),b(s,e,l),$(e,n,l),b(m,e,l),f=!0},p:O,i(e){f||(x(t.$$.fragment,e),x(s.$$.fragment,e),x(m.$$.fragment,e),f=!0)},o(e){S(t.$$.fragment,e),S(s.$$.fragment,e),S(m.$$.fragment,e),f=!1},d(e){e&&(u(a),u(o),u(p),u(n)),T(t,e),T(s,e),T(m,e)}}}function k(r,a,i){let o;V(r,P,n=>i(3,o=n));let t=N(o),p=t.map(n=>n[0]).join("	"),s=t.map(n=>`"${n[1]}"`).join("	");return[t,p,s]}class G extends E{constructor(a){super(),J(this,a,k,h,y,{})}}export{G as component};
