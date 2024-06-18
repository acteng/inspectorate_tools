import{s as r,e as c,c as i,m as p,i as l,n as m,f as u}from"../chunks/scheduler.BJ06nkRu.js";import{S as f,i as g,c as d,a as h,m as _,t as $,b as x,d as O}from"../chunks/index.Dmc4uC9p.js";import{Q as v}from"../chunks/Question.HSg3iEgu.js";function N(a){let e,n="Exposure to NOX concentration.";return{c(){e=c("p"),e.textContent=n},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-gx1tec"&&(e.textContent=n)},m(t,o){l(t,e,o)},p:m,d(t){t&&u(e)}}}function b(a){let e,n;return e=new v({props:{idx:15,label:"Air Pollution - Exposure",cases:[["2","<p>The NO2 concentration is less than 32µg/m3.</p><p>Or, the NO2 concentration is 32-40µg/m3 but local traffic volume reduction measures are proposed.</p>"],["1","<p>The NO2 concentration is 32-40µg/m3.</p><p>Or, the existing NO2 concentration is greater than 40µg/m3 but local traffic volume reduction measures are proposed.</p>"],["0","<p>The NO2 concentration is greater than 40µg/m3.</p><p>If assessing a design proposal, the NO2 concentration is greater than 40µg/m3 and there are no proposals to reduce local traffic volume.</p>"]],$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,o){_(e,t,o),n=!0},p(t,[o]){const s={};o&1&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}class T extends f{constructor(e){super(),g(this,e,null,b,r,{})}}export{T as component};
