import{s as N,e as R,a as S,t as y,c as E,b as A,d as x,k as P,f as h,g as q,h as D,i as T,j as f,l as H,m as I}from"../chunks/scheduler.BHcsbfKa.js";import{S as M,i as W,c as g,a as k,m as d,t as v,b,d as w}from"../chunks/index.CiegshHD.js";import{B as j}from"../chunks/Breadcrumbs.Bgmk6ck2.js";import"../chunks/Geocoder.svelte_svelte_type_style_lang.DeO8oCiI.js";import{E as F}from"../chunks/ExternalLink.DLoxg9Qn.js";import{b as _}from"../chunks/paths.Bxd5YBwR.js";import{C as V}from"../chunks/CollapsibleCard.Ds4Pimxn.js";import{T as z}from"../chunks/TextArea.uy6XZ7K0.js";import{W as G}from"../chunks/WarningButton.CnN9_i1m.js";import{e as K,s as B}from"../chunks/data.DO1-XQVs.js";function Q(o){let e;return{c(){e=y(`scheme review tool
    `)},l(t){e=P(t,`scheme review tool
    `)},m(t,s){T(t,e,s)},d(t){t&&h(e)}}}function U(o){let e;return{c(){e=y("Reset")},l(t){e=P(t,"Reset")},m(t,s){T(t,e,s)},d(t){t&&h(e)}}}function X(o){let e,t,s,i;return e=new G({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),e.$on("click",o[1]),s=new z({props:{label:"JSON",value:JSON.stringify(o[0],null,"  "),rows:10}}),{c(){g(e.$$.fragment),t=S(),g(s.$$.fragment)},l(a){k(e.$$.fragment,a),t=x(a),k(s.$$.fragment,a)},m(a,r){d(e,a,r),T(a,t,r),d(s,a,r),i=!0},p(a,r){const $={};r&4&&($.$$scope={dirty:r,ctx:a}),e.$set($);const u={};r&1&&(u.value=JSON.stringify(a[0],null,"  ")),s.$set(u)},i(a){i||(v(e.$$.fragment,a),v(s.$$.fragment,a),i=!0)},o(a){b(e.$$.fragment,a),b(s.$$.fragment,a),i=!1},d(a){a&&h(t),w(e,a),w(s,a)}}}function Y(o){let e,t,s,i,a,r,$,u,p,J=`<li><a href="${_}/route_check/summary">Summary of Scheme</a></li> <li><a href="${_}/route_check/policy_check">Policy Check</a></li> <li>Policy Conflict Log</li> <li><a href="${_}/route_check/safety_check">Safety Check</a></li> <li>Critical Issues Log</li> <li><a href="${_}/route_check/street_check">Street Check</a></li> <li><a href="${_}/route_check/street_placemaking_check">Street Placemaking Check</a></li> <li>Path Check</li> <li>Path Placemaking Check</li> <li>JAT Check</li> <li>Results Summary</li> <li>Results Further Analysis</li> <li>Results Export</li>`,L,c,C;return t=new j({props:{links:[["Tools","/"]],current:"Route check tool"}}),r=new F({props:{href:"https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools",$$slots:{default:[Q]},$$scope:{ctx:o}}}),c=new V({props:{label:"Debug",$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){e=R("div"),g(t.$$.fragment),s=S(),i=R("p"),a=y("This is an experimental version of a "),g(r.$$.fragment),$=y("."),u=S(),p=R("ol"),p.innerHTML=J,L=S(),g(c.$$.fragment),this.h()},l(n){e=E(n,"DIV",{class:!0});var l=A(e);k(t.$$.fragment,l),s=x(l),i=E(l,"P",{});var m=A(i);a=P(m,"This is an experimental version of a "),k(r.$$.fragment,m),$=P(m,"."),m.forEach(h),u=x(l),p=E(l,"OL",{"data-svelte-h":!0}),q(p)!=="svelte-ehyq9a"&&(p.innerHTML=J),L=x(l),k(c.$$.fragment,l),l.forEach(h),this.h()},h(){D(e,"class","govuk-prose")},m(n,l){T(n,e,l),d(t,e,null),f(e,s),f(e,i),f(i,a),d(r,i,null),f(i,$),f(e,u),f(e,p),f(e,L),d(c,e,null),C=!0},p(n,[l]){const m={};l&4&&(m.$$scope={dirty:l,ctx:n}),r.$set(m);const O={};l&5&&(O.$$scope={dirty:l,ctx:n}),c.$set(O)},i(n){C||(v(t.$$.fragment,n),v(r.$$.fragment,n),v(c.$$.fragment,n),C=!0)},o(n){b(t.$$.fragment,n),b(r.$$.fragment,n),b(c.$$.fragment,n),C=!1},d(n){n&&h(e),w(t),w(r),w(c)}}}function Z(o,e,t){let s;H(o,B,a=>t(0,s=a));function i(){I(B,s=K(),s)}return[s,i]}class me extends M{constructor(e){super(),W(this,e,Z,Y,N,{})}}export{me as component};
