import{s as dt,y as k,e as H,a as l,c as K,b as ae,g as f,f as Q,p as $t,i as ue,h as r,z as q,k as ct,t as ee,d as te,j as ht,m as Z}from"../chunks/scheduler.V-ByFQ7u.js";import{S as vt,i as yt,e as I,c,a as h,m as v,t as y,b,d as w}from"../chunks/index.Zcf2TLuh.js";import{p as ne}from"../chunks/index.I0X4_c7u.js";import{D as bt}from"../chunks/DecimalInput.B6i2WB_5.js";import{S as Xe}from"../chunks/Select.VGwORRsx.js";import{S as be,a as wt,t as St,r as Ct,f as kt,d as qt}from"../chunks/lists.C6NdIbdT.js";import{T as re}from"../chunks/TextArea.DEpFTjcM.js";import{T as we}from"../chunks/TextInput.DTVg4cyR.js";import{s as $}from"../chunks/data.C-laybyF.js";import"../chunks/index.YJBCjSZt.js";import{C as It}from"../chunks/ContextualMapEntry.BR4VzD2F.js";import{t as Lt}from"../chunks/index.QoeAWPRM.js";import{D as Mt}from"../chunks/DateInput.DGXJnPZ6.js";import{E as Rt}from"../chunks/ExternalLink.DGM-u6hq.js";function Ze(n){let t,u,_,a=(n[1]*1e-6).toFixed(2)+"",p,E;return{c(){t=H("p"),u=ee("Polygons in the Network Map cover a total of "),_=H("b"),p=ee(a),E=ee(`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`)},l(g){t=K(g,"P",{});var o=ae(t);u=te(o,"Polygons in the Network Map cover a total of "),_=K(o,"B",{});var O=ae(_);p=te(O,a),O.forEach(Q),E=te(o,`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`),o.forEach(Q)},m(g,o){ue(g,t,o),r(t,u),r(t,_),r(_,p),r(t,E)},p(g,o){o&2&&a!==(a=(g[1]*1e-6).toFixed(2)+"")&&ht(p,a)},d(g){g&&Q(t)}}}function At(n){let t;return{c(){t=ee("Scheme Sketcher")},l(u){t=te(u,"Scheme Sketcher")},m(u,_){ue(u,t,_)},d(u){u&&Q(t)}}}function Dt(n){let t,u,_,a,p,E,g,o="Choose the area best covering this scheme",O,P,L=`Use the <i>New polygon</i>
        tools (freehand or snapped) to sketch the area.`,F,T,M="Optionally, include more point and route details.",x,j,R=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,G,N,A=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,i,D,S="Load the saved file above",X;return a=new Rt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[At]},$$scope:{ctx:n}}}),{c(){t=H("ol"),u=H("li"),_=ee("Go to the "),c(a.$$.fragment),p=ee(" tool"),E=l(),g=H("li"),g.textContent=o,O=l(),P=H("li"),P.innerHTML=L,F=l(),T=H("li"),T.textContent=M,x=l(),j=H("li"),j.innerHTML=R,G=l(),N=H("li"),N.innerHTML=A,i=l(),D=H("li"),D.textContent=S},l(C){t=K(C,"OL",{});var m=ae(t);u=K(m,"LI",{});var z=ae(u);_=te(z,"Go to the "),h(a.$$.fragment,z),p=te(z," tool"),z.forEach(Q),E=f(m),g=K(m,"LI",{"data-svelte-h":!0}),Z(g)!=="svelte-aj705b"&&(g.textContent=o),O=f(m),P=K(m,"LI",{"data-svelte-h":!0}),Z(P)!=="svelte-185cfyh"&&(P.innerHTML=L),F=f(m),T=K(m,"LI",{"data-svelte-h":!0}),Z(T)!=="svelte-14ytbn2"&&(T.textContent=M),x=f(m),j=K(m,"LI",{"data-svelte-h":!0}),Z(j)!=="svelte-1r1ljcj"&&(j.innerHTML=R),G=f(m),N=K(m,"LI",{"data-svelte-h":!0}),Z(N)!=="svelte-sz4wlr"&&(N.innerHTML=A),i=f(m),D=K(m,"LI",{"data-svelte-h":!0}),Z(D)!=="svelte-x3zkxb"&&(D.textContent=S),m.forEach(Q)},m(C,m){ue(C,t,m),r(t,u),r(u,_),v(a,u,null),r(u,p),r(t,E),r(t,g),r(t,O),r(t,P),r(t,F),r(t,T),r(t,x),r(t,j),r(t,G),r(t,N),r(t,i),r(t,D),X=!0},p(C,m){const z={};m&262144&&(z.$$scope={dirty:m,ctx:C}),a.$set(z)},i(C){X||(y(a.$$.fragment,C),X=!0)},o(C){b(a.$$.fragment,C),X=!1},d(C){C&&Q(t),w(a)}}}function Et(n){let t,u,_,a,p,E,g,o,O,P,L,F,T,M,x,j,R,G,N,A,i,D,S,X,C,m,z,me,B,oe,le,U,fe,pe,V,ge,_e,ie,W,de,$e,Y,ce,he,J,ve,se;function et(e){n[2](e)}let Se={label:"Date of design review"};n[0].summary.dateDesignReview!==void 0&&(Se.value=n[0].summary.dateDesignReview),u=new Mt({props:Se}),k.push(()=>I(u,"value",et));function tt(e){n[3](e)}let Ce={label:"Scheme reference"};n[0].summary.schemeReference!==void 0&&(Ce.value=n[0].summary.schemeReference),p=new we({props:Ce}),k.push(()=>I(p,"value",tt));function nt(e){n[4](e)}let ke={label:"Scheme name"};n[0].summary.schemeName!==void 0&&(ke.value=n[0].summary.schemeName),o=new we({props:ke}),k.push(()=>I(o,"value",nt));function at(e){n[5](e)}let qe={label:"Scheme summary"};n[0].summary.schemeSummary!==void 0&&(qe.value=n[0].summary.schemeSummary),L=new re({props:qe}),k.push(()=>I(L,"value",at));function it(e){n[6](e)}let Ie={label:"Scheme information reviewed"};n[0].summary.schemeInfoReviewed!==void 0&&(Ie.value=n[0].summary.schemeInfoReviewed),M=new re({props:Ie}),k.push(()=>I(M,"value",it));function st(e){n[7](e)}let Le={label:"Authority",emptyOption:!0,choices:ne(wt)};n[0].summary.authority!==void 0&&(Le.value=n[0].summary.authority),R=new Xe({props:Le}),k.push(()=>I(R,"value",st));function rt(e){n[8](e)}let Me={label:"Transport / Combined Authority",emptyOption:!0,choices:ne(St)};n[0].summary.transportOrCombinedAuthority!==void 0&&(Me.value=n[0].summary.transportOrCombinedAuthority),A=new Xe({props:Me}),k.push(()=>I(A,"value",rt));function ut(e){n[9](e)}let Re={label:"Region",emptyOption:!0,choices:ne(Ct)};n[0].summary.region!==void 0&&(Re.value=n[0].summary.region),S=new be({props:Re}),k.push(()=>I(S,"value",ut));function mt(e){n[10](e)}let Ae={label:"Funding programme",emptyOption:!0,choices:ne(kt)};n[0].summary.fundingProgramme!==void 0&&(Ae.value=n[0].summary.fundingProgramme),m=new be({props:Ae}),k.push(()=>I(m,"value",mt));function ot(e){n[11](e)}let De={label:"Design stage",emptyOption:!0,choices:ne(qt)};n[0].summary.designStage!==void 0&&(De.value=n[0].summary.designStage),B=new be({props:De}),k.push(()=>I(B,"value",ot));function lt(e){n[12](e)}let Ee={label:"Funding conditions"};n[0].summary.fundingConditions!==void 0&&(Ee.value=n[0].summary.fundingConditions),U=new re({props:Ee}),k.push(()=>I(U,"value",lt));function ft(e){n[13](e)}let Oe={label:"Inspector email address"};n[0].summary.inspectorEmail!==void 0&&(Oe.value=n[0].summary.inspectorEmail),V=new we({props:Oe}),k.push(()=>I(V,"value",ft));let d=n[1]&&Ze(n);function pt(e){n[14](e)}let Pe={label:"Scheme area size (km²)",width:6,min:0};n[0].summary.schemeAreaSizeKm2!==void 0&&(Pe.value=n[0].summary.schemeAreaSizeKm2),W=new bt({props:Pe}),k.push(()=>I(W,"value",pt));function gt(e){n[15](e)}let Te={label:"Notes"};n[0].summary.notes!==void 0&&(Te.value=n[0].summary.notes),Y=new re({props:Te}),k.push(()=>I(Y,"value",gt));function _t(e){n[16](e)}let je={$$slots:{default:[Dt]},$$scope:{ctx:n}};return n[0].summary.networkMap!==void 0&&(je.gj=n[0].summary.networkMap),J=new It({props:je}),k.push(()=>I(J,"gj",_t)),{c(){t=H("div"),c(u.$$.fragment),a=l(),c(p.$$.fragment),g=l(),c(o.$$.fragment),P=l(),c(L.$$.fragment),T=l(),c(M.$$.fragment),j=l(),c(R.$$.fragment),N=l(),c(A.$$.fragment),D=l(),c(S.$$.fragment),C=l(),c(m.$$.fragment),me=l(),c(B.$$.fragment),le=l(),c(U.$$.fragment),pe=l(),c(V.$$.fragment),_e=l(),d&&d.c(),ie=l(),c(W.$$.fragment),$e=l(),c(Y.$$.fragment),he=l(),c(J.$$.fragment),this.h()},l(e){t=K(e,"DIV",{class:!0});var s=ae(t);h(u.$$.fragment,s),a=f(s),h(p.$$.fragment,s),g=f(s),h(o.$$.fragment,s),P=f(s),h(L.$$.fragment,s),T=f(s),h(M.$$.fragment,s),j=f(s),h(R.$$.fragment,s),N=f(s),h(A.$$.fragment,s),D=f(s),h(S.$$.fragment,s),C=f(s),h(m.$$.fragment,s),me=f(s),h(B.$$.fragment,s),le=f(s),h(U.$$.fragment,s),pe=f(s),h(V.$$.fragment,s),_e=f(s),d&&d.l(s),ie=f(s),h(W.$$.fragment,s),$e=f(s),h(Y.$$.fragment,s),he=f(s),h(J.$$.fragment,s),s.forEach(Q),this.h()},h(){$t(t,"class","govuk-width-container")},m(e,s){ue(e,t,s),v(u,t,null),r(t,a),v(p,t,null),r(t,g),v(o,t,null),r(t,P),v(L,t,null),r(t,T),v(M,t,null),r(t,j),v(R,t,null),r(t,N),v(A,t,null),r(t,D),v(S,t,null),r(t,C),v(m,t,null),r(t,me),v(B,t,null),r(t,le),v(U,t,null),r(t,pe),v(V,t,null),r(t,_e),d&&d.m(t,null),r(t,ie),v(W,t,null),r(t,$e),v(Y,t,null),r(t,he),v(J,t,null),se=!0},p(e,[s]){const Ne={};!_&&s&1&&(_=!0,Ne.value=e[0].summary.dateDesignReview,q(()=>_=!1)),u.$set(Ne);const ze={};!E&&s&1&&(E=!0,ze.value=e[0].summary.schemeReference,q(()=>E=!1)),p.$set(ze);const He={};!O&&s&1&&(O=!0,He.value=e[0].summary.schemeName,q(()=>O=!1)),o.$set(He);const Ke={};!F&&s&1&&(F=!0,Ke.value=e[0].summary.schemeSummary,q(()=>F=!1)),L.$set(Ke);const Fe={};!x&&s&1&&(x=!0,Fe.value=e[0].summary.schemeInfoReviewed,q(()=>x=!1)),M.$set(Fe);const xe={};!G&&s&1&&(G=!0,xe.value=e[0].summary.authority,q(()=>G=!1)),R.$set(xe);const Ge={};!i&&s&1&&(i=!0,Ge.value=e[0].summary.transportOrCombinedAuthority,q(()=>i=!1)),A.$set(Ge);const Be={};!X&&s&1&&(X=!0,Be.value=e[0].summary.region,q(()=>X=!1)),S.$set(Be);const Ue={};!z&&s&1&&(z=!0,Ue.value=e[0].summary.fundingProgramme,q(()=>z=!1)),m.$set(Ue);const Ve={};!oe&&s&1&&(oe=!0,Ve.value=e[0].summary.designStage,q(()=>oe=!1)),B.$set(Ve);const We={};!fe&&s&1&&(fe=!0,We.value=e[0].summary.fundingConditions,q(()=>fe=!1)),U.$set(We);const Ye={};!ge&&s&1&&(ge=!0,Ye.value=e[0].summary.inspectorEmail,q(()=>ge=!1)),V.$set(Ye),e[1]?d?d.p(e,s):(d=Ze(e),d.c(),d.m(t,ie)):d&&(d.d(1),d=null);const Je={};!de&&s&1&&(de=!0,Je.value=e[0].summary.schemeAreaSizeKm2,q(()=>de=!1)),W.$set(Je);const Qe={};!ce&&s&1&&(ce=!0,Qe.value=e[0].summary.notes,q(()=>ce=!1)),Y.$set(Qe);const ye={};s&262144&&(ye.$$scope={dirty:s,ctx:e}),!ve&&s&1&&(ve=!0,ye.gj=e[0].summary.networkMap,q(()=>ve=!1)),J.$set(ye)},i(e){se||(y(u.$$.fragment,e),y(p.$$.fragment,e),y(o.$$.fragment,e),y(L.$$.fragment,e),y(M.$$.fragment,e),y(R.$$.fragment,e),y(A.$$.fragment,e),y(S.$$.fragment,e),y(m.$$.fragment,e),y(B.$$.fragment,e),y(U.$$.fragment,e),y(V.$$.fragment,e),y(W.$$.fragment,e),y(Y.$$.fragment,e),y(J.$$.fragment,e),se=!0)},o(e){b(u.$$.fragment,e),b(p.$$.fragment,e),b(o.$$.fragment,e),b(L.$$.fragment,e),b(M.$$.fragment,e),b(R.$$.fragment,e),b(A.$$.fragment,e),b(S.$$.fragment,e),b(m.$$.fragment,e),b(B.$$.fragment,e),b(U.$$.fragment,e),b(V.$$.fragment,e),b(W.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),se=!1},d(e){e&&Q(t),w(u),w(p),w(o),w(L),w(M),w(R),w(A),w(S),w(m),w(B),w(U),w(V),d&&d.d(),w(W),w(Y),w(J)}}}function Ot(n,t,u){let _,a;ct(n,$,i=>u(0,a=i));function p(i){let D=0;for(let S of i.features)S.geometry.type=="Polygon"&&(D+=Lt(S));return D>0?D:null}function E(i){n.$$.not_equal(a.summary.dateDesignReview,i)&&(a.summary.dateDesignReview=i,$.set(a))}function g(i){n.$$.not_equal(a.summary.schemeReference,i)&&(a.summary.schemeReference=i,$.set(a))}function o(i){n.$$.not_equal(a.summary.schemeName,i)&&(a.summary.schemeName=i,$.set(a))}function O(i){n.$$.not_equal(a.summary.schemeSummary,i)&&(a.summary.schemeSummary=i,$.set(a))}function P(i){n.$$.not_equal(a.summary.schemeInfoReviewed,i)&&(a.summary.schemeInfoReviewed=i,$.set(a))}function L(i){n.$$.not_equal(a.summary.authority,i)&&(a.summary.authority=i,$.set(a))}function F(i){n.$$.not_equal(a.summary.transportOrCombinedAuthority,i)&&(a.summary.transportOrCombinedAuthority=i,$.set(a))}function T(i){n.$$.not_equal(a.summary.region,i)&&(a.summary.region=i,$.set(a))}function M(i){n.$$.not_equal(a.summary.fundingProgramme,i)&&(a.summary.fundingProgramme=i,$.set(a))}function x(i){n.$$.not_equal(a.summary.designStage,i)&&(a.summary.designStage=i,$.set(a))}function j(i){n.$$.not_equal(a.summary.fundingConditions,i)&&(a.summary.fundingConditions=i,$.set(a))}function R(i){n.$$.not_equal(a.summary.inspectorEmail,i)&&(a.summary.inspectorEmail=i,$.set(a))}function G(i){n.$$.not_equal(a.summary.schemeAreaSizeKm2,i)&&(a.summary.schemeAreaSizeKm2=i,$.set(a))}function N(i){n.$$.not_equal(a.summary.notes,i)&&(a.summary.notes=i,$.set(a))}function A(i){n.$$.not_equal(a.summary.networkMap,i)&&(a.summary.networkMap=i,$.set(a))}return n.$$.update=()=>{n.$$.dirty&1&&u(1,_=p(a.summary.networkMap))},[a,_,E,g,o,O,P,L,F,T,M,x,j,R,G,N,A]}class Yt extends vt{constructor(t){super(),yt(this,t,Ot,Et,dt,{})}}export{Yt as component};
