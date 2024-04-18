import{s as Z,q as ee,w as z,a as q,e as B,t as se,g as I,c as G,b as J,d as te,f as u,o as M,i as N,h as K,j as oe,u as ae,r as ie,v as ne,x as D,k as re}from"./scheduler.BKca8jgz.js";import{S as pe,i as fe,e as F,c as Q,a as R,m as j,t as P,b as E,d as A}from"./index.CFqagxlr.js";import"./paths.BFVtoaKV.js";import{P as O,F as le}from"./PrevNext.DEr3VyPG.js";import"./Geocoder.svelte_svelte_type_style_lang.CLPLPTv_.js";import{P as ce}from"./Progress.DrrR555d.js";import{s as x}from"./data.Cg59cv5R.js";import{g as T}from"./colors.BurqgDFB.js";function de(s){let i,l,a,b,h,n,f,c,d,S,r,C,$,t,v,g,_,m;i=new O({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}});const H=s[6].default,p=ee(H,s,s[5],null);d=new ce({props:{currentIdx:s[0]}});function U(e){s[7](e)}function W(e){s[8](e)}function X(e){s[9](e)}function Y(e){s[10](e)}let V={choices:s[3]};return s[2].pathCheck.existingScores[s[0]-1]!==void 0&&(V.existingValue=s[2].pathCheck.existingScores[s[0]-1]),s[2].pathCheck.proposedScores[s[0]-1]!==void 0&&(V.proposedValue=s[2].pathCheck.proposedScores[s[0]-1]),s[2].pathCheck.existingScoreNotes[s[0]-1]!==void 0&&(V.existingNotes=s[2].pathCheck.existingScoreNotes[s[0]-1]),s[2].pathCheck.proposedScoreNotes[s[0]-1]!==void 0&&(V.proposedNotes=s[2].pathCheck.proposedScoreNotes[s[0]-1]),r=new le({props:V}),z.push(()=>F(r,"existingValue",U)),z.push(()=>F(r,"proposedValue",W)),z.push(()=>F(r,"existingNotes",X)),z.push(()=>F(r,"proposedNotes",Y)),_=new O({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),{c(){Q(i.$$.fragment),l=q(),a=B("h2"),b=se(s[1]),h=q(),p&&p.c(),n=q(),f=B("div"),c=B("div"),Q(d.$$.fragment),S=q(),Q(r.$$.fragment),g=q(),Q(_.$$.fragment),this.h()},l(e){R(i.$$.fragment,e),l=I(e),a=G(e,"H2",{});var o=J(a);b=te(o,s[1]),o.forEach(u),h=I(e),p&&p.l(e),n=I(e),f=G(e,"DIV",{class:!0});var k=J(f);c=G(k,"DIV",{class:!0});var w=J(c);R(d.$$.fragment,w),w.forEach(u),S=I(k),R(r.$$.fragment,k),k.forEach(u),g=I(e),R(_.$$.fragment,e),this.h()},h(){M(c,"class","progress-column svelte-1dlwx3z"),M(f,"class","columns svelte-1dlwx3z")},m(e,o){j(i,e,o),N(e,l,o),N(e,a,o),K(a,b),N(e,h,o),p&&p.m(e,o),N(e,n,o),N(e,f,o),K(f,c),j(d,c,null),K(f,S),j(r,f,null),N(e,g,o),j(_,e,o),m=!0},p(e,[o]){const k={};o&1&&(k.idx=e[0]),i.$set(k),(!m||o&2)&&oe(b,e[1]),p&&p.p&&(!m||o&32)&&ae(p,H,e,e[5],m?ne(H,e[5],o,null):ie(e[5]),null);const w={};o&1&&(w.currentIdx=e[0]),d.$set(w);const y={};!C&&o&5&&(C=!0,y.existingValue=e[2].pathCheck.existingScores[e[0]-1],D(()=>C=!1)),!$&&o&5&&($=!0,y.proposedValue=e[2].pathCheck.proposedScores[e[0]-1],D(()=>$=!1)),!t&&o&5&&(t=!0,y.existingNotes=e[2].pathCheck.existingScoreNotes[e[0]-1],D(()=>t=!1)),!v&&o&5&&(v=!0,y.proposedNotes=e[2].pathCheck.proposedScoreNotes[e[0]-1],D(()=>v=!1)),r.$set(y);const L={};o&1&&(L.idx=e[0]),_.$set(L)},i(e){m||(P(i.$$.fragment,e),P(p,e),P(d.$$.fragment,e),P(r.$$.fragment,e),P(_.$$.fragment,e),m=!0)},o(e){E(i.$$.fragment,e),E(p,e),E(d.$$.fragment,e),E(r.$$.fragment,e),E(_.$$.fragment,e),m=!1},d(e){e&&(u(l),u(a),u(h),u(n),u(f),u(g)),A(i,e),p&&p.d(e),A(d),A(r),A(_,e)}}}function ue(s,i,l){let a;re(s,x,t=>l(2,a=t));let{$$slots:b={},$$scope:h}=i,{idx:n}=i,{label:f}=i,{cases:c}=i,d=c.map(([t,v],g)=>[t.toString(),v,T[g].background,T[g].font]);function S(t){s.$$.not_equal(a.pathCheck.existingScores[n-1],t)&&(a.pathCheck.existingScores[n-1]=t,x.set(a))}function r(t){s.$$.not_equal(a.pathCheck.proposedScores[n-1],t)&&(a.pathCheck.proposedScores[n-1]=t,x.set(a))}function C(t){s.$$.not_equal(a.pathCheck.existingScoreNotes[n-1],t)&&(a.pathCheck.existingScoreNotes[n-1]=t,x.set(a))}function $(t){s.$$.not_equal(a.pathCheck.proposedScoreNotes[n-1],t)&&(a.pathCheck.proposedScoreNotes[n-1]=t,x.set(a))}return s.$$set=t=>{"idx"in t&&l(0,n=t.idx),"label"in t&&l(1,f=t.label),"cases"in t&&l(4,c=t.cases),"$$scope"in t&&l(5,h=t.$$scope)},[n,f,a,d,c,h,b,S,r,C,$]}class Ce extends pe{constructor(i){super(),fe(this,i,ue,de,Z,{idx:0,label:1,cases:4})}}export{Ce as Q};
