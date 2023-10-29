import * as React from 'react';
const SvgArrowUpLeft = (props) => (
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
            d="M17 17 7 7m0 0v10M7 7h10"
        />
    </svg>
);
export default SvgArrowUpLeft;
