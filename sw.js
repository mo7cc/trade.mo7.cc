if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/AccountInfo-2d650804.css",revision:null},{url:"assets/AccountInfo-b9622799.js",revision:null},{url:"assets/Add-2fac7a28.js",revision:null},{url:"assets/AddKey-57672cd2.css",revision:null},{url:"assets/AddKey-807642b2.js",revision:null},{url:"assets/Alert-58ddd56e.js",revision:null},{url:"assets/AnalyHistory-79aeda53.css",revision:null},{url:"assets/AnalyHistory-b69e7fc7.js",revision:null},{url:"assets/AreaChartOutlined-b62f866b.js",revision:null},{url:"assets/ArrowDownOutlined-e60cb93f.js",revision:null},{url:"assets/ArrowLeftOutlined-d73fc048.js",revision:null},{url:"assets/ArrowUpOutlined-2950a46f.js",revision:null},{url:"assets/attribute-2ee9e579.js",revision:null},{url:"assets/Avatar-7bb81999.js",revision:null},{url:"assets/BarChartOutlined-a9a4787c.js",revision:null},{url:"assets/CaretDownFilled-54563478.js",revision:null},{url:"assets/ChangePassword-17eca08b.js",revision:null},{url:"assets/ChangePassword-60ff6410.css",revision:null},{url:"assets/ClusterOutlined-e2f6388b.js",revision:null},{url:"assets/CodeTwotone-69c52842.js",revision:null},{url:"assets/CoinAI-3585a25c.js",revision:null},{url:"assets/CoinAI-f3d1270d.css",revision:null},{url:"assets/CoinRTS-422e02e5.js",revision:null},{url:"assets/CoinRTS-9c5f2727.css",revision:null},{url:"assets/CoinServe-9b27e4e1.js",revision:null},{url:"assets/CreateCoinServe-3cc5237d.js",revision:null},{url:"assets/CreateCoinServe-3cf4e233.css",revision:null},{url:"assets/DeleteOutlined-db02846e.js",revision:null},{url:"assets/DollarCircleTwotone-3748fba6.js",revision:null},{url:"assets/DownloadOutlined-3d147b2b.js",revision:null},{url:"assets/DrawerContent-fefbd812.js",revision:null},{url:"assets/DutyPage-50fdf416.js",revision:null},{url:"assets/EditOutlined-83c921bb.js",revision:null},{url:"assets/EditProfile-2075626a.js",revision:null},{url:"assets/EditProfile-c6a31d0b.css",revision:null},{url:"assets/EmailList-06f73f3f.css",revision:null},{url:"assets/EmailList-dc8282f3.js",revision:null},{url:"assets/EyeInvisibleTwotone-f94d84e8.js",revision:null},{url:"assets/EyeOutlined-c29bf7a1.js",revision:null},{url:"assets/FileDoneOutlined-903bbac2.js",revision:null},{url:"assets/filters-636926a0.js",revision:null},{url:"assets/FocusDetector-eaf08c83.js",revision:null},{url:"assets/Follower-44967ea4.js",revision:null},{url:"assets/format-length-c9d165c6.js",revision:null},{url:"assets/FormItem-a002c1ab.js",revision:null},{url:"assets/get-eef5e00b.js",revision:null},{url:"assets/HomeOutlined-3a18bda9.js",revision:null},{url:"assets/HomePage-2feae42b.js",revision:null},{url:"assets/HomePage-f15da69c.css",revision:null},{url:"assets/Html5Filled-eab8cb46.js",revision:null},{url:"assets/index-443e836d.js",revision:null},{url:"assets/index-4463e40f.js",revision:null},{url:"assets/index-48691192.css",revision:null},{url:"assets/index-e1b4e266.js",revision:null},{url:"assets/index-f49e440a.js",revision:null},{url:"assets/IndexPage-1a3daf8a.js",revision:null},{url:"assets/IndexPage-b1c0cd4c.js",revision:null},{url:"assets/IndexPage-d0614704.js",revision:null},{url:"assets/IndexPage-d063ef29.css",revision:null},{url:"assets/IndexPage-dbad341b.css",revision:null},{url:"assets/IndexPage-f544eb91.js",revision:null},{url:"assets/InfoCircleOutlined-02bb3052.js",revision:null},{url:"assets/InfoOk-76f6b43f.js",revision:null},{url:"assets/InfoOk-80e2c770.css",revision:null},{url:"assets/Input-90f12dff.js",revision:null},{url:"assets/InputGroup-4e93787e.js",revision:null},{url:"assets/KeyOutlined-65ae31e2.js",revision:null},{url:"assets/ListPage-429fb3c9.js",revision:null},{url:"assets/ListPage-58584be7.css",revision:null},{url:"assets/LoadingView-89b19705.css",revision:null},{url:"assets/LoadingView-c7468fc8.js",revision:null},{url:"assets/LoginOutlined-4739cc78.js",revision:null},{url:"assets/LoginPage-2ee8d9d9.css",revision:null},{url:"assets/LoginPage-72603028.js",revision:null},{url:"assets/LogoutOutlined-c09fb068.js",revision:null},{url:"assets/LogoView-4ce1e1ae.js",revision:null},{url:"assets/LogoView-6422c33d.css",revision:null},{url:"assets/MailOutlined-cbd6bce5.js",revision:null},{url:"assets/ManageEmail-1e511466.js",revision:null},{url:"assets/ManageEmail-d6ebaefc.css",revision:null},{url:"assets/MenuFoldOutlined-9936c65e.js",revision:null},{url:"assets/MenuUnfoldOutlined-5e87344f.js",revision:null},{url:"assets/MHYLogo-b1a4eb6d.css",revision:null},{url:"assets/MHYLogo-f60913bd.js",revision:null},{url:"assets/MinusCircleFilled-71d6eac4.js",revision:null},{url:"assets/NotFound-6dc20a9d.js",revision:null},{url:"assets/NotFound-866ef8e9.css",revision:null},{url:"assets/OkxKey-1357cfac.js",revision:null},{url:"assets/OkxLogo-0188020a.js",revision:null},{url:"assets/OkxLogo-0c4fb8b7.css",revision:null},{url:"assets/OrderBtn-406e6946.js",revision:null},{url:"assets/OrderBtn-d1d3643d.css",revision:null},{url:"assets/PageTitle-0db350a3.js",revision:null},{url:"assets/PageTitle-a68b02f4.css",revision:null},{url:"assets/PersonalPage-35a39f48.js",revision:null},{url:"assets/PersonalPage-dbd836b1.css",revision:null},{url:"assets/PictureOutlined-79d1d87a.js",revision:null},{url:"assets/PlusCircleFilled-76c48f3e.js",revision:null},{url:"assets/PlusOutlined-21355420.js",revision:null},{url:"assets/PriceView-b5246b70.js",revision:null},{url:"assets/PriceView-cac072fe.css",revision:null},{url:"assets/PWA-8fd09f7e.js",revision:null},{url:"assets/PWAInstall-795e4b53.js",revision:null},{url:"assets/QuestionCircleOutlined-e62a14ea.js",revision:null},{url:"assets/QuestionCircleTwotone-35f9606b.js",revision:null},{url:"assets/RegisterPage-494bd6e0.css",revision:null},{url:"assets/RegisterPage-8632a760.js",revision:null},{url:"assets/ReleaseNotes-d4791ae8.js",revision:null},{url:"assets/ReleaseNotes-dfca5dca.css",revision:null},{url:"assets/SafetyOutlined-f6e6576d.js",revision:null},{url:"assets/SendCode-12b6c232.js",revision:null},{url:"assets/ServeConfig-d03bae9f.css",revision:null},{url:"assets/ServeConfig-efb97f13.js",revision:null},{url:"assets/ServerList-191007c9.js",revision:null},{url:"assets/ServerList-b5a51653.css",revision:null},{url:"assets/SettingOutlined-58edd8ea.js",revision:null},{url:"assets/SkinOutlined-15085fd6.js",revision:null},{url:"assets/StockOutlined-8856b757.js",revision:null},{url:"assets/SysManage-160af8ff.js",revision:null},{url:"assets/SysManage-4edfe4d4.css",revision:null},{url:"assets/Tag-df9b9d21.js",revision:null},{url:"assets/TickerAnalySingle-5461746b.css",revision:null},{url:"assets/TickerAnalySingle-985aaebc.js",revision:null},{url:"assets/TickerAnalyWhole-00620857.js",revision:null},{url:"assets/TickerAnalyWhole-e9169b82.css",revision:null},{url:"assets/TickerView-3743b8ce.js",revision:null},{url:"assets/TickerView-6a7dd69b.css",revision:null},{url:"assets/TickerView-a34f6b56.js",revision:null},{url:"assets/TickerView-d521aff4.css",revision:null},{url:"assets/Tooltip-fcc33c4d.js",revision:null},{url:"assets/TopBar-3df0586c.js",revision:null},{url:"assets/TopBar-d0d9f1d0.css",revision:null},{url:"assets/use-merged-state-0e90f292.js",revision:null},{url:"assets/UserAddOutlined-e09f57c7.js",revision:null},{url:"assets/VerifiedOutlined-ffa76d11.js",revision:null},{url:"assets/verify-fcd68c05.js",revision:null},{url:"assets/VolumeView-4c297958.css",revision:null},{url:"assets/VolumeView-782b5ca8.js",revision:null},{url:"assets/vue.runtime.esm-bundler-89b3bc6d.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"assets/XIcon-d6c5d7b7.js",revision:null},{url:"assets/XIcon-dcf3bf82.css",revision:null},{url:"assets/ZTSLogo-1553fb12.css",revision:null},{url:"assets/ZTSLogo-4af6fe1f.js",revision:null},{url:"index.html",revision:"ca50f861030ec8b37aa5acf5890f8206"},{url:"manifest.webmanifest",revision:"9841038f43179a68bda0e418e6cc4dd6"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map