import{s as wt,w as M,e as H,a as g,c as F,b as ae,g as _,f as J,p as St,i as ue,h as u,x as A,k as Ct,t as ee,d as te,j as kt,m as Z}from"../chunks/scheduler.BwufR8Ly.js";import{S as Mt,i as At,e as R,c as h,a as $,m as v,t as y,b,d as w}from"../chunks/index.BYv68wXE.js";import{p as ne}from"../chunks/index.BIqJS0ZI.js";import{D as Rt}from"../chunks/DecimalInput.-4G3QHcH.js";import{S as nt}from"../chunks/Select.DQYWgocE.js";import{S as we}from"../chunks/SelectWithCustom.DxEppQvx.js";import{T as se}from"../chunks/TextArea.2C2Xc7bA.js";import{T as Se}from"../chunks/TextInput.DQAdVYnU.js";import{s as d}from"../chunks/data.DzFWan2D.js";import{a as It,t as Lt,r as Pt,f as qt,d as Ot}from"../chunks/lists.XDbF7KWT.js";import"../chunks/index.C9Qetb6E.js";import{C as Dt}from"../chunks/ContextualMapEntry.S1YqhLCk.js";import{g as Et,e as at}from"../chunks/index.DMl_jbcv.js";import{D as Tt}from"../chunks/DateInput.DGK4TO3m.js";import{E as jt}from"../chunks/ExternalLink.DUwZ2Ga_.js";var Nt=Object.defineProperty,me=(e,t)=>Nt(e,"name",{value:t,configurable:!0});function rt(e){return Et(e,(t,s)=>t+st(s),0)}me(rt,"area");function st(e){let t=0,s;switch(e.type){case"Polygon":return ke(e.coordinates);case"MultiPolygon":for(s=0;s<e.coordinates.length;s++)t+=ke(e.coordinates[s]);return t;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}me(st,"calculateArea");function ke(e){let t=0;if(e&&e.length>0){t+=Math.abs(Me(e[0]));for(let s=1;s<e.length;s++)t-=Math.abs(Me(e[s]))}return t}me(ke,"polygonArea");var zt=at*at/2,Ce=Math.PI/180;function Me(e){const t=e.length;if(t<=2)return 0;let s=0,o=0;for(;o<t;){const a=e[o],f=e[o+1===t?0:o+1],S=e[o+2>=t?(o+2)%t:o+2],p=a[0]*Ce,l=f[1]*Ce,I=S[0]*Ce;s+=(I-p)*Math.sin(l),o++}return s*zt}me(Me,"ringArea");var Ht=rt;function it(e){let t,s,o,a=(e[1]*1e-6).toFixed(2)+"",f,S;return{c(){t=H("p"),s=ee("Polygons in the Network Map cover a total of "),o=H("b"),f=ee(a),S=ee(`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`)},l(p){t=F(p,"P",{});var l=ae(t);s=te(l,"Polygons in the Network Map cover a total of "),o=F(l,"B",{});var I=ae(o);f=te(I,a),I.forEach(J),S=te(l,`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`),l.forEach(J)},m(p,l){ue(p,t,l),u(t,s),u(t,o),u(o,f),u(t,S)},p(p,l){l&2&&a!==(a=(p[1]*1e-6).toFixed(2)+"")&&kt(f,a)},d(p){p&&J(t)}}}function Ft(e){let t;return{c(){t=ee("Scheme Sketcher")},l(s){t=te(s,"Scheme Sketcher")},m(s,o){ue(s,t,o)},d(s){s&&J(t)}}}function Kt(e){let t,s,o,a,f,S,p,l="Choose the area best covering this scheme",I,E,L=`Use the <i>New polygon</i>
        tools (freehand or snapped) to sketch the area.`,K,T,P="Optionally, include more point and route details.",x,j,q=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,G,N,O=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,i,D,C="Load the saved file above",Q;return a=new jt({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Ft]},$$scope:{ctx:e}}}),{c(){t=H("ol"),s=H("li"),o=ee("Go to the "),h(a.$$.fragment),f=ee(" tool"),S=g(),p=H("li"),p.textContent=l,I=g(),E=H("li"),E.innerHTML=L,K=g(),T=H("li"),T.textContent=P,x=g(),j=H("li"),j.innerHTML=q,G=g(),N=H("li"),N.innerHTML=O,i=g(),D=H("li"),D.textContent=C},l(k){t=F(k,"OL",{});var m=ae(t);s=F(m,"LI",{});var z=ae(s);o=te(z,"Go to the "),$(a.$$.fragment,z),f=te(z," tool"),z.forEach(J),S=_(m),p=F(m,"LI",{"data-svelte-h":!0}),Z(p)!=="svelte-aj705b"&&(p.textContent=l),I=_(m),E=F(m,"LI",{"data-svelte-h":!0}),Z(E)!=="svelte-185cfyh"&&(E.innerHTML=L),K=_(m),T=F(m,"LI",{"data-svelte-h":!0}),Z(T)!=="svelte-14ytbn2"&&(T.textContent=P),x=_(m),j=F(m,"LI",{"data-svelte-h":!0}),Z(j)!=="svelte-1r1ljcj"&&(j.innerHTML=q),G=_(m),N=F(m,"LI",{"data-svelte-h":!0}),Z(N)!=="svelte-sz4wlr"&&(N.innerHTML=O),i=_(m),D=F(m,"LI",{"data-svelte-h":!0}),Z(D)!=="svelte-x3zkxb"&&(D.textContent=C),m.forEach(J)},m(k,m){ue(k,t,m),u(t,s),u(s,o),v(a,s,null),u(s,f),u(t,S),u(t,p),u(t,I),u(t,E),u(t,K),u(t,T),u(t,x),u(t,j),u(t,G),u(t,N),u(t,i),u(t,D),Q=!0},p(k,m){const z={};m&262144&&(z.$$scope={dirty:m,ctx:k}),a.$set(z)},i(k){Q||(y(a.$$.fragment,k),Q=!0)},o(k){b(a.$$.fragment,k),Q=!1},d(k){k&&J(t),w(a)}}}function xt(e){let t,s,o,a,f,S,p,l,I,E,L,K,T,P,x,j,q,G,N,O,i,D,C,Q,k,m,z,oe,V,le,fe,X,pe,ge,Y,_e,ce,ie,B,de,he,U,$e,ve,W,ye,re;function ut(n){e[2](n)}let Ae={label:"Date of design review"};e[0].summary.dateDesignReview!==void 0&&(Ae.value=e[0].summary.dateDesignReview),s=new Tt({props:Ae}),M.push(()=>R(s,"value",ut));function mt(n){e[3](n)}let Re={label:"Scheme reference"};e[0].summary.schemeReference!==void 0&&(Re.value=e[0].summary.schemeReference),f=new Se({props:Re}),M.push(()=>R(f,"value",mt));function ot(n){e[4](n)}let Ie={label:"Scheme name"};e[0].summary.schemeName!==void 0&&(Ie.value=e[0].summary.schemeName),l=new Se({props:Ie}),M.push(()=>R(l,"value",ot));function lt(n){e[5](n)}let Le={label:"Scheme summary"};e[0].summary.schemeSummary!==void 0&&(Le.value=e[0].summary.schemeSummary),L=new se({props:Le}),M.push(()=>R(L,"value",lt));function ft(n){e[6](n)}let Pe={label:"Scheme information reviewed"};e[0].summary.schemeInfoReviewed!==void 0&&(Pe.value=e[0].summary.schemeInfoReviewed),P=new se({props:Pe}),M.push(()=>R(P,"value",ft));function pt(n){e[7](n)}let qe={label:"Authority",emptyOption:!0,choices:ne(It)};e[0].summary.authority!==void 0&&(qe.value=e[0].summary.authority),q=new nt({props:qe}),M.push(()=>R(q,"value",pt));function gt(n){e[8](n)}let Oe={label:"Transport / Combined Authority",emptyOption:!0,choices:ne(Lt)};e[0].summary.transportOrCombinedAuthority!==void 0&&(Oe.value=e[0].summary.transportOrCombinedAuthority),O=new nt({props:Oe}),M.push(()=>R(O,"value",gt));function _t(n){e[9](n)}let De={label:"Region",emptyOption:!0,choices:ne(Pt)};e[0].summary.region!==void 0&&(De.value=e[0].summary.region),C=new we({props:De}),M.push(()=>R(C,"value",_t));function ct(n){e[10](n)}let Ee={label:"Funding programme",emptyOption:!0,choices:ne(qt)};e[0].summary.fundingProgramme!==void 0&&(Ee.value=e[0].summary.fundingProgramme),m=new we({props:Ee}),M.push(()=>R(m,"value",ct));function dt(n){e[11](n)}let Te={label:"Design stage",emptyOption:!0,choices:ne(Ot)};e[0].summary.designStage!==void 0&&(Te.value=e[0].summary.designStage),V=new we({props:Te}),M.push(()=>R(V,"value",dt));function ht(n){e[12](n)}let je={label:"Funding conditions"};e[0].summary.fundingConditions!==void 0&&(je.value=e[0].summary.fundingConditions),X=new se({props:je}),M.push(()=>R(X,"value",ht));function $t(n){e[13](n)}let Ne={label:"Inspector email address"};e[0].summary.inspectorEmail!==void 0&&(Ne.value=e[0].summary.inspectorEmail),Y=new Se({props:Ne}),M.push(()=>R(Y,"value",$t));let c=e[1]&&it(e);function vt(n){e[14](n)}let ze={label:"Scheme area size (km²)",width:6,min:0};e[0].summary.schemeAreaSizeKm2!==void 0&&(ze.value=e[0].summary.schemeAreaSizeKm2),B=new Rt({props:ze}),M.push(()=>R(B,"value",vt));function yt(n){e[15](n)}let He={label:"Notes"};e[0].summary.notes!==void 0&&(He.value=e[0].summary.notes),U=new se({props:He}),M.push(()=>R(U,"value",yt));function bt(n){e[16](n)}let Fe={$$slots:{default:[Kt]},$$scope:{ctx:e}};return e[0].summary.networkMap!==void 0&&(Fe.gj=e[0].summary.networkMap),W=new Dt({props:Fe}),M.push(()=>R(W,"gj",bt)),{c(){t=H("div"),h(s.$$.fragment),a=g(),h(f.$$.fragment),p=g(),h(l.$$.fragment),E=g(),h(L.$$.fragment),T=g(),h(P.$$.fragment),j=g(),h(q.$$.fragment),N=g(),h(O.$$.fragment),D=g(),h(C.$$.fragment),k=g(),h(m.$$.fragment),oe=g(),h(V.$$.fragment),fe=g(),h(X.$$.fragment),ge=g(),h(Y.$$.fragment),ce=g(),c&&c.c(),ie=g(),h(B.$$.fragment),he=g(),h(U.$$.fragment),ve=g(),h(W.$$.fragment),this.h()},l(n){t=F(n,"DIV",{class:!0});var r=ae(t);$(s.$$.fragment,r),a=_(r),$(f.$$.fragment,r),p=_(r),$(l.$$.fragment,r),E=_(r),$(L.$$.fragment,r),T=_(r),$(P.$$.fragment,r),j=_(r),$(q.$$.fragment,r),N=_(r),$(O.$$.fragment,r),D=_(r),$(C.$$.fragment,r),k=_(r),$(m.$$.fragment,r),oe=_(r),$(V.$$.fragment,r),fe=_(r),$(X.$$.fragment,r),ge=_(r),$(Y.$$.fragment,r),ce=_(r),c&&c.l(r),ie=_(r),$(B.$$.fragment,r),he=_(r),$(U.$$.fragment,r),ve=_(r),$(W.$$.fragment,r),r.forEach(J),this.h()},h(){St(t,"class","govuk-width-container")},m(n,r){ue(n,t,r),v(s,t,null),u(t,a),v(f,t,null),u(t,p),v(l,t,null),u(t,E),v(L,t,null),u(t,T),v(P,t,null),u(t,j),v(q,t,null),u(t,N),v(O,t,null),u(t,D),v(C,t,null),u(t,k),v(m,t,null),u(t,oe),v(V,t,null),u(t,fe),v(X,t,null),u(t,ge),v(Y,t,null),u(t,ce),c&&c.m(t,null),u(t,ie),v(B,t,null),u(t,he),v(U,t,null),u(t,ve),v(W,t,null),re=!0},p(n,[r]){const Ke={};!o&&r&1&&(o=!0,Ke.value=n[0].summary.dateDesignReview,A(()=>o=!1)),s.$set(Ke);const xe={};!S&&r&1&&(S=!0,xe.value=n[0].summary.schemeReference,A(()=>S=!1)),f.$set(xe);const Ge={};!I&&r&1&&(I=!0,Ge.value=n[0].summary.schemeName,A(()=>I=!1)),l.$set(Ge);const Ve={};!K&&r&1&&(K=!0,Ve.value=n[0].summary.schemeSummary,A(()=>K=!1)),L.$set(Ve);const Xe={};!x&&r&1&&(x=!0,Xe.value=n[0].summary.schemeInfoReviewed,A(()=>x=!1)),P.$set(Xe);const Ye={};!G&&r&1&&(G=!0,Ye.value=n[0].summary.authority,A(()=>G=!1)),q.$set(Ye);const Be={};!i&&r&1&&(i=!0,Be.value=n[0].summary.transportOrCombinedAuthority,A(()=>i=!1)),O.$set(Be);const Ue={};!Q&&r&1&&(Q=!0,Ue.value=n[0].summary.region,A(()=>Q=!1)),C.$set(Ue);const We={};!z&&r&1&&(z=!0,We.value=n[0].summary.fundingProgramme,A(()=>z=!1)),m.$set(We);const Je={};!le&&r&1&&(le=!0,Je.value=n[0].summary.designStage,A(()=>le=!1)),V.$set(Je);const Qe={};!pe&&r&1&&(pe=!0,Qe.value=n[0].summary.fundingConditions,A(()=>pe=!1)),X.$set(Qe);const Ze={};!_e&&r&1&&(_e=!0,Ze.value=n[0].summary.inspectorEmail,A(()=>_e=!1)),Y.$set(Ze),n[1]?c?c.p(n,r):(c=it(n),c.c(),c.m(t,ie)):c&&(c.d(1),c=null);const et={};!de&&r&1&&(de=!0,et.value=n[0].summary.schemeAreaSizeKm2,A(()=>de=!1)),B.$set(et);const tt={};!$e&&r&1&&($e=!0,tt.value=n[0].summary.notes,A(()=>$e=!1)),U.$set(tt);const be={};r&262144&&(be.$$scope={dirty:r,ctx:n}),!ye&&r&1&&(ye=!0,be.gj=n[0].summary.networkMap,A(()=>ye=!1)),W.$set(be)},i(n){re||(y(s.$$.fragment,n),y(f.$$.fragment,n),y(l.$$.fragment,n),y(L.$$.fragment,n),y(P.$$.fragment,n),y(q.$$.fragment,n),y(O.$$.fragment,n),y(C.$$.fragment,n),y(m.$$.fragment,n),y(V.$$.fragment,n),y(X.$$.fragment,n),y(Y.$$.fragment,n),y(B.$$.fragment,n),y(U.$$.fragment,n),y(W.$$.fragment,n),re=!0)},o(n){b(s.$$.fragment,n),b(f.$$.fragment,n),b(l.$$.fragment,n),b(L.$$.fragment,n),b(P.$$.fragment,n),b(q.$$.fragment,n),b(O.$$.fragment,n),b(C.$$.fragment,n),b(m.$$.fragment,n),b(V.$$.fragment,n),b(X.$$.fragment,n),b(Y.$$.fragment,n),b(B.$$.fragment,n),b(U.$$.fragment,n),b(W.$$.fragment,n),re=!1},d(n){n&&J(t),w(s),w(f),w(l),w(L),w(P),w(q),w(O),w(C),w(m),w(V),w(X),w(Y),c&&c.d(),w(B),w(U),w(W)}}}function Gt(e,t,s){let o,a;Ct(e,d,i=>s(0,a=i));function f(i){let D=0;for(let C of i.features)C.geometry.type=="Polygon"&&(D+=Ht(C));return D>0?D:null}function S(i){e.$$.not_equal(a.summary.dateDesignReview,i)&&(a.summary.dateDesignReview=i,d.set(a))}function p(i){e.$$.not_equal(a.summary.schemeReference,i)&&(a.summary.schemeReference=i,d.set(a))}function l(i){e.$$.not_equal(a.summary.schemeName,i)&&(a.summary.schemeName=i,d.set(a))}function I(i){e.$$.not_equal(a.summary.schemeSummary,i)&&(a.summary.schemeSummary=i,d.set(a))}function E(i){e.$$.not_equal(a.summary.schemeInfoReviewed,i)&&(a.summary.schemeInfoReviewed=i,d.set(a))}function L(i){e.$$.not_equal(a.summary.authority,i)&&(a.summary.authority=i,d.set(a))}function K(i){e.$$.not_equal(a.summary.transportOrCombinedAuthority,i)&&(a.summary.transportOrCombinedAuthority=i,d.set(a))}function T(i){e.$$.not_equal(a.summary.region,i)&&(a.summary.region=i,d.set(a))}function P(i){e.$$.not_equal(a.summary.fundingProgramme,i)&&(a.summary.fundingProgramme=i,d.set(a))}function x(i){e.$$.not_equal(a.summary.designStage,i)&&(a.summary.designStage=i,d.set(a))}function j(i){e.$$.not_equal(a.summary.fundingConditions,i)&&(a.summary.fundingConditions=i,d.set(a))}function q(i){e.$$.not_equal(a.summary.inspectorEmail,i)&&(a.summary.inspectorEmail=i,d.set(a))}function G(i){e.$$.not_equal(a.summary.schemeAreaSizeKm2,i)&&(a.summary.schemeAreaSizeKm2=i,d.set(a))}function N(i){e.$$.not_equal(a.summary.notes,i)&&(a.summary.notes=i,d.set(a))}function O(i){e.$$.not_equal(a.summary.networkMap,i)&&(a.summary.networkMap=i,d.set(a))}return e.$$.update=()=>{e.$$.dirty&1&&s(1,o=f(a.summary.networkMap))},[a,o,S,p,l,I,E,L,K,T,P,x,j,q,G,N,O]}class un extends Mt{constructor(t){super(),At(this,t,Gt,xt,wt,{})}}export{un as component};
