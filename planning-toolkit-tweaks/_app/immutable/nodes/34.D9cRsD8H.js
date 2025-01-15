import{s as be,r as c,e as Ae,a as S,c as we,b as qe,g as T,f as pe,q as Se,i as Te,h as R,w as $,k as Re}from"../chunks/scheduler.DGwhun8C.js";import{S as Pe,i as He,e as d,c as h,a as v,m as b,t as A,b as w,d as q}from"../chunks/index.B2vZYn3d.js";import{p as M}from"../chunks/index.ccwKFPxr.js";import"../chunks/SelectWithCustom.svelte_svelte_type_style_lang.CmNzlHJJ.js";import{S as N}from"../chunks/Select.Dwo4Cq3q.js";import{T as Be}from"../chunks/TextArea.BUexjgnV.js";import{T as O}from"../chunks/TextInput.Cm-2pf8s.js";import{s as o}from"../chunks/data.OH7S9OjI.js";import{a as ke,l as De,b as Ie}from"../chunks/lists.BoRU6pxz.js";import{D as Le}from"../chunks/DateInput.k5wlVO6i.js";function Oe(t){let u,s,a,P,r,H,B,l,k,D,m,I,n,p,C,E,f,V,j,_,z,F,g,G,J,y,K,L;function fe(e){t[1](e)}let Q={label:"Summary of proposal"};t[0].summary.proposalSummary!==void 0&&(Q.value=t[0].summary.proposalSummary),s=new Be({props:Q}),c.push(()=>d(s,"value",fe));function _e(e){t[2](e)}let U={label:"Application type",emptyOption:!0,choices:M(ke)};t[0].summary.applicationType!==void 0&&(U.value=t[0].summary.applicationType),r=new N({props:U}),c.push(()=>d(r,"value",_e));function ge(e){t[3](e)}let W={label:"Site address"};t[0].summary.siteAddress!==void 0&&(W.value=t[0].summary.siteAddress),l=new O({props:W}),c.push(()=>d(l,"value",ge));function ye(e){t[4](e)}let X={label:"Local planning authority",emptyOption:!0,choices:M(De)};t[0].summary.localPlanningAuthority!==void 0&&(X.value=t[0].summary.localPlanningAuthority),m=new N({props:X}),c.push(()=>d(m,"value",ye));function ce(e){t[5](e)}let Y={label:"Local highway authority",emptyOption:!0,choices:M(Ie)};t[0].summary.localHighwayAuthority!==void 0&&(Y.value=t[0].summary.localHighwayAuthority),p=new N({props:Y}),c.push(()=>d(p,"value",ce));function $e(e){t[6](e)}let Z={label:"Local authority reference (if available)"};t[0].summary.localAuthorityReference!==void 0&&(Z.value=t[0].summary.localAuthorityReference),f=new O({props:Z}),c.push(()=>d(f,"value",$e));function de(e){t[7](e)}let x={label:"ATE reference (if available)"};t[0].summary.ateReference!==void 0&&(x.value=t[0].summary.ateReference),_=new O({props:x}),c.push(()=>d(_,"value",de));function he(e){t[8](e)}let ee={label:"Completed by (user and organisation name)"};t[0].summary.completedBy!==void 0&&(ee.value=t[0].summary.completedBy),g=new O({props:ee}),c.push(()=>d(g,"value",he));function ve(e){t[9](e)}let te={label:"Date"};return t[0].summary.date!==void 0&&(te.value=t[0].summary.date),y=new Le({props:te}),c.push(()=>d(y,"value",ve)),{c(){u=Ae("div"),h(s.$$.fragment),P=S(),h(r.$$.fragment),B=S(),h(l.$$.fragment),D=S(),h(m.$$.fragment),n=S(),h(p.$$.fragment),E=S(),h(f.$$.fragment),j=S(),h(_.$$.fragment),F=S(),h(g.$$.fragment),J=S(),h(y.$$.fragment),this.h()},l(e){u=we(e,"DIV",{class:!0});var i=qe(u);v(s.$$.fragment,i),P=T(i),v(r.$$.fragment,i),B=T(i),v(l.$$.fragment,i),D=T(i),v(m.$$.fragment,i),n=T(i),v(p.$$.fragment,i),E=T(i),v(f.$$.fragment,i),j=T(i),v(_.$$.fragment,i),F=T(i),v(g.$$.fragment,i),J=T(i),v(y.$$.fragment,i),i.forEach(pe),this.h()},h(){Se(u,"class","govuk-width-container")},m(e,i){Te(e,u,i),b(s,u,null),R(u,P),b(r,u,null),R(u,B),b(l,u,null),R(u,D),b(m,u,null),R(u,n),b(p,u,null),R(u,E),b(f,u,null),R(u,j),b(_,u,null),R(u,F),b(g,u,null),R(u,J),b(y,u,null),L=!0},p(e,[i]){const ae={};!a&&i&1&&(a=!0,ae.value=e[0].summary.proposalSummary,$(()=>a=!1)),s.$set(ae);const ne={};!H&&i&1&&(H=!0,ne.value=e[0].summary.applicationType,$(()=>H=!1)),r.$set(ne);const ie={};!k&&i&1&&(k=!0,ie.value=e[0].summary.siteAddress,$(()=>k=!1)),l.$set(ie);const ue={};!I&&i&1&&(I=!0,ue.value=e[0].summary.localPlanningAuthority,$(()=>I=!1)),m.$set(ue);const se={};!C&&i&1&&(C=!0,se.value=e[0].summary.localHighwayAuthority,$(()=>C=!1)),p.$set(se);const re={};!V&&i&1&&(V=!0,re.value=e[0].summary.localAuthorityReference,$(()=>V=!1)),f.$set(re);const le={};!z&&i&1&&(z=!0,le.value=e[0].summary.ateReference,$(()=>z=!1)),_.$set(le);const me={};!G&&i&1&&(G=!0,me.value=e[0].summary.completedBy,$(()=>G=!1)),g.$set(me);const oe={};!K&&i&1&&(K=!0,oe.value=e[0].summary.date,$(()=>K=!1)),y.$set(oe)},i(e){L||(A(s.$$.fragment,e),A(r.$$.fragment,e),A(l.$$.fragment,e),A(m.$$.fragment,e),A(p.$$.fragment,e),A(f.$$.fragment,e),A(_.$$.fragment,e),A(g.$$.fragment,e),A(y.$$.fragment,e),L=!0)},o(e){w(s.$$.fragment,e),w(r.$$.fragment,e),w(l.$$.fragment,e),w(m.$$.fragment,e),w(p.$$.fragment,e),w(f.$$.fragment,e),w(_.$$.fragment,e),w(g.$$.fragment,e),w(y.$$.fragment,e),L=!1},d(e){e&&pe(u),q(s),q(r),q(l),q(m),q(p),q(f),q(_),q(g),q(y)}}}function Ce(t,u,s){let a;Re(t,o,n=>s(0,a=n));function P(n){t.$$.not_equal(a.summary.proposalSummary,n)&&(a.summary.proposalSummary=n,o.set(a))}function r(n){t.$$.not_equal(a.summary.applicationType,n)&&(a.summary.applicationType=n,o.set(a))}function H(n){t.$$.not_equal(a.summary.siteAddress,n)&&(a.summary.siteAddress=n,o.set(a))}function B(n){t.$$.not_equal(a.summary.localPlanningAuthority,n)&&(a.summary.localPlanningAuthority=n,o.set(a))}function l(n){t.$$.not_equal(a.summary.localHighwayAuthority,n)&&(a.summary.localHighwayAuthority=n,o.set(a))}function k(n){t.$$.not_equal(a.summary.localAuthorityReference,n)&&(a.summary.localAuthorityReference=n,o.set(a))}function D(n){t.$$.not_equal(a.summary.ateReference,n)&&(a.summary.ateReference=n,o.set(a))}function m(n){t.$$.not_equal(a.summary.completedBy,n)&&(a.summary.completedBy=n,o.set(a))}function I(n){t.$$.not_equal(a.summary.date,n)&&(a.summary.date=n,o.set(a))}return[a,P,r,H,B,l,k,D,m,I]}class Qe extends Pe{constructor(u){super(),He(this,u,Ce,Oe,be,{})}}export{Qe as component};
