import{s as f,n as g,d as c,i as p,c as m,q as l,g as h,h as d,j as u}from"../chunks/hklQk-fT.js";import{S as _,i as $,d as x,t as v,a as w,m as C,c as b,b as q}from"../chunks/4RGf_tlt.js";import{Q as P}from"../chunks/BuwGIwYW.js";function T(i){let e,o=`Description: Required crossing speed at signal crossings (risk of
    pedestrians coming into conflict with traffic).`,t,s,a="Mode: Walking / Wheeling";return{c(){e=d("p"),e.textContent=o,t=u(),s=d("p"),s.textContent=a},l(n){e=m(n,"P",{"data-svelte-h":!0}),l(e)!=="svelte-1ne9yw3"&&(e.textContent=o),t=h(n),s=m(n,"P",{"data-svelte-h":!0}),l(s)!=="svelte-1bs6336"&&(s.textContent=a)},m(n,r){p(n,e,r),p(n,t,r),p(n,s,r)},p:g,d(n){n&&(c(e),c(t),c(s))}}}function k(i){let e,o;return e=new P({props:{idx:10,cases:[["2","<p>There are detectors present on the crossing which extend crossing times based on a crossing speed of 1m/s.</p>"],["1","<p>There are detectors present on the crossing which extend crossing times based on a crossing speed of 1.2m/s.</p>"],["0","<p>There are no detectors to extend crossing times, but pedestrians who start crossing at the end of the 'invitation to cross' can cross at a speed of 1.2m/s and get across the whole crossing in time.</p>"],["C","<p>Pedestrians who start crossing at the end of the 'invitation to cross' must cross at a speed of over 1.2m/s to get across the whole crossing in time.</p>"],["N/A",""]],$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){q(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){C(e,t,s),o=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){o||(w(e.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}class W extends _{constructor(e){super(),$(this,e,null,k,f,{})}}export{W as component};
