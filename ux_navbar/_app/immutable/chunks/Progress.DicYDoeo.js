import{s as o}from"./scheduler.4ZNDCSWA.js";import{S as i,i as c,c as f,a as d,m as u,t as g,b as m,d as l}from"./index.xRKM1n3P.js";import{G as p}from"./GenericProgress.D3ws_mwk.js";function _(r){let t,n;return t=new p({props:{sections:r[1],startIdx:1,currentIdx:r[0],scorecardKey:"safetyCheck",urlBase:"/route_check/safety_check/sa"}}),{c(){f(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,[s]){const a={};s&1&&(a.currentIdx=e[0]),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){l(t,e)}}}function S(r,t,n){let{currentIdx:e}=t,s=[{section:"Safety",pages:["Conflict at Side Roads and Priority Junctions","Conflict at Roundabouts and Signal Junctions","Lane Widths","Trip Hazards","Kerbside Activity","Provision of Crossings","Standard of Crossings","Motor Traffic Speed","Motor Traffic Volume","Pedestrian Crossing Speed","Footway Widths","Effective Width next to Tram Lines","Crossing Angle of Tram/Train Rails","Cycling Surface and Maintenance Defects","Walking/Wheeling Surface and Maintenance Defects","Guard Railing"]}];return r.$$set=a=>{"currentIdx"in a&&n(0,e=a.currentIdx)},[e,s]}class C extends i{constructor(t){super(),c(this,t,S,_,o,{currentIdx:0})}}export{C as P};
