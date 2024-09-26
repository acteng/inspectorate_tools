import{s as u,e as c,a as g,c as m,p as f,g as d,i as p,n as _,f as l}from"../chunks/scheduler.DGwhun8C.js";import{S as b,i as h,c as $,a as x,m as k,t as C,b as v,d as W}from"../chunks/index.B2vZYn3d.js";import{Q as w}from"../chunks/Question.BxhTqWIY.js";function q(o){let e,i=`Description: Distance to accessible pick-up, drop-off or hailing points, or
    blue badge parking facilities.`,t,n,a="Mode: Walking / Wheeling / Cycling";return{c(){e=c("p"),e.textContent=i,t=g(),n=c("p"),n.textContent=a},l(s){e=m(s,"P",{"data-svelte-h":!0}),f(e)!=="svelte-zr1arf"&&(e.textContent=i),t=d(s),n=m(s,"P",{"data-svelte-h":!0}),f(n)!=="svelte-galsl6"&&(n.textContent=a)},m(s,r){p(s,e,r),p(s,t,r),p(s,n,r)},p:_,d(s){s&&(l(e),l(t),l(n))}}}function P(o){let e,i;return e=new w({props:{idx:6,cases:[["2","<p>Where people meet, wait, or spend time in numbers, it is less than 50m to nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.</p>"],["1","<p>Where people meet, wait, or spend time in numbers, it is less than 150m to the nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.</p>"],["0","<p>Where people meet, wait, or spend time in numbers, it is over 150m to the nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){k(e,t,n),i=!0},p(t,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){i||(C(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){W(e,t)}}}class S extends b{constructor(e){super(),h(this,e,null,P,u,{})}}export{S as component};
