import{s as Ie,r as W,e as F,t as H,a as A,c as O,b as j,d as J,f as $,g as R,q as P,v as U,i as h,h as B,w as Z,k as he,y as ft,G as we,V as _e,D as ee,p as de,K as ve,j as oe,I as ct,O as ue,P as pe,n as ut}from"../chunks/scheduler.DGwhun8C.js";import{S as Le,i as Ne,e as Y,c as V,a as M,m as T,t as b,g as te,b as y,f as le,d as G}from"../chunks/index.B2vZYn3d.js";import{g as pt}from"../chunks/globals.D0QH3NT1.js";import{e as ie}from"../chunks/each.osbS1YKp.js";import{p as Se,c as Je}from"../chunks/colors.DaC397qr.js";import{p as Ke}from"../chunks/index.D5h8AASj.js";import{R as We}from"../chunks/Radio.D8KMGzwR.js";import"../chunks/index.BlF03Qz8.js";import{S as Ze}from"../chunks/Select.DcfUnd85.js";import{T as Ye}from"../chunks/TextArea.BH2E8a5P.js";import{T as Xe}from"../chunks/TextInput.BSkjgluj.js";import{s as K}from"../chunks/data.DLX9yqdH.js";import{l as be,n as ke,M as _t,o as mt,G as gt,b as $t,C as dt}from"../chunks/index.Bwt2brnW.js";import{c as ht,p as vt,b as De,e as Be,f as bt,g as kt}from"../chunks/lists.Bn2sGx3F.js";import{Y as Qe}from"../chunks/YesNo.CZMtcvwY.js";import{B as wt,C as yt,M as xe}from"../chunks/Marker.DzQ48FkG.js";import{D as Ct,C as It}from"../chunks/DefaultButton.C7m8wISe.js";import{I as ye,p as Lt,G as Nt}from"../chunks/pan.TFgbwpoG.js";import{S as et}from"../chunks/SecondaryButton.zQkvdoBX.js";import{W as St}from"../chunks/WarningButton.B3j9Frnm.js";import{G as Et,S as Dt,C as tt}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.C4vv5B7C.js";import"../chunks/index.BW3qyZrl.js";import"../chunks/paths.D2yDfqYT.js";import{p as Bt}from"../chunks/stores.DvQRjjaH.js";import"../chunks/entry.7EvL1GUF.js";import{R as Pt}from"../chunks/RouteMapLayer.wWf_Vz17.js";function Pe(n){let e,l,t;function i(r){n[5](r)}let s={label:"Resolved by Design",inlineSmall:!0};return n[1].criticalIssues[n[0]].resolved!==void 0&&(s.value=n[1].criticalIssues[n[0]].resolved),e=new Qe({props:s}),W.push(()=>Y(e,"value",i)),{c(){V(e.$$.fragment)},l(r){M(e.$$.fragment,r)},m(r,f){T(e,r,f),t=!0},p(r,f){const o={};!l&&f&3&&(l=!0,o.value=r[1].criticalIssues[r[0]].resolved,Z(()=>l=!1)),e.$set(o)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function qt(n){let e,l,t,i,s,r,f,o,c,_,v,k,C,g,q,N,u,L,a,m,S,w;function E(p){n[2](p)}let X={label:"Critical Issue",emptyOption:!0,choices:ht};n[1].criticalIssues[n[0]].criticalIssue!==void 0&&(X.value=n[1].criticalIssues[n[0]].criticalIssue),_=new Ze({props:X}),W.push(()=>Y(_,"value",E));function me(p){n[3](p)}let re={label:"Stage",choices:Ke(["Existing","Design"]),inlineSmall:!0};n[1].criticalIssues[n[0]].stage!==void 0&&(re.value=n[1].criticalIssues[n[0]].stage),C=new We({props:re}),W.push(()=>Y(C,"value",me));function ge(p){n[4](p)}let se={label:"Location Name"};n[1].criticalIssues[n[0]].locationName!==void 0&&(se.value=n[1].criticalIssues[n[0]].locationName),N=new Xe({props:se}),W.push(()=>Y(N,"value",ge));let D=n[1].criticalIssues[n[0]].stage!="Design"&&Pe(n);function $e(p){n[6](p)}let ae={label:"Commentary & Feedback"};return n[1].criticalIssues[n[0]].notes!==void 0&&(ae.value=n[1].criticalIssues[n[0]].notes),m=new Ye({props:ae}),W.push(()=>Y(m,"value",$e)),{c(){e=F("div"),l=F("a"),t=H("Google StreetView"),s=A(),r=F("a"),f=H("Bing Streetside"),c=A(),V(_.$$.fragment),k=A(),V(C.$$.fragment),q=A(),V(N.$$.fragment),L=A(),D&&D.c(),a=A(),V(m.$$.fragment),this.h()},l(p){e=O(p,"DIV",{style:!0});var I=j(e);l=O(I,"A",{href:!0,target:!0});var Q=j(l);t=J(Q,"Google StreetView"),Q.forEach($),s=R(I),r=O(I,"A",{href:!0,target:!0});var x=j(r);f=J(x,"Bing Streetside"),x.forEach($),I.forEach($),c=R(p),M(_.$$.fragment,p),k=R(p),M(C.$$.fragment,p),q=R(p),M(N.$$.fragment,p),L=R(p),D&&D.l(p),a=R(p),M(m.$$.fragment,p),this.h()},h(){P(l,"href",i=be(n[1].criticalIssues[n[0]].point)),P(l,"target","_blank"),P(r,"href",o=ke(n[1].criticalIssues[n[0]].point)),P(r,"target","_blank"),U(e,"display","flex"),U(e,"justify-content","space-evenly")},m(p,I){h(p,e,I),B(e,l),B(l,t),B(e,s),B(e,r),B(r,f),h(p,c,I),T(_,p,I),h(p,k,I),T(C,p,I),h(p,q,I),T(N,p,I),h(p,L,I),D&&D.m(p,I),h(p,a,I),T(m,p,I),w=!0},p(p,[I]){(!w||I&3&&i!==(i=be(p[1].criticalIssues[p[0]].point)))&&P(l,"href",i),(!w||I&3&&o!==(o=ke(p[1].criticalIssues[p[0]].point)))&&P(r,"href",o);const Q={};!v&&I&3&&(v=!0,Q.value=p[1].criticalIssues[p[0]].criticalIssue,Z(()=>v=!1)),_.$set(Q);const x={};!g&&I&3&&(g=!0,x.value=p[1].criticalIssues[p[0]].stage,Z(()=>g=!1)),C.$set(x);const fe={};!u&&I&3&&(u=!0,fe.value=p[1].criticalIssues[p[0]].locationName,Z(()=>u=!1)),N.$set(fe),p[1].criticalIssues[p[0]].stage!="Design"?D?(D.p(p,I),I&3&&b(D,1)):(D=Pe(p),D.c(),b(D,1),D.m(a.parentNode,a)):D&&(te(),y(D,1,1,()=>{D=null}),le());const ce={};!S&&I&3&&(S=!0,ce.value=p[1].criticalIssues[p[0]].notes,Z(()=>S=!1)),m.$set(ce)},i(p){w||(b(_.$$.fragment,p),b(C.$$.fragment,p),b(N.$$.fragment,p),b(D),b(m.$$.fragment,p),w=!0)},o(p){y(_.$$.fragment,p),y(C.$$.fragment,p),y(N.$$.fragment,p),y(D),y(m.$$.fragment,p),w=!1},d(p){p&&($(e),$(c),$(k),$(q),$(L),$(a)),G(_,p),G(C,p),G(N,p),D&&D.d(p),G(m,p)}}}function At(n,e,l){let t;he(n,K,_=>l(1,t=_));let{idx:i}=e;function s(_){n.$$.not_equal(t.criticalIssues[i].criticalIssue,_)&&(t.criticalIssues[i].criticalIssue=_,K.set(t))}function r(_){n.$$.not_equal(t.criticalIssues[i].stage,_)&&(t.criticalIssues[i].stage=_,K.set(t))}function f(_){n.$$.not_equal(t.criticalIssues[i].locationName,_)&&(t.criticalIssues[i].locationName=_,K.set(t))}function o(_){n.$$.not_equal(t.criticalIssues[i].resolved,_)&&(t.criticalIssues[i].resolved=_,K.set(t))}function c(_){n.$$.not_equal(t.criticalIssues[i].notes,_)&&(t.criticalIssues[i].notes=_,K.set(t))}return n.$$set=_=>{"idx"in _&&l(0,i=_.idx)},[i,t,s,r,f,o,c]}class Rt extends Le{constructor(e){super(),Ne(this,e,At,qt,Ie,{idx:0})}}function qe(n){let e,l,t;function i(r){n[5](r)}let s={label:"Resolved by Design",inlineSmall:!0};return n[1].policyConflictLog[n[0]].resolved!==void 0&&(s.value=n[1].policyConflictLog[n[0]].resolved),e=new Qe({props:s}),W.push(()=>Y(e,"value",i)),{c(){V(e.$$.fragment)},l(r){M(e.$$.fragment,r)},m(r,f){T(e,r,f),t=!0},p(r,f){const o={};!l&&f&3&&(l=!0,o.value=r[1].policyConflictLog[r[0]].resolved,Z(()=>l=!1)),e.$set(o)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function Vt(n){let e,l,t,i,s,r,f,o,c,_,v,k,C,g,q,N,u,L,a,m,S,w;function E(p){n[2](p)}let X={label:"Policy Conflict",emptyOption:!0,choices:vt};n[1].policyConflictLog[n[0]].conflict!==void 0&&(X.value=n[1].policyConflictLog[n[0]].conflict),_=new Ze({props:X}),W.push(()=>Y(_,"value",E));function me(p){n[3](p)}let re={label:"Stage",choices:Ke(["Existing","Design"]),inlineSmall:!0};n[1].policyConflictLog[n[0]].stage!==void 0&&(re.value=n[1].policyConflictLog[n[0]].stage),C=new We({props:re}),W.push(()=>Y(C,"value",me));function ge(p){n[4](p)}let se={label:"Location Name"};n[1].policyConflictLog[n[0]].locationName!==void 0&&(se.value=n[1].policyConflictLog[n[0]].locationName),N=new Xe({props:se}),W.push(()=>Y(N,"value",ge));let D=n[1].policyConflictLog[n[0]].stage!="Design"&&qe(n);function $e(p){n[6](p)}let ae={label:"Commentary & Feedback"};return n[1].policyConflictLog[n[0]].notes!==void 0&&(ae.value=n[1].policyConflictLog[n[0]].notes),m=new Ye({props:ae}),W.push(()=>Y(m,"value",$e)),{c(){e=F("div"),l=F("a"),t=H("Google StreetView"),s=A(),r=F("a"),f=H("Bing Streetside"),c=A(),V(_.$$.fragment),k=A(),V(C.$$.fragment),q=A(),V(N.$$.fragment),L=A(),D&&D.c(),a=A(),V(m.$$.fragment),this.h()},l(p){e=O(p,"DIV",{style:!0});var I=j(e);l=O(I,"A",{href:!0,target:!0});var Q=j(l);t=J(Q,"Google StreetView"),Q.forEach($),s=R(I),r=O(I,"A",{href:!0,target:!0});var x=j(r);f=J(x,"Bing Streetside"),x.forEach($),I.forEach($),c=R(p),M(_.$$.fragment,p),k=R(p),M(C.$$.fragment,p),q=R(p),M(N.$$.fragment,p),L=R(p),D&&D.l(p),a=R(p),M(m.$$.fragment,p),this.h()},h(){P(l,"href",i=be(n[1].policyConflictLog[n[0]].point)),P(l,"target","_blank"),P(r,"href",o=ke(n[1].policyConflictLog[n[0]].point)),P(r,"target","_blank"),U(e,"display","flex"),U(e,"justify-content","space-evenly")},m(p,I){h(p,e,I),B(e,l),B(l,t),B(e,s),B(e,r),B(r,f),h(p,c,I),T(_,p,I),h(p,k,I),T(C,p,I),h(p,q,I),T(N,p,I),h(p,L,I),D&&D.m(p,I),h(p,a,I),T(m,p,I),w=!0},p(p,[I]){(!w||I&3&&i!==(i=be(p[1].policyConflictLog[p[0]].point)))&&P(l,"href",i),(!w||I&3&&o!==(o=ke(p[1].policyConflictLog[p[0]].point)))&&P(r,"href",o);const Q={};!v&&I&3&&(v=!0,Q.value=p[1].policyConflictLog[p[0]].conflict,Z(()=>v=!1)),_.$set(Q);const x={};!g&&I&3&&(g=!0,x.value=p[1].policyConflictLog[p[0]].stage,Z(()=>g=!1)),C.$set(x);const fe={};!u&&I&3&&(u=!0,fe.value=p[1].policyConflictLog[p[0]].locationName,Z(()=>u=!1)),N.$set(fe),p[1].policyConflictLog[p[0]].stage!="Design"?D?(D.p(p,I),I&3&&b(D,1)):(D=qe(p),D.c(),b(D,1),D.m(a.parentNode,a)):D&&(te(),y(D,1,1,()=>{D=null}),le());const ce={};!S&&I&3&&(S=!0,ce.value=p[1].policyConflictLog[p[0]].notes,Z(()=>S=!1)),m.$set(ce)},i(p){w||(b(_.$$.fragment,p),b(C.$$.fragment,p),b(N.$$.fragment,p),b(D),b(m.$$.fragment,p),w=!0)},o(p){y(_.$$.fragment,p),y(C.$$.fragment,p),y(N.$$.fragment,p),y(D),y(m.$$.fragment,p),w=!1},d(p){p&&($(e),$(c),$(k),$(q),$(L),$(a)),G(_,p),G(C,p),G(N,p),D&&D.d(p),G(m,p)}}}function Mt(n,e,l){let t;he(n,K,_=>l(1,t=_));let{idx:i}=e;function s(_){n.$$.not_equal(t.policyConflictLog[i].conflict,_)&&(t.policyConflictLog[i].conflict=_,K.set(t))}function r(_){n.$$.not_equal(t.policyConflictLog[i].stage,_)&&(t.policyConflictLog[i].stage=_,K.set(t))}function f(_){n.$$.not_equal(t.policyConflictLog[i].locationName,_)&&(t.policyConflictLog[i].locationName=_,K.set(t))}function o(_){n.$$.not_equal(t.policyConflictLog[i].resolved,_)&&(t.policyConflictLog[i].resolved=_,K.set(t))}function c(_){n.$$.not_equal(t.policyConflictLog[i].notes,_)&&(t.policyConflictLog[i].notes=_,K.set(t))}return n.$$set=_=>{"idx"in _&&l(0,i=_.idx)},[i,t,s,r,f,o,c]}class Tt extends Le{constructor(e){super(),Ne(this,e,Mt,Vt,Ie,{idx:0})}}const{window:Gt}=pt;function Ae(n,e,l){const t=n.slice();return t[40]=e[l],t[41]=e,t[42]=l,t}function Re(n,e,l){const t=n.slice();return t[43]=e[l],t[44]=e,t[42]=l,t}function Ve(n,e,l){const t=n.slice();return t[40]=e[l],t[42]=l,t}function Me(n,e,l){const t=n.slice();return t[43]=e[l],t[42]=l,t}function jt(n){let e,l,t,i,s,r,f,o,c,_;e=new Ct({props:{$$slots:{default:[Ot]},$$scope:{ctx:n}}}),e.$on("click",n[11]),t=new St({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),t.$on("click",n[13]),s=new et({props:{$$slots:{default:[zt]},$$scope:{ctx:n}}}),s.$on("click",n[10]);const v=[Jt,Ht],k=[];function C(g,q){return g[1].id.kind=="critical"?0:1}return f=C(n),o=k[f]=v[f](n),{c(){V(e.$$.fragment),l=A(),V(t.$$.fragment),i=A(),V(s.$$.fragment),r=A(),o.c(),c=ee()},l(g){M(e.$$.fragment,g),l=R(g),M(t.$$.fragment,g),i=R(g),M(s.$$.fragment,g),r=R(g),o.l(g),c=ee()},m(g,q){T(e,g,q),h(g,l,q),T(t,g,q),h(g,i,q),T(s,g,q),h(g,r,q),k[f].m(g,q),h(g,c,q),_=!0},p(g,q){const N={};q[1]&65536&&(N.$$scope={dirty:q,ctx:g}),e.$set(N);const u={};q[1]&65536&&(u.$$scope={dirty:q,ctx:g}),t.$set(u);const L={};q[1]&65536&&(L.$$scope={dirty:q,ctx:g}),s.$set(L);let a=f;f=C(g),f===a?k[f].p(g,q):(te(),y(k[a],1,1,()=>{k[a]=null}),le(),o=k[f],o?o.p(g,q):(o=k[f]=v[f](g),o.c()),b(o,1),o.m(c.parentNode,c))},i(g){_||(b(e.$$.fragment,g),b(t.$$.fragment,g),b(s.$$.fragment,g),b(o),_=!0)},o(g){y(e.$$.fragment,g),y(t.$$.fragment,g),y(s.$$.fragment,g),y(o),_=!1},d(g){g&&($(l),$(i),$(r),$(c)),G(e,g),G(t,g),G(s,g),k[f].d(g)}}}function Ft(n){let e,l,t,i,s="Critical Issue Log",r,f,o,c,_="Policy Conflict Log",v,k;e=new It({props:{label:"Map tools",$$slots:{default:[Zt]},$$scope:{ctx:n}}});let C=ie(n[3].criticalIssues),g=[];for(let a=0;a<C.length;a+=1)g[a]=Ge(Me(n,C,a));const q=a=>y(g[a],1,1,()=>{g[a]=null});let N=ie(n[3].policyConflictLog),u=[];for(let a=0;a<N.length;a+=1)u[a]=Fe(Ve(n,N,a));const L=a=>y(u[a],1,1,()=>{u[a]=null});return{c(){V(e.$$.fragment),l=A(),t=F("div"),i=F("h3"),i.textContent=s,r=A();for(let a=0;a<g.length;a+=1)g[a].c();f=A(),o=F("div"),c=F("h3"),c.textContent=_,v=A();for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){M(e.$$.fragment,a),l=R(a),t=O(a,"DIV",{style:!0});var m=j(t);i=O(m,"H3",{"data-svelte-h":!0}),de(i)!=="svelte-e9mkko"&&(i.textContent=s),r=R(m);for(let w=0;w<g.length;w+=1)g[w].l(m);m.forEach($),f=R(a),o=O(a,"DIV",{style:!0});var S=j(o);c=O(S,"H3",{"data-svelte-h":!0}),de(c)!=="svelte-y008oc"&&(c.textContent=_),v=R(S);for(let w=0;w<u.length;w+=1)u[w].l(S);S.forEach($),this.h()},h(){U(t,"background-color","grey"),U(t,"padding","4px"),U(o,"background-color",Se),U(o,"padding","4px")},m(a,m){T(e,a,m),h(a,l,m),h(a,t,m),B(t,i),B(t,r);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(t,null);h(a,f,m),h(a,o,m),B(o,c),B(o,v);for(let S=0;S<u.length;S+=1)u[S]&&u[S].m(o,null);k=!0},p(a,m){const S={};if(m[0]&97|m[1]&65536&&(S.$$scope={dirty:m,ctx:a}),e.$set(S),m[0]&33292){C=ie(a[3].criticalIssues);let w;for(w=0;w<C.length;w+=1){const E=Me(a,C,w);g[w]?(g[w].p(E,m),b(g[w],1)):(g[w]=Ge(E),g[w].c(),b(g[w],1),g[w].m(t,null))}for(te(),w=C.length;w<g.length;w+=1)q(w);le()}if(m[0]&66060){N=ie(a[3].policyConflictLog);let w;for(w=0;w<N.length;w+=1){const E=Ve(a,N,w);u[w]?(u[w].p(E,m),b(u[w],1)):(u[w]=Fe(E),u[w].c(),b(u[w],1),u[w].m(o,null))}for(te(),w=N.length;w<u.length;w+=1)L(w);le()}},i(a){if(!k){b(e.$$.fragment,a);for(let m=0;m<C.length;m+=1)b(g[m]);for(let m=0;m<N.length;m+=1)b(u[m]);k=!0}},o(a){y(e.$$.fragment,a),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)y(g[m]);u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)y(u[m]);k=!1},d(a){a&&($(l),$(t),$(f),$(o)),G(e,a),ve(g,a),ve(u,a)}}}function Ot(n){let e;return{c(){e=H("Save")},l(l){e=J(l,"Save")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Ut(n){let e;return{c(){e=H("Delete")},l(l){e=J(l,"Delete")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function zt(n){let e;return{c(){e=H("Copy")},l(l){e=J(l,"Copy")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Ht(n){let e,l;return e=new Tt({props:{idx:n[1].id.idx}}),{c(){V(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&2&&(s.idx=t[1].id.idx),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Jt(n){let e,l;return e=new Rt({props:{idx:n[1].id.idx}}),{c(){V(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&2&&(s.idx=t[1].id.idx),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Kt(n){let e;return{c(){e=H("Zoom to fit")},l(l){e=J(l,"Zoom to fit")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Wt(n){let e;return{c(){e=H("Show route")},l(l){e=J(l,"Show route")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function Zt(n){let e,l,t,i,s,r,f,o,c,_,v,k;e=new et({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),e.$on("click",n[18]),t=new wt({}),s=new Et({});function C(u){n[19](u)}let g={map:n[0]};n[5]!==void 0&&(g.enabled=n[5]),f=new Dt({props:g}),W.push(()=>Y(f,"enabled",C));function q(u){n[20](u)}let N={$$slots:{default:[Wt]},$$scope:{ctx:n}};return n[6]!==void 0&&(N.checked=n[6]),_=new yt({props:N}),W.push(()=>Y(_,"checked",q)),{c(){V(e.$$.fragment),l=A(),V(t.$$.fragment),i=A(),V(s.$$.fragment),r=A(),V(f.$$.fragment),c=A(),V(_.$$.fragment)},l(u){M(e.$$.fragment,u),l=R(u),M(t.$$.fragment,u),i=R(u),M(s.$$.fragment,u),r=R(u),M(f.$$.fragment,u),c=R(u),M(_.$$.fragment,u)},m(u,L){T(e,u,L),h(u,l,L),T(t,u,L),h(u,i,L),T(s,u,L),h(u,r,L),T(f,u,L),h(u,c,L),T(_,u,L),k=!0},p(u,L){const a={};L[1]&65536&&(a.$$scope={dirty:L,ctx:u}),e.$set(a);const m={};L[0]&1&&(m.map=u[0]),!o&&L[0]&32&&(o=!0,m.enabled=u[5],Z(()=>o=!1)),f.$set(m);const S={};L[1]&65536&&(S.$$scope={dirty:L,ctx:u}),!v&&L[0]&64&&(v=!0,S.checked=u[6],Z(()=>v=!1)),_.$set(S)},i(u){k||(b(e.$$.fragment,u),b(t.$$.fragment,u),b(s.$$.fragment,u),b(f.$$.fragment,u),b(_.$$.fragment,u),k=!0)},o(u){y(e.$$.fragment,u),y(t.$$.fragment,u),y(s.$$.fragment,u),y(f.$$.fragment,u),y(_.$$.fragment,u),k=!1},d(u){u&&($(l),$(i),$(r),$(c)),G(e,u),G(t,u),G(s,u),G(f,u),G(_,u)}}}function Te(n){let e;function l(s,r){return s[43].resolved=="No"?Xt:Yt}let t=l(n),i=t(n);return{c(){i.c(),e=ee()},l(s){i.l(s),e=ee()},m(s,r){i.m(s,r),h(s,e,r)},p(s,r){t===(t=l(s))&&i?i.p(s,r):(i.d(1),i=t(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&$(e),i.d(s)}}}function Yt(n){let e,l,t=n[43].resolved+"",i;return{c(){e=F("span"),l=H("Resolved: "),i=H(t)},l(s){e=O(s,"SPAN",{});var r=j(e);l=J(r,"Resolved: "),i=J(r,t),r.forEach($)},m(s,r){h(s,e,r),B(e,l),B(e,i)},p(s,r){r[0]&8&&t!==(t=s[43].resolved+"")&&oe(i,t)},d(s){s&&$(e)}}}function Xt(n){let e,l,t,i=n[43].resolved+"",s;return{c(){e=F("span"),l=F("b"),t=H("Resolved: "),s=H(i)},l(r){e=O(r,"SPAN",{});var f=j(e);l=O(f,"B",{});var o=j(l);t=J(o,"Resolved: "),s=J(o,i),o.forEach($),f.forEach($)},m(r,f){h(r,e,f),B(e,l),B(l,t),B(l,s)},p(r,f){f[0]&8&&i!==(i=r[43].resolved+"")&&oe(s,i)},d(r){r&&$(e)}}}function Qt(n){let e,l,t,i=n[43].stage+"",s,r,f,o=n[43].stage!="Design"&&Te(n);return{c(){e=F("div"),l=F("span"),t=H("Stage: "),s=H(i),r=A(),o&&o.c(),f=A(),this.h()},l(c){e=O(c,"DIV",{style:!0});var _=j(e);l=O(_,"SPAN",{});var v=j(l);t=J(v,"Stage: "),s=J(v,i),v.forEach($),r=R(_),o&&o.l(_),_.forEach($),f=R(c),this.h()},h(){U(e,"width","100%"),U(e,"display","flex"),U(e,"justify-content","space-between")},m(c,_){h(c,e,_),B(e,l),B(l,t),B(l,s),B(e,r),o&&o.m(e,null),h(c,f,_)},p(c,_){_[0]&8&&i!==(i=c[43].stage+"")&&oe(s,i),c[43].stage!="Design"?o?o.p(c,_):(o=Te(c),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(c){c&&($(e),$(f)),o&&o.d()}}}function Ge(n){let e,l;function t(){return n[21](n[42])}function i(){return n[22](n[42])}return e=new tt({props:{name:n[15](n[43]),$$slots:{default:[Qt]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",i),e.$on("mouseleave",n[23]),{c(){V(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,r){T(e,s,r),l=!0},p(s,r){n=s;const f={};r[0]&8&&(f.name=n[15](n[43])),r[0]&8|r[1]&65536&&(f.$$scope={dirty:r,ctx:n}),e.$set(f)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function je(n){let e;function l(s,r){return s[40].resolved=="No"?el:xt}let t=l(n),i=t(n);return{c(){i.c(),e=ee()},l(s){i.l(s),e=ee()},m(s,r){i.m(s,r),h(s,e,r)},p(s,r){t===(t=l(s))&&i?i.p(s,r):(i.d(1),i=t(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&$(e),i.d(s)}}}function xt(n){let e,l,t=n[40].resolved+"",i;return{c(){e=F("span"),l=H("Resolved: "),i=H(t)},l(s){e=O(s,"SPAN",{});var r=j(e);l=J(r,"Resolved: "),i=J(r,t),r.forEach($)},m(s,r){h(s,e,r),B(e,l),B(e,i)},p(s,r){r[0]&8&&t!==(t=s[40].resolved+"")&&oe(i,t)},d(s){s&&$(e)}}}function el(n){let e,l,t,i=n[40].resolved+"",s;return{c(){e=F("span"),l=F("b"),t=H("Resolved: "),s=H(i)},l(r){e=O(r,"SPAN",{});var f=j(e);l=O(f,"B",{});var o=j(l);t=J(o,"Resolved: "),s=J(o,i),o.forEach($),f.forEach($)},m(r,f){h(r,e,f),B(e,l),B(l,t),B(l,s)},p(r,f){f[0]&8&&i!==(i=r[40].resolved+"")&&oe(s,i)},d(r){r&&$(e)}}}function tl(n){let e,l,t,i=n[40].stage+"",s,r,f,o=n[40].stage!="Design"&&je(n);return{c(){e=F("div"),l=F("span"),t=H("Stage: "),s=H(i),r=A(),o&&o.c(),f=A(),this.h()},l(c){e=O(c,"DIV",{style:!0});var _=j(e);l=O(_,"SPAN",{});var v=j(l);t=J(v,"Stage: "),s=J(v,i),v.forEach($),r=R(_),o&&o.l(_),_.forEach($),f=R(c),this.h()},h(){U(e,"width","100%"),U(e,"display","flex"),U(e,"justify-content","space-between")},m(c,_){h(c,e,_),B(e,l),B(l,t),B(l,s),B(e,r),o&&o.m(e,null),h(c,f,_)},p(c,_){_[0]&8&&i!==(i=c[40].stage+"")&&oe(s,i),c[40].stage!="Design"?o?o.p(c,_):(o=je(c),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(c){c&&($(e),$(f)),o&&o.d()}}}function Fe(n){let e,l;function t(){return n[24](n[42])}function i(){return n[25](n[42])}return e=new tt({props:{name:n[16](n[40]),$$slots:{default:[tl]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",i),e.$on("mouseleave",n[26]),{c(){V(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,r){T(e,s,r),l=!0},p(s,r){n=s;const f={};r[0]&8&&(f.name=n[16](n[40])),r[0]&8|r[1]&65536&&(f.$$scope={dirty:r,ctx:n}),e.$set(f)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function Oe(n){let e,l,t,i,s,r,f;return l=new ye({props:{$$slots:{default:[il]},$$scope:{ctx:n}}}),l.$on("click",n[11]),i=new ye({props:{$$slots:{default:[sl]},$$scope:{ctx:n}}}),i.$on("click",n[28]),r=new ye({props:{$$slots:{default:[cl]},$$scope:{ctx:n}}}),r.$on("click",n[29]),{c(){e=F("div"),V(l.$$.fragment),t=A(),V(i.$$.fragment),s=A(),V(r.$$.fragment),this.h()},l(o){e=O(o,"DIV",{class:!0});var c=j(e);M(l.$$.fragment,c),t=R(c),M(i.$$.fragment,c),s=R(c),M(r.$$.fragment,c),c.forEach($),this.h()},h(){P(e,"class","control-panel svelte-70vzbr")},m(o,c){h(o,e,c),T(l,e,null),B(e,t),T(i,e,null),B(e,s),T(r,e,null),f=!0},p(o,c){const _={};c[0]&2|c[1]&65536&&(_.$$scope={dirty:c,ctx:o}),l.$set(_);const v={};c[0]&2|c[1]&65536&&(v.$$scope={dirty:c,ctx:o}),i.$set(v);const k={};c[0]&2|c[1]&65536&&(k.$$scope={dirty:c,ctx:o}),r.$set(k)},i(o){f||(b(l.$$.fragment,o),b(i.$$.fragment,o),b(r.$$.fragment,o),f=!0)},o(o){y(l.$$.fragment,o),y(i.$$.fragment,o),y(r.$$.fragment,o),f=!1},d(o){o&&$(e),G(l),G(i),G(r)}}}function ll(n){let e;return{c(){e=H("Move map")},l(l){e=J(l,"Move map")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function nl(n){let e,l="Move map";return{c(){e=F("b"),e.textContent=l},l(t){e=O(t,"B",{"data-svelte-h":!0}),de(e)!=="svelte-ydcbkl"&&(e.textContent=l)},m(t,i){h(t,e,i)},d(t){t&&$(e)}}}function il(n){let e,l,t,i;function s(o,c){return o[1].mode=="select"?nl:ll}let r=s(n),f=r(n);return{c(){e=F("img"),t=A(),f.c(),i=ee(),this.h()},l(o){e=O(o,"IMG",{src:!0,alt:!0,style:!0}),t=R(o),f.l(o),i=ee(),this.h()},h(){ct(e.src,l=Lt)||P(e,"src",l),P(e,"alt","Move map"),U(e,"vertical-align","middle")},m(o,c){h(o,e,c),h(o,t,c),f.m(o,c),h(o,i,c)},p(o,c){r!==(r=s(o))&&(f.d(1),f=r(o),f&&(f.c(),f.m(i.parentNode,i)))},d(o){o&&($(e),$(t),$(i)),f.d(o)}}}function ol(n){let e;return{c(){e=H("New critical issue")},l(l){e=J(l,"New critical issue")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function rl(n){let e,l="New critical issue";return{c(){e=F("b"),e.textContent=l},l(t){e=O(t,"B",{"data-svelte-h":!0}),de(e)!=="svelte-1q9dhgs"&&(e.textContent=l)},m(t,i){h(t,e,i)},d(t){t&&$(e)}}}function sl(n){let e,l,t,i;function s(o,c){return o[1].mode=="new-critical"?rl:ol}let r=s(n),f=r(n);return{c(){e=ue("svg"),l=ue("rect"),t=A(),f.c(),i=ee(),this.h()},l(o){e=pe(o,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var c=j(e);l=pe(c,"rect",{width:!0,height:!0,fill:!0,class:!0}),j(l).forEach($),c.forEach($),t=R(o),f.l(o),i=ee(),this.h()},h(){P(l,"width","24"),P(l,"height","24"),P(l,"fill",Je.critical.background),P(l,"class","svelte-70vzbr"),P(e,"width","24"),P(e,"height","24"),P(e,"xmlns","http://www.w3.org/2000/svg"),U(e,"vertical-align","middle")},m(o,c){h(o,e,c),B(e,l),h(o,t,c),f.m(o,c),h(o,i,c)},p(o,c){r!==(r=s(o))&&(f.d(1),f=r(o),f&&(f.c(),f.m(i.parentNode,i)))},d(o){o&&($(e),$(t),$(i)),f.d(o)}}}function al(n){let e;return{c(){e=H("New policy conflict")},l(l){e=J(l,"New policy conflict")},m(l,t){h(l,e,t)},d(l){l&&$(e)}}}function fl(n){let e,l="New policy conflict";return{c(){e=F("b"),e.textContent=l},l(t){e=O(t,"B",{"data-svelte-h":!0}),de(e)!=="svelte-pf83jq"&&(e.textContent=l)},m(t,i){h(t,e,i)},d(t){t&&$(e)}}}function cl(n){let e,l,t,i;function s(o,c){return o[1].mode=="new-conflict"?fl:al}let r=s(n),f=r(n);return{c(){e=ue("svg"),l=ue("circle"),t=A(),f.c(),i=ee(),this.h()},l(o){e=pe(o,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var c=j(e);l=pe(c,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),j(l).forEach($),c.forEach($),t=R(o),f.l(o),i=ee(),this.h()},h(){P(l,"cx","12"),P(l,"cy","12"),P(l,"r","12"),P(l,"fill",Se),P(e,"width","24"),P(e,"height","24"),P(e,"xmlns","http://www.w3.org/2000/svg"),U(e,"vertical-align","middle")},m(o,c){h(o,e,c),B(e,l),h(o,t,c),f.m(o,c),h(o,i,c)},p(o,c){r!==(r=s(o))&&(f.d(1),f=r(o),f&&(f.c(),f.m(i.parentNode,i)))},d(o){o&&($(e),$(t),$(i)),f.d(o)}}}function Ue(n){let e,l;return e=new Nt({props:{map:n[0],beforeId:"route-map"}}),{c(){V(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&1&&(s.map=t[0]),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function ul(n){let e,l,t,i=n[43].criticalIssue+"",s;return{c(){e=ue("svg"),l=ue("rect"),t=ue("text"),s=H(i),this.h()},l(r){e=pe(r,"svg",{width:!0,height:!0,xmlns:!0});var f=j(e);l=pe(f,"rect",{width:!0,height:!0,fill:!0,class:!0}),j(l).forEach($),t=pe(f,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0});var o=j(t);s=J(o,i),o.forEach($),f.forEach($),this.h()},h(){P(l,"width","40"),P(l,"height","40"),P(l,"fill",Je.critical.background),P(l,"class","svelte-70vzbr"),P(t,"x","50%"),P(t,"y","50%"),P(t,"dominant-baseline","middle"),P(t,"text-anchor","middle"),U(t,"fill","white"),U(t,"font","bold 15px sans-serif"),P(e,"width","40"),P(e,"height","40"),P(e,"xmlns","http://www.w3.org/2000/svg")},m(r,f){h(r,e,f),B(e,l),B(e,t),B(t,s)},p(r,f){f[0]&8&&i!==(i=r[43].criticalIssue+"")&&oe(s,i)},d(r){r&&$(e)}}}function ze(n){let e,l,t;function i(o){n[30](o,n[43])}function s(){return n[31](n[42])}function r(){return n[32](n[42])}let f={draggable:!0,$$slots:{default:[ul]},$$scope:{ctx:n}};return n[43].point!==void 0&&(f.lngLat=n[43].point),e=new xe({props:f}),W.push(()=>Y(e,"lngLat",i)),e.$on("click",s),e.$on("dragend",r),{c(){V(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,c){T(e,o,c),t=!0},p(o,c){n=o;const _={};c[0]&8|c[1]&65536&&(_.$$scope={dirty:c,ctx:n}),!l&&c[0]&8&&(l=!0,_.lngLat=n[43].point,Z(()=>l=!1)),e.$set(_)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){G(e,o)}}}function pl(n){let e,l=n[40].conflict+"",t;return{c(){e=F("span"),t=H(l),this.h()},l(i){e=O(i,"SPAN",{class:!0});var s=j(e);t=J(s,l),s.forEach($),this.h()},h(){P(e,"class","dot svelte-70vzbr"),U(e,"background",Se)},m(i,s){h(i,e,s),B(e,t)},p(i,s){s[0]&8&&l!==(l=i[40].conflict+"")&&oe(t,l)},d(i){i&&$(e)}}}function He(n){let e,l,t;function i(o){n[33](o,n[40])}function s(){return n[34](n[42])}function r(){return n[35](n[42])}let f={draggable:!0,$$slots:{default:[pl]},$$scope:{ctx:n}};return n[40].point!==void 0&&(f.lngLat=n[40].point),e=new xe({props:f}),W.push(()=>Y(e,"lngLat",i)),e.$on("click",s),e.$on("dragend",r),{c(){V(e.$$.fragment)},l(o){M(e.$$.fragment,o)},m(o,c){T(e,o,c),t=!0},p(o,c){n=o;const _={};c[0]&8|c[1]&65536&&(_.$$scope={dirty:c,ctx:n}),!l&&c[0]&8&&(l=!0,_.lngLat=n[40].point,Z(()=>l=!1)),e.$set(_)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){G(e,o)}}}function _l(n){let e,l;return e=new dt({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){V(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p:ut,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function ml(n){let e,l,t,i,s,r,f,o,c,_;e=new mt({}),e.$on("click",n[12]);let v=n[1].mode!="editing"&&Oe(n);i=new Pt({props:{show:n[6],id:"route-map"}});let k=n[0]&&Ue(n),C=ie(n[3].criticalIssues),g=[];for(let a=0;a<C.length;a+=1)g[a]=ze(Re(n,C,a));const q=a=>y(g[a],1,1,()=>{g[a]=null});let N=ie(n[3].policyConflictLog),u=[];for(let a=0;a<N.length;a+=1)u[a]=He(Ae(n,N,a));const L=a=>y(u[a],1,1,()=>{u[a]=null});return c=new gt({props:{data:n[7],$$slots:{default:[_l]},$$scope:{ctx:n}}}),{c(){V(e.$$.fragment),l=A(),v&&v.c(),t=A(),V(i.$$.fragment),s=A(),k&&k.c(),r=A();for(let a=0;a<g.length;a+=1)g[a].c();f=A();for(let a=0;a<u.length;a+=1)u[a].c();o=A(),V(c.$$.fragment)},l(a){M(e.$$.fragment,a),l=R(a),v&&v.l(a),t=R(a),M(i.$$.fragment,a),s=R(a),k&&k.l(a),r=R(a);for(let m=0;m<g.length;m+=1)g[m].l(a);f=R(a);for(let m=0;m<u.length;m+=1)u[m].l(a);o=R(a),M(c.$$.fragment,a)},m(a,m){T(e,a,m),h(a,l,m),v&&v.m(a,m),h(a,t,m),T(i,a,m),h(a,s,m),k&&k.m(a,m),h(a,r,m);for(let S=0;S<g.length;S+=1)g[S]&&g[S].m(a,m);h(a,f,m);for(let S=0;S<u.length;S+=1)u[S]&&u[S].m(a,m);h(a,o,m),T(c,a,m),_=!0},p(a,m){a[1].mode!="editing"?v?(v.p(a,m),m[0]&2&&b(v,1)):(v=Oe(a),v.c(),b(v,1),v.m(t.parentNode,t)):v&&(te(),y(v,1,1,()=>{v=null}),le());const S={};if(m[0]&64&&(S.show=a[6]),i.$set(S),a[0]?k?(k.p(a,m),m[0]&1&&b(k,1)):(k=Ue(a),k.c(),b(k,1),k.m(r.parentNode,r)):k&&(te(),y(k,1,1,()=>{k=null}),le()),m[0]&264){C=ie(a[3].criticalIssues);let E;for(E=0;E<C.length;E+=1){const X=Re(a,C,E);g[E]?(g[E].p(X,m),b(g[E],1)):(g[E]=ze(X),g[E].c(),b(g[E],1),g[E].m(f.parentNode,f))}for(te(),E=C.length;E<g.length;E+=1)q(E);le()}if(m[0]&264){N=ie(a[3].policyConflictLog);let E;for(E=0;E<N.length;E+=1){const X=Ae(a,N,E);u[E]?(u[E].p(X,m),b(u[E],1)):(u[E]=He(X),u[E].c(),b(u[E],1),u[E].m(o.parentNode,o))}for(te(),E=N.length;E<u.length;E+=1)L(E);le()}const w={};m[0]&128&&(w.data=a[7]),m[1]&65536&&(w.$$scope={dirty:m,ctx:a}),c.$set(w)},i(a){if(!_){b(e.$$.fragment,a),b(v),b(i.$$.fragment,a),b(k);for(let m=0;m<C.length;m+=1)b(g[m]);for(let m=0;m<N.length;m+=1)b(u[m]);b(c.$$.fragment,a),_=!0}},o(a){y(e.$$.fragment,a),y(v),y(i.$$.fragment,a),y(k),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)y(g[m]);u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)y(u[m]);y(c.$$.fragment,a),_=!1},d(a){a&&($(l),$(t),$(s),$(r),$(f),$(o)),G(e,a),v&&v.d(a),G(i,a),k&&k.d(a),ve(g,a),ve(u,a),G(c,a)}}}function gl(n){let e,l,t,i,s,r,f,o,c,_,v;const k=[Ft,jt],C=[];function g(u,L){return u[1].mode!="editing"?0:1}t=g(n),i=C[t]=k[t](n);function q(u){n[36](u)}let N={$$slots:{default:[ml]},$$scope:{ctx:n}};return n[0]!==void 0&&(N.map=n[0]),f=new _t({props:N}),W.push(()=>Y(f,"map",q)),{c(){e=F("div"),l=F("div"),i.c(),s=A(),r=F("div"),V(f.$$.fragment),this.h()},l(u){e=O(u,"DIV",{style:!0});var L=j(e);l=O(L,"DIV",{style:!0});var a=j(l);i.l(a),a.forEach($),s=R(L),r=O(L,"DIV",{style:!0});var m=j(r);M(f.$$.fragment,m),m.forEach($),L.forEach($),this.h()},h(){U(l,"width","30%"),U(l,"overflow-y","scroll"),U(l,"padding","10px"),U(l,"border","1px solid black"),U(r,"position","relative"),U(r,"width","70%"),U(e,"display","flex"),U(e,"height","80vh")},m(u,L){h(u,e,L),B(e,l),C[t].m(l,null),n[27](l),B(e,s),B(e,r),T(f,r,null),c=!0,_||(v=ft(Gt,"keydown",n[17]),_=!0)},p(u,L){let a=t;t=g(u),t===a?C[t].p(u,L):(te(),y(C[a],1,1,()=>{C[a]=null}),le(),i=C[t],i?i.p(u,L):(i=C[t]=k[t](u),i.c()),b(i,1),i.m(l,null));const m={};L[0]&203|L[1]&65536&&(m.$$scope={dirty:L,ctx:u}),!o&&L[0]&1&&(o=!0,m.map=u[0],Z(()=>o=!1)),f.$set(m)},i(u){c||(b(i),b(f.$$.fragment,u),c=!0)},o(u){y(i),y(f.$$.fragment,u),c=!1},d(u){u&&$(e),C[t].d(),n[27](null),G(f),_=!1,v()}}}function $l(n,e,l){let t={type:"FeatureCollection",features:[]},i=e.mode=="editing"?e.id:l;if(i!=null){let s=i.kind=="critical"?n.criticalIssues:n.policyConflictLog;t.features.push(Ce(s[i.idx].point))}return t}function Ce(n){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}}function dl(n,e,l){let t,i,s;he(n,K,d=>l(3,i=d)),he(n,Bt,d=>l(38,s=d));let r,f,o={mode:"select"},c=s.url.searchParams.get("kind")||"";c=="critical"?o={mode:"new-critical"}:c=="conflict"&&(o={mode:"new-conflict"});let _=null,v=null,k=!1,C=!0;async function g(d){_=f.scrollTop,l(1,o={mode:"editing",id:d}),l(2,v=null),await we(),l(4,f.scrollTop=0,f)}async function q(d){_=f.scrollTop,l(1,o={mode:"editing",id:d}),l(2,v=null),await we(),l(4,f.scrollTop=0,f);let z=d.kind=="critical"?i.criticalIssues:i.policyConflictLog;r==null||r.flyTo({center:z[d.idx].point,duration:500})}async function N(){if(o.mode!="editing"||!r)return;let d=o.id,z=d.kind=="critical"?i.criticalIssues:i.policyConflictLog,ne=JSON.parse(JSON.stringify(z[d.idx])),st=r.getBounds().getWest(),at=r.getBounds().getEast();ne.point[0]+=(at-st)*.05;let Ee=z.toSpliced(d.idx+1,0,ne);d.kind=="critical"?_e(K,i.criticalIssues=Ee,i):_e(K,i.policyConflictLog=Ee,i),await g({kind:d.kind,idx:d.idx+1})}async function u(){l(1,o={mode:"select"}),_e(K,i.policyConflictLog=i.policyConflictLog.toSorted((d,z)=>De(d.conflict)-De(z.conflict)),i),_e(K,i.criticalIssues=i.criticalIssues.toSorted((d,z)=>Be(d.criticalIssue)-Be(z.criticalIssue)),i),_!=null&&(await we(),l(4,f.scrollTop=_,f),_=null)}function L(d){if(!k&&o.mode!="select"){if(o.mode=="editing"){u();return}o.mode=="new-critical"?(_e(K,i.criticalIssues=[...i.criticalIssues,{criticalIssue:s.url.searchParams.get("code")||"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),g({kind:"critical",idx:i.criticalIssues.length-1})):o.mode=="new-conflict"&&(_e(K,i.policyConflictLog=[...i.policyConflictLog,{conflict:s.url.searchParams.get("code")||"",stage:"",point:d.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),g({kind:"conflict",idx:i.policyConflictLog.length-1}))}}function a(){o.mode=="editing"&&window.confirm("Delete this entry?")&&(o.id.kind=="critical"?(i.criticalIssues.splice(o.id.idx,1),K.set(i)):(i.policyConflictLog.splice(o.id.idx,1),K.set(i)),u())}function m(d){if(!r)return;let z={type:"FeatureCollection",features:[...i.criticalIssues.map(ne=>Ce(ne.point)),...i.policyConflictLog.map(ne=>Ce(ne.point)),...i.summary.networkMap.features]};z.features.length>0&&r.fitBounds($t(z),{padding:20,animate:d})}function S(d){let z=d.criticalIssue?bt(d.criticalIssue):"Unknown critical";return d.locationName?`${z} (${d.locationName})`:z}function w(d){let z=d.conflict?"P00"+kt(d.conflict):"Unknown conflict";return d.locationName?`${z} (${d.locationName})`:z}function E(d){if(o.mode=="editing"){let z=d.target.tagName,ne=z=="INPUT"||z=="TEXTAREA";d.key=="Escape"||d.key=="Enter"&&!ne?(d.stopPropagation(),u()):d.key=="Delete"&&!ne&&(d.stopPropagation(),a())}else(o.mode=="new-critical"||o.mode=="new-conflict")&&d.key=="Escape"&&(d.stopPropagation(),l(1,o={mode:"select"}))}const X=()=>m(!0);function me(d){k=d,l(5,k)}function re(d){C=d,l(6,C)}const ge=d=>q({kind:"critical",idx:d}),se=d=>l(2,v={kind:"critical",idx:d}),D=()=>l(2,v=null),$e=d=>q({kind:"conflict",idx:d}),ae=d=>l(2,v={kind:"conflict",idx:d}),p=()=>l(2,v=null);function I(d){W[d?"unshift":"push"](()=>{f=d,l(4,f)})}const Q=()=>l(1,o={mode:"new-critical"}),x=()=>l(1,o={mode:"new-conflict"});function fe(d,z){n.$$.not_equal(z.point,d)&&(z.point=d,K.set(i))}const ce=d=>g({kind:"critical",idx:d}),lt=d=>g({kind:"critical",idx:d});function nt(d,z){n.$$.not_equal(z.point,d)&&(z.point=d,K.set(i))}const it=d=>g({kind:"conflict",idx:d}),ot=d=>g({kind:"conflict",idx:d});function rt(d){r=d,l(0,r)}return n.$$.update=()=>{n.$$.dirty[0]&1&&r&&m(!1),n.$$.dirty[0]&3&&r&&(r.getCanvas().style.cursor=o.mode=="new-critical"||o.mode=="new-conflict"?"crosshair":"auto"),n.$$.dirty[0]&14&&l(7,t=$l(i,o,v))},[r,o,v,i,f,k,C,t,g,q,N,u,L,a,m,S,w,E,X,me,re,ge,se,D,$e,ae,p,I,Q,x,fe,ce,lt,nt,it,ot,rt]}class zl extends Le{constructor(e){super(),Ne(this,e,dl,gl,Ie,{},null,[-1,-1])}}export{zl as component};
