import{s as W,y as z,e as P,a as q,c as Y,b as A,g as C,f as $,p as D,i as N,h,z as E,k as H,t as T,d as U}from"../chunks/scheduler.Xtbo5Qzd.js";import{S as V,i as j,e as B,c as g,a as b,m as k,b as f,f as F,t as d,d as v,g as G}from"../chunks/index.CcW9ATex.js";import{R as J}from"../chunks/Radio.VswETshK.js";/* empty css                                                    */import{W as K}from"../chunks/WarningText.ecNc71Zd.js";import{P as L}from"../chunks/Progress.CIKEEkcx.js";import{s as I}from"../chunks/data.BdmQOnGA.js";function M(n){let e,r;return e=new L({props:{currentIdx:-1}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,c){k(e,t,c),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function O(n){let e,r;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:n}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,c){k(e,t,c),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function Q(n){let e;return{c(){e=T("You must answer the question above to start the Path Check")},l(r){e=U(r,"You must answer the question above to start the Path Check")},m(r,t){N(r,e,t)},d(r){r&&$(e)}}}function X(n){let e,r,t,c,l,_,a,o,m;function S(s){n[1](s)}let R={legend:"Are horse riders expected on this route?",choices:[["","Unanswered"],["Yes","Yes"],["No","No"]]};n[0].horseRiders!==void 0&&(R.value=n[0].horseRiders),r=new J({props:R}),z.push(()=>B(r,"value",S));const w=[O,M],u=[];function y(s,i){return s[0].horseRiders==""?0:1}return a=y(n),o=u[a]=w[a](n),{c(){e=P("div"),g(r.$$.fragment),c=q(),l=P("hr"),_=q(),o.c(),this.h()},l(s){e=Y(s,"DIV",{class:!0});var i=A(e);b(r.$$.fragment,i),c=C(i),l=Y(i,"HR",{}),_=C(i),o.l(i),i.forEach($),this.h()},h(){D(e,"class","govuk-width-container")},m(s,i){N(s,e,i),k(r,e,null),h(e,c),h(e,l),h(e,_),u[a].m(e,null),m=!0},p(s,[i]){const x={};!t&&i&1&&(t=!0,x.value=s[0].horseRiders,E(()=>t=!1)),r.$set(x);let p=a;a=y(s),a!==p&&(G(),f(u[p],1,1,()=>{u[p]=null}),F(),o=u[a],o||(o=u[a]=w[a](s),o.c()),d(o,1),o.m(e,null))},i(s){m||(d(r.$$.fragment,s),d(o),m=!0)},o(s){f(r.$$.fragment,s),f(o),m=!1},d(s){s&&$(e),v(r),u[a].d()}}}function Z(n,e,r){let t;H(n,I,l=>r(0,t=l));function c(l){n.$$.not_equal(t.horseRiders,l)&&(t.horseRiders=l,I.set(t))}return[t,c]}class ie extends V{constructor(e){super(),j(this,e,Z,X,W,{})}}export{ie as component};
