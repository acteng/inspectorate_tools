import{s as F,a as g,e as w,g as d,c as E,b as M,f as m,q as c,i as _,D as b,z as S,t as j,d as z,h as C,j as I}from"./scheduler.B5FfXhnD.js";import{S as N,i as R,c as p,a as k,m as T,t as A,b as q,d as D}from"./index.VeCIHQiF.js";import{v as V,E as X}from"./ErrorMessage.DVpXqM0G.js";import{F as B}from"./FormElement.iPte9iIl.js";import"./index.DmPom1Lc.js";function v(i){let e,r;return{c(){e=w("div"),r=j(i[2]),this.h()},l(t){e=E(t,"DIV",{class:!0});var s=M(e);r=z(s,i[2]),s.forEach(m),this.h()},h(){c(e,"class","govuk-hint")},m(t,s){_(t,e,s),C(e,r)},p(t,s){s&4&&I(r,t[2])},d(t){t&&m(e)}}}function G(i){let e,r,t,s,f,o,u;e=new X({props:{errorMessage:i[4]}});let l=i[2]&&v(i);return{c(){p(e.$$.fragment),r=g(),l&&l.c(),t=g(),s=w("textarea"),this.h()},l(a){k(e.$$.fragment,a),r=d(a),l&&l.l(a),t=d(a),s=E(a,"TEXTAREA",{class:!0,id:!0,rows:!0}),M(s).forEach(m),this.h()},h(){c(s,"class","govuk-textarea"),c(s,"id",i[5]),c(s,"rows",i[3])},m(a,n){T(e,a,n),_(a,r,n),l&&l.m(a,n),_(a,t,n),_(a,s,n),b(s,i[0]),f=!0,o||(u=S(s,"input",i[6]),o=!0)},p(a,n){const h={};n&16&&(h.errorMessage=a[4]),e.$set(h),a[2]?l?l.p(a,n):(l=v(a),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),(!f||n&8)&&c(s,"rows",a[3]),n&1&&b(s,a[0])},i(a){f||(A(e.$$.fragment,a),f=!0)},o(a){q(e.$$.fragment,a),f=!1},d(a){a&&(m(r),m(t),m(s)),D(e,a),l&&l.d(a),o=!1,u()}}}function H(i){let e,r;return e=new B({props:{label:i[1],id:i[5],$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,[s]){const f={};s&2&&(f.label=t[1]),s&157&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function J(i,e,r){let{label:t}=e,{hint:s=""}=e,{value:f}=e,{rows:o=5}=e,{errorMessage:u=""}=e,l=V();function a(){f=this.value,r(0,f)}return i.$$set=n=>{"label"in n&&r(1,t=n.label),"hint"in n&&r(2,s=n.hint),"value"in n&&r(0,f=n.value),"rows"in n&&r(3,o=n.rows),"errorMessage"in n&&r(4,u=n.errorMessage)},[f,t,s,o,u,l,a]}class U extends N{constructor(e){super(),R(this,e,J,H,F,{label:1,hint:2,value:0,rows:3,errorMessage:4})}}export{U as T};
