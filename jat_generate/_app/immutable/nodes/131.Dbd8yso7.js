import{s as m,e as p,a as d,c as u,m as f,g as _,i as c,n as b,f as l}from"../chunks/scheduler.D5JRtHaf.js";import{S as h,i as $,c as g,a as y,m as x,t as C,b as v,d as w}from"../chunks/index.Xm1AgzMF.js";import{Q as P}from"../chunks/Question.DvmHE2je.js";function q(i){let e,a="Presence and accessibility of barriers.",t,s,r="Mode: Walking / Wheeling / Cycling";return{c(){e=p("p"),e.textContent=a,t=d(),s=p("p"),s.textContent=r},l(n){e=u(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1wwo0af"&&(e.textContent=a),t=_(n),s=u(n,"P",{"data-svelte-h":!0}),f(s)!=="svelte-galsl6"&&(s.textContent=r)},m(n,o){c(n,e,o),c(n,t,o),c(n,s,o)},p:b,d(n){n&&(l(e),l(t),l(s))}}}function L(i){let e,a;return e=new P({props:{idx:3,label:"Barriers",cases:[["2","<p>All barriers are accessible by the cycle design vehicle referenced in LTN 1/20, with sufficient space to turn.</p><p>Or, there are no barriers.</p>"],["1","<p>All barriers are accessible by wheelchair users, mobility scooters, and by users on solo upright cycles (as defined in LTN 1/20), with sufficient space to turn.</p>"],["0","<p>Barriers are not accessible by wheelchair users and/or users on solo upright cycles (as defined in LTN 1/20) and/or mobility scooters.</p>"]],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){x(e,t,s),a=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}class B extends h{constructor(e){super(),$(this,e,null,L,m,{})}}export{B as component};
