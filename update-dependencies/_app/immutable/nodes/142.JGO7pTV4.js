import{s as f,n as _,d as c,i as l,c as m,q as p,g as d,h as u,j as $}from"../chunks/hklQk-fT.js";import{S as g,i as x,d as v,t as C,a as h,m as q,c as w,b as M}from"../chunks/4RGf_tlt.js";import{Q as P}from"../chunks/CaihA11K.js";function b(i){let t,a="Description: Delay to pedestrians at signal controlled junctions.",e,n,o="Mode: Walking / Wheeling";return{c(){t=u("p"),t.textContent=a,e=$(),n=u("p"),n.textContent=o},l(s){t=m(s,"P",{"data-svelte-h":!0}),p(t)!=="svelte-nakrce"&&(t.textContent=a),e=d(s),n=m(s,"P",{"data-svelte-h":!0}),p(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(s,r){l(s,t,r),l(s,e,r),l(s,n,r)},p:_,d(s){s&&(c(t),c(e),c(n))}}}function j(i){let t,a;return t=new P({props:{idx:15,cases:[["2","<p>Maximum waiting time up to 40 seconds.</p>"],["1","<p>Maximum waiting time 40-60 seconds.</p>"],["0","<p>Maximum waiting time over 60 seconds.</p>"],["N/A",""]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){M(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){q(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){C(t.$$.fragment,e),a=!1},d(e){v(t,e)}}}class Q extends g{constructor(t){super(),x(this,t,null,j,f,{})}}export{Q as component};
