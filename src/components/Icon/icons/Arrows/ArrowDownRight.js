import * as React from 'react';
const SvgArrowDownRight = (props) => (
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
            d="m7 7 10 10m0 0V7m0 10H7"
        />
    </svg>
);
export default SvgArrowDownRight;
