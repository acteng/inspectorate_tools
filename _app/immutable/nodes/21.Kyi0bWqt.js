import{s as J,a as C,e as P,d as R,c as q,h as I,i as y,F as $e,z as he,f as h,A as qe,D as B,b as z,q as X,j as E,E as O,l as ne,a1 as Ue,t as A,k as j,g as Se,o as x,p as Ie,G as be,n as Z}from"../chunks/scheduler.DlrNT9bG.js";import{S as K,i as Q,c as T,a as D,m as L,t as v,b as w,d as k,e as W,g as Fe,f as Ce}from"../chunks/index.CSg7XBLV.js";import{e as Y,u as Ae,o as je,B as He}from"../chunks/Breadcrumbs.DgA6GZjs.js";import{S as H,p as V}from"../chunks/Select.CAfeBsO9.js";import{S as ee}from"../chunks/SecondaryButton.C3sPNXxx.js";import{W as Ve}from"../chunks/WarningButton.Yg41A4H_.js";import{s as N,l as ze}from"../chunks/data.wCDhqQoQ.js";import{C as te}from"../chunks/CollapsibleCard.C00nvX14.js";import{F as Ge,v as Je,E as Ke}from"../chunks/FormElement.Df1CTyQd.js";import"../chunks/Geocoder.svelte_svelte_type_style_lang.DUwqPKpW.js";function Qe(a){let e,n,t,s,l,r,f;return e=new Ke({props:{errorMessage:a[5](a[2])}}),{c(){T(e.$$.fragment),n=C(),t=P("input"),this.h()},l(o){D(e.$$.fragment,o),n=R(o),t=q(o,"INPUT",{type:!0,inputmode:!0,class:!0,id:!0}),this.h()},h(){I(t,"type","text"),I(t,"inputmode","numeric"),I(t,"class",s=`govuk-input govuk-input--width-${a[1]}`),I(t,"id",a[3])},m(o,c){L(e,o,c),y(o,n,c),y(o,t,c),$e(t,a[2]),l=!0,r||(f=[he(t,"input",a[9]),he(t,"change",a[4])],r=!0)},p(o,c){const m={};c&4&&(m.errorMessage=o[5](o[2])),e.$set(m),(!l||c&2&&s!==(s=`govuk-input govuk-input--width-${o[1]}`))&&I(t,"class",s),c&4&&t.value!==o[2]&&$e(t,o[2])},i(o){l||(v(e.$$.fragment,o),l=!0)},o(o){w(e.$$.fragment,o),l=!1},d(o){o&&(h(n),h(t)),k(e,o),r=!1,qe(f)}}}function Xe(a){let e,n;return e=new Ge({props:{label:a[0],id:a[3],$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,s){L(e,t,s),n=!0},p(t,[s]){const l={};s&1&&(l.label=t[0]),s&1030&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ye(a,e,n){let{label:t}=e,{value:s}=e,{width:l}=e,{min:r=void 0}=e,{max:f=void 0}=e,o=s==null?void 0:s.toString(),c=Je();function m(){n(6,s=o==null?void 0:parseInt(o,10))}function _(i){if(i==""||i==null)return"";if(i.includes("."))return"Please enter a number without decimals";let $=Number(i);return isNaN($)?"Please enter a valid number":r!=null&&$<r?`Please enter a number that's at least ${r};`:f!=null&&$>f?`Please enter a number that's at most ${f};`:""}function p(){o=this.value,n(2,o)}return a.$$set=i=>{"label"in i&&n(0,t=i.label),"value"in i&&n(6,s=i.value),"width"in i&&n(1,l=i.width),"min"in i&&n(7,r=i.min),"max"in i&&n(8,f=i.max)},[t,l,o,c,m,_,s,r,f,p]}class Ze extends K{constructor(e){super(),Q(this,e,Ye,Xe,J,{label:0,value:6,width:1,min:7,max:8})}}let xe={Footway:["2.60","2.60","2.60","","","2.00","2.00","2.00",""],"Narrow Traffic / Bus Lane":["3.25","","","","","3.25","","",""],"Wide Traffic / Bus Lane":["4.50","","","","","3.90","","",""],"Traffic Lane (no buses): speed limit 20/30":["3.00","","","","","2.75","","",""],"On-highway advisory/mandatory cycle lane":["2.00","","","","","1.50","","",""],"1-way protected cycle track":["2.30","2.50","2.80","","","1.80","2.30","2.30",""],"2-way protected cycle track":["3.30","3.30","4.30","","","2.30","2.80","3.30",""],"Shared use cycle track":["3.00","4.50","","","","3.00","4.50","",""],"Parking Bay":["2.00","","","","","1.80","","",""],"Disabled Parking Bay":["2.70","","","","","2.70","","",""],"Loading Bay":["2.70","","","","","1.80","","",""],"Buffer / Verge":["0.50","1.00","2.00","2.50","3.50","-  ","0.50","1.50","2.00","3.00"]};function ve(a,e,n){let t=xe[a],s=n=="Desirable"?t.slice(1,6):t.slice(6,11);if(e=="High Street (active frontages)")return s[0];if(e=="Residential street")return s[1];if(e=="Local distributor road")return s[2];throw new Error(`Unknown streetFunction ${e}`)}let we={Footway:["Manual for Streets 2: Section 5 pp.43","DMRB CD143 Designing for walking, cycling & horse-riding Annex pp. 7"],"Narrow Traffic / Bus Lane":[],"Wide Traffic / Bus Lane":[],"Traffic Lane (no buses): speed limit 20/30":["LTN 1/20 Table 7-2 pp. 76","LTN 1/20 Figure 4.1 pp. 33"],"On-highway advisory/mandatory cycle lane":["LTN 1/20 Table 5-2 pp.43","LTN 1/20 Figure 4.1 pp. 33"],"1-way protected cycle track":["LTN 1/20 Table 5-2 pp.43","LTN 1/20 Figure 4.1 pp. 33"],"2-way protected cycle track":["LTN 1/20 Table 5-2 pp.43","LTN 1/20 Figure 4.1 pp. 33"],"Shared use cycle track":["LTN 1/20 Table 6-3 pp.68"],"Parking Bay":["LTN 1/20 table 7-3 pp77"],"Disabled Parking Bay":[],"Loading Bay":["LTN 1/20 table 7-3 pp77"],"Buffer / Verge":["LTN 1/20 table 6-1 pp54"]};function ye(a,e,n){const t=a.slice();return t[11]=e[n],t}function Te(a){let e,n,t,s=ve(a[0],a[4].proposed.trafficData.streetFunction,a[3])+"",l,r,f,o="References:",c,m,_=Y(we[a[0]]),p=[];for(let i=0;i<_.length;i+=1)p[i]=De(ye(a,_,i));return{c(){e=P("p"),n=A(a[3]),t=A(" minimum width (m): "),l=A(s),r=C(),f=P("u"),f.textContent=o,c=C(),m=P("ul");for(let i=0;i<p.length;i+=1)p[i].c()},l(i){e=q(i,"P",{});var $=z(e);n=j($,a[3]),t=j($," minimum width (m): "),l=j($,s),$.forEach(h),r=R(i),f=q(i,"U",{"data-svelte-h":!0}),Se(f)!=="svelte-fphw6y"&&(f.textContent=o),c=R(i),m=q(i,"UL",{});var d=z(m);for(let g=0;g<p.length;g+=1)p[g].l(d);d.forEach(h)},m(i,$){y(i,e,$),E(e,n),E(e,t),E(e,l),y(i,r,$),y(i,f,$),y(i,c,$),y(i,m,$);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(m,null)},p(i,$){if($&8&&x(n,i[3]),$&25&&s!==(s=ve(i[0],i[4].proposed.trafficData.streetFunction,i[3])+"")&&x(l,s),$&1){_=Y(we[i[0]]);let d;for(d=0;d<_.length;d+=1){const g=ye(i,_,d);p[d]?p[d].p(g,$):(p[d]=De(g),p[d].c(),p[d].m(m,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=_.length}},d(i){i&&(h(e),h(r),h(f),h(c),h(m)),Ie(p,i)}}}function De(a){let e,n=a[11]+"",t;return{c(){e=P("li"),t=A(n)},l(s){e=q(s,"LI",{});var l=z(e);t=j(l,n),l.forEach(h)},m(s,l){y(s,e,l),E(e,t)},p(s,l){l&1&&n!==(n=s[11]+"")&&x(t,n)},d(s){s&&h(e)}}}function et(a){let e;return{c(){e=A("←")},l(n){e=j(n,"←")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function tt(a){let e;return{c(){e=A("Delete")},l(n){e=j(n,"Delete")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function nt(a){let e;return{c(){e=A("→")},l(n){e=j(n,"→")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function at(a){let e,n,t,s,l,r,f,o,c,m,_,p;function i(g){a[7](g)}let $={label:"Lane type",emptyOption:!0,choices:a[6]};a[0]!==void 0&&($.value=a[0]),n=new H({props:$}),B.push(()=>W(n,"value",i));let d=a[0]&&Te(a);return f=new ee({props:{disabled:a[1],$$slots:{default:[et]},$$scope:{ctx:a}}}),f.$on("click",a[8]),c=new Ve({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),c.$on("click",a[9]),_=new ee({props:{disabled:a[2],$$slots:{default:[nt]},$$scope:{ctx:a}}}),_.$on("click",a[10]),{c(){e=P("div"),T(n.$$.fragment),s=C(),d&&d.c(),l=C(),r=P("div"),T(f.$$.fragment),o=C(),T(c.$$.fragment),m=C(),T(_.$$.fragment),this.h()},l(g){e=q(g,"DIV",{class:!0});var b=z(e);D(n.$$.fragment,b),s=R(b),d&&d.l(b),l=R(b),r=q(b,"DIV",{style:!0,class:!0});var F=z(r);D(f.$$.fragment,F),o=R(F),D(c.$$.fragment,F),m=R(F),D(_.$$.fragment,F),F.forEach(h),b.forEach(h),this.h()},h(){X(r,"display","flex"),X(r,"justify-content","space-between"),I(r,"class","svelte-jig4ga"),I(e,"class","svelte-jig4ga")},m(g,b){y(g,e,b),L(n,e,null),E(e,s),d&&d.m(e,null),E(e,l),E(e,r),L(f,r,null),E(r,o),L(c,r,null),E(r,m),L(_,r,null),p=!0},p(g,[b]){const F={};!t&&b&1&&(t=!0,F.value=g[0],O(()=>t=!1)),n.$set(F),g[0]?d?d.p(g,b):(d=Te(g),d.c(),d.m(e,l)):d&&(d.d(1),d=null);const M={};b&2&&(M.disabled=g[1]),b&16384&&(M.$$scope={dirty:b,ctx:g}),f.$set(M);const G={};b&16384&&(G.$$scope={dirty:b,ctx:g}),c.$set(G);const U={};b&4&&(U.disabled=g[2]),b&16384&&(U.$$scope={dirty:b,ctx:g}),_.$set(U)},i(g){p||(v(n.$$.fragment,g),v(f.$$.fragment,g),v(c.$$.fragment,g),v(_.$$.fragment,g),p=!0)},o(g){w(n.$$.fragment,g),w(f.$$.fragment,g),w(c.$$.fragment,g),w(_.$$.fragment,g),p=!1},d(g){g&&h(e),k(n),d&&d.d(),k(f),k(c),k(_)}}}function st(a,e,n){let t;ne(a,N,$=>n(4,t=$));let{value:s}=e,{isFirst:l}=e,{isLast:r}=e,{sectionType:f}=e,o=Ue(),c=V(ze);function m($){s=$,n(0,s)}const _=()=>o("moveLeft"),p=()=>o("delete"),i=()=>o("moveRight");return a.$$set=$=>{"value"in $&&n(0,s=$.value),"isFirst"in $&&n(1,l=$.isFirst),"isLast"in $&&n(2,r=$.isLast),"sectionType"in $&&n(3,f=$.sectionType)},[s,l,r,f,t,o,c,m,_,p,i]}class it extends K{constructor(e){super(),Q(this,e,st,at,J,{value:0,isFirst:1,isLast:2,sectionType:3})}}function Le(a,e,n){const t=a.slice();return t[10]=e[n],t[11]=e,t[12]=n,t}function rt(a){let e;return{c(){e=A("Add")},l(n){e=j(n,"Add")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function ke(a,e){let n,t,s,l;function r(_){e[6](_,e[10],e[11],e[12])}function f(){return e[7](e[12])}function o(){return e[8](e[12])}function c(){return e[9](e[12])}let m={isFirst:e[12]==0,isLast:e[12]==e[0].length-1,sectionType:e[1]};return e[10]!==void 0&&(m.value=e[10]),t=new it({props:m}),B.push(()=>W(t,"value",r)),t.$on("delete",f),t.$on("moveLeft",o),t.$on("moveRight",c),{key:a,first:null,c(){n=be(),T(t.$$.fragment),this.h()},l(_){n=be(),D(t.$$.fragment,_),this.h()},h(){this.first=n},m(_,p){y(_,n,p),L(t,_,p),l=!0},p(_,p){e=_;const i={};p&1&&(i.isFirst=e[12]==0),p&1&&(i.isLast=e[12]==e[0].length-1),p&2&&(i.sectionType=e[1]),!s&&p&1&&(s=!0,i.value=e[10],O(()=>s=!1)),t.$set(i)},i(_){l||(v(t.$$.fragment,_),l=!0)},o(_){w(t.$$.fragment,_),l=!1},d(_){_&&h(n),k(t,_)}}}function lt(a){let e,n,t,s=[],l=new Map,r;e=new ee({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),e.$on("click",a[2]);let f=Y(a[0]);const o=c=>c[12];for(let c=0;c<f.length;c+=1){let m=Le(a,f,c),_=o(m);l.set(_,s[c]=ke(_,m))}return{c(){T(e.$$.fragment),n=C(),t=P("div");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){D(e.$$.fragment,c),n=R(c),t=q(c,"DIV",{style:!0});var m=z(t);for(let _=0;_<s.length;_+=1)s[_].l(m);m.forEach(h),this.h()},h(){X(t,"display","flex"),X(t,"flex-direction","row")},m(c,m){L(e,c,m),y(c,n,m),y(c,t,m);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(t,null);r=!0},p(c,[m]){const _={};m&8192&&(_.$$scope={dirty:m,ctx:c}),e.$set(_),m&59&&(f=Y(c[0]),Fe(),s=Ae(s,m,o,1,c,f,l,t,je,ke,null,Le),Ce())},i(c){if(!r){v(e.$$.fragment,c);for(let m=0;m<f.length;m+=1)v(s[m]);r=!0}},o(c){w(e.$$.fragment,c);for(let m=0;m<s.length;m+=1)w(s[m]);r=!1},d(c){c&&(h(n),h(t)),k(e,c);for(let m=0;m<s.length;m+=1)s[m].d()}}}function ot(a,e,n){let{lanesLeftToRight:t}=e,{sectionType:s}=e;function l(){n(0,t=[...t,""])}function r(i){t.splice(i,1),n(0,t)}function f(i){n(0,[t[i-1],t[i]]=[t[i],t[i-1]],t)}function o(i){n(0,[t[i+1],t[i]]=[t[i],t[i+1]],t)}function c(i,$,d,g){d[g]=i,n(0,t)}const m=i=>r(i),_=i=>f(i),p=i=>o(i);return a.$$set=i=>{"lanesLeftToRight"in i&&n(0,t=i.lanesLeftToRight),"sectionType"in i&&n(1,s=i.sectionType)},[t,s,l,r,f,o,c,m,_,p]}class Re extends K{constructor(e){super(),Q(this,e,ot,lt,J,{lanesLeftToRight:0,sectionType:1})}}function ft(a){let e,n,t,s,l,r,f,o,c,m,_,p,i,$,d,g,b,F,M,G,U;function Me(u){a[2](u)}let ae={label:"Expected peak hour cycle flow: 1-way cycle tracks",emptyOption:!0,choices:V(["<200","200-800",">800"])};a[0].proposed.trafficData.flowOneWay!==void 0&&(ae.value=a[0].proposed.trafficData.flowOneWay),e=new H({props:ae}),B.push(()=>W(e,"value",Me));function Ne(u){a[3](u)}let se={label:"Expected peak hour cycle flow: 2-way cycle tracks",emptyOption:!0,choices:V(["<300","300-1,000",">1,000"])};a[0].proposed.trafficData.flowTwoWay!==void 0&&(se.value=a[0].proposed.trafficData.flowTwoWay),s=new H({props:se}),B.push(()=>W(s,"value",Ne));function Be(u){a[4](u)}let ie={label:"Expected peak hour cycle flow: shared use cycle tracks",emptyOption:!0,choices:V(["<300",">300"])};a[0].proposed.trafficData.flowSharedUse!==void 0&&(ie.value=a[0].proposed.trafficData.flowSharedUse),f=new H({props:ie}),B.push(()=>W(f,"value",Be));function Oe(u){a[5](u)}let re={label:"Traffic flow (vpd)",emptyOption:!0,choices:V(["<2,500","2,500-5,000","5,000-10,000",">10,000"])};a[0].proposed.trafficData.trafficFlow!==void 0&&(re.value=a[0].proposed.trafficData.trafficFlow),m=new H({props:re}),B.push(()=>W(m,"value",Oe));function We(u){a[6](u)}let le={label:"Speed limit (MPH)",emptyOption:!0,choices:V(["<30","30","40","50","60","70"])};a[0].proposed.trafficData.speedLimit!==void 0&&(le.value=a[0].proposed.trafficData.speedLimit),i=new H({props:le}),B.push(()=>W(i,"value",We));function Ee(u){a[7](u)}let oe={label:"Observed 85th percentile speed (MPH)",width:3,min:0,max:120};a[0].proposed.trafficData.observedSpeed!==void 0&&(oe.value=a[0].proposed.trafficData.observedSpeed),g=new Ze({props:oe}),B.push(()=>W(g,"value",Ee));function Pe(u){a[8](u)}let fe={label:"Street function",emptyOption:!0,choices:V(["High Street (active frontages)","Residential street","Local distributor road"])};return a[0].proposed.trafficData.streetFunction!==void 0&&(fe.value=a[0].proposed.trafficData.streetFunction),M=new H({props:fe}),B.push(()=>W(M,"value",Pe)),{c(){T(e.$$.fragment),t=C(),T(s.$$.fragment),r=C(),T(f.$$.fragment),c=C(),T(m.$$.fragment),p=C(),T(i.$$.fragment),d=C(),T(g.$$.fragment),F=C(),T(M.$$.fragment)},l(u){D(e.$$.fragment,u),t=R(u),D(s.$$.fragment,u),r=R(u),D(f.$$.fragment,u),c=R(u),D(m.$$.fragment,u),p=R(u),D(i.$$.fragment,u),d=R(u),D(g.$$.fragment,u),F=R(u),D(M.$$.fragment,u)},m(u,S){L(e,u,S),y(u,t,S),L(s,u,S),y(u,r,S),L(f,u,S),y(u,c,S),L(m,u,S),y(u,p,S),L(i,u,S),y(u,d,S),L(g,u,S),y(u,F,S),L(M,u,S),U=!0},p(u,S){const ue={};!n&&S&1&&(n=!0,ue.value=u[0].proposed.trafficData.flowOneWay,O(()=>n=!1)),e.$set(ue);const ce={};!l&&S&1&&(l=!0,ce.value=u[0].proposed.trafficData.flowTwoWay,O(()=>l=!1)),s.$set(ce);const pe={};!o&&S&1&&(o=!0,pe.value=u[0].proposed.trafficData.flowSharedUse,O(()=>o=!1)),f.$set(pe);const de={};!_&&S&1&&(_=!0,de.value=u[0].proposed.trafficData.trafficFlow,O(()=>_=!1)),m.$set(de);const me={};!$&&S&1&&($=!0,me.value=u[0].proposed.trafficData.speedLimit,O(()=>$=!1)),i.$set(me);const _e={};!b&&S&1&&(b=!0,_e.value=u[0].proposed.trafficData.observedSpeed,O(()=>b=!1)),g.$set(_e);const ge={};!G&&S&1&&(G=!0,ge.value=u[0].proposed.trafficData.streetFunction,O(()=>G=!1)),M.$set(ge)},i(u){U||(v(e.$$.fragment,u),v(s.$$.fragment,u),v(f.$$.fragment,u),v(m.$$.fragment,u),v(i.$$.fragment,u),v(g.$$.fragment,u),v(M.$$.fragment,u),U=!0)},o(u){w(e.$$.fragment,u),w(s.$$.fragment,u),w(f.$$.fragment,u),w(m.$$.fragment,u),w(i.$$.fragment,u),w(g.$$.fragment,u),w(M.$$.fragment,u),U=!1},d(u){u&&(h(t),h(r),h(c),h(p),h(d),h(F)),k(e,u),k(s,u),k(f,u),k(m,u),k(i,u),k(g,u),k(M,u)}}}function ut(a){let e,n;return e=new te({props:{label:"Traffic data and additional information",$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,s){L(e,t,s),n=!0},p(t,[s]){const l={};s&513&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ct(a,e,n){let t;ne(a,N,p=>n(0,t=p));let{valid:s}=e;function l(p){a.$$.not_equal(t.proposed.trafficData.flowOneWay,p)&&(t.proposed.trafficData.flowOneWay=p,N.set(t))}function r(p){a.$$.not_equal(t.proposed.trafficData.flowTwoWay,p)&&(t.proposed.trafficData.flowTwoWay=p,N.set(t))}function f(p){a.$$.not_equal(t.proposed.trafficData.flowSharedUse,p)&&(t.proposed.trafficData.flowSharedUse=p,N.set(t))}function o(p){a.$$.not_equal(t.proposed.trafficData.trafficFlow,p)&&(t.proposed.trafficData.trafficFlow=p,N.set(t))}function c(p){a.$$.not_equal(t.proposed.trafficData.speedLimit,p)&&(t.proposed.trafficData.speedLimit=p,N.set(t))}function m(p){a.$$.not_equal(t.proposed.trafficData.observedSpeed,p)&&(t.proposed.trafficData.observedSpeed=p,N.set(t))}function _(p){a.$$.not_equal(t.proposed.trafficData.streetFunction,p)&&(t.proposed.trafficData.streetFunction=p,N.set(t))}return a.$$set=p=>{"valid"in p&&n(1,s=p.valid)},a.$$.update=()=>{a.$$.dirty&1&&n(1,s=t.proposed.trafficData.flowOneWay!=""&&t.proposed.trafficData.flowTwoWay!=""&&t.proposed.trafficData.flowSharedUse!=""&&t.proposed.trafficData.trafficFlow!=""&&t.proposed.trafficData.speedLimit!=""&&t.proposed.trafficData.observedSpeed!=null&&t.proposed.trafficData.streetFunction!="")},[t,s,l,r,f,o,c,m,_]}class pt extends K{constructor(e){super(),Q(this,e,ct,ut,J,{valid:1})}}function dt(a){let e,n="Fill out all data above to continue";return{c(){e=P("p"),e.textContent=n},l(t){e=q(t,"P",{"data-svelte-h":!0}),Se(e)!=="svelte-ma95"&&(e.textContent=n)},m(t,s){y(t,e,s)},p:Z,i:Z,o:Z,d(t){t&&h(e)}}}function mt(a){let e,n,t,s;return e=new te({props:{label:"Desirable Minimum Cross-Section",$$slots:{default:[_t]},$$scope:{ctx:a}}}),t=new te({props:{label:"Absolute Minimum Cross-Section",$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment),n=C(),T(t.$$.fragment)},l(l){D(e.$$.fragment,l),n=R(l),D(t.$$.fragment,l)},m(l,r){L(e,l,r),y(l,n,r),L(t,l,r),s=!0},p(l,r){const f={};r&34&&(f.$$scope={dirty:r,ctx:l}),e.$set(f);const o={};r&34&&(o.$$scope={dirty:r,ctx:l}),t.$set(o)},i(l){s||(v(e.$$.fragment,l),v(t.$$.fragment,l),s=!0)},o(l){w(e.$$.fragment,l),w(t.$$.fragment,l),s=!1},d(l){l&&h(n),k(e,l),k(t,l)}}}function _t(a){let e,n,t;function s(r){a[3](r)}let l={sectionType:"Desirable"};return a[1].proposed.desirableMinimumCrossSection!==void 0&&(l.lanesLeftToRight=a[1].proposed.desirableMinimumCrossSection),e=new Re({props:l}),B.push(()=>W(e,"lanesLeftToRight",s)),{c(){T(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,f){L(e,r,f),t=!0},p(r,f){const o={};!n&&f&2&&(n=!0,o.lanesLeftToRight=r[1].proposed.desirableMinimumCrossSection,O(()=>n=!1)),e.$set(o)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){k(e,r)}}}function gt(a){let e,n,t;function s(r){a[4](r)}let l={sectionType:"Absolute"};return a[1].proposed.absoluteMinimumCrossSection!==void 0&&(l.lanesLeftToRight=a[1].proposed.absoluteMinimumCrossSection),e=new Re({props:l}),B.push(()=>W(e,"lanesLeftToRight",s)),{c(){T(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,f){L(e,r,f),t=!0},p(r,f){const o={};!n&&f&2&&(n=!0,o.lanesLeftToRight=r[1].proposed.absoluteMinimumCrossSection,O(()=>n=!1)),e.$set(o)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){k(e,r)}}}function $t(a){let e,n,t,s,l,r,f,o,c;n=new He({props:{links:[["Tools","/"],["Route cross-section","/cross_section"]],current:"Proposed Cross-Sections"}});function m(d){a[2](d)}let _={};a[0]!==void 0&&(_.valid=a[0]),s=new pt({props:_}),B.push(()=>W(s,"valid",m));const p=[mt,dt],i=[];function $(d,g){return d[0]?0:1}return f=$(a),o=i[f]=p[f](a),{c(){e=P("div"),T(n.$$.fragment),t=C(),T(s.$$.fragment),r=C(),o.c(),this.h()},l(d){e=q(d,"DIV",{class:!0});var g=z(e);D(n.$$.fragment,g),t=R(g),D(s.$$.fragment,g),r=R(g),o.l(g),g.forEach(h),this.h()},h(){I(e,"class","govuk-prose")},m(d,g){y(d,e,g),L(n,e,null),E(e,t),L(s,e,null),E(e,r),i[f].m(e,null),c=!0},p(d,[g]){const b={};!l&&g&1&&(l=!0,b.valid=d[0],O(()=>l=!1)),s.$set(b);let F=f;f=$(d),f===F?i[f].p(d,g):(Fe(),w(i[F],1,1,()=>{i[F]=null}),Ce(),o=i[f],o?o.p(d,g):(o=i[f]=p[f](d),o.c()),v(o,1),o.m(e,null))},i(d){c||(v(n.$$.fragment,d),v(s.$$.fragment,d),v(o),c=!0)},o(d){w(n.$$.fragment,d),w(s.$$.fragment,d),w(o),c=!1},d(d){d&&h(e),k(n),k(s),i[f].d()}}}function ht(a,e,n){let t;ne(a,N,o=>n(1,t=o));let s=!1;function l(o){s=o,n(0,s)}function r(o){a.$$.not_equal(t.proposed.desirableMinimumCrossSection,o)&&(t.proposed.desirableMinimumCrossSection=o,N.set(t))}function f(o){a.$$.not_equal(t.proposed.absoluteMinimumCrossSection,o)&&(t.proposed.absoluteMinimumCrossSection=o,N.set(t))}return[s,t,l,r,f]}class Ct extends K{constructor(e){super(),Q(this,e,ht,$t,J,{})}}export{Ct as component};
