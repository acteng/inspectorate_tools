import{s as Ee,r as se,e as k,a as j,c as V,m as te,g as C,b as w,f as p,o as t,i as G,h as f,w as oe,G as Ne,H as ie,t as re,I as Ie,d as ne,J as De,F as K,v as A,z as ue,j as _e,y as we}from"./scheduler.DNnUYlgZ.js";import{S as Te,i as Le,e as ve,c as de,a as fe,m as ce,t as ge,b as he,d as pe}from"./index.tVBxdTp3.js";import{e as me}from"./each.BkSaxPTE.js";/* empty css                                                       */import{T as be}from"./TextArea.NwvsZ3J4.js";import{v as qe}from"./v4.D8aEg3BZ.js";function ke(a,l,n){const _=a.slice();return _[11]=l[n][0],_[12]=l[n][1],_[13]=l[n][2],_[14]=l[n][3],_[16]=n,_}function Ve(a){let l,n,_,s,c,E,m=!1,M,I,h,b=a[11]+"",q,H,o,P,D,i,d,F,B=!1,U,T,e,v=a[11]+"",N,S,g,L,z,J=a[12]+"",O,Q,W,X;return O=ie(a[7][0]),Q=ie(a[7][1]),{c(){l=k("div"),n=k("div"),_=k("div"),s=k("input"),M=j(),I=k("label"),h=k("span"),q=re(b),o=j(),P=k("div"),D=k("div"),i=k("input"),U=j(),T=k("label"),e=k("span"),N=re(v),g=j(),L=k("div"),z=new Ie(!1),this.h()},l(r){l=V(r,"DIV",{class:!0});var u=w(l);n=V(u,"DIV",{class:!0});var Y=w(n);_=V(Y,"DIV",{class:!0});var R=w(_);s=V(R,"INPUT",{class:!0,id:!0,type:!0}),M=C(R),I=V(R,"LABEL",{class:!0,for:!0});var Z=w(I);h=V(Z,"SPAN",{class:!0});var x=w(h);q=ne(x,b),x.forEach(p),Z.forEach(p),R.forEach(p),Y.forEach(p),o=C(u),P=V(u,"DIV",{class:!0});var $=w(P);D=V($,"DIV",{class:!0});var y=w(D);i=V(y,"INPUT",{class:!0,id:!0,type:!0}),U=C(y),T=V(y,"LABEL",{class:!0,for:!0});var ee=w(T);e=V(ee,"SPAN",{class:!0});var ae=w(e);N=ne(ae,v),ae.forEach(p),ee.forEach(p),y.forEach(p),$.forEach(p),g=C(u),L=V(u,"DIV",{class:!0,style:!0});var le=w(L);z=De(le,!1),le.forEach(p),u.forEach(p),this.h()},h(){t(s,"class","govuk-radios__input"),t(s,"id",c=a[5]+a[11]+"-existing"),t(s,"type","radio"),s.__value=E=a[11],K(s,s.__value),t(h,"class","govuk-tag"),A(h,"background",a[13]),A(h,"color",a[14]),t(I,"class","govuk-label govuk-radios__label"),t(I,"for",H=a[5]+a[11]+"-existing"),t(_,"class","govuk-radios__item"),t(n,"class","govuk-grid-column-one-quarter"),t(i,"class","govuk-radios__input"),t(i,"id",d=a[5]+a[11]+"-proposed"),t(i,"type","radio"),i.__value=F=a[11],K(i,i.__value),t(e,"class","govuk-tag"),A(e,"background",a[13]),A(e,"color",a[14]),t(T,"class","govuk-label govuk-radios__label"),t(T,"for",S=a[5]+a[11]+"-proposed"),t(D,"class","govuk-radios__item"),t(P,"class","govuk-grid-column-one-quarter"),z.a=null,t(L,"class","govuk-grid-column-one-half"),A(L,"border-left","5px solid "+a[13]),t(l,"class","govuk-grid-row"),O.p(i),Q.p(s)},m(r,u){G(r,l,u),f(l,n),f(n,_),f(_,s),s.checked=s.__value===a[0],f(_,M),f(_,I),f(I,h),f(h,q),f(l,o),f(l,P),f(P,D),f(D,i),i.checked=i.__value===a[1],f(D,U),f(D,T),f(T,e),f(e,N),f(l,g),f(l,L),z.m(J,L),W||(X=[ue(s,"change",a[6]),ue(i,"change",a[8])],W=!0)},p(r,u){u&16&&c!==(c=r[5]+r[11]+"-existing")&&t(s,"id",c),u&16&&E!==(E=r[11])&&(s.__value=E,K(s,s.__value),m=!0),(m||u&17)&&(s.checked=s.__value===r[0]),u&16&&b!==(b=r[11]+"")&&_e(q,b),u&16&&A(h,"background",r[13]),u&16&&A(h,"color",r[14]),u&16&&H!==(H=r[5]+r[11]+"-existing")&&t(I,"for",H),u&16&&d!==(d=r[5]+r[11]+"-proposed")&&t(i,"id",d),u&16&&F!==(F=r[11])&&(i.__value=F,K(i,i.__value),B=!0),(B||u&18)&&(i.checked=i.__value===r[1]),u&16&&v!==(v=r[11]+"")&&_e(N,v),u&16&&A(e,"background",r[13]),u&16&&A(e,"color",r[14]),u&16&&S!==(S=r[5]+r[11]+"-proposed")&&t(T,"for",S),u&16&&J!==(J=r[12]+"")&&z.p(J),u&16&&A(L,"border-left","5px solid "+r[13])},d(r){r&&p(l),O.r(),Q.r(),W=!1,we(X)}}}function He(a){let l,n='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for existing infrastructure</label></div> <div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for proposed infrastructure</label></div> <div class="govuk-grid-column-one-half"></div>',_,s,c,E,m,M,I,h,b,q,H,o,P="",D,i=me(a[4]),d=[];for(let e=0;e<i.length;e+=1)d[e]=Ve(ke(a,i,e));function F(e){a[9](e)}let B={label:"Notes to justify given score for existing infrastructure",rows:8};a[2]!==void 0&&(B.value=a[2]),m=new be({props:B}),se.push(()=>ve(m,"value",F));function U(e){a[10](e)}let T={label:"Notes to justify given score for proposed infrastructure",rows:8};return a[3]!==void 0&&(T.value=a[3]),b=new be({props:T}),se.push(()=>ve(b,"value",U)),{c(){l=k("div"),l.innerHTML=n,_=j();for(let e=0;e<d.length;e+=1)d[e].c();s=j(),c=k("div"),E=k("div"),de(m.$$.fragment),I=j(),h=k("div"),de(b.$$.fragment),H=j(),o=k("div"),o.innerHTML=P,this.h()},l(e){l=V(e,"DIV",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-1h4t6o"&&(l.innerHTML=n),_=C(e);for(let g=0;g<d.length;g+=1)d[g].l(e);s=C(e),c=V(e,"DIV",{class:!0});var v=w(c);E=V(v,"DIV",{class:!0});var N=w(E);fe(m.$$.fragment,N),N.forEach(p),I=C(v),h=V(v,"DIV",{class:!0});var S=w(h);fe(b.$$.fragment,S),S.forEach(p),H=C(v),o=V(v,"DIV",{class:!0,"data-svelte-h":!0}),te(o)!=="svelte-1ynyi4l"&&(o.innerHTML=P),v.forEach(p),this.h()},h(){t(l,"class","govuk-grid-row"),t(E,"class","govuk-grid-column-one-quarter"),t(h,"class","govuk-grid-column-one-quarter"),t(o,"class","govuk-grid-column-one-half"),t(c,"class","govuk-grid-row")},m(e,v){G(e,l,v),G(e,_,v);for(let N=0;N<d.length;N+=1)d[N]&&d[N].m(e,v);G(e,s,v),G(e,c,v),f(c,E),ce(m,E,null),f(c,I),f(c,h),ce(b,h,null),f(c,H),f(c,o),D=!0},p(e,[v]){if(v&51){i=me(e[4]);let g;for(g=0;g<i.length;g+=1){const L=ke(e,i,g);d[g]?d[g].p(L,v):(d[g]=Ve(L),d[g].c(),d[g].m(s.parentNode,s))}for(;g<d.length;g+=1)d[g].d(1);d.length=i.length}const N={};!M&&v&4&&(M=!0,N.value=e[2],oe(()=>M=!1)),m.$set(N);const S={};!q&&v&8&&(q=!0,S.value=e[3],oe(()=>q=!1)),b.$set(S)},i(e){D||(ge(m.$$.fragment,e),ge(b.$$.fragment,e),D=!0)},o(e){he(m.$$.fragment,e),he(b.$$.fragment,e),D=!1},d(e){e&&(p(l),p(_),p(s),p(c)),Ne(d,e),pe(m),pe(b)}}}function Se(a,l,n){let{choices:_}=l,{existingValue:s}=l,{proposedValue:c}=l,{existingNotes:E}=l,{proposedNotes:m}=l,M=qe();const I=[[],[]];function h(){s=this.__value,n(0,s)}function b(){c=this.__value,n(1,c)}function q(o){E=o,n(2,E)}function H(o){m=o,n(3,m)}return a.$$set=o=>{"choices"in o&&n(4,_=o.choices),"existingValue"in o&&n(0,s=o.existingValue),"proposedValue"in o&&n(1,c=o.proposedValue),"existingNotes"in o&&n(2,E=o.existingNotes),"proposedNotes"in o&&n(3,m=o.proposedNotes)},[s,c,E,m,_,M,h,I,b,q,H]}class Be extends Te{constructor(l){super(),Le(this,l,Se,He,Ee,{choices:4,existingValue:0,proposedValue:1,existingNotes:2,proposedNotes:3})}}export{Be as F};
