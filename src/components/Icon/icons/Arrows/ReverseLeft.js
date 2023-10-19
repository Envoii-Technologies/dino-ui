import * as React from 'react';
const SvgReverseLeft = (props) => (
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
            d="M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4"
        />
    </svg>
);
export default SvgReverseLeft;
