import{s as W,l as X,r as I,e as B,a as C,c as G,b as H,f as D,g as E,q as J,v as Y,i as Z,h as _,u as x,m as ee,o as se,w as F,k as oe}from"./scheduler.DGwhun8C.js";import{S as te,i as ne,e as Q,c as R,a as j,m as z,t as y,b as w,d as A}from"./index.B2vZYn3d.js";import"./index.CuBfkdLe.js";import"./index.D1AHjrtO.js";import{F as ie}from"./FancyRadio.6yf51cAL.js";import{P as L}from"./PrevNext.Cmr8069V.js";import"./paths.C-BiSP8Z.js";import"./entry.MJ0FKU8u.js";import{P as re}from"./Progress.DgvpMVEm.js";import{s as P}from"./data.D9k94BI9.js";function ae(s){let i,d,t,m,a,n,c,h,f,$,N,S,b,v,o,u;t=new re({props:{currentIdx:s[0]}}),n=new L({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}});const g=s[5].default,p=X(g,s,s[4],null);function M(e){s[6](e)}function O(e){s[7](e)}function T(e){s[8](e)}function U(e){s[9](e)}let V={choices:s[2]};return s[1].existingScores[s[0]-1]!==void 0&&(V.existingValue=s[1].existingScores[s[0]-1]),s[1].proposedScores[s[0]-1]!==void 0&&(V.proposedValue=s[1].proposedScores[s[0]-1]),s[1].existingScoreNotes[s[0]-1]!==void 0&&(V.existingNotes=s[1].existingScoreNotes[s[0]-1]),s[1].proposedScoreNotes[s[0]-1]!==void 0&&(V.proposedNotes=s[1].proposedScoreNotes[s[0]-1]),f=new ie({props:V}),I.push(()=>Q(f,"existingValue",M)),I.push(()=>Q(f,"proposedValue",O)),I.push(()=>Q(f,"existingNotes",T)),I.push(()=>Q(f,"proposedNotes",U)),o=new L({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}}),{c(){i=B("div"),d=B("div"),R(t.$$.fragment),m=C(),a=B("div"),R(n.$$.fragment),c=C(),p&&p.c(),h=C(),R(f.$$.fragment),v=C(),R(o.$$.fragment),this.h()},l(e){i=G(e,"DIV",{class:!0,style:!0});var r=H(i);d=G(r,"DIV",{class:!0});var k=H(d);j(t.$$.fragment,k),k.forEach(D),m=E(r),a=G(r,"DIV",{class:!0});var l=H(a);j(n.$$.fragment,l),c=E(l),p&&p.l(l),h=E(l),j(f.$$.fragment,l),v=E(l),j(o.$$.fragment,l),l.forEach(D),r.forEach(D),this.h()},h(){J(d,"class","govuk-grid-column-one-quarter"),J(a,"class","govuk-grid-column-three-quarters"),J(i,"class","govuk-grid-row"),Y(i,"margin","1em")},m(e,r){Z(e,i,r),_(i,d),z(t,d,null),_(i,m),_(i,a),z(n,a,null),_(a,c),p&&p.m(a,null),_(a,h),z(f,a,null),_(a,v),z(o,a,null),u=!0},p(e,[r]){const k={};r&1&&(k.currentIdx=e[0]),t.$set(k);const l={};r&1&&(l.idx=e[0]),n.$set(l),p&&p.p&&(!u||r&16)&&x(p,g,e,e[4],u?se(g,e[4],r,null):ee(e[4]),null);const q={};!$&&r&3&&($=!0,q.existingValue=e[1].existingScores[e[0]-1],F(()=>$=!1)),!N&&r&3&&(N=!0,q.proposedValue=e[1].proposedScores[e[0]-1],F(()=>N=!1)),!S&&r&3&&(S=!0,q.existingNotes=e[1].existingScoreNotes[e[0]-1],F(()=>S=!1)),!b&&r&3&&(b=!0,q.proposedNotes=e[1].proposedScoreNotes[e[0]-1],F(()=>b=!1)),f.$set(q);const K={};r&1&&(K.idx=e[0]),o.$set(K)},i(e){u||(y(t.$$.fragment,e),y(n.$$.fragment,e),y(p,e),y(f.$$.fragment,e),y(o.$$.fragment,e),u=!0)},o(e){w(t.$$.fragment,e),w(n.$$.fragment,e),w(p,e),w(f.$$.fragment,e),w(o.$$.fragment,e),u=!1},d(e){e&&D(i),A(t),A(n),p&&p.d(e),A(f),A(o)}}}function fe(s,i,d){let t;oe(s,P,o=>d(1,t=o));let{$$slots:m={},$$scope:a}=i,{idx:n}=i,{cases:c}=i,h=["#00b050","#99cc00","#ffc000","#ff5050","#ff0000"],f=["white","black","black","black","white"],$=c.map(([o,u],g)=>[o.toString(),u,h[g],f[g]]);function N(o){s.$$.not_equal(t.existingScores[n-1],o)&&(t.existingScores[n-1]=o,P.set(t))}function S(o){s.$$.not_equal(t.proposedScores[n-1],o)&&(t.proposedScores[n-1]=o,P.set(t))}function b(o){s.$$.not_equal(t.existingScoreNotes[n-1],o)&&(t.existingScoreNotes[n-1]=o,P.set(t))}function v(o){s.$$.not_equal(t.proposedScoreNotes[n-1],o)&&(t.proposedScoreNotes[n-1]=o,P.set(t))}return s.$$set=o=>{"idx"in o&&d(0,n=o.idx),"cases"in o&&d(3,c=o.cases),"$$scope"in o&&d(4,a=o.$$scope)},[n,t,$,c,a,m,N,S,b,v]}class Ne extends te{constructor(i){super(),ne(this,i,fe,ae,W,{idx:0,cases:3})}}export{Ne as Q};
