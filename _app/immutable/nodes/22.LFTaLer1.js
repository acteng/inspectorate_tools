import{s as _e,y as Y,i as b,n as We,f as _,e as y,c as D,l as J,w as ie,t as V,a as W,b as Q,d as j,g as C,o as Ve,h as M,j as ge,x as le,k as ve,a4 as je,K as ne,p as Ce}from"../chunks/scheduler.BKca8jgz.js";import{S as pe,i as be,e as se,c as L,a as E,m as I,t as k,g as me,b as P,f as de,d as F}from"../chunks/index.CFqagxlr.js";import{e as he,u as Me,o as He}from"../chunks/Geocoder.svelte_svelte_type_style_lang.CLPLPTv_.js";import{S as ye}from"../chunks/SecondaryButton.4UiulqFF.js";import{s as B}from"../chunks/data.CEycfqhM.js";import"../chunks/paths.DGjfiNGK.js";import{D as Be,c as De}from"../chunks/logic.DH8WPo0H.js";import{T as Oe}from"../chunks/TextArea.BfFYyba3.js";import{W as ze}from"../chunks/WarningButton.Bz3oz85x.js";import{T as Ne}from"../chunks/TextInput.8KqWp6jK.js";function Re(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--red">Insufficient Space</strong>';return{c(){e=y("p"),e.innerHTML=i},l(t){e=D(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-sq6dx9"&&(e.innerHTML=i)},m(t,c){b(t,e,c)},d(t){t&&_(e)}}}function Ue(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--yellow">Absolute Minimum</strong>';return{c(){e=y("p"),e.innerHTML=i},l(t){e=D(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-r0abhc"&&(e.innerHTML=i)},m(t,c){b(t,e,c)},d(t){t&&_(e)}}}function Ge(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--green">Desirable Minimum</strong>';return{c(){e=y("p"),e.innerHTML=i},l(t){e=D(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-1t7o0lp"&&(e.innerHTML=i)},m(t,c){b(t,e,c)},d(t){t&&_(e)}}}function Je(n){let e;function i(a,l){return a[0]>=a[1]?Ge:a[0]>a[2]?Ue:Re}let t=i(n),c=t(n);return{c(){c.c(),e=Y()},l(a){c.l(a),e=Y()},m(a,l){c.m(a,l),b(a,e,l)},p(a,[l]){t!==(t=i(a))&&(c.d(1),c=t(a),c&&(c.c(),c.m(e.parentNode,e)))},i:We,o:We,d(a){a&&_(e),c.d(a)}}}function Qe(n,e,i){let{available:t}=e,{desirableTotal:c}=e,{absoluteTotal:a}=e;return n.$$set=l=>{"available"in l&&i(0,t=l.available),"desirableTotal"in l&&i(1,c=l.desirableTotal),"absoluteTotal"in l&&i(2,a=l.absoluteTotal)},[t,c,a]}class Ke extends pe{constructor(e){super(),be(this,e,Qe,Je,_e,{available:0,desirableTotal:1,absoluteTotal:2})}}function Ae(n){let e,i,t;function c(l){n[6](l)}let a={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return n[3].checks.homogeneousSections[n[0]].notes!==void 0&&(a.value=n[3].checks.homogeneousSections[n[0]].notes),e=new Oe({props:a}),ie.push(()=>se(e,"value",c)),{c(){L(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,f){I(e,l,f),t=!0},p(l,f){const d={};!i&&f&9&&(i=!0,d.value=l[3].checks.homogeneousSections[l[0]].notes,le(()=>i=!1)),e.$set(d)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){P(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Xe(n){let e;return{c(){e=V("Delete")},l(i){e=j(i,"Delete")},m(i,t){b(i,e,t)},d(i){i&&_(e)}}}function Ye(n){let e,i,t,c=n[0]+1+"",a,l,f,d,T,g,p,m,w,O;function N(o){n[5](o)}let q={label:"Available width (m)",width:4,min:0};n[3].checks.homogeneousSections[n[0]].availableWidth!==void 0&&(q.value=n[3].checks.homogeneousSections[n[0]].availableWidth),f=new Be({props:q}),ie.push(()=>se(f,"value",N)),g=new Ke({props:{available:n[3].checks.homogeneousSections[n[0]].availableWidth,desirableTotal:n[1],absoluteTotal:n[2]}});let h=n[3].checks.homogeneousSections[n[0]].availableWidth<n[1]&&Ae(n);return w=new ze({props:{$$slots:{default:[Xe]},$$scope:{ctx:n}}}),w.$on("click",n[7]),{c(){e=y("div"),i=y("u"),t=V("Cross-section #"),a=V(c),l=W(),L(f.$$.fragment),T=W(),L(g.$$.fragment),p=W(),h&&h.c(),m=W(),L(w.$$.fragment),this.h()},l(o){e=D(o,"DIV",{class:!0});var u=Q(e);i=D(u,"U",{});var A=Q(i);t=j(A,"Cross-section #"),a=j(A,c),A.forEach(_),l=C(u),E(f.$$.fragment,u),T=C(u),E(g.$$.fragment,u),p=C(u),h&&h.l(u),m=C(u),E(w.$$.fragment,u),u.forEach(_),this.h()},h(){Ve(e,"class","svelte-d4ufy0")},m(o,u){b(o,e,u),M(e,i),M(i,t),M(i,a),M(e,l),I(f,e,null),M(e,T),I(g,e,null),M(e,p),h&&h.m(e,null),M(e,m),I(w,e,null),O=!0},p(o,[u]){(!O||u&1)&&c!==(c=o[0]+1+"")&&ge(a,c);const A={};!d&&u&9&&(d=!0,A.value=o[3].checks.homogeneousSections[o[0]].availableWidth,le(()=>d=!1)),f.$set(A);const S={};u&9&&(S.available=o[3].checks.homogeneousSections[o[0]].availableWidth),u&2&&(S.desirableTotal=o[1]),u&4&&(S.absoluteTotal=o[2]),g.$set(S),o[3].checks.homogeneousSections[o[0]].availableWidth<o[1]?h?(h.p(o,u),u&11&&k(h,1)):(h=Ae(o),h.c(),k(h,1),h.m(e,m)):h&&(me(),P(h,1,1,()=>{h=null}),de());const v={};u&256&&(v.$$scope={dirty:u,ctx:o}),w.$set(v)},i(o){O||(k(f.$$.fragment,o),k(g.$$.fragment,o),k(h),k(w.$$.fragment,o),O=!0)},o(o){P(f.$$.fragment,o),P(g.$$.fragment,o),P(h),P(w.$$.fragment,o),O=!1},d(o){o&&_(e),F(f),F(g),h&&h.d(),F(w)}}}function Ze(n,e,i){let t;ve(n,B,p=>i(3,t=p));let{i:c}=e,{desirableTotal:a}=e,{absoluteTotal:l}=e,f=je();function d(p){n.$$.not_equal(t.checks.homogeneousSections[c].availableWidth,p)&&(t.checks.homogeneousSections[c].availableWidth=p,B.set(t))}function T(p){n.$$.not_equal(t.checks.homogeneousSections[c].notes,p)&&(t.checks.homogeneousSections[c].notes=p,B.set(t))}const g=()=>f("delete");return n.$$set=p=>{"i"in p&&i(0,c=p.i),"desirableTotal"in p&&i(1,a=p.desirableTotal),"absoluteTotal"in p&&i(2,l=p.absoluteTotal)},[c,a,l,t,f,d,T,g]}class xe extends pe{constructor(e){super(),be(this,e,Ze,Ye,_e,{i:0,desirableTotal:1,absoluteTotal:2})}}function qe(n){let e,i,t;function c(l){n[7](l)}let a={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return n[3].checks.pinchPoints[n[0]].notes!==void 0&&(a.value=n[3].checks.pinchPoints[n[0]].notes),e=new Oe({props:a}),ie.push(()=>se(e,"value",c)),{c(){L(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,f){I(e,l,f),t=!0},p(l,f){const d={};!i&&f&9&&(i=!0,d.value=l[3].checks.pinchPoints[l[0]].notes,le(()=>i=!1)),e.$set(d)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){P(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function et(n){let e;return{c(){e=V("Delete")},l(i){e=j(i,"Delete")},m(i,t){b(i,e,t)},d(i){i&&_(e)}}}function tt(n){let e,i,t,c,a,l,f,d,T,g,p,m;function w(o){n[5](o)}let O={label:"Location of constraint"};n[3].checks.pinchPoints[n[0]].location!==void 0&&(O.value=n[3].checks.pinchPoints[n[0]].location),i=new Ne({props:O}),ie.push(()=>se(i,"value",w));function N(o){n[6](o)}let q={label:"Available width (m)",width:4,min:0};n[3].checks.pinchPoints[n[0]].availableWidth!==void 0&&(q.value=n[3].checks.pinchPoints[n[0]].availableWidth),a=new Be({props:q}),ie.push(()=>se(a,"value",N)),d=new Ke({props:{available:n[3].checks.pinchPoints[n[0]].availableWidth,desirableTotal:n[1],absoluteTotal:n[2]}});let h=n[3].checks.pinchPoints[n[0]].availableWidth<n[1]&&qe(n);return p=new ze({props:{$$slots:{default:[et]},$$scope:{ctx:n}}}),p.$on("click",n[8]),{c(){e=y("div"),L(i.$$.fragment),c=W(),L(a.$$.fragment),f=W(),L(d.$$.fragment),T=W(),h&&h.c(),g=W(),L(p.$$.fragment),this.h()},l(o){e=D(o,"DIV",{class:!0});var u=Q(e);E(i.$$.fragment,u),c=C(u),E(a.$$.fragment,u),f=C(u),E(d.$$.fragment,u),T=C(u),h&&h.l(u),g=C(u),E(p.$$.fragment,u),u.forEach(_),this.h()},h(){Ve(e,"class","svelte-d4ufy0")},m(o,u){b(o,e,u),I(i,e,null),M(e,c),I(a,e,null),M(e,f),I(d,e,null),M(e,T),h&&h.m(e,null),M(e,g),I(p,e,null),m=!0},p(o,[u]){const A={};!t&&u&9&&(t=!0,A.value=o[3].checks.pinchPoints[o[0]].location,le(()=>t=!1)),i.$set(A);const S={};!l&&u&9&&(l=!0,S.value=o[3].checks.pinchPoints[o[0]].availableWidth,le(()=>l=!1)),a.$set(S);const v={};u&9&&(v.available=o[3].checks.pinchPoints[o[0]].availableWidth),u&2&&(v.desirableTotal=o[1]),u&4&&(v.absoluteTotal=o[2]),d.$set(v),o[3].checks.pinchPoints[o[0]].availableWidth<o[1]?h?(h.p(o,u),u&11&&k(h,1)):(h=qe(o),h.c(),k(h,1),h.m(e,g)):h&&(me(),P(h,1,1,()=>{h=null}),de());const Z={};u&512&&(Z.$$scope={dirty:u,ctx:o}),p.$set(Z)},i(o){m||(k(i.$$.fragment,o),k(a.$$.fragment,o),k(d.$$.fragment,o),k(h),k(p.$$.fragment,o),m=!0)},o(o){P(i.$$.fragment,o),P(a.$$.fragment,o),P(d.$$.fragment,o),P(h),P(p.$$.fragment,o),m=!1},d(o){o&&_(e),F(i),F(a),F(d),h&&h.d(),F(p)}}}function nt(n,e,i){let t;ve(n,B,m=>i(3,t=m));let{i:c}=e,{desirableTotal:a}=e,{absoluteTotal:l}=e,f=je();function d(m){n.$$.not_equal(t.checks.pinchPoints[c].location,m)&&(t.checks.pinchPoints[c].location=m,B.set(t))}function T(m){n.$$.not_equal(t.checks.pinchPoints[c].availableWidth,m)&&(t.checks.pinchPoints[c].availableWidth=m,B.set(t))}function g(m){n.$$.not_equal(t.checks.pinchPoints[c].notes,m)&&(t.checks.pinchPoints[c].notes=m,B.set(t))}const p=()=>f("delete");return n.$$set=m=>{"i"in m&&i(0,c=m.i),"desirableTotal"in m&&i(1,a=m.desirableTotal),"absoluteTotal"in m&&i(2,l=m.absoluteTotal)},[c,a,l,t,f,d,T,g,p]}class it extends pe{constructor(e){super(),be(this,e,nt,tt,_e,{i:0,desirableTotal:1,absoluteTotal:2})}}function Le(n,e,i){const t=n.slice();return t[9]=e[i],t[11]=i,t}function Ee(n,e,i){const t=n.slice();return t[9]=e[i],t[11]=i,t}function lt(n){let e;return{c(){e=V("Add")},l(i){e=j(i,"Add")},m(i,t){b(i,e,t)},d(i){i&&_(e)}}}function Ie(n,e){let i,t,c;function a(){return e[7](e[11])}return t=new xe({props:{i:e[11],desirableTotal:e[2],absoluteTotal:e[1]}}),t.$on("delete",a),{key:n,first:null,c(){i=Y(),L(t.$$.fragment),this.h()},l(l){i=Y(),E(t.$$.fragment,l),this.h()},h(){this.first=i},m(l,f){b(l,i,f),I(t,l,f),c=!0},p(l,f){e=l;const d={};f&1&&(d.i=e[11]),f&4&&(d.desirableTotal=e[2]),f&2&&(d.absoluteTotal=e[1]),t.$set(d)},i(l){c||(k(t.$$.fragment,l),c=!0)},o(l){P(t.$$.fragment,l),c=!1},d(l){l&&_(i),F(t,l)}}}function st(n){let e;return{c(){e=V("Add")},l(i){e=j(i,"Add")},m(i,t){b(i,e,t)},d(i){i&&_(e)}}}function Fe(n,e){let i,t,c;function a(){return e[8](e[11])}return t=new it({props:{i:e[11],desirableTotal:e[2],absoluteTotal:e[1]}}),t.$on("delete",a),{key:n,first:null,c(){i=Y(),L(t.$$.fragment),this.h()},l(l){i=Y(),E(t.$$.fragment,l),this.h()},h(){this.first=i},m(l,f){b(l,i,f),I(t,l,f),c=!0},p(l,f){e=l;const d={};f&1&&(d.i=e[11]),f&4&&(d.desirableTotal=e[2]),f&2&&(d.absoluteTotal=e[1]),t.$set(d)},i(l){c||(k(t.$$.fragment,l),c=!0)},o(l){P(t.$$.fragment,l),c=!1},d(l){l&&_(i),F(t,l)}}}function ot(n){let e,i,t=n[2].toFixed(2)+"",c,a,l,f,d,T=n[1].toFixed(2)+"",g,p,m,w,O=`Checking possible cross-sections of <u>homogeneous sections</u>
  of route along the proposed corridor`,N,q,h=`At regular intervals along the corridor measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,o,u,A,S,v=[],Z=new Map,oe,ae,re,R,$e=`Checking possible cross-sections of any <u>constrained or atypical locations</u>
  along the proposed corridor`,ce,U,ke=`At key constraints along the corridor, measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,ue,z,fe,K,H=[],Te=new Map,X;u=new ye({props:{$$slots:{default:[lt]},$$scope:{ctx:n}}}),u.$on("click",n[3]);let x=he(n[0].checks.homogeneousSections);const we=s=>s[11];for(let s=0;s<x.length;s+=1){let r=Ee(n,x,s),$=we(r);Z.set($,v[s]=Ie($,r))}z=new ye({props:{$$slots:{default:[st]},$$scope:{ctx:n}}}),z.$on("click",n[5]);let ee=he(n[0].checks.pinchPoints);const Pe=s=>s[11];for(let s=0;s<ee.length;s+=1){let r=Le(n,ee,s),$=Pe(r);Te.set($,H[s]=Fe($,r))}return{c(){e=y("p"),i=V("Desirable Minimum requires: "),c=V(t),a=V(" m"),l=W(),f=y("p"),d=V("Absolute Minimum requires: "),g=V(T),p=V(" m"),m=W(),w=y("h2"),w.innerHTML=O,N=W(),q=y("p"),q.textContent=h,o=W(),L(u.$$.fragment),A=W(),S=y("div");for(let s=0;s<v.length;s+=1)v[s].c();oe=W(),ae=y("hr"),re=W(),R=y("h2"),R.innerHTML=$e,ce=W(),U=y("p"),U.textContent=ke,ue=W(),L(z.$$.fragment),fe=W(),K=y("div");for(let s=0;s<H.length;s+=1)H[s].c();this.h()},l(s){e=D(s,"P",{});var r=Q(e);i=j(r,"Desirable Minimum requires: "),c=j(r,t),a=j(r," m"),r.forEach(_),l=C(s),f=D(s,"P",{});var $=Q(f);d=j($,"Absolute Minimum requires: "),g=j($,T),p=j($," m"),$.forEach(_),m=C(s),w=D(s,"H2",{"data-svelte-h":!0}),J(w)!=="svelte-1x2x8kb"&&(w.innerHTML=O),N=C(s),q=D(s,"P",{"data-svelte-h":!0}),J(q)!=="svelte-x0c18j"&&(q.textContent=h),o=C(s),E(u.$$.fragment,s),A=C(s),S=D(s,"DIV",{style:!0});var te=Q(S);for(let G=0;G<v.length;G+=1)v[G].l(te);te.forEach(_),oe=C(s),ae=D(s,"HR",{}),re=C(s),R=D(s,"H2",{"data-svelte-h":!0}),J(R)!=="svelte-1m1bgig"&&(R.innerHTML=$e),ce=C(s),U=D(s,"P",{"data-svelte-h":!0}),J(U)!=="svelte-bdzwl6"&&(U.textContent=ke),ue=C(s),E(z.$$.fragment,s),fe=C(s),K=D(s,"DIV",{style:!0});var Se=Q(K);for(let G=0;G<H.length;G+=1)H[G].l(Se);Se.forEach(_),this.h()},h(){ne(S,"display","flex"),ne(S,"flex-direction","row"),ne(S,"overflow-x","scroll"),ne(K,"display","flex"),ne(K,"flex-direction","row: overflow-x: scroll")},m(s,r){b(s,e,r),M(e,i),M(e,c),M(e,a),b(s,l,r),b(s,f,r),M(f,d),M(f,g),M(f,p),b(s,m,r),b(s,w,r),b(s,N,r),b(s,q,r),b(s,o,r),I(u,s,r),b(s,A,r),b(s,S,r);for(let $=0;$<v.length;$+=1)v[$]&&v[$].m(S,null);b(s,oe,r),b(s,ae,r),b(s,re,r),b(s,R,r),b(s,ce,r),b(s,U,r),b(s,ue,r),I(z,s,r),b(s,fe,r),b(s,K,r);for(let $=0;$<H.length;$+=1)H[$]&&H[$].m(K,null);X=!0},p(s,[r]){(!X||r&4)&&t!==(t=s[2].toFixed(2)+"")&&ge(c,t),(!X||r&2)&&T!==(T=s[1].toFixed(2)+"")&&ge(g,T);const $={};r&8192&&($.$$scope={dirty:r,ctx:s}),u.$set($),r&23&&(x=he(s[0].checks.homogeneousSections),me(),v=Me(v,r,we,1,s,x,Z,S,He,Ie,null,Ee),de());const te={};r&8192&&(te.$$scope={dirty:r,ctx:s}),z.$set(te),r&71&&(ee=he(s[0].checks.pinchPoints),me(),H=Me(H,r,Pe,1,s,ee,Te,K,He,Fe,null,Le),de())},i(s){if(!X){k(u.$$.fragment,s);for(let r=0;r<x.length;r+=1)k(v[r]);k(z.$$.fragment,s);for(let r=0;r<ee.length;r+=1)k(H[r]);X=!0}},o(s){P(u.$$.fragment,s);for(let r=0;r<v.length;r+=1)P(v[r]);P(z.$$.fragment,s);for(let r=0;r<H.length;r+=1)P(H[r]);X=!1},d(s){s&&(_(e),_(l),_(f),_(m),_(w),_(N),_(q),_(o),_(A),_(S),_(oe),_(ae),_(re),_(R),_(ce),_(U),_(ue),_(fe),_(K)),F(u,s);for(let r=0;r<v.length;r+=1)v[r].d();F(z,s);for(let r=0;r<H.length;r+=1)H[r].d()}}}function at(n,e,i){let t,c,a;ve(n,B,m=>i(0,a=m));function l(){Ce(B,a.checks.homogeneousSections=[...a.checks.homogeneousSections,{availableWidth:0,notes:""}],a)}function f(m){a.checks.homogeneousSections.splice(m,1),B.set(a)}function d(){Ce(B,a.checks.pinchPoints=[...a.checks.pinchPoints,{location:"",availableWidth:0,notes:""}],a)}function T(m){a.checks.pinchPoints.splice(m,1),B.set(a)}const g=m=>f(m),p=m=>T(m);return n.$$.update=()=>{n.$$.dirty&1&&i(2,t=De(a,"Desirable")),n.$$.dirty&1&&i(1,c=De(a,"Absolute"))},[a,c,t,l,f,d,T,g,p]}class gt extends pe{constructor(e){super(),be(this,e,at,ot,_e,{})}}export{gt as component};
