import{s as W,r as j,d as $,v as A,i as N,b as h,p as D,c as P,e as E,g as q,h as Y,j as C,k as H,f as T,t as U}from"../chunks/hklQk-fT.js";import{S as V,i as z,e as B,d as g,t as f,a as m,f as F,m as b,c as v,b as k,g as G}from"../chunks/4RGf_tlt.js";import{R as J}from"../chunks/BQ9vwS8c.js";import"../chunks/DNOoCnSc.js";import{W as K}from"../chunks/CwsiILBB.js";import{s as I}from"../chunks/BvPMAR1r.js";import{P as L}from"../chunks/TchHLQQ_.js";function M(a){let e,r;return e=new L({props:{currentIdx:-1}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){b(e,t,l),r=!0},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function O(a){let e,r;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){b(e,t,l),r=!0},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function Q(a){let e;return{c(){e=U("You must answer the question above to start the Path Check")},l(r){e=T(r,"You must answer the question above to start the Path Check")},m(r,t){N(r,e,t)},d(r){r&&$(e)}}}function X(a){let e,r,t,l,c,_,n,o,d;function S(s){a[1](s)}let R={label:"Are horse riders expected on this route?",choices:[["","Unanswered"],["Yes","Yes"],["No","No"]]};a[0].horseRiders!==void 0&&(R.value=a[0].horseRiders),r=new J({props:R}),j.push(()=>B(r,"value",S));const w=[O,M],u=[];function x(s,i){return s[0].horseRiders==""?0:1}return n=x(a),o=u[n]=w[n](a),{c(){e=Y("div"),k(r.$$.fragment),l=C(),c=Y("hr"),_=C(),o.c(),this.h()},l(s){e=P(s,"DIV",{class:!0});var i=E(e);v(r.$$.fragment,i),l=q(i),c=P(i,"HR",{}),_=q(i),o.l(i),i.forEach($),this.h()},h(){D(e,"class","govuk-width-container")},m(s,i){N(s,e,i),b(r,e,null),h(e,l),h(e,c),h(e,_),u[n].m(e,null),d=!0},p(s,[i]){const y={};!t&&i&1&&(t=!0,y.value=s[0].horseRiders,A(()=>t=!1)),r.$set(y);let p=n;n=x(s),n!==p&&(G(),f(u[p],1,1,()=>{u[p]=null}),F(),o=u[n],o||(o=u[n]=w[n](s),o.c()),m(o,1),o.m(e,null))},i(s){d||(m(r.$$.fragment,s),m(o),d=!0)},o(s){f(r.$$.fragment,s),f(o),d=!1},d(s){s&&$(e),g(r),u[n].d()}}}function Z(a,e,r){let t;H(a,I,c=>r(0,t=c));function l(c){a.$$.not_equal(t.horseRiders,c)&&(t.horseRiders=c,I.set(t))}return[t,l]}class ie extends V{constructor(e){super(),z(this,e,Z,X,W,{})}}export{ie as component};
