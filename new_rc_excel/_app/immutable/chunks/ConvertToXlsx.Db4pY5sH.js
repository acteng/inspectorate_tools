import{s as T,r as D,a as x,g as S,i as f,w as N,f as p,k as I,e as B,t as E,c as K,d as A,I as j,q as F,v as H,n as J,p as O}from"./scheduler.DGwhun8C.js";import{S as U,i as q,e as G,c as $,a as d,m as v,t as k,b as y,d as _}from"./index.B2vZYn3d.js";import{h as V}from"./index.COvnHi4S.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.Cw7qhkQt.js";import{S as M}from"./SecondaryButton.zQkvdoBX.js";import{W as X}from"./WarningText.wRiJ9IQ1.js";import{L as z}from"./Loading.BYdSch8T.js";import{M as Q}from"./Modal.CVkoc34s.js";import"./paths.BQFxDono.js";import"./entry.DpXTIvWm.js";import{d as Y}from"./download.C6h074W8.js";import{c as Z,s as ee}from"./data.DDJkEPcn.js";import{E as te}from"./exceljs.min.BCG-IHLn.js";import{g as le,a as oe}from"./lists.Bn2sGx3F.js";const re=""+new URL("../assets/blank_route_check.ukzb3rA0.xlsx",import.meta.url).href;async function ne(t,o){console.log("Loading blank route check xlsx");let l=await(await fetch(re)).arrayBuffer(),r=new te.Workbook;await r.xlsx.load(l),r.eachSheet((s,i)=>{s.conditionalFormattings=[]}),ae(t,r),se(t,r),ie(t,r),ue(t,r),C(t.safetyCheck,r,"3.1 Safety Check",["J","K","L","M"],h([[13,28]])),C(t.streetCheck,r,"4.1 Street Check",["J","K","L","M"],h([[13,19],[23,25],[29,34],[38,43],[47,50]])),C(t.streetPlacemakingCheck,r,"4.2 Street Placemaking Check",["I","J","K","L"],h([[13,15],[19,21],[25,34],[38,47]])),C(t.pathCheck,r,"5.1 Path Check",["J","K","L","M"],h([[15,19],[23,33],[37,40],[44,48],[52,56]])),C(t.pathPlacemakingCheck,r,"5.2 Path Placemaking Check",["I","J","K","L"],h([[12,14],[20,22],[26,29],[33,41]])),ce(t,r),r.getWorksheet("5.1 Path Check").getCell("D7").value=t.horseRiders,r.getWorksheet("7.1 Results Summary").getCell("G7").value=t.resultsReviewStatement,console.log("Writing route check xlsx");let n=await r.xlsx.writeBuffer();V(n,`route_check_${o}.xlsx`)}function ae(t,o){let e=o.getWorksheet("1. Summary of Scheme");e.getCell("C6").value=t.summary.dateDesignReview,e.getCell("C7").value=t.summary.schemeReference,e.getCell("C8").value=t.summary.schemeName,e.getCell("C9").value=t.summary.schemeSummary,e.getCell("C10").value=t.summary.schemeInfoReviewed,e.getCell("C11").value=t.summary.authority,e.getCell("C12").value=t.summary.transportOrCombinedAuthority,e.getCell("C13").value=t.summary.region,e.getCell("C14").value=t.summary.fundingProgramme,e.getCell("C15").value=t.summary.designStage,e.getCell("C16").value=t.summary.fundingConditions,e.getCell("C17").value=t.summary.inspectorEmail,e.getCell("C18").value=t.summary.assessedRouteLengthKm,e.getCell("C19").value=t.summary.totalRouteLengthKm,e.getCell("C20").value=t.summary.notes,e.getCell("D22").value=t.summary.checkType=="path"?"Path Check":"Street Check";for(let l of t.summary.networkMap.features)if(l.geometry.type=="LineString"){e.getCell("C26").value=l.geometry.coordinates[0][1],e.getCell("D26").value=l.geometry.coordinates[0][0],e.getCell("C27").value=l.geometry.coordinates[0][1],e.getCell("D27").value=l.geometry.coordinates[0][0],e.getCell("C28").value=`https://www.openstreetmap.org/#map=18/${l.geometry.coordinates[0][1]}/${l.geometry.coordinates[0][0]}`;break}}function se(t,o){let e=o.getWorksheet("2.1 Policy Check");for(let l=0;l<6;l++)e.getCell("D"+(8+l)).value=t.policyCheck[l].existing,e.getCell("E"+(8+l)).value=t.policyCheck[l].proposed,e.getCell("F"+(8+l)).value=t.policyCheck[l].commentary}function ie(t,o){let e=o.getWorksheet("2.2 Policy Conflict Log");for(let[l,r]of t.policyConflictLog.entries())e.getCell("F"+(8+l)).value=le(r.conflict),e.getCell("H"+(8+l)).value=r.stage,e.getCell("I"+(8+l)).value=R(r.point),e.getCell("J"+(8+l)).value=r.locationName,e.getCell("K"+(8+l)).value=r.stage==="Design"?"No":r.resolved,e.getCell("L"+(8+l)).value=r.notes;for(let l=0;l<42;l++)e.getCell("F"+(8+l)).dataValidation={type:"list",allowBlank:!0,formulae:["'8.2 Lookups&Forumlae2'!$B$7:$B$12"]}}function ue(t,o){let e=o.getWorksheet("3.2 Critical Issues Log");for(let[l,r]of t.criticalIssues.entries())e.getCell("F"+(8+l)).value=oe(r.criticalIssue),e.getCell("H"+(8+l)).value=r.stage,e.getCell("I"+(8+l)).value=R(r.point),e.getCell("J"+(8+l)).value=r.locationName,e.getCell("K"+(8+l)).value=r.stage==="Design"?"No":r.resolved,e.getCell("L"+(8+l)).value=r.notes;for(let l=0;l<42;l++)e.getCell("F"+(8+l)).dataValidation={type:"list",allowBlank:!0,formulae:["'8.2 Lookups&Forumlae2'!$B$16:$B$39"]}}function C(t,o,e,l,r){let n=o.getWorksheet(e);if(r.length!=t.existingScores.length)throw new Error(`Wrong Excel ranges for ${e}`);for(let s=0;s<t.existingScores.length;s++){let i=r[s];n.getCell(l[0]+i).value=W(t.existingScores[s]),n.getCell(l[1]+i).value=t.existingScoreNotes[s],n.getCell(l[2]+i).value=W(t.proposedScores[s]),n.getCell(l[3]+i).value=t.proposedScoreNotes[s]}}function ce(t,o){let e=o.getWorksheet("6. JAT Check"),l=0;for(let r of t.jat)for(let n of[r.existing,r.proposed]){let s=g("H",l*5);e.getCell(g(s,1)+"9").value=r.name,e.getCell(g(s,1)+"10").value=n.notes;for(let[i,u]of n.movements.filter(m=>m.kind=="walking & wheeling").entries())e.getCell(s+(13+i)).value=u.name,e.getCell(g(s,2)+(13+i)).value=P(u.score),e.getCell(g(s,3)+(13+i)).value=u.notes;for(let[i,u]of n.movements.filter(m=>m.kind=="cycling").entries())e.getCell(s+(26+i)).value=u.name,e.getCell(g(s,2)+(26+i)).value=P(u.score),e.getCell(g(s,3)+(26+i)).value=u.notes;l++}}function g(t,o){return ge(me(t)+o)}function me(t){let o=0;for(let e=0;e<t.length;e++)o*=26,o+=t.charCodeAt(e)-65+1;return o-1}function ge(t){let o="";for(t+=1;t>0;){let e=(t-1)%26;o=String.fromCharCode(e+65)+o,t=Math.floor((t-1)/26)}return o}function h(t){let o=[];for(let[e,l]of t)for(let r=e;r<=l;r++)o.push(r);return o}function W(t){return{"":t,C:t,0:0,1:1,2:2,"N/A":t}[t]}function P(t){return{0:0,1:1,2:2,X:t}[t]}function R(t){return`${t[1]}, ${t[0]}`}function fe(t){let o,e,l;return{c(){o=B("img"),l=E(`
  Export .xlsx`),this.h()},l(r){o=K(r,"IMG",{src:!0,alt:!0,style:!0}),l=A(r,`
  Export .xlsx`),this.h()},h(){j(o.src,e=Y)||F(o,"src",e),F(o,"alt",""),H(o,"vertical-align","middle")},m(r,n){f(r,o,n),f(r,l,n)},p:J,d(r){r&&(p(o),p(l))}}}function pe(t){let o,e=`<li>When you open the file, you need to force Excel to recalculate all
        formulas with Ctrl + Alt + F9.</li> <li>The route coordinates in the Summary of Scheme may not capture
        everything mapped when the route is split into multiple pieces.</li> <li>The map weblink only shows the route start point.</li>`;return{c(){o=B("ul"),o.innerHTML=e},l(l){o=K(l,"UL",{"data-svelte-h":!0}),O(o)!=="svelte-jjr0kp"&&(o.innerHTML=e)},m(l,r){f(l,o,r)},p:J,d(l){l&&p(o)}}}function Ce(t){let o;return{c(){o=E("OK")},l(e){o=A(e,"OK")},m(e,l){f(e,o,l)},d(e){e&&p(o)}}}function he(t){let o,e,l,r;return o=new X({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}}),l=new M({props:{$$slots:{default:[Ce]},$$scope:{ctx:t}}}),l.$on("click",t[3]),{c(){$(o.$$.fragment),e=x(),$(l.$$.fragment)},l(n){d(o.$$.fragment,n),e=S(n),d(l.$$.fragment,n)},m(n,s){v(o,n,s),f(n,e,s),v(l,n,s),r=!0},p(n,s){const i={};s&128&&(i.$$scope={dirty:s,ctx:n}),o.$set(i);const u={};s&128&&(u.$$scope={dirty:s,ctx:n}),l.$set(u)},i(n){r||(k(o.$$.fragment,n),k(l.$$.fragment,n),r=!0)},o(n){y(o.$$.fragment,n),y(l.$$.fragment,n),r=!1},d(n){n&&p(e),_(o,n),_(l,n)}}}function $e(t){let o,e,l,r,n,s,i;o=new M({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),o.$on("click",t[2]),l=new z({props:{loading:t[0]}});function u(a){t[4](a)}let m={title:"Route check exported to Excel",$$slots:{default:[he]},$$scope:{ctx:t}};return t[1]!==void 0&&(m.open=t[1]),n=new Q({props:m}),D.push(()=>G(n,"open",u)),{c(){$(o.$$.fragment),e=x(),$(l.$$.fragment),r=x(),$(n.$$.fragment)},l(a){d(o.$$.fragment,a),e=S(a),d(l.$$.fragment,a),r=S(a),d(n.$$.fragment,a)},m(a,c){v(o,a,c),f(a,e,c),v(l,a,c),f(a,r,c),v(n,a,c),i=!0},p(a,[c]){const b={};c&128&&(b.$$scope={dirty:c,ctx:a}),o.$set(b);const L={};c&1&&(L.loading=a[0]),l.$set(L);const w={};c&130&&(w.$$scope={dirty:c,ctx:a}),!s&&c&2&&(s=!0,w.open=a[1],N(()=>s=!1)),n.$set(w)},i(a){i||(k(o.$$.fragment,a),k(l.$$.fragment,a),k(n.$$.fragment,a),i=!0)},o(a){y(o.$$.fragment,a),y(l.$$.fragment,a),y(n.$$.fragment,a),i=!1},d(a){a&&(p(e),p(r)),_(o,a),_(l,a),_(n,a)}}}function de(t,o,e){let l,r;I(t,Z,a=>e(5,l=a)),I(t,ee,a=>e(6,r=a));let n="",s=!1;async function i(){e(0,n="Converting to .xlsx (takes about 20 seconds)");try{await ne(r,l),e(1,s=!0)}catch(a){window.alert(`Conversion failed: ${a}`)}e(0,n="")}const u=()=>e(1,s=!1);function m(a){s=a,e(1,s)}return[n,s,i,u,m]}class Ee extends U{constructor(o){super(),q(this,o,de,$e,T,{})}}export{Ee as C};
