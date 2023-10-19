import * as React from 'react';
const SvgArrowNarrowUp = (props) => (
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
            d="M12 20V4m0 0-6 6m6-6 6 6"
        />
    </svg>
);
export default SvgArrowNarrowUp;
