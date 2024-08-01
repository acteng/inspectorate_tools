import{s as re,l as le,w as Q,a as y,e as j,t as H,g as w,c as R,b as T,f as S,d as z,p as Y,q as pe,i as Z,h as m,j as ee,u as ce,r as ge,v as fe,x as A,k as de}from"./scheduler.BwufR8Ly.js";import{S as me,i as ue,e as B,c as G,a as J,m as K,t as I,b as E,d as L}from"./index.BYv68wXE.js";/* empty css                                            */import{F as he}from"./FancyRadio.I1WTFXqz.js";import{P as ae}from"./PrevNext.Cxoh4_01.js";import{P as _e}from"./Progress.BGDojb7s.js";import{s as D}from"./data.DS94ylZJ.js";import{s as se}from"./colors.DaC397qr.js";function ke(a){let o,d,t,h,g,n,r,p,C,P=a[0].toString().padStart(2,"0")+"",N,v,b,s,$,c,M,O,U,W,F,_,k;o=new ae({props:{idx:a[0],total:19,urlPath:"route_check/path_placemaking_check/pp"}}),g=new _e({props:{currentIdx:a[0]}});const X=a[6].default,l=le(X,a,a[5],null);function te(e){a[7](e)}function ie(e){a[8](e)}function oe(e){a[9](e)}function ne(e){a[10](e)}let V={choices:a[3]};return a[2].pathPlacemakingCheck.existingScores[a[0]-1]!==void 0&&(V.existingValue=a[2].pathPlacemakingCheck.existingScores[a[0]-1]),a[2].pathPlacemakingCheck.proposedScores[a[0]-1]!==void 0&&(V.proposedValue=a[2].pathPlacemakingCheck.proposedScores[a[0]-1]),a[2].pathPlacemakingCheck.existingScoreNotes[a[0]-1]!==void 0&&(V.existingNotes=a[2].pathPlacemakingCheck.existingScoreNotes[a[0]-1]),a[2].pathPlacemakingCheck.proposedScoreNotes[a[0]-1]!==void 0&&(V.proposedNotes=a[2].pathPlacemakingCheck.proposedScoreNotes[a[0]-1]),c=new he({props:V}),Q.push(()=>B(c,"existingValue",te)),Q.push(()=>B(c,"proposedValue",ie)),Q.push(()=>B(c,"existingNotes",oe)),Q.push(()=>B(c,"proposedNotes",ne)),_=new ae({props:{idx:a[0],total:19,urlPath:"route_check/path_placemaking_check/pp"}}),{c(){G(o.$$.fragment),d=y(),t=j("div"),h=j("div"),G(g.$$.fragment),n=y(),r=j("div"),p=j("h2"),C=H("PP"),N=H(P),v=H(": "),b=H(a[1]),s=y(),l&&l.c(),$=y(),G(c.$$.fragment),F=y(),G(_.$$.fragment),this.h()},l(e){J(o.$$.fragment,e),d=w(e),t=R(e,"DIV",{class:!0,style:!0});var i=T(t);h=R(i,"DIV",{class:!0});var q=T(h);J(g.$$.fragment,q),q.forEach(S),n=w(i),r=R(i,"DIV",{class:!0});var u=T(r);p=R(u,"H2",{});var f=T(p);C=z(f,"PP"),N=z(f,P),v=z(f,": "),b=z(f,a[1]),f.forEach(S),s=w(u),l&&l.l(u),$=w(u),J(c.$$.fragment,u),u.forEach(S),i.forEach(S),F=w(e),J(_.$$.fragment,e),this.h()},h(){Y(h,"class","govuk-grid-column-one-quarter"),Y(r,"class","govuk-grid-column-three-quarters"),Y(t,"class","govuk-grid-row"),pe(t,"margin","1em")},m(e,i){K(o,e,i),Z(e,d,i),Z(e,t,i),m(t,h),K(g,h,null),m(t,n),m(t,r),m(r,p),m(p,C),m(p,N),m(p,v),m(p,b),m(r,s),l&&l.m(r,null),m(r,$),K(c,r,null),Z(e,F,i),K(_,e,i),k=!0},p(e,[i]){const q={};i&1&&(q.idx=e[0]),o.$set(q);const u={};i&1&&(u.currentIdx=e[0]),g.$set(u),(!k||i&1)&&P!==(P=e[0].toString().padStart(2,"0")+"")&&ee(N,P),(!k||i&2)&&ee(b,e[1]),l&&l.p&&(!k||i&32)&&ce(l,X,e,e[5],k?fe(X,e[5],i,null):ge(e[5]),null);const f={};!M&&i&5&&(M=!0,f.existingValue=e[2].pathPlacemakingCheck.existingScores[e[0]-1],A(()=>M=!1)),!O&&i&5&&(O=!0,f.proposedValue=e[2].pathPlacemakingCheck.proposedScores[e[0]-1],A(()=>O=!1)),!U&&i&5&&(U=!0,f.existingNotes=e[2].pathPlacemakingCheck.existingScoreNotes[e[0]-1],A(()=>U=!1)),!W&&i&5&&(W=!0,f.proposedNotes=e[2].pathPlacemakingCheck.proposedScoreNotes[e[0]-1],A(()=>W=!1)),c.$set(f);const x={};i&1&&(x.idx=e[0]),_.$set(x)},i(e){k||(I(o.$$.fragment,e),I(g.$$.fragment,e),I(l,e),I(c.$$.fragment,e),I(_.$$.fragment,e),k=!0)},o(e){E(o.$$.fragment,e),E(g.$$.fragment,e),E(l,e),E(c.$$.fragment,e),E(_.$$.fragment,e),k=!1},d(e){e&&(S(d),S(t),S(F)),L(o,e),L(g),l&&l.d(e),L(c),L(_,e)}}}function Pe(a,o,d){let t;de(a,D,s=>d(2,t=s));let{$$slots:h={},$$scope:g}=o,{idx:n}=o,{label:r}=o,{cases:p}=o,C=p.map(([s,$])=>[s,$,se[s].background,se[s].font]);function P(s){a.$$.not_equal(t.pathPlacemakingCheck.existingScores[n-1],s)&&(t.pathPlacemakingCheck.existingScores[n-1]=s,D.set(t))}function N(s){a.$$.not_equal(t.pathPlacemakingCheck.proposedScores[n-1],s)&&(t.pathPlacemakingCheck.proposedScores[n-1]=s,D.set(t))}function v(s){a.$$.not_equal(t.pathPlacemakingCheck.existingScoreNotes[n-1],s)&&(t.pathPlacemakingCheck.existingScoreNotes[n-1]=s,D.set(t))}function b(s){a.$$.not_equal(t.pathPlacemakingCheck.proposedScoreNotes[n-1],s)&&(t.pathPlacemakingCheck.proposedScoreNotes[n-1]=s,D.set(t))}return a.$$set=s=>{"idx"in s&&d(0,n=s.idx),"label"in s&&d(1,r=s.label),"cases"in s&&d(4,p=s.cases),"$$scope"in s&&d(5,g=s.$$scope)},[n,r,t,C,p,g,h,P,N,v,b]}class ye extends me{constructor(o){super(),ue(this,o,Pe,ke,re,{idx:0,label:1,cases:4})}}export{ye as Q};
