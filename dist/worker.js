!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CACHE_NAME="countdown-2047",t.PRECACHE_FILES=["./","./index.html","./2047.css","./2047.js","./favicon.ico","./manifest.json","./fonts/AnonymousPro.ttf","./fonts/AnonymousPro.woff2","./fonts/Montserrat-Regular.ttf","./fonts/Montserrat-Regular.woff2","./fonts/SegoeUISymbol.ttf","./fonts/SegoeUISymbol.woff2","./icons/favicon-16.png","./icons/favicon-32.png","./icons/icon-64.png","./icons/icon-128.png","./icons/icon-192.png","./icons/icon-256.png","./icons/icon-512.png","./icons/icon-1024.png"],t.LOGGER_BADGE_STYLES=["background: #1A202C","border-radius: 0.5em","color: #F7FAFC","padding: 2px 0.5em"]},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(23),o=n(25),c=n(27),s=n(28);self.addEventListener("install",e=>{e.waitUntil(c.precache())}),self.addEventListener("fetch",e=>{e.respondWith(o.fromNetwork(e.request,1e3).then(t=>(e.waitUntil(s.updateCache(e.request)),t)).catch(()=>r.fromCache(e.request)))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(24);t.fromCache=function(e){return caches.open(r.CACHE_NAME).then(t=>t.match(e).then(e=>e||Promise.reject(new o.NoCacheError)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{}t.NoCacheError=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(26);t.fromNetwork=function(e,t){return new Promise((n,o)=>{const c=self.setTimeout(()=>{o(new r.TimeoutError)},t);fetch(e).then(e=>{clearTimeout(c),n(e)},o)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{}t.TimeoutError=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.precache=function(){return caches.open(r.CACHE_NAME).then(e=>e.addAll(r.PRECACHE_FILES))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(29),c=n(30);t.updateCache=function(e){return caches.open(r.CACHE_NAME).then(t=>fetch(e).then(n=>t.put(e,n).catch(e=>{console.error(...o.LoggerBadge,c.getErrorMessage(e,"Failed to store the response."))})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.LoggerBadge=["%cworker.js",r.LOGGER_BADGE_STYLES.join(";")]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorMessage=function(e,t){if(e instanceof Error){const t="string"==typeof e.message&&0!==e.message.trim().length?e.message:"An unexpected error has occurred";return`${e.name}: ${t}`}return"An unexpected error has occurred"}}]);
//# sourceMappingURL=worker.js.map