import{s as u,e as r,a as _,c as m,m as f,g as d,i as p,n as $,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as g,i as x,c as h,a as v,m as C,t as W,b,d as k}from"../chunks/index.Dmc4uC9p.js";import{Q as w}from"../chunks/Question.9H5hlps1.js";function q(i){let e,s="Effective width of dedicated walking/wheeling spaces.",t,n,o="Mode: Walking / Wheeling";return{c(){e=r("p"),e.textContent=s,t=_(),n=r("p"),n.textContent=o},l(a){e=m(a,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ukpbjn"&&(e.textContent=s),t=d(a),n=m(a,"P",{"data-svelte-h":!0}),f(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(a,l){p(a,e,l),p(a,t,l),p(a,n,l)},p:$,d(a){a&&(c(e),c(t),c(n))}}}function P(i){let e,s;return e=new w({props:{idx:7,label:"Width of Walking and Wheeling Spaces",cases:[["2","<p>>2m.</p>"],["1","<p>1.5-2m.</p>"],["0","<p><1.5m.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){C(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}class y extends g{constructor(e){super(),x(this,e,null,P,u,{})}}export{y as component};
