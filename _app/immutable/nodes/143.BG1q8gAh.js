import{s as f,e as c,a as d,c as p,p as u,g as _,i as m,n as $,f as r}from"../chunks/scheduler.mGr_ZlpV.js";import{S as g,i as x,c as v,b as C,m as h,t as q,a as w,d as M}from"../chunks/index.rGMSHTnh.js";import{Q as P}from"../chunks/Question.Z52RHiDM.js";function b(i){let t,a="Delay to pedestrians at signal controlled junctions.",e,n,o="Mode: Walking / Wheeling";return{c(){t=c("p"),t.textContent=a,e=d(),n=c("p"),n.textContent=o},l(s){t=p(s,"P",{"data-svelte-h":!0}),u(t)!=="svelte-j7hzdq"&&(t.textContent=a),e=_(s),n=p(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(s,l){m(s,t,l),m(s,e,l),m(s,n,l)},p:$,d(s){s&&(r(t),r(e),r(n))}}}function y(i){let t,a;return t=new P({props:{idx:15,label:"Pedestrian Delay at Junctions",cases:[["2","<p>Maximum waiting time up to 40 seconds.</p>"],["1","<p>Maximum waiting time 40-60 seconds.</p>"],["0","<p>Maximum waiting time over 60 seconds.</p>"],["N/A",""]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){h(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(q(t.$$.fragment,e),a=!0)},o(e){w(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}class S extends g{constructor(t){super(),x(this,t,null,y,f,{})}}export{S as component};
