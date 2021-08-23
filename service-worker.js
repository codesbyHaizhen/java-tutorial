/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cc113b783ca0461254534feced9c5984"
  },
  {
    "url": "assets/css/0.styles.3905bb84.css",
    "revision": "163de45f04f2e96b3390109ed72438bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6a1f2f8.js",
    "revision": "20f8d9fa7016e9abfe9a4cd27d735925"
  },
  {
    "url": "assets/js/11.fce673de.js",
    "revision": "a699d13b91e19139daecb756b767daab"
  },
  {
    "url": "assets/js/12.26a5f560.js",
    "revision": "2f3d510da715f41d5fba7dbb27329d0c"
  },
  {
    "url": "assets/js/13.02678d53.js",
    "revision": "a1392480d0f606f39196b696095b1fb1"
  },
  {
    "url": "assets/js/14.630ad3d4.js",
    "revision": "3a93e66a1bc3f3bd371a9f59221e5321"
  },
  {
    "url": "assets/js/15.b5901fa4.js",
    "revision": "38401b396e6a330b3ccfef503183453c"
  },
  {
    "url": "assets/js/16.57c4b895.js",
    "revision": "6802190d59bb670f4a7a588bdd90c4a2"
  },
  {
    "url": "assets/js/17.d36e0244.js",
    "revision": "c7c6cbd1268ed3afacd6f65baf2371f0"
  },
  {
    "url": "assets/js/18.9773326e.js",
    "revision": "f6d44727cebfcec5d0839bbe84136d18"
  },
  {
    "url": "assets/js/19.df51683a.js",
    "revision": "95490ec0d0f2c6ab776a0190f7623bf7"
  },
  {
    "url": "assets/js/20.2023917a.js",
    "revision": "cef61cb35ec95e02d86b41b37d71a0f0"
  },
  {
    "url": "assets/js/21.07ae8e94.js",
    "revision": "30a0f7a092a522d289b59e327ee4e7ca"
  },
  {
    "url": "assets/js/22.aee4b08b.js",
    "revision": "e0fc037658dbdcf3dad3b2adbe121003"
  },
  {
    "url": "assets/js/23.0f881b51.js",
    "revision": "34fda92adaf1de89c4d2b4d33ebcb4ca"
  },
  {
    "url": "assets/js/24.da2c1d7f.js",
    "revision": "e47bfecbeb77adae2bcf3fad2952edc8"
  },
  {
    "url": "assets/js/25.238d0a91.js",
    "revision": "eb7890ee7dc7331c87b5d39090371c5a"
  },
  {
    "url": "assets/js/26.429efd8b.js",
    "revision": "ccfabe6beb4dc45aa829416c84c0c4fe"
  },
  {
    "url": "assets/js/27.4e69faca.js",
    "revision": "4ed80c27469b8e810102f2a99829303e"
  },
  {
    "url": "assets/js/28.ea41eb2c.js",
    "revision": "ce4918a0b7ff1d2bea7ed3b5478421af"
  },
  {
    "url": "assets/js/29.eb38f980.js",
    "revision": "d7665f9d2db9d5746f912e72143c31f2"
  },
  {
    "url": "assets/js/30.861306a4.js",
    "revision": "1daf67488fd305e88061201ec3b429c1"
  },
  {
    "url": "assets/js/31.51ff2772.js",
    "revision": "b12ede28c76ca2727146addcd56bf6f6"
  },
  {
    "url": "assets/js/32.906a9d26.js",
    "revision": "2d94f746351f43704888d5f7b3258054"
  },
  {
    "url": "assets/js/33.46629ea8.js",
    "revision": "123b16c2103451d9e3b6ad126a8eb368"
  },
  {
    "url": "assets/js/34.74fbb327.js",
    "revision": "4fa37d5e3c0e8f3cd0165a931300a27a"
  },
  {
    "url": "assets/js/35.cb57f554.js",
    "revision": "ba43b51b1c705d54d57dc33cc45b983c"
  },
  {
    "url": "assets/js/36.bb28fa41.js",
    "revision": "2305cb6f32d021f174525656a819d109"
  },
  {
    "url": "assets/js/37.d8790cc9.js",
    "revision": "6ecd1022ec653edb1378614a70d3ec14"
  },
  {
    "url": "assets/js/38.a080a14c.js",
    "revision": "743f6da6bc6b9b7096b80031d4371387"
  },
  {
    "url": "assets/js/4.3daae55c.js",
    "revision": "5354cac7999a4d3610c41b0de491ae07"
  },
  {
    "url": "assets/js/5.dfd352df.js",
    "revision": "c25378b9dc998ea7334a2824541183df"
  },
  {
    "url": "assets/js/6.249802e3.js",
    "revision": "f040a205034fd88f8f4e45dc0ecafc8f"
  },
  {
    "url": "assets/js/7.1e5f973a.js",
    "revision": "36e8fe9eb48a3292e51d6405c84bc1b7"
  },
  {
    "url": "assets/js/8.b7d849be.js",
    "revision": "6f4b7c8e1a9ce1e840380d3a77584c73"
  },
  {
    "url": "assets/js/9.f56536d9.js",
    "revision": "0f864682c7eb495c090b6118736888ae"
  },
  {
    "url": "assets/js/app.a78650bc.js",
    "revision": "eab90b516c51f988a593891937cb51d2"
  },
  {
    "url": "assets/js/vendors~flowchart.610e92a1.js",
    "revision": "cb8d7fe8928477bd9fbb5c3f3cb43eb6"
  },
  {
    "url": "assets/js/vendors~notification.3e916219.js",
    "revision": "cd40ddf3930af08e680126b2e6864a0c"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "7636a5af843535937429ecf47911d18d"
  },
  {
    "url": "javaee/index.html",
    "revision": "1b2fc7cf33de25ee40259d2da7c63b58"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "88aa1f33f82468e90664bdcbc4738081"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "e80ff5610f553c8064e59df69283a29e"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "9210da32732ea83f26d8515ac386fd6e"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "b31c65e44ef81869e701c3cc3cf8ec67"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "0924373195e2a02f7a0dcf220c5d7988"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "877ccda66e7aea27d1f4ae8073e5b42f"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "5612c4f8d568408a746f3ce2e174b816"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "3428b54752016ef15c984af45ea5b37f"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "3cbe95597eb636d38a7477bc339aaa27"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "db34f0cae70ed476661362156a6eccf1"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "a032e49a30be0f6dc3e9709b488f308a"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "b05ac59e78da9c2ee6a96b50bc59c780"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "3609053df986f4f3dc29784d28525ede"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "875434fb9678a67bc72bceb48cadabab"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "1f37cf1d31ba9d79b9b635048cfd4e03"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "ed9f4f6a45b2d63bb2ab9e91583baa46"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "21b953a710efd01fd102a135868a23dc"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "101923dd603c9f9a78b859b1494fcae9"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "b95d5530f38ba01a0a61f981ca70453c"
  },
  {
    "url": "javatool/index.html",
    "revision": "d9607ec3b80d7674f50a4849ccd813c4"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "f8458fb6abd4b3d44d3f2c3c234988b5"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "a099a0b83d9c450a3bbe4e8e82884781"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "89f41b75d40a166150e44cd7451215e2"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "acff604ec9e8dd347c8cb8978447f444"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "751e2b635698634969d17d3c65b6a1ae"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "afcf9afac2b524e9e53db8ff804023a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
