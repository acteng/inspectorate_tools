import{s as we,r as X,e as H,t as Z,a as A,c as K,b as W,d as J,f as d,g as B,o as O,v as z,i as L,h as G,w as Q,k as ye,z as ze,U as He,S as Se,E as $e,m as ve,G as me,j as re,n as Ke,K as be,L as ke}from"../chunks/scheduler.DNnUYlgZ.js";import{S as Ie,i as Le,e as x,c as M,a as V,m as R,t as I,b as N,d as F,f as ae,g as fe}from"../chunks/index.tVBxdTp3.js";import{s as ge,d as de,M as We,f as Ye,b as Ze,C as Je,G as Xe,h as Qe}from"../chunks/index.CGKOjZ2U.js";import{e as ie}from"../chunks/each.BkSaxPTE.js";import{c as xe,p as et}from"../chunks/colors.CYEpEtTL.js";import{p as Ve}from"../chunks/index.BdXgzUHz.js";import{S as he}from"../chunks/Select.J5KI9BoG.js";/* empty css                                                               */import{T as Re}from"../chunks/TextArea.NwvsZ3J4.js";import{T as Fe}from"../chunks/TextInput.BIr_xOOQ.js";import{s as Y}from"../chunks/data.DEUHW_BE.js";import{c as tt,p as lt}from"../chunks/lists.djxH55N_.js";import{Y as Te}from"../chunks/YesNo.BbT1PHbQ.js";import{B as nt,G as it,S as ot,C as st,a as rt,M as Oe}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.D4aUOt7-.js";import{C as at}from"../chunks/CollapsibleCard.JZZ-_N1r.js";import{D as ft}from"../chunks/DefaultButton.B_sEEUsJ.js";import{R as ut}from"../chunks/Radio.DQ8GJLiV.js";import{S as ct}from"../chunks/SecondaryButton.CsCq7jjb.js";import{W as pt}from"../chunks/WarningButton.BcgE3MAp.js";import{G as _t}from"../chunks/GeoreferenceLayer.C-dFJx0e.js";import{C as Ue}from"../chunks/ClickableCard.C-b1L8ER.js";/* empty css                                                    */import"../chunks/paths.CJMueyiw.js";function $t(t){let e,n,l,s,c,a,f,_,m,r,v,u,g,j,C,E,i,p,y,P,S,h,T,D;function oe(o){t[2](o)}let $={label:"Critical Issue",emptyOption:!0,choices:tt};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&($.value=t[1].criticalIssues[t[0]].criticalIssue),r=new he({props:$}),X.push(()=>x(r,"value",oe));function b(o){t[3](o)}let U={label:"Stage",emptyOption:!0,choices:Ve(["Existing","Design"])};t[1].criticalIssues[t[0]].stage!==void 0&&(U.value=t[1].criticalIssues[t[0]].stage),g=new he({props:U}),X.push(()=>x(g,"value",b));function ne(o){t[4](o)}let q={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(q.value=t[1].criticalIssues[t[0]].locationName),E=new Fe({props:q}),X.push(()=>x(E,"value",ne));function ee(o){t[5](o)}let se={label:"Resolved by Design"};t[1].criticalIssues[t[0]].resolved!==void 0&&(se.value=t[1].criticalIssues[t[0]].resolved),y=new Te({props:se}),X.push(()=>x(y,"value",ee));function ue(o){t[6](o)}let w={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(w.value=t[1].criticalIssues[t[0]].notes),h=new Re({props:w}),X.push(()=>x(h,"value",ue)),{c(){e=H("div"),n=H("a"),l=Z("Google StreetView"),c=A(),a=H("a"),f=Z("Bing Streetside"),m=A(),M(r.$$.fragment),u=A(),M(g.$$.fragment),C=A(),M(E.$$.fragment),p=A(),M(y.$$.fragment),S=A(),M(h.$$.fragment),this.h()},l(o){e=K(o,"DIV",{style:!0});var k=W(e);n=K(k,"A",{href:!0,target:!0});var te=W(n);l=J(te,"Google StreetView"),te.forEach(d),c=B(k),a=K(k,"A",{href:!0,target:!0});var le=W(a);f=J(le,"Bing Streetside"),le.forEach(d),k.forEach(d),m=B(o),V(r.$$.fragment,o),u=B(o),V(g.$$.fragment,o),C=B(o),V(E.$$.fragment,o),p=B(o),V(y.$$.fragment,o),S=B(o),V(h.$$.fragment,o),this.h()},h(){O(n,"href",s=ge(t[1].criticalIssues[t[0]].point)),O(n,"target","_blank"),O(a,"href",_=de(t[1].criticalIssues[t[0]].point)),O(a,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(o,k){L(o,e,k),G(e,n),G(n,l),G(e,c),G(e,a),G(a,f),L(o,m,k),R(r,o,k),L(o,u,k),R(g,o,k),L(o,C,k),R(E,o,k),L(o,p,k),R(y,o,k),L(o,S,k),R(h,o,k),D=!0},p(o,[k]){(!D||k&3&&s!==(s=ge(o[1].criticalIssues[o[0]].point)))&&O(n,"href",s),(!D||k&3&&_!==(_=de(o[1].criticalIssues[o[0]].point)))&&O(a,"href",_);const te={};!v&&k&3&&(v=!0,te.value=o[1].criticalIssues[o[0]].criticalIssue,Q(()=>v=!1)),r.$set(te);const le={};!j&&k&3&&(j=!0,le.value=o[1].criticalIssues[o[0]].stage,Q(()=>j=!1)),g.$set(le);const ce={};!i&&k&3&&(i=!0,ce.value=o[1].criticalIssues[o[0]].locationName,Q(()=>i=!1)),E.$set(ce);const pe={};!P&&k&3&&(P=!0,pe.value=o[1].criticalIssues[o[0]].resolved,Q(()=>P=!1)),y.$set(pe);const _e={};!T&&k&3&&(T=!0,_e.value=o[1].criticalIssues[o[0]].notes,Q(()=>T=!1)),h.$set(_e)},i(o){D||(I(r.$$.fragment,o),I(g.$$.fragment,o),I(E.$$.fragment,o),I(y.$$.fragment,o),I(h.$$.fragment,o),D=!0)},o(o){N(r.$$.fragment,o),N(g.$$.fragment,o),N(E.$$.fragment,o),N(y.$$.fragment,o),N(h.$$.fragment,o),D=!1},d(o){o&&(d(e),d(m),d(u),d(C),d(p),d(S)),F(r,o),F(g,o),F(E,o),F(y,o),F(h,o)}}}function mt(t,e,n){let l;ye(t,Y,r=>n(1,l=r));let{idx:s}=e;function c(r){t.$$.not_equal(l.criticalIssues[s].criticalIssue,r)&&(l.criticalIssues[s].criticalIssue=r,Y.set(l))}function a(r){t.$$.not_equal(l.criticalIssues[s].stage,r)&&(l.criticalIssues[s].stage=r,Y.set(l))}function f(r){t.$$.not_equal(l.criticalIssues[s].locationName,r)&&(l.criticalIssues[s].locationName=r,Y.set(l))}function _(r){t.$$.not_equal(l.criticalIssues[s].resolved,r)&&(l.criticalIssues[s].resolved=r,Y.set(l))}function m(r){t.$$.not_equal(l.criticalIssues[s].notes,r)&&(l.criticalIssues[s].notes=r,Y.set(l))}return t.$$set=r=>{"idx"in r&&n(0,s=r.idx)},[s,l,c,a,f,_,m]}class gt extends Ie{constructor(e){super(),Le(this,e,mt,$t,we,{idx:0})}}function dt(t){let e,n,l,s,c,a,f,_,m,r,v,u,g,j,C,E,i,p,y,P,S,h,T,D;function oe(o){t[2](o)}let $={label:"Policy Conflict",emptyOption:!0,choices:lt};t[1].policyConflictLog[t[0]].conflict!==void 0&&($.value=t[1].policyConflictLog[t[0]].conflict),r=new he({props:$}),X.push(()=>x(r,"value",oe));function b(o){t[3](o)}let U={label:"Stage",emptyOption:!0,choices:Ve(["Existing","Design"])};t[1].policyConflictLog[t[0]].stage!==void 0&&(U.value=t[1].policyConflictLog[t[0]].stage),g=new he({props:U}),X.push(()=>x(g,"value",b));function ne(o){t[4](o)}let q={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(q.value=t[1].policyConflictLog[t[0]].locationName),E=new Fe({props:q}),X.push(()=>x(E,"value",ne));function ee(o){t[5](o)}let se={label:"Resolved by Design"};t[1].policyConflictLog[t[0]].resolved!==void 0&&(se.value=t[1].policyConflictLog[t[0]].resolved),y=new Te({props:se}),X.push(()=>x(y,"value",ee));function ue(o){t[6](o)}let w={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(w.value=t[1].policyConflictLog[t[0]].notes),h=new Re({props:w}),X.push(()=>x(h,"value",ue)),{c(){e=H("div"),n=H("a"),l=Z("Google StreetView"),c=A(),a=H("a"),f=Z("Bing Streetside"),m=A(),M(r.$$.fragment),u=A(),M(g.$$.fragment),C=A(),M(E.$$.fragment),p=A(),M(y.$$.fragment),S=A(),M(h.$$.fragment),this.h()},l(o){e=K(o,"DIV",{style:!0});var k=W(e);n=K(k,"A",{href:!0,target:!0});var te=W(n);l=J(te,"Google StreetView"),te.forEach(d),c=B(k),a=K(k,"A",{href:!0,target:!0});var le=W(a);f=J(le,"Bing Streetside"),le.forEach(d),k.forEach(d),m=B(o),V(r.$$.fragment,o),u=B(o),V(g.$$.fragment,o),C=B(o),V(E.$$.fragment,o),p=B(o),V(y.$$.fragment,o),S=B(o),V(h.$$.fragment,o),this.h()},h(){O(n,"href",s=ge(t[1].policyConflictLog[t[0]].point)),O(n,"target","_blank"),O(a,"href",_=de(t[1].policyConflictLog[t[0]].point)),O(a,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(o,k){L(o,e,k),G(e,n),G(n,l),G(e,c),G(e,a),G(a,f),L(o,m,k),R(r,o,k),L(o,u,k),R(g,o,k),L(o,C,k),R(E,o,k),L(o,p,k),R(y,o,k),L(o,S,k),R(h,o,k),D=!0},p(o,[k]){(!D||k&3&&s!==(s=ge(o[1].policyConflictLog[o[0]].point)))&&O(n,"href",s),(!D||k&3&&_!==(_=de(o[1].policyConflictLog[o[0]].point)))&&O(a,"href",_);const te={};!v&&k&3&&(v=!0,te.value=o[1].policyConflictLog[o[0]].conflict,Q(()=>v=!1)),r.$set(te);const le={};!j&&k&3&&(j=!0,le.value=o[1].policyConflictLog[o[0]].stage,Q(()=>j=!1)),g.$set(le);const ce={};!i&&k&3&&(i=!0,ce.value=o[1].policyConflictLog[o[0]].locationName,Q(()=>i=!1)),E.$set(ce);const pe={};!P&&k&3&&(P=!0,pe.value=o[1].policyConflictLog[o[0]].resolved,Q(()=>P=!1)),y.$set(pe);const _e={};!T&&k&3&&(T=!0,_e.value=o[1].policyConflictLog[o[0]].notes,Q(()=>T=!1)),h.$set(_e)},i(o){D||(I(r.$$.fragment,o),I(g.$$.fragment,o),I(E.$$.fragment,o),I(y.$$.fragment,o),I(h.$$.fragment,o),D=!0)},o(o){N(r.$$.fragment,o),N(g.$$.fragment,o),N(E.$$.fragment,o),N(y.$$.fragment,o),N(h.$$.fragment,o),D=!1},d(o){o&&(d(e),d(m),d(u),d(C),d(p),d(S)),F(r,o),F(g,o),F(E,o),F(y,o),F(h,o)}}}function ht(t,e,n){let l;ye(t,Y,r=>n(1,l=r));let{idx:s}=e;function c(r){t.$$.not_equal(l.policyConflictLog[s].conflict,r)&&(l.policyConflictLog[s].conflict=r,Y.set(l))}function a(r){t.$$.not_equal(l.policyConflictLog[s].stage,r)&&(l.policyConflictLog[s].stage=r,Y.set(l))}function f(r){t.$$.not_equal(l.policyConflictLog[s].locationName,r)&&(l.policyConflictLog[s].locationName=r,Y.set(l))}function _(r){t.$$.not_equal(l.policyConflictLog[s].resolved,r)&&(l.policyConflictLog[s].resolved=r,Y.set(l))}function m(r){t.$$.not_equal(l.policyConflictLog[s].notes,r)&&(l.policyConflictLog[s].notes=r,Y.set(l))}return t.$$set=r=>{"idx"in r&&n(0,s=r.idx)},[s,l,c,a,f,_,m]}class vt extends Ie{constructor(e){super(),Le(this,e,ht,dt,we,{idx:0})}}const{window:bt}=Ye;function Ne(t,e,n){const l=t.slice();return l[31]=e[n],l[32]=e,l[33]=n,l}function Ee(t,e,n){const l=t.slice();return l[34]=e[n],l[35]=e,l[33]=n,l}function De(t,e,n){const l=t.slice();return l[31]=e[n],l[33]=n,l}function je(t,e,n){const l=t.slice();return l[34]=e[n],l[33]=n,l}function kt(t){let e,n,l,s,c,a,f,_;e=new ft({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),e.$on("click",t[23]),l=new pt({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),l.$on("click",t[10]);const m=[Lt,It],r=[];function v(u,g){return u[0].kind=="critical"?0:1}return c=v(t),a=r[c]=m[c](t),{c(){M(e.$$.fragment),n=A(),M(l.$$.fragment),s=A(),a.c(),f=$e()},l(u){V(e.$$.fragment,u),n=B(u),V(l.$$.fragment,u),s=B(u),a.l(u),f=$e()},m(u,g){R(e,u,g),L(u,n,g),R(l,u,g),L(u,s,g),r[c].m(u,g),L(u,f,g),_=!0},p(u,g){const j={};g[1]&128&&(j.$$scope={dirty:g,ctx:u}),e.$set(j);const C={};g[1]&128&&(C.$$scope={dirty:g,ctx:u}),l.$set(C);let E=c;c=v(u),c===E?r[c].p(u,g):(fe(),N(r[E],1,1,()=>{r[E]=null}),ae(),a=r[c],a?a.p(u,g):(a=r[c]=m[c](u),a.c()),I(a,1),a.m(f.parentNode,f))},i(u){_||(I(e.$$.fragment,u),I(l.$$.fragment,u),I(a),_=!0)},o(u){N(e.$$.fragment,u),N(l.$$.fragment,u),N(a),_=!1},d(u){u&&(d(n),d(s),d(f)),F(e,u),F(l,u),r[c].d(u)}}}function Ct(t){let e,n,l,s,c,a,f="Click the map to add a problem, or select a problem to fill out data",_,m,r="Critical Issues",v,u,g,j="Policy Conflicts",C,E,i;e=new at({props:{label:"Tools",$$slots:{default:[Et]},$$scope:{ctx:t}}});function p($){t[16]($)}let y={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[4]!==void 0&&(y.value=t[4]),l=new ut({props:y}),X.push(()=>x(l,"value",p));let P=ie(t[2].criticalIssues),S=[];for(let $=0;$<P.length;$+=1)S[$]=qe(je(t,P,$));const h=$=>N(S[$],1,1,()=>{S[$]=null});let T=ie(t[2].policyConflictLog),D=[];for(let $=0;$<T.length;$+=1)D[$]=Ae(De(t,T,$));const oe=$=>N(D[$],1,1,()=>{D[$]=null});return{c(){M(e.$$.fragment),n=A(),M(l.$$.fragment),c=A(),a=H("p"),a.textContent=f,_=A(),m=H("h3"),m.textContent=r,v=A();for(let $=0;$<S.length;$+=1)S[$].c();u=A(),g=H("h3"),g.textContent=j,C=A();for(let $=0;$<D.length;$+=1)D[$].c();E=$e()},l($){V(e.$$.fragment,$),n=B($),V(l.$$.fragment,$),c=B($),a=K($,"P",{"data-svelte-h":!0}),ve(a)!=="svelte-12ba5j2"&&(a.textContent=f),_=B($),m=K($,"H3",{"data-svelte-h":!0}),ve(m)!=="svelte-1qhh5xr"&&(m.textContent=r),v=B($);for(let b=0;b<S.length;b+=1)S[b].l($);u=B($),g=K($,"H3",{"data-svelte-h":!0}),ve(g)!=="svelte-eyxzjx"&&(g.textContent=j),C=B($);for(let b=0;b<D.length;b+=1)D[b].l($);E=$e()},m($,b){R(e,$,b),L($,n,b),R(l,$,b),L($,c,b),L($,a,b),L($,_,b),L($,m,b),L($,v,b);for(let U=0;U<S.length;U+=1)S[U]&&S[U].m($,b);L($,u,b),L($,g,b),L($,C,b);for(let U=0;U<D.length;U+=1)D[U]&&D[U].m($,b);L($,E,b),i=!0},p($,b){const U={};b[0]&104|b[1]&128&&(U.$$scope={dirty:b,ctx:$}),e.$set(U);const ne={};if(!s&&b[0]&16&&(s=!0,ne.value=$[4],Q(()=>s=!1)),l.$set(ne),b[0]&262){P=ie($[2].criticalIssues);let q;for(q=0;q<P.length;q+=1){const ee=je($,P,q);S[q]?(S[q].p(ee,b),I(S[q],1)):(S[q]=qe(ee),S[q].c(),I(S[q],1),S[q].m(u.parentNode,u))}for(fe(),q=P.length;q<S.length;q+=1)h(q);ae()}if(b[0]&262){T=ie($[2].policyConflictLog);let q;for(q=0;q<T.length;q+=1){const ee=De($,T,q);D[q]?(D[q].p(ee,b),I(D[q],1)):(D[q]=Ae(ee),D[q].c(),I(D[q],1),D[q].m(E.parentNode,E))}for(fe(),q=T.length;q<D.length;q+=1)oe(q);ae()}},i($){if(!i){I(e.$$.fragment,$),I(l.$$.fragment,$);for(let b=0;b<P.length;b+=1)I(S[b]);for(let b=0;b<T.length;b+=1)I(D[b]);i=!0}},o($){N(e.$$.fragment,$),N(l.$$.fragment,$),S=S.filter(Boolean);for(let b=0;b<S.length;b+=1)N(S[b]);D=D.filter(Boolean);for(let b=0;b<D.length;b+=1)N(D[b]);i=!1},d($){$&&(d(n),d(c),d(a),d(_),d(m),d(v),d(u),d(g),d(C),d(E)),F(e,$),F(l,$),me(S,$),me(D,$)}}}function wt(t){let e;return{c(){e=Z("Save")},l(n){e=J(n,"Save")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function yt(t){let e;return{c(){e=Z("Delete")},l(n){e=J(n,"Delete")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function It(t){let e,n;return e=new vt({props:{idx:t[0].idx}}),{c(){M(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,s){R(e,l,s),n=!0},p(l,s){const c={};s[0]&1&&(c.idx=l[0].idx),e.$set(c)},i(l){n||(I(e.$$.fragment,l),n=!0)},o(l){N(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Lt(t){let e,n;return e=new gt({props:{idx:t[0].idx}}),{c(){M(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,s){R(e,l,s),n=!0},p(l,s){const c={};s[0]&1&&(c.idx=l[0].idx),e.$set(c)},i(l){n||(I(e.$$.fragment,l),n=!0)},o(l){N(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function St(t){let e;return{c(){e=Z("Zoom to fit")},l(n){e=J(n,"Zoom to fit")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function Nt(t){let e;return{c(){e=Z("Show scheme context")},l(n){e=J(n,"Show scheme context")},m(n,l){L(n,e,l)},d(n){n&&d(e)}}}function Et(t){let e,n,l,s,c,a,f,_,m,r,v,u;e=new ct({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("click",t[13]),l=new nt({}),c=new it({});function g(i){t[14](i)}let j={map:t[3]};t[5]!==void 0&&(j.enabled=t[5]),f=new ot({props:j}),X.push(()=>x(f,"enabled",g));function C(i){t[15](i)}let E={$$slots:{default:[Nt]},$$scope:{ctx:t}};return t[6]!==void 0&&(E.checked=t[6]),r=new st({props:E}),X.push(()=>x(r,"checked",C)),{c(){M(e.$$.fragment),n=A(),M(l.$$.fragment),s=A(),M(c.$$.fragment),a=A(),M(f.$$.fragment),m=A(),M(r.$$.fragment)},l(i){V(e.$$.fragment,i),n=B(i),V(l.$$.fragment,i),s=B(i),V(c.$$.fragment,i),a=B(i),V(f.$$.fragment,i),m=B(i),V(r.$$.fragment,i)},m(i,p){R(e,i,p),L(i,n,p),R(l,i,p),L(i,s,p),R(c,i,p),L(i,a,p),R(f,i,p),L(i,m,p),R(r,i,p),u=!0},p(i,p){const y={};p[1]&128&&(y.$$scope={dirty:p,ctx:i}),e.$set(y);const P={};p[0]&8&&(P.map=i[3]),!_&&p[0]&32&&(_=!0,P.enabled=i[5],Q(()=>_=!1)),f.$set(P);const S={};p[1]&128&&(S.$$scope={dirty:p,ctx:i}),!v&&p[0]&64&&(v=!0,S.checked=i[6],Q(()=>v=!1)),r.$set(S)},i(i){u||(I(e.$$.fragment,i),I(l.$$.fragment,i),I(c.$$.fragment,i),I(f.$$.fragment,i),I(r.$$.fragment,i),u=!0)},o(i){N(e.$$.fragment,i),N(l.$$.fragment,i),N(c.$$.fragment,i),N(f.$$.fragment,i),N(r.$$.fragment,i),u=!1},d(i){i&&(d(n),d(s),d(a),d(m)),F(e,i),F(l,i),F(c,i),F(f,i),F(r,i)}}}function Dt(t){let e,n,l,s=t[34].stage+"",c,a,f,_,m=t[34].resolved+"",r;return{c(){e=H("div"),n=H("span"),l=Z("Stage: "),c=Z(s),a=A(),f=H("span"),_=Z("Resolved: "),r=Z(m),this.h()},l(v){e=K(v,"DIV",{style:!0});var u=W(e);n=K(u,"SPAN",{});var g=W(n);l=J(g,"Stage: "),c=J(g,s),g.forEach(d),a=B(u),f=K(u,"SPAN",{});var j=W(f);_=J(j,"Resolved: "),r=J(j,m),j.forEach(d),u.forEach(d),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(v,u){L(v,e,u),G(e,n),G(n,l),G(n,c),G(e,a),G(e,f),G(f,_),G(f,r)},p(v,u){u[0]&4&&s!==(s=v[34].stage+"")&&re(c,s),u[0]&4&&m!==(m=v[34].resolved+"")&&re(r,m)},d(v){v&&d(e)}}}function qe(t){let e,n,l;function s(){return t[17](t[33])}function c(){return t[18](t[33])}return n=new Ue({props:{name:Ge(t[34]),$$slots:{default:[Dt]},$$scope:{ctx:t}}}),n.$on("click",s),n.$on("mouseenter",c),n.$on("mouseleave",t[19]),{c(){e=H("li"),M(n.$$.fragment)},l(a){e=K(a,"LI",{});var f=W(e);V(n.$$.fragment,f),f.forEach(d)},m(a,f){L(a,e,f),R(n,e,null),l=!0},p(a,f){t=a;const _={};f[0]&4&&(_.name=Ge(t[34])),f[0]&4|f[1]&128&&(_.$$scope={dirty:f,ctx:t}),n.$set(_)},i(a){l||(I(n.$$.fragment,a),l=!0)},o(a){N(n.$$.fragment,a),l=!1},d(a){a&&d(e),F(n)}}}function jt(t){let e,n,l,s=t[31].stage+"",c,a,f,_,m=t[31].resolved+"",r,v;return{c(){e=H("div"),n=H("span"),l=Z("Stage: "),c=Z(s),a=A(),f=H("span"),_=Z("Resolved: "),r=Z(m),v=A(),this.h()},l(u){e=K(u,"DIV",{style:!0});var g=W(e);n=K(g,"SPAN",{});var j=W(n);l=J(j,"Stage: "),c=J(j,s),j.forEach(d),a=B(g),f=K(g,"SPAN",{});var C=W(f);_=J(C,"Resolved: "),r=J(C,m),C.forEach(d),g.forEach(d),v=B(u),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(u,g){L(u,e,g),G(e,n),G(n,l),G(n,c),G(e,a),G(e,f),G(f,_),G(f,r),L(u,v,g)},p(u,g){g[0]&4&&s!==(s=u[31].stage+"")&&re(c,s),g[0]&4&&m!==(m=u[31].resolved+"")&&re(r,m)},d(u){u&&(d(e),d(v))}}}function Ae(t){let e,n;function l(){return t[20](t[33])}function s(){return t[21](t[33])}return e=new Ue({props:{name:Me(t[31]),$$slots:{default:[jt]},$$scope:{ctx:t}}}),e.$on("click",l),e.$on("mouseenter",s),e.$on("mouseleave",t[22]),{c(){M(e.$$.fragment)},l(c){V(e.$$.fragment,c)},m(c,a){R(e,c,a),n=!0},p(c,a){t=c;const f={};a[0]&4&&(f.name=Me(t[31])),a[0]&4|a[1]&128&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(c){n||(I(e.$$.fragment,c),n=!0)},o(c){N(e.$$.fragment,c),n=!1},d(c){F(e,c)}}}function qt(t){let e,n,l,s=t[34].criticalIssue+"",c;return{c(){e=be("svg"),n=be("polygon"),l=be("text"),c=Z(s),this.h()},l(a){e=ke(a,"svg",{width:!0,height:!0,xmlns:!0});var f=W(e);n=ke(f,"polygon",{points:!0,fill:!0,class:!0}),W(n).forEach(d),l=ke(f,"text",{x:!0,y:!0});var _=W(l);c=J(_,s),_.forEach(d),f.forEach(d),this.h()},h(){O(n,"points","20,0 0,40 40,40"),O(n,"fill",xe.critical.background),O(n,"class","svelte-ktyu3j"),O(l,"x","13"),O(l,"y","30"),z(l,"fill","white"),O(e,"width","40"),O(e,"height","40"),O(e,"xmlns","http://www.w3.org/2000/svg")},m(a,f){L(a,e,f),G(e,n),G(e,l),G(l,c)},p(a,f){f[0]&4&&s!==(s=a[34].criticalIssue+"")&&re(c,s)},d(a){a&&d(e)}}}function Be(t){let e,n,l;function s(_){t[24](_,t[34])}function c(){return t[25](t[33])}function a(){return t[26](t[33])}let f={draggable:!0,$$slots:{default:[qt]},$$scope:{ctx:t}};return t[34].point!==void 0&&(f.lngLat=t[34].point),e=new Oe({props:f}),X.push(()=>x(e,"lngLat",s)),e.$on("click",c),e.$on("dragend",a),{c(){M(e.$$.fragment)},l(_){V(e.$$.fragment,_)},m(_,m){R(e,_,m),l=!0},p(_,m){t=_;const r={};m[0]&4|m[1]&128&&(r.$$scope={dirty:m,ctx:t}),!n&&m[0]&4&&(n=!0,r.lngLat=t[34].point,Q(()=>n=!1)),e.$set(r)},i(_){l||(I(e.$$.fragment,_),l=!0)},o(_){N(e.$$.fragment,_),l=!1},d(_){F(e,_)}}}function At(t){let e,n=t[31].conflict+"",l;return{c(){e=H("span"),l=Z(n),this.h()},l(s){e=K(s,"SPAN",{class:!0});var c=W(e);l=J(c,n),c.forEach(d),this.h()},h(){O(e,"class","dot svelte-ktyu3j"),z(e,"background",et)},m(s,c){L(s,e,c),G(e,l)},p(s,c){c[0]&4&&n!==(n=s[31].conflict+"")&&re(l,n)},d(s){s&&d(e)}}}function Pe(t){let e,n,l;function s(_){t[27](_,t[31])}function c(){return t[28](t[33])}function a(){return t[29](t[33])}let f={draggable:!0,$$slots:{default:[At]},$$scope:{ctx:t}};return t[31].point!==void 0&&(f.lngLat=t[31].point),e=new Oe({props:f}),X.push(()=>x(e,"lngLat",s)),e.$on("click",c),e.$on("dragend",a),{c(){M(e.$$.fragment)},l(_){V(e.$$.fragment,_)},m(_,m){R(e,_,m),l=!0},p(_,m){t=_;const r={};m[0]&4|m[1]&128&&(r.$$scope={dirty:m,ctx:t}),!n&&m[0]&4&&(n=!0,r.lngLat=t[31].point,Q(()=>n=!1)),e.$set(r)},i(_){l||(I(e.$$.fragment,_),l=!0)},o(_){N(e.$$.fragment,_),l=!1},d(_){F(e,_)}}}function Bt(t){let e,n;return e=new Qe({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){M(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,s){R(e,l,s),n=!0},p:Ke,i(l){n||(I(e.$$.fragment,l),n=!0)},o(l){N(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Pt(t){let e,n,l,s,c,a,f,_,m,r;e=new rt({}),e.$on("click",t[9]),l=new Je({props:{gj:t[2].summary.networkMap,show:t[6]}});let v=ie(t[2].criticalIssues),u=[];for(let i=0;i<v.length;i+=1)u[i]=Be(Ee(t,v,i));const g=i=>N(u[i],1,1,()=>{u[i]=null});let j=ie(t[2].policyConflictLog),C=[];for(let i=0;i<j.length;i+=1)C[i]=Pe(Ne(t,j,i));const E=i=>N(C[i],1,1,()=>{C[i]=null});return f=new Xe({props:{data:t[7],$$slots:{default:[Bt]},$$scope:{ctx:t}}}),m=new _t({props:{map:t[3]}}),{c(){M(e.$$.fragment),n=A(),M(l.$$.fragment),s=A();for(let i=0;i<u.length;i+=1)u[i].c();c=A();for(let i=0;i<C.length;i+=1)C[i].c();a=A(),M(f.$$.fragment),_=A(),M(m.$$.fragment)},l(i){V(e.$$.fragment,i),n=B(i),V(l.$$.fragment,i),s=B(i);for(let p=0;p<u.length;p+=1)u[p].l(i);c=B(i);for(let p=0;p<C.length;p+=1)C[p].l(i);a=B(i),V(f.$$.fragment,i),_=B(i),V(m.$$.fragment,i)},m(i,p){R(e,i,p),L(i,n,p),R(l,i,p),L(i,s,p);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(i,p);L(i,c,p);for(let y=0;y<C.length;y+=1)C[y]&&C[y].m(i,p);L(i,a,p),R(f,i,p),L(i,_,p),R(m,i,p),r=!0},p(i,p){const y={};if(p[0]&4&&(y.gj=i[2].summary.networkMap),p[0]&64&&(y.show=i[6]),l.$set(y),p[0]&260){v=ie(i[2].criticalIssues);let h;for(h=0;h<v.length;h+=1){const T=Ee(i,v,h);u[h]?(u[h].p(T,p),I(u[h],1)):(u[h]=Be(T),u[h].c(),I(u[h],1),u[h].m(c.parentNode,c))}for(fe(),h=v.length;h<u.length;h+=1)g(h);ae()}if(p[0]&260){j=ie(i[2].policyConflictLog);let h;for(h=0;h<j.length;h+=1){const T=Ne(i,j,h);C[h]?(C[h].p(T,p),I(C[h],1)):(C[h]=Pe(T),C[h].c(),I(C[h],1),C[h].m(a.parentNode,a))}for(fe(),h=j.length;h<C.length;h+=1)E(h);ae()}const P={};p[0]&128&&(P.data=i[7]),p[1]&128&&(P.$$scope={dirty:p,ctx:i}),f.$set(P);const S={};p[0]&8&&(S.map=i[3]),m.$set(S)},i(i){if(!r){I(e.$$.fragment,i),I(l.$$.fragment,i);for(let p=0;p<v.length;p+=1)I(u[p]);for(let p=0;p<j.length;p+=1)I(C[p]);I(f.$$.fragment,i),I(m.$$.fragment,i),r=!0}},o(i){N(e.$$.fragment,i),N(l.$$.fragment,i),u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)N(u[p]);C=C.filter(Boolean);for(let p=0;p<C.length;p+=1)N(C[p]);N(f.$$.fragment,i),N(m.$$.fragment,i),r=!1},d(i){i&&(d(n),d(s),d(c),d(a),d(_)),F(e,i),F(l,i),me(u,i),me(C,i),F(f,i),F(m,i)}}}function Gt(t){let e,n,l,s,c,a,f,_,m,r,v;const u=[Ct,kt],g=[];function j(i,p){return i[0]==null?0:1}l=j(t),s=g[l]=u[l](t);function C(i){t[30](i)}let E={$$slots:{default:[Pt]},$$scope:{ctx:t}};return t[3]!==void 0&&(E.map=t[3]),f=new We({props:E}),X.push(()=>x(f,"map",C)),{c(){e=H("div"),n=H("div"),s.c(),c=A(),a=H("div"),M(f.$$.fragment),this.h()},l(i){e=K(i,"DIV",{style:!0});var p=W(e);n=K(p,"DIV",{style:!0});var y=W(n);s.l(y),y.forEach(d),c=B(p),a=K(p,"DIV",{style:!0});var P=W(a);V(f.$$.fragment,P),P.forEach(d),p.forEach(d),this.h()},h(){z(n,"width","30%"),z(n,"overflow-y","scroll"),z(n,"padding","10px"),z(n,"border","1px solid black"),z(a,"position","relative"),z(a,"width","70%"),z(e,"display","flex"),z(e,"height","80vh")},m(i,p){L(i,e,p),G(e,n),g[l].m(n,null),G(e,c),G(e,a),R(f,a,null),m=!0,r||(v=ze(bt,"keydown",t[12]),r=!0)},p(i,p){let y=l;l=j(i),l===y?g[l].p(i,p):(fe(),N(g[y],1,1,()=>{g[y]=null}),ae(),s=g[l],s?s.p(i,p):(s=g[l]=u[l](i),s.c()),I(s,1),s.m(n,null));const P={};p[0]&204|p[1]&128&&(P.$$scope={dirty:p,ctx:i}),!_&&p[0]&8&&(_=!0,P.map=i[3],Q(()=>_=!1)),f.$set(P)},i(i){m||(I(s),I(f.$$.fragment,i),m=!0)},o(i){N(s),N(f.$$.fragment,i),m=!1},d(i){i&&d(e),g[l].d(),F(f),r=!1,v()}}}function Mt(t,e,n){let l={type:"FeatureCollection",features:[]},s=e??n;if(s!=null){let c=s.kind=="critical"?t.criticalIssues:t.policyConflictLog;l.features.push(Ce(c[s.idx].point))}return l}function Ce(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function Ge(t){return`${t.criticalIssue||"Unknown critical"}: ${t.locationName||"???"}`}function Me(t){return`${t.conflict||"Unknown conflict"}: ${t.locationName||"???"}`}function Vt(t,e,n){let l,s;ye(t,Y,w=>n(2,s=w));let c,a="critical",f=null,_=null,m=!1,r=!0;function v(w){n(0,f=w),n(1,_=null)}function u(w){if(!m){if(f!=null){n(0,f=null);return}a=="critical"?(Se(Y,s.criticalIssues=[...s.criticalIssues,{criticalIssue:"",stage:"",point:w.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),v({kind:"critical",idx:s.criticalIssues.length-1})):(Se(Y,s.policyConflictLog=[...s.policyConflictLog,{conflict:"",stage:"",point:w.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],s),v({kind:"conflict",idx:s.policyConflictLog.length-1}))}}He(()=>{j(!1)});function g(){window.confirm("Delete this entry?")&&(f.kind=="critical"?(s.criticalIssues.splice(f.idx,1),Y.set(s)):(s.policyConflictLog.splice(f.idx,1),Y.set(s)),n(0,f=null))}function j(w){let o={type:"FeatureCollection",features:[...s.criticalIssues.map(k=>Ce(k.point)),...s.policyConflictLog.map(k=>Ce(k.point)),...s.summary.networkMap.features]};o.features.length>0&&c.fitBounds(Ze(o),{padding:20,animate:w})}function C(w){if(f!=null&&w.key=="Escape")w.stopPropagation(),n(0,f=null);else if(f!=null&&w.key=="Delete"){let o=w.target.tagName;if(o=="INPUT"||o=="TEXTAREA")return;w.stopPropagation(),g()}}const E=()=>j(!0);function i(w){m=w,n(5,m)}function p(w){r=w,n(6,r)}function y(w){a=w,n(4,a)}const P=w=>v({kind:"critical",idx:w}),S=w=>n(1,_={kind:"critical",idx:w}),h=()=>n(1,_=null),T=w=>v({kind:"conflict",idx:w}),D=w=>n(1,_={kind:"conflict",idx:w}),oe=()=>n(1,_=null),$=()=>n(0,f=null);function b(w,o){t.$$.not_equal(o.point,w)&&(o.point=w,Y.set(s))}const U=w=>v({kind:"critical",idx:w}),ne=w=>v({kind:"critical",idx:w});function q(w,o){t.$$.not_equal(o.point,w)&&(o.point=w,Y.set(s))}const ee=w=>v({kind:"conflict",idx:w}),se=w=>v({kind:"conflict",idx:w});function ue(w){c=w,n(3,c)}return t.$$.update=()=>{t.$$.dirty[0]&7&&n(7,l=Mt(s,f,_))},[f,_,s,c,a,m,r,l,v,u,g,j,C,E,i,p,y,P,S,h,T,D,oe,$,b,U,ne,q,ee,se,ue]}class al extends Ie{constructor(e){super(),Le(this,e,Vt,Gt,we,{},null,[-1,-1])}}export{al as component};
