import * as React from 'react';
const SvgPlus = (props) => (
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
            d="M12 5v14m-7-7h14"
        />
    </svg>
);
export default SvgPlus;