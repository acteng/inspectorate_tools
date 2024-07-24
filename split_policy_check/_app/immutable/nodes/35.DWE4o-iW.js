import{s as st,w as q,e as E,a as p,c as P,b as te,g,f as Y,p as it,i as se,h as r,x as T,k as rt,t as X,d as Z,j as ut,m as Q}from"../chunks/scheduler.ytQcc2rf.js";import{S as mt,i as ot,e as O,c as w,a as L,m as S,t as k,b as C,d as M}from"../chunks/index.D9yYtTfk.js";import{p as ee}from"../chunks/index.DirODZJo.js";import{D as Fe}from"../chunks/DecimalInput.CKisJWfl.js";import{S as ze}from"../chunks/Select.BzX3N09F.js";import{S as he,C as lt,a as ft,t as pt,r as gt,f as ht,d as _t}from"../chunks/ContextualMapEntry.D7fGw_jb.js";import{T as _e}from"../chunks/TextArea.CtGDg2p0.js";import{T as Ge}from"../chunks/TextInput.6W_uhnqP.js";import{s as b}from"../chunks/data.DDN3bPuX.js";import"../chunks/index.zgbzr8dD.js";import{t as ct}from"../chunks/index.CucRQIdS.js";import{E as dt}from"../chunks/ExternalLink.BPBlKSFO.js";function xe(n){let t,u,h,a=n[1].toFixed(2)+"",l,R;return{c(){t=E("p"),u=X("LineStrings in the Network Map cover a total of "),h=E("b"),l=X(a),R=X(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(f){t=P(f,"P",{});var o=te(t);u=Z(o,"LineStrings in the Network Map cover a total of "),h=P(o,"B",{});var j=te(h);l=Z(j,a),j.forEach(Y),R=Z(o,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),o.forEach(Y)},m(f,o){se(f,t,o),r(t,u),r(t,h),r(h,l),r(t,R)},p(f,o){o&2&&a!==(a=f[1].toFixed(2)+"")&&ut(l,a)},d(f){f&&Y(t)}}}function $t(n){let t;return{c(){t=X("Scheme Sketcher")},l(u){t=Z(u,"Scheme Sketcher")},m(u,h){se(u,t,h)},d(u){u&&Y(t)}}}function vt(n){let t,u,h,a,l,R,f,o="Choose the area best covering this scheme",j,I,$=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,z,H,v=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,G,K,y=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,x,s,_=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,D,F,N="Load the saved file above",J;return a=new dt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[$t]},$$scope:{ctx:n}}}),{c(){t=E("ol"),u=E("li"),h=X("Go to the "),w(a.$$.fragment),l=X(" tool"),R=p(),f=E("li"),f.textContent=o,j=p(),I=E("li"),I.innerHTML=$,z=p(),H=E("li"),H.innerHTML=v,G=p(),K=E("li"),K.innerHTML=y,x=p(),s=E("li"),s.innerHTML=_,D=p(),F=E("li"),F.textContent=N},l(d){t=P(d,"OL",{});var m=te(t);u=P(m,"LI",{});var A=te(u);h=Z(A,"Go to the "),L(a.$$.fragment,A),l=Z(A," tool"),A.forEach(Y),R=g(m),f=P(m,"LI",{"data-svelte-h":!0}),Q(f)!=="svelte-aj705b"&&(f.textContent=o),j=g(m),I=P(m,"LI",{"data-svelte-h":!0}),Q(I)!=="svelte-1vb2muj"&&(I.innerHTML=$),z=g(m),H=P(m,"LI",{"data-svelte-h":!0}),Q(H)!=="svelte-3xdyru"&&(H.innerHTML=v),G=g(m),K=P(m,"LI",{"data-svelte-h":!0}),Q(K)!=="svelte-1r1ljcj"&&(K.innerHTML=y),x=g(m),s=P(m,"LI",{"data-svelte-h":!0}),Q(s)!=="svelte-sz4wlr"&&(s.innerHTML=_),D=g(m),F=P(m,"LI",{"data-svelte-h":!0}),Q(F)!=="svelte-x3zkxb"&&(F.textContent=N),m.forEach(Y)},m(d,m){se(d,t,m),r(t,u),r(u,h),S(a,u,null),r(u,l),r(t,R),r(t,f),r(t,j),r(t,I),r(t,z),r(t,H),r(t,G),r(t,K),r(t,x),r(t,s),r(t,D),r(t,F),J=!0},p(d,m){const A={};m&65536&&(A.$$scope={dirty:m,ctx:d}),a.$set(A)},i(d){J||(k(a.$$.fragment,d),J=!0)},o(d){C(a.$$.fragment,d),J=!1},d(d){d&&Y(t),M(a)}}}function yt(n){let t,u,h,a,l,R,f,o,j,I,$,z,H,v,G,K,y,x,s,_,D,F,N,J,d,m,A,ie,ne,B,re,ue,U,me,oe,V,le,fe,W,pe,ae;function Be(e){n[2](e)}let ce={label:"Scheme reference"};n[0].summary.schemeReference!==void 0&&(ce.value=n[0].summary.schemeReference),u=new Ge({props:ce}),q.push(()=>O(u,"value",Be));function Ue(e){n[3](e)}let de={label:"Scheme name"};n[0].summary.schemeName!==void 0&&(de.value=n[0].summary.schemeName),l=new Ge({props:de}),q.push(()=>O(l,"value",Ue));function Ve(e){n[4](e)}let $e={label:"Scheme summary"};n[0].summary.schemeSummary!==void 0&&($e.value=n[0].summary.schemeSummary),o=new _e({props:$e}),q.push(()=>O(o,"value",Ve));function We(e){n[5](e)}let ve={label:"Authority",emptyOption:!0,choices:ee(ft)};n[0].summary.authority!==void 0&&(ve.value=n[0].summary.authority),$=new ze({props:ve}),q.push(()=>O($,"value",We));function Ye(e){n[6](e)}let ye={label:"Transport / Combined Authority",emptyOption:!0,choices:ee(pt)};n[0].summary.transportOrCombinedAuthority!==void 0&&(ye.value=n[0].summary.transportOrCombinedAuthority),v=new ze({props:ye}),q.push(()=>O(v,"value",Ye));function Je(e){n[7](e)}let be={label:"Region",emptyOption:!0,choices:ee(gt)};n[0].summary.region!==void 0&&(be.value=n[0].summary.region),y=new he({props:be}),q.push(()=>O(y,"value",Je));function Qe(e){n[8](e)}let we={label:"Funding programme",emptyOption:!0,choices:ee(ht)};n[0].summary.fundingProgramme!==void 0&&(we.value=n[0].summary.fundingProgramme),_=new he({props:we}),q.push(()=>O(_,"value",Qe));function Xe(e){n[9](e)}let Le={label:"Design stage",emptyOption:!0,choices:ee(_t)};n[0].summary.designStage!==void 0&&(Le.value=n[0].summary.designStage),N=new he({props:Le}),q.push(()=>O(N,"value",Xe));function Ze(e){n[10](e)}let Se={label:"Funding conditions"};n[0].summary.fundingConditions!==void 0&&(Se.value=n[0].summary.fundingConditions),m=new _e({props:Se}),q.push(()=>O(m,"value",Ze));let c=n[1]&&xe(n);function et(e){n[11](e)}let ke={label:"Route length assessed here (km)",width:6,min:0};n[0].summary.assessedRouteLengthKm!==void 0&&(ke.value=n[0].summary.assessedRouteLengthKm),B=new Fe({props:ke}),q.push(()=>O(B,"value",et));function tt(e){n[12](e)}let Ce={label:"Total route length (km)",width:6,min:0};n[0].summary.totalRouteLengthKm!==void 0&&(Ce.value=n[0].summary.totalRouteLengthKm),U=new Fe({props:Ce}),q.push(()=>O(U,"value",tt));function nt(e){n[13](e)}let Me={label:"Notes"};n[0].summary.notes!==void 0&&(Me.value=n[0].summary.notes),V=new _e({props:Me}),q.push(()=>O(V,"value",nt));function at(e){n[14](e)}let Re={$$slots:{default:[vt]},$$scope:{ctx:n}};return n[0].summary.networkMap!==void 0&&(Re.gj=n[0].summary.networkMap),W=new lt({props:Re}),q.push(()=>O(W,"gj",at)),{c(){t=E("div"),w(u.$$.fragment),a=p(),w(l.$$.fragment),f=p(),w(o.$$.fragment),I=p(),w($.$$.fragment),H=p(),w(v.$$.fragment),K=p(),w(y.$$.fragment),s=p(),w(_.$$.fragment),F=p(),w(N.$$.fragment),d=p(),w(m.$$.fragment),ie=p(),c&&c.c(),ne=p(),w(B.$$.fragment),ue=p(),w(U.$$.fragment),oe=p(),w(V.$$.fragment),fe=p(),w(W.$$.fragment),this.h()},l(e){t=P(e,"DIV",{class:!0});var i=te(t);L(u.$$.fragment,i),a=g(i),L(l.$$.fragment,i),f=g(i),L(o.$$.fragment,i),I=g(i),L($.$$.fragment,i),H=g(i),L(v.$$.fragment,i),K=g(i),L(y.$$.fragment,i),s=g(i),L(_.$$.fragment,i),F=g(i),L(N.$$.fragment,i),d=g(i),L(m.$$.fragment,i),ie=g(i),c&&c.l(i),ne=g(i),L(B.$$.fragment,i),ue=g(i),L(U.$$.fragment,i),oe=g(i),L(V.$$.fragment,i),fe=g(i),L(W.$$.fragment,i),i.forEach(Y),this.h()},h(){it(t,"class","govuk-width-container")},m(e,i){se(e,t,i),S(u,t,null),r(t,a),S(l,t,null),r(t,f),S(o,t,null),r(t,I),S($,t,null),r(t,H),S(v,t,null),r(t,K),S(y,t,null),r(t,s),S(_,t,null),r(t,F),S(N,t,null),r(t,d),S(m,t,null),r(t,ie),c&&c.m(t,null),r(t,ne),S(B,t,null),r(t,ue),S(U,t,null),r(t,oe),S(V,t,null),r(t,fe),S(W,t,null),ae=!0},p(e,[i]){const qe={};!h&&i&1&&(h=!0,qe.value=e[0].summary.schemeReference,T(()=>h=!1)),u.$set(qe);const Te={};!R&&i&1&&(R=!0,Te.value=e[0].summary.schemeName,T(()=>R=!1)),l.$set(Te);const Oe={};!j&&i&1&&(j=!0,Oe.value=e[0].summary.schemeSummary,T(()=>j=!1)),o.$set(Oe);const je={};!z&&i&1&&(z=!0,je.value=e[0].summary.authority,T(()=>z=!1)),$.$set(je);const Ie={};!G&&i&1&&(G=!0,Ie.value=e[0].summary.transportOrCombinedAuthority,T(()=>G=!1)),v.$set(Ie);const He={};!x&&i&1&&(x=!0,He.value=e[0].summary.region,T(()=>x=!1)),y.$set(He);const Ke={};!D&&i&1&&(D=!0,Ke.value=e[0].summary.fundingProgramme,T(()=>D=!1)),_.$set(Ke);const Ne={};!J&&i&1&&(J=!0,Ne.value=e[0].summary.designStage,T(()=>J=!1)),N.$set(Ne);const Ae={};!A&&i&1&&(A=!0,Ae.value=e[0].summary.fundingConditions,T(()=>A=!1)),m.$set(Ae),e[1]?c?c.p(e,i):(c=xe(e),c.c(),c.m(t,ne)):c&&(c.d(1),c=null);const Ee={};!re&&i&1&&(re=!0,Ee.value=e[0].summary.assessedRouteLengthKm,T(()=>re=!1)),B.$set(Ee);const Pe={};!me&&i&1&&(me=!0,Pe.value=e[0].summary.totalRouteLengthKm,T(()=>me=!1)),U.$set(Pe);const De={};!le&&i&1&&(le=!0,De.value=e[0].summary.notes,T(()=>le=!1)),V.$set(De);const ge={};i&65536&&(ge.$$scope={dirty:i,ctx:e}),!pe&&i&1&&(pe=!0,ge.gj=e[0].summary.networkMap,T(()=>pe=!1)),W.$set(ge)},i(e){ae||(k(u.$$.fragment,e),k(l.$$.fragment,e),k(o.$$.fragment,e),k($.$$.fragment,e),k(v.$$.fragment,e),k(y.$$.fragment,e),k(_.$$.fragment,e),k(N.$$.fragment,e),k(m.$$.fragment,e),k(B.$$.fragment,e),k(U.$$.fragment,e),k(V.$$.fragment,e),k(W.$$.fragment,e),ae=!0)},o(e){C(u.$$.fragment,e),C(l.$$.fragment,e),C(o.$$.fragment,e),C($.$$.fragment,e),C(v.$$.fragment,e),C(y.$$.fragment,e),C(_.$$.fragment,e),C(N.$$.fragment,e),C(m.$$.fragment,e),C(B.$$.fragment,e),C(U.$$.fragment,e),C(V.$$.fragment,e),C(W.$$.fragment,e),ae=!1},d(e){e&&Y(t),M(u),M(l),M(o),M($),M(v),M(y),M(_),M(N),M(m),c&&c.d(),M(B),M(U),M(V),M(W)}}}function bt(n,t,u){let h,a;rt(n,b,s=>u(0,a=s));function l(s){let _=0;for(let D of s.features)D.geometry.type=="LineString"&&(_+=ct(D,{units:"kilometers"}));return _>0?_:null}function R(s){n.$$.not_equal(a.summary.schemeReference,s)&&(a.summary.schemeReference=s,b.set(a))}function f(s){n.$$.not_equal(a.summary.schemeName,s)&&(a.summary.schemeName=s,b.set(a))}function o(s){n.$$.not_equal(a.summary.schemeSummary,s)&&(a.summary.schemeSummary=s,b.set(a))}function j(s){n.$$.not_equal(a.summary.authority,s)&&(a.summary.authority=s,b.set(a))}function I(s){n.$$.not_equal(a.summary.transportOrCombinedAuthority,s)&&(a.summary.transportOrCombinedAuthority=s,b.set(a))}function $(s){n.$$.not_equal(a.summary.region,s)&&(a.summary.region=s,b.set(a))}function z(s){n.$$.not_equal(a.summary.fundingProgramme,s)&&(a.summary.fundingProgramme=s,b.set(a))}function H(s){n.$$.not_equal(a.summary.designStage,s)&&(a.summary.designStage=s,b.set(a))}function v(s){n.$$.not_equal(a.summary.fundingConditions,s)&&(a.summary.fundingConditions=s,b.set(a))}function G(s){n.$$.not_equal(a.summary.assessedRouteLengthKm,s)&&(a.summary.assessedRouteLengthKm=s,b.set(a))}function K(s){n.$$.not_equal(a.summary.totalRouteLengthKm,s)&&(a.summary.totalRouteLengthKm=s,b.set(a))}function y(s){n.$$.not_equal(a.summary.notes,s)&&(a.summary.notes=s,b.set(a))}function x(s){n.$$.not_equal(a.summary.networkMap,s)&&(a.summary.networkMap=s,b.set(a))}return n.$$.update=()=>{n.$$.dirty&1&&u(1,h=l(a.summary.networkMap))},[a,h,R,f,o,j,I,$,z,H,v,G,K,y,x]}class Ht extends mt{constructor(t){super(),ot(this,t,bt,yt,st,{})}}export{Ht as component};
