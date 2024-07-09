import{s as A,v as P,a as O,g as R,i as k,w as q,f as d,k as E,e as H,c as N,m as U,n as m}from"../chunks/scheduler.BJ06nkRu.js";import{S as j,i as z,e as B,c as v,a as _,m as $,b as f,f as D,t as u,d as b,g as F}from"../chunks/index.Dmc4uC9p.js";/* empty css                                                               */import{T as G}from"../chunks/TextArea.dqrL6eGj.js";import{s as T}from"../chunks/data.B_FDPubI.js";import{g as I}from"../chunks/results.D30mtyiD.js";import{L}from"../chunks/LevelOfServiceTable.CLwQm4e6.js";import{O as J}from"../chunks/Overview.EZakf6Td.js";function K(l){let t,s="Select Street Check or Path Check for further results";return{c(){t=H("h2"),t.textContent=s},l(e){t=N(e,"H2",{"data-svelte-h":!0}),U(t)!=="svelte-svuhxy"&&(t.textContent=s)},m(e,a){k(e,t,a)},p:m,i:m,o:m,d(e){e&&d(t)}}}function M(l){let t,s;return t=new L({props:{caption:"Path Check Level of Service",categories:l[1].levelOfService,overall:l[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){v(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){$(t,e,a),s=!0},p:m,i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){f(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Q(l){let t,s;return t=new L({props:{caption:"Street Check Level of Service",categories:l[1].levelOfService,overall:l[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){v(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){$(t,e,a),s=!0},p:m,i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){f(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function V(l){let t,s,e,a,i,n,g,p;t=new J({props:{results:l[1]}});const S=[Q,M,K],c=[];function w(r,o){return r[0].summary.checkType=="street"?0:r[0].summary.checkType=="path"?1:2}e=w(l),a=c[e]=S[e](l);function x(r){l[2](r)}let C={label:"Review statement",hint:"Use the space to provide overall feedback for the proposed scheme"};return l[0].resultsReviewStatement!==void 0&&(C.value=l[0].resultsReviewStatement),n=new G({props:C}),P.push(()=>B(n,"value",x)),{c(){v(t.$$.fragment),s=O(),a.c(),i=O(),v(n.$$.fragment)},l(r){_(t.$$.fragment,r),s=R(r),a.l(r),i=R(r),_(n.$$.fragment,r)},m(r,o){$(t,r,o),k(r,s,o),c[e].m(r,o),k(r,i,o),$(n,r,o),p=!0},p(r,[o]){let h=e;e=w(r),e===h?c[e].p(r,o):(F(),f(c[h],1,1,()=>{c[h]=null}),D(),a=c[e],a?a.p(r,o):(a=c[e]=S[e](r),a.c()),u(a,1),a.m(i.parentNode,i));const y={};!g&&o&1&&(g=!0,y.value=r[0].resultsReviewStatement,q(()=>g=!1)),n.$set(y)},i(r){p||(u(t.$$.fragment,r),u(a),u(n.$$.fragment,r),p=!0)},o(r){f(t.$$.fragment,r),f(a),f(n.$$.fragment,r),p=!1},d(r){r&&(d(s),d(i)),b(t,r),c[e].d(r),b(n,r)}}}function W(l,t,s){let e;E(l,T,n=>s(0,e=n));let a=I(e);function i(n){l.$$.not_equal(e.resultsReviewStatement,n)&&(e.resultsReviewStatement=n,T.set(e))}return[e,a,i]}class le extends j{constructor(t){super(),z(this,t,W,V,A,{})}}export{le as component};
