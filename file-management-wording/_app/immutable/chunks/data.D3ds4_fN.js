import{w as o}from"./entry.DvyfSKaI.js";import{r as i}from"./index.CI4fi4_z.js";import{L as s}from"./index.NUzYaQHC.js";let n=o(a()),c=o(""),h=new s("route_check/",a,m,l,n,c);function y(e){return{"":0,C:0,0:0,1:1,2:2,"N/A":0}[e]}function m(e){var r;if(e.version=="alpha-0"&&(e.version="alpha-1",e.horseRiders=""),e.version!="alpha-1")throw new Error("File format appears outdated");(r=e.summary).networkMap||(r.networkMap={type:"FeatureCollection",features:[]})}function l(e){let r=e.summary.schemeName;return e.summary.schemeReference&&(r+=` (${e.summary.schemeReference})`),r}function a(){return{version:"alpha-1",summary:{dateDesignReview:"",schemeReference:"",schemeName:"",schemeSummary:"",schemeInfoReviewed:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",inspectorEmail:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:"",checkType:"",networkMap:{type:"FeatureCollection",features:[]}},policyCheck:i(6,{existing:"",proposed:"",commentary:""}),policyConflictLog:[],safetyCheck:t(16),criticalIssues:[],streetCheck:t(26),streetPlacemakingCheck:t(26),pathCheck:t(30),horseRiders:"",pathPlacemakingCheck:t(19),jat:[],resultsReviewStatement:""}}function t(e){return{existingScores:Array(e).fill(""),proposedScores:Array(e).fill(""),existingScoreNotes:Array(e).fill(""),proposedScoreNotes:Array(e).fill("")}}export{c,a as e,h as f,y as n,n as s};
