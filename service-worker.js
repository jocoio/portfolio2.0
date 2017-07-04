"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","cfd53abd3d057d08b4ed4fca4beaad7f"],["static/css/main.26670a58.css","8d7f847dafb6054f396d70b6feb59ba4"],["static/js/main.f4776275.js","3c2538b0abb670d0c49d66e686fd8cff"],["static/media/bos.e54889b5.jpg","e54889b5f4c3dd59509f2f7237eae8d4"],["static/media/gparents.ba2f94a1.png","ba2f94a1225fc299eb49eb46350443cc"],["static/media/gradient.f76defd1.png","f76defd194fb01de5b9d159a65a93b20"],["static/media/gramps.f8a29c07.png","f8a29c079bb08382a7cfd17758284fa5"],["static/media/icons.9ef85bfb.png","9ef85bfbe3d5a728951462a19aebe399"],["static/media/joco.9649a262.png","9649a262f59fc668e2d8d36ee05b4bc0"],["static/media/laMenu.bf92b4d5.png","bf92b4d534e7e73f36a857a55782b196"],["static/media/labs.100f2a03.png","100f2a039ee972d51ff908bc5c85e7e0"],["static/media/labs.f8ec1826.png","f8ec18260c0f793ca7e28ed13db602bc"],["static/media/map.f27457f4.png","f27457f4c132a8ac8d3717f439f0a8a2"],["static/media/meeting.d675ecab.png","d675ecab7685f2beaf8fd903999e2b27"],["static/media/music.184b66cf.png","184b66cf95cb20edaff5380af02afb92"],["static/media/nyc.15111a69.png","15111a69de2b534d69e58362ba000ef9"],["static/media/purple.396a04e0.jpg","396a04e04235ad519e4cf70b560e26c2"],["static/media/slide.a866c92b.png","a866c92bc0c4f7f88926846fce827d63"],["static/media/thumb.63b6a1fa.png","63b6a1fad071c14b72b6db7e11d03d0c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/joco/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});