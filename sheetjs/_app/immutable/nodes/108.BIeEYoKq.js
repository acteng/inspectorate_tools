import{s as D,r as H,e as q,a as O,c as x,b as I,g as R,f as k,q as U,i as A,h as T,w as V,k as j,p as z,n as p}from"../chunks/scheduler.DGwhun8C.js";import{S as B,i as F,e as G,c as _,a as h,m as $,b as f,f as J,t as m,d,g as K}from"../chunks/index.B2vZYn3d.js";import"../chunks/SelectWithCustom.svelte_svelte_type_style_lang.BbWCP8Dy.js";import{T as M}from"../chunks/TextArea.C0HQ1TDK.js";import{s as L}from"../chunks/data.DM5QdpKO.js";import{g as N}from"../chunks/results.DrrwyisV.js";import{L as E}from"../chunks/LevelOfServiceTable.CspEdBah.js";import{O as Q}from"../chunks/Overview.CQSKMarg.js";function W(s){let e,r="Select Street Check or Path Check for further results";return{c(){e=q("h2"),e.textContent=r},l(t){e=x(t,"H2",{"data-svelte-h":!0}),z(e)!=="svelte-svuhxy"&&(e.textContent=r)},m(t,n){A(t,e,n)},p,i:p,o:p,d(t){t&&k(e)}}}function X(s){let e,r;return e=new E({props:{caption:"Path Check Level of Service",categories:s[1].levelOfService,overall:s[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){$(e,t,n),r=!0},p,i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Y(s){let e,r;return e=new E({props:{caption:"Street Check Level of Service",categories:s[1].levelOfService,overall:s[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){$(e,t,n),r=!0},p,i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Z(s){let e,r,t,n,l,i,c,g,v;r=new Q({props:{results:s[1]}});const S=[Y,X,W],u=[];function w(a,o){return a[0].summary.checkType=="street"?0:a[0].summary.checkType=="path"?1:2}n=w(s),l=u[n]=S[n](s);function P(a){s[2](a)}let C={label:"Review statement",hint:"Use the space to provide overall feedback for the proposed scheme"};return s[0].resultsReviewStatement!==void 0&&(C.value=s[0].resultsReviewStatement),c=new M({props:C}),H.push(()=>G(c,"value",P)),{c(){e=q("div"),_(r.$$.fragment),t=O(),l.c(),i=O(),_(c.$$.fragment),this.h()},l(a){e=x(a,"DIV",{class:!0});var o=I(e);h(r.$$.fragment,o),t=R(o),l.l(o),i=R(o),h(c.$$.fragment,o),o.forEach(k),this.h()},h(){U(e,"class","govuk-width-container")},m(a,o){A(a,e,o),$(r,e,null),T(e,t),u[n].m(e,null),T(e,i),$(c,e,null),v=!0},p(a,[o]){let b=n;n=w(a),n===b?u[n].p(a,o):(K(),f(u[b],1,1,()=>{u[b]=null}),J(),l=u[n],l?l.p(a,o):(l=u[n]=S[n](a),l.c()),m(l,1),l.m(e,i));const y={};!g&&o&1&&(g=!0,y.value=a[0].resultsReviewStatement,V(()=>g=!1)),c.$set(y)},i(a){v||(m(r.$$.fragment,a),m(l),m(c.$$.fragment,a),v=!0)},o(a){f(r.$$.fragment,a),f(l),f(c.$$.fragment,a),v=!1},d(a){a&&k(e),d(r),u[n].d(),d(c)}}}function ee(s,e,r){let t;j(s,L,i=>r(0,t=i));let n=N(t);function l(i){s.$$.not_equal(t.resultsReviewStatement,i)&&(t.resultsReviewStatement=i,L.set(t))}return[t,n,l]}class ce extends B{constructor(e){super(),F(this,e,ee,Z,D,{})}}export{ce as component};
