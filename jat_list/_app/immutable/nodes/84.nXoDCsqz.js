import{s as kl,e as r,a as f,t as g,c as o,b as c,p as b,g as v,d as C,f as a,r as ce,i as m,h as t,j as Qt,q as $l,k as El,n as yt}from"../chunks/scheduler.BBS-fkhU.js";import{S as yl,i as Ll,b as lt,f as pl,t as nt,g as gl,c as Vt,a as Xt,m as Zt,d as te}from"../chunks/index.B8H3ypVf.js";import{e as Cl}from"../chunks/each.D79A5KlB.js";import{s as Dl}from"../chunks/data.Crs_apGa.js";import{g as Rl}from"../chunks/results.CkwCPon9.js";import{L as ee}from"../chunks/LevelOfServiceTable.DvMlhcSO.js";function Tl(s,n,_){const i=s.slice();return i[4]=n[_],i[6]=_,i}function xl(s){let n,_="This isn't a Street Check";return{c(){n=r("p"),n.textContent=_},l(i){n=o(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-sb6i45"&&(n.textContent=_)},m(i,p){m(i,n,p)},p:yt,i:yt,o:yt,d(i){i&&a(n)}}}function Sl(s){let n,_,i,p,u,h;return n=new ee({props:{caption:"Street Level of Service",categories:s[1].levelOfService,overall:s[1].overall,overallLabel:"Overall Street Level of Service"}}),i=new ee({props:{caption:"Street Level of Service by Transport Mode",categories:s[1].byMode,overall:s[1].overall,overallLabel:"Overall Street Level of Service"}}),u=new ee({props:{caption:"Street Placemaking",categories:s[1].placemakingCategories,overall:s[1].placemakingOverall,overallLabel:"Overall Street Placemaking Score"}}),{c(){Vt(n.$$.fragment),_=f(),Vt(i.$$.fragment),p=f(),Vt(u.$$.fragment)},l(e){Xt(n.$$.fragment,e),_=v(e),Xt(i.$$.fragment,e),p=v(e),Xt(u.$$.fragment,e)},m(e,k){Zt(n,e,k),m(e,_,k),Zt(i,e,k),m(e,p,k),Zt(u,e,k),h=!0},p:yt,i(e){h||(nt(n.$$.fragment,e),nt(i.$$.fragment,e),nt(u.$$.fragment,e),h=!0)},o(e){lt(n.$$.fragment,e),lt(i.$$.fragment,e),lt(u.$$.fragment,e),h=!1},d(e){e&&(a(_),a(p)),te(n,e),te(i,e),te(u,e)}}}function Ol(s){let n,_="This isn't a Path Check";return{c(){n=r("p"),n.textContent=_},l(i){n=o(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1112wz9"&&(n.textContent=_)},m(i,p){m(i,n,p)},p:yt,i:yt,o:yt,d(i){i&&a(n)}}}function Pl(s){let n,_,i,p,u,h;return n=new ee({props:{caption:"Path Level of Service",categories:s[1].levelOfService,overall:s[1].overall,overallLabel:"Overall Path Level of Service"}}),i=new ee({props:{caption:"Path Level of Service by Transport Mode",categories:s[1].byMode,overall:s[1].overall,overallLabel:"Overall Path Level of Service"}}),u=new ee({props:{caption:"Path Placemaking",categories:s[1].placemakingCategories,overall:s[1].placemakingOverall,overallLabel:"Overall Path Placemaking Score"}}),{c(){Vt(n.$$.fragment),_=f(),Vt(i.$$.fragment),p=f(),Vt(u.$$.fragment)},l(e){Xt(n.$$.fragment,e),_=v(e),Xt(i.$$.fragment,e),p=v(e),Xt(u.$$.fragment,e)},m(e,k){Zt(n,e,k),m(e,_,k),Zt(i,e,k),m(e,p,k),Zt(u,e,k),h=!0},p:yt,i(e){h||(nt(n.$$.fragment,e),nt(i.$$.fragment,e),nt(u.$$.fragment,e),h=!0)},o(e){lt(n.$$.fragment,e),lt(i.$$.fragment,e),lt(u.$$.fragment,e),h=!1},d(e){e&&(a(_),a(p)),te(n,e),te(i,e),te(u,e)}}}function bl(s){let n,_,i=(s[0].jat[s[6]].name||"Untitled junction")+"",p,u,h,e="Walking & Wheeling",k,B,ut=s[4].walkingWheeling.existing+"",ht,Lt,O,at=s[4].walkingWheeling.proposed+"",wt,Dt,H,mt="TODO net difference",rt,D,x,ot="Cycling",Ht,st,pt=s[4].cycling.existing+"",it,gt,ft,K=s[4].cycling.proposed+"",U,At,Y,Ct="TODO net difference",z,E,F,G="<b>All</b>",Q,Tt,Mt=s[4].total.existing+"",vt,dt,V,Rt=s[4].total.proposed+"",S,J,ct,It="TODO net difference",X;return{c(){n=r("tr"),_=r("th"),p=g(i),u=f(),h=r("th"),h.textContent=e,k=f(),B=r("td"),ht=g(ut),Lt=f(),O=r("td"),wt=g(at),Dt=f(),H=r("td"),H.textContent=mt,rt=f(),D=r("tr"),x=r("th"),x.textContent=ot,Ht=f(),st=r("td"),it=g(pt),gt=f(),ft=r("td"),U=g(K),At=f(),Y=r("td"),Y.textContent=Ct,z=f(),E=r("tr"),F=r("th"),F.innerHTML=G,Q=f(),Tt=r("td"),vt=g(Mt),dt=f(),V=r("td"),S=g(Rt),J=f(),ct=r("td"),ct.textContent=It,X=f(),this.h()},l($){n=o($,"TR",{});var T=c(n);_=o(T,"TH",{rowspan:!0});var R=c(_);p=C(R,i),R.forEach(a),u=v(T),h=o(T,"TH",{"data-svelte-h":!0}),b(h)!=="svelte-4l8ufc"&&(h.textContent=e),k=v(T),B=o(T,"TD",{});var bt=c(B);ht=C(bt,ut),bt.forEach(a),Lt=v(T),O=o(T,"TD",{});var le=c(O);wt=C(le,at),le.forEach(a),Dt=v(T),H=o(T,"TD",{"data-svelte-h":!0}),b(H)!=="svelte-a2u7b8"&&(H.textContent=mt),T.forEach(a),rt=v($),D=o($,"TR",{});var A=c(D);x=o(A,"TH",{"data-svelte-h":!0}),b(x)!=="svelte-1g6bqmx"&&(x.textContent=ot),Ht=v(A),st=o(A,"TD",{});var Nt=c(st);it=C(Nt,pt),Nt.forEach(a),gt=v(A),ft=o(A,"TD",{});var kt=c(ft);U=C(kt,K),kt.forEach(a),At=v(A),Y=o(A,"TD",{"data-svelte-h":!0}),b(Y)!=="svelte-a2u7b8"&&(Y.textContent=Ct),A.forEach(a),z=v($),E=o($,"TR",{});var M=c(E);F=o(M,"TH",{"data-svelte-h":!0}),b(F)!=="svelte-17itmy4"&&(F.innerHTML=G),Q=v(M),Tt=o(M,"TD",{});var jt=c(Tt);vt=C(jt,Mt),jt.forEach(a),dt=v(M),V=o(M,"TD",{});var qt=c(V);S=C(qt,Rt),qt.forEach(a),J=v(M),ct=o(M,"TD",{"data-svelte-h":!0}),b(ct)!=="svelte-a2u7b8"&&(ct.textContent=It),X=v(M),M.forEach(a),this.h()},h(){ce(_,"rowspan","3")},m($,T){m($,n,T),t(n,_),t(_,p),t(n,u),t(n,h),t(n,k),t(n,B),t(B,ht),t(n,Lt),t(n,O),t(O,wt),t(n,Dt),t(n,H),m($,rt,T),m($,D,T),t(D,x),t(D,Ht),t(D,st),t(st,it),t(D,gt),t(D,ft),t(ft,U),t(D,At),t(D,Y),m($,z,T),m($,E,T),t(E,F),t(E,Q),t(E,Tt),t(Tt,vt),t(E,dt),t(E,V),t(V,S),t(E,J),t(E,ct),t(E,X)},p($,T){T&1&&i!==(i=($[0].jat[$[6]].name||"Untitled junction")+"")&&Qt(p,i)},d($){$&&(a(n),a(rt),a(D),a(z),a(E))}}}function wl(s){let n,_,i="1. Summary of Scheme",p,u,h,e="Scheme Name",k,B,ut=s[0].summary.schemeName+"",ht,Lt,O,at,wt="Scheme Reference",Dt,H,mt=s[0].summary.schemeReference+"",rt,D,x,ot,Ht="Local Authority",st,pt,it=s[0].summary.authority+"",gt,ft,K,U,At="Design Stage",Y,Ct,z=s[0].summary.designStage+"",E,F,G,Q,Tt="Route Length Assessed in this File (km)",Mt,vt,dt=s[0].summary.assessedRouteLengthKm+"",V,Rt,S,J,ct="2. Policy Check Results",It,X,$='<th rowspan="2">Potential Policy Conflicts</th> <th>Existing Route</th> <th>Designed Route</th> <th>Removed</th> <th>Introduced</th> <th>Remaining</th>',T,R,bt,le=s[2].existing+"",A,Nt,kt,M=s[2].designed+"",jt,qt,ne,qe=s[2].removed+"",be,ke,ae,Be=s[2].designed+"",$e,Ee,re,Je=s[2].designed+s[2].existing-s[2].removed+"",ye,_e,Z,xt,We="3. Safety Check Results (Critical Issues only)",Le,Bt,Ke='<th rowspan="2">Critical Issues</th> <th>Existing Route</th> <th>Designed Route</th> <th>Removed</th> <th>Introduced</th> <th>Remaining</th>',De,P,oe,Ue=s[3].existing+"",Re,xe,se,Ye=s[3].designed+"",Se,Oe,ie,ze=s[3].removed+"",Pe,we,fe,Fe=s[3].designed+"",He,Ae,ve,Ge=s[3].designed+s[3].existing-s[3].removed+"",Me,ue,St,Qe="4. Street Check Results",he,I,N,Jt,Ot,Ve="5. Path Check Results",me,j,q,Wt,W,Pt,Xe="6. Junction Assessment Tool Check",Ie,Kt,Ze="<th>Junction Name</th> <th>Modes</th> <th>Existing Layout</th> <th>Proposed Layout</th> <th>Net difference</th>",Ne,pe,_t;const tl=[Sl,xl],$t=[];function el(l,d){return l[0].summary.checkType=="street"?0:1}I=el(s),N=$t[I]=tl[I](s);const ll=[Pl,Ol],Et=[];function nl(l,d){return l[0].summary.checkType=="path"?0:1}j=nl(s),q=Et[j]=ll[j](s);let Ut=Cl(s[1].jat),y=[];for(let l=0;l<Ut.length;l+=1)y[l]=bl(Tl(s,Ut,l));return{c(){n=r("table"),_=r("caption"),_.textContent=i,p=f(),u=r("tr"),h=r("th"),h.textContent=e,k=f(),B=r("td"),ht=g(ut),Lt=f(),O=r("tr"),at=r("th"),at.textContent=wt,Dt=f(),H=r("td"),rt=g(mt),D=f(),x=r("tr"),ot=r("th"),ot.textContent=Ht,st=f(),pt=r("td"),gt=g(it),ft=f(),K=r("tr"),U=r("th"),U.textContent=At,Y=f(),Ct=r("td"),E=g(z),F=f(),G=r("tr"),Q=r("th"),Q.textContent=Tt,Mt=f(),vt=r("td"),V=g(dt),Rt=f(),S=r("table"),J=r("caption"),J.textContent=ct,It=f(),X=r("tr"),X.innerHTML=$,T=f(),R=r("tr"),bt=r("td"),A=g(le),Nt=f(),kt=r("td"),jt=g(M),qt=f(),ne=r("td"),be=g(qe),ke=f(),ae=r("td"),$e=g(Be),Ee=f(),re=r("td"),ye=g(Je),_e=f(),Z=r("table"),xt=r("caption"),xt.textContent=We,Le=f(),Bt=r("tr"),Bt.innerHTML=Ke,De=f(),P=r("tr"),oe=r("td"),Re=g(Ue),xe=f(),se=r("td"),Se=g(Ye),Oe=f(),ie=r("td"),Pe=g(ze),we=f(),fe=r("td"),He=g(Fe),Ae=f(),ve=r("td"),Me=g(Ge),ue=f(),St=r("h2"),St.textContent=Qe,he=f(),N.c(),Jt=f(),Ot=r("h2"),Ot.textContent=Ve,me=f(),q.c(),Wt=f(),W=r("table"),Pt=r("caption"),Pt.textContent=Xe,Ie=f(),Kt=r("tr"),Kt.innerHTML=Ze,Ne=f();for(let l=0;l<y.length;l+=1)y[l].c();pe=g(`

TODO: overall JAT`),this.h()},l(l){n=o(l,"TABLE",{});var d=c(n);_=o(d,"CAPTION",{class:!0,"data-svelte-h":!0}),b(_)!=="svelte-wsc00j"&&(_.textContent=i),p=v(d),u=o(d,"TR",{});var w=c(u);h=o(w,"TH",{"data-svelte-h":!0}),b(h)!=="svelte-9b7ad8"&&(h.textContent=e),k=v(w),B=o(w,"TD",{});var Yt=c(B);ht=C(Yt,ut),Yt.forEach(a),w.forEach(a),Lt=v(d),O=o(d,"TR",{});var L=c(O);at=o(L,"TH",{"data-svelte-h":!0}),b(at)!=="svelte-23tdnw"&&(at.textContent=wt),Dt=v(L),H=o(L,"TD",{});var de=c(H);rt=C(de,mt),de.forEach(a),L.forEach(a),D=v(d),x=o(d,"TR",{});var ge=c(x);ot=o(ge,"TH",{"data-svelte-h":!0}),b(ot)!=="svelte-1qwcyrc"&&(ot.textContent=Ht),st=v(ge),pt=o(ge,"TD",{});var al=c(pt);gt=C(al,it),al.forEach(a),ge.forEach(a),ft=v(d),K=o(d,"TR",{});var Ce=c(K);U=o(Ce,"TH",{"data-svelte-h":!0}),b(U)!=="svelte-1hvpp5a"&&(U.textContent=At),Y=v(Ce),Ct=o(Ce,"TD",{});var rl=c(Ct);E=C(rl,z),rl.forEach(a),Ce.forEach(a),F=v(d),G=o(d,"TR",{});var Te=c(G);Q=o(Te,"TH",{"data-svelte-h":!0}),b(Q)!=="svelte-nix1wk"&&(Q.textContent=Tt),Mt=v(Te),vt=o(Te,"TD",{});var ol=c(vt);V=C(ol,dt),ol.forEach(a),Te.forEach(a),d.forEach(a),Rt=v(l),S=o(l,"TABLE",{});var zt=c(S);J=o(zt,"CAPTION",{class:!0,"data-svelte-h":!0}),b(J)!=="svelte-ryvefa"&&(J.textContent=ct),It=v(zt),X=o(zt,"TR",{"data-svelte-h":!0}),b(X)!=="svelte-yyn3b"&&(X.innerHTML=$),T=v(zt),R=o(zt,"TR",{});var tt=c(R);bt=o(tt,"TD",{});var sl=c(bt);A=C(sl,le),sl.forEach(a),Nt=v(tt),kt=o(tt,"TD",{});var il=c(kt);jt=C(il,M),il.forEach(a),qt=v(tt),ne=o(tt,"TD",{});var fl=c(ne);be=C(fl,qe),fl.forEach(a),ke=v(tt),ae=o(tt,"TD",{});var vl=c(ae);$e=C(vl,Be),vl.forEach(a),Ee=v(tt),re=o(tt,"TD",{});var dl=c(re);ye=C(dl,Je),dl.forEach(a),tt.forEach(a),zt.forEach(a),_e=v(l),Z=o(l,"TABLE",{});var Ft=c(Z);xt=o(Ft,"CAPTION",{class:!0,"data-svelte-h":!0}),b(xt)!=="svelte-cpp4n"&&(xt.textContent=We),Le=v(Ft),Bt=o(Ft,"TR",{"data-svelte-h":!0}),b(Bt)!=="svelte-16gp70r"&&(Bt.innerHTML=Ke),De=v(Ft),P=o(Ft,"TR",{});var et=c(P);oe=o(et,"TD",{});var cl=c(oe);Re=C(cl,Ue),cl.forEach(a),xe=v(et),se=o(et,"TD",{});var _l=c(se);Se=C(_l,Ye),_l.forEach(a),Oe=v(et),ie=o(et,"TD",{});var ul=c(ie);Pe=C(ul,ze),ul.forEach(a),we=v(et),fe=o(et,"TD",{});var hl=c(fe);He=C(hl,Fe),hl.forEach(a),Ae=v(et),ve=o(et,"TD",{});var ml=c(ve);Me=C(ml,Ge),ml.forEach(a),et.forEach(a),Ft.forEach(a),ue=v(l),St=o(l,"H2",{"data-svelte-h":!0}),b(St)!=="svelte-12wm74b"&&(St.textContent=Qe),he=v(l),N.l(l),Jt=v(l),Ot=o(l,"H2",{"data-svelte-h":!0}),b(Ot)!=="svelte-1n49cye"&&(Ot.textContent=Ve),me=v(l),q.l(l),Wt=v(l),W=o(l,"TABLE",{});var Gt=c(W);Pt=o(Gt,"CAPTION",{class:!0,"data-svelte-h":!0}),b(Pt)!=="svelte-1wa1due"&&(Pt.textContent=Xe),Ie=v(Gt),Kt=o(Gt,"TR",{"data-svelte-h":!0}),b(Kt)!=="svelte-1foehd"&&(Kt.innerHTML=Ze),Ne=v(Gt);for(let je=0;je<y.length;je+=1)y[je].l(Gt);Gt.forEach(a),pe=C(l,`

TODO: overall JAT`),this.h()},h(){ce(_,"class","govuk-table__caption govuk-table__caption--m"),ce(J,"class","govuk-table__caption govuk-table__caption--m"),ce(xt,"class","govuk-table__caption govuk-table__caption--m"),ce(Pt,"class","govuk-table__caption govuk-table__caption--m")},m(l,d){m(l,n,d),t(n,_),t(n,p),t(n,u),t(u,h),t(u,k),t(u,B),t(B,ht),t(n,Lt),t(n,O),t(O,at),t(O,Dt),t(O,H),t(H,rt),t(n,D),t(n,x),t(x,ot),t(x,st),t(x,pt),t(pt,gt),t(n,ft),t(n,K),t(K,U),t(K,Y),t(K,Ct),t(Ct,E),t(n,F),t(n,G),t(G,Q),t(G,Mt),t(G,vt),t(vt,V),m(l,Rt,d),m(l,S,d),t(S,J),t(S,It),t(S,X),t(S,T),t(S,R),t(R,bt),t(bt,A),t(R,Nt),t(R,kt),t(kt,jt),t(R,qt),t(R,ne),t(ne,be),t(R,ke),t(R,ae),t(ae,$e),t(R,Ee),t(R,re),t(re,ye),m(l,_e,d),m(l,Z,d),t(Z,xt),t(Z,Le),t(Z,Bt),t(Z,De),t(Z,P),t(P,oe),t(oe,Re),t(P,xe),t(P,se),t(se,Se),t(P,Oe),t(P,ie),t(ie,Pe),t(P,we),t(P,fe),t(fe,He),t(P,Ae),t(P,ve),t(ve,Me),m(l,ue,d),m(l,St,d),m(l,he,d),$t[I].m(l,d),m(l,Jt,d),m(l,Ot,d),m(l,me,d),Et[j].m(l,d),m(l,Wt,d),m(l,W,d),t(W,Pt),t(W,Ie),t(W,Kt),t(W,Ne);for(let w=0;w<y.length;w+=1)y[w]&&y[w].m(W,null);m(l,pe,d),_t=!0},p(l,[d]){(!_t||d&1)&&ut!==(ut=l[0].summary.schemeName+"")&&Qt(ht,ut),(!_t||d&1)&&mt!==(mt=l[0].summary.schemeReference+"")&&Qt(rt,mt),(!_t||d&1)&&it!==(it=l[0].summary.authority+"")&&Qt(gt,it),(!_t||d&1)&&z!==(z=l[0].summary.designStage+"")&&Qt(E,z),(!_t||d&1)&&dt!==(dt=l[0].summary.assessedRouteLengthKm+"")&&Qt(V,dt);let w=I;I=el(l),I===w?$t[I].p(l,d):(gl(),lt($t[w],1,1,()=>{$t[w]=null}),pl(),N=$t[I],N?N.p(l,d):(N=$t[I]=tl[I](l),N.c()),nt(N,1),N.m(Jt.parentNode,Jt));let Yt=j;if(j=nl(l),j===Yt?Et[j].p(l,d):(gl(),lt(Et[Yt],1,1,()=>{Et[Yt]=null}),pl(),q=Et[j],q?q.p(l,d):(q=Et[j]=ll[j](l),q.c()),nt(q,1),q.m(Wt.parentNode,Wt)),d&3){Ut=Cl(l[1].jat);let L;for(L=0;L<Ut.length;L+=1){const de=Tl(l,Ut,L);y[L]?y[L].p(de,d):(y[L]=bl(de),y[L].c(),y[L].m(W,null))}for(;L<y.length;L+=1)y[L].d(1);y.length=Ut.length}},i(l){_t||(nt(N),nt(q),_t=!0)},o(l){lt(N),lt(q),_t=!1},d(l){l&&(a(n),a(Rt),a(S),a(_e),a(Z),a(ue),a(St),a(he),a(Jt),a(Ot),a(me),a(Wt),a(W),a(pe)),$t[I].d(l),Et[j].d(l),$l(y,l)}}}function Hl(s,n,_){let i;El(s,Dl,e=>_(0,i=e));let p=Rl(i),u={existing:i.policyConflictLog.filter(e=>e.stage=="Existing").length,designed:i.policyConflictLog.filter(e=>e.stage=="Design").length,removed:i.policyConflictLog.filter(e=>e.resolved=="Yes").length},h={existing:i.criticalIssues.filter(e=>e.stage=="Existing").length,designed:i.criticalIssues.filter(e=>e.stage=="Design").length,removed:i.criticalIssues.filter(e=>e.resolved=="Yes").length};return[i,p,u,h]}class Bl extends yl{constructor(n){super(),Ll(this,n,Hl,wl,kl,{})}}export{Bl as component};
