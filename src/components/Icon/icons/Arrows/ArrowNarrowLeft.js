import * as React from 'react';
const SvgArrowNarrowLeft = (props) => (
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
            d="M20 12H4m0 0 6 6m-6-6 6-6"
        />
    </svg>
);
export default SvgArrowNarrowLeft;
