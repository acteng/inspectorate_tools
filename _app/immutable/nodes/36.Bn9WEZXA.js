import{s as v,e as f,a as w,c as m,b as D,p as P,g as C,f as i,i as $,h as u,t as F,d as R}from"../chunks/scheduler.DGwhun8C.js";import{S as k,i as E,c as _,a as d,m as g,t as h,b,d as x}from"../chunks/index.B2vZYn3d.js";import{R as T}from"../chunks/Report.CbSCLhzA.js";import{D as y}from"../chunks/DefaultButton.Dnb4gInE.js";import"../chunks/index.DHxTZR2f.js";import{b as I}from"../chunks/paths.C3mfD0Mc.js";function S(c){let t;return{c(){t=F("Export to PDF")},l(e){t=R(e,"Export to PDF")},m(e,n){$(e,t,n)},d(e){e&&i(t)}}}function q(c){let t,e,n=`The export to PDF button will open a new tab. Right-click the page and
      select 'Print'. Then you can export to PDF.`,s,a,l;return a=new y({props:{$$slots:{default:[S]},$$scope:{ctx:c}}}),a.$on("click",c[0]),{c(){t=f("div"),e=f("p"),e.textContent=n,s=w(),_(a.$$.fragment)},l(o){t=m(o,"DIV",{});var r=D(t);e=m(r,"P",{"data-svelte-h":!0}),P(e)!=="svelte-c8bur0"&&(e.textContent=n),s=C(r),d(a.$$.fragment,r),r.forEach(i)},m(o,r){$(o,t,r),u(t,e),u(t,s),g(a,t,null),l=!0},p(o,r){const p={};r&2&&(p.$$scope={dirty:r,ctx:o}),a.$set(p)},i(o){l||(h(a.$$.fragment,o),l=!0)},o(o){b(a.$$.fragment,o),l=!1},d(o){o&&i(t),x(a)}}}function B(c){let t,e;return t=new T({props:{$$slots:{default:[q]},$$scope:{ctx:c}}}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,s){g(t,n,s),e=!0},p(n,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function N(c){function t(){window.open(`${I}/planning/report/printable`,"_blank")}return[t]}class J extends k{constructor(t){super(),E(this,t,N,B,v,{})}}export{J as component};
