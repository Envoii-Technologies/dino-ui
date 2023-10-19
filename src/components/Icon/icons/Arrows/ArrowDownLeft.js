import * as React from 'react';
const SvgArrowDownLeft = (props) => (
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
            d="M17 7 7 17m0 0h10M7 17V7"
        />
    </svg>
);
export default SvgArrowDownLeft;
