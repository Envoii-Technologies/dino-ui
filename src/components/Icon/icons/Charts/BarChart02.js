import * as React from 'react';
const SvgBarChart02 = (props) => (
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
            d="M18 20V4M6 20v-4m6 4V10"
        />
    </svg>
);
export default SvgBarChart02;
