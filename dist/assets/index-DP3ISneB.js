import{_ as j,r as z,k as J,l as W,E as Z}from"./core.min-2KWP_i8q.js";((s,h)=>{const c="__q_context__",a=window,f=new Set,p="replace",g="forEach",u="target",d="getAttribute",A="isConnected",_="qvisible",k="_qwikjson_",C=e=>s.querySelectorAll(e),I=(e,t,n=t.type)=>{C("[on"+e+"\\:"+n+"]")[g](o=>m(o,e,t,n))},x=e=>{if(e[k]===void 0){let t=(e===s.documentElement?s.body:e).lastElementChild;for(;t;){if(t.tagName==="SCRIPT"&&t[d]("type")==="qwik/json"){e[k]=JSON.parse(t.textContent[p](/\\x3C(\/?script)/gi,"<$1"));break}t=t.previousElementSibling}}},R=(e,t)=>new CustomEvent(e,{detail:t}),m=async(e,t,n,o=n.type)=>{const l="on"+t+":"+o;e.hasAttribute("preventdefault:"+o)&&n.preventDefault();const i=e._qc_,v=i&&i.li.filter(r=>r[0]===l);if(v&&v.length>0){for(const r of v)await r[1].getFn([e,n],()=>e[A])(n,e);return}const O=e[d](l);if(O){const r=e.closest("[q\\:container]"),$=new URL(r[d]("q:base"),s.baseURI);for(const P of O.split(`
`)){const y=new URL(P,$),q=y.hash[p](/^#?([^?[|]*).*$/,"$1")||"default",B=performance.now();let E;const U=P.startsWith("#");if(U)E=(r.qFuncs||[])[Number.parseInt(q)];else{const V=j(()=>import(y.href.split("#")[0]),[]);x(r),E=(await V)[q]}const F=s[c];if(e[A])try{s[c]=[e,n,y],U||b("qsymbol",{symbol:q,element:e,reqTime:B}),await E(n,e)}finally{s[c]=F}}}},b=(e,t)=>{s.dispatchEvent(R(e,t))},L=e=>e[p](/([A-Z])/g,t=>"-"+t.toLowerCase()),D=async e=>{let t=L(e.type),n=e[u];for(I("-document",e,t);n&&n[d];)await m(n,"",e,t),n=e.bubbles&&e.cancelBubble!==!0?n.parentElement:null},N=e=>{I("-window",e,L(e.type))},S=()=>{var e;const t=s.readyState;if(!h&&(t=="interactive"||t=="complete")&&(h=1,b("qinit"),((e=a.requestIdleCallback)!=null?e:a.setTimeout).bind(a)(()=>b("qidle")),f.has(_))){const n=C("[on\\:"+_+"]"),o=new IntersectionObserver(l=>{for(const i of l)i.isIntersecting&&(o.unobserve(i[u]),m(i[u],"",R(_,i)))});n[g](l=>o.observe(l))}},w=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),T=e=>{for(const t of e)f.has(t)||(w(s,t,D,!0),w(a,t,N,!0),f.add(t))};if(!(c in s)){s[c]=0;const e=a.qwikevents;Array.isArray(e)&&T(e),a.qwikevents={push:(...t)=>T(t)},w(s,"readystatechange",S),S()}})(document);const G=z(J(()=>j(()=>import("./entry_App-DPu9LkTj.js"),[]),"s_AkbU84a8zes"));W(document.getElementById("app"),Z(G,null,3,"Rj_0"));
