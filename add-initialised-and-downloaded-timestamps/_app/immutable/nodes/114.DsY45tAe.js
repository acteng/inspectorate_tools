import{s as u,e as c,a as d,c as m,p as f,g as _,i as p,n as $,f as l}from"../chunks/scheduler.DGwhun8C.js";import{S as h,i as g,c as x,a as v,m as C,t as z,b,d as q}from"../chunks/index.B2vZYn3d.js";import{Q as w}from"../chunks/Question.CHbfTCFU.js";function y(r){let t,s="Description: Risk of pedestrians tripping due to hazards",e,n,o="Mode: Walking / Wheeling";return{c(){t=c("p"),t.textContent=s,e=d(),n=c("p"),n.textContent=o},l(a){t=m(a,"P",{"data-svelte-h":!0}),f(t)!=="svelte-19o7l8b"&&(t.textContent=s),e=_(a),n=m(a,"P",{"data-svelte-h":!0}),f(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(a,i){p(a,t,i),p(a,e,i),p(a,n,i)},p:$,d(a){a&&(l(t),l(e),l(n))}}}function P(r){let t,s;return t=new w({props:{idx:4,cases:[["2","<p>No trip hazards, level clear surface.</p>"],["1","<p>Few trip hazards.</p>"],["0","<p>Many trip hazards.</p>"],["C","<p>There are level differences of greater than 13mm with no tactile information and colour contrast to help identify them.</p>"]],$$slots:{default:[y]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){C(t,e,n),s=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(z(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){q(t,e)}}}class S extends h{constructor(t){super(),g(this,t,null,P,u,{})}}export{S as component};
