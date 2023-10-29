import * as React from 'react';
const SvgArrowNarrowUpRight = (props) => (
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
            d="M6 18 18 6m0 0h-8m8 0v8"
        />
    </svg>
);
export default SvgArrowNarrowUpRight;
