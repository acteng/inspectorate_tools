import{s as de,e as U,a as k,c as j,g as S,b as Z,f as I,q as z,i as L,D as Y,z as ct,B as dt,r as C,A as Me,h as w,w as R,k as vt}from"../chunks/scheduler.Bxdx0f0B.js";import{S as ve,i as $e,c as v,a as $,m as b,t as c,b as d,d as y,e as q,g as $t,f as bt}from"../chunks/index.itOPPQ0R.js";import{p as K}from"../chunks/index.7BCYvIDZ.js";import{e as Qe}from"../chunks/each.BdQ2bsat.js";import{F as yt}from"../chunks/FormElement.Jlp14U3V.js";import"../chunks/index.CosqZ9Ld.js";import{v as wt}from"../chunks/ErrorMessage.CB8-YBZf.js";import{R as tt}from"../chunks/Radio.Dh0AqXbL.js";import{T as X}from"../chunks/TextInput.kFgE2nSy.js";import{S as kt,a as St,t as Ct,r as Rt,f as qt,d as Tt}from"../chunks/lists.mm4FhHp0.js";import{T as Q}from"../chunks/TextArea.BR9r5AFu.js";import{s as T}from"../chunks/data.CHw1CVAM.js";import{D as At}from"../chunks/DateInput.CLHrfrpL.js";function Xe(t,e,u){const n=t.slice();return n[0]=e[u][0],n[2]=e[u][1],n}function Ye(t){let e,u,n;return{c(){e=U("option"),this.h()},l(l){e=j(l,"OPTION",{label:!0}),Z(e).forEach(I),this.h()},h(){e.__value=u=t[0],Y(e,e.__value),z(e,"label",n=t[2])},m(l,o){L(l,e,o)},p(l,o){o&2&&u!==(u=l[0])&&(e.__value=u,Y(e,e.__value)),o&2&&n!==(n=l[2])&&z(e,"label",n)},d(l){l&&I(e)}}}function It(t){let e,u,n,l,o,g=Qe(t[1]),p=[];for(let i=0;i<g.length;i+=1)p[i]=Ye(Xe(t,g,i));return{c(){e=U("input"),u=k(),n=U("datalist");for(let i=0;i<p.length;i+=1)p[i].c();this.h()},l(i){e=j(i,"INPUT",{class:!0,id:!0,list:!0}),u=S(i),n=j(i,"DATALIST",{id:!0});var f=Z(n);for(let r=0;r<p.length;r+=1)p[r].l(f);f.forEach(I),this.h()},h(){z(e,"class","govuk-input govuk-input--width-20"),z(e,"id",t[3]),z(e,"list",`${t[3]}-list`),z(n,"id",`${t[3]}-list`)},m(i,f){L(i,e,f),Y(e,t[0]),L(i,u,f),L(i,n,f);for(let r=0;r<p.length;r+=1)p[r]&&p[r].m(n,null);l||(o=ct(e,"input",t[4]),l=!0)},p(i,f){if(f&1&&e.value!==i[0]&&Y(e,i[0]),f&2){g=Qe(i[1]);let r;for(r=0;r<g.length;r+=1){const h=Xe(i,g,r);p[r]?p[r].p(h,f):(p[r]=Ye(h),p[r].c(),p[r].m(n,null))}for(;r<p.length;r+=1)p[r].d(1);p.length=g.length}},d(i){i&&(I(e),I(u),I(n)),dt(p,i),l=!1,o()}}}function Dt(t){let e,u;return e=new yt({props:{label:t[2],id:t[3],$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){v(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,l){b(e,n,l),u=!0},p(n,[l]){const o={};l&4&&(o.label=n[2]),l&131&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){u||(c(e.$$.fragment,n),u=!0)},o(n){d(e.$$.fragment,n),u=!1},d(n){y(e,n)}}}function Pt(t,e,u){let{label:n}=e,{value:l}=e,{options:o}=e,g=wt();function p(){l=this.value,u(0,l)}return t.$$set=i=>{"label"in i&&u(2,n=i.label),"value"in i&&u(0,l=i.value),"options"in i&&u(1,o=i.options)},[l,o,n,g,p]}class Ze extends ve{constructor(e){super(),$e(this,e,Pt,Dt,de,{label:2,value:0,options:1})}}function xe(t){let e,u,n;function l(g){t[8](g)}let o={label:"Enter a custom value"};return t[0]!==void 0&&(o.value=t[0]),e=new X({props:o}),C.push(()=>q(e,"value",l)),{c(){v(e.$$.fragment)},l(g){$(e.$$.fragment,g)},m(g,p){b(e,g,p),n=!0},p(g,p){const i={};!u&&p&1&&(u=!0,i.value=g[0],R(()=>u=!1)),e.$set(i)},i(g){n||(c(e.$$.fragment,g),n=!0)},o(g){d(e.$$.fragment,g),n=!1},d(g){y(e,g)}}}function Et(t){let e,u,n,l,o;function g(f){t[7](f)}let p={label:t[1],hint:t[2],choices:t[4]};t[3]!==void 0&&(p.value=t[3]),u=new tt({props:p}),C.push(()=>q(u,"value",g)),u.$on("change",t[5]);let i=t[3]=="other"&&xe(t);return{c(){e=U("div"),v(u.$$.fragment),l=k(),i&&i.c(),this.h()},l(f){e=j(f,"DIV",{class:!0});var r=Z(e);$(u.$$.fragment,r),l=S(r),i&&i.l(r),r.forEach(I),this.h()},h(){z(e,"class","svelte-gtlbk6"),Me(e,"grouped",t[3]=="other")},m(f,r){L(f,e,r),b(u,e,null),w(e,l),i&&i.m(e,null),o=!0},p(f,[r]){const h={};r&2&&(h.label=f[1]),r&4&&(h.hint=f[2]),!n&&r&8&&(n=!0,h.value=f[3],R(()=>n=!1)),u.$set(h),f[3]=="other"?i?(i.p(f,r),r&8&&c(i,1)):(i=xe(f),i.c(),c(i,1),i.m(e,null)):i&&($t(),d(i,1,1,()=>{i=null}),bt()),(!o||r&8)&&Me(e,"grouped",f[3]=="other")},i(f){o||(c(u.$$.fragment,f),c(i),o=!0)},o(f){d(u.$$.fragment,f),d(i),o=!1},d(f){f&&I(e),y(u),i&&i.d()}}}function Ot(t,e,u){let{label:n}=e,{hint:l=""}=e,{choices:o}=e,{value:g}=e,p=new Set(o.map(_=>_[0])),i=[...o,["other","Other"]];function f(_){return p.has(_)?_:"other"}let r=f(g);function h(){u(0,g=r=="other"?"":r)}function B(_){r=_,u(3,r)}function H(_){g=_,u(0,g)}return t.$$set=_=>{"label"in _&&u(1,n=_.label),"hint"in _&&u(2,l=_.hint),"choices"in _&&u(6,o=_.choices),"value"in _&&u(0,g=_.value)},[g,n,l,r,i,h,o,B,H]}class et extends ve{constructor(e){super(),$e(this,e,Ot,Et,de,{label:1,hint:2,choices:6,value:0})}}function Nt(t){let e,u,n,l,o,g,p,i,f,r,h,B,H,_,G,J,A,s,x,D,ee,te,P,ne,ae,E,ie,ue,O,re,se,N,me,oe,F,le,fe,V,ge,pe,_e,he,W,ce,M;function nt(a){t[1](a)}let be={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(be.value=t[0].summary.dateDesignReview),u=new At({props:be}),C.push(()=>q(u,"value",nt));function at(a){t[2](a)}let ye={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(ye.value=t[0].summary.schemeReference),o=new X({props:ye}),C.push(()=>q(o,"value",at));function it(a){t[3](a)}let we={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(we.value=t[0].summary.schemeName),i=new X({props:we}),C.push(()=>q(i,"value",it));function ut(a){t[4](a)}let ke={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(ke.value=t[0].summary.schemeSummary),h=new Q({props:ke}),C.push(()=>q(h,"value",ut));function rt(a){t[5](a)}let Se={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Se.value=t[0].summary.schemeInfoReviewed),_=new Q({props:Se}),C.push(()=>q(_,"value",rt));function st(a){t[6](a)}let Ce={label:"Authority",options:K(St)};t[0].summary.authority!==void 0&&(Ce.value=t[0].summary.authority),A=new Ze({props:Ce}),C.push(()=>q(A,"value",st));function mt(a){t[7](a)}let Re={label:"Transport / Combined Authority",options:K(Ct)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Re.value=t[0].summary.transportOrCombinedAuthority),D=new Ze({props:Re}),C.push(()=>q(D,"value",mt));function ot(a){t[8](a)}let qe={label:"Region",emptyOption:!0,choices:K(Rt)};t[0].summary.region!==void 0&&(qe.value=t[0].summary.region),P=new kt({props:qe}),C.push(()=>q(P,"value",ot));function lt(a){t[9](a)}let Te={label:"Funding programme",choices:K(qt)};t[0].summary.fundingProgramme!==void 0&&(Te.value=t[0].summary.fundingProgramme),E=new et({props:Te}),C.push(()=>q(E,"value",lt));function ft(a){t[10](a)}let Ae={label:"Design stage",choices:K(Tt)};t[0].summary.designStage!==void 0&&(Ae.value=t[0].summary.designStage),O=new et({props:Ae}),C.push(()=>q(O,"value",ft));function gt(a){t[11](a)}let Ie={label:"Funding conditions",hint:"Any conditions on infrastructure attached to the relevant funding programme"};t[0].summary.fundingConditions!==void 0&&(Ie.value=t[0].summary.fundingConditions),N=new Q({props:Ie}),C.push(()=>q(N,"value",gt));function pt(a){t[12](a)}let De={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(De.value=t[0].summary.inspectorEmail),F=new X({props:De}),C.push(()=>q(F,"value",pt));function _t(a){t[13](a)}let Pe={label:"Notes"};t[0].summary.notes!==void 0&&(Pe.value=t[0].summary.notes),V=new Q({props:Pe}),C.push(()=>q(V,"value",_t));function ht(a){t[14](a)}let Ee={label:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",choices:[["street","Street Check"],["path","Path Check"]]};return t[0].summary.checkType!==void 0&&(Ee.value=t[0].summary.checkType),W=new tt({props:Ee}),C.push(()=>q(W,"value",ht)),{c(){e=U("div"),v(u.$$.fragment),l=k(),v(o.$$.fragment),p=k(),v(i.$$.fragment),r=k(),v(h.$$.fragment),H=k(),v(_.$$.fragment),J=k(),v(A.$$.fragment),x=k(),v(D.$$.fragment),te=k(),v(P.$$.fragment),ae=k(),v(E.$$.fragment),ue=k(),v(O.$$.fragment),se=k(),v(N.$$.fragment),oe=k(),v(F.$$.fragment),fe=k(),v(V.$$.fragment),pe=k(),_e=U("hr"),he=k(),v(W.$$.fragment),this.h()},l(a){e=j(a,"DIV",{class:!0});var m=Z(e);$(u.$$.fragment,m),l=S(m),$(o.$$.fragment,m),p=S(m),$(i.$$.fragment,m),r=S(m),$(h.$$.fragment,m),H=S(m),$(_.$$.fragment,m),J=S(m),$(A.$$.fragment,m),x=S(m),$(D.$$.fragment,m),te=S(m),$(P.$$.fragment,m),ae=S(m),$(E.$$.fragment,m),ue=S(m),$(O.$$.fragment,m),se=S(m),$(N.$$.fragment,m),oe=S(m),$(F.$$.fragment,m),fe=S(m),$(V.$$.fragment,m),pe=S(m),_e=j(m,"HR",{}),he=S(m),$(W.$$.fragment,m),m.forEach(I),this.h()},h(){z(e,"class","govuk-width-container")},m(a,m){L(a,e,m),b(u,e,null),w(e,l),b(o,e,null),w(e,p),b(i,e,null),w(e,r),b(h,e,null),w(e,H),b(_,e,null),w(e,J),b(A,e,null),w(e,x),b(D,e,null),w(e,te),b(P,e,null),w(e,ae),b(E,e,null),w(e,ue),b(O,e,null),w(e,se),b(N,e,null),w(e,oe),b(F,e,null),w(e,fe),b(V,e,null),w(e,pe),w(e,_e),w(e,he),b(W,e,null),M=!0},p(a,[m]){const Oe={};!n&&m&1&&(n=!0,Oe.value=a[0].summary.dateDesignReview,R(()=>n=!1)),u.$set(Oe);const Ne={};!g&&m&1&&(g=!0,Ne.value=a[0].summary.schemeReference,R(()=>g=!1)),o.$set(Ne);const Fe={};!f&&m&1&&(f=!0,Fe.value=a[0].summary.schemeName,R(()=>f=!1)),i.$set(Fe);const Ve={};!B&&m&1&&(B=!0,Ve.value=a[0].summary.schemeSummary,R(()=>B=!1)),h.$set(Ve);const We={};!G&&m&1&&(G=!0,We.value=a[0].summary.schemeInfoReviewed,R(()=>G=!1)),_.$set(We);const ze={};!s&&m&1&&(s=!0,ze.value=a[0].summary.authority,R(()=>s=!1)),A.$set(ze);const Be={};!ee&&m&1&&(ee=!0,Be.value=a[0].summary.transportOrCombinedAuthority,R(()=>ee=!1)),D.$set(Be);const He={};!ne&&m&1&&(ne=!0,He.value=a[0].summary.region,R(()=>ne=!1)),P.$set(He);const Le={};!ie&&m&1&&(ie=!0,Le.value=a[0].summary.fundingProgramme,R(()=>ie=!1)),E.$set(Le);const Ue={};!re&&m&1&&(re=!0,Ue.value=a[0].summary.designStage,R(()=>re=!1)),O.$set(Ue);const je={};!me&&m&1&&(me=!0,je.value=a[0].summary.fundingConditions,R(()=>me=!1)),N.$set(je);const Ge={};!le&&m&1&&(le=!0,Ge.value=a[0].summary.inspectorEmail,R(()=>le=!1)),F.$set(Ge);const Je={};!ge&&m&1&&(ge=!0,Je.value=a[0].summary.notes,R(()=>ge=!1)),V.$set(Je);const Ke={};!ce&&m&1&&(ce=!0,Ke.value=a[0].summary.checkType,R(()=>ce=!1)),W.$set(Ke)},i(a){M||(c(u.$$.fragment,a),c(o.$$.fragment,a),c(i.$$.fragment,a),c(h.$$.fragment,a),c(_.$$.fragment,a),c(A.$$.fragment,a),c(D.$$.fragment,a),c(P.$$.fragment,a),c(E.$$.fragment,a),c(O.$$.fragment,a),c(N.$$.fragment,a),c(F.$$.fragment,a),c(V.$$.fragment,a),c(W.$$.fragment,a),M=!0)},o(a){d(u.$$.fragment,a),d(o.$$.fragment,a),d(i.$$.fragment,a),d(h.$$.fragment,a),d(_.$$.fragment,a),d(A.$$.fragment,a),d(D.$$.fragment,a),d(P.$$.fragment,a),d(E.$$.fragment,a),d(O.$$.fragment,a),d(N.$$.fragment,a),d(F.$$.fragment,a),d(V.$$.fragment,a),d(W.$$.fragment,a),M=!1},d(a){a&&I(e),y(u),y(o),y(i),y(h),y(_),y(A),y(D),y(P),y(E),y(O),y(N),y(F),y(V),y(W)}}}function Ft(t,e,u){let n;vt(t,T,s=>u(0,n=s));function l(s){t.$$.not_equal(n.summary.dateDesignReview,s)&&(n.summary.dateDesignReview=s,T.set(n))}function o(s){t.$$.not_equal(n.summary.schemeReference,s)&&(n.summary.schemeReference=s,T.set(n))}function g(s){t.$$.not_equal(n.summary.schemeName,s)&&(n.summary.schemeName=s,T.set(n))}function p(s){t.$$.not_equal(n.summary.schemeSummary,s)&&(n.summary.schemeSummary=s,T.set(n))}function i(s){t.$$.not_equal(n.summary.schemeInfoReviewed,s)&&(n.summary.schemeInfoReviewed=s,T.set(n))}function f(s){t.$$.not_equal(n.summary.authority,s)&&(n.summary.authority=s,T.set(n))}function r(s){t.$$.not_equal(n.summary.transportOrCombinedAuthority,s)&&(n.summary.transportOrCombinedAuthority=s,T.set(n))}function h(s){t.$$.not_equal(n.summary.region,s)&&(n.summary.region=s,T.set(n))}function B(s){t.$$.not_equal(n.summary.fundingProgramme,s)&&(n.summary.fundingProgramme=s,T.set(n))}function H(s){t.$$.not_equal(n.summary.designStage,s)&&(n.summary.designStage=s,T.set(n))}function _(s){t.$$.not_equal(n.summary.fundingConditions,s)&&(n.summary.fundingConditions=s,T.set(n))}function G(s){t.$$.not_equal(n.summary.inspectorEmail,s)&&(n.summary.inspectorEmail=s,T.set(n))}function J(s){t.$$.not_equal(n.summary.notes,s)&&(n.summary.notes=s,T.set(n))}function A(s){t.$$.not_equal(n.summary.checkType,s)&&(n.summary.checkType=s,T.set(n))}return[n,l,o,g,p,i,f,r,h,B,H,_,G,J,A]}class Xt extends ve{constructor(e){super(),$e(this,e,Ft,Nt,de,{})}}export{Xt as component};
