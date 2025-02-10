import{s as $t,e as p,a as m,t as Y,c as v,b as E,g as h,p as st,d as O,f as _,q as gt,i as lt,h as l,j as K,K as ot,k as Ct,D as rt}from"../chunks/scheduler.4ZNDCSWA.js";import{S as bt,i as kt,c as Q,a as U,m as W,t as Z,b as x,d as tt}from"../chunks/index.xRKM1n3P.js";import{e as nt}from"../chunks/each.DpHudclE.js";import{s as Tt}from"../chunks/data.iHzHSVFv.js";import{g as Et}from"../chunks/results.CPlV89HP.js";import{S as Dt,P as It,a as wt,C as Rt}from"../chunks/SafetyCheckResults.CWmx0KxX.js";import{O as yt}from"../chunks/Overview.8G3Ydp3g.js";import{g as it,a as ft}from"../chunks/lists.Bn2sGx3F.js";import{p as ct,c as mt}from"../chunks/da_log.BKw-Y61u.js";import{C as Lt}from"../chunks/ConvertToXlsx.DH-udk2h.js";function ht(o,t,e){const a=o.slice();return a[2]=t[e],a[4]=e,a}function _t(o,t,e){const a=o.slice();return a[5]=t[e],a[4]=e,a}function ut(o){let t,e,a=o[4]+1+"",c,N,u,D=ct(o[0],o[4])+"",k,q,I,g=it(o[5].conflict)+"",w,H,R,d=o[5].locationName+"",P,T,$,y=o[5].notes+"",S,M;return{c(){t=p("tr"),e=p("th"),c=Y(a),N=m(),u=p("td"),k=Y(D),q=m(),I=p("td"),w=Y(g),H=m(),R=p("td"),P=Y(d),T=m(),$=p("td"),S=Y(y),M=m()},l(i){t=v(i,"TR",{});var r=E(t);e=v(r,"TH",{});var L=E(e);c=O(L,a),L.forEach(_),N=h(r),u=v(r,"TD",{});var F=E(u);k=O(F,D),F.forEach(_),q=h(r),I=v(r,"TD",{});var V=E(I);w=O(V,g),V.forEach(_),H=h(r),R=v(r,"TD",{});var B=E(R);P=O(B,d),B.forEach(_),T=h(r),$=v(r,"TD",{});var j=E($);S=O(j,y),j.forEach(_),M=h(r),r.forEach(_)},m(i,r){lt(i,t,r),l(t,e),l(e,c),l(t,N),l(t,u),l(u,k),l(t,q),l(t,I),l(I,w),l(t,H),l(t,R),l(R,P),l(t,T),l(t,$),l($,S),l(t,M)},p(i,r){r&1&&D!==(D=ct(i[0],i[4])+"")&&K(k,D),r&1&&g!==(g=it(i[5].conflict)+"")&&K(w,g),r&1&&d!==(d=i[5].locationName+"")&&K(P,d),r&1&&y!==(y=i[5].notes+"")&&K(S,y)},d(i){i&&_(t)}}}function dt(o){let t,e=o[5].resolved!="Yes"&&ut(o);return{c(){e&&e.c(),t=rt()},l(a){e&&e.l(a),t=rt()},m(a,c){e&&e.m(a,c),lt(a,t,c)},p(a,c){a[5].resolved!="Yes"?e?e.p(a,c):(e=ut(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(a){a&&_(t),e&&e.d(a)}}}function pt(o){let t,e,a=o[4]+1+"",c,N,u,D=mt(o[0],o[4])+"",k,q,I,g=ft(o[2].criticalIssue)+"",w,H,R,d=o[2].locationName+"",P,T,$,y=o[2].notes+"",S,M;return{c(){t=p("tr"),e=p("th"),c=Y(a),N=m(),u=p("td"),k=Y(D),q=m(),I=p("td"),w=Y(g),H=m(),R=p("td"),P=Y(d),T=m(),$=p("td"),S=Y(y),M=m()},l(i){t=v(i,"TR",{});var r=E(t);e=v(r,"TH",{});var L=E(e);c=O(L,a),L.forEach(_),N=h(r),u=v(r,"TD",{});var F=E(u);k=O(F,D),F.forEach(_),q=h(r),I=v(r,"TD",{});var V=E(I);w=O(V,g),V.forEach(_),H=h(r),R=v(r,"TD",{});var B=E(R);P=O(B,d),B.forEach(_),T=h(r),$=v(r,"TD",{});var j=E($);S=O(j,y),j.forEach(_),M=h(r),r.forEach(_)},m(i,r){lt(i,t,r),l(t,e),l(e,c),l(t,N),l(t,u),l(u,k),l(t,q),l(t,I),l(I,w),l(t,H),l(t,R),l(R,P),l(t,T),l(t,$),l($,S),l(t,M)},p(i,r){r&1&&D!==(D=mt(i[0],i[4])+"")&&K(k,D),r&1&&g!==(g=ft(i[2].criticalIssue)+"")&&K(w,g),r&1&&d!==(d=i[2].locationName+"")&&K(P,d),r&1&&y!==(y=i[2].notes+"")&&K(S,y)},d(i){i&&_(t)}}}function vt(o){let t,e=o[2].resolved!="Yes"&&pt(o);return{c(){e&&e.c(),t=rt()},l(a){e&&e.l(a),t=rt()},m(a,c){e&&e.m(a,c),lt(a,t,c)},p(a,c){a[2].resolved!="Yes"?e?e.p(a,c):(e=pt(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(a){a&&_(t),e&&e.d(a)}}}function Nt(o){let t,e,a,c,N,u,D,k,q="Review statement",I,g,w=o[0].resultsReviewStatement+"",H,R,d,P,T,$,y="<th>Remaining Policy Conflicts</th> <th>Policy Conflict ID</th> <th>Policy Conflict</th> <th>Location Name</th> <th>Commentary &amp; Feedback</th>",S,M,i,r,L,F,V="<th>Remaining Critical Issues</th> <th>Critical ID</th> <th>Critical Issue</th> <th>Location Name</th> <th>Commentary &amp; Feedback</th>",B,j,X,et;e=new Lt({}),c=new Dt({}),u=new yt({props:{results:o[1]}}),d=new It({});let G=nt(o[0].policyConflictLog),C=[];for(let n=0;n<G.length;n+=1)C[n]=dt(_t(o,G,n));i=new wt({});let J=nt(o[0].criticalIssues),b=[];for(let n=0;n<J.length;n+=1)b[n]=vt(ht(o,J,n));return X=new Rt({props:{results:o[1]}}),{c(){t=p("div"),Q(e.$$.fragment),a=m(),Q(c.$$.fragment),N=m(),Q(u.$$.fragment),D=m(),k=p("h2"),k.textContent=q,I=m(),g=p("p"),H=Y(w),R=m(),Q(d.$$.fragment),P=m(),T=p("table"),$=p("tr"),$.innerHTML=y,S=m();for(let n=0;n<C.length;n+=1)C[n].c();M=m(),Q(i.$$.fragment),r=m(),L=p("table"),F=p("tr"),F.innerHTML=V,B=m();for(let n=0;n<b.length;n+=1)b[n].c();j=m(),Q(X.$$.fragment),this.h()},l(n){t=v(n,"DIV",{class:!0});var f=E(t);U(e.$$.fragment,f),a=h(f),U(c.$$.fragment,f),N=h(f),U(u.$$.fragment,f),D=h(f),k=v(f,"H2",{"data-svelte-h":!0}),st(k)!=="svelte-1pa6fpf"&&(k.textContent=q),I=h(f),g=v(f,"P",{});var s=E(g);H=O(s,w),s.forEach(_),R=h(f),U(d.$$.fragment,f),P=h(f),T=v(f,"TABLE",{});var A=E(T);$=v(A,"TR",{"data-svelte-h":!0}),st($)!=="svelte-118246t"&&($.innerHTML=y),S=h(A);for(let z=0;z<C.length;z+=1)C[z].l(A);A.forEach(_),M=h(f),U(i.$$.fragment,f),r=h(f),L=v(f,"TABLE",{});var at=E(L);F=v(at,"TR",{"data-svelte-h":!0}),st(F)!=="svelte-1tni5he"&&(F.innerHTML=V),B=h(at);for(let z=0;z<b.length;z+=1)b[z].l(at);at.forEach(_),j=h(f),U(X.$$.fragment,f),f.forEach(_),this.h()},h(){gt(t,"class","govuk-width-container")},m(n,f){lt(n,t,f),W(e,t,null),l(t,a),W(c,t,null),l(t,N),W(u,t,null),l(t,D),l(t,k),l(t,I),l(t,g),l(g,H),l(t,R),W(d,t,null),l(t,P),l(t,T),l(T,$),l(T,S);for(let s=0;s<C.length;s+=1)C[s]&&C[s].m(T,null);l(t,M),W(i,t,null),l(t,r),l(t,L),l(L,F),l(L,B);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(L,null);l(t,j),W(X,t,null),et=!0},p(n,[f]){if((!et||f&1)&&w!==(w=n[0].resultsReviewStatement+"")&&K(H,w),f&1){G=nt(n[0].policyConflictLog);let s;for(s=0;s<G.length;s+=1){const A=_t(n,G,s);C[s]?C[s].p(A,f):(C[s]=dt(A),C[s].c(),C[s].m(T,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=G.length}if(f&1){J=nt(n[0].criticalIssues);let s;for(s=0;s<J.length;s+=1){const A=ht(n,J,s);b[s]?b[s].p(A,f):(b[s]=vt(A),b[s].c(),b[s].m(L,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=J.length}},i(n){et||(Z(e.$$.fragment,n),Z(c.$$.fragment,n),Z(u.$$.fragment,n),Z(d.$$.fragment,n),Z(i.$$.fragment,n),Z(X.$$.fragment,n),et=!0)},o(n){x(e.$$.fragment,n),x(c.$$.fragment,n),x(u.$$.fragment,n),x(d.$$.fragment,n),x(i.$$.fragment,n),x(X.$$.fragment,n),et=!1},d(n){n&&_(t),tt(e),tt(c),tt(u),tt(d),ot(C,n),tt(i),ot(b,n),tt(X)}}}function Pt(o,t,e){let a;Ct(o,Tt,N=>e(0,a=N));let c=Et(a);return[a,c]}class Kt extends bt{constructor(t){super(),kt(this,t,Pt,Nt,$t,{})}}export{Kt as component};
