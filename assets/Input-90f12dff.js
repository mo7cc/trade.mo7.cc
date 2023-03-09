import{co as be,cp as Y,cq as dr,cr as J,a0 as T,i as Re,$ as cr,a as I,M as n,b1 as ur,V as w,X as P,W as d,ap as hr,bg as Ee,ab as we,au as fr,ag as G,a3 as le,ae as vr,S as pr,aj as ye,an as mr,y as C,H as Ce,cs as gr,a8 as z,a9 as Z,Y as br,Z as We,ct as yr,am as xr,a6 as Te,J as wr,bP as Cr,ak as Ae,ac as Sr,as as Pr,a2 as Mr,ad as ae,af as Fr,F as zr,aS as Tr,K as $e,av as De,a1 as xe,ai as Ar,ao as S,aK as _e}from"./index-e1b4e266.js";import{u as $r}from"./use-merged-state-0e90f292.js";const Dr={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:o=>`Please load all ${o}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:o=>`Total ${o} items`,selected:o=>`${o} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},_r=Dr;var kr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Rr=function(i,t,v){var p,c=kr[i];return typeof c=="string"?p=c:t===1?p=c.one:p=c.other.replace("{{count}}",t.toString()),v!=null&&v.addSuffix?v.comparison&&v.comparison>0?"in "+p:p+" ago":p};const Er=Rr;var Wr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Br={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Lr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ir={date:be({formats:Wr,defaultWidth:"full"}),time:be({formats:Br,defaultWidth:"full"}),dateTime:be({formats:Lr,defaultWidth:"full"})};const Vr=Ir;var Nr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Or=function(i,t,v,p){return Nr[i]};const Hr=Or;var jr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ur={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},qr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Kr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Yr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Jr=function(i,t){var v=Number(i),p=v%100;if(p>20||p<10)switch(p%10){case 1:return v+"st";case 2:return v+"nd";case 3:return v+"rd"}return v+"th"},Zr={ordinalNumber:Jr,era:Y({values:jr,defaultWidth:"wide"}),quarter:Y({values:Ur,defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:Y({values:qr,defaultWidth:"wide"}),day:Y({values:Kr,defaultWidth:"wide"}),dayPeriod:Y({values:Xr,defaultWidth:"wide",formattingValues:Yr,defaultFormattingWidth:"wide"})};const Gr=Zr;var Qr=/^(\d+)(th|st|nd|rd)?/i,et=/\d+/i,ot={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rt={any:[/^b/i,/^(a|c)/i]},tt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nt={any:[/1/i,/2/i,/3/i,/4/i]},at={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},it={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},lt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},st={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ct={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ut={ordinalNumber:dr({matchPattern:Qr,parsePattern:et,valueCallback:function(i){return parseInt(i,10)}}),era:J({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),quarter:J({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:J({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:it,defaultParseWidth:"any"}),day:J({matchPatterns:lt,defaultMatchWidth:"wide",parsePatterns:st,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:dt,defaultMatchWidth:"any",parsePatterns:ct,defaultParseWidth:"any"})};const ht=ut;var ft={code:"en-US",formatDistance:Er,formatLong:Vr,formatRelative:Hr,localize:Gr,match:ht,options:{weekStartsOn:0,firstWeekContainsDate:1}};const vt=ft,pt={name:"en-US",locale:vt},mt=pt;function gt(o){const{mergedLocaleRef:i,mergedDateLocaleRef:t}=Re(cr,null)||{},v=T(()=>{var c,f;return(f=(c=i==null?void 0:i.value)===null||c===void 0?void 0:c[o])!==null&&f!==void 0?f:_r[o]});return{dateLocaleRef:T(()=>{var c;return(c=t==null?void 0:t.value)!==null&&c!==void 0?c:mt}),localeRef:v}}const bt=I({name:"Eye",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),n("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),yt=I({name:"EyeOff",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),n("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),n("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),n("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),n("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),xt=I({name:"ChevronDown",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),wt=ur("clear",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Ct=w("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[P(">",[d("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[P("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),P("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),d("placeholder",`
 display: flex;
 `),d("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[hr({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Se=I({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(o){return Ee("-base-clear",Ct,we(o,"clsPrefix")),{handleMouseDown(i){i.preventDefault()}}},render(){const{clsPrefix:o}=this;return n("div",{class:`${o}-base-clear`},n(fr,null,{default:()=>{var i,t;return this.show?n("div",{key:"dismiss",class:`${o}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},G(this.$slots.icon,()=>[n(le,{clsPrefix:o},{default:()=>n(wt,null)})])):n("div",{key:"icon",class:`${o}-base-clear__placeholder`},(t=(i=this.$slots).placeholder)===null||t===void 0?void 0:t.call(i))}}))}}),St=I({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(o,{slots:i}){return()=>{const{clsPrefix:t}=o;return n(vr,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:o.loading},{default:()=>o.showArrow?n(Se,{clsPrefix:t,show:o.showClear,onClear:o.onClear},{placeholder:()=>n(le,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>G(i.default,()=>[n(xt,null)])})}):null})}}}),Pt={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},Mt=o=>{const{textColor2:i,textColor3:t,textColorDisabled:v,primaryColor:p,primaryColorHover:c,inputColor:f,inputColorDisabled:u,borderColor:h,warningColor:l,warningColorHover:s,errorColor:m,errorColorHover:y,borderRadius:$,lineHeight:M,fontSizeTiny:se,fontSizeSmall:V,fontSizeMedium:de,fontSizeLarge:F,heightTiny:k,heightSmall:O,heightMedium:D,heightLarge:ce,actionColor:_,clearColor:R,clearColorHover:A,clearColorPressed:E,placeholderColor:H,placeholderColorDisabled:j,iconColor:ue,iconColorDisabled:he,iconColorHover:U,iconColorPressed:fe}=o;return Object.assign(Object.assign({},Pt),{countTextColorDisabled:v,countTextColor:t,heightTiny:k,heightSmall:O,heightMedium:D,heightLarge:ce,fontSizeTiny:se,fontSizeSmall:V,fontSizeMedium:de,fontSizeLarge:F,lineHeight:M,lineHeightTextarea:M,borderRadius:$,iconSize:"16px",groupLabelColor:_,groupLabelTextColor:i,textColor:i,textColorDisabled:v,textDecorationColor:i,caretColor:p,placeholderColor:H,placeholderColorDisabled:j,color:f,colorDisabled:u,colorFocus:f,groupLabelBorder:`1px solid ${h}`,border:`1px solid ${h}`,borderHover:`1px solid ${c}`,borderDisabled:`1px solid ${h}`,borderFocus:`1px solid ${c}`,boxShadowFocus:`0 0 0 2px ${ye(p,{alpha:.2})}`,loadingColor:p,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${s}`,colorFocusWarning:f,borderFocusWarning:`1px solid ${s}`,boxShadowFocusWarning:`0 0 0 2px ${ye(l,{alpha:.2})}`,caretColorWarning:l,loadingColorError:m,borderError:`1px solid ${m}`,borderHoverError:`1px solid ${y}`,colorFocusError:f,borderFocusError:`1px solid ${y}`,boxShadowFocusError:`0 0 0 2px ${ye(m,{alpha:.2})}`,caretColorError:m,clearColor:R,clearColorHover:A,clearColorPressed:E,iconColor:ue,iconColorDisabled:he,iconColorHover:U,iconColorPressed:fe,suffixTextColor:i})},Ft={name:"Input",common:pr,self:Mt},zt=Ft,Be=mr("n-input");function Tt(o){let i=0;for(const t of o)i++;return i}function ie(o){return o===""||o==null}function At(o){const i=C(null);function t(){const{value:c}=o;if(!(c!=null&&c.focus)){p();return}const{selectionStart:f,selectionEnd:u,value:h}=c;if(f==null||u==null){p();return}i.value={start:f,end:u,beforeText:h.slice(0,f),afterText:h.slice(u)}}function v(){var c;const{value:f}=i,{value:u}=o;if(!f||!u)return;const{value:h}=u,{start:l,beforeText:s,afterText:m}=f;let y=h.length;if(h.endsWith(m))y=h.length-m.length;else if(h.startsWith(s))y=s.length;else{const $=s[l-1],M=h.indexOf($,l-1);M!==-1&&(y=M+1)}(c=u.setSelectionRange)===null||c===void 0||c.call(u,y,y)}function p(){i.value=null}return Ce(o,p),{recordCursor:t,restoreCursor:v}}const ke=I({name:"InputWordCount",setup(o,{slots:i}){const{mergedValueRef:t,maxlengthRef:v,mergedClsPrefixRef:p,countGraphemesRef:c}=Re(Be),f=T(()=>{const{value:u}=t;return u===null||Array.isArray(u)?0:(c.value||Tt)(u)});return()=>{const{value:u}=v,{value:h}=t;return n("span",{class:`${p.value}-input-word-count`},gr(i.default,{value:h===null||Array.isArray(h)?"":h},()=>[u===void 0?f.value:`${f.value} / ${u}`]))}}}),$t=w("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[d("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),d("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),d("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),P("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),P("&:-webkit-autofill ~",[d("placeholder","display: none;")])]),z("round",[Z("textarea","border-radius: calc(var(--n-height) / 2);")]),d("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[P("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[d("placeholder","overflow: visible;")]),Z("autosize","width: 100%;"),z("autosize",[d("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),w("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),d("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),d("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[P("+",[d("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Z("textarea",[d("placeholder","white-space: nowrap;")]),d("eye",`
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[w("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[w("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),d("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),d("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[d("input-el, placeholder","text-align: center;"),d("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[w("icon",`
 color: var(--n-icon-color);
 `),w("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[d("border","border: var(--n-border-disabled);"),d("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),d("placeholder","color: var(--n-placeholder-color-disabled);"),d("separator","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),w("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),d("suffix, prefix","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Z("disabled",[d("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[P("&:hover",`
 color: var(--n-icon-color-hover);
 `),P("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),P("&:hover",[d("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[d("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),d("state-border",`
 border-color: #0000;
 z-index: 1;
 `),d("prefix","margin-right: 4px;"),d("suffix",`
 margin-left: 4px;
 `),d("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[w("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),w("base-clear",`
 font-size: var(--n-icon-size);
 `,[d("placeholder",[w("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),P(">",[w("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),w("base-icon",`
 font-size: var(--n-icon-size);
 `)]),w("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(o=>z(`${o}-status`,[Z("disabled",[w("base-loading",`
 color: var(--n-loading-color-${o})
 `),d("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${o});
 `),d("state-border",`
 border: var(--n-border-${o});
 `),P("&:hover",[d("state-border",`
 border: var(--n-border-hover-${o});
 `)]),P("&:focus",`
 background-color: var(--n-color-focus-${o});
 `,[d("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${o});
 `,[d("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)])])]))]),Dt=w("input",[z("disabled",[d("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),_t=Object.assign(Object.assign({},We.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Et=I({name:"Input",props:_t,setup(o){const{mergedClsPrefixRef:i,mergedBorderedRef:t,inlineThemeDisabled:v,mergedRtlRef:p}=br(o),c=We("Input","-input",$t,zt,o,i);yr&&Ee("-input-safari",Dt,i);const f=C(null),u=C(null),h=C(null),l=C(null),s=C(null),m=C(null),y=C(null),$=At(y),M=C(null),{localeRef:se}=gt("Input"),V=C(o.defaultValue),de=we(o,"value"),F=$r(de,V),k=xr(o),{mergedSizeRef:O,mergedDisabledRef:D,mergedStatusRef:ce}=k,_=C(!1),R=C(!1),A=C(!1),E=C(!1);let H=null;const j=T(()=>{const{placeholder:e,pair:r}=o;return r?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[se.value.placeholder]:[e]}),ue=T(()=>{const{value:e}=A,{value:r}=F,{value:a}=j;return!e&&(ie(r)||Array.isArray(r)&&ie(r[0]))&&a[0]}),he=T(()=>{const{value:e}=A,{value:r}=F,{value:a}=j;return!e&&a[1]&&(ie(r)||Array.isArray(r)&&ie(r[1]))}),U=Te(()=>o.internalForceFocus||_.value),fe=Te(()=>{if(D.value||o.readonly||!o.clearable||!U.value&&!R.value)return!1;const{value:e}=F,{value:r}=U;return o.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(R.value||r):!!e&&(R.value||r)}),ve=T(()=>{const{showPasswordOn:e}=o;if(e)return e;if(o.showPasswordToggle)return"click"}),q=C(!1),Le=T(()=>{const{textDecoration:e}=o;return e?Array.isArray(e)?e.map(r=>({textDecoration:r})):[{textDecoration:e}]:["",""]}),Pe=C(void 0),Ie=()=>{var e,r;if(o.type==="textarea"){const{autosize:a}=o;if(a&&(Pe.value=(r=(e=M.value)===null||e===void 0?void 0:e.$el)===null||r===void 0?void 0:r.offsetWidth),!u.value||typeof a=="boolean")return;const{paddingTop:b,paddingBottom:x,lineHeight:g}=window.getComputedStyle(u.value),W=Number(b.slice(0,-2)),B=Number(x.slice(0,-2)),L=Number(g.slice(0,-2)),{value:K}=h;if(!K)return;if(a.minRows){const X=Math.max(a.minRows,1),ge=`${W+B+L*X}px`;K.style.minHeight=ge}if(a.maxRows){const X=`${W+B+L*a.maxRows}px`;K.style.maxHeight=X}}},Ve=T(()=>{const{maxlength:e}=o;return e===void 0?void 0:Number(e)});wr(()=>{const{value:e}=F;Array.isArray(e)||me(e)});const Ne=Cr().proxy;function Q(e){const{onUpdateValue:r,"onUpdate:value":a,onInput:b}=o,{nTriggerFormInput:x}=k;r&&S(r,e),a&&S(a,e),b&&S(b,e),V.value=e,x()}function ee(e){const{onChange:r}=o,{nTriggerFormChange:a}=k;r&&S(r,e),V.value=e,a()}function Oe(e){const{onBlur:r}=o,{nTriggerFormBlur:a}=k;r&&S(r,e),a()}function He(e){const{onFocus:r}=o,{nTriggerFormFocus:a}=k;r&&S(r,e),a()}function je(e){const{onClear:r}=o;r&&S(r,e)}function Ue(e){const{onInputBlur:r}=o;r&&S(r,e)}function qe(e){const{onInputFocus:r}=o;r&&S(r,e)}function Ke(){const{onDeactivate:e}=o;e&&S(e)}function Xe(){const{onActivate:e}=o;e&&S(e)}function Ye(e){const{onClick:r}=o;r&&S(r,e)}function Je(e){const{onWrapperFocus:r}=o;r&&S(r,e)}function Ze(e){const{onWrapperBlur:r}=o;r&&S(r,e)}function Ge(){A.value=!0}function Qe(e){A.value=!1,e.target===m.value?oe(e,1):oe(e,0)}function oe(e,r=0,a="input"){const b=e.target.value;if(me(b),e instanceof InputEvent&&!e.isComposing&&(A.value=!1),o.type==="textarea"){const{value:g}=M;g&&g.syncUnifiedContainer()}if(H=b,A.value)return;$.recordCursor();const x=eo(b);if(x)if(!o.pair)a==="input"?Q(b):ee(b);else{let{value:g}=F;Array.isArray(g)?g=[g[0],g[1]]:g=["",""],g[r]=b,a==="input"?Q(g):ee(g)}Ne.$forceUpdate(),x||$e($.restoreCursor)}function eo(e){const{countGraphemes:r,maxlength:a,minlength:b}=o;if(r){let g;if(a!==void 0&&(g===void 0&&(g=r(e)),g>Number(a))||b!==void 0&&(g===void 0&&(g=r(e)),g<Number(a)))return!1}const{allowInput:x}=o;return typeof x=="function"?x(e):!0}function oo(e){Ue(e),e.relatedTarget===f.value&&Ke(),e.relatedTarget!==null&&(e.relatedTarget===s.value||e.relatedTarget===m.value||e.relatedTarget===u.value)||(E.value=!1),re(e,"blur"),y.value=null}function ro(e,r){qe(e),_.value=!0,E.value=!0,Xe(),re(e,"focus"),r===0?y.value=s.value:r===1?y.value=m.value:r===2&&(y.value=u.value)}function to(e){o.passivelyActivated&&(Ze(e),re(e,"blur"))}function no(e){o.passivelyActivated&&(_.value=!0,Je(e),re(e,"focus"))}function re(e,r){e.relatedTarget!==null&&(e.relatedTarget===s.value||e.relatedTarget===m.value||e.relatedTarget===u.value||e.relatedTarget===f.value)||(r==="focus"?(He(e),_.value=!0):r==="blur"&&(Oe(e),_.value=!1))}function ao(e,r){oe(e,r,"change")}function io(e){Ye(e)}function lo(e){je(e),o.pair?(Q(["",""]),ee(["",""])):(Q(""),ee(""))}function so(e){const{onMousedown:r}=o;r&&r(e);const{tagName:a}=e.target;if(a!=="INPUT"&&a!=="TEXTAREA"){if(o.resizable){const{value:b}=f;if(b){const{left:x,top:g,width:W,height:B}=b.getBoundingClientRect(),L=14;if(x+W-L<e.clientX&&e.clientX<x+W&&g+B-L<e.clientY&&e.clientY<g+B)return}}e.preventDefault(),_.value||Me()}}function co(){var e;R.value=!0,o.type==="textarea"&&((e=M.value)===null||e===void 0||e.handleMouseEnterWrapper())}function uo(){var e;R.value=!1,o.type==="textarea"&&((e=M.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ho(){D.value||ve.value==="click"&&(q.value=!q.value)}function fo(e){if(D.value)return;e.preventDefault();const r=b=>{b.preventDefault(),_e("mouseup",document,r)};if(De("mouseup",document,r),ve.value!=="mousedown")return;q.value=!0;const a=()=>{q.value=!1,_e("mouseup",document,a)};De("mouseup",document,a)}function vo(e){var r;switch((r=o.onKeydown)===null||r===void 0||r.call(o,e),e.key){case"Escape":pe();break;case"Enter":po(e);break}}function po(e){var r,a;if(o.passivelyActivated){const{value:b}=E;if(b){o.internalDeactivateOnEnter&&pe();return}e.preventDefault(),o.type==="textarea"?(r=u.value)===null||r===void 0||r.focus():(a=s.value)===null||a===void 0||a.focus()}}function pe(){o.passivelyActivated&&(E.value=!1,$e(()=>{var e;(e=f.value)===null||e===void 0||e.focus()}))}function Me(){var e,r,a;D.value||(o.passivelyActivated?(e=f.value)===null||e===void 0||e.focus():((r=u.value)===null||r===void 0||r.focus(),(a=s.value)===null||a===void 0||a.focus()))}function mo(){var e;!((e=f.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function go(){var e,r;(e=u.value)===null||e===void 0||e.select(),(r=s.value)===null||r===void 0||r.select()}function bo(){D.value||(u.value?u.value.focus():s.value&&s.value.focus())}function yo(){const{value:e}=f;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&pe()}function xo(e){if(o.type==="textarea"){const{value:r}=u;r==null||r.scrollTo(e)}else{const{value:r}=s;r==null||r.scrollTo(e)}}function me(e){const{type:r,pair:a,autosize:b}=o;if(!a&&b)if(r==="textarea"){const{value:x}=h;x&&(x.textContent=(e??"")+`\r
`)}else{const{value:x}=l;x&&(e?x.textContent=e:x.innerHTML="&nbsp;")}}function wo(){Ie()}const Fe=C({top:"0"});function Co(e){var r;const{scrollTop:a}=e.target;Fe.value.top=`${-a}px`,(r=M.value)===null||r===void 0||r.syncUnifiedContainer()}let te=null;Ae(()=>{const{autosize:e,type:r}=o;e&&r==="textarea"?te=Ce(F,a=>{!Array.isArray(a)&&a!==H&&me(a)}):te==null||te()});let ne=null;Ae(()=>{o.type==="textarea"?ne=Ce(F,e=>{var r;!Array.isArray(e)&&e!==H&&((r=M.value)===null||r===void 0||r.syncUnifiedContainer())}):ne==null||ne()}),Sr(Be,{mergedValueRef:F,maxlengthRef:Ve,mergedClsPrefixRef:i,countGraphemesRef:we(o,"countGraphemes")});const So={wrapperElRef:f,inputElRef:s,textareaElRef:u,isCompositing:A,focus:Me,blur:mo,select:go,deactivate:yo,activate:bo,scrollTo:xo},Po=Pr("Input",p,i),ze=T(()=>{const{value:e}=O,{common:{cubicBezierEaseInOut:r},self:{color:a,borderRadius:b,textColor:x,caretColor:g,caretColorError:W,caretColorWarning:B,textDecorationColor:L,border:K,borderDisabled:X,borderHover:ge,borderFocus:Mo,placeholderColor:Fo,placeholderColorDisabled:zo,lineHeightTextarea:To,colorDisabled:Ao,colorFocus:$o,textColorDisabled:Do,boxShadowFocus:_o,iconSize:ko,colorFocusWarning:Ro,boxShadowFocusWarning:Eo,borderWarning:Wo,borderFocusWarning:Bo,borderHoverWarning:Lo,colorFocusError:Io,boxShadowFocusError:Vo,borderError:No,borderFocusError:Oo,borderHoverError:Ho,clearSize:jo,clearColor:Uo,clearColorHover:qo,clearColorPressed:Ko,iconColor:Xo,iconColorDisabled:Yo,suffixTextColor:Jo,countTextColor:Zo,countTextColorDisabled:Go,iconColorHover:Qo,iconColorPressed:er,loadingColor:or,loadingColorError:rr,loadingColorWarning:tr,[xe("padding",e)]:nr,[xe("fontSize",e)]:ar,[xe("height",e)]:ir}}=c.value,{left:lr,right:sr}=Ar(nr);return{"--n-bezier":r,"--n-count-text-color":Zo,"--n-count-text-color-disabled":Go,"--n-color":a,"--n-font-size":ar,"--n-border-radius":b,"--n-height":ir,"--n-padding-left":lr,"--n-padding-right":sr,"--n-text-color":x,"--n-caret-color":g,"--n-text-decoration-color":L,"--n-border":K,"--n-border-disabled":X,"--n-border-hover":ge,"--n-border-focus":Mo,"--n-placeholder-color":Fo,"--n-placeholder-color-disabled":zo,"--n-icon-size":ko,"--n-line-height-textarea":To,"--n-color-disabled":Ao,"--n-color-focus":$o,"--n-text-color-disabled":Do,"--n-box-shadow-focus":_o,"--n-loading-color":or,"--n-caret-color-warning":B,"--n-color-focus-warning":Ro,"--n-box-shadow-focus-warning":Eo,"--n-border-warning":Wo,"--n-border-focus-warning":Bo,"--n-border-hover-warning":Lo,"--n-loading-color-warning":tr,"--n-caret-color-error":W,"--n-color-focus-error":Io,"--n-box-shadow-focus-error":Vo,"--n-border-error":No,"--n-border-focus-error":Oo,"--n-border-hover-error":Ho,"--n-loading-color-error":rr,"--n-clear-color":Uo,"--n-clear-size":jo,"--n-clear-color-hover":qo,"--n-clear-color-pressed":Ko,"--n-icon-color":Xo,"--n-icon-color-hover":Qo,"--n-icon-color-pressed":er,"--n-icon-color-disabled":Yo,"--n-suffix-text-color":Jo}}),N=v?Mr("input",T(()=>{const{value:e}=O;return e[0]}),ze,o):void 0;return Object.assign(Object.assign({},So),{wrapperElRef:f,inputElRef:s,inputMirrorElRef:l,inputEl2Ref:m,textareaElRef:u,textareaMirrorElRef:h,textareaScrollbarInstRef:M,rtlEnabled:Po,uncontrolledValue:V,mergedValue:F,passwordVisible:q,mergedPlaceholder:j,showPlaceholder1:ue,showPlaceholder2:he,mergedFocus:U,isComposing:A,activated:E,showClearButton:fe,mergedSize:O,mergedDisabled:D,textDecorationStyle:Le,mergedClsPrefix:i,mergedBordered:t,mergedShowPasswordOn:ve,placeholderStyle:Fe,mergedStatus:ce,textAreaScrollContainerWidth:Pe,handleTextAreaScroll:Co,handleCompositionStart:Ge,handleCompositionEnd:Qe,handleInput:oe,handleInputBlur:oo,handleInputFocus:ro,handleWrapperBlur:to,handleWrapperFocus:no,handleMouseEnter:co,handleMouseLeave:uo,handleMouseDown:so,handleChange:ao,handleClick:io,handleClear:lo,handlePasswordToggleClick:ho,handlePasswordToggleMousedown:fo,handleWrapperKeydown:vo,handleTextAreaMirrorResize:wo,getTextareaScrollContainer:()=>u.value,mergedTheme:c,cssVars:v?void 0:ze,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender})},render(){var o,i;const{mergedClsPrefix:t,mergedStatus:v,themeClass:p,type:c,countGraphemes:f,onRender:u}=this,h=this.$slots;return u==null||u(),n("div",{ref:"wrapperElRef",class:[`${t}-input`,p,v&&`${t}-input--${v}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:c==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&c!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},n("div",{class:`${t}-input-wrapper`},ae(h.prefix,l=>l&&n("div",{class:`${t}-input__prefix`},l)),c==="textarea"?n(Fr,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var l,s;const{textAreaScrollContainerWidth:m}=this,y={width:this.autosize&&m&&`${m}px`};return n(zr,null,n("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(l=this.inputProps)===null||l===void 0?void 0:l.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(s=this.inputProps)===null||s===void 0?void 0:s.style,y],onBlur:this.handleInputBlur,onFocus:$=>this.handleInputFocus($,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?n("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,y],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?n(Tr,{onResize:this.handleTextAreaMirrorResize},{default:()=>n("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):n("div",{class:`${t}-input__input`},n("input",Object.assign({type:c==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":c},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(o=this.inputProps)===null||o===void 0?void 0:o.class],style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:l=>this.handleInputFocus(l,0),onInput:l=>this.handleInput(l,0),onChange:l=>this.handleChange(l,0)})),this.showPlaceholder1?n("div",{class:`${t}-input__placeholder`},n("span",null,this.mergedPlaceholder[0])):null,this.autosize?n("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&ae(h.suffix,l=>l||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?n("div",{class:`${t}-input__suffix`},[ae(h["clear-icon-placeholder"],s=>(this.clearable||s)&&n(Se,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>s,icon:()=>{var m,y;return(y=(m=this.$slots)["clear-icon"])===null||y===void 0?void 0:y.call(m)}})),this.internalLoadingBeforeSuffix?null:l,this.loading!==void 0?n(St,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?l:null,this.showCount&&this.type!=="textarea"?n(ke,null,{default:s=>{var m;return(m=h.count)===null||m===void 0?void 0:m.call(h,s)}}):null,this.mergedShowPasswordOn&&this.type==="password"?n("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?G(h["password-visible-icon"],()=>[n(le,{clsPrefix:t},{default:()=>n(bt,null)})]):G(h["password-invisible-icon"],()=>[n(le,{clsPrefix:t},{default:()=>n(yt,null)})])):null]):null)),this.pair?n("span",{class:`${t}-input__separator`},G(h.separator,()=>[this.separator])):null,this.pair?n("div",{class:`${t}-input-wrapper`},n("div",{class:`${t}-input__input`},n("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:l=>this.handleInputFocus(l,1),onInput:l=>this.handleInput(l,1),onChange:l=>this.handleChange(l,1)}),this.showPlaceholder2?n("div",{class:`${t}-input__placeholder`},n("span",null,this.mergedPlaceholder[1])):null),ae(h.suffix,l=>(this.clearable||l)&&n("div",{class:`${t}-input__suffix`},[this.clearable&&n(Se,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var s;return(s=h["clear-icon"])===null||s===void 0?void 0:s.call(h)},placeholder:()=>{var s;return(s=h["clear-icon-placeholder"])===null||s===void 0?void 0:s.call(h)}}),l]))):null,this.mergedBordered?n("div",{class:`${t}-input__border`}):null,this.mergedBordered?n("div",{class:`${t}-input__state-border`}):null,this.showCount&&c==="textarea"?n(ke,null,{default:l=>{var s;const{renderCount:m}=this;return m?m(l):(s=h.count)===null||s===void 0?void 0:s.call(h,l)}}):null)}});export{xt as C,bt as E,St as N,Et as _,vt as d,zt as i,gt as u};
