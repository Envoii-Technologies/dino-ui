"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[8836],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Avatar/Avatar.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},customImage:function(){return customImage},customName:function(){return customName},defaultStory:function(){return defaultStory},example:function(){return example},largeImageSize:function(){return largeImageSize},letterFallback:function(){return letterFallback},mediumImageSize:function(){return mediumImageSize},smallImageSize:function(){return smallImageSize}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Avatar/Avatar.jsx"),_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/assets/images/testuser.png"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",em:"em",blockquote:"blockquote",strong:"strong"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_2__.q}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"A component representing a user, by showing the first letter his first and last name, or an image."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Example",args:{name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"large"},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"As default, the avatar components name property is set to Jane Doe, resulting in the shown letters J (fistname) and D (lastname)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"custom-name",children:"Custom Name"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"name"})," property can be set to a given name (a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"string"})," with 1, 2 or more words), resulting in the first letters of the first and last name being shown in the component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.em,{children:["In this example, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"name"})," prop is set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Max Mustermann"}),"."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"TIPP:"})," Said string should not contain more than two words, as the font will become smaller, to fit into the component shape, and at some point might have unwanted side-effects."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Name",args:{name:"Max Mustermann"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"letter-fallback",children:"Letter fallback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["If the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"name"})," property only contains a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"string"})," with one word, only one letter is shown in the component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.em,{children:["In this example, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"name"})," prop is set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Richard"}),"."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Letter fallback",args:{name:"Richard"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"image",children:"Image"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["If the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"image"})," property contains a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"string"})," containing the path to a user image, said imagewill be shown, instead of the above letter examples."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Image",args:{name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The size of the Avatar Component can be changed by passing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"medium"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"large"})," as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"string"})," to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"size"})," property, changing the size of the image to 40x40px, 80x80px and 109x109px respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Small Image Size",args:{name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"small"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Medium Image Size",args:{name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"medium"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Large Image Size",args:{name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"large"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Avatar__WEBPACK_IMPORTED_MODULE_2__.q}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"Note:"})," This component supplies a className property, to call the component with a custom class name, if it needs to be specifically adressed."]})]})}const example=Template.bind({});example.storyName="Example",example.args={name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"large"},example.parameters={storySource:{source:"args => <Avatar {...args} />"}};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <Avatar {...args} />"}};const customName=Template.bind({});customName.storyName="Custom Name",customName.args={name:"Max Mustermann"},customName.parameters={storySource:{source:"args => <Avatar {...args} />"}};const letterFallback=Template.bind({});letterFallback.storyName="Letter fallback",letterFallback.args={name:"Richard"},letterFallback.parameters={storySource:{source:"args => <Avatar {...args} />"}};const customImage=Template.bind({});customImage.storyName="Custom Image",customImage.args={name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__},customImage.parameters={storySource:{source:"args => <Avatar {...args} />"}};const smallImageSize=Template.bind({});smallImageSize.storyName="Small Image Size",smallImageSize.args={name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"small"},smallImageSize.parameters={storySource:{source:"args => <Avatar {...args} />"}};const mediumImageSize=Template.bind({});mediumImageSize.storyName="Medium Image Size",mediumImageSize.args={name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"medium"},mediumImageSize.parameters={storySource:{source:"args => <Avatar {...args} />"}};const largeImageSize=Template.bind({});largeImageSize.storyName="Large Image Size",largeImageSize.args={name:"Koray Uygun",image:_assets_images_testuser_png__WEBPACK_IMPORTED_MODULE_3__,size:"large"},largeImageSize.parameters={storySource:{source:"args => <Avatar {...args} />"}};const componentMeta={title:"Components/Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_2__.q,tags:["stories-mdx"],includeStories:["example","defaultStory","customName","letterFallback","customImage","smallImageSize","mediumImageSize","largeImageSize"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta}}]);