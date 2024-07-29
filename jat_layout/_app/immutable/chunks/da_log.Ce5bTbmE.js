import"./data.CbofBaun.js";import{g as f}from"./results.BDv-Jjkk.js";import{g as m,a as p}from"./lists.BvURpO7c.js";function W(t){let e=f(t),o=t.summary.checkType=="street",n=t.summary.checkType=="path",r={Safety:"Sa",Accessibility:"Ac",Comfort:"Cf",Directness:"Di",Attractiveness:"At",Cohesion:"Co",overall:"To"},i={"Social activity":"SA","Personal security":"PS","Character and legibility":"CL",Environment:"En",overall:"To"};return[...C(t),...h(t),...u("SA",0,t.safetyCheck),...u("ST",16,t.streetCheck),...u("SP",0,t.streetPlacemakingCheck),...u("PA",16,t.pathCheck),...u("PP",0,t.pathPlacemakingCheck),...d(t),...y(t),...s("ST-LOS",[...e.levelOfService,e.overall],o,r),...s("ST-LOS",e.byMode,o,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy"}),...s("SP-LOS",[...e.placemakingCategories,e.placemakingOverall],o,i),...s("PA-LOS",[...e.levelOfService,e.overall],n,r),...s("PA-LOS",e.byMode,n,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy","Horse Riding":"HR"},t.horseRiders=="No"?"Horse Riding":null),...S("PA-LOS",n),...s("PP-LOS",[...e.placemakingCategories,e.placemakingOverall],n,i),...P(t,e),...$(t),...k(t),...E()]}function C(t){let e=t.summary;return[["Scheme Ref",e.schemeReference],["Date of Design Review",e.dateDesignReview],["Scheme Name",e.schemeName],["Authority",e.authority],["Transport/ Combined Authority",e.transportOrCombinedAuthority],["Region",e.region],["Funding Programme",e.fundingProgramme],["Design Stage",e.designStage],["Funding Conditions",e.fundingConditions],["Inspector",e.inspectorEmail],["RouteLength",e.assessedRouteLengthKm],["RouteFileLength",e.totalRouteLengthKm],["Notes",e.notes],["Tool","Route Check online-alpha"],["Sub-tool",e.checkType=="street"?"Street Check":"Path Check"]]}function h(t){let e=[];for(let[o,n]of t.policyCheck.entries())e.push([`PC${a(o)}-E`,n.existing]),e.push([`PC${a(o)}-D`,n.proposed]);return e}function u(t,e,o){let n=[];for(let r=0;r<o.existingScores.length;r++)n.push([`${t}${a(r+e)}-E`,o.existingScores[r]]),n.push([`${t}${a(r+e)}-D`,o.proposedScores[r]]);return n}function a(t){return(t+1).toString().padStart(2,"0")}function d(t){let e={existing:t.policyConflictLog.filter(o=>o.stage=="Existing").length,designed:t.policyConflictLog.filter(o=>o.stage=="Design").length,removed:t.policyConflictLog.filter(o=>o.resolved=="Yes").length};return[["PC-E",e.existing],["PC-D",e.designed],["PC-Rem",e.removed],["PC-Int",e.designed],["PC-Tot",e.designed+e.existing-e.removed]]}function y(t){let e={existing:t.criticalIssues.filter(o=>o.stage=="Existing").length,designed:t.criticalIssues.filter(o=>o.stage=="Design").length,removed:t.criticalIssues.filter(o=>o.resolved=="Yes").length};return[["SA-E",e.existing],["SA-D",e.designed],["SA-Rem",e.removed],["SA-Int",e.designed],["SA-Tot",e.designed+e.existing-e.removed]]}function s(t,e,o,n,r=null){let i=[];for(let l of e){if(!(l.category in n)){if(l.category!="Horse Riding")throw new Error(`Unexpected unknown category ${l.category}`);continue}let c=n[l.category];l.category!=r?(i.push([`${t}-${c}-E`,o?l.existing.scorePercent/100:""]),i.push([`${t}-${c}-D`,o?l.proposed.scorePercent/100:""])):(i.push([`${t}-${c}-E`,"N/A"]),i.push([`${t}-${c}-D`,"N/A"]))}return i}function S(t,e){return e?[]:[[`${t}-HR-E`,"N/A"],[`${t}-HR-D`,"N/A"]]}function P(t,e){let o=[],n=12,r=e.jat.length-1;for(let i=1;i<=n;i++)for(let[l,c]of[["walkingWheeling","WW"],["cycling","Cy"],["total","To"]])o.push([`J${i}-LOS-${c}-E`,i<=r?e.jat[i-1][l].existing:"Not Completed"]),o.push([`J${i}-LOS-${c}-D`,i<=r?e.jat[i-1][l].proposed:"Not Completed"]);for(let i=1;i<=n;i++)i<=r?o.push([`J${i}-Arms`,t.jat[i-1].proposed.arms.length]):o.push([`J${i}-Arms`,0]);return o}function D(t,e){let o=t.policyConflictLog[e],n=0;for(let i=0;i<=e;i++)t.policyConflictLog[i].conflict==o.conflict&&n++;return[t.summary.schemeReference,`P${o.conflict.padStart(3,"0")}`,`${n.toString().padStart(2,"0")}P`].join("_")}function $(t){let e=[],o=35;for(let n=0;n<o;n++){let r;if(n<t.policyConflictLog.length){let i=t.policyConflictLog[n];r={Ref:D(t,n),Typ:m(i.conflict),Sta:i.stage,LaL:`${i.point[1]}, ${i.point[0]}`,Loc:i.locationName,Res:i.resolved,Com:i.notes}}else r={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[i,l]of Object.entries(r))e.push([`${a(n)}PC${i}`,l])}return e}function g(t){return/\D$/.test(t)?t.slice(0,-1):t}function L(t,e){let o=t.criticalIssues[e],n=g(o.criticalIssue),r=0;for(let l=0;l<=e;l++)g(t.criticalIssues[l].criticalIssue)==n&&r++;return[t.summary.schemeReference,`SA${n.padStart(2,"0")}`,`${r.toString().padStart(2,"0")}P`].join("_")}function k(t){let e=[],o=35;for(let n=0;n<o;n++){let r;if(n<t.criticalIssues.length){let i=t.criticalIssues[n];r={Ref:L(t,n),Typ:p(i.criticalIssue),Sta:i.stage,LaL:`${i.point[1]}, ${i.point[0]}`,Loc:i.locationName,Res:i.resolved,Com:i.notes}}else r={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[i,l]of Object.entries(r))e.push([`${a(n)}SA${i}`,l])}return e}function E(){return["Area-E","Area-D","Po-WW-E","Po-WW-D","Po-Cy-E","Po-Cy-D","Cr-WW-E","Cr-WW-D","Cr-Cy-E","Cr-Cy-D","Pe-WW-D","Pe-WW-E","Pe-Cy-D","Pe-Cy-E","MD-WW-D","MD-WW-E","MD-Cy-D","MD-Cy-E","MT-E","MT-D","PT-E","PT-D","GI-E","GI-D","IT-E","IT-D","EP-E","EP-D","TM-Comments","AC-Comments"].map(e=>[e,""])}export{L as c,W as e,D as p};
