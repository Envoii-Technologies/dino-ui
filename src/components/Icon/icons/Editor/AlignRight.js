import * as React from 'react';
const SvgAlignRight = (props) => (
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
            d="M21 10H8m13-4H4m17 8H4m17 4H8"
        />
    </svg>
);
export default SvgAlignRight;
