import{s as u,n as d,d as l,i as p,c,q as m,g as _,h as f,j as h}from"../chunks/hklQk-fT.js";import{S as $,i as g,d as x,t as v,a as C,m as q,c as z,b}from"../chunks/4RGf_tlt.js";import{Q as w}from"../chunks/482Q8UTj.js";function y(r){let t,s="Description: Risk of pedestrians tripping due to hazards",e,n,o="Mode: Walking / Wheeling";return{c(){t=f("p"),t.textContent=s,e=h(),n=f("p"),n.textContent=o},l(a){t=c(a,"P",{"data-svelte-h":!0}),m(t)!=="svelte-19o7l8b"&&(t.textContent=s),e=_(a),n=c(a,"P",{"data-svelte-h":!0}),m(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(a,i){p(a,t,i),p(a,e,i),p(a,n,i)},p:d,d(a){a&&(l(t),l(e),l(n))}}}function P(r){let t,s;return t=new w({props:{idx:4,cases:[["2","<p>No trip hazards, level clear surface.</p>"],["1","<p>Few trip hazards.</p>"],["0","<p>Many trip hazards.</p>"],["C","<p>There are level differences of greater than 13mm with no tactile information and colour contrast to help identify them.</p>"]],$$slots:{default:[y]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){q(t,e,n),s=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(C(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}class S extends ${constructor(t){super(),g(this,t,null,P,u,{})}}export{S as component};
