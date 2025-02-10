import{s as f,e as m,a as g,c as l,p as d,g as h,i as c,n as u,f as p}from"../chunks/scheduler.4ZNDCSWA.js";import{S as _,i as $,c as x,a as v,m as w,t as C,b,d as q}from"../chunks/index.xRKM1n3P.js";import{Q as P}from"../chunks/Question.jWrG-3Uf.js";function T(i){let e,o=`Description: Required crossing speed at signal crossings (risk of
    pedestrians coming into conflict with traffic).`,t,s,a="Mode: Walking / Wheeling";return{c(){e=m("p"),e.textContent=o,t=g(),s=m("p"),s.textContent=a},l(n){e=l(n,"P",{"data-svelte-h":!0}),d(e)!=="svelte-1ne9yw3"&&(e.textContent=o),t=h(n),s=l(n,"P",{"data-svelte-h":!0}),d(s)!=="svelte-1bs6336"&&(s.textContent=a)},m(n,r){c(n,e,r),c(n,t,r),c(n,s,r)},p:u,d(n){n&&(p(e),p(t),p(s))}}}function k(i){let e,o;return e=new P({props:{idx:10,cases:[["2","<p>There are detectors present on the crossing which extend crossing times based on a crossing speed of 1m/s.</p>"],["1","<p>There are detectors present on the crossing which extend crossing times based on a crossing speed of 1.2m/s.</p>"],["0","<p>There are no detectors to extend crossing times, but pedestrians who start crossing at the end of the 'invitation to cross' can cross at a speed of 1.2m/s and get across the whole crossing in time.</p>"],["C","<p>Pedestrians who start crossing at the end of the 'invitation to cross' must cross at a speed of over 1.2m/s to get across the whole crossing in time.</p>"],["N/A",""]],$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){w(e,t,s),o=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){o||(C(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){q(e,t)}}}class W extends _{constructor(e){super(),$(this,e,null,k,f,{})}}export{W as component};
