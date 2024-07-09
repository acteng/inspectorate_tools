import{s as f,e as p,a as d,c as m,p as u,g,i as c,n as h,f as l}from"../chunks/scheduler.mGr_ZlpV.js";import{S as _,i as $,c as x,b as y,m as C,t as b,a as v,d as k}from"../chunks/index.rGMSHTnh.js";import{Q as w}from"../chunks/Question.DY5jYKHH.js";function q(o){let e,a="Presence of shared use cycle tracks and toucan crossings.",t,n,r="Mode: Walking / Wheeling / Cycling";return{c(){e=p("p"),e.textContent=a,t=d(),n=p("p"),n.textContent=r},l(s){e=m(s,"P",{"data-svelte-h":!0}),u(e)!=="svelte-6eb2z4"&&(e.textContent=a),t=g(s),n=m(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-galsl6"&&(n.textContent=r)},m(s,i){c(s,e,i),c(s,t,i),c(s,n,i)},p:h,d(s){s&&(l(e),l(t),l(n))}}}function T(o){let e,a;return e=new w({props:{idx:22,label:"Impact of Cycling on Walking",cases:[["2","<p>There are no shared use cycle tracks.</p>"],["1","<p>In rural areas or motor traffic free environments, shared use cycle tracks pass the width requirements set out in Table 6-3 of LTN 1/20 and are designed in a way that minimises potential conflict between cyclists and pedestrians.</p>"],["0","<p>On urban streets, cyclists are expected to use shared use cycle tracks and/or toucan crossings, bringing them into potential conflict with pedestrians.</p><p>In rural areas or motor traffic free environments, shared use cycle tracks fail the width requirements set out in Table 6-3 of LTN 1/20.</p>"]],$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){C(e,t,n),a=!0},p(t,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){k(e,t)}}}class L extends _{constructor(e){super(),$(this,e,null,T,f,{})}}export{L as component};
