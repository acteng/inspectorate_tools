import{s as x,e as u,t as h,a as S,c as d,b as v,d as g,f as m,g as j,i as _,h as b,j as E,n as $,k}from"../chunks/scheduler.BJ06nkRu.js";import{S as q,i as y}from"../chunks/index.Dmc4uC9p.js";import{p as C}from"../chunks/stores.BW4H4qJq.js";function H(i){var f;let a,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=S(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=j(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,t){_(e,a,t),b(a,r),_(e,o,t),_(e,n,t),b(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&E(r,s),t&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&E(c,p)},i:$,o:$,d(e){e&&(m(a),m(o),m(n))}}}function P(i,a,s){let r;return k(i,C,o=>s(0,r=o)),[r]}class B extends q{constructor(a){super(),y(this,a,P,H,x,{})}}export{B as component};
