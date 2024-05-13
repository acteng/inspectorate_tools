import{s as Ct,p as X,e as B,a as y,t as ge,c as N,x as se,g as $,b as pe,d as he,f as I,q as ce,i as fe,h as p,r as Z,k as Mt,U as Zt,w as _t,A as Qt,j as jt}from"../chunks/scheduler.MSc1Qx99.js";import{S as St,i as Et,e as Q,c as E,a as k,m as L,t as P,g as er,b as M,f as tr,d as A}from"../chunks/index.BmLTtO3Q.js";import{p as Le}from"../chunks/index.DxRI_705.js";import{S as Ae}from"../chunks/Select.CWmhn8Ww.js";import{T as Te}from"../chunks/TextArea.ACtZc-6y.js";import{T as De}from"../chunks/TextInput.BuUbkcwy.js";import{s as G}from"../chunks/data.D7aUzzGA.js";import{a as rr,t as nr,r as ar,f as ir,d as or}from"../chunks/lists.Ci0sBo6t.js";import"../chunks/paths.D_hS_JDz.js";import{E as sr}from"../chunks/ErrorMessage.QWb1lYlU.js";import{F as lr}from"../chunks/FileInput.D4f6cZCf.js";import{W as ur,S as fr}from"../chunks/WarningButton.B0B59q-T.js";import{E as mr}from"../chunks/ExternalLink.SLoj72IF.js";/* empty css                                                    */import{M as cr,a as pr,C as gr,e as hr}from"../chunks/index.CB3aLUeB.js";import{D as dr}from"../chunks/DecimalInput.DNYz4VgO.js";function bt(t){let e,r,n,a;return e=new ur({props:{$$slots:{default:[vr]},$$scope:{ctx:t}}}),e.$on("click",t[3]),n=new fr({props:{$$slots:{default:[yr]},$$scope:{ctx:t}}}),n.$on("click",t[6]),{c(){E(e.$$.fragment),r=y(),E(n.$$.fragment)},l(i){k(e.$$.fragment,i),r=$(i),k(n.$$.fragment,i)},m(i,s){L(e,i,s),fe(i,r,s),L(n,i,s),a=!0},p(i,s){const f={};s&256&&(f.$$scope={dirty:s,ctx:i}),e.$set(f);const o={};s&256&&(o.$$scope={dirty:s,ctx:i}),n.$set(o)},i(i){a||(P(e.$$.fragment,i),P(n.$$.fragment,i),a=!0)},o(i){M(e.$$.fragment,i),M(n.$$.fragment,i),a=!1},d(i){i&&I(r),A(e,i),A(n,i)}}}function vr(t){let e;return{c(){e=ge("Clear map")},l(r){e=he(r,"Clear map")},m(r,n){fe(r,e,n)},d(r){r&&I(e)}}}function yr(t){let e;return{c(){e=ge("Zoom to fit")},l(r){e=he(r,"Zoom to fit")},m(r,n){fe(r,e,n)},d(r){r&&I(e)}}}function $r(t){let e;return{c(){e=ge("Scheme Sketcher")},l(r){e=he(r,"Scheme Sketcher")},m(r,n){fe(r,e,n)},d(r){r&&I(e)}}}function _r(t){let e,r;return e=new gr({props:{gj:t[2].summary.networkMap,show:!0}}),{c(){E(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){L(e,n,a),r=!0},p(n,a){const i={};a&4&&(i.gj=n[2].summary.networkMap),e.$set(i)},i(n){r||(P(e.$$.fragment,n),r=!0)},o(n){M(e.$$.fragment,n),r=!1},d(n){A(e,n)}}}function br(t){let e,r="Network Context",n,a,i,s,f=`Please add a map showing the area being assessed, including the location
      of measures proposed by the scheme.`,o,g,w,c,C,S,d,H="You can use the external Scheme Sketcher tool to draw this map:",ee,h,x,R,u,F,ie,K,Pe="Choose the area best covering this scheme",de,V,Ce=`Use the <i>New polygon</i>
        tools (freehand or snapped) to sketch the area.`,ve,U,Me="Optionally, include more point and route details.",ye,J,Se=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,$e,W,Ee=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,_e,re,te="Load the saved file above",be,ne,q,we,me;g=new lr({props:{label:"Import from GeoJSON file",onLoad:t[4]}}),c=new sr({props:{errorMessage:t[1]}});let b=t[2].summary.networkMap.features.length>0&&bt(t);u=new mr({props:{href:"https://acteng.github.io/atip",$$slots:{default:[$r]},$$scope:{ctx:t}}});function ke(v){t[7](v)}let qe={$$slots:{default:[_r]},$$scope:{ctx:t}};return t[0]!==void 0&&(qe.map=t[0]),q=new cr({props:qe}),X.push(()=>Q(q,"map",ke)),{c(){e=B("h2"),e.textContent=r,n=y(),a=B("div"),i=B("div"),s=B("p"),s.textContent=f,o=y(),E(g.$$.fragment),w=y(),E(c.$$.fragment),C=y(),b&&b.c(),S=y(),d=B("p"),d.textContent=H,ee=y(),h=B("ol"),x=B("li"),R=ge("Go to the "),E(u.$$.fragment),F=ge(" tool"),ie=y(),K=B("li"),K.textContent=Pe,de=y(),V=B("li"),V.innerHTML=Ce,ve=y(),U=B("li"),U.textContent=Me,ye=y(),J=B("li"),J.innerHTML=Se,$e=y(),W=B("li"),W.innerHTML=Ee,_e=y(),re=B("li"),re.textContent=te,be=y(),ne=B("div"),E(q.$$.fragment),this.h()},l(v){e=N(v,"H2",{"data-svelte-h":!0}),se(e)!=="svelte-1ru16kh"&&(e.textContent=r),n=$(v),a=N(v,"DIV",{style:!0});var O=pe(a);i=N(O,"DIV",{style:!0});var D=pe(i);s=N(D,"P",{"data-svelte-h":!0}),se(s)!=="svelte-1bo1bph"&&(s.textContent=f),o=$(D),k(g.$$.fragment,D),w=$(D),k(c.$$.fragment,D),C=$(D),b&&b.l(D),S=$(D),d=N(D,"P",{"data-svelte-h":!0}),se(d)!=="svelte-1els6f1"&&(d.textContent=H),ee=$(D),h=N(D,"OL",{});var T=pe(h);x=N(T,"LI",{});var ae=pe(x);R=he(ae,"Go to the "),k(u.$$.fragment,ae),F=he(ae," tool"),ae.forEach(I),ie=$(T),K=N(T,"LI",{"data-svelte-h":!0}),se(K)!=="svelte-aj705b"&&(K.textContent=Pe),de=$(T),V=N(T,"LI",{"data-svelte-h":!0}),se(V)!=="svelte-185cfyh"&&(V.innerHTML=Ce),ve=$(T),U=N(T,"LI",{"data-svelte-h":!0}),se(U)!=="svelte-14ytbn2"&&(U.textContent=Me),ye=$(T),J=N(T,"LI",{"data-svelte-h":!0}),se(J)!=="svelte-1r1ljcj"&&(J.innerHTML=Se),$e=$(T),W=N(T,"LI",{"data-svelte-h":!0}),se(W)!=="svelte-sz4wlr"&&(W.innerHTML=Ee),_e=$(T),re=N(T,"LI",{"data-svelte-h":!0}),se(re)!=="svelte-x3zkxb"&&(re.textContent=te),T.forEach(I),D.forEach(I),be=$(O),ne=N(O,"DIV",{style:!0});var Oe=pe(ne);k(q.$$.fragment,Oe),Oe.forEach(I),O.forEach(I),this.h()},h(){ce(i,"width","30%"),ce(i,"overflow-y","scroll"),ce(i,"padding","10px"),ce(i,"border","1px solid black"),ce(ne,"position","relative"),ce(ne,"width","70%"),ce(a,"display","flex"),ce(a,"height","80vh")},m(v,O){fe(v,e,O),fe(v,n,O),fe(v,a,O),p(a,i),p(i,s),p(i,o),L(g,i,null),p(i,w),L(c,i,null),p(i,C),b&&b.m(i,null),p(i,S),p(i,d),p(i,ee),p(i,h),p(h,x),p(x,R),L(u,x,null),p(x,F),p(h,ie),p(h,K),p(h,de),p(h,V),p(h,ve),p(h,U),p(h,ye),p(h,J),p(h,$e),p(h,W),p(h,_e),p(h,re),p(a,be),p(a,ne),L(q,ne,null),me=!0},p(v,[O]){const D={};O&2&&(D.errorMessage=v[1]),c.$set(D),v[2].summary.networkMap.features.length>0?b?(b.p(v,O),O&4&&P(b,1)):(b=bt(v),b.c(),P(b,1),b.m(i,S)):b&&(er(),M(b,1,1,()=>{b=null}),tr());const T={};O&256&&(T.$$scope={dirty:O,ctx:v}),u.$set(T);const ae={};O&260&&(ae.$$scope={dirty:O,ctx:v}),!we&&O&1&&(we=!0,ae.map=v[0],Z(()=>we=!1)),q.$set(ae)},i(v){me||(P(g.$$.fragment,v),P(c.$$.fragment,v),P(b),P(u.$$.fragment,v),P(q.$$.fragment,v),me=!0)},o(v){M(g.$$.fragment,v),M(c.$$.fragment,v),M(b),M(u.$$.fragment,v),M(q.$$.fragment,v),me=!1},d(v){v&&(I(e),I(n),I(a)),A(g),A(c),b&&b.d(),A(u),A(q)}}}function wr(t,e,r){let n;Mt(t,G,c=>r(2,n=c));let a,i="";Zt(()=>{o(!1)});function s(){window.confirm("Do you really want to erase the map data?")&&_t(G,n.summary.networkMap={type:"FeatureCollection",features:[]},n)}function f(c,C){var S;r(1,i="");try{let d=JSON.parse(C);if(d.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((S=d.origin)!=null&&S.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(d.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");_t(G,n.summary.networkMap=d,n),o(!0)}catch(d){r(1,i=`Error importing ${c}: ${d}`)}}function o(c){let C={type:"FeatureCollection",features:n.summary.networkMap.features};C.features.length>0&&a.fitBounds(pr(C),{padding:20,animate:c})}const g=()=>o(!0);function w(c){a=c,r(0,a)}return[a,i,n,s,f,o,g,w]}class Pr extends St{constructor(e){super(),Et(this,e,wr,br,Ct,{})}}var Cr=Object.defineProperty,_=(t,e)=>Cr(t,"name",{value:e,configurable:!0}),Mr=class{constructor(e){this.direction=!1,this.compareProperties=!0;var r,n,a;this.precision=10**-((r=e==null?void 0:e.precision)!=null?r:17),this.direction=(n=e==null?void 0:e.direction)!=null?n:!1,this.compareProperties=(a=e==null?void 0:e.compareProperties)!=null?a:!0}compare(e,r){if(e.type!==r.type||!Re(e,r))return!1;switch(e.type){case"Point":return this.compareCoord(e.coordinates,r.coordinates);case"LineString":return this.compareLine(e.coordinates,r.coordinates);case"Polygon":return this.comparePolygon(e,r);case"GeometryCollection":return this.compareGeometryCollection(e,r);case"Feature":return this.compareFeature(e,r);case"FeatureCollection":return this.compareFeatureCollection(e,r);default:if(e.type.startsWith("Multi")){const n=ze(e),a=ze(r);return n.every(i=>a.some(s=>this.compare(i,s)))}}return!1}compareCoord(e,r){return e.length===r.length&&e.every((n,a)=>Math.abs(n-r[a])<this.precision)}compareLine(e,r,n=0,a=!1){if(!Re(e,r))return!1;const i=e;let s=r;if(a&&!this.compareCoord(i[0],s[0])){const o=this.fixStartIndex(s,i);if(o)s=o;else return!1}const f=this.compareCoord(i[n],s[n]);return this.direction||f?this.comparePath(i,s):this.compareCoord(i[n],s[s.length-(1+n)])?this.comparePath(i.slice().reverse(),s):!1}fixStartIndex(e,r){let n,a=-1;for(let i=0;i<e.length;i++)if(this.compareCoord(e[i],r[0])){a=i;break}return a>=0&&(n=[].concat(e.slice(a,e.length),e.slice(1,a+1))),n}comparePath(e,r){return e.every((n,a)=>this.compareCoord(n,r[a]))}comparePolygon(e,r){if(this.compareLine(e.coordinates[0],r.coordinates[0],1,!0)){const n=e.coordinates.slice(1,e.coordinates.length),a=r.coordinates.slice(1,r.coordinates.length);return n.every(i=>a.some(s=>this.compareLine(i,s,1,!0)))}return!1}compareGeometryCollection(e,r){return Re(e.geometries,r.geometries)&&this.compareBBox(e,r)&&e.geometries.every((n,a)=>this.compare(n,r.geometries[a]))}compareFeature(e,r){return e.id===r.id&&(this.compareProperties?hr(e.properties,r.properties):!0)&&this.compareBBox(e,r)&&this.compare(e.geometry,r.geometry)}compareFeatureCollection(e,r){return Re(e.features,r.features)&&this.compareBBox(e,r)&&e.features.every((n,a)=>this.compare(n,r.features[a]))}compareBBox(e,r){return!e.bbox&&!r.bbox||(e.bbox&&r.bbox?this.compareCoord(e.bbox,r.bbox):!1)}};_(Mr,"GeojsonEquality");function Re(t,e){return t.coordinates?t.coordinates.length===e.coordinates.length:t.length===e.length}_(Re,"sameLength");function ze(t){return t.coordinates.map(e=>({type:t.type.replace("Multi",""),coordinates:e}))}_(ze,"explode");var j=63710088e-1,kt={centimeters:j*100,centimetres:j*100,degrees:360/(2*Math.PI),feet:j*3.28084,inches:j*39.37,kilometers:j/1e3,kilometres:j/1e3,meters:j,metres:j,miles:j/1609.344,millimeters:j*1e3,millimetres:j*1e3,nauticalmiles:j/1852,radians:1,yards:j*1.0936},wt={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function oe(t,e,r={}){const n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=e||{},n.geometry=t,n}_(oe,"feature");function Sr(t,e,r={}){switch(t){case"Point":return le(e).geometry;case"LineString":return ue(e).geometry;case"Polygon":return Ve(e).geometry;case"MultiPoint":return At(e).geometry;case"MultiLineString":return Lt(e).geometry;case"MultiPolygon":return Rt(e).geometry;default:throw new Error(t+" is invalid")}}_(Sr,"geometry");function le(t,e,r={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ge(t[0])||!Ge(t[1]))throw new Error("coordinates must contain numbers");return oe({type:"Point",coordinates:t},e,r)}_(le,"point");function Er(t,e,r={}){return xe(t.map(n=>le(n,e)),r)}_(Er,"points");function Ve(t,e,r={}){for(const a of t){if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(a[a.length-1].length!==a[0].length)throw new Error("First and last Position are not equivalent.");for(let i=0;i<a[a.length-1].length;i++)if(a[a.length-1][i]!==a[0][i])throw new Error("First and last Position are not equivalent.")}return oe({type:"Polygon",coordinates:t},e,r)}_(Ve,"polygon");function kr(t,e,r={}){return xe(t.map(n=>Ve(n,e)),r)}_(kr,"polygons");function ue(t,e,r={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return oe({type:"LineString",coordinates:t},e,r)}_(ue,"lineString");function Lr(t,e,r={}){return xe(t.map(n=>ue(n,e)),r)}_(Lr,"lineStrings");function xe(t,e={}){const r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}_(xe,"featureCollection");function Lt(t,e,r={}){return oe({type:"MultiLineString",coordinates:t},e,r)}_(Lt,"multiLineString");function At(t,e,r={}){return oe({type:"MultiPoint",coordinates:t},e,r)}_(At,"multiPoint");function Rt(t,e,r={}){return oe({type:"MultiPolygon",coordinates:t},e,r)}_(Rt,"multiPolygon");function Ar(t,e,r={}){return oe({type:"GeometryCollection",geometries:t},e,r)}_(Ar,"geometryCollection");function Rr(t,e=0){if(e&&!(e>=0))throw new Error("precision must be a positive number");const r=Math.pow(10,e||0);return Math.round(t*r)/r}_(Rr,"round");function Ft(t,e="kilometers"){const r=kt[e];if(!r)throw new Error(e+" units is invalid");return t*r}_(Ft,"radiansToLength");function Ue(t,e="kilometers"){const r=kt[e];if(!r)throw new Error(e+" units is invalid");return t/r}_(Ue,"lengthToRadians");function Fr(t,e){return qt(Ue(t,e))}_(Fr,"lengthToDegrees");function qr(t){let e=t%360;return e<0&&(e+=360),e}_(qr,"bearingToAzimuth");function qt(t){return t%(2*Math.PI)*180/Math.PI}_(qt,"radiansToDegrees");function Or(t){return t%360*Math.PI/180}_(Or,"degreesToRadians");function Tr(t,e="kilometers",r="kilometers"){if(!(t>=0))throw new Error("length must be a positive number");return Ft(Ue(t,e),r)}_(Tr,"convertLength");function Dr(t,e="meters",r="kilometers"){if(!(t>=0))throw new Error("area must be a positive number");const n=wt[e];if(!n)throw new Error("invalid original units");const a=wt[r];if(!a)throw new Error("invalid final units");return t/n*a}_(Dr,"convertArea");function Ge(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}_(Ge,"isNumber");function Je(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}_(Je,"isObject");function Gr(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(e=>{if(!Ge(e))throw new Error("bbox must only contain numbers")})}_(Gr,"validateBBox");function xr(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}_(xr,"validateId");var Br=Object.defineProperty,z=(t,e)=>Br(t,"name",{value:e,configurable:!0});function Fe(t,e,r){if(t!==null)for(var n,a,i,s,f,o,g,w=0,c=0,C,S=t.type,d=S==="FeatureCollection",H=S==="Feature",ee=d?t.features.length:1,h=0;h<ee;h++){g=d?t.features[h].geometry:H?t.geometry:t,C=g?g.type==="GeometryCollection":!1,f=C?g.geometries.length:1;for(var x=0;x<f;x++){var R=0,u=0;if(s=C?g.geometries[x]:g,s!==null){o=s.coordinates;var F=s.type;switch(w=r&&(F==="Polygon"||F==="MultiPolygon")?1:0,F){case null:break;case"Point":if(e(o,c,h,R,u)===!1)return!1;c++,R++;break;case"LineString":case"MultiPoint":for(n=0;n<o.length;n++){if(e(o[n],c,h,R,u)===!1)return!1;c++,F==="MultiPoint"&&R++}F==="LineString"&&R++;break;case"Polygon":case"MultiLineString":for(n=0;n<o.length;n++){for(a=0;a<o[n].length-w;a++){if(e(o[n][a],c,h,R,u)===!1)return!1;c++}F==="MultiLineString"&&R++,F==="Polygon"&&u++}F==="Polygon"&&R++;break;case"MultiPolygon":for(n=0;n<o.length;n++){for(u=0,a=0;a<o[n].length;a++){for(i=0;i<o[n][a].length-w;i++){if(e(o[n][a][i],c,h,R,u)===!1)return!1;c++}u++}R++}break;case"GeometryCollection":for(n=0;n<s.geometries.length;n++)if(Fe(s.geometries[n],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}z(Fe,"coordEach");function Nr(t,e,r,n){var a=r;return Fe(t,function(i,s,f,o,g){s===0&&r===void 0?a=i:a=e(a,i,s,f,o,g)},n),a}z(Nr,"coordReduce");function Ot(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}z(Ot,"propEach");function Ir(t,e,r){var n=r;return Ot(t,function(a,i){i===0&&r===void 0?n=a:n=e(n,a,i)}),n}z(Ir,"propReduce");function Tt(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}z(Tt,"featureEach");function zr(t,e,r){var n=r;return Tt(t,function(a,i){i===0&&r===void 0?n=a:n=e(n,a,i)}),n}z(zr,"featureReduce");function Hr(t){var e=[];return Fe(t,function(r){e.push(r)}),e}z(Hr,"coordAll");function We(t,e){var r,n,a,i,s,f,o,g,w,c,C=0,S=t.type==="FeatureCollection",d=t.type==="Feature",H=S?t.features.length:1;for(r=0;r<H;r++){for(f=S?t.features[r].geometry:d?t.geometry:t,g=S?t.features[r].properties:d?t.properties:{},w=S?t.features[r].bbox:d?t.bbox:void 0,c=S?t.features[r].id:d?t.id:void 0,o=f?f.type==="GeometryCollection":!1,s=o?f.geometries.length:1,a=0;a<s;a++){if(i=o?f.geometries[a]:f,i===null){if(e(null,C,g,w,c)===!1)return!1;continue}switch(i.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(i,C,g,w,c)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<i.geometries.length;n++)if(e(i.geometries[n],C,g,w,c)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}C++}}z(We,"geomEach");function Dt(t,e,r){var n=r;return We(t,function(a,i,s,f,o){i===0&&r===void 0?n=a:n=e(n,a,i,s,f,o)}),n}z(Dt,"geomReduce");function Be(t,e){We(t,function(r,n,a,i,s){var f=r===null?null:r.type;switch(f){case null:case"Point":case"LineString":case"Polygon":return e(oe(r,a,{bbox:i,id:s}),n,0)===!1?!1:void 0}var o;switch(f){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var g=0;g<r.coordinates.length;g++){var w=r.coordinates[g],c={type:o,coordinates:w};if(e(oe(c,a),n,g)===!1)return!1}})}z(Be,"flattenEach");function Kr(t,e,r){var n=r;return Be(t,function(a,i,s){i===0&&s===0&&r===void 0?n=a:n=e(n,a,i,s)}),n}z(Kr,"flattenReduce");function Gt(t,e){Be(t,function(r,n,a){var i=0;if(r.geometry){var s=r.geometry.type;if(!(s==="Point"||s==="MultiPoint")){var f,o=0,g=0,w=0;if(Fe(r,function(c,C,S,d,H){if(f===void 0||n>o||d>g||H>w){f=c,o=n,g=d,w=H,i=0;return}var ee=ue([f,c],r.properties);if(e(ee,n,a,H,i)===!1)return!1;i++,f=c})===!1)return!1}}})}z(Gt,"segmentEach");function Vr(t,e,r){var n=r,a=!1;return Gt(t,function(i,s,f,o,g){a===!1&&r===void 0?n=i:n=e(n,i,s,f,o,g),a=!0}),n}z(Vr,"segmentReduce");function xt(t,e){if(!t)throw new Error("geojson is required");Be(t,function(r,n,a){if(r.geometry!==null){var i=r.geometry.type,s=r.geometry.coordinates;switch(i){case"LineString":if(e(r,n,a,0,0)===!1)return!1;break;case"Polygon":for(var f=0;f<s.length;f++)if(e(ue(s[f],r.properties),n,a,f)===!1)return!1;break}}})}z(xt,"lineEach");function Ur(t,e,r){var n=r;return xt(t,function(a,i,s,f){i===0&&r===void 0?n=a:n=e(n,a,i,s,f)}),n}z(Ur,"lineReduce");function Jr(t,e){if(e=e||{},!Je(e))throw new Error("options is invalid");var r=e.featureIndex||0,n=e.multiFeatureIndex||0,a=e.geometryIndex||0,i=e.segmentIndex||0,s=e.properties,f;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),s=s||t.features[r].properties,f=t.features[r].geometry;break;case"Feature":s=s||t.properties,f=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":f=t;break;default:throw new Error("geojson is invalid")}if(f===null)return null;var o=f.coordinates;switch(f.type){case"Point":case"MultiPoint":return null;case"LineString":return i<0&&(i=o.length+i-1),ue([o[i],o[i+1]],s,e);case"Polygon":return a<0&&(a=o.length+a),i<0&&(i=o[a].length+i-1),ue([o[a][i],o[a][i+1]],s,e);case"MultiLineString":return n<0&&(n=o.length+n),i<0&&(i=o[n].length+i-1),ue([o[n][i],o[n][i+1]],s,e);case"MultiPolygon":return n<0&&(n=o.length+n),a<0&&(a=o[n].length+a),i<0&&(i=o[n][a].length-i-1),ue([o[n][a][i],o[n][a][i+1]],s,e)}throw new Error("geojson is invalid")}z(Jr,"findSegment");function Wr(t,e){if(e=e||{},!Je(e))throw new Error("options is invalid");var r=e.featureIndex||0,n=e.multiFeatureIndex||0,a=e.geometryIndex||0,i=e.coordIndex||0,s=e.properties,f;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),s=s||t.features[r].properties,f=t.features[r].geometry;break;case"Feature":s=s||t.properties,f=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":f=t;break;default:throw new Error("geojson is invalid")}if(f===null)return null;var o=f.coordinates;switch(f.type){case"Point":return le(o,s,e);case"MultiPoint":return n<0&&(n=o.length+n),le(o[n],s,e);case"LineString":return i<0&&(i=o.length+i),le(o[i],s,e);case"Polygon":return a<0&&(a=o.length+a),i<0&&(i=o[a].length+i),le(o[a][i],s,e);case"MultiLineString":return n<0&&(n=o.length+n),i<0&&(i=o[n].length+i),le(o[n][i],s,e);case"MultiPolygon":return n<0&&(n=o.length+n),a<0&&(a=o[n].length+a),i<0&&(i=o[n][a].length-i),le(o[n][a][i],s,e)}throw new Error("geojson is invalid")}z(Wr,"findPoint");var Yr=Object.defineProperty,Ne=(t,e)=>Yr(t,"name",{value:e,configurable:!0});function Bt(t){return Dt(t,(e,r)=>e+Nt(r),0)}Ne(Bt,"area");function Nt(t){let e=0,r;switch(t.type){case"Polygon":return He(t.coordinates);case"MultiPolygon":for(r=0;r<t.coordinates.length;r++)e+=He(t.coordinates[r]);return e;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}Ne(Nt,"calculateArea");function He(t){let e=0;if(t&&t.length>0){e+=Math.abs(Ke(t[0]));for(let r=1;r<t.length;r++)e-=Math.abs(Ke(t[r]))}return e}Ne(He,"polygonArea");var Xr=j*j/2,Ie=Math.PI/180;function Ke(t){const e=t.length;if(e<=2)return 0;let r=0,n=0;for(;n<e;){const a=t[n],i=t[n+1===e?0:n+1],s=t[n+2>=e?(n+2)%e:n+2],f=a[0]*Ie,o=i[1]*Ie,g=s[0]*Ie;r+=(g-f)*Math.sin(o),n++}return r*Xr}Ne(Ke,"ringArea");var Zr=Bt;function Pt(t){let e,r,n,a=(t[1]*1e-6).toFixed(2)+"",i,s;return{c(){e=B("p"),r=ge("Polygons in the Network Map cover a total of "),n=B("b"),i=ge(a),s=ge(`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`)},l(f){e=N(f,"P",{});var o=pe(e);r=he(o,"Polygons in the Network Map cover a total of "),n=N(o,"B",{});var g=pe(n);i=he(g,a),g.forEach(I),s=he(o,`
      squared kilometers. Depending what that map represents, you can use this value
      directly.`),o.forEach(I)},m(f,o){fe(f,e,o),p(e,r),p(e,n),p(n,i),p(e,s)},p(f,o){o&2&&a!==(a=(f[1]*1e-6).toFixed(2)+"")&&jt(i,a)},d(f){f&&I(e)}}}function Qr(t){let e,r,n,a,i,s,f,o,g,w,c,C,S,d,H,ee,h,x,R,u,F,ie,K,Pe,de,V,Ce,ve,U,Me,ye,J,Se,$e,W,Ee,_e,re,te,be,ne,q,we,me,b,ke;function qe(l){t[2](l)}let v={label:"Date of design review"};t[0].summary.dateDesignReview!==void 0&&(v.value=t[0].summary.dateDesignReview),r=new De({props:v}),X.push(()=>Q(r,"value",qe));function O(l){t[3](l)}let D={label:"Scheme reference"};t[0].summary.schemeReference!==void 0&&(D.value=t[0].summary.schemeReference),i=new De({props:D}),X.push(()=>Q(i,"value",O));function T(l){t[4](l)}let ae={label:"Scheme name"};t[0].summary.schemeName!==void 0&&(ae.value=t[0].summary.schemeName),o=new De({props:ae}),X.push(()=>Q(o,"value",T));function Oe(l){t[5](l)}let Ye={label:"Scheme summary"};t[0].summary.schemeSummary!==void 0&&(Ye.value=t[0].summary.schemeSummary),c=new Te({props:Ye}),X.push(()=>Q(c,"value",Oe));function It(l){t[6](l)}let Xe={label:"Scheme information reviewed"};t[0].summary.schemeInfoReviewed!==void 0&&(Xe.value=t[0].summary.schemeInfoReviewed),d=new Te({props:Xe}),X.push(()=>Q(d,"value",It));function zt(l){t[7](l)}let Ze={label:"Authority",emptyOption:!0,choices:Le(rr)};t[0].summary.authority!==void 0&&(Ze.value=t[0].summary.authority),h=new Ae({props:Ze}),X.push(()=>Q(h,"value",zt));function Ht(l){t[8](l)}let Qe={label:"Transport / Combined Authority",emptyOption:!0,choices:Le(nr)};t[0].summary.transportOrCombinedAuthority!==void 0&&(Qe.value=t[0].summary.transportOrCombinedAuthority),u=new Ae({props:Qe}),X.push(()=>Q(u,"value",Ht));function Kt(l){t[9](l)}let je={label:"Region",emptyOption:!0,choices:Le(ar)};t[0].summary.region!==void 0&&(je.value=t[0].summary.region),K=new Ae({props:je}),X.push(()=>Q(K,"value",Kt));function Vt(l){t[10](l)}let et={label:"Funding programme",emptyOption:!0,choices:Le(ir)};t[0].summary.fundingProgramme!==void 0&&(et.value=t[0].summary.fundingProgramme),V=new Ae({props:et}),X.push(()=>Q(V,"value",Vt));function Ut(l){t[11](l)}let tt={label:"Design stage",emptyOption:!0,choices:Le(or)};t[0].summary.designStage!==void 0&&(tt.value=t[0].summary.designStage),U=new Ae({props:tt}),X.push(()=>Q(U,"value",Ut));function Jt(l){t[12](l)}let rt={label:"Funding conditions"};t[0].summary.fundingConditions!==void 0&&(rt.value=t[0].summary.fundingConditions),J=new Te({props:rt}),X.push(()=>Q(J,"value",Jt));function Wt(l){t[13](l)}let nt={label:"Inspector email address"};t[0].summary.inspectorEmail!==void 0&&(nt.value=t[0].summary.inspectorEmail),W=new De({props:nt}),X.push(()=>Q(W,"value",Wt));let Y=t[1]&&Pt(t);function Yt(l){t[14](l)}let at={label:"Scheme area size (km²)",width:6,min:0};t[0].summary.schemeAreaSizeKm2!==void 0&&(at.value=t[0].summary.schemeAreaSizeKm2),te=new dr({props:at}),X.push(()=>Q(te,"value",Yt));function Xt(l){t[15](l)}let it={label:"Notes"};return t[0].summary.notes!==void 0&&(it.value=t[0].summary.notes),q=new Te({props:it}),X.push(()=>Q(q,"value",Xt)),b=new Pr({}),{c(){e=B("div"),E(r.$$.fragment),a=y(),E(i.$$.fragment),f=y(),E(o.$$.fragment),w=y(),E(c.$$.fragment),S=y(),E(d.$$.fragment),ee=y(),E(h.$$.fragment),R=y(),E(u.$$.fragment),ie=y(),E(K.$$.fragment),de=y(),E(V.$$.fragment),ve=y(),E(U.$$.fragment),ye=y(),E(J.$$.fragment),$e=y(),E(W.$$.fragment),_e=y(),Y&&Y.c(),re=y(),E(te.$$.fragment),ne=y(),E(q.$$.fragment),me=y(),E(b.$$.fragment),this.h()},l(l){e=N(l,"DIV",{class:!0});var m=pe(e);k(r.$$.fragment,m),a=$(m),k(i.$$.fragment,m),f=$(m),k(o.$$.fragment,m),w=$(m),k(c.$$.fragment,m),S=$(m),k(d.$$.fragment,m),ee=$(m),k(h.$$.fragment,m),R=$(m),k(u.$$.fragment,m),ie=$(m),k(K.$$.fragment,m),de=$(m),k(V.$$.fragment,m),ve=$(m),k(U.$$.fragment,m),ye=$(m),k(J.$$.fragment,m),$e=$(m),k(W.$$.fragment,m),_e=$(m),Y&&Y.l(m),re=$(m),k(te.$$.fragment,m),ne=$(m),k(q.$$.fragment,m),me=$(m),k(b.$$.fragment,m),m.forEach(I),this.h()},h(){Qt(e,"class","govuk-width-container")},m(l,m){fe(l,e,m),L(r,e,null),p(e,a),L(i,e,null),p(e,f),L(o,e,null),p(e,w),L(c,e,null),p(e,S),L(d,e,null),p(e,ee),L(h,e,null),p(e,R),L(u,e,null),p(e,ie),L(K,e,null),p(e,de),L(V,e,null),p(e,ve),L(U,e,null),p(e,ye),L(J,e,null),p(e,$e),L(W,e,null),p(e,_e),Y&&Y.m(e,null),p(e,re),L(te,e,null),p(e,ne),L(q,e,null),p(e,me),L(b,e,null),ke=!0},p(l,[m]){const ot={};!n&&m&1&&(n=!0,ot.value=l[0].summary.dateDesignReview,Z(()=>n=!1)),r.$set(ot);const st={};!s&&m&1&&(s=!0,st.value=l[0].summary.schemeReference,Z(()=>s=!1)),i.$set(st);const lt={};!g&&m&1&&(g=!0,lt.value=l[0].summary.schemeName,Z(()=>g=!1)),o.$set(lt);const ut={};!C&&m&1&&(C=!0,ut.value=l[0].summary.schemeSummary,Z(()=>C=!1)),c.$set(ut);const ft={};!H&&m&1&&(H=!0,ft.value=l[0].summary.schemeInfoReviewed,Z(()=>H=!1)),d.$set(ft);const mt={};!x&&m&1&&(x=!0,mt.value=l[0].summary.authority,Z(()=>x=!1)),h.$set(mt);const ct={};!F&&m&1&&(F=!0,ct.value=l[0].summary.transportOrCombinedAuthority,Z(()=>F=!1)),u.$set(ct);const pt={};!Pe&&m&1&&(Pe=!0,pt.value=l[0].summary.region,Z(()=>Pe=!1)),K.$set(pt);const gt={};!Ce&&m&1&&(Ce=!0,gt.value=l[0].summary.fundingProgramme,Z(()=>Ce=!1)),V.$set(gt);const ht={};!Me&&m&1&&(Me=!0,ht.value=l[0].summary.designStage,Z(()=>Me=!1)),U.$set(ht);const dt={};!Se&&m&1&&(Se=!0,dt.value=l[0].summary.fundingConditions,Z(()=>Se=!1)),J.$set(dt);const vt={};!Ee&&m&1&&(Ee=!0,vt.value=l[0].summary.inspectorEmail,Z(()=>Ee=!1)),W.$set(vt),l[1]?Y?Y.p(l,m):(Y=Pt(l),Y.c(),Y.m(e,re)):Y&&(Y.d(1),Y=null);const yt={};!be&&m&1&&(be=!0,yt.value=l[0].summary.schemeAreaSizeKm2,Z(()=>be=!1)),te.$set(yt);const $t={};!we&&m&1&&(we=!0,$t.value=l[0].summary.notes,Z(()=>we=!1)),q.$set($t)},i(l){ke||(P(r.$$.fragment,l),P(i.$$.fragment,l),P(o.$$.fragment,l),P(c.$$.fragment,l),P(d.$$.fragment,l),P(h.$$.fragment,l),P(u.$$.fragment,l),P(K.$$.fragment,l),P(V.$$.fragment,l),P(U.$$.fragment,l),P(J.$$.fragment,l),P(W.$$.fragment,l),P(te.$$.fragment,l),P(q.$$.fragment,l),P(b.$$.fragment,l),ke=!0)},o(l){M(r.$$.fragment,l),M(i.$$.fragment,l),M(o.$$.fragment,l),M(c.$$.fragment,l),M(d.$$.fragment,l),M(h.$$.fragment,l),M(u.$$.fragment,l),M(K.$$.fragment,l),M(V.$$.fragment,l),M(U.$$.fragment,l),M(J.$$.fragment,l),M(W.$$.fragment,l),M(te.$$.fragment,l),M(q.$$.fragment,l),M(b.$$.fragment,l),ke=!1},d(l){l&&I(e),A(r),A(i),A(o),A(c),A(d),A(h),A(u),A(K),A(V),A(U),A(J),A(W),Y&&Y.d(),A(te),A(q),A(b)}}}function jr(t,e,r){let n,a;Mt(t,G,u=>r(0,a=u));function i(u){let F=0;for(let ie of u.features)ie.geometry.type=="Polygon"&&(F+=Zr(ie));return F>0?F:null}function s(u){t.$$.not_equal(a.summary.dateDesignReview,u)&&(a.summary.dateDesignReview=u,G.set(a))}function f(u){t.$$.not_equal(a.summary.schemeReference,u)&&(a.summary.schemeReference=u,G.set(a))}function o(u){t.$$.not_equal(a.summary.schemeName,u)&&(a.summary.schemeName=u,G.set(a))}function g(u){t.$$.not_equal(a.summary.schemeSummary,u)&&(a.summary.schemeSummary=u,G.set(a))}function w(u){t.$$.not_equal(a.summary.schemeInfoReviewed,u)&&(a.summary.schemeInfoReviewed=u,G.set(a))}function c(u){t.$$.not_equal(a.summary.authority,u)&&(a.summary.authority=u,G.set(a))}function C(u){t.$$.not_equal(a.summary.transportOrCombinedAuthority,u)&&(a.summary.transportOrCombinedAuthority=u,G.set(a))}function S(u){t.$$.not_equal(a.summary.region,u)&&(a.summary.region=u,G.set(a))}function d(u){t.$$.not_equal(a.summary.fundingProgramme,u)&&(a.summary.fundingProgramme=u,G.set(a))}function H(u){t.$$.not_equal(a.summary.designStage,u)&&(a.summary.designStage=u,G.set(a))}function ee(u){t.$$.not_equal(a.summary.fundingConditions,u)&&(a.summary.fundingConditions=u,G.set(a))}function h(u){t.$$.not_equal(a.summary.inspectorEmail,u)&&(a.summary.inspectorEmail=u,G.set(a))}function x(u){t.$$.not_equal(a.summary.schemeAreaSizeKm2,u)&&(a.summary.schemeAreaSizeKm2=u,G.set(a))}function R(u){t.$$.not_equal(a.summary.notes,u)&&(a.summary.notes=u,G.set(a))}return t.$$.update=()=>{t.$$.dirty&1&&r(1,n=i(a.summary.networkMap))},[a,n,s,f,o,g,w,c,C,S,d,H,ee,h,x,R]}class yn extends St{constructor(e){super(),Et(this,e,jr,Qr,Ct,{})}}export{yn as component};
