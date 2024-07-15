import{s as u,e as p,a as h,c as f,p as c,g as d,i as l,n as g,f as m}from"../chunks/scheduler.mGr_ZlpV.js";import{S as _,i as $,c as v,b as x,m as k,t as T,a as q,d as y}from"../chunks/index.rGMSHTnh.js";import{Q as C}from"../chunks/Question.CDwvsMND.js";function R(i){let e,a="List of internal treatments",t,s,r="<li>Play streets</li> <li>School streets</li> <li>Cycle parking/hangars</li> <li>Resting places e.g. seating</li> <li>Raised tables/entries or continuous footways</li> <li>New social spaces</li> <li>Parklets or pocket parks</li> <li>Wayfinding</li> <li>Art</li> <li>Other (please specify in the scoring justification box)</li>";return{c(){e=p("p"),e.textContent=a,t=h(),s=p("ul"),s.innerHTML=r},l(n){e=f(n,"P",{"data-svelte-h":!0}),c(e)!=="svelte-s2nt3z"&&(e.textContent=a),t=d(n),s=f(n,"UL",{"data-svelte-h":!0}),c(s)!=="svelte-1c4faut"&&(s.innerHTML=r)},m(n,o){l(n,e,o),l(n,t,o),l(n,s,o)},p:g,d(n){n&&(m(e),m(t),m(s))}}}function b(i){let e,a;return e=new C({props:{idx:12,label:"Other Internal Treatment Design",cases:[[16,"<p>There are at least five measures from the list of internal treatments (per square km).</p><p>Residents involved in the design of one or more of these measures.</p>"],[12,"<p>There are at least three measures from the list of internal treatments (per square km).</p><p>Residents involved in the design of one or more of these measures.</p>"],[8,"<p>There are at least three measures from the list of internal treatments (per square km).</p><p>Residents not involved in the design of the measures.</p>"],[4,"<p>There are fewer than three measures from the list of internal treatments (per square km).</p>"],[0,"<p>There are no internal treatments.</p>"]],$$slots:{default:[R]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){k(e,t,s),a=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){q(e.$$.fragment,t),a=!1},d(t){y(e,t)}}}class S extends _{constructor(e){super(),$(this,e,null,b,u,{})}}export{S as component};
