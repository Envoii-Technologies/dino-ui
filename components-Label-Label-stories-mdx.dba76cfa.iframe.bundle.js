"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[612],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Label/Label.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return Label_Label_Label}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Label=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Label/Label.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Label.Z,options),Label.Z&&Label.Z.locals&&Label.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label_Label_Label=({className:className,content:content,...props})=>(0,jsx_runtime.jsx)("div",{className:`Label ${void 0!==className?className:""}`,children:content});Label_Label_Label.displayName="Label",Label_Label_Label.propTypes={className:prop_types_default().string,content:prop_types_default().string},Label_Label_Label.defaultProps={className:void 0,content:"default"},Label_Label_Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},content:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/Label/Label.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Label/Label.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_2__._,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Label",component:_Label__WEBPACK_IMPORTED_MODULE_2__._}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"label",children:"Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Label__WEBPACK_IMPORTED_MODULE_2__._})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <Label {...args} />"}};const componentMeta={title:"Components/Label",component:_Label__WEBPACK_IMPORTED_MODULE_2__._,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Label/Label.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Italic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/assets/fonts/DMSans-MediumItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Medium.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_5___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBold.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_6___=new URL(__webpack_require__("./src/assets/fonts/DMSans-BoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_7___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Bold.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);___CSS_LOADER_EXPORT___.push([module.id,"@font-face{font-family:DMSans;src:url("+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}*{box-sizing:border-box}.Label{font-family:DMSans;font-size:14px;line-height:1.43;border-radius:.5rem;background:red;padding:.375rem}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/Label/Label.scss","webpack://./src/global-styles/_mixins.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CC/CJ,EAEI,qBAAA,CCPJ,OCuYI,kBAAA,CACA,cAAA,CACA,gBAAA,CDtYA,mBAAA,CACA,cAAA,CACA,eAAA",sourcesContent:['@font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Italic.ttf) format("truetype");\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Regular.ttf) format("truetype");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-MediumItalic.ttf) format("truetype");\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Medium.ttf) format("truetype");\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBoldItalic.ttf) format("truetype");\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBold.ttf) format("truetype");\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-BoldItalic.ttf) format("truetype");\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Bold.ttf) format("truetype");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }',"@import './spacing';\n@import './radius';\n@import './colors';\n@import './fonts';\n@import './mixins';\n@import './variables';\n\n*\n{\n    box-sizing: border-box;\n}\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 23.5;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-large: 80em;\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }\n","@use '../../global-styles/' as *;\n\n.Label\n{\n\t@include Text-smRegular;\n    border-radius: 0.5rem;\n    background: red;\n    padding: 0.375rem;\n}\n","@mixin Display-2xlBold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlSemibold {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlMedium {\n    font-family: DMSans;\n    font-size: 72px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-2xlRegular {\n    font-family: DMSans;\n    font-size: 72px;\n    line-height: 1.25;\n    letter-spacing: -1.44px;\n}\n@mixin Display-xlBold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: bold;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlSemibold {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 600;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlMedium {\n    font-family: DMSans;\n    font-size: 60px;\n    font-weight: 500;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-xlRegular {\n    font-family: DMSans;\n    font-size: 60px;\n    line-height: 1.2;\n    letter-spacing: -1.2px;\n}\n@mixin Display-lgBold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: bold;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgSemibold {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgMedium {\n    font-family: DMSans;\n    font-size: 48px;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-lgRegular {\n    font-family: DMSans;\n    font-size: 48px;\n    line-height: 1.25;\n    letter-spacing: -0.96px;\n}\n@mixin Display-mdBold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: bold;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdSemibold {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 600;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdMedium {\n    font-family: DMSans;\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-mdRegular {\n    font-family: DMSans;\n    font-size: 36px;\n    line-height: 1.22;\n    letter-spacing: -0.72px;\n}\n@mixin Display-smBold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: bold;\n    line-height: 1.27;\n}\n@mixin Display-smSemibold {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.27;\n}\n@mixin Display-smMedium {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 1.27;\n}\n@mixin Display-sm-Medium-italic {\n    font-family: DMSans;\n    font-size: 30px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.47;\n}\n@mixin Display-smRegular {\n    font-family: DMSans;\n    font-size: 30px;\n    line-height: 1.27;\n}\n@mixin Display-xsBold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 1.33;\n}\n@mixin Display-xsSemibold {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.33;\n}\n@mixin Display-xsMedium-italic {\n    font-family: DMSans;\n    font-size: 24px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Display-xsRegular {\n    font-family: DMSans;\n    font-size: 24px;\n    line-height: 1.33;\n}\n@mixin Text-xlBold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xlBold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xlSemibold-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xlMedium-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-italic {\n    font-family: DMSans;\n    font-size: 20px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular-underlined {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-xlRegular {\n    font-family: DMSans;\n    font-size: 20px;\n    line-height: 1.5;\n}\n@mixin Text-lgBold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1.56;\n}\n@mixin Text-lgBold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.56;\n}\n@mixin Text-lgSemibold-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lg-Medium-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.56;\n}\n@mixin Text-lgMedium-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-italic {\n    font-family: DMSans;\n    font-size: 18px;\n    font-style: italic;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular-underlined {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-lgRegular {\n    font-family: DMSans;\n    font-size: 18px;\n    line-height: 1.56;\n}\n@mixin Text-mdBold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-mdBold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: bold;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-mdSemibold-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 600;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-md-Medium-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-mdMedium-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-italic {\n    font-family: DMSans;\n    font-size: 16px;\n    font-style: italic;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular-underlined {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-mdRegular {\n    font-family: DMSans;\n    font-size: 16px;\n    line-height: 1.5;\n}\n@mixin Text-sm-Bold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smSemibold {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n}\n@mixin Text-smMedium {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-sm-Medium-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.43;\n}\n@mixin Text-smRegular-underlined {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-smRegular {\n    font-family: DMSans;\n    font-size: 14px;\n    line-height: 1.43;\n}\n@mixin Text-xs-Bold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 1.5;\n}\n@mixin Text-xsSemibold {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 1.5;\n}\n@mixin Text-xsMedium {\n    font-family: DMSans;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1.5;\n}\n@mixin Text-xsRegular {\n    font-family: DMSans;\n    font-size: 12px;\n    line-height: 1.5;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);