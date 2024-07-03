import{s as oe,a as S,F as K,g as j,i as $,f as _,r as ne,k as ae,v as Y,e as L,t as w,c as O,b as Q,d as q,x as R,h as k,w as B}from"../chunks/scheduler.ScMV3vmV.js";import{S as se,i as ie,c as A,a as D,m as E,t as d,f as re,b as v,d as I,e as F,g as le}from"../chunks/index.DbrWxxqn.js";import{e as U}from"../chunks/each.DgxkLI6f.js";import{s as P}from"../chunks/data.U1cQKgZd.js";/* empty css                                                               */import{T as ce}from"../chunks/TextArea.DbkWbfhb.js";import"../chunks/ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import"../chunks/paths.dYYbCm7c.js";import{Y as W}from"../chunks/YesNo.Dz2TzK-Z.js";import{S as pe}from"../chunks/SectionModal.BkZv95RR.js";import{c as ue}from"../chunks/content.Denrdq2w.js";function X(o,r,c){const i=o.slice();return i[5]=r[c],i[6]=r,i[7]=c,i}function Z(o){let r,c,i=o[7]+1+"",u,p,s=o[5]+"",h,e,t,n,y,M,f,N,b,m,T,C;function x(a){o[2](a,o[7])}let H={label:"Existing"};o[0].policyCheck[o[7]].existing!==void 0&&(H.value=o[0].policyCheck[o[7]].existing),n=new W({props:H}),Y.push(()=>F(n,"value",x));function ee(a){o[3](a,o[7])}let V={label:"Proposed"};o[0].policyCheck[o[7]].proposed!==void 0&&(V.value=o[0].policyCheck[o[7]].proposed),f=new W({props:V}),Y.push(()=>F(f,"value",ee));function te(a){o[4](a,o[7])}let z={label:"Commentary"};return o[0].policyCheck[o[7]].commentary!==void 0&&(z.value=o[0].policyCheck[o[7]].commentary),m=new ce({props:z}),Y.push(()=>F(m,"value",te)),{c(){r=L("h2"),c=w("P00"),u=w(i),p=w(": "),h=w(s),e=S(),t=L("div"),A(n.$$.fragment),M=S(),A(f.$$.fragment),b=S(),A(m.$$.fragment),this.h()},l(a){r=O(a,"H2",{});var l=Q(r);c=q(l,"P00"),u=q(l,i),p=q(l,": "),h=q(l,s),l.forEach(_),e=j(a),t=O(a,"DIV",{style:!0});var g=Q(t);D(n.$$.fragment,g),M=j(g),D(f.$$.fragment,g),g.forEach(_),b=j(a),D(m.$$.fragment,a),this.h()},h(){R(t,"display","flex"),R(t,"justify-content","space-evenly")},m(a,l){$(a,r,l),k(r,c),k(r,u),k(r,p),k(r,h),$(a,e,l),$(a,t,l),E(n,t,null),k(t,M),E(f,t,null),$(a,b,l),E(m,a,l),C=!0},p(a,l){o=a;const g={};!y&&l&1&&(y=!0,g.value=o[0].policyCheck[o[7]].existing,B(()=>y=!1)),n.$set(g);const G={};!N&&l&1&&(N=!0,G.value=o[0].policyCheck[o[7]].proposed,B(()=>N=!1)),f.$set(G);const J={};!T&&l&1&&(T=!0,J.value=o[0].policyCheck[o[7]].commentary,B(()=>T=!1)),m.$set(J)},i(a){C||(d(n.$$.fragment,a),d(f.$$.fragment,a),d(m.$$.fragment,a),C=!0)},o(a){v(n.$$.fragment,a),v(f.$$.fragment,a),v(m.$$.fragment,a),C=!1},d(a){a&&(_(r),_(e),_(t),_(b)),I(n),I(f),I(m,a)}}}function fe(o){let r,c,i,u;r=new pe({props:{title:"Policy Check Manual",section:ue[3],link:"/route_check/manual"}});let p=U(o[1]),s=[];for(let e=0;e<p.length;e+=1)s[e]=Z(X(o,p,e));const h=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){A(r.$$.fragment),c=S();for(let e=0;e<s.length;e+=1)s[e].c();i=K()},l(e){D(r.$$.fragment,e),c=j(e);for(let t=0;t<s.length;t+=1)s[t].l(e);i=K()},m(e,t){E(r,e,t),$(e,c,t);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,t);$(e,i,t),u=!0},p(e,[t]){if(t&3){p=U(e[1]);let n;for(n=0;n<p.length;n+=1){const y=X(e,p,n);s[n]?(s[n].p(y,t),d(s[n],1)):(s[n]=Z(y),s[n].c(),d(s[n],1),s[n].m(i.parentNode,i))}for(le(),n=p.length;n<s.length;n+=1)h(n);re()}},i(e){if(!u){d(r.$$.fragment,e);for(let t=0;t<p.length;t+=1)d(s[t]);u=!0}},o(e){v(r.$$.fragment,e),s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)v(s[t]);u=!1},d(e){e&&(_(c),_(i)),I(r,e),ne(s,e)}}}function me(o,r,c){let i;ae(o,P,e=>c(0,i=e));let u=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function p(e,t){o.$$.not_equal(i.policyCheck[t].existing,e)&&(i.policyCheck[t].existing=e,P.set(i))}function s(e,t){o.$$.not_equal(i.policyCheck[t].proposed,e)&&(i.policyCheck[t].proposed=e,P.set(i))}function h(e,t){o.$$.not_equal(i.policyCheck[t].commentary,e)&&(i.policyCheck[t].commentary=e,P.set(i))}return[i,u,p,s,h]}class qe extends se{constructor(r){super(),ie(this,r,me,fe,oe,{})}}export{qe as component};
