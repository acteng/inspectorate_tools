import{s as q,a as E,e as M,g as $,c as y,q as m,i as f,E as c,y as T,f as p}from"./scheduler.D5Jpr0Om.js";import{S as w,i as F,c as _,b as g,m as d,t as h,a as v,d as b}from"./index.B1PmXhrv.js";import{E as I}from"./ErrorMessage._1S-yeVT.js";import{F as S}from"./FormElement.Dfl2DJ6V.js";/* empty css                                            */import{v as k}from"./v4.D8aEg3BZ.js";function C(n){let t,a,e,i,s,o;return t=new I({props:{errorMessage:n[2]}}),{c(){_(t.$$.fragment),a=E(),e=M("input"),this.h()},l(r){g(t.$$.fragment,r),a=$(r),e=y(r,"INPUT",{type:!0,class:!0,id:!0}),this.h()},h(){m(e,"type","text"),m(e,"class","govuk-input"),m(e,"id",n[3])},m(r,u){d(t,r,u),f(r,a,u),f(r,e,u),c(e,n[0]),i=!0,s||(o=T(e,"input",n[5]),s=!0)},p(r,u){const l={};u&4&&(l.errorMessage=r[2]),t.$set(l),u&1&&e.value!==r[0]&&c(e,r[0])},i(r){i||(h(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){r&&(p(a),p(e)),b(t,r),s=!1,o()}}}function N(n){let t,a;return t=new S({props:{label:n[1],id:n[3],$$slots:{default:[C]},$$scope:{ctx:n}}}),{c(){_(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,i){d(t,e,i),a=!0},p(e,[i]){const s={};i&2&&(s.label=e[1]),i&69&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function P(n,t,a){let e,{label:i}=t,{value:s}=t,{required:o=!1}=t,r=k();function u(){s=this.value,a(0,s)}return n.$$set=l=>{"label"in l&&a(1,i=l.label),"value"in l&&a(0,s=l.value),"required"in l&&a(4,o=l.required)},n.$$.update=()=>{n.$$.dirty&17&&a(2,e=o&&(s==null||s=="")?"Required":"")},[s,i,e,r,o,u]}class D extends w{constructor(t){super(),F(this,t,P,N,q,{label:1,value:0,required:4})}}export{D as T};
