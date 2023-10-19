import * as React from 'react';
const SvgArrowNarrowUpLeft = (props) => (
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
            d="M18 18 6 6m0 0v8m0-8h8"
        />
    </svg>
);
export default SvgArrowNarrowUpLeft;
