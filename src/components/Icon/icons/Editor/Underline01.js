import * as React from 'react';
const SvgUnderline01 = (props) => (
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
            d="M18 4v7a6 6 0 0 1-12 0V4M4 21h16"
        />
    </svg>
);
export default SvgUnderline01;
