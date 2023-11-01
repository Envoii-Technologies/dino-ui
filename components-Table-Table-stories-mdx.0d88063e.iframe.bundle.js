"use strict";(self.webpackChunk_envoii_technologies_dino_ui=self.webpackChunk_envoii_technologies_dino_ui||[]).push([[6513],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(7587).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context:context,docsParameter:docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Table/Table.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},defaultStory:function(){return defaultStory},example:function(){return example},filtering:function(){return filtering},initialFilters:function(){return initialFilters},pagination:function(){return pagination},rowSelection:function(){return rowSelection},search:function(){return search},sorting:function(){return sorting},testData:function(){return testData},testDataColumns:function(){return testDataColumns}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Table/Table.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialFilters={city:"Dallas"},testDataColumns=[{id:"id",size:"50px",title:"ID",sortable:!0,type:"string"},{id:"name",size:"300px",title:"Name",sortable:!0,type:"user"},{id:"age",size:"200px",title:"Age",sortable:!1,type:"label"},{id:"city",size:"200px",title:"City",sortable:!0,type:"string"},{id:"time",size:"100px",title:"Time",sortable:!0,type:"time"}],testData=[{id:1,name:"John Doe",age:30,city:"New York",time:1698750424},{id:2,name:"Jane Smith",age:25,city:"Los Angeles",time:1134789426},{id:3,name:"Bob Johnson",age:35,city:"Chicago",time:1091761391},{id:4,name:"Alice Brown",age:28,city:"San Francisco",time:1618340216},{id:5,name:"Eva Wilson",age:32,city:"Seattle",time:1765311016},{id:6,name:"Michael Davis",age:40,city:"Boston",time:954840281},{id:7,name:"Emily White",age:27,city:"Dallas",time:1344134289},{id:8,name:"David Lee",age:31,city:"Dallas",time:1560148464},{id:9,name:"Linda Taylor",age:29,city:"Denver",time:1274941570},{id:10,name:"James Harris",age:45,city:"Atlanta",time:1572725582},{id:11,name:"Sophia Clark",age:33,city:"Phoenix",time:1881378438},{id:12,name:"William Hall",age:31,city:"Dallas",time:1859809531},{id:13,name:"Olivia Turner",age:26,city:"Portland",time:1383170047},{id:14,name:"Daniel Martinez",age:36,city:"San Diego",time:1869117739},{id:15,name:"Ava Anderson",age:34,city:"Las Vegas",time:1413985448},{id:16,name:"Joseph Young",age:39,city:"Minneapolis",time:1018073214},{id:17,name:"Mia Rodriguez",age:28,city:"Philadelphia",time:1588317411}],Template=args=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{display:"flex"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Table__WEBPACK_IMPORTED_MODULE_2__.i,{...args})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Table",component:_Table__WEBPACK_IMPORTED_MODULE_2__.i}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Example",args:{columns:testDataColumns,data:testData},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{columns:testDataColumns,data:testData},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"search",children:"Search"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'Example search value is "John"'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Search",args:{columns:testDataColumns,data:testData,searchValue:"John"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"sorting",children:"Sorting"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'The column "name" is set to be sorted ascending when table is loaded, for testing purposes, the column "age" can not be sorted.'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Sorting",args:{columns:testDataColumns,data:testData,initialSortedColumn:"name"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"filtering",children:"Filtering"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'the filter is set to only show rows with the "city" value "Dallas" and an age of "31"'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Filtering",args:{columns:testDataColumns,data:testData,initialFilters:{city:"Dallas",age:31}},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"pagination",children:"Pagination"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'Page size is set to "10", showing 10 rows per page.'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Pagination",args:{columns:testDataColumns,data:testData,pageSize:10},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"row-selection",children:"Row Selection"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Multiple rows can be selected by clicking the button at the far left side of the row, the button above the selection checkboxes selects all rows."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Row Selection",args:{columns:testDataColumns,data:testData,isSelectable:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Table__WEBPACK_IMPORTED_MODULE_2__.i})]})}const example=Template.bind({});example.storyName="Example",example.args={columns:testDataColumns,data:testData},example.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={columns:testDataColumns,data:testData},defaultStory.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const search=Template.bind({});search.storyName="Search",search.args={columns:testDataColumns,data:testData,searchValue:"John"},search.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const sorting=Template.bind({});sorting.storyName="Sorting",sorting.args={columns:testDataColumns,data:testData,initialSortedColumn:"name"},sorting.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const filtering=Template.bind({});filtering.storyName="Filtering",filtering.args={columns:testDataColumns,data:testData,initialFilters:{city:"Dallas",age:31}},filtering.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const pagination=Template.bind({});pagination.storyName="Pagination",pagination.args={columns:testDataColumns,data:testData,pageSize:10},pagination.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const rowSelection=Template.bind({});rowSelection.storyName="Row Selection",rowSelection.args={columns:testDataColumns,data:testData,isSelectable:!0},rowSelection.parameters={storySource:{source:'args => <div style={{\n  display: "flex"\n}}>\n    <Table {...args} /> // initialSortedColumn="id"\n  // // initialFilters={initialFilters}\n  // // searchValue="Willi"\n  // onFilterClick={() => alert(\'OK\')}\n  // data={}\n\n    </div>'}};const componentMeta={title:"Components/Table",component:_Table__WEBPACK_IMPORTED_MODULE_2__.i,tags:["stories-mdx"],includeStories:["example","defaultStory","search","sorting","filtering","pagination","rowSelection"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta}}]);