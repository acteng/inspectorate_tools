import{s as _,e as h,a as w,c,p as m,g as d,i as r,n as b,f as p}from"../chunks/scheduler.mGr_ZlpV.js";import{S as v,i as $,c as x,b as y,m as k,t as C,a as T,d as S}from"../chunks/index.rGMSHTnh.js";import{Q as M}from"../chunks/Question.8GkKCDzY.js";function P(u){let e,l="(How easy it is to get through the area as a pedestrian)",t,i,s=`Suitable routes for walking and wheeling are only those which satisfy all
    conditions in the following list:`,f,n,g=`<li>Smooth and sealed footway surfaces.</li> <li>Dropped kerbs with suitable gradients and appropriate tactile paving
      surfaces at crossing locations.</li> <li>Suitable footway widths as defined in DfT’s Inclusive Mobility guidance.</li> <li>Suitable tactile paving surfaces.</li> <li>Acceptable footway camber (≤2.5%).</li> <li>Minimal street clutter.</li> <li>Appropriate street lighting.</li>`;return{c(){e=h("p"),e.textContent=l,t=w(),i=h("p"),i.textContent=s,f=w(),n=h("ul"),n.innerHTML=g},l(a){e=c(a,"P",{"data-svelte-h":!0}),m(e)!=="svelte-2vaaia"&&(e.textContent=l),t=d(a),i=c(a,"P",{"data-svelte-h":!0}),m(i)!=="svelte-1rsb8hs"&&(i.textContent=s),f=d(a),n=c(a,"UL",{"data-svelte-h":!0}),m(n)!=="svelte-1spbhwx"&&(n.innerHTML=g)},m(a,o){r(a,e,o),r(a,t,o),r(a,i,o),r(a,f,o),r(a,n,o)},p:b,d(a){a&&(p(e),p(t),p(i),p(f),p(n))}}}function q(u){let e,l;return e=new M({props:{idx:5,label:"Permeability - Walking and Wheeling",cases:[[4,"<p>All walking and wheeling routes have all of the features from the list above.</p>"],[3,"<p>There are more than two walking and wheeling routes with all of the features from the list above.</p>"],[2,"<p>There are two walking and wheeling routes with all of the features from the list above.</p>"],[1,"<p>There is one walking and wheeling route with all of the features from the list above.</p>"],[0,"<p>There are no walking and wheeling routes with the features from the list above.</p>"]],$$slots:{default:[P]},$$scope:{ctx:u}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,i){k(e,t,i),l=!0},p(t,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}class D extends v{constructor(e){super(),$(this,e,null,q,_,{})}}export{D as component};
