import{s as u,e as p,a as d,c as f,m,g as y,i as l,n as _,f as r}from"../chunks/scheduler.ScMV3vmV.js";import{S as g,i as $,c as x,a as C,m as h,t as v,b as w,d as b}from"../chunks/index.DbrWxxqn.js";import{Q as k}from"../chunks/Question.DUgekJ7h.js";function q(o){let t,s="Cyclist conflict with kerbside activity, including risk of 'dooring'",e,n,a="Mode: Cycling";return{c(){t=p("p"),t.textContent=s,e=d(),n=p("p"),n.textContent=a},l(i){t=f(i,"P",{"data-svelte-h":!0}),m(t)!=="svelte-ojefuu"&&(t.textContent=s),e=y(i),n=f(i,"P",{"data-svelte-h":!0}),m(n)!=="svelte-1ektema"&&(n.textContent=a)},m(i,c){l(i,t,c),l(i,e,c),l(i,n,c)},p:_,d(i){i&&(r(t),r(e),r(n))}}}function P(o){let t,s;return t=new k({props:{idx:5,label:"Kerbside Activity",cases:[["2","<p>Kerbside activity is well-managed with no or minimal conflict with cyclists.</p>"],["1","<p>Less frequent kerbside activity, and conflict with cyclists is well-managed.</p>"],["0","<p>Frequent kerbside activity for cyclists to contend with. Conflict with cyclists is not well-managed.</p>"],["C","<p>Cycle facility next to parking/loading facility, without a buffer of at least 0.5m.</p><p>Or, an unprotected cycle lane is next to a frequently-used bus layby.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){h(t,e,n),s=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}class S extends g{constructor(t){super(),$(this,t,null,P,u,{})}}export{S as component};
