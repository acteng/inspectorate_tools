import{s as y,a as E,e as T,g as w,c as C,q as f,i as c,J as _,y as p,f as g,x as F,C as I}from"./scheduler.DGwhun8C.js";import{S,i as $,c as d,a as h,m as b,t as v,b as q,d as M}from"./index.B2vZYn3d.js";import{E as k}from"./ErrorMessage.BvpF5yI9.js";import{F as J}from"./FormElement.Cd26lsYY.js";import"./index.Dsvz2Vn2.js";import{v as N}from"./v4.D8aEg3BZ.js";function P(a){let t,n,e,i,s,o;return t=new k({props:{errorMessage:a[2]}}),{c(){d(t.$$.fragment),n=E(),e=T("input"),this.h()},l(r){h(t.$$.fragment,r),n=w(r),e=C(r,"INPUT",{type:!0,class:!0,id:!0}),this.h()},h(){f(e,"type","text"),f(e,"class","govuk-input"),f(e,"id",a[3])},m(r,l){b(t,r,l),c(r,n,l),c(r,e,l),_(e,a[0]),i=!0,s||(o=[p(e,"input",a[6]),p(e,"change",a[5])],s=!0)},p(r,l){const m={};l&4&&(m.errorMessage=r[2]),t.$set(m),l&1&&e.value!==r[0]&&_(e,r[0])},i(r){i||(v(t.$$.fragment,r),i=!0)},o(r){q(t.$$.fragment,r),i=!1},d(r){r&&(g(n),g(e)),M(t,r),s=!1,F(o)}}}function R(a){let t,n;return t=new J({props:{label:a[1],id:a[3],$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){d(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,i){b(t,e,i),n=!0},p(e,[i]){const s={};i&2&&(s.label=e[1]),i&133&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function U(a,t,n){let e,{label:i}=t,{value:s}=t,{required:o=!1}=t,r=N();function l(u){I.call(this,a,u)}function m(){s=this.value,n(0,s)}return a.$$set=u=>{"label"in u&&n(1,i=u.label),"value"in u&&n(0,s=u.value),"required"in u&&n(4,o=u.required)},a.$$.update=()=>{a.$$.dirty&17&&n(2,e=o&&(s==null||s=="")?"Required":"")},[s,i,e,r,o,l,m]}class H extends S{constructor(t){super(),$(this,t,U,R,y,{label:1,value:0,required:4})}}export{H as T};
