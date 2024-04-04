import{s as N,e as L,a as C,t as x,c as R,b as A,d as S,k as y,f as h,g as D,h as H,i as P,j as f,l as I,m as M}from"../chunks/scheduler.BHcsbfKa.js";import{S as W,i as j,c as g,a as _,m as d,t as k,b as v,d as b}from"../chunks/index.CiegshHD.js";import{B as q}from"../chunks/Breadcrumbs.B7tbPNhM.js";import"../chunks/Geocoder.svelte_svelte_type_style_lang.DeO8oCiI.js";import{E as F}from"../chunks/ExternalLink.DLoxg9Qn.js";import{b as E}from"../chunks/paths.DTGFi1FC.js";import{C as V}from"../chunks/CollapsibleCard.Ds4Pimxn.js";import{T as z}from"../chunks/TextArea.uy6XZ7K0.js";import{W as G}from"../chunks/WarningButton.CnN9_i1m.js";import{e as K,s as B}from"../chunks/data.DDdK1zbj.js";function Q(o){let e;return{c(){e=x(`scheme review tool
    `)},l(t){e=y(t,`scheme review tool
    `)},m(t,s){P(t,e,s)},d(t){t&&h(e)}}}function U(o){let e;return{c(){e=x("Reset")},l(t){e=y(t,"Reset")},m(t,s){P(t,e,s)},d(t){t&&h(e)}}}function X(o){let e,t,s,i;return e=new G({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),e.$on("click",o[1]),s=new z({props:{label:"JSON",value:JSON.stringify(o[0],null,"  "),rows:10}}),{c(){g(e.$$.fragment),t=C(),g(s.$$.fragment)},l(a){_(e.$$.fragment,a),t=S(a),_(s.$$.fragment,a)},m(a,r){d(e,a,r),P(a,t,r),d(s,a,r),i=!0},p(a,r){const $={};r&4&&($.$$scope={dirty:r,ctx:a}),e.$set($);const u={};r&1&&(u.value=JSON.stringify(a[0],null,"  ")),s.$set(u)},i(a){i||(k(e.$$.fragment,a),k(s.$$.fragment,a),i=!0)},o(a){v(e.$$.fragment,a),v(s.$$.fragment,a),i=!1},d(a){a&&h(t),b(e,a),b(s,a)}}}function Y(o){let e,t,s,i,a,r,$,u,p,J=`<li><a href="${E}/route_check/summary">Summary of Scheme</a></li> <li><a href="${E}/route_check/policy_check">Policy Check</a></li> <li>Policy Conflict Log</li> <li><a href="${E}/route_check/safety_check">Safety Check</a></li> <li>Critical Issues Log</li> <li>Street Check</li> <li>Street Placemaking Check</li> <li>Path Check</li> <li>Path Placemaking Check</li> <li>JAT Check</li> <li>Results Summary</li> <li>Results Further Analysis</li> <li>Results Export</li>`,T,c,w;return t=new q({props:{links:[["Tools","/"]],current:"Route check tool"}}),r=new F({props:{href:"https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools",$$slots:{default:[Q]},$$scope:{ctx:o}}}),c=new V({props:{label:"Debug",$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){e=L("div"),g(t.$$.fragment),s=C(),i=L("p"),a=x("This is an experimental version of a "),g(r.$$.fragment),$=x("."),u=C(),p=L("ol"),p.innerHTML=J,T=C(),g(c.$$.fragment),this.h()},l(n){e=R(n,"DIV",{class:!0});var l=A(e);_(t.$$.fragment,l),s=S(l),i=R(l,"P",{});var m=A(i);a=y(m,"This is an experimental version of a "),_(r.$$.fragment,m),$=y(m,"."),m.forEach(h),u=S(l),p=R(l,"OL",{"data-svelte-h":!0}),D(p)!=="svelte-1an4613"&&(p.innerHTML=J),T=S(l),_(c.$$.fragment,l),l.forEach(h),this.h()},h(){H(e,"class","govuk-prose")},m(n,l){P(n,e,l),d(t,e,null),f(e,s),f(e,i),f(i,a),d(r,i,null),f(i,$),f(e,u),f(e,p),f(e,T),d(c,e,null),w=!0},p(n,[l]){const m={};l&4&&(m.$$scope={dirty:l,ctx:n}),r.$set(m);const O={};l&5&&(O.$$scope={dirty:l,ctx:n}),c.$set(O)},i(n){w||(k(t.$$.fragment,n),k(r.$$.fragment,n),k(c.$$.fragment,n),w=!0)},o(n){v(t.$$.fragment,n),v(r.$$.fragment,n),v(c.$$.fragment,n),w=!1},d(n){n&&h(e),b(t),b(r),b(c)}}}function Z(o,e,t){let s;I(o,B,a=>t(0,s=a));function i(){M(B,s=K(),s)}return[s,i]}class me extends W{constructor(e){super(),j(this,e,Z,Y,N,{})}}export{me as component};
