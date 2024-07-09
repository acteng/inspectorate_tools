import{s as Ee,v as He,e as _,a as C,t as H,c as u,b as L,p as E,g as k,d as P,f as l,r as Pe,i as s,h as f,w as Se,k as Ne,n as B,j as $t}from"../chunks/scheduler.BBS-fkhU.js";import{S as we,i as Me,e as Oe,c as Jt,a as Ft,m as Gt,b as dt,f as Re,t as vt,d as Kt,g as qe}from"../chunks/index.B8H3ypVf.js";import{b as Q}from"../chunks/paths.8BobAujB.js";import{T as Ae}from"../chunks/TextArea.Ck6ITb4v.js";import{s as ye}from"../chunks/data.Crs_apGa.js";import{n as ht,g as ge}from"../chunks/results.CkwCPon9.js";import{L as xe}from"../chunks/LevelOfServiceTable.DvMlhcSO.js";function Ie(i){let t;return{c(){t=H("No further action")},l(r){t=P(r,"No further action")},m(r,n){s(r,t,n)},d(r){r&&l(t)}}}function je(i){let t;return{c(){t=H("View Comments in Policy Check and Policy Conflict Log")},l(r){t=P(r,"View Comments in Policy Check and Policy Conflict Log")},m(r,n){s(r,t,n)},d(r){r&&l(t)}}}function ze(i){let t;return{c(){t=H("Complete Policy Check and Policy Conflict Log")},l(r){t=P(r,"Complete Policy Check and Policy Conflict Log")},m(r,n){s(r,t,n)},d(r){r&&l(t)}}}function Ve(i){let t;return{c(){t=H("No further action")},l(r){t=P(r,"No further action")},m(r,n){s(r,t,n)},d(r){r&&l(t)}}}function Ye(i){let t;return{c(){t=H("View Comments in Critical Issues Log")},l(r){t=P(r,"View Comments in Critical Issues Log")},m(r,n){s(r,t,n)},d(r){r&&l(t)}}}function Be(i){let t;return{c(){t=H("Complete Safety Check and Critical Issues Log")},l(r){t=P(r,"Complete Safety Check and Critical Issues Log")},m(r,n){s(r,t,n)},d(r){r&&l(t)}}}function Je(i){let t,r="Street Check",n,a,T="N/A",b,d,h="N/A",x,c,$="N/A";return{c(){t=_("th"),t.textContent=r,n=C(),a=_("td"),a.textContent=T,b=C(),d=_("td"),d.textContent=h,x=C(),c=_("td"),c.textContent=$},l(e){t=u(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-530xud"&&(t.textContent=r),n=k(e),a=u(e,"TD",{"data-svelte-h":!0}),E(a)!=="svelte-qmff1s"&&(a.textContent=T),b=k(e),d=u(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=h),x=k(e),c=u(e,"TD",{"data-svelte-h":!0}),E(c)!=="svelte-qmff1s"&&(c.textContent=$)},m(e,p){s(e,t,p),s(e,n,p),s(e,a,p),s(e,b,p),s(e,d,p),s(e,x,p),s(e,c,p)},p:B,d(e){e&&(l(t),l(n),l(a),l(b),l(d),l(x),l(c))}}}function Fe(i){let t,r=`<a href="${Q}/route_check/street_check">Street Check</a>`,n,a,T=V(J(i[0].streetCheck))+"",b,d,h,x=ht(i[5].overall)+"",c,$,e,p=mt(i[5].overall,"the route quality")+"",N;return{c(){t=_("th"),t.innerHTML=r,n=C(),a=_("td"),b=H(T),d=C(),h=_("td"),c=H(x),$=C(),e=_("td"),N=H(p)},l(o){t=u(o,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-14sg6jx"&&(t.innerHTML=r),n=k(o),a=u(o,"TD",{});var m=L(a);b=P(m,T),m.forEach(l),d=k(o),h=u(o,"TD",{});var w=L(h);c=P(w,x),w.forEach(l),$=k(o),e=u(o,"TD",{});var D=L(e);N=P(D,p),D.forEach(l)},m(o,m){s(o,t,m),s(o,n,m),s(o,a,m),f(a,b),s(o,d,m),s(o,h,m),f(h,c),s(o,$,m),s(o,e,m),f(e,N)},p(o,m){m&1&&T!==(T=V(J(o[0].streetCheck))+"")&&$t(b,T)},d(o){o&&(l(t),l(n),l(a),l(d),l(h),l($),l(e))}}}function Ge(i){let t,r="Street Placemaking",n,a,T="N/A",b,d,h="N/A",x,c,$="N/A";return{c(){t=_("th"),t.textContent=r,n=C(),a=_("td"),a.textContent=T,b=C(),d=_("td"),d.textContent=h,x=C(),c=_("td"),c.textContent=$},l(e){t=u(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-ps2sgv"&&(t.textContent=r),n=k(e),a=u(e,"TD",{"data-svelte-h":!0}),E(a)!=="svelte-qmff1s"&&(a.textContent=T),b=k(e),d=u(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=h),x=k(e),c=u(e,"TD",{"data-svelte-h":!0}),E(c)!=="svelte-qmff1s"&&(c.textContent=$)},m(e,p){s(e,t,p),s(e,n,p),s(e,a,p),s(e,b,p),s(e,d,p),s(e,x,p),s(e,c,p)},p:B,d(e){e&&(l(t),l(n),l(a),l(b),l(d),l(x),l(c))}}}function Ke(i){let t,r=`<a href="${Q}/route_check/street_placemaking_check">Street Placemaking</a>`,n,a,T=V(J(i[0].streetPlacemakingCheck))+"",b,d,h,x=ht(i[5].placemakingOverall)+"",c,$,e,p=mt(i[5].placemakingOverall,"the quality of place")+"",N;return{c(){t=_("th"),t.innerHTML=r,n=C(),a=_("td"),b=H(T),d=C(),h=_("td"),c=H(x),$=C(),e=_("td"),N=H(p)},l(o){t=u(o,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-1g8vz7s"&&(t.innerHTML=r),n=k(o),a=u(o,"TD",{});var m=L(a);b=P(m,T),m.forEach(l),d=k(o),h=u(o,"TD",{});var w=L(h);c=P(w,x),w.forEach(l),$=k(o),e=u(o,"TD",{});var D=L(e);N=P(D,p),D.forEach(l)},m(o,m){s(o,t,m),s(o,n,m),s(o,a,m),f(a,b),s(o,d,m),s(o,h,m),f(h,c),s(o,$,m),s(o,e,m),f(e,N)},p(o,m){m&1&&T!==(T=V(J(o[0].streetPlacemakingCheck))+"")&&$t(b,T)},d(o){o&&(l(t),l(n),l(a),l(d),l(h),l($),l(e))}}}function Qe(i){let t,r="Path Check",n,a,T="N/A",b,d,h="N/A",x,c,$="N/A";return{c(){t=_("th"),t.textContent=r,n=C(),a=_("td"),a.textContent=T,b=C(),d=_("td"),d.textContent=h,x=C(),c=_("td"),c.textContent=$},l(e){t=u(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-1wf56dp"&&(t.textContent=r),n=k(e),a=u(e,"TD",{"data-svelte-h":!0}),E(a)!=="svelte-qmff1s"&&(a.textContent=T),b=k(e),d=u(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=h),x=k(e),c=u(e,"TD",{"data-svelte-h":!0}),E(c)!=="svelte-qmff1s"&&(c.textContent=$)},m(e,p){s(e,t,p),s(e,n,p),s(e,a,p),s(e,b,p),s(e,d,p),s(e,x,p),s(e,c,p)},p:B,d(e){e&&(l(t),l(n),l(a),l(b),l(d),l(x),l(c))}}}function Ue(i){let t,r=`<a href="${Q}/route_check/path_check">Path Check</a>`,n,a,T=V(J(i[0].pathCheck))+"",b,d,h,x=ht(i[5].overall)+"",c,$,e,p=mt(i[5].overall,"the path quality")+"",N,o,m,w="TODO";return{c(){t=_("th"),t.innerHTML=r,n=C(),a=_("td"),b=H(T),d=C(),h=_("td"),c=H(x),$=C(),e=_("td"),N=H(p),o=C(),m=_("td"),m.textContent=w},l(D){t=u(D,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-1x4olbp"&&(t.innerHTML=r),n=k(D),a=u(D,"TD",{});var S=L(a);b=P(S,T),S.forEach(l),d=k(D),h=u(D,"TD",{});var U=L(h);c=P(U,x),U.forEach(l),$=k(D),e=u(D,"TD",{});var M=L(e);N=P(M,p),M.forEach(l),o=k(D),m=u(D,"TD",{"data-svelte-h":!0}),E(m)!=="svelte-1mugsmu"&&(m.textContent=w)},m(D,S){s(D,t,S),s(D,n,S),s(D,a,S),f(a,b),s(D,d,S),s(D,h,S),f(h,c),s(D,$,S),s(D,e,S),f(e,N),s(D,o,S),s(D,m,S)},p(D,S){S&1&&T!==(T=V(J(D[0].pathCheck))+"")&&$t(b,T)},d(D){D&&(l(t),l(n),l(a),l(d),l(h),l($),l(e),l(o),l(m))}}}function We(i){let t,r="Path Placemaking",n,a,T="N/A",b,d,h="N/A",x,c,$="N/A";return{c(){t=_("th"),t.textContent=r,n=C(),a=_("td"),a.textContent=T,b=C(),d=_("td"),d.textContent=h,x=C(),c=_("td"),c.textContent=$},l(e){t=u(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-k2805z"&&(t.textContent=r),n=k(e),a=u(e,"TD",{"data-svelte-h":!0}),E(a)!=="svelte-qmff1s"&&(a.textContent=T),b=k(e),d=u(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=h),x=k(e),c=u(e,"TD",{"data-svelte-h":!0}),E(c)!=="svelte-qmff1s"&&(c.textContent=$)},m(e,p){s(e,t,p),s(e,n,p),s(e,a,p),s(e,b,p),s(e,d,p),s(e,x,p),s(e,c,p)},p:B,d(e){e&&(l(t),l(n),l(a),l(b),l(d),l(x),l(c))}}}function Xe(i){let t,r=`<a href="${Q}/route_check/path_placemaking_check">Path Placemaking</a>`,n,a,T=V(J(i[0].pathPlacemakingCheck))+"",b,d,h,x=ht(i[5].placemakingOverall)+"",c,$,e,p=mt(i[5].placemakingOverall,"the quality of place")+"",N;return{c(){t=_("th"),t.innerHTML=r,n=C(),a=_("td"),b=H(T),d=C(),h=_("td"),c=H(x),$=C(),e=_("td"),N=H(p)},l(o){t=u(o,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-6kai2y"&&(t.innerHTML=r),n=k(o),a=u(o,"TD",{});var m=L(a);b=P(m,T),m.forEach(l),d=k(o),h=u(o,"TD",{});var w=L(h);c=P(w,x),w.forEach(l),$=k(o),e=u(o,"TD",{});var D=L(e);N=P(D,p),D.forEach(l)},m(o,m){s(o,t,m),s(o,n,m),s(o,a,m),f(a,b),s(o,d,m),s(o,h,m),f(h,c),s(o,$,m),s(o,e,m),f(e,N)},p(o,m){m&1&&T!==(T=V(J(o[0].pathPlacemakingCheck))+"")&&$t(b,T)},d(o){o&&(l(t),l(n),l(a),l(d),l(h),l($),l(e))}}}function Ze(i){let t,r="Select Street Check or Path Check for further results";return{c(){t=_("h2"),t.textContent=r},l(n){t=u(n,"H2",{"data-svelte-h":!0}),E(t)!=="svelte-svuhxy"&&(t.textContent=r)},m(n,a){s(n,t,a)},p:B,i:B,o:B,d(n){n&&l(t)}}}function tl(i){let t,r;return t=new xe({props:{caption:"Path Check Level of Service",categories:i[5].levelOfService,overall:i[5].overall,overallLabel:"Overall ATE Score"}}),{c(){Jt(t.$$.fragment)},l(n){Ft(t.$$.fragment,n)},m(n,a){Gt(t,n,a),r=!0},p:B,i(n){r||(vt(t.$$.fragment,n),r=!0)},o(n){dt(t.$$.fragment,n),r=!1},d(n){Kt(t,n)}}}function el(i){let t,r;return t=new xe({props:{caption:"Street Check Level of Service",categories:i[5].levelOfService,overall:i[5].overall,overallLabel:"Overall ATE Score"}}),{c(){Jt(t.$$.fragment)},l(n){Ft(t.$$.fragment,n)},m(n,a){Gt(t,n,a),r=!0},p:B,i(n){r||(vt(t.$$.fragment,n),r=!0)},o(n){dt(t.$$.fragment,n),r=!1},d(n){Kt(t,n)}}}function ll(i){let t,r,n="Overview",a,T,b="<th></th> <th>Complete</th> <th>Remaining issues for review</th> <th>Next steps</th>",d,h,x,c=`<a href="${Q}/route_check/problems_map">Policy Conflicts</a>`,$,e,p=V(i[1])+"",N,o,m,w,D,S,U,M,W,Qt=`<a href="${Q}/route_check/problems_map">Critical Issues</a>`,Lt,at,Ut=V(i[3])+"",Et,Ht,ot,Pt,St,st,Nt,X,Wt="<th></th> <th>Complete</th> <th>Net difference</th> <th>Next steps</th>",wt,A,Z,Xt=`<a href="${Q}/route_check/safety_check">Safety Check</a>`,Mt,ct,Zt=V(i[3])+"",Ot,Rt,ft,te=ht(i[5].safetyCheck)+"",qt,At,_t,ee=mt(i[5].safetyCheck,"safety")+"",gt,It,tt,jt,et,zt,lt,Vt,nt,Yt,rt,le=`<th><a href="${Q}/route_check/jat_check">Junction Assessment Tool Check</a></th> <td>TODO</td> <td>TODO</td> <td>TODO</td>`,pt,O,R,it,Y,Bt,Ct;function De(v,y){return v[1]?v[2]>0?je:Ie:ze}let kt=De(i)(i);function $e(v,y){return v[3]?v[4]>0?Ye:Ve:Be}let Tt=$e(i)(i);function ne(v,y){return v[0].summary.checkType=="street"?Fe:Je}let bt=ne(i),g=bt(i);function re(v,y){return v[0].summary.checkType=="street"?Ke:Ge}let yt=re(i),I=yt(i);function ie(v,y){return v[0].summary.checkType=="path"?Ue:Qe}let xt=ie(i),j=xt(i);function ae(v,y){return v[0].summary.checkType=="path"?Xe:We}let Dt=ae(i),z=Dt(i);const oe=[el,tl,Ze],F=[];function se(v,y){return v[0].summary.checkType=="street"?0:v[0].summary.checkType=="path"?1:2}O=se(i),R=F[O]=oe[O](i);function Le(v){i[6](v)}let ce={label:"Review statement"};return i[0].resultsReviewStatement!==void 0&&(ce.value=i[0].resultsReviewStatement),Y=new Ae({props:ce}),He.push(()=>Oe(Y,"value",Le)),{c(){t=_("table"),r=_("caption"),r.textContent=n,a=C(),T=_("tr"),T.innerHTML=b,d=C(),h=_("tr"),x=_("th"),x.innerHTML=c,$=C(),e=_("td"),N=H(p),o=C(),m=_("td"),w=H(i[2]),D=C(),S=_("td"),kt.c(),U=C(),M=_("tr"),W=_("th"),W.innerHTML=Qt,Lt=C(),at=_("td"),Et=H(Ut),Ht=C(),ot=_("td"),Pt=H(i[4]),St=C(),st=_("td"),Tt.c(),Nt=C(),X=_("tr"),X.innerHTML=Wt,wt=C(),A=_("tr"),Z=_("th"),Z.innerHTML=Xt,Mt=C(),ct=_("td"),Ot=H(Zt),Rt=C(),ft=_("td"),qt=H(te),At=C(),_t=_("td"),gt=H(ee),It=C(),tt=_("tr"),g.c(),jt=C(),et=_("tr"),I.c(),zt=C(),lt=_("tr"),j.c(),Vt=C(),nt=_("tr"),z.c(),Yt=C(),rt=_("tr"),rt.innerHTML=le,pt=C(),R.c(),it=C(),Jt(Y.$$.fragment),this.h()},l(v){t=u(v,"TABLE",{});var y=L(t);r=u(y,"CAPTION",{class:!0,"data-svelte-h":!0}),E(r)!=="svelte-1ctvdmv"&&(r.textContent=n),a=k(y),T=u(y,"TR",{"data-svelte-h":!0}),E(T)!=="svelte-pzuoo6"&&(T.innerHTML=b),d=k(y),h=u(y,"TR",{});var q=L(h);x=u(q,"TH",{"data-svelte-h":!0}),E(x)!=="svelte-l97vya"&&(x.innerHTML=c),$=k(q),e=u(q,"TD",{});var ut=L(e);N=P(ut,p),ut.forEach(l),o=k(q),m=u(q,"TD",{});var fe=L(m);w=P(fe,i[2]),fe.forEach(l),D=k(q),S=u(q,"TD",{});var _e=L(S);kt.l(_e),_e.forEach(l),q.forEach(l),U=k(y),M=u(y,"TR",{});var G=L(M);W=u(G,"TH",{"data-svelte-h":!0}),E(W)!=="svelte-vvsvli"&&(W.innerHTML=Qt),Lt=k(G),at=u(G,"TD",{});var ue=L(at);Et=P(ue,Ut),ue.forEach(l),Ht=k(G),ot=u(G,"TD",{});var de=L(ot);Pt=P(de,i[4]),de.forEach(l),St=k(G),st=u(G,"TD",{});var ve=L(st);Tt.l(ve),ve.forEach(l),G.forEach(l),Nt=k(y),X=u(y,"TR",{"data-svelte-h":!0}),E(X)!=="svelte-x874yx"&&(X.innerHTML=Wt),wt=k(y),A=u(y,"TR",{});var K=L(A);Z=u(K,"TH",{"data-svelte-h":!0}),E(Z)!=="svelte-1plvhjt"&&(Z.innerHTML=Xt),Mt=k(K),ct=u(K,"TD",{});var he=L(ct);Ot=P(he,Zt),he.forEach(l),Rt=k(K),ft=u(K,"TD",{});var me=L(ft);qt=P(me,te),me.forEach(l),At=k(K),_t=u(K,"TD",{});var pe=L(_t);gt=P(pe,ee),pe.forEach(l),K.forEach(l),It=k(y),tt=u(y,"TR",{});var Ce=L(tt);g.l(Ce),Ce.forEach(l),jt=k(y),et=u(y,"TR",{});var ke=L(et);I.l(ke),ke.forEach(l),zt=k(y),lt=u(y,"TR",{});var Te=L(lt);j.l(Te),Te.forEach(l),Vt=k(y),nt=u(y,"TR",{});var be=L(nt);z.l(be),be.forEach(l),Yt=k(y),rt=u(y,"TR",{"data-svelte-h":!0}),E(rt)!=="svelte-bwenzo"&&(rt.innerHTML=le),y.forEach(l),pt=k(v),R.l(v),it=k(v),Ft(Y.$$.fragment,v),this.h()},h(){Pe(r,"class","govuk-table__caption govuk-table__caption--m")},m(v,y){s(v,t,y),f(t,r),f(t,a),f(t,T),f(t,d),f(t,h),f(h,x),f(h,$),f(h,e),f(e,N),f(h,o),f(h,m),f(m,w),f(h,D),f(h,S),kt.m(S,null),f(t,U),f(t,M),f(M,W),f(M,Lt),f(M,at),f(at,Et),f(M,Ht),f(M,ot),f(ot,Pt),f(M,St),f(M,st),Tt.m(st,null),f(t,Nt),f(t,X),f(t,wt),f(t,A),f(A,Z),f(A,Mt),f(A,ct),f(ct,Ot),f(A,Rt),f(A,ft),f(ft,qt),f(A,At),f(A,_t),f(_t,gt),f(t,It),f(t,tt),g.m(tt,null),f(t,jt),f(t,et),I.m(et,null),f(t,zt),f(t,lt),j.m(lt,null),f(t,Vt),f(t,nt),z.m(nt,null),f(t,Yt),f(t,rt),s(v,pt,y),F[O].m(v,y),s(v,it,y),Gt(Y,v,y),Ct=!0},p(v,[y]){bt===(bt=ne(v))&&g?g.p(v,y):(g.d(1),g=bt(v),g&&(g.c(),g.m(tt,null))),yt===(yt=re(v))&&I?I.p(v,y):(I.d(1),I=yt(v),I&&(I.c(),I.m(et,null))),xt===(xt=ie(v))&&j?j.p(v,y):(j.d(1),j=xt(v),j&&(j.c(),j.m(lt,null))),Dt===(Dt=ae(v))&&z?z.p(v,y):(z.d(1),z=Dt(v),z&&(z.c(),z.m(nt,null)));let q=O;O=se(v),O===q?F[O].p(v,y):(qe(),dt(F[q],1,1,()=>{F[q]=null}),Re(),R=F[O],R?R.p(v,y):(R=F[O]=oe[O](v),R.c()),vt(R,1),R.m(it.parentNode,it));const ut={};!Bt&&y&1&&(Bt=!0,ut.value=v[0].resultsReviewStatement,Se(()=>Bt=!1)),Y.$set(ut)},i(v){Ct||(vt(R),vt(Y.$$.fragment,v),Ct=!0)},o(v){dt(R),dt(Y.$$.fragment,v),Ct=!1},d(v){v&&(l(t),l(pt),l(it)),kt.d(),Tt.d(),g.d(),I.d(),j.d(),z.d(),F[O].d(v),Kt(Y,v)}}}function V(i){return i?"Yes":"No"}function J(i){return!i.existingScores.includes("")&&!i.proposedScores.includes("")}function mt(i,t){return i.proposed.scorePercent>=i.existing.scorePercent?`The proposed design will likely improve ${t}`:`The proposed design will likely reduce ${t}`}function nl(i,t,r){let n;Ne(i,ye,c=>r(0,n=c));let a=n.policyCheck.every(c=>c.existing!=""&&c.proposed!=""),T=n.policyConflictLog.filter(c=>c.resolved!="Yes").length,b=J(n.safetyCheck),d=n.criticalIssues.filter(c=>c.resolved!="Yes").length,h=ge(n);function x(c){i.$$.not_equal(n.resultsReviewStatement,c)&&(n.resultsReviewStatement=c,ye.set(n))}return[n,a,T,b,d,h,x]}class dl extends we{constructor(t){super(),Me(this,t,nl,ll,Ee,{})}}export{dl as component};
