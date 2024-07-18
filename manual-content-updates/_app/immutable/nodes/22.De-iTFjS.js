import{s as u,e as m,a as f,c as h,m as p,g as d,i as l,n as g,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as _,i as y,c as $,a as v,m as x,t as C,b as T,d as w}from"../chunks/index.Dmc4uC9p.js";import{Q as q}from"../chunks/Question.CxX_zrGd.js";function b(i){let e,n=`(How tight or loose the cycling network is. This is measured by the average
    distance between routes of a similar quality).`,t,a,o=`Quality cycle routes and high-quality crossings are those which follow LTN
    1/20 guidance and have no critical issues as defined in ATE's Route Check.
    Please refer to the User Manual for further information.`;return{c(){e=m("p"),e.textContent=n,t=f(),a=m("p"),a.textContent=o},l(s){e=h(s,"P",{"data-svelte-h":!0}),p(e)!=="svelte-1or1xk0"&&(e.textContent=n),t=d(s),a=h(s,"P",{"data-svelte-h":!0}),p(a)!=="svelte-xhhty"&&(a.textContent=o)},m(s,r){l(s,e,r),l(s,t,r),l(s,a,r)},p:g,d(s){s&&(c(e),c(t),c(a))}}}function P(i){let e,n;return e=new q({props:{idx:8,label:"Mesh Density - Cycling",cases:[[4,"<p>The area has an average mesh density of 250m.</p>"],[3,"<p>The area has an average mesh density of 251-400m.</p>"],[2,"<p>The area has an average mesh density of 401-800m.</p>"],[1,"<p>The area has an average mesh density of 801-1400m.</p>"],[0,"<p>The area has an average mesh density which exceeds 1400m.</p>"]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}class S extends _{constructor(e){super(),y(this,e,null,P,u,{})}}export{S as component};
