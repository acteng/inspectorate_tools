import{s as de,e as v,a as y,t as L,c as h,b as H,p as E,g as b,d as q,f as l,q as ve,i as f,h as u,j as A,n as U,k as he}from"./scheduler.DGwhun8C.js";import{S as Ce,i as me}from"./index.B2vZYn3d.js";import{b as Q}from"./paths.CSncTsP_.js";import{s as pe}from"./data.CDqPsUsf.js";import{n as Y}from"./results.DRnoygtb.js";function ke(c){let t;return{c(){t=L("No further action")},l(a){t=q(a,"No further action")},m(a,o){f(a,t,o)},d(a){a&&l(t)}}}function Te(c){let t;return{c(){t=L("View Comments in Policy Check and Policy Conflict Log")},l(a){t=q(a,"View Comments in Policy Check and Policy Conflict Log")},m(a,o){f(a,t,o)},d(a){a&&l(t)}}}function ye(c){let t;return{c(){t=L("Complete Policy Check and Policy Conflict Log")},l(a){t=q(a,"Complete Policy Check and Policy Conflict Log")},m(a,o){f(a,t,o)},d(a){a&&l(t)}}}function be(c){let t;return{c(){t=L("No further action")},l(a){t=q(a,"No further action")},m(a,o){f(a,t,o)},d(a){a&&l(t)}}}function De(c){let t;return{c(){t=L("View Comments in Critical Issues Log")},l(a){t=q(a,"View Comments in Critical Issues Log")},m(a,o){f(a,t,o)},d(a){a&&l(t)}}}function xe(c){let t;return{c(){t=L("Complete Safety Check and Critical Issues Log")},l(a){t=q(a,"Complete Safety Check and Critical Issues Log")},m(a,o){f(a,t,o)},d(a){a&&l(t)}}}function Ee(c){let t,a="Street Check",o,r,k="N/A",p,s,C="N/A",i,d,T="N/A";return{c(){t=v("th"),t.textContent=a,o=y(),r=v("td"),r.textContent=k,p=y(),s=v("td"),s.textContent=C,i=y(),d=v("td"),d.textContent=T},l(e){t=h(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-530xud"&&(t.textContent=a),o=b(e),r=h(e,"TD",{"data-svelte-h":!0}),E(r)!=="svelte-qmff1s"&&(r.textContent=k),p=b(e),s=h(e,"TD",{"data-svelte-h":!0}),E(s)!=="svelte-qmff1s"&&(s.textContent=C),i=b(e),d=h(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=T)},m(e,m){f(e,t,m),f(e,o,m),f(e,r,m),f(e,p,m),f(e,s,m),f(e,i,m),f(e,d,m)},p:U,d(e){e&&(l(t),l(o),l(r),l(p),l(s),l(i),l(d))}}}function He(c){let t,a=`<a href="${Q}/route_check/street_check">Street Check</a>`,o,r,k=V(J(c[1].streetCheck))+"",p,s,C,i=Y(c[0].overall)+"",d,T,e,m=z(c[0].overall,"the route quality")+"",N;return{c(){t=v("th"),t.innerHTML=a,o=y(),r=v("td"),p=L(k),s=y(),C=v("td"),d=L(i),T=y(),e=v("td"),N=L(m)},l(n){t=h(n,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-14sg6jx"&&(t.innerHTML=a),o=b(n),r=h(n,"TD",{});var _=H(r);p=q(_,k),_.forEach(l),s=b(n),C=h(n,"TD",{});var P=H(C);d=q(P,i),P.forEach(l),T=b(n),e=h(n,"TD",{});var M=H(e);N=q(M,m),M.forEach(l)},m(n,_){f(n,t,_),f(n,o,_),f(n,r,_),u(r,p),f(n,s,_),f(n,C,_),u(C,d),f(n,T,_),f(n,e,_),u(e,N)},p(n,_){_&2&&k!==(k=V(J(n[1].streetCheck))+"")&&A(p,k),_&1&&i!==(i=Y(n[0].overall)+"")&&A(d,i),_&1&&m!==(m=z(n[0].overall,"the route quality")+"")&&A(N,m)},d(n){n&&(l(t),l(o),l(r),l(s),l(C),l(T),l(e))}}}function Le(c){let t,a="Street Placemaking",o,r,k="N/A",p,s,C="N/A",i,d,T="N/A";return{c(){t=v("th"),t.textContent=a,o=y(),r=v("td"),r.textContent=k,p=y(),s=v("td"),s.textContent=C,i=y(),d=v("td"),d.textContent=T},l(e){t=h(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-ps2sgv"&&(t.textContent=a),o=b(e),r=h(e,"TD",{"data-svelte-h":!0}),E(r)!=="svelte-qmff1s"&&(r.textContent=k),p=b(e),s=h(e,"TD",{"data-svelte-h":!0}),E(s)!=="svelte-qmff1s"&&(s.textContent=C),i=b(e),d=h(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=T)},m(e,m){f(e,t,m),f(e,o,m),f(e,r,m),f(e,p,m),f(e,s,m),f(e,i,m),f(e,d,m)},p:U,d(e){e&&(l(t),l(o),l(r),l(p),l(s),l(i),l(d))}}}function qe(c){let t,a=`<a href="${Q}/route_check/street_placemaking_check">Street Placemaking</a>`,o,r,k=V(J(c[1].streetPlacemakingCheck))+"",p,s,C,i=Y(c[0].placemakingOverall)+"",d,T,e,m=z(c[0].placemakingOverall,"the quality of place")+"",N;return{c(){t=v("th"),t.innerHTML=a,o=y(),r=v("td"),p=L(k),s=y(),C=v("td"),d=L(i),T=y(),e=v("td"),N=L(m)},l(n){t=h(n,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-1g8vz7s"&&(t.innerHTML=a),o=b(n),r=h(n,"TD",{});var _=H(r);p=q(_,k),_.forEach(l),s=b(n),C=h(n,"TD",{});var P=H(C);d=q(P,i),P.forEach(l),T=b(n),e=h(n,"TD",{});var M=H(e);N=q(M,m),M.forEach(l)},m(n,_){f(n,t,_),f(n,o,_),f(n,r,_),u(r,p),f(n,s,_),f(n,C,_),u(C,d),f(n,T,_),f(n,e,_),u(e,N)},p(n,_){_&2&&k!==(k=V(J(n[1].streetPlacemakingCheck))+"")&&A(p,k),_&1&&i!==(i=Y(n[0].placemakingOverall)+"")&&A(d,i),_&1&&m!==(m=z(n[0].placemakingOverall,"the quality of place")+"")&&A(N,m)},d(n){n&&(l(t),l(o),l(r),l(s),l(C),l(T),l(e))}}}function Ne(c){let t,a="Path Check",o,r,k="N/A",p,s,C="N/A",i,d,T="N/A";return{c(){t=v("th"),t.textContent=a,o=y(),r=v("td"),r.textContent=k,p=y(),s=v("td"),s.textContent=C,i=y(),d=v("td"),d.textContent=T},l(e){t=h(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-1wf56dp"&&(t.textContent=a),o=b(e),r=h(e,"TD",{"data-svelte-h":!0}),E(r)!=="svelte-qmff1s"&&(r.textContent=k),p=b(e),s=h(e,"TD",{"data-svelte-h":!0}),E(s)!=="svelte-qmff1s"&&(s.textContent=C),i=b(e),d=h(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=T)},m(e,m){f(e,t,m),f(e,o,m),f(e,r,m),f(e,p,m),f(e,s,m),f(e,i,m),f(e,d,m)},p:U,d(e){e&&(l(t),l(o),l(r),l(p),l(s),l(i),l(d))}}}function Pe(c){let t,a=`<a href="${Q}/route_check/path_check">Path Check</a>`,o,r,k=V(J(c[1].pathCheck))+"",p,s,C,i=Y(c[0].overall)+"",d,T,e,m=z(c[0].overall,"the path quality")+"",N;return{c(){t=v("th"),t.innerHTML=a,o=y(),r=v("td"),p=L(k),s=y(),C=v("td"),d=L(i),T=y(),e=v("td"),N=L(m)},l(n){t=h(n,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-1x4olbp"&&(t.innerHTML=a),o=b(n),r=h(n,"TD",{});var _=H(r);p=q(_,k),_.forEach(l),s=b(n),C=h(n,"TD",{});var P=H(C);d=q(P,i),P.forEach(l),T=b(n),e=h(n,"TD",{});var M=H(e);N=q(M,m),M.forEach(l)},m(n,_){f(n,t,_),f(n,o,_),f(n,r,_),u(r,p),f(n,s,_),f(n,C,_),u(C,d),f(n,T,_),f(n,e,_),u(e,N)},p(n,_){_&2&&k!==(k=V(J(n[1].pathCheck))+"")&&A(p,k),_&1&&i!==(i=Y(n[0].overall)+"")&&A(d,i),_&1&&m!==(m=z(n[0].overall,"the path quality")+"")&&A(N,m)},d(n){n&&(l(t),l(o),l(r),l(s),l(C),l(T),l(e))}}}function Me(c){let t,a="Path Placemaking",o,r,k="N/A",p,s,C="N/A",i,d,T="N/A";return{c(){t=v("th"),t.textContent=a,o=y(),r=v("td"),r.textContent=k,p=y(),s=v("td"),s.textContent=C,i=y(),d=v("td"),d.textContent=T},l(e){t=h(e,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-k2805z"&&(t.textContent=a),o=b(e),r=h(e,"TD",{"data-svelte-h":!0}),E(r)!=="svelte-qmff1s"&&(r.textContent=k),p=b(e),s=h(e,"TD",{"data-svelte-h":!0}),E(s)!=="svelte-qmff1s"&&(s.textContent=C),i=b(e),d=h(e,"TD",{"data-svelte-h":!0}),E(d)!=="svelte-qmff1s"&&(d.textContent=T)},m(e,m){f(e,t,m),f(e,o,m),f(e,r,m),f(e,p,m),f(e,s,m),f(e,i,m),f(e,d,m)},p:U,d(e){e&&(l(t),l(o),l(r),l(p),l(s),l(i),l(d))}}}function Ae(c){let t,a=`<a href="${Q}/route_check/path_placemaking_check">Path Placemaking</a>`,o,r,k=V(J(c[1].pathPlacemakingCheck))+"",p,s,C,i=Y(c[0].placemakingOverall)+"",d,T,e,m=z(c[0].placemakingOverall,"the quality of place")+"",N;return{c(){t=v("th"),t.innerHTML=a,o=y(),r=v("td"),p=L(k),s=y(),C=v("td"),d=L(i),T=y(),e=v("td"),N=L(m)},l(n){t=h(n,"TH",{"data-svelte-h":!0}),E(t)!=="svelte-6kai2y"&&(t.innerHTML=a),o=b(n),r=h(n,"TD",{});var _=H(r);p=q(_,k),_.forEach(l),s=b(n),C=h(n,"TD",{});var P=H(C);d=q(P,i),P.forEach(l),T=b(n),e=h(n,"TD",{});var M=H(e);N=q(M,m),M.forEach(l)},m(n,_){f(n,t,_),f(n,o,_),f(n,r,_),u(r,p),f(n,s,_),f(n,C,_),u(C,d),f(n,T,_),f(n,e,_),u(e,N)},p(n,_){_&2&&k!==(k=V(J(n[1].pathPlacemakingCheck))+"")&&A(p,k),_&1&&i!==(i=Y(n[0].placemakingOverall)+"")&&A(d,i),_&1&&m!==(m=z(n[0].placemakingOverall,"the quality of place")+"")&&A(N,m)},d(n){n&&(l(t),l(o),l(r),l(s),l(C),l(T),l(e))}}}function Oe(c){let t,a="Yes",o,r,k=c[0].jat[c[0].jat.length-1].total.netDifference+"",p,s,C,i,d="Review Junction Assessment";return{c(){t=v("td"),t.textContent=a,o=y(),r=v("td"),p=L(k),s=L("%"),C=y(),i=v("td"),i.textContent=d},l(T){t=h(T,"TD",{"data-svelte-h":!0}),E(t)!=="svelte-1qt6mlv"&&(t.textContent=a),o=b(T),r=h(T,"TD",{});var e=H(r);p=q(e,k),s=q(e,"%"),e.forEach(l),C=b(T),i=h(T,"TD",{"data-svelte-h":!0}),E(i)!=="svelte-g04cq4"&&(i.textContent=d)},m(T,e){f(T,t,e),f(T,o,e),f(T,r,e),u(r,p),u(r,s),f(T,C,e),f(T,i,e)},p(T,e){e&1&&k!==(k=T[0].jat[T[0].jat.length-1].total.netDifference+"")&&A(p,k)},d(T){T&&(l(t),l(o),l(r),l(C),l(i))}}}function Re(c){let t,a="No",o,r,k="N/A",p,s,C="N/A";return{c(){t=v("td"),t.textContent=a,o=y(),r=v("td"),r.textContent=k,p=y(),s=v("td"),s.textContent=C},l(i){t=h(i,"TD",{"data-svelte-h":!0}),E(t)!=="svelte-lkpsdp"&&(t.textContent=a),o=b(i),r=h(i,"TD",{"data-svelte-h":!0}),E(r)!=="svelte-qmff1s"&&(r.textContent=k),p=b(i),s=h(i,"TD",{"data-svelte-h":!0}),E(s)!=="svelte-qmff1s"&&(s.textContent=C)},m(i,d){f(i,t,d),f(i,o,d),f(i,r,d),f(i,p,d),f(i,s,d)},p:U,d(i){i&&(l(t),l(o),l(r),l(p),l(s))}}}function Se(c){let t,a,o="Overview",r,k,p="<td></td> <th>Complete</th> <th>Remaining issues for review</th> <th>Next steps</th>",s,C,i,d=`<a href="${Q}/route_check/problems_map">Policy Conflicts</a>`,T,e,m=V(c[2])+"",N,n,_,P,M,it,Dt,O,W,Yt=`<a href="${Q}/route_check/problems_map">Critical Issues</a>`,xt,rt,zt=V(c[4])+"",Et,Ht,at,Lt,qt,ft,Nt,X,Jt="<td></td> <th>Complete</th> <th>Net difference</th> <th>Next steps</th>",Pt,R,Z,Bt=`<a href="${Q}/route_check/safety_check">Safety Check</a>`,Mt,ot,Ft=V(c[4])+"",At,Ot,st,ct=Y(c[0].safetyCheck)+"",dt,Rt,_t,ut=z(c[0].safetyCheck,"safety")+"",vt,St,g,jt,tt,wt,et,It,lt,$t,B,nt,Gt=`<a href="${Q}/route_check/jat_check">Junction Assessment Tool Check</a>`,Vt;function _e(D,x){return D[2]?D[3]>0?Te:ke:ye}let ht=_e(c)(c);function ue(D,x){return D[4]?D[5]>0?De:be:xe}let Ct=ue(c)(c);function Kt(D,x){return D[1].summary.checkType=="street"?He:Ee}let mt=Kt(c),S=mt(c);function Qt(D,x){return D[1].summary.checkType=="street"?qe:Le}let pt=Qt(c),j=pt(c);function Ut(D,x){return D[1].summary.checkType=="path"?Pe:Ne}let kt=Ut(c),w=kt(c);function Wt(D,x){return D[1].summary.checkType=="path"?Ae:Me}let Tt=Wt(c),I=Tt(c);function Xt(D,x){return D[0].jat[D[0].jat.length-1].total.netDifference==null?Re:Oe}let yt=Xt(c),$=yt(c);return{c(){t=v("table"),a=v("caption"),a.textContent=o,r=y(),k=v("tr"),k.innerHTML=p,s=y(),C=v("tr"),i=v("th"),i.innerHTML=d,T=y(),e=v("td"),N=L(m),n=y(),_=v("td"),P=L(c[3]),M=y(),it=v("td"),ht.c(),Dt=y(),O=v("tr"),W=v("th"),W.innerHTML=Yt,xt=y(),rt=v("td"),Et=L(zt),Ht=y(),at=v("td"),Lt=L(c[5]),qt=y(),ft=v("td"),Ct.c(),Nt=y(),X=v("tr"),X.innerHTML=Jt,Pt=y(),R=v("tr"),Z=v("th"),Z.innerHTML=Bt,Mt=y(),ot=v("td"),At=L(Ft),Ot=y(),st=v("td"),dt=L(ct),Rt=y(),_t=v("td"),vt=L(ut),St=y(),g=v("tr"),S.c(),jt=y(),tt=v("tr"),j.c(),wt=y(),et=v("tr"),w.c(),It=y(),lt=v("tr"),I.c(),$t=y(),B=v("tr"),nt=v("th"),nt.innerHTML=Gt,Vt=y(),$.c(),this.h()},l(D){t=h(D,"TABLE",{});var x=H(t);a=h(x,"CAPTION",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-1ctvdmv"&&(a.textContent=o),r=b(x),k=h(x,"TR",{"data-svelte-h":!0}),E(k)!=="svelte-1vmtkou"&&(k.innerHTML=p),s=b(x),C=h(x,"TR",{});var F=H(C);i=h(F,"TH",{"data-svelte-h":!0}),E(i)!=="svelte-l97vya"&&(i.innerHTML=d),T=b(F),e=h(F,"TD",{});var Zt=H(e);N=q(Zt,m),Zt.forEach(l),n=b(F),_=h(F,"TD",{});var gt=H(_);P=q(gt,c[3]),gt.forEach(l),M=b(F),it=h(F,"TD",{});var te=H(it);ht.l(te),te.forEach(l),F.forEach(l),Dt=b(x),O=h(x,"TR",{});var G=H(O);W=h(G,"TH",{"data-svelte-h":!0}),E(W)!=="svelte-vvsvli"&&(W.innerHTML=Yt),xt=b(G),rt=h(G,"TD",{});var ee=H(rt);Et=q(ee,zt),ee.forEach(l),Ht=b(G),at=h(G,"TD",{});var le=H(at);Lt=q(le,c[5]),le.forEach(l),qt=b(G),ft=h(G,"TD",{});var ne=H(ft);Ct.l(ne),ne.forEach(l),G.forEach(l),Nt=b(x),X=h(x,"TR",{"data-svelte-h":!0}),E(X)!=="svelte-5ip015"&&(X.innerHTML=Jt),Pt=b(x),R=h(x,"TR",{});var K=H(R);Z=h(K,"TH",{"data-svelte-h":!0}),E(Z)!=="svelte-1plvhjt"&&(Z.innerHTML=Bt),Mt=b(K),ot=h(K,"TD",{});var ie=H(ot);At=q(ie,Ft),ie.forEach(l),Ot=b(K),st=h(K,"TD",{});var re=H(st);dt=q(re,ct),re.forEach(l),Rt=b(K),_t=h(K,"TD",{});var ae=H(_t);vt=q(ae,ut),ae.forEach(l),K.forEach(l),St=b(x),g=h(x,"TR",{});var fe=H(g);S.l(fe),fe.forEach(l),jt=b(x),tt=h(x,"TR",{});var oe=H(tt);j.l(oe),oe.forEach(l),wt=b(x),et=h(x,"TR",{});var se=H(et);w.l(se),se.forEach(l),It=b(x),lt=h(x,"TR",{});var ce=H(lt);I.l(ce),ce.forEach(l),$t=b(x),B=h(x,"TR",{});var bt=H(B);nt=h(bt,"TH",{"data-svelte-h":!0}),E(nt)!=="svelte-8jgl0e"&&(nt.innerHTML=Gt),Vt=b(bt),$.l(bt),bt.forEach(l),x.forEach(l),this.h()},h(){ve(a,"class","govuk-table__caption govuk-table__caption--m")},m(D,x){f(D,t,x),u(t,a),u(t,r),u(t,k),u(t,s),u(t,C),u(C,i),u(C,T),u(C,e),u(e,N),u(C,n),u(C,_),u(_,P),u(C,M),u(C,it),ht.m(it,null),u(t,Dt),u(t,O),u(O,W),u(O,xt),u(O,rt),u(rt,Et),u(O,Ht),u(O,at),u(at,Lt),u(O,qt),u(O,ft),Ct.m(ft,null),u(t,Nt),u(t,X),u(t,Pt),u(t,R),u(R,Z),u(R,Mt),u(R,ot),u(ot,At),u(R,Ot),u(R,st),u(st,dt),u(R,Rt),u(R,_t),u(_t,vt),u(t,St),u(t,g),S.m(g,null),u(t,jt),u(t,tt),j.m(tt,null),u(t,wt),u(t,et),w.m(et,null),u(t,It),u(t,lt),I.m(lt,null),u(t,$t),u(t,B),u(B,nt),u(B,Vt),$.m(B,null)},p(D,[x]){x&1&&ct!==(ct=Y(D[0].safetyCheck)+"")&&A(dt,ct),x&1&&ut!==(ut=z(D[0].safetyCheck,"safety")+"")&&A(vt,ut),mt===(mt=Kt(D))&&S?S.p(D,x):(S.d(1),S=mt(D),S&&(S.c(),S.m(g,null))),pt===(pt=Qt(D))&&j?j.p(D,x):(j.d(1),j=pt(D),j&&(j.c(),j.m(tt,null))),kt===(kt=Ut(D))&&w?w.p(D,x):(w.d(1),w=kt(D),w&&(w.c(),w.m(et,null))),Tt===(Tt=Wt(D))&&I?I.p(D,x):(I.d(1),I=Tt(D),I&&(I.c(),I.m(lt,null))),yt===(yt=Xt(D))&&$?$.p(D,x):($.d(1),$=yt(D),$&&($.c(),$.m(B,null)))},i:U,o:U,d(D){D&&l(t),ht.d(),Ct.d(),S.d(),j.d(),w.d(),I.d(),$.d()}}}function V(c){return c?"Yes":"No"}function J(c){return!c.existingScores.includes("")&&!c.proposedScores.includes("")}function z(c,t){return c.proposed.scorePercent>=c.existing.scorePercent?`The proposed design will likely improve ${t}`:`The proposed design will likely reduce ${t}`}function je(c,t,a){let o;he(c,pe,i=>a(1,o=i));let{results:r}=t,k=o.policyCheck.every(i=>i.existing!=""&&i.proposed!=""),p=o.policyConflictLog.filter(i=>i.resolved!="Yes").length,s=J(o.safetyCheck),C=o.criticalIssues.filter(i=>i.resolved!="Yes").length;return c.$$set=i=>{"results"in i&&a(0,r=i.results)},[r,o,k,p,s,C]}class Be extends Ce{constructor(t){super(),me(this,t,je,Se,de,{results:0})}}export{Be as O};
