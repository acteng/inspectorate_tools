import{s as ye,w as x,e as Z,t as X,a as T,c as z,b as Y,d as Q,f as v,g as q,p as K,q as H,i as I,h as R,x as ee,k as ge,B as ot,R as st,W as ve,T as pe,F as me,m as be,G as $e,j as _e,n as rt,K as ke,L as Ce}from"../chunks/scheduler.D5JRtHaf.js";import{S as Ie,i as Le,e as te,c as G,a as M,m as V,t as b,g as re,b as L,f as ae,d as F}from"../chunks/index.Xm1AgzMF.js";import{j as de,k as he,M as at,l as ft,b as ct,C as ut,G as pt,m as _t}from"../chunks/index.CC8ZgsdH.js";import{e as se}from"../chunks/each.C9BadmQM.js";import{c as gt,p as mt}from"../chunks/colors.DaC397qr.js";import{p as Ue,e as $t}from"../chunks/index.BLeW4pOs.js";import{R as Se}from"../chunks/Radio.BjpWuuOn.js";import{S as Ke}from"../chunks/Select.DCCD1fdE.js";/* empty css                                                    */import{T as We}from"../chunks/TextArea.Ct1XwDet.js";import{T as He}from"../chunks/TextInput.Cluermb4.js";import{s as U}from"../chunks/data.Dm1UP3Mi.js";import{c as dt,p as ht,b as Ee,e as De,f as vt,g as bt}from"../chunks/lists.BvURpO7c.js";import{Y as Je}from"../chunks/YesNo.BVAIAtyZ.js";import{B as kt,G as Ct,S as wt,C as yt,a as It,M as Ze}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.DhtGqEnn.js";import{C as Lt}from"../chunks/CollapsibleCard.D0GavHKp.js";import{D as St}from"../chunks/DefaultButton.BHwS446X.js";import{S as ze}from"../chunks/SecondaryButton.DxO4nu9r.js";import{W as Nt}from"../chunks/WarningButton.jEqntaGg.js";import{G as Et}from"../chunks/GeoreferenceLayer.uD5PxLp4.js";import{p as Dt}from"../chunks/stores.ONNBDa3c.js";import{C as Ye}from"../chunks/ClickableCard.BhW8XYpY.js";function Pe(t){let e,n,l;function i(s){t[5](s)}let a={label:"Resolved by Design",inlineSmall:!0};return t[1].criticalIssues[t[0]].resolved!==void 0&&(a.value=t[1].criticalIssues[t[0]].resolved),e=new Je({props:a}),x.push(()=>te(e,"value",i)),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,c){V(e,s,c),l=!0},p(s,c){const u={};!n&&c&3&&(n=!0,u.value=s[1].criticalIssues[s[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){L(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Pt(t){let e,n,l,i,a,s,c,u,_,f,j,h,y,d,$,P,o,p,S,E,D,w;function J(r){t[2](r)}let A={label:"Critical Issue",emptyOption:!0,choices:dt};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(A.value=t[1].criticalIssues[t[0]].criticalIssue),f=new Ke({props:A}),x.push(()=>te(f,"value",J));function fe(r){t[3](r)}let g={legend:"Stage",choices:Ue(["Existing","Design"]),inlineSmall:!0};t[1].criticalIssues[t[0]].stage!==void 0&&(g.value=t[1].criticalIssues[t[0]].stage),y=new Se({props:g}),x.push(()=>te(y,"value",fe));function k(r){t[4](r)}let W={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(W.value=t[1].criticalIssues[t[0]].locationName),P=new He({props:W}),x.push(()=>te(P,"value",k));let N=t[1].criticalIssues[t[0]].stage!="Design"&&Pe(t);function B(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(le.value=t[1].criticalIssues[t[0]].notes),E=new We({props:le}),x.push(()=>te(E,"value",B)),{c(){e=Z("div"),n=Z("a"),l=X("Google StreetView"),a=T(),s=Z("a"),c=X("Bing Streetside"),_=T(),G(f.$$.fragment),h=T(),G(y.$$.fragment),$=T(),G(P.$$.fragment),p=T(),N&&N.c(),S=T(),G(E.$$.fragment),this.h()},l(r){e=z(r,"DIV",{style:!0});var C=Y(e);n=z(C,"A",{href:!0,target:!0});var ne=Y(n);l=Q(ne,"Google StreetView"),ne.forEach(v),a=q(C),s=z(C,"A",{href:!0,target:!0});var ie=Y(s);c=Q(ie,"Bing Streetside"),ie.forEach(v),C.forEach(v),_=q(r),M(f.$$.fragment,r),h=q(r),M(y.$$.fragment,r),$=q(r),M(P.$$.fragment,r),p=q(r),N&&N.l(r),S=q(r),M(E.$$.fragment,r),this.h()},h(){K(n,"href",i=de(t[1].criticalIssues[t[0]].point)),K(n,"target","_blank"),K(s,"href",u=he(t[1].criticalIssues[t[0]].point)),K(s,"target","_blank"),H(e,"display","flex"),H(e,"justify-content","space-evenly")},m(r,C){I(r,e,C),R(e,n),R(n,l),R(e,a),R(e,s),R(s,c),I(r,_,C),V(f,r,C),I(r,h,C),V(y,r,C),I(r,$,C),V(P,r,C),I(r,p,C),N&&N.m(r,C),I(r,S,C),V(E,r,C),w=!0},p(r,[C]){(!w||C&3&&i!==(i=de(r[1].criticalIssues[r[0]].point)))&&K(n,"href",i),(!w||C&3&&u!==(u=he(r[1].criticalIssues[r[0]].point)))&&K(s,"href",u);const ne={};!j&&C&3&&(j=!0,ne.value=r[1].criticalIssues[r[0]].criticalIssue,ee(()=>j=!1)),f.$set(ne);const ie={};!d&&C&3&&(d=!0,ie.value=r[1].criticalIssues[r[0]].stage,ee(()=>d=!1)),y.$set(ie);const ce={};!o&&C&3&&(o=!0,ce.value=r[1].criticalIssues[r[0]].locationName,ee(()=>o=!1)),P.$set(ce),r[1].criticalIssues[r[0]].stage!="Design"?N?(N.p(r,C),C&3&&b(N,1)):(N=Pe(r),N.c(),b(N,1),N.m(S.parentNode,S)):N&&(re(),L(N,1,1,()=>{N=null}),ae());const ue={};!D&&C&3&&(D=!0,ue.value=r[1].criticalIssues[r[0]].notes,ee(()=>D=!1)),E.$set(ue)},i(r){w||(b(f.$$.fragment,r),b(y.$$.fragment,r),b(P.$$.fragment,r),b(N),b(E.$$.fragment,r),w=!0)},o(r){L(f.$$.fragment,r),L(y.$$.fragment,r),L(P.$$.fragment,r),L(N),L(E.$$.fragment,r),w=!1},d(r){r&&(v(e),v(_),v(h),v($),v(p),v(S)),F(f,r),F(y,r),F(P,r),N&&N.d(r),F(E,r)}}}function jt(t,e,n){let l;ge(t,U,f=>n(1,l=f));let{idx:i}=e;function a(f){t.$$.not_equal(l.criticalIssues[i].criticalIssue,f)&&(l.criticalIssues[i].criticalIssue=f,U.set(l))}function s(f){t.$$.not_equal(l.criticalIssues[i].stage,f)&&(l.criticalIssues[i].stage=f,U.set(l))}function c(f){t.$$.not_equal(l.criticalIssues[i].locationName,f)&&(l.criticalIssues[i].locationName=f,U.set(l))}function u(f){t.$$.not_equal(l.criticalIssues[i].resolved,f)&&(l.criticalIssues[i].resolved=f,U.set(l))}function _(f){t.$$.not_equal(l.criticalIssues[i].notes,f)&&(l.criticalIssues[i].notes=f,U.set(l))}return t.$$set=f=>{"idx"in f&&n(0,i=f.idx)},[i,l,a,s,c,u,_]}class Bt extends Ie{constructor(e){super(),Le(this,e,jt,Pt,ye,{idx:0})}}function je(t){let e,n,l;function i(s){t[5](s)}let a={label:"Resolved by Design",inlineSmall:!0};return t[1].policyConflictLog[t[0]].resolved!==void 0&&(a.value=t[1].policyConflictLog[t[0]].resolved),e=new Je({props:a}),x.push(()=>te(e,"value",i)),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,c){V(e,s,c),l=!0},p(s,c){const u={};!n&&c&3&&(n=!0,u.value=s[1].policyConflictLog[s[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){L(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Tt(t){let e,n,l,i,a,s,c,u,_,f,j,h,y,d,$,P,o,p,S,E,D,w;function J(r){t[2](r)}let A={label:"Policy Conflict",emptyOption:!0,choices:ht};t[1].policyConflictLog[t[0]].conflict!==void 0&&(A.value=t[1].policyConflictLog[t[0]].conflict),f=new Ke({props:A}),x.push(()=>te(f,"value",J));function fe(r){t[3](r)}let g={legend:"Stage",choices:Ue(["Existing","Design"]),inlineSmall:!0};t[1].policyConflictLog[t[0]].stage!==void 0&&(g.value=t[1].policyConflictLog[t[0]].stage),y=new Se({props:g}),x.push(()=>te(y,"value",fe));function k(r){t[4](r)}let W={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(W.value=t[1].policyConflictLog[t[0]].locationName),P=new He({props:W}),x.push(()=>te(P,"value",k));let N=t[1].policyConflictLog[t[0]].stage!="Design"&&je(t);function B(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(le.value=t[1].policyConflictLog[t[0]].notes),E=new We({props:le}),x.push(()=>te(E,"value",B)),{c(){e=Z("div"),n=Z("a"),l=X("Google StreetView"),a=T(),s=Z("a"),c=X("Bing Streetside"),_=T(),G(f.$$.fragment),h=T(),G(y.$$.fragment),$=T(),G(P.$$.fragment),p=T(),N&&N.c(),S=T(),G(E.$$.fragment),this.h()},l(r){e=z(r,"DIV",{style:!0});var C=Y(e);n=z(C,"A",{href:!0,target:!0});var ne=Y(n);l=Q(ne,"Google StreetView"),ne.forEach(v),a=q(C),s=z(C,"A",{href:!0,target:!0});var ie=Y(s);c=Q(ie,"Bing Streetside"),ie.forEach(v),C.forEach(v),_=q(r),M(f.$$.fragment,r),h=q(r),M(y.$$.fragment,r),$=q(r),M(P.$$.fragment,r),p=q(r),N&&N.l(r),S=q(r),M(E.$$.fragment,r),this.h()},h(){K(n,"href",i=de(t[1].policyConflictLog[t[0]].point)),K(n,"target","_blank"),K(s,"href",u=he(t[1].policyConflictLog[t[0]].point)),K(s,"target","_blank"),H(e,"display","flex"),H(e,"justify-content","space-evenly")},m(r,C){I(r,e,C),R(e,n),R(n,l),R(e,a),R(e,s),R(s,c),I(r,_,C),V(f,r,C),I(r,h,C),V(y,r,C),I(r,$,C),V(P,r,C),I(r,p,C),N&&N.m(r,C),I(r,S,C),V(E,r,C),w=!0},p(r,[C]){(!w||C&3&&i!==(i=de(r[1].policyConflictLog[r[0]].point)))&&K(n,"href",i),(!w||C&3&&u!==(u=he(r[1].policyConflictLog[r[0]].point)))&&K(s,"href",u);const ne={};!j&&C&3&&(j=!0,ne.value=r[1].policyConflictLog[r[0]].conflict,ee(()=>j=!1)),f.$set(ne);const ie={};!d&&C&3&&(d=!0,ie.value=r[1].policyConflictLog[r[0]].stage,ee(()=>d=!1)),y.$set(ie);const ce={};!o&&C&3&&(o=!0,ce.value=r[1].policyConflictLog[r[0]].locationName,ee(()=>o=!1)),P.$set(ce),r[1].policyConflictLog[r[0]].stage!="Design"?N?(N.p(r,C),C&3&&b(N,1)):(N=je(r),N.c(),b(N,1),N.m(S.parentNode,S)):N&&(re(),L(N,1,1,()=>{N=null}),ae());const ue={};!D&&C&3&&(D=!0,ue.value=r[1].policyConflictLog[r[0]].notes,ee(()=>D=!1)),E.$set(ue)},i(r){w||(b(f.$$.fragment,r),b(y.$$.fragment,r),b(P.$$.fragment,r),b(N),b(E.$$.fragment,r),w=!0)},o(r){L(f.$$.fragment,r),L(y.$$.fragment,r),L(P.$$.fragment,r),L(N),L(E.$$.fragment,r),w=!1},d(r){r&&(v(e),v(_),v(h),v($),v(p),v(S)),F(f,r),F(y,r),F(P,r),N&&N.d(r),F(E,r)}}}function qt(t,e,n){let l;ge(t,U,f=>n(1,l=f));let{idx:i}=e;function a(f){t.$$.not_equal(l.policyConflictLog[i].conflict,f)&&(l.policyConflictLog[i].conflict=f,U.set(l))}function s(f){t.$$.not_equal(l.policyConflictLog[i].stage,f)&&(l.policyConflictLog[i].stage=f,U.set(l))}function c(f){t.$$.not_equal(l.policyConflictLog[i].locationName,f)&&(l.policyConflictLog[i].locationName=f,U.set(l))}function u(f){t.$$.not_equal(l.policyConflictLog[i].resolved,f)&&(l.policyConflictLog[i].resolved=f,U.set(l))}function _(f){t.$$.not_equal(l.policyConflictLog[i].notes,f)&&(l.policyConflictLog[i].notes=f,U.set(l))}return t.$$set=f=>{"idx"in f&&n(0,i=f.idx)},[i,l,a,s,c,u,_]}class At extends Ie{constructor(e){super(),Le(this,e,qt,Tt,ye,{idx:0})}}const{window:Gt}=ft;function Be(t,e,n){const l=t.slice();return l[41]=e[n],l[42]=e,l[43]=n,l}function Te(t,e,n){const l=t.slice();return l[44]=e[n],l[45]=e,l[43]=n,l}function qe(t,e,n){const l=t.slice();return l[41]=e[n],l[43]=n,l}function Ae(t,e,n){const l=t.slice();return l[44]=e[n],l[43]=n,l}function Mt(t){let e,n,l,i,a,s,c,u,_,f;e=new St({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),e.$on("click",t[12]),l=new Nt({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),l.$on("click",t[14]),a=new ze({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),a.$on("click",t[29]);const j=[Kt,Ut],h=[];function y(d,$){return d[0].kind=="critical"?0:1}return c=y(t),u=h[c]=j[c](t),{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),i=T(),G(a.$$.fragment),s=T(),u.c(),_=me()},l(d){M(e.$$.fragment,d),n=q(d),M(l.$$.fragment,d),i=q(d),M(a.$$.fragment,d),s=q(d),u.l(d),_=me()},m(d,$){V(e,d,$),I(d,n,$),V(l,d,$),I(d,i,$),V(a,d,$),I(d,s,$),h[c].m(d,$),I(d,_,$),f=!0},p(d,$){const P={};$[1]&131072&&(P.$$scope={dirty:$,ctx:d}),e.$set(P);const o={};$[1]&131072&&(o.$$scope={dirty:$,ctx:d}),l.$set(o);const p={};$[1]&131072&&(p.$$scope={dirty:$,ctx:d}),a.$set(p);let S=c;c=y(d),c===S?h[c].p(d,$):(re(),L(h[S],1,1,()=>{h[S]=null}),ae(),u=h[c],u?u.p(d,$):(u=h[c]=j[c](d),u.c()),b(u,1),u.m(_.parentNode,_))},i(d){f||(b(e.$$.fragment,d),b(l.$$.fragment,d),b(a.$$.fragment,d),b(u),f=!0)},o(d){L(e.$$.fragment,d),L(l.$$.fragment,d),L(a.$$.fragment,d),L(u),f=!1},d(d){d&&(v(n),v(i),v(s),v(_)),F(e,d),F(l,d),F(a,d),h[c].d(d)}}}function Vt(t){let e,n,l,i,a,s,c="Click the map to add a problem, or select a problem to fill out data",u,_,f="Critical Issues",j,h,y,d="Policy Conflicts",$,P,o;e=new Lt({props:{label:"Tools",open:!0,$$slots:{default:[Jt]},$$scope:{ctx:t}}});function p(g){t[22](g)}let S={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[5]!==void 0&&(S.value=t[5]),l=new Se({props:S}),x.push(()=>te(l,"value",p));let E=se(t[2].criticalIssues),D=[];for(let g=0;g<E.length;g+=1)D[g]=Me(Ae(t,E,g));const w=g=>L(D[g],1,1,()=>{D[g]=null});let J=se(t[2].policyConflictLog),A=[];for(let g=0;g<J.length;g+=1)A[g]=Fe(qe(t,J,g));const fe=g=>L(A[g],1,1,()=>{A[g]=null});return{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),a=T(),s=Z("p"),s.textContent=c,u=T(),_=Z("h3"),_.textContent=f,j=T();for(let g=0;g<D.length;g+=1)D[g].c();h=T(),y=Z("h3"),y.textContent=d,$=T();for(let g=0;g<A.length;g+=1)A[g].c();P=me()},l(g){M(e.$$.fragment,g),n=q(g),M(l.$$.fragment,g),a=q(g),s=z(g,"P",{"data-svelte-h":!0}),be(s)!=="svelte-12ba5j2"&&(s.textContent=c),u=q(g),_=z(g,"H3",{"data-svelte-h":!0}),be(_)!=="svelte-1qhh5xr"&&(_.textContent=f),j=q(g);for(let k=0;k<D.length;k+=1)D[k].l(g);h=q(g),y=z(g,"H3",{"data-svelte-h":!0}),be(y)!=="svelte-eyxzjx"&&(y.textContent=d),$=q(g);for(let k=0;k<A.length;k+=1)A[k].l(g);P=me()},m(g,k){V(e,g,k),I(g,n,k),V(l,g,k),I(g,a,k),I(g,s,k),I(g,u,k),I(g,_,k),I(g,j,k);for(let W=0;W<D.length;W+=1)D[W]&&D[W].m(g,k);I(g,h,k),I(g,y,k),I(g,$,k);for(let W=0;W<A.length;W+=1)A[W]&&A[W].m(g,k);I(g,P,k),o=!0},p(g,k){const W={};k[0]&200|k[1]&131072&&(W.$$scope={dirty:k,ctx:g}),e.$set(W);const N={};if(!i&&k[0]&32&&(i=!0,N.value=g[5],ee(()=>i=!1)),l.$set(N),k[0]&66566){E=se(g[2].criticalIssues);let B;for(B=0;B<E.length;B+=1){const le=Ae(g,E,B);D[B]?(D[B].p(le,k),b(D[B],1)):(D[B]=Me(le),D[B].c(),b(D[B],1),D[B].m(h.parentNode,h))}for(re(),B=E.length;B<D.length;B+=1)w(B);ae()}if(k[0]&132102){J=se(g[2].policyConflictLog);let B;for(B=0;B<J.length;B+=1){const le=qe(g,J,B);A[B]?(A[B].p(le,k),b(A[B],1)):(A[B]=Fe(le),A[B].c(),b(A[B],1),A[B].m(P.parentNode,P))}for(re(),B=J.length;B<A.length;B+=1)fe(B);ae()}},i(g){if(!o){b(e.$$.fragment,g),b(l.$$.fragment,g);for(let k=0;k<E.length;k+=1)b(D[k]);for(let k=0;k<J.length;k+=1)b(A[k]);o=!0}},o(g){L(e.$$.fragment,g),L(l.$$.fragment,g),D=D.filter(Boolean);for(let k=0;k<D.length;k+=1)L(D[k]);A=A.filter(Boolean);for(let k=0;k<A.length;k+=1)L(A[k]);o=!1},d(g){g&&(v(n),v(a),v(s),v(u),v(_),v(j),v(h),v(y),v($),v(P)),F(e,g),F(l,g),$e(D,g),$e(A,g)}}}function Ft(t){let e;return{c(){e=X("Save")},l(n){e=Q(n,"Save")},m(n,l){I(n,e,l)},d(n){n&&v(e)}}}function Rt(t){let e;return{c(){e=X("Delete")},l(n){e=Q(n,"Delete")},m(n,l){I(n,e,l)},d(n){n&&v(e)}}}function Ot(t){let e;return{c(){e=X("Copy")},l(n){e=Q(n,"Copy")},m(n,l){I(n,e,l)},d(n){n&&v(e)}}}function Ut(t){let e,n;return e=new At({props:{idx:t[0].idx}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,i){V(e,l,i),n=!0},p(l,i){const a={};i[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){L(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Kt(t){let e,n;return e=new Bt({props:{idx:t[0].idx}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,i){V(e,l,i),n=!0},p(l,i){const a={};i[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){L(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Wt(t){let e;return{c(){e=X("Zoom to fit")},l(n){e=Q(n,"Zoom to fit")},m(n,l){I(n,e,l)},d(n){n&&v(e)}}}function Ht(t){let e;return{c(){e=X("Show scheme context")},l(n){e=Q(n,"Show scheme context")},m(n,l){I(n,e,l)},d(n){n&&v(e)}}}function Jt(t){let e,n,l,i,a,s,c,u,_,f,j,h;e=new ze({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),e.$on("click",t[19]),l=new kt({}),a=new Ct({});function y(o){t[20](o)}let d={map:t[3]};t[6]!==void 0&&(d.enabled=t[6]),c=new wt({props:d}),x.push(()=>te(c,"enabled",y));function $(o){t[21](o)}let P={$$slots:{default:[Ht]},$$scope:{ctx:t}};return t[7]!==void 0&&(P.checked=t[7]),f=new yt({props:P}),x.push(()=>te(f,"checked",$)),{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),i=T(),G(a.$$.fragment),s=T(),G(c.$$.fragment),_=T(),G(f.$$.fragment)},l(o){M(e.$$.fragment,o),n=q(o),M(l.$$.fragment,o),i=q(o),M(a.$$.fragment,o),s=q(o),M(c.$$.fragment,o),_=q(o),M(f.$$.fragment,o)},m(o,p){V(e,o,p),I(o,n,p),V(l,o,p),I(o,i,p),V(a,o,p),I(o,s,p),V(c,o,p),I(o,_,p),V(f,o,p),h=!0},p(o,p){const S={};p[1]&131072&&(S.$$scope={dirty:p,ctx:o}),e.$set(S);const E={};p[0]&8&&(E.map=o[3]),!u&&p[0]&64&&(u=!0,E.enabled=o[6],ee(()=>u=!1)),c.$set(E);const D={};p[1]&131072&&(D.$$scope={dirty:p,ctx:o}),!j&&p[0]&128&&(j=!0,D.checked=o[7],ee(()=>j=!1)),f.$set(D)},i(o){h||(b(e.$$.fragment,o),b(l.$$.fragment,o),b(a.$$.fragment,o),b(c.$$.fragment,o),b(f.$$.fragment,o),h=!0)},o(o){L(e.$$.fragment,o),L(l.$$.fragment,o),L(a.$$.fragment,o),L(c.$$.fragment,o),L(f.$$.fragment,o),h=!1},d(o){o&&(v(n),v(i),v(s),v(_)),F(e,o),F(l,o),F(a,o),F(c,o),F(f,o)}}}function Ge(t){let e,n,l=t[44].resolved+"",i;return{c(){e=Z("span"),n=X("Resolved: "),i=X(l)},l(a){e=z(a,"SPAN",{});var s=Y(e);n=Q(s,"Resolved: "),i=Q(s,l),s.forEach(v)},m(a,s){I(a,e,s),R(e,n),R(e,i)},p(a,s){s[0]&4&&l!==(l=a[44].resolved+"")&&_e(i,l)},d(a){a&&v(e)}}}function Zt(t){let e,n,l,i=t[44].stage+"",a,s,c=t[44].stage!="Design"&&Ge(t);return{c(){e=Z("div"),n=Z("span"),l=X("Stage: "),a=X(i),s=T(),c&&c.c(),this.h()},l(u){e=z(u,"DIV",{style:!0});var _=Y(e);n=z(_,"SPAN",{});var f=Y(n);l=Q(f,"Stage: "),a=Q(f,i),f.forEach(v),s=q(_),c&&c.l(_),_.forEach(v),this.h()},h(){H(e,"width","100%"),H(e,"display","flex"),H(e,"justify-content","space-between")},m(u,_){I(u,e,_),R(e,n),R(n,l),R(n,a),R(e,s),c&&c.m(e,null)},p(u,_){_[0]&4&&i!==(i=u[44].stage+"")&&_e(a,i),u[44].stage!="Design"?c?c.p(u,_):(c=Ge(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&v(e),c&&c.d()}}}function Me(t){let e,n;function l(){return t[23](t[43])}function i(){return t[24](t[43])}return e=new Ye({props:{name:t[16](t[44]),$$slots:{default:[Zt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",i),e.$on("mouseleave",t[25]),{c(){G(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,s){V(e,a,s),n=!0},p(a,s){t=a;const c={};s[0]&4&&(c.name=t[16](t[44])),s[0]&4|s[1]&131072&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){L(e.$$.fragment,a),n=!1},d(a){F(e,a)}}}function Ve(t){let e,n,l=t[41].resolved+"",i;return{c(){e=Z("span"),n=X("Resolved: "),i=X(l)},l(a){e=z(a,"SPAN",{});var s=Y(e);n=Q(s,"Resolved: "),i=Q(s,l),s.forEach(v)},m(a,s){I(a,e,s),R(e,n),R(e,i)},p(a,s){s[0]&4&&l!==(l=a[41].resolved+"")&&_e(i,l)},d(a){a&&v(e)}}}function zt(t){let e,n,l,i=t[41].stage+"",a,s,c,u=t[41].stage!="Design"&&Ve(t);return{c(){e=Z("div"),n=Z("span"),l=X("Stage: "),a=X(i),s=T(),u&&u.c(),c=T(),this.h()},l(_){e=z(_,"DIV",{style:!0});var f=Y(e);n=z(f,"SPAN",{});var j=Y(n);l=Q(j,"Stage: "),a=Q(j,i),j.forEach(v),s=q(f),u&&u.l(f),f.forEach(v),c=q(_),this.h()},h(){H(e,"width","100%"),H(e,"display","flex"),H(e,"justify-content","space-between")},m(_,f){I(_,e,f),R(e,n),R(n,l),R(n,a),R(e,s),u&&u.m(e,null),I(_,c,f)},p(_,f){f[0]&4&&i!==(i=_[41].stage+"")&&_e(a,i),_[41].stage!="Design"?u?u.p(_,f):(u=Ve(_),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(_){_&&(v(e),v(c)),u&&u.d()}}}function Fe(t){let e,n;function l(){return t[26](t[43])}function i(){return t[27](t[43])}return e=new Ye({props:{name:t[17](t[41]),$$slots:{default:[zt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",i),e.$on("mouseleave",t[28]),{c(){G(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,s){V(e,a,s),n=!0},p(a,s){t=a;const c={};s[0]&4&&(c.name=t[17](t[41])),s[0]&4|s[1]&131072&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){L(e.$$.fragment,a),n=!1},d(a){F(e,a)}}}function Yt(t){let e,n,l,i=t[44].criticalIssue+"",a;return{c(){e=ke("svg"),n=ke("polygon"),l=ke("text"),a=X(i),this.h()},l(s){e=Ce(s,"svg",{width:!0,height:!0,xmlns:!0});var c=Y(e);n=Ce(c,"polygon",{points:!0,fill:!0,class:!0}),Y(n).forEach(v),l=Ce(c,"text",{x:!0,y:!0});var u=Y(l);a=Q(u,i),u.forEach(v),c.forEach(v),this.h()},h(){K(n,"points","20,0 0,40 40,40"),K(n,"fill",gt.critical.background),K(n,"class","svelte-ktyu3j"),K(l,"x","13"),K(l,"y","30"),H(l,"fill","white"),K(e,"width","40"),K(e,"height","40"),K(e,"xmlns","http://www.w3.org/2000/svg")},m(s,c){I(s,e,c),R(e,n),R(e,l),R(l,a)},p(s,c){c[0]&4&&i!==(i=s[44].criticalIssue+"")&&_e(a,i)},d(s){s&&v(e)}}}function Re(t){let e,n,l;function i(u){t[31](u,t[44])}function a(){return t[32](t[43])}function s(){return t[33](t[43])}let c={draggable:!0,$$slots:{default:[Yt]},$$scope:{ctx:t}};return t[44].point!==void 0&&(c.lngLat=t[44].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",i)),e.$on("click",a),e.$on("dragend",s),{c(){G(e.$$.fragment)},l(u){M(e.$$.fragment,u)},m(u,_){V(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&131072&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[44].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(b(e.$$.fragment,u),l=!0)},o(u){L(e.$$.fragment,u),l=!1},d(u){F(e,u)}}}function Xt(t){let e,n=t[41].conflict+"",l;return{c(){e=Z("span"),l=X(n),this.h()},l(i){e=z(i,"SPAN",{class:!0});var a=Y(e);l=Q(a,n),a.forEach(v),this.h()},h(){K(e,"class","dot svelte-ktyu3j"),H(e,"background",mt)},m(i,a){I(i,e,a),R(e,l)},p(i,a){a[0]&4&&n!==(n=i[41].conflict+"")&&_e(l,n)},d(i){i&&v(e)}}}function Oe(t){let e,n,l;function i(u){t[34](u,t[41])}function a(){return t[35](t[43])}function s(){return t[36](t[43])}let c={draggable:!0,$$slots:{default:[Xt]},$$scope:{ctx:t}};return t[41].point!==void 0&&(c.lngLat=t[41].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",i)),e.$on("click",a),e.$on("dragend",s),{c(){G(e.$$.fragment)},l(u){M(e.$$.fragment,u)},m(u,_){V(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&131072&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[41].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(b(e.$$.fragment,u),l=!0)},o(u){L(e.$$.fragment,u),l=!1},d(u){F(e,u)}}}function Qt(t){let e,n;return e=new _t({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,i){V(e,l,i),n=!0},p:rt,i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){L(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function xt(t){let e,n,l,i,a,s,c,u,_,f;e=new It({}),e.$on("click",t[13]),l=new ut({props:{gj:t[2].summary.networkMap,show:t[7]}});let j=se(t[2].criticalIssues),h=[];for(let o=0;o<j.length;o+=1)h[o]=Re(Te(t,j,o));const y=o=>L(h[o],1,1,()=>{h[o]=null});let d=se(t[2].policyConflictLog),$=[];for(let o=0;o<d.length;o+=1)$[o]=Oe(Be(t,d,o));const P=o=>L($[o],1,1,()=>{$[o]=null});return c=new pt({props:{data:t[8],$$slots:{default:[Qt]},$$scope:{ctx:t}}}),_=new Et({props:{map:t[3]}}),{c(){G(e.$$.fragment),n=T(),G(l.$$.fragment),i=T();for(let o=0;o<h.length;o+=1)h[o].c();a=T();for(let o=0;o<$.length;o+=1)$[o].c();s=T(),G(c.$$.fragment),u=T(),G(_.$$.fragment)},l(o){M(e.$$.fragment,o),n=q(o),M(l.$$.fragment,o),i=q(o);for(let p=0;p<h.length;p+=1)h[p].l(o);a=q(o);for(let p=0;p<$.length;p+=1)$[p].l(o);s=q(o),M(c.$$.fragment,o),u=q(o),M(_.$$.fragment,o)},m(o,p){V(e,o,p),I(o,n,p),V(l,o,p),I(o,i,p);for(let S=0;S<h.length;S+=1)h[S]&&h[S].m(o,p);I(o,a,p);for(let S=0;S<$.length;S+=1)$[S]&&$[S].m(o,p);I(o,s,p),V(c,o,p),I(o,u,p),V(_,o,p),f=!0},p(o,p){const S={};if(p[0]&4&&(S.gj=o[2].summary.networkMap),p[0]&128&&(S.show=o[7]),l.$set(S),p[0]&516){j=se(o[2].criticalIssues);let w;for(w=0;w<j.length;w+=1){const J=Te(o,j,w);h[w]?(h[w].p(J,p),b(h[w],1)):(h[w]=Re(J),h[w].c(),b(h[w],1),h[w].m(a.parentNode,a))}for(re(),w=j.length;w<h.length;w+=1)y(w);ae()}if(p[0]&516){d=se(o[2].policyConflictLog);let w;for(w=0;w<d.length;w+=1){const J=Be(o,d,w);$[w]?($[w].p(J,p),b($[w],1)):($[w]=Oe(J),$[w].c(),b($[w],1),$[w].m(s.parentNode,s))}for(re(),w=d.length;w<$.length;w+=1)P(w);ae()}const E={};p[0]&256&&(E.data=o[8]),p[1]&131072&&(E.$$scope={dirty:p,ctx:o}),c.$set(E);const D={};p[0]&8&&(D.map=o[3]),_.$set(D)},i(o){if(!f){b(e.$$.fragment,o),b(l.$$.fragment,o);for(let p=0;p<j.length;p+=1)b(h[p]);for(let p=0;p<d.length;p+=1)b($[p]);b(c.$$.fragment,o),b(_.$$.fragment,o),f=!0}},o(o){L(e.$$.fragment,o),L(l.$$.fragment,o),h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)L(h[p]);$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)L($[p]);L(c.$$.fragment,o),L(_.$$.fragment,o),f=!1},d(o){o&&(v(n),v(i),v(a),v(s),v(u)),F(e,o),F(l,o),$e(h,o),$e($,o),F(c,o),F(_,o)}}}function el(t){let e,n,l,i,a,s,c,u,_,f,j;const h=[Vt,Mt],y=[];function d(o,p){return o[0]==null?0:1}l=d(t),i=y[l]=h[l](t);function $(o){t[37](o)}let P={$$slots:{default:[xt]},$$scope:{ctx:t}};return t[3]!==void 0&&(P.map=t[3]),c=new at({props:P}),x.push(()=>te(c,"map",$)),{c(){e=Z("div"),n=Z("div"),i.c(),a=T(),s=Z("div"),G(c.$$.fragment),this.h()},l(o){e=z(o,"DIV",{style:!0});var p=Y(e);n=z(p,"DIV",{style:!0});var S=Y(n);i.l(S),S.forEach(v),a=q(p),s=z(p,"DIV",{style:!0});var E=Y(s);M(c.$$.fragment,E),E.forEach(v),p.forEach(v),this.h()},h(){H(n,"width","30%"),H(n,"overflow-y","scroll"),H(n,"padding","10px"),H(n,"border","1px solid black"),H(s,"position","relative"),H(s,"width","70%"),H(e,"display","flex"),H(e,"height","80vh")},m(o,p){I(o,e,p),R(e,n),y[l].m(n,null),t[30](n),R(e,a),R(e,s),V(c,s,null),_=!0,f||(j=ot(Gt,"keydown",t[18]),f=!0)},p(o,p){let S=l;l=d(o),l===S?y[l].p(o,p):(re(),L(y[S],1,1,()=>{y[S]=null}),ae(),i=y[l],i?i.p(o,p):(i=y[l]=h[l](o),i.c()),b(i,1),i.m(n,null));const E={};p[0]&396|p[1]&131072&&(E.$$scope={dirty:p,ctx:o}),!u&&p[0]&8&&(u=!0,E.map=o[3],ee(()=>u=!1)),c.$set(E)},i(o){_||(b(i),b(c.$$.fragment,o),_=!0)},o(o){L(i),L(c.$$.fragment,o),_=!1},d(o){o&&v(e),y[l].d(),t[30](null),F(c),f=!1,j()}}}function tl(t,e,n){let l={type:"FeatureCollection",features:[]},i=e??n;if(i!=null){let a=i.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(we(a[i.idx].point))}return l}function we(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function ll(t,e,n){let l,i,a;ge(t,U,m=>n(2,i=m)),ge(t,Dt,m=>n(39,a=m));let s,c,u=a.url.searchParams.get("kind")||"",_=["critical","conflict"].includes(u)?u:"critical",f=null,j=null,h=null,y=!1,d=!0;async function $(m){j=c.scrollTop,n(0,f=m),n(1,h=null),await ve(),n(4,c.scrollTop=0,c)}async function P(m){j=c.scrollTop,n(0,f=m),n(1,h=null),await ve(),n(4,c.scrollTop=0,c);let O=m.kind=="critical"?i.criticalIssues:i.policyConflictLog;s.flyTo({center:O[m.idx].point,duration:500})}async function o(m){let O=m.kind=="critical"?i.criticalIssues:i.policyConflictLog,oe=JSON.parse(JSON.stringify(O[m.idx])),nt=s.getBounds().getWest(),it=s.getBounds().getEast();oe.point[0]+=(it-nt)*.05;let Ne=O.toSpliced(m.idx+1,0,oe);m.kind=="critical"?pe(U,i.criticalIssues=Ne,i):pe(U,i.policyConflictLog=Ne,i),$({kind:m.kind,idx:m.idx+1})}async function p(){n(0,f=null),pe(U,i.policyConflictLog=i.policyConflictLog.toSorted((m,O)=>Ee(m.conflict)-Ee(O.conflict)),i),pe(U,i.criticalIssues=i.criticalIssues.toSorted((m,O)=>De(m.criticalIssue)-De(O.criticalIssue)),i),j!=null&&(await ve(),n(4,c.scrollTop=j,c),j=null)}function S(m){if(!y){if(f!=null){p();return}_=="critical"?(pe(U,i.criticalIssues=[...i.criticalIssues,{criticalIssue:a.url.searchParams.get("code")||"",stage:"",point:m.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),$({kind:"critical",idx:i.criticalIssues.length-1})):(pe(U,i.policyConflictLog=[...i.policyConflictLog,{conflict:a.url.searchParams.get("code")||"",stage:"",point:m.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),$({kind:"conflict",idx:i.policyConflictLog.length-1}))}}st(()=>{D(!1)});function E(){window.confirm("Delete this entry?")&&(f.kind=="critical"?(i.criticalIssues.splice(f.idx,1),U.set(i)):(i.policyConflictLog.splice(f.idx,1),U.set(i)),p())}function D(m){let O={type:"FeatureCollection",features:[...i.criticalIssues.map(oe=>we(oe.point)),...i.policyConflictLog.map(oe=>we(oe.point)),...i.summary.networkMap.features]};O.features.length>0&&s.fitBounds(ct(O),{padding:20,animate:m})}function w(m){let O=m.criticalIssue?vt(m.criticalIssue):"Unknown critical";return m.locationName?`${O} (${m.locationName})`:O}function J(m){let O=m.conflict?bt(m.conflict):"Unknown conflict";return m.locationName?`${O} (${m.locationName})`:O}function A(m){if(f==null)return;let O=m.target.tagName,oe=O=="INPUT"||O=="TEXTAREA";m.key=="Escape"||m.key=="Enter"&&!oe?(m.stopPropagation(),p()):m.key=="Delete"&&!oe&&(m.stopPropagation(),E())}const fe=()=>D(!0);function g(m){y=m,n(6,y)}function k(m){d=m,n(7,d)}function W(m){_=m,n(5,_)}const N=m=>P({kind:"critical",idx:m}),B=m=>n(1,h={kind:"critical",idx:m}),le=()=>n(1,h=null),r=m=>P({kind:"conflict",idx:m}),C=m=>n(1,h={kind:"conflict",idx:m}),ne=()=>n(1,h=null),ie=()=>{let m=$t(f);o({kind:m.kind,idx:m.idx})};function ce(m){x[m?"unshift":"push"](()=>{c=m,n(4,c)})}function ue(m,O){t.$$.not_equal(O.point,m)&&(O.point=m,U.set(i))}const Xe=m=>$({kind:"critical",idx:m}),Qe=m=>$({kind:"critical",idx:m});function xe(m,O){t.$$.not_equal(O.point,m)&&(O.point=m,U.set(i))}const et=m=>$({kind:"conflict",idx:m}),tt=m=>$({kind:"conflict",idx:m});function lt(m){s=m,n(3,s)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(8,l=tl(i,f,h))},[f,h,i,s,c,_,y,d,l,$,P,o,p,S,E,D,w,J,A,fe,g,k,W,N,B,le,r,C,ne,ie,ce,ue,Xe,Qe,xe,et,tt,lt]}class Il extends Ie{constructor(e){super(),Le(this,e,ll,el,ye,{},null,[-1,-1])}}export{Il as component};
