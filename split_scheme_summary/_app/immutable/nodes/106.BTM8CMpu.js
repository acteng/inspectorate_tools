import{s as re,e as N,c as D,b as K,f as u,q as ce,i as _,F as fe,k as pe,r as V,t as T,a as $,D as Z,d as j,g as C,v as x,h as q,w as Y,p as ue}from"../chunks/scheduler.D5Jpr0Om.js";import{S as _e,i as me,t as b,f as he,a as w,e as F,c as R,b as z,m as G,d as J,g as de}from"../chunks/index.B1PmXhrv.js";import{e as ee}from"../chunks/each.C-QbYfAe.js";import{s as A}from"../chunks/data.DS-m0ZFz.js";/* empty css                                                    */import{T as ye}from"../chunks/TextArea.CACah8gX.js";import{b as ge}from"../chunks/paths.TEfkLnht.js";import{Y as te}from"../chunks/YesNo.C2ZYsz6r.js";function ie(e,o,a){const l=e.slice();return l[5]=o[a],l[6]=o,l[7]=a,l}function oe(e){let o,a=`<a href="${ge}/route_check/problems_map">Log this policy conflict</a>`;return{c(){o=N("p"),o.innerHTML=a},l(l){o=D(l,"P",{"data-svelte-h":!0}),ue(o)!=="svelte-1uf9yxf"&&(o.innerHTML=a)},m(l,n){_(l,o,n)},d(l){l&&u(o)}}}function ve(e){let o;return{c(){o=N("br")},l(a){o=D(a,"BR",{})},m(a,l){_(a,o,l)},d(a){a&&u(o)}}}function le(e){let o,a,l=e[7]+1+"",n,g,s=e[5]+"",c,i,r,m,H,L,h,B,P,k,d,M,E,I,S;function ne(t){e[2](t,e[7])}let O={inlineSmall:!0,label:"Existing"};e[0].policyCheck[e[7]].existing!==void 0&&(O.value=e[0].policyCheck[e[7]].existing),m=new te({props:O}),V.push(()=>F(m,"value",ne));function se(t){e[3](t,e[7])}let Q={inlineSmall:!0,label:"Proposed"};e[0].policyCheck[e[7]].proposed!==void 0&&(Q.value=e[0].policyCheck[e[7]].proposed),h=new te({props:Q}),V.push(()=>F(h,"value",se));let p=(e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No")&&oe();function ae(t){e[4](t,e[7])}let U={label:"Commentary"};e[0].policyCheck[e[7]].commentary!==void 0&&(U.value=e[0].policyCheck[e[7]].commentary),d=new ye({props:U}),V.push(()=>F(d,"value",ae));let y=e[7]!=e[1].length-1&&ve();return{c(){o=N("h2"),a=T("P00"),n=T(l),g=T(": "),c=T(s),i=$(),r=N("div"),R(m.$$.fragment),L=$(),R(h.$$.fragment),P=$(),p&&p.c(),k=$(),R(d.$$.fragment),E=$(),y&&y.c(),I=Z(),this.h()},l(t){o=D(t,"H2",{});var f=K(o);a=j(f,"P00"),n=j(f,l),g=j(f,": "),c=j(f,s),f.forEach(u),i=C(t),r=D(t,"DIV",{style:!0});var v=K(r);z(m.$$.fragment,v),L=C(v),z(h.$$.fragment,v),v.forEach(u),P=C(t),p&&p.l(t),k=C(t),z(d.$$.fragment,t),E=C(t),y&&y.l(t),I=Z(),this.h()},h(){x(r,"display","flex"),x(r,"justify-content","space-evenly")},m(t,f){_(t,o,f),q(o,a),q(o,n),q(o,g),q(o,c),_(t,i,f),_(t,r,f),G(m,r,null),q(r,L),G(h,r,null),_(t,P,f),p&&p.m(t,f),_(t,k,f),G(d,t,f),_(t,E,f),y&&y.m(t,f),_(t,I,f),S=!0},p(t,f){e=t;const v={};!H&&f&1&&(H=!0,v.value=e[0].policyCheck[e[7]].existing,Y(()=>H=!1)),m.$set(v);const W={};!B&&f&1&&(B=!0,W.value=e[0].policyCheck[e[7]].proposed,Y(()=>B=!1)),h.$set(W),e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No"?p||(p=oe(),p.c(),p.m(k.parentNode,k)):p&&(p.d(1),p=null);const X={};!M&&f&1&&(M=!0,X.value=e[0].policyCheck[e[7]].commentary,Y(()=>M=!1)),d.$set(X)},i(t){S||(b(m.$$.fragment,t),b(h.$$.fragment,t),b(d.$$.fragment,t),S=!0)},o(t){w(m.$$.fragment,t),w(h.$$.fragment,t),w(d.$$.fragment,t),S=!1},d(t){t&&(u(o),u(i),u(r),u(P),u(k),u(E),u(I)),J(m),J(h),p&&p.d(t),J(d,t),y&&y.d(t)}}}function ke(e){let o,a,l=ee(e[1]),n=[];for(let s=0;s<l.length;s+=1)n[s]=le(ie(e,l,s));const g=s=>w(n[s],1,1,()=>{n[s]=null});return{c(){o=N("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){o=D(s,"DIV",{class:!0});var c=K(o);for(let i=0;i<n.length;i+=1)n[i].l(c);c.forEach(u),this.h()},h(){ce(o,"class","govuk-width-container")},m(s,c){_(s,o,c);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,null);a=!0},p(s,[c]){if(c&3){l=ee(s[1]);let i;for(i=0;i<l.length;i+=1){const r=ie(s,l,i);n[i]?(n[i].p(r,c),b(n[i],1)):(n[i]=le(r),n[i].c(),b(n[i],1),n[i].m(o,null))}for(de(),i=l.length;i<n.length;i+=1)g(i);he()}},i(s){if(!a){for(let c=0;c<l.length;c+=1)b(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)w(n[c]);a=!1},d(s){s&&u(o),fe(n,s)}}}function be(e,o,a){let l;pe(e,A,i=>a(0,l=i));let n=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function g(i,r){e.$$.not_equal(l.policyCheck[r].existing,i)&&(l.policyCheck[r].existing=i,A.set(l))}function s(i,r){e.$$.not_equal(l.policyCheck[r].proposed,i)&&(l.policyCheck[r].proposed=i,A.set(l))}function c(i,r){e.$$.not_equal(l.policyCheck[r].commentary,i)&&(l.policyCheck[r].commentary=i,A.set(l))}return[l,n,g,s,c]}class Ie extends _e{constructor(o){super(),me(this,o,be,ke,re,{})}}export{Ie as component};
