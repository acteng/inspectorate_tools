import{s as we,x,e as z,t as X,a as T,c as Y,b as J,d as Q,f as d,g as q,p as H,q as W,i as L,h as F,y as ee,k as ye,w as Xe,R as Qe,W as he,T as pe,E as _e,m as ve,G as me,j as ce,n as xe,K as be,L as ke}from"../chunks/scheduler.DWeSXTth.js";import{S as Ie,i as Le,e as te,c as G,a as M,m as V,t as k,g as se,b as y,f as re,d as R}from"../chunks/index.aurM6UBm.js";import{g as et}from"../chunks/globals.D0QH3NT1.js";import{e as oe}from"../chunks/each.C9KRIIiX.js";import{c as tt,p as lt}from"../chunks/colors.DaC397qr.js";import{p as Ue}from"../chunks/index.CcbpL-Gf.js";import{R as Se}from"../chunks/Radio.Bf5B9xzo.js";import{S as Oe}from"../chunks/Select.B9ZSNum4.js";/* empty css                                                    */import{T as He}from"../chunks/TextArea.BovKQ38z.js";import{T as Ke}from"../chunks/TextInput.nvb_OUfY.js";import{s as O}from"../chunks/data.Duqd1DaD.js";import{j as ge,k as $e,M as nt,b as it,C as ot,G as st,l as rt}from"../chunks/index.CZyB31IE.js";import{c as at,p as ft,b as Ne,d as De,e as ut,g as ct}from"../chunks/lists.Dqlqv0er.js";import{Y as We}from"../chunks/YesNo.CnFqoW6H.js";import{B as pt,G as _t,S as mt,C as gt,a as $t,M as Ze}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.CiLqmoR8.js";import{C as dt}from"../chunks/CollapsibleCard.CDK1L88H.js";import{D as ht}from"../chunks/DefaultButton.DtH29Fyx.js";import{S as vt}from"../chunks/SecondaryButton.YMJlhsHV.js";import{W as bt}from"../chunks/WarningButton.DUnzgf1X.js";import{G as kt}from"../chunks/GeoreferenceLayer.CB6xLWOX.js";import{C as ze}from"../chunks/ClickableCard.g-8-hfXl.js";import"../chunks/paths.DABpcxXV.js";function Ee(t){let e,n,l;function o(s){t[5](s)}let r={label:"Resolved by Design",inlineSmall:!0};return t[1].criticalIssues[t[0]].resolved!==void 0&&(r.value=t[1].criticalIssues[t[0]].resolved),e=new We({props:r}),x.push(()=>te(e,"value",o)),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,c){V(e,s,c),l=!0},p(s,c){const u={};!n&&c&3&&(n=!0,u.value=s[1].criticalIssues[s[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(s){l||(k(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){R(e,s)}}}function Ct(t){let e,n,l,o,r,s,c,u,_,f,j,m,h,B,C,E,i,p,N,S,D,w;function Z(a){t[2](a)}let A={label:"Critical Issue",emptyOption:!0,choices:at};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(A.value=t[1].criticalIssues[t[0]].criticalIssue),f=new Oe({props:A}),x.push(()=>te(f,"value",Z));function ae(a){t[3](a)}let g={legend:"Stage",choices:Ue(["Existing","Design"]),inlineSmall:!0};t[1].criticalIssues[t[0]].stage!==void 0&&(g.value=t[1].criticalIssues[t[0]].stage),h=new Se({props:g}),x.push(()=>te(h,"value",ae));function v(a){t[4](a)}let K={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(K.value=t[1].criticalIssues[t[0]].locationName),E=new Ke({props:K}),x.push(()=>te(E,"value",v));let I=t[1].criticalIssues[t[0]].stage!="Design"&&Ee(t);function P(a){t[6](a)}let le={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(le.value=t[1].criticalIssues[t[0]].notes),S=new He({props:le}),x.push(()=>te(S,"value",P)),{c(){e=z("div"),n=z("a"),l=X("Google StreetView"),r=T(),s=z("a"),c=X("Bing Streetside"),_=T(),G(f.$$.fragment),m=T(),G(h.$$.fragment),C=T(),G(E.$$.fragment),p=T(),I&&I.c(),N=T(),G(S.$$.fragment),this.h()},l(a){e=Y(a,"DIV",{style:!0});var b=J(e);n=Y(b,"A",{href:!0,target:!0});var ne=J(n);l=Q(ne,"Google StreetView"),ne.forEach(d),r=q(b),s=Y(b,"A",{href:!0,target:!0});var ie=J(s);c=Q(ie,"Bing Streetside"),ie.forEach(d),b.forEach(d),_=q(a),M(f.$$.fragment,a),m=q(a),M(h.$$.fragment,a),C=q(a),M(E.$$.fragment,a),p=q(a),I&&I.l(a),N=q(a),M(S.$$.fragment,a),this.h()},h(){H(n,"href",o=ge(t[1].criticalIssues[t[0]].point)),H(n,"target","_blank"),H(s,"href",u=$e(t[1].criticalIssues[t[0]].point)),H(s,"target","_blank"),W(e,"display","flex"),W(e,"justify-content","space-evenly")},m(a,b){L(a,e,b),F(e,n),F(n,l),F(e,r),F(e,s),F(s,c),L(a,_,b),V(f,a,b),L(a,m,b),V(h,a,b),L(a,C,b),V(E,a,b),L(a,p,b),I&&I.m(a,b),L(a,N,b),V(S,a,b),w=!0},p(a,[b]){(!w||b&3&&o!==(o=ge(a[1].criticalIssues[a[0]].point)))&&H(n,"href",o),(!w||b&3&&u!==(u=$e(a[1].criticalIssues[a[0]].point)))&&H(s,"href",u);const ne={};!j&&b&3&&(j=!0,ne.value=a[1].criticalIssues[a[0]].criticalIssue,ee(()=>j=!1)),f.$set(ne);const ie={};!B&&b&3&&(B=!0,ie.value=a[1].criticalIssues[a[0]].stage,ee(()=>B=!1)),h.$set(ie);const fe={};!i&&b&3&&(i=!0,fe.value=a[1].criticalIssues[a[0]].locationName,ee(()=>i=!1)),E.$set(fe),a[1].criticalIssues[a[0]].stage!="Design"?I?(I.p(a,b),b&3&&k(I,1)):(I=Ee(a),I.c(),k(I,1),I.m(N.parentNode,N)):I&&(se(),y(I,1,1,()=>{I=null}),re());const ue={};!D&&b&3&&(D=!0,ue.value=a[1].criticalIssues[a[0]].notes,ee(()=>D=!1)),S.$set(ue)},i(a){w||(k(f.$$.fragment,a),k(h.$$.fragment,a),k(E.$$.fragment,a),k(I),k(S.$$.fragment,a),w=!0)},o(a){y(f.$$.fragment,a),y(h.$$.fragment,a),y(E.$$.fragment,a),y(I),y(S.$$.fragment,a),w=!1},d(a){a&&(d(e),d(_),d(m),d(C),d(p),d(N)),R(f,a),R(h,a),R(E,a),I&&I.d(a),R(S,a)}}}function wt(t,e,n){let l;ye(t,O,f=>n(1,l=f));let{idx:o}=e;function r(f){t.$$.not_equal(l.criticalIssues[o].criticalIssue,f)&&(l.criticalIssues[o].criticalIssue=f,O.set(l))}function s(f){t.$$.not_equal(l.criticalIssues[o].stage,f)&&(l.criticalIssues[o].stage=f,O.set(l))}function c(f){t.$$.not_equal(l.criticalIssues[o].locationName,f)&&(l.criticalIssues[o].locationName=f,O.set(l))}function u(f){t.$$.not_equal(l.criticalIssues[o].resolved,f)&&(l.criticalIssues[o].resolved=f,O.set(l))}function _(f){t.$$.not_equal(l.criticalIssues[o].notes,f)&&(l.criticalIssues[o].notes=f,O.set(l))}return t.$$set=f=>{"idx"in f&&n(0,o=f.idx)},[o,l,r,s,c,u,_]}class yt extends Ie{constructor(e){super(),Le(this,e,wt,Ct,we,{idx:0})}}function je(t){let e,n,l;function o(s){t[5](s)}let r={label:"Resolved by Design",inlineSmall:!0};return t[1].policyConflictLog[t[0]].resolved!==void 0&&(r.value=t[1].policyConflictLog[t[0]].resolved),e=new We({props:r}),x.push(()=>te(e,"value",o)),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,c){V(e,s,c),l=!0},p(s,c){const u={};!n&&c&3&&(n=!0,u.value=s[1].policyConflictLog[s[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(s){l||(k(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){R(e,s)}}}function It(t){let e,n,l,o,r,s,c,u,_,f,j,m,h,B,C,E,i,p,N,S,D,w;function Z(a){t[2](a)}let A={label:"Policy Conflict",emptyOption:!0,choices:ft};t[1].policyConflictLog[t[0]].conflict!==void 0&&(A.value=t[1].policyConflictLog[t[0]].conflict),f=new Oe({props:A}),x.push(()=>te(f,"value",Z));function ae(a){t[3](a)}let g={legend:"Stage",choices:Ue(["Existing","Design"]),inlineSmall:!0};t[1].policyConflictLog[t[0]].stage!==void 0&&(g.value=t[1].policyConflictLog[t[0]].stage),h=new Se({props:g}),x.push(()=>te(h,"value",ae));function v(a){t[4](a)}let K={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(K.value=t[1].policyConflictLog[t[0]].locationName),E=new Ke({props:K}),x.push(()=>te(E,"value",v));let I=t[1].policyConflictLog[t[0]].stage!="Design"&&je(t);function P(a){t[6](a)}let le={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(le.value=t[1].policyConflictLog[t[0]].notes),S=new He({props:le}),x.push(()=>te(S,"value",P)),{c(){e=z("div"),n=z("a"),l=X("Google StreetView"),r=T(),s=z("a"),c=X("Bing Streetside"),_=T(),G(f.$$.fragment),m=T(),G(h.$$.fragment),C=T(),G(E.$$.fragment),p=T(),I&&I.c(),N=T(),G(S.$$.fragment),this.h()},l(a){e=Y(a,"DIV",{style:!0});var b=J(e);n=Y(b,"A",{href:!0,target:!0});var ne=J(n);l=Q(ne,"Google StreetView"),ne.forEach(d),r=q(b),s=Y(b,"A",{href:!0,target:!0});var ie=J(s);c=Q(ie,"Bing Streetside"),ie.forEach(d),b.forEach(d),_=q(a),M(f.$$.fragment,a),m=q(a),M(h.$$.fragment,a),C=q(a),M(E.$$.fragment,a),p=q(a),I&&I.l(a),N=q(a),M(S.$$.fragment,a),this.h()},h(){H(n,"href",o=ge(t[1].policyConflictLog[t[0]].point)),H(n,"target","_blank"),H(s,"href",u=$e(t[1].policyConflictLog[t[0]].point)),H(s,"target","_blank"),W(e,"display","flex"),W(e,"justify-content","space-evenly")},m(a,b){L(a,e,b),F(e,n),F(n,l),F(e,r),F(e,s),F(s,c),L(a,_,b),V(f,a,b),L(a,m,b),V(h,a,b),L(a,C,b),V(E,a,b),L(a,p,b),I&&I.m(a,b),L(a,N,b),V(S,a,b),w=!0},p(a,[b]){(!w||b&3&&o!==(o=ge(a[1].policyConflictLog[a[0]].point)))&&H(n,"href",o),(!w||b&3&&u!==(u=$e(a[1].policyConflictLog[a[0]].point)))&&H(s,"href",u);const ne={};!j&&b&3&&(j=!0,ne.value=a[1].policyConflictLog[a[0]].conflict,ee(()=>j=!1)),f.$set(ne);const ie={};!B&&b&3&&(B=!0,ie.value=a[1].policyConflictLog[a[0]].stage,ee(()=>B=!1)),h.$set(ie);const fe={};!i&&b&3&&(i=!0,fe.value=a[1].policyConflictLog[a[0]].locationName,ee(()=>i=!1)),E.$set(fe),a[1].policyConflictLog[a[0]].stage!="Design"?I?(I.p(a,b),b&3&&k(I,1)):(I=je(a),I.c(),k(I,1),I.m(N.parentNode,N)):I&&(se(),y(I,1,1,()=>{I=null}),re());const ue={};!D&&b&3&&(D=!0,ue.value=a[1].policyConflictLog[a[0]].notes,ee(()=>D=!1)),S.$set(ue)},i(a){w||(k(f.$$.fragment,a),k(h.$$.fragment,a),k(E.$$.fragment,a),k(I),k(S.$$.fragment,a),w=!0)},o(a){y(f.$$.fragment,a),y(h.$$.fragment,a),y(E.$$.fragment,a),y(I),y(S.$$.fragment,a),w=!1},d(a){a&&(d(e),d(_),d(m),d(C),d(p),d(N)),R(f,a),R(h,a),R(E,a),I&&I.d(a),R(S,a)}}}function Lt(t,e,n){let l;ye(t,O,f=>n(1,l=f));let{idx:o}=e;function r(f){t.$$.not_equal(l.policyConflictLog[o].conflict,f)&&(l.policyConflictLog[o].conflict=f,O.set(l))}function s(f){t.$$.not_equal(l.policyConflictLog[o].stage,f)&&(l.policyConflictLog[o].stage=f,O.set(l))}function c(f){t.$$.not_equal(l.policyConflictLog[o].locationName,f)&&(l.policyConflictLog[o].locationName=f,O.set(l))}function u(f){t.$$.not_equal(l.policyConflictLog[o].resolved,f)&&(l.policyConflictLog[o].resolved=f,O.set(l))}function _(f){t.$$.not_equal(l.policyConflictLog[o].notes,f)&&(l.policyConflictLog[o].notes=f,O.set(l))}return t.$$set=f=>{"idx"in f&&n(0,o=f.idx)},[o,l,r,s,c,u,_]}class St extends Ie{constructor(e){super(),Le(this,e,Lt,It,we,{idx:0})}}const{window:Nt}=et;function Pe(t,e,n){const l=t.slice();return l[37]=e[n],l[38]=e,l[39]=n,l}function Te(t,e,n){const l=t.slice();return l[40]=e[n],l[41]=e,l[39]=n,l}function qe(t,e,n){const l=t.slice();return l[37]=e[n],l[39]=n,l}function Ae(t,e,n){const l=t.slice();return l[40]=e[n],l[39]=n,l}function Dt(t){let e,n,l,o,r,s,c,u;e=new ht({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),e.$on("click",t[11]),l=new bt({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),l.$on("click",t[13]);const _=[qt,Tt],f=[];function j(m,h){return m[0].kind=="critical"?0:1}return r=j(t),s=f[r]=_[r](t),{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),o=T(),s.c(),c=_e()},l(m){M(e.$$.fragment,m),n=q(m),M(l.$$.fragment,m),o=q(m),s.l(m),c=_e()},m(m,h){V(e,m,h),L(m,n,h),V(l,m,h),L(m,o,h),f[r].m(m,h),L(m,c,h),u=!0},p(m,h){const B={};h[1]&8192&&(B.$$scope={dirty:h,ctx:m}),e.$set(B);const C={};h[1]&8192&&(C.$$scope={dirty:h,ctx:m}),l.$set(C);let E=r;r=j(m),r===E?f[r].p(m,h):(se(),y(f[E],1,1,()=>{f[E]=null}),re(),s=f[r],s?s.p(m,h):(s=f[r]=_[r](m),s.c()),k(s,1),s.m(c.parentNode,c))},i(m){u||(k(e.$$.fragment,m),k(l.$$.fragment,m),k(s),u=!0)},o(m){y(e.$$.fragment,m),y(l.$$.fragment,m),y(s),u=!1},d(m){m&&(d(n),d(o),d(c)),R(e,m),R(l,m),f[r].d(m)}}}function Et(t){let e,n,l,o,r,s,c="Click the map to add a problem, or select a problem to fill out data",u,_,f="Critical Issues",j,m,h,B="Policy Conflicts",C,E,i;e=new dt({props:{label:"Tools",open:!0,$$slots:{default:[Gt]},$$scope:{ctx:t}}});function p(g){t[21](g)}let N={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[5]!==void 0&&(N.value=t[5]),l=new Se({props:N}),x.push(()=>te(l,"value",p));let S=oe(t[2].criticalIssues),D=[];for(let g=0;g<S.length;g+=1)D[g]=Ge(Ae(t,S,g));const w=g=>y(D[g],1,1,()=>{D[g]=null});let Z=oe(t[2].policyConflictLog),A=[];for(let g=0;g<Z.length;g+=1)A[g]=Ve(qe(t,Z,g));const ae=g=>y(A[g],1,1,()=>{A[g]=null});return{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),r=T(),s=z("p"),s.textContent=c,u=T(),_=z("h3"),_.textContent=f,j=T();for(let g=0;g<D.length;g+=1)D[g].c();m=T(),h=z("h3"),h.textContent=B,C=T();for(let g=0;g<A.length;g+=1)A[g].c();E=_e()},l(g){M(e.$$.fragment,g),n=q(g),M(l.$$.fragment,g),r=q(g),s=Y(g,"P",{"data-svelte-h":!0}),ve(s)!=="svelte-12ba5j2"&&(s.textContent=c),u=q(g),_=Y(g,"H3",{"data-svelte-h":!0}),ve(_)!=="svelte-1qhh5xr"&&(_.textContent=f),j=q(g);for(let v=0;v<D.length;v+=1)D[v].l(g);m=q(g),h=Y(g,"H3",{"data-svelte-h":!0}),ve(h)!=="svelte-eyxzjx"&&(h.textContent=B),C=q(g);for(let v=0;v<A.length;v+=1)A[v].l(g);E=_e()},m(g,v){V(e,g,v),L(g,n,v),V(l,g,v),L(g,r,v),L(g,s,v),L(g,u,v),L(g,_,v),L(g,j,v);for(let K=0;K<D.length;K+=1)D[K]&&D[K].m(g,v);L(g,m,v),L(g,h,v),L(g,C,v);for(let K=0;K<A.length;K+=1)A[K]&&A[K].m(g,v);L(g,E,v),i=!0},p(g,v){const K={};v[0]&200|v[1]&8192&&(K.$$scope={dirty:v,ctx:g}),e.$set(K);const I={};if(!o&&v[0]&32&&(o=!0,I.value=g[5],ee(()=>o=!1)),l.$set(I),v[0]&33798){S=oe(g[2].criticalIssues);let P;for(P=0;P<S.length;P+=1){const le=Ae(g,S,P);D[P]?(D[P].p(le,v),k(D[P],1)):(D[P]=Ge(le),D[P].c(),k(D[P],1),D[P].m(m.parentNode,m))}for(se(),P=S.length;P<D.length;P+=1)w(P);re()}if(v[0]&66566){Z=oe(g[2].policyConflictLog);let P;for(P=0;P<Z.length;P+=1){const le=qe(g,Z,P);A[P]?(A[P].p(le,v),k(A[P],1)):(A[P]=Ve(le),A[P].c(),k(A[P],1),A[P].m(E.parentNode,E))}for(se(),P=Z.length;P<A.length;P+=1)ae(P);re()}},i(g){if(!i){k(e.$$.fragment,g),k(l.$$.fragment,g);for(let v=0;v<S.length;v+=1)k(D[v]);for(let v=0;v<Z.length;v+=1)k(A[v]);i=!0}},o(g){y(e.$$.fragment,g),y(l.$$.fragment,g),D=D.filter(Boolean);for(let v=0;v<D.length;v+=1)y(D[v]);A=A.filter(Boolean);for(let v=0;v<A.length;v+=1)y(A[v]);i=!1},d(g){g&&(d(n),d(r),d(s),d(u),d(_),d(j),d(m),d(h),d(C),d(E)),R(e,g),R(l,g),me(D,g),me(A,g)}}}function jt(t){let e;return{c(){e=X("Save")},l(n){e=Q(n,"Save")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function Pt(t){let e;return{c(){e=X("Delete")},l(n){e=Q(n,"Delete")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function Tt(t){let e,n;return e=new St({props:{idx:t[0].idx}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,o){V(e,l,o),n=!0},p(l,o){const r={};o[0]&1&&(r.idx=l[0].idx),e.$set(r)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function qt(t){let e,n;return e=new yt({props:{idx:t[0].idx}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,o){V(e,l,o),n=!0},p(l,o){const r={};o[0]&1&&(r.idx=l[0].idx),e.$set(r)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function At(t){let e;return{c(){e=X("Zoom to fit")},l(n){e=Q(n,"Zoom to fit")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function Bt(t){let e;return{c(){e=X("Show scheme context")},l(n){e=Q(n,"Show scheme context")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function Gt(t){let e,n,l,o,r,s,c,u,_,f,j,m;e=new vt({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),e.$on("click",t[18]),l=new pt({}),r=new _t({});function h(i){t[19](i)}let B={map:t[3]};t[6]!==void 0&&(B.enabled=t[6]),c=new mt({props:B}),x.push(()=>te(c,"enabled",h));function C(i){t[20](i)}let E={$$slots:{default:[Bt]},$$scope:{ctx:t}};return t[7]!==void 0&&(E.checked=t[7]),f=new gt({props:E}),x.push(()=>te(f,"checked",C)),{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),o=T(),G(r.$$.fragment),s=T(),G(c.$$.fragment),_=T(),G(f.$$.fragment)},l(i){M(e.$$.fragment,i),n=q(i),M(l.$$.fragment,i),o=q(i),M(r.$$.fragment,i),s=q(i),M(c.$$.fragment,i),_=q(i),M(f.$$.fragment,i)},m(i,p){V(e,i,p),L(i,n,p),V(l,i,p),L(i,o,p),V(r,i,p),L(i,s,p),V(c,i,p),L(i,_,p),V(f,i,p),m=!0},p(i,p){const N={};p[1]&8192&&(N.$$scope={dirty:p,ctx:i}),e.$set(N);const S={};p[0]&8&&(S.map=i[3]),!u&&p[0]&64&&(u=!0,S.enabled=i[6],ee(()=>u=!1)),c.$set(S);const D={};p[1]&8192&&(D.$$scope={dirty:p,ctx:i}),!j&&p[0]&128&&(j=!0,D.checked=i[7],ee(()=>j=!1)),f.$set(D)},i(i){m||(k(e.$$.fragment,i),k(l.$$.fragment,i),k(r.$$.fragment,i),k(c.$$.fragment,i),k(f.$$.fragment,i),m=!0)},o(i){y(e.$$.fragment,i),y(l.$$.fragment,i),y(r.$$.fragment,i),y(c.$$.fragment,i),y(f.$$.fragment,i),m=!1},d(i){i&&(d(n),d(o),d(s),d(_)),R(e,i),R(l,i),R(r,i),R(c,i),R(f,i)}}}function Be(t){let e,n,l=t[40].resolved+"",o;return{c(){e=z("span"),n=X("Resolved: "),o=X(l)},l(r){e=Y(r,"SPAN",{});var s=J(e);n=Q(s,"Resolved: "),o=Q(s,l),s.forEach(d)},m(r,s){L(r,e,s),F(e,n),F(e,o)},p(r,s){s[0]&4&&l!==(l=r[40].resolved+"")&&ce(o,l)},d(r){r&&d(e)}}}function Mt(t){let e,n,l,o=t[40].stage+"",r,s,c=t[40].stage!="Design"&&Be(t);return{c(){e=z("div"),n=z("span"),l=X("Stage: "),r=X(o),s=T(),c&&c.c(),this.h()},l(u){e=Y(u,"DIV",{style:!0});var _=J(e);n=Y(_,"SPAN",{});var f=J(n);l=Q(f,"Stage: "),r=Q(f,o),f.forEach(d),s=q(_),c&&c.l(_),_.forEach(d),this.h()},h(){W(e,"width","100%"),W(e,"display","flex"),W(e,"justify-content","space-between")},m(u,_){L(u,e,_),F(e,n),F(n,l),F(n,r),F(e,s),c&&c.m(e,null)},p(u,_){_[0]&4&&o!==(o=u[40].stage+"")&&ce(r,o),u[40].stage!="Design"?c?c.p(u,_):(c=Be(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&d(e),c&&c.d()}}}function Ge(t){let e,n;function l(){return t[22](t[39])}function o(){return t[23](t[39])}return e=new ze({props:{name:t[15](t[40]),$$slots:{default:[Mt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",o),e.$on("mouseleave",t[24]),{c(){G(e.$$.fragment)},l(r){M(e.$$.fragment,r)},m(r,s){V(e,r,s),n=!0},p(r,s){t=r;const c={};s[0]&4&&(c.name=t[15](t[40])),s[0]&4|s[1]&8192&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function Me(t){let e,n,l=t[37].resolved+"",o;return{c(){e=z("span"),n=X("Resolved: "),o=X(l)},l(r){e=Y(r,"SPAN",{});var s=J(e);n=Q(s,"Resolved: "),o=Q(s,l),s.forEach(d)},m(r,s){L(r,e,s),F(e,n),F(e,o)},p(r,s){s[0]&4&&l!==(l=r[37].resolved+"")&&ce(o,l)},d(r){r&&d(e)}}}function Vt(t){let e,n,l,o=t[37].stage+"",r,s,c,u=t[37].stage!="Design"&&Me(t);return{c(){e=z("div"),n=z("span"),l=X("Stage: "),r=X(o),s=T(),u&&u.c(),c=T(),this.h()},l(_){e=Y(_,"DIV",{style:!0});var f=J(e);n=Y(f,"SPAN",{});var j=J(n);l=Q(j,"Stage: "),r=Q(j,o),j.forEach(d),s=q(f),u&&u.l(f),f.forEach(d),c=q(_),this.h()},h(){W(e,"width","100%"),W(e,"display","flex"),W(e,"justify-content","space-between")},m(_,f){L(_,e,f),F(e,n),F(n,l),F(n,r),F(e,s),u&&u.m(e,null),L(_,c,f)},p(_,f){f[0]&4&&o!==(o=_[37].stage+"")&&ce(r,o),_[37].stage!="Design"?u?u.p(_,f):(u=Me(_),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(_){_&&(d(e),d(c)),u&&u.d()}}}function Ve(t){let e,n;function l(){return t[25](t[39])}function o(){return t[26](t[39])}return e=new ze({props:{name:t[16](t[37]),$$slots:{default:[Vt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",o),e.$on("mouseleave",t[27]),{c(){G(e.$$.fragment)},l(r){M(e.$$.fragment,r)},m(r,s){V(e,r,s),n=!0},p(r,s){t=r;const c={};s[0]&4&&(c.name=t[16](t[37])),s[0]&4|s[1]&8192&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function Rt(t){let e,n,l,o=t[40].criticalIssue+"",r;return{c(){e=be("svg"),n=be("polygon"),l=be("text"),r=X(o),this.h()},l(s){e=ke(s,"svg",{width:!0,height:!0,xmlns:!0});var c=J(e);n=ke(c,"polygon",{points:!0,fill:!0,class:!0}),J(n).forEach(d),l=ke(c,"text",{x:!0,y:!0});var u=J(l);r=Q(u,o),u.forEach(d),c.forEach(d),this.h()},h(){H(n,"points","20,0 0,40 40,40"),H(n,"fill",tt.critical.background),H(n,"class","svelte-ktyu3j"),H(l,"x","13"),H(l,"y","30"),W(l,"fill","white"),H(e,"width","40"),H(e,"height","40"),H(e,"xmlns","http://www.w3.org/2000/svg")},m(s,c){L(s,e,c),F(e,n),F(e,l),F(l,r)},p(s,c){c[0]&4&&o!==(o=s[40].criticalIssue+"")&&ce(r,o)},d(s){s&&d(e)}}}function Re(t){let e,n,l;function o(u){t[29](u,t[40])}function r(){return t[30](t[39])}function s(){return t[31](t[39])}let c={draggable:!0,$$slots:{default:[Rt]},$$scope:{ctx:t}};return t[40].point!==void 0&&(c.lngLat=t[40].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",o)),e.$on("click",r),e.$on("dragend",s),{c(){G(e.$$.fragment)},l(u){M(e.$$.fragment,u)},m(u,_){V(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&8192&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[40].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(k(e.$$.fragment,u),l=!0)},o(u){y(e.$$.fragment,u),l=!1},d(u){R(e,u)}}}function Ft(t){let e,n=t[37].conflict+"",l;return{c(){e=z("span"),l=X(n),this.h()},l(o){e=Y(o,"SPAN",{class:!0});var r=J(e);l=Q(r,n),r.forEach(d),this.h()},h(){H(e,"class","dot svelte-ktyu3j"),W(e,"background",lt)},m(o,r){L(o,e,r),F(e,l)},p(o,r){r[0]&4&&n!==(n=o[37].conflict+"")&&ce(l,n)},d(o){o&&d(e)}}}function Fe(t){let e,n,l;function o(u){t[32](u,t[37])}function r(){return t[33](t[39])}function s(){return t[34](t[39])}let c={draggable:!0,$$slots:{default:[Ft]},$$scope:{ctx:t}};return t[37].point!==void 0&&(c.lngLat=t[37].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",o)),e.$on("click",r),e.$on("dragend",s),{c(){G(e.$$.fragment)},l(u){M(e.$$.fragment,u)},m(u,_){V(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&8192&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[37].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(k(e.$$.fragment,u),l=!0)},o(u){y(e.$$.fragment,u),l=!1},d(u){R(e,u)}}}function Ut(t){let e,n;return e=new rt({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,o){V(e,l,o),n=!0},p:xe,i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Ot(t){let e,n,l,o,r,s,c,u,_,f;e=new $t({}),e.$on("click",t[12]),l=new ot({props:{gj:t[2].summary.networkMap,show:t[7]}});let j=oe(t[2].criticalIssues),m=[];for(let i=0;i<j.length;i+=1)m[i]=Re(Te(t,j,i));const h=i=>y(m[i],1,1,()=>{m[i]=null});let B=oe(t[2].policyConflictLog),C=[];for(let i=0;i<B.length;i+=1)C[i]=Fe(Pe(t,B,i));const E=i=>y(C[i],1,1,()=>{C[i]=null});return c=new st({props:{data:t[8],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),_=new kt({props:{map:t[3]}}),{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),o=T();for(let i=0;i<m.length;i+=1)m[i].c();r=T();for(let i=0;i<C.length;i+=1)C[i].c();s=T(),G(c.$$.fragment),u=T(),G(_.$$.fragment)},l(i){M(e.$$.fragment,i),n=q(i),M(l.$$.fragment,i),o=q(i);for(let p=0;p<m.length;p+=1)m[p].l(i);r=q(i);for(let p=0;p<C.length;p+=1)C[p].l(i);s=q(i),M(c.$$.fragment,i),u=q(i),M(_.$$.fragment,i)},m(i,p){V(e,i,p),L(i,n,p),V(l,i,p),L(i,o,p);for(let N=0;N<m.length;N+=1)m[N]&&m[N].m(i,p);L(i,r,p);for(let N=0;N<C.length;N+=1)C[N]&&C[N].m(i,p);L(i,s,p),V(c,i,p),L(i,u,p),V(_,i,p),f=!0},p(i,p){const N={};if(p[0]&4&&(N.gj=i[2].summary.networkMap),p[0]&128&&(N.show=i[7]),l.$set(N),p[0]&516){j=oe(i[2].criticalIssues);let w;for(w=0;w<j.length;w+=1){const Z=Te(i,j,w);m[w]?(m[w].p(Z,p),k(m[w],1)):(m[w]=Re(Z),m[w].c(),k(m[w],1),m[w].m(r.parentNode,r))}for(se(),w=j.length;w<m.length;w+=1)h(w);re()}if(p[0]&516){B=oe(i[2].policyConflictLog);let w;for(w=0;w<B.length;w+=1){const Z=Pe(i,B,w);C[w]?(C[w].p(Z,p),k(C[w],1)):(C[w]=Fe(Z),C[w].c(),k(C[w],1),C[w].m(s.parentNode,s))}for(se(),w=B.length;w<C.length;w+=1)E(w);re()}const S={};p[0]&256&&(S.data=i[8]),p[1]&8192&&(S.$$scope={dirty:p,ctx:i}),c.$set(S);const D={};p[0]&8&&(D.map=i[3]),_.$set(D)},i(i){if(!f){k(e.$$.fragment,i),k(l.$$.fragment,i);for(let p=0;p<j.length;p+=1)k(m[p]);for(let p=0;p<B.length;p+=1)k(C[p]);k(c.$$.fragment,i),k(_.$$.fragment,i),f=!0}},o(i){y(e.$$.fragment,i),y(l.$$.fragment,i),m=m.filter(Boolean);for(let p=0;p<m.length;p+=1)y(m[p]);C=C.filter(Boolean);for(let p=0;p<C.length;p+=1)y(C[p]);y(c.$$.fragment,i),y(_.$$.fragment,i),f=!1},d(i){i&&(d(n),d(o),d(r),d(s),d(u)),R(e,i),R(l,i),me(m,i),me(C,i),R(c,i),R(_,i)}}}function Ht(t){let e,n,l,o,r,s,c,u,_,f,j;const m=[Et,Dt],h=[];function B(i,p){return i[0]==null?0:1}l=B(t),o=h[l]=m[l](t);function C(i){t[35](i)}let E={$$slots:{default:[Ot]},$$scope:{ctx:t}};return t[3]!==void 0&&(E.map=t[3]),c=new nt({props:E}),x.push(()=>te(c,"map",C)),{c(){e=z("div"),n=z("div"),o.c(),r=T(),s=z("div"),G(c.$$.fragment),this.h()},l(i){e=Y(i,"DIV",{style:!0});var p=J(e);n=Y(p,"DIV",{style:!0});var N=J(n);o.l(N),N.forEach(d),r=q(p),s=Y(p,"DIV",{style:!0});var S=J(s);M(c.$$.fragment,S),S.forEach(d),p.forEach(d),this.h()},h(){W(n,"width","30%"),W(n,"overflow-y","scroll"),W(n,"padding","10px"),W(n,"border","1px solid black"),W(s,"position","relative"),W(s,"width","70%"),W(e,"display","flex"),W(e,"height","80vh")},m(i,p){L(i,e,p),F(e,n),h[l].m(n,null),t[28](n),F(e,r),F(e,s),V(c,s,null),_=!0,f||(j=Xe(Nt,"keydown",t[17]),f=!0)},p(i,p){let N=l;l=B(i),l===N?h[l].p(i,p):(se(),y(h[N],1,1,()=>{h[N]=null}),re(),o=h[l],o?o.p(i,p):(o=h[l]=m[l](i),o.c()),k(o,1),o.m(n,null));const S={};p[0]&396|p[1]&8192&&(S.$$scope={dirty:p,ctx:i}),!u&&p[0]&8&&(u=!0,S.map=i[3],ee(()=>u=!1)),c.$set(S)},i(i){_||(k(o),k(c.$$.fragment,i),_=!0)},o(i){y(o),y(c.$$.fragment,i),_=!1},d(i){i&&d(e),h[l].d(),t[28](null),R(c),f=!1,j()}}}function Kt(t,e,n){let l={type:"FeatureCollection",features:[]},o=e??n;if(o!=null){let r=o.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(Ce(r[o.idx].point))}return l}function Ce(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function Wt(t,e,n){let l,o;ye(t,O,$=>n(2,o=$));let r,s,c="critical",u=null,_=null,f=null,j=!1,m=!0;async function h($){_=s.scrollTop,n(0,u=$),n(1,f=null),await he(),n(4,s.scrollTop=0,s)}async function B($){_=s.scrollTop,n(0,u=$),n(1,f=null),await he(),n(4,s.scrollTop=0,s);let U=$.kind=="critical"?o.criticalIssues:o.policyConflictLog;r.flyTo({center:U[$.idx].point,duration:500})}async function C(){n(0,u=null),pe(O,o.policyConflictLog=o.policyConflictLog.toSorted(($,U)=>Ne($.conflict)-Ne(U.conflict)),o),pe(O,o.criticalIssues=o.criticalIssues.toSorted(($,U)=>De($.criticalIssue)-De(U.criticalIssue)),o),_!=null&&(await he(),n(4,s.scrollTop=_,s),_=null)}function E($){if(!j){if(u!=null){C();return}c=="critical"?(pe(O,o.criticalIssues=[...o.criticalIssues,{criticalIssue:"",stage:"",point:$.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),h({kind:"critical",idx:o.criticalIssues.length-1})):(pe(O,o.policyConflictLog=[...o.policyConflictLog,{conflict:"",stage:"",point:$.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),h({kind:"conflict",idx:o.policyConflictLog.length-1}))}}Qe(()=>{p(!1)});function i(){window.confirm("Delete this entry?")&&(u.kind=="critical"?(o.criticalIssues.splice(u.idx,1),O.set(o)):(o.policyConflictLog.splice(u.idx,1),O.set(o)),C())}function p($){let U={type:"FeatureCollection",features:[...o.criticalIssues.map(de=>Ce(de.point)),...o.policyConflictLog.map(de=>Ce(de.point)),...o.summary.networkMap.features]};U.features.length>0&&r.fitBounds(it(U),{padding:20,animate:$})}function N($){let U=$.criticalIssue?ut($.criticalIssue):"Unknown critical";return $.locationName?`${U} (${$.locationName})`:U}function S($){let U=$.conflict?ct($.conflict):"Unknown conflict";return $.locationName?`${U} (${$.locationName})`:U}function D($){if(u!=null&&$.key=="Escape")$.stopPropagation(),C();else if(u!=null&&$.key=="Delete"){let U=$.target.tagName;if(U=="INPUT"||U=="TEXTAREA")return;$.stopPropagation(),i()}}const w=()=>p(!0);function Z($){j=$,n(6,j)}function A($){m=$,n(7,m)}function ae($){c=$,n(5,c)}const g=$=>B({kind:"critical",idx:$}),v=$=>n(1,f={kind:"critical",idx:$}),K=()=>n(1,f=null),I=$=>B({kind:"conflict",idx:$}),P=$=>n(1,f={kind:"conflict",idx:$}),le=()=>n(1,f=null);function a($){x[$?"unshift":"push"](()=>{s=$,n(4,s)})}function b($,U){t.$$.not_equal(U.point,$)&&(U.point=$,O.set(o))}const ne=$=>h({kind:"critical",idx:$}),ie=$=>h({kind:"critical",idx:$});function fe($,U){t.$$.not_equal(U.point,$)&&(U.point=$,O.set(o))}const ue=$=>h({kind:"conflict",idx:$}),Ye=$=>h({kind:"conflict",idx:$});function Je($){r=$,n(3,r)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(8,l=Kt(o,u,f))},[u,f,o,r,s,c,j,m,l,h,B,C,E,i,p,N,S,D,w,Z,A,ae,g,v,K,I,P,le,a,b,ne,ie,fe,ue,Ye,Je]}class $l extends Ie{constructor(e){super(),Le(this,e,Wt,Ht,we,{},null,[-1,-1])}}export{$l as component};
