import{a as O,j as A,y,J as F,b as E,k as e,w as o,u as l,e as r,F as L,bp as N,bd as P,r as V,o as R,R as k,l as d,p as j,h as D,_ as b,A as T,C as U}from"./index-e1b4e266.js";import{A as X}from"./index-443e836d.js";import{G as $,S as z}from"./index-f49e440a.js";import{_ as B,a as G}from"./FormItem-a002c1ab.js";import{_ as M}from"./Input-90f12dff.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import"./format-length-c9d165c6.js";import"./get-eef5e00b.js";import"./use-merged-state-0e90f292.js";const f=m=>(j("data-v-c7fa7d0c"),m=m(),D(),m),J={class:"PageWrapper"},Q={class:"joinFooter"},W=f(()=>r("span",{class:"joinCode"},"OKX（欧易） 注册邀请码： 11352015",-1)),H=f(()=>r("br",null,null,-1)),Y=f(()=>r("a",{class:"joinLink",href:"https://zixinshi.com/join/11352015",target:"_blank"},"下载 和 注册 欧意(OKX)",-1)),Z=f(()=>r("br",null,null,-1)),ee={class:"pageFooter"},oe=O({__name:"AddKey",setup(m){const x=A(()=>b(()=>import("./PageTitle-0db350a3.js"),["assets/PageTitle-0db350a3.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/PageTitle-a68b02f4.css"])),u=A(()=>b(()=>import("./XIcon-d6c5d7b7.js"),["assets/XIcon-d6c5d7b7.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/XIcon-dcf3bf82.css"])),S=T();let i=y({AppEnv:{},GithubInfo:{}}),c=y(!1),t=y({Name:"",ApiKey:"",SecretKey:"",Passphrase:"",Password:""});const g=async()=>{const s=await z({...U(t.value),SatelliteServe:i.value.AppEnv.ServeID});s.Code>0&&(window.$message.success(s.Msg),S.go(-1))},I=async()=>{c.value=!0,X({IsPassword:!0,async OkBack(s){return c.value=!1,t.value.Password=s.Password,g()}}),c.value=!1};function C(s){$({SatelliteServe:s}).then(a=>{a.Code>0&&(i.value=a.Data)}).catch(a=>{window.$message.error("服务尚未启动",{onAfterLeave(){window.location.href="/CoinServe"}})})}F(()=>{const s=N();C(s.query.id)});const K=()=>{P(i.value.AppEnv.IP)},w=s=>{P(s)};return(s,a)=>{const v=V,_=M,p=G,h=B;return R(),E(L,null,[e(l(x),null,{after:o(()=>[e(l(k),{to:"/About/OkxKey",className:"CreateOkxKey__about"},{default:o(()=>[e(v,{circle:"",quaternary:"",size:"tiny",class:"About__btn"},{icon:o(()=>[e(l(u),{name:"QuestionCircleOutlined"})]),_:1})]),_:1})]),default:o(()=>[d(" 新增 OKX API 密钥 ")]),_:1}),r("div",J,[e(h,{ref:"loginForm",model:t.value,size:"small",class:"myForm"},{default:o(()=>[e(p,{class:"myForm__item",label:"备注名"},{default:o(()=>[e(_,{name:"Name",value:t.value.Name,"onUpdate:value":a[0]||(a[0]=n=>t.value.Name=n),inputProps:{autocomplete:"password"},placeholder:"申请秘钥时的备注名"},{prefix:o(()=>[e(l(u),{name:"SkinOutlined"})]),_:1},8,["value"])]),_:1}),e(p,{class:"myForm__item",label:"密码 (申请欧意 V5 API 时设置的密码短语)"},{default:o(()=>[e(_,{name:"Passphrase",value:t.value.Passphrase,"onUpdate:value":a[1]||(a[1]=n=>t.value.Passphrase=n),inputProps:{autocomplete:"password"},placeholder:"申请 API key 时设置的密码"},{prefix:o(()=>[e(l(u),{name:"OkxLogo"})]),_:1},8,["value"])]),_:1}),e(p,{class:"myForm__item",label:"API key"},{default:o(()=>[e(_,{name:"ApiKey",value:t.value.ApiKey,"onUpdate:value":a[2]||(a[2]=n=>t.value.ApiKey=n),inputProps:{autocomplete:"password"},placeholder:"okx 生成的 Api key"},{prefix:o(()=>[e(l(u),{name:"OkxLogo"})]),_:1},8,["value"])]),_:1}),e(p,{class:"myForm__item",label:"Secret key"},{default:o(()=>[e(_,{name:"SecretKey",value:t.value.SecretKey,"onUpdate:value":a[3]||(a[3]=n=>t.value.SecretKey=n),inputProps:{autocomplete:"password"},placeholder:"okx 生成的 Secret key"},{prefix:o(()=>[e(l(u),{name:"OkxLogo"})]),_:1},8,["value"])]),_:1}),e(p,{class:"myForm__item",label:"复制以下内容 并填写到【绑定IP地址】一栏"},{default:o(()=>[e(_,{name:"IP",value:i.value.AppEnv.IP,"onUpdate:value":a[4]||(a[4]=n=>i.value.AppEnv.IP=n),inputProps:{autocomplete:"password"},disabled:"",placeholder:"申请密钥时绑定的IP地址"},{prefix:o(()=>[e(l(u),{name:"OkxLogo"})]),_:1},8,["value"]),e(v,{type:"primary",onClick:K},{default:o(()=>[d(" 复制 ")]),_:1})]),_:1}),e(p,{class:"myForm__item"},{default:o(()=>[e(v,{class:"Submit",disabled:c.value,type:"primary",onClick:I},{default:o(()=>[d(" 提交 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"]),r("div",Q,[r("div",null,[W,e(v,{type:"primary",size:"tiny",onClick:a[5]||(a[5]=n=>w("11352015"))},{default:o(()=>[d(" 复制 ")]),_:1}),H,Y,Z])]),r("div",ee,[e(l(k),{to:"/About/OkxKey",className:"CreateOkxKey__about--footer"},{default:o(()=>[d(" OKX秘钥申请指南 ")]),_:1})])])],64)}}});const _e=q(oe,[["__scopeId","data-v-c7fa7d0c"]]);export{_e as default};
