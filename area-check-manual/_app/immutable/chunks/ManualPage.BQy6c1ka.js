import{s as Y,e as g,a as q,c as $,b,f as _,g as y,o as k,i as d,h as v,r as B,t as P,d as j}from"./scheduler.ScMV3vmV.js";import{S as z,i as A,c as D,a as E,m as I,t as u,g as F,f as G,b as h,d as M}from"./index.DbrWxxqn.js";import{e as S}from"./each.DgxkLI6f.js";import{S as H}from"./Section.DC7ifq8r.js";import{C as J}from"./ClickableCard.ofSK2zeq.js";/* empty css                                                       */import"./ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import"./paths.BwtKHrTf.js";function w(s,t,e){const o=s.slice();return o[4]=t[e].sectionName,o[5]=t[e].elements,o[7]=e,o}function C(s){let t;return{c(){t=P("You are here")},l(e){t=j(e,"You are here")},m(e,o){d(e,t,o)},d(e){e&&_(t)}}}function K(s){let t,e=s[1].sectionName===s[4]&&C();return{c(){e&&e.c(),t=q()},l(o){e&&e.l(o),t=y(o)},m(o,a){e&&e.m(o,a),d(o,t,a)},p(o,a){o[1].sectionName===o[4]?e||(e=C(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(o){o&&_(t),e&&e.d(o)}}}function N(s){let t,e;function o(){return s[3](s[7])}return t=new J({props:{name:s[4],disabled:s[1].name===s[4],$$slots:{default:[K]},$$scope:{ctx:s}}}),t.$on("click",o),{c(){D(t.$$.fragment)},l(a){E(t.$$.fragment,a)},m(a,i){I(t,a,i),e=!0},p(a,i){s=a;const f={};i&1&&(f.name=s[4]),i&3&&(f.disabled=s[1].name===s[4]),i&259&&(f.$$scope={dirty:i,ctx:s}),t.$set(f)},i(a){e||(u(t.$$.fragment,a),e=!0)},o(a){h(t.$$.fragment,a),e=!1},d(a){M(t,a)}}}function L(s){let t,e,o,a,i,f=S(s[0]),n=[];for(let l=0;l<f.length;l+=1)n[l]=N(w(s,f,l));const V=l=>h(n[l],1,1,()=>{n[l]=null});return a=new H({props:{section:s[1]}}),{c(){t=g("div"),e=g("div");for(let l=0;l<n.length;l+=1)n[l].c();o=q(),D(a.$$.fragment),this.h()},l(l){t=$(l,"DIV",{class:!0});var c=b(t);e=$(c,"DIV",{class:!0});var m=b(e);for(let r=0;r<n.length;r+=1)n[r].l(m);m.forEach(_),o=y(c),E(a.$$.fragment,c),c.forEach(_),this.h()},h(){k(e,"class","contents svelte-4tquwy"),k(t,"class","flex-box svelte-4tquwy")},m(l,c){d(l,t,c),v(t,e);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(e,null);v(t,o),I(a,t,null),i=!0},p(l,[c]){if(c&7){f=S(l[0]);let r;for(r=0;r<f.length;r+=1){const p=w(l,f,r);n[r]?(n[r].p(p,c),u(n[r],1)):(n[r]=N(p),n[r].c(),u(n[r],1),n[r].m(e,null))}for(F(),r=f.length;r<n.length;r+=1)V(r);G()}const m={};c&2&&(m.section=l[1]),a.$set(m)},i(l){if(!i){for(let c=0;c<f.length;c+=1)u(n[c]);u(a.$$.fragment,l),i=!0}},o(l){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)h(n[c]);h(a.$$.fragment,l),i=!1},d(l){l&&_(t),B(n,l),M(a)}}}function O(s,t,e){let{contents:o}=t,a=o[0];console.log(o);function i(n){e(1,a=o[n])}const f=n=>{i(n)};return s.$$set=n=>{"contents"in n&&e(0,o=n.contents)},[o,a,i,f]}class ee extends z{constructor(t){super(),A(this,t,O,L,Y,{contents:0})}}export{ee as M};
