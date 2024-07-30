import{s as Ge,a as y,g as I,i as x,f as $,a7 as Te,e as F,c as C,m as de,p as g,B as Ye,n as re,w as Ne,l as Ue,t as H,b as O,d as j,h as m,j as He,u as Je,r as ze,v as Xe,G as Ze,q as xe,a8 as Se,T as fe,o as Ie}from"./scheduler.D5JRtHaf.js";import{S as je,i as Me,c as M,a as R,m as q,t as b,b as L,d as V,g as be,f as ke}from"./index.Xm1AgzMF.js";import{e as Le}from"./each.C9BadmQM.js";import{L as Oe,d as Pe}from"./download.C5wbvPO0.js";import{b as ue}from"./paths.B9tzTWF6.js";import{g as We}from"./entry.CPEtGByo.js";import{B as Ke,C as Qe}from"./ClickableCard.BhW8XYpY.js";import{D as et}from"./DefaultButton.BHwS446X.js";import{F as tt}from"./FileInput.DAizlmj_.js";import{S as ye}from"./SecondaryButton.DxO4nu9r.js";/* empty css                                            */import{W as Re}from"./WarningButton.jEqntaGg.js";import{b as qe}from"./index.CmR1tCeb.js";import{F as lt}from"./FormElement.DGCXCgcp.js";import"./index.BN7cLkS9.js";const nt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M200-200h57l391-391-57-57-391%20391v57Zm-80%2080v-170l528-527q12-11%2026.5-17t30.5-6q16%200%2031%206t26%2018l55%2056q12%2011%2017.5%2026t5.5%2030q0%2016-5.5%2030.5T817-647L290-120H120Zm640-584-56-56%2056%2056Zm-141%2085-28-29%2057%2057-29-28Z'/%3e%3c/svg%3e",rt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='white'%3e%3cpath%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M6%2019c0%201.1.9%202%202%202h8c1.1%200%202-.9%202-2V7H6v12zM19%204h-3.5l-1-1h-5l-1%201H5v2h14V4z'/%3e%3c/svg%3e";function st(s){let e,t,l,r=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
    . After importing, there will still be some problems:
    <ul><li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li></ul>`,n,o;return{c(){e=F("input"),t=y(),l=F("div"),l.innerHTML=r,this.h()},l(a){e=C(a,"INPUT",{class:!0,id:!0,type:!0}),t=I(a),l=C(a,"DIV",{class:!0,"data-svelte-h":!0}),de(l)!=="svelte-1alapt1"&&(l.innerHTML=r),this.h()},h(){g(e,"class","govuk-file-upload"),g(e,"id","import-xlsx"),g(e,"type","file"),g(l,"class","govuk-hint")},m(a,p){x(a,e,p),s[4](e),x(a,t,p),x(a,l,p),n||(o=Ye(e,"change",s[2]),n=!0)},p:re,d(a){a&&($(e),$(t),$(l)),s[4](null),n=!1,o()}}}function ot(s){let e,t,l,r;return e=new lt({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[st]},$$scope:{ctx:s}}}),l=new Oe({props:{loading:s[0]}}),{c(){M(e.$$.fragment),t=y(),M(l.$$.fragment)},l(n){R(e.$$.fragment,n),t=I(n),R(l.$$.fragment,n)},m(n,o){q(e,n,o),x(n,t,o),q(l,n,o),r=!0},p(n,[o]){const a={};o&66&&(a.$$scope={dirty:o,ctx:n}),e.$set(a);const p={};o&1&&(p.loading=n[0]),l.$set(p)},i(n){r||(b(e.$$.fragment,n),b(l.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),L(l.$$.fragment,n),r=!1},d(n){n&&$(t),V(e,n),V(l,n)}}}function at(s,e,t){let l=Te(),{xlsxImporter:r}=e,n="",o;async function a(w){let v=o.files[0].name;try{t(0,n=`Loading ${v}`);let c=await o.files[0].arrayBuffer(),d=await r(c);t(0,n=""),l("imported",{filename:qe(v,".xlsx"),data:d})}catch(c){window.alert(`Couldn't import ${v}: ${c}`),t(0,n="")}}function p(w){Ne[w?"unshift":"push"](()=>{o=w,t(1,o)})}return s.$$set=w=>{"xlsxImporter"in w&&t(3,r=w.xlsxImporter)},[n,o,a,r,p]}class it extends je{constructor(e){super(),Me(this,e,at,ot,Ge,{xlsxImporter:3})}}function De(s,e,t){const l=s.slice();return l[20]=e[t],l}function ft(s){let e,t,l;return{c(){e=F("img"),l=H(`
      Rename this file`),this.h()},l(r){e=C(r,"IMG",{src:!0,alt:!0,class:!0}),l=j(r,`
      Rename this file`),this.h()},h(){Ie(e.src,t=nt)||g(e,"src",t),g(e,"alt","Rename this file"),g(e,"class","svelte-v2g1wg")},m(r,n){x(r,e,n),x(r,l,n)},p:re,d(r){r&&($(e),$(l))}}}function ut(s){let e,t,l;return{c(){e=F("img"),l=H(`
      Export .json`),this.h()},l(r){e=C(r,"IMG",{src:!0,alt:!0,class:!0}),l=j(r,`
      Export .json`),this.h()},h(){Ie(e.src,t=Pe)||g(e,"src",t),g(e,"alt","Export .json"),g(e,"class","svelte-v2g1wg")},m(r,n){x(r,e,n),x(r,l,n)},p:re,d(r){r&&($(e),$(l))}}}function ct(s){let e,t,l;return{c(){e=F("img"),l=H(`
      Delete this file`),this.h()},l(r){e=C(r,"IMG",{src:!0,alt:!0,class:!0}),l=j(r,`
      Delete this file`),this.h()},h(){Ie(e.src,t=rt)||g(e,"src",t),g(e,"alt","Delete this file"),g(e,"class","svelte-v2g1wg")},m(r,n){x(r,e,n),x(r,l,n)},p:re,d(r){r&&($(e),$(l))}}}function mt(s){let e,t,l,r,n,o;return e=new ye({props:{$$slots:{default:[ft]},$$scope:{ctx:s}}}),e.$on("click",s[6]),l=new ye({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),l.$on("click",s[7]),n=new Re({props:{$$slots:{default:[ct]},$$scope:{ctx:s}}}),n.$on("click",s[14]),{c(){M(e.$$.fragment),t=y(),M(l.$$.fragment),r=y(),M(n.$$.fragment)},l(a){R(e.$$.fragment,a),t=I(a),R(l.$$.fragment,a),r=I(a),R(n.$$.fragment,a)},m(a,p){q(e,a,p),x(a,t,p),q(l,a,p),x(a,r,p),q(n,a,p),o=!0},p(a,p){const w={};p&262144&&(w.$$scope={dirty:p,ctx:a}),e.$set(w);const v={};p&262144&&(v.$$scope={dirty:p,ctx:a}),l.$set(v);const c={};p&262144&&(c.$$scope={dirty:p,ctx:a}),n.$set(c)},i(a){o||(b(e.$$.fragment,a),b(l.$$.fragment,a),b(n.$$.fragment,a),o=!0)},o(a){L(e.$$.fragment,a),L(l.$$.fragment,a),L(n.$$.fragment,a),o=!1},d(a){a&&($(t),$(r)),V(e,a),V(l,a),V(n,a)}}}function pt(s){let e;return{c(){e=H("New blank file")},l(t){e=j(t,"New blank file")},m(t,l){x(t,e,l)},d(t){t&&$(e)}}}function Ee(s){let e,t,l,r;return l=new it({props:{xlsxImporter:s[3]}}),l.$on("imported",s[11]),{c(){e=F("hr"),t=y(),M(l.$$.fragment)},l(n){e=C(n,"HR",{}),t=I(n),R(l.$$.fragment,n)},m(n,o){x(n,e,o),x(n,t,o),q(l,n,o),r=!0},p(n,o){const a={};o&8&&(a.xlsxImporter=n[3]),l.$set(a)},i(n){r||(b(l.$$.fragment,n),r=!0)},o(n){L(l.$$.fragment,n),r=!1},d(n){n&&($(e),$(t)),V(l,n)}}}function dt(s){let e=(s[20]==s[5]?"Currently open":s[0].describeFile(s[20]))+"",t;return{c(){t=H(e)},l(l){t=j(l,e)},m(l,r){x(l,t,r)},p(l,r){r&49&&e!==(e=(l[20]==l[5]?"Currently open":l[0].describeFile(l[20]))+"")&&He(t,e)},d(l){l&&$(t)}}}function $t(s){let e,t;function l(){return s[17](s[20])}return e=new Re({props:{$$slots:{default:[ht]},$$scope:{ctx:s}}}),e.$on("click",l),{c(){M(e.$$.fragment)},l(r){R(e.$$.fragment,r)},m(r,n){q(e,r,n),t=!0},p(r,n){s=r;const o={};n&262144&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function _t(s){let e,t;return e=new et({props:{$$slots:{default:[gt]},$$scope:{ctx:s}}}),e.$on("click",s[16]),{c(){M(e.$$.fragment)},l(l){R(e.$$.fragment,l)},m(l,r){q(e,l,r),t=!0},p(l,r){const n={};r&262144&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function ht(s){let e;return{c(){e=H("Delete")},l(t){e=j(t,"Delete")},m(t,l){x(t,e,l)},d(t){t&&$(e)}}}function gt(s){let e;return{c(){e=H("Start")},l(t){e=j(t,"Start")},m(t,l){x(t,e,l)},d(t){t&&$(e)}}}function Be(s){let e,t,l,r,n,o,a;function p(){return s[15](s[20])}t=new Qe({props:{name:`File name: ${s[20]}`,disabled:s[20]===s[5],$$slots:{default:[dt]},$$scope:{ctx:s}}}),t.$on("click",p);const w=[_t,$t],v=[];function c(d,_){return d[20]==d[5]?0:1}return r=c(s),n=v[r]=w[r](s),{c(){e=F("div"),M(t.$$.fragment),l=y(),n.c(),o=y(),this.h()},l(d){e=C(d,"DIV",{style:!0});var _=O(e);R(t.$$.fragment,_),l=I(_),n.l(_),o=I(_),_.forEach($),this.h()},h(){xe(e,"display","flex"),xe(e,"justify-content","space-between")},m(d,_){x(d,e,_),q(t,e,null),m(e,l),v[r].m(e,null),m(e,o),a=!0},p(d,_){s=d;const T={};_&16&&(T.name=`File name: ${s[20]}`),_&48&&(T.disabled=s[20]===s[5]),_&262193&&(T.$$scope={dirty:_,ctx:s}),t.$set(T);let S=r;r=c(s),r===S?v[r].p(s,_):(be(),L(v[S],1,1,()=>{v[S]=null}),ke(),n=v[r],n?n.p(s,_):(n=v[r]=w[r](s),n.c()),b(n,1),n.m(e,o))},i(d){a||(b(t.$$.fragment,d),b(n),a=!0)},o(d){L(t.$$.fragment,d),L(n),a=!1},d(d){d&&$(e),V(t),v[r].d()}}}function wt(s){let e,t,l,r,n,o,a=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later. You can export the file to your computer to share
    with someone else, and import from a file below.`,p,w,v,c,d,_,T,S,se,oe,K,le,U,B,Y,ce="Create or import a file",ae,N,ie,u,D,A,P,$e,X,ne,Fe="Load a saved file",_e,he,W,ge,me,Z;S=new Ke({props:{$$slots:{default:[mt]},$$scope:{ctx:s}}});const we=s[13].default,G=Ue(we,s,s[18],null);N=new ye({props:{$$slots:{default:[pt]},$$scope:{ctx:s}}}),N.$on("click",s[9]),A=new tt({props:{label:"Import from a .json file",onLoad:s[10]}});let k=s[3]!=null&&Ee(s),Q=Le(s[4]),h=[];for(let i=0;i<Q.length;i+=1)h[i]=Be(De(s,Q,i));const Ve=i=>L(h[i],1,1,()=>{h[i]=null});return{c(){e=F("div"),t=F("a"),l=H("Back to overview"),n=y(),o=F("p"),o.textContent=a,p=y(),w=F("p"),v=H("You're currently editing "),c=F("u"),d=H(s[5]),_=H(`
    .`),T=y(),M(S.$$.fragment),se=y(),G&&G.c(),oe=y(),K=F("hr"),le=y(),U=F("div"),B=F("div"),Y=F("h2"),Y.textContent=ce,ae=y(),M(N.$$.fragment),ie=y(),u=F("hr"),D=y(),M(A.$$.fragment),P=y(),k&&k.c(),$e=y(),X=F("div"),ne=F("h2"),ne.textContent=Fe,_e=y();for(let i=0;i<h.length;i+=1)h[i].c();he=y(),W=F("a"),ge=H("Back to overview"),this.h()},l(i){e=C(i,"DIV",{class:!0});var f=O(e);t=C(f,"A",{href:!0,class:!0});var J=O(t);l=j(J,"Back to overview"),J.forEach($),n=I(f),o=C(f,"P",{"data-svelte-h":!0}),de(o)!=="svelte-1yvzirp"&&(o.textContent=a),p=I(f),w=C(f,"P",{});var ee=O(w);v=j(ee,"You're currently editing "),c=C(ee,"U",{});var E=O(c);d=j(E,s[5]),E.forEach($),_=j(ee,`
    .`),ee.forEach($),T=I(f),R(S.$$.fragment,f),se=I(f),G&&G.l(f),oe=I(f),K=C(f,"HR",{}),le=I(f),U=C(f,"DIV",{class:!0});var te=O(U);B=C(te,"DIV",{class:!0});var z=O(B);Y=C(z,"H2",{"data-svelte-h":!0}),de(Y)!=="svelte-1yqhw3l"&&(Y.textContent=ce),ae=I(z),R(N.$$.fragment,z),ie=I(z),u=C(z,"HR",{}),D=I(z),R(A.$$.fragment,z),P=I(z),k&&k.l(z),z.forEach($),$e=I(te),X=C(te,"DIV",{class:!0});var pe=O(X);ne=C(pe,"H2",{"data-svelte-h":!0}),de(ne)!=="svelte-oj70x0"&&(ne.textContent=Fe),_e=I(pe);for(let ve=0;ve<h.length;ve+=1)h[ve].l(pe);pe.forEach($),te.forEach($),he=I(f),W=C(f,"A",{href:!0,class:!0});var Ce=O(W);ge=j(Ce,"Back to overview"),Ce.forEach($),f.forEach($),this.h()},h(){g(t,"href",r=ue+"/"+s[0].prefix),g(t,"class","govuk-back-link"),g(B,"class","govuk-grid-column-one-half"),g(X,"class","govuk-grid-column-one-half"),g(U,"class","govuk-grid-row"),g(W,"href",me=ue+"/"+s[0].prefix),g(W,"class","govuk-back-link"),g(e,"class","govuk-width-container")},m(i,f){x(i,e,f),m(e,t),m(t,l),m(e,n),m(e,o),m(e,p),m(e,w),m(w,v),m(w,c),m(c,d),m(w,_),m(e,T),q(S,e,null),m(e,se),G&&G.m(e,null),m(e,oe),m(e,K),m(e,le),m(e,U),m(U,B),m(B,Y),m(B,ae),q(N,B,null),m(B,ie),m(B,u),m(B,D),q(A,B,null),m(B,P),k&&k.m(B,null),m(U,$e),m(U,X),m(X,ne),m(X,_e);for(let J=0;J<h.length;J+=1)h[J]&&h[J].m(X,null);m(e,he),m(e,W),m(W,ge),Z=!0},p(i,[f]){(!Z||f&1&&r!==(r=ue+"/"+i[0].prefix))&&g(t,"href",r),(!Z||f&32)&&He(d,i[5]);const J={};f&262176&&(J.$$scope={dirty:f,ctx:i}),S.$set(J),G&&G.p&&(!Z||f&262144)&&Je(G,we,i,i[18],Z?Xe(we,i[18],f,null):ze(i[18]),null);const ee={};if(f&262144&&(ee.$$scope={dirty:f,ctx:i}),N.$set(ee),i[3]!=null?k?(k.p(i,f),f&8&&b(k,1)):(k=Ee(i),k.c(),b(k,1),k.m(B,null)):k&&(be(),L(k,1,1,()=>{k=null}),ke()),f&4401){Q=Le(i[4]);let E;for(E=0;E<Q.length;E+=1){const te=De(i,Q,E);h[E]?(h[E].p(te,f),b(h[E],1)):(h[E]=Be(te),h[E].c(),b(h[E],1),h[E].m(X,null))}for(be(),E=Q.length;E<h.length;E+=1)Ve(E);ke()}(!Z||f&1&&me!==(me=ue+"/"+i[0].prefix))&&g(W,"href",me)},i(i){if(!Z){b(S.$$.fragment,i),b(G,i),b(N.$$.fragment,i),b(A.$$.fragment,i),b(k);for(let f=0;f<Q.length;f+=1)b(h[f]);Z=!0}},o(i){L(S.$$.fragment,i),L(G,i),L(N.$$.fragment,i),L(A.$$.fragment,i),L(k),h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)L(h[f]);Z=!1},d(i){i&&$(e),V(S),G&&G.d(i),V(N),V(A),k&&k.d(),Ze(h,i)}}}function Ae(s,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",s),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function vt(s,e,t){let l,r=re,n=()=>(r(),r=Se(_,u=>t(19,l=u)),_),o,a=re,p=()=>(a(),a=Se(d,u=>t(5,o=u)),d);s.$$.on_destroy.push(()=>r()),s.$$.on_destroy.push(()=>a());let{$$slots:w={},$$scope:v}=e,{files:c}=e,{currentFile:d}=e;p();let{state:_}=e;n();let{xlsxImporter:T=null}=e,S=c.getFileList();function se(){let u=window.prompt(`Rename file ${o} to what?`,o);if(u){let D=c.key(o),A=window.localStorage.getItem(D);window.localStorage.setItem(c.key(u),A),window.localStorage.removeItem(D),fe(d,o=u,o),t(4,S=c.getFileList())}}function oe(){Ae(o+".json",JSON.stringify(l))}async function K(u){if(window.confirm(`Really delete file ${u}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`)){let D=c.key(u);Ae(`${u}.json`,window.localStorage.getItem(D)),window.localStorage.removeItem(D),u==o?await le():t(4,S=c.saveAndGetFileList(o,l))}}async function le(){fe(d,o=c.newFilename(),o),fe(_,l=c.emptyState(),l),t(4,S=c.saveAndGetFileList(o,l))}async function U(u,D){let A=qe(u,".json");try{let P=JSON.parse(D);c.validate(P),t(4,S=c.saveAndGetFileList(A,P)),await Y(A)}catch(P){window.alert(`Couldn't load ${A}: ${P}`)}}async function B(u){let{filename:D,data:A}=u.detail;t(4,S=c.saveAndGetFileList(D,A)),await Y(D)}async function Y(u){try{let D=c.loadFile(u);fe(d,o=u,o),fe(_,l=D,l)}catch(D){window.alert(`Couldn't load ${u}: ${D}`)}}const ce=()=>K(o),ae=u=>Y(u),N=()=>We(`${ue}/${c.prefix}`),ie=u=>K(u);return s.$$set=u=>{"files"in u&&t(0,c=u.files),"currentFile"in u&&p(t(1,d=u.currentFile)),"state"in u&&n(t(2,_=u.state)),"xlsxImporter"in u&&t(3,T=u.xlsxImporter),"$$scope"in u&&t(18,v=u.$$scope)},[c,d,_,T,S,o,se,oe,K,le,U,B,Y,w,ce,ae,N,ie,v]}class jt extends je{constructor(e){super(),Me(this,e,vt,wt,Ge,{files:0,currentFile:1,state:2,xlsxImporter:3})}}export{jt as F};
