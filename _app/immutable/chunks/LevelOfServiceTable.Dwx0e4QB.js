import{s as oe,e as v,a as A,t as w,c as C,b as S,p as ee,g as H,d as M,f as _,r as j,i as ce,h as a,j as q,n as te,q as ie}from"./scheduler.Bsni_e59.js";import{e as le}from"./each.BmgwAlbi.js";import{S as he,i as ue}from"./index.CCfAUppz.js";import{s as U}from"./index.B9wZUY4b.js";import{n as fe}from"./data.Bx6I4yi5.js";let pe={walking:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],wheeling:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],cycling:[0,1,2,3,4,5,7,9,11,13,14,15,16,17,18,19,22,23,24,25,26,27,28],horse:[0,1,3,4,5,8,9,12,13,14,15,16,17,18,19,22,24,25,26,29]},de={walking:[0,1,2,3,5,6,8,11,14,15,16,17,18,19,21,22,24,25],wheeling:[0,1,2,3,4,5,6,8,11,14,15,16,17,18,19,21,22,24,25],cycling:[0,1,2,3,5,6,7,9,10,12,13,16,19,20,21,22,23,24,25]},ge={walking:[0,1,3,5,6,7,8,9,10,14,15],wheeling:[0,1,3,5,6,7,8,9,10,14,15],cycling:[0,1,2,4,7,8,11,12,13,15]};function be(e){let t=e.summary.checkType=="street",l=e.summary.checkType=="path",n=h("Safety",e.safetyCheck,null),s=[n];t?(s.push(h("Accessibility",e.streetCheck,[0,6])),s.push(h("Comfort",e.streetCheck,[7,9])),s.push(h("Directness",e.streetCheck,[10,15])),s.push(h("Attractiveness",e.streetCheck,[16,21])),s.push(h("Cohesion",e.streetCheck,[22,25]))):l&&(s.push(h("Accessibility",e.pathCheck,[0,4])),s.push(h("Comfort",e.pathCheck,[5,15])),s.push(h("Directness",e.pathCheck,[16,19])),s.push(h("Attractiveness",e.pathCheck,[20,24])),s.push(h("Cohesion",e.pathCheck,[25,29])));let c={category:"overall",existing:z(s.map(o=>o.existing)),proposed:z(s.map(o=>o.proposed))},r=[];t?(r.push(h("Social activity",e.streetPlacemakingCheck,[0,2])),r.push(h("Personal security",e.streetPlacemakingCheck,[3,5])),r.push(h("Character and legibility",e.streetPlacemakingCheck,[6,15])),r.push(h("Environment",e.streetPlacemakingCheck,[16,25]))):l&&r.push(h("Social activity",e.pathPlacemakingCheck,[0,2]),h("Personal security",e.pathPlacemakingCheck,[3,5]),h("Character and legibility",e.pathPlacemakingCheck,[6,9]),h("Environment",e.pathPlacemakingCheck,[10,18]));let k={category:"overall",existing:z(r.map(o=>o.existing)),proposed:z(r.map(o=>o.proposed))},m=[];return t?m=re(e.safetyCheck,e.streetCheck,de):l&&(m=re(e.safetyCheck,e.pathCheck,pe)),{safetyCheck:n,streetCheck:t?Z(n,h("",e.streetCheck,null)):null,streetPlacemaking:t?h("",e.streetPlacemakingCheck,null):null,pathCheck:l?Z(n,h("",e.pathCheck,null)):null,pathPlacemaking:l?h("",e.pathPlacemakingCheck,null):null,levelOfService:s,overall:c,placemakingCategories:r,placemakingOverall:k,byMode:m}}function h(e,t,l){return{category:e,existing:se(t.existingScores,e,l),proposed:se(t.proposedScores,e,l)}}function se(e,t,l){let n=l||[0,e.length-1],s=n[0],c=n[1]+1;return J(e.slice(s,c),t)}function J(e,t){let l=e.filter(k=>k!="N/A").length,n=t=="Safety"?3:1,s=l*2*n,c=n*U(e.map(fe)),r=c/s*100;return{numberMetrics:l,totalPossibleScore:s,score:c,scorePercent:r}}function z(e){let t=U(e.map(c=>c.numberMetrics)),l=U(e.map(c=>c.totalPossibleScore)),n=U(e.map(c=>c.score)),s=n/l*100;return{numberMetrics:t,totalPossibleScore:l,score:n,scorePercent:s}}function Z(e,t){return{category:"",existing:z([e.existing,t.existing]),proposed:z([e.proposed,t.proposed])}}function V(e){return`${Math.round(e.proposed.scorePercent-e.existing.scorePercent)}%`}function re(e,t,l){let n=[];for(let[s,c]of Object.entries(l)){let r=ge[s]||[],k={category:"Safety",existing:J(Q(e.existingScores,r),"Safety"),proposed:J(Q(e.proposedScores,r),"Safety")},m={category:"",existing:J(Q(t.existingScores,c),""),proposed:J(Q(t.proposedScores,c),"")},o=Z(k,m);o.category=s,n.push(o)}return n}function Q(e,t){return t.map(l=>e[l])}function ae(e,t,l){const n=e.slice();return n[3]=t[l],n}function ne(e){let t,l,n=e[3].category+"",s,c,r,k=Math.round(e[3].existing.scorePercent)+"",m,o,T,y,R=Math.round(e[3].proposed.scorePercent)+"",P,x,I,E,D=V(e[3])+"",b;return{c(){t=v("tr"),l=v("th"),s=w(n),c=A(),r=v("td"),m=w(k),o=w("%"),T=A(),y=v("td"),P=w(R),x=w("%"),I=A(),E=v("td"),b=w(D),this.h()},l(g){t=C(g,"TR",{});var f=S(t);l=C(f,"TH",{class:!0});var N=S(l);s=M(N,n),N.forEach(_),c=H(f),r=C(f,"TD",{class:!0});var B=S(r);m=M(B,k),o=M(B,"%"),B.forEach(_),T=H(f),y=C(f,"TD",{class:!0});var L=S(y);P=M(L,R),x=M(L,"%"),L.forEach(_),I=H(f),E=C(f,"TD",{class:!0});var O=S(E);b=M(O,D),O.forEach(_),f.forEach(_),this.h()},h(){j(l,"class","svelte-11aw7fk"),j(r,"class","svelte-11aw7fk"),j(y,"class","svelte-11aw7fk"),j(E,"class","svelte-11aw7fk")},m(g,f){ce(g,t,f),a(t,l),a(l,s),a(t,c),a(t,r),a(r,m),a(r,o),a(t,T),a(t,y),a(y,P),a(y,x),a(t,I),a(t,E),a(E,b)},p(g,f){f&1&&n!==(n=g[3].category+"")&&q(s,n),f&1&&k!==(k=Math.round(g[3].existing.scorePercent)+"")&&q(m,k),f&1&&R!==(R=Math.round(g[3].proposed.scorePercent)+"")&&q(P,R),f&1&&D!==(D=V(g[3])+"")&&q(b,D)},d(g){g&&_(t)}}}function ke(e){let t,l,n='<th class="svelte-11aw7fk">Categories</th> <th class="svelte-11aw7fk">Existing Layout</th> <th class="svelte-11aw7fk">Proposed Layout</th> <th class="svelte-11aw7fk">Net difference</th>',s,c,r,k='<th class="svelte-11aw7fk"> </th> <th class="svelte-11aw7fk"></th> <th class="svelte-11aw7fk"></th> <th class="svelte-11aw7fk"></th>',m,o,T,y,R,P,x=Math.round(e[1].existing.scorePercent)+"",I,E,D,b,g=Math.round(e[1].proposed.scorePercent)+"",f,N,B,L,O=V(e[1])+"",K,F=le(e[0]),p=[];for(let u=0;u<F.length;u+=1)p[u]=ne(ae(e,F,u));return{c(){t=v("table"),l=v("tr"),l.innerHTML=n,s=A();for(let u=0;u<p.length;u+=1)p[u].c();c=A(),r=v("tr"),r.innerHTML=k,m=A(),o=v("tr"),T=v("th"),y=w(e[2]),R=A(),P=v("td"),I=w(x),E=w("%"),D=A(),b=v("td"),f=w(g),N=w("%"),B=A(),L=v("td"),K=w(O),this.h()},l(u){t=C(u,"TABLE",{});var d=S(t);l=C(d,"TR",{"data-svelte-h":!0}),ee(l)!=="svelte-29rbbt"&&(l.innerHTML=n),s=H(d);for(let Y=0;Y<p.length;Y+=1)p[Y].l(d);c=H(d),r=C(d,"TR",{"data-svelte-h":!0}),ee(r)!=="svelte-fsb26u"&&(r.innerHTML=k),m=H(d),o=C(d,"TR",{});var i=S(o);T=C(i,"TH",{class:!0});var G=S(T);y=M(G,e[2]),G.forEach(_),R=H(i),P=C(i,"TD",{class:!0});var W=S(P);I=M(W,x),E=M(W,"%"),W.forEach(_),D=H(i),b=C(i,"TD",{class:!0});var X=S(b);f=M(X,g),N=M(X,"%"),X.forEach(_),B=H(i),L=C(i,"TD",{class:!0});var $=S(L);K=M($,O),$.forEach(_),i.forEach(_),d.forEach(_),this.h()},h(){j(T,"class","svelte-11aw7fk"),j(P,"class","svelte-11aw7fk"),j(b,"class","svelte-11aw7fk"),j(L,"class","svelte-11aw7fk")},m(u,d){ce(u,t,d),a(t,l),a(t,s);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(t,null);a(t,c),a(t,r),a(t,m),a(t,o),a(o,T),a(T,y),a(o,R),a(o,P),a(P,I),a(P,E),a(o,D),a(o,b),a(b,f),a(b,N),a(o,B),a(o,L),a(L,K)},p(u,[d]){if(d&1){F=le(u[0]);let i;for(i=0;i<F.length;i+=1){const G=ae(u,F,i);p[i]?p[i].p(G,d):(p[i]=ne(G),p[i].c(),p[i].m(t,c))}for(;i<p.length;i+=1)p[i].d(1);p.length=F.length}d&4&&q(y,u[2]),d&2&&x!==(x=Math.round(u[1].existing.scorePercent)+"")&&q(I,x),d&2&&g!==(g=Math.round(u[1].proposed.scorePercent)+"")&&q(f,g),d&2&&O!==(O=V(u[1])+"")&&q(K,O)},i:te,o:te,d(u){u&&_(t),ie(p,u)}}}function me(e,t,l){let{categories:n}=t,{overall:s}=t,{overallLabel:c}=t;return e.$$set=r=>{"categories"in r&&l(0,n=r.categories),"overall"in r&&l(1,s=r.overall),"overallLabel"in r&&l(2,c=r.overallLabel)},[n,s,c]}class we extends he{constructor(t){super(),ue(this,t,me,ke,oe,{categories:0,overall:1,overallLabel:2})}}export{we as L,be as g,V as n};
