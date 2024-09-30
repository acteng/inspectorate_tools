import{s as d,e as p,a as m,c as u,p as f,g,i as l,n as v,f as c}from"../chunks/scheduler.B5FfXhnD.js";import{S as _,i as h,c as $,a as b,m as x,t as C,b as A,d as y}from"../chunks/index.VeCIHQiF.js";import{Q as N}from"../chunks/Question.pvnL4hxl.js";function S(r){let e,a=`Suitability of crossings provided given path users and the volumes and
    speeds of traffic on roads being crossed.`,t,s,n="Mode: All Active Modes";return{c(){e=p("p"),e.textContent=a,t=m(),s=p("p"),s.textContent=n},l(o){e=u(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-i1j9ve"&&(e.textContent=a),t=g(o),s=u(o,"P",{"data-svelte-h":!0}),f(s)!=="svelte-15taagu"&&(s.textContent=n)},m(o,i){l(o,e,i),l(o,t,i),l(o,s,i)},p:v,d(o){o&&(c(e),c(t),c(s))}}}function q(r){let e,a;return e=new N({props:{idx:14,label:"Suitability of Crossings",cases:[["2","<p>All crossings are suitable for all path users and go beyond LTN 1/20 guidance to help future proof the route and provide a higher level of service.</p>"],["1","<p>All crossings are suitable for all path users given the volumes and speeds of traffic on roads being crossed.</p>"],["0","<p>Not all crossings are suitable for all path users.</p><p>Or, crossings selected do not follow LTN 1/20 guidance given the volumes and speeds of traffic on roads being crossed.</p>"],["N/A",""]],$$slots:{default:[S]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){x(e,t,s),a=!0},p(t,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){y(e,t)}}}class M extends _{constructor(e){super(),h(this,e,null,q,d,{})}}export{M as component};
