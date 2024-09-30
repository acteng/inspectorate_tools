import{s as ve,a as y,e as L,g as w,c as U,b as M,f as I,q as B,i as H,D as x,z as Qe,B as bt,y as yt,E as wt,t as kt,d as St,h as b,j as Ct,r as q,A as Xe,w as A,k as Rt,V as Ye}from"../chunks/scheduler.B5FfXhnD.js";import{S as $e,i as be,c as k,a as S,m as C,t as c,b as v,d as R,e as T,g as qt,f as At}from"../chunks/index.VeCIHQiF.js";import{p as X}from"../chunks/index.CS-bfyCa.js";import{e as Ze}from"../chunks/each.XauKQHIb.js";import{F as Tt}from"../chunks/FormElement.iPte9iIl.js";import"../chunks/index.DvcWCcI_.js";import{v as It}from"../chunks/ErrorMessage.DVpXqM0G.js";import{R as it}from"../chunks/Radio.BrGSj8sa.js";import{T as Z}from"../chunks/TextInput.C-6aLmKU.js";import{T as Y}from"../chunks/TextArea.CBu5b8xf.js";import{s as $}from"../chunks/data.Dvdax5vp.js";import{a as ut,t as Dt,r as Et,f as Pt,d as Ot}from"../chunks/lists.BAnfL2H6.js";import{D as Nt}from"../chunks/DateInput.Dh3J3Gb_.js";function xe(t,e,i){const n=t.slice();return n[0]=e[i][0],n[3]=e[i][1],n}function et(t){let e,i;return{c(){e=L("div"),i=kt(t[2]),this.h()},l(n){e=U(n,"DIV",{class:!0});var s=M(e);i=St(s,t[2]),s.forEach(I),this.h()},h(){B(e,"class","govuk-hint")},m(n,s){H(n,e,s),b(e,i)},p(n,s){s&4&&Ct(i,n[2])},d(n){n&&I(e)}}}function tt(t){let e,i,n;return{c(){e=L("option"),this.h()},l(s){e=U(s,"OPTION",{label:!0}),M(e).forEach(I),this.h()},h(){e.__value=i=t[0],x(e,e.__value),B(e,"label",n=t[3])},m(s,f){H(s,e,f)},p(s,f){f&2&&i!==(i=s[0])&&(e.__value=i,x(e,e.__value)),f&2&&n!==(n=s[3])&&B(e,"label",n)},d(s){s&&I(e)}}}function Vt(t){let e,i,n,s,f,p,g=t[2]&&et(t),l=Ze(t[1]),o=[];for(let u=0;u<l.length;u+=1)o[u]=tt(xe(t,l,u));return{c(){g&&g.c(),e=y(),i=L("input"),n=y(),s=L("datalist");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){g&&g.l(u),e=w(u),i=U(u,"INPUT",{class:!0,id:!0,list:!0}),n=w(u),s=U(u,"DATALIST",{id:!0});var h=M(s);for(let _=0;_<o.length;_+=1)o[_].l(h);h.forEach(I),this.h()},h(){B(i,"class","govuk-input govuk-input--width-20"),B(i,"id",t[4]),B(i,"list",`${t[4]}-list`),B(s,"id",`${t[4]}-list`)},m(u,h){g&&g.m(u,h),H(u,e,h),H(u,i,h),x(i,t[0]),H(u,n,h),H(u,s,h);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(s,null);f||(p=[Qe(i,"input",t[6]),Qe(i,"change",t[5])],f=!0)},p(u,h){if(u[2]?g?g.p(u,h):(g=et(u),g.c(),g.m(e.parentNode,e)):g&&(g.d(1),g=null),h&1&&i.value!==u[0]&&x(i,u[0]),h&2){l=Ze(u[1]);let _;for(_=0;_<l.length;_+=1){const P=xe(u,l,_);o[_]?o[_].p(P,h):(o[_]=tt(P),o[_].c(),o[_].m(s,null))}for(;_<o.length;_+=1)o[_].d(1);o.length=l.length}},d(u){u&&(I(e),I(i),I(n),I(s)),g&&g.d(u),bt(o,u),f=!1,yt(p)}}}function Ft(t){let e,i;return e=new Tt({props:{label:t[3],id:t[4],$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,s){C(e,n,s),i=!0},p(n,[s]){const f={};s&8&&(f.label=n[3]),s&519&&(f.$$scope={dirty:s,ctx:n}),e.$set(f)},i(n){i||(c(e.$$.fragment,n),i=!0)},o(n){v(e.$$.fragment,n),i=!1},d(n){R(e,n)}}}function Wt(t,e,i){let{label:n}=e,{value:s}=e,{options:f}=e,{hint:p=""}=e,g=It();function l(u){wt.call(this,t,u)}function o(){s=this.value,i(0,s)}return t.$$set=u=>{"label"in u&&i(3,n=u.label),"value"in u&&i(0,s=u.value),"options"in u&&i(1,f=u.options),"hint"in u&&i(2,p=u.hint)},[s,f,p,n,g,l,o]}class ce extends $e{constructor(e){super(),be(this,e,Wt,Ft,ve,{label:3,value:0,options:1,hint:2})}}function nt(t){let e,i,n;function s(p){t[8](p)}let f={label:"Enter a custom value"};return t[0]!==void 0&&(f.value=t[0]),e=new Z({props:f}),q.push(()=>T(e,"value",s)),{c(){k(e.$$.fragment)},l(p){S(e.$$.fragment,p)},m(p,g){C(e,p,g),n=!0},p(p,g){const l={};!i&&g&1&&(i=!0,l.value=p[0],A(()=>i=!1)),e.$set(l)},i(p){n||(c(e.$$.fragment,p),n=!0)},o(p){v(e.$$.fragment,p),n=!1},d(p){R(e,p)}}}function jt(t){let e,i,n,s,f;function p(o){t[7](o)}let g={label:t[1],hint:t[2],choices:t[4]};t[3]!==void 0&&(g.value=t[3]),i=new it({props:g}),q.push(()=>T(i,"value",p)),i.$on("change",t[5]);let l=t[3]=="other"&&nt(t);return{c(){e=L("div"),k(i.$$.fragment),s=y(),l&&l.c(),this.h()},l(o){e=U(o,"DIV",{class:!0});var u=M(e);S(i.$$.fragment,u),s=w(u),l&&l.l(u),u.forEach(I),this.h()},h(){B(e,"class","svelte-gtlbk6"),Xe(e,"grouped",t[3]=="other")},m(o,u){H(o,e,u),C(i,e,null),b(e,s),l&&l.m(e,null),f=!0},p(o,[u]){const h={};u&2&&(h.label=o[1]),u&4&&(h.hint=o[2]),!n&&u&8&&(n=!0,h.value=o[3],A(()=>n=!1)),i.$set(h),o[3]=="other"?l?(l.p(o,u),u&8&&c(l,1)):(l=nt(o),l.c(),c(l,1),l.m(e,null)):l&&(qt(),v(l,1,1,()=>{l=null}),At()),(!f||u&8)&&Xe(e,"grouped",o[3]=="other")},i(o){f||(c(i.$$.fragment,o),c(l),f=!0)},o(o){v(i.$$.fragment,o),v(l),f=!1},d(o){o&&I(e),R(i),l&&l.d()}}}function zt(t,e,i){let{label:n}=e,{hint:s=""}=e,{choices:f}=e,{value:p}=e,g=new Set(f.map(d=>d[0])),l=[...f,["other","Other"]];function o(d){return g.has(d)?d:"other"}let u=o(p);function h(){i(0,p=u=="other"?"":u)}function _(d){u=d,i(3,u)}function P(d){p=d,i(0,p)}return t.$$set=d=>{"label"in d&&i(1,n=d.label),"hint"in d&&i(2,s=d.hint),"choices"in d&&i(6,f=d.choices),"value"in d&&i(0,p=d.value)},[p,n,s,u,l,h,f,_,P]}class at extends $e{constructor(e){super(),be(this,e,zt,jt,ve,{label:1,hint:2,choices:6,value:0})}}function Bt(t){let e,i,n,s,f,p,g,l,o,u,h,_,P,d,G,J,D,K,r,E,ee,te,O,ne,ae,N,ie,ue,V,re,se,F,oe,me,W,le,fe,j,pe,ge,he,_e,z,de,Q;function rt(a){t[2](a)}let ye={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(ye.value=t[0].summary.dateDesignReview),i=new Nt({props:ye}),q.push(()=>T(i,"value",rt));function st(a){t[3](a)}let we={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(we.value=t[0].summary.schemeReference),f=new Z({props:we}),q.push(()=>T(f,"value",st));function ot(a){t[4](a)}let ke={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(ke.value=t[0].summary.schemeName),l=new Z({props:ke}),q.push(()=>T(l,"value",ot));function mt(a){t[5](a)}let Se={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(Se.value=t[0].summary.schemeSummary),h=new Y({props:Se}),q.push(()=>T(h,"value",mt));function lt(a){t[6](a)}let Ce={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Ce.value=t[0].summary.schemeInfoReviewed),d=new Y({props:Ce}),q.push(()=>T(d,"value",lt));function ft(a){t[7](a)}let Re={label:"Authority",options:ut.map(Ht),hint:"Start typing to auto-complete the authority"};t[0].summary.authority!==void 0&&(Re.value=t[0].summary.authority),D=new ce({props:Re}),q.push(()=>T(D,"value",ft)),D.$on("change",t[1]);function pt(a){t[8](a)}let qe={label:"Transport / Combined Authority",options:X(Dt),hint:"Start typing to auto-complete the transport / combined authority"};t[0].summary.transportOrCombinedAuthority!==void 0&&(qe.value=t[0].summary.transportOrCombinedAuthority),E=new ce({props:qe}),q.push(()=>T(E,"value",pt));function gt(a){t[9](a)}let Ae={label:"Region",options:X(Et),hint:"Start typing to auto-complete the region"};t[0].summary.region!==void 0&&(Ae.value=t[0].summary.region),O=new ce({props:Ae}),q.push(()=>T(O,"value",gt));function ht(a){t[10](a)}let Te={label:"Funding programme",choices:X(Pt)};t[0].summary.fundingProgramme!==void 0&&(Te.value=t[0].summary.fundingProgramme),N=new at({props:Te}),q.push(()=>T(N,"value",ht));function _t(a){t[11](a)}let Ie={label:"Design stage",choices:X(Ot)};t[0].summary.designStage!==void 0&&(Ie.value=t[0].summary.designStage),V=new at({props:Ie}),q.push(()=>T(V,"value",_t));function dt(a){t[12](a)}let De={label:"Funding conditions",hint:"Any conditions on infrastructure attached to the relevant funding programme"};t[0].summary.fundingConditions!==void 0&&(De.value=t[0].summary.fundingConditions),F=new Y({props:De}),q.push(()=>T(F,"value",dt));function ct(a){t[13](a)}let Ee={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(Ee.value=t[0].summary.inspectorEmail),W=new Z({props:Ee}),q.push(()=>T(W,"value",ct));function vt(a){t[14](a)}let Pe={label:"Notes"};t[0].summary.notes!==void 0&&(Pe.value=t[0].summary.notes),j=new Y({props:Pe}),q.push(()=>T(j,"value",vt));function $t(a){t[15](a)}let Oe={label:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",choices:[["street","Street Check"],["path","Path Check"]]};return t[0].summary.checkType!==void 0&&(Oe.value=t[0].summary.checkType),z=new it({props:Oe}),q.push(()=>T(z,"value",$t)),{c(){e=L("div"),k(i.$$.fragment),s=y(),k(f.$$.fragment),g=y(),k(l.$$.fragment),u=y(),k(h.$$.fragment),P=y(),k(d.$$.fragment),J=y(),k(D.$$.fragment),r=y(),k(E.$$.fragment),te=y(),k(O.$$.fragment),ae=y(),k(N.$$.fragment),ue=y(),k(V.$$.fragment),se=y(),k(F.$$.fragment),me=y(),k(W.$$.fragment),fe=y(),k(j.$$.fragment),ge=y(),he=L("hr"),_e=y(),k(z.$$.fragment),this.h()},l(a){e=U(a,"DIV",{class:!0});var m=M(e);S(i.$$.fragment,m),s=w(m),S(f.$$.fragment,m),g=w(m),S(l.$$.fragment,m),u=w(m),S(h.$$.fragment,m),P=w(m),S(d.$$.fragment,m),J=w(m),S(D.$$.fragment,m),r=w(m),S(E.$$.fragment,m),te=w(m),S(O.$$.fragment,m),ae=w(m),S(N.$$.fragment,m),ue=w(m),S(V.$$.fragment,m),se=w(m),S(F.$$.fragment,m),me=w(m),S(W.$$.fragment,m),fe=w(m),S(j.$$.fragment,m),ge=w(m),he=U(m,"HR",{}),_e=w(m),S(z.$$.fragment,m),m.forEach(I),this.h()},h(){B(e,"class","govuk-width-container")},m(a,m){H(a,e,m),C(i,e,null),b(e,s),C(f,e,null),b(e,g),C(l,e,null),b(e,u),C(h,e,null),b(e,P),C(d,e,null),b(e,J),C(D,e,null),b(e,r),C(E,e,null),b(e,te),C(O,e,null),b(e,ae),C(N,e,null),b(e,ue),C(V,e,null),b(e,se),C(F,e,null),b(e,me),C(W,e,null),b(e,fe),C(j,e,null),b(e,ge),b(e,he),b(e,_e),C(z,e,null),Q=!0},p(a,[m]){const Ne={};!n&&m&1&&(n=!0,Ne.value=a[0].summary.dateDesignReview,A(()=>n=!1)),i.$set(Ne);const Ve={};!p&&m&1&&(p=!0,Ve.value=a[0].summary.schemeReference,A(()=>p=!1)),f.$set(Ve);const Fe={};!o&&m&1&&(o=!0,Fe.value=a[0].summary.schemeName,A(()=>o=!1)),l.$set(Fe);const We={};!_&&m&1&&(_=!0,We.value=a[0].summary.schemeSummary,A(()=>_=!1)),h.$set(We);const je={};!G&&m&1&&(G=!0,je.value=a[0].summary.schemeInfoReviewed,A(()=>G=!1)),d.$set(je);const ze={};!K&&m&1&&(K=!0,ze.value=a[0].summary.authority,A(()=>K=!1)),D.$set(ze);const Be={};!ee&&m&1&&(ee=!0,Be.value=a[0].summary.transportOrCombinedAuthority,A(()=>ee=!1)),E.$set(Be);const He={};!ne&&m&1&&(ne=!0,He.value=a[0].summary.region,A(()=>ne=!1)),O.$set(He);const Le={};!ie&&m&1&&(ie=!0,Le.value=a[0].summary.fundingProgramme,A(()=>ie=!1)),N.$set(Le);const Ue={};!re&&m&1&&(re=!0,Ue.value=a[0].summary.designStage,A(()=>re=!1)),V.$set(Ue);const Ge={};!oe&&m&1&&(oe=!0,Ge.value=a[0].summary.fundingConditions,A(()=>oe=!1)),F.$set(Ge);const Je={};!le&&m&1&&(le=!0,Je.value=a[0].summary.inspectorEmail,A(()=>le=!1)),W.$set(Je);const Ke={};!pe&&m&1&&(pe=!0,Ke.value=a[0].summary.notes,A(()=>pe=!1)),j.$set(Ke);const Me={};!de&&m&1&&(de=!0,Me.value=a[0].summary.checkType,A(()=>de=!1)),z.$set(Me)},i(a){Q||(c(i.$$.fragment,a),c(f.$$.fragment,a),c(l.$$.fragment,a),c(h.$$.fragment,a),c(d.$$.fragment,a),c(D.$$.fragment,a),c(E.$$.fragment,a),c(O.$$.fragment,a),c(N.$$.fragment,a),c(V.$$.fragment,a),c(F.$$.fragment,a),c(W.$$.fragment,a),c(j.$$.fragment,a),c(z.$$.fragment,a),Q=!0)},o(a){v(i.$$.fragment,a),v(f.$$.fragment,a),v(l.$$.fragment,a),v(h.$$.fragment,a),v(d.$$.fragment,a),v(D.$$.fragment,a),v(E.$$.fragment,a),v(O.$$.fragment,a),v(N.$$.fragment,a),v(V.$$.fragment,a),v(F.$$.fragment,a),v(W.$$.fragment,a),v(j.$$.fragment,a),v(z.$$.fragment,a),Q=!1},d(a){a&&I(e),R(i),R(f),R(l),R(h),R(d),R(D),R(E),R(O),R(N),R(V),R(F),R(W),R(j),R(z)}}}const Ht=([t,e,i])=>[t,t];function Lt(t,e,i){let n;Rt(t,$,r=>i(0,n=r));function s(){let r=ut.find(E=>E[0]==n.summary.authority);r&&(Ye($,n.summary.transportOrCombinedAuthority=r[1],n),Ye($,n.summary.region=r[2],n))}function f(r){t.$$.not_equal(n.summary.dateDesignReview,r)&&(n.summary.dateDesignReview=r,$.set(n))}function p(r){t.$$.not_equal(n.summary.schemeReference,r)&&(n.summary.schemeReference=r,$.set(n))}function g(r){t.$$.not_equal(n.summary.schemeName,r)&&(n.summary.schemeName=r,$.set(n))}function l(r){t.$$.not_equal(n.summary.schemeSummary,r)&&(n.summary.schemeSummary=r,$.set(n))}function o(r){t.$$.not_equal(n.summary.schemeInfoReviewed,r)&&(n.summary.schemeInfoReviewed=r,$.set(n))}function u(r){t.$$.not_equal(n.summary.authority,r)&&(n.summary.authority=r,$.set(n))}function h(r){t.$$.not_equal(n.summary.transportOrCombinedAuthority,r)&&(n.summary.transportOrCombinedAuthority=r,$.set(n))}function _(r){t.$$.not_equal(n.summary.region,r)&&(n.summary.region=r,$.set(n))}function P(r){t.$$.not_equal(n.summary.fundingProgramme,r)&&(n.summary.fundingProgramme=r,$.set(n))}function d(r){t.$$.not_equal(n.summary.designStage,r)&&(n.summary.designStage=r,$.set(n))}function G(r){t.$$.not_equal(n.summary.fundingConditions,r)&&(n.summary.fundingConditions=r,$.set(n))}function J(r){t.$$.not_equal(n.summary.inspectorEmail,r)&&(n.summary.inspectorEmail=r,$.set(n))}function D(r){t.$$.not_equal(n.summary.notes,r)&&(n.summary.notes=r,$.set(n))}function K(r){t.$$.not_equal(n.summary.checkType,r)&&(n.summary.checkType=r,$.set(n))}return[n,s,f,p,g,l,o,u,h,_,P,d,G,J,D,K]}class an extends $e{constructor(e){super(),be(this,e,Lt,Bt,ve,{})}}export{an as component};
