import * as React from 'react';
const SvgDrop = (props) => (
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
            d="M20 14a8 8 0 1 1-15.418-3C5.768 8.068 12 2 12 2s6.232 6.068 7.419 9c.375.926.581 1.94.581 3Z"
        />
    </svg>
);
export default SvgDrop;
