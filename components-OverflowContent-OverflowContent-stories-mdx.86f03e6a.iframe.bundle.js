"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[1552],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(7587).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/OverflowContent/OverflowContent.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return OverflowContent_OverflowContent_OverflowContent}});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OverflowContent=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/OverflowContent/OverflowContent.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OverflowContent.Z,options),OverflowContent.Z&&OverflowContent.Z.locals&&OverflowContent.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OverflowContent_OverflowContent_OverflowContent=({className:className,children:children,show:show,...props})=>{const[fadeOut,setFadeOut]=(0,react.useState)(!1),[visible,setVisible]=(0,react.useState)(show);(0,react.useEffect)((()=>{!1===show?handleShowDelay():setVisible(!0)}),[show]);const handleShowDelay=()=>{setFadeOut(!0),setTimeout((()=>{setVisible(!1),setFadeOut(!1)}),500)};return visible?(0,jsx_runtime.jsx)("div",{className:`OverflowContent ${className||""} ${fadeOut?"fadeOut":"fadeIn"}`,...props,children:children}):null};OverflowContent_OverflowContent_OverflowContent.displayName="OverflowContent",OverflowContent_OverflowContent_OverflowContent.propTypes={className:prop_types_default().string,show:prop_types_default().bool},OverflowContent_OverflowContent_OverflowContent.defaultProps={className:void 0,show:!1},OverflowContent_OverflowContent_OverflowContent.__docgenInfo={description:"",methods:[],displayName:"OverflowContent",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},show:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./src/components/OverflowContent/OverflowContent.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_OverflowContent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/OverflowContent/OverflowContent.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OverflowContent__WEBPACK_IMPORTED_MODULE_2__.Q,{...args,children:"ok"});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/OverflowContent",component:_OverflowContent__WEBPACK_IMPORTED_MODULE_2__.Q}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"overflowcontent",children:"OverflowContent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{show:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_OverflowContent__WEBPACK_IMPORTED_MODULE_2__.Q})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={show:!0},defaultStory.parameters={storySource:{source:"args => <OverflowContent {...args}>\n\tok\n\t</OverflowContent>"}};const componentMeta={title:"Components/OverflowContent",component:_OverflowContent__WEBPACK_IMPORTED_MODULE_2__.Q,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/OverflowContent/OverflowContent.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-italic.ttf) format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.ttf) format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-italic.ttf) format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.ttf) format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-italic.ttf) format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.ttf) format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-italic.ttf) format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.ttf) format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}100%{transform:translateY(1000px);opacity:0}}@keyframes fade-in-above{0%{transform:translateY(-100px);opacity:0}100%{transform:translateY(-3rem);opacity:1}}@keyframes fade-out-above{0%{transform:translateY(-3rem);opacity:1}100%{transform:translateY(-100px);opacity:0}}@keyframes fade-in-above-small{0%{transform:translateY(-100px);opacity:0}100%{transform:translateY(-2rem);opacity:1}}@keyframes fade-out-above-small{0%{transform:translateY(-2rem);opacity:1}100%{transform:translateY(-100px);opacity:0}}@keyframes fade-in-below{0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0.5rem);opacity:1}}@keyframes fade-out-below{0%{transform:translateY(0.5rem);opacity:1}100%{transform:translateY(50px);opacity:0}}*{box-sizing:border-box}.OverflowContent{position:fixed;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:16px;background:#fff;border:solid 1px #eaecf0;box-shadow:0 4px 6px -2px rgba(16,24,40,.03),0 12px 16px -4px rgba(16,24,40,.08);border-radius:8px;padding:16px;z-index:50000;bottom:5rem;width:380px;left:calc(50% - 190px)}.OverflowContent.fadeIn{animation:slide-in-bottom .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.OverflowContent.fadeOut{animation:slide-out-bottom .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/_animations.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/OverflowContent/OverflowContent.scss","webpack://./src/global-styles/_colors.scss","webpack://./src/global-styles/_shadows.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,yGAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,yGAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CClDJ,mBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAQR,oBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAQR,2BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,uBAAA,CACA,SAAA,CAAA,CAQR,4BACI,GACI,uBAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,yBACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,2BAAA,CACA,SAAA,CAAA,CAQR,0BACI,GACI,2BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,+BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,2BAAA,CACA,SAAA,CAAA,CAQR,gCACI,GACI,2BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,yBACI,GACI,0BAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CAQR,0BACI,GACI,4BAAA,CACA,SAAA,CAEJ,KACI,0BAAA,CACA,SAAA,CAAA,CClIR,EAEI,qBAAA,CCZJ,iBAEI,cAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,sBAAA,CACA,QAAA,CACH,eCVkB,CDWf,wBAAA,CEMA,gFAAA,CFJA,iBAAA,CACA,YAAA,CACA,aAAA,CACA,WAAA,CACA,WAAA,CACA,sBAAA,CAEA,wBFOA,uEAAA,CEFA,yBFiBA,yEAAA",sourcesContent:["@font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-italic.ttf) format('truetype');\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.ttf) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-italic.ttf) format('truetype');\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.ttf) format('truetype');\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-italic.ttf) format('truetype');\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.ttf) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-italic.ttf) format('truetype');\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.ttf) format('truetype');\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }","@mixin Animation-FadeIn {\n    animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut {\n    animation: fade-out 0.2s ease-out both;\n}\n\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@mixin Animation-SlideIn {\n    animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes slide-in-bottom {\n    0% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-SlideOut {\n    animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n@keyframes slide-out-bottom {\n    0% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromAbove {\n    animation: fade-in-above 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-above {\n    0% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(-3rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromAbove {\n    animation: fade-out-above 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-above {\n    0% {\n        transform: translateY(-3rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromAbove-small {\n    animation: fade-in-above-small 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-above-small {\n    0% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(-2rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromAbove-small {\n    animation: fade-out-above-small 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-above-small {\n    0% {\n        transform: translateY(-2rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@mixin Animation-FadeIn-FromBelow {\n    animation: fade-in-below 0.25s ease-in-out both;\n}\n\n@keyframes fade-in-below {\n    0% {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0.5rem);\n        opacity: 1;\n    }\n}\n\n@mixin Animation-FadeOut-FromBelow {\n    animation: fade-out-below 0.25s ease-in-out both;\n}\n\n@keyframes fade-out-below {\n    0% {\n        transform: translateY(0.5rem);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n}\n\n","@import './spacing';\n@import './radius';\n@import './colors';\n@import './gradients';\n@import './fonts';\n@import './mixins';\n@import './variables';\n@import './animations';\n@import './backgrounds';\n@import './focus';\n@import './shadows';\n\n*\n{\n    box-sizing: border-box;\n}\n","@use '../../global-styles/' as *;\n\n.OverflowContent\n{\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 16px;\n\tbackground: $color-base-white;\n    border: solid 1px $color-gray-200;\n    @include Shadow-lg;\n    border-radius: 8px;\n    padding: 16px;\n    z-index: 50000;\n    bottom: 5rem;\n    width: 380px;\n    left: calc(50% - 190px);\n\n    &.fadeIn\n    {\n        @include Animation-SlideIn;\n    }\n\n    &.fadeOut\n    {\n        @include Animation-SlideOut;\n    }\n}\n","$color-base-white: #fff;\n$color-base-black: #000;\n\n$color-success-25: #f6fef9;\n$color-success-50: #ecfdf3;\n$color-success-100: #dcfae6;\n$color-success-200: #abefc6;\n$color-success-300: #75e0a7;\n$color-success-400: #47cd89;\n$color-success-500: #17b26a;\n$color-success-600: #079455;\n$color-success-700: #067647;\n$color-success-800: #085d3a;\n$color-success-900: #074d31;\n$color-success-950: #053321;\n\n$color-error-25: #fffbfa;\n$color-error-50: #fef3f2;\n$color-error-100: #fee4e2;\n$color-error-200: #fecdca;\n$color-error-300: #fda29b;\n$color-error-400: #f97066;\n$color-error-500: #f04438;\n$color-error-600: #d92d20;\n$color-error-700: #b42318;\n$color-error-800: #912018;\n$color-error-900: #7a271a;\n$color-error-950: #55160c;\n\n$color-warning-25: #fffcf5;\n$color-warning-50: #fffaeb;\n$color-warning-100: #fef0c7;\n$color-warning-200: #fedf89;\n$color-warning-300: #fec84b;\n$color-warning-400: #fdb022;\n$color-warning-500: #f79009;\n$color-warning-600: #dc6803;\n$color-warning-700: #b54708;\n$color-warning-800: #93370d;\n$color-warning-900: #7a2e0e;\n$color-warning-950: #4e1d09;\n\n$color-gray-25: #fcfcfd;\n$color-gray-50: #f9fafb;\n$color-gray-100: #f2f4f7;\n$color-gray-200: #eaecf0;\n$color-gray-300: #d0d5dd;\n$color-gray-400: #98a2b3;\n$color-gray-500: #667085;\n$color-gray-600: #475467;\n$color-gray-700: #344054;\n$color-gray-800: #182230;\n$color-gray-900: #101828;\n$color-gray-950: #0c111d;\n\n$color-brand-25: #fefdf0;\n$color-brand-50: #fefbe8;\n$color-brand-100: #fef7c3;\n$color-brand-200: #feee95;\n$color-brand-300: #fde272;\n$color-brand-400: #fac515;\n$color-brand-500: #eaaa08;\n$color-brand-600: #ca8504;\n$color-brand-700: #a15c07;\n$color-brand-800: #854a0e;\n$color-brand-900: #713b12;\n$color-brand-950: #542c0d;\n\n$color-grayblue-25: #FCFCFD;\n$color-grayblue-50: #F8F9FC;\n$color-grayblue-100: #EAECF5;\n$color-grayblue-200: #D5D9EB;\n$color-grayblue-300: #B3B8D8;\n$color-grayblue-400: #717BBC;\n$color-grayblue-500: #4E5BA6;\n$color-grayblue-600: #3E4784;\n$color-grayblue-700: #363F72;\n$color-grayblue-800: #293056;\n$color-grayblue-900: #101323;\n$color-grayblue-950: #0D0F1C;\n\n$color-lightblue-25: #F5FBFF;\n$color-lightblue-50: #F0F9FF;\n$color-lightblue-100: #E0F2FE;\n$color-lightblue-200: #B9E6FE;\n$color-lightblue-300: #7CD4FC;\n$color-lightblue-400: #36BFFA;\n$color-lightblue-500: #0BA5EC;\n$color-lightblue-600: #0086C9;\n$color-lightblue-700: #026AA2;\n$color-lightblue-800: #065986;\n$color-lightblue-900: #0B4A6F;\n$color-lightblue-950: #062C41;\n\n$color-blue-25: #F5FAFF;\n$color-blue-50: #EFF8FF;\n$color-blue-100: #D1E9FF;\n$color-blue-200: #B2DDFF;\n$color-blue-300: #84CAFF;\n$color-blue-400: #53B1FD;\n$color-blue-500: #2E90FA;\n$color-blue-600: #1570EF;\n$color-blue-700: #175CD3;\n$color-blue-800: #1849A9;\n$color-blue-900: #194185;\n$color-blue-950: #102A56;\n\n$color-indigo-25: #F5F8FF;\n$color-indigo-50: #EEF4FF;\n$color-indigo-100: #E0EAFF;\n$color-indigo-200: #C7D7FE;\n$color-indigo-300: #A4BCFD;\n$color-indigo-400: #8098F9;\n$color-indigo-500: #6172F3;\n$color-indigo-600: #444CE7;\n$color-indigo-700: #3538DC;\n$color-indigo-800: #2D31A6;\n$color-indigo-900: #2D3282;\n$color-indigo-950: #1F235B;\n\n$color-purple-25: #FAFAFF;\n$color-purple-50: #F4F3FF;\n$color-purple-100: #EBE9FE;\n$color-purple-200: #D9D6FE;\n$color-purple-300: #BDB4FE;\n$color-purple-400: #9B8AFB;\n$color-purple-500: #7A5AF8;\n$color-purple-600: #6938EF;\n$color-purple-700: #5925DC;\n$color-purple-800: #4A1FB8;\n$color-purple-900: #3E1C96;\n$color-purple-950: #27115F;\n\n$color-pink-25: #FEF6FB;\n$color-pink-50: #FDF2FA;\n$color-pink-100: #FCE7F6;\n$color-pink-200: #FCCEEE;\n$color-pink-300: #FAA7E0;\n$color-pink-400: #F670C7;\n$color-pink-500: #EE46BC;\n$color-pink-600: #DD2590;\n$color-pink-700: #C11574;\n$color-pink-800: #9E165E;\n$color-pink-900: #851651;\n$color-pink-950: #4E0D30;\n\n$color-orange-25: #FEFAF5;\n$color-orange-50: #FEF6EE;\n$color-orange-100: #FDEAD7;\n$color-orange-200: #F9DBAF;\n$color-orange-300: #F7B27A;\n$color-orange-400: #F38744;\n$color-orange-500: #EF6820;\n$color-orange-600: #E04F16;\n$color-orange-700: #B93815;\n$color-orange-800: #932F19;\n$color-orange-900: #772917;\n$color-orange-950: #511C10;\n","@mixin Shadow-xs\n{\n    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);\n}\n\n@mixin Shadow-sm\n{\n    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.1);\n}\n\n@mixin Shadow-md\n{\n    box-shadow: 0 2px 4px -2px rgba(16, 24, 40, 0.06), 0 4px 8px -2px rgba(16, 24, 40, 0.1);\n}\n\n@mixin Shadow-lg\n{\n    box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08);\n}\n\n@mixin Shadow-xl\n{\n    box-shadow: 0 24px 48px -12px rgba(16, 24, 40, 0.18);\n}\n\n@mixin Shadow-2xl\n{\n    box-shadow: 0 24px 48px -12px rgba(16, 24, 40, 0.18);\n}\n\n@mixin Shadow-3xl\n{\n    box-shadow: 0 32px 64px -12px rgba(16, 24, 40, 0.14);\n}\n\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);