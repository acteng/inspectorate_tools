import{s as W,r as A,e as q,a as P,c as Y,b as D,g as C,f as $,q as E,i as N,h,w as H,k as T,t as U,d as V}from"../chunks/scheduler.B5FfXhnD.js";import{S as j,i as z,e as B,c as g,a as b,m as k,b as f,f as F,t as m,d as v,g as G}from"../chunks/index.VeCIHQiF.js";import{R as J}from"../chunks/Radio.GlPGEHCB.js";import"../chunks/index.CjPs5mEV.js";import{W as K}from"../chunks/WarningText.DpJJu5j8.js";import{P as L}from"../chunks/Progress.DUYrG9y3.js";import{s as I}from"../chunks/data.DA3F7plJ.js";function M(a){let e,r;return e=new L({props:{currentIdx:-1}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){k(e,t,l),r=!0},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function O(a){let e,r;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){k(e,t,l),r=!0},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function Q(a){let e;return{c(){e=U("You must answer the question above to start the Path Check")},l(r){e=V(r,"You must answer the question above to start the Path Check")},m(r,t){N(r,e,t)},d(r){r&&$(e)}}}function X(a){let e,r,t,l,c,_,n,o,d;function S(s){a[1](s)}let w={label:"Are horse riders expected on this route?",choices:[["","Unanswered"],["Yes","Yes"],["No","No"]]};a[0].horseRiders!==void 0&&(w.value=a[0].horseRiders),r=new J({props:w}),A.push(()=>B(r,"value",S));const R=[O,M],u=[];function x(s,i){return s[0].horseRiders==""?0:1}return n=x(a),o=u[n]=R[n](a),{c(){e=q("div"),g(r.$$.fragment),l=P(),c=q("hr"),_=P(),o.c(),this.h()},l(s){e=Y(s,"DIV",{class:!0});var i=D(e);b(r.$$.fragment,i),l=C(i),c=Y(i,"HR",{}),_=C(i),o.l(i),i.forEach($),this.h()},h(){E(e,"class","govuk-width-container")},m(s,i){N(s,e,i),k(r,e,null),h(e,l),h(e,c),h(e,_),u[n].m(e,null),d=!0},p(s,[i]){const y={};!t&&i&1&&(t=!0,y.value=s[0].horseRiders,H(()=>t=!1)),r.$set(y);let p=n;n=x(s),n!==p&&(G(),f(u[p],1,1,()=>{u[p]=null}),F(),o=u[n],o||(o=u[n]=R[n](s),o.c()),m(o,1),o.m(e,null))},i(s){d||(m(r.$$.fragment,s),m(o),d=!0)},o(s){f(r.$$.fragment,s),f(o),d=!1},d(s){s&&$(e),v(r),u[n].d()}}}function Z(a,e,r){let t;T(a,I,c=>r(0,t=c));function l(c){a.$$.not_equal(t.horseRiders,c)&&(t.horseRiders=c,I.set(t))}return[t,l]}class ie extends j{constructor(e){super(),z(this,e,Z,X,W,{})}}export{ie as component};
