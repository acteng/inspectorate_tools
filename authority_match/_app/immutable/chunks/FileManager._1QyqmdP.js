import{s as ce,e as F,c as S,p as J,q as k,i as g,z as Ie,n as R,f as _,E as Te,a as v,g as b,T as qe,r as Ce,l as Fe,b as re,h as w,u as Se,m as Le,o as Me,t as oe,d as ie,j as Ae,ab as he,V as K,Y as pe,w as Be}from"./scheduler.B5FfXhnD.js";import{S as de,i as _e,c as A,a as B,m as E,t as $,b as x,d as j,g as fe,f as ue,e as Ee}from"./index.VeCIHQiF.js";import{L as je,d as De}from"./Loading.C2g5j7nb.js";import{b as Re}from"./paths.DEC_HkVm.js";import{S as Ge,A as Ne}from"./ServiceHeader.DYohSgCe.js";import{B as Ve}from"./ButtonGroup.I-jflGHH.js";import{F as Ue}from"./FileInput.CUZQX8k2.js";import{R as Ye}from"./Radio.Bn7dbFvu.js";import"./index.CnqSK82d.js";import{S as me}from"./SecondaryButton.D6CH7aQ3.js";import{W as ze}from"./WarningButton.CAKjKYUQ.js";import{b as He,p as we}from"./index.Bo9w7dTA.js";import{F as Je}from"./FormElement.iPte9iIl.js";import{W as Pe}from"./WarningText.DpJJu5j8.js";import{g as We}from"./entry.DK2DAREW.js";/* empty css                                                  */function Oe(i){let e,n=`Start
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false"><path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path></svg>`,t,r;return{c(){e=F("button"),e.innerHTML=n,this.h()},l(s){e=S(s,"BUTTON",{type:!0,class:!0,"data-module":!0,"data-svelte-h":!0}),J(e)!=="svelte-yfbivp"&&(e.innerHTML=n),this.h()},h(){k(e,"type","button"),k(e,"class","govuk-button govuk-button--start"),k(e,"data-module","govuk-button")},m(s,l){g(s,e,l),t||(r=Ie(e,"click",i[0]),t=!0)},p:R,i:R,o:R,d(s){s&&_(e),t=!1,r()}}}function Xe(i){function e(n){Te.call(this,i,n)}return[e]}class Ze extends de{constructor(e){super(),_e(this,e,Xe,Oe,ce,{})}}const Ke="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M200-200h57l391-391-57-57-391%20391v57Zm-80%2080v-170l528-527q12-11%2026.5-17t30.5-6q16%200%2031%206t26%2018l55%2056q12%2011%2017.5%2026t5.5%2030q0%2016-5.5%2030.5T817-647L290-120H120Zm640-584-56-56%2056%2056Zm-141%2085-28-29%2057%2057-29-28Z'/%3e%3c/svg%3e",Qe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='white'%3e%3cpath%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M6%2019c0%201.1.9%202%202%202h8c1.1%200%202-.9%202-2V7H6v12zM19%204h-3.5l-1-1h-5l-1%201H5v2h14V4z'/%3e%3c/svg%3e";function et(i){let e,n=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
      . After importing, there will still be some problems:`,t,r,s=`<li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li>`;return{c(){e=F("p"),e.innerHTML=n,t=v(),r=F("ul"),r.innerHTML=s},l(l){e=S(l,"P",{"data-svelte-h":!0}),J(e)!=="svelte-1ykh4hv"&&(e.innerHTML=n),t=b(l),r=S(l,"UL",{"data-svelte-h":!0}),J(r)!=="svelte-1tt4pqo"&&(r.innerHTML=s)},m(l,f){g(l,e,f),g(l,t,f),g(l,r,f)},p:R,d(l){l&&(_(e),_(t),_(r))}}}function tt(i){let e,n,t,r,s,l;return t=new Pe({props:{$$slots:{default:[et]},$$scope:{ctx:i}}}),{c(){e=F("input"),n=v(),A(t.$$.fragment),this.h()},l(f){e=S(f,"INPUT",{class:!0,id:!0,type:!0}),n=b(f),B(t.$$.fragment,f),this.h()},h(){k(e,"class","govuk-file-upload"),k(e,"id","import-xlsx"),k(e,"type","file")},m(f,d){g(f,e,d),i[4](e),g(f,n,d),E(t,f,d),r=!0,s||(l=Ie(e,"change",i[2]),s=!0)},p(f,d){const u={};d&64&&(u.$$scope={dirty:d,ctx:f}),t.$set(u)},i(f){r||($(t.$$.fragment,f),r=!0)},o(f){x(t.$$.fragment,f),r=!1},d(f){f&&(_(e),_(n)),i[4](null),j(t,f),s=!1,l()}}}function lt(i){let e,n,t,r;return e=new Je({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[tt]},$$scope:{ctx:i}}}),t=new je({props:{loading:i[0]}}),{c(){A(e.$$.fragment),n=v(),A(t.$$.fragment)},l(s){B(e.$$.fragment,s),n=b(s),B(t.$$.fragment,s)},m(s,l){E(e,s,l),g(s,n,l),E(t,s,l),r=!0},p(s,[l]){const f={};l&66&&(f.$$scope={dirty:l,ctx:s}),e.$set(f);const d={};l&1&&(d.loading=s[0]),t.$set(d)},i(s){r||($(e.$$.fragment,s),$(t.$$.fragment,s),r=!0)},o(s){x(e.$$.fragment,s),x(t.$$.fragment,s),r=!1},d(s){s&&_(n),j(e,s),j(t,s)}}}function nt(i,e,n){let t=qe(),{xlsxImporter:r}=e,s="",l;async function f(u){let o=l.files[0].name;try{n(0,s=`Loading ${o}`);let a=await l.files[0].arrayBuffer(),p=await r(a);n(0,s=""),t("imported",{filename:He(o,".xlsx"),data:p})}catch(a){window.alert(`Couldn't import ${o}: ${a}`),n(0,s="")}}function d(u){Ce[u?"unshift":"push"](()=>{l=u,n(1,l)})}return i.$$set=u=>{"xlsxImporter"in u&&n(3,r=u.xlsxImporter)},[s,l,f,r,d]}class st extends de{constructor(e){super(),_e(this,e,nt,lt,ce,{xlsxImporter:3})}}const rt=i=>({}),ve=i=>({}),ot=i=>({}),be=i=>({});function xe(i){let e,n,t="You are editing:",r,s,l,f,d,u,o;return f=new Ze({}),f.$on("click",i[16]),u=new Ve({props:{$$slots:{default:[ut]},$$scope:{ctx:i}}}),{c(){e=F("p"),n=F("b"),n.textContent=t,r=v(),s=oe(i[7]),l=v(),A(f.$$.fragment),d=v(),A(u.$$.fragment)},l(a){e=S(a,"P",{});var p=re(e);n=S(p,"B",{"data-svelte-h":!0}),J(n)!=="svelte-1kt2tqj"&&(n.textContent=t),r=b(p),s=ie(p,i[7]),p.forEach(_),l=b(a),B(f.$$.fragment,a),d=b(a),B(u.$$.fragment,a)},m(a,p){g(a,e,p),w(e,n),w(e,r),w(e,s),g(a,l,p),E(f,a,p),g(a,d,p),E(u,a,p),o=!0},p(a,p){(!o||p&128)&&Ae(s,a[7]);const H={};p&262144&&(H.$$scope={dirty:p,ctx:a}),u.$set(H)},i(a){o||($(f.$$.fragment,a),$(u.$$.fragment,a),o=!0)},o(a){x(f.$$.fragment,a),x(u.$$.fragment,a),o=!1},d(a){a&&(_(e),_(l),_(d)),j(f,a),j(u,a)}}}function it(i){let e,n,t;return{c(){e=F("img"),t=oe(`
            Export .json`),this.h()},l(r){e=S(r,"IMG",{src:!0,alt:!0,class:!0}),t=ie(r,`
            Export .json`),this.h()},h(){pe(e.src,n=De)||k(e,"src",n),k(e,"alt","Export .json"),k(e,"class","svelte-1f2msch")},m(r,s){g(r,e,s),g(r,t,s)},p:R,d(r){r&&(_(e),_(t))}}}function at(i){let e,n,t;return{c(){e=F("img"),t=oe(`
            Rename file`),this.h()},l(r){e=S(r,"IMG",{src:!0,alt:!0,class:!0}),t=ie(r,`
            Rename file`),this.h()},h(){pe(e.src,n=Ke)||k(e,"src",n),k(e,"alt","Rename file"),k(e,"class","svelte-1f2msch")},m(r,s){g(r,e,s),g(r,t,s)},p:R,d(r){r&&(_(e),_(t))}}}function ft(i){let e,n,t;return{c(){e=F("img"),t=oe(`
            Delete file`),this.h()},l(r){e=S(r,"IMG",{src:!0,alt:!0,class:!0}),t=ie(r,`
            Delete file`),this.h()},h(){pe(e.src,n=Qe)||k(e,"src",n),k(e,"alt","Delete file"),k(e,"class","svelte-1f2msch")},m(r,s){g(r,e,s),g(r,t,s)},p:R,d(r){r&&(_(e),_(t))}}}function ut(i){let e,n,t,r,s,l,f;e=new me({props:{$$slots:{default:[it]},$$scope:{ctx:i}}}),e.$on("click",i[11]);const d=i[15].export,u=Fe(d,i,i[18],ve);return r=new me({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),r.$on("click",i[9]),l=new ze({props:{$$slots:{default:[ft]},$$scope:{ctx:i}}}),l.$on("click",i[10]),{c(){A(e.$$.fragment),n=v(),u&&u.c(),t=v(),A(r.$$.fragment),s=v(),A(l.$$.fragment)},l(o){B(e.$$.fragment,o),n=b(o),u&&u.l(o),t=b(o),B(r.$$.fragment,o),s=b(o),B(l.$$.fragment,o)},m(o,a){E(e,o,a),g(o,n,a),u&&u.m(o,a),g(o,t,a),E(r,o,a),g(o,s,a),E(l,o,a),f=!0},p(o,a){const p={};a&262144&&(p.$$scope={dirty:a,ctx:o}),e.$set(p),u&&u.p&&(!f||a&262144)&&Se(u,d,o,o[18],f?Me(d,o[18],a,rt):Le(o[18]),ve);const H={};a&262144&&(H.$$scope={dirty:a,ctx:o}),r.$set(H);const V={};a&262144&&(V.$$scope={dirty:a,ctx:o}),l.$set(V)},i(o){f||($(e.$$.fragment,o),$(u,o),$(r.$$.fragment,o),$(l.$$.fragment,o),f=!0)},o(o){x(e.$$.fragment,o),x(u,o),x(r.$$.fragment,o),x(l.$$.fragment,o),f=!1},d(o){o&&(_(n),_(t),_(s)),j(e,o),u&&u.d(o),j(r,o),j(l,o)}}}function mt(i){let e;return{c(){e=oe("New blank file")},l(n){e=ie(n,"New blank file")},m(n,t){g(n,e,t)},d(n){n&&_(e)}}}function ke(i){let e,n,t,r;return t=new st({props:{xlsxImporter:i[4]}}),t.$on("imported",i[14]),{c(){e=F("hr"),n=v(),A(t.$$.fragment)},l(s){e=S(s,"HR",{}),n=b(s),B(t.$$.fragment,s)},m(s,l){g(s,e,l),g(s,n,l),E(t,s,l),r=!0},p(s,l){const f={};l&16&&(f.xlsxImporter=s[4]),t.$set(f)},i(s){r||($(t.$$.fragment,s),r=!0)},o(s){x(t.$$.fragment,s),r=!1},d(s){s&&(_(e),_(n)),j(t,s)}}}function ct(i){let e,n="No saved files";return{c(){e=F("p"),e.textContent=n},l(t){e=S(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-yojds1"&&(e.textContent=n)},m(t,r){g(t,e,r)},p:R,i:R,o:R,d(t){t&&_(e)}}}function pt(i){let e,n,t;function r(l){i[17](l)}let s={label:"",choices:we(i[6])};return i[5]!==void 0&&(s.value=i[5]),e=new Ye({props:s}),Ce.push(()=>Ee(e,"value",r)),e.$on("change",i[8]),{c(){A(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,f){E(e,l,f),t=!0},p(l,f){const d={};f&64&&(d.choices=we(l[6])),!n&&f&32&&(n=!0,d.value=l[5],Be(()=>n=!1)),e.$set(d)},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function dt(i){let e,n,t,r,s,l,f="Manage my schemes",d,u,o,a,p,H=`All files are auto-saved in your browser's local storage. You can close
        your browser and resume later. You can export the file to your computer
        to share with someone else, and import from a file below.`,V,O,T,U="Create or import a file",ee,G,te,le,ne,Y,se,X,N,z,c="Manage existing files",q,y,M,Q;e=new Ge({props:{service:i[3]}}),r=new Ne({});const ae=i[15].description,D=Fe(ae,i,i[18],be);let I=i[7]&&xe(i);G=new me({props:{$$slots:{default:[mt]},$$scope:{ctx:i}}}),G.$on("click",i[12]),Y=new Ue({props:{label:"Import from a .json file",onLoad:i[13]}});let C=i[4]!=null&&ke(i);const ge=[pt,ct],P=[];function $e(m,h){return m[6].length>0?0:1}return y=$e(i),M=P[y]=ge[y](i),{c(){A(e.$$.fragment),n=v(),t=F("div"),A(r.$$.fragment),s=v(),l=F("div"),l.textContent=f,d=v(),u=F("div"),o=F("div"),D&&D.c(),a=v(),p=F("p"),p.textContent=H,V=v(),I&&I.c(),O=v(),T=F("h2"),T.textContent=U,ee=v(),A(G.$$.fragment),te=v(),le=F("hr"),ne=v(),A(Y.$$.fragment),se=v(),C&&C.c(),X=v(),N=F("div"),z=F("h2"),z.textContent=c,q=v(),M.c(),this.h()},l(m){B(e.$$.fragment,m),n=b(m),t=S(m,"DIV",{class:!0});var h=re(t);B(r.$$.fragment,h),s=b(h),l=S(h,"DIV",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-1qslbyq"&&(l.textContent=f),d=b(h),u=S(h,"DIV",{class:!0});var Z=re(u);o=S(Z,"DIV",{class:!0});var L=re(o);D&&D.l(L),a=b(L),p=S(L,"P",{"data-svelte-h":!0}),J(p)!=="svelte-wkz669"&&(p.textContent=H),V=b(L),I&&I.l(L),O=b(L),T=S(L,"H2",{"data-svelte-h":!0}),J(T)!=="svelte-1yqhw3l"&&(T.textContent=U),ee=b(L),B(G.$$.fragment,L),te=b(L),le=S(L,"HR",{}),ne=b(L),B(Y.$$.fragment,L),se=b(L),C&&C.l(L),L.forEach(_),X=b(Z),N=S(Z,"DIV",{class:!0});var W=re(N);z=S(W,"H2",{class:!0,"data-svelte-h":!0}),J(z)!=="svelte-7j9603"&&(z.textContent=c),q=b(W),M.l(W),W.forEach(_),Z.forEach(_),h.forEach(_),this.h()},h(){k(l,"class","govuk-heading-l"),k(o,"class","govuk-grid-column-two-thirds"),k(z,"class","green-bar svelte-1f2msch"),k(N,"class","govuk-grid-column-one-third"),k(u,"class","govuk-grid-row"),k(t,"class","govuk-width-container")},m(m,h){E(e,m,h),g(m,n,h),g(m,t,h),E(r,t,null),w(t,s),w(t,l),w(t,d),w(t,u),w(u,o),D&&D.m(o,null),w(o,a),w(o,p),w(o,V),I&&I.m(o,null),w(o,O),w(o,T),w(o,ee),E(G,o,null),w(o,te),w(o,le),w(o,ne),E(Y,o,null),w(o,se),C&&C.m(o,null),w(u,X),w(u,N),w(N,z),w(N,q),P[y].m(N,null),Q=!0},p(m,[h]){const Z={};h&8&&(Z.service=m[3]),e.$set(Z),D&&D.p&&(!Q||h&262144)&&Se(D,ae,m,m[18],Q?Me(ae,m[18],h,ot):Le(m[18]),be),m[7]?I?(I.p(m,h),h&128&&$(I,1)):(I=xe(m),I.c(),$(I,1),I.m(o,O)):I&&(fe(),x(I,1,1,()=>{I=null}),ue());const L={};h&262144&&(L.$$scope={dirty:h,ctx:m}),G.$set(L),m[4]!=null?C?(C.p(m,h),h&16&&$(C,1)):(C=ke(m),C.c(),$(C,1),C.m(o,null)):C&&(fe(),x(C,1,1,()=>{C=null}),ue());let W=y;y=$e(m),y===W?P[y].p(m,h):(fe(),x(P[W],1,1,()=>{P[W]=null}),ue(),M=P[y],M?M.p(m,h):(M=P[y]=ge[y](m),M.c()),$(M,1),M.m(N,null))},i(m){Q||($(e.$$.fragment,m),$(r.$$.fragment,m),$(D,m),$(I),$(G.$$.fragment,m),$(Y.$$.fragment,m),$(C),$(M),Q=!0)},o(m){x(e.$$.fragment,m),x(r.$$.fragment,m),x(D,m),x(I),x(G.$$.fragment,m),x(Y.$$.fragment,m),x(C),x(M),Q=!1},d(m){m&&(_(n),_(t)),j(e,m),j(r),D&&D.d(m),I&&I.d(),j(G),j(Y),C&&C.d(),P[y].d()}}}function ye(i,e){let n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",i),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function _t(i,e,n){let t,r=R,s=()=>(r(),r=he(H,c=>n(19,t=c)),H),l,f=R,d=()=>(f(),f=he(p,c=>n(7,l=c)),p);i.$$.on_destroy.push(()=>r()),i.$$.on_destroy.push(()=>f());let{$$slots:u={},$$scope:o}=e,{files:a}=e,{currentFile:p}=e;d();let{state:H}=e;s();let{service:V}=e,{xlsxImporter:O=null}=e,T=l,U=a.getFileList();function ee(){T&&X(T)}function G(){let c=window.prompt(`Rename file ${l} to what?`,l);if(c){let q=a.key(l),y=window.localStorage.getItem(q);window.localStorage.setItem(a.key(c),y),window.localStorage.removeItem(q),K(p,l=c,l),n(5,T=l),n(6,U=a.getFileList())}}function te(){if(!window.confirm(`Really delete file ${l}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let c=a.key(l);ye(`${l}.json`,window.localStorage.getItem(c)),window.localStorage.removeItem(c),K(p,l="",l),n(5,T=""),K(H,t=a.emptyState(),t),n(6,U=a.getFileList()),window.localStorage.setItem(a.key("last-opened-file"),"")}function le(){ye(l+".json",JSON.stringify(t))}function ne(){let c=window.prompt("What do you want to name your new file?");c&&(K(p,l=c,l),n(5,T=c),K(H,t=a.emptyState(),t),n(6,U=a.saveAndGetFileList(l,t)))}function Y(c,q){let y=He(c,".json");try{let M=JSON.parse(q);a.validate(M),n(6,U=a.saveAndGetFileList(y,M)),X(y)}catch(M){window.alert(`Couldn't load ${y}: ${M}`)}}function se(c){let{filename:q,data:y}=c.detail;n(6,U=a.saveAndGetFileList(q,y)),X(q)}function X(c){try{let q=a.loadFile(c);n(5,T=c),K(p,l=c,l),K(H,t=q,t)}catch(q){window.alert(`Couldn't load ${c}: ${q}`)}}const N=()=>We(`${Re}/${a.prefix}overview`);function z(c){T=c,n(5,T)}return i.$$set=c=>{"files"in c&&n(0,a=c.files),"currentFile"in c&&d(n(1,p=c.currentFile)),"state"in c&&s(n(2,H=c.state)),"service"in c&&n(3,V=c.service),"xlsxImporter"in c&&n(4,O=c.xlsxImporter),"$$scope"in c&&n(18,o=c.$$scope)},[a,p,H,V,O,T,U,l,ee,G,te,le,ne,Y,se,u,N,z,o]}class Tt extends de{constructor(e){super(),_e(this,e,_t,dt,ce,{files:0,currentFile:1,state:2,service:3,xlsxImporter:4})}}export{Tt as F};
