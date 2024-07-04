import{s as Z,v as P,e as A,a as v,c as F,b as O,g as W,f as _,r as to,y as j,i as M,h as w,w as V,l as no,p as J,x as k,u as ro,m as uo,o as lo,U as so,t as q,d as Q}from"./scheduler.BBS-fkhU.js";import{S as X,i as x,e as K,c as L,a as E,m as N,t as B,g as oo,b,f as io,d as $}from"./index.B8H3ypVf.js";import{S as co}from"./Select.DqyoFzIJ.js";import{T as ao}from"./TextInput.C_aBwF72.js";/* empty css                                                       */import{M as ho,b as Co,C as go}from"./index.BVSND4uW.js";import{E as fo}from"./ErrorMessage.BCIKj4J0.js";import{F as mo}from"./FileInput.D6bMLSI-.js";import{W as Bo,S as yo}from"./WarningButton.CaqyhU7y.js";function U(n){let o,e,t;function a(r){n[10](r)}let i={label:"Enter a custom value"};return n[0]!==void 0&&(i.value=n[0]),o=new ao({props:i}),P.push(()=>K(o,"value",a)),{c(){L(o.$$.fragment)},l(r){E(o.$$.fragment,r)},m(r,g){N(o,r,g),t=!0},p(r,g){const u={};!e&&g&1&&(e=!0,u.value=r[0],V(()=>e=!1)),o.$set(u)},i(r){t||(B(o.$$.fragment,r),t=!0)},o(r){b(o.$$.fragment,r),t=!1},d(r){$(o,r)}}}function po(n){let o,e,t,a,i;function r(s){n[9](s)}let g={label:n[1],hint:n[2],choices:n[6],emptyOption:n[3],disabled:n[4]};n[5]!==void 0&&(g.value=n[5]),e=new co({props:g}),P.push(()=>K(e,"value",r)),e.$on("change",n[7]);let u=n[5]=="other"&&U(n);return{c(){o=A("div"),L(e.$$.fragment),a=v(),u&&u.c(),this.h()},l(s){o=F(s,"DIV",{class:!0});var h=O(o);E(e.$$.fragment,h),a=W(h),u&&u.l(h),h.forEach(_),this.h()},h(){to(o,"class","svelte-gtlbk6"),j(o,"grouped",n[5]=="other")},m(s,h){M(s,o,h),N(e,o,null),w(o,a),u&&u.m(o,null),i=!0},p(s,[h]){const f={};h&2&&(f.label=s[1]),h&4&&(f.hint=s[2]),h&8&&(f.emptyOption=s[3]),h&16&&(f.disabled=s[4]),!t&&h&32&&(t=!0,f.value=s[5],V(()=>t=!1)),e.$set(f),s[5]=="other"?u?(u.p(s,h),h&32&&B(u,1)):(u=U(s),u.c(),B(u,1),u.m(o,null)):u&&(oo(),b(u,1,1,()=>{u=null}),io()),(!i||h&32)&&j(o,"grouped",s[5]=="other")},i(s){i||(B(e.$$.fragment,s),B(u),i=!0)},o(s){b(e.$$.fragment,s),b(u),i=!1},d(s){s&&_(o),$(e),u&&u.d()}}}function bo(n,o,e){let{label:t}=o,{hint:a=""}=o,{choices:i}=o,{emptyOption:r=!1}=o,{disabled:g=!1}=o,{value:u}=o,s=new Set(i.map(l=>l[0])),h=[...i,["other","Other"]];r&&s.add("");function f(l){return s.has(l)?l:"other"}let S=f(u);function d(){e(0,u=S=="other"?"":S)}function H(l){S=l,e(5,S)}function D(l){u=l,e(0,u)}return n.$$set=l=>{"label"in l&&e(1,t=l.label),"hint"in l&&e(2,a=l.hint),"choices"in l&&e(8,i=l.choices),"emptyOption"in l&&e(3,r=l.emptyOption),"disabled"in l&&e(4,g=l.disabled),"value"in l&&e(0,u=l.value)},[u,t,a,r,g,S,h,d,i,H,D]}class Ro extends X{constructor(o){super(),x(this,o,bo,po,Z,{label:1,hint:2,choices:8,emptyOption:3,disabled:4,value:0})}}let Ao=["N/A","Adur District Council","Amber Valley Borough Council","Arun District Council","Ashfield District Council","Ashford Borough Council","Babergh District Council","Barnsley Borough Council","Basildon Borough Council","Basingstoke & Deane Borough Council","Bassetlaw District Council","Bath and North East Somerset Council","Bedford Borough Council","Birmingham City Council","Blaby District Council","Blackburn with Darwen Borough Council","Blackpool Council","Bolsover District Council","Bolton Borough Council","Boston Borough Council","Bournemouth, Christchurch and Poole Council","Bracknell Forest Borough Council","Bradford City Council","Braintree District Council","Breckland District Council","Brentwood Borough Council","Brighton and Hove City Council","Bristol City Council","Broadland District Council","Bromsgrove District Council","Broxbourne Borough Council","Broxtowe Borough Council","Buckinghamshire Council","Burnley Borough Council","Bury Borough Council","Calderdale Borough Council","Cambridge City Council","Cambridgeshire and Peterborough Combined Authority","Cambridgeshire County Council","Cannock Chase District Council","Canterbury City Council","Castle Point District Council","Central Bedfordshire Council","Charnwood Borough Council","Chelmsford City Council","Cheltenham Borough Council","Cherwell District Council","Cheshire East Council","Cheshire West and Chester Council","Chesterfield Borough Council","Chichester District Council","Chorley Borough Council","City of London Corporation","City of York Council","Colchester Borough Council","Cornwall Council","Cotswold District Council","Coventry City Council","Crawley Borough Council","Cumberland Council","Dacorum Borough Council","Darlington Borough Council","Dartford Borough Council","Derby City Council","Derbyshire County Council","Derbyshire Dales District Council","Devon County Council","Doncaster Borough Council","Dorset Council","Dover District Council","Dudley Borough Council","Durham County Council","East Cambridgeshire District Council","East Devon District Council","East Hampshire District Council","East Hertfordshire District Council","East Lindsey District Council","East Riding of Yorkshire Council","East Staffordshire Borough Council","East Suffolk Council","East Sussex County Council","Eastbourne Borough Council","Eastleigh Borough Council","Elmbridge Borough Council","Epping Forest District Council","Epsom & Ewell Borough Council","Erewash Borough Council","Essex County Council","Exeter City Council","Fareham Borough Council","Fenland District Council","Folkestone and Hythe District Council","Forest of Dean District Council","Fylde Borough Council","Gateshead Borough Council","Gedling Borough Council","Gloucester City Council","Gloucestershire County Council","Gosport Borough Council","Gravesham Borough Council","Great Yarmouth Borough Council","Greater London Authority","Greater Manchester Combined Authority","Guildford Borough Council","Halton Borough Council","Hampshire County Council","Harborough District Council","Harlow District Council","Hart District Council","Hartlepool Borough Council","Hastings Borough Council","Havant Borough Council","Herefordshire Council","Hertfordshire County Council","Hertsmere Borough Council","High Peak Borough Council","Hinckley and Bosworth Borough Council","Horsham District Council","Hull City Council","Huntingdonshire District Council","Hyndburn Borough Council","Ipswich Borough Council","Isle of Wight Council","Kent County Council","Kings Lynn & West Norfolk Borough Council","Kirklees Borough Council","Knowsley Borough Council","Lancashire County Council","Lancaster City Council","Leeds City Council","Leicester City Council","Leicestershire County Council","Lewes District Council","Lichfield City Council","Lincoln City Council","Lincolnshire County Council","Liverpool City Council","Liverpool City Region Combined Authority","London Borough of Barking and Dagenham","London Borough of Barnet","London Borough of Bexley","London Borough of Brent","London Borough of Bromley","London Borough of Camden","London Borough of Croydon","London Borough of Ealing","London Borough of Enfield","London Borough of Hackney","London Borough of Hammersmith and Fulham","London Borough of Haringey","London Borough of Harrow","London Borough of Havering","London Borough of Hillingdon","London Borough of Hounslow","London Borough of Islington","Royal Borough of Kingston upon Thames","Royal Borough of Greenwich","Royal Borough of Kensington and Chelsea","London Borough of Lambeth","London Borough of Lewisham","London Borough of Merton","London Borough of Newham","London Borough of Redbridge","London Borough of Richmond upon Thames","London Borough of Southwark","London Borough of Sutton","London Borough of Tower Hamlets","London Borough of Waltham Forest","London Borough of Wandsworth","Westminster City Council","Luton Borough Council","Maidstone Borough Council","Maldon District Council","Malvern Hills District Council","Manchester City Council","Mansfield District Council","Medway Council","Melton Borough Council","Mid Devon District Council","Mid Suffolk District Council","Mid Sussex District Council","Middlesbrough Borough Council","Milton Keynes Council","Mole Valley District Council","New Forest District Council","Newark & Sherwood District Council","Newcastle Upon Tyne City Council","Newcastle-Under-Lyme Borough Council","Norfolk County Council","North Devon District Council","North East Derbyshire District Council","North East Joint Transport Committee","North East Lincolnshire Council","North Hertfordshire District Council","North Kesteven District Council","North Lincolnshire Council","North Norfolk District Council","North Northamptonshire Council","North Somerset Council","North Tyneside Borough Council","North Warwickshire Borough Council","North West Leicestershire District Council","North Yorkshire Council","Northern Ireland","Northumberland County Council","Norwich City Council","Nottingham City Council","Nottinghamshire County Council","Nuneaton & Bedworth Borough Council","Oadby & Wigston Borough Council","Oldham Borough Council","Oxford City Council","Oxfordshire County Council","Pendle Borough Council","Peterborough City Council","Plymouth City Council","Portsmouth City Council","Preston City Council","Reading Borough Council","Redcar and Cleveland Borough Council","Redditch Borough Council","Reigate & Banstead Borough Council","Ribble Valley Borough Council","Rochdale Borough Council","Rochford District Council","Rossendale Borough Council","Rother District Council","Rotherham Borough Council","Rugby Borough Council","Runnymede Borough Council","Rushcliffe Borough Council","Rushmoor Borough Council","Rutland County Council","Salford City Council","Sandwell Borough Council","Scotland","Sefton Borough Council","Sevenoaks District Council","Sheffield City Council","Shropshire Council","Slough Borough Council","Solihull Borough Council","Somerset Council","South Cambridgeshire District Council","South Derbyshire District Council","South Gloucestershire Council","South Hams District Council","South Holland District Council","South Kesteven District Council","South Norfolk District Council","South Oxfordshire District Council","South Ribble Borough Council","South Staffordshire District Council","South Tyneside Borough Council","South Yorkshire Mayoral Combined Authority","Southampton City Council","Southend-on-Sea Borough Council","Spelthorne Borough Council","St Albans City Council","St Helens Borough Council","Stafford Borough Council","Staffordshire County Council","Staffordshire Moorlands District Council","Stevenage Borough Council","Stockport Borough Council","Stockton-on-Tees Borough Council","Stoke-on-Trent City Council","Stratford on Avon District Council","Stroud District Council","Suffolk County Council","Sunderland City Council","Surrey County Council","Surrey Heath Borough Council","Swale Borough Council","Swindon Borough Council","Tameside Borough Council","Tamworth Borough Council","Tandridge District Council","Tees Valley Combined Authority","Teignbridge District Council","Telford and Wrekin Borough Council","Tendring District Council","Test Valley Borough Council","Tewkesbury Borough Council","Thanet District Council","The Council of the Isles of Scilly","Three Rivers District Council","Thurrock Council","Tonbridge & Malling Borough Council","Torbay Council","Torridge District Council","Trafford Borough Council","Tunbridge Wells Borough Council","Uttlesford District Council","Vale of White Horse District Council","Wakefield City Council","Wales","Walsall Borough Council","Warrington Borough Council","Warwick District Council","Warwickshire County Council","Watford Borough Council","Waverley Borough Council","Wealden District Council","Welwyn Hatfield Borough Council","West Berkshire Council","West Devon District Council","West Lancashire District Council","West Lindsey District Council","West Midlands Combined Authority","West Northamptonshire Council","West of England Combined Authority","West Oxfordshire District Council","West Suffolk Council","West Sussex County Council","West Yorkshire Combined Authority","Westmorland and Furness Council","Wigan Borough Council","Wiltshire Council","Winchester City Council","Windsor and Maidenhead Borough Council","Wirral Borough Council","Woking Borough Council","Wokingham Borough Council","Wolverhampton City Council","Worcester City Council","Worcestershire County Council","Worthing Borough Council","Wychavon District Council ","Wyre Borough Council","Wyre Forest District Council"],Fo=["Not applicable","Cambridgeshire & Peterborough Combined Authority","Greater Manchester Combined Authority","Liverpool City Region Combined Authority","North East Joint Transport Committee","South Yorkshire Mayoral Combined Authority","Tees Valley Combined Authority","West Midlands Combined Authority","West of England Combined Authority","West Yorkshire Combined Authority"],Oo=["East of England","East Midlands","North East","North West","South East","South West","West Midlands","Yorkshire and the Humber"],Go=["Active Travel Fund","Capability Fund","City Region Sustainable Transport Settlements","Levelling Up Fund","Major Road Network","Transforming Cities Fund","Road Investment Strategy ","Housing Infrastructure Fund","National Cycle Network"],Io=["Feasibility","Preliminary","Outline design","Detailed design","Strategic business case","Pre-outline business case","Outline business case","Final business case"];function z(n){let o,e,t,a;return o=new Bo({props:{$$slots:{default:[Do]},$$scope:{ctx:n}}}),o.$on("click",n[3]),t=new yo({props:{$$slots:{default:[So]},$$scope:{ctx:n}}}),t.$on("click",n[7]),{c(){L(o.$$.fragment),e=v(),L(t.$$.fragment)},l(i){E(o.$$.fragment,i),e=W(i),E(t.$$.fragment,i)},m(i,r){N(o,i,r),M(i,e,r),N(t,i,r),a=!0},p(i,r){const g={};r&512&&(g.$$scope={dirty:r,ctx:i}),o.$set(g);const u={};r&512&&(u.$$scope={dirty:r,ctx:i}),t.$set(u)},i(i){a||(B(o.$$.fragment,i),B(t.$$.fragment,i),a=!0)},o(i){b(o.$$.fragment,i),b(t.$$.fragment,i),a=!1},d(i){i&&_(e),$(o,i),$(t,i)}}}function Do(n){let o;return{c(){o=q("Clear map")},l(e){o=Q(e,"Clear map")},m(e,t){M(e,o,t)},d(e){e&&_(o)}}}function So(n){let o;return{c(){o=q("Zoom to fit")},l(e){o=Q(e,"Zoom to fit")},m(e,t){M(e,o,t)},d(e){e&&_(o)}}}function _o(n){let o,e;return o=new go({props:{gj:n[0],show:!0}}),{c(){L(o.$$.fragment)},l(t){E(o.$$.fragment,t)},m(t,a){N(o,t,a),e=!0},p(t,a){const i={};a&1&&(i.gj=t[0]),o.$set(i)},i(t){e||(B(o.$$.fragment,t),e=!0)},o(t){b(o.$$.fragment,t),e=!1},d(t){$(o,t)}}}function wo(n){let o,e="Network Map",t,a,i,r,g=`Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.`,u,s,h,f,S,d,H,D,l,G,T;s=new mo({props:{label:"Import from GeoJSON file",onLoad:n[4]}}),f=new fo({props:{errorMessage:n[2]}});let C=n[0].features.length>0&&z(n);const I=n[6].default,y=no(I,n,n[9],null);function eo(c){n[8](c)}let Y={$$slots:{default:[_o]},$$scope:{ctx:n}};return n[1]!==void 0&&(Y.map=n[1]),l=new ho({props:Y}),P.push(()=>K(l,"map",eo)),{c(){o=A("h2"),o.textContent=e,t=v(),a=A("div"),i=A("div"),r=A("p"),r.textContent=g,u=v(),L(s.$$.fragment),h=v(),L(f.$$.fragment),S=v(),C&&C.c(),d=v(),y&&y.c(),H=v(),D=A("div"),L(l.$$.fragment),this.h()},l(c){o=F(c,"H2",{"data-svelte-h":!0}),J(o)!=="svelte-1fkh1ci"&&(o.textContent=e),t=W(c),a=F(c,"DIV",{style:!0});var m=O(a);i=F(m,"DIV",{style:!0});var p=O(i);r=F(p,"P",{"data-svelte-h":!0}),J(r)!=="svelte-1r7hkzo"&&(r.textContent=g),u=W(p),E(s.$$.fragment,p),h=W(p),E(f.$$.fragment,p),S=W(p),C&&C.l(p),d=W(p),y&&y.l(p),p.forEach(_),H=W(m),D=F(m,"DIV",{style:!0});var R=O(D);E(l.$$.fragment,R),R.forEach(_),m.forEach(_),this.h()},h(){k(i,"width","30%"),k(i,"overflow-y","scroll"),k(i,"padding","10px"),k(i,"border","1px solid black"),k(D,"position","relative"),k(D,"width","70%"),k(a,"display","flex"),k(a,"height","80vh")},m(c,m){M(c,o,m),M(c,t,m),M(c,a,m),w(a,i),w(i,r),w(i,u),N(s,i,null),w(i,h),N(f,i,null),w(i,S),C&&C.m(i,null),w(i,d),y&&y.m(i,null),w(a,H),w(a,D),N(l,D,null),T=!0},p(c,[m]){const p={};m&4&&(p.errorMessage=c[2]),f.$set(p),c[0].features.length>0?C?(C.p(c,m),m&1&&B(C,1)):(C=z(c),C.c(),B(C,1),C.m(i,d)):C&&(oo(),b(C,1,1,()=>{C=null}),io()),y&&y.p&&(!T||m&512)&&ro(y,I,c,c[9],T?lo(I,c[9],m,null):uo(c[9]),null);const R={};m&513&&(R.$$scope={dirty:m,ctx:c}),!G&&m&2&&(G=!0,R.map=c[1],V(()=>G=!1)),l.$set(R)},i(c){T||(B(s.$$.fragment,c),B(f.$$.fragment,c),B(C),B(y,c),B(l.$$.fragment,c),T=!0)},o(c){b(s.$$.fragment,c),b(f.$$.fragment,c),b(C),b(y,c),b(l.$$.fragment,c),T=!1},d(c){c&&(_(o),_(t),_(a)),$(s),$(f),C&&C.d(),y&&y.d(c),$(l)}}}function ko(n,o,e){let{$$slots:t={},$$scope:a}=o,{gj:i}=o,r,g="";so(()=>{h(!1)});function u(){window.confirm("Do you really want to erase the map data?")&&e(0,i={type:"FeatureCollection",features:[]})}function s(d,H){var D;e(2,g="");try{let l=JSON.parse(H);if(l.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((D=l.origin)!=null&&D.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(l.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");e(0,i=l),h(!0)}catch(l){e(2,g=`Error importing ${d}: ${l}`)}}function h(d){i.features.length>0&&r.fitBounds(Co(i),{padding:20,animate:d})}const f=()=>h(!0);function S(d){r=d,e(1,r)}return n.$$set=d=>{"gj"in d&&e(0,i=d.gj),"$$scope"in d&&e(9,a=d.$$scope)},[i,r,g,u,s,h,t,f,S,a]}class Po extends X{constructor(o){super(),x(this,o,ko,wo,Z,{gj:0})}}export{Po as C,Ro as S,Ao as a,Io as d,Go as f,Oo as r,Fo as t};
