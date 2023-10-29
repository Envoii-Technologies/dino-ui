import * as React from 'react';
const SvgAlignLeft = (props) => (
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
            d="M16 10H3m17-4H3m17 8H3m13 4H3"
        />
    </svg>
);
export default SvgAlignLeft;
