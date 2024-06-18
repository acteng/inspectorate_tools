import{s as xe,a as k,g as y,i as S,f as $,Q as Be,e as x,c as C,m as ie,o as L,z as De,n as $e,r as Re,t as R,b as U,d as G,h as d,j as Ce,G as Ge,R as we,S as re}from"./scheduler.DNnUYlgZ.js";import{S as Se,i as Le,c as Y,a as H,m as N,t as F,b as A,d as j,g as be,f as ve}from"./index.tVBxdTp3.js";import{e as ke}from"./each.BkSaxPTE.js";import{b as ae}from"./paths.D0jihDZH.js";import{B as Ye,C as He}from"./ClickableCard.C-b1L8ER.js";import{F as Ne}from"./FileInput.DkO2E3GN.js";import{S as he}from"./SecondaryButton.CsCq7jjb.js";/* empty css                                                       */import{W as je}from"./WarningButton.BcgE3MAp.js";import{a as Ae}from"./index.B7xTXe2E.js";import{F as Je}from"./FormElement.DE2ZDpks.js";import{L as Te}from"./Loading.DXym9ja7.js";function Ve(r){let e,t,n,s=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
    . After importing, there will still be some problems:
    <ul><li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li></ul>`,l,o;return{c(){e=x("input"),t=k(),n=x("div"),n.innerHTML=s,this.h()},l(a){e=C(a,"INPUT",{class:!0,id:!0,type:!0}),t=y(a),n=C(a,"DIV",{class:!0,"data-svelte-h":!0}),ie(n)!=="svelte-1alapt1"&&(n.innerHTML=s),this.h()},h(){L(e,"class","govuk-file-upload"),L(e,"id","import-xlsx"),L(e,"type","file"),L(n,"class","govuk-hint")},m(a,m){S(a,e,m),r[4](e),S(a,t,m),S(a,n,m),l||(o=De(e,"change",r[2]),l=!0)},p:$e,d(a){a&&($(e),$(t),$(n)),r[4](null),l=!1,o()}}}function Xe(r){let e,t,n,s;return e=new Je({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[Ve]},$$scope:{ctx:r}}}),n=new Te({props:{loading:r[0]}}),{c(){Y(e.$$.fragment),t=k(),Y(n.$$.fragment)},l(l){H(e.$$.fragment,l),t=y(l),H(n.$$.fragment,l)},m(l,o){N(e,l,o),S(l,t,o),N(n,l,o),s=!0},p(l,[o]){const a={};o&66&&(a.$$scope={dirty:o,ctx:l}),e.$set(a);const m={};o&1&&(m.loading=l[0]),n.$set(m)},i(l){s||(F(e.$$.fragment,l),F(n.$$.fragment,l),s=!0)},o(l){A(e.$$.fragment,l),A(n.$$.fragment,l),s=!1},d(l){l&&$(t),j(e,l),j(n,l)}}}function Me(r,e,t){let n=Be(),{xlsxImporter:s}=e,l="",o;async function a(u){let g=o.files[0].name;try{t(0,l=`Loading ${g}`);let _=await o.files[0].arrayBuffer(),J=await s(_);t(0,l=""),n("imported",{filename:Ae(g,".xlsx"),data:J})}catch(_){window.alert(`Couldn't import ${g}: ${_}`),t(0,l="")}}function m(u){Re[u?"unshift":"push"](()=>{o=u,t(1,o)})}return r.$$set=u=>{"xlsxImporter"in u&&t(3,s=u.xlsxImporter)},[l,o,a,s,m]}class Oe extends Se{constructor(e){super(),Le(this,e,Me,Xe,xe,{xlsxImporter:3})}}function ye(r,e,t){const n=r.slice();return n[15]=e[t],n}function Pe(r){let e;return{c(){e=R("Rename this file")},l(t){e=G(t,"Rename this file")},m(t,n){S(t,e,n)},d(t){t&&$(e)}}}function Ue(r){let e;return{c(){e=R("Export this file")},l(t){e=G(t,"Export this file")},m(t,n){S(t,e,n)},d(t){t&&$(e)}}}function qe(r){let e;return{c(){e=R("Delete this file")},l(t){e=G(t,"Delete this file")},m(t,n){S(t,e,n)},d(t){t&&$(e)}}}function ze(r){let e,t,n,s,l,o;return e=new he({props:{$$slots:{default:[Pe]},$$scope:{ctx:r}}}),e.$on("click",r[6]),n=new he({props:{$$slots:{default:[Ue]},$$scope:{ctx:r}}}),n.$on("click",r[7]),l=new je({props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}),l.$on("click",r[8]),{c(){Y(e.$$.fragment),t=k(),Y(n.$$.fragment),s=k(),Y(l.$$.fragment)},l(a){H(e.$$.fragment,a),t=y(a),H(n.$$.fragment,a),s=y(a),H(l.$$.fragment,a)},m(a,m){N(e,a,m),S(a,t,m),N(n,a,m),S(a,s,m),N(l,a,m),o=!0},p(a,m){const u={};m&262144&&(u.$$scope={dirty:m,ctx:a}),e.$set(u);const g={};m&262144&&(g.$$scope={dirty:m,ctx:a}),n.$set(g);const _={};m&262144&&(_.$$scope={dirty:m,ctx:a}),l.$set(_)},i(a){o||(F(e.$$.fragment,a),F(n.$$.fragment,a),F(l.$$.fragment,a),o=!0)},o(a){A(e.$$.fragment,a),A(n.$$.fragment,a),A(l.$$.fragment,a),o=!1},d(a){a&&($(t),$(s)),j(e,a),j(n,a),j(l,a)}}}function We(r){let e;return{c(){e=R("New blank file")},l(t){e=G(t,"New blank file")},m(t,n){S(t,e,n)},d(t){t&&$(e)}}}function Fe(r){let e,t,n,s;return n=new Oe({props:{xlsxImporter:r[3]}}),n.$on("imported",r[11]),{c(){e=x("hr"),t=k(),Y(n.$$.fragment)},l(l){e=C(l,"HR",{}),t=y(l),H(n.$$.fragment,l)},m(l,o){S(l,e,o),S(l,t,o),N(n,l,o),s=!0},p(l,o){const a={};o&8&&(a.xlsxImporter=l[3]),n.$set(a)},i(l){s||(F(n.$$.fragment,l),s=!0)},o(l){A(n.$$.fragment,l),s=!1},d(l){l&&($(e),$(t)),j(n,l)}}}function Ke(r){let e=r[15]===r[5]?"Already selected":"",t,n;return{c(){t=R(e),n=k()},l(s){t=G(s,e),n=y(s)},m(s,l){S(s,t,l),S(s,n,l)},p(s,l){l&48&&e!==(e=s[15]===s[5]?"Already selected":"")&&Ce(t,e)},d(s){s&&($(t),$(n))}}}function Ie(r){let e,t;function n(){return r[13](r[15])}return e=new He({props:{name:`File name: ${r[15]}`,disabled:r[15]===r[5],$$slots:{default:[Ke]},$$scope:{ctx:r}}}),e.$on("click",n),{c(){Y(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,l){N(e,s,l),t=!0},p(s,l){r=s;const o={};l&16&&(o.name=`File name: ${r[15]}`),l&48&&(o.disabled=r[15]===r[5]),l&262192&&(o.$$scope={dirty:l,ctx:r}),e.$set(o)},i(s){t||(F(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){j(e,s)}}}function Qe(r){let e,t,n,s,l,o,a=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later. You can export the file to your computer to share
    with someone else, and import from a file below.`,m,u,g,_,J,T,te,E,le,Z,ne,B,w,X,c="Create or import a file",I,v,M,q,fe,ue,V,ee,_e="Load a saved file",ce,me,O,de,oe,z;E=new Ye({props:{$$slots:{default:[ze]},$$scope:{ctx:r}}}),v=new he({props:{$$slots:{default:[We]},$$scope:{ctx:r}}}),v.$on("click",r[9]),q=new Ne({props:{label:"Import from a .json file",onLoad:r[10]}});let h=r[3]!=null&&Fe(r),W=ke(r[4]),p=[];for(let i=0;i<W.length;i+=1)p[i]=Ie(ye(r,W,i));const Ee=i=>A(p[i],1,1,()=>{p[i]=null});return{c(){e=x("div"),t=x("a"),n=R("Back to overview"),l=k(),o=x("p"),o.textContent=a,m=k(),u=x("p"),g=R("You're currently editing "),_=x("u"),J=R(r[5]),T=R(`
    .`),te=k(),Y(E.$$.fragment),le=k(),Z=x("hr"),ne=k(),B=x("div"),w=x("div"),X=x("h2"),X.textContent=c,I=k(),Y(v.$$.fragment),M=k(),Y(q.$$.fragment),fe=k(),h&&h.c(),ue=k(),V=x("div"),ee=x("h2"),ee.textContent=_e,ce=k();for(let i=0;i<p.length;i+=1)p[i].c();me=k(),O=x("a"),de=R("Back to overview"),this.h()},l(i){e=C(i,"DIV",{class:!0});var f=U(e);t=C(f,"A",{href:!0,class:!0});var D=U(t);n=G(D,"Back to overview"),D.forEach($),l=y(f),o=C(f,"P",{"data-svelte-h":!0}),ie(o)!=="svelte-1yvzirp"&&(o.textContent=a),m=y(f),u=C(f,"P",{});var K=U(u);g=G(K,"You're currently editing "),_=C(K,"U",{});var b=U(_);J=G(b,r[5]),b.forEach($),T=G(K,`
    .`),K.forEach($),te=y(f),H(E.$$.fragment,f),le=y(f),Z=C(f,"HR",{}),ne=y(f),B=C(f,"DIV",{class:!0});var Q=U(B);w=C(Q,"DIV",{class:!0});var P=U(w);X=C(P,"H2",{"data-svelte-h":!0}),ie(X)!=="svelte-1yqhw3l"&&(X.textContent=c),I=y(P),H(v.$$.fragment,P),M=y(P),H(q.$$.fragment,P),fe=y(P),h&&h.l(P),P.forEach($),ue=y(Q),V=C(Q,"DIV",{class:!0});var se=U(V);ee=C(se,"H2",{"data-svelte-h":!0}),ie(ee)!=="svelte-oj70x0"&&(ee.textContent=_e),ce=y(se);for(let pe=0;pe<p.length;pe+=1)p[pe].l(se);se.forEach($),Q.forEach($),me=y(f),O=C(f,"A",{href:!0,class:!0});var ge=U(O);de=G(ge,"Back to overview"),ge.forEach($),f.forEach($),this.h()},h(){L(t,"href",s=ae+"/"+r[0].prefix),L(t,"class","govuk-back-link"),L(w,"class","govuk-grid-column-one-half"),L(V,"class","govuk-grid-column-one-half"),L(B,"class","govuk-grid-row"),L(O,"href",oe=ae+"/"+r[0].prefix),L(O,"class","govuk-back-link"),L(e,"class","govuk-width-container")},m(i,f){S(i,e,f),d(e,t),d(t,n),d(e,l),d(e,o),d(e,m),d(e,u),d(u,g),d(u,_),d(_,J),d(u,T),d(e,te),N(E,e,null),d(e,le),d(e,Z),d(e,ne),d(e,B),d(B,w),d(w,X),d(w,I),N(v,w,null),d(w,M),N(q,w,null),d(w,fe),h&&h.m(w,null),d(B,ue),d(B,V),d(V,ee),d(V,ce);for(let D=0;D<p.length;D+=1)p[D]&&p[D].m(V,null);d(e,me),d(e,O),d(O,de),z=!0},p(i,[f]){(!z||f&1&&s!==(s=ae+"/"+i[0].prefix))&&L(t,"href",s),(!z||f&32)&&Ce(J,i[5]);const D={};f&262144&&(D.$$scope={dirty:f,ctx:i}),E.$set(D);const K={};if(f&262144&&(K.$$scope={dirty:f,ctx:i}),v.$set(K),i[3]!=null?h?(h.p(i,f),f&8&&F(h,1)):(h=Fe(i),h.c(),F(h,1),h.m(w,null)):h&&(be(),A(h,1,1,()=>{h=null}),ve()),f&4144){W=ke(i[4]);let b;for(b=0;b<W.length;b+=1){const Q=ye(i,W,b);p[b]?(p[b].p(Q,f),F(p[b],1)):(p[b]=Ie(Q),p[b].c(),F(p[b],1),p[b].m(V,null))}for(be(),b=W.length;b<p.length;b+=1)Ee(b);ve()}(!z||f&1&&oe!==(oe=ae+"/"+i[0].prefix))&&L(O,"href",oe)},i(i){if(!z){F(E.$$.fragment,i),F(v.$$.fragment,i),F(q.$$.fragment,i),F(h);for(let f=0;f<W.length;f+=1)F(p[f]);z=!0}},o(i){A(E.$$.fragment,i),A(v.$$.fragment,i),A(q.$$.fragment,i),A(h),p=p.filter(Boolean);for(let f=0;f<p.length;f+=1)A(p[f]);z=!1},d(i){i&&$(e),j(E),j(v),j(q),h&&h.d(),Ge(p,i)}}}function Ze(r,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",r),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function et(r,e,t){let n,s=$e,l=()=>(s(),s=we(_,c=>t(14,n=c)),_),o,a=$e,m=()=>(a(),a=we(g,c=>t(5,o=c)),g);r.$$.on_destroy.push(()=>s()),r.$$.on_destroy.push(()=>a());let{files:u}=e,{currentFile:g}=e;m();let{state:_}=e;l();let{xlsxImporter:J=null}=e,T=u.getFileList();function te(){let c=window.prompt(`Rename file ${o} to what?`,o);if(c){let I=u.key(o),v=window.localStorage.getItem(I);window.localStorage.setItem(u.key(c),v),window.localStorage.removeItem(I),re(g,o=c,o),t(4,T=u.getFileList())}}function E(){Ze(o+".json",JSON.stringify(n))}async function le(){window.confirm(`Really delete file ${o}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`)&&(E(),window.localStorage.removeItem(u.key(o)),await Z())}async function Z(){re(g,o=u.newFilename(),o),re(_,n=u.emptyState(),n),t(4,T=u.saveAndGetFileList(o,n))}async function ne(c,I){let v=Ae(c,".json");try{let M=JSON.parse(I);u.validate(M),t(4,T=u.saveAndGetFileList(v,M)),await w(v)}catch(M){window.alert(`Couldn't load ${v}: ${M}`)}}async function B(c){let{filename:I,data:v}=c.detail;t(4,T=u.saveAndGetFileList(I,v)),await w(I)}async function w(c){try{let I=u.loadFile(c);re(g,o=c,o),re(_,n=I,n)}catch(I){window.alert(`Couldn't load ${c}: ${I}`)}}const X=c=>w(c);return r.$$set=c=>{"files"in c&&t(0,u=c.files),"currentFile"in c&&m(t(1,g=c.currentFile)),"state"in c&&l(t(2,_=c.state)),"xlsxImporter"in c&&t(3,J=c.xlsxImporter)},[u,g,_,J,T,o,te,E,le,Z,ne,B,w,X]}class dt extends Se{constructor(e){super(),Le(this,e,et,Qe,xe,{files:0,currentFile:1,state:2,xlsxImporter:3})}}export{dt as F};
