import * as React from 'react';
const SvgAlignCenter = (props) => (
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
            d="M18 10H6m15-4H3m18 8H3m15 4H6"
        />
    </svg>
);
export default SvgAlignCenter;
