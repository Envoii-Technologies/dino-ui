"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[6300],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(7587).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Notification/Notification.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_NotificationContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Notification/NotificationContext.jsx"),_Notification__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Notification/Notification.jsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)()),{addNotification:addNotification}=(0,_NotificationContext__WEBPACK_IMPORTED_MODULE_2__.z)(),notificationList=[{message:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"semiBold",children:"Ihr Profil wurde aktualisiert"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"regular",children:"Ihr Team hat Änderungen an Ihrem Unternehmensprofil vorgenommen, seit Sie sich zuletzt angemeldet haben."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{marginTop:"0.5rem",display:"flex",flexDirection:"row",gap:"0.75rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Später"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Änderungen ansehen"})]})]}),options:{}},{message:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"semiBold",children:"Profil erfolgreich aktualisiert"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"regular",children:"Ihre Änderungen wurden gespeichert und Ihr Profil ist aktiv."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{marginTop:"0.5rem",display:"flex",flexDirection:"row",gap:"0.75rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Später"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Alle Änderungen ansehen"})]})]}),options:{type:"success"}},{message:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"semiBold",children:"Es gibt ein neues Update!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"regular",children:"Sehen Sie sich die neue Dashboard-Ansicht an. Seiten werden jetzt schneller geladen."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{marginTop:"0.5rem",display:"flex",flexDirection:"row",gap:"0.75rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Später"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Alle Änderungen ansehen"})]})]}),options:{type:"warning"}},{message:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.div,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"semiBold",children:"Die Karte wurde nicht veröffentlicht"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.xv,{size:"sm",type:"regular",children:"Durch das Entfernen aller Benutzer wurde dieses Projekt nicht veröffentlicht. Fügen Sie Benutzer hinzu, um es erneut zu veröffentlichen."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.div,{style:{marginTop:"0.5rem",display:"flex",flexDirection:"row",gap:"0.75rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{type:"link",label:"Rückgängig machen"})})]}),options:{type:"error"}}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.zx,{onClick:()=>{const randomMessage=notificationList[Math.floor(Math.random()*notificationList.length)];addNotification(randomMessage.message,randomMessage.options)},type:"primary",label:"Create Notification"})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Notification",component:_Notification__WEBPACK_IMPORTED_MODULE_3__.P}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"notification",children:"Notification"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Notification__WEBPACK_IMPORTED_MODULE_3__.P})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:'args => {\n  const {\n    addNotification\n  } = useNotifications();\n  const notificationList = [{\n    message: <div style={{\n      display: "flex",\n      flexDirection: "column"\n    }}>\n\t\t\t\t\t<Text size="sm" type="semiBold">Ihr Profil wurde aktualisiert</Text>\n\t\t\t\t\t<Text size="sm" type="regular">\n\t\t\t\t\t\tIhr Team hat Änderungen an Ihrem Unternehmensprofil vorgenommen, seit Sie sich zuletzt angemeldet haben.\n\t\t\t\t\t</Text>\n\t\t\t\t\t<div style={{\n        marginTop: "0.5rem",\n        display: "flex",\n        flexDirection: "row",\n        gap: "0.75rem"\n      }}>\n\t\t\t\t\t\t<Button type="link" label="Sp\\xE4ter" />\n\t\t\t\t\t\t<Button type="link" label="\\xC4nderungen ansehen" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>,\n    options: {}\n  }, {\n    message: <div style={{\n      display: "flex",\n      flexDirection: "column"\n    }}>\n\t\t\t\t\t<Text size="sm" type="semiBold">Profil erfolgreich aktualisiert</Text>\n\t\t\t\t\t<Text size="sm" type="regular">\n\t\t\t\t\t\tIhre Änderungen wurden gespeichert und Ihr Profil ist aktiv.\n\t\t\t\t\t</Text>\n\t\t\t\t\t<div style={{\n        marginTop: "0.5rem",\n        display: "flex",\n        flexDirection: "row",\n        gap: "0.75rem"\n      }}>\n\t\t\t\t\t\t<Button type="link" label="Sp\\xE4ter" />\n\t\t\t\t\t\t<Button type="link" label="Alle \\xC4nderungen ansehen" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>,\n    options: {\n      type: "success"\n    }\n  }, {\n    message: <div style={{\n      display: "flex",\n      flexDirection: "column"\n    }}>\n\t\t\t\t\t<Text size="sm" type="semiBold">Es gibt ein neues Update!</Text>\n\t\t\t\t\t<Text size="sm" type="regular">\n\t\t\t\t\t\tSehen Sie sich die neue Dashboard-Ansicht an. Seiten werden jetzt schneller geladen.\n\t\t\t\t\t</Text>\n\t\t\t\t\t<div style={{\n        marginTop: "0.5rem",\n        display: "flex",\n        flexDirection: "row",\n        gap: "0.75rem"\n      }}>\n\t\t\t\t\t\t<Button type="link" label="Sp\\xE4ter" />\n\t\t\t\t\t\t<Button type="link" label="Alle \\xC4nderungen ansehen" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>,\n    options: {\n      type: "warning"\n    }\n  }, {\n    message: <div style={{\n      display: "flex",\n      flexDirection: "column"\n    }}>\n\t\t\t\t\t<Text size="sm" type="semiBold">Die Karte wurde nicht veröffentlicht</Text>\n\t\t\t\t\t<Text size="sm" type="regular">\n\t\t\t\t\t\tDurch das Entfernen aller Benutzer wurde dieses Projekt nicht veröffentlicht. Fügen Sie Benutzer hinzu, um es erneut zu veröffentlichen.\n\t\t\t\t\t</Text>\n\t\t\t\t\t<div style={{\n        marginTop: "0.5rem",\n        display: "flex",\n        flexDirection: "row",\n        gap: "0.75rem"\n      }}>\n\t\t\t\t\t\t<Button type="link" label="R\\xFCckg\\xE4ngig machen" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>,\n    options: {\n      type: "error"\n    }\n  }];\n  const handleClick = () => {\n    const randomMessage = notificationList[Math.floor(Math.random() * notificationList.length)];\n    addNotification(randomMessage.message, randomMessage.options);\n  };\n  return <Button onClick={handleClick} type="primary" label="Create Notification" />;\n}'}};const componentMeta={title:"Components/Notification",component:_Notification__WEBPACK_IMPORTED_MODULE_3__.P,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta}}]);