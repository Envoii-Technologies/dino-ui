"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[7697],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(7587).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Badge/Badge.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},badgeWithCloseButton:function(){return badgeWithCloseButton},badgeWithCustomClass:function(){return badgeWithCustomClass},customBadge:function(){return customBadge},customColor:function(){return customColor},customnIconLeft:function(){return customnIconLeft},customnIconRight:function(){return customnIconRight},defaultStory:function(){return defaultStory},largeBadge:function(){return largeBadge},largePillBadge:function(){return largePillBadge},mediumBadge:function(){return mediumBadge},outlineBadge:function(){return outlineBadge},smallBadge:function(){return smallBadge},statusBadge:function(){return statusBadge}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/Badge.jsx"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.div,{style:{width:"400px",display:"flex"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.C,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.C,{...args})]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_2__.C}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Badge"})," component is a versatile element used for displaying labels, statuses, and other information in your application. It can be customized with different colors, sizes, and styles."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:['The "Default" example showcases a basic badge with default settings. It displays a small, gray badge with the label "Default Badge." This is a straightforward way to use the ',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Badge"})," component when no specific customizations are needed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{label:"Default Badge"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"custom-badge",children:"Custom Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'The "Custom Badge" example demonstrates how you can customize the appearance of the badge. In this case, we have a larger badge with a green "success" color. The pill style is turned off, and the badge has an outline. A "warning" status dot is also displayed.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Badge",args:{label:"Custom Badge",size:"lg",color:"success",pill:!1,outline:!0,status:"warning"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"color",children:"Color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"You can change the color of the badge to match your application's theme. In this example, we've set the color to \"brand\"."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Custom Color",args:{label:"Brand Badge",color:"brand"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"status-badge",children:"Status Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:['The "Status Badge" example demonstrates how you can use the ',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"status"}),' prop to indicate different statuses. Here, we\'ve set the status to "warning" to display a yellow status dot.']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Status Badge",args:{label:"Status Badge",status:"warning"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"outline-badge",children:"Outline Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To create an outlined badge, you can set the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"outline"})," prop to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"true"}),". This example showcases an outlined badge."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Outline Badge",args:{label:"Outline Badge",outline:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"badge-sizes",children:"Badge sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'You can adjust the size of the badge to make it larger if needed. In this example, we\'ve set the size to "lg" to create a larger badge.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Small Badge",args:{label:"Small Badge",size:"sm"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Medium Badge",args:{label:"Medium Badge",size:"md"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Large Badge",args:{label:"Large Badge",size:"lg"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"badge-with-close-button",children:"Badge with Close Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'In the "Badge with Close Button" example, we\'ve added a close button to the badge, enabling users to dismiss it. When the close button is clicked, an alert is triggered to indicate that the badge has been closed.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Badge with Close Button",args:{label:"Badge with Close",closable:!0,onClose:()=>alert("[NOT IMPLEMENTED]")},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"badge-with-custom-class",children:"Badge with Custom Class"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"This example showcases how you can apply a custom class name to the badge to apply additional styling or to integrate it seamlessly with your application's design. Here, we've applied the class \"custom-badge\" to the badge."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Badge with Custom Class",args:{label:"Custom Class Badge",className:"custom-badge"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"large-pill-badge",children:"Large Pill Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'The "Large Pill Badge" example demonstrates the creation of a large, pill-shaped badge with a distinct brand color. This type of badge can be useful for highlighting important information or actions in your application.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Large Pill Badge",args:{label:"Large Pill Badge",size:"lg",pill:!0,color:"brand"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"icon-badge",children:"Icon Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Customn Icon Left",args:{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.wp6,iconPosition:"left"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Customn Icon Right",args:{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.wp6,iconPosition:"right"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Badge__WEBPACK_IMPORTED_MODULE_2__.C})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={label:"Default Badge"},defaultStory.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const customBadge=Template.bind({});customBadge.storyName="Custom Badge",customBadge.args={label:"Custom Badge",size:"lg",color:"success",pill:!1,outline:!0,status:"warning"},customBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const customColor=Template.bind({});customColor.storyName="Custom Color",customColor.args={label:"Brand Badge",color:"brand"},customColor.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const statusBadge=Template.bind({});statusBadge.storyName="Status Badge",statusBadge.args={label:"Status Badge",status:"warning"},statusBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const outlineBadge=Template.bind({});outlineBadge.storyName="Outline Badge",outlineBadge.args={label:"Outline Badge",outline:!0},outlineBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const smallBadge=Template.bind({});smallBadge.storyName="Small Badge",smallBadge.args={label:"Small Badge",size:"sm"},smallBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const mediumBadge=Template.bind({});mediumBadge.storyName="Medium Badge",mediumBadge.args={label:"Medium Badge",size:"md"},mediumBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const largeBadge=Template.bind({});largeBadge.storyName="Large Badge",largeBadge.args={label:"Large Badge",size:"lg"},largeBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const badgeWithCloseButton=Template.bind({});badgeWithCloseButton.storyName="Badge with Close Button",badgeWithCloseButton.args={label:"Badge with Close",closable:!0,onClose:()=>alert("[NOT IMPLEMENTED]")},badgeWithCloseButton.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const badgeWithCustomClass=Template.bind({});badgeWithCustomClass.storyName="Badge with Custom Class",badgeWithCustomClass.args={label:"Custom Class Badge",className:"custom-badge"},badgeWithCustomClass.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const largePillBadge=Template.bind({});largePillBadge.storyName="Large Pill Badge",largePillBadge.args={label:"Large Pill Badge",size:"lg",pill:!0,color:"brand"},largePillBadge.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const customnIconLeft=Template.bind({});customnIconLeft.storyName="Customn Icon Left",customnIconLeft.args={icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.wp6,iconPosition:"left"},customnIconLeft.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const customnIconRight=Template.bind({});customnIconRight.storyName="Customn Icon Right",customnIconRight.args={icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.wp6,iconPosition:"right"},customnIconRight.parameters={storySource:{source:'args => <div style={{\n  width: "400px",\n  display: "flex"\n}}>\n  <Badge {...args} /><Badge {...args} />\n  </div>'}};const componentMeta={title:"Components/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_2__.C,tags:["stories-mdx"],includeStories:["defaultStory","customBadge","customColor","statusBadge","outlineBadge","smallBadge","mediumBadge","largeBadge","badgeWithCloseButton","badgeWithCustomClass","largePillBadge","customnIconLeft","customnIconRight"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta}}]);