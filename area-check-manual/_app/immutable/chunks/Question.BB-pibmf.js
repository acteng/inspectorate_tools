import{s as re,l as pe,v as F,a as P,e as Q,t as j,g as I,c as H,b as R,f as b,d as T,o as Y,x as le,i as Z,h,j as ee,u as fe,p as ce,q as de,w as z,k as ue}from"./scheduler.ScMV3vmV.js";import{S as he,i as _e,e as B,c as G,a as J,m as K,t as w,b as E,d as L}from"./index.DbrWxxqn.js";import"./ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import{F as ge}from"./FancyRadio.B6JmvRxX.js";/* empty css                                                       */import{P as se}from"./PrevNext.DG4kF9sg.js";import{P as me}from"./Progress.D9_X6GQf.js";import{s as D}from"./data.Cu70PuZj.js";import{s as te}from"./colors.CYEpEtTL.js";function ke(s){let i,u,o,g,c,n,r,l,v,N=16+s[0]+"",C,$,S,t,V,f,M,O,U,W,A,m,k;i=new se({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),c=new me({props:{currentIdx:s[0]}});const X=s[6].default,p=pe(X,s,s[5],null);function oe(e){s[7](e)}function ae(e){s[8](e)}function ie(e){s[9](e)}function ne(e){s[10](e)}let q={choices:s[3]};return s[2].pathCheck.existingScores[s[0]-1]!==void 0&&(q.existingValue=s[2].pathCheck.existingScores[s[0]-1]),s[2].pathCheck.proposedScores[s[0]-1]!==void 0&&(q.proposedValue=s[2].pathCheck.proposedScores[s[0]-1]),s[2].pathCheck.existingScoreNotes[s[0]-1]!==void 0&&(q.existingNotes=s[2].pathCheck.existingScoreNotes[s[0]-1]),s[2].pathCheck.proposedScoreNotes[s[0]-1]!==void 0&&(q.proposedNotes=s[2].pathCheck.proposedScoreNotes[s[0]-1]),f=new ge({props:q}),F.push(()=>B(f,"existingValue",oe)),F.push(()=>B(f,"proposedValue",ae)),F.push(()=>B(f,"existingNotes",ie)),F.push(()=>B(f,"proposedNotes",ne)),m=new se({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),{c(){G(i.$$.fragment),u=P(),o=Q("div"),g=Q("div"),G(c.$$.fragment),n=P(),r=Q("div"),l=Q("h2"),v=j("PA"),C=j(N),$=j(": "),S=j(s[1]),t=P(),p&&p.c(),V=P(),G(f.$$.fragment),A=P(),G(m.$$.fragment),this.h()},l(e){J(i.$$.fragment,e),u=I(e),o=H(e,"DIV",{class:!0,style:!0});var a=R(o);g=H(a,"DIV",{class:!0});var y=R(g);J(c.$$.fragment,y),y.forEach(b),n=I(a),r=H(a,"DIV",{class:!0});var _=R(r);l=H(_,"H2",{});var d=R(l);v=T(d,"PA"),C=T(d,N),$=T(d,": "),S=T(d,s[1]),d.forEach(b),t=I(_),p&&p.l(_),V=I(_),J(f.$$.fragment,_),_.forEach(b),a.forEach(b),A=I(e),J(m.$$.fragment,e),this.h()},h(){Y(g,"class","govuk-grid-column-one-quarter"),Y(r,"class","govuk-grid-column-three-quarters"),Y(o,"class","govuk-grid-row"),le(o,"margin","1em")},m(e,a){K(i,e,a),Z(e,u,a),Z(e,o,a),h(o,g),K(c,g,null),h(o,n),h(o,r),h(r,l),h(l,v),h(l,C),h(l,$),h(l,S),h(r,t),p&&p.m(r,null),h(r,V),K(f,r,null),Z(e,A,a),K(m,e,a),k=!0},p(e,[a]){const y={};a&1&&(y.idx=e[0]),i.$set(y);const _={};a&1&&(_.currentIdx=e[0]),c.$set(_),(!k||a&1)&&N!==(N=16+e[0]+"")&&ee(C,N),(!k||a&2)&&ee(S,e[1]),p&&p.p&&(!k||a&32)&&fe(p,X,e,e[5],k?de(X,e[5],a,null):ce(e[5]),null);const d={};!M&&a&5&&(M=!0,d.existingValue=e[2].pathCheck.existingScores[e[0]-1],z(()=>M=!1)),!O&&a&5&&(O=!0,d.proposedValue=e[2].pathCheck.proposedScores[e[0]-1],z(()=>O=!1)),!U&&a&5&&(U=!0,d.existingNotes=e[2].pathCheck.existingScoreNotes[e[0]-1],z(()=>U=!1)),!W&&a&5&&(W=!0,d.proposedNotes=e[2].pathCheck.proposedScoreNotes[e[0]-1],z(()=>W=!1)),f.$set(d);const x={};a&1&&(x.idx=e[0]),m.$set(x)},i(e){k||(w(i.$$.fragment,e),w(c.$$.fragment,e),w(p,e),w(f.$$.fragment,e),w(m.$$.fragment,e),k=!0)},o(e){E(i.$$.fragment,e),E(c.$$.fragment,e),E(p,e),E(f.$$.fragment,e),E(m.$$.fragment,e),k=!1},d(e){e&&(b(u),b(o),b(A)),L(i,e),L(c),p&&p.d(e),L(f),L(m,e)}}}function Ne(s,i,u){let o;ue(s,D,t=>u(2,o=t));let{$$slots:g={},$$scope:c}=i,{idx:n}=i,{label:r}=i,{cases:l}=i,v=l.map(([t,V])=>[t,V,te[t].background,te[t].font]);function N(t){s.$$.not_equal(o.pathCheck.existingScores[n-1],t)&&(o.pathCheck.existingScores[n-1]=t,D.set(o))}function C(t){s.$$.not_equal(o.pathCheck.proposedScores[n-1],t)&&(o.pathCheck.proposedScores[n-1]=t,D.set(o))}function $(t){s.$$.not_equal(o.pathCheck.existingScoreNotes[n-1],t)&&(o.pathCheck.existingScoreNotes[n-1]=t,D.set(o))}function S(t){s.$$.not_equal(o.pathCheck.proposedScoreNotes[n-1],t)&&(o.pathCheck.proposedScoreNotes[n-1]=t,D.set(o))}return s.$$set=t=>{"idx"in t&&u(0,n=t.idx),"label"in t&&u(1,r=t.label),"cases"in t&&u(4,l=t.cases),"$$scope"in t&&u(5,c=t.$$scope)},[n,r,o,v,l,c,g,N,C,$,S]}class Ie extends he{constructor(i){super(),_e(this,i,Ne,ke,re,{idx:0,label:1,cases:4})}}export{Ie as Q};
