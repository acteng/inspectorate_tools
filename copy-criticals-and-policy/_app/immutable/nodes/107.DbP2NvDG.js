import{s as Ie,w as x,e as z,t as X,a as q,c as H,b as J,d as Q,f as h,g as A,p as U,q as Z,i as L,h as j,x as ee,k as Le,z as ot,R as st,W as be,T as ue,E as me,m as ke,G as ge,j as pe,n as rt,K as Ce,L as we}from"../chunks/scheduler.ytQcc2rf.js";import{S as Se,i as Ne,e as te,c as B,a as G,m as M,t as b,g as se,b as I,f as re,d as R}from"../chunks/index.D9yYtTfk.js";import{j as $e,k as de,M as at,l as ft,b as ct,C as ut,G as pt,m as _t}from"../chunks/index.zgbzr8dD.js";import{e as oe}from"../chunks/each.2RvRdhFj.js";import{c as mt,p as gt}from"../chunks/colors.DaC397qr.js";import{p as ze}from"../chunks/index.CUDFSGYU.js";import{R as De}from"../chunks/Radio.BwqxTJTI.js";import{S as He}from"../chunks/Select.BzX3N09F.js";/* empty css                                                    */import{T as Je}from"../chunks/TextArea.CtGDg2p0.js";import{T as Ke}from"../chunks/TextInput.6W_uhnqP.js";import{s as K}from"../chunks/data.B3BERepS.js";import{c as $t,p as dt,b as Ee,d as Ve,e as ht,g as vt}from"../chunks/lists.D6CAQBg5.js";import{Y as We}from"../chunks/YesNo.CxAaydgd.js";import{B as bt,G as kt,S as Ct,C as wt,a as yt,M as Ze}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.DosUjqq1.js";import{C as It}from"../chunks/CollapsibleCard.Bf0oqccF.js";import{D as Lt}from"../chunks/DefaultButton.DeS4Ykkw.js";import{S as St}from"../chunks/SecondaryButton.Dq9MsXNi.js";import{W as Nt}from"../chunks/WarningButton.C6jnTAfb.js";import{G as Dt}from"../chunks/GeoreferenceLayer.DidOkMDU.js";import{C as he}from"../chunks/ClickableCard.R7NkEgQq.js";import"../chunks/paths.CwHomOff.js";function Pe(t){let e,n,l;function i(o){t[5](o)}let a={label:"Resolved by Design",inlineSmall:!0};return t[1].criticalIssues[t[0]].resolved!==void 0&&(a.value=t[1].criticalIssues[t[0]].resolved),e=new We({props:a}),x.push(()=>te(e,"value",i)),{c(){B(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,c){M(e,o,c),l=!0},p(o,c){const u={};!n&&c&3&&(n=!0,u.value=o[1].criticalIssues[o[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(o){l||(b(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){R(e,o)}}}function Et(t){let e,n,l,i,a,o,c,u,g,f,P,p,m,w,v,S,s,_,D,E,V,y;function Y(r){t[2](r)}let F={label:"Critical Issue",emptyOption:!0,choices:$t};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(F.value=t[1].criticalIssues[t[0]].criticalIssue),f=new He({props:F}),x.push(()=>te(f,"value",Y));function ae(r){t[3](r)}let $={legend:"Stage",choices:ze(["Existing","Design"]),inlineSmall:!0};t[1].criticalIssues[t[0]].stage!==void 0&&($.value=t[1].criticalIssues[t[0]].stage),m=new De({props:$}),x.push(()=>te(m,"value",ae));function k(r){t[4](r)}let W={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(W.value=t[1].criticalIssues[t[0]].locationName),S=new Ke({props:W}),x.push(()=>te(S,"value",k));let N=t[1].criticalIssues[t[0]].stage!="Design"&&Pe(t);function T(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(le.value=t[1].criticalIssues[t[0]].notes),E=new Je({props:le}),x.push(()=>te(E,"value",T)),{c(){e=z("div"),n=z("a"),l=X("Google StreetView"),a=q(),o=z("a"),c=X("Bing Streetside"),g=q(),B(f.$$.fragment),p=q(),B(m.$$.fragment),v=q(),B(S.$$.fragment),_=q(),N&&N.c(),D=q(),B(E.$$.fragment),this.h()},l(r){e=H(r,"DIV",{style:!0});var C=J(e);n=H(C,"A",{href:!0,target:!0});var ne=J(n);l=Q(ne,"Google StreetView"),ne.forEach(h),a=A(C),o=H(C,"A",{href:!0,target:!0});var ie=J(o);c=Q(ie,"Bing Streetside"),ie.forEach(h),C.forEach(h),g=A(r),G(f.$$.fragment,r),p=A(r),G(m.$$.fragment,r),v=A(r),G(S.$$.fragment,r),_=A(r),N&&N.l(r),D=A(r),G(E.$$.fragment,r),this.h()},h(){U(n,"href",i=$e(t[1].criticalIssues[t[0]].point)),U(n,"target","_blank"),U(o,"href",u=de(t[1].criticalIssues[t[0]].point)),U(o,"target","_blank"),Z(e,"display","flex"),Z(e,"justify-content","space-evenly")},m(r,C){L(r,e,C),j(e,n),j(n,l),j(e,a),j(e,o),j(o,c),L(r,g,C),M(f,r,C),L(r,p,C),M(m,r,C),L(r,v,C),M(S,r,C),L(r,_,C),N&&N.m(r,C),L(r,D,C),M(E,r,C),y=!0},p(r,[C]){(!y||C&3&&i!==(i=$e(r[1].criticalIssues[r[0]].point)))&&U(n,"href",i),(!y||C&3&&u!==(u=de(r[1].criticalIssues[r[0]].point)))&&U(o,"href",u);const ne={};!P&&C&3&&(P=!0,ne.value=r[1].criticalIssues[r[0]].criticalIssue,ee(()=>P=!1)),f.$set(ne);const ie={};!w&&C&3&&(w=!0,ie.value=r[1].criticalIssues[r[0]].stage,ee(()=>w=!1)),m.$set(ie);const fe={};!s&&C&3&&(s=!0,fe.value=r[1].criticalIssues[r[0]].locationName,ee(()=>s=!1)),S.$set(fe),r[1].criticalIssues[r[0]].stage!="Design"?N?(N.p(r,C),C&3&&b(N,1)):(N=Pe(r),N.c(),b(N,1),N.m(D.parentNode,D)):N&&(se(),I(N,1,1,()=>{N=null}),re());const ce={};!V&&C&3&&(V=!0,ce.value=r[1].criticalIssues[r[0]].notes,ee(()=>V=!1)),E.$set(ce)},i(r){y||(b(f.$$.fragment,r),b(m.$$.fragment,r),b(S.$$.fragment,r),b(N),b(E.$$.fragment,r),y=!0)},o(r){I(f.$$.fragment,r),I(m.$$.fragment,r),I(S.$$.fragment,r),I(N),I(E.$$.fragment,r),y=!1},d(r){r&&(h(e),h(g),h(p),h(v),h(_),h(D)),R(f,r),R(m,r),R(S,r),N&&N.d(r),R(E,r)}}}function Vt(t,e,n){let l;Le(t,K,f=>n(1,l=f));let{idx:i}=e;function a(f){t.$$.not_equal(l.criticalIssues[i].criticalIssue,f)&&(l.criticalIssues[i].criticalIssue=f,K.set(l))}function o(f){t.$$.not_equal(l.criticalIssues[i].stage,f)&&(l.criticalIssues[i].stage=f,K.set(l))}function c(f){t.$$.not_equal(l.criticalIssues[i].locationName,f)&&(l.criticalIssues[i].locationName=f,K.set(l))}function u(f){t.$$.not_equal(l.criticalIssues[i].resolved,f)&&(l.criticalIssues[i].resolved=f,K.set(l))}function g(f){t.$$.not_equal(l.criticalIssues[i].notes,f)&&(l.criticalIssues[i].notes=f,K.set(l))}return t.$$set=f=>{"idx"in f&&n(0,i=f.idx)},[i,l,a,o,c,u,g]}class Pt extends Se{constructor(e){super(),Ne(this,e,Vt,Et,Ie,{idx:0})}}function Te(t){let e,n,l;function i(o){t[5](o)}let a={label:"Resolved by Design",inlineSmall:!0};return t[1].policyConflictLog[t[0]].resolved!==void 0&&(a.value=t[1].policyConflictLog[t[0]].resolved),e=new We({props:a}),x.push(()=>te(e,"value",i)),{c(){B(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,c){M(e,o,c),l=!0},p(o,c){const u={};!n&&c&3&&(n=!0,u.value=o[1].policyConflictLog[o[0]].resolved,ee(()=>n=!1)),e.$set(u)},i(o){l||(b(e.$$.fragment,o),l=!0)},o(o){I(e.$$.fragment,o),l=!1},d(o){R(e,o)}}}function Tt(t){let e,n,l,i,a,o,c,u,g,f,P,p,m,w,v,S,s,_,D,E,V,y;function Y(r){t[2](r)}let F={label:"Policy Conflict",emptyOption:!0,choices:dt};t[1].policyConflictLog[t[0]].conflict!==void 0&&(F.value=t[1].policyConflictLog[t[0]].conflict),f=new He({props:F}),x.push(()=>te(f,"value",Y));function ae(r){t[3](r)}let $={legend:"Stage",choices:ze(["Existing","Design"]),inlineSmall:!0};t[1].policyConflictLog[t[0]].stage!==void 0&&($.value=t[1].policyConflictLog[t[0]].stage),m=new De({props:$}),x.push(()=>te(m,"value",ae));function k(r){t[4](r)}let W={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(W.value=t[1].policyConflictLog[t[0]].locationName),S=new Ke({props:W}),x.push(()=>te(S,"value",k));let N=t[1].policyConflictLog[t[0]].stage!="Design"&&Te(t);function T(r){t[6](r)}let le={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(le.value=t[1].policyConflictLog[t[0]].notes),E=new Je({props:le}),x.push(()=>te(E,"value",T)),{c(){e=z("div"),n=z("a"),l=X("Google StreetView"),a=q(),o=z("a"),c=X("Bing Streetside"),g=q(),B(f.$$.fragment),p=q(),B(m.$$.fragment),v=q(),B(S.$$.fragment),_=q(),N&&N.c(),D=q(),B(E.$$.fragment),this.h()},l(r){e=H(r,"DIV",{style:!0});var C=J(e);n=H(C,"A",{href:!0,target:!0});var ne=J(n);l=Q(ne,"Google StreetView"),ne.forEach(h),a=A(C),o=H(C,"A",{href:!0,target:!0});var ie=J(o);c=Q(ie,"Bing Streetside"),ie.forEach(h),C.forEach(h),g=A(r),G(f.$$.fragment,r),p=A(r),G(m.$$.fragment,r),v=A(r),G(S.$$.fragment,r),_=A(r),N&&N.l(r),D=A(r),G(E.$$.fragment,r),this.h()},h(){U(n,"href",i=$e(t[1].policyConflictLog[t[0]].point)),U(n,"target","_blank"),U(o,"href",u=de(t[1].policyConflictLog[t[0]].point)),U(o,"target","_blank"),Z(e,"display","flex"),Z(e,"justify-content","space-evenly")},m(r,C){L(r,e,C),j(e,n),j(n,l),j(e,a),j(e,o),j(o,c),L(r,g,C),M(f,r,C),L(r,p,C),M(m,r,C),L(r,v,C),M(S,r,C),L(r,_,C),N&&N.m(r,C),L(r,D,C),M(E,r,C),y=!0},p(r,[C]){(!y||C&3&&i!==(i=$e(r[1].policyConflictLog[r[0]].point)))&&U(n,"href",i),(!y||C&3&&u!==(u=de(r[1].policyConflictLog[r[0]].point)))&&U(o,"href",u);const ne={};!P&&C&3&&(P=!0,ne.value=r[1].policyConflictLog[r[0]].conflict,ee(()=>P=!1)),f.$set(ne);const ie={};!w&&C&3&&(w=!0,ie.value=r[1].policyConflictLog[r[0]].stage,ee(()=>w=!1)),m.$set(ie);const fe={};!s&&C&3&&(s=!0,fe.value=r[1].policyConflictLog[r[0]].locationName,ee(()=>s=!1)),S.$set(fe),r[1].policyConflictLog[r[0]].stage!="Design"?N?(N.p(r,C),C&3&&b(N,1)):(N=Te(r),N.c(),b(N,1),N.m(D.parentNode,D)):N&&(se(),I(N,1,1,()=>{N=null}),re());const ce={};!V&&C&3&&(V=!0,ce.value=r[1].policyConflictLog[r[0]].notes,ee(()=>V=!1)),E.$set(ce)},i(r){y||(b(f.$$.fragment,r),b(m.$$.fragment,r),b(S.$$.fragment,r),b(N),b(E.$$.fragment,r),y=!0)},o(r){I(f.$$.fragment,r),I(m.$$.fragment,r),I(S.$$.fragment,r),I(N),I(E.$$.fragment,r),y=!1},d(r){r&&(h(e),h(g),h(p),h(v),h(_),h(D)),R(f,r),R(m,r),R(S,r),N&&N.d(r),R(E,r)}}}function jt(t,e,n){let l;Le(t,K,f=>n(1,l=f));let{idx:i}=e;function a(f){t.$$.not_equal(l.policyConflictLog[i].conflict,f)&&(l.policyConflictLog[i].conflict=f,K.set(l))}function o(f){t.$$.not_equal(l.policyConflictLog[i].stage,f)&&(l.policyConflictLog[i].stage=f,K.set(l))}function c(f){t.$$.not_equal(l.policyConflictLog[i].locationName,f)&&(l.policyConflictLog[i].locationName=f,K.set(l))}function u(f){t.$$.not_equal(l.policyConflictLog[i].resolved,f)&&(l.policyConflictLog[i].resolved=f,K.set(l))}function g(f){t.$$.not_equal(l.policyConflictLog[i].notes,f)&&(l.policyConflictLog[i].notes=f,K.set(l))}return t.$$set=f=>{"idx"in f&&n(0,i=f.idx)},[i,l,a,o,c,u,g]}class qt extends Se{constructor(e){super(),Ne(this,e,jt,Tt,Ie,{idx:0})}}const{window:At}=ft;function je(t,e,n){const l=t.slice();return l[44]=e[n],l[45]=e,l[46]=n,l}function qe(t,e,n){const l=t.slice();return l[47]=e[n],l[48]=e,l[46]=n,l}function Ae(t,e,n){const l=t.slice();return l[44]=e[n],l[46]=n,l}function Be(t,e,n){const l=t.slice();return l[47]=e[n],l[46]=n,l}function Bt(t){let e,n,l,i,a,o,c,u;e=new Lt({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),e.$on("click",t[12]),l=new Nt({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),l.$on("click",t[14]);const g=[Ot,Ft],f=[];function P(p,m){return p[0].kind=="critical"?0:1}return a=P(t),o=f[a]=g[a](t),{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),i=q(),o.c(),c=me()},l(p){G(e.$$.fragment,p),n=A(p),G(l.$$.fragment,p),i=A(p),o.l(p),c=me()},m(p,m){M(e,p,m),L(p,n,m),M(l,p,m),L(p,i,m),f[a].m(p,m),L(p,c,m),u=!0},p(p,m){const w={};m[1]&1048576&&(w.$$scope={dirty:m,ctx:p}),e.$set(w);const v={};m[1]&1048576&&(v.$$scope={dirty:m,ctx:p}),l.$set(v);let S=a;a=P(p),a===S?f[a].p(p,m):(se(),I(f[S],1,1,()=>{f[S]=null}),re(),o=f[a],o?o.p(p,m):(o=f[a]=g[a](p),o.c()),b(o,1),o.m(c.parentNode,c))},i(p){u||(b(e.$$.fragment,p),b(l.$$.fragment,p),b(o),u=!0)},o(p){I(e.$$.fragment,p),I(l.$$.fragment,p),I(o),u=!1},d(p){p&&(h(n),h(i),h(c)),R(e,p),R(l,p),f[a].d(p)}}}function Gt(t){let e,n,l,i,a,o,c="Click the map to add a problem, or select a problem to fill out data",u,g,f="Critical Issues",P,p,m,w="Policy Conflicts",v,S,s;e=new It({props:{label:"Tools",open:!0,$$slots:{default:[Ht]},$$scope:{ctx:t}}});function _($){t[22]($)}let D={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[5]!==void 0&&(D.value=t[5]),l=new De({props:D}),x.push(()=>te(l,"value",_));let E=oe(t[2].criticalIssues),V=[];for(let $=0;$<E.length;$+=1)V[$]=Me(Be(t,E,$));const y=$=>I(V[$],1,1,()=>{V[$]=null});let Y=oe(t[2].policyConflictLog),F=[];for(let $=0;$<Y.length;$+=1)F[$]=Fe(Ae(t,Y,$));const ae=$=>I(F[$],1,1,()=>{F[$]=null});return{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),a=q(),o=z("p"),o.textContent=c,u=q(),g=z("h3"),g.textContent=f,P=q();for(let $=0;$<V.length;$+=1)V[$].c();p=q(),m=z("h3"),m.textContent=w,v=q();for(let $=0;$<F.length;$+=1)F[$].c();S=me()},l($){G(e.$$.fragment,$),n=A($),G(l.$$.fragment,$),a=A($),o=H($,"P",{"data-svelte-h":!0}),ke(o)!=="svelte-12ba5j2"&&(o.textContent=c),u=A($),g=H($,"H3",{"data-svelte-h":!0}),ke(g)!=="svelte-1qhh5xr"&&(g.textContent=f),P=A($);for(let k=0;k<V.length;k+=1)V[k].l($);p=A($),m=H($,"H3",{"data-svelte-h":!0}),ke(m)!=="svelte-eyxzjx"&&(m.textContent=w),v=A($);for(let k=0;k<F.length;k+=1)F[k].l($);S=me()},m($,k){M(e,$,k),L($,n,k),M(l,$,k),L($,a,k),L($,o,k),L($,u,k),L($,g,k),L($,P,k);for(let W=0;W<V.length;W+=1)V[W]&&V[W].m($,k);L($,p,k),L($,m,k),L($,v,k);for(let W=0;W<F.length;W+=1)F[W]&&F[W].m($,k);L($,S,k),s=!0},p($,k){const W={};k[0]&200|k[1]&1048576&&(W.$$scope={dirty:k,ctx:$}),e.$set(W);const N={};if(!i&&k[0]&32&&(i=!0,N.value=$[5],ee(()=>i=!1)),l.$set(N),k[0]&68614){E=oe($[2].criticalIssues);let T;for(T=0;T<E.length;T+=1){const le=Be($,E,T);V[T]?(V[T].p(le,k),b(V[T],1)):(V[T]=Me(le),V[T].c(),b(V[T],1),V[T].m(p.parentNode,p))}for(se(),T=E.length;T<V.length;T+=1)y(T);re()}if(k[0]&134150){Y=oe($[2].policyConflictLog);let T;for(T=0;T<Y.length;T+=1){const le=Ae($,Y,T);F[T]?(F[T].p(le,k),b(F[T],1)):(F[T]=Fe(le),F[T].c(),b(F[T],1),F[T].m(S.parentNode,S))}for(se(),T=Y.length;T<F.length;T+=1)ae(T);re()}},i($){if(!s){b(e.$$.fragment,$),b(l.$$.fragment,$);for(let k=0;k<E.length;k+=1)b(V[k]);for(let k=0;k<Y.length;k+=1)b(F[k]);s=!0}},o($){I(e.$$.fragment,$),I(l.$$.fragment,$),V=V.filter(Boolean);for(let k=0;k<V.length;k+=1)I(V[k]);F=F.filter(Boolean);for(let k=0;k<F.length;k+=1)I(F[k]);s=!1},d($){$&&(h(n),h(a),h(o),h(u),h(g),h(P),h(p),h(m),h(v),h(S)),R(e,$),R(l,$),ge(V,$),ge(F,$)}}}function Mt(t){let e;return{c(){e=X("Save")},l(n){e=Q(n,"Save")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function Rt(t){let e;return{c(){e=X("Delete")},l(n){e=Q(n,"Delete")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function Ft(t){let e,n;return e=new qt({props:{idx:t[0].idx}}),{c(){B(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,i){M(e,l,i),n=!0},p(l,i){const a={};i[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Ot(t){let e,n;return e=new Pt({props:{idx:t[0].idx}}),{c(){B(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,i){M(e,l,i),n=!0},p(l,i){const a={};i[0]&1&&(a.idx=l[0].idx),e.$set(a)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Ut(t){let e;return{c(){e=X("Zoom to fit")},l(n){e=Q(n,"Zoom to fit")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function zt(t){let e;return{c(){e=X("Show scheme context")},l(n){e=Q(n,"Show scheme context")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function Ht(t){let e,n,l,i,a,o,c,u,g,f,P,p;e=new St({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),e.$on("click",t[19]),l=new bt({}),a=new kt({});function m(s){t[20](s)}let w={map:t[3]};t[6]!==void 0&&(w.enabled=t[6]),c=new Ct({props:w}),x.push(()=>te(c,"enabled",m));function v(s){t[21](s)}let S={$$slots:{default:[zt]},$$scope:{ctx:t}};return t[7]!==void 0&&(S.checked=t[7]),f=new wt({props:S}),x.push(()=>te(f,"checked",v)),{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),i=q(),B(a.$$.fragment),o=q(),B(c.$$.fragment),g=q(),B(f.$$.fragment)},l(s){G(e.$$.fragment,s),n=A(s),G(l.$$.fragment,s),i=A(s),G(a.$$.fragment,s),o=A(s),G(c.$$.fragment,s),g=A(s),G(f.$$.fragment,s)},m(s,_){M(e,s,_),L(s,n,_),M(l,s,_),L(s,i,_),M(a,s,_),L(s,o,_),M(c,s,_),L(s,g,_),M(f,s,_),p=!0},p(s,_){const D={};_[1]&1048576&&(D.$$scope={dirty:_,ctx:s}),e.$set(D);const E={};_[0]&8&&(E.map=s[3]),!u&&_[0]&64&&(u=!0,E.enabled=s[6],ee(()=>u=!1)),c.$set(E);const V={};_[1]&1048576&&(V.$$scope={dirty:_,ctx:s}),!P&&_[0]&128&&(P=!0,V.checked=s[7],ee(()=>P=!1)),f.$set(V)},i(s){p||(b(e.$$.fragment,s),b(l.$$.fragment,s),b(a.$$.fragment,s),b(c.$$.fragment,s),b(f.$$.fragment,s),p=!0)},o(s){I(e.$$.fragment,s),I(l.$$.fragment,s),I(a.$$.fragment,s),I(c.$$.fragment,s),I(f.$$.fragment,s),p=!1},d(s){s&&(h(n),h(i),h(o),h(g)),R(e,s),R(l,s),R(a,s),R(c,s),R(f,s)}}}function Ge(t){let e,n,l=t[47].resolved+"",i;return{c(){e=z("span"),n=X("Resolved: "),i=X(l)},l(a){e=H(a,"SPAN",{});var o=J(e);n=Q(o,"Resolved: "),i=Q(o,l),o.forEach(h)},m(a,o){L(a,e,o),j(e,n),j(e,i)},p(a,o){o[0]&4&&l!==(l=a[47].resolved+"")&&pe(i,l)},d(a){a&&h(e)}}}function Jt(t){let e,n,l,i=t[47].stage+"",a,o,c=t[47].stage!="Design"&&Ge(t);return{c(){e=z("div"),n=z("span"),l=X("Stage: "),a=X(i),o=q(),c&&c.c(),this.h()},l(u){e=H(u,"DIV",{style:!0});var g=J(e);n=H(g,"SPAN",{});var f=J(n);l=Q(f,"Stage: "),a=Q(f,i),f.forEach(h),o=A(g),c&&c.l(g),g.forEach(h),this.h()},h(){Z(e,"width","100%"),Z(e,"display","flex"),Z(e,"justify-content","space-between")},m(u,g){L(u,e,g),j(e,n),j(n,l),j(n,a),j(e,o),c&&c.m(e,null)},p(u,g){g[0]&4&&i!==(i=u[47].stage+"")&&pe(a,i),u[47].stage!="Design"?c?c.p(u,g):(c=Ge(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&h(e),c&&c.d()}}}function Me(t){let e,n,l,i,a,o,c;function u(){return t[23](t[46])}function g(){return t[24](t[46])}l=new he({props:{name:t[16](t[47]),$$slots:{default:[Jt]},$$scope:{ctx:t}}}),l.$on("click",u),l.$on("mouseenter",g),l.$on("mouseleave",t[25]);function f(){return t[26](t[46])}function P(){return t[27](t[46])}return o=new he({props:{name:"Copy critical issue"}}),o.$on("click",f),o.$on("mouseenter",P),o.$on("mouseleave",t[28]),{c(){e=z("div"),n=z("div"),B(l.$$.fragment),i=q(),a=z("div"),B(o.$$.fragment),this.h()},l(p){e=H(p,"DIV",{class:!0});var m=J(e);n=H(m,"DIV",{class:!0});var w=J(n);G(l.$$.fragment,w),w.forEach(h),i=A(m),a=H(m,"DIV",{class:!0});var v=J(a);G(o.$$.fragment,v),v.forEach(h),m.forEach(h),this.h()},h(){U(n,"class","select svelte-fosvca"),U(a,"class","copy svelte-fosvca"),U(e,"class","select-or-copy svelte-fosvca")},m(p,m){L(p,e,m),j(e,n),M(l,n,null),j(e,i),j(e,a),M(o,a,null),c=!0},p(p,m){t=p;const w={};m[0]&4&&(w.name=t[16](t[47])),m[0]&4|m[1]&1048576&&(w.$$scope={dirty:m,ctx:t}),l.$set(w)},i(p){c||(b(l.$$.fragment,p),b(o.$$.fragment,p),c=!0)},o(p){I(l.$$.fragment,p),I(o.$$.fragment,p),c=!1},d(p){p&&h(e),R(l),R(o)}}}function Re(t){let e,n,l=t[44].resolved+"",i;return{c(){e=z("span"),n=X("Resolved: "),i=X(l)},l(a){e=H(a,"SPAN",{});var o=J(e);n=Q(o,"Resolved: "),i=Q(o,l),o.forEach(h)},m(a,o){L(a,e,o),j(e,n),j(e,i)},p(a,o){o[0]&4&&l!==(l=a[44].resolved+"")&&pe(i,l)},d(a){a&&h(e)}}}function Kt(t){let e,n,l,i=t[44].stage+"",a,o,c=t[44].stage!="Design"&&Re(t);return{c(){e=z("div"),n=z("span"),l=X("Stage: "),a=X(i),o=q(),c&&c.c(),this.h()},l(u){e=H(u,"DIV",{style:!0});var g=J(e);n=H(g,"SPAN",{});var f=J(n);l=Q(f,"Stage: "),a=Q(f,i),f.forEach(h),o=A(g),c&&c.l(g),g.forEach(h),this.h()},h(){Z(e,"width","70%"),Z(e,"display","flex"),Z(e,"justify-content","space-between")},m(u,g){L(u,e,g),j(e,n),j(n,l),j(n,a),j(e,o),c&&c.m(e,null)},p(u,g){g[0]&4&&i!==(i=u[44].stage+"")&&pe(a,i),u[44].stage!="Design"?c?c.p(u,g):(c=Re(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(u){u&&h(e),c&&c.d()}}}function Fe(t){let e,n,l,i,a,o,c,u;function g(){return t[29](t[46])}function f(){return t[30](t[46])}l=new he({props:{name:t[17](t[44]),$$slots:{default:[Kt]},$$scope:{ctx:t}}}),l.$on("click",g),l.$on("mouseenter",f),l.$on("mouseleave",t[31]);function P(){return t[32](t[46])}function p(){return t[33](t[46])}return o=new he({props:{name:"Copy policy conflict"}}),o.$on("click",P),o.$on("mouseenter",p),o.$on("mouseleave",t[34]),{c(){e=z("div"),n=z("div"),B(l.$$.fragment),i=q(),a=z("div"),B(o.$$.fragment),c=q(),this.h()},l(m){e=H(m,"DIV",{class:!0});var w=J(e);n=H(w,"DIV",{class:!0});var v=J(n);G(l.$$.fragment,v),v.forEach(h),i=A(w),a=H(w,"DIV",{class:!0});var S=J(a);G(o.$$.fragment,S),S.forEach(h),c=A(w),w.forEach(h),this.h()},h(){U(n,"class","select svelte-fosvca"),U(a,"class","copy svelte-fosvca"),U(e,"class","select-or-copy svelte-fosvca")},m(m,w){L(m,e,w),j(e,n),M(l,n,null),j(e,i),j(e,a),M(o,a,null),j(e,c),u=!0},p(m,w){t=m;const v={};w[0]&4&&(v.name=t[17](t[44])),w[0]&4|w[1]&1048576&&(v.$$scope={dirty:w,ctx:t}),l.$set(v)},i(m){u||(b(l.$$.fragment,m),b(o.$$.fragment,m),u=!0)},o(m){I(l.$$.fragment,m),I(o.$$.fragment,m),u=!1},d(m){m&&h(e),R(l),R(o)}}}function Wt(t){let e,n,l,i=t[47].criticalIssue+"",a;return{c(){e=Ce("svg"),n=Ce("polygon"),l=Ce("text"),a=X(i),this.h()},l(o){e=we(o,"svg",{width:!0,height:!0,xmlns:!0});var c=J(e);n=we(c,"polygon",{points:!0,fill:!0,class:!0}),J(n).forEach(h),l=we(c,"text",{x:!0,y:!0});var u=J(l);a=Q(u,i),u.forEach(h),c.forEach(h),this.h()},h(){U(n,"points","20,0 0,40 40,40"),U(n,"fill",mt.critical.background),U(n,"class","svelte-fosvca"),U(l,"x","13"),U(l,"y","30"),Z(l,"fill","white"),U(e,"width","40"),U(e,"height","40"),U(e,"xmlns","http://www.w3.org/2000/svg")},m(o,c){L(o,e,c),j(e,n),j(e,l),j(l,a)},p(o,c){c[0]&4&&i!==(i=o[47].criticalIssue+"")&&pe(a,i)},d(o){o&&h(e)}}}function Oe(t){let e,n,l;function i(u){t[36](u,t[47])}function a(){return t[37](t[46])}function o(){return t[38](t[46])}let c={draggable:!0,$$slots:{default:[Wt]},$$scope:{ctx:t}};return t[47].point!==void 0&&(c.lngLat=t[47].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",i)),e.$on("click",a),e.$on("dragend",o),{c(){B(e.$$.fragment)},l(u){G(e.$$.fragment,u)},m(u,g){M(e,u,g),l=!0},p(u,g){t=u;const f={};g[0]&4|g[1]&1048576&&(f.$$scope={dirty:g,ctx:t}),!n&&g[0]&4&&(n=!0,f.lngLat=t[47].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(b(e.$$.fragment,u),l=!0)},o(u){I(e.$$.fragment,u),l=!1},d(u){R(e,u)}}}function Zt(t){let e,n=t[44].conflict+"",l;return{c(){e=z("span"),l=X(n),this.h()},l(i){e=H(i,"SPAN",{class:!0});var a=J(e);l=Q(a,n),a.forEach(h),this.h()},h(){U(e,"class","dot svelte-fosvca"),Z(e,"background",gt)},m(i,a){L(i,e,a),j(e,l)},p(i,a){a[0]&4&&n!==(n=i[44].conflict+"")&&pe(l,n)},d(i){i&&h(e)}}}function Ue(t){let e,n,l;function i(u){t[39](u,t[44])}function a(){return t[40](t[46])}function o(){return t[41](t[46])}let c={draggable:!0,$$slots:{default:[Zt]},$$scope:{ctx:t}};return t[44].point!==void 0&&(c.lngLat=t[44].point),e=new Ze({props:c}),x.push(()=>te(e,"lngLat",i)),e.$on("click",a),e.$on("dragend",o),{c(){B(e.$$.fragment)},l(u){G(e.$$.fragment,u)},m(u,g){M(e,u,g),l=!0},p(u,g){t=u;const f={};g[0]&4|g[1]&1048576&&(f.$$scope={dirty:g,ctx:t}),!n&&g[0]&4&&(n=!0,f.lngLat=t[44].point,ee(()=>n=!1)),e.$set(f)},i(u){l||(b(e.$$.fragment,u),l=!0)},o(u){I(e.$$.fragment,u),l=!1},d(u){R(e,u)}}}function Yt(t){let e,n;return e=new _t({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){B(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,i){M(e,l,i),n=!0},p:rt,i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Xt(t){let e,n,l,i,a,o,c,u,g,f;e=new yt({}),e.$on("click",t[13]),l=new ut({props:{gj:t[2].summary.networkMap,show:t[7]}});let P=oe(t[2].criticalIssues),p=[];for(let s=0;s<P.length;s+=1)p[s]=Oe(qe(t,P,s));const m=s=>I(p[s],1,1,()=>{p[s]=null});let w=oe(t[2].policyConflictLog),v=[];for(let s=0;s<w.length;s+=1)v[s]=Ue(je(t,w,s));const S=s=>I(v[s],1,1,()=>{v[s]=null});return c=new pt({props:{data:t[8],$$slots:{default:[Yt]},$$scope:{ctx:t}}}),g=new Dt({props:{map:t[3]}}),{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),i=q();for(let s=0;s<p.length;s+=1)p[s].c();a=q();for(let s=0;s<v.length;s+=1)v[s].c();o=q(),B(c.$$.fragment),u=q(),B(g.$$.fragment)},l(s){G(e.$$.fragment,s),n=A(s),G(l.$$.fragment,s),i=A(s);for(let _=0;_<p.length;_+=1)p[_].l(s);a=A(s);for(let _=0;_<v.length;_+=1)v[_].l(s);o=A(s),G(c.$$.fragment,s),u=A(s),G(g.$$.fragment,s)},m(s,_){M(e,s,_),L(s,n,_),M(l,s,_),L(s,i,_);for(let D=0;D<p.length;D+=1)p[D]&&p[D].m(s,_);L(s,a,_);for(let D=0;D<v.length;D+=1)v[D]&&v[D].m(s,_);L(s,o,_),M(c,s,_),L(s,u,_),M(g,s,_),f=!0},p(s,_){const D={};if(_[0]&4&&(D.gj=s[2].summary.networkMap),_[0]&128&&(D.show=s[7]),l.$set(D),_[0]&516){P=oe(s[2].criticalIssues);let y;for(y=0;y<P.length;y+=1){const Y=qe(s,P,y);p[y]?(p[y].p(Y,_),b(p[y],1)):(p[y]=Oe(Y),p[y].c(),b(p[y],1),p[y].m(a.parentNode,a))}for(se(),y=P.length;y<p.length;y+=1)m(y);re()}if(_[0]&516){w=oe(s[2].policyConflictLog);let y;for(y=0;y<w.length;y+=1){const Y=je(s,w,y);v[y]?(v[y].p(Y,_),b(v[y],1)):(v[y]=Ue(Y),v[y].c(),b(v[y],1),v[y].m(o.parentNode,o))}for(se(),y=w.length;y<v.length;y+=1)S(y);re()}const E={};_[0]&256&&(E.data=s[8]),_[1]&1048576&&(E.$$scope={dirty:_,ctx:s}),c.$set(E);const V={};_[0]&8&&(V.map=s[3]),g.$set(V)},i(s){if(!f){b(e.$$.fragment,s),b(l.$$.fragment,s);for(let _=0;_<P.length;_+=1)b(p[_]);for(let _=0;_<w.length;_+=1)b(v[_]);b(c.$$.fragment,s),b(g.$$.fragment,s),f=!0}},o(s){I(e.$$.fragment,s),I(l.$$.fragment,s),p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)I(p[_]);v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)I(v[_]);I(c.$$.fragment,s),I(g.$$.fragment,s),f=!1},d(s){s&&(h(n),h(i),h(a),h(o),h(u)),R(e,s),R(l,s),ge(p,s),ge(v,s),R(c,s),R(g,s)}}}function Qt(t){let e,n,l,i,a,o,c,u,g,f,P;const p=[Gt,Bt],m=[];function w(s,_){return s[0]==null?0:1}l=w(t),i=m[l]=p[l](t);function v(s){t[42](s)}let S={$$slots:{default:[Xt]},$$scope:{ctx:t}};return t[3]!==void 0&&(S.map=t[3]),c=new at({props:S}),x.push(()=>te(c,"map",v)),{c(){e=z("div"),n=z("div"),i.c(),a=q(),o=z("div"),B(c.$$.fragment),this.h()},l(s){e=H(s,"DIV",{style:!0});var _=J(e);n=H(_,"DIV",{style:!0});var D=J(n);i.l(D),D.forEach(h),a=A(_),o=H(_,"DIV",{style:!0});var E=J(o);G(c.$$.fragment,E),E.forEach(h),_.forEach(h),this.h()},h(){Z(n,"width","30%"),Z(n,"overflow-y","scroll"),Z(n,"padding","10px"),Z(n,"border","1px solid black"),Z(o,"position","relative"),Z(o,"width","70%"),Z(e,"display","flex"),Z(e,"height","80vh")},m(s,_){L(s,e,_),j(e,n),m[l].m(n,null),t[35](n),j(e,a),j(e,o),M(c,o,null),g=!0,f||(P=ot(At,"keydown",t[18]),f=!0)},p(s,_){let D=l;l=w(s),l===D?m[l].p(s,_):(se(),I(m[D],1,1,()=>{m[D]=null}),re(),i=m[l],i?i.p(s,_):(i=m[l]=p[l](s),i.c()),b(i,1),i.m(n,null));const E={};_[0]&396|_[1]&1048576&&(E.$$scope={dirty:_,ctx:s}),!u&&_[0]&8&&(u=!0,E.map=s[3],ee(()=>u=!1)),c.$set(E)},i(s){g||(b(i),b(c.$$.fragment,s),g=!0)},o(s){I(i),I(c.$$.fragment,s),g=!1},d(s){s&&h(e),m[l].d(),t[35](null),R(c),f=!1,P()}}}function xt(t,e,n){let l={type:"FeatureCollection",features:[]},i=e??n;if(i!=null){let a=i.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(ye(a[i.idx].point))}return l}function ye(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function el(t,e,n){let l,i;Le(t,K,d=>n(2,i=d));let a,o,c="critical",u=null,g=null,f=null,P=!1,p=!0;async function m(d){g=o.scrollTop,n(0,u=d),n(1,f=null),await be(),n(4,o.scrollTop=0,o)}async function w(d){g=o.scrollTop,n(0,u=d),n(1,f=null),await be(),n(4,o.scrollTop=0,o);let O=d.kind=="critical"?i.criticalIssues:i.policyConflictLog;a.flyTo({center:O[d.idx].point,duration:500})}async function v(d){let O=d.kind=="critical"?i.criticalIssues:i.policyConflictLog;console.log(O);let _e=JSON.parse(JSON.stringify(O[d.idx])),ve=O.slice(0,d.idx+1).concat([_e]).concat(O.slice(d.idx+1));console.log(ve),d.kind=="critical"?ue(K,i.criticalIssues=ve,i):ue(K,i.policyConflictLog=ve,i),console.log("done")}async function S(){n(0,u=null),ue(K,i.policyConflictLog=i.policyConflictLog.toSorted((d,O)=>Ee(d.conflict)-Ee(O.conflict)),i),ue(K,i.criticalIssues=i.criticalIssues.toSorted((d,O)=>Ve(d.criticalIssue)-Ve(O.criticalIssue)),i),g!=null&&(await be(),n(4,o.scrollTop=g,o),g=null)}function s(d){if(!P){if(u!=null){S();return}c=="critical"?(ue(K,i.criticalIssues=[...i.criticalIssues,{criticalIssue:"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),m({kind:"critical",idx:i.criticalIssues.length-1})):(ue(K,i.policyConflictLog=[...i.policyConflictLog,{conflict:"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),m({kind:"conflict",idx:i.policyConflictLog.length-1}))}}st(()=>{D(!1)});function _(){window.confirm("Delete this entry?")&&(u.kind=="critical"?(i.criticalIssues.splice(u.idx,1),K.set(i)):(i.policyConflictLog.splice(u.idx,1),K.set(i)),S())}function D(d){let O={type:"FeatureCollection",features:[...i.criticalIssues.map(_e=>ye(_e.point)),...i.policyConflictLog.map(_e=>ye(_e.point)),...i.summary.networkMap.features]};O.features.length>0&&a.fitBounds(ct(O),{padding:20,animate:d})}function E(d){let O=d.criticalIssue?ht(d.criticalIssue):"Unknown critical";return d.locationName?`${O} (${d.locationName})`:O}function V(d){let O=d.conflict?vt(d.conflict):"Unknown conflict";return d.locationName?`${O} (${d.locationName})`:O}function y(d){if(u!=null&&d.key=="Escape")d.stopPropagation(),S();else if(u!=null&&d.key=="Delete"){let O=d.target.tagName;if(O=="INPUT"||O=="TEXTAREA")return;d.stopPropagation(),_()}}const Y=()=>D(!0);function F(d){P=d,n(6,P)}function ae(d){p=d,n(7,p)}function $(d){c=d,n(5,c)}const k=d=>w({kind:"critical",idx:d}),W=d=>n(1,f={kind:"critical",idx:d}),N=()=>n(1,f=null),T=d=>v({kind:"critical",idx:d}),le=d=>n(1,f={kind:"critical",idx:d}),r=()=>n(1,f=null),C=d=>w({kind:"conflict",idx:d}),ne=d=>n(1,f={kind:"conflict",idx:d}),ie=()=>n(1,f=null),fe=d=>v({kind:"conflict",idx:d}),ce=d=>n(1,f={kind:"conflict",idx:d}),Ye=()=>n(1,f=null);function Xe(d){x[d?"unshift":"push"](()=>{o=d,n(4,o)})}function Qe(d,O){t.$$.not_equal(O.point,d)&&(O.point=d,K.set(i))}const xe=d=>m({kind:"critical",idx:d}),et=d=>m({kind:"critical",idx:d});function tt(d,O){t.$$.not_equal(O.point,d)&&(O.point=d,K.set(i))}const lt=d=>m({kind:"conflict",idx:d}),nt=d=>m({kind:"conflict",idx:d});function it(d){a=d,n(3,a)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(8,l=xt(i,u,f))},[u,f,i,a,o,c,P,p,l,m,w,v,S,s,_,D,E,V,y,Y,F,ae,$,k,W,N,T,le,r,C,ne,ie,fe,ce,Ye,Xe,Qe,xe,et,tt,lt,nt,it]}class wl extends Se{constructor(e){super(),Ne(this,e,el,Qt,Ie,{},null,[-1,-1])}}export{wl as component};
