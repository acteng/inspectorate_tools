import{s as Ie,y as W,e as z,t as J,a as P,c as H,b as F,d as K,f as d,g as B,p as M,q as O,i as w,h as R,z as Z,k as he,w as at,R as ft,a0 as we,x as _e,K as ee,m as de,G as ve,j as me,o as ct,M as ue,N as pe,n as ut}from"../chunks/scheduler.CT9iOTEw.js";import{S as Le,i as Ne,e as Y,c as q,a as A,m as T,t as y,g as le,b as L,f as ne,d as G}from"../chunks/index.CnK_PB-e.js";import{g as pt}from"../chunks/globals.D0QH3NT1.js";import{e as oe}from"../chunks/each.CG1ZC7CZ.js";import{c as ze,p as He}from"../chunks/colors.DaC397qr.js";import{p as Je}from"../chunks/index.BQt1xz-t.js";import{R as Ke}from"../chunks/Radio.X_Wkl5Zy.js";/* empty css                                                    */import{S as We}from"../chunks/Select.BbD_F40c.js";import{T as Ze}from"../chunks/TextArea.DrIUbaw0.js";import{T as Ye}from"../chunks/TextInput.BWUZZh1n.js";import{s as U}from"../chunks/data.D-rHgzm_.js";import{l as be,n as ke,M as _t,b as mt,G as gt,C as $t}from"../chunks/index.B4_UVhQW.js";import{c as dt,p as ht,b as Ee,e as De,f as vt,g as bt}from"../chunks/lists.BvURpO7c.js";import{Y as Xe}from"../chunks/YesNo.D5pP2HkG.js";import{B as kt,C as wt,M as Qe}from"../chunks/Marker.BRzDhqGl.js";import{C as yt}from"../chunks/CollapsibleCard.CRXTxxPY.js";import{D as Ct}from"../chunks/DefaultButton.qd2_wY_n.js";import{S as xe}from"../chunks/SecondaryButton.Bjah1jNo.js";import{W as It}from"../chunks/WarningButton.B5FdEria.js";import{G as Lt,S as Nt,C as et,M as St}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.CEK1jPcf.js";import{G as Et,I as ye,p as Dt}from"../chunks/pan.BvTAaAG8.js";import"../chunks/paths.B5l5PwSO.js";import{p as Pt}from"../chunks/stores.Dh-3Tckb.js";import{R as Bt}from"../chunks/RouteMapLayer.DJ9x1svk.js";function Pe(n){let e,l,t;function o(s){n[5](s)}let f={label:"Resolved by Design",inlineSmall:!0};return n[1].criticalIssues[n[0]].resolved!==void 0&&(f.value=n[1].criticalIssues[n[0]].resolved),e=new Xe({props:f}),W.push(()=>Y(e,"value",o)),{c(){q(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,r){T(e,s,r),t=!0},p(s,r){const i={};!l&&r&3&&(l=!0,i.value=s[1].criticalIssues[s[0]].resolved,Z(()=>l=!1)),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){G(e,s)}}}function Mt(n){let e,l,t,o,f,s,r,i,u,p,S,b,v,$,N,k,_,m,a,g,C,j;function ie(c){n[2](c)}let D={label:"Critical Issue",emptyOption:!0,choices:dt};n[1].criticalIssues[n[0]].criticalIssue!==void 0&&(D.value=n[1].criticalIssues[n[0]].criticalIssue),p=new We({props:D}),W.push(()=>Y(p,"value",ie));function x(c){n[3](c)}let se={label:"Stage",choices:Je(["Existing","Design"]),inlineSmall:!0};n[1].criticalIssues[n[0]].stage!==void 0&&(se.value=n[1].criticalIssues[n[0]].stage),v=new Ke({props:se}),W.push(()=>Y(v,"value",x));function ge(c){n[4](c)}let re={label:"Location Name"};n[1].criticalIssues[n[0]].locationName!==void 0&&(re.value=n[1].criticalIssues[n[0]].locationName),k=new Ye({props:re}),W.push(()=>Y(k,"value",ge));let E=n[1].criticalIssues[n[0]].stage!="Design"&&Pe(n);function $e(c){n[6](c)}let ae={label:"Commentary & Feedback"};return n[1].criticalIssues[n[0]].notes!==void 0&&(ae.value=n[1].criticalIssues[n[0]].notes),g=new Ze({props:ae}),W.push(()=>Y(g,"value",$e)),{c(){e=z("div"),l=z("a"),t=J("Google StreetView"),f=P(),s=z("a"),r=J("Bing Streetside"),u=P(),q(p.$$.fragment),b=P(),q(v.$$.fragment),N=P(),q(k.$$.fragment),m=P(),E&&E.c(),a=P(),q(g.$$.fragment),this.h()},l(c){e=H(c,"DIV",{style:!0});var I=F(e);l=H(I,"A",{href:!0,target:!0});var X=F(l);t=K(X,"Google StreetView"),X.forEach(d),f=B(I),s=H(I,"A",{href:!0,target:!0});var Q=F(s);r=K(Q,"Bing Streetside"),Q.forEach(d),I.forEach(d),u=B(c),A(p.$$.fragment,c),b=B(c),A(v.$$.fragment,c),N=B(c),A(k.$$.fragment,c),m=B(c),E&&E.l(c),a=B(c),A(g.$$.fragment,c),this.h()},h(){M(l,"href",o=be(n[1].criticalIssues[n[0]].point)),M(l,"target","_blank"),M(s,"href",i=ke(n[1].criticalIssues[n[0]].point)),M(s,"target","_blank"),O(e,"display","flex"),O(e,"justify-content","space-evenly")},m(c,I){w(c,e,I),R(e,l),R(l,t),R(e,f),R(e,s),R(s,r),w(c,u,I),T(p,c,I),w(c,b,I),T(v,c,I),w(c,N,I),T(k,c,I),w(c,m,I),E&&E.m(c,I),w(c,a,I),T(g,c,I),j=!0},p(c,[I]){(!j||I&3&&o!==(o=be(c[1].criticalIssues[c[0]].point)))&&M(l,"href",o),(!j||I&3&&i!==(i=ke(c[1].criticalIssues[c[0]].point)))&&M(s,"href",i);const X={};!S&&I&3&&(S=!0,X.value=c[1].criticalIssues[c[0]].criticalIssue,Z(()=>S=!1)),p.$set(X);const Q={};!$&&I&3&&($=!0,Q.value=c[1].criticalIssues[c[0]].stage,Z(()=>$=!1)),v.$set(Q);const fe={};!_&&I&3&&(_=!0,fe.value=c[1].criticalIssues[c[0]].locationName,Z(()=>_=!1)),k.$set(fe),c[1].criticalIssues[c[0]].stage!="Design"?E?(E.p(c,I),I&3&&y(E,1)):(E=Pe(c),E.c(),y(E,1),E.m(a.parentNode,a)):E&&(le(),L(E,1,1,()=>{E=null}),ne());const ce={};!C&&I&3&&(C=!0,ce.value=c[1].criticalIssues[c[0]].notes,Z(()=>C=!1)),g.$set(ce)},i(c){j||(y(p.$$.fragment,c),y(v.$$.fragment,c),y(k.$$.fragment,c),y(E),y(g.$$.fragment,c),j=!0)},o(c){L(p.$$.fragment,c),L(v.$$.fragment,c),L(k.$$.fragment,c),L(E),L(g.$$.fragment,c),j=!1},d(c){c&&(d(e),d(u),d(b),d(N),d(m),d(a)),G(p,c),G(v,c),G(k,c),E&&E.d(c),G(g,c)}}}function qt(n,e,l){let t;he(n,U,p=>l(1,t=p));let{idx:o}=e;function f(p){n.$$.not_equal(t.criticalIssues[o].criticalIssue,p)&&(t.criticalIssues[o].criticalIssue=p,U.set(t))}function s(p){n.$$.not_equal(t.criticalIssues[o].stage,p)&&(t.criticalIssues[o].stage=p,U.set(t))}function r(p){n.$$.not_equal(t.criticalIssues[o].locationName,p)&&(t.criticalIssues[o].locationName=p,U.set(t))}function i(p){n.$$.not_equal(t.criticalIssues[o].resolved,p)&&(t.criticalIssues[o].resolved=p,U.set(t))}function u(p){n.$$.not_equal(t.criticalIssues[o].notes,p)&&(t.criticalIssues[o].notes=p,U.set(t))}return n.$$set=p=>{"idx"in p&&l(0,o=p.idx)},[o,t,f,s,r,i,u]}class At extends Le{constructor(e){super(),Ne(this,e,qt,Mt,Ie,{idx:0})}}function Be(n){let e,l,t;function o(s){n[5](s)}let f={label:"Resolved by Design",inlineSmall:!0};return n[1].policyConflictLog[n[0]].resolved!==void 0&&(f.value=n[1].policyConflictLog[n[0]].resolved),e=new Xe({props:f}),W.push(()=>Y(e,"value",o)),{c(){q(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,r){T(e,s,r),t=!0},p(s,r){const i={};!l&&r&3&&(l=!0,i.value=s[1].policyConflictLog[s[0]].resolved,Z(()=>l=!1)),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){G(e,s)}}}function Tt(n){let e,l,t,o,f,s,r,i,u,p,S,b,v,$,N,k,_,m,a,g,C,j;function ie(c){n[2](c)}let D={label:"Policy Conflict",emptyOption:!0,choices:ht};n[1].policyConflictLog[n[0]].conflict!==void 0&&(D.value=n[1].policyConflictLog[n[0]].conflict),p=new We({props:D}),W.push(()=>Y(p,"value",ie));function x(c){n[3](c)}let se={label:"Stage",choices:Je(["Existing","Design"]),inlineSmall:!0};n[1].policyConflictLog[n[0]].stage!==void 0&&(se.value=n[1].policyConflictLog[n[0]].stage),v=new Ke({props:se}),W.push(()=>Y(v,"value",x));function ge(c){n[4](c)}let re={label:"Location Name"};n[1].policyConflictLog[n[0]].locationName!==void 0&&(re.value=n[1].policyConflictLog[n[0]].locationName),k=new Ye({props:re}),W.push(()=>Y(k,"value",ge));let E=n[1].policyConflictLog[n[0]].stage!="Design"&&Be(n);function $e(c){n[6](c)}let ae={label:"Commentary & Feedback"};return n[1].policyConflictLog[n[0]].notes!==void 0&&(ae.value=n[1].policyConflictLog[n[0]].notes),g=new Ze({props:ae}),W.push(()=>Y(g,"value",$e)),{c(){e=z("div"),l=z("a"),t=J("Google StreetView"),f=P(),s=z("a"),r=J("Bing Streetside"),u=P(),q(p.$$.fragment),b=P(),q(v.$$.fragment),N=P(),q(k.$$.fragment),m=P(),E&&E.c(),a=P(),q(g.$$.fragment),this.h()},l(c){e=H(c,"DIV",{style:!0});var I=F(e);l=H(I,"A",{href:!0,target:!0});var X=F(l);t=K(X,"Google StreetView"),X.forEach(d),f=B(I),s=H(I,"A",{href:!0,target:!0});var Q=F(s);r=K(Q,"Bing Streetside"),Q.forEach(d),I.forEach(d),u=B(c),A(p.$$.fragment,c),b=B(c),A(v.$$.fragment,c),N=B(c),A(k.$$.fragment,c),m=B(c),E&&E.l(c),a=B(c),A(g.$$.fragment,c),this.h()},h(){M(l,"href",o=be(n[1].policyConflictLog[n[0]].point)),M(l,"target","_blank"),M(s,"href",i=ke(n[1].policyConflictLog[n[0]].point)),M(s,"target","_blank"),O(e,"display","flex"),O(e,"justify-content","space-evenly")},m(c,I){w(c,e,I),R(e,l),R(l,t),R(e,f),R(e,s),R(s,r),w(c,u,I),T(p,c,I),w(c,b,I),T(v,c,I),w(c,N,I),T(k,c,I),w(c,m,I),E&&E.m(c,I),w(c,a,I),T(g,c,I),j=!0},p(c,[I]){(!j||I&3&&o!==(o=be(c[1].policyConflictLog[c[0]].point)))&&M(l,"href",o),(!j||I&3&&i!==(i=ke(c[1].policyConflictLog[c[0]].point)))&&M(s,"href",i);const X={};!S&&I&3&&(S=!0,X.value=c[1].policyConflictLog[c[0]].conflict,Z(()=>S=!1)),p.$set(X);const Q={};!$&&I&3&&($=!0,Q.value=c[1].policyConflictLog[c[0]].stage,Z(()=>$=!1)),v.$set(Q);const fe={};!_&&I&3&&(_=!0,fe.value=c[1].policyConflictLog[c[0]].locationName,Z(()=>_=!1)),k.$set(fe),c[1].policyConflictLog[c[0]].stage!="Design"?E?(E.p(c,I),I&3&&y(E,1)):(E=Be(c),E.c(),y(E,1),E.m(a.parentNode,a)):E&&(le(),L(E,1,1,()=>{E=null}),ne());const ce={};!C&&I&3&&(C=!0,ce.value=c[1].policyConflictLog[c[0]].notes,Z(()=>C=!1)),g.$set(ce)},i(c){j||(y(p.$$.fragment,c),y(v.$$.fragment,c),y(k.$$.fragment,c),y(E),y(g.$$.fragment,c),j=!0)},o(c){L(p.$$.fragment,c),L(v.$$.fragment,c),L(k.$$.fragment,c),L(E),L(g.$$.fragment,c),j=!1},d(c){c&&(d(e),d(u),d(b),d(N),d(m),d(a)),G(p,c),G(v,c),G(k,c),E&&E.d(c),G(g,c)}}}function Gt(n,e,l){let t;he(n,U,p=>l(1,t=p));let{idx:o}=e;function f(p){n.$$.not_equal(t.policyConflictLog[o].conflict,p)&&(t.policyConflictLog[o].conflict=p,U.set(t))}function s(p){n.$$.not_equal(t.policyConflictLog[o].stage,p)&&(t.policyConflictLog[o].stage=p,U.set(t))}function r(p){n.$$.not_equal(t.policyConflictLog[o].locationName,p)&&(t.policyConflictLog[o].locationName=p,U.set(t))}function i(p){n.$$.not_equal(t.policyConflictLog[o].resolved,p)&&(t.policyConflictLog[o].resolved=p,U.set(t))}function u(p){n.$$.not_equal(t.policyConflictLog[o].notes,p)&&(t.policyConflictLog[o].notes=p,U.set(t))}return n.$$set=p=>{"idx"in p&&l(0,o=p.idx)},[o,t,f,s,r,i,u]}class Rt extends Le{constructor(e){super(),Ne(this,e,Gt,Tt,Ie,{idx:0})}}const{window:Vt}=pt;function Me(n,e,l){const t=n.slice();return t[40]=e[l],t[41]=e,t[42]=l,t}function qe(n,e,l){const t=n.slice();return t[43]=e[l],t[44]=e,t[42]=l,t}function Ae(n,e,l){const t=n.slice();return t[40]=e[l],t[42]=l,t}function Te(n,e,l){const t=n.slice();return t[43]=e[l],t[42]=l,t}function jt(n){let e,l,t,o,f,s,r,i,u,p;e=new Ct({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),e.$on("click",n[11]),t=new It({props:{$$slots:{default:[Ot]},$$scope:{ctx:n}}}),t.$on("click",n[13]),f=new xe({props:{$$slots:{default:[zt]},$$scope:{ctx:n}}}),f.$on("click",n[10]);const S=[Jt,Ht],b=[];function v($,N){return $[1].id.kind=="critical"?0:1}return r=v(n),i=b[r]=S[r](n),{c(){q(e.$$.fragment),l=P(),q(t.$$.fragment),o=P(),q(f.$$.fragment),s=P(),i.c(),u=ee()},l($){A(e.$$.fragment,$),l=B($),A(t.$$.fragment,$),o=B($),A(f.$$.fragment,$),s=B($),i.l($),u=ee()},m($,N){T(e,$,N),w($,l,N),T(t,$,N),w($,o,N),T(f,$,N),w($,s,N),b[r].m($,N),w($,u,N),p=!0},p($,N){const k={};N[1]&65536&&(k.$$scope={dirty:N,ctx:$}),e.$set(k);const _={};N[1]&65536&&(_.$$scope={dirty:N,ctx:$}),t.$set(_);const m={};N[1]&65536&&(m.$$scope={dirty:N,ctx:$}),f.$set(m);let a=r;r=v($),r===a?b[r].p($,N):(le(),L(b[a],1,1,()=>{b[a]=null}),ne(),i=b[r],i?i.p($,N):(i=b[r]=S[r]($),i.c()),y(i,1),i.m(u.parentNode,u))},i($){p||(y(e.$$.fragment,$),y(t.$$.fragment,$),y(f.$$.fragment,$),y(i),p=!0)},o($){L(e.$$.fragment,$),L(t.$$.fragment,$),L(f.$$.fragment,$),L(i),p=!1},d($){$&&(d(l),d(o),d(s),d(u)),G(e,$),G(t,$),G(f,$),b[r].d($)}}}function Ft(n){let e,l,t,o="Critical Issues",f,s,r,i="Policy Conflicts",u,p,S;e=new yt({props:{label:"Tools",open:!0,$$slots:{default:[Zt]},$$scope:{ctx:n}}});let b=oe(n[3].criticalIssues),v=[];for(let m=0;m<b.length;m+=1)v[m]=Re(Te(n,b,m));const $=m=>L(v[m],1,1,()=>{v[m]=null});let N=oe(n[3].policyConflictLog),k=[];for(let m=0;m<N.length;m+=1)k[m]=je(Ae(n,N,m));const _=m=>L(k[m],1,1,()=>{k[m]=null});return{c(){q(e.$$.fragment),l=P(),t=z("h3"),t.textContent=o,f=P();for(let m=0;m<v.length;m+=1)v[m].c();s=P(),r=z("h3"),r.textContent=i,u=P();for(let m=0;m<k.length;m+=1)k[m].c();p=ee()},l(m){A(e.$$.fragment,m),l=B(m),t=H(m,"H3",{"data-svelte-h":!0}),de(t)!=="svelte-1qhh5xr"&&(t.textContent=o),f=B(m);for(let a=0;a<v.length;a+=1)v[a].l(m);s=B(m),r=H(m,"H3",{"data-svelte-h":!0}),de(r)!=="svelte-eyxzjx"&&(r.textContent=i),u=B(m);for(let a=0;a<k.length;a+=1)k[a].l(m);p=ee()},m(m,a){T(e,m,a),w(m,l,a),w(m,t,a),w(m,f,a);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(m,a);w(m,s,a),w(m,r,a),w(m,u,a);for(let g=0;g<k.length;g+=1)k[g]&&k[g].m(m,a);w(m,p,a),S=!0},p(m,a){const g={};if(a[0]&97|a[1]&65536&&(g.$$scope={dirty:a,ctx:m}),e.$set(g),a[0]&33292){b=oe(m[3].criticalIssues);let C;for(C=0;C<b.length;C+=1){const j=Te(m,b,C);v[C]?(v[C].p(j,a),y(v[C],1)):(v[C]=Re(j),v[C].c(),y(v[C],1),v[C].m(s.parentNode,s))}for(le(),C=b.length;C<v.length;C+=1)$(C);ne()}if(a[0]&66060){N=oe(m[3].policyConflictLog);let C;for(C=0;C<N.length;C+=1){const j=Ae(m,N,C);k[C]?(k[C].p(j,a),y(k[C],1)):(k[C]=je(j),k[C].c(),y(k[C],1),k[C].m(p.parentNode,p))}for(le(),C=N.length;C<k.length;C+=1)_(C);ne()}},i(m){if(!S){y(e.$$.fragment,m);for(let a=0;a<b.length;a+=1)y(v[a]);for(let a=0;a<N.length;a+=1)y(k[a]);S=!0}},o(m){L(e.$$.fragment,m),v=v.filter(Boolean);for(let a=0;a<v.length;a+=1)L(v[a]);k=k.filter(Boolean);for(let a=0;a<k.length;a+=1)L(k[a]);S=!1},d(m){m&&(d(l),d(t),d(f),d(s),d(r),d(u),d(p)),G(e,m),ve(v,m),ve(k,m)}}}function Ut(n){let e;return{c(){e=J("Save")},l(l){e=K(l,"Save")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Ot(n){let e;return{c(){e=J("Delete")},l(l){e=K(l,"Delete")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function zt(n){let e;return{c(){e=J("Copy")},l(l){e=K(l,"Copy")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Ht(n){let e,l;return e=new Rt({props:{idx:n[1].id.idx}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,o){T(e,t,o),l=!0},p(t,o){const f={};o[0]&2&&(f.idx=t[1].id.idx),e.$set(f)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Jt(n){let e,l;return e=new At({props:{idx:n[1].id.idx}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,o){T(e,t,o),l=!0},p(t,o){const f={};o[0]&2&&(f.idx=t[1].id.idx),e.$set(f)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Kt(n){let e;return{c(){e=J("Zoom to fit")},l(l){e=K(l,"Zoom to fit")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Wt(n){let e;return{c(){e=J("Show route")},l(l){e=K(l,"Show route")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Zt(n){let e,l,t,o,f,s,r,i,u,p,S,b;e=new xe({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),e.$on("click",n[18]),t=new kt({}),f=new Lt({});function v(_){n[19](_)}let $={map:n[0]};n[5]!==void 0&&($.enabled=n[5]),r=new Nt({props:$}),W.push(()=>Y(r,"enabled",v));function N(_){n[20](_)}let k={$$slots:{default:[Wt]},$$scope:{ctx:n}};return n[6]!==void 0&&(k.checked=n[6]),p=new wt({props:k}),W.push(()=>Y(p,"checked",N)),{c(){q(e.$$.fragment),l=P(),q(t.$$.fragment),o=P(),q(f.$$.fragment),s=P(),q(r.$$.fragment),u=P(),q(p.$$.fragment)},l(_){A(e.$$.fragment,_),l=B(_),A(t.$$.fragment,_),o=B(_),A(f.$$.fragment,_),s=B(_),A(r.$$.fragment,_),u=B(_),A(p.$$.fragment,_)},m(_,m){T(e,_,m),w(_,l,m),T(t,_,m),w(_,o,m),T(f,_,m),w(_,s,m),T(r,_,m),w(_,u,m),T(p,_,m),b=!0},p(_,m){const a={};m[1]&65536&&(a.$$scope={dirty:m,ctx:_}),e.$set(a);const g={};m[0]&1&&(g.map=_[0]),!i&&m[0]&32&&(i=!0,g.enabled=_[5],Z(()=>i=!1)),r.$set(g);const C={};m[1]&65536&&(C.$$scope={dirty:m,ctx:_}),!S&&m[0]&64&&(S=!0,C.checked=_[6],Z(()=>S=!1)),p.$set(C)},i(_){b||(y(e.$$.fragment,_),y(t.$$.fragment,_),y(f.$$.fragment,_),y(r.$$.fragment,_),y(p.$$.fragment,_),b=!0)},o(_){L(e.$$.fragment,_),L(t.$$.fragment,_),L(f.$$.fragment,_),L(r.$$.fragment,_),L(p.$$.fragment,_),b=!1},d(_){_&&(d(l),d(o),d(s),d(u)),G(e,_),G(t,_),G(f,_),G(r,_),G(p,_)}}}function Ge(n){let e,l,t=n[43].resolved+"",o;return{c(){e=z("span"),l=J("Resolved: "),o=J(t)},l(f){e=H(f,"SPAN",{});var s=F(e);l=K(s,"Resolved: "),o=K(s,t),s.forEach(d)},m(f,s){w(f,e,s),R(e,l),R(e,o)},p(f,s){s[0]&8&&t!==(t=f[43].resolved+"")&&me(o,t)},d(f){f&&d(e)}}}function Yt(n){let e,l,t,o=n[43].stage+"",f,s,r=n[43].stage!="Design"&&Ge(n);return{c(){e=z("div"),l=z("span"),t=J("Stage: "),f=J(o),s=P(),r&&r.c(),this.h()},l(i){e=H(i,"DIV",{style:!0});var u=F(e);l=H(u,"SPAN",{});var p=F(l);t=K(p,"Stage: "),f=K(p,o),p.forEach(d),s=B(u),r&&r.l(u),u.forEach(d),this.h()},h(){O(e,"width","100%"),O(e,"display","flex"),O(e,"justify-content","space-between")},m(i,u){w(i,e,u),R(e,l),R(l,t),R(l,f),R(e,s),r&&r.m(e,null)},p(i,u){u[0]&8&&o!==(o=i[43].stage+"")&&me(f,o),i[43].stage!="Design"?r?r.p(i,u):(r=Ge(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(i){i&&d(e),r&&r.d()}}}function Re(n){let e,l;function t(){return n[21](n[42])}function o(){return n[22](n[42])}return e=new et({props:{name:n[15](n[43]),$$slots:{default:[Yt]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",o),e.$on("mouseleave",n[23]),{c(){q(e.$$.fragment)},l(f){A(e.$$.fragment,f)},m(f,s){T(e,f,s),l=!0},p(f,s){n=f;const r={};s[0]&8&&(r.name=n[15](n[43])),s[0]&8|s[1]&65536&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(f){l||(y(e.$$.fragment,f),l=!0)},o(f){L(e.$$.fragment,f),l=!1},d(f){G(e,f)}}}function Ve(n){let e,l,t=n[40].resolved+"",o;return{c(){e=z("span"),l=J("Resolved: "),o=J(t)},l(f){e=H(f,"SPAN",{});var s=F(e);l=K(s,"Resolved: "),o=K(s,t),s.forEach(d)},m(f,s){w(f,e,s),R(e,l),R(e,o)},p(f,s){s[0]&8&&t!==(t=f[40].resolved+"")&&me(o,t)},d(f){f&&d(e)}}}function Xt(n){let e,l,t,o=n[40].stage+"",f,s,r,i=n[40].stage!="Design"&&Ve(n);return{c(){e=z("div"),l=z("span"),t=J("Stage: "),f=J(o),s=P(),i&&i.c(),r=P(),this.h()},l(u){e=H(u,"DIV",{style:!0});var p=F(e);l=H(p,"SPAN",{});var S=F(l);t=K(S,"Stage: "),f=K(S,o),S.forEach(d),s=B(p),i&&i.l(p),p.forEach(d),r=B(u),this.h()},h(){O(e,"width","100%"),O(e,"display","flex"),O(e,"justify-content","space-between")},m(u,p){w(u,e,p),R(e,l),R(l,t),R(l,f),R(e,s),i&&i.m(e,null),w(u,r,p)},p(u,p){p[0]&8&&o!==(o=u[40].stage+"")&&me(f,o),u[40].stage!="Design"?i?i.p(u,p):(i=Ve(u),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(u){u&&(d(e),d(r)),i&&i.d()}}}function je(n){let e,l;function t(){return n[24](n[42])}function o(){return n[25](n[42])}return e=new et({props:{name:n[16](n[40]),$$slots:{default:[Xt]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",o),e.$on("mouseleave",n[26]),{c(){q(e.$$.fragment)},l(f){A(e.$$.fragment,f)},m(f,s){T(e,f,s),l=!0},p(f,s){n=f;const r={};s[0]&8&&(r.name=n[16](n[40])),s[0]&8|s[1]&65536&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(f){l||(y(e.$$.fragment,f),l=!0)},o(f){L(e.$$.fragment,f),l=!1},d(f){G(e,f)}}}function Fe(n){let e,l,t,o,f,s,r;return l=new ye({props:{$$slots:{default:[el]},$$scope:{ctx:n}}}),l.$on("click",n[11]),o=new ye({props:{$$slots:{default:[nl]},$$scope:{ctx:n}}}),o.$on("click",n[28]),s=new ye({props:{$$slots:{default:[sl]},$$scope:{ctx:n}}}),s.$on("click",n[29]),{c(){e=z("div"),q(l.$$.fragment),t=P(),q(o.$$.fragment),f=P(),q(s.$$.fragment),this.h()},l(i){e=H(i,"DIV",{class:!0});var u=F(e);A(l.$$.fragment,u),t=B(u),A(o.$$.fragment,u),f=B(u),A(s.$$.fragment,u),u.forEach(d),this.h()},h(){M(e,"class","control-panel svelte-17y3eic")},m(i,u){w(i,e,u),T(l,e,null),R(e,t),T(o,e,null),R(e,f),T(s,e,null),r=!0},p(i,u){const p={};u[0]&2|u[1]&65536&&(p.$$scope={dirty:u,ctx:i}),l.$set(p);const S={};u[0]&2|u[1]&65536&&(S.$$scope={dirty:u,ctx:i}),o.$set(S);const b={};u[0]&2|u[1]&65536&&(b.$$scope={dirty:u,ctx:i}),s.$set(b)},i(i){r||(y(l.$$.fragment,i),y(o.$$.fragment,i),y(s.$$.fragment,i),r=!0)},o(i){L(l.$$.fragment,i),L(o.$$.fragment,i),L(s.$$.fragment,i),r=!1},d(i){i&&d(e),G(l),G(o),G(s)}}}function Qt(n){let e;return{c(){e=J("Move map")},l(l){e=K(l,"Move map")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function xt(n){let e,l="Move map";return{c(){e=z("u"),e.textContent=l},l(t){e=H(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-1719ytd"&&(e.textContent=l)},m(t,o){w(t,e,o)},d(t){t&&d(e)}}}function el(n){let e,l,t,o;function f(i,u){return i[1].mode=="select"?xt:Qt}let s=f(n),r=s(n);return{c(){e=z("img"),t=P(),r.c(),o=ee(),this.h()},l(i){e=H(i,"IMG",{src:!0,alt:!0,style:!0}),t=B(i),r.l(i),o=ee(),this.h()},h(){ct(e.src,l=Dt)||M(e,"src",l),M(e,"alt","Move map"),O(e,"vertical-align","middle")},m(i,u){w(i,e,u),w(i,t,u),r.m(i,u),w(i,o,u)},p(i,u){s!==(s=f(i))&&(r.d(1),r=s(i),r&&(r.c(),r.m(o.parentNode,o)))},d(i){i&&(d(e),d(t),d(o)),r.d(i)}}}function tl(n){let e;return{c(){e=J("New critical issue")},l(l){e=K(l,"New critical issue")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function ll(n){let e,l="New critical issue";return{c(){e=z("u"),e.textContent=l},l(t){e=H(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-1igjogw"&&(e.textContent=l)},m(t,o){w(t,e,o)},d(t){t&&d(e)}}}function nl(n){let e,l,t,o;function f(i,u){return i[1].mode=="new-critical"?ll:tl}let s=f(n),r=s(n);return{c(){e=ue("svg"),l=ue("polygon"),t=P(),r.c(),o=ee(),this.h()},l(i){e=pe(i,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=F(e);l=pe(u,"polygon",{points:!0,fill:!0,class:!0}),F(l).forEach(d),u.forEach(d),t=B(i),r.l(i),o=ee(),this.h()},h(){M(l,"points","12,0 0,24 24,24"),M(l,"fill",ze.critical.background),M(l,"class","svelte-17y3eic"),M(e,"width","24"),M(e,"height","24"),M(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"vertical-align","middle")},m(i,u){w(i,e,u),R(e,l),w(i,t,u),r.m(i,u),w(i,o,u)},p(i,u){s!==(s=f(i))&&(r.d(1),r=s(i),r&&(r.c(),r.m(o.parentNode,o)))},d(i){i&&(d(e),d(t),d(o)),r.d(i)}}}function il(n){let e;return{c(){e=J("New policy conflict")},l(l){e=K(l,"New policy conflict")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function ol(n){let e,l="New policy conflict";return{c(){e=z("u"),e.textContent=l},l(t){e=H(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-14o8e5o"&&(e.textContent=l)},m(t,o){w(t,e,o)},d(t){t&&d(e)}}}function sl(n){let e,l,t,o;function f(i,u){return i[1].mode=="new-conflict"?ol:il}let s=f(n),r=s(n);return{c(){e=ue("svg"),l=ue("circle"),t=P(),r.c(),o=ee(),this.h()},l(i){e=pe(i,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=F(e);l=pe(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),F(l).forEach(d),u.forEach(d),t=B(i),r.l(i),o=ee(),this.h()},h(){M(l,"cx","12"),M(l,"cy","12"),M(l,"r","12"),M(l,"fill",He),M(e,"width","24"),M(e,"height","24"),M(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"vertical-align","middle")},m(i,u){w(i,e,u),R(e,l),w(i,t,u),r.m(i,u),w(i,o,u)},p(i,u){s!==(s=f(i))&&(r.d(1),r=s(i),r&&(r.c(),r.m(o.parentNode,o)))},d(i){i&&(d(e),d(t),d(o)),r.d(i)}}}function rl(n){let e,l,t,o=n[43].criticalIssue+"",f;return{c(){e=ue("svg"),l=ue("polygon"),t=ue("text"),f=J(o),this.h()},l(s){e=pe(s,"svg",{width:!0,height:!0,xmlns:!0});var r=F(e);l=pe(r,"polygon",{points:!0,fill:!0,class:!0}),F(l).forEach(d),t=pe(r,"text",{x:!0,y:!0});var i=F(t);f=K(i,o),i.forEach(d),r.forEach(d),this.h()},h(){M(l,"points","20,0 0,40 40,40"),M(l,"fill",ze.critical.background),M(l,"class","svelte-17y3eic"),M(t,"x","13"),M(t,"y","30"),O(t,"fill","white"),M(e,"width","40"),M(e,"height","40"),M(e,"xmlns","http://www.w3.org/2000/svg")},m(s,r){w(s,e,r),R(e,l),R(e,t),R(t,f)},p(s,r){r[0]&8&&o!==(o=s[43].criticalIssue+"")&&me(f,o)},d(s){s&&d(e)}}}function Ue(n){let e,l,t;function o(i){n[30](i,n[43])}function f(){return n[31](n[42])}function s(){return n[32](n[42])}let r={draggable:!0,$$slots:{default:[rl]},$$scope:{ctx:n}};return n[43].point!==void 0&&(r.lngLat=n[43].point),e=new Qe({props:r}),W.push(()=>Y(e,"lngLat",o)),e.$on("click",f),e.$on("dragend",s),{c(){q(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,u){T(e,i,u),t=!0},p(i,u){n=i;const p={};u[0]&8|u[1]&65536&&(p.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,p.lngLat=n[43].point,Z(()=>l=!1)),e.$set(p)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){G(e,i)}}}function al(n){let e,l=n[40].conflict+"",t;return{c(){e=z("span"),t=J(l),this.h()},l(o){e=H(o,"SPAN",{class:!0});var f=F(e);t=K(f,l),f.forEach(d),this.h()},h(){M(e,"class","dot svelte-17y3eic"),O(e,"background",He)},m(o,f){w(o,e,f),R(e,t)},p(o,f){f[0]&8&&l!==(l=o[40].conflict+"")&&me(t,l)},d(o){o&&d(e)}}}function Oe(n){let e,l,t;function o(i){n[33](i,n[40])}function f(){return n[34](n[42])}function s(){return n[35](n[42])}let r={draggable:!0,$$slots:{default:[al]},$$scope:{ctx:n}};return n[40].point!==void 0&&(r.lngLat=n[40].point),e=new Qe({props:r}),W.push(()=>Y(e,"lngLat",o)),e.$on("click",f),e.$on("dragend",s),{c(){q(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,u){T(e,i,u),t=!0},p(i,u){n=i;const p={};u[0]&8|u[1]&65536&&(p.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,p.lngLat=n[40].point,Z(()=>l=!1)),e.$set(p)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){G(e,i)}}}function fl(n){let e,l;return e=new $t({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,o){T(e,t,o),l=!0},p:ut,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function cl(n){let e,l,t,o,f,s,r,i,u,p,S;e=new St({}),e.$on("click",n[12]);let b=n[1].mode!="editing"&&Fe(n);o=new Bt({props:{show:n[6]}});let v=oe(n[3].criticalIssues),$=[];for(let a=0;a<v.length;a+=1)$[a]=Ue(qe(n,v,a));const N=a=>L($[a],1,1,()=>{$[a]=null});let k=oe(n[3].policyConflictLog),_=[];for(let a=0;a<k.length;a+=1)_[a]=Oe(Me(n,k,a));const m=a=>L(_[a],1,1,()=>{_[a]=null});return i=new gt({props:{data:n[7],$$slots:{default:[fl]},$$scope:{ctx:n}}}),p=new Et({props:{map:n[0]}}),{c(){q(e.$$.fragment),l=P(),b&&b.c(),t=P(),q(o.$$.fragment),f=P();for(let a=0;a<$.length;a+=1)$[a].c();s=P();for(let a=0;a<_.length;a+=1)_[a].c();r=P(),q(i.$$.fragment),u=P(),q(p.$$.fragment)},l(a){A(e.$$.fragment,a),l=B(a),b&&b.l(a),t=B(a),A(o.$$.fragment,a),f=B(a);for(let g=0;g<$.length;g+=1)$[g].l(a);s=B(a);for(let g=0;g<_.length;g+=1)_[g].l(a);r=B(a),A(i.$$.fragment,a),u=B(a),A(p.$$.fragment,a)},m(a,g){T(e,a,g),w(a,l,g),b&&b.m(a,g),w(a,t,g),T(o,a,g),w(a,f,g);for(let C=0;C<$.length;C+=1)$[C]&&$[C].m(a,g);w(a,s,g);for(let C=0;C<_.length;C+=1)_[C]&&_[C].m(a,g);w(a,r,g),T(i,a,g),w(a,u,g),T(p,a,g),S=!0},p(a,g){a[1].mode!="editing"?b?(b.p(a,g),g[0]&2&&y(b,1)):(b=Fe(a),b.c(),y(b,1),b.m(t.parentNode,t)):b&&(le(),L(b,1,1,()=>{b=null}),ne());const C={};if(g[0]&64&&(C.show=a[6]),o.$set(C),g[0]&264){v=oe(a[3].criticalIssues);let D;for(D=0;D<v.length;D+=1){const x=qe(a,v,D);$[D]?($[D].p(x,g),y($[D],1)):($[D]=Ue(x),$[D].c(),y($[D],1),$[D].m(s.parentNode,s))}for(le(),D=v.length;D<$.length;D+=1)N(D);ne()}if(g[0]&264){k=oe(a[3].policyConflictLog);let D;for(D=0;D<k.length;D+=1){const x=Me(a,k,D);_[D]?(_[D].p(x,g),y(_[D],1)):(_[D]=Oe(x),_[D].c(),y(_[D],1),_[D].m(r.parentNode,r))}for(le(),D=k.length;D<_.length;D+=1)m(D);ne()}const j={};g[0]&128&&(j.data=a[7]),g[1]&65536&&(j.$$scope={dirty:g,ctx:a}),i.$set(j);const ie={};g[0]&1&&(ie.map=a[0]),p.$set(ie)},i(a){if(!S){y(e.$$.fragment,a),y(b),y(o.$$.fragment,a);for(let g=0;g<v.length;g+=1)y($[g]);for(let g=0;g<k.length;g+=1)y(_[g]);y(i.$$.fragment,a),y(p.$$.fragment,a),S=!0}},o(a){L(e.$$.fragment,a),L(b),L(o.$$.fragment,a),$=$.filter(Boolean);for(let g=0;g<$.length;g+=1)L($[g]);_=_.filter(Boolean);for(let g=0;g<_.length;g+=1)L(_[g]);L(i.$$.fragment,a),L(p.$$.fragment,a),S=!1},d(a){a&&(d(l),d(t),d(f),d(s),d(r),d(u)),G(e,a),b&&b.d(a),G(o,a),ve($,a),ve(_,a),G(i,a),G(p,a)}}}function ul(n){let e,l,t,o,f,s,r,i,u,p,S;const b=[Ft,jt],v=[];function $(_,m){return _[1].mode!="editing"?0:1}t=$(n),o=v[t]=b[t](n);function N(_){n[36](_)}let k={$$slots:{default:[cl]},$$scope:{ctx:n}};return n[0]!==void 0&&(k.map=n[0]),r=new _t({props:k}),W.push(()=>Y(r,"map",N)),{c(){e=z("div"),l=z("div"),o.c(),f=P(),s=z("div"),q(r.$$.fragment),this.h()},l(_){e=H(_,"DIV",{style:!0});var m=F(e);l=H(m,"DIV",{style:!0});var a=F(l);o.l(a),a.forEach(d),f=B(m),s=H(m,"DIV",{style:!0});var g=F(s);A(r.$$.fragment,g),g.forEach(d),m.forEach(d),this.h()},h(){O(l,"width","30%"),O(l,"overflow-y","scroll"),O(l,"padding","10px"),O(l,"border","1px solid black"),O(s,"position","relative"),O(s,"width","70%"),O(e,"display","flex"),O(e,"height","80vh")},m(_,m){w(_,e,m),R(e,l),v[t].m(l,null),n[27](l),R(e,f),R(e,s),T(r,s,null),u=!0,p||(S=at(Vt,"keydown",n[17]),p=!0)},p(_,m){let a=t;t=$(_),t===a?v[t].p(_,m):(le(),L(v[a],1,1,()=>{v[a]=null}),ne(),o=v[t],o?o.p(_,m):(o=v[t]=b[t](_),o.c()),y(o,1),o.m(l,null));const g={};m[0]&203|m[1]&65536&&(g.$$scope={dirty:m,ctx:_}),!i&&m[0]&1&&(i=!0,g.map=_[0],Z(()=>i=!1)),r.$set(g)},i(_){u||(y(o),y(r.$$.fragment,_),u=!0)},o(_){L(o),L(r.$$.fragment,_),u=!1},d(_){_&&d(e),v[t].d(),n[27](null),G(r),p=!1,S()}}}function pl(n,e,l){let t={type:"FeatureCollection",features:[]},o=e.mode=="editing"?e.id:l;if(o!=null){let f=o.kind=="critical"?n.criticalIssues:n.policyConflictLog;t.features.push(Ce(f[o.idx].point))}return t}function Ce(n){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}}function _l(n,e,l){let t,o,f;he(n,U,h=>l(3,o=h)),he(n,Pt,h=>l(38,f=h));let s,r,i={mode:"select"},u=f.url.searchParams.get("kind")||"";u=="critical"?i={mode:"new-critical"}:u=="conflict"&&(i={mode:"new-conflict"});let p=null,S=null,b=!1,v=!0;async function $(h){p=r.scrollTop,l(1,i={mode:"editing",id:h}),l(2,S=null),await we(),l(4,r.scrollTop=0,r)}async function N(h){p=r.scrollTop,l(1,i={mode:"editing",id:h}),l(2,S=null),await we(),l(4,r.scrollTop=0,r);let V=h.kind=="critical"?o.criticalIssues:o.policyConflictLog;s.flyTo({center:V[h.idx].point,duration:500})}async function k(){if(i.mode!="editing")return;let h=i.id,V=h.kind=="critical"?o.criticalIssues:o.policyConflictLog,te=JSON.parse(JSON.stringify(V[h.idx])),st=s.getBounds().getWest(),rt=s.getBounds().getEast();te.point[0]+=(rt-st)*.05;let Se=V.toSpliced(h.idx+1,0,te);h.kind=="critical"?_e(U,o.criticalIssues=Se,o):_e(U,o.policyConflictLog=Se,o),await $({kind:h.kind,idx:h.idx+1})}async function _(){l(1,i={mode:"select"}),_e(U,o.policyConflictLog=o.policyConflictLog.toSorted((h,V)=>Ee(h.conflict)-Ee(V.conflict)),o),_e(U,o.criticalIssues=o.criticalIssues.toSorted((h,V)=>De(h.criticalIssue)-De(V.criticalIssue)),o),p!=null&&(await we(),l(4,r.scrollTop=p,r),p=null)}function m(h){if(!b&&i.mode!="select"){if(i.mode=="editing"){_();return}i.mode=="new-critical"?(_e(U,o.criticalIssues=[...o.criticalIssues,{criticalIssue:f.url.searchParams.get("code")||"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),$({kind:"critical",idx:o.criticalIssues.length-1})):i.mode=="new-conflict"&&(_e(U,o.policyConflictLog=[...o.policyConflictLog,{conflict:f.url.searchParams.get("code")||"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),$({kind:"conflict",idx:o.policyConflictLog.length-1}))}}ft(()=>{g(!1)});function a(){i.mode=="editing"&&window.confirm("Delete this entry?")&&(i.id.kind=="critical"?(o.criticalIssues.splice(i.id.idx,1),U.set(o)):(o.policyConflictLog.splice(i.id.idx,1),U.set(o)),_())}function g(h){let V={type:"FeatureCollection",features:[...o.criticalIssues.map(te=>Ce(te.point)),...o.policyConflictLog.map(te=>Ce(te.point)),...o.summary.networkMap.features]};V.features.length>0&&s.fitBounds(mt(V),{padding:20,animate:h})}function C(h){let V=h.criticalIssue?vt(h.criticalIssue):"Unknown critical";return h.locationName?`${V} (${h.locationName})`:V}function j(h){let V=h.conflict?bt(h.conflict):"Unknown conflict";return h.locationName?`${V} (${h.locationName})`:V}function ie(h){if(i.mode=="editing"){let V=h.target.tagName,te=V=="INPUT"||V=="TEXTAREA";h.key=="Escape"||h.key=="Enter"&&!te?(h.stopPropagation(),_()):h.key=="Delete"&&!te&&(h.stopPropagation(),a())}else(i.mode=="new-critical"||i.mode=="new-conflict")&&h.key=="Escape"&&(h.stopPropagation(),l(1,i={mode:"select"}))}const D=()=>g(!0);function x(h){b=h,l(5,b)}function se(h){v=h,l(6,v)}const ge=h=>N({kind:"critical",idx:h}),re=h=>l(2,S={kind:"critical",idx:h}),E=()=>l(2,S=null),$e=h=>N({kind:"conflict",idx:h}),ae=h=>l(2,S={kind:"conflict",idx:h}),c=()=>l(2,S=null);function I(h){W[h?"unshift":"push"](()=>{r=h,l(4,r)})}const X=()=>l(1,i={mode:"new-critical"}),Q=()=>l(1,i={mode:"new-conflict"});function fe(h,V){n.$$.not_equal(V.point,h)&&(V.point=h,U.set(o))}const ce=h=>$({kind:"critical",idx:h}),tt=h=>$({kind:"critical",idx:h});function lt(h,V){n.$$.not_equal(V.point,h)&&(V.point=h,U.set(o))}const nt=h=>$({kind:"conflict",idx:h}),it=h=>$({kind:"conflict",idx:h});function ot(h){s=h,l(0,s)}return n.$$.update=()=>{n.$$.dirty[0]&3&&s&&(s.getCanvas().style.cursor=i.mode=="new-critical"||i.mode=="new-conflict"?"crosshair":"auto"),n.$$.dirty[0]&14&&l(7,t=pl(o,i,S))},[s,i,S,o,r,b,v,t,$,N,k,_,m,a,g,C,j,ie,D,x,se,ge,re,E,$e,ae,c,I,X,Q,fe,ce,tt,lt,nt,it,ot]}class Vl extends Le{constructor(e){super(),Ne(this,e,_l,ul,Ie,{},null,[-1,-1])}}export{Vl as component};
