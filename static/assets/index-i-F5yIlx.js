var Hf=Object.defineProperty;var Gf=(i,e,t)=>e in i?Hf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var qo=(i,e,t)=>Gf(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xt(){}function Gh(i){return i()}function rc(){return Object.create(null)}function An(i){i.forEach(Gh)}function Wh(i){return typeof i=="function"}function Ai(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Wf(i){return Object.keys(i).length===0}function Xh(i,...e){if(i==null){for(const n of e)n(void 0);return Xt}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ho(i){let e;return Xh(i,t=>e=t)(),e}function Ot(i,e,t){i.$$.on_destroy.push(Xh(e,t))}function Pr(i,e,t){return i.set(t),e}function O(i,e){i.appendChild(e)}function Ie(i,e,t){i.insertBefore(e,t||null)}function De(i){i.parentNode&&i.parentNode.removeChild(i)}function yn(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function $(i){return document.createElement(i)}function Xe(i){return document.createTextNode(i)}function ve(){return Xe(" ")}function jh(){return Xe("")}function vt(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function oc(i){return function(e){return e.preventDefault(),i.call(this,e)}}function W(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Ls(i){return i===""?null:+i}function Xf(i){return Array.from(i.childNodes)}function dt(i,e){e=""+e,i.data!==e&&(i.data=e)}function xi(i,e){i.value=e??""}function Hi(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,"")}function Pt(i,e,t){i.classList.toggle(e,!!t)}let hr;function or(i){hr=i}function qh(){if(!hr)throw new Error("Function called outside component initialization");return hr}function Yh(i){qh().$$.on_mount.push(i)}function Kh(i){qh().$$.on_destroy.push(i)}const vs=[],fr=[];let Ts=[];const ac=[],jf=Promise.resolve();let za=!1;function qf(){za||(za=!0,jf.then(Zh))}function Va(i){Ts.push(i)}const Yo=new Set;let es=0;function Zh(){if(es!==0)return;const i=hr;do{try{for(;es<vs.length;){const e=vs[es];es++,or(e),Yf(e.$$)}}catch(e){throw vs.length=0,es=0,e}for(or(null),vs.length=0,es=0;fr.length;)fr.pop()();for(let e=0;e<Ts.length;e+=1){const t=Ts[e];Yo.has(t)||(Yo.add(t),t())}Ts.length=0}while(vs.length);for(;ac.length;)ac.pop()();za=!1,Yo.clear(),or(i)}function Yf(i){if(i.fragment!==null){i.update(),An(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Va)}}function Kf(i){const e=[],t=[];Ts.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ts=e}const fo=new Set;let Bi;function lc(){Bi={r:0,c:[],p:Bi}}function cc(){Bi.r||An(Bi.c),Bi=Bi.p}function En(i,e){i&&i.i&&(fo.delete(i),i.i(e))}function Fn(i,e,t,n){if(i&&i.o){if(fo.has(i))return;fo.add(i),Bi.c.push(()=>{fo.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Ut(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Gi(i){i&&i.c()}function Si(i,e,t){const{fragment:n,after_update:s}=i.$$;n&&n.m(e,t),Va(()=>{const r=i.$$.on_mount.map(Gh).filter(Wh);i.$$.on_destroy?i.$$.on_destroy.push(...r):An(r),i.$$.on_mount=[]}),s.forEach(Va)}function Ei(i,e){const t=i.$$;t.fragment!==null&&(Kf(t.after_update),An(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Zf(i,e){i.$$.dirty[0]===-1&&(vs.push(i),qf(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function ji(i,e,t,n,s,r,o=null,a=[-1]){const l=hr;or(i);const c=i.$$={fragment:null,ctx:[],props:r,update:Xt,not_equal:s,bound:rc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:rc(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(h,f,...d)=>{const g=d.length?d[0]:f;return c.ctx&&s(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&Zf(i,h)),f}):[],c.update(),u=!0,An(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=Xf(e.target);c.fragment&&c.fragment.l(h),h.forEach(De)}else c.fragment&&c.fragment.c();e.intro&&En(i.$$.fragment),Si(i,e.target,e.anchor),Zh()}or(l)}class qi{constructor(){qo(this,"$$");qo(this,"$$set")}$destroy(){Ei(this,1),this.$destroy=Xt}$on(e,t){if(!Wh(t))return Xt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Wf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Jf="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Jf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="175",ws={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$f=0,uc=1,Qf=2,Jh=1,Bl=2,ei=3,oi=0,xn=1,On=2,Mi=0,As=1,hc=2,fc=3,dc=4,ed=5,Oi=100,td=101,nd=102,id=103,sd=104,rd=200,od=201,ad=202,ld=203,Ha=204,Ga=205,cd=206,ud=207,hd=208,fd=209,dd=210,pd=211,md=212,gd=213,_d=214,Wa=0,Xa=1,ja=2,Ds=3,qa=4,Ya=5,Ka=6,Za=7,Po=0,vd=1,xd=2,bi=0,yd=1,Md=2,bd=3,zl=4,Sd=5,Ed=6,Td=7,pc="attached",wd="detached",$h=300,Is=301,Ns=302,Ja=303,$a=304,Lo=306,zi=1e3,Bn=1001,Qa=1002,wn=1003,Ad=1004,Lr=1005,Tn=1006,Ko=1007,ti=1008,ai=1009,Qh=1010,ef=1011,dr=1012,Vl=1013,Wi=1014,Wn=1015,yr=1016,Hl=1017,Gl=1018,pr=1020,tf=35902,nf=1021,sf=1022,Pn=1023,rf=1024,of=1025,mr=1026,gr=1027,af=1028,Wl=1029,lf=1030,Xl=1031,jl=1033,po=33776,mo=33777,go=33778,_o=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,ll=37809,cl=37810,ul=37811,hl=37812,fl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,xl=37820,yl=37821,vo=36492,Ml=36494,bl=36495,cf=36283,Sl=36284,El=36285,Tl=36286,bo=2300,wl=2301,Zo=2302,mc=2400,gc=2401,_c=2402,Rd=2500,Cd=3200,Pd=3201,Do=0,Ld=1,vi="",zt="srgb",Us="srgb-linear",So="linear",It="srgb",ts=7680,vc=519,Dd=512,Id=513,Nd=514,uf=515,Ud=516,Fd=517,Od=518,kd=519,xc=35044,yc="300 es",ni=2e3,Eo=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const ar=Math.PI/180,Fs=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function ql(i,e){return(i%e+e)%e}function Bd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zd(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Vd(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Hd(i,e=1){return e-Math.abs(ql(i,e*2)-e)}function Gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jd(i,e){return i+Math.random()*(e-i)}function qd(i){return i*(.5-Math.random())}function Yd(i){i!==void 0&&(Mc=i);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(i){return i*ar}function Zd(i){return i*Fs}function Jd(i){return(i&i-1)===0&&i!==0}function $d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ep(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ys={DEG2RAD:ar,RAD2DEG:Fs,generateUUID:Ri,clamp:xt,euclideanModulo:ql,mapLinear:Bd,inverseLerp:zd,lerp:lr,damp:Vd,pingpong:Hd,smoothstep:Gd,smootherstep:Wd,randInt:Xd,randFloat:jd,randFloatSpread:qd,seededRandom:Yd,degToRad:Kd,radToDeg:Zd,isPowerOfTwo:Jd,ceilPowerOfTwo:$d,floorPowerOfTwo:Qd,setQuaternionFromProperEuler:ep,normalize:fn,denormalize:xs};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,n,s,r,o,a,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],E=s[4],b=s[7],D=s[2],T=s[5],L=s[8];return r[0]=o*_+a*v+l*D,r[3]=o*m+a*E+l*T,r[6]=o*p+a*b+l*L,r[1]=c*_+u*v+h*D,r[4]=c*m+u*E+h*T,r[7]=c*p+u*b+h*L,r[2]=f*_+d*v+g*D,r[5]=f*m+d*E+g*T,r[8]=f*p+d*b+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new mt;function hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tp(){const i=_r("canvas");return i.style.display="block",i}const bc={};function xo(i){i in bc||(bc[i]=!0,console.warn(i))}function np(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ip(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sc=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){const i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?So:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:e,whitePoint:n,transfer:So,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const bt=rp();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class op{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=_r("canvas")),ns.width=e.width,ns.height=e.height;const s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class Yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?op.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class un extends Yi{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Bn,s=Bn,r=Tn,o=ti,a=Pn,l=ai,c=un.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ri(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=$h;un.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,s=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(d+1)/2,D=(p+1)/2,T=(u+f)/4,L=(h+_)/4,I=(g+m)/4;return E>b&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=L/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=L/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ff extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,v=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const D=Math.sqrt(E),T=Math.atan2(D,p*v);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}const b=a*v;if(l=l*m+f*b,c=c*m+d*b,u=u*m+g*b,h=h*m+_*b,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new G,Tc=new zn;class Vs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ir.subVectors(this.max,Zs),is.subVectors(e.a,Zs),ss.subVectors(e.b,Zs),rs.subVectors(e.c,Zs),ci.subVectors(ss,is),ui.subVectors(rs,ss),Pi.subVectors(is,rs);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Pi.z,Pi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Pi.z,0,-Pi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Pi.y,Pi.x,0];return!ea(t,is,ss,rs,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,is,ss,rs,Ir))?!1:(Nr.crossVectors(ci,ui),t=[Nr.x,Nr.y,Nr.z],ea(t,is,ss,rs,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new G,new G,new G,new G,new G,new G,new G,new G],In=new G,Dr=new Vs,is=new G,ss=new G,rs=new G,ci=new G,ui=new G,Pi=new G,Zs=new G,Ir=new G,Nr=new G,Li=new G;function ea(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hp=new Vs,Js=new G,ta=new G;class Ki{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(ta)),this.expandByPoint(Js.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new G,na=new G,Ur=new G,hi=new G,ia=new G,Fr=new G,sa=new G;class Hs{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){na.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=hi.dot(this.direction),l=-hi.dot(Ur),c=hi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(na).addScaledVector(Ur,f),d}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){ia.subVectors(t,e),Fr.subVectors(n,e),sa.crossVectors(ia,Fr);let o=this.direction.dot(sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Fr.crossVectors(hi,Fr));if(l<0)return null;const c=a*this.direction.dot(ia.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(sa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,dp)}lookAt(e,t,n){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),fi.crossVectors(n,bn),fi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),fi.crossVectors(n,bn)),fi.normalize(),Or.crossVectors(bn,fi),s[0]=fi.x,s[4]=Or.x,s[8]=bn.x,s[1]=fi.y,s[5]=Or.y,s[9]=bn.y,s[2]=fi.z,s[6]=Or.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],E=n[7],b=n[11],D=n[15],T=s[0],L=s[4],I=s[8],M=s[12],S=s[1],N=s[5],z=s[9],V=s[13],Y=s[2],ne=s[6],F=s[10],te=s[14],k=s[3],J=s[7],le=s[11],ae=s[15];return r[0]=o*T+a*S+l*Y+c*k,r[4]=o*L+a*N+l*ne+c*J,r[8]=o*I+a*z+l*F+c*le,r[12]=o*M+a*V+l*te+c*ae,r[1]=u*T+h*S+f*Y+d*k,r[5]=u*L+h*N+f*ne+d*J,r[9]=u*I+h*z+f*F+d*le,r[13]=u*M+h*V+f*te+d*ae,r[2]=g*T+_*S+m*Y+p*k,r[6]=g*L+_*N+m*ne+p*J,r[10]=g*I+_*z+m*F+p*le,r[14]=g*M+_*V+m*te+p*ae,r[3]=v*T+E*S+b*Y+D*k,r[7]=v*L+E*N+b*ne+D*J,r[11]=v*I+E*z+b*F+D*le,r[15]=v*M+E*V+b*te+D*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,E=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,b=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,D=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=t*v+n*E+s*b+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=v*L,e[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*L,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*L,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*L,e[4]=E*L,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=b*L,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*L,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*L,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*L,e[12]=D*L,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*L,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=l*c,E=l*u,b=l*h,D=n.x,T=n.y,L=n.z;return s[0]=(1-(_+p))*D,s[1]=(d+b)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(f+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+E)*L,s[9]=(m-v)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);const c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ni){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===ni)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Eo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u;let g,_;if(a===ni)g=(o+r)*h,_=-2*h;else if(a===Eo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new G,Nn=new at,fp=new G(0,0,0),dp=new G(1,1,1),fi=new G,Or=new G,bn=new G,wc=new at,Ac=new zn;class Mn{constructor(e=0,t=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const Rc=new G,as=new zn,Zn=new at,kr=new G,$s=new G,mp=new G,gp=new zn,Cc=new G(1,0,0),Pc=new G(0,1,0),Lc=new G(0,0,1),Dc={type:"added"},_p={type:"removed"},ls={type:"childadded",child:null},ra={type:"childremoved",child:null};class Ht extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,t=new Mn,n=new zn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new mt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($s,kr,this.up):Zn.lookAt(kr,$s,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Zn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new G,Jn=new G,oa=new G,$n=new G,cs=new G,us=new G,Ic=new G,aa=new G,la=new G,ca=new G,ua=new Ct,ha=new Ct,fa=new Ct;class kn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),Jn.subVectors(n,t),oa.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(Jn),l=Un.dot(oa),c=Jn.dot(Jn),u=Jn.dot(oa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ua.setScalar(0),ha.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(fa,r.z),o}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),Jn.subVectors(e,t),Un.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Un.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,n),us.subVectors(r,n),aa.subVectors(e,n);const l=cs.dot(aa),c=us.dot(aa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,s);const u=cs.dot(la),h=us.dot(la);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(cs,o);ca.subVectors(e,r);const d=cs.dot(ca),g=us.dot(ca);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(us,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ic.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ic,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Br={h:0,s:0,l:0};function da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=ql(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=da(o,r,e+1/3),this.g=da(o,r,e),this.b=da(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return bt.fromWorkingColorSpace(cn.copy(this),e),Math.round(xt(cn.r*255,0,255))*65536+Math.round(xt(cn.g*255,0,255))*256+Math.round(xt(cn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=zt){bt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,s=cn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Br);const n=lr(di.h,Br.h,t),s=lr(di.s,Br.s,t),r=lr(di.l,Br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new it;it.NAMES=df;let vp=0;class Vn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=As,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Os extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new G,zr=new ot;let xp=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class pf extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mf extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yp=0;const Rn=new at,pa=new Ht,hs=new G,Sn=new Vs,Qs=new Vs,sn=new G;class qt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?mf:pf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Sn.min,Qs.min),Sn.expandByPoint(sn),sn.addVectors(Sn.max,Qs.max),Sn.expandByPoint(sn)):(Sn.expandByPoint(Qs.min),Sn.expandByPoint(Qs.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),sn.add(hs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new G,l[I]=new G;const c=new G,u=new G,h=new G,f=new ot,d=new ot,g=new ot,_=new G,m=new G;function p(I,M,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[I].add(_),a[M].add(_),a[S].add(_),l[I].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,M=v.length;I<M;++I){const S=v[I],N=S.start,z=S.count;for(let V=N,Y=N+z;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new G,b=new G,D=new G,T=new G;function L(I){D.fromBufferAttribute(s,I),T.copy(D);const M=a[I];E.copy(M),E.sub(D.multiplyScalar(D.dot(M))).normalize(),b.crossVectors(T,M);const N=b.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,N)}for(let I=0,M=v.length;I<M;++I){const S=v[I],N=S.start,z=S.count;for(let V=N,Y=N+z;V<Y;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new at,Di=new Hs,Vr=new Ki,Uc=new G,Hr=new G,Gr=new G,Wr=new G,ma=new G,Xr=new G,Fc=new G,jr=new G;class jt extends Ht{constructor(e=new qt,t=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ma.fromBufferAttribute(h,e),o?Xr.addScaledVector(ma,u):Xr.addScaledVector(ma.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Vr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Vr,Uc)===null||Di.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,D=E;b<D;b+=3){const T=a.getX(b),L=a.getX(b+1),I=a.getX(b+2);s=qr(this,p,e,n,c,u,h,T,L,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=qr(this,o,e,n,c,u,h,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,D=E;b<D;b+=3){const T=b,L=b+1,I=b+2;s=qr(this,p,e,n,c,u,h,T,L,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,E=m+1,b=m+2;s=qr(this,o,e,n,c,u,h,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Mp(i,e,t,n,s,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;jr.copy(a),jr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:i}}function qr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Hr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);const u=Mp(i,e,t,n,Hr,Gr,Wr,Fc);if(u){const h=new G;kn.getBarycoord(Fc,Hr,Gr,Wr,h),s&&(u.uv=kn.getInterpolatedAttribute(s,a,l,c,h,new ot)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,l,c,h,new ot)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};kn.getNormal(Hr,Gr,Wr,f.normal),u.face=f,u.barycoord=h}return u}class Gs extends qt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function g(_,m,p,v,E,b,D,T,L,I,M){const S=b/L,N=D/I,z=b/2,V=D/2,Y=T/2,ne=L+1,F=I+1;let te=0,k=0;const J=new G;for(let le=0;le<F;le++){const ae=le*N-V;for(let de=0;de<ne;de++){const ge=de*S-z;J[_]=ge*v,J[m]=ae*E,J[p]=Y,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(de/L),h.push(1-le/I),te+=1}}for(let le=0;le<I;le++)for(let ae=0;ae<L;ae++){const de=f+ae+ne*le,ge=f+ae+ne*(le+1),K=f+(ae+1)+ne*(le+1),Q=f+(ae+1)+ne*le;l.push(de,ge,Q),l.push(ge,K,Q),k+=6}a.addGroup(d,k,M),d+=k,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=ks(i[t]);for(const s in n)e[s]=n[s]}return e}function bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Sp={clone:ks,merge:dn};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _f extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new G,Oc=new ot,kc=new ot;class on extends _f{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,kc),t.subVectors(kc,Oc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ds=1;class wp extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(fs,ds,e,t);s.layers=this.layers,this.add(s);const r=new on(fs,ds,e,t);r.layers=this.layers,this.add(r);const o=new on(fs,ds,e,t);o.layers=this.layers,this.add(o);const a=new on(fs,ds,e,t);a.layers=this.layers,this.add(a);const l=new on(fs,ds,e,t);l.layers=this.layers,this.add(l);const c=new on(fs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vf extends un{constructor(e=[],t=Is,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ap extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gs(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Mi});r.uniforms.tEquirect.value=t;const o=new jt(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=Tn),new wp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ii extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new Zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xf extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bc=new G,zc=new Ct,Vc=new Ct,Cp=new G,Hc=new at,Yr=new G,_a=new Ki,Gc=new at,va=new Hs;class Pp extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pc,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(s),e.ray.intersectsSphere(_a)!==!1&&(Gc.copy(s).invert(),va.copy(e.ray).applyMatrix4(Gc),!(this.boundingBox!==null&&va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,va)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;zc.fromBufferAttribute(s.attributes.skinIndex,e),Vc.fromBufferAttribute(s.attributes.skinWeight,e),Bc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Vc.getComponent(r);if(o!==0){const a=zc.getComponent(r);Hc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Cp.copy(Bc).applyMatrix4(Hc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yf extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mf extends un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=wn,u=wn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=new at,Lp=new at;class Jl{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Lp;Wc.multiplyMatrices(a,t[r]),Wc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mf(t,e,e,Pn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new yf),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}const xa=new G,Dp=new G,Ip=new mt;class _i{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xa.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ip.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ki,Kr=new G;class $l{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],E=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,m-d,b-p).normalize(),n[1].setComponents(l+r,f+c,m+d,b+p).normalize(),n[2].setComponents(l+o,f+u,m+g,b+v).normalize(),n[3].setComponents(l-o,f-u,m-g,b-v).normalize(),n[4].setComponents(l-a,f-h,m-_,b-E).normalize(),t===ni)n[5].setComponents(l+a,f+h,m+_,b+E).normalize();else if(t===Eo)n[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ri extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const To=new G,wo=new G,Xc=new at,er=new Hs,Zr=new Ki,ya=new G,jc=new G;class Ql extends Ht{constructor(e=new qt,t=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)To.fromBufferAttribute(t,s-1),wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=To.distanceTo(wo);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;Xc.copy(s).invert(),er.copy(e.ray).applyMatrix4(Xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),E=Jr(this,e,er,l,p,v,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Jr(this,e,er,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Jr(this,e,er,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Jr(this,e,er,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(To.fromBufferAttribute(a,s),wo.fromBufferAttribute(a,r),t.distanceSqToSegment(To,wo,ya,jc)>n)return;ya.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:jc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const qc=new G,Yc=new G;class vr extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qc.fromBufferAttribute(t,s),Yc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo(Yc);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vi extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kc=new at,Al=new Hs,$r=new Ki,Qr=new G;class cr extends Ht{constructor(e=new qt,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Kc.copy(s).invert(),Al.copy(e.ray).applyMatrix4(Kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Qr.fromBufferAttribute(h,m),Zc(Qr,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Qr.fromBufferAttribute(h,g),Zc(Qr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zc(i,e,t,n,s,r,o){const a=Al.distanceSqToPoint(i);if(a<t){const l=new G;Al.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bf extends un{constructor(e,t,n=Wi,s,r,o,a=wn,l=wn,c,u=mr){if(u!==mr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Io extends qt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function v(){const b=new G,D=new G;let T=0;const L=(t-e)/n;for(let I=0;I<=r;I++){const M=[],S=I/r,N=S*(t-e)+e;for(let z=0;z<=s;z++){const V=z/s,Y=V*l+a,ne=Math.sin(Y),F=Math.cos(Y);D.x=N*ne,D.y=-S*n+m,D.z=N*F,h.push(D.x,D.y,D.z),b.set(ne,L,F).normalize(),f.push(b.x,b.y,b.z),d.push(V,1-S),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){const S=_[M][I],N=_[M+1][I],z=_[M+1][I+1],V=_[M][I+1];(e>0||M!==0)&&(u.push(S,N,V),T+=3),(t>0||M!==r-1)&&(u.push(N,z,V),T+=3)}c.addGroup(p,T,0),p+=T}function E(b){const D=g,T=new ot,L=new G;let I=0;const M=b===!0?e:t,S=b===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const N=g;for(let z=0;z<=s;z++){const Y=z/s*l+a,ne=Math.cos(Y),F=Math.sin(Y);L.x=M*F,L.y=m*S,L.z=M*ne,h.push(L.x,L.y,L.z),f.push(0,S,0),T.x=ne*.5+.5,T.y=F*.5*S+.5,d.push(T.x,T.y),g++}for(let z=0;z<s;z++){const V=D+z,Y=N+z;b===!0?u.push(Y,Y+1,V):u.push(Y+1,Y,V),I+=3}c.addGroup(p,I,b===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bs extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let E=0;E<c;E++){const b=E*h-r;g.push(b,-v,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const E=v+c*p,b=v+c*(p+1),D=v+1+c*(p+1),T=v+1+c*p;d.push(E,b,T),d.push(b,D,T)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class No extends qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,f=new G,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],E=p/n;let b=0;p===0&&o===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const T=D/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+b,1-E),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const E=u[p][v+1],b=u[p][v],D=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&d.push(E,b,T),(p!==n-1||l<Math.PI)&&d.push(b,D,T)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rl extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cs extends Vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Np extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Up extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function eo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Jc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Sf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Uo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bp extends Uo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gc:r=e,a=2*t-n;break;case _c:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:o=e,l=2*n-t;break;case _c:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let D=0;D!==a;++D)r[D]=p*o[u+D]+v*o[c+D]+E*o[l+D]+b*o[h+D];return r}}class zp extends Uo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Vp extends Uo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case wl:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Op(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=wl;class Ws extends Hn{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=bo;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Ef extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Ef.prototype.ValueTypeName="color";class Ao extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Ao.prototype.ValueTypeName="number";class Hp extends Uo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Mr extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hp(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Hn{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=bo;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}zs.prototype.ValueTypeName="vector";class $c{constructor(e="",t=-1,n=[],s=Rd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Wp(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=kp(l);l=Jc(l,1,u),c=Jc(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ao(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Sf(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const E=f[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}s.push(new Ao(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(zs,d+".position",f,"pos",s),n(Mr,d+".quaternion",f,"rot",s),n(zs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Gp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ao;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Ef;case"quaternion":return Mr;case"bool":case"boolean":return Ws;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Gp(i.type);if(i.times===void 0){const t=[],n=[];Sf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ro={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tf{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const wf=new Tf;class li{constructor(e){this.manager=e!==void 0?e:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}li.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class Xp extends Error{constructor(e,t){super(e),this.response=t}}class Fo extends li{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ro.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:s});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:E,value:b})=>{if(E)p.close();else{_+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,L=u.length;T<L;T++){const I=u[T];I.onProgress&&I.onProgress(D)}p.enqueue(b),v()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Xp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ro.add(e,c);const u=Qn[e];delete Qn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Qn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jp extends li{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ro.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_r("img");function l(){u(),Ro.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class qp extends li{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Mf,a=new Fo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bn,o.wrapT=c.wrapT!==void 0?c.wrapT:Bn,o.magFilter=c.magFilter!==void 0?c.magFilter:Tn,o.minFilter=c.minFilter!==void 0?c.minFilter:Tn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ti),c.mipmapCount===1&&(o.minFilter=Tn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class Af extends li{constructor(e){super(e)}load(e,t,n,s){const r=new un,o=new jp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class br extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yp extends br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ma=new at,Qc=new G,eu=new G;class ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kp extends ec{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zp extends br{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const tu=new at,tr=new G,ba=new G;class Jp extends ec{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),ba.copy(n.position),ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ba),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}}class $p extends br{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tc extends _f{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qp extends ec{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class em extends br{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rf{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tm extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const nu=new at;class nm{constructor(e,t,n=0,s=1/0){this.ray=new Hs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(e,t=!0,n=[]){return Pl(e,this,n,t),n.sort(iu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pl(e[s],this,n,t);return n.sort(iu),n}}function iu(i,e){return i.distance-e.distance}function Pl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Pl(r[o],e,t,!0)}}class su{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sa extends vr{constructor(e=10,t=10,n=4473924,s=8947848){n=new it(n),s=new it(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new qt;u.setAttribute("position",new yt(l,3)),u.setAttribute("color",new yt(c,3));const h=new ri({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ru=new G;let to,Ea;class Ta extends Ht{constructor(e=new G(0,0,1),t=new G(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",to===void 0&&(to=new qt,to.setAttribute("position",new yt([0,0,0,0,1,0],3)),Ea=new Io(0,.5,1,5,1),Ea.translate(0,-.5,0)),this.position.copy(t),this.line=new Ql(to,new ri({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new jt(Ea,new Os({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ru.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ru,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class im extends vr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new qt;s.setAttribute("position",new yt(t,3)),s.setAttribute("color",new yt(n,3));const r=new ri({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new it,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sm extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ou(i,e,t,n){const s=rm(n);switch(t){case nf:return i*e;case rf:return i*e;case of:return i*e*2;case af:return i*e/s.components*s.byteLength;case Wl:return i*e/s.components*s.byteLength;case lf:return i*e*2/s.components*s.byteLength;case Xl:return i*e*2/s.components*s.byteLength;case sf:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case jl:return i*e*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(i,16)*Math.max(e,8)/4;case el:case nl:return Math.max(i,8)*Math.max(e,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vo:case Ml:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cf:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rm(i){switch(i){case ai:case Qh:return{byteLength:1,components:1};case dr:case ef:case yr:return{byteLength:2,components:1};case Hl:case Gl:return{byteLength:2,components:4};case Wi:case Vl:case Wn:return{byteLength:4,components:1};case tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function om(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,d_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p_=`#define DISTANCE
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
}`,m_=`#define DISTANCE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
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
}`,x_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,S_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,A_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,D_=`#define TOON
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
}`,I_=`#define TOON
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
}`,N_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,k_=`uniform float rotation;
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
}`,B_=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:am,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:um,alphatest_fragment:hm,alphatest_pars_fragment:fm,aomap_fragment:dm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:_m,beginnormal_vertex:vm,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:Mm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:Tm,color_fragment:wm,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Im,displacementmap_vertex:Nm,emissivemap_fragment:Um,emissivemap_pars_fragment:Fm,colorspace_fragment:Om,colorspace_pars_fragment:km,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Vm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Qm,envmap_vertex:Gm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:jm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:Km,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:$m,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:bg,morphtarget_vertex:Sg,normal_fragment_begin:Eg,normal_fragment_maps:Tg,normal_pars_fragment:wg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ig,opaque_fragment:Ng,packing:Ug,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:kg,dithering_pars_fragment:Bg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:jg,skinning_pars_vertex:qg,skinning_vertex:Yg,skinnormal_vertex:Kg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:$g,tonemapping_pars_fragment:Qg,transmission_fragment:e_,transmission_pars_fragment:t_,uv_pars_fragment:n_,uv_pars_vertex:i_,uv_vertex:s_,worldpos_vertex:r_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:u_,cube_frag:h_,depth_vert:f_,depth_frag:d_,distanceRGBA_vert:p_,distanceRGBA_frag:m_,equirect_vert:g_,equirect_frag:__,linedashed_vert:v_,linedashed_frag:x_,meshbasic_vert:y_,meshbasic_frag:M_,meshlambert_vert:b_,meshlambert_frag:S_,meshmatcap_vert:E_,meshmatcap_frag:T_,meshnormal_vert:w_,meshnormal_frag:A_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:P_,meshphysical_frag:L_,meshtoon_vert:D_,meshtoon_frag:I_,points_vert:N_,points_frag:U_,shadow_vert:F_,shadow_frag:O_,sprite_vert:k_,sprite_frag:B_},we={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Gn={basic:{uniforms:dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new it(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:dn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:dn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new it(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:dn([we.points,we.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:dn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:dn([we.common,we.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:dn([we.sprite,we.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:dn([we.common,we.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:dn([we.lights,we.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Gn.physical={uniforms:dn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const no={r:0,b:0,g:0},Ni=new Mn,z_=new at;function V_(i,e,t,n,s,r,o){const a=new it(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const D=g(E);D===null?p(a,l):D&&D.isColor&&(p(D,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const D=g(b);D&&(D.isCubeTexture||D.mapping===Lo)?(u===void 0&&(u=new jt(new Gs(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ks(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(b.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z_.makeRotationFromEuler(Ni)),u.material.toneMapped=bt.getTransfer(D.colorSpace)!==It,(h!==D||f!==D.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,f=D.version,d=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new jt(new Bs(2,2),new Ti({name:"BackgroundMaterial",uniforms:ks(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=bt.getTransfer(D.colorSpace)!==It,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=D,f=D.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(no,gf(i)),n.buffers.color.setClear(no.r,no.g,no.b,b,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:v}}function H_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,N,z,V,Y){let ne=!1;const F=h(V,z,N);r!==F&&(r=F,c(r.object)),ne=d(S,V,z,Y),ne&&g(S,V,z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,b(S,N,z,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,N,z){const V=z.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let ne=Y[N.id];ne===void 0&&(ne={},Y[N.id]=ne);let F=ne[V];return F===void 0&&(F=f(l()),ne[V]=F),F}function f(S){const N=[],z=[],V=[];for(let Y=0;Y<t;Y++)N[Y]=0,z[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:V,object:S,attributes:{},index:null}}function d(S,N,z,V){const Y=r.attributes,ne=N.attributes;let F=0;const te=z.getAttributes();for(const k in te)if(te[k].location>=0){const le=Y[k];let ae=ne[k];if(ae===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),le===void 0||le.attribute!==ae||ae&&le.data!==ae.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function g(S,N,z,V){const Y={},ne=N.attributes;let F=0;const te=z.getAttributes();for(const k in te)if(te[k].location>=0){let le=ne[k];le===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const ae={};ae.attribute=le,le&&le.data&&(ae.data=le.data),Y[k]=ae,F++}r.attributes=Y,r.attributesNum=F,r.index=V}function _(){const S=r.newAttributes;for(let N=0,z=S.length;N<z;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){const z=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;z[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),Y[S]!==N&&(i.vertexAttribDivisor(S,N),Y[S]=N)}function v(){const S=r.newAttributes,N=r.enabledAttributes;for(let z=0,V=N.length;z<V;z++)N[z]!==S[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function E(S,N,z,V,Y,ne,F){F===!0?i.vertexAttribIPointer(S,N,z,Y,ne):i.vertexAttribPointer(S,N,z,V,Y,ne)}function b(S,N,z,V){_();const Y=V.attributes,ne=z.getAttributes(),F=N.defaultAttributeValues;for(const te in ne){const k=ne[te];if(k.location>=0){let J=Y[te];if(J===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const le=J.normalized,ae=J.itemSize,de=e.get(J);if(de===void 0)continue;const ge=de.buffer,K=de.type,Q=de.bytesPerElement,X=K===i.INT||K===i.UNSIGNED_INT||J.gpuType===Vl;if(J.isInterleavedBufferAttribute){const H=J.data,se=H.stride,Se=J.offset;if(H.isInstancedInterleavedBuffer){for(let Me=0;Me<k.locationSize;Me++)p(k.location+Me,H.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Me=0;Me<k.locationSize;Me++)m(k.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Me=0;Me<k.locationSize;Me++)E(k.location+Me,ae/k.locationSize,K,le,se*Q,(Se+ae/k.locationSize*Me)*Q,X)}else{if(J.isInstancedBufferAttribute){for(let H=0;H<k.locationSize;H++)p(k.location+H,J.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let H=0;H<k.locationSize;H++)m(k.location+H);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let H=0;H<k.locationSize;H++)E(k.location+H,ae/k.locationSize,K,le,ae*Q,ae/k.locationSize*H*Q,X)}}else if(F!==void 0){const le=F[te];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(k.location,le);break;case 3:i.vertexAttrib3fv(k.location,le);break;case 4:i.vertexAttrib4fv(k.location,le);break;default:i.vertexAttrib1fv(k.location,le)}}}}v()}function D(){I();for(const S in n){const N=n[S];for(const z in N){const V=N[z];for(const Y in V)u(V[Y].object),delete V[Y];delete N[z]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const z in N){const V=N[z];for(const Y in V)u(V[Y].object),delete V[Y];delete N[z]}delete n[S.id]}function L(S){for(const N in n){const z=n[N];if(z[S.id]===void 0)continue;const V=z[S.id];for(const Y in V)u(V[Y].object),delete V[Y];delete z[S.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function G_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Pn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ai&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Wn&&!I)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:D,maxSamples:T}}function X_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new _i,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,E=v*4;let b=p.clippingState||null;l.value=b,b=u(g,f,E,d);for(let D=0;D!==E;++D)b[D]=t[D];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=d;E!==_;++E,b+=4)o.copy(h[E]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function j_(i){let e=new WeakMap;function t(o,a){return a===Ja?o.mapping=Is:a===$a&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===$a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ap(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Es=4,au=[.125,.215,.35,.446,.526,.582],ki=20,wa=new tc,lu=new it;let Aa=null,Ra=0,Ca=0,Pa=!1;const Fi=(1+Math.sqrt(5))/2,ps=1/Fi,cu=[new G(-Fi,ps,0),new G(Fi,ps,0),new G(-ps,0,Fi),new G(ps,0,Fi),new G(0,Fi,-ps),new G(0,Fi,ps),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],q_=new G;class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=q_}=r;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:yr,format:Pn,colorSpace:Us,depthBuffer:!1},s=hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y_(r)),this._blurMaterial=K_(r,e,t)}return s}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(lu),h.toneMapping=bi,h.autoClear=!1;const g=new Os({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new jt(new Gs,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(lu),m=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):E===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const b=this._cubeSize;io(s,E*b,v>2?b:0,b,b),h.setRenderTarget(s),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Is||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cu[(s-r-1)%cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new jt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let v=0;for(let L=0;L<ki;++L){const I=L/_,M=Math.exp(-I*I/2);p.push(M),L===0?v+=M:L<m&&(v+=2*M)}for(let L=0;L<p.length;L++)p[L]=p[L]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const b=this._sizeLods[s],D=3*b*(s>E-Es?s-E+Es:0),T=4*(this._cubeSize-b);io(t,D,T,3*b,2*b),l.setRenderTarget(t),l.render(h,wa)}}function Y_(i){const e=[],t=[],n=[];let s=i;const r=i-Es+1+au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Es?l=au[o-i+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),E=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let T=0;T<d;T++){const L=T%3*2/3-1,I=T>2?0:-1,M=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];v.set(M,_*g*T),E.set(f,m*g*T);const S=[T,T,T,T,T,T];b.set(S,p*g*T)}const D=new qt;D.setAttribute("position",new pn(v,_)),D.setAttribute("uv",new pn(E,m)),D.setAttribute("faceIndex",new pn(b,p)),e.push(D),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hu(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function K_(i,e,t){const n=new Float32Array(ki),s=new G(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function fu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function du(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function Z_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===$a,u=l===Is||l===Ns;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new uu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new uu(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function J_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $_(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let E=0,b=v.length;E<b;E+=3){const D=v[E+0],T=v[E+1],L=v[E+2];f.push(D,T,T,L,L,D)}}else if(g!==void 0){const v=g.array;_=g.version;for(let E=0,b=v.length/3-1;E<b;E+=3){const D=E+0,T=E+1,L=E+2;f.push(D,T,T,L,L,D)}}else return;const m=new(hf(f)?mf:pf)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Q_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function e0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,e,t){const n=new WeakMap,s=new Ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let D=a.attributes.position.count*b,T=1;D>e.maxTextureSize&&(T=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const L=new Float32Array(D*T*4*h),I=new ff(L,D,T,h);I.type=Wn,I.needsUpdate=!0;const M=b*4;for(let N=0;N<h;N++){const z=p[N],V=v[N],Y=E[N],ne=D*T*4*N;for(let F=0;F<z.count;F++){const te=F*M;g===!0&&(s.fromBufferAttribute(z,F),L[ne+te+0]=s.x,L[ne+te+1]=s.y,L[ne+te+2]=s.z,L[ne+te+3]=0),_===!0&&(s.fromBufferAttribute(V,F),L[ne+te+4]=s.x,L[ne+te+5]=s.y,L[ne+te+6]=s.z,L[ne+te+7]=0),m===!0&&(s.fromBufferAttribute(Y,F),L[ne+te+8]=s.x,L[ne+te+9]=s.y,L[ne+te+10]=s.z,L[ne+te+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new ot(D,T)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function n0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Pf=new un,pu=new bf(1,1),Lf=new ff,Df=new up,If=new vf,mu=[],gu=[],_u=new Float32Array(16),vu=new Float32Array(9),xu=new Float32Array(4);function js(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),en(t,n)}}function l0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),en(t,n)}}function c0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),en(t,n)}}function u0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function p0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pu.compareFunction=uf,r=pu):r=Pf,t.setTexture2D(e||r,s)}function x0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Df,s)}function y0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||If,s)}function M0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lf,s)}function b0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return h0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}function S0(i,e){i.uniform1fv(this.addr,e)}function E0(i,e){const t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function T0(i,e){const t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function w0(i,e){const t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function A0(i,e){const t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R0(i,e){const t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){const t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P0(i,e){i.uniform1iv(this.addr,e)}function L0(i,e){i.uniform2iv(this.addr,e)}function D0(i,e){i.uniform3iv(this.addr,e)}function I0(i,e){i.uniform4iv(this.addr,e)}function N0(i,e){i.uniform1uiv(this.addr,e)}function U0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function k0(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pf,r[o])}function B0(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Df,r[o])}function z0(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||If,r[o])}function V0(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lf,r[o])}function H0(i){switch(i){case 5126:return S0;case 35664:return E0;case 35665:return T0;case 35666:return w0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return N0;case 36294:return U0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return V0}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}}class W0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}}class X0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function yu(i,e){i.seq.push(e),i.map[e.id]=e}function j0(i,e,t){const n=i.name,s=n.length;for(La.lastIndex=0;;){const r=La.exec(n),o=La.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yu(t,c===void 0?new G0(a,i,e):new W0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new X0(a),yu(t,h)),t=h}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);j0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Mu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const q0=37297;let Y0=0;function K0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const bu=new mt;function Z0(i){bt._getMatrix(bu,bt.workingColorSpace,i);const e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case So:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Su(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+K0(i.getShaderSource(e),o)}else return s}function J0(i,e){const t=Z0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $0(i,e){let t;switch(e){case yd:t="Linear";break;case Md:t="Reinhard";break;case bd:t="Cineon";break;case zl:t="ACESFilmic";break;case Ed:t="AgX";break;case Td:t="Neutral";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new G;function Q0(){bt.getLuminanceCoefficients(so);const i=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function tv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sr(i){return i!==""}function Eu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(i){return i.replace(iv,rv)}const sv=new Map;function rv(i,e){let t=_t[e];if(t===void 0){const n=sv.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(ov,av)}function av(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function cv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ns:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function hv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function fv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lv(t),c=cv(t),u=uv(t),h=hv(t),f=fv(t),d=ev(t),g=tv(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?_t.tonemapping_pars_fragment:"",t.toneMapping!==bi?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,J0("linearToOutputTexel",t.outputColorSpace),Q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Ll(o),o=Eu(o,t),o=Tu(o,t),a=Ll(a),a=Eu(a,t),a=Tu(a,t),o=wu(o),a=wu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=v+m+o,b=v+p+a,D=Mu(s,s.VERTEX_SHADER,E),T=Mu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,D),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(N){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(T).trim();let ne=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const te=Su(s,D,"vertex"),k=Su(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+te+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||Y==="")&&(F=!1);F&&(N.diagnostics={runnable:ne,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(D),s.deleteShader(T),I=new yo(s,_),M=nv(s,_)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,q0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let pv=0;class mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gv(e),t.set(e,n)),n}}class gv{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}}function _v(i,e,t,n,s,r,o){const a=new Kl,l=new mv,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,N,z,V){const Y=z.fog,ne=V.geometry,F=M.isMeshStandardMaterial?z.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),k=te&&te.mapping===Lo?te.image.height:null,J=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const le=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ae=le!==void 0?le.length:0;let de=0;ne.morphAttributes.position!==void 0&&(de=1),ne.morphAttributes.normal!==void 0&&(de=2),ne.morphAttributes.color!==void 0&&(de=3);let ge,K,Q,X;if(J){const pt=Gn[J];ge=pt.vertexShader,K=pt.fragmentShader}else ge=M.vertexShader,K=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const H=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Se=V.isInstancedMesh===!0,Me=V.isBatchedMesh===!0,ct=!!M.map,We=!!M.matcap,je=!!te,B=!!M.aoMap,$e=!!M.lightMap,Ve=!!M.bumpMap,ut=!!M.normalMap,Fe=!!M.displacementMap,lt=!!M.emissiveMap,Ee=!!M.metalnessMap,U=!!M.roughnessMap,w=M.anisotropy>0,ee=M.clearcoat>0,pe=M.dispersion>0,ce=M.iridescence>0,ue=M.sheen>0,He=M.transmission>0,Ae=w&&!!M.anisotropyMap,Oe=ee&&!!M.clearcoatMap,St=ee&&!!M.clearcoatNormalMap,ye=ee&&!!M.clearcoatRoughnessMap,ke=ce&&!!M.iridescenceMap,et=ce&&!!M.iridescenceThicknessMap,st=ue&&!!M.sheenColorMap,Be=ue&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,ft=!!M.specularColorMap,Lt=!!M.specularIntensityMap,q=He&&!!M.transmissionMap,Re=He&&!!M.thicknessMap,he=!!M.gradientMap,me=!!M.alphaMap,Le=M.alphaTest>0,Ce=!!M.alphaHash,ht=!!M.extensions;let Bt=bi;M.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const nn={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:K,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Me,batchingColor:Me&&V._colorsTexture!==null,instancing:Se,instancingColor:Se&&V.instanceColor!==null,instancingMorph:Se&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Us,alphaToCoverage:!!M.alphaToCoverage,map:ct,matcap:We,envMap:je,envMapMode:je&&te.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:$e,bumpMap:Ve,normalMap:ut,displacementMap:f&&Fe,emissiveMap:lt,normalMapObjectSpace:ut&&M.normalMapType===Ld,normalMapTangentSpace:ut&&M.normalMapType===Do,metalnessMap:Ee,roughnessMap:U,anisotropy:w,anisotropyMap:Ae,clearcoat:ee,clearcoatMap:Oe,clearcoatNormalMap:St,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ce,iridescenceMap:ke,iridescenceThicknessMap:et,sheen:ue,sheenColorMap:st,sheenRoughnessMap:Be,specularMap:Mt,specularColorMap:ft,specularIntensityMap:Lt,transmission:He,transmissionMap:q,thicknessMap:Re,gradientMap:he,opaque:M.transparent===!1&&M.blending===As&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:Le,alphaHash:Ce,combine:M.combine,mapUv:ct&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:$e&&_(M.lightMap.channel),bumpMapUv:Ve&&_(M.bumpMap.channel),normalMapUv:ut&&_(M.normalMap.channel),displacementMapUv:Fe&&_(M.displacementMap.channel),emissiveMapUv:lt&&_(M.emissiveMap.channel),metalnessMapUv:Ee&&_(M.metalnessMap.channel),roughnessMapUv:U&&_(M.roughnessMap.channel),anisotropyMapUv:Ae&&_(M.anisotropyMap.channel),clearcoatMapUv:Oe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(M.sheenRoughnessMap.channel),specularMapUv:Mt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:Lt&&_(M.specularIntensityMap.channel),transmissionMapUv:q&&_(M.transmissionMap.channel),thicknessMapUv:Re&&_(M.thicknessMap.channel),alphaMapUv:me&&_(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ut||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ne.attributes.uv&&(ct||me),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:se,skinning:V.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ct&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===It,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===On,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ht&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&M.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(S,M),E(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){const S=g[M.type];let N;if(S){const z=Gn[S];N=Sp.clone(z.uniforms)}else N=M.uniforms;return N}function D(M,S){let N;for(let z=0,V=u.length;z<V;z++){const Y=u[z];if(Y.cacheKey===S){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new dv(i,S,M,r),u.push(N)),N}function T(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function L(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:D,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:I}}function vv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||xv),n.length>1&&n.sort(f||Ru),s.length>1&&s.sort(f||Ru)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function yv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Cu,i.set(n,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new it};break;case"SpotLight":t={position:new G,direction:new G,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function bv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tv(i){const e=new Mv,t=bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new at,o=new at;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,E=0,b=0,D=0,T=0,L=0;c.sort(Ev);for(let M=0,S=c.length;M<S;M++){const N=c[M],z=N.color,V=N.intensity,Y=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=z.r*V,h+=z.g*V,f+=z.b*V;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],V);L++}else if(N.isDirectionalLight){const F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const te=N.shadow,k=t.get(N);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=ne,n.directionalShadowMatrix[d]=N.shadow.matrix,v++}n.directional[d]=F,d++}else if(N.isSpotLight){const F=e.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(z).multiplyScalar(V),F.distance=Y,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[_]=F;const te=N.shadow;if(N.map&&(n.spotLightMap[D]=N.map,D++,te.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[_]=te.matrix,N.castShadow){const k=t.get(N);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=ne,b++}_++}else if(N.isRectAreaLight){const F=e.get(N);F.color.copy(z).multiplyScalar(V),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=F,m++}else if(N.isPointLight){const F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const te=N.shadow,k=t.get(N);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,k.shadowCameraNear=te.camera.near,k.shadowCameraFar=te.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=N.shadow.matrix,E++}n.point[g]=F,g++}else if(N.isHemisphereLight){const F=e.get(N);F.skyColor.copy(N.color).multiplyScalar(V),F.groundColor.copy(N.groundColor).multiplyScalar(V),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==E||I.numSpotShadows!==b||I.numSpotMaps!==D||I.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=E,I.numSpotShadows=b,I.numSpotMaps=D,I.numLightProbes=L,n.version=Sv++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const E=c[p];if(E.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(E.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Pu(i){const e=new Tv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pu(i),e.set(s,[a])):r>=o.length?(a=new Pu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`;function Cv(i,e,t){let n=new $l;const s=new ot,r=new ot,o=new Ct,a=new Up({depthPacking:Pd}),l=new Fp,c={},u=t.maxTextureSize,h={[oi]:xn,[xn]:oi,[On]:On},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(T,L,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=p!==ei&&this.type===ei,Y=p===ei&&this.type!==ei;for(let ne=0,F=T.length;ne<F;ne++){const te=T[ne],k=te.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();if(s.multiply(J),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||V===!0||Y===!0){const ae=this.type!==ei?{minFilter:wn,magFilter:wn}:{};k.map!==null&&k.map.dispose(),k.map=new Xi(s.x,s.y,ae),k.map.texture.name=te.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const le=k.getViewportCount();for(let ae=0;ae<le;ae++){const de=k.getViewport(ae);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),z.viewport(o),k.updateMatrices(te,ae),n=k.getFrustum(),b(L,I,k.camera,te,this.type)}k.isPointLightShadow!==!0&&this.type===ei&&v(k,I),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,N)};function v(T,L){const I=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,I,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,I,d,_,null)}function E(T,L,I,M){let S=null;const N=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)S=N;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const z=S.uuid,V=L.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let ne=Y[V];ne===void 0&&(ne=S.clone(),Y[V]=ne,L.addEventListener("dispose",D)),S=ne}if(S.visible=L.visible,S.wireframe=L.wireframe,M===ei?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=I}return S}function b(T,L,I,M,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const V=e.update(T),Y=T.material;if(Array.isArray(Y)){const ne=V.groups;for(let F=0,te=ne.length;F<te;F++){const k=ne[F],J=Y[k.materialIndex];if(J&&J.visible){const le=E(T,J,M,S);T.onBeforeShadow(i,T,L,I,V,le,k),i.renderBufferDirect(I,null,V,le,T,k),T.onAfterShadow(i,T,L,I,V,le,k)}}}else if(Y.visible){const ne=E(T,Y,M,S);T.onBeforeShadow(i,T,L,I,V,ne,null),i.renderBufferDirect(I,null,V,ne,T,null),T.onAfterShadow(i,T,L,I,V,ne,null)}}const z=T.children;for(let V=0,Y=z.length;V<Y;V++)b(z[V],L,I,M,S)}function D(T){T.target.removeEventListener("dispose",D);for(const I in c){const M=c[I],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Pv={[Wa]:Xa,[ja]:Ka,[qa]:Za,[Ds]:Ya,[Xa]:Wa,[Ka]:ja,[Za]:qa,[Ya]:Ds};function Lv(i,e){function t(){let q=!1;const Re=new Ct;let he=null;const me=new Ct(0,0,0,0);return{setMask:function(Le){he!==Le&&!q&&(i.colorMask(Le,Le,Le,Le),he=Le)},setLocked:function(Le){q=Le},setClear:function(Le,Ce,ht,Bt,nn){nn===!0&&(Le*=Bt,Ce*=Bt,ht*=Bt),Re.set(Le,Ce,ht,Bt),me.equals(Re)===!1&&(i.clearColor(Le,Ce,ht,Bt),me.copy(Re))},reset:function(){q=!1,he=null,me.set(-1,0,0,0)}}}function n(){let q=!1,Re=!1,he=null,me=null,Le=null;return{setReversed:function(Ce){if(Re!==Ce){const ht=e.get("EXT_clip_control");Ce?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),Re=Ce;const Bt=Le;Le=null,this.setClear(Bt)}},getReversed:function(){return Re},setTest:function(Ce){Ce?H(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!q&&(i.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(Re&&(Ce=Pv[Ce]),me!==Ce){switch(Ce){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Ce}},setLocked:function(Ce){q=Ce},setClear:function(Ce){Le!==Ce&&(Re&&(Ce=1-Ce),i.clearDepth(Ce),Le=Ce)},reset:function(){q=!1,he=null,me=null,Le=null,Re=!1}}}function s(){let q=!1,Re=null,he=null,me=null,Le=null,Ce=null,ht=null,Bt=null,nn=null;return{setTest:function(pt){q||(pt?H(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(pt){Re!==pt&&!q&&(i.stencilMask(pt),Re=pt)},setFunc:function(pt,mn,Dn){(he!==pt||me!==mn||Le!==Dn)&&(i.stencilFunc(pt,mn,Dn),he=pt,me=mn,Le=Dn)},setOp:function(pt,mn,Dn){(Ce!==pt||ht!==mn||Bt!==Dn)&&(i.stencilOp(pt,mn,Dn),Ce=pt,ht=mn,Bt=Dn)},setLocked:function(pt){q=pt},setClear:function(pt){nn!==pt&&(i.clearStencil(pt),nn=pt)},reset:function(){q=!1,Re=null,he=null,me=null,Le=null,Ce=null,ht=null,Bt=null,nn=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,E=null,b=null,D=null,T=null,L=new it(0,0,0),I=0,M=!1,S=null,N=null,z=null,V=null,Y=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,te=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=te>=1):k.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=te>=2);let J=null,le={};const ae=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),ge=new Ct().fromArray(ae),K=new Ct().fromArray(de);function Q(q,Re,he,me){const Le=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(q,Ce),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<he;ht++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Re+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Ce}const X={};X[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(Ds),Ve(!1),ut(uc),H(i.CULL_FACE),B(Mi);function H(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function se(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function Se(q,Re){return h[q]!==Re?(i.bindFramebuffer(q,Re),h[q]=Re,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function Me(q,Re){let he=d,me=!1;if(q){he=f.get(Re),he===void 0&&(he=[],f.set(Re,he));const Le=q.textures;if(he.length!==Le.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ht=Le.length;Ce<ht;Ce++)he[Ce]=i.COLOR_ATTACHMENT0+Ce;he.length=Le.length,me=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,me=!0);me&&i.drawBuffers(he)}function ct(q){return g!==q?(i.useProgram(q),g=q,!0):!1}const We={[Oi]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[nd]:i.FUNC_REVERSE_SUBTRACT};We[id]=i.MIN,We[sd]=i.MAX;const je={[rd]:i.ZERO,[od]:i.ONE,[ad]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[cd]:i.DST_ALPHA,[ld]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[pd]:i.CONSTANT_COLOR,[md]:i.ONE_MINUS_CONSTANT_COLOR,[gd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function B(q,Re,he,me,Le,Ce,ht,Bt,nn,pt){if(q===Mi){_===!0&&(se(i.BLEND),_=!1);return}if(_===!1&&(H(i.BLEND),_=!0),q!==ed){if(q!==m||pt!==M){if((p!==Oi||b!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,b=Oi),pt)switch(q){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}v=null,E=null,D=null,T=null,L.set(0,0,0),I=0,m=q,M=pt}return}Le=Le||Re,Ce=Ce||he,ht=ht||me,(Re!==p||Le!==b)&&(i.blendEquationSeparate(We[Re],We[Le]),p=Re,b=Le),(he!==v||me!==E||Ce!==D||ht!==T)&&(i.blendFuncSeparate(je[he],je[me],je[Ce],je[ht]),v=he,E=me,D=Ce,T=ht),(Bt.equals(L)===!1||nn!==I)&&(i.blendColor(Bt.r,Bt.g,Bt.b,nn),L.copy(Bt),I=nn),m=q,M=!1}function $e(q,Re){q.side===On?se(i.CULL_FACE):H(i.CULL_FACE);let he=q.side===xn;Re&&(he=!he),Ve(he),q.blending===As&&q.transparent===!1?B(Mi):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const me=q.stencilWrite;a.setTest(me),me&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),lt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(q){S!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),S=q)}function ut(q){q!==$f?(H(i.CULL_FACE),q!==N&&(q===uc?i.cullFace(i.BACK):q===Qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),N=q}function Fe(q){q!==z&&(F&&i.lineWidth(q),z=q)}function lt(q,Re,he){q?(H(i.POLYGON_OFFSET_FILL),(V!==Re||Y!==he)&&(i.polygonOffset(Re,he),V=Re,Y=he)):se(i.POLYGON_OFFSET_FILL)}function Ee(q){q?H(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function U(q){q===void 0&&(q=i.TEXTURE0+ne-1),J!==q&&(i.activeTexture(q),J=q)}function w(q,Re,he){he===void 0&&(J===null?he=i.TEXTURE0+ne-1:he=J);let me=le[he];me===void 0&&(me={type:void 0,texture:void 0},le[he]=me),(me.type!==q||me.texture!==Re)&&(J!==he&&(i.activeTexture(he),J=he),i.bindTexture(q,Re||X[q]),me.type=q,me.texture=Re)}function ee(){const q=le[J];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function He(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(q){ge.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ge.copy(q))}function Be(q){K.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),K.copy(q))}function Mt(q,Re){let he=c.get(Re);he===void 0&&(he=new WeakMap,c.set(Re,he));let me=he.get(q);me===void 0&&(me=i.getUniformBlockIndex(Re,q.name),he.set(q,me))}function ft(q,Re){const me=c.get(Re).get(q);l.get(Re)!==me&&(i.uniformBlockBinding(Re,me,q.__bindingPointIndex),l.set(Re,me))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,le={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,E=null,b=null,D=null,T=null,L=new it(0,0,0),I=0,M=!1,S=null,N=null,z=null,V=null,Y=null,ge.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:se,bindFramebuffer:Se,drawBuffers:Me,useProgram:ct,setBlending:B,setMaterial:$e,setFlipSided:Ve,setCullFace:ut,setLineWidth:Fe,setPolygonOffset:lt,setScissorTest:Ee,activeTexture:U,bindTexture:w,unbindTexture:ee,compressedTexImage2D:pe,compressedTexImage3D:ce,texImage2D:ke,texImage3D:et,updateUBOMapping:Mt,uniformBlockBinding:ft,texStorage2D:St,texStorage3D:ye,texSubImage2D:ue,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Oe,scissor:st,viewport:Be,reset:Lt}}function Dv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,w){return d?new OffscreenCanvas(U,w):_r("canvas")}function _(U,w,ee){let pe=1;const ce=Ee(U);if((ce.width>ee||ce.height>ee)&&(pe=ee/Math.max(ce.width,ce.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(pe*ce.width),He=Math.floor(pe*ce.height);h===void 0&&(h=g(ue,He));const Ae=w?g(ue,He):h;return Ae.width=ue,Ae.height=He,Ae.getContext("2d").drawImage(U,0,0,ue,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ue+"x"+He+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function v(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(U,w,ee,pe,ce=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=w;if(w===i.RED&&(ee===i.FLOAT&&(ue=i.R32F),ee===i.HALF_FLOAT&&(ue=i.R16F),ee===i.UNSIGNED_BYTE&&(ue=i.R8)),w===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.R8UI),ee===i.UNSIGNED_SHORT&&(ue=i.R16UI),ee===i.UNSIGNED_INT&&(ue=i.R32UI),ee===i.BYTE&&(ue=i.R8I),ee===i.SHORT&&(ue=i.R16I),ee===i.INT&&(ue=i.R32I)),w===i.RG&&(ee===i.FLOAT&&(ue=i.RG32F),ee===i.HALF_FLOAT&&(ue=i.RG16F),ee===i.UNSIGNED_BYTE&&(ue=i.RG8)),w===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.RG8UI),ee===i.UNSIGNED_SHORT&&(ue=i.RG16UI),ee===i.UNSIGNED_INT&&(ue=i.RG32UI),ee===i.BYTE&&(ue=i.RG8I),ee===i.SHORT&&(ue=i.RG16I),ee===i.INT&&(ue=i.RG32I)),w===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),ee===i.UNSIGNED_INT&&(ue=i.RGB32UI),ee===i.BYTE&&(ue=i.RGB8I),ee===i.SHORT&&(ue=i.RGB16I),ee===i.INT&&(ue=i.RGB32I)),w===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),ee===i.UNSIGNED_INT&&(ue=i.RGBA32UI),ee===i.BYTE&&(ue=i.RGBA8I),ee===i.SHORT&&(ue=i.RGBA16I),ee===i.INT&&(ue=i.RGBA32I)),w===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),w===i.RGBA){const He=ce?So:bt.getTransfer(pe);ee===i.FLOAT&&(ue=i.RGBA32F),ee===i.HALF_FLOAT&&(ue=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(ue=He===It?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(U,w){let ee;return U?w===null||w===Wi||w===pr?ee=i.DEPTH24_STENCIL8:w===Wn?ee=i.DEPTH32F_STENCIL8:w===dr&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wi||w===pr?ee=i.DEPTH_COMPONENT24:w===Wn?ee=i.DEPTH_COMPONENT32F:w===dr&&(ee=i.DEPTH_COMPONENT16),ee}function D(U,w){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==Tn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function T(U){const w=U.target;w.removeEventListener("dispose",T),I(w),w.isVideoTexture&&u.delete(w)}function L(U){const w=U.target;w.removeEventListener("dispose",L),S(w)}function I(U){const w=n.get(U);if(w.__webglInit===void 0)return;const ee=U.source,pe=f.get(ee);if(pe){const ce=pe[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&M(U),Object.keys(pe).length===0&&f.delete(ee)}n.remove(U)}function M(U){const w=n.get(U);i.deleteTexture(w.__webglTexture);const ee=U.source,pe=f.get(ee);delete pe[w.__cacheKey],o.memory.textures--}function S(U){const w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ce=0;ce<w.__webglFramebuffer[pe].length;ce++)i.deleteFramebuffer(w.__webglFramebuffer[pe][ce]);else i.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)i.deleteFramebuffer(w.__webglFramebuffer[pe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=U.textures;for(let pe=0,ce=ee.length;pe<ce;pe++){const ue=n.get(ee[pe]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(ee[pe])}n.remove(U)}let N=0;function z(){N=0}function V(){const U=N;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),N+=1,U}function Y(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function ne(U,w){const ee=n.get(U);if(U.isVideoTexture&&Fe(U),U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(ee,U,w);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+w)}function F(U,w){const ee=n.get(U);if(U.version>0&&ee.__version!==U.version){K(ee,U,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+w)}function te(U,w){const ee=n.get(U);if(U.version>0&&ee.__version!==U.version){K(ee,U,w);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+w)}function k(U,w){const ee=n.get(U);if(U.version>0&&ee.__version!==U.version){Q(ee,U,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+w)}const J={[zi]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},le={[wn]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},ae={[Dd]:i.NEVER,[kd]:i.ALWAYS,[Id]:i.LESS,[uf]:i.LEQUAL,[Nd]:i.EQUAL,[Od]:i.GEQUAL,[Ud]:i.GREATER,[Fd]:i.NOTEQUAL};function de(U,w){if(w.type===Wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Tn||w.magFilter===Ko||w.magFilter===Lr||w.magFilter===ti||w.minFilter===Tn||w.minFilter===Ko||w.minFilter===Lr||w.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,J[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,le[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Lr&&w.minFilter!==ti||w.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ge(U,w){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",T));const pe=w.source;let ce=f.get(pe);ce===void 0&&(ce={},f.set(pe,ce));const ue=Y(w);if(ue!==U.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),ce[ue].usedTimes++;const He=ce[U.__cacheKey];He!==void 0&&(ce[U.__cacheKey].usedTimes--,He.usedTimes===0&&M(w)),U.__cacheKey=ue,U.__webglTexture=ce[ue].texture}return ee}function K(U,w,ee){let pe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=i.TEXTURE_3D);const ce=ge(U,w),ue=w.source;t.bindTexture(pe,U.__webglTexture,i.TEXTURE0+ee);const He=n.get(ue);if(ue.version!==He.__version||ce===!0){t.activeTexture(i.TEXTURE0+ee);const Ae=bt.getPrimaries(bt.workingColorSpace),Oe=w.colorSpace===vi?null:bt.getPrimaries(w.colorSpace),St=w.colorSpace===vi||Ae===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ye=_(w.image,!1,s.maxTextureSize);ye=lt(w,ye);const ke=r.convert(w.format,w.colorSpace),et=r.convert(w.type);let st=E(w.internalFormat,ke,et,w.colorSpace,w.isVideoTexture);de(pe,w);let Be;const Mt=w.mipmaps,ft=w.isVideoTexture!==!0,Lt=He.__version===void 0||ce===!0,q=ue.dataReady,Re=D(w,ye);if(w.isDepthTexture)st=b(w.format===gr,w.type),Lt&&(ft?t.texStorage2D(i.TEXTURE_2D,1,st,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,st,ye.width,ye.height,0,ke,et,null));else if(w.isDataTexture)if(Mt.length>0){ft&&Lt&&t.texStorage2D(i.TEXTURE_2D,Re,st,Mt[0].width,Mt[0].height);for(let he=0,me=Mt.length;he<me;he++)Be=Mt[he],ft?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,ke,et,Be.data):t.texImage2D(i.TEXTURE_2D,he,st,Be.width,Be.height,0,ke,et,Be.data);w.generateMipmaps=!1}else ft?(Lt&&t.texStorage2D(i.TEXTURE_2D,Re,st,ye.width,ye.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,ke,et,ye.data)):t.texImage2D(i.TEXTURE_2D,0,st,ye.width,ye.height,0,ke,et,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ft&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,st,Mt[0].width,Mt[0].height,ye.depth);for(let he=0,me=Mt.length;he<me;he++)if(Be=Mt[he],w.format!==Pn)if(ke!==null)if(ft){if(q)if(w.layerUpdates.size>0){const Le=ou(Be.width,Be.height,w.format,w.type);for(const Ce of w.layerUpdates){const ht=Be.data.subarray(Ce*Le/Be.data.BYTES_PER_ELEMENT,(Ce+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ce,Be.width,Be.height,1,ke,ht)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,ye.depth,ke,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,st,Be.width,Be.height,ye.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,ye.depth,ke,et,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,st,Be.width,Be.height,ye.depth,0,ke,et,Be.data)}else{ft&&Lt&&t.texStorage2D(i.TEXTURE_2D,Re,st,Mt[0].width,Mt[0].height);for(let he=0,me=Mt.length;he<me;he++)Be=Mt[he],w.format!==Pn?ke!==null?ft?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,he,st,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Be.width,Be.height,ke,et,Be.data):t.texImage2D(i.TEXTURE_2D,he,st,Be.width,Be.height,0,ke,et,Be.data)}else if(w.isDataArrayTexture)if(ft){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,st,ye.width,ye.height,ye.depth),q)if(w.layerUpdates.size>0){const he=ou(ye.width,ye.height,w.format,w.type);for(const me of w.layerUpdates){const Le=ye.data.subarray(me*he/ye.data.BYTES_PER_ELEMENT,(me+1)*he/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,ke,et,Le)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ke,et,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,ye.width,ye.height,ye.depth,0,ke,et,ye.data);else if(w.isData3DTexture)ft?(Lt&&t.texStorage3D(i.TEXTURE_3D,Re,st,ye.width,ye.height,ye.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ke,et,ye.data)):t.texImage3D(i.TEXTURE_3D,0,st,ye.width,ye.height,ye.depth,0,ke,et,ye.data);else if(w.isFramebufferTexture){if(Lt)if(ft)t.texStorage2D(i.TEXTURE_2D,Re,st,ye.width,ye.height);else{let he=ye.width,me=ye.height;for(let Le=0;Le<Re;Le++)t.texImage2D(i.TEXTURE_2D,Le,st,he,me,0,ke,et,null),he>>=1,me>>=1}}else if(Mt.length>0){if(ft&&Lt){const he=Ee(Mt[0]);t.texStorage2D(i.TEXTURE_2D,Re,st,he.width,he.height)}for(let he=0,me=Mt.length;he<me;he++)Be=Mt[he],ft?q&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ke,et,Be):t.texImage2D(i.TEXTURE_2D,he,st,ke,et,Be);w.generateMipmaps=!1}else if(ft){if(Lt){const he=Ee(ye);t.texStorage2D(i.TEXTURE_2D,Re,st,he.width,he.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,et,ye)}else t.texImage2D(i.TEXTURE_2D,0,st,ke,et,ye);m(w)&&p(pe),He.__version=ue.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Q(U,w,ee){if(w.image.length!==6)return;const pe=ge(U,w),ce=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ee);const ue=n.get(ce);if(ce.version!==ue.__version||pe===!0){t.activeTexture(i.TEXTURE0+ee);const He=bt.getPrimaries(bt.workingColorSpace),Ae=w.colorSpace===vi?null:bt.getPrimaries(w.colorSpace),Oe=w.colorSpace===vi||He===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const St=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!St&&!ye?ke[me]=_(w.image[me],!0,s.maxCubemapSize):ke[me]=ye?w.image[me].image:w.image[me],ke[me]=lt(w,ke[me]);const et=ke[0],st=r.convert(w.format,w.colorSpace),Be=r.convert(w.type),Mt=E(w.internalFormat,st,Be,w.colorSpace),ft=w.isVideoTexture!==!0,Lt=ue.__version===void 0||pe===!0,q=ce.dataReady;let Re=D(w,et);de(i.TEXTURE_CUBE_MAP,w);let he;if(St){ft&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Mt,et.width,et.height);for(let me=0;me<6;me++){he=ke[me].mipmaps;for(let Le=0;Le<he.length;Le++){const Ce=he[Le];w.format!==Pn?st!==null?ft?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Ce.width,Ce.height,st,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,Mt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Ce.width,Ce.height,st,Be,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,Mt,Ce.width,Ce.height,0,st,Be,Ce.data)}}}else{if(he=w.mipmaps,ft&&Lt){he.length>0&&Re++;const me=Ee(ke[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Mt,me.width,me.height)}for(let me=0;me<6;me++)if(ye){ft?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,st,Be,ke[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Mt,ke[me].width,ke[me].height,0,st,Be,ke[me].data);for(let Le=0;Le<he.length;Le++){const ht=he[Le].image[me].image;ft?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,ht.width,ht.height,st,Be,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,Mt,ht.width,ht.height,0,st,Be,ht.data)}}else{ft?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,st,Be,ke[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Mt,st,Be,ke[me]);for(let Le=0;Le<he.length;Le++){const Ce=he[Le];ft?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,st,Be,Ce.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,Mt,st,Be,Ce.image[me])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),ue.__version=ce.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function X(U,w,ee,pe,ce,ue){const He=r.convert(ee.format,ee.colorSpace),Ae=r.convert(ee.type),Oe=E(ee.internalFormat,He,Ae,ee.colorSpace),St=n.get(w),ye=n.get(ee);if(ye.__renderTarget=w,!St.__hasExternalTextures){const ke=Math.max(1,w.width>>ue),et=Math.max(1,w.height>>ue);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,Oe,ke,et,w.depth,0,He,Ae,null):t.texImage2D(ce,ue,Oe,ke,et,0,He,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ut(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ce,ye.__webglTexture,0,Ve(w)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ce,ye.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(U,w,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){const pe=w.depthTexture,ce=pe&&pe.isDepthTexture?pe.type:null,ue=b(w.stencilBuffer,ce),He=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=Ve(w);ut(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,ue,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,U)}else{const pe=w.textures;for(let ce=0;ce<pe.length;ce++){const ue=pe[ce],He=r.convert(ue.format,ue.colorSpace),Ae=r.convert(ue.type),Oe=E(ue.internalFormat,He,Ae,ue.colorSpace),St=Ve(w);ee&&ut(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Oe,w.width,w.height):ut(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,Oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=n.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ne(w.depthTexture,0);const ce=pe.__webglTexture,ue=Ve(w);if(w.depthTexture.format===mr)ut(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(w.depthTexture.format===gr)ut(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Se(U){const w=n.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ce=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ce)};pe.addEventListener("dispose",ce),w.__depthDisposeCallback=ce}w.__boundDepthTexture=pe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");se(w.__webglFramebuffer,U)}else if(ee){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=i.createRenderbuffer(),H(w.__webglDepthbuffer[pe],U,!1);else{const ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),H(w.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(U,w,ee){const pe=n.get(U);w!==void 0&&X(pe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Se(U)}function ct(U){const w=U.texture,ee=n.get(U),pe=n.get(w);U.addEventListener("dispose",L);const ce=U.textures,ue=U.isWebGLCubeRenderTarget===!0,He=ce.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=w.version,o.memory.textures++),ue){ee.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Ae]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)ee.__webglFramebuffer[Ae][Oe]=i.createFramebuffer()}else ee.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)ee.__webglFramebuffer[Ae]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(He)for(let Ae=0,Oe=ce.length;Ae<Oe;Ae++){const St=n.get(ce[Ae]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&ut(U)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ce.length;Ae++){const Oe=ce[Ae];ee.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae]);const St=r.convert(Oe.format,Oe.colorSpace),ye=r.convert(Oe.type),ke=E(Oe.internalFormat,St,ye,Oe.colorSpace,U.isXRRenderTarget===!0),et=Ve(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ke,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),H(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),de(i.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)X(ee.__webglFramebuffer[Ae][Oe],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Oe);else X(ee.__webglFramebuffer[Ae],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ae=0,Oe=ce.length;Ae<Oe;Ae++){const St=ce[Ae],ye=n.get(St);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),de(i.TEXTURE_2D,St),X(ee.__webglFramebuffer,U,St,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),m(St)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),de(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)X(ee.__webglFramebuffer[Oe],U,w,i.COLOR_ATTACHMENT0,Ae,Oe);else X(ee.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,Ae,0);m(w)&&p(Ae),t.unbindTexture()}U.depthBuffer&&Se(U)}function We(U){const w=U.textures;for(let ee=0,pe=w.length;ee<pe;ee++){const ce=w[ee];if(m(ce)){const ue=v(U),He=n.get(ce).__webglTexture;t.bindTexture(ue,He),p(ue),t.unbindTexture()}}}const je=[],B=[];function $e(U){if(U.samples>0){if(ut(U)===!1){const w=U.textures,ee=U.width,pe=U.height;let ce=i.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(U),Ae=w.length>1;if(Ae)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[Oe]);const St=n.get(w[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,ce,i.NEAREST),l===!0&&(je.length=0,B.length=0,je.push(i.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(je.push(ue),B.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,He.__webglColorRenderbuffer[Oe]);const St=n.get(w[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,St,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ve(U){return Math.min(s.maxSamples,U.samples)}function ut(U){const w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(U){const w=o.render.frame;u.get(U)!==w&&(u.set(U,w),U.update())}function lt(U,w){const ee=U.colorSpace,pe=U.format,ce=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==Us&&ee!==vi&&(bt.getTransfer(ee)===It?(pe!==Pn||ce!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=F,this.setTexture3D=te,this.setTextureCube=k,this.rebindTextures=Me,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ut}function Iv(i,e){function t(n,s=vi){let r;const o=bt.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return i.BYTE;if(n===ef)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Vl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===nf)return i.ALPHA;if(n===sf)return i.RGB;if(n===Pn)return i.RGBA;if(n===rf)return i.LUMINANCE;if(n===of)return i.LUMINANCE_ALPHA;if(n===mr)return i.DEPTH_COMPONENT;if(n===gr)return i.DEPTH_STENCIL;if(n===af)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===lf)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===Ml||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===Sl||n===El||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
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

}`;class Fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:Nv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ov extends Yi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Fv,m=t.getContextAttributes();let p=null,v=null;const E=[],b=[],D=new ot;let T=null;const L=new on;L.viewport=new Ct;const I=new on;I.viewport=new Ct;const M=[L,I],S=new tm;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=E[K];return Q===void 0&&(Q=new ga,E[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=E[K];return Q===void 0&&(Q=new ga,E[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=E[K];return Q===void 0&&(Q=new ga,E[K]=Q),Q.getHandSpace()};function V(K){const Q=b.indexOf(K.inputSource);if(Q===-1)return;const X=E[Q];X!==void 0&&(X.update(K.inputSource,K.frame,c||o),X.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ne);for(let K=0;K<E.length;K++){const Q=b[K];Q!==null&&(b[K]=null,E[K].disconnect(Q))}N=null,z=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,v=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,H=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?gr:mr,H=m.stencil?pr:Wi);const Se={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Xi(f.textureWidth,f.textureHeight,{format:Pn,type:ai,depthTexture:new bf(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Xi(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(K){for(let Q=0;Q<K.removed.length;Q++){const X=K.removed[Q],H=b.indexOf(X);H>=0&&(b[H]=null,E[H].disconnect(X))}for(let Q=0;Q<K.added.length;Q++){const X=K.added[Q];let H=b.indexOf(X);if(H===-1){for(let Se=0;Se<E.length;Se++)if(Se>=b.length){b.push(X),H=Se;break}else if(b[Se]===null){b[Se]=X,H=Se;break}if(H===-1)break}const se=E[H];se&&se.connect(X)}}const F=new G,te=new G;function k(K,Q,X){F.setFromMatrixPosition(Q.matrixWorld),te.setFromMatrixPosition(X.matrixWorld);const H=F.distanceTo(te),se=Q.projectionMatrix.elements,Se=X.projectionMatrix.elements,Me=se[14]/(se[10]-1),ct=se[14]/(se[10]+1),We=(se[9]+1)/se[5],je=(se[9]-1)/se[5],B=(se[8]-1)/se[0],$e=(Se[8]+1)/Se[0],Ve=Me*B,ut=Me*$e,Fe=H/(-B+$e),lt=Fe*-B;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),se[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ee=Me+Fe,U=ct+Fe,w=Ve-lt,ee=ut+(H-lt),pe=We*ct/U*Ee,ce=je*ct/U*Ee;K.projectionMatrix.makePerspective(w,ee,pe,ce,Ee,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,X=K.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(X=_.depthFar)),S.near=I.near=L.near=Q,S.far=I.far=L.far=X,(N!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,z=S.far),L.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,S.layers.mask=L.layers.mask|I.layers.mask;const H=K.parent,se=S.cameras;J(S,H);for(let Se=0;Se<se.length;Se++)J(se[Se],H);se.length===2?k(S,L,I):S.projectionMatrix.copy(L.projectionMatrix),le(K,S,H)};function le(K,Q,X){X===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(X.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ae=null;function de(K,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const X=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let H=!1;X.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let Me=0;Me<X.length;Me++){const ct=X[Me];let We=null;if(d!==null)We=d.getViewport(ct);else{const B=h.getViewSubImage(f,ct);We=B.viewport,Me===0&&(e.setRenderTargetTextures(v,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(v))}let je=M[Me];je===void 0&&(je=new on,je.layers.enable(Me),je.viewport=new Ct,M[Me]=je),je.matrix.fromArray(ct.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ct.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(We.x,We.y,We.width,We.height),Me===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),H===!0&&S.cameras.push(je)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Me=h.getDepthInformation(X[0]);Me&&Me.isValid&&Me.texture&&_.init(e,Me,s.renderState)}}for(let X=0;X<E.length;X++){const H=b[X],se=E[X];H!==null&&se!==void 0&&se.update(H,Q,c||o)}ae&&ae(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ge=new Cf;ge.setAnimationLoop(de),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const Ui=new Mn,kv=new at;function Bv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,Ui.copy(b),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const b=E.program;n.uniformBlockBinding(v,b)}function c(v,E){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",m));const D=E.program;n.updateUBOMapping(v,D);const T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const E=h();v.__bindingPointIndex=E;const b=i.createBuffer(),D=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const E=s[v.id],b=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,L=b.length;T<L;T++){const I=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,S=I.length;M<S;M++){const N=I[M];if(d(N,T,M,D)===!0){const z=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let ne=0;ne<V.length;ne++){const F=V[ne],te=_(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,z+Y,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,Y),Y+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,E,b,D){const T=v.value,L=E+"_"+b;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:D[L]=T.clone(),!0;{const I=D[L];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return D[L]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(v){const E=v.uniforms;let b=0;const D=16;for(let L=0,I=E.length;L<I;L++){const M=Array.isArray(E[L])?E[L]:[E[L]];for(let S=0,N=M.length;S<N;S++){const z=M[S],V=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,ne=V.length;Y<ne;Y++){const F=V[Y],te=_(F),k=b%D,J=k%te.boundary,le=k+J;b+=J,le!==0&&D-le<te.storage&&(b+=D-le),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=te.storage}}}const T=b%D;return T>0&&(b+=D-T),v.__size=b,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Nf{constructor(e={}){const{canvas:t=tp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1;this._outputColorSpace=zt;let T=0,L=0,I=null,M=-1,S=null;const N=new Ct,z=new Ct;let V=null;const Y=new it(0);let ne=0,F=t.width,te=t.height,k=1,J=null,le=null;const ae=new Ct(0,0,F,te),de=new Ct(0,0,F,te);let ge=!1;const K=new $l;let Q=!1,X=!1;const H=new at,se=new at,Se=new G,Me=new Ct,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function je(){return I===null?k:1}let B=n;function $e(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),B===null){const j="webgl2";if(B=$e(j,R),B===null)throw $e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ve,ut,Fe,lt,Ee,U,w,ee,pe,ce,ue,He,Ae,Oe,St,ye,ke,et,st,Be,Mt,ft,Lt,q;function Re(){Ve=new J_(B),Ve.init(),ft=new Iv(B,Ve),ut=new W_(B,Ve,e,ft),Fe=new Lv(B,Ve),ut.reverseDepthBuffer&&f&&Fe.buffers.depth.setReversed(!0),lt=new e0(B),Ee=new vv,U=new Dv(B,Ve,Fe,Ee,ut,ft,lt),w=new j_(b),ee=new Z_(b),pe=new om(B),Lt=new H_(B,pe),ce=new $_(B,pe,lt,Lt),ue=new n0(B,ce,pe,lt),st=new t0(B,ut,U),ye=new X_(Ee),He=new _v(b,w,ee,Ve,ut,Lt,ye),Ae=new Bv(b,Ee),Oe=new yv,St=new wv(Ve),et=new V_(b,w,ee,Fe,ue,d,l),ke=new Cv(b,ue,ut),q=new zv(B,lt,ut,Fe),Be=new G_(B,Ve,lt),Mt=new Q_(B,Ve,lt),lt.programs=He.programs,b.capabilities=ut,b.extensions=Ve,b.properties=Ee,b.renderLists=Oe,b.shadowMap=ke,b.state=Fe,b.info=lt}Re();const he=new Ov(b,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(F,te,!1))},this.getSize=function(R){return R.set(F,te)},this.setSize=function(R,j,ie=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,te=j,t.width=Math.floor(R*k),t.height=Math.floor(j*k),ie===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(F*k,te*k).floor()},this.setDrawingBufferSize=function(R,j,ie){F=R,te=j,k=ie,t.width=Math.floor(R*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(ae)},this.setViewport=function(R,j,ie,re){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,j,ie,re),Fe.viewport(N.copy(ae).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,j,ie,re){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,j,ie,re),Fe.scissor(z.copy(de).multiplyScalar(k).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){Fe.setScissorTest(ge=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ie=!0){let re=0;if(R){let Z=!1;if(I!==null){const xe=I.texture.format;Z=xe===jl||xe===Xl||xe===Wl}if(Z){const xe=I.texture.type,Te=xe===ai||xe===Wi||xe===dr||xe===pr||xe===Hl||xe===Gl,Ne=et.getClearColor(),ze=et.getClearAlpha(),rt=Ne.r,tt=Ne.g,Ke=Ne.b;Te?(g[0]=rt,g[1]=tt,g[2]=Ke,g[3]=ze,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=rt,_[1]=tt,_[2]=Ke,_[3]=ze,B.clearBufferiv(B.COLOR,0,_))}else re|=B.COLOR_BUFFER_BIT}j&&(re|=B.DEPTH_BUFFER_BIT),ie&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),et.dispose(),Oe.dispose(),St.dispose(),Ee.dispose(),w.dispose(),ee.dispose(),ue.dispose(),Lt.dispose(),q.dispose(),He.dispose(),he.dispose(),he.removeEventListener("sessionstart",Er),he.removeEventListener("sessionend",Tr),Xn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const R=lt.autoReset,j=ke.enabled,ie=ke.autoUpdate,re=ke.needsUpdate,Z=ke.type;Re(),lt.autoReset=R,ke.enabled=j,ke.autoUpdate=ie,ke.needsUpdate=re,ke.type=Z}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const j=R.target;j.removeEventListener("dispose",ht),Bt(j)}function Bt(R){nn(R),Ee.remove(R)}function nn(R){const j=Ee.get(R).programs;j!==void 0&&(j.forEach(function(ie){He.releaseProgram(ie)}),R.isShaderMaterial&&He.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ie,re,Z,xe){j===null&&(j=ct);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Vo(R,j,ie,re,Z);Fe.setMaterial(re,Te);let ze=ie.index,rt=1;if(re.wireframe===!0){if(ze=ce.getWireframeAttribute(ie),ze===void 0)return;rt=2}const tt=ie.drawRange,Ke=ie.attributes.position;let gt=tt.start*rt,Tt=(tt.start+tt.count)*rt;xe!==null&&(gt=Math.max(gt,xe.start*rt),Tt=Math.min(Tt,(xe.start+xe.count)*rt)),ze!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,ze.count)):Ke!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,Ke.count));const Gt=Tt-gt;if(Gt<0||Gt===1/0)return;Lt.setup(Z,re,Ne,ie,ze);let Vt,Et=Be;if(ze!==null&&(Vt=pe.get(ze),Et=Mt,Et.setIndex(Vt)),Z.isMesh)re.wireframe===!0?(Fe.setLineWidth(re.wireframeLinewidth*je()),Et.setMode(B.LINES)):Et.setMode(B.TRIANGLES);else if(Z.isLine){let Je=re.linewidth;Je===void 0&&(Je=1),Fe.setLineWidth(Je*je()),Z.isLineSegments?Et.setMode(B.LINES):Z.isLineLoop?Et.setMode(B.LINE_LOOP):Et.setMode(B.LINE_STRIP)}else Z.isPoints?Et.setMode(B.POINTS):Z.isSprite&&Et.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Et.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Je=Z._multiDrawStarts,Zt=Z._multiDrawCounts,wt=Z._multiDrawCount,gn=ze?pe.get(ze).bytesPerElement:1,kt=Ee.get(re).currentProgram.getUniforms();for(let rn=0;rn<wt;rn++)kt.setValue(B,"_gl_DrawID",rn),Et.render(Je[rn]/gn,Zt[rn])}else if(Z.isInstancedMesh)Et.renderInstances(gt,Gt,Z.count);else if(ie.isInstancedBufferGeometry){const Je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Zt=Math.min(ie.instanceCount,Je);Et.renderInstances(gt,Gt,Zt)}else Et.render(gt,Gt)};function pt(R,j,ie){R.transparent===!0&&R.side===On&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,Ji(R,j,ie),R.side=oi,R.needsUpdate=!0,Ji(R,j,ie),R.side=On):Ji(R,j,ie)}this.compile=function(R,j,ie=null){ie===null&&(ie=R),p=St.get(ie),p.init(j),E.push(p),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),R!==ie&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const xe=Z.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Ne=xe[Te];pt(Ne,ie,Z),re.add(Ne)}else pt(xe,ie,Z),re.add(xe)}),p=E.pop(),re},this.compileAsync=function(R,j,ie=null){const re=this.compile(R,j,ie);return new Promise(Z=>{function xe(){if(re.forEach(function(Te){Ee.get(Te).currentProgram.isReady()&&re.delete(Te)}),re.size===0){Z(R);return}setTimeout(xe,10)}Ve.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let mn=null;function Dn(R){mn&&mn(R)}function Er(){Xn.stop()}function Tr(){Xn.start()}const Xn=new Cf;Xn.setAnimationLoop(Dn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(R){mn=R,he.setAnimationLoop(R),R===null?Xn.stop():Xn.start()},he.addEventListener("sessionstart",Er),he.addEventListener("sessionend",Tr),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(j),j=he.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,j,I),p=St.get(R,E.length),p.init(j),E.push(p),se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(se),X=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,X),m=Oe.get(R,v.length),m.init(),v.push(m),he.enabled===!0&&he.isPresenting===!0){const xe=b.xr.getDepthSensingMesh();xe!==null&&qs(xe,j,-1/0,b.sortObjects)}qs(R,j,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(J,le),We=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,We&&et.addToRenderList(m,R),this.info.render.frame++,Q===!0&&ye.beginShadows();const ie=p.state.shadowsArray;ke.render(ie,R,j),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,Z=m.transmissive;if(p.setupLights(),j.isArrayCamera){const xe=j.cameras;if(Z.length>0)for(let Te=0,Ne=xe.length;Te<Ne;Te++){const ze=xe[Te];Ys(re,Z,R,ze)}We&&et.render(R);for(let Te=0,Ne=xe.length;Te<Ne;Te++){const ze=xe[Te];wr(m,R,ze,ze.viewport)}}else Z.length>0&&Ys(re,Z,R,j),We&&et.render(R),wr(m,R,j);I!==null&&L===0&&(U.updateMultisampleRenderTarget(I),U.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(b,R,j),Lt.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],Q===!0&&ye.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function qs(R,j,ie,re){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){re&&Me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const Te=ue.update(R),Ne=R.material;Ne.visible&&m.push(R,Te,Ne,ie,Me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Te=ue.update(R),Ne=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Me.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Me.copy(Te.boundingSphere.center)),Me.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Ne)){const ze=Te.groups;for(let rt=0,tt=ze.length;rt<tt;rt++){const Ke=ze[rt],gt=Ne[Ke.materialIndex];gt&&gt.visible&&m.push(R,Te,gt,ie,Me.z,Ke)}}else Ne.visible&&m.push(R,Te,Ne,ie,Me.z,null)}}const xe=R.children;for(let Te=0,Ne=xe.length;Te<Ne;Te++)qs(xe[Te],j,ie,re)}function wr(R,j,ie,re){const Z=R.opaque,xe=R.transmissive,Te=R.transparent;p.setupLightsView(ie),Q===!0&&ye.setGlobalState(b.clippingPlanes,ie),re&&Fe.viewport(N.copy(re)),Z.length>0&&Zi(Z,j,ie),xe.length>0&&Zi(xe,j,ie),Te.length>0&&Zi(Te,j,ie),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ys(R,j,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new Xi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?yr:ai,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const xe=p.state.transmissionRenderTarget[re.id],Te=re.viewport||N;xe.setSize(Te.z*b.transmissionResolutionScale,Te.w*b.transmissionResolutionScale);const Ne=b.getRenderTarget();b.setRenderTarget(xe),b.getClearColor(Y),ne=b.getClearAlpha(),ne<1&&b.setClearColor(16777215,.5),b.clear(),We&&et.render(ie);const ze=b.toneMapping;b.toneMapping=bi;const rt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),Q===!0&&ye.setGlobalState(b.clippingPlanes,re),Zi(R,ie,re),U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ke=0,gt=j.length;Ke<gt;Ke++){const Tt=j[Ke],Gt=Tt.object,Vt=Tt.geometry,Et=Tt.material,Je=Tt.group;if(Et.side===On&&Gt.layers.test(re.layers)){const Zt=Et.side;Et.side=xn,Et.needsUpdate=!0,Ks(Gt,ie,re,Vt,Et,Je),Et.side=Zt,Et.needsUpdate=!0,tt=!0}}tt===!0&&(U.updateMultisampleRenderTarget(xe),U.updateRenderTargetMipmap(xe))}b.setRenderTarget(Ne),b.setClearColor(Y,ne),rt!==void 0&&(re.viewport=rt),b.toneMapping=ze}function Zi(R,j,ie){const re=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,xe=R.length;Z<xe;Z++){const Te=R[Z],Ne=Te.object,ze=Te.geometry,rt=Te.group;let tt=Te.material;tt.allowOverride===!0&&re!==null&&(tt=re),Ne.layers.test(ie.layers)&&Ks(Ne,j,ie,ze,tt,rt)}}function Ks(R,j,ie,re,Z,xe){R.onBeforeRender(b,j,ie,re,Z,xe),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(b,j,ie,re,R,xe),Z.transparent===!0&&Z.side===On&&Z.forceSinglePass===!1?(Z.side=xn,Z.needsUpdate=!0,b.renderBufferDirect(ie,j,re,Z,R,xe),Z.side=oi,Z.needsUpdate=!0,b.renderBufferDirect(ie,j,re,Z,R,xe),Z.side=On):b.renderBufferDirect(ie,j,re,Z,R,xe),R.onAfterRender(b,j,ie,re,Z,xe)}function Ji(R,j,ie){j.isScene!==!0&&(j=ct);const re=Ee.get(R),Z=p.state.lights,xe=p.state.shadowsArray,Te=Z.state.version,Ne=He.getParameters(R,Z.state,xe,j,ie),ze=He.getProgramCacheKey(Ne);let rt=re.programs;re.environment=R.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(R.isMeshStandardMaterial?ee:w).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",ht),rt=new Map,re.programs=rt);let tt=rt.get(ze);if(tt!==void 0){if(re.currentProgram===tt&&re.lightsStateVersion===Te)return Rr(R,Ne),tt}else Ne.uniforms=He.getUniforms(R),R.onBeforeCompile(Ne,b),tt=He.acquireProgram(Ne,ze),rt.set(ze,tt),re.uniforms=Ne.uniforms;const Ke=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=ye.uniform),Rr(R,Ne),re.needsLights=Go(R),re.lightsStateVersion=Te,re.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.directionalShadowMap.value=Z.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotShadowMap.value=Z.state.spotShadowMap,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMap.value=Z.state.pointShadowMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=tt,re.uniformsList=null,tt}function Ar(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=yo.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Rr(R,j){const ie=Ee.get(R);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Vo(R,j,ie,re,Z){j.isScene!==!0&&(j=ct),U.resetTextureUnits();const xe=j.fog,Te=re.isMeshStandardMaterial?j.environment:null,Ne=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Us,ze=(re.isMeshStandardMaterial?ee:w).get(re.envMap||Te),rt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,Tt=!!ie.morphAttributes.color;let Gt=bi;re.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Gt=b.toneMapping);const Vt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Et=Vt!==void 0?Vt.length:0,Je=Ee.get(re),Zt=p.state.lights;if(Q===!0&&(X===!0||R!==S)){const Yt=R===S&&re.id===M;ye.setState(re,R,Yt)}let wt=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Zt.state.version||Je.outputColorSpace!==Ne||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==ze||re.fog===!0&&Je.fog!==xe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ye.numPlanes||Je.numIntersection!==ye.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==tt||Je.morphTargets!==Ke||Je.morphNormals!==gt||Je.morphColors!==Tt||Je.toneMapping!==Gt||Je.morphTargetsCount!==Et)&&(wt=!0):(wt=!0,Je.__version=re.version);let gn=Je.currentProgram;wt===!0&&(gn=Ji(re,j,Z));let kt=!1,rn=!1,Ci=!1;const Ft=gn.getUniforms(),hn=Je.uniforms;if(Fe.useProgram(gn.program)&&(kt=!0,rn=!0,Ci=!0),re.id!==M&&(M=re.id,rn=!0),kt||S!==R){Fe.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),ip(H),sp(H),Ft.setValue(B,"projectionMatrix",H)):Ft.setValue(B,"projectionMatrix",R.projectionMatrix),Ft.setValue(B,"viewMatrix",R.matrixWorldInverse);const Jt=Ft.map.cameraPosition;Jt!==void 0&&Jt.setValue(B,Se.setFromMatrixPosition(R.matrixWorld)),ut.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,rn=!0,Ci=!0)}if(Z.isSkinnedMesh){Ft.setOptional(B,Z,"bindMatrix"),Ft.setOptional(B,Z,"bindMatrixInverse");const Yt=Z.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ft.setValue(B,"boneTexture",Yt.boneTexture,U))}Z.isBatchedMesh&&(Ft.setOptional(B,Z,"batchingTexture"),Ft.setValue(B,"batchingTexture",Z._matricesTexture,U),Ft.setOptional(B,Z,"batchingIdTexture"),Ft.setValue(B,"batchingIdTexture",Z._indirectTexture,U),Ft.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ft.setValue(B,"batchingColorTexture",Z._colorsTexture,U));const an=ie.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&st.update(Z,ie,gn),(rn||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,Ft.setValue(B,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(hn.envMap.value=ze,hn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(hn.envMapIntensity.value=j.environmentIntensity),rn&&(Ft.setValue(B,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&Ho(hn,Ci),xe&&re.fog===!0&&Ae.refreshFogUniforms(hn,xe),Ae.refreshMaterialUniforms(hn,re,k,te,p.state.transmissionRenderTarget[R.id]),yo.upload(B,Ar(Je),hn,U)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(yo.upload(B,Ar(Je),hn,U),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(B,"center",Z.center),Ft.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(B,"normalMatrix",Z.normalMatrix),Ft.setValue(B,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Yt=re.uniformsGroups;for(let Jt=0,$i=Yt.length;Jt<$i;Jt++){const jn=Yt[Jt];q.update(jn,gn),q.bind(jn,gn)}}return gn}function Ho(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Go(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,j,ie){const re=Ee.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ee.get(R.texture).__webglTexture=j,Ee.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ie=Ee.get(R);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const Wo=B.createFramebuffer();this.setRenderTarget=function(R,j=0,ie=0){I=R,T=j,L=ie;let re=!0,Z=null,xe=!1,Te=!1;if(R){const ze=Ee.get(R);if(ze.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(B.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(ze.__hasExternalTextures)U.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(ze.__boundDepthTexture!==Ke){if(Ke!==null&&Ee.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Te=!0);const tt=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?Z=tt[j][ie]:Z=tt[j],xe=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Z=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?Z=tt[ie]:Z=tt,N.copy(R.viewport),z.copy(R.scissor),V=R.scissorTest}else N.copy(ae).multiplyScalar(k).floor(),z.copy(de).multiplyScalar(k).floor(),V=ge;if(ie!==0&&(Z=Wo),Fe.bindFramebuffer(B.FRAMEBUFFER,Z)&&re&&Fe.drawBuffers(R,Z),Fe.viewport(N),Fe.scissor(z),Fe.setScissorTest(V),xe){const ze=Ee.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ie)}else if(Te){const ze=Ee.get(R.texture),rt=j;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,ie,rt)}else if(R!==null&&ie!==0){const ze=Ee.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,ie)}M=-1},this.readRenderTargetPixels=function(R,j,ie,re,Z,xe,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){Fe.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const ze=R.texture,rt=ze.format,tt=ze.type;if(!ut.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-re&&ie>=0&&ie<=R.height-Z&&B.readPixels(j,ie,re,Z,ft.convert(rt),ft.convert(tt),xe)}finally{const ze=I!==null?Ee.get(I).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,j,ie,re,Z,xe,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne)if(j>=0&&j<=R.width-re&&ie>=0&&ie<=R.height-Z){Fe.bindFramebuffer(B.FRAMEBUFFER,Ne);const ze=R.texture,rt=ze.format,tt=ze.type;if(!ut.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ke),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(j,ie,re,Z,ft.convert(rt),ft.convert(tt),0);const gt=I!==null?Ee.get(I).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,gt);const Tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await np(B,Tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ke),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.deleteBuffer(Ke),B.deleteSync(Tt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ie=0){const re=Math.pow(2,-ie),Z=Math.floor(R.image.width*re),xe=Math.floor(R.image.height*re),Te=j!==null?j.x:0,Ne=j!==null?j.y:0;U.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Te,Ne,Z,xe),Fe.unbindTexture()};const Xo=B.createFramebuffer(),jo=B.createFramebuffer();this.copyTextureToTexture=function(R,j,ie=null,re=null,Z=0,xe=null){xe===null&&(Z!==0?(xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Z,Z=0):xe=0);let Te,Ne,ze,rt,tt,Ke,gt,Tt,Gt;const Vt=R.isCompressedTexture?R.mipmaps[xe]:R.image;if(ie!==null)Te=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,ze=ie.isBox3?ie.max.z-ie.min.z:1,rt=ie.min.x,tt=ie.min.y,Ke=ie.isBox3?ie.min.z:0;else{const an=Math.pow(2,-Z);Te=Math.floor(Vt.width*an),Ne=Math.floor(Vt.height*an),R.isDataArrayTexture?ze=Vt.depth:R.isData3DTexture?ze=Math.floor(Vt.depth*an):ze=1,rt=0,tt=0,Ke=0}re!==null?(gt=re.x,Tt=re.y,Gt=re.z):(gt=0,Tt=0,Gt=0);const Et=ft.convert(j.format),Je=ft.convert(j.type);let Zt;j.isData3DTexture?(U.setTexture3D(j,0),Zt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(U.setTexture2DArray(j,0),Zt=B.TEXTURE_2D_ARRAY):(U.setTexture2D(j,0),Zt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const wt=B.getParameter(B.UNPACK_ROW_LENGTH),gn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),kt=B.getParameter(B.UNPACK_SKIP_PIXELS),rn=B.getParameter(B.UNPACK_SKIP_ROWS),Ci=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ke);const Ft=R.isDataArrayTexture||R.isData3DTexture,hn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const an=Ee.get(R),Yt=Ee.get(j),Jt=Ee.get(an.__renderTarget),$i=Ee.get(Yt.__renderTarget);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let jn=0;jn<ze;jn++)Ft&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(R).__webglTexture,Z,Ke+jn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(j).__webglTexture,xe,Gt+jn)),B.blitFramebuffer(rt,tt,Te,Ne,gt,Tt,Te,Ne,B.DEPTH_BUFFER_BIT,B.NEAREST);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ee.has(R)){const an=Ee.get(R),Yt=Ee.get(j);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,Xo),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,jo);for(let Jt=0;Jt<ze;Jt++)Ft?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,Z,Ke+Jt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,Z),hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,xe,Gt+Jt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Yt.__webglTexture,xe),Z!==0?B.blitFramebuffer(rt,tt,Te,Ne,gt,Tt,Te,Ne,B.COLOR_BUFFER_BIT,B.NEAREST):hn?B.copyTexSubImage3D(Zt,xe,gt,Tt,Gt+Jt,rt,tt,Te,Ne):B.copyTexSubImage2D(Zt,xe,gt,Tt,rt,tt,Te,Ne);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else hn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Zt,xe,gt,Tt,Gt,Te,Ne,ze,Et,Je,Vt.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Zt,xe,gt,Tt,Gt,Te,Ne,ze,Et,Vt.data):B.texSubImage3D(Zt,xe,gt,Tt,Gt,Te,Ne,ze,Et,Je,Vt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,gt,Tt,Te,Ne,Et,Je,Vt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,gt,Tt,Vt.width,Vt.height,Et,Vt.data):B.texSubImage2D(B.TEXTURE_2D,xe,gt,Tt,Te,Ne,Et,Je,Vt);B.pixelStorei(B.UNPACK_ROW_LENGTH,wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ci),xe===0&&j.generateMipmaps&&B.generateMipmap(Zt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ie=null,re=null,Z=0){return xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ie,re,Z)},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Fe.unbindTexture()},this.resetState=function(){T=0,L=0,I=null,Fe.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const Lu={type:"change"},ic={type:"start"},Uf={type:"end"},ro=new Hs,Du=new _i,Vv=Math.cos(70*ys.DEG2RAD),$t=new G,vn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Da=1e-6;class Ff extends sm{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new zn,this._lastTargetPosition=new G,this._quat=new zn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new su,this._sphericalDelta=new su,this._scale=1,this._panOffset=new G,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new G,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gv.bind(this),this._onPointerDown=Hv.bind(this),this._onPointerUp=Wv.bind(this),this._onContextMenu=Jv.bind(this),this._onMouseWheel=qv.bind(this),this._onKeyDown=Yv.bind(this),this._onTouchStart=Kv.bind(this),this._onTouchMove=Zv.bind(this),this._onMouseDown=Xv.bind(this),this._onMouseMove=jv.bind(this),this._interceptControlDown=$v.bind(this),this._interceptControlUp=Qv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lu),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$t.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ro.origin.copy(this.object.position),ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ro.direction))<Vv?this.object.lookAt(this.target):(Du.setFromNormalAndCoplanarPoint(this.object.up,this.target),ro.intersectPlane(Du,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Da||this._lastTargetPosition.distanceToSquared(this.target)>Da?(this.dispatchEvent(Lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Hv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Gv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Wv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uf),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Nt.DOLLY;break;case ws.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Nt.ROTATE}break;case ws.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(ic)}function jv(i){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(i.preventDefault(),this.dispatchEvent(ic),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uf))}function Yv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Nt.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Nt.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(ic)}function Zv(i){switch(this._trackPointer(i),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Nt.NONE}}function Jv(i){this.enabled!==!1&&i.preventDefault()}function $v(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ex=/^[og]\s*(.+)?/,tx=/^mtllib /,nx=/^usemtl /,ix=/^usemap /,Iu=/\s+/,Nu=new G,Ia=new G,Uu=new G,Fu=new G,Cn=new G,oo=new it;function sx(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Nu.fromArray(s,e),Ia.fromArray(s,t),Uu.fromArray(s,n),Cn.subVectors(Uu,Ia),Fu.subVectors(Nu,Ia),Cn.cross(Fu),Cn.normalize(),r.push(Cn.x,Cn.y,Cn.z),r.push(Cn.x,Cn.y,Cn.z),r.push(Cn.x,Cn.y,Cn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(s!==void 0&&s!==""){const g=this.uvs.length;h=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class rx extends li{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,o=new Fo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new sx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Iu);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(oo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),zt),t.colors.push(oo.r,oo.g,oo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(Iu),d=[];for(let _=0,m=f.length;_<m;_++){const p=f[_];if(p.length>0){const v=p.split("/");d.push(v)}}const g=d[0];for(let _=1,m=d.length-1;_<m;_++){const p=d[_],v=d[_+1];t.addFace(g[0],p[0],v[0],g[1],p[1],v[1],g[2],p[2],v[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const d=[];if(c.indexOf("/")===-1)f=h;else for(let g=0,_=h.length;g<_;g++){const m=h[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(f,d)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=ex.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(nx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(tx.test(c))t.materialLibraries.push(c.substring(7).trim());else if(ix.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new ii;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new qt;_.setAttribute("position",new yt(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new yt(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new yt(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new yt(u.uvs,2));const m=[];for(let v=0,E=h.length;v<E;v++){const b=h[v],D=b.name+"_"+b.smooth+"_"+g;let T=t.materials[D];if(this.materials!==null){if(T=this.materials.create(b.name),f&&T&&!(T instanceof ri)){const L=new ri;Vn.prototype.copy.call(L,T),L.color.copy(T.color),T=L}else if(d&&T&&!(T instanceof Vi)){const L=new Vi({size:10,sizeAttenuation:!1});Vn.prototype.copy.call(L,T),L.color.copy(T.color),L.map=T.map,T=L}}T===void 0&&(f?T=new ri:d?T=new Vi({size:1,sizeAttenuation:!1}):T=new Cs,T.name=b.name,T.flatShading=!b.smooth,T.vertexColors=g,t.materials[D]=T),m.push(T)}let p;if(m.length>1){for(let v=0,E=h.length;v<E;v++){const b=h[v];_.addGroup(b.groupStart,b.groupCount,v)}f?p=new vr(_,m):d?p=new cr(_,m):p=new jt(_,m)}else f?p=new vr(_,m[0]):d?p=new cr(_,m[0]):p=new jt(_,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){const a=new Vi({size:1,sizeAttenuation:!1}),l=new qt;l.setAttribute("position",new yt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new yt(t.colors,3)),a.vertexColors=!0);const c=new cr(l,a);r.add(c)}return r}}class ox extends li{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Fo(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,u,_))return!1;return!0}function n(c,u,h){for(let f=0,d=c.length;f<d;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,d,g,_=!1,m,p,v,E,b;for(let N=0;N<70;N++)u.getUint32(N,!1)==1129270351&&u.getUint8(N+4)==82&&u.getUint8(N+5)==61&&(_=!0,m=new Float32Array(h*3*3),p=u.getUint8(N+6)/255,v=u.getUint8(N+7)/255,E=u.getUint8(N+8)/255,b=u.getUint8(N+9)/255);const D=84,T=12*4+2,L=new qt,I=new Float32Array(h*3*3),M=new Float32Array(h*3*3),S=new it;for(let N=0;N<h;N++){const z=D+N*T,V=u.getFloat32(z,!0),Y=u.getFloat32(z+4,!0),ne=u.getFloat32(z+8,!0);if(_){const F=u.getUint16(z+48,!0);F&32768?(f=p,d=v,g=E):(f=(F&31)/31,d=(F>>5&31)/31,g=(F>>10&31)/31)}for(let F=1;F<=3;F++){const te=z+F*12,k=N*3*3+(F-1)*3;I[k]=u.getFloat32(te,!0),I[k+1]=u.getFloat32(te+4,!0),I[k+2]=u.getFloat32(te+8,!0),M[k]=V,M[k+1]=Y,M[k+2]=ne,_&&(S.setRGB(f,d,g,zt),m[k]=S.r,m[k+1]=S.g,m[k+2]=S.b)}}return L.setAttribute("position",new pn(I,3)),L.setAttribute("normal",new pn(M,3)),_&&(L.setAttribute("color",new pn(m,3)),L.hasColors=!0,L.alpha=b),L}function r(c){const u=new qt,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),p=new RegExp("normal"+_+_+_,"g"),v=[],E=[],b=[],D=new G;let T,L=0,I=0,M=0;for(;(T=h.exec(c))!==null;){I=M;const S=T[0],N=(T=d.exec(S))!==null?T[1]:"";for(b.push(N);(T=f.exec(S))!==null;){let Y=0,ne=0;const F=T[0];for(;(T=p.exec(F))!==null;)D.x=parseFloat(T[1]),D.y=parseFloat(T[2]),D.z=parseFloat(T[3]),ne++;for(;(T=m.exec(F))!==null;)v.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),E.push(D.x,D.y,D.z),Y++,M++;ne!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),Y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const z=I,V=M-I;u.userData.groupNames=b,u.addGroup(z,V,L),L++}return u.setAttribute("position",new yt(v,3)),u.setAttribute("normal",new yt(E,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}class Ou extends qp{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case f:case _:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case g:case m:case p:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function n(F,te,k,J,le){let ae,de;const ge=k.pixel_size>>3,K=k.width*k.height*ge;if(te&&(de=le.subarray(J,J+=k.colormap_length*(k.colormap_size>>3))),F){ae=new Uint8Array(K);let Q,X,H,se=0;const Se=new Uint8Array(ge);for(;se<K;)if(Q=le[J++],X=(Q&127)+1,Q&128){for(H=0;H<ge;++H)Se[H]=le[J++];for(H=0;H<X;++H)ae.set(Se,se+H*ge);se+=ge*X}else{for(X*=ge,H=0;H<X;++H)ae[se+H]=le[J++];se+=X}}else ae=le.subarray(J,J+=te?k.width*k.height:K);return{pixel_data:ae,palettes:de}}function s(F,te,k,J,le,ae,de,ge,K){const Q=K;let X,H=0,se,Se;const Me=S.width;for(Se=te;Se!==J;Se+=k)for(se=le;se!==de;se+=ae,H++)X=ge[H],F[(se+Me*Se)*4+3]=255,F[(se+Me*Se)*4+2]=Q[X*3+0],F[(se+Me*Se)*4+1]=Q[X*3+1],F[(se+Me*Se)*4+0]=Q[X*3+2];return F}function r(F,te,k,J,le,ae,de,ge){let K,Q=0,X,H;const se=S.width;for(H=te;H!==J;H+=k)for(X=le;X!==de;X+=ae,Q+=2)K=ge[Q+0]+(ge[Q+1]<<8),F[(X+se*H)*4+0]=(K&31744)>>7,F[(X+se*H)*4+1]=(K&992)>>2,F[(X+se*H)*4+2]=(K&31)<<3,F[(X+se*H)*4+3]=K&32768?0:255;return F}function o(F,te,k,J,le,ae,de,ge){let K=0,Q,X;const H=S.width;for(X=te;X!==J;X+=k)for(Q=le;Q!==de;Q+=ae,K+=3)F[(Q+H*X)*4+3]=255,F[(Q+H*X)*4+2]=ge[K+0],F[(Q+H*X)*4+1]=ge[K+1],F[(Q+H*X)*4+0]=ge[K+2];return F}function a(F,te,k,J,le,ae,de,ge){let K=0,Q,X;const H=S.width;for(X=te;X!==J;X+=k)for(Q=le;Q!==de;Q+=ae,K+=4)F[(Q+H*X)*4+2]=ge[K+0],F[(Q+H*X)*4+1]=ge[K+1],F[(Q+H*X)*4+0]=ge[K+2],F[(Q+H*X)*4+3]=ge[K+3];return F}function l(F,te,k,J,le,ae,de,ge){let K,Q=0,X,H;const se=S.width;for(H=te;H!==J;H+=k)for(X=le;X!==de;X+=ae,Q++)K=ge[Q],F[(X+se*H)*4+0]=K,F[(X+se*H)*4+1]=K,F[(X+se*H)*4+2]=K,F[(X+se*H)*4+3]=255;return F}function c(F,te,k,J,le,ae,de,ge){let K=0,Q,X;const H=S.width;for(X=te;X!==J;X+=k)for(Q=le;Q!==de;Q+=ae,K+=2)F[(Q+H*X)*4+0]=ge[K+0],F[(Q+H*X)*4+1]=ge[K+0],F[(Q+H*X)*4+2]=ge[K+0],F[(Q+H*X)*4+3]=ge[K+1];return F}function u(F,te,k,J,le){let ae,de,ge,K,Q,X;switch((S.flags&v)>>E){default:case T:ae=0,ge=1,Q=te,de=0,K=1,X=k;break;case b:ae=0,ge=1,Q=te,de=k-1,K=-1,X=-1;break;case L:ae=te-1,ge=-1,Q=-1,de=0,K=1,X=k;break;case D:ae=te-1,ge=-1,Q=-1,de=k-1,K=-1,X=-1;break}if(V)switch(S.pixel_size){case 8:l(F,de,K,X,ae,ge,Q,J);break;case 16:c(F,de,K,X,ae,ge,Q,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(F,de,K,X,ae,ge,Q,J,le);break;case 16:r(F,de,K,X,ae,ge,Q,J);break;case 24:o(F,de,K,X,ae,ge,Q,J);break;case 32:a(F,de,K,X,ae,ge,Q,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}const h=0,f=1,d=2,g=3,_=9,m=10,p=11,v=48,E=4,b=0,D=1,T=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let I=0;const M=new Uint8Array(e),S={id_length:M[I++],colormap_type:M[I++],image_type:M[I++],colormap_index:M[I++]|M[I++]<<8,colormap_length:M[I++]|M[I++]<<8,colormap_size:M[I++],origin:[M[I++]|M[I++]<<8,M[I++]|M[I++]<<8],width:M[I++]|M[I++]<<8,height:M[I++]|M[I++]<<8,pixel_size:M[I++],flags:M[I++]};if(t(S),S.id_length+I>e.length)throw new Error("THREE.TGALoader: No data.");I+=S.id_length;let N=!1,z=!1,V=!1;switch(S.image_type){case _:N=!0,z=!0;break;case f:z=!0;break;case m:N=!0;break;case d:break;case p:N=!0,V=!0;break;case g:V=!0;break}const Y=new Uint8Array(S.width*S.height*4),ne=n(N,z,S,I,M);return u(Y,S.width,S.height,ne.pixel_data,ne.palettes),{data:Y,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:ti}}}class ax extends li{load(e,t,n,s){const r=this,o=r.path===""?Rf.extractUrlBase(e):r.path,a=new Fo(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){function n(y,x){const C=[],A=y.childNodes;for(let P=0,oe=A.length;P<oe;P++){const fe=A[P];fe.nodeName===x&&C.push(fe)}return C}function s(y){if(y.length===0)return[];const x=y.trim().split(/\s+/),C=new Array(x.length);for(let A=0,P=x.length;A<P;A++)C[A]=x[A];return C}function r(y){if(y.length===0)return[];const x=y.trim().split(/\s+/),C=new Array(x.length);for(let A=0,P=x.length;A<P;A++)C[A]=parseFloat(x[A]);return C}function o(y){if(y.length===0)return[];const x=y.trim().split(/\s+/),C=new Array(x.length);for(let A=0,P=x.length;A<P;A++)C[A]=parseInt(x[A]);return C}function a(y){return y.substring(1)}function l(){return"three_default_"+jn++}function c(y){return Object.keys(y).length===0}function u(y){return{unit:h(n(y,"unit")[0]),upAxis:f(n(y,"up_axis")[0])}}function h(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function f(y){return y!==void 0?y.textContent:"Y_UP"}function d(y,x,C,A){const P=n(y,x)[0];if(P!==void 0){const oe=n(P,C);for(let fe=0;fe<oe.length;fe++)A(oe[fe])}}function g(y,x){for(const C in y){const A=y[C];A.build=x(y[C])}}function _(y,x){return y.build!==void 0||(y.build=x(y)),y.build}function m(y){const x={sources:{},samplers:{},channels:{}};let C=!1;for(let A=0,P=y.childNodes.length;A<P;A++){const oe=y.childNodes[A];if(oe.nodeType!==1)continue;let fe;switch(oe.nodeName){case"source":fe=oe.getAttribute("id"),x.sources[fe]=he(oe);break;case"sampler":fe=oe.getAttribute("id"),x.samplers[fe]=p(oe);break;case"channel":fe=oe.getAttribute("target"),x.channels[fe]=v(oe);break;case"animation":m(oe),C=!0;break;default:console.log(oe)}}C===!1&&(nt.animations[y.getAttribute("id")||ys.generateUUID()]=x)}function p(y){const x={inputs:{}};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const oe=a(P.getAttribute("source")),fe=P.getAttribute("semantic");x.inputs[fe]=oe;break}}return x}function v(y){const x={};let A=y.getAttribute("target").split("/");const P=A.shift();let oe=A.shift();const fe=oe.indexOf("(")!==-1,Ue=oe.indexOf(".")!==-1;if(Ue)A=oe.split("."),oe=A.shift(),x.member=A.shift();else if(fe){const be=oe.split("(");oe=be.shift();for(let Pe=0;Pe<be.length;Pe++)be[Pe]=parseInt(be[Pe].replace(/\)/,""));x.indices=be}return x.id=P,x.sid=oe,x.arraySyntax=fe,x.memberSyntax=Ue,x.sampler=a(y.getAttribute("source")),x}function E(y){const x=[],C=y.channels,A=y.samplers,P=y.sources;for(const oe in C)if(C.hasOwnProperty(oe)){const fe=C[oe],Ue=A[fe.sampler],be=Ue.inputs.INPUT,Pe=Ue.inputs.OUTPUT,Ye=P[be],_e=P[Pe],qe=D(fe,Ye,_e);S(qe,x)}return x}function b(y){return _(nt.animations[y],E)}function D(y,x,C){const A=nt.nodes[y.id],P=gt(A.id),oe=A.transforms[y.sid],fe=A.matrix.clone().transpose();let Ue,be,Pe,Ye,_e,qe;const Ge={};switch(oe){case"matrix":for(Pe=0,Ye=x.array.length;Pe<Ye;Pe++)if(Ue=x.array[Pe],be=Pe*C.stride,Ge[Ue]===void 0&&(Ge[Ue]={}),y.arraySyntax===!0){const Wt=C.array[be],Dt=y.indices[0]+4*y.indices[1];Ge[Ue][Dt]=Wt}else for(_e=0,qe=C.stride;_e<qe;_e++)Ge[Ue][_e]=C.array[be+_e];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',oe);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',oe);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',oe);break}const Qe=T(Ge,fe);return{name:P.uuid,keyframes:Qe}}function T(y,x){const C=[];for(const P in y)C.push({time:parseFloat(P),value:y[P]});C.sort(A);for(let P=0;P<16;P++)N(C,P,x.elements[P]);return C;function A(P,oe){return P.time-oe.time}}const L=new G,I=new G,M=new zn;function S(y,x){const C=y.keyframes,A=y.name,P=[],oe=[],fe=[],Ue=[];for(let be=0,Pe=C.length;be<Pe;be++){const Ye=C[be],_e=Ye.time,qe=Ye.value;j.fromArray(qe).transpose(),j.decompose(L,M,I),P.push(_e),oe.push(L.x,L.y,L.z),fe.push(M.x,M.y,M.z,M.w),Ue.push(I.x,I.y,I.z)}return oe.length>0&&x.push(new zs(A+".position",P,oe)),fe.length>0&&x.push(new Mr(A+".quaternion",P,fe)),Ue.length>0&&x.push(new zs(A+".scale",P,Ue)),x}function N(y,x,C){let A,P=!0,oe,fe;for(oe=0,fe=y.length;oe<fe;oe++)A=y[oe],A.value[x]===void 0?A.value[x]=null:P=!1;if(P===!0)for(oe=0,fe=y.length;oe<fe;oe++)A=y[oe],A.value[x]=C;else z(y,x)}function z(y,x){let C,A;for(let P=0,oe=y.length;P<oe;P++){const fe=y[P];if(fe.value[x]===null){if(C=V(y,P,x),A=Y(y,P,x),C===null){fe.value[x]=A.value[x];continue}if(A===null){fe.value[x]=C.value[x];continue}ne(fe,C,A,x)}}}function V(y,x,C){for(;x>=0;){const A=y[x];if(A.value[C]!==null)return A;x--}return null}function Y(y,x,C){for(;x<y.length;){const A=y[x];if(A.value[C]!==null)return A;x++}return null}function ne(y,x,C,A){if(C.time-x.time===0){y.value[A]=x.value[A];return}y.value[A]=(y.time-x.time)*(C.value[A]-x.value[A])/(C.time-x.time)+x.value[A]}function F(y){const x={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"instance_animation":x.animations.push(a(P.getAttribute("url")));break}}nt.clips[y.getAttribute("id")]=x}function te(y){const x=[],C=y.name,A=y.end-y.start||-1,P=y.animations;for(let oe=0,fe=P.length;oe<fe;oe++){const Ue=b(P[oe]);for(let be=0,Pe=Ue.length;be<Pe;be++)x.push(Ue[be])}return new $c(C,A,x)}function k(y){return _(nt.clips[y],te)}function J(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"skin":x.id=a(P.getAttribute("source")),x.skin=le(P);break;case"morph":x.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}nt.controllers[y.getAttribute("id")]=x}function le(y){const x={sources:{}};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(P.textContent);break;case"source":const oe=P.getAttribute("id");x.sources[oe]=he(P);break;case"joints":x.joints=ae(P);break;case"vertex_weights":x.vertexWeights=de(P);break}}return x}function ae(y){const x={inputs:{}};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const oe=P.getAttribute("semantic"),fe=a(P.getAttribute("source"));x.inputs[oe]=fe;break}}return x}function de(y){const x={inputs:{}};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const oe=P.getAttribute("semantic"),fe=a(P.getAttribute("source")),Ue=parseInt(P.getAttribute("offset"));x.inputs[oe]={id:fe,offset:Ue};break;case"vcount":x.vcount=o(P.textContent);break;case"v":x.v=o(P.textContent);break}}return x}function ge(y){const x={id:y.id},C=nt.geometries[x.id];return y.skin!==void 0&&(x.skin=K(y.skin),C.sources.skinIndices=x.skin.indices,C.sources.skinWeights=x.skin.weights),x}function K(y){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=y.sources,P=y.vertexWeights,oe=P.vcount,fe=P.v,Ue=P.inputs.JOINT.offset,be=P.inputs.WEIGHT.offset,Pe=y.sources[y.joints.inputs.JOINT],Ye=y.sources[y.joints.inputs.INV_BIND_MATRIX],_e=A[P.inputs.WEIGHT.id].array;let qe=0,Ge,Qe,Ze;for(Ge=0,Ze=oe.length;Ge<Ze;Ge++){const Dt=oe[Ge],At=[];for(Qe=0;Qe<Dt;Qe++){const Rt=fe[qe+Ue],qn=fe[qe+be],_n=_e[qn];At.push({index:Rt,weight:_n}),qe+=2}for(At.sort(Wt),Qe=0;Qe<4;Qe++){const Rt=At[Qe];Rt!==void 0?(C.indices.array.push(Rt.index),C.weights.array.push(Rt.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(y.bindShapeMatrix?C.bindMatrix=new at().fromArray(y.bindShapeMatrix).transpose():C.bindMatrix=new at().identity(),Ge=0,Ze=Pe.array.length;Ge<Ze;Ge++){const Dt=Pe.array[Ge],At=new at().fromArray(Ye.array,Ge*Ye.stride).transpose();C.joints.push({name:Dt,boneInverse:At})}return C;function Wt(Dt,At){return At.weight-Dt.weight}}function Q(y){return _(nt.controllers[y],ge)}function X(y){const x={init_from:n(y,"init_from")[0].textContent};nt.images[y.getAttribute("id")]=x}function H(y){return y.build!==void 0?y.build:y.init_from}function se(y){const x=nt.images[y];return x!==void 0?_(x,H):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Se(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"profile_COMMON":x.profile=Me(P);break}}nt.effects[y.getAttribute("id")]=x}function Me(y){const x={surfaces:{},samplers:{}};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"newparam":ct(P,x);break;case"technique":x.technique=B(P);break;case"extra":x.extra=Ee(P);break}}return x}function ct(y,x){const C=y.getAttribute("sid");for(let A=0,P=y.childNodes.length;A<P;A++){const oe=y.childNodes[A];if(oe.nodeType===1)switch(oe.nodeName){case"surface":x.surfaces[C]=We(oe);break;case"sampler2D":x.samplers[C]=je(oe);break}}}function We(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"init_from":x.init_from=P.textContent;break}}return x}function je(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"source":x.source=P.textContent;break}}return x}function B(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=P.nodeName,x.parameters=$e(P);break;case"extra":x.extra=Ee(P);break}}return x}function $e(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[P.nodeName]=Ve(P);break;case"transparent":x[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:Ve(P)};break}}return x}function Ve(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":x[P.nodeName]=r(P.textContent);break;case"float":x[P.nodeName]=parseFloat(P.textContent);break;case"texture":x[P.nodeName]={id:P.getAttribute("texture"),extra:ut(P)};break}}return x}function ut(y){const x={technique:{}};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"extra":Fe(P,x);break}}return x}function Fe(y,x){for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"technique":lt(P,x);break}}}function lt(y,x){for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?x.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?x.technique[P.nodeName]=0:x.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":x[P.nodeName]=w(P);break}}}function Ee(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"technique":x.technique=U(P);break}}return x}function U(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"double_sided":x[P.nodeName]=parseInt(P.textContent);break;case"bump":x[P.nodeName]=w(P);break}}return x}function w(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"texture":x[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:ut(P)};break}}return x}function ee(y){return y}function pe(y){return _(nt.effects[y],ee)}function ce(y){const x={name:y.getAttribute("name")};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"instance_effect":x.url=a(P.getAttribute("url"));break}}nt.materials[y.getAttribute("id")]=x}function ue(y){let x,C=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(C=C.toLowerCase(),C){case"tga":x=an;break;default:x=hn}return x}function He(y){const x=pe(y.url),C=x.profile.technique;let A;switch(C.type){case"phong":case"blinn":A=new Cs;break;case"lambert":A=new Np;break;default:A=new Os;break}A.name=y.name||"";function P(be,Pe=null){const Ye=x.profile.samplers[be.id];let _e=null;if(Ye!==void 0){const qe=x.profile.surfaces[Ye.source];_e=se(qe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),_e=se(be.id);if(_e!==null){const qe=ue(_e);if(qe!==void 0){const Ge=qe.load(_e),Qe=be.extra;if(Qe!==void 0&&Qe.technique!==void 0&&c(Qe.technique)===!1){const Ze=Qe.technique;Ge.wrapS=Ze.wrapU?zi:Bn,Ge.wrapT=Ze.wrapV?zi:Bn,Ge.offset.set(Ze.offsetU||0,Ze.offsetV||0),Ge.repeat.set(Ze.repeatU||1,Ze.repeatV||1)}else Ge.wrapS=zi,Ge.wrapT=zi;return Pe!==null&&(Ge.colorSpace=Pe),Ge}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",_e),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",be.id),null}const oe=C.parameters;for(const be in oe){const Pe=oe[be];switch(be){case"diffuse":Pe.color&&A.color.fromArray(Pe.color),Pe.texture&&(A.map=P(Pe.texture,zt));break;case"specular":Pe.color&&A.specular&&A.specular.fromArray(Pe.color),Pe.texture&&(A.specularMap=P(Pe.texture));break;case"bump":Pe.texture&&(A.normalMap=P(Pe.texture));break;case"ambient":Pe.texture&&(A.lightMap=P(Pe.texture,zt));break;case"shininess":Pe.float&&A.shininess&&(A.shininess=Pe.float);break;case"emission":Pe.color&&A.emissive&&A.emissive.fromArray(Pe.color),Pe.texture&&(A.emissiveMap=P(Pe.texture,zt));break}}bt.toWorkingColorSpace(A.color,zt),A.specular&&bt.toWorkingColorSpace(A.specular,zt),A.emissive&&bt.toWorkingColorSpace(A.emissive,zt);let fe=oe.transparent,Ue=oe.transparency;if(Ue===void 0&&fe&&(Ue={float:1}),fe===void 0&&Ue&&(fe={opaque:"A_ONE",data:{color:[1,1,1,1]}}),fe&&Ue)if(fe.data.texture)A.transparent=!0;else{const be=fe.data.color;switch(fe.opaque){case"A_ONE":A.opacity=be[3]*Ue.float;break;case"RGB_ZERO":A.opacity=1-be[0]*Ue.float;break;case"A_ZERO":A.opacity=1-be[3]*Ue.float;break;case"RGB_ONE":A.opacity=be[0]*Ue.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',fe.opaque)}A.opacity<1&&(A.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const be=C.extra.technique;for(const Pe in be){const Ye=be[Pe];switch(Pe){case"double_sided":A.side=Ye===1?On:oi;break;case"bump":A.normalMap=P(Ye.texture),A.normalScale=new ot(1,1);break}}}return A}function Ae(y){return _(nt.materials[y],He)}function Oe(y){const x={name:y.getAttribute("name")};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"optics":x.optics=St(P);break}}nt.cameras[y.getAttribute("id")]=x}function St(y){for(let x=0;x<y.childNodes.length;x++){const C=y.childNodes[x];switch(C.nodeName){case"technique_common":return ye(C)}}return{}}function ye(y){const x={};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];switch(A.nodeName){case"perspective":case"orthographic":x.technique=A.nodeName,x.parameters=ke(A);break}}return x}function ke(y){const x={};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[A.nodeName]=parseFloat(A.textContent);break}}return x}function et(y){let x;switch(y.optics.technique){case"perspective":x=new on(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let C=y.optics.parameters.ymag,A=y.optics.parameters.xmag;const P=y.optics.parameters.aspect_ratio;A=A===void 0?C*P:A,C=C===void 0?A/P:C,A*=.5,C*=.5,x=new tc(-A,A,C,-C,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:x=new on;break}return x.name=y.name||"",x}function st(y){const x=nt.cameras[y];return x!==void 0?_(x,et):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Be(y){let x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"technique_common":x=Mt(P);break}}nt.lights[y.getAttribute("id")]=x}function Mt(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=P.nodeName,x.parameters=ft(P)}}return x}function ft(y){const x={};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":const oe=r(P.textContent);x.color=new it().fromArray(oe),bt.toWorkingColorSpace(x.color,zt);break;case"falloff_angle":x.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const fe=parseFloat(P.textContent);x.distance=fe?Math.sqrt(1/fe):0;break}}return x}function Lt(y){let x;switch(y.technique){case"directional":x=new Cl;break;case"point":x=new $p;break;case"spot":x=new Zp;break;case"ambient":x=new em;break}return y.parameters.color&&x.color.copy(y.parameters.color),y.parameters.distance&&(x.distance=y.parameters.distance),x}function q(y){const x=nt.lights[y];return x!==void 0?_(x,Lt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function Re(y){const x={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=n(y,"mesh")[0];if(C!==void 0){for(let A=0;A<C.childNodes.length;A++){const P=C.childNodes[A];if(P.nodeType!==1)continue;const oe=P.getAttribute("id");switch(P.nodeName){case"source":x.sources[oe]=he(P);break;case"vertices":x.vertices=me(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(Le(P));break;default:console.log(P)}}nt.geometries[y.getAttribute("id")]=x}}function he(y){const x={array:[],stride:3};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"float_array":x.array=r(A.textContent);break;case"Name_array":x.array=s(A.textContent);break;case"technique_common":const P=n(A,"accessor")[0];P!==void 0&&(x.stride=parseInt(P.getAttribute("stride")));break}}return x}function me(y){const x={};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];A.nodeType===1&&(x[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return x}function Le(y){const x={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,A=y.childNodes.length;C<A;C++){const P=y.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const oe=a(P.getAttribute("source")),fe=P.getAttribute("semantic"),Ue=parseInt(P.getAttribute("offset")),be=parseInt(P.getAttribute("set")),Pe=be>0?fe+be:fe;x.inputs[Pe]={id:oe,offset:Ue},x.stride=Math.max(x.stride,Ue+1),fe==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(P.textContent);break;case"p":x.p=o(P.textContent);break}}return x}function Ce(y){const x={};for(let C=0;C<y.length;C++){const A=y[C];x[A.type]===void 0&&(x[A.type]=[]),x[A.type].push(A)}return x}function ht(y){let x=0;for(let C=0,A=y.length;C<A;C++)y[C].hasUV===!0&&x++;x>0&&x<y.length&&(y.uvsNeedsFix=!0)}function Bt(y){const x={},C=y.sources,A=y.vertices,P=y.primitives;if(P.length===0)return{};const oe=Ce(P);for(const fe in oe){const Ue=oe[fe];ht(Ue),x[fe]=nn(Ue,C,A)}return x}function nn(y,x,C){const A={},P={array:[],stride:0},oe={array:[],stride:0},fe={array:[],stride:0},Ue={array:[],stride:0},be={array:[],stride:0},Pe={array:[],stride:4},Ye={array:[],stride:4},_e=new qt,qe=[];let Ge=0;for(let Qe=0;Qe<y.length;Qe++){const Ze=y[Qe],Wt=Ze.inputs;let Dt=0;switch(Ze.type){case"lines":case"linestrips":Dt=Ze.count*2;break;case"triangles":Dt=Ze.count*3;break;case"polylist":for(let At=0;At<Ze.count;At++){const Rt=Ze.vcount[At];switch(Rt){case 3:Dt+=3;break;case 4:Dt+=6;break;default:Dt+=(Rt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Ze.type)}_e.addGroup(Ge,Dt,Qe),Ge+=Dt,Ze.material&&qe.push(Ze.material);for(const At in Wt){const Rt=Wt[At];switch(At){case"VERTEX":for(const qn in C){const _n=C[qn];switch(qn){case"POSITION":const Qi=P.array.length;if(pt(Ze,x[_n],Rt.offset,P.array),P.stride=x[_n].stride,x.skinWeights&&x.skinIndices&&(pt(Ze,x.skinIndices,Rt.offset,Pe.array),pt(Ze,x.skinWeights,Rt.offset,Ye.array)),Ze.hasUV===!1&&y.uvsNeedsFix===!0){const Vf=(P.array.length-Qi)/P.stride;for(let sc=0;sc<Vf;sc++)fe.array.push(0,0)}break;case"NORMAL":pt(Ze,x[_n],Rt.offset,oe.array),oe.stride=x[_n].stride;break;case"COLOR":pt(Ze,x[_n],Rt.offset,be.array),be.stride=x[_n].stride;break;case"TEXCOORD":pt(Ze,x[_n],Rt.offset,fe.array),fe.stride=x[_n].stride;break;case"TEXCOORD1":pt(Ze,x[_n],Rt.offset,Ue.array),fe.stride=x[_n].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',qn)}}break;case"NORMAL":pt(Ze,x[Rt.id],Rt.offset,oe.array),oe.stride=x[Rt.id].stride;break;case"COLOR":pt(Ze,x[Rt.id],Rt.offset,be.array,!0),be.stride=x[Rt.id].stride;break;case"TEXCOORD":pt(Ze,x[Rt.id],Rt.offset,fe.array),fe.stride=x[Rt.id].stride;break;case"TEXCOORD1":pt(Ze,x[Rt.id],Rt.offset,Ue.array),Ue.stride=x[Rt.id].stride;break}}}return P.array.length>0&&_e.setAttribute("position",new yt(P.array,P.stride)),oe.array.length>0&&_e.setAttribute("normal",new yt(oe.array,oe.stride)),be.array.length>0&&_e.setAttribute("color",new yt(be.array,be.stride)),fe.array.length>0&&_e.setAttribute("uv",new yt(fe.array,fe.stride)),Ue.array.length>0&&_e.setAttribute("uv1",new yt(Ue.array,Ue.stride)),Pe.array.length>0&&_e.setAttribute("skinIndex",new yt(Pe.array,Pe.stride)),Ye.array.length>0&&_e.setAttribute("skinWeight",new yt(Ye.array,Ye.stride)),A.data=_e,A.type=y[0].type,A.materialKeys=qe,A}function pt(y,x,C,A,P=!1){const oe=y.p,fe=y.stride,Ue=y.vcount;function be(_e){let qe=oe[_e+C]*Ye;const Ge=qe+Ye;for(;qe<Ge;qe++)A.push(Pe[qe]);if(P){const Qe=A.length-Ye-1;Yt.setRGB(A[Qe+0],A[Qe+1],A[Qe+2],zt),A[Qe+0]=Yt.r,A[Qe+1]=Yt.g,A[Qe+2]=Yt.b}}const Pe=x.array,Ye=x.stride;if(y.vcount!==void 0){let _e=0;for(let qe=0,Ge=Ue.length;qe<Ge;qe++){const Qe=Ue[qe];if(Qe===4){const Ze=_e+fe*0,Wt=_e+fe*1,Dt=_e+fe*2,At=_e+fe*3;be(Ze),be(Wt),be(At),be(Wt),be(Dt),be(At)}else if(Qe===3){const Ze=_e+fe*0,Wt=_e+fe*1,Dt=_e+fe*2;be(Ze),be(Wt),be(Dt)}else if(Qe>4)for(let Ze=1,Wt=Qe-2;Ze<=Wt;Ze++){const Dt=_e+fe*0,At=_e+fe*Ze,Rt=_e+fe*(Ze+1);be(Dt),be(At),be(Rt)}_e+=fe*Qe}}else for(let _e=0,qe=oe.length;_e<qe;_e+=fe)be(_e)}function mn(y){return _(nt.geometries[y],Bt)}function Dn(y){const x={name:y.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Xn(A,x);break}}nt.kinematicsModels[y.getAttribute("id")]=x}function Er(y){return y.build!==void 0?y.build:y}function Tr(y){return _(nt.kinematicsModels[y],Er)}function Xn(y,x){for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"joint":x.joints[A.getAttribute("sid")]=qs(A);break;case"link":x.links.push(Ys(A));break}}}function qs(y){let x;for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":x=wr(A);break}}return x}function wr(y){const x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new G,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"axis":const P=r(A.textContent);x.axis.fromArray(P);break;case"limits":const oe=A.getElementsByTagName("max")[0],fe=A.getElementsByTagName("min")[0];x.limits.max=parseFloat(oe.textContent),x.limits.min=parseFloat(fe.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function Ys(y){const x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":x.attachments.push(Zi(A));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ks(A));break}}return x}function Zi(y){const x={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"link":x.links.push(Ys(A));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ks(A));break}}return x}function Ks(y){const x={type:y.nodeName},C=r(y.textContent);switch(x.type){case"matrix":x.obj=new at,x.obj.fromArray(C).transpose();break;case"translate":x.obj=new G,x.obj.fromArray(C);break;case"rotate":x.obj=new G,x.obj.fromArray(C),x.angle=ys.degToRad(C[3]);break}return x}function Ji(y){const x={name:y.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":x.rigidBodies[A.getAttribute("name")]={},Ar(A,x.rigidBodies[A.getAttribute("name")]);break}}nt.physicsModels[y.getAttribute("id")]=x}function Ar(y,x){for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Rr(A,x);break}}}function Rr(y,x){for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"inertia":x.inertia=r(A.textContent);break;case"mass":x.mass=r(A.textContent)[0];break}}}function Vo(y){const x={bindJointAxis:[]};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":x.bindJointAxis.push(Ho(A));break}}nt.kinematicsScenes[a(y.getAttribute("url"))]=x}function Ho(y){const x={target:y.getAttribute("target").split("/").pop()};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType===1)switch(A.nodeName){case"axis":const P=A.getElementsByTagName("param")[0];x.axis=P.textContent;const oe=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=oe.substring(0,oe.length-1);break}}return x}function Go(y){return y.build!==void 0?y.build:y}function Wo(y){return _(nt.kinematicsScenes[y],Go)}function Xo(){const y=Object.keys(nt.kinematicsModels)[0],x=Object.keys(nt.kinematicsScenes)[0],C=Object.keys(nt.visualScenes)[0];if(y===void 0||x===void 0)return;const A=Tr(y),P=Wo(x),oe=Et(C),fe=P.bindJointAxis,Ue={};for(let Ye=0,_e=fe.length;Ye<_e;Ye++){const qe=fe[Ye],Ge=kt.querySelector('[sid="'+qe.target+'"]');if(Ge){const Qe=Ge.parentElement;be(qe.jointIndex,Qe)}}function be(Ye,_e){const qe=_e.getAttribute("name"),Ge=A.joints[Ye];oe.traverse(function(Qe){Qe.name===qe&&(Ue[Ye]={object:Qe,transforms:jo(_e),joint:Ge,position:Ge.zeroPosition})})}const Pe=new at;$i={joints:A&&A.joints,getJointValue:function(Ye){const _e=Ue[Ye];if(_e)return _e.position;console.warn("THREE.ColladaLoader: Joint "+Ye+" doesn't exist.")},setJointValue:function(Ye,_e){const qe=Ue[Ye];if(qe){const Ge=qe.joint;if(_e>Ge.limits.max||_e<Ge.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ye+" value "+_e+" outside of limits (min: "+Ge.limits.min+", max: "+Ge.limits.max+").");else if(Ge.static)console.warn("THREE.ColladaLoader: Joint "+Ye+" is static.");else{const Qe=qe.object,Ze=Ge.axis,Wt=qe.transforms;j.identity();for(let Dt=0;Dt<Wt.length;Dt++){const At=Wt[Dt];if(At.sid&&At.sid.indexOf(Ye)!==-1)switch(Ge.type){case"revolute":j.multiply(Pe.makeRotationAxis(Ze,ys.degToRad(_e)));break;case"prismatic":j.multiply(Pe.makeTranslation(Ze.x*_e,Ze.y*_e,Ze.z*_e));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ge.type);break}else switch(At.type){case"matrix":j.multiply(At.obj);break;case"translate":j.multiply(Pe.makeTranslation(At.obj.x,At.obj.y,At.obj.z));break;case"scale":j.scale(At.obj);break;case"rotate":j.multiply(Pe.makeRotationAxis(At.obj,At.angle));break}}Qe.matrix.copy(j),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Ue[Ye].position=_e}}else console.log("THREE.ColladaLoader: "+Ye+" does not exist.")}}}function jo(y){const x=[],C=kt.querySelector('[id="'+y.id+'"]');for(let A=0;A<C.childNodes.length;A++){const P=C.childNodes[A];if(P.nodeType!==1)continue;let oe,fe;switch(P.nodeName){case"matrix":oe=r(P.textContent);const Ue=new at().fromArray(oe).transpose();x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:Ue});break;case"translate":case"scale":oe=r(P.textContent),fe=new G().fromArray(oe),x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:fe});break;case"rotate":oe=r(P.textContent),fe=new G().fromArray(oe);const be=ys.degToRad(oe[3]);x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:fe,angle:be});break}}return x}function R(y){const x=y.getElementsByTagName("node");for(let C=0;C<x.length;C++){const A=x[C];A.hasAttribute("id")===!1&&A.setAttribute("id",l())}}const j=new at,ie=new G;function re(y){const x={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new at,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];if(A.nodeType!==1)continue;let P;switch(A.nodeName){case"node":x.nodes.push(A.getAttribute("id")),re(A);break;case"instance_camera":x.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(Z(A));break;case"instance_light":x.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(Z(A));break;case"instance_node":x.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":P=r(A.textContent),x.matrix.multiply(j.fromArray(P).transpose()),x.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":P=r(A.textContent),ie.fromArray(P),x.matrix.multiply(j.makeTranslation(ie.x,ie.y,ie.z)),x.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":P=r(A.textContent);const oe=ys.degToRad(P[3]);x.matrix.multiply(j.makeRotationAxis(ie.fromArray(P),oe)),x.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":P=r(A.textContent),x.matrix.scale(ie.fromArray(P)),x.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return Ke(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):nt.nodes[x.id]=x,x}function Z(y){const x={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<y.childNodes.length;C++){const A=y.childNodes[C];switch(A.nodeName){case"bind_material":const P=A.getElementsByTagName("instance_material");for(let oe=0;oe<P.length;oe++){const fe=P[oe],Ue=fe.getAttribute("symbol"),be=fe.getAttribute("target");x.materials[Ue]=a(be)}break;case"skeleton":x.skeletons.push(a(A.textContent));break}}return x}function xe(y,x){const C=[],A=[];let P,oe,fe;for(P=0;P<y.length;P++){const Pe=y[P];let Ye;if(Ke(Pe))Ye=gt(Pe),Te(Ye,x,C);else if(Vt(Pe)){const qe=nt.visualScenes[Pe].children;for(let Ge=0;Ge<qe.length;Ge++){const Qe=qe[Ge];if(Qe.type==="JOINT"){const Ze=gt(Qe.id);Te(Ze,x,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Pe)}for(P=0;P<x.length;P++)for(oe=0;oe<C.length;oe++)if(fe=C[oe],fe.bone.name===x[P].name){A[P]=fe,fe.processed=!0;break}for(P=0;P<C.length;P++)fe=C[P],fe.processed===!1&&(A.push(fe),fe.processed=!0);const Ue=[],be=[];for(P=0;P<A.length;P++)fe=A[P],Ue.push(fe.bone),be.push(fe.boneInverse);return new Jl(Ue,be)}function Te(y,x,C){y.traverse(function(A){if(A.isBone===!0){let P;for(let oe=0;oe<x.length;oe++){const fe=x[oe];if(fe.name===A.name){P=fe.boneInverse;break}}P===void 0&&(P=new at),C.push({bone:A,boneInverse:P,processed:!1})}})}function Ne(y){const x=[],C=y.matrix,A=y.nodes,P=y.type,oe=y.instanceCameras,fe=y.instanceControllers,Ue=y.instanceLights,be=y.instanceGeometries,Pe=y.instanceNodes;for(let _e=0,qe=A.length;_e<qe;_e++)x.push(gt(A[_e]));for(let _e=0,qe=oe.length;_e<qe;_e++){const Ge=st(oe[_e]);Ge!==null&&x.push(Ge.clone())}for(let _e=0,qe=fe.length;_e<qe;_e++){const Ge=fe[_e],Qe=Q(Ge.id),Ze=mn(Qe.id),Wt=tt(Ze,Ge.materials),Dt=Ge.skeletons,At=Qe.skin.joints,Rt=xe(Dt,At);for(let qn=0,_n=Wt.length;qn<_n;qn++){const Qi=Wt[qn];Qi.isSkinnedMesh&&(Qi.bind(Rt,Qe.skin.bindMatrix),Qi.normalizeSkinWeights()),x.push(Qi)}}for(let _e=0,qe=Ue.length;_e<qe;_e++){const Ge=q(Ue[_e]);Ge!==null&&x.push(Ge.clone())}for(let _e=0,qe=be.length;_e<qe;_e++){const Ge=be[_e],Qe=mn(Ge.id),Ze=tt(Qe,Ge.materials);for(let Wt=0,Dt=Ze.length;Wt<Dt;Wt++)x.push(Ze[Wt])}for(let _e=0,qe=Pe.length;_e<qe;_e++)x.push(gt(Pe[_e]).clone());let Ye;if(A.length===0&&x.length===1)Ye=x[0];else{Ye=P==="JOINT"?new yf:new ii;for(let _e=0;_e<x.length;_e++)Ye.add(x[_e])}return Ye.name=P==="JOINT"?y.sid:y.name,Ye.matrix.copy(C),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye}const ze=new Os({name:li.DEFAULT_MATERIAL_NAME,color:16711935});function rt(y,x){const C=[];for(let A=0,P=y.length;A<P;A++){const oe=x[y[A]];oe===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[A]),C.push(ze)):C.push(Ae(oe))}return C}function tt(y,x){const C=[];for(const A in y){const P=y[A],oe=rt(P.materialKeys,x);if(oe.length===0&&(A==="lines"||A==="linestrips"?oe.push(new ri):oe.push(new Cs)),A==="lines"||A==="linestrips")for(let Pe=0,Ye=oe.length;Pe<Ye;Pe++){const _e=oe[Pe];if(_e.isMeshPhongMaterial===!0||_e.isMeshLambertMaterial===!0){const qe=new ri;qe.color.copy(_e.color),qe.opacity=_e.opacity,qe.transparent=_e.transparent,oe[Pe]=qe}}const fe=P.data.attributes.skinIndex!==void 0,Ue=oe.length===1?oe[0]:oe;let be;switch(A){case"lines":be=new vr(P.data,Ue);break;case"linestrips":be=new Ql(P.data,Ue);break;case"triangles":case"polylist":fe?be=new Pp(P.data,Ue):be=new jt(P.data,Ue);break}C.push(be)}return C}function Ke(y){return nt.nodes[y]!==void 0}function gt(y){return _(nt.nodes[y],Ne)}function Tt(y){const x={name:y.getAttribute("name"),children:[]};R(y);const C=n(y,"node");for(let A=0;A<C.length;A++)x.children.push(re(C[A]));nt.visualScenes[y.getAttribute("id")]=x}function Gt(y){const x=new ii;x.name=y.name;const C=y.children;for(let A=0;A<C.length;A++){const P=C[A];x.add(gt(P.id))}return x}function Vt(y){return nt.visualScenes[y]!==void 0}function Et(y){return _(nt.visualScenes[y],Gt)}function Je(y){const x=n(y,"instance_visual_scene")[0];return Et(a(x.getAttribute("url")))}function Zt(){const y=nt.clips;if(c(y)===!0){if(c(nt.animations)===!1){const x=[];for(const C in nt.animations){const A=b(C);for(let P=0,oe=A.length;P<oe;P++)x.push(A[P])}Jt.push(new $c("default",-1,x))}}else for(const x in y)Jt.push(k(x))}function wt(y){let x="";const C=[y];for(;C.length;){const A=C.shift();A.nodeType===Node.TEXT_NODE?x+=A.textContent:(x+=`
`,C.push(...A.childNodes))}return x.trim()}if(e.length===0)return{scene:new xf};const gn=new DOMParser().parseFromString(e,"application/xml"),kt=n(gn,"COLLADA")[0],rn=gn.getElementsByTagName("parsererror")[0];if(rn!==void 0){const y=n(rn,"div")[0];let x;return y?x=y.textContent:x=wt(rn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}const Ci=kt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ci);const Ft=u(n(kt,"asset")[0]),hn=new Af(this.manager);hn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let an;Ou&&(an=new Ou(this.manager),an.setPath(this.resourcePath||t));const Yt=new it,Jt=[];let $i={},jn=0;const nt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(kt,"library_animations","animation",m),d(kt,"library_animation_clips","animation_clip",F),d(kt,"library_controllers","controller",J),d(kt,"library_images","image",X),d(kt,"library_effects","effect",Se),d(kt,"library_materials","material",ce),d(kt,"library_cameras","camera",Oe),d(kt,"library_lights","light",Be),d(kt,"library_geometries","geometry",Re),d(kt,"library_nodes","node",re),d(kt,"library_visual_scenes","visual_scene",Tt),d(kt,"library_kinematics_models","kinematics_model",Dn),d(kt,"library_physics_models","physics_model",Ji),d(kt,"scene","instance_kinematics_scene",Vo),g(nt.animations,E),g(nt.clips,te),g(nt.controllers,ge),g(nt.images,H),g(nt.effects,ee),g(nt.materials,He),g(nt.cameras,et),g(nt.lights,Lt),g(nt.geometries,Bt),g(nt.visualScenes,Gt),Zt(),Xo();const Cr=Je(n(kt,"scene")[0]);return Cr.animations=Jt,Ft.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Cr.rotation.set(-Math.PI/2,0,0)),Cr.scale.multiplyScalar(Ft.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Jt},kinematics:$i,library:nt,scene:Cr}}}const ku=new G,lx=new Mn,ao=new at,mi=new at,lo=new zn,co=new G(1,1,1),uo=new G;class ko extends Ht{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class cx extends ko{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class ux extends ko{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Of extends ko{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class kf extends ko{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new G(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new G(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),ku.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(ku,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],mi.compose(this.origPosition,this.origQuaternion,co),lo.setFromEuler(lx.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),uo.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),ao.compose(uo,lo,co),mi.premultiply(ao),this.position.setFromMatrixPosition(mi),this.rotation.setFromRotationMatrix(mi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],mi.compose(this.origPosition,this.origQuaternion,co),lo.setFromAxisAngle(this.axis,this.jointValue[2]),uo.set(this.jointValue[0],this.jointValue[1],0),ao.compose(uo,lo,co),mi.premultiply(ao),this.position.setFromMatrixPosition(mi),this.rotation.setFromRotationMatrix(mi),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class Bu extends kf{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class hx extends Of{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const s=e[n];Array.isArray(s)?t=this.setJointValue(n,...s)||t:t=this.setJointValue(n,s)||t}return t}}const Na=new zn,zu=new Mn;function ms(i){return i?i.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Vu(i,e,t=!1){t||i.rotation.set(0,0,0),zu.set(e[0],e[1],e[2],"ZYX"),Na.setFromEuler(zu),Na.multiply(i.quaternion),i.quaternion.copy(Na)}class fx{constructor(e){this.manager=e||wf,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,s){const r=this.manager,o=Rf.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);t(c),r.itemEnd(a)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const n=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},u={};function h(v){if(!/^package:\/\//.test(v))return t?t+v:v;const[E,b]=v.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(E)?n+"/"+b:n+"/"+E+"/"+b;if(n instanceof Function)return n(E)+"/"+b;if(typeof n=="object")return E in n?n[E]+"/"+b:(console.error(`URDFLoader : ${E} not found in provided package list.`),null)}function f(v){let E;v instanceof Document?E=[...v.children]:v instanceof Element?E=[v]:E=[...new DOMParser().parseFromString(v,"text/xml").children];const b=E.filter(D=>D.nodeName==="robot").pop();return d(b)}function d(v){const E=[...v.children],b=E.filter(N=>N.nodeName.toLowerCase()==="link"),D=E.filter(N=>N.nodeName.toLowerCase()==="joint"),T=E.filter(N=>N.nodeName.toLowerCase()==="material"),L=new hx;L.robotName=v.getAttribute("name"),L.urdfRobotNode=v,T.forEach(N=>{const z=N.getAttribute("name");u[z]=m(N)});const I={},M={};b.forEach(N=>{const z=N.getAttribute("name"),V=v.querySelector(`child[link="${z}"]`)===null;l[z]=_(N,I,M,V?L:null)}),D.forEach(N=>{const z=N.getAttribute("name");c[z]=g(N)}),L.joints=c,L.links=l,L.colliders=M,L.visual=I;const S=Object.values(c);return S.forEach(N=>{N instanceof Bu&&c[N.mimicJoint].mimicJoints.push(N)}),S.forEach(N=>{const z=new Set,V=Y=>{if(z.has(Y))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");z.add(Y),Y.mimicJoints.forEach(ne=>{V(ne)})};V(N)}),L.frames={...M,...I,...l,...c},L}function g(v){const E=[...v.children],b=v.getAttribute("type");let D;const T=E.find(z=>z.nodeName.toLowerCase()==="mimic");T?(D=new Bu,D.mimicJoint=T.getAttribute("joint"),D.multiplier=parseFloat(T.getAttribute("multiplier")||1),D.offset=parseFloat(T.getAttribute("offset")||0)):D=new kf,D.urdfNode=v,D.name=v.getAttribute("name"),D.urdfName=D.name,D.jointType=b;let L=null,I=null,M=[0,0,0],S=[0,0,0];E.forEach(z=>{const V=z.nodeName.toLowerCase();V==="origin"?(M=ms(z.getAttribute("xyz")),S=ms(z.getAttribute("rpy"))):V==="child"?I=l[z.getAttribute("link")]:V==="parent"?L=l[z.getAttribute("link")]:V==="limit"&&(D.limit.lower=parseFloat(z.getAttribute("lower")||D.limit.lower),D.limit.upper=parseFloat(z.getAttribute("upper")||D.limit.upper))}),L.add(D),D.add(I),Vu(D,S),D.position.set(M[0],M[1],M[2]);const N=E.filter(z=>z.nodeName.toLowerCase()==="axis")[0];if(N){const z=N.getAttribute("xyz").split(/\s+/g).map(V=>parseFloat(V));D.axis=new G(z[0],z[1],z[2]),D.axis.normalize()}return D}function _(v,E,b,D=null){D===null&&(D=new Of);const T=[...v.children];return D.name=v.getAttribute("name"),D.urdfName=D.name,D.urdfNode=v,r&&T.filter(I=>I.nodeName.toLowerCase()==="visual").forEach(I=>{const M=p(I,u);if(D.add(M),I.hasAttribute("name")){const S=I.getAttribute("name");M.name=S,M.urdfName=S,E[S]=M}}),o&&T.filter(I=>I.nodeName.toLowerCase()==="collision").forEach(I=>{const M=p(I);if(D.add(M),I.hasAttribute("name")){const S=I.getAttribute("name");M.name=S,M.urdfName=S,b[S]=M}}),D}function m(v){const E=[...v.children],b=new Cs;return b.name=v.getAttribute("name")||"",E.forEach(D=>{const T=D.nodeName.toLowerCase();if(T==="color"){const L=D.getAttribute("rgba").split(/\s/g).map(I=>parseFloat(I));b.color.setRGB(L[0],L[1],L[2]),b.opacity=L[3],b.transparent=L[3]<1,b.depthWrite=!b.transparent}else if(T==="texture"){const L=D.getAttribute("filename");if(L){const I=new Af(a),M=h(L);b.map=I.load(M),b.map.colorSpace=zt}}}),b}function p(v,E={}){const b=v.nodeName.toLowerCase()==="collision",D=[...v.children];let T=null;const L=D.filter(M=>M.nodeName.toLowerCase()==="material")[0];if(L){const M=L.getAttribute("name");M&&M in E?T=E[M]:T=m(L)}else T=new Cs;const I=b?new cx:new ux;return I.urdfNode=v,D.forEach(M=>{const S=M.nodeName.toLowerCase();if(S==="geometry"){const N=M.children[0].nodeName.toLowerCase();if(N==="mesh"){const z=M.children[0].getAttribute("filename"),V=h(z);if(V!==null){const Y=M.children[0].getAttribute("scale");if(Y){const ne=ms(Y);I.scale.set(ne[0],ne[1],ne[2])}s(V,a,(ne,F)=>{F?console.error("URDFLoader: Error loading mesh.",F):ne&&(ne instanceof jt&&(ne.material=T),ne.position.set(0,0,0),ne.quaternion.identity(),I.add(ne))})}}else if(N==="box"){const z=new jt;z.geometry=new Gs(1,1,1),z.material=T;const V=ms(M.children[0].getAttribute("size"));z.scale.set(V[0],V[1],V[2]),I.add(z)}else if(N==="sphere"){const z=new jt;z.geometry=new No(1,30,30),z.material=T;const V=parseFloat(M.children[0].getAttribute("radius"))||0;z.scale.set(V,V,V),I.add(z)}else if(N==="cylinder"){const z=new jt;z.geometry=new Io(1,1,1,30),z.material=T;const V=parseFloat(M.children[0].getAttribute("radius"))||0,Y=parseFloat(M.children[0].getAttribute("length"))||0;z.scale.set(V,Y,V),z.rotation.set(Math.PI/2,0,0),I.add(z)}}else if(S==="origin"){const N=ms(M.getAttribute("xyz")),z=ms(M.getAttribute("rpy"));I.position.set(N[0],N[1],N[2]),I.rotation.set(0,0,0),Vu(I,z)}}),I}return f(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new ox(t).load(e,r=>{const o=new jt(r,new Cs);n(o)}):/\.dae$/i.test(e)?new ax(t).load(e,r=>n(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const gs=[];function tn(i,e=Xt){let t;const n=new Set;function s(a){if(Ai(i,a)&&(i=a,t)){const l=!gs.length;for(const c of n)c[1](),gs.push(c,i);if(l){for(let c=0;c<gs.length;c+=2)gs[c][0](gs[c+1]);gs.length=0}}}function r(a){s(a(i))}function o(a,l=Xt){const c=[a,l];return n.add(c),n.size===1&&(t=e(s,r)||Xt),a(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}const dx="ws://"+window.location.host+"/ws",wi=tn({}),Ps=tn({controller_l:null,controller_r:null,eef_l:null,eef_r:null}),ur=tn({left:!1,right:!1}),Ua=tn("System Ready"),Sr=tn([]),xr=tn(!1),px=tn(0),rr=tn(null),Ms=tn(!1),Bo=tn(!1);let Co=[],Bf=!1;Bo.subscribe(i=>{Bf=i});function mx(){Co=[],Bo.set(!0)}function gx(){Bo.set(!1);const i={};return Co.forEach((e,t)=>{i[`Step-${t+1}`]=e}),Co=[],i}const Dl=tn(!1),Hu=tn(!1),Il=tn(!1),Nl=tn(!1),Ul=tn(!1),Fl=tn(0),Ol=tn(.15),bs=tn("sync"),zo=tn(null);let Ln=null,zf=!1;xr.subscribe(i=>{zf=i});function _x(i){Ln=i}function vx(){return Ln}function Mo(i,e){Ln&&Ln.joints[i]&&Ln.joints[i].setJointValue(e),wi.update(t=>({...t,[i]:e}))}function yi(i,e,t){const n=ho(Sr).filter(s=>s.name.startsWith(i)).map(s=>s.name).sort((s,r)=>s.localeCompare(r,void 0,{numeric:!0}));e.forEach((s,r)=>{r>=n.length||(Ln!=null&&Ln.joints[n[r]]&&Ln.joints[n[r]].setJointValue(s),t[n[r]]=s)})}function nr(i){var l,c,u,h,f,d,g,_;if(!i)return;const e={};(l=i.left)!=null&&l.arm&&yi("arm_l_",i.left.arm,e),(c=i.left)!=null&&c.hand&&yi("finger_l_",i.left.hand,e),(u=i.right)!=null&&u.arm&&yi("arm_r_",i.right.arm,e),(h=i.right)!=null&&h.hand&&yi("finger_r_",i.right.hand,e),Object.keys(e).length>0&&wi.update(m=>({...m,...e}));const t=m=>m&&m.length>=7?{x:m[0],y:m[1],z:m[2],qw:m[3],qx:m[4],qy:m[5],qz:m[6]}:null,n={},s=t((f=i.left)==null?void 0:f.controller);s&&(n.controller_l=s);const r=t((d=i.right)==null?void 0:d.controller);r&&(n.controller_r=r);const o=t((g=i.left)==null?void 0:g.eef);o&&(n.eef_l=o);const a=t((_=i.right)==null?void 0:_.eef);a&&(n.eef_r=a),i.activated&&ur.set({left:!!i.activated.left,right:!!i.activated.right}),Object.keys(n).length>0&&Ps.update(m=>({...m,...n}))}function xx(){const i=new WebSocket(dx);return i.onopen=()=>Ua.set("Connected"),i.onclose=()=>Ua.set("Disconnected"),i.onerror=()=>Ua.set("Error"),i.onmessage=e=>{var n,s,r,o,a,l,c,u;if(zf)return;const t=JSON.parse(e.data);if(t.left||t.right){const h={};(n=t.left)!=null&&n.arm&&yi("arm_l_",t.left.arm,h),(s=t.left)!=null&&s.hand&&yi("finger_l_",t.left.hand,h),(r=t.right)!=null&&r.arm&&yi("arm_r_",t.right.arm,h),(o=t.right)!=null&&o.hand&&yi("finger_r_",t.right.hand,h),Object.keys(h).length>0&&wi.update(v=>({...v,...h}));const f=v=>v&&v.length>=7?{x:v[0],y:v[1],z:v[2],qw:v[3],qx:v[4],qy:v[5],qz:v[6]}:null,d={},g=f((a=t.left)==null?void 0:a.controller);g&&(d.controller_l=g);const _=f((l=t.right)==null?void 0:l.controller);_&&(d.controller_r=_);const m=f((c=t.left)==null?void 0:c.eef);m&&(d.eef_l=m);const p=f((u=t.right)==null?void 0:u.eef);p&&(d.eef_r=p),t.activated&&ur.set({left:!!t.activated.left,right:!!t.activated.right}),Object.keys(d).length>0&&Ps.update(v=>({...v,...d})),Bf&&Co.push({timestamp:Date.now(),left:t.left??null,right:t.right??null,activated:t.activated??null});return}if(t.joints){if(Ln)for(const[h,f]of Object.entries(t.joints))Ln.joints[h]&&Ln.joints[h].setJointValue(f);wi.set(t.joints)}t.trajectory&&Ps.set(t.trajectory)},i}function yx(i){let e,t,n,s,r,o;return{c(){e=$("div"),t=ve(),n=$("div"),s=Xe(i[1]),r=ve(),o=$("div"),o.textContent="Drag: Rotation  ·  Scroll: Zoom  ·  Right: Move",W(e,"class","viewer-container svelte-14egg2k"),W(n,"class","status-badge svelte-14egg2k"),Pt(n,"hidden",i[2]),W(o,"class","hint-badge svelte-14egg2k")},m(a,l){Ie(a,e,l),i[15](e),Ie(a,t,l),Ie(a,n,l),O(n,s),Ie(a,r,l),Ie(a,o,l)},p(a,[l]){l&2&&dt(s,a[1]),l&4&&Pt(n,"hidden",a[2])},i:Xt,o:Xt,d(a){a&&(De(e),De(t),De(n),De(r),De(o)),i[15](null)}}}function Mx(i,e,t){let n,s,r,o,a,l,c,u,h;Ot(i,Ol,T=>t(9,n=T)),Ot(i,Fl,T=>t(10,s=T)),Ot(i,Ul,T=>t(11,r=T)),Ot(i,Nl,T=>t(12,o=T)),Ot(i,Il,T=>t(13,a=T)),Ot(i,Dl,T=>t(14,l=T)),Ot(i,wi,T=>t(16,c=T)),Ot(i,xr,T=>t(17,u=T)),Ot(i,bs,T=>t(18,h=T));let f,d="Loading URDF & OBJ...",g=!1,_,m,p,v,E,b;Yh(()=>{const T=new xf;t(3,_=T),zo.set(T);const L=new Nf({antialias:!0,alpha:!0});L.setPixelRatio(window.devicePixelRatio),L.setSize(f.clientWidth,f.clientHeight),L.shadowMap.enabled=!0,L.shadowMap.type=Bl,L.outputColorSpace=zt,L.toneMapping=zl,L.toneMappingExposure=1,f.appendChild(L.domElement);const I=new on(50,f.clientWidth/f.clientHeight,.1,1e3);I.position.set(1,.8,1);const M=new Ff(I,L.domElement);M.target.set(0,.5,0),M.rotateSpeed=2,t(7,E=M),M.zoomSpeed=5,M.panSpeed=2,M.enableDamping=!0,M.dampingFactor=.1,M.minDistance=.25,M.maxDistance=50,M.update();const S=new Yp(8433919,4861952,.5);T.add(S);const N=new Cl(16777215,Math.PI);N.position.set(4,10,1),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.normalBias=.001,N.shadow.camera.near=.1,N.shadow.camera.far=50,N.shadow.camera.left=-5,N.shadow.camera.right=5,N.shadow.camera.top=5,N.shadow.camera.bottom=-5,T.add(N);const z=new Cl(16777215,.4);z.position.set(-4,2,-4),T.add(z);const V=new jt(new Bs(40,40),new Rl({color:2763310,roughness:.9,metalness:0}));V.rotation.x=-Math.PI/2,V.receiveShadow=!0,t(4,m=V),T.add(V);const Y=new ii,ne=new Sa(10,20,5592405,3355443);ne.position.set(0,.001,0),Y.add(ne);const F=new Sa(10,20,5592405,3355443);F.rotation.x=Math.PI/2,F.position.set(0,5,-5),Y.add(F);const te=new Sa(10,20,5592405,3355443);te.rotation.z=Math.PI/2,te.position.set(-5,5,0),Y.add(te),t(5,p=Y),T.add(Y);const k=new jt(new Bs(40,40),new Os({color:5219319,transparent:!0,opacity:.15,side:On,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.visible=!1,t(8,b=k),T.add(k);const J=new im(.4);t(6,v=J),T.add(J);const le=new Tf,ae=new fx(le),de=new rx(le);ae.loadMeshCb=function(We,je,B){We.split(".").pop().toLowerCase()==="obj"?de.load(We,Ve=>B(Ve),void 0,Ve=>{console.error("OBJ Load Error:",Ve),B(null,Ve)}):B(null,new Error("지원하지 않는 포맷입니다."))},ae.load("/robot/ffw_sh5.urdf",We=>{We.rotation.x=-Math.PI/2,We.scale.set(.6,.6,.6),We.traverse(B=>{B.isMesh&&(B.castShadow=!0,B.receiveShadow=!0,B.material&&B.material.isMeshBasicMaterial&&(B.material=new Rl({color:B.material.color,roughness:.5,metalness:.3})))}),T.add(We),t(1,d="Robot Loaded"),t(2,g=!0);const je=[];Object.keys(We.joints).sort().forEach(B=>{const $e=We.joints[B];$e.jointType!=="fixed"&&je.push({name:B,type:$e.jointType,min:$e.limit?$e.limit.lower:null,max:$e.limit?$e.limit.upper:null})}),Sr.set(je),_x(We),xx()});const ge=new nm,K=new ot;let Q=null,X={x:0,y:0};const H=We=>{if(h!=="control"||We.button!==0)return;const je=f.getBoundingClientRect();K.x=(We.clientX-je.left)/je.width*2-1,K.y=-((We.clientY-je.top)/je.height)*2+1,ge.setFromCamera(K,I);const B=ge.intersectObjects(T.children,!0);if(B.length>0){let $e=B[0].object;for(;$e&&$e!==T;){if($e.isURDFJoint&&$e.jointType!=="fixed"){Q=$e,M.enabled=!1,X={x:We.clientX,y:We.clientY},u||xr.set(!0),We.stopPropagation();break}$e=$e.parent}}},se=We=>{if(Q&&!M.enabled){const je=We.clientX-X.x,B=We.clientY-X.y;X={x:We.clientX,y:We.clientY};const Ve=(je-B)*.01;let Fe=(c[Q.name]||0)+Ve,lt=-3.14,Ee=3.14;Q.limit&&(lt=Q.limit.lower,Ee=Q.limit.upper),Fe=Math.max(lt,Math.min(Ee,Fe)),Mo(Q.name,Fe)}},Se=()=>{Q&&(Q=null,M.enabled=!0)};L.domElement.addEventListener("pointerdown",H),window.addEventListener("pointermove",se),window.addEventListener("pointerup",Se);function Me(){requestAnimationFrame(Me),M.update(),L.render(T,I)}Me();const ct=()=>{I.aspect=f.clientWidth/f.clientHeight,I.updateProjectionMatrix(),L.setSize(f.clientWidth,f.clientHeight)};return window.addEventListener("resize",ct),()=>{window.removeEventListener("resize",ct),L.domElement.removeEventListener("pointerdown",H),window.removeEventListener("pointermove",se),window.removeEventListener("pointerup",Se),M.dispose(),L.dispose()}});function D(T){fr[T?"unshift":"push"](()=>{f=T,t(0,f)})}return i.$$.update=()=>{i.$$.dirty&16472&&_&&(l?(t(3,_.background=new it(1710621),_),t(3,_.fog=new Zl(1710621,18,40),_),m&&t(4,m.visible=!0,m),v&&t(6,v.visible=!0,v)):(t(3,_.background=null,_),t(3,_.fog=null,_),m&&t(4,m.visible=!1,m),v&&t(6,v.visible=!1,v))),i.$$.dirty&8224&&p&&t(5,p.visible=a,p),i.$$.dirty&4224&&E&&(t(7,E.autoRotate=o,E),t(7,E.autoRotateSpeed=-2,E)),i.$$.dirty&3840&&b&&(t(8,b.visible=r,b),t(8,b.position.y=s,b),t(8,b.material.opacity=n,b))},[f,d,g,_,m,p,v,E,b,n,s,r,o,a,l,D]}class bx extends qi{constructor(e){super(),ji(this,e,Mx,yx,Ai,{})}}function Gu(i,e,t){const n=i.slice();n[11]=e[t];const s="l_"+n[11].name;return n[12]=s,n}function Wu(i,e,t){const n=i.slice();return n[15]=e[t],n}function Xu(i,e,t){const n=i.slice();n[11]=e[t];const s="w_"+n[11].name;return n[12]=s,n}function ju(i,e,t){const n=i.slice();return n[15]=e[t],n}function qu(i){let e,t=Ut(i[4]),n=[];for(let s=0;s<t.length;s+=1)n[s]=Zu(Xu(i,t,s));return{c(){e=$("div");for(let s=0;s<n.length;s+=1)n[s].c();W(e,"class","sub-list svelte-cgutnc")},m(s,r){Ie(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r&120){t=Ut(s[4]);let o;for(o=0;o<t.length;o+=1){const a=Xu(s,t,o);n[o]?n[o].p(a,r):(n[o]=Zu(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&De(e),yn(n,s)}}}function Yu(i){let e,t,n,s,r,o=Ut(i[11].joints),a=[];for(let l=0;l<o.length;l+=1)a[l]=Ku(ju(i,o,l));return{c(){e=$("table"),t=$("thead"),t.innerHTML='<tr><th class="svelte-cgutnc">Joint</th><th class="svelte-cgutnc">Value</th></tr>',n=ve(),s=$("tbody");for(let l=0;l<a.length;l+=1)a[l].c();r=ve(),W(e,"class","svelte-cgutnc")},m(l,c){Ie(l,e,c),O(e,t),O(e,n),O(e,s);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(s,null);O(e,r)},p(l,c){if(c&48){o=Ut(l[11].joints);let u;for(u=0;u<o.length;u+=1){const h=ju(l,o,u);a[u]?a[u].p(h,c):(a[u]=Ku(h),a[u].c(),a[u].m(s,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(l){l&&De(e),yn(a,l)}}}function Ku(i){let e,t,n=i[15].name+"",s,r,o,a=(i[5][i[15].name]??0).toFixed(3)+"",l,c;return{c(){e=$("tr"),t=$("td"),s=Xe(n),r=ve(),o=$("td"),l=Xe(a),c=ve(),W(t,"class","name svelte-cgutnc"),W(o,"class","val svelte-cgutnc"),W(e,"class","svelte-cgutnc")},m(u,h){Ie(u,e,h),O(e,t),O(t,s),O(e,r),O(e,o),O(o,l),O(e,c)},p(u,h){h&16&&n!==(n=u[15].name+"")&&dt(s,n),h&48&&a!==(a=(u[5][u[15].name]??0).toFixed(3)+"")&&dt(l,a)},d(u){u&&De(e)}}}function Zu(i){let e,t=i[11].name+"",n,s,r,o=i[3][i[12]]?"-":"+",a,l,c,u,h;function f(){return i[8](i[12])}let d=i[3][i[12]]&&Yu(i);return{c(){e=$("div"),n=Xe(t),s=ve(),r=$("span"),a=Xe(o),l=ve(),d&&d.c(),c=jh(),W(r,"class","toggle-icon svelte-cgutnc"),W(e,"class","sub-header svelte-cgutnc")},m(g,_){Ie(g,e,_),O(e,n),O(e,s),O(e,r),O(r,a),Ie(g,l,_),d&&d.m(g,_),Ie(g,c,_),u||(h=vt(e,"click",f),u=!0)},p(g,_){i=g,_&16&&t!==(t=i[11].name+"")&&dt(n,t),_&24&&o!==(o=i[3][i[12]]?"-":"+")&&dt(a,o),i[3][i[12]]?d?d.p(i,_):(d=Yu(i),d.c(),d.m(c.parentNode,c)):d&&(d.d(1),d=null)},d(g){g&&(De(e),De(l),De(c)),d&&d.d(g),u=!1,h()}}}function Ju(i){let e,t=Ut(i[4]),n=[];for(let s=0;s<t.length;s+=1)n[s]=eh(Gu(i,t,s));return{c(){e=$("div");for(let s=0;s<n.length;s+=1)n[s].c();W(e,"class","sub-list svelte-cgutnc")},m(s,r){Ie(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r&88){t=Ut(s[4]);let o;for(o=0;o<t.length;o+=1){const a=Gu(s,t,o);n[o]?n[o].p(a,r):(n[o]=eh(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&De(e),yn(n,s)}}}function $u(i){let e,t,n,s,r,o=Ut(i[11].joints),a=[];for(let l=0;l<o.length;l+=1)a[l]=Qu(Wu(i,o,l));return{c(){e=$("table"),t=$("thead"),t.innerHTML='<tr><th class="svelte-cgutnc">Joint</th><th class="svelte-cgutnc">Type</th><th class="svelte-cgutnc">Min / Max</th></tr>',n=ve(),s=$("tbody");for(let l=0;l<a.length;l+=1)a[l].c();r=ve(),W(e,"class","svelte-cgutnc")},m(l,c){Ie(l,e,c),O(e,t),O(e,n),O(e,s);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(s,null);O(e,r)},p(l,c){if(c&16){o=Ut(l[11].joints);let u;for(u=0;u<o.length;u+=1){const h=Wu(l,o,u);a[u]?a[u].p(h,c):(a[u]=Qu(h),a[u].c(),a[u].m(s,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}},d(l){l&&De(e),yn(a,l)}}}function Qu(i){let e,t,n=i[15].name+"",s,r,o,a=i[15].type+"",l,c,u,h=i[15].min!==null?`${i[15].min.toFixed(2)} / ${i[15].max.toFixed(2)}`:"—",f,d;return{c(){e=$("tr"),t=$("td"),s=Xe(n),r=ve(),o=$("td"),l=Xe(a),c=ve(),u=$("td"),f=Xe(h),d=ve(),W(t,"class","name svelte-cgutnc"),W(o,"class","type svelte-cgutnc"),W(u,"class","range svelte-cgutnc"),W(e,"class","svelte-cgutnc")},m(g,_){Ie(g,e,_),O(e,t),O(t,s),O(e,r),O(e,o),O(o,l),O(e,c),O(e,u),O(u,f),O(e,d)},p(g,_){_&16&&n!==(n=g[15].name+"")&&dt(s,n),_&16&&a!==(a=g[15].type+"")&&dt(l,a),_&16&&h!==(h=g[15].min!==null?`${g[15].min.toFixed(2)} / ${g[15].max.toFixed(2)}`:"—")&&dt(f,h)},d(g){g&&De(e)}}}function eh(i){let e,t=i[11].name+"",n,s,r,o=i[3][i[12]]?"-":"+",a,l,c,u,h;function f(){return i[10](i[12])}let d=i[3][i[12]]&&$u(i);return{c(){e=$("div"),n=Xe(t),s=ve(),r=$("span"),a=Xe(o),l=ve(),d&&d.c(),c=jh(),W(r,"class","toggle-icon svelte-cgutnc"),W(e,"class","sub-header svelte-cgutnc")},m(g,_){Ie(g,e,_),O(e,n),O(e,s),O(e,r),O(r,a),Ie(g,l,_),d&&d.m(g,_),Ie(g,c,_),u||(h=vt(e,"click",f),u=!0)},p(g,_){i=g,_&16&&t!==(t=i[11].name+"")&&dt(n,t),_&24&&o!==(o=i[3][i[12]]?"-":"+")&&dt(a,o),i[3][i[12]]?d?d.p(i,_):(d=$u(i),d.c(),d.m(c.parentNode,c)):d&&(d.d(1),d=null)},d(g){g&&(De(e),De(l),De(c)),d&&d.d(g),u=!1,h()}}}function th(i){let e;return{c(){e=$("div"),e.textContent="Robot not loaded yet...",W(e,"class","empty svelte-cgutnc")},m(t,n){Ie(t,e,n)},d(t){t&&De(e)}}}function Sx(i){let e,t,n,s,r,o,a,l=i[1]?"-":"+",c,u,h,f,d,g,_,m=i[2]?"-":"+",p,v,E,b,D,T=i[1]&&qu(i),L=i[2]&&Ju(i),I=i[0].length===0&&th();return{c(){e=$("div"),t=$("div"),n=$("h4"),s=Xe("Worker "),r=$("span"),r.textContent="rad",o=ve(),a=$("span"),c=Xe(l),u=ve(),T&&T.c(),h=ve(),f=$("div"),d=$("h4"),g=Xe(`Limits
      `),_=$("span"),p=Xe(m),v=ve(),L&&L.c(),E=ve(),I&&I.c(),W(r,"class","unit svelte-cgutnc"),W(a,"class","toggle-icon svelte-cgutnc"),W(n,"class","category-header svelte-cgutnc"),W(t,"class","category-section svelte-cgutnc"),W(_,"class","toggle-icon svelte-cgutnc"),W(d,"class","category-header svelte-cgutnc"),W(f,"class","category-section svelte-cgutnc"),W(e,"class","categories svelte-cgutnc")},m(M,S){Ie(M,e,S),O(e,t),O(t,n),O(n,s),O(n,r),O(n,o),O(n,a),O(a,c),O(t,u),T&&T.m(t,null),O(e,h),O(e,f),O(f,d),O(d,g),O(d,_),O(_,p),O(f,v),L&&L.m(f,null),O(e,E),I&&I.m(e,null),b||(D=[vt(n,"click",i[7]),vt(d,"click",i[9])],b=!0)},p(M,[S]){S&2&&l!==(l=M[1]?"-":"+")&&dt(c,l),M[1]?T?T.p(M,S):(T=qu(M),T.c(),T.m(t,null)):T&&(T.d(1),T=null),S&4&&m!==(m=M[2]?"-":"+")&&dt(p,m),M[2]?L?L.p(M,S):(L=Ju(M),L.c(),L.m(f,null)):L&&(L.d(1),L=null),M[0].length===0?I||(I=th(),I.c(),I.m(e,null)):I&&(I.d(1),I=null)},i:Xt,o:Xt,d(M){M&&De(e),T&&T.d(),L&&L.d(),I&&I.d(),b=!1,An(D)}}}function Ex(i,e){return i.name.localeCompare(e.name,void 0,{numeric:!0,sensitivity:"base"})}function Tx(i,e,t){let n,s,r;Ot(i,Sr,g=>t(0,s=g)),Ot(i,wi,g=>t(5,r=g));let o=!1,a=!1,l={};function c(g){t(3,l[g]=!l[g],l)}const u=()=>t(1,o=!o),h=g=>c(g),f=()=>t(2,a=!a),d=g=>c(g);return i.$$.update=()=>{i.$$.dirty&1&&t(4,n=[{name:"BASE",joints:s.filter(g=>!g.name.startsWith("arm_l_")&&!g.name.startsWith("arm_r_")&&!g.name.startsWith("finger_l_")&&!g.name.startsWith("finger_r_"))},{name:"ARM - Left",joints:s.filter(g=>g.name.startsWith("arm_l_"))},{name:"ARM - Right",joints:s.filter(g=>g.name.startsWith("arm_r_"))},{name:"Hand - Left",joints:s.filter(g=>g.name.startsWith("finger_l_"))},{name:"Hand - Right",joints:s.filter(g=>g.name.startsWith("finger_r_"))}].filter(g=>g.joints.length>0).map(g=>({...g,joints:[...g.joints].sort(Ex)})))},[s,o,a,l,n,r,c,u,h,f,d]}class wx extends qi{constructor(e){super(),ji(this,e,Tx,Sx,Ai,{})}}function Ax(i){let e,t,n,s=i[0]==="left"?"Hand — Left":"Hand — Right",r,o,a;return{c(){e=$("div"),t=$("div"),n=$("span"),r=Xe(s),o=ve(),a=$("div"),W(n,"class","hand-title svelte-5tq9gd"),W(t,"class","hand-viewer-header svelte-5tq9gd"),W(a,"class","hand-canvas svelte-5tq9gd"),W(e,"class","hand-viewer-wrap svelte-5tq9gd")},m(l,c){Ie(l,e,c),O(e,t),O(t,n),O(n,r),O(e,o),O(e,a),i[2](a)},p(l,[c]){c&1&&s!==(s=l[0]==="left"?"Hand — Left":"Hand — Right")&&dt(r,s)},i:Xt,o:Xt,d(l){l&&De(e),i[2](null)}}}function Rx(i,e,t){let{side:n="left"}=e,s,r,o,a,l,c=null,u=null;const h=new G,f=new G;let d=!0;function g(){const p=vx();if(!p)return;const v=n==="left"?"finger_l_":"finger_r_",E=Object.keys(p.joints).filter(b=>b.startsWith(v)).sort((b,D)=>b.localeCompare(D,void 0,{numeric:!0}));u=E.length>0?p.joints[E[0]]:null}function _(){!u||!a||(u.getWorldPosition(h),a.target.copy(h),o.position.copy(h).add(new G(.12,.03,.12)),f.copy(h),a.update())}Yh(()=>{r=new Nf({antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(s.clientWidth,s.clientHeight),r.shadowMap.enabled=!0,r.shadowMap.type=Bl,r.outputColorSpace=zt,r.toneMapping=zl,s.appendChild(r.domElement),o=new on(55,s.clientWidth/s.clientHeight,.01,100),o.position.set(.3,1.2,.3),a=new Ff(o,r.domElement),a.target.set(0,1,0),a.enableDamping=!0,a.dampingFactor=.1,a.minDistance=.05,a.maxDistance=2,a.update();const p=zo.subscribe(D=>{c=D});function v(){if(l=requestAnimationFrame(v),u||g(),u)if(d)_(),d=!1;else{u.getWorldPosition(h);const D=h.x-f.x,T=h.y-f.y,L=h.z-f.z;Math.abs(D)+Math.abs(T)+Math.abs(L)>1e-4&&(a.target.add({x:D,y:T,z:L}),o.position.add({x:D,y:T,z:L}),f.copy(h))}a.update(),c&&r.render(c,o)}v();const E=()=>{if(!s)return;const D=s.clientWidth,T=s.clientHeight;o.aspect=D/T,o.updateProjectionMatrix(),r.setSize(D,T)},b=new ResizeObserver(E);return b.observe(s),()=>{p(),b.disconnect(),cancelAnimationFrame(l),a.dispose(),r.dispose()}});function m(p){fr[p?"unshift":"push"](()=>{s=p,t(1,s)})}return i.$$set=p=>{"side"in p&&t(0,n=p.side)},i.$$.update=()=>{i.$$.dirty&1&&n&&(u=null,d=!0)},[n,s,m]}class nh extends qi{constructor(e){super(),ji(this,e,Rx,Ax,Ai,{side:0})}}function ih(i,e,t){const n=i.slice();n[31]=e[t];const s=n[2][n[31].key];return n[32]=s,n}function Cx(i){let e;return{c(){e=$("div"),e.textContent="No data",W(e,"class","no-data svelte-1e9iyaw")},m(t,n){Ie(t,e,n)},p:Xt,d(t){t&&De(e)}}}function Px(i){let e,t,n,s,r=_s(i[32].x)+"",o,a,l,c,u=_s(i[32].y)+"",h,f,d,g,_=_s(i[32].z)+"",m,p,v,E,b,D=gi(i[32].qw)+"",T,L,I,M,S=gi(i[32].qx)+"",N,z,V,Y,ne=gi(i[32].qy)+"",F,te,k,J,le=gi(i[32].qz)+"",ae;return{c(){e=$("div"),t=$("div"),n=$("span"),n.textContent="X",s=$("span"),o=Xe(r),a=ve(),l=$("span"),l.textContent="Y",c=$("span"),h=Xe(u),f=ve(),d=$("span"),d.textContent="Z",g=$("span"),m=Xe(_),p=ve(),v=$("div"),E=$("span"),E.textContent="Qw",b=$("span"),T=Xe(D),L=ve(),I=$("span"),I.textContent="Qx",M=$("span"),N=Xe(S),z=ve(),V=$("span"),V.textContent="Qy",Y=$("span"),F=Xe(ne),te=ve(),k=$("span"),k.textContent="Qz",J=$("span"),ae=Xe(le),W(n,"class","axis x svelte-1e9iyaw"),W(s,"class","val svelte-1e9iyaw"),W(l,"class","axis y svelte-1e9iyaw"),W(c,"class","val svelte-1e9iyaw"),W(d,"class","axis z svelte-1e9iyaw"),W(g,"class","val svelte-1e9iyaw"),W(t,"class","coord-row svelte-1e9iyaw"),W(E,"class","axis q svelte-1e9iyaw"),W(b,"class","val svelte-1e9iyaw"),W(I,"class","axis q svelte-1e9iyaw"),W(M,"class","val svelte-1e9iyaw"),W(V,"class","axis q svelte-1e9iyaw"),W(Y,"class","val svelte-1e9iyaw"),W(k,"class","axis q svelte-1e9iyaw"),W(J,"class","val svelte-1e9iyaw"),W(v,"class","coord-row quat svelte-1e9iyaw"),W(e,"class","coords svelte-1e9iyaw")},m(de,ge){Ie(de,e,ge),O(e,t),O(t,n),O(t,s),O(s,o),O(t,a),O(t,l),O(t,c),O(c,h),O(t,f),O(t,d),O(t,g),O(g,m),O(e,p),O(e,v),O(v,E),O(v,b),O(b,T),O(v,L),O(v,I),O(v,M),O(M,N),O(v,z),O(v,V),O(v,Y),O(Y,F),O(v,te),O(v,k),O(v,J),O(J,ae)},p(de,ge){ge[0]&4&&r!==(r=_s(de[32].x)+"")&&dt(o,r),ge[0]&4&&u!==(u=_s(de[32].y)+"")&&dt(h,u),ge[0]&4&&_!==(_=_s(de[32].z)+"")&&dt(m,_),ge[0]&4&&D!==(D=gi(de[32].qw)+"")&&dt(T,D),ge[0]&4&&S!==(S=gi(de[32].qx)+"")&&dt(N,S),ge[0]&4&&ne!==(ne=gi(de[32].qy)+"")&&dt(F,ne),ge[0]&4&&le!==(le=gi(de[32].qz)+"")&&dt(ae,le)},d(de){de&&De(e)}}}function sh(i){let e,t,n,s,r,o,a,l,c,u,h;function f(m,p){return m[32]?Px:Cx}let d=f(i),g=d(i);function _(){return i[9](i[31])}return{c(){e=$("div"),t=$("div"),n=$("div"),s=$("span"),s.textContent=`${i[31].side}`,r=ve(),o=$("span"),o.textContent=`${i[31].label}`,a=ve(),l=$("div"),c=ve(),g.c(),W(s,"class","card-side svelte-1e9iyaw"),W(o,"class","card-label svelte-1e9iyaw"),W(n,"class","card-label-wrap svelte-1e9iyaw"),W(l,"class","toggle-dot svelte-1e9iyaw"),Pt(l,"on",i[0][i[31].key]),W(t,"class","card-head svelte-1e9iyaw"),W(e,"class","traj-card svelte-1e9iyaw"),Hi(e,"--c",i[5](i[31])),Pt(e,"active",i[0][i[31].key])},m(m,p){Ie(m,e,p),O(e,t),O(t,n),O(n,s),O(n,r),O(n,o),O(t,a),O(t,l),O(e,c),g.m(e,null),u||(h=vt(e,"click",_),u=!0)},p(m,p){i=m,p[0]&17&&Pt(l,"on",i[0][i[31].key]),d===(d=f(i))&&g?g.p(i,p):(g.d(1),g=d(i),g&&(g.c(),g.m(e,null))),p[0]&17&&Pt(e,"active",i[0][i[31].key])},d(m){m&&De(e),g.d(),u=!1,h()}}}function rh(i){let e;return{c(){e=$("div"),e.innerHTML='<span class="legend-item ax-x svelte-1e9iyaw"><span class="legend-swatch svelte-1e9iyaw"></span>X</span> <span class="legend-item ax-y svelte-1e9iyaw"><span class="legend-swatch svelte-1e9iyaw"></span>Y</span> <span class="legend-item ax-z svelte-1e9iyaw"><span class="legend-swatch svelte-1e9iyaw"></span>Z</span>',W(e,"class","axis-legend svelte-1e9iyaw")},m(t,n){Ie(t,e,n)},d(t){t&&De(e)}}}function Lx(i){let e,t,n;return{c(){e=$("button"),e.textContent="⏺ Record",W(e,"class","rec-btn record svelte-1e9iyaw")},m(s,r){Ie(s,e,r),t||(n=vt(e,"click",i[7]),t=!0)},p:Xt,d(s){s&&De(e),t=!1,n()}}}function Dx(i){let e,t,n,s,r;return{c(){e=$("button"),e.textContent="■ Stop",t=ve(),n=$("input"),W(e,"class","rec-btn stop svelte-1e9iyaw"),W(n,"class","rec-filename svelte-1e9iyaw"),W(n,"type","text"),W(n,"spellcheck","false")},m(o,a){Ie(o,e,a),Ie(o,t,a),Ie(o,n,a),xi(n,i[1]),s||(r=[vt(e,"click",i[8]),vt(n,"input",i[10])],s=!0)},p(o,a){a[0]&2&&n.value!==o[1]&&xi(n,o[1])},d(o){o&&(De(e),De(t),De(n)),s=!1,An(r)}}}function Ix(i){let e,t,n=Object.values(i[0]).some(ah),s,r,o=Ut(i[4]),a=[];for(let f=0;f<o.length;f+=1)a[f]=sh(ih(i,o,f));let l=n&&rh();function c(f,d){return f[3]?Dx:Lx}let u=c(i),h=u(i);return{c(){e=$("div");for(let f=0;f<a.length;f+=1)a[f].c();t=ve(),l&&l.c(),s=ve(),r=$("div"),h.c(),W(r,"class","record-row svelte-1e9iyaw"),W(e,"class","traj-list svelte-1e9iyaw")},m(f,d){Ie(f,e,d);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(e,null);O(e,t),l&&l.m(e,null),O(e,s),O(e,r),h.m(r,null)},p(f,d){if(d[0]&117){o=Ut(f[4]);let g;for(g=0;g<o.length;g+=1){const _=ih(f,o,g);a[g]?a[g].p(_,d):(a[g]=sh(_),a[g].c(),a[g].m(e,t))}for(;g<a.length;g+=1)a[g].d(1);a.length=o.length}d[0]&1&&(n=Object.values(f[0]).some(ah)),n?l||(l=rh(),l.c(),l.m(e,s)):l&&(l.d(1),l=null),u===(u=c(f))&&h?h.p(f,d):(h.d(1),h=u(f),h&&(h.c(),h.m(r,null)))},i:Xt,o:Xt,d(f){f&&De(e),yn(a,f),l&&l.d(),h.d()}}}const Fa=.048,Oa=.012,ka=.005,Nx=.009,ir=1e5;function _s(i){return(i??0).toFixed(3)}function gi(i){return(i??0).toFixed(2)}function oh(){const i=new Date,e=t=>String(t).padStart(2,"0");return`${i.getFullYear()}_${e(i.getMonth()+1)}_${e(i.getDate())}_${e(i.getHours())}_${e(i.getMinutes())}.json`}const ah=i=>i;function Ux(i,e,t){let n,s,r;Ot(i,Ps,k=>t(2,n=k)),Ot(i,ur,k=>t(15,s=k)),Ot(i,Bo,k=>t(3,r=k));const o=[{key:"controller_l",label:"Controller",side:"Left",color:"#ff6b6b",hex:16739179,activeSide:"left"},{key:"controller_r",label:"Controller",side:"Right",color:"#4fa3f7",hex:5219319,activeSide:"right"},{key:"eef_l",label:"End Effector",side:"Left",color:"#57cc99",hex:5754009,activeSide:"left"},{key:"eef_r",label:"End Effector",side:"Right",color:"#f2cc8f",hex:15912079,activeSide:"right"}];function a(k){return s[k.activeSide]?k.color:"#ffffff"}function l(k){return s[k.activeSide]?k.hex:16777215}let c={controller_l:!1,controller_r:!1,eef_l:!1,eef_r:!1},u={},h={},f=null;const d=new G(1,0,0),g=new G(0,1,0),_=new G(0,0,1),m=new G(0,0,0);function p(k){const J=new ii;return J.add(new jt(new No(Nx,16,16),new Rl({color:k,emissive:k,emissiveIntensity:.6}))),J.add(new Ta(d,m,Fa,16720418,Oa,ka)),J.add(new Ta(g,m,Fa,2284868,Oa,ka)),J.add(new Ta(_,m,Fa,2263295,Oa,ka)),J}function v(k,J,le){if(!f)return;if(!(c[k]&&!!J)){u[k]&&(f.remove(u[k]),delete u[k]);return}u[k]||(u[k]=p(le??o.find(de=>de.key===k).hex),f.add(u[k])),u[k].position.set(J.x,J.y,J.z),u[k].quaternion.set(J.qx,J.qy,J.qz,J.qw)}function E(k){for(const J of o){const le=k[J.activeSide]?J.hex:16777215;u[J.key]&&(f==null||f.remove(u[J.key]),delete u[J.key]),v(J.key,ho(Ps)[J.key],le)}}function b(k){if(h[k])return;const J=new Float32Array(ir*3),le=new Float32Array(ir*3),ae=new qt;ae.setAttribute("position",new pn(J,3)),ae.setAttribute("color",new pn(le,3)),ae.setDrawRange(0,0);const de=new cr(ae,new Vi({size:.008,vertexColors:!0}));f==null||f.add(de),h[k]={positions:J,colors:le,count:0,pts:de}}function D(k,J,le){if(!f)return;b(k);const ae=h[k],de=ae.count%ir;ae.positions[de*3]=J.x,ae.positions[de*3+1]=J.y,ae.positions[de*3+2]=J.z,ae.colors[de*3]=(le>>16&255)/255,ae.colors[de*3+1]=(le>>8&255)/255,ae.colors[de*3+2]=(le&255)/255,ae.count++,ae.pts.geometry.setDrawRange(0,Math.min(ae.count,ir)),ae.pts.geometry.attributes.position.needsUpdate=!0,ae.pts.geometry.attributes.color.needsUpdate=!0}const T=Ps.subscribe(k=>{for(const J of o){const le=k[J.key];if(!le)continue;const ae=ho(ur)[J.activeSide]?J.hex:16777215;ho(Ms)||D(J.key,le,ae),v(J.key,le,ae)}});let L={left:!1,right:!1};const I=ur.subscribe(k=>{k.left===L.left&&k.right===L.right||(L=k,E(k))}),M=zo.subscribe(k=>{if(f=k,k)for(const J of Object.values(h))k.add(J.pts)}),S=px.subscribe(()=>{for(const k of Object.values(h))k.count=0,k.pts.geometry.setDrawRange(0,0),k.pts.geometry.attributes.position.needsUpdate=!0}),N=rr.subscribe(k=>{if(k)for(const[J,le]of Object.entries(k))!h[J]||le===0||(h[J].count=Math.max(0,h[J].count+le),h[J].pts.geometry.setDrawRange(0,Math.min(h[J].count,ir)),h[J].pts.geometry.attributes.position.needsUpdate=!0)});Kh(()=>{M(),T(),I(),S(),N(),f&&(Object.values(u).forEach(k=>f.remove(k)),Object.values(h).forEach(k=>f.remove(k.pts))),u={},h={}});function z(k){t(0,c={...c,[k]:!c[k]});const J=o.find(le=>le.key===k);v(k,n[k],l(J))}let V="";function Y(){t(1,V=oh()),mx()}function ne(){const k=gx(),J=V.trim()||oh(),le=new Blob([JSON.stringify(k,null,2)],{type:"application/json"}),ae=URL.createObjectURL(le),de=document.createElement("a");de.href=ae,de.download=J,de.click(),URL.revokeObjectURL(ae)}const F=k=>z(k.key);function te(){V=this.value,t(1,V)}return[c,V,n,r,o,a,z,Y,ne,F,te]}class Fx extends qi{constructor(e){super(),ji(this,e,Ux,Ix,Ai,{},null,[-1,-1])}}function lh(i,e,t){const n=i.slice();return n[40]=e[t],n}function ch(i,e,t){const n=i.slice();return n[43]=e[t],n}function Ox(i){let e;return{c(){e=$("div"),e.innerHTML='<span class="drop-icon svelte-91ia3q">⬆</span> <span class="drop-text svelte-91ia3q">Drop .json file here<br/>or click to browse</span>',W(e,"class","drop-hint svelte-91ia3q")},m(t,n){Ie(t,e,n)},p:Xt,d(t){t&&De(e)}}}function kx(i){let e,t,n,s,r=i[3].name+"",o,a,l,c=i[0].length.toLocaleString()+"",u,h;return{c(){e=$("div"),t=$("span"),t.textContent="📄",n=ve(),s=$("span"),o=Xe(r),a=ve(),l=$("span"),u=Xe(c),h=Xe(" steps"),W(t,"class","file-icon svelte-91ia3q"),W(s,"class","file-name svelte-91ia3q"),W(l,"class","step-count svelte-91ia3q"),W(e,"class","file-info svelte-91ia3q")},m(f,d){Ie(f,e,d),O(e,t),O(e,n),O(e,s),O(s,o),O(e,a),O(e,l),O(l,u),O(l,h)},p(f,d){d[0]&8&&r!==(r=f[3].name+"")&&dt(o,r),d[0]&1&&c!==(c=f[0].length.toLocaleString()+"")&&dt(u,c)},d(f){f&&De(e)}}}function uh(i){let e;return{c(){e=$("div"),e.textContent="Invalid or unreadable .json file.",W(e,"class","error-msg svelte-91ia3q")},m(t,n){Ie(t,e,n)},d(t){t&&De(e)}}}function hh(i){let e,t,n;function s(){return i[26](i[43])}return{c(){e=$("button"),e.textContent=`${i[43].label}`,W(e,"class","speed-btn svelte-91ia3q"),Pt(e,"selected",i[7]===i[43].value)},m(r,o){Ie(r,e,o),t||(n=vt(e,"click",s),t=!0)},p(r,o){i=r,o[0]&16512&&Pt(e,"selected",i[7]===i[43].value)},d(r){r&&De(e),t=!1,n()}}}function Bx(i){let e,t=i[1]==="paused"?"▶ Resume":"▶ Run",n,s,r,o;return{c(){e=$("button"),n=Xe(t),W(e,"class","run-btn svelte-91ia3q"),e.disabled=s=!i[3]||i[1]==="playing",Pt(e,"active",i[1]==="playing")},m(a,l){Ie(a,e,l),O(e,n),r||(o=vt(e,"click",i[15]),r=!0)},p(a,l){l[0]&2&&t!==(t=a[1]==="paused"?"▶ Resume":"▶ Run")&&dt(n,t),l[0]&10&&s!==(s=!a[3]||a[1]==="playing")&&(e.disabled=s),l[0]&2&&Pt(e,"active",a[1]==="playing")},d(a){a&&De(e),r=!1,o()}}}function zx(i){let e;return{c(){e=$("div"),e.textContent="✓ Completed",W(e,"class","completed-badge svelte-91ia3q")},m(t,n){Ie(t,e,n)},p:Xt,d(t){t&&De(e)}}}function fh(i){let e,t,n,s=i[0].length+"",r;return{c(){e=$("span"),t=Xe(i[2]),n=Xe(" / "),r=Xe(s),W(e,"class","progress-text svelte-91ia3q")},m(o,a){Ie(o,e,a),O(e,t),O(e,n),O(e,r)},p(o,a){a[0]&4&&dt(t,o[2]),a[0]&1&&s!==(s=o[0].length+"")&&dt(r,s)},d(o){o&&De(e)}}}function dh(i){let e,t;return{c(){e=$("div"),t=$("div"),W(t,"class","progress-fill svelte-91ia3q"),Hi(t,"width",i[10]+"%"),W(e,"class","progress-bar svelte-91ia3q")},m(n,s){Ie(n,e,s),O(e,t)},p(n,s){s[0]&1024&&Hi(t,"width",n[10]+"%")},d(n){n&&De(e)}}}function ph(i){let e,t,n,s,r,o,a,l,c,u;return{c(){e=$("div"),t=$("button"),n=Xe("⏸ Stop"),r=ve(),o=$("button"),o.textContent="-10 Step",a=ve(),l=$("button"),l.textContent="Reset",W(t,"class","sub-btn svelte-91ia3q"),t.disabled=s=i[1]!=="playing",W(t,"title","Pause"),W(o,"class","sub-btn svelte-91ia3q"),W(o,"title","Rewind 10 steps"),W(l,"class","sub-btn reset svelte-91ia3q"),W(l,"title","Reset to beginning"),W(e,"class","sub-controls svelte-91ia3q")},m(h,f){Ie(h,e,f),O(e,t),O(t,n),O(e,r),O(e,o),O(e,a),O(e,l),c||(u=[vt(t,"click",i[16]),vt(o,"click",i[17]),vt(l,"click",i[18])],c=!0)},p(h,f){f[0]&2&&s!==(s=h[1]!=="playing")&&(t.disabled=s)},d(h){h&&De(e),c=!1,An(u)}}}function mh(i){let e,t,n,s,r,o,a=i[0].length+"",l,c,u,h,f;return{c(){e=$("div"),t=$("input"),s=ve(),r=$("span"),o=Xe("/ "),l=Xe(a),c=ve(),u=$("button"),u.textContent="Go to Step",W(t,"class","goto-input svelte-91ia3q"),W(t,"type","number"),W(t,"min","1"),W(t,"max",n=i[0].length),W(r,"class","goto-total svelte-91ia3q"),W(u,"class","goto-btn svelte-91ia3q"),W(e,"class","goto-row svelte-91ia3q")},m(d,g){Ie(d,e,g),O(e,t),xi(t,i[8]),O(e,s),O(e,r),O(r,o),O(r,l),O(e,c),O(e,u),h||(f=[vt(t,"input",i[27]),vt(u,"click",i[19])],h=!0)},p(d,g){g[0]&1&&n!==(n=d[0].length)&&W(t,"max",n),g[0]&256&&Ls(t.value)!==d[8]&&xi(t,d[8]),g[0]&1&&a!==(a=d[0].length+"")&&dt(l,a)},d(d){d&&De(e),h=!1,An(f)}}}function gh(i){let e,t,n,s,r,o,a,l,c;function u(){return i[28](i[40])}return{c(){e=$("div"),t=$("span"),t.textContent=`${i[40].side}`,n=ve(),s=$("span"),s.textContent=`${i[40].label}`,r=ve(),o=$("div"),a=ve(),W(t,"class","viz-side svelte-91ia3q"),W(s,"class","viz-label svelte-91ia3q"),W(o,"class","toggle-dot svelte-91ia3q"),Pt(o,"on",i[9][i[40].key]),W(e,"class","viz-card svelte-91ia3q"),Hi(e,"--c",i[40].color),Pt(e,"active",i[9][i[40].key]),Pt(e,"no-file",!i[3])},m(h,f){Ie(h,e,f),O(e,t),O(e,n),O(e,s),O(e,r),O(e,o),O(e,a),l||(c=vt(e,"click",u),l=!0)},p(h,f){i=h,f[0]&1049088&&Pt(o,"on",i[9][i[40].key]),f[0]&1049088&&Pt(e,"active",i[9][i[40].key]),f[0]&8&&Pt(e,"no-file",!i[3])},d(h){h&&De(e),l=!1,c()}}}function Vx(i){let e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m,p,v,E,b,D,T,L,I,M,S;function N(X,H){return X[3]?kx:Ox}let z=N(i),V=z(i),Y=i[4]&&uh(),ne=Ut(i[14]),F=[];for(let X=0;X<ne.length;X+=1)F[X]=hh(ch(i,ne,X));function te(X,H){return X[1]==="completed"?zx:Bx}let k=te(i),J=k(i),le=i[11]&&fh(i),ae=i[11]&&dh(i),de=i[11]&&ph(i),ge=i[3]&&mh(i),K=Ut(i[20]),Q=[];for(let X=0;X<K.length;X+=1)Q[X]=gh(lh(i,K,X));return{c(){e=$("div"),t=$("div"),t.textContent="Trajectory File",n=ve(),s=$("div"),r=$("input"),o=ve(),V.c(),a=ve(),Y&&Y.c(),l=ve(),c=$("div"),c.textContent="Playback Speed",u=ve(),h=$("div");for(let X=0;X<F.length;X+=1)F[X].c();f=ve(),d=$("div"),d.textContent="Play Control",g=ve(),_=$("div"),m=$("div"),J.c(),p=ve(),le&&le.c(),v=ve(),ae&&ae.c(),E=ve(),de&&de.c(),b=ve(),ge&&ge.c(),D=ve(),T=$("div"),T.textContent="Visualize Trajectory",L=ve(),I=$("div");for(let X=0;X<Q.length;X+=1)Q[X].c();W(t,"class","section-label svelte-91ia3q"),W(r,"type","file"),W(r,"accept",".json"),r.hidden=!0,W(s,"class","drop-zone svelte-91ia3q"),Pt(s,"dragging",i[5]),Pt(s,"loaded",!!i[3]),W(c,"class","section-label svelte-91ia3q"),Hi(c,"margin-top","16px"),W(h,"class","speed-grid svelte-91ia3q"),W(d,"class","section-label svelte-91ia3q"),Hi(d,"margin-top","16px"),W(m,"class","run-row svelte-91ia3q"),W(_,"class","play-control svelte-91ia3q"),W(T,"class","section-label svelte-91ia3q"),Hi(T,"margin-top","16px"),W(I,"class","viz-list svelte-91ia3q"),W(e,"class","load-panel svelte-91ia3q")},m(X,H){Ie(X,e,H),O(e,t),O(e,n),O(e,s),O(s,r),i[22](r),O(s,o),V.m(s,null),O(e,a),Y&&Y.m(e,null),O(e,l),O(e,c),O(e,u),O(e,h);for(let se=0;se<F.length;se+=1)F[se]&&F[se].m(h,null);O(e,f),O(e,d),O(e,g),O(e,_),O(_,m),J.m(m,null),O(m,p),le&&le.m(m,null),O(_,v),ae&&ae.m(_,null),O(_,E),de&&de.m(_,null),O(_,b),ge&&ge.m(_,null),O(e,D),O(e,T),O(e,L),O(e,I);for(let se=0;se<Q.length;se+=1)Q[se]&&Q[se].m(I,null);M||(S=[vt(r,"change",i[12]),vt(s,"dragover",oc(i[23])),vt(s,"dragleave",i[24]),vt(s,"drop",oc(i[13])),vt(s,"click",i[25])],M=!0)},p(X,H){if(z===(z=N(X))&&V?V.p(X,H):(V.d(1),V=z(X),V&&(V.c(),V.m(s,null))),H[0]&32&&Pt(s,"dragging",X[5]),H[0]&8&&Pt(s,"loaded",!!X[3]),X[4]?Y||(Y=uh(),Y.c(),Y.m(e,l)):Y&&(Y.d(1),Y=null),H[0]&16512){ne=Ut(X[14]);let se;for(se=0;se<ne.length;se+=1){const Se=ch(X,ne,se);F[se]?F[se].p(Se,H):(F[se]=hh(Se),F[se].c(),F[se].m(h,null))}for(;se<F.length;se+=1)F[se].d(1);F.length=ne.length}if(k===(k=te(X))&&J?J.p(X,H):(J.d(1),J=k(X),J&&(J.c(),J.m(m,p))),X[11]?le?le.p(X,H):(le=fh(X),le.c(),le.m(m,null)):le&&(le.d(1),le=null),X[11]?ae?ae.p(X,H):(ae=dh(X),ae.c(),ae.m(_,E)):ae&&(ae.d(1),ae=null),X[11]?de?de.p(X,H):(de=ph(X),de.c(),de.m(_,b)):de&&(de.d(1),de=null),X[3]?ge?ge.p(X,H):(ge=mh(X),ge.c(),ge.m(_,null)):ge&&(ge.d(1),ge=null),H[0]&3146248){K=Ut(X[20]);let se;for(se=0;se<K.length;se+=1){const Se=lh(X,K,se);Q[se]?Q[se].p(Se,H):(Q[se]=gh(Se),Q[se].c(),Q[se].m(I,null))}for(;se<Q.length;se+=1)Q[se].d(1);Q.length=K.length}},i:Xt,o:Xt,d(X){X&&De(e),i[22](null),V.d(),Y&&Y.d(),yn(F,X),J.d(),le&&le.d(),ae&&ae.d(),de&&de.d(),ge&&ge.d(),yn(Q,X),M=!1,An(S)}}}const Hx=10,_h=200;function Ba(i){return new Promise(e=>setTimeout(e,Math.max(0,i)))}function vh(i){var e,t,n,s,r,o,a,l;return{controller_l:((t=(e=i==null?void 0:i.left)==null?void 0:e.controller)==null?void 0:t.length)>=7?1:0,controller_r:((s=(n=i==null?void 0:i.right)==null?void 0:n.controller)==null?void 0:s.length)>=7?1:0,eef_l:((o=(r=i==null?void 0:i.left)==null?void 0:r.eef)==null?void 0:o.length)>=7?1:0,eef_r:((l=(a=i==null?void 0:i.right)==null?void 0:a.eef)==null?void 0:l.length)>=7?1:0}}function Gx(i,e,t){let n,s,r=null,o=[],a=!1,l=!1,c;function u(H){if(!H)return;if(!H.name.endsWith(".json")){t(4,a=!0);return}const se=new FileReader;se.onload=Se=>{try{const Me=JSON.parse(Se.target.result);t(0,o=Object.values(Me)),t(3,r=H),t(4,a=!1),T(),J()}catch{t(3,r=null),t(0,o=[]),t(4,a=!0),T()}},se.readAsText(H)}function h(H){u(H.target.files[0])}function f(H){t(5,l=!1),u(H.dataTransfer.files[0])}const d=[{label:"x0.25",value:.25},{label:"x0.5",value:.5},{label:"x0.75",value:.75},{label:"Normal",value:1},{label:"x1.25",value:1.25},{label:"x1.5",value:1.5},{label:"x1.75",value:1.75}];let g=1,_="idle",m=0,p=0;async function v(H){for(;m<o.length;){if(p!==H)return;nr(o[m]);const se=o[m+1],Se=o[m],ct=(se&&Se.timestamp!=null&&se.timestamp!=null?se.timestamp-Se.timestamp:Hx)/g;if(await Ba(ct),p!==H)return;t(2,m++,m)}p===H&&t(1,_="completed")}function E(){if(!o.length)return;t(1,_="playing");const H=++p;v(H)}function b(){p++,t(1,_="paused")}function D(){const H=_==="playing";p++;const se=Math.max(0,m-10),Se={controller_l:0,controller_r:0,eef_l:0,eef_r:0};for(let Me=m;Me>se;Me--){const ct=vh(o[Me]);for(const We of Object.keys(Se))Se[We]-=ct[We]}rr.set(Se),rr.set(null),Ms.set(!0),t(2,m=se),nr(o[m]),Ms.set(!1),H&&(t(1,_="playing"),v(++p))}function T(){p++,t(1,_="idle"),t(2,m=0)}let L=1;async function I(H,se){for(;m<se;){if(p!==H)return;const Se=Math.min(m+_h,se);for(let Me=m;Me<Se;Me++)nr(o[Me]);t(2,m=Se),await Ba(0)}nr(o[m]),p===H&&t(1,_=m>=o.length-1?"completed":"paused")}async function M(H,se){for(Ms.set(!0);m>se;){if(p!==H){Ms.set(!1);return}const Se=Math.max(m-_h,se),Me={controller_l:0,controller_r:0,eef_l:0,eef_r:0};for(let ct=m;ct>Se;ct--){const We=vh(o[ct]);for(const je of Object.keys(Me))Me[je]-=We[je]}rr.set(Me),rr.set(null),t(2,m=Se),nr(o[m]),await Ba(0)}Ms.set(!1),p===H&&t(1,_=m>=o.length-1?"completed":"paused")}async function S(){if(!o.length)return;const H=Math.max(0,Math.min(L-1,o.length-1));p++,t(1,_="playing");const se=++p;H<m?await M(se,H):await I(se,H)}const N=[{key:"controller_l",label:"Controller",side:"Left",color:"#ff6b6b",hex:16739179,activeSide:"left"},{key:"eef_l",label:"End Effector",side:"Left",color:"#57cc99",hex:5754009,activeSide:"left"},{key:"controller_r",label:"Controller",side:"Right",color:"#4fa3f7",hex:5219319,activeSide:"right"},{key:"eef_r",label:"End Effector",side:"Right",color:"#f2cc8f",hex:15912079,activeSide:"right"}];let z={controller_l:!1,eef_l:!1,controller_r:!1,eef_r:!1},V={},Y=null;const ne=zo.subscribe(H=>{if(Y=H,H)for(const se of Object.values(V))H.add(se)});function F(H){var ct,We,je,B;const se=[],Se=[];for(const $e of o){let Ve=null;if(H.key==="controller_l"?Ve=(ct=$e.left)==null?void 0:ct.controller:H.key==="eef_l"?Ve=(We=$e.left)==null?void 0:We.eef:H.key==="controller_r"?Ve=(je=$e.right)==null?void 0:je.controller:H.key==="eef_r"&&(Ve=(B=$e.right)==null?void 0:B.eef),!Ve||Ve.length<3)continue;se.push(Ve[0],Ve[1],Ve[2]);const Fe=($e.activated?!!$e.activated[H.activeSide]:!0)?H.hex:16777215;Se.push((Fe>>16&255)/255,(Fe>>8&255)/255,(Fe&255)/255)}if(!se.length)return null;const Me=new qt;return Me.setAttribute("position",new yt(se,3)),Me.setAttribute("color",new yt(Se,3)),new cr(Me,new Vi({size:.008,vertexColors:!0}))}function te(H,se){if(V[H]&&(Y==null||Y.remove(V[H]),delete V[H]),se){const Se=N.find(ct=>ct.key===H),Me=F(Se);Me?(V[H]=Me,Y==null||Y.add(Me)):t(9,z={...z,[H]:!1})}}function k(H){t(9,z={...z,[H]:!z[H]}),te(H,z[H])}function J(){for(const H of N)te(H.key,z[H.key])}Kh(()=>{ne(),Y&&Object.values(V).forEach(H=>Y.remove(H)),V={}});function le(H){fr[H?"unshift":"push"](()=>{c=H,t(6,c)})}const ae=()=>t(5,l=!0),de=()=>t(5,l=!1),ge=()=>c.click(),K=H=>t(7,g=H.value);function Q(){L=Ls(this.value),t(8,L)}const X=H=>r&&k(H.key);return i.$$.update=()=>{i.$$.dirty[0]&2&&t(11,n=_==="playing"||_==="paused"||_==="completed"),i.$$.dirty[0]&5&&t(10,s=o.length?Math.round(m/o.length*100):0)},[o,_,m,r,a,l,c,g,L,z,s,n,h,f,d,E,b,D,T,S,N,k,le,ae,de,ge,K,Q,X]}class Wx extends qi{constructor(e){super(),ji(this,e,Gx,Vx,Ai,{},null,[-1,-1])}}function xh(i,e,t){const n=i.slice();return n[15]=e[t],n}function yh(i,e,t){const n=i.slice();n[18]=e[t];const s=Math.max(Math.abs(n[18].min??-3.14),Math.abs(n[18].max??3.14));n[19]=s;const r=-n[19];n[20]=r;const o=n[19];n[21]=o;const a=n[0][n[18].name]??0;return n[22]=a,n}function Mh(i){let e,t=Ut(i[15].joints),n=[];for(let s=0;s<t.length;s+=1)n[s]=bh(yh(i,t,s));return{c(){e=$("div");for(let s=0;s<n.length;s+=1)n[s].c();W(e,"class","joint-list svelte-nxtjtq")},m(s,r){Ie(s,e,r);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(s,r){if(r&249){t=Ut(s[15].joints);let o;for(o=0;o<t.length;o+=1){const a=yh(s,t,o);n[o]?n[o].p(a,r):(n[o]=bh(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(s){s&&De(e),yn(n,s)}}}function bh(i){let e,t,n,s=i[18].name+"",r,o,a,l,c,u,h,f,d,g,_=i[20].toFixed(2)+"",m,p,v,E,b,D,T,L,I,M=i[21].toFixed(2)+"",S,N,z;function V(...F){return i[12](i[18],i[20],i[21],...F)}function Y(...F){return i[13](i[18],...F)}function ne(...F){return i[14](i[18],...F)}return{c(){e=$("div"),t=$("div"),n=$("span"),r=Xe(s),o=ve(),a=$("input"),f=ve(),d=$("div"),g=$("span"),m=Xe(_),p=ve(),v=$("input"),L=ve(),I=$("span"),S=Xe(M),W(n,"class","joint-name svelte-nxtjtq"),W(a,"type","number"),W(a,"class","joint-val-input svelte-nxtjtq"),W(a,"min",l=i[20]),W(a,"max",c=i[21]),W(a,"step","0.001"),a.value=u=i[22].toFixed(3),a.disabled=h=!i[4],W(t,"class","joint-meta svelte-nxtjtq"),W(g,"class","limit svelte-nxtjtq"),W(v,"type","range"),W(v,"min",E=i[20]),W(v,"max",b=i[21]),W(v,"step","0.001"),v.value=D=i[22],v.disabled=T=!i[4],W(v,"title","더블클릭으로 초기화"),W(v,"class","svelte-nxtjtq"),W(I,"class","limit svelte-nxtjtq"),W(d,"class","slider-wrap svelte-nxtjtq"),W(e,"class","joint-row svelte-nxtjtq")},m(F,te){Ie(F,e,te),O(e,t),O(t,n),O(n,r),O(t,o),O(t,a),O(e,f),O(e,d),O(d,g),O(g,m),O(d,p),O(d,v),O(d,L),O(d,I),O(I,S),N||(z=[vt(a,"change",V),vt(v,"input",Y),vt(v,"dblclick",ne)],N=!0)},p(F,te){i=F,te&8&&s!==(s=i[18].name+"")&&dt(r,s),te&8&&l!==(l=i[20])&&W(a,"min",l),te&8&&c!==(c=i[21])&&W(a,"max",c),te&9&&u!==(u=i[22].toFixed(3))&&a.value!==u&&(a.value=u),te&16&&h!==(h=!i[4])&&(a.disabled=h),te&8&&_!==(_=i[20].toFixed(2)+"")&&dt(m,_),te&8&&E!==(E=i[20])&&W(v,"min",E),te&8&&b!==(b=i[21])&&W(v,"max",b),te&9&&D!==(D=i[22])&&(v.value=D),te&16&&T!==(T=!i[4])&&(v.disabled=T),te&8&&M!==(M=i[21].toFixed(2)+"")&&dt(S,M)},d(F){F&&De(e),N=!1,An(z)}}}function Sh(i){let e,t,n=i[15].name+"",s,r,o,a=i[2][i[15].name]?"-":"+",l,c,u,h;function f(){return i[11](i[15])}let d=i[2][i[15].name]&&Mh(i);return{c(){e=$("div"),t=$("h4"),s=Xe(n),r=ve(),o=$("span"),l=Xe(a),c=ve(),d&&d.c(),W(o,"class","toggle-icon svelte-nxtjtq"),W(t,"class","category-header svelte-nxtjtq"),W(e,"class","category-section")},m(g,_){Ie(g,e,_),O(e,t),O(t,s),O(t,r),O(t,o),O(o,l),O(e,c),d&&d.m(e,null),u||(h=vt(t,"click",f),u=!0)},p(g,_){i=g,_&8&&n!==(n=i[15].name+"")&&dt(s,n),_&12&&a!==(a=i[2][i[15].name]?"-":"+")&&dt(l,a),i[2][i[15].name]?d?d.p(i,_):(d=Mh(i),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(g){g&&De(e),d&&d.d(),u=!1,h()}}}function Eh(i){let e;return{c(){e=$("div"),e.textContent="Robot not loaded yet...",W(e,"class","empty svelte-nxtjtq")},m(t,n){Ie(t,e,n)},d(t){t&&De(e)}}}function Xx(i){let e,t,n,s,r,o,a,l=i[4]?"Manual Mode — Robot sync paused":"Manual Mode",c,u,h,f,d,g,_=Ut(i[3]),m=[];for(let v=0;v<_.length;v+=1)m[v]=Sh(xh(i,_,v));let p=i[1].length===0&&Eh();return{c(){e=$("div"),t=$("label"),n=$("input"),s=ve(),r=$("span"),r.innerHTML='<span class="toggle-thumb svelte-nxtjtq"></span>',o=ve(),a=$("span"),c=Xe(l),u=ve(),h=$("div");for(let v=0;v<m.length;v+=1)m[v].c();f=ve(),p&&p.c(),W(n,"type","checkbox"),W(n,"class","svelte-nxtjtq"),W(r,"class","toggle-track svelte-nxtjtq"),W(a,"class","toggle-label svelte-nxtjtq"),W(t,"class","manual-toggle svelte-nxtjtq"),W(e,"class","control-header svelte-nxtjtq"),W(h,"class","pose-categories svelte-nxtjtq")},m(v,E){Ie(v,e,E),O(e,t),O(t,n),n.checked=i[4],O(t,s),O(t,r),O(t,o),O(t,a),O(a,c),Ie(v,u,E),Ie(v,h,E);for(let b=0;b<m.length;b+=1)m[b]&&m[b].m(h,null);O(h,f),p&&p.m(h,null),d||(g=vt(n,"change",i[10]),d=!0)},p(v,[E]){if(E&16&&(n.checked=v[4]),E&16&&l!==(l=v[4]?"Manual Mode — Robot sync paused":"Manual Mode")&&dt(c,l),E&509){_=Ut(v[3]);let b;for(b=0;b<_.length;b+=1){const D=xh(v,_,b);m[b]?m[b].p(D,E):(m[b]=Sh(D),m[b].c(),m[b].m(h,f))}for(;b<m.length;b+=1)m[b].d(1);m.length=_.length}v[1].length===0?p||(p=Eh(),p.c(),p.m(h,null)):p&&(p.d(1),p=null)},i:Xt,o:Xt,d(v){v&&(De(e),De(u),De(h)),yn(m,v),p&&p.d(),d=!1,g()}}}function jx(i,e,t){let n,s,r,o;Ot(i,Sr,v=>t(1,s=v)),Ot(i,wi,v=>t(9,r=v)),Ot(i,xr,v=>t(4,o=v));let a={};function l(v,E){const b=parseFloat(E.target.value);t(0,a[v]=b,a),t(0,a),t(1,s),t(9,r),Mo(v,b)}function c(v,E,b,D){let T=parseFloat(E);isNaN(T)&&(T=0),T=Math.max(b,Math.min(D,T)),t(0,a[v]=T,a),t(0,a),t(1,s),t(9,r),Mo(v,T)}function u(v,E){E.preventDefault(),t(0,a[v]=0,a),t(0,a),t(1,s),t(9,r),Mo(v,0)}let h={};function f(v){t(2,h[v]=!h[v],h)}function d(){o=this.checked,xr.set(o)}const g=v=>f(v.name),_=(v,E,b,D)=>c(v.name,D.target.value,E,b),m=(v,E)=>l(v.name,E),p=(v,E)=>u(v.name,E);return i.$$.update=()=>{i.$$.dirty&515&&s.forEach(v=>{v.name in a||t(0,a[v.name]=r[v.name]??0,a)}),i.$$.dirty&513&&t(0,a={...a,...r}),i.$$.dirty&2&&t(3,n=[{name:"BASE",joints:s.filter(v=>!v.name.startsWith("arm_l_")&&!v.name.startsWith("arm_r_")&&!v.name.startsWith("finger_l_")&&!v.name.startsWith("finger_r_")).sort((v,E)=>v.name.localeCompare(E.name))},{name:"ARM - Left",joints:s.filter(v=>v.name.startsWith("arm_l_")).sort((v,E)=>v.name.localeCompare(E.name))},{name:"ARM - Right",joints:s.filter(v=>v.name.startsWith("arm_r_")).sort((v,E)=>v.name.localeCompare(E.name))},{name:"Hand - Left",joints:s.filter(v=>v.name.startsWith("finger_l_")).sort((v,E)=>v.name.localeCompare(E.name))},{name:"Hand - Right",joints:s.filter(v=>v.name.startsWith("finger_r_")).sort((v,E)=>v.name.localeCompare(E.name))}].filter(v=>v.joints.length>0))},[a,s,h,n,o,l,c,u,f,r,d,g,_,m,p]}class qx extends qi{constructor(e){super(),ji(this,e,jx,Xx,Ai,{})}}function Th(i,e,t){const n=i.slice();return n[29]=e[t][0],n[30]=e[t][1],n}function wh(i,e,t){const n=i.slice();return n[29]=e[t][0],n[30]=e[t][1],n}function Ah(i,e,t){const n=i.slice();return n[29]=e[t][0],n[30]=e[t][1],n}function Rh(i,e,t){const n=i.slice();return n[29]=e[t][0],n[30]=e[t][1],n}function Ch(i,e,t){const n=i.slice();return n[29]=e[t][0],n[30]=e[t][1],n}function Ph(i){let e,t,n,s,r,o,a,l,c=i[5].length>0&&Lh(i),u=i[4].length>0&&Ih(i),h=i[3].length>0&&Uh(i),f=i[2].length>0&&Oh(i),d=i[1].length>0&&Bh(i);return{c(){e=$("div"),t=$("div"),c&&c.c(),n=ve(),s=$("div"),u&&u.c(),r=ve(),h&&h.c(),o=ve(),a=$("div"),f&&f.c(),l=ve(),d&&d.c(),W(t,"class","info-column svelte-vn16y"),W(s,"class","info-column svelte-vn16y"),W(a,"class","info-column svelte-vn16y"),W(e,"class","joint-info-overlay svelte-vn16y")},m(g,_){Ie(g,e,_),O(e,t),c&&c.m(t,null),O(e,n),O(e,s),u&&u.m(s,null),O(s,r),h&&h.m(s,null),O(e,o),O(e,a),f&&f.m(a,null),O(a,l),d&&d.m(a,null)},p(g,_){g[5].length>0?c?c.p(g,_):(c=Lh(g),c.c(),c.m(t,null)):c&&(c.d(1),c=null),g[4].length>0?u?u.p(g,_):(u=Ih(g),u.c(),u.m(s,r)):u&&(u.d(1),u=null),g[3].length>0?h?h.p(g,_):(h=Uh(g),h.c(),h.m(s,null)):h&&(h.d(1),h=null),g[2].length>0?f?f.p(g,_):(f=Oh(g),f.c(),f.m(a,l)):f&&(f.d(1),f=null),g[1].length>0?d?d.p(g,_):(d=Bh(g),d.c(),d.m(a,null)):d&&(d.d(1),d=null)},d(g){g&&De(e),c&&c.d(),u&&u.d(),h&&h.d(),f&&f.d(),d&&d.d()}}}function Lh(i){let e,t,n,s=Ut(i[5]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Dh(Ch(i,s,o));return{c(){e=$("div"),t=$("div"),t.textContent="[BASE]",n=ve();for(let o=0;o<r.length;o+=1)r[o].c();W(t,"class","info-header svelte-vn16y"),W(e,"class","info-section svelte-vn16y")},m(o,a){Ie(o,e,a),O(e,t),O(e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p(o,a){if(a[0]&32){s=Ut(o[5]);let l;for(l=0;l<s.length;l+=1){const c=Ch(o,s,l);r[l]?r[l].p(c,a):(r[l]=Dh(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},d(o){o&&De(e),yn(r,o)}}}function Dh(i){let e,t=i[29]+"",n,s,r=(i[30]||0).toFixed(3)+"",o;return{c(){e=$("div"),n=Xe(t),s=Xe(": "),o=Xe(r),W(e,"class","info-item svelte-vn16y")},m(a,l){Ie(a,e,l),O(e,n),O(e,s),O(e,o)},p(a,l){l[0]&32&&t!==(t=a[29]+"")&&dt(n,t),l[0]&32&&r!==(r=(a[30]||0).toFixed(3)+"")&&dt(o,r)},d(a){a&&De(e)}}}function Ih(i){let e,t,n,s=Ut(i[4]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Nh(Rh(i,s,o));return{c(){e=$("div"),t=$("div"),t.textContent="[ARM - Left]",n=ve();for(let o=0;o<r.length;o+=1)r[o].c();W(t,"class","info-header svelte-vn16y"),W(e,"class","info-section svelte-vn16y")},m(o,a){Ie(o,e,a),O(e,t),O(e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p(o,a){if(a[0]&16){s=Ut(o[4]);let l;for(l=0;l<s.length;l+=1){const c=Rh(o,s,l);r[l]?r[l].p(c,a):(r[l]=Nh(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},d(o){o&&De(e),yn(r,o)}}}function Nh(i){let e,t=i[29]+"",n,s,r=(i[30]||0).toFixed(3)+"",o;return{c(){e=$("div"),n=Xe(t),s=Xe(": "),o=Xe(r),W(e,"class","info-item svelte-vn16y")},m(a,l){Ie(a,e,l),O(e,n),O(e,s),O(e,o)},p(a,l){l[0]&16&&t!==(t=a[29]+"")&&dt(n,t),l[0]&16&&r!==(r=(a[30]||0).toFixed(3)+"")&&dt(o,r)},d(a){a&&De(e)}}}function Uh(i){let e,t,n,s=Ut(i[3]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Fh(Ah(i,s,o));return{c(){e=$("div"),t=$("div"),t.textContent="[ARM - Right]",n=ve();for(let o=0;o<r.length;o+=1)r[o].c();W(t,"class","info-header svelte-vn16y"),W(e,"class","info-section svelte-vn16y")},m(o,a){Ie(o,e,a),O(e,t),O(e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p(o,a){if(a[0]&8){s=Ut(o[3]);let l;for(l=0;l<s.length;l+=1){const c=Ah(o,s,l);r[l]?r[l].p(c,a):(r[l]=Fh(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},d(o){o&&De(e),yn(r,o)}}}function Fh(i){let e,t=i[29]+"",n,s,r=(i[30]||0).toFixed(3)+"",o;return{c(){e=$("div"),n=Xe(t),s=Xe(": "),o=Xe(r),W(e,"class","info-item svelte-vn16y")},m(a,l){Ie(a,e,l),O(e,n),O(e,s),O(e,o)},p(a,l){l[0]&8&&t!==(t=a[29]+"")&&dt(n,t),l[0]&8&&r!==(r=(a[30]||0).toFixed(3)+"")&&dt(o,r)},d(a){a&&De(e)}}}function Oh(i){let e,t,n,s=Ut(i[2]),r=[];for(let o=0;o<s.length;o+=1)r[o]=kh(wh(i,s,o));return{c(){e=$("div"),t=$("div"),t.textContent="[Hand - Left]",n=ve();for(let o=0;o<r.length;o+=1)r[o].c();W(t,"class","info-header svelte-vn16y"),W(e,"class","info-section svelte-vn16y")},m(o,a){Ie(o,e,a),O(e,t),O(e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p(o,a){if(a[0]&4){s=Ut(o[2]);let l;for(l=0;l<s.length;l+=1){const c=wh(o,s,l);r[l]?r[l].p(c,a):(r[l]=kh(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},d(o){o&&De(e),yn(r,o)}}}function kh(i){let e,t=i[29]+"",n,s,r=(i[30]||0).toFixed(3)+"",o;return{c(){e=$("div"),n=Xe(t),s=Xe(": "),o=Xe(r),W(e,"class","info-item svelte-vn16y")},m(a,l){Ie(a,e,l),O(e,n),O(e,s),O(e,o)},p(a,l){l[0]&4&&t!==(t=a[29]+"")&&dt(n,t),l[0]&4&&r!==(r=(a[30]||0).toFixed(3)+"")&&dt(o,r)},d(a){a&&De(e)}}}function Bh(i){let e,t,n,s=Ut(i[1]),r=[];for(let o=0;o<s.length;o+=1)r[o]=zh(Th(i,s,o));return{c(){e=$("div"),t=$("div"),t.textContent="[Hand - Right]",n=ve();for(let o=0;o<r.length;o+=1)r[o].c();W(t,"class","info-header svelte-vn16y"),W(e,"class","info-section svelte-vn16y")},m(o,a){Ie(o,e,a),O(e,t),O(e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null)},p(o,a){if(a[0]&2){s=Ut(o[1]);let l;for(l=0;l<s.length;l+=1){const c=Th(o,s,l);r[l]?r[l].p(c,a):(r[l]=zh(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},d(o){o&&De(e),yn(r,o)}}}function zh(i){let e,t=i[29]+"",n,s,r=(i[30]||0).toFixed(3)+"",o;return{c(){e=$("div"),n=Xe(t),s=Xe(": "),o=Xe(r),W(e,"class","info-item svelte-vn16y")},m(a,l){Ie(a,e,l),O(e,n),O(e,s),O(e,o)},p(a,l){l[0]&2&&t!==(t=a[29]+"")&&dt(n,t),l[0]&2&&r!==(r=(a[30]||0).toFixed(3)+"")&&dt(o,r)},d(a){a&&De(e)}}}function Vh(i){let e,t,n,s,r,o,a,l,c;return{c(){e=$("input"),t=ve(),n=$("span"),n.textContent="m",s=ve(),r=$("input"),o=ve(),a=$("span"),a.textContent="opacity",W(e,"class","hplane-input svelte-vn16y"),W(e,"type","number"),W(e,"step","0.01"),W(n,"class","hplane-unit svelte-vn16y"),W(r,"class","hplane-input svelte-vn16y"),W(r,"type","number"),W(r,"min","0"),W(r,"max","1"),W(r,"step","0.01"),W(a,"class","hplane-unit svelte-vn16y")},m(u,h){Ie(u,e,h),xi(e,i[12]),Ie(u,t,h),Ie(u,n,h),Ie(u,s,h),Ie(u,r,h),xi(r,i[13]),Ie(u,o,h),Ie(u,a,h),l||(c=[vt(e,"input",i[27]),vt(r,"input",i[28])],l=!0)},p(u,h){h[0]&4096&&Ls(e.value)!==u[12]&&xi(e,u[12]),h[0]&8192&&Ls(r.value)!==u[13]&&xi(r,u[13])},d(u){u&&(De(e),De(t),De(n),De(s),De(r),De(o),De(a)),l=!1,An(c)}}}function Hh(i){let e,t,n,s,r,o,a;return t=new nh({props:{side:"left"}}),o=new nh({props:{side:"right"}}),{c(){e=$("div"),Gi(t.$$.fragment),n=ve(),s=$("div"),r=ve(),Gi(o.$$.fragment),W(s,"class","hand-divider svelte-vn16y"),W(e,"class","hand-panel svelte-vn16y")},m(l,c){Ie(l,e,c),Si(t,e,null),O(e,n),O(e,s),O(e,r),Si(o,e,null),a=!0},i(l){a||(En(t.$$.fragment,l),En(o.$$.fragment,l),a=!0)},o(l){Fn(t.$$.fragment,l),Fn(o.$$.fragment,l),a=!1},d(l){l&&De(e),Ei(t),Ei(o)}}}function Yx(i){let e,t;return e=new qx({}),{c(){Gi(e.$$.fragment)},m(n,s){Si(e,n,s),t=!0},i(n){t||(En(e.$$.fragment,n),t=!0)},o(n){Fn(e.$$.fragment,n),t=!1},d(n){Ei(e,n)}}}function Kx(i){let e,t;return e=new Wx({}),{c(){Gi(e.$$.fragment)},m(n,s){Si(e,n,s),t=!0},i(n){t||(En(e.$$.fragment,n),t=!0)},o(n){Fn(e.$$.fragment,n),t=!1},d(n){Ei(e,n)}}}function Zx(i){let e,t;return e=new Fx({}),{c(){Gi(e.$$.fragment)},m(n,s){Si(e,n,s),t=!0},i(n){t||(En(e.$$.fragment,n),t=!0)},o(n){Fn(e.$$.fragment,n),t=!1},d(n){Ei(e,n)}}}function Jx(i){let e,t;return e=new wx({}),{c(){Gi(e.$$.fragment)},m(n,s){Si(e,n,s),t=!0},i(n){t||(En(e.$$.fragment,n),t=!0)},o(n){Fn(e.$$.fragment,n),t=!1},d(n){Ei(e,n)}}}function $x(i){let e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m,p,v,E,b,D,T,L,I,M,S,N,z,V,Y,ne,F,te,k,J,le,ae,de,ge,K,Q,X,H,se,Se,Me,ct,We,je,B,$e,Ve,ut,Fe;n=new bx({});let lt=i[6]&&Ph(i),Ee=i[11]&&Vh(i),U=i[0]&&Hh();const w=[Jx,Zx,Kx,Yx],ee=[];function pe(ce,ue){return ce[7]==="sync"?0:ce[7]==="traj"?1:ce[7]==="load"?2:ce[7]==="control"?3:-1}return~(B=pe(i))&&($e=ee[B]=w[B](i)),{c(){e=$("div"),t=$("div"),Gi(n.$$.fragment),s=ve(),r=$("div"),o=$("div"),o.innerHTML='<span class="drama-logo svelte-vn16y">DRAMA</span> <span class="drama-full svelte-vn16y">Dashboard for Robotic Arm &amp; Manipulator Admin</span>',a=ve(),l=$("div"),c=$("div"),u=$("button"),u.textContent="Sync with Robot",h=ve(),f=$("button"),f.textContent="See Trajectory",d=ve(),g=$("button"),g.textContent="Load Trajectory",_=ve(),m=$("button"),m.textContent="Control Joints",p=ve(),lt&&lt.c(),v=ve(),E=$("div"),b=$("label"),D=$("input"),T=Xe(`
      Joint Info`),L=ve(),I=$("label"),M=$("input"),S=Xe(`
      Hand View`),N=ve(),z=$("label"),V=$("input"),Y=Xe(`
      Rotate View`),ne=ve(),F=$("div"),te=$("label"),k=$("input"),J=Xe(`
        Grid`),le=ve(),ae=$("label"),de=$("input"),ge=Xe(`
        Ground`),K=ve(),Q=$("div"),X=$("label"),H=$("input"),se=Xe(`
        H-Plane`),Se=ve(),Ee&&Ee.c(),Me=ve(),U&&U.c(),ct=ve(),We=$("div"),je=$("div"),$e&&$e.c(),W(t,"class","viewer-bg svelte-vn16y"),Pt(t,"blurred",i[6]),W(o,"class","title-block svelte-vn16y"),W(u,"class","tab svelte-vn16y"),Pt(u,"active",i[7]==="sync"),W(f,"class","tab svelte-vn16y"),Pt(f,"active",i[7]==="traj"),W(g,"class","tab svelte-vn16y"),Pt(g,"active",i[7]==="load"),W(m,"class","tab svelte-vn16y"),Pt(m,"active",i[7]==="control"),W(c,"class","tab-bar svelte-vn16y"),W(l,"class","control-panel svelte-vn16y"),W(r,"class","info-panel svelte-vn16y"),W(D,"type","checkbox"),W(D,"class","svelte-vn16y"),W(b,"class","text-toggle svelte-vn16y"),W(M,"type","checkbox"),W(M,"class","svelte-vn16y"),W(I,"class","text-toggle svelte-vn16y"),W(V,"type","checkbox"),W(V,"class","svelte-vn16y"),W(z,"class","text-toggle svelte-vn16y"),W(k,"type","checkbox"),W(k,"class","svelte-vn16y"),W(te,"class","text-toggle svelte-vn16y"),W(de,"type","checkbox"),W(de,"class","svelte-vn16y"),W(ae,"class","text-toggle svelte-vn16y"),W(F,"class","horizontal-toggles svelte-vn16y"),W(H,"type","checkbox"),W(H,"class","svelte-vn16y"),W(X,"class","text-toggle svelte-vn16y"),W(Q,"class","hplane-row svelte-vn16y"),W(E,"class","bottom-left-panel svelte-vn16y"),W(je,"class","tab-body svelte-vn16y"),W(We,"class","right-panel svelte-vn16y"),W(e,"class","app svelte-vn16y")},m(ce,ue){Ie(ce,e,ue),O(e,t),Si(n,t,null),O(e,s),O(e,r),O(r,o),O(r,a),O(r,l),O(l,c),O(c,u),O(c,h),O(c,f),O(c,d),O(c,g),O(c,_),O(c,m),O(e,p),lt&&lt.m(e,null),O(e,v),O(e,E),O(E,b),O(b,D),D.checked=i[6],O(b,T),O(E,L),O(E,I),O(I,M),M.checked=i[0],O(I,S),O(E,N),O(E,z),O(z,V),V.checked=i[8],O(z,Y),O(E,ne),O(E,F),O(F,te),O(te,k),k.checked=i[9],O(te,J),O(F,le),O(F,ae),O(ae,de),de.checked=i[10],O(ae,ge),O(E,K),O(E,Q),O(Q,X),O(X,H),H.checked=i[11],O(X,se),O(Q,Se),Ee&&Ee.m(Q,null),O(e,Me),U&&U.m(e,null),O(e,ct),O(e,We),O(We,je),~B&&ee[B].m(je,null),Ve=!0,ut||(Fe=[vt(u,"click",i[17]),vt(f,"click",i[18]),vt(g,"click",i[19]),vt(m,"click",i[20]),vt(D,"change",i[21]),vt(M,"change",i[22]),vt(V,"change",i[23]),vt(k,"change",i[24]),vt(de,"change",i[25]),vt(H,"change",i[26])],ut=!0)},p(ce,ue){(!Ve||ue[0]&64)&&Pt(t,"blurred",ce[6]),(!Ve||ue[0]&128)&&Pt(u,"active",ce[7]==="sync"),(!Ve||ue[0]&128)&&Pt(f,"active",ce[7]==="traj"),(!Ve||ue[0]&128)&&Pt(g,"active",ce[7]==="load"),(!Ve||ue[0]&128)&&Pt(m,"active",ce[7]==="control"),ce[6]?lt?lt.p(ce,ue):(lt=Ph(ce),lt.c(),lt.m(e,v)):lt&&(lt.d(1),lt=null),ue[0]&64&&(D.checked=ce[6]),ue[0]&1&&(M.checked=ce[0]),ue[0]&256&&(V.checked=ce[8]),ue[0]&512&&(k.checked=ce[9]),ue[0]&1024&&(de.checked=ce[10]),ue[0]&2048&&(H.checked=ce[11]),ce[11]?Ee?Ee.p(ce,ue):(Ee=Vh(ce),Ee.c(),Ee.m(Q,null)):Ee&&(Ee.d(1),Ee=null),ce[0]?U?ue[0]&1&&En(U,1):(U=Hh(),U.c(),En(U,1),U.m(e,ct)):U&&(lc(),Fn(U,1,1,()=>{U=null}),cc());let He=B;B=pe(ce),B!==He&&($e&&(lc(),Fn(ee[He],1,1,()=>{ee[He]=null}),cc()),~B?($e=ee[B],$e||($e=ee[B]=w[B](ce),$e.c()),En($e,1),$e.m(je,null)):$e=null)},i(ce){Ve||(En(n.$$.fragment,ce),En(U),En($e),Ve=!0)},o(ce){Fn(n.$$.fragment,ce),Fn(U),Fn($e),Ve=!1},d(ce){ce&&De(e),Ei(n),lt&&lt.d(),Ee&&Ee.d(),U&&U.d(),~B&&ee[B].d(),ut=!1,An(Fe)}}}function Qx(i,e,t){let n,s,r,o,a,l,c,u,h,f,d,g,_,m,p,v;Ot(i,wi,F=>t(15,c=F)),Ot(i,Sr,F=>t(16,u=F)),Ot(i,Hu,F=>t(6,h=F)),Ot(i,bs,F=>t(7,f=F)),Ot(i,Nl,F=>t(8,d=F)),Ot(i,Il,F=>t(9,g=F)),Ot(i,Dl,F=>t(10,_=F)),Ot(i,Ul,F=>t(11,m=F)),Ot(i,Fl,F=>t(12,p=F)),Ot(i,Ol,F=>t(13,v=F));let E=!1;const b=()=>Pr(bs,f="sync",f),D=()=>Pr(bs,f="traj",f),T=()=>Pr(bs,f="load",f),L=()=>Pr(bs,f="control",f);function I(){h=this.checked,Hu.set(h)}function M(){E=this.checked,t(0,E)}function S(){d=this.checked,Nl.set(d)}function N(){g=this.checked,Il.set(g)}function z(){_=this.checked,Dl.set(_)}function V(){m=this.checked,Ul.set(m)}function Y(){p=Ls(this.value),Fl.set(p)}function ne(){v=Ls(this.value),Ol.set(v)}return i.$$.update=()=>{i.$$.dirty[0]&98304&&t(14,n=u.map(F=>[F.name,c[F.name]||0])),i.$$.dirty[0]&16384&&t(5,s=n.filter(([F])=>!F.startsWith("arm_l_")&&!F.startsWith("arm_r_")&&!F.startsWith("finger_l_")&&!F.startsWith("finger_r_"))),i.$$.dirty[0]&16384&&t(4,r=n.filter(([F])=>F.startsWith("arm_l_"))),i.$$.dirty[0]&16384&&t(3,o=n.filter(([F])=>F.startsWith("arm_r_"))),i.$$.dirty[0]&16384&&t(2,a=n.filter(([F])=>F.startsWith("finger_l_"))),i.$$.dirty[0]&16384&&t(1,l=n.filter(([F])=>F.startsWith("finger_r_")))},[E,l,a,o,r,s,h,f,d,g,_,m,p,v,n,c,u,b,D,T,L,I,M,S,N,z,V,Y,ne]}class ey extends qi{constructor(e){super(),ji(this,e,Qx,$x,Ai,{},null,[-1,-1])}}new ey({target:document.getElementById("app")});
