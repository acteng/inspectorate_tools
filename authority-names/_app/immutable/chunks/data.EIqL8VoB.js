import{L as i,v as t}from"./authority_names.B3fhyVvx.js";import{w as a}from"./entry.uP_Fjb-L.js";let s=a(o()),m=a(""),f=new i("area_check/",o,n,c,s,m);function n(e){if(e.version!="alpha-0")throw new Error("File format appears outdated");e.summary.authority=t(e.summary.authority)}function c(e){let r=e.summary.schemeName;return e.summary.schemeReference&&(r+=` (${e.summary.schemeReference})`),r}function o(){return{version:"alpha-0",summary:{dateDesignReview:"",schemeReference:"",schemeName:"",schemeSummary:"",schemeInfoReviewed:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",inspectorEmail:"",schemeAreaSizeKm2:0,notes:"",networkMap:{type:"FeatureCollection",features:[]}},trafficMitigationCheck:{q1:"",q2:"",q3:"",majorQ1:"",majorQ2:"",majorQ3:"",majorQ4:"",minorQ1:"",minorQ2:"",notes:""},existingScores:Array(13).fill(""),proposedScores:Array(13).fill(""),existingScoreNotes:Array(13).fill(""),proposedScoreNotes:Array(13).fill(""),resultsNotes:""}}export{m as c,f,s};
