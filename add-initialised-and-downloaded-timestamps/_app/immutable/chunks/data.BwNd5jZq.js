import{L as a,g as n,r as c}from"./index.DB1Bc6_J.js";import{w as s}from"./entry.CIDaVErs.js";let l=s(i()),m=s(""),d=new a("route_check/",i,f,p,l,m);function g(e){return{"":0,C:0,0:0,1:1,2:2,"N/A":0}[e]}function f(e){var r;if(e.version=="alpha-0"&&(e.version="alpha-1",e.horseRiders=""),e.version!="alpha-1")throw new Error("File format appears outdated");(r=e.summary).networkMap||(r.networkMap={type:"FeatureCollection",features:[]});for(let t of e.policyConflictLog)t.stage=="Design"&&(t.resolved="");for(let t of e.criticalIssues)t.stage=="Design"&&(t.resolved="")}function p(e){let r=e.summary.schemeName;return e.summary.schemeReference&&(r+=` (${e.summary.schemeReference})`),r}function i(){return{version:"alpha-1",createdTimestamp:n(!0),downloadedTimestamp:"",isImportedFromSpreadsheet:!1,summary:{dateDesignReview:"",schemeReference:"",schemeName:"",schemeSummary:"",schemeInfoReviewed:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",inspectorEmail:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:"",checkType:"",networkMap:{type:"FeatureCollection",features:[]}},policyCheck:c(6,{existing:"",proposed:"",commentary:""}),policyConflictLog:[],safetyCheck:o(16),criticalIssues:[],streetCheck:o(26),streetPlacemakingCheck:o(26),pathCheck:o(30),horseRiders:"",pathPlacemakingCheck:o(19),jat:[],resultsReviewStatement:""}}function o(e){return{existingScores:Array(e).fill(""),proposedScores:Array(e).fill(""),existingScoreNotes:Array(e).fill(""),proposedScoreNotes:Array(e).fill("")}}export{m as c,i as e,d as f,g as n,l as s};
