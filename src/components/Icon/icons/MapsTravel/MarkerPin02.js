import * as React from 'react';
const SvgMarkerPin02 = (props) => (
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
            d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 22c2-4 8-6.582 8-12a8 8 0 1 0-16 0c0 5.418 6 8 8 12Z"
        />
    </svg>
);
export default SvgMarkerPin02;
