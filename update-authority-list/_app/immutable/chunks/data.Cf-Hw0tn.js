import{L as a,r as n}from"./index.uHH7o-zx.js";import{w as i}from"./entry.BNLnrINx.js";let c=i(s()),l=i(""),h=new a("route_check/",s,m,f,c,l);function y(e){return{"":0,C:0,0:0,1:1,2:2,"N/A":0}[e]}function m(e){var r;if(e.version=="alpha-0"&&(e.version="alpha-1",e.horseRiders=""),e.version!="alpha-1")throw new Error("File format appears outdated");(r=e.summary).networkMap||(r.networkMap={type:"FeatureCollection",features:[]});for(let o of e.policyConflictLog)o.stage=="Design"&&(o.resolved="");for(let o of e.criticalIssues)o.stage=="Design"&&(o.resolved="")}function f(e){let r=e.summary.schemeName;return e.summary.schemeReference&&(r+=` (${e.summary.schemeReference})`),r}function s(){return{version:"alpha-1",summary:{dateDesignReview:"",schemeReference:"",schemeName:"",schemeSummary:"",schemeInfoReviewed:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",inspectorEmail:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:"",checkType:"",networkMap:{type:"FeatureCollection",features:[]}},policyCheck:n(6,{existing:"",proposed:"",commentary:""}),policyConflictLog:[],safetyCheck:t(16),criticalIssues:[],streetCheck:t(26),streetPlacemakingCheck:t(26),pathCheck:t(30),horseRiders:"",pathPlacemakingCheck:t(19),jat:[],resultsReviewStatement:""}}function t(e){return{existingScores:Array(e).fill(""),proposedScores:Array(e).fill(""),existingScoreNotes:Array(e).fill(""),proposedScoreNotes:Array(e).fill("")}}export{l as c,s as e,h as f,y as n,c as s};
