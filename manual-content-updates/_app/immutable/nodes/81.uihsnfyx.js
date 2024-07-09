import{s as $,e as m,a as _,c as f,m as h,g,i as r,n as x,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as C,i as v,c as b,a as w,m as T,t as k,b as q,d as y}from"../chunks/index.Dmc4uC9p.js";import{Q as L}from"../chunks/Question.CDxwrj_Y.js";function P(u){let t,s="Route links to public transport interchanges and other destinations.",e,i,a="Other destinations could include:",p,o,d="<li>Local high streets</li> <li>Schools and colleges</li> <li>Hospitals and healthcare</li> <li>Access to green and blue spaces</li> <li>Viewing points</li> <li>Tourist destinations, etc.</li> <p>Mode: Walking / Wheeling / Cycling</p>";return{c(){t=m("p"),t.textContent=s,e=_(),i=m("p"),i.textContent=a,p=_(),o=m("ul"),o.innerHTML=d},l(n){t=f(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-tr8hdg"&&(t.textContent=s),e=g(n),i=f(n,"P",{"data-svelte-h":!0}),h(i)!=="svelte-1q5u5tw"&&(i.textContent=a),p=g(n),o=f(n,"UL",{"data-svelte-h":!0}),h(o)!=="svelte-1ke2ffk"&&(o.innerHTML=d)},m(n,l){r(n,t,l),r(n,e,l),r(n,i,l),r(n,p,l),r(n,o,l)},p:x,d(n){n&&(c(t),c(e),c(i),c(p),c(o))}}}function H(u){let t,s;return t=new L({props:{idx:28,label:"Proximity to Destinations",cases:[["2","<p>The route is within 400m of at least one public transport interchange and at least one other destination.</p>"],["1","<p>The route is within 400m of a public transport interchange or other destination.</p>"],["0","<p>The route is not within 400m of any public transport interchanges or other destinations.</p>"]],$$slots:{default:[P]},$$scope:{ctx:u}}}),{c(){b(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){T(t,e,i),s=!0},p(e,[i]){const a={};i&1&&(a.$$scope={dirty:i,ctx:e}),t.$set(a)},i(e){s||(k(t.$$.fragment,e),s=!0)},o(e){q(t.$$.fragment,e),s=!1},d(e){y(t,e)}}}class W extends C{constructor(t){super(),v(this,t,null,H,$,{})}}export{W as component};
