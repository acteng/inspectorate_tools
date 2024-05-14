import{s as lt,e as _,t as m,a as C,c as u,b as E,d as T,f as v,g as R,p as y,r as rt,i as at,h as e,j as O,n as x,q as ot}from"./scheduler.D9GWg6B3.js";import{e as $}from"./each.CZpcv8jA.js";import{S as nt,i as st}from"./index.4wA-8znj.js";import{n as Q}from"./results.C9gNxuBm.js";function tt(o,t,n){const f=o.slice();return f[4]=t[n],f}function et(o){let t,n,f=o[4].category+"",L,g,b,i=Math.round(o[4].existing.scorePercent)+"",S,D,w,H,h=Math.round(o[4].proposed.scorePercent)+"",k,j,I,p,M=Q(o[4])+"",q;return{c(){t=_("tr"),n=_("th"),L=m(f),g=C(),b=_("td"),S=m(i),D=m("%"),w=C(),H=_("td"),k=m(h),j=m("%"),I=C(),p=_("td"),q=m(M)},l(d){t=u(d,"TR",{});var s=E(t);n=u(s,"TH",{});var A=E(n);L=T(A,f),A.forEach(v),g=R(s),b=u(s,"TD",{});var N=E(b);S=T(N,i),D=T(N,"%"),N.forEach(v),w=R(s),H=u(s,"TD",{});var B=E(H);k=T(B,h),j=T(B,"%"),B.forEach(v),I=R(s),p=u(s,"TD",{});var z=E(p);q=T(z,M),z.forEach(v),s.forEach(v)},m(d,s){at(d,t,s),e(t,n),e(n,L),e(t,g),e(t,b),e(b,S),e(b,D),e(t,w),e(t,H),e(H,k),e(H,j),e(t,I),e(t,p),e(p,q)},p(d,s){s&2&&f!==(f=d[4].category+"")&&O(L,f),s&2&&i!==(i=Math.round(d[4].existing.scorePercent)+"")&&O(S,i),s&2&&h!==(h=Math.round(d[4].proposed.scorePercent)+"")&&O(k,h),s&2&&M!==(M=Q(d[4])+"")&&O(q,M)},d(d){d&&v(t)}}}function it(o){let t,n,f,L,g,b="<th>Categories</th> <th>Existing Layout</th> <th>Proposed Layout</th> <th>Net difference</th>",i,S,D,w="<th> </th> <th></th> <th></th> <th></th>",H,h,k,j,I,p,M=Math.round(o[2].existing.scorePercent)+"",q,d,s,A,N=Math.round(o[2].proposed.scorePercent)+"",B,z,U,G,J=Q(o[2])+"",K,F=$(o[1]),c=[];for(let a=0;a<F.length;a+=1)c[a]=et(tt(o,F,a));return{c(){t=_("table"),n=_("caption"),f=m(o[0]),L=C(),g=_("tr"),g.innerHTML=b,i=C();for(let a=0;a<c.length;a+=1)c[a].c();S=C(),D=_("tr"),D.innerHTML=w,H=C(),h=_("tr"),k=_("th"),j=m(o[3]),I=C(),p=_("td"),q=m(M),d=m("%"),s=C(),A=_("td"),B=m(N),z=m("%"),U=C(),G=_("td"),K=m(J),this.h()},l(a){t=u(a,"TABLE",{});var l=E(t);n=u(l,"CAPTION",{class:!0});var r=E(n);f=T(r,o[0]),r.forEach(v),L=R(l),g=u(l,"TR",{"data-svelte-h":!0}),y(g)!=="svelte-29rbbt"&&(g.innerHTML=b),i=R(l);for(let X=0;X<c.length;X+=1)c[X].l(l);S=R(l),D=u(l,"TR",{"data-svelte-h":!0}),y(D)!=="svelte-fsb26u"&&(D.innerHTML=w),H=R(l),h=u(l,"TR",{});var P=E(h);k=u(P,"TH",{});var Y=E(k);j=T(Y,o[3]),Y.forEach(v),I=R(P),p=u(P,"TD",{});var V=E(p);q=T(V,M),d=T(V,"%"),V.forEach(v),s=R(P),A=u(P,"TD",{});var W=E(A);B=T(W,N),z=T(W,"%"),W.forEach(v),U=R(P),G=u(P,"TD",{});var Z=E(G);K=T(Z,J),Z.forEach(v),P.forEach(v),l.forEach(v),this.h()},h(){rt(n,"class","govuk-table__caption govuk-table__caption--m")},m(a,l){at(a,t,l),e(t,n),e(n,f),e(t,L),e(t,g),e(t,i);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(t,null);e(t,S),e(t,D),e(t,H),e(t,h),e(h,k),e(k,j),e(h,I),e(h,p),e(p,q),e(p,d),e(h,s),e(h,A),e(A,B),e(A,z),e(h,U),e(h,G),e(G,K)},p(a,[l]){if(l&1&&O(f,a[0]),l&2){F=$(a[1]);let r;for(r=0;r<F.length;r+=1){const P=tt(a,F,r);c[r]?c[r].p(P,l):(c[r]=et(P),c[r].c(),c[r].m(t,S))}for(;r<c.length;r+=1)c[r].d(1);c.length=F.length}l&8&&O(j,a[3]),l&4&&M!==(M=Math.round(a[2].existing.scorePercent)+"")&&O(q,M),l&4&&N!==(N=Math.round(a[2].proposed.scorePercent)+"")&&O(B,N),l&4&&J!==(J=Q(a[2])+"")&&O(K,J)},i:x,o:x,d(a){a&&v(t),ot(c,a)}}}function ht(o,t,n){let{caption:f}=t,{categories:L}=t,{overall:g}=t,{overallLabel:b}=t;return o.$$set=i=>{"caption"in i&&n(0,f=i.caption),"categories"in i&&n(1,L=i.categories),"overall"in i&&n(2,g=i.overall),"overallLabel"in i&&n(3,b=i.overallLabel)},[f,L,g,b]}class ut extends nt{constructor(t){super(),st(this,t,ht,it,lt,{caption:0,categories:1,overall:2,overallLabel:3})}}export{ut as L};
