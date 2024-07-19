import{s as Ce,v as J,e as W,t as te,a as q,c as Y,b as Z,d as le,f as h,g as j,r as U,x,i as L,h as z,w as Q,k as we,z as He,U as Ke,T as Se,D as Ne,p as he,q as _e,j as de,n as We,M as ve,N as be}from"../chunks/scheduler.BBS-fkhU.js";import{S as ye,i as Ie,e as X,c as B,a as M,m as G,t as w,b as S,d as V,f as re,g as ae}from"../chunks/index.B8H3ypVf.js";import{s as $e,a as me,M as Ye,g as Ze,b as Je,C as Qe,G as Xe,c as xe}from"../chunks/index.DwHaJjwC.js";import{e as se}from"../chunks/each.D79A5KlB.js";import{c as et,p as tt}from"../chunks/colors.CYEpEtTL.js";import{p as Pe}from"../chunks/index.DzesBSNN.js";import{S as ge}from"../chunks/Select.DqyoFzIJ.js";import{T as Te}from"../chunks/TextArea.Ck6ITb4v.js";import{T as Ue}from"../chunks/TextInput.C_aBwF72.js";import{s as R}from"../chunks/data.69l4JHBv.js";import{c as lt,p as nt}from"../chunks/lists.BnA5ucEg.js";import{Y as Re}from"../chunks/YesNo.qSeYXC0B.js";import{R as it,B as ot,G as st,C as rt,M as at,a as ft,S as ut,b as ze}from"../chunks/GeoreferenceLayer.X1sOqmkA.js";import{D as ct,C as pt}from"../chunks/DefaultButton.Pbp5mObw.js";import{W as _t,S as Le}from"../chunks/WarningButton.CaqyhU7y.js";function $t(t){let e,n,l,o,c,f,r,a,d,u,k,p,b,_,v,E,s,$,N,F,P,m,K,O;function A(i){t[2](i)}let oe={label:"Critical Issue",emptyOption:!0,choices:lt};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(oe.value=t[1].criticalIssues[t[0]].criticalIssue),u=new ge({props:oe}),J.push(()=>X(u,"value",A));function g(i){t[3](i)}let y={label:"Stage",emptyOption:!0,choices:Pe(["Existing","Design"])};t[1].criticalIssues[t[0]].stage!==void 0&&(y.value=t[1].criticalIssues[t[0]].stage),b=new ge({props:y}),J.push(()=>X(b,"value",g));function T(i){t[4](i)}let H={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(H.value=t[1].criticalIssues[t[0]].locationName),E=new Ue({props:H}),J.push(()=>X(E,"value",T));function D(i){t[5](i)}let ee={label:"Resolved by Design"};t[1].criticalIssues[t[0]].resolved!==void 0&&(ee.value=t[1].criticalIssues[t[0]].resolved),N=new Re({props:ee}),J.push(()=>X(N,"value",D));function fe(i){t[6](i)}let I={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(I.value=t[1].criticalIssues[t[0]].notes),m=new Te({props:I}),J.push(()=>X(m,"value",fe)),{c(){e=W("div"),n=W("a"),l=te("Google StreetView"),c=q(),f=W("a"),r=te("Bing Streetside"),d=q(),B(u.$$.fragment),p=q(),B(b.$$.fragment),v=q(),B(E.$$.fragment),$=q(),B(N.$$.fragment),P=q(),B(m.$$.fragment),this.h()},l(i){e=Y(i,"DIV",{style:!0});var C=Z(e);n=Y(C,"A",{href:!0,target:!0});var ne=Z(n);l=le(ne,"Google StreetView"),ne.forEach(h),c=j(C),f=Y(C,"A",{href:!0,target:!0});var ie=Z(f);r=le(ie,"Bing Streetside"),ie.forEach(h),C.forEach(h),d=j(i),M(u.$$.fragment,i),p=j(i),M(b.$$.fragment,i),v=j(i),M(E.$$.fragment,i),$=j(i),M(N.$$.fragment,i),P=j(i),M(m.$$.fragment,i),this.h()},h(){U(n,"href",o=$e(t[1].criticalIssues[t[0]].point)),U(n,"target","_blank"),U(f,"href",a=me(t[1].criticalIssues[t[0]].point)),U(f,"target","_blank"),x(e,"display","flex"),x(e,"justify-content","space-evenly")},m(i,C){L(i,e,C),z(e,n),z(n,l),z(e,c),z(e,f),z(f,r),L(i,d,C),G(u,i,C),L(i,p,C),G(b,i,C),L(i,v,C),G(E,i,C),L(i,$,C),G(N,i,C),L(i,P,C),G(m,i,C),O=!0},p(i,[C]){(!O||C&3&&o!==(o=$e(i[1].criticalIssues[i[0]].point)))&&U(n,"href",o),(!O||C&3&&a!==(a=me(i[1].criticalIssues[i[0]].point)))&&U(f,"href",a);const ne={};!k&&C&3&&(k=!0,ne.value=i[1].criticalIssues[i[0]].criticalIssue,Q(()=>k=!1)),u.$set(ne);const ie={};!_&&C&3&&(_=!0,ie.value=i[1].criticalIssues[i[0]].stage,Q(()=>_=!1)),b.$set(ie);const ue={};!s&&C&3&&(s=!0,ue.value=i[1].criticalIssues[i[0]].locationName,Q(()=>s=!1)),E.$set(ue);const ce={};!F&&C&3&&(F=!0,ce.value=i[1].criticalIssues[i[0]].resolved,Q(()=>F=!1)),N.$set(ce);const pe={};!K&&C&3&&(K=!0,pe.value=i[1].criticalIssues[i[0]].notes,Q(()=>K=!1)),m.$set(pe)},i(i){O||(w(u.$$.fragment,i),w(b.$$.fragment,i),w(E.$$.fragment,i),w(N.$$.fragment,i),w(m.$$.fragment,i),O=!0)},o(i){S(u.$$.fragment,i),S(b.$$.fragment,i),S(E.$$.fragment,i),S(N.$$.fragment,i),S(m.$$.fragment,i),O=!1},d(i){i&&(h(e),h(d),h(p),h(v),h($),h(P)),V(u,i),V(b,i),V(E,i),V(N,i),V(m,i)}}}function mt(t,e,n){let l;we(t,R,u=>n(1,l=u));let{idx:o}=e;function c(u){t.$$.not_equal(l.criticalIssues[o].criticalIssue,u)&&(l.criticalIssues[o].criticalIssue=u,R.set(l))}function f(u){t.$$.not_equal(l.criticalIssues[o].stage,u)&&(l.criticalIssues[o].stage=u,R.set(l))}function r(u){t.$$.not_equal(l.criticalIssues[o].locationName,u)&&(l.criticalIssues[o].locationName=u,R.set(l))}function a(u){t.$$.not_equal(l.criticalIssues[o].resolved,u)&&(l.criticalIssues[o].resolved=u,R.set(l))}function d(u){t.$$.not_equal(l.criticalIssues[o].notes,u)&&(l.criticalIssues[o].notes=u,R.set(l))}return t.$$set=u=>{"idx"in u&&n(0,o=u.idx)},[o,l,c,f,r,a,d]}class gt extends ye{constructor(e){super(),Ie(this,e,mt,$t,Ce,{idx:0})}}function dt(t){let e,n,l,o,c,f,r,a,d,u,k,p,b,_,v,E,s,$,N,F,P,m,K,O;function A(i){t[2](i)}let oe={label:"Policy Conflict",emptyOption:!0,choices:nt};t[1].policyConflictLog[t[0]].conflict!==void 0&&(oe.value=t[1].policyConflictLog[t[0]].conflict),u=new ge({props:oe}),J.push(()=>X(u,"value",A));function g(i){t[3](i)}let y={label:"Stage",emptyOption:!0,choices:Pe(["Existing","Design"])};t[1].policyConflictLog[t[0]].stage!==void 0&&(y.value=t[1].policyConflictLog[t[0]].stage),b=new ge({props:y}),J.push(()=>X(b,"value",g));function T(i){t[4](i)}let H={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(H.value=t[1].policyConflictLog[t[0]].locationName),E=new Ue({props:H}),J.push(()=>X(E,"value",T));function D(i){t[5](i)}let ee={label:"Resolved by Design"};t[1].policyConflictLog[t[0]].resolved!==void 0&&(ee.value=t[1].policyConflictLog[t[0]].resolved),N=new Re({props:ee}),J.push(()=>X(N,"value",D));function fe(i){t[6](i)}let I={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(I.value=t[1].policyConflictLog[t[0]].notes),m=new Te({props:I}),J.push(()=>X(m,"value",fe)),{c(){e=W("div"),n=W("a"),l=te("Google StreetView"),c=q(),f=W("a"),r=te("Bing Streetside"),d=q(),B(u.$$.fragment),p=q(),B(b.$$.fragment),v=q(),B(E.$$.fragment),$=q(),B(N.$$.fragment),P=q(),B(m.$$.fragment),this.h()},l(i){e=Y(i,"DIV",{style:!0});var C=Z(e);n=Y(C,"A",{href:!0,target:!0});var ne=Z(n);l=le(ne,"Google StreetView"),ne.forEach(h),c=j(C),f=Y(C,"A",{href:!0,target:!0});var ie=Z(f);r=le(ie,"Bing Streetside"),ie.forEach(h),C.forEach(h),d=j(i),M(u.$$.fragment,i),p=j(i),M(b.$$.fragment,i),v=j(i),M(E.$$.fragment,i),$=j(i),M(N.$$.fragment,i),P=j(i),M(m.$$.fragment,i),this.h()},h(){U(n,"href",o=$e(t[1].policyConflictLog[t[0]].point)),U(n,"target","_blank"),U(f,"href",a=me(t[1].policyConflictLog[t[0]].point)),U(f,"target","_blank"),x(e,"display","flex"),x(e,"justify-content","space-evenly")},m(i,C){L(i,e,C),z(e,n),z(n,l),z(e,c),z(e,f),z(f,r),L(i,d,C),G(u,i,C),L(i,p,C),G(b,i,C),L(i,v,C),G(E,i,C),L(i,$,C),G(N,i,C),L(i,P,C),G(m,i,C),O=!0},p(i,[C]){(!O||C&3&&o!==(o=$e(i[1].policyConflictLog[i[0]].point)))&&U(n,"href",o),(!O||C&3&&a!==(a=me(i[1].policyConflictLog[i[0]].point)))&&U(f,"href",a);const ne={};!k&&C&3&&(k=!0,ne.value=i[1].policyConflictLog[i[0]].conflict,Q(()=>k=!1)),u.$set(ne);const ie={};!_&&C&3&&(_=!0,ie.value=i[1].policyConflictLog[i[0]].stage,Q(()=>_=!1)),b.$set(ie);const ue={};!s&&C&3&&(s=!0,ue.value=i[1].policyConflictLog[i[0]].locationName,Q(()=>s=!1)),E.$set(ue);const ce={};!F&&C&3&&(F=!0,ce.value=i[1].policyConflictLog[i[0]].resolved,Q(()=>F=!1)),N.$set(ce);const pe={};!K&&C&3&&(K=!0,pe.value=i[1].policyConflictLog[i[0]].notes,Q(()=>K=!1)),m.$set(pe)},i(i){O||(w(u.$$.fragment,i),w(b.$$.fragment,i),w(E.$$.fragment,i),w(N.$$.fragment,i),w(m.$$.fragment,i),O=!0)},o(i){S(u.$$.fragment,i),S(b.$$.fragment,i),S(E.$$.fragment,i),S(N.$$.fragment,i),S(m.$$.fragment,i),O=!1},d(i){i&&(h(e),h(d),h(p),h(v),h($),h(P)),V(u,i),V(b,i),V(E,i),V(N,i),V(m,i)}}}function ht(t,e,n){let l;we(t,R,u=>n(1,l=u));let{idx:o}=e;function c(u){t.$$.not_equal(l.policyConflictLog[o].conflict,u)&&(l.policyConflictLog[o].conflict=u,R.set(l))}function f(u){t.$$.not_equal(l.policyConflictLog[o].stage,u)&&(l.policyConflictLog[o].stage=u,R.set(l))}function r(u){t.$$.not_equal(l.policyConflictLog[o].locationName,u)&&(l.policyConflictLog[o].locationName=u,R.set(l))}function a(u){t.$$.not_equal(l.policyConflictLog[o].resolved,u)&&(l.policyConflictLog[o].resolved=u,R.set(l))}function d(u){t.$$.not_equal(l.policyConflictLog[o].notes,u)&&(l.policyConflictLog[o].notes=u,R.set(l))}return t.$$set=u=>{"idx"in u&&n(0,o=u.idx)},[o,l,c,f,r,a,d]}class vt extends ye{constructor(e){super(),Ie(this,e,ht,dt,Ce,{idx:0})}}const{window:bt}=Ze;function Ee(t,e,n){const l=t.slice();return l[31]=e[n],l[32]=e,l[33]=n,l}function De(t,e,n){const l=t.slice();return l[34]=e[n],l[35]=e,l[33]=n,l}function qe(t,e,n){const l=t.slice();return l[31]=e[n],l[33]=n,l}function je(t,e,n){const l=t.slice();return l[34]=e[n],l[33]=n,l}function kt(t){let e,n,l,o,c,f,r,a;e=new ct({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),e.$on("click",t[23]),l=new _t({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),l.$on("click",t[10]);const d=[Lt,It],u=[];function k(p,b){return p[0].kind=="critical"?0:1}return c=k(t),f=u[c]=d[c](t),{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),o=q(),f.c(),r=Ne()},l(p){M(e.$$.fragment,p),n=j(p),M(l.$$.fragment,p),o=j(p),f.l(p),r=Ne()},m(p,b){G(e,p,b),L(p,n,b),G(l,p,b),L(p,o,b),u[c].m(p,b),L(p,r,b),a=!0},p(p,b){const _={};b[1]&128&&(_.$$scope={dirty:b,ctx:p}),e.$set(_);const v={};b[1]&128&&(v.$$scope={dirty:b,ctx:p}),l.$set(v);let E=c;c=k(p),c===E?u[c].p(p,b):(ae(),S(u[E],1,1,()=>{u[E]=null}),re(),f=u[c],f?f.p(p,b):(f=u[c]=d[c](p),f.c()),w(f,1),f.m(r.parentNode,r))},i(p){a||(w(e.$$.fragment,p),w(l.$$.fragment,p),w(f),a=!0)},o(p){S(e.$$.fragment,p),S(l.$$.fragment,p),S(f),a=!1},d(p){p&&(h(n),h(o),h(r)),V(e,p),V(l,p),u[c].d(p)}}}function Ct(t){let e,n,l,o,c,f,r="Click the map to add a problem, or select a problem to fill out data",a,d,u="Critical Issues",k,p,b,_,v="Policy Conflicts",E,s,$;e=new pt({props:{label:"Tools",$$slots:{default:[Et]},$$scope:{ctx:t}}});function N(g){t[16](g)}let F={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[4]!==void 0&&(F.value=t[4]),l=new it({props:F}),J.push(()=>X(l,"value",N));let P=se(t[2].criticalIssues),m=[];for(let g=0;g<P.length;g+=1)m[g]=Me(je(t,P,g));const K=g=>S(m[g],1,1,()=>{m[g]=null});let O=se(t[2].policyConflictLog),A=[];for(let g=0;g<O.length;g+=1)A[g]=Ge(qe(t,O,g));const oe=g=>S(A[g],1,1,()=>{A[g]=null});return{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),c=q(),f=W("p"),f.textContent=r,a=q(),d=W("h3"),d.textContent=u,k=q(),p=W("ol");for(let g=0;g<m.length;g+=1)m[g].c();b=q(),_=W("h3"),_.textContent=v,E=q(),s=W("ol");for(let g=0;g<A.length;g+=1)A[g].c()},l(g){M(e.$$.fragment,g),n=j(g),M(l.$$.fragment,g),c=j(g),f=Y(g,"P",{"data-svelte-h":!0}),he(f)!=="svelte-12ba5j2"&&(f.textContent=r),a=j(g),d=Y(g,"H3",{"data-svelte-h":!0}),he(d)!=="svelte-1qhh5xr"&&(d.textContent=u),k=j(g),p=Y(g,"OL",{});var y=Z(p);for(let H=0;H<m.length;H+=1)m[H].l(y);y.forEach(h),b=j(g),_=Y(g,"H3",{"data-svelte-h":!0}),he(_)!=="svelte-eyxzjx"&&(_.textContent=v),E=j(g),s=Y(g,"OL",{});var T=Z(s);for(let H=0;H<A.length;H+=1)A[H].l(T);T.forEach(h)},m(g,y){G(e,g,y),L(g,n,y),G(l,g,y),L(g,c,y),L(g,f,y),L(g,a,y),L(g,d,y),L(g,k,y),L(g,p,y);for(let T=0;T<m.length;T+=1)m[T]&&m[T].m(p,null);L(g,b,y),L(g,_,y),L(g,E,y),L(g,s,y);for(let T=0;T<A.length;T+=1)A[T]&&A[T].m(s,null);$=!0},p(g,y){const T={};y[0]&104|y[1]&128&&(T.$$scope={dirty:y,ctx:g}),e.$set(T);const H={};if(!o&&y[0]&16&&(o=!0,H.value=g[4],Q(()=>o=!1)),l.$set(H),y[0]&262){P=se(g[2].criticalIssues);let D;for(D=0;D<P.length;D+=1){const ee=je(g,P,D);m[D]?(m[D].p(ee,y),w(m[D],1)):(m[D]=Me(ee),m[D].c(),w(m[D],1),m[D].m(p,null))}for(ae(),D=P.length;D<m.length;D+=1)K(D);re()}if(y[0]&262){O=se(g[2].policyConflictLog);let D;for(D=0;D<O.length;D+=1){const ee=qe(g,O,D);A[D]?(A[D].p(ee,y),w(A[D],1)):(A[D]=Ge(ee),A[D].c(),w(A[D],1),A[D].m(s,null))}for(ae(),D=O.length;D<A.length;D+=1)oe(D);re()}},i(g){if(!$){w(e.$$.fragment,g),w(l.$$.fragment,g);for(let y=0;y<P.length;y+=1)w(m[y]);for(let y=0;y<O.length;y+=1)w(A[y]);$=!0}},o(g){S(e.$$.fragment,g),S(l.$$.fragment,g),m=m.filter(Boolean);for(let y=0;y<m.length;y+=1)S(m[y]);A=A.filter(Boolean);for(let y=0;y<A.length;y+=1)S(A[y]);$=!1},d(g){g&&(h(n),h(c),h(f),h(a),h(d),h(k),h(p),h(b),h(_),h(E),h(s)),V(e,g),V(l,g),_e(m,g),_e(A,g)}}}function wt(t){let e;return{c(){e=te("Save")},l(n){e=le(n,"Save")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function yt(t){let e;return{c(){e=te("Delete")},l(n){e=le(n,"Delete")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function It(t){let e,n;return e=new vt({props:{idx:t[0].idx}}),{c(){B(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,o){G(e,l,o),n=!0},p(l,o){const c={};o[0]&1&&(c.idx=l[0].idx),e.$set(c)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function Lt(t){let e,n;return e=new gt({props:{idx:t[0].idx}}),{c(){B(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,o){G(e,l,o),n=!0},p(l,o){const c={};o[0]&1&&(c.idx=l[0].idx),e.$set(c)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function St(t){let e;return{c(){e=te("Zoom to fit")},l(n){e=le(n,"Zoom to fit")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function Be(t){let e,n,l;function o(f){t[14](f)}let c={map:t[3]};return t[5]!==void 0&&(c.enabled=t[5]),e=new ut({props:c}),J.push(()=>X(e,"enabled",o)),{c(){B(e.$$.fragment)},l(f){M(e.$$.fragment,f)},m(f,r){G(e,f,r),l=!0},p(f,r){const a={};r[0]&8&&(a.map=f[3]),!n&&r[0]&32&&(n=!0,a.enabled=f[5],Q(()=>n=!1)),e.$set(a)},i(f){l||(w(e.$$.fragment,f),l=!0)},o(f){S(e.$$.fragment,f),l=!1},d(f){V(e,f)}}}function Nt(t){let e;return{c(){e=te("Show scheme context")},l(n){e=le(n,"Show scheme context")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function Et(t){let e,n,l,o,c,f,r,a,d,u;e=new Le({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",t[13]),l=new ot({}),c=new st({});let k=t[3]&&Be(t);function p(_){t[15](_)}let b={$$slots:{default:[Nt]},$$scope:{ctx:t}};return t[6]!==void 0&&(b.checked=t[6]),a=new rt({props:b}),J.push(()=>X(a,"checked",p)),{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),o=q(),B(c.$$.fragment),f=q(),k&&k.c(),r=q(),B(a.$$.fragment)},l(_){M(e.$$.fragment,_),n=j(_),M(l.$$.fragment,_),o=j(_),M(c.$$.fragment,_),f=j(_),k&&k.l(_),r=j(_),M(a.$$.fragment,_)},m(_,v){G(e,_,v),L(_,n,v),G(l,_,v),L(_,o,v),G(c,_,v),L(_,f,v),k&&k.m(_,v),L(_,r,v),G(a,_,v),u=!0},p(_,v){const E={};v[1]&128&&(E.$$scope={dirty:v,ctx:_}),e.$set(E),_[3]?k?(k.p(_,v),v[0]&8&&w(k,1)):(k=Be(_),k.c(),w(k,1),k.m(r.parentNode,r)):k&&(ae(),S(k,1,1,()=>{k=null}),re());const s={};v[1]&128&&(s.$$scope={dirty:v,ctx:_}),!d&&v[0]&64&&(d=!0,s.checked=_[6],Q(()=>d=!1)),a.$set(s)},i(_){u||(w(e.$$.fragment,_),w(l.$$.fragment,_),w(c.$$.fragment,_),w(k),w(a.$$.fragment,_),u=!0)},o(_){S(e.$$.fragment,_),S(l.$$.fragment,_),S(c.$$.fragment,_),S(k),S(a.$$.fragment,_),u=!1},d(_){_&&(h(n),h(o),h(f),h(r)),V(e,_),V(l,_),V(c,_),k&&k.d(_),V(a,_)}}}function Dt(t){let e=Fe(t[34])+"",n;return{c(){n=te(e)},l(l){n=le(l,e)},m(l,o){L(l,n,o)},p(l,o){o[0]&4&&e!==(e=Fe(l[34])+"")&&de(n,e)},d(l){l&&h(n)}}}function Me(t){let e,n,l,o;function c(){return t[17](t[33])}function f(){return t[18](t[33])}return n=new Le({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),n.$on("click",c),n.$on("mouseenter",f),n.$on("mouseleave",t[19]),{c(){e=W("li"),B(n.$$.fragment),l=q()},l(r){e=Y(r,"LI",{});var a=Z(e);M(n.$$.fragment,a),l=j(a),a.forEach(h)},m(r,a){L(r,e,a),G(n,e,null),z(e,l),o=!0},p(r,a){t=r;const d={};a[0]&4|a[1]&128&&(d.$$scope={dirty:a,ctx:t}),n.$set(d)},i(r){o||(w(n.$$.fragment,r),o=!0)},o(r){S(n.$$.fragment,r),o=!1},d(r){r&&h(e),V(n)}}}function qt(t){let e=Oe(t[31])+"",n;return{c(){n=te(e)},l(l){n=le(l,e)},m(l,o){L(l,n,o)},p(l,o){o[0]&4&&e!==(e=Oe(l[31])+"")&&de(n,e)},d(l){l&&h(n)}}}function Ge(t){let e,n,l,o;function c(){return t[20](t[33])}function f(){return t[21](t[33])}return n=new Le({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),n.$on("click",c),n.$on("mouseenter",f),n.$on("mouseleave",t[22]),{c(){e=W("li"),B(n.$$.fragment),l=q()},l(r){e=Y(r,"LI",{});var a=Z(e);M(n.$$.fragment,a),l=j(a),a.forEach(h)},m(r,a){L(r,e,a),G(n,e,null),z(e,l),o=!0},p(r,a){t=r;const d={};a[0]&4|a[1]&128&&(d.$$scope={dirty:a,ctx:t}),n.$set(d)},i(r){o||(w(n.$$.fragment,r),o=!0)},o(r){S(n.$$.fragment,r),o=!1},d(r){r&&h(e),V(n)}}}function jt(t){let e,n,l,o=t[34].criticalIssue+"",c;return{c(){e=ve("svg"),n=ve("polygon"),l=ve("text"),c=te(o),this.h()},l(f){e=be(f,"svg",{width:!0,height:!0,xmlns:!0});var r=Z(e);n=be(r,"polygon",{points:!0,fill:!0,class:!0}),Z(n).forEach(h),l=be(r,"text",{x:!0,y:!0});var a=Z(l);c=le(a,o),a.forEach(h),r.forEach(h),this.h()},h(){U(n,"points","20,0 0,40 40,40"),U(n,"fill",et.critical.background),U(n,"class","svelte-ktyu3j"),U(l,"x","13"),U(l,"y","30"),x(l,"fill","white"),U(e,"width","40"),U(e,"height","40"),U(e,"xmlns","http://www.w3.org/2000/svg")},m(f,r){L(f,e,r),z(e,n),z(e,l),z(l,c)},p(f,r){r[0]&4&&o!==(o=f[34].criticalIssue+"")&&de(c,o)},d(f){f&&h(e)}}}function Ve(t){let e,n,l;function o(a){t[24](a,t[34])}function c(){return t[25](t[33])}function f(){return t[26](t[33])}let r={draggable:!0,$$slots:{default:[jt]},$$scope:{ctx:t}};return t[34].point!==void 0&&(r.lngLat=t[34].point),e=new ze({props:r}),J.push(()=>X(e,"lngLat",o)),e.$on("click",c),e.$on("dragend",f),{c(){B(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,d){G(e,a,d),l=!0},p(a,d){t=a;const u={};d[0]&4|d[1]&128&&(u.$$scope={dirty:d,ctx:t}),!n&&d[0]&4&&(n=!0,u.lngLat=t[34].point,Q(()=>n=!1)),e.$set(u)},i(a){l||(w(e.$$.fragment,a),l=!0)},o(a){S(e.$$.fragment,a),l=!1},d(a){V(e,a)}}}function Bt(t){let e,n=t[31].conflict+"",l;return{c(){e=W("span"),l=te(n),this.h()},l(o){e=Y(o,"SPAN",{class:!0});var c=Z(e);l=le(c,n),c.forEach(h),this.h()},h(){U(e,"class","dot svelte-ktyu3j"),x(e,"background",tt)},m(o,c){L(o,e,c),z(e,l)},p(o,c){c[0]&4&&n!==(n=o[31].conflict+"")&&de(l,n)},d(o){o&&h(e)}}}function Ae(t){let e,n,l;function o(a){t[27](a,t[31])}function c(){return t[28](t[33])}function f(){return t[29](t[33])}let r={draggable:!0,$$slots:{default:[Bt]},$$scope:{ctx:t}};return t[31].point!==void 0&&(r.lngLat=t[31].point),e=new ze({props:r}),J.push(()=>X(e,"lngLat",o)),e.$on("click",c),e.$on("dragend",f),{c(){B(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,d){G(e,a,d),l=!0},p(a,d){t=a;const u={};d[0]&4|d[1]&128&&(u.$$scope={dirty:d,ctx:t}),!n&&d[0]&4&&(n=!0,u.lngLat=t[31].point,Q(()=>n=!1)),e.$set(u)},i(a){l||(w(e.$$.fragment,a),l=!0)},o(a){S(e.$$.fragment,a),l=!1},d(a){V(e,a)}}}function Mt(t){let e,n;return e=new xe({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){B(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,o){G(e,l,o),n=!0},p:We,i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function Gt(t){let e,n,l,o,c,f,r,a,d,u;e=new at({}),e.$on("click",t[9]),l=new Qe({props:{gj:t[2].summary.networkMap,show:t[6]}});let k=se(t[2].criticalIssues),p=[];for(let s=0;s<k.length;s+=1)p[s]=Ve(De(t,k,s));const b=s=>S(p[s],1,1,()=>{p[s]=null});let _=se(t[2].policyConflictLog),v=[];for(let s=0;s<_.length;s+=1)v[s]=Ae(Ee(t,_,s));const E=s=>S(v[s],1,1,()=>{v[s]=null});return r=new Xe({props:{data:t[7],$$slots:{default:[Mt]},$$scope:{ctx:t}}}),d=new ft({props:{map:t[3]}}),{c(){B(e.$$.fragment),n=q(),B(l.$$.fragment),o=q();for(let s=0;s<p.length;s+=1)p[s].c();c=q();for(let s=0;s<v.length;s+=1)v[s].c();f=q(),B(r.$$.fragment),a=q(),B(d.$$.fragment)},l(s){M(e.$$.fragment,s),n=j(s),M(l.$$.fragment,s),o=j(s);for(let $=0;$<p.length;$+=1)p[$].l(s);c=j(s);for(let $=0;$<v.length;$+=1)v[$].l(s);f=j(s),M(r.$$.fragment,s),a=j(s),M(d.$$.fragment,s)},m(s,$){G(e,s,$),L(s,n,$),G(l,s,$),L(s,o,$);for(let N=0;N<p.length;N+=1)p[N]&&p[N].m(s,$);L(s,c,$);for(let N=0;N<v.length;N+=1)v[N]&&v[N].m(s,$);L(s,f,$),G(r,s,$),L(s,a,$),G(d,s,$),u=!0},p(s,$){const N={};if($[0]&4&&(N.gj=s[2].summary.networkMap),$[0]&64&&(N.show=s[6]),l.$set(N),$[0]&260){k=se(s[2].criticalIssues);let m;for(m=0;m<k.length;m+=1){const K=De(s,k,m);p[m]?(p[m].p(K,$),w(p[m],1)):(p[m]=Ve(K),p[m].c(),w(p[m],1),p[m].m(c.parentNode,c))}for(ae(),m=k.length;m<p.length;m+=1)b(m);re()}if($[0]&260){_=se(s[2].policyConflictLog);let m;for(m=0;m<_.length;m+=1){const K=Ee(s,_,m);v[m]?(v[m].p(K,$),w(v[m],1)):(v[m]=Ae(K),v[m].c(),w(v[m],1),v[m].m(f.parentNode,f))}for(ae(),m=_.length;m<v.length;m+=1)E(m);re()}const F={};$[0]&128&&(F.data=s[7]),$[1]&128&&(F.$$scope={dirty:$,ctx:s}),r.$set(F);const P={};$[0]&8&&(P.map=s[3]),d.$set(P)},i(s){if(!u){w(e.$$.fragment,s),w(l.$$.fragment,s);for(let $=0;$<k.length;$+=1)w(p[$]);for(let $=0;$<_.length;$+=1)w(v[$]);w(r.$$.fragment,s),w(d.$$.fragment,s),u=!0}},o(s){S(e.$$.fragment,s),S(l.$$.fragment,s),p=p.filter(Boolean);for(let $=0;$<p.length;$+=1)S(p[$]);v=v.filter(Boolean);for(let $=0;$<v.length;$+=1)S(v[$]);S(r.$$.fragment,s),S(d.$$.fragment,s),u=!1},d(s){s&&(h(n),h(o),h(c),h(f),h(a)),V(e,s),V(l,s),_e(p,s),_e(v,s),V(r,s),V(d,s)}}}function Vt(t){let e,n,l,o,c,f,r,a,d,u,k;const p=[Ct,kt],b=[];function _(s,$){return s[0]==null?0:1}l=_(t),o=b[l]=p[l](t);function v(s){t[30](s)}let E={$$slots:{default:[Gt]},$$scope:{ctx:t}};return t[3]!==void 0&&(E.map=t[3]),r=new Ye({props:E}),J.push(()=>X(r,"map",v)),{c(){e=W("div"),n=W("div"),o.c(),c=q(),f=W("div"),B(r.$$.fragment),this.h()},l(s){e=Y(s,"DIV",{style:!0});var $=Z(e);n=Y($,"DIV",{style:!0});var N=Z(n);o.l(N),N.forEach(h),c=j($),f=Y($,"DIV",{style:!0});var F=Z(f);M(r.$$.fragment,F),F.forEach(h),$.forEach(h),this.h()},h(){x(n,"width","30%"),x(n,"overflow-y","scroll"),x(n,"padding","10px"),x(n,"border","1px solid black"),x(f,"position","relative"),x(f,"width","70%"),x(e,"display","flex"),x(e,"height","80vh")},m(s,$){L(s,e,$),z(e,n),b[l].m(n,null),z(e,c),z(e,f),G(r,f,null),d=!0,u||(k=He(bt,"keydown",t[12]),u=!0)},p(s,$){let N=l;l=_(s),l===N?b[l].p(s,$):(ae(),S(b[N],1,1,()=>{b[N]=null}),re(),o=b[l],o?o.p(s,$):(o=b[l]=p[l](s),o.c()),w(o,1),o.m(n,null));const F={};$[0]&204|$[1]&128&&(F.$$scope={dirty:$,ctx:s}),!a&&$[0]&8&&(a=!0,F.map=s[3],Q(()=>a=!1)),r.$set(F)},i(s){d||(w(o),w(r.$$.fragment,s),d=!0)},o(s){S(o),S(r.$$.fragment,s),d=!1},d(s){s&&h(e),b[l].d(),V(r),u=!1,k()}}}function At(t,e,n){let l={type:"FeatureCollection",features:[]},o=e??n;if(o!=null){let c=o.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(ke(c[o.idx].point))}return l}function ke(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function Fe(t){return`${t.criticalIssue||"Unknown critical"}: ${t.locationName||"???"}`}function Oe(t){return`${t.conflict||"Unknown conflict"}: ${t.locationName||"???"}`}function Ft(t,e,n){let l,o;we(t,R,I=>n(2,o=I));let c,f="critical",r=null,a=null,d=!1,u=!0;function k(I){n(0,r=I),n(1,a=null)}function p(I){if(!d){if(r!=null){n(0,r=null);return}f=="critical"?(Se(R,o.criticalIssues=[...o.criticalIssues,{criticalIssue:"",stage:"",point:I.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),n(0,r={kind:"critical",idx:o.criticalIssues.length-1})):(Se(R,o.policyConflictLog=[...o.policyConflictLog,{conflict:"",stage:"",point:I.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),n(0,r={kind:"conflict",idx:o.policyConflictLog.length-1})),n(1,a=null)}}Ke(()=>{_(!1)});function b(){window.confirm("Delete this entry?")&&(r.kind=="critical"?(o.criticalIssues.splice(r.idx,1),R.set(o)):(o.policyConflictLog.splice(r.idx,1),R.set(o)),n(0,r=null))}function _(I){let i={type:"FeatureCollection",features:[...o.criticalIssues.map(C=>ke(C.point)),...o.policyConflictLog.map(C=>ke(C.point)),...o.summary.networkMap.features]};i.features.length>0&&c.fitBounds(Je(i),{padding:20,animate:I})}function v(I){r!=null&&I.key=="Escape"?(I.stopPropagation(),n(0,r=null)):r!=null&&I.key=="Delete"&&b()}const E=()=>_(!0);function s(I){d=I,n(5,d)}function $(I){u=I,n(6,u)}function N(I){f=I,n(4,f)}const F=I=>k({kind:"critical",idx:I}),P=I=>n(1,a={kind:"critical",idx:I}),m=()=>n(1,a=null),K=I=>k({kind:"conflict",idx:I}),O=I=>n(1,a={kind:"conflict",idx:I}),A=()=>n(1,a=null),oe=()=>n(0,r=null);function g(I,i){t.$$.not_equal(i.point,I)&&(i.point=I,R.set(o))}const y=I=>k({kind:"critical",idx:I}),T=I=>k({kind:"critical",idx:I});function H(I,i){t.$$.not_equal(i.point,I)&&(i.point=I,R.set(o))}const D=I=>k({kind:"conflict",idx:I}),ee=I=>k({kind:"conflict",idx:I});function fe(I){c=I,n(3,c)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(7,l=At(o,r,a))},[r,a,o,c,f,d,u,l,k,p,b,_,v,E,s,$,N,F,P,m,K,O,A,oe,g,y,T,H,D,ee,fe]}class el extends ye{constructor(e){super(),Ie(this,e,Ft,Vt,Ce,{},null,[-1,-1])}}export{el as component};
