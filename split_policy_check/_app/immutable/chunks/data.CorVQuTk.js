import{w as i}from"./index.DL7waCk_.js";import{L as l}from"./index.HwJ911_K.js";let o=i(e()),n=i(""),c=new l("planning/",e,s,t,o,n);function s(r){if(r.version=="alpha-0"&&(r.version="alpha-1",r.localGuidance=Array(10).fill("")),r.version=="alpha-1"&&(r.version="alpha-2",r.summary=e().summary),r.version!="alpha-2")throw new Error("File format appears outdated")}function t(r){let a=r.summary.siteAddress;return r.summary.ateReference&&(a+=` (${r.summary.ateReference})`),a}function e(){return{version:"alpha-2",summary:{siteAddress:"",localAuthorityReference:"",ateReference:"",localPlanningAuthority:"",localHighwayAuthority:"",completedBy:"",date:"",applicationType:"",proposalSummary:""},ratings:Array(10).fill(""),appraiserComments:Array(10).fill(""),localGuidance:Array(10).fill("")}}export{n as c,c as f,o as s};
