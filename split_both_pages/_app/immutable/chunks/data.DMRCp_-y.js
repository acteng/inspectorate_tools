import{w as o}from"./index.B1HSfBgD.js";import{r as a}from"./index.ChtiJlPW.js";import{L as s}from"./index.DlkUsDgN.js";let n=o(i()),c=o(""),f=new s("route_check/",i,m,l,n,c);function d(e){return{"":0,C:0,0:0,1:1,2:2,"N/A":0}[e]}function m(e){if(e.version=="alpha-0"&&(e.version="alpha-1",e.horseRiders=""),e.version!="alpha-1")throw new Error("File format appears outdated")}function l(e){let t=e.summary.schemeName;return e.summary.schemeReference&&(t+=` (${e.summary.schemeReference})`),t}function i(){return{version:"alpha-1",summary:{dateDesignReview:"",schemeReference:"",schemeName:"",schemeSummary:"",schemeInfoReviewed:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",inspectorEmail:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:"",checkType:"",networkMap:{type:"FeatureCollection",features:[]}},policyCheck:a(6,{existing:"",proposed:"",commentary:""}),policyConflictLog:[],safetyCheck:r(16),criticalIssues:[],streetCheck:r(26),streetPlacemakingCheck:r(26),pathCheck:r(30),horseRiders:"",pathPlacemakingCheck:r(19),jat:[],resultsReviewStatement:""}}function r(e){return{existingScores:Array(e).fill(""),proposedScores:Array(e).fill(""),existingScoreNotes:Array(e).fill(""),proposedScoreNotes:Array(e).fill("")}}export{c,i as e,f,d as n,n as s};
