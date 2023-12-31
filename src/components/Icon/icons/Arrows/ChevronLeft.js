import * as React from 'react';
const SvgChevronLeft = (props) => (
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
            d="m15 18-6-6 6-6"
        />
    </svg>
);
export default SvgChevronLeft;
