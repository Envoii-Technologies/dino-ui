"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[2857],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.z}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.jsx")},"./src/components/ButtonGroup/ButtonGroup.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return ButtonGroup_ButtonGroup_ButtonGroup}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonGroup=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/ButtonGroup/ButtonGroup.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonGroup.Z,options),ButtonGroup.Z&&ButtonGroup.Z.locals&&ButtonGroup.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonGroup_ButtonGroup_ButtonGroup=({className:className,children:children,compact:compact,fluid:fluid,...props})=>(0,jsx_runtime.jsx)("div",{className:`ButtonGroup ${void 0!==className?className:""} ${compact?"compact":""} ${fluid?"fluid":""}`,children:children});ButtonGroup_ButtonGroup_ButtonGroup.displayName="ButtonGroup",ButtonGroup_ButtonGroup_ButtonGroup.propTypes={className:prop_types_default().string,compact:prop_types_default().bool,fluid:prop_types_default().bool},ButtonGroup_ButtonGroup_ButtonGroup.defaultProps={className:void 0,compact:!1,fluid:!1},ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Custom class name of Component",type:{name:"string"},required:!1},compact:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fluid:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./src/components/ButtonGroup/ButtonGroup.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},compactGroup:function(){return compactGroup},customClassName:function(){return customClassName},defaultStory:function(){return defaultStory},fluid:function(){return fluid},fluidCompact:function(){return fluidCompact}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ButtonGroup/ButtonGroup.jsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__.h,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.z,{type:"secondary",label:"Button 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.z,{type:"secondary",label:"Button 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.z,{type:"secondary",iconLeft:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.gr5})]});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",a:"a",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/ButtonGroup",component:_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__.h}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"buttongroup",children:"ButtonGroup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The ButtonGroup component is a versatile tool for organizing and displaying groups of buttons in web applications. It offers features for custom styling, compact mode to save space, and fluid mode for dynamic resizing."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"key-features",children:"Key Features"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"Button Organization:"})," Easily group and organize buttons for a cohesive user interface."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"Custom Styling:"})," Apply custom CSS class names to style the ButtonGroup according to your design needs."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"Compact Mode:"})," Save screen space by enabling the compact mode."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"Fluid Mode:"})," Allow the ButtonGroup to expand and fill available space with the fluid mode."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Explore various examples of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"ButtonGroup"})," component, including default usage and customizations, to see how it can be integrated into your application:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"#default",children:"Default"}),": A basic example with default settings."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"#compact-mode",children:"Compact Mode"}),": Compact, less space consuming group."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"#fluid-mode",children:"Fluid Mode"}),": Button Group takes up horizontal parents space."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"#custom-class-name",children:"Custom Class Name"}),": A custom class name can be applied."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The ButtonGroup component, is a versatile tool for organizing and displaying buttons in web applications. This component provides a seamless way to group and style buttons for a unified user experience."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"compact-mode",children:"Compact Mode"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The compact prop is useful when you need to conserve space in your web interface. Setting compact to true will make the ButtonGroup reduce its size, ensuring efficient use of screen real estate."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Compact Group",args:{compact:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"fluid",children:"Fluid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"On the other hand, if you want the ButtonGroup to expand and occupy all available space, you can use the fluid prop:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Fluid",args:{fluid:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Fluid Compact",args:{compact:!0,fluid:!0},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"custom-class-name",children:"Custom Class Name"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The className prop allows you to apply a custom CSS class to the ButtonGroup component, making it easy to style it according to your specific requirements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Class Name",args:{children:"Label Text",className:"special-button-group"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__.h})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:'args => <ButtonGroup {...args}>\n\t\t<Button type="secondary" label="Button 1" />\n\t\t<Button type="secondary" label="Button 2" />\n\t\t<Button type="secondary" iconLeft={faGear} />\n\t</ButtonGroup>'}};const compactGroup=Template.bind({});compactGroup.storyName="Compact Group",compactGroup.args={compact:!0},compactGroup.parameters={storySource:{source:'args => <ButtonGroup {...args}>\n\t\t<Button type="secondary" label="Button 1" />\n\t\t<Button type="secondary" label="Button 2" />\n\t\t<Button type="secondary" iconLeft={faGear} />\n\t</ButtonGroup>'}};const fluid=Template.bind({});fluid.storyName="Fluid",fluid.args={fluid:!0},fluid.parameters={storySource:{source:'args => <ButtonGroup {...args}>\n\t\t<Button type="secondary" label="Button 1" />\n\t\t<Button type="secondary" label="Button 2" />\n\t\t<Button type="secondary" iconLeft={faGear} />\n\t</ButtonGroup>'}};const fluidCompact=Template.bind({});fluidCompact.storyName="Fluid Compact",fluidCompact.args={compact:!0,fluid:!0},fluidCompact.parameters={storySource:{source:'args => <ButtonGroup {...args}>\n\t\t<Button type="secondary" label="Button 1" />\n\t\t<Button type="secondary" label="Button 2" />\n\t\t<Button type="secondary" iconLeft={faGear} />\n\t</ButtonGroup>'}};const customClassName=Template.bind({});customClassName.storyName="Custom Class Name",customClassName.args={children:"Label Text",className:"special-button-group"},customClassName.parameters={storySource:{source:'args => <ButtonGroup {...args}>\n\t\t<Button type="secondary" label="Button 1" />\n\t\t<Button type="secondary" label="Button 2" />\n\t\t<Button type="secondary" iconLeft={faGear} />\n\t</ButtonGroup>'}};const componentMeta={title:"Components/ButtonGroup",component:_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__.h,tags:["stories-mdx"],includeStories:["defaultStory","compactGroup","fluid","fluidCompact","customClassName"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/ButtonGroup/ButtonGroup.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Italic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Regular.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/assets/fonts/DMSans-MediumItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Medium.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_5___=new URL(__webpack_require__("./src/assets/fonts/DMSans-SemiBold.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_6___=new URL(__webpack_require__("./src/assets/fonts/DMSans-BoldItalic.ttf"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_7___=new URL(__webpack_require__("./src/assets/fonts/DMSans-Bold.ttf"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);___CSS_LOADER_EXPORT___.push([module.id,"@font-face{font-family:DMSans;src:url("+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype");font-weight:normal;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("truetype");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("truetype");font-weight:500;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("truetype");font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("truetype");font-weight:600;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("truetype");font-weight:600;font-style:normal;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("truetype");font-weight:bold;font-style:italic;font-stretch:normal}@font-face{font-family:DMSans;src:url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("truetype");font-weight:bold;font-style:normal;font-stretch:normal}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}100%{transform:translateY(1000px);opacity:0}}*{box-sizing:border-box}.ButtonGroup{flex-grow:0;display:flex;flex-direction:row;justify-content:space-between;gap:.75rem;align-items:center}.ButtonGroup .Button:not(.Button.icon){flex-grow:1}.ButtonGroup.fluid{flex-grow:1}.ButtonGroup.compact{gap:0}.ButtonGroup.compact .Button:first-child{border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.ButtonGroup.compact .Button:not(:first-child,:last-child){border-radius:0}.ButtonGroup.compact .Button:last-child{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}',"",{version:3,sources:["webpack://./src/global-styles/_fonts.scss","webpack://./src/global-styles/_animations.scss","webpack://./src/global-styles/index.scss","webpack://./src/components/ButtonGroup/ButtonGroup.scss","webpack://./src/global-styles/_spacing.scss"],names:[],mappings:"AAAA,WACI,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CAEF,WACE,kBAAA,CACA,8DAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CCtCJ,mBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAIR,oBACI,GACE,SAAA,CAEF,KACE,SAAA,CAAA,CAIN,2BACI,GACE,4BAAA,CACA,SAAA,CAEF,KACE,uBAAA,CACA,SAAA,CAAA,CAIN,4BACI,GACI,uBAAA,CACA,SAAA,CAEJ,KACI,4BAAA,CACA,SAAA,CAAA,CC3CR,EAEI,qBAAA,CCTJ,aAEI,WAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UCHS,CDIT,kBAAA,CAEA,uCAEI,WAAA,CAGJ,mBAEI,WAAA,CAGJ,qBAEI,KAAA,CAII,yCAEI,yBAAA,CACA,4BAAA,CACA,cAAA,CAEJ,2DAEI,eAAA,CAEJ,wCAEI,wBAAA,CACA,2BAAA,CACA,aAAA",sourcesContent:['@font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Italic.ttf) format("truetype");\n    font-weight: normal;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Regular.ttf) format("truetype");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-MediumItalic.ttf) format("truetype");\n    font-weight: 500;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Medium.ttf) format("truetype");\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBoldItalic.ttf) format("truetype");\n    font-weight: 600;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-SemiBold.ttf) format("truetype");\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-BoldItalic.ttf) format("truetype");\n    font-weight: bold;\n    font-style: italic;\n    font-stretch: normal;\n  }\n  @font-face {\n    font-family: DMSans;\n    src: url(./../assets/fonts/DMSans-Bold.ttf) format("truetype");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }',"@mixin Animation-FadeIn {\n    animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@mixin Animation-FadeOut {\n    animation: fade-out 0.2s ease-out both;\n}\n\n@mixin Animation-SlideIn {\n    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\n@mixin Animation-SlideOut {\n    animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n\n@keyframes slide-in-bottom {\n    0% {\n      transform: translateY(1000px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n\n@keyframes slide-out-bottom {\n    0% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(1000px);\n        opacity: 0;\n    }\n}\n","@import './spacing';\n@import './radius';\n@import './colors';\n@import './gradients';\n@import './fonts';\n@import './mixins';\n@import './variables';\n@import './animations';\n\n*\n{\n    box-sizing: border-box;\n}\n\n// @media only screen and (min-width: 40em) {...} cellphone (640px and up)\n$breakpoint-small: 23.5;\n\n// @media only screen and (min-width: 48em) {...} tablet (768px and up)\n$breakpoint-medium: 48em;\n\n// @media only screen and (min-width: 80em) {...} desktop (1280px and up)\n$breakpoint-large: 80em;\n\n// // tablet\n// @media only screen and (min-width: $breakpoint-medium) {\n        \n// }\n\n// // desktop\n// @media only screen and (min-width: $breakpoint-large) {\n    \n//     flex-direction: row;\n// }\n","@use '../../global-styles/' as *;\n\n.ButtonGroup\n{\n    flex-grow: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: $spacing-lg;\n    align-items: center;\n\n    .Button:not(.Button.icon)\n    {\n        flex-grow: 1;\n    }\n\n    &.fluid\n    {\n        flex-grow: 1;\n    }\n\n    &.compact\n    {\n        gap: 0;\n\n        .Button\n        {\n            &:first-child\n            {\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n                border-right: 0;\n            }\n            &:not(:first-child, :last-child)\n            {\n                border-radius: 0;\n            }\n            &:last-child\n            {\n                border-top-left-radius: 0;\n                border-bottom-left-radius: 0;\n                border-left: 0;\n            }\n        }\n        \n    }\n}\n","$spacing-none: 0rem;\n$spacing-xxs: 0.125rem;\n$spacing-xs: 0.25rem;\n$spacing-sm: 0.375rem;\n$spacing-md: 0.5rem;\n$spacing-lg: 0.75rem;\n$spacing-xl: 1rem;\n$spacing-2xl: 1.25rem;\n$spacing-3xl: 1.5rem;\n$spacing-4xl: 2rem;\n$spacing-5xl: 2.5rem;\n$spacing-6xl: 3rem;\n$spacing-7xl: 4rem;\n$spacing-8xl: 5rem;\n$spacing-9xl: 6rem;\n$spacing-10xl: 8rem;\n$spacing-11xl: 10rem;\n\n$width-xxs: 20rem;\n$width-xs: 24rem;\n$width-sm: 30rem;\n$width-md: 35rem;\n$width-lg: 40rem;\n$width-xl: 48rem;\n$width-2xl: 64rem;\n$width-3xl: 80rem;\n$width-4xl: 90rem;\n$width-5xl: 100rem;\n$width-6xl: 120rem;\n\n$container-padding-mobile: 1rem;\n$container-padding-desktop: 2rem;\n$container-max-width-desktop: 80rem;\n\n$paragraph-max-width: 20rem;\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);