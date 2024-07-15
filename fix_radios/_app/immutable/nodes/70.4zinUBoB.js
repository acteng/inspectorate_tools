import{s as d,e as p,a as f,c as m,p as u,g,i as c,n as _,f as l}from"../chunks/scheduler.mGr_ZlpV.js";import{S as h,i as $,c as b,b as x,m as k,t as v,a as P,d as y}from"../chunks/index.rGMSHTnh.js";import{Q as C}from"../chunks/Question.DBw2wmGO.js";function q(i){let e,n="Potential for access points to be blocked by parking or loading.",t,a,o="Mode: All Active Modes";return{c(){e=p("p"),e.textContent=n,t=f(),a=p("p"),a.textContent=o},l(s){e=m(s,"P",{"data-svelte-h":!0}),u(e)!=="svelte-lulee2"&&(e.textContent=n),t=g(s),a=m(s,"P",{"data-svelte-h":!0}),u(a)!=="svelte-15taagu"&&(a.textContent=o)},m(s,r){c(s,e,r),c(s,t,r),c(s,a,r)},p:_,d(s){s&&(l(e),l(t),l(a))}}}function A(i){let e,n;return e=new C({props:{idx:15,label:"Accessibility of Access Points",cases:[["2","<p>Path access points are suitably protected to maintain access for all path users, and there is adequate marked loading and parking provision near access points.</p>"],["1","<p>Path access points are suitably protected to maintain access for all path users.</p><p>Or, there is adequate marked loading and parking provision near access points.</p>"],["0","<p>Path access points are not protected, meaning there is a risk that they could be blocked by parking or loading, impeding access for some or all path users.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,a){k(e,t,a),n=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}class w extends h{constructor(e){super(),$(this,e,null,A,d,{})}}export{w as component};
