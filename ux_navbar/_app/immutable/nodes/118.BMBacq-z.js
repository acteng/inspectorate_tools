import{s as h,e as p,a as m,c as f,p as u,g as d,i as c,n as _,f as l}from"../chunks/scheduler.4ZNDCSWA.js";import{S as v,i as $,c as g,a as x,m as b,t as C,b as w,d as y}from"../chunks/index.xRKM1n3P.js";import{Q as V}from"../chunks/Question.BzBSFjOI.js";function q(i){let e,n=`Description: Volume of motor traffic at the busiest hour (where cyclists are
    not protected or pedestrians cross uncontrolled)`,t,s,r="Mode: Walking / Wheeling / Cycling";return{c(){e=p("p"),e.textContent=n,t=m(),s=p("p"),s.textContent=r},l(o){e=f(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-117ogvb"&&(e.textContent=n),t=d(o),s=f(o,"P",{"data-svelte-h":!0}),u(s)!=="svelte-galsl6"&&(s.textContent=r)},m(o,a){c(o,e,a),c(o,t,a),c(o,s,a)},p:_,d(o){o&&(l(e),l(t),l(s))}}}function G(i){let e,n;return e=new V({props:{idx:9,cases:[["2","<p>&lt;200 vehicles in the busiest hour.</p><p>Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.</p>"],["1","<p>200-499 vehicles in the busiest hour.</p><p>And, less than 2% of traffic is HGVs.</p>"],["0","<p>500-1,000 vehicles in the busiest hour.</p><p>Or, 2-5% of traffic is HGVs where there are 200-499 vehicles in the busiest hour.</p>"],["C","<p>&gt;1,000 vehicles in the busiest hour.</p><p>Or, over 5% of traffic is HGVs where there are over 500 vehicles in the busiest hour.</p>"]],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}class Q extends v{constructor(e){super(),$(this,e,null,G,h,{})}}export{Q as component};
