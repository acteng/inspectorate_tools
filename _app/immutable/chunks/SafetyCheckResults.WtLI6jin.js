import{s as Se,e as c,a as d,c as v,m as z,g as _,b,f as i,p as Le,i as w,h as e,H as Fe,k as De,t as N,d as I,j as ee,n as te}from"./scheduler.NGc5rx4B.js";import{S as ye,i as He,g as Be,b as oe,f as Je,t as ie,c as Te,a as $e,m as ke,d as Ee}from"./index.CXr-pTxM.js";import{e as Ke}from"./each.C0Oa3ZQW.js";import{s as Pe}from"./data.CB-ig_0x.js";/* empty css                                            */import"./paths.BCLxfRu6.js";import{L as Re}from"./LevelOfServiceTable.LCIj2aZn.js";function Ue(r,t,o){const s=r.slice();return s[2]=t[o],s}function Ge(r){let t,o="This isn't a Street Check";return{c(){t=c("p"),t.textContent=o},l(s){t=v(s,"P",{"data-svelte-h":!0}),z(t)!=="svelte-sb6i45"&&(t.textContent=o)},m(s,u){w(s,t,u)},p:te,i:te,o:te,d(s){s&&i(t)}}}function Qe(r){let t,o,s,u,n,k,p,m;return s=new Re({props:{caption:"Street Level of Service",categories:r[0].levelOfService,overall:r[0].overall,overallLabel:"Overall Street Level of Service",radarChart:!0}}),n=new Re({props:{caption:"Street Level of Service by Transport Mode",categories:r[0].byMode,overall:r[0].overall,overallLabel:"Overall Street Level of Service",barChart:!0}}),p=new Re({props:{caption:"Street Placemaking",categories:r[0].placemakingCategories,overall:r[0].placemakingOverall,overallLabel:"Overall Street Placemaking Score",barChart:!0}}),{c(){t=c("hr"),o=d(),Te(s.$$.fragment),u=d(),Te(n.$$.fragment),k=d(),Te(p.$$.fragment)},l(l){t=v(l,"HR",{}),o=_(l),$e(s.$$.fragment,l),u=_(l),$e(n.$$.fragment,l),k=_(l),$e(p.$$.fragment,l)},m(l,f){w(l,t,f),w(l,o,f),ke(s,l,f),w(l,u,f),ke(n,l,f),w(l,k,f),ke(p,l,f),m=!0},p(l,f){const C={};f&1&&(C.categories=l[0].levelOfService),f&1&&(C.overall=l[0].overall),s.$set(C);const R={};f&1&&(R.categories=l[0].byMode),f&1&&(R.overall=l[0].overall),n.$set(R);const g={};f&1&&(g.categories=l[0].placemakingCategories),f&1&&(g.overall=l[0].placemakingOverall),p.$set(g)},i(l){m||(ie(s.$$.fragment,l),ie(n.$$.fragment,l),ie(p.$$.fragment,l),m=!0)},o(l){oe(s.$$.fragment,l),oe(n.$$.fragment,l),oe(p.$$.fragment,l),m=!1},d(l){l&&(i(t),i(o),i(u),i(k)),Ee(s,l),Ee(n,l),Ee(p,l)}}}function Ve(r){let t,o="This isn't a Path Check";return{c(){t=c("p"),t.textContent=o},l(s){t=v(s,"P",{"data-svelte-h":!0}),z(t)!=="svelte-1112wz9"&&(t.textContent=o)},m(s,u){w(s,t,u)},p:te,i:te,o:te,d(s){s&&i(t)}}}function Xe(r){let t,o,s,u,n,k,p,m;return s=new Re({props:{caption:"Path Level of Service",categories:r[0].levelOfService,overall:r[0].overall,overallLabel:"Overall Path Level of Service",radarChart:!0}}),n=new Re({props:{caption:"Path Level of Service by Transport Mode",categories:r[0].byMode,overall:r[0].overall,overallLabel:"Overall Path Level of Service",barChart:!0,excludeCategory:r[1].horseRiders=="No"?"Horse Riding":null}}),p=new Re({props:{caption:"Path Placemaking",categories:r[0].placemakingCategories,overall:r[0].placemakingOverall,overallLabel:"Overall Path Placemaking Score",barChart:!0}}),{c(){t=c("hr"),o=d(),Te(s.$$.fragment),u=d(),Te(n.$$.fragment),k=d(),Te(p.$$.fragment)},l(l){t=v(l,"HR",{}),o=_(l),$e(s.$$.fragment,l),u=_(l),$e(n.$$.fragment,l),k=_(l),$e(p.$$.fragment,l)},m(l,f){w(l,t,f),w(l,o,f),ke(s,l,f),w(l,u,f),ke(n,l,f),w(l,k,f),ke(p,l,f),m=!0},p(l,f){const C={};f&1&&(C.categories=l[0].levelOfService),f&1&&(C.overall=l[0].overall),s.$set(C);const R={};f&1&&(R.categories=l[0].byMode),f&1&&(R.overall=l[0].overall),f&2&&(R.excludeCategory=l[1].horseRiders=="No"?"Horse Riding":null),n.$set(R);const g={};f&1&&(g.categories=l[0].placemakingCategories),f&1&&(g.overall=l[0].placemakingOverall),p.$set(g)},i(l){m||(ie(s.$$.fragment,l),ie(n.$$.fragment,l),ie(p.$$.fragment,l),m=!0)},o(l){oe(s.$$.fragment,l),oe(n.$$.fragment,l),oe(p.$$.fragment,l),m=!1},d(l){l&&(i(t),i(o),i(u),i(k)),Ee(s,l),Ee(n,l),Ee(p,l)}}}function Ye(r){let t,o='<th colspan="6"></th>';return{c(){t=c("tr"),t.innerHTML=o},l(s){t=v(s,"TR",{"data-svelte-h":!0}),z(t)!=="svelte-1qpfrhg"&&(t.innerHTML=o)},m(s,u){w(s,t,u)},d(s){s&&i(t)}}}function ze(r){let t,o,s,u=(r[2].name||"Untitled junction")+"",n,k,p,m="Walking & Wheeling",l,f,C=Q(r[2].walkingWheeling.existing)+"",R,g,O,F=Q(r[2].walkingWheeling.proposed)+"",j,D,q,x=Q(r[2].walkingWheeling.netDifference)+"",W,H,$,B,V="Cycling",L,J,M=Q(r[2].cycling.existing)+"",T,a,h,P=Q(r[2].cycling.proposed)+"",G,y,K,X=Q(r[2].cycling.netDifference)+"",de,le,U,fe,ge="<b>All</b>",ce,ae,ne=Q(r[2].total.existing)+"",Z,A,re,_e=Q(r[2].total.proposed)+"",ve,Ce,se,me=Q(r[2].total.netDifference)+"",he,be,Y=r[2].name=="Overall"&&Ye();return{c(){Y&&Y.c(),t=d(),o=c("tr"),s=c("th"),n=N(u),k=d(),p=c("th"),p.textContent=m,l=d(),f=c("td"),R=N(C),g=d(),O=c("td"),j=N(F),D=d(),q=c("td"),W=N(x),H=d(),$=c("tr"),B=c("th"),B.textContent=V,L=d(),J=c("td"),T=N(M),a=d(),h=c("td"),G=N(P),y=d(),K=c("td"),de=N(X),le=d(),U=c("tr"),fe=c("th"),fe.innerHTML=ge,ce=d(),ae=c("td"),Z=N(ne),A=d(),re=c("td"),ve=N(_e),Ce=d(),se=c("td"),he=N(me),be=d(),this.h()},l(E){Y&&Y.l(E),t=_(E),o=v(E,"TR",{});var S=b(o);s=v(S,"TH",{rowspan:!0});var we=b(s);n=I(we,u),we.forEach(i),k=_(S),p=v(S,"TH",{"data-svelte-h":!0}),z(p)!=="svelte-4l8ufc"&&(p.textContent=m),l=_(S),f=v(S,"TD",{});var Oe=b(f);R=I(Oe,C),Oe.forEach(i),g=_(S),O=v(S,"TD",{});var Me=b(O);j=I(Me,F),Me.forEach(i),D=_(S),q=v(S,"TD",{});var Ne=b(q);W=I(Ne,x),Ne.forEach(i),S.forEach(i),H=_(E),$=v(E,"TR",{});var pe=b($);B=v(pe,"TH",{"data-svelte-h":!0}),z(B)!=="svelte-1g6bqmx"&&(B.textContent=V),L=_(pe),J=v(pe,"TD",{});var Ie=b(J);T=I(Ie,M),Ie.forEach(i),a=_(pe),h=v(pe,"TD",{});var Ae=b(h);G=I(Ae,P),Ae.forEach(i),y=_(pe),K=v(pe,"TD",{});var xe=b(K);de=I(xe,X),xe.forEach(i),pe.forEach(i),le=_(E),U=v(E,"TR",{});var ue=b(U);fe=v(ue,"TH",{"data-svelte-h":!0}),z(fe)!=="svelte-17itmy4"&&(fe.innerHTML=ge),ce=_(ue),ae=v(ue,"TD",{});var We=b(ae);Z=I(We,ne),We.forEach(i),A=_(ue),re=v(ue,"TD",{});var je=b(re);ve=I(je,_e),je.forEach(i),Ce=_(ue),se=v(ue,"TD",{});var qe=b(se);he=I(qe,me),qe.forEach(i),be=_(ue),ue.forEach(i),this.h()},h(){Le(s,"rowspan","3")},m(E,S){Y&&Y.m(E,S),w(E,t,S),w(E,o,S),e(o,s),e(s,n),e(o,k),e(o,p),e(o,l),e(o,f),e(f,R),e(o,g),e(o,O),e(O,j),e(o,D),e(o,q),e(q,W),w(E,H,S),w(E,$,S),e($,B),e($,L),e($,J),e(J,T),e($,a),e($,h),e(h,G),e($,y),e($,K),e(K,de),w(E,le,S),w(E,U,S),e(U,fe),e(U,ce),e(U,ae),e(ae,Z),e(U,A),e(U,re),e(re,ve),e(U,Ce),e(U,se),e(se,he),e(U,be)},p(E,S){E[2].name=="Overall"?Y||(Y=Ye(),Y.c(),Y.m(t.parentNode,t)):Y&&(Y.d(1),Y=null),S&1&&u!==(u=(E[2].name||"Untitled junction")+"")&&ee(n,u),S&1&&C!==(C=Q(E[2].walkingWheeling.existing)+"")&&ee(R,C),S&1&&F!==(F=Q(E[2].walkingWheeling.proposed)+"")&&ee(j,F),S&1&&x!==(x=Q(E[2].walkingWheeling.netDifference)+"")&&ee(W,x),S&1&&M!==(M=Q(E[2].cycling.existing)+"")&&ee(T,M),S&1&&P!==(P=Q(E[2].cycling.proposed)+"")&&ee(G,P),S&1&&X!==(X=Q(E[2].cycling.netDifference)+"")&&ee(de,X),S&1&&ne!==(ne=Q(E[2].total.existing)+"")&&ee(Z,ne),S&1&&_e!==(_e=Q(E[2].total.proposed)+"")&&ee(ve,_e),S&1&&me!==(me=Q(E[2].total.netDifference)+"")&&ee(he,me)},d(E){E&&(i(t),i(o),i(H),i($),i(le),i(U)),Y&&Y.d(E)}}}function Ze(r){let t,o="4. Street Check Results",s,u,n,k,p,m="5. Path Check Results",l,f,C,R,g,O,F="6. Junction Assessment Tool Check",j,D,q="<th>Junction Name</th> <th>Modes</th> <th>Existing Layout</th> <th>Proposed Layout</th> <th>Net difference</th>",x,W;const H=[Qe,Ge],$=[];function B(a,h){return a[1].summary.checkType=="street"?0:1}u=B(r),n=$[u]=H[u](r);const V=[Xe,Ve],L=[];function J(a,h){return a[1].summary.checkType=="path"?0:1}f=J(r),C=L[f]=V[f](r);let M=Ke(r[0].jat),T=[];for(let a=0;a<M.length;a+=1)T[a]=ze(Ue(r,M,a));return{c(){t=c("h2"),t.textContent=o,s=d(),n.c(),k=d(),p=c("h2"),p.textContent=m,l=d(),C.c(),R=d(),g=c("table"),O=c("caption"),O.textContent=F,j=d(),D=c("tr"),D.innerHTML=q,x=d();for(let a=0;a<T.length;a+=1)T[a].c();this.h()},l(a){t=v(a,"H2",{"data-svelte-h":!0}),z(t)!=="svelte-12wm74b"&&(t.textContent=o),s=_(a),n.l(a),k=_(a),p=v(a,"H2",{"data-svelte-h":!0}),z(p)!=="svelte-1n49cye"&&(p.textContent=m),l=_(a),C.l(a),R=_(a),g=v(a,"TABLE",{});var h=b(g);O=v(h,"CAPTION",{class:!0,"data-svelte-h":!0}),z(O)!=="svelte-1wa1due"&&(O.textContent=F),j=_(h),D=v(h,"TR",{"data-svelte-h":!0}),z(D)!=="svelte-1foehd"&&(D.innerHTML=q),x=_(h);for(let P=0;P<T.length;P+=1)T[P].l(h);h.forEach(i),this.h()},h(){Le(O,"class","govuk-table__caption govuk-table__caption--m")},m(a,h){w(a,t,h),w(a,s,h),$[u].m(a,h),w(a,k,h),w(a,p,h),w(a,l,h),L[f].m(a,h),w(a,R,h),w(a,g,h),e(g,O),e(g,j),e(g,D),e(g,x);for(let P=0;P<T.length;P+=1)T[P]&&T[P].m(g,null);W=!0},p(a,[h]){let P=u;u=B(a),u===P?$[u].p(a,h):(Be(),oe($[P],1,1,()=>{$[P]=null}),Je(),n=$[u],n?n.p(a,h):(n=$[u]=H[u](a),n.c()),ie(n,1),n.m(k.parentNode,k));let G=f;if(f=J(a),f===G?L[f].p(a,h):(Be(),oe(L[G],1,1,()=>{L[G]=null}),Je(),C=L[f],C?C.p(a,h):(C=L[f]=V[f](a),C.c()),ie(C,1),C.m(R.parentNode,R)),h&1){M=Ke(a[0].jat);let y;for(y=0;y<M.length;y+=1){const K=Ue(a,M,y);T[y]?T[y].p(K,h):(T[y]=ze(K),T[y].c(),T[y].m(g,null))}for(;y<T.length;y+=1)T[y].d(1);T.length=M.length}},i(a){W||(ie(n),ie(C),W=!0)},o(a){oe(n),oe(C),W=!1},d(a){a&&(i(t),i(s),i(k),i(p),i(l),i(R),i(g)),$[u].d(a),L[f].d(a),Fe(T,a)}}}function Q(r){return r==null?"Not Completed":`${r}%`}function et(r,t,o){let s;De(r,Pe,n=>o(1,s=n));let{results:u}=t;return r.$$set=n=>{"results"in n&&o(0,u=n.results)},[u,s]}class dt extends ye{constructor(t){super(),He(this,t,et,Ze,Se,{results:0})}}function tt(r){let t,o,s="1. Summary of Scheme",u,n,k,p="Scheme Name",m,l,f=r[0].summary.schemeName+"",C,R,g,O,F="Scheme Reference",j,D,q=r[0].summary.schemeReference+"",x,W,H,$,B="Local Authority",V,L,J=r[0].summary.authority+"",M,T,a,h,P="Design Stage",G,y,K=r[0].summary.designStage+"",X,de,le,U,fe="Route Length Assessed in this File (km)",ge,ce,ae=r[0].summary.assessedRouteLengthKm+"",ne;return{c(){t=c("table"),o=c("caption"),o.textContent=s,u=d(),n=c("tr"),k=c("th"),k.textContent=p,m=d(),l=c("td"),C=N(f),R=d(),g=c("tr"),O=c("th"),O.textContent=F,j=d(),D=c("td"),x=N(q),W=d(),H=c("tr"),$=c("th"),$.textContent=B,V=d(),L=c("td"),M=N(J),T=d(),a=c("tr"),h=c("th"),h.textContent=P,G=d(),y=c("td"),X=N(K),de=d(),le=c("tr"),U=c("th"),U.textContent=fe,ge=d(),ce=c("td"),ne=N(ae),this.h()},l(Z){t=v(Z,"TABLE",{});var A=b(t);o=v(A,"CAPTION",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-wsc00j"&&(o.textContent=s),u=_(A),n=v(A,"TR",{});var re=b(n);k=v(re,"TH",{"data-svelte-h":!0}),z(k)!=="svelte-9b7ad8"&&(k.textContent=p),m=_(re),l=v(re,"TD",{});var _e=b(l);C=I(_e,f),_e.forEach(i),re.forEach(i),R=_(A),g=v(A,"TR",{});var ve=b(g);O=v(ve,"TH",{"data-svelte-h":!0}),z(O)!=="svelte-23tdnw"&&(O.textContent=F),j=_(ve),D=v(ve,"TD",{});var Ce=b(D);x=I(Ce,q),Ce.forEach(i),ve.forEach(i),W=_(A),H=v(A,"TR",{});var se=b(H);$=v(se,"TH",{"data-svelte-h":!0}),z($)!=="svelte-1qwcyrc"&&($.textContent=B),V=_(se),L=v(se,"TD",{});var me=b(L);M=I(me,J),me.forEach(i),se.forEach(i),T=_(A),a=v(A,"TR",{});var he=b(a);h=v(he,"TH",{"data-svelte-h":!0}),z(h)!=="svelte-1hvpp5a"&&(h.textContent=P),G=_(he),y=v(he,"TD",{});var be=b(y);X=I(be,K),be.forEach(i),he.forEach(i),de=_(A),le=v(A,"TR",{});var Y=b(le);U=v(Y,"TH",{"data-svelte-h":!0}),z(U)!=="svelte-nix1wk"&&(U.textContent=fe),ge=_(Y),ce=v(Y,"TD",{});var E=b(ce);ne=I(E,ae),E.forEach(i),Y.forEach(i),A.forEach(i),this.h()},h(){Le(o,"class","govuk-table__caption govuk-table__caption--m")},m(Z,A){w(Z,t,A),e(t,o),e(t,u),e(t,n),e(n,k),e(n,m),e(n,l),e(l,C),e(t,R),e(t,g),e(g,O),e(g,j),e(g,D),e(D,x),e(t,W),e(t,H),e(H,$),e(H,V),e(H,L),e(L,M),e(t,T),e(t,a),e(a,h),e(a,G),e(a,y),e(y,X),e(t,de),e(t,le),e(le,U),e(le,ge),e(le,ce),e(ce,ne)},p(Z,[A]){A&1&&f!==(f=Z[0].summary.schemeName+"")&&ee(C,f),A&1&&q!==(q=Z[0].summary.schemeReference+"")&&ee(x,q),A&1&&J!==(J=Z[0].summary.authority+"")&&ee(M,J),A&1&&K!==(K=Z[0].summary.designStage+"")&&ee(X,K),A&1&&ae!==(ae=Z[0].summary.assessedRouteLengthKm+"")&&ee(ne,ae)},i:te,o:te,d(Z){Z&&i(t)}}}function lt(r,t,o){let s;return De(r,Pe,u=>o(0,s=u)),[s]}class _t extends ye{constructor(t){super(),He(this,t,lt,tt,Se,{})}}function at(r){let t,o,s="2. Policy Check Results",u,n,k='<th rowspan="2">Potential Policy Conflicts</th> <th>Existing Route</th> <th>Designed Route</th> <th>Removed</th> <th>Introduced</th> <th>Remaining</th>',p,m,l,f=r[0].existing+"",C,R,g,O=r[0].designed+"",F,j,D,q=r[0].removed+"",x,W,H,$=r[0].designed+"",B,V,L,J=r[0].designed+r[0].existing-r[0].removed+"",M;return{c(){t=c("table"),o=c("caption"),o.textContent=s,u=d(),n=c("tr"),n.innerHTML=k,p=d(),m=c("tr"),l=c("td"),C=N(f),R=d(),g=c("td"),F=N(O),j=d(),D=c("td"),x=N(q),W=d(),H=c("td"),B=N($),V=d(),L=c("td"),M=N(J),this.h()},l(T){t=v(T,"TABLE",{});var a=b(t);o=v(a,"CAPTION",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-ryvefa"&&(o.textContent=s),u=_(a),n=v(a,"TR",{"data-svelte-h":!0}),z(n)!=="svelte-yyn3b"&&(n.innerHTML=k),p=_(a),m=v(a,"TR",{});var h=b(m);l=v(h,"TD",{});var P=b(l);C=I(P,f),P.forEach(i),R=_(h),g=v(h,"TD",{});var G=b(g);F=I(G,O),G.forEach(i),j=_(h),D=v(h,"TD",{});var y=b(D);x=I(y,q),y.forEach(i),W=_(h),H=v(h,"TD",{});var K=b(H);B=I(K,$),K.forEach(i),V=_(h),L=v(h,"TD",{});var X=b(L);M=I(X,J),X.forEach(i),h.forEach(i),a.forEach(i),this.h()},h(){Le(o,"class","govuk-table__caption govuk-table__caption--m")},m(T,a){w(T,t,a),e(t,o),e(t,u),e(t,n),e(t,p),e(t,m),e(m,l),e(l,C),e(m,R),e(m,g),e(g,F),e(m,j),e(m,D),e(D,x),e(m,W),e(m,H),e(H,B),e(m,V),e(m,L),e(L,M)},p:te,i:te,o:te,d(T){T&&i(t)}}}function nt(r,t,o){let s;return De(r,Pe,n=>o(1,s=n)),[{existing:s.policyConflictLog.filter(n=>n.stage=="Existing").length,designed:s.policyConflictLog.filter(n=>n.stage=="Design").length,removed:s.policyConflictLog.filter(n=>n.resolved=="Yes").length}]}class mt extends ye{constructor(t){super(),He(this,t,nt,at,Se,{})}}function rt(r){let t,o,s="3. Safety Check Results (Critical Issues only)",u,n,k='<th rowspan="2">Critical Issues</th> <th>Existing Route</th> <th>Designed Route</th> <th>Removed</th> <th>Introduced</th> <th>Remaining</th>',p,m,l,f=r[0].existing+"",C,R,g,O=r[0].designed+"",F,j,D,q=r[0].removed+"",x,W,H,$=r[0].designed+"",B,V,L,J=r[0].designed+r[0].existing-r[0].removed+"",M;return{c(){t=c("table"),o=c("caption"),o.textContent=s,u=d(),n=c("tr"),n.innerHTML=k,p=d(),m=c("tr"),l=c("td"),C=N(f),R=d(),g=c("td"),F=N(O),j=d(),D=c("td"),x=N(q),W=d(),H=c("td"),B=N($),V=d(),L=c("td"),M=N(J),this.h()},l(T){t=v(T,"TABLE",{});var a=b(t);o=v(a,"CAPTION",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-cpp4n"&&(o.textContent=s),u=_(a),n=v(a,"TR",{"data-svelte-h":!0}),z(n)!=="svelte-16gp70r"&&(n.innerHTML=k),p=_(a),m=v(a,"TR",{});var h=b(m);l=v(h,"TD",{});var P=b(l);C=I(P,f),P.forEach(i),R=_(h),g=v(h,"TD",{});var G=b(g);F=I(G,O),G.forEach(i),j=_(h),D=v(h,"TD",{});var y=b(D);x=I(y,q),y.forEach(i),W=_(h),H=v(h,"TD",{});var K=b(H);B=I(K,$),K.forEach(i),V=_(h),L=v(h,"TD",{});var X=b(L);M=I(X,J),X.forEach(i),h.forEach(i),a.forEach(i),this.h()},h(){Le(o,"class","govuk-table__caption govuk-table__caption--m")},m(T,a){w(T,t,a),e(t,o),e(t,u),e(t,n),e(t,p),e(t,m),e(m,l),e(l,C),e(m,R),e(m,g),e(g,F),e(m,j),e(m,D),e(D,x),e(m,W),e(m,H),e(H,B),e(m,V),e(m,L),e(L,M)},p:te,i:te,o:te,d(T){T&&i(t)}}}function st(r,t,o){let s;return De(r,Pe,n=>o(1,s=n)),[{existing:s.criticalIssues.filter(n=>n.stage=="Existing").length,designed:s.criticalIssues.filter(n=>n.stage=="Design").length,removed:s.criticalIssues.filter(n=>n.resolved=="Yes").length}]}class pt extends ye{constructor(t){super(),He(this,t,st,rt,Se,{})}}export{dt as C,mt as P,_t as S,pt as a};
