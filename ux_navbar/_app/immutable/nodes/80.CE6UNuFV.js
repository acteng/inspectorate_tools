import{s as $,e as m,a as _,c as f,p as h,g,i as r,n as x,f as c}from"../chunks/scheduler.4ZNDCSWA.js";import{S as C,i as v,c as b,a as w,m as T,t as q,b as k,d as L}from"../chunks/index.xRKM1n3P.js";import{Q as y}from"../chunks/Question.GHzsLoQM.js";function H(u){let t,i=`Description: Route links to public transport interchanges and other
    destinations.`,e,s,o="Other destinations could include:",p,a,d="<li>Local high streets</li> <li>Schools and colleges</li> <li>Hospitals and healthcare</li> <li>Access to green and blue spaces</li> <li>Viewing points</li> <li>Tourist destinations, etc.</li> <p>Mode: Walking / Wheeling / Cycling</p>";return{c(){t=m("p"),t.textContent=i,e=_(),s=m("p"),s.textContent=o,p=_(),a=m("ul"),a.innerHTML=d},l(n){t=f(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1aqmfpa"&&(t.textContent=i),e=g(n),s=f(n,"P",{"data-svelte-h":!0}),h(s)!=="svelte-1q5u5tw"&&(s.textContent=o),p=g(n),a=f(n,"UL",{"data-svelte-h":!0}),h(a)!=="svelte-1ke2ffk"&&(a.innerHTML=d)},m(n,l){r(n,t,l),r(n,e,l),r(n,s,l),r(n,p,l),r(n,a,l)},p:x,d(n){n&&(c(t),c(e),c(s),c(p),c(a))}}}function M(u){let t,i;return t=new y({props:{idx:28,cases:[["2","<p>The route is within 400m of at least one public transport interchange and at least one other destination.</p>"],["1","<p>The route is within 400m of a public transport interchange or other destination.</p>"],["0","<p>The route is not within 400m of any public transport interchanges or other destinations.</p>"]],$$slots:{default:[H]},$$scope:{ctx:u}}}),{c(){b(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,s){T(t,e,s),i=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){i||(q(t.$$.fragment,e),i=!0)},o(e){k(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}class W extends C{constructor(t){super(),v(this,t,null,M,$,{})}}export{W as component};
