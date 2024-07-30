import{s as Ie,y as Z,e as H,t as J,a as P,c as z,b as F,d as W,f as d,g as B,p as M,q as O,i as w,h as V,z as K,k as he,w as at,Q as ft,$ as we,x as _e,G as ee,m as de,H as ve,j as me,o as ct,L as ue,M as pe,n as ut}from"../chunks/scheduler.V-ByFQ7u.js";import{S as Le,i as Ne,e as Y,c as q,a as A,m as T,t as y,g as le,b as L,f as ne,d as G}from"../chunks/index.Zcf2TLuh.js";import{g as pt}from"../chunks/globals.D0QH3NT1.js";import{e as oe}from"../chunks/each.BkLWSQYL.js";import{c as He,p as ze}from"../chunks/colors.DaC397qr.js";import{p as Je}from"../chunks/index.C2vO5IUF.js";import{R as We}from"../chunks/Radio.Ct96aa65.js";import{S as Ze}from"../chunks/Select.VGwORRsx.js";/* empty css                                                    */import{T as Ke}from"../chunks/TextArea.DEpFTjcM.js";import{T as Ye}from"../chunks/TextInput.DTVg4cyR.js";import{s as U}from"../chunks/data.Sp8WUzB-.js";import{l as be,n as ke,M as _t,b as mt,G as gt,C as $t}from"../chunks/index.Dzexnv-D.js";import{c as dt,p as ht,b as Ee,e as De,f as vt,g as bt}from"../chunks/lists.BvURpO7c.js";import{Y as Qe}from"../chunks/YesNo.H8AC12nD.js";import{B as kt,C as wt,M as Xe}from"../chunks/Marker.D0zf5-A0.js";import{C as yt}from"../chunks/CollapsibleCard.DJ2nM1Gw.js";import{D as Ct}from"../chunks/DefaultButton.CzxH7UXd.js";import{S as xe}from"../chunks/SecondaryButton.BQqRVY7L.js";import{W as It}from"../chunks/WarningButton.BdQPQy4u.js";import{G as Lt,S as Nt,M as St}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.g2q0gswZ.js";import{G as Et,I as ye,p as Dt}from"../chunks/pan.B2foq7yS.js";import{C as et}from"../chunks/ClickableCard.CZOL0xsy.js";import"../chunks/paths.BwzEzrj1.js";import{p as Pt}from"../chunks/stores.kp_axAxD.js";import{R as Bt}from"../chunks/RouteMapLayer.Cuo9PWZz.js";function Pe(n){let e,l,t;function o(s){n[5](s)}let f={label:"Resolved by Design",inlineSmall:!0};return n[1].criticalIssues[n[0]].resolved!==void 0&&(f.value=n[1].criticalIssues[n[0]].resolved),e=new Qe({props:f}),Z.push(()=>Y(e,"value",o)),{c(){q(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,r){T(e,s,r),t=!0},p(s,r){const i={};!l&&r&3&&(l=!0,i.value=s[1].criticalIssues[s[0]].resolved,K(()=>l=!1)),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){G(e,s)}}}function Mt(n){let e,l,t,o,f,s,r,i,u,p,S,b,v,$,N,k,_,m,a,g,C,R;function ie(c){n[2](c)}let D={label:"Critical Issue",emptyOption:!0,choices:dt};n[1].criticalIssues[n[0]].criticalIssue!==void 0&&(D.value=n[1].criticalIssues[n[0]].criticalIssue),p=new Ze({props:D}),Z.push(()=>Y(p,"value",ie));function x(c){n[3](c)}let se={legend:"Stage",choices:Je(["Existing","Design"]),inlineSmall:!0};n[1].criticalIssues[n[0]].stage!==void 0&&(se.value=n[1].criticalIssues[n[0]].stage),v=new We({props:se}),Z.push(()=>Y(v,"value",x));function ge(c){n[4](c)}let re={label:"Location Name"};n[1].criticalIssues[n[0]].locationName!==void 0&&(re.value=n[1].criticalIssues[n[0]].locationName),k=new Ye({props:re}),Z.push(()=>Y(k,"value",ge));let E=n[1].criticalIssues[n[0]].stage!="Design"&&Pe(n);function $e(c){n[6](c)}let ae={label:"Commentary & Feedback"};return n[1].criticalIssues[n[0]].notes!==void 0&&(ae.value=n[1].criticalIssues[n[0]].notes),g=new Ke({props:ae}),Z.push(()=>Y(g,"value",$e)),{c(){e=H("div"),l=H("a"),t=J("Google StreetView"),f=P(),s=H("a"),r=J("Bing Streetside"),u=P(),q(p.$$.fragment),b=P(),q(v.$$.fragment),N=P(),q(k.$$.fragment),m=P(),E&&E.c(),a=P(),q(g.$$.fragment),this.h()},l(c){e=z(c,"DIV",{style:!0});var I=F(e);l=z(I,"A",{href:!0,target:!0});var Q=F(l);t=W(Q,"Google StreetView"),Q.forEach(d),f=B(I),s=z(I,"A",{href:!0,target:!0});var X=F(s);r=W(X,"Bing Streetside"),X.forEach(d),I.forEach(d),u=B(c),A(p.$$.fragment,c),b=B(c),A(v.$$.fragment,c),N=B(c),A(k.$$.fragment,c),m=B(c),E&&E.l(c),a=B(c),A(g.$$.fragment,c),this.h()},h(){M(l,"href",o=be(n[1].criticalIssues[n[0]].point)),M(l,"target","_blank"),M(s,"href",i=ke(n[1].criticalIssues[n[0]].point)),M(s,"target","_blank"),O(e,"display","flex"),O(e,"justify-content","space-evenly")},m(c,I){w(c,e,I),V(e,l),V(l,t),V(e,f),V(e,s),V(s,r),w(c,u,I),T(p,c,I),w(c,b,I),T(v,c,I),w(c,N,I),T(k,c,I),w(c,m,I),E&&E.m(c,I),w(c,a,I),T(g,c,I),R=!0},p(c,[I]){(!R||I&3&&o!==(o=be(c[1].criticalIssues[c[0]].point)))&&M(l,"href",o),(!R||I&3&&i!==(i=ke(c[1].criticalIssues[c[0]].point)))&&M(s,"href",i);const Q={};!S&&I&3&&(S=!0,Q.value=c[1].criticalIssues[c[0]].criticalIssue,K(()=>S=!1)),p.$set(Q);const X={};!$&&I&3&&($=!0,X.value=c[1].criticalIssues[c[0]].stage,K(()=>$=!1)),v.$set(X);const fe={};!_&&I&3&&(_=!0,fe.value=c[1].criticalIssues[c[0]].locationName,K(()=>_=!1)),k.$set(fe),c[1].criticalIssues[c[0]].stage!="Design"?E?(E.p(c,I),I&3&&y(E,1)):(E=Pe(c),E.c(),y(E,1),E.m(a.parentNode,a)):E&&(le(),L(E,1,1,()=>{E=null}),ne());const ce={};!C&&I&3&&(C=!0,ce.value=c[1].criticalIssues[c[0]].notes,K(()=>C=!1)),g.$set(ce)},i(c){R||(y(p.$$.fragment,c),y(v.$$.fragment,c),y(k.$$.fragment,c),y(E),y(g.$$.fragment,c),R=!0)},o(c){L(p.$$.fragment,c),L(v.$$.fragment,c),L(k.$$.fragment,c),L(E),L(g.$$.fragment,c),R=!1},d(c){c&&(d(e),d(u),d(b),d(N),d(m),d(a)),G(p,c),G(v,c),G(k,c),E&&E.d(c),G(g,c)}}}function qt(n,e,l){let t;he(n,U,p=>l(1,t=p));let{idx:o}=e;function f(p){n.$$.not_equal(t.criticalIssues[o].criticalIssue,p)&&(t.criticalIssues[o].criticalIssue=p,U.set(t))}function s(p){n.$$.not_equal(t.criticalIssues[o].stage,p)&&(t.criticalIssues[o].stage=p,U.set(t))}function r(p){n.$$.not_equal(t.criticalIssues[o].locationName,p)&&(t.criticalIssues[o].locationName=p,U.set(t))}function i(p){n.$$.not_equal(t.criticalIssues[o].resolved,p)&&(t.criticalIssues[o].resolved=p,U.set(t))}function u(p){n.$$.not_equal(t.criticalIssues[o].notes,p)&&(t.criticalIssues[o].notes=p,U.set(t))}return n.$$set=p=>{"idx"in p&&l(0,o=p.idx)},[o,t,f,s,r,i,u]}class At extends Le{constructor(e){super(),Ne(this,e,qt,Mt,Ie,{idx:0})}}function Be(n){let e,l,t;function o(s){n[5](s)}let f={label:"Resolved by Design",inlineSmall:!0};return n[1].policyConflictLog[n[0]].resolved!==void 0&&(f.value=n[1].policyConflictLog[n[0]].resolved),e=new Qe({props:f}),Z.push(()=>Y(e,"value",o)),{c(){q(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,r){T(e,s,r),t=!0},p(s,r){const i={};!l&&r&3&&(l=!0,i.value=s[1].policyConflictLog[s[0]].resolved,K(()=>l=!1)),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){G(e,s)}}}function Tt(n){let e,l,t,o,f,s,r,i,u,p,S,b,v,$,N,k,_,m,a,g,C,R;function ie(c){n[2](c)}let D={label:"Policy Conflict",emptyOption:!0,choices:ht};n[1].policyConflictLog[n[0]].conflict!==void 0&&(D.value=n[1].policyConflictLog[n[0]].conflict),p=new Ze({props:D}),Z.push(()=>Y(p,"value",ie));function x(c){n[3](c)}let se={legend:"Stage",choices:Je(["Existing","Design"]),inlineSmall:!0};n[1].policyConflictLog[n[0]].stage!==void 0&&(se.value=n[1].policyConflictLog[n[0]].stage),v=new We({props:se}),Z.push(()=>Y(v,"value",x));function ge(c){n[4](c)}let re={label:"Location Name"};n[1].policyConflictLog[n[0]].locationName!==void 0&&(re.value=n[1].policyConflictLog[n[0]].locationName),k=new Ye({props:re}),Z.push(()=>Y(k,"value",ge));let E=n[1].policyConflictLog[n[0]].stage!="Design"&&Be(n);function $e(c){n[6](c)}let ae={label:"Commentary & Feedback"};return n[1].policyConflictLog[n[0]].notes!==void 0&&(ae.value=n[1].policyConflictLog[n[0]].notes),g=new Ke({props:ae}),Z.push(()=>Y(g,"value",$e)),{c(){e=H("div"),l=H("a"),t=J("Google StreetView"),f=P(),s=H("a"),r=J("Bing Streetside"),u=P(),q(p.$$.fragment),b=P(),q(v.$$.fragment),N=P(),q(k.$$.fragment),m=P(),E&&E.c(),a=P(),q(g.$$.fragment),this.h()},l(c){e=z(c,"DIV",{style:!0});var I=F(e);l=z(I,"A",{href:!0,target:!0});var Q=F(l);t=W(Q,"Google StreetView"),Q.forEach(d),f=B(I),s=z(I,"A",{href:!0,target:!0});var X=F(s);r=W(X,"Bing Streetside"),X.forEach(d),I.forEach(d),u=B(c),A(p.$$.fragment,c),b=B(c),A(v.$$.fragment,c),N=B(c),A(k.$$.fragment,c),m=B(c),E&&E.l(c),a=B(c),A(g.$$.fragment,c),this.h()},h(){M(l,"href",o=be(n[1].policyConflictLog[n[0]].point)),M(l,"target","_blank"),M(s,"href",i=ke(n[1].policyConflictLog[n[0]].point)),M(s,"target","_blank"),O(e,"display","flex"),O(e,"justify-content","space-evenly")},m(c,I){w(c,e,I),V(e,l),V(l,t),V(e,f),V(e,s),V(s,r),w(c,u,I),T(p,c,I),w(c,b,I),T(v,c,I),w(c,N,I),T(k,c,I),w(c,m,I),E&&E.m(c,I),w(c,a,I),T(g,c,I),R=!0},p(c,[I]){(!R||I&3&&o!==(o=be(c[1].policyConflictLog[c[0]].point)))&&M(l,"href",o),(!R||I&3&&i!==(i=ke(c[1].policyConflictLog[c[0]].point)))&&M(s,"href",i);const Q={};!S&&I&3&&(S=!0,Q.value=c[1].policyConflictLog[c[0]].conflict,K(()=>S=!1)),p.$set(Q);const X={};!$&&I&3&&($=!0,X.value=c[1].policyConflictLog[c[0]].stage,K(()=>$=!1)),v.$set(X);const fe={};!_&&I&3&&(_=!0,fe.value=c[1].policyConflictLog[c[0]].locationName,K(()=>_=!1)),k.$set(fe),c[1].policyConflictLog[c[0]].stage!="Design"?E?(E.p(c,I),I&3&&y(E,1)):(E=Be(c),E.c(),y(E,1),E.m(a.parentNode,a)):E&&(le(),L(E,1,1,()=>{E=null}),ne());const ce={};!C&&I&3&&(C=!0,ce.value=c[1].policyConflictLog[c[0]].notes,K(()=>C=!1)),g.$set(ce)},i(c){R||(y(p.$$.fragment,c),y(v.$$.fragment,c),y(k.$$.fragment,c),y(E),y(g.$$.fragment,c),R=!0)},o(c){L(p.$$.fragment,c),L(v.$$.fragment,c),L(k.$$.fragment,c),L(E),L(g.$$.fragment,c),R=!1},d(c){c&&(d(e),d(u),d(b),d(N),d(m),d(a)),G(p,c),G(v,c),G(k,c),E&&E.d(c),G(g,c)}}}function Gt(n,e,l){let t;he(n,U,p=>l(1,t=p));let{idx:o}=e;function f(p){n.$$.not_equal(t.policyConflictLog[o].conflict,p)&&(t.policyConflictLog[o].conflict=p,U.set(t))}function s(p){n.$$.not_equal(t.policyConflictLog[o].stage,p)&&(t.policyConflictLog[o].stage=p,U.set(t))}function r(p){n.$$.not_equal(t.policyConflictLog[o].locationName,p)&&(t.policyConflictLog[o].locationName=p,U.set(t))}function i(p){n.$$.not_equal(t.policyConflictLog[o].resolved,p)&&(t.policyConflictLog[o].resolved=p,U.set(t))}function u(p){n.$$.not_equal(t.policyConflictLog[o].notes,p)&&(t.policyConflictLog[o].notes=p,U.set(t))}return n.$$set=p=>{"idx"in p&&l(0,o=p.idx)},[o,t,f,s,r,i,u]}class Vt extends Le{constructor(e){super(),Ne(this,e,Gt,Tt,Ie,{idx:0})}}const{window:jt}=pt;function Me(n,e,l){const t=n.slice();return t[40]=e[l],t[41]=e,t[42]=l,t}function qe(n,e,l){const t=n.slice();return t[43]=e[l],t[44]=e,t[42]=l,t}function Ae(n,e,l){const t=n.slice();return t[40]=e[l],t[42]=l,t}function Te(n,e,l){const t=n.slice();return t[43]=e[l],t[42]=l,t}function Rt(n){let e,l,t,o,f,s,r,i,u,p;e=new Ct({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),e.$on("click",n[11]),t=new It({props:{$$slots:{default:[Ot]},$$scope:{ctx:n}}}),t.$on("click",n[13]),f=new xe({props:{$$slots:{default:[Ht]},$$scope:{ctx:n}}}),f.$on("click",n[10]);const S=[Jt,zt],b=[];function v($,N){return $[1].id.kind=="critical"?0:1}return r=v(n),i=b[r]=S[r](n),{c(){q(e.$$.fragment),l=P(),q(t.$$.fragment),o=P(),q(f.$$.fragment),s=P(),i.c(),u=ee()},l($){A(e.$$.fragment,$),l=B($),A(t.$$.fragment,$),o=B($),A(f.$$.fragment,$),s=B($),i.l($),u=ee()},m($,N){T(e,$,N),w($,l,N),T(t,$,N),w($,o,N),T(f,$,N),w($,s,N),b[r].m($,N),w($,u,N),p=!0},p($,N){const k={};N[1]&65536&&(k.$$scope={dirty:N,ctx:$}),e.$set(k);const _={};N[1]&65536&&(_.$$scope={dirty:N,ctx:$}),t.$set(_);const m={};N[1]&65536&&(m.$$scope={dirty:N,ctx:$}),f.$set(m);let a=r;r=v($),r===a?b[r].p($,N):(le(),L(b[a],1,1,()=>{b[a]=null}),ne(),i=b[r],i?i.p($,N):(i=b[r]=S[r]($),i.c()),y(i,1),i.m(u.parentNode,u))},i($){p||(y(e.$$.fragment,$),y(t.$$.fragment,$),y(f.$$.fragment,$),y(i),p=!0)},o($){L(e.$$.fragment,$),L(t.$$.fragment,$),L(f.$$.fragment,$),L(i),p=!1},d($){$&&(d(l),d(o),d(s),d(u)),G(e,$),G(t,$),G(f,$),b[r].d($)}}}function Ft(n){let e,l,t,o="Critical Issues",f,s,r,i="Policy Conflicts",u,p,S;e=new yt({props:{label:"Tools",open:!0,$$slots:{default:[Kt]},$$scope:{ctx:n}}});let b=oe(n[3].criticalIssues),v=[];for(let m=0;m<b.length;m+=1)v[m]=Ve(Te(n,b,m));const $=m=>L(v[m],1,1,()=>{v[m]=null});let N=oe(n[3].policyConflictLog),k=[];for(let m=0;m<N.length;m+=1)k[m]=Re(Ae(n,N,m));const _=m=>L(k[m],1,1,()=>{k[m]=null});return{c(){q(e.$$.fragment),l=P(),t=H("h3"),t.textContent=o,f=P();for(let m=0;m<v.length;m+=1)v[m].c();s=P(),r=H("h3"),r.textContent=i,u=P();for(let m=0;m<k.length;m+=1)k[m].c();p=ee()},l(m){A(e.$$.fragment,m),l=B(m),t=z(m,"H3",{"data-svelte-h":!0}),de(t)!=="svelte-1qhh5xr"&&(t.textContent=o),f=B(m);for(let a=0;a<v.length;a+=1)v[a].l(m);s=B(m),r=z(m,"H3",{"data-svelte-h":!0}),de(r)!=="svelte-eyxzjx"&&(r.textContent=i),u=B(m);for(let a=0;a<k.length;a+=1)k[a].l(m);p=ee()},m(m,a){T(e,m,a),w(m,l,a),w(m,t,a),w(m,f,a);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(m,a);w(m,s,a),w(m,r,a),w(m,u,a);for(let g=0;g<k.length;g+=1)k[g]&&k[g].m(m,a);w(m,p,a),S=!0},p(m,a){const g={};if(a[0]&97|a[1]&65536&&(g.$$scope={dirty:a,ctx:m}),e.$set(g),a[0]&33292){b=oe(m[3].criticalIssues);let C;for(C=0;C<b.length;C+=1){const R=Te(m,b,C);v[C]?(v[C].p(R,a),y(v[C],1)):(v[C]=Ve(R),v[C].c(),y(v[C],1),v[C].m(s.parentNode,s))}for(le(),C=b.length;C<v.length;C+=1)$(C);ne()}if(a[0]&66060){N=oe(m[3].policyConflictLog);let C;for(C=0;C<N.length;C+=1){const R=Ae(m,N,C);k[C]?(k[C].p(R,a),y(k[C],1)):(k[C]=Re(R),k[C].c(),y(k[C],1),k[C].m(p.parentNode,p))}for(le(),C=N.length;C<k.length;C+=1)_(C);ne()}},i(m){if(!S){y(e.$$.fragment,m);for(let a=0;a<b.length;a+=1)y(v[a]);for(let a=0;a<N.length;a+=1)y(k[a]);S=!0}},o(m){L(e.$$.fragment,m),v=v.filter(Boolean);for(let a=0;a<v.length;a+=1)L(v[a]);k=k.filter(Boolean);for(let a=0;a<k.length;a+=1)L(k[a]);S=!1},d(m){m&&(d(l),d(t),d(f),d(s),d(r),d(u),d(p)),G(e,m),ve(v,m),ve(k,m)}}}function Ut(n){let e;return{c(){e=J("Save")},l(l){e=W(l,"Save")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Ot(n){let e;return{c(){e=J("Delete")},l(l){e=W(l,"Delete")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Ht(n){let e;return{c(){e=J("Copy")},l(l){e=W(l,"Copy")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function zt(n){let e,l;return e=new Vt({props:{idx:n[1].id.idx}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,o){T(e,t,o),l=!0},p(t,o){const f={};o[0]&2&&(f.idx=t[1].id.idx),e.$set(f)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Jt(n){let e,l;return e=new At({props:{idx:n[1].id.idx}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,o){T(e,t,o),l=!0},p(t,o){const f={};o[0]&2&&(f.idx=t[1].id.idx),e.$set(f)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Wt(n){let e;return{c(){e=J("Zoom to fit")},l(l){e=W(l,"Zoom to fit")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Zt(n){let e;return{c(){e=J("Show route")},l(l){e=W(l,"Show route")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function Kt(n){let e,l,t,o,f,s,r,i,u,p,S,b;e=new xe({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),e.$on("click",n[18]),t=new kt({}),f=new Lt({});function v(_){n[19](_)}let $={map:n[0]};n[5]!==void 0&&($.enabled=n[5]),r=new Nt({props:$}),Z.push(()=>Y(r,"enabled",v));function N(_){n[20](_)}let k={$$slots:{default:[Zt]},$$scope:{ctx:n}};return n[6]!==void 0&&(k.checked=n[6]),p=new wt({props:k}),Z.push(()=>Y(p,"checked",N)),{c(){q(e.$$.fragment),l=P(),q(t.$$.fragment),o=P(),q(f.$$.fragment),s=P(),q(r.$$.fragment),u=P(),q(p.$$.fragment)},l(_){A(e.$$.fragment,_),l=B(_),A(t.$$.fragment,_),o=B(_),A(f.$$.fragment,_),s=B(_),A(r.$$.fragment,_),u=B(_),A(p.$$.fragment,_)},m(_,m){T(e,_,m),w(_,l,m),T(t,_,m),w(_,o,m),T(f,_,m),w(_,s,m),T(r,_,m),w(_,u,m),T(p,_,m),b=!0},p(_,m){const a={};m[1]&65536&&(a.$$scope={dirty:m,ctx:_}),e.$set(a);const g={};m[0]&1&&(g.map=_[0]),!i&&m[0]&32&&(i=!0,g.enabled=_[5],K(()=>i=!1)),r.$set(g);const C={};m[1]&65536&&(C.$$scope={dirty:m,ctx:_}),!S&&m[0]&64&&(S=!0,C.checked=_[6],K(()=>S=!1)),p.$set(C)},i(_){b||(y(e.$$.fragment,_),y(t.$$.fragment,_),y(f.$$.fragment,_),y(r.$$.fragment,_),y(p.$$.fragment,_),b=!0)},o(_){L(e.$$.fragment,_),L(t.$$.fragment,_),L(f.$$.fragment,_),L(r.$$.fragment,_),L(p.$$.fragment,_),b=!1},d(_){_&&(d(l),d(o),d(s),d(u)),G(e,_),G(t,_),G(f,_),G(r,_),G(p,_)}}}function Ge(n){let e,l,t=n[43].resolved+"",o;return{c(){e=H("span"),l=J("Resolved: "),o=J(t)},l(f){e=z(f,"SPAN",{});var s=F(e);l=W(s,"Resolved: "),o=W(s,t),s.forEach(d)},m(f,s){w(f,e,s),V(e,l),V(e,o)},p(f,s){s[0]&8&&t!==(t=f[43].resolved+"")&&me(o,t)},d(f){f&&d(e)}}}function Yt(n){let e,l,t,o=n[43].stage+"",f,s,r=n[43].stage!="Design"&&Ge(n);return{c(){e=H("div"),l=H("span"),t=J("Stage: "),f=J(o),s=P(),r&&r.c(),this.h()},l(i){e=z(i,"DIV",{style:!0});var u=F(e);l=z(u,"SPAN",{});var p=F(l);t=W(p,"Stage: "),f=W(p,o),p.forEach(d),s=B(u),r&&r.l(u),u.forEach(d),this.h()},h(){O(e,"width","100%"),O(e,"display","flex"),O(e,"justify-content","space-between")},m(i,u){w(i,e,u),V(e,l),V(l,t),V(l,f),V(e,s),r&&r.m(e,null)},p(i,u){u[0]&8&&o!==(o=i[43].stage+"")&&me(f,o),i[43].stage!="Design"?r?r.p(i,u):(r=Ge(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(i){i&&d(e),r&&r.d()}}}function Ve(n){let e,l;function t(){return n[21](n[42])}function o(){return n[22](n[42])}return e=new et({props:{name:n[15](n[43]),$$slots:{default:[Yt]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",o),e.$on("mouseleave",n[23]),{c(){q(e.$$.fragment)},l(f){A(e.$$.fragment,f)},m(f,s){T(e,f,s),l=!0},p(f,s){n=f;const r={};s[0]&8&&(r.name=n[15](n[43])),s[0]&8|s[1]&65536&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(f){l||(y(e.$$.fragment,f),l=!0)},o(f){L(e.$$.fragment,f),l=!1},d(f){G(e,f)}}}function je(n){let e,l,t=n[40].resolved+"",o;return{c(){e=H("span"),l=J("Resolved: "),o=J(t)},l(f){e=z(f,"SPAN",{});var s=F(e);l=W(s,"Resolved: "),o=W(s,t),s.forEach(d)},m(f,s){w(f,e,s),V(e,l),V(e,o)},p(f,s){s[0]&8&&t!==(t=f[40].resolved+"")&&me(o,t)},d(f){f&&d(e)}}}function Qt(n){let e,l,t,o=n[40].stage+"",f,s,r,i=n[40].stage!="Design"&&je(n);return{c(){e=H("div"),l=H("span"),t=J("Stage: "),f=J(o),s=P(),i&&i.c(),r=P(),this.h()},l(u){e=z(u,"DIV",{style:!0});var p=F(e);l=z(p,"SPAN",{});var S=F(l);t=W(S,"Stage: "),f=W(S,o),S.forEach(d),s=B(p),i&&i.l(p),p.forEach(d),r=B(u),this.h()},h(){O(e,"width","100%"),O(e,"display","flex"),O(e,"justify-content","space-between")},m(u,p){w(u,e,p),V(e,l),V(l,t),V(l,f),V(e,s),i&&i.m(e,null),w(u,r,p)},p(u,p){p[0]&8&&o!==(o=u[40].stage+"")&&me(f,o),u[40].stage!="Design"?i?i.p(u,p):(i=je(u),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(u){u&&(d(e),d(r)),i&&i.d()}}}function Re(n){let e,l;function t(){return n[24](n[42])}function o(){return n[25](n[42])}return e=new et({props:{name:n[16](n[40]),$$slots:{default:[Qt]},$$scope:{ctx:n}}}),e.$on("click",t),e.$on("mouseenter",o),e.$on("mouseleave",n[26]),{c(){q(e.$$.fragment)},l(f){A(e.$$.fragment,f)},m(f,s){T(e,f,s),l=!0},p(f,s){n=f;const r={};s[0]&8&&(r.name=n[16](n[40])),s[0]&8|s[1]&65536&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(f){l||(y(e.$$.fragment,f),l=!0)},o(f){L(e.$$.fragment,f),l=!1},d(f){G(e,f)}}}function Fe(n){let e,l,t,o,f,s,r;return l=new ye({props:{$$slots:{default:[el]},$$scope:{ctx:n}}}),l.$on("click",n[11]),o=new ye({props:{$$slots:{default:[nl]},$$scope:{ctx:n}}}),o.$on("click",n[28]),s=new ye({props:{$$slots:{default:[sl]},$$scope:{ctx:n}}}),s.$on("click",n[29]),{c(){e=H("div"),q(l.$$.fragment),t=P(),q(o.$$.fragment),f=P(),q(s.$$.fragment),this.h()},l(i){e=z(i,"DIV",{class:!0});var u=F(e);A(l.$$.fragment,u),t=B(u),A(o.$$.fragment,u),f=B(u),A(s.$$.fragment,u),u.forEach(d),this.h()},h(){M(e,"class","control-panel svelte-17y3eic")},m(i,u){w(i,e,u),T(l,e,null),V(e,t),T(o,e,null),V(e,f),T(s,e,null),r=!0},p(i,u){const p={};u[0]&2|u[1]&65536&&(p.$$scope={dirty:u,ctx:i}),l.$set(p);const S={};u[0]&2|u[1]&65536&&(S.$$scope={dirty:u,ctx:i}),o.$set(S);const b={};u[0]&2|u[1]&65536&&(b.$$scope={dirty:u,ctx:i}),s.$set(b)},i(i){r||(y(l.$$.fragment,i),y(o.$$.fragment,i),y(s.$$.fragment,i),r=!0)},o(i){L(l.$$.fragment,i),L(o.$$.fragment,i),L(s.$$.fragment,i),r=!1},d(i){i&&d(e),G(l),G(o),G(s)}}}function Xt(n){let e;return{c(){e=J("Move map")},l(l){e=W(l,"Move map")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function xt(n){let e,l="Move map";return{c(){e=H("u"),e.textContent=l},l(t){e=z(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-1719ytd"&&(e.textContent=l)},m(t,o){w(t,e,o)},d(t){t&&d(e)}}}function el(n){let e,l,t,o;function f(i,u){return i[1].mode=="select"?xt:Xt}let s=f(n),r=s(n);return{c(){e=H("img"),t=P(),r.c(),o=ee(),this.h()},l(i){e=z(i,"IMG",{src:!0,alt:!0,style:!0}),t=B(i),r.l(i),o=ee(),this.h()},h(){ct(e.src,l=Dt)||M(e,"src",l),M(e,"alt","Move map"),O(e,"vertical-align","middle")},m(i,u){w(i,e,u),w(i,t,u),r.m(i,u),w(i,o,u)},p(i,u){s!==(s=f(i))&&(r.d(1),r=s(i),r&&(r.c(),r.m(o.parentNode,o)))},d(i){i&&(d(e),d(t),d(o)),r.d(i)}}}function tl(n){let e;return{c(){e=J("New critical issue")},l(l){e=W(l,"New critical issue")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function ll(n){let e,l="New critical issue";return{c(){e=H("u"),e.textContent=l},l(t){e=z(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-1igjogw"&&(e.textContent=l)},m(t,o){w(t,e,o)},d(t){t&&d(e)}}}function nl(n){let e,l,t,o;function f(i,u){return i[1].mode=="new-critical"?ll:tl}let s=f(n),r=s(n);return{c(){e=ue("svg"),l=ue("polygon"),t=P(),r.c(),o=ee(),this.h()},l(i){e=pe(i,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=F(e);l=pe(u,"polygon",{points:!0,fill:!0,class:!0}),F(l).forEach(d),u.forEach(d),t=B(i),r.l(i),o=ee(),this.h()},h(){M(l,"points","12,0 0,24 24,24"),M(l,"fill",He.critical.background),M(l,"class","svelte-17y3eic"),M(e,"width","24"),M(e,"height","24"),M(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"vertical-align","middle")},m(i,u){w(i,e,u),V(e,l),w(i,t,u),r.m(i,u),w(i,o,u)},p(i,u){s!==(s=f(i))&&(r.d(1),r=s(i),r&&(r.c(),r.m(o.parentNode,o)))},d(i){i&&(d(e),d(t),d(o)),r.d(i)}}}function il(n){let e;return{c(){e=J("New policy conflict")},l(l){e=W(l,"New policy conflict")},m(l,t){w(l,e,t)},d(l){l&&d(e)}}}function ol(n){let e,l="New policy conflict";return{c(){e=H("u"),e.textContent=l},l(t){e=z(t,"U",{"data-svelte-h":!0}),de(e)!=="svelte-14o8e5o"&&(e.textContent=l)},m(t,o){w(t,e,o)},d(t){t&&d(e)}}}function sl(n){let e,l,t,o;function f(i,u){return i[1].mode=="new-conflict"?ol:il}let s=f(n),r=s(n);return{c(){e=ue("svg"),l=ue("circle"),t=P(),r.c(),o=ee(),this.h()},l(i){e=pe(i,"svg",{width:!0,height:!0,xmlns:!0,style:!0});var u=F(e);l=pe(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),F(l).forEach(d),u.forEach(d),t=B(i),r.l(i),o=ee(),this.h()},h(){M(l,"cx","12"),M(l,"cy","12"),M(l,"r","12"),M(l,"fill",ze),M(e,"width","24"),M(e,"height","24"),M(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"vertical-align","middle")},m(i,u){w(i,e,u),V(e,l),w(i,t,u),r.m(i,u),w(i,o,u)},p(i,u){s!==(s=f(i))&&(r.d(1),r=s(i),r&&(r.c(),r.m(o.parentNode,o)))},d(i){i&&(d(e),d(t),d(o)),r.d(i)}}}function rl(n){let e,l,t,o=n[43].criticalIssue+"",f;return{c(){e=ue("svg"),l=ue("polygon"),t=ue("text"),f=J(o),this.h()},l(s){e=pe(s,"svg",{width:!0,height:!0,xmlns:!0});var r=F(e);l=pe(r,"polygon",{points:!0,fill:!0,class:!0}),F(l).forEach(d),t=pe(r,"text",{x:!0,y:!0});var i=F(t);f=W(i,o),i.forEach(d),r.forEach(d),this.h()},h(){M(l,"points","20,0 0,40 40,40"),M(l,"fill",He.critical.background),M(l,"class","svelte-17y3eic"),M(t,"x","13"),M(t,"y","30"),O(t,"fill","white"),M(e,"width","40"),M(e,"height","40"),M(e,"xmlns","http://www.w3.org/2000/svg")},m(s,r){w(s,e,r),V(e,l),V(e,t),V(t,f)},p(s,r){r[0]&8&&o!==(o=s[43].criticalIssue+"")&&me(f,o)},d(s){s&&d(e)}}}function Ue(n){let e,l,t;function o(i){n[30](i,n[43])}function f(){return n[31](n[42])}function s(){return n[32](n[42])}let r={draggable:!0,$$slots:{default:[rl]},$$scope:{ctx:n}};return n[43].point!==void 0&&(r.lngLat=n[43].point),e=new Xe({props:r}),Z.push(()=>Y(e,"lngLat",o)),e.$on("click",f),e.$on("dragend",s),{c(){q(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,u){T(e,i,u),t=!0},p(i,u){n=i;const p={};u[0]&8|u[1]&65536&&(p.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,p.lngLat=n[43].point,K(()=>l=!1)),e.$set(p)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){G(e,i)}}}function al(n){let e,l=n[40].conflict+"",t;return{c(){e=H("span"),t=J(l),this.h()},l(o){e=z(o,"SPAN",{class:!0});var f=F(e);t=W(f,l),f.forEach(d),this.h()},h(){M(e,"class","dot svelte-17y3eic"),O(e,"background",ze)},m(o,f){w(o,e,f),V(e,t)},p(o,f){f[0]&8&&l!==(l=o[40].conflict+"")&&me(t,l)},d(o){o&&d(e)}}}function Oe(n){let e,l,t;function o(i){n[33](i,n[40])}function f(){return n[34](n[42])}function s(){return n[35](n[42])}let r={draggable:!0,$$slots:{default:[al]},$$scope:{ctx:n}};return n[40].point!==void 0&&(r.lngLat=n[40].point),e=new Xe({props:r}),Z.push(()=>Y(e,"lngLat",o)),e.$on("click",f),e.$on("dragend",s),{c(){q(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,u){T(e,i,u),t=!0},p(i,u){n=i;const p={};u[0]&8|u[1]&65536&&(p.$$scope={dirty:u,ctx:n}),!l&&u[0]&8&&(l=!0,p.lngLat=n[40].point,K(()=>l=!1)),e.$set(p)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){G(e,i)}}}function fl(n){let e,l;return e=new $t({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,o){T(e,t,o),l=!0},p:ut,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function cl(n){let e,l,t,o,f,s,r,i,u,p,S;e=new St({}),e.$on("click",n[12]);let b=n[1].mode!="editing"&&Fe(n);o=new Bt({props:{show:n[6]}});let v=oe(n[3].criticalIssues),$=[];for(let a=0;a<v.length;a+=1)$[a]=Ue(qe(n,v,a));const N=a=>L($[a],1,1,()=>{$[a]=null});let k=oe(n[3].policyConflictLog),_=[];for(let a=0;a<k.length;a+=1)_[a]=Oe(Me(n,k,a));const m=a=>L(_[a],1,1,()=>{_[a]=null});return i=new gt({props:{data:n[7],$$slots:{default:[fl]},$$scope:{ctx:n}}}),p=new Et({props:{map:n[0]}}),{c(){q(e.$$.fragment),l=P(),b&&b.c(),t=P(),q(o.$$.fragment),f=P();for(let a=0;a<$.length;a+=1)$[a].c();s=P();for(let a=0;a<_.length;a+=1)_[a].c();r=P(),q(i.$$.fragment),u=P(),q(p.$$.fragment)},l(a){A(e.$$.fragment,a),l=B(a),b&&b.l(a),t=B(a),A(o.$$.fragment,a),f=B(a);for(let g=0;g<$.length;g+=1)$[g].l(a);s=B(a);for(let g=0;g<_.length;g+=1)_[g].l(a);r=B(a),A(i.$$.fragment,a),u=B(a),A(p.$$.fragment,a)},m(a,g){T(e,a,g),w(a,l,g),b&&b.m(a,g),w(a,t,g),T(o,a,g),w(a,f,g);for(let C=0;C<$.length;C+=1)$[C]&&$[C].m(a,g);w(a,s,g);for(let C=0;C<_.length;C+=1)_[C]&&_[C].m(a,g);w(a,r,g),T(i,a,g),w(a,u,g),T(p,a,g),S=!0},p(a,g){a[1].mode!="editing"?b?(b.p(a,g),g[0]&2&&y(b,1)):(b=Fe(a),b.c(),y(b,1),b.m(t.parentNode,t)):b&&(le(),L(b,1,1,()=>{b=null}),ne());const C={};if(g[0]&64&&(C.show=a[6]),o.$set(C),g[0]&264){v=oe(a[3].criticalIssues);let D;for(D=0;D<v.length;D+=1){const x=qe(a,v,D);$[D]?($[D].p(x,g),y($[D],1)):($[D]=Ue(x),$[D].c(),y($[D],1),$[D].m(s.parentNode,s))}for(le(),D=v.length;D<$.length;D+=1)N(D);ne()}if(g[0]&264){k=oe(a[3].policyConflictLog);let D;for(D=0;D<k.length;D+=1){const x=Me(a,k,D);_[D]?(_[D].p(x,g),y(_[D],1)):(_[D]=Oe(x),_[D].c(),y(_[D],1),_[D].m(r.parentNode,r))}for(le(),D=k.length;D<_.length;D+=1)m(D);ne()}const R={};g[0]&128&&(R.data=a[7]),g[1]&65536&&(R.$$scope={dirty:g,ctx:a}),i.$set(R);const ie={};g[0]&1&&(ie.map=a[0]),p.$set(ie)},i(a){if(!S){y(e.$$.fragment,a),y(b),y(o.$$.fragment,a);for(let g=0;g<v.length;g+=1)y($[g]);for(let g=0;g<k.length;g+=1)y(_[g]);y(i.$$.fragment,a),y(p.$$.fragment,a),S=!0}},o(a){L(e.$$.fragment,a),L(b),L(o.$$.fragment,a),$=$.filter(Boolean);for(let g=0;g<$.length;g+=1)L($[g]);_=_.filter(Boolean);for(let g=0;g<_.length;g+=1)L(_[g]);L(i.$$.fragment,a),L(p.$$.fragment,a),S=!1},d(a){a&&(d(l),d(t),d(f),d(s),d(r),d(u)),G(e,a),b&&b.d(a),G(o,a),ve($,a),ve(_,a),G(i,a),G(p,a)}}}function ul(n){let e,l,t,o,f,s,r,i,u,p,S;const b=[Ft,Rt],v=[];function $(_,m){return _[1].mode!="editing"?0:1}t=$(n),o=v[t]=b[t](n);function N(_){n[36](_)}let k={$$slots:{default:[cl]},$$scope:{ctx:n}};return n[0]!==void 0&&(k.map=n[0]),r=new _t({props:k}),Z.push(()=>Y(r,"map",N)),{c(){e=H("div"),l=H("div"),o.c(),f=P(),s=H("div"),q(r.$$.fragment),this.h()},l(_){e=z(_,"DIV",{style:!0});var m=F(e);l=z(m,"DIV",{style:!0});var a=F(l);o.l(a),a.forEach(d),f=B(m),s=z(m,"DIV",{style:!0});var g=F(s);A(r.$$.fragment,g),g.forEach(d),m.forEach(d),this.h()},h(){O(l,"width","30%"),O(l,"overflow-y","scroll"),O(l,"padding","10px"),O(l,"border","1px solid black"),O(s,"position","relative"),O(s,"width","70%"),O(e,"display","flex"),O(e,"height","80vh")},m(_,m){w(_,e,m),V(e,l),v[t].m(l,null),n[27](l),V(e,f),V(e,s),T(r,s,null),u=!0,p||(S=at(jt,"keydown",n[17]),p=!0)},p(_,m){let a=t;t=$(_),t===a?v[t].p(_,m):(le(),L(v[a],1,1,()=>{v[a]=null}),ne(),o=v[t],o?o.p(_,m):(o=v[t]=b[t](_),o.c()),y(o,1),o.m(l,null));const g={};m[0]&203|m[1]&65536&&(g.$$scope={dirty:m,ctx:_}),!i&&m[0]&1&&(i=!0,g.map=_[0],K(()=>i=!1)),r.$set(g)},i(_){u||(y(o),y(r.$$.fragment,_),u=!0)},o(_){L(o),L(r.$$.fragment,_),u=!1},d(_){_&&d(e),v[t].d(),n[27](null),G(r),p=!1,S()}}}function pl(n,e,l){let t={type:"FeatureCollection",features:[]},o=e.mode=="editing"?e.id:l;if(o!=null){let f=o.kind=="critical"?n.criticalIssues:n.policyConflictLog;t.features.push(Ce(f[o.idx].point))}return t}function Ce(n){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}}function _l(n,e,l){let t,o,f;he(n,U,h=>l(3,o=h)),he(n,Pt,h=>l(38,f=h));let s,r,i={mode:"select"},u=f.url.searchParams.get("kind")||"";u=="critical"?i={mode:"new-critical"}:u=="conflict"&&(i={mode:"new-conflict"});let p=null,S=null,b=!1,v=!0;async function $(h){p=r.scrollTop,l(1,i={mode:"editing",id:h}),l(2,S=null),await we(),l(4,r.scrollTop=0,r)}async function N(h){p=r.scrollTop,l(1,i={mode:"editing",id:h}),l(2,S=null),await we(),l(4,r.scrollTop=0,r);let j=h.kind=="critical"?o.criticalIssues:o.policyConflictLog;s.flyTo({center:j[h.idx].point,duration:500})}async function k(){if(i.mode!="editing")return;let h=i.id,j=h.kind=="critical"?o.criticalIssues:o.policyConflictLog,te=JSON.parse(JSON.stringify(j[h.idx])),st=s.getBounds().getWest(),rt=s.getBounds().getEast();te.point[0]+=(rt-st)*.05;let Se=j.toSpliced(h.idx+1,0,te);h.kind=="critical"?_e(U,o.criticalIssues=Se,o):_e(U,o.policyConflictLog=Se,o),await $({kind:h.kind,idx:h.idx+1})}async function _(){l(1,i={mode:"select"}),_e(U,o.policyConflictLog=o.policyConflictLog.toSorted((h,j)=>Ee(h.conflict)-Ee(j.conflict)),o),_e(U,o.criticalIssues=o.criticalIssues.toSorted((h,j)=>De(h.criticalIssue)-De(j.criticalIssue)),o),p!=null&&(await we(),l(4,r.scrollTop=p,r),p=null)}function m(h){if(!b&&i.mode!="select"){if(i.mode=="editing"){_();return}i.mode=="new-critical"?(_e(U,o.criticalIssues=[...o.criticalIssues,{criticalIssue:f.url.searchParams.get("code")||"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),$({kind:"critical",idx:o.criticalIssues.length-1})):i.mode=="new-conflict"&&(_e(U,o.policyConflictLog=[...o.policyConflictLog,{conflict:f.url.searchParams.get("code")||"",stage:"",point:h.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),$({kind:"conflict",idx:o.policyConflictLog.length-1}))}}ft(()=>{g(!1)});function a(){i.mode=="editing"&&window.confirm("Delete this entry?")&&(i.id.kind=="critical"?(o.criticalIssues.splice(i.id.idx,1),U.set(o)):(o.policyConflictLog.splice(i.id.idx,1),U.set(o)),_())}function g(h){let j={type:"FeatureCollection",features:[...o.criticalIssues.map(te=>Ce(te.point)),...o.policyConflictLog.map(te=>Ce(te.point)),...o.summary.networkMap.features]};j.features.length>0&&s.fitBounds(mt(j),{padding:20,animate:h})}function C(h){let j=h.criticalIssue?vt(h.criticalIssue):"Unknown critical";return h.locationName?`${j} (${h.locationName})`:j}function R(h){let j=h.conflict?bt(h.conflict):"Unknown conflict";return h.locationName?`${j} (${h.locationName})`:j}function ie(h){if(i.mode=="editing"){let j=h.target.tagName,te=j=="INPUT"||j=="TEXTAREA";h.key=="Escape"||h.key=="Enter"&&!te?(h.stopPropagation(),_()):h.key=="Delete"&&!te&&(h.stopPropagation(),a())}else(i.mode=="new-critical"||i.mode=="new-conflict")&&h.key=="Escape"&&(h.stopPropagation(),l(1,i={mode:"select"}))}const D=()=>g(!0);function x(h){b=h,l(5,b)}function se(h){v=h,l(6,v)}const ge=h=>N({kind:"critical",idx:h}),re=h=>l(2,S={kind:"critical",idx:h}),E=()=>l(2,S=null),$e=h=>N({kind:"conflict",idx:h}),ae=h=>l(2,S={kind:"conflict",idx:h}),c=()=>l(2,S=null);function I(h){Z[h?"unshift":"push"](()=>{r=h,l(4,r)})}const Q=()=>l(1,i={mode:"new-critical"}),X=()=>l(1,i={mode:"new-conflict"});function fe(h,j){n.$$.not_equal(j.point,h)&&(j.point=h,U.set(o))}const ce=h=>$({kind:"critical",idx:h}),tt=h=>$({kind:"critical",idx:h});function lt(h,j){n.$$.not_equal(j.point,h)&&(j.point=h,U.set(o))}const nt=h=>$({kind:"conflict",idx:h}),it=h=>$({kind:"conflict",idx:h});function ot(h){s=h,l(0,s)}return n.$$.update=()=>{n.$$.dirty[0]&3&&s&&(s.getCanvas().style.cursor=i.mode=="new-critical"||i.mode=="new-conflict"?"crosshair":"auto"),n.$$.dirty[0]&14&&l(7,t=pl(o,i,S))},[s,i,S,o,r,b,v,t,$,N,k,_,m,a,g,C,R,ie,D,x,se,ge,re,E,$e,ae,c,I,Q,X,fe,ce,tt,lt,nt,it,ot]}class Rl extends Le{constructor(e){super(),Ne(this,e,_l,ul,Ie,{},null,[-1,-1])}}export{Rl as component};
