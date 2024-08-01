import{s as ae,w as z,a as b,e as D,t as w,g as C,c as I,b as B,d as P,f as k,q as X,p as oe,i as J,h as p,j as Z,x as F,k as se,m as le}from"./scheduler.ytQcc2rf.js";import{S as re,i as pe,e as G,c as N,a as E,m as S,t as T,b as j,d as H}from"./index.D9yYtTfk.js";import{s as L}from"./data.Cdc7LZDb.js";/* empty css                                            */import{T as fe}from"./TextArea.CtGDg2p0.js";import{P as ue}from"./PrevNext.3Lif4jge.js";import{Y as x}from"./YesNo.BIU4jj3H.js";import{b as ce}from"./paths.Uk3fS9mv.js";function ee(t){let i,r=`<a href="${ce}/route_check/problems_map">Log this policy conflict</a>`;return{c(){i=D("p"),i.innerHTML=r},l(n){i=I(n,"P",{"data-svelte-h":!0}),le(i)!=="svelte-3awjdf"&&(i.innerHTML=r)},m(n,a){J(n,i,a)},d(n){n&&k(i)}}}function me(t){let i,r,n,a,d,g,$,y,o,f,u,M,Q,c,V,Y,q,m,A,v;i=new ue({props:{idx:t[0],total:6,urlPath:"route_check/policy_check/p"}});function te(e){t[3](e)}let K={inlineSmall:!0,label:"Existing"};t[2].policyCheck[t[0]-1].existing!==void 0&&(K.value=t[2].policyCheck[t[0]-1].existing),u=new x({props:K}),z.push(()=>G(u,"value",te));function ne(e){t[4](e)}let O={inlineSmall:!0,label:"Proposed"};t[2].policyCheck[t[0]-1].proposed!==void 0&&(O.value=t[2].policyCheck[t[0]-1].proposed),c=new x({props:O}),z.push(()=>G(c,"value",ne));let l=(t[2].policyCheck[t[0]-1].existing=="No"||t[2].policyCheck[t[0]-1].proposed=="No")&&ee();function ie(e){t[5](e)}let R={label:"Commentary"};return t[2].policyCheck[t[0]-1].commentary!==void 0&&(R.value=t[2].policyCheck[t[0]-1].commentary),m=new fe({props:R}),z.push(()=>G(m,"value",ie)),{c(){N(i.$$.fragment),r=b(),n=D("div"),a=D("h2"),d=w("P00"),g=w(t[0]),$=w(": "),y=w(t[1]),o=b(),f=D("div"),N(u.$$.fragment),Q=b(),N(c.$$.fragment),Y=b(),l&&l.c(),q=b(),N(m.$$.fragment),this.h()},l(e){E(i.$$.fragment,e),r=C(e),n=I(e,"DIV",{class:!0});var s=B(n);a=I(s,"H2",{});var _=B(a);d=P(_,"P00"),g=P(_,t[0]),$=P(_,": "),y=P(_,t[1]),_.forEach(k),o=C(s),f=I(s,"DIV",{style:!0});var h=B(f);E(u.$$.fragment,h),Q=C(h),E(c.$$.fragment,h),h.forEach(k),Y=C(s),l&&l.l(s),q=C(s),E(m.$$.fragment,s),s.forEach(k),this.h()},h(){X(f,"display","flex"),X(f,"justify-content","space-evenly"),oe(n,"class","govuk-width-container")},m(e,s){S(i,e,s),J(e,r,s),J(e,n,s),p(n,a),p(a,d),p(a,g),p(a,$),p(a,y),p(n,o),p(n,f),S(u,f,null),p(f,Q),S(c,f,null),p(n,Y),l&&l.m(n,null),p(n,q),S(m,n,null),v=!0},p(e,[s]){const _={};s&1&&(_.idx=e[0]),i.$set(_),(!v||s&1)&&Z(g,e[0]),(!v||s&2)&&Z(y,e[1]);const h={};!M&&s&5&&(M=!0,h.value=e[2].policyCheck[e[0]-1].existing,F(()=>M=!1)),u.$set(h);const U={};!V&&s&5&&(V=!0,U.value=e[2].policyCheck[e[0]-1].proposed,F(()=>V=!1)),c.$set(U),e[2].policyCheck[e[0]-1].existing=="No"||e[2].policyCheck[e[0]-1].proposed=="No"?l||(l=ee(),l.c(),l.m(n,q)):l&&(l.d(1),l=null);const W={};!A&&s&5&&(A=!0,W.value=e[2].policyCheck[e[0]-1].commentary,F(()=>A=!1)),m.$set(W)},i(e){v||(T(i.$$.fragment,e),T(u.$$.fragment,e),T(c.$$.fragment,e),T(m.$$.fragment,e),v=!0)},o(e){j(i.$$.fragment,e),j(u.$$.fragment,e),j(c.$$.fragment,e),j(m.$$.fragment,e),v=!1},d(e){e&&(k(r),k(n)),H(i,e),H(u),H(c),l&&l.d(),H(m)}}}function _e(t,i,r){let n;se(t,L,o=>r(2,n=o));let{idx:a}=i,{question:d}=i;function g(o){t.$$.not_equal(n.policyCheck[a-1].existing,o)&&(n.policyCheck[a-1].existing=o,L.set(n))}function $(o){t.$$.not_equal(n.policyCheck[a-1].proposed,o)&&(n.policyCheck[a-1].proposed=o,L.set(n))}function y(o){t.$$.not_equal(n.policyCheck[a-1].commentary,o)&&(n.policyCheck[a-1].commentary=o,L.set(n))}return t.$$set=o=>{"idx"in o&&r(0,a=o.idx),"question"in o&&r(1,d=o.question)},[a,d,n,g,$,y]}class Ce extends re{constructor(i){super(),pe(this,i,_e,me,ae,{idx:0,question:1})}}export{Ce as Q};
