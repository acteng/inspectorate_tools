import{e as te}from"./index.BhJd8sDu.js";var ne=Object.defineProperty,u=(e,r)=>ne(e,"name",{value:r,configurable:!0}),ie=class{constructor(r){this.direction=!1,this.compareProperties=!0;var t,n,i;this.precision=10**-((t=r==null?void 0:r.precision)!=null?t:17),this.direction=(n=r==null?void 0:r.direction)!=null?n:!1,this.compareProperties=(i=r==null?void 0:r.compareProperties)!=null?i:!0}compare(r,t){if(r.type!==t.type||!F(r,t))return!1;switch(r.type){case"Point":return this.compareCoord(r.coordinates,t.coordinates);case"LineString":return this.compareLine(r.coordinates,t.coordinates);case"Polygon":return this.comparePolygon(r,t);case"GeometryCollection":return this.compareGeometryCollection(r,t);case"Feature":return this.compareFeature(r,t);case"FeatureCollection":return this.compareFeatureCollection(r,t);default:if(r.type.startsWith("Multi")){const n=B(r),i=B(t);return n.every(o=>i.some(s=>this.compare(o,s)))}}return!1}compareCoord(r,t){return r.length===t.length&&r.every((n,i)=>Math.abs(n-t[i])<this.precision)}compareLine(r,t,n=0,i=!1){if(!F(r,t))return!1;const o=r;let s=t;if(i&&!this.compareCoord(o[0],s[0])){const a=this.fixStartIndex(s,o);if(a)s=a;else return!1}const l=this.compareCoord(o[n],s[n]);return this.direction||l?this.comparePath(o,s):this.compareCoord(o[n],s[s.length-(1+n)])?this.comparePath(o.slice().reverse(),s):!1}fixStartIndex(r,t){let n,i=-1;for(let o=0;o<r.length;o++)if(this.compareCoord(r[o],t[0])){i=o;break}return i>=0&&(n=[].concat(r.slice(i,r.length),r.slice(1,i+1))),n}comparePath(r,t){return r.every((n,i)=>this.compareCoord(n,t[i]))}comparePolygon(r,t){if(this.compareLine(r.coordinates[0],t.coordinates[0],1,!0)){const n=r.coordinates.slice(1,r.coordinates.length),i=t.coordinates.slice(1,t.coordinates.length);return n.every(o=>i.some(s=>this.compareLine(o,s,1,!0)))}return!1}compareGeometryCollection(r,t){return F(r.geometries,t.geometries)&&this.compareBBox(r,t)&&r.geometries.every((n,i)=>this.compare(n,t.geometries[i]))}compareFeature(r,t){return r.id===t.id&&(this.compareProperties?te(r.properties,t.properties):!0)&&this.compareBBox(r,t)&&this.compare(r.geometry,t.geometry)}compareFeatureCollection(r,t){return F(r.features,t.features)&&this.compareBBox(r,t)&&r.features.every((n,i)=>this.compare(n,t.features[i]))}compareBBox(r,t){return!r.bbox&&!t.bbox||(r.bbox&&t.bbox?this.compareCoord(r.bbox,t.bbox):!1)}};u(ie,"GeojsonEquality");function F(e,r){return e.coordinates?e.coordinates.length===r.coordinates.length:e.length===r.length}u(F,"sameLength");function B(e){return e.coordinates.map(r=>({type:e.type.replace("Multi",""),coordinates:r}))}u(B,"explode");var y=63710088e-1,U={centimeters:y*100,centimetres:y*100,degrees:360/(2*Math.PI),feet:y*3.28084,inches:y*39.37,kilometers:y/1e3,kilometres:y/1e3,meters:y,metres:y,miles:y/1609.344,millimeters:y*1e3,millimetres:y*1e3,nauticalmiles:y/1852,radians:1,yards:y*1.0936},J={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function d(e,r,t={}){const n={type:"Feature"};return(t.id===0||t.id)&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.properties=r||{},n.geometry=e,n}u(d,"feature");function oe(e,r,t={}){switch(e){case"Point":return b(r).geometry;case"LineString":return P(r).geometry;case"Polygon":return N(r).geometry;case"MultiPoint":return K(r).geometry;case"MultiLineString":return H(r).geometry;case"MultiPolygon":return Q(r).geometry;default:throw new Error(e+" is invalid")}}u(oe,"geometry");function b(e,r,t={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!A(e[0])||!A(e[1]))throw new Error("coordinates must contain numbers");return d({type:"Point",coordinates:e},r,t)}u(b,"point");function ae(e,r,t={}){return G(e.map(n=>b(n,r)),t)}u(ae,"points");function N(e,r,t={}){for(const i of e){if(i.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(i[i.length-1].length!==i[0].length)throw new Error("First and last Position are not equivalent.");for(let o=0;o<i[i.length-1].length;o++)if(i[i.length-1][o]!==i[0][o])throw new Error("First and last Position are not equivalent.")}return d({type:"Polygon",coordinates:e},r,t)}u(N,"polygon");function se(e,r,t={}){return G(e.map(n=>N(n,r)),t)}u(se,"polygons");function P(e,r,t={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return d({type:"LineString",coordinates:e},r,t)}u(P,"lineString");function le(e,r,t={}){return G(e.map(n=>P(n,r)),t)}u(le,"lineStrings");function G(e,r={}){const t={type:"FeatureCollection"};return r.id&&(t.id=r.id),r.bbox&&(t.bbox=r.bbox),t.features=e,t}u(G,"featureCollection");function H(e,r,t={}){return d({type:"MultiLineString",coordinates:e},r,t)}u(H,"multiLineString");function K(e,r,t={}){return d({type:"MultiPoint",coordinates:e},r,t)}u(K,"multiPoint");function Q(e,r,t={}){return d({type:"MultiPolygon",coordinates:e},r,t)}u(Q,"multiPolygon");function ue(e,r,t={}){return d({type:"GeometryCollection",geometries:e},r,t)}u(ue,"geometryCollection");function fe(e,r=0){if(r&&!(r>=0))throw new Error("precision must be a positive number");const t=Math.pow(10,r||0);return Math.round(e*t)/t}u(fe,"round");function x(e,r="kilometers"){const t=U[r];if(!t)throw new Error(r+" units is invalid");return e*t}u(x,"radiansToLength");function $(e,r="kilometers"){const t=U[r];if(!t)throw new Error(r+" units is invalid");return e/t}u($,"lengthToRadians");function ce(e,r){return V($(e,r))}u(ce,"lengthToDegrees");function he(e){let r=e%360;return r<0&&(r+=360),r}u(he,"bearingToAzimuth");function V(e){return e%(2*Math.PI)*180/Math.PI}u(V,"radiansToDegrees");function _(e){return e%360*Math.PI/180}u(_,"degreesToRadians");function me(e,r="kilometers",t="kilometers"){if(!(e>=0))throw new Error("length must be a positive number");return x($(e,r),t)}u(me,"convertLength");function ye(e,r="meters",t="kilometers"){if(!(e>=0))throw new Error("area must be a positive number");const n=J[r];if(!n)throw new Error("invalid original units");const i=J[t];if(!i)throw new Error("invalid final units");return e/n*i}u(ye,"convertArea");function A(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}u(A,"isNumber");function D(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}u(D,"isObject");function ge(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(r=>{if(!A(r))throw new Error("bbox must only contain numbers")})}u(ge,"validateBBox");function pe(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}u(pe,"validateId");var de=Object.defineProperty,M=(e,r)=>de(e,"name",{value:r,configurable:!0});function T(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}M(T,"getCoord");function ve(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}M(ve,"getCoords");function W(e){if(e.length>1&&A(e[0])&&A(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return W(e[0]);throw new Error("coordinates must only contain numbers")}M(W,"containsNumber");function we(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)}M(we,"geojsonType");function be(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)}M(be,"featureOf");function Pe(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}}M(Pe,"collectionOf");function Ee(e){return e.type==="Feature"?e.geometry:e}M(Ee,"getGeom");function Me(e,r){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}M(Me,"getType");var Ce=Object.defineProperty,Le=(e,r)=>Ce(e,"name",{value:r,configurable:!0});function X(e,r,t={}){var n=T(e),i=T(r),o=_(i[1]-n[1]),s=_(i[0]-n[0]),l=_(n[1]),a=_(i[1]),f=Math.pow(Math.sin(o/2),2)+Math.pow(Math.sin(s/2),2)*Math.cos(l)*Math.cos(a);return x(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),t.units)}Le(X,"distance");var Se=Object.defineProperty,h=(e,r)=>Se(e,"name",{value:r,configurable:!0});function k(e,r,t){if(e!==null)for(var n,i,o,s,l,a,f,m=0,c=0,v,w=e.type,g=w==="FeatureCollection",C=w==="Feature",q=g?e.features.length:1,L=0;L<q;L++){f=g?e.features[L].geometry:C?e.geometry:e,v=f?f.type==="GeometryCollection":!1,l=v?f.geometries.length:1;for(var O=0;O<l;O++){var p=0,S=0;if(s=v?f.geometries[O]:f,s!==null){a=s.coordinates;var E=s.type;switch(m=t&&(E==="Polygon"||E==="MultiPolygon")?1:0,E){case null:break;case"Point":if(r(a,c,L,p,S)===!1)return!1;c++,p++;break;case"LineString":case"MultiPoint":for(n=0;n<a.length;n++){if(r(a[n],c,L,p,S)===!1)return!1;c++,E==="MultiPoint"&&p++}E==="LineString"&&p++;break;case"Polygon":case"MultiLineString":for(n=0;n<a.length;n++){for(i=0;i<a[n].length-m;i++){if(r(a[n][i],c,L,p,S)===!1)return!1;c++}E==="MultiLineString"&&p++,E==="Polygon"&&S++}E==="Polygon"&&p++;break;case"MultiPolygon":for(n=0;n<a.length;n++){for(S=0,i=0;i<a[n].length;i++){for(o=0;o<a[n][i].length-m;o++){if(r(a[n][i][o],c,L,p,S)===!1)return!1;c++}S++}p++}break;case"GeometryCollection":for(n=0;n<s.geometries.length;n++)if(k(s.geometries[n],r,t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}h(k,"coordEach");function Ae(e,r,t,n){var i=t;return k(e,function(o,s,l,a,f){s===0&&t===void 0?i=o:i=r(i,o,s,l,a,f)},n),i}h(Ae,"coordReduce");function Y(e,r){var t;switch(e.type){case"FeatureCollection":for(t=0;t<e.features.length&&r(e.features[t].properties,t)!==!1;t++);break;case"Feature":r(e.properties,0);break}}h(Y,"propEach");function Fe(e,r,t){var n=t;return Y(e,function(i,o){o===0&&t===void 0?n=i:n=r(n,i,o)}),n}h(Fe,"propReduce");function Z(e,r){if(e.type==="Feature")r(e,0);else if(e.type==="FeatureCollection")for(var t=0;t<e.features.length&&r(e.features[t],t)!==!1;t++);}h(Z,"featureEach");function _e(e,r,t){var n=t;return Z(e,function(i,o){o===0&&t===void 0?n=i:n=r(n,i,o)}),n}h(_e,"featureReduce");function ke(e){var r=[];return k(e,function(t){r.push(t)}),r}h(ke,"coordAll");function z(e,r){var t,n,i,o,s,l,a,f,m,c,v=0,w=e.type==="FeatureCollection",g=e.type==="Feature",C=w?e.features.length:1;for(t=0;t<C;t++){for(l=w?e.features[t].geometry:g?e.geometry:e,f=w?e.features[t].properties:g?e.properties:{},m=w?e.features[t].bbox:g?e.bbox:void 0,c=w?e.features[t].id:g?e.id:void 0,a=l?l.type==="GeometryCollection":!1,s=a?l.geometries.length:1,i=0;i<s;i++){if(o=a?l.geometries[i]:l,o===null){if(r(null,v,f,m,c)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(r(o,v,f,m,c)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<o.geometries.length;n++)if(r(o.geometries[n],v,f,m,c)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}v++}}h(z,"geomEach");function Ge(e,r,t){var n=t;return z(e,function(i,o,s,l,a){o===0&&t===void 0?n=i:n=r(n,i,o,s,l,a)}),n}h(Ge,"geomReduce");function R(e,r){z(e,function(t,n,i,o,s){var l=t===null?null:t.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return r(d(t,i,{bbox:o,id:s}),n,0)===!1?!1:void 0}var a;switch(l){case"MultiPoint":a="Point";break;case"MultiLineString":a="LineString";break;case"MultiPolygon":a="Polygon";break}for(var f=0;f<t.coordinates.length;f++){var m=t.coordinates[f],c={type:a,coordinates:m};if(r(d(c,i),n,f)===!1)return!1}})}h(R,"flattenEach");function Re(e,r,t){var n=t;return R(e,function(i,o,s){o===0&&s===0&&t===void 0?n=i:n=r(n,i,o,s)}),n}h(Re,"flattenReduce");function I(e,r){R(e,function(t,n,i){var o=0;if(t.geometry){var s=t.geometry.type;if(!(s==="Point"||s==="MultiPoint")){var l,a=0,f=0,m=0;if(k(t,function(c,v,w,g,C){if(l===void 0||n>a||g>f||C>m){l=c,a=n,f=g,m=C,o=0;return}var q=P([l,c],t.properties);if(r(q,n,i,C,o)===!1)return!1;o++,l=c})===!1)return!1}}})}h(I,"segmentEach");function j(e,r,t){var n=t,i=!1;return I(e,function(o,s,l,a,f){i===!1&&t===void 0?n=o:n=r(n,o,s,l,a,f),i=!0}),n}h(j,"segmentReduce");function ee(e,r){if(!e)throw new Error("geojson is required");R(e,function(t,n,i){if(t.geometry!==null){var o=t.geometry.type,s=t.geometry.coordinates;switch(o){case"LineString":if(r(t,n,i,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<s.length;l++)if(r(P(s[l],t.properties),n,i,l)===!1)return!1;break}}})}h(ee,"lineEach");function qe(e,r,t){var n=t;return ee(e,function(i,o,s,l){o===0&&t===void 0?n=i:n=r(n,i,o,s,l)}),n}h(qe,"lineReduce");function Oe(e,r){if(r=r||{},!D(r))throw new Error("options is invalid");var t=r.featureIndex||0,n=r.multiFeatureIndex||0,i=r.geometryIndex||0,o=r.segmentIndex||0,s=r.properties,l;switch(e.type){case"FeatureCollection":t<0&&(t=e.features.length+t),s=s||e.features[t].properties,l=e.features[t].geometry;break;case"Feature":s=s||e.properties,l=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=e;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var a=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return o<0&&(o=a.length+o-1),P([a[o],a[o+1]],s,r);case"Polygon":return i<0&&(i=a.length+i),o<0&&(o=a[i].length+o-1),P([a[i][o],a[i][o+1]],s,r);case"MultiLineString":return n<0&&(n=a.length+n),o<0&&(o=a[n].length+o-1),P([a[n][o],a[n][o+1]],s,r);case"MultiPolygon":return n<0&&(n=a.length+n),i<0&&(i=a[n].length+i),o<0&&(o=a[n][i].length-o-1),P([a[n][i][o],a[n][i][o+1]],s,r)}throw new Error("geojson is invalid")}h(Oe,"findSegment");function Be(e,r){if(r=r||{},!D(r))throw new Error("options is invalid");var t=r.featureIndex||0,n=r.multiFeatureIndex||0,i=r.geometryIndex||0,o=r.coordIndex||0,s=r.properties,l;switch(e.type){case"FeatureCollection":t<0&&(t=e.features.length+t),s=s||e.features[t].properties,l=e.features[t].geometry;break;case"Feature":s=s||e.properties,l=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=e;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var a=l.coordinates;switch(l.type){case"Point":return b(a,s,r);case"MultiPoint":return n<0&&(n=a.length+n),b(a[n],s,r);case"LineString":return o<0&&(o=a.length+o),b(a[o],s,r);case"Polygon":return i<0&&(i=a.length+i),o<0&&(o=a[i].length+o),b(a[i][o],s,r);case"MultiLineString":return n<0&&(n=a.length+n),o<0&&(o=a[n].length+o),b(a[n][o],s,r);case"MultiPolygon":return n<0&&(n=a.length+n),i<0&&(i=a[n].length+i),o<0&&(o=a[n][i].length-o),b(a[n][i][o],s,r)}throw new Error("geojson is invalid")}h(Be,"findPoint");var Te=Object.defineProperty,Ne=(e,r)=>Te(e,"name",{value:r,configurable:!0});function re(e,r={}){return j(e,(t,n)=>{const i=n.geometry.coordinates;return t+X(i[0],i[1],r)},0)}Ne(re,"length");var De=re;export{De as t};
