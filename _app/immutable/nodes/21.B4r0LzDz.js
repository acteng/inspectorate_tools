import{s as x,a as P,e as O,c as W,b as I,o as Y,i as v,z as Ce,A as Be,d as g,H as Ke,r as U,f as H,K as Z,j as E,v as A,k as se,a4 as Ye,t as N,w as Q,h as R,y as X,g as de,x as Je,n as fe}from"../chunks/scheduler.8Pqdtq9W.js";import{S as ee,i as te,c as T,a as L,m as F,t as k,b as D,d as S,e as j,g as ne,f as le}from"../chunks/index.KrNxZzBh.js";import{e as re,u as Qe,o as Xe,B as Ze}from"../chunks/Geocoder.svelte_svelte_type_style_lang.CI-sE9Bk.js";import{p as G}from"../chunks/index.B_uESu4H.js";import{S as ue}from"../chunks/SecondaryButton.CctJSiA9.js";import{S as K}from"../chunks/Select.B6nFQD22.js";import{W as xe}from"../chunks/WarningButton.Cyr2mll2.js";import{W as me}from"../chunks/WarningText.DNDO-dlG.js";import{s as V,a as et}from"../chunks/data.BCuT2WwA.js";import{C as ce}from"../chunks/CollapsibleCard.COCSlxIK.js";import{F as tt,E as rt}from"../chunks/FormElement.C7qRsTEQ.js";import{v as it}from"../chunks/v4.D8aEg3BZ.js";import"../chunks/paths.C5Jm3klG.js";function at(i){let e,r,t,a,n,s,l;return e=new rt({props:{errorMessage:i[5](i[2])}}),{c(){T(e.$$.fragment),r=P(),t=O("input"),this.h()},l(f){L(e.$$.fragment,f),r=W(f),t=I(f,"INPUT",{type:!0,inputmode:!0,class:!0,id:!0}),this.h()},h(){Y(t,"type","text"),Y(t,"inputmode","numeric"),Y(t,"class",a=`govuk-input govuk-input--width-${i[1]}`),Y(t,"id",i[3])},m(f,m){F(e,f,m),v(f,r,m),v(f,t,m),Ce(t,i[2]),n=!0,s||(l=[Be(t,"input",i[9]),Be(t,"change",i[4])],s=!0)},p(f,m){const b={};m&4&&(b.errorMessage=f[5](f[2])),e.$set(b),(!n||m&2&&a!==(a=`govuk-input govuk-input--width-${f[1]}`))&&Y(t,"class",a),m&4&&t.value!==f[2]&&Ce(t,f[2])},i(f){n||(k(e.$$.fragment,f),n=!0)},o(f){D(e.$$.fragment,f),n=!1},d(f){f&&(g(r),g(t)),S(e,f),s=!1,Ke(l)}}}function st(i){let e,r;return e=new tt({props:{label:i[0],id:i[3],$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},p(t,[a]){const n={};a&1&&(n.label=t[0]),a&1030&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function nt(i,e,r){let{label:t}=e,{value:a}=e,{width:n}=e,{min:s=void 0}=e,{max:l=void 0}=e,f=a==null?void 0:a.toString(),m=it();function b(){r(6,a=f==null?void 0:parseInt(f,10))}function _(c){if(c==""||c==null)return"";if(c.includes("."))return"Please enter a number without decimals";let B=Number(c);return isNaN(B)?"Please enter a valid number":s!=null&&B<s?`Please enter a number that's at least ${s};`:l!=null&&B>l?`Please enter a number that's at most ${l};`:""}function $(){f=this.value,r(2,f)}return i.$$set=c=>{"label"in c&&r(0,t=c.label),"value"in c&&r(6,a=c.value),"width"in c&&r(1,n=c.width),"min"in c&&r(7,s=c.min),"max"in c&&r(8,l=c.max)},[t,n,f,m,b,_,a,s,l,$]}class lt extends ee{constructor(e){super(),te(this,e,nt,st,x,{label:0,value:6,width:1,min:7,max:8})}}function pe(i,e,r,t){switch(i){case"Footway":return[2.6,2];case"Narrow Traffic / Bus Lane":return[3.25,3.25];case"Wide Traffic / Bus Lane":return[4.5,3.9];case"Traffic Lane (no buses): speed limit 20/30":return[3,2.75];case"On-highway advisory/mandatory cycle lane":return[2,1.5];case"1-way protected cycle track":if(!e.flowOneWay)throw new Error("missing input");return{"<200":[2.3,1.8],"200-800":[2.5,2.3],">800":[2.8,2.3]}[e.flowOneWay];case"2-way protected cycle track":if(!e.flowTwoWay)throw new Error("missing input");return{"<300":[3.3,2.3],"300-1,000":[3.3,2.8],">1,000":[4.3,3.3]}[e.flowTwoWay];case"Shared use cycle track":if(!e.flowSharedUse)throw new Error("missing input");return{"<300":[3,3],">300":[4.5,4.5]}[e.flowSharedUse];case"Parking Bay":return[2,1.8];case"Disabled Parking Bay":return[2.7,2.7];case"Loading Bay":return[2.7,1.8];case"Buffer / Verge":{if(!e.speedLimit)throw new Error("missing input");let a=[.5,.5],n=[1.5,1.5],s=0;if(r&&(s+=z[r]),t&&(s+=z[t]),s<=1||s==4||s==10)return a;let l=e.speedLimit=="<30"||e.speedLimit=="30"||e.speedLimit=="40";return r=="Footway"&&t&&z[t]==2||t=="Footway"&&r&&z[r]==2?l?a:n:{"<30":[.5,0],30:[.5,0],40:[1,.5],50:[2,1.5],60:[2.5,2],70:[3.5,3]}[e.speedLimit]}}}let z={Footway:0,"1-way protected cycle track":0,"2-way protected cycle track":0,"Shared use cycle track":0,"Buffer / Verge":1,"Narrow Traffic / Bus Lane":2,"Wide Traffic / Bus Lane":2,"Traffic Lane (no buses): speed limit 20/30":2,"On-highway advisory/mandatory cycle lane":2,"Parking Bay":10,"Disabled Parking Bay":10,"Loading Bay":10};function ot(i,e,r){if(z[i]!=0)return"";let t=e&&(z[e]==2||z[e]==10),a=r&&(z[r]==2||z[r]==10);return t&&a?"both":t?"left":a?"right":""}function Me(i,e){if(!i||!e)return null;let r=i=="<30"?20:parseInt(i);return e>r*1.1?r+10:r}let ie={Footway:["Manual for Streets 2: Section 5 pp.43","DMRB CD143 Designing for walking, cycling & horse-riding Annex pp. 7"],"Narrow Traffic / Bus Lane":[],"Wide Traffic / Bus Lane":[],"Traffic Lane (no buses): speed limit 20/30":["LTN 1/20 Table 7-2 pp. 76","LTN 1/20 Figure 4.1 pp. 33"],"On-highway advisory/mandatory cycle lane":["LTN 1/20 Table 5-2 pp.43","LTN 1/20 Figure 4.1 pp. 33"],"1-way protected cycle track":["LTN 1/20 Table 5-2 pp.43","LTN 1/20 Figure 4.1 pp. 33"],"2-way protected cycle track":["LTN 1/20 Table 5-2 pp.43","LTN 1/20 Figure 4.1 pp. 33"],"Shared use cycle track":["LTN 1/20 Table 6-3 pp.68"],"Parking Bay":["LTN 1/20 table 7-3 pp77"],"Disabled Parking Bay":[],"Loading Bay":["LTN 1/20 table 7-3 pp77"],"Buffer / Verge":["LTN 1/20 table 6-1 pp54"]};function ae(i,e){let r=Me(e.speedLimit,e.observedSpeed);switch(i){case"Footway":return"There is no maximum width for footways; widths should take account of pedestrian volumes and composition. Suggested widths quoted here are the functional width available to the user";case"Narrow Traffic / Bus Lane":return"";case"Wide Traffic / Bus Lane":return"";case"Traffic Lane (no buses): speed limit 20/30":return e.trafficFlow=="<2,500"&&r==20?"Where traffic volumes are less than 2,500 vpd and speeds are less than 20mph, cycling in mixed traffic may be suitable for all users":"Where traffic volumes are greater than 2,500 vpd or speeds are greater than 20mph, cycling in mixed traffic is not suitable for all users";case"On-highway advisory/mandatory cycle lane":return(e.trafficFlow=="<2,500"||e.trafficFlow=="2,500-5,000")&&r==20?"Where traffic volumes are less than 2,500 vpd and/or speeds are less than 20mph, advisory or mandatory cycle lanes may be suitable for all users":"Where traffic volumes are greater than 5,000 vpd and/or speeds are greater than 20mph, advisory or mandatory cycle lanes are not suitable for all users";case"1-way protected cycle track":return r==20?e.trafficFlow=="<2,500"?"If traffic flows are less than 2,500VPD and observed 85th percentile speed/speed limit is less than 30mph, then conditions for cycling in mixed traffic will suit most users":e.trafficFlow=="2,500-5,000"?"If traffic flows are greater than 2,500VPD but less than 5,000VPD, and observed 85th percentile speed/speed limit less than 30mph, then a mandatory or advisory cycle lane at the appropriate width will suit most users":"If traffic flows are greater than 5,000VPD and observed 85th percentile speed/speed limit less than 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m":r==30?"If the observed 85th percentile speed or the speed limit is 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m":r==40?"If the observed 85th percentile speed or the speed limit is 40mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.":"If the observed 85th percentile speed or the speed limit is 50+ mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.";case"2-way protected cycle track":return r==20?e.trafficFlow=="<2,500"?"If traffic flows are less than 2,500VPD and observed 85th percentile speed/speed limit is less than 30mph, then conditions for cycling in mixed traffic will suit most users":e.trafficFlow=="2,500-5,000"?"If traffic flows are greater than 2,500VPD but less than 5,000VPD, and observed 85th percentile speed/speed limit less than 30mph, then a mandatory or advisory cycle lane at the appropriate width will suit most users":"If traffic flows are greater than 5,000VPD and observed 85th percentile speed/speed limit less than 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.":r==30?"If the observed 85th percentile speed or the speed limit is 30mph, provision of a light-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.":r==40?"If the observed 85th percentile speed or the speed limit is 40mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the user plus min. protection width 0.3m.":"If the observed 85th percentile speed or the speed limit is 50+ mph, provision of a kerb-protected cycle track will suit most users. Suggested widths quoted here are the functional width available to the userplus min. protection width 0.3m.";case"Shared use cycle track":return"Potential policy conflict: 'Cyclists must be separated from pedestrians' - have you considered alternatives to a shared use cycle track?";case"Parking Bay":return"";case"Disabled Parking Bay":return"";case"Loading Bay":return"";case"Buffer / Verge":return"Your buffer / verge shouldn't impact on the functional width of your footway or cycle-track"}}function Pe(i,e,r){const t=i.slice();return t[14]=e[r],t}function We(i){let e,r,t,a=pe(i[0],i[7].proposed.trafficData,i[4],i[5])[i[3]=="Desirable"?0:1]+"",n,s,l,f,m,b,_=ae(i[0],i[7].proposed.trafficData),$,c;const B=[ct,ut,ft],u=[];function o(h,y){return h[6]=="left"?0:h[6]=="right"?1:h[6]=="both"?2:-1}~(l=o(i))&&(f=u[l]=B[l](i));let d=ie[i[0]]&&Ne(i),w=_&&qe(i);return{c(){e=O("p"),r=N(i[3]),t=N(" minimum width (m): "),n=N(a),s=P(),f&&f.c(),m=P(),d&&d.c(),b=P(),w&&w.c(),$=Q()},l(h){e=I(h,"P",{});var y=H(e);r=R(y,i[3]),t=R(y," minimum width (m): "),n=R(y,a),y.forEach(g),s=W(h),f&&f.l(h),m=W(h),d&&d.l(h),b=W(h),w&&w.l(h),$=Q()},m(h,y){v(h,e,y),E(e,r),E(e,t),E(e,n),v(h,s,y),~l&&u[l].m(h,y),v(h,m,y),d&&d.m(h,y),v(h,b,y),w&&w.m(h,y),v(h,$,y),c=!0},p(h,y){(!c||y&8)&&X(r,h[3]),(!c||y&185)&&a!==(a=pe(h[0],h[7].proposed.trafficData,h[4],h[5])[h[3]=="Desirable"?0:1]+"")&&X(n,a);let M=l;l=o(h),l!==M&&(f&&(ne(),D(u[M],1,1,()=>{u[M]=null}),le()),~l?(f=u[l],f||(f=u[l]=B[l](h),f.c()),k(f,1),f.m(m.parentNode,m)):f=null),ie[h[0]]?d?d.p(h,y):(d=Ne(h),d.c(),d.m(b.parentNode,b)):d&&(d.d(1),d=null),y&129&&(_=ae(h[0],h[7].proposed.trafficData)),_?w?w.p(h,y):(w=qe(h),w.c(),w.m($.parentNode,$)):w&&(w.d(1),w=null)},i(h){c||(k(f),c=!0)},o(h){D(f),c=!1},d(h){h&&(g(e),g(s),g(m),g(b),g($)),~l&&u[l].d(h),d&&d.d(h),w&&w.d(h)}}}function ft(i){let e,r;return e=new me({props:{$$slots:{default:[pt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function ut(i){let e,r;return e=new me({props:{$$slots:{default:[dt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function ct(i){let e,r;return e=new me({props:{$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function pt(i){let e;return{c(){e=N("Consider buffers to left and right")},l(r){e=R(r,"Consider buffers to left and right")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function dt(i){let e;return{c(){e=N("Consider buffer to right")},l(r){e=R(r,"Consider buffer to right")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function mt(i){let e;return{c(){e=N("Consider buffer to left")},l(r){e=R(r,"Consider buffer to left")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function Ne(i){let e,r="References",t,a,n=re(ie[i[0]]),s=[];for(let l=0;l<n.length;l+=1)s[l]=Re(Pe(i,n,l));return{c(){e=O("u"),e.textContent=r,t=N(`
      :
      `),a=O("ul");for(let l=0;l<s.length;l+=1)s[l].c()},l(l){e=I(l,"U",{"data-svelte-h":!0}),de(e)!=="svelte-fk7cdq"&&(e.textContent=r),t=R(l,`
      :
      `),a=I(l,"UL",{});var f=H(a);for(let m=0;m<s.length;m+=1)s[m].l(f);f.forEach(g)},m(l,f){v(l,e,f),v(l,t,f),v(l,a,f);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(a,null)},p(l,f){if(f&1){n=re(ie[l[0]]);let m;for(m=0;m<n.length;m+=1){const b=Pe(l,n,m);s[m]?s[m].p(b,f):(s[m]=Re(b),s[m].c(),s[m].m(a,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=n.length}},d(l){l&&(g(e),g(t),g(a)),Je(s,l)}}}function Re(i){let e,r=i[14]+"",t;return{c(){e=O("li"),t=N(r)},l(a){e=I(a,"LI",{});var n=H(e);t=R(n,r),n.forEach(g)},m(a,n){v(a,e,n),E(e,t)},p(a,n){n&1&&r!==(r=a[14]+"")&&X(t,r)},d(a){a&&g(e)}}}function qe(i){let e,r="Guidance",t,a,n=ae(i[0],i[7].proposed.trafficData)+"",s;return{c(){e=O("u"),e.textContent=r,t=N(`
      :
      `),a=O("p"),s=N(n),this.h()},l(l){e=I(l,"U",{"data-svelte-h":!0}),de(e)!=="svelte-qh7mhq"&&(e.textContent=r),t=R(l,`
      :
      `),a=I(l,"P",{style:!0});var f=H(a);s=R(f,n),f.forEach(g),this.h()},h(){Z(a,"max-width","400px")},m(l,f){v(l,e,f),v(l,t,f),v(l,a,f),E(a,s)},p(l,f){f&129&&n!==(n=ae(l[0],l[7].proposed.trafficData)+"")&&X(s,n)},d(l){l&&(g(e),g(t),g(a))}}}function ht(i){let e;return{c(){e=N("←")},l(r){e=R(r,"←")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function _t(i){let e;return{c(){e=N("Delete")},l(r){e=R(r,"Delete")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function gt(i){let e;return{c(){e=N("→")},l(r){e=R(r,"→")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function bt(i){let e,r,t,a,n,s,l,f,m,b,_,$;function c(o){i[10](o)}let B={label:"Street feature type",emptyOption:!0,choices:i[9]};i[0]!==void 0&&(B.value=i[0]),r=new K({props:B}),U.push(()=>j(r,"value",c));let u=i[0]&&We(i);return l=new ue({props:{disabled:i[1],$$slots:{default:[ht]},$$scope:{ctx:i}}}),l.$on("click",i[11]),m=new xe({props:{$$slots:{default:[_t]},$$scope:{ctx:i}}}),m.$on("click",i[12]),_=new ue({props:{disabled:i[2],$$slots:{default:[gt]},$$scope:{ctx:i}}}),_.$on("click",i[13]),{c(){e=O("div"),T(r.$$.fragment),a=P(),u&&u.c(),n=P(),s=O("div"),T(l.$$.fragment),f=P(),T(m.$$.fragment),b=P(),T(_.$$.fragment),this.h()},l(o){e=I(o,"DIV",{class:!0});var d=H(e);L(r.$$.fragment,d),a=W(d),u&&u.l(d),n=W(d),s=I(d,"DIV",{style:!0,class:!0});var w=H(s);L(l.$$.fragment,w),f=W(w),L(m.$$.fragment,w),b=W(w),L(_.$$.fragment,w),w.forEach(g),d.forEach(g),this.h()},h(){Z(s,"display","flex"),Z(s,"justify-content","space-between"),Y(s,"class","svelte-jig4ga"),Y(e,"class","svelte-jig4ga")},m(o,d){v(o,e,d),F(r,e,null),E(e,a),u&&u.m(e,null),E(e,n),E(e,s),F(l,s,null),E(s,f),F(m,s,null),E(s,b),F(_,s,null),$=!0},p(o,[d]){const w={};!t&&d&1&&(t=!0,w.value=o[0],A(()=>t=!1)),r.$set(w),o[0]?u?(u.p(o,d),d&1&&k(u,1)):(u=We(o),u.c(),k(u,1),u.m(e,n)):u&&(ne(),D(u,1,1,()=>{u=null}),le());const h={};d&2&&(h.disabled=o[1]),d&131072&&(h.$$scope={dirty:d,ctx:o}),l.$set(h);const y={};d&131072&&(y.$$scope={dirty:d,ctx:o}),m.$set(y);const M={};d&4&&(M.disabled=o[2]),d&131072&&(M.$$scope={dirty:d,ctx:o}),_.$set(M)},i(o){$||(k(r.$$.fragment,o),k(u),k(l.$$.fragment,o),k(m.$$.fragment,o),k(_.$$.fragment,o),$=!0)},o(o){D(r.$$.fragment,o),D(u),D(l.$$.fragment,o),D(m.$$.fragment,o),D(_.$$.fragment,o),$=!1},d(o){o&&g(e),S(r),u&&u.d(),S(l),S(m),S(_)}}}function $t(i,e,r){let t,a;se(i,V,d=>r(7,a=d));let{value:n}=e,{isFirst:s}=e,{isLast:l}=e,{sectionType:f}=e,{leftFeature:m}=e,{rightFeature:b}=e,_=Ye(),$=G(et);function c(d){n=d,r(0,n)}const B=()=>_("moveLeft"),u=()=>_("delete"),o=()=>_("moveRight");return i.$$set=d=>{"value"in d&&r(0,n=d.value),"isFirst"in d&&r(1,s=d.isFirst),"isLast"in d&&r(2,l=d.isLast),"sectionType"in d&&r(3,f=d.sectionType),"leftFeature"in d&&r(4,m=d.leftFeature),"rightFeature"in d&&r(5,b=d.rightFeature)},i.$$.update=()=>{i.$$.dirty&49&&r(6,t=n&&ot(n,m,b))},[n,s,l,f,m,b,t,a,_,$,c,B,u,o]}class wt extends ee{constructor(e){super(),te(this,e,$t,bt,x,{value:0,isFirst:1,isLast:2,sectionType:3,leftFeature:4,rightFeature:5})}}function Ee(i,e,r){const t=i.slice();return t[13]=e[r],t[14]=e,t[15]=r,t}function vt(i){let e;return{c(){e=N("Add")},l(r){e=R(r,"Add")},m(r,t){v(r,e,t)},d(r){r&&g(e)}}}function Oe(i,e){let r,t,a,n;function s(_){e[8](_,e[13],e[14],e[15])}function l(){return e[9](e[15])}function f(){return e[10](e[15])}function m(){return e[11](e[15])}let b={isFirst:e[15]==0,isLast:e[15]==e[0].length-1,leftFeature:e[15]==0?"":e[0][e[15]-1],rightFeature:e[15]==e[0].length-1?"":e[0][e[15]+1],sectionType:e[1]};return e[13]!==void 0&&(b.value=e[13]),t=new wt({props:b}),U.push(()=>j(t,"value",s)),t.$on("delete",l),t.$on("moveLeft",f),t.$on("moveRight",m),{key:i,first:null,c(){r=Q(),T(t.$$.fragment),this.h()},l(_){r=Q(),L(t.$$.fragment,_),this.h()},h(){this.first=r},m(_,$){v(_,r,$),F(t,_,$),n=!0},p(_,$){e=_;const c={};$&1&&(c.isFirst=e[15]==0),$&1&&(c.isLast=e[15]==e[0].length-1),$&1&&(c.leftFeature=e[15]==0?"":e[0][e[15]-1]),$&1&&(c.rightFeature=e[15]==e[0].length-1?"":e[0][e[15]+1]),$&2&&(c.sectionType=e[1]),!a&&$&1&&(a=!0,c.value=e[13],A(()=>a=!1)),t.$set(c)},i(_){n||(k(t.$$.fragment,_),n=!0)},o(_){D(t.$$.fragment,_),n=!1},d(_){_&&g(r),S(t,_)}}}function yt(i){let e,r,t,a=[],n=new Map,s,l,f,m,b=i[2].toFixed(2)+"",_,$;e=new ue({props:{$$slots:{default:[vt]},$$scope:{ctx:i}}}),e.$on("click",i[3]);let c=re(i[0]);const B=u=>u[15];for(let u=0;u<c.length;u+=1){let o=Ee(i,c,u),d=B(o);n.set(d,a[u]=Oe(d,o))}return{c(){T(e.$$.fragment),r=P(),t=O("div");for(let u=0;u<a.length;u+=1)a[u].c();s=P(),l=O("p"),f=N("Total width required (m): "),m=O("b"),_=N(b),this.h()},l(u){L(e.$$.fragment,u),r=W(u),t=I(u,"DIV",{style:!0});var o=H(t);for(let h=0;h<a.length;h+=1)a[h].l(o);o.forEach(g),s=W(u),l=I(u,"P",{});var d=H(l);f=R(d,"Total width required (m): "),m=I(d,"B",{});var w=H(m);_=R(w,b),w.forEach(g),d.forEach(g),this.h()},h(){Z(t,"display","flex"),Z(t,"flex-direction","row")},m(u,o){F(e,u,o),v(u,r,o),v(u,t,o);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(t,null);v(u,s,o),v(u,l,o),E(l,f),E(l,m),E(m,_),$=!0},p(u,[o]){const d={};o&65536&&(d.$$scope={dirty:o,ctx:u}),e.$set(d),o&115&&(c=re(u[0]),ne(),a=Qe(a,o,B,1,u,c,n,t,Xe,Oe,null,Ee),le()),(!$||o&4)&&b!==(b=u[2].toFixed(2)+"")&&X(_,b)},i(u){if(!$){k(e.$$.fragment,u);for(let o=0;o<c.length;o+=1)k(a[o]);$=!0}},o(u){D(e.$$.fragment,u);for(let o=0;o<a.length;o+=1)D(a[o]);$=!1},d(u){u&&(g(r),g(t),g(s),g(l)),S(e,u);for(let o=0;o<a.length;o+=1)a[o].d()}}}function kt(i,e,r){let t,a;se(i,V,o=>r(7,a=o));let{streetFeaturesLeftToRight:n}=e,{sectionType:s}=e;function l(){r(0,n=[...n,""])}function f(o){n.splice(o,1),r(0,n)}function m(o){r(0,[n[o-1],n[o]]=[n[o],n[o-1]],n)}function b(o){r(0,[n[o+1],n[o]]=[n[o],n[o+1]],n)}function _(o,d){let w=0;for(let h=0;h<n.length;h++){let y=n[h];if(!y)continue;let M=h==0?"":n[h-1],J=h==n.length-1?"":n[h+1],oe=pe(y,o.proposed.trafficData,M,J)[d=="Desirable"?0:1];w+=oe}return w}function $(o,d,w,h){w[h]=o,r(0,n)}const c=o=>f(o),B=o=>m(o),u=o=>b(o);return i.$$set=o=>{"streetFeaturesLeftToRight"in o&&r(0,n=o.streetFeaturesLeftToRight),"sectionType"in o&&r(1,s=o.sectionType)},i.$$.update=()=>{i.$$.dirty&130&&r(2,t=_(a,s))},[n,s,t,l,f,m,b,a,$,c,B,u]}class Ve extends ee{constructor(e){super(),te(this,e,kt,yt,x,{streetFeaturesLeftToRight:0,sectionType:1})}}function Ie(i){let e,r,t,a;return{c(){e=O("p"),r=N("Effective speed limit, based on the limit and 85 percentile: "),t=N(i[1]),a=N(`
      mph`)},l(n){e=I(n,"P",{});var s=H(e);r=R(s,"Effective speed limit, based on the limit and 85 percentile: "),t=R(s,i[1]),a=R(s,`
      mph`),s.forEach(g)},m(n,s){v(n,e,s),E(e,r),E(e,t),E(e,a)},p(n,s){s&2&&X(t,n[1])},d(n){n&&g(e)}}}function Dt(i){let e,r,t,a,n,s,l,f,m,b,_,$,c,B,u,o,d,w,h,y,M,J;function oe(p){i[3](p)}let he={label:"Expected peak hour cycle flow: 1-way cycle tracks",emptyOption:!0,choices:G(["<200","200-800",">800"])};i[0].proposed.trafficData.flowOneWay!==void 0&&(he.value=i[0].proposed.trafficData.flowOneWay),e=new K({props:he}),U.push(()=>j(e,"value",oe));function Ue(p){i[4](p)}let _e={label:"Expected peak hour cycle flow: 2-way cycle tracks",emptyOption:!0,choices:G(["<300","300-1,000",">1,000"])};i[0].proposed.trafficData.flowTwoWay!==void 0&&(_e.value=i[0].proposed.trafficData.flowTwoWay),a=new K({props:_e}),U.push(()=>j(a,"value",Ue));function Ae(p){i[5](p)}let ge={label:"Expected peak hour cycle flow: shared use cycle tracks",emptyOption:!0,choices:G(["<300",">300"])};i[0].proposed.trafficData.flowSharedUse!==void 0&&(ge.value=i[0].proposed.trafficData.flowSharedUse),l=new K({props:ge}),U.push(()=>j(l,"value",Ae));function je(p){i[6](p)}let be={label:"Traffic flow (vpd)",emptyOption:!0,choices:G(["<2,500","2,500-5,000","5,000-10,000",">10,000"])};i[0].proposed.trafficData.trafficFlow!==void 0&&(be.value=i[0].proposed.trafficData.trafficFlow),b=new K({props:be}),U.push(()=>j(b,"value",je));function He(p){i[7](p)}let $e={label:"Speed limit (MPH)",emptyOption:!0,choices:G(["<30","30","40","50","60","70"])};i[0].proposed.trafficData.speedLimit!==void 0&&($e.value=i[0].proposed.trafficData.speedLimit),c=new K({props:$e}),U.push(()=>j(c,"value",He));function ze(p){i[8](p)}let we={label:"Observed 85th percentile speed (MPH)",width:3,min:0,max:120};i[0].proposed.trafficData.observedSpeed!==void 0&&(we.value=i[0].proposed.trafficData.observedSpeed),o=new lt({props:we}),U.push(()=>j(o,"value",ze));let q=i[1]&&Ie(i);function Ge(p){i[9](p)}let ve={label:"Street function",emptyOption:!0,choices:G(["High Street (active frontages)","Residential street","Local distributor road"])};return i[0].proposed.trafficData.streetFunction!==void 0&&(ve.value=i[0].proposed.trafficData.streetFunction),y=new K({props:ve}),U.push(()=>j(y,"value",Ge)),{c(){T(e.$$.fragment),t=P(),T(a.$$.fragment),s=P(),T(l.$$.fragment),m=P(),T(b.$$.fragment),$=P(),T(c.$$.fragment),u=P(),T(o.$$.fragment),w=P(),q&&q.c(),h=P(),T(y.$$.fragment)},l(p){L(e.$$.fragment,p),t=W(p),L(a.$$.fragment,p),s=W(p),L(l.$$.fragment,p),m=W(p),L(b.$$.fragment,p),$=W(p),L(c.$$.fragment,p),u=W(p),L(o.$$.fragment,p),w=W(p),q&&q.l(p),h=W(p),L(y.$$.fragment,p)},m(p,C){F(e,p,C),v(p,t,C),F(a,p,C),v(p,s,C),F(l,p,C),v(p,m,C),F(b,p,C),v(p,$,C),F(c,p,C),v(p,u,C),F(o,p,C),v(p,w,C),q&&q.m(p,C),v(p,h,C),F(y,p,C),J=!0},p(p,C){const ye={};!r&&C&1&&(r=!0,ye.value=p[0].proposed.trafficData.flowOneWay,A(()=>r=!1)),e.$set(ye);const ke={};!n&&C&1&&(n=!0,ke.value=p[0].proposed.trafficData.flowTwoWay,A(()=>n=!1)),a.$set(ke);const De={};!f&&C&1&&(f=!0,De.value=p[0].proposed.trafficData.flowSharedUse,A(()=>f=!1)),l.$set(De);const Te={};!_&&C&1&&(_=!0,Te.value=p[0].proposed.trafficData.trafficFlow,A(()=>_=!1)),b.$set(Te);const Le={};!B&&C&1&&(B=!0,Le.value=p[0].proposed.trafficData.speedLimit,A(()=>B=!1)),c.$set(Le);const Fe={};!d&&C&1&&(d=!0,Fe.value=p[0].proposed.trafficData.observedSpeed,A(()=>d=!1)),o.$set(Fe),p[1]?q?q.p(p,C):(q=Ie(p),q.c(),q.m(h.parentNode,h)):q&&(q.d(1),q=null);const Se={};!M&&C&1&&(M=!0,Se.value=p[0].proposed.trafficData.streetFunction,A(()=>M=!1)),y.$set(Se)},i(p){J||(k(e.$$.fragment,p),k(a.$$.fragment,p),k(l.$$.fragment,p),k(b.$$.fragment,p),k(c.$$.fragment,p),k(o.$$.fragment,p),k(y.$$.fragment,p),J=!0)},o(p){D(e.$$.fragment,p),D(a.$$.fragment,p),D(l.$$.fragment,p),D(b.$$.fragment,p),D(c.$$.fragment,p),D(o.$$.fragment,p),D(y.$$.fragment,p),J=!1},d(p){p&&(g(t),g(s),g(m),g($),g(u),g(w),g(h)),S(e,p),S(a,p),S(l,p),S(b,p),S(c,p),S(o,p),q&&q.d(p),S(y,p)}}}function Tt(i){let e,r;return e=new ce({props:{label:"Traffic data and additional information",$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){F(e,t,a),r=!0},p(t,[a]){const n={};a&1027&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function Lt(i,e,r){let t,a;se(i,V,c=>r(0,a=c));let{valid:n}=e;function s(c){i.$$.not_equal(a.proposed.trafficData.flowOneWay,c)&&(a.proposed.trafficData.flowOneWay=c,V.set(a))}function l(c){i.$$.not_equal(a.proposed.trafficData.flowTwoWay,c)&&(a.proposed.trafficData.flowTwoWay=c,V.set(a))}function f(c){i.$$.not_equal(a.proposed.trafficData.flowSharedUse,c)&&(a.proposed.trafficData.flowSharedUse=c,V.set(a))}function m(c){i.$$.not_equal(a.proposed.trafficData.trafficFlow,c)&&(a.proposed.trafficData.trafficFlow=c,V.set(a))}function b(c){i.$$.not_equal(a.proposed.trafficData.speedLimit,c)&&(a.proposed.trafficData.speedLimit=c,V.set(a))}function _(c){i.$$.not_equal(a.proposed.trafficData.observedSpeed,c)&&(a.proposed.trafficData.observedSpeed=c,V.set(a))}function $(c){i.$$.not_equal(a.proposed.trafficData.streetFunction,c)&&(a.proposed.trafficData.streetFunction=c,V.set(a))}return i.$$set=c=>{"valid"in c&&r(2,n=c.valid)},i.$$.update=()=>{i.$$.dirty&1&&r(2,n=a.proposed.trafficData.flowOneWay!=""&&a.proposed.trafficData.flowTwoWay!=""&&a.proposed.trafficData.flowSharedUse!=""&&a.proposed.trafficData.trafficFlow!=""&&a.proposed.trafficData.speedLimit!=""&&a.proposed.trafficData.observedSpeed!=null&&a.proposed.trafficData.streetFunction!=""),i.$$.dirty&1&&r(1,t=Me(a.proposed.trafficData.speedLimit,a.proposed.trafficData.observedSpeed))},[a,t,n,s,l,f,m,b,_,$]}class Ft extends ee{constructor(e){super(),te(this,e,Lt,Tt,x,{valid:2})}}function St(i){let e,r="Fill out all data above to continue";return{c(){e=O("p"),e.textContent=r},l(t){e=I(t,"P",{"data-svelte-h":!0}),de(e)!=="svelte-ma95"&&(e.textContent=r)},m(t,a){v(t,e,a)},p:fe,i:fe,o:fe,d(t){t&&g(e)}}}function Ct(i){let e,r,t,a;return e=new ce({props:{label:"Desirable Minimum Cross-Section",$$slots:{default:[Bt]},$$scope:{ctx:i}}}),t=new ce({props:{label:"Absolute Minimum Cross-Section",$$slots:{default:[Pt]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),r=P(),T(t.$$.fragment)},l(n){L(e.$$.fragment,n),r=W(n),L(t.$$.fragment,n)},m(n,s){F(e,n,s),v(n,r,s),F(t,n,s),a=!0},p(n,s){const l={};s&34&&(l.$$scope={dirty:s,ctx:n}),e.$set(l);const f={};s&34&&(f.$$scope={dirty:s,ctx:n}),t.$set(f)},i(n){a||(k(e.$$.fragment,n),k(t.$$.fragment,n),a=!0)},o(n){D(e.$$.fragment,n),D(t.$$.fragment,n),a=!1},d(n){n&&g(r),S(e,n),S(t,n)}}}function Bt(i){let e,r,t;function a(s){i[3](s)}let n={sectionType:"Desirable"};return i[1].proposed.desirableMinimumCrossSection!==void 0&&(n.streetFeaturesLeftToRight=i[1].proposed.desirableMinimumCrossSection),e=new Ve({props:n}),U.push(()=>j(e,"streetFeaturesLeftToRight",a)),{c(){T(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,l){F(e,s,l),t=!0},p(s,l){const f={};!r&&l&2&&(r=!0,f.streetFeaturesLeftToRight=s[1].proposed.desirableMinimumCrossSection,A(()=>r=!1)),e.$set(f)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function Pt(i){let e,r,t;function a(s){i[4](s)}let n={sectionType:"Absolute"};return i[1].proposed.absoluteMinimumCrossSection!==void 0&&(n.streetFeaturesLeftToRight=i[1].proposed.absoluteMinimumCrossSection),e=new Ve({props:n}),U.push(()=>j(e,"streetFeaturesLeftToRight",a)),{c(){T(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,l){F(e,s,l),t=!0},p(s,l){const f={};!r&&l&2&&(r=!0,f.streetFeaturesLeftToRight=s[1].proposed.absoluteMinimumCrossSection,A(()=>r=!1)),e.$set(f)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function Wt(i){let e,r,t,a,n,s,l,f,m;e=new Ze({props:{links:[["Tools","/"],["Route cross-section","/cross_section"]],current:"Proposed Cross-Sections"}});function b(u){i[2](u)}let _={};i[0]!==void 0&&(_.valid=i[0]),t=new Ft({props:_}),U.push(()=>j(t,"valid",b));const $=[Ct,St],c=[];function B(u,o){return u[0]?0:1}return s=B(i),l=c[s]=$[s](i),{c(){T(e.$$.fragment),r=P(),T(t.$$.fragment),n=P(),l.c(),f=Q()},l(u){L(e.$$.fragment,u),r=W(u),L(t.$$.fragment,u),n=W(u),l.l(u),f=Q()},m(u,o){F(e,u,o),v(u,r,o),F(t,u,o),v(u,n,o),c[s].m(u,o),v(u,f,o),m=!0},p(u,[o]){const d={};!a&&o&1&&(a=!0,d.valid=u[0],A(()=>a=!1)),t.$set(d);let w=s;s=B(u),s===w?c[s].p(u,o):(ne(),D(c[w],1,1,()=>{c[w]=null}),le(),l=c[s],l?l.p(u,o):(l=c[s]=$[s](u),l.c()),k(l,1),l.m(f.parentNode,f))},i(u){m||(k(e.$$.fragment,u),k(t.$$.fragment,u),k(l),m=!0)},o(u){D(e.$$.fragment,u),D(t.$$.fragment,u),D(l),m=!1},d(u){u&&(g(r),g(n),g(f)),S(e,u),S(t,u),c[s].d(u)}}}function Nt(i,e,r){let t;se(i,V,f=>r(1,t=f));let a=!1;function n(f){a=f,r(0,a)}function s(f){i.$$.not_equal(t.proposed.desirableMinimumCrossSection,f)&&(t.proposed.desirableMinimumCrossSection=f,V.set(t))}function l(f){i.$$.not_equal(t.proposed.absoluteMinimumCrossSection,f)&&(t.proposed.absoluteMinimumCrossSection=f,V.set(t))}return[a,t,n,s,l]}class Kt extends ee{constructor(e){super(),te(this,e,Nt,Wt,x,{})}}export{Kt as component};
