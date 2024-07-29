import{s as oe,B as L,i as v,f as g,r as ne,k as ae,v as E,e as M,t as C,a as I,c as O,b as Q,d as q,g as B,x as R,h as y,w as N}from"../chunks/scheduler.BJ06nkRu.js";import{S as se,i as ie,t as d,f as re,b as $,e as S,c as T,a as Y,m as H,d as V,g as le}from"../chunks/index.Dmc4uC9p.js";import{e as U}from"../chunks/each.Bf3jp4ps.js";import{s as w}from"../chunks/data.D5kk3uCl.js";/* empty css                                                               */import{T as ce}from"../chunks/TextArea.dqrL6eGj.js";/* empty css                                                    */import"../chunks/paths.vtowsym7.js";import{Y as W}from"../chunks/YesNo.BkNLcDzo.js";function X(e,r,p){const s=e.slice();return s[5]=r[p],s[6]=r,s[7]=p,s}function Z(e){let r,p,s=e[7]+1+"",o,m,a=e[5]+"",i,t,l,u,P,j,f,A,k,_,D,b;function x(n){e[2](n,e[7])}let z={label:"Existing"};e[0].policyCheck[e[7]].existing!==void 0&&(z.value=e[0].policyCheck[e[7]].existing),u=new W({props:z}),E.push(()=>S(u,"value",x));function ee(n){e[3](n,e[7])}let F={label:"Proposed"};e[0].policyCheck[e[7]].proposed!==void 0&&(F.value=e[0].policyCheck[e[7]].proposed),f=new W({props:F}),E.push(()=>S(f,"value",ee));function te(n){e[4](n,e[7])}let G={label:"Commentary"};return e[0].policyCheck[e[7]].commentary!==void 0&&(G.value=e[0].policyCheck[e[7]].commentary),_=new ce({props:G}),E.push(()=>S(_,"value",te)),{c(){r=M("h2"),p=C("P00"),o=C(s),m=C(": "),i=C(a),t=I(),l=M("div"),T(u.$$.fragment),j=I(),T(f.$$.fragment),k=I(),T(_.$$.fragment),this.h()},l(n){r=O(n,"H2",{});var c=Q(r);p=q(c,"P00"),o=q(c,s),m=q(c,": "),i=q(c,a),c.forEach(g),t=B(n),l=O(n,"DIV",{style:!0});var h=Q(l);Y(u.$$.fragment,h),j=B(h),Y(f.$$.fragment,h),h.forEach(g),k=B(n),Y(_.$$.fragment,n),this.h()},h(){R(l,"display","flex"),R(l,"justify-content","space-evenly")},m(n,c){v(n,r,c),y(r,p),y(r,o),y(r,m),y(r,i),v(n,t,c),v(n,l,c),H(u,l,null),y(l,j),H(f,l,null),v(n,k,c),H(_,n,c),b=!0},p(n,c){e=n;const h={};!P&&c&1&&(P=!0,h.value=e[0].policyCheck[e[7]].existing,N(()=>P=!1)),u.$set(h);const J={};!A&&c&1&&(A=!0,J.value=e[0].policyCheck[e[7]].proposed,N(()=>A=!1)),f.$set(J);const K={};!D&&c&1&&(D=!0,K.value=e[0].policyCheck[e[7]].commentary,N(()=>D=!1)),_.$set(K)},i(n){b||(d(u.$$.fragment,n),d(f.$$.fragment,n),d(_.$$.fragment,n),b=!0)},o(n){$(u.$$.fragment,n),$(f.$$.fragment,n),$(_.$$.fragment,n),b=!1},d(n){n&&(g(r),g(t),g(l),g(k)),V(u),V(f),V(_,n)}}}function pe(e){let r,p,s=U(e[1]),o=[];for(let a=0;a<s.length;a+=1)o[a]=Z(X(e,s,a));const m=a=>$(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();r=L()},l(a){for(let i=0;i<o.length;i+=1)o[i].l(a);r=L()},m(a,i){for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(a,i);v(a,r,i),p=!0},p(a,[i]){if(i&3){s=U(a[1]);let t;for(t=0;t<s.length;t+=1){const l=X(a,s,t);o[t]?(o[t].p(l,i),d(o[t],1)):(o[t]=Z(l),o[t].c(),d(o[t],1),o[t].m(r.parentNode,r))}for(le(),t=s.length;t<o.length;t+=1)m(t);re()}},i(a){if(!p){for(let i=0;i<s.length;i+=1)d(o[i]);p=!0}},o(a){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)$(o[i]);p=!1},d(a){a&&g(r),ne(o,a)}}}function ue(e,r,p){let s;ae(e,w,t=>p(0,s=t));let o=["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"];function m(t,l){e.$$.not_equal(s.policyCheck[l].existing,t)&&(s.policyCheck[l].existing=t,w.set(s))}function a(t,l){e.$$.not_equal(s.policyCheck[l].proposed,t)&&(s.policyCheck[l].proposed=t,w.set(s))}function i(t,l){e.$$.not_equal(s.policyCheck[l].commentary,t)&&(s.policyCheck[l].commentary=t,w.set(s))}return[s,o,m,a,i]}class ke extends se{constructor(r){super(),ie(this,r,ue,pe,oe,{})}}export{ke as component};
