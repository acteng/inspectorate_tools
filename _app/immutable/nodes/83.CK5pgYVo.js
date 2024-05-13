import{s as ye,p as Z,e as z,t as te,a as D,c as J,b as Y,d as ne,f as h,g as N,A as R,q as x,i as I,h as U,r as Q,k as we,C as He,U as Ke,w as Se,y as Be,x as he,z as _e,j as de,n as ze,R as ve,S as be}from"../chunks/scheduler.DnywFkU9.js";import{S as Ce,i as Le,e as X,c as M,a as j,m as q,t as w,b as S,d as P,f as re,g as ae}from"../chunks/index.DT47VLXg.js";import{M as Je,g as Ye,G as Ze}from"../chunks/MapLibreMap.D_Y_IQYi.js";import{e as se}from"../chunks/each.BbKVVTCP.js";import{c as Qe,p as Xe}from"../chunks/colors.CYEpEtTL.js";import{p as Ge}from"../chunks/index.YZekPLB5.js";import{S as me}from"../chunks/Select.Bt-9RdZM.js";import{T as We}from"../chunks/TextArea.CQavfcce.js";import{T as Re}from"../chunks/TextInput.BcfMzP77.js";import{s as O}from"../chunks/data.C9TFp-7L.js";import{s as ge,b as $e,a as xe,R as et,B as tt,G as nt,C as lt,M as it,c as ot,S as st,d as Oe}from"../chunks/GeoreferenceLayer.GqHn2qXt.js";import{Y as Ue}from"../chunks/YesNo.B3gg-XyM.js";import{C as rt}from"../chunks/CollapsibleCard.DNsAdAnB.js";import{D as at}from"../chunks/DefaultButton.BBsSYne5.js";import{S as Ie}from"../chunks/SecondaryButton.B8dyX8Ne.js";import{W as ft}from"../chunks/WarningButton.CIyVn5Hj.js";import{C as ct,a as ut}from"../chunks/Popup.DZ1BKUjg.js";function pt(t){let e,l,n,o,u,f,r,a,d,b,c,p,k,_,v,A,s,m,B,V,G,g,K,F;function T(i){t[3](i)}let oe={label:"Critical Issue",emptyOption:!0,choices:t[2]};t[1].criticalIssues[t[0]].criticalIssue!==void 0&&(oe.value=t[1].criticalIssues[t[0]].criticalIssue),b=new me({props:oe}),Z.push(()=>X(b,"value",T));function $(i){t[4](i)}let C={label:"Stage",emptyOption:!0,choices:Ge(["Existing","Design"])};t[1].criticalIssues[t[0]].stage!==void 0&&(C.value=t[1].criticalIssues[t[0]].stage),k=new me({props:C}),Z.push(()=>X(k,"value",$));function W(i){t[5](i)}let H={label:"Location Name"};t[1].criticalIssues[t[0]].locationName!==void 0&&(H.value=t[1].criticalIssues[t[0]].locationName),A=new Re({props:H}),Z.push(()=>X(A,"value",W));function E(i){t[6](i)}let ee={label:"Resolved by Design"};t[1].criticalIssues[t[0]].resolved!==void 0&&(ee.value=t[1].criticalIssues[t[0]].resolved),B=new Ue({props:ee}),Z.push(()=>X(B,"value",E));function fe(i){t[7](i)}let L={label:"Commentary & Feedback"};return t[1].criticalIssues[t[0]].notes!==void 0&&(L.value=t[1].criticalIssues[t[0]].notes),g=new We({props:L}),Z.push(()=>X(g,"value",fe)),{c(){e=z("div"),l=z("a"),n=te("Google StreetView"),u=D(),f=z("a"),r=te("Bing Streetside"),d=D(),M(b.$$.fragment),p=D(),M(k.$$.fragment),v=D(),M(A.$$.fragment),m=D(),M(B.$$.fragment),G=D(),M(g.$$.fragment),this.h()},l(i){e=J(i,"DIV",{style:!0});var y=Y(e);l=J(y,"A",{href:!0,target:!0});var le=Y(l);n=ne(le,"Google StreetView"),le.forEach(h),u=N(y),f=J(y,"A",{href:!0,target:!0});var ie=Y(f);r=ne(ie,"Bing Streetside"),ie.forEach(h),y.forEach(h),d=N(i),j(b.$$.fragment,i),p=N(i),j(k.$$.fragment,i),v=N(i),j(A.$$.fragment,i),m=N(i),j(B.$$.fragment,i),G=N(i),j(g.$$.fragment,i),this.h()},h(){R(l,"href",o=ge(t[1].criticalIssues[t[0]].point)),R(l,"target","_blank"),R(f,"href",a=$e(t[1].criticalIssues[t[0]].point)),R(f,"target","_blank"),x(e,"display","flex"),x(e,"justify-content","space-evenly")},m(i,y){I(i,e,y),U(e,l),U(l,n),U(e,u),U(e,f),U(f,r),I(i,d,y),q(b,i,y),I(i,p,y),q(k,i,y),I(i,v,y),q(A,i,y),I(i,m,y),q(B,i,y),I(i,G,y),q(g,i,y),F=!0},p(i,[y]){(!F||y&3&&o!==(o=ge(i[1].criticalIssues[i[0]].point)))&&R(l,"href",o),(!F||y&3&&a!==(a=$e(i[1].criticalIssues[i[0]].point)))&&R(f,"href",a);const le={};!c&&y&3&&(c=!0,le.value=i[1].criticalIssues[i[0]].criticalIssue,Q(()=>c=!1)),b.$set(le);const ie={};!_&&y&3&&(_=!0,ie.value=i[1].criticalIssues[i[0]].stage,Q(()=>_=!1)),k.$set(ie);const ce={};!s&&y&3&&(s=!0,ce.value=i[1].criticalIssues[i[0]].locationName,Q(()=>s=!1)),A.$set(ce);const ue={};!V&&y&3&&(V=!0,ue.value=i[1].criticalIssues[i[0]].resolved,Q(()=>V=!1)),B.$set(ue);const pe={};!K&&y&3&&(K=!0,pe.value=i[1].criticalIssues[i[0]].notes,Q(()=>K=!1)),g.$set(pe)},i(i){F||(w(b.$$.fragment,i),w(k.$$.fragment,i),w(A.$$.fragment,i),w(B.$$.fragment,i),w(g.$$.fragment,i),F=!0)},o(i){S(b.$$.fragment,i),S(k.$$.fragment,i),S(A.$$.fragment,i),S(B.$$.fragment,i),S(g.$$.fragment,i),F=!1},d(i){i&&(h(e),h(d),h(p),h(v),h(m),h(G)),P(b,i),P(k,i),P(A,i),P(B,i),P(g,i)}}}function _t(t,e,l){let n;we(t,O,c=>l(1,n=c));let{idx:o}=e,u=[["1","1 - Conflict at Side Roads and Priority Junctions: >2,500vpd cut across main walking, wheeling or cycling streams"],["2","2 - Conflict at Roundabouts and Signal Junctions: >2,500vpd cut across main walking, wheeling or cycling streams"],["3","3 - Lane Widths: Cyclists unprotected in 3.25-3.9m wide nearside lane"],["4","4 - Trip Hazards: Level differences >13mm with no tactile information and colour contrast"],["5A","5A - Kerbside Activity: Cycle facility next to parking/loading with insufficient buffer"],["5B","5B - Kerbside Activity: Unprotected cycle lane next to a frequently used bus layby"],["6A","6A - Provision of Crossings: on busy streets (>8,000vpd), formal crossings are more than 400m apart"],["6B","6B - Provision of Crossings: on quieter streets (<8,000vpd), desire lines are blocked by parking/loading"],["7A","7A - Standard of Crossings: on busy streets (>8,000vpd), uncontrolled crossings of 2+ lanes with no gaps in traffic"],["7B","7B - Standard of Crossings: at signal junctions, there are arms with no green man for pedestrians"],["8","8 - Motor Traffic Speed: Mean speed > 30mph when cyclists/pedestrians are unprotected"],["9A","9A - Motor Traffic Volume: >1,000 vehicles in busiest hour when cyclists/pedestrians are unprotected"],["9B","9B - Motor Traffic Volume: >5% HGV traffic when cyclists/pedestrians are unprotected and >500 vehicles in busiest hour"],["10","10 - Pedestrian Crossing Speed: Pedestrians must cross at speeds >1.2m/s"],["11A","11A - Footway Width: <1m clear width"],["11B","11B - Footway Width: 1.0-1.5m wide clear width for over 6m"],["11C","11C - Footway Width: <2m clear width and pedestrian comfort level is poor (PCL of D-E)"],["11D","11D - Footway Width: no footway"],["12A","12A - Effective Width next to Tram Lines: <2.4m effective width for cyclists from tramline edge to kerb on a straight run"],["12B","12B - Effective Width next to Tram Lines: insufficient effective width for cyclists on a curved section of tram route"],["13","13 - Crossing Angle of Tram/Train Rails: Cyclist crossing angle <60°"],["14",'14 - Cycling Surface and Maintenance Defects: Major defects (provide further information in "commentary and feedback")'],["15",'15 - Walking/Wheeling Surface and Maintenance Defects: Major defects (provide further information in "commentary and feedback")'],["16","16 - Guard Railing: used as standard without consideration of inherent safety risks"]];function f(c){t.$$.not_equal(n.criticalIssues[o].criticalIssue,c)&&(n.criticalIssues[o].criticalIssue=c,O.set(n))}function r(c){t.$$.not_equal(n.criticalIssues[o].stage,c)&&(n.criticalIssues[o].stage=c,O.set(n))}function a(c){t.$$.not_equal(n.criticalIssues[o].locationName,c)&&(n.criticalIssues[o].locationName=c,O.set(n))}function d(c){t.$$.not_equal(n.criticalIssues[o].resolved,c)&&(n.criticalIssues[o].resolved=c,O.set(n))}function b(c){t.$$.not_equal(n.criticalIssues[o].notes,c)&&(n.criticalIssues[o].notes=c,O.set(n))}return t.$$set=c=>{"idx"in c&&l(0,o=c.idx)},[o,n,u,f,r,a,d,b]}class mt extends Ce{constructor(e){super(),Le(this,e,_t,pt,ye,{idx:0})}}function gt(t){let e,l,n,o,u,f,r,a,d,b,c,p,k,_,v,A,s,m,B,V,G,g,K,F;function T(i){t[3](i)}let oe={label:"Policy Conflict",emptyOption:!0,choices:t[2]};t[1].policyConflictLog[t[0]].conflict!==void 0&&(oe.value=t[1].policyConflictLog[t[0]].conflict),b=new me({props:oe}),Z.push(()=>X(b,"value",T));function $(i){t[4](i)}let C={label:"Stage",emptyOption:!0,choices:Ge(["Existing","Design"])};t[1].policyConflictLog[t[0]].stage!==void 0&&(C.value=t[1].policyConflictLog[t[0]].stage),k=new me({props:C}),Z.push(()=>X(k,"value",$));function W(i){t[5](i)}let H={label:"Location Name"};t[1].policyConflictLog[t[0]].locationName!==void 0&&(H.value=t[1].policyConflictLog[t[0]].locationName),A=new Re({props:H}),Z.push(()=>X(A,"value",W));function E(i){t[6](i)}let ee={label:"Resolved by Design"};t[1].policyConflictLog[t[0]].resolved!==void 0&&(ee.value=t[1].policyConflictLog[t[0]].resolved),B=new Ue({props:ee}),Z.push(()=>X(B,"value",E));function fe(i){t[7](i)}let L={label:"Commentary & Feedback"};return t[1].policyConflictLog[t[0]].notes!==void 0&&(L.value=t[1].policyConflictLog[t[0]].notes),g=new We({props:L}),Z.push(()=>X(g,"value",fe)),{c(){e=z("div"),l=z("a"),n=te("Google StreetView"),u=D(),f=z("a"),r=te("Bing Streetside"),d=D(),M(b.$$.fragment),p=D(),M(k.$$.fragment),v=D(),M(A.$$.fragment),m=D(),M(B.$$.fragment),G=D(),M(g.$$.fragment),this.h()},l(i){e=J(i,"DIV",{style:!0});var y=Y(e);l=J(y,"A",{href:!0,target:!0});var le=Y(l);n=ne(le,"Google StreetView"),le.forEach(h),u=N(y),f=J(y,"A",{href:!0,target:!0});var ie=Y(f);r=ne(ie,"Bing Streetside"),ie.forEach(h),y.forEach(h),d=N(i),j(b.$$.fragment,i),p=N(i),j(k.$$.fragment,i),v=N(i),j(A.$$.fragment,i),m=N(i),j(B.$$.fragment,i),G=N(i),j(g.$$.fragment,i),this.h()},h(){R(l,"href",o=ge(t[1].policyConflictLog[t[0]].point)),R(l,"target","_blank"),R(f,"href",a=$e(t[1].policyConflictLog[t[0]].point)),R(f,"target","_blank"),x(e,"display","flex"),x(e,"justify-content","space-evenly")},m(i,y){I(i,e,y),U(e,l),U(l,n),U(e,u),U(e,f),U(f,r),I(i,d,y),q(b,i,y),I(i,p,y),q(k,i,y),I(i,v,y),q(A,i,y),I(i,m,y),q(B,i,y),I(i,G,y),q(g,i,y),F=!0},p(i,[y]){(!F||y&3&&o!==(o=ge(i[1].policyConflictLog[i[0]].point)))&&R(l,"href",o),(!F||y&3&&a!==(a=$e(i[1].policyConflictLog[i[0]].point)))&&R(f,"href",a);const le={};!c&&y&3&&(c=!0,le.value=i[1].policyConflictLog[i[0]].conflict,Q(()=>c=!1)),b.$set(le);const ie={};!_&&y&3&&(_=!0,ie.value=i[1].policyConflictLog[i[0]].stage,Q(()=>_=!1)),k.$set(ie);const ce={};!s&&y&3&&(s=!0,ce.value=i[1].policyConflictLog[i[0]].locationName,Q(()=>s=!1)),A.$set(ce);const ue={};!V&&y&3&&(V=!0,ue.value=i[1].policyConflictLog[i[0]].resolved,Q(()=>V=!1)),B.$set(ue);const pe={};!K&&y&3&&(K=!0,pe.value=i[1].policyConflictLog[i[0]].notes,Q(()=>K=!1)),g.$set(pe)},i(i){F||(w(b.$$.fragment,i),w(k.$$.fragment,i),w(A.$$.fragment,i),w(B.$$.fragment,i),w(g.$$.fragment,i),F=!0)},o(i){S(b.$$.fragment,i),S(k.$$.fragment,i),S(A.$$.fragment,i),S(B.$$.fragment,i),S(g.$$.fragment,i),F=!1},d(i){i&&(h(e),h(d),h(p),h(v),h(m),h(G)),P(b,i),P(k,i),P(A,i),P(B,i),P(g,i)}}}function $t(t,e,l){let n;we(t,O,c=>l(1,n=c));let{idx:o}=e,u=[["1","1 - Cyclists are not separated from pedestrians"],["2",'2 - Barriers, steps, or "Cyclist Dismount" signs are present'],["3","3 - The route is not direct, logical and intuitive"],["4","4 - Inappropriate surface materials"],["5","5 - Appropriate lighting is not provided"],["6","6 - Routes miss opportunities to join together with other facilities as a network"]];function f(c){t.$$.not_equal(n.policyConflictLog[o].conflict,c)&&(n.policyConflictLog[o].conflict=c,O.set(n))}function r(c){t.$$.not_equal(n.policyConflictLog[o].stage,c)&&(n.policyConflictLog[o].stage=c,O.set(n))}function a(c){t.$$.not_equal(n.policyConflictLog[o].locationName,c)&&(n.policyConflictLog[o].locationName=c,O.set(n))}function d(c){t.$$.not_equal(n.policyConflictLog[o].resolved,c)&&(n.policyConflictLog[o].resolved=c,O.set(n))}function b(c){t.$$.not_equal(n.policyConflictLog[o].notes,c)&&(n.policyConflictLog[o].notes=c,O.set(n))}return t.$$set=c=>{"idx"in c&&l(0,o=c.idx)},[o,n,u,f,r,a,d,b]}class dt extends Ce{constructor(e){super(),Le(this,e,$t,gt,ye,{idx:0})}}const{window:ht}=Ye;function Ae(t,e,l){const n=t.slice();return n[31]=e[l],n[32]=e,n[33]=l,n}function Ee(t,e,l){const n=t.slice();return n[34]=e[l],n[35]=e,n[33]=l,n}function De(t,e,l){const n=t.slice();return n[31]=e[l],n[33]=l,n}function Ne(t,e,l){const n=t.slice();return n[34]=e[l],n[33]=l,n}function vt(t){let e,l,n,o,u,f,r,a;e=new at({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),e.$on("click",t[23]),n=new ft({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),n.$on("click",t[10]);const d=[Ct,wt],b=[];function c(p,k){return p[0].kind=="critical"?0:1}return u=c(t),f=b[u]=d[u](t),{c(){M(e.$$.fragment),l=D(),M(n.$$.fragment),o=D(),f.c(),r=Be()},l(p){j(e.$$.fragment,p),l=N(p),j(n.$$.fragment,p),o=N(p),f.l(p),r=Be()},m(p,k){q(e,p,k),I(p,l,k),q(n,p,k),I(p,o,k),b[u].m(p,k),I(p,r,k),a=!0},p(p,k){const _={};k[1]&128&&(_.$$scope={dirty:k,ctx:p}),e.$set(_);const v={};k[1]&128&&(v.$$scope={dirty:k,ctx:p}),n.$set(v);let A=u;u=c(p),u===A?b[u].p(p,k):(ae(),S(b[A],1,1,()=>{b[A]=null}),re(),f=b[u],f?f.p(p,k):(f=b[u]=d[u](p),f.c()),w(f,1),f.m(r.parentNode,r))},i(p){a||(w(e.$$.fragment,p),w(n.$$.fragment,p),w(f),a=!0)},o(p){S(e.$$.fragment,p),S(n.$$.fragment,p),S(f),a=!1},d(p){p&&(h(l),h(o),h(r)),P(e,p),P(n,p),b[u].d(p)}}}function bt(t){let e,l,n,o,u,f,r="Click the map to add a problem, or select a problem to fill out data",a,d,b="Critical Issues",c,p,k,_,v="Policy Conflicts",A,s,m;e=new rt({props:{label:"Tools",$$slots:{default:[St]},$$scope:{ctx:t}}});function B($){t[16]($)}let V={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};t[4]!==void 0&&(V.value=t[4]),n=new et({props:V}),Z.push(()=>X(n,"value",B));let G=se(t[2].criticalIssues),g=[];for(let $=0;$<G.length;$+=1)g[$]=je(Ne(t,G,$));const K=$=>S(g[$],1,1,()=>{g[$]=null});let F=se(t[2].policyConflictLog),T=[];for(let $=0;$<F.length;$+=1)T[$]=qe(De(t,F,$));const oe=$=>S(T[$],1,1,()=>{T[$]=null});return{c(){M(e.$$.fragment),l=D(),M(n.$$.fragment),u=D(),f=z("p"),f.textContent=r,a=D(),d=z("h3"),d.textContent=b,c=D(),p=z("ol");for(let $=0;$<g.length;$+=1)g[$].c();k=D(),_=z("h3"),_.textContent=v,A=D(),s=z("ol");for(let $=0;$<T.length;$+=1)T[$].c()},l($){j(e.$$.fragment,$),l=N($),j(n.$$.fragment,$),u=N($),f=J($,"P",{"data-svelte-h":!0}),he(f)!=="svelte-12ba5j2"&&(f.textContent=r),a=N($),d=J($,"H3",{"data-svelte-h":!0}),he(d)!=="svelte-1qhh5xr"&&(d.textContent=b),c=N($),p=J($,"OL",{});var C=Y(p);for(let H=0;H<g.length;H+=1)g[H].l(C);C.forEach(h),k=N($),_=J($,"H3",{"data-svelte-h":!0}),he(_)!=="svelte-eyxzjx"&&(_.textContent=v),A=N($),s=J($,"OL",{});var W=Y(s);for(let H=0;H<T.length;H+=1)T[H].l(W);W.forEach(h)},m($,C){q(e,$,C),I($,l,C),q(n,$,C),I($,u,C),I($,f,C),I($,a,C),I($,d,C),I($,c,C),I($,p,C);for(let W=0;W<g.length;W+=1)g[W]&&g[W].m(p,null);I($,k,C),I($,_,C),I($,A,C),I($,s,C);for(let W=0;W<T.length;W+=1)T[W]&&T[W].m(s,null);m=!0},p($,C){const W={};C[0]&104|C[1]&128&&(W.$$scope={dirty:C,ctx:$}),e.$set(W);const H={};if(!o&&C[0]&16&&(o=!0,H.value=$[4],Q(()=>o=!1)),n.$set(H),C[0]&262){G=se($[2].criticalIssues);let E;for(E=0;E<G.length;E+=1){const ee=Ne($,G,E);g[E]?(g[E].p(ee,C),w(g[E],1)):(g[E]=je(ee),g[E].c(),w(g[E],1),g[E].m(p,null))}for(ae(),E=G.length;E<g.length;E+=1)K(E);re()}if(C[0]&262){F=se($[2].policyConflictLog);let E;for(E=0;E<F.length;E+=1){const ee=De($,F,E);T[E]?(T[E].p(ee,C),w(T[E],1)):(T[E]=qe(ee),T[E].c(),w(T[E],1),T[E].m(s,null))}for(ae(),E=F.length;E<T.length;E+=1)oe(E);re()}},i($){if(!m){w(e.$$.fragment,$),w(n.$$.fragment,$);for(let C=0;C<G.length;C+=1)w(g[C]);for(let C=0;C<F.length;C+=1)w(T[C]);m=!0}},o($){S(e.$$.fragment,$),S(n.$$.fragment,$),g=g.filter(Boolean);for(let C=0;C<g.length;C+=1)S(g[C]);T=T.filter(Boolean);for(let C=0;C<T.length;C+=1)S(T[C]);m=!1},d($){$&&(h(l),h(u),h(f),h(a),h(d),h(c),h(p),h(k),h(_),h(A),h(s)),P(e,$),P(n,$),_e(g,$),_e(T,$)}}}function kt(t){let e;return{c(){e=te("Save")},l(l){e=ne(l,"Save")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function yt(t){let e;return{c(){e=te("Delete")},l(l){e=ne(l,"Delete")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function wt(t){let e,l;return e=new dt({props:{idx:t[0].idx}}),{c(){M(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,o){q(e,n,o),l=!0},p(n,o){const u={};o[0]&1&&(u.idx=n[0].idx),e.$set(u)},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function Ct(t){let e,l;return e=new mt({props:{idx:t[0].idx}}),{c(){M(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,o){q(e,n,o),l=!0},p(n,o){const u={};o[0]&1&&(u.idx=n[0].idx),e.$set(u)},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function Lt(t){let e;return{c(){e=te("Zoom to fit")},l(l){e=ne(l,"Zoom to fit")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function Me(t){let e,l,n;function o(f){t[14](f)}let u={map:t[3]};return t[5]!==void 0&&(u.enabled=t[5]),e=new st({props:u}),Z.push(()=>X(e,"enabled",o)),{c(){M(e.$$.fragment)},l(f){j(e.$$.fragment,f)},m(f,r){q(e,f,r),n=!0},p(f,r){const a={};r[0]&8&&(a.map=f[3]),!l&&r[0]&32&&(l=!0,a.enabled=f[5],Q(()=>l=!1)),e.$set(a)},i(f){n||(w(e.$$.fragment,f),n=!0)},o(f){S(e.$$.fragment,f),n=!1},d(f){P(e,f)}}}function It(t){let e;return{c(){e=te("Show scheme context")},l(l){e=ne(l,"Show scheme context")},m(l,n){I(l,e,n)},d(l){l&&h(e)}}}function St(t){let e,l,n,o,u,f,r,a,d,b;e=new Ie({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),e.$on("click",t[13]),n=new tt({}),u=new nt({});let c=t[3]&&Me(t);function p(_){t[15](_)}let k={$$slots:{default:[It]},$$scope:{ctx:t}};return t[6]!==void 0&&(k.checked=t[6]),a=new lt({props:k}),Z.push(()=>X(a,"checked",p)),{c(){M(e.$$.fragment),l=D(),M(n.$$.fragment),o=D(),M(u.$$.fragment),f=D(),c&&c.c(),r=D(),M(a.$$.fragment)},l(_){j(e.$$.fragment,_),l=N(_),j(n.$$.fragment,_),o=N(_),j(u.$$.fragment,_),f=N(_),c&&c.l(_),r=N(_),j(a.$$.fragment,_)},m(_,v){q(e,_,v),I(_,l,v),q(n,_,v),I(_,o,v),q(u,_,v),I(_,f,v),c&&c.m(_,v),I(_,r,v),q(a,_,v),b=!0},p(_,v){const A={};v[1]&128&&(A.$$scope={dirty:v,ctx:_}),e.$set(A),_[3]?c?(c.p(_,v),v[0]&8&&w(c,1)):(c=Me(_),c.c(),w(c,1),c.m(r.parentNode,r)):c&&(ae(),S(c,1,1,()=>{c=null}),re());const s={};v[1]&128&&(s.$$scope={dirty:v,ctx:_}),!d&&v[0]&64&&(d=!0,s.checked=_[6],Q(()=>d=!1)),a.$set(s)},i(_){b||(w(e.$$.fragment,_),w(n.$$.fragment,_),w(u.$$.fragment,_),w(c),w(a.$$.fragment,_),b=!0)},o(_){S(e.$$.fragment,_),S(n.$$.fragment,_),S(u.$$.fragment,_),S(c),S(a.$$.fragment,_),b=!1},d(_){_&&(h(l),h(o),h(f),h(r)),P(e,_),P(n,_),P(u,_),c&&c.d(_),P(a,_)}}}function Bt(t){let e=Ve(t[34])+"",l;return{c(){l=te(e)},l(n){l=ne(n,e)},m(n,o){I(n,l,o)},p(n,o){o[0]&4&&e!==(e=Ve(n[34])+"")&&de(l,e)},d(n){n&&h(l)}}}function je(t){let e,l,n,o;function u(){return t[17](t[33])}function f(){return t[18](t[33])}return l=new Ie({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),l.$on("click",u),l.$on("mouseenter",f),l.$on("mouseleave",t[19]),{c(){e=z("li"),M(l.$$.fragment),n=D()},l(r){e=J(r,"LI",{});var a=Y(e);j(l.$$.fragment,a),n=N(a),a.forEach(h)},m(r,a){I(r,e,a),q(l,e,null),U(e,n),o=!0},p(r,a){t=r;const d={};a[0]&4|a[1]&128&&(d.$$scope={dirty:a,ctx:t}),l.$set(d)},i(r){o||(w(l.$$.fragment,r),o=!0)},o(r){S(l.$$.fragment,r),o=!1},d(r){r&&h(e),P(l)}}}function At(t){let e=Fe(t[31])+"",l;return{c(){l=te(e)},l(n){l=ne(n,e)},m(n,o){I(n,l,o)},p(n,o){o[0]&4&&e!==(e=Fe(n[31])+"")&&de(l,e)},d(n){n&&h(l)}}}function qe(t){let e,l,n,o;function u(){return t[20](t[33])}function f(){return t[21](t[33])}return l=new Ie({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),l.$on("click",u),l.$on("mouseenter",f),l.$on("mouseleave",t[22]),{c(){e=z("li"),M(l.$$.fragment),n=D()},l(r){e=J(r,"LI",{});var a=Y(e);j(l.$$.fragment,a),n=N(a),a.forEach(h)},m(r,a){I(r,e,a),q(l,e,null),U(e,n),o=!0},p(r,a){t=r;const d={};a[0]&4|a[1]&128&&(d.$$scope={dirty:a,ctx:t}),l.$set(d)},i(r){o||(w(l.$$.fragment,r),o=!0)},o(r){S(l.$$.fragment,r),o=!1},d(r){r&&h(e),P(l)}}}function Et(t){let e,l,n,o=t[34].criticalIssue+"",u;return{c(){e=ve("svg"),l=ve("polygon"),n=ve("text"),u=te(o),this.h()},l(f){e=be(f,"svg",{width:!0,height:!0,xmlns:!0});var r=Y(e);l=be(r,"polygon",{points:!0,fill:!0,class:!0}),Y(l).forEach(h),n=be(r,"text",{x:!0,y:!0});var a=Y(n);u=ne(a,o),a.forEach(h),r.forEach(h),this.h()},h(){R(l,"points","20,0 0,40 40,40"),R(l,"fill",Qe.critical.background),R(l,"class","svelte-ktyu3j"),R(n,"x","13"),R(n,"y","30"),x(n,"fill","white"),R(e,"width","40"),R(e,"height","40"),R(e,"xmlns","http://www.w3.org/2000/svg")},m(f,r){I(f,e,r),U(e,l),U(e,n),U(n,u)},p(f,r){r[0]&4&&o!==(o=f[34].criticalIssue+"")&&de(u,o)},d(f){f&&h(e)}}}function Pe(t){let e,l,n;function o(a){t[24](a,t[34])}function u(){return t[25](t[33])}function f(){return t[26](t[33])}let r={draggable:!0,$$slots:{default:[Et]},$$scope:{ctx:t}};return t[34].point!==void 0&&(r.lngLat=t[34].point),e=new Oe({props:r}),Z.push(()=>X(e,"lngLat",o)),e.$on("click",u),e.$on("dragend",f),{c(){M(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,d){q(e,a,d),n=!0},p(a,d){t=a;const b={};d[0]&4|d[1]&128&&(b.$$scope={dirty:d,ctx:t}),!l&&d[0]&4&&(l=!0,b.lngLat=t[34].point,Q(()=>l=!1)),e.$set(b)},i(a){n||(w(e.$$.fragment,a),n=!0)},o(a){S(e.$$.fragment,a),n=!1},d(a){P(e,a)}}}function Dt(t){let e,l=t[31].conflict+"",n;return{c(){e=z("span"),n=te(l),this.h()},l(o){e=J(o,"SPAN",{class:!0});var u=Y(e);n=ne(u,l),u.forEach(h),this.h()},h(){R(e,"class","dot svelte-ktyu3j"),x(e,"background",Xe)},m(o,u){I(o,e,u),U(e,n)},p(o,u){u[0]&4&&l!==(l=o[31].conflict+"")&&de(n,l)},d(o){o&&h(e)}}}function Te(t){let e,l,n;function o(a){t[27](a,t[31])}function u(){return t[28](t[33])}function f(){return t[29](t[33])}let r={draggable:!0,$$slots:{default:[Dt]},$$scope:{ctx:t}};return t[31].point!==void 0&&(r.lngLat=t[31].point),e=new Oe({props:r}),Z.push(()=>X(e,"lngLat",o)),e.$on("click",u),e.$on("dragend",f),{c(){M(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,d){q(e,a,d),n=!0},p(a,d){t=a;const b={};d[0]&4|d[1]&128&&(b.$$scope={dirty:d,ctx:t}),!l&&d[0]&4&&(l=!0,b.lngLat=t[31].point,Q(()=>l=!1)),e.$set(b)},i(a){n||(w(e.$$.fragment,a),n=!0)},o(a){S(e.$$.fragment,a),n=!1},d(a){P(e,a)}}}function Nt(t){let e,l;return e=new ut({props:{paint:{"circle-radius":30,"circle-opacity":0,"circle-stroke-width":5,"circle-stroke-color":"yellow"}}}),{c(){M(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,o){q(e,n,o),l=!0},p:ze,i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function Mt(t){let e,l,n,o,u,f,r,a,d,b;e=new it({}),e.$on("click",t[9]),n=new ct({props:{gj:t[2].summary.networkMap,show:t[6]}});let c=se(t[2].criticalIssues),p=[];for(let s=0;s<c.length;s+=1)p[s]=Pe(Ee(t,c,s));const k=s=>S(p[s],1,1,()=>{p[s]=null});let _=se(t[2].policyConflictLog),v=[];for(let s=0;s<_.length;s+=1)v[s]=Te(Ae(t,_,s));const A=s=>S(v[s],1,1,()=>{v[s]=null});return r=new Ze({props:{data:t[7],$$slots:{default:[Nt]},$$scope:{ctx:t}}}),d=new ot({props:{map:t[3]}}),{c(){M(e.$$.fragment),l=D(),M(n.$$.fragment),o=D();for(let s=0;s<p.length;s+=1)p[s].c();u=D();for(let s=0;s<v.length;s+=1)v[s].c();f=D(),M(r.$$.fragment),a=D(),M(d.$$.fragment)},l(s){j(e.$$.fragment,s),l=N(s),j(n.$$.fragment,s),o=N(s);for(let m=0;m<p.length;m+=1)p[m].l(s);u=N(s);for(let m=0;m<v.length;m+=1)v[m].l(s);f=N(s),j(r.$$.fragment,s),a=N(s),j(d.$$.fragment,s)},m(s,m){q(e,s,m),I(s,l,m),q(n,s,m),I(s,o,m);for(let B=0;B<p.length;B+=1)p[B]&&p[B].m(s,m);I(s,u,m);for(let B=0;B<v.length;B+=1)v[B]&&v[B].m(s,m);I(s,f,m),q(r,s,m),I(s,a,m),q(d,s,m),b=!0},p(s,m){const B={};if(m[0]&4&&(B.gj=s[2].summary.networkMap),m[0]&64&&(B.show=s[6]),n.$set(B),m[0]&260){c=se(s[2].criticalIssues);let g;for(g=0;g<c.length;g+=1){const K=Ee(s,c,g);p[g]?(p[g].p(K,m),w(p[g],1)):(p[g]=Pe(K),p[g].c(),w(p[g],1),p[g].m(u.parentNode,u))}for(ae(),g=c.length;g<p.length;g+=1)k(g);re()}if(m[0]&260){_=se(s[2].policyConflictLog);let g;for(g=0;g<_.length;g+=1){const K=Ae(s,_,g);v[g]?(v[g].p(K,m),w(v[g],1)):(v[g]=Te(K),v[g].c(),w(v[g],1),v[g].m(f.parentNode,f))}for(ae(),g=_.length;g<v.length;g+=1)A(g);re()}const V={};m[0]&128&&(V.data=s[7]),m[1]&128&&(V.$$scope={dirty:m,ctx:s}),r.$set(V);const G={};m[0]&8&&(G.map=s[3]),d.$set(G)},i(s){if(!b){w(e.$$.fragment,s),w(n.$$.fragment,s);for(let m=0;m<c.length;m+=1)w(p[m]);for(let m=0;m<_.length;m+=1)w(v[m]);w(r.$$.fragment,s),w(d.$$.fragment,s),b=!0}},o(s){S(e.$$.fragment,s),S(n.$$.fragment,s),p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)S(p[m]);v=v.filter(Boolean);for(let m=0;m<v.length;m+=1)S(v[m]);S(r.$$.fragment,s),S(d.$$.fragment,s),b=!1},d(s){s&&(h(l),h(o),h(u),h(f),h(a)),P(e,s),P(n,s),_e(p,s),_e(v,s),P(r,s),P(d,s)}}}function jt(t){let e,l,n,o,u,f,r,a,d,b,c;const p=[bt,vt],k=[];function _(s,m){return s[0]==null?0:1}n=_(t),o=k[n]=p[n](t);function v(s){t[30](s)}let A={$$slots:{default:[Mt]},$$scope:{ctx:t}};return t[3]!==void 0&&(A.map=t[3]),r=new Je({props:A}),Z.push(()=>X(r,"map",v)),{c(){e=z("div"),l=z("div"),o.c(),u=D(),f=z("div"),M(r.$$.fragment),this.h()},l(s){e=J(s,"DIV",{style:!0});var m=Y(e);l=J(m,"DIV",{style:!0});var B=Y(l);o.l(B),B.forEach(h),u=N(m),f=J(m,"DIV",{style:!0});var V=Y(f);j(r.$$.fragment,V),V.forEach(h),m.forEach(h),this.h()},h(){x(l,"width","30%"),x(l,"overflow-y","scroll"),x(l,"padding","10px"),x(l,"border","1px solid black"),x(f,"position","relative"),x(f,"width","70%"),x(e,"display","flex"),x(e,"height","80vh")},m(s,m){I(s,e,m),U(e,l),k[n].m(l,null),U(e,u),U(e,f),q(r,f,null),d=!0,b||(c=He(ht,"keydown",t[12]),b=!0)},p(s,m){let B=n;n=_(s),n===B?k[n].p(s,m):(ae(),S(k[B],1,1,()=>{k[B]=null}),re(),o=k[n],o?o.p(s,m):(o=k[n]=p[n](s),o.c()),w(o,1),o.m(l,null));const V={};m[0]&204|m[1]&128&&(V.$$scope={dirty:m,ctx:s}),!a&&m[0]&8&&(a=!0,V.map=s[3],Q(()=>a=!1)),r.$set(V)},i(s){d||(w(o),w(r.$$.fragment,s),d=!0)},o(s){S(o),S(r.$$.fragment,s),d=!1},d(s){s&&h(e),k[n].d(),P(r),b=!1,c()}}}function qt(t,e,l){let n={type:"FeatureCollection",features:[]},o=e??l;if(o!=null){let u=o.kind=="critical"?t.criticalIssues:t.policyConflictLog;n.features.push(ke(u[o.idx].point))}return n}function ke(t){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}}function Ve(t){return`${t.criticalIssue||"Unknown critical"}: ${t.locationName||"???"}`}function Fe(t){return`${t.conflict||"Unknown conflict"}: ${t.locationName||"???"}`}function Pt(t,e,l){let n,o;we(t,O,L=>l(2,o=L));let u,f="critical",r=null,a=null,d=!1,b=!0;function c(L){l(0,r=L),l(1,a=null)}function p(L){if(!d){if(r!=null){l(0,r=null);return}f=="critical"?(Se(O,o.criticalIssues=[...o.criticalIssues,{criticalIssue:"",stage:"",point:L.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),l(0,r={kind:"critical",idx:o.criticalIssues.length-1})):(Se(O,o.policyConflictLog=[...o.policyConflictLog,{conflict:"",stage:"",point:L.detail.lngLat.toArray(),locationName:"",resolved:"",notes:""}],o),l(0,r={kind:"conflict",idx:o.policyConflictLog.length-1})),l(1,a=null)}}Ke(()=>{_(!1)});function k(){window.confirm("Delete this entry?")&&(r.kind=="critical"?(o.criticalIssues.splice(r.idx,1),O.set(o)):(o.policyConflictLog.splice(r.idx,1),O.set(o)),l(0,r=null))}function _(L){let i={type:"FeatureCollection",features:[...o.criticalIssues.map(y=>ke(y.point)),...o.policyConflictLog.map(y=>ke(y.point))]};i.features.length>0&&u.fitBounds(xe(i),{padding:20,animate:L})}function v(L){r!=null&&L.key=="Escape"?(L.stopPropagation(),l(0,r=null)):r!=null&&L.key=="Delete"&&k()}const A=()=>_(!0);function s(L){d=L,l(5,d)}function m(L){b=L,l(6,b)}function B(L){f=L,l(4,f)}const V=L=>c({kind:"critical",idx:L}),G=L=>l(1,a={kind:"critical",idx:L}),g=()=>l(1,a=null),K=L=>c({kind:"conflict",idx:L}),F=L=>l(1,a={kind:"conflict",idx:L}),T=()=>l(1,a=null),oe=()=>l(0,r=null);function $(L,i){t.$$.not_equal(i.point,L)&&(i.point=L,O.set(o))}const C=L=>c({kind:"critical",idx:L}),W=L=>c({kind:"critical",idx:L});function H(L,i){t.$$.not_equal(i.point,L)&&(i.point=L,O.set(o))}const E=L=>c({kind:"conflict",idx:L}),ee=L=>c({kind:"conflict",idx:L});function fe(L){u=L,l(3,u)}return t.$$.update=()=>{t.$$.dirty[0]&7&&l(7,n=qt(o,r,a))},[r,a,o,u,f,d,b,n,c,p,k,_,v,A,s,m,B,V,G,g,K,F,T,oe,$,C,W,H,E,ee,fe]}class en extends Ce{constructor(e){super(),Le(this,e,Pt,jt,ye,{},null,[-1,-1])}}export{en as component};
