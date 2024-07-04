import{s as h,e as p,a as m,c as f,p as u,g as d,i as l,n as _,f as c}from"../chunks/scheduler.BBS-fkhU.js";import{S as v,i as $,c as g,a as x,m as b,t as C,b as w,d as y}from"../chunks/index.B8H3ypVf.js";import{Q as V}from"../chunks/Question.-ypx4php.js";function q(a){let e,r=`Volume of motor traffic at the busiest hour (where cyclists are not
    protected or pedestrians cross uncontrolled)`,t,s,n="Mode: Walking / Wheeling / Cycling";return{c(){e=p("p"),e.textContent=r,t=m(),s=p("p"),s.textContent=n},l(o){e=f(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-se761h"&&(e.textContent=r),t=d(o),s=f(o,"P",{"data-svelte-h":!0}),u(s)!=="svelte-galsl6"&&(s.textContent=n)},m(o,i){l(o,e,i),l(o,t,i),l(o,s,i)},p:_,d(o){o&&(c(e),c(t),c(s))}}}function G(a){let e,r;return e=new V({props:{idx:9,label:"Motor Traffic Volume",cases:[["2","<p><200 vehicles in the busiest hour.</p><p>Or, cyclists are protected from motor traffic or off-road entirely and controlled crossings are provided for pedestrians wherever needed.</p>"],["1","<p>200-499 vehicles in the busiest hour.</p><p>And, less than 2% of traffic is HGVs.</p>"],["0","<p>500-1,000 vehicles in the busiest hour.</p><p>Or, 2-5% of traffic is HGVs where there are 200-499 vehicles in the busiest hour.</p>"],["C","<p>>1,000 vehicles in the busiest hour.</p><p>Or, over 5% of traffic is HGVs where there are over 500 vehicles in the busiest hour.</p>"]],$$slots:{default:[q]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){b(e,t,s),r=!0},p(t,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(C(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}class M extends v{constructor(e){super(),$(this,e,null,G,h,{})}}export{M as component};
