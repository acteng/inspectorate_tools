import{E as v}from"./exceljs.min.BuyXGIGS.js";import{g as y,a as k}from"./lists.BvURpO7c.js";import{d as p}from"./index.BCyPVrCR.js";const d=""+new URL("../assets/blank_route_check.CfWjwSGn.xlsx",import.meta.url).href;async function R(e,r){console.log("Loading blank route check xlsx");let t=await(await fetch(d)).arrayBuffer(),o=new v.Workbook;await o.xlsx.load(t),o.eachSheet((a,n)=>{a.conditionalFormattings=[]}),S(e,o),w(e,o),x(e,o),L(e,o),s(e.safetyCheck,o,"3.1 Safety Check",["J","K","L","M"],c([[13,28]])),s(e.streetCheck,o,"4.1 Street Check",["J","K","L","M"],c([[13,19],[23,25],[29,34],[38,43],[47,50]])),s(e.streetPlacemakingCheck,o,"4.2 Street Placemaking Check",["I","J","K","L"],c([[13,15],[19,21],[25,34],[38,47]])),s(e.pathCheck,o,"5.1 Path Check",["J","K","L","M"],c([[15,19],[23,33],[37,40],[44,48],[52,56]])),s(e.pathPlacemakingCheck,o,"5.2 Path Placemaking Check",["I","J","K","L"],c([[12,14],[20,22],[26,29],[33,41]])),I(e,o),o.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,o.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let i=await o.xlsx.writeBuffer();p(i,`route_check_${r}.xlsx`)}function S(e,r){let l=r.getWorksheet("1. Summary of Scheme");l.getCell("C6").value=e.summary.dateDesignReview,l.getCell("C7").value=e.summary.schemeReference,l.getCell("C8").value=e.summary.schemeName,l.getCell("C9").value=e.summary.schemeSummary,l.getCell("C10").value=e.summary.schemeInfoReviewed,l.getCell("C11").value=e.summary.authority,l.getCell("C12").value=e.summary.transportOrCombinedAuthority,l.getCell("C13").value=e.summary.region,l.getCell("C14").value=e.summary.fundingProgramme,l.getCell("C15").value=e.summary.designStage,l.getCell("C16").value=e.summary.fundingConditions,l.getCell("C17").value=e.summary.inspectorEmail,l.getCell("C18").value=e.summary.assessedRouteLengthKm,l.getCell("C19").value=e.summary.totalRouteLengthKm,l.getCell("C20").value=e.summary.notes,e.summary.checkType=="path"&&(l.getCell("D22").value="Path Check");for(let t of e.summary.networkMap.features)if(t.geometry.type=="LineString"){l.getCell("C26").value=t.geometry.coordinates[0][1],l.getCell("D26").value=t.geometry.coordinates[0][0],l.getCell("C27").value=t.geometry.coordinates[0][1],l.getCell("D27").value=t.geometry.coordinates[0][0],l.getCell("C28").value=`https://www.openstreetmap.org/#map=18/${t.geometry.coordinates[0][1]}/${t.geometry.coordinates[0][0]}`;break}}function w(e,r){let l=r.getWorksheet("2.1 Policy Check");for(let t=0;t<6;t++)l.getCell("D"+(8+t)).value=e.policyCheck[t].existing,l.getCell("E"+(8+t)).value=e.policyCheck[t].proposed,l.getCell("F"+(8+t)).value=e.policyCheck[t].commentary}function x(e,r){let l=r.getWorksheet("2.2 Policy Conflict Log");for(let[t,o]of e.policyConflictLog.entries())l.getCell("F"+(8+t)).value=y(o.conflict),l.getCell("H"+(8+t)).value=o.stage,l.getCell("I"+(8+t)).value=f(o.point),l.getCell("J"+(8+t)).value=o.locationName,l.getCell("K"+(8+t)).value=o.stage==="Design"?"No":o.resolved,l.getCell("L"+(8+t)).value=o.notes}function L(e,r){let l=r.getWorksheet("3.2 Critical Issues Log");for(let[t,o]of e.criticalIssues.entries())l.getCell("F"+(8+t)).value=k(o.criticalIssue),l.getCell("H"+(8+t)).value=o.stage,l.getCell("I"+(8+t)).value=f(o.point),l.getCell("J"+(8+t)).value=o.locationName,l.getCell("K"+(8+t)).value=o.stage==="Design"?"No":o.resolved,l.getCell("L"+(8+t)).value=o.notes}function s(e,r,l,t,o){let i=r.getWorksheet(l);if(o.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${l}`);for(let a=0;a<e.existingScores.length;a++){let n=o[a];i.getCell(t[0]+n).value=m(e.existingScores[a]),i.getCell(t[1]+n).value=e.existingScoreNotes[a],i.getCell(t[2]+n).value=m(e.proposedScores[a]),i.getCell(t[3]+n).value=e.proposedScoreNotes[a]}}function I(e,r){let l=r.getWorksheet("6. JAT Check"),t=0;for(let o of e.jat)for(let i of[o.existing,o.proposed]){let a=g("H",t*5);l.getCell(g(a,1)+"9").value=o.name,l.getCell(g(a,1)+"10").value=i.notes;for(let[n,u]of i.movements.filter(C=>C.kind=="walking & wheeling").entries())l.getCell(a+(13+n)).value=u.name,l.getCell(g(a,2)+(13+n)).value=h(u.score),l.getCell(g(a,3)+(13+n)).value=u.notes;for(let[n,u]of i.movements.filter(C=>C.kind=="cycling").entries())l.getCell(a+(26+n)).value=u.name,l.getCell(g(a,2)+(26+n)).value=h(u.score),l.getCell(g(a,3)+(26+n)).value=u.notes;t++}}function g(e,r){return P(b(e)+r)}function b(e){let r=0;for(let l=0;l<e.length;l++)r*=26,r+=e.charCodeAt(l)-65+1;return r-1}function P(e){let r="";for(e+=1;e>0;){let l=(e-1)%26;r=String.fromCharCode(l+65)+r,e=Math.floor((e-1)/26)}return r}function c(e){let r=[];for(let[l,t]of e)for(let o=l;o<=t;o++)r.push(o);return r}function m(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function h(e){return{0:0,1:1,2:2,X:e}[e]}function f(e){return`${e[1]}, ${e[0]}`}export{R as d};
