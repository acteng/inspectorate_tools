import{s as f,e as m,a as _,c as p,p as u,g as d,i as c,n as $,f as l}from"../chunks/scheduler.DGwhun8C.js";import{S as g,i as x,c as v,a as C,m as h,t as w,b as M,d as q}from"../chunks/index.B2vZYn3d.js";import{Q as P}from"../chunks/Question.CWSFc0DK.js";function b(i){let t,a="Description: Delay to pedestrians at signal controlled junctions.",e,n,o="Mode: Walking / Wheeling";return{c(){t=m("p"),t.textContent=a,e=_(),n=m("p"),n.textContent=o},l(s){t=p(s,"P",{"data-svelte-h":!0}),u(t)!=="svelte-nakrce"&&(t.textContent=a),e=d(s),n=p(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(s,r){c(s,t,r),c(s,e,r),c(s,n,r)},p:$,d(s){s&&(l(t),l(e),l(n))}}}function k(i){let t,a;return t=new P({props:{idx:15,cases:[["2","<p>Maximum waiting time up to 40 seconds.</p>"],["1","<p>Maximum waiting time 40-60 seconds.</p>"],["0","<p>Maximum waiting time over 60 seconds.</p>"],["N/A",""]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){h(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(w(t.$$.fragment,e),a=!0)},o(e){M(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}class S extends g{constructor(t){super(),x(this,t,null,k,f,{})}}export{S as component};
