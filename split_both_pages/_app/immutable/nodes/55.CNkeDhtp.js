import{s as W,w as A,e as P,a as q,c as Y,b as D,g as C,f as $,p as E,i as N,h,x as H,k as T,t as U,d as V}from"../chunks/scheduler.BwufR8Ly.js";import{S as j,i as z,e as B,c as g,a as b,m as k,b as f,f as F,t as d,d as v,g as G}from"../chunks/index.BYv68wXE.js";import{R as J}from"../chunks/Radio.xwGHvsDf.js";/* empty css                                                    */import{W as K}from"../chunks/WarningText.DeMLIEbM.js";import{P as L}from"../chunks/Progress.IhxW1Yvd.js";import{s as I}from"../chunks/data.lc8bPCnD.js";function M(n){let e,r;return e=new L({props:{currentIdx:-1}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,c){k(e,t,c),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function O(n){let e,r;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:n}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,c){k(e,t,c),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function Q(n){let e;return{c(){e=U("You must answer the question above to start the Path Check")},l(r){e=V(r,"You must answer the question above to start the Path Check")},m(r,t){N(r,e,t)},d(r){r&&$(e)}}}function X(n){let e,r,t,c,l,_,a,o,m;function S(s){n[1](s)}let w={legend:"Are horse riders expected on this route?",choices:[["","Unanswered"],["Yes","Yes"],["No","No"]]};n[0].horseRiders!==void 0&&(w.value=n[0].horseRiders),r=new J({props:w}),A.push(()=>B(r,"value",S));const R=[O,M],u=[];function x(s,i){return s[0].horseRiders==""?0:1}return a=x(n),o=u[a]=R[a](n),{c(){e=P("div"),g(r.$$.fragment),c=q(),l=P("hr"),_=q(),o.c(),this.h()},l(s){e=Y(s,"DIV",{class:!0});var i=D(e);b(r.$$.fragment,i),c=C(i),l=Y(i,"HR",{}),_=C(i),o.l(i),i.forEach($),this.h()},h(){E(e,"class","govuk-width-container")},m(s,i){N(s,e,i),k(r,e,null),h(e,c),h(e,l),h(e,_),u[a].m(e,null),m=!0},p(s,[i]){const y={};!t&&i&1&&(t=!0,y.value=s[0].horseRiders,H(()=>t=!1)),r.$set(y);let p=a;a=x(s),a!==p&&(G(),f(u[p],1,1,()=>{u[p]=null}),F(),o=u[a],o||(o=u[a]=R[a](s),o.c()),d(o,1),o.m(e,null))},i(s){m||(d(r.$$.fragment,s),d(o),m=!0)},o(s){f(r.$$.fragment,s),f(o),m=!1},d(s){s&&$(e),v(r),u[a].d()}}}function Z(n,e,r){let t;T(n,I,l=>r(0,t=l));function c(l){n.$$.not_equal(t.horseRiders,l)&&(t.horseRiders=l,I.set(t))}return[t,c]}class ie extends j{constructor(e){super(),z(this,e,Z,X,W,{})}}export{ie as component};
