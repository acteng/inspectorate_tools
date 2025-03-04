import{s as dt,r as k,e as H,a as l,c as K,b as ne,g as f,f as Q,q as ct,i as ue,h as r,w as q,k as $t,t as ee,d as te,j as ht,p as Z}from"../chunks/scheduler.B5FfXhnD.js";import{S as vt,i as yt,e as I,c as $,a as h,m as v,t as y,b,d as w}from"../chunks/index.VeCIHQiF.js";import{p as se}from"../chunks/index.ZMhkFQER.js";import{D as bt}from"../chunks/DecimalInput.B-6ZOTEl.js";import"../chunks/index.Ce7_-dQb.js";import{S as Xe}from"../chunks/Select.DgH-EWbx.js";import{S as be,C as wt}from"../chunks/ContextualMapEntry.Dy0zHD8o.js";import{T as re}from"../chunks/TextArea.DpC7QtEk.js";import{T as we}from"../chunks/TextInput.31-z-4CI.js";import{s as c}from"../chunks/data.NaJOSKMT.js";import{a as St,t as Ct,r as kt,f as qt,d as It}from"../chunks/lists.BAnfL2H6.js";import"../chunks/index.u-SK-xgB.js";import{t as Lt}from"../chunks/index.VMgRwpMB.js";import{D as Mt}from"../chunks/DateInput.K6Gd2SvZ.js";import{E as Rt}from"../chunks/ExternalLink.BWcnpmhn.js";function Ze(t){let n,u,_,a=(t[1]*1e-6).toFixed(2)+"",p,E;return{c(){n=H("p"),u=ee("Polygons in the Network Map cover a total of "),_=H("b"),p=ee(a),E=ee(`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`)},l(g){n=K(g,"P",{});var o=ne(n);u=te(o,"Polygons in the Network Map cover a total of "),_=K(o,"B",{});var O=ne(_);p=te(O,a),O.forEach(Q),E=te(o,`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`),o.forEach(Q)},m(g,o){ue(g,n,o),r(n,u),r(n,_),r(_,p),r(n,E)},p(g,o){o&2&&a!==(a=(g[1]*1e-6).toFixed(2)+"")&&ht(p,a)},d(g){g&&Q(n)}}}function At(t){let n;return{c(){n=ee("Scheme Sketcher")},l(u){n=te(u,"Scheme Sketcher")},m(u,_){ue(u,n,_)},d(u){u&&Q(n)}}}function Dt(t){let n,u,_,a,p,E,g,o="Choose the area best covering this scheme",O,P,L=`Use the <i>New polygon</i>
        tools (freehand or snapped) to sketch the area.`,F,T,M="Optionally, include more point and route details.",x,j,R=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,G,N,A=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,i,D,S="Load the saved file above",X;return a=new Rt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){n=H("ol"),u=H("li"),_=ee("Go to the "),$(a.$$.fragment),p=ee(" tool"),E=l(),g=H("li"),g.textContent=o,O=l(),P=H("li"),P.innerHTML=L,F=l(),T=H("li"),T.textContent=M,x=l(),j=H("li"),j.innerHTML=R,G=l(),N=H("li"),N.innerHTML=A,i=l(),D=H("li"),D.textContent=S},l(C){n=K(C,"OL",{});var m=ne(n);u=K(m,"LI",{});var z=ne(u);_=te(z,"Go to the "),h(a.$$.fragment,z),p=te(z," tool"),z.forEach(Q),E=f(m),g=K(m,"LI",{"data-svelte-h":!0}),Z(g)!=="svelte-aj705b"&&(g.textContent=o),O=f(m),P=K(m,"LI",{"data-svelte-h":!0}),Z(P)!=="svelte-185cfyh"&&(P.innerHTML=L),F=f(m),T=K(m,"LI",{"data-svelte-h":!0}),Z(T)!=="svelte-14ytbn2"&&(T.textContent=M),x=f(m),j=K(m,"LI",{"data-svelte-h":!0}),Z(j)!=="svelte-1r1ljcj"&&(j.innerHTML=R),G=f(m),N=K(m,"LI",{"data-svelte-h":!0}),Z(N)!=="svelte-sz4wlr"&&(N.innerHTML=A),i=f(m),D=K(m,"LI",{"data-svelte-h":!0}),Z(D)!=="svelte-x3zkxb"&&(D.textContent=S),m.forEach(Q)},m(C,m){ue(C,n,m),r(n,u),r(u,_),v(a,u,null),r(u,p),r(n,E),r(n,g),r(n,O),r(n,P),r(n,F),r(n,T),r(n,x),r(n,j),r(n,G),r(n,N),r(n,i),r(n,D),X=!0},p(C,m){const z={};m&262144&&(z.$$scope={dirty:m,ctx:C}),a.$set(z)},i(C){X||(y(a.$$.fragment,C),X=!0)},o(C){b(a.$$.fragment,C),X=!1},d(C){C&&Q(n),w(a)}}}function Et(t){let n,u,_,a,p,E,g,o,O,P,L,F,T,M,x,j,R,G,N,A,i,D,S,X,C,m,z,me,B,oe,le,U,fe,pe,V,ge,_e,ae,W,de,ce,Y,$e,he,J,ve,ie;function et(e){t[2](e)}let Se={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(Se.value=t[0].summary.dateDesignReview),u=new Mt({props:Se}),k.push(()=>I(u,"value",et));function tt(e){t[3](e)}let Ce={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(Ce.value=t[0].summary.schemeReference),p=new we({props:Ce}),k.push(()=>I(p,"value",tt));function nt(e){t[4](e)}let ke={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(ke.value=t[0].summary.schemeName),o=new we({props:ke}),k.push(()=>I(o,"value",nt));function at(e){t[5](e)}let qe={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(qe.value=t[0].summary.schemeSummary),L=new re({props:qe}),k.push(()=>I(L,"value",at));function it(e){t[6](e)}let Ie={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Ie.value=t[0].summary.schemeInfoReviewed),M=new re({props:Ie}),k.push(()=>I(M,"value",it));function st(e){t[7](e)}let Le={label:"Authority",emptyOption:!0,choices:St.map(Ot)};t[0].summary.authority!==void 0&&(Le.value=t[0].summary.authority),R=new Xe({props:Le}),k.push(()=>I(R,"value",st));function rt(e){t[8](e)}let Me={label:"Transport / Combined Authority",emptyOption:!0,choices:se(Ct)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Me.value=t[0].summary.transportOrCombinedAuthority),A=new Xe({props:Me}),k.push(()=>I(A,"value",rt));function ut(e){t[9](e)}let Re={label:"Region",emptyOption:!0,choices:se(kt)};t[0].summary.region!==void 0&&(Re.value=t[0].summary.region),S=new be({props:Re}),k.push(()=>I(S,"value",ut));function mt(e){t[10](e)}let Ae={label:"Funding programme",emptyOption:!0,choices:se(qt)};t[0].summary.fundingProgramme!==void 0&&(Ae.value=t[0].summary.fundingProgramme),m=new be({props:Ae}),k.push(()=>I(m,"value",mt));function ot(e){t[11](e)}let De={label:"Design stage",emptyOption:!0,choices:se(It)};t[0].summary.designStage!==void 0&&(De.value=t[0].summary.designStage),B=new be({props:De}),k.push(()=>I(B,"value",ot));function lt(e){t[12](e)}let Ee={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(Ee.value=t[0].summary.fundingConditions),U=new re({props:Ee}),k.push(()=>I(U,"value",lt));function ft(e){t[13](e)}let Oe={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(Oe.value=t[0].summary.inspectorEmail),V=new we({props:Oe}),k.push(()=>I(V,"value",ft));let d=t[1]&&Ze(t);function pt(e){t[14](e)}let Pe={label:"Scheme area size (km²)",width:6,min:0};t[0].summary.schemeAreaSizeKm2!==void 0&&(Pe.value=t[0].summary.schemeAreaSizeKm2),W=new bt({props:Pe}),k.push(()=>I(W,"value",pt));function gt(e){t[15](e)}let Te={label:"Notes"};t[0].summary.notes!==void 0&&(Te.value=t[0].summary.notes),Y=new re({props:Te}),k.push(()=>I(Y,"value",gt));function _t(e){t[16](e)}let je={$$slots:{default:[Dt]},$$scope:{ctx:t}};return t[0].summary.networkMap!==void 0&&(je.gj=t[0].summary.networkMap),J=new wt({props:je}),k.push(()=>I(J,"gj",_t)),{c(){n=H("div"),$(u.$$.fragment),a=l(),$(p.$$.fragment),g=l(),$(o.$$.fragment),P=l(),$(L.$$.fragment),T=l(),$(M.$$.fragment),j=l(),$(R.$$.fragment),N=l(),$(A.$$.fragment),D=l(),$(S.$$.fragment),C=l(),$(m.$$.fragment),me=l(),$(B.$$.fragment),le=l(),$(U.$$.fragment),pe=l(),$(V.$$.fragment),_e=l(),d&&d.c(),ae=l(),$(W.$$.fragment),ce=l(),$(Y.$$.fragment),he=l(),$(J.$$.fragment),this.h()},l(e){n=K(e,"DIV",{class:!0});var s=ne(n);h(u.$$.fragment,s),a=f(s),h(p.$$.fragment,s),g=f(s),h(o.$$.fragment,s),P=f(s),h(L.$$.fragment,s),T=f(s),h(M.$$.fragment,s),j=f(s),h(R.$$.fragment,s),N=f(s),h(A.$$.fragment,s),D=f(s),h(S.$$.fragment,s),C=f(s),h(m.$$.fragment,s),me=f(s),h(B.$$.fragment,s),le=f(s),h(U.$$.fragment,s),pe=f(s),h(V.$$.fragment,s),_e=f(s),d&&d.l(s),ae=f(s),h(W.$$.fragment,s),ce=f(s),h(Y.$$.fragment,s),he=f(s),h(J.$$.fragment,s),s.forEach(Q),this.h()},h(){ct(n,"class","govuk-width-container")},m(e,s){ue(e,n,s),v(u,n,null),r(n,a),v(p,n,null),r(n,g),v(o,n,null),r(n,P),v(L,n,null),r(n,T),v(M,n,null),r(n,j),v(R,n,null),r(n,N),v(A,n,null),r(n,D),v(S,n,null),r(n,C),v(m,n,null),r(n,me),v(B,n,null),r(n,le),v(U,n,null),r(n,pe),v(V,n,null),r(n,_e),d&&d.m(n,null),r(n,ae),v(W,n,null),r(n,ce),v(Y,n,null),r(n,he),v(J,n,null),ie=!0},p(e,[s]){const Ne={};!_&&s&1&&(_=!0,Ne.value=e[0].summary.dateDesignReview,q(()=>_=!1)),u.$set(Ne);const ze={};!E&&s&1&&(E=!0,ze.value=e[0].summary.schemeReference,q(()=>E=!1)),p.$set(ze);const He={};!O&&s&1&&(O=!0,He.value=e[0].summary.schemeName,q(()=>O=!1)),o.$set(He);const Ke={};!F&&s&1&&(F=!0,Ke.value=e[0].summary.schemeSummary,q(()=>F=!1)),L.$set(Ke);const Fe={};!x&&s&1&&(x=!0,Fe.value=e[0].summary.schemeInfoReviewed,q(()=>x=!1)),M.$set(Fe);const xe={};!G&&s&1&&(G=!0,xe.value=e[0].summary.authority,q(()=>G=!1)),R.$set(xe);const Ge={};!i&&s&1&&(i=!0,Ge.value=e[0].summary.transportOrCombinedAuthority,q(()=>i=!1)),A.$set(Ge);const Be={};!X&&s&1&&(X=!0,Be.value=e[0].summary.region,q(()=>X=!1)),S.$set(Be);const Ue={};!z&&s&1&&(z=!0,Ue.value=e[0].summary.fundingProgramme,q(()=>z=!1)),m.$set(Ue);const Ve={};!oe&&s&1&&(oe=!0,Ve.value=e[0].summary.designStage,q(()=>oe=!1)),B.$set(Ve);const We={};!fe&&s&1&&(fe=!0,We.value=e[0].summary.fundingConditions,q(()=>fe=!1)),U.$set(We);const Ye={};!ge&&s&1&&(ge=!0,Ye.value=e[0].summary.inspectorEmail,q(()=>ge=!1)),V.$set(Ye),e[1]?d?d.p(e,s):(d=Ze(e),d.c(),d.m(n,ae)):d&&(d.d(1),d=null);const Je={};!de&&s&1&&(de=!0,Je.value=e[0].summary.schemeAreaSizeKm2,q(()=>de=!1)),W.$set(Je);const Qe={};!$e&&s&1&&($e=!0,Qe.value=e[0].summary.notes,q(()=>$e=!1)),Y.$set(Qe);const ye={};s&262144&&(ye.$$scope={dirty:s,ctx:e}),!ve&&s&1&&(ve=!0,ye.gj=e[0].summary.networkMap,q(()=>ve=!1)),J.$set(ye)},i(e){ie||(y(u.$$.fragment,e),y(p.$$.fragment,e),y(o.$$.fragment,e),y(L.$$.fragment,e),y(M.$$.fragment,e),y(R.$$.fragment,e),y(A.$$.fragment,e),y(S.$$.fragment,e),y(m.$$.fragment,e),y(B.$$.fragment,e),y(U.$$.fragment,e),y(V.$$.fragment,e),y(W.$$.fragment,e),y(Y.$$.fragment,e),y(J.$$.fragment,e),ie=!0)},o(e){b(u.$$.fragment,e),b(p.$$.fragment,e),b(o.$$.fragment,e),b(L.$$.fragment,e),b(M.$$.fragment,e),b(R.$$.fragment,e),b(A.$$.fragment,e),b(S.$$.fragment,e),b(m.$$.fragment,e),b(B.$$.fragment,e),b(U.$$.fragment,e),b(V.$$.fragment,e),b(W.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),ie=!1},d(e){e&&Q(n),w(u),w(p),w(o),w(L),w(M),w(R),w(A),w(S),w(m),w(B),w(U),w(V),d&&d.d(),w(W),w(Y),w(J)}}}const Ot=([t,n,u])=>[t,t];function Pt(t,n,u){let _,a;$t(t,c,i=>u(0,a=i));function p(i){let D=0;for(let S of i.features)S.geometry.type=="Polygon"&&(D+=Lt(S));return D>0?D:null}function E(i){t.$$.not_equal(a.summary.dateDesignReview,i)&&(a.summary.dateDesignReview=i,c.set(a))}function g(i){t.$$.not_equal(a.summary.schemeReference,i)&&(a.summary.schemeReference=i,c.set(a))}function o(i){t.$$.not_equal(a.summary.schemeName,i)&&(a.summary.schemeName=i,c.set(a))}function O(i){t.$$.not_equal(a.summary.schemeSummary,i)&&(a.summary.schemeSummary=i,c.set(a))}function P(i){t.$$.not_equal(a.summary.schemeInfoReviewed,i)&&(a.summary.schemeInfoReviewed=i,c.set(a))}function L(i){t.$$.not_equal(a.summary.authority,i)&&(a.summary.authority=i,c.set(a))}function F(i){t.$$.not_equal(a.summary.transportOrCombinedAuthority,i)&&(a.summary.transportOrCombinedAuthority=i,c.set(a))}function T(i){t.$$.not_equal(a.summary.region,i)&&(a.summary.region=i,c.set(a))}function M(i){t.$$.not_equal(a.summary.fundingProgramme,i)&&(a.summary.fundingProgramme=i,c.set(a))}function x(i){t.$$.not_equal(a.summary.designStage,i)&&(a.summary.designStage=i,c.set(a))}function j(i){t.$$.not_equal(a.summary.fundingConditions,i)&&(a.summary.fundingConditions=i,c.set(a))}function R(i){t.$$.not_equal(a.summary.inspectorEmail,i)&&(a.summary.inspectorEmail=i,c.set(a))}function G(i){t.$$.not_equal(a.summary.schemeAreaSizeKm2,i)&&(a.summary.schemeAreaSizeKm2=i,c.set(a))}function N(i){t.$$.not_equal(a.summary.notes,i)&&(a.summary.notes=i,c.set(a))}function A(i){t.$$.not_equal(a.summary.networkMap,i)&&(a.summary.networkMap=i,c.set(a))}return t.$$.update=()=>{t.$$.dirty&1&&u(1,_=p(a.summary.networkMap))},[a,_,E,g,o,O,P,L,F,T,M,x,j,R,G,N,A]}class Qt extends vt{constructor(n){super(),yt(this,n,Pt,Et,dt,{})}}export{Qt as component};
