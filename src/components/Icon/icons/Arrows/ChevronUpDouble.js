import * as React from 'react';
const SvgChevronUpDouble = (props) => (
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
            d="m17 18-5-5-5 5m10-7-5-5-5 5"
        />
    </svg>
);
export default SvgChevronUpDouble;
