"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[4391],{"./src/components/Text/Text.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return Text_Text_Text}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Text/Text.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text.Z,options),Text.Z&&Text.Z.locals&&Text.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text_Text=({className:className,children:children,size:size,type:type,italic:italic,...props})=>(0,jsx_runtime.jsx)("span",{className:`Text ${className||""} ${size}-${type}${italic?"-italic":""}`,...props,children:children});Text_Text_Text.displayName="Text",Text_Text_Text.propTypes={className:prop_types_default().string,children:prop_types_default().any,size:prop_types_default().oneOf(["xs","sm","md","lg","xl"]),type:prop_types_default().oneOf(["regular","medium","semiBold","bold"]),italic:prop_types_default().bool},Text_Text_Text.defaultProps={className:void 0,children:void 0,size:"md",type:"regular",italic:!1},Text_Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},children:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},type:{defaultValue:{value:'"regular"',computed:!1},description:"",type:{name:"enum",value:[{value:"'regular'",computed:!1},{value:"'medium'",computed:!1},{value:"'semiBold'",computed:!1},{value:"'bold'",computed:!1}]},required:!1},italic:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Text/Text.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-italic.ttf) format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.ttf) format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-italic.ttf) format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.ttf) format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-italic.ttf) format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.ttf) format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-italic.ttf) format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.ttf) format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}100%{transform:translateY(1000px);opacity:0}}@keyframes fade-in-above{0%{transform:translateY(-100px);opacity:0}100%{transform:translateY(-3rem);opacity:1}}@keyframes fade-out-above{0%{transform:translateY(-3rem);opacity:1}100%{transform:translateY(-100px);opacity:0}}@keyframes fade-in-above-small{0%{transform:translateY(-100px);opacity:0}100%{transform:translateY(-2rem);opacity:1}}@keyframes fade-out-above-small{0%{transform:translateY(-2rem);opacity:1}100%{transform:translateY(-100px);opacity:0}}@keyframes fade-in-below{0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0.5rem);opacity:1}}@keyframes fade-out-below{0%{transform:translateY(0.5rem);opacity:1}100%{transform:translateY(50px);opacity:0}}*{box-sizing:border-box}.Text.xs-regular{font-family:DMSans;font-size:12px;line-height:1.5}.Text.xs-medium{font-family:DMSans;font-size:12px;font-weight:500;line-height:1.5}.Text.xs-semiBold{font-family:DMSans;font-size:12px;font-weight:600;line-height:1.5}.Text.xs-bold{font-family:DMSans;font-size:12px;font-weight:bold;line-height:1.5}.Text.sm-regular{font-family:DMSans;font-size:14px;line-height:1.43}.Text.sm-regular-underlined{font-family:DMSans;font-size:14px;line-height:1.43}.Text.sm-medium{font-family:DMSans;font-size:14px;font-weight:500;line-height:1.43}.Text.sm-medium-underlined{font-family:DMSans;font-size:14px;font-weight:500;line-height:1.43}.Text.sm-semiBold{font-family:DMSans;font-size:14px;font-weight:600;line-height:1.43}.Text.sm-semiBold-underlined{font-family:DMSans;font-size:14px;font-weight:600;line-height:1.43}.Text.sm-bold{font-family:DMSans;font-size:14px;font-weight:bold;line-height:1.43}.Text.md-regular{font-family:DMSans;font-size:16px;line-height:1.5}.Text.md-regular-underlined{font-family:DMSans;font-size:16px;line-height:1.5}.Text.md-regular-italic{font-family:DMSans;font-size:16px;font-style:italic;line-height:1.5}.Text.md-medium{font-family:DMSans;font-size:16px;font-weight:500;line-height:1.5}.Text.md-medium-underlined{font-family:DMSans;font-size:16px;font-weight:500;line-height:1.5}.Text.md-medium-italic{font-family:DMSans;font-size:16px;font-weight:500;font-style:italic;line-height:1.5}.Text.md-semiBold{font-family:DMSans;font-size:16px;font-weight:600;line-height:1.5}.Text.md-semiBold-italic{font-family:DMSans;font-size:16px;font-weight:600;font-style:italic;line-height:1.5}.Text.md-semibold-underlined{font-family:DMSans;font-size:16px;font-weight:600;line-height:1.5}.Text.md-bold{font-family:DMSans;font-size:16px;font-weight:bold;line-height:1.5}.Text.md-bold-italic{font-family:DMSans;font-size:16px;font-weight:bold;font-style:italic;line-height:1.5}.Text.lg-regular{font-family:DMSans;font-size:18px;line-height:1.56}.Text.lg-regular-underlined{font-family:DMSans;font-size:18px;line-height:1.56}.Text.lg-regular-italic{font-family:DMSans;font-size:18px;font-style:italic;line-height:1.56}.Text.lg-medium{font-family:DMSans;font-size:18px;font-weight:500;line-height:1.56}.Text.lg-medium-underlined{font-family:DMSans;font-size:18px;font-weight:500;line-height:1.56}.Text.lg-medium-italic{font-family:DMSans;font-size:18px;font-weight:500;font-style:italic;line-height:1.56}.Text.lg-semiBold{font-family:DMSans;font-size:18px;font-weight:600;line-height:1.56}.Text.lg-semiBold-underlined{font-family:DMSans;font-size:18px;font-weight:600;line-height:1.56}.Text.lg-semiBold-italic{font-family:DMSans;font-size:18px;font-weight:600;font-style:italic;line-height:1.56}.Text.lg-bold{font-family:DMSans;font-size:18px;font-weight:bold;line-height:1.56}.Text.lg-bold-italic{font-family:DMSans;font-size:18px;font-weight:bold;font-style:italic;line-height:1.56}.Text.xl-regular{font-family:DMSans;font-size:20px;line-height:1.5}.Text.xl-regular-underlined{font-family:DMSans;font-size:20px;line-height:1.5}.Text.xl-regular-italic{font-family:DMSans;font-size:20px;font-style:italic;line-height:1.5}.Text.xl-medium{font-family:DMSans;font-size:20px;font-weight:500;line-height:1.5}.Text.xl-medium-italic{font-family:DMSans;font-size:20px;font-weight:500;font-style:italic;line-height:1.5}.Text.xl-semiBold{font-family:DMSans;font-size:20px;font-weight:600;line-height:1.5}.Text.xl-semiBold-italic{font-family:DMSans;font-size:20px;font-weight:600;font-style:italic;line-height:1.5}.Text.xl-bold{font-family:DMSans;font-size:20px;font-weight:bold;line-height:1.5}.Text.xl-bold-italic{font-family:DMSans;font-size:20px;font-weight:bold;font-style:italic;line-height:1.5}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/_animations.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/Text/Text.scss","webpack://./src/global-styles/_mixins.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,yGAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CClDJ,mBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAQR,oBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAQR,2BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,uBAAA,CACA,SAAA,CAAA,CAQR,4BACI,GACI,uBAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,yBACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,2BAAA,CACA,SAAA,CAAA,CAQR,0BACI,GACI,2BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,+BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,2BAAA,CACA,SAAA,CAAA,CAQR,gCACI,GACI,2BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,yBACI,GACI,0BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,0BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,0BAAA,CACA,SAAA,CAAA,CClIR,EAEI,qBAAA,CCVI,iBC4ZJ,kBAAA,CACA,cAAA,CACA,eAAA,CD1ZI,gBCkZJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDjZI,kBCwYJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDvYI,cC8XJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CD3XI,iBCmXJ,kBAAA,CACA,cAAA,CACA,gBAAA,CDjXI,4BC0WJ,kBAAA,CACA,cAAA,CACA,gBAAA,CDxWI,gBC0VJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CDzVI,2BC4VJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CD3VI,kBC4UJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CD3UI,6BCkUJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CDjUI,cCwTJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CDrTI,iBC6SJ,kBAAA,CACA,cAAA,CACA,eAAA,CD3SI,4BCoSJ,kBAAA,CACA,cAAA,CACA,eAAA,CDlSI,wBC0RJ,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CDzRI,gBCmQJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDlQI,2BCqQJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDpQI,uBCuQJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CDvQI,kBC0OJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDzOI,yBC4OJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CD5OI,6BC4NJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CD3NI,cC2MJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CD1MI,qBC6MJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CD3MI,iBC4LJ,kBAAA,CACA,cAAA,CACA,gBAAA,CD1LI,4BCmLJ,kBAAA,CACA,cAAA,CACA,gBAAA,CDjLI,wBCyKJ,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,gBAAA,CDxKI,gBCkJJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CDjJI,2BCoJJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CDnJI,uBCsJJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CDtJI,kBCyHJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CDxHI,6BC+GJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CD9GI,yBCuHJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CDvHI,cC0FJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CDzFI,qBC4FJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,gBAAA,CD1FI,iBC2EJ,kBAAA,CACA,cAAA,CACA,eAAA,CDzEI,4BCkEJ,kBAAA,CACA,cAAA,CACA,eAAA,CDhEI,wBCwDJ,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CDvDI,gBCuCJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDtCI,uBCyCJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CDzCI,kBCkBJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CDjBI,yBCoBJ,kBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CDpBI,cCHJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CDII,qBCDJ,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA",sourcesContent:["@font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-italic.ttf) format('truetype');\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.ttf) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-italic.ttf) format('truetype');\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.ttf) format('truetype');\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-italic.ttf) format('truetype');\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.ttf) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-italic.ttf) format('truetype');\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.ttf) format('truetype');\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }","@mixin Animation-FadeIn {\n    animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut {\n    animation: fade-out 0.2s ease-out both;\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@mixin Animation-SlideIn {\n    animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes slide-in-bottom {\n    0% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-SlideOut {\n    animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n@keyframes slide-out-bottom {\n    0% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromAbove {\n    animation: fade-in-above 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-above {\n    0% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(-3rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromAbove {\n    animation: fade-out-above 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-above {\n    0% {\n        transform: translateY(-3rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromAbove-small {\n    animation: fade-in-above-small 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-above-small {\n    0% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(-2rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromAbove-small {\n    animation: fade-out-above-small 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-above-small {\n    0% {\n        transform: translateY(-2rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromBelow {\n    animation: fade-in-below 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-below {\n    0% {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0.5rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromBelow {\n    animation: fade-out-below 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-below {\n    0% {\n        transform: translateY(0.5rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n}\n\n","@import './spacing';\n@import './radius';\n@import './colors';\n@import './gradients';\n@import './fonts';\n@import './mixins';\n@import './variables';\n@import './animations';\n@import './backgrounds';\n@import './focus';\n@import './shadows';\n\n*\n{\n    box-sizing: border-box;\n}\n","@use '../../global-styles/' as *;\n\n.Text {\n    &.xs {\n        &-regular {\n            @include Text-xsRegular;\n        }\n\n        &-medium {\n            @include Text-xsMedium;\n        }\n\n        &-semiBold {\n            @include Text-xsSemibold;\n        }\n\n        &-bold {\n            @include Text-xs-Bold;\n        }\n    }\n\n    &.sm {\n        &-regular {\n            @include Text-smRegular;\n        }\n\n        &-regular-underlined {\n            @include Text-smRegular-underlined\n        }\n\n        &-medium {\n            @include Text-smMedium\n        }\n\n        &-medium-underlined {\n            @include Text-sm-Medium-underlined\n        }\n\n        &-semiBold {\n            @include Text-smSemibold\n        }\n\n        &-semiBold-underlined {\n            @include Text-smSemibold-underlined\n        }\n\n        &-bold {\n            @include Text-sm-Bold\n        }\n    }\n\n    &.md {\n        &-regular {\n            @include Text-mdRegular;\n        }\n\n        &-regular-underlined {\n            @include Text-mdRegular-underlined\n        }\n\n        &-regular-italic {\n            @include Text-mdRegular-italic\n        }\n\n        &-medium {\n            @include Text-mdMedium\n        }\n\n        &-medium-underlined {\n            @include Text-md-Medium-underlined\n        }\n\n        &-medium-italic {\n            @include Text-mdMedium-italic\n        }\n\n        &-semiBold {\n            @include Text-mdSemibold\n        }\n\n        &-semiBold-italic {\n            @include Text-mdSemibold-italic\n        }\n\n        &-semibold-underlined {\n            @include Text-mdSemibold-underlined\n        }\n\n        &-bold {\n            @include Text-mdBold\n        }\n\n        &-bold-italic {\n            @include Text-mdBold-italic\n        }\n    }\n\n    &.lg {\n        &-regular {\n            @include Text-lgRegular;\n        }\n\n        &-regular-underlined {\n            @include Text-lgRegular-underlined\n        }\n\n        &-regular-italic {\n            @include Text-lgRegular-italic\n        }\n\n        &-medium {\n            @include Text-lgMedium\n        }\n\n        &-medium-underlined {\n            @include Text-lg-Medium-underlined\n        }\n\n        &-medium-italic {\n            @include Text-lgMedium-italic\n        }\n\n        &-semiBold {\n            @include Text-lgSemibold\n        }\n\n        &-semiBold-underlined {\n            @include Text-lgSemibold-underlined\n        }\n\n        &-semiBold-italic {\n            @include Text-lgSemibold-italic\n        }\n\n        &-bold {\n            @include Text-lgBold\n        }\n\n        &-bold-italic {\n            @include Text-lgBold-italic\n        }\n    }\n\n    &.xl {\n        &-regular {\n            @include Text-xlRegular;\n        }\n\n        &-regular-underlined {\n            @include Text-xlRegular-underlined\n        }\n\n        &-regular-italic {\n            @include Text-xlRegular-italic\n        }\n\n        &-medium {\n            @include Text-xlMedium\n        }\n\n        &-medium-italic {\n            @include Text-xlMedium-italic\n        }\n\n        &-semiBold {\n            @include Text-xlSemibold\n        }\n\n        &-semiBold-italic {\n            @include Text-xlSemibold-italic\n        }\n\n        &-bold {\n            @include Text-xlBold\n        }\n\n        &-bold-italic {\n            @include Text-xlBold-italic\n        }\n    }\n}","@mixin Display-2xlBold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlSemibold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlMedium {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlRegular {\n    font-family: DMSans;\n    font-size: 72px;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-xlBold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: bold;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlSemibold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 600;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlMedium {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 500;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlRegular {\n    font-family: DMSans;\n    font-size: 60px;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-lgBold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgSemibold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgMedium {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgRegular {\n    font-family: DMSans;\n    font-size: 48px;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-mdBold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: bold;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdSemibold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 600;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdMedium {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdRegular {\n    font-family: DMSans;\n    font-size: 36px;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-smBold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: bold;\n    line-height: 1.27;\n}\n@mixin Display-smSemibold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.27;\n}\n@mixin Display-smMedium {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 1.27;\n}\n@mixin Display-sm-Medium-italic {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.47;\n}\n@mixin Display-smRegular {\n    font-family: DMSans;\n    font-size: 30px;\n    line-height: 1.27;\n}\n@mixin Display-xsBold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 1.33;\n}\n@mixin Display-xsSemibold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium-italic {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Display-xsRegular {\n    font-family: DMSans;\n    font-size: 24px;\n    line-height: 1.33;\n}\n@mixin Text-xlBold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xlBold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-underlined {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-lgBold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1.56;\n}\n@mixin Text-lgBold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lg-Medium-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-mdBold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-mdBold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-md-Medium-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-sm-Bold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smMedium {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-sm-Medium-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-smRegular-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-smRegular {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-xs-Bold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xsSemibold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xsMedium {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xsRegular {\n    font-family: DMSans;\n    font-size: 12px;\n    line-height: 1.5;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);