import{s as Ae,a as y,g as x,i as F,f as p,a7 as Re,e as b,c as k,p as ce,q as _,y as Te,n as le,r as Ve,t as B,b as U,d as E,h as d,j as Be,F as je,v as ke,a8 as ye,T as oe,P as we}from"./scheduler.mGr_ZlpV.js";import{S as Ee,i as He,c as H,b as M,m as q,t as L,a as S,d as G,g as xe,f as Fe}from"./index.rGMSHTnh.js";import{e as Ie}from"./each.K9grjjo2.js";import{b as ue}from"./paths.hXiO-s-J.js";import{B as Ye,C as Ne}from"./ClickableCard.xMY1De4-.js";import{F as Ue}from"./FileInput.C2JrU9J2.js";import{S as _e}from"./SecondaryButton.BZ-CsghR.js";/* empty css                                            */import{W as Me}from"./WarningButton.DoTAjTRB.js";import{b as qe}from"./index.DDXhjHvA.js";import{F as Ze}from"./FormElement.Dijplynf.js";import{L as Je}from"./Loading.gwHQDcdS.js";import"./index.BJs5jTJe.js";const ze="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M200-200h57l391-391-57-57-391%20391v57Zm-80%2080v-170l528-527q12-11%2026.5-17t30.5-6q16%200%2031%206t26%2018l55%2056q12%2011%2017.5%2026t5.5%2030q0%2016-5.5%2030.5T817-647L290-120H120Zm640-584-56-56%2056%2056Zm-141%2085-28-29%2057%2057-29-28Z'/%3e%3c/svg%3e",Pe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='white'%3e%3cpath%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M6%2019c0%201.1.9%202%202%202h8c1.1%200%202-.9%202-2V7H6v12zM19%204h-3.5l-1-1h-5l-1%201H5v2h14V4z'/%3e%3c/svg%3e",Xe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M480-320%20280-520l56-58%20104%20104v-326h80v326l104-104%2056%2058-200%20200ZM240-160q-33%200-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0%2033-23.5%2056.5T720-160H240Z'/%3e%3c/svg%3e";function Oe(r){let e,t,l,s=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
    . After importing, there will still be some problems:
    <ul><li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li></ul>`,n,o;return{c(){e=b("input"),t=y(),l=b("div"),l.innerHTML=s,this.h()},l(a){e=k(a,"INPUT",{class:!0,id:!0,type:!0}),t=x(a),l=k(a,"DIV",{class:!0,"data-svelte-h":!0}),ce(l)!=="svelte-1alapt1"&&(l.innerHTML=s),this.h()},h(){_(e,"class","govuk-file-upload"),_(e,"id","import-xlsx"),_(e,"type","file"),_(l,"class","govuk-hint")},m(a,h){F(a,e,h),r[4](e),F(a,t,h),F(a,l,h),n||(o=Te(e,"change",r[2]),n=!0)},p:le,d(a){a&&(p(e),p(t),p(l)),r[4](null),n=!1,o()}}}function We(r){let e,t,l,s;return e=new Ze({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),l=new Je({props:{loading:r[0]}}),{c(){H(e.$$.fragment),t=y(),H(l.$$.fragment)},l(n){M(e.$$.fragment,n),t=x(n),M(l.$$.fragment,n)},m(n,o){q(e,n,o),F(n,t,o),q(l,n,o),s=!0},p(n,[o]){const a={};o&66&&(a.$$scope={dirty:o,ctx:n}),e.$set(a);const h={};o&1&&(h.loading=n[0]),l.$set(h)},i(n){s||(L(e.$$.fragment,n),L(l.$$.fragment,n),s=!0)},o(n){S(e.$$.fragment,n),S(l.$$.fragment,n),s=!1},d(n){n&&p(t),G(e,n),G(l,n)}}}function Ke(r,e,t){let l=Re(),{xlsxImporter:s}=e,n="",o;async function a(i){let m=o.files[0].name;try{t(0,n=`Loading ${m}`);let g=await o.files[0].arrayBuffer(),D=await s(g);t(0,n=""),l("imported",{filename:qe(m,".xlsx"),data:D})}catch(g){window.alert(`Couldn't import ${m}: ${g}`),t(0,n="")}}function h(i){Ve[i?"unshift":"push"](()=>{o=i,t(1,o)})}return r.$$set=i=>{"xlsxImporter"in i&&t(3,s=i.xlsxImporter)},[n,o,a,s,h]}class Qe extends Ee{constructor(e){super(),He(this,e,Ke,We,Ae,{xlsxImporter:3})}}function Ce(r,e,t){const l=r.slice();return l[17]=e[t],l}function et(r){let e,t,l;return{c(){e=b("img"),l=B(`
      Rename this file`),this.h()},l(s){e=k(s,"IMG",{src:!0,alt:!0,class:!0}),l=E(s,`
      Rename this file`),this.h()},h(){we(e.src,t=ze)||_(e,"src",t),_(e,"alt","Rename this file"),_(e,"class","svelte-v2g1wg")},m(s,n){F(s,e,n),F(s,l,n)},p:le,d(s){s&&(p(e),p(l))}}}function tt(r){let e,t,l;return{c(){e=b("img"),l=B(`
      Download this file`),this.h()},l(s){e=k(s,"IMG",{src:!0,alt:!0,class:!0}),l=E(s,`
      Download this file`),this.h()},h(){we(e.src,t=Xe)||_(e,"src",t),_(e,"alt","Download this file"),_(e,"class","svelte-v2g1wg")},m(s,n){F(s,e,n),F(s,l,n)},p:le,d(s){s&&(p(e),p(l))}}}function lt(r){let e,t,l;return{c(){e=b("img"),l=B(`
      Delete this file`),this.h()},l(s){e=k(s,"IMG",{src:!0,alt:!0,class:!0}),l=E(s,`
      Delete this file`),this.h()},h(){we(e.src,t=Pe)||_(e,"src",t),_(e,"alt","Delete this file"),_(e,"class","svelte-v2g1wg")},m(s,n){F(s,e,n),F(s,l,n)},p:le,d(s){s&&(p(e),p(l))}}}function nt(r){let e,t,l,s,n,o;return e=new _e({props:{$$slots:{default:[et]},$$scope:{ctx:r}}}),e.$on("click",r[6]),l=new _e({props:{$$slots:{default:[tt]},$$scope:{ctx:r}}}),l.$on("click",r[7]),n=new Me({props:{$$slots:{default:[lt]},$$scope:{ctx:r}}}),n.$on("click",r[13]),{c(){H(e.$$.fragment),t=y(),H(l.$$.fragment),s=y(),H(n.$$.fragment)},l(a){M(e.$$.fragment,a),t=x(a),M(l.$$.fragment,a),s=x(a),M(n.$$.fragment,a)},m(a,h){q(e,a,h),F(a,t,h),q(l,a,h),F(a,s,h),q(n,a,h),o=!0},p(a,h){const i={};h&1048576&&(i.$$scope={dirty:h,ctx:a}),e.$set(i);const m={};h&1048576&&(m.$$scope={dirty:h,ctx:a}),l.$set(m);const g={};h&1048576&&(g.$$scope={dirty:h,ctx:a}),n.$set(g)},i(a){o||(L(e.$$.fragment,a),L(l.$$.fragment,a),L(n.$$.fragment,a),o=!0)},o(a){S(e.$$.fragment,a),S(l.$$.fragment,a),S(n.$$.fragment,a),o=!1},d(a){a&&(p(t),p(s)),G(e,a),G(l,a),G(n,a)}}}function st(r){let e;return{c(){e=B("New blank file")},l(t){e=E(t,"New blank file")},m(t,l){F(t,e,l)},d(t){t&&p(e)}}}function Le(r){let e,t,l,s;return l=new Qe({props:{xlsxImporter:r[3]}}),l.$on("imported",r[11]),{c(){e=b("hr"),t=y(),H(l.$$.fragment)},l(n){e=k(n,"HR",{}),t=x(n),M(l.$$.fragment,n)},m(n,o){F(n,e,o),F(n,t,o),q(l,n,o),s=!0},p(n,o){const a={};o&8&&(a.xlsxImporter=n[3]),l.$set(a)},i(n){s||(L(l.$$.fragment,n),s=!0)},o(n){S(l.$$.fragment,n),s=!1},d(n){n&&(p(e),p(t)),G(l,n)}}}function rt(r){let e=(r[17]==r[5]?"Currently open":r[0].describeFile(r[17]))+"",t;return{c(){t=B(e)},l(l){t=E(l,e)},m(l,s){F(l,t,s)},p(l,s){s&49&&e!==(e=(l[17]==l[5]?"Currently open":l[0].describeFile(l[17]))+"")&&Be(t,e)},d(l){l&&p(t)}}}function ot(r){let e;return{c(){e=B("Delete")},l(t){e=E(t,"Delete")},m(t,l){F(t,e,l)},d(t){t&&p(e)}}}function Se(r){let e,t,l,s,n,o;function a(){return r[14](r[17])}t=new Ne({props:{name:`File name: ${r[17]}`,disabled:r[17]===r[5],$$slots:{default:[rt]},$$scope:{ctx:r}}}),t.$on("click",a);function h(){return r[15](r[17])}return s=new Me({props:{$$slots:{default:[ot]},$$scope:{ctx:r}}}),s.$on("click",h),{c(){e=b("div"),H(t.$$.fragment),l=y(),H(s.$$.fragment),n=y(),this.h()},l(i){e=k(i,"DIV",{style:!0});var m=U(e);M(t.$$.fragment,m),l=x(m),M(s.$$.fragment,m),n=x(m),m.forEach(p),this.h()},h(){ke(e,"display","flex"),ke(e,"justify-content","space-between")},m(i,m){F(i,e,m),q(t,e,null),d(e,l),q(s,e,null),d(e,n),o=!0},p(i,m){r=i;const g={};m&16&&(g.name=`File name: ${r[17]}`),m&48&&(g.disabled=r[17]===r[5]),m&1048625&&(g.$$scope={dirty:m,ctx:r}),t.$set(g);const D={};m&1048576&&(D.$$scope={dirty:m,ctx:r}),s.$set(D)},i(i){o||(L(t.$$.fragment,i),L(s.$$.fragment,i),o=!0)},o(i){S(t.$$.fragment,i),S(s.$$.fragment,i),o=!1},d(i){i&&p(e),G(t),G(s)}}}function at(r){let e,t,l,s,n,o,a=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later. You can export the file to your computer to share
    with someone else, and import from a file below.`,h,i,m,g,D,R,ne,T,P,ee,se,V,w,Z,ae="Create or import a file",re,f,I,A,J,X,me,de,N,te,ve="Load a saved file",he,pe,z,ge,ie,O;T=new Ye({props:{$$slots:{default:[nt]},$$scope:{ctx:r}}}),f=new _e({props:{$$slots:{default:[st]},$$scope:{ctx:r}}}),f.$on("click",r[9]),X=new Ue({props:{label:"Import from a .json file",onLoad:r[10]}});let v=r[3]!=null&&Le(r),W=Ie(r[4]),$=[];for(let u=0;u<W.length;u+=1)$[u]=Se(Ce(r,W,u));const Ge=u=>S($[u],1,1,()=>{$[u]=null});return{c(){e=b("div"),t=b("a"),l=B("Back to overview"),n=y(),o=b("p"),o.textContent=a,h=y(),i=b("p"),m=B("You're currently editing "),g=b("u"),D=B(r[5]),R=B(`
    .`),ne=y(),H(T.$$.fragment),P=y(),ee=b("hr"),se=y(),V=b("div"),w=b("div"),Z=b("h2"),Z.textContent=ae,re=y(),H(f.$$.fragment),I=y(),A=b("hr"),J=y(),H(X.$$.fragment),me=y(),v&&v.c(),de=y(),N=b("div"),te=b("h2"),te.textContent=ve,he=y();for(let u=0;u<$.length;u+=1)$[u].c();pe=y(),z=b("a"),ge=B("Back to overview"),this.h()},l(u){e=k(u,"DIV",{class:!0});var c=U(e);t=k(c,"A",{href:!0,class:!0});var j=U(t);l=E(j,"Back to overview"),j.forEach(p),n=x(c),o=k(c,"P",{"data-svelte-h":!0}),ce(o)!=="svelte-1yvzirp"&&(o.textContent=a),h=x(c),i=k(c,"P",{});var K=U(i);m=E(K,"You're currently editing "),g=k(K,"U",{});var C=U(g);D=E(C,r[5]),C.forEach(p),R=E(K,`
    .`),K.forEach(p),ne=x(c),M(T.$$.fragment,c),P=x(c),ee=k(c,"HR",{}),se=x(c),V=k(c,"DIV",{class:!0});var Q=U(V);w=k(Q,"DIV",{class:!0});var Y=U(w);Z=k(Y,"H2",{"data-svelte-h":!0}),ce(Z)!=="svelte-1yqhw3l"&&(Z.textContent=ae),re=x(Y),M(f.$$.fragment,Y),I=x(Y),A=k(Y,"HR",{}),J=x(Y),M(X.$$.fragment,Y),me=x(Y),v&&v.l(Y),Y.forEach(p),de=x(Q),N=k(Q,"DIV",{class:!0});var fe=U(N);te=k(fe,"H2",{"data-svelte-h":!0}),ce(te)!=="svelte-oj70x0"&&(te.textContent=ve),he=x(fe);for(let $e=0;$e<$.length;$e+=1)$[$e].l(fe);fe.forEach(p),Q.forEach(p),pe=x(c),z=k(c,"A",{href:!0,class:!0});var be=U(z);ge=E(be,"Back to overview"),be.forEach(p),c.forEach(p),this.h()},h(){_(t,"href",s=ue+"/"+r[0].prefix),_(t,"class","govuk-back-link"),_(w,"class","govuk-grid-column-one-half"),_(N,"class","govuk-grid-column-one-half"),_(V,"class","govuk-grid-row"),_(z,"href",ie=ue+"/"+r[0].prefix),_(z,"class","govuk-back-link"),_(e,"class","govuk-width-container")},m(u,c){F(u,e,c),d(e,t),d(t,l),d(e,n),d(e,o),d(e,h),d(e,i),d(i,m),d(i,g),d(g,D),d(i,R),d(e,ne),q(T,e,null),d(e,P),d(e,ee),d(e,se),d(e,V),d(V,w),d(w,Z),d(w,re),q(f,w,null),d(w,I),d(w,A),d(w,J),q(X,w,null),d(w,me),v&&v.m(w,null),d(V,de),d(V,N),d(N,te),d(N,he);for(let j=0;j<$.length;j+=1)$[j]&&$[j].m(N,null);d(e,pe),d(e,z),d(z,ge),O=!0},p(u,[c]){(!O||c&1&&s!==(s=ue+"/"+u[0].prefix))&&_(t,"href",s),(!O||c&32)&&Be(D,u[5]);const j={};c&1048608&&(j.$$scope={dirty:c,ctx:u}),T.$set(j);const K={};if(c&1048576&&(K.$$scope={dirty:c,ctx:u}),f.$set(K),u[3]!=null?v?(v.p(u,c),c&8&&L(v,1)):(v=Le(u),v.c(),L(v,1),v.m(w,null)):v&&(xe(),S(v,1,1,()=>{v=null}),Fe()),c&4401){W=Ie(u[4]);let C;for(C=0;C<W.length;C+=1){const Q=Ce(u,W,C);$[C]?($[C].p(Q,c),L($[C],1)):($[C]=Se(Q),$[C].c(),L($[C],1),$[C].m(N,null))}for(xe(),C=W.length;C<$.length;C+=1)Ge(C);Fe()}(!O||c&1&&ie!==(ie=ue+"/"+u[0].prefix))&&_(z,"href",ie)},i(u){if(!O){L(T.$$.fragment,u),L(f.$$.fragment,u),L(X.$$.fragment,u),L(v);for(let c=0;c<W.length;c+=1)L($[c]);O=!0}},o(u){S(T.$$.fragment,u),S(f.$$.fragment,u),S(X.$$.fragment,u),S(v),$=$.filter(Boolean);for(let c=0;c<$.length;c+=1)S($[c]);O=!1},d(u){u&&p(e),G(T),G(f),G(X),v&&v.d(),je($,u)}}}function De(r,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",r),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function it(r,e,t){let l,s=le,n=()=>(s(),s=ye(g,f=>t(16,l=f)),g),o,a=le,h=()=>(a(),a=ye(m,f=>t(5,o=f)),m);r.$$.on_destroy.push(()=>s()),r.$$.on_destroy.push(()=>a());let{files:i}=e,{currentFile:m}=e;h();let{state:g}=e;n();let{xlsxImporter:D=null}=e,R=i.getFileList();function ne(){let f=window.prompt(`Rename file ${o} to what?`,o);if(f){let I=i.key(o),A=window.localStorage.getItem(I);window.localStorage.setItem(i.key(f),A),window.localStorage.removeItem(I),oe(m,o=f,o),t(4,R=i.getFileList())}}function T(){De(o+".json",JSON.stringify(l))}async function P(f){if(window.confirm(`Really delete file ${f}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`)){let I=i.key(f);De(`${f}.json`,window.localStorage.getItem(I)),window.localStorage.removeItem(I),f==o?await ee():t(4,R=i.saveAndGetFileList(o,l))}}async function ee(){oe(m,o=i.newFilename(),o),oe(g,l=i.emptyState(),l),t(4,R=i.saveAndGetFileList(o,l))}async function se(f,I){let A=qe(f,".json");try{let J=JSON.parse(I);i.validate(J),t(4,R=i.saveAndGetFileList(A,J)),await w(A)}catch(J){window.alert(`Couldn't load ${A}: ${J}`)}}async function V(f){let{filename:I,data:A}=f.detail;t(4,R=i.saveAndGetFileList(I,A)),await w(I)}async function w(f){try{let I=i.loadFile(f);oe(m,o=f,o),oe(g,l=I,l)}catch(I){window.alert(`Couldn't load ${f}: ${I}`)}}const Z=()=>P(o),ae=f=>w(f),re=f=>P(f);return r.$$set=f=>{"files"in f&&t(0,i=f.files),"currentFile"in f&&h(t(1,m=f.currentFile)),"state"in f&&n(t(2,g=f.state)),"xlsxImporter"in f&&t(3,D=f.xlsxImporter)},[i,m,g,D,R,o,ne,T,P,ee,se,V,w,Z,ae,re]}class kt extends Ee{constructor(e){super(),He(this,e,it,at,Ae,{files:0,currentFile:1,state:2,xlsxImporter:3})}}export{kt as F};
