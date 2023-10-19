import * as React from 'react';
const SvgArrowsDown = (props) => (
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
            d="M17 4v11m0 0-4-4m4 4 4-4M7 4v16m0 0-4-4m4 4 4-4"
        />
    </svg>
);
export default SvgArrowsDown;
