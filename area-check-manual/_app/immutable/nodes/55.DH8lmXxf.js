import{s as A,v as D,a as R,e as I,g as x,c as M,b as E,f as _,o as H,i as P,h as y,w as T,k as U,t as V,d as j}from"../chunks/scheduler.ScMV3vmV.js";import{S as z,i as B,e as F,c as p,a as $,m as h,b as m,f as G,t as f,d as g,g as J}from"../chunks/index.DbrWxxqn.js";import{R as K}from"../chunks/Radio.CFR2d39u.js";/* empty css                                                               */import{W as L}from"../chunks/WarningText.C7rrcnZX.js";import{P as O}from"../chunks/Progress.e_dkgnCz.js";import{s as N}from"../chunks/data.uqde68fu.js";import"../chunks/ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import"../chunks/paths.CSwo3MYS.js";import{S as Q}from"../chunks/SectionModal.BkZv95RR.js";import{c as X}from"../chunks/content.CJz-OeZZ.js";function Z(s){let t,n;return t=new O({props:{currentIdx:-1}}),{c(){p(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){h(t,e,a),n=!0},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function ee(s){let t,n;return t=new L({props:{$$slots:{default:[te]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){h(t,e,a),n=!0},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function te(s){let t;return{c(){t=V("You must answer the question above to start the Path Check")},l(n){t=j(n,"You must answer the question above to start the Path Check")},m(n,e){P(n,t,e)},d(n){n&&_(t)}}}function re(s){let t,n,e,a,c,b,k,v,i,l,d;t=new Q({props:{title:"Path Check Manual",section:X[8],link:"/route_check/manual"}});function W(r){s[1](r)}let q={legend:"Are horse riders expected on this route?",choices:[["","Unanswered"],["Yes","Yes"],["No","No"]]};s[0].horseRiders!==void 0&&(q.value=s[0].horseRiders),a=new K({props:q}),D.push(()=>F(a,"value",W));const C=[ee,Z],u=[];function S(r,o){return r[0].horseRiders==""?0:1}return i=S(s),l=u[i]=C[i](s),{c(){p(t.$$.fragment),n=R(),e=I("div"),p(a.$$.fragment),b=R(),k=I("hr"),v=R(),l.c(),this.h()},l(r){$(t.$$.fragment,r),n=x(r),e=M(r,"DIV",{class:!0});var o=E(e);$(a.$$.fragment,o),b=x(o),k=M(o,"HR",{}),v=x(o),l.l(o),o.forEach(_),this.h()},h(){H(e,"class","govuk-width-container")},m(r,o){h(t,r,o),P(r,n,o),P(r,e,o),h(a,e,null),y(e,b),y(e,k),y(e,v),u[i].m(e,null),d=!0},p(r,[o]){const Y={};!c&&o&1&&(c=!0,Y.value=r[0].horseRiders,T(()=>c=!1)),a.$set(Y);let w=i;i=S(r),i!==w&&(J(),m(u[w],1,1,()=>{u[w]=null}),G(),l=u[i],l||(l=u[i]=C[i](r),l.c()),f(l,1),l.m(e,null))},i(r){d||(f(t.$$.fragment,r),f(a.$$.fragment,r),f(l),d=!0)},o(r){m(t.$$.fragment,r),m(a.$$.fragment,r),m(l),d=!1},d(r){r&&(_(n),_(e)),g(t,r),g(a),u[i].d()}}}function ne(s,t,n){let e;U(s,N,c=>n(0,e=c));function a(c){s.$$.not_equal(e.horseRiders,c)&&(e.horseRiders=c,N.set(e))}return[e,a]}class pe extends z{constructor(t){super(),B(this,t,ne,re,A,{})}}export{pe as component};
