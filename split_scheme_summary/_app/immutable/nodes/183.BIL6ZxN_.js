import{s as Te,w as K,e as j,a as _,c as A,b as x,g as h,f as H,p as Ke,i as ye,h as m,x as q,k as qe,t as X,d as Y,j as Ee}from"../chunks/scheduler.BwufR8Ly.js";import{S as De,i as Ne,e as E,c as k,a as w,m as R,t as L,b as S,d as C}from"../chunks/index.BYv68wXE.js";import{p as he}from"../chunks/index.Cb9800Pp.js";import{D as $e}from"../chunks/DecimalInput.-4G3QHcH.js";import{R as Z}from"../chunks/Radio.xwGHvsDf.js";/* empty css                                                    */import{T as ce}from"../chunks/TextArea.2C2Xc7bA.js";import{T as Fe}from"../chunks/TextInput.DQAdVYnU.js";import{s as P}from"../chunks/data.DkPZjXle.js";import{f as Ie,d as He}from"../chunks/lists.XDbF7KWT.js";import{t as Me}from"../chunks/index.DexlHEzA.js";import{N as je}from"../chunks/Nav.DVM6PWAZ.js";function ve(a){let n,o,f,t=a[1].toFixed(2)+"",d,$;return{c(){n=j("p"),o=X("LineStrings in the Network Map cover a total of "),f=j("b"),d=X(t),$=X(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(s){n=A(s,"P",{});var l=x(n);o=Y(l,"LineStrings in the Network Map cover a total of "),f=A(l,"B",{});var T=x(f);d=Y(T,t),T.forEach(H),$=Y(l,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),l.forEach(H)},m(s,l){ye(s,n,l),m(n,o),m(n,f),m(f,d),m(n,$)},p(s,l){l&2&&t!==(t=s[1].toFixed(2)+"")&&Ee(d,t)},d(s){s&&H(n)}}}function Ae(a){let n,o,f,t,d,$,s,l,T,g,F,I,p,r,D,N,c,B,V,v,W,z,y,G,J,O,Q,b,U,M;o=new je({});function be(e){a[2](e)}let ee={legend:"Funding programme",choices:he(Ie)};a[0].summary.fundingProgramme!==void 0&&(ee.value=a[0].summary.fundingProgramme),t=new Z({props:ee}),K.push(()=>E(t,"value",be));function ke(e){a[3](e)}let te={legend:"Design stage",choices:he(He)};a[0].summary.designStage!==void 0&&(te.value=a[0].summary.designStage),s=new Z({props:te}),K.push(()=>E(s,"value",ke));function we(e){a[4](e)}let ae={label:"Funding conditions"};a[0].summary.fundingConditions!==void 0&&(ae.value=a[0].summary.fundingConditions),g=new ce({props:ae}),K.push(()=>E(g,"value",we));function Re(e){a[5](e)}let ne={label:"Inspector email address"};a[0].summary.inspectorEmail!==void 0&&(ne.value=a[0].summary.inspectorEmail),p=new Fe({props:ne}),K.push(()=>E(p,"value",Re));let u=a[1]&&ve(a);function Le(e){a[6](e)}let ie={label:"Route length assessed here (km)",width:6,min:0};a[0].summary.assessedRouteLengthKm!==void 0&&(ie.value=a[0].summary.assessedRouteLengthKm),c=new $e({props:ie}),K.push(()=>E(c,"value",Le));function Se(e){a[7](e)}let re={label:"Total route length (km)",width:6,min:0};a[0].summary.totalRouteLengthKm!==void 0&&(re.value=a[0].summary.totalRouteLengthKm),v=new $e({props:re}),K.push(()=>E(v,"value",Se));function Ce(e){a[8](e)}let se={label:"Notes"};a[0].summary.notes!==void 0&&(se.value=a[0].summary.notes),y=new ce({props:se}),K.push(()=>E(y,"value",Ce));function Pe(e){a[9](e)}let ue={legend:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",choices:[["street","Street Check"],["path","Path Check"]]};return a[0].summary.checkType!==void 0&&(ue.value=a[0].summary.checkType),b=new Z({props:ue}),K.push(()=>E(b,"value",Pe)),{c(){n=j("div"),k(o.$$.fragment),f=_(),k(t.$$.fragment),$=_(),k(s.$$.fragment),T=_(),k(g.$$.fragment),I=_(),k(p.$$.fragment),D=_(),u&&u.c(),N=_(),k(c.$$.fragment),V=_(),k(v.$$.fragment),z=_(),k(y.$$.fragment),J=_(),O=j("hr"),Q=_(),k(b.$$.fragment),this.h()},l(e){n=A(e,"DIV",{class:!0});var i=x(n);w(o.$$.fragment,i),f=h(i),w(t.$$.fragment,i),$=h(i),w(s.$$.fragment,i),T=h(i),w(g.$$.fragment,i),I=h(i),w(p.$$.fragment,i),D=h(i),u&&u.l(i),N=h(i),w(c.$$.fragment,i),V=h(i),w(v.$$.fragment,i),z=h(i),w(y.$$.fragment,i),J=h(i),O=A(i,"HR",{}),Q=h(i),w(b.$$.fragment,i),i.forEach(H),this.h()},h(){Ke(n,"class","govuk-width-container")},m(e,i){ye(e,n,i),R(o,n,null),m(n,f),R(t,n,null),m(n,$),R(s,n,null),m(n,T),R(g,n,null),m(n,I),R(p,n,null),m(n,D),u&&u.m(n,null),m(n,N),R(c,n,null),m(n,V),R(v,n,null),m(n,z),R(y,n,null),m(n,J),m(n,O),m(n,Q),R(b,n,null),M=!0},p(e,[i]){const me={};!d&&i&1&&(d=!0,me.value=e[0].summary.fundingProgramme,q(()=>d=!1)),t.$set(me);const oe={};!l&&i&1&&(l=!0,oe.value=e[0].summary.designStage,q(()=>l=!1)),s.$set(oe);const le={};!F&&i&1&&(F=!0,le.value=e[0].summary.fundingConditions,q(()=>F=!1)),g.$set(le);const fe={};!r&&i&1&&(r=!0,fe.value=e[0].summary.inspectorEmail,q(()=>r=!1)),p.$set(fe),e[1]?u?u.p(e,i):(u=ve(e),u.c(),u.m(n,N)):u&&(u.d(1),u=null);const ge={};!B&&i&1&&(B=!0,ge.value=e[0].summary.assessedRouteLengthKm,q(()=>B=!1)),c.$set(ge);const pe={};!W&&i&1&&(W=!0,pe.value=e[0].summary.totalRouteLengthKm,q(()=>W=!1)),v.$set(pe);const de={};!G&&i&1&&(G=!0,de.value=e[0].summary.notes,q(()=>G=!1)),y.$set(de);const _e={};!U&&i&1&&(U=!0,_e.value=e[0].summary.checkType,q(()=>U=!1)),b.$set(_e)},i(e){M||(L(o.$$.fragment,e),L(t.$$.fragment,e),L(s.$$.fragment,e),L(g.$$.fragment,e),L(p.$$.fragment,e),L(c.$$.fragment,e),L(v.$$.fragment,e),L(y.$$.fragment,e),L(b.$$.fragment,e),M=!0)},o(e){S(o.$$.fragment,e),S(t.$$.fragment,e),S(s.$$.fragment,e),S(g.$$.fragment,e),S(p.$$.fragment,e),S(c.$$.fragment,e),S(v.$$.fragment,e),S(y.$$.fragment,e),S(b.$$.fragment,e),M=!1},d(e){e&&H(n),C(o),C(t),C(s),C(g),C(p),u&&u.d(),C(c),C(v),C(y),C(b)}}}function Be(a,n,o){let f,t;qe(a,P,r=>o(0,t=r));function d(r){let D=0;for(let N of r.features)N.geometry.type=="LineString"&&(D+=Me(N,{units:"kilometers"}));return D>0?D:null}function $(r){a.$$.not_equal(t.summary.fundingProgramme,r)&&(t.summary.fundingProgramme=r,P.set(t))}function s(r){a.$$.not_equal(t.summary.designStage,r)&&(t.summary.designStage=r,P.set(t))}function l(r){a.$$.not_equal(t.summary.fundingConditions,r)&&(t.summary.fundingConditions=r,P.set(t))}function T(r){a.$$.not_equal(t.summary.inspectorEmail,r)&&(t.summary.inspectorEmail=r,P.set(t))}function g(r){a.$$.not_equal(t.summary.assessedRouteLengthKm,r)&&(t.summary.assessedRouteLengthKm=r,P.set(t))}function F(r){a.$$.not_equal(t.summary.totalRouteLengthKm,r)&&(t.summary.totalRouteLengthKm=r,P.set(t))}function I(r){a.$$.not_equal(t.summary.notes,r)&&(t.summary.notes=r,P.set(t))}function p(r){a.$$.not_equal(t.summary.checkType,r)&&(t.summary.checkType=r,P.set(t))}return a.$$.update=()=>{a.$$.dirty&1&&o(1,f=d(t.summary.networkMap))},[t,f,$,s,l,T,g,F,I,p]}class et extends De{constructor(n){super(),Ne(this,n,Be,Ae,Te,{})}}export{et as component};
