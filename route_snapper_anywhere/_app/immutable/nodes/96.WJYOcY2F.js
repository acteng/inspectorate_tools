import{s as mr,r as yr,a as Y,e as Pe,t as ee,c as re,b as $e,f as Ee,h as te,d as _,K as X,i as I,j as _e,y as hr,v as pr,R as dr,n as gr}from"../chunks/scheduler.Cns_Y-fU.js";import{S as wr,i as br,e as vr,c as N,a as j,m as R,t as D,b as J,d as z}from"../chunks/index.B1sdSzhI.js";import{e as ae,b as W,M as Pr,G as $r,a as Er,L as _r}from"../chunks/index.Bhy-i68N.js";import{S as Cr}from"../chunks/SecondaryButton.aZZSPwDr.js";import"../chunks/Geocoder.svelte_svelte_type_style_lang.MMiTdOl1.js";import"../chunks/paths.D_O5ISkb.js";function Ar(e,r){var t=0,n=0,o=0,i=0,a=0,s=0,u=0,c=0,f=null,d=null,$=e[0],l=e[1],p=r.length;for(t;t<p;t++){n=0;var v=r[t].length-1,E=r[t];if(f=E[0],f[0]!==E[v][0]&&f[1]!==E[v][1])throw new Error("First and last coordinates in a ring must be the same");for(a=f[0]-$,s=f[1]-l,n;n<v;n++){if(d=E[n+1],c=d[1]-l,s<0&&c<0||s>0&&c>0){f=d,s=c,a=f[0]-$;continue}if(u=d[0]-e[0],c>0&&s<=0){if(i=a*c-u*s,i>0)o=o+1;else if(i===0)return 0}else if(s>0&&c<=0){if(i=a*c-u*s,i<0)o=o+1;else if(i===0)return 0}else if(c===0&&s<0){if(i=a*c-u*s,i===0)return 0}else if(s===0&&c<0){if(i=a*c-u*s,i===0)return 0}else if(s===0&&c===0){if(u<=0&&a>=0)return 0;if(a<=0&&u>=0)return 0}f=d,s=c,a=u}}return o%2!==0}var Fr=Object.defineProperty,m=(e,r)=>Fr(e,"name",{value:r,configurable:!0}),xr=class{constructor(r){this.direction=!1,this.compareProperties=!0;var t,n,o;this.precision=10**-((t=r==null?void 0:r.precision)!=null?t:17),this.direction=(n=r==null?void 0:r.direction)!=null?n:!1,this.compareProperties=(o=r==null?void 0:r.compareProperties)!=null?o:!0}compare(r,t){if(r.type!==t.type||!T(r,t))return!1;switch(r.type){case"Point":return this.compareCoord(r.coordinates,t.coordinates);case"LineString":return this.compareLine(r.coordinates,t.coordinates);case"Polygon":return this.comparePolygon(r,t);case"GeometryCollection":return this.compareGeometryCollection(r,t);case"Feature":return this.compareFeature(r,t);case"FeatureCollection":return this.compareFeatureCollection(r,t);default:if(r.type.startsWith("Multi")){const n=ne(r),o=ne(t);return n.every(i=>o.some(a=>this.compare(i,a)))}}return!1}compareCoord(r,t){return r.length===t.length&&r.every((n,o)=>Math.abs(n-t[o])<this.precision)}compareLine(r,t,n=0,o=!1){if(!T(r,t))return!1;const i=r;let a=t;if(o&&!this.compareCoord(i[0],a[0])){const u=this.fixStartIndex(a,i);if(u)a=u;else return!1}const s=this.compareCoord(i[n],a[n]);return this.direction||s?this.comparePath(i,a):this.compareCoord(i[n],a[a.length-(1+n)])?this.comparePath(i.slice().reverse(),a):!1}fixStartIndex(r,t){let n,o=-1;for(let i=0;i<r.length;i++)if(this.compareCoord(r[i],t[0])){o=i;break}return o>=0&&(n=[].concat(r.slice(o,r.length),r.slice(1,o+1))),n}comparePath(r,t){return r.every((n,o)=>this.compareCoord(n,t[o]))}comparePolygon(r,t){if(this.compareLine(r.coordinates[0],t.coordinates[0],1,!0)){const n=r.coordinates.slice(1,r.coordinates.length),o=t.coordinates.slice(1,t.coordinates.length);return n.every(i=>o.some(a=>this.compareLine(i,a,1,!0)))}return!1}compareGeometryCollection(r,t){return T(r.geometries,t.geometries)&&this.compareBBox(r,t)&&r.geometries.every((n,o)=>this.compare(n,t.geometries[o]))}compareFeature(r,t){return r.id===t.id&&(this.compareProperties?ae(r.properties,t.properties):!0)&&this.compareBBox(r,t)&&this.compare(r.geometry,t.geometry)}compareFeatureCollection(r,t){return T(r.features,t.features)&&this.compareBBox(r,t)&&r.features.every((n,o)=>this.compare(n,t.features[o]))}compareBBox(r,t){return!r.bbox&&!t.bbox||(r.bbox&&t.bbox?this.compareCoord(r.bbox,t.bbox):!1)}};m(xr,"GeojsonEquality");function T(e,r){return e.coordinates?e.coordinates.length===r.coordinates.length:e.length===r.length}m(T,"sameLength");function ne(e){return e.coordinates.map(r=>({type:e.type.replace("Multi",""),coordinates:r}))}m(ne,"explode");var g=63710088e-1,xe={centimeters:g*100,centimetres:g*100,degrees:360/(2*Math.PI),feet:g*3.28084,inches:g*39.37,kilometers:g/1e3,kilometres:g/1e3,meters:g,metres:g,miles:g/1609.344,millimeters:g*1e3,millimetres:g*1e3,nauticalmiles:g/1852,radians:1,yards:g*1.0936},Ce={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function C(e,r,t={}){const n={type:"Feature"};return(t.id===0||t.id)&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.properties=r||{},n.geometry=e,n}m(C,"feature");function Mr(e,r,t={}){switch(e){case"Point":return se(r).geometry;case"LineString":return le(r).geometry;case"Polygon":return ue(r).geometry;case"MultiPoint":return Le(r).geometry;case"MultiLineString":return Me(r).geometry;case"MultiPolygon":return Ie(r).geometry;default:throw new Error(e+" is invalid")}}m(Mr,"geometry");function se(e,r,t={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!B(e[0])||!B(e[1]))throw new Error("coordinates must contain numbers");return C({type:"Point",coordinates:e},r,t)}m(se,"point");function Lr(e,r,t={}){return K(e.map(n=>se(n,r)),t)}m(Lr,"points");function ue(e,r,t={}){for(const o of e){if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(o[o.length-1].length!==o[0].length)throw new Error("First and last Position are not equivalent.");for(let i=0;i<o[o.length-1].length;i++)if(o[o.length-1][i]!==o[0][i])throw new Error("First and last Position are not equivalent.")}return C({type:"Polygon",coordinates:e},r,t)}m(ue,"polygon");function Ir(e,r,t={}){return K(e.map(n=>ue(n,r)),t)}m(Ir,"polygons");function le(e,r,t={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return C({type:"LineString",coordinates:e},r,t)}m(le,"lineString");function Br(e,r,t={}){return K(e.map(n=>le(n,r)),t)}m(Br,"lineStrings");function K(e,r={}){const t={type:"FeatureCollection"};return r.id&&(t.id=r.id),r.bbox&&(t.bbox=r.bbox),t.features=e,t}m(K,"featureCollection");function Me(e,r,t={}){return C({type:"MultiLineString",coordinates:e},r,t)}m(Me,"multiLineString");function Le(e,r,t={}){return C({type:"MultiPoint",coordinates:e},r,t)}m(Le,"multiPoint");function Ie(e,r,t={}){return C({type:"MultiPolygon",coordinates:e},r,t)}m(Ie,"multiPolygon");function Or(e,r,t={}){return C({type:"GeometryCollection",geometries:e},r,t)}m(Or,"geometryCollection");function Sr(e,r=0){if(r&&!(r>=0))throw new Error("precision must be a positive number");const t=Math.pow(10,r||0);return Math.round(e*t)/t}m(Sr,"round");function Be(e,r="kilometers"){const t=xe[r];if(!t)throw new Error(r+" units is invalid");return e*t}m(Be,"radiansToLength");function ce(e,r="kilometers"){const t=xe[r];if(!t)throw new Error(r+" units is invalid");return e/t}m(ce,"lengthToRadians");function qr(e,r){return Oe(ce(e,r))}m(qr,"lengthToDegrees");function Tr(e){let r=e%360;return r<0&&(r+=360),r}m(Tr,"bearingToAzimuth");function Oe(e){return e%(2*Math.PI)*180/Math.PI}m(Oe,"radiansToDegrees");function kr(e){return e%360*Math.PI/180}m(kr,"degreesToRadians");function Gr(e,r="kilometers",t="kilometers"){if(!(e>=0))throw new Error("length must be a positive number");return Be(ce(e,r),t)}m(Gr,"convertLength");function Nr(e,r="meters",t="kilometers"){if(!(e>=0))throw new Error("area must be a positive number");const n=Ce[r];if(!n)throw new Error("invalid original units");const o=Ce[t];if(!o)throw new Error("invalid final units");return e/n*o}m(Nr,"convertArea");function B(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}m(B,"isNumber");function jr(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}m(jr,"isObject");function Rr(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(r=>{if(!B(r))throw new Error("bbox must only contain numbers")})}m(Rr,"validateBBox");function Dr(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}m(Dr,"validateId");var Jr=Object.defineProperty,A=(e,r)=>Jr(e,"name",{value:r,configurable:!0});function Se(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}A(Se,"getCoord");function zr(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}A(zr,"getCoords");function qe(e){if(e.length>1&&B(e[0])&&B(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return qe(e[0]);throw new Error("coordinates must only contain numbers")}A(qe,"containsNumber");function Vr(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)}A(Vr,"geojsonType");function Wr(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)}A(Wr,"featureOf");function Ur(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}}A(Ur,"collectionOf");function Te(e){return e.type==="Feature"?e.geometry:e}A(Te,"getGeom");function Kr(e,r){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}A(Kr,"getType");var Zr=Object.defineProperty,ke=(e,r)=>Zr(e,"name",{value:r,configurable:!0});function V(e,r,t={}){if(!e)throw new Error("point is required");if(!r)throw new Error("polygon is required");const n=Se(e),o=Te(r),i=o.type,a=r.bbox;let s=o.coordinates;if(a&&Ge(n,a)===!1)return!1;i==="Polygon"&&(s=[s]);let u=!1;for(var c=0;c<s.length;++c){const f=Ar(n,s[c]);if(f===0)return!t.ignoreBoundary;f&&(u=!0)}return u}ke(V,"booleanPointInPolygon");function Ge(e,r){return r[0]<=e[0]&&r[1]<=e[1]&&r[2]>=e[0]&&r[3]>=e[1]}ke(Ge,"inBBox");var Hr=Object.defineProperty,y=(e,r)=>Hr(e,"name",{value:r,configurable:!0}),Qr=class{constructor(r){this.direction=!1,this.compareProperties=!0;var t,n,o;this.precision=10**-((t=r==null?void 0:r.precision)!=null?t:17),this.direction=(n=r==null?void 0:r.direction)!=null?n:!1,this.compareProperties=(o=r==null?void 0:r.compareProperties)!=null?o:!0}compare(r,t){if(r.type!==t.type||!k(r,t))return!1;switch(r.type){case"Point":return this.compareCoord(r.coordinates,t.coordinates);case"LineString":return this.compareLine(r.coordinates,t.coordinates);case"Polygon":return this.comparePolygon(r,t);case"GeometryCollection":return this.compareGeometryCollection(r,t);case"Feature":return this.compareFeature(r,t);case"FeatureCollection":return this.compareFeatureCollection(r,t);default:if(r.type.startsWith("Multi")){const n=oe(r),o=oe(t);return n.every(i=>o.some(a=>this.compare(i,a)))}}return!1}compareCoord(r,t){return r.length===t.length&&r.every((n,o)=>Math.abs(n-t[o])<this.precision)}compareLine(r,t,n=0,o=!1){if(!k(r,t))return!1;const i=r;let a=t;if(o&&!this.compareCoord(i[0],a[0])){const u=this.fixStartIndex(a,i);if(u)a=u;else return!1}const s=this.compareCoord(i[n],a[n]);return this.direction||s?this.comparePath(i,a):this.compareCoord(i[n],a[a.length-(1+n)])?this.comparePath(i.slice().reverse(),a):!1}fixStartIndex(r,t){let n,o=-1;for(let i=0;i<r.length;i++)if(this.compareCoord(r[i],t[0])){o=i;break}return o>=0&&(n=[].concat(r.slice(o,r.length),r.slice(1,o+1))),n}comparePath(r,t){return r.every((n,o)=>this.compareCoord(n,t[o]))}comparePolygon(r,t){if(this.compareLine(r.coordinates[0],t.coordinates[0],1,!0)){const n=r.coordinates.slice(1,r.coordinates.length),o=t.coordinates.slice(1,t.coordinates.length);return n.every(i=>o.some(a=>this.compareLine(i,a,1,!0)))}return!1}compareGeometryCollection(r,t){return k(r.geometries,t.geometries)&&this.compareBBox(r,t)&&r.geometries.every((n,o)=>this.compare(n,t.geometries[o]))}compareFeature(r,t){return r.id===t.id&&(this.compareProperties?ae(r.properties,t.properties):!0)&&this.compareBBox(r,t)&&this.compare(r.geometry,t.geometry)}compareFeatureCollection(r,t){return k(r.features,t.features)&&this.compareBBox(r,t)&&r.features.every((n,o)=>this.compare(n,t.features[o]))}compareBBox(r,t){return!r.bbox&&!t.bbox||(r.bbox&&t.bbox?this.compareCoord(r.bbox,t.bbox):!1)}};y(Qr,"GeojsonEquality");function k(e,r){return e.coordinates?e.coordinates.length===r.coordinates.length:e.length===r.length}y(k,"sameLength");function oe(e){return e.coordinates.map(r=>({type:e.type.replace("Multi",""),coordinates:r}))}y(oe,"explode");var w=63710088e-1,Ne={centimeters:w*100,centimetres:w*100,degrees:360/(2*Math.PI),feet:w*3.28084,inches:w*39.37,kilometers:w/1e3,kilometres:w/1e3,meters:w,metres:w,miles:w/1609.344,millimeters:w*1e3,millimetres:w*1e3,nauticalmiles:w/1852,radians:1,yards:w*1.0936},Ae={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function F(e,r,t={}){const n={type:"Feature"};return(t.id===0||t.id)&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.properties=r||{},n.geometry=e,n}y(F,"feature");function Xr(e,r,t={}){switch(e){case"Point":return fe(r).geometry;case"LineString":return ye(r).geometry;case"Polygon":return me(r).geometry;case"MultiPoint":return Re(r).geometry;case"MultiLineString":return je(r).geometry;case"MultiPolygon":return De(r).geometry;default:throw new Error(e+" is invalid")}}y(Xr,"geometry");function fe(e,r,t={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!O(e[0])||!O(e[1]))throw new Error("coordinates must contain numbers");return F({type:"Point",coordinates:e},r,t)}y(fe,"point");function Yr(e,r,t={}){return Z(e.map(n=>fe(n,r)),t)}y(Yr,"points");function me(e,r,t={}){for(const o of e){if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(o[o.length-1].length!==o[0].length)throw new Error("First and last Position are not equivalent.");for(let i=0;i<o[o.length-1].length;i++)if(o[o.length-1][i]!==o[0][i])throw new Error("First and last Position are not equivalent.")}return F({type:"Polygon",coordinates:e},r,t)}y(me,"polygon");function et(e,r,t={}){return Z(e.map(n=>me(n,r)),t)}y(et,"polygons");function ye(e,r,t={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return F({type:"LineString",coordinates:e},r,t)}y(ye,"lineString");function rt(e,r,t={}){return Z(e.map(n=>ye(n,r)),t)}y(rt,"lineStrings");function Z(e,r={}){const t={type:"FeatureCollection"};return r.id&&(t.id=r.id),r.bbox&&(t.bbox=r.bbox),t.features=e,t}y(Z,"featureCollection");function je(e,r,t={}){return F({type:"MultiLineString",coordinates:e},r,t)}y(je,"multiLineString");function Re(e,r,t={}){return F({type:"MultiPoint",coordinates:e},r,t)}y(Re,"multiPoint");function De(e,r,t={}){return F({type:"MultiPolygon",coordinates:e},r,t)}y(De,"multiPolygon");function tt(e,r,t={}){return F({type:"GeometryCollection",geometries:e},r,t)}y(tt,"geometryCollection");function nt(e,r=0){if(r&&!(r>=0))throw new Error("precision must be a positive number");const t=Math.pow(10,r||0);return Math.round(e*t)/t}y(nt,"round");function Je(e,r="kilometers"){const t=Ne[r];if(!t)throw new Error(r+" units is invalid");return e*t}y(Je,"radiansToLength");function he(e,r="kilometers"){const t=Ne[r];if(!t)throw new Error(r+" units is invalid");return e/t}y(he,"lengthToRadians");function ot(e,r){return ze(he(e,r))}y(ot,"lengthToDegrees");function it(e){let r=e%360;return r<0&&(r+=360),r}y(it,"bearingToAzimuth");function ze(e){return e%(2*Math.PI)*180/Math.PI}y(ze,"radiansToDegrees");function at(e){return e%360*Math.PI/180}y(at,"degreesToRadians");function st(e,r="kilometers",t="kilometers"){if(!(e>=0))throw new Error("length must be a positive number");return Je(he(e,r),t)}y(st,"convertLength");function ut(e,r="meters",t="kilometers"){if(!(e>=0))throw new Error("area must be a positive number");const n=Ae[r];if(!n)throw new Error("invalid original units");const o=Ae[t];if(!o)throw new Error("invalid final units");return e/n*o}y(ut,"convertArea");function O(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}y(O,"isNumber");function lt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}y(lt,"isObject");function ct(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(r=>{if(!O(r))throw new Error("bbox must only contain numbers")})}y(ct,"validateBBox");function ft(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}y(ft,"validateId");var mt=Object.defineProperty,x=(e,r)=>mt(e,"name",{value:r,configurable:!0});function Ve(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}x(Ve,"getCoord");function We(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}x(We,"getCoords");function Ue(e){if(e.length>1&&O(e[0])&&O(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return Ue(e[0]);throw new Error("coordinates must only contain numbers")}x(Ue,"containsNumber");function yt(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)}x(yt,"geojsonType");function ht(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)}x(ht,"featureOf");function pt(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}}x(pt,"collectionOf");function dt(e){return e.type==="Feature"?e.geometry:e}x(dt,"getGeom");function gt(e,r){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}x(gt,"getType");var wt=Object.defineProperty,Ke=(e,r)=>wt(e,"name",{value:r,configurable:!0});function S(e,r,t={}){const n=Ve(e),o=We(r);for(let i=0;i<o.length-1;i++){let a=!1;if(t.ignoreEndVertices&&(i===0&&(a="start"),i===o.length-2&&(a="end"),i===0&&i+1===o.length-1&&(a="both")),Ze(o[i],o[i+1],n,a,typeof t.epsilon>"u"?null:t.epsilon))return!0}return!1}Ke(S,"booleanPointOnLine");function Ze(e,r,t,n,o){const i=t[0],a=t[1],s=e[0],u=e[1],c=r[0],f=r[1],d=t[0]-s,$=t[1]-u,l=c-s,p=f-u,v=d*p-$*l;if(o!==null){if(Math.abs(v)>o)return!1}else if(v!==0)return!1;if(n){if(n==="start")return Math.abs(l)>=Math.abs(p)?l>0?s<i&&i<=c:c<=i&&i<s:p>0?u<a&&a<=f:f<=a&&a<u;if(n==="end")return Math.abs(l)>=Math.abs(p)?l>0?s<=i&&i<c:c<i&&i<=s:p>0?u<=a&&a<f:f<a&&a<=u;if(n==="both")return Math.abs(l)>=Math.abs(p)?l>0?s<i&&i<c:c<i&&i<s:p>0?u<a&&a<f:f<a&&a<u}else return Math.abs(l)>=Math.abs(p)?l>0?s<=i&&i<=c:c<=i&&i<=s:p>0?u<=a&&a<=f:f<=a&&a<=u;return!1}Ke(Ze,"isPointOnLineSegment");var bt=Object.defineProperty,h=(e,r)=>bt(e,"name",{value:r,configurable:!0}),vt=class{constructor(r){this.direction=!1,this.compareProperties=!0;var t,n,o;this.precision=10**-((t=r==null?void 0:r.precision)!=null?t:17),this.direction=(n=r==null?void 0:r.direction)!=null?n:!1,this.compareProperties=(o=r==null?void 0:r.compareProperties)!=null?o:!0}compare(r,t){if(r.type!==t.type||!G(r,t))return!1;switch(r.type){case"Point":return this.compareCoord(r.coordinates,t.coordinates);case"LineString":return this.compareLine(r.coordinates,t.coordinates);case"Polygon":return this.comparePolygon(r,t);case"GeometryCollection":return this.compareGeometryCollection(r,t);case"Feature":return this.compareFeature(r,t);case"FeatureCollection":return this.compareFeatureCollection(r,t);default:if(r.type.startsWith("Multi")){const n=ie(r),o=ie(t);return n.every(i=>o.some(a=>this.compare(i,a)))}}return!1}compareCoord(r,t){return r.length===t.length&&r.every((n,o)=>Math.abs(n-t[o])<this.precision)}compareLine(r,t,n=0,o=!1){if(!G(r,t))return!1;const i=r;let a=t;if(o&&!this.compareCoord(i[0],a[0])){const u=this.fixStartIndex(a,i);if(u)a=u;else return!1}const s=this.compareCoord(i[n],a[n]);return this.direction||s?this.comparePath(i,a):this.compareCoord(i[n],a[a.length-(1+n)])?this.comparePath(i.slice().reverse(),a):!1}fixStartIndex(r,t){let n,o=-1;for(let i=0;i<r.length;i++)if(this.compareCoord(r[i],t[0])){o=i;break}return o>=0&&(n=[].concat(r.slice(o,r.length),r.slice(1,o+1))),n}comparePath(r,t){return r.every((n,o)=>this.compareCoord(n,t[o]))}comparePolygon(r,t){if(this.compareLine(r.coordinates[0],t.coordinates[0],1,!0)){const n=r.coordinates.slice(1,r.coordinates.length),o=t.coordinates.slice(1,t.coordinates.length);return n.every(i=>o.some(a=>this.compareLine(i,a,1,!0)))}return!1}compareGeometryCollection(r,t){return G(r.geometries,t.geometries)&&this.compareBBox(r,t)&&r.geometries.every((n,o)=>this.compare(n,t.geometries[o]))}compareFeature(r,t){return r.id===t.id&&(this.compareProperties?ae(r.properties,t.properties):!0)&&this.compareBBox(r,t)&&this.compare(r.geometry,t.geometry)}compareFeatureCollection(r,t){return G(r.features,t.features)&&this.compareBBox(r,t)&&r.features.every((n,o)=>this.compare(n,t.features[o]))}compareBBox(r,t){return!r.bbox&&!t.bbox||(r.bbox&&t.bbox?this.compareCoord(r.bbox,t.bbox):!1)}};h(vt,"GeojsonEquality");function G(e,r){return e.coordinates?e.coordinates.length===r.coordinates.length:e.length===r.length}h(G,"sameLength");function ie(e){return e.coordinates.map(r=>({type:e.type.replace("Multi",""),coordinates:r}))}h(ie,"explode");var b=63710088e-1,He={centimeters:b*100,centimetres:b*100,degrees:360/(2*Math.PI),feet:b*3.28084,inches:b*39.37,kilometers:b/1e3,kilometres:b/1e3,meters:b,metres:b,miles:b/1609.344,millimeters:b*1e3,millimetres:b*1e3,nauticalmiles:b/1852,radians:1,yards:b*1.0936},Fe={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function M(e,r,t={}){const n={type:"Feature"};return(t.id===0||t.id)&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.properties=r||{},n.geometry=e,n}h(M,"feature");function Pt(e,r,t={}){switch(e){case"Point":return pe(r).geometry;case"LineString":return ge(r).geometry;case"Polygon":return de(r).geometry;case"MultiPoint":return Xe(r).geometry;case"MultiLineString":return Qe(r).geometry;case"MultiPolygon":return Ye(r).geometry;default:throw new Error(e+" is invalid")}}h(Pt,"geometry");function pe(e,r,t={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!q(e[0])||!q(e[1]))throw new Error("coordinates must contain numbers");return M({type:"Point",coordinates:e},r,t)}h(pe,"point");function $t(e,r,t={}){return H(e.map(n=>pe(n,r)),t)}h($t,"points");function de(e,r,t={}){for(const o of e){if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(o[o.length-1].length!==o[0].length)throw new Error("First and last Position are not equivalent.");for(let i=0;i<o[o.length-1].length;i++)if(o[o.length-1][i]!==o[0][i])throw new Error("First and last Position are not equivalent.")}return M({type:"Polygon",coordinates:e},r,t)}h(de,"polygon");function Et(e,r,t={}){return H(e.map(n=>de(n,r)),t)}h(Et,"polygons");function ge(e,r,t={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return M({type:"LineString",coordinates:e},r,t)}h(ge,"lineString");function _t(e,r,t={}){return H(e.map(n=>ge(n,r)),t)}h(_t,"lineStrings");function H(e,r={}){const t={type:"FeatureCollection"};return r.id&&(t.id=r.id),r.bbox&&(t.bbox=r.bbox),t.features=e,t}h(H,"featureCollection");function Qe(e,r,t={}){return M({type:"MultiLineString",coordinates:e},r,t)}h(Qe,"multiLineString");function Xe(e,r,t={}){return M({type:"MultiPoint",coordinates:e},r,t)}h(Xe,"multiPoint");function Ye(e,r,t={}){return M({type:"MultiPolygon",coordinates:e},r,t)}h(Ye,"multiPolygon");function Ct(e,r,t={}){return M({type:"GeometryCollection",geometries:e},r,t)}h(Ct,"geometryCollection");function At(e,r=0){if(r&&!(r>=0))throw new Error("precision must be a positive number");const t=Math.pow(10,r||0);return Math.round(e*t)/t}h(At,"round");function er(e,r="kilometers"){const t=He[r];if(!t)throw new Error(r+" units is invalid");return e*t}h(er,"radiansToLength");function we(e,r="kilometers"){const t=He[r];if(!t)throw new Error(r+" units is invalid");return e/t}h(we,"lengthToRadians");function Ft(e,r){return rr(we(e,r))}h(Ft,"lengthToDegrees");function xt(e){let r=e%360;return r<0&&(r+=360),r}h(xt,"bearingToAzimuth");function rr(e){return e%(2*Math.PI)*180/Math.PI}h(rr,"radiansToDegrees");function Mt(e){return e%360*Math.PI/180}h(Mt,"degreesToRadians");function Lt(e,r="kilometers",t="kilometers"){if(!(e>=0))throw new Error("length must be a positive number");return er(we(e,r),t)}h(Lt,"convertLength");function It(e,r="meters",t="kilometers"){if(!(e>=0))throw new Error("area must be a positive number");const n=Fe[r];if(!n)throw new Error("invalid original units");const o=Fe[t];if(!o)throw new Error("invalid final units");return e/n*o}h(It,"convertArea");function q(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}h(q,"isNumber");function Bt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}h(Bt,"isObject");function Ot(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(r=>{if(!q(r))throw new Error("bbox must only contain numbers")})}h(Ot,"validateBBox");function St(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}h(St,"validateId");var qt=Object.defineProperty,L=(e,r)=>qt(e,"name",{value:r,configurable:!0});function Tt(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}L(Tt,"getCoord");function kt(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}L(kt,"getCoords");function tr(e){if(e.length>1&&q(e[0])&&q(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return tr(e[0]);throw new Error("coordinates must only contain numbers")}L(tr,"containsNumber");function Gt(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)}L(Gt,"geojsonType");function Nt(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)}L(Nt,"featureOf");function jt(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}}L(jt,"collectionOf");function U(e){return e.type==="Feature"?e.geometry:e}L(U,"getGeom");function Rt(e,r){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}L(Rt,"getType");var Dt=Object.defineProperty,P=(e,r)=>Dt(e,"name",{value:r,configurable:!0});function nr(e,r){const t=U(e),n=U(r),o=t.type,i=n.type,a=t.coordinates,s=n.coordinates;switch(o){case"Point":switch(i){case"Point":return Q(a,s);default:throw new Error("feature2 "+i+" geometry not supported")}case"MultiPoint":switch(i){case"Point":return ir(t,n);case"MultiPoint":return ar(t,n);default:throw new Error("feature2 "+i+" geometry not supported")}case"LineString":switch(i){case"Point":return S(n,t,{ignoreEndVertices:!0});case"LineString":return lr(t,n);case"MultiPoint":return sr(t,n);default:throw new Error("feature2 "+i+" geometry not supported")}case"Polygon":switch(i){case"Point":return V(n,t,{ignoreBoundary:!0});case"LineString":return cr(t,n);case"Polygon":return be(t,n);case"MultiPoint":return ur(t,n);default:throw new Error("feature2 "+i+" geometry not supported")}case"MultiPolygon":switch(i){case"Polygon":return or(t,n);default:throw new Error("feature2 "+i+" geometry not supported")}default:throw new Error("feature1 "+o+" geometry not supported")}}P(nr,"booleanContains");function or(e,r){return e.coordinates.some(t=>be({type:"Polygon",coordinates:t},r))}P(or,"isPolygonInMultiPolygon");function ir(e,r){let t,n=!1;for(t=0;t<e.coordinates.length;t++)if(Q(e.coordinates[t],r.coordinates)){n=!0;break}return n}P(ir,"isPointInMultiPoint");function ar(e,r){for(const t of r.coordinates){let n=!1;for(const o of e.coordinates)if(Q(t,o)){n=!0;break}if(!n)return!1}return!0}P(ar,"isMultiPointInMultiPoint");function sr(e,r){let t=!1;for(const n of r.coordinates)if(S(n,e,{ignoreEndVertices:!0})&&(t=!0),!S(n,e))return!1;return!!t}P(sr,"isMultiPointOnLine");function ur(e,r){for(const t of r.coordinates)if(!V(t,e,{ignoreBoundary:!0}))return!1;return!0}P(ur,"isMultiPointInPoly");function lr(e,r){let t=!1;for(const n of r.coordinates)if(S({type:"Point",coordinates:n},e,{ignoreEndVertices:!0})&&(t=!0),!S({type:"Point",coordinates:n},e,{ignoreEndVertices:!1}))return!1;return t}P(lr,"isLineOnLine");function cr(e,r){let t=!1,n=0;const o=W(e),i=W(r);if(!ve(o,i))return!1;for(n;n<r.coordinates.length-1;n++){const a=fr(r.coordinates[n],r.coordinates[n+1]);if(V({type:"Point",coordinates:a},e,{ignoreBoundary:!0})){t=!0;break}}return t}P(cr,"isLineInPoly");function be(e,r){if(e.type==="Feature"&&e.geometry===null||r.type==="Feature"&&r.geometry===null)return!1;const t=W(e),n=W(r);if(!ve(t,n))return!1;const o=U(r).coordinates;for(const i of o)for(const a of i)if(!V(a,e))return!1;return!0}P(be,"isPolyInPoly");function ve(e,r){return!(e[0]>r[0]||e[2]<r[2]||e[1]>r[1]||e[3]<r[3])}P(ve,"doBBoxOverlap");function Q(e,r){return e[0]===r[0]&&e[1]===r[1]}P(Q,"compareCoords");function fr(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2]}P(fr,"getMidpoint");var Jt=nr;const zt=""+new URL("../assets/authorities.BU902JIM.geojson",import.meta.url).href;function Vt(e){let r;return{c(){r=ee("Lookup boundary")},l(t){r=te(t,"Lookup boundary")},m(t,n){I(t,r,n)},d(t){t&&_(r)}}}function Wt(e){let r,t;return r=new _r({props:{paint:{"line-color":"red","line-width":5}}}),{c(){N(r.$$.fragment)},l(n){j(r.$$.fragment,n)},m(n,o){R(r,n,o),t=!0},p:gr,i(n){t||(D(r.$$.fragment,n),t=!0)},o(n){J(r.$$.fragment,n),t=!1},d(n){z(r,n)}}}function Ut(e){let r,t,n,o;return r=new $r({props:{map:e[0]}}),n=new Er({props:{data:e[1],$$slots:{default:[Wt]},$$scope:{ctx:e}}}),{c(){N(r.$$.fragment),t=Y(),N(n.$$.fragment)},l(i){j(r.$$.fragment,i),t=re(i),j(n.$$.fragment,i)},m(i,a){R(r,i,a),I(i,t,a),R(n,i,a),o=!0},p(i,a){const s={};a&1&&(s.map=i[0]),r.$set(s);const u={};a&2&&(u.data=i[1]),a&64&&(u.$$scope={dirty:a,ctx:i}),n.$set(u)},i(i){o||(D(r.$$.fragment,i),D(n.$$.fragment,i),o=!0)},o(i){J(r.$$.fragment,i),J(n.$$.fragment,i),o=!1},d(i){i&&_(t),z(r,i),z(n,i)}}}function Kt(e){let r,t,n,o,i,a,s,u,c,f;r=new Cr({props:{$$slots:{default:[Vt]},$$scope:{ctx:e}}}),r.$on("click",e[3]);function d(l){e[4](l)}let $={style:"https://api.maptiler.com/maps/uk-openzoomstack-light/style.json?key=MZEJTanw3WpxRvt7qDfo",standardControls:!0,$$slots:{default:[Ut,({map:l})=>({0:l}),({map:l})=>l?1:0]},$$scope:{ctx:e}};return e[0]!==void 0&&($.map=e[0]),u=new Pr({props:$}),yr.push(()=>vr(u,"map",d)),u.$on("error",e[5]),{c(){N(r.$$.fragment),t=Y(),n=Pe("p"),o=ee("Matches: "),i=ee(e[2]),a=Y(),s=Pe("div"),N(u.$$.fragment),this.h()},l(l){j(r.$$.fragment,l),t=re(l),n=$e(l,"P",{});var p=Ee(n);o=te(p,"Matches: "),i=te(p,e[2]),p.forEach(_),a=re(l),s=$e(l,"DIV",{style:!0});var v=Ee(s);j(u.$$.fragment,v),v.forEach(_),this.h()},h(){X(s,"position","relative"),X(s,"width","100%"),X(s,"height","600px")},m(l,p){R(r,l,p),I(l,t,p),I(l,n,p),_e(n,o),_e(n,i),I(l,a,p),I(l,s,p),R(u,s,null),f=!0},p(l,[p]){const v={};p&64&&(v.$$scope={dirty:p,ctx:l}),r.$set(v),(!f||p&4)&&hr(i,l[2]);const E={};p&67&&(E.$$scope={dirty:p,ctx:l}),!c&&p&1&&(c=!0,E.map=l[0],pr(()=>c=!1)),u.$set(E)},i(l){f||(D(r.$$.fragment,l),D(u.$$.fragment,l),f=!0)},o(l){J(r.$$.fragment,l),J(u.$$.fragment,l),f=!1},d(l){l&&(_(t),_(n),_(a),_(s)),z(r,l),z(u)}}}function Zt(e,r,t){let n={type:"FeatureCollection",features:[]};dr(async()=>{let f=await(await fetch(zt)).json();for(let d of f.features)d.geometry.type=="MultiPolygon"&&(d.geometry.type="Polygon",d.geometry.coordinates=d.geometry.coordinates[0]);t(1,n=f)});let o=null,i="";function a(){if(!o)return;let c="no perfect matches",f=Date.now(),d=o.getBounds(),$={type:"Polygon",coordinates:[[d.getNorthEast().toArray(),d.getNorthWest().toArray(),d.getSouthWest().toArray(),d.getSouthEast().toArray(),d.getNorthEast().toArray()]]};for(let l of n.features)if(Jt(l.geometry,$)){c=l.properties.name;break}t(2,i=`${c}, taking ${Date.now()-f} ms`)}function s(c){o=c,t(0,o)}const u=c=>{console.log(c.detail.error)};return e.$$.update=()=>{e.$$.dirty&1&&o&&o.on("move",()=>{a()})},[o,n,i,a,s,u]}class an extends wr{constructor(r){super(),br(this,r,Zt,Kt,mr,{})}}export{an as component};
