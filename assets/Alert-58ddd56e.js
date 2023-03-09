import{S as F,aG as u,aj as C,V as S,W as i,a8 as R,bA as O,X as V,a as N,Y as D,Z as $,as as G,a0 as E,ai as K,a1 as c,a2 as X,y as Y,M as l,aI as Z,bz as q,ag as J,a3 as Q,bB as U,bC as oo,bD as eo,bE as ro,ad as no,bh as so}from"./index-e1b4e266.js";const lo={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},to=r=>{const{lineHeight:e,borderRadius:d,fontWeightStrong:v,baseColor:t,dividerColor:f,actionColor:P,textColor1:g,textColor2:s,closeColorHover:h,closeColorPressed:b,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,infoColor:o,successColor:x,warningColor:I,errorColor:z,fontSize:T}=r;return Object.assign(Object.assign({},lo),{fontSize:T,lineHeight:e,titleFontWeight:v,borderRadius:d,border:`1px solid ${f}`,color:P,titleTextColor:g,iconColor:s,contentTextColor:s,closeBorderRadius:d,closeColorHover:h,closeColorPressed:b,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${u(t,C(o,{alpha:.25}))}`,colorInfo:u(t,C(o,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:o,contentTextColorInfo:s,closeColorHoverInfo:h,closeColorPressedInfo:b,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${u(t,C(x,{alpha:.25}))}`,colorSuccess:u(t,C(x,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:x,contentTextColorSuccess:s,closeColorHoverSuccess:h,closeColorPressedSuccess:b,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${u(t,C(I,{alpha:.33}))}`,colorWarning:u(t,C(I,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:I,contentTextColorWarning:s,closeColorHoverWarning:h,closeColorPressedWarning:b,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${u(t,C(z,{alpha:.25}))}`,colorError:u(t,C(z,{alpha:.08})),titleTextColorError:g,iconColorError:z,contentTextColorError:s,closeColorHoverError:h,closeColorPressedError:b,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:n})},io={name:"Alert",common:F,self:to},ao=io,co=S("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),R("closable",[S("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),S("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),O({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),R("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),go=Object.assign(Object.assign({},$.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),uo=N({name:"Alert",inheritAttrs:!1,props:go,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:v,mergedRtlRef:t}=D(r),f=$("Alert","-alert",co,ao,r,e),P=G("Alert",t,e),g=E(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=f.value,{fontSize:x,borderRadius:I,titleFontWeight:z,lineHeight:T,iconSize:H,iconMargin:y,iconMarginRtl:_,closeIconSize:W,closeBorderRadius:A,closeSize:w,closeMargin:B,closeMarginRtl:L,padding:M}=o,{type:a}=r,{left:k,right:j}=K(y);return{"--n-bezier":n,"--n-color":o[c("color",a)],"--n-close-icon-size":W,"--n-close-border-radius":A,"--n-close-color-hover":o[c("closeColorHover",a)],"--n-close-color-pressed":o[c("closeColorPressed",a)],"--n-close-icon-color":o[c("closeIconColor",a)],"--n-close-icon-color-hover":o[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":o[c("closeIconColorPressed",a)],"--n-icon-color":o[c("iconColor",a)],"--n-border":o[c("border",a)],"--n-title-text-color":o[c("titleTextColor",a)],"--n-content-text-color":o[c("contentTextColor",a)],"--n-line-height":T,"--n-border-radius":I,"--n-font-size":x,"--n-title-font-weight":z,"--n-icon-size":H,"--n-icon-margin":y,"--n-icon-margin-rtl":_,"--n-close-size":w,"--n-close-margin":B,"--n-close-margin-rtl":L,"--n-padding":M,"--n-icon-margin-left":k,"--n-icon-margin-right":j}}),s=v?X("alert",E(()=>r.type[0]),g,r):void 0,h=Y(!0),b=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:P,mergedClsPrefix:e,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(h.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:f,cssVars:v?void 0:g,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),l(so,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,v={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},Z(this.$attrs,v)),this.closable&&l(q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${e}-alert__border`}),this.showIcon&&l("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},J(d.icon,()=>[l(Q,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return l(ro,null);case"info":return l(eo,null);case"warning":return l(oo,null);case"error":return l(U,null);default:return null}}})])),l("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},no(d.header,t=>{const f=t||this.title;return f?l("div",{class:`${e}-alert-body__title`},f):null}),d.default&&l("div",{class:`${e}-alert-body__content`},d))):null}})}});export{uo as _};
