import{s as re,e as N,c as E,b as K,f as u,p as ce,i as _,G as fe,k as pe,w as V,t as j,a as $,E as Z,d as A,g as C,q as x,h as q,x as Y,m as ue}from"../chunks/scheduler.ytQcc2rf.js";import{S as _e,i as me,t as b,f as he,b as w,e as G,c as R,a as z,m as F,d as J,g as de}from"../chunks/index.D9yYtTfk.js";import{e as ee}from"../chunks/each.2RvRdhFj.js";import{s as H}from"../chunks/data.DKL4GY0r.js";/* empty css                                                               */import{T as ye}from"../chunks/TextArea.BNsNWsw2.js";/* empty css                                                    */import{b as ge}from"../chunks/paths.Wf5TTMgR.js";import{Y as te}from"../chunks/YesNo.CSCM7fjy.js";function oe(e,i,a){const l=e.slice();return l[5]=i[a],l[6]=i,l[7]=a,l}function ie(e){let i,a=`<a href="${ge}/route_check/problems_map">Log this policy conflict</a>`;return{c(){i=N("p"),i.innerHTML=a},l(l){i=E(l,"P",{"data-svelte-h":!0}),ue(i)!=="svelte-1uf9yxf"&&(i.innerHTML=a)},m(l,n){_(l,i,n)},d(l){l&&u(i)}}}function ve(e){let i;return{c(){i=N("br")},l(a){i=E(a,"BR",{})},m(a,l){_(a,i,l)},d(a){a&&u(i)}}}function le(e){let i,a,l=e[7]+1+"",n,g,s=e[5]+"",c,o,r,m,L,B,h,M,P,k,d,S,D,I,T;function ne(t){e[2](t,e[7])}let O={label:"Existing"};e[0].policyCheck[e[7]].existing!==void 0&&(O.value=e[0].policyCheck[e[7]].existing),m=new te({props:O}),V.push(()=>G(m,"value",ne));function se(t){e[3](t,e[7])}let Q={label:"Proposed"};e[0].policyCheck[e[7]].proposed!==void 0&&(Q.value=e[0].policyCheck[e[7]].proposed),h=new te({props:Q}),V.push(()=>G(h,"value",se));let p=(e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No")&&ie();function ae(t){e[4](t,e[7])}let U={label:"Commentary"};e[0].policyCheck[e[7]].commentary!==void 0&&(U.value=e[0].policyCheck[e[7]].commentary),d=new ye({props:U}),V.push(()=>G(d,"value",ae));let y=e[7]!=e[1].length-1&&ve();return{c(){i=N("h2"),a=j("P00"),n=j(l),g=j(": "),c=j(s),o=$(),r=N("div"),R(m.$$.fragment),B=$(),R(h.$$.fragment),P=$(),p&&p.c(),k=$(),R(d.$$.fragment),D=$(),y&&y.c(),I=Z(),this.h()},l(t){i=E(t,"H2",{});var f=K(i);a=A(f,"P00"),n=A(f,l),g=A(f,": "),c=A(f,s),f.forEach(u),o=C(t),r=E(t,"DIV",{style:!0});var v=K(r);z(m.$$.fragment,v),B=C(v),z(h.$$.fragment,v),v.forEach(u),P=C(t),p&&p.l(t),k=C(t),z(d.$$.fragment,t),D=C(t),y&&y.l(t),I=Z(),this.h()},h(){x(r,"display","flex"),x(r,"justify-content","space-evenly")},m(t,f){_(t,i,f),q(i,a),q(i,n),q(i,g),q(i,c),_(t,o,f),_(t,r,f),F(m,r,null),q(r,B),F(h,r,null),_(t,P,f),p&&p.m(t,f),_(t,k,f),F(d,t,f),_(t,D,f),y&&y.m(t,f),_(t,I,f),T=!0},p(t,f){e=t;const v={};!L&&f&1&&(L=!0,v.value=e[0].policyCheck[e[7]].existing,Y(()=>L=!1)),m.$set(v);const W={};!M&&f&1&&(M=!0,W.value=e[0].policyCheck[e[7]].proposed,Y(()=>M=!1)),h.$set(W),e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No"?p||(p=ie(),p.c(),p.m(k.parentNode,k)):p&&(p.d(1),p=null);const X={};!S&&f&1&&(S=!0,X.value=e[0].policyCheck[e[7]].commentary,Y(()=>S=!1)),d.$set(X)},i(t){T||(b(m.$$.fragment,t),b(h.$$.fragment,t),b(d.$$.fragment,t),T=!0)},o(t){w(m.$$.fragment,t),w(h.$$.fragment,t),w(d.$$.fragment,t),T=!1},d(t){t&&(u(i),u(o),u(r),u(P),u(k),u(D),u(I)),J(m),J(h),p&&p.d(t),J(d,t),y&&y.d(t)}}}function ke(e){let i,a,l=ee(e[1]),n=[];for(let s=0;s<l.length;s+=1)n[s]=le(oe(e,l,s));const g=s=>w(n[s],1,1,()=>{n[s]=null});return{c(){i=N("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){i=E(s,"DIV",{class:!0});var c=K(i);for(let o=0;o<n.length;o+=1)n[o].l(c);c.forEach(u),this.h()},h(){ce(i,"class","govuk-width-container")},m(s,c){_(s,i,c);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(i,null);a=!0},p(s,[c]){if(c&3){l=ee(s[1]);let o;for(o=0;o<l.length;o+=1){const r=oe(s,l,o);n[o]?(n[o].p(r,c),b(n[o],1)):(n[o]=le(r),n[o].c(),b(n[o],1),n[o].m(i,null))}for(de(),o=l.length;o<n.length;o+=1)g(o);he()}},i(s){if(!a){for(let c=0;c<l.length;c+=1)b(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)w(n[c]);a=!1},d(s){s&&u(i),fe(n,s)}}}function be(e,i,a){let l;pe(e,H,o=>a(0,l=o));let n=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function g(o,r){e.$$.not_equal(l.policyCheck[r].existing,o)&&(l.policyCheck[r].existing=o,H.set(l))}function s(o,r){e.$$.not_equal(l.policyCheck[r].proposed,o)&&(l.policyCheck[r].proposed=o,H.set(l))}function c(o,r){e.$$.not_equal(l.policyCheck[r].commentary,o)&&(l.policyCheck[r].commentary=o,H.set(l))}return[l,n,g,s,c]}class Te extends _e{constructor(i){super(),me(this,i,be,ke,re,{})}}export{Te as component};
