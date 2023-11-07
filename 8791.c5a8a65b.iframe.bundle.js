"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[8791],{"./src/components/SelectBox/SelectBox.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{j:function(){return SelectBox_SelectBox_SelectBox}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),react_select_creatable_esm=__webpack_require__("./node_modules/react-select/creatable/dist/react-select-creatable.esm.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SelectBox=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/SelectBox/SelectBox.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SelectBox.Z,options),SelectBox.Z&&SelectBox.Z.locals&&SelectBox.Z.locals;var objectid=__webpack_require__("./node_modules/bson-objectid/objectid.js"),objectid_default=__webpack_require__.n(objectid),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectBox_SelectBox_SelectBox=({className:className,defaultValue:defaultValue,defaultOptions:defaultOptions,label:label,multi:multi,disabled:disabled,searchable:searchable,creatable:creatable,onSelect:onSelect,...props})=>{const[options,setOptions]=(0,react.useState)(defaultOptions),[value,setValue]=(0,react.useState)(defaultValue),handleOnChange=choice=>{onSelect(choice),setValue(choice)},createOption=label=>({label:label,value:objectid_default()().toHexString()});return(0,jsx_runtime.jsx)("div",{className:`SelectBox ${void 0!==className?className:""}`,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("label",{className:"SelectBox__label",children:label}),creatable?(0,jsx_runtime.jsx)(react_select_creatable_esm.Z,{className:"SelectBox__Selector",classNamePrefix:"SelectBox__Selector",isDisabled:disabled,isMulti:multi,isSearchable:searchable,isClearable:!1,blurInputOnSelect:!0,onChange:choice=>handleOnChange(choice),onCreateOption:inputValue=>{const newOption=createOption(inputValue);setOptions((prev=>[...prev,newOption])),setValue(newOption)},captureMenuScroll:!0,options:options,value:value}):(0,jsx_runtime.jsx)(react_select_esm.ZP,{className:"SelectBox__Selector",classNamePrefix:"SelectBox__Selector",isDisabled:disabled,isMulti:multi,isSearchable:searchable,isClearable:!1,blurInputOnSelect:!0,onChange:choice=>handleOnChange(choice),captureMenuScroll:!0,options:options,value:value})]})})};SelectBox_SelectBox_SelectBox.displayName="SelectBox",SelectBox_SelectBox_SelectBox.propTypes={className:prop_types_default().string,options:prop_types_default().array,label:prop_types_default().string,multi:prop_types_default().bool,disabled:prop_types_default().bool,searchable:prop_types_default().bool,creatable:prop_types_default().bool,defaultValue:prop_types_default().any,onSelect:prop_types_default().func},SelectBox_SelectBox_SelectBox.defaultProps={className:void 0,options:void 0,label:"Label",multi:!1,disabled:!1,creatable:!1,searchable:!1,defaultValue:void 0,onSelect:()=>{}},SelectBox_SelectBox_SelectBox.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},options:{defaultValue:{value:"undefined",computed:!0},description:"Array of options for the select box.",type:{name:"array"},required:!1},label:{defaultValue:{value:"'Label'",computed:!1},description:"Label for the select box.",type:{name:"string"},required:!1},multi:{defaultValue:{value:"false",computed:!1},description:"Can select multiple elements?",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disables the select box when set to true.",type:{name:"bool"},required:!1},creatable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},searchable:{defaultValue:{value:"false",computed:!1},description:"Enables searching for options.",type:{name:"bool"},required:!1},defaultValue:{defaultValue:{value:"undefined",computed:!0},description:"The default value for the select box.",type:{name:"any"},required:!1},onSelect:{defaultValue:{value:"() => {}",computed:!1},description:"Callback function when an option is selected.",type:{name:"func"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/SelectBox/SelectBox.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-italic.ttf) format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.ttf) format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-italic.ttf) format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.ttf) format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-italic.ttf) format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.ttf) format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-italic.ttf) format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.ttf) format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}100%{transform:translateY(1000px);opacity:0}}@keyframes fade-in-above{0%{transform:translateY(-100px);opacity:0}100%{transform:translateY(-3rem);opacity:1}}@keyframes fade-out-above{0%{transform:translateY(-3rem);opacity:1}100%{transform:translateY(-100px);opacity:0}}@keyframes fade-in-above-small{0%{transform:translateY(-100px);opacity:0}100%{transform:translateY(-2rem);opacity:1}}@keyframes fade-out-above-small{0%{transform:translateY(-2rem);opacity:1}100%{transform:translateY(-100px);opacity:0}}@keyframes fade-in-below{0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0.5rem);opacity:1}}@keyframes fade-out-below{0%{transform:translateY(0.5rem);opacity:1}100%{transform:translateY(50px);opacity:0}}*{box-sizing:border-box}.SelectBox{display:flex;flex-direction:column;flex-grow:1}.SelectBox__label{padding-bottom:.375rem;flex-grow:1;text-align:left;color:#344054;font-family:DMSans;font-size:14px;font-weight:500;line-height:1.43}.SelectBox__Selector__control{border-radius:.5rem !important;min-height:44px !important;color:#101828;font-family:DMSans;font-size:16px;line-height:1.5;box-shadow:0 1px 2px 0 rgba(16,24,40,.05);border:solid 1px #d0d5dd !important}.SelectBox__Selector__control--is-focused{box-shadow:0 0 0 4px rgba(102,112,133,.24),0 1px 2px 0 rgba(16,24,40,.05) !important;outline:none;border:none}.SelectBox__Selector__multi-value{border-radius:.375rem !important;border:solid 1px #d9d6fe !important;background:#f9fafb !important;font-family:DMSans;font-size:14px;font-weight:500;line-height:1.43;border-color:#eaecf0;color:#98a2b3 !important}.SelectBox__Selector__multi-value__remove{background:rgba(0,0,0,0)}.SelectBox__Selector__multi-value__remove:hover{background:rgba(0,0,0,0) !important;cursor:pointer;color:#667085 !important}.SelectBox__Selector__value-container{padding-left:14px;padding-right:14px}.SelectBox__Selector__indicator-separator{display:none}.SelectBox__Selector__value-container{padding:4px 6px !important}.SelectBox__Selector__menu{margin-top:.5rem !important;border-radius:.5rem !important;background-color:#fff !important;border:solid 1px #eaecf0 !important;box-shadow:0 4px 6px -2px rgba(16,24,40,.03),0 12px 16px -4px rgba(16,24,40,.08) !important}.SelectBox__Selector__menu-list{padding:0 !important;padding:6px !important}.SelectBox__Selector__menu-notice{font-family:DMSans;font-size:14px;font-weight:600;line-height:1.43}.SelectBox__Selector__option{padding:9px 10px !important;color:#344054 !important;cursor:pointer !important;font-family:DMSans;font-size:14px;font-weight:600;line-height:1.43;border-radius:6px !important}.SelectBox__Selector__option--is-focused{background:#f9fafb !important}.SelectBox__Selector__option--is-selected{background:#fac515 !important}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/_animations.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/SelectBox/SelectBox.scss","webpack://./src/global-styles/_spacing.scss","webpack://./src/global-styles/_colors.scss","webpack://./src/global-styles/_mixins.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,yGAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CClDJ,mBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAQR,oBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAQR,2BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,uBAAA,CACA,SAAA,CAAA,CAQR,4BACI,GACI,uBAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,yBACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,2BAAA,CACA,SAAA,CAAA,CAQR,0BACI,GACI,2BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,+BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,2BAAA,CACA,SAAA,CAAA,CAQR,gCACI,GACI,2BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,yBACI,GACI,0BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,0BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,0BAAA,CACA,SAAA,CAAA,CClIR,EAEI,qBAAA,CCZJ,WAEI,YAAA,CACA,qBAAA,CACA,WAAA,CAEH,kBACO,sBCNK,CDOL,WAAA,CACA,eAAA,CACA,aEsCS,CCsUb,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CHzWI,8BAEI,8BAAA,CACA,0BAAA,CACA,aE8BK,CC6Sb,kBAAA,CACA,cAAA,CACA,eAAA,CH3UQ,yCAAA,CACA,mCAAA,CAEA,0CAEI,oFAAA,CAEI,YAAA,CACA,WAAA,CAIZ,kCAEI,gCAAA,CACA,mCAAA,CACA,6BAAA,CGgVR,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CHjVQ,oBEGK,CFFL,wBAAA,CAEA,0CAEI,wBAAA,CAEA,gDAEI,mCAAA,CACA,cAAA,CACA,wBAAA,CAKZ,sCAGI,iBAAA,CACA,kBAAA,CAGJ,0CAEI,YAAA,CAGJ,sCAEI,0BAAA,CAGJ,2BAEG,2BAAA,CACA,8BAAA,CACA,gCAAA,CACA,mCAAA,CACA,2FAAA,CAGC,gCAEI,oBAAA,CACA,sBAAA,CAGJ,kCGwRR,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CHrRI,6BAEI,2BAAA,CACA,wBAAA,CACA,yBAAA,CG8QR,kBAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CH/QQ,4BAAA,CAEA,yCAEI,6BAAA,CAGJ,0CAEI,6BAAA",sourcesContent:["@font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-italic.ttf) format('truetype');\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.ttf) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-italic.ttf) format('truetype');\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.ttf) format('truetype');\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-italic.ttf) format('truetype');\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.ttf) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-italic.ttf) format('truetype');\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.ttf) format('truetype');\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }","@mixin Animation-FadeIn {\n    animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut {\n    animation: fade-out 0.2s ease-out both;\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@mixin Animation-SlideIn {\n    animation: slide-in-bottom 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes slide-in-bottom {\n    0% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-SlideOut {\n    animation: slide-out-bottom 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n@keyframes slide-out-bottom {\n    0% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromAbove {\n    animation: fade-in-above 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-above {\n    0% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(-3rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromAbove {\n    animation: fade-out-above 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-above {\n    0% {\n        transform: translateY(-3rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromAbove-small {\n    animation: fade-in-above-small 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-above-small {\n    0% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(-2rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromAbove-small {\n    animation: fade-out-above-small 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-above-small {\n    0% {\n        transform: translateY(-2rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromBelow {\n    animation: fade-in-below 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-below {\n    0% {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0.5rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromBelow {\n    animation: fade-out-below 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-below {\n    0% {\n        transform: translateY(0.5rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n}\n\n","@import './spacing';\n@import './radius';\n@import './colors';\n@import './gradients';\n@import './fonts';\n@import './mixins';\n@import './variables';\n@import './animations';\n@import './backgrounds';\n@import './focus';\n@import './shadows';\n\n*\n{\n    box-sizing: border-box;\n}\n","@use '../../global-styles/' as *;\n\n.SelectBox\n{\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n\n\t&__label {\n        padding-bottom: $spacing-sm;\n        flex-grow: 1;\n        text-align: left;\n        color: $color-gray-700;\n        @include Text-smMedium;\n    }\n\n    &__Selector\n    {\n        &__control\n        {\n            border-radius: $radius-md !important;\n            min-height: 44px !important;\n            color: $color-gray-900;\n            @include Text-mdRegular;\n            box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);\n            border: solid 1px $color-gray-300 !important;\n\n            &--is-focused\n            {\n                box-shadow: 0 0 0 4px rgba(102, 112, 133, 0.24),\n                0 1px 2px 0 rgba(16, 24, 40, 0.05) !important;\n                    outline: none;\n                    border: none;\n            }\n        }\n\n        &__multi-value\n        {\n            border-radius: 0.375rem !important;\n            border: solid 1px #d9d6fe !important;\n            background: $color-gray-50 !important;\n            @include Text-smMedium;\n            border-color: $color-gray-200;\n            color: $color-gray-400 !important;\n\n            &__remove\n            {\n                background: transparent;\n\n                &:hover\n                {\n                    background: transparent !important;\n                    cursor: pointer;\n                    color: $color-gray-500 !important;\n                }\n            }\n        }\n\n        &__value-container\n        {\n            // padding: 10px 14px !important;\n            padding-left: 14px;\n            padding-right: 14px;\n        }\n        \n        &__indicator-separator\n        {\n            display: none;\n        }\n\n        &__value-container\n        {\n            padding: 4px 6px !important;\n        }\n\n        &__menu\n        {\n           margin-top: 0.5rem  !important;\n           border-radius: $radius-md !important;\n           background-color: $color-base-white !important;\n           border: solid 1px $color-gray-200 !important;\n           box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03),\n            0 12px 16px -4px rgba(16, 24, 40, 0.08) !important;\n\n            &-list\n            {\n                padding: 0 !important;\n                padding: 6px !important;\n            }\n\n            &-notice\n            {\n                @include Text-smSemibold;\n            }\n        }\n\n        &__option\n        {\n            padding: 9px 10px !important;\n            color: $color-gray-700 !important;\n            cursor: pointer !important;\n            @include Text-smSemibold;\n            border-radius: 6px !important;\n\n            &--is-focused\n            {\n                background: $color-gray-50 !important;\n            }\n\n            &--is-selected\n            {\n                background: $color-brand-400 !important;\n            }\n        }\n    }\n}\n","$spacing-none: 0rem;\n$spacing-xxs: 0.125rem;\n$spacing-xs: 0.25rem;\n$spacing-sm: 0.375rem;\n$spacing-md: 0.5rem;\n$spacing-lg: 0.75rem;\n$spacing-xl: 1rem;\n$spacing-2xl: 1.25rem;\n$spacing-3xl: 1.5rem;\n$spacing-4xl: 2rem;\n$spacing-5xl: 2.5rem;\n$spacing-6xl: 3rem;\n$spacing-7xl: 4rem;\n$spacing-8xl: 5rem;\n$spacing-9xl: 6rem;\n$spacing-10xl: 8rem;\n$spacing-11xl: 10rem;\n\n$width-xxs: 20rem;\n$width-xs: 24rem;\n$width-sm: 30rem;\n$width-md: 35rem;\n$width-lg: 40rem;\n$width-xl: 48rem;\n$width-2xl: 64rem;\n$width-3xl: 80rem;\n$width-4xl: 90rem;\n$width-5xl: 100rem;\n$width-6xl: 120rem;\n\n$container-padding-mobile: 1rem;\n$container-padding-desktop: 2rem;\n$container-max-width-desktop: 80rem;\n\n$paragraph-max-width: 20rem;\n","$color-base-white: #fff;\n$color-base-black: #000;\n\n$color-success-25: #f6fef9;\n$color-success-50: #ecfdf3;\n$color-success-100: #dcfae6;\n$color-success-200: #abefc6;\n$color-success-300: #75e0a7;\n$color-success-400: #47cd89;\n$color-success-500: #17b26a;\n$color-success-600: #079455;\n$color-success-700: #067647;\n$color-success-800: #085d3a;\n$color-success-900: #074d31;\n$color-success-950: #053321;\n\n$color-error-25: #fffbfa;\n$color-error-50: #fef3f2;\n$color-error-100: #fee4e2;\n$color-error-200: #fecdca;\n$color-error-300: #fda29b;\n$color-error-400: #f97066;\n$color-error-500: #f04438;\n$color-error-600: #d92d20;\n$color-error-700: #b42318;\n$color-error-800: #912018;\n$color-error-900: #7a271a;\n$color-error-950: #55160c;\n\n$color-warning-25: #fffcf5;\n$color-warning-50: #fffaeb;\n$color-warning-100: #fef0c7;\n$color-warning-200: #fedf89;\n$color-warning-300: #fec84b;\n$color-warning-400: #fdb022;\n$color-warning-500: #f79009;\n$color-warning-600: #dc6803;\n$color-warning-700: #b54708;\n$color-warning-800: #93370d;\n$color-warning-900: #7a2e0e;\n$color-warning-950: #4e1d09;\n\n$color-gray-25: #fcfcfd;\n$color-gray-50: #f9fafb;\n$color-gray-100: #f2f4f7;\n$color-gray-200: #eaecf0;\n$color-gray-300: #d0d5dd;\n$color-gray-400: #98a2b3;\n$color-gray-500: #667085;\n$color-gray-600: #475467;\n$color-gray-700: #344054;\n$color-gray-800: #182230;\n$color-gray-900: #101828;\n$color-gray-950: #0c111d;\n\n$color-brand-25: #fefdf0;\n$color-brand-50: #fefbe8;\n$color-brand-100: #fef7c3;\n$color-brand-200: #feee95;\n$color-brand-300: #fde272;\n$color-brand-400: #fac515;\n$color-brand-500: #eaaa08;\n$color-brand-600: #ca8504;\n$color-brand-700: #a15c07;\n$color-brand-800: #854a0e;\n$color-brand-900: #713b12;\n$color-brand-950: #542c0d;\n\n$color-grayblue-25: #FCFCFD;\n$color-grayblue-50: #F8F9FC;\n$color-grayblue-100: #EAECF5;\n$color-grayblue-200: #D5D9EB;\n$color-grayblue-300: #B3B8D8;\n$color-grayblue-400: #717BBC;\n$color-grayblue-500: #4E5BA6;\n$color-grayblue-600: #3E4784;\n$color-grayblue-700: #363F72;\n$color-grayblue-800: #293056;\n$color-grayblue-900: #101323;\n$color-grayblue-950: #0D0F1C;\n\n$color-lightblue-25: #F5FBFF;\n$color-lightblue-50: #F0F9FF;\n$color-lightblue-100: #E0F2FE;\n$color-lightblue-200: #B9E6FE;\n$color-lightblue-300: #7CD4FC;\n$color-lightblue-400: #36BFFA;\n$color-lightblue-500: #0BA5EC;\n$color-lightblue-600: #0086C9;\n$color-lightblue-700: #026AA2;\n$color-lightblue-800: #065986;\n$color-lightblue-900: #0B4A6F;\n$color-lightblue-950: #062C41;\n\n$color-blue-25: #F5FAFF;\n$color-blue-50: #EFF8FF;\n$color-blue-100: #D1E9FF;\n$color-blue-200: #B2DDFF;\n$color-blue-300: #84CAFF;\n$color-blue-400: #53B1FD;\n$color-blue-500: #2E90FA;\n$color-blue-600: #1570EF;\n$color-blue-700: #175CD3;\n$color-blue-800: #1849A9;\n$color-blue-900: #194185;\n$color-blue-950: #102A56;\n\n$color-indigo-25: #F5F8FF;\n$color-indigo-50: #EEF4FF;\n$color-indigo-100: #E0EAFF;\n$color-indigo-200: #C7D7FE;\n$color-indigo-300: #A4BCFD;\n$color-indigo-400: #8098F9;\n$color-indigo-500: #6172F3;\n$color-indigo-600: #444CE7;\n$color-indigo-700: #3538DC;\n$color-indigo-800: #2D31A6;\n$color-indigo-900: #2D3282;\n$color-indigo-950: #1F235B;\n\n$color-purple-25: #FAFAFF;\n$color-purple-50: #F4F3FF;\n$color-purple-100: #EBE9FE;\n$color-purple-200: #D9D6FE;\n$color-purple-300: #BDB4FE;\n$color-purple-400: #9B8AFB;\n$color-purple-500: #7A5AF8;\n$color-purple-600: #6938EF;\n$color-purple-700: #5925DC;\n$color-purple-800: #4A1FB8;\n$color-purple-900: #3E1C96;\n$color-purple-950: #27115F;\n\n$color-pink-25: #FEF6FB;\n$color-pink-50: #FDF2FA;\n$color-pink-100: #FCE7F6;\n$color-pink-200: #FCCEEE;\n$color-pink-300: #FAA7E0;\n$color-pink-400: #F670C7;\n$color-pink-500: #EE46BC;\n$color-pink-600: #DD2590;\n$color-pink-700: #C11574;\n$color-pink-800: #9E165E;\n$color-pink-900: #851651;\n$color-pink-950: #4E0D30;\n\n$color-orange-25: #FEFAF5;\n$color-orange-50: #FEF6EE;\n$color-orange-100: #FDEAD7;\n$color-orange-200: #F9DBAF;\n$color-orange-300: #F7B27A;\n$color-orange-400: #F38744;\n$color-orange-500: #EF6820;\n$color-orange-600: #E04F16;\n$color-orange-700: #B93815;\n$color-orange-800: #932F19;\n$color-orange-900: #772917;\n$color-orange-950: #511C10;\n","@mixin Display-2xlBold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlSemibold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlMedium {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlRegular {\n    font-family: DMSans;\n    font-size: 72px;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-xlBold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: bold;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlSemibold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 600;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlMedium {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 500;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlRegular {\n    font-family: DMSans;\n    font-size: 60px;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-lgBold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgSemibold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgMedium {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgRegular {\n    font-family: DMSans;\n    font-size: 48px;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-mdBold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: bold;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdSemibold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 600;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdMedium {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdRegular {\n    font-family: DMSans;\n    font-size: 36px;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-smBold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: bold;\n    line-height: 1.27;\n}\n@mixin Display-smSemibold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.27;\n}\n@mixin Display-smMedium {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 1.27;\n}\n@mixin Display-sm-Medium-italic {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.47;\n}\n@mixin Display-smRegular {\n    font-family: DMSans;\n    font-size: 30px;\n    line-height: 1.27;\n}\n@mixin Display-xsBold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 1.33;\n}\n@mixin Display-xsSemibold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium-italic {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Display-xsRegular {\n    font-family: DMSans;\n    font-size: 24px;\n    line-height: 1.33;\n}\n@mixin Text-xlBold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xlBold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-underlined {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-lgBold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1.56;\n}\n@mixin Text-lgBold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lg-Medium-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-mdBold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-mdBold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-md-Medium-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-sm-Bold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smMedium {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-sm-Medium-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-smRegular-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-smRegular {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-xs-Bold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xsSemibold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xsMedium {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xsRegular {\n    font-family: DMSans;\n    font-size: 12px;\n    line-height: 1.5;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);