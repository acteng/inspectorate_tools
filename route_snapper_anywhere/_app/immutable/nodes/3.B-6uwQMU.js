import{s as M,a as k,e as A,t as S,c as x,b as B,f as N,h as T,d as f,g as R,i as c,j as E,k as H,l as P}from"../chunks/scheduler.Cns_Y-fU.js";import{S as W,i as j,c as u,a as _,m as g,t as b,b as v,d as h}from"../chunks/index.B1sdSzhI.js";import{B as q}from"../chunks/Breadcrumbs.Ky1JQf9U.js";import{C as D}from"../chunks/CollapsibleCard.DYQ4B8hz.js";import{T as z}from"../chunks/TextArea.DODp0uDl.js";import{W as F}from"../chunks/WarningButton.CSppIYFd.js";import"../chunks/Geocoder.svelte_svelte_type_style_lang.MMiTdOl1.js";import{E as G}from"../chunks/ExternalLink.DcM7KMge.js";import{b as C}from"../chunks/paths.D_O5ISkb.js";import{s as J,e as I}from"../chunks/data.CUS-6sO-.js";function K(l){let t;return{c(){t=S(`scheme review tool
  `)},l(s){t=T(s,`scheme review tool
  `)},m(s,r){c(s,t,r)},d(s){s&&f(t)}}}function Q(l){let t;return{c(){t=S("Reset")},l(s){t=T(s,"Reset")},m(s,r){c(s,t,r)},d(s){s&&f(t)}}}function U(l){let t,s,r,i;return t=new F({props:{$$slots:{default:[Q]},$$scope:{ctx:l}}}),t.$on("click",l[1]),r=new z({props:{label:"JSON",value:JSON.stringify(l[0],null,"  "),rows:10}}),{c(){u(t.$$.fragment),s=k(),u(r.$$.fragment)},l(e){_(t.$$.fragment,e),s=x(e),_(r.$$.fragment,e)},m(e,o){g(t,e,o),c(e,s,o),g(r,e,o),i=!0},p(e,o){const p={};o&4&&(p.$$scope={dirty:o,ctx:e}),t.$set(p);const m={};o&1&&(m.value=JSON.stringify(e[0],null,"  ")),r.$set(m)},i(e){i||(b(t.$$.fragment,e),b(r.$$.fragment,e),i=!0)},o(e){v(t.$$.fragment,e),v(r.$$.fragment,e),i=!1},d(e){e&&f(s),h(t,e),h(r,e)}}}function V(l){let t,s,r,i,e,o,p,m,y=`<li><a href="${C}/area_check/summary">Summary of Scheme</a></li> <li><a href="${C}/area_check/traffic_mitigation">Traffic Mitigation Check</a></li> <li><a href="${C}/area_check/scorecard">Area Scorecard</a></li> <li>Results &amp; Commentary</li>`,w,$,d;return t=new q({props:{links:[["Tools","/"]],current:"Area check tool"}}),e=new G({props:{href:"https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools",$$slots:{default:[K]},$$scope:{ctx:l}}}),$=new D({props:{label:"Debug",$$slots:{default:[U]},$$scope:{ctx:l}}}),{c(){u(t.$$.fragment),s=k(),r=A("p"),i=S("This is an experimental version of a "),u(e.$$.fragment),o=S("."),p=k(),m=A("ol"),m.innerHTML=y,w=k(),u($.$$.fragment)},l(a){_(t.$$.fragment,a),s=x(a),r=B(a,"P",{});var n=N(r);i=T(n,"This is an experimental version of a "),_(e.$$.fragment,n),o=T(n,"."),n.forEach(f),p=x(a),m=B(a,"OL",{"data-svelte-h":!0}),R(m)!=="svelte-big2f9"&&(m.innerHTML=y),w=x(a),_($.$$.fragment,a)},m(a,n){g(t,a,n),c(a,s,n),c(a,r,n),E(r,i),g(e,r,null),E(r,o),c(a,p,n),c(a,m,n),c(a,w,n),g($,a,n),d=!0},p(a,[n]){const L={};n&4&&(L.$$scope={dirty:n,ctx:a}),e.$set(L);const O={};n&5&&(O.$$scope={dirty:n,ctx:a}),$.$set(O)},i(a){d||(b(t.$$.fragment,a),b(e.$$.fragment,a),b($.$$.fragment,a),d=!0)},o(a){v(t.$$.fragment,a),v(e.$$.fragment,a),v($.$$.fragment,a),d=!1},d(a){a&&(f(s),f(r),f(p),f(m),f(w)),h(t,a),h(e),h($,a)}}}function X(l,t,s){let r;H(l,J,e=>s(0,r=e));function i(){P(J,r=I(),r)}return[r,i]}class ie extends W{constructor(t){super(),j(this,t,X,V,M,{})}}export{ie as component};
