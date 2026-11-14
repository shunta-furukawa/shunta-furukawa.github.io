var xe={start:20,end:53,halfWidth:1.55,bridgeX:25,bridgeHalf:1.7},sn=i=>8+Math.sin((i-20)*.17)*1.5,ba=[{x:43,z:sn(43),r:.75}];function gi(i,t,e=0){return i<xe.start||i>xe.end||Math.abs(i-xe.bridgeX)<xe.bridgeHalf-e||ba.some(n=>Math.hypot(i-n.x,t-n.z)<n.r-e)?!1:Math.abs(t-sn(i))<xe.halfWidth+e}function el(i,t,e){return e>.25||!gi(i,t,.3)}var Tr=3.7,nl=3.05;function il(i){return i.map((t,e)=>{if(e<i.length-24)return{...t,z:gi(t.x,t.z)?sn(t.x)+(t.z<sn(t.x)?-2.3:2.3):t.z,y:.8};let n=e-(i.length-24),s=Math.floor(n/4),r=n%4,o=31+s*3.7;return{...t,x:o,z:sn(o)+(r-1.5)*2.15,y:r===1||r===2?Tr:.8}})}function sl(i,t){return Math.hypot(i.x-t.x,i.z-t.z)<.9&&t.y>=i.y-.3&&t.y<=i.y+nl}var rl=(i,t)=>t.y>i.y+nl&&Math.hypot(i.x-t.x,i.z-t.z)<.9;var ol=[{id:"profile",place:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",title:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",artifact:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u30AB\u30FC\u30C9",model:"card",x:0,z:17,zone:"profile",facts:["Shunta Furukawa","ABEMA\u306E\u5E83\u544A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u958B\u767A","\u4E3B\u306A\u62C5\u5F53\u9818\u57DF\uFF1A\u5E83\u544A\u914D\u4FE1\u57FA\u76E4\u306E\u8A2D\u8A08\u30FB\u5B9F\u88C5\u30FB\u904B\u7528"],note:"",short:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",approach:[0,21],cost:5},{id:"career-0",place:"\u7D4C\u6B74\u30FB2009",title:"\u4ED5\u69D8\u66F8\u306E\u5C55\u793A",artifact:"\u4ED5\u69D8\u66F8\u306E\u5DFB\u7269",model:"document",x:-21,z:6,zone:"career",facts:["2009\u5E744\u6708\u301C11\u6708\uFF1A\u30B7\u30B9\u30C6\u30E0\u958B\u767A\u4F1A\u793E\u306B\u52E4\u52D9","\u5927\u898F\u6A21\u306A\u696D\u52D9\u30B7\u30B9\u30C6\u30E0\u306E\u4FDD\u5B88\u30FB\u90E8\u5206\u6539\u4FEE\u306B\u5F93\u4E8B","\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30C6\u30B9\u30C8\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u4FEE\u6B63\u3001\u4ED5\u69D8\u66F8\u4F5C\u6210\u3092\u62C5\u5F53"],note:"\u5F53\u6642\u306F\u3001\u30C1\u30FC\u30E0\u306E\u4E00\u54E1\u3068\u3057\u3066\u54C1\u8CEA\u3092\u5B88\u308B\u3053\u3068\u3092\u5927\u5207\u306B\u3057\u3066\u3044\u307E\u3057\u305F\u3002",short:"\u7D4C\u6B74\u30FB2009",career:0,approach:[-16,6],cost:15},{id:"career-1",place:"\u7D4C\u6B74\u30FB2009\u20132013",title:"\u30E2\u30D0\u30A4\u30EB\u7AEF\u672B",artifact:"\u5C0F\u3055\u306A\u7AEF\u672B",model:"phone",x:-24,z:-3,zone:"career",facts:["2009\u5E7412\u6708\u301C2013\u5E746\u6708\uFF1A\u30E2\u30D0\u30A4\u30EB\u30A2\u30D7\u30EA\u958B\u767A\u306E\u30D9\u30F3\u30C1\u30E3\u30FC\u4F01\u696D\u306B\u52E4\u52D9","\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5BFE\u5FDC\u30B2\u30FC\u30E0\u306E\u753B\u9762\u8A2D\u8A08\u30FB\u6A5F\u80FD\u30C7\u30B6\u30A4\u30F3\u3092\u62C5\u5F53","\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306EUI\u30FBUX\u8A2D\u8A08\u306B\u53C2\u52A0","\u53D7\u8A17\u30A2\u30D7\u30EA\u958B\u767A\u3001\u9032\u6357\u7BA1\u7406\u3001\u30E1\u30F3\u30D0\u30FC\u9593\u306E\u8ABF\u6574\u3082\u62C5\u5F53"],note:"\u753B\u9762\u306E\u898B\u305F\u76EE\u3060\u3051\u3067\u306A\u304F\u3001\u30B2\u30FC\u30E0\u3092\u4F7F\u3046\u4F53\u9A13\u5168\u4F53\u3092\u8003\u3048\u3066\u3044\u307E\u3057\u305F\u3002",short:"\u7D4C\u6B74\u30FB2009\u20132013",career:1,approach:[-21,4],cost:15},{id:"career-2",place:"\u7D4C\u6B74\u30FB2013\u20132015",title:"\u5B66\u3073\u306E\u30B3\u30F3\u30D1\u30B9",artifact:"\u30B7\u30B9\u30C6\u30E0\u306E\u30B3\u30F3\u30D1\u30B9",model:"compass",x:-20,z:-14,zone:"career",facts:["2013\u5E749\u6708\u301C2015\u5E749\u6708\uFF1A\u30B7\u30B9\u30C6\u30E0\u30C7\u30B6\u30A4\u30F3\u3092\u5C02\u653B\u3059\u308B\u5927\u5B66\u9662\u306B\u5728\u7C4D","\u30B7\u30B9\u30C6\u30E0\u601D\u8003\u30FB\u30C7\u30B6\u30A4\u30F3\u601D\u8003\u3092\u5B66\u3073\u3001\u4F01\u696D\u3068\u306E\u5171\u540C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u53C2\u52A0","\u30B9\u30A4\u30B9\u3078\u306E\u4EA4\u63DB\u7559\u5B66\u3067\u3001\u60C5\u5831\u5DE5\u5B66\u30FB\u7D4C\u6E08\u5DE5\u5B66\u306E\u6388\u696D\u3092\u82F1\u8A9E\u3067\u53D7\u8B1B"],note:"\u5B9F\u52D9\u3067\u611F\u3058\u305F\u8AB2\u984C\u3092\u3001\u30B7\u30B9\u30C6\u30E0\u5168\u4F53\u3068\u3057\u3066\u6349\u3048\u308B\u65B9\u6CD5\u306B\u95A2\u5FC3\u304C\u3042\u308A\u307E\u3057\u305F\u3002",short:"\u7D4C\u6B74\u30FB2013\u20132015",career:2,approach:[-23,-7],cost:15},{id:"career-3",place:"\u7D4C\u6B74\u30FB2015\u20132018",title:"\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u306E\u8A08\u5668",artifact:"\u30C7\u30FC\u30BF\u306E\u8A08\u5668",model:"chart",x:-10,z:-23,zone:"career",facts:["2015\u5E7410\u6708\u301C2018\u5E7410\u6708\uFF1A\u5927\u624B\u901A\u4FE1\u4F1A\u793E\u306E\u65B0\u898F\u4E8B\u696D\u958B\u767A\u90E8\u9580\u306B\u52E4\u52D9","\u30C7\u30FC\u30BF\u5206\u6790\u3092\u57FA\u76E4\u3068\u3059\u308B\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u30C4\u30FC\u30EB\u3092\u8A2D\u8A08\u30FB\u958B\u767A","\u5229\u7528\u8005\u306E\u5C5E\u6027\u60C5\u5831\u306B\u5FDC\u3058\u305F\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u4ED5\u7D44\u307F\u3092\u69CB\u7BC9","\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30EA\u30FC\u30C0\u30FC\u3068\u3057\u3066\u95A2\u4FC2\u90E8\u9580\u30FB\u5916\u90E8\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u8ABF\u6574"],note:"",short:"\u7D4C\u6B74\u30FB2015\u20132018",career:3,approach:[-15,-18],cost:15},{id:"career-4",place:"\u7D4C\u6B74\u30FB2018\u2013",title:"\u5E83\u544A\u696D\u52D9\u306E\u64CD\u4F5C\u76E4",artifact:"\u5E83\u544A\u57FA\u76E4\u306E\u64CD\u4F5C\u76E4",model:"console",x:2,z:-25,zone:"career",facts:["2018\u5E7411\u6708\u301C\uFF1A\u52D5\u753B\u5E83\u544A\u306E\u914D\u4FE1\u57FA\u76E4\u306B\u95A2\u308F\u308B\u696D\u52D9\u3092\u62C5\u5F53","\u5165\u793E\u5F53\u521D\u306F\u5E83\u544A\u696D\u52D9\u306E\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3\u3001\u81EA\u52D5\u5316\u3001\u8981\u4EF6\u6574\u7406\u30FB\u9032\u884C\u7BA1\u7406\u3092\u62C5\u5F53","\u305D\u306E\u5F8C\u3001\u8A8D\u8A3C\u8A8D\u53EF\u3001DSP\u30B3\u30F3\u30BD\u30FC\u30EB\u7CFBAPI\u3001\u30EC\u30DD\u30FC\u30C8\u51FA\u529B\u57FA\u76E4\u306A\u3069\u3092\u958B\u767A","\u8CA0\u8377\u5BFE\u7B56\u3001\u30AD\u30E3\u30D1\u30B7\u30C6\u30A3\u30D7\u30E9\u30F3\u30CB\u30F3\u30B0\u3001CI/CD\u30FBIaC\u79FB\u884C\u306B\u3082\u5F93\u4E8B"],note:"\u8A2D\u8A08\u3067\u306F\u4FDD\u5B88\u6027\u30FB\u62E1\u5F35\u6027\u30FB\u904B\u7528\u6027\u3092\u610F\u8B58\u3057\u3066\u3044\u307E\u3059\u3002",short:"\u7D4C\u6B74\u30FB2018\u2013",career:4,approach:[-4,-24],cost:15},{id:"work-0",place:"\u4ED5\u4E8B\u30FB\u914D\u4FE1",title:"\u30E9\u30A4\u30D6\u914D\u4FE1\u306E\u6A21\u578B",artifact:"\u914D\u4FE1\u306E\u30DF\u30CB\u30C1\u30E5\u30A2",model:"broadcast",x:13,z:-14,zone:"work",facts:["\u5927\u578B\u30E9\u30A4\u30D6\u914D\u4FE1\u74B0\u5883\u306B\u5411\u3051\u305F\u5E83\u544A\u914D\u4FE1\u306E\u4ED5\u69D8\u7B56\u5B9A\u30FB\u30B7\u30B9\u30C6\u30E0\u5BFE\u5FDC\u3092\u62C5\u5F53","\u30DE\u30B9\u30BF\u9023\u643A\u3084\u3001\u914D\u4FE1\u5468\u8FBA\u306E\u8AB2\u984C\u8ABF\u6574\u3092\u5B9F\u65BD","\u65B0\u3057\u3044\u8996\u8074\u5F62\u614B\u306B\u5E83\u544A\u3092\u914D\u4FE1\u3067\u304D\u308B\u72B6\u614B\u3078\u6574\u5099"],note:"",short:"\u4ED5\u4E8B\u30FB\u914D\u4FE1",work:0,approach:[8,-10],cost:20},{id:"work-1",place:"\u4ED5\u4E8B\u30FB\u8CA0\u8377\u691C\u8A3C",title:"\u914D\u4FE1\u30B5\u30FC\u30D0\u30FC",artifact:"\u691C\u8A3C\u7528\u30B5\u30FC\u30D0\u30FC",model:"server",x:20,z:-12,zone:"work",facts:["\u5E83\u544A\u914D\u4FE1\u57FA\u76E4\u306E\u8CA0\u8377\u8A66\u9A13\u3092\u8A2D\u8A08\u30FB\u5B9F\u884C","\u60F3\u5B9A\u3055\u308C\u308B\u914D\u4FE1\u898F\u6A21\u306B\u5BFE\u3057\u3066\u3001\u30B9\u30B1\u30FC\u30EB\u30A2\u30A6\u30C8\u306B\u3088\u308B\u5BFE\u5FDC\u53EF\u80FD\u6027\u3092\u691C\u8A3C","\u5927\u578B\u6848\u4EF6\u306B\u5411\u3051\u305F\u30AD\u30E3\u30D1\u30B7\u30C6\u30A3\u306E\u898B\u901A\u3057\u3092\u5177\u4F53\u5316"],note:"",short:"\u4ED5\u4E8B\u30FB\u8CA0\u8377\u691C\u8A3C",work:1,approach:[16,-11],cost:20},{id:"work-2",place:"\u4ED5\u4E8B\u30FB\u57FA\u76E4\u6539\u5584",title:"\u6574\u5099\u306E\u9053\u5177",artifact:"\u57FA\u76E4\u6574\u5099\u306E\u30EC\u30F3\u30C1",model:"wrench",x:22,z:-6,zone:"work",facts:["IaC\u30C4\u30FC\u30EB\u3068CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3078\u306E\u79FB\u884C\u3092\u63A8\u9032","\u904B\u7528\u306E\u5B89\u5B9A\u5316\u3068\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u518D\u767A\u9632\u6B62\u7B56\u306E\u7D44\u307F\u8FBC\u307F\u3092\u5B9F\u65BD","\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u57FA\u76E4\u306E\u6574\u5099\u306B\u3082\u5F93\u4E8B"],note:"",short:"\u4ED5\u4E8B\u30FB\u57FA\u76E4\u6539\u5584",work:2,approach:[21,-10],cost:20},{id:"skills",place:"\u4ED5\u4E8B\u30FB\u9053\u5177\u68DA",title:"\u6280\u8853\u306E\u9053\u5177\u7BB1",artifact:"\u30A8\u30F3\u30B8\u30CB\u30A2\u306E\u9053\u5177\u7BB1",model:"toolbox",x:23,z:2,zone:"work",facts:["Go\u3001Kubernetes\u3001Terraform\u3001GCP / AWS\u306A\u3069\u3092\u4F7F\u7528","\u5404\u6280\u8853\u306E\u7D4C\u9A13\u306F\u3001\u9053\u5177\u68DA\u306E\u8AAC\u660E\u304B\u3089\u78BA\u8A8D\u3067\u304D\u307E\u3059"],note:"",short:"\u4ED5\u4E8B\u30FB\u9053\u5177\u68DA",approach:[22,-3],cost:20},{id:"philosophy",place:"\u8003\u3048\u65B9",title:"\u5E83\u544A\u3068\u306E\u4F1A\u8A71\u306E\u672C",artifact:"\u51FA\u4F1A\u3044\u3092\u8003\u3048\u308B\u672C",model:"book",x:-10,z:-5,zone:"philosophy",facts:[],note:"",short:"\u8003\u3048\u65B9",approach:[-5,-5],cost:20},{id:"knowledge",place:"\u8CC7\u6599\u5BA4",title:"\u5E83\u544A\u6280\u8853\u306E\u8CC7\u6599",artifact:"\u5E83\u544A\u306E\u3057\u304F\u307F\u306E\u672C",model:"book",x:16,z:13,zone:"knowledge",facts:[],note:"",short:"\u8CC7\u6599\u5BA4",approach:[18,10],cost:20},{id:"connect",place:"\u6700\u8FD1\u306E\u767A\u4FE1",title:"\u5916\u3068\u3064\u306A\u304C\u308B\u7121\u7DDA\u6A5F",artifact:"\u901A\u4FE1\u6A5F",model:"radio",x:-10,z:15,zone:"connect",facts:[],note:"",short:"\u6700\u8FD1\u306E\u767A\u4FE1",approach:[-5,14],cost:30}];var re=1.6,bu=35*re,cl=8,Ta=13,Pn={x:0,z:21*re},al=.48,_i=ol,wa=_i.map(i=>({...i,x:i.x*re,z:i.z*re}));function ll(i,t,e){let n=Math.max(1,Math.hypot(i,t));return{x:(i*Math.cos(e)+t*Math.sin(e))/n,z:(-i*Math.sin(e)+t*Math.cos(e))/n}}function hl(i,t,e,n=()=>!0){let{x:s,z:r}=i,o=Math.max(1,Math.ceil(Math.hypot(t.x,t.z)/.2)),a=(c,l)=>n(c,l)&&Math.hypot(c,l)<=bu-al&&!e.some(u=>Math.hypot(c-u.x,l-u.z)<u.r+al);for(let c=0;c<o;c++){let l=s+t.x/o;a(l,r)&&(s=l);let u=r+t.z/o;a(s,u)&&(r=u)}return{x:s,z:r}}function Ea(i){let t=null,e=3.5;for(let n of wa){let s=Math.hypot(n.x-i.x,n.z-i.z);s<e&&(t=n,e=s)}return t}var Tu=[{width:3,points:[[0,23],[0,17],[0,4],[0,-7],[2,-24]]},{width:2.4,points:[[-9,14],[0,14],[15,13]]},{width:2.3,points:[[-20,7],[-8,4],[0,4],[22,1]]},{width:2.3,points:[[-20,7],[-23,-2],[-19,-13],[-9,-22],[2,-24]]},{width:2.3,points:[[0,-7],[-9,-4]]},{width:2.3,points:[[0,-7],[14,-11],[22,1],[15,13]]}];function wu(i){let t=[i[0]],e=(r,o)=>Math.hypot(o[0]-r[0],o[1]-r[1]),n=(r,o,a)=>[r[0]+(o[0]-r[0])*a,r[1]+(o[1]-r[1])*a];function s(r){let o=t[t.length-1],a=Math.max(1,Math.ceil(e(o,r)/.35));for(let c=1;c<=a;c++)t.push(n(o,r,c/a))}for(let r=1;r<i.length-1;r++){let o=i[r-1],a=i[r],c=i[r+1],l=e(o,a),u=e(a,c),h=Math.min(2.5,l*.35,u*.35),d=n(a,o,h/l),p=n(a,c,h/u);s(d);for(let g=1;g<=20;g++){let x=g/20;t.push(n(n(d,a,x),n(a,p,x),x))}}return s(i[i.length-1]),t}var wr=Tu.map(i=>({width:i.width*1.15,points:wu(i.points.map(([t,e])=>[t*re,e*re]))}));var Eu=[[0,12.5,3.12],[-26,3,2.5],[-26,-10,2.5],[-9,-27,3.12],[16,-20,5.72],[-10,-10,3.12],[19,18,2.6],[-10,10.5,3.12]],Aa=[[0,32],[0,30],[0,28]];for(let i of wr)for(let[t,e]of i.points)Math.hypot(t,e)>53||Aa.some(n=>Math.hypot(n[0]-t,n[1]-e)<2.8)||Eu.some(([n,s,r])=>Math.hypot(n*1.6-t,s*1.6-e)<r+1)||wa.some(n=>Math.hypot(n.x-t,n.z-e)<1)||Aa.push([t,e]);var Au=[[-4.73,18.04,.8,5],[-45.75,6.52,.8,5],[-45.75,-17.72,.8,5],[-16.36,-47.93,.8,5],[28.55,-39.13,.8,5],[-12.38,-19.62,.8,5],[33.65,32.05,.8,5],[-21.12,16.8,.8,5],[0,41,.8,5],[0,46,.8,5],[0,52,.8,10],[-14.66,10.57,.8,5],[-18.6,12.77,.8,5],[-16,12.8,Tr,10],[16.93,46.51,.8,10],[47.81,12.81,.8,10],[37.92,-31.82,.8,10],[-40.55,28.39,.8,10],[-16.93,46.51,.8,10],[25,9.13,.8,5],[0,-11.2,Tr,10],[48,-16,.8,5],[-34,-40,.8,5],[18,-26,.8,5],[14,-48,.8,5],[-26,34,.8,5],[34,-14,.8,5]],ul=il(Aa.slice(0,101).map(([i,t],e)=>({id:e,x:i,z:t}))),Ca=[...ul.map(i=>({...i,value:i.id===2||i.y>2||i.id>2&&i.id<77&&i.id%9===4?5:1})),...Au.map(([i,t,e,n],s)=>({id:ul.length+s,x:i,z:t,y:e,value:n}))],O0=new Map(Ca.map(i=>[i.id,i.value]));function dl(i,t){if(i.phase==="ground")return i;if(i.phase==="launch"){let s=i.delay-t;return s>0?{...i,delay:s}:{phase:"air",y:0,v:7.8}}if(i.phase==="land"){let s=i.delay-t;return s>0?{...i,delay:s}:{phase:"ground",y:0,v:0}}let e=i.v-20*t,n=i.y+e*t;return n<=0?{phase:"land",y:0,v:0,delay:.16}:{phase:"air",y:n,v:e}}var kl=0,dc=1,Vl=2;var fc=1,To=2,En=3,Bn=0,Ue=1,Ce=2,Wn=0,bi=1,lr=2,pc=3,mc=4,Gl=5,si=100,Hl=101,Wl=102,Xl=103,ql=104,Yl=200,Zl=201,Jl=202,$l=203,Jr=204,$r=205,Kl=206,Ql=207,jl=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,wo=0,Eo=1,Ao=2,Ti=3,Co=4,Ro=5,Io=6,Po=7,gc=0,oh=1,ah=2,Xn=0,ch=1,lh=2,hh=3,fs=4,uh=5,dh=6,fh=7;var _c=300,Li=301,Di=302,Lo=303,Do=304,hr=306,ri=1e3,ii=1001,Kr=1002,Xe=1003,ph=1004;var ur=1005;var Ke=1006,Uo=1007;var An=1008;var gn=1009,xc=1010,yc=1011,ps=1012,No=1013,di=1014,_n=1015,ms=1016,Fo=1017,Oo=1018,gs=1020,vc=35902,Mc=35899,Sc=1021,bc=1022,an=1023,ns=1026,_s=1027,Bo=1028,zo=1029,Tc=1030,ko=1031;var Vo=1033,dr=33776,fr=33777,pr=33778,mr=33779,Go=35840,Ho=35841,Wo=35842,Xo=35843,qo=36196,Yo=37492,Zo=37496,Jo=37808,$o=37809,Ko=37810,Qo=37811,jo=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,ra=37818,oa=37819,aa=37820,ca=37821,la=36492,ha=36494,ua=36495,da=36283,fa=36284,pa=36285,ma=36286;var Os=2300,Qr=2301,Zr=2302,ec=2400,nc=2401,ic=2402;var mh=3200,gh=3201;var wc=0,_h=1,qn="",be="srgb",wi="srgb-linear",Bs="linear",ue="srgb";var Si=7680;var sc=519,xh=512,yh=513,vh=514,Ec=515,Mh=516,Sh=517,bh=518,Th=519,rc=35044,ga=35048;var Ac="300 es",dn=2e3,zs=2001;var zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=1234567,Ds=Math.PI/180,is=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Cc(i,t){return(i%t+t)%t}function Cu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ru(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function Iu(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function Pu(i,t=1){return t-Math.abs(Cc(i,t*2)-t)}function Lu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Du(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nu(i,t){return i+Math.random()*(t-i)}function Fu(i){return i*(.5-Math.random())}function Ou(i){i!==void 0&&(fl=i);let t=fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bu(i){return i*Ds}function zu(i){return i*is}function ku(i){return(i&i-1)===0&&i!==0}function Vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xs={DEG2RAD:Ds,RAD2DEG:is,generateUUID:Ui,clamp:te,euclideanModulo:Cc,mapLinear:Cu,inverseLerp:Ru,lerp:Us,damp:Iu,pingpong:Pu,smoothstep:Lu,smootherstep:Du,randInt:Uu,randFloat:Nu,randFloatSpread:Fu,seededRandom:Ou,degToRad:Bu,radToDeg:zu,isPowerOfTwo:ku,ceilPowerOfTwo:Vu,floorPowerOfTwo:Gu,setQuaternionFromProperEuler:Hu,normalize:ke,denormalize:ts},mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let m=1-a,f=c*d+l*p+u*g+h*x,A=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let R=Math.sqrt(b),C=Math.atan2(R,f*A);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}let y=a*A;if(c=c*m+d*y,l=l*m+p*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ra=new I,pl=new kn,Zt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],A=s[1],b=s[4],y=s[7],R=s[2],C=s[5],L=s[8];return r[0]=o*x+a*A+c*R,r[3]=o*m+a*b+c*C,r[6]=o*f+a*y+c*L,r[1]=l*x+u*A+h*R,r[4]=l*m+u*b+h*C,r[7]=l*f+u*y+h*L,r[2]=d*x+p*A+g*R,r[5]=d*m+p*b+g*C,r[8]=d*f+p*y+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new Zt;function Rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){let i=ks("canvas");return i.style.display="block",i}var ml={};function ss(i){i in ml||(ml[i]=!0,console.warn(i))}function Eh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var gl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wu(){let i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}var oe=Wu();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=ks("canvas")),Vi.width=t.width,Vi.height=t.height;let s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xu=0,rs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pa(s[o].image)):r.push(Pa(s[o]))}else r=Pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qu=0,La=new I,Ve=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ii,s=ii,r=Ke,o=An,a=an,c=gn,l=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ui(),this.name="",this.source=new rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=_c;Ve.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(p+1)/2,R=(f+1)/2,C=(u+d)/4,L=(h+x)/4,O=(g+m)/4;return b>y&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=C/n,r=L/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=O/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=L/r,s=O/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-x)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},to=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ve(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends to{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vs=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eo=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),Ar.subVectors(this.max,ws),Gi.subVectors(t.a,ws),Hi.subVectors(t.b,ws),Wi.subVectors(t.c,ws),$n.subVectors(Hi,Gi),Kn.subVectors(Wi,Hi),xi.subVectors(Gi,Wi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-xi.z,xi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,xi.z,0,-xi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-xi.y,xi.x,0];return!Da(e,Gi,Hi,Wi,Ar)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,Gi,Hi,Wi,Ar))?!1:(Cr.crossVectors($n,Kn),e=[Cr.x,Cr.y,Cr.z],Da(e,Gi,Hi,Wi,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ln=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Er=new bn,Gi=new I,Hi=new I,Wi=new I,$n=new I,Kn=new I,xi=new I,ws=new I,Ar=new I,Cr=new I,yi=new I;function Da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);let a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Yu=new bn,Es=new I,Ua=new I,oi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Ua)),this.expandByPoint(Es.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dn=new I,Na=new I,Rr=new I,Qn=new I,Fa=new I,Ir=new I,Oa=new I,no=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Na);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Qn.dot(this.direction),c=-Qn.dot(Rr),l=Qn.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Na).addScaledVector(Rr,d),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){Fa.subVectors(e,t),Ir.subVectors(n,t),Oa.crossVectors(Fa,Ir);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let c=a*this.direction.dot(Ir.crossVectors(Qn,Ir));if(c<0)return null;let l=a*this.direction.dot(Fa.cross(Qn));if(l<0||c+l>o)return null;let u=-a*Qn.dot(Oa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ju)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),jn.crossVectors(n,Je),jn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),jn.crossVectors(n,Je)),jn.normalize(),Pr.crossVectors(Je,jn),s[0]=jn.x,s[4]=Pr.x,s[8]=Je.x,s[1]=jn.y,s[5]=Pr.y,s[9]=Je.y,s[2]=jn.z,s[6]=Pr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],A=n[3],b=n[7],y=n[11],R=n[15],C=s[0],L=s[4],O=s[8],T=s[12],S=s[1],U=s[5],H=s[9],D=s[13],B=s[2],W=s[6],G=s[10],nt=s[14],X=s[3],ht=s[7],_t=s[11],Et=s[15];return r[0]=o*C+a*S+c*B+l*X,r[4]=o*L+a*U+c*W+l*ht,r[8]=o*O+a*H+c*G+l*_t,r[12]=o*T+a*D+c*nt+l*Et,r[1]=u*C+h*S+d*B+p*X,r[5]=u*L+h*U+d*W+p*ht,r[9]=u*O+h*H+d*G+p*_t,r[13]=u*T+h*D+d*nt+p*Et,r[2]=g*C+x*S+m*B+f*X,r[6]=g*L+x*U+m*W+f*ht,r[10]=g*O+x*H+m*G+f*_t,r[14]=g*T+x*D+m*nt+f*Et,r[3]=A*C+b*S+y*B+R*X,r[7]=A*L+b*U+y*W+R*ht,r[11]=A*O+b*H+y*G+R*_t,r[15]=A*T+b*D+y*nt+R*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],A=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,b=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,y=u*x*l-g*h*l+g*a*p-o*x*p-u*a*f+o*h*f,R=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,C=e*A+n*b+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=A*L,t[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*L,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*L,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*L,t[4]=b*L,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*L,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*L,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*p+e*c*p)*L,t[8]=y*L,t[9]=(g*h*r-u*x*r-g*n*p+e*x*p+u*n*f-e*h*f)*L,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*f+e*a*f)*L,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*p-e*a*p)*L,t[12]=R*L,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*m+e*h*m)*L,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*L,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,x=o*u,m=o*h,f=a*h,A=c*l,b=c*u,y=c*h,R=n.x,C=n.y,L=n.z;return s[0]=(1-(x+f))*R,s[1]=(p+y)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(d+f))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+b)*L,s[9]=(m-A)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let l=1/r,u=1/o,h=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=dn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===dn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=dn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===dn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===zs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new I,hn=new fe,Zu=new I(0,0,0),Ju=new I(1,1,1),jn=new I,Pr=new I,Je=new I,xl=new fe,yl=new kn,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$u=0,vl=new I,qi=new kn,Un=new fe,Lr=new I,As=new I,Ku=new I,Qu=new kn,Ml=new I(1,0,0),Sl=new I(0,1,0),bl=new I(0,0,1),Tl={type:"added"},ju={type:"removed"},Yi={type:"childadded",child:null},Ba={type:"childremoved",child:null},De=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new fn,n=new kn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Ml,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ml,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(As,Lr,this.up):Un.lookAt(Lr,As,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Un),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new I,Nn=new I,za=new I,Fn=new I,Zi=new I,Ji=new I,wl=new I,ka=new I,Va=new I,Ga=new I,Ha=new he,Wa=new he,Xa=new he,ni=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Nn.subVectors(n,e),za.subVectors(t,e);let o=un.dot(un),a=un.dot(Nn),c=un.dot(za),l=Nn.dot(Nn),u=Nn.dot(za),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ha.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ha.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ha,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Nn.subVectors(t,e),un.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),Ji.subVectors(r,n),ka.subVectors(t,n);let c=Zi.dot(ka),l=Ji.dot(ka);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,s);let u=Zi.dot(Va),h=Ji.dot(Va);if(u>=0&&h<=u)return e.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Zi,o);Ga.subVectors(t,r);let p=Zi.dot(Ga),g=Ji.dot(Ga);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ji,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return wl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(wl,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Cc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qa(o,r,t+1/3),this.g=qa(o,r,t),this.b=qa(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return oe.workingToColorSpace(Fe.copy(this),t),Math.round(te(Fe.r*255,0,255))*65536+Math.round(te(Fe.g*255,0,255))*256+Math.round(te(Fe.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=be){oe.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Dr);let n=Us(ti.h,Dr.h,e),s=Us(ti.s,Dr.s,e),r=Us(ti.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new jt;jt.NAMES=Ah;var td=0,ai=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=bi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=$r,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_e=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new I,Ur=new mt,ed=0,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}};var Hs=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},nd=0,rn=new fe,Ya=new De,$i=new I,$e=new bn,Cs=new bn,Le=new I,ve=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rc(t)?Ws:Hs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors($e.min,Cs.min),$e.expandByPoint(Le),Le.addVectors($e.max,Cs.max),$e.expandByPoint(Le)):($e.expandByPoint(Cs.min),$e.expandByPoint(Cs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Le.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Le.add($i)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<n.count;O++)a[O]=new I,c[O]=new I;let l=new I,u=new I,h=new I,d=new mt,p=new mt,g=new mt,x=new I,m=new I;function f(O,T,S){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[O].add(x),a[T].add(x),a[S].add(x),c[O].add(m),c[T].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let O=0,T=A.length;O<T;++O){let S=A[O],U=S.start,H=S.count;for(let D=U,B=U+H;D<B;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let b=new I,y=new I,R=new I,C=new I;function L(O){R.fromBufferAttribute(s,O),C.copy(R);let T=a[O];b.copy(T),b.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(C,T);let U=y.dot(c[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,U)}for(let O=0,T=A.length;O<T;++O){let S=A[O],U=S.start,H=S.count;for(let D=U,B=U+H;D<B;D+=3)L(t.getX(D+0)),L(t.getX(D+1)),L(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Oe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},El=new fe,vi=new no,Nr=new oi,Al=new I,Fr=new I,Or=new I,Br=new I,Za=new I,zr=new I,Cl=new I,kr=new I,Xt=class extends De{constructor(t=new ve,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Za.fromBufferAttribute(h,t),o?zr.addScaledVector(Za,u):zr.addScaledVector(Za.sub(e),u))}e.add(zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Nr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Nr,Al)===null||vi.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(El.copy(r).invert(),vi.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,R=b;y<R;y+=3){let C=a.getX(y),L=a.getX(y+1),O=a.getX(y+2);s=Vr(this,f,t,n,l,u,h,C,L,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let A=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Vr(this,o,t,n,l,u,h,A,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,R=b;y<R;y+=3){let C=y,L=y+1,O=y+2;s=Vr(this,f,t,n,l,u,h,C,L,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let A=m,b=m+1,y=m+2;s=Vr(this,o,t,n,l,u,h,A,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function id(i,t,e,n,s,r,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Bn,a),c===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:i}}function Vr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Fr),i.getVertexPosition(c,Or),i.getVertexPosition(l,Br);let u=id(i,t,e,n,Fr,Or,Br,Cl);if(u){let h=new I;ni.getBarycoord(Cl,Fr,Or,Br,h),s&&(u.uv=ni.getInterpolatedAttribute(s,a,c,l,h,new mt)),r&&(u.uv1=ni.getInterpolatedAttribute(r,a,c,l,h,new mt)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};ni.getNormal(Fr,Or,Br,d.normal),u.face=d,u.barycoord=h}return u}var on=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function g(x,m,f,A,b,y,R,C,L,O,T){let S=y/L,U=R/O,H=y/2,D=R/2,B=C/2,W=L+1,G=O+1,nt=0,X=0,ht=new I;for(let _t=0;_t<G;_t++){let Et=_t*U-D;for(let kt=0;kt<W;kt++){let Kt=kt*S-H;ht[x]=Kt*A,ht[m]=Et*b,ht[f]=B,l.push(ht.x,ht.y,ht.z),ht[x]=0,ht[m]=0,ht[f]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(kt/L),h.push(1-_t/O),nt+=1}}for(let _t=0;_t<O;_t++)for(let Et=0;Et<L;Et++){let kt=d+Et+W*_t,Kt=d+Et+W*(_t+1),ie=d+(Et+1)+W*(_t+1),zt=d+(Et+1)+W*_t;c.push(kt,Kt,zt),c.push(Kt,ie,zt),X+=6}a.addGroup(p,X,T),p+=X,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=Ni(i[e]);for(let s in n)t[s]=n[s]}return t}function sd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Ch={clone:Ni,merge:Be},rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xs=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new I,Rl=new mt,Il=new mt,Ae=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Il),e.subVectors(Il,Rl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,Qi=1,io=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(Ki,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Ae(Ki,Qi,t,e);r.layers=this.layers,this.add(r);let o=new Ae(Ki,Qi,t,e);o.layers=this.layers,this.add(o);let a=new Ae(Ki,Qi,t,e);a.layers=this.layers,this.add(a);let c=new Ae(Ki,Qi,t,e);c.layers=this.layers,this.add(c);let l=new Ae(Ki,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends Ve{constructor(t=[],e=Li,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Wn});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===An&&(e.minFilter=Ke),new io(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},le=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},ad={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ys=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ei=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var as=class extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Xe,u=Xe,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new fe,Pl=new fe,Gr=[],Ll=new bn,cd=new fe,Rs=new Xt,Is=new oi,Ai=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Ll.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(Ll)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Is.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),Pl.multiplyMatrices(n,ji),Rs.matrixWorld=Pl,Rs.raycast(t,Gr);for(let o=0,a=Gr.length;o<a;o++){let c=Gr[o];c.instanceId=r,c.object=this,e.push(c)}Gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(s*this.count),s,this.count,Bo,_n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ja=new I,ld=new I,hd=new Zt,vn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ja.subVectors(n,e).cross(ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hd.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new oi,ud=new mt(.5,.5),Hr=new I,cs=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],A=r[12],b=r[13],y=r[14],R=r[15];if(s[0].setComponents(l-o,p-u,f-g,R-A).normalize(),s[1].setComponents(l+o,p+u,f+g,R+A).normalize(),s[2].setComponents(l+a,p+h,f+x,R+b).normalize(),s[3].setComponents(l-a,p-h,f-x,R-b).normalize(),n)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,p-d,f-m,R-y).normalize();else if(s[4].setComponents(l-c,p-d,f-m,R-y).normalize(),e===dn)s[5].setComponents(l+c,p+d,f+m,R+y).normalize();else if(e===zs)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);let e=ud.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tn=class extends Ve{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Js=class extends Ve{constructor(t,e,n=di,s,r,o,a=Xe,c=Xe,l,u=ns,h=1){if(u!==ns&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$s=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Vn=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,u=new mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Se=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,x=[],m=n/2,f=0;A(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function A(){let y=new I,R=new I,C=0,L=(e-t)/n;for(let O=0;O<=r;O++){let T=[],S=O/r,U=S*(e-t)+t;for(let H=0;H<=s;H++){let D=H/s,B=D*c+a,W=Math.sin(B),G=Math.cos(B);R.x=U*W,R.y=-S*n+m,R.z=U*G,h.push(R.x,R.y,R.z),y.set(W,L,G).normalize(),d.push(y.x,y.y,y.z),p.push(D,1-S),T.push(g++)}x.push(T)}for(let O=0;O<s;O++)for(let T=0;T<r;T++){let S=x[T][O],U=x[T+1][O],H=x[T+1][O+1],D=x[T][O+1];(t>0||T!==0)&&(u.push(S,U,D),C+=3),(e>0||T!==r-1)&&(u.push(U,H,D),C+=3)}l.addGroup(f,C,0),f+=C}function b(y){let R=g,C=new mt,L=new I,O=0,T=y===!0?t:e,S=y===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let B=H/s*c+a,W=Math.cos(B),G=Math.sin(B);L.x=T*G,L.y=m*S,L.z=T*W,h.push(L.x,L.y,L.z),d.push(0,S,0),C.x=W*.5+.5,C.y=G*.5*S+.5,p.push(C.x,C.y),g++}for(let H=0;H<s;H++){let D=R+H,B=U+H;y===!0?u.push(B,B+1,D):u.push(B+1,B,D),O+=3}l.addGroup(f,O,y===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ls=class i extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new mt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new fe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hs=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ro=class extends hs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Wr=new I,$a=new Pc,Ka=new Pc,Qa=new Pc,je=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),l=Wr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),$a.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),Ka.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),Qa.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ka.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Qa.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set($a.calc(c),Ka.calc(c),Qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function dd(i,t){let e=1-i;return e*e*t}function fd(i,t){return 2*(1-i)*i*t}function pd(i,t){return i*i*t}function Ns(i,t,e,n){return dd(i,t)+fd(i,e)+pd(i,n)}function md(i,t){let e=1-i;return e*e*e*t}function gd(i,t){let e=1-i;return 3*e*e*i*t}function _d(i,t){return 3*(1-i)*i*i*t}function xd(i,t){return i*i*i*t}function Fs(i,t,e,n,s){return md(i,t)+gd(i,e)+_d(i,n)+xd(i,s)}var ci=class extends Qe{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,s.x,r.x,o.x,a.x),Fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends Qe{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,s.x,r.x,o.x,a.x),Fs(t,s.y,r.y,o.y,a.y),Fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ks=class extends Qe{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Qe{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qs=class extends Qe{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},js=class extends Qe{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y),Ns(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gn=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Dl(a,c.x,l.x,u.x,h.x),Dl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},co=Object.freeze({__proto__:null,ArcCurve:ro,CatmullRomCurve3:je,CubicBezierCurve:ci,CubicBezierCurve3:oo,EllipseCurve:hs,LineCurve:Ks,LineCurve3:ao,QuadraticBezierCurve:Qs,QuadraticBezierCurve3:js,SplineCurve:Gn}),lo=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new co[s.type]().fromJSON(s))}return this}},tr=class extends lo{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ks(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Qs(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ci(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gn(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new hs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mn=class extends tr{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new tr().fromJSON(s))}return this}};function yd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Rh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Td(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return er(r,o,e,a,c,l,0),o}function Rh(i,t,e,n,s){let r;if(s===Nd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ul(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ul(o/n|0,i[o],i[o+1],r);return r&&us(r,r.next)&&(ir(r),r=r.next),r}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||ye(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Rd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Md(i,n,s,r):vd(i)){t.push(c.i,i.i,l.i),ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Sd(Ci(i),t),er(i,t,e,n,s,r,2)):o===2&&bd(i,t,e,n,s,r):er(Ci(i),t,e,n,s,r,1);break}}}function vd(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Ls(s,a,r,c,o,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Md(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,p=Math.min(a,c,l),g=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),f=oc(p,g,t,e,n),A=oc(x,m,t,e,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=f&&y&&y.z<=A;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ls(a,u,c,h,l,d,b.x,b.y)&&ye(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ls(a,u,c,h,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ls(a,u,c,h,l,d,b.x,b.y)&&ye(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ls(a,u,c,h,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Sd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!us(n,s)&&Ph(n,e,e.next,s)&&nr(n,s)&&nr(s,n)&&(t.push(n.i,e.i,s.i),ir(e),ir(e.next),e=i=s),e=e.next}while(e!==i);return Ci(e)}function bd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ld(o,a)){let c=Lh(o,a);o=Ci(o,o.next),c=Ci(c,c.next),er(o,t,e,n,s,r,0),er(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Td(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Rh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Pd(l))}s.sort(wd);for(let r=0;r<s.length;r++)e=Ed(s[r],e);return e}function wd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ed(i,t){let e=Ad(i,t);if(!e)return t;let n=Lh(e,i);return Ci(n,n.next),Ci(e,e.next)}function Ad(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Ih(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);nr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Cd(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Cd(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function Rd(i,t,e,n){let s=i;do s.z===0&&(s.z=oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Id(s)}function Id(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ih(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ls(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Ih(i,t,e,n,s,r,o,a)}function Ld(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dd(i,t)&&(nr(i,t)&&nr(t,i)&&Ud(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||us(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function Ph(i,t,e,n){let s=qr(ye(i,t,e)),r=qr(ye(i,t,n)),o=qr(ye(e,n,i)),a=qr(ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Xr(i,e,t)||r===0&&Xr(i,n,t)||o===0&&Xr(e,i,n)||a===0&&Xr(e,t,n))}function Xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function Dd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ph(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nr(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function Ud(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lh(i,t){let e=ac(i.i,i.x,i.y),n=ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ul(i,t,e,n){let s=ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var cc=class{static triangulate(t,e,n=2){return yd(t,e,n)}},Mn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nl(t),Fl(n,t);let o=t.length;e.forEach(Nl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Fl(n,e[c]);let a=cc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Nl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ri=class i extends ve{constructor(t=new mn([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Fd,b,y=!1,R,C,L,O;f&&(b=f.getSpacedPoints(u),y=!0,d=!1,R=f.computeFrenetFrames(u,!1),C=new I,L=new I,O=new I),d||(m=0,p=0,g=0,x=0);let T=a.extractPoints(l),S=T.shape,U=T.holes;if(!Mn.isClockWise(S)){S=S.reverse();for(let at=0,st=U.length;at<st;at++){let et=U[at];Mn.isClockWise(et)&&(U[at]=et.reverse())}}function D(at){let et=10000000000000001e-36,tt=at[0];for(let xt=1;xt<=at.length;xt++){let ut=xt%at.length,vt=at[ut],qt=vt.x-tt.x,Ht=vt.y-tt.y,w=qt*qt+Ht*Ht,_=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(tt.x),Math.abs(tt.y)),V=et*_*_;if(w<=V){at.splice(ut,1),xt--;continue}tt=vt}}D(S),U.forEach(D);let B=U.length,W=S;for(let at=0;at<B;at++){let st=U[at];S=S.concat(st)}function G(at,st,et){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(st,et)}let nt=S.length;function X(at,st,et){let tt,xt,ut,vt=at.x-st.x,qt=at.y-st.y,Ht=et.x-at.x,w=et.y-at.y,_=vt*vt+qt*qt,V=vt*w-qt*Ht;if(Math.abs(V)>Number.EPSILON){let Z=Math.sqrt(_),ot=Math.sqrt(Ht*Ht+w*w),J=st.x-qt/Z,Nt=st.y+vt/Z,pt=et.x-w/ot,Rt=et.y+Ht/ot,It=((pt-J)*w-(Rt-Nt)*Ht)/(vt*w-qt*Ht);tt=J+vt*It-at.x,xt=Nt+qt*It-at.y;let rt=tt*tt+xt*xt;if(rt<=2)return new mt(tt,xt);ut=Math.sqrt(rt/2)}else{let Z=!1;vt>Number.EPSILON?Ht>Number.EPSILON&&(Z=!0):vt<-Number.EPSILON?Ht<-Number.EPSILON&&(Z=!0):Math.sign(qt)===Math.sign(w)&&(Z=!0),Z?(tt=-qt,xt=vt,ut=Math.sqrt(_)):(tt=vt,xt=qt,ut=Math.sqrt(_/2))}return new mt(tt/ut,xt/ut)}let ht=[];for(let at=0,st=W.length,et=st-1,tt=at+1;at<st;at++,et++,tt++)et===st&&(et=0),tt===st&&(tt=0),ht[at]=X(W[at],W[et],W[tt]);let _t=[],Et,kt=ht.concat();for(let at=0,st=B;at<st;at++){let et=U[at];Et=[];for(let tt=0,xt=et.length,ut=xt-1,vt=tt+1;tt<xt;tt++,ut++,vt++)ut===xt&&(ut=0),vt===xt&&(vt=0),Et[tt]=X(et[tt],et[ut],et[vt]);_t.push(Et),kt=kt.concat(Et)}let Kt;if(m===0)Kt=Mn.triangulateShape(W,U);else{let at=[],st=[];for(let et=0;et<m;et++){let tt=et/m,xt=p*Math.cos(tt*Math.PI/2),ut=g*Math.sin(tt*Math.PI/2)+x;for(let vt=0,qt=W.length;vt<qt;vt++){let Ht=G(W[vt],ht[vt],ut);Ut(Ht.x,Ht.y,-xt),tt===0&&at.push(Ht)}for(let vt=0,qt=B;vt<qt;vt++){let Ht=U[vt];Et=_t[vt];let w=[];for(let _=0,V=Ht.length;_<V;_++){let Z=G(Ht[_],Et[_],ut);Ut(Z.x,Z.y,-xt),tt===0&&w.push(Z)}tt===0&&st.push(w)}}Kt=Mn.triangulateShape(at,st)}let ie=Kt.length,zt=g+x;for(let at=0;at<nt;at++){let st=d?G(S[at],kt[at],zt):S[at];y?(L.copy(R.normals[0]).multiplyScalar(st.x),C.copy(R.binormals[0]).multiplyScalar(st.y),O.copy(b[0]).add(L).add(C),Ut(O.x,O.y,O.z)):Ut(st.x,st.y,0)}for(let at=1;at<=u;at++)for(let st=0;st<nt;st++){let et=d?G(S[st],kt[st],zt):S[st];y?(L.copy(R.normals[at]).multiplyScalar(et.x),C.copy(R.binormals[at]).multiplyScalar(et.y),O.copy(b[at]).add(L).add(C),Ut(O.x,O.y,O.z)):Ut(et.x,et.y,h/u*at)}for(let at=m-1;at>=0;at--){let st=at/m,et=p*Math.cos(st*Math.PI/2),tt=g*Math.sin(st*Math.PI/2)+x;for(let xt=0,ut=W.length;xt<ut;xt++){let vt=G(W[xt],ht[xt],tt);Ut(vt.x,vt.y,h+et)}for(let xt=0,ut=U.length;xt<ut;xt++){let vt=U[xt];Et=_t[xt];for(let qt=0,Ht=vt.length;qt<Ht;qt++){let w=G(vt[qt],Et[qt],tt);y?Ut(w.x,w.y+b[u-1].y,b[u-1].x+et):Ut(w.x,w.y,h+et)}}}K(),it();function K(){let at=s.length/3;if(d){let st=0,et=nt*st;for(let tt=0;tt<ie;tt++){let xt=Kt[tt];Lt(xt[2]+et,xt[1]+et,xt[0]+et)}st=u+m*2,et=nt*st;for(let tt=0;tt<ie;tt++){let xt=Kt[tt];Lt(xt[0]+et,xt[1]+et,xt[2]+et)}}else{for(let st=0;st<ie;st++){let et=Kt[st];Lt(et[2],et[1],et[0])}for(let st=0;st<ie;st++){let et=Kt[st];Lt(et[0]+nt*u,et[1]+nt*u,et[2]+nt*u)}}n.addGroup(at,s.length/3-at,0)}function it(){let at=s.length/3,st=0;bt(W,st),st+=W.length;for(let et=0,tt=U.length;et<tt;et++){let xt=U[et];bt(xt,st),st+=xt.length}n.addGroup(at,s.length/3-at,1)}function bt(at,st){let et=at.length;for(;--et>=0;){let tt=et,xt=et-1;xt<0&&(xt=at.length-1);for(let ut=0,vt=u+m*2;ut<vt;ut++){let qt=nt*ut,Ht=nt*(ut+1),w=st+tt+qt,_=st+xt+qt,V=st+xt+Ht,Z=st+tt+Ht;$t(w,_,V,Z)}}}function Ut(at,st,et){c.push(at),c.push(st),c.push(et)}function Lt(at,st,et){se(at),se(st),se(et);let tt=s.length/3,xt=A.generateTopUV(n,s,tt-3,tt-2,tt-1);P(xt[0]),P(xt[1]),P(xt[2])}function $t(at,st,et,tt){se(at),se(st),se(tt),se(st),se(et),se(tt);let xt=s.length/3,ut=A.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);P(ut[0]),P(ut[1]),P(ut[3]),P(ut[1]),P(ut[2]),P(ut[3])}function se(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function P(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Od(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new co[s.type]().fromJSON(s)),new i(n,t.options)}},Fd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new mt(r,o),new mt(a,c),new mt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-h),new mt(d,1-g),new mt(x,1-f)]:[new mt(a,1-c),new mt(u,1-h),new mt(p,1-g),new mt(m,1-f)]}};function Od(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var wn=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let A=f*d-o;for(let b=0;b<l;b++){let y=b*h-r;g.push(y,-A,0),x.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){let b=A+l*f,y=A+l*(f+1),R=A+1+l*(f+1),C=A+1+l*f;p.push(b,y,C),p.push(y,R,C)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sr=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,d=(e-t)/s,p=new I,g=new mt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let A=f+m,b=A,y=A+n+1,R=A+n+2,C=A+1;a.push(b,y,C),a.push(y,R,C)}}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},rr=class i extends ve{constructor(t=new mn([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function l(u){let h=s.length/3,d=u.extractPoints(e),p=d.shape,g=d.holes;Mn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let A=g[m];Mn.isClockWise(A)===!0&&(g[m]=A.reverse())}let x=Mn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let A=g[m];p=p.concat(A)}for(let m=0,f=p.length;m<f;m++){let A=p[m];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let m=0,f=x.length;m<f;m++){let A=x[m],b=A[0]+h,y=A[1]+h,R=A[2]+h;n.push(b,y,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Bd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Bd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ge=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new I,d=new I,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let A=[],b=f/n,y=0;f===0&&o===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let C=R/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(C+y,1-b),A.push(l++)}u.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){let b=u[f][A+1],y=u[f][A],R=u[f+1][A],C=u[f+1][A+1];(f!==0||o>0)&&p.push(b,y,C),(f!==n-1||c<Math.PI)&&p.push(y,R,C)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Te=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,A=(s+1)*p+g;o.push(x,m,A),o.push(m,f,A)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Hn=class i extends ve{constructor(t=new js(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new mt,u=new I,h=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),A(),f()}function m(b){u=t.getPointAt(b/e,u);let y=o.normals[b],R=o.binormals[b];for(let C=0;C<=s;C++){let L=C/s*Math.PI*2,O=Math.sin(L),T=-Math.cos(L);c.x=T*y.x+O*R.x,c.y=T*y.y+O*R.y,c.z=T*y.z+O*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){let R=(s+1)*(b-1)+(y-1),C=(s+1)*b+(y-1),L=(s+1)*b+y,O=(s+1)*(b-1)+y;g.push(R,C,O),g.push(C,L,O)}}function A(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)l.x=b/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var qe=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ho=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nc:r=t,a=2*e-n;break;case ic:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nc:o=t,c=2*n-e;break;case ic:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,A=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let R=0;R!==a;++R)r[R]=f*o[u+R]+A*o[l+R]+b*o[c+R]+y*o[h+R];return r}},po=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},mo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Qr:e=this.InterpolantFactoryMethodLinear;break;case Zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&zd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Qr;var li=class extends tn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Os;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="color";var _o=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};_o.prototype.ValueTypeName="number";var xo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)kn.slerpFlat(r,0,o,l-a,o,l,c);return r}},or=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}};or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends tn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Os;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="vector";var vo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Dh=new vo,Mo=class{constructor(t){this.manager=t!==void 0?t:Dh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Pi=class extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ja=new fe,Ol=new I,Bl=new I,So=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ol),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zl=new fe,Ps=new I,tc=new I,lc=class extends So{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),tc.copy(n.position),tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tc),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,n.coordinateSystem,n.reversedDepth)}},ar=class extends ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cr=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hc=class extends So{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ui=class extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bo=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lc="\\[\\]\\.:\\/",kd=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",Vd="[^"+Lc.replace("\\.","")+"]",Gd=/((?:WC+[\/:])*)/.source.replace("WC",Dc),Hd=/(WCOD+)?/.source.replace("WCOD",Vd),Wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Xd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),qd=new RegExp("^"+Gd+Hd+Wd+Xd+"$"),Yd=["material","materials","bones","map"],uc=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kd,"")}static parseTrackName(t){let e=qd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=uc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z0=new Float32Array(1);function Uc(i,t,e,n){let s=Zd(n);switch(e){case Sc:return i*t;case Bo:return i*t/s.components*s.byteLength;case zo:return i*t/s.components*s.byteLength;case Tc:return i*t*2/s.components*s.byteLength;case ko:return i*t*2/s.components*s.byteLength;case bc:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Vo:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Xo:return Math.max(i,16)*Math.max(t,8)/4;case Go:case Wo:return Math.max(i,8)*Math.max(t,8)/2;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case la:case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case gn:case xc:return{byteLength:1,components:1};case ps:case yc:case ms:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case di:case No:case _n:return{byteLength:4,components:1};case vc:case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function iu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $d(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Kd,alphahash_pars_fragment:Qd,alphamap_fragment:jd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:cf,beginnormal_vertex:lf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:vf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Tf,displacementmap_vertex:wf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Af,colorspace_fragment:Cf,colorspace_pars_fragment:Rf,envmap_fragment:If,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Hf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Qf,lights_fragment_end:jf,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:cp,metalnessmap_pars_fragment:lp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:xp,normal_vertex:yp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Tp,opaque_fragment:wp,packing:Ep,premultiplied_alpha_fragment:Ap,project_vertex:Cp,dithering_fragment:Rp,dithering_pars_fragment:Ip,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:kp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:$p,background_vert:Kp,background_frag:Qp,backgroundCube_vert:jp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:cm,linedashed_vert:lm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:ym,meshphong_frag:vm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:bm,meshtoon_frag:Tm,points_vert:wm,points_frag:Em,shadow_vert:Am,shadow_frag:Cm,sprite_vert:Rm,sprite_frag:Im},Tt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Cn={basic:{uniforms:Be([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Be([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Be([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Be([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Be([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Be([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Be([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Be([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Be([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Be([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Be([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Be([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Be([Tt.lights,Tt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Cn.physical={uniforms:Be([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var _a={r:0,b:0,g:0},Fi=new fn,Pm=new fe;function Lm(i,t,e,n,s,r,o){let a=new jt(0),c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1,R=g(b);R===null?f(a,c):R&&R.isColor&&(f(R,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===hr)?(u===void 0&&(u=new Xt(new on(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ni(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Fi)),u.material.toneMapped=oe.getTransfer(R.colorSpace)!==ue,(h!==R||d!==R.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Xt(new wn(2,2),new pn({name:"BackgroundMaterial",uniforms:Ni(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(R.colorSpace)!==ue,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(_a,Ic(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:x,addToRenderList:m,dispose:A}}function Dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,U,H,D,B){let W=!1,G=h(D,H,U);r!==G&&(r=G,l(r.object)),W=p(S,D,H,B),W&&g(S,D,H,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(S,U,H,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,U,H){let D=H.wireframe===!0,B=n[S.id];B===void 0&&(B={},n[S.id]=B);let W=B[U.id];W===void 0&&(W={},B[U.id]=W);let G=W[D];return G===void 0&&(G=d(c()),W[D]=G),G}function d(S){let U=[],H=[],D=[];for(let B=0;B<e;B++)U[B]=0,H[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:D,object:S,attributes:{},index:null}}function p(S,U,H,D){let B=r.attributes,W=U.attributes,G=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let _t=B[X],Et=W[X];if(Et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),_t===void 0||_t.attribute!==Et||Et&&_t.data!==Et.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function g(S,U,H,D){let B={},W=U.attributes,G=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let _t=W[X];_t===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));let Et={};Et.attribute=_t,_t&&_t.data&&(Et.data=_t.data),B[X]=Et,G++}r.attributes=B,r.attributesNum=G,r.index=D}function x(){let S=r.newAttributes;for(let U=0,H=S.length;U<H;U++)S[U]=0}function m(S){f(S,0)}function f(S,U){let H=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;H[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),B[S]!==U&&(i.vertexAttribDivisor(S,U),B[S]=U)}function A(){let S=r.newAttributes,U=r.enabledAttributes;for(let H=0,D=U.length;H<D;H++)U[H]!==S[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function b(S,U,H,D,B,W,G){G===!0?i.vertexAttribIPointer(S,U,H,B,W):i.vertexAttribPointer(S,U,H,D,B,W)}function y(S,U,H,D){x();let B=D.attributes,W=H.getAttributes(),G=U.defaultAttributeValues;for(let nt in W){let X=W[nt];if(X.location>=0){let ht=B[nt];if(ht===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){let _t=ht.normalized,Et=ht.itemSize,kt=t.get(ht);if(kt===void 0)continue;let Kt=kt.buffer,ie=kt.type,zt=kt.bytesPerElement,K=ie===i.INT||ie===i.UNSIGNED_INT||ht.gpuType===No;if(ht.isInterleavedBufferAttribute){let it=ht.data,bt=it.stride,Ut=ht.offset;if(it.isInstancedInterleavedBuffer){for(let Lt=0;Lt<X.locationSize;Lt++)f(X.location+Lt,it.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Lt=0;Lt<X.locationSize;Lt++)b(X.location+Lt,Et/X.locationSize,ie,_t,bt*zt,(Ut+Et/X.locationSize*Lt)*zt,K)}else{if(ht.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)f(X.location+it,ht.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let it=0;it<X.locationSize;it++)m(X.location+it);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let it=0;it<X.locationSize;it++)b(X.location+it,Et/X.locationSize,ie,_t,Et*zt,Et/X.locationSize*it*zt,K)}}else if(G!==void 0){let _t=G[nt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(X.location,_t);break;case 3:i.vertexAttrib3fv(X.location,_t);break;case 4:i.vertexAttrib4fv(X.location,_t);break;default:i.vertexAttrib1fv(X.location,_t)}}}}A()}function R(){O();for(let S in n){let U=n[S];for(let H in U){let D=U[H];for(let B in D)u(D[B].object),delete D[B];delete U[H]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let H in U){let D=U[H];for(let B in D)u(D[B].object),delete D[B];delete U[H]}delete n[S.id]}function L(S){for(let U in n){let H=n[U];if(H[S.id]===void 0)continue;let D=H[S.id];for(let B in D)u(D[B].object),delete D[B];delete H[S.id]}}function O(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Um(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==an&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let O=L===ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==gn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_n&&!O)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function Fm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new vn,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let A=r?0:n,b=A*4,y=f.clippingState||null;c.value=y,y=u(g,d,b,p);for(let R=0;R!==b;++R)y[R]=e[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==x;++b,y+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Om(i){let t=new WeakMap;function e(o,a){return a===Lo?o.mapping=Li:a===Do&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lo||a===Do)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new so(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var vs=4,Uh=[.125,.215,.35,.446,.526,.582],zi=20,Nc=new cr,Nh=new jt,Fc=null,Oc=0,Bc=0,zc=!1,Bi=(1+Math.sqrt(5))/2,ys=1/Bi,Fh=[new I(-Bi,ys,0),new I(Bi,ys,0),new I(-ys,0,Bi),new I(ys,0,Bi),new I(0,Bi,-ys),new I(0,Bi,ys),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Bm=new I,va=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Bm}=r;Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fc,Oc,Bc),this._renderer.xr.enabled=zc,t.scissorTest=!1,xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ms,format:an,colorSpace:wi,depthBuffer:!1},s=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=km(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Nc)}_sceneToCubeUV(t,e,n,s,r){let c=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Nh),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new _e({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new Xt(new on,x),f=!1,A=t.background;A?A.isColor&&(x.color.copy(A),t.background=null,f=!0):(x.color.copy(Nh),f=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));let R=this._cubeSize;xa(s,y*R,b>2?R:0,R,R),h.setRenderTarget(s),f&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;xa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Nc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fh[(s-r-1)%Fh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Xt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let f=[],A=0;for(let L=0;L<zi;++L){let O=L/x,T=Math.exp(-O*O/2);f.push(T),L===0?A+=T:L<m&&(A+=2*T)}for(let L=0;L<f.length;L++)f[L]=f[L]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],R=3*y*(s>b-vs?s-b+vs:0),C=4*(this._cubeSize-y);xa(e,R,C,3*y,2*y),c.setRenderTarget(e),c.render(h,Nc)}};function zm(i){let t=[],e=[],n=[],s=i,r=i-vs+1+Uh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-vs?c=Uh[o-i+vs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,A=new Float32Array(x*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){let L=C%3*2/3-1,O=C>2?0:-1,T=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];A.set(T,x*g*C),b.set(d,m*g*C);let S=[C,C,C,C,C,C];y.set(S,f*g*C)}let R=new ve;R.setAttribute("position",new Oe(A,x)),R.setAttribute("uv",new Oe(b,m)),R.setAttribute("faceIndex",new Oe(y,f)),t.push(R),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oh(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){let n=new Float32Array(zi),s=new I(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Bh(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zh(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lo||c===Do,u=c===Li||c===Di;if(l||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new va(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new va(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hm(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let A=p.array;x=p.version;for(let b=0,y=A.length;b<y;b+=3){let R=A[b+0],C=A[b+1],L=A[b+2];d.push(R,C,C,L,L,R)}}else if(g!==void 0){let A=g.array;x=g.version;for(let b=0,y=A.length/3-1;b<y;b+=3){let R=b+0,C=b+1,L=b+2;d.push(R,C,C,L,L,R)}}else return;let m=new(Rc(d)?Ws:Hs)(d,1);m.version=x;let f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Wm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*x[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){let n=new WeakMap,s=new he;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*R*4*h),L=new Vs(C,y,R,h);L.type=_n,L.needsUpdate=!0;let O=b*4;for(let S=0;S<h;S++){let U=m[S],H=f[S],D=A[S],B=y*R*4*S;for(let W=0;W<U.count;W++){let G=W*O;p===!0&&(s.fromBufferAttribute(U,W),C[B+G+0]=s.x,C[B+G+1]=s.y,C[B+G+2]=s.z,C[B+G+3]=0),g===!0&&(s.fromBufferAttribute(H,W),C[B+G+4]=s.x,C[B+G+5]=s.y,C[B+G+6]=s.z,C[B+G+7]=0),x===!0&&(s.fromBufferAttribute(D,W),C[B+G+8]=s.x,C[B+G+9]=s.y,C[B+G+10]=s.z,C[B+G+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new mt(y,R)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var su=new Ve,kh=new Js(1,1),ru=new Vs,ou=new eo,au=new qs,Vh=[],Gh=[],Hh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=Gh[t];e===void 0&&(e=new Int32Array(t),Gh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Ie(e,n)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Ie(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),Ie(e,n)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=Ec,r=kh):r=su,e.setTexture2D(t||r,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ou,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||au,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ru,s)}function fg(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return $m;case 35666:return Km;case 35674:return Qm;case 35675:return jm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yg(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function bg(i,t){i.uniform3iv(this.addr,t)}function Tg(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Rg(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||su,r[o])}function Ig(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ou,r[o])}function Pg(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||au,r[o])}function Lg(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ru,r[o])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return yg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return bg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Eg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}},Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}},Hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function qh(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){let n=i.name,s=n.length;for(kc.lastIndex=0;;){let r=kc.exec(n),o=kc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qh(e,l===void 0?new Vc(a,i,t):new Gc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Hc(a),qh(e,h)),e=h}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ug(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ng=37297,Fg=0;function Og(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zh=new Zt;function Bg(i){oe._getMatrix(Zh,oe.workingColorSpace,i);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),a)}else return r}function zg(i,t){let e=Bg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kg(i,t){let e;switch(t){case ch:e="Linear";break;case lh:e="Reinhard";break;case hh:e="Cineon";break;case fs:e="ACESFilmic";break;case dh:e="AgX";break;case fh:e="Neutral";break;case uh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ya=new I;function Vg(){oe.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),t=ya.y.toFixed(4),e=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Hg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function $h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(Xg,Yg)}var qg=new Map;function Yg(i,t){let e=Qt[t];if(e===void 0){let n=qg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wc(e)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(Zg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===To?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Kg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Di&&(t="ENVMAP_MODE_REFRACTION"),t}function jg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gc:t="ENVMAP_BLENDING_MULTIPLY";break;case oh:t="ENVMAP_BLENDING_MIX";break;case ah:t="ENVMAP_BLENDING_ADD";break}return t}function t0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=$g(e),l=Kg(e),u=Qg(e),h=jg(e),d=t0(e),p=Gg(e),g=Hg(r),x=s.createProgram(),m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),f.length>0&&(f+=`
`)):(m=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),f=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Wc(o),o=$h(o,e),o=Kh(o,e),a=Wc(a),a=$h(a,e),a=Kh(a,e),o=Qh(o),a=Qh(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=A+m+o,y=A+f+a,R=Yh(s,s.VERTEX_SHADER,b),C=Yh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(U){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(R)||"",B=s.getShaderInfoLog(C)||"",W=H.trim(),G=D.trim(),nt=B.trim(),X=!0,ht=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,C);else{let _t=Jh(s,R,"vertex"),Et=Jh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+_t+`
`+Et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||nt==="")&&(ht=!1);ht&&(U.diagnostics={runnable:X,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:nt,prefix:f}})}s.deleteShader(R),s.deleteShader(C),O=new Ms(s,x),T=Wg(s,x)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Ng)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}var n0=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new qc(t),e.set(t,n)),n}},qc=class{constructor(t){this.id=n0++,this.code=t,this.usedTimes=0}};function i0(i,t,e,n,s,r,o){let a=new Gs,c=new Xc,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,U,H,D){let B=H.fog,W=D.geometry,G=T.isMeshStandardMaterial?H.environment:null,nt=(T.isMeshStandardMaterial?e:t).get(T.envMap||G),X=nt&&nt.mapping===hr?nt.image.height:null,ht=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=_t!==void 0?_t.length:0,kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let Kt,ie,zt,K;if(ht){let ne=Cn[ht];Kt=ne.vertexShader,ie=ne.fragmentShader}else Kt=T.vertexShader,ie=T.fragmentShader,c.update(T),zt=c.getVertexShaderID(T),K=c.getFragmentShaderID(T);let it=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,Lt=D.isBatchedMesh===!0,$t=!!T.map,se=!!T.matcap,P=!!nt,at=!!T.aoMap,st=!!T.lightMap,et=!!T.bumpMap,tt=!!T.normalMap,xt=!!T.displacementMap,ut=!!T.emissiveMap,vt=!!T.metalnessMap,qt=!!T.roughnessMap,Ht=T.anisotropy>0,w=T.clearcoat>0,_=T.dispersion>0,V=T.iridescence>0,Z=T.sheen>0,ot=T.transmission>0,J=Ht&&!!T.anisotropyMap,Nt=w&&!!T.clearcoatMap,pt=w&&!!T.clearcoatNormalMap,Rt=w&&!!T.clearcoatRoughnessMap,It=V&&!!T.iridescenceMap,rt=V&&!!T.iridescenceThicknessMap,St=Z&&!!T.sheenColorMap,Ot=Z&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,gt=!!T.specularColorMap,Vt=!!T.specularIntensityMap,F=ot&&!!T.transmissionMap,ft=ot&&!!T.thicknessMap,yt=!!T.gradientMap,Ct=!!T.alphaMap,lt=T.alphaTest>0,j=!!T.alphaHash,At=!!T.extensions,Wt=Xn;T.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let ae={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:Kt,fragmentShader:ie,defines:T.defines,customVertexShaderID:zt,customFragmentShaderID:K,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:wi,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:se,envMap:P,envMapMode:P&&nt.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:st,bumpMap:et,normalMap:tt,displacementMap:d&&xt,emissiveMap:ut,normalMapObjectSpace:tt&&T.normalMapType===_h,normalMapTangentSpace:tt&&T.normalMapType===wc,metalnessMap:vt,roughnessMap:qt,anisotropy:Ht,anisotropyMap:J,clearcoat:w,clearcoatMap:Nt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:V,iridescenceMap:It,iridescenceThicknessMap:rt,sheen:Z,sheenColorMap:St,sheenRoughnessMap:Ot,specularMap:Ft,specularColorMap:gt,specularIntensityMap:Vt,transmission:ot,transmissionMap:F,thicknessMap:ft,gradientMap:yt,opaque:T.transparent===!1&&T.blending===bi&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:lt,alphaHash:j,combine:T.combine,mapUv:$t&&x(T.map.channel),aoMapUv:at&&x(T.aoMap.channel),lightMapUv:st&&x(T.lightMap.channel),bumpMapUv:et&&x(T.bumpMap.channel),normalMapUv:tt&&x(T.normalMap.channel),displacementMapUv:xt&&x(T.displacementMap.channel),emissiveMapUv:ut&&x(T.emissiveMap.channel),metalnessMapUv:vt&&x(T.metalnessMap.channel),roughnessMapUv:qt&&x(T.roughnessMap.channel),anisotropyMapUv:J&&x(T.anisotropyMap.channel),clearcoatMapUv:Nt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(T.sheenRoughnessMap.channel),specularMapUv:Ft&&x(T.specularMap.channel),specularColorMapUv:gt&&x(T.specularColorMap.channel),specularIntensityMapUv:Vt&&x(T.specularIntensityMap.channel),transmissionMapUv:F&&x(T.transmissionMap.channel),thicknessMapUv:ft&&x(T.thicknessMap.channel),alphaMapUv:Ct&&x(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(tt||Ht),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&($t||Ct),fog:!!B,useFog:T.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&oe.getTransfer(T.map.colorSpace)===ue,decodeVideoTextureEmissive:ut&&T.emissiveMap.isVideoTexture===!0&&oe.getTransfer(T.emissiveMap.colorSpace)===ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ce,flipSided:T.side===Ue,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function f(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let U in T.defines)S.push(U),S.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(A(S,T),b(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let S=g[T.type],U;if(S){let H=Cn[S];U=Ch.clone(H.uniforms)}else U=T.uniforms;return U}function R(T,S){let U;for(let H=0,D=u.length;H<D;H++){let B=u[H];if(B.cacheKey===S){U=B,++U.usedTimes;break}}return U===void 0&&(U=new e0(i,S,T,r),u.push(U)),U}function C(T){if(--T.usedTimes===0){let S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function L(T){c.remove(T)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:O}}function s0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function a(h,d,p,g,x,m){let f=o(h,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,x,m){let f=o(h,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||r0),n.length>1&&n.sort(d||tu),s.length>1&&s.sort(d||tu)}function u(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function o0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new eu,i.set(n,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function a0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function c0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l0=0;function h0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u0(i){let t=new a0,e=c0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new fe,o=new fe;function a(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,A=0,b=0,y=0,R=0,C=0,L=0;l.sort(h0);for(let T=0,S=l.length;T<S;T++){let U=l[T],H=U.color,D=U.intensity,B=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=H.r*D,h+=H.g*D,d+=H.b*D;else if(U.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(U.sh.coefficients[G],D);L++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=U.shadow.matrix,A++}n.directional[p]=G,p++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(H).multiplyScalar(D),G.distance=B,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,n.spot[x]=G;let nt=U.shadow;if(U.map&&(n.spotLightMap[R]=U.map,R++,nt.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[x]=nt.matrix,U.castShadow){let X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=W,y++}x++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(H).multiplyScalar(D),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=G,m++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let nt=U.shadow,X=e.get(U);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=U.shadow.matrix,b++}n.point[g]=G,g++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(D),G.groundColor.copy(U.groundColor).multiplyScalar(D),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==A||O.numPointShadows!==b||O.numSpotShadows!==y||O.numSpotMaps!==R||O.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,O.directionalLength=p,O.pointLength=g,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=A,O.numPointShadows=b,O.numSpotShadows=y,O.numSpotMaps=R,O.numLightProbes=L,n.version=l0++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){let b=l[f];if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function nu(i){let t=new u0(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function d0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nu(i),t.set(s,[a])):r>=o.length?(a=new nu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m0(i,t,e){let n=new cs,s=new mt,r=new mt,o=new he,a=new ho({depthPacking:gh}),c=new uo,l={},u=e.maxTextureSize,h={[Bn]:Ue,[Ue]:Bn,[Ce]:Ce},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:f0,fragmentShader:p0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ve;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(C,L,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Wn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=f!==En&&this.type===En,B=f===En&&this.type!==En;for(let W=0,G=C.length;W<G;W++){let nt=C[W],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||D===!0||B===!0){let Et=this.type!==En?{minFilter:Xe,magFilter:Xe}:{};X.map!==null&&X.map.dispose(),X.map=new Sn(s.x,s.y,Et),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let _t=X.getViewportCount();for(let Et=0;Et<_t;Et++){let kt=X.getViewport(Et);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),H.viewport(o),X.updateMatrices(nt,Et),n=X.getFrustum(),y(L,O,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===En&&A(X,O),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,U)};function A(C,L){let O=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,O,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,O,p,x,null)}function b(C,L,O,T){let S=null,U=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)S=U;else if(S=O.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let H=S.uuid,D=L.uuid,B=l[H];B===void 0&&(B={},l[H]=B);let W=B[D];W===void 0&&(W=S.clone(),B[D]=W,L.addEventListener("dispose",R)),S=W}if(S.visible=L.visible,S.wireframe=L.wireframe,T===En?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=i.properties.get(S);H.light=O}return S}function y(C,L,O,T,S){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===En)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let D=t.update(C),B=C.material;if(Array.isArray(B)){let W=D.groups;for(let G=0,nt=W.length;G<nt;G++){let X=W[G],ht=B[X.materialIndex];if(ht&&ht.visible){let _t=b(C,ht,T,S);C.onBeforeShadow(i,C,L,O,D,_t,X),i.renderBufferDirect(O,null,D,_t,C,X),C.onAfterShadow(i,C,L,O,D,_t,X)}}}else if(B.visible){let W=b(C,B,T,S);C.onBeforeShadow(i,C,L,O,D,W,null),i.renderBufferDirect(O,null,D,W,C,null),C.onAfterShadow(i,C,L,O,D,W,null)}}let H=C.children;for(let D=0,B=H.length;D<B;D++)y(H[D],L,O,T,S)}function R(C){C.target.removeEventListener("dispose",R);for(let O in l){let T=l[O],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var g0={[wo]:Eo,[Ao]:Io,[Co]:Po,[Ti]:Ro,[Eo]:wo,[Io]:Ao,[Po]:Co,[Ro]:Ti};function _0(i,t){function e(){let F=!1,ft=new he,yt=null,Ct=new he(0,0,0,0);return{setMask:function(lt){yt!==lt&&!F&&(i.colorMask(lt,lt,lt,lt),yt=lt)},setLocked:function(lt){F=lt},setClear:function(lt,j,At,Wt,ae){ae===!0&&(lt*=Wt,j*=Wt,At*=Wt),ft.set(lt,j,At,Wt),Ct.equals(ft)===!1&&(i.clearColor(lt,j,At,Wt),Ct.copy(ft))},reset:function(){F=!1,yt=null,Ct.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,yt=null,Ct=null,lt=null;return{setReversed:function(j){if(ft!==j){let At=t.get("EXT_clip_control");j?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ft=j;let Wt=lt;lt=null,this.setClear(Wt)}},getReversed:function(){return ft},setTest:function(j){j?it(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(j){yt!==j&&!F&&(i.depthMask(j),yt=j)},setFunc:function(j){if(ft&&(j=g0[j]),Ct!==j){switch(j){case wo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Io:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=j}},setLocked:function(j){F=j},setClear:function(j){lt!==j&&(ft&&(j=1-j),i.clearDepth(j),lt=j)},reset:function(){F=!1,yt=null,Ct=null,lt=null,ft=!1}}}function s(){let F=!1,ft=null,yt=null,Ct=null,lt=null,j=null,At=null,Wt=null,ae=null;return{setTest:function(ne){F||(ne?it(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!F&&(i.stencilMask(ne),ft=ne)},setFunc:function(ne,He,de){(yt!==ne||Ct!==He||lt!==de)&&(i.stencilFunc(ne,He,de),yt=ne,Ct=He,lt=de)},setOp:function(ne,He,de){(j!==ne||At!==He||Wt!==de)&&(i.stencilOp(ne,He,de),j=ne,At=He,Wt=de)},setLocked:function(ne){F=ne},setClear:function(ne){ae!==ne&&(i.clearStencil(ne),ae=ne)},reset:function(){F=!1,ft=null,yt=null,Ct=null,lt=null,j=null,At=null,Wt=null,ae=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,A=null,b=null,y=null,R=null,C=null,L=new jt(0,0,0),O=0,T=!1,S=null,U=null,H=null,D=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=nt>=2);let ht=null,_t={},Et=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Kt=new he().fromArray(Et),ie=new he().fromArray(kt);function zt(F,ft,yt,Ct){let lt=new Uint8Array(4),j=i.createTexture();i.bindTexture(F,j),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<yt;At++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ft+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return j}let K={};K[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Ti),et(!1),tt(dc),it(i.CULL_FACE),at(Wn);function it(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function bt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Ut(F,ft){return h[F]!==ft?(i.bindFramebuffer(F,ft),h[F]=ft,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Lt(F,ft){let yt=p,Ct=!1;if(F){yt=d.get(ft),yt===void 0&&(yt=[],d.set(ft,yt));let lt=F.textures;if(yt.length!==lt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let j=0,At=lt.length;j<At;j++)yt[j]=i.COLOR_ATTACHMENT0+j;yt.length=lt.length,Ct=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(yt)}function $t(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let se={[si]:i.FUNC_ADD,[Hl]:i.FUNC_SUBTRACT,[Wl]:i.FUNC_REVERSE_SUBTRACT};se[Xl]=i.MIN,se[ql]=i.MAX;let P={[Yl]:i.ZERO,[Zl]:i.ONE,[Jl]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[jl]:i.DST_COLOR,[Kl]:i.DST_ALPHA,[$l]:i.ONE_MINUS_SRC_COLOR,[$r]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Ql]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function at(F,ft,yt,Ct,lt,j,At,Wt,ae,ne){if(F===Wn){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),F!==Gl){if(F!==m||ne!==T){if((f!==si||y!==si)&&(i.blendEquation(i.FUNC_ADD),f=si,y=si),ne)switch(F){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,b=null,R=null,C=null,L.set(0,0,0),O=0,m=F,T=ne}return}lt=lt||ft,j=j||yt,At=At||Ct,(ft!==f||lt!==y)&&(i.blendEquationSeparate(se[ft],se[lt]),f=ft,y=lt),(yt!==A||Ct!==b||j!==R||At!==C)&&(i.blendFuncSeparate(P[yt],P[Ct],P[j],P[At]),A=yt,b=Ct,R=j,C=At),(Wt.equals(L)===!1||ae!==O)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ae),L.copy(Wt),O=ae),m=F,T=!1}function st(F,ft){F.side===Ce?bt(i.CULL_FACE):it(i.CULL_FACE);let yt=F.side===Ue;ft&&(yt=!yt),et(yt),F.blending===bi&&F.transparent===!1?at(Wn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ct=F.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function tt(F){F!==kl?(it(i.CULL_FACE),F!==U&&(F===dc?i.cullFace(i.BACK):F===Vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),U=F}function xt(F){F!==H&&(G&&i.lineWidth(F),H=F)}function ut(F,ft,yt){F?(it(i.POLYGON_OFFSET_FILL),(D!==ft||B!==yt)&&(i.polygonOffset(ft,yt),D=ft,B=yt)):bt(i.POLYGON_OFFSET_FILL)}function vt(F){F?it(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function qt(F){F===void 0&&(F=i.TEXTURE0+W-1),ht!==F&&(i.activeTexture(F),ht=F)}function Ht(F,ft,yt){yt===void 0&&(ht===null?yt=i.TEXTURE0+W-1:yt=ht);let Ct=_t[yt];Ct===void 0&&(Ct={type:void 0,texture:void 0},_t[yt]=Ct),(Ct.type!==F||Ct.texture!==ft)&&(ht!==yt&&(i.activeTexture(yt),ht=yt),i.bindTexture(F,ft||K[F]),Ct.type=F,Ct.texture=ft)}function w(){let F=_t[ht];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(F){Kt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Kt.copy(F))}function Ot(F){ie.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Ft(F,ft){let yt=l.get(ft);yt===void 0&&(yt=new WeakMap,l.set(ft,yt));let Ct=yt.get(F);Ct===void 0&&(Ct=i.getUniformBlockIndex(ft,F.name),yt.set(F,Ct))}function gt(F,ft){let Ct=l.get(ft).get(F);c.get(ft)!==Ct&&(i.uniformBlockBinding(ft,Ct,F.__bindingPointIndex),c.set(ft,Ct))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ht=null,_t={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,A=null,b=null,y=null,R=null,C=null,L=new jt(0,0,0),O=0,T=!1,S=null,U=null,H=null,D=null,B=null,Kt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:bt,bindFramebuffer:Ut,drawBuffers:Lt,useProgram:$t,setBlending:at,setMaterial:st,setFlipSided:et,setCullFace:tt,setLineWidth:xt,setPolygonOffset:ut,setScissorTest:vt,activeTexture:qt,bindTexture:Ht,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:V,texImage2D:It,texImage3D:rt,updateUBOMapping:Ft,uniformBlockBinding:gt,texStorage2D:pt,texStorage3D:Rt,texSubImage2D:Z,texSubImage3D:ot,compressedTexSubImage2D:J,compressedTexSubImage3D:Nt,scissor:St,viewport:Ot,reset:Vt}}function x0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):ks("canvas")}function x(w,_,V){let Z=1,ot=Ht(w);if((ot.width>V||ot.height>V)&&(Z=V/Math.max(ot.width,ot.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let J=Math.floor(Z*ot.width),Nt=Math.floor(Z*ot.height);h===void 0&&(h=g(J,Nt));let pt=_?g(J,Nt):h;return pt.width=J,pt.height=Nt,pt.getContext("2d").drawImage(w,0,0,J,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+J+"x"+Nt+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,_,V,Z,ot=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=_;if(_===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),_===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let Nt=ot?Bs:oe.getTransfer(Z);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Nt===ue?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(w,_){let V;return w?_===null||_===di||_===gs?V=i.DEPTH24_STENCIL8:_===_n?V=i.DEPTH32F_STENCIL8:_===ps&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===gs?V=i.DEPTH_COMPONENT24:_===_n?V=i.DEPTH_COMPONENT32F:_===ps&&(V=i.DEPTH_COMPONENT16),V}function R(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Xe&&w.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),O(_),_.isVideoTexture&&u.delete(_)}function L(w){let _=w.target;_.removeEventListener("dispose",L),S(_)}function O(w){let _=n.get(w);if(_.__webglInit===void 0)return;let V=w.source,Z=d.get(V);if(Z){let ot=Z[_.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&T(w),Object.keys(Z).length===0&&d.delete(V)}n.remove(w)}function T(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let V=w.source,Z=d.get(V);delete Z[_.__cacheKey],o.memory.textures--}function S(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ot=0;ot<_.__webglFramebuffer[Z].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[Z][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=w.textures;for(let Z=0,ot=V.length;Z<ot;Z++){let J=n.get(V[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(w)}let U=0;function H(){U=0}function D(){let w=U;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),U+=1,w}function B(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function W(w,_){let V=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,w,_);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+_)}function G(w,_){let V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){K(V,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+_)}function nt(w,_){let V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){K(V,w,_);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+_)}function X(w,_){let V=n.get(w);if(w.version>0&&V.__version!==w.version){it(V,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+_)}let ht={[ri]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},_t={[Xe]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Et={[xh]:i.NEVER,[Th]:i.ALWAYS,[yh]:i.LESS,[Ec]:i.LEQUAL,[vh]:i.EQUAL,[bh]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function kt(w,_){if(_.type===_n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===Uo||_.magFilter===ur||_.magFilter===An||_.minFilter===Ke||_.minFilter===Uo||_.minFilter===ur||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ht[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ht[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ht[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xe||_.minFilter!==ur&&_.minFilter!==An||_.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(w,_){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let Z=_.source,ot=d.get(Z);ot===void 0&&(ot={},d.set(Z,ot));let J=B(_);if(J!==w.__cacheKey){ot[J]===void 0&&(ot[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ot[J].usedTimes++;let Nt=ot[w.__cacheKey];Nt!==void 0&&(ot[w.__cacheKey].usedTimes--,Nt.usedTimes===0&&T(_)),w.__cacheKey=J,w.__webglTexture=ot[J].texture}return V}function ie(w,_,V){return Math.floor(Math.floor(w/V)/_)}function zt(w,_,V,Z){let J=w.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,V,Z,_.data);else{J.sort((rt,St)=>rt.start-St.start);let Nt=0;for(let rt=1;rt<J.length;rt++){let St=J[Nt],Ot=J[rt],Ft=St.start+St.count,gt=ie(Ot.start,_.width,4),Vt=ie(St.start,_.width,4);Ot.start<=Ft+1&&gt===Vt&&ie(Ot.start+Ot.count-1,_.width,4)===gt?St.count=Math.max(St.count,Ot.start+Ot.count-St.start):(++Nt,J[Nt]=Ot)}J.length=Nt+1;let pt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let rt=0,St=J.length;rt<St;rt++){let Ot=J[rt],Ft=Math.floor(Ot.start/4),gt=Math.ceil(Ot.count/4),Vt=Ft%_.width,F=Math.floor(Ft/_.width),ft=gt,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Vt,F,ft,yt,V,Z,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function K(w,_,V){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);let ot=Kt(w,_),J=_.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+V);let Nt=n.get(J);if(J.version!==Nt.__version||ot===!0){e.activeTexture(i.TEXTURE0+V);let pt=oe.getPrimaries(oe.workingColorSpace),Rt=_.colorSpace===qn?null:oe.getPrimaries(_.colorSpace),It=_.colorSpace===qn||pt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let rt=x(_.image,!1,s.maxTextureSize);rt=qt(_,rt);let St=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),Ft=b(_.internalFormat,St,Ot,_.colorSpace,_.isVideoTexture);kt(Z,_);let gt,Vt=_.mipmaps,F=_.isVideoTexture!==!0,ft=Nt.__version===void 0||ot===!0,yt=J.dataReady,Ct=R(_,rt);if(_.isDepthTexture)Ft=y(_.format===_s,_.type),ft&&(F?e.texStorage2D(i.TEXTURE_2D,1,Ft,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,St,Ot,null));else if(_.isDataTexture)if(Vt.length>0){F&&ft&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,Vt[0].width,Vt[0].height);for(let lt=0,j=Vt.length;lt<j;lt++)gt=Vt[lt],F?yt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,gt.width,gt.height,St,Ot,gt.data):e.texImage2D(i.TEXTURE_2D,lt,Ft,gt.width,gt.height,0,St,Ot,gt.data);_.generateMipmaps=!1}else F?(ft&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,rt.width,rt.height),yt&&zt(_,rt,St,Ot)):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,St,Ot,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){F&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ft,Vt[0].width,Vt[0].height,rt.depth);for(let lt=0,j=Vt.length;lt<j;lt++)if(gt=Vt[lt],_.format!==an)if(St!==null)if(F){if(yt)if(_.layerUpdates.size>0){let At=Uc(gt.width,gt.height,_.format,_.type);for(let Wt of _.layerUpdates){let ae=gt.data.subarray(Wt*At/gt.data.BYTES_PER_ELEMENT,(Wt+1)*At/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Wt,gt.width,gt.height,1,St,ae)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,gt.width,gt.height,rt.depth,St,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Ft,gt.width,gt.height,rt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,gt.width,gt.height,rt.depth,St,Ot,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Ft,gt.width,gt.height,rt.depth,0,St,Ot,gt.data)}else{F&&ft&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,Vt[0].width,Vt[0].height);for(let lt=0,j=Vt.length;lt<j;lt++)gt=Vt[lt],_.format!==an?St!==null?F?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,gt.width,gt.height,St,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Ft,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?yt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,gt.width,gt.height,St,Ot,gt.data):e.texImage2D(i.TEXTURE_2D,lt,Ft,gt.width,gt.height,0,St,Ot,gt.data)}else if(_.isDataArrayTexture)if(F){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ft,rt.width,rt.height,rt.depth),yt)if(_.layerUpdates.size>0){let lt=Uc(rt.width,rt.height,_.format,_.type);for(let j of _.layerUpdates){let At=rt.data.subarray(j*lt/rt.data.BYTES_PER_ELEMENT,(j+1)*lt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,St,Ot,At)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Ot,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,St,Ot,rt.data);else if(_.isData3DTexture)F?(ft&&e.texStorage3D(i.TEXTURE_3D,Ct,Ft,rt.width,rt.height,rt.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Ot,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,St,Ot,rt.data);else if(_.isFramebufferTexture){if(ft)if(F)e.texStorage2D(i.TEXTURE_2D,Ct,Ft,rt.width,rt.height);else{let lt=rt.width,j=rt.height;for(let At=0;At<Ct;At++)e.texImage2D(i.TEXTURE_2D,At,Ft,lt,j,0,St,Ot,null),lt>>=1,j>>=1}}else if(Vt.length>0){if(F&&ft){let lt=Ht(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Ft,lt.width,lt.height)}for(let lt=0,j=Vt.length;lt<j;lt++)gt=Vt[lt],F?yt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,St,Ot,gt):e.texImage2D(i.TEXTURE_2D,lt,Ft,St,Ot,gt);_.generateMipmaps=!1}else if(F){if(ft){let lt=Ht(rt);e.texStorage2D(i.TEXTURE_2D,Ct,Ft,lt.width,lt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ot,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,St,Ot,rt);m(_)&&f(Z),Nt.__version=J.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function it(w,_,V){if(_.image.length!==6)return;let Z=Kt(w,_),ot=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);let J=n.get(ot);if(ot.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+V);let Nt=oe.getPrimaries(oe.workingColorSpace),pt=_.colorSpace===qn?null:oe.getPrimaries(_.colorSpace),Rt=_.colorSpace===qn||Nt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let It=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,St=[];for(let j=0;j<6;j++)!It&&!rt?St[j]=x(_.image[j],!0,s.maxCubemapSize):St[j]=rt?_.image[j].image:_.image[j],St[j]=qt(_,St[j]);let Ot=St[0],Ft=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),Vt=b(_.internalFormat,Ft,gt,_.colorSpace),F=_.isVideoTexture!==!0,ft=J.__version===void 0||Z===!0,yt=ot.dataReady,Ct=R(_,Ot);kt(i.TEXTURE_CUBE_MAP,_);let lt;if(It){F&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Vt,Ot.width,Ot.height);for(let j=0;j<6;j++){lt=St[j].mipmaps;for(let At=0;At<lt.length;At++){let Wt=lt[At];_.format!==an?Ft!==null?F?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,Wt.width,Wt.height,Ft,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,Vt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,Wt.width,Wt.height,Ft,gt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,Vt,Wt.width,Wt.height,0,Ft,gt,Wt.data)}}}else{if(lt=_.mipmaps,F&&ft){lt.length>0&&Ct++;let j=Ht(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Vt,j.width,j.height)}for(let j=0;j<6;j++)if(rt){F?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St[j].width,St[j].height,Ft,gt,St[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,St[j].width,St[j].height,0,Ft,gt,St[j].data);for(let At=0;At<lt.length;At++){let ae=lt[At].image[j].image;F?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,ae.width,ae.height,Ft,gt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,Vt,ae.width,ae.height,0,Ft,gt,ae.data)}}else{F?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,gt,St[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,Ft,gt,St[j]);for(let At=0;At<lt.length;At++){let Wt=lt[At];F?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Ft,gt,Wt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,Vt,Ft,gt,Wt.image[j])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),J.__version=ot.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function bt(w,_,V,Z,ot,J){let Nt=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),Rt=b(V.internalFormat,Nt,pt,V.colorSpace),It=n.get(_),rt=n.get(V);if(rt.__renderTarget=_,!It.__hasExternalTextures){let St=Math.max(1,_.width>>J),Ot=Math.max(1,_.height>>J);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,J,Rt,St,Ot,_.depth,0,Nt,pt,null):e.texImage2D(ot,J,Rt,St,Ot,0,Nt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ot,rt.__webglTexture,0,xt(_)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ot,rt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(w,_,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let Z=_.depthTexture,ot=Z&&Z.isDepthTexture?Z.type:null,J=y(_.stencilBuffer,ot),Nt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=xt(_);ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,w)}else{let Z=_.textures;for(let ot=0;ot<Z.length;ot++){let J=Z[ot],Nt=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),Rt=b(J.internalFormat,Nt,pt,J.colorSpace),It=xt(_);V&&ut(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Rt,_.width,_.height):ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);let ot=Z.__webglTexture,J=xt(_);if(_.depthTexture.format===ns)ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(_.depthTexture.format===_s)ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function $t(w){let _=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let ot=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ot)};Z.addEventListener("dispose",ot),_.__depthDisposeCallback=ot}_.__boundDepthTexture=Z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let Z=w.texture.mipmaps;Z&&Z.length>0?Lt(_.__webglFramebuffer[0],w):Lt(_.__webglFramebuffer,w)}else if(V){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ut(_.__webglDepthbuffer[Z],w,!1);else{let ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,J)}}else{let Z=w.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ut(_.__webglDepthbuffer,w,!1);else{let ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(w,_,V){let Z=n.get(w);_!==void 0&&bt(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&$t(w)}function P(w){let _=w.texture,V=n.get(w),Z=n.get(_);w.addEventListener("dispose",L);let ot=w.textures,J=w.isWebGLCubeRenderTarget===!0,Nt=ot.length>1;if(Nt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)V.__webglFramebuffer[pt][Rt]=i.createFramebuffer()}else V.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)V.__webglFramebuffer[pt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let pt=0,Rt=ot.length;pt<Rt;pt++){let It=n.get(ot[pt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ut(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<ot.length;pt++){let Rt=ot[pt];V.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);let It=r.convert(Rt.format,Rt.colorSpace),rt=r.convert(Rt.type),St=b(Rt.internalFormat,It,rt,Rt.colorSpace,w.isXRRenderTarget===!0),Ot=xt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,St,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)bt(V.__webglFramebuffer[pt][Rt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt);else bt(V.__webglFramebuffer[pt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let pt=0,Rt=ot.length;pt<Rt;pt++){let It=ot[pt],rt=n.get(It),St=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(St=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,rt.__webglTexture),kt(St,It),bt(V.__webglFramebuffer,w,It,i.COLOR_ATTACHMENT0+pt,St,0),m(It)&&f(St)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),kt(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)bt(V.__webglFramebuffer[Rt],w,_,i.COLOR_ATTACHMENT0,pt,Rt);else bt(V.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,pt,0);m(_)&&f(pt),e.unbindTexture()}w.depthBuffer&&$t(w)}function at(w){let _=w.textures;for(let V=0,Z=_.length;V<Z;V++){let ot=_[V];if(m(ot)){let J=A(w),Nt=n.get(ot).__webglTexture;e.bindTexture(J,Nt),f(J),e.unbindTexture()}}}let st=[],et=[];function tt(w){if(w.samples>0){if(ut(w)===!1){let _=w.textures,V=w.width,Z=w.height,ot=i.COLOR_BUFFER_BIT,J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(w),pt=_.length>1;if(pt)for(let It=0;It<_.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let It=0;It<_.length;It++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[It]);let rt=n.get(_[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,ot,i.NEAREST),c===!0&&(st.length=0,et.length=0,st.push(i.COLOR_ATTACHMENT0+It),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(J),et.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let It=0;It<_.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[It]);let rt=n.get(_[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function xt(w){return Math.min(s.maxSamples,w.samples)}function ut(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function vt(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function qt(w,_){let V=w.colorSpace,Z=w.format,ot=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==wi&&V!==qn&&(oe.getTransfer(V)===ue?(Z!==an||ot!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),_}function Ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=se,this.setupRenderTarget=P,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ut}function y0(i,t){function e(n,s=qn){let r,o=oe.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xc)return i.BYTE;if(n===yc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===ms)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===bc)return i.RGB;if(n===an)return i.RGBA;if(n===ns)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===Tc)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Ho||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Yo||n===Zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Yo)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===$o||n===Ko||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ha||n===ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var v0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:v0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Yc,f={},A=e.getContextAttributes(),b=null,y=null,R=[],C=[],L=new mt,O=null,T=new Ae;T.viewport=new he;let S=new Ae;S.viewport=new he;let U=[T,S],H=new bo,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=R[K];return it===void 0&&(it=new os,R[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=R[K];return it===void 0&&(it=new os,R[K]=it),it.getGripSpace()},this.getHand=function(K){let it=R[K];return it===void 0&&(it=new os,R[K]=it),it.getHandSpace()};function W(K){let it=C.indexOf(K.inputSource);if(it===-1)return;let bt=R[it];bt!==void 0&&(bt.update(K.inputSource,K.frame,l||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let K=0;K<R.length;K++){let it=C[K];it!==null&&(C[K]=null,R[K].disconnect(it))}D=null,B=null,m.reset();for(let K in f)delete f[K];t.setRenderTarget(b),p=null,d=null,h=null,s=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),A.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ut=null,Lt=null;A.depth&&(Lt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=A.stencil?_s:ns,Ut=A.stencil?gs:di);let $t={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:an,type:gn,depthTexture:new Js(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let bt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Sn(p.framebufferWidth,p.framebufferHeight,{format:an,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(K){for(let it=0;it<K.removed.length;it++){let bt=K.removed[it],Ut=C.indexOf(bt);Ut>=0&&(C[Ut]=null,R[Ut].disconnect(bt))}for(let it=0;it<K.added.length;it++){let bt=K.added[it],Ut=C.indexOf(bt);if(Ut===-1){for(let $t=0;$t<R.length;$t++)if($t>=C.length){C.push(bt),Ut=$t;break}else if(C[$t]===null){C[$t]=bt,Ut=$t;break}if(Ut===-1)break}let Lt=R[Ut];Lt&&Lt.connect(bt)}}let X=new I,ht=new I;function _t(K,it,bt){X.setFromMatrixPosition(it.matrixWorld),ht.setFromMatrixPosition(bt.matrixWorld);let Ut=X.distanceTo(ht),Lt=it.projectionMatrix.elements,$t=bt.projectionMatrix.elements,se=Lt[14]/(Lt[10]-1),P=Lt[14]/(Lt[10]+1),at=(Lt[9]+1)/Lt[5],st=(Lt[9]-1)/Lt[5],et=(Lt[8]-1)/Lt[0],tt=($t[8]+1)/$t[0],xt=se*et,ut=se*tt,vt=Ut/(-et+tt),qt=vt*-et;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qt),K.translateZ(vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Ht=se+vt,w=P+vt,_=xt-qt,V=ut+(Ut-qt),Z=at*P/w*Ht,ot=st*P/w*Ht;K.projectionMatrix.makePerspective(_,V,Z,ot,Ht,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Et(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let it=K.near,bt=K.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),H.near=S.near=T.near=it,H.far=S.far=T.far=bt,(D!==H.near||B!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,B=H.far),H.layers.mask=K.layers.mask|6,T.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;let Ut=K.parent,Lt=H.cameras;Et(H,Ut);for(let $t=0;$t<Lt.length;$t++)Et(Lt[$t],Ut);Lt.length===2?_t(H,T,S):H.projectionMatrix.copy(T.projectionMatrix),kt(K,H,Ut)};function kt(K,it,bt){bt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=is*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return f[K]};let Kt=null;function ie(K,it){if(u=it.getViewerPose(l||o),g=it,u!==null){let bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let P=0;P<bt.length;P++){let at=bt[P],st=null;if(p!==null)st=p.getViewport(at);else{let tt=h.getViewSubImage(d,at);st=tt.viewport,P===0&&(t.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(y))}let et=U[P];et===void 0&&(et=new Ae,et.layers.enable(P),et.viewport=new he,U[P]=et),et.matrix.fromArray(at.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(at.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),P===0&&(H.matrix.copy(et.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(et)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let P=h.getDepthInformation(bt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Lt&&Lt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let P=0;P<bt.length;P++){let at=bt[P].camera;if(at){let st=f[at];st||(st=new $s,f[at]=st);let et=h.getCameraImage(at);st.sourceTexture=et}}}}for(let bt=0;bt<R.length;bt++){let Ut=C[bt],Lt=R[bt];Ut!==null&&Lt!==void 0&&Lt.update(Ut,it,l||o)}Kt&&Kt(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let zt=new iu;zt.setAnimationLoop(ie),this.setAnimationLoop=function(K){Kt=K},this.dispose=function(){}}},Oi=new fn,S0=new fe;function b0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ic(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=t.get(f),b=A.envMap,y=A.envMapRotation;b&&(m.envMap.value=b,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(Oi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,b){let y=b.program;n.uniformBlockBinding(A,y)}function l(A,b){let y=s[A.id];y===void 0&&(g(A),y=u(A),s[A.id]=y,A.addEventListener("dispose",m));let R=b.program;n.updateUBOMapping(A,R);let C=t.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function u(A){let b=h();A.__bindingPointIndex=b;let y=i.createBuffer(),R=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let b=s[A.id],y=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,L=y.length;C<L;C++){let O=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,S=O.length;T<S;T++){let U=O[T];if(p(U,C,T,R)===!0){let H=U.__offset,D=Array.isArray(U.value)?U.value:[U.value],B=0;for(let W=0;W<D.length;W++){let G=D[W],nt=x(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+B,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,B),B+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,b,y,R){let C=A.value,L=b+"_"+y;if(R[L]===void 0)return typeof C=="number"||typeof C=="boolean"?R[L]=C:R[L]=C.clone(),!0;{let O=R[L];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return R[L]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(A){let b=A.uniforms,y=0,R=16;for(let L=0,O=b.length;L<O;L++){let T=Array.isArray(b[L])?b[L]:[b[L]];for(let S=0,U=T.length;S<U;S++){let H=T[S],D=Array.isArray(H.value)?H.value:[H.value];for(let B=0,W=D.length;B<W;B++){let G=D[B],nt=x(G),X=y%R,ht=X%nt.boundary,_t=X+ht;y+=ht,_t!==0&&R-_t<nt.storage&&(y+=R-_t),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=nt.storage}}}let C=y%R;return C>0&&(y+=R-C),A.__size=y,A.__cache={},this}function x(A){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){let b=A.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Ss=class{constructor(t={}){let{canvas:e=wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=be;let C=0,L=0,O=null,T=-1,S=null,U=new he,H=new he,D=null,B=new jt(0),W=0,G=e.width,nt=e.height,X=1,ht=null,_t=null,Et=new he(0,0,G,nt),kt=new he(0,0,G,nt),Kt=!1,ie=new cs,zt=!1,K=!1,it=new fe,bt=new I,Ut=new he,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function se(){return O===null?X:1}let P=n;function at(v,z){return e.getContext(v,z)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),P===null){let z="webgl2";if(P=at(z,v),P===null)throw at(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let st,et,tt,xt,ut,vt,qt,Ht,w,_,V,Z,ot,J,Nt,pt,Rt,It,rt,St,Ot,Ft,gt,Vt;function F(){st=new Gm(P),st.init(),Ft=new y0(P,st),et=new Nm(P,st,t,Ft),tt=new _0(P,st),et.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),xt=new Xm(P),ut=new s0,vt=new x0(P,st,tt,ut,et,Ft,xt),qt=new Om(y),Ht=new Vm(y),w=new $d(P),gt=new Dm(P,w),_=new Hm(P,w,xt,gt),V=new Ym(P,_,w,xt),rt=new qm(P,et,vt),pt=new Fm(ut),Z=new i0(y,qt,Ht,st,et,gt,pt),ot=new b0(y,ut),J=new o0,Nt=new d0(st),It=new Lm(y,qt,Ht,tt,V,p,c),Rt=new m0(y,V,et),Vt=new T0(P,xt,et,tt),St=new Um(P,st,xt),Ot=new Wm(P,st,xt),xt.programs=Z.programs,y.capabilities=et,y.extensions=st,y.properties=ut,y.renderLists=J,y.shadowMap=Rt,y.state=tt,y.info=xt}F();let ft=new Zc(y,P);this.xr=ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=st.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=st.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(v){v!==void 0&&(X=v,this.setSize(G,nt,!1))},this.getSize=function(v){return v.set(G,nt)},this.setSize=function(v,z,Y=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,nt=z,e.width=Math.floor(v*X),e.height=Math.floor(z*X),Y===!0&&(e.style.width=v+"px",e.style.height=z+"px"),this.setViewport(0,0,v,z)},this.getDrawingBufferSize=function(v){return v.set(G*X,nt*X).floor()},this.setDrawingBufferSize=function(v,z,Y){G=v,nt=z,X=Y,e.width=Math.floor(v*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,v,z)},this.getCurrentViewport=function(v){return v.copy(U)},this.getViewport=function(v){return v.copy(Et)},this.setViewport=function(v,z,Y,M){v.isVector4?Et.set(v.x,v.y,v.z,v.w):Et.set(v,z,Y,M),tt.viewport(U.copy(Et).multiplyScalar(X).round())},this.getScissor=function(v){return v.copy(kt)},this.setScissor=function(v,z,Y,M){v.isVector4?kt.set(v.x,v.y,v.z,v.w):kt.set(v,z,Y,M),tt.scissor(H.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(v){tt.setScissorTest(Kt=v)},this.setOpaqueSort=function(v){ht=v},this.setTransparentSort=function(v){_t=v},this.getClearColor=function(v){return v.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(v=!0,z=!0,Y=!0){let M=0;if(v){let E=!1;if(O!==null){let q=O.texture.format;E=q===Vo||q===ko||q===zo}if(E){let q=O.texture.type,k=q===gn||q===di||q===ps||q===gs||q===Fo||q===Oo,N=It.getClearColor(),Q=It.getClearAlpha(),ct=N.r,Mt=N.g,$=N.b;k?(g[0]=ct,g[1]=Mt,g[2]=$,g[3]=Q,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=ct,x[1]=Mt,x[2]=$,x[3]=Q,P.clearBufferiv(P.COLOR,0,x))}else M|=P.COLOR_BUFFER_BIT}z&&(M|=P.DEPTH_BUFFER_BIT),Y&&(M|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),It.dispose(),J.dispose(),Nt.dispose(),ut.dispose(),qt.dispose(),Ht.dispose(),V.dispose(),gt.dispose(),Vt.dispose(),Z.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",de),ft.removeEventListener("sessionend",Rn),Me.stop()};function yt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let v=xt.autoReset,z=Rt.enabled,Y=Rt.autoUpdate,M=Rt.needsUpdate,E=Rt.type;F(),xt.autoReset=v,Rt.enabled=z,Rt.autoUpdate=Y,Rt.needsUpdate=M,Rt.type=E}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){let z=v.target;z.removeEventListener("dispose",j),At(z)}function At(v){Wt(v),ut.remove(v)}function Wt(v){let z=ut.get(v).programs;z!==void 0&&(z.forEach(function(Y){Z.releaseProgram(Y)}),v.isShaderMaterial&&Z.releaseShaderCache(v))}this.renderBufferDirect=function(v,z,Y,M,E,q){z===null&&(z=Lt);let k=E.isMesh&&E.matrixWorld.determinant()<0,N=xn(v,z,Y,M,E);tt.setMaterial(M,k);let Q=Y.index,ct=1;if(M.wireframe===!0){if(Q=_.getWireframeAttribute(Y),Q===void 0)return;ct=2}let Mt=Y.drawRange,$=Y.attributes.position,dt=Mt.start*ct,Dt=(Mt.start+Mt.count)*ct;q!==null&&(dt=Math.max(dt,q.start*ct),Dt=Math.min(Dt,(q.start+q.count)*ct)),Q!==null?(dt=Math.max(dt,0),Dt=Math.min(Dt,Q.count)):$!=null&&(dt=Math.max(dt,0),Dt=Math.min(Dt,$.count));let Gt=Dt-dt;if(Gt<0||Gt===1/0)return;gt.setup(E,M,N,Y,Q);let Bt,Jt=St;if(Q!==null&&(Bt=w.get(Q),Jt=Ot,Jt.setIndex(Bt)),E.isMesh)M.wireframe===!0?(tt.setLineWidth(M.wireframeLinewidth*se()),Jt.setMode(P.LINES)):Jt.setMode(P.TRIANGLES);else if(E.isLine){let Pt=M.linewidth;Pt===void 0&&(Pt=1),tt.setLineWidth(Pt*se()),E.isLineSegments?Jt.setMode(P.LINES):E.isLineLoop?Jt.setMode(P.LINE_LOOP):Jt.setMode(P.LINE_STRIP)}else E.isPoints?Jt.setMode(P.POINTS):E.isSprite&&Jt.setMode(P.TRIANGLES);if(E.isBatchedMesh)if(E._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount,E._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Jt.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{let Pt=E._multiDrawStarts,ce=E._multiDrawCounts,ee=E._multiDrawCount,Pe=Q?w.get(Q).bytesPerElement:1,yn=ut.get(M).currentProgram.getUniforms();for(let we=0;we<ee;we++)yn.setValue(P,"_gl_DrawID",we),Jt.render(Pt[we]/Pe,ce[we])}else if(E.isInstancedMesh)Jt.renderInstances(dt,Gt,E.count);else if(Y.isInstancedBufferGeometry){let Pt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ce=Math.min(Y.instanceCount,Pt);Jt.renderInstances(dt,Gt,ce)}else Jt.render(dt,Gt)};function ae(v,z,Y){v.transparent===!0&&v.side===Ce&&v.forceSinglePass===!1?(v.side=Ue,v.needsUpdate=!0,Ze(v,z,Y),v.side=Bn,v.needsUpdate=!0,Ze(v,z,Y),v.side=Ce):Ze(v,z,Y)}this.compile=function(v,z,Y=null){Y===null&&(Y=v),f=Nt.get(Y),f.init(z),b.push(f),Y.traverseVisible(function(E){E.isLight&&E.layers.test(z.layers)&&(f.pushLight(E),E.castShadow&&f.pushShadow(E))}),v!==Y&&v.traverseVisible(function(E){E.isLight&&E.layers.test(z.layers)&&(f.pushLight(E),E.castShadow&&f.pushShadow(E))}),f.setupLights();let M=new Set;return v.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;let q=E.material;if(q)if(Array.isArray(q))for(let k=0;k<q.length;k++){let N=q[k];ae(N,Y,E),M.add(N)}else ae(q,Y,E),M.add(q)}),f=b.pop(),M},this.compileAsync=function(v,z,Y=null){let M=this.compile(v,z,Y);return new Promise(E=>{function q(){if(M.forEach(function(k){ut.get(k).currentProgram.isReady()&&M.delete(k)}),M.size===0){E(v);return}setTimeout(q,10)}st.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let ne=null;function He(v){ne&&ne(v)}function de(){Me.stop()}function Rn(){Me.start()}let Me=new iu;Me.setAnimationLoop(He),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(v){ne=v,ft.setAnimationLoop(v),v===null?Me.stop():Me.start()},ft.addEventListener("sessionstart",de),ft.addEventListener("sessionend",Rn),this.render=function(v,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,z,O),f=Nt.get(v,b.length),f.init(z),b.push(f),it.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(it,dn,z.reversedDepth),K=this.localClippingEnabled,zt=pt.init(this.clippingPlanes,K),m=J.get(v,A.length),m.init(),A.push(m),ft.enabled===!0&&ft.isPresenting===!0){let q=y.xr.getDepthSensingMesh();q!==null&&pi(q,z,-1/0,y.sortObjects)}pi(v,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ht,_t),$t=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,$t&&It.addToRenderList(m,v),this.info.render.frame++,zt===!0&&pt.beginShadows();let Y=f.state.shadowsArray;Rt.render(Y,v,z),zt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let M=m.opaque,E=m.transmissive;if(f.setupLights(),z.isArrayCamera){let q=z.cameras;if(E.length>0)for(let k=0,N=q.length;k<N;k++){let Q=q[k];Yn(M,E,v,Q)}$t&&It.render(v);for(let k=0,N=q.length;k<N;k++){let Q=q[k];Ye(m,v,Q,Q.viewport)}}else E.length>0&&Yn(M,E,v,z),$t&&It.render(v),Ye(m,v,z);O!==null&&L===0&&(vt.updateMultisampleRenderTarget(O),vt.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(y,v,z),gt.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],zt===!0&&pt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function pi(v,z,Y,M){if(v.visible===!1)return;if(v.layers.test(z.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(z);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ie.intersectsSprite(v)){M&&Ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(it);let k=V.update(v),N=v.material;N.visible&&m.push(v,k,N,Y,Ut.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ie.intersectsObject(v))){let k=V.update(v),N=v.material;if(M&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ut.copy(v.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Ut.copy(k.boundingSphere.center)),Ut.applyMatrix4(v.matrixWorld).applyMatrix4(it)),Array.isArray(N)){let Q=k.groups;for(let ct=0,Mt=Q.length;ct<Mt;ct++){let $=Q[ct],dt=N[$.materialIndex];dt&&dt.visible&&m.push(v,k,dt,Y,Ut.z,$)}}else N.visible&&m.push(v,k,N,Y,Ut.z,null)}}let q=v.children;for(let k=0,N=q.length;k<N;k++)pi(q[k],z,Y,M)}function Ye(v,z,Y,M){let E=v.opaque,q=v.transmissive,k=v.transparent;f.setupLightsView(Y),zt===!0&&pt.setGlobalState(y.clippingPlanes,Y),M&&tt.viewport(U.copy(M)),E.length>0&&Zn(E,z,Y),q.length>0&&Zn(q,z,Y),k.length>0&&Zn(k,z,Y),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Yn(v,z,Y,M){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[M.id]===void 0&&(f.state.transmissionRenderTarget[M.id]=new Sn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ms:gn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let q=f.state.transmissionRenderTarget[M.id],k=M.viewport||U;q.setSize(k.z*y.transmissionResolutionScale,k.w*y.transmissionResolutionScale);let N=y.getRenderTarget(),Q=y.getActiveCubeFace(),ct=y.getActiveMipmapLevel();y.setRenderTarget(q),y.getClearColor(B),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),$t&&It.render(Y);let Mt=y.toneMapping;y.toneMapping=Xn;let $=M.viewport;if(M.viewport!==void 0&&(M.viewport=void 0),f.setupLightsView(M),zt===!0&&pt.setGlobalState(y.clippingPlanes,M),Zn(v,Y,M),vt.updateMultisampleRenderTarget(q),vt.updateRenderTargetMipmap(q),st.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Dt=0,Gt=z.length;Dt<Gt;Dt++){let Bt=z[Dt],Jt=Bt.object,Pt=Bt.geometry,ce=Bt.material,ee=Bt.group;if(ce.side===Ce&&Jt.layers.test(M.layers)){let Pe=ce.side;ce.side=Ue,ce.needsUpdate=!0,In(Jt,Y,M,Pt,ce,ee),ce.side=Pe,ce.needsUpdate=!0,dt=!0}}dt===!0&&(vt.updateMultisampleRenderTarget(q),vt.updateRenderTargetMipmap(q))}y.setRenderTarget(N,Q,ct),y.setClearColor(B,W),$!==void 0&&(M.viewport=$),y.toneMapping=Mt}function Zn(v,z,Y){let M=z.isScene===!0?z.overrideMaterial:null;for(let E=0,q=v.length;E<q;E++){let k=v[E],N=k.object,Q=k.geometry,ct=k.group,Mt=k.material;Mt.allowOverride===!0&&M!==null&&(Mt=M),N.layers.test(Y.layers)&&In(N,z,Y,Q,Mt,ct)}}function In(v,z,Y,M,E,q){v.onBeforeRender(y,z,Y,M,E,q),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),E.onBeforeRender(y,z,Y,M,v,q),E.transparent===!0&&E.side===Ce&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,y.renderBufferDirect(Y,z,M,E,v,q),E.side=Bn,E.needsUpdate=!0,y.renderBufferDirect(Y,z,M,E,v,q),E.side=Ce):y.renderBufferDirect(Y,z,M,E,v,q),v.onAfterRender(y,z,Y,M,E,q)}function Ze(v,z,Y){z.isScene!==!0&&(z=Lt);let M=ut.get(v),E=f.state.lights,q=f.state.shadowsArray,k=E.state.version,N=Z.getParameters(v,E.state,q,z,Y),Q=Z.getProgramCacheKey(N),ct=M.programs;M.environment=v.isMeshStandardMaterial?z.environment:null,M.fog=z.fog,M.envMap=(v.isMeshStandardMaterial?Ht:qt).get(v.envMap||M.environment),M.envMapRotation=M.environment!==null&&v.envMap===null?z.environmentRotation:v.envMapRotation,ct===void 0&&(v.addEventListener("dispose",j),ct=new Map,M.programs=ct);let Mt=ct.get(Q);if(Mt!==void 0){if(M.currentProgram===Mt&&M.lightsStateVersion===k)return yr(v,N),Mt}else N.uniforms=Z.getUniforms(v),v.onBeforeCompile(N,y),Mt=Z.acquireProgram(N,Q),ct.set(Q,Mt),M.uniforms=N.uniforms;let $=M.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&($.clippingPlanes=pt.uniform),yr(v,N),M.needsLights=Mr(v),M.lightsStateVersion=k,M.needsLights&&($.ambientLightColor.value=E.state.ambient,$.lightProbe.value=E.state.probe,$.directionalLights.value=E.state.directional,$.directionalLightShadows.value=E.state.directionalShadow,$.spotLights.value=E.state.spot,$.spotLightShadows.value=E.state.spotShadow,$.rectAreaLights.value=E.state.rectArea,$.ltc_1.value=E.state.rectAreaLTC1,$.ltc_2.value=E.state.rectAreaLTC2,$.pointLights.value=E.state.point,$.pointLightShadows.value=E.state.pointShadow,$.hemisphereLights.value=E.state.hemi,$.directionalShadowMap.value=E.state.directionalShadowMap,$.directionalShadowMatrix.value=E.state.directionalShadowMatrix,$.spotShadowMap.value=E.state.spotShadowMap,$.spotLightMatrix.value=E.state.spotLightMatrix,$.spotLightMap.value=E.state.spotLightMap,$.pointShadowMap.value=E.state.pointShadowMap,$.pointShadowMatrix.value=E.state.pointShadowMatrix),M.currentProgram=Mt,M.uniformsList=null,Mt}function Ts(v){if(v.uniformsList===null){let z=v.currentProgram.getUniforms();v.uniformsList=Ms.seqWithValue(z.seq,v.uniforms)}return v.uniformsList}function yr(v,z){let Y=ut.get(v);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function xn(v,z,Y,M,E){z.isScene!==!0&&(z=Lt),vt.resetTextureUnits();let q=z.fog,k=M.isMeshStandardMaterial?z.environment:null,N=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wi,Q=(M.isMeshStandardMaterial?Ht:qt).get(M.envMap||k),ct=M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Mt=!!Y.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),$=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,Dt=!!Y.morphAttributes.color,Gt=Xn;M.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Gt=y.toneMapping);let Bt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Jt=Bt!==void 0?Bt.length:0,Pt=ut.get(M),ce=f.state.lights;if(zt===!0&&(K===!0||v!==S)){let ze=v===S&&M.id===T;pt.setState(M,v,ze)}let ee=!1;M.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ce.state.version||Pt.outputColorSpace!==N||E.isBatchedMesh&&Pt.batching===!1||!E.isBatchedMesh&&Pt.batching===!0||E.isBatchedMesh&&Pt.batchingColor===!0&&E.colorTexture===null||E.isBatchedMesh&&Pt.batchingColor===!1&&E.colorTexture!==null||E.isInstancedMesh&&Pt.instancing===!1||!E.isInstancedMesh&&Pt.instancing===!0||E.isSkinnedMesh&&Pt.skinning===!1||!E.isSkinnedMesh&&Pt.skinning===!0||E.isInstancedMesh&&Pt.instancingColor===!0&&E.instanceColor===null||E.isInstancedMesh&&Pt.instancingColor===!1&&E.instanceColor!==null||E.isInstancedMesh&&Pt.instancingMorph===!0&&E.morphTexture===null||E.isInstancedMesh&&Pt.instancingMorph===!1&&E.morphTexture!==null||Pt.envMap!==Q||M.fog===!0&&Pt.fog!==q||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==pt.numPlanes||Pt.numIntersection!==pt.numIntersection)||Pt.vertexAlphas!==ct||Pt.vertexTangents!==Mt||Pt.morphTargets!==$||Pt.morphNormals!==dt||Pt.morphColors!==Dt||Pt.toneMapping!==Gt||Pt.morphTargetsCount!==Jt)&&(ee=!0):(ee=!0,Pt.__version=M.version);let Pe=Pt.currentProgram;ee===!0&&(Pe=Ze(M,z,E));let yn=!1,we=!1,Jn=!1,pe=Pe.getUniforms(),en=Pt.uniforms;if(tt.useProgram(Pe.program)&&(yn=!0,we=!0,Jn=!0),M.id!==T&&(T=M.id,we=!0),yn||S!==v){tt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(P,"projectionMatrix",v.projectionMatrix),pe.setValue(P,"viewMatrix",v.matrixWorldInverse);let We=pe.map.cameraPosition;We!==void 0&&We.setValue(P,bt.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&pe.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,we=!0,Jn=!0)}if(E.isSkinnedMesh){pe.setOptional(P,E,"bindMatrix"),pe.setOptional(P,E,"bindMatrixInverse");let ze=E.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),pe.setValue(P,"boneTexture",ze.boneTexture,vt))}E.isBatchedMesh&&(pe.setOptional(P,E,"batchingTexture"),pe.setValue(P,"batchingTexture",E._matricesTexture,vt),pe.setOptional(P,E,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",E._indirectTexture,vt),pe.setOptional(P,E,"batchingColorTexture"),E._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",E._colorsTexture,vt));let nn=Y.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&rt.update(E,Y,Pe),(we||Pt.receiveShadow!==E.receiveShadow)&&(Pt.receiveShadow=E.receiveShadow,pe.setValue(P,"receiveShadow",E.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(en.envMap.value=Q,en.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),M.isMeshStandardMaterial&&M.envMap===null&&z.environment!==null&&(en.envMapIntensity.value=z.environmentIntensity),we&&(pe.setValue(P,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&vr(en,Jn),q&&M.fog===!0&&ot.refreshFogUniforms(en,q),ot.refreshMaterialUniforms(en,M,X,nt,f.state.transmissionRenderTarget[v.id]),Ms.upload(P,Ts(Pt),en,vt)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(Ms.upload(P,Ts(Pt),en,vt),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&pe.setValue(P,"center",E.center),pe.setValue(P,"modelViewMatrix",E.modelViewMatrix),pe.setValue(P,"normalMatrix",E.normalMatrix),pe.setValue(P,"modelMatrix",E.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){let ze=M.uniformsGroups;for(let We=0,Sa=ze.length;We<Sa;We++){let mi=ze[We];Vt.update(mi,Pe),Vt.bind(mi,Pe)}}return Pe}function vr(v,z){v.ambientLightColor.needsUpdate=z,v.lightProbe.needsUpdate=z,v.directionalLights.needsUpdate=z,v.directionalLightShadows.needsUpdate=z,v.pointLights.needsUpdate=z,v.pointLightShadows.needsUpdate=z,v.spotLights.needsUpdate=z,v.spotLightShadows.needsUpdate=z,v.rectAreaLights.needsUpdate=z,v.hemisphereLights.needsUpdate=z}function Mr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,z,Y){let M=ut.get(v);M.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,M.__autoAllocateDepthBuffer===!1&&(M.__useRenderToTexture=!1),ut.get(v.texture).__webglTexture=z,ut.get(v.depthTexture).__webglTexture=M.__autoAllocateDepthBuffer?void 0:Y,M.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,z){let Y=ut.get(v);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};let tl=P.createFramebuffer();this.setRenderTarget=function(v,z=0,Y=0){O=v,C=z,L=Y;let M=!0,E=null,q=!1,k=!1;if(v){let Q=ut.get(v);if(Q.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(P.FRAMEBUFFER,null),M=!1;else if(Q.__webglFramebuffer===void 0)vt.setupRenderTarget(v);else if(Q.__hasExternalTextures)vt.rebindTextures(v,ut.get(v.texture).__webglTexture,ut.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let $=v.depthTexture;if(Q.__boundDepthTexture!==$){if($!==null&&ut.has($)&&(v.width!==$.image.width||v.height!==$.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(v)}}let ct=v.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(k=!0);let Mt=ut.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Mt[z])?E=Mt[z][Y]:E=Mt[z],q=!0):v.samples>0&&vt.useMultisampledRTT(v)===!1?E=ut.get(v).__webglMultisampledFramebuffer:Array.isArray(Mt)?E=Mt[Y]:E=Mt,U.copy(v.viewport),H.copy(v.scissor),D=v.scissorTest}else U.copy(Et).multiplyScalar(X).floor(),H.copy(kt).multiplyScalar(X).floor(),D=Kt;if(Y!==0&&(E=tl),tt.bindFramebuffer(P.FRAMEBUFFER,E)&&M&&tt.drawBuffers(v,E),tt.viewport(U),tt.scissor(H),tt.setScissorTest(D),q){let Q=ut.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q.__webglTexture,Y)}else if(k){let Q=z;for(let ct=0;ct<v.textures.length;ct++){let Mt=ut.get(v.textures[ct]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ct,Mt.__webglTexture,Y,Q)}}else if(v!==null&&Y!==0){let Q=ut.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Q.__webglTexture,Y)}T=-1},this.readRenderTargetPixels=function(v,z,Y,M,E,q,k,N=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=ut.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&k!==void 0&&(Q=Q[k]),Q){tt.bindFramebuffer(P.FRAMEBUFFER,Q);try{let ct=v.textures[N],Mt=ct.format,$=ct.type;if(!et.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=v.width-M&&Y>=0&&Y<=v.height-E&&(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+N),P.readPixels(z,Y,M,E,Ft.convert(Mt),Ft.convert($),q))}finally{let ct=O!==null?ut.get(O).__webglFramebuffer:null;tt.bindFramebuffer(P.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(v,z,Y,M,E,q,k,N=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=ut.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&k!==void 0&&(Q=Q[k]),Q)if(z>=0&&z<=v.width-M&&Y>=0&&Y<=v.height-E){tt.bindFramebuffer(P.FRAMEBUFFER,Q);let ct=v.textures[N],Mt=ct.format,$=ct.type;if(!et.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,dt),P.bufferData(P.PIXEL_PACK_BUFFER,q.byteLength,P.STREAM_READ),v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+N),P.readPixels(z,Y,M,E,Ft.convert(Mt),Ft.convert($),0);let Dt=O!==null?ut.get(O).__webglFramebuffer:null;tt.bindFramebuffer(P.FRAMEBUFFER,Dt);let Gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Eh(P,Gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,q),P.deleteBuffer(dt),P.deleteSync(Gt),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,z=null,Y=0){let M=Math.pow(2,-Y),E=Math.floor(v.image.width*M),q=Math.floor(v.image.height*M),k=z!==null?z.x:0,N=z!==null?z.y:0;vt.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,k,N,E,q),tt.unbindTexture()};let Sr=P.createFramebuffer(),br=P.createFramebuffer();this.copyTextureToTexture=function(v,z,Y=null,M=null,E=0,q=null){q===null&&(E!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=E,E=0):q=0);let k,N,Q,ct,Mt,$,dt,Dt,Gt,Bt=v.isCompressedTexture?v.mipmaps[q]:v.image;if(Y!==null)k=Y.max.x-Y.min.x,N=Y.max.y-Y.min.y,Q=Y.isBox3?Y.max.z-Y.min.z:1,ct=Y.min.x,Mt=Y.min.y,$=Y.isBox3?Y.min.z:0;else{let nn=Math.pow(2,-E);k=Math.floor(Bt.width*nn),N=Math.floor(Bt.height*nn),v.isDataArrayTexture?Q=Bt.depth:v.isData3DTexture?Q=Math.floor(Bt.depth*nn):Q=1,ct=0,Mt=0,$=0}M!==null?(dt=M.x,Dt=M.y,Gt=M.z):(dt=0,Dt=0,Gt=0);let Jt=Ft.convert(z.format),Pt=Ft.convert(z.type),ce;z.isData3DTexture?(vt.setTexture3D(z,0),ce=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(vt.setTexture2DArray(z,0),ce=P.TEXTURE_2D_ARRAY):(vt.setTexture2D(z,0),ce=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let ee=P.getParameter(P.UNPACK_ROW_LENGTH),Pe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),we=P.getParameter(P.UNPACK_SKIP_ROWS),Jn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ct),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$);let pe=v.isDataArrayTexture||v.isData3DTexture,en=z.isDataArrayTexture||z.isData3DTexture;if(v.isDepthTexture){let nn=ut.get(v),ze=ut.get(z),We=ut.get(nn.__renderTarget),Sa=ut.get(ze.__renderTarget);tt.bindFramebuffer(P.READ_FRAMEBUFFER,We.__webglFramebuffer),tt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let mi=0;mi<Q;mi++)pe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ut.get(v).__webglTexture,E,$+mi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ut.get(z).__webglTexture,q,Gt+mi)),P.blitFramebuffer(ct,Mt,k,N,dt,Dt,k,N,P.DEPTH_BUFFER_BIT,P.NEAREST);tt.bindFramebuffer(P.READ_FRAMEBUFFER,null),tt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(E!==0||v.isRenderTargetTexture||ut.has(v)){let nn=ut.get(v),ze=ut.get(z);tt.bindFramebuffer(P.READ_FRAMEBUFFER,Sr),tt.bindFramebuffer(P.DRAW_FRAMEBUFFER,br);for(let We=0;We<Q;We++)pe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nn.__webglTexture,E,$+We):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nn.__webglTexture,E),en?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,q,Gt+We):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ze.__webglTexture,q),E!==0?P.blitFramebuffer(ct,Mt,k,N,dt,Dt,k,N,P.COLOR_BUFFER_BIT,P.NEAREST):en?P.copyTexSubImage3D(ce,q,dt,Dt,Gt+We,ct,Mt,k,N):P.copyTexSubImage2D(ce,q,dt,Dt,ct,Mt,k,N);tt.bindFramebuffer(P.READ_FRAMEBUFFER,null),tt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else en?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(ce,q,dt,Dt,Gt,k,N,Q,Jt,Pt,Bt.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(ce,q,dt,Dt,Gt,k,N,Q,Jt,Bt.data):P.texSubImage3D(ce,q,dt,Dt,Gt,k,N,Q,Jt,Pt,Bt):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,q,dt,Dt,k,N,Jt,Pt,Bt.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,q,dt,Dt,Bt.width,Bt.height,Jt,Bt.data):P.texSubImage2D(P.TEXTURE_2D,q,dt,Dt,k,N,Jt,Pt,Bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ee),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jn),q===0&&z.generateMipmaps&&P.generateMipmap(ce),tt.unbindTexture()},this.initRenderTarget=function(v){ut.get(v).__webglFramebuffer===void 0&&vt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?vt.setTextureCube(v,0):v.isData3DTexture?vt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?vt.setTexture2DArray(v,0):vt.setTexture2D(v,0),tt.unbindTexture()},this.resetState=function(){C=0,L=0,O=null,tt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var cu=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t));function lu(i,t,e,n=!0){if(!n)return i;let s=cu(t+Math.PI,i),r=s*(1-Math.exp(-1.15*e)),o=.8*e;return i+Math.max(-o,Math.min(o,r))}function hu(i){return Math.atan2(i.approach[0]-i.x,i.approach[1]-i.z)}function uu(){let i=0,t=null;return{reset(){t=null},resolve(e,n,s,r=!1){if(Math.hypot(e,n)<.08)return t=null,s;let o=Math.atan2(e,n);return(t===null||r||Math.abs(cu(o,t))>.18)&&(i=s,t=o),i}}}function fi(i,t,e,n=.1){n=Math.min(n,i/3,t/3,e/3);let s=new mn,r=-i/2,o=-t/2;s.moveTo(r+n,o),s.lineTo(r+i-n,o),s.quadraticCurveTo(r+i,o,r+i,o+n),s.lineTo(r+i,o+t-n),s.quadraticCurveTo(r+i,o+t,r+i-n,o+t),s.lineTo(r+n,o+t),s.quadraticCurveTo(r,o+t,r,o+t-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o);let a=new Ri(s,{depth:e-2*n,bevelEnabled:!0,bevelSize:n*.45,bevelThickness:n,bevelSegments:3,curveSegments:8});return a.translate(0,0,-e/2+n),a}function _r(i,t=new Set){i.updateWorldMatrix(!0,!0);let e=i.matrixWorld.clone().invert(),n=new Map,s=[];function r(o){if(!t.has(o)){if(o.isMesh&&!Array.isArray(o.material)){let a=o.material.uuid+":"+o.castShadow+":"+o.receiveShadow;n.has(a)||n.set(a,{material:o.material,castShadow:o.castShadow,receiveShadow:o.receiveShadow,p:[],n:[],uv:[],indices:[]});let c=n.get(a),l=o.geometry,u=new fe().multiplyMatrices(e,o.matrixWorld),h=new Zt().getNormalMatrix(u),d=l.attributes.position,p=l.attributes.normal,g=l.attributes.uv,x=c.p.length/3,m=new I;for(let f=0;f<d.count;f++)m.fromBufferAttribute(d,f).applyMatrix4(u),c.p.push(m.x,m.y,m.z),p?m.fromBufferAttribute(p,f).applyMatrix3(h).normalize():m.set(0,1,0),c.n.push(m.x,m.y,m.z),c.uv.push(g?g.getX(f):0,g?g.getY(f):0);if(l.index)for(let f of l.index.array)c.indices.push(x+f);else for(let f=0;f<d.count;f++)c.indices.push(x+f);s.push(o)}for(let a of o.children)r(a)}}for(let o of i.children)r(o);for(let o of s)o.removeFromParent();for(let o of new Set(s.map(a=>a.geometry)))o.dispose();for(let o of n.values()){let a=new ve;a.setAttribute("position",new Yt(o.p,3)),a.setAttribute("normal",new Yt(o.n,3)),a.setAttribute("uv",new Yt(o.uv,2)),a.setIndex(o.indices),a.computeBoundingSphere();let c=new Xt(a,o.material);c.castShadow=o.castShadow,c.receiveShadow=o.receiveShadow,i.add(c)}return i}function $c(i){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#c4c5cc",e.fillRect(0,0,256,256);for(let s=0;s<2;s++)for(let r=0;r<2;r++)e.fillStyle=(s+r)%2?"#c6c7ce":"#c2c3ca",e.fillRect(s*128+1,r*128+1,126,126);e.strokeStyle="#989aa5",e.lineWidth=1,e.beginPath(),e.moveTo(0,0),e.lineTo(256,0),e.moveTo(0,128),e.lineTo(256,128),e.moveTo(0,0),e.lineTo(0,256),e.moveTo(128,0),e.lineTo(128,256),e.stroke();let n=new Tn(t);return n.colorSpace=be,n.wrapS=n.wrapT=ri,n.anisotropy=2,new qe({color:i,map:n,roughness:.78,metalness:.12})}function Kc(i,t=8){let e=i.attributes.position,n=[];for(let s=0;s<e.count;s++)n.push(e.getX(s)/t,e.getZ(s)/t);return i.setAttribute("uv",new Yt(n,2)),i}function du(i,t){t.outputColorSpace=be,t.toneMapping=fs,t.toneMappingExposure=1.12,t.shadowMap.enabled=!0,t.shadowMap.type=To,i.background=new jt(657937),i.fog=new Ys(657937,.0125),i.add(new Pi(14542079,3354943,2.15));let e=new ui(16774639,3.1);e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-25e-5,e.shadow.normalBias=.025,i.add(e,e.target);let n=new ui(16757456,1.1);i.add(n,n.target);let s=new ar(16726925,0,10,2);return i.add(s),{follow(r,o,a){e.position.copy(r).add(new I(-10,20,12)),e.target.position.copy(r),n.position.copy(r).add(new I(9,9,-8)),n.target.position.copy(r);let c=o?16:0;s.intensity+=(c-s.intensity)*Math.min(1,a*6),o&&s.position.set(o.x,1.5,o.z)},setAccent(r){s.color.set(r),n.color.set(r).lerp(new jt(16777215),.65)}}}function fu(i){let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle="#a3a6ba",e.font="700 20px ui-monospace,Menlo,monospace",e.fillText("CH",8,26),e.font='900 70px Unbounded,"Arial Black",sans-serif',e.fillText(String(i+1).padStart(2,"0"),4,96);let n=new Tn(t);n.colorSpace=be;let s=new Xt(new wn(2.8,1.4),new _e({map:n,transparent:!0,opacity:.56,depthWrite:!1,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s}var w0=Object.freeze({width:1.07,eyeCenterX:.245,eyeCenterY:.01,eyeWidth:.255,eyeHeight:.21,irisOffset:.012,irisRadiusX:.094,irisRadiusY:.114,pupilRadiusX:.07,pupilRadiusY:.09,catchlightRadiusX:.009,catchlightRadiusY:.01,headScale:.92,hairWidthScale:1.45,hairCrownScale:1.34,hairDepthScale:1.08,hairline:.1});function cn(i,t=32,e=24,n=null){let s=[],r=[],o=[];for(let l=0;l<=t;l++)for(let u=0;u<=e;u++){let h=i(l/t,u/e);s.push(h.x,h.y,h.z),r.push(u/e,l/t)}let a=!1;if(n){let l=i(.47,.47),u=i(.48,.47).sub(l),h=i(.47,.48).sub(l);a=u.cross(h).dot(n)<0}for(let l=0;l<t;l++)for(let u=0;u<e;u++){let h=l*(e+1)+u,d=h+e+1;a?o.push(h,h+1,d,h+1,d+1,d):o.push(h,d,h+1,h+1,d,d+1)}let c=new ve;return c.setAttribute("position",new Yt(s,3)),c.setAttribute("uv",new Yt(r,2)),c.setIndex(o),c.computeVertexNormals(),c}function E0(i){let t=(i-.035)/.535,e=xs.clamp((t+1)/.8,0,1);return .535*(.76+.24*e*e*(3-2*e))*Math.sqrt(Math.max(0,1-t*t))}var pu=E0(-.14),Wy=[[[-.14,pu],[-.19,pu-.024],[-.245,.472],[-.29,.418]],[[-.29,.418],[-.335,.364],[-.433,.203],[-.475,.11]],[[-.475,.11],[-.491,.0746],[-.5,.045],[-.5,0]]].map(i=>new ci(...i.map(t=>new mt(...t))));function mu(i,t,e=.024,n=[0,0,1]){let s=new je(i.map(c=>new I(...c))),r=new I(...n).normalize();function o(c,l,u=0){let h=s.getPoint(c),d=s.getTangent(c),p=new I().crossVectors(r,d).normalize(),g=t*(.64+.4*Math.sin(Math.PI*c))*(1-c)**.62+6e-4,x=(l-.5)*2;return h.addScaledVector(p,x*g).addScaledVector(r,(e*(1-x*x)-.065*x*x+u)*Math.sin(Math.PI*(.12+.88*c)))}return{geometry:cn(o,32,12,r),sample:o,out:r}}function gu(i,t,e,{fold:n=.008,segments:s=28}={}){let r=new je(i.map(d=>new I(...d))),o=d=>new Gn(d.map((p,g)=>new mt(g/(d.length-1),p))),a=o(t),c=o(e);function l(d,p,g=0){let x=r.getPoint(d),m=r.getTangent(d),f=new I(1,0,0).addScaledVector(m,-m.x).normalize(),A=new I().crossVectors(m,f),b=p*Math.PI*2,y=n*Math.sin(d*Math.PI*7+b*2)*Math.sin(Math.PI*d),R=a.getPoint(d).y+y+g,C=c.getPoint(d).y+y+g;return x.addScaledVector(f,Math.cos(b)*R).addScaledVector(A,Math.sin(b)*C)}let u=cn((d,p)=>l(p,d),32,s),h=[0,1].map(d=>cn((p,g)=>r.getPoint(d).lerp(l(d,g),p),1,s,r.getTangent(d).multiplyScalar(d?1:-1)));return{geometry:u,sample:l,caps:h}}var Xy=[[[-1,-.08],[-.94,.54],[-.52,.99],[-.06,1]],[[-.06,1],[.53,1.02],[.96,.63],[1,.02]],[[1,.02],[.92,-.57],[.45,-.85],[.02,-.85]],[[.02,-.85],[-.48,-.85],[-.9,-.57],[-1,-.08]]].map(i=>new ci(...i.map(t=>new mt(...t))));function _u(){let i=new le,t=new le,e=[],n=[],s=new _e({color:16118773}),r=new _e({color:1513247,side:Ce});function o(x,m,f,A){let b=new Xt(m,f);return b.name=A,x.add(b),b}function a(x,m,f,A,b,y,R,C,L){let O=o(x,new Ge(1,24,16),m,f);return O.position.set(A,b,y),O.scale.set(R,C,L),O}let c=a(i,s,"simple-face",0,.025,0,.535,.565,.445),l=(x,m)=>.445*Math.sqrt(Math.max(0,1-(x/.535)**2-((m-.025)/.565)**2));function u(x,m,f,A,b){return o(i,cn((y,R)=>{let C=R*Math.PI*2,L=m+Math.cos(C)*A*y,O=f+Math.sin(C)*b*y;return new I(L,O,l(L,O)+.006)},4,24,new I(0,0,1)),r,x)}for(let x of[-1,1]){e.push(u(`eye-${x}`,x*.205,-.015,.049,.068));let m=a(i,s,`ear-${x}`,x*.527,-.045,-.015,.075,.12,.07);n.push({side:x,ear:m})}let h=[[-.115,-.205],[-.06,-.238],[0,-.249],[.06,-.238],[.115,-.205]],d=new je(h.map(([x,m])=>new I(x,m,l(x,m)+.008)));o(i,new Hn(d,20,.012,6,!1),r,"simple-smile"),i.add(t);let p=cn((x,m)=>{let f=m*Math.PI*2,A=Math.sin(f),b=A>0?1.52-.18*A:1.52-.64*A,y=x*b;return new I(-Math.cos(f)*Math.sin(y)*.59,.14+Math.cos(y)*.68,-.035+Math.sin(f)*Math.sin(y)*.49)},20,36);return o(t,p,r,"hair-cap"),[{points:[[.43,.53,.25],[.2,.53,.44],[-.15,.36,.5],[-.53,.2,.3]],width:.16},{points:[[.24,.68,.12],[-.04,.72,.26],[-.32,.57,.37],[-.58,.42,.18]],width:.12}].forEach(({points:x,width:m},f)=>o(t,mu(x,m,.025).geometry,r,`hair-sweep-${f}`)),{head:i,face:c,eyes:e,hair:t,ears:n}}function xu({onHeadBuilt:i}={}){let t=new le,e=new le;t.add(e),t.name="explorer";let n=(D,B=.8)=>new qe({color:D,roughness:B,metalness:0}),s={cloth:n(2697781,.96),rib:n(2105643,.98),seam:n(3421761,.92),white:n(15526896,.8),skin:new _e({color:16118773}),sole:n(15000811,.92),leather:n(2368816,.82),pink:n(16726925,.7),lining:n(9246541,.96)};s.pink.emissive.set(16726925),s.pink.emissiveIntensity=.38;let r=new Uint8Array(4096*4);for(let D=0;D<64;D++)for(let B=0;B<64;B++){let W=(D*64+B)*4,G=128+((B+D)%4<2?9:-9)+((B*17+D*13)%7-3);r.set([G,G,G,255],W)}let o=new as(r,64,64);o.wrapS=o.wrapT=ri,o.repeat.set(7,7),o.magFilter=Ke,o.minFilter=An,o.generateMipmaps=!0,o.needsUpdate=!0;for(let D of["cloth","rib","lining"])s[D].bumpMap=o,s[D].bumpScale=.0017;function a(D,B,W,G=0,nt=0,X=0){let ht=new Xt(B,s[W]||W);return ht.position.set(G,nt,X),ht.castShadow=!0,ht.receiveShadow=!0,D.add(ht),ht}function c(D,B,W,G,nt,X,ht,_t){let Et=a(D,new Ge(.5,28,20),B,W,G,nt);return Et.scale.set(X,ht,_t),Et}function l(D,B,W,G,nt,X,ht,_t,Et=.06){return a(D,fi(B,W,G,Et),nt,X,ht,_t)}function u(D,B,W,G){return a(D,new Hn(new je(B.map(nt=>new I(...nt))),28,W,6,!1),G)}function h(D,B,W="seam",G=.006){return u(D,B,G,W)}function d(D,B,W,G,nt="cloth",X=.008){let ht=gu(B,W,G,{fold:X});a(D,ht.geometry,nt);for(let _t of ht.caps)a(D,_t,nt);return ht}let p=d(e,[[0,.94,0],[0,1.1,.016],[0,1.35,0],[0,1.6,-.018],[0,1.79,-.025],[0,1.87,0]],[.46,.505,.49,.46,.365,.235],[.33,.36,.35,.315,.26,.18],"cloth",.01);d(e,[[0,.9,0],[0,.94,0],[0,1.02,.014]],[.445,.47,.5],[.31,.335,.35],"rib",.003),c(e,"skin",0,1.94,.025,.275,.29,.265);let g=cn((D,B)=>{let W=(B-.5)*.66,G=1.055+D*.275;return new I(W,G,.363+.025*Math.sin(Math.PI*D)-.065*(W/.4)**2)},10,20,new I(0,0,1));a(e,g,"cloth"),h(e,[[-.32,1.065,.326],[-.26,1.23,.362],[-.21,1.315,.37]]),h(e,[[.32,1.065,.326],[.26,1.23,.362],[.21,1.315,.37]]);for(let D of[-1,1]){let B=D*.145;c(e,"rib",B,1.755,.27,.047,.047,.022),u(e,[[B,1.76,.284],[B*1.08,1.56,.347],[B*1.25,1.33,.38]],.016,"white"),l(e,.035,.078,.036,"pink",B*1.25,1.295,.38,.01)}let x=_u(),{head:m}=x;m.position.set(0,2.28,.005),m.scale.setScalar(.92),e.add(m);let f=new le;f.name="raised-hood",m.add(f);function A(D,B){let W=B*Math.PI*2,G=D*Math.PI*.5,nt=Math.cos(G);return new I(.68*Math.cos(W)*nt,.1+.91*Math.sin(W)*nt,.28-.93*Math.sin(G)+.08*Math.sin(W)*nt)}let b=cn(A,24,48,new I(0,0,-1)),y=s.cloth.clone();y.side=Ce,a(f,b,y).name="hood-shell";let R=Array.from({length:65},(D,B)=>A(0,B/64));u(f,R,.032,"rib").name="hood-rim";let C=R.map(D=>new I(D.x*.974,.1+(D.y-.1)*.974,D.z+.005));u(f,C,.012,"lining").name="hood-lining",x.hood=f;for(let D of[-1,1])u(e,[[D*.31,1.14,-.42],[D*.37,1.63,-.42],[D*.34,1.8,-.04],[D*.31,1.5,.34],[D*.33,1.14,.38]],.044,"leather"),l(e,.082,.09,.04,"seam",D*.325,1.28,.4,.014);let L=new le;L.position.set(0,1.37,-.48),e.add(L),l(L,.79,.9,.27,"white",0,0,0,.115),l(L,.755,.865,.31,"leather",0,0,-.012,.1),l(L,.62,.65,.1,"cloth",0,-.01,-.195,.085);for(let D of[-1,1])l(L,.035,.52,.045,"pink",D*.337,.06,-.16,.014),l(L,.12,.32,.2,"rib",D*.385,-.17,-.02,.04);let O=a(L,new Te(.205,.023,10,48),"pink",0,.02,-.256),T=a(L,new Te(.205,.023,10,20,Math.PI*.55),"white",0,.02,-.257);T.rotation.z=.25,l(L,.16,.04,.05,"seam",0,-.35,-.246,.01),u(L,[[-.14,.43,0],[-.12,.51,0],[.12,.51,0],[.14,.43,0]],.027,"leather");let S=[];for(let D of[-1,1]){let ht=function(zt,K){let it=K*Math.PI*2,bt=.92+.08*Math.sin(Math.PI*zt),Ut=.09+Math.sin(it)*.325;return new I(Math.cos(it)*(.18+.025*(1+Math.sin(it)))*bt,-.878+zt*.15,Ut*bt)},B=new le;B.position.set(D*.252,.884,0),e.add(B),d(B,[[0,.025,-.015],[D*.025,-.19,.008],[D*.025,-.39,.018],[0,-.565,-.008]],[.196,.21,.196,.133],[.21,.219,.19,.133],"cloth",.012),d(B,[[0,-.535,-.008],[0,-.59,-.008],[0,-.625,-.008]],[.142,.13,.127],[.144,.13,.127],"rib",.003);let W=l(B,.22,.245,.035,"rib",D*.09,-.2,.201,.026);W.rotation.y=D*.27;let G=l(B,.23,.06,.038,"cloth",D*.09,-.095,.217,.014);G.rotation.y=D*.27;let nt=l(B,.09,.031,.014,"pink",D*.095,-.104,.238,.006);nt.rotation.y=D*.27;let X=new le;X.rotation.y=D*.1,B.add(X),a(X,cn(ht,10,40),"sole");let _t=new Gn([[0,1],[.28,.99],[.62,.87],[1,.6]].map(zt=>new mt(...zt)));a(X,cn((zt,K)=>{let it=K*Math.PI*2,bt=_t.getPoint(zt).y,Ut=.075*(1-zt)+Math.sin(it)*(.285*(1-zt)+.16*zt);return new I(Math.cos(it)*(.175+.02*(1+Math.sin(it)))*bt,-.742+zt*.215,Ut)},18,40),"leather");let Et=c(X,"cloth",0,-.567,.12,.19,.17,.16);Et.rotation.x=-.45,h(X,[[-.17,-.722,.26],[0,-.703,.357],[.17,-.722,.26]],"white",.012);for(let zt=0;zt<3;zt++)u(X,[[-.1,-.57-zt*.035,.14+zt*.047],[0,-.55-zt*.035,.155+zt*.047],[.1,-.57-zt*.035,.17+zt*.047]],.009,"seam");l(X,.22,.041,.025,"pink",0,-.728,-.231,.011),l(X,.045,.082,.025,"white",0,-.585,-.154,.009);let kt=new le;kt.position.set(D*.43,1.76,-.015),e.add(kt);let Kt=d(kt,[[D*.015,.015,0],[D*.12,-.18,-.005],[D*.145,-.37,.045],[D*.075,-.545,.19]],[.177,.19,.18,.125],[.18,.19,.18,.126],"cloth",.01);for(let zt of[.23,.35]){let K=cn((it,bt)=>Kt.sample(zt+it*.064,D<0?.25+bt*.42:-.17+bt*.42,.003),5,20,new I(D,0,1));a(kt,K,"pink")}d(kt,[[D*.088,-.515,.164],[D*.07,-.556,.205]],[.129,.118],[.13,.12],"white",0);let ie=c(kt,"skin",D*.055,-.607,.224,.19,.195,.16);ie.rotation.z=-D*.3,c(kt,"skin",D*.008,-.582,.277,.078,.12,.075),S.push({side:D,leg:B,arm:kt})}i&&(t.updateWorldMatrix(!0,!0),i(x));let U=new Set(S.flatMap(({leg:D,arm:B})=>[D,B]));_r(e,U);for(let D of U)_r(D);t.rotation.y=Math.PI;function H(D){s.pink.color.set(D),s.pink.emissive.set(D),s.lining.color.set(D).multiplyScalar(.32)}return{player:t,body:e,limbs:S,setAccent:H}}var yu={black:1316125,white:15658997,pink:16726925,gray:5659248},xr=Object.fromEntries(Object.entries(yu).map(([i,t])=>[i,new qe({color:t,roughness:i==="white"?.42:.68,metalness:.16})]));xr.pink.emissive.set(yu.pink);xr.pink.emissiveIntensity=.65;var A0=new _e({color:16777215,toneMapped:!1}),tv=new _e({color:16777215,side:Ue});function me(i,t,e,n=0,s=0,r=0){let o=new Xt(t,xr[e]);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function wt(i,t,e,n,s,r=0,o=0,a=0){return me(i,Math.min(t,e,n)<.08?new on(t,e,n):fi(t,e,n),s,r,o,a)}function Qc(i){let t=new le,e=(s,r,o,a,c,l,u=32)=>{let h=me(t,new Se(s,s,r,u),o,a,c,l);return h.rotation.x=Math.PI/2,h},n=(s,r,o,a,c)=>me(t,new Ge(s,20,14),r,o,a,c);if(i==="card")wt(t,1.5,1.02,.14,"white"),wt(t,1.5,.2,.16,"pink",0,.41,0),e(.2,.06,"pink",-.42,-.1,.08),wt(t,.6,.07,.04,"black",.24,0,.08),wt(t,.42,.07,.04,"gray",.15,-.18,.08),wt(t,.3,.07,.04,"gray",.09,-.34,.08),me(t,new Te(.13,.035,10,24),"gray",0,.66,0);else if(i==="phone"){wt(t,.88,1.62,.16,"white"),wt(t,.72,1.36,.05,"black",0,0,.08);for(let s=0;s<3;s++)for(let r=0;r<2;r++)wt(t,.22,.22,.05,(s+r)%3===0?"pink":"white",-.16+r*.32,.36-s*.34,.12);wt(t,.26,.035,.05,"gray",0,-.6,.12)}else if(i==="console"){let s=new le;s.rotation.x=.5,t.add(s),wt(s,1.7,.26,1,"white");for(let r=0;r<2;r++)for(let o=0;o<5;o++)wt(s,.2,.1,.18,(r*5+o)%4===1?"pink":"black",-.56+o*.22,.17,.02+r*.26);for(let r of[.72,.5])wt(s,.07,.03,.6,"black",r,.14,.1),wt(s,.14,.1,.12,"white",r,.2,r>.6?.24:-.02);wt(s,1.3,.55,.1,"black",-.1,.42,-.42),wt(s,.5,.12,.03,"pink",-.38,.5,-.36),wt(s,.7,.05,.03,"gray",-.28,.34,-.36)}else if(i==="chart")wt(t,1.55,1.12,.14,"white"),wt(t,1.34,.92,.05,"black",0,0,.07),[.2,.34,.48,.68].forEach((s,r)=>wt(t,.2,s,.06,r===3?"pink":"white",-.42+r*.28,-.36+s/2,.12)),wt(t,1.16,.03,.05,"gray",0,-.39,.11);else if(i==="broadcast"){wt(t,1.5,1.1,.7,"white"),wt(t,1.02,.8,.05,"black",-.14,0,.35);let s=new mn;s.moveTo(-.17,-.2),s.lineTo(.2,0),s.lineTo(-.17,.2),s.closePath(),me(t,new Ri(s,{depth:.05,bevelEnabled:!1}),"pink",-.14,0,.37),e(.07,.06,"gray",.56,.2,.36,16),e(.07,.06,"pink",.56,-.02,.36,16);for(let r of[-1,1]){let o=me(t,new Se(.022,.022,.8,10),"white",r*.2,.9,0);o.rotation.z=-r*.5,n(.05,"pink",r*.39,1.25,0),wt(t,.2,.12,.5,"gray",r*.5,-.6,0)}}else if(i==="document"){wt(t,1.16,1.5,.1,"white"),wt(t,.5,.2,.16,"pink",0,.72,.03);for(let s=0;s<4;s++)wt(t,.1,.1,.04,s===1?"pink":"gray",-.38,.34-s*.26,.06),wt(t,.62,.06,.04,"black",.08,.34-s*.26,.06)}else if(i==="book")wt(t,1.2,1.5,.34,"white"),wt(t,.18,1.5,.36,"pink",-.55,0,0),wt(t,.6,.3,.05,"black",.1,.3,.17),wt(t,.4,.05,.05,"gray",.1,-.02,.17),wt(t,.12,.46,.04,"pink",.36,-.88,0);else if(i==="compass"){e(.68,.18,"white",0,0,0,48),me(t,new Te(.68,.06,12,48),"gray",0,0,.06),e(.52,.04,"black",0,0,.1,48);let s=me(t,new ls(.13,.5,24),"pink",.12,.2,.15);s.rotation.z=-.5;let r=me(t,new ls(.13,.5,24),"white",-.12,-.2,.15);r.rotation.z=Math.PI-.5,n(.08,"white",0,0,.17)}else if(i==="server"){wt(t,1,1.62,.7,"white");for(let s=0;s<4;s++)wt(t,.82,.24,.05,"black",0,.54-s*.36,.35),n(.05,s===2?"gray":"pink",.3,.54-s*.36,.39),wt(t,.36,.04,.03,"gray",-.14,.54-s*.36,.38)}else if(i==="wrench"){wt(t,.25,1.15,.2,"white",0,-.2,0);let s=me(t,new Te(.37,.13,16,40,Math.PI*1.55),"pink",0,.5,0);s.rotation.z=.72,me(t,new Te(.14,.075,12,32),"white",0,-.76,0)}else if(i==="toolbox")wt(t,1.6,.92,.8,"white"),wt(t,1.64,.17,.84,"pink",0,.3,0),wt(t,.2,.3,.08,"black",0,.06,.42),me(t,new Te(.32,.07,12,32,Math.PI),"gray",0,.52,0);else if(i==="radio"){wt(t,1.6,1.02,.55,"white"),e(.3,.06,"black",-.38,-.04,.28,40),me(t,new Te(.18,.03,10,32),"white",-.38,-.04,.32),wt(t,.56,.2,.06,"pink",.36,.2,.28),n(.1,"pink",.22,-.22,.3),n(.1,"gray",.5,-.22,.3);let s=me(t,new Se(.022,.022,1,12),"white",.5,.98,0);s.rotation.z=-.3,n(.055,"pink",.65,1.45,0)}return t}function vu(i,{scale:t,obstacles:e}){let n=new le;i.add(n),n.name="night-plaza";let s=new Xt(new Se(110,110,.15,128),new qe({color:461071,roughness:.3,metalness:.4}));s.position.y=-.35,n.add(s);for(let h=0;h<24;h++){let d=h/24*Math.PI*2,p=67+h%3*6,g=me(n,new Te(2,.018,5,24,Math.PI*.8),"gray",Math.sin(d)*p,-.24,Math.cos(d)*p);g.rotation.x=-Math.PI/2,g.rotation.z=d}wt(n,7,.18,18,"gray",0,.06,45);for(let h of[-3.2,3.2]){for(let d=37;d<=53;d+=4)wt(n,.12,1.35,.12,"black",h,.68,d);wt(n,.15,.12,16,"gray",h,1.34,45),wt(n,.06,.035,16,"white",h,1.41,45);for(let d=38;d<=52;d+=2)wt(n,.07,.05,.8,"pink",h*.86,.16,d)}let r=new _e({color:13357803,transparent:!0,opacity:.035,depthWrite:!1});function o(h,d,p){wt(h,.4,.2,.4,"black",d,.12,p),wt(h,.1,4.6,.1,"gray",d,2.4,p),wt(h,.9,.1,.16,"gray",d,4.72,p);let g=new Xt(fi(.8,.06,.12,.02),A0);g.position.set(d,4.65,p),h.add(g);let x=new Xt(new Vn(1.8,32),r);x.rotation.x=-Math.PI/2,x.position.set(d,.024,p),h.add(x)}function a(h,d,p,g,x){wt(h,.1,.7,.1,"gray",d,p+.35,g);let m=me(h,new Ge(x,24,12,0,Math.PI*2,0,Math.PI*.42),"white",d,p+.7+x*.55,g);return m.rotation.x=Math.PI*.78,me(h,new Ge(.07,12,8),"pink",d,p+.86+x*.3,g+x*.5)}function c(h,d,p,g,x){h*=t,d*=t;let m=new le;m.position.set(h,0,d),n.add(m);let f=x===4?4.6:3.7,A=g/2;wt(m,p+.2,.2,g+.2,"gray",0,.1,0),wt(m,p,f,g,"black",0,f/2+.14,0),wt(m,p+.16,.12,g+.16,"gray",0,f+.2,0),wt(m,p+.1,.04,g+.1,"white",0,f+.28,0);for(let y of[-1,1])wt(m,.09,f-.5,.09,"pink",y*(p/2-.02),f/2+.2,A+.02),wt(m,.05,f-.9,.05,"pink",y*(p/2-.3),f/2+.2,A+.03);wt(m,p*.9,.04,.05,"pink",0,.3,A+.05);let b=Math.min(1.8,p*.34);wt(m,b+.24,2.5,.08,"gray",0,1.4,A+.02),wt(m,b,2.3,.1,"black",0,1.32,A+.05);for(let y of[-1,1])wt(m,.05,2.36,.05,"pink",y*(b/2+.05),1.36,A+.12);wt(m,b+.15,.05,.05,"pink",0,2.56,A+.12);for(let y=0;y<5;y++)wt(m,p*.2,.045,.04,"gray",-p*.33,1+y*.16,A+.04);wt(m,p*.86,.08,.1,"gray",0,f+.52,A-.2);for(let y of[-1,1])wt(m,.07,.36,.07,"gray",y*p*.4,f+.4,A-.2);wt(m,p*.3,.4,g*.3,"gray",-p*.22,f+.5,-g*.16);for(let y=0;y<4;y++)wt(m,p*.24,.03,.06,"black",-p*.22,f+.72,-g*.24+y*.1);if(a(m,p*.26,f+.26,-g*.14,x===4?.75:.55),x===4){let y=me(m,new Se(.05,.08,4.2,12),"gray",-p*.4,f+2.4,g*.2);for(let R of[1.2,2.2,3.2])me(m,new Te(.26-.06*(R-1.2),.03,8,24),"pink",-p*.4,f+.3+R,g*.2).rotation.x=Math.PI/2;me(m,new Ge(.09,12,8),"pink",-p*.4,f+4.56,g*.2)}o(m,p*.37,g*.28+.9),e.push({x:h,z:d,r:Math.max(p,g)*.52})}[[0,12.5,6,4],[-26,3,4.8,3.5],[-26,-10,4.8,3.5],[-9,-27,6,3.5],[16,-20,11,5],[-10,-10,6,4],[19,18,5,4],[-10,10.5,6,4]].forEach((h,d)=>c(...h,d));let l=-10*t,u=8*t;for(let h=0;h<3;h++){let d=h/3*Math.PI*2;me(n,new Se(.045,.07,11,10),"gray",l+Math.sin(d)*.42,5.5,u+Math.cos(d)*.42).rotation.set(-Math.cos(d)*.07,0,Math.sin(d)*.07)}for(let h=1.5;h<=9.5;h+=2)me(n,new Te(.62-h*.045,.03,8,24),"white",l,h,u).rotation.x=Math.PI/2;me(n,new Se(.03,.03,2.4,10),"white",l,12,u),me(n,new Ge(.13,16,12),"pink",l,13.25,u);for(let[h,d]of[[.9,11.2],[1.5,11.5],[2.1,11.8]])for(let p of[-1,1]){let g=me(n,new Te(h,.035,8,36,Math.PI*.5),"pink",l,d,u);g.rotation.z=p>0?-Math.PI*.25:Math.PI*.75}for(let h=0;h<36;h++){let d=h/36*Math.PI*2,p=57.3,g=new le;g.position.set(Math.sin(d)*p,0,Math.cos(d)*p),g.rotation.y=d,n.add(g),wt(g,7.5,.7,.42,"black",0,.36,0),wt(g,7.6,.09,.5,"gray",0,.76,0);for(let x of[-3.6,3.6])wt(g,.12,.67,.14,"gray",x,1.04,0);wt(g,7.5,.085,.13,"white",0,1.37,0),wt(g,3,.046,.047,"pink",0,.17,-.24)}for(let h=0;h<22;h++){let d=h/22*Math.PI*2,p=77+h%3*6,g=8+h%5*3,x=new le;x.position.set(Math.sin(d)*p,-.2,Math.cos(d)*p),x.rotation.y=d,n.add(x),wt(x,4+h%3,g,5,"black",0,g/2,0),wt(x,.05,g*.75,.06,"gray",-1.5,g*.5,-2.53),h%2===0&&wt(x,2.4,.05,.05,"pink",0,g*.72,-2.54),h%3===1&&wt(x,1.2,.05,.05,"pink",.6,g*.4,-2.54),h%4===0&&me(x,new Ge(.12,10,8),"pink",0,g+.3,0)}return _r(n)}function jc(i){let t=new Ss({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});t.setSize(144,144),t.setPixelRatio(1),t.toneMapping=fs,t.toneMappingExposure=1.12;let e=new Ei,n=new Ae(35,1,.1,20);n.position.set(2,1.5,4.5),n.lookAt(0,0,0),e.add(new Pi(16053759,4868192,2.3));let s=new ui(16777215,3.2);s.position.set(-3,5,4),e.add(s);let r={};for(let o of i){let a=Qc(o.model);e.add(a),t.render(e,n),r[o.id]=t.domElement.toDataURL("image/png"),e.remove(a),a.traverse(c=>{c.isMesh&&c.geometry.dispose()})}return t.dispose(),t.forceContextLoss(),r}function Mu(i){xr.pink.color.set(i),xr.pink.emissive.set(i)}function uv(i,{onNear:t,onRead:e,onPosition:n,onFailure:s,onImages:r=()=>{},onCoin:o=()=>{},onCoinMiss:a=()=>{},onFall:c=()=>{},reduced:l=!1}){let u=new Ss({antialias:!0,alpha:!1});u.setPixelRatio(Math.min(devicePixelRatio,1.5)),u.setClearColor(1118486),i.appendChild(u.domElement),u.domElement.setAttribute("aria-label","\u30A2\u30D0\u30BF\u30FC\u3067\u6B69\u304F3D\u7A7A\u9593\u3002WASD\u307E\u305F\u306F\u77E2\u5370\u30AD\u30FC\u3067\u79FB\u52D5\u3001F\u3067\u8ABF\u3079\u308B\u3002"),u.domElement.tabIndex=0;let h=new Ei,d=new le;h.add(d);let p=new Ae(52,1,.1,180),g=du(h,u),m=Object.fromEntries(Object.entries({pink:[16726925,12197728,16744885],white:[15856115,10263720,16777215],gray:[5329247,3355456,7566212],dark:[2368558,1447455,3552836],black:[1315868,526350,2500145]}).map(([M,E])=>[M,new qe({color:E[0],roughness:M==="white"?.5:.72,metalness:.12})]));m.pink.emissive.set(16726925),m.pink.emissiveIntensity=.7;let f=new _e({color:16118783,toneMapped:!1}),A=new _e({color:16726925,toneMapped:!1}),b=new _e({color:16777215,transparent:!0,opacity:.03,depthWrite:!1,side:Ce,toneMapped:!1}),y=new _e({color:16726925,transparent:!0,opacity:.13,depthWrite:!1,side:Ce,blending:lr,toneMapped:!1});function R(M,E,q,k,N,Q,ct,Mt="gray"){let $=new Xt(new on(N,Q,ct),m[Mt]);return $.position.set(E*(M===d?re:1),q,k*(M===d?re:1)),$.castShadow=!0,$.receiveShadow=!0,M.add($),$}function C(M,E,q,k=0,N=0,Q=0){let ct=new Xt(E,m[q]);return ct.position.set(k*(M===d?re:1),N,Q*(M===d?re:1)),ct.receiveShadow=!0,M.add(ct),ct}let L=_i.map(M=>({x:M.x*re,z:M.z*re,r:.55})),O=C(d,Kc(new Se(38*re,34*re,4,128)),"dark",0,-2.05,0);O.material=$c(2500660);let T=[],S=[];for(let{points:M,width:E}of wr){let q=T.length/3;M.forEach((k,N)=>{let Q=M[Math.max(0,N-1)],ct=M[Math.min(M.length-1,N+1)],Mt=ct[0]-Q[0],$=ct[1]-Q[1],dt=Math.hypot(Mt,$),Dt=-$/dt*E/2,Gt=Mt/dt*E/2;if(T.push(k[0]+Dt,.009,k[1]+Gt,k[0]-Dt,.009,k[1]-Gt),N<M.length-1){let Bt=q+N*2;S.push(Bt,Bt+2,Bt+1,Bt+1,Bt+2,Bt+3)}});for(let k of[M[0],M[M.length-1]]){let N=T.length/3;T.push(k[0],.009,k[1]);for(let Q=0;Q<=40;Q++){let ct=Q/40*Math.PI*2;T.push(k[0]+Math.cos(ct)*E/2,.009,k[1]+Math.sin(ct)*E/2),Q<40&&S.push(N,N+Q+2,N+Q+1)}}}let U=new ve;U.setAttribute("position",new Yt(T,3)),U.setIndex(S),U.computeVertexNormals();let H=C(d,U,"gray");Kc(U),H.material=$c(4672090);let D=M=>{let E=M.slice(1);return .2126*parseInt(E.slice(0,2),16)+.7152*parseInt(E.slice(2,4),16)+.0722*parseInt(E.slice(4,6),16)>145?"#111116":"#ffffff"},B="#ff3b8d",W=new Set,G=new De;function nt(M,E){let q=new Vn(M,40),k=new Vn(M,40);q.translate(0,0,E),k.rotateY(Math.PI),k.translate(0,0,-E);let N=new ve,Q=q.attributes.position.count;for(let ct of["position","normal","uv"]){let Mt=q.attributes[ct].array,$=k.attributes[ct].array,dt=new Float32Array(Mt.length+$.length);dt.set(Mt),dt.set($,Mt.length),N.setAttribute(ct,new Oe(dt,q.attributes[ct].itemSize))}return N.setIndex([...q.index.array,...Array.from(k.index.array,ct=>ct+Q)]),N}let X=[[1,.3,.07],[5,.43,.09],[10,.58,.11]].map(([M,E,q])=>{let k=Ca.filter($=>$.value===M),N=document.createElement("canvas");N.width=N.height=256;let Q=new Tn(N);Q.colorSpace=be,Q.anisotropy=4;let ct=new Ai(new Se(E,E,q,40,1,!0).rotateX(Math.PI/2),M===1?m.pink:m.white,k.length),Mt=new Ai(nt(E*.94,q/2+.004),new _e({map:Q,toneMapped:!1}),k.length);for(let $ of[ct,Mt])$.instanceMatrix.setUsage(ga),$.frustumCulled=!1,d.add($);return{value:M,list:k,canvas:N,texture:Q,rim:ct,face:Mt}}),ht=X[2],_t=new Ai(new Se(.05,.42,7,16,1,!0),y,ht.list.length);_t.instanceMatrix.setUsage(ga),_t.frustumCulled=!1,d.add(_t);function Et(){for(let{value:M,canvas:E,texture:q}of X){let k=E.getContext("2d"),N=D(B),Q=M===10;k.fillStyle=Q?"#f5f5f9":B,k.fillRect(0,0,256,256),k.strokeStyle=Q?B:N,k.lineWidth=7,k.beginPath(),k.arc(128,128,104,0,Math.PI*2),k.stroke(),k.lineWidth=3,k.setLineDash([5,9]),k.beginPath(),k.arc(128,128,90,0,Math.PI*2),k.stroke(),k.setLineDash([]),k.fillStyle=Q?B:N,M===1?(k.beginPath(),k.moveTo(104,78),k.lineTo(104,178),k.lineTo(186,128),k.closePath(),k.fill()):(k.font=`900 ${M===10?104:136}px Unbounded,"Arial Black",sans-serif`,k.textAlign="center",k.textBaseline="middle",k.fillText(String(M),128,136)),q.needsUpdate=!0}}let kt=new mn;for(let M=0;M<=100;M++){let E=xe.start+(xe.end-xe.start)*M/100,q=sn(E)-xe.halfWidth;M?kt.lineTo(E,q):kt.moveTo(E,q)}for(let M=100;M>=0;M--){let E=xe.start+(xe.end-xe.start)*M/100;kt.lineTo(E,sn(E)+xe.halfWidth)}kt.closePath();let Kt=new Xt(new rr(kt),new qe({color:1450806,roughness:.24,metalness:.6,side:Ce}));Kt.rotation.x=Math.PI/2,Kt.position.y=.045,d.add(Kt);let ie=new qe({color:9936559,roughness:.48,metalness:.28});for(let M of[-1,1]){let E=[];for(let k=0;k<=100;k++){let N=xe.start+(xe.end-xe.start)*k/100;E.push(new I(N,.075,sn(N)+M*(xe.halfWidth+.12)))}let q=new Xt(new Hn(new je(E),100,.055,6,!1),ie);d.add(q)}let zt=new Xt(new on(xe.bridgeHalf*2,.16,5),m.gray);zt.position.set(xe.bridgeX,.07,sn(xe.bridgeX)),d.add(zt);for(let M=-2;M<=2;M+=.5){let E=new Xt(new on(3.2,.03,.07),m.white);E.position.set(xe.bridgeX,.17,sn(xe.bridgeX)+M),d.add(E)}for(let M of ba){let E=new Xt(new Se(M.r,M.r,.18,32),m.white);E.position.set(M.x,.07,M.z),d.add(E)}let K=[];for(let M=0;M<12;M++){let E=28+M*2,q=new Te(.3,.025,6,24,Math.PI),k=new Xt(q,m.gray);k.rotation.x=-Math.PI/2,k.position.set(E,.065,sn(E)),d.add(k),K.push(k)}let it=[],bt=new Map,Ut=new Map,Lt=new Map,$t=new Map,se=new Set,P=new Set,at=null;function st(M,E,q=0){let k=document.createElement("canvas");k.width=1024,k.height=576;let N=k.getContext("2d"),Q=String(E+1).padStart(2,"0"),ct='"Zen Kaku Gothic New","Hiragino Sans",sans-serif',Mt="ui-monospace,Menlo,monospace",$=D(B);N.fillStyle="#07070b",N.fillRect(0,0,1024,576),N.font='900 400px Unbounded,"Arial Black",sans-serif',N.textAlign="right",N.lineWidth=7,N.strokeStyle=B,N.globalAlpha=q===2?1:q<0?.32:.75,N.strokeText(Q,1012,402),N.globalAlpha=1,N.textAlign="left",N.fillStyle="#ffffff0b";for(let Gt=0;Gt<576;Gt+=6)N.fillRect(0,Gt,1024,2);N.fillStyle=B,N.fillRect(48,48,152,58),N.fillStyle=$,N.font=`700 34px ${Mt}`,N.fillText("CH."+Q,62,89),N.fillStyle="#f5f5f9",N.font=`700 36px ${ct}`,N.fillText(M.short,224,90);let dt=96;for(N.font=`900 ${dt}px ${ct}`;N.measureText(M.title).width>900&&dt>48;)dt-=4,N.font=`900 ${dt}px ${ct}`;N.fillStyle="#ffffff",N.shadowColor="#07070b",N.shadowBlur=20,N.fillText(M.title,48,332),N.shadowBlur=0,N.fillStyle=q===2?B:"#16161f",N.fillRect(0,452,1024,124),N.fillStyle=q===2?$:B,q<0?(N.fillStyle="#8b8da3",N.fillRect(60,502,28,24),N.lineWidth=5,N.strokeStyle="#8b8da3",N.beginPath(),N.arc(74,502,10,Math.PI,0),N.stroke(),N.font=`700 40px ${Mt}`,N.fillText("LOCKED",104,529),N.fillStyle=B,N.beginPath(),N.arc(838,514,30,0,Math.PI*2),N.fill(),N.fillStyle=$,N.beginPath(),N.moveTo(829,499),N.lineTo(829,529),N.lineTo(853,514),N.closePath(),N.fill(),N.fillStyle="#ffffff",N.font='900 56px Unbounded,"Arial Black",sans-serif',N.fillText(String(M.cost),884,534)):(N.beginPath(),N.arc(74,514,13,0,Math.PI*2),q?N.fill():(N.lineWidth=5,N.strokeStyle=B,N.stroke()),N.font=`700 40px ${Mt}`,N.fillText(["STANDBY","REC","ON AIR"][q],104,529)),q>=0&&(N.fillStyle=q===2?$:"#c9cad6",N.font=`700 40px ${ct}`,N.textAlign="right",N.fillText(["\u8FD1\u3065\u3044\u3066\u8ABF\u3079\u308B","\u672A\u4FEE\u5FA9 \xB7 \u8ABF\u3079\u3066\u76F4\u3059","\u7A3C\u50CD\u4E2D"][q],976,529));let Dt=new Tn(k);return Dt.colorSpace=be,Dt.anisotropy=4,new _e({map:Dt,side:Ce,toneMapped:!1})}for(let[M,E]of _i.entries()){let q=st(E,M,-1),k=new le;k.position.set(E.x*re,2.5,E.z*re),k.rotation.y=hu(E),k.userData.index=M,d.add(k);let N=new Xt(fi(3.36,1.96,.2,.07),m.black);N.castShadow=!0,N.receiveShadow=!0,k.add(N);let Q=new Xt(new wn(3.2,1.8),q);Q.position.z=.106,k.add(Q);let ct=Q.clone();ct.position.z=-.106,ct.rotation.y=Math.PI,k.add(ct),k.userData.faces=[Q,ct],bt.set(E.id,k);let Mt=new Xt(fi(.5,.12,.16,.04),m.gray);Mt.position.y=1.05,k.add(Mt),Ut.set(E.id,Mt),R(d,E.x,.76,E.z,.1,1.5,.1,"gray");let $=new Xt(new Se(.5,.56,.08,32),m.black);$.position.set(E.x*re,.04,E.z*re),$.receiveShadow=!0,d.add($);let dt=Qc(E.model);dt.position.set(E.x*re+Math.cos(k.rotation.y)*2.6,1.26,E.z*re-Math.sin(k.rotation.y)*2.6),dt.rotation.y=k.rotation.y,dt.scale.setScalar(1.15),d.add(dt);let Dt=new Xt(new Se(1.15,1.25,.3,48),m.black);Dt.position.set(dt.position.x,.15,dt.position.z),Dt.castShadow=!0,Dt.receiveShadow=!0,d.add(Dt);let Gt=new Xt(new Te(1,.03,8,64),A);Gt.rotation.x=Math.PI/2,Gt.position.set(dt.position.x,.31,dt.position.z),d.add(Gt);let Bt=new Xt(new Se(.14,1.15,5.3,40,1,!0),b);Bt.position.set(dt.position.x,2.96,dt.position.z),d.add(Bt);let Jt=new Xt(new Se(.2,.3,.3,24),m.gray);Jt.position.set(dt.position.x,5.75,dt.position.z),d.add(Jt),$t.set(E.id,{device:dt,light:Jt,beam:Bt,baseY:1.26,angle:k.rotation.y});let Pt=new le;Pt.position.set(E.x*re,3.65,E.z*re),d.add(Pt);let ce=[new I(-.48,0,0),new I(-.12,-.32,0),new I(.55,.43,0)];for(let we=0;we<2;we++){let Jn=ce[we+1].clone().sub(ce[we]),pe=new Xt(new Se(.065,.065,Jn.length(),16),f);pe.position.copy(ce[we]).add(ce[we+1]).multiplyScalar(.5),pe.quaternion.setFromUnitVectors(new I(0,1,0),Jn.normalize()),Pt.add(pe)}Pt.visible=!1,Lt.set(E.id,Pt);let ee=C(d,new Te(1.72,.027,8,80,Math.PI*1.65),"pink",E.x,.04,E.z);ee.rotation.x=-Math.PI/2,ee.rotation.z=.5,it.push({ring:ee,sign:E});let Pe=new Xt(new sr(1.64,1.78,80),m.dark);Pe.rotation.x=-Math.PI/2,Pe.position.copy(ee.position),Pe.position.y=.026,d.add(Pe);let yn=fu(M);yn.position.set(E.x*re+Math.sin(k.rotation.y)*2.65,.03,E.z*re+Math.cos(k.rotation.y)*2.65),yn.rotation.z=-k.rotation.y,d.add(yn)}vu(d,{scale:re,obstacles:L});let et=[];function tt(M,E,q,k,N,Q,ct){let Mt=document.createElement("canvas");Mt.width=Math.round(256*q/k),Mt.height=256;let $=new Tn(Mt);$.colorSpace=be,$.anisotropy=4;let dt=new _e({map:$,toneMapped:!1,transparent:!0}),Dt=new le;Dt.position.set(N,Q,ct);for(let Gt of[1,-1]){let Bt=new Xt(new wn(q,k),dt);Bt.position.z=Gt*.03,Bt.rotation.y=Gt>0?0:Math.PI,Dt.add(Bt)}return d.add(Dt),et.push({canvas:Mt,texture:$,text:M,small:E}),Dt}function xt(){for(let{canvas:M,texture:E,text:q,small:k}of et){let N=M.getContext("2d"),Q=M.width,ct='Unbounded,"Arial Black",sans-serif';N.clearRect(0,0,Q,256),N.fillStyle="#07070be6",N.fillRect(0,0,Q,256),N.strokeStyle=B,N.lineWidth=6,N.strokeRect(9,9,Q-18,238);let Mt=132;for(N.font=`900 ${Mt}px ${ct}`;N.measureText(q).width>Q-120&&Mt>56;)Mt-=4,N.font=`900 ${Mt}px ${ct}`;N.textAlign="center",N.textBaseline="middle",N.fillStyle=B,N.shadowColor=B,N.shadowBlur=28,N.fillText(q,Q/2,108),N.shadowBlur=0,N.fillStyle="#f5f5f9",N.font="700 30px ui-monospace,Menlo,monospace",N.fillText(k,Q/2,208),E.needsUpdate=!0}}[[0,12.5,6,4,"PROFILE","RECEPTION"],[-26,3,4.8,3.5,"CAREER","STUDIO A"],[-26,-10,4.8,3.5,"CAREER","STUDIO B"],[-9,-27,6,3.5,"CAREER","STUDIO C"],[16,-20,11,5,"WORK","MASTER CONTROL"],[-10,-10,6,4,"THINK","TALK ROOM"],[19,18,5,4,"ARCHIVE","LIBRARY"],[-10,10.5,6,4,"CONNECT","TRANSMITTER"]].forEach(([M,E,q,k,N,Q],ct)=>tt(N,Q,Math.min(q*.84,6),1.05,M*re,(ct===4?4.6:3.7)+1.12,E*re+k/2-.2));for(let M of[-1,1])R(d,M*2.8,3.2,19.1,.14,6.4,.14,"gray");R(d,0,6.4,19.1,9.1,.14,.14,"gray");let ut=19.1*re,vt=tt("ON AIR","SHUNTA FURUKAWA \xB7 PORTFOLIO",6.4,1.45,0,5.3,ut);xt(),Et(),document.fonts?.load&&Promise.all([document.fonts.load("900 40px Unbounded","ON AIR 0123456789"),document.fonts.load('900 40px "Zen Kaku Gothic New"',"\u770B\u677F"),document.fonts.load('700 40px "Zen Kaku Gothic New"',"\u770B\u677F")]).then(()=>{J(),xt(),Et()}).catch(()=>{});let qt=Array.from({length:3},()=>R(d,-10,2,-7,1,.7,.5,"pink")),Ht=Array.from({length:12},()=>R(d,0,0,0,.4,.4,.4,"pink")),w=xu(),{player:_,body:V,limbs:Z}=w;_.position.set(Pn.x,0,Pn.z),h.add(_);let ot=C(h,new Vn(.55,32),"black",0,.012,15);ot.material=new _e({color:526608,transparent:!0,opacity:.2,depthWrite:!1}),ot.rotation.x=-Math.PI/2;function J(){for(let M of _i){let E=se.has(M.id),q=P.has(M.id),k=bt.get(M.id),N=k.userData.faces[0].material;N.map.dispose(),N.dispose();let Q=st(M,k.userData.index,E?2:q?1:!at||at.has(M.id)?0:-1);if(k.userData.faces.forEach(ct=>ct.material=Q),Ut.get(M.id).material=E?A:m.gray,Lt.get(M.id).visible=!1,$t.has(M.id)){let ct=$t.get(M.id);ct.light.material=E?A:m.gray,ct.beam.material=E?y:b}}}let Nt=uu(),pt=0,Rt=0,It=()=>{pt=performance.now()+1400},rt=new Set,St={x:0,z:0},Ot=0,Ft=0,gt=!1,Vt=l,F=!1,ft=0,yt=0,Ct=0,lt=0,j=null,At=null,Wt=!1,ae={...Pn},ne=0,He=0,de={phase:"ground",y:0,v:0},Rn=0,Me={x:0,z:0};function pi(){gt||(["ground","land"].includes(de.phase)?(Rn=0,de={phase:"launch",y:0,v:0,delay:.04}):Rn=.18)}let Ye=new I,Yn=new I,Zn=new I,In=!0;function Ze(){Nt.reset(),Rt=0,rt.clear(),F=!1,St={x:0,z:0},Me.x=Me.z=0,Rn=0,At=null}function Ts(){if(gt||!j)return;let M=bt.get(j.id),E=i.getBoundingClientRect(),q=null;if(M){M.updateWorldMatrix(!0,!1);let k=[[-1.6,-.9],[1.6,-.9],[1.6,.9],[-1.6,.9]].map(([N,Q])=>new I(N,Q,.1).applyMatrix4(M.matrixWorld).project(p));if(k.every(N=>N.z>-1&&N.z<1)){let N=k.map(ct=>E.left+(ct.x+1)*E.width/2),Q=k.map(ct=>E.top+(1-ct.y)*E.height/2);q={left:Math.min(...N),top:Math.min(...Q),width:Math.max(...N)-Math.min(...N),height:Math.max(...Q)-Math.min(...Q)}}}e(j,q)}let yr=M=>!gt&&!M.altKey&&!M.ctrlKey&&!M.metaKey&&!M.target.closest("button,a,input,textarea,select,summary,dialog");document.addEventListener("keydown",M=>{if(!yr(M))return;let E=M.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","q","e","shift","f","enter"," "].includes(E)&&(M.preventDefault(),E===" "&&!M.repeat?pi():(E==="f"||E==="enter")&&!M.repeat?Ts():rt.add(E))}),document.addEventListener("keyup",M=>rt.delete(M.key.toLowerCase())),window.addEventListener("blur",Ze);let xn=u.domElement;xn.addEventListener("pointerdown",M=>{gt||(xn.focus({preventScroll:!0}),It(),At={id:M.pointerId,x:M.clientX,y:M.clientY,yaw:Ot,pitch:Ft},xn.setPointerCapture(M.pointerId))}),xn.addEventListener("pointermove",M=>{!At||At.id!==M.pointerId||(It(),Ot=At.yaw-(M.clientX-At.x)*.006,Ft=xs.clamp(At.pitch+(M.clientY-At.y)*.015,-2,4))});let vr=()=>At=null;xn.addEventListener("pointerup",vr),xn.addEventListener("pointercancel",vr);function Mr(){let M=i.getBoundingClientRect();u.setSize(Math.max(1,M.width),Math.max(1,M.height)),p.aspect=M.width/Math.max(1,M.height),p.updateProjectionMatrix(),In=!0}new ResizeObserver(Mr).observe(i);function Sr(M){lt+=Vt?0:M;let E=!1;if(!gt){(rt.has("q")||rt.has("e"))&&It(),rt.has("q")&&(Ot+=M*1.6),rt.has("e")&&(Ot-=M*1.6);let $=St.x+Number(rt.has("d")||rt.has("arrowright"))-Number(rt.has("a")||rt.has("arrowleft")),dt=St.z+Number(rt.has("s")||rt.has("arrowdown"))-Number(rt.has("w")||rt.has("arrowup")),Dt=ll($,dt,Nt.resolve($,dt,Ot,!!At||performance.now()<pt)),Gt=rt.has("shift")||F||St.run?Ta:cl,Bt=1-Math.exp(-M*($||dt?15:20));Me.x+=(Dt.x*Gt-Me.x)*Bt,Me.z+=(Dt.z*Gt-Me.z)*Bt,!$&&!dt&&Math.hypot(Me.x,Me.z)<.3&&(Me.x=Me.z=0);let Jt=hl(_.position,{x:Me.x*M,z:Me.z*M},L,(Pt,ce)=>el(Pt,ce,de.y));if(E=Math.hypot(Jt.x-_.position.x,Jt.z-_.position.z)>1e-4,_.position.x=Jt.x,_.position.z=Jt.z,E){let Pt=Math.atan2(Me.x,Me.z);_.rotation.y+=Math.atan2(Math.sin(Pt-_.rotation.y),Math.cos(Pt-_.rotation.y))*Math.min(1,M*14),Ct+=M*(Gt===Ta?16:11)}}gt||(Rn=Math.max(0,Rn-M),Rn>0&&["ground","land"].includes(de.phase)&&pi(),de=dl(de,M)),_.position.y=de.y,ne=Math.max(0,ne-M),He=Math.max(0,He-M),!gt&&de.y<=.08&&gi(_.position.x,_.position.z)?(_.position.set(ae.x,0,ae.z),de={phase:"ground",y:0,v:0},Ze(),In=!0,ne||(c(),ne=1)):!gi(_.position.x,_.position.z,.45)&&de.phase==="ground"&&(ae={x:_.position.x,z:_.position.z});let q=E?Math.sin(Ct)*.6:0;for(let{side:$,leg:dt,arm:Dt}of Z)dt.rotation.x=q*$,Dt.rotation.x=-q*$*.8;V.position.y=E&&!Vt?Math.abs(Math.sin(Ct))*.045:0;let k=de.phase==="air",N=["launch","land"].includes(de.phase);if(V.scale.set(1,N?.88:1,1),k)for(let{side:$,leg:dt,arm:Dt}of Z)dt.rotation.x=.35+$*.15,Dt.rotation.x=-1.1,Dt.rotation.z=$*.18;else for(let{arm:$}of Z)$.rotation.z=0;for(let{value:$,list:dt,rim:Dt,face:Gt}of X)dt.forEach((Bt,Jt)=>{let Pt=W.has(Bt.id);!Pt&&!gt&&sl(_.position,Bt)?(W.add(Bt.id),o(Bt.id)):!Pt&&!gt&&He<=0&&de.phase==="ground"&&rl(_.position,Bt)&&(He=5,a(Bt.id)),G.position.set(Bt.x,Bt.y+(Vt?0:Math.sin(lt*2.2+Bt.id)*.07),Bt.z),G.rotation.set(0,Vt?.5:lt*($===10?2.1:1.5)+Bt.id,0),G.scale.setScalar(W.has(Bt.id)?1e-6:1),G.updateMatrix(),Dt.setMatrixAt(Jt,G.matrix),Gt.setMatrixAt(Jt,G.matrix),$===10&&(G.position.y=Bt.y+3.6,G.rotation.set(0,0,0),G.updateMatrix(),_t.setMatrixAt(Jt,G.matrix))}),Dt.instanceMatrix.needsUpdate=!0,Gt.instanceMatrix.needsUpdate=!0;_t.instanceMatrix.needsUpdate=!0,ot.scale.setScalar(1-de.y*.12),ot.position.set(_.position.x,.012,_.position.z),Rt=E?Rt+M:0,Ot=lu(Ot,_.rotation.y,M,E&&Rt>.3&&!gt&&!Vt&&!At&&performance.now()>=pt),Ye.copy(_.position).add(new I(0,1.6,0));let Q=p.aspect<.8?10.5:9;Zn.set(Math.sin(Ot)*Q,6.2+Ft,Math.cos(Ot)*Q),Yn.copy(Ye).add(Zn);let ct=1;for(let $ of L){let dt=Yn.x-Ye.x,Dt=Yn.z-Ye.z,Gt=xs.clamp((($.x-Ye.x)*dt+($.z-Ye.z)*Dt)/(dt*dt+Dt*Dt),0,1);Gt>.14&&Math.hypot(Ye.x+dt*Gt-$.x,Ye.z+Dt*Gt-$.z)<$.r+.4&&(ct=Math.min(ct,Math.max(.28,Gt-.13)))}Yn.copy(Ye).addScaledVector(Zn,ct),p.position.lerp(Yn,In||Vt?1:1-Math.exp(-10*M)),p.lookAt(Ye),In=!1;let Mt=Ea(_.position);Mt?.id!==j?.id&&(j=Mt,t(j)),it.forEach(({ring:$,sign:dt})=>{$.visible=!0,$.material=se.has(dt.id)?f:j?.id===dt.id||P.has(dt.id)?A:m.gray}),Lt.forEach($=>$.quaternion.copy(p.quaternion)),$t.forEach(({device:$,light:dt,baseY:Dt,angle:Gt},Bt)=>{let Jt=se.has(Bt);$.position.y=Dt+(Jt&&!Vt?Math.sin(lt*2)*.06:0),$.rotation.y=Gt+(Jt&&!Vt?Math.sin(lt*.8)*.12:0)}),Ht.forEach(($,dt)=>{$.visible=dt<(br?12:4),$.position.set((11+(lt*2+dt*.6)%8)*re,3.2,(-15-dt%2)*re)}),qt.forEach(($,dt)=>{$.visible=v==="repeat"||dt===0,$.position.z=(v==="wait"?-10.4:-10-(lt+dt*.7)%4)*re}),K.forEach(($,dt)=>{$.position.x=28+dt*2+(Vt?0:Math.sin(lt+dt)*.22)}),vt.visible=!((p.position.z-ut)*(_.position.z-ut)<0&&Math.abs(_.position.x)<9),g.follow(_.position,j,M),u.render(h,p),n({safe:!gi(_.position.x,_.position.z)&&de.phase==="ground",x:_.position.x,z:_.position.z,avatarYaw:_.rotation.y,near:j?.id})}let br=!1,v="match";function z(M){if(ft=0,document.hidden||Wt)return;let E=Math.min((M-yt)/1e3,.04);yt=M,Sr(E),ft=requestAnimationFrame(z)}function Y(){!ft&&!Wt&&!document.hidden&&(yt=performance.now(),ft=requestAnimationFrame(z))}return document.addEventListener("visibilitychange",()=>{Ze(),Y()}),xn.addEventListener("webglcontextlost",M=>{M.preventDefault(),Wt=!0,Ze(),cancelAnimationFrame(ft),s()}),Mr(),Sr(0),Y(),setTimeout(()=>{try{r(jc(_i))}catch{}},0),{jump:pi,setCoins(M){W=new Set(M)},setAccent(M){B=M,m.pink.color.set(M),m.pink.emissive.set(M),A.color.set(M),y.color.set(M),xt(),Et(),g.setAccent(M),w.setAccent(M),Mu(M),J();try{r(jc(_i))}catch{}},restore(M){Ze();let E=gi(M.position.x,M.position.z)||L.some(q=>Math.hypot(q.x-M.position.x,q.z-M.position.z)<q.r+.5)?Pn:M.position;_.position.set(E.x,0,E.z),ae={x:E.x,z:E.z},_.rotation.y=M.yaw,Ot=M.yaw+Math.PI,de={phase:"ground",y:0,v:0},In=!0},setCollected(M){M.length===se.size&&M.every(E=>se.has(E))||(se=new Set(M),J())},setVisited(M){P=new Set(M),J()},setUnlocked(M){at=new Set(M),J()},getNearbyId(){return Ea(_.position)?.id||null},setStick(M,E,q=!1){St={x:M,z:E,run:q}},clearInput:Ze,setReading(M){gt=M,Ze()},interact:Ts,setReduced(M){Vt=M},reset(){ae={...Pn},de={phase:"ground",y:0,v:0},Ze(),_.position.set(Pn.x,0,Pn.z),Ot=0,Ft=0,_.rotation.y=Math.PI,pt=0,In=!0},rotate(M){It(),Ot+=M},setRun(M){F=M},setSimulate(M){br=M},setConversation(M){v=M},focus(){xn.focus({preventScroll:!0})}}}export{uv as createExplorer};
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
