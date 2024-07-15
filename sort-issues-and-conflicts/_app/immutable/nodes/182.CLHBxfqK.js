import{s as Dt,r as S,e as E,a as o,c as j,b as ie,g as l,f as z,q as ft,i as le,h as s,w as C,k as Et,t as ne,d as ae,j as jt,p as te}from"../chunks/scheduler.mGr_ZlpV.js";import{S as Ht,i as Ot,e as L,c as $,b as c,m as v,t as y,a as b,d as w}from"../chunks/index.rGMSHTnh.js";import{p as se}from"../chunks/index.Br_ro5D5.js";import{D as pt}from"../chunks/DecimalInput.DZ6zdq9k.js";import{R as Me}from"../chunks/Radio.Bma7VTOG.js";import{S as gt}from"../chunks/Select.DOQ97bQB.js";import{S as Pt,C as Kt,a as Nt,t as At,r as Ft,f as zt,d as Gt}from"../chunks/ContextualMapEntry.CZ1ZA64X.js";import{T as oe}from"../chunks/TextArea.CQ2iB7w6.js";import{T as De}from"../chunks/TextInput.Cd2nGDQC.js";import{s as h}from"../chunks/data.Cury7ItE.js";import"../chunks/index.DxWdSAxj.js";import{t as Vt}from"../chunks/index.CfC2FVi_.js";import{D as Wt}from"../chunks/DateInput.C6pFU0rg.js";import{E as Bt}from"../chunks/ExternalLink.D1vkit7Q.js";function dt(t){let n,u,d,a=t[1].toFixed(2)+"",p,D;return{c(){n=E("p"),u=ne("LineStrings in the Network Map cover a total of "),d=E("b"),p=ne(a),D=ne(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(g){n=j(g,"P",{});var f=ie(n);u=ae(f,"LineStrings in the Network Map cover a total of "),d=j(f,"B",{});var H=ie(d);p=ae(H,a),H.forEach(z),D=ae(f,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),f.forEach(z)},m(g,f){le(g,n,f),s(n,u),s(n,d),s(d,p),s(n,D)},p(g,f){f&2&&a!==(a=g[1].toFixed(2)+"")&&jt(p,a)},d(g){g&&z(n)}}}function Ut(t){let n;return{c(){n=ne("Scheme Sketcher")},l(u){n=ae(u,"Scheme Sketcher")},m(u,d){le(u,n,d)},d(u){u&&z(n)}}}function Yt(t){let n,u,d,a,p,D,g,f="Choose the area best covering this scheme",H,O,T=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,G,P,q=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,V,K,I=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,W,N,M=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,B,A,i="Load the saved file above",F;return a=new Bt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){n=E("ol"),u=E("li"),d=ne("Go to the "),$(a.$$.fragment),p=ne(" tool"),D=o(),g=E("li"),g.textContent=f,H=o(),O=E("li"),O.innerHTML=T,G=o(),P=E("li"),P.innerHTML=q,V=o(),K=E("li"),K.innerHTML=I,W=o(),N=E("li"),N.innerHTML=M,B=o(),A=E("li"),A.textContent=i},l(_){n=j(_,"OL",{});var m=ie(n);u=j(m,"LI",{});var k=ie(u);d=ae(k,"Go to the "),c(a.$$.fragment,k),p=ae(k," tool"),k.forEach(z),D=l(m),g=j(m,"LI",{"data-svelte-h":!0}),te(g)!=="svelte-aj705b"&&(g.textContent=f),H=l(m),O=j(m,"LI",{"data-svelte-h":!0}),te(O)!=="svelte-1vb2muj"&&(O.innerHTML=T),G=l(m),P=j(m,"LI",{"data-svelte-h":!0}),te(P)!=="svelte-3xdyru"&&(P.innerHTML=q),V=l(m),K=j(m,"LI",{"data-svelte-h":!0}),te(K)!=="svelte-1r1ljcj"&&(K.innerHTML=I),W=l(m),N=j(m,"LI",{"data-svelte-h":!0}),te(N)!=="svelte-sz4wlr"&&(N.innerHTML=M),B=l(m),A=j(m,"LI",{"data-svelte-h":!0}),te(A)!=="svelte-x3zkxb"&&(A.textContent=i),m.forEach(z)},m(_,m){le(_,n,m),s(n,u),s(u,d),v(a,u,null),s(u,p),s(n,D),s(n,g),s(n,H),s(n,O),s(n,G),s(n,P),s(n,V),s(n,K),s(n,W),s(n,N),s(n,B),s(n,A),F=!0},p(_,m){const k={};m&1048576&&(k.$$scope={dirty:m,ctx:_}),a.$set(k)},i(_){F||(y(a.$$.fragment,_),F=!0)},o(_){b(a.$$.fragment,_),F=!1},d(_){_&&z(n),w(a)}}}function Jt(t){let n,u,d,a,p,D,g,f,H,O,T,G,P,q,V,K,I,W,N,M,B,A,i,F,_,m,k,fe,pe,U,ge,de,Y,_e,he,J,$e,ce,ue,Q,ve,ye,X,be,we,Z,ke,Se,Ce,Le,x,Re,Te,ee,qe,me;function _t(e){t[2](e)}let Ee={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(Ee.value=t[0].summary.dateDesignReview),u=new Wt({props:Ee}),S.push(()=>L(u,"value",_t));function ht(e){t[3](e)}let je={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(je.value=t[0].summary.schemeReference),p=new De({props:je}),S.push(()=>L(p,"value",ht));function $t(e){t[4](e)}let He={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(He.value=t[0].summary.schemeName),f=new De({props:He}),S.push(()=>L(f,"value",$t));function ct(e){t[5](e)}let Oe={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(Oe.value=t[0].summary.schemeSummary),T=new oe({props:Oe}),S.push(()=>L(T,"value",ct));function vt(e){t[6](e)}let Pe={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Pe.value=t[0].summary.schemeInfoReviewed),q=new oe({props:Pe}),S.push(()=>L(q,"value",vt));function yt(e){t[7](e)}let Ke={label:"Authority",emptyOption:!0,choices:se(Nt)};t[0].summary.authority!==void 0&&(Ke.value=t[0].summary.authority),I=new gt({props:Ke}),S.push(()=>L(I,"value",yt));function bt(e){t[8](e)}let Ne={label:"Transport / Combined Authority",emptyOption:!0,choices:se(At)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Ne.value=t[0].summary.transportOrCombinedAuthority),M=new gt({props:Ne}),S.push(()=>L(M,"value",bt));function wt(e){t[9](e)}let Ae={label:"Region",emptyOption:!0,choices:se(Ft)};t[0].summary.region!==void 0&&(Ae.value=t[0].summary.region),i=new Pt({props:Ae}),S.push(()=>L(i,"value",wt));function kt(e){t[10](e)}let Fe={legend:"Funding programme",choices:se(zt)};t[0].summary.fundingProgramme!==void 0&&(Fe.value=t[0].summary.fundingProgramme),k=new Me({props:Fe}),S.push(()=>L(k,"value",kt));function St(e){t[11](e)}let ze={legend:"Design stage",inlineSmall:!0,choices:se(Gt)};t[0].summary.designStage!==void 0&&(ze.value=t[0].summary.designStage),U=new Me({props:ze}),S.push(()=>L(U,"value",St));function Ct(e){t[12](e)}let Ge={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(Ge.value=t[0].summary.fundingConditions),Y=new oe({props:Ge}),S.push(()=>L(Y,"value",Ct));function Lt(e){t[13](e)}let Ve={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(Ve.value=t[0].summary.inspectorEmail),J=new De({props:Ve}),S.push(()=>L(J,"value",Lt));let R=t[1]&&dt(t);function Rt(e){t[14](e)}let We={label:"Route length assessed here (km)",width:6,min:0};t[0].summary.assessedRouteLengthKm!==void 0&&(We.value=t[0].summary.assessedRouteLengthKm),Q=new pt({props:We}),S.push(()=>L(Q,"value",Rt));function Tt(e){t[15](e)}let Be={label:"Total route length (km)",width:6,min:0};t[0].summary.totalRouteLengthKm!==void 0&&(Be.value=t[0].summary.totalRouteLengthKm),X=new pt({props:Be}),S.push(()=>L(X,"value",Tt));function qt(e){t[16](e)}let Ue={label:"Notes"};t[0].summary.notes!==void 0&&(Ue.value=t[0].summary.notes),Z=new oe({props:Ue}),S.push(()=>L(Z,"value",qt));function It(e){t[17](e)}let Ye={legend:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",choices:[["street","Street Check"],["path","Path Check"]]};t[0].summary.checkType!==void 0&&(Ye.value=t[0].summary.checkType),x=new Me({props:Ye}),S.push(()=>L(x,"value",It));function Mt(e){t[18](e)}let Je={$$slots:{default:[Yt]},$$scope:{ctx:t}};return t[0].summary.networkMap!==void 0&&(Je.gj=t[0].summary.networkMap),ee=new Kt({props:Je}),S.push(()=>L(ee,"gj",Mt)),{c(){n=E("div"),$(u.$$.fragment),a=o(),$(p.$$.fragment),g=o(),$(f.$$.fragment),O=o(),$(T.$$.fragment),P=o(),$(q.$$.fragment),K=o(),$(I.$$.fragment),N=o(),$(M.$$.fragment),A=o(),$(i.$$.fragment),_=o(),m=E("div"),$(k.$$.fragment),pe=o(),$(U.$$.fragment),de=o(),$(Y.$$.fragment),he=o(),$(J.$$.fragment),ce=o(),R&&R.c(),ue=o(),$(Q.$$.fragment),ye=o(),$(X.$$.fragment),we=o(),$(Z.$$.fragment),Se=o(),Ce=E("hr"),Le=o(),$(x.$$.fragment),Te=o(),$(ee.$$.fragment),this.h()},l(e){n=j(e,"DIV",{class:!0});var r=ie(n);c(u.$$.fragment,r),a=l(r),c(p.$$.fragment,r),g=l(r),c(f.$$.fragment,r),O=l(r),c(T.$$.fragment,r),P=l(r),c(q.$$.fragment,r),K=l(r),c(I.$$.fragment,r),N=l(r),c(M.$$.fragment,r),A=l(r),c(i.$$.fragment,r),_=l(r),m=j(r,"DIV",{class:!0});var re=ie(m);c(k.$$.fragment,re),re.forEach(z),pe=l(r),c(U.$$.fragment,r),de=l(r),c(Y.$$.fragment,r),he=l(r),c(J.$$.fragment,r),ce=l(r),R&&R.l(r),ue=l(r),c(Q.$$.fragment,r),ye=l(r),c(X.$$.fragment,r),we=l(r),c(Z.$$.fragment,r),Se=l(r),Ce=j(r,"HR",{}),Le=l(r),c(x.$$.fragment,r),Te=l(r),c(ee.$$.fragment,r),r.forEach(z),this.h()},h(){ft(m,"class","funding-programme"),ft(n,"class","govuk-width-container")},m(e,r){le(e,n,r),v(u,n,null),s(n,a),v(p,n,null),s(n,g),v(f,n,null),s(n,O),v(T,n,null),s(n,P),v(q,n,null),s(n,K),v(I,n,null),s(n,N),v(M,n,null),s(n,A),v(i,n,null),s(n,_),s(n,m),v(k,m,null),s(n,pe),v(U,n,null),s(n,de),v(Y,n,null),s(n,he),v(J,n,null),s(n,ce),R&&R.m(n,null),s(n,ue),v(Q,n,null),s(n,ye),v(X,n,null),s(n,we),v(Z,n,null),s(n,Se),s(n,Ce),s(n,Le),v(x,n,null),s(n,Te),v(ee,n,null),me=!0},p(e,[r]){const re={};!d&&r&1&&(d=!0,re.value=e[0].summary.dateDesignReview,C(()=>d=!1)),u.$set(re);const Qe={};!D&&r&1&&(D=!0,Qe.value=e[0].summary.schemeReference,C(()=>D=!1)),p.$set(Qe);const Xe={};!H&&r&1&&(H=!0,Xe.value=e[0].summary.schemeName,C(()=>H=!1)),f.$set(Xe);const Ze={};!G&&r&1&&(G=!0,Ze.value=e[0].summary.schemeSummary,C(()=>G=!1)),T.$set(Ze);const xe={};!V&&r&1&&(V=!0,xe.value=e[0].summary.schemeInfoReviewed,C(()=>V=!1)),q.$set(xe);const et={};!W&&r&1&&(W=!0,et.value=e[0].summary.authority,C(()=>W=!1)),I.$set(et);const tt={};!B&&r&1&&(B=!0,tt.value=e[0].summary.transportOrCombinedAuthority,C(()=>B=!1)),M.$set(tt);const nt={};!F&&r&1&&(F=!0,nt.value=e[0].summary.region,C(()=>F=!1)),i.$set(nt);const at={};!fe&&r&1&&(fe=!0,at.value=e[0].summary.fundingProgramme,C(()=>fe=!1)),k.$set(at);const it={};!ge&&r&1&&(ge=!0,it.value=e[0].summary.designStage,C(()=>ge=!1)),U.$set(it);const rt={};!_e&&r&1&&(_e=!0,rt.value=e[0].summary.fundingConditions,C(()=>_e=!1)),Y.$set(rt);const st={};!$e&&r&1&&($e=!0,st.value=e[0].summary.inspectorEmail,C(()=>$e=!1)),J.$set(st),e[1]?R?R.p(e,r):(R=dt(e),R.c(),R.m(n,ue)):R&&(R.d(1),R=null);const ut={};!ve&&r&1&&(ve=!0,ut.value=e[0].summary.assessedRouteLengthKm,C(()=>ve=!1)),Q.$set(ut);const mt={};!be&&r&1&&(be=!0,mt.value=e[0].summary.totalRouteLengthKm,C(()=>be=!1)),X.$set(mt);const ot={};!ke&&r&1&&(ke=!0,ot.value=e[0].summary.notes,C(()=>ke=!1)),Z.$set(ot);const lt={};!Re&&r&1&&(Re=!0,lt.value=e[0].summary.checkType,C(()=>Re=!1)),x.$set(lt);const Ie={};r&1048576&&(Ie.$$scope={dirty:r,ctx:e}),!qe&&r&1&&(qe=!0,Ie.gj=e[0].summary.networkMap,C(()=>qe=!1)),ee.$set(Ie)},i(e){me||(y(u.$$.fragment,e),y(p.$$.fragment,e),y(f.$$.fragment,e),y(T.$$.fragment,e),y(q.$$.fragment,e),y(I.$$.fragment,e),y(M.$$.fragment,e),y(i.$$.fragment,e),y(k.$$.fragment,e),y(U.$$.fragment,e),y(Y.$$.fragment,e),y(J.$$.fragment,e),y(Q.$$.fragment,e),y(X.$$.fragment,e),y(Z.$$.fragment,e),y(x.$$.fragment,e),y(ee.$$.fragment,e),me=!0)},o(e){b(u.$$.fragment,e),b(p.$$.fragment,e),b(f.$$.fragment,e),b(T.$$.fragment,e),b(q.$$.fragment,e),b(I.$$.fragment,e),b(M.$$.fragment,e),b(i.$$.fragment,e),b(k.$$.fragment,e),b(U.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),b(Q.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(x.$$.fragment,e),b(ee.$$.fragment,e),me=!1},d(e){e&&z(n),w(u),w(p),w(f),w(T),w(q),w(I),w(M),w(i),w(k),w(U),w(Y),w(J),R&&R.d(),w(Q),w(X),w(Z),w(x),w(ee)}}}function Qt(t,n,u){let d,a;Et(t,h,i=>u(0,a=i));function p(i){let F=0;for(let _ of i.features)_.geometry.type=="LineString"&&(F+=Vt(_,{units:"kilometers"}));return F>0?F:null}function D(i){t.$$.not_equal(a.summary.dateDesignReview,i)&&(a.summary.dateDesignReview=i,h.set(a))}function g(i){t.$$.not_equal(a.summary.schemeReference,i)&&(a.summary.schemeReference=i,h.set(a))}function f(i){t.$$.not_equal(a.summary.schemeName,i)&&(a.summary.schemeName=i,h.set(a))}function H(i){t.$$.not_equal(a.summary.schemeSummary,i)&&(a.summary.schemeSummary=i,h.set(a))}function O(i){t.$$.not_equal(a.summary.schemeInfoReviewed,i)&&(a.summary.schemeInfoReviewed=i,h.set(a))}function T(i){t.$$.not_equal(a.summary.authority,i)&&(a.summary.authority=i,h.set(a))}function G(i){t.$$.not_equal(a.summary.transportOrCombinedAuthority,i)&&(a.summary.transportOrCombinedAuthority=i,h.set(a))}function P(i){t.$$.not_equal(a.summary.region,i)&&(a.summary.region=i,h.set(a))}function q(i){t.$$.not_equal(a.summary.fundingProgramme,i)&&(a.summary.fundingProgramme=i,h.set(a))}function V(i){t.$$.not_equal(a.summary.designStage,i)&&(a.summary.designStage=i,h.set(a))}function K(i){t.$$.not_equal(a.summary.fundingConditions,i)&&(a.summary.fundingConditions=i,h.set(a))}function I(i){t.$$.not_equal(a.summary.inspectorEmail,i)&&(a.summary.inspectorEmail=i,h.set(a))}function W(i){t.$$.not_equal(a.summary.assessedRouteLengthKm,i)&&(a.summary.assessedRouteLengthKm=i,h.set(a))}function N(i){t.$$.not_equal(a.summary.totalRouteLengthKm,i)&&(a.summary.totalRouteLengthKm=i,h.set(a))}function M(i){t.$$.not_equal(a.summary.notes,i)&&(a.summary.notes=i,h.set(a))}function B(i){t.$$.not_equal(a.summary.checkType,i)&&(a.summary.checkType=i,h.set(a))}function A(i){t.$$.not_equal(a.summary.networkMap,i)&&(a.summary.networkMap=i,h.set(a))}return t.$$.update=()=>{t.$$.dirty&1&&u(1,d=p(a.summary.networkMap))},[a,d,D,g,f,H,O,T,G,P,q,V,K,I,W,N,M,B,A]}class pn extends Ht{constructor(n){super(),Ot(this,n,Qt,Jt,Dt,{})}}export{pn as component};
