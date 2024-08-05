import{s as z,y as D,e as x,a as O,c as A,b as H,g as R,f as k,p as I,i as E,h as T,z as U,k as V,m as j,n as p}from"../chunks/scheduler.DCgEw1Ao.js";import{S as B,i as F,e as G,c as _,a as h,m as $,b as f,f as J,t as m,d,g as K}from"../chunks/index.DjjnUgy-.js";/* empty css                                                    */import{T as M}from"../chunks/TextArea.B73QlPJs.js";import{s as L}from"../chunks/data.Bel5TSQF.js";import{g as N}from"../chunks/results.DfUskyxT.js";import{L as P}from"../chunks/LevelOfServiceTable.ByTFsipW.js";import{O as Q}from"../chunks/Overview.BUJ9gvae.js";function W(s){let e,r="Select Street Check or Path Check for further results";return{c(){e=x("h2"),e.textContent=r},l(t){e=A(t,"H2",{"data-svelte-h":!0}),j(e)!=="svelte-svuhxy"&&(e.textContent=r)},m(t,n){E(t,e,n)},p,i:p,o:p,d(t){t&&k(e)}}}function X(s){let e,r;return e=new P({props:{caption:"Path Check Level of Service",categories:s[1].levelOfService,overall:s[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){$(e,t,n),r=!0},p,i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Y(s){let e,r;return e=new P({props:{caption:"Street Check Level of Service",categories:s[1].levelOfService,overall:s[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){$(e,t,n),r=!0},p,i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Z(s){let e,r,t,n,l,i,c,g,v;r=new Q({props:{results:s[1]}});const S=[Y,X,W],u=[];function w(a,o){return a[0].summary.checkType=="street"?0:a[0].summary.checkType=="path"?1:2}n=w(s),l=u[n]=S[n](s);function q(a){s[2](a)}let y={label:"Review statement",hint:"Use the space to provide overall feedback for the proposed scheme"};return s[0].resultsReviewStatement!==void 0&&(y.value=s[0].resultsReviewStatement),c=new M({props:y}),D.push(()=>G(c,"value",q)),{c(){e=x("div"),_(r.$$.fragment),t=O(),l.c(),i=O(),_(c.$$.fragment),this.h()},l(a){e=A(a,"DIV",{class:!0});var o=H(e);h(r.$$.fragment,o),t=R(o),l.l(o),i=R(o),h(c.$$.fragment,o),o.forEach(k),this.h()},h(){I(e,"class","govuk-width-container")},m(a,o){E(a,e,o),$(r,e,null),T(e,t),u[n].m(e,null),T(e,i),$(c,e,null),v=!0},p(a,[o]){let b=n;n=w(a),n===b?u[n].p(a,o):(K(),f(u[b],1,1,()=>{u[b]=null}),J(),l=u[n],l?l.p(a,o):(l=u[n]=S[n](a),l.c()),m(l,1),l.m(e,i));const C={};!g&&o&1&&(g=!0,C.value=a[0].resultsReviewStatement,U(()=>g=!1)),c.$set(C)},i(a){v||(m(r.$$.fragment,a),m(l),m(c.$$.fragment,a),v=!0)},o(a){f(r.$$.fragment,a),f(l),f(c.$$.fragment,a),v=!1},d(a){a&&k(e),d(r),u[n].d(),d(c)}}}function ee(s,e,r){let t;V(s,L,i=>r(0,t=i));let n=N(t);function l(i){s.$$.not_equal(t.resultsReviewStatement,i)&&(t.resultsReviewStatement=i,L.set(t))}return[t,n,l]}class ce extends B{constructor(e){super(),F(this,e,ee,Z,z,{})}}export{ce as component};
