import{L as s,v as i}from"./authority_names.BrfP5Gn6.js";import{w as o}from"./entry.DhsByD_g.js";let t=o(a()),n=o(""),d=new s("cross_section/",a,m,c,t,n);function m(e){if(e.proposed.desirableMinimumCrossSection.length==0&&(e.proposed.desirableMinimumCrossSection=[""]),e.proposed.absoluteMinimumCrossSection.length==0&&(e.proposed.absoluteMinimumCrossSection=[""]),e.version!="alpha-0")throw new Error("File format appears outdated");e.summary.authority=i(e.summary.authority)}function c(e){let r=e.summary.schemeName;return e.summary.schemeReference&&(r+=` (${e.summary.schemeReference})`),r}function a(){return{version:"alpha-0",summary:{schemeReference:"",schemeName:"",schemeSummary:"",authority:"",transportOrCombinedAuthority:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:"",networkMap:{type:"FeatureCollection",features:[]}},proposed:{trafficData:{flowOneWay:"",flowTwoWay:"",flowSharedUse:"",trafficFlow:"",speedLimit:"",observedSpeed:void 0,streetFunction:""},customFeatures:{},desirableMinimumCrossSection:[""],absoluteMinimumCrossSection:[""]},checks:{homogeneousSections:[],pinchPoints:[]},resultsCommentary:""}}let f=["<30","30","40","50","60","70"],y=["Footway","Narrow Traffic / Bus Lane","Wide Traffic / Bus Lane","Traffic Lane (no buses): speed limit 20/30","On-highway advisory/mandatory cycle lane","1-way protected cycle track","2-way protected cycle track","Shared use cycle track","Parking Bay","Disabled Parking Bay","Loading Bay","Buffer / Verge"];export{y as a,f as b,n as c,d as f,t as s};
