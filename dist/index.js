"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./dark-_ATO-_Cu.cjs"),a=require("react/jsx-runtime"),f={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",10:"40px",12:"48px",16:"64px"};function p(n){return Object.entries(n)}function l(n,t){return p(t).map(([r,o])=>`  --yc-${n}-${r}: ${o};`).join(`
`)}function c(n,t){return p(t).map(([r,o])=>`  --yc-${n}-${r}: ${o};`).join(`
`)}function u(n){return p(n).map(([t,r])=>`  --yc-${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${r};`).join(`
`)}function x(){return`:root {
  /* Brand colors (pink) */
${l("color-brand",e.brand)}

  /* Secondary colors (purple) */
${l("color-secondary",e.secondary)}

  /* Neutral colors */
${l("color-neutral",e.neutral)}

  /* Semantic colors */
${l("color",e.semantic)}

  /* Phase colors */
${l("color-phase",e.phase)}

  /* Typography */
${c("font",e.fontFamily)}
${c("font-size",e.fontSize)}
${c("font-weight",e.fontWeight)}
${c("line-height",e.lineHeight)}

  /* Spacing */
${c("space",f)}

  /* Border radius */
${c("radius",e.borderRadius)}

  /* Shadows */
${c("shadow",e.shadow)}

  /* Semantic theme (light) */
${u(e.lightTheme)}
}

[data-theme="dark"] {
  /* Shadows (dark) */
${c("shadow",e.shadowDark)}

  /* Semantic theme (dark) */
${u(e.darkTheme)}
}
`}const S={colors:{brand:{DEFAULT:e.brand[700],light:e.brand[500],lighter:e.brand[400],dark:e.brand[800],darker:e.brand[900],50:e.brand[50],100:e.brand[100],200:e.brand[200],300:e.brand[300],400:e.brand[400],500:e.brand[500],600:e.brand[600],700:e.brand[700],800:e.brand[800],900:e.brand[900]},secondary:{DEFAULT:e.secondary[700],light:e.secondary[500],lighter:e.secondary[400],dark:e.secondary[800],darker:e.secondary[900],50:e.secondary[50],100:e.secondary[100],200:e.secondary[200],300:e.secondary[300],400:e.secondary[400],500:e.secondary[500],600:e.secondary[600],700:e.secondary[700],800:e.secondary[800],900:e.secondary[900]},neutral:{...e.neutral},success:e.semantic.success,warning:e.semantic.warning,error:e.semantic.error,info:e.semantic.info,phase:{...e.phase}},fontFamily:{sans:e.fontFamily.sans,mono:e.fontFamily.mono}},v=({name:n,size:t=20,label:r,decorative:o=!1,className:i,style:d})=>{const s=o||!r;return a.jsx("span",{className:`material-symbols-rounded ${i||""}`,style:{fontSize:t,lineHeight:1,...d},"aria-hidden":s,"aria-label":s?void 0:r,role:!s&&r?"img":void 0,children:n})},j="M244.009 190.732C279.836 179.091 318.428 179.091 354.255 190.732C390.082 202.372 421.305 225.057 443.447 255.533C465.589 286.009 477.514 322.713 477.514 360.384C477.514 398.054 465.589 434.757 443.447 465.233C421.305 495.71 390.082 518.394 354.255 530.035C318.428 541.675 279.836 541.675 244.009 530.035C208.182 518.394 176.96 495.709 154.818 465.233C132.676 434.757 120.75 398.054 120.75 360.384C120.75 322.713 132.676 286.009 154.818 255.533C176.96 225.057 208.182 202.372 244.009 190.732Z",k="M505.485 271.745C482.848 219.489 441.25 177.358 389.367 154.03H505.485V271.745Z",T=({initials:n,bgColor:t=e.brand[700],size:r=28,src:o,alt:i="",className:d})=>{const s=r*1.1,h=Math.round(r*.38);return a.jsxs("span",{className:d,style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",width:s,height:s,flexShrink:0},role:"img","aria-label":i||n,children:[a.jsxs("svg",{width:s,height:s,viewBox:"0 0 651 661",fill:"none",style:{position:"absolute",inset:0},"aria-hidden":!0,children:[a.jsx("path",{d:j,fill:t}),a.jsx("path",{d:k,fill:e.secondary[700]})]}),o?a.jsx("img",{src:o,alt:i,style:{position:"absolute",left:"42%",top:"52%",transform:"translate(-50%, -50%)",width:r*.64,height:r*.64,borderRadius:"50%",objectFit:"cover"}}):a.jsx("span",{style:{position:"absolute",left:"42%",top:"52%",transform:"translate(-50%, -50%)",color:"#fff",fontSize:h,fontWeight:600,lineHeight:1,pointerEvents:"none"},children:n})]})},H=({message:n,type:t="polite",atomic:r=!0})=>a.jsx("div",{"aria-live":t,"aria-atomic":r,role:"status",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:n}),A=({children:n,as:t="span",htmlFor:r})=>a.jsx(t,{htmlFor:r,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:n}),R="M244.009 190.886C279.836 179.245 318.428 179.245 354.255 190.886C390.082 202.527 421.305 225.211 443.447 255.687C465.589 286.163 477.514 322.868 477.514 360.538C477.514 398.208 465.589 434.912 443.447 465.388C421.305 495.864 390.082 518.548 354.255 530.189C318.428 541.83 279.836 541.83 244.009 530.189C208.182 518.548 176.96 495.864 154.818 465.388C132.676 434.912 120.75 398.209 120.75 360.538C120.75 322.867 132.676 286.163 154.818 255.687C176.96 225.211 208.182 202.527 244.009 190.886ZM309.962 190.413C302.923 188.126 295.341 188.126 288.302 190.413C281.263 192.7 275.129 197.157 270.778 203.145C266.428 209.132 264.085 216.344 264.085 223.745C264.085 231.146 266.428 238.358 270.778 244.345C275.129 250.333 281.263 254.789 288.302 257.076C295.341 259.364 302.923 259.364 309.962 257.076C317.001 254.789 323.135 250.333 327.486 244.345C331.836 238.358 334.179 231.146 334.179 223.745C334.179 216.344 331.836 209.132 327.486 203.145C323.135 197.157 317.001 192.7 309.962 190.413Z",F="M505.485 271.899C482.848 219.643 441.25 177.513 389.367 154.184H505.485V271.899Z",g=650,m=661,I=({pointerPosition:n="top-right",size:t=40,resolved:r=!1,className:o})=>{const i=n==="top-left"||n==="bottom-left",d=n==="bottom-right"||n==="bottom-left",s=i?-1:1,h=d?-1:1,y=i?-g:0,b=d?-m:0,C=i||d?`scale(${s},${h}) translate(${y},${b})`:void 0,w=r?e.semantic.success:e.brand[700],$=r?e.semantic.success:e.secondary[700];return a.jsx("svg",{width:t,height:t,viewBox:`0 0 ${g} ${m}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"presentation","aria-hidden":!0,children:a.jsxs("g",{transform:C,children:[a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:R,fill:w}),a.jsx("path",{d:F,fill:$})]})})};exports.borderRadius=e.borderRadius;exports.borderWidth=e.borderWidth;exports.brand=e.brand;exports.darkTheme=e.darkTheme;exports.fontFamily=e.fontFamily;exports.fontSize=e.fontSize;exports.fontWeight=e.fontWeight;exports.letterSpacing=e.letterSpacing;exports.lightTheme=e.lightTheme;exports.lineHeight=e.lineHeight;exports.neutral=e.neutral;exports.phase=e.phase;exports.secondary=e.secondary;exports.semantic=e.semantic;exports.shadow=e.shadow;exports.shadowDark=e.shadowDark;exports.AccessibleIcon=v;exports.BrandedAvatar=T;exports.LiveRegion=H;exports.VisuallyHidden=A;exports.YocoolabMarkerIcon=I;exports.generateCSS=x;exports.spacing=f;exports.tailwindTheme=S;
