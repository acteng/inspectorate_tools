import{s as f,e as c,a as _,c as m,m as u,g as $,i as r,n as d,f as p}from"../chunks/scheduler.BwufR8Ly.js";import{S as g,i as x,c as C,a as v,m as b,t as h,b as q,d as P}from"../chunks/index.BYv68wXE.js";import{Q as w}from"../chunks/Question.D-lmVUOZ.js";function Q(i){let t,a="Distance between resting points.",e,n,o="Mode: Walking / Wheeling";return{c(){t=c("p"),t.textContent=a,e=_(),n=c("p"),n.textContent=o},l(s){t=m(s,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1jsub0q"&&(t.textContent=a),e=$(s),n=m(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(s,l){r(s,t,l),r(s,e,l),r(s,n,l)},p:d,d(s){s&&(p(t),p(e),p(n))}}}function S(i){let t,a;return t=new w({props:{idx:18,label:"Places to Rest",cases:[["2","<p><50m.</p>"],["1","<p>50-150m.</p>"],["0","<p>>150m.</p>"]],$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){P(t,e)}}}class y extends g{constructor(t){super(),x(this,t,null,S,f,{})}}export{y as component};
