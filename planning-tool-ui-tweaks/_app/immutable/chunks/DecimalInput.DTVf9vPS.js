import{s as S,a as q,e as D,g as F,c as I,q as f,i as d,J as g,y as h,f as v,x as y}from"./scheduler.DGwhun8C.js";import{S as C,i as J,c as p,a as b,m as w,t as N,b as k,d as P}from"./index.B2vZYn3d.js";import{E as T}from"./ErrorMessage.BvpF5yI9.js";import{F as U}from"./FormElement.Cd26lsYY.js";import"./index.DXxlIbZQ.js";import{v as j}from"./v4.D8aEg3BZ.js";function z(r){let n,a,e,i,u,l,o;return n=new T({props:{errorMessage:r[5](r[2])}}),{c(){p(n.$$.fragment),a=q(),e=D("input"),this.h()},l(t){b(n.$$.fragment,t),a=F(t),e=I(t,"INPUT",{type:!0,inputmode:!0,class:!0,id:!0}),this.h()},h(){f(e,"type","text"),f(e,"inputmode","numeric"),f(e,"class",i=`govuk-input govuk-input--width-${r[1]}`),f(e,"id",r[3])},m(t,m){w(n,t,m),d(t,a,m),d(t,e,m),g(e,r[2]),u=!0,l||(o=[h(e,"input",r[9]),h(e,"change",r[4])],l=!0)},p(t,m){const c={};m&4&&(c.errorMessage=t[5](t[2])),n.$set(c),(!u||m&2&&i!==(i=`govuk-input govuk-input--width-${t[1]}`))&&f(e,"class",i),m&4&&e.value!==t[2]&&g(e,t[2])},i(t){u||(N(n.$$.fragment,t),u=!0)},o(t){k(n.$$.fragment,t),u=!1},d(t){t&&(v(a),v(e)),P(n,t),l=!1,y(o)}}}function A(r){let n,a;return n=new U({props:{label:r[0],id:r[3],$$slots:{default:[z]},$$scope:{ctx:r}}}),{c(){p(n.$$.fragment)},l(e){b(n.$$.fragment,e)},m(e,i){w(n,e,i),a=!0},p(e,[i]){const u={};i&1&&(u.label=e[0]),i&1030&&(u.$$scope={dirty:i,ctx:e}),n.$set(u)},i(e){a||(N(n.$$.fragment,e),a=!0)},o(e){k(n.$$.fragment,e),a=!1},d(e){P(n,e)}}}function B(r,n,a){let{label:e}=n,{value:i}=n,{width:u}=n,{min:l=void 0}=n,{max:o=void 0}=n,t=i==null?void 0:i.toString(),m=j();function c(){a(6,i=t==null?void 0:Number(t))}function E(s){if(s==""||s==null)return"";let _=Number(s);return isNaN(_)?"Please enter a valid number":l!=null&&_<l?`Please enter a number that's at least ${l};`:o!=null&&_>o?`Please enter a number that's at most ${o};`:""}function M(){t=this.value,a(2,t)}return r.$$set=s=>{"label"in s&&a(0,e=s.label),"value"in s&&a(6,i=s.value),"width"in s&&a(1,u=s.width),"min"in s&&a(7,l=s.min),"max"in s&&a(8,o=s.max)},[e,u,t,m,c,E,i,l,o,M]}class R extends C{constructor(n){super(),J(this,n,B,A,S,{label:0,value:6,width:1,min:7,max:8})}}export{R as D};
