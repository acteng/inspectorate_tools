import{s as f,e as m,a as _,c as p,g as u,d as $,i as r,n as d,f as c}from"../chunks/scheduler.BHcsbfKa.js";import{S as g,i as x,c as C,a as v,m as b,t as h,b as q,d as P}from"../chunks/index.CiegshHD.js";import{Q as w}from"../chunks/Question.BdWoYKLe.js";function Q(i){let t,a="Distance between resting points.",e,n,o="Mode: Walking / Wheeling";return{c(){t=m("p"),t.textContent=a,e=_(),n=m("p"),n.textContent=o},l(s){t=p(s,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1jsub0q"&&(t.textContent=a),e=$(s),n=p(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(s,l){r(s,t,l),r(s,e,l),r(s,n,l)},p:d,d(s){s&&(c(t),c(e),c(n))}}}function S(i){let t,a;return t=new w({props:{idx:18,label:"Places to Rest",cases:[["0",">150m."],["1","50-150m."],["2","<50m."]],$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){P(t,e)}}}class y extends g{constructor(t){super(),x(this,t,null,S,f,{})}}export{y as component};
