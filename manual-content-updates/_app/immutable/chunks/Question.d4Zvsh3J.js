import{s as x,l as ee,v as Q,a as I,e as j,t as se,g as E,c as H,b as R,f as b,d as oe,o as M,x as te,i as O,h as N,j as ie,u as ne,p as ae,q as re,w as z,k as fe}from"./scheduler.BJ06nkRu.js";import{S as le,i as de,e as A,c as B,a as G,m as J,t as C,b as D,d as K}from"./index.Dmc4uC9p.js";/* empty css                                            */import{F as pe}from"./FancyRadio.B2elvFfO.js";/* empty css                                                       */import{P as U}from"./PrevNext.DFRh6KNF.js";import{P as ue}from"./Progress.DhEVWfeE.js";import{s as F}from"./data.Vlblm8Wi.js";function _e(s){let n,u,t,g,d,a,f,_,S,$,V,r,k,q,y,o,v,p,h;n=new U({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}}),d=new ue({props:{currentIdx:s[0]}});const L=s[6].default,l=ee(L,s,s[5],null);function W(e){s[7](e)}function X(e){s[8](e)}function Y(e){s[9](e)}function Z(e){s[10](e)}let w={choices:s[3]};return s[2].existingScores[s[0]-1]!==void 0&&(w.existingValue=s[2].existingScores[s[0]-1]),s[2].proposedScores[s[0]-1]!==void 0&&(w.proposedValue=s[2].proposedScores[s[0]-1]),s[2].existingScoreNotes[s[0]-1]!==void 0&&(w.existingNotes=s[2].existingScoreNotes[s[0]-1]),s[2].proposedScoreNotes[s[0]-1]!==void 0&&(w.proposedNotes=s[2].proposedScoreNotes[s[0]-1]),r=new pe({props:w}),Q.push(()=>A(r,"existingValue",W)),Q.push(()=>A(r,"proposedValue",X)),Q.push(()=>A(r,"existingNotes",Y)),Q.push(()=>A(r,"proposedNotes",Z)),p=new U({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}}),{c(){B(n.$$.fragment),u=I(),t=j("div"),g=j("div"),B(d.$$.fragment),a=I(),f=j("div"),_=j("h2"),S=se(s[1]),$=I(),l&&l.c(),V=I(),B(r.$$.fragment),v=I(),B(p.$$.fragment),this.h()},l(e){G(n.$$.fragment,e),u=E(e),t=H(e,"DIV",{class:!0,style:!0});var i=R(t);g=H(i,"DIV",{class:!0});var P=R(g);G(d.$$.fragment,P),P.forEach(b),a=E(i),f=H(i,"DIV",{class:!0});var c=R(f);_=H(c,"H2",{});var m=R(_);S=oe(m,s[1]),m.forEach(b),$=E(c),l&&l.l(c),V=E(c),G(r.$$.fragment,c),c.forEach(b),i.forEach(b),v=E(e),G(p.$$.fragment,e),this.h()},h(){M(g,"class","govuk-grid-column-one-quarter"),M(f,"class","govuk-grid-column-three-quarters"),M(t,"class","govuk-grid-row"),te(t,"margin","1em")},m(e,i){J(n,e,i),O(e,u,i),O(e,t,i),N(t,g),J(d,g,null),N(t,a),N(t,f),N(f,_),N(_,S),N(f,$),l&&l.m(f,null),N(f,V),J(r,f,null),O(e,v,i),J(p,e,i),h=!0},p(e,[i]){const P={};i&1&&(P.idx=e[0]),n.$set(P);const c={};i&1&&(c.currentIdx=e[0]),d.$set(c),(!h||i&2)&&ie(S,e[1]),l&&l.p&&(!h||i&32)&&ne(l,L,e,e[5],h?re(L,e[5],i,null):ae(e[5]),null);const m={};!k&&i&5&&(k=!0,m.existingValue=e[2].existingScores[e[0]-1],z(()=>k=!1)),!q&&i&5&&(q=!0,m.proposedValue=e[2].proposedScores[e[0]-1],z(()=>q=!1)),!y&&i&5&&(y=!0,m.existingNotes=e[2].existingScoreNotes[e[0]-1],z(()=>y=!1)),!o&&i&5&&(o=!0,m.proposedNotes=e[2].proposedScoreNotes[e[0]-1],z(()=>o=!1)),r.$set(m);const T={};i&1&&(T.idx=e[0]),p.$set(T)},i(e){h||(C(n.$$.fragment,e),C(d.$$.fragment,e),C(l,e),C(r.$$.fragment,e),C(p.$$.fragment,e),h=!0)},o(e){D(n.$$.fragment,e),D(d.$$.fragment,e),D(l,e),D(r.$$.fragment,e),D(p.$$.fragment,e),h=!1},d(e){e&&(b(u),b(t),b(v)),K(n,e),K(d),l&&l.d(e),K(r),K(p,e)}}}function ce(s,n,u){let t;fe(s,F,o=>u(2,t=o));let{$$slots:g={},$$scope:d}=n,{idx:a}=n,{label:f}=n,{cases:_}=n,S=["#00b050","#99cc00","#ffc000","#ff5050","#ff0000"],$=["white","black","black","black","white"],V=_.map(([o,v],p)=>[o.toString(),v,S[p],$[p]]);function r(o){s.$$.not_equal(t.existingScores[a-1],o)&&(t.existingScores[a-1]=o,F.set(t))}function k(o){s.$$.not_equal(t.proposedScores[a-1],o)&&(t.proposedScores[a-1]=o,F.set(t))}function q(o){s.$$.not_equal(t.existingScoreNotes[a-1],o)&&(t.existingScoreNotes[a-1]=o,F.set(t))}function y(o){s.$$.not_equal(t.proposedScoreNotes[a-1],o)&&(t.proposedScoreNotes[a-1]=o,F.set(t))}return s.$$set=o=>{"idx"in o&&u(0,a=o.idx),"label"in o&&u(1,f=o.label),"cases"in o&&u(4,_=o.cases),"$$scope"in o&&u(5,d=o.$$scope)},[a,f,t,V,_,d,g,r,k,q,y]}class Ve extends le{constructor(n){super(),de(this,n,ce,_e,x,{idx:0,label:1,cases:4})}}export{Ve as Q};
