import{f,j as a,r as h}from"./index.S0onxthC.js";var c=Object.defineProperty,i=(r,e)=>c(r,"name",{value:e,configurable:!0});function u(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if(r.type==="Feature"&&r.geometry!==null&&r.geometry.type==="Point")return[...r.geometry.coordinates];if(r.type==="Point")return[...r.coordinates]}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return[...r];throw new Error("coord must be GeoJSON Point or an Array of numbers")}i(u,"getCoord");function d(r){if(Array.isArray(r))return r;if(r.type==="Feature"){if(r.geometry!==null)return r.geometry.coordinates}else if(r.coordinates)return r.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}i(d,"getCoords");function s(r){if(r.length>1&&f(r[0])&&f(r[1]))return!0;if(Array.isArray(r[0])&&r[0].length)return s(r[0]);throw new Error("coordinates must only contain numbers")}i(s,"containsNumber");function v(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)}i(v,"geojsonType");function b(r,e,t){if(!r)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!r||r.type!=="Feature"||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)}i(b,"featureOf");function E(r,e,t){if(!r)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!r||r.type!=="FeatureCollection")throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of r.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+n.geometry.type)}}i(E,"collectionOf");function A(r){return r.type==="Feature"?r.geometry:r}i(A,"getGeom");function F(r,e){return r.type==="FeatureCollection"?"FeatureCollection":r.type==="GeometryCollection"?"GeometryCollection":r.type==="Feature"&&r.geometry!==null?r.geometry.type:r.type}i(F,"getType");var O=Object.defineProperty,_=(r,e)=>O(r,"name",{value:e,configurable:!0});function m(r,e,t={}){var n=u(r),o=u(e),p=a(o[1]-n[1]),l=a(o[0]-n[0]),w=a(n[1]),g=a(o[1]),y=Math.pow(Math.sin(p/2),2)+Math.pow(Math.sin(l/2),2)*Math.cos(w)*Math.cos(g);return h(2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y)),t.units)}_(m,"distance");var M=m;export{m as d,u as g,M as t};
