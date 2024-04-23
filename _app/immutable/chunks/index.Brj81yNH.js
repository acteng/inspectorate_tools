var h=Object.defineProperty;var c=(l,t,e)=>t in l?h(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var s=(l,t,e)=>(c(l,typeof t!="symbol"?t+"":t,e),e);import{H as d}from"./scheduler.DQXnSe5h.js";import"./index.B4AQako7.js";import"./paths.B-zplO20.js";import"./Modal.svelte_svelte_type_style_lang.2NhczJl8.js";class m{constructor(t,e,i,a,n){s(this,"prefix");s(this,"emptyState");s(this,"validate");s(this,"state");s(this,"currentFile");this.prefix=t,this.emptyState=e,this.validate=i,this.state=a,this.currentFile=n,this.initialLoad(),this.state.subscribe(o=>{let r=d(this.currentFile);r&&window.localStorage.setItem(this.key(r),JSON.stringify(o))}),this.currentFile.subscribe(o=>{o&&window.localStorage.setItem(this.key("last-opened-file"),o)})}key(t){return`${this.prefix}${t}`}loadFile(t){console.log(`Loading ${t}`);let e=window.localStorage.getItem(this.key(t));if(!e)throw new Error(`Key not in local storage: ${t}`);let i=JSON.parse(e);return this.validate(i),i}newFilename(){let t=this.getFileList();for(let e=1;e<=t.length+1;e++){let i=`untitled${e}`;if(!t.includes(i))return i}throw new Error("Couldn't make a new filename; this shouldn't be possible")}getFileList(){let t=[];for(let e=0;e<window.localStorage.length;e++){let i=window.localStorage.key(e);i.startsWith(this.prefix)&&i!=this.key("last-opened-file")&&t.push(i.slice(this.prefix.length))}return t.sort(),t}initialLoad(){console.log("Initial load; trying to open last opened file");let t=window.localStorage.getItem(this.key("last-opened-file"));if(t)try{let i=this.loadFile(t);this.currentFile.set(t),this.state.set(i);return}catch(i){window.alert(`The last opened file ${t} has a problem: ${i}`)}console.log("Starting with a new file");let e=this.newFilename();this.currentFile.set(e),this.state.set(this.emptyState())}}export{m as L};
