import{s as de,a as b,e as L,g as y,c as U,b as M,f as A,q as J,i as K,J as Z,y as Me,K as vt,x as $t,C as bt,t as yt,d as wt,h as $,j as kt,r as R,E as Qe,w as q,k as St}from"../chunks/scheduler.4ZNDCSWA.js";import{S as ve,i as $e,c as w,a as k,m as S,t as d,b as v,d as C,e as T,g as Ct,f as Rt}from"../chunks/index.xRKM1n3P.js";import{p as G}from"../chunks/index.BsD0xTTX.js";import{e as Xe}from"../chunks/each.DpHudclE.js";import{F as qt}from"../chunks/FormElement.DnliNpKu.js";import"../chunks/index.E51vcFqy.js";import{v as Tt}from"../chunks/v4.D8aEg3BZ.js";import{R as at}from"../chunks/Radio.Dk-R82Rw.js";import{T as Y}from"../chunks/TextInput.r1-ix1Pv.js";import{S as It,a as At,t as Dt,r as Et,f as Pt,d as Ot}from"../chunks/lists.D6RqnGOI.js";import{T as X}from"../chunks/TextArea.FMNqCPfo.js";import{s as I}from"../chunks/data.D6mtyB6L.js";import{D as Nt}from"../chunks/DateInput.DqGTCawk.js";function Ye(t,e,i){const n=t.slice();return n[0]=e[i][0],n[3]=e[i][1],n}function Ze(t){let e,i;return{c(){e=L("div"),i=yt(t[2]),this.h()},l(n){e=U(n,"DIV",{class:!0});var r=M(e);i=wt(r,t[2]),r.forEach(A),this.h()},h(){J(e,"class","govuk-hint")},m(n,r){K(n,e,r),$(e,i)},p(n,r){r&4&&kt(i,n[2])},d(n){n&&A(e)}}}function xe(t){let e,i,n;return{c(){e=L("option"),this.h()},l(r){e=U(r,"OPTION",{label:!0}),M(e).forEach(A),this.h()},h(){e.__value=i=t[0],Z(e,e.__value),J(e,"label",n=t[3])},m(r,f){K(r,e,f)},p(r,f){f&2&&i!==(i=r[0])&&(e.__value=i,Z(e,e.__value)),f&2&&n!==(n=r[3])&&J(e,"label",n)},d(r){r&&A(e)}}}function Vt(t){let e,i,n,r,f,g,h=t[2]&&Ze(t),l=Xe(t[1]),s=[];for(let u=0;u<l.length;u+=1)s[u]=xe(Ye(t,l,u));return{c(){h&&h.c(),e=b(),i=L("input"),n=b(),r=L("datalist");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){h&&h.l(u),e=y(u),i=U(u,"INPUT",{class:!0,id:!0,list:!0}),n=y(u),r=U(u,"DATALIST",{id:!0});var p=M(r);for(let c=0;c<s.length;c+=1)s[c].l(p);p.forEach(A),this.h()},h(){J(i,"class","govuk-input govuk-input--width-20"),J(i,"id",t[4]),J(i,"list",`${t[4]}-list`),J(r,"id",`${t[4]}-list`)},m(u,p){h&&h.m(u,p),K(u,e,p),K(u,i,p),Z(i,t[0]),K(u,n,p),K(u,r,p);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(r,null);f||(g=[Me(i,"input",t[6]),Me(i,"change",t[5])],f=!0)},p(u,p){if(u[2]?h?h.p(u,p):(h=Ze(u),h.c(),h.m(e.parentNode,e)):h&&(h.d(1),h=null),p&1&&i.value!==u[0]&&Z(i,u[0]),p&2){l=Xe(u[1]);let c;for(c=0;c<l.length;c+=1){const E=Ye(u,l,c);s[c]?s[c].p(E,p):(s[c]=xe(E),s[c].c(),s[c].m(r,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=l.length}},d(u){u&&(A(e),A(i),A(n),A(r)),h&&h.d(u),vt(s,u),f=!1,$t(g)}}}function Ft(t){let e,i;return e=new qt({props:{label:t[3],id:t[4],$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,r){S(e,n,r),i=!0},p(n,[r]){const f={};r&8&&(f.label=n[3]),r&519&&(f.$$scope={dirty:r,ctx:n}),e.$set(f)},i(n){i||(d(e.$$.fragment,n),i=!0)},o(n){v(e.$$.fragment,n),i=!1},d(n){C(e,n)}}}function Wt(t,e,i){let{label:n}=e,{value:r}=e,{options:f}=e,{hint:g=""}=e,h=Tt();function l(u){bt.call(this,t,u)}function s(){r=this.value,i(0,r)}return t.$$set=u=>{"label"in u&&i(3,n=u.label),"value"in u&&i(0,r=u.value),"options"in u&&i(1,f=u.options),"hint"in u&&i(2,g=u.hint)},[r,f,g,n,h,l,s]}class et extends ve{constructor(e){super(),$e(this,e,Wt,Ft,de,{label:3,value:0,options:1,hint:2})}}function tt(t){let e,i,n;function r(g){t[8](g)}let f={label:"Enter a custom value"};return t[0]!==void 0&&(f.value=t[0]),e=new Y({props:f}),R.push(()=>T(e,"value",r)),{c(){w(e.$$.fragment)},l(g){k(e.$$.fragment,g)},m(g,h){S(e,g,h),n=!0},p(g,h){const l={};!i&&h&1&&(i=!0,l.value=g[0],q(()=>i=!1)),e.$set(l)},i(g){n||(d(e.$$.fragment,g),n=!0)},o(g){v(e.$$.fragment,g),n=!1},d(g){C(e,g)}}}function jt(t){let e,i,n,r,f;function g(s){t[7](s)}let h={label:t[1],hint:t[2],choices:t[4]};t[3]!==void 0&&(h.value=t[3]),i=new at({props:h}),R.push(()=>T(i,"value",g)),i.$on("change",t[5]);let l=t[3]=="other"&&tt(t);return{c(){e=L("div"),w(i.$$.fragment),r=b(),l&&l.c(),this.h()},l(s){e=U(s,"DIV",{class:!0});var u=M(e);k(i.$$.fragment,u),r=y(u),l&&l.l(u),u.forEach(A),this.h()},h(){J(e,"class","svelte-gtlbk6"),Qe(e,"grouped",t[3]=="other")},m(s,u){K(s,e,u),S(i,e,null),$(e,r),l&&l.m(e,null),f=!0},p(s,[u]){const p={};u&2&&(p.label=s[1]),u&4&&(p.hint=s[2]),!n&&u&8&&(n=!0,p.value=s[3],q(()=>n=!1)),i.$set(p),s[3]=="other"?l?(l.p(s,u),u&8&&d(l,1)):(l=tt(s),l.c(),d(l,1),l.m(e,null)):l&&(Ct(),v(l,1,1,()=>{l=null}),Rt()),(!f||u&8)&&Qe(e,"grouped",s[3]=="other")},i(s){f||(d(i.$$.fragment,s),d(l),f=!0)},o(s){v(i.$$.fragment,s),v(l),f=!1},d(s){s&&A(e),C(i),l&&l.d()}}}function Ht(t,e,i){let{label:n}=e,{hint:r=""}=e,{choices:f}=e,{value:g}=e,h=new Set(f.map(_=>_[0])),l=[...f,["other","Other"]];function s(_){return _?h.has(_)?_:"other":""}let u=s(g);function p(){i(0,g=u=="other"?"":u)}function c(_){u=_,i(3,u)}function E(_){g=_,i(0,g)}return t.$$set=_=>{"label"in _&&i(1,n=_.label),"hint"in _&&i(2,r=_.hint),"choices"in _&&i(6,f=_.choices),"value"in _&&i(0,g=_.value)},[g,n,r,u,l,p,f,c,E]}class nt extends ve{constructor(e){super(),$e(this,e,Ht,jt,de,{label:1,hint:2,choices:6,value:0})}}function Jt(t){let e,i,n,r,f,g,h,l,s,u,p,c,E,_,z,B,D,o,x,P,ee,te,O,ne,ae,N,ie,ue,V,re,se,F,oe,me,W,le,fe,j,ge,he,pe,_e,H,ce,Q;function it(a){t[1](a)}let be={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(be.value=t[0].summary.dateDesignReview),i=new Nt({props:be}),R.push(()=>T(i,"value",it));function ut(a){t[2](a)}let ye={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(ye.value=t[0].summary.schemeReference),f=new Y({props:ye}),R.push(()=>T(f,"value",ut));function rt(a){t[3](a)}let we={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(we.value=t[0].summary.schemeName),l=new Y({props:we}),R.push(()=>T(l,"value",rt));function st(a){t[4](a)}let ke={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(ke.value=t[0].summary.schemeSummary),p=new X({props:ke}),R.push(()=>T(p,"value",st));function ot(a){t[5](a)}let Se={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Se.value=t[0].summary.schemeInfoReviewed),_=new X({props:Se}),R.push(()=>T(_,"value",ot));function mt(a){t[6](a)}let Ce={label:"Authority",options:G(At),hint:"Start typing to auto-complete the authority"};t[0].summary.authority!==void 0&&(Ce.value=t[0].summary.authority),D=new et({props:Ce}),R.push(()=>T(D,"value",mt));function lt(a){t[7](a)}let Re={label:"Transport / Combined Authority",options:G(Dt),hint:"Start typing to auto-complete the transport / combined authority"};t[0].summary.transportOrCombinedAuthority!==void 0&&(Re.value=t[0].summary.transportOrCombinedAuthority),P=new et({props:Re}),R.push(()=>T(P,"value",lt));function ft(a){t[8](a)}let qe={label:"Region",emptyOption:!0,choices:G(Et)};t[0].summary.region!==void 0&&(qe.value=t[0].summary.region),O=new It({props:qe}),R.push(()=>T(O,"value",ft));function gt(a){t[9](a)}let Te={label:"Funding programme",choices:G(Pt)};t[0].summary.fundingProgramme!==void 0&&(Te.value=t[0].summary.fundingProgramme),N=new nt({props:Te}),R.push(()=>T(N,"value",gt));function ht(a){t[10](a)}let Ie={label:"Design stage",choices:G(Ot)};t[0].summary.designStage!==void 0&&(Ie.value=t[0].summary.designStage),V=new nt({props:Ie}),R.push(()=>T(V,"value",ht));function pt(a){t[11](a)}let Ae={label:"Funding conditions",hint:"Any conditions on infrastructure attached to the relevant funding programme"};t[0].summary.fundingConditions!==void 0&&(Ae.value=t[0].summary.fundingConditions),F=new X({props:Ae}),R.push(()=>T(F,"value",pt));function _t(a){t[12](a)}let De={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(De.value=t[0].summary.inspectorEmail),W=new Y({props:De}),R.push(()=>T(W,"value",_t));function ct(a){t[13](a)}let Ee={label:"Notes"};t[0].summary.notes!==void 0&&(Ee.value=t[0].summary.notes),j=new X({props:Ee}),R.push(()=>T(j,"value",ct));function dt(a){t[14](a)}let Pe={label:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",choices:[["street","Street Check"],["path","Path Check"]]};return t[0].summary.checkType!==void 0&&(Pe.value=t[0].summary.checkType),H=new at({props:Pe}),R.push(()=>T(H,"value",dt)),{c(){e=L("div"),w(i.$$.fragment),r=b(),w(f.$$.fragment),h=b(),w(l.$$.fragment),u=b(),w(p.$$.fragment),E=b(),w(_.$$.fragment),B=b(),w(D.$$.fragment),x=b(),w(P.$$.fragment),te=b(),w(O.$$.fragment),ae=b(),w(N.$$.fragment),ue=b(),w(V.$$.fragment),se=b(),w(F.$$.fragment),me=b(),w(W.$$.fragment),fe=b(),w(j.$$.fragment),he=b(),pe=L("hr"),_e=b(),w(H.$$.fragment),this.h()},l(a){e=U(a,"DIV",{class:!0});var m=M(e);k(i.$$.fragment,m),r=y(m),k(f.$$.fragment,m),h=y(m),k(l.$$.fragment,m),u=y(m),k(p.$$.fragment,m),E=y(m),k(_.$$.fragment,m),B=y(m),k(D.$$.fragment,m),x=y(m),k(P.$$.fragment,m),te=y(m),k(O.$$.fragment,m),ae=y(m),k(N.$$.fragment,m),ue=y(m),k(V.$$.fragment,m),se=y(m),k(F.$$.fragment,m),me=y(m),k(W.$$.fragment,m),fe=y(m),k(j.$$.fragment,m),he=y(m),pe=U(m,"HR",{}),_e=y(m),k(H.$$.fragment,m),m.forEach(A),this.h()},h(){J(e,"class","govuk-width-container")},m(a,m){K(a,e,m),S(i,e,null),$(e,r),S(f,e,null),$(e,h),S(l,e,null),$(e,u),S(p,e,null),$(e,E),S(_,e,null),$(e,B),S(D,e,null),$(e,x),S(P,e,null),$(e,te),S(O,e,null),$(e,ae),S(N,e,null),$(e,ue),S(V,e,null),$(e,se),S(F,e,null),$(e,me),S(W,e,null),$(e,fe),S(j,e,null),$(e,he),$(e,pe),$(e,_e),S(H,e,null),Q=!0},p(a,[m]){const Oe={};!n&&m&1&&(n=!0,Oe.value=a[0].summary.dateDesignReview,q(()=>n=!1)),i.$set(Oe);const Ne={};!g&&m&1&&(g=!0,Ne.value=a[0].summary.schemeReference,q(()=>g=!1)),f.$set(Ne);const Ve={};!s&&m&1&&(s=!0,Ve.value=a[0].summary.schemeName,q(()=>s=!1)),l.$set(Ve);const Fe={};!c&&m&1&&(c=!0,Fe.value=a[0].summary.schemeSummary,q(()=>c=!1)),p.$set(Fe);const We={};!z&&m&1&&(z=!0,We.value=a[0].summary.schemeInfoReviewed,q(()=>z=!1)),_.$set(We);const je={};!o&&m&1&&(o=!0,je.value=a[0].summary.authority,q(()=>o=!1)),D.$set(je);const He={};!ee&&m&1&&(ee=!0,He.value=a[0].summary.transportOrCombinedAuthority,q(()=>ee=!1)),P.$set(He);const Je={};!ne&&m&1&&(ne=!0,Je.value=a[0].summary.region,q(()=>ne=!1)),O.$set(Je);const Ke={};!ie&&m&1&&(ie=!0,Ke.value=a[0].summary.fundingProgramme,q(()=>ie=!1)),N.$set(Ke);const Le={};!re&&m&1&&(re=!0,Le.value=a[0].summary.designStage,q(()=>re=!1)),V.$set(Le);const Ue={};!oe&&m&1&&(oe=!0,Ue.value=a[0].summary.fundingConditions,q(()=>oe=!1)),F.$set(Ue);const ze={};!le&&m&1&&(le=!0,ze.value=a[0].summary.inspectorEmail,q(()=>le=!1)),W.$set(ze);const Be={};!ge&&m&1&&(ge=!0,Be.value=a[0].summary.notes,q(()=>ge=!1)),j.$set(Be);const Ge={};!ce&&m&1&&(ce=!0,Ge.value=a[0].summary.checkType,q(()=>ce=!1)),H.$set(Ge)},i(a){Q||(d(i.$$.fragment,a),d(f.$$.fragment,a),d(l.$$.fragment,a),d(p.$$.fragment,a),d(_.$$.fragment,a),d(D.$$.fragment,a),d(P.$$.fragment,a),d(O.$$.fragment,a),d(N.$$.fragment,a),d(V.$$.fragment,a),d(F.$$.fragment,a),d(W.$$.fragment,a),d(j.$$.fragment,a),d(H.$$.fragment,a),Q=!0)},o(a){v(i.$$.fragment,a),v(f.$$.fragment,a),v(l.$$.fragment,a),v(p.$$.fragment,a),v(_.$$.fragment,a),v(D.$$.fragment,a),v(P.$$.fragment,a),v(O.$$.fragment,a),v(N.$$.fragment,a),v(V.$$.fragment,a),v(F.$$.fragment,a),v(W.$$.fragment,a),v(j.$$.fragment,a),v(H.$$.fragment,a),Q=!1},d(a){a&&A(e),C(i),C(f),C(l),C(p),C(_),C(D),C(P),C(O),C(N),C(V),C(F),C(W),C(j),C(H)}}}function Kt(t,e,i){let n;St(t,I,o=>i(0,n=o));function r(o){t.$$.not_equal(n.summary.dateDesignReview,o)&&(n.summary.dateDesignReview=o,I.set(n))}function f(o){t.$$.not_equal(n.summary.schemeReference,o)&&(n.summary.schemeReference=o,I.set(n))}function g(o){t.$$.not_equal(n.summary.schemeName,o)&&(n.summary.schemeName=o,I.set(n))}function h(o){t.$$.not_equal(n.summary.schemeSummary,o)&&(n.summary.schemeSummary=o,I.set(n))}function l(o){t.$$.not_equal(n.summary.schemeInfoReviewed,o)&&(n.summary.schemeInfoReviewed=o,I.set(n))}function s(o){t.$$.not_equal(n.summary.authority,o)&&(n.summary.authority=o,I.set(n))}function u(o){t.$$.not_equal(n.summary.transportOrCombinedAuthority,o)&&(n.summary.transportOrCombinedAuthority=o,I.set(n))}function p(o){t.$$.not_equal(n.summary.region,o)&&(n.summary.region=o,I.set(n))}function c(o){t.$$.not_equal(n.summary.fundingProgramme,o)&&(n.summary.fundingProgramme=o,I.set(n))}function E(o){t.$$.not_equal(n.summary.designStage,o)&&(n.summary.designStage=o,I.set(n))}function _(o){t.$$.not_equal(n.summary.fundingConditions,o)&&(n.summary.fundingConditions=o,I.set(n))}function z(o){t.$$.not_equal(n.summary.inspectorEmail,o)&&(n.summary.inspectorEmail=o,I.set(n))}function B(o){t.$$.not_equal(n.summary.notes,o)&&(n.summary.notes=o,I.set(n))}function D(o){t.$$.not_equal(n.summary.checkType,o)&&(n.summary.checkType=o,I.set(n))}return[n,r,f,g,h,l,s,u,p,c,E,_,z,B,D]}class nn extends ve{constructor(e){super(),$e(this,e,Kt,Jt,de,{})}}export{nn as component};
