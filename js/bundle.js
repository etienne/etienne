!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e){t.exports=function(t,e,n){return t instanceof HTMLCollection||t instanceof NodeList||t instanceof Array?Array.prototype.forEach.call(t,e,n):e.call(n,t)}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(0);t.exports=function(t,e,n,i){e="string"==typeof e?e.split(" "):e,e.forEach(function(e){o(t,function(t){t.addEventListener(e,n,i)})})}},function(t,e){t.exports=function(t){if(null===t||"object"!=typeof t)return t;var e=t.constructor();for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}},function(t,e,n){(function(e,n){/*! @vimeo/player v2.1.0 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}function o(t,e,n){var o=k.get(t.element)||{};e in o||(o[e]=[]),o[e].push(n),k.set(t.element,o)}function i(t,e){return(k.get(t.element)||{})[e]||[]}function r(t,e,n){var o=k.get(t.element)||{};if(!o[e])return!0;if(!n)return o[e]=[],k.set(t.element,o),!0;var i=o[e].indexOf(n);return-1!==i&&o[e].splice(i,1),k.set(t.element,o),o[e]&&0===o[e].length}function a(t,e){var n=i(t,e);if(n.length<1)return!1;var o=n.shift();return r(t,e,o),o}function s(t,e){var n=k.get(t);k.set(e,n),k.delete(t)}function c(t,e){return 0===t.indexOf(e.toLowerCase())?t:""+e.toLowerCase()+t.substr(0,1).toUpperCase()+t.substr(1)}function u(t){return t instanceof window.HTMLElement}function l(t){return!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t}function f(t){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(t)}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=t.url,o=e||n;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(l(o))return"https://vimeo.com/"+o;if(f(o))return o.replace("http:","https:");if(e)throw new TypeError("“"+e+"” is not a valid video id.");throw new TypeError("“"+o+"” is not a vimeo.com url.")}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return A.reduce(function(e,n){var o=t.getAttribute("data-vimeo-"+n);return(o||""===o)&&(e[n]=""===o?1:o),e},e)}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,o){if(!f(t))throw new TypeError("“"+t+"” is not a vimeo.com url.");var i="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(t);for(var r in e)e.hasOwnProperty(r)&&(i+="&"+r+"="+encodeURIComponent(e[r]));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",i,!0),a.onload=function(){if(404===a.status)return void o(new Error("“"+t+"” was not found."));if(403===a.status)return void o(new Error("“"+t+"” is not embeddable."));try{var e=JSON.parse(a.responseText);n(e)}catch(t){o(t)}},a.onerror=function(){var t=a.status?" ("+a.status+")":"";o(new Error("There was an error fetching the embed code from Vimeo"+t+"."))},a.send()})}function m(t,e){var n=t.html;if(!e)throw new TypeError("An element must be provided");if(null!==e.getAttribute("data-vimeo-initialized"))return e.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,e.appendChild(o.firstChild),e.setAttribute("data-vimeo-initialized","true"),e.querySelector("iframe")}function v(t){return"string"==typeof t&&(t=JSON.parse(t)),t}function y(t,e,n){if(t.element.contentWindow&&t.element.contentWindow.postMessage){var o={method:e};void 0!==n&&(o.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(o=JSON.stringify(o)),t.element.contentWindow.postMessage(o,t.origin)}}function g(t,e){e=v(e);var n=[],o=void 0;if(e.event){if("error"===e.event){i(t,e.data.method).forEach(function(n){var o=new Error(e.data.message);o.name=e.data.name,n.reject(o),r(t,e.data.method,n)})}n=i(t,"event:"+e.event),o=e.data}else if(e.method){var s=a(t,e.method);s&&(n.push(s),o=e.value)}n.forEach(function(e){try{if("function"==typeof e)return void e.call(t,o);e.resolve(o)}catch(t){}})}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var b=void 0!==Array.prototype.indexOf,E=void 0!==window.postMessage;if(!b||!E)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var T="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},x=(t(function(t,e){!function(t){function e(t,e){function o(t){if(!this||this.constructor!==o)return new o(t);this._keys=[],this._values=[],this._itp=[],this.objectOnly=e,t&&n.call(this,t)}return e||w(t,"size",{get:v}),t.constructor=o,o.prototype=t,o}function n(t){this.add?t.forEach(this.add,this):t.forEach(function(t){this.set(t[0],t[1])},this)}function o(t){return this.has(t)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(t){g<t[0]&&t[0]--})),-1<g}function i(t){return this.has(t)?this._values[g]:void 0}function r(t,e){if(this.objectOnly&&e!==Object(e))throw new TypeError("Invalid value used as weak collection key");if(e!=e||0===e)for(g=t.length;g--&&!b(t[g],e););else g=t.indexOf(e);return-1<g}function a(t){return r.call(this,this._values,t)}function s(t){return r.call(this,this._keys,t)}function c(t,e){return this.has(t)?this._values[g]=e:this._values[this._keys.push(t)-1]=e,this}function u(t){return this.has(t)||this._values.push(t),this}function l(){(this._keys||0).length=this._values.length=0}function f(){return m(this._itp,this._keys)}function d(){return m(this._itp,this._values)}function h(){return m(this._itp,this._keys,this._values)}function p(){return m(this._itp,this._values,this._values)}function m(t,e,n){var o=[0],i=!1;return t.push(o),{next:function(){var r,a=o[0];return!i&&a<e.length?(r=n?[e[a],n[a]]:e[a],o[0]++):(i=!0,t.splice(t.indexOf(o),1)),{done:i,value:r}}}}function v(){return this._values.length}function y(t,e){for(var n=this.entries();;){var o=n.next();if(o.done)break;t.call(e,o.value[1],o.value[0],this)}}var g,w=Object.defineProperty,b=function(t,e){return t===e||t!==t&&e!==e};"undefined"==typeof WeakMap&&(t.WeakMap=e({delete:o,clear:l,get:i,has:s,set:c},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(t.Map=e({delete:o,has:s,get:i,set:c,keys:f,values:d,entries:h,forEach:y,clear:l})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(t.Set=e({has:a,add:u,delete:o,clear:l,keys:d,values:d,entries:p,forEach:y})),"undefined"==typeof WeakSet&&(t.WeakSet=e({delete:o,add:u,clear:l,has:a},!0))}(void 0!==T?T:window)}),t(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(e,n,o){n[e]=n[e]||o(),t.exports&&(t.exports=n[e])}("Promise",T,function(){function t(t,e){p.add(t,e),h||(h=v(p.drain))}function o(t){var n,o=void 0===t?"undefined":e(t);return null==t||"object"!=o&&"function"!=o||(n=t.then),"function"==typeof n&&n}function i(){for(var t=0;t<this.chain.length;t++)r(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function r(t,e,n){var i,r;try{!1===e?n.reject(t.msg):(i=!0===e?t.msg:e.call(void 0,t.msg),i===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=o(i))?r.call(i,n.resolve,n.reject):n.resolve(i))}catch(t){n.reject(t)}}function a(e){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=o(e))?t(function(){var t=new u(r);try{n.call(e,function(){a.apply(t,arguments)},function(){s.apply(t,arguments)})}catch(e){s.call(t,e)}}):(r.msg=e,r.state=1,r.chain.length>0&&t(i,r))}catch(t){s.call(new u(r),t)}}}function s(e){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=e,n.state=2,n.chain.length>0&&t(i,n))}function c(t,e,n,o){for(var i=0;i<e.length;i++)!function(i){t.resolve(e[i]).then(function(t){n(i,t)},o)}(i)}function u(t){this.def=t,this.triggered=!1}function l(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function f(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new l(this);this.then=function(e,o){var r={success:"function"!=typeof e||e,failure:"function"==typeof o&&o};return r.promise=new this.constructor(function(t,e){if("function"!=typeof t||"function"!=typeof e)throw TypeError("Not a function");r.resolve=t,r.reject=e}),n.chain.push(r),0!==n.state&&t(i,n),r.promise},this.catch=function(t){return this.then(void 0,t)};try{e.call(void 0,function(t){a.call(n,t)},function(t){s.call(n,t)})}catch(t){s.call(n,t)}}var d,h,p,m=Object.prototype.toString,v=void 0!==n?function(t){return n(t)}:setTimeout;try{Object.defineProperty({},"x",{}),d=function(t,e,n,o){return Object.defineProperty(t,e,{value:n,writable:!0,configurable:!1!==o})}}catch(t){d=function(t,e,n){return t[e]=n,t}}p=function(){function t(t,e){this.fn=t,this.self=e,this.next=void 0}var e,n,o;return{add:function(i,r){o=new t(i,r),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var t=e;for(e=n=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var y=d({},"constructor",f,!1);return f.prototype=y,d(y,"__NPO__",0,!1),d(f,"resolve",function(t){var n=this;return t&&"object"==(void 0===t?"undefined":e(t))&&1===t.__NPO__?t:new n(function(e,n){if("function"!=typeof e||"function"!=typeof n)throw TypeError("Not a function");e(t)})}),d(f,"reject",function(t){return new this(function(e,n){if("function"!=typeof e||"function"!=typeof n)throw TypeError("Not a function");n(t)})}),d(f,"all",function(t){var e=this;return"[object Array]"!=m.call(t)?e.reject(TypeError("Not an array")):0===t.length?e.resolve([]):new e(function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var i=t.length,r=Array(i),a=0;c(e,t,function(t,e){r[t]=e,++a===i&&n(r)},o)})}),d(f,"race",function(t){var e=this;return"[object Array]"!=m.call(t)?e.reject(TypeError("Not an array")):new e(function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");c(e,t,function(t,e){n(e)},o)})}),f})})),k=new WeakMap,A=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],S=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),j=new WeakMap,C=new WeakMap,M=function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(w(this,t),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"string"==typeof e&&(e=document.getElementById(e)),!u(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var i=e.querySelector("iframe");i&&(e=i)}if("IFRAME"===e.nodeName&&!f(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(j.has(e))return j.get(e);this.element=e,this.origin="*";var r=new x(function(t,i){var r=function(e){if(f(e.origin)&&n.element.contentWindow===e.source){"*"===n.origin&&(n.origin=e.origin);var o=v(e.data),i="event"in o&&"ready"===o.event,r="method"in o&&"ping"===o.method;if(i||r)return n.element.setAttribute("data-ready","true"),void t();g(n,o)}};if(window.addEventListener?window.addEventListener("message",r,!1):window.attachEvent&&window.attachEvent("onmessage",r),"IFRAME"!==n.element.nodeName){var a=h(e,o);p(d(a),a).then(function(t){var o=m(t,e);return n.element=o,s(e,o),j.set(n.element,n),t}).catch(function(t){return i(t)})}});return C.set(this,r),j.set(this.element,this),"IFRAME"===this.element.nodeName&&y(this,"ping"),this}return S(t,[{key:"callMethod",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new x(function(i,r){return e.ready().then(function(){o(e,t,{resolve:i,reject:r}),y(e,t,n)})})}},{key:"get",value:function(t){var e=this;return new x(function(n,i){return t=c(t,"get"),e.ready().then(function(){o(e,t,{resolve:n,reject:i}),y(e,t)})})}},{key:"set",value:function(t,e){var n=this;return x.resolve(e).then(function(e){if(t=c(t,"set"),void 0===e||null===e)throw new TypeError("There must be a value to set.");return n.ready().then(function(){return new x(function(i,r){o(n,t,{resolve:i,reject:r}),y(n,t,e)})})})}},{key:"on",value:function(t,e){if(!t)throw new TypeError("You must pass an event name.");if(!e)throw new TypeError("You must pass a callback function.");if("function"!=typeof e)throw new TypeError("The callback must be a function.");0===i(this,"event:"+t).length&&this.callMethod("addEventListener",t).catch(function(){}),o(this,"event:"+t,e)}},{key:"off",value:function(t,e){if(!t)throw new TypeError("You must pass an event name.");if(e&&"function"!=typeof e)throw new TypeError("The callback must be a function.");r(this,"event:"+t,e)&&this.callMethod("removeEventListener",t).catch(function(t){})}},{key:"loadVideo",value:function(t){return this.callMethod("loadVideo",t)}},{key:"ready",value:function(){var t=C.get(this);return x.resolve(t)}},{key:"addCuePoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:t,data:e})}},{key:"removeCuePoint",value:function(t){return this.callMethod("removeCuePoint",t)}},{key:"enableTextTrack",value:function(t,e){if(!t)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:t,kind:e})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(t){return this.set("autopause",t)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(t){return this.set("color",t)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(t){return this.set("currentTime",t)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(t){return this.set("loop",t)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(t){return this.set("volume",t)}}]),t}();return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(t){"console"in window&&console.error&&console.error("There was an error creating an embed: "+t)};e.forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=h(t);p(d(e),e).then(function(e){return m(e,t)}).catch(n)}catch(t){n(t)}})}(),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=function(e){if(f(e.origin)&&e.data&&"spacechange"===e.data.event)for(var n=t.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===e.source){var i=n[o].parentElement;i&&-1!==i.className.indexOf("vimeo-space")&&(i.style.paddingBottom=e.data.data[0].bottom+"px");break}};window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e)}(),M})}).call(e,n(1),n(30).setImmediate)},function(t,e,n){var o=n(3),i=n(12),r=n(0),a=n(27),s=n(2),c=n(11),u=function(t){this.firstrun=!0,n(21).apply(this,[t]),this.log("Pjax options",this.options),this.maxUid=this.lastUid=a(),this.parseDOM(document),s(window,"popstate",function(t){if(t.state){var e=o(this.options);e.url=t.state.url,e.title=t.state.title,e.history=!1,t.state.uid<this.lastUid?e.backward=!0:e.forward=!0,this.lastUid=t.state.uid,this.loadUrl(t.state.url,e)}}.bind(this))};if(u.prototype={log:n(18),getElements:n(17),parseDOM:n(19),refresh:n(22),reload:n(23),attachLink:n(16),forEachSelectors:function(t,e,o){return n(13).bind(this)(this.options.selectors,t,e,o)},switchSelectors:function(t,e,o,i){return n(25).bind(this)(this.options.switches,this.options.switchesOptions,t,e,o,i)},latestChance:function(t){window.location=t},onSwitch:function(){c(window,"resize scroll")},loadContent:function(t,e){var n=document.implementation.createHTMLDocument(),o=/<html[^>]+>/gi,a=/\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi,s=t.match(o);if(s&&s.length&&(s=s[0].match(a),s.length&&(s.shift(),s.forEach(function(t){var e=t.trim().split("=");1===e.length?n.documentElement.setAttribute(e[0],!0):n.documentElement.setAttribute(e[0],e[1].slice(1,-1))}))),n.documentElement.innerHTML=t,this.log("load content",n.documentElement.attributes,n.documentElement.innerHTML.length),document.activeElement&&!document.activeElement.value)try{document.activeElement.blur()}catch(t){}this.switchSelectors(this.options.selectors,n,document,e);var c=Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();c&&document.activeElement!==c&&c.focus(),this.options.selectors.forEach(function(t){r(document.querySelectorAll(t),function(t){i(t)})})},doRequest:n(24),loadUrl:function(t,e){this.log("load href",t,e),c(document,"pjax:send",e),this.doRequest(t,function(n){if(!1===n)return void c(document,"pjax:complete pjax:error",e);document.activeElement.blur();try{this.loadContent(n,e)}catch(e){if(this.options.debug)throw e;return console&&console.error&&console.error("Pjax switch fail: ",e),void this.latestChance(t)}e.history&&(this.firstrun&&(this.lastUid=this.maxUid=a(),this.firstrun=!1,window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid},document.title)),this.lastUid=this.maxUid=a(),window.history.pushState({url:t,title:e.title,uid:this.maxUid},e.title,t)),this.forEachSelectors(function(t){this.parseDOM(t)},this),c(document,"pjax:complete pjax:success",e),e.analytics(),!1!==e.scrollTo&&(e.scrollTo.length>1?window.scrollTo(e.scrollTo[0],e.scrollTo[1]):window.scrollTo(0,e.scrollTo))}.bind(this))}},(u.isSupported=n(14))())t.exports=u;else{var l=function(){};for(var f in u.prototype)u.prototype.hasOwnProperty(f)&&"function"==typeof u.prototype[f]&&(l[f]=l);t.exports=l}},function(t,e,n){(function(n){var o,i;/*! smooth-scroll v12.1.3 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(n,r){o=[],void 0!==(i=function(){return r(n)}.apply(e,o))&&(t.exports=i)}(void 0!==n?n:"undefined"!=typeof window?window:this,function(t){"use strict";var e="querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var t={},e=0,n=arguments.length;e<n;e++){var o=arguments[e];!function(e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}(o)}return t},i=function(e){return parseInt(t.getComputedStyle(e).height,10)},r=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,r="",a=n.charCodeAt(0);++i<o;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=e>=1&&e<=31||127==e||0===i&&e>=48&&e<=57||1===i&&e>=48&&e<=57&&45===a?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+r},a=function(t,e){var n;return"easeInQuad"===t.easing&&(n=e*e),"easeOutQuad"===t.easing&&(n=e*(2-e)),"easeInOutQuad"===t.easing&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t.easing&&(n=e*e*e),"easeOutCubic"===t.easing&&(n=--e*e*e+1),"easeInOutCubic"===t.easing&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t.easing&&(n=e*e*e*e),"easeOutQuart"===t.easing&&(n=1- --e*e*e*e),"easeInOutQuart"===t.easing&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t.easing&&(n=e*e*e*e*e),"easeOutQuint"===t.easing&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t.easing&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),t.customEasing&&(n=t.customEasing(e)),n||e},s=function(){return Math.max(document.documentElement.clientHeight,t.innerHeight||0)},c=function(){return parseInt(t.getComputedStyle(document.documentElement).height,10)},u=function(t,e,n){var o=0;if(t.offsetParent)do{o+=t.offsetTop,t=t.offsetParent}while(t);return o=Math.max(o-e-n,0),Math.min(o,c()-s())},l=function(t){return t?i(t)+t.offsetTop:0},f=function(e,n,o){o||(e.focus(),document.activeElement.id!==e.id&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},d=function(e){return!!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)};return function(i,s){var h,p,m,v,y,g,w,b={};b.cancelScroll=function(){cancelAnimationFrame(w)},b.animateScroll=function(e,i,r){var s=o(h||n,r||{}),d="[object Number]"===Object.prototype.toString.call(e),p=d||!e.tagName?null:e;if(d||p){var m=t.pageYOffset;s.header&&!v&&(v=document.querySelector(s.header)),y||(y=l(v));var g,w,E,T=d?e:u(p,y,parseInt("function"==typeof s.offset?s.offset():s.offset,10)),x=T-m,k=c(),A=0,S=function(n,o){var r=t.pageYOffset;if(n==o||r==o||(m<o&&t.innerHeight+r)>=k)return b.cancelScroll(),f(e,o,d),s.after(e,i),g=null,!0},j=function(e){g||(g=e),A+=e-g,w=A/parseInt(s.speed,10),w=w>1?1:w,E=m+x*a(s,w),t.scrollTo(0,Math.floor(E)),S(E,T)||(t.requestAnimationFrame(j),g=e)};0===t.pageYOffset&&t.scrollTo(0,0),s.before(e,i),b.cancelScroll(),t.requestAnimationFrame(j)}};var E=function(e){try{r(decodeURIComponent(t.location.hash))}catch(e){r(t.location.hash)}p&&(p.id=p.getAttribute("data-scroll-id"),b.animateScroll(p,m),p=null,m=null)},T=function(e){if(!d()&&0===e.button&&!e.metaKey&&!e.ctrlKey&&(m=e.target.closest(i))&&"a"===m.tagName.toLowerCase()&&!e.target.closest(h.ignore)&&m.hostname===t.location.hostname&&m.pathname===t.location.pathname&&/#/.test(m.href)){var n;try{n=r(decodeURIComponent(m.hash))}catch(t){n=r(m.hash)}if("#"===n){e.preventDefault(),p=document.body;var o=p.id?p.id:"smooth-scroll-top";return p.setAttribute("data-scroll-id",o),p.id="",void(t.location.hash.substring(1)===o?E():t.location.hash=o)}(p=document.querySelector(n))&&(p.setAttribute("data-scroll-id",p.id),p.id="",m.hash===t.location.hash&&(e.preventDefault(),E()))}},x=function(t){g||(g=setTimeout(function(){g=null,y=l(v)},66))};return b.destroy=function(){h&&(document.removeEventListener("click",T,!1),t.removeEventListener("resize",x,!1),b.cancelScroll(),h=null,p=null,m=null,v=null,y=null,g=null,w=null)},b.init=function(i){e&&(b.destroy(),h=o(n,i||{}),v=h.header?document.querySelector(h.header):null,y=l(v),document.addEventListener("click",T,!1),t.addEventListener("hashchange",E,!1),v&&t.addEventListener("resize",x,!1))},b.init(s),b}})}).call(e,n(1))},function(t,e,n){var o;(function(i,r){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!i.requestAnimationFrame;++n)i.requestAnimationFrame=i[e[n]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[n]+"CancelAnimationFrame"]||i[e[n]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-t)),a=i.setTimeout(function(){e(o+r)},r);return t=o+r,a}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}();var a,s,c,u,l,f=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},d={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)"},h=function(){a.width=i.innerWidth,a.height=5*d.barThickness;var t=a.getContext("2d");t.shadowBlur=d.shadowBlur,t.shadowColor=d.shadowColor;var e=t.createLinearGradient(0,0,a.width,0);for(var n in d.barColors)e.addColorStop(n,d.barColors[n]);t.lineWidth=d.barThickness,t.beginPath(),t.moveTo(0,d.barThickness/2),t.lineTo(Math.ceil(u*a.width),d.barThickness/2),t.strokeStyle=e,t.stroke()},p=function(){a=r.createElement("canvas");var t=a.style;t.position="fixed",t.top=t.left=t.right=t.margin=t.padding=0,t.zIndex=100001,t.display="none",r.body.appendChild(a),f(i,"resize",h)},m={config:function(t){for(var e in t)d.hasOwnProperty(e)&&(d[e]=t[e])},show:function(){l||(l=!0,null!==c&&i.cancelAnimationFrame(c),a||p(),a.style.opacity=1,a.style.display="block",m.progress(0),d.autoRun&&function t(){s=i.requestAnimationFrame(t),m.progress("+"+.05*Math.pow(1-Math.sqrt(u),2))}())},progress:function(t){return void 0===t?u:("string"==typeof t&&(t=(t.indexOf("+")>=0||t.indexOf("-")>=0?u:0)+parseFloat(t)),u=t>1?1:t,h(),u)},hide:function(){l&&(l=!1,null!=s&&(i.cancelAnimationFrame(s),s=null),function t(){if(m.progress("+.1")>=1&&(a.style.opacity-=.05,a.style.opacity<=.05))return a.style.display="none",void(c=null);c=i.requestAnimationFrame(t)}())}};"object"==typeof t&&"object"==typeof t.exports?t.exports=m:void 0!==(o=function(){return m}.call(e,n,e,t))&&(t.exports=o)}).call(this,window,document)},function(t,e,n){"use strict";function o(){function t(){new u.a(this,{autoplay:!0})}if(document.querySelector(".cycle")){var e=parseInt(document.querySelector(".cycle span:last-child").dataset.group);document.querySelectorAll(".cycle span").forEach(function(t){t.classList.add("hide")}),document.querySelectorAll(".cycle span[data-group='"+d.group+"']").forEach(function(t){t.classList.remove("hide")}),d.group=d.group>=e?1:parseInt(d.group)+1}for(var n=document.getElementsByClassName("video"),o=0;o<n.length;o++){var i=n.item(o);void 0!==window.orientation?t.bind(i)():i.onclick=t}document.querySelector("article.content").tabIndex=-1}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n.n(i),a=n(6),s=n.n(a),c=n(4),u=n.n(c),l=n(7),f=n.n(l),d=window.localStorage;d.group||(d.group=1),document.addEventListener("pjax:send",function(){f.a.show()}),document.addEventListener("pjax:success",function(){f.a.hide(),o();var t=document.querySelector("article.content").dataset.bodyClass||"home";document.body.className=t;var e=document.location.hash;e.length>0&&document.querySelector('a[href="'+e+'"]').click(),document.querySelector("html").lang=document.querySelector("article.content").dataset.lang,document.querySelector("article.content").focus()}),new r.a({debug:!1,elements:["a[href]:not(#cycle-button)"],selectors:["title","header#menu","article.content","section.projects","footer"]}),f.a.config({barColors:{0:"white","1.0":"white"}});new s.a('a[href*="#"]',{speed:400});o()},function(t,e,n){(function(e){var n;n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=n}).call(e,n(1))},function(t,e){t.exports=function(t){var e=t.text||t.textContent||t.innerHTML||"",n=document.querySelector("head")||document.documentElement,o=document.createElement("script");if(e.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can’t be executed correctly. Code skipped ",t),!1;o.type="text/javascript";try{o.appendChild(document.createTextNode(e))}catch(t){o.text=e}return n.insertBefore(o,n.firstChild),n.removeChild(o),!0}},function(t,e,n){var o=n(0);t.exports=function(t,e,n){e="string"==typeof e?e.split(" "):e,e.forEach(function(e){var i;i=document.createEvent("HTMLEvents"),i.initEvent(e,!0,!0),i.eventName=e,n&&Object.keys(n).forEach(function(t){i[t]=n[t]}),o(t,function(t){var e=!1;t.parentNode||t===document||t===window||(e=!0,document.body.appendChild(t)),t.dispatchEvent(i),e&&t.parentNode.removeChild(t)})})}},function(t,e,n){var o=n(0),i=n(10);t.exports=function(t){o(t.querySelectorAll("script"),function(t){t.type&&"text/javascript"!==t.type.toLowerCase()||(t.parentNode&&t.parentNode.removeChild(t),i(t))})}},function(t,e,n){var o=n(0);t.exports=function(t,e,n,i){i=i||document,t.forEach(function(t){o(i.querySelectorAll(t),e,n)})}},function(t,e){t.exports=function(){return window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)}},function(t,e){Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,i.prototype=new o,i})},function(t,e,n){n(15);var o=n(2),i=n(3),r="data-pjax-click-state",a=function(t,e){return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey?void t.setAttribute(r,"modifier"):t.protocol!==window.location.protocol||t.host!==window.location.host?void t.setAttribute(r,"external"):t.pathname===window.location.pathname&&t.hash.length>0?void t.setAttribute(r,"anchor-present"):t.hash&&t.href.replace(t.hash,"")===window.location.href.replace(location.hash,"")?void t.setAttribute(r,"anchor"):t.href===window.location.href.split("#")[0]+"#"?void t.setAttribute(r,"anchor-empty"):(e.preventDefault(),this.options.currentUrlFullReload&&t.href===window.location.href.split("#")[0]?(t.setAttribute(r,"reload"),void this.reload()):(t.setAttribute(r,"load"),void this.loadUrl(t.href,i(this.options))))},s=function(t){return t.defaultPrevented||!1===t.returnValue};t.exports=function(t){var e=this;o(t,"click",function(n){s(n)||a.call(e,t,n)}),o(t,"keyup",function(n){if(!s(n))return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey?void t.setAttribute("data-pjax-keyup-state","modifier"):void(13==n.keyCode&&a.call(e,t,n))}.bind(this))}},function(t,e){t.exports=function(t){return t.querySelectorAll(this.options.elements)}},function(t,e){t.exports=function(){this.options.debug&&console&&("function"==typeof console.log?console.log.apply(console,arguments):console.log&&console.log(arguments))}},function(t,e,n){var o=n(0),i=n(20);t.exports=function(t){o(this.getElements(t),i,this)}},function(t,e){t.exports=function(t){switch(t.tagName.toLowerCase()){case"a":t.hasAttribute("data-pjax-click-state")||this.attachLink(t);break;case"form":throw"Pjax doesnt support <form> yet.";default:throw"Pjax can only be applied on <a> or <form> submit"}}},function(t,e){t.exports=function(t){this.options=t,this.options.elements=this.options.elements||"a[href], form[action]",this.options.selectors=this.options.selectors||["title",".js-Pjax"],this.options.switches=this.options.switches||{},this.options.switchesOptions=this.options.switchesOptions||{},this.options.history=this.options.history||!0,this.options.analytics=this.options.analytics||function(){window._gaq&&_gaq.push(["_trackPageview"]),window.ga&&ga("send","pageview",{page:location.pathname,title:document.title})},this.options.scrollTo=void 0===this.options.scrollTo?0:this.options.scrollTo,this.options.cacheBust=void 0===this.options.cacheBust||this.options.cacheBust,this.options.debug=this.options.debug||!1,this.options.switches.head||(this.options.switches.head=this.switchElementsAlt),this.options.switches.body||(this.options.switches.body=this.switchElementsAlt),"function"!=typeof t.analytics&&(t.analytics=function(){})}},function(t,e){t.exports=function(t){this.parseDOM(t||document)}},function(t,e){t.exports=function(){window.location.reload()}},function(t,e){t.exports=function(t,e){var n=new XMLHttpRequest;return n.onreadystatechange=function(){4===n.readyState&&(200===n.status?e(n.responseText,n):e(null,n))},this.options.cacheBust&&(t+=(/[?&]/.test(t)?"&":"?")+(new Date).getTime()),n.open("GET",t,!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(null),n}},function(t,e,n){var o=n(0),i=n(26);t.exports=function(t,e,n,r,a,s){n.forEach(function(n){var c=r.querySelectorAll(n),u=a.querySelectorAll(n);if(this.log&&this.log("Pjax switch",n,c,u),c.length!==u.length)throw"DOM doesn’t look the same on new loaded page: ’"+n+"’ - new "+c.length+", old "+u.length;o(c,function(o,r){var a=u[r];this.log&&this.log("newEl",o,"oldEl",a),t[n]?t[n].bind(this)(a,o,s,e[n]):i.outerHTML.bind(this)(a,o,s)},this)},this)}},function(t,e,n){var o=n(2);t.exports={outerHTML:function(t,e){t.outerHTML=e.outerHTML,this.onSwitch()},innerHTML:function(t,e){t.innerHTML=e.innerHTML,t.className=e.className,this.onSwitch()},sideBySide:function(t,e,n,i){var r=Array.prototype.forEach,a=[],s=[],c=document.createDocumentFragment(),u="animationend webkitAnimationEnd MSAnimationEnd oanimationend",l=0,f=function(t){t.target==t.currentTarget&&--l<=0&&a&&(a.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)}),s.forEach(function(t){t.className=t.className.replace(t.getAttribute("data-pjax-classes"),""),t.removeAttribute("data-pjax-classes")}),s=null,a=null,this.onSwitch())}.bind(this);i=i||{},r.call(t.childNodes,function(t){a.push(t),t.classList&&!t.classList.contains("js-Pjax-remove")&&(t.hasAttribute("data-pjax-classes")&&(t.className=t.className.replace(t.getAttribute("data-pjax-classes"),""),t.removeAttribute("data-pjax-classes")),t.classList.add("js-Pjax-remove"),i.callbacks&&i.callbacks.removeElement&&i.callbacks.removeElement(t),i.classNames&&(t.className+=" "+i.classNames.remove+" "+(n.backward?i.classNames.backward:i.classNames.forward)),l++,o(t,u,f,!0))}),r.call(e.childNodes,function(t){if(t.classList){var e="";i.classNames&&(e=" js-Pjax-add "+i.classNames.add+" "+(n.backward?i.classNames.forward:i.classNames.backward)),i.callbacks&&i.callbacks.addElement&&i.callbacks.addElement(t),t.className+=e,t.setAttribute("data-pjax-classes",e),s.push(t),c.appendChild(t),l++,o(t,u,f,!0)}}),t.className=e.className,t.appendChild(c)}}},function(t,e){t.exports=function(){var t=0;return function(){var e="pjax"+(new Date).getTime()+"_"+t;return t++,e}}()},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){m&&h&&(m=!1,h.length?p=h.concat(p):v=-1,p.length&&s())}function s(){if(!m){var t=i(a);m=!0;for(var e=p.length;e;){for(h=p,p=[];++v<e;)h&&h[v].run();v=-1,e=p.length}h=null,m=!1,r(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var h,p=[],m=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||m||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return u[c]=o,s(c),c++}function i(t){delete u[t]}function r(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(l)setTimeout(a,0,t);else{var e=u[t];if(e){l=!0;try{r(e)}finally{i(t),l=!1}}}}if(!t.setImmediate){var s,c=1,u={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=i}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(1),n(28))},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var i=Function.prototype.apply;e.setTimeout=function(){return new o(i.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(29);var r=n(9);e.setImmediate=r.setImmediate,e.clearImmediate=r.clearImmediate}]);