import{s as f,e as p,a as d,c as m,p as g,g as u,i as l,n as _,f as c}from"../chunks/scheduler.B5FfXhnD.js";import{S as C,i as $,c as x,a as h,m as w,t as b,b as v,d as y}from"../chunks/index.VeCIHQiF.js";import{Q as k}from"../chunks/Question.lJrMo13f.js";function q(r){let e,a="Crossing angle (between cyclist desire line and tram or train rails).",t,n,o="Mode: Cycling";return{c(){e=p("p"),e.textContent=a,t=d(),n=p("p"),n.textContent=o},l(s){e=m(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-12ta40"&&(e.textContent=a),t=u(s),n=m(s,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1ektema"&&(n.textContent=o)},m(s,i){l(s,e,i),l(s,t,i),l(s,n,i)},p:_,d(s){s&&(c(e),c(t),c(n))}}}function P(r){let e,a;return e=new k({props:{idx:13,label:"Crossing Angle of Tram/Train Rails",cases:[["2","<p>Crossing angle between 80 and 90 degrees with track filler creating a smooth crossing for cyclists.</p>"],["1","<p>Crossing angle between 80 and 90 degrees (or between 60 and 80 degrees with track filler creating a smooth crossing for cyclists).</p>"],["0","<p>Crossing angle between 60 and 80 degrees.</p>"],["C","<p>Crossing angle less than 60 degrees.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:r}}}),{c(){x(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){w(e,t,n),a=!0},p(t,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){y(e,t)}}}class T extends C{constructor(e){super(),$(this,e,null,P,f,{})}}export{T as component};
