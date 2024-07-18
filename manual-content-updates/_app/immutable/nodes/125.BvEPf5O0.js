import{s as d,e as u,a as f,c as p,m,g,i as l,n as _,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as $,i as x,c as h,a as v,m as C,t as y,b as P,d as b}from"../chunks/index.Dmc4uC9p.js";import{Q as q}from"../chunks/Question.BOME6HzV.js";function w(i){let e,s="Presence of guard railing",t,n,o="Mode: Walking / Wheeling / Cycling";return{c(){e=u("p"),e.textContent=s,t=f(),n=u("p"),n.textContent=o},l(a){e=p(a,"P",{"data-svelte-h":!0}),m(e)!=="svelte-127oxaz"&&(e.textContent=s),t=g(a),n=p(a,"P",{"data-svelte-h":!0}),m(n)!=="svelte-galsl6"&&(n.textContent=o)},m(a,r){l(a,e,r),l(a,t,r),l(a,n,r)},p:_,d(a){a&&(c(e),c(t),c(n))}}}function G(i){let e,s;return e=new q({props:{idx:16,label:"Guard Railing",cases:[["2","<p>No guard railing anywhere on the route.</p>"],["1","<p>Minimal guard railing, used to address a clear safety issue such as a level difference.</p>"],["0","<p>Guard railing used to control behaviour in complex environments.</p>"],["C","<p>Guard railing used as standard without consideration of inherent safety risks.</p>"]],$$slots:{default:[w]},$$scope:{ctx:i}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){C(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}class S extends ${constructor(e){super(),x(this,e,null,G,d,{})}}export{S as component};
