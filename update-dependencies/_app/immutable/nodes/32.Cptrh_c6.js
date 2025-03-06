import{s as st,r as q,d as x,v as T,i as se,b as r,p as it,c as E,e as te,g as p,h as P,j as g,k as rt,a as ut,f as X,t as Z,q as Q}from"../chunks/hklQk-fT.js";import{S as mt,i as ot,e as O,d as w,t as L,a as S,m as k,c as C,b as M}from"../chunks/4RGf_tlt.js";import{t as lt}from"../chunks/BQ_I8zdC.js";import{p as ee}from"../chunks/D70NpXyK.js";import{S as he,a as ft,t as pt,r as gt,f as ht,d as _t}from"../chunks/Ct0-QPGY.js";import{D as Fe}from"../chunks/zKAf1m9S.js";import"../chunks/IrKgt0OQ.js";import{S as ze}from"../chunks/CKu8IRKu.js";import{T as _e}from"../chunks/IUuUaak3.js";import{T as Ge}from"../chunks/1kqFJgpQ.js";import"../chunks/DWLdo5fd.js";import{C as ct}from"../chunks/-hr_Uk0l.js";import{s as b}from"../chunks/ByAUludF.js";import{E as dt}from"../chunks/ji304PgH.js";function Be(n){let t,u,h,a=n[1].toFixed(2)+"",l,R;return{c(){t=P("p"),u=Z("LineStrings in the Network Map cover a total of "),h=P("b"),l=Z(a),R=Z(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(f){t=E(f,"P",{});var o=te(t);u=X(o,"LineStrings in the Network Map cover a total of "),h=E(o,"B",{});var j=te(h);l=X(j,a),j.forEach(x),R=X(o,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),o.forEach(x)},m(f,o){se(f,t,o),r(t,u),r(t,h),r(h,l),r(t,R)},p(f,o){o&2&&a!==(a=f[1].toFixed(2)+"")&&ut(l,a)},d(f){f&&x(t)}}}function $t(n){let t;return{c(){t=Z("Scheme Sketcher")},l(u){t=X(u,"Scheme Sketcher")},m(u,h){se(u,t,h)},d(u){u&&x(t)}}}function vt(n){let t,u,h,a,l,R,f,o="Choose the area best covering this scheme",j,I,$=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,z,H,v=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,G,K,y=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,B,s,_=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,D,F,N="Load the saved file above",J;return a=new dt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[$t]},$$scope:{ctx:n}}}),{c(){t=P("ol"),u=P("li"),h=Z("Go to the "),M(a.$$.fragment),l=Z(" tool"),R=g(),f=P("li"),f.textContent=o,j=g(),I=P("li"),I.innerHTML=$,z=g(),H=P("li"),H.innerHTML=v,G=g(),K=P("li"),K.innerHTML=y,B=g(),s=P("li"),s.innerHTML=_,D=g(),F=P("li"),F.textContent=N},l(d){t=E(d,"OL",{});var m=te(t);u=E(m,"LI",{});var A=te(u);h=X(A,"Go to the "),C(a.$$.fragment,A),l=X(A," tool"),A.forEach(x),R=p(m),f=E(m,"LI",{"data-svelte-h":!0}),Q(f)!=="svelte-aj705b"&&(f.textContent=o),j=p(m),I=E(m,"LI",{"data-svelte-h":!0}),Q(I)!=="svelte-1vb2muj"&&(I.innerHTML=$),z=p(m),H=E(m,"LI",{"data-svelte-h":!0}),Q(H)!=="svelte-3xdyru"&&(H.innerHTML=v),G=p(m),K=E(m,"LI",{"data-svelte-h":!0}),Q(K)!=="svelte-1r1ljcj"&&(K.innerHTML=y),B=p(m),s=E(m,"LI",{"data-svelte-h":!0}),Q(s)!=="svelte-sz4wlr"&&(s.innerHTML=_),D=p(m),F=E(m,"LI",{"data-svelte-h":!0}),Q(F)!=="svelte-x3zkxb"&&(F.textContent=N),m.forEach(x)},m(d,m){se(d,t,m),r(t,u),r(u,h),k(a,u,null),r(u,l),r(t,R),r(t,f),r(t,j),r(t,I),r(t,z),r(t,H),r(t,G),r(t,K),r(t,B),r(t,s),r(t,D),r(t,F),J=!0},p(d,m){const A={};m&65536&&(A.$$scope={dirty:m,ctx:d}),a.$set(A)},i(d){J||(S(a.$$.fragment,d),J=!0)},o(d){L(a.$$.fragment,d),J=!1},d(d){d&&x(t),w(a)}}}function yt(n){let t,u,h,a,l,R,f,o,j,I,$,z,H,v,G,K,y,B,s,_,D,F,N,J,d,m,A,ie,ne,U,re,ue,V,me,oe,W,le,fe,Y,pe,ae;function Ue(e){n[2](e)}let ce={label:"Scheme reference"};n[0].summary.schemeReference!==void 0&&(ce.value=n[0].summary.schemeReference),u=new Ge({props:ce}),q.push(()=>O(u,"value",Ue));function Ve(e){n[3](e)}let de={label:"Scheme name"};n[0].summary.schemeName!==void 0&&(de.value=n[0].summary.schemeName),l=new Ge({props:de}),q.push(()=>O(l,"value",Ve));function We(e){n[4](e)}let $e={label:"Scheme summary"};n[0].summary.schemeSummary!==void 0&&($e.value=n[0].summary.schemeSummary),o=new _e({props:$e}),q.push(()=>O(o,"value",We));function Ye(e){n[5](e)}let ve={label:"Authority",emptyOption:!0,choices:ee(ft)};n[0].summary.authority!==void 0&&(ve.value=n[0].summary.authority),$=new ze({props:ve}),q.push(()=>O($,"value",Ye));function xe(e){n[6](e)}let ye={label:"Transport / Combined Authority",emptyOption:!0,choices:ee(pt)};n[0].summary.transportOrCombinedAuthority!==void 0&&(ye.value=n[0].summary.transportOrCombinedAuthority),v=new ze({props:ye}),q.push(()=>O(v,"value",xe));function Je(e){n[7](e)}let be={label:"Region",emptyOption:!0,choices:ee(gt)};n[0].summary.region!==void 0&&(be.value=n[0].summary.region),y=new he({props:be}),q.push(()=>O(y,"value",Je));function Qe(e){n[8](e)}let we={label:"Funding programme",emptyOption:!0,choices:ee(ht)};n[0].summary.fundingProgramme!==void 0&&(we.value=n[0].summary.fundingProgramme),_=new he({props:we}),q.push(()=>O(_,"value",Qe));function Xe(e){n[9](e)}let Le={label:"Design stage",emptyOption:!0,choices:ee(_t)};n[0].summary.designStage!==void 0&&(Le.value=n[0].summary.designStage),N=new he({props:Le}),q.push(()=>O(N,"value",Xe));function Ze(e){n[10](e)}let Se={label:"Funding conditions"};n[0].summary.fundingConditions!==void 0&&(Se.value=n[0].summary.fundingConditions),m=new _e({props:Se}),q.push(()=>O(m,"value",Ze));let c=n[1]&&Be(n);function et(e){n[11](e)}let ke={label:"Route length assessed here (km)",width:6,min:0};n[0].summary.assessedRouteLengthKm!==void 0&&(ke.value=n[0].summary.assessedRouteLengthKm),U=new Fe({props:ke}),q.push(()=>O(U,"value",et));function tt(e){n[12](e)}let Ce={label:"Total route length (km)",width:6,min:0};n[0].summary.totalRouteLengthKm!==void 0&&(Ce.value=n[0].summary.totalRouteLengthKm),V=new Fe({props:Ce}),q.push(()=>O(V,"value",tt));function nt(e){n[13](e)}let Me={label:"Notes"};n[0].summary.notes!==void 0&&(Me.value=n[0].summary.notes),W=new _e({props:Me}),q.push(()=>O(W,"value",nt));function at(e){n[14](e)}let Re={$$slots:{default:[vt]},$$scope:{ctx:n}};return n[0].summary.networkMap!==void 0&&(Re.gj=n[0].summary.networkMap),Y=new ct({props:Re}),q.push(()=>O(Y,"gj",at)),{c(){t=P("div"),M(u.$$.fragment),a=g(),M(l.$$.fragment),f=g(),M(o.$$.fragment),I=g(),M($.$$.fragment),H=g(),M(v.$$.fragment),K=g(),M(y.$$.fragment),s=g(),M(_.$$.fragment),F=g(),M(N.$$.fragment),d=g(),M(m.$$.fragment),ie=g(),c&&c.c(),ne=g(),M(U.$$.fragment),ue=g(),M(V.$$.fragment),oe=g(),M(W.$$.fragment),fe=g(),M(Y.$$.fragment),this.h()},l(e){t=E(e,"DIV",{class:!0});var i=te(t);C(u.$$.fragment,i),a=p(i),C(l.$$.fragment,i),f=p(i),C(o.$$.fragment,i),I=p(i),C($.$$.fragment,i),H=p(i),C(v.$$.fragment,i),K=p(i),C(y.$$.fragment,i),s=p(i),C(_.$$.fragment,i),F=p(i),C(N.$$.fragment,i),d=p(i),C(m.$$.fragment,i),ie=p(i),c&&c.l(i),ne=p(i),C(U.$$.fragment,i),ue=p(i),C(V.$$.fragment,i),oe=p(i),C(W.$$.fragment,i),fe=p(i),C(Y.$$.fragment,i),i.forEach(x),this.h()},h(){it(t,"class","govuk-width-container")},m(e,i){se(e,t,i),k(u,t,null),r(t,a),k(l,t,null),r(t,f),k(o,t,null),r(t,I),k($,t,null),r(t,H),k(v,t,null),r(t,K),k(y,t,null),r(t,s),k(_,t,null),r(t,F),k(N,t,null),r(t,d),k(m,t,null),r(t,ie),c&&c.m(t,null),r(t,ne),k(U,t,null),r(t,ue),k(V,t,null),r(t,oe),k(W,t,null),r(t,fe),k(Y,t,null),ae=!0},p(e,[i]){const qe={};!h&&i&1&&(h=!0,qe.value=e[0].summary.schemeReference,T(()=>h=!1)),u.$set(qe);const Te={};!R&&i&1&&(R=!0,Te.value=e[0].summary.schemeName,T(()=>R=!1)),l.$set(Te);const Oe={};!j&&i&1&&(j=!0,Oe.value=e[0].summary.schemeSummary,T(()=>j=!1)),o.$set(Oe);const je={};!z&&i&1&&(z=!0,je.value=e[0].summary.authority,T(()=>z=!1)),$.$set(je);const Ie={};!G&&i&1&&(G=!0,Ie.value=e[0].summary.transportOrCombinedAuthority,T(()=>G=!1)),v.$set(Ie);const He={};!B&&i&1&&(B=!0,He.value=e[0].summary.region,T(()=>B=!1)),y.$set(He);const Ke={};!D&&i&1&&(D=!0,Ke.value=e[0].summary.fundingProgramme,T(()=>D=!1)),_.$set(Ke);const Ne={};!J&&i&1&&(J=!0,Ne.value=e[0].summary.designStage,T(()=>J=!1)),N.$set(Ne);const Ae={};!A&&i&1&&(A=!0,Ae.value=e[0].summary.fundingConditions,T(()=>A=!1)),m.$set(Ae),e[1]?c?c.p(e,i):(c=Be(e),c.c(),c.m(t,ne)):c&&(c.d(1),c=null);const Ee={};!re&&i&1&&(re=!0,Ee.value=e[0].summary.assessedRouteLengthKm,T(()=>re=!1)),U.$set(Ee);const Pe={};!me&&i&1&&(me=!0,Pe.value=e[0].summary.totalRouteLengthKm,T(()=>me=!1)),V.$set(Pe);const De={};!le&&i&1&&(le=!0,De.value=e[0].summary.notes,T(()=>le=!1)),W.$set(De);const ge={};i&65536&&(ge.$$scope={dirty:i,ctx:e}),!pe&&i&1&&(pe=!0,ge.gj=e[0].summary.networkMap,T(()=>pe=!1)),Y.$set(ge)},i(e){ae||(S(u.$$.fragment,e),S(l.$$.fragment,e),S(o.$$.fragment,e),S($.$$.fragment,e),S(v.$$.fragment,e),S(y.$$.fragment,e),S(_.$$.fragment,e),S(N.$$.fragment,e),S(m.$$.fragment,e),S(U.$$.fragment,e),S(V.$$.fragment,e),S(W.$$.fragment,e),S(Y.$$.fragment,e),ae=!0)},o(e){L(u.$$.fragment,e),L(l.$$.fragment,e),L(o.$$.fragment,e),L($.$$.fragment,e),L(v.$$.fragment,e),L(y.$$.fragment,e),L(_.$$.fragment,e),L(N.$$.fragment,e),L(m.$$.fragment,e),L(U.$$.fragment,e),L(V.$$.fragment,e),L(W.$$.fragment,e),L(Y.$$.fragment,e),ae=!1},d(e){e&&x(t),w(u),w(l),w(o),w($),w(v),w(y),w(_),w(N),w(m),c&&c.d(),w(U),w(V),w(W),w(Y)}}}function bt(n,t,u){let h,a;rt(n,b,s=>u(0,a=s));function l(s){let _=0;for(let D of s.features)D.geometry.type=="LineString"&&(_+=lt(D,{units:"kilometers"}));return _>0?_:null}function R(s){n.$$.not_equal(a.summary.schemeReference,s)&&(a.summary.schemeReference=s,b.set(a))}function f(s){n.$$.not_equal(a.summary.schemeName,s)&&(a.summary.schemeName=s,b.set(a))}function o(s){n.$$.not_equal(a.summary.schemeSummary,s)&&(a.summary.schemeSummary=s,b.set(a))}function j(s){n.$$.not_equal(a.summary.authority,s)&&(a.summary.authority=s,b.set(a))}function I(s){n.$$.not_equal(a.summary.transportOrCombinedAuthority,s)&&(a.summary.transportOrCombinedAuthority=s,b.set(a))}function $(s){n.$$.not_equal(a.summary.region,s)&&(a.summary.region=s,b.set(a))}function z(s){n.$$.not_equal(a.summary.fundingProgramme,s)&&(a.summary.fundingProgramme=s,b.set(a))}function H(s){n.$$.not_equal(a.summary.designStage,s)&&(a.summary.designStage=s,b.set(a))}function v(s){n.$$.not_equal(a.summary.fundingConditions,s)&&(a.summary.fundingConditions=s,b.set(a))}function G(s){n.$$.not_equal(a.summary.assessedRouteLengthKm,s)&&(a.summary.assessedRouteLengthKm=s,b.set(a))}function K(s){n.$$.not_equal(a.summary.totalRouteLengthKm,s)&&(a.summary.totalRouteLengthKm=s,b.set(a))}function y(s){n.$$.not_equal(a.summary.notes,s)&&(a.summary.notes=s,b.set(a))}function B(s){n.$$.not_equal(a.summary.networkMap,s)&&(a.summary.networkMap=s,b.set(a))}return n.$$.update=()=>{n.$$.dirty&1&&u(1,h=l(a.summary.networkMap))},[a,h,R,f,o,j,I,$,z,H,v,G,K,y,B]}class Nt extends mt{constructor(t){super(),ot(this,t,bt,yt,st,{})}}export{Nt as component};
