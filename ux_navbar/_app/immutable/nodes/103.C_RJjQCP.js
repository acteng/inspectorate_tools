import{s as re,e as N,c as D,b as J,f as u,q as ce,i as _,K as pe,k as fe,r as V,t as T,a as $,D as Z,d as j,g as C,v as x,h as q,w as Y,p as ue}from"../chunks/scheduler.4ZNDCSWA.js";import{S as _e,i as me,t as b,f as he,b as w,e as K,c as R,a as z,m as F,d as G,g as de}from"../chunks/index.xRKM1n3P.js";import{e as ee}from"../chunks/each.DpHudclE.js";import{s as A}from"../chunks/data.3KynBJ5Z.js";import"../chunks/index.D1-k90NP.js";import{T as ge}from"../chunks/TextArea.Z7dvs8Ul.js";import"../chunks/index.DRsjoaF5.js";import{b as ye}from"../chunks/paths.BGvwqIoR.js";import"../chunks/entry.uGH1W8kQ.js";import{Y as te}from"../chunks/YesNo.6tFvwQgc.js";function ie(e,o,a){const l=e.slice();return l[5]=o[a],l[6]=o,l[7]=a,l}function oe(e){let o,a=`<a href="${ye}/route_check/problems_map?kind=conflict&amp;code=${e[7]+1}">Log this policy conflict</a>`;return{c(){o=N("p"),o.innerHTML=a},l(l){o=D(l,"P",{"data-svelte-h":!0}),ue(o)!=="svelte-1s2n1ia"&&(o.innerHTML=a)},m(l,n){_(l,o,n)},d(l){l&&u(o)}}}function ve(e){let o;return{c(){o=N("br")},l(a){o=D(a,"BR",{})},m(a,l){_(a,o,l)},d(a){a&&u(o)}}}function le(e){let o,a,l=e[7]+1+"",n,y,s=e[5]+"",c,i,r,m,H,L,h,B,P,d,M,E,k,I,S;function ne(t){e[2](t,e[7])}let O={inlineSmall:!0,label:"Existing"};e[0].policyCheck[e[7]].existing!==void 0&&(O.value=e[0].policyCheck[e[7]].existing),m=new te({props:O}),V.push(()=>K(m,"value",ne));function se(t){e[3](t,e[7])}let Q={inlineSmall:!0,label:"Proposed"};e[0].policyCheck[e[7]].proposed!==void 0&&(Q.value=e[0].policyCheck[e[7]].proposed),h=new te({props:Q}),V.push(()=>K(h,"value",se));function ae(t){e[4](t,e[7])}let U={label:"Commentary"};e[0].policyCheck[e[7]].commentary!==void 0&&(U.value=e[0].policyCheck[e[7]].commentary),d=new ge({props:U}),V.push(()=>K(d,"value",ae));let f=(e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No")&&oe(e),g=e[7]!=e[1].length-1&&ve();return{c(){o=N("h2"),a=T("P00"),n=T(l),y=T(": "),c=T(s),i=$(),r=N("div"),R(m.$$.fragment),L=$(),R(h.$$.fragment),P=$(),R(d.$$.fragment),E=$(),f&&f.c(),k=$(),g&&g.c(),I=Z(),this.h()},l(t){o=D(t,"H2",{});var p=J(o);a=j(p,"P00"),n=j(p,l),y=j(p,": "),c=j(p,s),p.forEach(u),i=C(t),r=D(t,"DIV",{style:!0});var v=J(r);z(m.$$.fragment,v),L=C(v),z(h.$$.fragment,v),v.forEach(u),P=C(t),z(d.$$.fragment,t),E=C(t),f&&f.l(t),k=C(t),g&&g.l(t),I=Z(),this.h()},h(){x(r,"display","flex"),x(r,"justify-content","space-evenly")},m(t,p){_(t,o,p),q(o,a),q(o,n),q(o,y),q(o,c),_(t,i,p),_(t,r,p),F(m,r,null),q(r,L),F(h,r,null),_(t,P,p),F(d,t,p),_(t,E,p),f&&f.m(t,p),_(t,k,p),g&&g.m(t,p),_(t,I,p),S=!0},p(t,p){e=t;const v={};!H&&p&1&&(H=!0,v.value=e[0].policyCheck[e[7]].existing,Y(()=>H=!1)),m.$set(v);const W={};!B&&p&1&&(B=!0,W.value=e[0].policyCheck[e[7]].proposed,Y(()=>B=!1)),h.$set(W);const X={};!M&&p&1&&(M=!0,X.value=e[0].policyCheck[e[7]].commentary,Y(()=>M=!1)),d.$set(X),e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No"?f||(f=oe(e),f.c(),f.m(k.parentNode,k)):f&&(f.d(1),f=null)},i(t){S||(b(m.$$.fragment,t),b(h.$$.fragment,t),b(d.$$.fragment,t),S=!0)},o(t){w(m.$$.fragment,t),w(h.$$.fragment,t),w(d.$$.fragment,t),S=!1},d(t){t&&(u(o),u(i),u(r),u(P),u(E),u(k),u(I)),G(m),G(h),G(d,t),f&&f.d(t),g&&g.d(t)}}}function ke(e){let o,a,l=ee(e[1]),n=[];for(let s=0;s<l.length;s+=1)n[s]=le(ie(e,l,s));const y=s=>w(n[s],1,1,()=>{n[s]=null});return{c(){o=N("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){o=D(s,"DIV",{class:!0});var c=J(o);for(let i=0;i<n.length;i+=1)n[i].l(c);c.forEach(u),this.h()},h(){ce(o,"class","govuk-width-container")},m(s,c){_(s,o,c);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,null);a=!0},p(s,[c]){if(c&3){l=ee(s[1]);let i;for(i=0;i<l.length;i+=1){const r=ie(s,l,i);n[i]?(n[i].p(r,c),b(n[i],1)):(n[i]=le(r),n[i].c(),b(n[i],1),n[i].m(o,null))}for(de(),i=l.length;i<n.length;i+=1)y(i);he()}},i(s){if(!a){for(let c=0;c<l.length;c+=1)b(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)w(n[c]);a=!1},d(s){s&&u(o),pe(n,s)}}}function be(e,o,a){let l;fe(e,A,i=>a(0,l=i));let n=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function y(i,r){e.$$.not_equal(l.policyCheck[r].existing,i)&&(l.policyCheck[r].existing=i,A.set(l))}function s(i,r){e.$$.not_equal(l.policyCheck[r].proposed,i)&&(l.policyCheck[r].proposed=i,A.set(l))}function c(i,r){e.$$.not_equal(l.policyCheck[r].commentary,i)&&(l.policyCheck[r].commentary=i,A.set(l))}return[l,n,y,s,c]}class Te extends _e{constructor(o){super(),me(this,o,be,ke,re,{})}}export{Te as component};
