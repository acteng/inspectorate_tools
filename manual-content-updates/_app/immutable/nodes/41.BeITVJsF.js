import{s as h,e as a,c as l,m as o,o as r,i as c,n as d,f as u}from"../chunks/scheduler.BJ06nkRu.js";import{S as f,i as p,c as g,a as v,m as _,t as b,b as $,d as y}from"../chunks/index.Dmc4uC9p.js";import{Q as w}from"../chunks/Question.BCx-Jsa8.js";function M(s){let e,i=`<p>Are most buildings within 800m from a range of amenities (such as primary
      schools, parks, play areas, food shops, cafes and community buildings)
      using well-designed routes?</p>`;return{c(){e=a("div"),e.innerHTML=i,this.h()},l(t){e=l(t,"DIV",{slot:!0,"data-svelte-h":!0}),o(e)!=="svelte-dbnbvn"&&(e.innerHTML=i),this.h()},h(){r(e,"slot","description")},m(t,n){c(t,e,n)},p:d,d(t){t&&u(e)}}}function x(s){let e,i=`<p>Trip lengths to key amenities as presented in application documents are
      based on straight-line distances from site boundaries or main access
      points.</p> <p>There are few everyday amenities within the recommended distance from most
      buildings using safe and accessible routes for pedestrians.</p> <p>Footpaths/ways to local amenities do not conform to the National Design
      Guide standards of being safe, direct, convenient and accessible for
      people of all abilities, which includes but is not limited to routes that:</p> <ul><li>have a minimum width of 2m, with limited pinch points no less than 1.5m</li> <li>are step-free</li> <li>have a smooth, even surface</li> <li>have seating at regular intervals</li> <li>are uncluttered</li> <li>have good natural surveillance and clear lines of sight</li> <li>have street lighting</li> <li>have wayfinding, and</li> <li>have crossing points suitable for the speed and traffic flow of the
        road(s)</li></ul>`;return{c(){e=a("div"),e.innerHTML=i,this.h()},l(t){e=l(t,"DIV",{slot:!0,"data-svelte-h":!0}),o(e)!=="svelte-100ut5j"&&(e.innerHTML=i),this.h()},h(){r(e,"slot","shortfalls")},m(t,n){c(t,e,n)},p:d,d(t){t&&u(e)}}}function T(s){let e,i=`<ul><li>National Planning Policy Framework: 8, 74, 87, 96, 97, 108, 112, 114,
        116</li> <li>National Design Guide: 82, 83, 119</li> <li>National Model Design Code: 59ii, 64iv-vi (Part 1); M.2, U.3 (Part 2)</li> <li>Active Design (Sport England): Principles 2, 3</li> <li>Designing for Walking (CIHT)</li> <li>Inclusive Mobility</li> <li>Manual for Streets: 4.4</li> <li>PAS 6463</li></ul>`;return{c(){e=a("div"),e.innerHTML=i,this.h()},l(t){e=l(t,"DIV",{slot:!0,"data-svelte-h":!0}),o(e)!=="svelte-y2mye3"&&(e.innerHTML=i),this.h()},h(){r(e,"slot","guidance")},m(t,n){c(t,e,n)},p:d,d(t){t&&u(e)}}}function D(s){let e,i;return e=new w({props:{idx:3,label:"Pedestrian access to local amenities",$$slots:{guidance:[T],shortfalls:[x],description:[M]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){_(e,t,n),i=!0},p(t,[n]){const m={};n&1&&(m.$$scope={dirty:n,ctx:t}),e.$set(m)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){$(e.$$.fragment,t),i=!1},d(t){y(e,t)}}}class L extends f{constructor(e){super(),p(this,e,null,D,h,{})}}export{L as component};
