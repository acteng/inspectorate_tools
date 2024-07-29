import{s as Ot,v as R,a as l,e as j,g as f,c as H,b as re,f as K,o as Dt,i as ue,h as u,w as M,k as Et,t as ae,d as ie,j as jt,m as ne}from"../chunks/scheduler.ScMV3vmV.js";import{S as Ht,i as Pt,e as T,c as h,a as _,m as $,t as c,b as d,d as v}from"../chunks/index.DbrWxxqn.js";import{p as se}from"../chunks/index.sBNl7MU-.js";import{D as gt}from"../chunks/DecimalInput.CZdp-HRs.js";import{S as Oe}from"../chunks/Select.CV0kGAxR.js";import{S as De,C as Kt,a as Nt,t as At,r as Ft,f as zt,d as Gt}from"../chunks/ContextualMapEntry.BxVt3GR6.js";import{T as le}from"../chunks/TextArea.DbkWbfhb.js";import{T as fe}from"../chunks/TextInput.C1q4cP7I.js";import{s as C}from"../chunks/data.uqde68fu.js";import"../chunks/index.DvJuIAz_.js";import{t as Wt}from"../chunks/index.DkdHWh5J.js";import{c as Bt}from"../chunks/content.CJz-OeZZ.js";import{S as Ut}from"../chunks/SectionModal.BkZv95RR.js";import{E as Vt}from"../chunks/ExternalLink.CHHLJ-P5.js";function ht(t){let r,o,s,n=t[1].toFixed(2)+"",I,O;return{c(){r=j("p"),o=ae("LineStrings in the Network Map cover a total of "),s=j("b"),I=ae(n),O=ae(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(m){r=H(m,"P",{});var L=re(r);o=ie(L,"LineStrings in the Network Map cover a total of "),s=H(L,"B",{});var D=re(s);I=ie(D,n),D.forEach(K),O=ie(L,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),L.forEach(K)},m(m,L){ue(m,r,L),u(r,o),u(r,s),u(s,I),u(r,O)},p(m,L){L&2&&n!==(n=m[1].toFixed(2)+"")&&jt(I,n)},d(m){m&&K(r)}}}function Yt(t){let r;return{c(){r=ae("Scheme Sketcher")},l(o){r=ie(o,"Scheme Sketcher")},m(o,s){ue(o,r,s)},d(o){o&&K(r)}}}function Jt(t){let r,o,s,n,I,O,m,L="Choose the area best covering this scheme",D,y,Z=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,N,b,x=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,A,w,ee=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,F,k,te=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,z,S,i="Load the saved file above",E;return n=new Vt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){r=j("ol"),o=j("li"),s=ae("Go to the "),h(n.$$.fragment),I=ae(" tool"),O=l(),m=j("li"),m.textContent=L,D=l(),y=j("li"),y.innerHTML=Z,N=l(),b=j("li"),b.innerHTML=x,A=l(),w=j("li"),w.innerHTML=ee,F=l(),k=j("li"),k.innerHTML=te,z=l(),S=j("li"),S.textContent=i},l(p){r=H(p,"OL",{});var g=re(r);o=H(g,"LI",{});var P=re(o);s=ie(P,"Go to the "),_(n.$$.fragment,P),I=ie(P," tool"),P.forEach(K),O=f(g),m=H(g,"LI",{"data-svelte-h":!0}),ne(m)!=="svelte-aj705b"&&(m.textContent=L),D=f(g),y=H(g,"LI",{"data-svelte-h":!0}),ne(y)!=="svelte-1vb2muj"&&(y.innerHTML=Z),N=f(g),b=H(g,"LI",{"data-svelte-h":!0}),ne(b)!=="svelte-3xdyru"&&(b.innerHTML=x),A=f(g),w=H(g,"LI",{"data-svelte-h":!0}),ne(w)!=="svelte-1r1ljcj"&&(w.innerHTML=ee),F=f(g),k=H(g,"LI",{"data-svelte-h":!0}),ne(k)!=="svelte-sz4wlr"&&(k.innerHTML=te),z=f(g),S=H(g,"LI",{"data-svelte-h":!0}),ne(S)!=="svelte-x3zkxb"&&(S.textContent=i),g.forEach(K)},m(p,g){ue(p,r,g),u(r,o),u(o,s),$(n,o,null),u(o,I),u(r,O),u(r,m),u(r,D),u(r,y),u(r,N),u(r,b),u(r,A),u(r,w),u(r,F),u(r,k),u(r,z),u(r,S),E=!0},p(p,g){const P={};g&1048576&&(P.$$scope={dirty:g,ctx:p}),n.$set(P)},i(p){E||(c(n.$$.fragment,p),E=!0)},o(p){d(n.$$.fragment,p),E=!1},d(p){p&&K(r),v(n)}}}function Qt(t){let r,o,s,n,I,O,m,L,D,y,Z,N,b,x,A,w,ee,F,k,te,z,S,i,E,p,g,P,G,pe,ge,W,he,_e,B,$e,ce,U,de,ve,me,V,ye,be,Y,we,ke,J,Se,Ce,Le,Re,Q,Me,Te,X,qe,oe;r=new Ut({props:{title:"Summary of Scheme Manual",section:Bt[2],link:"/route_check/manual"}});function _t(e){t[2](e)}let Ee={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(Ee.value=t[0].summary.dateDesignReview),n=new fe({props:Ee}),R.push(()=>T(n,"value",_t));function $t(e){t[3](e)}let je={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(je.value=t[0].summary.schemeReference),m=new fe({props:je}),R.push(()=>T(m,"value",$t));function ct(e){t[4](e)}let He={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(He.value=t[0].summary.schemeName),y=new fe({props:He}),R.push(()=>T(y,"value",ct));function dt(e){t[5](e)}let Pe={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(Pe.value=t[0].summary.schemeSummary),b=new le({props:Pe}),R.push(()=>T(b,"value",dt));function vt(e){t[6](e)}let Ke={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Ke.value=t[0].summary.schemeInfoReviewed),w=new le({props:Ke}),R.push(()=>T(w,"value",vt));function yt(e){t[7](e)}let Ne={label:"Authority",emptyOption:!0,choices:se(Nt)};t[0].summary.authority!==void 0&&(Ne.value=t[0].summary.authority),k=new Oe({props:Ne}),R.push(()=>T(k,"value",yt));function bt(e){t[8](e)}let Ae={label:"Transport / Combined Authority",emptyOption:!0,choices:se(At)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Ae.value=t[0].summary.transportOrCombinedAuthority),S=new Oe({props:Ae}),R.push(()=>T(S,"value",bt));function wt(e){t[9](e)}let Fe={label:"Region",emptyOption:!0,choices:se(Ft)};t[0].summary.region!==void 0&&(Fe.value=t[0].summary.region),p=new De({props:Fe}),R.push(()=>T(p,"value",wt));function kt(e){t[10](e)}let ze={label:"Funding programme",emptyOption:!0,choices:se(zt)};t[0].summary.fundingProgramme!==void 0&&(ze.value=t[0].summary.fundingProgramme),G=new De({props:ze}),R.push(()=>T(G,"value",kt));function St(e){t[11](e)}let Ge={label:"Design stage",emptyOption:!0,choices:se(Gt)};t[0].summary.designStage!==void 0&&(Ge.value=t[0].summary.designStage),W=new De({props:Ge}),R.push(()=>T(W,"value",St));function Ct(e){t[12](e)}let We={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(We.value=t[0].summary.fundingConditions),B=new le({props:We}),R.push(()=>T(B,"value",Ct));function Lt(e){t[13](e)}let Be={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(Be.value=t[0].summary.inspectorEmail),U=new fe({props:Be}),R.push(()=>T(U,"value",Lt));let q=t[1]&&ht(t);function Rt(e){t[14](e)}let Ue={label:"Route length assessed here (km)",width:6,min:0};t[0].summary.assessedRouteLengthKm!==void 0&&(Ue.value=t[0].summary.assessedRouteLengthKm),V=new gt({props:Ue}),R.push(()=>T(V,"value",Rt));function Mt(e){t[15](e)}let Ve={label:"Total route length (km)",width:6,min:0};t[0].summary.totalRouteLengthKm!==void 0&&(Ve.value=t[0].summary.totalRouteLengthKm),Y=new gt({props:Ve}),R.push(()=>T(Y,"value",Mt));function Tt(e){t[16](e)}let Ye={label:"Notes"};t[0].summary.notes!==void 0&&(Ye.value=t[0].summary.notes),J=new le({props:Ye}),R.push(()=>T(J,"value",Tt));function qt(e){t[17](e)}let Je={label:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",emptyOption:!0,choices:[["street","Street Check"],["path","Path Check"]]};t[0].summary.checkType!==void 0&&(Je.value=t[0].summary.checkType),Q=new Oe({props:Je}),R.push(()=>T(Q,"value",qt));function It(e){t[18](e)}let Qe={$$slots:{default:[Jt]},$$scope:{ctx:t}};return t[0].summary.networkMap!==void 0&&(Qe.gj=t[0].summary.networkMap),X=new Kt({props:Qe}),R.push(()=>T(X,"gj",It)),{c(){h(r.$$.fragment),o=l(),s=j("div"),h(n.$$.fragment),O=l(),h(m.$$.fragment),D=l(),h(y.$$.fragment),N=l(),h(b.$$.fragment),A=l(),h(w.$$.fragment),F=l(),h(k.$$.fragment),z=l(),h(S.$$.fragment),E=l(),h(p.$$.fragment),P=l(),h(G.$$.fragment),ge=l(),h(W.$$.fragment),_e=l(),h(B.$$.fragment),ce=l(),h(U.$$.fragment),ve=l(),q&&q.c(),me=l(),h(V.$$.fragment),be=l(),h(Y.$$.fragment),ke=l(),h(J.$$.fragment),Ce=l(),Le=j("hr"),Re=l(),h(Q.$$.fragment),Te=l(),h(X.$$.fragment),this.h()},l(e){_(r.$$.fragment,e),o=f(e),s=H(e,"DIV",{class:!0});var a=re(s);_(n.$$.fragment,a),O=f(a),_(m.$$.fragment,a),D=f(a),_(y.$$.fragment,a),N=f(a),_(b.$$.fragment,a),A=f(a),_(w.$$.fragment,a),F=f(a),_(k.$$.fragment,a),z=f(a),_(S.$$.fragment,a),E=f(a),_(p.$$.fragment,a),P=f(a),_(G.$$.fragment,a),ge=f(a),_(W.$$.fragment,a),_e=f(a),_(B.$$.fragment,a),ce=f(a),_(U.$$.fragment,a),ve=f(a),q&&q.l(a),me=f(a),_(V.$$.fragment,a),be=f(a),_(Y.$$.fragment,a),ke=f(a),_(J.$$.fragment,a),Ce=f(a),Le=H(a,"HR",{}),Re=f(a),_(Q.$$.fragment,a),Te=f(a),_(X.$$.fragment,a),a.forEach(K),this.h()},h(){Dt(s,"class","govuk-width-container")},m(e,a){$(r,e,a),ue(e,o,a),ue(e,s,a),$(n,s,null),u(s,O),$(m,s,null),u(s,D),$(y,s,null),u(s,N),$(b,s,null),u(s,A),$(w,s,null),u(s,F),$(k,s,null),u(s,z),$(S,s,null),u(s,E),$(p,s,null),u(s,P),$(G,s,null),u(s,ge),$(W,s,null),u(s,_e),$(B,s,null),u(s,ce),$(U,s,null),u(s,ve),q&&q.m(s,null),u(s,me),$(V,s,null),u(s,be),$(Y,s,null),u(s,ke),$(J,s,null),u(s,Ce),u(s,Le),u(s,Re),$(Q,s,null),u(s,Te),$(X,s,null),oe=!0},p(e,[a]){const Xe={};!I&&a&1&&(I=!0,Xe.value=e[0].summary.dateDesignReview,M(()=>I=!1)),n.$set(Xe);const Ze={};!L&&a&1&&(L=!0,Ze.value=e[0].summary.schemeReference,M(()=>L=!1)),m.$set(Ze);const xe={};!Z&&a&1&&(Z=!0,xe.value=e[0].summary.schemeName,M(()=>Z=!1)),y.$set(xe);const et={};!x&&a&1&&(x=!0,et.value=e[0].summary.schemeSummary,M(()=>x=!1)),b.$set(et);const tt={};!ee&&a&1&&(ee=!0,tt.value=e[0].summary.schemeInfoReviewed,M(()=>ee=!1)),w.$set(tt);const nt={};!te&&a&1&&(te=!0,nt.value=e[0].summary.authority,M(()=>te=!1)),k.$set(nt);const at={};!i&&a&1&&(i=!0,at.value=e[0].summary.transportOrCombinedAuthority,M(()=>i=!1)),S.$set(at);const it={};!g&&a&1&&(g=!0,it.value=e[0].summary.region,M(()=>g=!1)),p.$set(it);const st={};!pe&&a&1&&(pe=!0,st.value=e[0].summary.fundingProgramme,M(()=>pe=!1)),G.$set(st);const rt={};!he&&a&1&&(he=!0,rt.value=e[0].summary.designStage,M(()=>he=!1)),W.$set(rt);const ut={};!$e&&a&1&&($e=!0,ut.value=e[0].summary.fundingConditions,M(()=>$e=!1)),B.$set(ut);const mt={};!de&&a&1&&(de=!0,mt.value=e[0].summary.inspectorEmail,M(()=>de=!1)),U.$set(mt),e[1]?q?q.p(e,a):(q=ht(e),q.c(),q.m(s,me)):q&&(q.d(1),q=null);const ot={};!ye&&a&1&&(ye=!0,ot.value=e[0].summary.assessedRouteLengthKm,M(()=>ye=!1)),V.$set(ot);const lt={};!we&&a&1&&(we=!0,lt.value=e[0].summary.totalRouteLengthKm,M(()=>we=!1)),Y.$set(lt);const ft={};!Se&&a&1&&(Se=!0,ft.value=e[0].summary.notes,M(()=>Se=!1)),J.$set(ft);const pt={};!Me&&a&1&&(Me=!0,pt.value=e[0].summary.checkType,M(()=>Me=!1)),Q.$set(pt);const Ie={};a&1048576&&(Ie.$$scope={dirty:a,ctx:e}),!qe&&a&1&&(qe=!0,Ie.gj=e[0].summary.networkMap,M(()=>qe=!1)),X.$set(Ie)},i(e){oe||(c(r.$$.fragment,e),c(n.$$.fragment,e),c(m.$$.fragment,e),c(y.$$.fragment,e),c(b.$$.fragment,e),c(w.$$.fragment,e),c(k.$$.fragment,e),c(S.$$.fragment,e),c(p.$$.fragment,e),c(G.$$.fragment,e),c(W.$$.fragment,e),c(B.$$.fragment,e),c(U.$$.fragment,e),c(V.$$.fragment,e),c(Y.$$.fragment,e),c(J.$$.fragment,e),c(Q.$$.fragment,e),c(X.$$.fragment,e),oe=!0)},o(e){d(r.$$.fragment,e),d(n.$$.fragment,e),d(m.$$.fragment,e),d(y.$$.fragment,e),d(b.$$.fragment,e),d(w.$$.fragment,e),d(k.$$.fragment,e),d(S.$$.fragment,e),d(p.$$.fragment,e),d(G.$$.fragment,e),d(W.$$.fragment,e),d(B.$$.fragment,e),d(U.$$.fragment,e),d(V.$$.fragment,e),d(Y.$$.fragment,e),d(J.$$.fragment,e),d(Q.$$.fragment,e),d(X.$$.fragment,e),oe=!1},d(e){e&&(K(o),K(s)),v(r,e),v(n),v(m),v(y),v(b),v(w),v(k),v(S),v(p),v(G),v(W),v(B),v(U),q&&q.d(),v(V),v(Y),v(J),v(Q),v(X)}}}function Xt(t,r,o){let s,n;Et(t,C,i=>o(0,n=i));function I(i){let E=0;for(let p of i.features)p.geometry.type=="LineString"&&(E+=Wt(p,{units:"kilometers"}));return E>0?E:null}function O(i){t.$$.not_equal(n.summary.dateDesignReview,i)&&(n.summary.dateDesignReview=i,C.set(n))}function m(i){t.$$.not_equal(n.summary.schemeReference,i)&&(n.summary.schemeReference=i,C.set(n))}function L(i){t.$$.not_equal(n.summary.schemeName,i)&&(n.summary.schemeName=i,C.set(n))}function D(i){t.$$.not_equal(n.summary.schemeSummary,i)&&(n.summary.schemeSummary=i,C.set(n))}function y(i){t.$$.not_equal(n.summary.schemeInfoReviewed,i)&&(n.summary.schemeInfoReviewed=i,C.set(n))}function Z(i){t.$$.not_equal(n.summary.authority,i)&&(n.summary.authority=i,C.set(n))}function N(i){t.$$.not_equal(n.summary.transportOrCombinedAuthority,i)&&(n.summary.transportOrCombinedAuthority=i,C.set(n))}function b(i){t.$$.not_equal(n.summary.region,i)&&(n.summary.region=i,C.set(n))}function x(i){t.$$.not_equal(n.summary.fundingProgramme,i)&&(n.summary.fundingProgramme=i,C.set(n))}function A(i){t.$$.not_equal(n.summary.designStage,i)&&(n.summary.designStage=i,C.set(n))}function w(i){t.$$.not_equal(n.summary.fundingConditions,i)&&(n.summary.fundingConditions=i,C.set(n))}function ee(i){t.$$.not_equal(n.summary.inspectorEmail,i)&&(n.summary.inspectorEmail=i,C.set(n))}function F(i){t.$$.not_equal(n.summary.assessedRouteLengthKm,i)&&(n.summary.assessedRouteLengthKm=i,C.set(n))}function k(i){t.$$.not_equal(n.summary.totalRouteLengthKm,i)&&(n.summary.totalRouteLengthKm=i,C.set(n))}function te(i){t.$$.not_equal(n.summary.notes,i)&&(n.summary.notes=i,C.set(n))}function z(i){t.$$.not_equal(n.summary.checkType,i)&&(n.summary.checkType=i,C.set(n))}function S(i){t.$$.not_equal(n.summary.networkMap,i)&&(n.summary.networkMap=i,C.set(n))}return t.$$.update=()=>{t.$$.dirty&1&&o(1,s=I(n.summary.networkMap))},[n,s,O,m,L,D,y,Z,N,b,x,A,w,ee,F,k,te,z,S]}class gn extends Ht{constructor(r){super(),Pt(this,r,Xt,Qt,Ot,{})}}export{gn as component};
