import{s as M,a as y,e as T,g as w,c as F,q as f,i as c,D as _,z as p,f as g,y as I,E as S}from"./scheduler.B5FfXhnD.js";import{S as $,i as k,c as d,a as h,m as b,t as v,b as q,d as E}from"./index.VeCIHQiF.js";import{v as z,E as C}from"./ErrorMessage.DVpXqM0G.js";import{F as D}from"./FormElement.iPte9iIl.js";import"./index.CjPs5mEV.js";function N(r){let t,n,e,l,s,o;return t=new C({props:{errorMessage:r[2]}}),{c(){d(t.$$.fragment),n=y(),e=T("input"),this.h()},l(a){h(t.$$.fragment,a),n=w(a),e=F(a,"INPUT",{type:!0,class:!0,id:!0}),this.h()},h(){f(e,"type","text"),f(e,"class","govuk-input"),f(e,"id",r[3])},m(a,i){b(t,a,i),c(a,n,i),c(a,e,i),_(e,r[0]),l=!0,s||(o=[p(e,"input",r[6]),p(e,"change",r[5])],s=!0)},p(a,i){const m={};i&4&&(m.errorMessage=a[2]),t.$set(m),i&1&&e.value!==a[0]&&_(e,a[0])},i(a){l||(v(t.$$.fragment,a),l=!0)},o(a){q(t.$$.fragment,a),l=!1},d(a){a&&(g(n),g(e)),E(t,a),s=!1,I(o)}}}function P(r){let t,n;return t=new D({props:{label:r[1],id:r[3],$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,l){b(t,e,l),n=!0},p(e,[l]){const s={};l&2&&(s.label=e[1]),l&133&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function R(r,t,n){let e,{label:l}=t,{value:s}=t,{required:o=!1}=t,a=z();function i(u){S.call(this,r,u)}function m(){s=this.value,n(0,s)}return r.$$set=u=>{"label"in u&&n(1,l=u.label),"value"in u&&n(0,s=u.value),"required"in u&&n(4,o=u.required)},r.$$.update=()=>{r.$$.dirty&17&&n(2,e=o&&(s==null||s=="")?"Required":"")},[s,l,e,a,o,i,m]}class H extends ${constructor(t){super(),k(this,t,R,P,M,{label:1,value:0,required:4})}}export{H as T};
