import{s as f,e as c,a as u,c as m,p as d,g as _,i,n as h,f as l}from"../chunks/scheduler.mGr_ZlpV.js";import{S as $,i as g,c as x,b as v,m as C,t as y,a as b,d as w}from"../chunks/index.rGMSHTnh.js";import{Q as q}from"../chunks/Question.DMggqH2W.js";function P(a){let e,o=`85th percentile speed of motor traffic (where cyclists are not protected or
    pedestrians are crossing uncontrolled)`,t,n,r="Mode: Walking / Wheeling / Cycling";return{c(){e=c("p"),e.textContent=o,t=u(),n=c("p"),n.textContent=r},l(s){e=m(s,"P",{"data-svelte-h":!0}),d(e)!=="svelte-1okstbx"&&(e.textContent=o),t=_(s),n=m(s,"P",{"data-svelte-h":!0}),d(n)!=="svelte-galsl6"&&(n.textContent=r)},m(s,p){i(s,e,p),i(s,t,p),i(s,n,p)},p:h,d(s){s&&(l(e),l(t),l(n))}}}function S(a){let e,o;return e=new q({props:{idx:8,label:"Motor Traffic Speed",cases:[["2","<p>85th percentile speed is under 20mph.</p><p>Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.</p>"],["1","<p>85th percentile speed is between 20mph and 25mph.</p>"],["0","<p>85th percentile speed is over 25mph.</p>"],["C","<p>85th percentile speed is over 30mph.</p>"]],$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){x(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){C(e,t,n),o=!0},p(t,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){o||(y(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){w(e,t)}}}class W extends ${constructor(e){super(),g(this,e,null,S,f,{})}}export{W as component};
