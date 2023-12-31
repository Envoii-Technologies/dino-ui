import * as React from 'react';
const SvgCodeSnippet01 = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m16 18 6-6-6-6M8 6l-6 6 6 6"
        />
    </svg>
);
export default SvgCodeSnippet01;
