import{s as S,d,x as D,p as f,J as g,i as h,y as p,g as F,c as I,j,h as q}from"./hklQk-fT.js";import{S as y,i as C,d as v,t as b,a as w,m as N,c as k,b as P}from"./4RGf_tlt.js";import{E as J}from"./Cbq5WR3j.js";import{F as T}from"./pCwRaQzy.js";import"./CcA_S8Rz.js";import{v as U}from"./CtRu48qb.js";function z(r){let n,a,e,i,u,l,o;return n=new J({props:{errorMessage:r[5](r[2])}}),{c(){P(n.$$.fragment),a=j(),e=q("input"),this.h()},l(t){k(n.$$.fragment,t),a=F(t),e=I(t,"INPUT",{type:!0,inputmode:!0,class:!0,id:!0}),this.h()},h(){f(e,"type","text"),f(e,"inputmode","numeric"),f(e,"class",i=`govuk-input govuk-input--width-${r[1]}`),f(e,"id",r[3])},m(t,m){N(n,t,m),h(t,a,m),h(t,e,m),g(e,r[2]),u=!0,l||(o=[p(e,"input",r[9]),p(e,"change",r[4])],l=!0)},p(t,m){const c={};m&4&&(c.errorMessage=t[5](t[2])),n.$set(c),(!u||m&2&&i!==(i=`govuk-input govuk-input--width-${t[1]}`))&&f(e,"class",i),m&4&&e.value!==t[2]&&g(e,t[2])},i(t){u||(w(n.$$.fragment,t),u=!0)},o(t){b(n.$$.fragment,t),u=!1},d(t){t&&(d(a),d(e)),v(n,t),l=!1,D(o)}}}function A(r){let n,a;return n=new T({props:{label:r[0],id:r[3],$$slots:{default:[z]},$$scope:{ctx:r}}}),{c(){P(n.$$.fragment)},l(e){k(n.$$.fragment,e)},m(e,i){N(n,e,i),a=!0},p(e,[i]){const u={};i&1&&(u.label=e[0]),i&1030&&(u.$$scope={dirty:i,ctx:e}),n.$set(u)},i(e){a||(w(n.$$.fragment,e),a=!0)},o(e){b(n.$$.fragment,e),a=!1},d(e){v(n,e)}}}function B(r,n,a){let{label:e}=n,{value:i}=n,{width:u}=n,{min:l=void 0}=n,{max:o=void 0}=n,t=i==null?void 0:i.toString(),m=U();function c(){a(6,i=t==null?void 0:Number(t))}function E(s){if(s==""||s==null)return"";let _=Number(s);return isNaN(_)?"Please enter a valid number":l!=null&&_<l?`Please enter a number that's at least ${l};`:o!=null&&_>o?`Please enter a number that's at most ${o};`:""}function M(){t=this.value,a(2,t)}return r.$$set=s=>{"label"in s&&a(0,e=s.label),"value"in s&&a(6,i=s.value),"width"in s&&a(1,u=s.width),"min"in s&&a(7,l=s.min),"max"in s&&a(8,o=s.max)},[e,u,t,m,c,E,i,l,o,M]}class R extends y{constructor(n){super(),C(this,n,B,A,S,{label:0,value:6,width:1,min:7,max:8})}}export{R as D};
