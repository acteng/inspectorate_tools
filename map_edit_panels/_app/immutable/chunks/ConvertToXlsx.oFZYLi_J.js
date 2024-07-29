import{s as R,a as v,e as d,g as y,c as k,m as A,i as C,f,k as S,t as K,d as T,o as D,p as _,n as M}from"./scheduler.D5JRtHaf.js";import{S as N,i as H,c as $,a as L,m as b,t as I,b as P,d as W}from"./index.Xm1AgzMF.js";import{c as j,s as B}from"./data.BsGaHVCn.js";import{S as G}from"./SecondaryButton.DxO4nu9r.js";/* empty css                                            */import{E as U}from"./exceljs.min.BuyXGIGS.js";import{g as q,a as O}from"./lists.BvURpO7c.js";import{a as X}from"./index.BuRGne7-.js";import{L as z,d as Q}from"./download.C5wbvPO0.js";import"./paths.Blhhof_T.js";const V=""+new URL("../assets/blank_route_check.CfWjwSGn.xlsx",import.meta.url).href;async function Y(e,r){console.log("Loading blank route check xlsx");let l=await(await fetch(V)).arrayBuffer(),o=new U.Workbook;await o.xlsx.load(l),o.eachSheet((n,i)=>{n.conditionalFormattings=[]}),Z(e,o),ee(e,o),te(e,o),le(e,o),h(e.safetyCheck,o,"3.1 Safety Check",["J","K","L","M"],p([[13,28]])),h(e.streetCheck,o,"4.1 Street Check",["J","K","L","M"],p([[13,19],[23,25],[29,34],[38,43],[47,50]])),h(e.streetPlacemakingCheck,o,"4.2 Street Placemaking Check",["I","J","K","L"],p([[13,15],[19,21],[25,34],[38,47]])),h(e.pathCheck,o,"5.1 Path Check",["J","K","L","M"],p([[15,19],[23,33],[37,40],[44,48],[52,56]])),h(e.pathPlacemakingCheck,o,"5.2 Path Placemaking Check",["I","J","K","L"],p([[12,14],[20,22],[26,29],[33,41]])),oe(e,o),o.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,o.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let s=await o.xlsx.writeBuffer();X(s,`route_check_${r}.xlsx`)}function Z(e,r){let t=r.getWorksheet("1. Summary of Scheme");t.getCell("C6").value=e.summary.dateDesignReview,t.getCell("C7").value=e.summary.schemeReference,t.getCell("C8").value=e.summary.schemeName,t.getCell("C9").value=e.summary.schemeSummary,t.getCell("C10").value=e.summary.schemeInfoReviewed,t.getCell("C11").value=e.summary.authority,t.getCell("C12").value=e.summary.transportOrCombinedAuthority,t.getCell("C13").value=e.summary.region,t.getCell("C14").value=e.summary.fundingProgramme,t.getCell("C15").value=e.summary.designStage,t.getCell("C16").value=e.summary.fundingConditions,t.getCell("C17").value=e.summary.inspectorEmail,t.getCell("C18").value=e.summary.assessedRouteLengthKm,t.getCell("C19").value=e.summary.totalRouteLengthKm,t.getCell("C20").value=e.summary.notes,e.summary.checkType=="path"&&(t.getCell("D22").value="Path Check");for(let l of e.summary.networkMap.features)if(l.geometry.type=="LineString"){t.getCell("C26").value=l.geometry.coordinates[0][1],t.getCell("D26").value=l.geometry.coordinates[0][0],t.getCell("C27").value=l.geometry.coordinates[0][1],t.getCell("D27").value=l.geometry.coordinates[0][0],t.getCell("C28").value=`https://www.openstreetmap.org/#map=18/${l.geometry.coordinates[0][1]}/${l.geometry.coordinates[0][0]}`;break}}function ee(e,r){let t=r.getWorksheet("2.1 Policy Check");for(let l=0;l<6;l++)t.getCell("D"+(8+l)).value=e.policyCheck[l].existing,t.getCell("E"+(8+l)).value=e.policyCheck[l].proposed,t.getCell("F"+(8+l)).value=e.policyCheck[l].commentary}function te(e,r){let t=r.getWorksheet("2.2 Policy Conflict Log");for(let[l,o]of e.policyConflictLog.entries())t.getCell("F"+(8+l)).value=q(o.conflict),t.getCell("H"+(8+l)).value=o.stage,t.getCell("I"+(8+l)).value=J(o.point),t.getCell("J"+(8+l)).value=o.locationName,t.getCell("K"+(8+l)).value=o.stage==="Design"?"No":o.resolved,t.getCell("L"+(8+l)).value=o.notes}function le(e,r){let t=r.getWorksheet("3.2 Critical Issues Log");for(let[l,o]of e.criticalIssues.entries())t.getCell("F"+(8+l)).value=O(o.criticalIssue),t.getCell("H"+(8+l)).value=o.stage,t.getCell("I"+(8+l)).value=J(o.point),t.getCell("J"+(8+l)).value=o.locationName,t.getCell("K"+(8+l)).value=o.stage==="Design"?"No":o.resolved,t.getCell("L"+(8+l)).value=o.notes}function h(e,r,t,l,o){let s=r.getWorksheet(t);if(o.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${t}`);for(let n=0;n<e.existingScores.length;n++){let i=o[n];s.getCell(l[0]+i).value=E(e.existingScores[n]),s.getCell(l[1]+i).value=e.existingScoreNotes[n],s.getCell(l[2]+i).value=E(e.proposedScores[n]),s.getCell(l[3]+i).value=e.proposedScoreNotes[n]}}function oe(e,r){let t=r.getWorksheet("6. JAT Check"),l=0;for(let o of e.jat)for(let s of[o.existing,o.proposed]){let n=g("H",l*5);t.getCell(g(n,1)+"9").value=o.name,t.getCell(g(n,1)+"10").value=s.notes;for(let[i,u]of s.movements.filter(m=>m.kind=="walking & wheeling").entries())t.getCell(n+(13+i)).value=u.name,t.getCell(g(n,2)+(13+i)).value=F(u.score),t.getCell(g(n,3)+(13+i)).value=u.notes;for(let[i,u]of s.movements.filter(m=>m.kind=="cycling").entries())t.getCell(n+(26+i)).value=u.name,t.getCell(g(n,2)+(26+i)).value=F(u.score),t.getCell(g(n,3)+(26+i)).value=u.notes;l++}}function g(e,r){return ne(re(e)+r)}function re(e){let r=0;for(let t=0;t<e.length;t++)r*=26,r+=e.charCodeAt(t)-65+1;return r-1}function ne(e){let r="";for(e+=1;e>0;){let t=(e-1)%26;r=String.fromCharCode(t+65)+r,e=Math.floor((e-1)/26)}return r}function p(e){let r=[];for(let[t,l]of e)for(let o=t;o<=l;o++)r.push(o);return r}function E(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function F(e){return{0:0,1:1,2:2,X:e}[e]}function J(e){return`${e[1]}, ${e[0]}`}function ae(e){let r,t,l;return{c(){r=d("img"),l=K(`
  Export .xlsx`),this.h()},l(o){r=k(o,"IMG",{src:!0,alt:!0}),l=T(o,`
  Export .xlsx`),this.h()},h(){D(r.src,t=Q)||_(r,"src",t),_(r,"alt","Export .xlsx")},m(o,s){C(o,r,s),C(o,l,s)},p:M,d(o){o&&(f(r),f(l))}}}function ie(e){let r,t,l,o=`<i>When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9. The route coordinates in the Summary of Scheme may not
    capture everything mapped when the route is split into multiple pieces. The
    map weblink only shows the route start point.</i>`,s,n,i,u,m;return r=new G({props:{$$slots:{default:[ae]},$$scope:{ctx:e}}}),r.$on("click",e[1]),n=new z({props:{loading:e[0]}}),{c(){$(r.$$.fragment),t=v(),l=d("p"),l.innerHTML=o,s=v(),$(n.$$.fragment),i=v(),u=d("hr")},l(a){L(r.$$.fragment,a),t=y(a),l=k(a,"P",{"data-svelte-h":!0}),A(l)!=="svelte-1lahb25"&&(l.innerHTML=o),s=y(a),L(n.$$.fragment,a),i=y(a),u=k(a,"HR",{})},m(a,c){b(r,a,c),C(a,t,c),C(a,l,c),C(a,s,c),b(n,a,c),C(a,i,c),C(a,u,c),m=!0},p(a,[c]){const x={};c&16&&(x.$$scope={dirty:c,ctx:a}),r.$set(x);const w={};c&1&&(w.loading=a[0]),n.$set(w)},i(a){m||(I(r.$$.fragment,a),I(n.$$.fragment,a),m=!0)},o(a){P(r.$$.fragment,a),P(n.$$.fragment,a),m=!1},d(a){a&&(f(t),f(l),f(s),f(i),f(u)),W(r,a),W(n,a)}}}function se(e,r,t){let l,o;S(e,j,i=>t(2,l=i)),S(e,B,i=>t(3,o=i));let s="";async function n(){t(0,s="Converting to .xlsx (takes about 20 seconds)");try{await Y(o,l)}catch(i){window.alert(`Conversion failed: ${i}`)}t(0,s="")}return[s,n]}class de extends N{constructor(r){super(),H(this,r,se,ie,R,{})}}export{de as C};
