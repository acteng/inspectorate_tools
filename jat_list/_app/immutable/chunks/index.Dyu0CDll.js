var h=Object.defineProperty;var d=(l,t,e)=>t in l?h(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var s=(l,t,e)=>(d(l,typeof t!="symbol"?t+"":t,e),e);import{I as f}from"./scheduler.BBS-fkhU.js";import"./index.B8H3ypVf.js";import"./entry.BpBWrfRo.js";import"./paths.lf02Kn9b.js";/* empty css                                                       */class y{constructor(t,e,i,n,a){s(this,"prefix");s(this,"emptyState");s(this,"validate");s(this,"state");s(this,"currentFile");this.prefix=t,this.emptyState=e,this.validate=i,this.state=n,this.currentFile=a,this.initialLoad(),this.state.subscribe(o=>{let r=f(this.currentFile);r&&window.localStorage.setItem(this.key(r),JSON.stringify(o))}),this.currentFile.subscribe(o=>{o&&window.localStorage.setItem(this.key("last-opened-file"),o)})}key(t){return`${this.prefix}${t}`}loadFile(t){console.log(`Loading ${t}`);let e=window.localStorage.getItem(this.key(t));if(!e)throw new Error(`Key not in local storage: ${t}`);let i=JSON.parse(e);return this.validate(i),i}newFilename(){let t=this.getFileList();for(let e=1;e<=t.length+1;e++){let i=`untitled${e}`;if(!t.includes(i))return i}throw new Error("Couldn't make a new filename; this shouldn't be possible")}getFileList(){let t=[];for(let e=0;e<window.localStorage.length;e++){let i=window.localStorage.key(e);i.startsWith(this.prefix)&&i!=this.key("last-opened-file")&&t.push(i.slice(this.prefix.length))}return t.sort(),t}saveAndGetFileList(t,e){return window.localStorage.setItem(this.key(t),JSON.stringify(e)),this.getFileList()}initialLoad(){if(typeof window>"u"){console.log("Running outside of a browser, in test mode -- not loading from local storage");return}console.log("Initial load; trying to open last opened file");let t=window.localStorage.getItem(this.key("last-opened-file"));if(t)try{let i=this.loadFile(t);this.currentFile.set(t),this.state.set(i);return}catch(i){window.alert(`The last opened file ${t} has a problem: ${i}`)}console.log("Starting with a new file");let e=this.newFilename();this.currentFile.set(e),this.state.set(this.emptyState())}}export{y as L};
