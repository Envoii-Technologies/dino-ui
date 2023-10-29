import * as React from 'react';
const SvgFilterLines = (props) => (
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
            d="M6 12h12M3 6h18M9 18h6"
        />
    </svg>
);
export default SvgFilterLines;
