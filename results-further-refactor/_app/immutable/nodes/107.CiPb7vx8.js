import{s as we,w as x,e as H,t as X,a as q,c as K,b as W,d as Q,f as $,g as A,p as O,q as z,i as y,h as F,x as ee,k as ye,z as Ze,R as Ye,W as he,T as Se,E as pe,m as ve,G as _e,j as ce,n as Je,K as be,L as ke}from"../chunks/scheduler.ytQcc2rf.js";import{S as Ie,i as Le,e as te,c as G,a as M,m as V,t as k,g as se,b as I,f as re,d as R}from"../chunks/index.D9yYtTfk.js";import{j as me,k as ge,M as Xe,l as Qe,b as xe,C as et,G as tt,m as lt}from"../chunks/index.C0LFwIuq.js";import{e as oe}from"../chunks/each.2RvRdhFj.js";import{c as nt,p as it}from"../chunks/colors.DaC397qr.js";import{p as Re}from"../chunks/index.DBehmpWI.js";import{S as $e}from"../chunks/Select.CEc0mqfX.js";/* empty css                                                               */import{T as Fe}from"../chunks/TextArea.BNsNWsw2.js";import{T as Oe}from"../chunks/TextInput.DxUXxcOo.js";import{s as J}from"../chunks/data.CBzbkkd9.js";import{c as ot,p as st,b as rt,g as at}from"../chunks/lists.BBs_zCmn.js";import{Y as Ue}from"../chunks/YesNo.XEVy_4jl.js";import{B as ft,G as ut,S as ct,C as pt,a as _t,M as ze}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.DsSNZa9p.js";import{C as mt}from"../chunks/CollapsibleCard.Bf0oqccF.js";import{D as gt}from"../chunks/DefaultButton.DeS4Ykkw.js";import{R as $t}from"../chunks/Radio.CjybguQ-.js";import{S as dt}from"../chunks/SecondaryButton.Dq9MsXNi.js";import{W as ht}from"../chunks/WarningButton.C6jnTAfb.js";import{G as vt}from"../chunks/GeoreferenceLayer.CAmDbHNb.js";import{C as He}from"../chunks/ClickableCard.CEal2XW6.js";/* empty css                                                    */import"../chunks/paths.BTohfvkA.js";function Ne(t){let e,n,l;function s(o){t[5](o)}let a={label:"Resolved by Design"};return t[1].criticalIssues[t[0]].resolved!==void 0&&(a.value=t[1].criticalIssues[t[0]].resolved),e=new Ue({props:a}),x.push(()=>te(e,"value",s)),{c(){G(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,c){V(e,o,c),l=!0},p(o,c){const u={};!n&&c&3&&(n=!0,u.value=o[1].criticalIssues[o[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){R(e,o)}}}function bt(t){let e,n,l,s,a,o,c,u,_,f,j,m,d,B,C,D,i,p,N,S,E,w;function Z(r){t[2](r)}let P={label:"Critical Issue",emptyOption:!0,choices:ot};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(P.value=t[1].criticalIssues[t[0]].criticalIssue),f=new $e({props:P}),x.push(()=>te(f,"value",Z));function ae(r){t[3](r)}let g={label:"Stage",emptyOption:!0,choices:Re(["Existing","Design"])};t[1].criticalIssues[t[0]].stage!==void 0&&(g.value=t[1].criticalIssues[t[0]].stage),d=new $e({props:g}),x.push(()=>te(d,"value",ae));function v(r){t[4](r)}let U={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(U.value=t[1].criticalIssues[t[0]].locationName),D=new Oe({props:U}),x.push(()=>te(D,"value",v));let L=t[1].criticalIssues[t[0]].stage!="Design"&&Ne(t);function T(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(le.value=t[1].criticalIssues[t[0]].notes),S=new Fe({props:le}),x.push(()=>te(S,"value",T)),{c(){e=H("div"),n=H("a"),l=X("Google StreetView"),a=q(),o=H("a"),c=X("Bing Streetside"),_=q(),G(f.$$.fragment),m=q(),G(d.$$.fragment),C=q(),G(D.$$.fragment),p=q(),L&&L.c(),N=q(),G(S.$$.fragment),this.h()},l(r){e=K(r,"DIV",{style:!0});var b=W(e);n=K(b,"A",{href:!0,target:!0});var ne=W(n);l=Q(ne,"Google StreetView"),ne.forEach($),a=A(b),o=K(b,"A",{href:!0,target:!0});var ie=W(o);c=Q(ie,"Bing Streetside"),ie.forEach($),b.forEach($),_=A(r),M(f.$$.fragment,r),m=A(r),M(d.$$.fragment,r),C=A(r),M(D.$$.fragment,r),p=A(r),L&&L.l(r),N=A(r),M(S.$$.fragment,r),this.h()},h(){O(n,"href",s=me(t[1].criticalIssues[t[0]].point)),O(n,"target","_blank"),O(o,"href",u=ge(t[1].criticalIssues[t[0]].point)),O(o,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(r,b){y(r,e,b),F(e,n),F(n,l),F(e,a),F(e,o),F(o,c),y(r,_,b),V(f,r,b),y(r,m,b),V(d,r,b),y(r,C,b),V(D,r,b),y(r,p,b),L&&L.m(r,b),y(r,N,b),V(S,r,b),w=!0},p(r,[b]){(!w||b&3&&s!==(s=me(r[1].criticalIssues[r[0]].point)))&&O(n,"href",s),(!w||b&3&&u!==(u=ge(r[1].criticalIssues[r[0]].point)))&&O(o,"href",u);const ne={};!j&&b&3&&(j=!0,ne.value=r[1].criticalIssues[r[0]].criticalIssue,ee(()=>j=!1)),f.$set(ne);const ie={};!B&&b&3&&(B=!0,ie.value=r[1].criticalIssues[r[0]].stage,ee(()=>B=!1)),d.$set(ie);const fe={};!i&&b&3&&(i=!0,fe.value=r[1].criticalIssues[r[0]].locationName,ee(()=>i=!1)),D.$set(fe),r[1].criticalIssues[r[0]].stage!="Design"?L?(L.p(r,b),b&3&&k(L,1)):(L=Ne(r),L.c(),k(L,1),L.m(N.parentNode,N)):L&&(se(),I(L,1,1,()=>{L=null}),re());const ue={};!E&&b&3&&(E=!0,ue.value=r[1].criticalIssues[r[0]].notes,ee(()=>E=!1)),S.$set(ue)},i(r){w||(k(f.$$.fragment,r),k(d.$$.fragment,r),k(D.$$.fragment,r),k(L),k(S.$$.fragment,r),w=!0)},o(r){I(f.$$.fragment,r),I(d.$$.fragment,r),I(D.$$.fragment,r),I(L),I(S.$$.fragment,r),w=!1},d(r){r&&($(e),$(_),$(m),$(C),$(p),$(N)),R(f,r),R(d,r),R(D,r),L&&L.d(r),R(S,r)}}}function kt(t,e,n){let l;ye(t,J,f=>n(1,l=f));let{idx:s}=e;function a(f){t.$$.not_equal(l.criticalIssues[s].criticalIssue,f)&&(l.criticalIssues[s].criticalIssue=f,J.set(l))}function o(f){t.$$.not_equal(l.criticalIssues[s].stage,f)&&(l.criticalIssues[s].stage=f,J.set(l))}function c(f){t.$$.not_equal(l.criticalIssues[s].locationName,f)&&(l.criticalIssues[s].locationName=f,J.set(l))}function u(f){t.$$.not_equal(l.criticalIssues[s].resolved,f)&&(l.criticalIssues[s].resolved=f,J.set(l))}function _(f){t.$$.not_equal(l.criticalIssues[s].notes,f)&&(l.criticalIssues[s].notes=f,J.set(l))}return t.$$set=f=>{"idx"in f&&n(0,s=f.idx)},[s,l,a,o,c,u,_]}class Ct extends Ie{constructor(e){super(),Le(this,e,kt,bt,we,{idx:0})}}function Ee(t){let e,n,l;function s(o){t[5](o)}let a={label:"Resolved by Design"};return t[1].policyConflictLog[t[0]].resolved!==void 0&&(a.value=t[1].policyConflictLog[t[0]].resolved),e=new Ue({props:a}),x.push(()=>te(e,"value",s)),{c(){G(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,c){V(e,o,c),l=!0},p(o,c){const u={};!n&&c&3&&(n=!0,u.value=o[1].policyConflictLog[o[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){R(e,o)}}}function wt(t){let e,n,l,s,a,o,c,u,_,f,j,m,d,B,C,D,i,p,N,S,E,w;function Z(r){t[2](r)}let P={label:"Policy Conflict",emptyOption:!0,choices:st};t[1].policyConflictLog[t[0]].conflict!==void 0&&(P.value=t[1].policyConflictLog[t[0]].conflict),f=new $e({props:P}),x.push(()=>te(f,"value",Z));function ae(r){t[3](r)}let g={label:"Stage",emptyOption:!0,choices:Re(["Existing","Design"])};t[1].policyConflictLog[t[0]].stage!==void 0&&(g.value=t[1].policyConflictLog[t[0]].stage),d=new $e({props:g}),x.push(()=>te(d,"value",ae));function v(r){t[4](r)}let U={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(U.value=t[1].policyConflictLog[t[0]].locationName),D=new Oe({props:U}),x.push(()=>te(D,"value",v));let L=t[1].policyConflictLog[t[0]].stage!="Design"&&Ee(t);function T(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(le.value=t[1].policyConflictLog[t[0]].notes),S=new Fe({props:le}),x.push(()=>te(S,"value",T)),{c(){e=H("div"),n=H("a"),l=X("Google StreetView"),a=q(),o=H("a"),c=X("Bing Streetside"),_=q(),G(f.$$.fragment),m=q(),G(d.$$.fragment),C=q(),G(D.$$.fragment),p=q(),L&&L.c(),N=q(),G(S.$$.fragment),this.h()},l(r){e=K(r,"DIV",{style:!0});var b=W(e);n=K(b,"A",{href:!0,target:!0});var ne=W(n);l=Q(ne,"Google StreetView"),ne.forEach($),a=A(b),o=K(b,"A",{href:!0,target:!0});var ie=W(o);c=Q(ie,"Bing Streetside"),ie.forEach($),b.forEach($),_=A(r),M(f.$$.fragment,r),m=A(r),M(d.$$.fragment,r),C=A(r),M(D.$$.fragment,r),p=A(r),L&&L.l(r),N=A(r),M(S.$$.fragment,r),this.h()},h(){O(n,"href",s=me(t[1].policyConflictLog[t[0]].point)),O(n,"target","_blank"),O(o,"href",u=ge(t[1].policyConflictLog[t[0]].point)),O(o,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(r,b){y(r,e,b),F(e,n),F(n,l),F(e,a),F(e,o),F(o,c),y(r,_,b),V(f,r,b),y(r,m,b),V(d,r,b),y(r,C,b),V(D,r,b),y(r,p,b),L&&L.m(r,b),y(r,N,b),V(S,r,b),w=!0},p(r,[b]){(!w||b&3&&s!==(s=me(r[1].policyConflictLog[r[0]].point)))&&O(n,"href",s),(!w||b&3&&u!==(u=ge(r[1].policyConflictLog[r[0]].point)))&&O(o,"href",u);const ne={};!j&&b&3&&(j=!0,ne.value=r[1].policyConflictLog[r[0]].conflict,ee(()=>j=!1)),f.$set(ne);const ie={};!B&&b&3&&(B=!0,ie.value=r[1].policyConflictLog[r[0]].stage,ee(()=>B=!1)),d.$set(ie);const fe={};!i&&b&3&&(i=!0,fe.value=r[1].policyConflictLog[r[0]].locationName,ee(()=>i=!1)),D.$set(fe),r[1].policyConflictLog[r[0]].stage!="Design"?L?(L.p(r,b),b&3&&k(L,1)):(L=Ee(r),L.c(),k(L,1),L.m(N.parentNode,N)):L&&(se(),I(L,1,1,()=>{L=null}),re());const ue={};!E&&b&3&&(E=!0,ue.value=r[1].policyConflictLog[r[0]].notes,ee(()=>E=!1)),S.$set(ue)},i(r){w||(k(f.$$.fragment,r),k(d.$$.fragment,r),k(D.$$.fragment,r),k(L),k(S.$$.fragment,r),w=!0)},o(r){I(f.$$.fragment,r),I(d.$$.fragment,r),I(D.$$.fragment,r),I(L),I(S.$$.fragment,r),w=!1},d(r){r&&($(e),$(_),$(m),$(C),$(p),$(N)),R(f,r),R(d,r),R(D,r),L&&L.d(r),R(S,r)}}}function yt(t,e,n){let l;ye(t,J,f=>n(1,l=f));let{idx:s}=e;function a(f){t.$$.not_equal(l.policyConflictLog[s].conflict,f)&&(l.policyConflictLog[s].conflict=f,J.set(l))}function o(f){t.$$.not_equal(l.policyConflictLog[s].stage,f)&&(l.policyConflictLog[s].stage=f,J.set(l))}function c(f){t.$$.not_equal(l.policyConflictLog[s].locationName,f)&&(l.policyConflictLog[s].locationName=f,J.set(l))}function u(f){t.$$.not_equal(l.policyConflictLog[s].resolved,f)&&(l.policyConflictLog[s].resolved=f,J.set(l))}function _(f){t.$$.not_equal(l.policyConflictLog[s].notes,f)&&(l.policyConflictLog[s].notes=f,J.set(l))}return t.$$set=f=>{"idx"in f&&n(0,s=f.idx)},[s,l,a,o,c,u,_]}class It extends Ie{constructor(e){super(),Le(this,e,yt,wt,we,{idx:0})}}const{window:Lt}=Qe;function De(t,e,n){const l=t.slice();return l[37]=e[n],l[38]=e,l[39]=n,l}function je(t,e,n){const l=t.slice();return l[40]=e[n],l[41]=e,l[39]=n,l}function Te(t,e,n){const l=t.slice();return l[37]=e[n],l[39]=n,l}function qe(t,e,n){const l=t.slice();return l[40]=e[n],l[39]=n,l}function St(t){let e,n,l,s,a,o,c,u;e=new gt({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),e.$on("click",t[11]),l=new ht({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),l.$on("click",t[13]);const _=[Tt,jt],f=[];function j(m,d){return m[0].kind=="critical"?0:1}return a=j(t),o=f[a]=_[a](t),{c(){G(e.$$.fragment),n=q(),G(l.$$.fragment),s=q(),o.c(),c=pe()},l(m){M(e.$$.fragment,m),n=A(m),M(l.$$.fragment,m),s=A(m),o.l(m),c=pe()},m(m,d){V(e,m,d),y(m,n,d),V(l,m,d),y(m,s,d),f[a].m(m,d),y(m,c,d),u=!0},p(m,d){const B={};d[1]&8192&&(B.$$scope={dirty:d,ctx:m}),e.$set(B);const C={};d[1]&8192&&(C.$$scope={dirty:d,ctx:m}),l.$set(C);let D=a;a=j(m),a===D?f[a].p(m,d):(se(),I(f[D],1,1,()=>{f[D]=null}),re(),o=f[a],o?o.p(m,d):(o=f[a]=_[a](m),o.c()),k(o,1),o.m(c.parentNode,c))},i(m){u||(k(e.$$.fragment,m),k(l.$$.fragment,m),k(o),u=!0)},o(m){I(e.$$.fragment,m),I(l.$$.fragment,m),I(o),u=!1},d(m){m&&($(n),$(s),$(c)),R(e,m),R(l,m),f[a].d(m)}}}function Nt(t){let e,n,l,s,a,o,c="Click the map to add a problem, or select a problem to fill out data",u,_,f="Critical Issues",j,m,d,B="Policy Conflicts",C,D,i;e=new mt({props:{label:"Tools",$$slots:{default:[Pt]},$$scope:{ctx:t}}});function p(g){t[21](g)}let N={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[5]!==void 0&&(N.value=t[5]),l=new $t({props:N}),x.push(()=>te(l,"value",p));let S=oe(t[2].criticalIssues),E=[];for(let g=0;g<S.length;g+=1)E[g]=Pe(qe(t,S,g));const w=g=>I(E[g],1,1,()=>{E[g]=null});let Z=oe(t[2].policyConflictLog),P=[];for(let g=0;g<Z.length;g+=1)P[g]=Ge(Te(t,Z,g));const ae=g=>I(P[g],1,1,()=>{P[g]=null});return{c(){G(e.$$.fragment),n=q(),G(l.$$.fragment),a=q(),o=H("p"),o.textContent=c,u=q(),_=H("h3"),_.textContent=f,j=q();for(let g=0;g<E.length;g+=1)E[g].c();m=q(),d=H("h3"),d.textContent=B,C=q();for(let g=0;g<P.length;g+=1)P[g].c();D=pe()},l(g){M(e.$$.fragment,g),n=A(g),M(l.$$.fragment,g),a=A(g),o=K(g,"P",{"data-svelte-h":!0}),ve(o)!=="svelte-12ba5j2"&&(o.textContent=c),u=A(g),_=K(g,"H3",{"data-svelte-h":!0}),ve(_)!=="svelte-1qhh5xr"&&(_.textContent=f),j=A(g);for(let v=0;v<E.length;v+=1)E[v].l(g);m=A(g),d=K(g,"H3",{"data-svelte-h":!0}),ve(d)!=="svelte-eyxzjx"&&(d.textContent=B),C=A(g);for(let v=0;v<P.length;v+=1)P[v].l(g);D=pe()},m(g,v){V(e,g,v),y(g,n,v),V(l,g,v),y(g,a,v),y(g,o,v),y(g,u,v),y(g,_,v),y(g,j,v);for(let U=0;U<E.length;U+=1)E[U]&&E[U].m(g,v);y(g,m,v),y(g,d,v),y(g,C,v);for(let U=0;U<P.length;U+=1)P[U]&&P[U].m(g,v);y(g,D,v),i=!0},p(g,v){const U={};v[0]&200|v[1]&8192&&(U.$$scope={dirty:v,ctx:g}),e.$set(U);const L={};if(!s&&v[0]&32&&(s=!0,L.value=g[5],ee(()=>s=!1)),l.$set(L),v[0]&33798){S=oe(g[2].criticalIssues);let T;for(T=0;T<S.length;T+=1){const le=qe(g,S,T);E[T]?(E[T].p(le,v),k(E[T],1)):(E[T]=Pe(le),E[T].c(),k(E[T],1),E[T].m(m.parentNode,m))}for(se(),T=S.length;T<E.length;T+=1)w(T);re()}if(v[0]&66566){Z=oe(g[2].policyConflictLog);let T;for(T=0;T<Z.length;T+=1){const le=Te(g,Z,T);P[T]?(P[T].p(le,v),k(P[T],1)):(P[T]=Ge(le),P[T].c(),k(P[T],1),P[T].m(D.parentNode,D))}for(se(),T=Z.length;T<P.length;T+=1)ae(T);re()}},i(g){if(!i){k(e.$$.fragment,g),k(l.$$.fragment,g);for(let v=0;v<S.length;v+=1)k(E[v]);for(let v=0;v<Z.length;v+=1)k(P[v]);i=!0}},o(g){I(e.$$.fragment,g),I(l.$$.fragment,g),E=E.filter(Boolean);for(let v=0;v<E.length;v+=1)I(E[v]);P=P.filter(Boolean);for(let v=0;v<P.length;v+=1)I(P[v]);i=!1},d(g){g&&($(n),$(a),$(o),$(u),$(_),$(j),$(m),$(d),$(C),$(D)),R(e,g),R(l,g),_e(E,g),_e(P,g)}}}function Et(t){let e;return{c(){e=X("Save")},l(n){e=Q(n,"Save")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function Dt(t){let e;return{c(){e=X("Delete")},l(n){e=Q(n,"Delete")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function jt(t){let e,n;return e=new It({props:{idx:t[0].idx}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,s){V(e,l,s),n=!0},p(l,s){const a={};s[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Tt(t){let e,n;return e=new Ct({props:{idx:t[0].idx}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,s){V(e,l,s),n=!0},p(l,s){const a={};s[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function qt(t){let e;return{c(){e=X("Zoom to fit")},l(n){e=Q(n,"Zoom to fit")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function At(t){let e;return{c(){e=X("Show scheme context")},l(n){e=Q(n,"Show scheme context")},m(n,l){y(n,e,l)},d(n){n&&$(e)}}}function Pt(t){let e,n,l,s,a,o,c,u,_,f,j,m;e=new dt({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),e.$on("click",t[18]),l=new ft({}),a=new ut({});function d(i){t[19](i)}let B={map:t[3]};t[6]!==void 0&&(B.enabled=t[6]),c=new ct({props:B}),x.push(()=>te(c,"enabled",d));function C(i){t[20](i)}let D={$$slots:{default:[At]},$$scope:{ctx:t}};return t[7]!==void 0&&(D.checked=t[7]),f=new pt({props:D}),x.push(()=>te(f,"checked",C)),{c(){G(e.$$.fragment),n=q(),G(l.$$.fragment),s=q(),G(a.$$.fragment),o=q(),G(c.$$.fragment),_=q(),G(f.$$.fragment)},l(i){M(e.$$.fragment,i),n=A(i),M(l.$$.fragment,i),s=A(i),M(a.$$.fragment,i),o=A(i),M(c.$$.fragment,i),_=A(i),M(f.$$.fragment,i)},m(i,p){V(e,i,p),y(i,n,p),V(l,i,p),y(i,s,p),V(a,i,p),y(i,o,p),V(c,i,p),y(i,_,p),V(f,i,p),m=!0},p(i,p){const N={};p[1]&8192&&(N.$$scope={dirty:p,ctx:i}),e.$set(N);const S={};p[0]&8&&(S.map=i[3]),!u&&p[0]&64&&(u=!0,S.enabled=i[6],ee(()=>u=!1)),c.$set(S);const E={};p[1]&8192&&(E.$$scope={dirty:p,ctx:i}),!j&&p[0]&128&&(j=!0,E.checked=i[7],ee(()=>j=!1)),f.$set(E)},i(i){m||(k(e.$$.fragment,i),k(l.$$.fragment,i),k(a.$$.fragment,i),k(c.$$.fragment,i),k(f.$$.fragment,i),m=!0)},o(i){I(e.$$.fragment,i),I(l.$$.fragment,i),I(a.$$.fragment,i),I(c.$$.fragment,i),I(f.$$.fragment,i),m=!1},d(i){i&&($(n),$(s),$(o),$(_)),R(e,i),R(l,i),R(a,i),R(c,i),R(f,i)}}}function Ae(t){let e,n,l=t[40].resolved+"",s;return{c(){e=H("span"),n=X("Resolved: "),s=X(l)},l(a){e=K(a,"SPAN",{});var o=W(e);n=Q(o,"Resolved: "),s=Q(o,l),o.forEach($)},m(a,o){y(a,e,o),F(e,n),F(e,s)},p(a,o){o[0]&4&&l!==(l=a[40].resolved+"")&&ce(s,l)},d(a){a&&$(e)}}}function Bt(t){let e,n,l,s=t[40].stage+"",a,o,c=t[40].stage!="Design"&&Ae(t);return{c(){e=H("div"),n=H("span"),l=X("Stage: "),a=X(s),o=q(),c&&c.c(),this.h()},l(u){e=K(u,"DIV",{style:!0});var _=W(e);n=K(_,"SPAN",{});var f=W(n);l=Q(f,"Stage: "),a=Q(f,s),f.forEach($),o=A(_),c&&c.l(_),_.forEach($),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(u,_){y(u,e,_),F(e,n),F(n,l),F(n,a),F(e,o),c&&c.m(e,null)},p(u,_){_[0]&4&&s!==(s=u[40].stage+"")&&ce(a,s),u[40].stage!="Design"?c?c.p(u,_):(c=Ae(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&$(e),c&&c.d()}}}function Pe(t){let e,n,l;function s(){return t[22](t[39])}function a(){return t[23](t[39])}return n=new He({props:{name:t[15](t[40]),$$slots:{default:[Bt]},$$scope:{ctx:t}}}),n.$on("click",s),n.$on("mouseenter",a),n.$on("mouseleave",t[24]),{c(){e=H("li"),G(n.$$.fragment)},l(o){e=K(o,"LI",{});var c=W(e);M(n.$$.fragment,c),c.forEach($)},m(o,c){y(o,e,c),V(n,e,null),l=!0},p(o,c){t=o;const u={};c[0]&4&&(u.name=t[15](t[40])),c[0]&4|c[1]&8192&&(u.$$scope={dirty:c,ctx:t}),n.$set(u)},i(o){l||(k(n.$$.fragment,o),l=!0)},o(o){I(n.$$.fragment,o),l=!1},d(o){o&&$(e),R(n)}}}function Be(t){let e,n,l=t[37].resolved+"",s;return{c(){e=H("span"),n=X("Resolved: "),s=X(l)},l(a){e=K(a,"SPAN",{});var o=W(e);n=Q(o,"Resolved: "),s=Q(o,l),o.forEach($)},m(a,o){y(a,e,o),F(e,n),F(e,s)},p(a,o){o[0]&4&&l!==(l=a[37].resolved+"")&&ce(s,l)},d(a){a&&$(e)}}}function Gt(t){let e,n,l,s=t[37].stage+"",a,o,c,u=t[37].stage!="Design"&&Be(t);return{c(){e=H("div"),n=H("span"),l=X("Stage: "),a=X(s),o=q(),u&&u.c(),c=q(),this.h()},l(_){e=K(_,"DIV",{style:!0});var f=W(e);n=K(f,"SPAN",{});var j=W(n);l=Q(j,"Stage: "),a=Q(j,s),j.forEach($),o=A(f),u&&u.l(f),f.forEach($),c=A(_),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(_,f){y(_,e,f),F(e,n),F(n,l),F(n,a),F(e,o),u&&u.m(e,null),y(_,c,f)},p(_,f){f[0]&4&&s!==(s=_[37].stage+"")&&ce(a,s),_[37].stage!="Design"?u?u.p(_,f):(u=Be(_),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(_){_&&($(e),$(c)),u&&u.d()}}}function Ge(t){let e,n;function l(){return t[25](t[39])}function s(){return t[26](t[39])}return e=new He({props:{name:t[16](t[37]),$$slots:{default:[Gt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",s),e.$on("mouseleave",t[27]),{c(){G(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){V(e,a,o),n=!0},p(a,o){t=a;const c={};o[0]&4&&(c.name=t[16](t[37])),o[0]&4|o[1]&8192&&(c.$$scope={dirty:o,ctx:t}),e.$set(c)},i(a){n||(k(e.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),n=!1},d(a){R(e,a)}}}function Mt(t){let e,n,l,s=t[40].criticalIssue+"",a;return{c(){e=be("svg"),n=be("polygon"),l=be("text"),a=X(s),this.h()},l(o){e=ke(o,"svg",{width:!0,height:!0,xmlns:!0});var c=W(e);n=ke(c,"polygon",{points:!0,fill:!0,class:!0}),W(n).forEach($),l=ke(c,"text",{x:!0,y:!0});var u=W(l);a=Q(u,s),u.forEach($),c.forEach($),this.h()},h(){O(n,"points","20,0 0,40 40,40"),O(n,"fill",nt.critical.background),O(n,"class","svelte-ktyu3j"),O(l,"x","13"),O(l,"y","30"),z(l,"fill","white"),O(e,"width","40"),O(e,"height","40"),O(e,"xmlns","http://www.w3.org/2000/svg")},m(o,c){y(o,e,c),F(e,n),F(e,l),F(l,a)},p(o,c){c[0]&4&&s!==(s=o[40].criticalIssue+"")&&ce(a,s)},d(o){o&&$(e)}}}function Me(t){let e,n,l;function s(u){t[29](u,t[40])}function a(){return t[30](t[39])}function o(){return t[31](t[39])}let c={draggable:!0,$$slots:{default:[Mt]},$$scope:{ctx:t}};return t[40].point!==void 0&&(c.lngLat=t[40].point),e=new ze({props:c}),x.push(()=>te(e,"lngLat",s)),e.$on("click",a),e.$on("dragend",o),{c(){G(e.$$.fragment)},l(u){M(e.$$.fragment,u)},m(u,_){V(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&8192&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[40].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(k(e.$$.fragment,u),l=!0)},o(u){I(e.$$.fragment,u),l=!1},d(u){R(e,u)}}}function Vt(t){let e,n=t[37].conflict+"",l;return{c(){e=H("span"),l=X(n),this.h()},l(s){e=K(s,"SPAN",{class:!0});var a=W(e);l=Q(a,n),a.forEach($),this.h()},h(){O(e,"class","dot svelte-ktyu3j"),z(e,"background",it)},m(s,a){y(s,e,a),F(e,l)},p(s,a){a[0]&4&&n!==(n=s[37].conflict+"")&&ce(l,n)},d(s){s&&$(e)}}}function Ve(t){let e,n,l;function s(u){t[32](u,t[37])}function a(){return t[33](t[39])}function o(){return t[34](t[39])}let c={draggable:!0,$$slots:{default:[Vt]},$$scope:{ctx:t}};return t[37].point!==void 0&&(c.lngLat=t[37].point),e=new ze({props:c}),x.push(()=>te(e,"lngLat",s)),e.$on("click",a),e.$on("dragend",o),{c(){G(e.$$.fragment)},l(u){M(e.$$.fragment,u)},m(u,_){V(e,u,_),l=!0},p(u,_){t=u;const f={};_[0]&4|_[1]&8192&&(f.$$scope={dirty:_,ctx:t}),!n&&_[0]&4&&(n=!0,f.lngLat=t[37].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(k(e.$$.fragment,u),l=!0)},o(u){I(e.$$.fragment,u),l=!1},d(u){R(e,u)}}}function Rt(t){let e,n;return e=new lt({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){G(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,s){V(e,l,s),n=!0},p:Je,i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Ft(t){let e,n,l,s,a,o,c,u,_,f;e=new _t({}),e.$on("click",t[12]),l=new et({props:{gj:t[2].summary.networkMap,show:t[7]}});let j=oe(t[2].criticalIssues),m=[];for(let i=0;i<j.length;i+=1)m[i]=Me(je(t,j,i));const d=i=>I(m[i],1,1,()=>{m[i]=null});let B=oe(t[2].policyConflictLog),C=[];for(let i=0;i<B.length;i+=1)C[i]=Ve(De(t,B,i));const D=i=>I(C[i],1,1,()=>{C[i]=null});return c=new tt({props:{data:t[8],$$slots:{default:[Rt]},$$scope:{ctx:t}}}),_=new vt({props:{map:t[3]}}),{c(){G(e.$$.fragment),n=q(),G(l.$$.fragment),s=q();for(let i=0;i<m.length;i+=1)m[i].c();a=q();for(let i=0;i<C.length;i+=1)C[i].c();o=q(),G(c.$$.fragment),u=q(),G(_.$$.fragment)},l(i){M(e.$$.fragment,i),n=A(i),M(l.$$.fragment,i),s=A(i);for(let p=0;p<m.length;p+=1)m[p].l(i);a=A(i);for(let p=0;p<C.length;p+=1)C[p].l(i);o=A(i),M(c.$$.fragment,i),u=A(i),M(_.$$.fragment,i)},m(i,p){V(e,i,p),y(i,n,p),V(l,i,p),y(i,s,p);for(let N=0;N<m.length;N+=1)m[N]&&m[N].m(i,p);y(i,a,p);for(let N=0;N<C.length;N+=1)C[N]&&C[N].m(i,p);y(i,o,p),V(c,i,p),y(i,u,p),V(_,i,p),f=!0},p(i,p){const N={};if(p[0]&4&&(N.gj=i[2].summary.networkMap),p[0]&128&&(N.show=i[7]),l.$set(N),p[0]&516){j=oe(i[2].criticalIssues);let w;for(w=0;w<j.length;w+=1){const Z=je(i,j,w);m[w]?(m[w].p(Z,p),k(m[w],1)):(m[w]=Me(Z),m[w].c(),k(m[w],1),m[w].m(a.parentNode,a))}for(se(),w=j.length;w<m.length;w+=1)d(w);re()}if(p[0]&516){B=oe(i[2].policyConflictLog);let w;for(w=0;w<B.length;w+=1){const Z=De(i,B,w);C[w]?(C[w].p(Z,p),k(C[w],1)):(C[w]=Ve(Z),C[w].c(),k(C[w],1),C[w].m(o.parentNode,o))}for(se(),w=B.length;w<C.length;w+=1)D(w);re()}const S={};p[0]&256&&(S.data=i[8]),p[1]&8192&&(S.$$scope={dirty:p,ctx:i}),c.$set(S);const E={};p[0]&8&&(E.map=i[3]),_.$set(E)},i(i){if(!f){k(e.$$.fragment,i),k(l.$$.fragment,i);for(let p=0;p<j.length;p+=1)k(m[p]);for(let p=0;p<B.length;p+=1)k(C[p]);k(c.$$.fragment,i),k(_.$$.fragment,i),f=!0}},o(i){I(e.$$.fragment,i),I(l.$$.fragment,i),m=m.filter(Boolean);for(let p=0;p<m.length;p+=1)I(m[p]);C=C.filter(Boolean);for(let p=0;p<C.length;p+=1)I(C[p]);I(c.$$.fragment,i),I(_.$$.fragment,i),f=!1},d(i){i&&($(n),$(s),$(a),$(o),$(u)),R(e,i),R(l,i),_e(m,i),_e(C,i),R(c,i),R(_,i)}}}function Ot(t){let e,n,l,s,a,o,c,u,_,f,j;const m=[Nt,St],d=[];function B(i,p){return i[0]==null?0:1}l=B(t),s=d[l]=m[l](t);function C(i){t[35](i)}let D={$$slots:{default:[Ft]},$$scope:{ctx:t}};return t[3]!==void 0&&(D.map=t[3]),c=new Xe({props:D}),x.push(()=>te(c,"map",C)),{c(){e=H("div"),n=H("div"),s.c(),a=q(),o=H("div"),G(c.$$.fragment),this.h()},l(i){e=K(i,"DIV",{style:!0});var p=W(e);n=K(p,"DIV",{style:!0});var N=W(n);s.l(N),N.forEach($),a=A(p),o=K(p,"DIV",{style:!0});var S=W(o);M(c.$$.fragment,S),S.forEach($),p.forEach($),this.h()},h(){z(n,"width","30%"),z(n,"overflow-y","scroll"),z(n,"padding","10px"),z(n,"border","1px solid black"),z(o,"position","relative"),z(o,"width","70%"),z(e,"display","flex"),z(e,"height","80vh")},m(i,p){y(i,e,p),F(e,n),d[l].m(n,null),t[28](n),F(e,a),F(e,o),V(c,o,null),_=!0,f||(j=Ze(Lt,"keydown",t[17]),f=!0)},p(i,p){let N=l;l=B(i),l===N?d[l].p(i,p):(se(),I(d[N],1,1,()=>{d[N]=null}),re(),s=d[l],s?s.p(i,p):(s=d[l]=m[l](i),s.c()),k(s,1),s.m(n,null));const S={};p[0]&396|p[1]&8192&&(S.$$scope={dirty:p,ctx:i}),!u&&p[0]&8&&(u=!0,S.map=i[3],ee(()=>u=!1)),c.$set(S)},i(i){_||(k(s),k(c.$$.fragment,i),_=!0)},o(i){I(s),I(c.$$.fragment,i),_=!1},d(i){i&&$(e),d[l].d(),t[28](null),R(c),f=!1,j()}}}function Ut(t,e,n){let l={type:"FeatureCollection",features:[]},s=e??n;if(s!=null){let a=s.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(Ce(a[s.idx].point))}return l}function Ce(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function zt(t,e,n){let l,s;ye(t,J,h=>n(2,s=h));let a,o,c="critical",u=null,_=null,f=null,j=!1,m=!0;async function d(h){_=o.scrollTop,n(0,u=h),n(1,f=null),await he(),n(4,o.scrollTop=0,o)}async function B(h){_=o.scrollTop,n(0,u=h),n(1,f=null),await he(),n(4,o.scrollTop=0,o);let Y=h.kind=="critical"?s.criticalIssues:s.policyConflictLog;a.flyTo({center:Y[h.idx].point,duration:500})}async function C(){n(0,u=null),_!=null&&(await he(),n(4,o.scrollTop=_,o),_=null)}function D(h){if(!j){if(u!=null){C();return}c=="critical"?(Se(J,s.criticalIssues=[...s.criticalIssues,{criticalIssue:"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),d({kind:"critical",idx:s.criticalIssues.length-1})):(Se(J,s.policyConflictLog=[...s.policyConflictLog,{conflict:"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),d({kind:"conflict",idx:s.policyConflictLog.length-1}))}}Ye(()=>{p(!1)});function i(){window.confirm("Delete this entry?")&&(u.kind=="critical"?(s.criticalIssues.splice(u.idx,1),J.set(s)):(s.policyConflictLog.splice(u.idx,1),J.set(s)),C())}function p(h){let Y={type:"FeatureCollection",features:[...s.criticalIssues.map(de=>Ce(de.point)),...s.policyConflictLog.map(de=>Ce(de.point)),...s.summary.networkMap.features]};Y.features.length>0&&a.fitBounds(xe(Y),{padding:20,animate:h})}function N(h){let Y=h.criticalIssue?rt(h.criticalIssue):"Unknown critical";return h.locationName?`${Y} (${h.locationName})`:Y}function S(h){let Y=h.conflict?at(h.conflict):"Unknown conflict";return h.locationName?`${Y} (${h.locationName})`:Y}function E(h){if(u!=null&&h.key=="Escape")h.stopPropagation(),C();else if(u!=null&&h.key=="Delete"){let Y=h.target.tagName;if(Y=="INPUT"||Y=="TEXTAREA")return;h.stopPropagation(),i()}}const w=()=>p(!0);function Z(h){j=h,n(6,j)}function P(h){m=h,n(7,m)}function ae(h){c=h,n(5,c)}const g=h=>B({kind:"critical",idx:h}),v=h=>n(1,f={kind:"critical",idx:h}),U=()=>n(1,f=null),L=h=>B({kind:"conflict",idx:h}),T=h=>n(1,f={kind:"conflict",idx:h}),le=()=>n(1,f=null);function r(h){x[h?"unshift":"push"](()=>{o=h,n(4,o)})}function b(h,Y){t.$$.not_equal(Y.point,h)&&(Y.point=h,J.set(s))}const ne=h=>d({kind:"critical",idx:h}),ie=h=>d({kind:"critical",idx:h});function fe(h,Y){t.$$.not_equal(Y.point,h)&&(Y.point=h,J.set(s))}const ue=h=>d({kind:"conflict",idx:h}),Ke=h=>d({kind:"conflict",idx:h});function We(h){a=h,n(3,a)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(8,l=Ut(s,u,f))},[u,f,s,a,o,c,j,m,l,d,B,C,D,i,p,N,S,E,w,Z,P,ae,g,v,U,L,T,le,r,b,ne,ie,fe,ue,Ke,We]}class ml extends Ie{constructor(e){super(),Le(this,e,zt,Ot,we,{},null,[-1,-1])}}export{ml as component};
