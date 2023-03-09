import{a as O,y as m,a0 as S,H as L,ab as D,M as c,K as P,X as d,be as X,V as y,bf as j,a8 as _,W as q,bg as G,bh as U,bi as H,S as J,aa as z,Y as Z,Z as M,bj as K,J as F,as as Q,a1 as ee,a2 as te,bk as ae,T as ne,ag as oe,bl as se,bm as ie,bn as re,j as R,aR as le,b as W,k as x,bo as ue,w as $,u as N,e as ce,c as V,F as de,bp as fe,o as A,l as me,f as pe,bq as be,g as ve,_ as I,r as he}from"./index-e1b4e266.js";import{G as ge}from"./index-f49e440a.js";import{g as _e}from"./attribute-2ee9e579.js";import{a as ye,_ as we}from"./DrawerContent-fefbd812.js";import{_ as xe}from"./Alert-58ddd56e.js";import{_ as Se}from"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-0e90f292.js";import"./format-length-c9d165c6.js";const Y=O({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const n=m(null),s=m(e.value),l=m(e.value),a=m("up"),t=m(!1),f=S(()=>t.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),u=S(()=>t.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);L(D(e,"value"),(o,r)=>{s.value=r,l.value=o,P(p)});function p(){const o=e.newOriginalNumber,r=e.oldOriginalNumber;r===void 0||o===void 0||(o>r?i("up"):r>o&&i("down"))}function i(o){a.value=o,t.value=!1,P(()=>{var r;(r=n.value)===null||r===void 0||r.offsetWidth,t.value=!0})}return()=>{const{clsPrefix:o}=e;return c("span",{ref:n,class:`${o}-base-slot-machine-number`},s.value!==null?c("span",{class:[`${o}-base-slot-machine-old-number ${o}-base-slot-machine-old-number--top`,u.value]},s.value):null,c("span",{class:[`${o}-base-slot-machine-current-number`,f.value]},c("span",{ref:"numberWrapper",class:[`${o}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${o}-base-slot-machine-current-number__inner--not-number`]},l.value)),s.value!==null?c("span",{class:[`${o}-base-slot-machine-old-number ${o}-base-slot-machine-old-number--bottom`,u.value]},s.value):null)}}}),{cubicBezierEaseOut:E}=X;function Ce({duration:e=".2s"}={}){return[d("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${E},
 max-width ${e} ${E},
 transform ${e} ${E}
 `}),d("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${E},
 max-width ${e} ${E},
 transform ${e} ${E}
 `}),d("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),d("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),d("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),d("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const $e=d([d("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),d("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),d("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),d("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),y("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[y("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Ce({duration:".2s"}),j({duration:".2s",delay:"0s"}),y("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[_("top",{transform:"translateY(-100%)"}),_("bottom",{transform:"translateY(100%)"}),_("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),_("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),y("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[_("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),_("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),q("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[_("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Ee=O({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){G("-base-slot-machine",$e,D(e,"clsPrefix"));const n=m(),s=m(),l=S(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let t=e.value;for(e.max!==void 0&&(t=Math.min(e.max,t));t>=1;)a.push(t%10),t/=10,t=Math.floor(t);return a.reverse(),a});return L(D(e,"value"),(a,t)=>{typeof a=="string"?(s.value=void 0,n.value=void 0):typeof t=="string"?(s.value=a,n.value=void 0):(s.value=a,n.value=t)}),()=>{const{value:a,clsPrefix:t}=e;return typeof a=="number"?c("span",{class:`${t}-base-slot-machine`},c(H,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((f,u)=>c(Y,{clsPrefix:t,key:l.value.length-u-1,oldOriginalNumber:n.value,newOriginalNumber:s.value,value:f}))}),c(U,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?c(Y,{clsPrefix:t,value:"+"}):null})):c("span",{class:`${t}-base-slot-machine`},a)}}}),ke=e=>{const{errorColor:n,infoColor:s,successColor:l,warningColor:a,fontFamily:t}=e;return{color:n,colorInfo:s,colorSuccess:l,colorError:n,colorWarning:a,fontSize:"12px",fontFamily:t}},Ne={name:"Badge",common:J,self:ke},Re=Ne,Ae=d([d("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),y("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[_("as-is",[y("badge-sup",{position:"static",transform:"translateX(0)"},[z({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),_("dot",[y("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[d("::before","border-radius: 4px;")])]),y("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[z({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),y("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),d("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ie=Object.assign(Object.assign({},M.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),Oe=O({name:"Badge",props:Ie,setup(e,{slots:n}){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:a}=Z(e),t=M("Badge","-badge",Ae,Re,e,s),f=m(!1),u=()=>{f.value=!0},p=()=>{f.value=!1},i=S(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!K(n.value)));F(()=>{i.value&&(f.value=!0)});const o=Q("Badge",a,s),r=S(()=>{const{type:v,color:h}=e,{common:{cubicBezierEaseInOut:g,cubicBezierEaseOut:k},self:{[ee("color",v)]:C,fontFamily:B,fontSize:T}}=t.value;return{"--n-font-size":T,"--n-font-family":B,"--n-color":h||C,"--n-ripple-color":h||C,"--n-bezier":g,"--n-ripple-bezier":k}}),w=l?te("badge",S(()=>{let v="";const{type:h,color:g}=e;return h&&(v+=h[0]),g&&(v+=ae(g)),v}),r,e):void 0,b=S(()=>{const{offset:v}=e;if(!v)return;const[h,g]=v,k=typeof h=="number"?`${h}px`:h,C=typeof g=="number"?`${g}px`:g;return{transform:`translate(calc(${o!=null&&o.value?"50%":"-50%"} + ${k}), ${C})`}});return{rtlEnabled:o,mergedClsPrefix:s,appeared:f,showBadge:i,handleAfterEnter:u,handleAfterLeave:p,cssVars:l?void 0:r,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,offsetStyle:b}},render(){var e;const{mergedClsPrefix:n,onRender:s,themeClass:l,$slots:a}=this;s==null||s();const t=(e=a.default)===null||e===void 0?void 0:e.call(a);return c("div",{class:[`${n}-badge`,this.rtlEnabled&&`${n}-badge--rtl`,l,{[`${n}-badge--dot`]:this.dot,[`${n}-badge--as-is`]:!t}],style:this.cssVars},t,c(ne,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?c("sup",{class:`${n}-badge-sup`,title:_e(this.value),style:this.offsetStyle},oe(a.value,()=>[this.dot?null:c(Ee,{clsPrefix:n,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?c(se,{clsPrefix:n}):null):null}))}});function Be(e){let n="wss:",s=window.ViteConst.BaseUrl,l="/api/wss";window.location.protocol==="http:"&&(n="ws:"),e.Host&&(l=`/CoinAI/wss?host=${e.Host}`);let t=n+s+l;const f={Token:ie(),Encrypt:re("/wss")},u=new WebSocket(t);return u.addEventListener("open",p=>{u.send(JSON.stringify(f)),e.OpenEvent&&e.OpenEvent({Socket:u,Event:"open",Response:{Code:1,Data:p,Msg:"open"}})}),u.addEventListener("message",p=>{let i={Code:-1,Data:{},Msg:"message"};try{const o=p.data;i=JSON.parse(o)}catch{i={Code:1,Data:{},Msg:p.data}}e.MessageEvent({Socket:u,Event:"message",Response:i})}),u}const Te={class:"wrapper"},De={key:0,class:"PageWrapper"},Pe=O({__name:"CoinAI",setup(e){const n=R(()=>I(()=>import("./PageTitle-0db350a3.js"),["assets/PageTitle-0db350a3.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/PageTitle-a68b02f4.css"])),s=R(()=>I(()=>import("./XIcon-d6c5d7b7.js"),["assets/XIcon-d6c5d7b7.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/XIcon-dcf3bf82.css"])),l=R(()=>I(()=>import("./SysManage-160af8ff.js"),["assets/SysManage-160af8ff.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/index-443e836d.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Input-90f12dff.js","assets/use-merged-state-0e90f292.js","assets/SysManage-4edfe4d4.css"])),a=R(()=>I(()=>import("./InfoOk-76f6b43f.js"),["assets/InfoOk-76f6b43f.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/filters-636926a0.js","assets/index-443e836d.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Input-90f12dff.js","assets/use-merged-state-0e90f292.js","assets/index-f49e440a.js","assets/DrawerContent-fefbd812.js","assets/format-length-c9d165c6.js","assets/InfoOk-80e2c770.css"]));let t=m({AppEnv:{},GithubInfo:{},LeverOpt:[]}),f=m("");function u(){ge({SatelliteServe:f.value}).then(b=>{b.Code>0&&(t.value=b.Data,i.value={...t.value,...i.value})}).catch(b=>{window.$message.error("服务尚未启动",{onAfterLeave(){window.location.href="/CoinServe"}})})}let p=null,i=m({});function o(){p=Be({Host:f.value,MessageEvent(b){b.Response.Code==1&&(i.value={...t.value,...b.Response.Data})}})}window.$Event.CoinAIGetConfig=()=>{u()},F(()=>{const b=fe();f.value=b.query.id,u(),o()}),le(()=>{p.close()});let r=m(!1);const w=()=>{r.value=!0};return(b,v)=>{const h=he,g=Oe,k=we,C=ye,B=xe;return A(),W(de,null,[x(N(n),{class:"CoinAIPageTitle"},ue({default:$(()=>[me(pe(N(be)(i.value,"AppEnv.ServeID"))+" ",1)]),_:2},[i.value.AppEnv?{name:"after",fn:$(()=>[x(g,{class:"AItradeServer__dotNet",dot:i.value.AppEnv.Version!=i.value.GithubInfo.Version},{default:$(()=>[x(h,{size:"tiny",quaternary:"",onClick:w},{icon:$(()=>[x(N(s),{spin:"",name:"SettingOutlined"})]),_:1})]),_:1},8,["dot"])]),key:"0"}:void 0]),1024),ce("div",Te,[x(C,{show:r.value,"onUpdate:show":v[0]||(v[0]=T=>r.value=T),placement:"top"},{default:$(()=>[x(k,{class:"AItradeServer__drawer-content"},{default:$(()=>[r.value?(A(),V(N(l),{key:0,WssData:i.value},null,8,["WssData"])):ve("",!0)]),_:1})]),_:1},8,["show"]),i.value.TradeLever>1&&i.value.AppEnv.Name.length>1?(A(),W("div",De,[x(N(a),{WssData:i.value},null,8,["WssData"])])):(A(),V(B,{key:1,class:"noData",title:"该信息如果长时间存在，请尝试刷新或更换浏览器！",type:"info"}))])],64)}}});const je=Se(Pe,[["__scopeId","data-v-6dea3ce9"]]);export{je as default};
