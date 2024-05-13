import{s as qt,p as J,e as B,a as d,t as _e,c as I,x as ce,g as y,b as ve,d as $e,f as W,q as ye,i as ge,h as c,r as U,k as Tt,U as cr,w as St,A as pr,j as hr}from"../chunks/scheduler.Df2b4kyB.js";import{S as Ot,i as Gt,e as V,c as L,a as R,m as A,t as b,g as gr,b as C,f as dr,d as F}from"../chunks/index.BhHoql2r.js";import{p as qe}from"../chunks/index.DMEeAc_g.js";import{S as Re}from"../chunks/Select.BKt6iZaF.js";import{T as De}from"../chunks/TextArea.BbHO2g9n.js";import{T as Be}from"../chunks/TextInput.DIoZFwRf.js";import{s as N}from"../chunks/data.hHbMKq7e.js";import{a as yr,t as vr,r as _r,f as $r,d as wr}from"../chunks/lists.Ci0sBo6t.js";import"../chunks/paths.Cp5Y9AAP.js";import{F as br}from"../chunks/FileInput.BX45GMaO.js";import{W as Pr,S as Cr}from"../chunks/WarningButton.DP3uDuvY.js";import{E as Er}from"../chunks/ExternalLink.BUdjM5CR.js";/* empty css                                                    */import{a as kr,C as Mr}from"../chunks/index.DtBNtj9A.js";import{M as Sr,e as Lr}from"../chunks/MapLibreMap.DuIVQDca.js";import{D as Lt}from"../chunks/DecimalInput.C4dYqiAh.js";function Rt(e){let t,r,n,i;return t=new Pr({props:{$$slots:{default:[Rr]},$$scope:{ctx:e}}}),t.$on("click",e[2]),n=new Cr({props:{$$slots:{default:[Ar]},$$scope:{ctx:e}}}),n.$on("click",e[5]),{c(){L(t.$$.fragment),r=d(),L(n.$$.fragment)},l(a){R(t.$$.fragment,a),r=y(a),R(n.$$.fragment,a)},m(a,u){A(t,a,u),ge(a,r,u),A(n,a,u),i=!0},p(a,u){const l={};u&128&&(l.$$scope={dirty:u,ctx:a}),t.$set(l);const o={};u&128&&(o.$$scope={dirty:u,ctx:a}),n.$set(o)},i(a){i||(b(t.$$.fragment,a),b(n.$$.fragment,a),i=!0)},o(a){C(t.$$.fragment,a),C(n.$$.fragment,a),i=!1},d(a){a&&W(r),F(t,a),F(n,a)}}}function Rr(e){let t;return{c(){t=_e("Clear map")},l(r){t=$e(r,"Clear map")},m(r,n){ge(r,t,n)},d(r){r&&W(t)}}}function Ar(e){let t;return{c(){t=_e("Zoom to fit")},l(r){t=$e(r,"Zoom to fit")},m(r,n){ge(r,t,n)},d(r){r&&W(t)}}}function Fr(e){let t;return{c(){t=_e("Scheme Sketcher")},l(r){t=$e(r,"Scheme Sketcher")},m(r,n){ge(r,t,n)},d(r){r&&W(t)}}}function qr(e){let t,r;return t=new Mr({props:{gj:e[1].summary.networkMap,show:!0}}),{c(){L(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,i){A(t,n,i),r=!0},p(n,i){const a={};i&2&&(a.gj=n[1].summary.networkMap),t.$set(a)},i(n){r||(b(t.$$.fragment,n),r=!0)},o(n){C(t.$$.fragment,n),r=!1},d(n){F(t,n)}}}function Tr(e){let t,r="Network Map",n,i,a,u,l=`Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.`,o,p,v,h,P,E="You can use the external Scheme Sketcher tool to draw this map:",w,g,x,M,D,O,S,T,m="Choose the area best covering this scheme",H,j,Ce=`Use the <i>New route</i>
        tool to sketch the route. It can contain segments snapped to existing roads
        or free-hand segments.`,ee,se,Ee=`Optionally, use the <i>Split route</i>
        tool to denote just the sections assessed in this file.`,te,ue,ke=`You can set <i>Name</i>
        and
        <i>Description</i>
        to whatever is useful for display on the map`,re,le,Me=`Save the map by clicking <i>Manage files</i>
        , then
        <i>Save</i>`,ne,me,Se="Load the saved file above",de,K,ie,be,Q;p=new br({props:{label:"Import from GeoJSON file",onLoad:e[3]}});let k=e[1].summary.networkMap.features.length>0&&Rt(e);D=new Er({props:{href:"https://acteng.github.io/atip",$$slots:{default:[Fr]},$$scope:{ctx:e}}});function Fe(_){e[6](_)}let oe={$$slots:{default:[qr]},$$scope:{ctx:e}};return e[0]!==void 0&&(oe.map=e[0]),ie=new Sr({props:oe}),J.push(()=>V(ie,"map",Fe)),{c(){t=B("h2"),t.textContent=r,n=d(),i=B("div"),a=B("div"),u=B("p"),u.textContent=l,o=d(),L(p.$$.fragment),v=d(),k&&k.c(),h=d(),P=B("p"),P.textContent=E,w=d(),g=B("ol"),x=B("li"),M=_e("Go to the "),L(D.$$.fragment),O=_e(" tool"),S=d(),T=B("li"),T.textContent=m,H=d(),j=B("li"),j.innerHTML=Ce,ee=d(),se=B("li"),se.innerHTML=Ee,te=d(),ue=B("li"),ue.innerHTML=ke,re=d(),le=B("li"),le.innerHTML=Me,ne=d(),me=B("li"),me.textContent=Se,de=d(),K=B("div"),L(ie.$$.fragment),this.h()},l(_){t=I(_,"H2",{"data-svelte-h":!0}),ce(t)!=="svelte-1fkh1ci"&&(t.textContent=r),n=y(_),i=I(_,"DIV",{style:!0});var G=ve(i);a=I(G,"DIV",{style:!0});var z=ve(a);u=I(z,"P",{"data-svelte-h":!0}),ce(u)!=="svelte-1r7hkzo"&&(u.textContent=l),o=y(z),R(p.$$.fragment,z),v=y(z),k&&k.l(z),h=y(z),P=I(z,"P",{"data-svelte-h":!0}),ce(P)!=="svelte-1els6f1"&&(P.textContent=E),w=y(z),g=I(z,"OL",{});var q=ve(g);x=I(q,"LI",{});var X=ve(x);M=$e(X,"Go to the "),R(D.$$.fragment,X),O=$e(X," tool"),X.forEach(W),S=y(q),T=I(q,"LI",{"data-svelte-h":!0}),ce(T)!=="svelte-aj705b"&&(T.textContent=m),H=y(q),j=I(q,"LI",{"data-svelte-h":!0}),ce(j)!=="svelte-1vb2muj"&&(j.innerHTML=Ce),ee=y(q),se=I(q,"LI",{"data-svelte-h":!0}),ce(se)!=="svelte-3xdyru"&&(se.innerHTML=Ee),te=y(q),ue=I(q,"LI",{"data-svelte-h":!0}),ce(ue)!=="svelte-1r1ljcj"&&(ue.innerHTML=ke),re=y(q),le=I(q,"LI",{"data-svelte-h":!0}),ce(le)!=="svelte-sz4wlr"&&(le.innerHTML=Me),ne=y(q),me=I(q,"LI",{"data-svelte-h":!0}),ce(me)!=="svelte-x3zkxb"&&(me.textContent=Se),q.forEach(W),z.forEach(W),de=y(G),K=I(G,"DIV",{style:!0});var Le=ve(K);R(ie.$$.fragment,Le),Le.forEach(W),G.forEach(W),this.h()},h(){ye(a,"width","30%"),ye(a,"overflow-y","scroll"),ye(a,"padding","10px"),ye(a,"border","1px solid black"),ye(K,"position","relative"),ye(K,"width","70%"),ye(i,"display","flex"),ye(i,"height","80vh")},m(_,G){ge(_,t,G),ge(_,n,G),ge(_,i,G),c(i,a),c(a,u),c(a,o),A(p,a,null),c(a,v),k&&k.m(a,null),c(a,h),c(a,P),c(a,w),c(a,g),c(g,x),c(x,M),A(D,x,null),c(x,O),c(g,S),c(g,T),c(g,H),c(g,j),c(g,ee),c(g,se),c(g,te),c(g,ue),c(g,re),c(g,le),c(g,ne),c(g,me),c(i,de),c(i,K),A(ie,K,null),Q=!0},p(_,[G]){_[1].summary.networkMap.features.length>0?k?(k.p(_,G),G&2&&b(k,1)):(k=Rt(_),k.c(),b(k,1),k.m(a,h)):k&&(gr(),C(k,1,1,()=>{k=null}),dr());const z={};G&128&&(z.$$scope={dirty:G,ctx:_}),D.$set(z);const q={};G&130&&(q.$$scope={dirty:G,ctx:_}),!be&&G&1&&(be=!0,q.map=_[0],U(()=>be=!1)),ie.$set(q)},i(_){Q||(b(p.$$.fragment,_),b(k),b(D.$$.fragment,_),b(ie.$$.fragment,_),Q=!0)},o(_){C(p.$$.fragment,_),C(k),C(D.$$.fragment,_),C(ie.$$.fragment,_),Q=!1},d(_){_&&(W(t),W(n),W(i)),F(p),k&&k.d(),F(D),F(ie)}}}function Or(e,t,r){let n;Tt(e,N,v=>r(1,n=v));let i;cr(()=>{l(!1)});function a(){window.confirm("Do you really want to erase the map data?")&&St(N,n.summary.networkMap={type:"FeatureCollection",features:[]},n)}function u(v,h){var P;try{let E=JSON.parse(h);if(E.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((P=E.origin)!=null&&P.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(E.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");St(N,n.summary.networkMap=E,n),l(!0)}catch{}}function l(v){let h={type:"FeatureCollection",features:n.summary.networkMap.features};h.features.length>0&&i.fitBounds(kr(h),{padding:20,animate:v})}const o=()=>l(!0);function p(v){i=v,r(0,i)}return[i,n,a,u,l,o,p]}class Gr extends Ot{constructor(t){super(),Gt(this,t,Or,Tr,qt,{})}}var Nr=Object.defineProperty,$=(e,t)=>Nr(e,"name",{value:t,configurable:!0}),Dr=class{constructor(t){this.direction=!1,this.compareProperties=!0;var r,n,i;this.precision=10**-((r=t==null?void 0:t.precision)!=null?r:17),this.direction=(n=t==null?void 0:t.direction)!=null?n:!1,this.compareProperties=(i=t==null?void 0:t.compareProperties)!=null?i:!0}compare(t,r){if(t.type!==r.type||!Te(t,r))return!1;switch(t.type){case"Point":return this.compareCoord(t.coordinates,r.coordinates);case"LineString":return this.compareLine(t.coordinates,r.coordinates);case"Polygon":return this.comparePolygon(t,r);case"GeometryCollection":return this.compareGeometryCollection(t,r);case"Feature":return this.compareFeature(t,r);case"FeatureCollection":return this.compareFeatureCollection(t,r);default:if(t.type.startsWith("Multi")){const n=Ke(t),i=Ke(r);return n.every(a=>i.some(u=>this.compare(a,u)))}}return!1}compareCoord(t,r){return t.length===r.length&&t.every((n,i)=>Math.abs(n-r[i])<this.precision)}compareLine(t,r,n=0,i=!1){if(!Te(t,r))return!1;const a=t;let u=r;if(i&&!this.compareCoord(a[0],u[0])){const o=this.fixStartIndex(u,a);if(o)u=o;else return!1}const l=this.compareCoord(a[n],u[n]);return this.direction||l?this.comparePath(a,u):this.compareCoord(a[n],u[u.length-(1+n)])?this.comparePath(a.slice().reverse(),u):!1}fixStartIndex(t,r){let n,i=-1;for(let a=0;a<t.length;a++)if(this.compareCoord(t[a],r[0])){i=a;break}return i>=0&&(n=[].concat(t.slice(i,t.length),t.slice(1,i+1))),n}comparePath(t,r){return t.every((n,i)=>this.compareCoord(n,r[i]))}comparePolygon(t,r){if(this.compareLine(t.coordinates[0],r.coordinates[0],1,!0)){const n=t.coordinates.slice(1,t.coordinates.length),i=r.coordinates.slice(1,r.coordinates.length);return n.every(a=>i.some(u=>this.compareLine(a,u,1,!0)))}return!1}compareGeometryCollection(t,r){return Te(t.geometries,r.geometries)&&this.compareBBox(t,r)&&t.geometries.every((n,i)=>this.compare(n,r.geometries[i]))}compareFeature(t,r){return t.id===r.id&&(this.compareProperties?Lr(t.properties,r.properties):!0)&&this.compareBBox(t,r)&&this.compare(t.geometry,r.geometry)}compareFeatureCollection(t,r){return Te(t.features,r.features)&&this.compareBBox(t,r)&&t.features.every((n,i)=>this.compare(n,r.features[i]))}compareBBox(t,r){return!t.bbox&&!r.bbox||(t.bbox&&r.bbox?this.compareCoord(t.bbox,r.bbox):!1)}};$(Dr,"GeojsonEquality");function Te(e,t){return e.coordinates?e.coordinates.length===t.coordinates.length:e.length===t.length}$(Te,"sameLength");function Ke(e){return e.coordinates.map(t=>({type:e.type.replace("Multi",""),coordinates:t}))}$(Ke,"explode");var ae=63710088e-1,Nt={centimeters:ae*100,centimetres:ae*100,degrees:360/(2*Math.PI),feet:ae*3.28084,inches:ae*39.37,kilometers:ae/1e3,kilometres:ae/1e3,meters:ae,metres:ae,miles:ae/1609.344,millimeters:ae*1e3,millimetres:ae*1e3,nauticalmiles:ae/1852,radians:1,yards:ae*1.0936},At={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,nauticalmiles:29155334959812285e-23,millimeters:1e6,millimetres:1e6,yards:1.195990046};function fe(e,t,r={}){const n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}$(fe,"feature");function Br(e,t,r={}){switch(e){case"Point":return pe(t).geometry;case"LineString":return he(t).geometry;case"Polygon":return Je(t).geometry;case"MultiPoint":return Bt(t).geometry;case"MultiLineString":return Dt(t).geometry;case"MultiPolygon":return It(t).geometry;default:throw new Error(e+" is invalid")}}$(Br,"geometry");function pe(e,t,r={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ae(e[0])||!Ae(e[1]))throw new Error("coordinates must contain numbers");return fe({type:"Point",coordinates:e},t,r)}$(pe,"point");function Ir(e,t,r={}){return Ie(e.map(n=>pe(n,t)),r)}$(Ir,"points");function Je(e,t,r={}){for(const i of e){if(i.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(i[i.length-1].length!==i[0].length)throw new Error("First and last Position are not equivalent.");for(let a=0;a<i[i.length-1].length;a++)if(i[i.length-1][a]!==i[0][a])throw new Error("First and last Position are not equivalent.")}return fe({type:"Polygon",coordinates:e},t,r)}$(Je,"polygon");function xr(e,t,r={}){return Ie(e.map(n=>Je(n,t)),r)}$(xr,"polygons");function he(e,t,r={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return fe({type:"LineString",coordinates:e},t,r)}$(he,"lineString");function Hr(e,t,r={}){return Ie(e.map(n=>he(n,t)),r)}$(Hr,"lineStrings");function Ie(e,t={}){const r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}$(Ie,"featureCollection");function Dt(e,t,r={}){return fe({type:"MultiLineString",coordinates:e},t,r)}$(Dt,"multiLineString");function Bt(e,t,r={}){return fe({type:"MultiPoint",coordinates:e},t,r)}$(Bt,"multiPoint");function It(e,t,r={}){return fe({type:"MultiPolygon",coordinates:e},t,r)}$(It,"multiPolygon");function Kr(e,t,r={}){return fe({type:"GeometryCollection",geometries:e},t,r)}$(Kr,"geometryCollection");function zr(e,t=0){if(t&&!(t>=0))throw new Error("precision must be a positive number");const r=Math.pow(10,t||0);return Math.round(e*r)/r}$(zr,"round");function Ue(e,t="kilometers"){const r=Nt[t];if(!r)throw new Error(t+" units is invalid");return e*r}$(Ue,"radiansToLength");function Ve(e,t="kilometers"){const r=Nt[t];if(!r)throw new Error(t+" units is invalid");return e/r}$(Ve,"lengthToRadians");function Jr(e,t){return xt(Ve(e,t))}$(Jr,"lengthToDegrees");function Ur(e){let t=e%360;return t<0&&(t+=360),t}$(Ur,"bearingToAzimuth");function xt(e){return e%(2*Math.PI)*180/Math.PI}$(xt,"radiansToDegrees");function Oe(e){return e%360*Math.PI/180}$(Oe,"degreesToRadians");function Vr(e,t="kilometers",r="kilometers"){if(!(e>=0))throw new Error("length must be a positive number");return Ue(Ve(e,t),r)}$(Vr,"convertLength");function Wr(e,t="meters",r="kilometers"){if(!(e>=0))throw new Error("area must be a positive number");const n=At[t];if(!n)throw new Error("invalid original units");const i=At[r];if(!i)throw new Error("invalid final units");return e/n*i}$(Wr,"convertArea");function Ae(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}$(Ae,"isNumber");function We(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}$(We,"isObject");function Yr(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(e.length!==4&&e.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach(t=>{if(!Ae(t))throw new Error("bbox must only contain numbers")})}$(Yr,"validateBBox");function Zr(e){if(!e)throw new Error("id is required");if(["string","number"].indexOf(typeof e)===-1)throw new Error("id must be a number or a string")}$(Zr,"validateId");var Qr=Object.defineProperty,we=(e,t)=>Qr(e,"name",{value:t,configurable:!0});function ze(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}we(ze,"getCoord");function Xr(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}we(Xr,"getCoords");function Ht(e){if(e.length>1&&Ae(e[0])&&Ae(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return Ht(e[0]);throw new Error("coordinates must only contain numbers")}we(Ht,"containsNumber");function jr(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}we(jr,"geojsonType");function en(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}we(en,"featureOf");function tn(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}we(tn,"collectionOf");function rn(e){return e.type==="Feature"?e.geometry:e}we(rn,"getGeom");function nn(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}we(nn,"getType");var an=Object.defineProperty,on=(e,t)=>an(e,"name",{value:t,configurable:!0});function Kt(e,t,r={}){var n=ze(e),i=ze(t),a=Oe(i[1]-n[1]),u=Oe(i[0]-n[0]),l=Oe(n[1]),o=Oe(i[1]),p=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(u/2),2)*Math.cos(l)*Math.cos(o);return Ue(2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p)),r.units)}on(Kt,"distance");var sn=Object.defineProperty,Y=(e,t)=>sn(e,"name",{value:t,configurable:!0});function Ge(e,t,r){if(e!==null)for(var n,i,a,u,l,o,p,v=0,h=0,P,E=e.type,w=E==="FeatureCollection",g=E==="Feature",x=w?e.features.length:1,M=0;M<x;M++){p=w?e.features[M].geometry:g?e.geometry:e,P=p?p.type==="GeometryCollection":!1,l=P?p.geometries.length:1;for(var D=0;D<l;D++){var O=0,S=0;if(u=P?p.geometries[D]:p,u!==null){o=u.coordinates;var T=u.type;switch(v=r&&(T==="Polygon"||T==="MultiPolygon")?1:0,T){case null:break;case"Point":if(t(o,h,M,O,S)===!1)return!1;h++,O++;break;case"LineString":case"MultiPoint":for(n=0;n<o.length;n++){if(t(o[n],h,M,O,S)===!1)return!1;h++,T==="MultiPoint"&&O++}T==="LineString"&&O++;break;case"Polygon":case"MultiLineString":for(n=0;n<o.length;n++){for(i=0;i<o[n].length-v;i++){if(t(o[n][i],h,M,O,S)===!1)return!1;h++}T==="MultiLineString"&&O++,T==="Polygon"&&S++}T==="Polygon"&&O++;break;case"MultiPolygon":for(n=0;n<o.length;n++){for(S=0,i=0;i<o[n].length;i++){for(a=0;a<o[n][i].length-v;a++){if(t(o[n][i][a],h,M,O,S)===!1)return!1;h++}S++}O++}break;case"GeometryCollection":for(n=0;n<u.geometries.length;n++)if(Ge(u.geometries[n],t,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}Y(Ge,"coordEach");function un(e,t,r,n){var i=r;return Ge(e,function(a,u,l,o,p){u===0&&r===void 0?i=a:i=t(i,a,u,l,o,p)},n),i}Y(un,"coordReduce");function zt(e,t){var r;switch(e.type){case"FeatureCollection":for(r=0;r<e.features.length&&t(e.features[r].properties,r)!==!1;r++);break;case"Feature":t(e.properties,0);break}}Y(zt,"propEach");function ln(e,t,r){var n=r;return zt(e,function(i,a){a===0&&r===void 0?n=i:n=t(n,i,a)}),n}Y(ln,"propReduce");function Jt(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var r=0;r<e.features.length&&t(e.features[r],r)!==!1;r++);}Y(Jt,"featureEach");function mn(e,t,r){var n=r;return Jt(e,function(i,a){a===0&&r===void 0?n=i:n=t(n,i,a)}),n}Y(mn,"featureReduce");function fn(e){var t=[];return Ge(e,function(r){t.push(r)}),t}Y(fn,"coordAll");function Ye(e,t){var r,n,i,a,u,l,o,p,v,h,P=0,E=e.type==="FeatureCollection",w=e.type==="Feature",g=E?e.features.length:1;for(r=0;r<g;r++){for(l=E?e.features[r].geometry:w?e.geometry:e,p=E?e.features[r].properties:w?e.properties:{},v=E?e.features[r].bbox:w?e.bbox:void 0,h=E?e.features[r].id:w?e.id:void 0,o=l?l.type==="GeometryCollection":!1,u=o?l.geometries.length:1,i=0;i<u;i++){if(a=o?l.geometries[i]:l,a===null){if(t(null,P,p,v,h)===!1)return!1;continue}switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(a,P,p,v,h)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<a.geometries.length;n++)if(t(a.geometries[n],P,p,v,h)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}P++}}Y(Ye,"geomEach");function cn(e,t,r){var n=r;return Ye(e,function(i,a,u,l,o){a===0&&r===void 0?n=i:n=t(n,i,a,u,l,o)}),n}Y(cn,"geomReduce");function xe(e,t){Ye(e,function(r,n,i,a,u){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(fe(r,i,{bbox:a,id:u}),n,0)===!1?!1:void 0}var o;switch(l){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon";break}for(var p=0;p<r.coordinates.length;p++){var v=r.coordinates[p],h={type:o,coordinates:v};if(t(fe(h,i),n,p)===!1)return!1}})}Y(xe,"flattenEach");function pn(e,t,r){var n=r;return xe(e,function(i,a,u){a===0&&u===0&&r===void 0?n=i:n=t(n,i,a,u)}),n}Y(pn,"flattenReduce");function Ut(e,t){xe(e,function(r,n,i){var a=0;if(r.geometry){var u=r.geometry.type;if(!(u==="Point"||u==="MultiPoint")){var l,o=0,p=0,v=0;if(Ge(r,function(h,P,E,w,g){if(l===void 0||n>o||w>p||g>v){l=h,o=n,p=w,v=g,a=0;return}var x=he([l,h],r.properties);if(t(x,n,i,g,a)===!1)return!1;a++,l=h})===!1)return!1}}})}Y(Ut,"segmentEach");function Vt(e,t,r){var n=r,i=!1;return Ut(e,function(a,u,l,o,p){i===!1&&r===void 0?n=a:n=t(n,a,u,l,o,p),i=!0}),n}Y(Vt,"segmentReduce");function Wt(e,t){if(!e)throw new Error("geojson is required");xe(e,function(r,n,i){if(r.geometry!==null){var a=r.geometry.type,u=r.geometry.coordinates;switch(a){case"LineString":if(t(r,n,i,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<u.length;l++)if(t(he(u[l],r.properties),n,i,l)===!1)return!1;break}}})}Y(Wt,"lineEach");function hn(e,t,r){var n=r;return Wt(e,function(i,a,u,l){a===0&&r===void 0?n=i:n=t(n,i,a,u,l)}),n}Y(hn,"lineReduce");function gn(e,t){if(t=t||{},!We(t))throw new Error("options is invalid");var r=t.featureIndex||0,n=t.multiFeatureIndex||0,i=t.geometryIndex||0,a=t.segmentIndex||0,u=t.properties,l;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),u=u||e.features[r].properties,l=e.features[r].geometry;break;case"Feature":u=u||e.properties,l=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=e;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return a<0&&(a=o.length+a-1),he([o[a],o[a+1]],u,t);case"Polygon":return i<0&&(i=o.length+i),a<0&&(a=o[i].length+a-1),he([o[i][a],o[i][a+1]],u,t);case"MultiLineString":return n<0&&(n=o.length+n),a<0&&(a=o[n].length+a-1),he([o[n][a],o[n][a+1]],u,t);case"MultiPolygon":return n<0&&(n=o.length+n),i<0&&(i=o[n].length+i),a<0&&(a=o[n][i].length-a-1),he([o[n][i][a],o[n][i][a+1]],u,t)}throw new Error("geojson is invalid")}Y(gn,"findSegment");function dn(e,t){if(t=t||{},!We(t))throw new Error("options is invalid");var r=t.featureIndex||0,n=t.multiFeatureIndex||0,i=t.geometryIndex||0,a=t.coordIndex||0,u=t.properties,l;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),u=u||e.features[r].properties,l=e.features[r].geometry;break;case"Feature":u=u||e.properties,l=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=e;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var o=l.coordinates;switch(l.type){case"Point":return pe(o,u,t);case"MultiPoint":return n<0&&(n=o.length+n),pe(o[n],u,t);case"LineString":return a<0&&(a=o.length+a),pe(o[a],u,t);case"Polygon":return i<0&&(i=o.length+i),a<0&&(a=o[i].length+a),pe(o[i][a],u,t);case"MultiLineString":return n<0&&(n=o.length+n),a<0&&(a=o[n].length+a),pe(o[n][a],u,t);case"MultiPolygon":return n<0&&(n=o.length+n),i<0&&(i=o[n].length+i),a<0&&(a=o[n][i].length-a),pe(o[n][i][a],u,t)}throw new Error("geojson is invalid")}Y(dn,"findPoint");var yn=Object.defineProperty,vn=(e,t)=>yn(e,"name",{value:t,configurable:!0});function Yt(e,t={}){return Vt(e,(r,n)=>{const i=n.geometry.coordinates;return r+Kt(i[0],i[1],t)},0)}vn(Yt,"length");var _n=Yt;function Ft(e){let t,r,n,i=e[1].toFixed(2)+"",a,u;return{c(){t=B("p"),r=_e("LineStrings in the Network Map cover a total of "),n=B("b"),a=_e(i),u=_e(`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`)},l(l){t=I(l,"P",{});var o=ve(t);r=$e(o,"LineStrings in the Network Map cover a total of "),n=I(o,"B",{});var p=ve(n);a=$e(p,i),p.forEach(W),u=$e(o,`
      kilometers. Depending what that map represents, you can use this value directly,
      or hover on a piece of route on the map to see its individual length.`),o.forEach(W)},m(l,o){ge(l,t,o),c(t,r),c(t,n),c(n,a),c(t,u)},p(l,o){o&2&&i!==(i=l[1].toFixed(2)+"")&&hr(a,i)},d(l){l&&W(t)}}}function $n(e){let t,r,n,i,a,u,l,o,p,v,h,P,E,w,g,x,M,D,O,S,T,m,H,j,Ce,ee,se,Ee,te,ue,ke,re,le,Me,ne,me,Se,de,K,ie,be,Q,k,Fe,oe,_,G,z,q,X,Le,He,Pe,Ne;function Zt(s){e[2](s)}let Ze={label:"Date of design review"};e[0].summary.dateDesignReview!==void 0&&(Ze.value=e[0].summary.dateDesignReview),r=new Be({props:Ze}),J.push(()=>V(r,"value",Zt));function Qt(s){e[3](s)}let Qe={label:"Scheme reference"};e[0].summary.schemeReference!==void 0&&(Qe.value=e[0].summary.schemeReference),a=new Be({props:Qe}),J.push(()=>V(a,"value",Qt));function Xt(s){e[4](s)}let Xe={label:"Scheme name"};e[0].summary.schemeName!==void 0&&(Xe.value=e[0].summary.schemeName),o=new Be({props:Xe}),J.push(()=>V(o,"value",Xt));function jt(s){e[5](s)}let je={label:"Scheme summary"};e[0].summary.schemeSummary!==void 0&&(je.value=e[0].summary.schemeSummary),h=new De({props:je}),J.push(()=>V(h,"value",jt));function er(s){e[6](s)}let et={label:"Scheme information reviewed"};e[0].summary.schemeInfoReviewed!==void 0&&(et.value=e[0].summary.schemeInfoReviewed),w=new De({props:et}),J.push(()=>V(w,"value",er));function tr(s){e[7](s)}let tt={label:"Authority",emptyOption:!0,choices:qe(yr)};e[0].summary.authority!==void 0&&(tt.value=e[0].summary.authority),M=new Re({props:tt}),J.push(()=>V(M,"value",tr));function rr(s){e[8](s)}let rt={label:"Transport / Combined Authority",emptyOption:!0,choices:qe(vr)};e[0].summary.transportOrCombinedAuthority!==void 0&&(rt.value=e[0].summary.transportOrCombinedAuthority),S=new Re({props:rt}),J.push(()=>V(S,"value",rr));function nr(s){e[9](s)}let nt={label:"Region",emptyOption:!0,choices:qe(_r)};e[0].summary.region!==void 0&&(nt.value=e[0].summary.region),H=new Re({props:nt}),J.push(()=>V(H,"value",nr));function ir(s){e[10](s)}let it={label:"Funding programme",emptyOption:!0,choices:qe($r)};e[0].summary.fundingProgramme!==void 0&&(it.value=e[0].summary.fundingProgramme),ee=new Re({props:it}),J.push(()=>V(ee,"value",ir));function ar(s){e[11](s)}let at={label:"Design stage",emptyOption:!0,choices:qe(wr)};e[0].summary.designStage!==void 0&&(at.value=e[0].summary.designStage),te=new Re({props:at}),J.push(()=>V(te,"value",ar));function or(s){e[12](s)}let ot={label:"Funding conditions"};e[0].summary.fundingConditions!==void 0&&(ot.value=e[0].summary.fundingConditions),re=new De({props:ot}),J.push(()=>V(re,"value",or));function sr(s){e[13](s)}let st={label:"Inspector email address"};e[0].summary.inspectorEmail!==void 0&&(st.value=e[0].summary.inspectorEmail),ne=new Be({props:st}),J.push(()=>V(ne,"value",sr));let Z=e[1]&&Ft(e);function ur(s){e[14](s)}let ut={label:"Route length assessed here (km)",width:6,min:0};e[0].summary.assessedRouteLengthKm!==void 0&&(ut.value=e[0].summary.assessedRouteLengthKm),K=new Lt({props:ut}),J.push(()=>V(K,"value",ur));function lr(s){e[15](s)}let lt={label:"Total route length (km)",width:6,min:0};e[0].summary.totalRouteLengthKm!==void 0&&(lt.value=e[0].summary.totalRouteLengthKm),Q=new Lt({props:lt}),J.push(()=>V(Q,"value",lr));function mr(s){e[16](s)}let mt={label:"Notes"};e[0].summary.notes!==void 0&&(mt.value=e[0].summary.notes),oe=new De({props:mt}),J.push(()=>V(oe,"value",mr));function fr(s){e[17](s)}let ft={label:"Route Check Type (Street or Path)",hint:"What type of route is being reviewed: Street Check (e.g. on- or by-carriageway) or Path Check (e.g. a traffic-free path featuring minimal interactions with motor traffic)",emptyOption:!0,choices:[["street","Street Check"],["path","Path Check"]]};return e[0].summary.checkType!==void 0&&(ft.value=e[0].summary.checkType),X=new Re({props:ft}),J.push(()=>V(X,"value",fr)),Pe=new Gr({}),{c(){t=B("div"),L(r.$$.fragment),i=d(),L(a.$$.fragment),l=d(),L(o.$$.fragment),v=d(),L(h.$$.fragment),E=d(),L(w.$$.fragment),x=d(),L(M.$$.fragment),O=d(),L(S.$$.fragment),m=d(),L(H.$$.fragment),Ce=d(),L(ee.$$.fragment),Ee=d(),L(te.$$.fragment),ke=d(),L(re.$$.fragment),Me=d(),L(ne.$$.fragment),Se=d(),Z&&Z.c(),de=d(),L(K.$$.fragment),be=d(),L(Q.$$.fragment),Fe=d(),L(oe.$$.fragment),G=d(),z=B("hr"),q=d(),L(X.$$.fragment),He=d(),L(Pe.$$.fragment),this.h()},l(s){t=I(s,"DIV",{class:!0});var f=ve(t);R(r.$$.fragment,f),i=y(f),R(a.$$.fragment,f),l=y(f),R(o.$$.fragment,f),v=y(f),R(h.$$.fragment,f),E=y(f),R(w.$$.fragment,f),x=y(f),R(M.$$.fragment,f),O=y(f),R(S.$$.fragment,f),m=y(f),R(H.$$.fragment,f),Ce=y(f),R(ee.$$.fragment,f),Ee=y(f),R(te.$$.fragment,f),ke=y(f),R(re.$$.fragment,f),Me=y(f),R(ne.$$.fragment,f),Se=y(f),Z&&Z.l(f),de=y(f),R(K.$$.fragment,f),be=y(f),R(Q.$$.fragment,f),Fe=y(f),R(oe.$$.fragment,f),G=y(f),z=I(f,"HR",{}),q=y(f),R(X.$$.fragment,f),He=y(f),R(Pe.$$.fragment,f),f.forEach(W),this.h()},h(){pr(t,"class","govuk-width-container")},m(s,f){ge(s,t,f),A(r,t,null),c(t,i),A(a,t,null),c(t,l),A(o,t,null),c(t,v),A(h,t,null),c(t,E),A(w,t,null),c(t,x),A(M,t,null),c(t,O),A(S,t,null),c(t,m),A(H,t,null),c(t,Ce),A(ee,t,null),c(t,Ee),A(te,t,null),c(t,ke),A(re,t,null),c(t,Me),A(ne,t,null),c(t,Se),Z&&Z.m(t,null),c(t,de),A(K,t,null),c(t,be),A(Q,t,null),c(t,Fe),A(oe,t,null),c(t,G),c(t,z),c(t,q),A(X,t,null),c(t,He),A(Pe,t,null),Ne=!0},p(s,[f]){const ct={};!n&&f&1&&(n=!0,ct.value=s[0].summary.dateDesignReview,U(()=>n=!1)),r.$set(ct);const pt={};!u&&f&1&&(u=!0,pt.value=s[0].summary.schemeReference,U(()=>u=!1)),a.$set(pt);const ht={};!p&&f&1&&(p=!0,ht.value=s[0].summary.schemeName,U(()=>p=!1)),o.$set(ht);const gt={};!P&&f&1&&(P=!0,gt.value=s[0].summary.schemeSummary,U(()=>P=!1)),h.$set(gt);const dt={};!g&&f&1&&(g=!0,dt.value=s[0].summary.schemeInfoReviewed,U(()=>g=!1)),w.$set(dt);const yt={};!D&&f&1&&(D=!0,yt.value=s[0].summary.authority,U(()=>D=!1)),M.$set(yt);const vt={};!T&&f&1&&(T=!0,vt.value=s[0].summary.transportOrCombinedAuthority,U(()=>T=!1)),S.$set(vt);const _t={};!j&&f&1&&(j=!0,_t.value=s[0].summary.region,U(()=>j=!1)),H.$set(_t);const $t={};!se&&f&1&&(se=!0,$t.value=s[0].summary.fundingProgramme,U(()=>se=!1)),ee.$set($t);const wt={};!ue&&f&1&&(ue=!0,wt.value=s[0].summary.designStage,U(()=>ue=!1)),te.$set(wt);const bt={};!le&&f&1&&(le=!0,bt.value=s[0].summary.fundingConditions,U(()=>le=!1)),re.$set(bt);const Pt={};!me&&f&1&&(me=!0,Pt.value=s[0].summary.inspectorEmail,U(()=>me=!1)),ne.$set(Pt),s[1]?Z?Z.p(s,f):(Z=Ft(s),Z.c(),Z.m(t,de)):Z&&(Z.d(1),Z=null);const Ct={};!ie&&f&1&&(ie=!0,Ct.value=s[0].summary.assessedRouteLengthKm,U(()=>ie=!1)),K.$set(Ct);const Et={};!k&&f&1&&(k=!0,Et.value=s[0].summary.totalRouteLengthKm,U(()=>k=!1)),Q.$set(Et);const kt={};!_&&f&1&&(_=!0,kt.value=s[0].summary.notes,U(()=>_=!1)),oe.$set(kt);const Mt={};!Le&&f&1&&(Le=!0,Mt.value=s[0].summary.checkType,U(()=>Le=!1)),X.$set(Mt)},i(s){Ne||(b(r.$$.fragment,s),b(a.$$.fragment,s),b(o.$$.fragment,s),b(h.$$.fragment,s),b(w.$$.fragment,s),b(M.$$.fragment,s),b(S.$$.fragment,s),b(H.$$.fragment,s),b(ee.$$.fragment,s),b(te.$$.fragment,s),b(re.$$.fragment,s),b(ne.$$.fragment,s),b(K.$$.fragment,s),b(Q.$$.fragment,s),b(oe.$$.fragment,s),b(X.$$.fragment,s),b(Pe.$$.fragment,s),Ne=!0)},o(s){C(r.$$.fragment,s),C(a.$$.fragment,s),C(o.$$.fragment,s),C(h.$$.fragment,s),C(w.$$.fragment,s),C(M.$$.fragment,s),C(S.$$.fragment,s),C(H.$$.fragment,s),C(ee.$$.fragment,s),C(te.$$.fragment,s),C(re.$$.fragment,s),C(ne.$$.fragment,s),C(K.$$.fragment,s),C(Q.$$.fragment,s),C(oe.$$.fragment,s),C(X.$$.fragment,s),C(Pe.$$.fragment,s),Ne=!1},d(s){s&&W(t),F(r),F(a),F(o),F(h),F(w),F(M),F(S),F(H),F(ee),F(te),F(re),F(ne),Z&&Z.d(),F(K),F(Q),F(oe),F(X),F(Pe)}}}function wn(e,t,r){let n,i;Tt(e,N,m=>r(0,i=m));function a(m){let H=0;for(let j of m.features)j.geometry.type=="LineString"&&(H+=_n(j,{units:"kilometers"}));return H>0?H:null}function u(m){e.$$.not_equal(i.summary.dateDesignReview,m)&&(i.summary.dateDesignReview=m,N.set(i))}function l(m){e.$$.not_equal(i.summary.schemeReference,m)&&(i.summary.schemeReference=m,N.set(i))}function o(m){e.$$.not_equal(i.summary.schemeName,m)&&(i.summary.schemeName=m,N.set(i))}function p(m){e.$$.not_equal(i.summary.schemeSummary,m)&&(i.summary.schemeSummary=m,N.set(i))}function v(m){e.$$.not_equal(i.summary.schemeInfoReviewed,m)&&(i.summary.schemeInfoReviewed=m,N.set(i))}function h(m){e.$$.not_equal(i.summary.authority,m)&&(i.summary.authority=m,N.set(i))}function P(m){e.$$.not_equal(i.summary.transportOrCombinedAuthority,m)&&(i.summary.transportOrCombinedAuthority=m,N.set(i))}function E(m){e.$$.not_equal(i.summary.region,m)&&(i.summary.region=m,N.set(i))}function w(m){e.$$.not_equal(i.summary.fundingProgramme,m)&&(i.summary.fundingProgramme=m,N.set(i))}function g(m){e.$$.not_equal(i.summary.designStage,m)&&(i.summary.designStage=m,N.set(i))}function x(m){e.$$.not_equal(i.summary.fundingConditions,m)&&(i.summary.fundingConditions=m,N.set(i))}function M(m){e.$$.not_equal(i.summary.inspectorEmail,m)&&(i.summary.inspectorEmail=m,N.set(i))}function D(m){e.$$.not_equal(i.summary.assessedRouteLengthKm,m)&&(i.summary.assessedRouteLengthKm=m,N.set(i))}function O(m){e.$$.not_equal(i.summary.totalRouteLengthKm,m)&&(i.summary.totalRouteLengthKm=m,N.set(i))}function S(m){e.$$.not_equal(i.summary.notes,m)&&(i.summary.notes=m,N.set(i))}function T(m){e.$$.not_equal(i.summary.checkType,m)&&(i.summary.checkType=m,N.set(i))}return e.$$.update=()=>{e.$$.dirty&1&&r(1,n=a(i.summary.networkMap))},[i,n,u,l,o,p,v,h,P,E,w,g,x,M,D,O,S,T]}class Bn extends Ot{constructor(t){super(),Gt(this,t,wn,$n,qt,{})}}export{Bn as component};
