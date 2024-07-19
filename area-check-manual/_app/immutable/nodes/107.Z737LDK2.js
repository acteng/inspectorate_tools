import{s as we,v as X,e as H,t as Z,a as q,c as K,b as W,d as J,f as h,g as A,o as O,x as z,i as S,h as R,w as Q,k as ye,z as ze,V as He,U as Se,F as me,m as ve,r as $e,j as ae,n as Ke,L as be,M as ke}from"../chunks/scheduler.ScMV3vmV.js";import{S as Ie,i as Le,e as x,c as B,a as V,m as G,t as L,b as N,d as F,f as re,g as fe}from"../chunks/index.DbrWxxqn.js";import{s as ge,d as de,M as We,f as Ye,b as Ze,C as Je,G as Xe,h as Qe}from"../chunks/index.BOWia5Ug.js";import{e as ie}from"../chunks/each.DgxkLI6f.js";import{c as xe,p as et}from"../chunks/colors.CYEpEtTL.js";import{p as Ge}from"../chunks/index.BTb-Fz_l.js";import{S as he}from"../chunks/Select.CV0kGAxR.js";/* empty css                                                               */import{T as Fe}from"../chunks/TextArea.DbkWbfhb.js";import{T as Re}from"../chunks/TextInput.C1q4cP7I.js";import{s as Y}from"../chunks/data.wwj2qhI_.js";import{c as tt,p as nt}from"../chunks/lists.BnA5ucEg.js";import{Y as Te}from"../chunks/YesNo.CJeiQUza.js";import{B as lt,G as it,S as ot,C as st,a as at,M as Oe}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.DlFFFast.js";import{C as rt}from"../chunks/CollapsibleCard.DOoboPEd.js";import{D as ft}from"../chunks/DefaultButton.DmNBc77J.js";import{R as ut}from"../chunks/Radio.CFR2d39u.js";import{S as ct}from"../chunks/SecondaryButton.BknZbHJL.js";import{W as pt}from"../chunks/WarningButton.Dxk6Eh5H.js";import{G as _t}from"../chunks/GeoreferenceLayer.C_sV5yS5.js";import{C as Ue}from"../chunks/ClickableCard.ofSK2zeq.js";import"../chunks/ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import"../chunks/paths.DG_MK7eu.js";import{S as mt}from"../chunks/SectionModal.BkZv95RR.js";import{c as $t}from"../chunks/content.DMGSJhf6.js";function gt(t){let e,l,n,s,f,r,c,p,$,a,k,u,d,M,b,D,o,_,g,E,y,v,T,j;function oe(i){t[2](i)}let m={label:"Critical Issue",emptyOption:!0,choices:tt};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(m.value=t[1].criticalIssues[t[0]].criticalIssue),a=new he({props:m}),X.push(()=>x(a,"value",oe));function C(i){t[3](i)}let U={label:"Stage",emptyOption:!0,choices:Ge(["Existing","Design"])};t[1].criticalIssues[t[0]].stage!==void 0&&(U.value=t[1].criticalIssues[t[0]].stage),d=new he({props:U}),X.push(()=>x(d,"value",C));function le(i){t[4](i)}let P={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(P.value=t[1].criticalIssues[t[0]].locationName),D=new Re({props:P}),X.push(()=>x(D,"value",le));function ee(i){t[5](i)}let se={label:"Resolved by Design"};t[1].criticalIssues[t[0]].resolved!==void 0&&(se.value=t[1].criticalIssues[t[0]].resolved),g=new Te({props:se}),X.push(()=>x(g,"value",ee));function ue(i){t[6](i)}let I={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(I.value=t[1].criticalIssues[t[0]].notes),v=new Fe({props:I}),X.push(()=>x(v,"value",ue)),{c(){e=H("div"),l=H("a"),n=Z("Google StreetView"),f=q(),r=H("a"),c=Z("Bing Streetside"),$=q(),B(a.$$.fragment),u=q(),B(d.$$.fragment),b=q(),B(D.$$.fragment),_=q(),B(g.$$.fragment),y=q(),B(v.$$.fragment),this.h()},l(i){e=K(i,"DIV",{style:!0});var w=W(e);l=K(w,"A",{href:!0,target:!0});var te=W(l);n=J(te,"Google StreetView"),te.forEach(h),f=A(w),r=K(w,"A",{href:!0,target:!0});var ne=W(r);c=J(ne,"Bing Streetside"),ne.forEach(h),w.forEach(h),$=A(i),V(a.$$.fragment,i),u=A(i),V(d.$$.fragment,i),b=A(i),V(D.$$.fragment,i),_=A(i),V(g.$$.fragment,i),y=A(i),V(v.$$.fragment,i),this.h()},h(){O(l,"href",s=ge(t[1].criticalIssues[t[0]].point)),O(l,"target","_blank"),O(r,"href",p=de(t[1].criticalIssues[t[0]].point)),O(r,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(i,w){S(i,e,w),R(e,l),R(l,n),R(e,f),R(e,r),R(r,c),S(i,$,w),G(a,i,w),S(i,u,w),G(d,i,w),S(i,b,w),G(D,i,w),S(i,_,w),G(g,i,w),S(i,y,w),G(v,i,w),j=!0},p(i,[w]){(!j||w&3&&s!==(s=ge(i[1].criticalIssues[i[0]].point)))&&O(l,"href",s),(!j||w&3&&p!==(p=de(i[1].criticalIssues[i[0]].point)))&&O(r,"href",p);const te={};!k&&w&3&&(k=!0,te.value=i[1].criticalIssues[i[0]].criticalIssue,Q(()=>k=!1)),a.$set(te);const ne={};!M&&w&3&&(M=!0,ne.value=i[1].criticalIssues[i[0]].stage,Q(()=>M=!1)),d.$set(ne);const ce={};!o&&w&3&&(o=!0,ce.value=i[1].criticalIssues[i[0]].locationName,Q(()=>o=!1)),D.$set(ce);const pe={};!E&&w&3&&(E=!0,pe.value=i[1].criticalIssues[i[0]].resolved,Q(()=>E=!1)),g.$set(pe);const _e={};!T&&w&3&&(T=!0,_e.value=i[1].criticalIssues[i[0]].notes,Q(()=>T=!1)),v.$set(_e)},i(i){j||(L(a.$$.fragment,i),L(d.$$.fragment,i),L(D.$$.fragment,i),L(g.$$.fragment,i),L(v.$$.fragment,i),j=!0)},o(i){N(a.$$.fragment,i),N(d.$$.fragment,i),N(D.$$.fragment,i),N(g.$$.fragment,i),N(v.$$.fragment,i),j=!1},d(i){i&&(h(e),h($),h(u),h(b),h(_),h(y)),F(a,i),F(d,i),F(D,i),F(g,i),F(v,i)}}}function dt(t,e,l){let n;ye(t,Y,a=>l(1,n=a));let{idx:s}=e;function f(a){t.$$.not_equal(n.criticalIssues[s].criticalIssue,a)&&(n.criticalIssues[s].criticalIssue=a,Y.set(n))}function r(a){t.$$.not_equal(n.criticalIssues[s].stage,a)&&(n.criticalIssues[s].stage=a,Y.set(n))}function c(a){t.$$.not_equal(n.criticalIssues[s].locationName,a)&&(n.criticalIssues[s].locationName=a,Y.set(n))}function p(a){t.$$.not_equal(n.criticalIssues[s].resolved,a)&&(n.criticalIssues[s].resolved=a,Y.set(n))}function $(a){t.$$.not_equal(n.criticalIssues[s].notes,a)&&(n.criticalIssues[s].notes=a,Y.set(n))}return t.$$set=a=>{"idx"in a&&l(0,s=a.idx)},[s,n,f,r,c,p,$]}class ht extends Ie{constructor(e){super(),Le(this,e,dt,gt,we,{idx:0})}}function vt(t){let e,l,n,s,f,r,c,p,$,a,k,u,d,M,b,D,o,_,g,E,y,v,T,j;function oe(i){t[2](i)}let m={label:"Policy Conflict",emptyOption:!0,choices:nt};t[1].policyConflictLog[t[0]].conflict!==void 0&&(m.value=t[1].policyConflictLog[t[0]].conflict),a=new he({props:m}),X.push(()=>x(a,"value",oe));function C(i){t[3](i)}let U={label:"Stage",emptyOption:!0,choices:Ge(["Existing","Design"])};t[1].policyConflictLog[t[0]].stage!==void 0&&(U.value=t[1].policyConflictLog[t[0]].stage),d=new he({props:U}),X.push(()=>x(d,"value",C));function le(i){t[4](i)}let P={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(P.value=t[1].policyConflictLog[t[0]].locationName),D=new Re({props:P}),X.push(()=>x(D,"value",le));function ee(i){t[5](i)}let se={label:"Resolved by Design"};t[1].policyConflictLog[t[0]].resolved!==void 0&&(se.value=t[1].policyConflictLog[t[0]].resolved),g=new Te({props:se}),X.push(()=>x(g,"value",ee));function ue(i){t[6](i)}let I={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(I.value=t[1].policyConflictLog[t[0]].notes),v=new Fe({props:I}),X.push(()=>x(v,"value",ue)),{c(){e=H("div"),l=H("a"),n=Z("Google StreetView"),f=q(),r=H("a"),c=Z("Bing Streetside"),$=q(),B(a.$$.fragment),u=q(),B(d.$$.fragment),b=q(),B(D.$$.fragment),_=q(),B(g.$$.fragment),y=q(),B(v.$$.fragment),this.h()},l(i){e=K(i,"DIV",{style:!0});var w=W(e);l=K(w,"A",{href:!0,target:!0});var te=W(l);n=J(te,"Google StreetView"),te.forEach(h),f=A(w),r=K(w,"A",{href:!0,target:!0});var ne=W(r);c=J(ne,"Bing Streetside"),ne.forEach(h),w.forEach(h),$=A(i),V(a.$$.fragment,i),u=A(i),V(d.$$.fragment,i),b=A(i),V(D.$$.fragment,i),_=A(i),V(g.$$.fragment,i),y=A(i),V(v.$$.fragment,i),this.h()},h(){O(l,"href",s=ge(t[1].policyConflictLog[t[0]].point)),O(l,"target","_blank"),O(r,"href",p=de(t[1].policyConflictLog[t[0]].point)),O(r,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(i,w){S(i,e,w),R(e,l),R(l,n),R(e,f),R(e,r),R(r,c),S(i,$,w),G(a,i,w),S(i,u,w),G(d,i,w),S(i,b,w),G(D,i,w),S(i,_,w),G(g,i,w),S(i,y,w),G(v,i,w),j=!0},p(i,[w]){(!j||w&3&&s!==(s=ge(i[1].policyConflictLog[i[0]].point)))&&O(l,"href",s),(!j||w&3&&p!==(p=de(i[1].policyConflictLog[i[0]].point)))&&O(r,"href",p);const te={};!k&&w&3&&(k=!0,te.value=i[1].policyConflictLog[i[0]].conflict,Q(()=>k=!1)),a.$set(te);const ne={};!M&&w&3&&(M=!0,ne.value=i[1].policyConflictLog[i[0]].stage,Q(()=>M=!1)),d.$set(ne);const ce={};!o&&w&3&&(o=!0,ce.value=i[1].policyConflictLog[i[0]].locationName,Q(()=>o=!1)),D.$set(ce);const pe={};!E&&w&3&&(E=!0,pe.value=i[1].policyConflictLog[i[0]].resolved,Q(()=>E=!1)),g.$set(pe);const _e={};!T&&w&3&&(T=!0,_e.value=i[1].policyConflictLog[i[0]].notes,Q(()=>T=!1)),v.$set(_e)},i(i){j||(L(a.$$.fragment,i),L(d.$$.fragment,i),L(D.$$.fragment,i),L(g.$$.fragment,i),L(v.$$.fragment,i),j=!0)},o(i){N(a.$$.fragment,i),N(d.$$.fragment,i),N(D.$$.fragment,i),N(g.$$.fragment,i),N(v.$$.fragment,i),j=!1},d(i){i&&(h(e),h($),h(u),h(b),h(_),h(y)),F(a,i),F(d,i),F(D,i),F(g,i),F(v,i)}}}function bt(t,e,l){let n;ye(t,Y,a=>l(1,n=a));let{idx:s}=e;function f(a){t.$$.not_equal(n.policyConflictLog[s].conflict,a)&&(n.policyConflictLog[s].conflict=a,Y.set(n))}function r(a){t.$$.not_equal(n.policyConflictLog[s].stage,a)&&(n.policyConflictLog[s].stage=a,Y.set(n))}function c(a){t.$$.not_equal(n.policyConflictLog[s].locationName,a)&&(n.policyConflictLog[s].locationName=a,Y.set(n))}function p(a){t.$$.not_equal(n.policyConflictLog[s].resolved,a)&&(n.policyConflictLog[s].resolved=a,Y.set(n))}function $(a){t.$$.not_equal(n.policyConflictLog[s].notes,a)&&(n.policyConflictLog[s].notes=a,Y.set(n))}return t.$$set=a=>{"idx"in a&&l(0,s=a.idx)},[s,n,f,r,c,p,$]}class kt extends Ie{constructor(e){super(),Le(this,e,bt,vt,we,{idx:0})}}const{window:Ct}=Ye;function Ne(t,e,l){const n=t.slice();return n[31]=e[l],n[32]=e,n[33]=l,n}function Ee(t,e,l){const n=t.slice();return n[34]=e[l],n[35]=e,n[33]=l,n}function De(t,e,l){const n=t.slice();return n[31]=e[l],n[33]=l,n}function je(t,e,l){const n=t.slice();return n[34]=e[l],n[33]=l,n}function wt(t){let e,l,n,s,f,r,c,p;e=new ft({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",t[23]),n=new pt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),n.$on("click",t[10]);const $=[Nt,St],a=[];function k(u,d){return u[0].kind=="critical"?0:1}return f=k(t),r=a[f]=$[f](t),{c(){B(e.$$.fragment),l=q(),B(n.$$.fragment),s=q(),r.c(),c=me()},l(u){V(e.$$.fragment,u),l=A(u),V(n.$$.fragment,u),s=A(u),r.l(u),c=me()},m(u,d){G(e,u,d),S(u,l,d),G(n,u,d),S(u,s,d),a[f].m(u,d),S(u,c,d),p=!0},p(u,d){const M={};d[1]&128&&(M.$$scope={dirty:d,ctx:u}),e.$set(M);const b={};d[1]&128&&(b.$$scope={dirty:d,ctx:u}),n.$set(b);let D=f;f=k(u),f===D?a[f].p(u,d):(fe(),N(a[D],1,1,()=>{a[D]=null}),re(),r=a[f],r?r.p(u,d):(r=a[f]=$[f](u),r.c()),L(r,1),r.m(c.parentNode,c))},i(u){p||(L(e.$$.fragment,u),L(n.$$.fragment,u),L(r),p=!0)},o(u){N(e.$$.fragment,u),N(n.$$.fragment,u),N(r),p=!1},d(u){u&&(h(l),h(s),h(c)),F(e,u),F(n,u),a[f].d(u)}}}function yt(t){let e,l,n,s,f,r,c="Click the map to add a problem, or select a problem to fill out data",p,$,a="Critical Issues",k,u,d,M="Policy Conflicts",b,D,o;e=new rt({props:{label:"Tools",$$slots:{default:[jt]},$$scope:{ctx:t}}});function _(m){t[16](m)}let g={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[4]!==void 0&&(g.value=t[4]),n=new ut({props:g}),X.push(()=>x(n,"value",_));let E=ie(t[2].criticalIssues),y=[];for(let m=0;m<E.length;m+=1)y[m]=Me(je(t,E,m));const v=m=>N(y[m],1,1,()=>{y[m]=null});let T=ie(t[2].policyConflictLog),j=[];for(let m=0;m<T.length;m+=1)j[m]=Pe(De(t,T,m));const oe=m=>N(j[m],1,1,()=>{j[m]=null});return{c(){B(e.$$.fragment),l=q(),B(n.$$.fragment),f=q(),r=H("p"),r.textContent=c,p=q(),$=H("h3"),$.textContent=a,k=q();for(let m=0;m<y.length;m+=1)y[m].c();u=q(),d=H("h3"),d.textContent=M,b=q();for(let m=0;m<j.length;m+=1)j[m].c();D=me()},l(m){V(e.$$.fragment,m),l=A(m),V(n.$$.fragment,m),f=A(m),r=K(m,"P",{"data-svelte-h":!0}),ve(r)!=="svelte-12ba5j2"&&(r.textContent=c),p=A(m),$=K(m,"H3",{"data-svelte-h":!0}),ve($)!=="svelte-1qhh5xr"&&($.textContent=a),k=A(m);for(let C=0;C<y.length;C+=1)y[C].l(m);u=A(m),d=K(m,"H3",{"data-svelte-h":!0}),ve(d)!=="svelte-eyxzjx"&&(d.textContent=M),b=A(m);for(let C=0;C<j.length;C+=1)j[C].l(m);D=me()},m(m,C){G(e,m,C),S(m,l,C),G(n,m,C),S(m,f,C),S(m,r,C),S(m,p,C),S(m,$,C),S(m,k,C);for(let U=0;U<y.length;U+=1)y[U]&&y[U].m(m,C);S(m,u,C),S(m,d,C),S(m,b,C);for(let U=0;U<j.length;U+=1)j[U]&&j[U].m(m,C);S(m,D,C),o=!0},p(m,C){const U={};C[0]&104|C[1]&128&&(U.$$scope={dirty:C,ctx:m}),e.$set(U);const le={};if(!s&&C[0]&16&&(s=!0,le.value=m[4],Q(()=>s=!1)),n.$set(le),C[0]&262){E=ie(m[2].criticalIssues);let P;for(P=0;P<E.length;P+=1){const ee=je(m,E,P);y[P]?(y[P].p(ee,C),L(y[P],1)):(y[P]=Me(ee),y[P].c(),L(y[P],1),y[P].m(u.parentNode,u))}for(fe(),P=E.length;P<y.length;P+=1)v(P);re()}if(C[0]&262){T=ie(m[2].policyConflictLog);let P;for(P=0;P<T.length;P+=1){const ee=De(m,T,P);j[P]?(j[P].p(ee,C),L(j[P],1)):(j[P]=Pe(ee),j[P].c(),L(j[P],1),j[P].m(D.parentNode,D))}for(fe(),P=T.length;P<j.length;P+=1)oe(P);re()}},i(m){if(!o){L(e.$$.fragment,m),L(n.$$.fragment,m);for(let C=0;C<E.length;C+=1)L(y[C]);for(let C=0;C<T.length;C+=1)L(j[C]);o=!0}},o(m){N(e.$$.fragment,m),N(n.$$.fragment,m),y=y.filter(Boolean);for(let C=0;C<y.length;C+=1)N(y[C]);j=j.filter(Boolean);for(let C=0;C<j.length;C+=1)N(j[C]);o=!1},d(m){m&&(h(l),h(f),h(r),h(p),h($),h(k),h(u),h(d),h(b),h(D)),F(e,m),F(n,m),$e(y,m),$e(j,m)}}}function It(t){let e;return{c(){e=Z("Save")},l(l){e=J(l,"Save")},m(l,n){S(l,e,n)},d(l){l&&h(e)}}}function Lt(t){let e;return{c(){e=Z("Delete")},l(l){e=J(l,"Delete")},m(l,n){S(l,e,n)},d(l){l&&h(e)}}}function St(t){let e,l;return e=new kt({props:{idx:t[0].idx}}),{c(){B(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){G(e,n,s),l=!0},p(n,s){const f={};s[0]&1&&(f.idx=n[0].idx),e.$set(f)},i(n){l||(L(e.$$.fragment,n),l=!0)},o(n){N(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function Nt(t){let e,l;return e=new ht({props:{idx:t[0].idx}}),{c(){B(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){G(e,n,s),l=!0},p(n,s){const f={};s[0]&1&&(f.idx=n[0].idx),e.$set(f)},i(n){l||(L(e.$$.fragment,n),l=!0)},o(n){N(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function Et(t){let e;return{c(){e=Z("Zoom to fit")},l(l){e=J(l,"Zoom to fit")},m(l,n){S(l,e,n)},d(l){l&&h(e)}}}function Dt(t){let e;return{c(){e=Z("Show scheme context")},l(l){e=J(l,"Show scheme context")},m(l,n){S(l,e,n)},d(l){l&&h(e)}}}function jt(t){let e,l,n,s,f,r,c,p,$,a,k,u;e=new ct({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),e.$on("click",t[13]),n=new lt({}),f=new it({});function d(o){t[14](o)}let M={map:t[3]};t[5]!==void 0&&(M.enabled=t[5]),c=new ot({props:M}),X.push(()=>x(c,"enabled",d));function b(o){t[15](o)}let D={$$slots:{default:[Dt]},$$scope:{ctx:t}};return t[6]!==void 0&&(D.checked=t[6]),a=new st({props:D}),X.push(()=>x(a,"checked",b)),{c(){B(e.$$.fragment),l=q(),B(n.$$.fragment),s=q(),B(f.$$.fragment),r=q(),B(c.$$.fragment),$=q(),B(a.$$.fragment)},l(o){V(e.$$.fragment,o),l=A(o),V(n.$$.fragment,o),s=A(o),V(f.$$.fragment,o),r=A(o),V(c.$$.fragment,o),$=A(o),V(a.$$.fragment,o)},m(o,_){G(e,o,_),S(o,l,_),G(n,o,_),S(o,s,_),G(f,o,_),S(o,r,_),G(c,o,_),S(o,$,_),G(a,o,_),u=!0},p(o,_){const g={};_[1]&128&&(g.$$scope={dirty:_,ctx:o}),e.$set(g);const E={};_[0]&8&&(E.map=o[3]),!p&&_[0]&32&&(p=!0,E.enabled=o[5],Q(()=>p=!1)),c.$set(E);const y={};_[1]&128&&(y.$$scope={dirty:_,ctx:o}),!k&&_[0]&64&&(k=!0,y.checked=o[6],Q(()=>k=!1)),a.$set(y)},i(o){u||(L(e.$$.fragment,o),L(n.$$.fragment,o),L(f.$$.fragment,o),L(c.$$.fragment,o),L(a.$$.fragment,o),u=!0)},o(o){N(e.$$.fragment,o),N(n.$$.fragment,o),N(f.$$.fragment,o),N(c.$$.fragment,o),N(a.$$.fragment,o),u=!1},d(o){o&&(h(l),h(s),h(r),h($)),F(e,o),F(n,o),F(f,o),F(c,o),F(a,o)}}}function Mt(t){let e,l,n,s=t[34].stage+"",f,r,c,p,$=t[34].resolved+"",a;return{c(){e=H("div"),l=H("span"),n=Z("Stage: "),f=Z(s),r=q(),c=H("span"),p=Z("Resolved: "),a=Z($),this.h()},l(k){e=K(k,"DIV",{style:!0});var u=W(e);l=K(u,"SPAN",{});var d=W(l);n=J(d,"Stage: "),f=J(d,s),d.forEach(h),r=A(u),c=K(u,"SPAN",{});var M=W(c);p=J(M,"Resolved: "),a=J(M,$),M.forEach(h),u.forEach(h),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(k,u){S(k,e,u),R(e,l),R(l,n),R(l,f),R(e,r),R(e,c),R(c,p),R(c,a)},p(k,u){u[0]&4&&s!==(s=k[34].stage+"")&&ae(f,s),u[0]&4&&$!==($=k[34].resolved+"")&&ae(a,$)},d(k){k&&h(e)}}}function Me(t){let e,l,n;function s(){return t[17](t[33])}function f(){return t[18](t[33])}return l=new Ue({props:{name:Be(t[34]),$$slots:{default:[Mt]},$$scope:{ctx:t}}}),l.$on("click",s),l.$on("mouseenter",f),l.$on("mouseleave",t[19]),{c(){e=H("li"),B(l.$$.fragment)},l(r){e=K(r,"LI",{});var c=W(e);V(l.$$.fragment,c),c.forEach(h)},m(r,c){S(r,e,c),G(l,e,null),n=!0},p(r,c){t=r;const p={};c[0]&4&&(p.name=Be(t[34])),c[0]&4|c[1]&128&&(p.$$scope={dirty:c,ctx:t}),l.$set(p)},i(r){n||(L(l.$$.fragment,r),n=!0)},o(r){N(l.$$.fragment,r),n=!1},d(r){r&&h(e),F(l)}}}function Pt(t){let e,l,n,s=t[31].stage+"",f,r,c,p,$=t[31].resolved+"",a,k;return{c(){e=H("div"),l=H("span"),n=Z("Stage: "),f=Z(s),r=q(),c=H("span"),p=Z("Resolved: "),a=Z($),k=q(),this.h()},l(u){e=K(u,"DIV",{style:!0});var d=W(e);l=K(d,"SPAN",{});var M=W(l);n=J(M,"Stage: "),f=J(M,s),M.forEach(h),r=A(d),c=K(d,"SPAN",{});var b=W(c);p=J(b,"Resolved: "),a=J(b,$),b.forEach(h),d.forEach(h),k=A(u),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(u,d){S(u,e,d),R(e,l),R(l,n),R(l,f),R(e,r),R(e,c),R(c,p),R(c,a),S(u,k,d)},p(u,d){d[0]&4&&s!==(s=u[31].stage+"")&&ae(f,s),d[0]&4&&$!==($=u[31].resolved+"")&&ae(a,$)},d(u){u&&(h(e),h(k))}}}function Pe(t){let e,l;function n(){return t[20](t[33])}function s(){return t[21](t[33])}return e=new Ue({props:{name:Ve(t[31]),$$slots:{default:[Pt]},$$scope:{ctx:t}}}),e.$on("click",n),e.$on("mouseenter",s),e.$on("mouseleave",t[22]),{c(){B(e.$$.fragment)},l(f){V(e.$$.fragment,f)},m(f,r){G(e,f,r),l=!0},p(f,r){t=f;const c={};r[0]&4&&(c.name=Ve(t[31])),r[0]&4|r[1]&128&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(f){l||(L(e.$$.fragment,f),l=!0)},o(f){N(e.$$.fragment,f),l=!1},d(f){F(e,f)}}}function qt(t){let e,l,n,s=t[34].criticalIssue+"",f;return{c(){e=be("svg"),l=be("polygon"),n=be("text"),f=Z(s),this.h()},l(r){e=ke(r,"svg",{width:!0,height:!0,xmlns:!0});var c=W(e);l=ke(c,"polygon",{points:!0,fill:!0,class:!0}),W(l).forEach(h),n=ke(c,"text",{x:!0,y:!0});var p=W(n);f=J(p,s),p.forEach(h),c.forEach(h),this.h()},h(){O(l,"points","20,0 0,40 40,40"),O(l,"fill",xe.critical.background),O(l,"class","svelte-ktyu3j"),O(n,"x","13"),O(n,"y","30"),z(n,"fill","white"),O(e,"width","40"),O(e,"height","40"),O(e,"xmlns","http://www.w3.org/2000/svg")},m(r,c){S(r,e,c),R(e,l),R(e,n),R(n,f)},p(r,c){c[0]&4&&s!==(s=r[34].criticalIssue+"")&&ae(f,s)},d(r){r&&h(e)}}}function qe(t){let e,l,n;function s(p){t[24](p,t[34])}function f(){return t[25](t[33])}function r(){return t[26](t[33])}let c={draggable:!0,$$slots:{default:[qt]},$$scope:{ctx:t}};return t[34].point!==void 0&&(c.lngLat=t[34].point),e=new Oe({props:c}),X.push(()=>x(e,"lngLat",s)),e.$on("click",f),e.$on("dragend",r),{c(){B(e.$$.fragment)},l(p){V(e.$$.fragment,p)},m(p,$){G(e,p,$),n=!0},p(p,$){t=p;const a={};$[0]&4|$[1]&128&&(a.$$scope={dirty:$,ctx:t}),!l&&$[0]&4&&(l=!0,a.lngLat=t[34].point,Q(()=>l=!1)),e.$set(a)},i(p){n||(L(e.$$.fragment,p),n=!0)},o(p){N(e.$$.fragment,p),n=!1},d(p){F(e,p)}}}function At(t){let e,l=t[31].conflict+"",n;return{c(){e=H("span"),n=Z(l),this.h()},l(s){e=K(s,"SPAN",{class:!0});var f=W(e);n=J(f,l),f.forEach(h),this.h()},h(){O(e,"class","dot svelte-ktyu3j"),z(e,"background",et)},m(s,f){S(s,e,f),R(e,n)},p(s,f){f[0]&4&&l!==(l=s[31].conflict+"")&&ae(n,l)},d(s){s&&h(e)}}}function Ae(t){let e,l,n;function s(p){t[27](p,t[31])}function f(){return t[28](t[33])}function r(){return t[29](t[33])}let c={draggable:!0,$$slots:{default:[At]},$$scope:{ctx:t}};return t[31].point!==void 0&&(c.lngLat=t[31].point),e=new Oe({props:c}),X.push(()=>x(e,"lngLat",s)),e.$on("click",f),e.$on("dragend",r),{c(){B(e.$$.fragment)},l(p){V(e.$$.fragment,p)},m(p,$){G(e,p,$),n=!0},p(p,$){t=p;const a={};$[0]&4|$[1]&128&&(a.$$scope={dirty:$,ctx:t}),!l&&$[0]&4&&(l=!0,a.lngLat=t[31].point,Q(()=>l=!1)),e.$set(a)},i(p){n||(L(e.$$.fragment,p),n=!0)},o(p){N(e.$$.fragment,p),n=!1},d(p){F(e,p)}}}function Bt(t){let e,l;return e=new Qe({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){B(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){G(e,n,s),l=!0},p:Ke,i(n){l||(L(e.$$.fragment,n),l=!0)},o(n){N(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function Vt(t){let e,l,n,s,f,r,c,p,$,a;e=new at({}),e.$on("click",t[9]),n=new Je({props:{gj:t[2].summary.networkMap,show:t[6]}});let k=ie(t[2].criticalIssues),u=[];for(let o=0;o<k.length;o+=1)u[o]=qe(Ee(t,k,o));const d=o=>N(u[o],1,1,()=>{u[o]=null});let M=ie(t[2].policyConflictLog),b=[];for(let o=0;o<M.length;o+=1)b[o]=Ae(Ne(t,M,o));const D=o=>N(b[o],1,1,()=>{b[o]=null});return c=new Xe({props:{data:t[7],$$slots:{default:[Bt]},$$scope:{ctx:t}}}),$=new _t({props:{map:t[3]}}),{c(){B(e.$$.fragment),l=q(),B(n.$$.fragment),s=q();for(let o=0;o<u.length;o+=1)u[o].c();f=q();for(let o=0;o<b.length;o+=1)b[o].c();r=q(),B(c.$$.fragment),p=q(),B($.$$.fragment)},l(o){V(e.$$.fragment,o),l=A(o),V(n.$$.fragment,o),s=A(o);for(let _=0;_<u.length;_+=1)u[_].l(o);f=A(o);for(let _=0;_<b.length;_+=1)b[_].l(o);r=A(o),V(c.$$.fragment,o),p=A(o),V($.$$.fragment,o)},m(o,_){G(e,o,_),S(o,l,_),G(n,o,_),S(o,s,_);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(o,_);S(o,f,_);for(let g=0;g<b.length;g+=1)b[g]&&b[g].m(o,_);S(o,r,_),G(c,o,_),S(o,p,_),G($,o,_),a=!0},p(o,_){const g={};if(_[0]&4&&(g.gj=o[2].summary.networkMap),_[0]&64&&(g.show=o[6]),n.$set(g),_[0]&260){k=ie(o[2].criticalIssues);let v;for(v=0;v<k.length;v+=1){const T=Ee(o,k,v);u[v]?(u[v].p(T,_),L(u[v],1)):(u[v]=qe(T),u[v].c(),L(u[v],1),u[v].m(f.parentNode,f))}for(fe(),v=k.length;v<u.length;v+=1)d(v);re()}if(_[0]&260){M=ie(o[2].policyConflictLog);let v;for(v=0;v<M.length;v+=1){const T=Ne(o,M,v);b[v]?(b[v].p(T,_),L(b[v],1)):(b[v]=Ae(T),b[v].c(),L(b[v],1),b[v].m(r.parentNode,r))}for(fe(),v=M.length;v<b.length;v+=1)D(v);re()}const E={};_[0]&128&&(E.data=o[7]),_[1]&128&&(E.$$scope={dirty:_,ctx:o}),c.$set(E);const y={};_[0]&8&&(y.map=o[3]),$.$set(y)},i(o){if(!a){L(e.$$.fragment,o),L(n.$$.fragment,o);for(let _=0;_<k.length;_+=1)L(u[_]);for(let _=0;_<M.length;_+=1)L(b[_]);L(c.$$.fragment,o),L($.$$.fragment,o),a=!0}},o(o){N(e.$$.fragment,o),N(n.$$.fragment,o),u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)N(u[_]);b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)N(b[_]);N(c.$$.fragment,o),N($.$$.fragment,o),a=!1},d(o){o&&(h(l),h(s),h(f),h(r),h(p)),F(e,o),F(n,o),$e(u,o),$e(b,o),F(c,o),F($,o)}}}function Gt(t){let e,l,n,s,f,r,c,p,$,a,k,u,d;e=new mt({props:{title:"Problem Mapping Manual",section:$t[5],link:"/route_check/manual"}});const M=[yt,wt],b=[];function D(g,E){return g[0]==null?0:1}f=D(t),r=b[f]=M[f](t);function o(g){t[30](g)}let _={$$slots:{default:[Vt]},$$scope:{ctx:t}};return t[3]!==void 0&&(_.map=t[3]),$=new We({props:_}),X.push(()=>x($,"map",o)),{c(){B(e.$$.fragment),l=q(),n=H("div"),s=H("div"),r.c(),c=q(),p=H("div"),B($.$$.fragment),this.h()},l(g){V(e.$$.fragment,g),l=A(g),n=K(g,"DIV",{style:!0});var E=W(n);s=K(E,"DIV",{style:!0});var y=W(s);r.l(y),y.forEach(h),c=A(E),p=K(E,"DIV",{style:!0});var v=W(p);V($.$$.fragment,v),v.forEach(h),E.forEach(h),this.h()},h(){z(s,"width","30%"),z(s,"overflow-y","scroll"),z(s,"padding","10px"),z(s,"border","1px solid black"),z(p,"position","relative"),z(p,"width","70%"),z(n,"display","flex"),z(n,"height","80vh")},m(g,E){G(e,g,E),S(g,l,E),S(g,n,E),R(n,s),b[f].m(s,null),R(n,c),R(n,p),G($,p,null),k=!0,u||(d=ze(Ct,"keydown",t[12]),u=!0)},p(g,E){let y=f;f=D(g),f===y?b[f].p(g,E):(fe(),N(b[y],1,1,()=>{b[y]=null}),re(),r=b[f],r?r.p(g,E):(r=b[f]=M[f](g),r.c()),L(r,1),r.m(s,null));const v={};E[0]&204|E[1]&128&&(v.$$scope={dirty:E,ctx:g}),!a&&E[0]&8&&(a=!0,v.map=g[3],Q(()=>a=!1)),$.$set(v)},i(g){k||(L(e.$$.fragment,g),L(r),L($.$$.fragment,g),k=!0)},o(g){N(e.$$.fragment,g),N(r),N($.$$.fragment,g),k=!1},d(g){g&&(h(l),h(n)),F(e,g),b[f].d(),F($),u=!1,d()}}}function Ft(t,e,l){let n={type:"FeatureCollection",features:[]},s=e??l;if(s!=null){let f=s.kind=="critical"?t.criticalIssues:t.policyConflictLog;n.features.push(Ce(f[s.idx].point))}return n}function Ce(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function Be(t){return`${t.criticalIssue||"Unknown critical"}: ${t.locationName||"???"}`}function Ve(t){return`${t.conflict||"Unknown conflict"}: ${t.locationName||"???"}`}function Rt(t,e,l){let n,s;ye(t,Y,I=>l(2,s=I));let f,r="critical",c=null,p=null,$=!1,a=!0;function k(I){l(0,c=I),l(1,p=null)}function u(I){if(!$){if(c!=null){l(0,c=null);return}r=="critical"?(Se(Y,s.criticalIssues=[...s.criticalIssues,{criticalIssue:"",stage:"",point:I.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),k({kind:"critical",idx:s.criticalIssues.length-1})):(Se(Y,s.policyConflictLog=[...s.policyConflictLog,{conflict:"",stage:"",point:I.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),k({kind:"conflict",idx:s.policyConflictLog.length-1}))}}He(()=>{M(!1)});function d(){window.confirm("Delete this entry?")&&(c.kind=="critical"?(s.criticalIssues.splice(c.idx,1),Y.set(s)):(s.policyConflictLog.splice(c.idx,1),Y.set(s)),l(0,c=null))}function M(I){let i={type:"FeatureCollection",features:[...s.criticalIssues.map(w=>Ce(w.point)),...s.policyConflictLog.map(w=>Ce(w.point)),...s.summary.networkMap.features]};i.features.length>0&&f.fitBounds(Ze(i),{padding:20,animate:I})}function b(I){if(c!=null&&I.key=="Escape")I.stopPropagation(),l(0,c=null);else if(c!=null&&I.key=="Delete"){let i=I.target.tagName;if(i=="INPUT"||i=="TEXTAREA")return;I.stopPropagation(),d()}}const D=()=>M(!0);function o(I){$=I,l(5,$)}function _(I){a=I,l(6,a)}function g(I){r=I,l(4,r)}const E=I=>k({kind:"critical",idx:I}),y=I=>l(1,p={kind:"critical",idx:I}),v=()=>l(1,p=null),T=I=>k({kind:"conflict",idx:I}),j=I=>l(1,p={kind:"conflict",idx:I}),oe=()=>l(1,p=null),m=()=>l(0,c=null);function C(I,i){t.$$.not_equal(i.point,I)&&(i.point=I,Y.set(s))}const U=I=>k({kind:"critical",idx:I}),le=I=>k({kind:"critical",idx:I});function P(I,i){t.$$.not_equal(i.point,I)&&(i.point=I,Y.set(s))}const ee=I=>k({kind:"conflict",idx:I}),se=I=>k({kind:"conflict",idx:I});function ue(I){f=I,l(3,f)}return t.$$.update=()=>{t.$$.dirty[0]&7&&l(7,n=Ft(s,c,p))},[c,p,s,f,r,$,a,n,k,u,d,M,b,D,o,_,g,E,y,v,T,j,oe,m,C,U,le,P,ee,se,ue]}class _n extends Ie{constructor(e){super(),Le(this,e,Rt,Gt,we,{},null,[-1,-1])}}export{_n as component};
