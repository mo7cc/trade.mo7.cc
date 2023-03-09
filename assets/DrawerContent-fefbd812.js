import{a4 as fe,S as be,a5 as ge,a as j,y as k,i as X,br as A,a0 as z,Y,as as me,ak as ve,H as pe,Q as we,aC as ye,bs as ze,ac as O,aA as _,aB as L,M as s,bt as Se,T as V,aI as $e,af as q,aO as Ce,aM as xe,aN as Be,X as n,be as P,V as b,a8 as w,W as B,bu as ke,az as Ee,Z as K,ab as U,bv as Re,a2 as Te,bw as Fe,bx as Me,ao as C,by as Oe,t as Pe,bz as Ie}from"./index-e1b4e266.js";import{u as W}from"./use-merged-state-0e90f292.js";import{f as N}from"./format-length-c9d165c6.js";const He=e=>{const{modalColor:t,textColor1:r,textColor2:u,boxShadow3:d,lineHeight:g,fontWeightStrong:l,dividerColor:h,closeColorHover:f,closeColorPressed:v,closeIconColor:c,closeIconColorHover:E,closeIconColorPressed:R,borderRadius:T,primaryColorHover:F}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:u,titleTextColor:r,titleFontSize:"18px",titleFontWeight:l,boxShadow:d,lineHeight:g,headerBorderBottom:`1px solid ${h}`,footerBorderTop:`1px solid ${h}`,closeIconColor:c,closeIconColorHover:E,closeIconColorPressed:R,closeSize:"22px",closeIconSize:"18px",closeColorHover:f,closeColorPressed:v,closeBorderRadius:T,resizableTriggerColorHover:F}},De=fe({name:"Drawer",common:be,peers:{Scrollbar:ge},self:He}),_e=De,je=j({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=k(!!e.show),r=k(null),u=X(A);let d=0,g="",l=null;const h=k(!1),f=k(!1),v=z(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:c,mergedRtlRef:E}=Y(e),R=me("Drawer",E,c),T=o=>{f.value=!0,d=v.value?o.clientY:o.clientX,g=document.body.style.cursor,document.body.style.cursor=v.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",x),document.body.addEventListener("mouseleave",p),document.body.addEventListener("mouseup",y)},F=()=>{l!==null&&(window.clearTimeout(l),l=null),f.value?h.value=!0:l=window.setTimeout(()=>{h.value=!0},300)},I=()=>{l!==null&&(window.clearTimeout(l),l=null),h.value=!1},{doUpdateHeight:H,doUpdateWidth:D}=u,x=o=>{var m,M;if(f.value)if(v.value){let S=((m=r.value)===null||m===void 0?void 0:m.offsetHeight)||0;const $=d-o.clientY;S+=e.placement==="bottom"?$:-$,H(S),d=o.clientY}else{let S=((M=r.value)===null||M===void 0?void 0:M.offsetWidth)||0;const $=d-o.clientX;S+=e.placement==="right"?$:-$,D(S),d=o.clientX}},y=()=>{f.value&&(d=0,f.value=!1,document.body.style.cursor=g,document.body.removeEventListener("mousemove",x),document.body.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",p))},p=y;ve(()=>{e.show&&(t.value=!0)}),pe(()=>e.show,o=>{o||y()}),we(()=>{y()});const i=z(()=>{const{show:o}=e,m=[[L,o]];return e.showMask||m.push([ye,e.onClickoutside,void 0,{capture:!0}]),m});function a(){var o;t.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return ze(z(()=>e.blockScroll&&t.value)),O(Ce,r),O(xe,null),O(Be,null),{bodyRef:r,rtlEnabled:R,mergedClsPrefix:u.mergedClsPrefixRef,isMounted:u.isMountedRef,mergedTheme:u.mergedThemeRef,displayed:t,transitionName:z(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:a,bodyDirectives:i,handleMousedownResizeTrigger:T,handleMouseenterResizeTrigger:F,handleMouseleaveResizeTrigger:I,isDragging:f,isHoverOnResizeTrigger:h}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?_(s("div",{role:"none"},s(Se,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(V,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>_(s("div",$e(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):s(q,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[L,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ae,cubicBezierEaseOut:Le}=P;function Ue({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ae}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Le}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:We,cubicBezierEaseOut:Ne}=P;function Xe({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${We}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ne}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Ye,cubicBezierEaseOut:Ve}=P;function qe({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ye}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ve}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Ke,cubicBezierEaseOut:Qe}=P;function Ze({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ke}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Qe}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const Ge=n([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ue(),Xe(),qe(),Ze(),w("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),w("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),B("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[w("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[w("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),w("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),w("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[B("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),w("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),w("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),n("body",[n(">",[b("drawer-container",{position:"fixed"})])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[n("> *",{pointerEvents:"all"})]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[w("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),ke({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Je=Object.assign(Object.assign({},K.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),nt=j({name:"Drawer",inheritAttrs:!1,props:Je,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:u}=Y(e),d=Ee(),g=K("Drawer","-drawer",Ge,_e,e,t),l=k(e.defaultWidth),h=k(e.defaultHeight),f=W(U(e,"width"),l),v=W(U(e,"height"),h),c=z(()=>{const{placement:i}=e;return i==="top"||i==="bottom"?"":N(f.value)}),E=z(()=>{const{placement:i}=e;return i==="left"||i==="right"?"":N(v.value)}),R=i=>{const{onUpdateWidth:a,"onUpdate:width":o}=e;a&&C(a,i),o&&C(o,i),l.value=i},T=i=>{const{onUpdateHeight:a,"onUpdate:width":o}=e;a&&C(a,i),o&&C(o,i),h.value=i},F=z(()=>[{width:c.value,height:E.value},e.drawerStyle||""]);function I(i){const{onMaskClick:a,maskClosable:o}=e;o&&x(!1),a&&a(i)}const H=Re();function D(i){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Me(i)&&!H.value&&x(!1)}function x(i){const{onHide:a,onUpdateShow:o,"onUpdate:show":m}=e;o&&C(o,i),m&&C(m,i),a&&!i&&C(a,i)}O(A,{isMountedRef:d,mergedThemeRef:g,mergedClsPrefixRef:t,doUpdateShow:x,doUpdateHeight:T,doUpdateWidth:R});const y=z(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:a,cubicBezierEaseOut:o},self:{color:m,textColor:M,boxShadow:S,lineHeight:$,headerPadding:Q,footerPadding:Z,bodyPadding:G,titleFontSize:J,titleTextColor:ee,titleFontWeight:te,headerBorderBottom:re,footerBorderTop:oe,closeIconColor:ne,closeIconColorHover:ie,closeIconColorPressed:se,closeColorHover:ae,closeColorPressed:le,closeIconSize:de,closeSize:ce,closeBorderRadius:ue,resizableTriggerColorHover:he}}=g.value;return{"--n-line-height":$,"--n-color":m,"--n-text-color":M,"--n-box-shadow":S,"--n-bezier":i,"--n-bezier-out":o,"--n-bezier-in":a,"--n-header-padding":Q,"--n-body-padding":G,"--n-footer-padding":Z,"--n-title-text-color":ee,"--n-title-font-size":J,"--n-title-font-weight":te,"--n-header-border-bottom":re,"--n-footer-border-top":oe,"--n-close-icon-color":ne,"--n-close-icon-color-hover":ie,"--n-close-icon-color-pressed":se,"--n-close-size":ce,"--n-close-color-hover":ae,"--n-close-color-pressed":le,"--n-close-icon-size":de,"--n-close-border-radius":ue,"--n-resize-trigger-color-hover":he}}),p=u?Te("drawer",void 0,y,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:F,handleMaskClick:I,handleEsc:D,mergedTheme:g,cssVars:u?void 0:y,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,isMounted:d}},render(){const{mergedClsPrefix:e}=this;return s(Fe,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),_(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(V,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(je,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Oe,{zIndex:this.zIndex,enabled:this.show}]])}})}}),et={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},it=j({name:"DrawerContent",props:et,setup(){const e=X(A,null);e||Pe("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:u,bodyStyle:d,bodyContentStyle:g,headerStyle:l,footerStyle:h,scrollbarProps:f,closable:v,$slots:c}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},c.header||e||v?s("div",{class:`${t}-drawer-header`,style:l,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},c.header!==void 0?c.header():e),v&&s(Ie,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:`${t}-drawer-body`,style:d,role:"none"},s("div",{class:`${t}-drawer-body-content-wrapper`,style:g,role:"none"},c)):s(q,Object.assign({themeOverrides:u.peerOverrides.Scrollbar,theme:u.peers.Scrollbar},f,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:g}),c),c.footer?s("div",{class:`${t}-drawer-footer`,style:h,role:"none"},c.footer()):null)}});export{it as _,nt as a};
