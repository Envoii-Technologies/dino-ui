"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[778],{"./src/components/Sidebar/Sidebar.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return Sidebar_Sidebar_Sidebar}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Logo_Icon_light_namespaceObject=__webpack_require__.p+"static/media/Logo_Icon-light.2ff955f9.svg",Logo_Full_light_namespaceObject=__webpack_require__.p+"static/media/Logo_Full-light.f52f31d2.svg",injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sidebar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Sidebar/Sidebar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sidebar.Z,options),Sidebar.Z&&Sidebar.Z.locals&&Sidebar.Z.locals;var SidebarButton=__webpack_require__("./src/components/SidebarButton/SidebarButton.jsx"),SidebarUserInfo=(__webpack_require__("./src/components/SidebarInfoBox/SidebarInfoBox.jsx"),__webpack_require__("./src/components/SidebarUserInfo/SidebarUserInfo.jsx")),Badge=__webpack_require__("./src/components/Badge/Badge.jsx"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Sidebar_Sidebar_Sidebar=({className:className,isExpanded:isExpanded,...props})=>(0,jsx_runtime.jsx)("div",{className:`Sidebar ${void 0!==className?className:""}`,children:(0,jsx_runtime.jsxs)("div",{className:"Sidebar__wrapper "+(isExpanded?"expanded":"collapsed"),children:[(0,jsx_runtime.jsxs)("div",{className:"Sidebar__wrapper__primary",children:[(0,jsx_runtime.jsxs)("div",{className:"Sidebar__wrapper__primary__brand",children:[isExpanded?(0,jsx_runtime.jsx)("img",{src:Logo_Full_light_namespaceObject,className:"Sidebar__wrapper__primary__brand--full"}):(0,jsx_runtime.jsx)("img",{src:Logo_Icon_light_namespaceObject,className:"Sidebar__wrapper__primary__brand--logo"}),(0,jsx_runtime.jsx)(Badge.C,{className:isExpanded?"expanded":"collapsed",label:"Editor",size:"sm",color:"purple",pill:!1})]}),(0,jsx_runtime.jsxs)("nav",{className:"Sidebar__wrapper__primary__menu",children:[(0,jsx_runtime.jsx)(SidebarButton.f,{isExpanded:isExpanded,label:"Dashboard",isActive:!0,icon:free_solid_svg_icons.wp6}),(0,jsx_runtime.jsx)(SidebarButton.f,{isExpanded:isExpanded,label:"Karten",icon:free_solid_svg_icons.Krp}),(0,jsx_runtime.jsx)(SidebarButton.f,{isExpanded:isExpanded,label:"Medien",icon:free_solid_svg_icons.VmB})]})]}),(0,jsx_runtime.jsxs)("div",{className:"Sidebar__wrapper__secondary",children:[(0,jsx_runtime.jsxs)("nav",{className:"Sidebar__wrapper__secondary__menu",children:[(0,jsx_runtime.jsx)(SidebarButton.f,{isExpanded:isExpanded,label:"Hilfe",icon:free_solid_svg_icons.uli}),(0,jsx_runtime.jsx)(SidebarButton.f,{isExpanded:isExpanded,label:"Einstellungen",icon:free_solid_svg_icons.gr5})]}),(0,jsx_runtime.jsx)(SidebarUserInfo.S,{isExpanded:isExpanded})]})]})});Sidebar_Sidebar_Sidebar.displayName="Sidebar",Sidebar_Sidebar_Sidebar.propTypes={className:prop_types_default().string,isExpanded:prop_types_default().bool},Sidebar_Sidebar_Sidebar.defaultProps={className:void 0,isExpanded:!0},Sidebar_Sidebar_Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},isExpanded:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./src/components/Sidebar/Sidebar.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Sidebar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Sidebar/Sidebar.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Y,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Sidebar",component:_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Y}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"sidebar",children:"Sidebar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Y})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <Sidebar {...args} />"}};const componentMeta={title:"Components/Sidebar",component:_Sidebar__WEBPACK_IMPORTED_MODULE_2__.Y,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Sidebar/Sidebar.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Italic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/assets/fonts/DMSans-MediumItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Medium.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_5___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBold.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_6___=new URL(__webpack_require__("./src/assets/fonts/DMSans-BoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_7___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Bold.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);___CSS_LOADER_EXPORT___.push([module.id,"@font-face{font-family:DMSans;src:url("+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}*{box-sizing:border-box}.Sidebar{background:#344054;position:relative;height:100%}.Sidebar__wrapper{transition:width .5s;position:relative;height:100%;padding:2rem 1rem;display:flex;flex-direction:column;justify-content:space-between}.Sidebar__wrapper .Badge{transition:all .5s;margin-left:0}.Sidebar__wrapper.collapsed{width:5rem}.Sidebar__wrapper.collapsed .Badge.collapsed{margin-left:-100px;opacity:0}.Sidebar__wrapper.expanded{width:18rem}.Sidebar__wrapper.expanded .Badge.expanded{margin-left:0;opacity:1}.Sidebar__wrapper__primary,.Sidebar__wrapper__secondary{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column;gap:3rem}.Sidebar__wrapper__primary__brand,.Sidebar__wrapper__secondary__brand{margin-left:.5rem;height:2rem;display:flex;align-items:center;justify-content:space-between}.Sidebar__wrapper__primary__brand--logo,.Sidebar__wrapper__secondary__brand--logo{height:2rem}.Sidebar__wrapper__primary__brand--full,.Sidebar__wrapper__secondary__brand--full{height:2rem}.Sidebar__wrapper__primary__menu,.Sidebar__wrapper__secondary__menu{display:flex;flex-direction:column;gap:.25rem}.Sidebar__wrapper__secondary{align-self:stretch;flex-grow:0;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;gap:24px}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/Sidebar/Sidebar.scss","webpack://./src/global-styles/_colors.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CC/CJ,EAEI,qBAAA,CCPJ,SACI,kBC+Ca,CD9Cb,iBAAA,CACA,WAAA,CAEA,kBACI,oBAAA,CACA,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAEA,yBACI,kBAAA,CACA,aAAA,CAGJ,4BACI,UAAA,CAEA,6CACI,kBAAA,CACA,SAAA,CAIR,2BACI,WAAA,CAEA,2CACI,aAAA,CACA,SAAA,CAIR,wDAEI,YAAA,CACA,0BAAA,CACA,mBAAA,CACA,qBAAA,CACA,QAAA,CAEA,sEACI,iBAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAEA,kFACI,WAAA,CAGJ,kFACI,WAAA,CAIR,oEACI,YAAA,CACA,qBAAA,CACA,UAAA,CAKR,6BACI,kBAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,mBAAA,CACA,QAAA",sourcesContent:['@font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Italic.ttf) format("truetype");\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Regular.ttf) format("truetype");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-MediumItalic.ttf) format("truetype");\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Medium.ttf) format("truetype");\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBoldItalic.ttf) format("truetype");\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBold.ttf) format("truetype");\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-BoldItalic.ttf) format("truetype");\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Bold.ttf) format("truetype");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }',"@import './spacing';\n@import './radius';\n@import './colors';\n@import './fonts';\n@import './mixins';\n@import './variables';\n\n*\n{\n    box-sizing: border-box;\n}\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 23.5;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-large: 80em;\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }\n","@use '../../global-styles/' as *;\n\n.Sidebar {\n    background: $color-gray-700;\n    position: relative;\n    height: 100%;\n\n    &__wrapper {\n        transition: width 0.5s;\n        position: relative;\n        height: 100%;\n        padding: 2rem 1rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n\n        .Badge {\n            transition: all 0.5s;\n            margin-left: 0;\n        }\n\n        &.collapsed {\n            width: 5rem;\n\n            .Badge.collapsed {\n                margin-left: -100px;\n                opacity: 0;\n            }\n        }\n\n        &.expanded {\n            width: 18rem;\n\n            .Badge.expanded {\n                margin-left: 0;\n                opacity: 1;\n            }\n        }\n\n        &__primary,\n        &__secondary {\n            display: flex;\n            justify-content: flex-start;\n            align-items: stretch;\n            flex-direction: column;\n            gap: 3rem;\n\n            &__brand {\n                margin-left: 0.5rem;\n                height: 2rem;\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n\n                &--logo {\n                    height: 2rem;\n                }\n\n                &--full {\n                    height: 2rem;\n                }\n            }\n\n            &__menu {\n                display: flex;\n                flex-direction: column;\n                gap: 0.25rem;\n                // padding-bottom: 1.5rem;\n            }\n        }\n\n        &__secondary {\n            align-self: stretch;\n            flex-grow: 0;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: stretch;\n            gap: 24px;\n        }\n    }\n}\n","$color-base-white: #fff;\n$color-base-black: #000;\n\n$color-success-25: #f6fef9;\n$color-success-50: #ecfdf3;\n$color-success-100: #dcfae6;\n$color-success-200: #abefc6;\n$color-success-300: #75e0a7;\n$color-success-400: #47cd89;\n$color-success-500: #17b26a;\n$color-success-600: #079455;\n$color-success-700: #067647;\n$color-success-800: #085d3a;\n$color-success-900: #074d31;\n$color-success-950: #053321;\n\n$color-error-25: #fffbfa;\n$color-error-50: #fef3f2;\n$color-error-100: #fee4e2;\n$color-error-200: #fecdca;\n$color-error-300: #fda29b;\n$color-error-400: #f97066;\n$color-error-500: #f04438;\n$color-error-600: #d92d20;\n$color-error-700: #b42318;\n$color-error-800: #912018;\n$color-error-900: #7a271a;\n$color-error-950: #55160c;\n\n$color-warning-25: #fffcf5;\n$color-warning-50: #fffaeb;\n$color-warning-100: #fef0c7;\n$color-warning-200: #fedf89;\n$color-warning-300: #fec84b;\n$color-warning-400: #fdb022;\n$color-warning-500: #f79009;\n$color-warning-600: #dc6803;\n$color-warning-700: #b54708;\n$color-warning-800: #93370d;\n$color-warning-900: #7a2e0e;\n$color-warning-950: #4e1d09;\n\n$color-gray-25: #fcfcfd;\n$color-gray-50: #f9fafb;\n$color-gray-100: #f2f4f7;\n$color-gray-200: #eaecf0;\n$color-gray-300: #d0d5dd;\n$color-gray-400: #98a2b3;\n$color-gray-500: #667085;\n$color-gray-600: #475467;\n$color-gray-700: #344054;\n$color-gray-800: #182230;\n$color-gray-900: #101828;\n$color-gray-950: #0c111d;\n\n$color-brand-25: #fefdf0;\n$color-brand-50: #fefbe8;\n$color-brand-100: #fef7c3;\n$color-brand-200: #feee95;\n$color-brand-300: #fde272;\n$color-brand-400: #fac515;\n$color-brand-500: #eaaa08;\n$color-brand-600: #ca8504;\n$color-brand-700: #a15c07;\n$color-brand-800: #854a0e;\n$color-brand-900: #713b12;\n$color-brand-950: #542c0d;\n\n$color-grayblue-25: #FCFCFD;\n$color-grayblue-50: #F8F9FC;\n$color-grayblue-100: #EAECF5;\n$color-grayblue-200: #D5D9EB;\n$color-grayblue-300: #B3B8D8;\n$color-grayblue-400: #717BBC;\n$color-grayblue-500: #4E5BA6;\n$color-grayblue-600: #3E4784;\n$color-grayblue-700: #363F72;\n$color-grayblue-800: #293056;\n$color-grayblue-900: #101323;\n$color-grayblue-950: #0D0F1C;\n\n$color-lightblue-25: #F5FBFF;\n$color-lightblue-50: #F0F9FF;\n$color-lightblue-100: #E0F2FE;\n$color-lightblue-200: #B9E6FE;\n$color-lightblue-300: #7CD4FC;\n$color-lightblue-400: #36BFFA;\n$color-lightblue-500: #0BA5EC;\n$color-lightblue-600: #0086C9;\n$color-lightblue-700: #026AA2;\n$color-lightblue-800: #065986;\n$color-lightblue-900: #0B4A6F;\n$color-lightblue-950: #062C41;\n\n$color-blue-25: #F5FAFF;\n$color-blue-50: #EFF8FF;\n$color-blue-100: #D1E9FF;\n$color-blue-200: #B2DDFF;\n$color-blue-300: #84CAFF;\n$color-blue-400: #53B1FD;\n$color-blue-500: #2E90FA;\n$color-blue-600: #1570EF;\n$color-blue-700: #175CD3;\n$color-blue-800: #1849A9;\n$color-blue-900: #194185;\n$color-blue-950: #102A56;\n\n$color-indigo-25: #F5F8FF;\n$color-indigo-50: #EEF4FF;\n$color-indigo-100: #E0EAFF;\n$color-indigo-200: #C7D7FE;\n$color-indigo-300: #A4BCFD;\n$color-indigo-400: #8098F9;\n$color-indigo-500: #6172F3;\n$color-indigo-600: #444CE7;\n$color-indigo-700: #3538DC;\n$color-indigo-800: #2D31A6;\n$color-indigo-900: #2D3282;\n$color-indigo-950: #1F235B;\n\n$color-purple-25: #FAFAFF;\n$color-purple-50: #F4F3FF;\n$color-purple-100: #EBE9FE;\n$color-purple-200: #D9D6FE;\n$color-purple-300: #BDB4FE;\n$color-purple-400: #9B8AFB;\n$color-purple-500: #7A5AF8;\n$color-purple-600: #6938EF;\n$color-purple-700: #5925DC;\n$color-purple-800: #4A1FB8;\n$color-purple-900: #3E1C96;\n$color-purple-950: #27115F;\n\n$color-pink-25: #FEF6FB;\n$color-pink-50: #FDF2FA;\n$color-pink-100: #FCE7F6;\n$color-pink-200: #FCCEEE;\n$color-pink-300: #FAA7E0;\n$color-pink-400: #F670C7;\n$color-pink-500: #EE46BC;\n$color-pink-600: #DD2590;\n$color-pink-700: #C11574;\n$color-pink-800: #9E165E;\n$color-pink-900: #851651;\n$color-pink-950: #4E0D30;\n\n$color-orange-25: #FEFAF5;\n$color-orange-50: #FEF6EE;\n$color-orange-100: #FDEAD7;\n$color-orange-200: #F9DBAF;\n$color-orange-300: #F7B27A;\n$color-orange-400: #F38744;\n$color-orange-500: #EF6820;\n$color-orange-600: #E04F16;\n$color-orange-700: #B93815;\n$color-orange-800: #932F19;\n$color-orange-900: #772917;\n$color-orange-950: #511C10;\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);