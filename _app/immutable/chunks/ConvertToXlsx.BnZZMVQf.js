import{s as A,r as N,a as x,g as S,i as f,w as j,f as p,k as I,e as B,t as E,c as J,d as K,I as D,q as F,v as H,n as M,p as O}from"./scheduler.DGwhun8C.js";import{S as U,i as q,e as X,c as $,a as d,m as v,t as k,b as y,d as _}from"./index.B2vZYn3d.js";import{h as G}from"./index.ChUBPTxy.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.7aHvPAMX.js";import{S as R}from"./SecondaryButton.zQkvdoBX.js";import{W as V}from"./WarningText.wRiJ9IQ1.js";import{L as z}from"./Loading.BWqHdyOk.js";import{M as Q}from"./Modal.CpuHZSD2.js";import"./paths.CDLKZQbY.js";import"./entry.DlkDOLUJ.js";import{d as Y}from"./download.C6h074W8.js";import{E as Z}from"./exceljs.min.NoyZXX-l.js";import{g as ee,a as te}from"./lists.CDD60ceY.js";import{c as le,s as oe}from"./data.DIFi6zu8.js";const ne=""+new URL("../assets/blank_route_check.CLJnhfOX.xlsx",import.meta.url).href;async function re(e,o){console.log("Loading blank route check xlsx");let l=await(await fetch(ne)).arrayBuffer(),n=new Z.Workbook;await n.xlsx.load(l),n.eachSheet((s,i)=>{s.conditionalFormattings=[]}),ae(e,n),se(e,n),ie(e,n),ue(e,n),C(e.safetyCheck,n,"3.1 Safety Check",["J","K","L","M"],h([[13,28]])),C(e.streetCheck,n,"4.1 Street Check",["J","K","L","M"],h([[13,19],[23,25],[29,34],[38,43],[47,50]])),C(e.streetPlacemakingCheck,n,"4.2 Street Placemaking Check",["I","J","K","L"],h([[13,15],[19,21],[25,34],[38,47]])),C(e.pathCheck,n,"5.1 Path Check",["J","K","L","M"],h([[15,19],[23,33],[37,40],[44,48],[52,56]])),C(e.pathPlacemakingCheck,n,"5.2 Path Placemaking Check",["I","J","K","L"],h([[12,14],[20,22],[26,29],[33,41]])),ce(e,n),n.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,n.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let r=await n.xlsx.writeBuffer();G(r,`route_check_${o}.xlsx`)}function ae(e,o){let t=o.getWorksheet("1. Summary of Scheme");t.getCell("C6").value=e.summary.dateDesignReview,t.getCell("C7").value=e.summary.schemeReference,t.getCell("C8").value=e.summary.schemeName,t.getCell("C9").value=e.summary.schemeSummary,t.getCell("C10").value=e.summary.schemeInfoReviewed,t.getCell("C11").value=e.summary.authority,t.getCell("C12").value=e.summary.transportOrCombinedAuthority,t.getCell("C13").value=e.summary.region,t.getCell("C14").value=e.summary.fundingProgramme,t.getCell("C15").value=e.summary.designStage,t.getCell("C16").value=e.summary.fundingConditions,t.getCell("C17").value=e.summary.inspectorEmail,t.getCell("C18").value=e.summary.assessedRouteLengthKm,t.getCell("C19").value=e.summary.totalRouteLengthKm,t.getCell("C20").value=e.summary.notes,t.getCell("D22").value=e.summary.checkType=="path"?"Path Check":"Street Check";for(let l of e.summary.networkMap.features)if(l.geometry.type=="LineString"){let n=l.geometry.coordinates[0];t.getCell("C26").value=`${n[1]}, ${n[0]}`;let r=l.geometry.coordinates[l.geometry.coordinates.length-1];t.getCell("C27").value=`${r[1]}, ${r[0]}`,t.getCell("C28").value=`https://www.google.com/maps/@${n[1]},${n[0]},17z`;break}}function se(e,o){let t=o.getWorksheet("2.1 Policy Check");for(let l=0;l<6;l++)t.getCell("D"+(8+l)).value=e.policyCheck[l].existing,t.getCell("E"+(8+l)).value=e.policyCheck[l].proposed,t.getCell("F"+(8+l)).value=e.policyCheck[l].commentary}function ie(e,o){let t=o.getWorksheet("2.2 Policy Conflict Log");for(let[l,n]of e.policyConflictLog.entries())t.getCell("F"+(8+l)).value=ee(n.conflict),t.getCell("H"+(8+l)).value=n.stage,t.getCell("I"+(8+l)).value=T(n.point),t.getCell("J"+(8+l)).value=n.locationName,t.getCell("K"+(8+l)).value=n.stage==="Design"?"No":n.resolved,t.getCell("L"+(8+l)).value=n.notes;for(let l=0;l<42;l++)t.getCell("F"+(8+l)).dataValidation={type:"list",allowBlank:!0,formulae:["'8.2 Lookups&Forumlae2'!$B$7:$B$12"]}}function ue(e,o){let t=o.getWorksheet("3.2 Critical Issues Log");for(let[l,n]of e.criticalIssues.entries())t.getCell("F"+(8+l)).value=te(n.criticalIssue),t.getCell("H"+(8+l)).value=n.stage,t.getCell("I"+(8+l)).value=T(n.point),t.getCell("J"+(8+l)).value=n.locationName,t.getCell("K"+(8+l)).value=n.stage==="Design"?"No":n.resolved,t.getCell("L"+(8+l)).value=n.notes;for(let l=0;l<42;l++)t.getCell("F"+(8+l)).dataValidation={type:"list",allowBlank:!0,formulae:["'8.2 Lookups&Forumlae2'!$B$16:$B$39"]}}function C(e,o,t,l,n){let r=o.getWorksheet(t);if(n.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${t}`);for(let s=0;s<e.existingScores.length;s++){let i=n[s];r.getCell(l[0]+i).value=P(e.existingScores[s]),r.getCell(l[1]+i).value=e.existingScoreNotes[s],r.getCell(l[2]+i).value=P(e.proposedScores[s]),r.getCell(l[3]+i).value=e.proposedScoreNotes[s]}}function ce(e,o){let t=o.getWorksheet("6. JAT Check"),l=0;for(let n of e.jat)for(let r of[n.existing,n.proposed]){let s=g("H",l*5);t.getCell(g(s,1)+"9").value=n.name,t.getCell(g(s,1)+"10").value=r.notes;for(let[i,u]of r.movements.filter(m=>m.kind=="walking & wheeling").entries())t.getCell(s+(13+i)).value=u.name,t.getCell(g(s,2)+(13+i)).value=W(u.score),t.getCell(g(s,3)+(13+i)).value=u.notes;for(let[i,u]of r.movements.filter(m=>m.kind=="cycling").entries())t.getCell(s+(26+i)).value=u.name,t.getCell(g(s,2)+(26+i)).value=W(u.score),t.getCell(g(s,3)+(26+i)).value=u.notes;l++}}function g(e,o){return ge(me(e)+o)}function me(e){let o=0;for(let t=0;t<e.length;t++)o*=26,o+=e.charCodeAt(t)-65+1;return o-1}function ge(e){let o="";for(e+=1;e>0;){let t=(e-1)%26;o=String.fromCharCode(t+65)+o,e=Math.floor((e-1)/26)}return o}function h(e){let o=[];for(let[t,l]of e)for(let n=t;n<=l;n++)o.push(n);return o}function P(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function W(e){return{0:0,1:1,2:2,X:e}[e]}function T(e){return`${e[1]}, ${e[0]}`}function fe(e){let o,t,l;return{c(){o=B("img"),l=E(`
  Export .xlsx`),this.h()},l(n){o=J(n,"IMG",{src:!0,alt:!0,style:!0}),l=K(n,`
  Export .xlsx`),this.h()},h(){D(o.src,t=Y)||F(o,"src",t),F(o,"alt",""),H(o,"vertical-align","middle")},m(n,r){f(n,o,r),f(n,l,r)},p:M,d(n){n&&(p(o),p(l))}}}function pe(e){let o,t=`<li>When you open the file, you need to force Excel to recalculate all
        formulas with Ctrl + Alt + F9.</li> <li>The route coordinates in the Summary of Scheme may not capture
        everything mapped when the route is split into multiple pieces.</li> <li>The map weblink only shows the route start point.</li>`;return{c(){o=B("ul"),o.innerHTML=t},l(l){o=J(l,"UL",{"data-svelte-h":!0}),O(o)!=="svelte-jjr0kp"&&(o.innerHTML=t)},m(l,n){f(l,o,n)},p:M,d(l){l&&p(o)}}}function Ce(e){let o;return{c(){o=E("OK")},l(t){o=K(t,"OK")},m(t,l){f(t,o,l)},d(t){t&&p(o)}}}function he(e){let o,t,l,n;return o=new V({props:{$$slots:{default:[pe]},$$scope:{ctx:e}}}),l=new R({props:{$$slots:{default:[Ce]},$$scope:{ctx:e}}}),l.$on("click",e[3]),{c(){$(o.$$.fragment),t=x(),$(l.$$.fragment)},l(r){d(o.$$.fragment,r),t=S(r),d(l.$$.fragment,r)},m(r,s){v(o,r,s),f(r,t,s),v(l,r,s),n=!0},p(r,s){const i={};s&128&&(i.$$scope={dirty:s,ctx:r}),o.$set(i);const u={};s&128&&(u.$$scope={dirty:s,ctx:r}),l.$set(u)},i(r){n||(k(o.$$.fragment,r),k(l.$$.fragment,r),n=!0)},o(r){y(o.$$.fragment,r),y(l.$$.fragment,r),n=!1},d(r){r&&p(t),_(o,r),_(l,r)}}}function $e(e){let o,t,l,n,r,s,i;o=new R({props:{$$slots:{default:[fe]},$$scope:{ctx:e}}}),o.$on("click",e[2]),l=new z({props:{loading:e[0]}});function u(a){e[4](a)}let m={title:"Route check exported to Excel",$$slots:{default:[he]},$$scope:{ctx:e}};return e[1]!==void 0&&(m.open=e[1]),r=new Q({props:m}),N.push(()=>X(r,"open",u)),{c(){$(o.$$.fragment),t=x(),$(l.$$.fragment),n=x(),$(r.$$.fragment)},l(a){d(o.$$.fragment,a),t=S(a),d(l.$$.fragment,a),n=S(a),d(r.$$.fragment,a)},m(a,c){v(o,a,c),f(a,t,c),v(l,a,c),f(a,n,c),v(r,a,c),i=!0},p(a,[c]){const b={};c&128&&(b.$$scope={dirty:c,ctx:a}),o.$set(b);const L={};c&1&&(L.loading=a[0]),l.$set(L);const w={};c&130&&(w.$$scope={dirty:c,ctx:a}),!s&&c&2&&(s=!0,w.open=a[1],j(()=>s=!1)),r.$set(w)},i(a){i||(k(o.$$.fragment,a),k(l.$$.fragment,a),k(r.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(l.$$.fragment,a),y(r.$$.fragment,a),i=!1},d(a){a&&(p(t),p(n)),_(o,a),_(l,a),_(r,a)}}}function de(e,o,t){let l,n;I(e,le,a=>t(5,l=a)),I(e,oe,a=>t(6,n=a));let r="",s=!1;async function i(){t(0,r="Converting to .xlsx (takes about 20 seconds)");try{await re(n,l),t(1,s=!0)}catch(a){window.alert(`Conversion failed: ${a}`)}t(0,r="")}const u=()=>t(1,s=!1);function m(a){s=a,t(1,s)}return[r,s,i,u,m]}class Ee extends U{constructor(o){super(),q(this,o,de,$e,A,{})}}export{Ee as C};
