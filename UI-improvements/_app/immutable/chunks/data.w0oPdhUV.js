import{w as o}from"./entry.Dg5TRyuI.js";import{L as a}from"./index.CrLqJ7qc.js";let t=o(s()),i=o(""),l=new a("cross_section/",s,n,c,t,i);function n(e){if(e.proposed.desirableMinimumCrossSection.length==0&&(e.proposed.desirableMinimumCrossSection=[""]),e.proposed.absoluteMinimumCrossSection.length==0&&(e.proposed.absoluteMinimumCrossSection=[""]),e.version!="alpha-0")throw new Error("File format appears outdated")}function c(e){let r=e.summary.schemeName;return e.summary.schemeReference&&(r+=` (${e.summary.schemeReference})`),r}function s(){return{version:"alpha-0",summary:{schemeReference:"",schemeName:"",schemeSummary:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:"",networkMap:{type:"FeatureCollection",features:[]}},proposed:{trafficData:{flowOneWay:"",flowTwoWay:"",flowSharedUse:"",trafficFlow:"",speedLimit:"",observedSpeed:void 0,streetFunction:""},customFeatures:{},desirableMinimumCrossSection:[""],absoluteMinimumCrossSection:[""]},checks:{homogeneousSections:[],pinchPoints:[]},resultsCommentary:""}}let d=["<30","30","40","50","60","70"],f=["Footway","Narrow Traffic / Bus Lane","Wide Traffic / Bus Lane","Traffic Lane (no buses): speed limit 20/30","On-highway advisory/mandatory cycle lane","1-way protected cycle track","2-way protected cycle track","Shared use cycle track","Parking Bay","Disabled Parking Bay","Loading Bay","Buffer / Verge"];export{f as a,d as b,i as c,l as f,t as s};
