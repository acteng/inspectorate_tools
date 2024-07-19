import{s as Wt,v as x,e as V,a as P,c as X,b as me,g as S,f as ne,o as Jt,i as ve,h as g,w as N,k as Qt,t as oe,d as se,j as Zt,m as ae}from"../chunks/scheduler.ScMV3vmV.js";import{S as jt,i as er,e as z,c as R,a as q,m as F,t as O,b as T,d as G}from"../chunks/index.DbrWxxqn.js";import{p as ue}from"../chunks/index.BTb-Fz_l.js";import{D as tr}from"../chunks/DecimalInput.CZdp-HRs.js";import{S as yt}from"../chunks/Select.CV0kGAxR.js";import{S as Oe,C as rr,a as nr,t as ir,r as ar,f as or,d as sr}from"../chunks/ContextualMapEntry.D0q1v_EV.js";import{T as ge}from"../chunks/TextArea.DbkWbfhb.js";import{T as he}from"../chunks/TextInput.C1q4cP7I.js";import{s as A}from"../chunks/data.BgaQwnKJ.js";import{e as ur}from"../chunks/index.BOWia5Ug.js";import{E as lr}from"../chunks/ExternalLink.CHHLJ-P5.js";var mr=Object.defineProperty,d=(t,e)=>mr(t,"name",{value:e,configurable:!0}),fr=class{constructor(e){this.direction=!1,this.compareProperties=!0;var r,i,n;this.precision=10**-((r=e==null?void 0:e.precision)!=null?r:17),this.direction=(i=e==null?void 0:e.direction)!=null?i:!1,this.compareProperties=(n=e==null?void 0:e.compareProperties)!=null?n:!0}compare(e,r){if(e.type!==r.type||!le(e,r))return!1;switch(e.type){case"Point":return this.compareCoord(e.coordinates,r.coordinates);case"LineString":return this.compareLine(e.coordinates,r.coordinates);case"Polygon":return this.comparePolygon(e,r);case"GeometryCollection":return this.compareGeometryCollection(e,r);case"Feature":return this.compareFeature(e,r);case"FeatureCollection":return this.compareFeatureCollection(e,r);default:if(e.type.startsWith("Multi")){const i=Ge(e),n=Ge(r);return i.every(a=>n.some(u=>this.compare(a,u)))}}return!1}compareCoord(e,r){return e.length===r.length&&e.every((i,n)=>Math.abs(i-r[n])<this.precision)}compareLine(e,r,i=0,n=!1){if(!le(e,r))return!1;const a=e;let u=r;if(n&&!this.compareCoord(a[0],u[0])){const o=this.fixStartIndex(u,a);if(o)u=o;else return!1}const l=this.compareCoord(a[i],u[i]);return this.direction||l?this.comparePath(a,u):this.compareCoord(a[i],u[u.length-(1+i)])?this.comparePath(a.slice().reverse(),u):!1}fixStartIndex(e,r){let i,n=-1;for(let a=0;a<e.length;a++)if(this.compareCoord(e[a],r[0])){n=a;break}return n>=0&&(i=[].concat(e.slice(n,e.length),e.slice(1,n+1))),i}comparePath(e,r){return e.every((i,n)=>this.compareCoord(i,r[n]))}comparePolygon(e,r){if(this.compareLine(e.coordinates[0],r.coordinates[0],1,!0)){const i=e.coordinates.slice(1,e.coordinates.length),n=r.coordinates.slice(1,r.coordinates.length);return i.every(a=>n.some(u=>this.compareLine(a,u,1,!0)))}return!1}compareGeometryCollection(e,r){return le(e.geometries,r.geometries)&&this.compareBBox(e,r)&&e.geometries.every((i,n)=>this.compare(i,r.geometries[n]))}compareFeature(e,r){return e.id===r.id&&(this.compareProperties?ur(e.properties,r.properties):!0)&&this.compareBBox(e,r)&&this.compare(e.geometry,r.geometry)}compareFeatureCollection(e,r){return le(e.features,r.features)&&this.compareBBox(e,r)&&e.features.every((i,n)=>this.compare(i,r.features[n]))}compareBBox(e,r){return!e.bbox&&!r.bbox||(e.bbox&&r.bbox?this.compareCoord(e.bbox,r.bbox):!1)}};d(fr,"GeojsonEquality");function le(t,e){return t.coordinates?t.coordinates.length===e.coordinates.length:t.length===e.length}d(le,"sameLength");function Ge(t){return t.coordinates.map(e=>({type:t.type.replace("Multi",""),coordinates:e}))}d(Ge,"explode");var H=63710088e-1,bt={centimeters:H*100,centimetres:H*100,degrees:360/(2*Math.PI),feet:H*3.28084,inches:H*39.37,kilometers:H/1e3,kilometres:H/1e3,meters:H,metres:H,miles:H/1609.344,millimeters:H*1e3,millimetres:H*1e3,nauticalmiles:H/1852,radians:1,yards:H*1.0936},_t={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function Y(t,e,r={}){const i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}d(Y,"feature");function cr(t,e,r={}){switch(t){case"Point":return te(e).geometry;case"LineString":return re(e).geometry;case"Polygon":return xe(e).geometry;case"MultiPoint":return Pt(e).geometry;case"MultiLineString":return wt(e).geometry;case"MultiPolygon":return St(e).geometry;default:throw new Error(t+" is invalid")}}d(cr,"geometry");function te(t,e,r={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!de(t[0])||!de(t[1]))throw new Error("coordinates must contain numbers");return Y({type:"Point",coordinates:t},e,r)}d(te,"point");function pr(t,e,r={}){return ye(t.map(i=>te(i,e)),r)}d(pr,"points");function xe(t,e,r={}){for(const n of t){if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(n[n.length-1].length!==n[0].length)throw new Error("First and last Position are not equivalent.");for(let a=0;a<n[n.length-1].length;a++)if(n[n.length-1][a]!==n[0][a])throw new Error("First and last Position are not equivalent.")}return Y({type:"Polygon",coordinates:t},e,r)}d(xe,"polygon");function gr(t,e,r={}){return ye(t.map(i=>xe(i,e)),r)}d(gr,"polygons");function re(t,e,r={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Y({type:"LineString",coordinates:t},e,r)}d(re,"lineString");function hr(t,e,r={}){return ye(t.map(i=>re(i,e)),r)}d(hr,"lineStrings");function ye(t,e={}){const r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}d(ye,"featureCollection");function wt(t,e,r={}){return Y({type:"MultiLineString",coordinates:t},e,r)}d(wt,"multiLineString");function Pt(t,e,r={}){return Y({type:"MultiPoint",coordinates:t},e,r)}d(Pt,"multiPoint");function St(t,e,r={}){return Y({type:"MultiPolygon",coordinates:t},e,r)}d(St,"multiPolygon");function dr(t,e,r={}){return Y({type:"GeometryCollection",geometries:t},e,r)}d(dr,"geometryCollection");function vr(t,e=0){if(e&&!(e>=0))throw new Error("precision must be a positive number");const r=Math.pow(10,e||0);return Math.round(t*r)/r}d(vr,"round");function Mt(t,e="kilometers"){const r=bt[e];if(!r)throw new Error(e+" units is invalid");return t*r}d(Mt,"radiansToLength");function Ne(t,e="kilometers"){const r=bt[e];if(!r)throw new Error(e+" units is invalid");return t/r}d(Ne,"lengthToRadians");function yr(t,e){return Et(Ne(t,e))}d(yr,"lengthToDegrees");function _r(t){let e=t%360;return e<0&&(e+=360),e}d(_r,"bearingToAzimuth");function Et(t){return t%(2*Math.PI)*180/Math.PI}d(Et,"radiansToDegrees");function $r(t){return t%360*Math.PI/180}d($r,"degreesToRadians");function br(t,e="kilometers",r="kilometers"){if(!(t>=0))throw new Error("length must be a positive number");return Mt(Ne(t,e),r)}d(br,"convertLength");function wr(t,e="meters",r="kilometers"){if(!(t>=0))throw new Error("area must be a positive number");const i=_t[e];if(!i)throw new Error("invalid original units");const n=_t[r];if(!n)throw new Error("invalid final units");return t/i*n}d(wr,"convertArea");function de(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}d(de,"isNumber");function ze(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}d(ze,"isObject");function Pr(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(e=>{if(!de(e))throw new Error("bbox must only contain numbers")})}d(Pr,"validateBBox");function Sr(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}d(Sr,"validateId");var Mr=Object.defineProperty,C=(t,e)=>Mr(t,"name",{value:e,configurable:!0});function fe(t,e,r){if(t!==null)for(var i,n,a,u,l,o,c,v=0,p=0,M,$=t.type,y=$==="FeatureCollection",E=$==="Feature",L=y?t.features.length:1,b=0;b<L;b++){c=y?t.features[b].geometry:E?t.geometry:t,M=c?c.type==="GeometryCollection":!1,l=M?c.geometries.length:1;for(var K=0;K<l;K++){var _=0,w=0;if(u=M?c.geometries[K]:c,u!==null){o=u.coordinates;var m=u.type;switch(v=r&&(m==="Polygon"||m==="MultiPolygon")?1:0,m){case null:break;case"Point":if(e(o,p,b,_,w)===!1)return!1;p++,_++;break;case"LineString":case"MultiPoint":for(i=0;i<o.length;i++){if(e(o[i],p,b,_,w)===!1)return!1;p++,m==="MultiPoint"&&_++}m==="LineString"&&_++;break;case"Polygon":case"MultiLineString":for(i=0;i<o.length;i++){for(n=0;n<o[i].length-v;n++){if(e(o[i][n],p,b,_,w)===!1)return!1;p++}m==="MultiLineString"&&_++,m==="Polygon"&&w++}m==="Polygon"&&_++;break;case"MultiPolygon":for(i=0;i<o.length;i++){for(w=0,n=0;n<o[i].length;n++){for(a=0;a<o[i][n].length-v;a++){if(e(o[i][n][a],p,b,_,w)===!1)return!1;p++}w++}_++}break;case"GeometryCollection":for(i=0;i<u.geometries.length;i++)if(fe(u.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}C(fe,"coordEach");function Er(t,e,r,i){var n=r;return fe(t,function(a,u,l,o,c){u===0&&r===void 0?n=a:n=e(n,a,u,l,o,c)},i),n}C(Er,"coordReduce");function Ct(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}C(Ct,"propEach");function Cr(t,e,r){var i=r;return Ct(t,function(n,a){a===0&&r===void 0?i=n:i=e(i,n,a)}),i}C(Cr,"propReduce");function Lt(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}C(Lt,"featureEach");function Lr(t,e,r){var i=r;return Lt(t,function(n,a){a===0&&r===void 0?i=n:i=e(i,n,a)}),i}C(Lr,"featureReduce");function kr(t){var e=[];return fe(t,function(r){e.push(r)}),e}C(kr,"coordAll");function He(t,e){var r,i,n,a,u,l,o,c,v,p,M=0,$=t.type==="FeatureCollection",y=t.type==="Feature",E=$?t.features.length:1;for(r=0;r<E;r++){for(l=$?t.features[r].geometry:y?t.geometry:t,c=$?t.features[r].properties:y?t.properties:{},v=$?t.features[r].bbox:y?t.bbox:void 0,p=$?t.features[r].id:y?t.id:void 0,o=l?l.type==="GeometryCollection":!1,u=o?l.geometries.length:1,n=0;n<u;n++){if(a=o?l.geometries[n]:l,a===null){if(e(null,M,c,v,p)===!1)return!1;continue}switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(a,M,c,v,p)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<a.geometries.length;i++)if(e(a.geometries[i],M,c,v,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}M++}}C(He,"geomEach");function kt(t,e,r){var i=r;return He(t,function(n,a,u,l,o){a===0&&r===void 0?i=n:i=e(i,n,a,u,l,o)}),i}C(kt,"geomReduce");function _e(t,e){He(t,function(r,i,n,a,u){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Y(r,n,{bbox:a,id:u}),i,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var c=0;c<r.coordinates.length;c++){var v=r.coordinates[c],p={type:o,coordinates:v};if(e(Y(p,n),i,c)===!1)return!1}})}C(_e,"flattenEach");function Ar(t,e,r){var i=r;return _e(t,function(n,a,u){a===0&&u===0&&r===void 0?i=n:i=e(i,n,a,u)}),i}C(Ar,"flattenReduce");function At(t,e){_e(t,function(r,i,n){var a=0;if(r.geometry){var u=r.geometry.type;if(!(u==="Point"||u==="MultiPoint")){var l,o=0,c=0,v=0;if(fe(r,function(p,M,$,y,E){if(l===void 0||i>o||y>c||E>v){l=p,o=i,c=y,v=E,a=0;return}var L=re([l,p],r.properties);if(e(L,i,n,E,a)===!1)return!1;a++,l=p})===!1)return!1}}})}C(At,"segmentEach");function Rr(t,e,r){var i=r,n=!1;return At(t,function(a,u,l,o,c){n===!1&&r===void 0?i=a:i=e(i,a,u,l,o,c),n=!0}),i}C(Rr,"segmentReduce");function Rt(t,e){if(!t)throw new Error("geojson is required");_e(t,function(r,i,n){if(r.geometry!==null){var a=r.geometry.type,u=r.geometry.coordinates;switch(a){case"LineString":if(e(r,i,n,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<u.length;l++)if(e(re(u[l],r.properties),i,n,l)===!1)return!1;break}}})}C(Rt,"lineEach");function qr(t,e,r){var i=r;return Rt(t,function(n,a,u,l){a===0&&r===void 0?i=n:i=e(i,n,a,u,l)}),i}C(qr,"lineReduce");function Fr(t,e){if(e=e||{},!ze(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,a=e.segmentIndex||0,u=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),u=u||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":u=u||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return a<0&&(a=o.length+a-1),re([o[a],o[a+1]],u,e);case"Polygon":return n<0&&(n=o.length+n),a<0&&(a=o[n].length+a-1),re([o[n][a],o[n][a+1]],u,e);case"MultiLineString":return i<0&&(i=o.length+i),a<0&&(a=o[i].length+a-1),re([o[i][a],o[i][a+1]],u,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),a<0&&(a=o[i][n].length-a-1),re([o[i][n][a],o[i][n][a+1]],u,e)}throw new Error("geojson is invalid")}C(Fr,"findSegment");function Or(t,e){if(e=e||{},!ze(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,a=e.coordIndex||0,u=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),u=u||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":u=u||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return te(o,u,e);case"MultiPoint":return i<0&&(i=o.length+i),te(o[i],u,e);case"LineString":return a<0&&(a=o.length+a),te(o[a],u,e);case"Polygon":return n<0&&(n=o.length+n),a<0&&(a=o[n].length+a),te(o[n][a],u,e);case"MultiLineString":return i<0&&(i=o.length+i),a<0&&(a=o[i].length+a),te(o[i][a],u,e);case"MultiPolygon":return i<0&&(i=o.length+i),n<0&&(n=o[i].length+n),a<0&&(a=o[i][n].length-a),te(o[i][n][a],u,e)}throw new Error("geojson is invalid")}C(Or,"findPoint");var Tr=Object.defineProperty,$e=(t,e)=>Tr(t,"name",{value:e,configurable:!0});function qt(t){return kt(t,(e,r)=>e+Ft(r),0)}$e(qt,"area");function Ft(t){let e=0,r;switch(t.type){case"Polygon":return De(t.coordinates);case"MultiPolygon":for(r=0;r<t.coordinates.length;r++)e+=De(t.coordinates[r]);return e;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}$e(Ft,"calculateArea");function De(t){let e=0;if(t&&t.length>0){e+=Math.abs(Be(t[0]));for(let r=1;r<t.length;r++)e-=Math.abs(Be(t[r]))}return e}$e(De,"polygonArea");var Gr=H*H/2,Te=Math.PI/180;function Be(t){const e=t.length;if(e<=2)return 0;let r=0,i=0;for(;i<e;){const n=t[i],a=t[i+1===e?0:i+1],u=t[i+2>=e?(i+2)%e:i+2],l=n[0]*Te,o=a[1]*Te,c=u[0]*Te;r+=(c-l)*Math.sin(o),i++}return r*Gr}$e(Be,"ringArea");var Dr=qt;function $t(t){let e,r,i,n=(t[1]*1e-6).toFixed(2)+"",a,u;return{c(){e=V("p"),r=oe("Polygons in the Network Map cover a total of "),i=V("b"),a=oe(n),u=oe(`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`)},l(l){e=X(l,"P",{});var o=me(e);r=se(o,"Polygons in the Network Map cover a total of "),i=X(o,"B",{});var c=me(i);a=se(c,n),c.forEach(ne),u=se(o,`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`),o.forEach(ne)},m(l,o){ve(l,e,o),g(e,r),g(e,i),g(i,a),g(e,u)},p(l,o){o&2&&n!==(n=(l[1]*1e-6).toFixed(2)+"")&&Zt(a,n)},d(l){l&&ne(e)}}}function Br(t){let e;return{c(){e=oe("Scheme Sketcher")},l(r){e=se(r,"Scheme Sketcher")},m(r,i){ve(r,e,i)},d(r){r&&ne(e)}}}function xr(t){let e,r,i,n,a,u,l,o="Choose the area best covering this scheme",c,v,p=`Use the <i>New polygon</i>
        tools (freehand or snapped) to sketch the area.`,M,$,y="Optionally, include more point and route details.",E,L,b=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,K,_,w=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,m,I,D="Load the saved file above",ie;return n=new lr({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Br]},$$scope:{ctx:t}}}),{c(){e=V("ol"),r=V("li"),i=oe("Go to the "),R(n.$$.fragment),a=oe(" tool"),u=P(),l=V("li"),l.textContent=o,c=P(),v=V("li"),v.innerHTML=p,M=P(),$=V("li"),$.textContent=y,E=P(),L=V("li"),L.innerHTML=b,K=P(),_=V("li"),_.innerHTML=w,m=P(),I=V("li"),I.textContent=D},l(B){e=X(B,"OL",{});var h=me(e);r=X(h,"LI",{});var U=me(r);i=se(U,"Go to the "),q(n.$$.fragment,U),a=se(U," tool"),U.forEach(ne),u=S(h),l=X(h,"LI",{"data-svelte-h":!0}),ae(l)!=="svelte-aj705b"&&(l.textContent=o),c=S(h),v=X(h,"LI",{"data-svelte-h":!0}),ae(v)!=="svelte-185cfyh"&&(v.innerHTML=p),M=S(h),$=X(h,"LI",{"data-svelte-h":!0}),ae($)!=="svelte-14ytbn2"&&($.textContent=y),E=S(h),L=X(h,"LI",{"data-svelte-h":!0}),ae(L)!=="svelte-1r1ljcj"&&(L.innerHTML=b),K=S(h),_=X(h,"LI",{"data-svelte-h":!0}),ae(_)!=="svelte-sz4wlr"&&(_.innerHTML=w),m=S(h),I=X(h,"LI",{"data-svelte-h":!0}),ae(I)!=="svelte-x3zkxb"&&(I.textContent=D),h.forEach(ne)},m(B,h){ve(B,e,h),g(e,r),g(r,i),F(n,r,null),g(r,a),g(e,u),g(e,l),g(e,c),g(e,v),g(e,M),g(e,$),g(e,E),g(e,L),g(e,K),g(e,_),g(e,m),g(e,I),ie=!0},p(B,h){const U={};h&262144&&(U.$$scope={dirty:h,ctx:B}),n.$set(U)},i(B){ie||(O(n.$$.fragment,B),ie=!0)},o(B){T(n.$$.fragment,B),ie=!1},d(B){B&&ne(e),G(n)}}}function Nr(t){let e,r,i,n,a,u,l,o,c,v,p,M,$,y,E,L,b,K,_,w,m,I,D,ie,B,h,U,be,W,we,Pe,J,Se,Me,Q,Ee,Ce,ce,Z,Le,ke,j,Ae,Re,ee,qe,pe;function Ot(s){t[2](s)}let Ie={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(Ie.value=t[0].summary.dateDesignReview),r=new he({props:Ie}),x.push(()=>z(r,"value",Ot));function Tt(s){t[3](s)}let Ke={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(Ke.value=t[0].summary.schemeReference),a=new he({props:Ke}),x.push(()=>z(a,"value",Tt));function Gt(s){t[4](s)}let Ue={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(Ue.value=t[0].summary.schemeName),o=new he({props:Ue}),x.push(()=>z(o,"value",Gt));function Dt(s){t[5](s)}let Ve={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(Ve.value=t[0].summary.schemeSummary),p=new ge({props:Ve}),x.push(()=>z(p,"value",Dt));function Bt(s){t[6](s)}let Xe={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Xe.value=t[0].summary.schemeInfoReviewed),y=new ge({props:Xe}),x.push(()=>z(y,"value",Bt));function xt(s){t[7](s)}let Ye={label:"Authority",emptyOption:!0,choices:ue(nr)};t[0].summary.authority!==void 0&&(Ye.value=t[0].summary.authority),b=new yt({props:Ye}),x.push(()=>z(b,"value",xt));function Nt(s){t[8](s)}let We={label:"Transport / Combined Authority",emptyOption:!0,choices:ue(ir)};t[0].summary.transportOrCombinedAuthority!==void 0&&(We.value=t[0].summary.transportOrCombinedAuthority),w=new yt({props:We}),x.push(()=>z(w,"value",Nt));function zt(s){t[9](s)}let Je={label:"Region",emptyOption:!0,choices:ue(ar)};t[0].summary.region!==void 0&&(Je.value=t[0].summary.region),D=new Oe({props:Je}),x.push(()=>z(D,"value",zt));function Ht(s){t[10](s)}let Qe={label:"Funding programme",emptyOption:!0,choices:ue(or)};t[0].summary.fundingProgramme!==void 0&&(Qe.value=t[0].summary.fundingProgramme),h=new Oe({props:Qe}),x.push(()=>z(h,"value",Ht));function It(s){t[11](s)}let Ze={label:"Design stage",emptyOption:!0,choices:ue(sr)};t[0].summary.designStage!==void 0&&(Ze.value=t[0].summary.designStage),W=new Oe({props:Ze}),x.push(()=>z(W,"value",It));function Kt(s){t[12](s)}let je={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(je.value=t[0].summary.fundingConditions),J=new ge({props:je}),x.push(()=>z(J,"value",Kt));function Ut(s){t[13](s)}let et={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(et.value=t[0].summary.inspectorEmail),Q=new he({props:et}),x.push(()=>z(Q,"value",Ut));let k=t[1]&&$t(t);function Vt(s){t[14](s)}let tt={label:"Scheme area size (km²)",width:6,min:0};t[0].summary.schemeAreaSizeKm2!==void 0&&(tt.value=t[0].summary.schemeAreaSizeKm2),Z=new tr({props:tt}),x.push(()=>z(Z,"value",Vt));function Xt(s){t[15](s)}let rt={label:"Notes"};t[0].summary.notes!==void 0&&(rt.value=t[0].summary.notes),j=new ge({props:rt}),x.push(()=>z(j,"value",Xt));function Yt(s){t[16](s)}let nt={$$slots:{default:[xr]},$$scope:{ctx:t}};return t[0].summary.networkMap!==void 0&&(nt.gj=t[0].summary.networkMap),ee=new rr({props:nt}),x.push(()=>z(ee,"gj",Yt)),{c(){e=V("div"),R(r.$$.fragment),n=P(),R(a.$$.fragment),l=P(),R(o.$$.fragment),v=P(),R(p.$$.fragment),$=P(),R(y.$$.fragment),L=P(),R(b.$$.fragment),_=P(),R(w.$$.fragment),I=P(),R(D.$$.fragment),B=P(),R(h.$$.fragment),be=P(),R(W.$$.fragment),Pe=P(),R(J.$$.fragment),Me=P(),R(Q.$$.fragment),Ce=P(),k&&k.c(),ce=P(),R(Z.$$.fragment),ke=P(),R(j.$$.fragment),Re=P(),R(ee.$$.fragment),this.h()},l(s){e=X(s,"DIV",{class:!0});var f=me(e);q(r.$$.fragment,f),n=S(f),q(a.$$.fragment,f),l=S(f),q(o.$$.fragment,f),v=S(f),q(p.$$.fragment,f),$=S(f),q(y.$$.fragment,f),L=S(f),q(b.$$.fragment,f),_=S(f),q(w.$$.fragment,f),I=S(f),q(D.$$.fragment,f),B=S(f),q(h.$$.fragment,f),be=S(f),q(W.$$.fragment,f),Pe=S(f),q(J.$$.fragment,f),Me=S(f),q(Q.$$.fragment,f),Ce=S(f),k&&k.l(f),ce=S(f),q(Z.$$.fragment,f),ke=S(f),q(j.$$.fragment,f),Re=S(f),q(ee.$$.fragment,f),f.forEach(ne),this.h()},h(){Jt(e,"class","govuk-width-container")},m(s,f){ve(s,e,f),F(r,e,null),g(e,n),F(a,e,null),g(e,l),F(o,e,null),g(e,v),F(p,e,null),g(e,$),F(y,e,null),g(e,L),F(b,e,null),g(e,_),F(w,e,null),g(e,I),F(D,e,null),g(e,B),F(h,e,null),g(e,be),F(W,e,null),g(e,Pe),F(J,e,null),g(e,Me),F(Q,e,null),g(e,Ce),k&&k.m(e,null),g(e,ce),F(Z,e,null),g(e,ke),F(j,e,null),g(e,Re),F(ee,e,null),pe=!0},p(s,[f]){const it={};!i&&f&1&&(i=!0,it.value=s[0].summary.dateDesignReview,N(()=>i=!1)),r.$set(it);const at={};!u&&f&1&&(u=!0,at.value=s[0].summary.schemeReference,N(()=>u=!1)),a.$set(at);const ot={};!c&&f&1&&(c=!0,ot.value=s[0].summary.schemeName,N(()=>c=!1)),o.$set(ot);const st={};!M&&f&1&&(M=!0,st.value=s[0].summary.schemeSummary,N(()=>M=!1)),p.$set(st);const ut={};!E&&f&1&&(E=!0,ut.value=s[0].summary.schemeInfoReviewed,N(()=>E=!1)),y.$set(ut);const lt={};!K&&f&1&&(K=!0,lt.value=s[0].summary.authority,N(()=>K=!1)),b.$set(lt);const mt={};!m&&f&1&&(m=!0,mt.value=s[0].summary.transportOrCombinedAuthority,N(()=>m=!1)),w.$set(mt);const ft={};!ie&&f&1&&(ie=!0,ft.value=s[0].summary.region,N(()=>ie=!1)),D.$set(ft);const ct={};!U&&f&1&&(U=!0,ct.value=s[0].summary.fundingProgramme,N(()=>U=!1)),h.$set(ct);const pt={};!we&&f&1&&(we=!0,pt.value=s[0].summary.designStage,N(()=>we=!1)),W.$set(pt);const gt={};!Se&&f&1&&(Se=!0,gt.value=s[0].summary.fundingConditions,N(()=>Se=!1)),J.$set(gt);const ht={};!Ee&&f&1&&(Ee=!0,ht.value=s[0].summary.inspectorEmail,N(()=>Ee=!1)),Q.$set(ht),s[1]?k?k.p(s,f):(k=$t(s),k.c(),k.m(e,ce)):k&&(k.d(1),k=null);const dt={};!Le&&f&1&&(Le=!0,dt.value=s[0].summary.schemeAreaSizeKm2,N(()=>Le=!1)),Z.$set(dt);const vt={};!Ae&&f&1&&(Ae=!0,vt.value=s[0].summary.notes,N(()=>Ae=!1)),j.$set(vt);const Fe={};f&262144&&(Fe.$$scope={dirty:f,ctx:s}),!qe&&f&1&&(qe=!0,Fe.gj=s[0].summary.networkMap,N(()=>qe=!1)),ee.$set(Fe)},i(s){pe||(O(r.$$.fragment,s),O(a.$$.fragment,s),O(o.$$.fragment,s),O(p.$$.fragment,s),O(y.$$.fragment,s),O(b.$$.fragment,s),O(w.$$.fragment,s),O(D.$$.fragment,s),O(h.$$.fragment,s),O(W.$$.fragment,s),O(J.$$.fragment,s),O(Q.$$.fragment,s),O(Z.$$.fragment,s),O(j.$$.fragment,s),O(ee.$$.fragment,s),pe=!0)},o(s){T(r.$$.fragment,s),T(a.$$.fragment,s),T(o.$$.fragment,s),T(p.$$.fragment,s),T(y.$$.fragment,s),T(b.$$.fragment,s),T(w.$$.fragment,s),T(D.$$.fragment,s),T(h.$$.fragment,s),T(W.$$.fragment,s),T(J.$$.fragment,s),T(Q.$$.fragment,s),T(Z.$$.fragment,s),T(j.$$.fragment,s),T(ee.$$.fragment,s),pe=!1},d(s){s&&ne(e),G(r),G(a),G(o),G(p),G(y),G(b),G(w),G(D),G(h),G(W),G(J),G(Q),k&&k.d(),G(Z),G(j),G(ee)}}}function zr(t,e,r){let i,n;Qt(t,A,m=>r(0,n=m));function a(m){let I=0;for(let D of m.features)D.geometry.type=="Polygon"&&(I+=Dr(D));return I>0?I:null}function u(m){t.$$.not_equal(n.summary.dateDesignReview,m)&&(n.summary.dateDesignReview=m,A.set(n))}function l(m){t.$$.not_equal(n.summary.schemeReference,m)&&(n.summary.schemeReference=m,A.set(n))}function o(m){t.$$.not_equal(n.summary.schemeName,m)&&(n.summary.schemeName=m,A.set(n))}function c(m){t.$$.not_equal(n.summary.schemeSummary,m)&&(n.summary.schemeSummary=m,A.set(n))}function v(m){t.$$.not_equal(n.summary.schemeInfoReviewed,m)&&(n.summary.schemeInfoReviewed=m,A.set(n))}function p(m){t.$$.not_equal(n.summary.authority,m)&&(n.summary.authority=m,A.set(n))}function M(m){t.$$.not_equal(n.summary.transportOrCombinedAuthority,m)&&(n.summary.transportOrCombinedAuthority=m,A.set(n))}function $(m){t.$$.not_equal(n.summary.region,m)&&(n.summary.region=m,A.set(n))}function y(m){t.$$.not_equal(n.summary.fundingProgramme,m)&&(n.summary.fundingProgramme=m,A.set(n))}function E(m){t.$$.not_equal(n.summary.designStage,m)&&(n.summary.designStage=m,A.set(n))}function L(m){t.$$.not_equal(n.summary.fundingConditions,m)&&(n.summary.fundingConditions=m,A.set(n))}function b(m){t.$$.not_equal(n.summary.inspectorEmail,m)&&(n.summary.inspectorEmail=m,A.set(n))}function K(m){t.$$.not_equal(n.summary.schemeAreaSizeKm2,m)&&(n.summary.schemeAreaSizeKm2=m,A.set(n))}function _(m){t.$$.not_equal(n.summary.notes,m)&&(n.summary.notes=m,A.set(n))}function w(m){t.$$.not_equal(n.summary.networkMap,m)&&(n.summary.networkMap=m,A.set(n))}return t.$$.update=()=>{t.$$.dirty&1&&r(1,i=a(n.summary.networkMap))},[n,i,u,l,o,c,v,p,M,$,y,E,L,b,K,_,w]}class en extends jt{constructor(e){super(),er(this,e,zr,Nr,Wt,{})}}export{en as component};
