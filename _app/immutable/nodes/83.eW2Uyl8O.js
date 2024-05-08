import{s as we,v as Y,e as K,t as le,a as N,c as z,b as J,d as ie,f as h,g as q,r as G,w as X,i as C,h as U,x as Z,k as Ce,z as He,U as Ke,a7 as ze,E as _e,p as ve,q as ge,N as Be,j as he,n as Je,R as be,S as ke}from"../chunks/scheduler.Bsni_e59.js";import{S as Le,i as Ie,e as Q,c as M,a as j,m as P,t as y,b as L,d as T,f as ae,g as fe}from"../chunks/index.CCfAUppz.js";import{M as Ye,g as Ze,G as Qe}from"../chunks/MapLibreMap.w9NYypRR.js";import{e as re}from"../chunks/each.ChCadThl.js";import{c as Xe,p as xe}from"../chunks/colors.CYEpEtTL.js";import{p as Ge}from"../chunks/index.DNB12zf9.js";import{S as me}from"../chunks/Select.N7F_8zcJ.js";import{T as We}from"../chunks/TextArea.DbePhW6L.js";import{T as Re}from"../chunks/TextInput.CHbK327s.js";import{s as O}from"../chunks/data.HgJIcvLc.js";import{s as $e,b as de,a as et,R as tt,B as nt,G as lt,c as it,S as ot,M as Oe,C as st}from"../chunks/GeoreferenceLayer.Ckgkr46x.js";import{Y as Ue}from"../chunks/YesNo.JQ0f3rfW.js";import{C as rt}from"../chunks/CollapsibleCard.DoOZ0Bze.js";import{D as at}from"../chunks/DefaultButton.DyQsHGbh.js";import{W as ft,S as Se}from"../chunks/WarningButton.D9QeV9gM.js";function ct(n){let e,l,t,i,p,u,a,s,g,c,f,d,r,$,A,B,m,I,D,W,R,w,ee,V;function E(o){n[3](o)}let oe={label:"Critical Issue",emptyOption:!0,choices:n[2]};n[1].criticalIssues[n[0]].criticalIssue!==void 0&&(oe.value=n[1].criticalIssues[n[0]].criticalIssue),c=new me({props:oe}),Y.push(()=>Q(c,"value",E));function _(o){n[4](o)}let b={label:"Stage",emptyOption:!0,choices:Ge(["Existing","Design"])};n[1].criticalIssues[n[0]].stage!==void 0&&(b.value=n[1].criticalIssues[n[0]].stage),r=new me({props:b}),Y.push(()=>Q(r,"value",_));function F(o){n[5](o)}let H={label:"Location Name"};n[1].criticalIssues[n[0]].locationName!==void 0&&(H.value=n[1].criticalIssues[n[0]].locationName),B=new Re({props:H}),Y.push(()=>Q(B,"value",F));function S(o){n[6](o)}let v={label:"Resolved by Design"};n[1].criticalIssues[n[0]].resolved!==void 0&&(v.value=n[1].criticalIssues[n[0]].resolved),D=new Ue({props:v}),Y.push(()=>Q(D,"value",S));function x(o){n[7](o)}let se={label:"Commentary & Feedback"};return n[1].criticalIssues[n[0]].notes!==void 0&&(se.value=n[1].criticalIssues[n[0]].notes),w=new We({props:se}),Y.push(()=>Q(w,"value",x)),{c(){e=K("div"),l=K("a"),t=le("Google StreetView"),p=N(),u=K("a"),a=le("Bing Streetside"),g=N(),M(c.$$.fragment),d=N(),M(r.$$.fragment),A=N(),M(B.$$.fragment),I=N(),M(D.$$.fragment),R=N(),M(w.$$.fragment),this.h()},l(o){e=z(o,"DIV",{style:!0});var k=J(e);l=z(k,"A",{href:!0,target:!0});var te=J(l);t=ie(te,"Google StreetView"),te.forEach(h),p=q(k),u=z(k,"A",{href:!0,target:!0});var ne=J(u);a=ie(ne,"Bing Streetside"),ne.forEach(h),k.forEach(h),g=q(o),j(c.$$.fragment,o),d=q(o),j(r.$$.fragment,o),A=q(o),j(B.$$.fragment,o),I=q(o),j(D.$$.fragment,o),R=q(o),j(w.$$.fragment,o),this.h()},h(){G(l,"href",i=$e(n[1].criticalIssues[n[0]].point)),G(l,"target","_blank"),G(u,"href",s=de(n[1].criticalIssues[n[0]].point)),G(u,"target","_blank"),X(e,"display","flex"),X(e,"justify-content","space-evenly")},m(o,k){C(o,e,k),U(e,l),U(l,t),U(e,p),U(e,u),U(u,a),C(o,g,k),P(c,o,k),C(o,d,k),P(r,o,k),C(o,A,k),P(B,o,k),C(o,I,k),P(D,o,k),C(o,R,k),P(w,o,k),V=!0},p(o,[k]){(!V||k&3&&i!==(i=$e(o[1].criticalIssues[o[0]].point)))&&G(l,"href",i),(!V||k&3&&s!==(s=de(o[1].criticalIssues[o[0]].point)))&&G(u,"href",s);const te={};!f&&k&3&&(f=!0,te.value=o[1].criticalIssues[o[0]].criticalIssue,Z(()=>f=!1)),c.$set(te);const ne={};!$&&k&3&&($=!0,ne.value=o[1].criticalIssues[o[0]].stage,Z(()=>$=!1)),r.$set(ne);const ce={};!m&&k&3&&(m=!0,ce.value=o[1].criticalIssues[o[0]].locationName,Z(()=>m=!1)),B.$set(ce);const ue={};!W&&k&3&&(W=!0,ue.value=o[1].criticalIssues[o[0]].resolved,Z(()=>W=!1)),D.$set(ue);const pe={};!ee&&k&3&&(ee=!0,pe.value=o[1].criticalIssues[o[0]].notes,Z(()=>ee=!1)),w.$set(pe)},i(o){V||(y(c.$$.fragment,o),y(r.$$.fragment,o),y(B.$$.fragment,o),y(D.$$.fragment,o),y(w.$$.fragment,o),V=!0)},o(o){L(c.$$.fragment,o),L(r.$$.fragment,o),L(B.$$.fragment,o),L(D.$$.fragment,o),L(w.$$.fragment,o),V=!1},d(o){o&&(h(e),h(g),h(d),h(A),h(I),h(R)),T(c,o),T(r,o),T(B,o),T(D,o),T(w,o)}}}function ut(n,e,l){let t;Ce(n,O,f=>l(1,t=f));let{idx:i}=e,p=[["1","1 - Conflict at Side Roads and Priority Junctions: >2,500vpd cut across main walking, wheeling or cycling streams"],["2","2 - Conflict at Roundabouts and Signal Junctions: >2,500vpd cut across main walking, wheeling or cycling streams"],["3","3 - Lane Widths: Cyclists unprotected in 3.25-3.9m wide nearside lane"],["4","4 - Trip Hazards: Level differences >13mm with no tactile information and colour contrast"],["5A","5A - Kerbside Activity: Cycle facility next to parking/loading with insufficient buffer"],["5B","5B - Kerbside Activity: Unprotected cycle lane next to a frequently used bus layby"],["6A","6A - Provision of Crossings: on busy streets (>8,000vpd), formal crossings are more than 400m apart"],["6B","6B - Provision of Crossings: on quieter streets (<8,000vpd), desire lines are blocked by parking/loading"],["7A","7A - Standard of Crossings: on busy streets (>8,000vpd), uncontrolled crossings of 2+ lanes with no gaps in traffic"],["7B","7B - Standard of Crossings: at signal junctions, there are arms with no green man for pedestrians"],["8","8 - Motor Traffic Speed: Mean speed > 30mph when cyclists/pedestrians are unprotected"],["9A","9A - Motor Traffic Volume: >1,000 vehicles in busiest hour when cyclists/pedestrians are unprotected"],["9B","9B - Motor Traffic Volume: >5% HGV traffic when cyclists/pedestrians are unprotected and >500 vehicles in busiest hour"],["10","10 - Pedestrian Crossing Speed: Pedestrians must cross at speeds >1.2m/s"],["11A","11A - Footway Width: <1m clear width"],["11B","11B - Footway Width: 1.0-1.5m wide clear width for over 6m"],["11C","11C - Footway Width: <2m clear width and pedestrian comfort level is poor (PCL of D-E)"],["11D","11D - Footway Width: no footway"],["12A","12A - Effective Width next to Tram Lines: <2.4m effective width for cyclists from tramline edge to kerb on a straight run"],["12B","12B - Effective Width next to Tram Lines: insufficient effective width for cyclists on a curved section of tram route"],["13","13 - Crossing Angle of Tram/Train Rails: Cyclist crossing angle <60°"],["14",'14 - Cycling Surface and Maintenance Defects: Major defects (provide further information in "commentary and feedback")'],["15",'15 - Walking/Wheeling Surface and Maintenance Defects: Major defects (provide further information in "commentary and feedback")'],["16","16 - Guard Railing: used as standard without consideration of inherent safety risks"]];function u(f){n.$$.not_equal(t.criticalIssues[i].criticalIssue,f)&&(t.criticalIssues[i].criticalIssue=f,O.set(t))}function a(f){n.$$.not_equal(t.criticalIssues[i].stage,f)&&(t.criticalIssues[i].stage=f,O.set(t))}function s(f){n.$$.not_equal(t.criticalIssues[i].locationName,f)&&(t.criticalIssues[i].locationName=f,O.set(t))}function g(f){n.$$.not_equal(t.criticalIssues[i].resolved,f)&&(t.criticalIssues[i].resolved=f,O.set(t))}function c(f){n.$$.not_equal(t.criticalIssues[i].notes,f)&&(t.criticalIssues[i].notes=f,O.set(t))}return n.$$set=f=>{"idx"in f&&l(0,i=f.idx)},[i,t,p,u,a,s,g,c]}class pt extends Le{constructor(e){super(),Ie(this,e,ut,ct,we,{idx:0})}}function _t(n){let e,l,t,i,p,u,a,s,g,c,f,d,r,$,A,B,m,I,D,W,R,w,ee,V;function E(o){n[3](o)}let oe={label:"Policy Conflict",emptyOption:!0,choices:n[2]};n[1].policyConflictLog[n[0]].conflict!==void 0&&(oe.value=n[1].policyConflictLog[n[0]].conflict),c=new me({props:oe}),Y.push(()=>Q(c,"value",E));function _(o){n[4](o)}let b={label:"Stage",emptyOption:!0,choices:Ge(["Existing","Design"])};n[1].policyConflictLog[n[0]].stage!==void 0&&(b.value=n[1].policyConflictLog[n[0]].stage),r=new me({props:b}),Y.push(()=>Q(r,"value",_));function F(o){n[5](o)}let H={label:"Location Name"};n[1].policyConflictLog[n[0]].locationName!==void 0&&(H.value=n[1].policyConflictLog[n[0]].locationName),B=new Re({props:H}),Y.push(()=>Q(B,"value",F));function S(o){n[6](o)}let v={label:"Resolved by Design"};n[1].policyConflictLog[n[0]].resolved!==void 0&&(v.value=n[1].policyConflictLog[n[0]].resolved),D=new Ue({props:v}),Y.push(()=>Q(D,"value",S));function x(o){n[7](o)}let se={label:"Commentary & Feedback"};return n[1].policyConflictLog[n[0]].notes!==void 0&&(se.value=n[1].policyConflictLog[n[0]].notes),w=new We({props:se}),Y.push(()=>Q(w,"value",x)),{c(){e=K("div"),l=K("a"),t=le("Google StreetView"),p=N(),u=K("a"),a=le("Bing Streetside"),g=N(),M(c.$$.fragment),d=N(),M(r.$$.fragment),A=N(),M(B.$$.fragment),I=N(),M(D.$$.fragment),R=N(),M(w.$$.fragment),this.h()},l(o){e=z(o,"DIV",{style:!0});var k=J(e);l=z(k,"A",{href:!0,target:!0});var te=J(l);t=ie(te,"Google StreetView"),te.forEach(h),p=q(k),u=z(k,"A",{href:!0,target:!0});var ne=J(u);a=ie(ne,"Bing Streetside"),ne.forEach(h),k.forEach(h),g=q(o),j(c.$$.fragment,o),d=q(o),j(r.$$.fragment,o),A=q(o),j(B.$$.fragment,o),I=q(o),j(D.$$.fragment,o),R=q(o),j(w.$$.fragment,o),this.h()},h(){G(l,"href",i=$e(n[1].policyConflictLog[n[0]].point)),G(l,"target","_blank"),G(u,"href",s=de(n[1].policyConflictLog[n[0]].point)),G(u,"target","_blank"),X(e,"display","flex"),X(e,"justify-content","space-evenly")},m(o,k){C(o,e,k),U(e,l),U(l,t),U(e,p),U(e,u),U(u,a),C(o,g,k),P(c,o,k),C(o,d,k),P(r,o,k),C(o,A,k),P(B,o,k),C(o,I,k),P(D,o,k),C(o,R,k),P(w,o,k),V=!0},p(o,[k]){(!V||k&3&&i!==(i=$e(o[1].policyConflictLog[o[0]].point)))&&G(l,"href",i),(!V||k&3&&s!==(s=de(o[1].policyConflictLog[o[0]].point)))&&G(u,"href",s);const te={};!f&&k&3&&(f=!0,te.value=o[1].policyConflictLog[o[0]].conflict,Z(()=>f=!1)),c.$set(te);const ne={};!$&&k&3&&($=!0,ne.value=o[1].policyConflictLog[o[0]].stage,Z(()=>$=!1)),r.$set(ne);const ce={};!m&&k&3&&(m=!0,ce.value=o[1].policyConflictLog[o[0]].locationName,Z(()=>m=!1)),B.$set(ce);const ue={};!W&&k&3&&(W=!0,ue.value=o[1].policyConflictLog[o[0]].resolved,Z(()=>W=!1)),D.$set(ue);const pe={};!ee&&k&3&&(ee=!0,pe.value=o[1].policyConflictLog[o[0]].notes,Z(()=>ee=!1)),w.$set(pe)},i(o){V||(y(c.$$.fragment,o),y(r.$$.fragment,o),y(B.$$.fragment,o),y(D.$$.fragment,o),y(w.$$.fragment,o),V=!0)},o(o){L(c.$$.fragment,o),L(r.$$.fragment,o),L(B.$$.fragment,o),L(D.$$.fragment,o),L(w.$$.fragment,o),V=!1},d(o){o&&(h(e),h(g),h(d),h(A),h(I),h(R)),T(c,o),T(r,o),T(B,o),T(D,o),T(w,o)}}}function gt(n,e,l){let t;Ce(n,O,f=>l(1,t=f));let{idx:i}=e,p=[["1","1 - Cyclists are not separated from pedestrians"],["2",'2 - Barriers, steps, or "Cyclist Dismount" signs are present'],["3","3 - The route is not direct, logical and intuitive"],["4","4 - Inappropriate surface materials"],["5","5 - Appropriate lighting is not provided"],["6","6 - Routes miss opportunities to join together with other facilities as a network"]];function u(f){n.$$.not_equal(t.policyConflictLog[i].conflict,f)&&(t.policyConflictLog[i].conflict=f,O.set(t))}function a(f){n.$$.not_equal(t.policyConflictLog[i].stage,f)&&(t.policyConflictLog[i].stage=f,O.set(t))}function s(f){n.$$.not_equal(t.policyConflictLog[i].locationName,f)&&(t.policyConflictLog[i].locationName=f,O.set(t))}function g(f){n.$$.not_equal(t.policyConflictLog[i].resolved,f)&&(t.policyConflictLog[i].resolved=f,O.set(t))}function c(f){n.$$.not_equal(t.policyConflictLog[i].notes,f)&&(t.policyConflictLog[i].notes=f,O.set(t))}return n.$$set=f=>{"idx"in f&&l(0,i=f.idx)},[i,t,p,u,a,s,g,c]}class mt extends Le{constructor(e){super(),Ie(this,e,gt,_t,we,{idx:0})}}const{window:$t}=Ze;function Ae(n,e,l){const t=n.slice();return t[29]=e[l],t[30]=e,t[31]=l,t}function De(n,e,l){const t=n.slice();return t[32]=e[l],t[33]=e,t[31]=l,t}function Ee(n,e,l){const t=n.slice();return t[29]=e[l],t[31]=l,t}function Ne(n,e,l){const t=n.slice();return t[32]=e[l],t[31]=l,t}function dt(n){let e,l,t,i,p,u,a,s;e=new at({props:{$$slots:{default:[vt]},$$scope:{ctx:n}}}),e.$on("click",n[20]),t=new ft({props:{$$slots:{default:[bt]},$$scope:{ctx:n}}}),t.$on("click",n[8]);const g=[yt,kt],c=[];function f(d,r){return d[0].kind=="critical"?0:1}return p=f(n),u=c[p]=g[p](n),{c(){M(e.$$.fragment),l=N(),M(t.$$.fragment),i=N(),u.c(),a=_e()},l(d){j(e.$$.fragment,d),l=q(d),j(t.$$.fragment,d),i=q(d),u.l(d),a=_e()},m(d,r){P(e,d,r),C(d,l,r),P(t,d,r),C(d,i,r),c[p].m(d,r),C(d,a,r),s=!0},p(d,r){const $={};r[1]&32&&($.$$scope={dirty:r,ctx:d}),e.$set($);const A={};r[1]&32&&(A.$$scope={dirty:r,ctx:d}),t.$set(A);let B=p;p=f(d),p===B?c[p].p(d,r):(fe(),L(c[B],1,1,()=>{c[B]=null}),ae(),u=c[p],u?u.p(d,r):(u=c[p]=g[p](d),u.c()),y(u,1),u.m(a.parentNode,a))},i(d){s||(y(e.$$.fragment,d),y(t.$$.fragment,d),y(u),s=!0)},o(d){L(e.$$.fragment,d),L(t.$$.fragment,d),L(u),s=!1},d(d){d&&(h(l),h(i),h(a)),T(e,d),T(t,d),c[p].d(d)}}}function ht(n){let e,l,t,i,p,u,a="Click the map to add a problem, or select a problem to fill out data",s,g,c="Critical Issues",f,d,r,$,A="Policy Conflicts",B,m,I;e=new rt({props:{label:"Tools",$$slots:{default:[Ct]},$$scope:{ctx:n}}});function D(_){n[13](_)}let W={legend:"Create new problems",choices:[["critical","Critical Issue"],["conflict","Policy Conflict"]],inlineSmall:!0};n[4]!==void 0&&(W.value=n[4]),t=new tt({props:W}),Y.push(()=>Q(t,"value",D));let R=re(n[2].criticalIssues),w=[];for(let _=0;_<R.length;_+=1)w[_]=Me(Ne(n,R,_));const ee=_=>L(w[_],1,1,()=>{w[_]=null});let V=re(n[2].policyConflictLog),E=[];for(let _=0;_<V.length;_+=1)E[_]=je(Ee(n,V,_));const oe=_=>L(E[_],1,1,()=>{E[_]=null});return{c(){M(e.$$.fragment),l=N(),M(t.$$.fragment),p=N(),u=K("p"),u.textContent=a,s=N(),g=K("h3"),g.textContent=c,f=N(),d=K("ol");for(let _=0;_<w.length;_+=1)w[_].c();r=N(),$=K("h3"),$.textContent=A,B=N(),m=K("ol");for(let _=0;_<E.length;_+=1)E[_].c()},l(_){j(e.$$.fragment,_),l=q(_),j(t.$$.fragment,_),p=q(_),u=z(_,"P",{"data-svelte-h":!0}),ve(u)!=="svelte-12ba5j2"&&(u.textContent=a),s=q(_),g=z(_,"H3",{"data-svelte-h":!0}),ve(g)!=="svelte-1qhh5xr"&&(g.textContent=c),f=q(_),d=z(_,"OL",{});var b=J(d);for(let H=0;H<w.length;H+=1)w[H].l(b);b.forEach(h),r=q(_),$=z(_,"H3",{"data-svelte-h":!0}),ve($)!=="svelte-eyxzjx"&&($.textContent=A),B=q(_),m=z(_,"OL",{});var F=J(m);for(let H=0;H<E.length;H+=1)E[H].l(F);F.forEach(h)},m(_,b){P(e,_,b),C(_,l,b),P(t,_,b),C(_,p,b),C(_,u,b),C(_,s,b),C(_,g,b),C(_,f,b),C(_,d,b);for(let F=0;F<w.length;F+=1)w[F]&&w[F].m(d,null);C(_,r,b),C(_,$,b),C(_,B,b),C(_,m,b);for(let F=0;F<E.length;F+=1)E[F]&&E[F].m(m,null);I=!0},p(_,b){const F={};b[0]&40|b[1]&32&&(F.$$scope={dirty:b,ctx:_}),e.$set(F);const H={};if(!i&&b[0]&16&&(i=!0,H.value=_[4],Z(()=>i=!1)),t.$set(H),b[0]&134){R=re(_[2].criticalIssues);let S;for(S=0;S<R.length;S+=1){const v=Ne(_,R,S);w[S]?(w[S].p(v,b),y(w[S],1)):(w[S]=Me(v),w[S].c(),y(w[S],1),w[S].m(d,null))}for(fe(),S=R.length;S<w.length;S+=1)ee(S);ae()}if(b[0]&134){V=re(_[2].policyConflictLog);let S;for(S=0;S<V.length;S+=1){const v=Ee(_,V,S);E[S]?(E[S].p(v,b),y(E[S],1)):(E[S]=je(v),E[S].c(),y(E[S],1),E[S].m(m,null))}for(fe(),S=V.length;S<E.length;S+=1)oe(S);ae()}},i(_){if(!I){y(e.$$.fragment,_),y(t.$$.fragment,_);for(let b=0;b<R.length;b+=1)y(w[b]);for(let b=0;b<V.length;b+=1)y(E[b]);I=!0}},o(_){L(e.$$.fragment,_),L(t.$$.fragment,_),w=w.filter(Boolean);for(let b=0;b<w.length;b+=1)L(w[b]);E=E.filter(Boolean);for(let b=0;b<E.length;b+=1)L(E[b]);I=!1},d(_){_&&(h(l),h(p),h(u),h(s),h(g),h(f),h(d),h(r),h($),h(B),h(m)),T(e,_),T(t,_),ge(w,_),ge(E,_)}}}function vt(n){let e;return{c(){e=le("Save")},l(l){e=ie(l,"Save")},m(l,t){C(l,e,t)},d(l){l&&h(e)}}}function bt(n){let e;return{c(){e=le("Delete")},l(l){e=ie(l,"Delete")},m(l,t){C(l,e,t)},d(l){l&&h(e)}}}function kt(n){let e,l;return e=new mt({props:{idx:n[0].idx}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){P(e,t,i),l=!0},p(t,i){const p={};i[0]&1&&(p.idx=t[0].idx),e.$set(p)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function yt(n){let e,l;return e=new pt({props:{idx:n[0].idx}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){P(e,t,i),l=!0},p(t,i){const p={};i[0]&1&&(p.idx=t[0].idx),e.$set(p)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function wt(n){let e;return{c(){e=le("Zoom to fit")},l(l){e=ie(l,"Zoom to fit")},m(l,t){C(l,e,t)},d(l){l&&h(e)}}}function qe(n){let e,l,t;function i(u){n[12](u)}let p={map:n[3]};return n[5]!==void 0&&(p.enabled=n[5]),e=new ot({props:p}),Y.push(()=>Q(e,"enabled",i)),{c(){M(e.$$.fragment)},l(u){j(e.$$.fragment,u)},m(u,a){P(e,u,a),t=!0},p(u,a){const s={};a[0]&8&&(s.map=u[3]),!l&&a[0]&32&&(l=!0,s.enabled=u[5],Z(()=>l=!1)),e.$set(s)},i(u){t||(y(e.$$.fragment,u),t=!0)},o(u){L(e.$$.fragment,u),t=!1},d(u){T(e,u)}}}function Ct(n){let e,l,t,i,p,u,a,s;e=new Se({props:{$$slots:{default:[wt]},$$scope:{ctx:n}}}),e.$on("click",n[11]),t=new nt({}),p=new lt({});let g=n[3]&&qe(n);return{c(){M(e.$$.fragment),l=N(),M(t.$$.fragment),i=N(),M(p.$$.fragment),u=N(),g&&g.c(),a=_e()},l(c){j(e.$$.fragment,c),l=q(c),j(t.$$.fragment,c),i=q(c),j(p.$$.fragment,c),u=q(c),g&&g.l(c),a=_e()},m(c,f){P(e,c,f),C(c,l,f),P(t,c,f),C(c,i,f),P(p,c,f),C(c,u,f),g&&g.m(c,f),C(c,a,f),s=!0},p(c,f){const d={};f[1]&32&&(d.$$scope={dirty:f,ctx:c}),e.$set(d),c[3]?g?(g.p(c,f),f[0]&8&&y(g,1)):(g=qe(c),g.c(),y(g,1),g.m(a.parentNode,a)):g&&(fe(),L(g,1,1,()=>{g=null}),ae())},i(c){s||(y(e.$$.fragment,c),y(t.$$.fragment,c),y(p.$$.fragment,c),y(g),s=!0)},o(c){L(e.$$.fragment,c),L(t.$$.fragment,c),L(p.$$.fragment,c),L(g),s=!1},d(c){c&&(h(l),h(i),h(u),h(a)),T(e,c),T(t,c),T(p,c),g&&g.d(c)}}}function Lt(n){let e=Ve(n[32])+"",l;return{c(){l=le(e)},l(t){l=ie(t,e)},m(t,i){C(t,l,i)},p(t,i){i[0]&4&&e!==(e=Ve(t[32])+"")&&he(l,e)},d(t){t&&h(l)}}}function Me(n){let e,l,t,i;function p(){return n[14](n[31])}function u(){return n[15](n[31])}return l=new Se({props:{$$slots:{default:[Lt]},$$scope:{ctx:n}}}),l.$on("click",p),l.$on("mouseenter",u),l.$on("mouseleave",n[16]),{c(){e=K("li"),M(l.$$.fragment),t=N()},l(a){e=z(a,"LI",{});var s=J(e);j(l.$$.fragment,s),t=q(s),s.forEach(h)},m(a,s){C(a,e,s),P(l,e,null),U(e,t),i=!0},p(a,s){n=a;const g={};s[0]&4|s[1]&32&&(g.$$scope={dirty:s,ctx:n}),l.$set(g)},i(a){i||(y(l.$$.fragment,a),i=!0)},o(a){L(l.$$.fragment,a),i=!1},d(a){a&&h(e),T(l)}}}function It(n){let e=Fe(n[29])+"",l;return{c(){l=le(e)},l(t){l=ie(t,e)},m(t,i){C(t,l,i)},p(t,i){i[0]&4&&e!==(e=Fe(t[29])+"")&&he(l,e)},d(t){t&&h(l)}}}function je(n){let e,l,t,i;function p(){return n[17](n[31])}function u(){return n[18](n[31])}return l=new Se({props:{$$slots:{default:[It]},$$scope:{ctx:n}}}),l.$on("click",p),l.$on("mouseenter",u),l.$on("mouseleave",n[19]),{c(){e=K("li"),M(l.$$.fragment),t=N()},l(a){e=z(a,"LI",{});var s=J(e);j(l.$$.fragment,s),t=q(s),s.forEach(h)},m(a,s){C(a,e,s),P(l,e,null),U(e,t),i=!0},p(a,s){n=a;const g={};s[0]&4|s[1]&32&&(g.$$scope={dirty:s,ctx:n}),l.$set(g)},i(a){i||(y(l.$$.fragment,a),i=!0)},o(a){L(l.$$.fragment,a),i=!1},d(a){a&&h(e),T(l)}}}function St(n){let e,l,t,i=n[32].criticalIssue+"",p;return{c(){e=be("svg"),l=be("polygon"),t=be("text"),p=le(i),this.h()},l(u){e=ke(u,"svg",{width:!0,height:!0,xmlns:!0});var a=J(e);l=ke(a,"polygon",{points:!0,fill:!0,class:!0}),J(l).forEach(h),t=ke(a,"text",{x:!0,y:!0});var s=J(t);p=ie(s,i),s.forEach(h),a.forEach(h),this.h()},h(){G(l,"points","20,0 0,40 40,40"),G(l,"fill",Xe.critical.background),G(l,"class","svelte-996go8"),G(t,"x","13"),G(t,"y","30"),X(t,"fill","white"),G(e,"width","40"),G(e,"height","40"),G(e,"xmlns","http://www.w3.org/2000/svg")},m(u,a){C(u,e,a),U(e,l),U(e,t),U(t,p)},p(u,a){a[0]&4&&i!==(i=u[32].criticalIssue+"")&&he(p,i)},d(u){u&&h(e)}}}function Pe(n){let e,l,t;function i(s){n[21](s,n[32])}function p(){return n[22](n[31])}function u(){return n[23](n[31])}let a={draggable:!0,$$slots:{default:[St]},$$scope:{ctx:n}};return n[32].point!==void 0&&(a.lngLat=n[32].point),e=new Oe({props:a}),Y.push(()=>Q(e,"lngLat",i)),e.$on("click",p),e.$on("dragend",u),{c(){M(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,g){P(e,s,g),t=!0},p(s,g){n=s;const c={};g[0]&4|g[1]&32&&(c.$$scope={dirty:g,ctx:n}),!l&&g[0]&4&&(l=!0,c.lngLat=n[32].point,Z(()=>l=!1)),e.$set(c)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function Bt(n){let e,l=n[29].conflict+"",t;return{c(){e=K("span"),t=le(l),this.h()},l(i){e=z(i,"SPAN",{class:!0});var p=J(e);t=ie(p,l),p.forEach(h),this.h()},h(){G(e,"class","dot svelte-996go8"),X(e,"background",xe)},m(i,p){C(i,e,p),U(e,t)},p(i,p){p[0]&4&&l!==(l=i[29].conflict+"")&&he(t,l)},d(i){i&&h(e)}}}function Te(n){let e,l,t;function i(s){n[24](s,n[29])}function p(){return n[25](n[31])}function u(){return n[26](n[31])}let a={draggable:!0,$$slots:{default:[Bt]},$$scope:{ctx:n}};return n[29].point!==void 0&&(a.lngLat=n[29].point),e=new Oe({props:a}),Y.push(()=>Q(e,"lngLat",i)),e.$on("click",p),e.$on("dragend",u),{c(){M(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,g){P(e,s,g),t=!0},p(s,g){n=s;const c={};g[0]&4|g[1]&32&&(c.$$scope={dirty:g,ctx:n}),!l&&g[0]&4&&(l=!0,c.lngLat=n[29].point,Z(()=>l=!1)),e.$set(c)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function At(n){let e,l;return e=new st({props:{paint:{"circle-radius":30,"circle-color":"yellow"}}}),{c(){M(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){P(e,t,i),l=!0},p:Je,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function Dt(n){let e,l,t,i,p,u,a=re(n[2].criticalIssues),s=[];for(let r=0;r<a.length;r+=1)s[r]=Pe(De(n,a,r));const g=r=>L(s[r],1,1,()=>{s[r]=null});let c=re(n[2].policyConflictLog),f=[];for(let r=0;r<c.length;r+=1)f[r]=Te(Ae(n,c,r));const d=r=>L(f[r],1,1,()=>{f[r]=null});return t=new Qe({props:{data:n[6],$$slots:{default:[At]},$$scope:{ctx:n}}}),p=new it({props:{map:n[3]}}),{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=N();for(let r=0;r<f.length;r+=1)f[r].c();l=N(),M(t.$$.fragment),i=N(),M(p.$$.fragment)},l(r){for(let $=0;$<s.length;$+=1)s[$].l(r);e=q(r);for(let $=0;$<f.length;$+=1)f[$].l(r);l=q(r),j(t.$$.fragment,r),i=q(r),j(p.$$.fragment,r)},m(r,$){for(let A=0;A<s.length;A+=1)s[A]&&s[A].m(r,$);C(r,e,$);for(let A=0;A<f.length;A+=1)f[A]&&f[A].m(r,$);C(r,l,$),P(t,r,$),C(r,i,$),P(p,r,$),u=!0},p(r,$){if($[0]&132){a=re(r[2].criticalIssues);let m;for(m=0;m<a.length;m+=1){const I=De(r,a,m);s[m]?(s[m].p(I,$),y(s[m],1)):(s[m]=Pe(I),s[m].c(),y(s[m],1),s[m].m(e.parentNode,e))}for(fe(),m=a.length;m<s.length;m+=1)g(m);ae()}if($[0]&132){c=re(r[2].policyConflictLog);let m;for(m=0;m<c.length;m+=1){const I=Ae(r,c,m);f[m]?(f[m].p(I,$),y(f[m],1)):(f[m]=Te(I),f[m].c(),y(f[m],1),f[m].m(l.parentNode,l))}for(fe(),m=c.length;m<f.length;m+=1)d(m);ae()}const A={};$[0]&64&&(A.data=r[6]),$[1]&32&&(A.$$scope={dirty:$,ctx:r}),t.$set(A);const B={};$[0]&8&&(B.map=r[3]),p.$set(B)},i(r){if(!u){for(let $=0;$<a.length;$+=1)y(s[$]);for(let $=0;$<c.length;$+=1)y(f[$]);y(t.$$.fragment,r),y(p.$$.fragment,r),u=!0}},o(r){s=s.filter(Boolean);for(let $=0;$<s.length;$+=1)L(s[$]);f=f.filter(Boolean);for(let $=0;$<f.length;$+=1)L(f[$]);L(t.$$.fragment,r),L(p.$$.fragment,r),u=!1},d(r){r&&(h(e),h(l),h(i)),ge(s,r),ge(f,r),T(t,r),T(p,r)}}}function Et(n){let e,l,t,i,p,u,a,s,g,c,f;const d=[ht,dt],r=[];function $(m,I){return m[0]==null?0:1}t=$(n),i=r[t]=d[t](n);function A(m){n[27](m)}let B={$$slots:{default:[Dt]},$$scope:{ctx:n}};return n[3]!==void 0&&(B.map=n[3]),a=new Ye({props:B}),Y.push(()=>Q(a,"map",A)),{c(){e=K("div"),l=K("div"),i.c(),p=N(),u=K("div"),M(a.$$.fragment),this.h()},l(m){e=z(m,"DIV",{style:!0});var I=J(e);l=z(I,"DIV",{style:!0});var D=J(l);i.l(D),D.forEach(h),p=q(I),u=z(I,"DIV",{style:!0});var W=J(u);j(a.$$.fragment,W),W.forEach(h),I.forEach(h),this.h()},h(){X(l,"width","30%"),X(l,"overflow-y","scroll"),X(l,"padding","10px"),X(l,"border","1px solid black"),X(u,"position","relative"),X(u,"width","70%"),X(e,"display","flex"),X(e,"height","80vh")},m(m,I){C(m,e,I),U(e,l),r[t].m(l,null),U(e,p),U(e,u),P(a,u,null),g=!0,c||(f=He($t,"keydown",n[10]),c=!0)},p(m,I){let D=t;t=$(m),t===D?r[t].p(m,I):(fe(),L(r[D],1,1,()=>{r[D]=null}),ae(),i=r[t],i?i.p(m,I):(i=r[t]=d[t](m),i.c()),y(i,1),i.m(l,null));const W={};I[0]&76|I[1]&32&&(W.$$scope={dirty:I,ctx:m}),!s&&I[0]&8&&(s=!0,W.map=m[3],Z(()=>s=!1)),a.$set(W)},i(m){g||(y(i),y(a.$$.fragment,m),g=!0)},o(m){L(i),L(a.$$.fragment,m),g=!1},d(m){m&&h(e),r[t].d(),T(a),c=!1,f()}}}function Nt(n,e,l){let t={type:"FeatureCollection",features:[]},i=e??l;if(i!=null){let p=i.kind=="critical"?n.criticalIssues:n.policyConflictLog;t.features.push(ye(p[i.idx].point))}return t}function ye(n){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}}}function Ve(n){return`${n.criticalIssue||"Unknown critical"}: ${n.locationName||"???"}`}function Fe(n){return`${n.conflict||"Unknown conflict"}: ${n.locationName||"???"}`}function qt(n,e,l){let t,i;Ce(n,O,v=>l(2,i=v));let p,u="critical",a=null,s=null,g=!1;function c(v){l(0,a=v),l(1,s=null)}function f(v){if(!g){if(a!=null){l(0,a=null);return}u=="critical"?(Be(O,i.criticalIssues=[...i.criticalIssues,{criticalIssue:"",stage:"",point:v.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),l(0,a={kind:"critical",idx:i.criticalIssues.length-1})):(Be(O,i.policyConflictLog=[...i.policyConflictLog,{conflict:"",stage:"",point:v.lngLat.toArray(),locationName:"",resolved:"",notes:""}],i),l(0,a={kind:"conflict",idx:i.policyConflictLog.length-1})),l(1,s=null)}}Ke(()=>{p.on("click",f),r(!1)}),ze(()=>{p.off("click",f)});function d(){window.confirm("Delete this entry?")&&(a.kind=="critical"?(i.criticalIssues.splice(a.idx,1),O.set(i)):(i.policyConflictLog.splice(a.idx,1),O.set(i)),l(0,a=null))}function r(v){let x={type:"FeatureCollection",features:[...i.criticalIssues.map(se=>ye(se.point)),...i.policyConflictLog.map(se=>ye(se.point))]};x.features.length>0&&p.fitBounds(et(x),{padding:20,animate:v})}function $(v){a!=null&&v.key=="Escape"?(v.stopPropagation(),l(0,a=null)):a!=null&&v.key=="Delete"&&d()}const A=()=>r(!0);function B(v){g=v,l(5,g)}function m(v){u=v,l(4,u)}const I=v=>c({kind:"critical",idx:v}),D=v=>l(1,s={kind:"critical",idx:v}),W=()=>l(1,s=null),R=v=>c({kind:"conflict",idx:v}),w=v=>l(1,s={kind:"conflict",idx:v}),ee=()=>l(1,s=null),V=()=>l(0,a=null);function E(v,x){n.$$.not_equal(x.point,v)&&(x.point=v,O.set(i))}const oe=v=>c({kind:"critical",idx:v}),_=v=>c({kind:"critical",idx:v});function b(v,x){n.$$.not_equal(x.point,v)&&(x.point=v,O.set(i))}const F=v=>c({kind:"conflict",idx:v}),H=v=>c({kind:"conflict",idx:v});function S(v){p=v,l(3,p)}return n.$$.update=()=>{n.$$.dirty[0]&7&&l(6,t=Nt(i,a,s))},[a,s,i,p,u,g,t,c,d,r,$,A,B,m,I,D,W,R,w,ee,V,E,oe,_,b,F,H,S]}class Yt extends Le{constructor(e){super(),Ie(this,e,qt,Et,we,{},null,[-1,-1])}}export{Yt as component};
