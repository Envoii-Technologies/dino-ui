import * as React from 'react';
const SvgCircleCut = (props) => (
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
            d="M7 20.662c2.989-1.729 5-4.96 5-8.662a9.996 9.996 0 0 0-5-8.662M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        />
    </svg>
);
export default SvgCircleCut;
