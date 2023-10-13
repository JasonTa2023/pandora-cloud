"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[722],{41932:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(51217),r=n(22830),i=n(35250),a=n(70079),s=n(19012);function c(e){var t=e.text,n=(0,s.Z)(),o=(0,r._)((0,a.useState)(!0),2),c=o[0],u=o[1],d=(0,r._)((0,a.useState)(0),2),f=d[0],h=d[1],g=(0,a.useMemo)(function(){return new l().humanTypingDelaysQuertyDistance(t)},[t]);return(0,a.useEffect)(function(){t&&c&&(u(!0),g.forEach(function(e,t){setTimeout(function(){n()&&(h(t),t===g.length-1&&u(!1))},e)}))},[g,n,c,t]),(0,i.jsx)(i.Fragment,{children:t.substring(0,f+1)})}var l=function(){function e(){(0,o._)(this,e)}var t=e.prototype;return t.qwertyDistance=function(e,t){var n,o,i={q:[0,0],w:[1,0],e:[2,0],r:[3,0],t:[4,0],y:[5,0],u:[6,0],i:[7,0],o:[8,0],p:[9,0],a:[0,1],s:[1,1],d:[2,1],f:[3,1],g:[4,1],h:[5,1],j:[6,1],k:[7,1],l:[8,1],z:[0,2],x:[1,2],c:[2,2],v:[3,2],b:[4,2],n:[5,2],m:[6,2]},a=(0,r._)(null!==(n=i[e.toLowerCase()])&&void 0!==n?n:[0,0],2),s=a[0],c=a[1],l=(0,r._)(null!==(o=i[t.toLowerCase()])&&void 0!==o?o:[0,0],2);return Math.abs(s-l[0])+Math.abs(c-l[1])},t.humanTypingDelaysQuertyDistance=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=0,r=[],i=0;i<e.length;++i){var a=void 0;if(i>0){var s=this.qwertyDistance(e[i-1],e[i]);a=0===s?this.getRandomInt(t,Math.floor(n/2)):1===s?this.getRandomInt(t,Math.floor(2*n/3)):this.getRandomInt(t,n)}else a=this.getRandomInt(t,n);r.push(a+o),o+=a}return r},t.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e}()},80267:function(e,t,n){n.d(t,{V:function(){return ec},Z:function(){return ei}});var o=n(39324),r=n(71209),i=n(22830),a=n(4337),s=n(35250),c=n(28735),l=n(10664),u=n(18719),d=n(73426),f=n(19841),h=n(72201),g=n(26430),v=n(84913),m=n(44043),y=n(82187),p=n(69262),b=n(70737),x=n(97296),k=n(91530),j=n.n(k),C=n(60554),M=n.n(C),w=n(70079),_=n(1454),T=n(94968),Z=n(70671),N=n(32004),B=n(21389),A=n(95137),D=n(32877),E=n(37469),S=n(78931),I=n(33669),L=n(66085),z=n(2166),R=n(21817),K=n(41932),P=n(67273),$=n(61402),F=n(79579),U=n(89368),Y=n(20522),V=n(59100),Q=n(1821),q=n(2295);function O(){var e=(0,a._)(["flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm\n",""]);return O=function(){return e},e}function W(){var e=(0,a._)(["flex p-3 items-center gap-3 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer break-all\n","\n"]);return W=function(){return e},e}function H(){var e=(0,a._)(["flex py-3 px-3 items-center gap-3 gizmo:gap-2 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n","\n"]);return H=function(){return e},e}function G(){var e=(0,a._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);return G=function(){return e},e}function J(){var e=(0,a._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);return J=function(){return e},e}function X(){var e=(0,a._)(["h-9 pb-2 pt-3 px-3 gizmo:px-2 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-50 gizmo:bg-white dark:bg-gray-900 gizmo:dark:bg-gray-800"]);return X=function(){return e},e}function ee(){var e=(0,a._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",""]);return ee=function(){return e},e}function et(){var e=(0,a._)(["absolute flex right-1 z-10 dark:text-gray-300 text-gray-800\n",""]);return et=function(){return e},e}function en(){var e=(0,a._)(["p-1 hover:text-token-text-primary"]);return en=function(){return e},e}var eo=(0,T.vU)({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today",description:"Label for today's history bucket"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday",description:"Label for yesterday's history bucket"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days",description:"Label for the history bucket of the previous 7 days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days",description:"Label for the history bucket of the previous 30 days"},unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history",description:"Error message when history fails to load"},retryButton:{id:"history.retryButton",defaultMessage:"Retry",description:"Button to retry loading history"},showMoreButton:{id:"history.showMoreButton",defaultMessage:"Show more",description:"Button to show more history items"},deleteModalTitle:{id:"history.deleteModalTitle",defaultMessage:"Delete chat?",description:"Title of the modal to confirm deleting a conversation"},deleteModalBody:{id:"history.deleteModalBody",defaultMessage:"This will delete {title}.",description:"Body of the modal to confirm deleting a conversation"},deleteModalConfirm:{id:"history.deleteModalConfirm",defaultMessage:"Delete",description:"Button to confirm deleting a conversation"},deleteModalCancel:{id:"history.deleteModalCancel",defaultMessage:"Cancel",description:"Button to cancel deleting a conversation"}}),er={initial:function(e){return e.isNew?{opacity:0,height:0,overflow:"hidden"}:{}},animate:function(){return{opacity:1,height:"auto"}},exit:function(){return{opacity:0,height:0}}};function ei(e){var t,n,r,a=e.activeId,c=e.onNewThread,l=e.filterConversation,u=(0,Z.Z)(),d=(0,i._)((0,w.useState)(!1),2),k=d[0],j=d[1],C=(0,i._)((0,w.useState)(0),2),M=C[0],_=C[1],T=(0,R.Z)(),B=(0,q.MO)(),A=B.conversations,E=B.hasNextPage,I=B.fetchNextPage,L=B.isLoading,z=B.isFetchingNextPage,K=B.isError,$=(0,S.hz)().has(D.DY),F=(0,w.useRef)(null),U=(0,w.useCallback)(function(e){var t;$&&!L&&null!=e&&(null===(t=F.current)||void 0===t||t.disconnect(),F.current=new IntersectionObserver(function(e){e[0].isIntersecting&&E&&I()}),F.current.observe(e))},[$,L,E,I]);(0,w.useEffect)(function(){return function(){var e;null===(e=F.current)||void 0===e||e.disconnect()}},[]);var O=(0,q.iF)();(0,q.Od)();var W=A;null!=l&&(W=W.filter(l));var H=(t=W,n=(0,w.useRef)(),r=(0,w.useRef)(),((0,w.useEffect)(function(){n.current=r.current,r.current=t},[t]),t===r.current)?n.current:r.current);(0,w.useEffect)(function(){T(function(){_(M+1)},(0,g.Z)((0,v.Z)(),Date.now())+1e3)},[M,T]);var G=0===W.length,J=(0,Y.Ml)(),X=(0,w.useMemo)(function(){return W.reduce(function(e,t){var n,o,r=new Date(null!==(o=null!==(n=t.update_time)&&void 0!==n?n:t.create_time)&&void 0!==o?o:0),i=(0,h.Z)(new Date,r);if(0===i)e.recent.today.items.push(t);else if(i<=1)e.recent.yesterday.items.push(t);else if(i<=7)e.recent.lastSeven.items.push(t);else if(i<=30)e.recent.lastThirty.items.push(t);else if((0,p.Z)(r)){var a=(0,y.Z)(r),s=(0,m.Z)(r),c="".concat(a,"-").concat(s);e.dynamicMonths[c]?e.dynamicMonths[c].items.push(t):e.dynamicMonths[c]={label:u.formatDate(r,{month:"long"}),items:[t]}}else{var l=(0,y.Z)(r),d="".concat(l,"-");e.dynamicYears[d]?e.dynamicYears[d].items.push(t):e.dynamicYears[d]={label:u.formatDate(r,{year:"numeric"}),items:[t]}}return e},{recent:{today:{label:(0,s.jsx)(N.Z,(0,o._)({},eo.historyBucketToday)),items:[]},yesterday:{label:(0,s.jsx)(N.Z,(0,o._)({},eo.historyBucketYesterday)),items:[]},lastSeven:{label:(0,s.jsx)(N.Z,(0,o._)({},eo.historyBucketLastSeven)),items:[]},lastThirty:{label:(0,s.jsx)(N.Z,(0,o._)({},eo.historyBucketLastThirty)),items:[]}},dynamicMonths:{},dynamicYears:{}})},[M,W]);return(0,s.jsxs)(ea,{$centered:L||K&&G,children:[G&&L&&(0,s.jsx)(Q.Z,{className:"m-auto"}),G&&K&&(0,s.jsxs)("div",{className:"p-3 text-center italic text-gray-500",children:[(0,s.jsx)(N.Z,(0,o._)({},eo.unableToLoadHistory)),!k&&(0,s.jsx)("div",{className:"mt-1",children:(0,s.jsx)(P.z,{as:"button",color:"dark",size:"small",className:"m-auto mt-2",onClick:function(){j(!0),O()},children:(0,s.jsx)(N.Z,(0,o._)({},eo.retryButton))})})]}),!L&&(0,s.jsx)("div",{children:(0,s.jsx)(b.M,{initial:!1,children:[X.recent,X.dynamicMonths,X.dynamicYears].flatMap(function(e,t){return(0,s.jsx)("span",{children:Object.entries(e).map(function(e){var t=(0,i._)(e,2),n=t[0],o=t[1],r=o.items,l=o.label;if("today"!==n&&!r.length)return null;var u=!!r.find(function(e){var t;return W.length>0&&e.id===(null===(t=W[0])||void 0===t?void 0:t.id)});return(0,s.jsxs)(x.E.div,{className:"relative",layoutId:"bucket-".concat(n),layout:"position",initial:{height:0,opacity:1,position:"relative"},animate:{height:"auto",opacity:1,transition:{duration:.2,ease:"easeIn"}},children:[r.length>0&&(0,s.jsx)(x.E.div,{className:(0,f.default)("sticky top-0",u?"z-[16]":"z-[14]"),layoutId:"bucketTitle-".concat(n),layout:"position",children:(0,s.jsx)(eh,{children:l})}),(0,s.jsx)("ol",{children:r.map(function(e,t){var n,o=a===e.id,r=null==H?void 0:H.find(function(t){return t.id===e.id}),i=E&&(!W[W.length-6]||null===(n=W[W.length-6])||void 0===n?void 0:n.id)===e.id?U:void 0;return(0,s.jsx)(x.E.li,{className:(0,f.default)("relative",u&&0===t?"z-[15]":""),layoutId:"".concat(e.id),layout:"position",custom:{isNew:!r},variants:er,initial:"initial",animate:"animate",exit:"exit",children:J?(0,s.jsx)(V.I,{conversation:e,isActive:o,elementRef:i}):(0,s.jsx)(es,{id:e.id,title:e.title,active:o,onNewThread:c,elementRef:i})},"history-item-".concat(e.id))})})]},n)})},"category-".concat(t))})})}),$?z&&(0,s.jsx)("div",{className:"m-4 mb-5 flex justify-center",children:(0,s.jsx)(Q.Z,{})}):(0,s.jsx)(s.Fragment,{children:E&&(0,s.jsx)(P.z,{as:"button",onClick:function(){return I()},color:"dark",className:"m-auto mb-2",size:"small",loading:z,children:(0,s.jsx)(N.Z,(0,o._)({},eo.showMoreButton))})})]})}var ea=B.Z.div(O(),function(e){return e.$centered&&"h-full justify-center items-center"});function es(e){var t=e.id,n=e.title,o=e.active,r=e.onNewThread,a=e.elementRef,h=(0,I.w$)(),g=(0,i._)((0,w.useState)(!1),2),v=g[0],m=g[1],y=(0,w.useRef)(null),p=(0,q.iF)(),b=(0,w.useCallback)(function(e){var o,r;if(null==e||e.preventDefault(),m(!1),(null===(o=y.current)||void 0===o?void 0:o.value)&&(null===(r=y.current)||void 0===r?void 0:r.value)!==n){var i=y.current.value;E.tQ.setTitle(t,i,E._L.User),u.A.logEvent(d.M.renameThread,{threadId:t,content:i}),A.ZP.patchConversation(t,{title:i}).then(function(){p()})}},[t,p,n]),x=(0,w.useCallback)(function(e){"Enter"===e.key&&b()},[b]),k=(0,w.useCallback)(function(){A.ZP.patchConversation(t,{is_visible:!1}).then(function(){p()}),r()},[t,r,p]),C=(0,w.useCallback)(function(e){$.hx.abortAllRequests(),e.preventDefault(),u.A.logEvent(d.M.loadThread,{threadId:t}),M().push((0,L.ZV)(t),void 0,{shallow:!0})},[t]),T=(0,z.Z)(t,n,o),Z=T.resolvedTitle,N=T.isTypingEffect,B=(0,s.jsx)(_.IC0,{className:"icon-sm"}),D=(0,i._)((0,w.useState)(!1),2),S=D[0],R=D[1];if((0,w.useEffect)(function(){if(o)return(0,c.LW)(l.n,{deleteChat:function(){R(!0)}})},[o]),v)return(0,s.jsxs)(eu,{$active:o,children:[B,(0,s.jsx)(ed,{ref:y,type:"text",defaultValue:null!=Z?Z:"",autoFocus:!0,onKeyDown:x,className:"mr-0",onBlur:b}),(0,s.jsxs)(ev,{$active:!0,children:[(0,s.jsx)(em,{onClick:b,children:(0,s.jsx)(_.UgA,{className:"icon-sm"})}),(0,s.jsx)(em,{onClick:function(e){e.preventDefault(),m(!1)},children:(0,s.jsx)(_.q5L,{className:"icon-sm"})})]})]});var P=N&&o&&h;return(0,s.jsxs)(s.Fragment,{children:[o&&S&&(0,s.jsx)(ec,{title:n,handleDelete:k,onClose:function(){R(!1)}}),(0,s.jsxs)(el,{onClick:o?j():C,$active:o,className:(0,f.default)("group",P&&"animate-flash"),ref:a,children:[B,(0,s.jsxs)(ef,{children:[P?(0,s.jsx)(K.Z,{text:null!=Z?Z:""}):Z,(!N||!o)&&(0,s.jsx)(eg,{$active:o})]}),o&&(0,s.jsxs)(ev,{$active:o,children:[(0,s.jsx)(em,{onClick:function(e){e.preventDefault(),m(!0)},children:(0,s.jsx)(_.Nte,{className:"icon-sm"})}),(0,s.jsx)(em,{onClick:function(){R(!0)},children:(0,s.jsx)(_.Ybf,{className:"icon-sm"})})]})]})]})}function ec(e){var t=e.title,n=e.handleDelete,i=e.onClose,a=(0,Z.Z)();return(0,s.jsx)(U.Z,{isOpen:!0,onClose:i,type:"success",title:a.formatMessage(eo.deleteModalTitle),primaryButton:(0,s.jsx)(F.ZP.Button,{title:a.formatMessage(eo.deleteModalConfirm),color:"danger",onClick:function(){n(),i()}}),secondaryButton:(0,s.jsx)(F.ZP.Button,{title:a.formatMessage(eo.deleteModalCancel),color:"neutral",onClick:i}),children:(0,s.jsx)(N.Z,(0,r._)((0,o._)({},eo.deleteModalBody),{values:{title:(0,s.jsx)("strong",{children:t})}}))})}var el=B.Z.a(W(),function(e){return e.$active?"bg-gray-100 dark:bg-gray-800 pr-14 dark:hover:bg-gray-800":"bg-gray-50 gizmo:bg-white gizmo:hover:bg-gray-100 hover:pr-4 dark:bg-gray-900"}),eu=B.Z.div(H(),function(e){return e.$active?"pr-14 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800":"bg-gray-100 dark:bg-gray-900"}),ed=B.Z.input(G()),ef=B.Z.div(J()),eh=B.Z.h3(X()),eg=B.Z.div(ee(),function(e){return e.$active?"dark:from-gray-800 from-gray-100":"dark:from-gray-900 from-gray-50 gizmo:from-white group-hover:from-gray-100 dark:group-hover:from-[#2A2B32]"}),ev=B.Z.div(et(),function(e){return e.$active?"visible":"invisible group-hover:visible"}),em=B.Z.button(en())},59100:function(e,t,n){n.d(t,{I:function(){return L},V:function(){return E}});var o=n(39324),r=n(22830),i=n(35250),a=n(95137),s=n(37469),c=n(78931),l=n(28735),u=n(10664),d=n(33669),f=n(66085),h=n(2166),g=n(47428),v=n(18719),m=n(73426),y=n(19841),p=n(60554),b=n.n(p),x=n(70079),k=n(1454),j=n(32004),C=n(94968),M=n(41932),w=n(6038),_=n(61402),T=n(92720),Z=n(83023),N=n(20522),B=n(80267),A=n(2295);function D(e){var t=e.conversation,n=e.handleEditTitle,s=(0,A.iF)(),c=(0,r._)((0,x.useState)(!1),2),d=c[0],f=c[1];return(0,x.useEffect)(function(){return(0,l.LW)(u.n,{deleteChat:function(){f(!0)}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(T.Z.Root,{children:[(0,i.jsx)(g.xz,{asChild:!0,children:(0,i.jsxs)("button",{className:"absolute bottom-0 right-0 top-0 flex w-9 items-center justify-center rounded text-token-text-tertiary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary",children:[(0,i.jsx)("div",{className:"pointer-events-none absolute bottom-0 right-0 top-0 w-14 rounded bg-gradient-to-l from-token-surface-tertiary from-60% to-transparent"}),(0,i.jsx)(k.K9M,{className:"icon-sm relative"})]})}),(0,i.jsx)(T.Z.Portal,{children:(0,i.jsxs)(T.Z.Content,{align:"center",children:[(0,i.jsx)(T.Z.Item,{onClick:function(){n()},children:(0,i.jsx)(j.Z,(0,o._)({},z.renameConversation))}),(0,i.jsx)(T.Z.Item,{onClick:function(){f(!0)},children:(0,i.jsx)(j.Z,(0,o._)({},z.deleteConversation))})]})})]}),d&&(0,i.jsx)(B.V,{title:t.title,handleDelete:function(){a.ZP.patchConversation(t.id,{is_visible:!1}).then(function(){s()}),b().push("/",void 0,{shallow:!0})},onClose:function(){f(!1)}})]})}function E(e){var t=e.size,n=void 0===t?"medium":t;return(0,i.jsx)("div",{className:"overflow-hidden rounded bg-black dark:bg-white",style:{height:w.EF[n],width:w.EF[n]}})}function S(e){var t=e.conversation,n=e.onClose,o=function(){l!==t.title&&(s.tQ.setTitle(t.id,l,s._L.User),v.A.logEvent(m.M.renameThread,{threadId:t.id,content:l}),a.ZP.patchConversation(t.id,{title:l}).then(function(){d()}))},c=(0,r._)((0,x.useState)(t.title),2),l=c[0],u=c[1],d=(0,A.iF)();return(0,i.jsx)("input",{type:"text",value:l,onChange:function(e){u(e.target.value)},onKeyDown:function(e){switch(e.key){case"Escape":n();break;case"Enter":o(),n()}},onBlur:function(){o(),n()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}function I(e){var t,n=e.conversation,o=(0,c.ec)(function(e){return e.currentWorkspace});return(0,N.bU)(function(e){return e.displayVariant})===N.Mo.SidebarList?(0,i.jsxs)("div",{className:"relative flex h-5 w-5 items-center justify-center",children:[(0,i.jsx)(k.IC0,{className:"icon-sm"}),(0,i.jsx)("div",{className:"invisible absolute inset-0 group-hover:visible",children:(0,i.jsx)(Z.o,{gizmoId:null!==(t=n.conversation_template_id)&&void 0!==t?t:void 0,className:"h-5 w-5"})})]}):null!=n.conversation_template_id&&null!=o?(0,i.jsx)(w.Ao,{workspaceId:o.id,templateId:n.conversation_template_id,iconSize:"small",className:"rounded"}):(0,i.jsx)(E,{size:"small"})}function L(e){var t=e.conversation,n=e.isActive,o=e.elementRef,a=(0,r._)((0,x.useState)(!1),2),s=a[0],c=a[1],l=(0,h.Z)(t.id,t.title,n),u=l.resolvedTitle,g=l.isTypingEffect,p=(0,d.w$)();return(0,i.jsxs)("div",{className:"group relative",children:[(0,i.jsxs)("a",{href:(0,f.ZV)(t.id),onClick:function(e){if(e.preventDefault(),!n){var o;o=t.id,_.hx.abortAllRequests(),v.A.logEvent(m.M.loadThread,{threadId:o}),b().push((0,f.ZV)(o),void 0,{shallow:!0})}},onDoubleClick:function(){c(!0)},ref:o,className:(0,y.default)("flex items-center gap-2 rounded p-2",n?"bg-token-surface-tertiary":"hover:bg-token-surface-tertiary"),children:[(0,i.jsx)("div",{children:(0,i.jsx)(I,{conversation:t})}),(0,i.jsxs)("div",{className:"relative grow overflow-hidden whitespace-nowrap",children:[g&&n&&p?(0,i.jsx)(M.Z,{text:null!=u?u:""}):u,(0,i.jsx)("div",{className:(0,y.default)("absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l to-transparent",n?"from-token-surface-tertiary":"from-token-surface-primary group-hover:from-token-surface-tertiary dark:from-gray-800")})]})]}),s?(0,i.jsx)("div",{className:"absolute bottom-0 left-[31px] right-2 top-0 flex items-center bg-token-surface-tertiary",children:(0,i.jsx)(S,{conversation:t,onClose:function(){c(!1)}})}):n?(0,i.jsx)(D,{conversation:t,handleEditTitle:function(){c(!0)}}):null]})}var z=(0,C.vU)({renameConversation:{id:"history.item.editConversationTitle",defaultMessage:"Rename conversation",description:"Menu item label in conversation sidebar"},deleteConversation:{id:"history.item.deleteConversation",defaultMessage:"Delete conversation",description:"Menu item label in conversation sidebar"}})},83023:function(e,t,n){n.d(t,{$:function(){return s},o:function(){return l}});var o=n(35250),r=n(19841),i=n(88327),a=n(69385);function s(e){var t=e.gizmo,n=e.className;return(0,o.jsx)("div",{className:(0,r.default)("gizmo-shadow-stroke rounded-full",n),children:null!=t?(0,o.jsx)("img",{src:t.profile_pic_permalink,alt:t.name,className:"overflow-hidden rounded-full object-cover"}):(0,o.jsx)("div",{className:"flex h-full items-center justify-center rounded-full bg-black text-white",children:(0,o.jsx)(i.nI,{className:"h-2/3 w-2/3"})})})}function c(e){var t=e.gizmoId,n=e.className,r=(0,a.b9)(t).data;return null==r?(0,o.jsx)("div",{className:n}):(0,o.jsx)(s,{gizmo:r,className:n})}function l(e){var t=e.gizmoId,n=e.className;return null==t?(0,o.jsx)(s,{gizmo:void 0,className:n}):(0,o.jsx)(c,{gizmoId:t,className:n})}},10664:function(e,t,n){n.d(t,{n:function(){return E},A3:function(){return A},yx:function(){return z},JS:function(){return L}});var o,r,i,a=n(96237),s=n(39324),c=n(81949),l=n(15858),u=n(18719),d=n(73426),f=n(11084),h=n(82534),g=n(61888),v=n(70079),m=n(94968),y=n(95954),p=n(50253),b=n(88798),x=n(32877),k=n(37469),j=n(46020),C=n(78931),M=n(640),w=n(52787),_=n(45248),T=v.useLayoutEffect,Z=RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$","gms");(o=r||(r={})).Core="Core",o.Chat="Chat",o.Settings="Settings";var N=(0,s._)({Mod:"mod",Comma:","},l.s),B=(i={},(0,a._)(i,N.Mod,/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl"),(0,a._)(i,N.Comma,","),(0,a._)(i,N.Enter,"⏎"),(0,a._)(i,N.Escape,"Esc"),(0,a._)(i,N.ArrowUp,"↑"),(0,a._)(i,N.ArrowDown,"↓"),(0,a._)(i,N.ArrowLeft,"←"),(0,a._)(i,N.ArrowRight,"→"),(0,a._)(i,N.Backspace,"⌫"),(0,a._)(i,N.Delete,"⌦"),(0,a._)(i,N.Tab,"⇥"),(0,a._)(i,N.Control,"Ctrl"),(0,a._)(i,N.Shift,"Shift"),i),A=function(e){var t;return e.map(function(e){return null!==(t=B[e])&&void 0!==t?t:e})},D=(0,m.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat",description:"Keyboard shortcut to open a new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input",description:"Keyboard shortcut to focus the chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block",description:"Keyboard shortcut to copy the last code block in the chat"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response",description:"Keyboard shortcut to copy the last response in the chat"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions",description:"Keyboard shortcut to toggle custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar",description:"Keyboard shortcut to toggle navigation"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat",description:"Keyboard shortcut to delete chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts",description:"Keyboard shortcut to toggle keyboard actions"}}),E=new M.V,S=function(e){var t=e.resetThreadAction,n=e.clientThreadId,o=e.features;return[{key:"newChat",action:t||g.noop,actionMessageDescriptor:D.newChat,group:r.Core,keyboardBinding:[N.Mod,N.Shift,"o"],altKeyboardBindings:[[N.Mod,"k"]]},{key:"focusPromptTextarea",action:p.go,actionMessageDescriptor:D.focusPromptTextarea,group:r.Chat,keyboardBinding:[N.Shift,N.Escape]},{key:"copyLastCodeBlock",action:function(){if(null!=n)for(var e=k.tQ.getThreadCurrentLeafId(n),t=k.tQ.getThreadConversationTurns(n,e),o=t.length-1;o>=0;o--){var r=t[o].messages.reduce(function(e,t){return null==t.err&&t.message.author.role===y.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,w.RR)(t.message):e},""),i=(0,c._)(r.matchAll(Z)),a=i.length?i[i.length-1][1]:null;if(null!=a){(0,f.S)(a).then(function(){b.m.success("Copied code block to clipboard")});break}}},actionMessageDescriptor:D.copyLastCodeBlock,group:r.Chat,keyboardBinding:[N.Mod,N.Shift,";"],altKeyboardBindings:[[N.Mod,N.Shift,":"]]},{key:"copyLastResponse",action:function(){null!=n&&k.tQ.copyLastMessageToClipboard(n,"keyboard").then(function(){b.m.success("Last response copied to clipboard")})},actionMessageDescriptor:D.copyLastResponse,group:r.Chat,keyboardBinding:[N.Mod,N.Shift,"c"]},{key:"toggleCustomInstructions",action:function(){return j.vm.toggleModal(j.B.UserContext)},actionMessageDescriptor:D.toggleCustomInstructions,group:r.Settings,keyboardBinding:[N.Mod,N.Shift,"i"],enabled:o.has(x.Rw)||o.has(x.uo)},{key:"navigationToggle",action:function(){return j.vm.toggleDesktopNavCollapsed()},actionMessageDescriptor:D.navigationToggle,group:r.Core,keyboardBinding:[N.Mod,N.Shift,"s"]},{key:"deleteChat",action:function(){E.publish({kind:"deleteChat"})},actionMessageDescriptor:D.deleteChat,group:r.Chat,keyboardBinding:[N.Mod,N.Shift,N.Backspace],altKeyboardBindings:[[N.Mod,N.Shift,N.Delete]]},{key:"toggleKeyboardActions",action:function(){return j.vm.toggleModal(j.B.KeyboardActions)},actionMessageDescriptor:D.toggleKeyboardActions,group:r.Settings,keyboardBinding:[N.Mod,"/"]}]},I=function(e){var t,n,o,r=(0,C.hz)().has(x.rk);return t=function(e){u.A.logEvent(d.M.keyboardShortcut,{keyboardActionKey:e.key}),h.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},n={enabled:r},o=e.map(function(e){var t=e.keyboardBinding.join("+");if(e.altKeyboardBindings){t=[t];var n=e.altKeyboardBindings.map(function(e){return e.join("+")});t=t.concat(n)}return(0,_.ZP)(t,{byKey:!0})}),void T(function(){if((null==n?void 0:n.enabled)!==!1){var r=function(n){if(!n.repeat)for(var r=0;r<o.length;r++)o[r](n)&&(void 0===e[r].enabled||e[r].enabled)&&(n.preventDefault(),t(e[r]),e[r].action())},i=function(e){void 0!==e.key&&r(e)},a=document;return a.addEventListener("keydown",i),function(){a.removeEventListener("keydown",i)}}},[e,n])},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resetThreadAction,n=e.clientThreadId,o=(0,C.hz)();return(0,v.useMemo)(function(){return S({features:o,resetThreadAction:t,clientThreadId:n}).filter(function(e){var t=e.enabled;return void 0===t||t})},[n,o,t])},z=function(e){I(L({resetThreadAction:e.resetThreadAction,clientThreadId:e.clientThreadId}))}},2166:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(22830),r=n(70079),i=n(37469);function a(e,t,n){var a=(0,i.XL)(e),s=a.title,c=a.titleSource,l=(0,o._)((0,r.useState)(!1),2),u=l[0],d=l[1],f=null!=s?s:t,h=(0,r.useRef)(f);return(0,r.useEffect)(function(){return n&&c===i._L.Generated&&f!==h.current&&d(!0),function(){h.current=f}},[n,f,c]),{isTypingEffect:u,resolvedTitle:f}}},21817:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(70079);function r(){var e=(0,o.useRef)([]),t=(0,o.useRef)(function(t,n){var o=setTimeout(t,n);return e.current.push(o),o});return(0,o.useEffect)(function(){var t=e.current;return function(){t.forEach(function(e){clearTimeout(e)})}},[]),t.current}}}]);