import{s as u,e as c,a as g,c as d,m,g as f,i as l,n as v,f as p}from"../chunks/scheduler.BJ06nkRu.js";import{S as _,i as y,c as $,a as b,m as h,t as x,b as C,d as O}from"../chunks/index.Dmc4uC9p.js";import{Q as q}from"../chunks/Question.D0-ZReSI.js";function k(i){let e,r="Ability of pedestrians to cross the street safely on desire lines",t,s,o="Mode: Walking / Wheeling";return{c(){e=c("p"),e.textContent=r,t=g(),s=c("p"),s.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),m(e)!=="svelte-ildw9o"&&(e.textContent=r),t=f(n),s=d(n,"P",{"data-svelte-h":!0}),m(s)!=="svelte-1bs6336"&&(s.textContent=o)},m(n,a){l(n,e,a),l(n,t,a),l(n,s,a)},p:v,d(n){n&&(p(e),p(t),p(s))}}}function w(i){let e,r;return e=new q({props:{idx:6,label:"Provision of Crossings",cases:[["2","<p>On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 50-100m.</p><p>On quieter streets (<8,000vpd), there are controlled crossings or only one lane of traffic to cross.</p>"],["1","<p>On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 100-200m.</p><p>On quieter streets (<8,000vpd), loading/parking is formalised with gaps for pedestrians to cross on desire lines.</p>"],["0","<p>On very busy streets (>8,000vpd), controlled crossings (including zebra crossings) are provided every 200-400m.</p><p>On quieter streets (<8,000vpd), loading/parking is formalised with gaps for pedestrians to cross.</p>"],["C","<p>On very busy streets (>8,000vpd) controlled crossings (including zebra crossings) are not present or more than 400m apart.</p><p>On quieter streets (<8,000vpd), desire lines are blocked by parking and loading.</p>"]],$$slots:{default:[k]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){h(e,t,s),r=!0},p(t,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(x(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}class S extends _{constructor(e){super(),y(this,e,null,w,u,{})}}export{S as component};
