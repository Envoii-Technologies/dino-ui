"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[6656],{"./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{L:function(){return useInsertionEffectAlwaysWithSyncFallback},j:function(){return useInsertionEffectWithLayoutFallback}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInsertionEffect=!!(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect&&(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect,useInsertionEffectAlwaysWithSyncFallback=useInsertionEffect||function syncFallback(create){return create()},useInsertionEffectWithLayoutFallback=useInsertionEffect||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./src/pages/DashboardPage/DashboardPage.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DashboardPage_stories}});var react=__webpack_require__("./node_modules/react/index.js"),PageHeader=__webpack_require__("./src/components/PageHeader/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DashboardPage=({isLoading:isLoading,userData:userData})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isLoading?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Loading..."}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(PageHeader.m,{title:`Willkommen, ${userData.firstname} 👋`})})});DashboardPage.__docgenInfo={description:"",methods:[],displayName:"DashboardPage"};var Layout=__webpack_require__("./src/components/Layout/index.js"),ModalInfoWindow=__webpack_require__("./src/components/ModalInfoWindow/index.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),mockUser=__webpack_require__("./src/data/mockUser.js"),DashboardPage_stories={title:"Pages/Dashboard",component:DashboardPage,parameters:{layout:"fullscreen"}};const Default=(args=>{const[showWindow,setShowWindow]=react.useState(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ModalInfoWindow._,{...args,icon:free_solid_svg_icons.YHc,show:showWindow,type:"error",onCancel:()=>setShowWindow(!1),onAction:()=>alert("[NOT IMPLEMENTED]"),title:"Wollen sie sich wirklich ausloggen?",body:"",cancelText:"Abbrechen",actionText:"Ausloggen"}),(0,jsx_runtime.jsx)(Layout.A,{userData:mockUser.Z,onLogoutAction:()=>setShowWindow(!0),children:(0,jsx_runtime.jsx)(DashboardPage,{...args,userData:mockUser.Z,isLoading:!1})})]})}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [showWindow, setShowWindow] = React.useState(false);\n  return <>\n            <ModalInfoWindow {...args} icon={faInfo} show={showWindow} type="error" onCancel={() => setShowWindow(false)} onAction={() => alert("[NOT IMPLEMENTED]")} title="Wollen sie sich wirklich ausloggen?" body="" cancelText={"Abbrechen"} actionText={"Ausloggen"} />\n            <Layout userData={mockUser} onLogoutAction={() => setShowWindow(true)}>\n                <DashboardPage {...args} userData={mockUser} isLoading={false} />\n            </Layout>\n        </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/data/mockUser.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={tenant:"acme",id:"afc2125d-0a51-41ae-b46f-bd1e3e797797",username:"admin",email:"admin@example.com",emailVerified:!0,firstname:"Admin",lastname:"User",roles:["app_admin"]}}}]);