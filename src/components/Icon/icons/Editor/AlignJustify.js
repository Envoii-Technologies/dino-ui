import * as React from 'react';
const SvgAlignJustify = (props) => (
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
            d="M21 10H3m18 8H3M21 6H3m18 8H3"
        />
    </svg>
);
export default SvgAlignJustify;
