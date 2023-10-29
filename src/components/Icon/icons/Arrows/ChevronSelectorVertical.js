import * as React from 'react';
const SvgChevronSelectorVertical = (props) => (
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
            d="m7 15 5 5 5-5M7 9l5-5 5 5"
        />
    </svg>
);
export default SvgChevronSelectorVertical;
