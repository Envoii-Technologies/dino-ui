import * as React from 'react';
const SvgArrowCircleDownRight = (props) => (
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
            d="M15 9v6m0 0H9m6 0L9 9m13 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        />
    </svg>
);
export default SvgArrowCircleDownRight;
