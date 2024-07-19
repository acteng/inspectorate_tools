import{s as we,r as x,e as Z,t as X,a as T,c as z,b as J,d as Q,f as $,g as q,q as H,v as W,i as y,h as R,w as ee,k as ye,y as Xe,R as Qe,W as he,T as pe,D as _e,p as ve,F as ge,j as ce,n as xe,J as be,K as ke}from"../chunks/scheduler.mGr_ZlpV.js";import{S as Ie,i as Le,e as te,c as M,b as V,m as G,t as k,g as se,a as I,f as re,d as F}from"../chunks/index.rGMSHTnh.js";import{j as me,k as $e,M as et,l as tt,b as lt,C as nt,G as it,m as ot}from"../chunks/index.DxWdSAxj.js";import{e as oe}from"../chunks/each.K9grjjo2.js";import{c as st,p as rt}from"../chunks/colors.DaC397qr.js";import{p as Ue}from"../chunks/index.C9OmJtMN.js";import{R as Se}from"../chunks/Radio.DzLHuQmA.js";import{S as Oe}from"../chunks/Select.DOQ97bQB.js";/* empty css                                                    */import{T as He}from"../chunks/TextArea.CQ2iB7w6.js";import{T as Ke}from"../chunks/TextInput.Cd2nGDQC.js";import{s as O}from"../chunks/data.s-qqGm87.js";import{c as at,p as ft,b as Ne,d as De,e as ut,g as ct}from"../chunks/lists.D6CAQBg5.js";import{Y as We}from"../chunks/YesNo.Cj3L6Cc9.js";import{B as pt,G as _t,S as gt,C as mt,a as $t,M as Ze}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.BsQRwGne.js";import{C as dt}from"../chunks/CollapsibleCard.Djd8DNlx.js";import{D as ht}from"../chunks/DefaultButton.Mx2gKMUF.js";import{S as vt}from"../chunks/SecondaryButton.BZ-CsghR.js";import{W as bt}from"../chunks/WarningButton.DoTAjTRB.js";import{G as kt}from"../chunks/GeoreferenceLayer.D7ID2EeL.js";import{C as ze}from"../chunks/ClickableCard.xMY1De4-.js";import"../chunks/paths.DFKateei.js";function Ee(t){let e,n,l;function s(o){t[5](o)}let a={label:"Resolved by Design",inlineSmall:!0};return t[1].criticalIssues[t[0]].resolved!==void 0&&(a.value=t[1].criticalIssues[t[0]].resolved),e=new We({props:a}),x.push(()=>te(e,"value",s)),{c(){M(e.$$.fragment)},l(o){V(e.$$.fragment,o)},m(o,c){G(e,o,c),l=!0},p(o,c){const u={};!n&&c&3&&(n=!0,u.value=o[1].criticalIssues[o[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){F(e,o)}}}function Ct(t){let e,n,l,s,a,o,c,u,_,f,j,g,h,B,C,E,i,p,N,S,D,w;function Y(r){t[2](r)}let A={label:"Critical Issue",emptyOption:!0,choices:at};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(A.value=t[1].criticalIssues[t[0]].criticalIssue),f=new Oe({props:A}),x.push(()=>te(f,"value",Y));function ae(r){t[3](r)}let m={legend:"Stage",choices:Ue(["Existing","Design"]),inlineSmall:!0};t[1].criticalIssues[t[0]].stage!==void 0&&(m.value=t[1].criticalIssues[t[0]].stage),h=new Se({props:m}),x.push(()=>te(h,"value",ae));function v(r){t[4](r)}let K={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(K.value=t[1].criticalIssues[t[0]].locationName),E=new Ke({props:K}),x.push(()=>te(E,"value",v));let L=t[1].criticalIssues[t[0]].stage!="Design"&&Ee(t);function P(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(le.value=t[1].criticalIssues[t[0]].notes),S=new He({props:le}),x.push(()=>te(S,"value",P)),{c(){e=Z("div"),n=Z("a"),l=X("Google StreetView"),a=T(),o=Z("a"),c=X("Bing Streetside"),_=T(),M(f.$$.fragment),g=T(),M(h.$$.fragment),C=T(),M(E.$$.fragment),p=T(),L&&L.c(),N=T(),M(S.$$.fragment),this.h()},l(r){e=z(r,"DIV",{style:!0});var b=J(e);n=z(b,"A",{href:!0,target:!0});var ne=J(n);l=Q(ne,"Google StreetView"),ne.forEach($),a=q(b),o=z(b,"A",{href:!0,target:!0});var ie=J(o);c=Q(ie,"Bing Streetside"),ie.forEach($),b.forEach($),_=q(r),V(f.$$.fragment,r),g=q(r),V(h.$$.fragment,r),C=q(r),V(E.$$.fragment,r),p=q(r),L&&L.l(r),N=q(r),V(S.$$.fragment,r),this.h()},h(){H(n,"href",s=me(t[1].criticalIssues[t[0]].point)),H(n,"target","_blank"),H(o,"href",u=$e(t[1].criticalIssues[t[0]].point)),H(o,"target","_blank"),W(e,"display","flex"),W(e,"justify-content","space-evenly")},m(r,b){y(r,e,b),R(e,n),R(n,l),R(e,a),R(e,o),R(o,c),y(r,_,b),G(f,r,b),y(r,g,b),G(h,r,b),y(r,C,b),G(E,r,b),y(r,p,b),L&&L.m(r,b),y(r,N,b),G(S,r,b),w=!0},p(r,[b]){(!w||b&3&&s!==(s=me(r[1].criticalIssues[r[0]].point)))&&H(n,"href",s),(!w||b&3&&u!==(u=$e(r[1].criticalIssues[r[0]].point)))&&H(o,"href",u);const ne={};!j&&b&3&&(j=!0,ne.value=r[1].criticalIssues[r[0]].criticalIssue,ee(()=>j=!1)),f.$set(ne);const ie={};!B&&b&3&&(B=!0,ie.value=r[1].criticalIssues[r[0]].stage,ee(()=>B=!1)),h.$set(ie);const fe={};!i&&b&3&&(i=!0,fe.value=r[1].criticalIssues[r[0]].locationName,ee(()=>i=!1)),E.$set(fe),r[1].criticalIssues[r[0]].stage!="Design"?L?(L.p(r,b),b&3&&k(L,1)):(L=Ee(r),L.c(),k(L,1),L.m(N.parentNode,N)):L&&(se(),I(L,1,1,()=>{L=null}),re());const ue={};!D&&b&3&&(D=!0,ue.value=r[1].criticalIssues[r[0]].notes,ee(()=>D=!1)),S.$set(ue)},i(r){w||(k(f.$$.fragment,r),k(h.$$.fragment,r),k(E.$$.fragment,r),k(L),k(S.$$.fragment,r),w=!0)},o(r){I(f.$$.fragment,r),I(h.$$.fragment,r),I(E.$$.fragment,r),I(L),I(S.$$.fragment,r),w=!1},d(r){r&&($(e),$(_),$(g),$(C),$(p),$(N)),F(f,r),F(h,r),F(E,r),L&&L.d(r),F(S,r)}}}function wt(t,e,n){let l;ye(t,O,f=>n(1,l=f));let{idx:s}=e;function a(f){t.$$.not_equal(l.criticalIssues[s].criticalIssue,f)&&(l.criticalIssues[s].criticalIssue=f,O.set(l))}function o(f){t.$$.not_equal(l.criticalIssues[s].stage,f)&&(l.criticalIssues[s].stage=f,O.set(l))}function c(f){t.$$.not_equal(l.criticalIssues[s].locationName,f)&&(l.criticalIssues[s].locationName=f,O.set(l))}function u(f){t.$$.not_equal(l.criticalIssues[s].resolved,f)&&(l.criticalIssues[s].resolved=f,O.set(l))}function _(f){t.$$.not_equal(l.criticalIssues[s].notes,f)&&(l.criticalIssues[s].notes=f,O.set(l))}return t.$$set=f=>{"idx"in f&&n(0,s=f.idx)},[s,l,a,o,c,u,_]}class yt extends Ie{constructor(e){super(),Le(this,e,wt,Ct,we,{idx:0})}}function je(t){let e,n,l;function s(o){t[5](o)}let a={label:"Resolved by Design",inlineSmall:!0};return t[1].policyConflictLog[t[0]].resolved!==void 0&&(a.value=t[1].policyConflictLog[t[0]].resolved),e=new We({props:a}),x.push(()=>te(e,"value",s)),{c(){M(e.$$.fragment)},l(o){V(e.$$.fragment,o)},m(o,c){G(e,o,c),l=!0},p(o,c){const u={};!n&&c&3&&(n=!0,u.value=o[1].policyConflictLog[o[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){F(e,o)}}}function It(t){let e,n,l,s,a,o,c,u,_,f,j,g,h,B,C,E,i,p,N,S,D,w;function Y(r){t[2](r)}let A={label:"Policy Conflict",emptyOption:!0,choices:ft};t[1].policyConflictLog[t[0]].conflict!==void 0&&(A.value=t[1].policyConflictLog[t[0]].conflict),f=new Oe({props:A}),x.push(()=>te(f,"value",Y));function ae(r){t[3](r)}let m={legend:"Stage",choices:Ue(["Existing","Design"]),inlineSmall:!0};t[1].policyConflictLog[t[0]].stage!==void 0&&(m.value=t[1].policyConflictLog[t[0]].stage),h=new Se({props:m}),x.push(()=>te(h,"value",ae));function v(r){t[4](r)}let K={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(K.value=t[1].policyConflictLog[t[0]].locationName),E=new Ke({props:K}),x.push(()=>te(E,"value",v));let L=t[1].policyConflictLog[t[0]].stage!="Design"&&je(t);function P(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(le.value=t[1].policyConflictLog[t[0]].notes),S=new He({props:le}),x.push(()=>te(S,"value",P)),{c(){e=Z("div"),n=Z("a"),l=X("Google StreetView"),a=T(),o=Z("a"),c=X("Bing Streetside"),_=T(),M(f.$$.fragment),g=T(),M(h.$$.fragment),C=T(),M(E.$$.fragment),p=T(),L&&L.c(),N=T(),M(S.$$.fragment),this.h()},l(r){e=z(r,"DIV",{style:!0});var b=J(e);n=z(b,"A",{href:!0,target:!0});var ne=J(n);l=Q(ne,"Google StreetView"),ne.forEach($),a=q(b),o=z(b,"A",{href:!0,target:!0});var ie=J(o);c=Q(ie,"Bing Streetside"),ie.forEach($),b.forEach($),_=q(r),V(f.$$.fragment,r),g=q(r),V(h.$$.fragment,r),C=q(r),V(E.$$.fragment,r),p=q(r),L&&L.l(r),N=q(r),V(S.$$.fragment,r),this.h()},h(){H(n,"href",s=me(t[1].policyConflictLog[t[0]].point)),H(n,"target","_blank"),H(o,"href",u=$e(t[1].policyConflictLog[t[0]].point)),H(o,"target","_blank"),W(e,"display","flex"),W(e,"justify-content","space-evenly")},m(r,b){y(r,e,b),R(e,n),R(n,l),R(e,a),R(e,o),R(o,c),y(r,_,b),G(f,r,b),y(r,g,b),G(h,r,b),y(r,C,b),G(E,r,b),y(r,p,b),L&&L.m(r,b),y(r,N,b),G(S,r,b),w=!0},p(r,[b]){(!w||b&3&&s!==(s=me(r[1].policyConflictLog[r[0]].point)))&&H(n,"href",s),(!w||b&3&&u!==(u=$e(r[1].policyConflictLog[r[0]].point)))&&H(o,"href",u);const ne={};!j&&b&3&&(j=!0,ne.value=r[1].policyConflictLog[r[0]].conflict,ee(()=>j=!1)),f.$set(ne);const ie={};!B&&b&3&&(B=!0,ie.value=r[1].policyConflictLog[r[0]].stage,ee(()=>B=!1)),h.$set(ie);const fe={};!i&&b&3&&(i=!0,fe.value=r[1].policyConflictLog[r[0]].locationName,ee(()=>i=!1)),E.$set(fe),r[1].policyConflictLog[r[0]].stage!="Design"?L?(L.p(r,b),b&3&&k(L,1)):(L=je(r),L.c(),k(L,1),L.m(N.parentNode,N)):L&&(se(),I(L,1,1,()=>{L=null}),re());const ue={};!D&&b&3&&(D=!0,ue.value=r[1].policyConflictLog[r[0]].notes,ee(()=>D=!1)),S.$set(ue)},i(r){w||(k(f.$$.fragment,r),k(h.$$.fragment,r),k(E.$$.fragment,r),k(L),k(S.$$.fragment,r),w=!0)},o(r){I(f.$$.fragment,r),I(h.$$.fragment,r),I(E.$$.fragment,r),I(L),I(S.$$.fragment,r),w=!1},d(r){r&&($(e),$(_),$(g),$(C),$(p),$(N)),F(f,r),F(h,r),F(E,r),L&&L.d(r),F(S,r)}}}function Lt(t,e,n){let l;ye(t,O,f=>n(1,l=f));let{idx:s}=e;function a(f){t.$$.not_equal(l.policyConflictLog[s].conflict,f)&&(l.policyConflictLog[s].conflict=f,O.set(l))}function o(f){t.$$.not_equal(l.policyConflictLog[s].stage,f)&&(l.policyConflictLog[s].stage=f,O.set(l))}function c(f){t.$$.not_equal(l.policyConflictLog[s].locationName,f)&&(l.policyConflictLog[s].locationName=f,O.set(l))}function u(f){t.$$.not_equal(l.policyConflictLog[s].resolved,f)&&(l.policyConflictLog[s].resolved=f,O.set(l))}function _(f){t.$$.not_equal(l.policyConflictLog[s].notes,f)&&(l.policyConflictLog[s].notes=f,O.set(l))}return t.$$set=f=>{"idx"in f&&n(0,s=f.idx)},[s,l,a,o,c,u,_]}class St extends Ie{constructor(e){super(),Le(this,e,Lt,It,we,{idx:0})}}const{window:Nt}=tt;function Pe(t,e,n){const l=t.slice();return l[37]=e[n],l[38]=e,l[39]=n,l}function Te(t,e,n){const l=t.slice();return l[40]=e[n],l[41]=e,l[39]=n,l}function qe(t,e,n){const l=t.slice();return l[37]=e[n],l[39]=n,l}function Ae(t,e,n){const l=t.slice();return l[40]=e[n],l[39]=n,l}function Dt(t){let e,n,l,s,a,o,c,u;e=new ht({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),e.$on("click",t[11]),l=new bt({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),l.$on("click",t[13]);const _=[qt,Tt],f=[];function j(g,h){return g[0].kind=="critical"?0:1}return a=j(t),o=f[a]=_[a](t),{c(){M(e.$$.fragment),n=T(),M(l.$$.fragment),s=T(),o.c(),c=_e()},l(g){V(e.$$.fragment,g),n=q(g),V(l.$$.fragment,g),s=q(g),o.l(g),c=_e()},m(g,h){G(e,g,h),y(g,n,h),G(l,g,h),y(g,s,h),f[a].m(g,h),y(g,c,h),u=!0},p(g,h){const B={};h[1]&8192&&(B.$$scope={dirty:h,ctx:g}),e.$set(B);const C={};h[1]&8192&&(C.$$scope={dirty:h,ctx:g}),l.$set(C);let E=a;a=j(g),a===E?f[a].p(g,h):(se(),I(f[E],1,1,()=>{f[E]=null}),re(),o=f[a],o?o.p(g,h):(o=f[a]=_[a](g),o.c()),k(o,1),o.m(c.parentNode,c))},i(g){u||(k(e.$$.fragment,g),k(l.$$.fragment,g),k(o),u=!0)},o(g){I(e.$$.fragment,g),I(l.$$.fragment,g),I(o),u=!1},d(g){g&&($(n),$(s),$(c)),F(e,g),F(l,g),f[a].d(g)}}}function Et(t){let e,n,l,s,a,o,c="Click the map to add a problem, or select a problem to fill out data",u,_,f="Critical Issues",j,g,h,B="Policy Conflicts",C,E,i;e=new dt({props:{label:"Tools",open:!0,$$slots:{default:[Mt]},$$scope:{ctx:t}}});function p(m){t[21](m)}let N={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[5]!==void 0&&(N.value=t[5]),l=new Se({props:N}),x.push(()=>te(l,"value",p));let S=oe(t[2].criticalIssues),D=[];for(let m=0;m<S.length;m+=1)D[m]=Me(Ae(t,S,m));const w=m=>I(D[m],1,1,()=>{D[m]=null});let Y=oe(t[2].policyConflictLog),A=[];for(let m=0;m<Y.length;m+=1)A[m]=Ge(qe(t,Y,m));const ae=m=>I(A[m],1,1,()=>{A[m]=null});return{c(){M(e.$$.fragment),n=T(),M(l.$$.fragment),a=T(),o=Z("p"),o.textContent=c,u=T(),_=Z("h3"),_.textContent=f,j=T();for(let m=0;m<D.length;m+=1)D[m].c();g=T(),h=Z("h3"),h.textContent=B,C=T();for(let m=0;m<A.length;m+=1)A[m].c();E=_e()},l(m){V(e.$$.fragment,m),n=q(m),V(l.$$.fragment,m),a=q(m),o=z(m,"P",{"data-svelte-h":!0}),ve(o)!=="svelte-12ba5j2"&&(o.textContent=c),u=q(m),_=z(m,"H3",{"data-svelte-h":!0}),ve(_)!=="svelte-1qhh5xr"&&(_.textContent=f),j=q(m);for(let v=0;v<D.length;v+=1)D[v].l(m);g=q(m),h=z(m,"H3",{"data-svelte-h":!0}),ve(h)!=="svelte-eyxzjx"&&(h.textContent=B),C=q(m);for(let v=0;v<A.length;v+=1)A[v].l(m);E=_e()},m(m,v){G(e,m,v),y(m,n,v),G(l,m,v),y(m,a,v),y(m,o,v),y(m,u,v),y(m,_,v),y(m,j,v);for(let K=0;K<D.length;K+=1)D[K]&&D[K].m(m,v);y(m,g,v),y(m,h,v),y(m,C,v);for(let K=0;K<A.length;K+=1)A[K]&&A[K].m(m,v);y(m,E,v),i=!0},p(m,v){const K={};v[0]&200|v[1]&8192&&(K.$$scope={dirty:v,ctx:m}),e.$set(K);const L={};if(!s&&v[0]&32&&(s=!0,L.value=m[5],ee(()=>s=!1)),l.$set(L),v[0]&33798){S=oe(m[2].criticalIssues);let P;for(P=0;P<S.length;P+=1){const le=Ae(m,S,P);D[P]?(D[P].p(le,v),k(D[P],1)):(D[P]=Me(le),D[P].c(),k(D[P],1),D[P].m(g.parentNode,g))}for(se(),P=S.length;P<D.length;P+=1)w(P);re()}if(v[0]&66566){Y=oe(m[2].policyConflictLog);let P;for(P=0;P<Y.length;P+=1){const le=qe(m,Y,P);A[P]?(A[P].p(le,v),k(A[P],1)):(A[P]=Ge(le),A[P].c(),k(A[P],1),A[P].m(E.parentNode,E))}for(se(),P=Y.length;P<A.length;P+=1)ae(P);re()}},i(m){if(!i){k(e.$$.fragment,m),k(l.$$.fragment,m);for(let v=0;v<S.length;v+=1)k(D[v]);for(let v=0;v<Y.length;v+=1)k(A[v]);i=!0}},o(m){I(e.$$.fragment,m),I(l.$$.fragment,m),D=D.filter(Boolean);for(let v=0;v<D.length;v+=1)I(D[v]);A=A.filter(Boolean);for(let v=0;v<A.length;v+=1)I(A[v]);i=!1},d(m){m&&($(n),$(a),$(o),$(u),$(_),$(j),$(g),$(h),$(C),$(E)),F(e,m),F(l,m),ge(D,m),ge(A,m)}}}function jt(t){let e;return{c(){e=X("Save")},l(n){e=Q(n,"Save")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function Pt(t){let e;return{c(){e=X("Delete")},l(n){e=Q(n,"Delete")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function Tt(t){let e,n;return e=new St({props:{idx:t[0].idx}}),{c(){M(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,s){G(e,l,s),n=!0},p(l,s){const a={};s[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function qt(t){let e,n;return e=new yt({props:{idx:t[0].idx}}),{c(){M(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,s){G(e,l,s),n=!0},p(l,s){const a={};s[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function At(t){let e;return{c(){e=X("Zoom to fit")},l(n){e=Q(n,"Zoom to fit")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function Bt(t){let e;return{c(){e=X("Show scheme context")},l(n){e=Q(n,"Show scheme context")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function Mt(t){let e,n,l,s,a,o,c,u,_,f,j,g;e=new vt({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),e.$on("click",t[18]),l=new pt({}),a=new _t({});function h(i){t[19](i)}let B={map:t[3]};t[6]!==void 0&&(B.enabled=t[6]),c=new gt({props:B}),x.push(()=>te(c,"enabled",h));function C(i){t[20](i)}let E={$$slots:{default:[Bt]},$$scope:{ctx:t}};return t[7]!==void 0&&(E.checked=t[7]),f=new mt({props:E}),x.push(()=>te(f,"checked",C)),{c(){M(e.$$.fragment),n=T(),M(l.$$.fragment),s=T(),M(a.$$.fragment),o=T(),M(c.$$.fragment),_=T(),M(f.$$.fragment)},l(i){V(e.$$.fragment,i),n=q(i),V(l.$$.fragment,i),s=q(i),V(a.$$.fragment,i),o=q(i),V(c.$$.fragment,i),_=q(i),V(f.$$.fragment,i)},m(i,p){G(e,i,p),y(i,n,p),G(l,i,p),y(i,s,p),G(a,i,p),y(i,o,p),G(c,i,p),y(i,_,p),G(f,i,p),g=!0},p(i,p){const N={};p[1]&8192&&(N.$$scope={dirty:p,ctx:i}),e.$set(N);const S={};p[0]&8&&(S.map=i[3]),!u&&p[0]&64&&(u=!0,S.enabled=i[6],ee(()=>u=!1)),c.$set(S);const D={};p[1]&8192&&(D.$$scope={dirty:p,ctx:i}),!j&&p[0]&128&&(j=!0,D.checked=i[7],ee(()=>j=!1)),f.$set(D)},i(i){g||(k(e.$$.fragment,i),k(l.$$.fragment,i),k(a.$$.fragment,i),k(c.$$.fragment,i),k(f.$$.fragment,i),g=!0)},o(i){I(e.$$.fragment,i),I(l.$$.fragment,i),I(a.$$.fragment,i),I(c.$$.fragment,i),I(f.$$.fragment,i),g=!1},d(i){i&&($(n),$(s),$(o),$(_)),F(e,i),F(l,i),F(a,i),F(c,i),F(f,i)}}}function Be(t){let e,n,l=t[40].resolved+"",s;return{c(){e=Z("span"),n=X("Resolved: "),s=X(l)},l(a){e=z(a,"SPAN",{});var o=J(e);n=Q(o,"Resolved: "),s=Q(o,l),o.forEach($)},m(a,o){y(a,e,o),R(e,n),R(e,s)},p(a,o){o[0]&4&&l!==(l=a[40].resolved+"")&&ce(s,l)},d(a){a&&$(e)}}}function Vt(t){let e,n,l,s=t[40].stage+"",a,o,c=t[40].stage!="Design"&&Be(t);return{c(){e=Z("div"),n=Z("span"),l=X("Stage: "),a=X(s),o=T(),c&&c.c(),this.h()},l(u){e=z(u,"DIV",{style:!0});var _=J(e);n=z(_,"SPAN",{});var f=J(n);l=Q(f,"Stage: "),a=Q(f,s),f.forEach($),o=q(_),c&&c.l(_),_.forEach($),this.h()},h(){W(e,"width","100%"),W(e,"display","flex"),W(e,"justify-content","space-between")},m(u,_){y(u,e,_),R(e,n),R(n,l),R(n,a),R(e,o),c&&c.m(e,null)},p(u,_){_[0]&4&&s!==(s=u[40].stage+"")&&ce(a,s),u[40].stage!="Design"?c?c.p(u,_):(c=Be(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&$(e),c&&c.d()}}}function Me(t){let e,n,l;function s(){return t[22](t[39])}function a(){return t[23](t[39])}return n=new ze({props:{name:t[15](t[40]),$$slots:{default:[Vt]},$$scope:{ctx:t}}}),n.$on("click",s),n.$on("mouseenter",a),n.$on("mouseleave",t[24]),{c(){e=Z("li"),M(n.$$.fragment)},l(o){e=z(o,"LI",{});var c=J(e);V(n.$$.fragment,c),c.forEach($)},m(o,c){y(o,e,c),G(n,e,null),l=!0},p(o,c){t=o;const u={};c[0]&4&&(u.name=t[15](t[40])),c[0]&4|c[1]&8192&&(u.$$scope={dirty:c,ctx:t}),n.$set(u)},i(o){l||(k(n.$$.fragment,o),l=!0)},o(o){I(n.$$.fragment,o),l=!1},d(o){o&&$(e),F(n)}}}function Ve(t){let e,n,l=t[37].resolved+"",s;return{c(){e=Z("span"),n=X("Resolved: "),s=X(l)},l(a){e=z(a,"SPAN",{});var o=J(e);n=Q(o,"Resolved: "),s=Q(o,l),o.forEach($)},m(a,o){y(a,e,o),R(e,n),R(e,s)},p(a,o){o[0]&4&&l!==(l=a[37].resolved+"")&&ce(s,l)},d(a){a&&$(e)}}}function Gt(t){let e,n,l,s=t[37].stage+"",a,o,c,u=t[37].stage!="Design"&&Ve(t);return{c(){e=Z("div"),n=Z("span"),l=X("Stage: "),a=X(s),o=T(),u&&u.c(),c=T(),this.h()},l(_){e=z(_,"DIV",{style:!0});var f=J(e);n=z(f,"SPAN",{});var j=J(n);l=Q(j,"Stage: "),a=Q(j,s),j.forEach($),o=q(f),u&&u.l(f),f.forEach($),c=q(_),this.h()},h(){W(e,"width","100%"),W(e,"display","flex"),W(e,"justify-content","space-between")},m(_,f){y(_,e,f),R(e,n),R(n,l),R(n,a),R(e,o),u&&u.m(e,null),y(_,c,f)},p(_,f){f[0]&4&&s!==(s=_[37].stage+"")&&ce(a,s),_[37].stage!="Design"?u?u.p(_,f):(u=Ve(_),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(_){_&&($(e),$(c)),u&&u.d()}}}function Ge(t){let e,n;function l(){return t[25](t[39])}function s(){return t[26](t[39])}return e=new ze({props:{name:t[16](t[37]),$$slots:{default:[Gt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",s),e.$on("mouseleave",t[27]),{c(){M(e.$$.fragment)},l(a){V(e.$$.fragment,a)},m(a,o){G(e,a,o),n=!0},p(a,o){t=a;const c={};o[0]&4&&(c.name=t[16](t[37])),o[0]&4|o[1]&8192&&(c.$$scope={dirty:o,ctx:t}),e.$set(c)},i(a){n||(k(e.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),n=!1},d(a){F(e,a)}}}function Ft(t){let e,n,l,s=t[40].criticalIssue+"",a;return{c(){e=be("svg"),n=be("polygon"),l=be("text"),a=X(s),this.h()},l(o){e=ke(o,"svg",{width:!0,height:!0,xmlns:!0});var c=J(e);n=ke(c,"polygon",{points:!0,fill:!0,class:!0}),J(n).forEach($),l=ke(c,"text",{x:!0,y:!0});var u=J(l);a=Q(u,s),u.forEach($),c.forEach($),this.h()},h(){H(n,"points","20,0 0,40 40,40"),H(n,"fill",st.critical.background),H(n,"class","svelte-ktyu3j"),H(l,"x","13"),H(l,"y","30"),W(l,"fill","white"),H(e,"width","40"),H(e,"height","40"),H(e,"xmlns","http://www.w3.org/2000/svg")},m(o,c){y(o,e,c),R(e,n),R(e,l),R(l,a)},p(o,c){c[0]&4&&s!==(s=o[40].criticalIssue+"")&&ce(a,s)},d(o){o&&$(e)}}}function Fe(t){let e,n,l;function s(u){t[29](u,t[40])}function a(){return t[30](t[39])}function o(){return t[31](t[39])}let c={draggable:!0,$$slots:{default:[Ft]},$$scope:{ctx:t}};return t[40].point!==void 0&&(c.lngLat=t[40].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",s)),e.$on("click",a),e.$on("dragend",o),{c(){M(e.$$.fragment)},l(u){V(e.$$.fragment,u)},m(u,_){G(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&8192&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[40].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(k(e.$$.fragment,u),l=!0)},o(u){I(e.$$.fragment,u),l=!1},d(u){F(e,u)}}}function Rt(t){let e,n=t[37].conflict+"",l;return{c(){e=Z("span"),l=X(n),this.h()},l(s){e=z(s,"SPAN",{class:!0});var a=J(e);l=Q(a,n),a.forEach($),this.h()},h(){H(e,"class","dot svelte-ktyu3j"),W(e,"background",rt)},m(s,a){y(s,e,a),R(e,l)},p(s,a){a[0]&4&&n!==(n=s[37].conflict+"")&&ce(l,n)},d(s){s&&$(e)}}}function Re(t){let e,n,l;function s(u){t[32](u,t[37])}function a(){return t[33](t[39])}function o(){return t[34](t[39])}let c={draggable:!0,$$slots:{default:[Rt]},$$scope:{ctx:t}};return t[37].point!==void 0&&(c.lngLat=t[37].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",s)),e.$on("click",a),e.$on("dragend",o),{c(){M(e.$$.fragment)},l(u){V(e.$$.fragment,u)},m(u,_){G(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&8192&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[37].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(k(e.$$.fragment,u),l=!0)},o(u){I(e.$$.fragment,u),l=!1},d(u){F(e,u)}}}function Ut(t){let e,n;return e=new ot({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){M(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,s){G(e,l,s),n=!0},p:xe,i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Ot(t){let e,n,l,s,a,o,c,u,_,f;e=new $t({}),e.$on("click",t[12]),l=new nt({props:{gj:t[2].summary.networkMap,show:t[7]}});let j=oe(t[2].criticalIssues),g=[];for(let i=0;i<j.length;i+=1)g[i]=Fe(Te(t,j,i));const h=i=>I(g[i],1,1,()=>{g[i]=null});let B=oe(t[2].policyConflictLog),C=[];for(let i=0;i<B.length;i+=1)C[i]=Re(Pe(t,B,i));const E=i=>I(C[i],1,1,()=>{C[i]=null});return c=new it({props:{data:t[8],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),_=new kt({props:{map:t[3]}}),{c(){M(e.$$.fragment),n=T(),M(l.$$.fragment),s=T();for(let i=0;i<g.length;i+=1)g[i].c();a=T();for(let i=0;i<C.length;i+=1)C[i].c();o=T(),M(c.$$.fragment),u=T(),M(_.$$.fragment)},l(i){V(e.$$.fragment,i),n=q(i),V(l.$$.fragment,i),s=q(i);for(let p=0;p<g.length;p+=1)g[p].l(i);a=q(i);for(let p=0;p<C.length;p+=1)C[p].l(i);o=q(i),V(c.$$.fragment,i),u=q(i),V(_.$$.fragment,i)},m(i,p){G(e,i,p),y(i,n,p),G(l,i,p),y(i,s,p);for(let N=0;N<g.length;N+=1)g[N]&&g[N].m(i,p);y(i,a,p);for(let N=0;N<C.length;N+=1)C[N]&&C[N].m(i,p);y(i,o,p),G(c,i,p),y(i,u,p),G(_,i,p),f=!0},p(i,p){const N={};if(p[0]&4&&(N.gj=i[2].summary.networkMap),p[0]&128&&(N.show=i[7]),l.$set(N),p[0]&516){j=oe(i[2].criticalIssues);let w;for(w=0;w<j.length;w+=1){const Y=Te(i,j,w);g[w]?(g[w].p(Y,p),k(g[w],1)):(g[w]=Fe(Y),g[w].c(),k(g[w],1),g[w].m(a.parentNode,a))}for(se(),w=j.length;w<g.length;w+=1)h(w);re()}if(p[0]&516){B=oe(i[2].policyConflictLog);let w;for(w=0;w<B.length;w+=1){const Y=Pe(i,B,w);C[w]?(C[w].p(Y,p),k(C[w],1)):(C[w]=Re(Y),C[w].c(),k(C[w],1),C[w].m(o.parentNode,o))}for(se(),w=B.length;w<C.length;w+=1)E(w);re()}const S={};p[0]&256&&(S.data=i[8]),p[1]&8192&&(S.$$scope={dirty:p,ctx:i}),c.$set(S);const D={};p[0]&8&&(D.map=i[3]),_.$set(D)},i(i){if(!f){k(e.$$.fragment,i),k(l.$$.fragment,i);for(let p=0;p<j.length;p+=1)k(g[p]);for(let p=0;p<B.length;p+=1)k(C[p]);k(c.$$.fragment,i),k(_.$$.fragment,i),f=!0}},o(i){I(e.$$.fragment,i),I(l.$$.fragment,i),g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)I(g[p]);C=C.filter(Boolean);for(let p=0;p<C.length;p+=1)I(C[p]);I(c.$$.fragment,i),I(_.$$.fragment,i),f=!1},d(i){i&&($(n),$(s),$(a),$(o),$(u)),F(e,i),F(l,i),ge(g,i),ge(C,i),F(c,i),F(_,i)}}}function Ht(t){let e,n,l,s,a,o,c,u,_,f,j;const g=[Et,Dt],h=[];function B(i,p){return i[0]==null?0:1}l=B(t),s=h[l]=g[l](t);function C(i){t[35](i)}let E={$$slots:{default:[Ot]},$$scope:{ctx:t}};return t[3]!==void 0&&(E.map=t[3]),c=new et({props:E}),x.push(()=>te(c,"map",C)),{c(){e=Z("div"),n=Z("div"),s.c(),a=T(),o=Z("div"),M(c.$$.fragment),this.h()},l(i){e=z(i,"DIV",{style:!0});var p=J(e);n=z(p,"DIV",{style:!0});var N=J(n);s.l(N),N.forEach($),a=q(p),o=z(p,"DIV",{style:!0});var S=J(o);V(c.$$.fragment,S),S.forEach($),p.forEach($),this.h()},h(){W(n,"width","30%"),W(n,"overflow-y","scroll"),W(n,"padding","10px"),W(n,"border","1px solid black"),W(o,"position","relative"),W(o,"width","70%"),W(e,"display","flex"),W(e,"height","80vh")},m(i,p){y(i,e,p),R(e,n),h[l].m(n,null),t[28](n),R(e,a),R(e,o),G(c,o,null),_=!0,f||(j=Xe(Nt,"keydown",t[17]),f=!0)},p(i,p){let N=l;l=B(i),l===N?h[l].p(i,p):(se(),I(h[N],1,1,()=>{h[N]=null}),re(),s=h[l],s?s.p(i,p):(s=h[l]=g[l](i),s.c()),k(s,1),s.m(n,null));const S={};p[0]&396|p[1]&8192&&(S.$$scope={dirty:p,ctx:i}),!u&&p[0]&8&&(u=!0,S.map=i[3],ee(()=>u=!1)),c.$set(S)},i(i){_||(k(s),k(c.$$.fragment,i),_=!0)},o(i){I(s),I(c.$$.fragment,i),_=!1},d(i){i&&$(e),h[l].d(),t[28](null),F(c),f=!1,j()}}}function Kt(t,e,n){let l={type:"FeatureCollection",features:[]},s=e??n;if(s!=null){let a=s.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(Ce(a[s.idx].point))}return l}function Ce(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function Wt(t,e,n){let l,s;ye(t,O,d=>n(2,s=d));let a,o,c="critical",u=null,_=null,f=null,j=!1,g=!0;async function h(d){_=o.scrollTop,n(0,u=d),n(1,f=null),await he(),n(4,o.scrollTop=0,o)}async function B(d){_=o.scrollTop,n(0,u=d),n(1,f=null),await he(),n(4,o.scrollTop=0,o);let U=d.kind=="critical"?s.criticalIssues:s.policyConflictLog;a.flyTo({center:U[d.idx].point,duration:500})}async function C(){n(0,u=null),pe(O,s.policyConflictLog=s.policyConflictLog.toSorted((d,U)=>Ne(d.conflict)-Ne(U.conflict)),s),pe(O,s.criticalIssues=s.criticalIssues.toSorted((d,U)=>De(d.criticalIssue)-De(U.criticalIssue)),s),_!=null&&(await he(),n(4,o.scrollTop=_,o),_=null)}function E(d){if(!j){if(u!=null){C();return}c=="critical"?(pe(O,s.criticalIssues=[...s.criticalIssues,{criticalIssue:"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),h({kind:"critical",idx:s.criticalIssues.length-1})):(pe(O,s.policyConflictLog=[...s.policyConflictLog,{conflict:"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),h({kind:"conflict",idx:s.policyConflictLog.length-1}))}}Qe(()=>{p(!1)});function i(){window.confirm("Delete this entry?")&&(u.kind=="critical"?(s.criticalIssues.splice(u.idx,1),O.set(s)):(s.policyConflictLog.splice(u.idx,1),O.set(s)),C())}function p(d){let U={type:"FeatureCollection",features:[...s.criticalIssues.map(de=>Ce(de.point)),...s.policyConflictLog.map(de=>Ce(de.point)),...s.summary.networkMap.features]};U.features.length>0&&a.fitBounds(lt(U),{padding:20,animate:d})}function N(d){let U=d.criticalIssue?ut(d.criticalIssue):"Unknown critical";return d.locationName?`${U} (${d.locationName})`:U}function S(d){let U=d.conflict?ct(d.conflict):"Unknown conflict";return d.locationName?`${U} (${d.locationName})`:U}function D(d){if(u!=null&&d.key=="Escape")d.stopPropagation(),C();else if(u!=null&&d.key=="Delete"){let U=d.target.tagName;if(U=="INPUT"||U=="TEXTAREA")return;d.stopPropagation(),i()}}const w=()=>p(!0);function Y(d){j=d,n(6,j)}function A(d){g=d,n(7,g)}function ae(d){c=d,n(5,c)}const m=d=>B({kind:"critical",idx:d}),v=d=>n(1,f={kind:"critical",idx:d}),K=()=>n(1,f=null),L=d=>B({kind:"conflict",idx:d}),P=d=>n(1,f={kind:"conflict",idx:d}),le=()=>n(1,f=null);function r(d){x[d?"unshift":"push"](()=>{o=d,n(4,o)})}function b(d,U){t.$$.not_equal(U.point,d)&&(U.point=d,O.set(s))}const ne=d=>h({kind:"critical",idx:d}),ie=d=>h({kind:"critical",idx:d});function fe(d,U){t.$$.not_equal(U.point,d)&&(U.point=d,O.set(s))}const ue=d=>h({kind:"conflict",idx:d}),Je=d=>h({kind:"conflict",idx:d});function Ye(d){a=d,n(3,a)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(8,l=Kt(s,u,f))},[u,f,s,a,o,c,j,g,l,h,B,C,E,i,p,N,S,D,w,Y,A,ae,m,v,K,L,P,le,r,b,ne,ie,fe,ue,Je,Ye]}class ml extends Ie{constructor(e){super(),Le(this,e,Wt,Ht,we,{},null,[-1,-1])}}export{ml as component};
