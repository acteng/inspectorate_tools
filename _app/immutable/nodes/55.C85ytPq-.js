import{s as W,y as z,e as P,a as q,c as Y,b as A,g as C,f as $,p as D,i as N,h,z as E,k as H,t as T,d as U}from"../chunks/scheduler.V-ByFQ7u.js";import{S as V,i as j,e as B,c as g,a as b,m as k,b as f,f as F,t as m,d as v,g as G}from"../chunks/index.Zcf2TLuh.js";import{R as J}from"../chunks/Radio.BmdG06yd.js";/* empty css                                                    */import{W as K}from"../chunks/WarningText.s8MMG057.js";import{P as L}from"../chunks/Progress.NxySmVV8.js";import{s as I}from"../chunks/data.D0WXADmR.js";function M(a){let e,r;return e=new L({props:{currentIdx:-1}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){k(e,t,l),r=!0},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function O(a){let e,r;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){k(e,t,l),r=!0},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function Q(a){let e;return{c(){e=T("You must answer the question above to start the Path Check")},l(r){e=U(r,"You must answer the question above to start the Path Check")},m(r,t){N(r,e,t)},d(r){r&&$(e)}}}function X(a){let e,r,t,l,c,_,n,o,d;function S(s){a[1](s)}let R={label:"Are horse riders expected on this route?",choices:[["","Unanswered"],["Yes","Yes"],["No","No"]]};a[0].horseRiders!==void 0&&(R.value=a[0].horseRiders),r=new J({props:R}),z.push(()=>B(r,"value",S));const w=[O,M],u=[];function y(s,i){return s[0].horseRiders==""?0:1}return n=y(a),o=u[n]=w[n](a),{c(){e=P("div"),g(r.$$.fragment),l=q(),c=P("hr"),_=q(),o.c(),this.h()},l(s){e=Y(s,"DIV",{class:!0});var i=A(e);b(r.$$.fragment,i),l=C(i),c=Y(i,"HR",{}),_=C(i),o.l(i),i.forEach($),this.h()},h(){D(e,"class","govuk-width-container")},m(s,i){N(s,e,i),k(r,e,null),h(e,l),h(e,c),h(e,_),u[n].m(e,null),d=!0},p(s,[i]){const x={};!t&&i&1&&(t=!0,x.value=s[0].horseRiders,E(()=>t=!1)),r.$set(x);let p=n;n=y(s),n!==p&&(G(),f(u[p],1,1,()=>{u[p]=null}),F(),o=u[n],o||(o=u[n]=w[n](s),o.c()),m(o,1),o.m(e,null))},i(s){d||(m(r.$$.fragment,s),m(o),d=!0)},o(s){f(r.$$.fragment,s),f(o),d=!1},d(s){s&&$(e),v(r),u[n].d()}}}function Z(a,e,r){let t;H(a,I,c=>r(0,t=c));function l(c){a.$$.not_equal(t.horseRiders,c)&&(t.horseRiders=c,I.set(t))}return[t,l]}class ie extends V{constructor(e){super(),j(this,e,Z,X,W,{})}}export{ie as component};
