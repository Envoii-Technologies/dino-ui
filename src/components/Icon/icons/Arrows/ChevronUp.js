import * as React from 'react';
const SvgChevronUp = (props) => (
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
            d="m18 15-6-6-6 6"
        />
    </svg>
);
export default SvgChevronUp;
