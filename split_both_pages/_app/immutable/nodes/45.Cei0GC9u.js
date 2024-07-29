import{s as h,e as a,c as l,m as o,p as r,i as c,n as d,f as u}from"../chunks/scheduler.BwufR8Ly.js";import{S as f,i as m,c as g,a as v,m as b,t as _,b as w,d as $}from"../chunks/index.BYv68wXE.js";import{Q as x}from"../chunks/Question.DLFd3Lan.js";function y(s){let e,i=`<p>Are all buildings within 400m of a high-frequency bus stop or 800m of a
      rail/light rail station or tram stop, with appropriate facilities, using
      well-designed routes?</p>`;return{c(){e=a("div"),e.innerHTML=i,this.h()},l(t){e=l(t,"DIV",{slot:!0,"data-svelte-h":!0}),o(e)!=="svelte-6madtw"&&(e.innerHTML=i),this.h()},h(){r(e,"slot","description")},m(t,n){c(t,e,n)},p:d,d(t){t&&u(e)}}}function M(s){let e,i=`<p>There are no public transport nodes with a regular service (this will
      differ between urban and rural areas) within the recommended distances.</p> <p>Local bus stops do not have good natural surveillance or do not provide
      seating, lighting, shelter, real-time passenger information and raised bus
      boarders or specialist kerbs. Local rail stations do not provide
      sufficient cycle parking, including spaces for non-standard cycles.</p> <p>Footpaths/ways to public transport nodes do not conform to the National
      Design Guide standards of being safe, direct, convenient and accessible
      for people of all abilities, which includes but is not limited to routes
      that:</p> <ul><li>have a minimum width of 2m, with limited pinch points no less than 1.5m</li> <li>are step-free</li> <li>have a smooth, even surface</li> <li>have seating at regular intervals</li> <li>are uncluttered</li> <li>have good natural surveillance and clear lines of sight</li> <li>have street lighting</li> <li>have wayfinding, and</li> <li>have crossing points suitable for the speed and traffic flow of the
        road(s)</li></ul>`;return{c(){e=a("div"),e.innerHTML=i,this.h()},l(t){e=l(t,"DIV",{slot:!0,"data-svelte-h":!0}),o(e)!=="svelte-4kikcy"&&(e.innerHTML=i),this.h()},h(){r(e,"slot","shortfalls")},m(t,n){c(t,e,n)},p:d,d(t){t&&u(e)}}}function L(s){let e,i="<ul><li>National Planning Policy Framework: 8, 74, 85, 87, 108, 116</li> <li>National Design Guide: 81</li> <li>National Model Design Code: 59i-ii (Part 1); M.1.ii, M.2 (Part 2)</li> <li>Active Design (Sport England): Principles 2, 3</li> <li>Buses in Urban Developments (CIHT): A.4.1-A.4.5, B.2.3, B.7.2</li> <li>Inclusive Mobility: Chapter 9</li> <li>LTN 1/24;</li></ul>";return{c(){e=a("div"),e.innerHTML=i,this.h()},l(t){e=l(t,"DIV",{slot:!0,"data-svelte-h":!0}),o(e)!=="svelte-t48yqx"&&(e.innerHTML=i),this.h()},h(){r(e,"slot","guidance")},m(t,n){c(t,e,n)},p:d,d(t){t&&u(e)}}}function T(s){let e,i;return e=new x({props:{idx:5,label:"Access to public transport",$$slots:{guidance:[L],shortfalls:[M],description:[y]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){b(e,t,n),i=!0},p(t,[n]){const p={};n&1&&(p.$$scope={dirty:n,ctx:t}),e.$set(p)},i(t){i||(_(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){$(e,t)}}}class P extends f{constructor(e){super(),m(this,e,null,T,h,{})}}export{P as component};
