import{w as t}from"./index.E7rmM7LH.js";let r=t(o());r.subscribe(e=>window.localStorage.setItem("cross-section",JSON.stringify(e)));function o(){var a;let e=JSON.parse(window.localStorage.getItem("cross-section")||"{}");return(a=e.proposed)!=null&&a.trafficData?e:s()}function s(){return{summary:{schemeReference:"",schemeName:"",schemeSummary:"",authority:"",taOrCA:"",region:"",fundingProgramme:"",designStage:"",fundingConditions:"",assessedRouteLengthKm:0,totalRouteLengthKm:0,notes:""},proposed:{trafficData:{flowOneWay:"",flowTwoWay:"",flowSharedUse:"",trafficFlow:"",speedLimit:"",observedSpeed:void 0,streetFunction:""},desirableMinimumCrossSection:[],absoluteMinimumCrossSection:[]}}}let n=["Footway","Narrow Traffic / Bus Lane","Wide Traffic / Bus Lane","Traffic Lane (no buses): speed limit 20/30","On-highway advisory/mandatory cycle lane","1-way protected cycle track","2-way protected cycle track","Shared use cycle track","Parking Bay","Disabled Parking Bay","Loading Bay","Buffer / Verge"];export{s as e,n as l,r as s};
