import{s as q,a as M,e as $,g as E,c as T,r as m,i as f,C as c,z as w,f as _}from"./scheduler.4RMNQxd3.js";import{S as y,i as C,c as p,a as g,m as d,t as h,b as v,d as b}from"./index.NlNtvd0Y.js";import{F,v as I,E as S}from"./FormElement.gzwtJumV.js";function k(n){let t,a,e,i,s,o;return t=new S({props:{errorMessage:n[2]}}),{c(){p(t.$$.fragment),a=M(),e=$("input"),this.h()},l(r){g(t.$$.fragment,r),a=E(r),e=T(r,"INPUT",{type:!0,class:!0,id:!0}),this.h()},h(){m(e,"type","text"),m(e,"class","govuk-input"),m(e,"id",n[3])},m(r,u){d(t,r,u),f(r,a,u),f(r,e,u),c(e,n[0]),i=!0,s||(o=w(e,"input",n[5]),s=!0)},p(r,u){const l={};u&4&&(l.errorMessage=r[2]),t.$set(l),u&1&&e.value!==r[0]&&c(e,r[0])},i(r){i||(h(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){r&&(_(a),_(e)),b(t,r),s=!1,o()}}}function z(n){let t,a;return t=new F({props:{label:n[1],id:n[3],$$slots:{default:[k]},$$scope:{ctx:n}}}),{c(){p(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,i){d(t,e,i),a=!0},p(e,[i]){const s={};i&2&&(s.label=e[1]),i&69&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function N(n,t,a){let e,{label:i}=t,{value:s}=t,{required:o=!1}=t,r=I();function u(){s=this.value,a(0,s)}return n.$$set=l=>{"label"in l&&a(1,i=l.label),"value"in l&&a(0,s=l.value),"required"in l&&a(4,o=l.required)},n.$$.update=()=>{n.$$.dirty&17&&a(2,e=o&&(s==null||s=="")?"Required":"")},[s,i,e,r,o,u]}class j extends y{constructor(t){super(),C(this,t,N,z,q,{label:1,value:0,required:4})}}export{j as T};
