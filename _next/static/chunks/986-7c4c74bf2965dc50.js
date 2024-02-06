  outline: 2px solid #fe0d45;
  outline-offset: -2px; 
}
`:"/*\n * Hover over selectors to apply outline styles\n *\n */"}function o$({data:e,code:t,withPadding:r,maxWidth:a,centered:i,children:o,dimmed:s,striped:l}){let[c,d]=n.useState(null),_=Object.keys(e.selectors),u=_.map(t=>n.createElement(rY.k,{className:oj.selector,key:t,onMouseEnter:()=>d(t),onMouseLeave:()=>d(null)},n.createElement(eo.x,{mb:2},t),n.createElement(eo.x,{fz:11,c:"dimmed"},e.selectors[t]))),m=c?` classNames={{ ${c}: classes.${c} }}`:"";return n.createElement(n.Fragment,null,n.createElement("style",{dangerouslySetInnerHTML:{__html:oq(c)}}),n.createElement(p,null,n.createElement(el,{withPadding:r,maxWidth:a,centered:i,controls:u,dimmed:s,striped:l,title:"Component Styles API",description:"Hover over selectors to highlight corresponding elements"},n.cloneElement(o,{classNames:_.reduce((e,t)=>(e[t]=t,e),{})})),n.createElement(F,{code:[{fileName:"Demo.module.css",language:"css",code:oq(c)},{fileName:"Demo.tsx",language:"tsx",code:t.replace("{{props}}",m)}]})))}var oW=Object.defineProperty,oQ=Object.getOwnPropertySymbols,oK=Object.prototype.hasOwnProperty,oZ=Object.prototype.propertyIsEnumerable,oX=(e,t,r)=>t in e?oW(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oJ=(e,t)=>{for(var r in t||(t={}))oK.call(t,r)&&oX(e,r,t[r]);if(oQ)for(var r of oQ(t))oZ.call(t,r)&&oX(e,r,t[r]);return e};function o0({data:e}){let{component:t}=e;switch(e.type){case"code":return n.createElement(U,oJ({},e),n.createElement(t,null));case"configurator":return n.createElement(oz,oJ({},e),n.createElement(t,null));case"styles-api":return n.createElement(o$,oJ({},e),n.createElement(t,null));default:return null}}},1746:function(e,t,r){"use strict";r.d(t,{M:function(){return g}});var n=r(7378),a=r(624),i=r(1263);function o(e,t){return(0,i.a)("(prefers-color-scheme: dark)","dark"===e,t)?"dark":"light"}var s=r(8373);function l(){let e=document.createElement("style");return e.innerHTML="*, *::before, *::after {transition: none !important;}",e.setAttribute("data-mantine-disable-transition","true"),document.head.appendChild(e),()=>document.querySelectorAll("[data-mantine-disable-transition]").forEach(e=>e.remove())}function c({keepTransitions:e}={}){let t=(0,n.useRef)(),r=(0,n.useRef)(),a=(0,n.useContext)(s.XD);if(!a)throw Error("[@mantine/core] MantineProvider was not found in tree");let i=n=>{a.setColorScheme(n),t.current=e?()=>{}:l(),window.clearTimeout(r.current),r.current=window.setTimeout(()=>{var e;null==(e=t.current)||e.call(t)},10)},c=o("light",{getInitialValueInEffect:!1}),d="auto"===a.colorScheme?c:a.colorScheme,_=(0,n.useCallback)(()=>i("light"===d?"dark":"light"),[i,d]);return(0,n.useEffect)(()=>()=>{var e;null==(e=t.current)||e.call(t),window.clearTimeout(r.current)},[]),{colorScheme:a.colorScheme,setColorScheme:i,clearColorScheme:()=>{a.clearColorScheme(),t.current=e?()=>{}:l(),window.clearTimeout(r.current),r.current=window.setTimeout(()=>{var e;null==(e=t.current)||e.call(t)},10)},toggleColorScheme:_}}var d=r(4764),_=(0,d.Z)("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),u=(0,d.Z)("moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),p=r(8263),m={icon:"m-83c3d5d1",dark:"m-83c188ce",light:"m-f4e3c6be"};function g(){let{setColorScheme:e}=c(),t=function(e,t={getInitialValueInEffect:!0}){let r=o(e,t),{colorScheme:n}=c();return"auto"===n?r:n}("light",{getInitialValueInEffect:!0});return n.createElement(p.A,{onClick:()=>e("light"===t?"dark":"light"),tooltip:`${"dark"===t?"Light":"Dark"} mode`},n.createElement(_,{className:(0,a.Z)(m.icon,m.light),stroke:1.5}),n.createElement(u,{className:(0,a.Z)(m.icon,m.dark),stroke:1.5}))}},8263:function(e,t,r){"use strict";r.d(t,{A:function(){return E}});var n=r(7378),a=r(624),i=r(6850),o=r(2921),s=r(5841),l={control:"m-18a11a80"},c=Object.defineProperty,d=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))u.call(t,r)&&p(e,r,t[r]);return e},g=(e,t)=>{var r={};for(var n in e)_.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};let E=(0,s.F)(function(e){var{tooltip:t,className:r}=e,s=g(e,["tooltip","className"]);return n.createElement(i.u,{label:t},n.createElement(o.k,m({className:(0,a.Z)(l.control,r),"aria-label":t},s)))})},96:function(e,t,r){"use strict";r.d(t,{q:function(){return K}});var n=r(7378),a=r(6850),i=r(2475),o=r(1746),s=r(892),l=r(4485),c=r(4764),d=(0,c.Z)("text-direction-ltr","IconTextDirectionLtr",[["path",{d:"M5 19h14",key:"svg-0"}],["path",{d:"M17 21l2 -2l-2 -2",key:"svg-1"}],["path",{d:"M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5",key:"svg-2"}],["path",{d:"M14 15v-11",key:"svg-3"}],["path",{d:"M10 15v-11",key:"svg-4"}]]),_=(0,c.Z)("text-direction-rtl","IconTextDirectionRtl",[["path",{d:"M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5",key:"svg-0"}],["path",{d:"M14 15v-11",key:"svg-1"}],["path",{d:"M10 15v-11",key:"svg-2"}],["path",{d:"M5 19h14",key:"svg-3"}],["path",{d:"M7 21l-2 -2l2 -2",key:"svg-4"}]]),u=r(8263);function p(){let{toggleDirection:e,dir:t}=(0,s.gm)();return n.createElement(u.A,{onClick:()=>e(),tooltip:`${"ltr"===t?"RTL":"LTR"} direction`},"rtl"===t?n.createElement(d,{style:{width:(0,l.h)(22),height:(0,l.h)(22)},stroke:1.5}):n.createElement(_,{style:{width:(0,l.h)(22),height:(0,l.h)(22)},stroke:1.5}))}var m=r(5974);function g({link:e}){return n.createElement(u.A,{tooltip:"Source code",component:"a",href:e},n.createElement(m.E,{size:22}))}let E={docsLink:"https://mantine.dev",uiLink:"https://ui.mantine.dev/",discordLink:"https://discord.gg/wbH82zuWMN",twitterLink:"https://twitter.com/mantinedev",npmLink:"https://www.npmjs.com/org/mantine",discordColor:"#5865f2",twitterColor:"#1C8CD8",gitHubLinks:{mantine:"https://github.com/mantinedev/mantine",mantineUi:"https://github.com/mantinedev/ui.mantine.dev",discussions:"https://github.com/mantinedev/mantine/discussions",organization:"https://github.com/mantinedev",releases:"https://github.com/mantinedev/mantine/releases"}};var S={discord:"m-19df8210"},b=Object.defineProperty,f=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))h.call(t,r)&&v(e,r,t[r]);return e},y=(e,t)=>{var r={};for(var n in e)T.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&h.call(e,n)&&(r[n]=e[n]);return r};function C(e){var{size:t,style:r}=e,a=y(e,["size","style"]);return n.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 256 199",style:O({width:(0,l.h)(t),height:(0,l.h)(t)},r)},a),n.createElement("path",{fill:"currentColor",d:"M216.856 16.597A208.5 208.5 0 00164.042 0c-2.275 4.113-4.933 9.646-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.807 207.807 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.13 161.13 0 0079.735 175.3a136.374 136.374 0 01-21.846-10.632 108.542 108.542 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0 1.751 1.46 3.543 2.88 5.355 4.237a136.011 136.011 0 01-21.886 10.653c4.006 8.02 8.638 15.671 13.873 22.848 21.142-6.581 42.646-16.637 64.815-33.213 5.316-56.288-9.081-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18z"}))}function R(){return n.createElement(u.A,{tooltip:"Discord",component:"a",href:E.discordLink,className:S.discord},n.createElement(C,{size:20}))}var N=r(624),I=r(7854),A=r(2921),D=r(4094),w={root:"m-6e98493a",shortcut:"m-602cb89e"},x=Object.defineProperty,M=Object.defineProperties,P=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&U(e,r,t[r]);if(L)for(var r of L(t))F.call(t,r)&&U(e,r,t[r]);return e},G=(e,t)=>M(e,P(t)),Y=(e,t)=>{var r={};for(var n in e)k.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&L)for(var n of L(e))0>t.indexOf(n)&&F.call(e,n)&&(r[n]=e[n]);return r};function H(e){var{className:t}=e,r=Y(e,["className"]);return n.createElement(A.k,G(B({},r),{className:(0,N.Z)(w.root,t)}),n.createElement(i.Z,{gap:"xs"},n.createElement(I.Z,{style:{width:(0,l.h)(15),height:(0,l.h)(15)},stroke:1.5}),n.createElement(D.x,{fz:"sm",c:"dimmed",pr:80},"Search"),n.createElement(D.x,{fw:700,className:w.shortcut},"Ctrl + K")))}var V=Object.defineProperty,z=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&$(e,r,t[r]);if(z)for(var r of z(t))q.call(t,r)&&$(e,r,t[r]);return e},Q=(e,t)=>{var r={};for(var n in e)j.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&z)for(var n of z(e))0>t.indexOf(n)&&q.call(e,n)&&(r[n]=e[n]);return r};function K(e){var{onSearch:t,githubLink:r,withDirectionToggle:s=!0}=e,l=Q(e,["onSearch","githubLink","withDirectionToggle"]);return n.createElement(a.u.Group,{openDelay:600,closeDelay:100},n.createElement(i.Z,W({gap:"xs"},l),n.createElement(H,{onClick:t}),n.createElement(R,null),n.createElement(g,{link:r}),s&&n.createElement(p,null),n.createElement(o.M,null)))}},5974:function(e,t,r){"use strict";r.d(t,{E:function(){return u}});var n=r(7378),a=r(4485),i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e},_=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))0>t.indexOf(n)&&l.call(e,n)&&(r[n]=e[n]);return r};function u(e){var{size:t,style:r}=e,i=_(e,["size","style"]);return n.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:d({width:(0,a.h)(t),height:(0,a.h)(t)},r),fill:"currentColor"},i),n.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))}},1956:function(e,t,r){"use strict";r.d(t,{_:function(){return g}});var n=r(7378),a=r(4485),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&_(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&_(e,r,t[r]);return e},p=(e,t)=>o(e,s(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))0>t.indexOf(n)&&d.call(e,n)&&(r[n]=e[n]);return r};function g(e){var{size:t,style:r}=e,i=m(e,["size","style"]);return n.createElement("svg",p(u({},i),{preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",style:u({width:(0,a.h)(t),height:(0,a.h)(t)},r)}),n.createElement("path",{d:"M0 256V0h256v256z",fill:"#C12127"}),n.createElement("path",{d:"M48 48h160v160h-32V80h-48v128H48z",fill:"#FFF"}))}},9668:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var n=r(7378),a=r(4485),i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e},_=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))0>t.indexOf(n)&&l.call(e,n)&&(r[n]=e[n]);return r};function u(e){var{size:t,style:r}=e,i=_(e,["size","style"]);return n.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",style:d({width:(0,a.h)(t),height:(0,a.h)(t)},r)},i),n.createElement("path",{fill:"#368FB9",d:"M128 0C57.328 0 0 57.328 0 128s57.328 128 128 128 128-57.328 128-128S198.672 0 128 0"}),n.createElement("path",{fill:"#FFF",d:"M203.317 174.06c-7.907 1.878-11.91 3.608-21.695 9.983-15.271 9.884-31.976 14.48-31.976 14.48s-1.383 2.076-5.387 3.015c-6.918 1.68-32.963 3.114-35.335 3.163-6.376.05-10.28-1.63-11.367-4.25-3.311-7.907 4.744-11.367 4.744-11.367s-1.779-1.087-2.817-2.076c-.939-.939-1.927-2.816-2.224-2.125-1.235 3.015-1.878 10.379-5.189 13.69-4.547 4.596-13.146 3.064-18.236.395-5.585-2.965.395-9.933.395-9.933s-3.015 1.779-5.436-1.878c-2.175-3.36-4.2-9.094-3.657-16.16.593-8.056 9.587-15.865 9.587-15.865s-1.581-11.91 3.608-24.117c4.695-11.12 17.347-20.065 17.347-20.065s-10.626-11.762-6.672-22.338c2.57-6.92 3.608-6.87 4.448-7.166 2.965-1.137 5.831-2.373 7.957-4.695 10.625-11.466 24.166-9.292 24.166-9.292s6.425-19.52 12.356-15.715c1.828 1.186 8.401 15.814 8.401 15.814s7.018-4.102 7.809-2.57c4.25 8.254 4.744 24.019 2.866 33.607-3.163 15.814-11.07 24.315-14.233 29.652-.741 1.236 8.5 5.14 14.332 21.3 5.387 14.777.593 27.182 1.433 28.566.148.247.198.346.198.346s6.177.494 18.582-7.166c6.622-4.102 14.48-8.698 23.425-8.797 8.65-.149 9.094 9.983 2.57 11.564zm11.763-7.265c-.89-7.017-6.82-11.86-14.431-11.762-11.367.148-20.905 6.03-27.231 9.934-2.471 1.532-4.596 2.669-6.425 3.509.395-5.733.05-13.245-2.916-21.498-3.608-9.885-8.45-15.963-11.91-19.472 4.003-5.832 9.489-14.332 12.058-27.478 2.224-11.219 1.533-28.664-3.558-38.45-1.038-1.976-2.767-3.41-4.942-4.003-.89-.247-2.57-.741-5.881.198-4.991-10.329-6.721-11.416-8.056-12.306-2.767-1.779-6.029-2.174-9.093-1.038-4.102 1.483-7.61 5.437-10.922 12.454a51.47 51.47 0 00-1.334 3.015c-6.277.445-16.161 2.718-24.513 11.762-1.038 1.137-3.064 1.977-5.19 2.768h.05c-4.349 1.532-6.326 5.09-8.747 11.515-3.361 8.994.098 17.84 3.508 23.574-4.645 4.151-10.823 10.773-14.084 18.532-4.053 9.588-4.498 18.978-4.35 24.068-3.459 3.658-8.796 10.527-9.39 18.237-.79 10.773 3.114 18.088 4.844 20.756.494.791 1.038 1.434 1.63 2.076-.197 1.334-.246 2.768.05 4.25.643 3.46 2.817 6.277 6.128 8.056 6.524 3.46 15.617 4.942 22.635 1.433 2.52 2.669 7.117 5.239 15.469 5.239h.494c2.125 0 29.109-1.433 36.967-3.36 3.509-.841 5.93-2.324 7.512-3.658 5.04-1.582 18.977-6.326 32.123-14.826 9.291-6.03 12.504-7.315 19.423-8.995 6.72-1.63 10.922-7.759 10.082-14.53z"}))}},8378:function(e,t,r){"use strict";r.d(t,{D:function(){return k}});var n=r(7378),a=r(4485),i=r(7040),o=r(7711);function s({color:e,inverted:t}){let r=(0,i.rZ)(),n=(0,o.E)({color:e||"blue",theme:r}),a=n.isThemeColor?r.colors[n.color][5]:e;return{background:t?r.white:a,color:t?a:r.white}}var l=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))_.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>t.indexOf(n)&&_.call(e,n)&&(r[n]=e[n]);return r};function g(e){var{size:t,color:r,variant:i,inverted:o,style:l}=e,c=m(e,["size","color","variant","inverted","style"]);let d=s({color:r,inverted:o});return n.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 163 163",style:p({width:(0,a.h)(t),height:(0,a.h)(t)},l)},c),n.createElement("path",{fill:d.background,d:"M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"}),n.createElement("path",{fill:d.color,d:"M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.145 6.145 0 00-1.616 1.786 6.21 6.21 0 00-.694 4.693 6.21 6.21 0 001.028 2.186 6.151 6.151 0 006.457 2.319 6.154 6.154 0 002.177-1.035 50.083 50.083 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.165 49.165 0 004.071-19.69 49.167 49.167 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.112 50.112 0 00-7.952-7.397 6.15 6.15 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"}),n.createElement("path",{fill:d.color,fillRule:"evenodd",d:"M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z",clipRule:"evenodd"}))}var E=r(624),S={logo:"m-2075ec07",mantineUILogo:"m-36ceca49"},b=Object.defineProperty,f=Object.defineProperties,T=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&y(e,r,t[r]);if(h)for(var r of h(t))O.call(t,r)&&y(e,r,t[r]);return e},R=(e,t)=>f(e,T(t)),N=(e,t)=>{var r={};for(var n in e)v.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>t.indexOf(n)&&O.call(e,n)&&(r[n]=e[n]);return r};function I(e){var{size:t,color:r,variant:i,inverted:o,style:l,className:c}=e,d=N(e,["size","color","variant","inverted","style","className"]);let _=s({color:r,inverted:o});return n.createElement("svg",R(C({},d),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 623 163",style:C({height:(0,a.h)(t)},l),className:(0,E.Z)(S.logo,{[S.mantineUILogo]:"ui.mantine.dev"===i},c)}),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{style:{fill:"ui.mantine.dev"===i?"var(--mantine-logo-fill)":void 0},fill:_.background,fillRule:"nonzero",d:"M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"}),n.createElement("g",{fill:_.color,style:{fill:"ui.mantine.dev"===i?"var(--mantine-logo-color)":void 0}},n.createElement("path",{fillRule:"nonzero",d:"M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.142 6.142 0 00-1.616 1.786 6.211 6.211 0 00-.694 4.693c.197.79.546 1.533 1.028 2.186a6.154 6.154 0 008.634 1.284 50.112 50.112 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.166 49.166 0 004.071-19.69 49.166 49.166 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.11 50.11 0 00-7.952-7.397 6.149 6.149 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"}),n.createElement("path",{d:"M56.236 79.391a9.342 9.342 0 01.632-3.608 9.261 9.261 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.144 9.144 0 012.995 2.063 9.261 9.261 0 011.967 3.077 9.34 9.34 0 01.63 3.608 9.299 9.299 0 01-2.755 6.395 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.299 9.299 0 01-2.755-6.395z"})),n.createElement("path",{fill:"currentColor",fillRule:"nonzero",d:"M291.736 126.644c1.984 0 3.823-.434 5.518-1.302 1.695-.868 2.542-2.129 2.542-3.782v-77.5c0-2.976-.827-5.063-2.48-6.262-1.653-1.199-3.513-1.798-5.58-1.798-1.901 0-3.555.207-4.96.62-1.405.413-2.666 1.24-3.782 2.48s-2.418 3.059-3.906 5.456l-15.252 27.776-15.128-27.776c-1.323-2.397-2.583-4.216-3.782-5.456-1.199-1.24-2.48-2.067-3.844-2.48-1.364-.413-3.038-.62-5.022-.62-1.984 0-3.823.6-5.518 1.798-1.695 1.199-2.542 3.286-2.542 6.262v77.5c0 1.653.847 2.914 2.542 3.782 1.695.868 3.534 1.302 5.518 1.302 2.067 0 3.927-.434 5.58-1.302 1.653-.868 2.48-2.129 2.48-3.782V67.248l14.26 26.784c.744 1.24 1.591 2.087 2.542 2.542.95.455 1.88.682 2.79.682.992 0 1.984-.248 2.976-.744s1.86-1.323 2.604-2.48l14.384-25.792v53.32c0 1.653.847 2.914 2.542 3.782 1.695.868 3.534 1.302 5.518 1.302zm34.375 1.116c4.298 0 7.956-.992 10.974-2.976 3.017-1.984 5.642-4.257 7.874-6.82v3.596c0 1.405.682 2.604 2.046 3.596 1.364.992 3.08 1.488 5.146 1.488 2.232 0 4.092-.496 5.58-1.488 1.488-.992 2.232-2.19 2.232-3.596V91.18c0-4.216-.889-8.143-2.666-11.78-1.778-3.637-4.609-6.613-8.494-8.928-3.886-2.315-9.052-3.472-15.5-3.472-2.894 0-5.87.372-8.928 1.116-3.059.744-5.642 1.798-7.75 3.162-2.108 1.364-3.162 2.914-3.162 4.65 0 1.819.475 3.596 1.426 5.332.95 1.736 2.294 2.604 4.03 2.604 1.074 0 2.066-.33 2.976-.992.91-.661 2.211-1.302 3.906-1.922 1.694-.62 4.112-.93 7.254-.93 2.81 0 4.98.579 6.51 1.736 1.53 1.157 2.645 2.604 3.348 4.34a14.092 14.092 0 011.054 5.332v1.612h-5.084c-5.704 0-10.726.537-15.066 1.612-4.34 1.075-7.73 2.935-10.168 5.58-2.439 2.645-3.658 6.324-3.658 11.036 0 5.621 1.591 9.775 4.774 12.462 3.182 2.687 6.964 4.03 11.346 4.03zm6.448-11.904c-1.819 0-3.369-.537-4.65-1.612-1.282-1.075-1.922-2.77-1.922-5.084 0-2.315.764-4.03 2.294-5.146 1.53-1.116 3.534-1.84 6.014-2.17 2.48-.33 5.084-.496 7.812-.496h1.86v2.604c0 1.984-.6 3.885-1.798 5.704-1.199 1.819-2.666 3.307-4.402 4.464-1.736 1.157-3.472 1.736-5.208 1.736zm84.169 10.788c2.067 0 3.927-.434 5.58-1.302 1.653-.868 2.48-2.129 2.48-3.782V92.172c0-4.63-.971-8.845-2.914-12.648-1.943-3.803-4.526-6.84-7.75-9.114C410.9 68.137 407.345 67 403.46 67c-4.133 0-7.626.971-10.478 2.914-2.852 1.943-4.898 4.113-6.138 6.51v-3.72c0-1.488-.682-2.687-2.046-3.596-1.364-.91-3.038-1.364-5.022-1.364-2.315 0-4.216.455-5.704 1.364-1.488.91-2.232 2.108-2.232 3.596v48.856c0 1.24.744 2.397 2.232 3.472 1.488 1.075 3.39 1.612 5.704 1.612 2.232 0 4.133-.537 5.704-1.612 1.57-1.075 2.356-2.232 2.356-3.472V92.172c0-2.315.496-4.299 1.488-5.952.992-1.653 2.273-2.935 3.844-3.844 1.57-.91 3.183-1.364 4.836-1.364 1.984 0 3.803.558 5.456 1.674 1.653 1.116 2.955 2.5 3.906 4.154a10.52 10.52 0 011.426 5.332v29.388c0 1.653.868 2.914 2.604 3.782 1.736.868 3.513 1.302 5.332 1.302zm47.432 0c2.315 0 4.03-.703 5.146-2.108 1.116-1.405 1.674-2.976 1.674-4.712 0-1.653-.558-3.183-1.674-4.588-1.116-1.405-2.831-2.108-5.146-2.108h-4.836c-2.563 0-4.36-.496-5.394-1.488-1.033-.992-1.55-2.687-1.55-5.084V79.4h14.632c1.323 0 2.335-.6 3.038-1.798.703-1.199 1.054-2.542 1.054-4.03 0-1.488-.351-2.831-1.054-4.03-.703-1.199-1.715-1.798-3.038-1.798H452.38V46.416c0-1.488-.847-2.687-2.542-3.596-1.695-.91-3.534-1.364-5.518-1.364-1.819 0-3.596.455-5.332 1.364-1.736.91-2.604 2.108-2.604 3.596v60.14c0 6.944 1.963 12.028 5.89 15.252 3.927 3.224 9.61 4.836 17.05 4.836h4.836zM487.232 54.6c2.397 0 4.443-.806 6.138-2.418 1.695-1.612 2.542-3.41 2.542-5.394 0-2.15-.847-3.989-2.542-5.518-1.695-1.53-3.74-2.294-6.138-2.294-2.397 0-4.464.765-6.2 2.294-1.736 1.53-2.604 3.369-2.604 5.518 0 1.984.868 3.782 2.604 5.394 1.736 1.612 3.803 2.418 6.2 2.418zm0 72.044c2.232 0 4.133-.537 5.704-1.612 1.57-1.075 2.356-2.232 2.356-3.472V72.704c0-1.488-.785-2.687-2.356-3.596-1.57-.91-3.472-1.364-5.704-1.364-2.315 0-4.216.455-5.704 1.364-1.488.91-2.232 2.108-2.232 3.596v48.856c0 1.24.744 2.397 2.232 3.472 1.488 1.075 3.39 1.612 5.704 1.612zm65.247 0c2.066 0 3.926-.434 5.58-1.302 1.653-.868 2.48-2.129 2.48-3.782V92.172c0-4.63-.972-8.845-2.914-12.648-1.943-3.803-4.526-6.84-7.75-9.114-3.224-2.273-6.779-3.41-10.664-3.41-4.134 0-7.626.971-10.478 2.914-2.852 1.943-4.898 4.113-6.138 6.51v-3.72c0-1.488-.682-2.687-2.046-3.596-1.364-.91-3.038-1.364-5.022-1.364-2.315 0-4.216.455-5.704 1.364-1.488.91-2.232 2.108-2.232 3.596v48.856c0 1.24.744 2.397 2.232 3.472 1.488 1.075 3.39 1.612 5.704 1.612 2.232 0 4.133-.537 5.704-1.612 1.57-1.075 2.356-2.232 2.356-3.472V92.172c0-2.315.496-4.299 1.488-5.952.992-1.653 2.273-2.935 3.844-3.844 1.57-.91 3.182-1.364 4.836-1.364 1.984 0 3.802.558 5.456 1.674 1.653 1.116 2.955 2.5 3.906 4.154a10.52 10.52 0 011.426 5.332v29.388c0 1.653.868 2.914 2.604 3.782 1.736.868 3.513 1.302 5.332 1.302zm47.68 1.116c4.464 0 8.328-.558 11.594-1.674 3.265-1.116 5.786-2.48 7.564-4.092 1.777-1.612 2.666-3.12 2.666-4.526 0-.827-.248-1.798-.744-2.914a8.641 8.641 0 00-2.108-2.914c-.91-.827-1.984-1.24-3.224-1.24-1.158 0-2.398.372-3.72 1.116-1.323.744-2.894 1.53-4.712 2.356-1.819.827-4.092 1.24-6.82 1.24-4.299 0-7.792-1.095-10.478-3.286-2.687-2.19-4.03-5.063-4.03-8.618v-1.86h25.172c1.901 0 3.74-.186 5.518-.558 1.777-.372 3.244-1.323 4.402-2.852 1.157-1.53 1.736-4.071 1.736-7.626 0-4.63-1.199-8.68-3.596-12.152-2.398-3.472-5.518-6.2-9.362-8.184-3.844-1.984-8.08-2.976-12.71-2.976-5.043 0-9.61 1.137-13.702 3.41-4.092 2.273-7.358 5.29-9.796 9.052-2.439 3.761-3.658 7.874-3.658 12.338v10.54c0 5.043 1.281 9.486 3.844 13.33 2.562 3.844 6.096 6.82 10.602 8.928 4.505 2.108 9.692 3.162 15.562 3.162zm4.092-35.836h-18.104v-3.472c0-1.984.516-3.7 1.55-5.146 1.033-1.447 2.376-2.563 4.03-3.348 1.653-.785 3.43-1.178 5.332-1.178 1.984 0 3.802.413 5.456 1.24 1.653.827 2.976 1.984 3.968 3.472s1.488 3.183 1.488 5.084c0 1.323-.269 2.211-.806 2.666-.538.455-1.509.682-2.914.682z"})))}var A=Object.defineProperty,D=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&M(e,r,t[r]);if(D)for(var r of D(t))x.call(t,r)&&M(e,r,t[r]);return e},L=(e,t)=>{var r={};for(var n in e)w.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&D)for(var n of D(e))0>t.indexOf(n)&&x.call(e,n)&&(r[n]=e[n]);return r};function k(e){var{type:t}=e,r=L(e,["type"]);return"mark"===t?n.createElement(g,P({},r)):n.createElement(I,P({},r))}},6145:function(e,t,r){"use strict";r.d(t,{l:function(){return a}});var n=r(7378);function a(e,t){let r=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{r.current=!1},[]),(0,n.useEffect)(()=>{if(r.current)return e();r.current=!0},t)}},6184:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(7378),a=r(213);let i=n["useId".toString()]||(()=>void 0);var o=r(1883);function s(e){let t=function(){let e=i();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[r,s]=(0,n.useState)(t);return((0,a.Y)(()=>{s((0,o.k)())},[]),"string"==typeof e)?e:"undefined"==typeof window?t:r}},8395:function(e,t,r){"use strict";r.d(t,{_:function(){return o}});var n=r(7378),a=r(8360);function i(e){try{return e&&JSON.parse(e)}catch(t){return e}}function o(e){return(function(e,t){let r="localStorage"===e?"mantine-local-storage":"mantine-session-storage",{getItem:o,setItem:s,removeItem:l}={getItem:t=>{try{return window[e].getItem(t)}catch(e){return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(t,r)=>{try{window[e].setItem(t,r)}catch(e){console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:t=>{try{window[e].removeItem(t)}catch(e){console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}};return function({key:c,defaultValue:d,getInitialValueInEffect:_=!0,deserialize:u=i,serialize:p=e=>(function(e,t){try{return JSON.stringify(e)}catch(e){throw Error(`@mantine/hooks ${t}: Failed to serialize the value`)}})(e,t)}){let m=(0,n.useCallback)(t=>{let r;try{r="undefined"==typeof window||!(e in window)||null===window[e]||!!t}catch(e){r=!0}if(r)return d;let n=o(c);return null!==n?u(n):d},[c,d]),[g,E]=(0,n.useState)(m(_)),S=(0,n.useCallback)(e=>{e instanceof Function?E(t=>{let n=e(t);return s(c,p(n)),window.dispatchEvent(new CustomEvent(r,{detail:{key:c,value:e(t)}})),n}):(s(c,p(e)),window.dispatchEvent(new CustomEvent(r,{detail:{key:c,value:e}})),E(e))},[c]),b=(0,n.useCallback)(()=>{l(c),window.dispatchEvent(new CustomEvent(r,{detail:{key:c,value:d}}))},[]);return(0,a.s)("storage",t=>{var r;t.storageArea===window[e]&&t.key===c&&E(u(null!=(r=t.newValue)?r:void 0))}),(0,a.s)(r,e=>{e.detail.key===c&&E(e.detail.value)}),(0,n.useEffect)(()=>{void 0!==d&&void 0===g&&S(d)},[d,g,S]),(0,n.useEffect)(()=>{_&&E(m())},[]),[void 0===g?d:g,S,b]}})("localStorage","use-local-storage")(e)}},1263:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var n=r(7378);function a(e,t,{getInitialValueInEffect:r}={getInitialValueInEffect:!0}){let[a,i]=(0,n.useState)(r?t:"boolean"==typeof t?t:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(e).matches),o=(0,n.useRef)();return(0,n.useEffect)(()=>{if("matchMedia"in window)return o.current=window.matchMedia(e),i(o.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(o.current,e=>i(e.matches))},[e]),a}},183:function(e,t,r){"use strict";r.d(t,{Yx:function(){return i},kR:function(){return a}});var n=r(7378);function a(e,t){"function"==typeof e?e(t):"object"==typeof e&&null!==e&&"current"in e&&(e.current=t)}function i(...e){return(0,n.useCallback)(function(...e){return t=>{e.forEach(e=>a(e,t))}}(...e),e)}},5006:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var n=r(7378);function a({value:e,defaultValue:t,finalValue:r,onChange:a=()=>{}}){let[i,o]=(0,n.useState)(void 0!==t?t:r);return void 0!==e?[e,a,!0]:[i,e=>{o(e),null==a||a(e)},!1]}},8360:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var n=r(7378);function a(e,t,r){(0,n.useEffect)(()=>(window.addEventListener(e,t,r),()=>window.removeEventListener(e,t,r)),[e,t])}},1883:function(e,t,r){"use strict";function n(){return`mantine-${Math.random().toString(36).slice(2,11)}`}r.d(t,{k:function(){return n}})},624:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n}},2688:function(e,t,r){"use strict";var n=r(6057);t.Z=n}}]);