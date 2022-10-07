(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 20px 0;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  border: solid brown;\n  width: 50%;\n  height: 80%;\n  background-color: antiquewhite;\n  padding: 20px;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  resize: none;\n}\n\nbutton {\n  padding: 10px 30px;\n  background-color: cornflowerblue;\n  border: none;\n  border-radius: 10px;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  color: white;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: blue;\n}\n\n.copy-button {\n  font-size: 1rem;\n}\n",""]);const l=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var u=this[l][0];null!=u&&(i[u]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var u=e[l],c=r.base?u[0]+r.base:u[0],d=a[c]||0,s="".concat(c," ").concat(d);a[c]=d+1;var p=t(s),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=l,n.splice(l,0,{identifier:s,updater:h,references:1})}i.push(s)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);n[l].references--}for(var u=r(e,o),c=0;c<a.length;c++){var d=t(a[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=u}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r={};(()=>{t.d(r,{kv:()=>S,nh:()=>T,WU:()=>M,wY:()=>E,se:()=>w,wR:()=>k,Dt:()=>L});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),l=t.n(i),u=t(565),c=t.n(u),d=t(216),s=t.n(d),p=t(589),f=t.n(p),h=t(426),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=s(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const y=new Set(["Claramenta","✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠","Aeliah","BetterDays","ganjarule","Talonwife","Tamrood","WhiteDove_","Averelle","Galaxy_Girl","Lady_EverLuv","Aenara"]),v=new Set(["Elonei","Maryiam","Natta","Alivia","Gly","Siachi"]),g=new Set(["slewdem","grei","SmashWolf","DashRiprock","DarkAlex"]),b={iskiplegdays:"<@!277494364023029760>",Rausky:"<@!1001184345333182556>",WoodUToDeath:"<@!600054688544587777>",Claramenta:"<@!285928215128702987>",Elonei:"<@!243079884086181888>",Natta:"<@!948001004585107496>","✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠":"<@!218249414320455680>","Arttagan/boogs":"<@!205783982548189193>","BetterDays/TerribleNights":"<@!165464369155670016>",DisInfection:"<@!576336235249795086>",DreamSeeker:"<@!247886642998673409>","estan/luiz":"<@!599300052825014307>",Ezratheus:"<@!309871528038891520>",isabo:"<@!168787430202277889>",IWHBYD:"<@!401221411328360458>",kenichi:"<@!423640837398986783>",LimitedEdition:"<@!119225070060044288>",LollyPopKiss:"<@!750463736300699671>",SANDYSXGAL:"<@!698608093789028473>","StormKitty/CoolKitty":"<@!349096243030523904>",Talonwife:"<@!531831455597330437>",Tamrood:"<@!232748502109782017>",AdversityK:"<@!978626493339037717>",Aeliah:"<@!561717575302643753>",Aemirah:"<@!236988398911488002>",Aenara:"<@!419272203432099850>","Alitah/Shivy":"<@!182358693290049537>",Alivia:"<@!767945907059818516>",AngioTensln:"<@!895120300998529025>",Anori:"<@!209128825555124225>",ArrowRev:"<@!578719382159753237>",Averelle:"<@!335192674975875073>",BulleT:"<@!533341572402511873>",Clubber:"<@!358438425042485260>",Darcytheus:"<@!639238273100939275>",DashRiprock:"<@!216230206816518144>",EvoPony:"<@!776035339709054998>","FishyFret/Chayy":"<@!141699231449612288>",Foxxeh:"<@!364826703312191488>",Fyara:"<@!378951133831626752>",ganjarule:"<@!165300929816559617>",GILF:"<@!953822808058757170>",Gly:"<@!561746486241656852>",grei:"<@!518213288186871842>","Icepaw/Exo":"<@!255217105417273345>",iiFAKE:"<@!361146286516207616>",IlaSeeker:"<@!359770851467591681>",Julianmede:"<@!877728091332567050>",KayZier:"<@!244140931844931587>","Kimilina/HowlingPuppy":"<@!236834177251540992>",krypto:"<@!726433066502979614>",LastSplash:"<@!617146270280319037>",lKygo:"<@!292122434058977280>",lynshei:"<@!827733364928675850>",Maryiam:"<@!287277598709383169>",Methyd:"<@!733069962087759993>","MORT/Ingrid":"<@!252307230957764619>",nigelus:"<@!689646493497557037>","Parley/DAVID":"<@!610357667650732073>",Pepprina:"<@!358987296353026048>",PIERCE:"<@!341756794592428042>",SleepyQ:"<@!490159512032903181>",Ranker:"<@!268090399522816010>",RapaNui:"<@!625678092043812876>",RedoX:"<@!366284752833216513>",RogueMona:"<@!350467880896430082>",Roryy:"<@!344325716046905358>",Shuddemel:"<@!367239806318673921>",Siachi:"<@!161614572623495168>",slewdem:"<@!521401741208453130>",SmashWolf:"<@!554761171798982677>",Takoe:"<@!552620275443826719>",Torleik:"<@!325771278973796353>",WhiteDove_:"<@!654600360199192577>",x_Adi_x:"<@!728766407688585288>","xAnastasiax/ana":"<@!248979576422662155>",Xaoziq:"<@!377172708896800769>",xMILF:"<@!471098436716855306>",Yinshen:"<@!320913968308944910>",YSoooSeriious:"<@!612007061508849664>",LunaRoja:"<@!1001193501444296734>",Usama:"<@!490644146101682198>",DarkAlex:"<@!955693989644877855>",KidAtomos:"<@!162933136806641664>",Corbin:"",SomiJinJin:"",Lady_EverLuv:"",Cyphur:"",Nubz:"",Lifesaber:"",AlphaWarrior:"",Galaxy_Girl:"","zoey<3":"",migothemanz:"",PullMyTailUwU:"",UwUToDeath:"",Meisaro:"",Loganjl:"",warlock:"","tiago/picpay":"",SkyT:"",Kariami:""},x=[["WoodUToDeath","GILF","Aenara","LimitedEdition","grei","Kariami","iiFAKE",,"iskiplegdays"],["Aeliah","Elonei","Aemirah","Ranker","Meisaro","slewdem"],["Rausky","ganjarule","Siachi","nigelus","lKygo","EvoPony","Xaoziq","Darcytheus","Icepaw/Exo","Corbin"],["✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠","Gly","xAnastasiax/ana","SmashWolf"],["RedoX","IlaSeeker"],[],[],[]];function A(e,n){return C(e,n,"bolder","1.5rem")}function C(e,n,t,r){const o=document.createElement("td");return o.style.backgroundColor=n||(e?function(e){return e=e.replaceAll(w,""),y.has(e)?"#00ff00":v.has(e)?"cyan":""}(e):""),o.style.fontWeight=t||"",o.style.fontSize=r||"",o.style.border=e?"solid black":"",o.style.textAlign="center",o.textContent=e||"",o}const w=" (mb)",S=new Set,E=new Set,k=new Set,T=new Set;let L=[];const D=document.querySelector("textarea");function I(){L=[];for(let e in b)T.add(e);const e=D.value.split("\n");let n=S;for(let t=0;t<e.length;t++)/.*Accepted.*/gim.test(e[t])?n=S:/.*Tentative.*/gim.test(e[t])?n=E:/.*Declined.*/gim.test(e[t])?n=k:(T.delete(e[t]),n.add(e[t]))}function M(e){return e+w}document.querySelector(".generate-button").addEventListener("click",(()=>{I(),D.value="",x.forEach((e=>{const n=[];(e=e.filter((e=>!(!S.has(e)&&!E.has(e)||(S.delete(e),0))))).forEach((e=>{E.has(e)?(E.delete(e),n.push(M(e))):n.push(e)})),L.push(n)})),L.forEach((e=>{e.length<10&&!function(e){for(let n of e)if(n=n.replaceAll(w,""),y.has(n))return!0;return!1}(e)&&function(e){let n=function(){for(let e of S)if(y.has(e))return S.delete(e),e;return null}();null===n&&(n=function(){for(let e of E)if(y.has(e))return E.delete(e),e;return null}(),n=null!==n?M(n):null),null!==n&&e.push(n)}(e)})),L.forEach((e=>{e.length<10&&!function(e){for(let n of e)if(n=n.replaceAll(w,""),v.has(n))return!0;return!1}(e)&&function(e){let n=function(){for(let e of S)if(v.has(e))return S.delete(e),e;return null}();null===n&&(n=function(){for(let e of E)if(v.has(e))return E.delete(e),e;return null}(),n=null!==n?M(n):null),null!==n&&e.push(n)}(e)})),L.forEach((e=>{e.length<10&&!function(e){for(let n of e.values())if(n=n.replaceAll(w,""),g.has(n))return!0;return!1}(e)&&function(e){let n=function(){for(let e of S)if(g.has(e))return S.delete(e),e;return null}();null===n&&(n=function(){for(let e of E)if(g.has(e))return E.delete(e),e;return null}(),n=null!==n?M(n):null),null!==n&&e.push(n)}(e)})),L.forEach((e=>{for(;e.length<10;)e.push(" ")})),function(){const e=document.createElement("table");var n,t;!function(e){const n=document.createElement("thead"),t=document.createElement("tr");for(let e=0;e<L.length;e++)t.appendChild(A("Squad "+(e+1),"#ffd966"));t.appendChild(A()),t.appendChild(A("Yes","#93c47d")),t.appendChild(A("Maybe","#e06666")),t.appendChild(A("No","red")),t.appendChild(C("Did Not Sign","brown")),n.appendChild(t),e.appendChild(n)}(e),function(e){const n=Array.from(S),t=Array.from(E),r=Array.from(k),o=Array.from(T),a=document.createElement("tbody");for(let e=0;e<10;e++){const i=document.createElement("tr");for(let n=0;n<8;n++)i.appendChild(C(L[n][e]));i.appendChild(C()),i.appendChild(C(n[e])),i.appendChild(C(t[e]?M(t[e]):void 0)),i.appendChild(C(r[e])),i.appendChild(C(o[e])),a.appendChild(i)}let i=10;for(;n[i]||t[i]||r[i]||o[i];){const e=document.createElement("tr");for(let n=0;n<9;n++)e.appendChild(C());e.appendChild(C(n[i])),e.appendChild(C(t[i]?M(t[i]):void 0)),e.appendChild(C(r[i])),e.appendChild(C(o[i])),a.appendChild(e),i++}e.appendChild(a)}(e),n=e.outerHTML,(t=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),t.setAttribute("download","squads-generated.html"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}()})),document.querySelector(".copy-button").addEventListener("click",(()=>{I();let e="";T.forEach((n=>{e+=b[n]})),navigator.clipboard.writeText(e)}))})()})();