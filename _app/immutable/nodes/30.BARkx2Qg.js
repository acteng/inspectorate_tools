import{s as d,e as f,a as p,c as m,g as u,d as y,i as l,n as _,f as r}from"../chunks/scheduler.BHcsbfKa.js";import{S as g,i as $,c as x,a as C,m as h,t as v,b as w,d as b}from"../chunks/index.CiegshHD.js";import{Q as k}from"../chunks/Question.Bavkk64_.js";function q(o){let t,s="Cyclist conflict with kerbside activity, including risk of 'dooring'",e,n,a="Mode: Cycling";return{c(){t=f("p"),t.textContent=s,e=p(),n=f("p"),n.textContent=a},l(i){t=m(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-ojefuu"&&(t.textContent=s),e=y(i),n=m(i,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1ektema"&&(n.textContent=a)},m(i,c){l(i,t,c),l(i,e,c),l(i,n,c)},p:_,d(i){i&&(r(t),r(e),r(n))}}}function P(o){let t,s;return t=new k({props:{idx:5,label:"Kerbside Activity",cases:[["C","Cycle facility next to parking/loading facility, without a buffer of at least 0.5m.  Or, an unprotected cycle lane is next to a frequently-used bus layby."],["0","Frequent kerbside activity for cyclists to contend with. Conflict with cyclists is not well-managed."],["1","Less frequent kerbside activity, and conflict with cyclists is well-managed."],["2","Kerbside activity is well-managed with no or minimal conflict with cyclists. "]],$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){h(t,e,n),s=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}class j extends g{constructor(t){super(),$(this,t,null,P,d,{})}}export{j as component};
