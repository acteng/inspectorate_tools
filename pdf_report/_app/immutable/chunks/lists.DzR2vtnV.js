import{s as H,r as D,e as _,a as E,c as T,b as R,g as A,f,q as M,E as y,i as F,h as O,w as b}from"./scheduler.DGwhun8C.js";import{S as G,i as P,e as S,c as W,a as k,m as L,t as d,g as V,b as B,f as I,d as p}from"./index.B2vZYn3d.js";import"./index.UG5z7YY-.js";import{S as K}from"./Select.BRzAkQ1p.js";import{T as Y}from"./TextInput.BEuTpNfn.js";function m(r){let o,n,s;function h(u){r[10](u)}let c={label:"Enter a custom value"};return r[0]!==void 0&&(c.value=r[0]),o=new Y({props:c}),D.push(()=>S(o,"value",h)),{c(){W(o.$$.fragment)},l(u){k(o.$$.fragment,u)},m(u,C){L(o,u,C),s=!0},p(u,C){const i={};!n&&C&1&&(n=!0,i.value=u[0],b(()=>n=!1)),o.$set(i)},i(u){s||(d(o.$$.fragment,u),s=!0)},o(u){B(o.$$.fragment,u),s=!1},d(u){p(o,u)}}}function U(r){let o,n,s,h,c;function u(t){r[9](t)}let C={label:r[1],hint:r[2],choices:r[6],emptyOption:r[3],disabled:r[4]};r[5]!==void 0&&(C.value=r[5]),n=new K({props:C}),D.push(()=>S(n,"value",u)),n.$on("change",r[7]);let i=r[5]=="other"&&m(r);return{c(){o=_("div"),W(n.$$.fragment),h=E(),i&&i.c(),this.h()},l(t){o=T(t,"DIV",{class:!0});var l=R(o);k(n.$$.fragment,l),h=A(l),i&&i.l(l),l.forEach(f),this.h()},h(){M(o,"class","svelte-gtlbk6"),y(o,"grouped",r[5]=="other")},m(t,l){F(t,o,l),L(n,o,null),O(o,h),i&&i.m(o,null),c=!0},p(t,[l]){const a={};l&2&&(a.label=t[1]),l&4&&(a.hint=t[2]),l&8&&(a.emptyOption=t[3]),l&16&&(a.disabled=t[4]),!s&&l&32&&(s=!0,a.value=t[5],b(()=>s=!1)),n.$set(a),t[5]=="other"?i?(i.p(t,l),l&32&&d(i,1)):(i=m(t),i.c(),d(i,1),i.m(o,null)):i&&(V(),B(i,1,1,()=>{i=null}),I()),(!c||l&32)&&y(o,"grouped",t[5]=="other")},i(t){c||(d(n.$$.fragment,t),d(i),c=!0)},o(t){B(n.$$.fragment,t),B(i),c=!1},d(t){t&&f(o),p(n),i&&i.d()}}}function q(r,o,n){let{label:s}=o,{hint:h=""}=o,{choices:c}=o,{emptyOption:u=!1}=o,{disabled:C=!1}=o,{value:i}=o,t=new Set(c.map(e=>e[0])),l=[...c,["other","Other"]];u&&t.add("");function a(e){return t.has(e)?e:"other"}let g=a(i);function w(){n(0,i=g=="other"?"":g)}function v(e){g=e,n(5,g)}function N(e){i=e,n(0,i)}return r.$$set=e=>{"label"in e&&n(1,s=e.label),"hint"in e&&n(2,h=e.hint),"choices"in e&&n(8,c=e.choices),"emptyOption"in e&&n(3,u=e.emptyOption),"disabled"in e&&n(4,C=e.disabled),"value"in e&&n(0,i=e.value)},[i,s,h,u,C,g,l,w,c,v,N]}class Z extends G{constructor(o){super(),P(this,o,q,U,H,{label:1,hint:2,choices:8,emptyOption:3,disabled:4,value:0})}}let x=["N/A","Adur District Council","Amber Valley Borough Council","Arun District Council","Ashfield District Council","Ashford Borough Council","Babergh District Council","Barnsley Borough Council","Basildon Borough Council","Basingstoke & Deane Borough Council","Bassetlaw District Council","Bath and North East Somerset Council","Bedford Borough Council","Birmingham City Council","Blaby District Council","Blackburn with Darwen Borough Council","Blackpool Council","Bolsover District Council","Bolton Borough Council","Boston Borough Council","Bournemouth, Christchurch and Poole Council","Bracknell Forest Borough Council","Bradford City Council","Braintree District Council","Breckland District Council","Brentwood Borough Council","Brighton and Hove City Council","Bristol City Council","Broadland District Council","Bromsgrove District Council","Broxbourne Borough Council","Broxtowe Borough Council","Buckinghamshire Council","Burnley Borough Council","Bury Borough Council","Calderdale Borough Council","Cambridge City Council","Cambridgeshire and Peterborough Combined Authority","Cambridgeshire County Council","Cannock Chase District Council","Canterbury City Council","Castle Point District Council","Central Bedfordshire Council","Charnwood Borough Council","Chelmsford City Council","Cheltenham Borough Council","Cherwell District Council","Cheshire East Council","Cheshire West and Chester Council","Chesterfield Borough Council","Chichester District Council","Chorley Borough Council","City of London Corporation","City of York Council","Colchester Borough Council","Cornwall Council","Cotswold District Council","Coventry City Council","Crawley Borough Council","Cumberland Council","Dacorum Borough Council","Darlington Borough Council","Dartford Borough Council","Derby City Council","Derbyshire County Council","Derbyshire Dales District Council","Devon County Council","Doncaster Borough Council","Dorset Council","Dover District Council","Dudley Borough Council","Durham County Council","East Cambridgeshire District Council","East Devon District Council","East Hampshire District Council","East Hertfordshire District Council","East Lindsey District Council","East Riding of Yorkshire Council","East Staffordshire Borough Council","East Suffolk Council","East Sussex County Council","Eastbourne Borough Council","Eastleigh Borough Council","Elmbridge Borough Council","Epping Forest District Council","Epsom & Ewell Borough Council","Erewash Borough Council","Essex County Council","Exeter City Council","Fareham Borough Council","Fenland District Council","Folkestone and Hythe District Council","Forest of Dean District Council","Fylde Borough Council","Gateshead Borough Council","Gedling Borough Council","Gloucester City Council","Gloucestershire County Council","Gosport Borough Council","Gravesham Borough Council","Great Yarmouth Borough Council","Greater London Authority","Greater Manchester Combined Authority","Guildford Borough Council","Halton Borough Council","Hampshire County Council","Harborough District Council","Harlow District Council","Hart District Council","Hartlepool Borough Council","Hastings Borough Council","Havant Borough Council","Herefordshire Council","Hertfordshire County Council","Hertsmere Borough Council","High Peak Borough Council","Hinckley and Bosworth Borough Council","Horsham District Council","Hull City Council","Huntingdonshire District Council","Hyndburn Borough Council","Ipswich Borough Council","Isle of Wight Council","Kent County Council","Kings Lynn & West Norfolk Borough Council","Kirklees Borough Council","Knowsley Borough Council","Lancashire County Council","Lancaster City Council","Leeds City Council","Leicester City Council","Leicestershire County Council","Lewes District Council","Lichfield City Council","Lincoln City Council","Lincolnshire County Council","Liverpool City Council","Liverpool City Region Combined Authority","London Borough of Barking and Dagenham","London Borough of Barnet","London Borough of Bexley","London Borough of Brent","London Borough of Bromley","London Borough of Camden","London Borough of Croydon","London Borough of Ealing","London Borough of Enfield","London Borough of Hackney","London Borough of Hammersmith and Fulham","London Borough of Haringey","London Borough of Harrow","London Borough of Havering","London Borough of Hillingdon","London Borough of Hounslow","London Borough of Islington","Royal Borough of Kingston upon Thames","Royal Borough of Greenwich","Royal Borough of Kensington and Chelsea","London Borough of Lambeth","London Borough of Lewisham","London Borough of Merton","London Borough of Newham","London Borough of Redbridge","London Borough of Richmond upon Thames","London Borough of Southwark","London Borough of Sutton","London Borough of Tower Hamlets","London Borough of Waltham Forest","London Borough of Wandsworth","Westminster City Council","Luton Borough Council","Maidstone Borough Council","Maldon District Council","Malvern Hills District Council","Manchester City Council","Mansfield District Council","Medway Council","Melton Borough Council","Mid Devon District Council","Mid Suffolk District Council","Mid Sussex District Council","Middlesbrough Borough Council","Milton Keynes Council","Mole Valley District Council","New Forest District Council","Newark & Sherwood District Council","Newcastle Upon Tyne City Council","Newcastle-Under-Lyme Borough Council","Norfolk County Council","North Devon District Council","North East Derbyshire District Council","North East Joint Transport Committee","North East Lincolnshire Council","North Hertfordshire District Council","North Kesteven District Council","North Lincolnshire Council","North Norfolk District Council","North Northamptonshire Council","North Somerset Council","North Tyneside Borough Council","North Warwickshire Borough Council","North West Leicestershire District Council","North Yorkshire Council","Northern Ireland","Northumberland County Council","Norwich City Council","Nottingham City Council","Nottinghamshire County Council","Nuneaton & Bedworth Borough Council","Oadby & Wigston Borough Council","Oldham Borough Council","Oxford City Council","Oxfordshire County Council","Pendle Borough Council","Peterborough City Council","Plymouth City Council","Portsmouth City Council","Preston City Council","Reading Borough Council","Redcar and Cleveland Borough Council","Redditch Borough Council","Reigate & Banstead Borough Council","Ribble Valley Borough Council","Rochdale Borough Council","Rochford District Council","Rossendale Borough Council","Rother District Council","Rotherham Borough Council","Rugby Borough Council","Runnymede Borough Council","Rushcliffe Borough Council","Rushmoor Borough Council","Rutland County Council","Salford City Council","Sandwell Borough Council","Scotland","Sefton Borough Council","Sevenoaks District Council","Sheffield City Council","Shropshire Council","Slough Borough Council","Solihull Borough Council","Somerset Council","South Cambridgeshire District Council","South Derbyshire District Council","South Gloucestershire Council","South Hams District Council","South Holland District Council","South Kesteven District Council","South Norfolk District Council","South Oxfordshire District Council","South Ribble Borough Council","South Staffordshire District Council","South Tyneside Borough Council","South Yorkshire Mayoral Combined Authority","Southampton City Council","Southend-on-Sea Borough Council","Spelthorne Borough Council","St Albans City Council","St Helens Borough Council","Stafford Borough Council","Staffordshire County Council","Staffordshire Moorlands District Council","Stevenage Borough Council","Stockport Borough Council","Stockton-on-Tees Borough Council","Stoke-on-Trent City Council","Stratford on Avon District Council","Stroud District Council","Suffolk County Council","Sunderland City Council","Surrey County Council","Surrey Heath Borough Council","Swale Borough Council","Swindon Borough Council","Tameside Borough Council","Tamworth Borough Council","Tandridge District Council","Tees Valley Combined Authority","Teignbridge District Council","Telford and Wrekin Borough Council","Tendring District Council","Test Valley Borough Council","Tewkesbury Borough Council","Thanet District Council","The Council of the Isles of Scilly","Three Rivers District Council","Thurrock Council","Tonbridge & Malling Borough Council","Torbay Council","Torridge District Council","Trafford Borough Council","Tunbridge Wells Borough Council","Uttlesford District Council","Vale of White Horse District Council","Wakefield City Council","Wales","Walsall Borough Council","Warrington Borough Council","Warwick District Council","Warwickshire County Council","Watford Borough Council","Waverley Borough Council","Wealden District Council","Welwyn Hatfield Borough Council","West Berkshire Council","West Devon District Council","West Lancashire District Council","West Lindsey District Council","West Midlands Combined Authority","West Northamptonshire Council","West of England Combined Authority","West Oxfordshire District Council","West Suffolk Council","West Sussex County Council","West Yorkshire Combined Authority","Westmorland and Furness Council","Wigan Borough Council","Wiltshire Council","Winchester City Council","Windsor and Maidenhead Borough Council","Wirral Borough Council","Woking Borough Council","Wokingham Borough Council","Wolverhampton City Council","Worcester City Council","Worcestershire County Council","Worthing Borough Council","Wychavon District Council ","Wyre Borough Council","Wyre Forest District Council"],$=["Not applicable","Cambridgeshire & Peterborough Combined Authority","Greater Manchester Combined Authority","Liverpool City Region Combined Authority","North East Joint Transport Committee","South Yorkshire Mayoral Combined Authority","Tees Valley Combined Authority","West Midlands Combined Authority","West of England Combined Authority","West Yorkshire Combined Authority"],oo=["East of England","East Midlands","North East","North West","South East","South West","West Midlands","Yorkshire and the Humber"],io=["Active Travel Fund","Capability Fund","City Region Sustainable Transport Settlements","Levelling Up Fund","Major Road Network","Transforming Cities Fund","Road Investment Strategy ","Housing Infrastructure Fund","National Cycle Network"],no=["Feasibility","Preliminary","Outline design","Detailed design","Strategic business case","Pre-outline business case","Outline business case","Final business case"];export{Z as S,x as a,no as d,io as f,oo as r,$ as t};
