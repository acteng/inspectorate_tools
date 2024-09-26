import{s as Ne,e as C,a as $,J as qe,c as w,p as he,g as k,q as b,i as W,n as Ee,f as v,B as Qe,C as Re,t as se,b as G,d as ne,D as Pe,v as U,h as d,z as je,j as ie,l as de,r as fe,u as _e,m as ce,o as pe,w as ge,k as Je}from"./scheduler.B5FfXhnD.js";import{S as Ae,i as Se,e as me,c as Y,a as Z,m as x,t as S,b as z,d as ee}from"./index.VeCIHQiF.js";/* empty css                                                  */import"./index.DODFRL1j.js";import{T as Te}from"./TextArea.ECUh-2IL.js";import{P as Ie}from"./PrevNext.DyoCqIrl.js";import"./paths.BuOgKEyY.js";import"./entry.Cgd4GeiH.js";import{e as De}from"./each.XauKQHIb.js";import{v as Oe}from"./v4.b0td5MfA.js";import{P as Ue}from"./Progress.CNyZ_T3g.js";import{s as le}from"./data.b6FybfUe.js";function ye(t,n,u){const s=t.slice();return s[5]=n[u][0],s[6]=n[u][1],s[7]=n[u][2],s[8]=n[u][3],s[10]=u,s}function Ve(t){let n,u,s,l,c,i,a=!1,r,o,h,D=t[5]+"",_,B,H,V,L,N=t[6]+"",q,R,j,E,F;return j=Re(t[4][0]),{c(){n=C("div"),u=C("div"),s=C("div"),l=C("input"),r=$(),o=C("label"),h=C("span"),_=se(D),H=$(),V=C("div"),L=C("p"),q=se(N),R=$(),this.h()},l(g){n=w(g,"DIV",{class:!0});var f=G(n);u=w(f,"DIV",{class:!0});var K=G(u);s=w(K,"DIV",{class:!0});var M=G(s);l=w(M,"INPUT",{class:!0,id:!0,type:!0}),r=k(M),o=w(M,"LABEL",{class:!0,for:!0});var A=G(o);h=w(A,"SPAN",{class:!0});var te=G(h);_=ne(te,D),te.forEach(v),A.forEach(v),M.forEach(v),K.forEach(v),H=k(f),V=w(f,"DIV",{class:!0,style:!0});var X=G(V);L=w(X,"P",{});var J=G(L);q=ne(J,N),J.forEach(v),X.forEach(v),R=k(f),f.forEach(v),this.h()},h(){b(l,"class","govuk-radios__input"),b(l,"id",c=t[2]+t[5]),b(l,"type","radio"),l.__value=i=t[5],Pe(l,l.__value),b(h,"class","govuk-tag"),U(h,"background",t[7]),U(h,"color",t[8]),b(o,"class","govuk-label govuk-radios__label"),b(o,"for",B=t[2]+t[5]),b(s,"class","govuk-radios__item"),b(u,"class","govuk-grid-column-one-quarter"),b(V,"class","govuk-grid-column-three-quarters"),U(V,"border-left","5px solid "+t[7]),b(n,"class","govuk-grid-row"),j.p(l)},m(g,f){W(g,n,f),d(n,u),d(u,s),d(s,l),l.checked=l.__value===t[0],d(s,r),d(s,o),d(o,h),d(h,_),d(n,H),d(n,V),d(V,L),d(L,q),d(n,R),E||(F=je(l,"change",t[3]),E=!0)},p(g,f){f&2&&c!==(c=g[2]+g[5])&&b(l,"id",c),f&2&&i!==(i=g[5])&&(l.__value=i,Pe(l,l.__value),a=!0),(a||f&3)&&(l.checked=l.__value===g[0]),f&2&&D!==(D=g[5]+"")&&ie(_,D),f&2&&U(h,"background",g[7]),f&2&&U(h,"color",g[8]),f&2&&B!==(B=g[2]+g[5])&&b(o,"for",B),f&2&&N!==(N=g[6]+"")&&ie(q,N),f&2&&U(V,"border-left","5px solid "+g[7])},d(g){g&&v(n),j.r(),E=!1,F()}}}function We(t){let n,u='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Rating</label></div> <div class="govuk-grid-column-three-quarters"></div>',s,l,c=De(t[1]),i=[];for(let a=0;a<c.length;a+=1)i[a]=Ve(ye(t,c,a));return{c(){n=C("div"),n.innerHTML=u,s=$();for(let a=0;a<i.length;a+=1)i[a].c();l=qe(),this.h()},l(a){n=w(a,"DIV",{class:!0,"data-svelte-h":!0}),he(n)!=="svelte-187dx1y"&&(n.innerHTML=u),s=k(a);for(let r=0;r<i.length;r+=1)i[r].l(a);l=qe(),this.h()},h(){b(n,"class","govuk-grid-row")},m(a,r){W(a,n,r),W(a,s,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(a,r);W(a,l,r)},p(a,[r]){if(r&7){c=De(a[1]);let o;for(o=0;o<c.length;o+=1){const h=ye(a,c,o);i[o]?i[o].p(h,r):(i[o]=Ve(h),i[o].c(),i[o].m(l.parentNode,l))}for(;o<i.length;o+=1)i[o].d(1);i.length=c.length}},i:Ee,o:Ee,d(a){a&&(v(n),v(s),v(l)),Qe(i,a)}}}function Fe(t,n,u){let{choices:s}=n,{value:l}=n,c=Oe();const i=[[]];function a(){l=this.__value,u(0,l)}return t.$$set=r=>{"choices"in r&&u(1,s=r.choices),"value"in r&&u(0,l=r.value)},[l,s,c,a,i]}class Ke extends Ae{constructor(n){super(),Se(this,n,Fe,We,Ne,{choices:1,value:0})}}const Xe=t=>({}),Ge=t=>({}),Ye=t=>({}),He=t=>({}),Ze=t=>({}),Le=t=>({});function xe(t){let n,u,s,l,c,i,a,r,o,h,D,_,B,H,V="Common Shortfalls",L,N,q,R,j,E,F,g,f,K,M,A,te="Policy & Guidance",X,J,Q,y;n=new Ie({props:{idx:t[0],total:10,urlPath:"planning/scorecard/q"}}),c=new Ue({props:{currentIdx:t[0]}});const oe=t[5].description,P=de(oe,t,t[4],Le),re=t[5].shortfalls,T=de(re,t,t[4],He);function ze(e){t[6](e)}let ve={choices:t[3]};t[2].ratings[t[0]-1]!==void 0&&(ve.value=t[2].ratings[t[0]-1]),q=new Ke({props:ve}),fe.push(()=>me(q,"value",ze));function Be(e){t[7](e)}let be={label:"Appraiser Comments"};t[2].appraiserComments[t[0]-1]!==void 0&&(be.value=t[2].appraiserComments[t[0]-1]),E=new Te({props:be}),fe.push(()=>me(E,"value",Be));function Me(e){t[8](e)}let $e={label:"Local Policy & Guidance"};t[2].localGuidance[t[0]-1]!==void 0&&($e.value=t[2].localGuidance[t[0]-1]),f=new Te({props:$e}),fe.push(()=>me(f,"value",Me));const ue=t[5].guidance,I=de(ue,t,t[4],Ge);return Q=new Ie({props:{idx:t[0],total:10,urlPath:"planning/scorecard/q"}}),{c(){Y(n.$$.fragment),u=$(),s=C("div"),l=C("div"),Y(c.$$.fragment),i=$(),a=C("div"),r=C("h2"),o=se(t[0]),h=se(". "),D=se(t[1]),_=$(),P&&P.c(),B=$(),H=C("h3"),H.textContent=V,L=$(),T&&T.c(),N=$(),Y(q.$$.fragment),j=$(),Y(E.$$.fragment),g=$(),Y(f.$$.fragment),M=$(),A=C("h3"),A.textContent=te,X=$(),I&&I.c(),J=$(),Y(Q.$$.fragment),this.h()},l(e){Z(n.$$.fragment,e),u=k(e),s=w(e,"DIV",{class:!0,style:!0});var p=G(s);l=w(p,"DIV",{class:!0});var ae=G(l);Z(c.$$.fragment,ae),ae.forEach(v),i=k(p),a=w(p,"DIV",{class:!0});var m=G(a);r=w(m,"H2",{});var O=G(r);o=ne(O,t[0]),h=ne(O,". "),D=ne(O,t[1]),O.forEach(v),_=k(m),P&&P.l(m),B=k(m),H=w(m,"H3",{"data-svelte-h":!0}),he(H)!=="svelte-vyxnwn"&&(H.textContent=V),L=k(m),T&&T.l(m),N=k(m),Z(q.$$.fragment,m),j=k(m),Z(E.$$.fragment,m),g=k(m),Z(f.$$.fragment,m),M=k(m),A=w(m,"H3",{"data-svelte-h":!0}),he(A)!=="svelte-19zeagg"&&(A.textContent=te),X=k(m),I&&I.l(m),m.forEach(v),p.forEach(v),J=k(e),Z(Q.$$.fragment,e),this.h()},h(){b(l,"class","govuk-grid-column-one-quarter"),b(a,"class","govuk-grid-column-three-quarters"),b(s,"class","govuk-grid-row"),U(s,"margin","1em")},m(e,p){x(n,e,p),W(e,u,p),W(e,s,p),d(s,l),x(c,l,null),d(s,i),d(s,a),d(a,r),d(r,o),d(r,h),d(r,D),d(a,_),P&&P.m(a,null),d(a,B),d(a,H),d(a,L),T&&T.m(a,null),d(a,N),x(q,a,null),d(a,j),x(E,a,null),d(a,g),x(f,a,null),d(a,M),d(a,A),d(a,X),I&&I.m(a,null),W(e,J,p),x(Q,e,p),y=!0},p(e,[p]){const ae={};p&1&&(ae.idx=e[0]),n.$set(ae);const m={};p&1&&(m.currentIdx=e[0]),c.$set(m),(!y||p&1)&&ie(o,e[0]),(!y||p&2)&&ie(D,e[1]),P&&P.p&&(!y||p&16)&&_e(P,oe,e,e[4],y?pe(oe,e[4],p,Ze):ce(e[4]),Le),T&&T.p&&(!y||p&16)&&_e(T,re,e,e[4],y?pe(re,e[4],p,Ye):ce(e[4]),He);const O={};!R&&p&5&&(R=!0,O.value=e[2].ratings[e[0]-1],ge(()=>R=!1)),q.$set(O);const ke={};!F&&p&5&&(F=!0,ke.value=e[2].appraiserComments[e[0]-1],ge(()=>F=!1)),E.$set(ke);const Ce={};!K&&p&5&&(K=!0,Ce.value=e[2].localGuidance[e[0]-1],ge(()=>K=!1)),f.$set(Ce),I&&I.p&&(!y||p&16)&&_e(I,ue,e,e[4],y?pe(ue,e[4],p,Xe):ce(e[4]),Ge);const we={};p&1&&(we.idx=e[0]),Q.$set(we)},i(e){y||(S(n.$$.fragment,e),S(c.$$.fragment,e),S(P,e),S(T,e),S(q.$$.fragment,e),S(E.$$.fragment,e),S(f.$$.fragment,e),S(I,e),S(Q.$$.fragment,e),y=!0)},o(e){z(n.$$.fragment,e),z(c.$$.fragment,e),z(P,e),z(T,e),z(q.$$.fragment,e),z(E.$$.fragment,e),z(f.$$.fragment,e),z(I,e),z(Q.$$.fragment,e),y=!1},d(e){e&&(v(u),v(s),v(J)),ee(n,e),ee(c),P&&P.d(e),T&&T.d(e),ee(q),ee(E),ee(f),I&&I.d(e),ee(Q,e)}}}function et(t,n,u){let s;Je(t,le,_=>u(2,s=_));let{$$slots:l={},$$scope:c}=n,{idx:i}=n,{label:a}=n,r=[["Exemplar","The proposal exceeds the standards in policy and guidance and represents an example of best practice.","#00b050","white"],["Pass","The proposal meets standards in policy and guidance. Where there are shortfalls, these are minor and do not affect the overall position.","#99cc00","black"],["Condition / Obligation to make acceptable","The proposal does not adhere to standards in policy and guidance; however a planning condition/obligation can address any shortfalls.","#ffc000","black"],["Concern","The proposal does not adhere to standards in policy and guidance and more detail is needed to inform the assessment of the proposal. This may include reasonable amendments, improvements to infrastructure and/or additional information.","#ff5050","black"],["Critical issue","The proposal represents a significant departure from standards in policy and guidance. Either comprehensive amendments or the delivery of new infrastructure would be required; or it is unlikely that the deficiency can be addressed.","#ff0000","white"],["Not applicable","This criterion is not a material consideration.","grey","white"]];function o(_){t.$$.not_equal(s.ratings[i-1],_)&&(s.ratings[i-1]=_,le.set(s))}function h(_){t.$$.not_equal(s.appraiserComments[i-1],_)&&(s.appraiserComments[i-1]=_,le.set(s))}function D(_){t.$$.not_equal(s.localGuidance[i-1],_)&&(s.localGuidance[i-1]=_,le.set(s))}return t.$$set=_=>{"idx"in _&&u(0,i=_.idx),"label"in _&&u(1,a=_.label),"$$scope"in _&&u(4,c=_.$$scope)},[i,a,s,r,c,l,o,h,D]}class ct extends Ae{constructor(n){super(),Se(this,n,et,xe,Ne,{idx:0,label:1})}}export{ct as Q};
