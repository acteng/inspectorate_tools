import{s as Le,r as Z,e as O,t as H,a as A,c as U,b as F,d as J,f as m,g as R,q,v as z,i as v,h as P,w as X,k as he,V as re,y as gt,G as Ce,D as x,p as de,K as be,j as ae,I as $t,O as _e,P as me,n as dt}from"../chunks/scheduler.DGwhun8C.js";import{S as Ne,i as Se,e as Q,c as M,a as G,m as T,t as b,g as ie,b as y,f as ne,d as j}from"../chunks/index.B2vZYn3d.js";import{g as ht}from"../chunks/globals.D0QH3NT1.js";import{e as se}from"../chunks/each.osbS1YKp.js";import{p as bt}from"../chunks/stores.C1Et2OVm.js";import{G as vt,S as kt,C as Ye}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.CD-1hZDz.js";import{C as wt}from"../chunks/CheckboxGroup.CWZjIqRp.js";import{B as Ct,C as Ze,M as Xe}from"../chunks/Marker.7dLms8qA.js";import{C as yt}from"../chunks/CollapsibleCard.NCxe97a7.js";import{D as It}from"../chunks/DefaultButton.Dnb4gInE.js";import{I as ye,p as Lt,G as Nt}from"../chunks/pan.hrKyMTBp.js";import"../chunks/SelectWithCustom.svelte_svelte_type_style_lang.DvoqQyhS.js";import{S as Qe}from"../chunks/SecondaryButton.zQkvdoBX.js";import{W as St}from"../chunks/WarningButton.B3j9Frnm.js";import"../chunks/index.CbHI0Jbl.js";import"../chunks/paths.CS6tefRc.js";import"../chunks/entry.5W2sSXO3.js";import{p as Ee,c as xe}from"../chunks/colors.DaC397qr.js";import{l as ve,n as ke,M as Et,o as Dt,G as Bt,b as Pt,C as qt}from"../chunks/index.DTJPkTmr.js";import{s as W}from"../chunks/data.CleBvoRD.js";import{p as At,c as Rt,b as Be,e as Pe,f as Vt,g as Mt}from"../chunks/lists.Bn2sGx3F.js";import{R as Gt}from"../chunks/RouteMapLayer.BsRuMu_m.js";import{p as et}from"../chunks/index.CU-RRKGu.js";import{R as tt}from"../chunks/Radio.CB9cTsuJ.js";import{S as lt}from"../chunks/Select.uof3AMVw.js";import{T as it}from"../chunks/TextArea.DMXYz-c_.js";import{T as nt}from"../chunks/TextInput.DxIpVJMn.js";import{Y as ot}from"../chunks/YesNo.DZg4cMFO.js";function qe(n){let e,l,t;function i(o){n[5](o)}let s={label:"Resolved by Design",inlineSmall:!0};return n[1].policyConflictLog[n[0]].resolved!==void 0&&(s.value=n[1].policyConflictLog[n[0]].resolved),e=new ot({props:s}),Z.push(()=>Q(e,"value",i)),{c(){M(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,a){T(e,o,a),t=!0},p(o,a){const r={};!l&&a&3&&(l=!0,r.value=o[1].policyConflictLog[o[0]].resolved,X(()=>l=!1)),e.$set(r)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){j(e,o)}}}function Tt(n){let e,l,t,i,s,o,a,r,u,c,k,L,D,g,E,w,_,C,f,d,$,I;function N(p){n[2](p)}let Y={label:"Policy Conflict",emptyOption:!0,choices:At};n[1].policyConflictLog[n[0]].conflict!==void 0&&(Y.value=n[1].policyConflictLog[n[0]].conflict),c=new lt({props:Y}),Z.push(()=>Q(c,"value",N));function V(p){n[3](p)}let ee={label:"Stage",choices:et(["Existing","Design"]),inlineSmall:!0};n[1].policyConflictLog[n[0]].stage!==void 0&&(ee.value=n[1].policyConflictLog[n[0]].stage),D=new tt({props:ee}),Z.push(()=>Q(D,"value",V));function ge(p){n[4](p)}let fe={label:"Location Name"};n[1].policyConflictLog[n[0]].locationName!==void 0&&(fe.value=n[1].policyConflictLog[n[0]].locationName),w=new nt({props:fe}),Z.push(()=>Q(w,"value",ge));let B=n[1].policyConflictLog[n[0]].stage!="Design"&&qe(n);function $e(p){n[6](p)}let ce={label:"Commentary & Feedback"};return n[1].policyConflictLog[n[0]].notes!==void 0&&(ce.value=n[1].policyConflictLog[n[0]].notes),d=new it({props:ce}),Z.push(()=>Q(d,"value",$e)),{c(){e=O("div"),l=O("a"),t=H("Google StreetView"),s=A(),o=O("a"),a=H("Bing Streetside"),u=A(),M(c.$$.fragment),L=A(),M(D.$$.fragment),E=A(),M(w.$$.fragment),C=A(),B&&B.c(),f=A(),M(d.$$.fragment),this.h()},l(p){e=U(p,"DIV",{style:!0});var S=F(e);l=U(S,"A",{href:!0,target:!0});var te=F(l);t=J(te,"Google StreetView"),te.forEach(m),s=R(S),o=U(S,"A",{href:!0,target:!0});var le=F(o);a=J(le,"Bing Streetside"),le.forEach(m),S.forEach(m),u=R(p),G(c.$$.fragment,p),L=R(p),G(D.$$.fragment,p),E=R(p),G(w.$$.fragment,p),C=R(p),B&&B.l(p),f=R(p),G(d.$$.fragment,p),this.h()},h(){q(l,"href",i=ve(n[1].policyConflictLog[n[0]].point)),q(l,"target","_blank"),q(o,"href",r=ke(n[1].policyConflictLog[n[0]].point)),q(o,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(p,S){v(p,e,S),P(e,l),P(l,t),P(e,s),P(e,o),P(o,a),v(p,u,S),T(c,p,S),v(p,L,S),T(D,p,S),v(p,E,S),T(w,p,S),v(p,C,S),B&&B.m(p,S),v(p,f,S),T(d,p,S),I=!0},p(p,[S]){(!I||S&3&&i!==(i=ve(p[1].policyConflictLog[p[0]].point)))&&q(l,"href",i),(!I||S&3&&r!==(r=ke(p[1].policyConflictLog[p[0]].point)))&&q(o,"href",r);const te={};!k&&S&3&&(k=!0,te.value=p[1].policyConflictLog[p[0]].conflict,X(()=>k=!1)),c.$set(te);const le={};!g&&S&3&&(g=!0,le.value=p[1].policyConflictLog[p[0]].stage,X(()=>g=!1)),D.$set(le);const ue={};!_&&S&3&&(_=!0,ue.value=p[1].policyConflictLog[p[0]].locationName,X(()=>_=!1)),w.$set(ue),p[1].policyConflictLog[p[0]].stage!="Design"?B?(B.p(p,S),S&3&&b(B,1)):(B=qe(p),B.c(),b(B,1),B.m(f.parentNode,f)):B&&(ie(),y(B,1,1,()=>{B=null}),ne());const pe={};!$&&S&3&&($=!0,pe.value=p[1].policyConflictLog[p[0]].notes,X(()=>$=!1)),d.$set(pe)},i(p){I||(b(c.$$.fragment,p),b(D.$$.fragment,p),b(w.$$.fragment,p),b(B),b(d.$$.fragment,p),I=!0)},o(p){y(c.$$.fragment,p),y(D.$$.fragment,p),y(w.$$.fragment,p),y(B),y(d.$$.fragment,p),I=!1},d(p){p&&(m(e),m(u),m(L),m(E),m(C),m(f)),j(c,p),j(D,p),j(w,p),B&&B.d(p),j(d,p)}}}function jt(n,e,l){let t;he(n,W,c=>l(1,t=c));let{idx:i}=e;function s(c){n.$$.not_equal(t.policyConflictLog[i].conflict,c)&&(t.policyConflictLog[i].conflict=c,W.set(t))}function o(c){n.$$.not_equal(t.policyConflictLog[i].stage,c)&&(t.policyConflictLog[i].stage=c,W.set(t))}function a(c){n.$$.not_equal(t.policyConflictLog[i].locationName,c)&&(t.policyConflictLog[i].locationName=c,W.set(t))}function r(c){n.$$.not_equal(t.policyConflictLog[i].resolved,c)&&(t.policyConflictLog[i].resolved=c,W.set(t))}function u(c){n.$$.not_equal(t.policyConflictLog[i].notes,c)&&(t.policyConflictLog[i].notes=c,W.set(t))}return n.$$set=c=>{"idx"in c&&l(0,i=c.idx)},n.$$.update=()=>{n.$$.dirty&3&&t.policyConflictLog[i].stage=="Design"&&re(W,t.policyConflictLog[i].resolved="",t)},[i,t,s,o,a,r,u]}class Ft extends Ne{constructor(e){super(),Se(this,e,jt,Tt,Le,{idx:0})}}function Ae(n){let e,l,t;function i(o){n[5](o)}let s={label:"Resolved by Design",inlineSmall:!0};return n[1].criticalIssues[n[0]].resolved!==void 0&&(s.value=n[1].criticalIssues[n[0]].resolved),e=new ot({props:s}),Z.push(()=>Q(e,"value",i)),{c(){M(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,a){T(e,o,a),t=!0},p(o,a){const r={};!l&&a&3&&(l=!0,r.value=o[1].criticalIssues[o[0]].resolved,X(()=>l=!1)),e.$set(r)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){j(e,o)}}}function Ot(n){let e,l,t,i,s,o,a,r,u,c,k,L,D,g,E,w,_,C,f,d,$,I;function N(p){n[2](p)}let Y={label:"Critical Issue",emptyOption:!0,choices:Rt};n[1].criticalIssues[n[0]].criticalIssue!==void 0&&(Y.value=n[1].criticalIssues[n[0]].criticalIssue),c=new lt({props:Y}),Z.push(()=>Q(c,"value",N));function V(p){n[3](p)}let ee={label:"Stage",choices:et(["Existing","Design"]),inlineSmall:!0};n[1].criticalIssues[n[0]].stage!==void 0&&(ee.value=n[1].criticalIssues[n[0]].stage),D=new tt({props:ee}),Z.push(()=>Q(D,"value",V));function ge(p){n[4](p)}let fe={label:"Location Name"};n[1].criticalIssues[n[0]].locationName!==void 0&&(fe.value=n[1].criticalIssues[n[0]].locationName),w=new nt({props:fe}),Z.push(()=>Q(w,"value",ge));let B=n[1].criticalIssues[n[0]].stage!="Design"&&Ae(n);function $e(p){n[6](p)}let ce={label:"Commentary & Feedback"};return n[1].criticalIssues[n[0]].notes!==void 0&&(ce.value=n[1].criticalIssues[n[0]].notes),d=new it({props:ce}),Z.push(()=>Q(d,"value",$e)),{c(){e=O("div"),l=O("a"),t=H("Google StreetView"),s=A(),o=O("a"),a=H("Bing Streetside"),u=A(),M(c.$$.fragment),L=A(),M(D.$$.fragment),E=A(),M(w.$$.fragment),C=A(),B&&B.c(),f=A(),M(d.$$.fragment),this.h()},l(p){e=U(p,"DIV",{style:!0});var S=F(e);l=U(S,"A",{href:!0,target:!0});var te=F(l);t=J(te,"Google StreetView"),te.forEach(m),s=R(S),o=U(S,"A",{href:!0,target:!0});var le=F(o);a=J(le,"Bing Streetside"),le.forEach(m),S.forEach(m),u=R(p),G(c.$$.fragment,p),L=R(p),G(D.$$.fragment,p),E=R(p),G(w.$$.fragment,p),C=R(p),B&&B.l(p),f=R(p),G(d.$$.fragment,p),this.h()},h(){q(l,"href",i=ve(n[1].criticalIssues[n[0]].point)),q(l,"target","_blank"),q(o,"href",r=ke(n[1].criticalIssues[n[0]].point)),q(o,"target","_blank"),z(e,"display","flex"),z(e,"justify-content","space-evenly")},m(p,S){v(p,e,S),P(e,l),P(l,t),P(e,s),P(e,o),P(o,a),v(p,u,S),T(c,p,S),v(p,L,S),T(D,p,S),v(p,E,S),T(w,p,S),v(p,C,S),B&&B.m(p,S),v(p,f,S),T(d,p,S),I=!0},p(p,[S]){(!I||S&3&&i!==(i=ve(p[1].criticalIssues[p[0]].point)))&&q(l,"href",i),(!I||S&3&&r!==(r=ke(p[1].criticalIssues[p[0]].point)))&&q(o,"href",r);const te={};!k&&S&3&&(k=!0,te.value=p[1].criticalIssues[p[0]].criticalIssue,X(()=>k=!1)),c.$set(te);const le={};!g&&S&3&&(g=!0,le.value=p[1].criticalIssues[p[0]].stage,X(()=>g=!1)),D.$set(le);const ue={};!_&&S&3&&(_=!0,ue.value=p[1].criticalIssues[p[0]].locationName,X(()=>_=!1)),w.$set(ue),p[1].criticalIssues[p[0]].stage!="Design"?B?(B.p(p,S),S&3&&b(B,1)):(B=Ae(p),B.c(),b(B,1),B.m(f.parentNode,f)):B&&(ie(),y(B,1,1,()=>{B=null}),ne());const pe={};!$&&S&3&&($=!0,pe.value=p[1].criticalIssues[p[0]].notes,X(()=>$=!1)),d.$set(pe)},i(p){I||(b(c.$$.fragment,p),b(D.$$.fragment,p),b(w.$$.fragment,p),b(B),b(d.$$.fragment,p),I=!0)},o(p){y(c.$$.fragment,p),y(D.$$.fragment,p),y(w.$$.fragment,p),y(B),y(d.$$.fragment,p),I=!1},d(p){p&&(m(e),m(u),m(L),m(E),m(C),m(f)),j(c,p),j(D,p),j(w,p),B&&B.d(p),j(d,p)}}}function Ut(n,e,l){let t;he(n,W,c=>l(1,t=c));let{idx:i}=e;function s(c){n.$$.not_equal(t.criticalIssues[i].criticalIssue,c)&&(t.criticalIssues[i].criticalIssue=c,W.set(t))}function o(c){n.$$.not_equal(t.criticalIssues[i].stage,c)&&(t.criticalIssues[i].stage=c,W.set(t))}function a(c){n.$$.not_equal(t.criticalIssues[i].locationName,c)&&(t.criticalIssues[i].locationName=c,W.set(t))}function r(c){n.$$.not_equal(t.criticalIssues[i].resolved,c)&&(t.criticalIssues[i].resolved=c,W.set(t))}function u(c){n.$$.not_equal(t.criticalIssues[i].notes,c)&&(t.criticalIssues[i].notes=c,W.set(t))}return n.$$set=c=>{"idx"in c&&l(0,i=c.idx)},n.$$.update=()=>{n.$$.dirty&3&&t.criticalIssues[i].stage=="Design"&&re(W,t.criticalIssues[i].resolved="",t)},[i,t,s,o,a,r,u]}class zt extends Ne{constructor(e){super(),Se(this,e,Ut,Ot,Le,{idx:0})}}const{window:Ht}=ht;function Re(n,e,l){const t=n.slice();return t[42]=e[l],t[43]=e,t[44]=l,t}function Ve(n,e,l){const t=n.slice();return t[45]=e[l],t[46]=e,t[44]=l,t}function Me(n,e,l){const t=n.slice();return t[42]=e[l],t[44]=l,t}function Ge(n,e,l){const t=n.slice();return t[45]=e[l],t[44]=l,t}function Jt(n){let e,l,t,i,s,o,a,r,u,c;e=new It({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),e.$on("click",n[12]),t=new St({props:{$$slots:{default:[Yt]},$$scope:{ctx:n}}}),t.$on("click",n[14]),s=new Qe({props:{$$slots:{default:[Zt]},$$scope:{ctx:n}}}),s.$on("click",n[11]);const k=[Qt,Xt],L=[];function D(g,E){return g[1].id.kind=="critical"?0:1}return a=D(n),r=L[a]=k[a](n),{c(){M(e.$$.fragment),l=A(),M(t.$$.fragment),i=A(),M(s.$$.fragment),o=A(),r.c(),u=x()},l(g){G(e.$$.fragment,g),l=R(g),G(t.$$.fragment,g),i=R(g),G(s.$$.fragment,g),o=R(g),r.l(g),u=x()},m(g,E){T(e,g,E),v(g,l,E),T(t,g,E),v(g,i,E),T(s,g,E),v(g,o,E),L[a].m(g,E),v(g,u,E),c=!0},p(g,E){const w={};E[1]&262144&&(w.$$scope={dirty:E,ctx:g}),e.$set(w);const _={};E[1]&262144&&(_.$$scope={dirty:E,ctx:g}),t.$set(_);const C={};E[1]&262144&&(C.$$scope={dirty:E,ctx:g}),s.$set(C);let f=a;a=D(g),a===f?L[a].p(g,E):(ie(),y(L[f],1,1,()=>{L[f]=null}),ne(),r=L[a],r?r.p(g,E):(r=L[a]=k[a](g),r.c()),b(r,1),r.m(u.parentNode,u))},i(g){c||(b(e.$$.fragment,g),b(t.$$.fragment,g),b(s.$$.fragment,g),b(r),c=!0)},o(g){y(e.$$.fragment,g),y(t.$$.fragment,g),y(s.$$.fragment,g),y(r),c=!1},d(g){g&&(m(l),m(i),m(o),m(u)),j(e,g),j(t,g),j(s,g),L[a].d(g)}}}function Kt(n){let e,l,t,i,s,o,a="Critical Issue Log",r,u,c,k,L="Policy Conflict Log",D,g;e=new yt({props:{label:"Map tools",$$slots:{default:[tl]},$$scope:{ctx:n}}}),t=new wt({props:{small:!0,$$slots:{default:[il]},$$scope:{ctx:n}}});let E=se(n[3].criticalIssues),w=[];for(let $=0;$<E.length;$+=1)w[$]=je(Ge(n,E,$));const _=$=>y(w[$],1,1,()=>{w[$]=null});let C=se(n[3].policyConflictLog),f=[];for(let $=0;$<C.length;$+=1)f[$]=Oe(Me(n,C,$));const d=$=>y(f[$],1,1,()=>{f[$]=null});return{c(){M(e.$$.fragment),l=A(),M(t.$$.fragment),i=A(),s=O("div"),o=O("h3"),o.textContent=a,r=A();for(let $=0;$<w.length;$+=1)w[$].c();u=A(),c=O("div"),k=O("h3"),k.textContent=L,D=A();for(let $=0;$<f.length;$+=1)f[$].c();this.h()},l($){G(e.$$.fragment,$),l=R($),G(t.$$.fragment,$),i=R($),s=U($,"DIV",{style:!0});var I=F(s);o=U(I,"H3",{"data-svelte-h":!0}),de(o)!=="svelte-e9mkko"&&(o.textContent=a),r=R(I);for(let Y=0;Y<w.length;Y+=1)w[Y].l(I);I.forEach(m),u=R($),c=U($,"DIV",{style:!0});var N=F(c);k=U(N,"H3",{"data-svelte-h":!0}),de(k)!=="svelte-y008oc"&&(k.textContent=L),D=R(N);for(let Y=0;Y<f.length;Y+=1)f[Y].l(N);N.forEach(m),this.h()},h(){z(s,"background-color","grey"),z(s,"padding","4px"),z(c,"background-color",Ee),z(c,"padding","4px")},m($,I){T(e,$,I),v($,l,I),T(t,$,I),v($,i,I),v($,s,I),P(s,o),P(s,r);for(let N=0;N<w.length;N+=1)w[N]&&w[N].m(s,null);v($,u,I),v($,c,I),P(c,k),P(c,D);for(let N=0;N<f.length;N+=1)f[N]&&f[N].m(c,null);g=!0},p($,I){const N={};I[0]&97|I[1]&262144&&(N.$$scope={dirty:I,ctx:$}),e.$set(N);const Y={};if(I[0]&128|I[1]&262144&&(Y.$$scope={dirty:I,ctx:$}),t.$set(Y),I[0]&66572){E=se($[3].criticalIssues);let V;for(V=0;V<E.length;V+=1){const ee=Ge($,E,V);w[V]?(w[V].p(ee,I),b(w[V],1)):(w[V]=je(ee),w[V].c(),b(w[V],1),w[V].m(s,null))}for(ie(),V=E.length;V<w.length;V+=1)_(V);ne()}if(I[0]&132108){C=se($[3].policyConflictLog);let V;for(V=0;V<C.length;V+=1){const ee=Me($,C,V);f[V]?(f[V].p(ee,I),b(f[V],1)):(f[V]=Oe(ee),f[V].c(),b(f[V],1),f[V].m(c,null))}for(ie(),V=C.length;V<f.length;V+=1)d(V);ne()}},i($){if(!g){b(e.$$.fragment,$),b(t.$$.fragment,$);for(let I=0;I<E.length;I+=1)b(w[I]);for(let I=0;I<C.length;I+=1)b(f[I]);g=!0}},o($){y(e.$$.fragment,$),y(t.$$.fragment,$),w=w.filter(Boolean);for(let I=0;I<w.length;I+=1)y(w[I]);f=f.filter(Boolean);for(let I=0;I<f.length;I+=1)y(f[I]);g=!1},d($){$&&(m(l),m(i),m(s),m(u),m(c)),j(e,$),j(t,$),be(w,$),be(f,$)}}}function Wt(n){let e;return{c(){e=H("Save")},l(l){e=J(l,"Save")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function Yt(n){let e;return{c(){e=H("Delete")},l(l){e=J(l,"Delete")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function Zt(n){let e;return{c(){e=H("Copy")},l(l){e=J(l,"Copy")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function Xt(n){let e,l;return e=new Ft({props:{idx:n[1].id.idx}}),{c(){M(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&2&&(s.idx=t[1].id.idx),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Qt(n){let e,l;return e=new zt({props:{idx:n[1].id.idx}}),{c(){M(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&2&&(s.idx=t[1].id.idx),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function xt(n){let e;return{c(){e=H("Zoom to fit")},l(l){e=J(l,"Zoom to fit")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function el(n){let e;return{c(){e=H("Show route")},l(l){e=J(l,"Show route")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function tl(n){let e,l,t,i,s,o,a,r,u,c,k,L;e=new Qe({props:{$$slots:{default:[xt]},$$scope:{ctx:n}}}),e.$on("click",n[19]),t=new Ct({}),s=new vt({});function D(_){n[20](_)}let g={map:n[0]};n[5]!==void 0&&(g.enabled=n[5]),a=new kt({props:g}),Z.push(()=>Q(a,"enabled",D));function E(_){n[21](_)}let w={$$slots:{default:[el]},$$scope:{ctx:n}};return n[6]!==void 0&&(w.checked=n[6]),c=new Ze({props:w}),Z.push(()=>Q(c,"checked",E)),{c(){M(e.$$.fragment),l=A(),M(t.$$.fragment),i=A(),M(s.$$.fragment),o=A(),M(a.$$.fragment),u=A(),M(c.$$.fragment)},l(_){G(e.$$.fragment,_),l=R(_),G(t.$$.fragment,_),i=R(_),G(s.$$.fragment,_),o=R(_),G(a.$$.fragment,_),u=R(_),G(c.$$.fragment,_)},m(_,C){T(e,_,C),v(_,l,C),T(t,_,C),v(_,i,C),T(s,_,C),v(_,o,C),T(a,_,C),v(_,u,C),T(c,_,C),L=!0},p(_,C){const f={};C[1]&262144&&(f.$$scope={dirty:C,ctx:_}),e.$set(f);const d={};C[0]&1&&(d.map=_[0]),!r&&C[0]&32&&(r=!0,d.enabled=_[5],X(()=>r=!1)),a.$set(d);const $={};C[1]&262144&&($.$$scope={dirty:C,ctx:_}),!k&&C[0]&64&&(k=!0,$.checked=_[6],X(()=>k=!1)),c.$set($)},i(_){L||(b(e.$$.fragment,_),b(t.$$.fragment,_),b(s.$$.fragment,_),b(a.$$.fragment,_),b(c.$$.fragment,_),L=!0)},o(_){y(e.$$.fragment,_),y(t.$$.fragment,_),y(s.$$.fragment,_),y(a.$$.fragment,_),y(c.$$.fragment,_),L=!1},d(_){_&&(m(l),m(i),m(o),m(u)),j(e,_),j(t,_),j(s,_),j(a,_),j(c,_)}}}function ll(n){let e;return{c(){e=H("Show resolved problems")},l(l){e=J(l,"Show resolved problems")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function il(n){let e,l,t;function i(o){n[22](o)}let s={$$slots:{default:[ll]},$$scope:{ctx:n}};return n[7]!==void 0&&(s.checked=n[7]),e=new Ze({props:s}),Z.push(()=>Q(e,"checked",i)),{c(){M(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,a){T(e,o,a),t=!0},p(o,a){const r={};a[1]&262144&&(r.$$scope={dirty:a,ctx:o}),!l&&a[0]&128&&(l=!0,r.checked=o[7],X(()=>l=!1)),e.$set(r)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){j(e,o)}}}function Te(n){let e;function l(s,o){return s[45].resolved=="No"?ol:nl}let t=l(n),i=t(n);return{c(){i.c(),e=x()},l(s){i.l(s),e=x()},m(s,o){i.m(s,o),v(s,e,o)},p(s,o){t===(t=l(s))&&i?i.p(s,o):(i.d(1),i=t(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&m(e),i.d(s)}}}function nl(n){let e,l,t=n[45].resolved+"",i;return{c(){e=O("span"),l=H("Resolved: "),i=H(t)},l(s){e=U(s,"SPAN",{});var o=F(e);l=J(o,"Resolved: "),i=J(o,t),o.forEach(m)},m(s,o){v(s,e,o),P(e,l),P(e,i)},p(s,o){o[0]&8&&t!==(t=s[45].resolved+"")&&ae(i,t)},d(s){s&&m(e)}}}function ol(n){let e,l,t,i=n[45].resolved+"",s;return{c(){e=O("span"),l=O("b"),t=H("Resolved: "),s=H(i)},l(o){e=U(o,"SPAN",{});var a=F(e);l=U(a,"B",{});var r=F(l);t=J(r,"Resolved: "),s=J(r,i),r.forEach(m),a.forEach(m)},m(o,a){v(o,e,a),P(e,l),P(l,t),P(l,s)},p(o,a){a[0]&8&&i!==(i=o[45].resolved+"")&&ae(s,i)},d(o){o&&m(e)}}}function rl(n){let e,l,t,i=n[45].stage+"",s,o,a,r=n[45].stage!="Design"&&Te(n);return{c(){e=O("div"),l=O("span"),t=H("Stage: "),s=H(i),o=A(),r&&r.c(),a=A(),this.h()},l(u){e=U(u,"DIV",{style:!0});var c=F(e);l=U(c,"SPAN",{});var k=F(l);t=J(k,"Stage: "),s=J(k,i),k.forEach(m),o=R(c),r&&r.l(c),c.forEach(m),a=R(u),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(u,c){v(u,e,c),P(e,l),P(l,t),P(l,s),P(e,o),r&&r.m(e,null),v(u,a,c)},p(u,c){c[0]&8&&i!==(i=u[45].stage+"")&&ae(s,i),u[45].stage!="Design"?r?r.p(u,c):(r=Te(u),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(u){u&&(m(e),m(a)),r&&r.d()}}}function je(n){let e,l;function t(){return n[23](n[44])}function i(){return n[24](n[44])}return e=new Ye({props:{name:n[16](n[45]),$$slots:{default:[rl]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",i),e.$on("mouseleave",n[25]),{c(){M(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,o){T(e,s,o),l=!0},p(s,o){n=s;const a={};o[0]&8&&(a.name=n[16](n[45])),o[0]&8|o[1]&262144&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){j(e,s)}}}function Fe(n){let e;function l(s,o){return s[42].resolved=="No"?al:sl}let t=l(n),i=t(n);return{c(){i.c(),e=x()},l(s){i.l(s),e=x()},m(s,o){i.m(s,o),v(s,e,o)},p(s,o){t===(t=l(s))&&i?i.p(s,o):(i.d(1),i=t(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){s&&m(e),i.d(s)}}}function sl(n){let e,l,t=n[42].resolved+"",i;return{c(){e=O("span"),l=H("Resolved: "),i=H(t)},l(s){e=U(s,"SPAN",{});var o=F(e);l=J(o,"Resolved: "),i=J(o,t),o.forEach(m)},m(s,o){v(s,e,o),P(e,l),P(e,i)},p(s,o){o[0]&8&&t!==(t=s[42].resolved+"")&&ae(i,t)},d(s){s&&m(e)}}}function al(n){let e,l,t,i=n[42].resolved+"",s;return{c(){e=O("span"),l=O("b"),t=H("Resolved: "),s=H(i)},l(o){e=U(o,"SPAN",{});var a=F(e);l=U(a,"B",{});var r=F(l);t=J(r,"Resolved: "),s=J(r,i),r.forEach(m),a.forEach(m)},m(o,a){v(o,e,a),P(e,l),P(l,t),P(l,s)},p(o,a){a[0]&8&&i!==(i=o[42].resolved+"")&&ae(s,i)},d(o){o&&m(e)}}}function fl(n){let e,l,t,i=n[42].stage+"",s,o,a,r=n[42].stage!="Design"&&Fe(n);return{c(){e=O("div"),l=O("span"),t=H("Stage: "),s=H(i),o=A(),r&&r.c(),a=A(),this.h()},l(u){e=U(u,"DIV",{style:!0});var c=F(e);l=U(c,"SPAN",{});var k=F(l);t=J(k,"Stage: "),s=J(k,i),k.forEach(m),o=R(c),r&&r.l(c),c.forEach(m),a=R(u),this.h()},h(){z(e,"width","100%"),z(e,"display","flex"),z(e,"justify-content","space-between")},m(u,c){v(u,e,c),P(e,l),P(l,t),P(l,s),P(e,o),r&&r.m(e,null),v(u,a,c)},p(u,c){c[0]&8&&i!==(i=u[42].stage+"")&&ae(s,i),u[42].stage!="Design"?r?r.p(u,c):(r=Fe(u),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(u){u&&(m(e),m(a)),r&&r.d()}}}function Oe(n){let e,l;function t(){return n[26](n[44])}function i(){return n[27](n[44])}return e=new Ye({props:{name:n[17](n[42]),$$slots:{default:[fl]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",i),e.$on("mouseleave",n[28]),{c(){M(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,o){T(e,s,o),l=!0},p(s,o){n=s;const a={};o[0]&8&&(a.name=n[17](n[42])),o[0]&8|o[1]&262144&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){j(e,s)}}}function Ue(n){let e,l,t,i,s,o,a;return l=new ye({props:{$$slots:{default:[pl]},$$scope:{ctx:n}}}),l.$on("click",n[12]),i=new ye({props:{$$slots:{default:[gl]},$$scope:{ctx:n}}}),i.$on("click",n[30]),o=new ye({props:{$$slots:{default:[hl]},$$scope:{ctx:n}}}),o.$on("click",n[31]),{c(){e=O("div"),M(l.$$.fragment),t=A(),M(i.$$.fragment),s=A(),M(o.$$.fragment),this.h()},l(r){e=U(r,"DIV",{class:!0});var u=F(e);G(l.$$.fragment,u),t=R(u),G(i.$$.fragment,u),s=R(u),G(o.$$.fragment,u),u.forEach(m),this.h()},h(){q(e,"class","control-panel svelte-70vzbr")},m(r,u){v(r,e,u),T(l,e,null),P(e,t),T(i,e,null),P(e,s),T(o,e,null),a=!0},p(r,u){const c={};u[0]&2|u[1]&262144&&(c.$$scope={dirty:u,ctx:r}),l.$set(c);const k={};u[0]&2|u[1]&262144&&(k.$$scope={dirty:u,ctx:r}),i.$set(k);const L={};u[0]&2|u[1]&262144&&(L.$$scope={dirty:u,ctx:r}),o.$set(L)},i(r){a||(b(l.$$.fragment,r),b(i.$$.fragment,r),b(o.$$.fragment,r),a=!0)},o(r){y(l.$$.fragment,r),y(i.$$.fragment,r),y(o.$$.fragment,r),a=!1},d(r){r&&m(e),j(l),j(i),j(o)}}}function cl(n){let e;return{c(){e=H("Move map")},l(l){e=J(l,"Move map")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function ul(n){let e,l="Move map";return{c(){e=O("b"),e.textContent=l},l(t){e=U(t,"B",{"data-svelte-h":!0}),de(e)!=="svelte-ydcbkl"&&(e.textContent=l)},m(t,i){v(t,e,i)},d(t){t&&m(e)}}}function pl(n){let e,l,t,i;function s(r,u){return r[1].mode=="select"?ul:cl}let o=s(n),a=o(n);return{c(){e=O("img"),t=A(),a.c(),i=x(),this.h()},l(r){e=U(r,"IMG",{src:!0,alt:!0,style:!0}),t=R(r),a.l(r),i=x(),this.h()},h(){$t(e.src,l=Lt)||q(e,"src",l),q(e,"alt","Move map"),z(e,"vertical-align","middle")},m(r,u){v(r,e,u),v(r,t,u),a.m(r,u),v(r,i,u)},p(r,u){o!==(o=s(r))&&(a.d(1),a=o(r),a&&(a.c(),a.m(i.parentNode,i)))},d(r){r&&(m(e),m(t),m(i)),a.d(r)}}}function _l(n){let e;return{c(){e=H("New critical issue")},l(l){e=J(l,"New critical issue")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function ml(n){let e,l="New critical issue";return{c(){e=O("b"),e.textContent=l},l(t){e=U(t,"B",{"data-svelte-h":!0}),de(e)!=="svelte-1q9dhgs"&&(e.textContent=l)},m(t,i){v(t,e,i)},d(t){t&&m(e)}}}function gl(n){let e,l,t,i;function s(r,u){return r[1].mode=="new-critical"?ml:_l}let o=s(n),a=o(n);return{c(){e=_e("svg"),l=_e("rect"),t=A(),a.c(),i=x(),this.h()},l(r){e=me(r,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=F(e);l=me(u,"rect",{width:!0,height:!0,fill:!0,class:!0}),F(l).forEach(m),u.forEach(m),t=R(r),a.l(r),i=x(),this.h()},h(){q(l,"width","24"),q(l,"height","24"),q(l,"fill",xe.critical.background),q(l,"class","svelte-70vzbr"),q(e,"width","24"),q(e,"height","24"),q(e,"xmlns","http://www.w3.org/2000/svg"),z(e,"vertical-align","middle")},m(r,u){v(r,e,u),P(e,l),v(r,t,u),a.m(r,u),v(r,i,u)},p(r,u){o!==(o=s(r))&&(a.d(1),a=o(r),a&&(a.c(),a.m(i.parentNode,i)))},d(r){r&&(m(e),m(t),m(i)),a.d(r)}}}function $l(n){let e;return{c(){e=H("New policy conflict")},l(l){e=J(l,"New policy conflict")},m(l,t){v(l,e,t)},d(l){l&&m(e)}}}function dl(n){let e,l="New policy conflict";return{c(){e=O("b"),e.textContent=l},l(t){e=U(t,"B",{"data-svelte-h":!0}),de(e)!=="svelte-pf83jq"&&(e.textContent=l)},m(t,i){v(t,e,i)},d(t){t&&m(e)}}}function hl(n){let e,l,t,i;function s(r,u){return r[1].mode=="new-conflict"?dl:$l}let o=s(n),a=o(n);return{c(){e=_e("svg"),l=_e("circle"),t=A(),a.c(),i=x(),this.h()},l(r){e=me(r,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=F(e);l=me(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),F(l).forEach(m),u.forEach(m),t=R(r),a.l(r),i=x(),this.h()},h(){q(l,"cx","12"),q(l,"cy","12"),q(l,"r","12"),q(l,"fill",Ee),q(e,"width","24"),q(e,"height","24"),q(e,"xmlns","http://www.w3.org/2000/svg"),z(e,"vertical-align","middle")},m(r,u){v(r,e,u),P(e,l),v(r,t,u),a.m(r,u),v(r,i,u)},p(r,u){o!==(o=s(r))&&(a.d(1),a=o(r),a&&(a.c(),a.m(i.parentNode,i)))},d(r){r&&(m(e),m(t),m(i)),a.d(r)}}}function ze(n){let e,l;return e=new Nt({props:{map:n[0],beforeId:"route-map"}}),{c(){M(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p(t,i){const s={};i[0]&1&&(s.map=t[0]),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function He(n){let e,l,t;function i(r){n[32](r,n[45])}function s(){return n[33](n[44])}function o(){return n[34](n[44])}let a={draggable:!0,$$slots:{default:[bl]},$$scope:{ctx:n}};return n[45].point!==void 0&&(a.lngLat=n[45].point),e=new Xe({props:a}),Z.push(()=>Q(e,"lngLat",i)),e.$on("click",s),e.$on("dragend",o),{c(){M(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,u){T(e,r,u),t=!0},p(r,u){n=r;const c={};u[0]&8|u[1]&262144&&(c.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,c.lngLat=n[45].point,X(()=>l=!1)),e.$set(c)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function bl(n){let e,l,t,i=n[45].criticalIssue+"",s;return{c(){e=_e("svg"),l=_e("rect"),t=_e("text"),s=H(i),this.h()},l(o){e=me(o,"svg",{width:!0,height:!0,xmlns:!0});var a=F(e);l=me(a,"rect",{width:!0,height:!0,fill:!0,class:!0}),F(l).forEach(m),t=me(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0});var r=F(t);s=J(r,i),r.forEach(m),a.forEach(m),this.h()},h(){q(l,"width","40"),q(l,"height","40"),q(l,"fill",xe.critical.background),q(l,"class","svelte-70vzbr"),q(t,"x","50%"),q(t,"y","50%"),q(t,"dominant-baseline","middle"),q(t,"text-anchor","middle"),z(t,"fill","white"),z(t,"font","bold 15px sans-serif"),q(e,"width","40"),q(e,"height","40"),q(e,"xmlns","http://www.w3.org/2000/svg")},m(o,a){v(o,e,a),P(e,l),P(e,t),P(t,s)},p(o,a){a[0]&8&&i!==(i=o[45].criticalIssue+"")&&ae(s,i)},d(o){o&&m(e)}}}function Je(n){let e=we(n[7],n[45].resolved),l,t,i=e&&He(n);return{c(){i&&i.c(),l=x()},l(s){i&&i.l(s),l=x()},m(s,o){i&&i.m(s,o),v(s,l,o),t=!0},p(s,o){o[0]&136&&(e=we(s[7],s[45].resolved)),e?i?(i.p(s,o),o[0]&136&&b(i,1)):(i=He(s),i.c(),b(i,1),i.m(l.parentNode,l)):i&&(ie(),y(i,1,1,()=>{i=null}),ne())},i(s){t||(b(i),t=!0)},o(s){y(i),t=!1},d(s){s&&m(l),i&&i.d(s)}}}function Ke(n){let e,l,t;function i(r){n[35](r,n[42])}function s(){return n[36](n[44])}function o(){return n[37](n[44])}let a={draggable:!0,$$slots:{default:[vl]},$$scope:{ctx:n}};return n[42].point!==void 0&&(a.lngLat=n[42].point),e=new Xe({props:a}),Z.push(()=>Q(e,"lngLat",i)),e.$on("click",s),e.$on("dragend",o),{c(){M(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,u){T(e,r,u),t=!0},p(r,u){n=r;const c={};u[0]&8|u[1]&262144&&(c.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,c.lngLat=n[42].point,X(()=>l=!1)),e.$set(c)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function vl(n){let e,l=n[42].conflict+"",t;return{c(){e=O("span"),t=H(l),this.h()},l(i){e=U(i,"SPAN",{class:!0});var s=F(e);t=J(s,l),s.forEach(m),this.h()},h(){q(e,"class","dot svelte-70vzbr"),z(e,"background",Ee)},m(i,s){v(i,e,s),P(e,t)},p(i,s){s[0]&8&&l!==(l=i[42].conflict+"")&&ae(t,l)},d(i){i&&m(e)}}}function We(n){let e=we(n[7],n[42].resolved),l,t,i=e&&Ke(n);return{c(){i&&i.c(),l=x()},l(s){i&&i.l(s),l=x()},m(s,o){i&&i.m(s,o),v(s,l,o),t=!0},p(s,o){o[0]&136&&(e=we(s[7],s[42].resolved)),e?i?(i.p(s,o),o[0]&136&&b(i,1)):(i=Ke(s),i.c(),b(i,1),i.m(l.parentNode,l)):i&&(ie(),y(i,1,1,()=>{i=null}),ne())},i(s){t||(b(i),t=!0)},o(s){y(i),t=!1},d(s){s&&m(l),i&&i.d(s)}}}function kl(n){let e,l;return e=new qt({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){M(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){T(e,t,i),l=!0},p:dt,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function wl(n){let e,l,t,i,s,o,a,r,u,c;e=new Dt({}),e.$on("click",n[13]);let k=n[1].mode!="editing"&&Ue(n);i=new Gt({props:{show:n[6],id:"route-map"}});let L=n[0]&&ze(n),D=se(n[3].criticalIssues),g=[];for(let f=0;f<D.length;f+=1)g[f]=Je(Ve(n,D,f));const E=f=>y(g[f],1,1,()=>{g[f]=null});let w=se(n[3].policyConflictLog),_=[];for(let f=0;f<w.length;f+=1)_[f]=We(Re(n,w,f));const C=f=>y(_[f],1,1,()=>{_[f]=null});return u=new Bt({props:{data:n[8],$$slots:{default:[kl]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment),l=A(),k&&k.c(),t=A(),M(i.$$.fragment),s=A(),L&&L.c(),o=A();for(let f=0;f<g.length;f+=1)g[f].c();a=A();for(let f=0;f<_.length;f+=1)_[f].c();r=A(),M(u.$$.fragment)},l(f){G(e.$$.fragment,f),l=R(f),k&&k.l(f),t=R(f),G(i.$$.fragment,f),s=R(f),L&&L.l(f),o=R(f);for(let d=0;d<g.length;d+=1)g[d].l(f);a=R(f);for(let d=0;d<_.length;d+=1)_[d].l(f);r=R(f),G(u.$$.fragment,f)},m(f,d){T(e,f,d),v(f,l,d),k&&k.m(f,d),v(f,t,d),T(i,f,d),v(f,s,d),L&&L.m(f,d),v(f,o,d);for(let $=0;$<g.length;$+=1)g[$]&&g[$].m(f,d);v(f,a,d);for(let $=0;$<_.length;$+=1)_[$]&&_[$].m(f,d);v(f,r,d),T(u,f,d),c=!0},p(f,d){f[1].mode!="editing"?k?(k.p(f,d),d[0]&2&&b(k,1)):(k=Ue(f),k.c(),b(k,1),k.m(t.parentNode,t)):k&&(ie(),y(k,1,1,()=>{k=null}),ne());const $={};if(d[0]&64&&($.show=f[6]),i.$set($),f[0]?L?(L.p(f,d),d[0]&1&&b(L,1)):(L=ze(f),L.c(),b(L,1),L.m(o.parentNode,o)):L&&(ie(),y(L,1,1,()=>{L=null}),ne()),d[0]&648){D=se(f[3].criticalIssues);let N;for(N=0;N<D.length;N+=1){const Y=Ve(f,D,N);g[N]?(g[N].p(Y,d),b(g[N],1)):(g[N]=Je(Y),g[N].c(),b(g[N],1),g[N].m(a.parentNode,a))}for(ie(),N=D.length;N<g.length;N+=1)E(N);ne()}if(d[0]&648){w=se(f[3].policyConflictLog);let N;for(N=0;N<w.length;N+=1){const Y=Re(f,w,N);_[N]?(_[N].p(Y,d),b(_[N],1)):(_[N]=We(Y),_[N].c(),b(_[N],1),_[N].m(r.parentNode,r))}for(ie(),N=w.length;N<_.length;N+=1)C(N);ne()}const I={};d[0]&256&&(I.data=f[8]),d[1]&262144&&(I.$$scope={dirty:d,ctx:f}),u.$set(I)},i(f){if(!c){b(e.$$.fragment,f),b(k),b(i.$$.fragment,f),b(L);for(let d=0;d<D.length;d+=1)b(g[d]);for(let d=0;d<w.length;d+=1)b(_[d]);b(u.$$.fragment,f),c=!0}},o(f){y(e.$$.fragment,f),y(k),y(i.$$.fragment,f),y(L),g=g.filter(Boolean);for(let d=0;d<g.length;d+=1)y(g[d]);_=_.filter(Boolean);for(let d=0;d<_.length;d+=1)y(_[d]);y(u.$$.fragment,f),c=!1},d(f){f&&(m(l),m(t),m(s),m(o),m(a),m(r)),j(e,f),k&&k.d(f),j(i,f),L&&L.d(f),be(g,f),be(_,f),j(u,f)}}}function Cl(n){let e,l,t,i,s,o,a,r,u,c,k;const L=[Kt,Jt],D=[];function g(_,C){return _[1].mode!="editing"?0:1}t=g(n),i=D[t]=L[t](n);function E(_){n[38](_)}let w={$$slots:{default:[wl]},$$scope:{ctx:n}};return n[0]!==void 0&&(w.map=n[0]),a=new Et({props:w}),Z.push(()=>Q(a,"map",E)),{c(){e=O("div"),l=O("div"),i.c(),s=A(),o=O("div"),M(a.$$.fragment),this.h()},l(_){e=U(_,"DIV",{style:!0});var C=F(e);l=U(C,"DIV",{style:!0});var f=F(l);i.l(f),f.forEach(m),s=R(C),o=U(C,"DIV",{style:!0});var d=F(o);G(a.$$.fragment,d),d.forEach(m),C.forEach(m),this.h()},h(){z(l,"width","30%"),z(l,"overflow-y","scroll"),z(l,"padding","10px"),z(l,"border","1px solid black"),z(o,"position","relative"),z(o,"width","70%"),z(e,"display","flex"),z(e,"height","80vh")},m(_,C){v(_,e,C),P(e,l),D[t].m(l,null),n[29](l),P(e,s),P(e,o),T(a,o,null),u=!0,c||(k=gt(Ht,"keydown",n[18]),c=!0)},p(_,C){let f=t;t=g(_),t===f?D[t].p(_,C):(ie(),y(D[f],1,1,()=>{D[f]=null}),ne(),i=D[t],i?i.p(_,C):(i=D[t]=L[t](_),i.c()),b(i,1),i.m(l,null));const d={};C[0]&459|C[1]&262144&&(d.$$scope={dirty:C,ctx:_}),!r&&C[0]&1&&(r=!0,d.map=_[0],X(()=>r=!1)),a.$set(d)},i(_){u||(b(i),b(a.$$.fragment,_),u=!0)},o(_){y(i),y(a.$$.fragment,_),u=!1},d(_){_&&m(e),D[t].d(),n[29](null),j(a),c=!1,k()}}}function yl(n,e,l){let t={type:"FeatureCollection",features:[]},i=e.mode=="editing"?e.id:l;if(i!=null){let s=i.kind=="critical"?n.criticalIssues:n.policyConflictLog;t.features.push(Ie(s[i.idx].point))}return t}function Ie(n){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}}function we(n,e){return n||e!="Yes"}function Il(n,e,l){let t,i,s;he(n,W,h=>l(3,i=h)),he(n,bt,h=>l(40,s=h));let o,a,r={mode:"select"},u=s.url.searchParams.get("kind")||"";u=="critical"?r={mode:"new-critical"}:u=="conflict"&&(r={mode:"new-conflict"});let c=null,k=null,L=!1,D=!0,g=!0;async function E(h){c=a.scrollTop,l(1,r={mode:"editing",id:h}),l(2,k=null),await Ce(),l(4,a.scrollTop=0,a)}async function w(h){c=a.scrollTop,l(1,r={mode:"editing",id:h}),l(2,k=null),await Ce(),l(4,a.scrollTop=0,a);let K=h.kind=="critical"?i.criticalIssues:i.policyConflictLog;o==null||o.flyTo({center:K[h.idx].point,duration:500})}async function _(){if(r.mode!="editing"||!o)return;let h=r.id,K=h.kind=="critical"?i.criticalIssues:i.policyConflictLog,oe=JSON.parse(JSON.stringify(K[h.idx])),_t=o.getBounds().getWest(),mt=o.getBounds().getEast();oe.point[0]+=(mt-_t)*.05;let De=K.toSpliced(h.idx+1,0,oe);h.kind=="critical"?re(W,i.criticalIssues=De,i):re(W,i.policyConflictLog=De,i),await E({kind:h.kind,idx:h.idx+1})}async function C(){l(1,r={mode:"select"}),re(W,i.policyConflictLog=i.policyConflictLog.toSorted((h,K)=>Be(h.conflict)-Be(K.conflict)),i),re(W,i.criticalIssues=i.criticalIssues.toSorted((h,K)=>Pe(h.criticalIssue)-Pe(K.criticalIssue)),i),c!=null&&(await Ce(),l(4,a.scrollTop=c,a),c=null)}function f(h){if(!L&&r.mode!="select"){if(r.mode=="editing"){C();return}r.mode=="new-critical"?(re(W,i.criticalIssues=[...i.criticalIssues,{criticalIssue:s.url.searchParams.get("code")||"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),E({kind:"critical",idx:i.criticalIssues.length-1})):r.mode=="new-conflict"&&(re(W,i.policyConflictLog=[...i.policyConflictLog,{conflict:s.url.searchParams.get("code")||"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),E({kind:"conflict",idx:i.policyConflictLog.length-1}))}}function d(){r.mode=="editing"&&window.confirm("Delete this entry?")&&(r.id.kind=="critical"?(i.criticalIssues.splice(r.id.idx,1),W.set(i)):(i.policyConflictLog.splice(r.id.idx,1),W.set(i)),C())}function $(h){if(!o)return;let K={type:"FeatureCollection",features:[...i.criticalIssues.map(oe=>Ie(oe.point)),...i.policyConflictLog.map(oe=>Ie(oe.point)),...i.summary.networkMap.features]};K.features.length>0&&o.fitBounds(Pt(K),{padding:20,animate:h})}function I(h){let K=h.criticalIssue?Vt(h.criticalIssue):"Unknown critical";return h.locationName?`${K} (${h.locationName})`:K}function N(h){let K=h.conflict?"PO0"+Mt(h.conflict):"Unknown conflict";return h.locationName?`${K} (${h.locationName})`:K}function Y(h){if(r.mode=="editing"){let K=h.target.tagName,oe=K=="INPUT"||K=="TEXTAREA";h.key=="Escape"||h.key=="Enter"&&!oe?(h.stopPropagation(),C()):h.key=="Delete"&&!oe&&(h.stopPropagation(),d())}else(r.mode=="new-critical"||r.mode=="new-conflict")&&h.key=="Escape"&&(h.stopPropagation(),l(1,r={mode:"select"}))}const V=()=>$(!0);function ee(h){L=h,l(5,L)}function ge(h){D=h,l(6,D)}function fe(h){g=h,l(7,g)}const B=h=>w({kind:"critical",idx:h}),$e=h=>l(2,k={kind:"critical",idx:h}),ce=()=>l(2,k=null),p=h=>w({kind:"conflict",idx:h}),S=h=>l(2,k={kind:"conflict",idx:h}),te=()=>l(2,k=null);function le(h){Z[h?"unshift":"push"](()=>{a=h,l(4,a)})}const ue=()=>l(1,r={mode:"new-critical"}),pe=()=>l(1,r={mode:"new-conflict"});function rt(h,K){n.$$.not_equal(K.point,h)&&(K.point=h,W.set(i))}const st=h=>E({kind:"critical",idx:h}),at=h=>E({kind:"critical",idx:h});function ft(h,K){n.$$.not_equal(K.point,h)&&(K.point=h,W.set(i))}const ct=h=>E({kind:"conflict",idx:h}),ut=h=>E({kind:"conflict",idx:h});function pt(h){o=h,l(0,o)}return n.$$.update=()=>{n.$$.dirty[0]&1&&o&&$(!1),n.$$.dirty[0]&3&&o&&(o.getCanvas().style.cursor=r.mode=="new-critical"||r.mode=="new-conflict"?"crosshair":"auto"),n.$$.dirty[0]&14&&l(8,t=yl(i,r,k))},[o,r,k,i,a,L,D,g,t,E,w,_,C,f,d,$,I,N,Y,V,ee,ge,fe,B,$e,ce,p,S,te,le,ue,pe,rt,st,at,ft,ct,ut,pt]}class ei extends Ne{constructor(e){super(),Se(this,e,Il,Cl,Le,{},null,[-1,-1])}}export{ei as component};
