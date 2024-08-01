import{s as _e,B as Ie,i as C,n as oe,f as d,e as v,a as I,t as B,c as b,b as A,g as F,d as R,o as x,h as m,j as ge,Q as Re,m as fe,z as Ve,v as Ge,r as He,R as Fe,S as re}from"./scheduler.BJ06nkRu.js";import{S as ve,i as be,c as N,a as Y,m as j,t as E,b as L,d as J,g as ye,f as xe}from"./index.Dmc4uC9p.js";import{e as Ce}from"./each.Bf3jp4ps.js";import{b as ie}from"./paths.D23AK3sA.js";import{B as Ne,C as Ye}from"./ClickableCard.DfItUd2y.js";import{F as je}from"./FileInput.DbvGerB6.js";import{S as he,W as Je}from"./WarningButton.DB4trw2r.js";/* empty css                                                       */import{a as De}from"./index.CR06Z_Hn.js";import{F as Te}from"./FormElement.qqY4z03n.js";import"./index.BP6QQc41.js";function Ee(r){let e,t,l,o,n,s,a;return{c(){e=v("div"),t=v("div"),l=v("progress"),o=I(),n=v("div"),s=v("h3"),a=B(r[0]),this.h()},l(u){e=b(u,"DIV",{class:!0});var i=A(e);t=b(i,"DIV",{class:!0});var h=A(t);l=b(h,"PROGRESS",{}),A(l).forEach(d),o=F(h),n=b(h,"DIV",{class:!0});var _=A(n);s=b(_,"H3",{});var D=A(s);a=R(D,r[0]),D.forEach(d),_.forEach(d),h.forEach(d),i.forEach(d),this.h()},h(){x(n,"class","govuk-prose"),x(t,"class","inner svelte-ho9d42"),x(e,"class","outer svelte-ho9d42")},m(u,i){C(u,e,i),m(e,t),m(t,l),m(t,o),m(t,n),m(n,s),m(s,a)},p(u,i){i&1&&ge(a,u[0])},d(u){u&&d(e)}}}function Oe(r){let e,t=r[0]&&Ee(r);return{c(){t&&t.c(),e=Ie()},l(l){t&&t.l(l),e=Ie()},m(l,o){t&&t.m(l,o),C(l,e,o)},p(l,[o]){l[0]?t?t.p(l,o):(t=Ee(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:oe,o:oe,d(l){l&&d(e),t&&t.d(l)}}}function Pe(r,e,t){let{loading:l}=e;return r.$$set=o=>{"loading"in o&&t(0,l=o.loading)},[l]}class Xe extends ve{constructor(e){super(),be(this,e,Pe,Oe,_e,{loading:0})}}function Me(r){let e,t,l,o=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
    . After importing, there will still be some problems:
    <ul><li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li></ul>`,n,s;return{c(){e=v("input"),t=I(),l=v("div"),l.innerHTML=o,this.h()},l(a){e=b(a,"INPUT",{class:!0,id:!0,type:!0}),t=F(a),l=b(a,"DIV",{class:!0,"data-svelte-h":!0}),fe(l)!=="svelte-1alapt1"&&(l.innerHTML=o),this.h()},h(){x(e,"class","govuk-file-upload"),x(e,"id","import-xlsx"),x(e,"type","file"),x(l,"class","govuk-hint")},m(a,u){C(a,e,u),r[4](e),C(a,t,u),C(a,l,u),n||(s=Ve(e,"change",r[2]),n=!0)},p:oe,d(a){a&&(d(e),d(t),d(l)),r[4](null),n=!1,s()}}}function Ue(r){let e,t,l,o;return e=new Te({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[Me]},$$scope:{ctx:r}}}),l=new Xe({props:{loading:r[0]}}),{c(){N(e.$$.fragment),t=I(),N(l.$$.fragment)},l(n){Y(e.$$.fragment,n),t=F(n),Y(l.$$.fragment,n)},m(n,s){j(e,n,s),C(n,t,s),j(l,n,s),o=!0},p(n,[s]){const a={};s&66&&(a.$$scope={dirty:s,ctx:n}),e.$set(a);const u={};s&1&&(u.loading=n[0]),l.$set(u)},i(n){o||(E(e.$$.fragment,n),E(l.$$.fragment,n),o=!0)},o(n){L(e.$$.fragment,n),L(l.$$.fragment,n),o=!1},d(n){n&&d(t),J(e,n),J(l,n)}}}function qe(r,e,t){let l=Re(),{xlsxImporter:o}=e,n="",s;async function a(i){let h=s.files[0].name;try{t(0,n=`Loading ${h}`);let _=await s.files[0].arrayBuffer(),D=await o(_);t(0,n=""),l("imported",{filename:De(h,".xlsx"),data:D})}catch(_){window.alert(`Couldn't import ${h}: ${_}`),t(0,n="")}}function u(i){Ge[i?"unshift":"push"](()=>{s=i,t(1,s)})}return r.$$set=i=>{"xlsxImporter"in i&&t(3,o=i.xlsxImporter)},[n,s,a,o,u]}class ze extends ve{constructor(e){super(),be(this,e,qe,Ue,_e,{xlsxImporter:3})}}function Se(r,e,t){const l=r.slice();return l[15]=e[t],l}function We(r){let e;return{c(){e=B("Rename this file")},l(t){e=R(t,"Rename this file")},m(t,l){C(t,e,l)},d(t){t&&d(e)}}}function Ke(r){let e;return{c(){e=B("Export this file")},l(t){e=R(t,"Export this file")},m(t,l){C(t,e,l)},d(t){t&&d(e)}}}function Qe(r){let e;return{c(){e=B("Delete this file")},l(t){e=R(t,"Delete this file")},m(t,l){C(t,e,l)},d(t){t&&d(e)}}}function Ze(r){let e,t,l,o,n,s;return e=new he({props:{$$slots:{default:[We]},$$scope:{ctx:r}}}),e.$on("click",r[6]),l=new he({props:{$$slots:{default:[Ke]},$$scope:{ctx:r}}}),l.$on("click",r[7]),n=new Je({props:{$$slots:{default:[Qe]},$$scope:{ctx:r}}}),n.$on("click",r[8]),{c(){N(e.$$.fragment),t=I(),N(l.$$.fragment),o=I(),N(n.$$.fragment)},l(a){Y(e.$$.fragment,a),t=F(a),Y(l.$$.fragment,a),o=F(a),Y(n.$$.fragment,a)},m(a,u){j(e,a,u),C(a,t,u),j(l,a,u),C(a,o,u),j(n,a,u),s=!0},p(a,u){const i={};u&262144&&(i.$$scope={dirty:u,ctx:a}),e.$set(i);const h={};u&262144&&(h.$$scope={dirty:u,ctx:a}),l.$set(h);const _={};u&262144&&(_.$$scope={dirty:u,ctx:a}),n.$set(_)},i(a){s||(E(e.$$.fragment,a),E(l.$$.fragment,a),E(n.$$.fragment,a),s=!0)},o(a){L(e.$$.fragment,a),L(l.$$.fragment,a),L(n.$$.fragment,a),s=!1},d(a){a&&(d(t),d(o)),J(e,a),J(l,a),J(n,a)}}}function et(r){let e;return{c(){e=B("New blank file")},l(t){e=R(t,"New blank file")},m(t,l){C(t,e,l)},d(t){t&&d(e)}}}function Le(r){let e,t,l,o;return l=new ze({props:{xlsxImporter:r[3]}}),l.$on("imported",r[11]),{c(){e=v("hr"),t=I(),N(l.$$.fragment)},l(n){e=b(n,"HR",{}),t=F(n),Y(l.$$.fragment,n)},m(n,s){C(n,e,s),C(n,t,s),j(l,n,s),o=!0},p(n,s){const a={};s&8&&(a.xlsxImporter=n[3]),l.$set(a)},i(n){o||(E(l.$$.fragment,n),o=!0)},o(n){L(l.$$.fragment,n),o=!1},d(n){n&&(d(e),d(t)),J(l,n)}}}function tt(r){let e=r[15]===r[5]?"Already selected":"",t,l;return{c(){t=B(e),l=I()},l(o){t=R(o,e),l=F(o)},m(o,n){C(o,t,n),C(o,l,n)},p(o,n){n&48&&e!==(e=o[15]===o[5]?"Already selected":"")&&ge(t,e)},d(o){o&&(d(t),d(l))}}}function Ae(r){let e,t;function l(){return r[13](r[15])}return e=new Ye({props:{name:`File name: ${r[15]}`,disabled:r[15]===r[5],$$slots:{default:[tt]},$$scope:{ctx:r}}}),e.$on("click",l),{c(){N(e.$$.fragment)},l(o){Y(e.$$.fragment,o)},m(o,n){j(e,o,n),t=!0},p(o,n){r=o;const s={};n&16&&(s.name=`File name: ${r[15]}`),n&48&&(s.disabled=r[15]===r[5]),n&262192&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(o){t||(E(e.$$.fragment,o),t=!0)},o(o){L(e.$$.fragment,o),t=!1},d(o){J(e,o)}}}function lt(r){let e,t,l,o,n,s,a=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later. You can export the file to your computer to share
    with someone else, and import from a file below.`,u,i,h,_,D,T,te,V,le,Z,ne,G,w,P,p="Create or import a file",S,y,X,q,ue,ce,O,ee,we="Load a saved file",me,de,M,pe,se,z;V=new Ne({props:{$$slots:{default:[Ze]},$$scope:{ctx:r}}}),y=new he({props:{$$slots:{default:[et]},$$scope:{ctx:r}}}),y.$on("click",r[9]),q=new je({props:{label:"Import from a .json file",onLoad:r[10]}});let g=r[3]!=null&&Le(r),W=Ce(r[4]),$=[];for(let f=0;f<W.length;f+=1)$[f]=Ae(Se(r,W,f));const Be=f=>L($[f],1,1,()=>{$[f]=null});return{c(){e=v("div"),t=v("a"),l=B("Back to overview"),n=I(),s=v("p"),s.textContent=a,u=I(),i=v("p"),h=B("You're currently editing "),_=v("u"),D=B(r[5]),T=B(`
    .`),te=I(),N(V.$$.fragment),le=I(),Z=v("hr"),ne=I(),G=v("div"),w=v("div"),P=v("h2"),P.textContent=p,S=I(),N(y.$$.fragment),X=I(),N(q.$$.fragment),ue=I(),g&&g.c(),ce=I(),O=v("div"),ee=v("h2"),ee.textContent=we,me=I();for(let f=0;f<$.length;f+=1)$[f].c();de=I(),M=v("a"),pe=B("Back to overview"),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=A(e);t=b(c,"A",{href:!0,class:!0});var H=A(t);l=R(H,"Back to overview"),H.forEach(d),n=F(c),s=b(c,"P",{"data-svelte-h":!0}),fe(s)!=="svelte-1yvzirp"&&(s.textContent=a),u=F(c),i=b(c,"P",{});var K=A(i);h=R(K,"You're currently editing "),_=b(K,"U",{});var k=A(_);D=R(k,r[5]),k.forEach(d),T=R(K,`
    .`),K.forEach(d),te=F(c),Y(V.$$.fragment,c),le=F(c),Z=b(c,"HR",{}),ne=F(c),G=b(c,"DIV",{class:!0});var Q=A(G);w=b(Q,"DIV",{class:!0});var U=A(w);P=b(U,"H2",{"data-svelte-h":!0}),fe(P)!=="svelte-1yqhw3l"&&(P.textContent=p),S=F(U),Y(y.$$.fragment,U),X=F(U),Y(q.$$.fragment,U),ue=F(U),g&&g.l(U),U.forEach(d),ce=F(Q),O=b(Q,"DIV",{class:!0});var ae=A(O);ee=b(ae,"H2",{"data-svelte-h":!0}),fe(ee)!=="svelte-oj70x0"&&(ee.textContent=we),me=F(ae);for(let $e=0;$e<$.length;$e+=1)$[$e].l(ae);ae.forEach(d),Q.forEach(d),de=F(c),M=b(c,"A",{href:!0,class:!0});var ke=A(M);pe=R(ke,"Back to overview"),ke.forEach(d),c.forEach(d),this.h()},h(){x(t,"href",o=ie+"/"+r[0].prefix),x(t,"class","govuk-back-link"),x(w,"class","govuk-grid-column-one-half"),x(O,"class","govuk-grid-column-one-half"),x(G,"class","govuk-grid-row"),x(M,"href",se=ie+"/"+r[0].prefix),x(M,"class","govuk-back-link"),x(e,"class","govuk-width-container")},m(f,c){C(f,e,c),m(e,t),m(t,l),m(e,n),m(e,s),m(e,u),m(e,i),m(i,h),m(i,_),m(_,D),m(i,T),m(e,te),j(V,e,null),m(e,le),m(e,Z),m(e,ne),m(e,G),m(G,w),m(w,P),m(w,S),j(y,w,null),m(w,X),j(q,w,null),m(w,ue),g&&g.m(w,null),m(G,ce),m(G,O),m(O,ee),m(O,me);for(let H=0;H<$.length;H+=1)$[H]&&$[H].m(O,null);m(e,de),m(e,M),m(M,pe),z=!0},p(f,[c]){(!z||c&1&&o!==(o=ie+"/"+f[0].prefix))&&x(t,"href",o),(!z||c&32)&&ge(D,f[5]);const H={};c&262144&&(H.$$scope={dirty:c,ctx:f}),V.$set(H);const K={};if(c&262144&&(K.$$scope={dirty:c,ctx:f}),y.$set(K),f[3]!=null?g?(g.p(f,c),c&8&&E(g,1)):(g=Le(f),g.c(),E(g,1),g.m(w,null)):g&&(ye(),L(g,1,1,()=>{g=null}),xe()),c&4144){W=Ce(f[4]);let k;for(k=0;k<W.length;k+=1){const Q=Se(f,W,k);$[k]?($[k].p(Q,c),E($[k],1)):($[k]=Ae(Q),$[k].c(),E($[k],1),$[k].m(O,null))}for(ye(),k=W.length;k<$.length;k+=1)Be(k);xe()}(!z||c&1&&se!==(se=ie+"/"+f[0].prefix))&&x(M,"href",se)},i(f){if(!z){E(V.$$.fragment,f),E(y.$$.fragment,f),E(q.$$.fragment,f),E(g);for(let c=0;c<W.length;c+=1)E($[c]);z=!0}},o(f){L(V.$$.fragment,f),L(y.$$.fragment,f),L(q.$$.fragment,f),L(g),$=$.filter(Boolean);for(let c=0;c<$.length;c+=1)L($[c]);z=!1},d(f){f&&d(e),J(V),J(y),J(q),g&&g.d(),He($,f)}}}function nt(r,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",r),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function rt(r,e,t){let l,o=oe,n=()=>(o(),o=Fe(_,p=>t(14,l=p)),_),s,a=oe,u=()=>(a(),a=Fe(h,p=>t(5,s=p)),h);r.$$.on_destroy.push(()=>o()),r.$$.on_destroy.push(()=>a());let{files:i}=e,{currentFile:h}=e;u();let{state:_}=e;n();let{xlsxImporter:D=null}=e,T=i.getFileList();function te(){let p=window.prompt(`Rename file ${s} to what?`,s);if(p){let S=i.key(s),y=window.localStorage.getItem(S);window.localStorage.setItem(i.key(p),y),window.localStorage.removeItem(S),re(h,s=p,s),t(4,T=i.getFileList())}}function V(){nt(s+".json",JSON.stringify(l))}async function le(){window.confirm(`Really delete file ${s}? You can't undo this.`)&&(window.localStorage.removeItem(i.key(s)),await Z())}async function Z(){re(h,s=i.newFilename(),s),re(_,l=i.emptyState(),l),t(4,T=i.saveAndGetFileList(s,l))}async function ne(p,S){let y=De(p,".json");try{let X=JSON.parse(S);i.validate(X),t(4,T=i.saveAndGetFileList(y,X)),await w(y)}catch(X){window.alert(`Couldn't load ${y}: ${X}`)}}async function G(p){let{filename:S,data:y}=p.detail;t(4,T=i.saveAndGetFileList(S,y)),await w(S)}async function w(p){try{let S=i.loadFile(p);re(h,s=p,s),re(_,l=S,l)}catch(S){window.alert(`Couldn't load ${p}: ${S}`)}}const P=p=>w(p);return r.$$set=p=>{"files"in p&&t(0,i=p.files),"currentFile"in p&&u(t(1,h=p.currentFile)),"state"in p&&n(t(2,_=p.state)),"xlsxImporter"in p&&t(3,D=p.xlsxImporter)},[i,h,_,D,T,s,te,V,le,Z,ne,G,w,P]}class ht extends ve{constructor(e){super(),be(this,e,rt,lt,_e,{files:0,currentFile:1,state:2,xlsxImporter:3})}}export{ht as F};
