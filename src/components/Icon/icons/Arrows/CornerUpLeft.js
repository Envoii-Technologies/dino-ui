import * as React from 'react';
const SvgCornerUpLeft = (props) => (
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
            d="M9 14 4 9m0 0 5-5M4 9h6.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C20 13.56 20 15.24 20 18.6V20"
        />
    </svg>
);
export default SvgCornerUpLeft;
