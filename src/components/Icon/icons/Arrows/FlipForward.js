import * as React from 'react';
const SvgFlipForward = (props) => (
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
            d="M21 9H7.5a4.5 4.5 0 1 0 0 9H12m9-9-4-4m4 4-4 4"
        />
    </svg>
);
export default SvgFlipForward;
