import{s as Ie,r as Z,e as F,t as J,a as M,c as U,b as j,d as K,f as $,g as R,q as P,v as O,i as h,h as D,w as z,k as he,y as at,T as ct,G as we,V as me,D as ee,p as de,K as ve,j as re,I as ft,O as pe,P as _e,n as ut}from"../chunks/scheduler.4ZNDCSWA.js";import{S as Le,i as Ne,e as X,c as V,a as q,m as T,t as b,g as ne,b as C,f as ie,d as G}from"../chunks/index.xRKM1n3P.js";import{g as pt}from"../chunks/globals.D0QH3NT1.js";import{e as oe}from"../chunks/each.DpHudclE.js";import{p as Se,c as Je}from"../chunks/colors.DaC397qr.js";import{p as Ke}from"../chunks/index.ClrOsEXj.js";import{R as We}from"../chunks/Radio.CCGi1Okd.js";import"../chunks/index.C6Cmtl_H.js";import{S as Ze}from"../chunks/Select.DBfxnL9n.js";import{T as Ye}from"../chunks/TextArea.Dd2Lnwl6.js";import{T as ze}from"../chunks/TextInput.DPcrKP2M.js";import{s as W}from"../chunks/data.CrITGlOK.js";import{l as be,n as ke,M as _t,b as mt,G as gt,C as $t}from"../chunks/index.CPNu5c5Y.js";import{c as dt,p as ht,b as De,e as Pe,f as vt,g as bt}from"../chunks/lists.Bn2sGx3F.js";import{Y as Xe}from"../chunks/YesNo.BQQUbE1B.js";import{B as kt,C as wt,M as Qe}from"../chunks/Marker.gk8VU9Ka.js";import{D as yt,C as Ct}from"../chunks/DefaultButton.CEkMkJr5.js";import{S as xe}from"../chunks/SecondaryButton.yCPBUDia.js";import{W as It}from"../chunks/WarningButton.DAgnty13.js";import{G as Lt,S as Nt,C as et,M as St}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.DQ4KePsA.js";import{G as Et,I as ye,p as Dt}from"../chunks/pan.Cp4TdrgQ.js";import"../chunks/index.DKLSxwyi.js";import"../chunks/paths.DtMDEU9d.js";import{p as Pt}from"../chunks/stores.BhhB2UXs.js";import"../chunks/entry.CTH1wgNo.js";import{R as Bt}from"../chunks/RouteMapLayer.BTOJoiYm.js";function Be(n){let e,l,t;function i(r){n[5](r)}let s={label:"Resolved by Design",inlineSmall:!0};return n[1].criticalIssues[n[0]].resolved!==void 0&&(s.value=n[1].criticalIssues[n[0]].resolved),e=new Xe({props:s}),Z.push(()=>X(e,"value",i)),{c(){V(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,c){T(e,r,c),t=!0},p(r,c){const o={};!l&&c&3&&(l=!0,o.value=r[1].criticalIssues[r[0]].resolved,z(()=>l=!1)),e.$set(o)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){C(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function At(n){let e,l,t,i,s,r,c,o,u,_,L,v,w,g,B,N,f,I,a,m,S,k;function Y(p){n[2](p)}let A={label:"Critical Issue",emptyOption:!0,choices:dt};n[1].criticalIssues[n[0]].criticalIssue!==void 0&&(A.value=n[1].criticalIssues[n[0]].criticalIssue),_=new Ze({props:A}),Z.push(()=>X(_,"value",Y));function te(p){n[3](p)}let se={label:"Stage",choices:Ke(["Existing","Design"]),inlineSmall:!0};n[1].criticalIssues[n[0]].stage!==void 0&&(se.value=n[1].criticalIssues[n[0]].stage),w=new We({props:se}),Z.push(()=>X(w,"value",te));function ge(p){n[4](p)}let ae={label:"Location Name"};n[1].criticalIssues[n[0]].locationName!==void 0&&(ae.value=n[1].criticalIssues[n[0]].locationName),N=new ze({props:ae}),Z.push(()=>X(N,"value",ge));let E=n[1].criticalIssues[n[0]].stage!="Design"&&Be(n);function $e(p){n[6](p)}let ce={label:"Commentary & Feedback"};return n[1].criticalIssues[n[0]].notes!==void 0&&(ce.value=n[1].criticalIssues[n[0]].notes),m=new Ye({props:ce}),Z.push(()=>X(m,"value",$e)),{c(){e=F("div"),l=F("a"),t=J("Google StreetView"),s=M(),r=F("a"),c=J("Bing Streetside"),u=M(),V(_.$$.fragment),v=M(),V(w.$$.fragment),B=M(),V(N.$$.fragment),I=M(),E&&E.c(),a=M(),V(m.$$.fragment),this.h()},l(p){e=U(p,"DIV",{style:!0});var y=j(e);l=U(y,"A",{href:!0,target:!0});var Q=j(l);t=K(Q,"Google StreetView"),Q.forEach($),s=R(y),r=U(y,"A",{href:!0,target:!0});var x=j(r);c=K(x,"Bing Streetside"),x.forEach($),y.forEach($),u=R(p),q(_.$$.fragment,p),v=R(p),q(w.$$.fragment,p),B=R(p),q(N.$$.fragment,p),I=R(p),E&&E.l(p),a=R(p),q(m.$$.fragment,p),this.h()},h(){P(l,"href",i=be(n[1].criticalIssues[n[0]].point)),P(l,"target","_blank"),P(r,"href",o=ke(n[1].criticalIssues[n[0]].point)),P(r,"target","_blank"),O(e,"display","flex"),O(e,"justify-content","space-evenly")},m(p,y){h(p,e,y),D(e,l),D(l,t),D(e,s),D(e,r),D(r,c),h(p,u,y),T(_,p,y),h(p,v,y),T(w,p,y),h(p,B,y),T(N,p,y),h(p,I,y),E&&E.m(p,y),h(p,a,y),T(m,p,y),k=!0},p(p,[y]){(!k||y&3&&i!==(i=be(p[1].criticalIssues[p[0]].point)))&&P(l,"href",i),(!k||y&3&&o!==(o=ke(p[1].criticalIssues[p[0]].point)))&&P(r,"href",o);const Q={};!L&&y&3&&(L=!0,Q.value=p[1].criticalIssues[p[0]].criticalIssue,z(()=>L=!1)),_.$set(Q);const x={};!g&&y&3&&(g=!0,x.value=p[1].criticalIssues[p[0]].stage,z(()=>g=!1)),w.$set(x);const fe={};!f&&y&3&&(f=!0,fe.value=p[1].criticalIssues[p[0]].locationName,z(()=>f=!1)),N.$set(fe),p[1].criticalIssues[p[0]].stage!="Design"?E?(E.p(p,y),y&3&&b(E,1)):(E=Be(p),E.c(),b(E,1),E.m(a.parentNode,a)):E&&(ne(),C(E,1,1,()=>{E=null}),ie());const ue={};!S&&y&3&&(S=!0,ue.value=p[1].criticalIssues[p[0]].notes,z(()=>S=!1)),m.$set(ue)},i(p){k||(b(_.$$.fragment,p),b(w.$$.fragment,p),b(N.$$.fragment,p),b(E),b(m.$$.fragment,p),k=!0)},o(p){C(_.$$.fragment,p),C(w.$$.fragment,p),C(N.$$.fragment,p),C(E),C(m.$$.fragment,p),k=!1},d(p){p&&($(e),$(u),$(v),$(B),$(I),$(a)),G(_,p),G(w,p),G(N,p),E&&E.d(p),G(m,p)}}}function Mt(n,e,l){let t;he(n,W,_=>l(1,t=_));let{idx:i}=e;function s(_){n.$$.not_equal(t.criticalIssues[i].criticalIssue,_)&&(t.criticalIssues[i].criticalIssue=_,W.set(t))}function r(_){n.$$.not_equal(t.criticalIssues[i].stage,_)&&(t.criticalIssues[i].stage=_,W.set(t))}function c(_){n.$$.not_equal(t.criticalIssues[i].locationName,_)&&(t.criticalIssues[i].locationName=_,W.set(t))}function o(_){n.$$.not_equal(t.criticalIssues[i].resolved,_)&&(t.criticalIssues[i].resolved=_,W.set(t))}function u(_){n.$$.not_equal(t.criticalIssues[i].notes,_)&&(t.criticalIssues[i].notes=_,W.set(t))}return n.$$set=_=>{"idx"in _&&l(0,i=_.idx)},[i,t,s,r,c,o,u]}class Rt extends Le{constructor(e){super(),Ne(this,e,Mt,At,Ie,{idx:0})}}function Ae(n){let e,l,t;function i(r){n[5](r)}let s={label:"Resolved by Design",inlineSmall:!0};return n[1].policyConflictLog[n[0]].resolved!==void 0&&(s.value=n[1].policyConflictLog[n[0]].resolved),e=new Xe({props:s}),Z.push(()=>X(e,"value",i)),{c(){V(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,c){T(e,r,c),t=!0},p(r,c){const o={};!l&&c&3&&(l=!0,o.value=r[1].policyConflictLog[r[0]].resolved,z(()=>l=!1)),e.$set(o)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){C(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function Vt(n){let e,l,t,i,s,r,c,o,u,_,L,v,w,g,B,N,f,I,a,m,S,k;function Y(p){n[2](p)}let A={label:"Policy Conflict",emptyOption:!0,choices:ht};n[1].policyConflictLog[n[0]].conflict!==void 0&&(A.value=n[1].policyConflictLog[n[0]].conflict),_=new Ze({props:A}),Z.push(()=>X(_,"value",Y));function te(p){n[3](p)}let se={label:"Stage",choices:Ke(["Existing","Design"]),inlineSmall:!0};n[1].policyConflictLog[n[0]].stage!==void 0&&(se.value=n[1].policyConflictLog[n[0]].stage),w=new We({props:se}),Z.push(()=>X(w,"value",te));function ge(p){n[4](p)}let ae={label:"Location Name"};n[1].policyConflictLog[n[0]].locationName!==void 0&&(ae.value=n[1].policyConflictLog[n[0]].locationName),N=new ze({props:ae}),Z.push(()=>X(N,"value",ge));let E=n[1].policyConflictLog[n[0]].stage!="Design"&&Ae(n);function $e(p){n[6](p)}let ce={label:"Commentary & Feedback"};return n[1].policyConflictLog[n[0]].notes!==void 0&&(ce.value=n[1].policyConflictLog[n[0]].notes),m=new Ye({props:ce}),Z.push(()=>X(m,"value",$e)),{c(){e=F("div"),l=F("a"),t=J("Google StreetView"),s=M(),r=F("a"),c=J("Bing Streetside"),u=M(),V(_.$$.fragment),v=M(),V(w.$$.fragment),B=M(),V(N.$$.fragment),I=M(),E&&E.c(),a=M(),V(m.$$.fragment),this.h()},l(p){e=U(p,"DIV",{style:!0});var y=j(e);l=U(y,"A",{href:!0,target:!0});var Q=j(l);t=K(Q,"Google StreetView"),Q.forEach($),s=R(y),r=U(y,"A",{href:!0,target:!0});var x=j(r);c=K(x,"Bing Streetside"),x.forEach($),y.forEach($),u=R(p),q(_.$$.fragment,p),v=R(p),q(w.$$.fragment,p),B=R(p),q(N.$$.fragment,p),I=R(p),E&&E.l(p),a=R(p),q(m.$$.fragment,p),this.h()},h(){P(l,"href",i=be(n[1].policyConflictLog[n[0]].point)),P(l,"target","_blank"),P(r,"href",o=ke(n[1].policyConflictLog[n[0]].point)),P(r,"target","_blank"),O(e,"display","flex"),O(e,"justify-content","space-evenly")},m(p,y){h(p,e,y),D(e,l),D(l,t),D(e,s),D(e,r),D(r,c),h(p,u,y),T(_,p,y),h(p,v,y),T(w,p,y),h(p,B,y),T(N,p,y),h(p,I,y),E&&E.m(p,y),h(p,a,y),T(m,p,y),k=!0},p(p,[y]){(!k||y&3&&i!==(i=be(p[1].policyConflictLog[p[0]].point)))&&P(l,"href",i),(!k||y&3&&o!==(o=ke(p[1].policyConflictLog[p[0]].point)))&&P(r,"href",o);const Q={};!L&&y&3&&(L=!0,Q.value=p[1].policyConflictLog[p[0]].conflict,z(()=>L=!1)),_.$set(Q);const x={};!g&&y&3&&(g=!0,x.value=p[1].policyConflictLog[p[0]].stage,z(()=>g=!1)),w.$set(x);const fe={};!f&&y&3&&(f=!0,fe.value=p[1].policyConflictLog[p[0]].locationName,z(()=>f=!1)),N.$set(fe),p[1].policyConflictLog[p[0]].stage!="Design"?E?(E.p(p,y),y&3&&b(E,1)):(E=Ae(p),E.c(),b(E,1),E.m(a.parentNode,a)):E&&(ne(),C(E,1,1,()=>{E=null}),ie());const ue={};!S&&y&3&&(S=!0,ue.value=p[1].policyConflictLog[p[0]].notes,z(()=>S=!1)),m.$set(ue)},i(p){k||(b(_.$$.fragment,p),b(w.$$.fragment,p),b(N.$$.fragment,p),b(E),b(m.$$.fragment,p),k=!0)},o(p){C(_.$$.fragment,p),C(w.$$.fragment,p),C(N.$$.fragment,p),C(E),C(m.$$.fragment,p),k=!1},d(p){p&&($(e),$(u),$(v),$(B),$(I),$(a)),G(_,p),G(w,p),G(N,p),E&&E.d(p),G(m,p)}}}function qt(n,e,l){let t;he(n,W,_=>l(1,t=_));let{idx:i}=e;function s(_){n.$$.not_equal(t.policyConflictLog[i].conflict,_)&&(t.policyConflictLog[i].conflict=_,W.set(t))}function r(_){n.$$.not_equal(t.policyConflictLog[i].stage,_)&&(t.policyConflictLog[i].stage=_,W.set(t))}function c(_){n.$$.not_equal(t.policyConflictLog[i].locationName,_)&&(t.policyConflictLog[i].locationName=_,W.set(t))}function o(_){n.$$.not_equal(t.policyConflictLog[i].resolved,_)&&(t.policyConflictLog[i].resolved=_,W.set(t))}function u(_){n.$$.not_equal(t.policyConflictLog[i].notes,_)&&(t.policyConflictLog[i].notes=_,W.set(t))}return n.$$set=_=>{"idx"in _&&l(0,i=_.idx)},[i,t,s,r,c,o,u]}class Tt extends Le{constructor(e){super(),Ne(this,e,qt,Vt,Ie,{idx:0})}}const{window:Gt}=pt;function Me(n,e,l){const t=n.slice();return t[40]=e[l],t[41]=e,t[42]=l,t}function Re(n,e,l){const t=n.slice();return t[43]=e[l],t[44]=e,t[42]=l,t}function Ve(n,e,l){const t=n.slice();return t[40]=e[l],t[42]=l,t}function qe(n,e,l){const t=n.slice();return t[43]=e[l],t[42]=l,t}function jt(n){let e,l,t,i,s,r,c,o,u,_;e=new yt({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),e.$on("click",n[11]),t=new It({props:{$$slots:{default:[Ot]},$$scope:{ctx:n}}}),t.$on("click",n[13]),s=new xe({props:{$$slots:{default:[Ht]},$$scope:{ctx:n}}}),s.$on("click",n[10]);const L=[Kt,Jt],v=[];function w(g,B){return g[1].id.kind=="critical"?0:1}return c=w(n),o=v[c]=L[c](n),{c(){V(e.$$.fragment),l=M(),V(t.$$.fragment),i=M(),V(s.$$.fragment),r=M(),o.c(),u=ee()},l(g){q(e.$$.fragment,g),l=R(g),q(t.$$.fragment,g),i=R(g),q(s.$$.fragment,g),r=R(g),o.l(g),u=ee()},m(g,B){T(e,g,B),h(g,l,B),T(t,g,B),h(g,i,B),T(s,g,B),h(g,r,B),v[c].m(g,B),h(g,u,B),_=!0},p(g,B){const N={};B[1]&65536&&(N.$$scope={dirty:B,ctx:g}),e.$set(N);const f={};B[1]&65536&&(f.$$scope={dirty:B,ctx:g}),t.$set(f);const I={};B[1]&65536&&(I.$$scope={dirty:B,ctx:g}),s.$set(I);let a=c;c=w(g),c===a?v[c].p(g,B):(ne(),C(v[a],1,1,()=>{v[a]=null}),ie(),o=v[c],o?o.p(g,B):(o=v[c]=L[c](g),o.c()),b(o,1),o.m(u.parentNode,u))},i(g){_||(b(e.$$.fragment,g),b(t.$$.fragment,g),b(s.$$.fragment,g),b(o),_=!0)},o(g){C(e.$$.fragment,g),C(t.$$.fragment,g),C(s.$$.fragment,g),C(o),_=!1},d(g){g&&($(l),$(i),$(r),$(u)),G(e,g),G(t,g),G(s,g),v[c].d(g)}}}function Ft(n){let e,l,t,i,s="Critical Issue Log",r,c,o,u,_="Policy Conflict Log",L,v;e=new Ct({props:{label:"Map tools",$$slots:{default:[Yt]},$$scope:{ctx:n}}});let w=oe(n[3].criticalIssues),g=[];for(let a=0;a<w.length;a+=1)g[a]=Ge(qe(n,w,a));const B=a=>C(g[a],1,1,()=>{g[a]=null});let N=oe(n[3].policyConflictLog),f=[];for(let a=0;a<N.length;a+=1)f[a]=Fe(Ve(n,N,a));const I=a=>C(f[a],1,1,()=>{f[a]=null});return{c(){V(e.$$.fragment),l=M(),t=F("div"),i=F("h3"),i.textContent=s,r=M();for(let a=0;a<g.length;a+=1)g[a].c();c=M(),o=F("div"),u=F("h3"),u.textContent=_,L=M();for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){q(e.$$.fragment,a),l=R(a),t=U(a,"DIV",{style:!0});var m=j(t);i=U(m,"H3",{"data-svelte-h":!0}),de(i)!=="svelte-e9mkko"&&(i.textContent=s),r=R(m);for(let k=0;k<g.length;k+=1)g[k].l(m);m.forEach($),c=R(a),o=U(a,"DIV",{style:!0});var S=j(o);u=U(S,"H3",{"data-svelte-h":!0}),de(u)!=="svelte-y008oc"&&(u.textContent=_),L=R(S);for(let k=0;k<f.length;k+=1)f[k].l(S);S.forEach($),this.h()},h(){O(t,"background-color","grey"),O(t,"padding","4px"),O(o,"background-color",Se),O(o,"padding","4px")},m(a,m){T(e,a,m),h(a,l,m),h(a,t,m),D(t,i),D(t,r);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(t,null);h(a,c,m),h(a,o,m),D(o,u),D(o,L);for(let S=0;S<f.length;S+=1)f[S]&&f[S].m(o,null);v=!0},p(a,m){const S={};if(m[0]&97|m[1]&65536&&(S.$$scope={dirty:m,ctx:a}),e.$set(S),m[0]&33292){w=oe(a[3].criticalIssues);let k;for(k=0;k<w.length;k+=1){const Y=qe(a,w,k);g[k]?(g[k].p(Y,m),b(g[k],1)):(g[k]=Ge(Y),g[k].c(),b(g[k],1),g[k].m(t,null))}for(ne(),k=w.length;k<g.length;k+=1)B(k);ie()}if(m[0]&66060){N=oe(a[3].policyConflictLog);let k;for(k=0;k<N.length;k+=1){const Y=Ve(a,N,k);f[k]?(f[k].p(Y,m),b(f[k],1)):(f[k]=Fe(Y),f[k].c(),b(f[k],1),f[k].m(o,null))}for(ne(),k=N.length;k<f.length;k+=1)I(k);ie()}},i(a){if(!v){b(e.$$.fragment,a);for(let m=0;m<w.length;m+=1)b(g[m]);for(let m=0;m<N.length;m+=1)b(f[m]);v=!0}},o(a){C(e.$$.fragment,a),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)C(g[m]);f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)C(f[m]);v=!1},d(a){a&&($(l),$(t),$(c),$(o)),G(e,a),ve(g,a),ve(f,a)}}}function Ut(n){let e;return{c(){e=J("Save")},l(l){e=K(l,"Save")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Ot(n){let e;return{c(){e=J("Delete")},l(l){e=K(l,"Delete")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Ht(n){let e;return{c(){e=J("Copy")},l(l){e=K(l,"Copy")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Jt(n){let e,l;return e=new Tt({props:{idx:n[1].id.idx}}),{c(){V(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&2&&(s.idx=t[1].id.idx),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Kt(n){let e,l;return e=new Rt({props:{idx:n[1].id.idx}}),{c(){V(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&2&&(s.idx=t[1].id.idx),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Wt(n){let e;return{c(){e=J("Zoom to fit")},l(l){e=K(l,"Zoom to fit")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Zt(n){let e;return{c(){e=J("Show route")},l(l){e=K(l,"Show route")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Yt(n){let e,l,t,i,s,r,c,o,u,_,L,v;e=new xe({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),e.$on("click",n[18]),t=new kt({}),s=new Lt({});function w(f){n[19](f)}let g={map:n[0]};n[5]!==void 0&&(g.enabled=n[5]),c=new Nt({props:g}),Z.push(()=>X(c,"enabled",w));function B(f){n[20](f)}let N={$$slots:{default:[Zt]},$$scope:{ctx:n}};return n[6]!==void 0&&(N.checked=n[6]),_=new wt({props:N}),Z.push(()=>X(_,"checked",B)),{c(){V(e.$$.fragment),l=M(),V(t.$$.fragment),i=M(),V(s.$$.fragment),r=M(),V(c.$$.fragment),u=M(),V(_.$$.fragment)},l(f){q(e.$$.fragment,f),l=R(f),q(t.$$.fragment,f),i=R(f),q(s.$$.fragment,f),r=R(f),q(c.$$.fragment,f),u=R(f),q(_.$$.fragment,f)},m(f,I){T(e,f,I),h(f,l,I),T(t,f,I),h(f,i,I),T(s,f,I),h(f,r,I),T(c,f,I),h(f,u,I),T(_,f,I),v=!0},p(f,I){const a={};I[1]&65536&&(a.$$scope={dirty:I,ctx:f}),e.$set(a);const m={};I[0]&1&&(m.map=f[0]),!o&&I[0]&32&&(o=!0,m.enabled=f[5],z(()=>o=!1)),c.$set(m);const S={};I[1]&65536&&(S.$$scope={dirty:I,ctx:f}),!L&&I[0]&64&&(L=!0,S.checked=f[6],z(()=>L=!1)),_.$set(S)},i(f){v||(b(e.$$.fragment,f),b(t.$$.fragment,f),b(s.$$.fragment,f),b(c.$$.fragment,f),b(_.$$.fragment,f),v=!0)},o(f){C(e.$$.fragment,f),C(t.$$.fragment,f),C(s.$$.fragment,f),C(c.$$.fragment,f),C(_.$$.fragment,f),v=!1},d(f){f&&($(l),$(i),$(r),$(u)),G(e,f),G(t,f),G(s,f),G(c,f),G(_,f)}}}function Te(n){let e;function l(s,r){return s[43].resolved=="No"?Xt:zt}let t=l(n),i=t(n);return{c(){i.c(),e=ee()},l(s){i.l(s),e=ee()},m(s,r){i.m(s,r),h(s,e,r)},p(s,r){t===(t=l(s))&&i?i.p(s,r):(i.d(1),i=t(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&$(e),i.d(s)}}}function zt(n){let e,l,t=n[43].resolved+"",i;return{c(){e=F("span"),l=J("Resolved: "),i=J(t)},l(s){e=U(s,"SPAN",{});var r=j(e);l=K(r,"Resolved: "),i=K(r,t),r.forEach($)},m(s,r){h(s,e,r),D(e,l),D(e,i)},p(s,r){r[0]&8&&t!==(t=s[43].resolved+"")&&re(i,t)},d(s){s&&$(e)}}}function Xt(n){let e,l,t,i=n[43].resolved+"",s;return{c(){e=F("span"),l=F("b"),t=J("Resolved: "),s=J(i)},l(r){e=U(r,"SPAN",{});var c=j(e);l=U(c,"B",{});var o=j(l);t=K(o,"Resolved: "),s=K(o,i),o.forEach($),c.forEach($)},m(r,c){h(r,e,c),D(e,l),D(l,t),D(l,s)},p(r,c){c[0]&8&&i!==(i=r[43].resolved+"")&&re(s,i)},d(r){r&&$(e)}}}function Qt(n){let e,l,t,i=n[43].stage+"",s,r,c,o=n[43].stage!="Design"&&Te(n);return{c(){e=F("div"),l=F("span"),t=J("Stage: "),s=J(i),r=M(),o&&o.c(),c=M(),this.h()},l(u){e=U(u,"DIV",{style:!0});var _=j(e);l=U(_,"SPAN",{});var L=j(l);t=K(L,"Stage: "),s=K(L,i),L.forEach($),r=R(_),o&&o.l(_),_.forEach($),c=R(u),this.h()},h(){O(e,"width","100%"),O(e,"display","flex"),O(e,"justify-content","space-between")},m(u,_){h(u,e,_),D(e,l),D(l,t),D(l,s),D(e,r),o&&o.m(e,null),h(u,c,_)},p(u,_){_[0]&8&&i!==(i=u[43].stage+"")&&re(s,i),u[43].stage!="Design"?o?o.p(u,_):(o=Te(u),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(u){u&&($(e),$(c)),o&&o.d()}}}function Ge(n){let e,l;function t(){return n[21](n[42])}function i(){return n[22](n[42])}return e=new et({props:{name:n[15](n[43]),$$slots:{default:[Qt]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",i),e.$on("mouseleave",n[23]),{c(){V(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,r){T(e,s,r),l=!0},p(s,r){n=s;const c={};r[0]&8&&(c.name=n[15](n[43])),r[0]&8|r[1]&65536&&(c.$$scope={dirty:r,ctx:n}),e.$set(c)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function je(n){let e;function l(s,r){return s[40].resolved=="No"?el:xt}let t=l(n),i=t(n);return{c(){i.c(),e=ee()},l(s){i.l(s),e=ee()},m(s,r){i.m(s,r),h(s,e,r)},p(s,r){t===(t=l(s))&&i?i.p(s,r):(i.d(1),i=t(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&$(e),i.d(s)}}}function xt(n){let e,l,t=n[40].resolved+"",i;return{c(){e=F("span"),l=J("Resolved: "),i=J(t)},l(s){e=U(s,"SPAN",{});var r=j(e);l=K(r,"Resolved: "),i=K(r,t),r.forEach($)},m(s,r){h(s,e,r),D(e,l),D(e,i)},p(s,r){r[0]&8&&t!==(t=s[40].resolved+"")&&re(i,t)},d(s){s&&$(e)}}}function el(n){let e,l,t,i=n[40].resolved+"",s;return{c(){e=F("span"),l=F("b"),t=J("Resolved: "),s=J(i)},l(r){e=U(r,"SPAN",{});var c=j(e);l=U(c,"B",{});var o=j(l);t=K(o,"Resolved: "),s=K(o,i),o.forEach($),c.forEach($)},m(r,c){h(r,e,c),D(e,l),D(l,t),D(l,s)},p(r,c){c[0]&8&&i!==(i=r[40].resolved+"")&&re(s,i)},d(r){r&&$(e)}}}function tl(n){let e,l,t,i=n[40].stage+"",s,r,c,o=n[40].stage!="Design"&&je(n);return{c(){e=F("div"),l=F("span"),t=J("Stage: "),s=J(i),r=M(),o&&o.c(),c=M(),this.h()},l(u){e=U(u,"DIV",{style:!0});var _=j(e);l=U(_,"SPAN",{});var L=j(l);t=K(L,"Stage: "),s=K(L,i),L.forEach($),r=R(_),o&&o.l(_),_.forEach($),c=R(u),this.h()},h(){O(e,"width","100%"),O(e,"display","flex"),O(e,"justify-content","space-between")},m(u,_){h(u,e,_),D(e,l),D(l,t),D(l,s),D(e,r),o&&o.m(e,null),h(u,c,_)},p(u,_){_[0]&8&&i!==(i=u[40].stage+"")&&re(s,i),u[40].stage!="Design"?o?o.p(u,_):(o=je(u),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(u){u&&($(e),$(c)),o&&o.d()}}}function Fe(n){let e,l;function t(){return n[24](n[42])}function i(){return n[25](n[42])}return e=new et({props:{name:n[16](n[40]),$$slots:{default:[tl]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",i),e.$on("mouseleave",n[26]),{c(){V(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,r){T(e,s,r),l=!0},p(s,r){n=s;const c={};r[0]&8&&(c.name=n[16](n[40])),r[0]&8|r[1]&65536&&(c.$$scope={dirty:r,ctx:n}),e.$set(c)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function Ue(n){let e,l,t,i,s,r,c;return l=new ye({props:{$$slots:{default:[il]},$$scope:{ctx:n}}}),l.$on("click",n[11]),i=new ye({props:{$$slots:{default:[sl]},$$scope:{ctx:n}}}),i.$on("click",n[28]),r=new ye({props:{$$slots:{default:[fl]},$$scope:{ctx:n}}}),r.$on("click",n[29]),{c(){e=F("div"),V(l.$$.fragment),t=M(),V(i.$$.fragment),s=M(),V(r.$$.fragment),this.h()},l(o){e=U(o,"DIV",{class:!0});var u=j(e);q(l.$$.fragment,u),t=R(u),q(i.$$.fragment,u),s=R(u),q(r.$$.fragment,u),u.forEach($),this.h()},h(){P(e,"class","control-panel svelte-wreccc")},m(o,u){h(o,e,u),T(l,e,null),D(e,t),T(i,e,null),D(e,s),T(r,e,null),c=!0},p(o,u){const _={};u[0]&2|u[1]&65536&&(_.$$scope={dirty:u,ctx:o}),l.$set(_);const L={};u[0]&2|u[1]&65536&&(L.$$scope={dirty:u,ctx:o}),i.$set(L);const v={};u[0]&2|u[1]&65536&&(v.$$scope={dirty:u,ctx:o}),r.$set(v)},i(o){c||(b(l.$$.fragment,o),b(i.$$.fragment,o),b(r.$$.fragment,o),c=!0)},o(o){C(l.$$.fragment,o),C(i.$$.fragment,o),C(r.$$.fragment,o),c=!1},d(o){o&&$(e),G(l),G(i),G(r)}}}function ll(n){let e;return{c(){e=J("Move map")},l(l){e=K(l,"Move map")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function nl(n){let e,l="Move map";return{c(){e=F("u"),e.textContent=l},l(t){e=U(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-1719ytd"&&(e.textContent=l)},m(t,i){h(t,e,i)},d(t){t&&$(e)}}}function il(n){let e,l,t,i;function s(o,u){return o[1].mode=="select"?nl:ll}let r=s(n),c=r(n);return{c(){e=F("img"),t=M(),c.c(),i=ee(),this.h()},l(o){e=U(o,"IMG",{src:!0,alt:!0,style:!0}),t=R(o),c.l(o),i=ee(),this.h()},h(){ft(e.src,l=Dt)||P(e,"src",l),P(e,"alt","Move map"),O(e,"vertical-align","middle")},m(o,u){h(o,e,u),h(o,t,u),c.m(o,u),h(o,i,u)},p(o,u){r!==(r=s(o))&&(c.d(1),c=r(o),c&&(c.c(),c.m(i.parentNode,i)))},d(o){o&&($(e),$(t),$(i)),c.d(o)}}}function ol(n){let e;return{c(){e=J("New critical issue")},l(l){e=K(l,"New critical issue")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function rl(n){let e,l="New critical issue";return{c(){e=F("u"),e.textContent=l},l(t){e=U(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-1igjogw"&&(e.textContent=l)},m(t,i){h(t,e,i)},d(t){t&&$(e)}}}function sl(n){let e,l,t,i;function s(o,u){return o[1].mode=="new-critical"?rl:ol}let r=s(n),c=r(n);return{c(){e=pe("svg"),l=pe("rect"),t=M(),c.c(),i=ee(),this.h()},l(o){e=_e(o,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=j(e);l=_e(u,"rect",{width:!0,height:!0,fill:!0,class:!0}),j(l).forEach($),u.forEach($),t=R(o),c.l(o),i=ee(),this.h()},h(){P(l,"width","24"),P(l,"height","24"),P(l,"fill",Je.critical.background),P(l,"class","svelte-wreccc"),P(e,"width","24"),P(e,"height","24"),P(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"vertical-align","middle")},m(o,u){h(o,e,u),D(e,l),h(o,t,u),c.m(o,u),h(o,i,u)},p(o,u){r!==(r=s(o))&&(c.d(1),c=r(o),c&&(c.c(),c.m(i.parentNode,i)))},d(o){o&&($(e),$(t),$(i)),c.d(o)}}}function al(n){let e;return{c(){e=J("New policy conflict")},l(l){e=K(l,"New policy conflict")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function cl(n){let e,l="New policy conflict";return{c(){e=F("u"),e.textContent=l},l(t){e=U(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-14o8e5o"&&(e.textContent=l)},m(t,i){h(t,e,i)},d(t){t&&$(e)}}}function fl(n){let e,l,t,i;function s(o,u){return o[1].mode=="new-conflict"?cl:al}let r=s(n),c=r(n);return{c(){e=pe("svg"),l=pe("circle"),t=M(),c.c(),i=ee(),this.h()},l(o){e=_e(o,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=j(e);l=_e(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),j(l).forEach($),u.forEach($),t=R(o),c.l(o),i=ee(),this.h()},h(){P(l,"cx","12"),P(l,"cy","12"),P(l,"r","12"),P(l,"fill",Se),P(e,"width","24"),P(e,"height","24"),P(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"vertical-align","middle")},m(o,u){h(o,e,u),D(e,l),h(o,t,u),c.m(o,u),h(o,i,u)},p(o,u){r!==(r=s(o))&&(c.d(1),c=r(o),c&&(c.c(),c.m(i.parentNode,i)))},d(o){o&&($(e),$(t),$(i)),c.d(o)}}}function ul(n){let e,l,t,i=n[43].criticalIssue+"",s;return{c(){e=pe("svg"),l=pe("rect"),t=pe("text"),s=J(i),this.h()},l(r){e=_e(r,"svg",{width:!0,height:!0,xmlns:!0});var c=j(e);l=_e(c,"rect",{width:!0,height:!0,fill:!0,class:!0}),j(l).forEach($),t=_e(c,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0});var o=j(t);s=K(o,i),o.forEach($),c.forEach($),this.h()},h(){P(l,"width","40"),P(l,"height","40"),P(l,"fill",Je.critical.background),P(l,"class","svelte-wreccc"),P(t,"x","50%"),P(t,"y","50%"),P(t,"dominant-baseline","middle"),P(t,"text-anchor","middle"),O(t,"fill","white"),O(t,"font","bold 15px sans-serif"),P(e,"width","40"),P(e,"height","40"),P(e,"xmlns","http://www.w3.org/2000/svg")},m(r,c){h(r,e,c),D(e,l),D(e,t),D(t,s)},p(r,c){c[0]&8&&i!==(i=r[43].criticalIssue+"")&&re(s,i)},d(r){r&&$(e)}}}function Oe(n){let e,l,t;function i(o){n[30](o,n[43])}function s(){return n[31](n[42])}function r(){return n[32](n[42])}let c={draggable:!0,$$slots:{default:[ul]},$$scope:{ctx:n}};return n[43].point!==void 0&&(c.lngLat=n[43].point),e=new Qe({props:c}),Z.push(()=>X(e,"lngLat",i)),e.$on("click",s),e.$on("dragend",r),{c(){V(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,u){T(e,o,u),t=!0},p(o,u){n=o;const _={};u[0]&8|u[1]&65536&&(_.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,_.lngLat=n[43].point,z(()=>l=!1)),e.$set(_)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){C(e.$$.fragment,o),t=!1},d(o){G(e,o)}}}function pl(n){let e,l=n[40].conflict+"",t;return{c(){e=F("span"),t=J(l),this.h()},l(i){e=U(i,"SPAN",{class:!0});var s=j(e);t=K(s,l),s.forEach($),this.h()},h(){P(e,"class","dot svelte-wreccc"),O(e,"background",Se)},m(i,s){h(i,e,s),D(e,t)},p(i,s){s[0]&8&&l!==(l=i[40].conflict+"")&&re(t,l)},d(i){i&&$(e)}}}function He(n){let e,l,t;function i(o){n[33](o,n[40])}function s(){return n[34](n[42])}function r(){return n[35](n[42])}let c={draggable:!0,$$slots:{default:[pl]},$$scope:{ctx:n}};return n[40].point!==void 0&&(c.lngLat=n[40].point),e=new Qe({props:c}),Z.push(()=>X(e,"lngLat",i)),e.$on("click",s),e.$on("dragend",r),{c(){V(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,u){T(e,o,u),t=!0},p(o,u){n=o;const _={};u[0]&8|u[1]&65536&&(_.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,_.lngLat=n[40].point,z(()=>l=!1)),e.$set(_)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){C(e.$$.fragment,o),t=!1},d(o){G(e,o)}}}function _l(n){let e,l;return e=new $t({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){V(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p:ut,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function ml(n){let e,l,t,i,s,r,c,o,u,_,L;e=new St({}),e.$on("click",n[12]);let v=n[1].mode!="editing"&&Ue(n);i=new Bt({props:{show:n[6],id:"route-map"}}),r=new Et({props:{map:n[0],beforeId:"route-map"}});let w=oe(n[3].criticalIssues),g=[];for(let a=0;a<w.length;a+=1)g[a]=Oe(Re(n,w,a));const B=a=>C(g[a],1,1,()=>{g[a]=null});let N=oe(n[3].policyConflictLog),f=[];for(let a=0;a<N.length;a+=1)f[a]=He(Me(n,N,a));const I=a=>C(f[a],1,1,()=>{f[a]=null});return _=new gt({props:{data:n[7],$$slots:{default:[_l]},$$scope:{ctx:n}}}),{c(){V(e.$$.fragment),l=M(),v&&v.c(),t=M(),V(i.$$.fragment),s=M(),V(r.$$.fragment),c=M();for(let a=0;a<g.length;a+=1)g[a].c();o=M();for(let a=0;a<f.length;a+=1)f[a].c();u=M(),V(_.$$.fragment)},l(a){q(e.$$.fragment,a),l=R(a),v&&v.l(a),t=R(a),q(i.$$.fragment,a),s=R(a),q(r.$$.fragment,a),c=R(a);for(let m=0;m<g.length;m+=1)g[m].l(a);o=R(a);for(let m=0;m<f.length;m+=1)f[m].l(a);u=R(a),q(_.$$.fragment,a)},m(a,m){T(e,a,m),h(a,l,m),v&&v.m(a,m),h(a,t,m),T(i,a,m),h(a,s,m),T(r,a,m),h(a,c,m);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(a,m);h(a,o,m);for(let S=0;S<f.length;S+=1)f[S]&&f[S].m(a,m);h(a,u,m),T(_,a,m),L=!0},p(a,m){a[1].mode!="editing"?v?(v.p(a,m),m[0]&2&&b(v,1)):(v=Ue(a),v.c(),b(v,1),v.m(t.parentNode,t)):v&&(ne(),C(v,1,1,()=>{v=null}),ie());const S={};m[0]&64&&(S.show=a[6]),i.$set(S);const k={};if(m[0]&1&&(k.map=a[0]),r.$set(k),m[0]&264){w=oe(a[3].criticalIssues);let A;for(A=0;A<w.length;A+=1){const te=Re(a,w,A);g[A]?(g[A].p(te,m),b(g[A],1)):(g[A]=Oe(te),g[A].c(),b(g[A],1),g[A].m(o.parentNode,o))}for(ne(),A=w.length;A<g.length;A+=1)B(A);ie()}if(m[0]&264){N=oe(a[3].policyConflictLog);let A;for(A=0;A<N.length;A+=1){const te=Me(a,N,A);f[A]?(f[A].p(te,m),b(f[A],1)):(f[A]=He(te),f[A].c(),b(f[A],1),f[A].m(u.parentNode,u))}for(ne(),A=N.length;A<f.length;A+=1)I(A);ie()}const Y={};m[0]&128&&(Y.data=a[7]),m[1]&65536&&(Y.$$scope={dirty:m,ctx:a}),_.$set(Y)},i(a){if(!L){b(e.$$.fragment,a),b(v),b(i.$$.fragment,a),b(r.$$.fragment,a);for(let m=0;m<w.length;m+=1)b(g[m]);for(let m=0;m<N.length;m+=1)b(f[m]);b(_.$$.fragment,a),L=!0}},o(a){C(e.$$.fragment,a),C(v),C(i.$$.fragment,a),C(r.$$.fragment,a),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)C(g[m]);f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)C(f[m]);C(_.$$.fragment,a),L=!1},d(a){a&&($(l),$(t),$(s),$(c),$(o),$(u)),G(e,a),v&&v.d(a),G(i,a),G(r,a),ve(g,a),ve(f,a),G(_,a)}}}function gl(n){let e,l,t,i,s,r,c,o,u,_,L;const v=[Ft,jt],w=[];function g(f,I){return f[1].mode!="editing"?0:1}t=g(n),i=w[t]=v[t](n);function B(f){n[36](f)}let N={$$slots:{default:[ml]},$$scope:{ctx:n}};return n[0]!==void 0&&(N.map=n[0]),c=new _t({props:N}),Z.push(()=>X(c,"map",B)),{c(){e=F("div"),l=F("div"),i.c(),s=M(),r=F("div"),V(c.$$.fragment),this.h()},l(f){e=U(f,"DIV",{style:!0});var I=j(e);l=U(I,"DIV",{style:!0});var a=j(l);i.l(a),a.forEach($),s=R(I),r=U(I,"DIV",{style:!0});var m=j(r);q(c.$$.fragment,m),m.forEach($),I.forEach($),this.h()},h(){O(l,"width","30%"),O(l,"overflow-y","scroll"),O(l,"padding","10px"),O(l,"border","1px solid black"),O(r,"position","relative"),O(r,"width","70%"),O(e,"display","flex"),O(e,"height","80vh")},m(f,I){h(f,e,I),D(e,l),w[t].m(l,null),n[27](l),D(e,s),D(e,r),T(c,r,null),u=!0,_||(L=at(Gt,"keydown",n[17]),_=!0)},p(f,I){let a=t;t=g(f),t===a?w[t].p(f,I):(ne(),C(w[a],1,1,()=>{w[a]=null}),ie(),i=w[t],i?i.p(f,I):(i=w[t]=v[t](f),i.c()),b(i,1),i.m(l,null));const m={};I[0]&203|I[1]&65536&&(m.$$scope={dirty:I,ctx:f}),!o&&I[0]&1&&(o=!0,m.map=f[0],z(()=>o=!1)),c.$set(m)},i(f){u||(b(i),b(c.$$.fragment,f),u=!0)},o(f){C(i),C(c.$$.fragment,f),u=!1},d(f){f&&$(e),w[t].d(),n[27](null),G(c),_=!1,L()}}}function $l(n,e,l){let t={type:"FeatureCollection",features:[]},i=e.mode=="editing"?e.id:l;if(i!=null){let s=i.kind=="critical"?n.criticalIssues:n.policyConflictLog;t.features.push(Ce(s[i.idx].point))}return t}function Ce(n){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}}function dl(n,e,l){let t,i,s;he(n,W,d=>l(3,i=d)),he(n,Pt,d=>l(38,s=d));let r,c,o={mode:"select"},u=s.url.searchParams.get("kind")||"";u=="critical"?o={mode:"new-critical"}:u=="conflict"&&(o={mode:"new-conflict"});let _=null,L=null,v=!1,w=!0;async function g(d){_=c.scrollTop,l(1,o={mode:"editing",id:d}),l(2,L=null),await we(),l(4,c.scrollTop=0,c)}async function B(d){_=c.scrollTop,l(1,o={mode:"editing",id:d}),l(2,L=null),await we(),l(4,c.scrollTop=0,c);let H=d.kind=="critical"?i.criticalIssues:i.policyConflictLog;r.flyTo({center:H[d.idx].point,duration:500})}async function N(){if(o.mode!="editing")return;let d=o.id,H=d.kind=="critical"?i.criticalIssues:i.policyConflictLog,le=JSON.parse(JSON.stringify(H[d.idx])),rt=r.getBounds().getWest(),st=r.getBounds().getEast();le.point[0]+=(st-rt)*.05;let Ee=H.toSpliced(d.idx+1,0,le);d.kind=="critical"?me(W,i.criticalIssues=Ee,i):me(W,i.policyConflictLog=Ee,i),await g({kind:d.kind,idx:d.idx+1})}async function f(){l(1,o={mode:"select"}),me(W,i.policyConflictLog=i.policyConflictLog.toSorted((d,H)=>De(d.conflict)-De(H.conflict)),i),me(W,i.criticalIssues=i.criticalIssues.toSorted((d,H)=>Pe(d.criticalIssue)-Pe(H.criticalIssue)),i),_!=null&&(await we(),l(4,c.scrollTop=_,c),_=null)}function I(d){if(!v&&o.mode!="select"){if(o.mode=="editing"){f();return}o.mode=="new-critical"?(me(W,i.criticalIssues=[...i.criticalIssues,{criticalIssue:s.url.searchParams.get("code")||"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),g({kind:"critical",idx:i.criticalIssues.length-1})):o.mode=="new-conflict"&&(me(W,i.policyConflictLog=[...i.policyConflictLog,{conflict:s.url.searchParams.get("code")||"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),g({kind:"conflict",idx:i.policyConflictLog.length-1}))}}ct(()=>{m(!1)});function a(){o.mode=="editing"&&window.confirm("Delete this entry?")&&(o.id.kind=="critical"?(i.criticalIssues.splice(o.id.idx,1),W.set(i)):(i.policyConflictLog.splice(o.id.idx,1),W.set(i)),f())}function m(d){let H={type:"FeatureCollection",features:[...i.criticalIssues.map(le=>Ce(le.point)),...i.policyConflictLog.map(le=>Ce(le.point)),...i.summary.networkMap.features]};H.features.length>0&&r.fitBounds(mt(H),{padding:20,animate:d})}function S(d){let H=d.criticalIssue?vt(d.criticalIssue):"Unknown critical";return d.locationName?`${H} (${d.locationName})`:H}function k(d){let H=d.conflict?"P00"+bt(d.conflict):"Unknown conflict";return d.locationName?`${H} (${d.locationName})`:H}function Y(d){if(o.mode=="editing"){let H=d.target.tagName,le=H=="INPUT"||H=="TEXTAREA";d.key=="Escape"||d.key=="Enter"&&!le?(d.stopPropagation(),f()):d.key=="Delete"&&!le&&(d.stopPropagation(),a())}else(o.mode=="new-critical"||o.mode=="new-conflict")&&d.key=="Escape"&&(d.stopPropagation(),l(1,o={mode:"select"}))}const A=()=>m(!0);function te(d){v=d,l(5,v)}function se(d){w=d,l(6,w)}const ge=d=>B({kind:"critical",idx:d}),ae=d=>l(2,L={kind:"critical",idx:d}),E=()=>l(2,L=null),$e=d=>B({kind:"conflict",idx:d}),ce=d=>l(2,L={kind:"conflict",idx:d}),p=()=>l(2,L=null);function y(d){Z[d?"unshift":"push"](()=>{c=d,l(4,c)})}const Q=()=>l(1,o={mode:"new-critical"}),x=()=>l(1,o={mode:"new-conflict"});function fe(d,H){n.$$.not_equal(H.point,d)&&(H.point=d,W.set(i))}const ue=d=>g({kind:"critical",idx:d}),tt=d=>g({kind:"critical",idx:d});function lt(d,H){n.$$.not_equal(H.point,d)&&(H.point=d,W.set(i))}const nt=d=>g({kind:"conflict",idx:d}),it=d=>g({kind:"conflict",idx:d});function ot(d){r=d,l(0,r)}return n.$$.update=()=>{n.$$.dirty[0]&3&&r&&(r.getCanvas().style.cursor=o.mode=="new-critical"||o.mode=="new-conflict"?"crosshair":"auto"),n.$$.dirty[0]&14&&l(7,t=$l(i,o,L))},[r,o,L,i,c,v,w,t,g,B,N,f,I,a,m,S,k,Y,A,te,se,ge,ae,E,$e,ce,p,y,Q,x,fe,ue,tt,lt,nt,it,ot]}class Hl extends Le{constructor(e){super(),Ne(this,e,dl,gl,Ie,{},null,[-1,-1])}}export{Hl as component};
