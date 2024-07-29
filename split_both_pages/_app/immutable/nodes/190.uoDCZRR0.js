import{s as F,w as J,e as u,a as _,c as f,b as T,f as g,g as $,p as K,i as w,x as Q,k as R,t as E,d as N,m as y,h as l}from"../chunks/scheduler.BwufR8Ly.js";import{S as W,i as X,e as Z,c as q,a as D,m as G,t as O,b as z,d as P}from"../chunks/index.BYv68wXE.js";/* empty css                                                    */import{E as tt}from"../chunks/ExternalLink.DUwZ2Ga_.js";import"../chunks/paths.CuQTVTq8.js";import{s as B}from"../chunks/data.CqZCTD-0.js";import"../chunks/index.C9Qetb6E.js";import{C as et}from"../chunks/ContextualMapEntry.S1YqhLCk.js";import{N as nt}from"../chunks/Nav.DexuwGfa.js";function at(m){let t;return{c(){t=E("Scheme Sketcher")},l(n){t=N(n,"Scheme Sketcher")},m(n,i){w(n,t,i)},d(n){n&&g(t)}}}function st(m){let t,n,i,a,r,p,h,M="Choose the area best covering this scheme",e,o,v=`Use the <i>New route</i>
      tool to sketch the route. It can contain segments snapped to existing roads
      or free-hand segments.`,I,x,U=`Optionally, use the <i>Split route</i>
      tool to denote just the sections assessed in this file.`,S,k,V=`You can set <i>Name</i>
      and
      <i>Description</i>
      to whatever is useful for display on the map`,j,L,Y=`Save the map by clicking <i>Manage files</i>
      , then
      <i>Save</i>`,H,b,A="Load the saved file above",C;return a=new tt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[at]},$$scope:{ctx:m}}}),{c(){t=u("ol"),n=u("li"),i=E("Go to the "),q(a.$$.fragment),r=E(" tool"),p=_(),h=u("li"),h.textContent=M,e=_(),o=u("li"),o.innerHTML=v,I=_(),x=u("li"),x.innerHTML=U,S=_(),k=u("li"),k.innerHTML=V,j=_(),L=u("li"),L.innerHTML=Y,H=_(),b=u("li"),b.textContent=A},l(c){t=f(c,"OL",{});var s=T(t);n=f(s,"LI",{});var d=T(n);i=N(d,"Go to the "),D(a.$$.fragment,d),r=N(d," tool"),d.forEach(g),p=$(s),h=f(s,"LI",{"data-svelte-h":!0}),y(h)!=="svelte-aj705b"&&(h.textContent=M),e=$(s),o=f(s,"LI",{"data-svelte-h":!0}),y(o)!=="svelte-1udk817"&&(o.innerHTML=v),I=$(s),x=f(s,"LI",{"data-svelte-h":!0}),y(x)!=="svelte-19vhney"&&(x.innerHTML=U),S=$(s),k=f(s,"LI",{"data-svelte-h":!0}),y(k)!=="svelte-ibv1o3"&&(k.innerHTML=V),j=$(s),L=f(s,"LI",{"data-svelte-h":!0}),y(L)!=="svelte-qofa4v"&&(L.innerHTML=Y),H=$(s),b=f(s,"LI",{"data-svelte-h":!0}),y(b)!=="svelte-x3zkxb"&&(b.textContent=A),s.forEach(g)},m(c,s){w(c,t,s),l(t,n),l(n,i),G(a,n,null),l(n,r),l(t,p),l(t,h),l(t,e),l(t,o),l(t,I),l(t,x),l(t,S),l(t,k),l(t,j),l(t,L),l(t,H),l(t,b),C=!0},p(c,s){const d={};s&4&&(d.$$scope={dirty:s,ctx:c}),a.$set(d)},i(c){C||(O(a.$$.fragment,c),C=!0)},o(c){z(a.$$.fragment,c),C=!1},d(c){c&&g(t),P(a)}}}function ot(m){let t,n,i,a,r,p;n=new nt({});function h(e){m[1](e)}let M={$$slots:{default:[st]},$$scope:{ctx:m}};return m[0].summary.networkMap!==void 0&&(M.gj=m[0].summary.networkMap),a=new et({props:M}),J.push(()=>Z(a,"gj",h)),{c(){t=u("div"),q(n.$$.fragment),i=_(),q(a.$$.fragment),this.h()},l(e){t=f(e,"DIV",{class:!0});var o=T(t);D(n.$$.fragment,o),o.forEach(g),i=$(e),D(a.$$.fragment,e),this.h()},h(){K(t,"class","govuk-width-container")},m(e,o){w(e,t,o),G(n,t,null),w(e,i,o),G(a,e,o),p=!0},p(e,[o]){const v={};o&4&&(v.$$scope={dirty:o,ctx:e}),!r&&o&1&&(r=!0,v.gj=e[0].summary.networkMap,Q(()=>r=!1)),a.$set(v)},i(e){p||(O(n.$$.fragment,e),O(a.$$.fragment,e),p=!0)},o(e){z(n.$$.fragment,e),z(a.$$.fragment,e),p=!1},d(e){e&&(g(t),g(i)),P(n),P(a,e)}}}function it(m,t,n){let i;R(m,B,r=>n(0,i=r));function a(r){m.$$.not_equal(i.summary.networkMap,r)&&(i.summary.networkMap=r,B.set(i))}return[i,a]}class _t extends W{constructor(t){super(),X(this,t,it,ot,F,{})}}export{_t as component};
