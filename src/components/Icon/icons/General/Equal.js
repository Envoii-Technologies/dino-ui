import * as React from 'react';
const SvgEqual = (props) => (
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
            d="M5 9h14M5 15h14"
        />
    </svg>
);
export default SvgEqual;
