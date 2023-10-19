import * as React from 'react';
const SvgArrowLeft = (props) => (
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
            d="M19 12H5m0 0 7 7m-7-7 7-7"
        />
    </svg>
);
export default SvgArrowLeft;
