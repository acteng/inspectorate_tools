import{s as oe,l as te,r as A,e as D,a as q,c as F,b as L,f as m,g as P,q as Q,v as ie,i as Y,h as g,u as ae,m as ne,o as re,w as R,k as fe,t as ce,d as pe}from"./scheduler.DGwhun8C.js";import{S as le,i as de,e as j,c as z,a as B,m as G,t as w,b as E,d as H}from"./index.B2vZYn3d.js";import{b as M}from"./paths.XpRaXSx-.js";import"./index.0XS32RRJ.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.DsIqiCaA.js";import{F as ue}from"./FancyRadio.CMBlebD_.js";import{P as O}from"./PrevNext.Bmx4hwnT.js";import"./entry.br-Qbvg6.js";import{s as U}from"./colors.DaC397qr.js";import{s as I}from"./data.CUDp6U-G.js";import{d as W}from"./lists.Bn2sGx3F.js";import{P as _e}from"./Progress.CVKZUqTu.js";function X(s){let n,r,t,u;return{c(){n=D("p"),r=D("a"),t=ce("Log this critical issue"),this.h()},l(i){n=F(i,"P",{});var a=L(n);r=F(a,"A",{href:!0});var _=L(r);t=pe(_,"Log this critical issue"),_.forEach(m),a.forEach(m),this.h()},h(){Q(r,"href",u=M+"/route_check/problems_map?kind=critical&code="+W(s[0]))},m(i,a){Y(i,n,a),g(n,r),g(r,t)},p(i,a){a&1&&u!==(u=M+"/route_check/problems_map?kind=critical&code="+W(i[0]))&&Q(r,"href",u)},d(i){i&&m(n)}}}function ge(s){let n,r,t,u,i,a,_,y,p,C,S,$,o,b,T,h,k;t=new _e({props:{currentIdx:s[0]}}),a=new O({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}});const J=s[5].default,l=te(J,s,s[4],null);function Z(e){s[6](e)}function x(e){s[7](e)}function ee(e){s[8](e)}function se(e){s[9](e)}let N={choices:s[2]};s[1].safetyCheck.existingScores[s[0]-1]!==void 0&&(N.existingValue=s[1].safetyCheck.existingScores[s[0]-1]),s[1].safetyCheck.proposedScores[s[0]-1]!==void 0&&(N.proposedValue=s[1].safetyCheck.proposedScores[s[0]-1]),s[1].safetyCheck.existingScoreNotes[s[0]-1]!==void 0&&(N.existingNotes=s[1].safetyCheck.existingScoreNotes[s[0]-1]),s[1].safetyCheck.proposedScoreNotes[s[0]-1]!==void 0&&(N.proposedNotes=s[1].safetyCheck.proposedScoreNotes[s[0]-1]),p=new ue({props:N}),A.push(()=>j(p,"existingValue",Z)),A.push(()=>j(p,"proposedValue",x)),A.push(()=>j(p,"existingNotes",ee)),A.push(()=>j(p,"proposedNotes",se));let c=(s[1].safetyCheck.existingScores[s[0]-1]=="C"||s[1].safetyCheck.proposedScores[s[0]-1]=="C")&&X(s);return h=new O({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),{c(){n=D("div"),r=D("div"),z(t.$$.fragment),u=q(),i=D("div"),z(a.$$.fragment),_=q(),l&&l.c(),y=q(),z(p.$$.fragment),b=q(),c&&c.c(),T=q(),z(h.$$.fragment),this.h()},l(e){n=F(e,"DIV",{class:!0,style:!0});var f=L(n);r=F(f,"DIV",{class:!0});var v=L(r);B(t.$$.fragment,v),v.forEach(m),u=P(f),i=F(f,"DIV",{class:!0});var d=L(i);B(a.$$.fragment,d),_=P(d),l&&l.l(d),y=P(d),B(p.$$.fragment,d),b=P(d),c&&c.l(d),T=P(d),B(h.$$.fragment,d),d.forEach(m),f.forEach(m),this.h()},h(){Q(r,"class","govuk-grid-column-one-quarter"),Q(i,"class","govuk-grid-column-three-quarters"),Q(n,"class","govuk-grid-row"),ie(n,"margin","1em")},m(e,f){Y(e,n,f),g(n,r),G(t,r,null),g(n,u),g(n,i),G(a,i,null),g(i,_),l&&l.m(i,null),g(i,y),G(p,i,null),g(i,b),c&&c.m(i,null),g(i,T),G(h,i,null),k=!0},p(e,[f]){const v={};f&1&&(v.currentIdx=e[0]),t.$set(v);const d={};f&1&&(d.idx=e[0]),a.$set(d),l&&l.p&&(!k||f&16)&&ae(l,J,e,e[4],k?re(J,e[4],f,null):ne(e[4]),null);const V={};!C&&f&3&&(C=!0,V.existingValue=e[1].safetyCheck.existingScores[e[0]-1],R(()=>C=!1)),!S&&f&3&&(S=!0,V.proposedValue=e[1].safetyCheck.proposedScores[e[0]-1],R(()=>S=!1)),!$&&f&3&&($=!0,V.existingNotes=e[1].safetyCheck.existingScoreNotes[e[0]-1],R(()=>$=!1)),!o&&f&3&&(o=!0,V.proposedNotes=e[1].safetyCheck.proposedScoreNotes[e[0]-1],R(()=>o=!1)),p.$set(V),e[1].safetyCheck.existingScores[e[0]-1]=="C"||e[1].safetyCheck.proposedScores[e[0]-1]=="C"?c?c.p(e,f):(c=X(e),c.c(),c.m(i,T)):c&&(c.d(1),c=null);const K={};f&1&&(K.idx=e[0]),h.$set(K)},i(e){k||(w(t.$$.fragment,e),w(a.$$.fragment,e),w(l,e),w(p.$$.fragment,e),w(h.$$.fragment,e),k=!0)},o(e){E(t.$$.fragment,e),E(a.$$.fragment,e),E(l,e),E(p.$$.fragment,e),E(h.$$.fragment,e),k=!1},d(e){e&&m(n),H(t),H(a),l&&l.d(e),H(p),c&&c.d(),H(h)}}}function he(s,n,r){let t;fe(s,I,o=>r(1,t=o));let{$$slots:u={},$$scope:i}=n,{idx:a}=n,{cases:_}=n,y=_.map(([o,b])=>[o,b,U[o].background,U[o].font]);function p(o){s.$$.not_equal(t.safetyCheck.existingScores[a-1],o)&&(t.safetyCheck.existingScores[a-1]=o,I.set(t))}function C(o){s.$$.not_equal(t.safetyCheck.proposedScores[a-1],o)&&(t.safetyCheck.proposedScores[a-1]=o,I.set(t))}function S(o){s.$$.not_equal(t.safetyCheck.existingScoreNotes[a-1],o)&&(t.safetyCheck.existingScoreNotes[a-1]=o,I.set(t))}function $(o){s.$$.not_equal(t.safetyCheck.proposedScoreNotes[a-1],o)&&(t.safetyCheck.proposedScoreNotes[a-1]=o,I.set(t))}return s.$$set=o=>{"idx"in o&&r(0,a=o.idx),"cases"in o&&r(3,_=o.cases),"$$scope"in o&&r(4,i=o.$$scope)},[a,t,y,_,i,u,p,C,S,$]}class we extends le{constructor(n){super(),de(this,n,he,ge,oe,{idx:0,cases:3})}}export{we as Q};
