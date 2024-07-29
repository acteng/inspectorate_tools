import{s as re,e as w,c as P,b as K,f as u,p as ce,i as _,H as fe,k as pe,y as V,t as S,a as $,G as Z,d as T,g as C,q as x,h as q,z as Y,m as ue}from"../chunks/scheduler.Xtbo5Qzd.js";import{S as _e,i as me,t as b,f as he,b as N,e as z,c as G,a as R,m as F,d as J,g as de}from"../chunks/index.CcW9ATex.js";import{e as ee}from"../chunks/each.Dch8RhfM.js";import{s as j}from"../chunks/data.BdmQOnGA.js";/* empty css                                                    */import{T as ye}from"../chunks/TextArea.hXOFRqH5.js";import{b as ge}from"../chunks/paths.V6rKSUxT.js";import{Y as te}from"../chunks/YesNo.Q82i2kI6.js";function ie(e,o,a){const l=e.slice();return l[5]=o[a],l[6]=o,l[7]=a,l}function oe(e){let o,a=`<a href="${ge}/route_check/problems_map?kind=conflict&amp;code=${e[7]+1}">Log this policy conflict</a>`;return{c(){o=w("p"),o.innerHTML=a},l(l){o=P(l,"P",{"data-svelte-h":!0}),ue(o)!=="svelte-1s2n1ia"&&(o.innerHTML=a)},m(l,n){_(l,o,n)},d(l){l&&u(o)}}}function ve(e){let o;return{c(){o=w("br")},l(a){o=P(a,"BR",{})},m(a,l){_(a,o,l)},d(a){a&&u(o)}}}function le(e){let o,a,l=e[7]+1+"",n,g,s=e[5]+"",c,i,r,m,A,L,h,B,D,d,M,E,k,H,I;function ne(t){e[2](t,e[7])}let O={inlineSmall:!0,label:"Existing"};e[0].policyCheck[e[7]].existing!==void 0&&(O.value=e[0].policyCheck[e[7]].existing),m=new te({props:O}),V.push(()=>z(m,"value",ne));function se(t){e[3](t,e[7])}let Q={inlineSmall:!0,label:"Proposed"};e[0].policyCheck[e[7]].proposed!==void 0&&(Q.value=e[0].policyCheck[e[7]].proposed),h=new te({props:Q}),V.push(()=>z(h,"value",se));function ae(t){e[4](t,e[7])}let U={label:"Commentary"};e[0].policyCheck[e[7]].commentary!==void 0&&(U.value=e[0].policyCheck[e[7]].commentary),d=new ye({props:U}),V.push(()=>z(d,"value",ae));let p=(e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No")&&oe(e),y=e[7]!=e[1].length-1&&ve();return{c(){o=w("h2"),a=S("P00"),n=S(l),g=S(": "),c=S(s),i=$(),r=w("div"),G(m.$$.fragment),L=$(),G(h.$$.fragment),D=$(),G(d.$$.fragment),E=$(),p&&p.c(),k=$(),y&&y.c(),H=Z(),this.h()},l(t){o=P(t,"H2",{});var f=K(o);a=T(f,"P00"),n=T(f,l),g=T(f,": "),c=T(f,s),f.forEach(u),i=C(t),r=P(t,"DIV",{style:!0});var v=K(r);R(m.$$.fragment,v),L=C(v),R(h.$$.fragment,v),v.forEach(u),D=C(t),R(d.$$.fragment,t),E=C(t),p&&p.l(t),k=C(t),y&&y.l(t),H=Z(),this.h()},h(){x(r,"display","flex"),x(r,"justify-content","space-evenly")},m(t,f){_(t,o,f),q(o,a),q(o,n),q(o,g),q(o,c),_(t,i,f),_(t,r,f),F(m,r,null),q(r,L),F(h,r,null),_(t,D,f),F(d,t,f),_(t,E,f),p&&p.m(t,f),_(t,k,f),y&&y.m(t,f),_(t,H,f),I=!0},p(t,f){e=t;const v={};!A&&f&1&&(A=!0,v.value=e[0].policyCheck[e[7]].existing,Y(()=>A=!1)),m.$set(v);const W={};!B&&f&1&&(B=!0,W.value=e[0].policyCheck[e[7]].proposed,Y(()=>B=!1)),h.$set(W);const X={};!M&&f&1&&(M=!0,X.value=e[0].policyCheck[e[7]].commentary,Y(()=>M=!1)),d.$set(X),e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No"?p||(p=oe(e),p.c(),p.m(k.parentNode,k)):p&&(p.d(1),p=null)},i(t){I||(b(m.$$.fragment,t),b(h.$$.fragment,t),b(d.$$.fragment,t),I=!0)},o(t){N(m.$$.fragment,t),N(h.$$.fragment,t),N(d.$$.fragment,t),I=!1},d(t){t&&(u(o),u(i),u(r),u(D),u(E),u(k),u(H)),J(m),J(h),J(d,t),p&&p.d(t),y&&y.d(t)}}}function ke(e){let o,a,l=ee(e[1]),n=[];for(let s=0;s<l.length;s+=1)n[s]=le(ie(e,l,s));const g=s=>N(n[s],1,1,()=>{n[s]=null});return{c(){o=w("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){o=P(s,"DIV",{class:!0});var c=K(o);for(let i=0;i<n.length;i+=1)n[i].l(c);c.forEach(u),this.h()},h(){ce(o,"class","govuk-width-container")},m(s,c){_(s,o,c);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,null);a=!0},p(s,[c]){if(c&3){l=ee(s[1]);let i;for(i=0;i<l.length;i+=1){const r=ie(s,l,i);n[i]?(n[i].p(r,c),b(n[i],1)):(n[i]=le(r),n[i].c(),b(n[i],1),n[i].m(o,null))}for(de(),i=l.length;i<n.length;i+=1)g(i);he()}},i(s){if(!a){for(let c=0;c<l.length;c+=1)b(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)N(n[c]);a=!1},d(s){s&&u(o),fe(n,s)}}}function be(e,o,a){let l;pe(e,j,i=>a(0,l=i));let n=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function g(i,r){e.$$.not_equal(l.policyCheck[r].existing,i)&&(l.policyCheck[r].existing=i,j.set(l))}function s(i,r){e.$$.not_equal(l.policyCheck[r].proposed,i)&&(l.policyCheck[r].proposed=i,j.set(l))}function c(i,r){e.$$.not_equal(l.policyCheck[r].commentary,i)&&(l.policyCheck[r].commentary=i,j.set(l))}return[l,n,g,s,c]}class He extends _e{constructor(o){super(),me(this,o,be,ke,re,{})}}export{He as component};
