declare var $: any;

interface LogoutOpts {
    isRestoreLocation: boolean;
    isLogoutProc: boolean;
    logoutProcUrl: string | undefined;
}

interface CoolTemplate {
    login: string;
    menu: string;
    more: string;
    alarm: string;
    point: string;
    beforeLogin: string;
    topBanner: string;
}

const constants = {
    memberUrl: '//member.coolschool.co.kr',
    searchUrl: '//search.coolschool.co.kr',
    clientIds:  {
        'www' : 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        '' : 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool,
        'coolendar': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar,
        'coolendar3': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar3
    }
};
declare var ga: any;

class Coolris {

    constructor(private accessToken = '') {
        // include dot.js
        // @ts-ignore
        !function(){"use strict";var u,d={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};d.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},u=function(){return this||(0,eval)("this")}.apply(this),"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):u.doT=d;var s={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},p=/$^/;function l(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}d.template=function(e,n,t){var r,o,a=(n=n||d.templateSettings).append?s.append:s.split,c=0,i=n.use||n.define?function r(o,e,a){return("string"==typeof e?e:e.toString()).replace(o.define||p,function(e,r,n,t){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in a||(":"===n?(o.defineParams&&t.replace(o.defineParams,function(e,n,t){a[r]={arg:n,text:t}}),r in a||(a[r]=t)):new Function("def","def['"+r+"']="+t)(a)),""}).replace(o.use||p,function(e,n){o.useParams&&(n=n.replace(o.useParams,function(e,n,t,r){if(a[t]&&a[t].arg&&r){var o=(t+":"+r).replace(/'|\\/g,"_");return a.__exp=a.__exp||{},a.__exp[o]=a[t].text.replace(new RegExp("(^|[^\\w$])"+a[t].arg+"([^\\w$])","g"),"$1"+r+"$2"),n+"def.__exp['"+o+"']"}}));var t=new Function("def","return "+n)(a);return t?r(o,t,a):t})}(n,e,t||{}):e;i=("var out='"+(n.strip?i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):i).replace(/'|\\/g,"\\$&").replace(n.interpolate||p,function(e,n){return a.start+l(n)+a.end}).replace(n.encode||p,function(e,n){return r=!0,a.startencode+l(n)+a.end}).replace(n.conditional||p,function(e,n,t){return n?t?"';}else if("+l(t)+"){out+='":"';}else{out+='":t?"';if("+l(t)+"){out+='":"';}out+='"}).replace(n.iterate||p,function(e,n,t,r){return n?(c+=1,o=r||"i"+c,n=l(n),"';var arr"+c+"="+n+";if(arr"+c+"){var "+t+","+o+"=-1,l"+c+"=arr"+c+".length-1;while("+o+"<l"+c+"){"+t+"=arr"+c+"["+o+"+=1];out+='"):"';} } out+='"}).replace(n.evaluate||p,function(e,n){return"';"+l(n)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(n.selfcontained||!u||u._encodeHTML||(u._encodeHTML=d.encodeHTMLSource(n.doNotSkipEncoded)),i="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+d.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+i);try{return new Function(n.varname,i)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+i),e}},d.compile=function(e,n){return d.template(e,null,n)}}.apply(this)

        // ja.js
        // @ts-ignore
        var _hashq=_hashq||[],_httpRequest=null,_ja_famliy_site={};!function(e: any,t: any,a: any,n: any,i: any,s: any,o: any){e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(s,o)}(window,document,"script",0,"ga"),ga("create","UA-92421532-1","auto"),ga("send","pageview"),function(){a(document,"click",function(e){var t,a,n,i=function e(t){if(null==t.tagName)return!1;if("a"==t.tagName.toLowerCase()||"area"==t.tagName.toLowerCase())return t;if(t.parentNode)return e(t.parentNode);return!1}(e.target);i&&(t=function e(t){var a=[];t.parentNode&&"body"!=t.parentNode.tagName.toLowerCase()&&(a=e(t.parentNode));t.id?a.push(t.id):t.className&&a.push(t.className);return a}(i).join("-"),a=i.href.indexOf(".pdf")>-1||i.href.indexOf(".mov")>-1||i.href.indexOf(".avi")>-1||i.href.indexOf(".m4v")>-1||i.href.indexOf(".wmv")>-1||i.href.indexOf(".mp3")>-1||i.href.indexOf(".rar")>-1||i.href.indexOf(".zip")>-1?"download":i.href.indexOf(".html")>-1||i.href.indexOf(".txt")>-1||i.href.indexOf(".js")>-1?"example":"link",n=i.innerHTML,_hashq.push(["_trackEvent",t,a,n]),i.id)}),_ja_famliy_site.readyState=function(){var e=o("_jc");e||(e=t(1e9,9999999999),s("_jc",e+="."+(new Date).getTime())),_hashq.push(["_host",location.hostname]),_hashq.push(["_url",location.href]),_hashq.push(["_jc",e]),n()};var e=!1;a(document,"readystatechange",function(a){if(!e){var i=o("_jc");i||(i=t(1e9,9999999999),s("_jc",i+="."+(new Date).getTime())),_hashq.push(["_host",location.hostname]),_hashq.push(["_url",location.href]),_hashq.push(["_jc",i]),n(),e=!0}});var t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function a(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&(e["e"+t+a]=a,e[t+a]=function(){e["e"+t+a](window.event)},e.attachEvent("on"+t,e[t+a]))}function n(){for(var e,t="",a=0;a<_hashq.length;a++)""!=t&&(t+="&"),t+=(e=_hashq[a])[0]+"="+e[1];!function(e){var t=("https:"==document.location.protocol?"https://":"http://")+"st.coolschool.co.kr/ja/stat_js.html";$.ajax({url:t,contentType:"application/json",dataType:"jsonp",type:"POST",data:e,success:function(e){if(e.family_html&&$(".family-sites")){var t=$(".family-sites").html(e.family_html).text();$(".family-sites").html(t)}},error:function(e){console.log("�ㅽ뙣 - ",e)}})}(t)}var i="1000";function s(e,t){var a=new Date;a.setDate(a.getDate()+i),document.cookie=e+"="+t+"; path=/; expires="+a.toGMTString()+";"}function o(e){e+="=";var t=document.cookie,a=t.indexOf(e),n="";if(-1!=a){a+=e.length;var i=t.indexOf(";",a);-1==i&&(i=t.length),n=t.substring(a,i)}return unescape(n)}_ja_famliy_site.start=function(){var e=location.href,t=$("#footer");if(t&&0!==t.length){var a=t.find(".family-site-back");if(a){var n=parseInt(a.css("height"))+1;if(e.indexOf("coolbooks")<0){var i=$(window),s=$(document),o=$("html"),r=$("body");a.css({top:-n+"px"}),s.on("click","#togglerFamilySite",function(e){e.preventDefault();var t=$("#togglerFamilySite span.up").removeClass("hide"),a=s.height();o.toggleClass("is-family-sites"),r.toggleClass("is-family-sites"),i.trigger(".sticky"),(o.hasClass("is-family-sites")||r.hasClass("is-family-sites"))&&(t.addClass("hide"),$("html, body").animate({scrollTop:a},0))}),a.find("a").on("click",function(){o.removeClass("is-family-sites")})}}}},_ja_famliy_site.start()}();

        // pollyfils
        // @ts-ignore
        !function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/common/js/",n(n.s=55)}([function(t,n,e){var r=e(3),o=e(5),i=e(11),c=e(15),u=e(20),f=function(t,n,e){var s,a,l,p,v=t&f.F,h=t&f.G,y=t&f.S,d=t&f.P,g=t&f.B,m=h?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,b=h?o:o[n]||(o[n]={}),_=b.prototype||(b.prototype={});h&&(e=n);for(s in e)a=!v&&m&&void 0!==m[s],l=(a?m:e)[s],p=g&&a?u(l,r):d&&"function"==typeof l?u(Function.call,l):l,m&&c(m,s,l,t&f.U),b[s]!=l&&i(b,s,p),d&&_[s]!=l&&(_[s]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(26)("wks"),o=e(18),i=e(3).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(41),i=e(25),c=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(5),i=e(10);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],c={};c[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",c)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(7),o=e(17);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(44),o=e(33);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(30),o=e(17),i=e(13),c=e(25),u=e(9),f=e(41),s=Object.getOwnPropertyDescriptor;n.f=e(6)?s:function(t,n){if(t=i(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(3),o=e(11),i=e(9),c=e(18)("src"),u=e(57),f=(""+u).split("toString");e(5).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,c)||o(e,c,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t,n,e){var r=e(43),o=e(36);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(33);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(9),o=e(22),i=e(35)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n){t.exports={}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(5),o=e(3),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(19)?"pure":"global",copyright:"짤 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(18)("meta"),o=e(2),i=e(9),c=e(7).f,u=0,f=Object.isExtensible||function(){return!0},s=!e(10)(function(){return f(Object.preventExtensions({}))}),a=function(t){c(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},v=function(t){return s&&h.NEED&&f(t)&&!i(t,r)&&a(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,n,e){var r=e(7).f,o=e(9),i=e(4)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(1),o=e(46),i=e(36),c=e(35)("IE_PROTO"),u=function(){},f=function(){var t,n=e(32)("iframe"),r=i.length;for(n.style.display="none",e(47).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(2),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(26)("keys"),o=e(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(43),o=e(36).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){"use strict";var r=e(39),o={};o[e(4)("toStringTag")]="z",o+""!="[object z]"&&e(15)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,n,e){var r=e(21),o=e(4)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){"use strict";var r=e(3),o=e(9),i=e(6),c=e(0),u=e(15),f=e(27).KEY,s=e(10),a=e(26),l=e(28),p=e(18),v=e(4),h=e(42),y=e(58),d=e(59),g=e(62),m=e(1),b=e(2),_=e(22),x=e(13),S=e(25),O=e(17),w=e(31),j=e(48),P=e(14),E=e(29),L=e(7),T=e(16),F=P.f,R=L.f,k=j.f,M=r.Symbol,A=r.JSON,N=A&&A.stringify,C=v("_hidden"),D=v("toPrimitive"),I={}.propertyIsEnumerable,G=a("symbol-registry"),z=a("symbols"),V=a("op-symbols"),K=Object.prototype,W="function"==typeof M&&!!E.f,H=r.QObject,B=!H||!H.prototype||!H.prototype.findChild,U=i&&s(function(){return 7!=w(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=F(K,n);r&&delete K[n],R(t,n,e),r&&t!==K&&R(K,n,r)}:R,J=function(t){var n=z[t]=w(M.prototype);return n._k=t,n},Y=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},q=function(t,n,e){return t===K&&q(V,n,e),m(t),n=S(n,!0),m(e),o(z,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=w(e,{enumerable:O(0,!1)})):(o(t,C)||R(t,C,O(1,{})),t[C][n]=!0),U(t,n,e)):R(t,n,e)},Q=function(t,n){m(t);for(var e,r=d(n=x(n)),o=0,i=r.length;i>o;)q(t,e=r[o++],n[e]);return t},X=function(t,n){return void 0===n?w(t):Q(w(t),n)},$=function(t){var n=I.call(this,t=S(t,!0));return!(this===K&&o(z,t)&&!o(V,t))&&(!(n||!o(this,t)||!o(z,t)||o(this,C)&&this[C][t])||n)},Z=function(t,n){if(t=x(t),n=S(n,!0),t!==K||!o(z,n)||o(V,n)){var e=F(t,n);return!e||!o(z,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},tt=function(t){for(var n,e=k(x(t)),r=[],i=0;e.length>i;)o(z,n=e[i++])||n==C||n==f||r.push(n);return r},nt=function(t){for(var n,e=t===K,r=k(e?V:x(t)),i=[],c=0;r.length>c;)!o(z,n=r[c++])||e&&!o(K,n)||i.push(z[n]);return i};W||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===K&&n.call(V,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),U(this,t,O(1,e))};return i&&B&&U(K,t,{configurable:!0,set:n}),J(t)},u(M.prototype,"toString",function(){return this._k}),P.f=Z,L.f=q,e(37).f=j.f=tt,e(30).f=$,E.f=nt,i&&!e(19)&&u(K,"propertyIsEnumerable",$,!0),h.f=function(t){return J(v(t))}),c(c.G+c.W+c.F*!W,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)v(et[rt++]);for(var ot=T(v.store),it=0;ot.length>it;)y(ot[it++]);c(c.S+c.F*!W,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=M(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in G)if(G[n]===t)return n},useSetter:function(){B=!0},useSimple:function(){B=!1}}),c(c.S+c.F*!W,"Object",{create:X,defineProperty:q,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var ct=s(function(){E.f(1)});c(c.S+c.F*ct,"Object",{getOwnPropertySymbols:function(t){return E.f(_(t))}}),A&&c(c.S+c.F*(!W||s(function(){var t=M();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(b(n)||void 0!==t)&&!Y(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Y(n))return n}),r[1]=n,N.apply(A,r)}}),M.prototype[D]||e(11)(M.prototype,D,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){t.exports=!e(6)&&!e(10)(function(){return 7!=Object.defineProperty(e(32)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){n.f=e(4)},function(t,n,e){var r=e(9),o=e(13),i=e(60)(!1),c=e(35)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),f=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);for(;n.length>f;)r(u,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(34),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(7),o=e(1),i=e(16);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,f=0;u>f;)r.f(t,e=c[f++],n[e]);return t}},function(t,n,e){var r=e(3).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(13),o=e(37).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(1),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e(20)(Function.call,e(14).f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){"use strict";var r=e(19),o=e(0),i=e(15),c=e(11),u=e(24),f=e(51),s=e(28),a=e(23),l=e(4)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,d,g){f(e,n,h);var m,b,_,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",O="values"==y,w=!1,j=t.prototype,P=j[l]||j["@@iterator"]||y&&j[y],E=P||x(y),L=y?O?x("entries"):E:void 0,T="Array"==n?j.entries||P:P;if(T&&(_=a(T.call(new t)))!==Object.prototype&&_.next&&(s(_,S,!0),r||"function"==typeof _[l]||c(_,l,v)),O&&P&&"values"!==P.name&&(w=!0,E=function(){return P.call(this)}),r&&!g||!p&&!w&&j[l]||c(j,l,E),u[n]=E,u[S]=v,y)if(m={values:O?E:x("values"),keys:d?E:x("keys"),entries:L},g)for(b in m)b in j||i(j,b,m[b]);else o(o.P+o.F*(p||w),n,m);return m}},function(t,n,e){"use strict";var r=e(31),o=e(17),i=e(28),c={};e(11)(c,e(4)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r,o,i,c=e(20),u=e(53),f=e(47),s=e(32),a=e(3),l=a.process,p=a.setImmediate,v=a.clearImmediate,h=a.MessageChannel,y=a.Dispatch,d=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){m.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++d]=function(){u("function"==typeof t?t:Function(t),n)},r(d),d},v=function(t){delete g[t]},"process"==e(21)(l)?r=function(t){l.nextTick(c(m,t,1))}:y&&y.now?r=function(t){y.now(c(m,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=b,r=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(r=function(t){a.postMessage(t+"","*")},a.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),m.call(t)}}:function(t){setTimeout(c(m,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(12);t.exports.f=function(t){return new r(t)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"Polyfills",function(){return f});var r=e(56),o=(e.n(r),e(63)),i=(e.n(o),e(82)),c=(e.n(i),e(103)),u=(e.n(c),e(104)),f=(e.n(u),function(){function t(){}return t}())},function(t,n,e){e(40),e(38),t.exports=e(5).Symbol},function(t,n,e){t.exports=e(26)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(3),o=e(5),i=e(19),c=e(42),u=e(7).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||u(n,t,{value:c.f(t)})}},function(t,n,e){var r=e(16),o=e(29),i=e(30);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var c,u=e(t),f=i.f,s=0;u.length>s;)f.call(t,c=u[s++])&&n.push(c);return n}},function(t,n,e){var r=e(13),o=e(45),i=e(61);t.exports=function(t){return function(n,e,c){var u,f=r(n),s=o(f.length),a=i(c,s);if(t&&e!=e){for(;s>a;)if((u=f[a++])!=u)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(34),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(21);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){e(40),e(64),e(65),e(66),e(67),e(68),e(69),e(70),e(71),e(72),e(73),e(74),e(75),e(76),e(77),e(79),e(81),e(38),t.exports=e(5).Object},function(t,n,e){var r=e(0);r(r.S,"Object",{create:e(31)})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(6),"Object",{defineProperty:e(7).f})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(6),"Object",{defineProperties:e(46)})},function(t,n,e){var r=e(13),o=e(14).f;e(8)("getOwnPropertyDescriptor",function(){return function(t,n){return o(r(t),n)}})},function(t,n,e){var r=e(22),o=e(23);e(8)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(22),o=e(16);e(8)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){e(8)("getOwnPropertyNames",function(){return e(48).f})},function(t,n,e){var r=e(2),o=e(27).onFreeze;e(8)("freeze",function(t){return function(n){return t&&r(n)?t(o(n)):n}})},function(t,n,e){var r=e(2),o=e(27).onFreeze;e(8)("seal",function(t){return function(n){return t&&r(n)?t(o(n)):n}})},function(t,n,e){var r=e(2),o=e(27).onFreeze;e(8)("preventExtensions",function(t){return function(n){return t&&r(n)?t(o(n)):n}})},function(t,n,e){var r=e(2);e(8)("isFrozen",function(t){return function(n){return!r(n)||!!t&&t(n)}})},function(t,n,e){var r=e(2);e(8)("isSealed",function(t){return function(n){return!r(n)||!!t&&t(n)}})},function(t,n,e){var r=e(2);e(8)("isExtensible",function(t){return function(n){return!!r(n)&&(!t||t(n))}})},function(t,n,e){var r=e(0);r(r.S+r.F,"Object",{assign:e(78)})},function(t,n,e){"use strict";var r=e(6),o=e(16),i=e(29),c=e(30),u=e(22),f=e(44),s=Object.assign;t.exports=!s||e(10)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r})?function(t,n){for(var e=u(t),s=arguments.length,a=1,l=i.f,p=c.f;s>a;)for(var v,h=f(arguments[a++]),y=l?o(h).concat(l(h)):o(h),d=y.length,g=0;d>g;)v=y[g++],r&&!p.call(h,v)||(e[v]=h[v]);return e}:s},function(t,n,e){var r=e(0);r(r.S,"Object",{is:e(80)})},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){var r=e(0);r(r.S,"Object",{setPrototypeOf:e(49).set})},function(t,n,e){e(38),e(83),e(85),e(89),t.exports=e(5).Promise},function(t,n,e){"use strict";var r=e(84)(!0);e(50)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(34),o=e(33);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),f=r(e),s=u.length;return f<0||f>=s?t?"":void 0:(i=u.charCodeAt(f),i<55296||i>56319||f+1===s||(c=u.charCodeAt(f+1))<56320||c>57343?t?u.charAt(f):i:t?u.slice(f,f+2):c-56320+(i-55296<<10)+65536)}}},function(t,n,e){for(var r=e(86),o=e(16),i=e(15),c=e(3),u=e(11),f=e(24),s=e(4),a=s("iterator"),l=s("toStringTag"),p=f.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),y=0;y<h.length;y++){var d,g=h[y],m=v[g],b=c[g],_=b&&b.prototype;if(_&&(_[a]||u(_,a,p),_[l]||u(_,l,g),f[g]=p,m))for(d in r)_[d]||i(_,d,r[d],!0)}},function(t,n,e){"use strict";var r=e(87),o=e(88),i=e(24),c=e(13);t.exports=e(50)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(4)("unscopables"),o=Array.prototype;void 0==o[r]&&e(11)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,c,u=e(19),f=e(3),s=e(20),a=e(39),l=e(0),p=e(2),v=e(12),h=e(90),y=e(91),d=e(95),g=e(52).set,m=e(96)(),b=e(54),_=e(97),x=e(98),S=e(99),O=f.TypeError,w=f.process,j=w&&w.versions,P=j&&j.v8||"",E=f.Promise,L="process"==a(w),T=function(){},F=o=b.f,R=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[e(4)("species")]=function(t){t(T,T)};return(L||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,c,u=o?n.ok:n.fail,f=n.resolve,s=n.reject,a=n.domain;try{u?(o||(2==t._h&&C(t),t._h=1),!0===u?e=r:(a&&a.enter(),e=u(r),a&&(a.exit(),c=!0)),e===n.promise?s(O("Promise-chain cycle")):(i=k(e))?i.call(e,f,s):f(e)):s(r)}catch(t){a&&!c&&a.exit(),s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&A(t)})}},A=function(t){g.call(f,function(){var n,e,r,o=t._v,i=N(t);if(i&&(n=_(function(){L?w.emit("unhandledRejection",o,t):(e=f.onunhandledrejection)?e({promise:t,reason:o}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=L||N(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){g.call(f,function(){var n;L?w.emit("rejectionHandled",t):(n=f.onrejectionhandled)&&n({promise:t,reason:t._v})})},D=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw O("Promise can't be resolved itself");(n=k(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,s(I,r,1),s(D,r,1))}catch(t){D.call(r,t)}}):(e._v=t,e._s=1,M(e,!1))}catch(t){D.call({_w:e,_d:!1},t)}}};R||(E=function(t){h(this,E,"Promise","_h"),v(t),r.call(this);try{t(s(I,this,1),s(D,this,1))}catch(t){D.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(100)(E.prototype,{then:function(t,n){var e=F(d(this,E));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=L?w.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(I,t,1),this.reject=s(D,t,1)},b.f=F=function(t){return t===E||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!R,{Promise:E}),e(28)(E,"Promise"),e(101)("Promise"),c=e(5).Promise,l(l.S+l.F*!R,"Promise",{reject:function(t){var n=F(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!R),"Promise",{resolve:function(t){return S(u&&this===c?E:this,t)}}),l(l.S+l.F*!(R&&e(102)(function(t){E.all(t).catch(T)})),"Promise",{all:function(t){var n=this,e=F(n),r=e.resolve,o=e.reject,i=_(function(){var e=[],i=0,c=1;y(t,!1,function(t){var u=i++,f=!1;e.push(void 0),c++,n.resolve(t).then(function(t){f||(f=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=F(n),r=e.reject,o=_(function(){y(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(20),o=e(92),i=e(93),c=e(1),u=e(45),f=e(94),s={},a={},n=t.exports=function(t,n,e,l,p){var v,h,y,d,g=p?function(){return t}:f(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(v=u(t.length);v>b;b++)if((d=n?m(c(h=t[b])[0],h[1]):m(t[b]))===s||d===a)return d}else for(y=g.call(t);!(h=y.next()).done;)if((d=o(y,m,h.value,n))===s||d===a)return d};n.BREAK=s,n.RETURN=a},function(t,n,e){var r=e(1);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(24),o=e(4)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(39),o=e(4)("iterator"),i=e(24);t.exports=e(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(1),o=e(12),i=e(4)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(3),o=e(52).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,f="process"==e(21)(c);t.exports=function(){var t,n,e,s=function(){var r,o;for(f&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(f)e=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var a=u.resolve(void 0);e=function(){a.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(3),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,n,e){var r=e(1),o=e(2),i=e(54);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(3),o=e(7),i=e(6),c=e(4)("species");t.exports=function(t){var n=r[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(4)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},function(t,n){/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
        // @ts-ignore
        "document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var n=function(t){var n=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var e,r=arguments.length;for(e=0;e<r;e++)t=arguments[e],n.call(this,t)}};n("add"),n("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var e=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,n){return 1 in arguments&&!this.contains(t)==!n?n:e.call(this,t)}}t=null}():function(t){"use strict";if("Element"in t){var n=t.Element.prototype,e=Object,r=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array.prototype.indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1},i=function(t,n){this.name=t,this.code=DOMException[t],this.message=n},c=function(t,n){if(""===n)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(n))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,n)},u=function(t){for(var n=r.call(t.getAttribute("class")||""),e=n?n.split(/\s+/):[],o=0,i=e.length;o<i;o++)this.push(e[o]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},f=u.prototype=[],s=function(){return new u(this)};if(i.prototype=Error.prototype,f.item=function(t){return this[t]||null},f.contains=function(t){return t+="",-1!==c(this,t)},f.add=function(){var t,n=arguments,e=0,r=n.length,o=!1;do{t=n[e]+"",-1===c(this,t)&&(this.push(t),o=!0)}while(++e<r);o&&this._updateClassName()},f.remove=function(){var t,n,e=arguments,r=0,o=e.length,i=!1;do{for(t=e[r]+"",n=c(this,t);-1!==n;)this.splice(n,1),i=!0,n=c(this,t)}while(++r<o);i&&this._updateClassName()},f.toggle=function(t,n){t+="";var e=this.contains(t),r=e?!0!==n&&"remove":!1!==n&&"add";return r&&this[r](t),!0===n||!1===n?n:!e},f.toString=function(){return this.join(" ")},e.defineProperty){var a={get:s,enumerable:!0,configurable:!0};try{e.defineProperty(n,"classList",a)}catch(t){-2146823252===t.number&&(a.enumerable=!1,e.defineProperty(n,"classList",a))}}else e.prototype.__defineGetter__&&n.__defineGetter__("classList",s)}}(self))},function(t,n,e){e(105),e(106),e(108),e(109),e(110),e(111),e(112),e(113),e(114),e(115),e(116),e(118),e(119),e(120),t.exports=e(5).Reflect},function(t,n,e){var r=e(0),o=e(12),i=e(1),c=(e(3).Reflect||{}).apply,u=Function.apply;r(r.S+r.F*!e(10)(function(){c(function(){})}),"Reflect",{apply:function(t,n,e){var r=o(t),f=i(e);return c?c(r,n,f):u.call(r,n,f)}})},function(t,n,e){var r=e(0),o=e(31),i=e(12),c=e(1),u=e(2),f=e(10),s=e(107),a=(e(3).Reflect||{}).construct,l=f(function(){function t(){}return!(a(function(){},[],t)instanceof t)}),p=!f(function(){a(function(){})});r(r.S+r.F*(l||p),"Reflect",{construct:function(t,n){i(t),c(n);var e=arguments.length<3?t:i(arguments[2]);if(p&&!l)return a(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(s.apply(t,r))}var f=e.prototype,v=o(u(f)?f:Object.prototype),h=Function.apply.call(t,v,n);return u(h)?h:v}})},function(t,n,e){"use strict";var r=e(12),o=e(2),i=e(53),c=[].slice,u={},f=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("F,a","return new F("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=c.call(arguments,1),u=function(){var r=e.concat(c.call(arguments));return this instanceof u?f(n,r.length,r):i(n,r,t)};return o(n.prototype)&&(u.prototype=n.prototype),u}},function(t,n,e){var r=e(7),o=e(0),i=e(1),c=e(25);o(o.S+o.F*e(10)(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,e){i(t),n=c(n,!0),i(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},function(t,n,e){var r=e(0),o=e(14).f,i=e(1);r(r.S,"Reflect",{deleteProperty:function(t,n){var e=o(i(t),n);return!(e&&!e.configurable)&&delete t[n]}})},function(t,n,e){"use strict";var r=e(0),o=e(1),i=function(t){this._t=o(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};e(51)(i,"Object",function(){var t,n=this,e=n._k;do{if(n._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[n._i++])in n._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function(t){return new i(t)}})},function(t,n,e){function r(t,n){var e,u,a=arguments.length<3?t:arguments[2];return s(t)===a?t[n]:(e=o.f(t,n))?c(e,"value")?e.value:void 0!==e.get?e.get.call(a):void 0:f(u=i(t))?r(u,n,a):void 0}var o=e(14),i=e(23),c=e(9),u=e(0),f=e(2),s=e(1);u(u.S,"Reflect",{get:r})},function(t,n,e){var r=e(14),o=e(0),i=e(1);o(o.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return r.f(i(t),n)}})},function(t,n,e){var r=e(0),o=e(23),i=e(1);r(r.S,"Reflect",{getPrototypeOf:function(t){return o(i(t))}})},function(t,n,e){var r=e(0);r(r.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,e){var r=e(0),o=e(1),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return o(t),!i||i(t)}})},function(t,n,e){var r=e(0);r(r.S,"Reflect",{ownKeys:e(117)})},function(t,n,e){var r=e(37),o=e(29),i=e(1),c=e(3).Reflect;t.exports=c&&c.ownKeys||function(t){var n=r.f(i(t)),e=o.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0),o=e(1),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){o(t);try{return i&&i(t),!0}catch(t){return!1}}})},function(t,n,e){function r(t,n,e){var f,p,v=arguments.length<4?t:arguments[3],h=i.f(a(t),n);if(!h){if(l(p=c(t)))return r(p,n,e,v);h=s(0)}if(u(h,"value")){if(!1===h.writable||!l(v))return!1;if(f=i.f(v,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=e,o.f(v,n,f)}else o.f(v,n,s(0,e));return!0}return void 0!==h.set&&(h.set.call(v,e),!0)}var o=e(7),i=e(14),c=e(23),u=e(9),f=e(0),s=e(17),a=e(1),l=e(2);f(f.S,"Reflect",{set:r})},function(t,n,e){var r=e(0),o=e(49);o&&r(r.S,"Reflect",{setPrototypeOf:function(t,n){o.check(t,n);try{return o.set(t,n),!0}catch(t){return!1}}})}]);
    }

    async start() {

        // @ts-ignore
        const gnbOuterTemplateFn = this.doT.template(this.getGnbOuterTemplate());
        $('#coolrisGnb').html(gnbOuterTemplateFn());

        // 탑배너 쿠키가 없다면 탑배너 영역 데이터 로드 및 랜더
        if (!this.getCookie('topbanner')) {
            this.loadSettingTopBanner();
        }

        // interface Cooltemplate에 템플릿 주기
        const coolTemplate = {
            login: this.getLoginTemplate(),
            menu: this.getGnbMenuTemplate(),
            more: this.getMoreTemplate(),
            point: this.getPointTemplate(),
            beforeLogin: this.getBeforLoginTemplate(),
            topBanner: this.getTopBannerTemplate()
        };

        // 로그인 여부에 따른 처리
        const memberResponse = await this.loginCheck();
        const memberResponseData = memberResponse.data;

        const isLogin = memberResponse.result;

        // dot에 template을 준다.
        // @ts-ignore
        const coolrisTemplateFn = this.doT.template(this.getGnbTemplate(coolTemplate));
        $('[data-name=coolrisGnbArea]').html(coolrisTemplateFn({isLogin: isLogin}));

        // 로그인 드롭다운
        this.loginToggle('coolris-profile-btn', 'coolris-profile-dropdown');
        this.loginDropdown('coolris-profile-dropdown', this.targetProfileCheck);

        // 더보기 드롭다운
        this.loginToggle('coolris-more-btn', 'coolris-more-dropdown');
        this.loginDropdown('coolris-more-dropdown', this.targetMoreCheck);

        // 이벤트
        this.onLoginOutEvents();

        // 로그인에 되어 있다면 내 영역 데이터 로드 및 랜더
        if (isLogin && this.accessToken) {
            this.loadSettingMyArea();
        }
    }

    // 버튼 클릭시 드롭다운 켜짐
    loginToggle(toggleBtn: string, dropDownClass: string) {
        $(`.${toggleBtn}`).click(() => {
            $(`.${dropDownClass}`).toggleClass('show');
        });
    }

    // 드롭다운 껐다가 키기
    loginDropdown(dropdownClass: string, callback: Function) {
        // 프로필 메뉴 빼고 클릭시 드롭다운 꺼짐
        $(window).click(($event: any) => {
            if (!callback($event.target.className)) {
                const dropdown = $(`.${dropdownClass}`);
                if (dropdown.hasClass('show')) {
                    dropdown.removeClass('show');
                }
            }
        });

        $(`.${dropdownClass}`).click(($event: any) => {
            // 클릭한 태그가 a이거나 클릭한 태그의 부모가 a이거나 클릭한 클레스의 이름이 dropdown-close 이면 리턴
            if ($event.target.parentNode.tagName.toLowerCase() === 'a' || $event.target.tagName.toLowerCase() === 'a' || $event.target.className.indexOf('dropdown-close') !== -1) {
                return;
            }
            this.preventClickEvent($event);
        })
    }

    // 마우스 클릭 이벤트 막기
    preventClickEvent($event: any) {
        $event.preventDefault();
        $event.stopPropagation();
    }

    // 로그인 드롭다운을 끌때 프로필 버튼을 클릭했는지 체크
    targetProfileCheck(target: string) {
        let isChecked = false;
        switch (target) {
            case 'profile-name':
                isChecked = true;
                break;
            case 'profile-img':
                isChecked = true;
                break;
            case 'coolris-profile-btn':
                isChecked = true;
                break;
        }
        return isChecked;
    }

    // 더보기 드롭다운을 끌때 더보기 버튼 클릭하는지 체크
    targetMoreCheck(target: string) {
        let isChecked = false;
        if (target === 'coolris-more-btn') {
            isChecked = true;
        }
        return isChecked;
    }

    // 더보기 드롭다운을 끌때 더보기 버튼 클릭하는지 체크
    targetAlarmCheck(target: string) {
        let isChecked = false;
        switch (target) {
            case 'coolris-alarm-btn':
                isChecked = true;
                break;
            case 'coolris-alarm-img':
                isChecked = true;
                break;
        }
        return isChecked;
    }

    isSlideMove: boolean = true;

    // 탑배너 슬라이드 이벤트
    topBannerSlideEvent() {
        const topBanner = `div[data-name='topBanner']`;
        const topBannerPaging = $(topBanner).find('.topbanner-paging');
        const topBannerPagingNum = topBannerPaging.find('li').length;

        // 처음 랜덤으로 슬라이드 보여주기
        this.topBannerSlideManager(0);
        // this.topBannerSlideManager(this.getRandomeNum(topBannerPagingNum - 1));

        const autoSlideFnc = () => {
            for (let i = 0; i < topBannerPagingNum; i++) {
                if (topBannerPaging.find(`li:eq(${i})`).find('span[data-name="topbannerPaging"]').hasClass('on')) {
                    let clickNum = i + 1;
                    if (clickNum >= topBannerPagingNum) {
                        clickNum = 0;
                    }
                    this.topBannerSlideManager(clickNum);
                }
            }
        };

        let autoSlideInterval = setInterval(autoSlideFnc, 5000);

        for (let i = 0; i < topBannerPagingNum; i++) {
            topBannerPaging.find(`li:eq(${i})`).find('span[data-name="topbannerPaging"]').click(() => {
                if (this.isSlideMove) {
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(autoSlideFnc, 5000);
                    this.topBannerSlideManager(i);
                }
            })
        }

        $(topBanner).on('mouseenter', () => {
            if (this.isSlideMove) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(autoSlideFnc, 5000);
            }
            return false;
        });
    }

    // topbanner 애니메이션
    topBannerSlideManager(slideNum: number) {
        this.isSlideMove = false;
        const topBanner = `div[data-name='topBanner']`;
        const topBannerList = $(topBanner).find('.topbanner-list');
        const topBannerPaging = $(topBanner).find('.topbanner-paging');
        const topBannerListH = 79;
        if (!topBannerList.is(':animated')) {
            topBannerList.stop().animate({'top': - (slideNum * topBannerListH)}, 600, () => {
                this.isSlideMove = true;
                topBannerPaging.find('span[data-name="topbannerPaging"]').removeClass('on');
                topBannerPaging.find('li:eq('+ slideNum +')').find('span[data-name="topbannerPaging"]').addClass('on');
            });
        }
    }

    // topbanner close
    topbannerCloseEvent() {
        $("p[data-name='topbannerClose']").click(() => {
            $("div[data-name='topBanner']").css('display', 'none');
            this.setCookie('topbanner', 'yes', 1);
        })
    }

    getRandomeNum(index: number) {
        return Math.floor((Math.random() * index))
    }

    getGnbOuterTemplate() {
        return `
            <div data-name="divTopBannerArea"></div>
            <div data-name="coolrisGnbArea"></div>
        `
    }

    // 탑배너 템플릿
    getTopBannerTemplate() {
        return `
            <style>
                /*===== topBanner =====*/
                div[coolrisTopBanner] {
                    background-color:#24d1ab;
                    /*display:none;*/
                    text-align:center;
                }
                 @media screen and (max-width: 992px) {
                     div[coolrisTopBanner] {
                        display: none !important;
                     }
                }
                div[coolrisTopBanner] > div {
                    height:79px;
                    overflow: hidden;
                    position: relative;
                }
                div[coolrisTopBanner] > div > div { position:relative; top: 0; }
                div[coolrisTopBanner] .inner {
                    width: 980px;
                    margin: 0 auto;
                }
                div[coolrisTopBanner] .inner a { display: block; width: 100%; }
                div[coolrisTopBanner] .top_close{
                    color:#000;
                    font-size:11px;
                    position:absolute;
                    bottom:5px;
                    right:100px;
                    font-family: "Dotum";
                    z-index:999;
                }
                div[coolrisTopBanner] .top_close img {
                    margin-right: 7px;
                    margin-bottom: 3px;
                    vertical-align: middle;
                }
                div[coolrisTopBanner] .topbanner-paging {
                    display: block !important;
                    position: relative;
                    height: 0;
                    z-index: 10;
                }
                div[coolrisTopBanner] .topbanner-paging ul {
                    position: absolute ;
                    right: 0;
                    top: 10px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                div[coolrisTopBanner] .topbanner-paging ul li {
                    margin-bottom: 5px;
                }
                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging'] {
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: rgba(100, 100, 100, 0.4);
                    cursor: pointer;
                }
                
                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging'].on {
                    background-color: rgba(100, 100, 100, 1);
                }
                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging']:hover {
                    background-color: rgba(100, 100, 100, 1);
                }
                div[coolrisTopBanner] .top {
                    position: absolute;
                    top: 0;
                    width: 100%;
                }
                div[coolrisTopBanner] .topbanner-list .topbanner-item {
                    height: 79px;
                }
                div[coolrisTopBanner] .topbanner-list .topbanner-item img{
                    display: block;
                    margin: 0 auto;
                }
                div[coolrisTopBanner] .topbanner-paging p[data-name='topbannerClose'] {
                    font-size: 13px;
                    color: #000000;
                    position: absolute;
                    top: 60px;
                    right: 15px;
                    cursor: pointer;
                    margin: 0;
                    letter-spacing: -0.5px;
                }
                div[coolrisTopBanner] .topbanner-paging p[data-name='topbannerClose']:hover {
                    font-weight: bold;
                }
            </style>
            <div coolrisTopBanner data-name="topBanner">
                <div>
                    <div class="inner topbanner-paging">
                        <ul>
                            {{ for(var idx in it.coolTopBannerItems) { }}
                                <li><span data-name="topbannerPaging"></span></li>
                            {{ } }}
                        </ul>
                        <p data-name="topbannerClose" class="">오늘 보지 않기</p>
                    </div>
                    <div class="topbanner-list">
                        {{ for(var idx in it.coolTopBannerItems) { }}
                        <a onclick="ga('send', 'event', 'link', 'coolris', 'coolris_{{=it.coolTopBannerItems[idx].googleAnalyticsId}}');" href="{{=it.coolTopBannerItems[idx].url}}" target="_blank">
                            <!--suppress CssInvalidPropertyValue -->
                            <div class="topbanner-item" style="background-color: #{{=it.coolTopBannerItems[idx].backgroundColor}}">
                                <div class="inner">
                                    <img src="{{=it.coolTopBannerItems[idx].img}}" alt="img" />
                                </div>
                            </div>
                        </a>
                        {{ } }}
                    </div>
                </div>
            </div>
        `
    }

    // 포인트 템플릿
    getPointTemplate() {
        return `
            <style>
                div[coolrisPoint] {
                    display: table-cell;
                    vertical-align: middle;
                    padding-right: 13px;
                }
                div[coolrisPoint] a {
                    font-size: 14px;
                    display: block;
                    font-weight: bold;
                    color: #00a1e4 !important;
                }
                div[coolrisPoint] a img {
                    vertical-align: middle;
                    display: inline-block;
                    margin-right: 3px;
                }
            </style>
            <div coolrisPoint>
                <a onclick="ga('send', 'event', 'link', 'coolris', 'coolpoint');" href="//point.coolschool.co.kr" target="_blank">
                    <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/point.png" alt="img" />
                    <span data-name="spanPoint"></span>
                </a>
            </div>   
        `
    }

    // 로그인 전 템플릿
    getBeforLoginTemplate() {
        return `
            <style>
                div[coolrisBeforLogin] {
                    /*margin-top: -3px;*/
                }
                div[coolrisBeforLogin] a {
                    font-size: 13px;
                    color: #000000;
                }
                div[coolrisBeforLogin] span {
                    display: inline-block;
                    margin: 0 3px;
                }
            </style>
            <div coolrisBeforLogin>
                <a href="javascript:void(0)" data-name="aCoolLogin">로그인</a> 
                <span>/</span> 
                <a onclick="ga('send', 'event', 'link', 'coolris', 'join');" href="">회원가입</a>
            </div>
        `
    }

    // 알람 템플릿
    getAlarmTemplate() {
        return `
            <style>
                div[coolrisAlarm] {
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    font-family: 'dotum', sans-serif;
                }
                div[coolrisAlarm] .coolris-alarm-btn {
                    cursor: pointer;
                }
                div[coolrisAlarm] .coolris-alarm-btn img {
                    display: block;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown {
                    background-color: #ffffff;
                    display: none;
                    padding: 12px 10px 10px;
                    min-width: 182px;
                    border: 1px solid #9b9b9b;
                    border-radius: .25rem;
                    position: absolute;
                    top: 32px;
                    right: 0;
                    font-size: 12px;
                    width: 300px;
                    z-index: 9999;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown.show {
                    display: block;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown .dropdown-tail {
                    position: absolute;
                    top: -8px;
                    right: 3px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li {
                    border-bottom: 1px solid #ebebeb;
                    padding: 13px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li:hover {
                    background-color: rgba(100,100,100,0.1);
                }
                div[coolrisAlarm] .coolris-alarm-dropdown ul {
                    height: auto;
                    max-height: 330px;
                    overflow-y: auto;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li p {
                    color: #414141;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-bottom: 1px;
                    margin-top: 0;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-bottom: 1px;
                    color: #b0b0b0;
                    display: block;
                    margin-top: 10px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown div {
                    text-align: center;
                    padding-top: 15px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown div a {
                    display: inline-block;
                    padding: 0 25px;
                    min-width: 55px;
                    line-height: 30px;
                    height: 33px;
                    font-size: 13px;
                    border-radius: 5px;
                    border: 1px solid #9b9b9b;
                    box-sizing: border-box;
                    transition: opacity 0.2s, box-shadow 0.2s;
                    color: #000000;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown div a:hover {
                    opacity: 0.6;
                    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.26);
                }
            </style>
            <div coolrisAlarm>
                <span class="coolris-alarm-btn" onclick="ga('send', 'event', 'link', 'coolris', 'alarm');">
                    <img class="coolris-alarm-img" src="//update.coolmessenger.com/_ImageServer/metoring/kin_alam_on.png" alt="알람 이미지"/>
                </span>
                <div class="coolris-alarm-dropdown">
                    <img class="dropdown-tail" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png" alt="img" />
                    <ul>
                    {{ for(var idx in it.coolAlarmItems) { }}
                        <li onclick="ga('send', 'event', 'link', 'coolris', 'alarm-item');">
                            <a href="{{=it.coolAlarmItems[idx].url}}" target="_blank">
                                <p>{{=it.coolAlarmItems[idx].message}}</p>
                                <span>{{=it.toDateYmdFormat(new Date(it.coolAlarmItems[idx].createdDate))}}</span>
                            </a>
                        </li>
                    {{ } }}
                    </ul>
                    <div>
                        <a onclick="ga('send', 'event', 'link', 'coolris', 'all-alarm');" href="/notification/index" target="_blank">알림 모두 보기</a>
                    </div>
                </div>
            </div>   
        `
    }

    // 로그인 템플릿
    getLoginTemplate() {
        return  `
            <style>
                div[coolrisProfile] {
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    padding-right: 13px;
                }
                div[coolrisProfile] img {
                    vertical-align: middle;
                    border-style: none;
                }
                div[coolrisProfile] .coolris-profile-btn {
                    cursor: pointer;
                    background-color: #f7f7f7;
                    font-size: 14px;
                    display: block;
                    vertical-align: middle;
                }
                div[coolrisProfile] .coolris-profile-btn .profile-name {
                    font-weight: bold;
                    color: #000000;
                    margin-right: 3px;
                    padding-right: 12px;
                    position: relative;
                }
                div[coolrisProfile] .coolris-profile-btn .profile-name:after {
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/coolprofile_arrow.png);
                    background-size: 8px 5px;
                    background-position: right center;
                    background-repeat: no-repeat;
                    content: '';
                    display: block;
                    width: 8px;
                    height: 5px;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -2px;
                }
                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name {
                    color: #00a1e4;
                }
                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name:after {
                    transform: rotate(180deg);
                }
                div[coolrisProfile] .coolris-profile-btn .profile-img {
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    margin-right: 3px;
                }
                div[coolrisProfile] .coolris-profile-btn:after {
                    display: none !important;
                }
                div[coolrisProfile] .coolris-profile-dropdown {
                    background-color: #ffffff;
                    display: none;
                    padding: 12px 10px 10px;
                    min-width: 182px;
                    border: 1px solid #9b9b9b;
                    border-radius: .25rem;
                    position: absolute;
                    top: 33px;
                    right: 0;
                    z-index: 9999;
                }
                div[coolrisProfile] .coolris-profile-dropdown.show {
                    display: block;
                }
                div[coolrisProfile] .coolris-profile-dropdown .dropdown-tail {
                    position: absolute;
                    top: -8px;
                    right: 20px;
                }
                div[coolrisProfile] .coolris-profile-dropdown p {
                    color: #000000;
                    font-size: 14px;
                    font-family: 'Noto Sans', sans-serif;
                    margin-bottom: 8px;
                    margin-top: 0;
                }
                div[coolrisProfile] .coolris-profile-dropdown div {
                    color: #7e7e7e;
                    font-size: 14px;
                }
                div[coolrisProfile] .coolris-profile-dropdown p a {
                    color: #000000;
                    font-size: 14px;
                }
                div[coolrisProfile] .coolris-profile-dropdown p {
                    text-align: center;
                }
                div[coolrisProfile] .coolris-profile-dropdown a img {
                   margin-top: -3px;
                   vertical-align: middle;
                }
                div[coolrisProfile] .coolris-profile-dropdown .logout {
                    height: 28px;
                    line-height: 28px;
                    font-size: 13px;
                    color: #232323;
                    background-color: #fafafa;
                    display: block;
                    border: 1px solid #dedede;
                    text-align: center;
                    margin-top: 17px;
                    cursor: pointer;
                }
            </style>
            <div coolrisProfile>
                <div class="coolris-profile-dropdown">
                    <img class="dropdown-tail" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png" alt="img" />
                    <p><a onclick="ga('send', 'event', 'link', 'coolris', 'myinfo');" href="//member.coolschool.co.kr/my/#/">내정보 보기</a></p>
                    <span class="logout dropdown-close" data-name="spanLogout">로그아웃</span>
                </div>
                <span class="coolris-profile-btn" onclick="ga('send', 'event', 'link', 'coolris', 'profile');">
                    <img class="profile-img" data-name="imgProfileImg"
                        src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png"
                        onerror="this.src='//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png'" 
                        alt="img" />
                    <span class="profile-name" data-name="spanProfileName"></span>
                </span>
            </div>
        `
    }

    // gnb 메뉴 템플릿
    getGnbMenuTemplate() {
        return `
            <style>
                ul[coolrisGnbMenu] {
                    float: left;
                }
                ul[coolrisGnbMenu]:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                ul[coolrisGnbMenu] li {
                    float: left;
                    margin-right: 28px;
                    position: relative;
                }
                ul[coolrisGnbMenu] li:after {
                    content: '';
                    display: block;
                    width: 1px;
                    height: 12px;
                    background-color: #dedede;
                    position: absolute;
                    right: -15px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                ul[coolrisGnbMenu] li a {
                    font-size: 16px !important;
                    line-height: 25px;
                    color: #000000;
                    text-decoration: none;
                    display: block;
                }
            </style>
            <ul coolrisGnbMenu>
                <li onclick="ga('send', 'event', 'link', 'coolris', 'coolschool-home');">
                    <a href="//www.coolschool.co.kr/" target="_blank">쿨스쿨 홈</a>
                </li>
                <li onclick="ga('send', 'event', 'link', 'coolris', 'coolmessenger');">
                    <a href="//school.coolmessenger.com/" target="_blank">쿨메신저</a>
                </li>
                <li onclick="ga('send', 'event', 'link', 'coolris', 'coolsms');">
                    <a href="//coolsms.coolmessenger.com/" target="_blank">문자</a>
                </li>
                <li>
                    <a href="" target="_blank">교육자료</a>
                </li>
                <li onclick="ga('send', 'event', 'link', 'coolris', 'cooledu');">
                    <a href="//cooledu.coolschool.co.kr/" target="_blank">연수,모임</a>
                </li>
                <li onclick="ga('send', 'event', 'link', 'coolris', 'myinfo');">
                    <a href="//coolmarket.coolschool.co.kr/" target="_blank">교직원몰</a>
                </li>
            </ul>
        `
    }

    // 더보기 템플릿
    getMoreTemplate() {
        return `
            <style>
                div[coolrisMore] {
                    position: relative;
                    float: left;
                    margin-top: -2px;
                    line-height: 1;
                }
                div[coolrisMore] .coolris-more-dropdown a:hover {
                    text-decoration: underline;
                }
                div[coolrisMore] .coolris-more-dropdown a { color: #000000; }
                div[coolrisMore] .coolris-more-dropdown {
                    display: none;
                    border: 1px solid #545454;
                    font-family: 'dotum', sans-serif;
                    font-size: 12px;
                    line-height: 25px;
                    width: 556px;
                    position: absolute;
                    background-color: #ffffff;
                    right: 0;
                    top: 33px;
                    z-index: 9999;
                }
                div[coolrisMore] .coolris-more-dropdown.show {
                    display: block;
                }
                div[coolrisMore] .coolris-more-btn {
                    cursor: pointer;
                    position: relative;
                    padding-right: 20px;
                    font-size: 14px;
                }
                div[coolrisMore] .coolris-more-btn:after {
                    content: '';
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -4px;
                    transition: transform 0.3s;
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow.png);
                    background-repeat: no-repeat;
                    width: 13px;
                    height: 8px;
                }
                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn:after {
                    transform: rotate(-180deg);
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow-on.png);
                }
                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn {
                    color: #00a1e4;
                }
                div[coolrisMore] ul:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                div[coolrisMore] ul {
                    display: table;
                    width: 100%;
                }
                div[coolrisMore] ul li {
                    width: 20%;
                    padding-left: 15px;
                    border-right: 1px solid #e1e1e1;
                    display: table-cell;
                }
                div[coolrisMore] ul li:last-child {
                    border-right: 0;
                }
                div[coolrisMore] ul li h4 {
                    color: #000000;
                    margin-top: 16px !important;
                    font-size: 12px !important;
                    line-height: 25px;
                }
                div[coolrisMore] ul li a {
                    color: #8d8d8d !important;
                    display: block;
                    margin-top: 3px;
                    width: 100%;
                    font-size: 12px !important;
                }
                div[coolrisMore] ul li a:visited, div[coolrisMore] ul li a:focus, div[coolrisMore] ul li a:hover {
                    color: #8d8d8d !important;
                }
                div[coolrisMore] div.coolris-more-dropdown div {
                    border-top: 1px solid #e1e1e1;
                    height: 36px;
                    line-height: 36px;
                    padding: 0 15px;
                }
                div[coolrisMore] div.coolris-more-dropdown div:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                div[coolrisMore] div a {
                    float: left;
                }
                div[coolrisMore] div span {
                    float: right;
                    cursor: pointer;
                }
            </style>
            <div coolrisMore>
                <div class="coolris-more-dropdown">
                    <ul>
                        <li>
                            <h4>학교업무</h4>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolmessenger');" href="//school.coolmessenger.com/" target="_blank">쿨메신저</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolsms');" href="//coolsms.coolmessenger.com/" target="_blank">문자</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolmova');" href="//coolmova.coolschool.co.kr/" target="_blank">안심번호</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolbooks');" href="//school.coolbooks.co.kr/" target="_blank">학교간행물</a>
                        </li>
                        <li>
                            <h4>교사생활</h4>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'samstory');" href="//samstory.coolschool.co.kr/" target="_blank">블로그</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolbooks');" href="//coolbooks.coolschool.co.kr/" target="_blank">책</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'cooledulub');" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">모임</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'mentoring');" href="//www.coolschool.co.kr/kin/mentoringList" target="_blank">학교생활상담</a>
                        </li>
                        <li>
                            <h4>학교연수</h4>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'cooledu');" href="//cooledu.coolschool.co.kr/" target="_blank">원격연수</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'cooledulub');" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">집합연수</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolpama');" href="//coolpama.coolschool.co.kr/" target="_blank">학부모연수</a>
                        </li>
                        <li>
                            <h4>학교마켓</h4>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'coolmarket');" href="//coolmarket.coolschool.co.kr/" target="_blank">교구몰</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'tmall');" href="//t-mall.coolschool.co.kr/" target="_blank">복지몰</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'tfun');" href="//t-fun.coolschool.co.kr/" target="_blank">펀딩</a>
                        </li>
                        <li>
                            <h4>교육이슈</h4>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'samstory');" href="//samstory.coolschool.co.kr/zone/story/eduin" target="_blank">교육뉴스</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'edutech');" href="//www.coolschool.co.kr/edutech" target="_blank" style="margin-bottom: 10px;">교육트랜드</a>
                            <h4>쿨스쿨소식</h4>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'cooledu');" href="//www.coolschool.co.kr/news/index" target="_blank">공지/소식</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'support');" href="//www.coolschool.co.kr/messenger/technicalSupport" target="_blank">문의하기</a>
                            <a onclick="ga('send', 'event', 'link', 'coolris', 'search');" href="//www.coolschool.co.kr/profile/search" target="_blank" style="margin-bottom: 22px">선생님검색</a>
                        </li>
                    </ul>
                    <div>
                        <a onclick="ga('send', 'event', 'link', 'coolris', 'all-service');" href="//local.coolschool.co.kr/allService" target="_blank">서비스 전체보기</a>
                        <span class="dropdown-close">닫기</span>
                    </div>
                </div>
                <span class="coolris-more-btn">
                    더보기
                </span>
            </div>
        `
    }

    // gnb 템플릿
    getGnbTemplate(coolTemplate: CoolTemplate) {
        return `
            <style>
                @font-face {
                    font-family: 'NotoSansKRRegular';
                    src: url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Regular-subset.woff2") format('woff2'),
                    url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Regular-subset.woff") format('woff'),
                    url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Regular-subset.otf") format('opentype');
                }
            
                body {
                    margin: 0;
                }
                @media screen and (max-width: 980px) {
                    #coolrisGnb > div {
                        display: none;
                    }
                }
                .coolris-gnb[coolrisGnb] {
                    /*line-height: 1;*/
                    font-family: NotoSansKRRegular, sans-serif;
                    width: 100%;
                    border-bottom: 1px solid #dedede;
                    background-color: #f7f7f7;
                }
                .coolris-gnb[coolrisGnb] h4 {
                    margin: 0;
                }
                .coolris-gnb[coolrisGnb] a {
                    text-decoration: none;
                }
                .coolris-gnb[coolrisGnb] a:hover, .coolris-gnb[coolrisGnb] a:focus, .coolris-gnb[coolrisGnb] a:visited {
                    text-decoration: none;
                    color: #000000;
                }
                .coolris-gnb[coolrisGnb] ul {
                    margin: 0;
                    padding: 0;
                }
                .coolris-gnb[coolrisGnb] li {
                    list-style: none;
                    box-sizing: border-box;
                }
                .coolris-gnb[coolrisGnb] > div:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                .coolris-gnb[coolrisGnb] > div {
                    width: 980px;
                    margin: 0 auto;
                    padding: 12px 0;
                    box-sizing: border-box;
                }
                .coolris-gnb[coolrisGnb] > div:nth-child(2) {
                    height: 51px;
                }
                .coolris-gnb[coolrisGnb] > div[data-name='divTopBannerArea'] {
                    padding: 0;
                    width: 100%;
                }
                .coolris-gnb[coolrisGnb] .coolris-login-section {
                    float: right;
                    /*display: table;*/
                    /*margin-top: 2px;*/
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .coolris-gnb[coolrisGnb] .coolris-menu-section {
                    float: left;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
            </style>
            <div class="coolris-gnb" coolrisGnb>
                <div>
                    <div class="coolris-menu-section">
                        ${coolTemplate.menu}
                        ${coolTemplate.more}
                    </div>
                    <div class="coolris-login-section">
                        {{? it.isLogin === false }}
                            ${coolTemplate.beforeLogin}
                        {{?? it.isLogin === true }}
                            ${coolTemplate.login}
                            ${coolTemplate.point}
                            <div data-name="divAlarmArea"></div>
                        {{?}}
                    </div>
                </div>
            </div>
        `
    }

    async loginCheck() {
        let result = {result: false, coolid: ''} as any;
        try {
            result = await $.ajax({
                method: 'GET',
                dataType: 'jsonp',
                url: `${constants.memberUrl}/loginCheck`
            });
        } catch (e) {
            return {result: false};
        }

        if (!result || !result.coolid) {
            return {result: false};
        }
        return {result: true, data: result};
    }

    async loadProfileResult(accessToken: string) {
        let response;
        try {
            response = await $.ajax(`${constants.searchUrl}/api/cool/_searchMemberByAccessToken/${accessToken}`);
        } catch (e) {
            response = {result: false}
        }
        return response;
    }

    settingProfile(profileData: any) {
        $('[data-name=imgProfileImg]').attr('src', profileData.profileImage);
        $('[data-name=spanProfileName]').html(profileData.name);
        $('[data-name=spanPoint]').html(this.addComma(profileData.point));
    }

    async loadAlarmMessage(coolIdx: number) {
        let response;
        try {
            response = await $.ajax(`${constants.searchUrl}/api/coolMessage/_search/coolIdx/${coolIdx}`);
        } catch (e) {
            response = {result: false}
        }
        return response;
    }

    private addComma(num: any) {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    /**
     * 쿨스쿨 로그인 페이지로 이동
     * @param {string} clientId
     * @param {string} action (선택)
     * @param env 개발 URL 사용여부
     */
    goDefaultCoolLogin(clientId = '', action = '') {
        const COOL_LOGIN_CALLBACK_URL = window.location.protocol + '//' + window.location.host + '/callback';
        const COOL_LOGIN_URL = `${constants.memberUrl}/login`;
        const param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_URL,
            redirect_uri_next: window.location.href,
            do_action: action,
        };

        let loginURL = COOL_LOGIN_URL;
        let paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = `${loginURL}?${paramStr}`;
    }

    goCoolLogin() {
        const CLIENT_ID = this.getClientId();
        this.goDefaultCoolLogin(CLIENT_ID);
    }

    async logout(logoutOpts?: LogoutOpts | any): Promise<boolean> {
        const logoutUrl = `${constants.memberUrl}/logout?client_id=:client_id`;
        const logoutProc = `${constants.memberUrl}/logoutProc`;
        const setting = {
            url: logoutUrl.replace(':client_id', this.getClientId),
            type: 'GET',
            contentType: "application/json",
            dataType: "jsonp",
        };
        const settingResponse = await $.ajax(setting);
        if (settingResponse.result === 'success') {
            this.setCookie('accessToken', '', -1 as any);
            this.setCookie('client_id', '', -1 as any);

            logoutOpts = logoutOpts || {};
            if(logoutOpts.isLogoutProc === undefined || logoutOpts.isLogoutProc === true) {
                if (!logoutOpts.logoutProcUrl) {
                    await $.get(`//${window.location.host}/logoutProc`);
                } else {
                    await $.get(`${logoutOpts.logoutProcUrl}/logoutProc`);
                }
            }
            if (logoutOpts.isRestoreLocation === undefined || logoutOpts.isRestoreLocation === true) { // 로그아웃 후 있던 페이지에 머무를 것이냐 말것이냐
                location.href = `//${window.location.host}${window.location.pathname}`;
            }
            return true;
        }
        return false;
    }

    /**
     * 로그인, 로그아웃 이벤트 등록
     */
    onLoginOutEvents() {
        // 로그인
        $("[data-name='aCoolLogin']").click(() => {
            ga('send', 'event', 'link', 'coolris', 'login');
            this.goCoolLogin();
        });
        // 로그아웃
        $("[data-name='spanLogout']").click(() => {
            ga('send', 'event', 'link', 'coolris', 'logout');
            this.logout();
        });
    }

    getClientId() {
        let host = location.host;
        host = host.replace('.coolschool.co.kr', '')
            .replace('local-', '')
            .replace('dev-', '')
            .replace('local', '')
            .replace('dev', '');
        let clientId = (constants as any).clientIds[host];
        if(!clientId && console) {
            console.warn('can`t not find clientId');
        }
        return clientId;
    }

    /**
     * 쿠키 저장
     * @param cname
     * @param cvalue
     * @param exdays
     */
    setCookie(cname: string, cvalue: string, exdays: number) {
        const d = new Date();
        // tslint:disable-next-line
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    /**
     * 쿠키 가져오기
     * @param cname
     */
    getCookie(cname: string) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    /**
     * y.m.d 형태로 format 변경
     * @param date
     */
    toDateYmdFormat(date: Date) {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth() + 1).toString();
        const dd = date.getDate().toString();

        return yyyy + '.' +(mm[1] ? mm : '0' + mm[0]) + '.' + (dd[1] ? dd : '0' + dd[0]);
    }

    /**
     *  알람 데이터 로드 및 세팅
     */
    async loadSettingMyArea() {
        let coolAlarmItems = [];
        // 프로필 세팅
        const profileResult = await this.loadProfileResult(this.accessToken);
        if (!profileResult.result) {
            return;
        }
        let profileData = profileResult.data;
        this.settingProfile(profileData);
        // 알림 세팅
        const coolAlarmResponse = await this.loadAlarmMessage(profileData.idx);
        if (!coolAlarmResponse.result) {
            return;
        }
        coolAlarmItems = coolAlarmResponse.data;
        // @ts-ignore
        const alarmTemplateFn = this.doT.template(this.getAlarmTemplate());
        $("[data-name='divAlarmArea']").html(alarmTemplateFn({
            coolAlarmItems: coolAlarmItems,
            toDateYmdFormat: this.toDateYmdFormat
        }));
        // 알람 드롭다운 이벤트
        this.loginToggle('coolris-alarm-btn', 'coolris-alarm-dropdown');
        this.loginDropdown('coolris-alarm-dropdown', this.targetAlarmCheck);
    }

    /**
     *  탑배너 데이터 로드 및 세팅
     */
    async loadSettingTopBanner() {
        const setting = {
            url: '//samstory.coolschool.co.kr/api/externalJsonInfo?type=topBanner',
            type: 'GET'
        };

        const responseStr = await $.ajax(setting);
        const response = JSON.parse(responseStr);

        if (!response || !response.categories || response.categories.length === 0) {
            return;
        }

        // 배너 기한 체크
        const nowDate = new Date();
        response.bannerData = response.categories.filter((k: any) => {
            if (nowDate >= new Date(k.startDate) && nowDate <= new Date(k.endDate)) {
                return k;
            }
        });

        this.suffle(response.bannerData);
        if (!response.bannerData || response.bannerData.length === 0) {
            return;
        }
        // @ts-ignore
        const topBannerTemplateFn = this.doT.template(this.getTopBannerTemplate());
        $("[data-name='divTopBannerArea']").html(topBannerTemplateFn({
            coolTopBannerItems: response.bannerData,
        }));

        // 탑배너 슬라이드 이벤트
        this.topBannerSlideEvent();
        // 탑배너 닫기 이벤트
        this.topbannerCloseEvent();
    }

    suffle(a: any) {
        let j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
}
