!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t=t||self).jcommand=s()}(this,(function(){"use strict";class t{constructor(t,s="="){this.value=null,this.pre=null,this.next=null,this.raw=t;const[e,n=null]=t.split(s);this.command=e,this.value=n}}return new class{constructor(){if(this.args=[],this.commands=[],!process)throw new Error("CAN NOT find process, it seems not in command-line mode.");const[t,s,...e]=process.argv;this.execPath=t,this.filePath=s,this.args=e,this.commands=this.wrapArgs(e)}wrapArgs(s){let e=null;return s.map(s=>{const n=new t(s);return e&&(n.pre=e,e.next=n),e=n,n})}valid(t,s){return this.commands.forEach(e=>{t(e)&&s(e)}),this}option(t,s){const e=t instanceof Array?t:[t];return this.valid(t=>e.includes(t.command),s),this}match(t,s){return this.valid(s=>t.test(s.command),s),this}fuzzy(t,s,e){let n,i;e?(n=s,i=e):(n=["-","--"],i=s);const o=t instanceof Array?t:[t],r=n instanceof Array?n:[n],a=r.flatMap(t=>o.map(s=>t+s.toLowerCase()));return this.valid(t=>a.includes(t.command.toLowerCase())&&r.some(s=>s===t.command.slice(0,s.length)),i),this}}}));