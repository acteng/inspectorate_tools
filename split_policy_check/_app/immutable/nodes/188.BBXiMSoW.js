import{s as It,w as k,e as N,a as o,c as A,b as se,g as l,f as ee,p as Mt,i as oe,h as r,x as S,k as Dt,t as ne,d as ae,j as Et,m as te}from"../chunks/scheduler.ytQcc2rf.js";import{S as jt,i as Ht,e as C,c as $,a as c,m as v,t as y,b,d as w}from"../chunks/index.D9yYtTfk.js";import{p as ie}from"../chunks/index.ALVCKPve.js";import{D as lt}from"../chunks/DecimalInput.CKisJWfl.js";import{R as qe}from"../chunks/Radio.BwqxTJTI.js";import{S as ft}from"../chunks/Select.BzX3N09F.js";import{S as Ot,C as Pt,a as Kt,t as Nt,r as At,f as Ft,d as zt}from"../chunks/ContextualMapEntry.D7fGw_jb.js";import{T as me}from"../chunks/TextArea.CtGDg2p0.js";import{T as Ie}from"../chunks/TextInput.6W_uhnqP.js";import{s as h}from"../chunks/data.8WWO1kxo.js";import"../chunks/index.zgbzr8dD.js";import{t as Gt}from"../chunks/index.CucRQIdS.js";import{D as Wt}from"../chunks/DateInput.B1B5mSYy.js";import{E as Bt}from"../chunks/ExternalLink.BPBlKSFO.js";function pt(t){let n,u,d,a=t[1].toFixed(2)+"",p,M;return{c(){n=N("p"),u=ne("LineStrings in the Network Map cover a total of "),d=N("b"),p=ne(a),M=ne(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(g){n=A(g,"P",{});var f=se(n);u=ae(f,"LineStrings in the Network Map cover a total of "),d=A(f,"B",{});var D=se(d);p=ae(D,a),D.forEach(ee),M=ae(f,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),f.forEach(ee)},m(g,f){oe(g,n,f),r(n,u),r(n,d),r(d,p),r(n,M)},p(g,f){f&2&&a!==(a=g[1].toFixed(2)+"")&&Et(p,a)},d(g){g&&ee(n)}}}function Ut(t){let n;return{c(){n=ne("Scheme Sketcher")},l(u){n=ae(u,"Scheme Sketcher")},m(u,d){oe(u,n,d)},d(u){u&&ee(n)}}}function Vt(t){let n,u,d,a,p,M,g,f="Choose the area best covering this scheme",D,E,R=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,z,j,T=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,G,H,q=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,W,O,I=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,B,P,i="Load the saved file above",K;return a=new Bt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){n=N("ol"),u=N("li"),d=ne("Go to the "),$(a.$$.fragment),p=ne(" tool"),M=o(),g=N("li"),g.textContent=f,D=o(),E=N("li"),E.innerHTML=R,z=o(),j=N("li"),j.innerHTML=T,G=o(),H=N("li"),H.innerHTML=q,W=o(),O=N("li"),O.innerHTML=I,B=o(),P=N("li"),P.textContent=i},l(_){n=A(_,"OL",{});var m=se(n);u=A(m,"LI",{});var F=se(u);d=ae(F,"Go to the "),c(a.$$.fragment,F),p=ae(F," tool"),F.forEach(ee),M=l(m),g=A(m,"LI",{"data-svelte-h":!0}),te(g)!=="svelte-aj705b"&&(g.textContent=f),D=l(m),E=A(m,"LI",{"data-svelte-h":!0}),te(E)!=="svelte-1vb2muj"&&(E.innerHTML=R),z=l(m),j=A(m,"LI",{"data-svelte-h":!0}),te(j)!=="svelte-3xdyru"&&(j.innerHTML=T),G=l(m),H=A(m,"LI",{"data-svelte-h":!0}),te(H)!=="svelte-1r1ljcj"&&(H.innerHTML=q),W=l(m),O=A(m,"LI",{"data-svelte-h":!0}),te(O)!=="svelte-sz4wlr"&&(O.innerHTML=I),B=l(m),P=A(m,"LI",{"data-svelte-h":!0}),te(P)!=="svelte-x3zkxb"&&(P.textContent=i),m.forEach(ee)},m(_,m){oe(_,n,m),r(n,u),r(u,d),v(a,u,null),r(u,p),r(n,M),r(n,g),r(n,D),r(n,E),r(n,z),r(n,j),r(n,G),r(n,H),r(n,W),r(n,O),r(n,B),r(n,P),K=!0},p(_,m){const F={};m&1048576&&(F.$$scope={dirty:m,ctx:_}),a.$set(F)},i(_){K||(y(a.$$.fragment,_),K=!0)},o(_){b(a.$$.fragment,_),K=!1},d(_){_&&ee(n),w(a)}}}function Yt(t){let n,u,d,a,p,M,g,f,D,E,R,z,j,T,G,H,q,W,O,I,B,P,i,K,_,m,F,le,U,fe,pe,V,ge,de,Y,_e,he,re,J,$e,ce,Q,ve,ye,X,be,we,ke,Se,Z,Ce,Le,x,Re,ue;function gt(e){t[2](e)}let Me={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(Me.value=t[0].summary.dateDesignReview),u=new Wt({props:Me}),k.push(()=>C(u,"value",gt));function dt(e){t[3](e)}let De={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(De.value=t[0].summary.schemeReference),p=new Ie({props:De}),k.push(()=>C(p,"value",dt));function _t(e){t[4](e)}let Ee={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(Ee.value=t[0].summary.schemeName),f=new Ie({props:Ee}),k.push(()=>C(f,"value",_t));function ht(e){t[5](e)}let je={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(je.value=t[0].summary.schemeSummary),R=new me({props:je}),k.push(()=>C(R,"value",ht));function $t(e){t[6](e)}let He={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(He.value=t[0].summary.schemeInfoReviewed),T=new me({props:He}),k.push(()=>C(T,"value",$t));function ct(e){t[7](e)}let Oe={label:"Authority",emptyOption:!0,choices:ie(Kt)};t[0].summary.authority!==void 0&&(Oe.value=t[0].summary.authority),q=new ft({props:Oe}),k.push(()=>C(q,"value",ct));function vt(e){t[8](e)}let Pe={label:"Transport / Combined Authority",emptyOption:!0,choices:ie(Nt)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Pe.value=t[0].summary.transportOrCombinedAuthority),I=new ft({props:Pe}),k.push(()=>C(I,"value",vt));function yt(e){t[9](e)}let Ke={label:"Region",emptyOption:!0,choices:ie(At)};t[0].summary.region!==void 0&&(Ke.value=t[0].summary.region),i=new Ot({props:Ke}),k.push(()=>C(i,"value",yt));function bt(e){t[10](e)}let Ne={legend:"Funding programme",choices:ie(Ft)};t[0].summary.fundingProgramme!==void 0&&(Ne.value=t[0].summary.fundingProgramme),m=new qe({props:Ne}),k.push(()=>C(m,"value",bt));function wt(e){t[11](e)}let Ae={legend:"Design stage",choices:ie(zt)};t[0].summary.designStage!==void 0&&(Ae.value=t[0].summary.designStage),U=new qe({props:Ae}),k.push(()=>C(U,"value",wt));function kt(e){t[12](e)}let Fe={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(Fe.value=t[0].summary.fundingConditions),V=new me({props:Fe}),k.push(()=>C(V,"value",kt));function St(e){t[13](e)}let ze={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(ze.value=t[0].summary.inspectorEmail),Y=new Ie({props:ze}),k.push(()=>C(Y,"value",St));let L=t[1]&&pt(t);function Ct(e){t[14](e)}let Ge={label:"Route length assessed here (km)",width:6,min:0};t[0].summary.assessedRouteLengthKm!==void 0&&(Ge.value=t[0].summary.assessedRouteLengthKm),J=new lt({props:Ge}),k.push(()=>C(J,"value",Ct));function Lt(e){t[15](e)}let We={label:"Total route length (km)",width:6,min:0};t[0].summary.totalRouteLengthKm!==void 0&&(We.value=t[0].summary.totalRouteLengthKm),Q=new lt({props:We}),k.push(()=>C(Q,"value",Lt));function Rt(e){t[16](e)}let Be={label:"Notes"};t[0].summary.notes!==void 0&&(Be.value=t[0].summary.notes),X=new me({props:Be}),k.push(()=>C(X,"value",Rt));function Tt(e){t[17](e)}let Ue={legend:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",choices:[["street","Street Check"],["path","Path Check"]]};t[0].summary.checkType!==void 0&&(Ue.value=t[0].summary.checkType),Z=new qe({props:Ue}),k.push(()=>C(Z,"value",Tt));function qt(e){t[18](e)}let Ve={$$slots:{default:[Vt]},$$scope:{ctx:t}};return t[0].summary.networkMap!==void 0&&(Ve.gj=t[0].summary.networkMap),x=new Pt({props:Ve}),k.push(()=>C(x,"gj",qt)),{c(){n=N("div"),$(u.$$.fragment),a=o(),$(p.$$.fragment),g=o(),$(f.$$.fragment),E=o(),$(R.$$.fragment),j=o(),$(T.$$.fragment),H=o(),$(q.$$.fragment),O=o(),$(I.$$.fragment),P=o(),$(i.$$.fragment),_=o(),$(m.$$.fragment),le=o(),$(U.$$.fragment),pe=o(),$(V.$$.fragment),de=o(),$(Y.$$.fragment),he=o(),L&&L.c(),re=o(),$(J.$$.fragment),ce=o(),$(Q.$$.fragment),ye=o(),$(X.$$.fragment),we=o(),ke=N("hr"),Se=o(),$(Z.$$.fragment),Le=o(),$(x.$$.fragment),this.h()},l(e){n=A(e,"DIV",{class:!0});var s=se(n);c(u.$$.fragment,s),a=l(s),c(p.$$.fragment,s),g=l(s),c(f.$$.fragment,s),E=l(s),c(R.$$.fragment,s),j=l(s),c(T.$$.fragment,s),H=l(s),c(q.$$.fragment,s),O=l(s),c(I.$$.fragment,s),P=l(s),c(i.$$.fragment,s),_=l(s),c(m.$$.fragment,s),le=l(s),c(U.$$.fragment,s),pe=l(s),c(V.$$.fragment,s),de=l(s),c(Y.$$.fragment,s),he=l(s),L&&L.l(s),re=l(s),c(J.$$.fragment,s),ce=l(s),c(Q.$$.fragment,s),ye=l(s),c(X.$$.fragment,s),we=l(s),ke=A(s,"HR",{}),Se=l(s),c(Z.$$.fragment,s),Le=l(s),c(x.$$.fragment,s),s.forEach(ee),this.h()},h(){Mt(n,"class","govuk-width-container")},m(e,s){oe(e,n,s),v(u,n,null),r(n,a),v(p,n,null),r(n,g),v(f,n,null),r(n,E),v(R,n,null),r(n,j),v(T,n,null),r(n,H),v(q,n,null),r(n,O),v(I,n,null),r(n,P),v(i,n,null),r(n,_),v(m,n,null),r(n,le),v(U,n,null),r(n,pe),v(V,n,null),r(n,de),v(Y,n,null),r(n,he),L&&L.m(n,null),r(n,re),v(J,n,null),r(n,ce),v(Q,n,null),r(n,ye),v(X,n,null),r(n,we),r(n,ke),r(n,Se),v(Z,n,null),r(n,Le),v(x,n,null),ue=!0},p(e,[s]){const Ye={};!d&&s&1&&(d=!0,Ye.value=e[0].summary.dateDesignReview,S(()=>d=!1)),u.$set(Ye);const Je={};!M&&s&1&&(M=!0,Je.value=e[0].summary.schemeReference,S(()=>M=!1)),p.$set(Je);const Qe={};!D&&s&1&&(D=!0,Qe.value=e[0].summary.schemeName,S(()=>D=!1)),f.$set(Qe);const Xe={};!z&&s&1&&(z=!0,Xe.value=e[0].summary.schemeSummary,S(()=>z=!1)),R.$set(Xe);const Ze={};!G&&s&1&&(G=!0,Ze.value=e[0].summary.schemeInfoReviewed,S(()=>G=!1)),T.$set(Ze);const xe={};!W&&s&1&&(W=!0,xe.value=e[0].summary.authority,S(()=>W=!1)),q.$set(xe);const et={};!B&&s&1&&(B=!0,et.value=e[0].summary.transportOrCombinedAuthority,S(()=>B=!1)),I.$set(et);const tt={};!K&&s&1&&(K=!0,tt.value=e[0].summary.region,S(()=>K=!1)),i.$set(tt);const nt={};!F&&s&1&&(F=!0,nt.value=e[0].summary.fundingProgramme,S(()=>F=!1)),m.$set(nt);const at={};!fe&&s&1&&(fe=!0,at.value=e[0].summary.designStage,S(()=>fe=!1)),U.$set(at);const it={};!ge&&s&1&&(ge=!0,it.value=e[0].summary.fundingConditions,S(()=>ge=!1)),V.$set(it);const st={};!_e&&s&1&&(_e=!0,st.value=e[0].summary.inspectorEmail,S(()=>_e=!1)),Y.$set(st),e[1]?L?L.p(e,s):(L=pt(e),L.c(),L.m(n,re)):L&&(L.d(1),L=null);const rt={};!$e&&s&1&&($e=!0,rt.value=e[0].summary.assessedRouteLengthKm,S(()=>$e=!1)),J.$set(rt);const ut={};!ve&&s&1&&(ve=!0,ut.value=e[0].summary.totalRouteLengthKm,S(()=>ve=!1)),Q.$set(ut);const mt={};!be&&s&1&&(be=!0,mt.value=e[0].summary.notes,S(()=>be=!1)),X.$set(mt);const ot={};!Ce&&s&1&&(Ce=!0,ot.value=e[0].summary.checkType,S(()=>Ce=!1)),Z.$set(ot);const Te={};s&1048576&&(Te.$$scope={dirty:s,ctx:e}),!Re&&s&1&&(Re=!0,Te.gj=e[0].summary.networkMap,S(()=>Re=!1)),x.$set(Te)},i(e){ue||(y(u.$$.fragment,e),y(p.$$.fragment,e),y(f.$$.fragment,e),y(R.$$.fragment,e),y(T.$$.fragment,e),y(q.$$.fragment,e),y(I.$$.fragment,e),y(i.$$.fragment,e),y(m.$$.fragment,e),y(U.$$.fragment,e),y(V.$$.fragment,e),y(Y.$$.fragment,e),y(J.$$.fragment,e),y(Q.$$.fragment,e),y(X.$$.fragment,e),y(Z.$$.fragment,e),y(x.$$.fragment,e),ue=!0)},o(e){b(u.$$.fragment,e),b(p.$$.fragment,e),b(f.$$.fragment,e),b(R.$$.fragment,e),b(T.$$.fragment,e),b(q.$$.fragment,e),b(I.$$.fragment,e),b(i.$$.fragment,e),b(m.$$.fragment,e),b(U.$$.fragment,e),b(V.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),b(Q.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(x.$$.fragment,e),ue=!1},d(e){e&&ee(n),w(u),w(p),w(f),w(R),w(T),w(q),w(I),w(i),w(m),w(U),w(V),w(Y),L&&L.d(),w(J),w(Q),w(X),w(Z),w(x)}}}function Jt(t,n,u){let d,a;Dt(t,h,i=>u(0,a=i));function p(i){let K=0;for(let _ of i.features)_.geometry.type=="LineString"&&(K+=Gt(_,{units:"kilometers"}));return K>0?K:null}function M(i){t.$$.not_equal(a.summary.dateDesignReview,i)&&(a.summary.dateDesignReview=i,h.set(a))}function g(i){t.$$.not_equal(a.summary.schemeReference,i)&&(a.summary.schemeReference=i,h.set(a))}function f(i){t.$$.not_equal(a.summary.schemeName,i)&&(a.summary.schemeName=i,h.set(a))}function D(i){t.$$.not_equal(a.summary.schemeSummary,i)&&(a.summary.schemeSummary=i,h.set(a))}function E(i){t.$$.not_equal(a.summary.schemeInfoReviewed,i)&&(a.summary.schemeInfoReviewed=i,h.set(a))}function R(i){t.$$.not_equal(a.summary.authority,i)&&(a.summary.authority=i,h.set(a))}function z(i){t.$$.not_equal(a.summary.transportOrCombinedAuthority,i)&&(a.summary.transportOrCombinedAuthority=i,h.set(a))}function j(i){t.$$.not_equal(a.summary.region,i)&&(a.summary.region=i,h.set(a))}function T(i){t.$$.not_equal(a.summary.fundingProgramme,i)&&(a.summary.fundingProgramme=i,h.set(a))}function G(i){t.$$.not_equal(a.summary.designStage,i)&&(a.summary.designStage=i,h.set(a))}function H(i){t.$$.not_equal(a.summary.fundingConditions,i)&&(a.summary.fundingConditions=i,h.set(a))}function q(i){t.$$.not_equal(a.summary.inspectorEmail,i)&&(a.summary.inspectorEmail=i,h.set(a))}function W(i){t.$$.not_equal(a.summary.assessedRouteLengthKm,i)&&(a.summary.assessedRouteLengthKm=i,h.set(a))}function O(i){t.$$.not_equal(a.summary.totalRouteLengthKm,i)&&(a.summary.totalRouteLengthKm=i,h.set(a))}function I(i){t.$$.not_equal(a.summary.notes,i)&&(a.summary.notes=i,h.set(a))}function B(i){t.$$.not_equal(a.summary.checkType,i)&&(a.summary.checkType=i,h.set(a))}function P(i){t.$$.not_equal(a.summary.networkMap,i)&&(a.summary.networkMap=i,h.set(a))}return t.$$.update=()=>{t.$$.dirty&1&&u(1,d=p(a.summary.networkMap))},[a,d,M,g,f,D,E,R,z,j,T,G,H,q,W,O,I,B,P]}class fn extends jt{constructor(n){super(),Ht(this,n,Jt,Yt,It,{})}}export{fn as component};
