import{s as v,a as E,e as p,g as T,c as A,b as C,f as u,r as m,i as c,C as _,x as F}from"./scheduler.DUXu1fc4.js";import{S,i as k,c as g,a as h,m as w,t as b,b as M,d}from"./index.Cw3Z3Eqf.js";import{F as q,E as R}from"./FormElement.BUZgaVT-.js";import{v as X}from"./v4.D8aEg3BZ.js";function j(n){let t,s,e,a,o,f;return t=new R({props:{errorMessage:n[3]}}),{c(){g(t.$$.fragment),s=E(),e=p("textarea"),this.h()},l(r){h(t.$$.fragment,r),s=T(r),e=A(r,"TEXTAREA",{class:!0,id:!0,rows:!0}),C(e).forEach(u),this.h()},h(){m(e,"class","govuk-textarea"),m(e,"id",n[4]),m(e,"rows",n[2])},m(r,i){w(t,r,i),c(r,s,i),c(r,e,i),_(e,n[0]),a=!0,o||(f=F(e,"input",n[5]),o=!0)},p(r,i){const l={};i&8&&(l.errorMessage=r[3]),t.$set(l),(!a||i&4)&&m(e,"rows",r[2]),i&1&&_(e,r[0])},i(r){a||(b(t.$$.fragment,r),a=!0)},o(r){M(t.$$.fragment,r),a=!1},d(r){r&&(u(s),u(e)),d(t,r),o=!1,f()}}}function z(n){let t,s;return t=new q({props:{label:n[1],id:n[4],$$slots:{default:[j]},$$scope:{ctx:n}}}),{c(){g(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){w(t,e,a),s=!0},p(e,[a]){const o={};a&2&&(o.label=e[1]),a&77&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){M(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function B(n,t,s){let{label:e}=t,{value:a}=t,{rows:o=5}=t,{errorMessage:f=""}=t,r=X();function i(){a=this.value,s(0,a)}return n.$$set=l=>{"label"in l&&s(1,e=l.label),"value"in l&&s(0,a=l.value),"rows"in l&&s(2,o=l.rows),"errorMessage"in l&&s(3,f=l.errorMessage)},[a,e,o,f,r,i]}class J extends S{constructor(t){super(),k(this,t,B,z,v,{label:1,value:0,rows:2,errorMessage:3})}}export{J as T};
