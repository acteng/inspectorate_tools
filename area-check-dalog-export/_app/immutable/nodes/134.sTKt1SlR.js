import{s as f,e as c,a as g,c as m,p as u,g as d,i as p,n as _,f as l}from"../chunks/scheduler.mGr_ZlpV.js";import{S as b,i as h,c as $,b as x,m as k,t as C,a as v,d as W}from"../chunks/index.rGMSHTnh.js";import{Q as w}from"../chunks/Question.DUAxnLlA.js";function P(o){let e,i=`Distance to accessible pick-up, drop-off or hailing points, or blue badge
    parking facilities.`,t,n,a="Mode: Walking / Wheeling / Cycling";return{c(){e=c("p"),e.textContent=i,t=g(),n=c("p"),n.textContent=a},l(s){e=m(s,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1go0hx1"&&(e.textContent=i),t=d(s),n=m(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-galsl6"&&(n.textContent=a)},m(s,r){p(s,e,r),p(s,t,r),p(s,n,r)},p:_,d(s){s&&(l(e),l(t),l(n))}}}function q(o){let e,i;return e=new w({props:{idx:6,label:"Access to Taxis and Blue Badge Parking",cases:[["2","<p>Where people meet, wait, or spend time in numbers, it is less than 50m to nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.</p>"],["1","<p>Where people meet, wait, or spend time in numbers, it is less than 150m to the nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.</p>"],["0","<p>Where people meet, wait, or spend time in numbers, it is over 150m to the nearest accessible pick-up, drop-off or hailing points, or blue badge parking facilities.</p>"],["N/A",""]],$$slots:{default:[P]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){k(e,t,n),i=!0},p(t,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){i||(C(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){W(e,t)}}}class Q extends b{constructor(e){super(),h(this,e,null,q,f,{})}}export{Q as component};
