import{s as $e,a as _,e as d,t as j,g as u,c as g,p as se,b as w,d as A,f,i as E,h as i,j as z,F as ne,k as ve,D as ae}from"../chunks/scheduler.mGr_ZlpV.js";import{S as de,i as ge,c as U,b as V,m as W,t as Z,a as x,d as ee}from"../chunks/index.rGMSHTnh.js";import{e as le}from"../chunks/each.K9grjjo2.js";import{s as Ce}from"../chunks/data.BazL1FQ8.js";import{g as be}from"../chunks/results.D7ZmUySo.js";import{S as Te,P as ke,a as Ee,C as ye}from"../chunks/SafetyCheckResults.B5ta37XM.js";import{O as De}from"../chunks/Overview.DsgP5B1u.js";import{g as ie,a as re}from"../chunks/lists.BBs_zCmn.js";import{C as Ie,p as fe,c as oe}from"../chunks/ConvertToXlsx.mXsv-uwG.js";function me(r,t,l){const a=r.slice();return a[2]=t[l],a[4]=l,a}function ce(r,t,l){const a=r.slice();return a[5]=t[l],a[4]=l,a}function _e(r){let t,l,a=r[4]+1+"",c,C,y,h=fe(r[0],r[4])+"",F,M,v,b=ie(r[5].conflict)+"",L,Y,p,D=r[5].locationName+"",$,N,P,I=r[5].notes+"",S,R;return{c(){t=d("tr"),l=d("th"),c=j(a),C=_(),y=d("td"),F=j(h),M=_(),v=d("td"),L=j(b),Y=_(),p=d("td"),$=j(D),N=_(),P=d("td"),S=j(I),R=_()},l(o){t=g(o,"TR",{});var s=w(t);l=g(s,"TH",{});var O=w(l);c=A(O,a),O.forEach(f),C=u(s),y=g(s,"TD",{});var G=w(y);F=A(G,h),G.forEach(f),M=u(s),v=g(s,"TD",{});var X=w(v);L=A(X,b),X.forEach(f),Y=u(s),p=g(s,"TD",{});var B=w(p);$=A(B,D),B.forEach(f),N=u(s),P=g(s,"TD",{});var H=w(P);S=A(H,I),H.forEach(f),R=u(s),s.forEach(f)},m(o,s){E(o,t,s),i(t,l),i(l,c),i(t,C),i(t,y),i(y,F),i(t,M),i(t,v),i(v,L),i(t,Y),i(t,p),i(p,$),i(t,N),i(t,P),i(P,S),i(t,R)},p(o,s){s&1&&h!==(h=fe(o[0],o[4])+"")&&z(F,h),s&1&&b!==(b=ie(o[5].conflict)+"")&&z(L,b),s&1&&D!==(D=o[5].locationName+"")&&z($,D),s&1&&I!==(I=o[5].notes+"")&&z(S,I)},d(o){o&&f(t)}}}function ue(r){let t,l=r[5].resolved!="Yes"&&_e(r);return{c(){l&&l.c(),t=ae()},l(a){l&&l.l(a),t=ae()},m(a,c){l&&l.m(a,c),E(a,t,c)},p(a,c){a[5].resolved!="Yes"?l?l.p(a,c):(l=_e(a),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(a){a&&f(t),l&&l.d(a)}}}function he(r){let t,l,a=r[4]+1+"",c,C,y,h=oe(r[0],r[4])+"",F,M,v,b=re(r[2].criticalIssue)+"",L,Y,p,D=r[2].locationName+"",$,N,P,I=r[2].notes+"",S,R;return{c(){t=d("tr"),l=d("th"),c=j(a),C=_(),y=d("td"),F=j(h),M=_(),v=d("td"),L=j(b),Y=_(),p=d("td"),$=j(D),N=_(),P=d("td"),S=j(I),R=_()},l(o){t=g(o,"TR",{});var s=w(t);l=g(s,"TH",{});var O=w(l);c=A(O,a),O.forEach(f),C=u(s),y=g(s,"TD",{});var G=w(y);F=A(G,h),G.forEach(f),M=u(s),v=g(s,"TD",{});var X=w(v);L=A(X,b),X.forEach(f),Y=u(s),p=g(s,"TD",{});var B=w(p);$=A(B,D),B.forEach(f),N=u(s),P=g(s,"TD",{});var H=w(P);S=A(H,I),H.forEach(f),R=u(s),s.forEach(f)},m(o,s){E(o,t,s),i(t,l),i(l,c),i(t,C),i(t,y),i(y,F),i(t,M),i(t,v),i(v,L),i(t,Y),i(t,p),i(p,$),i(t,N),i(t,P),i(P,S),i(t,R)},p(o,s){s&1&&h!==(h=oe(o[0],o[4])+"")&&z(F,h),s&1&&b!==(b=re(o[2].criticalIssue)+"")&&z(L,b),s&1&&D!==(D=o[2].locationName+"")&&z($,D),s&1&&I!==(I=o[2].notes+"")&&z(S,I)},d(o){o&&f(t)}}}function pe(r){let t,l=r[2].resolved!="Yes"&&he(r);return{c(){l&&l.c(),t=ae()},l(a){l&&l.l(a),t=ae()},m(a,c){l&&l.m(a,c),E(a,t,c)},p(a,c){a[2].resolved!="Yes"?l?l.p(a,c):(l=he(a),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(a){a&&f(t),l&&l.d(a)}}}function Re(r){let t,l,a,c,C,y,h,F="Review statement",M,v,b=r[0].resultsReviewStatement+"",L,Y,p,D,$,N,P="<th>Remaining Policy Conflicts</th> <th>Policy Conflict ID</th> <th>Policy Conflict</th> <th>Location Name</th> <th>Commentary &amp; Feedback</th>",I,S,R,o,s,O,G="<th>Remaining Critical Issues</th> <th>Critical ID</th> <th>Critical Issue</th> <th>Location Name</th> <th>Commentary &amp; Feedback</th>",X,B,H,te;t=new Ie({}),a=new Te({}),C=new De({props:{results:r[1]}}),p=new ke({});let K=le(r[0].policyConflictLog),T=[];for(let e=0;e<K.length;e+=1)T[e]=ue(ce(r,K,e));R=new Ee({});let Q=le(r[0].criticalIssues),k=[];for(let e=0;e<Q.length;e+=1)k[e]=pe(me(r,Q,e));return H=new ye({props:{results:r[1]}}),{c(){U(t.$$.fragment),l=_(),U(a.$$.fragment),c=_(),U(C.$$.fragment),y=_(),h=d("h2"),h.textContent=F,M=_(),v=d("p"),L=j(b),Y=_(),U(p.$$.fragment),D=_(),$=d("table"),N=d("tr"),N.innerHTML=P,I=_();for(let e=0;e<T.length;e+=1)T[e].c();S=_(),U(R.$$.fragment),o=_(),s=d("table"),O=d("tr"),O.innerHTML=G,X=_();for(let e=0;e<k.length;e+=1)k[e].c();B=_(),U(H.$$.fragment)},l(e){V(t.$$.fragment,e),l=u(e),V(a.$$.fragment,e),c=u(e),V(C.$$.fragment,e),y=u(e),h=g(e,"H2",{"data-svelte-h":!0}),se(h)!=="svelte-1pa6fpf"&&(h.textContent=F),M=u(e),v=g(e,"P",{});var m=w(v);L=A(m,b),m.forEach(f),Y=u(e),V(p.$$.fragment,e),D=u(e),$=g(e,"TABLE",{});var n=w($);N=g(n,"TR",{"data-svelte-h":!0}),se(N)!=="svelte-rjeg8l"&&(N.innerHTML=P),I=u(n);for(let J=0;J<T.length;J+=1)T[J].l(n);n.forEach(f),S=u(e),V(R.$$.fragment,e),o=u(e),s=g(e,"TABLE",{});var q=w(s);O=g(q,"TR",{"data-svelte-h":!0}),se(O)!=="svelte-7lm48y"&&(O.innerHTML=G),X=u(q);for(let J=0;J<k.length;J+=1)k[J].l(q);q.forEach(f),B=u(e),V(H.$$.fragment,e)},m(e,m){W(t,e,m),E(e,l,m),W(a,e,m),E(e,c,m),W(C,e,m),E(e,y,m),E(e,h,m),E(e,M,m),E(e,v,m),i(v,L),E(e,Y,m),W(p,e,m),E(e,D,m),E(e,$,m),i($,N),i($,I);for(let n=0;n<T.length;n+=1)T[n]&&T[n].m($,null);E(e,S,m),W(R,e,m),E(e,o,m),E(e,s,m),i(s,O),i(s,X);for(let n=0;n<k.length;n+=1)k[n]&&k[n].m(s,null);E(e,B,m),W(H,e,m),te=!0},p(e,[m]){if((!te||m&1)&&b!==(b=e[0].resultsReviewStatement+"")&&z(L,b),m&1){K=le(e[0].policyConflictLog);let n;for(n=0;n<K.length;n+=1){const q=ce(e,K,n);T[n]?T[n].p(q,m):(T[n]=ue(q),T[n].c(),T[n].m($,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=K.length}if(m&1){Q=le(e[0].criticalIssues);let n;for(n=0;n<Q.length;n+=1){const q=me(e,Q,n);k[n]?k[n].p(q,m):(k[n]=pe(q),k[n].c(),k[n].m(s,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=Q.length}},i(e){te||(Z(t.$$.fragment,e),Z(a.$$.fragment,e),Z(C.$$.fragment,e),Z(p.$$.fragment,e),Z(R.$$.fragment,e),Z(H.$$.fragment,e),te=!0)},o(e){x(t.$$.fragment,e),x(a.$$.fragment,e),x(C.$$.fragment,e),x(p.$$.fragment,e),x(R.$$.fragment,e),x(H.$$.fragment,e),te=!1},d(e){e&&(f(l),f(c),f(y),f(h),f(M),f(v),f(Y),f(D),f($),f(S),f(o),f(s),f(B)),ee(t,e),ee(a,e),ee(C,e),ee(p,e),ne(T,e),ee(R,e),ne(k,e),ee(H,e)}}}function we(r,t,l){let a;ve(r,Ce,C=>l(0,a=C));let c=be(a);return[a,c]}class je extends de{constructor(t){super(),ge(this,t,we,Re,$e,{})}}export{je as component};
