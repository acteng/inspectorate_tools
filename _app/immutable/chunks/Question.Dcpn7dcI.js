import{s as ve,r as $e,D as O,e as Q,a as $,t as he,c as j,b as C,d as h,k as be,f as B,h as L,i as Se,j as i,o as Ne,u as ke,v as we,w as ye,E as U,l as Ee}from"./scheduler.BHcsbfKa.js";import{S as qe,i as Ie,e as W,c as y,a as E,m as q,t as b,b as S,d as I}from"./index.CiegshHD.js";import{B as Pe}from"./Geocoder.svelte_svelte_type_style_lang.C6RSDJkA.js";import{P as ue,F as ce}from"./PrevNext.Dbg4h1ts.js";import{T as de}from"./TextArea.uy6XZ7K0.js";import{P as De}from"./Progress.CvOvyeEJ.js";import{s as M}from"./data.CJZQ2UkA.js";function Ve(a){let n,l,r,c,F,o,P,D,H,u,N,d,R,_,s,z,G,g,X,Y,k,m,Z,x,p,ee,ae,w,V;l=new Pe({props:{links:[["Tools","/"],["Area check tool","/area_check"],["Area Scorecard","/area_check/scorecard"]],current:a[1]}}),c=new ue({props:{idx:a[0],total:13,urlPath:"area_check/scorecard/q"}});const se=a[6].default,f=$e(se,a,a[5],null);d=new De({props:{currentIdx:a[0]}});function _e(e){a[7](e)}let te={legend:"Existing",choices:a[3]};a[2].existingScores[a[0]-1]!==void 0&&(te.value=a[2].existingScores[a[0]-1]),s=new ce({props:te}),O.push(()=>W(s,"value",_e));function ge(e){a[8](e)}let ne={label:"Notes"};a[2].existingScoreNotes[a[0]-1]!==void 0&&(ne.value=a[2].existingScoreNotes[a[0]-1]),g=new de({props:ne}),O.push(()=>W(g,"value",ge));function me(e){a[9](e)}let re={legend:"Proposed",choices:a[3]};a[2].proposedScores[a[0]-1]!==void 0&&(re.value=a[2].proposedScores[a[0]-1]),m=new ce({props:re}),O.push(()=>W(m,"value",me));function pe(e){a[10](e)}let oe={label:"Notes"};return a[2].proposedScoreNotes[a[0]-1]!==void 0&&(oe.value=a[2].proposedScoreNotes[a[0]-1]),p=new de({props:oe}),O.push(()=>W(p,"value",pe)),w=new ue({props:{idx:a[0],total:13,urlPath:"area_check/scorecard/q"}}),{c(){n=Q("div"),y(l.$$.fragment),r=$(),y(c.$$.fragment),F=$(),o=Q("h2"),P=he(a[1]),D=$(),f&&f.c(),H=$(),u=Q("div"),N=Q("div"),y(d.$$.fragment),R=$(),_=Q("div"),y(s.$$.fragment),G=$(),y(g.$$.fragment),Y=$(),k=Q("div"),y(m.$$.fragment),x=$(),y(p.$$.fragment),ae=$(),y(w.$$.fragment),this.h()},l(e){n=j(e,"DIV",{class:!0});var t=C(n);E(l.$$.fragment,t),r=h(t),E(c.$$.fragment,t),F=h(t),o=j(t,"H2",{});var J=C(o);P=be(J,a[1]),J.forEach(B),D=h(t),f&&f.l(t),H=h(t),u=j(t,"DIV",{class:!0});var v=C(u);N=j(v,"DIV",{class:!0});var K=C(N);E(d.$$.fragment,K),K.forEach(B),R=h(v),_=j(v,"DIV",{class:!0});var A=C(_);E(s.$$.fragment,A),G=h(A),E(g.$$.fragment,A),A.forEach(B),Y=h(v),k=j(v,"DIV",{class:!0});var T=C(k);E(m.$$.fragment,T),x=h(T),E(p.$$.fragment,T),T.forEach(B),v.forEach(B),ae=h(t),E(w.$$.fragment,t),t.forEach(B),this.h()},h(){L(N,"class","svelte-62ysn6"),L(_,"class","svelte-62ysn6"),L(k,"class","svelte-62ysn6"),L(u,"class","three-columns svelte-62ysn6"),L(n,"class","govuk-prose")},m(e,t){Se(e,n,t),q(l,n,null),i(n,r),q(c,n,null),i(n,F),i(n,o),i(o,P),i(n,D),f&&f.m(n,null),i(n,H),i(n,u),i(u,N),q(d,N,null),i(u,R),i(u,_),q(s,_,null),i(_,G),q(g,_,null),i(u,Y),i(u,k),q(m,k,null),i(k,x),q(p,k,null),i(n,ae),q(w,n,null),V=!0},p(e,[t]){const J={};t&2&&(J.current=e[1]),l.$set(J);const v={};t&1&&(v.idx=e[0]),c.$set(v),(!V||t&2)&&Ne(P,e[1]),f&&f.p&&(!V||t&32)&&ke(f,se,e,e[5],V?ye(se,e[5],t,null):we(e[5]),null);const K={};t&1&&(K.currentIdx=e[0]),d.$set(K);const A={};!z&&t&5&&(z=!0,A.value=e[2].existingScores[e[0]-1],U(()=>z=!1)),s.$set(A);const T={};!X&&t&5&&(X=!0,T.value=e[2].existingScoreNotes[e[0]-1],U(()=>X=!1)),g.$set(T);const ie={};!Z&&t&5&&(Z=!0,ie.value=e[2].proposedScores[e[0]-1],U(()=>Z=!1)),m.$set(ie);const le={};!ee&&t&5&&(ee=!0,le.value=e[2].proposedScoreNotes[e[0]-1],U(()=>ee=!1)),p.$set(le);const fe={};t&1&&(fe.idx=e[0]),w.$set(fe)},i(e){V||(b(l.$$.fragment,e),b(c.$$.fragment,e),b(f,e),b(d.$$.fragment,e),b(s.$$.fragment,e),b(g.$$.fragment,e),b(m.$$.fragment,e),b(p.$$.fragment,e),b(w.$$.fragment,e),V=!0)},o(e){S(l.$$.fragment,e),S(c.$$.fragment,e),S(f,e),S(d.$$.fragment,e),S(s.$$.fragment,e),S(g.$$.fragment,e),S(m.$$.fragment,e),S(p.$$.fragment,e),S(w.$$.fragment,e),V=!1},d(e){e&&B(n),I(l),I(c),f&&f.d(e),I(d),I(s),I(g),I(m),I(p),I(w)}}}function Ae(a,n,l){let r;Ee(a,M,s=>l(2,r=s));let{$$slots:c={},$$scope:F}=n,{idx:o}=n,{label:P}=n,{cases:D}=n,H=["#00b050","#99cc00","#ffc000","#ff5050","#ff0000"],u=D.map(([s,z],G)=>[s.toString(),z,H[G]]);function N(s){a.$$.not_equal(r.existingScores[o-1],s)&&(r.existingScores[o-1]=s,M.set(r))}function d(s){a.$$.not_equal(r.existingScoreNotes[o-1],s)&&(r.existingScoreNotes[o-1]=s,M.set(r))}function R(s){a.$$.not_equal(r.proposedScores[o-1],s)&&(r.proposedScores[o-1]=s,M.set(r))}function _(s){a.$$.not_equal(r.proposedScoreNotes[o-1],s)&&(r.proposedScoreNotes[o-1]=s,M.set(r))}return a.$$set=s=>{"idx"in s&&l(0,o=s.idx),"label"in s&&l(1,P=s.label),"cases"in s&&l(4,D=s.cases),"$$scope"in s&&l(5,F=s.$$scope)},[o,P,r,u,D,F,c,N,d,R,_]}class Re extends qe{constructor(n){super(),Ie(this,n,Ae,Ve,ve,{idx:0,label:1,cases:4})}}export{Re as Q};
