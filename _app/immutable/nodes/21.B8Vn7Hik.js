import{s as re,w as te,i as _,n as he,d as p,e as O,b as R,g as Y,r as Z,t as ne,a as k,f as ie,h as se,c as T,o as Pe,j as V,y as He,v as x,k as fe,a4 as Se,K as ae,l as me}from"../chunks/scheduler.8Pqdtq9W.js";import{S as ce,i as ue,e as ee,c as y,a as H,m as M,t as S,b as W,d as D,f as de,g as pe}from"../chunks/index.KrNxZzBh.js";import{B as Me,e as oe,u as ge,o as _e}from"../chunks/Geocoder.svelte_svelte_type_style_lang.JA363ikK.js";import{S as be}from"../chunks/SecondaryButton.CctJSiA9.js";import{s as E}from"../chunks/data.DhlDRbOc.js";import"../chunks/paths.DxtUT9aa.js";import{D as We,c as $e}from"../chunks/logic.BnJPKzaS.js";import{T as le}from"../chunks/TextArea.CjICvxNC.js";import{W as Ce}from"../chunks/WarningButton.Cyr2mll2.js";import{T as De}from"../chunks/TextInput.CSx64iaK.js";function Ae(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--red">Insufficient Space</strong>';return{c(){e=O("p"),e.innerHTML=i},l(t){e=R(t,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-sq6dx9"&&(e.innerHTML=i)},m(t,o){_(t,e,o)},d(t){t&&p(e)}}}function Le(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--yellow">Absolute Minimum</strong>';return{c(){e=O("p"),e.innerHTML=i},l(t){e=R(t,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-r0abhc"&&(e.innerHTML=i)},m(t,o){_(t,e,o)},d(t){t&&p(e)}}}function qe(n){let e,i='Cross sections possible: <strong class="govuk-tag govuk-tag--green">Desirable Minimum</strong>';return{c(){e=O("p"),e.innerHTML=i},l(t){e=R(t,"P",{"data-svelte-h":!0}),Y(e)!=="svelte-1t7o0lp"&&(e.innerHTML=i)},m(t,o){_(t,e,o)},d(t){t&&p(e)}}}function Ie(n){let e;function i(l,r){return l[0]>=l[1]?qe:l[0]>l[2]?Le:Ae}let t=i(n),o=t(n);return{c(){o.c(),e=te()},l(l){o.l(l),e=te()},m(l,r){o.m(l,r),_(l,e,r)},p(l,[r]){t!==(t=i(l))&&(o.d(1),o=t(l),o&&(o.c(),o.m(e.parentNode,e)))},i:he,o:he,d(l){l&&p(e),o.d(l)}}}function Ee(n,e,i){let{available:t}=e,{desirableTotal:o}=e,{absoluteTotal:l}=e;return n.$$set=r=>{"available"in r&&i(0,t=r.available),"desirableTotal"in r&&i(1,o=r.desirableTotal),"absoluteTotal"in r&&i(2,l=r.absoluteTotal)},[t,o,l]}class ye extends ce{constructor(e){super(),ue(this,e,Ee,Ie,re,{available:0,desirableTotal:1,absoluteTotal:2})}}function je(n){let e;return{c(){e=ne("Delete")},l(i){e=se(i,"Delete")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function Be(n){let e,i,t,o=n[0]+1+"",l,r,h,d,b,g,$,u,m,z,w,P,C,q,j;function K(s){n[5](s)}let G={label:"Available width (m)",width:4,min:0};n[3].checks.homogeneousSections[n[0]].availableWidth!==void 0&&(G.value=n[3].checks.homogeneousSections[n[0]].availableWidth),h=new We({props:G}),Z.push(()=>ee(h,"value",K)),g=new ye({props:{available:n[3].checks.homogeneousSections[n[0]].availableWidth,desirableTotal:n[1],absoluteTotal:n[2]}});function J(s){n[6](s)}let A={label:"What will need to change to fit this in? Please leave a justification if space has been taken away from pedestrians or cyclists, or if shared use cycle tracks are proposed."};n[3].checks.homogeneousSections[n[0]].notes1!==void 0&&(A.value=n[3].checks.homogeneousSections[n[0]].notes1),u=new le({props:A}),Z.push(()=>ee(u,"value",J));function Q(s){n[7](s)}let L={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return n[3].checks.homogeneousSections[n[0]].notes2!==void 0&&(L.value=n[3].checks.homogeneousSections[n[0]].notes2),w=new le({props:L}),Z.push(()=>ee(w,"value",Q)),q=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:n}}}),q.$on("click",n[8]),{c(){e=O("div"),i=O("u"),t=ne("Cross-section #"),l=ne(o),r=k(),y(h.$$.fragment),b=k(),y(g.$$.fragment),$=k(),y(u.$$.fragment),z=k(),y(w.$$.fragment),C=k(),y(q.$$.fragment),this.h()},l(s){e=R(s,"DIV",{class:!0});var f=ie(e);i=R(f,"U",{});var I=ie(i);t=se(I,"Cross-section #"),l=se(I,o),I.forEach(p),r=T(f),H(h.$$.fragment,f),b=T(f),H(g.$$.fragment,f),$=T(f),H(u.$$.fragment,f),z=T(f),H(w.$$.fragment,f),C=T(f),H(q.$$.fragment,f),f.forEach(p),this.h()},h(){Pe(e,"class","svelte-d3f4io")},m(s,f){_(s,e,f),V(e,i),V(i,t),V(i,l),V(e,r),M(h,e,null),V(e,b),M(g,e,null),V(e,$),M(u,e,null),V(e,z),M(w,e,null),V(e,C),M(q,e,null),j=!0},p(s,[f]){(!j||f&1)&&o!==(o=s[0]+1+"")&&He(l,o);const I={};!d&&f&9&&(d=!0,I.value=s[3].checks.homogeneousSections[s[0]].availableWidth,x(()=>d=!1)),h.$set(I);const B={};f&9&&(B.available=s[3].checks.homogeneousSections[s[0]].availableWidth),f&2&&(B.desirableTotal=s[1]),f&4&&(B.absoluteTotal=s[2]),g.$set(B);const U={};!m&&f&9&&(m=!0,U.value=s[3].checks.homogeneousSections[s[0]].notes1,x(()=>m=!1)),u.$set(U);const N={};!P&&f&9&&(P=!0,N.value=s[3].checks.homogeneousSections[s[0]].notes2,x(()=>P=!1)),w.$set(N);const X={};f&512&&(X.$$scope={dirty:f,ctx:s}),q.$set(X)},i(s){j||(S(h.$$.fragment,s),S(g.$$.fragment,s),S(u.$$.fragment,s),S(w.$$.fragment,s),S(q.$$.fragment,s),j=!0)},o(s){W(h.$$.fragment,s),W(g.$$.fragment,s),W(u.$$.fragment,s),W(w.$$.fragment,s),W(q.$$.fragment,s),j=!1},d(s){s&&p(e),D(h),D(g),D(u),D(w),D(q)}}}function Ve(n,e,i){let t;fe(n,E,u=>i(3,t=u));let{i:o}=e,{desirableTotal:l}=e,{absoluteTotal:r}=e,h=Se();function d(u){n.$$.not_equal(t.checks.homogeneousSections[o].availableWidth,u)&&(t.checks.homogeneousSections[o].availableWidth=u,E.set(t))}function b(u){n.$$.not_equal(t.checks.homogeneousSections[o].notes1,u)&&(t.checks.homogeneousSections[o].notes1=u,E.set(t))}function g(u){n.$$.not_equal(t.checks.homogeneousSections[o].notes2,u)&&(t.checks.homogeneousSections[o].notes2=u,E.set(t))}const $=()=>h("delete");return n.$$set=u=>{"i"in u&&i(0,o=u.i),"desirableTotal"in u&&i(1,l=u.desirableTotal),"absoluteTotal"in u&&i(2,r=u.absoluteTotal)},[o,l,r,t,h,d,b,g,$]}class Oe extends ce{constructor(e){super(),ue(this,e,Ve,Be,re,{i:0,desirableTotal:1,absoluteTotal:2})}}function Re(n){let e;return{c(){e=ne("Delete")},l(i){e=se(i,"Delete")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function ze(n){let e,i,t,o,l,r,h,d,b,g,$,u,m,z,w,P,C;function q(s){n[5](s)}let j={label:"Location of constraint"};n[3].checks.pinchPoints[n[0]].location!==void 0&&(j.value=n[3].checks.pinchPoints[n[0]].location),i=new De({props:j}),Z.push(()=>ee(i,"value",q));function K(s){n[6](s)}let G={label:"Available width (m)",width:4,min:0};n[3].checks.pinchPoints[n[0]].availableWidth!==void 0&&(G.value=n[3].checks.pinchPoints[n[0]].availableWidth),l=new We({props:G}),Z.push(()=>ee(l,"value",K)),d=new ye({props:{available:n[3].checks.pinchPoints[n[0]].availableWidth,desirableTotal:n[1],absoluteTotal:n[2]}});function J(s){n[7](s)}let A={label:"What will need to change to fit this in? Please leave a justification if space has been taken away from pedestrians or cyclists, or if shared use cycle tracks are proposed."};n[3].checks.pinchPoints[n[0]].notes1!==void 0&&(A.value=n[3].checks.pinchPoints[n[0]].notes1),g=new le({props:A}),Z.push(()=>ee(g,"value",J));function Q(s){n[8](s)}let L={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return n[3].checks.pinchPoints[n[0]].notes2!==void 0&&(L.value=n[3].checks.pinchPoints[n[0]].notes2),m=new le({props:L}),Z.push(()=>ee(m,"value",Q)),P=new Ce({props:{$$slots:{default:[Re]},$$scope:{ctx:n}}}),P.$on("click",n[9]),{c(){e=O("div"),y(i.$$.fragment),o=k(),y(l.$$.fragment),h=k(),y(d.$$.fragment),b=k(),y(g.$$.fragment),u=k(),y(m.$$.fragment),w=k(),y(P.$$.fragment),this.h()},l(s){e=R(s,"DIV",{class:!0});var f=ie(e);H(i.$$.fragment,f),o=T(f),H(l.$$.fragment,f),h=T(f),H(d.$$.fragment,f),b=T(f),H(g.$$.fragment,f),u=T(f),H(m.$$.fragment,f),w=T(f),H(P.$$.fragment,f),f.forEach(p),this.h()},h(){Pe(e,"class","svelte-d3f4io")},m(s,f){_(s,e,f),M(i,e,null),V(e,o),M(l,e,null),V(e,h),M(d,e,null),V(e,b),M(g,e,null),V(e,u),M(m,e,null),V(e,w),M(P,e,null),C=!0},p(s,[f]){const I={};!t&&f&9&&(t=!0,I.value=s[3].checks.pinchPoints[s[0]].location,x(()=>t=!1)),i.$set(I);const B={};!r&&f&9&&(r=!0,B.value=s[3].checks.pinchPoints[s[0]].availableWidth,x(()=>r=!1)),l.$set(B);const U={};f&9&&(U.available=s[3].checks.pinchPoints[s[0]].availableWidth),f&2&&(U.desirableTotal=s[1]),f&4&&(U.absoluteTotal=s[2]),d.$set(U);const N={};!$&&f&9&&($=!0,N.value=s[3].checks.pinchPoints[s[0]].notes1,x(()=>$=!1)),g.$set(N);const X={};!z&&f&9&&(z=!0,X.value=s[3].checks.pinchPoints[s[0]].notes2,x(()=>z=!1)),m.$set(X);const a={};f&1024&&(a.$$scope={dirty:f,ctx:s}),P.$set(a)},i(s){C||(S(i.$$.fragment,s),S(l.$$.fragment,s),S(d.$$.fragment,s),S(g.$$.fragment,s),S(m.$$.fragment,s),S(P.$$.fragment,s),C=!0)},o(s){W(i.$$.fragment,s),W(l.$$.fragment,s),W(d.$$.fragment,s),W(g.$$.fragment,s),W(m.$$.fragment,s),W(P.$$.fragment,s),C=!1},d(s){s&&p(e),D(i),D(l),D(d),D(g),D(m),D(P)}}}function Ke(n,e,i){let t;fe(n,E,m=>i(3,t=m));let{i:o}=e,{desirableTotal:l}=e,{absoluteTotal:r}=e,h=Se();function d(m){n.$$.not_equal(t.checks.pinchPoints[o].location,m)&&(t.checks.pinchPoints[o].location=m,E.set(t))}function b(m){n.$$.not_equal(t.checks.pinchPoints[o].availableWidth,m)&&(t.checks.pinchPoints[o].availableWidth=m,E.set(t))}function g(m){n.$$.not_equal(t.checks.pinchPoints[o].notes1,m)&&(t.checks.pinchPoints[o].notes1=m,E.set(t))}function $(m){n.$$.not_equal(t.checks.pinchPoints[o].notes2,m)&&(t.checks.pinchPoints[o].notes2=m,E.set(t))}const u=()=>h("delete");return n.$$set=m=>{"i"in m&&i(0,o=m.i),"desirableTotal"in m&&i(1,l=m.desirableTotal),"absoluteTotal"in m&&i(2,r=m.absoluteTotal)},[o,l,r,t,h,d,b,g,$,u]}class Ne extends ce{constructor(e){super(),ue(this,e,Ke,ze,re,{i:0,desirableTotal:1,absoluteTotal:2})}}function ve(n,e,i){const t=n.slice();return t[9]=e[i],t[11]=i,t}function ke(n,e,i){const t=n.slice();return t[9]=e[i],t[11]=i,t}function Ue(n){let e;return{c(){e=ne("Add")},l(i){e=se(i,"Add")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function Te(n,e){let i,t,o;function l(){return e[7](e[11])}return t=new Oe({props:{i:e[11],desirableTotal:e[2],absoluteTotal:e[1]}}),t.$on("delete",l),{key:n,first:null,c(){i=te(),y(t.$$.fragment),this.h()},l(r){i=te(),H(t.$$.fragment,r),this.h()},h(){this.first=i},m(r,h){_(r,i,h),M(t,r,h),o=!0},p(r,h){e=r;const d={};h&1&&(d.i=e[11]),h&4&&(d.desirableTotal=e[2]),h&2&&(d.absoluteTotal=e[1]),t.$set(d)},i(r){o||(S(t.$$.fragment,r),o=!0)},o(r){W(t.$$.fragment,r),o=!1},d(r){r&&p(i),D(t,r)}}}function Fe(n){let e;return{c(){e=ne("Add")},l(i){e=se(i,"Add")},m(i,t){_(i,e,t)},d(i){i&&p(e)}}}function we(n,e){let i,t,o;function l(){return e[8](e[11])}return t=new Ne({props:{i:e[11],desirableTotal:e[2],absoluteTotal:e[1]}}),t.$on("delete",l),{key:n,first:null,c(){i=te(),y(t.$$.fragment),this.h()},l(r){i=te(),H(t.$$.fragment,r),this.h()},h(){this.first=i},m(r,h){_(r,i,h),M(t,r,h),o=!0},p(r,h){e=r;const d={};h&1&&(d.i=e[11]),h&4&&(d.desirableTotal=e[2]),h&2&&(d.absoluteTotal=e[1]),t.$set(d)},i(r){o||(S(t.$$.fragment,r),o=!0)},o(r){W(t.$$.fragment,r),o=!1},d(r){r&&p(i),D(t,r)}}}function Ge(n){let e,i,t,o=`Checking possible cross-sections of <u>homogeneous sections</u>
  of route along the proposed corridor`,l,r,h=`At regular intervals along the corridor measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,d,b,g,$,u=[],m=new Map,z,w,P,C,q=`Checking possible cross-sections of any <u>constrained or atypical locations</u>
  along the proposed corridor`,j,K,G=`At key constraints along the corridor, measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,J,A,Q,L,s=[],f=new Map,I;e=new Me({props:{links:[["Tools","/"],["Route cross-section","/cross_section"]],current:"Cross-Section Check"}}),b=new be({props:{$$slots:{default:[Ue]},$$scope:{ctx:n}}}),b.$on("click",n[3]);let B=oe(n[0].checks.homogeneousSections);const U=a=>a[11];for(let a=0;a<B.length;a+=1){let c=ke(n,B,a),v=U(c);m.set(v,u[a]=Te(v,c))}A=new be({props:{$$slots:{default:[Fe]},$$scope:{ctx:n}}}),A.$on("click",n[5]);let N=oe(n[0].checks.pinchPoints);const X=a=>a[11];for(let a=0;a<N.length;a+=1){let c=ve(n,N,a),v=X(c);f.set(v,s[a]=we(v,c))}return{c(){y(e.$$.fragment),i=k(),t=O("h2"),t.innerHTML=o,l=k(),r=O("p"),r.textContent=h,d=k(),y(b.$$.fragment),g=k(),$=O("div");for(let a=0;a<u.length;a+=1)u[a].c();z=k(),w=O("hr"),P=k(),C=O("h2"),C.innerHTML=q,j=k(),K=O("p"),K.textContent=G,J=k(),y(A.$$.fragment),Q=k(),L=O("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){H(e.$$.fragment,a),i=T(a),t=R(a,"H2",{"data-svelte-h":!0}),Y(t)!=="svelte-1x2x8kb"&&(t.innerHTML=o),l=T(a),r=R(a,"P",{"data-svelte-h":!0}),Y(r)!=="svelte-x0c18j"&&(r.textContent=h),d=T(a),H(b.$$.fragment,a),g=T(a),$=R(a,"DIV",{style:!0});var c=ie($);for(let F=0;F<u.length;F+=1)u[F].l(c);c.forEach(p),z=T(a),w=R(a,"HR",{}),P=T(a),C=R(a,"H2",{"data-svelte-h":!0}),Y(C)!=="svelte-1m1bgig"&&(C.innerHTML=q),j=T(a),K=R(a,"P",{"data-svelte-h":!0}),Y(K)!=="svelte-bdzwl6"&&(K.textContent=G),J=T(a),H(A.$$.fragment,a),Q=T(a),L=R(a,"DIV",{style:!0});var v=ie(L);for(let F=0;F<s.length;F+=1)s[F].l(v);v.forEach(p),this.h()},h(){ae($,"display","flex"),ae($,"flex-direction","row"),ae(L,"display","flex"),ae(L,"flex-direction","row")},m(a,c){M(e,a,c),_(a,i,c),_(a,t,c),_(a,l,c),_(a,r,c),_(a,d,c),M(b,a,c),_(a,g,c),_(a,$,c);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m($,null);_(a,z,c),_(a,w,c),_(a,P,c),_(a,C,c),_(a,j,c),_(a,K,c),_(a,J,c),M(A,a,c),_(a,Q,c),_(a,L,c);for(let v=0;v<s.length;v+=1)s[v]&&s[v].m(L,null);I=!0},p(a,[c]){const v={};c&8192&&(v.$$scope={dirty:c,ctx:a}),b.$set(v),c&23&&(B=oe(a[0].checks.homogeneousSections),pe(),u=ge(u,c,U,1,a,B,m,$,_e,Te,null,ke),de());const F={};c&8192&&(F.$$scope={dirty:c,ctx:a}),A.$set(F),c&71&&(N=oe(a[0].checks.pinchPoints),pe(),s=ge(s,c,X,1,a,N,f,L,_e,we,null,ve),de())},i(a){if(!I){S(e.$$.fragment,a),S(b.$$.fragment,a);for(let c=0;c<B.length;c+=1)S(u[c]);S(A.$$.fragment,a);for(let c=0;c<N.length;c+=1)S(s[c]);I=!0}},o(a){W(e.$$.fragment,a),W(b.$$.fragment,a);for(let c=0;c<u.length;c+=1)W(u[c]);W(A.$$.fragment,a);for(let c=0;c<s.length;c+=1)W(s[c]);I=!1},d(a){a&&(p(i),p(t),p(l),p(r),p(d),p(g),p($),p(z),p(w),p(P),p(C),p(j),p(K),p(J),p(Q),p(L)),D(e,a),D(b,a);for(let c=0;c<u.length;c+=1)u[c].d();D(A,a);for(let c=0;c<s.length;c+=1)s[c].d()}}}function Je(n,e,i){let t,o,l;fe(n,E,u=>i(0,l=u));function r(){me(E,l.checks.homogeneousSections=[...l.checks.homogeneousSections,{availableWidth:0,notes1:"",notes2:""}],l)}function h(u){l.checks.homogeneousSections.splice(u,1),E.set(l)}function d(){me(E,l.checks.pinchPoints=[...l.checks.pinchPoints,{location:"",availableWidth:0,notes1:"",notes2:""}],l)}function b(u){l.checks.pinchPoints.splice(u,1),E.set(l)}const g=u=>h(u),$=u=>b(u);return n.$$.update=()=>{n.$$.dirty&1&&i(2,t=$e(l,"Desirable")),n.$$.dirty&1&&i(1,o=$e(l,"Absolute"))},[l,o,t,r,h,d,b,g,$]}class at extends ce{constructor(e){super(),ue(this,e,Je,Ge,re,{})}}export{at as component};
