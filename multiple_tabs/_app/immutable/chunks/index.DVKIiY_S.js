import{i as o}from"./index.C4QIHww-.js";var y=Object.defineProperty,n=(r,e)=>y(r,"name",{value:e,configurable:!0});function a(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if(r.type==="Feature"&&r.geometry!==null&&r.geometry.type==="Point")return[...r.geometry.coordinates];if(r.type==="Point")return[...r.coordinates]}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return[...r];throw new Error("coord must be GeoJSON Point or an Array of numbers")}n(a,"getCoord");function f(r){if(Array.isArray(r))return r;if(r.type==="Feature"){if(r.geometry!==null)return r.geometry.coordinates}else if(r.coordinates)return r.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}n(f,"getCoords");function u(r){if(r.length>1&&o(r[0])&&o(r[1]))return!0;if(Array.isArray(r[0])&&r[0].length)return u(r[0]);throw new Error("coordinates must only contain numbers")}n(u,"containsNumber");function m(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)}n(m,"geojsonType");function p(r,e,t){if(!r)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!r||r.type!=="Feature"||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)}n(p,"featureOf");function w(r,e,t){if(!r)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!r||r.type!=="FeatureCollection")throw new Error("Invalid input to "+t+", FeatureCollection required");for(const i of r.features){if(!i||i.type!=="Feature"||!i.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!i.geometry||i.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+i.geometry.type)}}n(w,"collectionOf");function l(r){return r.type==="Feature"?r.geometry:r}n(l,"getGeom");function g(r,e){return r.type==="FeatureCollection"?"FeatureCollection":r.type==="GeometryCollection"?"GeometryCollection":r.type==="Feature"&&r.geometry!==null?r.geometry.type:r.type}n(g,"getType");export{a as g};
