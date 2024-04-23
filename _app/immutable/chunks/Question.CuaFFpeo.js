import{s as Z,l as x,E as z,a as P,e as G,t as ee,g as E,c as J,b as K,d as se,f as g,r as O,i as N,h as L,j as oe,u as ie,m as te,o as ne,F as D,k as ae}from"./scheduler.DQXnSe5h.js";import{S as re,i as fe,f as Q,c as j,a as H,m as R,t as I,b as C,d as A}from"./index.B4AQako7.js";import"./paths.B-zplO20.js";import{P as T,F as le}from"./PrevNext.DMnnooYv.js";import"./Modal.svelte_svelte_type_style_lang.2NhczJl8.js";import{P as pe}from"./Progress.D5JlFD8b.js";import{s as F}from"./data.CwkZ2u-A.js";function de(s){let n,p,t,h,m,a,l,d,u,S,r,$,V,v,k,o,_,c;n=new T({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}});const B=s[6].default,f=x(B,s,s[5],null);u=new pe({props:{currentIdx:s[0]}});function U(e){s[7](e)}function W(e){s[8](e)}function X(e){s[9](e)}function Y(e){s[10](e)}let w={choices:s[3]};return s[2].existingScores[s[0]-1]!==void 0&&(w.existingValue=s[2].existingScores[s[0]-1]),s[2].proposedScores[s[0]-1]!==void 0&&(w.proposedValue=s[2].proposedScores[s[0]-1]),s[2].existingScoreNotes[s[0]-1]!==void 0&&(w.existingNotes=s[2].existingScoreNotes[s[0]-1]),s[2].proposedScoreNotes[s[0]-1]!==void 0&&(w.proposedNotes=s[2].proposedScoreNotes[s[0]-1]),r=new le({props:w}),z.push(()=>Q(r,"existingValue",U)),z.push(()=>Q(r,"proposedValue",W)),z.push(()=>Q(r,"existingNotes",X)),z.push(()=>Q(r,"proposedNotes",Y)),_=new T({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}}),{c(){j(n.$$.fragment),p=P(),t=G("h2"),h=ee(s[1]),m=P(),f&&f.c(),a=P(),l=G("div"),d=G("div"),j(u.$$.fragment),S=P(),j(r.$$.fragment),o=P(),j(_.$$.fragment),this.h()},l(e){H(n.$$.fragment,e),p=E(e),t=J(e,"H2",{});var i=K(t);h=se(i,s[1]),i.forEach(g),m=E(e),f&&f.l(e),a=E(e),l=J(e,"DIV",{class:!0});var b=K(l);d=J(b,"DIV",{class:!0});var q=K(d);H(u.$$.fragment,q),q.forEach(g),S=E(b),H(r.$$.fragment,b),b.forEach(g),o=E(e),H(_.$$.fragment,e),this.h()},h(){O(d,"class","progress-column svelte-1dlwx3z"),O(l,"class","columns svelte-1dlwx3z")},m(e,i){R(n,e,i),N(e,p,i),N(e,t,i),L(t,h),N(e,m,i),f&&f.m(e,i),N(e,a,i),N(e,l,i),L(l,d),R(u,d,null),L(l,S),R(r,l,null),N(e,o,i),R(_,e,i),c=!0},p(e,[i]){const b={};i&1&&(b.idx=e[0]),n.$set(b),(!c||i&2)&&oe(h,e[1]),f&&f.p&&(!c||i&32)&&ie(f,B,e,e[5],c?ne(B,e[5],i,null):te(e[5]),null);const q={};i&1&&(q.currentIdx=e[0]),u.$set(q);const y={};!$&&i&5&&($=!0,y.existingValue=e[2].existingScores[e[0]-1],D(()=>$=!1)),!V&&i&5&&(V=!0,y.proposedValue=e[2].proposedScores[e[0]-1],D(()=>V=!1)),!v&&i&5&&(v=!0,y.existingNotes=e[2].existingScoreNotes[e[0]-1],D(()=>v=!1)),!k&&i&5&&(k=!0,y.proposedNotes=e[2].proposedScoreNotes[e[0]-1],D(()=>k=!1)),r.$set(y);const M={};i&1&&(M.idx=e[0]),_.$set(M)},i(e){c||(I(n.$$.fragment,e),I(f,e),I(u.$$.fragment,e),I(r.$$.fragment,e),I(_.$$.fragment,e),c=!0)},o(e){C(n.$$.fragment,e),C(f,e),C(u.$$.fragment,e),C(r.$$.fragment,e),C(_.$$.fragment,e),c=!1},d(e){e&&(g(p),g(t),g(m),g(a),g(l),g(o)),A(n,e),f&&f.d(e),A(u),A(r),A(_,e)}}}function ue(s,n,p){let t;ae(s,F,o=>p(2,t=o));let{$$slots:h={},$$scope:m}=n,{idx:a}=n,{label:l}=n,{cases:d}=n,u=["#00b050","#99cc00","#ffc000","#ff5050","#ff0000"],S=["white","black","black","black","white"],r=d.map(([o,_],c)=>[o.toString(),_,u[c],S[c]]);function $(o){s.$$.not_equal(t.existingScores[a-1],o)&&(t.existingScores[a-1]=o,F.set(t))}function V(o){s.$$.not_equal(t.proposedScores[a-1],o)&&(t.proposedScores[a-1]=o,F.set(t))}function v(o){s.$$.not_equal(t.existingScoreNotes[a-1],o)&&(t.existingScoreNotes[a-1]=o,F.set(t))}function k(o){s.$$.not_equal(t.proposedScoreNotes[a-1],o)&&(t.proposedScoreNotes[a-1]=o,F.set(t))}return s.$$set=o=>{"idx"in o&&p(0,a=o.idx),"label"in o&&p(1,l=o.label),"cases"in o&&p(4,d=o.cases),"$$scope"in o&&p(5,m=o.$$scope)},[a,l,t,r,d,m,h,$,V,v,k]}class Se extends re{constructor(n){super(),fe(this,n,ue,de,Z,{idx:0,label:1,cases:4})}}export{Se as Q};
