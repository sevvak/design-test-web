'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6a0cfabace50eda4c4be19df56c77a3e",
"index.html": "2c5df7e6143fc2f267c153870141336f",
"/": "2c5df7e6143fc2f267c153870141336f",
"main.dart.js": "153714c2d433639e1fd4847e19a96b75",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "28d6bd7e1015961bec996edffa58bc1a",
".git/config": "1709864f17d65d7643e28a290a9245da",
".git/objects/95/ce523f6115bfba06212dbb3beeb94589041013": "ee1bd3e7daac8164b066abec0068ce93",
".git/objects/59/9e10e833ae4d568f56378938e481a060d6acaf": "f794309623e3e9591bb1f4d2c3f199bc",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3c/6e54b5598c6da9a68a9891589a2771c7c5f46b": "452a27d82f3ccf4f8ce0db4430c7114d",
".git/objects/3d/a32cfdd002ffc496bc4bb7e6fe30c6802839a7": "7a9c28f0c34456fd86b7bae1fcd29686",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/85a59aa2ee890c8941202e83d56dfdb4d75aa1": "e143bcc39fb429f15bc3db111203fc4f",
".git/objects/60/54d06619681a7480b5b00b8f21aebdb044ffbf": "8ee86e12e0ea873151c72447b076525b",
".git/objects/60/2613835ea91404c5f8fed5c0e39e037ba30cda": "d50072b28e3856962560e4cb967e6b13",
".git/objects/9c/5b96a269b4f51026d8a3d05d49da179fd7a294": "692f5e0ceebcec59a5fa247aac4f36a3",
".git/objects/d9/537b8a437202fabb6b86d3e4517bc7df7e21ee": "885b6aee5330fc19b58c40745402d3b1",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/37834cedce23d4bacd6bdfc7608076ca271232": "362312df397e9f7f05411066b2e90078",
".git/objects/a2/e9eae767def9e16649574f6904faa549891d76": "b21133e1063546f4d892d9d3bb628428",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/017c6ad2e2ee43b9063555d6f40e4f18cb6b16": "75e8357dadc5fafba3fdee529e8de0ea",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/e3a040577e27f88189a9babc4f13942b736133": "95132476349e60b41a89cc84a8cc2547",
".git/objects/29/05f555fc0b7b1f15866f239e84e0dfa06bff69": "402ba71ba9bf4adf48054909e47f7cc3",
".git/objects/16/ecdc15f811166fdc58c81c82b4cab97b3d7514": "94550893f336ca3f522a556ecf5513f5",
".git/objects/1f/1bbbd166dcb9e971efd417d7ca2b383f343a4b": "49db6e943a87f3ced7ceabd374f99449",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/72/62bb1f0e522d76e49952afaab2aee2fe2eb557": "51373f8dfe62cc04429570ec39551da4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5c/2330033c1133a395a04e8130e68d9ce20b4b60": "71547ec1c2e3870e5be0c011975ce941",
".git/objects/5d/640a9656a525ff3c75bcc0e0be03e14576e19a": "14024cb42d40040b27eb6e0586ce5662",
".git/objects/53/e355d945dd976fd19256079a5398f2381a8677": "fc14765085f808fa0ab9ab4fb701196f",
".git/objects/3f/06c4f1e5ca86cd6325900f91615c176026ad35": "0523f913a99d680a934406dfede0b2bc",
".git/objects/08/5ea60910a92c4c0c2d2d95090ccd60c891705c": "bdd7d14fd6063bf393796df30562b5a8",
".git/objects/52/b4a7b65a6ea30c493aade7212a5cf2fa93cb49": "6960b3c4b92207b263db602f93b2b58c",
".git/objects/0a/d578edf98485c8f6956e754041da6c7a0d5ece": "0546cf014ae34e3d4d0c2dd1b366062e",
".git/objects/d3/7a7f0c5d6e86f711914403828db20140458107": "5314ce261809f43192512a2154396dea",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/08fc22dd6f09b438160051be31cb2a833ee124": "e3df07a622a9899d8312c155c932bc10",
".git/objects/e6/27eb21788c33c327c92c6bbb59844dc49c5450": "c9b32a3389ec5c127e72a0abcdfcee3c",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/d8a2da5ad0f41cc74ba035615b37c2e5e0e8a2": "240632b9bce8be3b5bc4b28998b6caa8",
".git/objects/e7/56618408449ab7c5b0914260c979c5562e8028": "ff0d9d274319bd6a273298fd9b29e2a2",
".git/objects/83/1bdcd290c4098953d372ac39895bdbedf7c502": "08b3420276133de714e4a393f72c944c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/dd71414d3e97e44c4ab5258e6a4f2f047bf52a": "acb38ad9df9725903fe98a1b127d6bcf",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/1d/9dea5edd547527119a0b0f60fa1442ac0fc933": "947b7ff32ed487b8948c014dd6006909",
".git/objects/82/6e59a5de1e312fe29f677763c2b71814d959d6": "ab5096efbe715e5e3ebbda8c5b3040a8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8b/15aae840b8a15103a1870437a543d0b2480713": "e985a585059ab8ac2889a2e90d8105ca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c8ab78bfc3ff6f483cb5a99321424794",
".git/logs/refs/heads/main": "c8ab78bfc3ff6f483cb5a99321424794",
".git/logs/refs/remotes/origin/main": "aa494dbd293632befa8ff74780b0dd73",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "59aa8725c5698cd32ab186e3e62c0ddb",
".git/refs/remotes/origin/main": "59aa8725c5698cd32ab186e3e62c0ddb",
".git/index": "ad2b5db2101eddb7df1f10eddd0f400c",
".git/COMMIT_EDITMSG": "69b64623f86def16ce17d454b8be41ae",
".git/FETCH_HEAD": "b896e137da404836db40505355dc77cb",
"assets/AssetManifest.json": "df9a7ee4d6116c1f0e6d4974d7dc1f7c",
"assets/NOTICES": "97596634702b2f22ecafe1aa36f25263",
"assets/FontManifest.json": "78edb7b94f3ec0f4faa82568e50d5066",
"assets/AssetManifest.bin.json": "f26c1d930f5016333679164ef46ef23c",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "aad23b975d521339314bdc3ab4d4fbf0",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "773ebba095ec3590660722932c6e8500",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "1b9aa14436c86843d7081313d68f2e72",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "e0bf253dc822f16a3c2a27cc229e03c5",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "946de7fd1470d676b40bcb8f3fbffef1",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "afd764841ed1ab86e0d8070e83531e68",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "75eec839a142d2cbb41bb9cd5a267344",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
