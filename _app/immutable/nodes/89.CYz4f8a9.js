import{s as m,e as c,a as d,c as f,m as p,g as _,i as l,n as $,f as u}from"../chunks/scheduler.D5JRtHaf.js";import{S as g,i as h,c as b,a as v,m as x,t as P,b as C,d as w}from"../chunks/index.Xm1AgzMF.js";import{Q as q}from"../chunks/Question.B9HgiEmh.js";function H(s){let e,o="Presence of features which people can engage with, such as:",t,a,r="<li>Information on local features, flora and fauna</li> <li>Public art</li> <li>Heritage features</li> <li>Viewpoints</li>";return{c(){e=c("p"),e.textContent=o,t=d(),a=c("ul"),a.innerHTML=r},l(n){e=f(n,"P",{"data-svelte-h":!0}),p(e)!=="svelte-13z9e5d"&&(e.textContent=o),t=_(n),a=f(n,"UL",{"data-svelte-h":!0}),p(a)!=="svelte-zthx8j"&&(a.innerHTML=r)},m(n,i){l(n,e,i),l(n,t,i),l(n,a,i)},p:$,d(n){n&&(u(e),u(t),u(a))}}}function I(s){let e,o;return e=new q({props:{idx:3,label:"Points of Interest",cases:[["2","<p>Information on local features, flora or fauna is provided.</p><p>Public art has been encouraged or featured.</p>"],["1","<p>Some information on local features, flora or fauna is provided.</p><p>Or, public art has been encouraged or featured.</p>"],["0","<p>No information on local features, flora or fauna is provided.</p><p>No public art has been encouraged or featured.</p>"]],$$slots:{default:[H]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){x(e,t,a),o=!0},p(t,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){w(e,t)}}}class M extends g{constructor(e){super(),h(this,e,null,I,m,{})}}export{M as component};
