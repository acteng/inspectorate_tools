import{s as re,d as u,K as ce,i as _,p as pe,c as N,e as G,h as D,k as fe,r as O,v as V,b as $,w as Z,f as S,g as C,D as x,t as T,j as q,q as ue}from"../chunks/hklQk-fT.js";import{S as _e,i as me,t as w,a as b,f as he,e as Y,d as K,m as R,c as z,b as F,g as de}from"../chunks/4RGf_tlt.js";import{e as ee}from"../chunks/BrDnhTDH.js";import{b as ge}from"../chunks/BTimzf-K.js";import"../chunks/C02n2mos.js";import"../chunks/CcA_S8Rz.js";import{T as ye}from"../chunks/Bljc4yQc.js";import"../chunks/DK2Dq0AZ.js";import{Y as te}from"../chunks/woVKnun7.js";import{s as A}from"../chunks/BcQC0waz.js";function ie(e,o,a){const l=e.slice();return l[5]=o[a],l[6]=o,l[7]=a,l}function oe(e){let o,a=`<a href="${ge}/route_check/problems_map?kind=conflict&amp;code=${e[7]+1}">Log this policy conflict</a>`;return{c(){o=D("p"),o.innerHTML=a},l(l){o=N(l,"P",{"data-svelte-h":!0}),ue(o)!=="svelte-1s2n1ia"&&(o.innerHTML=a)},m(l,n){_(l,o,n)},d(l){l&&u(o)}}}function ve(e){let o;return{c(){o=D("br")},l(a){o=N(a,"BR",{})},m(a,l){_(a,o,l)},d(a){a&&u(o)}}}function le(e){let o,a,l=e[7]+1+"",n,y,s=e[5]+"",c,i,r,m,H,L,h,B,P,d,M,j,k,E,I;function ne(t){e[2](t,e[7])}let J={inlineSmall:!0,label:"Existing"};e[0].policyCheck[e[7]].existing!==void 0&&(J.value=e[0].policyCheck[e[7]].existing),m=new te({props:J}),O.push(()=>Y(m,"value",ne));function se(t){e[3](t,e[7])}let Q={inlineSmall:!0,label:"Proposed"};e[0].policyCheck[e[7]].proposed!==void 0&&(Q.value=e[0].policyCheck[e[7]].proposed),h=new te({props:Q}),O.push(()=>Y(h,"value",se));function ae(t){e[4](t,e[7])}let U={label:"Commentary"};e[0].policyCheck[e[7]].commentary!==void 0&&(U.value=e[0].policyCheck[e[7]].commentary),d=new ye({props:U}),O.push(()=>Y(d,"value",ae));let f=(e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No")&&oe(e),g=e[7]!=e[1].length-1&&ve();return{c(){o=D("h2"),a=T("PO0"),n=T(l),y=T(": "),c=T(s),i=q(),r=D("div"),F(m.$$.fragment),L=q(),F(h.$$.fragment),P=q(),F(d.$$.fragment),j=q(),f&&f.c(),k=q(),g&&g.c(),E=x(),this.h()},l(t){o=N(t,"H2",{});var p=G(o);a=S(p,"PO0"),n=S(p,l),y=S(p,": "),c=S(p,s),p.forEach(u),i=C(t),r=N(t,"DIV",{style:!0});var v=G(r);z(m.$$.fragment,v),L=C(v),z(h.$$.fragment,v),v.forEach(u),P=C(t),z(d.$$.fragment,t),j=C(t),f&&f.l(t),k=C(t),g&&g.l(t),E=x(),this.h()},h(){Z(r,"display","flex"),Z(r,"justify-content","space-evenly")},m(t,p){_(t,o,p),$(o,a),$(o,n),$(o,y),$(o,c),_(t,i,p),_(t,r,p),R(m,r,null),$(r,L),R(h,r,null),_(t,P,p),R(d,t,p),_(t,j,p),f&&f.m(t,p),_(t,k,p),g&&g.m(t,p),_(t,E,p),I=!0},p(t,p){e=t;const v={};!H&&p&1&&(H=!0,v.value=e[0].policyCheck[e[7]].existing,V(()=>H=!1)),m.$set(v);const W={};!B&&p&1&&(B=!0,W.value=e[0].policyCheck[e[7]].proposed,V(()=>B=!1)),h.$set(W);const X={};!M&&p&1&&(M=!0,X.value=e[0].policyCheck[e[7]].commentary,V(()=>M=!1)),d.$set(X),e[0].policyCheck[e[7]].existing=="No"||e[0].policyCheck[e[7]].proposed=="No"?f||(f=oe(e),f.c(),f.m(k.parentNode,k)):f&&(f.d(1),f=null)},i(t){I||(b(m.$$.fragment,t),b(h.$$.fragment,t),b(d.$$.fragment,t),I=!0)},o(t){w(m.$$.fragment,t),w(h.$$.fragment,t),w(d.$$.fragment,t),I=!1},d(t){t&&(u(o),u(i),u(r),u(P),u(j),u(k),u(E)),K(m),K(h),K(d,t),f&&f.d(t),g&&g.d(t)}}}function ke(e){let o,a,l=ee(e[1]),n=[];for(let s=0;s<l.length;s+=1)n[s]=le(ie(e,l,s));const y=s=>w(n[s],1,1,()=>{n[s]=null});return{c(){o=D("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){o=N(s,"DIV",{class:!0});var c=G(o);for(let i=0;i<n.length;i+=1)n[i].l(c);c.forEach(u),this.h()},h(){pe(o,"class","govuk-width-container")},m(s,c){_(s,o,c);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,null);a=!0},p(s,[c]){if(c&3){l=ee(s[1]);let i;for(i=0;i<l.length;i+=1){const r=ie(s,l,i);n[i]?(n[i].p(r,c),b(n[i],1)):(n[i]=le(r),n[i].c(),b(n[i],1),n[i].m(o,null))}for(de(),i=l.length;i<n.length;i+=1)y(i);he()}},i(s){if(!a){for(let c=0;c<l.length;c+=1)b(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)w(n[c]);a=!1},d(s){s&&u(o),ce(n,s)}}}function be(e,o,a){let l;fe(e,A,i=>a(0,l=i));let n=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function y(i,r){e.$$.not_equal(l.policyCheck[r].existing,i)&&(l.policyCheck[r].existing=i,A.set(l))}function s(i,r){e.$$.not_equal(l.policyCheck[r].proposed,i)&&(l.policyCheck[r].proposed=i,A.set(l))}function c(i,r){e.$$.not_equal(l.policyCheck[r].commentary,i)&&(l.policyCheck[r].commentary=i,A.set(l))}return[l,n,y,s,c]}class Se extends _e{constructor(o){super(),me(this,o,be,ke,re,{})}}export{Se as component};
