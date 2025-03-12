import{s as h,e as p,a as m,c as f,p as u,g as d,i as c,n as _,f as l}from"../chunks/scheduler.DGwhun8C.js";import{S as v,i as $,c as g,a as x,m as C,t as b,b as y,d as w}from"../chunks/index.B2vZYn3d.js";import{Q as V}from"../chunks/Question.DzbPXTWV.js";function q(a){let e,o=`Description: Volume of motor traffic at the busiest hour (where cyclists are
    not protected or pedestrians cross uncontrolled).`,t,s,r="Mode: Walking / Wheeling / Cycling";return{c(){e=p("p"),e.textContent=o,t=m(),s=p("p"),s.textContent=r},l(n){e=f(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ksyy4p"&&(e.textContent=o),t=d(n),s=f(n,"P",{"data-svelte-h":!0}),u(s)!=="svelte-galsl6"&&(s.textContent=r)},m(n,i){c(n,e,i),c(n,t,i),c(n,s,i)},p:_,d(n){n&&(l(e),l(t),l(s))}}}function G(a){let e,o;return e=new V({props:{idx:9,cases:[["2","<p>Less than 200 vehicles in the busiest hour.</p><p>Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.</p>"],["1","<p>200-499 vehicles in the busiest hour.</p><p>And, less than 2% of traffic is HGVs.</p>"],["0","<p>500-1,000 vehicles in the busiest hour.</p><p>Or, 2-5% of traffic is HGVs where there are 200-499 vehicles in the busiest hour.</p>"],["C","<p>More than 1,000 vehicles in the busiest hour.</p><p>Or, over 5% of traffic is HGVs where there are over 500 vehicles in the busiest hour.</p>"]],$$slots:{default:[q]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){C(e,t,s),o=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),o=!1},d(t){w(e,t)}}}class k extends v{constructor(e){super(),$(this,e,null,G,h,{})}}export{k as component};
