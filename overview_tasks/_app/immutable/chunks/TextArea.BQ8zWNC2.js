import{s as S,a as g,e as w,g as d,c as E,b as M,f as m,q as c,i as _,J as b,y as j,t as C,d as D,h as I,j as J}from"./scheduler.4ZNDCSWA.js";import{S as N,i as R,c as p,a as k,m as T,t as A,b as q,d as F}from"./index.xRKM1n3P.js";import{E as V}from"./ErrorMessage.CIuq1mvT.js";import{F as X}from"./FormElement.DnliNpKu.js";import"./index.CzzrjmvO.js";import{v as z}from"./v4.D8aEg3BZ.js";function v(l){let e,r;return{c(){e=w("div"),r=C(l[2]),this.h()},l(t){e=E(t,"DIV",{class:!0});var s=M(e);r=D(s,l[2]),s.forEach(m),this.h()},h(){c(e,"class","govuk-hint")},m(t,s){_(t,e,s),I(e,r)},p(t,s){s&4&&J(r,t[2])},d(t){t&&m(e)}}}function B(l){let e,r,t,s,f,o,u;e=new V({props:{errorMessage:l[4]}});let i=l[2]&&v(l);return{c(){p(e.$$.fragment),r=g(),i&&i.c(),t=g(),s=w("textarea"),this.h()},l(a){k(e.$$.fragment,a),r=d(a),i&&i.l(a),t=d(a),s=E(a,"TEXTAREA",{class:!0,id:!0,rows:!0}),M(s).forEach(m),this.h()},h(){c(s,"class","govuk-textarea"),c(s,"id",l[5]),c(s,"rows",l[3])},m(a,n){T(e,a,n),_(a,r,n),i&&i.m(a,n),_(a,t,n),_(a,s,n),b(s,l[0]),f=!0,o||(u=j(s,"input",l[6]),o=!0)},p(a,n){const h={};n&16&&(h.errorMessage=a[4]),e.$set(h),a[2]?i?i.p(a,n):(i=v(a),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),(!f||n&8)&&c(s,"rows",a[3]),n&1&&b(s,a[0])},i(a){f||(A(e.$$.fragment,a),f=!0)},o(a){q(e.$$.fragment,a),f=!1},d(a){a&&(m(r),m(t),m(s)),F(e,a),i&&i.d(a),o=!1,u()}}}function G(l){let e,r;return e=new X({props:{label:l[1],id:l[5],$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){p(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,[s]){const f={};s&2&&(f.label=t[1]),s&157&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function H(l,e,r){let{label:t}=e,{hint:s=""}=e,{value:f}=e,{rows:o=5}=e,{errorMessage:u=""}=e,i=z();function a(){f=this.value,r(0,f)}return l.$$set=n=>{"label"in n&&r(1,t=n.label),"hint"in n&&r(2,s=n.hint),"value"in n&&r(0,f=n.value),"rows"in n&&r(3,o=n.rows),"errorMessage"in n&&r(4,u=n.errorMessage)},[f,t,s,o,u,i,a]}class W extends N{constructor(e){super(),R(this,e,H,G,S,{label:1,hint:2,value:0,rows:3,errorMessage:4})}}export{W as T};
