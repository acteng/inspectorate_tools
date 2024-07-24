import{s as E,e as W,a as d,c as A,p as R,g as y,i as C,n as I,f as h,k as O}from"../chunks/scheduler.BBS-fkhU.js";import{S as b,i as j,c as S,a as $,m as P,t as v,b as D,d as L}from"../chunks/index.B8H3ypVf.js";import{s as x}from"../chunks/data.CYs74KI4.js";import{g as _}from"../chunks/results.V_qEm1Zr.js";import{p as M,c as w}from"../chunks/lists.BnA5ucEg.js";import{T as k}from"../chunks/TextArea.Ck6ITb4v.js";function N(t){let e=_(t),n=t.summary.checkType=="street",o=t.summary.checkType=="path",i={Safety:"Sa",Accessibility:"Ac",Comfort:"Cf",Directness:"Di",Attractiveness:"At",Cohesion:"Co",overall:"To"},r={"Social activity":"SA","Personal security":"PS","Character and legibility":"CL",Environment:"En",overall:"To"};return[...J(t),...F(t),...f("SA",0,t.safetyCheck),...f("ST",16,t.streetCheck),...f("SP",0,t.streetPlacemakingCheck),...f("PA",16,t.pathCheck),...f("PP",0,t.pathPlacemakingCheck),...G(t),...V(t),...m("ST-LOS",[...e.levelOfService,e.overall],n,i),...m("ST-LOS",e.byMode,n,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy"}),...m("SP-LOS",[...e.placemakingCategories,e.placemakingOverall],n,r),...m("PA-LOS",[...e.levelOfService,e.overall],o,i),...m("PA-LOS",e.byMode,o,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy","Horse Riding":"HR"}),...m("PP-LOS",[...e.placemakingCategories,e.placemakingOverall],o,r),...B(t,e),...K(t),...q(t),...z()]}function J(t){let e=t.summary;return[["Scheme Ref",e.schemeReference],["Date of Design Review",e.dateDesignReview],["Scheme Name",e.schemeName],["Authority",e.authority],["Transport/ Combined Authority",e.transportOrCombinedAuthority],["Region",e.region],["Funding Programme",e.fundingProgramme],["Design Stage",e.designStage],["Funding Conditions",e.fundingConditions],["Inspector",e.inspectorEmail],["RouteLength",e.totalRouteLengthKm],["RouteFileLength",e.assessedRouteLengthKm],["Notes",e.notes],["Tool","Route Check online-alpha"],["Sub-tool",e.checkType=="street"?"Street Check":"Path Check"]]}function F(t){let e=[];for(let[n,o]of t.policyCheck.entries())e.push([`PC${p(n)}-E`,o.existing]),e.push([`PC${p(n)}-D`,o.proposed]);return e}function f(t,e,n){let o=[];for(let i=0;i<n.existingScores.length;i++)o.push([`${t}${p(i+e)}-E`,n.existingScores[i]]),o.push([`${t}${p(i+e)}-D`,n.proposedScores[i]]);return o}function p(t){return(t+1).toString().padStart(2,"0")}function G(t){let e={existing:t.policyConflictLog.filter(n=>n.stage=="Existing").length,designed:t.policyConflictLog.filter(n=>n.stage=="Design").length,removed:t.policyConflictLog.filter(n=>n.resolved=="Yes").length};return[["PC-E",e.existing],["PC-D",e.designed],["PC-Rem",e.removed],["PC-Int",e.designed],["PC-Tot",e.designed+e.existing-e.removed]]}function V(t){let e={existing:t.criticalIssues.filter(n=>n.stage=="Existing").length,designed:t.criticalIssues.filter(n=>n.stage=="Design").length,removed:t.criticalIssues.filter(n=>n.resolved=="Yes").length};return[["SA-E",e.existing],["SA-D",e.designed],["SA-Rem",e.removed],["SA-Int",e.designed],["SA-Tot",e.designed+e.existing-e.removed]]}function m(t,e,n,o){let i=[];for(let r of e){let s=o[r.category];i.push([`${t}-${s}-E`,n?r.existing.scorePercent/100:null]),i.push([`${t}-${s}-D`,n?r.proposed.scorePercent/100:null])}return i}function B(t,e){let n=[],o=12;for(let i=1;i<=o;i++)for(let[r,s]of[["walkingWheeling","WW"],["cycling","Cy"],["total","To"]])n.push([`J${i}-LOS-${s}-E`,i<=e.jat.length?e.jat[i-1][r].existing:"Not Completed"]),n.push([`J${i}-LOS-${s}-D`,i<=e.jat.length?e.jat[i-1][r].proposed:"Not Completed"]);for(let i=1;i<=o;i++)i<=e.jat.length?n.push([`J${i}-Arms`,t.jat[i-1].proposed.arms.length]):n.push([`J${i}-Arms`,null]);return n}function H(t,e){let n=t.policyConflictLog[e],o=0;for(let r=0;r<=e;r++)t.policyConflictLog[r].conflict==n.conflict&&o++;return[t.summary.schemeReference,`P${n.conflict.padStart(3,"0")}`,`${o.toString().padStart(2,"0")}P`].join("_")}function K(t){let e=[],n=35;for(let o=0;o<n;o++){let i;if(o<t.policyConflictLog.length){let r=t.policyConflictLog[o];i={Ref:H(t,o),Typ:M.find(s=>s[0]==r.conflict)[1],Sta:r.stage,LaL:`${r.point[1]}, ${r.point[0]}`,Loc:r.locationName,Res:r.resolved,Com:r.notes}}else i={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[r,s]of Object.entries(i))e.push([`${p(o)}PC${r}`,s])}return e}function T(t){return/\D$/.test(t)?t.slice(0,-1):t}function Y(t,e){let n=t.criticalIssues[e],o=T(n.criticalIssue),i=0;for(let s=0;s<=e;s++)T(t.criticalIssues[s].criticalIssue)==o&&i++;return[t.summary.schemeReference,`SA${o.padStart(2,"0")}`,`${i.toString().padStart(2,"0")}P`].join("_")}function q(t){let e=[],n=35;for(let o=0;o<n;o++){let i;if(o<t.criticalIssues.length){let r=t.criticalIssues[o];i={Ref:Y(t,o),Typ:w.find(s=>s[0]==r.criticalIssue)[1],Sta:r.stage,LaL:`${r.point[1]}, ${r.point[0]}`,Loc:r.locationName,Res:r.resolved,Com:r.notes}}else i={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[r,s]of Object.entries(i))e.push([`${p(o)}SA${r}`,s])}return e}function z(){return["Area-E","Area-D","Po-WW-E","Po-WW-D","Po-Cy-E","Po-Cy-D","Cr-WW-E","Cr-WW-D","Cr-Cy-E","Cr-Cy-D","Pe-WW-D","Pe-WW-E","Pe-Cy-D","Pe-Cy-E","MD-WW-D","MD-WW-E","MD-Cy-D","MD-Cy-E","MT-E","MT-D","PT-E","PT-D","GI-E","GI-D","IT-E","IT-D","EP-E","EP-D","TM-Comments","AC-Comments"].map(e=>[e,""])}function Q(t){let e,n="TODO. Below is the start to the DALOG output as TSV (tab-separated values).",o,i,r,s,a,c,g;return i=new k({props:{label:"TSV output, just the one row of values",value:t[2]}}),s=new k({props:{label:"TSV output with header",value:`${t[1]}
${t[2]}
`}}),c=new k({props:{label:"JSON mapping",value:JSON.stringify(Object.fromEntries(t[0]),null,"  ")}}),{c(){e=W("p"),e.textContent=n,o=d(),S(i.$$.fragment),r=d(),S(s.$$.fragment),a=d(),S(c.$$.fragment)},l(l){e=A(l,"P",{"data-svelte-h":!0}),R(e)!=="svelte-163miu5"&&(e.textContent=n),o=y(l),$(i.$$.fragment,l),r=y(l),$(s.$$.fragment,l),a=y(l),$(c.$$.fragment,l)},m(l,u){C(l,e,u),C(l,o,u),P(i,l,u),C(l,r,u),P(s,l,u),C(l,a,u),P(c,l,u),g=!0},p:I,i(l){g||(v(i.$$.fragment,l),v(s.$$.fragment,l),v(c.$$.fragment,l),g=!0)},o(l){D(i.$$.fragment,l),D(s.$$.fragment,l),D(c.$$.fragment,l),g=!1},d(l){l&&(h(e),h(o),h(r),h(a)),L(i,l),L(s,l),L(c,l)}}}function U(t,e,n){let o;O(t,x,a=>n(3,o=a));let i=N(o),r=i.map(a=>a[0]).join("	"),s=i.map(a=>a[1]).join("	");return[i,r,s]}class oe extends b{constructor(e){super(),j(this,e,U,Q,E,{})}}export{oe as component};
