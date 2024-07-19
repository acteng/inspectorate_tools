import{s as f,e as c,a as d,c as m,p as u,g as _,i,n as $,f as l}from"../chunks/scheduler.mGr_ZlpV.js";import{S as g,i as x,c as v,b as h,m as b,t as C,a as q,d as k}from"../chunks/index.rGMSHTnh.js";import{Q as w}from"../chunks/Question.DKHNMNM9.js";function y(r){let t,s=`Presence and frequency of turning points (open and flat areas of at 4m x
    4m).`,e,n,o="Mode: All Active Modes";return{c(){t=c("p"),t.textContent=s,e=d(),n=c("p"),n.textContent=o},l(a){t=m(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-14qzpik"&&(t.textContent=s),e=_(a),n=m(a,"P",{"data-svelte-h":!0}),u(n)!=="svelte-15taagu"&&(n.textContent=o)},m(a,p){i(a,t,p),i(a,e,p),i(a,n,p)},p:$,d(a){a&&(l(t),l(e),l(n))}}}function A(r){let t,s;return t=new w({props:{idx:5,label:"Ability to Turn Around",cases:[["2","<p>The path is at least 4m wide.</p><p>Or, turning points are less than 1km apart and provided between all public access points.</p>"],["1","<p>Turning points are approximately 1km apart.</p>"],["0","<p>There are no turning points.</p><p>Or, turning points are over 1km apart or not provided between all public access points.</p>"]],$$slots:{default:[y]},$$scope:{ctx:r}}}),{c(){v(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){b(t,e,n),s=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(C(t.$$.fragment,e),s=!0)},o(e){q(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}class O extends g{constructor(t){super(),x(this,t,null,A,f,{})}}export{O as component};
