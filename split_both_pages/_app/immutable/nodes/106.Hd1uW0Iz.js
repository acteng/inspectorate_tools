import{s as j,e as g,a as D,c as m,b as k,m as A,g as q,f as d,p as T,i as E,h as c,n as I,G as H,k as M,t as C,d as x}from"../chunks/scheduler.BwufR8Ly.js";import{e as L}from"../chunks/each.CK1lPdNc.js";import{S as N,i as O}from"../chunks/index.BYv68wXE.js";import{s as z}from"../chunks/data.Bf3zjN59.js";import{b as B}from"../chunks/paths.DLv7L-Aw.js";function P(l,t,s){const e=l.slice();return e[2]=t[s],e[4]=s,e}function Q(l){let t,s="☒";return{c(){t=g("strong"),t.textContent=s,this.h()},l(e){t=m(e,"STRONG",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-1v6fn9x"&&(t.textContent=s),this.h()},h(){T(t,"class","govuk-tag govuk-tag--red tag-row")},m(e,h){E(e,t,h)},d(e){e&&d(t)}}}function V(l){let t,s="☑";return{c(){t=g("strong"),t.textContent=s,this.h()},l(e){t=m(e,"STRONG",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-1wxgh7q"&&(t.textContent=s),this.h()},h(){T(t,"class","govuk-tag govuk-tag--green tag-row")},m(e,h){E(e,t,h)},d(e){e&&d(t)}}}function $(l){let t,s,e,h,v=l[4]+1+"",f,o,a=l[2]+"",u,r,n,w;function R(i,p){return i[0].policyCheck[i[4]].existing!=""&&i[0].policyCheck[i[4]].proposed!=""?V:Q}let y=R(l),_=y(l);return{c(){t=g("tr"),s=g("td"),e=g("a"),h=C("P00"),f=C(v),o=C(". "),u=C(a),r=D(),n=g("td"),_.c(),w=D(),this.h()},l(i){t=m(i,"TR",{});var p=k(t);s=m(p,"TD",{});var S=k(s);e=m(S,"A",{href:!0});var b=k(e);h=x(b,"P00"),f=x(b,v),o=x(b,". "),u=x(b,a),b.forEach(d),S.forEach(d),r=q(p),n=m(p,"TD",{});var G=k(n);_.l(G),G.forEach(d),w=q(p),p.forEach(d),this.h()},h(){T(e,"href",B+"/route_check/policy_check/p0"+(l[4]+1))},m(i,p){E(i,t,p),c(t,s),c(s,e),c(e,h),c(e,f),c(e,o),c(e,u),c(t,r),c(t,n),_.m(n,null),c(t,w)},p(i,p){y!==(y=R(i))&&(_.d(1),_=y(i),_&&(_.c(),_.m(n,null)))},d(i){i&&d(t),_.d()}}}function F(l){let t,s,e,h="<th>Question</th> <th>Completed</th>",v,f=L(l[1]),o=[];for(let a=0;a<f.length;a+=1)o[a]=$(P(l,f,a));return{c(){t=g("div"),s=g("table"),e=g("tr"),e.innerHTML=h,v=D();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){t=m(a,"DIV",{class:!0});var u=k(t);s=m(u,"TABLE",{});var r=k(s);e=m(r,"TR",{"data-svelte-h":!0}),A(e)!=="svelte-rucm0z"&&(e.innerHTML=h),v=q(r);for(let n=0;n<o.length;n+=1)o[n].l(r);r.forEach(d),u.forEach(d),this.h()},h(){T(t,"class","govuk-width-container")},m(a,u){E(a,t,u),c(t,s),c(s,e),c(s,v);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(s,null)},p(a,[u]){if(u&3){f=L(a[1]);let r;for(r=0;r<f.length;r+=1){const n=P(a,f,r);o[r]?o[r].p(n,u):(o[r]=$(n),o[r].c(),o[r].m(s,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=f.length}},i:I,o:I,d(a){a&&d(t),H(o,a)}}}function J(l,t,s){let e;return M(l,z,v=>s(0,e=v)),[e,["Are cyclists separated from pedestrians?","Is the route free from barriers, such as chicane barriers, steps or dismount signs?","Does the route feel direct, logical and intuitive to understand for all road users?","Are surfaces suitable for all users?","Is appropriate lighting provided?","Does the route join together, or join other facilities together, as part of a holistic, connected network?"]]}class Z extends N{constructor(t){super(),O(this,t,J,F,j,{})}}export{Z as component};
