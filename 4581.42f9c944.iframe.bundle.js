"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[4581],{"./src/components/OverflowMenu/OverflowMenu.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return OverflowMenu_OverflowMenu_OverflowMenu}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OverflowMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/OverflowMenu/OverflowMenu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OverflowMenu.Z,options),OverflowMenu.Z&&OverflowMenu.Z.locals&&OverflowMenu.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OverflowMenu_OverflowMenu_OverflowMenu=({className:className,children:children,content:content,anchor:anchor,...props})=>{const[isVisible,setIsVisible]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:`OverflowMenu ${void 0!==className?className:""}`,onClick:()=>{setIsVisible(!isVisible)},children:[(0,jsx_runtime.jsx)("div",{className:"OverflowMenu__trigger",children:children}),isVisible&&(0,jsx_runtime.jsx)("div",{className:`OverflowMenu__content anchor__${anchor}`,children:(0,jsx_runtime.jsx)("div",{className:"OverflowMenu__content--inner",children:content})})]})};OverflowMenu_OverflowMenu_OverflowMenu.displayName="OverflowMenu",OverflowMenu_OverflowMenu_OverflowMenu.propTypes={className:prop_types_default().string,anchor:prop_types_default().oneOf(["left-top","left-center","left-bottom","left-top-inner","left-center-inner","left-bottom-inner","right-top","right-center","right-bottom","right-top-inner","right-center-inner","right-bottom-inner"])},OverflowMenu_OverflowMenu_OverflowMenu.defaultProps={className:void 0,anchor:"left-top-inner"},OverflowMenu_OverflowMenu_OverflowMenu.__docgenInfo={description:"",methods:[],displayName:"OverflowMenu",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},anchor:{defaultValue:{value:"'left-top-inner'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left-top'",computed:!1},{value:"'left-center'",computed:!1},{value:"'left-bottom'",computed:!1},{value:"'left-top-inner'",computed:!1},{value:"'left-center-inner'",computed:!1},{value:"'left-bottom-inner'",computed:!1},{value:"'right-top'",computed:!1},{value:"'right-center'",computed:!1},{value:"'right-bottom'",computed:!1},{value:"'right-top-inner'",computed:!1},{value:"'right-center-inner'",computed:!1},{value:"'right-bottom-inner'",computed:!1}]},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/OverflowMenu/OverflowMenu.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Italic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/assets/fonts/DMSans-MediumItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Medium.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_5___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBold.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_6___=new URL(__webpack_require__("./src/assets/fonts/DMSans-BoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_7___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Bold.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);___CSS_LOADER_EXPORT___.push([module.id,"@font-face{font-family:DMSans;src:url("+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}100%{transform:translateY(1000px);opacity:0}}*{box-sizing:border-box}.OverflowMenu{position:relative;display:inline-block}.OverflowMenu__trigger{display:flex}.OverflowMenu__content{box-shadow:0 4px 6px -2px rgba(16,24,40,.03),0 12px 16px -4px rgba(16,24,40,.08);position:absolute;background-color:#fff;border-radius:.5rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;min-width:6rem;max-width:10rem;padding:1rem 1.25rem;z-index:50000}.OverflowMenu__content--inner{flex-direction:column;flex-grow:0;text-align:center;color:#101828;font-family:DMSans;font-size:12px;font-weight:600;line-height:1.5}.OverflowMenu__content.anchor__left-top{left:calc(100% - .5rem);transform:translateY(-0.5rem)}.OverflowMenu__content.anchor__left-center{left:calc(100% - .5rem);top:.5rem;transform:translateY(-50%)}.OverflowMenu__content.anchor__left-bottom{left:calc(100% - .5rem);transform:translateY(-0.5rem);bottom:0}.OverflowMenu__content.anchor__right-top{right:calc(100% - .5rem);transform:translateY(-0.5rem)}.OverflowMenu__content.anchor__right-center{right:calc(100% - .5rem);top:.5rem;transform:translateY(-50%)}.OverflowMenu__content.anchor__right-bottom{right:calc(100% - .5rem);transform:translateY(-0.5rem);bottom:0}.OverflowMenu__content.anchor__left-top-inner{left:calc(100% - 2rem);transform:translateY(-2rem)}.OverflowMenu__content.anchor__left-center-inner{left:calc(100% - 2rem);top:.5rem;transform:translateY(-50%)}.OverflowMenu__content.anchor__left-bottom-inner{left:calc(100% - 2rem);transform:translateY(0.5rem);bottom:0}.OverflowMenu__content.anchor__right-top-inner{right:calc(100% - 2rem);transform:translateY(-2rem)}.OverflowMenu__content.anchor__right-center-inner{right:calc(100% - 2rem);top:.5rem;transform:translateY(-50%)}.OverflowMenu__content.anchor__right-bottom-inner{right:calc(100% - 2rem);transform:translateY(0.5rem);bottom:0}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/_animations.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/OverflowMenu/OverflowMenu.scss","webpack://./src/global-styles/_colors.scss","webpack://./src/global-styles/_radius.scss","webpack://./src/global-styles/_mixins.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CCtCJ,mBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAIR,oBACI,GACE,SAAA,CAEF,KACE,SAAA,CAAA,CAIN,2BACI,GACE,4BAAA,CACA,SAAA,CAEF,KACE,uBAAA,CACA,SAAA,CAAA,CAIN,4BACI,GACI,uBAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CC3CR,EAEI,qBAAA,CCTJ,cACI,iBAAA,CACA,oBAAA,CAEA,uBACI,YAAA,CAGJ,uBACI,gFAAA,CAEA,iBAAA,CACA,qBCdW,CDeX,mBEXM,CFYN,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CACA,oBAAA,CACA,aAAA,CAEA,8BACI,qBAAA,CACA,WAAA,CAEA,iBAAA,CACA,aCsBK,CEgWb,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CHrXI,wCAEI,uBAAA,CACA,6BAAA,CAGJ,2CAEI,uBAAA,CACA,SAAA,CACA,0BAAA,CAGJ,2CAEI,uBAAA,CACA,6BAAA,CACA,QAAA,CAGJ,yCAEI,wBAAA,CACA,6BAAA,CAGJ,4CAEI,wBAAA,CACA,SAAA,CACA,0BAAA,CAGJ,4CAEI,wBAAA,CACA,6BAAA,CACA,QAAA,CAGJ,8CAEI,sBAAA,CACA,2BAAA,CAGJ,iDAEI,sBAAA,CACA,SAAA,CACA,0BAAA,CAGJ,iDAEI,sBAAA,CACA,4BAAA,CACA,QAAA,CAGJ,+CAEI,uBAAA,CACA,2BAAA,CAGJ,kDAEI,uBAAA,CACA,SAAA,CACA,0BAAA,CAGJ,kDAEI,uBAAA,CACA,4BAAA,CACA,QAAA",sourcesContent:['@font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Italic.ttf) format("truetype");\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Regular.ttf) format("truetype");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-MediumItalic.ttf) format("truetype");\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Medium.ttf) format("truetype");\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBoldItalic.ttf) format("truetype");\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBold.ttf) format("truetype");\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-BoldItalic.ttf) format("truetype");\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Bold.ttf) format("truetype");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }',"@mixin Animation-FadeIn {\n    animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@mixin Animation-FadeOut {\n    animation: fade-out 0.2s ease-out both;\n}\n\n@mixin Animation-SlideIn {\n    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\n@mixin Animation-SlideOut {\n    animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n\n@keyframes slide-in-bottom {\n    0% {\n      transform: translateY(1000px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n\n@keyframes slide-out-bottom {\n    0% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n}\n","@import './spacing';\n@import './radius';\n@import './colors';\n@import './gradients';\n@import './fonts';\n@import './mixins';\n@import './variables';\n@import './animations';\n\n*\n{\n    box-sizing: border-box;\n}\n","@use '../../global-styles/' as *;\n\n.OverflowMenu {\n    position: relative;\n    display: inline-block;\n\n    &__trigger {\n        display: flex;\n    }\n\n    &__content {\n        box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03),\n            0 12px 16px -4px rgba(16, 24, 40, 0.08);\n        position: absolute;\n        background-color: $color-base-white;\n        border-radius: $radius-md;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        min-width: 6rem;\n        max-width: 10rem;\n        padding: 1rem 1.25rem;\n        z-index: 50000;\n\n        &--inner {\n            flex-direction: column;\n            flex-grow: 0;\n\n            text-align: center;\n            color: $color-gray-900;\n            @include Text-xsSemibold;\n        }\n\n        &.anchor__left-top\n        {\n            left: calc(100% - 0.5rem);\n            transform: translateY(-0.5rem);\n        }\n\n        &.anchor__left-center\n        {\n            left: calc(100% - 0.5rem);\n            top: 0.5rem;\n            transform: translateY(-50%);\n        }\n\n        &.anchor__left-bottom\n        {\n            left: calc(100% - 0.5rem);\n            transform: translateY(-0.5rem);\n            bottom: 0;\n        }\n        \n        &.anchor__right-top\n        {\n            right: calc(100% - 0.5rem);\n            transform: translateY(-0.5rem);\n        }\n\n        &.anchor__right-center\n        {\n            right: calc(100% - 0.5rem);\n            top: 0.5rem;\n            transform: translateY(-50%);\n        }\n\n        &.anchor__right-bottom\n        {\n            right: calc(100% - 0.5rem);\n            transform: translateY(-0.5rem);\n            bottom: 0;\n        }\n\n        &.anchor__left-top-inner\n        {\n            left: calc(100% - 2rem);\n            transform: translateY(-2rem);\n        }\n\n        &.anchor__left-center-inner\n        {\n            left: calc(100% - 2rem);\n            top: 0.5rem;\n            transform: translateY(-50%);\n        }\n\n        &.anchor__left-bottom-inner\n        {\n            left: calc(100% - 2rem);\n            transform: translateY(0.5rem);\n            bottom: 0;\n        }\n\n        &.anchor__right-top-inner\n        {\n            right: calc(100% - 2rem);\n            transform: translateY(-2rem);\n        }\n\n        &.anchor__right-center-inner\n        {\n            right: calc(100% - 2rem);\n            top: 0.5rem;\n            transform: translateY(-50%);\n        }\n\n        &.anchor__right-bottom-inner\n        {\n            right: calc(100% - 2rem);\n            transform: translateY(0.5rem);\n            bottom: 0;\n        }\n    }\n}\n","$color-base-white: #fff;\n$color-base-black: #000;\n\n$color-success-25: #f6fef9;\n$color-success-50: #ecfdf3;\n$color-success-100: #dcfae6;\n$color-success-200: #abefc6;\n$color-success-300: #75e0a7;\n$color-success-400: #47cd89;\n$color-success-500: #17b26a;\n$color-success-600: #079455;\n$color-success-700: #067647;\n$color-success-800: #085d3a;\n$color-success-900: #074d31;\n$color-success-950: #053321;\n\n$color-error-25: #fffbfa;\n$color-error-50: #fef3f2;\n$color-error-100: #fee4e2;\n$color-error-200: #fecdca;\n$color-error-300: #fda29b;\n$color-error-400: #f97066;\n$color-error-500: #f04438;\n$color-error-600: #d92d20;\n$color-error-700: #b42318;\n$color-error-800: #912018;\n$color-error-900: #7a271a;\n$color-error-950: #55160c;\n\n$color-warning-25: #fffcf5;\n$color-warning-50: #fffaeb;\n$color-warning-100: #fef0c7;\n$color-warning-200: #fedf89;\n$color-warning-300: #fec84b;\n$color-warning-400: #fdb022;\n$color-warning-500: #f79009;\n$color-warning-600: #dc6803;\n$color-warning-700: #b54708;\n$color-warning-800: #93370d;\n$color-warning-900: #7a2e0e;\n$color-warning-950: #4e1d09;\n\n$color-gray-25: #fcfcfd;\n$color-gray-50: #f9fafb;\n$color-gray-100: #f2f4f7;\n$color-gray-200: #eaecf0;\n$color-gray-300: #d0d5dd;\n$color-gray-400: #98a2b3;\n$color-gray-500: #667085;\n$color-gray-600: #475467;\n$color-gray-700: #344054;\n$color-gray-800: #182230;\n$color-gray-900: #101828;\n$color-gray-950: #0c111d;\n\n$color-brand-25: #fefdf0;\n$color-brand-50: #fefbe8;\n$color-brand-100: #fef7c3;\n$color-brand-200: #feee95;\n$color-brand-300: #fde272;\n$color-brand-400: #fac515;\n$color-brand-500: #eaaa08;\n$color-brand-600: #ca8504;\n$color-brand-700: #a15c07;\n$color-brand-800: #854a0e;\n$color-brand-900: #713b12;\n$color-brand-950: #542c0d;\n\n$color-grayblue-25: #FCFCFD;\n$color-grayblue-50: #F8F9FC;\n$color-grayblue-100: #EAECF5;\n$color-grayblue-200: #D5D9EB;\n$color-grayblue-300: #B3B8D8;\n$color-grayblue-400: #717BBC;\n$color-grayblue-500: #4E5BA6;\n$color-grayblue-600: #3E4784;\n$color-grayblue-700: #363F72;\n$color-grayblue-800: #293056;\n$color-grayblue-900: #101323;\n$color-grayblue-950: #0D0F1C;\n\n$color-lightblue-25: #F5FBFF;\n$color-lightblue-50: #F0F9FF;\n$color-lightblue-100: #E0F2FE;\n$color-lightblue-200: #B9E6FE;\n$color-lightblue-300: #7CD4FC;\n$color-lightblue-400: #36BFFA;\n$color-lightblue-500: #0BA5EC;\n$color-lightblue-600: #0086C9;\n$color-lightblue-700: #026AA2;\n$color-lightblue-800: #065986;\n$color-lightblue-900: #0B4A6F;\n$color-lightblue-950: #062C41;\n\n$color-blue-25: #F5FAFF;\n$color-blue-50: #EFF8FF;\n$color-blue-100: #D1E9FF;\n$color-blue-200: #B2DDFF;\n$color-blue-300: #84CAFF;\n$color-blue-400: #53B1FD;\n$color-blue-500: #2E90FA;\n$color-blue-600: #1570EF;\n$color-blue-700: #175CD3;\n$color-blue-800: #1849A9;\n$color-blue-900: #194185;\n$color-blue-950: #102A56;\n\n$color-indigo-25: #F5F8FF;\n$color-indigo-50: #EEF4FF;\n$color-indigo-100: #E0EAFF;\n$color-indigo-200: #C7D7FE;\n$color-indigo-300: #A4BCFD;\n$color-indigo-400: #8098F9;\n$color-indigo-500: #6172F3;\n$color-indigo-600: #444CE7;\n$color-indigo-700: #3538DC;\n$color-indigo-800: #2D31A6;\n$color-indigo-900: #2D3282;\n$color-indigo-950: #1F235B;\n\n$color-purple-25: #FAFAFF;\n$color-purple-50: #F4F3FF;\n$color-purple-100: #EBE9FE;\n$color-purple-200: #D9D6FE;\n$color-purple-300: #BDB4FE;\n$color-purple-400: #9B8AFB;\n$color-purple-500: #7A5AF8;\n$color-purple-600: #6938EF;\n$color-purple-700: #5925DC;\n$color-purple-800: #4A1FB8;\n$color-purple-900: #3E1C96;\n$color-purple-950: #27115F;\n\n$color-pink-25: #FEF6FB;\n$color-pink-50: #FDF2FA;\n$color-pink-100: #FCE7F6;\n$color-pink-200: #FCCEEE;\n$color-pink-300: #FAA7E0;\n$color-pink-400: #F670C7;\n$color-pink-500: #EE46BC;\n$color-pink-600: #DD2590;\n$color-pink-700: #C11574;\n$color-pink-800: #9E165E;\n$color-pink-900: #851651;\n$color-pink-950: #4E0D30;\n\n$color-orange-25: #FEFAF5;\n$color-orange-50: #FEF6EE;\n$color-orange-100: #FDEAD7;\n$color-orange-200: #F9DBAF;\n$color-orange-300: #F7B27A;\n$color-orange-400: #F38744;\n$color-orange-500: #EF6820;\n$color-orange-600: #E04F16;\n$color-orange-700: #B93815;\n$color-orange-800: #932F19;\n$color-orange-900: #772917;\n$color-orange-950: #511C10;\n","$radius-none: 0rem;\n$radius-xxs:  0.125rem;\n$radius-xs:   0.25rem;\n$radius-sm:   0.375rem;\n$radius-md:   0.5rem;\n$radius-lg:   0.625rem;\n$radius-xl:   0.75rem;\n$radius-2xl:  1rem;\n$radius-3xl:  1.25rem;\n$radius-4xl:  1.5rem;\n$radius-full: 100%;","@mixin Display-2xlBold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlSemibold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlMedium {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlRegular {\n    font-family: DMSans;\n    font-size: 72px;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-xlBold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: bold;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlSemibold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 600;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlMedium {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 500;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlRegular {\n    font-family: DMSans;\n    font-size: 60px;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-lgBold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgSemibold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgMedium {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgRegular {\n    font-family: DMSans;\n    font-size: 48px;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-mdBold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: bold;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdSemibold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 600;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdMedium {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdRegular {\n    font-family: DMSans;\n    font-size: 36px;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-smBold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: bold;\n    line-height: 1.27;\n}\n@mixin Display-smSemibold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.27;\n}\n@mixin Display-smMedium {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 1.27;\n}\n@mixin Display-sm-Medium-italic {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.47;\n}\n@mixin Display-smRegular {\n    font-family: DMSans;\n    font-size: 30px;\n    line-height: 1.27;\n}\n@mixin Display-xsBold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 1.33;\n}\n@mixin Display-xsSemibold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium-italic {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Display-xsRegular {\n    font-family: DMSans;\n    font-size: 24px;\n    line-height: 1.33;\n}\n@mixin Text-xlBold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xlBold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-underlined {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-lgBold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1.56;\n}\n@mixin Text-lgBold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lg-Medium-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-mdBold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-mdBold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-md-Medium-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-sm-Bold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smMedium {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-sm-Medium-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-smRegular-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-smRegular {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-xs-Bold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xsSemibold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xsMedium {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xsRegular {\n    font-family: DMSans;\n    font-size: 12px;\n    line-height: 1.5;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);