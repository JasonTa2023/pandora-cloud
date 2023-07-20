"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{50744:function(e,n,r){var t=r(35250),i=r(55344),a=r.n(i);r(70079);var o=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:n})};n.Z=a()(function(){return Promise.resolve(o)},{ssr:!1})},63857:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(4337),i=r(35250),a=r(95182),o=r.n(a),s=r(1454),l=r(21389),c=r(88327);function d(){var e=(0,t._)(["text-xs flex items-center justify-center gap-1"]);return d=function(){return e},e}function u(){var e=(0,t._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);return u=function(){return e},e}function f(){var e=(0,t._)(["flex-grow flex-shrink-0"]);return f=function(){return e},e}function v(e){var n=e.currentPage,r=e.onChangeIndex,t=e.length,a=e.className,l=function(e){r(o()(n+e,0,t-1))};return(0,i.jsxs)(h,{className:a,children:[(0,i.jsx)(x,{onClick:function(){return l(-1)},disabled:0===n,children:(0,i.jsx)(c.ZP,{size:"xsmall",icon:s.YFh})}),(0,i.jsx)(m,{children:"".concat(n+1," / ").concat(t)}),(0,i.jsx)(x,{onClick:function(){return l(1)},disabled:n===t-1,children:(0,i.jsx)(c.ZP,{size:"xsmall",icon:s.Tfp})})]})}var h=l.Z.div(d()),x=l.Z.button(u()),m=l.Z.span(f())},82277:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(4337),i=r(35250),a=r(70079),o=r(21389),s=r(46020),l=r(33669),c=r(50744),d=r(13090);function u(){var e=(0,t._)(["overflow-hidden w-full h-full relative flex z-0"]);return u=function(){return e},e}function f(){var e=(0,t._)(["relative h-full w-full transition-width flex flex-col overflow-auto items-stretch"]);return f=function(){return e},e}function v(e){var n=e.children,r=e.showNavigation,t=e.renderTitle,o=e.renderMobileHeaderRightContent,u=e.renderSidebar,f=(0,l.w$)(),m=[],g=null;return a.Children.forEach(n,function(e){a.isValidElement(e)&&(e.type===v.Sidebars?g=e:m.push(e))}),(0,i.jsxs)(h,{children:[f&&r&&(0,i.jsx)(c.Z,{children:(0,i.jsx)(d.l6,{children:u})}),(0,i.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 overflow-hidden",children:[(0,i.jsxs)("div",{className:"flex h-full max-w-full flex-1 flex-col",children:[!f&&r&&(0,i.jsx)(c.Z,{children:(0,i.jsx)(d.Vs,{onClickOpenSidebar:function(){return s.vm.toggleActiveSidebar("mobile-nav")},renderTitle:t,renderSidebar:u,renderRightContent:o})}),(0,i.jsx)(x,{className:"flex-1",children:m})]}),g]})]})}var h=o.Z.div(u()),x=o.Z.main(f());v.Sidebars=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:n})}},13090:function(e,n,r){r.d(n,{H:function(){return N},MP:function(){return w},Vs:function(){return S},js:function(){return y},l6:function(){return M}});var t=r(39324),i=r(70216),a=r(35250),o=r(98359),s=r(20525),l=r(32148),c=r(97296),d=r(70737),u=r(70079),f=r(1454),v=r(70671),h=r(32004),x=r(94968),m=r(46020),g=r(33669),b=r(45635),p=r(88327),k=r(15329),j=r(92160);function w(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,a.jsx)(k.zV,(0,t._)({onClick:n,className:"flex-shrink-0 flex-grow"},r))}function y(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,a.jsx)("button",(0,t._)({type:"button",className:"px-3",onClick:n},r))}function N(){var e=(0,v.Z)();return(0,g.w$)()?(0,a.jsx)(b.u,{side:"right",label:e.formatMessage(_.closeSidebar),children:(0,a.jsxs)(k.zV,{onClick:m.vm.toggleDesktopNavCollapsed,className:"w-11 flex-shrink-0 items-center justify-center",children:[(0,a.jsx)(p.ZP,{icon:f.iYc}),(0,a.jsx)(l.f,{children:(0,a.jsx)(h.Z,(0,t._)({},_.closeSidebar))})]})}):null}var C=function(e){var n=e.onClose,r=e.sidebarOpen,i=e.children;return(0,a.jsx)(o.u.Root,{show:r,as:u.Fragment,children:(0,a.jsxs)(s.V,{as:"div",className:"relative",onClose:n,children:[(0,a.jsx)(o.u.Child,{as:u.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,a.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,a.jsx)(o.u.Child,{as:u.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,a.jsxs)(s.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",children:[(0,a.jsx)(o.u.Child,{as:u.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-2",children:(0,a.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:n,children:[(0,a.jsx)("span",{className:"sr-only",children:(0,a.jsx)(h.Z,(0,t._)({},_.closeSidebar))}),(0,a.jsx)(p.ZP,{icon:f.q5L,size:"medium",className:"text-white","aria-hidden":"true"})]})})}),i]})}),(0,a.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},S=function(e){var n=e.onClickOpenSidebar,r=e.renderTitle,i=e.renderSidebar,o=e.renderRightContent,s=(0,m.tN)(function(e){return e.activeSidebar});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",children:[(0,a.jsxs)("button",{type:"button",className:"-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",onClick:n,children:[(0,a.jsx)("span",{className:"sr-only",children:(0,a.jsx)(h.Z,(0,t._)({},_.openSidebar))}),(0,a.jsx)(p.ZP,{icon:f.cur,"aria-hidden":"true",size:"medium"})]}),(0,a.jsx)("h1",{className:"flex-1 text-center text-base font-normal",children:r}),o]}),(0,a.jsx)(C,{onClose:function(){m.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===s,children:i})]})};function M(e){var n=e.children,r=(0,v.Z)(),t=(0,u.useRef)(null),i=(0,m.tN)(function(e){return e.isDesktopNavCollapsed});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.E.div,{className:"dark flex-shrink-0 overflow-x-hidden bg-gray-900",ref:t,initial:!1,animate:{width:i?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:function(){t.current&&(t.current.style.visibility="visible")},onAnimationComplete:function(){t.current&&i&&(t.current.style.visibility="hidden")},children:(0,a.jsx)("div",{className:"h-full w-[260px]",children:(0,a.jsx)("div",{className:"flex h-full min-h-0 flex-col ",children:n})})}),(0,a.jsx)(d.M,{initial:!1,children:i&&(0,a.jsx)(c.E.div,{className:"absolute left-2 top-2 z-10 hidden md:inline-block",initial:{opacity:0},animate:{opacity:1,transition:{duration:.165,ease:"easeIn"}},children:(0,a.jsx)(b.u,{side:"right",label:r.formatMessage(_.openSidebar),children:(0,a.jsx)(j.O,{onClick:m.vm.toggleDesktopNavCollapsed,"aria-label":r.formatMessage(_.openSidebar),children:(0,a.jsx)(p.ZP,{className:"text-black dark:text-white",icon:f.iYc})})})})})]})}var _=(0,x.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar",description:"Open sidebar button label"}})},92160:function(e,n,r){r.d(n,{O:function(){return b},Z:function(){return g}});var t=r(4337),i=r(35250),a=r(70079),o=r(1454),s=r(94968),l=r(70671),c=r(21389),d=r(46020),u=r(78931),f=r(32542),v=r(45635),h=r(88327);function x(){var e=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return x=function(){return e},e}var m=(0,s.vU)({openDebug:{defaultMessage:"Open debug sidebar",id:"Stage.openDebug",description:"Open debug sidebar button tooltip"}});function g(){var e=(0,a.useContext)(f.gB),n=(0,l.Z)(),r=(0,d.tN)(function(e){return"debug"===e.activeSidebar}),t=(0,u.hz)().has("debug")&&!r;return e?null:t?(0,i.jsx)("div",{className:"absolute right-4 top-2 z-10 hidden md:block",children:(0,i.jsx)(v.u,{side:"left",label:n.formatMessage(m.openDebug),children:(0,i.jsx)(b,{onClick:function(){return d.vm.toggleActiveSidebar("debug")},"aria-label":n.formatMessage(m.openDebug),children:(0,i.jsx)(h.ZP,{className:"text-black dark:text-white",icon:o.cDN})})})}):null}var b=c.Z.button(x())},52696:function(e,n,r){r.d(n,{Ap:function(){return d},Ix:function(){return f},_O:function(){return v},bE:function(){return h},qH:function(){return u}});var t=r(96237),i=r(70079),a=r(70671),o=r(94968),s=r(62509),l=r(75641),c=r(78931);function d(){var e=(0,a.Z)(),n=e.formatMessage(x.adminRoleName),r=e.formatMessage(x.standardRoleName);return(0,i.useMemo)(function(){var e;return e={},(0,t._)(e,l.r3.ADMIN,n),(0,t._)(e,l.r3.STANDARD,r),e},[n,r])}function u(e){var n=(0,a.Z)();return e?"personal"===e.structure?n.formatMessage(x.personalPlanName):n.formatMessage(x.businessPlanName):n.formatMessage(x.personalPlanName)}function f(e){var n,r,t,i,o,l,d=(0,s.kP)().session,u=(0,c.ec)(function(e){return e.currentWorkspace}),f=(0,c.ec)(c.F_.isPersonalWorkspace),v=(0,c.$T)(),h=(r=(0,a.Z)(),null!==(n=null==u?void 0:u.name)&&void 0!==n?n:r.formatMessage(x.defaultWorkspaceTitle)),m=null!==(l=null!==(o=null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.name)&&void 0!==o?o:null==d?void 0:null===(i=d.user)||void 0===i?void 0:i.email)&&void 0!==l?l:null;return e&&!v?"personal"===e.structure?m:e.name:u?f?m:h:m}function v(){return(0,c.ec)(function(e){return e.workspaces})}function h(e){var n=v().find(function(n){return n.id===e});return!!n&&n.role===l.r3.ADMIN}var x=(0,o.vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal",description:"label for personal tier account"},businessPlanName:{id:"useWorkspaces.businessPlanName",defaultMessage:"Business",description:"label for business tier account"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin",description:"Role name for an admin user"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member",description:"Role name for a standard user"}})},92720:function(e,n,r){var t=r(39324),i=r(71209),a=r(70216),o=r(35250),s=r(47428),l=r(70079),c=r(89705),d={Root:s.fC,Trigger:function(e){return(0,o.jsx)(c.J7,(0,t._)({$as:s.xz},e))},Portal:s.Uv,Content:function(e){return(0,o.jsx)(c.ay,(0,t._)({$as:s.VY,sideOffset:4,align:"start"},e))},Item:l.forwardRef(function(e,n){var r=e.children,l=e.onSelect,d=(0,a._)(e,["children","onSelect"]);return(0,o.jsx)(c.mS,(0,i._)((0,t._)({$as:s.ck,ref:n,onSelect:l},d),{children:r}))})};n.Z=d},10580:function(e,n,r){var t=r(39324),i=r(71209),a=r(70216),o=r(35250),s=r(48349),l=r(70079),c=r(1454),d=r(88327),u=r(89705),f={Root:s.fC,Trigger:function(e){return(0,o.jsx)(u.J7,(0,t._)({$as:s.xz},e))},Value:s.B4,Icon:function(){return(0,o.jsx)(s.JO,{children:(0,o.jsx)(d.ZP,{icon:c.bTu,size:"small"})})},Portal:s.h_,Content:function(e){var n=e.children,r=(0,a._)(e,["children"]);return(0,o.jsxs)(u.ay,(0,i._)((0,t._)({$as:s.VY,side:"bottom",sideOffset:4,position:"popper"},r),{children:[(0,o.jsx)(s.u_,{className:"flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",children:(0,o.jsx)(d.ZP,{icon:c.rH8})}),(0,o.jsx)(s.l_,{children:n}),(0,o.jsx)(s.$G,{className:"flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",children:(0,o.jsx)(d.ZP,{icon:c.bTu})})]}))},Item:l.forwardRef(function(e,n){var r=e.children,l=(0,a._)(e,["children"]);return(0,o.jsx)(u.mS,(0,i._)((0,t._)({$as:s.ck,ref:n},l),{children:(0,o.jsx)(s.eT,{children:r})}))})};n.Z=f},55629:function(e,n,r){var t=r(39324),i=r(71209),a=r(22830),o=r(35250),s=r(19841),l=r(70079);n.Z={Root:function(e){var n=e.children,r=e.fixed,t=e.className,i=e.size,c=(0,l.useRef)(null),d=(0,l.useRef)(null),u=(0,a._)((0,l.useState)(!1),2),f=u[0],v=u[1];return(0,l.useEffect)(function(){var e=c.current,n=d.current;if(e&&n){var r=new ResizeObserver(function(){v(n.scrollHeight>e.clientHeight)});return r.observe(e),function(){return r.disconnect()}}},[]),(0,o.jsx)("div",{className:(0,s.Z)("overflow-y-auto text-gray-600 dark:text-gray-300","normal"===(void 0===i?"normal":i)?"text-base":"text-sm",f&&"pr-1",t),ref:c,children:(0,o.jsx)("table",{className:(0,s.Z)("w-full border-separate border-spacing-0",void 0!==r&&r&&"table-fixed"),ref:d,children:n})})},Header:function(e){var n=e.children;return(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:n})})},HeaderCell:function(e){var n=e.textAlign,r=e.children,t=e.className;return(0,o.jsx)("th",{className:(0,s.Z)("sticky top-0 z-10 border-b border-black/10 bg-white py-2 pr-4 font-medium last:pr-0 dark:border-white/10","left"===(void 0===n?"left":n)?"text-left":"text-right",void 0===t?"dark:bg-gray-900":t),children:r})},Body:function(e){var n=e.children;return(0,o.jsx)("tbody",{children:n})},Row:function(e){var n=e.children,r=e.disabled,a=void 0!==r&&r;return(0,o.jsx)("tr",(0,i._)((0,t._)({},a?{"data-disabled":!0}:{}),{className:(0,s.Z)(a?"pointer-events-none":""),children:n}))},Cell:function(e){var n=e.textAlign,r=e.children,t=e.className;return(0,o.jsx)("td",{className:(0,s.Z)("border-b border-black/10  pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&]:border-b-0","left"===(void 0===n?"left":n)?"text-left":"text-right",t),children:(0,o.jsx)("div",{className:"py-2 [tr[data-disabled=true]_&]:opacity-50",children:r})})},Actions:function(e){var n=e.children;return(0,o.jsx)("div",{className:"text-md flex items-center justify-end gap-2",children:n})}}},45635:function(e,n,r){r.d(n,{u:function(){return c}});var t=r(4337),i=r(35250),a=r(22444),o=r(19841);r(70079);var s=r(21389);function l(){var e=(0,t._)(["relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs"]);return l=function(){return e},e}var c=function(e){var n=e.label,r=e.side,t=e.sideOffset,s=e.withArrow,l=e.wide,c=e.size,u=void 0===c?"small":c,f=e.interactive,v=e.usePortal,h=e.className,x=e.children,m=e.delayDuration,g=e.closeOnOutsideClick,b=e.open,p=(0,i.jsxs)(a.VY,{onPointerDownOutside:void 0===g||g?void 0:function(e){return e.preventDefault()},side:void 0===r?"bottom":r,sideOffset:void 0===t?14:t,className:(0,o.Z)("relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity",void 0!==l&&l?"max-w-sm":"max-w-xs",h),children:[(0,i.jsx)("span",{className:(0,o.Z)("flex items-center whitespace-pre-wrap px-2 py-1 text-center font-medium normal-case text-white",{"text-xs":"xsmall"===u,"text-sm":"small"===u}),children:n}),(void 0===s||s)&&(0,i.jsx)(a.Eh,{asChild:!0,children:(0,i.jsx)(d,{})})]});return(0,i.jsxs)(a.fC,{delayDuration:void 0===m?300:m,disableHoverableContent:!(void 0!==f&&f),open:b,children:[(0,i.jsx)(a.xz,{asChild:!0,children:(0,i.jsx)("span",{className:h,children:x})}),void 0===v||v?(0,i.jsx)(a.h_,{children:p}):p]})},d=s.Z.div(l())},89705:function(e,n,r){r.d(n,{J7:function(){return l},ay:function(){return d},mS:function(){return c}});var t=r(4337),i=r(21389);function a(){var e=(0,t._)(["\ntext-gray-700 border border-transparent inline-flex h-9 items-center justify-center gap-4 rounded-md bg-white px-3 text-sm\ndark:text-gray-200 dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-gray-50 dark:hover:bg-[#494A54]\nfocus-visible:border-blue-500 dark:focus-visible:border-blue-500\nradix-state-active:text-gray-600 dark:radix-state-active::text-gray-400\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-gray-500 dark:radix-disabled:bg-transparent dark:radix-disabled:text-gray-500\n"]);return a=function(){return e},e}function o(){var e=(0,t._)(["\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n"]);return o=function(){return e},e}function s(){var e=(0,t._)(["\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n"]);return s=function(){return e},e}var l=i.Z.button(a()),c=i.Z.div(o()),d=i.Z.div(s())},15329:function(e,n,r){r.d(n,{DM:function(){return k},R:function(){return y},Vq:function(){return N},ZB:function(){return j},ZP:function(){return p},zV:function(){return w}});var t=r(39324),i=r(4337),a=r(35250),o=r(7813),s=r(19841),l=r(1454),c=r(32004),d=r(94968),u=r(21389),f=r(88327),v=r(50828);function h(){var e=(0,i._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return h=function(){return e},e}function x(){var e=(0,i._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);return x=function(){return e},e}function m(){var e=(0,i._)(["rounded-md border border-white/20 hover:bg-gray-500/10 h-11"]);return m=function(){return e},e}function g(){var e=(0,i._)(["my-1.5 h-px bg-white/20"]);return g=function(){return e},e}function b(){var e=(0,i._)(["",""]);return b=function(){return e},e}function p(e){var n=e.onClick,r=e.href,t=e.target,i=e.children;return(0,a.jsx)(o.v.Item,{children:function(e){var o=e.active;return(0,a.jsx)(j,{as:void 0!==r?"a":"button",onClick:n,href:r,target:t,className:(0,s.Z)(o?"bg-gray-700":"hover:bg-gray-700"),children:i})}})}function k(e){var n=e.onDeleteHistory,r=e.isConfirmingDeleteHistory,i=(0,v.LC)();return(0,a.jsx)(a.Fragment,{children:i&&(0,a.jsxs)(p,{onClick:n,children:[(0,a.jsx)(f.ZP,{icon:r?l.UgA:l.Ybf}),r?(0,a.jsx)(c.Z,(0,t._)({},C.confirmClearConversations)):(0,a.jsx)(c.Z,(0,t._)({},C.clearConversations))]})})}u.Z.a(h());var j=u.Z.a(x()),w=(0,u.Z)(j)(m()),y=u.Z.div(g()),N=(0,u.Z)(j)(b(),function(e){return e.$active?"bg-gray-800":"hover:bg-gray-800"}),C=(0,d.vU)({confirmClearConversations:{id:"workspacePopoverNavigation.confirmClearConversations",defaultMessage:"Confirm clear conversations",description:"Confirmation text for clearing conversations"},clearConversations:{id:"workspacePopoverNavigation.clearConversations",defaultMessage:"Clear conversations",description:"Clear conversations menu item"}})},50828:function(e,n,r){r.d(n,{LC:function(){return h},MO:function(){return v},Od:function(){return m},iF:function(){return x}});var t=r(44009),i=r(13995),a=r(70079),o=r(62509),s=r(6948),l=r(99486),c=r(32877),d=r(78931),u="oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),f="conversationHistory";function v(){var e,n=(0,d.hz)().has(c.Ud),r=(0,d.$T)(),i=(0,o.kP)().session,s=null==i?void 0:i.accessToken,u=!n&&!!s&&!r,v=(0,t.N)({queryKey:[f],queryFn:function(e){var n=e.pageParam;return l.ZP.getConversations(n||0,28,null==i?void 0:i.accessToken)},getNextPageParam:function(e){var n=e.offset+e.limit;return n<e.total?n:void 0},enabled:u}),h=v.data,x=v.fetchNextPage,m=v.hasNextPage,g=v.isInitialLoading,b=v.isFetchingNextPage,p=v.isError,k=(0,a.useMemo)(function(){return null!==(e=null==h?void 0:h.pages.flatMap(function(e){return e.items}))&&void 0!==e?e:[]},[h]);return{data:h,conversations:k,fetchNextPage:x,hasNextPage:m,isLoading:g,isFetchingNextPage:b,isError:u&&p}}function h(){var e=v().conversations;return(0,a.useMemo)(function(){return e.length>0},[e])}function x(){var e=(0,i.NL)();return(0,a.useCallback)(function(){e.invalidateQueries([f])},[e])}function m(){(0,a.useEffect)(function(){s.m.removeItem(u)},[])}},46020:function(e,n,r){r.d(n,{B:function(){return i},EV:function(){return h},bM:function(){return f},tN:function(){return u},vm:function(){return v}});var t,i,a,o=r(39324),s=r(78103),l=r(6948);(t=i||(i={})).AccountPortal="account-portal",t.UserContext="user-context",t.DownloadMessages="download-messages",t.InviteUsersToWorkspace="invite-users-to-workspace",t.TempBrowseToast="temp-browse-toast",t.WorkspaceSwitcher="workspace-switcher";var c="UiState.isNavigationCollapsed.1",d={isThreadHeaderVisible:!0,isDesktopNavCollapsed:null!==(a=l.m.getItem(c))&&void 0!==a&&a,sharingModalThreadId:void 0,isFilesModalOpen:!1,activeSidebar:!1,activeModals:new Set},u=(0,s.ZP)()(function(){return(0,o._)({},d)}),f={isDesktopNavCollapsed:function(e){return e.isDesktopNavCollapsed},isThreadHeaderVisible:function(e){return e.isThreadHeaderVisible}},v={toggleDesktopNavCollapsed:function(){u.setState(function(e){var n=!e.isDesktopNavCollapsed;return l.m.setItem(c,n),{isDesktopNavCollapsed:n}})},hideThreadHeader:function(){u.setState({isThreadHeaderVisible:!1})},showThreadHeader:function(){u.setState({isThreadHeaderVisible:!0})},openSharingModal:function(e){u.setState({sharingModalThreadId:e})},closeSharingModal:function(){u.setState({sharingModalThreadId:void 0})},openFilesModal:function(){u.setState({isFilesModalOpen:!0})},closeFilesModal:function(){u.setState({isFilesModalOpen:!1})},setActiveSidebar:function(e){u.setState({activeSidebar:e})},toggleActiveSidebar:function(e){u.setState(function(n){return{activeSidebar:n.activeSidebar!==e&&e}})},openModal:function(e){u.setState(function(n){var r=new Set(n.activeModals);return r.add(e),{activeModals:r}})},closeModal:function(e){u.setState(function(n){var r=new Set(n.activeModals);return r.delete(e),{activeModals:r}})}};function h(e){return u(function(n){return n.activeModals.has(e)})}},33669:function(e,n,r){r.d(n,{_G:function(){return i},aj:function(){return h},dQ:function(){return x},oc:function(){return u},w$:function(){return f},x_:function(){return v}});var t,i,a,o=r(96237),s=r(22830),l=r(70079);(t=i||(i={})).Mobile="mobile",t.Small="small",t.Medium="medium",t.Large="large",t.XLarge="xlarge";var c=(a={},(0,o._)(a,i.Small,640),(0,o._)(a,i.Medium,768),(0,o._)(a,i.Large,1024),(0,o._)(a,i.XLarge,1280),a);function d(e){var n=function(){a(r(e))},r=function(e){return window.matchMedia(e).matches},t=(0,s._)((0,l.useState)(r(e)),2),i=t[0],a=t[1];return(0,l.useEffect)(function(){var r=window.matchMedia(e);return n(),r.addListener?r.addListener(n):r.addEventListener("change",n),function(){r.removeListener?r.removeListener(n):r.removeEventListener("change",n)}},[e]),i}function u(){return d("(min-width: ".concat(c[i.Small],"px)"))}function f(){return d("(min-width: ".concat(c[i.Medium],"px)"))}function v(){return d("(min-width: ".concat(c[i.Large],"px)"))}function h(){return d("(min-width: ".concat(c[i.XLarge],"px)"))}function x(){var e=u(),n=f(),r=v();return h()?i.XLarge:r?i.Large:n?i.Medium:e?i.Small:i.Mobile}}}]);