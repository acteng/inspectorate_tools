import{s as De,e as q,a as C,F as he,c as I,m as Ae,g as E,o as b,i as K,n as ve,f as h,r as Se,I as He,t as Z,b as S,d as x,E as $e,x as J,h as _,z as Me,j as ae,l as le,v as te,u as re,p as oe,q as ie,w as se,k as Qe}from"./scheduler.ScMV3vmV.js";import{S as Ve,i as Ge,e as ne,c as j,a as z,m as B,t as N,b as A,d as F}from"./index.DbrWxxqn.js";import"./ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import{C as be}from"./CollapsibleCard.DOoboPEd.js";/* empty css                                                       */import{T as ke}from"./TextArea.DbkWbfhb.js";import{P as we}from"./PrevNext.Bq7PzYwF.js";import{e as Ce}from"./each.DgxkLI6f.js";import{v as Re}from"./v4.D8aEg3BZ.js";import{P as je}from"./Progress.BljcCvM5.js";import{s as ee}from"./data.C2vsg9d1.js";function Ee(a,n,r){const e=a.slice();return e[5]=n[r][0],e[6]=n[r][1],e[7]=n[r][2],e[8]=n[r][3],e[10]=r,e}function qe(a){let n,r,e,t,i,o,l=!1,d,u,m,P=a[5]+"",f,Q,T,D,k,H=a[6]+"",R,w,O,U,V;return O=He(a[4][0]),{c(){n=q("div"),r=q("div"),e=q("div"),t=q("input"),d=C(),u=q("label"),m=q("span"),f=Z(P),T=C(),D=q("div"),k=q("p"),R=Z(H),w=C(),this.h()},l(p){n=I(p,"DIV",{class:!0});var g=S(n);r=I(g,"DIV",{class:!0});var G=S(r);e=I(G,"DIV",{class:!0});var M=S(e);t=I(M,"INPUT",{class:!0,id:!0,type:!0}),d=E(M),u=I(M,"LABEL",{class:!0,for:!0});var y=S(u);m=I(y,"SPAN",{class:!0});var L=S(m);f=x(L,P),L.forEach(h),y.forEach(h),M.forEach(h),G.forEach(h),T=E(g),D=I(g,"DIV",{class:!0,style:!0});var X=S(D);k=I(X,"P",{});var $=S(k);R=x($,H),$.forEach(h),X.forEach(h),w=E(g),g.forEach(h),this.h()},h(){b(t,"class","govuk-radios__input"),b(t,"id",i=a[2]+a[5]),b(t,"type","radio"),t.__value=o=a[5],$e(t,t.__value),b(m,"class","govuk-tag"),J(m,"background",a[7]),J(m,"color",a[8]),b(u,"class","govuk-label govuk-radios__label"),b(u,"for",Q=a[2]+a[5]),b(e,"class","govuk-radios__item"),b(r,"class","govuk-grid-column-one-quarter"),b(D,"class","govuk-grid-column-three-quarters"),J(D,"border-left","5px solid "+a[7]),b(n,"class","govuk-grid-row"),O.p(t)},m(p,g){K(p,n,g),_(n,r),_(r,e),_(e,t),t.checked=t.__value===a[0],_(e,d),_(e,u),_(u,m),_(m,f),_(n,T),_(n,D),_(D,k),_(k,R),_(n,w),U||(V=Me(t,"change",a[3]),U=!0)},p(p,g){g&2&&i!==(i=p[2]+p[5])&&b(t,"id",i),g&2&&o!==(o=p[5])&&(t.__value=o,$e(t,t.__value),l=!0),(l||g&3)&&(t.checked=t.__value===p[0]),g&2&&P!==(P=p[5]+"")&&ae(f,P),g&2&&J(m,"background",p[7]),g&2&&J(m,"color",p[8]),g&2&&Q!==(Q=p[2]+p[5])&&b(u,"for",Q),g&2&&H!==(H=p[6]+"")&&ae(R,H),g&2&&J(D,"border-left","5px solid "+p[7])},d(p){p&&h(n),O.r(),U=!1,V()}}}function ze(a){let n,r='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Rating</label></div> <div class="govuk-grid-column-three-quarters"></div>',e,t,i=Ce(a[1]),o=[];for(let l=0;l<i.length;l+=1)o[l]=qe(Ee(a,i,l));return{c(){n=q("div"),n.innerHTML=r,e=C();for(let l=0;l<o.length;l+=1)o[l].c();t=he(),this.h()},l(l){n=I(l,"DIV",{class:!0,"data-svelte-h":!0}),Ae(n)!=="svelte-187dx1y"&&(n.innerHTML=r),e=E(l);for(let d=0;d<o.length;d+=1)o[d].l(l);t=he(),this.h()},h(){b(n,"class","govuk-grid-row")},m(l,d){K(l,n,d),K(l,e,d);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(l,d);K(l,t,d)},p(l,[d]){if(d&7){i=Ce(l[1]);let u;for(u=0;u<i.length;u+=1){const m=Ee(l,i,u);o[u]?o[u].p(m,d):(o[u]=qe(m),o[u].c(),o[u].m(t.parentNode,t))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}},i:ve,o:ve,d(l){l&&(h(n),h(e),h(t)),Se(o,l)}}}function Be(a,n,r){let{choices:e}=n,{value:t}=n,i=Re();const o=[[]];function l(){t=this.__value,r(0,t)}return a.$$set=d=>{"choices"in d&&r(1,e=d.choices),"value"in d&&r(0,t=d.value)},[t,e,i,l,o]}class Fe extends Ve{constructor(n){super(),Ge(this,n,Be,ze,De,{choices:1,value:0})}}const Oe=a=>({}),Ie=a=>({}),Ue=a=>({}),Pe=a=>({}),We=a=>({}),Te=a=>({});function Je(a){let n;const r=a[4].shortfalls,e=le(r,a,a[8],Pe);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,i){e&&e.m(t,i),n=!0},p(t,i){e&&e.p&&(!n||i&256)&&re(e,r,t,t[8],n?ie(r,t[8],i,Ue):oe(t[8]),Pe)},i(t){n||(N(e,t),n=!0)},o(t){A(e,t),n=!1},d(t){e&&e.d(t)}}}function Ke(a){let n;const r=a[4].guidance,e=le(r,a,a[8],Ie);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,i){e&&e.m(t,i),n=!0},p(t,i){e&&e.p&&(!n||i&256)&&re(e,r,t,t[8],n?ie(r,t[8],i,Oe):oe(t[8]),Ie)},i(t){n||(N(e,t),n=!0)},o(t){A(e,t),n=!1},d(t){e&&e.d(t)}}}function Xe(a){let n,r,e,t,i,o,l,d,u,m,P,f,Q,T,D,k,H,R,w,O,U,V,p,g,G,M,y,L;n=new we({props:{idx:a[0],total:10,urlPath:"planning/scorecard/q"}}),i=new je({props:{currentIdx:a[0]}});const X=a[4].description,$=le(X,a,a[8],Te);T=new be({props:{label:"Common Shortfalls",open:!0,$$slots:{default:[Je]},$$scope:{ctx:a}}});function ye(s){a[5](s)}let ue={choices:a[3]};a[2].ratings[a[0]-1]!==void 0&&(ue.value=a[2].ratings[a[0]-1]),k=new Fe({props:ue}),te.push(()=>ne(k,"value",ye));function Le(s){a[6](s)}let de={label:"Appraiser Comments"};a[2].appraiserComments[a[0]-1]!==void 0&&(de.value=a[2].appraiserComments[a[0]-1]),w=new ke({props:de}),te.push(()=>ne(w,"value",Le));function Ne(s){a[7](s)}let fe={label:"Local Policy & Guidance"};return a[2].localGuidance[a[0]-1]!==void 0&&(fe.value=a[2].localGuidance[a[0]-1]),V=new ke({props:fe}),te.push(()=>ne(V,"value",Ne)),G=new be({props:{label:"Policy & Guidance",open:!0,$$slots:{default:[Ke]},$$scope:{ctx:a}}}),y=new we({props:{idx:a[0],total:10,urlPath:"planning/scorecard/q"}}),{c(){j(n.$$.fragment),r=C(),e=q("div"),t=q("div"),j(i.$$.fragment),o=C(),l=q("div"),d=q("h2"),u=Z(a[0]),m=Z(". "),P=Z(a[1]),f=C(),$&&$.c(),Q=C(),j(T.$$.fragment),D=C(),j(k.$$.fragment),R=C(),j(w.$$.fragment),U=C(),j(V.$$.fragment),g=C(),j(G.$$.fragment),M=C(),j(y.$$.fragment),this.h()},l(s){z(n.$$.fragment,s),r=E(s),e=I(s,"DIV",{class:!0,style:!0});var c=S(e);t=I(c,"DIV",{class:!0});var Y=S(t);z(i.$$.fragment,Y),Y.forEach(h),o=E(c),l=I(c,"DIV",{class:!0});var v=S(l);d=I(v,"H2",{});var W=S(d);u=x(W,a[0]),m=x(W,". "),P=x(W,a[1]),W.forEach(h),f=E(v),$&&$.l(v),Q=E(v),z(T.$$.fragment,v),D=E(v),z(k.$$.fragment,v),R=E(v),z(w.$$.fragment,v),U=E(v),z(V.$$.fragment,v),g=E(v),z(G.$$.fragment,v),v.forEach(h),c.forEach(h),M=E(s),z(y.$$.fragment,s),this.h()},h(){b(t,"class","govuk-grid-column-one-quarter"),b(l,"class","govuk-grid-column-three-quarters"),b(e,"class","govuk-grid-row"),J(e,"margin","1em")},m(s,c){B(n,s,c),K(s,r,c),K(s,e,c),_(e,t),B(i,t,null),_(e,o),_(e,l),_(l,d),_(d,u),_(d,m),_(d,P),_(l,f),$&&$.m(l,null),_(l,Q),B(T,l,null),_(l,D),B(k,l,null),_(l,R),B(w,l,null),_(l,U),B(V,l,null),_(l,g),B(G,l,null),K(s,M,c),B(y,s,c),L=!0},p(s,[c]){const Y={};c&1&&(Y.idx=s[0]),n.$set(Y);const v={};c&1&&(v.currentIdx=s[0]),i.$set(v),(!L||c&1)&&ae(u,s[0]),(!L||c&2)&&ae(P,s[1]),$&&$.p&&(!L||c&256)&&re($,X,s,s[8],L?ie(X,s[8],c,We):oe(s[8]),Te);const W={};c&256&&(W.$$scope={dirty:c,ctx:s}),T.$set(W);const ce={};!H&&c&5&&(H=!0,ce.value=s[2].ratings[s[0]-1],se(()=>H=!1)),k.$set(ce);const _e={};!O&&c&5&&(O=!0,_e.value=s[2].appraiserComments[s[0]-1],se(()=>O=!1)),w.$set(_e);const pe={};!p&&c&5&&(p=!0,pe.value=s[2].localGuidance[s[0]-1],se(()=>p=!1)),V.$set(pe);const ge={};c&256&&(ge.$$scope={dirty:c,ctx:s}),G.$set(ge);const me={};c&1&&(me.idx=s[0]),y.$set(me)},i(s){L||(N(n.$$.fragment,s),N(i.$$.fragment,s),N($,s),N(T.$$.fragment,s),N(k.$$.fragment,s),N(w.$$.fragment,s),N(V.$$.fragment,s),N(G.$$.fragment,s),N(y.$$.fragment,s),L=!0)},o(s){A(n.$$.fragment,s),A(i.$$.fragment,s),A($,s),A(T.$$.fragment,s),A(k.$$.fragment,s),A(w.$$.fragment,s),A(V.$$.fragment,s),A(G.$$.fragment,s),A(y.$$.fragment,s),L=!1},d(s){s&&(h(r),h(e),h(M)),F(n,s),F(i),$&&$.d(s),F(T),F(k),F(w),F(V),F(G),F(y,s)}}}function Ye(a,n,r){let e;Qe(a,ee,f=>r(2,e=f));let{$$slots:t={},$$scope:i}=n,{idx:o}=n,{label:l}=n,d=[["Exemplar","The proposal exceeds the standards in policy and guidance and represents an example of best practice.","#00b050","white"],["Pass","The proposal meets standards in policy and guidance. Where there are shortfalls, these are minor and do not affect the overall position.","#99cc00","black"],["Condition / Obligation to make acceptable","The proposal does not adhere to standards in policy and guidance; however a planning condition/obligation can address any shortfalls.","#ffc000","black"],["Concern","The proposal does not adhere to standards in policy and guidance and more detail is needed to inform the assessment of the proposal. This may include reasonable amendments, improvements to infrastructure and/or additional information.","#ff5050","black"],["Critical issue","The proposal represents a significant departure from standards in policy and guidance. Either comprehensive amendments or the delivery of new infrastructure would be required; or it is unlikely that the deficiency can be addressed.","#ff0000","white"],["Not applicable","This criterion is not a material consideration.","grey","white"]];function u(f){a.$$.not_equal(e.ratings[o-1],f)&&(e.ratings[o-1]=f,ee.set(e))}function m(f){a.$$.not_equal(e.appraiserComments[o-1],f)&&(e.appraiserComments[o-1]=f,ee.set(e))}function P(f){a.$$.not_equal(e.localGuidance[o-1],f)&&(e.localGuidance[o-1]=f,ee.set(e))}return a.$$set=f=>{"idx"in f&&r(0,o=f.idx),"label"in f&&r(1,l=f.label),"$$scope"in f&&r(8,i=f.$$scope)},[o,l,e,d,t,u,m,P,i]}class ua extends Ve{constructor(n){super(),Ge(this,n,Ye,Xe,De,{idx:0,label:1})}}export{ua as Q};
