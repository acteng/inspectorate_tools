import{L as o,v as l}from"./authority_names.BrfP5Gn6.js";import{w as i}from"./entry.DhsByD_g.js";let n=i(r()),m=i(""),c=new o("planning/",r,y,t,n,m);function y(a){if(a.version=="alpha-0"&&(a.version="alpha-1",a.localGuidance=Array(10).fill("")),a.version=="alpha-1"&&(a.version="alpha-2",a.summary=r().summary),a.version!="alpha-2")throw new Error("File format appears outdated");a.summary.localHighwayAuthority=l(a.summary.localHighwayAuthority),a.summary.localPlanningAuthority=l(a.summary.localPlanningAuthority)}function t(a){let e=a.summary.siteAddress;return a.summary.ateReference&&(e+=` (${a.summary.ateReference})`),e}function r(){return{version:"alpha-2",summary:{siteAddress:"",localAuthorityReference:"",ateReference:"",localPlanningAuthority:"",localHighwayAuthority:"",completedBy:"",date:"",applicationType:"",proposalSummary:""},ratings:Array(10).fill(""),appraiserComments:Array(10).fill(""),localGuidance:Array(10).fill("")}}export{m as c,c as f,n as s};
