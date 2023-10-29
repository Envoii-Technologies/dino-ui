import * as React from 'react';
const SvgSlashDivider = (props) => (
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
            d="M7 22 17 2"
        />
    </svg>
);
export default SvgSlashDivider;
