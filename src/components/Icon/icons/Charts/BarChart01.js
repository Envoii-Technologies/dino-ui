import * as React from 'react';
const SvgBarChart01 = (props) => (
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
            d="M18 20V10m-6 10V4M6 20v-6"
        />
    </svg>
);
export default SvgBarChart01;
