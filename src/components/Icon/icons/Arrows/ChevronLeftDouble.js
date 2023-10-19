import * as React from 'react';
const SvgChevronLeftDouble = (props) => (
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
            d="m18 17-5-5 5-5m-7 10-5-5 5-5"
        />
    </svg>
);
export default SvgChevronLeftDouble;
