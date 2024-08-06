import{s as u,e as p,a as d,c as m,m as f,g,i as r,n as _,f as c}from"../chunks/scheduler.ytQcc2rf.js";import{S as $,i as v,c as x,a as h,m as k,t as C,b as M,d as b}from"../chunks/index.D9yYtTfk.js";import{Q as W}from"../chunks/Question.DuPbv_7O.js";function w(o){let e,i="Walking/wheeling surface and maintenance defects:",t,n,s="<li>steep camber (horizontal gradient &gt;2.5% )</li> <li>steep longitudinal gradients (≥8% if under 1m, ≥5% if 1m or over)</li> <li>missing dropped kerbs</li> <li>non flush tables</li> <li>misleading tactile information</li> <li>loose/cracked surfaces</li> <li>poor drainage or slip risks</li> <li>overgrown vegetation</li> <p>Mode: Walking / Wheeling</p>";return{c(){e=p("p"),e.textContent=i,t=d(),n=p("ul"),n.innerHTML=s},l(a){e=m(a,"P",{"data-svelte-h":!0}),f(e)!=="svelte-10o3vx4"&&(e.textContent=i),t=g(a),n=m(a,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-1p8gdgx"&&(n.innerHTML=s)},m(a,l){r(a,e,l),r(a,t,l),r(a,n,l)},p:_,d(a){a&&(c(e),c(t),c(n))}}}function q(o){let e,i;return e=new W({props:{idx:15,label:"Walking/Wheeling Surface and Maintenance Defects",cases:[["2","<p>No defects.</p>"],["1","<p>Few minor defects.</p>"],["0","<p>Many minor defects.</p>"],["C","<p>Major defects.</p>"]],$$slots:{default:[w]},$$scope:{ctx:o}}}),{c(){x(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){k(e,t,n),i=!0},p(t,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){i||(C(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}class H extends ${constructor(e){super(),v(this,e,null,q,u,{})}}export{H as component};
