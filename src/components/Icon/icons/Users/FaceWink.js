import * as React from 'react';
const SvgFaceWink = (props) => (
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
            d="M8 14s1.5 2 4 2 4-2 4-2m-1-5h.01M8 9h2m12 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.5-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        />
    </svg>
);
export default SvgFaceWink;
