import{s as pe,w as Y,i as _,n as We,d as p,e as y,b as D,g as J,r as ie,t as V,a as P,f as Q,h as z,c as S,o as Ve,j as M,y as ge,v as le,k as $e,a4 as ze,K as ne,l as Ce}from"../chunks/scheduler.Cns_Y-fU.js";import{S as be,i as _e,e as se,c as A,a as L,m as E,t as k,g as me,b as T,f as de,d as I}from"../chunks/index.B1sdSzhI.js";import{e as he,u as Me,o as He}from"../chunks/Geocoder.svelte_svelte_type_style_lang.MMiTdOl1.js";import{S as ye}from"../chunks/SecondaryButton.aZZSPwDr.js";import{s as j}from"../chunks/data.TJLXjWcG.js";import{B as Ne}from"../chunks/Breadcrumbs.Ky1JQf9U.js";import"../chunks/paths.D_O5ISkb.js";import{D as je,c as De}from"../chunks/logic.MLhObtjs.js";import{T as Oe}from"../chunks/TextArea.DODp0uDl.js";import{W as Re}from"../chunks/WarningButton.CSppIYFd.js";import{T as Ue}from"../chunks/TextInput.8vA7YF52.js";function Fe(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--red">Insufficient Space</strong>';return{c(){e=y("p"),e.innerHTML=i},l(t){e=D(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-sq6dx9"&&(e.innerHTML=i)},m(t,c){_(t,e,c)},d(t){t&&p(e)}}}function Ge(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--yellow">Absolute Minimum</strong>';return{c(){e=y("p"),e.innerHTML=i},l(t){e=D(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-r0abhc"&&(e.innerHTML=i)},m(t,c){_(t,e,c)},d(t){t&&p(e)}}}function Je(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--green">Desirable Minimum</strong>';return{c(){e=y("p"),e.innerHTML=i},l(t){e=D(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-1t7o0lp"&&(e.innerHTML=i)},m(t,c){_(t,e,c)},d(t){t&&p(e)}}}function Qe(n){let e;function i(o,s){return o[0]>=o[1]?Je:o[0]>o[2]?Ge:Fe}let t=i(n),c=t(n);return{c(){c.c(),e=Y()},l(o){c.l(o),e=Y()},m(o,s){c.m(o,s),_(o,e,s)},p(o,[s]){t!==(t=i(o))&&(c.d(1),c=t(o),c&&(c.c(),c.m(e.parentNode,e)))},i:We,o:We,d(o){o&&p(e),c.d(o)}}}function Xe(n,e,i){let{available:t}=e,{desirableTotal:c}=e,{absoluteTotal:o}=e;return n.$$set=s=>{"available"in s&&i(0,t=s.available),"desirableTotal"in s&&i(1,c=s.desirableTotal),"absoluteTotal"in s&&i(2,o=s.absoluteTotal)},[t,c,o]}class Ke extends be{constructor(e){super(),_e(this,e,Xe,Qe,pe,{available:0,desirableTotal:1,absoluteTotal:2})}}function qe(n){let e,i,t;function c(s){n[6](s)}let o={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return n[3].checks.homogeneousSections[n[0]].notes!==void 0&&(o.value=n[3].checks.homogeneousSections[n[0]].notes),e=new Oe({props:o}),ie.push(()=>se(e,"value",c)),{c(){A(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,f){E(e,s,f),t=!0},p(s,f){const m={};!i&&f&9&&(i=!0,m.value=s[3].checks.homogeneousSections[s[0]].notes,le(()=>i=!1)),e.$set(m)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Ye(n){let e;return{c(){e=V("Delete")},l(i){e=z(i,"Delete")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function Ze(n){let e,i,t,c=n[0]+1+"",o,s,f,m,W,g,b,d,w,O;function N(a){n[5](a)}let B={label:"Available width (m)",width:4,min:0};n[3].checks.homogeneousSections[n[0]].availableWidth!==void 0&&(B.value=n[3].checks.homogeneousSections[n[0]].availableWidth),f=new je({props:B}),ie.push(()=>se(f,"value",N)),g=new Ke({props:{available:n[3].checks.homogeneousSections[n[0]].availableWidth,desirableTotal:n[1],absoluteTotal:n[2]}});let h=n[3].checks.homogeneousSections[n[0]].availableWidth<n[1]&&qe(n);return w=new Re({props:{$$slots:{default:[Ye]},$$scope:{ctx:n}}}),w.$on("click",n[7]),{c(){e=y("div"),i=y("u"),t=V("Cross-section #"),o=V(c),s=P(),A(f.$$.fragment),W=P(),A(g.$$.fragment),b=P(),h&&h.c(),d=P(),A(w.$$.fragment),this.h()},l(a){e=D(a,"DIV",{class:!0});var u=Q(e);i=D(u,"U",{});var q=Q(i);t=z(q,"Cross-section #"),o=z(q,c),q.forEach(p),s=S(u),L(f.$$.fragment,u),W=S(u),L(g.$$.fragment,u),b=S(u),h&&h.l(u),d=S(u),L(w.$$.fragment,u),u.forEach(p),this.h()},h(){Ve(e,"class","svelte-zq957y")},m(a,u){_(a,e,u),M(e,i),M(i,t),M(i,o),M(e,s),E(f,e,null),M(e,W),E(g,e,null),M(e,b),h&&h.m(e,null),M(e,d),E(w,e,null),O=!0},p(a,[u]){(!O||u&1)&&c!==(c=a[0]+1+"")&&ge(o,c);const q={};!m&&u&9&&(m=!0,q.value=a[3].checks.homogeneousSections[a[0]].availableWidth,le(()=>m=!1)),f.$set(q);const C={};u&9&&(C.available=a[3].checks.homogeneousSections[a[0]].availableWidth),u&2&&(C.desirableTotal=a[1]),u&4&&(C.absoluteTotal=a[2]),g.$set(C),a[3].checks.homogeneousSections[a[0]].availableWidth<a[1]?h?(h.p(a,u),u&11&&k(h,1)):(h=qe(a),h.c(),k(h,1),h.m(e,d)):h&&(me(),T(h,1,1,()=>{h=null}),de());const $={};u&256&&($.$$scope={dirty:u,ctx:a}),w.$set($)},i(a){O||(k(f.$$.fragment,a),k(g.$$.fragment,a),k(h),k(w.$$.fragment,a),O=!0)},o(a){T(f.$$.fragment,a),T(g.$$.fragment,a),T(h),T(w.$$.fragment,a),O=!1},d(a){a&&p(e),I(f),I(g),h&&h.d(),I(w)}}}function xe(n,e,i){let t;$e(n,j,b=>i(3,t=b));let{i:c}=e,{desirableTotal:o}=e,{absoluteTotal:s}=e,f=ze();function m(b){n.$$.not_equal(t.checks.homogeneousSections[c].availableWidth,b)&&(t.checks.homogeneousSections[c].availableWidth=b,j.set(t))}function W(b){n.$$.not_equal(t.checks.homogeneousSections[c].notes,b)&&(t.checks.homogeneousSections[c].notes=b,j.set(t))}const g=()=>f("delete");return n.$$set=b=>{"i"in b&&i(0,c=b.i),"desirableTotal"in b&&i(1,o=b.desirableTotal),"absoluteTotal"in b&&i(2,s=b.absoluteTotal)},[c,o,s,t,f,m,W,g]}class et extends be{constructor(e){super(),_e(this,e,xe,Ze,pe,{i:0,desirableTotal:1,absoluteTotal:2})}}function Ae(n){let e,i,t;function c(s){n[7](s)}let o={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return n[3].checks.pinchPoints[n[0]].notes!==void 0&&(o.value=n[3].checks.pinchPoints[n[0]].notes),e=new Oe({props:o}),ie.push(()=>se(e,"value",c)),{c(){A(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,f){E(e,s,f),t=!0},p(s,f){const m={};!i&&f&9&&(i=!0,m.value=s[3].checks.pinchPoints[s[0]].notes,le(()=>i=!1)),e.$set(m)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function tt(n){let e;return{c(){e=V("Delete")},l(i){e=z(i,"Delete")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function nt(n){let e,i,t,c,o,s,f,m,W,g,b,d;function w(a){n[5](a)}let O={label:"Location of constraint"};n[3].checks.pinchPoints[n[0]].location!==void 0&&(O.value=n[3].checks.pinchPoints[n[0]].location),i=new Ue({props:O}),ie.push(()=>se(i,"value",w));function N(a){n[6](a)}let B={label:"Available width (m)",width:4,min:0};n[3].checks.pinchPoints[n[0]].availableWidth!==void 0&&(B.value=n[3].checks.pinchPoints[n[0]].availableWidth),o=new je({props:B}),ie.push(()=>se(o,"value",N)),m=new Ke({props:{available:n[3].checks.pinchPoints[n[0]].availableWidth,desirableTotal:n[1],absoluteTotal:n[2]}});let h=n[3].checks.pinchPoints[n[0]].availableWidth<n[1]&&Ae(n);return b=new Re({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),b.$on("click",n[8]),{c(){e=y("div"),A(i.$$.fragment),c=P(),A(o.$$.fragment),f=P(),A(m.$$.fragment),W=P(),h&&h.c(),g=P(),A(b.$$.fragment),this.h()},l(a){e=D(a,"DIV",{class:!0});var u=Q(e);L(i.$$.fragment,u),c=S(u),L(o.$$.fragment,u),f=S(u),L(m.$$.fragment,u),W=S(u),h&&h.l(u),g=S(u),L(b.$$.fragment,u),u.forEach(p),this.h()},h(){Ve(e,"class","svelte-zq957y")},m(a,u){_(a,e,u),E(i,e,null),M(e,c),E(o,e,null),M(e,f),E(m,e,null),M(e,W),h&&h.m(e,null),M(e,g),E(b,e,null),d=!0},p(a,[u]){const q={};!t&&u&9&&(t=!0,q.value=a[3].checks.pinchPoints[a[0]].location,le(()=>t=!1)),i.$set(q);const C={};!s&&u&9&&(s=!0,C.value=a[3].checks.pinchPoints[a[0]].availableWidth,le(()=>s=!1)),o.$set(C);const $={};u&9&&($.available=a[3].checks.pinchPoints[a[0]].availableWidth),u&2&&($.desirableTotal=a[1]),u&4&&($.absoluteTotal=a[2]),m.$set($),a[3].checks.pinchPoints[a[0]].availableWidth<a[1]?h?(h.p(a,u),u&11&&k(h,1)):(h=Ae(a),h.c(),k(h,1),h.m(e,g)):h&&(me(),T(h,1,1,()=>{h=null}),de());const Z={};u&512&&(Z.$$scope={dirty:u,ctx:a}),b.$set(Z)},i(a){d||(k(i.$$.fragment,a),k(o.$$.fragment,a),k(m.$$.fragment,a),k(h),k(b.$$.fragment,a),d=!0)},o(a){T(i.$$.fragment,a),T(o.$$.fragment,a),T(m.$$.fragment,a),T(h),T(b.$$.fragment,a),d=!1},d(a){a&&p(e),I(i),I(o),I(m),h&&h.d(),I(b)}}}function it(n,e,i){let t;$e(n,j,d=>i(3,t=d));let{i:c}=e,{desirableTotal:o}=e,{absoluteTotal:s}=e,f=ze();function m(d){n.$$.not_equal(t.checks.pinchPoints[c].location,d)&&(t.checks.pinchPoints[c].location=d,j.set(t))}function W(d){n.$$.not_equal(t.checks.pinchPoints[c].availableWidth,d)&&(t.checks.pinchPoints[c].availableWidth=d,j.set(t))}function g(d){n.$$.not_equal(t.checks.pinchPoints[c].notes,d)&&(t.checks.pinchPoints[c].notes=d,j.set(t))}const b=()=>f("delete");return n.$$set=d=>{"i"in d&&i(0,c=d.i),"desirableTotal"in d&&i(1,o=d.desirableTotal),"absoluteTotal"in d&&i(2,s=d.absoluteTotal)},[c,o,s,t,f,m,W,g,b]}class lt extends be{constructor(e){super(),_e(this,e,it,nt,pe,{i:0,desirableTotal:1,absoluteTotal:2})}}function Le(n,e,i){const t=n.slice();return t[9]=e[i],t[11]=i,t}function Ee(n,e,i){const t=n.slice();return t[9]=e[i],t[11]=i,t}function st(n){let e;return{c(){e=V("Add")},l(i){e=z(i,"Add")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function Ie(n,e){let i,t,c;function o(){return e[7](e[11])}return t=new et({props:{i:e[11],desirableTotal:e[2],absoluteTotal:e[1]}}),t.$on("delete",o),{key:n,first:null,c(){i=Y(),A(t.$$.fragment),this.h()},l(s){i=Y(),L(t.$$.fragment,s),this.h()},h(){this.first=i},m(s,f){_(s,i,f),E(t,s,f),c=!0},p(s,f){e=s;const m={};f&1&&(m.i=e[11]),f&4&&(m.desirableTotal=e[2]),f&2&&(m.absoluteTotal=e[1]),t.$set(m)},i(s){c||(k(t.$$.fragment,s),c=!0)},o(s){T(t.$$.fragment,s),c=!1},d(s){s&&p(i),I(t,s)}}}function ot(n){let e;return{c(){e=V("Add")},l(i){e=z(i,"Add")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function Be(n,e){let i,t,c;function o(){return e[8](e[11])}return t=new lt({props:{i:e[11],desirableTotal:e[2],absoluteTotal:e[1]}}),t.$on("delete",o),{key:n,first:null,c(){i=Y(),A(t.$$.fragment),this.h()},l(s){i=Y(),L(t.$$.fragment,s),this.h()},h(){this.first=i},m(s,f){_(s,i,f),E(t,s,f),c=!0},p(s,f){e=s;const m={};f&1&&(m.i=e[11]),f&4&&(m.desirableTotal=e[2]),f&2&&(m.absoluteTotal=e[1]),t.$set(m)},i(s){c||(k(t.$$.fragment,s),c=!0)},o(s){T(t.$$.fragment,s),c=!1},d(s){s&&p(i),I(t,s)}}}function at(n){let e,i,t,c,o,s,f,m,W,g,b,d,w,O=`Checking possible cross-sections of <u>homogeneous sections</u>
  of route along the proposed corridor`,N,B,h=`At regular intervals along the corridor measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,a,u,q,C,$=[],Z=new Map,oe,ae,re,U,ve=`Checking possible cross-sections of any <u>constrained or atypical locations</u>
  along the proposed corridor`,ce,F,ke=`At key constraints along the corridor, measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,ue,R,fe,K,H=[],Te=new Map,X;e=new Ne({props:{links:[["Tools","/"],["Route cross-section","/cross_section"]],current:"Cross-Section Check"}}),u=new ye({props:{$$slots:{default:[st]},$$scope:{ctx:n}}}),u.$on("click",n[3]);let x=he(n[0].checks.homogeneousSections);const we=l=>l[11];for(let l=0;l<x.length;l+=1){let r=Ee(n,x,l),v=we(r);Z.set(v,$[l]=Ie(v,r))}R=new ye({props:{$$slots:{default:[ot]},$$scope:{ctx:n}}}),R.$on("click",n[5]);let ee=he(n[0].checks.pinchPoints);const Pe=l=>l[11];for(let l=0;l<ee.length;l+=1){let r=Le(n,ee,l),v=Pe(r);Te.set(v,H[l]=Be(v,r))}return{c(){A(e.$$.fragment),i=P(),t=y("p"),c=V("Desirable Minimum requires: "),o=V(n[2]),s=V(" m"),f=P(),m=y("p"),W=V("Absolute Minimum requires: "),g=V(n[1]),b=V(" m"),d=P(),w=y("h2"),w.innerHTML=O,N=P(),B=y("p"),B.textContent=h,a=P(),A(u.$$.fragment),q=P(),C=y("div");for(let l=0;l<$.length;l+=1)$[l].c();oe=P(),ae=y("hr"),re=P(),U=y("h2"),U.innerHTML=ve,ce=P(),F=y("p"),F.textContent=ke,ue=P(),A(R.$$.fragment),fe=P(),K=y("div");for(let l=0;l<H.length;l+=1)H[l].c();this.h()},l(l){L(e.$$.fragment,l),i=S(l),t=D(l,"P",{});var r=Q(t);c=z(r,"Desirable Minimum requires: "),o=z(r,n[2]),s=z(r," m"),r.forEach(p),f=S(l),m=D(l,"P",{});var v=Q(m);W=z(v,"Absolute Minimum requires: "),g=z(v,n[1]),b=z(v," m"),v.forEach(p),d=S(l),w=D(l,"H2",{"data-svelte-h":!0}),J(w)!=="svelte-1x2x8kb"&&(w.innerHTML=O),N=S(l),B=D(l,"P",{"data-svelte-h":!0}),J(B)!=="svelte-x0c18j"&&(B.textContent=h),a=S(l),L(u.$$.fragment,l),q=S(l),C=D(l,"DIV",{style:!0});var te=Q(C);for(let G=0;G<$.length;G+=1)$[G].l(te);te.forEach(p),oe=S(l),ae=D(l,"HR",{}),re=S(l),U=D(l,"H2",{"data-svelte-h":!0}),J(U)!=="svelte-1m1bgig"&&(U.innerHTML=ve),ce=S(l),F=D(l,"P",{"data-svelte-h":!0}),J(F)!=="svelte-bdzwl6"&&(F.textContent=ke),ue=S(l),L(R.$$.fragment,l),fe=S(l),K=D(l,"DIV",{style:!0});var Se=Q(K);for(let G=0;G<H.length;G+=1)H[G].l(Se);Se.forEach(p),this.h()},h(){ne(C,"display","flex"),ne(C,"flex-direction","row"),ne(C,"overflow-x","scroll"),ne(K,"display","flex"),ne(K,"flex-direction","row: overflow-x: scroll")},m(l,r){E(e,l,r),_(l,i,r),_(l,t,r),M(t,c),M(t,o),M(t,s),_(l,f,r),_(l,m,r),M(m,W),M(m,g),M(m,b),_(l,d,r),_(l,w,r),_(l,N,r),_(l,B,r),_(l,a,r),E(u,l,r),_(l,q,r),_(l,C,r);for(let v=0;v<$.length;v+=1)$[v]&&$[v].m(C,null);_(l,oe,r),_(l,ae,r),_(l,re,r),_(l,U,r),_(l,ce,r),_(l,F,r),_(l,ue,r),E(R,l,r),_(l,fe,r),_(l,K,r);for(let v=0;v<H.length;v+=1)H[v]&&H[v].m(K,null);X=!0},p(l,[r]){(!X||r&4)&&ge(o,l[2]),(!X||r&2)&&ge(g,l[1]);const v={};r&8192&&(v.$$scope={dirty:r,ctx:l}),u.$set(v),r&23&&(x=he(l[0].checks.homogeneousSections),me(),$=Me($,r,we,1,l,x,Z,C,He,Ie,null,Ee),de());const te={};r&8192&&(te.$$scope={dirty:r,ctx:l}),R.$set(te),r&71&&(ee=he(l[0].checks.pinchPoints),me(),H=Me(H,r,Pe,1,l,ee,Te,K,He,Be,null,Le),de())},i(l){if(!X){k(e.$$.fragment,l),k(u.$$.fragment,l);for(let r=0;r<x.length;r+=1)k($[r]);k(R.$$.fragment,l);for(let r=0;r<ee.length;r+=1)k(H[r]);X=!0}},o(l){T(e.$$.fragment,l),T(u.$$.fragment,l);for(let r=0;r<$.length;r+=1)T($[r]);T(R.$$.fragment,l);for(let r=0;r<H.length;r+=1)T(H[r]);X=!1},d(l){l&&(p(i),p(t),p(f),p(m),p(d),p(w),p(N),p(B),p(a),p(q),p(C),p(oe),p(ae),p(re),p(U),p(ce),p(F),p(ue),p(fe),p(K)),I(e,l),I(u,l);for(let r=0;r<$.length;r+=1)$[r].d();I(R,l);for(let r=0;r<H.length;r+=1)H[r].d()}}}function rt(n,e,i){let t,c,o;$e(n,j,d=>i(0,o=d));function s(){Ce(j,o.checks.homogeneousSections=[...o.checks.homogeneousSections,{availableWidth:0,notes:""}],o)}function f(d){o.checks.homogeneousSections.splice(d,1),j.set(o)}function m(){Ce(j,o.checks.pinchPoints=[...o.checks.pinchPoints,{location:"",availableWidth:0,notes:""}],o)}function W(d){o.checks.pinchPoints.splice(d,1),j.set(o)}const g=d=>f(d),b=d=>W(d);return n.$$.update=()=>{n.$$.dirty&1&&i(2,t=De(o,"Desirable")),n.$$.dirty&1&&i(1,c=De(o,"Absolute"))},[o,c,t,s,f,m,W,g,b]}class vt extends be{constructor(e){super(),_e(this,e,rt,at,pe,{})}}export{vt as component};
