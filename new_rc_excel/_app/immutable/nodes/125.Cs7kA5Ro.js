import{s as u,e as c,a as d,c as m,p as f,g,i as r,n as _,f as p}from"../chunks/scheduler.DGwhun8C.js";import{S as $,i as v,c as h,a as x,m as C,t as k,b as w,d as M}from"../chunks/index.B2vZYn3d.js";import{Q as b}from"../chunks/Question.DzbPXTWV.js";function q(o){let e,s="Description: Walking/wheeling surface and maintenance defects:",t,n,a=`<li>steep camber (horizontal gradient more than 2.5% )</li> <li>steep longitudinal gradients (8% or more if under 1m, 5% or more if 1m or
      over)</li> <li>missing dropped kerbs</li> <li>non flush tables</li> <li>misleading tactile information</li> <li>loose/cracked surfaces</li> <li>poor drainage or slip risks</li> <li>overgrown vegetation</li> <p>Mode: Walking / Wheeling</p>`;return{c(){e=c("p"),e.textContent=s,t=d(),n=c("ul"),n.innerHTML=a},l(i){e=m(i,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1pw5plo"&&(e.textContent=s),t=g(i),n=m(i,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-13pv8a5"&&(n.innerHTML=a)},m(i,l){r(i,e,l),r(i,t,l),r(i,n,l)},p:_,d(i){i&&(p(e),p(t),p(n))}}}function L(o){let e,s;return e=new b({props:{idx:15,cases:[["2","<p>No defects.</p>"],["1","<p>Few minor defects.</p>"],["0","<p>Many minor defects.</p>"],["C","<p>Major defects.</p>"]],$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){C(e,t,n),s=!0},p(t,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}class P extends ${constructor(e){super(),v(this,e,null,L,u,{})}}export{P as component};
