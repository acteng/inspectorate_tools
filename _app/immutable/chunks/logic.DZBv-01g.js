import{s as T,a as E,e as N,c as W,b as D,o as c,i as h,z as p,A as g,d as y,H as M}from"./scheduler.8Pqdtq9W.js";import{S as I,i as O,c as _,a as b,m as v,t as k,b as B,d as L}from"./index.KrNxZzBh.js";import{F as C,E as U}from"./FormElement.C7qRsTEQ.js";import{v as q}from"./v4.D8aEg3BZ.js";function z(i){let e,t,r,a,s,u,o;return e=new U({props:{errorMessage:i[5](i[2])}}),{c(){_(e.$$.fragment),t=E(),r=N("input"),this.h()},l(n){b(e.$$.fragment,n),t=W(n),r=D(n,"INPUT",{type:!0,inputmode:!0,class:!0,id:!0}),this.h()},h(){c(r,"type","text"),c(r,"inputmode","numeric"),c(r,"class",a=`govuk-input govuk-input--width-${i[1]}`),c(r,"id",i[3])},m(n,f){v(e,n,f),h(n,t,f),h(n,r,f),p(r,i[2]),s=!0,u||(o=[g(r,"input",i[9]),g(r,"change",i[4])],u=!0)},p(n,f){const d={};f&4&&(d.errorMessage=n[5](n[2])),e.$set(d),(!s||f&2&&a!==(a=`govuk-input govuk-input--width-${n[1]}`))&&c(r,"class",a),f&4&&r.value!==n[2]&&p(r,n[2])},i(n){s||(k(e.$$.fragment,n),s=!0)},o(n){B(e.$$.fragment,n),s=!1},d(n){n&&(y(t),y(r)),L(e,n),u=!1,M(o)}}}function A(i){let e,t;return e=new C({props:{label:i[0],id:i[3],$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(r){b(e.$$.fragment,r)},m(r,a){v(e,r,a),t=!0},p(r,[a]){const s={};a&1&&(s.label=r[0]),a&1030&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function H(i,e,t){let{label:r}=e,{value:a}=e,{width:s}=e,{min:u=void 0}=e,{max:o=void 0}=e,n=a==null?void 0:a.toString(),f=q();function d(){t(6,a=n==null?void 0:parseInt(n,10))}function S(l){if(l==""||l==null)return"";if(l.includes("."))return"Please enter a number without decimals";let w=Number(l);return isNaN(w)?"Please enter a valid number":u!=null&&w<u?`Please enter a number that's at least ${u};`:o!=null&&w>o?`Please enter a number that's at most ${o};`:""}function P(){n=this.value,t(2,n)}return i.$$set=l=>{"label"in l&&t(0,r=l.label),"value"in l&&t(6,a=l.value),"width"in l&&t(1,s=l.width),"min"in l&&t(7,u=l.min),"max"in l&&t(8,o=l.max)},[r,s,n,f,d,S,a,u,o,P]}class R extends I{constructor(e){super(),O(this,e,H,A,T,{label:0,value:6,width:1,min:7,max:8})}}function j(i,e,t,r){switch(i){case"Footway":return[2.6,2];case"Narrow Traffic / Bus Lane":return[3.25,3.25];case"Wide Traffic / Bus Lane":return[4.5,3.9];case"Traffic Lane (no buses): speed limit 20/30":return[3,2.75];case"On-highway advisory/mandatory cycle lane":return[2,1.5];case"1-way protected cycle track":if(!e.flowOneWay)throw new Error("missing input");return{"<200":[2.3,1.8],"200-800":[2.5,2.3],">800":[2.8,2.3]}[e.flowOneWay];case"2-way protected cycle track":if(!e.flowTwoWay)throw new Error("missing input");return{"<300":[3.3,2.3],"300-1,000":[3.3,2.8],">1,000":[4.3,3.3]}[e.flowTwoWay];case"Shared use cycle track":if(!e.flowSharedUse)throw new Error("missing input");return{"<300":[3,3],">300":[4.5,4.5]}[e.flowSharedUse];case"Parking Bay":return[2,1.8];case"Disabled Parking Bay":return[2.7,2.7];case"Loading Bay":return[2.7,1.8];case"Buffer / Verge":{if(!e.speedLimit)throw new Error("missing input");let a=[.5,.5],s=[1.5,1.5],u=0;if(t&&(u+=m[t]),r&&(u+=m[r]),u<=1||u==4||u==10)return a;let o=e.speedLimit=="<30"||e.speedLimit=="30"||e.speedLimit=="40";return t=="Footway"&&r&&m[r]==2||r=="Footway"&&t&&m[t]==2?o?a:s:{"<30":[.5,0],30:[.5,0],40:[1,.5],50:[2,1.5],60:[2.5,2],70:[3.5,3]}[e.speedLimit]}}}let m={Footway:0,"1-way protected cycle track":0,"2-way protected cycle track":0,"Shared use cycle track":0,"Buffer / Verge":1,"Narrow Traffic / Bus Lane":2,"Wide Traffic / Bus Lane":2,"Traffic Lane (no buses): speed limit 20/30":2,"On-highway advisory/mandatory cycle lane":2,"Parking Bay":10,"Disabled Parking Bay":10,"Loading Bay":10};function V(i,e,t){if(m[i]!=0)return"";let r=e&&(m[e]==2||m[e]==10),a=t&&(m[t]==2||m[t]==10);return r&&a?"both":r?"left":a?"right":""}function X(i,e){if(!i||!e)return null;let t=i=="<30"?20:parseInt(i);return e>t*1.1?t+10:t}function Y(i,e){let t=0,r=e=="Desirable"?i.proposed.desirableMinimumCrossSection:i.proposed.absoluteMinimumCrossSection;for(let a=0;a<r.length;a++){let s=r[a];if(!s)continue;let u=a==0?"":r[a-1],o=a==r.length-1?"":r[a+1],n=j(s,i.proposed.trafficData,u,o)[e=="Desirable"?0:1];t+=n}return t}export{R as N,X as a,Y as c,j as g,V as n};
