import{s as u,e as c,a as d,c as m,m as f,g as _,i as l,n as $,f as p}from"../chunks/scheduler.BwufR8Ly.js";import{S as h,i as g,c as x,a as v,m as C,t as z,b,d as q}from"../chunks/index.BYv68wXE.js";import{Q as w}from"../chunks/Question.TzcLc0rG.js";function y(r){let t,s="Risk of pedestrians tripping due to hazards",e,a,o="Mode: Walking / Wheeling";return{c(){t=c("p"),t.textContent=s,e=d(),a=c("p"),a.textContent=o},l(n){t=m(n,"P",{"data-svelte-h":!0}),f(t)!=="svelte-itijnd"&&(t.textContent=s),e=_(n),a=m(n,"P",{"data-svelte-h":!0}),f(a)!=="svelte-1bs6336"&&(a.textContent=o)},m(n,i){l(n,t,i),l(n,e,i),l(n,a,i)},p:$,d(n){n&&(p(t),p(e),p(a))}}}function P(r){let t,s;return t=new w({props:{idx:4,label:"Trip Hazards",cases:[["2","<p>No trip hazards, level clear surface.</p>"],["1","<p>Few trip hazards.</p>"],["0","<p>Many trip hazards.</p>"],["C","<p>There are level differences of greater than 13mm with no tactile information and colour contrast to help identify them.</p>"]],$$slots:{default:[y]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){s||(z(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){q(t,e)}}}class S extends h{constructor(t){super(),g(this,t,null,P,u,{})}}export{S as component};
