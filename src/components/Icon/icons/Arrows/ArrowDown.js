import * as React from 'react';
const SvgArrowDown = (props) => (
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
            d="M12 5v14m0 0 7-7m-7 7-7-7"
        />
    </svg>
);
export default SvgArrowDown;
