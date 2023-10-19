import * as React from 'react';
const SvgTerminal = (props) => (
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
            d="m4 17 6-6-6-6m8 14h8"
        />
    </svg>
);
export default SvgTerminal;
