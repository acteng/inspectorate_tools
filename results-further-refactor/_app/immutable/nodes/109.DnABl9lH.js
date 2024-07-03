import{s as Be,e as T,a as _,c as w,m as X,g as p,b as J,f as v,p as Fe,i as $,h as u,G as Qe,k as Ge,t as x,d as ee,j as te,n as Z,w as Ve,x as Xe}from"../chunks/scheduler.ytQcc2rf.js";import{S as Ie,i as Ke,g as we,b as P,f as Le,t as E,c as B,a as F,m as G,d as I,e as Ye}from"../chunks/index.D9yYtTfk.js";/* empty css                                                               */import{T as Ze}from"../chunks/TextArea.BNsNWsw2.js";import{s as Oe}from"../chunks/data.CyFSPWbu.js";import{g as xe}from"../chunks/results.Bd8Ahlg4.js";import{L as se,O as et,S as tt,P as lt,a as rt}from"../chunks/SafetyCheckResults.Hten5xHV.js";import{e as qe}from"../chunks/each.2RvRdhFj.js";/* empty css                                                    */import"../chunks/paths.CHg5T2hO.js";function Ue(a,t,n){const e=a.slice();return e[2]=t[n],e}function at(a){let t,n="This isn't a Street Check";return{c(){t=T("p"),t.textContent=n},l(e){t=w(e,"P",{"data-svelte-h":!0}),X(t)!=="svelte-sb6i45"&&(t.textContent=n)},m(e,i){$(e,t,i)},p:Z,i:Z,o:Z,d(e){e&&v(t)}}}function nt(a){let t,n,e,i,f,m,c,y;return e=new se({props:{caption:"Street Level of Service",categories:a[0].levelOfService,overall:a[0].overall,overallLabel:"Overall Street Level of Service",radarChart:!0}}),f=new se({props:{caption:"Street Level of Service by Transport Mode",categories:a[0].byMode,overall:a[0].overall,overallLabel:"Overall Street Level of Service",barChart:!0}}),c=new se({props:{caption:"Street Placemaking",categories:a[0].placemakingCategories,overall:a[0].placemakingOverall,overallLabel:"Overall Street Placemaking Score",barChart:!0}}),{c(){t=T("hr"),n=_(),B(e.$$.fragment),i=_(),B(f.$$.fragment),m=_(),B(c.$$.fragment)},l(l){t=w(l,"HR",{}),n=p(l),F(e.$$.fragment,l),i=p(l),F(f.$$.fragment,l),m=p(l),F(c.$$.fragment,l)},m(l,o){$(l,t,o),$(l,n,o),G(e,l,o),$(l,i,o),G(f,l,o),$(l,m,o),G(c,l,o),y=!0},p(l,o){const h={};o&1&&(h.categories=l[0].levelOfService),o&1&&(h.overall=l[0].overall),e.$set(h);const d={};o&1&&(d.categories=l[0].byMode),o&1&&(d.overall=l[0].overall),f.$set(d);const S={};o&1&&(S.categories=l[0].placemakingCategories),o&1&&(S.overall=l[0].placemakingOverall),c.$set(S)},i(l){y||(E(e.$$.fragment,l),E(f.$$.fragment,l),E(c.$$.fragment,l),y=!0)},o(l){P(e.$$.fragment,l),P(f.$$.fragment,l),P(c.$$.fragment,l),y=!1},d(l){l&&(v(t),v(n),v(i),v(m)),I(e,l),I(f,l),I(c,l)}}}function it(a){let t,n="This isn't a Path Check";return{c(){t=T("p"),t.textContent=n},l(e){t=w(e,"P",{"data-svelte-h":!0}),X(t)!=="svelte-1112wz9"&&(t.textContent=n)},m(e,i){$(e,t,i)},p:Z,i:Z,o:Z,d(e){e&&v(t)}}}function st(a){let t,n,e,i,f,m,c,y;return e=new se({props:{caption:"Path Level of Service",categories:a[0].levelOfService,overall:a[0].overall,overallLabel:"Overall Path Level of Service",radarChart:!0}}),f=new se({props:{caption:"Path Level of Service by Transport Mode",categories:a[0].byMode,overall:a[0].overall,overallLabel:"Overall Path Level of Service",barChart:!0,excludeCategory:a[1].horseRiders=="No"?"Horse Riding":null}}),c=new se({props:{caption:"Path Placemaking",categories:a[0].placemakingCategories,overall:a[0].placemakingOverall,overallLabel:"Overall Path Placemaking Score",barChart:!0}}),{c(){t=T("hr"),n=_(),B(e.$$.fragment),i=_(),B(f.$$.fragment),m=_(),B(c.$$.fragment)},l(l){t=w(l,"HR",{}),n=p(l),F(e.$$.fragment,l),i=p(l),F(f.$$.fragment,l),m=p(l),F(c.$$.fragment,l)},m(l,o){$(l,t,o),$(l,n,o),G(e,l,o),$(l,i,o),G(f,l,o),$(l,m,o),G(c,l,o),y=!0},p(l,o){const h={};o&1&&(h.categories=l[0].levelOfService),o&1&&(h.overall=l[0].overall),e.$set(h);const d={};o&1&&(d.categories=l[0].byMode),o&1&&(d.overall=l[0].overall),o&2&&(d.excludeCategory=l[1].horseRiders=="No"?"Horse Riding":null),f.$set(d);const S={};o&1&&(S.categories=l[0].placemakingCategories),o&1&&(S.overall=l[0].placemakingOverall),c.$set(S)},i(l){y||(E(e.$$.fragment,l),E(f.$$.fragment,l),E(c.$$.fragment,l),y=!0)},o(l){P(e.$$.fragment,l),P(f.$$.fragment,l),P(c.$$.fragment,l),y=!1},d(l){l&&(v(t),v(n),v(i),v(m)),I(e,l),I(f,l),I(c,l)}}}function ze(a){let t,n='<th colspan="6"></th>';return{c(){t=T("tr"),t.innerHTML=n},l(e){t=w(e,"TR",{"data-svelte-h":!0}),X(t)!=="svelte-1qpfrhg"&&(t.innerHTML=n)},m(e,i){$(e,t,i)},d(e){e&&v(t)}}}function Je(a){let t,n,e,i=(a[2].name||"Untitled junction")+"",f,m,c,y="Walking & Wheeling",l,o,h=D(a[2].walkingWheeling.existing)+"",d,S,R,K=D(a[2].walkingWheeling.proposed)+"",M,q,N,z=D(a[2].walkingWheeling.netDifference)+"",V,A,O,Y,re="Cycling",r,k,W=D(a[2].cycling.existing)+"",L,s,g,H=D(a[2].cycling.proposed)+"",ae,j,ne,fe=D(a[2].cycling.netDifference)+"",$e,he,Q,oe,Re="<b>All</b>",Ce,ve,ue=D(a[2].total.existing)+"",ge,de,ce,me=D(a[2].total.proposed)+"",be,Se,_e,pe=D(a[2].total.netDifference)+"",ke,Te,U=a[2].name=="Overall"&&ze();return{c(){U&&U.c(),t=_(),n=T("tr"),e=T("th"),f=x(i),m=_(),c=T("th"),c.textContent=y,l=_(),o=T("td"),d=x(h),S=_(),R=T("td"),M=x(K),q=_(),N=T("td"),V=x(z),A=_(),O=T("tr"),Y=T("th"),Y.textContent=re,r=_(),k=T("td"),L=x(W),s=_(),g=T("td"),ae=x(H),j=_(),ne=T("td"),$e=x(fe),he=_(),Q=T("tr"),oe=T("th"),oe.innerHTML=Re,Ce=_(),ve=T("td"),ge=x(ue),de=_(),ce=T("td"),be=x(me),Se=_(),_e=T("td"),ke=x(pe),Te=_(),this.h()},l(b){U&&U.l(b),t=p(b),n=w(b,"TR",{});var C=J(n);e=w(C,"TH",{rowspan:!0});var ye=J(e);f=ee(ye,i),ye.forEach(v),m=p(C),c=w(C,"TH",{"data-svelte-h":!0}),X(c)!=="svelte-4l8ufc"&&(c.textContent=y),l=p(C),o=w(C,"TD",{});var Pe=J(o);d=ee(Pe,h),Pe.forEach(v),S=p(C),R=w(C,"TD",{});var Ee=J(R);M=ee(Ee,K),Ee.forEach(v),q=p(C),N=w(C,"TD",{});var He=J(N);V=ee(He,z),He.forEach(v),C.forEach(v),A=p(b),O=w(b,"TR",{});var ie=J(O);Y=w(ie,"TH",{"data-svelte-h":!0}),X(Y)!=="svelte-1g6bqmx"&&(Y.textContent=re),r=p(ie),k=w(ie,"TD",{});var De=J(k);L=ee(De,W),De.forEach(v),s=p(ie),g=w(ie,"TD",{});var Me=J(g);ae=ee(Me,H),Me.forEach(v),j=p(ie),ne=w(ie,"TD",{});var Ne=J(ne);$e=ee(Ne,fe),Ne.forEach(v),ie.forEach(v),he=p(b),Q=w(b,"TR",{});var le=J(Q);oe=w(le,"TH",{"data-svelte-h":!0}),X(oe)!=="svelte-17itmy4"&&(oe.innerHTML=Re),Ce=p(le),ve=w(le,"TD",{});var Ae=J(ve);ge=ee(Ae,ue),Ae.forEach(v),de=p(le),ce=w(le,"TD",{});var We=J(ce);be=ee(We,me),We.forEach(v),Se=p(le),_e=w(le,"TD",{});var je=J(_e);ke=ee(je,pe),je.forEach(v),Te=p(le),le.forEach(v),this.h()},h(){Fe(e,"rowspan","3")},m(b,C){U&&U.m(b,C),$(b,t,C),$(b,n,C),u(n,e),u(e,f),u(n,m),u(n,c),u(n,l),u(n,o),u(o,d),u(n,S),u(n,R),u(R,M),u(n,q),u(n,N),u(N,V),$(b,A,C),$(b,O,C),u(O,Y),u(O,r),u(O,k),u(k,L),u(O,s),u(O,g),u(g,ae),u(O,j),u(O,ne),u(ne,$e),$(b,he,C),$(b,Q,C),u(Q,oe),u(Q,Ce),u(Q,ve),u(ve,ge),u(Q,de),u(Q,ce),u(ce,be),u(Q,Se),u(Q,_e),u(_e,ke),u(Q,Te)},p(b,C){b[2].name=="Overall"?U||(U=ze(),U.c(),U.m(t.parentNode,t)):U&&(U.d(1),U=null),C&1&&i!==(i=(b[2].name||"Untitled junction")+"")&&te(f,i),C&1&&h!==(h=D(b[2].walkingWheeling.existing)+"")&&te(d,h),C&1&&K!==(K=D(b[2].walkingWheeling.proposed)+"")&&te(M,K),C&1&&z!==(z=D(b[2].walkingWheeling.netDifference)+"")&&te(V,z),C&1&&W!==(W=D(b[2].cycling.existing)+"")&&te(L,W),C&1&&H!==(H=D(b[2].cycling.proposed)+"")&&te(ae,H),C&1&&fe!==(fe=D(b[2].cycling.netDifference)+"")&&te($e,fe),C&1&&ue!==(ue=D(b[2].total.existing)+"")&&te(ge,ue),C&1&&me!==(me=D(b[2].total.proposed)+"")&&te(be,me),C&1&&pe!==(pe=D(b[2].total.netDifference)+"")&&te(ke,pe)},d(b){b&&(v(t),v(n),v(A),v(O),v(he),v(Q)),U&&U.d(b)}}}function ot(a){let t,n="4. Street Check Results",e,i,f,m,c,y="5. Path Check Results",l,o,h,d,S,R,K="6. Junction Assessment Tool Check",M,q,N="<th>Junction Name</th> <th>Modes</th> <th>Existing Layout</th> <th>Proposed Layout</th> <th>Net difference</th>",z,V;const A=[nt,at],O=[];function Y(s,g){return s[1].summary.checkType=="street"?0:1}i=Y(a),f=O[i]=A[i](a);const re=[st,it],r=[];function k(s,g){return s[1].summary.checkType=="path"?0:1}o=k(a),h=r[o]=re[o](a);let W=qe(a[0].jat),L=[];for(let s=0;s<W.length;s+=1)L[s]=Je(Ue(a,W,s));return{c(){t=T("h2"),t.textContent=n,e=_(),f.c(),m=_(),c=T("h2"),c.textContent=y,l=_(),h.c(),d=_(),S=T("table"),R=T("caption"),R.textContent=K,M=_(),q=T("tr"),q.innerHTML=N,z=_();for(let s=0;s<L.length;s+=1)L[s].c();this.h()},l(s){t=w(s,"H2",{"data-svelte-h":!0}),X(t)!=="svelte-12wm74b"&&(t.textContent=n),e=p(s),f.l(s),m=p(s),c=w(s,"H2",{"data-svelte-h":!0}),X(c)!=="svelte-1n49cye"&&(c.textContent=y),l=p(s),h.l(s),d=p(s),S=w(s,"TABLE",{});var g=J(S);R=w(g,"CAPTION",{class:!0,"data-svelte-h":!0}),X(R)!=="svelte-1wa1due"&&(R.textContent=K),M=p(g),q=w(g,"TR",{"data-svelte-h":!0}),X(q)!=="svelte-1foehd"&&(q.innerHTML=N),z=p(g);for(let H=0;H<L.length;H+=1)L[H].l(g);g.forEach(v),this.h()},h(){Fe(R,"class","govuk-table__caption govuk-table__caption--m")},m(s,g){$(s,t,g),$(s,e,g),O[i].m(s,g),$(s,m,g),$(s,c,g),$(s,l,g),r[o].m(s,g),$(s,d,g),$(s,S,g),u(S,R),u(S,M),u(S,q),u(S,z);for(let H=0;H<L.length;H+=1)L[H]&&L[H].m(S,null);V=!0},p(s,[g]){let H=i;i=Y(s),i===H?O[i].p(s,g):(we(),P(O[H],1,1,()=>{O[H]=null}),Le(),f=O[i],f?f.p(s,g):(f=O[i]=A[i](s),f.c()),E(f,1),f.m(m.parentNode,m));let ae=o;if(o=k(s),o===ae?r[o].p(s,g):(we(),P(r[ae],1,1,()=>{r[ae]=null}),Le(),h=r[o],h?h.p(s,g):(h=r[o]=re[o](s),h.c()),E(h,1),h.m(d.parentNode,d)),g&1){W=qe(s[0].jat);let j;for(j=0;j<W.length;j+=1){const ne=Ue(s,W,j);L[j]?L[j].p(ne,g):(L[j]=Je(ne),L[j].c(),L[j].m(S,null))}for(;j<L.length;j+=1)L[j].d(1);L.length=W.length}},i(s){V||(E(f),E(h),V=!0)},o(s){P(f),P(h),V=!1},d(s){s&&(v(t),v(e),v(m),v(c),v(l),v(d),v(S)),O[i].d(s),r[o].d(s),Qe(L,s)}}}function D(a){return a==null?"Not Completed":`${a}%`}function ft(a,t,n){let e;Ge(a,Oe,f=>n(1,e=f));let{results:i}=t;return a.$$set=f=>{"results"in f&&n(0,i=f.results)},[i,e]}class vt extends Ie{constructor(t){super(),Ke(this,t,ft,ot,Be,{results:0})}}function ut(a){let t,n="Select Street Check or Path Check for further results";return{c(){t=T("h2"),t.textContent=n},l(e){t=w(e,"H2",{"data-svelte-h":!0}),X(t)!=="svelte-svuhxy"&&(t.textContent=n)},m(e,i){$(e,t,i)},p:Z,i:Z,o:Z,d(e){e&&v(t)}}}function ct(a){let t,n;return t=new se({props:{caption:"Path Check Level of Service",categories:a[1].levelOfService,overall:a[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){B(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,i){G(t,e,i),n=!0},p:Z,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function mt(a){let t,n;return t=new se({props:{caption:"Street Check Level of Service",categories:a[1].levelOfService,overall:a[1].overall,overallLabel:"Overall ATE Score",barChart:!0}}),{c(){B(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,i){G(t,e,i),n=!0},p:Z,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function _t(a){let t,n,e,i,f,m,c,y,l,o="Results - Further Analysis",h,d,S,R,K,M,q,N,z;t=new et({props:{results:a[1]}});const V=[mt,ct,ut],A=[];function O(r,k){return r[0].summary.checkType=="street"?0:r[0].summary.checkType=="path"?1:2}e=O(a),i=A[e]=V[e](a);function Y(r){a[2](r)}let re={label:"Review statement",hint:"Use the space to provide overall feedback for the proposed scheme"};return a[0].resultsReviewStatement!==void 0&&(re.value=a[0].resultsReviewStatement),m=new Ze({props:re}),Ve.push(()=>Ye(m,"value",Y)),d=new tt({}),R=new lt({}),M=new rt({}),N=new vt({props:{results:a[1]}}),{c(){B(t.$$.fragment),n=_(),i.c(),f=_(),B(m.$$.fragment),y=_(),l=T("h2"),l.textContent=o,h=_(),B(d.$$.fragment),S=_(),B(R.$$.fragment),K=_(),B(M.$$.fragment),q=_(),B(N.$$.fragment)},l(r){F(t.$$.fragment,r),n=p(r),i.l(r),f=p(r),F(m.$$.fragment,r),y=p(r),l=w(r,"H2",{"data-svelte-h":!0}),X(l)!=="svelte-1til4nz"&&(l.textContent=o),h=p(r),F(d.$$.fragment,r),S=p(r),F(R.$$.fragment,r),K=p(r),F(M.$$.fragment,r),q=p(r),F(N.$$.fragment,r)},m(r,k){G(t,r,k),$(r,n,k),A[e].m(r,k),$(r,f,k),G(m,r,k),$(r,y,k),$(r,l,k),$(r,h,k),G(d,r,k),$(r,S,k),G(R,r,k),$(r,K,k),G(M,r,k),$(r,q,k),G(N,r,k),z=!0},p(r,[k]){let W=e;e=O(r),e===W?A[e].p(r,k):(we(),P(A[W],1,1,()=>{A[W]=null}),Le(),i=A[e],i?i.p(r,k):(i=A[e]=V[e](r),i.c()),E(i,1),i.m(f.parentNode,f));const L={};!c&&k&1&&(c=!0,L.value=r[0].resultsReviewStatement,Xe(()=>c=!1)),m.$set(L)},i(r){z||(E(t.$$.fragment,r),E(i),E(m.$$.fragment,r),E(d.$$.fragment,r),E(R.$$.fragment,r),E(M.$$.fragment,r),E(N.$$.fragment,r),z=!0)},o(r){P(t.$$.fragment,r),P(i),P(m.$$.fragment,r),P(d.$$.fragment,r),P(R.$$.fragment,r),P(M.$$.fragment,r),P(N.$$.fragment,r),z=!1},d(r){r&&(v(n),v(f),v(y),v(l),v(h),v(S),v(K),v(q)),I(t,r),A[e].d(r),I(m,r),I(d,r),I(R,r),I(M,r),I(N,r)}}}function pt(a,t,n){let e;Ge(a,Oe,m=>n(0,e=m));let i=xe(e);function f(m){a.$$.not_equal(e.resultsReviewStatement,m)&&(e.resultsReviewStatement=m,Oe.set(e))}return[e,i,f]}class Lt extends Ie{constructor(t){super(),Ke(this,t,pt,_t,Be,{})}}export{Lt as component};
