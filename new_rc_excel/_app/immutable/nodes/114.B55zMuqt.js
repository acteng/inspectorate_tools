import{s as u,e as c,a as d,c as m,p as f,g as _,i as p,n as $,f as l}from"../chunks/scheduler.DGwhun8C.js";import{S as h,i as g,c as x,a as v,m as C,t as z,b as q,d as w}from"../chunks/index.B2vZYn3d.js";import{Q as y}from"../chunks/Question.BVWMyf6V.js";function P(r){let e,s="Description: Risk of pedestrians tripping due to hazards.",t,a,o="Mode: Walking / Wheeling";return{c(){e=c("p"),e.textContent=s,t=d(),a=c("p"),a.textContent=o},l(n){e=m(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-eeljap"&&(e.textContent=s),t=_(n),a=m(n,"P",{"data-svelte-h":!0}),f(a)!=="svelte-1bs6336"&&(a.textContent=o)},m(n,i){p(n,e,i),p(n,t,i),p(n,a,i)},p:$,d(n){n&&(l(e),l(t),l(a))}}}function b(r){let e,s;return e=new y({props:{idx:4,cases:[["2","<p>No trip hazards, level clear surface.</p>"],["1","<p>Few trip hazards.</p>"],["0","<p>Many trip hazards.</p>"],["C","<p>There are level differences of greater than 13mm with no tactile information and colour contrast to help identify them.</p>"]],$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){x(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}class S extends h{constructor(e){super(),g(this,e,null,b,u,{})}}export{S as component};
