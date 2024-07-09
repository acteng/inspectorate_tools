import{s as Mt,v as k,e as N,a as o,c as A,b as se,g as l,f as ee,r as It,i as le,h as r,w as S,k as Ot,t as ne,d as ae,j as Dt,p as te}from"../chunks/scheduler.BBS-fkhU.js";import{S as Et,i as jt,e as C,c as d,a as $,m as v,t as y,b,d as w}from"../chunks/index.B8H3ypVf.js";import{p as ie}from"../chunks/index.CGNrErRL.js";import{S as Me}from"../chunks/Select.DqyoFzIJ.js";import{T as me}from"../chunks/TextArea.Ck6ITb4v.js";import{T as oe}from"../chunks/TextInput.C_aBwF72.js";import{s as c}from"../chunks/data.DZ7gfpei.js";import{S as Ie,C as Ht,a as Pt,t as Kt,r as Nt,f as At,d as Ft}from"../chunks/ContextualMapEntry.BkjCnEm_.js";import"../chunks/index.3mYsVvmR.js";import{t as zt}from"../chunks/index.jE_JQzWJ.js";import{D as ft}from"../chunks/DecimalInput.B1u8YNyQ.js";import{E as Gt}from"../chunks/ExternalLink.RofZqUC8.js";function pt(t){let n,u,h,a=t[1].toFixed(2)+"",p,I;return{c(){n=N("p"),u=ne("LineStrings in the Network Map cover a total of "),h=N("b"),p=ne(a),I=ne(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(g){n=A(g,"P",{});var f=se(n);u=ae(f,"LineStrings in the Network Map cover a total of "),h=A(f,"B",{});var O=se(h);p=ae(O,a),O.forEach(ee),I=ae(f,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),f.forEach(ee)},m(g,f){le(g,n,f),r(n,u),r(n,h),r(h,p),r(n,I)},p(g,f){f&2&&a!==(a=g[1].toFixed(2)+"")&&Dt(p,a)},d(g){g&&ee(n)}}}function Wt(t){let n;return{c(){n=ne("Scheme Sketcher")},l(u){n=ae(u,"Scheme Sketcher")},m(u,h){le(u,n,h)},d(u){u&&ee(n)}}}function Bt(t){let n,u,h,a,p,I,g,f="Choose the area best covering this scheme",O,D,R=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,z,E,T=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,G,j,q=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,W,H,M=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,B,P,i="Load the saved file above",K;return a=new Gt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){n=N("ol"),u=N("li"),h=ne("Go to the "),d(a.$$.fragment),p=ne(" tool"),I=o(),g=N("li"),g.textContent=f,O=o(),D=N("li"),D.innerHTML=R,z=o(),E=N("li"),E.innerHTML=T,G=o(),j=N("li"),j.innerHTML=q,W=o(),H=N("li"),H.innerHTML=M,B=o(),P=N("li"),P.textContent=i},l(_){n=A(_,"OL",{});var m=se(n);u=A(m,"LI",{});var F=se(u);h=ae(F,"Go to the "),$(a.$$.fragment,F),p=ae(F," tool"),F.forEach(ee),I=l(m),g=A(m,"LI",{"data-svelte-h":!0}),te(g)!=="svelte-aj705b"&&(g.textContent=f),O=l(m),D=A(m,"LI",{"data-svelte-h":!0}),te(D)!=="svelte-1vb2muj"&&(D.innerHTML=R),z=l(m),E=A(m,"LI",{"data-svelte-h":!0}),te(E)!=="svelte-3xdyru"&&(E.innerHTML=T),G=l(m),j=A(m,"LI",{"data-svelte-h":!0}),te(j)!=="svelte-1r1ljcj"&&(j.innerHTML=q),W=l(m),H=A(m,"LI",{"data-svelte-h":!0}),te(H)!=="svelte-sz4wlr"&&(H.innerHTML=M),B=l(m),P=A(m,"LI",{"data-svelte-h":!0}),te(P)!=="svelte-x3zkxb"&&(P.textContent=i),m.forEach(ee)},m(_,m){le(_,n,m),r(n,u),r(u,h),v(a,u,null),r(u,p),r(n,I),r(n,g),r(n,O),r(n,D),r(n,z),r(n,E),r(n,G),r(n,j),r(n,W),r(n,H),r(n,B),r(n,P),K=!0},p(_,m){const F={};m&1048576&&(F.$$scope={dirty:m,ctx:_}),a.$set(F)},i(_){K||(y(a.$$.fragment,_),K=!0)},o(_){b(a.$$.fragment,_),K=!1},d(_){_&&ee(n),w(a)}}}function Ut(t){let n,u,h,a,p,I,g,f,O,D,R,z,E,T,G,j,q,W,H,M,B,P,i,K,_,m,F,fe,U,pe,ge,V,he,_e,Y,ce,de,re,J,$e,ve,Q,ye,be,X,we,ke,Se,Ce,Z,Le,Re,x,Te,ue;function gt(e){t[2](e)}let Oe={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(Oe.value=t[0].summary.dateDesignReview),u=new oe({props:Oe}),k.push(()=>C(u,"value",gt));function ht(e){t[3](e)}let De={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(De.value=t[0].summary.schemeReference),p=new oe({props:De}),k.push(()=>C(p,"value",ht));function _t(e){t[4](e)}let Ee={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(Ee.value=t[0].summary.schemeName),f=new oe({props:Ee}),k.push(()=>C(f,"value",_t));function ct(e){t[5](e)}let je={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(je.value=t[0].summary.schemeSummary),R=new me({props:je}),k.push(()=>C(R,"value",ct));function dt(e){t[6](e)}let He={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(He.value=t[0].summary.schemeInfoReviewed),T=new me({props:He}),k.push(()=>C(T,"value",dt));function $t(e){t[7](e)}let Pe={label:"Authority",emptyOption:!0,choices:ie(Pt)};t[0].summary.authority!==void 0&&(Pe.value=t[0].summary.authority),q=new Me({props:Pe}),k.push(()=>C(q,"value",$t));function vt(e){t[8](e)}let Ke={label:"Transport / Combined Authority",emptyOption:!0,choices:ie(Kt)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Ke.value=t[0].summary.transportOrCombinedAuthority),M=new Me({props:Ke}),k.push(()=>C(M,"value",vt));function yt(e){t[9](e)}let Ne={label:"Region",emptyOption:!0,choices:ie(Nt)};t[0].summary.region!==void 0&&(Ne.value=t[0].summary.region),i=new Ie({props:Ne}),k.push(()=>C(i,"value",yt));function bt(e){t[10](e)}let Ae={label:"Funding programme",emptyOption:!0,choices:ie(At)};t[0].summary.fundingProgramme!==void 0&&(Ae.value=t[0].summary.fundingProgramme),m=new Ie({props:Ae}),k.push(()=>C(m,"value",bt));function wt(e){t[11](e)}let Fe={label:"Design stage",emptyOption:!0,choices:ie(Ft)};t[0].summary.designStage!==void 0&&(Fe.value=t[0].summary.designStage),U=new Ie({props:Fe}),k.push(()=>C(U,"value",wt));function kt(e){t[12](e)}let ze={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(ze.value=t[0].summary.fundingConditions),V=new me({props:ze}),k.push(()=>C(V,"value",kt));function St(e){t[13](e)}let Ge={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(Ge.value=t[0].summary.inspectorEmail),Y=new oe({props:Ge}),k.push(()=>C(Y,"value",St));let L=t[1]&&pt(t);function Ct(e){t[14](e)}let We={label:"Route length assessed here (km)",width:6,min:0};t[0].summary.assessedRouteLengthKm!==void 0&&(We.value=t[0].summary.assessedRouteLengthKm),J=new ft({props:We}),k.push(()=>C(J,"value",Ct));function Lt(e){t[15](e)}let Be={label:"Total route length (km)",width:6,min:0};t[0].summary.totalRouteLengthKm!==void 0&&(Be.value=t[0].summary.totalRouteLengthKm),Q=new ft({props:Be}),k.push(()=>C(Q,"value",Lt));function Rt(e){t[16](e)}let Ue={label:"Notes"};t[0].summary.notes!==void 0&&(Ue.value=t[0].summary.notes),X=new me({props:Ue}),k.push(()=>C(X,"value",Rt));function Tt(e){t[17](e)}let Ve={label:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",emptyOption:!0,choices:[["street","Street Check"],["path","Path Check"]]};t[0].summary.checkType!==void 0&&(Ve.value=t[0].summary.checkType),Z=new Me({props:Ve}),k.push(()=>C(Z,"value",Tt));function qt(e){t[18](e)}let Ye={$$slots:{default:[Bt]},$$scope:{ctx:t}};return t[0].summary.networkMap!==void 0&&(Ye.gj=t[0].summary.networkMap),x=new Ht({props:Ye}),k.push(()=>C(x,"gj",qt)),{c(){n=N("div"),d(u.$$.fragment),a=o(),d(p.$$.fragment),g=o(),d(f.$$.fragment),D=o(),d(R.$$.fragment),E=o(),d(T.$$.fragment),j=o(),d(q.$$.fragment),H=o(),d(M.$$.fragment),P=o(),d(i.$$.fragment),_=o(),d(m.$$.fragment),fe=o(),d(U.$$.fragment),ge=o(),d(V.$$.fragment),_e=o(),d(Y.$$.fragment),de=o(),L&&L.c(),re=o(),d(J.$$.fragment),ve=o(),d(Q.$$.fragment),be=o(),d(X.$$.fragment),ke=o(),Se=N("hr"),Ce=o(),d(Z.$$.fragment),Re=o(),d(x.$$.fragment),this.h()},l(e){n=A(e,"DIV",{class:!0});var s=se(n);$(u.$$.fragment,s),a=l(s),$(p.$$.fragment,s),g=l(s),$(f.$$.fragment,s),D=l(s),$(R.$$.fragment,s),E=l(s),$(T.$$.fragment,s),j=l(s),$(q.$$.fragment,s),H=l(s),$(M.$$.fragment,s),P=l(s),$(i.$$.fragment,s),_=l(s),$(m.$$.fragment,s),fe=l(s),$(U.$$.fragment,s),ge=l(s),$(V.$$.fragment,s),_e=l(s),$(Y.$$.fragment,s),de=l(s),L&&L.l(s),re=l(s),$(J.$$.fragment,s),ve=l(s),$(Q.$$.fragment,s),be=l(s),$(X.$$.fragment,s),ke=l(s),Se=A(s,"HR",{}),Ce=l(s),$(Z.$$.fragment,s),Re=l(s),$(x.$$.fragment,s),s.forEach(ee),this.h()},h(){It(n,"class","govuk-width-container")},m(e,s){le(e,n,s),v(u,n,null),r(n,a),v(p,n,null),r(n,g),v(f,n,null),r(n,D),v(R,n,null),r(n,E),v(T,n,null),r(n,j),v(q,n,null),r(n,H),v(M,n,null),r(n,P),v(i,n,null),r(n,_),v(m,n,null),r(n,fe),v(U,n,null),r(n,ge),v(V,n,null),r(n,_e),v(Y,n,null),r(n,de),L&&L.m(n,null),r(n,re),v(J,n,null),r(n,ve),v(Q,n,null),r(n,be),v(X,n,null),r(n,ke),r(n,Se),r(n,Ce),v(Z,n,null),r(n,Re),v(x,n,null),ue=!0},p(e,[s]){const Je={};!h&&s&1&&(h=!0,Je.value=e[0].summary.dateDesignReview,S(()=>h=!1)),u.$set(Je);const Qe={};!I&&s&1&&(I=!0,Qe.value=e[0].summary.schemeReference,S(()=>I=!1)),p.$set(Qe);const Xe={};!O&&s&1&&(O=!0,Xe.value=e[0].summary.schemeName,S(()=>O=!1)),f.$set(Xe);const Ze={};!z&&s&1&&(z=!0,Ze.value=e[0].summary.schemeSummary,S(()=>z=!1)),R.$set(Ze);const xe={};!G&&s&1&&(G=!0,xe.value=e[0].summary.schemeInfoReviewed,S(()=>G=!1)),T.$set(xe);const et={};!W&&s&1&&(W=!0,et.value=e[0].summary.authority,S(()=>W=!1)),q.$set(et);const tt={};!B&&s&1&&(B=!0,tt.value=e[0].summary.transportOrCombinedAuthority,S(()=>B=!1)),M.$set(tt);const nt={};!K&&s&1&&(K=!0,nt.value=e[0].summary.region,S(()=>K=!1)),i.$set(nt);const at={};!F&&s&1&&(F=!0,at.value=e[0].summary.fundingProgramme,S(()=>F=!1)),m.$set(at);const it={};!pe&&s&1&&(pe=!0,it.value=e[0].summary.designStage,S(()=>pe=!1)),U.$set(it);const st={};!he&&s&1&&(he=!0,st.value=e[0].summary.fundingConditions,S(()=>he=!1)),V.$set(st);const rt={};!ce&&s&1&&(ce=!0,rt.value=e[0].summary.inspectorEmail,S(()=>ce=!1)),Y.$set(rt),e[1]?L?L.p(e,s):(L=pt(e),L.c(),L.m(n,re)):L&&(L.d(1),L=null);const ut={};!$e&&s&1&&($e=!0,ut.value=e[0].summary.assessedRouteLengthKm,S(()=>$e=!1)),J.$set(ut);const mt={};!ye&&s&1&&(ye=!0,mt.value=e[0].summary.totalRouteLengthKm,S(()=>ye=!1)),Q.$set(mt);const ot={};!we&&s&1&&(we=!0,ot.value=e[0].summary.notes,S(()=>we=!1)),X.$set(ot);const lt={};!Le&&s&1&&(Le=!0,lt.value=e[0].summary.checkType,S(()=>Le=!1)),Z.$set(lt);const qe={};s&1048576&&(qe.$$scope={dirty:s,ctx:e}),!Te&&s&1&&(Te=!0,qe.gj=e[0].summary.networkMap,S(()=>Te=!1)),x.$set(qe)},i(e){ue||(y(u.$$.fragment,e),y(p.$$.fragment,e),y(f.$$.fragment,e),y(R.$$.fragment,e),y(T.$$.fragment,e),y(q.$$.fragment,e),y(M.$$.fragment,e),y(i.$$.fragment,e),y(m.$$.fragment,e),y(U.$$.fragment,e),y(V.$$.fragment,e),y(Y.$$.fragment,e),y(J.$$.fragment,e),y(Q.$$.fragment,e),y(X.$$.fragment,e),y(Z.$$.fragment,e),y(x.$$.fragment,e),ue=!0)},o(e){b(u.$$.fragment,e),b(p.$$.fragment,e),b(f.$$.fragment,e),b(R.$$.fragment,e),b(T.$$.fragment,e),b(q.$$.fragment,e),b(M.$$.fragment,e),b(i.$$.fragment,e),b(m.$$.fragment,e),b(U.$$.fragment,e),b(V.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),b(Q.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(x.$$.fragment,e),ue=!1},d(e){e&&ee(n),w(u),w(p),w(f),w(R),w(T),w(q),w(M),w(i),w(m),w(U),w(V),w(Y),L&&L.d(),w(J),w(Q),w(X),w(Z),w(x)}}}function Vt(t,n,u){let h,a;Ot(t,c,i=>u(0,a=i));function p(i){let K=0;for(let _ of i.features)_.geometry.type=="LineString"&&(K+=zt(_,{units:"kilometers"}));return K>0?K:null}function I(i){t.$$.not_equal(a.summary.dateDesignReview,i)&&(a.summary.dateDesignReview=i,c.set(a))}function g(i){t.$$.not_equal(a.summary.schemeReference,i)&&(a.summary.schemeReference=i,c.set(a))}function f(i){t.$$.not_equal(a.summary.schemeName,i)&&(a.summary.schemeName=i,c.set(a))}function O(i){t.$$.not_equal(a.summary.schemeSummary,i)&&(a.summary.schemeSummary=i,c.set(a))}function D(i){t.$$.not_equal(a.summary.schemeInfoReviewed,i)&&(a.summary.schemeInfoReviewed=i,c.set(a))}function R(i){t.$$.not_equal(a.summary.authority,i)&&(a.summary.authority=i,c.set(a))}function z(i){t.$$.not_equal(a.summary.transportOrCombinedAuthority,i)&&(a.summary.transportOrCombinedAuthority=i,c.set(a))}function E(i){t.$$.not_equal(a.summary.region,i)&&(a.summary.region=i,c.set(a))}function T(i){t.$$.not_equal(a.summary.fundingProgramme,i)&&(a.summary.fundingProgramme=i,c.set(a))}function G(i){t.$$.not_equal(a.summary.designStage,i)&&(a.summary.designStage=i,c.set(a))}function j(i){t.$$.not_equal(a.summary.fundingConditions,i)&&(a.summary.fundingConditions=i,c.set(a))}function q(i){t.$$.not_equal(a.summary.inspectorEmail,i)&&(a.summary.inspectorEmail=i,c.set(a))}function W(i){t.$$.not_equal(a.summary.assessedRouteLengthKm,i)&&(a.summary.assessedRouteLengthKm=i,c.set(a))}function H(i){t.$$.not_equal(a.summary.totalRouteLengthKm,i)&&(a.summary.totalRouteLengthKm=i,c.set(a))}function M(i){t.$$.not_equal(a.summary.notes,i)&&(a.summary.notes=i,c.set(a))}function B(i){t.$$.not_equal(a.summary.checkType,i)&&(a.summary.checkType=i,c.set(a))}function P(i){t.$$.not_equal(a.summary.networkMap,i)&&(a.summary.networkMap=i,c.set(a))}return t.$$.update=()=>{t.$$.dirty&1&&u(1,h=p(a.summary.networkMap))},[a,h,I,g,f,O,D,R,z,E,T,G,j,q,W,H,M,B,P]}class un extends Et{constructor(n){super(),jt(this,n,Vt,Ut,Mt,{})}}export{un as component};
