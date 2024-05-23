import{s as $l,e as o,a as i,t as u,c as s,b as d,m as y,g as f,d as m,f as n,o as pe,i as g,h as t,j as me,r as El,k as yl,n as rt}from"../chunks/scheduler.guEzRCZz.js";import{S as Ll,i as Dl,a as Z,f as gl,t as tt,g as Tl,c as Xt,b as Zt,m as te,d as ee}from"../chunks/index.BSBdbbf8.js";import{e as Cl}from"../chunks/each.DItetQGL.js";import{s as Rl}from"../chunks/data.C1dlcRIQ.js";import{g as Sl}from"../chunks/results.BD4tZLg7.js";import{L as le}from"../chunks/LevelOfServiceTable.CtBrJlht.js";function bl(r,a,_){const v=r.slice();return v[4]=a[_],v}function Pl(r){let a,_="This isn't a Street Check";return{c(){a=o("p"),a.textContent=_},l(v){a=s(v,"P",{"data-svelte-h":!0}),y(a)!=="svelte-sb6i45"&&(a.textContent=_)},m(v,T){g(v,a,T)},p:rt,i:rt,o:rt,d(v){v&&n(a)}}}function wl(r){let a,_,v,T,h,p;return a=new le({props:{caption:"Street Level of Service",categories:r[1].levelOfService,overall:r[1].overall,overallLabel:"Overall Street Level of Service"}}),v=new le({props:{caption:"Street Level of Service by Transport Mode",categories:r[1].byMode,overall:r[1].overall,overallLabel:"Overall Street Level of Service"}}),h=new le({props:{caption:"Street Placemaking",categories:r[1].placemakingCategories,overall:r[1].placemakingOverall,overallLabel:"Overall Street Placemaking Score"}}),{c(){Xt(a.$$.fragment),_=i(),Xt(v.$$.fragment),T=i(),Xt(h.$$.fragment)},l(e){Zt(a.$$.fragment,e),_=f(e),Zt(v.$$.fragment,e),T=f(e),Zt(h.$$.fragment,e)},m(e,k){te(a,e,k),g(e,_,k),te(v,e,k),g(e,T,k),te(h,e,k),p=!0},p:rt,i(e){p||(tt(a.$$.fragment,e),tt(v.$$.fragment,e),tt(h.$$.fragment,e),p=!0)},o(e){Z(a.$$.fragment,e),Z(v.$$.fragment,e),Z(h.$$.fragment,e),p=!1},d(e){e&&(n(_),n(T)),ee(a,e),ee(v,e),ee(h,e)}}}function xl(r){let a,_="This isn't a Path Check";return{c(){a=o("p"),a.textContent=_},l(v){a=s(v,"P",{"data-svelte-h":!0}),y(a)!=="svelte-1112wz9"&&(a.textContent=_)},m(v,T){g(v,a,T)},p:rt,i:rt,o:rt,d(v){v&&n(a)}}}function Hl(r){let a,_,v,T,h,p;return a=new le({props:{caption:"Path Level of Service",categories:r[1].levelOfService,overall:r[1].overall,overallLabel:"Overall Path Level of Service"}}),v=new le({props:{caption:"Path Level of Service by Transport Mode",categories:r[1].byMode,overall:r[1].overall,overallLabel:"Overall Path Level of Service"}}),h=new le({props:{caption:"Path Placemaking",categories:r[1].placemakingCategories,overall:r[1].placemakingOverall,overallLabel:"Overall Path Placemaking Score"}}),{c(){Xt(a.$$.fragment),_=i(),Xt(v.$$.fragment),T=i(),Xt(h.$$.fragment)},l(e){Zt(a.$$.fragment,e),_=f(e),Zt(v.$$.fragment,e),T=f(e),Zt(h.$$.fragment,e)},m(e,k){te(a,e,k),g(e,_,k),te(v,e,k),g(e,T,k),te(h,e,k),p=!0},p:rt,i(e){p||(tt(a.$$.fragment,e),tt(v.$$.fragment,e),tt(h.$$.fragment,e),p=!0)},o(e){Z(a.$$.fragment,e),Z(v.$$.fragment,e),Z(h.$$.fragment,e),p=!1},d(e){e&&(n(_),n(T)),ee(a,e),ee(v,e),ee(h,e)}}}function kl(r){let a,_,v=(r[4].name||"Untitled junction")+"",T,h,p,e="Walking & Wheeling",k,q,ot=nt(r[4].walkingWheeling.existing)+"",st,Et,P,et=nt(r[4].walkingWheeling.proposed)+"",Mt,yt,K,it=nt(r[4].walkingWheeling.netDifference)+"",ft,vt,b,w,ae="Cycling",Lt,Y,ct=nt(r[4].cycling.existing)+"",dt,Dt,x,lt=nt(r[4].cycling.proposed)+"",It,Rt,z,_t=nt(r[4].cycling.netDifference)+"",ht,ut,C,H,ne="<b>All</b>",St,F,mt=nt(r[4].total.existing)+"",pt,gt,S,G=nt(r[4].total.proposed)+"",Nt,Pt,I,re=nt(r[4].total.netDifference)+"",wt,L;return{c(){a=o("tr"),_=o("th"),T=u(v),h=i(),p=o("th"),p.textContent=e,k=i(),q=o("td"),st=u(ot),Et=i(),P=o("td"),Mt=u(et),yt=i(),K=o("td"),ft=u(it),vt=i(),b=o("tr"),w=o("th"),w.textContent=ae,Lt=i(),Y=o("td"),dt=u(ct),Dt=i(),x=o("td"),It=u(lt),Rt=i(),z=o("td"),ht=u(_t),ut=i(),C=o("tr"),H=o("th"),H.innerHTML=ne,St=i(),F=o("td"),pt=u(mt),gt=i(),S=o("td"),Nt=u(G),Pt=i(),I=o("td"),wt=u(re),L=i(),this.h()},l($){a=s($,"TR",{});var E=d(a);_=s(E,"TH",{rowspan:!0});var jt=d(_);T=m(jt,v),jt.forEach(n),h=f(E),p=s(E,"TH",{"data-svelte-h":!0}),y(p)!=="svelte-4l8ufc"&&(p.textContent=e),k=f(E),q=s(E,"TD",{});var Wt=d(q);st=m(Wt,ot),Wt.forEach(n),Et=f(E),P=s(E,"TD",{});var Tt=d(P);Mt=m(Tt,et),Tt.forEach(n),yt=f(E),K=s(E,"TD",{});var oe=d(K);ft=m(oe,it),oe.forEach(n),E.forEach(n),vt=f($),b=s($,"TR",{});var N=d(b);w=s(N,"TH",{"data-svelte-h":!0}),y(w)!=="svelte-1g6bqmx"&&(w.textContent=ae),Lt=f(N),Y=s(N,"TD",{});var Bt=d(Y);dt=m(Bt,ct),Bt.forEach(n),Dt=f(N),x=s(N,"TD",{});var Ct=d(x);It=m(Ct,lt),Ct.forEach(n),Rt=f(N),z=s(N,"TD",{});var se=d(z);ht=m(se,_t),se.forEach(n),N.forEach(n),ut=f($),C=s($,"TR",{});var O=d(C);H=s(O,"TH",{"data-svelte-h":!0}),y(H)!=="svelte-17itmy4"&&(H.innerHTML=ne),St=f(O),F=s(O,"TD",{});var Jt=d(F);pt=m(Jt,mt),Jt.forEach(n),gt=f(O),S=s(O,"TD",{});var bt=d(S);Nt=m(bt,G),bt.forEach(n),Pt=f(O),I=s(O,"TD",{});var ie=d(I);wt=m(ie,re),ie.forEach(n),L=f(O),O.forEach(n),this.h()},h(){pe(_,"rowspan","3")},m($,E){g($,a,E),t(a,_),t(_,T),t(a,h),t(a,p),t(a,k),t(a,q),t(q,st),t(a,Et),t(a,P),t(P,Mt),t(a,yt),t(a,K),t(K,ft),g($,vt,E),g($,b,E),t(b,w),t(b,Lt),t(b,Y),t(Y,dt),t(b,Dt),t(b,x),t(x,It),t(b,Rt),t(b,z),t(z,ht),g($,ut,E),g($,C,E),t(C,H),t(C,St),t(C,F),t(F,pt),t(C,gt),t(C,S),t(S,Nt),t(C,Pt),t(C,I),t(I,wt),t(C,L)},p:rt,d($){$&&(n(a),n(vt),n(b),n(ut),n(C))}}}function Ol(r){let a,_,v="1. Summary of Scheme",T,h,p,e="Scheme Name",k,q,ot=r[0].summary.schemeName+"",st,Et,P,et,Mt="Scheme Reference",yt,K,it=r[0].summary.schemeReference+"",ft,vt,b,w,ae="Local Authority",Lt,Y,ct=r[0].summary.authority+"",dt,Dt,x,lt,It="Design Stage",Rt,z,_t=r[0].summary.designStage+"",ht,ut,C,H,ne="Route Length Assessed in this File (km)",St,F,mt=r[0].summary.assessedRouteLengthKm+"",pt,gt,S,G,Nt="2. Policy Check Results",Pt,I,re='<th rowspan="2">Potential Policy Conflicts</th> <th>Existing Route</th> <th>Designed Route</th> <th>Removed</th> <th>Introduced</th> <th>Remaining</th>',wt,L,$,E=r[2].existing+"",jt,Wt,Tt,oe=r[2].designed+"",N,Bt,Ct,se=r[2].removed+"",O,Jt,bt,ie=r[2].designed+"",Le,De,fe,qe=r[2].designed+r[2].existing-r[2].removed+"",Re,ge,Q,xt,Ke="3. Safety Check Results (Critical Issues only)",Se,qt,Ye='<th rowspan="2">Critical Issues</th> <th>Existing Route</th> <th>Designed Route</th> <th>Removed</th> <th>Introduced</th> <th>Remaining</th>',Pe,A,ve,ze=r[3].existing+"",we,xe,ce,Fe=r[3].designed+"",He,Oe,de,Ue=r[3].removed+"",Ae,Me,_e,Ge=r[3].designed+"",Ie,Ne,he,Qe=r[3].designed+r[3].existing-r[3].removed+"",je,Te,Ht,Ve="4. Street Check Results",Ce,j,W,Kt,Ot,Xe="5. Path Check Results",be,B,J,Yt,U,At,Ze="6. Junction Assessment Tool Check",We,zt,tl="<th>Junction Name</th> <th>Modes</th> <th>Existing Layout</th> <th>Proposed Layout</th> <th>Net difference</th>",Be,ke,at;const el=[wl,Pl],kt=[];function ll(l,c){return l[0].summary.checkType=="street"?0:1}j=ll(r),W=kt[j]=el[j](r);const al=[Hl,xl],$t=[];function nl(l,c){return l[0].summary.checkType=="path"?0:1}B=nl(r),J=$t[B]=al[B](r);let Ft=Cl(r[1].jat),D=[];for(let l=0;l<Ft.length;l+=1)D[l]=kl(bl(r,Ft,l));return{c(){a=o("table"),_=o("caption"),_.textContent=v,T=i(),h=o("tr"),p=o("th"),p.textContent=e,k=i(),q=o("td"),st=u(ot),Et=i(),P=o("tr"),et=o("th"),et.textContent=Mt,yt=i(),K=o("td"),ft=u(it),vt=i(),b=o("tr"),w=o("th"),w.textContent=ae,Lt=i(),Y=o("td"),dt=u(ct),Dt=i(),x=o("tr"),lt=o("th"),lt.textContent=It,Rt=i(),z=o("td"),ht=u(_t),ut=i(),C=o("tr"),H=o("th"),H.textContent=ne,St=i(),F=o("td"),pt=u(mt),gt=i(),S=o("table"),G=o("caption"),G.textContent=Nt,Pt=i(),I=o("tr"),I.innerHTML=re,wt=i(),L=o("tr"),$=o("td"),jt=u(E),Wt=i(),Tt=o("td"),N=u(oe),Bt=i(),Ct=o("td"),O=u(se),Jt=i(),bt=o("td"),Le=u(ie),De=i(),fe=o("td"),Re=u(qe),ge=i(),Q=o("table"),xt=o("caption"),xt.textContent=Ke,Se=i(),qt=o("tr"),qt.innerHTML=Ye,Pe=i(),A=o("tr"),ve=o("td"),we=u(ze),xe=i(),ce=o("td"),He=u(Fe),Oe=i(),de=o("td"),Ae=u(Ue),Me=i(),_e=o("td"),Ie=u(Ge),Ne=i(),he=o("td"),je=u(Qe),Te=i(),Ht=o("h2"),Ht.textContent=Ve,Ce=i(),W.c(),Kt=i(),Ot=o("h2"),Ot.textContent=Xe,be=i(),J.c(),Yt=i(),U=o("table"),At=o("caption"),At.textContent=Ze,We=i(),zt=o("tr"),zt.innerHTML=tl,Be=i();for(let l=0;l<D.length;l+=1)D[l].c();ke=u(`

TODO: overall JAT`),this.h()},l(l){a=s(l,"TABLE",{});var c=d(a);_=s(c,"CAPTION",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-wsc00j"&&(_.textContent=v),T=f(c),h=s(c,"TR",{});var M=d(h);p=s(M,"TH",{"data-svelte-h":!0}),y(p)!=="svelte-9b7ad8"&&(p.textContent=e),k=f(M),q=s(M,"TD",{});var Ut=d(q);st=m(Ut,ot),Ut.forEach(n),M.forEach(n),Et=f(c),P=s(c,"TR",{});var R=d(P);et=s(R,"TH",{"data-svelte-h":!0}),y(et)!=="svelte-23tdnw"&&(et.textContent=Mt),yt=f(R),K=s(R,"TD",{});var ue=d(K);ft=m(ue,it),ue.forEach(n),R.forEach(n),vt=f(c),b=s(c,"TR",{});var $e=d(b);w=s($e,"TH",{"data-svelte-h":!0}),y(w)!=="svelte-1qwcyrc"&&(w.textContent=ae),Lt=f($e),Y=s($e,"TD",{});var rl=d(Y);dt=m(rl,ct),rl.forEach(n),$e.forEach(n),Dt=f(c),x=s(c,"TR",{});var Ee=d(x);lt=s(Ee,"TH",{"data-svelte-h":!0}),y(lt)!=="svelte-1hvpp5a"&&(lt.textContent=It),Rt=f(Ee),z=s(Ee,"TD",{});var ol=d(z);ht=m(ol,_t),ol.forEach(n),Ee.forEach(n),ut=f(c),C=s(c,"TR",{});var ye=d(C);H=s(ye,"TH",{"data-svelte-h":!0}),y(H)!=="svelte-nix1wk"&&(H.textContent=ne),St=f(ye),F=s(ye,"TD",{});var sl=d(F);pt=m(sl,mt),sl.forEach(n),ye.forEach(n),c.forEach(n),gt=f(l),S=s(l,"TABLE",{});var Gt=d(S);G=s(Gt,"CAPTION",{class:!0,"data-svelte-h":!0}),y(G)!=="svelte-ryvefa"&&(G.textContent=Nt),Pt=f(Gt),I=s(Gt,"TR",{"data-svelte-h":!0}),y(I)!=="svelte-yyn3b"&&(I.innerHTML=re),wt=f(Gt),L=s(Gt,"TR",{});var V=d(L);$=s(V,"TD",{});var il=d($);jt=m(il,E),il.forEach(n),Wt=f(V),Tt=s(V,"TD",{});var fl=d(Tt);N=m(fl,oe),fl.forEach(n),Bt=f(V),Ct=s(V,"TD",{});var vl=d(Ct);O=m(vl,se),vl.forEach(n),Jt=f(V),bt=s(V,"TD",{});var cl=d(bt);Le=m(cl,ie),cl.forEach(n),De=f(V),fe=s(V,"TD",{});var dl=d(fe);Re=m(dl,qe),dl.forEach(n),V.forEach(n),Gt.forEach(n),ge=f(l),Q=s(l,"TABLE",{});var Qt=d(Q);xt=s(Qt,"CAPTION",{class:!0,"data-svelte-h":!0}),y(xt)!=="svelte-cpp4n"&&(xt.textContent=Ke),Se=f(Qt),qt=s(Qt,"TR",{"data-svelte-h":!0}),y(qt)!=="svelte-16gp70r"&&(qt.innerHTML=Ye),Pe=f(Qt),A=s(Qt,"TR",{});var X=d(A);ve=s(X,"TD",{});var _l=d(ve);we=m(_l,ze),_l.forEach(n),xe=f(X),ce=s(X,"TD",{});var hl=d(ce);He=m(hl,Fe),hl.forEach(n),Oe=f(X),de=s(X,"TD",{});var ul=d(de);Ae=m(ul,Ue),ul.forEach(n),Me=f(X),_e=s(X,"TD",{});var ml=d(_e);Ie=m(ml,Ge),ml.forEach(n),Ne=f(X),he=s(X,"TD",{});var pl=d(he);je=m(pl,Qe),pl.forEach(n),X.forEach(n),Qt.forEach(n),Te=f(l),Ht=s(l,"H2",{"data-svelte-h":!0}),y(Ht)!=="svelte-12wm74b"&&(Ht.textContent=Ve),Ce=f(l),W.l(l),Kt=f(l),Ot=s(l,"H2",{"data-svelte-h":!0}),y(Ot)!=="svelte-1n49cye"&&(Ot.textContent=Xe),be=f(l),J.l(l),Yt=f(l),U=s(l,"TABLE",{});var Vt=d(U);At=s(Vt,"CAPTION",{class:!0,"data-svelte-h":!0}),y(At)!=="svelte-1wa1due"&&(At.textContent=Ze),We=f(Vt),zt=s(Vt,"TR",{"data-svelte-h":!0}),y(zt)!=="svelte-1foehd"&&(zt.innerHTML=tl),Be=f(Vt);for(let Je=0;Je<D.length;Je+=1)D[Je].l(Vt);Vt.forEach(n),ke=m(l,`

TODO: overall JAT`),this.h()},h(){pe(_,"class","govuk-table__caption govuk-table__caption--m"),pe(G,"class","govuk-table__caption govuk-table__caption--m"),pe(xt,"class","govuk-table__caption govuk-table__caption--m"),pe(At,"class","govuk-table__caption govuk-table__caption--m")},m(l,c){g(l,a,c),t(a,_),t(a,T),t(a,h),t(h,p),t(h,k),t(h,q),t(q,st),t(a,Et),t(a,P),t(P,et),t(P,yt),t(P,K),t(K,ft),t(a,vt),t(a,b),t(b,w),t(b,Lt),t(b,Y),t(Y,dt),t(a,Dt),t(a,x),t(x,lt),t(x,Rt),t(x,z),t(z,ht),t(a,ut),t(a,C),t(C,H),t(C,St),t(C,F),t(F,pt),g(l,gt,c),g(l,S,c),t(S,G),t(S,Pt),t(S,I),t(S,wt),t(S,L),t(L,$),t($,jt),t(L,Wt),t(L,Tt),t(Tt,N),t(L,Bt),t(L,Ct),t(Ct,O),t(L,Jt),t(L,bt),t(bt,Le),t(L,De),t(L,fe),t(fe,Re),g(l,ge,c),g(l,Q,c),t(Q,xt),t(Q,Se),t(Q,qt),t(Q,Pe),t(Q,A),t(A,ve),t(ve,we),t(A,xe),t(A,ce),t(ce,He),t(A,Oe),t(A,de),t(de,Ae),t(A,Me),t(A,_e),t(_e,Ie),t(A,Ne),t(A,he),t(he,je),g(l,Te,c),g(l,Ht,c),g(l,Ce,c),kt[j].m(l,c),g(l,Kt,c),g(l,Ot,c),g(l,be,c),$t[B].m(l,c),g(l,Yt,c),g(l,U,c),t(U,At),t(U,We),t(U,zt),t(U,Be);for(let M=0;M<D.length;M+=1)D[M]&&D[M].m(U,null);g(l,ke,c),at=!0},p(l,[c]){(!at||c&1)&&ot!==(ot=l[0].summary.schemeName+"")&&me(st,ot),(!at||c&1)&&it!==(it=l[0].summary.schemeReference+"")&&me(ft,it),(!at||c&1)&&ct!==(ct=l[0].summary.authority+"")&&me(dt,ct),(!at||c&1)&&_t!==(_t=l[0].summary.designStage+"")&&me(ht,_t),(!at||c&1)&&mt!==(mt=l[0].summary.assessedRouteLengthKm+"")&&me(pt,mt);let M=j;j=ll(l),j===M?kt[j].p(l,c):(Tl(),Z(kt[M],1,1,()=>{kt[M]=null}),gl(),W=kt[j],W?W.p(l,c):(W=kt[j]=el[j](l),W.c()),tt(W,1),W.m(Kt.parentNode,Kt));let Ut=B;if(B=nl(l),B===Ut?$t[B].p(l,c):(Tl(),Z($t[Ut],1,1,()=>{$t[Ut]=null}),gl(),J=$t[B],J?J.p(l,c):(J=$t[B]=al[B](l),J.c()),tt(J,1),J.m(Yt.parentNode,Yt)),c&2){Ft=Cl(l[1].jat);let R;for(R=0;R<Ft.length;R+=1){const ue=bl(l,Ft,R);D[R]?D[R].p(ue,c):(D[R]=kl(ue),D[R].c(),D[R].m(U,null))}for(;R<D.length;R+=1)D[R].d(1);D.length=Ft.length}},i(l){at||(tt(W),tt(J),at=!0)},o(l){Z(W),Z(J),at=!1},d(l){l&&(n(a),n(gt),n(S),n(ge),n(Q),n(Te),n(Ht),n(Ce),n(Kt),n(Ot),n(be),n(Yt),n(U),n(ke)),kt[j].d(l),$t[B].d(l),El(D,l)}}}function nt(r){return r==null?"Not Completed":`${r}%`}function Al(r,a,_){let v;yl(r,Rl,e=>_(0,v=e));let T=Sl(v),h={existing:v.policyConflictLog.filter(e=>e.stage=="Existing").length,designed:v.policyConflictLog.filter(e=>e.stage=="Design").length,removed:v.policyConflictLog.filter(e=>e.resolved=="Yes").length},p={existing:v.criticalIssues.filter(e=>e.stage=="Existing").length,designed:v.criticalIssues.filter(e=>e.stage=="Design").length,removed:v.criticalIssues.filter(e=>e.resolved=="Yes").length};return[v,T,h,p]}class Jl extends Ll{constructor(a){super(),Dl(this,a,Al,Ol,$l,{})}}export{Jl as component};
