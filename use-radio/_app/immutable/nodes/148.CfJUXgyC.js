import{s as f,e as c,a as g,c as m,p as u,g as _,i as r,n as d,f as p}from"../chunks/scheduler.mGr_ZlpV.js";import{S as $,i as h,c as x,b as C,m as v,t as y,a as b,d as k}from"../chunks/index.rGMSHTnh.js";import{Q as q}from"../chunks/Question.5zSYPWSS.js";function P(i){let t,a="Extent of lighting.",e,n,o="Mode: Walking / Wheeling / Cycling";return{c(){t=c("p"),t.textContent=a,e=g(),n=c("p"),n.textContent=o},l(s){t=m(s,"P",{"data-svelte-h":!0}),u(t)!=="svelte-s1s69v"&&(t.textContent=a),e=_(s),n=m(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-galsl6"&&(n.textContent=o)},m(s,l){r(s,t,l),r(s,e,l),r(s,n,l)},p:d,d(s){s&&(p(t),p(e),p(n))}}}function S(i){let t,a;return t=new q({props:{idx:20,label:"Lighting",cases:[["2","<p>Route lit thoroughly, including any public transport waiting areas.</p>"],["1","<p>Short stretches of darkness.</p><p>Or, bat-friendly lighting.</p>"],["0","<p>Long stretches of darkness.</p><p>Or, no lighting.</p>"]],$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){x(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){v(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){b(t.$$.fragment,e),a=!1},d(e){k(t,e)}}}class Q extends ${constructor(t){super(),h(this,t,null,S,f,{})}}export{Q as component};
