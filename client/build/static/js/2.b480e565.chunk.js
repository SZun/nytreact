webpackJsonp([2],Array(96).concat([function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(104),i=r.n(o),a=r(0),u=r.n(a),s=r(134),c=r(138),f=r(127),l=this,p=function(t){if(null===localStorage.getItem("allArticles"))return t.history.push("/"),null;var e=localStorage.getItem("allArticles");e=JSON.parse(e);var r={banan:e},o=function(){var t=n(i.a.mark(function t(e,r,n){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o={title:e,date:r,url:n},t.next=4,s.a.post("/",o);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("Error: "+t.t0.message);case 9:case"end":return t.stop()}},t,l,[[0,6]])}));return function(e,r,n){return t.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement(f.a,{header:"Latest Results"},r.banan.map(function(t){return u.a.createElement(c.a,{key:t.date,link:t.url,clicked:function(){return o(t.title,t.date,t.url)}},t.title)})))};e.default=p},function(t,e,r){"use strict";function n(t){return"[object Array]"===C.call(t)}function o(t){return"[object ArrayBuffer]"===C.call(t)}function i(t){return"undefined"!==typeof FormData&&t instanceof FormData}function a(t){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"===typeof t}function s(t){return"number"===typeof t}function c(t){return"undefined"===typeof t}function f(t){return null!==t&&"object"===typeof t}function l(t){return"[object Date]"===C.call(t)}function p(t){return"[object File]"===C.call(t)}function h(t){return"[object Blob]"===C.call(t)}function d(t){return"[object Function]"===C.call(t)}function m(t){return f(t)&&d(t.pipe)}function y(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=x(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)w(arguments[r],t);return e}function E(t,e,r){return w(e,function(e,n){t[n]=r&&"function"===typeof e?b(e,r):e}),t}var b=r(99),L=r(109),C=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isBuffer:L,isFormData:i,isArrayBufferView:a,isString:u,isNumber:s,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:h,isFunction:d,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:w,merge:x,extend:E,trim:v}},function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(97),i=r(112),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var t;return"undefined"!==typeof XMLHttpRequest?t=r(100):"undefined"!==typeof e&&(t=r(100)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){u.headers[t]={}}),o.forEach(["post","put","patch"],function(t){u.headers[t]=o.merge(a)}),t.exports=u}).call(e,r(111))},function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";var n=r(97),o=r(113),i=r(115),a=r(116),u=r(117),s=r(101),c="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||r(118);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest,d="onreadystatechange",m=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in h||u(t.url)||(h=new window.XDomainRequest,d="onload",m=!0,h.onprogress=function(){},h.ontimeout=function(){}),t.auth){var y=t.auth.username||"",v=t.auth.password||"";p.Authorization="Basic "+c(y+":"+v)}if(h.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h[d]=function(){if(h&&(4===h.readyState||m)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?h.response:h.responseText,i={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:r,config:t,request:h};o(e,f,i),h=null}},h.onerror=function(){f(s("Network Error",t,null,h)),h=null},h.ontimeout=function(){f(s("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=r(119),w=(t.withCredentials||u(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in h&&n.forEach(p,function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete p[e]:h.setRequestHeader(e,t)}),t.withCredentials&&(h.withCredentials=!0),t.responseType)try{h.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"===typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){h&&(h.abort(),f(t),h=null)}),void 0===l&&(l=null),h.send(l)})}},function(t,e,r){"use strict";var n=r(114);t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,r){t.exports=r(105)},function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(106),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new h(n||[]);return a._invoke=c(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&g.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){s.value=t,i(s)},a)}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function c(t,e,r){var o=R;return function(i,a){if(o===A)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw a;return m()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var s=f(u,r);if(s){if(s===j)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===R)throw o=S,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=A;var c=n(t,e,r);if("normal"===c.type){if(o=r.done?S:T,c.arg===j)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=S,r.method="throw",r.arg=c.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,j;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,j):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:y,done:!0}}var y,v=Object.prototype,g=v.hasOwnProperty,w="function"===typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",E=w.asyncIterator||"@@asyncIterator",b=w.toStringTag||"@@toStringTag",L="object"===typeof t,C=e.regeneratorRuntime;if(C)return void(L&&(t.exports=C));C=e.regeneratorRuntime=L?t.exports:{},C.wrap=r;var R="suspendedStart",T="suspendedYield",A="executing",S="completed",j={},k={};k[x]=function(){return this};var O=Object.getPrototypeOf,N=O&&O(O(d([])));N&&N!==v&&g.call(N,x)&&(k=N);var B=a.prototype=o.prototype=Object.create(k);i.prototype=B.constructor=a,a.constructor=i,a[b]=i.displayName="GeneratorFunction",C.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},C.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(B),t},C.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[E]=function(){return this},C.AsyncIterator=s,C.async=function(t,e,n,o){var i=new s(r(t,e,n,o));return C.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(B),B[b]="Generator",B[x]=function(){return this},B.toString=function(){return"[object Generator]"},C.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},C.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),j}}}(function(){return this}()||Function("return this")())},function(t,e,r){t.exports=r(108)},function(t,e,r){"use strict";function n(t){var e=new a(t),r=i(a.prototype.request,e);return o.extend(r,a.prototype,e),o.extend(r,e),r}var o=r(97),i=r(99),a=r(110),u=r(98),s=n(u);s.Axios=a,s.create=function(t){return n(o.merge(u,t))},s.Cancel=r(103),s.CancelToken=r(125),s.isCancel=r(102),s.all=function(t){return Promise.all(t)},s.spread=r(126),t.exports=s,t.exports.default=s},function(t,e){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=r(98),i=r(97),a=r(120),u=r(121);n.prototype.request=function(t){"string"===typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[u,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){m&&h&&(m=!1,h.length?d=h.concat(d):y=-1,d.length&&u())}function u(){if(!m){var t=o(a);m=!0;for(var e=d.length;e;){for(h=d,d=[];++y<e;)h&&h[y].run();y=-1,e=d.length}h=null,m=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var f,l,p=t.exports={};!function(){try{f="function"===typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"===typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var h,d=[],m=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new s(t,e)),1!==d.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(97);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},function(t,e,r){"use strict";var n=r(101);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(97);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&"undefined"!==typeof t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(n(e)+"="+n(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},function(t,e,r){"use strict";var n=r(97),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}}),a):a}},function(t,e,r){"use strict";var n=r(97);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),a="",u=0,s=i;o.charAt(0|u)||(s="=",u%1);a+=s.charAt(63&e>>8-u%1*8)){if((r=o.charCodeAt(u+=.75))>255)throw new n;e=e<<8|r}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,r){"use strict";var n=r(97);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,a){var u=[];u.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(97);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(97),i=r(122),a=r(102),u=r(98),s=r(123),c=r(124);t.exports=function(t){return n(t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,r){"use strict";var n=r(97);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";function n(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(103);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,r){"use strict";var n=r(0),o=r.n(n),i=r(8),a=r(128),u=(r.n(a),function(t){return o.a.createElement("div",{className:"Card"},o.a.createElement(i.b,null,o.a.createElement(i.d,null,o.a.createElement("h1",null,t.header)),o.a.createElement(i.c,null,t.children)))});e.a=u},function(t,e,r){var n=r(129);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(93)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){e=t.exports=r(92)(!0),e.push([t.i,".Card .card{background-color:#ffc107}","",{version:3,sources:["/Users/samg.zun/Desktop/nytreact/client/src/components/Card/Card.css"],names:[],mappings:"AAAA,YACI,wBAA0B,CAC7B",file:"Card.css",sourcesContent:[".Card .card {\n    background-color: #ffc107;\n}"],sourceRoot:""}])},function(t,e,r){"use strict";var n=r(0),o=r.n(n),i=r(8),a=function(t){return o.a.createElement(i.a,{color:t.color,onClick:t.clicked,className:t.className},t.children)};e.a=a},,,,function(t,e,r){"use strict";var n=r(107),o=r.n(n),i=o.a.create({baseURL:"/api/articles"});e.a=i},,,,function(t,e,r){"use strict";var n=r(0),o=r.n(n),i=r(8),a=r(130),u=function(t){var e={textDecoration:"none",color:"#000000"};return o.a.createElement(i.f,{className:"my-5 Result"},o.a.createElement(i.l,null,o.a.createElement(i.e,{sm:"6"},o.a.createElement("a",{href:t.link,target:"_blank",style:e},o.a.createElement("h2",{className:"text-left"},t.children))),o.a.createElement(i.e,{sm:"3"}),o.a.createElement(i.e,{sm:"3"},o.a.createElement(a.a,{clicked:t.clicked,color:"success"},"Save Article"))))};e.a=u}]));
//# sourceMappingURL=2.b480e565.chunk.js.map