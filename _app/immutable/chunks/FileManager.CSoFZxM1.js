import{s as we,r as ke,a as F,g as C,i as x,w as Le,f as h,U as Se,t as Z,d as ee,e as k,c as y,q,y as ye,n as ne,p as K,l as Ee,b as j,v as Ie,h as g,u as Te,m as Ae,o as De,j as ae,H as de,V as le,K as He,W as Me}from"./scheduler.DGwhun8C.js";import{S as Fe,i as Ce,e as Xe,c as N,a as V,m as W,t as T,b as H,d as G,g as fe,f as ue}from"./index.B2vZYn3d.js";import{e as pe}from"./each.osbS1YKp.js";import{b as oe}from"./paths.C3mfD0Mc.js";import{d as Be}from"./index.7e7DDRSl.js";import{S as je,A as Re}from"./ServiceHeader.C1DxB1kx.js";import{F as Ye}from"./FileInput.CWNltkd7.js";import"./index.DHxTZR2f.js";import{S as se}from"./SecondaryButton.zQkvdoBX.js";import{W as Ne}from"./WarningButton.B3j9Frnm.js";import{a as xe}from"./index.BrSDZHJV.js";import{F as Ve}from"./FormElement.Cd26lsYY.js";import{W as We}from"./WarningText.wRiJ9IQ1.js";import{L as Ge}from"./Loading.CHcKXFRD.js";import{M as Pe}from"./Modal.6uoLGhmw.js";import{g as _e}from"./entry.DNTeybAl.js";function qe(n){let e;return{c(){e=Z("Import from XLSX file")},l(t){e=ee(t,"Import from XLSX file")},m(t,l){x(t,e,l)},d(t){t&&h(e)}}}function Je(n){let e,t,l;return{c(){e=k("input"),this.h()},l(a){e=y(a,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){q(e,"class","govuk-file-upload"),q(e,"id","import-xlsx"),q(e,"type","file")},m(a,r){x(a,e,r),n[6](e),t||(l=ye(e,"change",n[3]),t=!0)},p:ne,d(a){a&&h(e),n[6](null),t=!1,l()}}}function Oe(n){let e,t=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
      . After importing, there will still be some problems:`,l,a,r=`<li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li>`;return{c(){e=k("p"),e.innerHTML=t,l=F(),a=k("ul"),a.innerHTML=r},l(f){e=y(f,"P",{"data-svelte-h":!0}),K(e)!=="svelte-1ykh4hv"&&(e.innerHTML=t),l=C(f),a=y(f,"UL",{"data-svelte-h":!0}),K(a)!=="svelte-1tt4pqo"&&(a.innerHTML=r)},m(f,i){x(f,e,i),x(f,l,i),x(f,a,i)},p:ne,d(f){f&&(h(e),h(l),h(a))}}}function Ue(n){let e;return{c(){e=Z("Close")},l(t){e=ee(t,"Close")},m(t,l){x(t,e,l)},d(t){t&&h(e)}}}function ze(n){let e,t,l,a,r,f;return e=new Ve({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[Je]},$$scope:{ctx:n}}}),l=new We({props:{$$slots:{default:[Oe]},$$scope:{ctx:n}}}),r=new se({props:{$$slots:{default:[Ue]},$$scope:{ctx:n}}}),r.$on("click",n[7]),{c(){N(e.$$.fragment),t=F(),N(l.$$.fragment),a=F(),N(r.$$.fragment)},l(i){V(e.$$.fragment,i),t=C(i),V(l.$$.fragment,i),a=C(i),V(r.$$.fragment,i)},m(i,m){W(e,i,m),x(i,t,m),W(l,i,m),x(i,a,m),W(r,i,m),f=!0},p(i,m){const _={};m&1028&&(_.$$scope={dirty:m,ctx:i}),e.$set(_);const s={};m&1024&&(s.$$scope={dirty:m,ctx:i}),l.$set(s);const o={};m&1024&&(o.$$scope={dirty:m,ctx:i}),r.$set(o)},i(i){f||(T(e.$$.fragment,i),T(l.$$.fragment,i),T(r.$$.fragment,i),f=!0)},o(i){H(e.$$.fragment,i),H(l.$$.fragment,i),H(r.$$.fragment,i),f=!1},d(i){i&&(h(t),h(a)),G(e,i),G(l,i),G(r,i)}}}function Ke(n){let e,t,l,a,r,f,i;e=new se({props:{$$slots:{default:[qe]},$$scope:{ctx:n}}}),e.$on("click",n[5]),l=new Ge({props:{loading:n[0]}});function m(s){n[8](s)}let _={title:"Import from XLSX file",$$slots:{default:[ze]},$$scope:{ctx:n}};return n[1]!==void 0&&(_.open=n[1]),r=new Pe({props:_}),ke.push(()=>Xe(r,"open",m)),{c(){N(e.$$.fragment),t=F(),N(l.$$.fragment),a=F(),N(r.$$.fragment)},l(s){V(e.$$.fragment,s),t=C(s),V(l.$$.fragment,s),a=C(s),V(r.$$.fragment,s)},m(s,o){W(e,s,o),x(s,t,o),W(l,s,o),x(s,a,o),W(r,s,o),i=!0},p(s,[o]){const b={};o&1024&&(b.$$scope={dirty:o,ctx:s}),e.$set(b);const u={};o&1&&(u.loading=s[0]),l.$set(u);const $={};o&1030&&($.$$scope={dirty:o,ctx:s}),!f&&o&2&&(f=!0,$.open=s[1],Le(()=>f=!1)),r.$set($)},i(s){i||(T(e.$$.fragment,s),T(l.$$.fragment,s),T(r.$$.fragment,s),i=!0)},o(s){H(e.$$.fragment,s),H(l.$$.fragment,s),H(r.$$.fragment,s),i=!1},d(s){s&&(h(t),h(a)),G(e,s),G(l,s),G(r,s)}}}function Qe(n,e,t){let l=Se(),{xlsxImporter:a}=e,r="",f=!1,i;async function m(u){let $=i.files[0].name;try{t(0,r=`Loading ${$}`);let d=await i.files[0].arrayBuffer(),v=await a(d);t(0,r=""),l("imported",{filename:xe($,".xlsx"),data:v})}catch(d){window.alert(`Couldn't import ${$}: ${d}`),t(0,r="")}}const _=()=>t(1,f=!0);function s(u){ke[u?"unshift":"push"](()=>{i=u,t(2,i)})}const o=()=>t(1,f=!1);function b(u){f=u,t(1,f)}return n.$$set=u=>{"xlsxImporter"in u&&t(4,a=u.xlsxImporter)},[r,f,i,m,a,_,s,o,b]}class Ze extends Fe{constructor(e){super(),Ce(this,e,Qe,Ke,we,{xlsxImporter:4})}}function $e(n,e,t){const l=n.slice();return l[19]=e[t],l}const et=n=>({}),he=n=>({});function ge(n){let e,t,l="You are editing:",a,r,f,i;return{c(){e=k("p"),t=k("b"),t.textContent=l,a=F(),r=k("a"),f=Z(n[6]),this.h()},l(m){e=y(m,"P",{});var _=j(e);t=y(_,"B",{"data-svelte-h":!0}),K(t)!=="svelte-1kt2tqj"&&(t.textContent=l),a=C(_),r=y(_,"A",{href:!0});var s=j(r);f=ee(s,n[6]),s.forEach(h),_.forEach(h),this.h()},h(){q(r,"href",i=`${oe}/${n[0].prefix}overview`)},m(m,_){x(m,e,_),g(e,t),g(e,a),g(e,r),g(r,f)},p(m,_){_&64&&ae(f,m[6]),_&1&&i!==(i=`${oe}/${m[0].prefix}overview`)&&q(r,"href",i)},d(m){m&&h(e)}}}function tt(n){let e,t="No saved files";return{c(){e=k("p"),e.textContent=t},l(l){e=y(l,"P",{"data-svelte-h":!0}),K(e)!=="svelte-yojds1"&&(e.textContent=t)},m(l,a){x(l,e,a)},p:ne,i:ne,o:ne,d(l){l&&h(e)}}}function lt(n){let e,t="Manage existing files",l,a,r,f="<tr><th>File name</th> <th>Scheme name</th> <th>Action</th></tr>",i,m,_,s=pe(n[5]),o=[];for(let u=0;u<s.length;u+=1)o[u]=be($e(n,s,u));const b=u=>H(o[u],1,1,()=>{o[u]=null});return{c(){e=k("h2"),e.textContent=t,l=F(),a=k("table"),r=k("thead"),r.innerHTML=f,i=F(),m=k("tbody");for(let u=0;u<o.length;u+=1)o[u].c()},l(u){e=y(u,"H2",{"data-svelte-h":!0}),K(e)!=="svelte-1d50rjn"&&(e.textContent=t),l=C(u),a=y(u,"TABLE",{});var $=j(a);r=y($,"THEAD",{"data-svelte-h":!0}),K(r)!=="svelte-gvkk9f"&&(r.innerHTML=f),i=C($),m=y($,"TBODY",{});var d=j(m);for(let v=0;v<o.length;v+=1)o[v].l(d);d.forEach(h),$.forEach(h)},m(u,$){x(u,e,$),x(u,l,$),x(u,a,$),g(a,r),g(a,i),g(a,m);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(m,null);_=!0},p(u,$){if($&4513){s=pe(u[5]);let d;for(d=0;d<s.length;d+=1){const v=$e(u,s,d);o[d]?(o[d].p(v,$),T(o[d],1)):(o[d]=be(v),o[d].c(),T(o[d],1),o[d].m(m,null))}for(fe(),d=s.length;d<o.length;d+=1)b(d);ue()}},i(u){if(!_){for(let $=0;$<s.length;$+=1)T(o[$]);_=!0}},o(u){o=o.filter(Boolean);for(let $=0;$<o.length;$+=1)H(o[$]);_=!1},d(u){u&&(h(e),h(l),h(a)),He(o,u)}}}function nt(n){let e;return{c(){e=Z("Rename")},l(t){e=ee(t,"Rename")},m(t,l){x(t,e,l)},d(t){t&&h(e)}}}function rt(n){let e;return{c(){e=Z("Delete")},l(t){e=ee(t,"Delete")},m(t,l){x(t,e,l)},d(t){t&&h(e)}}}function be(n){let e,t,l,a=n[19]+"",r,f,i,m=n[0].describeFile(n[19])+"",_,s,o,b,u,$,d,v,L,U,A;function J(){return n[14](n[19])}function re(){return n[15](n[19])}u=new se({props:{$$slots:{default:[nt]},$$scope:{ctx:n}}}),u.$on("click",re);function z(){return n[16](n[19])}return d=new Ne({props:{$$slots:{default:[rt]},$$scope:{ctx:n}}}),d.$on("click",z),{c(){e=k("tr"),t=k("td"),l=k("a"),r=Z(a),f=F(),i=k("td"),_=Z(m),s=F(),o=k("td"),b=k("div"),N(u.$$.fragment),$=F(),N(d.$$.fragment),v=F(),this.h()},l(I){e=y(I,"TR",{});var S=j(e);t=y(S,"TD",{});var O=j(t);l=y(O,"A",{href:!0});var c=j(l);r=ee(c,a),c.forEach(h),O.forEach(h),f=C(S),i=y(S,"TD",{});var w=j(i);_=ee(w,m),w.forEach(h),s=C(S),o=y(S,"TD",{});var B=j(o);b=y(B,"DIV",{class:!0,style:!0});var M=j(b);V(u.$$.fragment,M),$=C(M),V(d.$$.fragment,M),M.forEach(h),B.forEach(h),v=C(S),S.forEach(h),this.h()},h(){q(l,"href","#"),q(b,"class","govuk-button-group"),Ie(b,"flex-wrap","nowrap")},m(I,S){x(I,e,S),g(e,t),g(t,l),g(l,r),g(e,f),g(e,i),g(i,_),g(e,s),g(e,o),g(o,b),W(u,b,null),g(b,$),W(d,b,null),g(e,v),L=!0,U||(A=ye(l,"click",Me(J)),U=!0)},p(I,S){n=I,(!L||S&32)&&a!==(a=n[19]+"")&&ae(r,a),(!L||S&33)&&m!==(m=n[0].describeFile(n[19])+"")&&ae(_,m);const O={};S&131072&&(O.$$scope={dirty:S,ctx:n}),u.$set(O);const c={};S&131072&&(c.$$scope={dirty:S,ctx:n}),d.$set(c)},i(I){L||(T(u.$$.fragment,I),T(d.$$.fragment,I),L=!0)},o(I){H(u.$$.fragment,I),H(d.$$.fragment,I),L=!1},d(I){I&&h(e),G(u),G(d),U=!1,A()}}}function ot(n){let e;return{c(){e=Z("New blank scheme file")},l(t){e=ee(t,"New blank scheme file")},m(t,l){x(t,e,l)},d(t){t&&h(e)}}}function ve(n){let e,t,l,a;return l=new Ze({props:{xlsxImporter:n[4]}}),l.$on("imported",n[11]),{c(){e=k("hr"),t=F(),N(l.$$.fragment)},l(r){e=y(r,"HR",{}),t=C(r),V(l.$$.fragment,r)},m(r,f){x(r,e,f),x(r,t,f),W(l,r,f),a=!0},p(r,f){const i={};f&16&&(i.xlsxImporter=r[4]),l.$set(i)},i(r){a||(T(l.$$.fragment,r),a=!0)},o(r){H(l.$$.fragment,r),a=!1},d(r){r&&(h(e),h(t)),G(l,r)}}}function st(n){let e,t,l,a,r,f,i="Manage my schemes",m,_,s,o,b,u=`All files are auto-saved in your browser's local storage. You can close
        your browser and resume later. You can export the file to your computer
        to share with someone else, and import from a file below.`,$,d,v,L,U,A,J,re="Create or import a file",z,I,S,O,c,w,B,M;e=new je({props:{service:n[3]}}),a=new Re({});const ie=n[13].description,R=Ee(ie,n,n[17],he);let X=n[6]&&ge(n);const ce=[lt,tt],Q=[];function me(p,E){return p[5].length>0?0:1}v=me(n),L=Q[v]=ce[v](n),I=new se({props:{$$slots:{default:[ot]},$$scope:{ctx:n}}}),I.$on("click",n[9]),w=new Ye({props:{label:"Import from a .json file",onLoad:n[10]}});let D=n[4]!=null&&ve(n);return{c(){N(e.$$.fragment),t=F(),l=k("div"),N(a.$$.fragment),r=F(),f=k("h1"),f.textContent=i,m=F(),_=k("div"),s=k("div"),R&&R.c(),o=F(),b=k("p"),b.textContent=u,$=F(),X&&X.c(),d=F(),L.c(),U=F(),A=k("div"),J=k("h2"),J.textContent=re,z=F(),N(I.$$.fragment),S=F(),O=k("hr"),c=F(),N(w.$$.fragment),B=F(),D&&D.c(),this.h()},l(p){V(e.$$.fragment,p),t=C(p),l=y(p,"DIV",{class:!0});var E=j(l);V(a.$$.fragment,E),r=C(E),f=y(E,"H1",{style:!0,"data-svelte-h":!0}),K(f)!=="svelte-xibb3k"&&(f.textContent=i),m=C(E),_=y(E,"DIV",{class:!0});var te=j(_);s=y(te,"DIV",{class:!0});var P=j(s);R&&R.l(P),o=C(P),b=y(P,"P",{"data-svelte-h":!0}),K(b)!=="svelte-wkz669"&&(b.textContent=u),$=C(P),X&&X.l(P),d=C(P),L.l(P),P.forEach(h),U=C(te),A=y(te,"DIV",{class:!0});var Y=j(A);J=y(Y,"H2",{class:!0,"data-svelte-h":!0}),K(J)!=="svelte-hifbpd"&&(J.textContent=re),z=C(Y),V(I.$$.fragment,Y),S=C(Y),O=y(Y,"HR",{}),c=C(Y),V(w.$$.fragment,Y),B=C(Y),D&&D.l(Y),Y.forEach(h),te.forEach(h),E.forEach(h),this.h()},h(){Ie(f,"margin-top","30px"),q(s,"class","govuk-grid-column-two-thirds"),q(J,"class","green-bar svelte-1z050ke"),q(A,"class","govuk-grid-column-one-third"),q(_,"class","govuk-grid-row"),q(l,"class","govuk-width-container")},m(p,E){W(e,p,E),x(p,t,E),x(p,l,E),W(a,l,null),g(l,r),g(l,f),g(l,m),g(l,_),g(_,s),R&&R.m(s,null),g(s,o),g(s,b),g(s,$),X&&X.m(s,null),g(s,d),Q[v].m(s,null),g(_,U),g(_,A),g(A,J),g(A,z),W(I,A,null),g(A,S),g(A,O),g(A,c),W(w,A,null),g(A,B),D&&D.m(A,null),M=!0},p(p,[E]){const te={};E&8&&(te.service=p[3]),e.$set(te),R&&R.p&&(!M||E&131072)&&Te(R,ie,p,p[17],M?De(ie,p[17],E,et):Ae(p[17]),he),p[6]?X?X.p(p,E):(X=ge(p),X.c(),X.m(s,d)):X&&(X.d(1),X=null);let P=v;v=me(p),v===P?Q[v].p(p,E):(fe(),H(Q[P],1,1,()=>{Q[P]=null}),ue(),L=Q[v],L?L.p(p,E):(L=Q[v]=ce[v](p),L.c()),T(L,1),L.m(s,null));const Y={};E&131072&&(Y.$$scope={dirty:E,ctx:p}),I.$set(Y),p[4]!=null?D?(D.p(p,E),E&16&&T(D,1)):(D=ve(p),D.c(),T(D,1),D.m(A,null)):D&&(fe(),H(D,1,1,()=>{D=null}),ue())},i(p){M||(T(e.$$.fragment,p),T(a.$$.fragment,p),T(R,p),T(L),T(I.$$.fragment,p),T(w.$$.fragment,p),T(D),M=!0)},o(p){H(e.$$.fragment,p),H(a.$$.fragment,p),H(R,p),H(L),H(I.$$.fragment,p),H(w.$$.fragment,p),H(D),M=!1},d(p){p&&(h(t),h(l)),G(e,p),G(a),R&&R.d(p),X&&X.d(),Q[v].d(),G(I),G(w),D&&D.d()}}}function it(n,e,t){let l,a=ne,r=()=>(a(),a=de(u,c=>t(18,l=c)),u),f,i=ne,m=()=>(i(),i=de(b,c=>t(6,f=c)),b);n.$$.on_destroy.push(()=>a()),n.$$.on_destroy.push(()=>i());let{$$slots:_={},$$scope:s}=e,{files:o}=e,{currentFile:b}=e;m();let{state:u}=e;r();let{service:$}=e,{xlsxImporter:d=null}=e,v=o.getFileList();function L(c){let w=window.prompt(`Rename file ${c} to what?`,c);if(w){let B=o.key(c),M=window.localStorage.getItem(B);window.localStorage.setItem(o.key(w),M),window.localStorage.removeItem(B),t(5,v=o.getFileList()),f==c&&le(b,f=w,f)}}function U(c){if(!window.confirm(`Really delete file ${c}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let w=o.key(c);Be(`${c}.json`,window.localStorage.getItem(w)),window.localStorage.removeItem(w),f==c&&(le(b,f="",f),le(u,l=o.emptyState(),l),window.localStorage.setItem(o.key("last-opened-file"),"")),t(5,v=o.getFileList())}function A(){let c=window.prompt("What do you want to name your new file?");c&&(le(b,f=c,f),le(u,l=o.emptyState(),l),t(5,v=o.saveAndGetFileList(f,l)),_e(`${oe}/${o.prefix}overview`))}function J(c,w){let B=xe(c,".json");try{let M=JSON.parse(w);o.validate(M),t(5,v=o.saveAndGetFileList(B,M)),z(B)}catch(M){window.alert(`Couldn't load ${B}: ${M}`)}}function re(c){let{filename:w,data:B}=c.detail;t(5,v=o.saveAndGetFileList(w,B)),z(w)}function z(c){try{let w=o.loadFile(c);le(b,f=c,f),le(u,l=w,l),_e(`${oe}/${o.prefix}overview`)}catch(w){window.alert(`Couldn't load ${c}: ${w}`)}return!1}const I=c=>z(c),S=c=>L(c),O=c=>U(c);return n.$$set=c=>{"files"in c&&t(0,o=c.files),"currentFile"in c&&m(t(1,b=c.currentFile)),"state"in c&&r(t(2,u=c.state)),"service"in c&&t(3,$=c.service),"xlsxImporter"in c&&t(4,d=c.xlsxImporter),"$$scope"in c&&t(17,s=c.$$scope)},[o,b,u,$,d,v,f,L,U,A,J,re,z,_,I,S,O,s]}class It extends Fe{constructor(e){super(),Ce(this,e,it,st,we,{files:0,currentFile:1,state:2,service:3,xlsxImporter:4})}}export{It as F};
