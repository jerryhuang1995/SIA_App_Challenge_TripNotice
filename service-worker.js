"use strict";var precacheConfig=[["/SIA_App_Challenge_TripNotice/index.html","6dc34c8cdb68b9cb61d72f6671c98b89"],["/SIA_App_Challenge_TripNotice/static/css/main.b2d2ddf0.chunk.css","6b772e937290343aaba15cc1ea92fc7d"],["/SIA_App_Challenge_TripNotice/static/js/1.073ed5f6.chunk.js","086b6cbc0b5fdd94aa71109d5ffff35e"],["/SIA_App_Challenge_TripNotice/static/js/main.eecb908b.chunk.js","beb16647a39fee5f45273846bfc8fd26"],["/SIA_App_Challenge_TripNotice/static/media/5-days-tour-package.7c23b1c8.jpg","7c23b1c825604e03212c34cb4cdedc9d"],["/SIA_App_Challenge_TripNotice/static/media/airplan.1cc48665.svg","1cc486652466ada8f6ada4d3a90a62f5"],["/SIA_App_Challenge_TripNotice/static/media/header.56ac53ae.jpg","56ac53ae9d983dfd6e0b5c8199fac0ae"],["/SIA_App_Challenge_TripNotice/static/media/hotels.705c1e6e.jpg","705c1e6e13ea9131e01af479aa073dd0"],["/SIA_App_Challenge_TripNotice/static/media/top-10-attractions.fa069d5a.jpg","fa069d5ab1163bd53092d9142ba6ff7e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/SIA_App_Challenge_TripNotice/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});