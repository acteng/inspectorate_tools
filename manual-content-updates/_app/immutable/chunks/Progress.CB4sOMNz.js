import{s}from"./scheduler.BJ06nkRu.js";import{S as o,i as c,c as l,a as u,m as p,t as g,b as m,d}from"./index.Dmc4uC9p.js";import{G as h}from"./GenericProgress.BbjFsWIN.js";function f(r){let t,n;return t=new h({props:{sections:r[1],startIdx:1,currentIdx:r[0],scorecardKey:"pathPlacemakingCheck",urlBase:"/route_check/path_placemaking_check/pp"}}),{c(){l(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,[i]){const a={};i&1&&(a.currentIdx=e[0]),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function P(r,t,n){let{currentIdx:e}=t,i=[{section:"Social activity",pages:["Engagement for Children","Social Space","Points of Interest"]},{section:"Personal security",notes:"Note: All three personal security metrics below are double weighted when the Path Placemaking score is calculated. This is explained further in the Route Check user manual.",pages:["Surveillance and Activity","Forward Visibility and Escape Routes","Visibility of Others"]},{section:"Character and legibility",pages:["Maintenance and Upkeep","Consistency of Materials and Path Furniture","Visual Interest","Features to Support Walking, Wheeling and Cycling"]},{section:"Environment",pages:["Trees","Planting","Ancillary Features to Support Fauna","Sustainable Materials","Air Pollution - Exposure","Air Pollution - Proximity","Noise Pollution","Light Pollution","Sunlight"]}];return r.$$set=a=>{"currentIdx"in a&&n(0,e=a.currentIdx)},[e,i]}class S extends o{constructor(t){super(),c(this,t,P,f,s,{currentIdx:0})}}export{S as P};
